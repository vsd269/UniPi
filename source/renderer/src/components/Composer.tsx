import { useEffect, useRef, useState } from 'react'
import {
  ArrowUp,
  AudioLines,
  FileCode2,
  FileText,
  Folder,
  Image,
  Paperclip,
  Square,
  X,
} from 'lucide-react'
import type {
  Attachment,
  MuseModel,
  Preferences,
  ProjectFile,
  ReasoningEffort,
} from '../../../shared/protocol'
import { IconButton } from './Primitives'
import { Select } from './Select'
import { composerCommands, parseComposerCommand } from '../commands'

const efforts: ReasoningEffort[] = [
  'none',
  'minimal',
  'low',
  'medium',
  'high',
  'xhigh',
  'max',
  'ultra',
]

export function Composer({
  draft,
  setDraft,
  running,
  backgroundOnly,
  submitting,
  connected,
  hasProject,
  project,
  models,
  modelId,
  preferences,
  onModel,
  onEffort,
  onSubmit,
  onCancel,
  onError,
}: {
  draft: string
  setDraft: (value: string) => void
  running: boolean
  backgroundOnly: boolean
  submitting: boolean
  connected: boolean
  hasProject: boolean
  project?: string
  models: MuseModel[]
  modelId: string
  preferences: Preferences
  onModel: (id: string) => void
  onEffort: (effort: ReasoningEffort) => void
  onSubmit: (attachments: Attachment[], mode: 'queue' | 'steer') => Promise<boolean>
  onCancel: () => void
  onError: (message: string) => void
}) {
  const voiceBusy = false
  const filePicker = useRef<HTMLInputElement>(null)
  const [uploading, setUploading] = useState(false)
  const attachmentsRef = useRef<Attachment[]>([])
  const [commandIndex, setCommandIndex] = useState(0)
  const [mentionIndex, setMentionIndex] = useState(0)
  const [mentionFiles, setMentionFiles] = useState<ProjectFile[]>([])
  const [dragging, setDragging] = useState(false)
  const suggestions = /^\/[a-z-]*$/i.test(draft)
    ? composerCommands.filter((command) => command.name.startsWith(draft.slice(1).toLowerCase()))
    : []
  const mentionMatch = project ? /(?:^|\s)@([^\s@]*)$/.exec(draft) : null
  const mentionToken = mentionMatch ? mentionMatch[1] : null
  const mentionDir =
    mentionToken && mentionToken.includes('/')
      ? mentionToken.slice(0, mentionToken.lastIndexOf('/'))
      : ''
  const mentionFilter =
    mentionToken !== null
      ? (mentionToken.includes('/')
          ? mentionToken.slice(mentionToken.lastIndexOf('/') + 1)
          : mentionToken
        ).toLowerCase()
      : ''
  useEffect(() => {
    if (!project || mentionToken === null) {
      setMentionFiles([])
      return
    }
    let cancelled = false
    void window.muse
      .listFiles(project, mentionDir)
      .then((entries) => {
        if (!cancelled) setMentionFiles(entries)
      })
      .catch(() => {
        if (!cancelled) setMentionFiles([])
      })
    return () => {
      cancelled = true
    }
  }, [project, mentionDir, mentionToken !== null])
  const mentionSuggestions =
    mentionToken !== null
      ? mentionFiles
          .filter((entry) => entry.name.toLowerCase().includes(mentionFilter))
          .slice(0, 12)
      : []
  const isCommand = Boolean(parseComposerCommand(draft))
  const chooseCommand = (name: string) => {
    setDraft(`/${name} `)
    textarea.current?.focus()
  }
  const chooseMention = (entry: ProjectFile) => {
    if (mentionToken === null) return
    const prefix = draft.slice(0, draft.length - mentionToken.length - 1)
    setDraft(`${prefix}@${entry.path}${entry.directory ? '/' : ' '}`)
    textarea.current?.focus()
  }
  useEffect(() => {
    setCommandIndex(0)
    setMentionIndex(0)
  }, [draft])
  const latestDraft = useRef(draft)
  latestDraft.current = draft
  const [attachments, setAttachments] = useState<Attachment[]>([])
  attachmentsRef.current = attachments
  const [mode, setMode] = useState<'queue' | 'steer'>('queue')
  const textarea = useRef<HTMLTextAreaElement>(null)
  useEffect(() => {
    if (textarea.current) {
      textarea.current.style.height = 'auto'
      textarea.current.style.height = `${Math.min(textarea.current.scrollHeight, 200)}px`
    }
  }, [draft])
  const submit = async () => {
    if (
      voiceBusy || uploading ||
      submitting ||
      (!connected && !isCommand) ||
      (!draft.trim() && !attachments.length)
    )
      return
    if (await onSubmit(attachments, mode)) setAttachments([])
  }
  const attach = async () => {
    try {
      filePicker.current?.click()
    } catch (error) {
      onError(error instanceof Error ? error.message : String(error))
    }
  }
  const addFiles = async (files: File[]) => {
    if (uploading || submitting) return
            try {
              setUploading(true)
              if (files.length > 5) throw new Error('每次最多选择 5 个文件。')
              if (attachmentsRef.current.length + files.filter(file => file.type.startsWith('image/')).length > 5) throw new Error('每条消息最多 5 张图片。')
              if (files.filter(file => !file.type.startsWith('image/')).reduce((sum, file) => sum + file.size, 0) > 120 * 1024) throw new Error('文本文件总大小不能超过 120 KB。')
              const parts: string[] = []
              for (const file of files) {
                if (/^image\/(png|jpeg|webp|gif)$/.test(file.type)) {
                  if (file.size > 10 * 1024 * 1024) throw new Error('单张图片最多 10 MB。')
                  const preview = await new Promise<string>((resolve,reject) => { const reader = new FileReader(); reader.onload = () => resolve(String(reader.result)); reader.onerror = () => reject(new Error('图片读取失败。')); reader.readAsDataURL(file) })
                  const encoded = preview.slice(preview.indexOf(',') + 1)
                  const upload = await window.muse.uploadImage({action:'begin',name:file.name,mimeType:file.type,size:file.size})
                  try {
                    for (let offset = 0; offset < encoded.length; offset += 60000) await window.muse.uploadImage({action:'chunk',id:upload.id,offset,chunk:encoded.slice(offset,offset+60000)})
                    await window.muse.uploadImage({action:'finish',id:upload.id})
                    setAttachments(current => [...current,{id:upload.id,name:file.name,size:file.size,kind:'image',preview}])
                  } catch (error) { await window.muse.removeAttachment(upload.id).catch(() => {}); throw error }
                  continue
                }
                if (!/\.(txt|md|csv|json|js|jsx|ts|tsx|py|css|html|xml|yaml|yml|toml|log|sh|ps1|sql|rs|go|java|c|h|cpp)$/i.test(file.name)) throw new Error('目前仅支持文本和代码文件，暂不支持图片或 PDF。')
                const text = await file.text()
                if (text.includes(String.fromCharCode(0))) throw new Error('不能添加二进制文件。')
                parts.push('文件：' + file.name + String.fromCharCode(10) + text)
              }
              if (parts.length) setDraft([latestDraft.current, ...parts].filter(Boolean).join(String.fromCharCode(10, 10)))
              textarea.current?.focus()
            } catch (error) { onError(error instanceof Error ? error.message : String(error)) } finally { setUploading(false) }
  }
  return (
    <div className="composer-wrap">
      {suggestions.length > 0 && (
        <div
          className="slash-menu"
          role="listbox"
          id="composer-commands"
          aria-label="Composer commands"
        >
          {suggestions.map((command, index) => (
            <button
              type="button"
              role="option"
              id={`command-${command.name}`}
              key={command.name}
              aria-selected={index === commandIndex}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => chooseCommand(command.name)}
            >
              <strong>/{command.name}</strong>
              <span>{command.description}</span>
            </button>
          ))}
        </div>
      )}
      {mentionSuggestions.length > 0 && (
        <div
          className="slash-menu mention-menu"
          role="listbox"
          id="composer-mentions"
          aria-label="Project files"
        >
          {mentionSuggestions.map((entry, index) => (
            <button
              type="button"
              role="option"
              id={`mention-${entry.path}`}
              key={entry.path}
              aria-selected={index === mentionIndex}
              onMouseDown={(event) => event.preventDefault()}
              onClick={() => chooseMention(entry)}
            >
              {entry.directory ? <Folder size={14} /> : <FileCode2 size={14} />}
              <strong>{entry.path}</strong>
              <span>{entry.directory ? 'Folder' : 'File'}</span>
            </button>
          ))}
        </div>
      )}
      <div className={`sidebar-collapse ${running ? 'open' : ''}`}>
        <div className="sidebar-collapse-inner">
          <div className="running-line">
            <span className="working-orb" />
            <span>
              {backgroundOnly ? 'Finishing background tasks' : 'Muse is working'}
              <span className="animated-dots">…</span>
            </span>
            <span className="running-hint">Send a follow-up to queue or steer.</span>
          </div>
        </div>
      </div>
      <form
        className={`composer ${running ? 'is-running' : ''} ${dragging ? 'is-dragging' : ''}`}
        onDragOver={(event) => {
          event.preventDefault()
          if (!dragging) setDragging(true)
        }}
        onDragLeave={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node)) setDragging(false)
        }}
        onDrop={(event) => {
          event.preventDefault()
          setDragging(false)
          const dropped = Array.from(event.dataTransfer.files)
          if (!dropped.length) return
          void addFiles(dropped)
        }}
        onSubmit={(event) => {
          event.preventDefault()
          void submit()
        }}
      >
        {attachments.length > 0 && (
          <div className="attachment-list">
            {attachments.map((file) => (
              <span className="attachment" key={file.id}>
                {file.preview ? <img src={file.preview} alt={file.name} style={{width:48,height:48,objectFit:'cover',borderRadius:6}} /> : file.kind === 'image' ? <Image size={14} /> : <FileText size={14} />}
                <span>{file.name}</span>
                <button
                  type="button"
                  aria-label={`Remove ${file.name}`}
                  onClick={() => {
                    void window.muse
                      .removeAttachment(file.id)
                      .catch((error: Error) => onError(error.message))
                    setAttachments((current) => current.filter((entry) => entry.id !== file.id))
                  }}
                >
                  <X size={12} />
                </button>
              </span>
            ))}
          </div>
        )}
        <textarea
          ref={textarea}
          onPaste={(event) => {
            const files = Array.from(event.clipboardData.files)
            if (!files.length) return
            event.preventDefault()
            void addFiles(files)
          }}
          aria-label="Message UniPi"
          aria-controls={suggestions.length ? 'composer-commands' : undefined}
          aria-activedescendant={
            suggestions[commandIndex] ? `command-${suggestions[commandIndex].name}` : undefined
          }
          placeholder={hasProject ? 'Ask UniPi about your project…' : 'Ask UniPi anything…'}
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          rows={2}
          spellCheck
          onKeyDown={(event) => {
            if (suggestions.length && !event.nativeEvent.isComposing) {
              if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                event.preventDefault()
                const next =
                  (commandIndex + (event.key === 'ArrowDown' ? 1 : -1) + suggestions.length) %
                  suggestions.length
                setCommandIndex(next)
                document
                  .getElementById(`command-${suggestions[next].name}`)
                  ?.scrollIntoView({ block: 'nearest' })
                return
              }
              if (
                event.key === 'Tab' ||
                (event.key === 'Enter' &&
                  !event.shiftKey &&
                  !composerCommands.some((entry) => `/${entry.name}` === draft.toLowerCase()))
              ) {
                event.preventDefault()
                chooseCommand(suggestions[commandIndex].name)
                return
              }
              if (event.key === 'Escape') {
                event.preventDefault()
                setDraft(`${draft} `)
                return
              }
            }
            if (mentionSuggestions.length && !event.nativeEvent.isComposing) {
              if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                event.preventDefault()
                const next =
                  (mentionIndex +
                    (event.key === 'ArrowDown' ? 1 : -1) +
                    mentionSuggestions.length) %
                  mentionSuggestions.length
                setMentionIndex(next)
                document
                  .getElementById(`mention-${mentionSuggestions[next].path}`)
                  ?.scrollIntoView({ block: 'nearest' })
                return
              }
              if (event.key === 'Tab' || (event.key === 'Enter' && !event.shiftKey)) {
                event.preventDefault()
                chooseMention(mentionSuggestions[mentionIndex])
                return
              }
              if (event.key === 'Escape') {
                event.preventDefault()
                setMentionFiles([])
                return
              }
            }
            if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) {
              event.preventDefault()
              void submit()
            }
          }}
        />
        <input ref={filePicker} type="file" multiple hidden
          accept="image/png,image/jpeg,image/webp,image/gif,.txt,.md,.csv,.json,.js,.jsx,.ts,.tsx,.py,.css,.html,.xml,.yaml,.yml,.toml,.log,.sh,.ps1,.sql,.rs,.go,.java,.c,.h,.cpp"
          onChange={async (event) => {
            const files = Array.from(event.currentTarget.files || [])
            event.currentTarget.value = ''
            await addFiles(files)
          }} />
        <div className="composer-toolbar">
          <div className="composer-tools">
            <IconButton
              label={uploading ? '正在上传图片…' : '添加图片、文本或代码文件'}
              disabled={submitting || uploading}
              onClick={() => {
                void attach()
              }}
            >
              <Paperclip size={17} />
            </IconButton>
            <span className="toolbar-divider" />
            <Select
              label="Model"
              className="model-select"
              value={modelId}
              disabled={submitting || models.length === 0}
              onChange={onModel}
              icon={<span className="model-spark">✳</span>}
              options={[
                ...(!models.some((model) => model.modelId === modelId)
                  ? [{ value: modelId, label: modelId || 'CLI default' }]
                  : []),
                ...models.map((model) => ({
                  value: model.modelId,
                  label: model.displayLabel || model.modelId,
                })),
              ]}
            />
            <Select
              label="Reasoning effort"
              className="effort-select"
              value={preferences.reasoningEffort}
              onChange={(value) => onEffort(value as ReasoningEffort)}
              icon={<AudioLines size={15} className="effort-icon" />}
              options={efforts.map((effort) => ({
                value: effort,
                label:
                  effort === 'xhigh' ? 'Extra high' : effort[0].toUpperCase() + effort.slice(1),
              }))}
            />
          </div>
          <div className="composer-actions">
            {running && (
              <>
                <Select
                  label="Follow-up behavior"
                  value={mode}
                  onChange={(value) => setMode(value as 'queue' | 'steer')}
                  options={[
                    { value: 'queue', label: 'Queue next' },
                    { value: 'steer', label: 'Steer now' },
                  ]}
                />
                <IconButton label="Stop Muse" onClick={onCancel}>
                  <Square size={14} fill="currentColor" />
                </IconButton>
              </>
            )}
            <button
              className="send-button"
              type="submit"
              aria-label={running ? 'Send follow-up' : 'Send message'}
              disabled={
                voiceBusy || uploading ||
                submitting ||
                (!connected && !isCommand) ||
                (!draft.trim() && !attachments.length)
              }
            >
              {submitting ? <span className="spinner" /> : <ArrowUp size={19} strokeWidth={2.2} />}
            </button>
          </div>
        </div>
      </form>
      <div className="composer-footnote">
        <span>{hasProject ? '' : 'Select a project when you send your first message.'}</span>
        <span className="composer-shortcuts">
          <span className="composer-shortcut">
            <kbd>↵</kbd>
            <span>Send</span>
          </span>
          <span className="footnote-dot" aria-hidden="true">
            ·
          </span>
          <span className="composer-shortcut">
            <kbd>⇧</kbd>
            <kbd>↵</kbd>
            <span>New line</span>
          </span>
        </span>
      </div>
    </div>
  )
}
