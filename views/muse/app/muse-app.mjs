function iv(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var xd = { exports: {} }, co = {};
var bb;
function lS() {
  if (bb) return co;
  bb = 1;
  var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.fragment");
  function a(o, s, c) {
    var f = null;
    if (c !== void 0 && (f = "" + c), s.key !== void 0 && (f = "" + s.key), "key" in s) {
      c = {};
      for (var p in s)
        p !== "key" && (c[p] = s[p]);
    } else c = s;
    return s = c.ref, {
      $$typeof: t,
      type: o,
      key: f,
      ref: s !== void 0 ? s : null,
      props: c
    };
  }
  return co.Fragment = i, co.jsx = a, co.jsxs = a, co;
}
var yb;
function oS() {
  return yb || (yb = 1, xd.exports = lS()), xd.exports;
}
var h = oS(), bd = { exports: {} }, Oe = {};
var vb;
function sS() {
  if (vb) return Oe;
  vb = 1;
  var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), a = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), c = /* @__PURE__ */ Symbol.for("react.consumer"), f = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), m = /* @__PURE__ */ Symbol.for("react.suspense"), g = /* @__PURE__ */ Symbol.for("react.memo"), b = /* @__PURE__ */ Symbol.for("react.lazy"), x = /* @__PURE__ */ Symbol.for("react.activity"), w = /* @__PURE__ */ Symbol.for("react.view_transition"), v = Symbol.iterator;
  function S(C) {
    return C === null || typeof C != "object" ? null : (C = v && C[v] || C["@@iterator"], typeof C == "function" ? C : null);
  }
  var j = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, E = Object.assign, O = {};
  function I(C, P, le) {
    this.props = C, this.context = P, this.refs = O, this.updater = le || j;
  }
  I.prototype.isReactComponent = {}, I.prototype.setState = function(C, P) {
    if (typeof C != "object" && typeof C != "function" && C != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, C, P, "setState");
  }, I.prototype.forceUpdate = function(C) {
    this.updater.enqueueForceUpdate(this, C, "forceUpdate");
  };
  function L() {
  }
  L.prototype = I.prototype;
  function V(C, P, le) {
    this.props = C, this.context = P, this.refs = O, this.updater = le || j;
  }
  var J = V.prototype = new L();
  J.constructor = V, E(J, I.prototype), J.isPureReactComponent = !0;
  var T = Array.isArray;
  function X() {
  }
  var pe = { H: null, A: null, T: null, S: null }, _e = Object.prototype.hasOwnProperty;
  function Z(C, P, le) {
    var xe = le.ref;
    return {
      $$typeof: t,
      type: C,
      key: P,
      ref: xe !== void 0 ? xe : null,
      props: le
    };
  }
  function te(C, P) {
    return Z(C.type, P, C.props);
  }
  function oe(C) {
    return typeof C == "object" && C !== null && C.$$typeof === t;
  }
  function Ne(C) {
    var P = { "=": "=0", ":": "=2" };
    return "$" + C.replace(/[=:]/g, function(le) {
      return P[le];
    });
  }
  var ue = /\/+/g;
  function ee(C, P) {
    return typeof C == "object" && C !== null && C.key != null ? Ne("" + C.key) : P.toString(36);
  }
  function W(C) {
    switch (C.status) {
      case "fulfilled":
        return C.value;
      case "rejected":
        throw C.reason;
      default:
        switch (typeof C.status == "string" ? C.then(X, X) : (C.status = "pending", C.then(
          function(P) {
            C.status === "pending" && (C.status = "fulfilled", C.value = P);
          },
          function(P) {
            C.status === "pending" && (C.status = "rejected", C.reason = P);
          }
        )), C.status) {
          case "fulfilled":
            return C.value;
          case "rejected":
            throw C.reason;
        }
    }
    throw C;
  }
  function de(C, P, le, xe, Te) {
    var $ = typeof C;
    ($ === "undefined" || $ === "boolean") && (C = null);
    var re = !1;
    if (C === null) re = !0;
    else
      switch ($) {
        case "bigint":
        case "string":
        case "number":
          re = !0;
          break;
        case "object":
          switch (C.$$typeof) {
            case t:
            case i:
              re = !0;
              break;
            case b:
              return re = C._init, de(
                re(C._payload),
                P,
                le,
                xe,
                Te
              );
          }
      }
    if (re)
      return Te = Te(C), re = xe === "" ? "." + ee(C, 0) : xe, T(Te) ? (le = "", re != null && (le = re.replace(ue, "$&/") + "/"), de(Te, P, le, "", function(Bt) {
        return Bt;
      })) : Te != null && (oe(Te) && (Te = te(
        Te,
        le + (Te.key == null || C && C.key === Te.key ? "" : ("" + Te.key).replace(
          ue,
          "$&/"
        ) + "/") + re
      )), P.push(Te)), 1;
    re = 0;
    var ce = xe === "" ? "." : xe + ":";
    if (T(C))
      for (var we = 0; we < C.length; we++)
        xe = C[we], $ = ce + ee(xe, we), re += de(
          xe,
          P,
          le,
          $,
          Te
        );
    else if (we = S(C), typeof we == "function")
      for (C = we.call(C), we = 0; !(xe = C.next()).done; )
        xe = xe.value, $ = ce + ee(xe, we++), re += de(
          xe,
          P,
          le,
          $,
          Te
        );
    else if ($ === "object") {
      if (typeof C.then == "function")
        return de(
          W(C),
          P,
          le,
          xe,
          Te
        );
      throw P = String(C), Error(
        "Objects are not valid as a React child (found: " + (P === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : P) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return re;
  }
  function ge(C, P, le) {
    if (C == null) return C;
    var xe = [], Te = 0;
    return de(C, xe, "", "", function($) {
      return P.call(le, $, Te++);
    }), xe;
  }
  function Ae(C) {
    if (C._status === -1) {
      var P = C._result, le = P();
      le.then(
        function(xe) {
          (C._status === 0 || C._status === -1) && (C._status = 1, C._result = xe, le.status === void 0 && (le.status = "fulfilled", le.value = xe));
        },
        function(xe) {
          (C._status === 0 || C._status === -1) && (C._status = 2, C._result = xe, le.status === void 0 && (le.status = "rejected", le.reason = xe));
        }
      ), C._status === -1 && (C._status = 0, C._result = le);
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var z = typeof reportError == "function" ? reportError : function(C) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var P = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof C == "object" && C !== null && typeof C.message == "string" ? String(C.message) : String(C),
        error: C
      });
      if (!window.dispatchEvent(P)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", C);
      return;
    }
    console.error(C);
  };
  function Ie(C) {
    var P = pe.T, le = {};
    le.types = P !== null ? P.types : null, pe.T = le;
    try {
      var xe = C(), Te = pe.S;
      Te !== null && Te(le, xe), typeof xe == "object" && xe !== null && typeof xe.then == "function" && xe.then(X, z);
    } catch ($) {
      z($);
    } finally {
      P !== null && le.types !== null && (P.types = le.types), pe.T = P;
    }
  }
  function ut(C) {
    var P = pe.T;
    if (P !== null) {
      var le = P.types;
      le === null ? P.types = [C] : le.indexOf(C) === -1 && le.push(C);
    } else Ie(ut.bind(null, C));
  }
  var N = {
    map: ge,
    forEach: function(C, P, le) {
      ge(
        C,
        function() {
          P.apply(this, arguments);
        },
        le
      );
    },
    count: function(C) {
      var P = 0;
      return ge(C, function() {
        P++;
      }), P;
    },
    toArray: function(C) {
      return ge(C, function(P) {
        return P;
      }) || [];
    },
    only: function(C) {
      if (!oe(C))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return C;
    }
  };
  return Oe.Activity = x, Oe.Children = N, Oe.Component = I, Oe.Fragment = a, Oe.Profiler = s, Oe.PureComponent = V, Oe.StrictMode = o, Oe.Suspense = m, Oe.ViewTransition = w, Oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = pe, Oe.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(C) {
      return pe.H.useMemoCache(C);
    }
  }, Oe.addTransitionType = ut, Oe.cache = function(C) {
    return function() {
      return C.apply(null, arguments);
    };
  }, Oe.cacheSignal = function() {
    return null;
  }, Oe.cloneElement = function(C, P, le) {
    if (C == null)
      throw Error(
        "The argument must be a React element, but you passed " + C + "."
      );
    var xe = E({}, C.props), Te = C.key;
    if (P != null)
      for ($ in P.key !== void 0 && (Te = "" + P.key), P)
        !_e.call(P, $) || $ === "key" || $ === "__self" || $ === "__source" || $ === "ref" && P.ref === void 0 || (xe[$] = P[$]);
    var $ = arguments.length - 2;
    if ($ === 1) xe.children = le;
    else if (1 < $) {
      for (var re = Array($), ce = 0; ce < $; ce++)
        re[ce] = arguments[ce + 2];
      xe.children = re;
    }
    return Z(C.type, Te, xe);
  }, Oe.createContext = function(C) {
    return C = {
      $$typeof: f,
      _currentValue: C,
      _currentValue2: C,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, C.Provider = C, C.Consumer = {
      $$typeof: c,
      _context: C
    }, C;
  }, Oe.createElement = function(C, P, le) {
    var xe, Te = {}, $ = null;
    if (P != null)
      for (xe in P.key !== void 0 && ($ = "" + P.key), P)
        _e.call(P, xe) && xe !== "key" && xe !== "__self" && xe !== "__source" && (Te[xe] = P[xe]);
    var re = arguments.length - 2;
    if (re === 1) Te.children = le;
    else if (1 < re) {
      for (var ce = Array(re), we = 0; we < re; we++)
        ce[we] = arguments[we + 2];
      Te.children = ce;
    }
    if (C && C.defaultProps)
      for (xe in re = C.defaultProps, re)
        Te[xe] === void 0 && (Te[xe] = re[xe]);
    return Z(C, $, Te);
  }, Oe.createRef = function() {
    return { current: null };
  }, Oe.forwardRef = function(C) {
    return { $$typeof: p, render: C };
  }, Oe.isValidElement = oe, Oe.lazy = function(C) {
    return {
      $$typeof: b,
      _payload: { _status: -1, _result: C },
      _init: Ae
    };
  }, Oe.memo = function(C, P) {
    return {
      $$typeof: g,
      type: C,
      compare: P === void 0 ? null : P
    };
  }, Oe.startTransition = Ie, Oe.unstable_useCacheRefresh = function() {
    return pe.H.useCacheRefresh();
  }, Oe.use = function(C) {
    return pe.H.use(C);
  }, Oe.useActionState = function(C, P, le) {
    return pe.H.useActionState(C, P, le);
  }, Oe.useCallback = function(C, P) {
    return pe.H.useCallback(C, P);
  }, Oe.useContext = function(C) {
    return pe.H.useContext(C);
  }, Oe.useDebugValue = function() {
  }, Oe.useDeferredValue = function(C, P) {
    return pe.H.useDeferredValue(C, P);
  }, Oe.useEffect = function(C, P) {
    return pe.H.useEffect(C, P);
  }, Oe.useEffectEvent = function(C) {
    return pe.H.useEffectEvent(C);
  }, Oe.useId = function() {
    return pe.H.useId();
  }, Oe.useImperativeHandle = function(C, P, le) {
    return pe.H.useImperativeHandle(C, P, le);
  }, Oe.useInsertionEffect = function(C, P) {
    return pe.H.useInsertionEffect(C, P);
  }, Oe.useLayoutEffect = function(C, P) {
    return pe.H.useLayoutEffect(C, P);
  }, Oe.useMemo = function(C, P) {
    return pe.H.useMemo(C, P);
  }, Oe.useOptimistic = function(C, P) {
    return pe.H.useOptimistic(C, P);
  }, Oe.useReducer = function(C, P, le) {
    return pe.H.useReducer(C, P, le);
  }, Oe.useRef = function(C) {
    return pe.H.useRef(C);
  }, Oe.useState = function(C) {
    return pe.H.useState(C);
  }, Oe.useSyncExternalStore = function(C, P, le) {
    return pe.H.useSyncExternalStore(
      C,
      P,
      le
    );
  }, Oe.useTransition = function() {
    return pe.H.useTransition();
  }, Oe.version = "19.3.0", Oe;
}
var wb;
function kp() {
  return wb || (wb = 1, bd.exports = sS()), bd.exports;
}
var G = kp(), yd = { exports: {} }, fo = {}, vd = { exports: {} }, wd = {};
var kb;
function uS() {
  return kb || (kb = 1, (function(t) {
    function i(W, de) {
      var ge = W.length;
      W.push(de);
      e: for (; 0 < ge; ) {
        var Ae = ge - 1 >>> 1, z = W[Ae];
        if (0 < s(z, de))
          W[Ae] = de, W[ge] = z, ge = Ae;
        else break e;
      }
    }
    function a(W) {
      return W.length === 0 ? null : W[0];
    }
    function o(W) {
      if (W.length === 0) return null;
      var de = W[0], ge = W.pop();
      if (ge !== de) {
        W[0] = ge;
        e: for (var Ae = 0, z = W.length, Ie = z >>> 1; Ae < Ie; ) {
          var ut = 2 * (Ae + 1) - 1, N = W[ut], C = ut + 1, P = W[C];
          if (0 > s(N, ge))
            C < z && 0 > s(P, N) ? (W[Ae] = P, W[C] = ge, Ae = C) : (W[Ae] = N, W[ut] = ge, Ae = ut);
          else if (C < z && 0 > s(P, ge))
            W[Ae] = P, W[C] = ge, Ae = C;
          else break e;
        }
      }
      return de;
    }
    function s(W, de) {
      var ge = W.sortIndex - de.sortIndex;
      return ge !== 0 ? ge : W.id - de.id;
    }
    if (t.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      t.unstable_now = function() {
        return c.now();
      };
    } else {
      var f = Date, p = f.now();
      t.unstable_now = function() {
        return f.now() - p;
      };
    }
    var m = [], g = [], b = 1, x = null, w = 3, v = !1, S = !1, j = !1, E = !1, O = typeof setTimeout == "function" ? setTimeout : null, I = typeof clearTimeout == "function" ? clearTimeout : null, L = typeof setImmediate < "u" ? setImmediate : null;
    function V(W) {
      for (var de = a(g); de !== null; ) {
        if (de.callback === null) o(g);
        else if (de.startTime <= W)
          o(g), de.sortIndex = de.expirationTime, i(m, de);
        else break;
        de = a(g);
      }
    }
    function J(W) {
      if (j = !1, V(W), !S)
        if (a(m) !== null)
          S = !0, T || (T = !0, oe());
        else {
          var de = a(g);
          de !== null && ee(J, de.startTime - W);
        }
    }
    var T = !1, X = -1, pe = 5, _e = -1;
    function Z() {
      return E ? !0 : !(t.unstable_now() - _e < pe);
    }
    function te() {
      if (E = !1, T) {
        var W = t.unstable_now();
        _e = W;
        var de = !0;
        try {
          e: {
            S = !1, j && (j = !1, I(X), X = -1), v = !0;
            var ge = w;
            try {
              t: {
                for (V(W), x = a(m); x !== null && !(x.expirationTime > W && Z()); ) {
                  var Ae = x.callback;
                  if (typeof Ae == "function") {
                    x.callback = null, w = x.priorityLevel;
                    var z = Ae(
                      x.expirationTime <= W
                    );
                    if (W = t.unstable_now(), typeof z == "function") {
                      x.callback = z, V(W), de = !0;
                      break t;
                    }
                    x === a(m) && o(m), V(W);
                  } else o(m);
                  x = a(m);
                }
                if (x !== null) de = !0;
                else {
                  var Ie = a(g);
                  Ie !== null && ee(
                    J,
                    Ie.startTime - W
                  ), de = !1;
                }
              }
              break e;
            } finally {
              x = null, w = ge, v = !1;
            }
            de = void 0;
          }
        } finally {
          de ? oe() : T = !1;
        }
      }
    }
    var oe;
    if (typeof L == "function")
      oe = function() {
        L(te);
      };
    else if (typeof MessageChannel < "u") {
      var Ne = new MessageChannel(), ue = Ne.port2;
      Ne.port1.onmessage = te, oe = function() {
        ue.postMessage(null);
      };
    } else
      oe = function() {
        O(te, 0);
      };
    function ee(W, de) {
      X = O(function() {
        W(t.unstable_now());
      }, de);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(W) {
      W.callback = null;
    }, t.unstable_forceFrameRate = function(W) {
      0 > W || 125 < W ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : pe = 0 < W ? Math.floor(1e3 / W) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return w;
    }, t.unstable_next = function(W) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var de = 3;
          break;
        default:
          de = w;
      }
      var ge = w;
      w = de;
      try {
        return W();
      } finally {
        w = ge;
      }
    }, t.unstable_requestPaint = function() {
      E = !0;
    }, t.unstable_runWithPriority = function(W, de) {
      switch (W) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          W = 3;
      }
      var ge = w;
      w = W;
      try {
        return de();
      } finally {
        w = ge;
      }
    }, t.unstable_scheduleCallback = function(W, de, ge) {
      var Ae = t.unstable_now();
      switch (typeof ge == "object" && ge !== null ? (ge = ge.delay, ge = typeof ge == "number" && 0 < ge ? Ae + ge : Ae) : ge = Ae, W) {
        case 1:
          var z = -1;
          break;
        case 2:
          z = 250;
          break;
        case 5:
          z = 1073741823;
          break;
        case 4:
          z = 1e4;
          break;
        default:
          z = 5e3;
      }
      return z = ge + z, W = {
        id: b++,
        callback: de,
        priorityLevel: W,
        startTime: ge,
        expirationTime: z,
        sortIndex: -1
      }, ge > Ae ? (W.sortIndex = ge, i(g, W), a(m) === null && W === a(g) && (j ? (I(X), X = -1) : j = !0, ee(J, ge - Ae))) : (W.sortIndex = z, i(m, W), S || v || (S = !0, T || (T = !0, oe()))), W;
    }, t.unstable_shouldYield = Z, t.unstable_wrapCallback = function(W) {
      var de = w;
      return function() {
        var ge = w;
        w = de;
        try {
          return W.apply(this, arguments);
        } finally {
          w = ge;
        }
      };
    };
  })(wd)), wd;
}
var Sb;
function cS() {
  return Sb || (Sb = 1, vd.exports = uS()), vd.exports;
}
var kd = { exports: {} }, Qt = {};
var zb;
function fS() {
  if (zb) return Qt;
  zb = 1;
  var t = kp();
  function i(b) {
    var x = "https://react.dev/errors/" + b;
    if (1 < arguments.length) {
      x += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var w = 2; w < arguments.length; w++)
        x += "&args[]=" + encodeURIComponent(arguments[w]);
    }
    return "Minified React error #" + b + "; visit " + x + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function a() {
  }
  var o = {
    d: {
      f: a,
      r: function() {
        throw Error(i(522));
      },
      D: a,
      C: a,
      L: a,
      m: a,
      X: a,
      S: a,
      M: a
    },
    p: 0,
    findDOMNode: null
  }, s = /* @__PURE__ */ Symbol.for("react.portal"), c = /* @__PURE__ */ Symbol.for("react.recoverable"), f = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function p(b, x, w) {
    var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: v == null ? null : v === f ? f : "" + v,
      children: b,
      containerInfo: x,
      implementation: w
    };
  }
  var m = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function g(b, x) {
    if (b === "font") return "";
    if (typeof x == "string")
      return x === "use-credentials" ? x : "";
  }
  return Qt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Qt.browser = function(b) {
    return { $$typeof: c, _reason: b };
  }, Qt.createPortal = function(b, x) {
    var w = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!x || x.nodeType !== 1 && x.nodeType !== 9 && x.nodeType !== 11)
      throw Error(i(299));
    return p(b, x, null, w);
  }, Qt.flushSync = function(b) {
    var x = m.T, w = o.p;
    try {
      if (m.T = null, o.p = 2, b) return b();
    } finally {
      m.T = x, o.p = w, o.d.f();
    }
  }, Qt.preconnect = function(b, x) {
    typeof b == "string" && (x ? (x = x.crossOrigin, x = typeof x == "string" ? x === "use-credentials" ? x : "" : void 0) : x = null, o.d.C(b, x));
  }, Qt.prefetchDNS = function(b) {
    typeof b == "string" && o.d.D(b);
  }, Qt.preinit = function(b, x) {
    if (typeof b == "string" && x && typeof x.as == "string") {
      var w = x.as, v = g(w, x.crossOrigin), S = typeof x.integrity == "string" ? x.integrity : void 0, j = typeof x.fetchPriority == "string" ? x.fetchPriority : void 0;
      w === "style" ? o.d.S(
        b,
        typeof x.precedence == "string" ? x.precedence : void 0,
        {
          crossOrigin: v,
          integrity: S,
          fetchPriority: j
        }
      ) : w === "script" && o.d.X(b, {
        crossOrigin: v,
        integrity: S,
        fetchPriority: j,
        nonce: typeof x.nonce == "string" ? x.nonce : void 0
      });
    }
  }, Qt.preinitModule = function(b, x) {
    if (typeof b == "string")
      if (typeof x == "object" && x !== null) {
        if (x.as == null || x.as === "script") {
          var w = g(
            x.as,
            x.crossOrigin
          );
          o.d.M(b, {
            crossOrigin: w,
            integrity: typeof x.integrity == "string" ? x.integrity : void 0,
            nonce: typeof x.nonce == "string" ? x.nonce : void 0,
            fetchPriority: typeof x.fetchPriority == "string" ? x.fetchPriority : void 0
          });
        }
      } else x == null && o.d.M(b);
  }, Qt.preload = function(b, x) {
    if (typeof b == "string" && typeof x == "object" && x !== null && typeof x.as == "string") {
      var w = x.as, v = g(w, x.crossOrigin);
      o.d.L(b, w, {
        crossOrigin: v,
        integrity: typeof x.integrity == "string" ? x.integrity : void 0,
        nonce: typeof x.nonce == "string" ? x.nonce : void 0,
        type: typeof x.type == "string" ? x.type : void 0,
        fetchPriority: typeof x.fetchPriority == "string" ? x.fetchPriority : void 0,
        referrerPolicy: typeof x.referrerPolicy == "string" ? x.referrerPolicy : void 0,
        imageSrcSet: typeof x.imageSrcSet == "string" ? x.imageSrcSet : void 0,
        imageSizes: typeof x.imageSizes == "string" ? x.imageSizes : void 0,
        media: typeof x.media == "string" ? x.media : void 0
      });
    }
  }, Qt.preloadModule = function(b, x) {
    if (typeof b == "string")
      if (x) {
        var w = g(x.as, x.crossOrigin);
        o.d.m(b, {
          as: typeof x.as == "string" && x.as !== "script" ? x.as : void 0,
          crossOrigin: w,
          integrity: typeof x.integrity == "string" ? x.integrity : void 0,
          nonce: typeof x.nonce == "string" ? x.nonce : void 0,
          fetchPriority: typeof x.fetchPriority == "string" ? x.fetchPriority : void 0
        });
      } else o.d.m(b);
  }, Qt.requestFormReset = function(b) {
    o.d.r(b);
  }, Qt.unstable_batchedUpdates = function(b, x) {
    return b(x);
  }, Qt.useFormState = function(b, x, w) {
    return m.H.useFormState(b, x, w);
  }, Qt.useFormStatus = function() {
    return m.H.useHostTransitionStatus();
  }, Qt.version = "19.3.0", Qt;
}
var _b;
function dS() {
  if (_b) return kd.exports;
  _b = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (i) {
        console.error(i);
      }
  }
  return t(), kd.exports = fS(), kd.exports;
}
var jb;
function pS() {
  if (jb) return fo;
  jb = 1;
  var t = cS(), i = kp(), a = dS();
  function o(e) {
    var n = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var r = 2; r < arguments.length; r++)
        n += "&args[]=" + encodeURIComponent(arguments[r]);
    }
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function c(e) {
    for (var n = e, r = n; r && !r.alternate; )
      n = r, (n.flags & 4098) !== 0 && (e = n.return), r = n.return;
    for (; n.return; ) n = n.return;
    return n.tag === 3 ? e : null;
  }
  function f(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (e.tag === 31) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (c(e) !== e)
      throw Error(o(188));
  }
  function g(e) {
    var n = e.alternate;
    if (!n) {
      if (n = c(e), n === null) throw Error(o(188));
      return n !== e ? null : e;
    }
    for (var r = e, l = n; ; ) {
      var u = r.return;
      if (u === null) break;
      var d = u.alternate;
      if (d === null) {
        if (l = u.return, l !== null) {
          r = l;
          continue;
        }
        break;
      }
      if (u.child === d.child) {
        for (d = u.child; d; ) {
          if (d === r) return m(u), e;
          if (d === l) return m(u), n;
          d = d.sibling;
        }
        throw Error(o(188));
      }
      if (r.return !== l.return) r = u, l = d;
      else {
        for (var y = !1, k = u.child; k; ) {
          if (k === r) {
            y = !0, r = u, l = d;
            break;
          }
          if (k === l) {
            y = !0, l = u, r = d;
            break;
          }
          k = k.sibling;
        }
        if (!y) {
          for (k = d.child; k; ) {
            if (k === r) {
              y = !0, r = d, l = u;
              break;
            }
            if (k === l) {
              y = !0, l = d, r = u;
              break;
            }
            k = k.sibling;
          }
          if (!y) throw Error(o(189));
        }
      }
      if (r.alternate !== l) throw Error(o(190));
    }
    if (r.tag !== 3) throw Error(o(188));
    return r.stateNode.current === r ? e : n;
  }
  function b(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (n = b(e), n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  function x(e, n, r, l, u, d) {
    for (; e !== null; ) {
      if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && r(e, l, u, d) || (e.tag !== 22 || e.memoizedState === null) && (n || e.tag !== 5 && e.tag !== 27) && x(
        e.child,
        n,
        r,
        l,
        u,
        d
      ))
        return !0;
      e = e.sibling;
    }
    return !1;
  }
  function w(e) {
    for (e = e.return; e !== null; ) {
      if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
      e = e.return;
    }
    return null;
  }
  function v(e) {
    var n = !1;
    for (e = e.return; e !== null && (e.tag === 4 && (n = !0), !(e.tag === 3 || e.tag === 5 || e.tag === 27)); )
      e = e.return;
    return n;
  }
  function S(e) {
    var n = [null, null], r = w(e);
    return r === null || j(
      n,
      e,
      r.child,
      { foundSelf: !1 }
    ), n;
  }
  function j(e, n, r, l) {
    for (; r !== null; ) {
      if (r === n) l.foundSelf = !0;
      else if (r.tag === 5 || r.tag === 27 || r.tag === 6) {
        if (l.foundSelf) return e[1] = r, !0;
        e[0] = r;
      } else if ((r.tag !== 22 || r.memoizedState === null) && j(
        e,
        n,
        r.child,
        l
      ))
        return !0;
      r = r.sibling;
    }
    return !1;
  }
  function E(e) {
    switch (e.tag) {
      case 5:
      case 27:
      case 6:
        return e.stateNode;
      case 3:
        return e.stateNode.containerInfo;
      default:
        throw Error(o(559));
    }
  }
  var O = null, I = null;
  function L(e, n, r) {
    return e === r ? !0 : e === n ? (O = e, !0) : !1;
  }
  function V(e, n, r) {
    return e === r ? (I = e, !1) : e === n ? (I !== null && (O = e), !0) : !1;
  }
  function J(e) {
    if (e === null) return null;
    do
      e = e === null ? null : e.return;
    while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
    return e || null;
  }
  function T(e, n, r) {
    for (var l = 0, u = e; u; u = r(u)) l++;
    u = 0;
    for (var d = n; d; d = r(d)) u++;
    for (; 0 < l - u; ) e = r(e), l--;
    for (; 0 < u - l; ) n = r(n), u--;
    for (; l--; ) {
      if (e === n || n !== null && e === n.alternate)
        return e;
      e = r(e), n = r(n);
    }
    return null;
  }
  var X = Object.assign, pe = /* @__PURE__ */ Symbol.for("react.element"), _e = /* @__PURE__ */ Symbol.for("react.transitional.element"), Z = /* @__PURE__ */ Symbol.for("react.portal"), te = /* @__PURE__ */ Symbol.for("react.fragment"), oe = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ne = /* @__PURE__ */ Symbol.for("react.profiler"), ue = /* @__PURE__ */ Symbol.for("react.consumer"), ee = /* @__PURE__ */ Symbol.for("react.context"), W = /* @__PURE__ */ Symbol.for("react.forward_ref"), de = /* @__PURE__ */ Symbol.for("react.suspense"), ge = /* @__PURE__ */ Symbol.for("react.suspense_list"), Ae = /* @__PURE__ */ Symbol.for("react.memo"), z = /* @__PURE__ */ Symbol.for("react.lazy"), Ie = /* @__PURE__ */ Symbol.for("react.activity"), ut = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), N = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), C = /* @__PURE__ */ Symbol.for("react.view_transition"), P = /* @__PURE__ */ Symbol.for("react.recoverable"), le = Symbol.iterator;
  function xe(e) {
    return e === null || typeof e != "object" ? null : (e = le && e[le] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Te = /* @__PURE__ */ Symbol.for("react.client.reference");
  function $(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Te ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case te:
        return "Fragment";
      case Ne:
        return "Profiler";
      case oe:
        return "StrictMode";
      case de:
        return "Suspense";
      case ge:
        return "SuspenseList";
      case Ie:
        return "Activity";
      case C:
        return "ViewTransition";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Z:
          return "Portal";
        case ee:
          return e.displayName || "Context";
        case ue:
          return (e._context.displayName || "Context") + ".Consumer";
        case W:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Ae:
          return n = e.displayName || null, n !== null ? n : $(e.type) || "Memo";
        case z:
          n = e._payload, e = e._init;
          try {
            return $(e(n));
          } catch {
          }
      }
    return null;
  }
  var re = Array.isArray, ce = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, we = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Bt = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Sn = [], zn = -1;
  function dt(e) {
    return { current: e };
  }
  function qe(e) {
    0 > zn || (e.current = Sn[zn], Sn[zn] = null, zn--);
  }
  function Ge(e, n) {
    zn++, Sn[zn] = e.current, e.current = n;
  }
  var Nt = dt(null), li = dt(null), It = dt(null), oi = dt(null);
  function si(e, n) {
    switch (Ge(It, n), Ge(li, e), Ge(Nt, null), n.nodeType) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? Ex(e) : 0;
        break;
      default:
        if (e = n.tagName, n = n.namespaceURI)
          n = Ex(n), e = Cx(n, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    qe(Nt), Ge(Nt, e);
  }
  function Ht() {
    qe(Nt), qe(li), qe(It);
  }
  function ui(e) {
    var n = e.memoizedState;
    n !== null && (ol._currentValue = n.memoizedState, Ge(oi, e)), n = Nt.current;
    var r = Cx(n, e.type);
    n !== r && (Ge(li, e), Ge(Nt, r));
  }
  function tr(e) {
    li.current === e && (qe(Nt), qe(li)), oi.current === e && (qe(oi), ol._currentValue = Bt);
  }
  var Y, ne;
  function be(e) {
    if (Y === void 0)
      try {
        throw Error();
      } catch (r) {
        var n = r.stack.trim().match(/\n( *(at )?)/);
        Y = n && n[1] || "", ne = -1 < r.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < r.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Y + e + ne;
  }
  var je = !1;
  function xt(e, n) {
    if (!e || je) return "";
    je = !0;
    var r = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var Q = function() {
                throw Error();
              };
              if (Object.defineProperty(Q.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(Q, []);
                } catch (fe) {
                  var D = fe;
                }
                Reflect.construct(e, [], Q);
              } else {
                try {
                  Q.call();
                } catch (fe) {
                  D = fe;
                }
                Q = !1;
                try {
                  var H = Object.getOwnPropertyDescriptor(
                    e.prototype,
                    "props"
                  );
                  Object.defineProperty(e.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), Q = !0, new e();
                } finally {
                  Q && (H !== void 0 ? Object.defineProperty(e.prototype, "props", H) : delete e.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (fe) {
                D = fe;
              }
              (Q = e()) && typeof Q.catch == "function" && Q.catch(function() {
              });
            }
          } catch (fe) {
            if (fe && D && typeof fe.stack == "string")
              return [fe.stack, D.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var d = l.DetermineComponentFrameRoot(), y = d[0], k = d[1];
      if (y && k) {
        var _ = y.split(`
`), R = k.split(`
`);
        for (u = l = 0; l < _.length && !_[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; u < R.length && !R[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (l === _.length || u === R.length)
          for (l = _.length - 1, u = R.length - 1; 1 <= l && 0 <= u && _[l] !== R[u]; )
            u--;
        for (; 1 <= l && 0 <= u; l--, u--)
          if (_[l] !== R[u]) {
            if (l !== 1 || u !== 1)
              do
                if (l--, u--, 0 > u || _[l] !== R[u]) {
                  var q = `
` + _[l].replace(" at new ", " at ");
                  return e.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", e.displayName)), q;
                }
              while (1 <= l && 0 <= u);
            break;
          }
      }
    } finally {
      je = !1, Error.prepareStackTrace = r;
    }
    return (r = e ? e.displayName || e.name : "") ? be(r) : "";
  }
  function Qe(e, n) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return be(e.type);
      case 16:
        return be("Lazy");
      case 13:
        return e.child !== n && n !== null ? be("Suspense Fallback") : be("Suspense");
      case 19:
        return be("SuspenseList");
      case 0:
      case 15:
        return xt(e.type, !1);
      case 11:
        return xt(e.type.render, !1);
      case 1:
        return xt(e.type, !0);
      case 31:
        return be("Activity");
      case 30:
        return be("ViewTransition");
      default:
        return "";
    }
  }
  function bt(e) {
    try {
      var n = "", r = null;
      do
        n += Qe(e, r), r = e, e = e.return;
      while (e);
      return n;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var St = Object.prototype.hasOwnProperty, In = t.unstable_scheduleCallback, zt = t.unstable_cancelCallback, ci = t.unstable_shouldYield, ya = t.unstable_requestPaint, Ue = t.unstable_now, Ot = t.unstable_getCurrentPriorityLevel, Kt = t.unstable_ImmediatePriority, Dt = t.unstable_UserBlockingPriority, nr = t.unstable_NormalPriority, Uo = t.unstable_LowPriority, fi = t.unstable_IdlePriority, _n = t.log, Ai = t.unstable_setDisableYieldValue, Oi = null, Jt = null;
  function di(e) {
    if (typeof _n == "function" && Ai(e), Jt && typeof Jt.setStrictMode == "function")
      try {
        Jt.setStrictMode(Oi, e);
      } catch {
      }
  }
  var rn = Math.clz32 ? Math.clz32 : Di, Lo = Math.log, $u = Math.LN2;
  function Di(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Lo(e) / $u | 0) | 0;
  }
  var Mi = 256, va = 262144, Ri = 4194304;
  function U(e) {
    var n = e & 42;
    if (n !== 0) return n;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & -e;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function ae(e, n, r) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var u = 0, d = e.suspendedLanes, y = e.pingedLanes;
    e = e.warmLanes;
    var k = l & 134217727;
    return k !== 0 ? (l = k & ~d, l !== 0 ? u = U(l) : (y &= k, y !== 0 ? u = U(y) : r || (r = k & ~e, r !== 0 && (u = U(r))))) : (k = l & ~d, k !== 0 ? u = U(k) : y !== 0 ? u = U(y) : r || (r = l & ~e, r !== 0 && (u = U(r)))), u === 0 ? 0 : n !== 0 && n !== u && (n & d) === 0 && (d = u & -u, r = n & -n, d >= r || d === 32 && (r & 4194048) !== 0) ? n : u;
  }
  function he(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function ve(e, n) {
    (n & 8) !== 0 && (n |= n & 32);
    var r = e.entangledLanes;
    if (r !== 0)
      for (e = e.entanglements, r &= n; 0 < r; ) {
        var l = 31 - rn(r), u = 1 << l;
        n |= e[l], r &= ~u;
      }
    return n;
  }
  function Wt(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Zt() {
    var e = Ri;
    return Ri <<= 1, (Ri & 62914560) === 0 && (Ri = 4194304), e;
  }
  function an(e) {
    for (var n = [], r = 0; 31 > r; r++) n.push(e);
    return n;
  }
  function pi(e, n) {
    e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Vu(e, n, r, l, u, d) {
    var y = e.pendingLanes;
    e.pendingLanes = r, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= r, e.entangledLanes &= r, e.errorRecoveryDisabledLanes &= r, e.shellSuspendCounter = 0;
    var k = e.entanglements, _ = e.expirationTimes, R = e.hiddenUpdates;
    for (r = y & ~r; 0 < r; ) {
      var q = 31 - rn(r), Q = 1 << q;
      k[q] = 0, _[q] = -1;
      var D = R[q];
      if (D !== null)
        for (R[q] = null, q = 0; q < D.length; q++) {
          var H = D[q];
          H !== null && (H.lane &= -536870913);
        }
      r &= ~Q;
    }
    l !== 0 && Pe(e, l, 0), d !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= d & ~(y & ~n));
  }
  function Pe(e, n, r) {
    e.pendingLanes |= n, e.suspendedLanes &= ~n;
    var l = 31 - rn(n);
    e.entangledLanes |= n, e.entanglements[l] = e.entanglements[l] | 1073741824 | r & 261930;
  }
  function qt(e, n) {
    var r = e.entangledLanes |= n;
    for (e = e.entanglements; r; ) {
      var l = 31 - rn(r), u = 1 << l;
      u & n | e[l] & n && (e[l] |= n), r &= ~u;
    }
  }
  function ln(e, n) {
    var r = n & -n;
    return r = (r & 42) !== 0 ? 1 : Br(r), (r & (e.suspendedLanes | n)) !== 0 ? 0 : r;
  }
  function Br(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Yu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function rh() {
    var e = we.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : fb(e.type));
  }
  function ah(e, n) {
    var r = we.p;
    try {
      return we.p = e, n();
    } finally {
      we.p = r;
    }
  }
  var Ui = Math.random().toString(36).slice(2), $t = "__reactFiber$" + Ui, hn = "__reactProps$" + Ui, wa = "__reactContainer$" + Ui, lh = "__reactEvents$" + Ui, kw = "__reactListeners$" + Ui, Sw = "__reactHandles$" + Ui, oh = "__reactResources$" + Ui, vl = "__reactMarker$" + Ui, Bo = "__reactLoad$" + Ui;
  function Io(e) {
    delete e[$t], delete e[hn], delete e[kw], delete e[Sw];
  }
  function Ir(e) {
    var n;
    if (n = e[$t]) return n;
    for (var r = e.parentNode; r; ) {
      if (n = r[wa] || r[$t]) {
        if (r = n.alternate, n.child !== null || r !== null && r.child !== null)
          for (e = Yx(e); e !== null; ) {
            if (r = e[$t]) return r;
            e = Yx(e);
          }
        return n;
      }
      e = r, r = e.parentNode;
    }
    return null;
  }
  function ka(e) {
    if (e = e[$t] || e[wa]) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
        return e;
    }
    return null;
  }
  function wl(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Sa(e) {
    var n = e[oh];
    return n || (n = e[oh] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Mt(e) {
    e[vl] = !0;
  }
  function sh(e) {
    e[Bo] = void 0;
  }
  var uh = /* @__PURE__ */ new Set(), ch = {};
  function Hr(e, n) {
    za(e, n), za(e + "Capture", n);
  }
  function za(e, n) {
    for (ch[e] = n, e = 0; e < n.length; e++)
      uh.add(n[e]);
  }
  var zw = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), fh = {}, dh = {};
  function _w(e) {
    return St.call(dh, e) ? !0 : St.call(fh, e) ? !1 : zw.test(e) ? dh[e] = !0 : (fh[e] = !0, !1);
  }
  var Fe = !1;
  function ph() {
    var e = Fe;
    return Fe = !1, e;
  }
  function Ho(e, n, r) {
    if (_w(n))
      if (r === null) e.removeAttribute(n);
      else {
        switch (typeof r) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(n);
            return;
          case "boolean":
            var l = n.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(n);
              return;
            }
        }
        e.setAttribute(n, r);
      }
  }
  function Zo(e, n, r) {
    if (r === null) e.removeAttribute(n);
    else {
      switch (typeof r) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttribute(n, r);
    }
  }
  function Li(e, n, r, l) {
    if (l === null) e.removeAttribute(r);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(r);
          return;
      }
      e.setAttributeNS(n, r, l);
    }
  }
  function jn(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function hh(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function jw(e, n, r) {
    var l = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      n
    );
    if (!e.hasOwnProperty(n) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var u = l.get, d = l.set;
      return Object.defineProperty(e, n, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(y) {
          r = "" + y, d.call(this, y);
        }
      }), Object.defineProperty(e, n, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return r;
        },
        setValue: function(y) {
          r = "" + y;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[n];
        }
      };
    }
  }
  function Gu(e) {
    if (!e._valueTracker) {
      var n = hh(e) ? "checked" : "value";
      e._valueTracker = jw(
        e,
        n,
        "" + e[n]
      );
    }
  }
  function mh(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var r = n.getValue(), l = "";
    return e && (l = hh(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== r ? (n.setValue(e), !0) : !1;
  }
  var Ew = /[\n"\\]/g;
  function Hn(e) {
    return e.replace(
      Ew,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Fu(e, n, r, l, u, d, y, k) {
    e.name = "", y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.type = y : e.removeAttribute("type"), n != null ? y === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + jn(n)) : e.value !== "" + jn(n) && (e.value = "" + jn(n)) : y !== "submit" && y !== "reset" || e.removeAttribute("value"), n != null ? y === "number" && e.value == n ? Xu(e, jn(e.value)) : Xu(e, jn(n)) : r != null ? Xu(e, jn(r)) : l != null && e.removeAttribute("value"), u == null && d != null && (e.defaultChecked = !!d), u != null && (e.checked = u && typeof u != "function" && typeof u != "symbol"), k != null && typeof k != "function" && typeof k != "symbol" && typeof k != "boolean" ? e.name = "" + jn(k) : e.removeAttribute("name");
  }
  function gh(e, n, r, l, u, d, y, k) {
    if (d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.type = d), n != null || r != null) {
      if (!(d !== "submit" && d !== "reset" || n != null)) {
        Gu(e);
        return;
      }
      r = r != null ? "" + jn(r) : "", n = n != null ? "" + jn(n) : r, k || n === e.value || (e.value = n), e.defaultValue = n;
    }
    l = l ?? u, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = k ? e.checked : !!l, e.defaultChecked = !!l, y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (e.name = y), Gu(e);
  }
  function Xu(e, n) {
    e.defaultValue !== "" + n && (e.defaultValue = "" + n);
  }
  function _a(e, n, r, l) {
    if (e = e.options, n) {
      n = {};
      for (var u = 0; u < r.length; u++)
        n["$" + r[u]] = !0;
      for (r = 0; r < e.length; r++)
        u = n.hasOwnProperty("$" + e[r].value), e[r].selected !== u && (e[r].selected = u), u && l && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + jn(r), n = null, u = 0; u < e.length; u++) {
        if (e[u].value === r) {
          e[u].selected = !0, l && (e[u].defaultSelected = !0);
          return;
        }
        n !== null || e[u].disabled || (n = e[u]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function xh(e, n, r) {
    if (n != null && (n = "" + jn(n), n !== e.value && (e.value = n), r == null)) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = r != null ? "" + jn(r) : "";
  }
  function bh(e, n, r, l) {
    if (n == null) {
      if (l != null) {
        if (r != null) throw Error(o(92));
        if (re(l)) {
          if (1 < l.length) throw Error(o(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), n = r;
    }
    r = jn(n), e.defaultValue = r, l = e.textContent, l === r && l !== "" && l !== null && (e.value = l), Gu(e);
  }
  function ja(e, n) {
    if (n) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Cw = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function yh(e, n, r) {
    var l = n.indexOf("--") === 0;
    r == null || typeof r == "boolean" || r === "" ? l ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : l ? e.setProperty(n, r) : typeof r != "number" || r === 0 || Cw.has(n) ? n === "float" ? e.cssFloat = r : e[n] = ("" + r).trim() : e[n] = r + "px";
  }
  function vh(e, n, r) {
    if (n != null && typeof n != "object")
      throw Error(o(62));
    if (e = e.style, r != null) {
      for (var l in r)
        !r.hasOwnProperty(l) || n != null && n.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "", Fe = !0);
      for (var u in n)
        l = n[u], n.hasOwnProperty(u) && r[u] !== l && (yh(e, u, l), Fe = !0);
    } else
      for (var d in n)
        n.hasOwnProperty(d) && yh(e, d, n[d]);
  }
  function Qu(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Tw = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["maskType", "mask-type"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Nw = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function qo(e) {
    return Nw.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function hi() {
  }
  var Pu = null;
  function Ku(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ea = null, Ca = null;
  function wh(e) {
    var n = ka(e);
    if (n && (e = n.stateNode)) {
      var r = e[hn] || null;
      e: switch (e = n.stateNode, n.type) {
        case "input":
          if (Fu(
            e,
            r.value,
            r.defaultValue,
            r.defaultValue,
            r.checked,
            r.defaultChecked,
            r.type,
            r.name
          ), n = r.name, r.type === "radio" && n != null) {
            for (r = e; r.parentNode; ) r = r.parentNode;
            for (r = r.querySelectorAll(
              'input[name="' + Hn(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < r.length; n++) {
              var l = r[n];
              if (l !== e && l.form === e.form) {
                var u = l[hn] || null;
                if (!u) throw Error(o(90));
                Fu(
                  l,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (n = 0; n < r.length; n++)
              l = r[n], l.form === e.form && mh(l);
          }
          break e;
        case "textarea":
          xh(e, r.value, r.defaultValue);
          break e;
        case "select":
          n = r.value, n != null && _a(e, !!r.multiple, n, !1);
      }
    }
  }
  var Ju = !1;
  function kh(e, n, r) {
    if (Ju) return e(n, r);
    Ju = !0;
    try {
      var l = e(n);
      return l;
    } finally {
      if (Ju = !1, (Ea !== null || Ca !== null) && (qs(), Ea && (n = Ea, e = Ca, Ca = Ea = null, wh(n), e)))
        for (n = 0; n < e.length; n++) wh(e[n]);
    }
  }
  function kl(e, n) {
    var r = e.stateNode;
    if (r === null) return null;
    var l = r[hn] || null;
    if (l === null) return null;
    r = l[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (r && typeof r != "function")
      throw Error(
        o(231, n, typeof r)
      );
    return r;
  }
  var Bi = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Wu = !1;
  if (Bi)
    try {
      var Sl = {};
      Object.defineProperty(Sl, "passive", {
        get: function() {
          Wu = !0;
        }
      }), window.addEventListener("test", Sl, Sl), window.removeEventListener("test", Sl, Sl);
    } catch {
      Wu = !1;
    }
  var ir = null, ec = null, $o = null;
  function Sh() {
    if ($o) return $o;
    var e, n = ec, r = n.length, l, u = "value" in ir ? ir.value : ir.textContent, d = u.length;
    for (e = 0; e < r && n[e] === u[e]; e++) ;
    var y = r - e;
    for (l = 1; l <= y && n[r - l] === u[d - l]; l++) ;
    return $o = u.slice(e, 1 < l ? 1 - l : void 0);
  }
  function Vo(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Yo() {
    return !0;
  }
  function zh() {
    return !1;
  }
  function on(e) {
    function n(r, l, u, d, y) {
      this._reactName = r, this._targetInst = u, this.type = l, this.nativeEvent = d, this.target = y, this.currentTarget = null;
      for (var k in e)
        e.hasOwnProperty(k) && (r = e[k], this[k] = r ? r(d) : d[k]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Yo : zh, this.isPropagationStopped = zh, this;
    }
    return X(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = Yo);
      },
      stopPropagation: function() {
        var r = this.nativeEvent;
        r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = Yo);
      },
      persist: function() {
      },
      isPersistent: Yo
    }), n;
  }
  var rr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Go = on(rr), zl = X({}, rr, { view: 0, detail: 0 }), Aw = on(zl), tc, nc, _l, Fo = X({}, zl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: rc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== _l && (_l && e.type === "mousemove" ? (tc = e.screenX - _l.screenX, nc = e.screenY - _l.screenY) : nc = tc = 0, _l = e), tc);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : nc;
    }
  }), _h = on(Fo), Ow = X({}, Fo, { dataTransfer: 0 }), Dw = on(Ow), Mw = X({}, zl, { relatedTarget: 0 }), ic = on(Mw), Rw = X({}, rr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Uw = on(Rw), Lw = X({}, rr, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Bw = on(Lw), Iw = X({}, rr, { data: 0 }), jh = on(Iw), Hw = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Zw = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, qw = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function $w(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = qw[e]) ? !!n[e] : !1;
  }
  function rc() {
    return $w;
  }
  var Vw = X({}, zl, {
    key: function(e) {
      if (e.key) {
        var n = Hw[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress" ? (e = Vo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Zw[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: rc,
    charCode: function(e) {
      return e.type === "keypress" ? Vo(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Vo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Yw = on(Vw), Gw = X({}, Fo, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Eh = on(Gw), Fw = X({}, rr, { submitter: 0 }), Xw = on(Fw), Qw = X({}, zl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: rc
  }), Pw = on(Qw), Kw = X({}, rr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Jw = on(Kw), Ww = X({}, Fo, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), e2 = on(Ww), t2 = X({}, rr, {
    newState: 0,
    oldState: 0,
    source: 0
  }), n2 = on(t2), i2 = [9, 13, 27, 32], ac = Bi && "CompositionEvent" in window, jl = null;
  Bi && "documentMode" in document && (jl = document.documentMode);
  var r2 = Bi && "TextEvent" in window && !jl, Ch = Bi && (!ac || jl && 8 < jl && 11 >= jl), Th = " ", Nh = !1;
  function Ah(e, n) {
    switch (e) {
      case "keyup":
        return i2.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Oh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Ta = !1;
  function a2(e, n) {
    switch (e) {
      case "compositionend":
        return Oh(n);
      case "keypress":
        return n.which !== 32 ? null : (Nh = !0, Th);
      case "textInput":
        return e = n.data, e === Th && Nh ? null : e;
      default:
        return null;
    }
  }
  function l2(e, n) {
    if (Ta)
      return e === "compositionend" || !ac && Ah(e, n) ? (e = Sh(), $o = ec = ir = null, Ta = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Ch && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var o2 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Dh(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!o2[e.type] : n === "textarea";
  }
  function Mh(e, n, r, l) {
    Ea ? Ca ? Ca.push(l) : Ca = [l] : Ea = l, n = Xs(n, "onChange"), 0 < n.length && (r = new Go(
      "onChange",
      "change",
      null,
      r,
      l
    ), e.push({ event: r, listeners: n }));
  }
  var El = null, Cl = null;
  function s2(e) {
    wx(e, 0);
  }
  function Xo(e) {
    var n = wl(e);
    if (mh(n)) return e;
  }
  function Rh(e, n) {
    if (e === "change") return n;
  }
  var Uh = !1;
  if (Bi) {
    var lc;
    if (Bi) {
      var oc = "oninput" in document;
      if (!oc) {
        var Lh = document.createElement("div");
        Lh.setAttribute("oninput", "return;"), oc = typeof Lh.oninput == "function";
      }
      lc = oc;
    } else lc = !1;
    Uh = lc && (!document.documentMode || 9 < document.documentMode);
  }
  function Bh() {
    El && (El.detachEvent("onpropertychange", Ih), Cl = El = null);
  }
  function Ih(e) {
    if (e.propertyName === "value" && Xo(Cl)) {
      var n = [];
      Mh(
        n,
        Cl,
        e,
        Ku(e)
      ), kh(s2, n);
    }
  }
  function u2(e, n, r) {
    e === "focusin" ? (Bh(), El = n, Cl = r, El.attachEvent("onpropertychange", Ih)) : e === "focusout" && Bh();
  }
  function c2(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Xo(Cl);
  }
  function f2(e, n) {
    if (e === "click") return Xo(n);
  }
  function d2(e, n) {
    if (e === "input" || e === "change")
      return Xo(n);
  }
  function p2(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var En = typeof Object.is == "function" ? Object.is : p2;
  function Tl(e, n) {
    if (En(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var r = Object.keys(e), l = Object.keys(n);
    if (r.length !== l.length) return !1;
    for (l = 0; l < r.length; l++) {
      var u = r[l];
      if (!St.call(n, u) || !En(e[u], n[u]))
        return !1;
    }
    return !0;
  }
  function sc(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Hh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Zh(e, n) {
    var r = Hh(e);
    e = 0;
    for (var l; r; ) {
      if (r.nodeType === 3) {
        if (l = e + r.textContent.length, e <= n && l >= n)
          return { node: r, offset: n - e };
        e = l;
      }
      e: {
        for (; r; ) {
          if (r.nextSibling) {
            r = r.nextSibling;
            break e;
          }
          r = r.parentNode;
        }
        r = void 0;
      }
      r = Hh(r);
    }
  }
  function qh(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? qh(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function $h(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var n = sc(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof n.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = n.contentWindow;
      else break;
      n = sc(e.document);
    }
    return n;
  }
  function uc(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  var h2 = Bi && "documentMode" in document && 11 >= document.documentMode, Na = null, cc = null, Nl = null, fc = !1;
  function Vh(e, n, r) {
    var l = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    fc || Na == null || Na !== sc(l) || (l = Na, "selectionStart" in l && uc(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Nl && Tl(Nl, l) || (Nl = l, l = Xs(cc, "onSelect"), 0 < l.length && (n = new Go(
      "onSelect",
      "select",
      null,
      n,
      r
    ), e.push({ event: n, listeners: l }), n.target = Na)));
  }
  function Zr(e, n) {
    var r = {};
    return r[e.toLowerCase()] = n.toLowerCase(), r["Webkit" + e] = "webkit" + n, r["Moz" + e] = "moz" + n, r;
  }
  var Aa = {
    animationend: Zr("Animation", "AnimationEnd"),
    animationiteration: Zr("Animation", "AnimationIteration"),
    animationstart: Zr("Animation", "AnimationStart"),
    transitionrun: Zr("Transition", "TransitionRun"),
    transitionstart: Zr("Transition", "TransitionStart"),
    transitioncancel: Zr("Transition", "TransitionCancel"),
    transitionend: Zr("Transition", "TransitionEnd")
  }, dc = {}, Yh = {};
  Bi && (Yh = document.createElement("div").style, "AnimationEvent" in window || (delete Aa.animationend.animation, delete Aa.animationiteration.animation, delete Aa.animationstart.animation), "TransitionEvent" in window || delete Aa.transitionend.transition);
  function qr(e) {
    if (dc[e]) return dc[e];
    if (!Aa[e]) return e;
    var n = Aa[e], r;
    for (r in n)
      if (n.hasOwnProperty(r) && r in Yh)
        return dc[e] = n[r];
    return e;
  }
  var Gh = qr("animationend"), Fh = qr("animationiteration"), Xh = qr("animationstart"), m2 = qr("transitionrun"), g2 = qr("transitionstart"), x2 = qr("transitioncancel"), Qh = qr("transitionend"), Ph = /* @__PURE__ */ new Map(), pc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  pc.push("scrollEnd");
  function Jn(e, n) {
    Ph.set(e, n), Hr(n, [e]);
  }
  var b2 = 0;
  function Ii(e, n) {
    if (e.name != null && e.name !== "auto") return e.name;
    if (n.autoName !== null) return n.autoName;
    e = ni.identifierPrefix;
    var r = b2++;
    return e = "_" + e + "t_" + r.toString(32) + "_", n.autoName = e;
  }
  function Kh(e) {
    if (e == null || typeof e == "string")
      return e;
    var n = null, r = Ka;
    if (r !== null)
      for (var l = 0; l < r.length; l++) {
        var u = e[r[l]];
        if (u != null) {
          if (u === "none") return "none";
          n = n == null ? u : n + (" " + u);
        }
      }
    return n ?? e.default;
  }
  function Hi(e, n) {
    return e = Kh(e), n = Kh(n), n == null ? e === "auto" ? null : e : n === "auto" ? null : n;
  }
  var Qo = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, Zn = [], Oa = 0, hc = 0;
  function Po() {
    for (var e = Oa, n = hc = Oa = 0; n < e; ) {
      var r = Zn[n];
      Zn[n++] = null;
      var l = Zn[n];
      Zn[n++] = null;
      var u = Zn[n];
      Zn[n++] = null;
      var d = Zn[n];
      if (Zn[n++] = null, l !== null && u !== null) {
        var y = l.pending;
        y === null ? u.next = u : (u.next = y.next, y.next = u), l.pending = u;
      }
      d !== 0 && Jh(r, u, d);
    }
  }
  function Ko(e, n, r, l) {
    Zn[Oa++] = e, Zn[Oa++] = n, Zn[Oa++] = r, Zn[Oa++] = l, hc |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function mc(e, n, r, l) {
    return Ko(e, n, r, l), Jo(e);
  }
  function $r(e, n) {
    return Ko(e, null, null, n), Jo(e);
  }
  function Jh(e, n, r) {
    e.lanes |= r;
    var l = e.alternate;
    l !== null && (l.lanes |= r);
    for (var u = !1, d = e.return; d !== null; )
      d.childLanes |= r, l = d.alternate, l !== null && (l.childLanes |= r), d.tag === 22 && (e = d.stateNode, e === null || e._visibility & 1 || (u = !0)), e = d, d = d.return;
    return e.tag === 3 ? (d = e.stateNode, u && n !== null && (u = 31 - rn(r), e = d.hiddenUpdates, l = e[u], l === null ? e[u] = [n] : l.push(n), n.lane = r | 536870912), d) : null;
  }
  function Jo(e) {
    if (50 < Jl)
      throw Jl = 0, Zs = null, Error(o(185));
    for (var n = e.return; n !== null; )
      e = n, n = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Da = {};
  function y2(e, n, r, l) {
    this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function mn(e, n, r, l) {
    return new y2(e, n, r, l);
  }
  function gc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Zi(e, n) {
    var r = e.alternate;
    return r === null ? (r = mn(
      e.tag,
      n,
      e.key,
      e.mode
    ), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = n, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 1206910976, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, n = e.dependencies, r.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r.refCleanup = e.refCleanup, r;
  }
  function Wh(e, n) {
    e.flags &= 1206910978;
    var r = e.alternate;
    return r === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = r.childLanes, e.lanes = r.lanes, e.child = r.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = r.memoizedProps, e.memoizedState = r.memoizedState, e.updateQueue = r.updateQueue, e.type = r.type, n = r.dependencies, e.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), e;
  }
  function Wo(e, n, r, l, u, d) {
    var y = 0;
    if (l = e, typeof l == "function") gc(l) && (y = 1);
    else if (typeof l == "string")
      y = Fk(
        e,
        r,
        Nt.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (l) {
        case Ie:
          return e = mn(31, r, n, u), e.elementType = Ie, e.lanes = d, e;
        case te:
          return Vr(r.children, u, d, n);
        case oe:
          y = 8, u |= 24;
          break;
        case Ne:
          return e = mn(12, r, n, u | 2), e.elementType = Ne, e.lanes = d, e;
        case de:
          return e = mn(13, r, n, u), e.elementType = de, e.lanes = d, e;
        case ge:
          return e = mn(19, r, n, u), e.elementType = ge, e.lanes = d, e;
        case ut:
        case C:
          return e = u | 32, e = mn(30, r, n, e), e.elementType = C, e.lanes = d, e.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, e;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case ee:
                y = 10;
                break e;
              case ue:
                y = 9;
                break e;
              case W:
                y = 11;
                break e;
              case Ae:
                y = 14;
                break e;
              case z:
                y = 16, l = null;
                break e;
            }
          y = 29, r = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return n = mn(y, r, n, u), n.elementType = e, n.type = l, n.lanes = d, n;
  }
  function Vr(e, n, r, l) {
    return e = mn(7, e, l, n), e.lanes = r, e;
  }
  function xc(e, n, r) {
    return e = mn(6, e, null, n), e.lanes = r, e;
  }
  function em(e) {
    var n = mn(18, null, null, 0);
    return n.stateNode = e, n;
  }
  function bc(e, n, r) {
    return n = mn(
      4,
      e.children !== null ? e.children : [],
      e.key,
      n
    ), n.lanes = r, n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, n;
  }
  var tm = /* @__PURE__ */ new WeakMap();
  function qn(e, n) {
    if (typeof e == "object" && e !== null) {
      var r = tm.get(e);
      return r !== void 0 ? r : (n = {
        value: e,
        source: n,
        stack: bt(n)
      }, tm.set(e, n), n);
    }
    return {
      value: e,
      source: n,
      stack: bt(n)
    };
  }
  var Ma = [], Ra = 0, es = null, Al = 0, $n = [], Vn = 0, ar = null, mi = 1, gi = "";
  function qi(e, n) {
    Ma[Ra++] = Al, Ma[Ra++] = es, es = e, Al = n;
  }
  function nm(e, n, r) {
    $n[Vn++] = mi, $n[Vn++] = gi, $n[Vn++] = ar, ar = e;
    var l = mi;
    e = gi;
    var u = 32 - rn(l) - 1;
    l &= ~(1 << u), r += 1;
    var d = 32 - rn(n) + u;
    if (30 < d) {
      var y = u - u % 5;
      d = (l & (1 << y) - 1).toString(32), l >>= y, u -= y, mi = 1 << 32 - rn(n) + u | r << u | l, gi = d + e;
    } else
      mi = 1 << d | r << u | l, gi = e;
  }
  function ts(e) {
    e.return !== null && (qi(e, 1), nm(e, 1, 0));
  }
  function yc(e) {
    for (; e === es; )
      es = Ma[--Ra], Ma[Ra] = null, Al = Ma[--Ra], Ma[Ra] = null;
    for (; e === ar; )
      ar = $n[--Vn], $n[Vn] = null, gi = $n[--Vn], $n[Vn] = null, mi = $n[--Vn], $n[Vn] = null;
  }
  function im(e, n) {
    $n[Vn++] = mi, $n[Vn++] = gi, $n[Vn++] = ar, mi = n.id, gi = n.overflow, ar = e;
  }
  var Rt = null, ot = null, Le = !1, lr = null, Yn = !1, vc = Error(o(519));
  function or(e) {
    var n = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Ol(qn(n, e)), vc;
  }
  function rm(e) {
    var n = e.stateNode, r = e.type, l = e.memoizedProps;
    switch (n[$t] = e, n[hn] = l, r) {
      case "dialog":
        Ze("cancel", n), Ze("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ze("load", n);
        break;
      case "video":
      case "audio":
        for (r = 0; r < eo.length; r++)
          Ze(eo[r], n);
        break;
      case "source":
        Ze("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Ze("error", n), Ze("load", n);
        break;
      case "details":
        Ze("toggle", n);
        break;
      case "input":
        Ze("invalid", n), gh(
          n,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        );
        break;
      case "select":
        Ze("invalid", n);
        break;
      case "textarea":
        Ze("invalid", n), bh(n, l.value, l.defaultValue, l.children);
    }
    r = l.children, typeof r != "string" && typeof r != "number" && typeof r != "bigint" || n.textContent === "" + r || l.suppressHydrationWarning === !0 || _x(n.textContent, r) ? (l.popover != null && (Ze("beforetoggle", n), Ze("toggle", n)), l.onScroll != null && Ze("scroll", n), l.onScrollEnd != null && Ze("scrollend", n), l.onClick != null && (n.onclick = hi), n = !0) : n = !1, n || or(e, !0);
  }
  function ns(e) {
    for (Rt = e.return; Rt; )
      switch (Rt.tag) {
        case 5:
        case 31:
        case 13:
          Yn = !1;
          return;
        case 27:
        case 3:
          Yn = !0;
          return;
        default:
          Rt = Rt.return;
      }
  }
  function Ua(e) {
    if (e !== Rt) return !1;
    if (!Le) return ns(e), Le = !0, !1;
    var n = e.tag, r;
    if ((r = n !== 3 && n !== 27) && ((r = n === 5) && (r = e.type, r = !(r !== "form" && r !== "button") || Kf(e.type, e.memoizedProps)), r = !r), r && ot && or(e), ns(e), n === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      ot = Vx(e);
    } else if (n === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      ot = Vx(e);
    } else
      n === 27 ? (n = ot, Sr(e.type) ? (e = ld, ld = null, ot = e) : ot = n) : ot = Rt ? Fn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Yr() {
    ot = Rt = null, Le = !1;
  }
  function wc() {
    var e = lr;
    return e !== null && (bn === null ? bn = e : bn.push.apply(
      bn,
      e
    ), lr = null), e;
  }
  function Ol(e) {
    lr === null ? lr = [e] : lr.push(e);
  }
  var kc = dt(null), Gr = null, $i = null;
  function sr(e, n, r) {
    Ge(kc, n._currentValue), n._currentValue = r;
  }
  function Vi(e) {
    e._currentValue = kc.current, qe(kc);
  }
  function is(e, n, r) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, l !== null && (l.childLanes |= n)) : l !== null && (l.childLanes & n) !== n && (l.childLanes |= n), e === r) break;
      e = e.return;
    }
  }
  function Sc(e, n, r, l) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var d = u.dependencies;
      if (d !== null) {
        var y = u.child;
        d = d.firstContext;
        e: for (; d !== null; ) {
          var k = d;
          d = u;
          for (var _ = 0; _ < n.length; _++)
            if (k.context === n[_]) {
              d.lanes |= r, k = d.alternate, k !== null && (k.lanes |= r), is(
                d.return,
                r,
                e
              ), l || (y = null);
              break e;
            }
          d = k.next;
        }
      } else if (u.tag === 18) {
        if (y = u.return, y === null) throw Error(o(341));
        y.lanes |= r, d = y.alternate, d !== null && (d.lanes |= r), is(y, r, e), y = null;
      } else
        u.tag === 13 && u.memoizedState !== null && u.memoizedState.dehydrated === null ? (u.lanes |= r, y = u.alternate, y !== null && (y.lanes |= r), is(
          u.return,
          r,
          e
        ), y = u.child, y = y !== null ? y.sibling : null) : y = u.child;
      if (y !== null) y.return = u;
      else
        for (y = u; y !== null; ) {
          if (y === e) {
            y = null;
            break;
          }
          if (u = y.sibling, u !== null) {
            u.return = y.return, y = u;
            break;
          }
          y = y.return;
        }
      u = y;
    }
  }
  function Fr(e, n, r, l) {
    e = null;
    for (var u = n, d = !1; u !== null; ) {
      if (!d) {
        if ((u.flags & 524288) !== 0) d = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var y = u.alternate;
        if (y === null) throw Error(o(387));
        if (y = y.memoizedProps, y !== null) {
          var k = u.type;
          En(u.pendingProps.value, y.value) || (e !== null ? e.push(k) : e = [k]);
        }
      } else if (u === oi.current) {
        if (y = u.alternate, y === null) throw Error(o(387));
        y.memoizedState.memoizedState !== u.memoizedState.memoizedState && (e !== null ? e.push(ol) : e = [ol]);
      }
      u = u.return;
    }
    return e !== null && Sc(
      n,
      e,
      r,
      l
    ), n.flags |= 262144, e !== null;
  }
  function rs(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!En(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Xr(e) {
    Gr = e, $i = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Vt(e) {
    return am(Gr, e);
  }
  function as(e, n) {
    return Gr === null && Xr(e), am(e, n);
  }
  function am(e, n) {
    var r = n._currentValue;
    if (n = { context: n, memoizedValue: r, next: null }, $i === null) {
      if (e === null) throw Error(o(308));
      $i = n, e.dependencies = { lanes: 0, firstContext: n }, e.flags |= 524288;
    } else $i = $i.next = n;
    return r;
  }
  var v2 = typeof AbortController < "u" ? AbortController : function() {
    var e = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(r, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      n.aborted = !0, e.forEach(function(r) {
        return r();
      });
    };
  }, w2 = t.unstable_scheduleCallback, k2 = t.unstable_NormalPriority, _t = {
    $$typeof: ee,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function zc() {
    return {
      controller: new v2(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Dl(e) {
    e.refCount--, e.refCount === 0 && w2(k2, function() {
      e.controller.abort();
    });
  }
  function lm(e, n) {
    if ((e.pendingLanes & 4194048) !== 0) {
      var r = e.transitionTypes;
      for (r === null && (r = e.transitionTypes = []), e = 0; e < n.length; e++) {
        var l = n[e];
        r.indexOf(l) === -1 && r.push(l);
      }
    }
  }
  var Ml = null;
  function S2(e) {
    var n = e.transitionTypes;
    return e.transitionTypes = null, n;
  }
  var Rl = null, _c = 0, Qr = 0, La = null;
  function z2(e, n) {
    if (Rl === null) {
      var r = Rl = [];
      _c = 0, Qr = qf(), La = {
        status: "pending",
        value: void 0,
        then: function(l) {
          r.push(l);
        }
      };
    }
    return _c++, n.then(om, om), n;
  }
  function om() {
    if (--_c === 0 && (Ml = null, Rl !== null)) {
      La !== null && (La.status = "fulfilled");
      var e = Rl;
      Rl = null, Qr = 0, La = null;
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function _2(e, n) {
    var r = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        r.push(u);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = n;
        for (var u = 0; u < r.length; u++) (0, r[u])(n);
      },
      function(u) {
        for (l.status = "rejected", l.reason = u, u = 0; u < r.length; u++)
          (0, r[u])(void 0);
      }
    ), l;
  }
  var sm = ce.S;
  ce.S = function(e, n) {
    if (ex = Ue(), typeof n == "object" && n !== null && typeof n.then == "function" && z2(e, n), Ml !== null)
      for (var r = tl; r !== null; )
        lm(r, Ml), r = r.next;
    if (r = e.types, r !== null) {
      for (var l = tl; l !== null; )
        lm(l, r), l = l.next;
      if (Qr !== 0) {
        l = Ml, l === null && (l = Ml = []);
        for (var u = 0; u < r.length; u++) {
          var d = r[u];
          l.indexOf(d) === -1 && l.push(d);
        }
      }
    }
    sm !== null && sm(e, n);
  };
  var Pr = dt(null);
  function jc() {
    var e = Pr.current;
    return e !== null ? e : rt.pooledCache;
  }
  function ls(e, n) {
    n === null ? Ge(Pr, Pr.current) : Ge(Pr, n.pool);
  }
  function um() {
    var e = jc();
    return e === null ? null : { parent: _t._currentValue, pool: e };
  }
  var Ba = Error(o(460)), Ec = Error(o(474)), os = Error(o(542)), ss = { then: function() {
  } };
  function cm(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function fm(e, n, r) {
    switch (r = e[r], r === void 0 ? e.push(n) : r !== n && (n.then(hi, hi), n = r), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw e = n.reason, pm(e), e === void 0 && !("reason" in n) ? Error(o(600)) : e;
      default:
        if (typeof n.status == "string") n.then(hi, hi);
        else {
          if (e = rt, e !== null && 100 < e.shellSuspendCounter)
            throw Error(o(482));
          e = n, e.status = "pending", e.then(
            function(l) {
              if (n.status === "pending") {
                var u = n;
                u.status = "fulfilled", u.value = l;
              }
            },
            function(l) {
              if (n.status === "pending") {
                var u = n;
                u.status = "rejected", u.reason = l;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw e = n.reason, pm(e), e;
        }
        throw Jr = n, Ba;
    }
  }
  function Kr(e) {
    try {
      var n = e._init;
      return n(e._payload);
    } catch (r) {
      throw r !== null && typeof r == "object" && typeof r.then == "function" ? (Jr = r, Ba) : r;
    }
  }
  var Jr = null;
  function dm() {
    if (Jr === null) throw Error(o(459));
    var e = Jr;
    return Jr = null, e;
  }
  function pm(e) {
    if (e === Ba || e === os)
      throw Error(o(483));
  }
  var Ia = null, Ul = 0;
  function us(e) {
    var n = Ul;
    return Ul += 1, Ia === null && (Ia = []), fm(Ia, e, n);
  }
  function ur(e, n) {
    n = n.props.ref, e.ref = n !== void 0 ? n : null;
  }
  function cs(e, n) {
    throw n.$$typeof === pe ? Error(o(525)) : (e = Object.prototype.toString.call(n), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e
      )
    ));
  }
  function hm(e) {
    function n(M, A) {
      if (e) {
        var B = M.deletions;
        B === null ? (M.deletions = [A], M.flags |= 16) : B.push(A);
      }
    }
    function r(M, A) {
      if (!e) return null;
      for (; A !== null; )
        n(M, A), A = A.sibling;
      return null;
    }
    function l(M) {
      for (var A = /* @__PURE__ */ new Map(); M !== null; )
        M.key === null ? A.set(M.index, M) : A.set(M.key, M), M = M.sibling;
      return A;
    }
    function u(M, A) {
      return M = Zi(M, A), M.index = 0, M.sibling = null, M;
    }
    function d(M, A, B) {
      return M.index = B, e ? (B = M.alternate, B !== null ? (B = B.index, B < A ? (M.flags |= 2, A) : B) : (M.flags |= 134217730, A)) : (M.flags |= 1048576, A);
    }
    function y(M) {
      return e && M.alternate === null && (M.flags |= 134217730), M;
    }
    function k(M, A, B, F) {
      return A === null || A.tag !== 6 ? (A = xc(B, M.mode, F), A.return = M, A) : (A = u(A, B), A.return = M, A);
    }
    function _(M, A, B, F) {
      var me = B.type;
      return me === te ? (M = q(
        M,
        A,
        B.props.children,
        F,
        B.key
      ), ur(M, B), M) : A !== null && (A.elementType === me || typeof me == "object" && me !== null && me.$$typeof === z && Kr(me) === A.type) ? (A = u(A, B.props), ur(A, B), A.return = M, A) : (A = Wo(
        B.type,
        B.key,
        B.props,
        null,
        M.mode,
        F
      ), ur(A, B), A.return = M, A);
    }
    function R(M, A, B, F) {
      return A === null || A.tag !== 4 || A.stateNode.containerInfo !== B.containerInfo || A.stateNode.implementation !== B.implementation ? (A = bc(B, M.mode, F), A.return = M, A) : (A = u(A, B.children || []), A.return = M, A);
    }
    function q(M, A, B, F, me) {
      return A === null || A.tag !== 7 ? (A = Vr(
        B,
        M.mode,
        F,
        me
      ), A.return = M, A) : (A = u(A, B), A.return = M, A);
    }
    function Q(M, A, B) {
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return A = xc(
          "" + A,
          M.mode,
          B
        ), A.return = M, A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case _e:
            return B = Wo(
              A.type,
              A.key,
              A.props,
              null,
              M.mode,
              B
            ), ur(B, A), B.return = M, B;
          case Z:
            return A = bc(
              A,
              M.mode,
              B
            ), A.return = M, A;
          case z:
            return A = Kr(A), Q(M, A, B);
        }
        if (re(A) || xe(A))
          return A = Vr(
            A,
            M.mode,
            B,
            null
          ), A.return = M, A;
        if (typeof A.then == "function")
          return Q(M, us(A), B);
        if (A.$$typeof === ee)
          return Q(
            M,
            as(M, A),
            B
          );
        cs(M, A);
      }
      return null;
    }
    function D(M, A, B, F) {
      var me = A !== null ? A.key : null;
      if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint")
        return me !== null ? null : k(M, A, "" + B, F);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case _e:
            return B.key === me ? _(M, A, B, F) : null;
          case Z:
            return B.key === me ? R(M, A, B, F) : null;
          case z:
            return B = Kr(B), D(M, A, B, F);
        }
        if (re(B) || xe(B))
          return me !== null ? null : q(M, A, B, F, null);
        if (typeof B.then == "function")
          return D(
            M,
            A,
            us(B),
            F
          );
        if (B.$$typeof === ee)
          return D(
            M,
            A,
            as(M, B),
            F
          );
        cs(M, B);
      }
      return null;
    }
    function H(M, A, B, F, me) {
      if (typeof F == "string" && F !== "" || typeof F == "number" || typeof F == "bigint")
        return M = M.get(B) || null, k(A, M, "" + F, me);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case _e:
            return M = M.get(
              F.key === null ? B : F.key
            ) || null, _(A, M, F, me);
          case Z:
            return M = M.get(
              F.key === null ? B : F.key
            ) || null, R(A, M, F, me);
          case z:
            return F = Kr(F), H(
              M,
              A,
              B,
              F,
              me
            );
        }
        if (re(F) || xe(F))
          return M = M.get(B) || null, q(A, M, F, me, null);
        if (typeof F.then == "function")
          return H(
            M,
            A,
            B,
            us(F),
            me
          );
        if (F.$$typeof === ee)
          return H(
            M,
            A,
            B,
            as(A, F),
            me
          );
        cs(A, F);
      }
      return null;
    }
    function fe(M, A, B, F) {
      for (var me = null, Ve = null, ke = A, Ce = A = 0, Ct = null; ke !== null && Ce < B.length; Ce++) {
        ke.index > Ce ? (Ct = ke, ke = null) : Ct = ke.sibling;
        var Ye = D(
          M,
          ke,
          B[Ce],
          F
        );
        if (Ye === null) {
          ke === null && (ke = Ct);
          break;
        }
        e && ke && Ye.alternate === null && n(M, ke), A = d(Ye, A, Ce), Ve === null ? me = Ye : Ve.sibling = Ye, Ve = Ye, ke = Ct;
      }
      if (Ce === B.length)
        return r(M, ke), Le && qi(M, Ce), me;
      if (ke === null) {
        for (; Ce < B.length; Ce++)
          ke = Q(M, B[Ce], F), ke !== null && (A = d(
            ke,
            A,
            Ce
          ), Ve === null ? me = ke : Ve.sibling = ke, Ve = ke);
        return Le && qi(M, Ce), me;
      }
      for (ke = l(ke); Ce < B.length; Ce++)
        Ct = H(
          ke,
          M,
          Ce,
          B[Ce],
          F
        ), Ct !== null && (e && (Ye = Ct.alternate, Ye !== null && ke.delete(Ye.key === null ? Ce : Ye.key)), A = d(
          Ct,
          A,
          Ce
        ), Ve === null ? me = Ct : Ve.sibling = Ct, Ve = Ct);
      return e && ke.forEach(function(Cr) {
        return n(M, Cr);
      }), Le && qi(M, Ce), me;
    }
    function ye(M, A, B, F) {
      if (B == null) throw Error(o(151));
      for (var me = null, Ve = null, ke = A, Ce = A = 0, Ct = null, Ye = B.next(); ke !== null && !Ye.done; Ce++, Ye = B.next()) {
        ke.index > Ce ? (Ct = ke, ke = null) : Ct = ke.sibling;
        var Cr = D(M, ke, Ye.value, F);
        if (Cr === null) {
          ke === null && (ke = Ct);
          break;
        }
        e && ke && Cr.alternate === null && n(M, ke), A = d(Cr, A, Ce), Ve === null ? me = Cr : Ve.sibling = Cr, Ve = Cr, ke = Ct;
      }
      if (Ye.done)
        return r(M, ke), Le && qi(M, Ce), me;
      if (ke === null) {
        for (; !Ye.done; Ce++, Ye = B.next())
          Ye = Q(M, Ye.value, F), Ye !== null && (A = d(Ye, A, Ce), Ve === null ? me = Ye : Ve.sibling = Ye, Ve = Ye);
        return Le && qi(M, Ce), me;
      }
      for (ke = l(ke); !Ye.done; Ce++, Ye = B.next())
        Ye = H(ke, M, Ce, Ye.value, F), Ye !== null && (e && (Ct = Ye.alternate, Ct !== null && ke.delete(
          Ct.key === null ? Ce : Ct.key
        )), A = d(Ye, A, Ce), Ve === null ? me = Ye : Ve.sibling = Ye, Ve = Ye);
      return e && ke.forEach(function(aS) {
        return n(M, aS);
      }), Le && qi(M, Ce), me;
    }
    function Re(M, A, B, F) {
      if (typeof B == "object" && B !== null && B.type === te && B.key === null && B.props.ref === void 0 && (B = B.props.children), typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case _e:
            e: {
              for (var me = B.key; A !== null; ) {
                if (A.key === me) {
                  if (me = B.type, me === te) {
                    if (A.tag === 7) {
                      r(
                        M,
                        A.sibling
                      ), F = u(
                        A,
                        B.props.children
                      ), ur(F, B), F.return = M, M = F;
                      break e;
                    }
                  } else if (A.elementType === me || typeof me == "object" && me !== null && me.$$typeof === z && Kr(me) === A.type) {
                    r(
                      M,
                      A.sibling
                    ), F = u(A, B.props), ur(F, B), F.return = M, M = F;
                    break e;
                  }
                  r(M, A);
                  break;
                } else n(M, A);
                A = A.sibling;
              }
              B.type === te ? (F = Vr(
                B.props.children,
                M.mode,
                F,
                B.key
              ), ur(F, B), F.return = M, M = F) : (F = Wo(
                B.type,
                B.key,
                B.props,
                null,
                M.mode,
                F
              ), ur(F, B), F.return = M, M = F);
            }
            return y(M);
          case Z:
            e: {
              for (me = B.key; A !== null; ) {
                if (A.key === me)
                  if (A.tag === 4 && A.stateNode.containerInfo === B.containerInfo && A.stateNode.implementation === B.implementation) {
                    r(
                      M,
                      A.sibling
                    ), F = u(A, B.children || []), F.return = M, M = F;
                    break e;
                  } else {
                    r(M, A);
                    break;
                  }
                else n(M, A);
                A = A.sibling;
              }
              F = bc(B, M.mode, F), F.return = M, M = F;
            }
            return y(M);
          case z:
            return B = Kr(B), Re(
              M,
              A,
              B,
              F
            );
        }
        if (re(B))
          return fe(
            M,
            A,
            B,
            F
          );
        if (xe(B)) {
          if (me = xe(B), typeof me != "function") throw Error(o(150));
          return B = me.call(B), ye(
            M,
            A,
            B,
            F
          );
        }
        if (typeof B.then == "function")
          return Re(
            M,
            A,
            us(B),
            F
          );
        if (B.$$typeof === ee)
          return Re(
            M,
            A,
            as(M, B),
            F
          );
        cs(M, B);
      }
      return typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint" ? (B = "" + B, A !== null && A.tag === 6 ? (r(M, A.sibling), F = u(A, B), F.return = M, M = F) : (r(M, A), F = xc(B, M.mode, F), F.return = M, M = F), y(M)) : r(M, A);
    }
    return function(M, A, B, F) {
      try {
        Ul = 0;
        var me = Re(
          M,
          A,
          B,
          F
        );
        return Ia = null, me;
      } catch (ke) {
        if (ke === Ba || ke === os) throw ke;
        var Ve = mn(29, ke, null, M.mode);
        return Ve.lanes = F, Ve.return = M, Ve;
      }
    };
  }
  var Wr = hm(!0), mm = hm(!1), cr = !1;
  function Cc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Tc(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function fr(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function dr(e, n, r) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Ke & 2) !== 0) {
      var u = l.pending;
      return u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n, n = Jo(e), Jh(e, null, r), n;
    }
    return Ko(e, l, n, r), Jo(e);
  }
  function Ll(e, n, r) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (r & 4194048) !== 0)) {
      var l = n.lanes;
      l &= e.pendingLanes, r |= l, n.lanes = r, qt(e, r);
    }
  }
  function Nc(e, n) {
    var r = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, r === l)) {
      var u = null, d = null;
      if (r = r.firstBaseUpdate, r !== null) {
        do {
          var y = {
            lane: r.lane,
            tag: r.tag,
            payload: r.payload,
            callback: null,
            next: null
          };
          d === null ? u = d = y : d = d.next = y, r = r.next;
        } while (r !== null);
        d === null ? u = d = n : d = d.next = n;
      } else u = d = n;
      r = {
        baseState: l.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: d,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = r;
      return;
    }
    e = r.lastBaseUpdate, e === null ? r.firstBaseUpdate = n : e.next = n, r.lastBaseUpdate = n;
  }
  var Ac = !1;
  function Bl() {
    if (Ac) {
      var e = La;
      if (e !== null) throw e;
    }
  }
  function Il(e, n, r, l) {
    Ac = !1;
    var u = e.updateQueue;
    cr = !1;
    var d = u.firstBaseUpdate, y = u.lastBaseUpdate, k = u.shared.pending;
    if (k !== null) {
      u.shared.pending = null;
      var _ = k, R = _.next;
      _.next = null, y === null ? d = R : y.next = R, y = _;
      var q = e.alternate;
      q !== null && (q = q.updateQueue, k = q.lastBaseUpdate, k !== y && (k === null ? q.firstBaseUpdate = R : k.next = R, q.lastBaseUpdate = _));
    }
    if (d !== null) {
      var Q = u.baseState;
      y = 0, q = R = _ = null, k = d;
      do {
        var D = k.lane & -536870913, H = D !== k.lane;
        if (H ? ($e & D) === D : (l & D) === D) {
          D !== 0 && D === Qr && (Ac = !0), q !== null && (q = q.next = {
            lane: 0,
            tag: k.tag,
            payload: k.payload,
            callback: null,
            next: null
          });
          e: {
            var fe = e, ye = k;
            D = n;
            var Re = r;
            switch (ye.tag) {
              case 1:
                if (fe = ye.payload, typeof fe == "function") {
                  Q = fe.call(Re, Q, D);
                  break e;
                }
                Q = fe;
                break e;
              case 3:
                fe.flags = fe.flags & -65537 | 128;
              case 0:
                if (fe = ye.payload, D = typeof fe == "function" ? fe.call(Re, Q, D) : fe, D == null) break e;
                Q = X({}, Q, D);
                break e;
              case 2:
                cr = !0;
            }
          }
          D = k.callback, D !== null && (e.flags |= 64, H && (e.flags |= 8192), H = u.callbacks, H === null ? u.callbacks = [D] : H.push(D));
        } else
          H = {
            lane: D,
            tag: k.tag,
            payload: k.payload,
            callback: k.callback,
            next: null
          }, q === null ? (R = q = H, _ = Q) : q = q.next = H, y |= D;
        if (k = k.next, k === null) {
          if (k = u.shared.pending, k === null)
            break;
          H = k, k = H.next, H.next = null, u.lastBaseUpdate = H, u.shared.pending = null;
        }
      } while (!0);
      q === null && (_ = Q), u.baseState = _, u.firstBaseUpdate = R, u.lastBaseUpdate = q, d === null && (u.shared.lanes = 0), yr |= y, e.lanes = y, e.memoizedState = Q;
    }
  }
  function gm(e, n) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(n);
  }
  function xm(e, n) {
    var r = e.callbacks;
    if (r !== null)
      for (e.callbacks = null, e = 0; e < r.length; e++)
        gm(r[e], n);
  }
  var pr = dt(null), fs = dt(0);
  function bm(e, n) {
    e = Qi, Ge(fs, e), Ge(pr, n), Qi = e | n.baseLanes;
  }
  function Oc() {
    Ge(fs, Qi), Ge(pr, pr.current);
  }
  function Dc() {
    Qi = fs.current, qe(pr), qe(fs);
  }
  var Yt = dt(null), en = null;
  function hr(e) {
    var n = e.alternate;
    Ge(Gt, Gt.current & 1), Ge(Yt, e), en === null && (n === null || pr.current !== null || n.memoizedState !== null) && (en = e);
  }
  function Mc(e) {
    Ge(Gt, Gt.current), Ge(Yt, e), en === null && (en = e);
  }
  function ym(e) {
    e.tag === 22 ? (Ge(Gt, Gt.current), Ge(Yt, e), en === null && (en = e)) : mr();
  }
  function mr() {
    Ge(Gt, Gt.current), Ge(Yt, Yt.current);
  }
  function Cn(e) {
    qe(Yt), en === e && (en = null), qe(Gt);
  }
  var Gt = dt(0);
  function Hl(e, n) {
    Ge(Yt, Yt.current), Ge(Gt, n);
  }
  function Rc(e) {
    qe(Gt), qe(Yt), en === e && (en = null);
  }
  function ds(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var r = n.memoizedState;
        if (r !== null && (r = r.dehydrated, r === null || rd(r) || ad(r)))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== "independent") {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var Yi = 0, Me = null, it = null, jt = null, ps = !1, Ha = !1, ea = !1, hs = 0, Zl = 0, Za = null, j2 = 0;
  function mt() {
    throw Error(o(321));
  }
  function Uc(e, n) {
    if (n === null) return !1;
    for (var r = 0; r < n.length && r < e.length; r++)
      if (!En(e[r], n[r])) return !1;
    return !0;
  }
  function Lc(e, n, r, l, u, d) {
    return Yi = d, Me = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, ce.H = e === null || e.memoizedState === null ? ng : ig, ea = !1, d = r(l, u), ea = !1, Ha && (d = wm(
      n,
      r,
      l,
      u
    )), vm(e), d;
  }
  function vm(e) {
    ce.H = ws;
    var n = it !== null && it.next !== null;
    if (Yi = 0, jt = it = Me = null, ps = !1, Zl = 0, Za = null, n) throw Error(o(300));
    e === null || Et || (e = e.dependencies, e !== null && rs(e) && (Et = !0));
  }
  function wm(e, n, r, l) {
    Me = e;
    var u = 0;
    do {
      if (Ha && (Za = null), Zl = 0, Ha = !1, 25 <= u) throw Error(o(301));
      if (u += 1, jt = it = null, e.updateQueue != null) {
        var d = e.updateQueue;
        d.lastEffect = null, d.events = null, d.stores = null, d.memoCache != null && (d.memoCache.index = 0);
      }
      ce.H = M2, d = n(r, l);
    } while (Ha);
    return d;
  }
  function E2() {
    var e = ce.H, n = e.useState()[0];
    return n = typeof n.then == "function" ? ql(n) : n, e = e.useState()[0], (it !== null ? it.memoizedState : null) !== e && (Me.flags |= 1024), n;
  }
  function Bc() {
    var e = hs !== 0;
    return hs = 0, e;
  }
  function Ic(e, n, r) {
    n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~r;
  }
  function Hc(e) {
    if (ps) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), e = e.next;
      }
      ps = !1;
    }
    Yi = 0, jt = it = Me = null, Ha = !1, Zl = hs = 0, Za = null;
  }
  function sn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return jt === null ? Me.memoizedState = jt = e : jt = jt.next = e, jt;
  }
  function yt() {
    if (it === null) {
      var e = Me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = it.next;
    var n = jt === null ? Me.memoizedState : jt.next;
    if (n !== null)
      jt = n, it = e;
    else {
      if (e === null)
        throw Me.alternate === null ? Error(o(467)) : Error(o(310));
      it = e, e = {
        memoizedState: it.memoizedState,
        baseState: it.baseState,
        baseQueue: it.baseQueue,
        queue: it.queue,
        next: null
      }, jt === null ? Me.memoizedState = jt = e : jt = jt.next = e;
    }
    return jt;
  }
  function ms() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ql(e) {
    var n = Zl;
    return Zl += 1, Za === null && (Za = []), e = fm(Za, e, n), n = Me, (jt === null ? n.memoizedState : jt.next) === null && (n = n.alternate, ce.H = n === null || n.memoizedState === null ? ng : ig), e;
  }
  function gs(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return ql(e);
      if (e.$$typeof === P) return;
      if (e.$$typeof === ee) return Vt(e);
    }
    throw Error(o(438, String(e)));
  }
  function Zc(e) {
    var n = null, r = Me.updateQueue;
    if (r !== null && (n = r.memoCache), n == null) {
      var l = Me.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (n = {
        data: l.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), r === null && (r = ms(), Me.updateQueue = r), r.memoCache = n, r = n.data[n.index], r === void 0)
      for (r = n.data[n.index] = Array(e), l = 0; l < e; l++)
        r[l] = N;
    return n.index++, r;
  }
  function Gi(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function xs(e) {
    var n = yt();
    return qc(n, it, e);
  }
  function qc(e, n, r) {
    var l = e.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = r;
    var u = e.baseQueue, d = l.pending;
    if (d !== null) {
      if (u !== null) {
        var y = u.next;
        u.next = d.next, d.next = y;
      }
      n.baseQueue = u = d, l.pending = null;
    }
    if (d = e.baseState, u === null) e.memoizedState = d;
    else {
      n = u.next;
      var k = y = null, _ = null, R = n, q = !1;
      do {
        var Q = R.lane & -536870913;
        if (Q !== R.lane ? ($e & Q) === Q : (Yi & Q) === Q) {
          var D = R.revertLane;
          if (D === 0)
            _ !== null && (_ = _.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null
            }), Q === Qr && (q = !0);
          else if ((Yi & D) === D) {
            R = R.next, D === Qr && (q = !0);
            continue;
          } else
            Q = {
              lane: 0,
              revertLane: R.revertLane,
              gesture: null,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null
            }, _ === null ? (k = _ = Q, y = d) : _ = _.next = Q, Me.lanes |= D, yr |= D;
          Q = R.action, ea && r(d, Q), d = R.hasEagerState ? R.eagerState : r(d, Q);
        } else
          D = {
            lane: Q,
            revertLane: R.revertLane,
            gesture: R.gesture,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null
          }, _ === null ? (k = _ = D, y = d) : _ = _.next = D, Me.lanes |= Q, yr |= Q;
        R = R.next;
      } while (R !== null && R !== n);
      if (_ === null ? y = d : _.next = k, !En(d, e.memoizedState) && (Et = !0, q && (r = La, r !== null)))
        throw r;
      e.memoizedState = d, e.baseState = y, e.baseQueue = _, l.lastRenderedState = d;
    }
    return u === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function $c(e) {
    var n = yt(), r = n.queue;
    if (r === null) throw Error(o(311));
    r.lastRenderedReducer = e;
    var l = r.dispatch, u = r.pending, d = n.memoizedState;
    if (u !== null) {
      r.pending = null;
      var y = u = u.next;
      do
        d = e(d, y.action), y = y.next;
      while (y !== u);
      En(d, n.memoizedState) || (Et = !0), n.memoizedState = d, n.baseQueue === null && (n.baseState = d), r.lastRenderedState = d;
    }
    return [d, l];
  }
  function km(e, n, r) {
    var l = Me, u = yt(), d = Le;
    if (d) {
      if (r === void 0) throw Error(o(407));
      r = r();
    } else r = n();
    var y = !En(
      (it || u).memoizedState,
      r
    );
    if (y && (u.memoizedState = r, Et = !0), u = u.queue, Gc(_m.bind(null, l, u, e), [
      e
    ]), e = u.getSnapshot !== n || y || jt !== null && (jt.memoizedState.tag & 1) !== 0, qa(
      e ? 9 : 8,
      { destroy: void 0 },
      zm.bind(null, l, u, r, n),
      null
    ), e) {
      if (l.flags |= 2048, rt === null) throw Error(o(349));
      d || (Yi & 127) !== 0 || Sm(l, n, r);
    }
    return r;
  }
  function Sm(e, n, r) {
    e.flags |= 16384, e = { getSnapshot: n, value: r }, n = Me.updateQueue, n === null ? (n = ms(), Me.updateQueue = n, n.stores = [e]) : (r = n.stores, r === null ? n.stores = [e] : r.push(e));
  }
  function zm(e, n, r, l) {
    n.value = r, n.getSnapshot = l, jm(n) && Em(e);
  }
  function _m(e, n, r) {
    return r(function() {
      jm(n) && Em(e);
    });
  }
  function jm(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var r = n();
      return !En(e, r);
    } catch {
      return !0;
    }
  }
  function Em(e) {
    var n = $r(e, 2);
    n !== null && yn(n, e, 2);
  }
  function Vc(e) {
    var n = sn();
    if (typeof e == "function") {
      var r = e;
      if (e = r(), ea) {
        di(!0);
        try {
          r();
        } finally {
          di(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = e, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gi,
      lastRenderedState: e
    }, n;
  }
  function Cm(e, n, r, l) {
    return e.baseState = r, qc(
      e,
      it,
      typeof l == "function" ? l : Gi
    );
  }
  function C2(e, n, r, l, u) {
    if (vs(e)) throw Error(o(485));
    if (e = n.action, e !== null) {
      var d = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(y) {
          d.listeners.push(y);
        }
      };
      ce.T !== null ? r(!0) : d.isTransition = !1, l(d), r = n.pending, r === null ? (d.next = n.pending = d, Tm(n, d)) : (d.next = r.next, n.pending = r.next = d);
    }
  }
  function Tm(e, n) {
    var r = n.action, l = n.payload, u = e.state;
    if (n.isTransition) {
      var d = ce.T, y = {};
      y.types = d !== null ? d.types : null, ce.T = y;
      try {
        var k = r(u, l), _ = ce.S;
        _ !== null && _(y, k), Nm(e, n, k);
      } catch (R) {
        Yc(e, n, R);
      } finally {
        d !== null && y.types !== null && (d.types = y.types), ce.T = d;
      }
    } else
      try {
        d = r(u, l), Nm(e, n, d);
      } catch (R) {
        Yc(e, n, R);
      }
  }
  function Nm(e, n, r) {
    r !== null && typeof r == "object" && typeof r.then == "function" ? r.then(
      function(l) {
        Am(e, n, l);
      },
      function(l) {
        return Yc(e, n, l);
      }
    ) : Am(e, n, r);
  }
  function Am(e, n, r) {
    n.status = "fulfilled", n.value = r, Om(n), e.state = r, n = e.pending, n !== null && (r = n.next, r === n ? e.pending = null : (r = r.next, n.next = r, Tm(e, r)));
  }
  function Yc(e, n, r) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        n.status = "rejected", n.reason = r, Om(n), n = n.next;
      while (n !== l);
    }
    e.action = null;
  }
  function Om(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function Dm(e, n) {
    return n;
  }
  function Mm(e, n) {
    if (Le) {
      var r = rt.formState;
      if (r !== null) {
        e: {
          var l = Me;
          if (Le) {
            if (ot) {
              t: {
                for (var u = ot, d = Yn; u.nodeType !== 8; ) {
                  if (!d) {
                    u = null;
                    break t;
                  }
                  if (u = Fn(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break t;
                  }
                }
                d = u.data, u = d === "F!" || d === "F" ? u : null;
              }
              if (u) {
                ot = Fn(
                  u.nextSibling
                ), l = u.data === "F!";
                break e;
              }
            }
            or(l);
          }
          l = !1;
        }
        l && (n = r[0]);
      }
    }
    return r = sn(), r.memoizedState = r.baseState = n, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Dm,
      lastRenderedState: n
    }, r.queue = l, r = Wm.bind(
      null,
      Me,
      l
    ), l.dispatch = r, l = Vc(!1), d = Kc.bind(
      null,
      Me,
      !1,
      l.queue
    ), l = sn(), u = {
      state: n,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = u, r = C2.bind(
      null,
      Me,
      u,
      d,
      r
    ), u.dispatch = r, l.memoizedState = e, [n, r, !1];
  }
  function Rm(e) {
    var n = yt();
    return Um(n, it, e);
  }
  function Um(e, n, r) {
    if (n = qc(
      e,
      n,
      Dm
    )[0], e = xs(Gi)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var l = ql(n);
      } catch (y) {
        throw y === Ba ? os : y;
      }
    else l = n;
    n = yt();
    var u = n.queue, d = u.dispatch;
    return r !== n.memoizedState && (Me.flags |= 2048, qa(
      9,
      { destroy: void 0 },
      T2.bind(null, u, r),
      null
    )), [l, d, e];
  }
  function T2(e, n) {
    e.action = n;
  }
  function Lm(e) {
    var n = yt(), r = it;
    if (r !== null)
      return Um(n, r, e);
    yt(), n = n.memoizedState, r = yt();
    var l = r.queue.dispatch;
    return r.memoizedState = e, [n, l, !1];
  }
  function qa(e, n, r, l) {
    return e = { tag: e, create: r, deps: l, inst: n, next: null }, n = Me.updateQueue, n === null && (n = ms(), Me.updateQueue = n), r = n.lastEffect, r === null ? n.lastEffect = e.next = e : (l = r.next, r.next = e, e.next = l, n.lastEffect = e), e;
  }
  function Bm() {
    return yt().memoizedState;
  }
  function bs(e, n, r, l) {
    var u = sn();
    Me.flags |= e, u.memoizedState = qa(
      1 | n,
      { destroy: void 0 },
      r,
      l === void 0 ? null : l
    );
  }
  function ys(e, n, r, l) {
    var u = yt();
    l = l === void 0 ? null : l;
    var d = u.memoizedState.inst;
    it !== null && l !== null && Uc(l, it.memoizedState.deps) ? u.memoizedState = qa(n, d, r, l) : (Me.flags |= e, u.memoizedState = qa(
      1 | n,
      d,
      r,
      l
    ));
  }
  function Im(e, n) {
    bs(8390656, 8, e, n);
  }
  function Gc(e, n) {
    ys(2048, 8, e, n);
  }
  function N2(e) {
    Me.flags |= 4;
    var n = Me.updateQueue;
    if (n === null)
      n = ms(), Me.updateQueue = n, n.events = [e];
    else {
      var r = n.events;
      r === null ? n.events = [e] : r.push(e);
    }
  }
  function Hm(e) {
    var n = yt().memoizedState;
    return N2({ ref: n, nextImpl: e }), function() {
      if ((Ke & 2) !== 0) throw Error(o(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function Zm(e, n) {
    return ys(4, 2, e, n);
  }
  function qm(e, n) {
    return ys(4, 4, e, n);
  }
  function $m(e, n) {
    if (typeof n == "function") {
      e = e();
      var r = n(e);
      return function() {
        typeof r == "function" ? r() : n(null);
      };
    }
    if (n != null)
      return e = e(), n.current = e, function() {
        n.current = null;
      };
  }
  function Vm(e, n, r) {
    r = r != null ? r.concat([e]) : null, ys(4, 4, $m.bind(null, n, e), r);
  }
  function Fc() {
  }
  function Ym(e, n) {
    var r = yt();
    n = n === void 0 ? null : n;
    var l = r.memoizedState;
    return n !== null && Uc(n, l[1]) ? l[0] : (r.memoizedState = [e, n], e);
  }
  function Gm(e, n) {
    var r = yt();
    n = n === void 0 ? null : n;
    var l = r.memoizedState;
    if (n !== null && Uc(n, l[1]))
      return l[0];
    if (l = e(), ea) {
      di(!0);
      try {
        e();
      } finally {
        di(!1);
      }
    }
    return r.memoizedState = [l, n], l;
  }
  function Xc(e, n, r) {
    return r === void 0 || (Yi & 1073741824) !== 0 && ($e & 261930) === 0 ? e.memoizedState = n : (e.memoizedState = r, e = nx(), Me.lanes |= e, yr |= e, r);
  }
  function Fm(e, n, r, l) {
    return En(r, n) ? r : pr.current !== null ? (e = Xc(e, r, l), En(e, n) || (Et = !0), e) : (Yi & 106) === 0 || (Yi & 1073741824) !== 0 && ($e & 261930) === 0 ? (Et = !0, e.memoizedState = r) : (e = nx(), Me.lanes |= e, yr |= e, n);
  }
  function Xm(e, n, r, l, u) {
    var d = we.p;
    we.p = d !== 0 && 8 > d ? d : 8;
    var y = ce.T, k = {};
    k.types = y !== null ? y.types : null, ce.T = k, Kc(e, !1, n, r);
    try {
      var _ = u(), R = ce.S;
      if (R !== null && R(k, _), _ !== null && typeof _ == "object" && typeof _.then == "function") {
        var q = _2(
          _,
          l
        );
        $l(
          e,
          n,
          q,
          On(e)
        );
      } else
        $l(
          e,
          n,
          l,
          On(e)
        );
    } catch (Q) {
      $l(
        e,
        n,
        { then: function() {
        }, status: "rejected", reason: Q },
        On()
      );
    } finally {
      we.p = d, y !== null && k.types !== null && (y.types = k.types), ce.T = y;
    }
  }
  function A2() {
  }
  function Qc(e, n, r, l) {
    if (e.tag !== 5) throw Error(o(476));
    var u = Qm(e).queue;
    Xm(
      e,
      u,
      n,
      Bt,
      r === null ? A2 : function() {
        return Pm(e), r(l);
      }
    );
  }
  function Qm(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: Bt,
      baseState: Bt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gi,
        lastRenderedState: Bt
      },
      next: null
    };
    var r = {};
    return n.next = {
      memoizedState: r,
      baseState: r,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gi,
        lastRenderedState: r
      },
      next: null
    }, e.memoizedState = n, e = e.alternate, e !== null && (e.memoizedState = n), n;
  }
  function Pm(e) {
    var n = Qm(e);
    n.next === null && (n = e.alternate.memoizedState), $l(
      e,
      n.next.queue,
      {},
      On()
    );
  }
  function Pc() {
    return Vt(ol);
  }
  function Km() {
    return yt().memoizedState;
  }
  function Jm() {
    return yt().memoizedState;
  }
  function O2(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var r = On();
          e = fr(r);
          var l = dr(n, e, r);
          l !== null && (yn(l, n, r), Ll(l, n, r)), n = { cache: zc() }, e.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function D2(e, n, r) {
    var l = On();
    r = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, vs(e) ? eg(n, r) : (r = mc(e, n, r, l), r !== null && (yn(r, e, l), tg(r, n, l)));
  }
  function Wm(e, n, r) {
    var l = On();
    $l(e, n, r, l);
  }
  function $l(e, n, r, l) {
    var u = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (vs(e)) eg(n, u);
    else {
      var d = e.alternate;
      if (e.lanes === 0 && (d === null || d.lanes === 0) && (d = n.lastRenderedReducer, d !== null))
        try {
          var y = n.lastRenderedState, k = d(y, r);
          if (u.hasEagerState = !0, u.eagerState = k, En(k, y))
            return Ko(e, n, u, 0), rt === null && Po(), !1;
        } catch {
        }
      if (r = mc(e, n, u, l), r !== null)
        return yn(r, e, l), tg(r, n, l), !0;
    }
    return !1;
  }
  function Kc(e, n, r, l) {
    if (l = {
      lane: 2,
      revertLane: qf(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, vs(e)) {
      if (n) throw Error(o(479));
    } else
      n = mc(
        e,
        r,
        l,
        2
      ), n !== null && yn(n, e, 2);
  }
  function vs(e) {
    var n = e.alternate;
    return e === Me || n !== null && n === Me;
  }
  function eg(e, n) {
    Ha = ps = !0;
    var r = e.pending;
    r === null ? n.next = n : (n.next = r.next, r.next = n), e.pending = n;
  }
  function tg(e, n, r) {
    if ((r & 4194048) !== 0) {
      var l = n.lanes;
      l &= e.pendingLanes, r |= l, n.lanes = r, qt(e, r);
    }
  }
  var ws = {
    readContext: Vt,
    use: gs,
    useCallback: mt,
    useContext: mt,
    useEffect: mt,
    useImperativeHandle: mt,
    useLayoutEffect: mt,
    useInsertionEffect: mt,
    useMemo: mt,
    useReducer: mt,
    useRef: mt,
    useState: mt,
    useDebugValue: mt,
    useDeferredValue: mt,
    useTransition: mt,
    useSyncExternalStore: mt,
    useId: mt,
    useHostTransitionStatus: mt,
    useFormState: mt,
    useActionState: mt,
    useOptimistic: mt,
    useMemoCache: mt,
    useCacheRefresh: mt,
    useEffectEvent: mt
  }, ng = {
    readContext: Vt,
    use: gs,
    useCallback: function(e, n) {
      return sn().memoizedState = [
        e,
        n === void 0 ? null : n
      ], e;
    },
    useContext: Vt,
    useEffect: Im,
    useImperativeHandle: function(e, n, r) {
      r = r != null ? r.concat([e]) : null, bs(
        4194308,
        4,
        $m.bind(null, n, e),
        r
      );
    },
    useLayoutEffect: function(e, n) {
      return bs(4194308, 4, e, n);
    },
    useInsertionEffect: function(e, n) {
      bs(4, 2, e, n);
    },
    useMemo: function(e, n) {
      var r = sn();
      n = n === void 0 ? null : n;
      var l = e();
      if (ea) {
        di(!0);
        try {
          e();
        } finally {
          di(!1);
        }
      }
      return r.memoizedState = [l, n], l;
    },
    useReducer: function(e, n, r) {
      var l = sn();
      if (r !== void 0) {
        var u = r(n);
        if (ea) {
          di(!0);
          try {
            r(n);
          } finally {
            di(!1);
          }
        }
      } else u = n;
      return l.memoizedState = l.baseState = u, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      }, l.queue = e, e = e.dispatch = D2.bind(
        null,
        Me,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var n = sn();
      return e = { current: e }, n.memoizedState = e;
    },
    useState: function(e) {
      e = Vc(e);
      var n = e.queue, r = Wm.bind(null, Me, n);
      return n.dispatch = r, [e.memoizedState, r];
    },
    useDebugValue: Fc,
    useDeferredValue: function(e, n) {
      var r = sn();
      return Xc(r, e, n);
    },
    useTransition: function() {
      var e = Vc(!1);
      return e = Xm.bind(
        null,
        Me,
        e.queue,
        !0,
        !1
      ), sn().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, n, r) {
      var l = Me, u = sn();
      if (Le) {
        if (r === void 0)
          throw Error(o(407));
        r = r();
      } else {
        if (r = n(), rt === null)
          throw Error(o(349));
        ($e & 127) !== 0 || Sm(l, n, r);
      }
      u.memoizedState = r;
      var d = { value: r, getSnapshot: n };
      return u.queue = d, Im(_m.bind(null, l, d, e), [
        e
      ]), l.flags |= 2048, qa(
        9,
        { destroy: void 0 },
        zm.bind(
          null,
          l,
          d,
          r,
          n
        ),
        null
      ), r;
    },
    useId: function() {
      var e = sn(), n = rt.identifierPrefix;
      if (Le) {
        var r = gi, l = mi;
        r = (l & ~(1 << 32 - rn(l) - 1)).toString(32) + r, n = "_" + n + "R_" + r, r = hs++, 0 < r && (n += "H" + r.toString(32)), n += "_";
      } else
        r = j2++, n = "_" + n + "r_" + r.toString(32) + "_";
      return e.memoizedState = n;
    },
    useHostTransitionStatus: Pc,
    useFormState: Mm,
    useActionState: Mm,
    useOptimistic: function(e) {
      var n = sn();
      n.memoizedState = n.baseState = e;
      var r = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = r, n = Kc.bind(
        null,
        Me,
        !0,
        r
      ), r.dispatch = n, [e, n];
    },
    useMemoCache: Zc,
    useCacheRefresh: function() {
      return sn().memoizedState = O2.bind(
        null,
        Me
      );
    },
    useEffectEvent: function(e) {
      var n = sn(), r = { impl: e };
      return n.memoizedState = r, function() {
        if ((Ke & 2) !== 0)
          throw Error(o(440));
        return r.impl.apply(void 0, arguments);
      };
    }
  }, ig = {
    readContext: Vt,
    use: gs,
    useCallback: Ym,
    useContext: Vt,
    useEffect: Gc,
    useImperativeHandle: Vm,
    useInsertionEffect: Zm,
    useLayoutEffect: qm,
    useMemo: Gm,
    useReducer: xs,
    useRef: Bm,
    useState: function() {
      return xs(Gi);
    },
    useDebugValue: Fc,
    useDeferredValue: function(e, n) {
      var r = yt();
      return Fm(
        r,
        it.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = xs(Gi)[0], n = yt().memoizedState;
      return [
        typeof e == "boolean" ? e : ql(e),
        n
      ];
    },
    useSyncExternalStore: km,
    useId: Km,
    useHostTransitionStatus: Pc,
    useFormState: Rm,
    useActionState: Rm,
    useOptimistic: function(e, n) {
      var r = yt();
      return Cm(r, it, e, n);
    },
    useMemoCache: Zc,
    useCacheRefresh: Jm,
    useEffectEvent: Hm
  }, M2 = {
    readContext: Vt,
    use: gs,
    useCallback: Ym,
    useContext: Vt,
    useEffect: Gc,
    useImperativeHandle: Vm,
    useInsertionEffect: Zm,
    useLayoutEffect: qm,
    useMemo: Gm,
    useReducer: $c,
    useRef: Bm,
    useState: function() {
      return $c(Gi);
    },
    useDebugValue: Fc,
    useDeferredValue: function(e, n) {
      var r = yt();
      return it === null ? Xc(r, e, n) : Fm(
        r,
        it.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = $c(Gi)[0], n = yt().memoizedState;
      return [
        typeof e == "boolean" ? e : ql(e),
        n
      ];
    },
    useSyncExternalStore: km,
    useId: Km,
    useHostTransitionStatus: Pc,
    useFormState: Lm,
    useActionState: Lm,
    useOptimistic: function(e, n) {
      var r = yt();
      return it !== null ? Cm(r, it, e, n) : (r.baseState = e, [e, r.queue.dispatch]);
    },
    useMemoCache: Zc,
    useCacheRefresh: Jm,
    useEffectEvent: Hm
  };
  function Jc(e, n, r, l) {
    n = e.memoizedState, r = r(l, n), r = r == null ? n : X({}, n, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var Wc = {
    enqueueSetState: function(e, n, r) {
      e = e._reactInternals;
      var l = On(), u = fr(l);
      u.payload = n, r != null && (u.callback = r), n = dr(e, u, l), n !== null && (yn(n, e, l), Ll(n, e, l));
    },
    enqueueReplaceState: function(e, n, r) {
      e = e._reactInternals;
      var l = On(), u = fr(l);
      u.tag = 1, u.payload = n, r != null && (u.callback = r), n = dr(e, u, l), n !== null && (yn(n, e, l), Ll(n, e, l));
    },
    enqueueForceUpdate: function(e, n) {
      e = e._reactInternals;
      var r = On(), l = fr(r);
      l.tag = 2, n != null && (l.callback = n), n = dr(e, l, r), n !== null && (yn(n, e, r), Ll(n, e, r));
    }
  };
  function rg(e, n, r, l, u, d, y) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, d, y) : n.prototype && n.prototype.isPureReactComponent ? !Tl(r, l) || !Tl(u, d) : !0;
  }
  function ag(e, n, r, l) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(r, l), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(r, l), n.state !== e && Wc.enqueueReplaceState(n, n.state, null);
  }
  function ta(e, n) {
    var r = n;
    if ("ref" in n) {
      r = {};
      for (var l in n)
        l !== "ref" && (r[l] = n[l]);
    }
    if (e = e.defaultProps) {
      r === n && (r = X({}, r));
      for (var u in e)
        r[u] === void 0 && (r[u] = e[u]);
    }
    return r;
  }
  function lg(e) {
    Qo(e);
  }
  function og(e) {
    console.error(e);
  }
  function sg(e) {
    Qo(e);
  }
  function ks(e, n) {
    try {
      var r = e.onUncaughtError;
      r(n.value, { componentStack: n.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function ug(e, n, r) {
    try {
      var l = e.onCaughtError;
      l(r.value, {
        componentStack: r.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function ef(e, n, r) {
    return r = fr(r), r.tag = 3, r.payload = { element: null }, r.callback = function() {
      ks(e, n);
    }, r;
  }
  function cg(e) {
    return e = fr(e), e.tag = 3, e;
  }
  function fg(e, n, r, l) {
    var u = r.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var d = l.value;
      e.payload = function() {
        return u(d);
      }, e.callback = function() {
        ug(n, r, l);
      };
    }
    var y = r.stateNode;
    y !== null && typeof y.componentDidCatch == "function" && (e.callback = function() {
      ug(n, r, l), typeof u != "function" && (vr === null ? vr = /* @__PURE__ */ new Set([this]) : vr.add(this));
      var k = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: k !== null ? k : ""
      });
    });
  }
  function R2(e, n, r, l, u) {
    if (r.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (n = r.alternate, n !== null && Fr(
        n,
        r,
        u,
        !0
      ), r = Yt.current, r !== null) {
        switch (r.tag) {
          case 31:
          case 13:
          case 19:
            return en === null ? $s() : r.alternate === null && gt === 0 && (gt = 3), r.flags &= -257, r.flags |= 65536, r.lanes = u, l === ss ? r.flags |= 16384 : (n = r.updateQueue, n === null ? r.updateQueue = /* @__PURE__ */ new Set([l]) : n.add(l), If(e, l, u)), !1;
          case 22:
            return r.flags |= 65536, l === ss ? r.flags |= 16384 : (n = r.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, r.updateQueue = n) : (r = n.retryQueue, r === null ? n.retryQueue = /* @__PURE__ */ new Set([l]) : r.add(l)), If(e, l, u)), !1;
        }
        throw Error(o(435, r.tag));
      }
      return If(e, l, u), $s(), !1;
    }
    if (Le)
      return n = Yt.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = u, l !== vc && (e = Error(o(422), { cause: l }), Ol(qn(e, r)))) : (l !== vc && (n = Error(o(423), {
        cause: l
      }), Ol(
        qn(n, r)
      )), e = e.current.alternate, e.flags |= 65536, u &= -u, e.lanes |= u, l = qn(l, r), u = ef(
        e.stateNode,
        l,
        u
      ), Nc(e, u), gt !== 4 && (gt = 2)), !1;
    var d = Error(o(520), { cause: l });
    if (d = qn(d, r), Kl === null ? Kl = [d] : Kl.push(d), gt !== 4 && (gt = 2), n === null) return !0;
    l = qn(l, r), r = n;
    do {
      switch (r.tag) {
        case 3:
          return r.flags |= 65536, e = u & -u, r.lanes |= e, e = ef(r.stateNode, l, e), Nc(r, e), !1;
        case 1:
          if (n = r.type, d = r.stateNode, (r.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (vr === null || !vr.has(d))))
            return r.flags |= 65536, u &= -u, r.lanes |= u, u = cg(u), fg(
              u,
              e,
              r,
              l
            ), Nc(r, u), !1;
          break;
        case 22:
          if (r.memoizedState !== null)
            return r.flags |= 65536, !1;
      }
      r = r.return;
    } while (r !== null);
    return !1;
  }
  var tf = Error(o(461)), Et = !1;
  function At(e, n, r, l) {
    n.child = e === null ? mm(n, null, r, l) : Wr(
      n,
      e.child,
      r,
      l
    );
  }
  function dg(e, n, r, l, u) {
    r = r.render;
    var d = n.ref;
    if ("ref" in l) {
      var y = {};
      for (var k in l)
        k !== "ref" && (y[k] = l[k]);
    } else y = l;
    return Xr(n), l = Lc(
      e,
      n,
      r,
      y,
      d,
      u
    ), k = Bc(), e !== null && !Et ? (Ic(e, n, u), Fi(e, n, u)) : (Le && k && ts(n), n.flags |= 1, At(e, n, l, u), n.child);
  }
  function pg(e, n, r, l, u) {
    if (e === null) {
      var d = r.type;
      return typeof d == "function" && !gc(d) && d.defaultProps === void 0 && r.compare === null ? (n.tag = 15, n.type = d, hg(
        e,
        n,
        d,
        l,
        u
      )) : (e = Wo(
        r.type,
        null,
        l,
        n,
        n.mode,
        u
      ), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (d = e.child, !cf(e, u)) {
      var y = d.memoizedProps;
      if (r = r.compare, r = r !== null ? r : Tl, r(y, l) && e.ref === n.ref)
        return Fi(e, n, u);
    }
    return n.flags |= 1, e = Zi(d, l), e.ref = n.ref, e.return = n, n.child = e;
  }
  function hg(e, n, r, l, u) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (Tl(d, l) && e.ref === n.ref)
        if (Et = !1, n.pendingProps = l = d, cf(e, u))
          (e.flags & 131072) !== 0 && (Et = !0);
        else
          return n.lanes = e.lanes, Fi(e, n, u);
    }
    return nf(
      e,
      n,
      r,
      l,
      u
    );
  }
  function mg(e, n, r, l) {
    var u = l.children, d = e !== null ? e.memoizedState : null;
    if (e === null && n.stateNode === null && (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (d = d !== null ? d.baseLanes | r : r, e !== null) {
          for (l = n.child = e.child, u = 0; l !== null; )
            u = u | l.lanes | l.childLanes, l = l.sibling;
          l = u & ~d;
        } else l = 0, n.child = null;
        return gg(
          e,
          n,
          d,
          r,
          l
        );
      }
      if ((r & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && ls(
          n,
          d !== null ? d.cachePool : null
        ), d !== null ? bm(n, d) : Oc(), ym(n);
      else
        return l = n.lanes = 536870912, gg(
          e,
          n,
          d !== null ? d.baseLanes | r : r,
          r,
          l
        );
    } else
      d !== null ? (ls(n, d.cachePool), bm(n, d), mr(), n.memoizedState = null) : (e !== null && ls(n, null), Oc(), mr());
    return At(e, n, u, r), n.child;
  }
  function Vl(e, n) {
    return e !== null && e.tag === 22 || n.stateNode !== null || (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.sibling;
  }
  function gg(e, n, r, l, u) {
    var d = jc();
    return d = d === null ? null : { parent: _t._currentValue, pool: d }, n.memoizedState = {
      baseLanes: r,
      cachePool: d
    }, e !== null && ls(n, null), Oc(), ym(n), e !== null && Fr(e, n, l, !0), n.childLanes = u, null;
  }
  function Ss(e, n) {
    return n = zs(
      { mode: n.mode, children: n.children },
      e.mode
    ), n.ref = e.ref, e.child = n, n.return = e, n;
  }
  function xg(e, n, r) {
    return Wr(n, e.child, null, r), e = Ss(n, n.pendingProps), e.flags |= 2, Cn(n), n.memoizedState = null, e;
  }
  function U2(e, n, r) {
    var l = n.pendingProps, u = (n.flags & 128) !== 0;
    if (n.flags &= -129, e === null) {
      if (Le) {
        if (l.mode === "hidden")
          return e = Ss(n, l), n.lanes = 536870912, e.memoizedState = { baseLanes: 0, cachePool: null }, Vl(null, e);
        if (Mc(n), (e = ot) ? (e = $x(
          e,
          Yn
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (n.memoizedState = {
          dehydrated: e,
          treeContext: ar !== null ? { id: mi, overflow: gi } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, r = em(e), r.return = n, n.child = r, Rt = n, ot = null)) : e = null, e === null) throw or(n);
        return n.lanes = 536870912, null;
      }
      return Ss(n, l);
    }
    var d = e.memoizedState;
    if (d !== null) {
      var y = d.dehydrated;
      if (Mc(n), u)
        if (n.flags & 256)
          n.flags &= -257, n = xg(
            e,
            n,
            r
          );
        else if (n.memoizedState !== null)
          n.child = e.child, n.flags |= 128, n = null;
        else throw Error(o(558));
      else if (Et || Fr(e, n, r, !1), u = (r & e.childLanes) !== 0, Et || u) {
        if (pr.current === null) {
          if (l = rt, l !== null && (y = ln(l, r), y !== 0 && y !== d.retryLane))
            throw d.retryLane = y, $r(e, y), yn(l, e, y), tf;
          $s();
        }
        n = xg(
          e,
          n,
          r
        );
      } else
        e = d.treeContext, ot = Fn(y.nextSibling), Rt = n, Le = !0, lr = null, Yn = !1, e !== null && im(n, e), n = Ss(n, l), n.flags |= 134221824;
      return n;
    }
    return e = Zi(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = n.ref, n.child = e, e.return = n, e;
  }
  function $a(e, n) {
    var r = n.ref;
    if (r === null)
      e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof r != "function" && typeof r != "object")
        throw Error(o(284));
      (e === null || e.ref !== r) && (n.flags |= 4194816);
    }
  }
  function nf(e, n, r, l, u) {
    return Xr(n), r = Lc(
      e,
      n,
      r,
      l,
      void 0,
      u
    ), l = Bc(), e !== null && !Et ? (Ic(e, n, u), Fi(e, n, u)) : (Le && l && ts(n), n.flags |= 1, At(e, n, r, u), n.child);
  }
  function bg(e, n, r, l, u, d) {
    return Xr(n), n.updateQueue = null, r = wm(
      n,
      l,
      r,
      u
    ), vm(e), l = Bc(), e !== null && !Et ? (Ic(e, n, d), Fi(e, n, d)) : (Le && l && ts(n), n.flags |= 1, At(e, n, r, d), n.child);
  }
  function yg(e, n, r, l, u) {
    if (Xr(n), n.stateNode === null) {
      var d = Da, y = r.contextType;
      typeof y == "object" && y !== null && (d = Vt(y)), d = new r(l, d), n.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, d.updater = Wc, n.stateNode = d, d._reactInternals = n, d = n.stateNode, d.props = l, d.state = n.memoizedState, d.refs = {}, Cc(n), y = r.contextType, d.context = typeof y == "object" && y !== null ? Vt(y) : Da, d.state = n.memoizedState, y = r.getDerivedStateFromProps, typeof y == "function" && (Jc(
        n,
        r,
        y,
        l
      ), d.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (y = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), y !== d.state && Wc.enqueueReplaceState(d, d.state, null), Il(n, l, d, u), Bl(), d.state = n.memoizedState), typeof d.componentDidMount == "function" && (n.flags |= 4194308), l = !0;
    } else if (e === null) {
      d = n.stateNode;
      var k = n.memoizedProps, _ = ta(r, k);
      d.props = _;
      var R = d.context, q = r.contextType;
      y = Da, typeof q == "object" && q !== null && (y = Vt(q));
      var Q = r.getDerivedStateFromProps;
      q = typeof Q == "function" || typeof d.getSnapshotBeforeUpdate == "function", k = n.pendingProps !== k, q || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (k || R !== y) && ag(
        n,
        d,
        l,
        y
      ), cr = !1;
      var D = n.memoizedState;
      d.state = D, Il(n, l, d, u), Bl(), R = n.memoizedState, k || D !== R || cr ? (typeof Q == "function" && (Jc(
        n,
        r,
        Q,
        l
      ), R = n.memoizedState), (_ = cr || rg(
        n,
        r,
        _,
        l,
        D,
        R,
        y
      )) ? (q || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = l, n.memoizedState = R), d.props = l, d.state = R, d.context = y, l = _) : (typeof d.componentDidMount == "function" && (n.flags |= 4194308), l = !1);
    } else {
      d = n.stateNode, Tc(e, n), y = n.memoizedProps, q = ta(r, y), d.props = q, Q = n.pendingProps, D = d.context, R = r.contextType, _ = Da, typeof R == "object" && R !== null && (_ = Vt(R)), k = r.getDerivedStateFromProps, (R = typeof k == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (y !== Q || D !== _) && ag(
        n,
        d,
        l,
        _
      ), cr = !1, D = n.memoizedState, d.state = D, Il(n, l, d, u), Bl();
      var H = n.memoizedState;
      y !== Q || D !== H || cr || e !== null && e.dependencies !== null && rs(e.dependencies) ? (typeof k == "function" && (Jc(
        n,
        r,
        k,
        l
      ), H = n.memoizedState), (q = cr || rg(
        n,
        r,
        q,
        l,
        D,
        H,
        _
      ) || e !== null && e.dependencies !== null && rs(e.dependencies)) ? (R || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(l, H, _), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(
        l,
        H,
        _
      )), typeof d.componentDidUpdate == "function" && (n.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || y === e.memoizedProps && D === e.memoizedState || (n.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && D === e.memoizedState || (n.flags |= 1024), n.memoizedProps = l, n.memoizedState = H), d.props = l, d.state = H, d.context = _, l = q) : (typeof d.componentDidUpdate != "function" || y === e.memoizedProps && D === e.memoizedState || (n.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && D === e.memoizedState || (n.flags |= 1024), l = !1);
    }
    return d = l, $a(e, n), l = (n.flags & 128) !== 0, d || l ? (d = n.stateNode, r = l && typeof r.getDerivedStateFromError != "function" ? null : d.render(), n.flags |= 1, e !== null && l ? (n.child = Wr(
      n,
      e.child,
      null,
      u
    ), n.child = Wr(
      n,
      null,
      r,
      u
    )) : At(e, n, r, u), n.memoizedState = d.state, e = n.child) : e = Fi(
      e,
      n,
      u
    ), e;
  }
  function vg(e, n, r, l) {
    return Yr(), n.flags |= 256, At(e, n, r, l), n.child;
  }
  var rf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function af(e) {
    return { baseLanes: e, cachePool: um() };
  }
  function lf(e, n, r) {
    return e = e !== null ? e.childLanes & ~r : 0, n && (e |= An), e;
  }
  function wg(e, n, r) {
    var l = n.pendingProps, u = !1, d = (n.flags & 128) !== 0, y;
    if ((y = d) || (y = e !== null && e.memoizedState === null ? !1 : (Gt.current & 2) !== 0), y && (u = !0, n.flags &= -129), y = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
      if (Le) {
        if (u ? hr(n) : mr(), (e = ot) ? (e = $x(
          e,
          Yn
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (n.memoizedState = {
          dehydrated: e,
          treeContext: ar !== null ? { id: mi, overflow: gi } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, r = em(e), r.return = n, n.child = r, Rt = n, ot = null)) : e = null, e === null) throw or(n);
        return ad(e) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      return d = l.children, l = l.fallback, u ? (mr(), u = n.mode, d = zs(
        { mode: "hidden", children: d },
        u
      ), l = Vr(
        l,
        u,
        r,
        null
      ), d.return = n, l.return = n, d.sibling = l, n.child = d, l = n.child, l.memoizedState = af(r), l.childLanes = lf(
        e,
        y,
        r
      ), n.memoizedState = rf, Vl(null, l)) : (hr(n), of(n, d));
    }
    var k = e.memoizedState;
    if (k !== null) {
      var _ = k.dehydrated;
      if (_ !== null)
        return L2(
          e,
          n,
          d,
          y,
          l,
          _,
          k,
          r
        );
    }
    return u ? (mr(), u = l.fallback, d = n.mode, k = e.child, _ = k.sibling, l = Zi(k, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = k.subtreeFlags & 1206910976, _ !== null ? u = Zi(_, u) : (u = Vr(
      u,
      d,
      r,
      null
    ), u.flags |= 2), u.return = n, l.return = n, l.sibling = u, n.child = l, Vl(null, l), l = n.child, u = e.child.memoizedState, u === null ? u = af(r) : (d = u.cachePool, d !== null ? (k = _t._currentValue, d = d.parent !== k ? { parent: k, pool: k } : d) : d = um(), u = {
      baseLanes: u.baseLanes | r,
      cachePool: d
    }), l.memoizedState = u, l.childLanes = lf(
      e,
      y,
      r
    ), n.memoizedState = rf, Vl(e.child, l)) : (hr(n), r = e.child, e = r.sibling, r = Zi(r, {
      mode: "visible",
      children: l.children
    }), r.return = n, r.sibling = null, e !== null && (y = n.deletions, y === null ? (n.deletions = [e], n.flags |= 16) : y.push(e)), n.child = r, n.memoizedState = null, r);
  }
  function of(e, n) {
    return n = zs(
      { mode: "visible", children: n },
      e.mode
    ), n.return = e, e.child = n;
  }
  function zs(e, n) {
    return e = mn(22, e, null, n), e.lanes = 0, e;
  }
  function _s(e, n, r) {
    return Wr(n, e.child, null, r), e = of(
      n,
      n.pendingProps.children
    ), e.flags |= 2, n.memoizedState = null, e;
  }
  function L2(e, n, r, l, u, d, y, k) {
    if (r)
      return n.flags & 256 ? (hr(n), n.flags &= -257, _s(
        e,
        n,
        k
      )) : n.memoizedState !== null ? (mr(), n.child = e.child, n.flags |= 128, null) : (mr(), d = u.fallback, y = n.mode, u = zs(
        { mode: "visible", children: u.children },
        y
      ), d = Vr(
        d,
        y,
        k,
        null
      ), d.flags |= 2, u.return = n, d.return = n, u.sibling = d, n.child = u, Wr(n, e.child, null, k), u = n.child, u.memoizedState = af(k), u.childLanes = lf(
        e,
        l,
        k
      ), n.memoizedState = rf, Vl(null, u));
    if (hr(n), ad(d)) {
      if (l = d.nextSibling && d.nextSibling.dataset, l) var _ = l.dgst;
      return l = _, l !== "" && (u = Error(o(419)), u.stack = "", u.digest = l, Ol({ value: u, source: null, stack: null })), _s(
        e,
        n,
        k
      );
    }
    if (Et || Fr(e, n, k, !1), l = (k & e.childLanes) !== 0, Et || l) {
      if (pr.current !== null)
        return _s(
          e,
          n,
          k
        );
      if (l = rt, l !== null && (u = ln(
        l,
        k
      ), u !== 0 && u !== y.retryLane))
        throw y.retryLane = u, $r(e, u), yn(l, e, u), tf;
      return rd(d) || $s(), _s(
        e,
        n,
        k
      );
    }
    return rd(d) ? (n.flags |= 192, n.child = e.child, null) : (e = y.treeContext, ot = Fn(d.nextSibling), Rt = n, Le = !0, lr = null, Yn = !1, e !== null && im(n, e), n = of(
      n,
      u.children
    ), n.flags |= 134221824, n);
  }
  function kg(e, n, r) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n), is(e.return, n, r);
  }
  function Sg(e) {
    for (var n = null; e !== null; ) {
      var r = e.alternate;
      r !== null && ds(r) === null && (n = e), e = e.sibling;
    }
    return n;
  }
  function js(e, n, r, l, u, d) {
    var y = e.memoizedState;
    y === null ? e.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: r,
      tailMode: u,
      treeForkCount: d
    } : (y.isBackwards = n, y.rendering = null, y.renderingStartTime = 0, y.last = l, y.tail = r, y.tailMode = u, y.treeForkCount = d);
  }
  function sf(e) {
    var n = e.child;
    for (e.child = null; n !== null; ) {
      var r = n.sibling;
      n.sibling = e.child, e.child = n, n = r;
    }
  }
  function uf(e, n, r) {
    var l = n.pendingProps, u = l.revealOrder, d = l.tail;
    l = l.children;
    var y = Gt.current;
    if (n.flags & 128)
      return Hl(n, y), null;
    var k = (y & 2) !== 0;
    if (k ? (y = y & 1 | 2, n.flags |= 128) : y &= 1, Hl(n, y), u === "backwards" && e !== null ? (sf(e), At(e, n, l, r), sf(e)) : At(e, n, l, r), l = Le ? Al : 0, !k && e !== null && (e.flags & 128) !== 0)
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && kg(e, r, n);
        else if (e.tag === 19)
          kg(e, r, n);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (u) {
      case "backwards":
        r = Sg(n.child), r === null ? (u = n.child, n.child = null) : (u = r.sibling, r.sibling = null, sf(n)), js(
          n,
          !0,
          u,
          null,
          d,
          l
        );
        break;
      case "unstable_legacy-backwards":
        for (r = null, u = n.child, n.child = null; u !== null; ) {
          if (e = u.alternate, e !== null && ds(e) === null) {
            n.child = u;
            break;
          }
          e = u.sibling, u.sibling = r, r = u, u = e;
        }
        js(
          n,
          !0,
          r,
          null,
          d,
          l
        );
        break;
      case "together":
        js(
          n,
          !1,
          null,
          null,
          void 0,
          l
        );
        break;
      case "independent":
        n.memoizedState = null;
        break;
      default:
        r = Sg(n.child), r === null ? (u = n.child, n.child = null) : (u = r.sibling, r.sibling = null), js(
          n,
          !1,
          u,
          r,
          d,
          l
        );
    }
    return n.child;
  }
  function zg(e, n, r) {
    var l = n.pendingProps;
    return sr(n, n.type, l.value), At(e, n, l.children, r), n.child;
  }
  function Fi(e, n, r) {
    if (e !== null && (n.dependencies = e.dependencies), yr |= n.lanes, (r & n.childLanes) === 0)
      if (e !== null) {
        if (Fr(
          e,
          n,
          r,
          !1
        ), (r & n.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && n.child !== e.child)
      throw Error(o(153));
    if (n.child !== null) {
      for (e = n.child, r = Zi(e, e.pendingProps), n.child = r, r.return = n; e.sibling !== null; )
        e = e.sibling, r = r.sibling = Zi(e, e.pendingProps), r.return = n;
      r.sibling = null;
    }
    return n.child;
  }
  function cf(e, n) {
    return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && rs(e)));
  }
  function B2(e, n, r) {
    switch (n.tag) {
      case 3:
        si(n, n.stateNode.containerInfo), sr(n, _t, e.memoizedState.cache), Yr();
        break;
      case 27:
      case 5:
        ui(n);
        break;
      case 4:
        si(n, n.stateNode.containerInfo);
        break;
      case 10:
        sr(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 31:
        if (n.memoizedState !== null)
          return n.flags |= 128, Mc(n), null;
        break;
      case 13:
        var l = n.memoizedState;
        if (l !== null) {
          if (l.dehydrated !== null)
            return hr(n), n.flags |= 128, null;
          l = Fr(
            e,
            n,
            r,
            !1
          );
          var u = n.child.childLanes;
          return l || (r & u) !== 0 ? wg(e, n, r) : (hr(n), e = Fi(
            e,
            n,
            r
          ), e !== null ? e.sibling : null);
        }
        hr(n);
        break;
      case 19:
        if (n.flags & 128)
          return uf(
            e,
            n,
            r
          );
        if (u = (e.flags & 128) !== 0, l = (r & n.childLanes) !== 0, l || (Fr(
          e,
          n,
          r,
          !1
        ), l = (r & n.childLanes) !== 0), u) {
          if (l)
            return uf(
              e,
              n,
              r
            );
          n.flags |= 128;
        }
        if (u = n.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), Hl(n, Gt.current), l) break;
        return null;
      case 22:
        return n.lanes = 0, mg(
          e,
          n,
          r,
          n.pendingProps
        );
      case 24:
        sr(n, _t, e.memoizedState.cache);
    }
    return Fi(e, n, r);
  }
  function _g(e, n, r) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps)
        Et = !0;
      else {
        if (!cf(e, r) && (n.flags & 128) === 0)
          return Et = !1, B2(
            e,
            n,
            r
          );
        Et = (e.flags & 131072) !== 0;
      }
    else
      Et = !1, Le && (n.flags & 1048576) !== 0 && nm(n, Al, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          var l = n.pendingProps;
          if (e = Kr(n.elementType), n.type = e, typeof e == "function")
            gc(e) ? (l = ta(e, l), n.tag = 1, n = yg(
              null,
              n,
              e,
              l,
              r
            )) : (n.tag = 0, n = nf(
              null,
              n,
              e,
              l,
              r
            ));
          else {
            if (e != null) {
              var u = e.$$typeof;
              if (u === W) {
                n.tag = 11, n = dg(
                  null,
                  n,
                  e,
                  l,
                  r
                );
                break e;
              } else if (u === Ae) {
                n.tag = 14, n = pg(
                  null,
                  n,
                  e,
                  l,
                  r
                );
                break e;
              } else if (u === ee) {
                n.tag = 10, n.type = e, n = zg(
                  null,
                  n,
                  r
                );
                break e;
              }
            }
            throw n = $(e) || e, Error(o(306, n, ""));
          }
        }
        return n;
      case 0:
        return nf(
          e,
          n,
          n.type,
          n.pendingProps,
          r
        );
      case 1:
        return l = n.type, u = ta(
          l,
          n.pendingProps
        ), yg(
          e,
          n,
          l,
          u,
          r
        );
      case 3:
        e: {
          if (si(
            n,
            n.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          l = n.pendingProps;
          var d = n.memoizedState;
          u = d.element, Tc(e, n), Il(n, l, null, r);
          var y = n.memoizedState;
          if (l = y.cache, sr(n, _t, l), l !== d.cache && Sc(
            n,
            [_t],
            r,
            !0
          ), Bl(), l = y.element, d.isDehydrated)
            if (d = {
              element: l,
              isDehydrated: !1,
              cache: y.cache
            }, n.updateQueue.baseState = d, n.memoizedState = d, n.flags & 256) {
              n = vg(
                e,
                n,
                l,
                r
              );
              break e;
            } else if (l !== u) {
              u = qn(
                Error(o(424)),
                n
              ), Ol(u), n = vg(
                e,
                n,
                l,
                r
              );
              break e;
            } else
              for (e = n.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, ot = Fn(e.firstChild), Rt = n, Le = !0, lr = null, Yn = !0, r = mm(
                n,
                null,
                l,
                r
              ), n.child = r; r; )
                r.flags = r.flags & -3 | 134221824, r = r.sibling;
          else {
            if (Yr(), l === u) {
              n = Fi(
                e,
                n,
                r
              );
              break e;
            }
            At(e, n, l, r);
          }
          n = n.child;
        }
        return n;
      case 26:
        return $a(e, n), e === null ? (r = Px(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = r : Le || (n.stateNode = Tx(
          n.type,
          n.pendingProps,
          It.current,
          n
        )) : n.memoizedState = Px(
          n.type,
          e.memoizedProps,
          n.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return ui(n), e === null && Le && (l = n.stateNode = Gx(
          n.type,
          n.pendingProps,
          It.current
        ), Rt = n, Yn = !0, u = ot, Sr(n.type) ? (ld = u, ot = Fn(l.firstChild)) : ot = u), At(
          e,
          n,
          n.pendingProps.children,
          r
        ), $a(e, n), e === null && (n.flags |= 4194304), n.child;
      case 5:
        return e === null && Le && ((u = l = ot) && (l = Ok(
          l,
          n.type,
          n.pendingProps,
          Yn
        ), l !== null ? (n.stateNode = l, Rt = n, ot = Fn(l.firstChild), Yn = !1, u = !0) : u = !1), u || or(n)), ui(n), u = n.type, d = n.pendingProps, y = e !== null ? e.memoizedProps : null, l = d.children, Kf(u, d) ? l = null : y !== null && Kf(u, y) && (n.flags |= 32), n.memoizedState !== null && (u = Lc(
          e,
          n,
          E2,
          null,
          null,
          r
        ), ol._currentValue = u), $a(e, n), At(e, n, l, r), n.child;
      case 6:
        return e === null && Le && ((e = r = ot) && (r = Dk(
          r,
          n.pendingProps,
          Yn
        ), r !== null ? (n.stateNode = r, Rt = n, ot = null, e = !0) : e = !1), e || or(n)), null;
      case 13:
        return wg(e, n, r);
      case 4:
        return si(
          n,
          n.stateNode.containerInfo
        ), l = n.pendingProps, e === null ? n.child = Wr(
          n,
          null,
          l,
          r
        ) : At(e, n, l, r), n.child;
      case 11:
        return dg(
          e,
          n,
          n.type,
          n.pendingProps,
          r
        );
      case 7:
        return l = n.pendingProps, $a(e, n), At(e, n, l, r), n.child;
      case 8:
        return At(
          e,
          n,
          n.pendingProps.children,
          r
        ), n.child;
      case 12:
        return At(
          e,
          n,
          n.pendingProps.children,
          r
        ), n.child;
      case 10:
        return zg(e, n, r);
      case 9:
        return u = n.type._context, l = n.pendingProps.children, Xr(n), u = Vt(u), l = l(u), n.flags |= 1, At(e, n, l, r), n.child;
      case 14:
        return pg(
          e,
          n,
          n.type,
          n.pendingProps,
          r
        );
      case 15:
        return hg(
          e,
          n,
          n.type,
          n.pendingProps,
          r
        );
      case 19:
        return uf(e, n, r);
      case 31:
        return U2(e, n, r);
      case 22:
        return mg(
          e,
          n,
          r,
          n.pendingProps
        );
      case 24:
        return Xr(n), l = Vt(_t), e === null ? (u = jc(), u === null && (u = rt, d = zc(), u.pooledCache = d, d.refCount++, d !== null && (u.pooledCacheLanes |= r), u = d), n.memoizedState = { parent: l, cache: u }, Cc(n), sr(n, _t, u)) : ((e.lanes & r) !== 0 && (Tc(e, n), Il(n, null, null, r), Bl()), u = e.memoizedState, d = n.memoizedState, u.parent !== l ? (u = { parent: l, cache: l }, n.memoizedState = u, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = u), sr(n, _t, l)) : (l = d.cache, sr(n, _t, l), l !== u.cache && Sc(
          n,
          [_t],
          r,
          !0
        ))), At(
          e,
          n,
          n.pendingProps.children,
          r
        ), n.child;
      case 30:
        return n.stateNode === null && (n.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), l = n.pendingProps, l.name != null && l.name !== "auto" ? n.flags |= e === null ? 18882560 : 18874368 : Le && ts(n), e !== null && e.memoizedProps.name !== l.name ? n.flags |= 4194816 : $a(e, n), At(e, n, l.children, r), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(o(156, n.tag));
  }
  function Xi(e) {
    e.flags |= 4;
  }
  function ff(e, n, r, l, u) {
    var d;
    if ((d = (e.mode & 32) !== 0) && (d = r === null ? eb(n, l) : eb(n, l) && (l.src !== r.src || l.srcSet !== r.srcSet)), d) {
      if (e.flags |= 16777216, (u & 335544128) === u)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (lx()) e.flags |= 8192;
        else
          throw Jr = ss, Ec;
    } else e.flags &= -16777217;
  }
  function jg(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !tb(n))
      if (lx()) e.flags |= 8192;
      else
        throw Jr = ss, Ec;
  }
  function Es(e, n) {
    n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? Zt() : 536870912, e.lanes |= n, Xa |= n);
  }
  function Yl(e, n) {
    if (!Le)
      switch (e.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var r = e.tail, l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
          break;
        default:
          for (n = e.tail, r = null; n !== null; )
            n.alternate !== null && (r = n), n = n.sibling;
          r === null ? e.tail = null : r.sibling = null;
      }
  }
  function st(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, r = 0, l = 0;
    if (n)
      for (var u = e.child; u !== null; )
        r |= u.lanes | u.childLanes, l |= u.subtreeFlags & 1206910976, l |= u.flags & 1206910976, u.return = e, u = u.sibling;
    else
      for (u = e.child; u !== null; )
        r |= u.lanes | u.childLanes, l |= u.subtreeFlags, l |= u.flags, u.return = e, u = u.sibling;
    return e.subtreeFlags |= l, e.childLanes = r, n;
  }
  function I2(e, n, r) {
    var l = n.pendingProps;
    switch (yc(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return st(n), null;
      case 1:
        return st(n), null;
      case 3:
        return r = n.stateNode, l = null, e !== null && (l = e.memoizedState.cache), n.memoizedState.cache !== l && (n.flags |= 2048), Vi(_t), Ht(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ua(n) ? Xi(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, wc())), st(n), null;
      case 26:
        var u = n.type, d = n.memoizedState;
        return e === null ? (Xi(n), d !== null ? (st(n), jg(n, d)) : (st(n), ff(
          n,
          u,
          null,
          l,
          r
        ))) : d ? d !== e.memoizedState ? (Xi(n), st(n), jg(n, d)) : (st(n), n.flags &= -16777217) : (e = e.memoizedProps, e !== l && Xi(n), st(n), ff(
          n,
          u,
          e,
          l,
          r
        )), null;
      case 27:
        if (tr(n), r = It.current, u = n.type, e !== null && n.stateNode != null)
          e.memoizedProps !== l && Xi(n);
        else {
          if (!l) {
            if (n.stateNode === null)
              throw Error(o(166));
            return st(n), n.subtreeFlags &= -33554433, null;
          }
          e = Nt.current, Ua(n) ? rm(n) : (e = Gx(u, l, r), n.stateNode = e, Xi(n));
        }
        return st(n), n.subtreeFlags &= -33554433, null;
      case 5:
        if (tr(n), u = n.type, e !== null && n.stateNode != null)
          e.memoizedProps !== l && Xi(n);
        else {
          if (!l) {
            if (n.stateNode === null)
              throw Error(o(166));
            return st(n), n.subtreeFlags &= -33554433, null;
          }
          if (d = Nt.current, Ua(n))
            rm(n);
          else {
            var y = no(
              It.current
            );
            switch (d) {
              case 1:
                d = y.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                d = y.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    d = y.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    d = y.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    d = y.createElement("div"), d.innerHTML = "<script><\/script>", d = d.removeChild(
                      d.firstChild
                    );
                    break;
                  case "select":
                    d = typeof l.is == "string" ? y.createElement("select", {
                      is: l.is
                    }) : y.createElement("select"), l.multiple ? d.multiple = !0 : l.size && (d.size = l.size);
                    break;
                  default:
                    d = typeof l.is == "string" ? y.createElement(u, { is: l.is }) : y.createElement(u);
                }
            }
            d[$t] = n, d[hn] = l;
            e: for (y = n.child; y !== null; ) {
              if (y.tag === 5 || y.tag === 6)
                d.appendChild(y.stateNode);
              else if (y.tag !== 4 && y.tag !== 27 && y.child !== null) {
                y.child.return = y, y = y.child;
                continue;
              }
              if (y === n) break e;
              for (; y.sibling === null; ) {
                if (y.return === null || y.return === n)
                  break e;
                y = y.return;
              }
              y.sibling.return = y.return, y = y.sibling;
            }
            n.stateNode = d;
            e: switch (Xt(d, u, l), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && Xi(n);
          }
        }
        return st(n), n.subtreeFlags &= -33554433, ff(
          n,
          n.type,
          e === null ? null : e.memoizedProps,
          n.pendingProps,
          r
        ), null;
      case 6:
        if (e && n.stateNode != null)
          e.memoizedProps !== l && Xi(n);
        else {
          if (typeof l != "string" && n.stateNode === null)
            throw Error(o(166));
          if (e = It.current, Ua(n)) {
            if (e = n.stateNode, r = n.memoizedProps, l = null, u = Rt, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  l = u.memoizedProps;
              }
            e[$t] = n, e = !!(e.nodeValue === r || l !== null && l.suppressHydrationWarning === !0 || _x(e.nodeValue, r)), e || or(n, !0);
          } else
            e = no(e).createTextNode(
              l
            ), e[$t] = n, n.stateNode = e;
        }
        return st(n), null;
      case 31:
        if (r = n.memoizedState, e === null || e.memoizedState !== null) {
          if (l = Ua(n), r !== null) {
            if (e === null) {
              if (!l) throw Error(o(318));
              if (e = n.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[$t] = n;
            } else
              Yr(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            st(n), e = !1;
          } else
            r = wc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = r), e = !0;
          if (!e)
            return n.flags & 256 ? (Cn(n), n) : (Cn(n), null);
          if ((n.flags & 128) !== 0)
            throw Error(o(558));
        }
        return st(n), null;
      case 13:
        if (l = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (u = Ua(n), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(o(318));
              if (u = n.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[$t] = n;
            } else
              Yr(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            st(n), u = !1;
          } else
            u = wc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return n.flags & 256 ? (Cn(n), n) : (Cn(n), null);
        }
        return Cn(n), (n.flags & 128) !== 0 ? (n.lanes = r, n) : (r = l !== null, e = e !== null && e.memoizedState !== null, r && (l = n.child, u = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (u = l.alternate.memoizedState.cachePool.pool), d = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (d = l.memoizedState.cachePool.pool), d !== u && (l.flags |= 2048)), r !== e && r && (n.child.flags |= 8192), Es(n, n.updateQueue), st(n), null);
      case 4:
        return Ht(), e === null && Gf(n.stateNode.containerInfo), n.flags |= 67108864, st(n), null;
      case 10:
        return Vi(n.type), st(n), null;
      case 19:
        if (Rc(n), l = n.memoizedState, l === null) return st(n), null;
        if (u = (n.flags & 128) !== 0, d = l.rendering, d === null)
          if (u) Yl(l, !1);
          else {
            if (gt !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = n.child; e !== null; ) {
                if (d = ds(e), d !== null) {
                  for (n.flags |= 128, Yl(l, !1), e = d.updateQueue, n.updateQueue = e, Es(n, e), n.subtreeFlags = 0, e = r, r = n.child; r !== null; )
                    Wh(r, e), r = r.sibling;
                  return Hl(
                    n,
                    Gt.current & 1 | 2
                  ), Le && qi(n, l.treeForkCount), n.child;
                }
                e = e.sibling;
              }
            l.tail !== null && Ue() > Is && (n.flags |= 128, u = !0, Yl(l, !1), n.lanes = 4194304);
          }
        else {
          if (!u)
            if (e = ds(d), e !== null) {
              if (n.flags |= 128, u = !0, e = e.updateQueue, n.updateQueue = e, Es(n, e), Yl(l, !0), l.tail === null && l.tailMode !== "collapsed" && l.tailMode !== "visible" && !d.alternate && !Le)
                return st(n), null;
            } else
              2 * Ue() - l.renderingStartTime > Is && r !== 536870912 && (n.flags |= 128, u = !0, Yl(l, !1), n.lanes = 4194304);
          l.isBackwards ? (d.sibling = n.child, n.child = d) : (e = l.last, e !== null ? e.sibling = d : n.child = d, l.last = d);
        }
        if (l.tail !== null) {
          e = l.tail;
          e: {
            for (r = e; r !== null; ) {
              if (r.alternate !== null) {
                r = !1;
                break e;
              }
              r = r.sibling;
            }
            r = !0;
          }
          return l.rendering = e, l.tail = e.sibling, l.renderingStartTime = Ue(), e.sibling = null, d = Gt.current, d = u ? d & 1 | 2 : d & 1, l.tailMode === "visible" || l.tailMode === "collapsed" || !r || Le ? Hl(n, d) : (r = d, Ge(Yt, n), Ge(Gt, r), en === null && (en = n)), Le && qi(n, l.treeForkCount), e;
        }
        return st(n), null;
      case 22:
      case 23:
        return Cn(n), Dc(), l = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (n.flags |= 8192) : l && (n.flags |= 8192), l ? (r & 536870912) !== 0 && (n.flags & 128) === 0 && (st(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : st(n), r = n.updateQueue, r !== null && Es(n, r.retryQueue), r = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== r && (n.flags |= 2048), e !== null && qe(Pr), null;
      case 24:
        return r = null, e !== null && (r = e.memoizedState.cache), n.memoizedState.cache !== r && (n.flags |= 2048), Vi(_t), st(n), null;
      case 25:
        return null;
      case 30:
        return n.flags |= 33554432, st(n), null;
    }
    throw Error(o(156, n.tag));
  }
  function H2(e, n) {
    switch (yc(n), n.tag) {
      case 1:
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return Vi(_t), Ht(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return tr(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (Cn(n), n.alternate === null)
            throw Error(o(340));
          Yr();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 13:
        if (Cn(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(o(340));
          Yr();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return Rc(n), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, e = n.memoizedState, e !== null && (e.rendering = null, e.tail = null), n.flags |= 4, n) : null;
      case 4:
        return Ht(), null;
      case 10:
        return Vi(n.type), null;
      case 22:
      case 23:
        return Cn(n), Dc(), e !== null && qe(Pr), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 24:
        return Vi(_t), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Eg(e, n) {
    switch (yc(n), n.tag) {
      case 3:
        Vi(_t), Ht();
        break;
      case 26:
      case 27:
      case 5:
        tr(n);
        break;
      case 4:
        Ht();
        break;
      case 31:
        n.memoizedState !== null && Cn(n);
        break;
      case 13:
        Cn(n);
        break;
      case 19:
        Rc(n);
        break;
      case 10:
        Vi(n.type);
        break;
      case 22:
      case 23:
        Cn(n), Dc(), e !== null && qe(Pr);
        break;
      case 24:
        Vi(_t);
    }
  }
  function Gl(e, n) {
    try {
      var r = n.updateQueue, l = r !== null ? r.lastEffect : null;
      if (l !== null) {
        var u = l.next;
        r = u;
        do {
          if ((r.tag & e) === e) {
            l = void 0;
            var d = r.create, y = r.inst;
            l = d(), y.destroy = l;
          }
          r = r.next;
        } while (r !== u);
      }
    } catch (k) {
      et(n, n.return, k);
    }
  }
  function gr(e, n, r) {
    try {
      var l = n.updateQueue, u = l !== null ? l.lastEffect : null;
      if (u !== null) {
        var d = u.next;
        l = d;
        do {
          if ((l.tag & e) === e) {
            var y = l.inst, k = y.destroy;
            if (k !== void 0) {
              y.destroy = void 0, u = n;
              var _ = r, R = k;
              try {
                R();
              } catch (q) {
                et(
                  u,
                  _,
                  q
                );
              }
            }
          }
          l = l.next;
        } while (l !== d);
      }
    } catch (q) {
      et(n, n.return, q);
    }
  }
  function Cg(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var r = e.stateNode;
      try {
        xm(n, r);
      } catch (l) {
        et(e, e.return, l);
      }
    }
  }
  function Tg(e, n, r) {
    r.props = ta(
      e.type,
      e.memoizedProps
    ), r.state = e.memoizedState;
    try {
      r.componentWillUnmount();
    } catch (l) {
      et(e, n, l);
    }
  }
  function xi(e, n) {
    try {
      var r = e.ref;
      if (r !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            var u = e.stateNode, d = Ii(e.memoizedProps, u);
            (u.ref === null || u.ref.name !== d) && (u.ref = Ux(d)), l = u.ref;
            break;
          case 7:
            if (e.stateNode === null) {
              var y = new Dn(e);
              x(
                e.child,
                !1,
                Nk,
                y,
                void 0,
                void 0
              ), e.stateNode = y;
            }
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof r == "function" ? e.refCleanup = r(l) : r.current = l;
      }
    } catch (k) {
      et(e, n, k);
    }
  }
  function Ft(e, n) {
    var r = e.ref, l = e.refCleanup;
    if (r !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (u) {
          et(e, n, u);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof r == "function")
        try {
          r(null);
        } catch (u) {
          et(e, n, u);
        }
      else r.current = null;
  }
  function Cs(e, n) {
    if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && n !== null)
      for (var r = 0; r < n.length; r++)
        qx(
          e.stateNode,
          n[r]
        );
  }
  function Ng(e) {
    for (var n = e.return; n !== null && (pf(n) && qx(e.stateNode, n.stateNode), !df(n)); )
      n = n.return;
  }
  function Fl(e) {
    for (var n = e.return; n !== null && (pf(n) && Ak(e.stateNode, n.stateNode), !df(n)); )
      n = n.return;
  }
  function df(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 27;
  }
  function pf(e) {
    return e && e.tag === 7 && e.stateNode !== null;
  }
  function hf(e) {
    var n = e.type, r = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          r.autoFocus && l.focus();
          break e;
        case "img":
          r.src ? l.src = r.src : r.srcSet && (l.srcset = r.srcSet);
      }
    } catch (u) {
      et(e, e.return, u);
    }
  }
  function mf(e, n, r) {
    try {
      var l = e.stateNode;
      dk(l, e.type, r, n), l[hn] = n;
    } catch (u) {
      et(e, e.return, u);
    }
  }
  function Ag(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Sr(e.type) || e.tag === 4;
  }
  function gf(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ag(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Sr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function xf(e, n, r, l) {
    var u = e.tag;
    if (u === 5 || u === 6)
      u = e.stateNode, n ? (r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r).insertBefore(u, n) : (n = r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r, n.appendChild(u), r = r._reactRootContainer, r != null || n.onclick !== null || (n.onclick = hi)), Cs(e, l), Fe = !0;
    else if (u !== 4 && (u === 27 && (Cs(e, l), l = null, Sr(e.type) && (r = e.stateNode, n = null)), e = e.child, e !== null))
      for (xf(
        e,
        n,
        r,
        l
      ), e = e.sibling; e !== null; )
        xf(
          e,
          n,
          r,
          l
        ), e = e.sibling;
  }
  function Ts(e, n, r, l) {
    var u = e.tag;
    if (u === 5 || u === 6)
      u = e.stateNode, n ? r.insertBefore(u, n) : r.appendChild(u), Cs(e, l), Fe = !0;
    else if (u !== 4 && (u === 27 && (Cs(e, l), l = null, Sr(e.type) && (r = e.stateNode)), e = e.child, e !== null))
      for (Ts(
        e,
        n,
        r,
        l
      ), e = e.sibling; e !== null; )
        Ts(
          e,
          n,
          r,
          l
        ), e = e.sibling;
  }
  function Og(e) {
    var n = e.stateNode, r = e.memoizedProps;
    try {
      for (var l = e.type, u = n.attributes; u.length; )
        n.removeAttributeNode(u[0]);
      Xt(n, l, r), n[$t] = e, n[hn] = r;
    } catch (d) {
      et(e, e.return, d);
    }
  }
  var Ns = !1, Tn = null;
  function Dg(e) {
    (e.tag === 30 || (e.subtreeFlags & 33554432) !== 0) && (Ns = !0);
  }
  var bi = null;
  function Mg() {
    var e = bi;
    return bi = null, e;
  }
  var gn = 0;
  function Va(e, n, r, l, u) {
    return gn = 0, Rg(
      e.child,
      n,
      r,
      l,
      u
    );
  }
  function Rg(e, n, r, l, u) {
    for (var d = !1; e !== null; ) {
      if (e.tag === 5) {
        var y = e.stateNode;
        if (l !== null) {
          var k = ed(y);
          l.push(k), k.view && (d = !0);
        } else
          d || ed(y).view && (d = !0);
        Ns = !0, Mx(
          y,
          gn === 0 ? n : n + "_" + gn,
          r
        ), gn++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && u || Rg(
        e.child,
        n,
        r,
        l,
        u
      ) && (d = !0));
      e = e.sibling;
    }
    return d;
  }
  function yi(e, n) {
    for (; e !== null; )
      e.tag === 5 ? Rx(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && n || yi(
        e.child,
        n
      )), e = e.sibling;
  }
  function As(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if ((e.tag !== 22 || e.memoizedState === null) && (As(e), e.tag === 30 && (e.flags & 18874368) !== 0 && e.stateNode.paired)) {
          var n = e.memoizedProps;
          if (n.name == null || n.name === "auto")
            throw Error(o(544));
          var r = n.name;
          n = Hi(n.default, n.share), n !== "none" && (Va(
            e,
            r,
            n,
            null,
            !1
          ) || yi(e.child, !1));
        }
        e = e.sibling;
      }
  }
  function bf(e, n) {
    if (e.tag === 30) {
      var r = e.stateNode, l = e.memoizedProps, u = Ii(l, r), d = Hi(
        l.default,
        r.paired ? l.share : l.enter
      );
      d !== "none" ? Va(e, u, d, null, !1) ? (As(e), r.paired || n || Ja(e, l.onEnter)) : yi(e.child, !1) : As(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        bf(e, n), e = e.sibling;
    else As(e);
  }
  function yf(e) {
    if (Tn !== null && Tn.size !== 0) {
      var n = Tn;
      if ((e.subtreeFlags & 18874368) !== 0)
        for (e = e.child; e !== null; ) {
          if (e.tag !== 22 || e.memoizedState === null) {
            if (e.tag === 30 && (e.flags & 18874368) !== 0) {
              var r = e.memoizedProps, l = r.name;
              if (l != null && l !== "auto") {
                var u = n.get(l);
                if (u !== void 0) {
                  var d = Hi(
                    r.default,
                    r.share
                  );
                  if (d !== "none" && (Va(
                    e,
                    l,
                    d,
                    null,
                    !1
                  ) ? (d = e.stateNode, u.paired = d, d.paired = u, Ja(e, r.onShare)) : yi(e.child, !1)), n.delete(l), n.size === 0) break;
                }
              }
            }
            yf(e);
          }
          e = e.sibling;
        }
    }
  }
  function vf(e) {
    if (e.tag === 30) {
      var n = e.memoizedProps, r = Ii(n, e.stateNode), l = Tn !== null ? Tn.get(r) : void 0, u = Hi(
        n.default,
        l !== void 0 ? n.share : n.exit
      );
      u !== "none" && (Va(e, r, u, null, !1) ? l !== void 0 ? (u = e.stateNode, l.paired = u, u.paired = l, Tn.delete(r), Ja(e, n.onShare)) : Ja(e, n.onExit) : yi(e.child, !1)), Tn !== null && yf(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        vf(e), e = e.sibling;
    else
      Tn !== null && yf(e);
  }
  function Ug(e) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var n = e.memoizedProps, r = Ii(n, e.stateNode);
        n = Hi(n.default, n.update), e.flags &= -5, n !== "none" && Va(
          e,
          r,
          n,
          e.memoizedState = [],
          !1
        );
      } else
        (e.subtreeFlags & 33554432) !== 0 && Ug(e);
      e = e.sibling;
    }
  }
  function wf(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if (e.tag !== 22 || e.memoizedState === null) {
          if (e.tag === 30 && (e.flags & 18874368) !== 0) {
            var n = e.stateNode;
            n.paired !== null && (n.paired = null, yi(e.child, !1));
          }
          wf(e);
        }
        e = e.sibling;
      }
  }
  function Os(e) {
    if (e.tag === 30)
      e.stateNode.paired = null, yi(e.child, !1), wf(e);
    else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        Os(e), e = e.sibling;
    else wf(e);
  }
  function Lg(e) {
    for (e = e.child; e !== null; )
      e.tag === 30 ? yi(e.child, !1) : (e.subtreeFlags & 33554432) !== 0 && Lg(e), e = e.sibling;
  }
  function kf(e, n, r, l, u, d, y) {
    for (var k = !1; n !== null; ) {
      if (n.tag === 5) {
        var _ = n.stateNode;
        if (d !== null && gn < d.length) {
          var R = d[gn], q = ed(_);
          (R.view || q.view) && (k = !0);
          var Q;
          if (Q = (e.flags & 4) === 0)
            if (q.clip) Q = !0;
            else {
              Q = R.rect;
              var D = q.rect;
              Q = Q.y !== D.y || Q.x !== D.x || Q.height !== D.height || Q.width !== D.width;
            }
          Q && (e.flags |= 4), q.abs ? q = !R.abs : (R = R.rect, q = q.rect, q = R.height !== q.height || R.width !== q.width), q && (e.flags |= 32);
        } else e.flags |= 32;
        (e.flags & 4) !== 0 && Mx(
          _,
          gn === 0 ? r : r + "_" + gn,
          u
        ), k && (e.flags & 4) !== 0 || (bi === null && (bi = []), bi.push(
          _,
          gn === 0 ? l : l + "_" + gn,
          n.memoizedProps
        )), gn++;
      } else (n.tag !== 22 || n.memoizedState === null) && (n.tag === 30 && y ? e.flags |= n.flags & 32 : kf(
        e,
        n.child,
        r,
        l,
        u,
        d,
        y
      ) && (k = !0));
      n = n.sibling;
    }
    return k;
  }
  function Bg(e, n) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var r = e.memoizedProps, l = e.stateNode, u = Ii(r, l), d = Hi(r.default, r.update), y;
        y = e.memoizedState, e.memoizedState = null, l = e;
        var k = e.child;
        gn = 0, u = kf(
          l,
          k,
          u,
          u,
          d,
          y,
          !1
        ), (e.flags & 4) !== 0 && u && Ja(e, r.onUpdate);
      } else
        (e.subtreeFlags & 33554432) !== 0 && Bg(e);
      e = e.sibling;
    }
  }
  var Ut = !1, Je = !1, vi = !1, Sf = !1, Ig = typeof WeakSet == "function" ? WeakSet : Set, Lt = null, wi = !1, Xl = !1, Ds = !1, zf = !1;
  function Z2(e, n, r) {
    if (e = e.containerInfo, Qf = sl, e = $h(e), uc(e)) {
      if ("selectionStart" in e)
        var l = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          l = (l = e.ownerDocument) && l.defaultView || window;
          var u = l.getSelection && l.getSelection();
          if (u && u.rangeCount !== 0) {
            l = u.anchorNode;
            var d = u.anchorOffset, y = u.focusNode;
            u = u.focusOffset;
            try {
              l.nodeType, y.nodeType;
            } catch {
              l = null;
              break e;
            }
            var k = 0, _ = -1, R = -1, q = 0, Q = 0, D = e, H = null;
            t: for (; ; ) {
              for (var fe; D !== l || d !== 0 && D.nodeType !== 3 || (_ = k + d), D !== y || u !== 0 && D.nodeType !== 3 || (R = k + u), D.nodeType === 3 && (k += D.nodeValue.length), (fe = D.firstChild) !== null; )
                H = D, D = fe;
              for (; ; ) {
                if (D === e) break t;
                if (H === l && ++q === d && (_ = k), H === y && ++Q === u && (R = k), (fe = D.nextSibling) !== null) break;
                D = H, H = D.parentNode;
              }
              D = fe;
            }
            l = _ === -1 || R === -1 ? null : { start: _, end: R };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Pf = { focusedElem: e, selectionRange: l }, sl = !1, r = (r & 335544064) === r, Lt = n, n = r ? 9270 : 1024; Lt !== null; ) {
      if (e = Lt, r && (l = e.deletions, l !== null))
        for (d = 0; d < l.length; d++)
          r && vf(l[d]);
      if (e.alternate === null && (e.flags & 2) !== 0)
        r && Dg(e), Ms(r);
      else {
        if (e.tag === 22) {
          if (l = e.alternate, e.memoizedState !== null) {
            l !== null && l.memoizedState === null && r && vf(l), Ms(r);
            continue;
          } else if (l !== null && l.memoizedState !== null) {
            r && Dg(e), Ms(r);
            continue;
          }
        }
        l = e.child, (e.subtreeFlags & n) !== 0 && l !== null ? (l.return = e, Lt = l) : (r && Ug(e), Ms(r));
      }
    }
    Tn = null;
  }
  function Ms(e) {
    for (; Lt !== null; ) {
      var n = Lt, r = e, l = n.alternate, u = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((u & 1024) !== 0 && l !== null) {
            r = void 0, u = l.memoizedProps, l = l.memoizedState;
            var d = n.stateNode;
            try {
              var y = ta(
                n.type,
                u
              );
              r = d.getSnapshotBeforeUpdate(
                y,
                l
              ), d.__reactInternalSnapshotBeforeUpdate = r;
            } catch (k) {
              et(n, n.return, k);
            }
          }
          break;
        case 3:
          if ((u & 1024) !== 0) {
            if (l = n.stateNode.containerInfo, r = l.nodeType, r === 9)
              id(l);
            else if (r === 1)
              switch (l.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  id(l);
                  break;
                default:
                  l.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          r && l !== null && (r = Ii(
            l.memoizedProps,
            l.stateNode
          ), u = n.memoizedProps, u = Hi(u.default, u.update), u !== "none" && Va(
            l,
            r,
            u,
            l.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((u & 1024) !== 0) throw Error(o(163));
      }
      if (l = n.sibling, l !== null) {
        l.return = n.return, Lt = l;
        break;
      }
      Lt = n.return;
    }
  }
  function Hg(e, n, r) {
    var l = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        ki(e, r), l & 4 && Gl(5, r);
        break;
      case 1:
        if (ki(e, r), l & 4)
          if (e = r.stateNode, n === null)
            try {
              e.componentDidMount();
            } catch (y) {
              et(r, r.return, y);
            }
          else {
            var u = ta(
              r.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              e.componentDidUpdate(
                u,
                n,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (y) {
              et(
                r,
                r.return,
                y
              );
            }
          }
        l & 64 && Cg(r), l & 512 && xi(r, r.return);
        break;
      case 3:
        if (ki(e, r), l & 64 && (e = r.updateQueue, e !== null)) {
          if (n = null, r.child !== null)
            switch (r.child.tag) {
              case 27:
              case 5:
                n = r.child.stateNode;
                break;
              case 1:
                n = r.child.stateNode;
            }
          try {
            xm(e, n);
          } catch (y) {
            et(r, r.return, y);
          }
        }
        break;
      case 27:
        n === null && l & 4 && Og(r);
      case 26:
      case 5:
        ki(e, r), n === null && l & 4 && hf(r), l & 512 && xi(r, r.return);
        break;
      case 12:
        ki(e, r);
        break;
      case 31:
        ki(e, r), l & 4 && Vg(e, r);
        break;
      case 13:
        ki(e, r), l & 4 && Yg(e, r), l & 64 && (e = r.memoizedState, e !== null && (e = e.dehydrated, e !== null && (r = W2.bind(
          null,
          r
        ), Mk(e, r))));
        break;
      case 22:
        if (l = r.memoizedState !== null || Ut, !l) {
          var d = n !== null && n.memoizedState !== null || Je;
          n = Ut, u = Je, Ut = l, (Je = d) && !u ? (l = 2, (r.subtreeFlags & 8772) !== 0 && (l |= 1), ti(
            e,
            r,
            l
          )) : ki(e, r), Ut = n, Je = u;
        }
        break;
      case 30:
        ki(e, r), l & 512 && xi(r, r.return);
        break;
      case 7:
        l & 512 && xi(r, r.return);
      default:
        ki(e, r);
    }
  }
  function _f(e, n) {
    for (e = e.child; e !== null; )
      Zg(e, n), e = e.sibling;
  }
  function Zg(e, n) {
    switch (e.tag) {
      case 5:
      case 26:
        try {
          var r = e.stateNode;
          if (n) {
            var l = r.style;
            typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none";
          } else {
            var u = e.stateNode, d = e.memoizedProps.style, y = d != null && d.hasOwnProperty("display") ? d.display : null;
            u.style.display = y == null || typeof y == "boolean" ? "" : ("" + y).trim();
          }
        } catch (_) {
          et(e, e.return, _);
        }
        jf(e, n);
        break;
      case 6:
        try {
          e.stateNode.nodeValue = n ? "" : e.memoizedProps, Fe = !0;
        } catch (_) {
          et(e, e.return, _);
        }
        break;
      case 18:
        try {
          var k = e.stateNode;
          n ? Dx(k, !0) : Dx(e.stateNode, !1);
        } catch (_) {
          et(e, e.return, _);
        }
        break;
      case 22:
      case 23:
        e.memoizedState === null && _f(e, n);
        break;
      default:
        _f(e, n);
    }
  }
  function jf(e, n) {
    if (e.subtreeFlags & 67108864)
      for (e = e.child; e !== null; ) {
        e: {
          var r = e, l = n;
          switch (r.tag) {
            case 4:
              Zg(r, l);
              break e;
            case 22:
              r.memoizedState === null && jf(r, l);
              break e;
            default:
              jf(r, l);
          }
        }
        e = e.sibling;
      }
  }
  function qg(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, qg(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && Io(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var ct = null, xn = !1;
  function Wn(e, n, r) {
    for (r = r.child; r !== null; )
      $g(e, n, r), r = r.sibling;
  }
  function $g(e, n, r) {
    if (Jt && typeof Jt.onCommitFiberUnmount == "function")
      try {
        Jt.onCommitFiberUnmount(Oi, r);
      } catch {
      }
    switch (r.tag) {
      case 26:
        Je || Ft(r, n), Wn(
          e,
          n,
          r
        ), r.memoizedState ? r.memoizedState.count-- : r.stateNode && !Je && (r = r.stateNode, r.parentNode.removeChild(r));
        break;
      case 27:
        Je || Ft(r, n), Fl(r);
        var l = ct, u = xn;
        Sr(r.type) && (ct = r.stateNode, xn = !1), Wn(
          e,
          n,
          r
        ), Fx(
          r.stateNode,
          r.type,
          r.memoizedProps
        ), ct = l, xn = u;
        break;
      case 5:
        Je || Ft(r, n), Fl(r);
      case 6:
        if (r.tag === 6 && Fl(r), l = ct, u = xn, ct = null, Wn(
          e,
          n,
          r
        ), ct = l, xn = u, ct !== null)
          if (xn)
            try {
              (ct.nodeType === 9 ? ct.body : ct.nodeName === "HTML" ? ct.ownerDocument.body : ct).removeChild(r.stateNode), Fe = !0;
            } catch (d) {
              et(
                r,
                n,
                d
              );
            }
          else
            try {
              ct.removeChild(r.stateNode), Fe = !0;
            } catch (d) {
              et(
                r,
                n,
                d
              );
            }
        break;
      case 18:
        ct !== null && (xn ? (e = ct, Ox(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          r.stateNode
        ), ul(e)) : Ox(ct, r.stateNode));
        break;
      case 4:
        l = ct, u = xn, ct = r.stateNode.containerInfo, xn = !0, Wn(
          e,
          n,
          r
        ), ct = l, xn = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        gr(2, r, n), Je || gr(4, r, n), Wn(
          e,
          n,
          r
        );
        break;
      case 1:
        Je || (Ft(r, n), l = r.stateNode, typeof l.componentWillUnmount == "function" && Tg(
          r,
          n,
          l
        )), Wn(
          e,
          n,
          r
        );
        break;
      case 21:
        Wn(
          e,
          n,
          r
        );
        break;
      case 22:
        Je = (l = Je) || r.memoizedState !== null, Wn(
          e,
          n,
          r
        ), Je = l;
        break;
      case 30:
        Ft(r, n), Wn(
          e,
          n,
          r
        );
        break;
      case 7:
        Je || Ft(r, n), Wn(
          e,
          n,
          r
        );
        break;
      default:
        Wn(
          e,
          n,
          r
        );
    }
  }
  function Vg(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        ul(e);
      } catch (r) {
        et(n, n.return, r);
      }
    }
  }
  function Yg(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        ul(e);
      } catch (r) {
        et(n, n.return, r);
      }
  }
  function q2(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new Ig()), n;
      case 22:
        return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new Ig()), n;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function Rs(e, n) {
    var r = q2(e);
    n.forEach(function(l) {
      if (!r.has(l)) {
        r.add(l);
        var u = ek.bind(null, e, l);
        l.then(u, u);
      }
    });
  }
  function un(e, n, r) {
    var l = n.deletions;
    if (l !== null)
      for (var u = 0; u < l.length; u++) {
        var d = l[u], y = e, k = n, _ = k;
        e: for (; _ !== null; ) {
          switch (_.tag) {
            case 27:
              if (Sr(_.type)) {
                ct = _.stateNode, xn = !1;
                break e;
              }
              break;
            case 5:
              ct = _.stateNode, xn = !1;
              break e;
            case 3:
            case 4:
              ct = _.stateNode.containerInfo, xn = !0;
              break e;
          }
          _ = _.return;
        }
        if (ct === null) throw Error(o(160));
        $g(y, k, d), ct = null, xn = !1, y = d.alternate, y !== null && (y.return = null), d.return = null;
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; )
        Gg(n, e, r), n = n.sibling;
  }
  var ei = null;
  function Gg(e, n, r) {
    var l = e.alternate, u = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (u & 4 && (l = e.updateQueue, l = l !== null ? l.events : null, l !== null))
          for (var d = 0; d < l.length; d++) {
            var y = l[d];
            y.ref.impl = y.nextImpl;
          }
        un(n, e, r), cn(e), u & 4 && (gr(3, e, e.return), Gl(3, e), gr(5, e, e.return));
        break;
      case 1:
        un(n, e, r), cn(e), u & 512 && (Je || l === null || Ft(l, l.return)), u & 64 && Ut && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (r = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = r === null ? n : r.concat(n))));
        break;
      case 26:
        if (d = ei, un(n, e, r), cn(e), u & 512 && (Je || l === null || Ft(l, l.return)), u & 4)
          if (u = l !== null ? l.memoizedState : null, r = e.memoizedState, l === null)
            if (r === null)
              if (e.stateNode === null)
                if (Ut)
                  e.stateNode = Tx(
                    e.type,
                    e.memoizedProps,
                    n.containerInfo,
                    e
                  );
                else {
                  e: {
                    n = e.type, r = e.memoizedProps, u = d.ownerDocument || d;
                    t: switch (n) {
                      case "title":
                        l = u.getElementsByTagName("title")[0], (!l || l[vl] || l[$t] || l.namespaceURI === "http://www.w3.org/2000/svg" || l.hasAttribute("itemprop")) && (l = u.createElement(n), u.head.insertBefore(
                          l,
                          u.querySelector("head > title")
                        )), Xt(l, n, r), l[$t] = e, Mt(l), n = l;
                        break e;
                      case "link":
                        if (d = Wx(
                          "link",
                          "href",
                          u
                        ).get(n + (r.href || ""))) {
                          for (y = 0; y < d.length; y++)
                            if (l = d[y], l.getAttribute("href") === (r.href == null || r.href === "" ? null : r.href) && l.getAttribute("rel") === (r.rel == null ? null : r.rel) && l.getAttribute("title") === (r.title == null ? null : r.title) && l.getAttribute("crossorigin") === (r.crossOrigin == null ? null : r.crossOrigin)) {
                              d.splice(y, 1);
                              break t;
                            }
                        }
                        l = u.createElement(n), Xt(l, n, r), u.head.appendChild(l);
                        break;
                      case "meta":
                        if (d = Wx(
                          "meta",
                          "content",
                          u
                        ).get(n + (r.content || ""))) {
                          for (y = 0; y < d.length; y++)
                            if (l = d[y], l.getAttribute("content") === (r.content == null ? null : "" + r.content) && l.getAttribute("name") === (r.name == null ? null : r.name) && l.getAttribute("property") === (r.property == null ? null : r.property) && l.getAttribute("http-equiv") === (r.httpEquiv == null ? null : r.httpEquiv) && l.getAttribute("charset") === (r.charSet == null ? null : r.charSet)) {
                              d.splice(y, 1);
                              break t;
                            }
                        }
                        l = u.createElement(n), Xt(l, n, r), u.head.appendChild(l);
                        break;
                      default:
                        throw Error(o(468, n));
                    }
                    l[$t] = e, Mt(l), n = l;
                  }
                  e.stateNode = n;
                }
              else
                Ut || cd(d, e.type, e.stateNode);
            else
              e.stateNode = Jx(
                d,
                r,
                e.memoizedProps
              );
          else
            u !== r ? (u === null ? (n = l.stateNode, n === null || Je || n.parentNode.removeChild(n)) : u.count--, r === null ? Ut || cd(d, e.type, e.stateNode) : Jx(d, r, e.memoizedProps)) : r === null && e.stateNode !== null && mf(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        break;
      case 27:
        un(n, e, r), cn(e), u & 512 && (Je || l === null || Ft(l, l.return)), l !== null && u & 4 && mf(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (d = vi, vi = !1, un(n, e, r), vi = d, cn(e), u & 512 && (Je || l === null || Ft(l, l.return)), e.flags & 32) {
          n = e.stateNode;
          try {
            ja(n, ""), Fe = !0;
          } catch (q) {
            et(e, e.return, q);
          }
        }
        u & 4 && e.stateNode != null && (n = e.memoizedProps, mf(
          e,
          n,
          l !== null ? l.memoizedProps : n
        )), u & 1024 && (Sf = !0);
        break;
      case 6:
        if (un(n, e, r), cn(e), u & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          n = e.memoizedProps, r = e.stateNode;
          try {
            r.nodeValue = n, Fe = !0;
          } catch (q) {
            et(e, e.return, q);
          }
        }
        break;
      case 3:
        if (Fe = !1, Ps = null, d = ei, ei = io(n.containerInfo), un(n, e, r), ei = d, cn(e), u & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            ul(n.containerInfo);
          } catch (q) {
            et(e, e.return, q);
          }
        Sf && (Sf = !1, Fg(e)), Fe = !1;
        break;
      case 4:
        u = vi, vi = Ut, l = ph(), d = ei, ei = io(
          e.stateNode.containerInfo
        ), un(n, e, r), cn(e), ei = d, Fe && Xl && (Ds = !0), Fe = l, vi = u;
        break;
      case 12:
        un(n, e, r), cn(e);
        break;
      case 31:
        un(n, e, r), cn(e), u & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Rs(e, n)));
        break;
      case 13:
        un(n, e, r), cn(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Bs = Ue()), u & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Rs(e, n)));
        break;
      case 22:
        d = e.memoizedState !== null, y = l !== null && l.memoizedState !== null;
        var k = Ut, _ = Je, R = vi;
        Ut = k || d, vi = R || d, Je = _ || y, un(n, e, r), Je = _, vi = R, Ut = k, cn(e), u & 8192 && (n = e.stateNode, n._visibility = d ? n._visibility & -2 : n._visibility | 1, !d || l === null || y || Ut || Je || (n = y || Je, r = Ut, l = Je, Ut = d || Ut, Je = n, xr(e, 2), Ut = r, Je = l), !d && vi || _f(e, d)), u & 4 && (n = e.updateQueue, n !== null && (r = n.retryQueue, r !== null && (n.retryQueue = null, Rs(e, r))));
        break;
      case 19:
        un(n, e, r), cn(e), u & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Rs(e, n)));
        break;
      case 30:
        u & 512 && (Je || l === null || Ft(l, l.return)), u = ph(), d = Xl, y = (r & 335544064) === r, k = e.memoizedProps, Xl = y && Hi(
          k.default,
          k.update
        ) !== "none", un(n, e, r), cn(e), y && l !== null && Fe && (e.flags |= 4), Xl = d, Fe = u;
        break;
      case 21:
        break;
      case 7:
        u & 512 && (Je || l === null || Ft(l, l.return)), l && l.stateNode !== null && (l.stateNode._fragmentFiber = e);
      default:
        un(n, e, r), cn(e);
    }
  }
  function cn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var r, l = e.return; l !== null; ) {
          if (Ag(l)) {
            r = l;
            break;
          }
          l = l.return;
        }
        l = null;
        for (var u = e.return; u !== null; ) {
          if (pf(u)) {
            var d = u.stateNode;
            l === null ? l = [d] : l.push(d);
          }
          if (df(u)) break;
          u = u.return;
        }
        var y = l;
        if (r == null) throw Error(o(160));
        switch (r.tag) {
          case 27:
            var k = r.stateNode, _ = gf(e);
            Ts(
              e,
              _,
              k,
              y
            );
            break;
          case 5:
            var R = r.stateNode;
            r.flags & 32 && (ja(R, ""), r.flags &= -33);
            var q = gf(e);
            Ts(
              e,
              q,
              R,
              y
            );
            break;
          case 3:
          case 4:
            var Q = r.stateNode.containerInfo, D = gf(e);
            xf(
              e,
              D,
              Q,
              y
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (H) {
        et(e, e.return, H);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Fg(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        Fg(n), n.tag === 5 && n.flags & 1024 && (n = n.stateNode, sl = !0, n.reset(), sl = !1), e = e.sibling;
      }
  }
  function Ya(e, n) {
    if (n.subtreeFlags & 9270)
      for (n = n.child; n !== null; )
        Xg(n, e), n = n.sibling;
    else Bg(n);
  }
  function Xg(e, n) {
    var r = e.alternate;
    if (r === null) bf(e, !1);
    else
      switch (e.tag) {
        case 3:
          if (zf = wi = !1, Mg(), Ya(n, e), !wi && !Ds) {
            if (e = bi, e !== null)
              for (var l = 0; l < e.length; l += 3) {
                r = e[l];
                var u = e[l + 1];
                Rx(r, e[l + 2]), r = r.ownerDocument.documentElement, r !== null && r.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + u + ")"
                  }
                );
              }
            e = n.containerInfo, e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "" && (e.style.viewTransitionName = "none", e.animate(
              { opacity: [0, 0], pointerEvents: ["none", "none"] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-group(root)"
              }
            ), e.animate(
              { width: [0, 0], height: [0, 0] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition"
              }
            )), zf = !0;
          }
          bi = null;
          break;
        case 5:
          Ya(n, e);
          break;
        case 4:
          l = wi, wi = !1, Ya(n, e), wi && (Ds = !0), wi = l;
          break;
        case 22:
          e.memoizedState === null && (r.memoizedState !== null ? bf(e, !1) : Ya(n, e));
          break;
        case 30:
          l = wi, u = Mg(), wi = !1, Ya(n, e), wi && (e.flags |= 4);
          var d = e.memoizedProps, y = e.stateNode;
          n = Ii(d, y), y = Ii(r.memoizedProps, y);
          var k = Hi(d.default, d.update);
          k === "none" ? n = !1 : (d = r.memoizedState, r.memoizedState = null, r = e.child, gn = 0, n = kf(
            e,
            r,
            n,
            y,
            k,
            d,
            !0
          ), gn !== (d === null ? 0 : d.length) && (e.flags |= 32)), (e.flags & 4) !== 0 && n ? (Ja(
            e,
            e.memoizedProps.onUpdate
          ), bi = u) : u !== null && (u.push.apply(u, bi), bi = u), wi = (e.flags & 32) !== 0 ? !0 : l;
          break;
        default:
          Ya(n, e);
      }
  }
  function ki(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Hg(e, n.alternate, n), n = n.sibling;
  }
  function xr(e, n) {
    for (e = e.child; e !== null; ) {
      var r = e, l = n;
      switch (r.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          gr(4, r, r.return), xr(
            r,
            l
          );
          break;
        case 1:
          Ft(r, r.return);
          var u = r.stateNode;
          typeof u.componentWillUnmount == "function" && Tg(
            r,
            r.return,
            u
          ), xr(
            r,
            l
          );
          break;
        case 27:
          (l & 2) !== 0 && Fx(
            r.stateNode,
            r.type,
            r.memoizedProps
          );
        case 5:
          Ft(r, r.return), r.tag !== 5 && r.tag !== 27 || Fl(r), xr(
            r,
            l
          );
          break;
        case 6:
          Fl(r);
          break;
        case 26:
          Ft(r, r.return), u = r.stateNode, r.memoizedState !== null || u === null || Je || u.parentNode.removeChild(u), xr(
            r,
            l
          );
          break;
        case 22:
          r.memoizedState === null && xr(
            r,
            l
          );
          break;
        case 30:
          Ft(r, r.return), xr(
            r,
            l
          );
          break;
        case 7:
          Ft(r, r.return);
        default:
          xr(
            r,
            l
          );
      }
      e = e.sibling;
    }
  }
  function ti(e, n, r) {
    for (r = (n.subtreeFlags & 8772) !== 0 ? r : r & -2, n = n.child; n !== null; ) {
      var l = n.alternate, u = e, d = n, y = d.flags, k = (r & 1) !== 0;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          ti(
            u,
            d,
            r
          ), Gl(4, d);
          break;
        case 1:
          if (ti(
            u,
            d,
            r
          ), l = d, u = l.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (q) {
              et(l, l.return, q);
            }
          if (l = d, u = l.updateQueue, u !== null) {
            var _ = l.stateNode;
            try {
              var R = u.shared.hiddenCallbacks;
              if (R !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < R.length; u++)
                  gm(R[u], _);
            } catch (q) {
              et(l, l.return, q);
            }
          }
          k && y & 64 && Cg(d), xi(d, d.return);
          break;
        case 27:
          (r & 2) !== 0 && Og(d);
        case 5:
          d.tag !== 5 && d.tag !== 27 || Ng(d), ti(
            u,
            d,
            r
          ), k && l === null && y & 4 && hf(d), xi(d, d.return);
          break;
        case 6:
          Ng(d);
          break;
        case 26:
          _ = d.stateNode, d.memoizedState !== null || _ === null || Ut || cd(
            io(_.ownerDocument),
            d.type,
            _
          ), ti(
            u,
            d,
            r
          ), k && l === null && y & 4 && hf(d), xi(d, d.return);
          break;
        case 12:
          ti(
            u,
            d,
            r
          );
          break;
        case 31:
          ti(
            u,
            d,
            r
          ), k && y & 4 && Vg(u, d);
          break;
        case 13:
          ti(
            u,
            d,
            r
          ), k && y & 4 && Yg(u, d);
          break;
        case 22:
          d.memoizedState === null && ti(
            u,
            d,
            r
          ), xi(d, d.return);
          break;
        case 30:
          ti(
            u,
            d,
            r
          ), xi(d, d.return);
          break;
        case 7:
          xi(d, d.return);
        default:
          ti(
            u,
            d,
            r
          );
      }
      n = n.sibling;
    }
  }
  function Ef(e, n) {
    var r = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== r && (e != null && e.refCount++, r != null && Dl(r));
  }
  function Cf(e, n) {
    e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && Dl(e));
  }
  function Gn(e, n, r, l) {
    var u = (r & 335544064) === r;
    if (n.subtreeFlags & (u ? 10262 : 10256))
      for (n = n.child; n !== null; )
        Qg(
          e,
          n,
          r,
          l
        ), n = n.sibling;
    else u && Lg(n);
  }
  function Qg(e, n, r, l) {
    var u = (r & 335544064) === r;
    u && n.alternate === null && n.return !== null && n.return.alternate !== null && Os(n);
    var d = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Gn(
          e,
          n,
          r,
          l
        ), d & 2048 && Gl(9, n);
        break;
      case 1:
        Gn(
          e,
          n,
          r,
          l
        );
        break;
      case 3:
        Gn(
          e,
          n,
          r,
          l
        ), u && zf && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), d & 2048 && (d = null, n.alternate !== null && (d = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== d && (n.refCount++, d != null && Dl(d)));
        break;
      case 12:
        if (d & 2048) {
          Gn(
            e,
            n,
            r,
            l
          ), d = n.stateNode;
          try {
            var y = n.memoizedProps, k = y.id, _ = y.onPostCommit;
            typeof _ == "function" && _(
              k,
              n.alternate === null ? "mount" : "update",
              d.passiveEffectDuration,
              -0
            );
          } catch (R) {
            et(n, n.return, R);
          }
        } else
          Gn(
            e,
            n,
            r,
            l
          );
        break;
      case 31:
        Gn(
          e,
          n,
          r,
          l
        );
        break;
      case 13:
        Gn(
          e,
          n,
          r,
          l
        );
        break;
      case 23:
        break;
      case 22:
        y = n.stateNode, k = n.alternate, n.memoizedState !== null ? (u && k !== null && k.memoizedState === null && Os(k), y._visibility & 2 ? Gn(
          e,
          n,
          r,
          l
        ) : Ql(
          e,
          n
        )) : (u && k !== null && k.memoizedState !== null && Os(n), y._visibility & 2 ? Gn(
          e,
          n,
          r,
          l
        ) : (y._visibility |= 2, Ga(
          e,
          n,
          r,
          l,
          (n.subtreeFlags & 10256) !== 0 || !1
        ))), d & 2048 && Ef(k, n);
        break;
      case 24:
        Gn(
          e,
          n,
          r,
          l
        ), d & 2048 && Cf(n.alternate, n);
        break;
      case 30:
        u && (d = n.alternate, d !== null && (yi(d.child, !0), yi(n.child, !0))), Gn(
          e,
          n,
          r,
          l
        );
        break;
      default:
        Gn(
          e,
          n,
          r,
          l
        );
    }
  }
  function Ga(e, n, r, l, u) {
    for (u = u && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var d = e, y = n, k = r, _ = l, R = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          Ga(
            d,
            y,
            k,
            _,
            u
          ), Gl(8, y);
          break;
        case 23:
          break;
        case 22:
          var q = y.stateNode;
          y.memoizedState !== null ? q._visibility & 2 ? Ga(
            d,
            y,
            k,
            _,
            u
          ) : Ql(
            d,
            y
          ) : (q._visibility |= 2, Ga(
            d,
            y,
            k,
            _,
            u
          )), u && R & 2048 && Ef(
            y.alternate,
            y
          );
          break;
        case 24:
          Ga(
            d,
            y,
            k,
            _,
            u
          ), u && R & 2048 && Cf(y.alternate, y);
          break;
        default:
          Ga(
            d,
            y,
            k,
            _,
            u
          );
      }
      n = n.sibling;
    }
  }
  function Ql(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var r = e, l = n, u = l.flags;
        switch (l.tag) {
          case 22:
            Ql(r, l), u & 2048 && Ef(
              l.alternate,
              l
            );
            break;
          case 24:
            Ql(r, l), u & 2048 && Cf(l.alternate, l);
            break;
          default:
            Ql(r, l);
        }
        n = n.sibling;
      }
  }
  var na = 8192;
  function ia(e, n, r) {
    if (e.subtreeFlags & na)
      for (e = e.child; e !== null; )
        Pg(
          e,
          n,
          r
        ), e = e.sibling;
  }
  function Pg(e, n, r) {
    switch (e.tag) {
      case 26:
        ia(
          e,
          n,
          r
        ), e.flags & na && (e.memoizedState !== null ? Xk(
          r,
          ei,
          e.memoizedState,
          e.memoizedProps
        ) : (e = e.stateNode, (n & 335544128) === n && ib(r, e)));
        break;
      case 5:
        ia(
          e,
          n,
          r
        ), e.flags & na && (e = e.stateNode, (n & 335544128) === n && ib(r, e));
        break;
      case 3:
      case 4:
        var l = ei;
        ei = io(e.stateNode.containerInfo), ia(
          e,
          n,
          r
        ), ei = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = na, na = 16777216, ia(
          e,
          n,
          r
        ), na = l) : ia(
          e,
          n,
          r
        ));
        break;
      case 30:
        if ((e.flags & na) !== 0 && (l = e.memoizedProps.name, l != null && l !== "auto")) {
          var u = e.stateNode;
          u.paired = null, Tn === null && (Tn = /* @__PURE__ */ new Map()), Tn.set(l, u);
        }
        ia(
          e,
          n,
          r
        );
        break;
      default:
        ia(
          e,
          n,
          r
        );
    }
  }
  function Kg(e) {
    var n = e.alternate;
    if (n !== null && (e = n.child, e !== null)) {
      n.child = null;
      do
        n = e.sibling, e.sibling = null, e = n;
      while (e !== null);
    }
  }
  function Pl(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var l = n[r];
          Lt = l, Wg(
            l,
            e
          );
        }
      Kg(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Jg(e), e = e.sibling;
  }
  function Jg(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Pl(e), e.flags & 2048 && gr(9, e, e.return);
        break;
      case 3:
        Pl(e);
        break;
      case 12:
        Pl(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, Us(e)) : Pl(e);
        break;
      default:
        Pl(e);
    }
  }
  function Us(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var l = n[r];
          Lt = l, Wg(
            l,
            e
          );
        }
      Kg(e);
    }
    for (e = e.child; e !== null; ) {
      switch (n = e, n.tag) {
        case 0:
        case 11:
        case 15:
          gr(8, n, n.return), Us(n);
          break;
        case 22:
          r = n.stateNode, r._visibility & 2 && (r._visibility &= -3, Us(n));
          break;
        default:
          Us(n);
      }
      e = e.sibling;
    }
  }
  function Wg(e, n) {
    for (; Lt !== null; ) {
      var r = Lt;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          gr(8, r, n);
          break;
        case 23:
        case 22:
          if (r.memoizedState !== null && r.memoizedState.cachePool !== null) {
            var l = r.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Dl(r.memoizedState.cache);
      }
      if (l = r.child, l !== null) l.return = r, Lt = l;
      else
        e: for (r = e; Lt !== null; ) {
          l = Lt;
          var u = l.sibling, d = l.return;
          if (qg(l), l === r) {
            Lt = null;
            break e;
          }
          if (u !== null) {
            u.return = d, Lt = u;
            break e;
          }
          Lt = d;
        }
    }
  }
  var $2 = {
    getCacheForType: function(e) {
      var n = Vt(_t), r = n.data.get(e);
      return r === void 0 && (r = e(), n.data.set(e, r)), r;
    },
    cacheSignal: function() {
      return Vt(_t).controller.signal;
    }
  }, V2 = typeof WeakMap == "function" ? WeakMap : Map, Ke = 0, rt = null, He = null, $e = 0, We = 0, Nn = null, br = !1, Fa = !1, Tf = !1, Qi = 0, gt = 0, yr = 0, ra = 0, Ls = 0, An = 0, Xa = 0, Kl = null, bn = null, Nf = !1, Bs = 0, ex = 0, Is = 1 / 0, Hs = null, vr = null, pt = 0, ni = null, aa = null, Si = 0, Af = 0, Of = null, tx = null, Qa = null, Pa = null, Ka = null, Jl = 0, Zs = null;
  function On() {
    return (Ke & 2) !== 0 && $e !== 0 ? $e & -$e : ce.T !== null ? qf() : rh();
  }
  function nx() {
    if (An === 0)
      if (($e & 536870912) === 0 || Le) {
        var e = va;
        va <<= 1, (va & 3932160) === 0 && (va = 262144), An = e;
      } else An = 536870912;
    return e = Yt.current, e !== null && (e.flags |= 32), An;
  }
  function Ja(e, n) {
    if (n != null) {
      var r = e.stateNode, l = r.ref;
      l === null && (l = r.ref = Ux(
        Ii(e.memoizedProps, r)
      )), Pa === null && (Pa = []), Pa.push(n.bind(null, l));
    }
  }
  function yn(e, n, r) {
    (e === rt && (We === 2 || We === 9) || e.cancelPendingCommit !== null) && (Wa(e, 0), wr(
      e,
      $e,
      An,
      !1
    )), pi(e, r), ((Ke & 2) === 0 || e !== rt) && (e === rt && ((Ke & 2) === 0 && (ra |= r), gt === 4 && wr(
      e,
      $e,
      An,
      !1
    )), zi(e));
  }
  function ix(e, n, r) {
    if ((Ke & 6) !== 0) throw Error(o(327));
    var l = !r && (n & 127) === 0 && (n & e.expiredLanes) === 0 || he(e, n), u = l ? F2(e, n) : Mf(e, n, !0), d = l;
    do {
      if (u === 0) {
        Fa && !l && wr(e, n, 0, !1);
        break;
      } else {
        if (r = e.current.alternate, d && !Y2(r)) {
          u = Mf(e, n, !1), d = !1;
          continue;
        }
        if (u === 2) {
          if (d = n, e.errorRecoveryDisabledLanes & d)
            var y = 0;
          else
            y = e.pendingLanes & -536870913, y = y !== 0 ? y : y & 536870912 ? 536870912 : 0;
          if (y !== 0) {
            n = y;
            e: {
              var k = e;
              u = Kl;
              var _ = k.current.memoizedState.isDehydrated;
              if (_ && (Wa(k, y).flags |= 256), y = Mf(
                k,
                y,
                !1
              ), y !== 2 && y !== 6) {
                if (Tf && !_) {
                  k.errorRecoveryDisabledLanes |= d, ra |= d, u = 4;
                  break e;
                }
                d = bn, bn = u, d !== null && (bn === null ? bn = d : bn.push.apply(
                  bn,
                  d
                ));
              }
              u = y;
            }
            if (d = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          Wa(e, 0), wr(e, n, 0, !0);
          break;
        }
        e: {
          switch (l = e, d = u, d) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((n & 4194048) !== n && (n & 62914560) !== n)
                break;
            case 6:
              wr(
                l,
                n,
                An,
                !br
              );
              break e;
            case 2:
              bn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((n & 62914560) === n && (u = Bs + 300 - Ue(), 10 < u)) {
            if (wr(
              l,
              n,
              An,
              !br
            ), ae(l, 0, !0) !== 0) break e;
            Si = n, l.timeoutHandle = Wf(
              rx.bind(
                null,
                l,
                r,
                bn,
                Hs,
                Nf,
                n,
                An,
                ra,
                Xa,
                br,
                d,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break e;
          }
          rx(
            l,
            r,
            bn,
            Hs,
            Nf,
            n,
            An,
            ra,
            Xa,
            br,
            d,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    zi(e);
  }
  function rx(e, n, r, l, u, d, y, k, _, R, q, Q, D, H) {
    e.timeoutHandle = -1;
    var fe = n.subtreeFlags, ye = (d & 335544064) === d;
    if (Q = null, (ye || fe & 8192 || (fe & 16785408) === 16785408) && (Q = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: hi
    }, Tn = null, Pg(
      n,
      d,
      Q
    ), ye && (fe = Q, ye = e.containerInfo, ye = (ye.nodeType === 9 ? ye : ye.ownerDocument).__reactViewTransition, ye != null && (fe.count++, fe.waitingForViewTransition = !0, fe = lo.bind(fe), ye.finished.then(fe, fe))), fe = (d & 62914560) === d ? Bs - Ue() : (d & 4194048) === d ? ex - Ue() : 0, fe = Qk(
      Q,
      fe
    ), fe !== null)) {
      Si = d, e.cancelPendingCommit = fe(
        dx.bind(
          null,
          e,
          n,
          d,
          r,
          l,
          u,
          y,
          k,
          _,
          R,
          q,
          Q,
          null,
          D,
          H
        )
      ), wr(e, d, y, !R);
      return;
    }
    dx(
      e,
      n,
      d,
      r,
      l,
      u,
      y,
      k,
      _,
      R,
      q,
      Q
    );
  }
  function Y2(e) {
    for (var n = e; ; ) {
      var r = n.tag;
      if ((r === 0 || r === 11 || r === 15) && n.flags & 16384 && (r = n.updateQueue, r !== null && (r = r.stores, r !== null)))
        for (var l = 0; l < r.length; l++) {
          var u = r[l], d = u.getSnapshot;
          u = u.value;
          try {
            if (!En(d(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (r = n.child, n.subtreeFlags & 16384 && r !== null)
        r.return = n, n = r;
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function wr(e, n, r, l) {
    n = ve(e, n), n &= ~Ls, n &= ~ra, e.suspendedLanes |= n, e.pingedLanes &= ~n, l && (e.warmLanes |= n), l = e.expirationTimes;
    for (var u = n; 0 < u; ) {
      var d = 31 - rn(u), y = 1 << d;
      l[d] = -1, u &= ~y;
    }
    r !== 0 && Pe(e, r, n);
  }
  function qs() {
    return (Ke & 6) === 0 ? (Wl(0), !1) : !0;
  }
  function Df() {
    if (He !== null) {
      if (We === 0)
        var e = He.return;
      else
        e = He, $i = Gr = null, Hc(e), Ia = null, Ul = 0, e = He;
      for (; e !== null; )
        Eg(e.alternate, e), e = e.return;
      He = null;
    }
  }
  function Wa(e, n) {
    var r = e.timeoutHandle;
    return r !== -1 && (e.timeoutHandle = -1, mk(r)), r = e.cancelPendingCommit, r !== null && (e.cancelPendingCommit = null, r()), Si = 0, Df(), rt = e, He = r = Zi(e.current, null), $e = n, We = 0, Nn = null, br = !1, Fa = he(e, n), Tf = !1, Xa = An = Ls = ra = yr = gt = 0, bn = Kl = null, Nf = !1, Qi = ve(e, n), Po(), r;
  }
  function ax(e, n) {
    Me = null, ce.H = ws, n === Ba || n === os ? (n = dm(), We = 3) : n === Ec ? (n = dm(), We = 4) : We = n === tf ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, Nn = n, He === null && (gt = 1, ks(
      e,
      qn(n, e.current)
    ));
  }
  function lx() {
    var e = Yt.current;
    return e === null ? !0 : ($e & 4194048) === $e ? en === null : ($e & 62914560) === $e || ($e & 536870912) !== 0 ? e === en : !1;
  }
  function ox() {
    var e = ce.H;
    return ce.H = ws, e === null ? ws : e;
  }
  function sx() {
    var e = ce.A;
    return ce.A = $2, e;
  }
  function $s() {
    gt = 4, br || ($e & 4194048) !== $e && Yt.current !== null || (Fa = !0), (yr & 134217727) === 0 && (ra & 134217727) === 0 || rt === null || wr(
      rt,
      $e,
      An,
      !1
    );
  }
  function Mf(e, n, r) {
    var l = Ke;
    Ke |= 2;
    var u = ox(), d = sx();
    (rt !== e || $e !== n) && (Hs = null, Wa(e, n)), n = !1;
    var y = gt;
    e: do
      try {
        if (We !== 0 && He !== null) {
          var k = He, _ = Nn;
          switch (We) {
            case 8:
              Df(), y = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Yt.current === null && (n = !0);
              var R = We;
              if (We = 0, Nn = null, el(e, k, _, R), r && Fa) {
                y = 0;
                break e;
              }
              break;
            default:
              R = We, We = 0, Nn = null, el(e, k, _, R);
          }
        }
        G2(), y = gt;
        break;
      } catch (q) {
        ax(e, q);
      }
    while (!0);
    return n && e.shellSuspendCounter++, $i = Gr = null, Ke = l, ce.H = u, ce.A = d, He === null && (rt = null, $e = 0, Po()), y;
  }
  function G2() {
    for (; He !== null; ) ux(He);
  }
  function F2(e, n) {
    var r = Ke;
    Ke |= 2;
    var l = ox(), u = sx();
    rt !== e || $e !== n ? (Hs = null, Is = Ue() + 500, Wa(e, n)) : Fa = he(
      e,
      n
    );
    e: do
      try {
        if (We !== 0 && He !== null) {
          n = He;
          var d = Nn;
          t: switch (We) {
            case 1:
              We = 0, Nn = null, el(e, n, d, 1);
              break;
            case 2:
            case 9:
              if (cm(d)) {
                We = 0, Nn = null, cx(n);
                break;
              }
              n = function() {
                We !== 2 && We !== 9 || rt !== e || (We = 7), zi(e);
              }, d.then(n, n);
              break e;
            case 3:
              We = 7;
              break e;
            case 4:
              We = 5;
              break e;
            case 7:
              cm(d) ? (We = 0, Nn = null, cx(n)) : (We = 0, Nn = null, el(e, n, d, 7));
              break;
            case 5:
              var y = null;
              switch (He.tag) {
                case 26:
                  y = He.memoizedState;
                case 5:
                case 27:
                  var k = He;
                  if (y ? tb(y) : k.stateNode.complete) {
                    We = 0, Nn = null;
                    var _ = k.sibling;
                    if (_ !== null) He = _;
                    else {
                      var R = k.return;
                      R !== null ? (He = R, Vs(R)) : He = null;
                    }
                    break t;
                  }
              }
              We = 0, Nn = null, el(e, n, d, 5);
              break;
            case 6:
              We = 0, Nn = null, el(e, n, d, 6);
              break;
            case 8:
              Df(), gt = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        X2();
        break;
      } catch (q) {
        ax(e, q);
      }
    while (!0);
    return $i = Gr = null, ce.H = l, ce.A = u, Ke = r, He !== null ? 0 : (rt = null, $e = 0, Po(), gt);
  }
  function X2() {
    for (; He !== null && !ci(); )
      ux(He);
  }
  function ux(e) {
    var n = _g(e.alternate, e, Qi);
    e.memoizedProps = e.pendingProps, n === null ? Vs(e) : He = n;
  }
  function cx(e) {
    var n = e, r = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = bg(
          r,
          n,
          n.pendingProps,
          n.type,
          void 0,
          $e
        );
        break;
      case 11:
        n = bg(
          r,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          $e
        );
        break;
      case 5:
        Hc(n);
        var l = n;
        l === Rt && (Le ? (ns(l), l.tag === 5 && l.stateNode != null && (ot = l.stateNode)) : (ns(l), Le = !0));
      default:
        Eg(r, n), n = He = Wh(n, Qi), n = _g(r, n, Qi);
    }
    e.memoizedProps = e.pendingProps, n === null ? Vs(e) : He = n;
  }
  function el(e, n, r, l) {
    $i = Gr = null, Hc(n), Ia = null, Ul = 0;
    var u = n.return;
    try {
      if (R2(
        e,
        u,
        n,
        r,
        $e
      )) {
        gt = 1, ks(
          e,
          qn(r, e.current)
        ), He = null;
        return;
      }
    } catch (d) {
      if (u !== null) throw He = u, d;
      gt = 1, ks(
        e,
        qn(r, e.current)
      ), He = null;
      return;
    }
    n.flags & 32768 ? (Le || l === 1 ? e = !0 : Fa || ($e & 536870912) !== 0 ? e = !1 : (br = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Yt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), fx(n, e)) : Vs(n);
  }
  function Vs(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        fx(
          n,
          br
        );
        return;
      }
      e = n.return;
      var r = I2(
        n.alternate,
        n,
        Qi
      );
      if (r !== null) {
        He = r;
        return;
      }
      if (n = n.sibling, n !== null) {
        He = n;
        return;
      }
      He = n = e;
    } while (n !== null);
    gt === 0 && (gt = 5);
  }
  function fx(e, n) {
    do {
      var r = H2(e.alternate, e);
      if (r !== null) {
        r.flags &= 32767, He = r;
        return;
      }
      if (r = e.return, r !== null && (r.flags |= 32768, r.subtreeFlags = 0, r.deletions = null), !n && (e = e.sibling, e !== null)) {
        He = e;
        return;
      }
      He = e = r;
    } while (e !== null);
    gt = 6, He = null;
  }
  function dx(e, n, r, l, u, d, y, k, _, R, q, Q) {
    e.cancelPendingCommit = null;
    do
      Ys();
    while (pt !== 0);
    if ((Ke & 6) !== 0) throw Error(o(327));
    if (n !== null) {
      if (n === e.current) throw Error(o(177));
      e === rt && (He = rt = null, $e = 0), aa = n, ni = e, Si = r, Of = u, tx = l, Q2(
        e,
        n,
        r,
        y,
        k,
        _,
        Q
      );
    }
  }
  function Q2(e, n, r, l, u, d, y) {
    var k = n.lanes | n.childLanes;
    if (Af = k, k |= hc, Vu(
      e,
      r,
      k,
      l,
      u,
      d
    ), Pa = null, (r & 335544064) === r ? (Ka = S2(e), l = 10262) : (Ka = null, l = 10256), (n.subtreeFlags & l) !== 0 || (n.flags & l) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, tk(nr, function() {
      return Bf(), null;
    })) : (e.callbackNode = null, e.callbackPriority = 0), Ns = !1, l = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || l) {
      l = ce.T, ce.T = null, u = we.p, we.p = 2, d = Ke, Ke |= 4;
      try {
        Z2(e, n, r);
      } finally {
        Ke = d, we.p = u, ce.T = l;
      }
    }
    pt = 1, Ns ? Qa = wk(
      y,
      e.containerInfo,
      Ka,
      Rf,
      Uf,
      K2,
      Lf,
      Bf,
      P2
    ) : (Rf(), Uf(), Lf());
  }
  function P2(e) {
    if (pt !== 0) {
      var n = ni.onRecoverableError;
      n(e, { componentStack: null });
    }
  }
  function K2() {
    pt === 3 && (pt = 0, Xg(aa, ni), pt = 4);
  }
  function Rf() {
    if (pt === 1) {
      pt = 0;
      var e = ni, n = aa, r = Si, l = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || l) {
        l = ce.T, ce.T = null;
        var u = we.p;
        we.p = 2;
        var d = Ke;
        Ke |= 4;
        try {
          Xl = Ds = !1, Gg(n, e, r), r = Pf;
          var y = $h(e.containerInfo), k = r.focusedElem, _ = r.selectionRange;
          if (y !== k && k && k.ownerDocument && qh(
            k.ownerDocument.documentElement,
            k
          )) {
            if (_ !== null && uc(k)) {
              var R = _.start, q = _.end;
              if (q === void 0 && (q = R), "selectionStart" in k)
                k.selectionStart = R, k.selectionEnd = Math.min(
                  q,
                  k.value.length
                );
              else {
                var Q = k.ownerDocument || document, D = Q && Q.defaultView || window;
                if (D.getSelection) {
                  var H = D.getSelection(), fe = k.textContent.length, ye = Math.min(_.start, fe), Re = _.end === void 0 ? ye : Math.min(_.end, fe);
                  !H.extend && ye > Re && (y = Re, Re = ye, ye = y);
                  var M = Zh(
                    k,
                    ye
                  ), A = Zh(
                    k,
                    Re
                  );
                  if (M && A && (H.rangeCount !== 1 || H.anchorNode !== M.node || H.anchorOffset !== M.offset || H.focusNode !== A.node || H.focusOffset !== A.offset)) {
                    var B = Q.createRange();
                    B.setStart(M.node, M.offset), H.removeAllRanges(), ye > Re ? (H.addRange(B), H.extend(A.node, A.offset)) : (B.setEnd(A.node, A.offset), H.addRange(B));
                  }
                }
              }
            }
            for (Q = [], H = k; H = H.parentNode; )
              H.nodeType === 1 && Q.push({
                element: H,
                left: H.scrollLeft,
                top: H.scrollTop
              });
            for (typeof k.focus == "function" && k.focus(), k = 0; k < Q.length; k++) {
              var F = Q[k];
              F.element.scrollLeft = F.left, F.element.scrollTop = F.top;
            }
          }
          sl = !!Qf, Pf = Qf = null;
        } finally {
          Ke = d, we.p = u, ce.T = l;
        }
      }
      e.current = n, pt = 2;
    }
  }
  function Uf() {
    if (pt === 2) {
      pt = 0;
      var e = ni, n = aa, r = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || r) {
        r = ce.T, ce.T = null;
        var l = we.p;
        we.p = 2;
        var u = Ke;
        Ke |= 4;
        try {
          Hg(e, n.alternate, n);
        } finally {
          Ke = u, we.p = l, ce.T = r;
        }
      }
      pt = 3;
    }
  }
  function Lf() {
    if (pt === 4 || pt === 3) {
      pt = 0;
      var e = Qa;
      Qa = null, ya();
      var n = ni, r = aa, l = Si, u = tx, d = (l & 335544064) === l ? 10262 : 10256;
      if ((r.subtreeFlags & d) !== 0 || (r.flags & d) !== 0 ? pt = 5 : (pt = 0, aa = ni = null, px(n, n.pendingLanes)), d = n.pendingLanes, d === 0 && (vr = null), Yu(l), r = r.stateNode, Jt && typeof Jt.onCommitFiberRoot == "function")
        try {
          Jt.onCommitFiberRoot(
            Oi,
            r,
            void 0,
            (r.current.flags & 128) === 128
          );
        } catch {
        }
      if (u !== null) {
        r = ce.T, d = we.p, we.p = 2, ce.T = null;
        try {
          for (var y = n.onRecoverableError, k = 0; k < u.length; k++) {
            var _ = u[k];
            y(_.value, {
              componentStack: _.stack
            });
          }
        } finally {
          ce.T = r, we.p = d;
        }
      }
      if (u = Pa, y = Ka, Ka = null, u !== null && (Pa = null, y === null && (y = []), e !== null))
        for (_ = 0; _ < u.length; _++)
          r = (0, u[_])(
            y
          ), r !== void 0 && e.finished.finally(r);
      (Si & 3) !== 0 && Ys(), zi(n), d = n.pendingLanes, (l & 261930) !== 0 && (d & 42) !== 0 ? n === Zs ? Jl++ : (Jl = 0, Zs = n) : (Jl = 0, Zs = null), Wl(0);
    }
  }
  function px(e, n) {
    (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, Dl(n)));
  }
  function Ys() {
    return Qa !== null && (Qa.skipTransition(), Qa = null), Rf(), Uf(), Lf(), Bf();
  }
  function Bf() {
    if (pt !== 5) return !1;
    var e = ni, n = Af;
    Af = 0;
    var r = Yu(Si), l = ce.T, u = we.p;
    try {
      we.p = 32 > r ? 32 : r, ce.T = null, r = Of, Of = null;
      var d = ni, y = Si;
      if (pt = 0, aa = ni = null, Si = 0, (Ke & 6) !== 0) throw Error(o(331));
      var k = Ke;
      if (Ke |= 4, Jg(d.current), Qg(
        d,
        d.current,
        y,
        r
      ), Ke = k, Wl(0, !1), Jt && typeof Jt.onPostCommitFiberRoot == "function")
        try {
          Jt.onPostCommitFiberRoot(Oi, d);
        } catch {
        }
      return !0;
    } finally {
      we.p = u, ce.T = l, px(e, n);
    }
  }
  function hx(e, n, r) {
    n = qn(r, n), n = ef(e.stateNode, n, 2), e = dr(e, n, 2), e !== null && (pi(e, 2), zi(e));
  }
  function et(e, n, r) {
    if (e.tag === 3)
      hx(e, e, r);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          hx(
            n,
            e,
            r
          );
          break;
        } else if (n.tag === 1) {
          var l = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (vr === null || !vr.has(l))) {
            e = qn(r, e), r = cg(2), l = dr(n, r, 2), l !== null && (fg(
              r,
              l,
              n,
              e
            ), pi(l, 2), zi(l));
            break;
          }
        }
        n = n.return;
      }
  }
  function If(e, n, r) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new V2();
      var u = /* @__PURE__ */ new Set();
      l.set(n, u);
    } else
      u = l.get(n), u === void 0 && (u = /* @__PURE__ */ new Set(), l.set(n, u));
    u.has(r) || (Tf = !0, u.add(r), e = J2.bind(null, e, n, r), n.then(e, e));
  }
  function J2(e, n, r) {
    var l = e.pingCache;
    l !== null && l.delete(n), e.pingedLanes |= e.suspendedLanes & r, e.warmLanes &= ~r, rt === e && ($e & r) === r && ((gt === 4 || gt === 3 && ($e & 62914560) === $e && 300 > Ue() - Bs) && (Ke & 2) === 0 ? Wa(e, 0) : Ls |= r, Xa === $e && (Xa = 0)), zi(e);
  }
  function mx(e, n) {
    n === 0 && (n = Zt()), e = $r(e, n), e !== null && (pi(e, n), zi(e));
  }
  function W2(e) {
    var n = e.memoizedState, r = 0;
    n !== null && (r = n.retryLane), mx(e, r);
  }
  function ek(e, n) {
    var r = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode, u = e.memoizedState;
        u !== null && (r = u.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    l !== null && l.delete(n), mx(e, r);
  }
  function tk(e, n) {
    return In(e, n);
  }
  var tl = null, nl = null, Hf = !1, Gs = !1, Zf = !1, kr = 0;
  function zi(e) {
    e !== nl && e.next === null && (nl === null ? tl = nl = e : nl = nl.next = e), Gs = !0, Hf || (Hf = !0, ik());
  }
  function Wl(e, n) {
    if (!Zf && Gs) {
      Zf = !0;
      do
        for (var r = !1, l = tl; l !== null; ) {
          if (e !== 0) {
            var u = l.pendingLanes;
            if (u === 0) var d = 0;
            else {
              var y = l.suspendedLanes, k = l.pingedLanes;
              d = (1 << 31 - rn(42 | e) + 1) - 1, d &= u & ~(y & ~k), d = d & 201326741 ? d & 201326741 | 1 : d ? d | 2 : 0;
            }
            d !== 0 && (r = !0, yx(l, d));
          } else
            d = $e, d = ae(
              l,
              l === rt ? d : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (d & 3) === 0 || he(l, d) || (r = !0, yx(l, d));
          l = l.next;
        }
      while (r);
      Zf = !1;
    }
  }
  function nk() {
    gx();
  }
  function gx() {
    Gs = Hf = !1;
    var e = 0;
    kr !== 0 && hk() && (e = kr);
    for (var n = Ue(), r = null, l = tl; l !== null; ) {
      var u = l.next, d = xx(l, n);
      d === 0 ? (l.next = null, r === null ? tl = u : r.next = u, u === null && (nl = r)) : (r = l, (e !== 0 || (d & 3) !== 0) && (Gs = !0)), l = u;
    }
    pt !== 0 && pt !== 5 || Wl(e), kr !== 0 && (kr = 0);
  }
  function xx(e, n) {
    for (var r = e.suspendedLanes, l = e.pingedLanes, u = e.expirationTimes, d = e.pendingLanes & -62914561; 0 < d; ) {
      var y = 31 - rn(d), k = 1 << y, _ = u[y];
      _ === -1 ? ((k & r) === 0 || (k & l) !== 0) && (u[y] = Wt(k, n)) : _ <= n && (e.expiredLanes |= k), d &= ~k;
    }
    if (n = rt, r = $e, r = ae(
      e,
      e === n ? r : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, r === 0 || e === n && (We === 2 || We === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && zt(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((r & 3) === 0 || he(e, r)) {
      if (n = r & -r, n === e.callbackPriority) return n;
      switch (l !== null && zt(l), Yu(r)) {
        case 2:
        case 8:
          r = Dt;
          break;
        case 32:
          r = nr;
          break;
        case 268435456:
          r = fi;
          break;
        default:
          r = nr;
      }
      return l = bx.bind(null, e), r = In(r, l), e.callbackPriority = n, e.callbackNode = r, n;
    }
    return l !== null && l !== null && zt(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function bx(e, n) {
    if (pt !== 0 && pt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var r = e.callbackNode;
    if (Ys() && e.callbackNode !== r)
      return null;
    var l = $e;
    return l = ae(
      e,
      e === rt ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (ix(e, l, n), xx(e, Ue()), e.callbackNode != null && e.callbackNode === r ? bx.bind(null, e) : null);
  }
  function yx(e, n) {
    if (Ys()) return null;
    ix(e, n, !0);
  }
  function ik() {
    gk(function() {
      (Ke & 6) !== 0 ? In(
        Kt,
        nk
      ) : gx();
    });
  }
  function qf() {
    if (kr === 0) {
      var e = Qr;
      e === 0 && (e = Mi, Mi <<= 1, (Mi & 261888) === 0 && (Mi = 256)), kr = e;
    }
    return kr;
  }
  function vx(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : qo(e);
  }
  function rk(e, n, r, l, u) {
    if (n === "submit" && r && r.stateNode === u) {
      var d = vx(
        (u[hn] || null).action
      ), y = l.submitter;
      y && (n = (n = y[hn] || null) ? vx(n.formAction) : y.getAttribute("formAction"), n !== null && (d = n, y = null));
      var k = new Go(
        "action",
        "action",
        null,
        l,
        u
      );
      e.push({
        event: k,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (kr !== 0) {
                  var _ = new FormData(u, y);
                  Qc(
                    r,
                    {
                      pending: !0,
                      data: _,
                      method: u.method,
                      action: d
                    },
                    null,
                    _
                  );
                }
              } else
                typeof d == "function" && (k.preventDefault(), _ = new FormData(u, y), Qc(
                  r,
                  {
                    pending: !0,
                    data: _,
                    method: u.method,
                    action: d
                  },
                  d,
                  _
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var $f = 0; $f < pc.length; $f++) {
    var Vf = pc[$f], ak = Vf.toLowerCase(), lk = Vf[0].toUpperCase() + Vf.slice(1);
    Jn(
      ak,
      "on" + lk
    );
  }
  Jn(Gh, "onAnimationEnd"), Jn(Fh, "onAnimationIteration"), Jn(Xh, "onAnimationStart"), Jn("dblclick", "onDoubleClick"), Jn("focusin", "onFocus"), Jn("focusout", "onBlur"), Jn(m2, "onTransitionRun"), Jn(g2, "onTransitionStart"), Jn(x2, "onTransitionCancel"), Jn(Qh, "onTransitionEnd"), za("onMouseEnter", ["mouseout", "mouseover"]), za("onMouseLeave", ["mouseout", "mouseover"]), za("onPointerEnter", ["pointerout", "pointerover"]), za("onPointerLeave", ["pointerout", "pointerover"]), Hr(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Hr(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Hr("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Hr(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Hr(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Hr(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var eo = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), ok = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(eo)
  );
  function wx(e, n) {
    n = (n & 4) !== 0;
    for (var r = 0; r < e.length; r++) {
      var l = e[r], u = l.event;
      l = l.listeners;
      e: {
        var d = void 0;
        if (n)
          for (var y = l.length - 1; 0 <= y; y--) {
            var k = l[y], _ = k.instance, R = k.currentTarget;
            if (k = k.listener, _ !== d && u.isPropagationStopped())
              break e;
            d = k, u.currentTarget = R;
            try {
              d(u);
            } catch (q) {
              Qo(q);
            }
            u.currentTarget = null, d = _;
          }
        else
          for (y = 0; y < l.length; y++) {
            if (k = l[y], _ = k.instance, R = k.currentTarget, k = k.listener, _ !== d && u.isPropagationStopped())
              break e;
            d = k, u.currentTarget = R;
            try {
              d(u);
            } catch (q) {
              Qo(q);
            }
            u.currentTarget = null, d = _;
          }
      }
    }
  }
  function Ze(e, n) {
    var r = n[lh];
    r === void 0 && (r = n[lh] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    r.has(l) || (kx(n, e, 2, !1), r.add(l));
  }
  function Yf(e, n, r) {
    var l = 0;
    n && (l |= 4), kx(
      r,
      e,
      l,
      n
    );
  }
  var Fs = "_reactListening" + Math.random().toString(36).slice(2);
  function Gf(e) {
    if (!e[Fs]) {
      e[Fs] = !0, uh.forEach(function(r) {
        r !== "selectionchange" && (ok.has(r) || Yf(r, !1, e), Yf(r, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Fs] || (n[Fs] = !0, Yf("selectionchange", !1, n));
    }
  }
  function kx(e, n, r, l) {
    switch (fb(n)) {
      case 2:
        var u = Wk;
        break;
      case 8:
        u = eS;
        break;
      default:
        u = dd;
    }
    r = u.bind(
      null,
      n,
      r,
      e
    ), u = void 0, !Wu || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (u = !0), l ? u !== void 0 ? e.addEventListener(n, r, {
      capture: !0,
      passive: u
    }) : e.addEventListener(n, r, !0) : u !== void 0 ? e.addEventListener(n, r, {
      passive: u
    }) : e.addEventListener(n, r, !1);
  }
  function Ff(e, n, r, l, u) {
    var d = l;
    if ((n & 1) === 0 && (n & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var y = l.tag;
        if (y === 3 || y === 4) {
          var k = l.stateNode.containerInfo;
          if (k === u) break;
          if (y === 4)
            for (y = l.return; y !== null; ) {
              var _ = y.tag;
              if ((_ === 3 || _ === 4) && y.stateNode.containerInfo === u)
                return;
              y = y.return;
            }
          for (; k !== null; ) {
            if (y = Ir(k), y === null) return;
            if (_ = y.tag, _ === 5 || _ === 6 || _ === 26 || _ === 27) {
              l = d = y;
              continue e;
            }
            k = k.parentNode;
          }
        }
        l = l.return;
      }
    kh(function() {
      var R = d, q = Ku(r), Q = [];
      e: {
        var D = Ph.get(e);
        if (D !== void 0) {
          var H = Go, fe = e;
          switch (e) {
            case "keypress":
              if (Vo(r) === 0) break e;
            case "keydown":
            case "keyup":
              H = Yw;
              break;
            case "focusin":
              fe = "focus", H = ic;
              break;
            case "focusout":
              fe = "blur", H = ic;
              break;
            case "beforeblur":
            case "afterblur":
              H = ic;
              break;
            case "click":
              if (r.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              H = _h;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = Dw;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = Pw;
              break;
            case Gh:
            case Fh:
            case Xh:
              H = Uw;
              break;
            case Qh:
              H = Jw;
              break;
            case "scroll":
            case "scrollend":
              H = Aw;
              break;
            case "wheel":
              H = e2;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = Bw;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = Eh;
              break;
            case "submit":
              H = Xw;
              break;
            case "toggle":
            case "beforetoggle":
              H = n2;
          }
          var ye = (n & 4) !== 0, Re = !ye && (e === "scroll" || e === "scrollend"), M = ye ? D !== null ? D + "Capture" : null : D;
          ye = [];
          for (var A = R, B; A !== null; ) {
            var F = A;
            if (B = F.stateNode, F = F.tag, F !== 5 && F !== 26 && F !== 27 || B === null || M === null || (F = kl(A, M), F != null && ye.push(
              to(A, F, B)
            )), Re) break;
            A = A.return;
          }
          0 < ye.length && (D = new H(
            D,
            fe,
            null,
            r,
            q
          ), Q.push({ event: D, listeners: ye }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (H = e === "mouseover" || e === "pointerover", D = e === "mouseout" || e === "pointerout", H && r !== Pu && (fe = r.relatedTarget || r.fromElement) && (Ir(fe) || fe[wa]))
            break e;
          (D || H) && (fe = q.window === q ? q : (H = q.ownerDocument) ? H.defaultView || H.parentWindow : window, D ? (H = r.relatedTarget || r.toElement, D = R, H = H ? Ir(H) : null, H !== null && (Re = c(H), ye = H.tag, H !== Re || ye !== 5 && ye !== 27 && ye !== 6) && (H = null)) : (D = null, H = R), D !== H && (ye = _h, F = "onMouseLeave", M = "onMouseEnter", A = "mouse", (e === "pointerout" || e === "pointerover") && (ye = Eh, F = "onPointerLeave", M = "onPointerEnter", A = "pointer"), Re = D == null ? fe : wl(D), B = H == null ? fe : wl(H), fe = new ye(
            F,
            A + "leave",
            D,
            r,
            q
          ), fe.target = Re, fe.relatedTarget = B, F = null, Ir(q) === R && (ye = new ye(
            M,
            A + "enter",
            H,
            r,
            q
          ), ye.target = B, ye.relatedTarget = Re, F = ye), Re = F, ye = D && H ? T(
            D,
            H,
            sk
          ) : null, D !== null && Sx(
            Q,
            fe,
            D,
            ye,
            !1
          ), H !== null && Re !== null && Sx(
            Q,
            Re,
            H,
            ye,
            !0
          )));
        }
        e: {
          if (D = R ? wl(R) : window, H = D.nodeName && D.nodeName.toLowerCase(), H === "select" || H === "input" && D.type === "file")
            var me = Rh;
          else if (Dh(D))
            if (Uh)
              me = d2;
            else {
              me = c2;
              var Ve = u2;
            }
          else
            H = D.nodeName, !H || H.toLowerCase() !== "input" || D.type !== "checkbox" && D.type !== "radio" ? R && Qu(R.elementType) && (me = Rh) : me = f2;
          if (me && (me = me(e, R))) {
            Mh(
              Q,
              me,
              r,
              q
            );
            break e;
          }
          Ve && Ve(e, D, R);
        }
        switch (Ve = R ? wl(R) : window, e) {
          case "focusin":
            (Dh(Ve) || Ve.contentEditable === "true") && (Na = Ve, cc = R, Nl = null);
            break;
          case "focusout":
            Nl = cc = Na = null;
            break;
          case "mousedown":
            fc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            fc = !1, Vh(Q, r, q);
            break;
          case "selectionchange":
            if (h2) break;
          case "keydown":
          case "keyup":
            Vh(Q, r, q);
        }
        var ke;
        if (ac)
          e: {
            switch (e) {
              case "compositionstart":
                var Ce = "onCompositionStart";
                break e;
              case "compositionend":
                Ce = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ce = "onCompositionUpdate";
                break e;
            }
            Ce = void 0;
          }
        else
          Ta ? Ah(e, r) && (Ce = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (Ce = "onCompositionStart");
        Ce && (Ch && r.locale !== "ko" && (Ta || Ce !== "onCompositionStart" ? Ce === "onCompositionEnd" && Ta && (ke = Sh()) : (ir = q, ec = "value" in ir ? ir.value : ir.textContent, Ta = !0)), Ve = Xs(R, Ce), 0 < Ve.length && (Ce = new jh(
          Ce,
          e,
          null,
          r,
          q
        ), Q.push({ event: Ce, listeners: Ve }), ke ? Ce.data = ke : (ke = Oh(r), ke !== null && (Ce.data = ke)))), (ke = r2 ? a2(e, r) : l2(e, r)) && (Ce = Xs(R, "onBeforeInput"), 0 < Ce.length && (Ve = new jh(
          "onBeforeInput",
          "beforeinput",
          null,
          r,
          q
        ), Q.push({
          event: Ve,
          listeners: Ce
        }), Ve.data = ke)), rk(
          Q,
          e,
          R,
          r,
          q
        );
      }
      wx(Q, n);
    });
  }
  function to(e, n, r) {
    return {
      instance: e,
      listener: n,
      currentTarget: r
    };
  }
  function Xs(e, n) {
    for (var r = n + "Capture", l = []; e !== null; ) {
      var u = e, d = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || d === null || (u = kl(e, r), u != null && l.unshift(
        to(e, u, d)
      ), u = kl(e, n), u != null && l.push(
        to(e, u, d)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function sk(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Sx(e, n, r, l, u) {
    for (var d = n._reactName, y = []; r !== null && r !== l; ) {
      var k = r, _ = k.alternate, R = k.stateNode;
      if (k = k.tag, _ !== null && _ === l) break;
      k !== 5 && k !== 26 && k !== 27 || R === null || (_ = R, u ? (R = kl(r, d), R != null && y.unshift(
        to(r, R, _)
      )) : u || (R = kl(r, d), R != null && y.push(
        to(r, R, _)
      ))), r = r.return;
    }
    y.length !== 0 && e.push({ event: n, listeners: y });
  }
  var uk = /\r\n?/g, ck = /\u0000|\uFFFD/g;
  function zx(e) {
    return (typeof e == "string" ? e : "" + e).replace(uk, `
`).replace(ck, "");
  }
  function _x(e, n) {
    return n = zx(n), zx(e) === n;
  }
  function tt(e, n, r, l, u, d) {
    switch (r) {
      case "children":
        if (typeof l == "string")
          n === "body" || n === "textarea" && l === "" || ja(e, l);
        else if (typeof l == "number" || typeof l == "bigint")
          n !== "body" && ja(e, "" + l);
        else return;
        break;
      case "className":
        Zo(e, "class", l);
        break;
      case "tabIndex":
        Zo(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Zo(e, r, l);
        break;
      case "style":
        vh(e, l, d);
        return;
      case "data":
        if (n !== "object") {
          Zo(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (n !== "a" || r !== "href")) {
          e.removeAttribute(r);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(r);
          break;
        }
        l = qo(l), e.setAttribute(r, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            r,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof d == "function" && (r === "formAction" ? (n !== "input" && tt(e, n, "name", u.name, u, null), tt(
            e,
            n,
            "formEncType",
            u.formEncType,
            u,
            null
          ), tt(
            e,
            n,
            "formMethod",
            u.formMethod,
            u,
            null
          ), tt(
            e,
            n,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (tt(e, n, "encType", u.encType, u, null), tt(e, n, "method", u.method, u, null), tt(e, n, "target", u.target, u, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(r);
          break;
        }
        l = qo(l), e.setAttribute(r, l);
        break;
      case "onClick":
        l != null && (e.onclick = hi);
        return;
      case "onScroll":
        l != null && Ze("scroll", e);
        return;
      case "onScrollEnd":
        l != null && Ze("scrollend", e);
        return;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(o(61));
          if (r = l.__html, r != null) {
            if (u.children != null) throw Error(o(60));
            d?.__html !== r && (e.innerHTML = r);
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        r = qo(l), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          r
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(r, l) : e.removeAttribute(r);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(r, "") : e.removeAttribute(r);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(r, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(r, l) : e.removeAttribute(r);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(r, l) : e.removeAttribute(r);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(r) : e.setAttribute(r, l);
        break;
      case "popover":
        Ze("beforetoggle", e), Ze("toggle", e), Ho(e, "popover", l);
        break;
      case "xlinkActuate":
        Li(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        Li(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        Li(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        Li(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        Li(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        Li(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        Li(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        Li(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        Li(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        Ho(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N")
          r = Tw.get(r) || r, Ho(e, r, l);
        else return;
    }
    Fe = !0;
  }
  function Xf(e, n, r, l, u, d) {
    switch (r) {
      case "style":
        vh(e, l, d);
        return;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(o(61));
          if (r = l.__html, r != null) {
            if (u.children != null) throw Error(o(60));
            d?.__html !== r && (e.innerHTML = r);
          }
        }
        break;
      case "children":
        if (typeof l == "string") ja(e, l);
        else if (typeof l == "number" || typeof l == "bigint")
          ja(e, "" + l);
        else return;
        break;
      case "onScroll":
        l != null && Ze("scroll", e);
        return;
      case "onScrollEnd":
        l != null && Ze("scrollend", e);
        return;
      case "onClick":
        l != null && (e.onclick = hi);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!ch.hasOwnProperty(r))
          e: {
            if (r[0] === "o" && r[1] === "n" && (u = r.endsWith("Capture"), d = r.slice(2, u ? r.length - 7 : void 0), n = e[hn] || null, n = n != null ? n[r] : null, typeof n == "function" && e.removeEventListener(d, n, u), typeof l == "function")) {
              typeof n != "function" && n !== null && (r in e ? e[r] = null : e.hasAttribute(r) && e.removeAttribute(r)), e.addEventListener(d, l, u);
              break e;
            }
            Fe = !0, r in e ? e[r] = l : l === !0 ? e.setAttribute(r, "") : Ho(e, r, l);
          }
        return;
    }
    Fe = !0;
  }
  function Xt(e, n, r) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ze("error", e), Ze("load", e);
        var l = !1, u = !1, d;
        for (d in r)
          if (r.hasOwnProperty(d)) {
            var y = r[d];
            if (y != null)
              switch (d) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, n));
                default:
                  tt(e, n, d, y, r, null);
              }
          }
        u && tt(e, n, "srcSet", r.srcSet, r, null), l && tt(e, n, "src", r.src, r, null);
        return;
      case "input":
        Ze("invalid", e);
        var k = d = y = u = null, _ = null, R = null;
        for (l in r)
          if (r.hasOwnProperty(l)) {
            var q = r[l];
            if (q != null)
              switch (l) {
                case "name":
                  u = q;
                  break;
                case "type":
                  y = q;
                  break;
                case "checked":
                  _ = q;
                  break;
                case "defaultChecked":
                  R = q;
                  break;
                case "value":
                  d = q;
                  break;
                case "defaultValue":
                  k = q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (q != null)
                    throw Error(o(137, n));
                  break;
                default:
                  tt(e, n, l, q, r, null);
              }
          }
        gh(
          e,
          d,
          k,
          _,
          R,
          y,
          u,
          !1
        );
        return;
      case "select":
        Ze("invalid", e), l = y = d = null;
        for (u in r)
          if (r.hasOwnProperty(u) && (k = r[u], k != null))
            switch (u) {
              case "value":
                d = k;
                break;
              case "defaultValue":
                y = k;
                break;
              case "multiple":
                l = k;
              default:
                tt(e, n, u, k, r, null);
            }
        n = d, r = y, e.multiple = !!l, n != null ? _a(e, !!l, n, !1) : r != null && _a(e, !!l, r, !0);
        return;
      case "textarea":
        Ze("invalid", e), d = u = l = null;
        for (y in r)
          if (r.hasOwnProperty(y) && (k = r[y], k != null))
            switch (y) {
              case "value":
                l = k;
                break;
              case "defaultValue":
                u = k;
                break;
              case "children":
                d = k;
                break;
              case "dangerouslySetInnerHTML":
                if (k != null) throw Error(o(91));
                break;
              default:
                tt(e, n, y, k, r, null);
            }
        bh(e, l, u, d);
        return;
      case "option":
        for (_ in r)
          r.hasOwnProperty(_) && (l = r[_], l != null) && (_ === "selected" ? e.selected = l && typeof l != "function" && typeof l != "symbol" : tt(e, n, _, l, r, null));
        return;
      case "dialog":
        Ze("beforetoggle", e), Ze("toggle", e), Ze("cancel", e), Ze("close", e);
        break;
      case "iframe":
      case "object":
        Ze("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < eo.length; l++)
          Ze(eo[l], e);
        break;
      case "image":
        Ze("error", e), Ze("load", e);
        break;
      case "details":
        Ze("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ze("error", e), Ze("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (R in r)
          if (r.hasOwnProperty(R) && (l = r[R], l != null))
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, n));
              default:
                tt(e, n, R, l, r, null);
            }
        return;
      default:
        if (Qu(n)) {
          for (q in r)
            r.hasOwnProperty(q) && (l = r[q], l !== void 0 && Xf(
              e,
              n,
              q,
              l,
              r,
              void 0
            ));
          return;
        }
    }
    for (k in r)
      r.hasOwnProperty(k) && (l = r[k], l != null && tt(e, n, k, l, r, null));
  }
  var fk = {};
  function dk(e, n, r, l) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null, d = null, y = null, k = null, _ = null, R = null, q = null;
        for (H in r) {
          var Q = r[H];
          if (r.hasOwnProperty(H) && Q != null)
            switch (H) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                _ = Q;
              default:
                l.hasOwnProperty(H) || tt(e, n, H, null, l, Q);
            }
        }
        for (var D in l) {
          var H = l[D];
          if (Q = r[D], l.hasOwnProperty(D) && (H != null || Q != null))
            switch (D) {
              case "type":
                H !== Q && (Fe = !0), d = H;
                break;
              case "name":
                H !== Q && (Fe = !0), u = H;
                break;
              case "checked":
                H !== Q && (Fe = !0), R = H;
                break;
              case "defaultChecked":
                H !== Q && (Fe = !0), q = H;
                break;
              case "value":
                H !== Q && (Fe = !0), y = H;
                break;
              case "defaultValue":
                H !== Q && (Fe = !0), k = H;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (H != null)
                  throw Error(o(137, n));
                break;
              default:
                H !== Q && tt(
                  e,
                  n,
                  D,
                  H,
                  l,
                  Q
                );
            }
        }
        Fu(
          e,
          y,
          k,
          _,
          R,
          q,
          d,
          u
        );
        return;
      case "select":
        H = y = k = D = null;
        for (d in r)
          if (_ = r[d], r.hasOwnProperty(d) && _ != null)
            switch (d) {
              case "value":
                break;
              case "multiple":
                H = _;
              default:
                l.hasOwnProperty(d) || tt(
                  e,
                  n,
                  d,
                  null,
                  l,
                  _
                );
            }
        for (u in l)
          if (d = l[u], _ = r[u], l.hasOwnProperty(u) && (d != null || _ != null))
            switch (u) {
              case "value":
                d !== _ && (Fe = !0), D = d;
                break;
              case "defaultValue":
                d !== _ && (Fe = !0), k = d;
                break;
              case "multiple":
                d !== _ && (Fe = !0), y = d;
              default:
                d !== _ && tt(
                  e,
                  n,
                  u,
                  d,
                  l,
                  _
                );
            }
        n = k, r = y, l = H, D != null ? _a(e, !!r, D, !1) : !!l != !!r && (n != null ? _a(e, !!r, n, !0) : _a(e, !!r, r ? [] : "", !1));
        return;
      case "textarea":
        H = D = null;
        for (k in r)
          if (u = r[k], r.hasOwnProperty(k) && u != null && !l.hasOwnProperty(k))
            switch (k) {
              case "value":
                break;
              case "children":
                break;
              default:
                tt(e, n, k, null, l, u);
            }
        for (y in l)
          if (u = l[y], d = r[y], l.hasOwnProperty(y) && (u != null || d != null))
            switch (y) {
              case "value":
                u !== d && (Fe = !0), D = u;
                break;
              case "defaultValue":
                u !== d && (Fe = !0), H = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(o(91));
                break;
              default:
                u !== d && tt(e, n, y, u, l, d);
            }
        xh(e, D, H);
        return;
      case "option":
        for (var fe in r)
          D = r[fe], r.hasOwnProperty(fe) && D != null && !l.hasOwnProperty(fe) && (fe === "selected" ? e.selected = !1 : tt(
            e,
            n,
            fe,
            null,
            l,
            D
          ));
        for (_ in l)
          D = l[_], H = r[_], l.hasOwnProperty(_) && D !== H && (D != null || H != null) && (_ === "selected" ? (D !== H && (Fe = !0), e.selected = D && typeof D != "function" && typeof D != "symbol") : tt(
            e,
            n,
            _,
            D,
            l,
            H
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ye in r)
          D = r[ye], r.hasOwnProperty(ye) && D != null && !l.hasOwnProperty(ye) && tt(e, n, ye, null, l, D);
        for (R in l)
          if (D = l[R], H = r[R], l.hasOwnProperty(R) && D !== H && (D != null || H != null))
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null)
                  throw Error(o(137, n));
                break;
              default:
                tt(
                  e,
                  n,
                  R,
                  D,
                  l,
                  H
                );
            }
        return;
      default:
        if (Qu(n)) {
          for (var Re in r)
            D = r[Re], r.hasOwnProperty(Re) && D !== void 0 && !l.hasOwnProperty(Re) && Xf(
              e,
              n,
              Re,
              void 0,
              l,
              D
            );
          for (q in l)
            D = l[q], H = r[q], !l.hasOwnProperty(q) || D === H || D === void 0 && H === void 0 || Xf(
              e,
              n,
              q,
              D,
              l,
              H
            );
          return;
        }
    }
    for (var M in r)
      D = r[M], r.hasOwnProperty(M) && D != null && !l.hasOwnProperty(M) && tt(e, n, M, null, l, D);
    for (Q in l)
      D = l[Q], H = r[Q], !l.hasOwnProperty(Q) || D === H || D == null && H == null || tt(e, n, Q, D, l, H);
  }
  function jx(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function pk() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, n = 0, r = performance.getEntriesByType("resource"), l = 0; l < r.length; l++) {
        var u = r[l], d = u.transferSize, y = u.initiatorType, k = u.duration;
        if (d && k && jx(y)) {
          for (y = 0, k = u.responseEnd, l += 1; l < r.length; l++) {
            var _ = r[l], R = _.startTime;
            if (R > k) break;
            var q = _.transferSize, Q = _.initiatorType;
            q && jx(Q) && (_ = _.responseEnd, y += q * (_ < k ? 1 : (k - R) / (_ - R)));
          }
          if (--l, n += 8 * (d + y) / (u.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return n / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Qf = null, Pf = null;
  function no(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Ex(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Cx(e, n) {
    if (e === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && n === "foreignObject" ? 0 : e;
  }
  function Tx(e, n, r, l) {
    return r = no(
      r
    ).createElement(e), r[$t] = l, r[hn] = n, Xt(r, e, n), Mt(r), r;
  }
  function Kf(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Jf = null;
  function hk() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Jf ? !1 : (Jf = e, !0) : (Jf = null, !1);
  }
  var Wf = typeof setTimeout == "function" ? setTimeout : void 0, mk = typeof clearTimeout == "function" ? clearTimeout : void 0, Nx = typeof Promise == "function" ? Promise : void 0, Ax = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Wf, gk = typeof queueMicrotask == "function" ? queueMicrotask : typeof Nx < "u" ? function(e) {
    return Nx.resolve(null).then(e).catch(xk);
  } : Wf;
  function xk(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Sr(e) {
    return e === "head";
  }
  function Ox(e, n) {
    var r = n, l = 0;
    do {
      var u = r.nextSibling;
      if (e.removeChild(r), u && u.nodeType === 8)
        if (r = u.data, r === "/$" || r === "/&") {
          if (l === 0) {
            e.removeChild(u), ul(n);
            return;
          }
          l--;
        } else if (r === "$" || r === "$?" || r === "$~" || r === "$!" || r === "&")
          l++;
        else if (r === "html")
          od(
            e.ownerDocument.documentElement
          );
        else if (r === "head") {
          r = e.ownerDocument.head, od(r);
          for (var d = r.firstChild; d; ) {
            var y = d.nextSibling, k = d.nodeName;
            d[vl] || k === "SCRIPT" || k === "STYLE" || k === "LINK" && d.rel.toLowerCase() === "stylesheet" || r.removeChild(d), d = y;
          }
        } else
          r === "body" && od(e.ownerDocument.body);
      r = u;
    } while (r);
    ul(n);
  }
  function Dx(e, n) {
    var r = e;
    e = 0;
    do {
      var l = r.nextSibling;
      if (r.nodeType === 1 ? n ? (r._stashedDisplay = r.style.display, r.style.display = "none") : (r.style.display = r._stashedDisplay || "", r.getAttribute("style") === "" && r.removeAttribute("style")) : r.nodeType === 3 && (n ? (r._stashedText = r.nodeValue, r.nodeValue = "") : r.nodeValue = r._stashedText || ""), l && l.nodeType === 8)
        if (r = l.data, r === "/$") {
          if (e === 0) break;
          e--;
        } else
          r !== "$" && r !== "$?" && r !== "$~" && r !== "$!" || e++;
      r = l;
    } while (r);
  }
  function Mx(e, n, r) {
    if (n = CSS.escape(n) !== n ? "r-" + btoa(n).replace(/=/g, "") : n, e.style.viewTransitionName = n, r != null && (e.style.viewTransitionClass = r), r = getComputedStyle(e), r.display === "inline") {
      if (n = e.getClientRects(), n.length === 1) var l = 1;
      else
        for (var u = l = 0; u < n.length; u++) {
          var d = n[u];
          0 < d.width && 0 < d.height && l++;
        }
      l === 1 && (e = e.style, e.display = n.length === 1 ? "inline-block" : "block", e.marginTop = "-" + r.paddingTop, e.marginBottom = "-" + r.paddingBottom);
    }
  }
  function Rx(e, n) {
    e = e.style, n = n.style;
    var r = n != null ? n.hasOwnProperty("viewTransitionName") ? n.viewTransitionName : n.hasOwnProperty("view-transition-name") ? n["view-transition-name"] : null : null;
    e.viewTransitionName = r == null || typeof r == "boolean" ? "" : ("" + r).trim(), r = n != null ? n.hasOwnProperty("viewTransitionClass") ? n.viewTransitionClass : n.hasOwnProperty("view-transition-class") ? n["view-transition-class"] : null : null, e.viewTransitionClass = r == null || typeof r == "boolean" ? "" : ("" + r).trim(), e.display === "inline-block" && (n == null ? e.display = e.margin = "" : (r = n.display, e.display = r == null || typeof r == "boolean" ? "" : r, r = n.margin, r != null ? e.margin = r : (r = n.hasOwnProperty("marginTop") ? n.marginTop : n["margin-top"], e.marginTop = r == null || typeof r == "boolean" ? "" : r, n = n.hasOwnProperty("marginBottom") ? n.marginBottom : n["margin-bottom"], e.marginBottom = n == null || typeof n == "boolean" ? "" : n)));
  }
  function bk(e, n, r) {
    return r = r.ownerDocument.defaultView, {
      rect: e,
      abs: n.position === "absolute" || n.position === "fixed",
      clip: n.clipPath !== "none" || n.overflow !== "visible" || n.filter !== "none" || n.mask !== "none" || n.mask !== "none" || n.borderRadius !== "0px",
      view: 0 <= e.bottom && 0 <= e.right && e.top <= r.innerHeight && e.left <= r.innerWidth
    };
  }
  function ed(e) {
    var n = e.getBoundingClientRect(), r = getComputedStyle(e);
    return bk(n, r, e);
  }
  function yk(e) {
    return e.documentElement.clientHeight;
  }
  function vk(e) {
    this.addEventListener("load", e), this.addEventListener("error", e);
  }
  function wk(e, n, r, l, u, d, y, k, _) {
    var R = n.nodeType === 9 ? n : n.ownerDocument;
    try {
      var q = R.startViewTransition({
        update: function() {
          var D = R.defaultView, H = D.navigation && D.navigation.transition, fe = R.fonts.status;
          l();
          var ye = [];
          if (fe === "loaded" && (yk(R), R.fonts.status === "loading" && ye.push(R.fonts.ready)), fe = ye.length, e !== null)
            for (var Re = e.suspenseyImages, M = 0, A = 0; A < Re.length; A++) {
              var B = Re[A];
              if (!B.complete) {
                var F = B.getBoundingClientRect();
                if (0 < F.bottom && 0 < F.right && F.top < D.innerHeight && F.left < D.innerWidth) {
                  if (M += nb(B), M > Ks) {
                    ye.length = fe;
                    break;
                  }
                  B = new Promise(
                    vk.bind(B)
                  ), ye.push(B);
                }
              }
            }
          if (0 < ye.length)
            return D = Promise.race([
              Promise.all(ye),
              new Promise(function(me) {
                return setTimeout(me, 500);
              })
            ]).then(u, u), (H ? Promise.allSettled([H.finished, D]) : D).then(d, d);
          if (u(), H)
            return H.finished.then(
              d,
              d
            );
          d();
        },
        types: r
      });
      R.__reactViewTransition = q;
      var Q = [];
      return q.ready.then(
        function() {
          for (var D = R.documentElement.getAnimations({
            subtree: !0
          }), H = 0; H < D.length; H++) {
            var fe = D[H], ye = fe.effect, Re = ye.pseudoElement;
            if (Re != null && Re.startsWith("::view-transition")) {
              Q.push(fe), fe = ye.getKeyframes();
              for (var M = Re = void 0, A = !0, B = 0; B < fe.length; B++) {
                var F = fe[B], me = F.width;
                if (Re === void 0) Re = me;
                else if (Re !== me) {
                  A = !1;
                  break;
                }
                if (me = F.height, M === void 0) M = me;
                else if (M !== me) {
                  A = !1;
                  break;
                }
                delete F.width, delete F.height, F.transform === "none" && delete F.transform;
              }
              A && Re !== void 0 && M !== void 0 && (ye.setKeyframes(fe), A = getComputedStyle(
                ye.target,
                ye.pseudoElement
              ), A.width !== Re || A.height !== M) && (A = fe[0], A.width = Re, A.height = M, A = fe[fe.length - 1], A.width = Re, A.height = M, ye.setKeyframes(fe));
            }
          }
          y();
        },
        function(D) {
          R.__reactViewTransition === q && (R.__reactViewTransition = null);
          try {
            typeof D == "object" && D !== null && D.name === "InvalidStateError" && (D.message === "View transition was skipped because document visibility state is hidden." || D.message === "Skipping view transition because document visibility state has become hidden." || D.message === "Skipping view transition because viewport size changed." || D.message === "Transition was aborted because of invalid state") && (D = null), D !== null && _(D);
          } finally {
            l(), u(), y();
          }
        }
      ), q.finished.finally(function() {
        for (var D = 0; D < Q.length; D++)
          Q[D].cancel();
        R.__reactViewTransition === q && (R.__reactViewTransition = null), k();
      }), q;
    } catch {
      return l(), u(), y(), null;
    }
  }
  function la(e, n) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + n + ")";
  }
  la.prototype.animate = function(e, n) {
    return n = typeof n == "number" ? { duration: n } : X({}, n), n.pseudoElement = this._selector, this._scope.animate(e, n);
  }, la.prototype.getAnimations = function() {
    for (var e = this._scope, n = this._selector, r = e.getAnimations({ subtree: !0 }), l = [], u = 0; u < r.length; u++) {
      var d = r[u].effect;
      d !== null && d.target === e && d.pseudoElement === n && l.push(r[u]);
    }
    return l;
  }, la.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Ux(e) {
    return {
      name: e,
      group: new la("group", e),
      imagePair: new la("image-pair", e),
      old: new la("old", e),
      new: new la("new", e)
    };
  }
  function Dn(e) {
    this._fragmentFiber = e, this._observers = this._eventListeners = null;
  }
  Dn.prototype.addEventListener = function(e, n, r) {
    var l = null, u = null;
    if (!(r != null && typeof r != "boolean" && (l = r.signal || null, l !== null && l.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var d = this._eventListeners;
      if (Bx(d, e, n, r) === -1) {
        var y = this, k = n;
        r != null && typeof r != "boolean" && r.once === !0 && (k = function(_) {
          y.removeEventListener(
            e,
            n,
            r
          ), typeof n == "function" ? n.call(this, _) : n.handleEvent(_);
        }), l !== null && (u = y.removeEventListener.bind(
          y,
          e,
          n,
          r
        ), l.addEventListener("abort", u, { once: !0 }), u = l.removeEventListener.bind(l, "abort", u)), l = il(r), d.push({
          type: e,
          listener: n,
          optionsOrUseCapture: r,
          attachedListener: k,
          cleanup: u
        }), x(
          this._fragmentFiber.child,
          !1,
          kk,
          e,
          k,
          l
        );
      }
      this._eventListeners = d;
    }
  };
  function kk(e, n, r, l) {
    return E(e).addEventListener(
      n,
      r,
      l
    ), !1;
  }
  Dn.prototype.removeEventListener = function(e, n, r) {
    var l = this._eventListeners;
    if (l !== null && (n = Bx(
      l,
      e,
      n,
      r
    ), n !== -1)) {
      var u = l[n];
      r = u.attachedListener;
      var d = u.cleanup;
      u = il(u.optionsOrUseCapture), x(
        this._fragmentFiber.child,
        !1,
        Sk,
        e,
        r,
        u
      ), l.splice(n, 1), d !== null && d();
    }
  };
  function Sk(e, n, r, l) {
    return E(e).removeEventListener(
      n,
      r,
      l
    ), !1;
  }
  function il(e) {
    return e != null && typeof e != "boolean" && (e.once === !0 || e.signal instanceof AbortSignal) ? { capture: e.capture, passive: e.passive } : e;
  }
  function Lx(e) {
    return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
  }
  function Bx(e, n, r, l) {
    if (e.length === 0) return -1;
    l = Lx(l);
    for (var u = 0; u < e.length; u++) {
      var d = e[u];
      if (d.type === n && d.listener === r && Lx(d.optionsOrUseCapture) === l)
        return u;
    }
    return -1;
  }
  Dn.prototype.dispatchEvent = function(e) {
    var n = w(
      this._fragmentFiber
    );
    if (n === null) return !0;
    n = E(n);
    var r = this._eventListeners;
    if (r !== null && 0 < r.length || !e.bubbles) {
      var l = n.nodeType === 9 ? n.createComment("") : document.createTextNode("");
      if (r)
        for (var u = 0; u < r.length; u++) {
          var d = r[u];
          l.addEventListener(
            d.type,
            d.attachedListener,
            il(d.optionsOrUseCapture)
          );
        }
      if (n.appendChild(l), e = l.dispatchEvent(e), r)
        for (u = 0; u < r.length; u++)
          d = r[u], l.removeEventListener(
            d.type,
            d.attachedListener,
            il(d.optionsOrUseCapture)
          );
      return n.removeChild(l), e;
    }
    return n.dispatchEvent(e);
  }, Dn.prototype.focus = function(e) {
    x(
      this._fragmentFiber.child,
      !0,
      Ix,
      e,
      void 0,
      void 0
    );
  };
  function Ix(e, n) {
    return e.tag === 6 ? !1 : (e = E(e), Rk(e, n));
  }
  Dn.prototype.focusLast = function(e) {
    var n = [];
    x(
      this._fragmentFiber.child,
      !0,
      td,
      n,
      void 0,
      void 0
    );
    for (var r = n.length - 1; 0 <= r && !Ix(n[r], e); r--) ;
  };
  function td(e, n) {
    return n.push(e), !1;
  }
  Dn.prototype.blur = function() {
    var e = w(
      this._fragmentFiber
    );
    e !== null && (e = E(e), e = no(e).activeElement, e !== null && x(
      this._fragmentFiber.child,
      !1,
      zk,
      e,
      void 0,
      void 0
    ));
  };
  function zk(e, n) {
    return e.tag === 6 ? !1 : (e = E(e), e === n || e.contains(n) ? (n.blur(), !0) : !1);
  }
  Dn.prototype.observeUsing = function(e) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), x(
      this._fragmentFiber.child,
      !1,
      _k,
      e,
      void 0,
      void 0
    );
  };
  function _k(e, n) {
    return e.tag === 6 || (e = E(e), n.observe(e)), !1;
  }
  Dn.prototype.unobserveUsing = function(e) {
    var n = this._observers;
    if (n !== null && n.has(e)) {
      n.delete(e), x(
        this._fragmentFiber.child,
        !1,
        jk,
        e,
        void 0,
        void 0
      );
      for (var r = n = 0; r < ii.length; r++) {
        var l = ii[r];
        l.fragmentInstance === this && l.observer === e ? e.unobserve(l.instance) : ii[n++] = l;
      }
      ii.length = n;
    }
  };
  function jk(e, n) {
    return e.tag === 6 || (e = E(e), n.unobserve(e)), !1;
  }
  var ii = [], nd = !1;
  function Ek(e, n, r) {
    ii.push({
      fragmentInstance: e,
      observer: n,
      instance: r
    }), nd || (nd = !0, Uk(function() {
      nd = !1;
      var l = ii;
      ii = [];
      for (var u = 0; u < l.length; u++) {
        var d = l[u];
        d.observer.unobserve(d.instance);
      }
    }));
  }
  Dn.prototype.getClientRects = function() {
    var e = [];
    return x(
      this._fragmentFiber.child,
      !1,
      Ck,
      e,
      void 0,
      void 0
    ), e;
  };
  function Ck(e, n) {
    if (e.tag === 6) {
      e = e.stateNode;
      var r = e.ownerDocument.createRange();
      r.selectNodeContents(e), n.push.apply(n, r.getClientRects());
    } else
      e = E(e), n.push.apply(n, e.getClientRects());
    return !1;
  }
  Dn.prototype.getRootNode = function(e) {
    var n = w(
      this._fragmentFiber
    );
    return n === null ? this : E(n).getRootNode(e);
  }, Dn.prototype.compareDocumentPosition = function(e) {
    var n = w(
      this._fragmentFiber
    );
    if (n === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var r = [];
    x(
      this._fragmentFiber.child,
      !1,
      td,
      r,
      void 0,
      void 0
    );
    var l = E(n);
    if (r.length === 0) {
      if (r = l, v(this._fragmentFiber)) {
        e: {
          for (n = this._fragmentFiber.return; n !== null; ) {
            if (n.tag === 4) {
              n = n.stateNode.containerInfo;
              break e;
            }
            if (n.tag === 3 || n.tag === 5 || n.tag === 27)
              break;
            n = n.return;
          }
          n = null;
        }
        n != null && (r = n);
      }
      n = this._fragmentFiber;
      var u = l = r.compareDocumentPosition(e);
      return r === e ? u = Node.DOCUMENT_POSITION_CONTAINS : l & Node.DOCUMENT_POSITION_CONTAINED_BY && (r = S(n)[1], r === null ? u = Node.DOCUMENT_POSITION_PRECEDING : (e = E(r).compareDocumentPosition(
        e
      ), u = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), u |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    n = E(r[0]), u = E(r[r.length - 1]);
    var d = v(this._fragmentFiber) ? n.parentElement : l;
    if (d == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    l = d.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY, d = d.compareDocumentPosition(u) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var y = n.compareDocumentPosition(e), k = u.compareDocumentPosition(e), _ = y & Node.DOCUMENT_POSITION_CONTAINED_BY || k & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return k = l && d && y & Node.DOCUMENT_POSITION_FOLLOWING && k & Node.DOCUMENT_POSITION_PRECEDING, n = l && n === e || d && u === e || _ || k ? Node.DOCUMENT_POSITION_CONTAINED_BY : !l && n === e || !d && u === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : y, n & Node.DOCUMENT_POSITION_DISCONNECTED || n & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Tk(
      n,
      this._fragmentFiber,
      r[0],
      r[r.length - 1],
      e
    ) ? n : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function Tk(e, n, r, l, u) {
    var d = Ir(u);
    if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (r = !!d)
        e: {
          for (; d !== null; ) {
            if (d.tag === 7 && (d === n || d.alternate === n)) {
              r = !0;
              break e;
            }
            d = d.return;
          }
          r = !1;
        }
      return r;
    }
    if (e & Node.DOCUMENT_POSITION_CONTAINS) {
      if (d === null)
        return d = u.ownerDocument, u === d || u === d.documentElement || u === d.body;
      e: {
        for (d = n, n = w(n); d !== null; ) {
          if (!(d.tag !== 5 && d.tag !== 3 && d.tag !== 27 || d !== n && d.alternate !== n)) {
            d = !0;
            break e;
          }
          d = d.return;
        }
        d = !1;
      }
      return d;
    }
    return e & Node.DOCUMENT_POSITION_PRECEDING ? ((n = !!d) && !(n = d === r) && (n = T(
      r,
      d,
      J
    ), n === null ? n = !1 : (x(
      n,
      !0,
      L,
      d,
      r
    ), d = O, O = null, n = d !== null)), n) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((n = !!d) && !(n = d === l) && (n = T(
      l,
      d,
      J
    ), n === null ? n = !1 : (x(
      n,
      !0,
      V,
      d,
      l
    ), d = O, I = O = null, n = d !== null)), n) : !1;
  }
  function Hx(e, n) {
    var r = e.ownerDocument.createRange();
    r.selectNodeContents(e), e = r.getBoundingClientRect(), window.scrollTo(
      window.scrollX + e.left,
      n ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight
    );
  }
  Dn.prototype.scrollIntoView = function(e) {
    if (typeof e == "object") throw Error(o(566));
    var n = [];
    x(
      this._fragmentFiber.child,
      !1,
      td,
      n,
      void 0,
      void 0
    );
    var r = e !== !1;
    if (n.length === 0) {
      var l = S(
        this._fragmentFiber
      );
      if (l = r ? l[1] || l[0] || w(this._fragmentFiber) : l[0] || l[1], l === null) return;
      if (l.tag === 6) {
        e = E(l), Hx(e, r);
        return;
      }
      if (l = E(l), l.nodeType !== 9) {
        if (l.nodeType === 11) {
          r = "host" in l ? l.host : null, r !== null && r.scrollIntoView(e);
          return;
        }
        l.scrollIntoView(e);
      }
    }
    for (l = r ? n.length - 1 : 0; l !== (r ? -1 : n.length); ) {
      var u = n[l];
      u.tag === 6 ? (u = E(u), Hx(u, r)) : E(u).scrollIntoView(e), l += r ? -1 : 1;
    }
  };
  function Nk(e, n) {
    return e = E(e), Zx(e, n), !1;
  }
  function Zx(e, n) {
    e.reactFragments == null && (e.reactFragments = /* @__PURE__ */ new Set()), e.reactFragments.add(n);
  }
  function qx(e, n) {
    var r = n._eventListeners;
    if (r !== null)
      for (var l = 0; l < r.length; l++) {
        var u = r[l];
        e.addEventListener(
          u.type,
          u.attachedListener,
          il(u.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 && (r = n._observers, r !== null && r.forEach(function(d) {
      for (var y = 0, k = 0; k < ii.length; k++) {
        var _ = ii[k];
        (_.fragmentInstance !== n || _.observer !== d || _.instance !== e) && (ii[y++] = _);
      }
      ii.length = y, d.observe(e);
    }), Zx(e, n));
  }
  function Ak(e, n) {
    var r = n._eventListeners;
    if (r !== null)
      for (var l = 0; l < r.length; l++) {
        var u = r[l];
        e.removeEventListener(
          u.type,
          u.attachedListener,
          il(u.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 && (r = n._observers, r !== null && r.forEach(function(d) {
      typeof d.rootMargin == "string" ? Ek(
        n,
        d,
        e
      ) : d.unobserve(e);
    }), e.reactFragments != null && e.reactFragments.delete(n));
  }
  function id(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var r = n;
      switch (n = n.nextSibling, r.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          id(r), Io(r);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (r.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(r);
    }
  }
  function Ok(e, n, r, l) {
    for (; e.nodeType === 1; ) {
      var u = r;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[vl])
          switch (n) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (d = e.getAttribute("rel"), d === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (d !== u.rel || e.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || e.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (d = e.getAttribute("src"), (d !== (u.src == null ? null : u.src) || e.getAttribute("type") !== (u.type == null ? null : u.type) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && d && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (n === "input" && e.type === "hidden") {
        var d = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && e.getAttribute("name") === d)
          return e;
      } else return e;
      if (e = Fn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Dk(e, n, r) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !r || (e = Fn(e.nextSibling), e === null)) return null;
    return e;
  }
  function $x(e, n) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Fn(e.nextSibling), e === null)) return null;
    return e;
  }
  function rd(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function ad(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Mk(e, n) {
    var r = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = n;
    else if (e.data !== "$?" || r.readyState !== "loading")
      n();
    else {
      var l = function() {
        n(), r.removeEventListener("DOMContentLoaded", l);
      };
      r.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
    }
  }
  function Fn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = e.data, n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&" || n === "F!" || n === "F")
          break;
        if (n === "/$" || n === "/&") return null;
      }
    }
    return e;
  }
  var ld = null;
  function Vx(e) {
    e = e.nextSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "/$" || r === "/&") {
          if (n === 0)
            return Fn(e.nextSibling);
          n--;
        } else
          r !== "$" && r !== "$!" && r !== "$?" && r !== "$~" && r !== "&" || n++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Yx(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "$" || r === "$!" || r === "$?" || r === "$~" || r === "&") {
          if (n === 0) return e;
          n--;
        } else r !== "/$" && r !== "/&" || n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Rk(e, n) {
    function r() {
      l = !0;
    }
    if (e.ownerDocument.activeElement === e) return !0;
    var l = !1;
    try {
      e.ownerDocument.addEventListener("focus", r, !0), (e.focus || HTMLElement.prototype.focus).call(e, n);
    } finally {
      e.ownerDocument.removeEventListener("focus", r, !0);
    }
    return l;
  }
  function Uk(e) {
    Ax(function() {
      Ax(function(n) {
        return e(n);
      });
    });
  }
  function Gx(e, n, r) {
    switch (n = no(r), e) {
      case "html":
        if (e = n.documentElement, !e) throw Error(o(452));
        return e;
      case "head":
        if (e = n.head, !e) throw Error(o(453));
        return e;
      case "body":
        if (e = n.body, !e) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  function Fx(e, n, r) {
    for (var l in r) {
      var u = r[l];
      r.hasOwnProperty(l) && u != null && tt(e, n, l, null, fk, u);
    }
    r.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === hi && (e.onclick = null), Io(e);
  }
  function od(e) {
    for (var n = e.attributes; n.length; )
      e.removeAttributeNode(n[0]);
    Io(e);
  }
  var Xn = /* @__PURE__ */ new Map(), Xx = /* @__PURE__ */ new Set();
  function io(e) {
    if (typeof e.getRootNode == "function") {
      var n = e.getRootNode();
      if (n.nodeType === 9 || n.nodeType === 11) return n;
    }
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Pi = we.d;
  we.d = {
    f: Lk,
    r: Bk,
    D: Ik,
    C: Hk,
    L: Zk,
    m: qk,
    X: Vk,
    S: $k,
    M: Yk
  };
  function Lk() {
    var e = Pi.f(), n = qs();
    return e || n;
  }
  function Bk(e) {
    var n = ka(e);
    n !== null && n.tag === 5 && n.type === "form" ? Pm(n) : Pi.r(e);
  }
  var rl = typeof document > "u" ? null : document;
  function Qx(e, n, r) {
    var l = rl;
    if (l && typeof n == "string" && n) {
      var u = Hn(n);
      u = 'link[rel="' + e + '"][href="' + u + '"]', typeof r == "string" && (u += '[crossorigin="' + r + '"]'), Xx.has(u) || (Xx.add(u), e = { rel: e, crossOrigin: r, href: n }, l.querySelector(u) === null && (n = l.createElement("link"), Xt(n, "link", e), Mt(n), l.head.appendChild(n)));
    }
  }
  function Ik(e) {
    Pi.D(e), Qx("dns-prefetch", e, null);
  }
  function Hk(e, n) {
    Pi.C(e, n), Qx("preconnect", e, n);
  }
  function Zk(e, n, r) {
    Pi.L(e, n, r);
    var l = rl;
    if (l && e && n) {
      var u = 'link[rel="preload"][as="' + Hn(n) + '"]';
      n === "image" && r && r.imageSrcSet ? (u += '[imagesrcset="' + Hn(
        r.imageSrcSet
      ) + '"]', typeof r.imageSizes == "string" && (u += '[imagesizes="' + Hn(
        r.imageSizes
      ) + '"]')) : u += '[href="' + Hn(e) + '"]';
      var d = u;
      switch (n) {
        case "style":
          d = al(e);
          break;
        case "script":
          d = ll(e);
      }
      if (!(Xn.has(d) || (e = X(
        {
          rel: "preload",
          href: n === "image" && r && r.imageSrcSet ? void 0 : e,
          as: n
        },
        r
      ), Xn.set(d, e), l.querySelector(u) !== null || n === "style" && l.querySelector(ro(d)) || n === "script" && l.querySelector(ao(d))))) {
        var y = l.createElement("link");
        Xt(y, "link", e), n === "style" && (y[Bo] = !0, y.onload = y.onerror = function() {
          sh(y);
        }), Mt(y), l.head.appendChild(y);
      }
    }
  }
  function qk(e, n) {
    Pi.m(e, n);
    var r = rl;
    if (r && e) {
      var l = n && typeof n.as == "string" ? n.as : "script", u = 'link[rel="modulepreload"][as="' + Hn(l) + '"][href="' + Hn(e) + '"]', d = u;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          d = ll(e);
      }
      if (!Xn.has(d) && (e = X({ rel: "modulepreload", href: e }, n), Xn.set(d, e), r.querySelector(u) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (r.querySelector(ao(d)))
              return;
        }
        l = r.createElement("link"), Xt(l, "link", e), Mt(l), r.head.appendChild(l);
      }
    }
  }
  function $k(e, n, r) {
    Pi.S(e, n, r);
    var l = rl;
    if (l && e) {
      var u = Sa(l).hoistableStyles, d = al(e);
      n = n || "default";
      var y = u.get(d);
      if (!y) {
        var k = { loading: 0, preload: null };
        if (y = l.querySelector(
          ro(d)
        ))
          k.loading = 5;
        else {
          e = X(
            { rel: "stylesheet", href: e, "data-precedence": n },
            r
          ), (r = Xn.get(d)) && sd(e, r);
          var _ = y = l.createElement("link");
          Mt(_), Xt(_, "link", e), _._p = new Promise(function(R, q) {
            _.onload = R, _.onerror = q;
          }), _.addEventListener("load", function() {
            k.loading |= 1;
          }), _.addEventListener("error", function() {
            k.loading |= 2;
          }), k.loading |= 4, Qs(y, n, l);
        }
        y = {
          type: "stylesheet",
          instance: y,
          count: 1,
          state: k
        }, u.set(d, y);
      }
    }
  }
  function Vk(e, n) {
    Pi.X(e, n);
    var r = rl;
    if (r && e) {
      var l = Sa(r).hoistableScripts, u = ll(e), d = l.get(u);
      d || (d = r.querySelector(ao(u)), d || (e = X({ src: e, async: !0 }, n), (n = Xn.get(u)) && ud(e, n), d = r.createElement("script"), Mt(d), Xt(d, "link", e), r.head.appendChild(d)), d = {
        type: "script",
        instance: d,
        count: 1,
        state: null
      }, l.set(u, d));
    }
  }
  function Yk(e, n) {
    Pi.M(e, n);
    var r = rl;
    if (r && e) {
      var l = Sa(r).hoistableScripts, u = ll(e), d = l.get(u);
      d || (d = r.querySelector(ao(u)), d || (e = X({ src: e, async: !0, type: "module" }, n), (n = Xn.get(u)) && ud(e, n), d = r.createElement("script"), Mt(d), Xt(d, "link", e), r.head.appendChild(d)), d = {
        type: "script",
        instance: d,
        count: 1,
        state: null
      }, l.set(u, d));
    }
  }
  function Px(e, n, r, l) {
    var u = (u = It.current) ? io(u) : null;
    if (!u) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof r.precedence == "string" && typeof r.href == "string" ? (r = al(r.href), n = Sa(
          u
        ).hoistableStyles, l = n.get(r), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(r, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (r.rel === "stylesheet" && typeof r.href == "string" && typeof r.precedence == "string") {
          e = al(r.href);
          var d = Sa(
            u
          ).hoistableStyles, y = d.get(e);
          if (y || (u = u.ownerDocument || u, y = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, d.set(e, y), (d = u.querySelector(
            ro(e)
          )) ? d._p || (y.instance = d, y.state.loading = 5) : (d = Xn.get(e), d || (d = {
            rel: "preload",
            as: "style",
            href: r.href,
            crossOrigin: r.crossOrigin,
            integrity: r.integrity,
            media: r.media,
            hrefLang: r.hrefLang,
            referrerPolicy: r.referrerPolicy
          }, Xn.set(e, d)), Gk(
            u,
            e,
            d,
            y.state
          ))), n && l === null)
            throw Error(o(528, ""));
          return y;
        }
        if (n && l !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return n = r.async, r = r.src, typeof r == "string" && n && typeof n != "function" && typeof n != "symbol" ? (r = ll(r), n = Sa(
          u
        ).hoistableScripts, l = n.get(r), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(r, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, e));
    }
  }
  function al(e) {
    return 'href="' + Hn(e) + '"';
  }
  function ro(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Kx(e) {
    return X({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Gk(e, n, r, l) {
    if (n = e.querySelector(
      'link[rel="preload"][as="style"][' + n + "]"
    )) {
      if (n[Bo] !== !0) {
        l.loading = 1;
        return;
      }
    } else
      n = e.createElement("link"), n[Bo] = !0, n.onload = n.onerror = sh.bind(null, n), Xt(n, "link", r), Mt(n), e.head.appendChild(n);
    l.preload = n, n.addEventListener("load", function() {
      return l.loading |= 1;
    }), n.addEventListener("error", function() {
      return l.loading |= 2;
    });
  }
  function ll(e) {
    return '[src="' + Hn(e) + '"]';
  }
  function ao(e) {
    return "script[async]" + e;
  }
  function Jx(e, n, r) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + Hn(r.href) + '"]'
          );
          if (l)
            return n.instance = l, Mt(l), l;
          var u = X({}, r, {
            "data-href": r.href,
            "data-precedence": r.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), Mt(l), Xt(l, "style", u), Qs(l, r.precedence, e), n.instance = l;
        case "stylesheet":
          u = al(r.href);
          var d = e.querySelector(
            ro(u)
          );
          if (d)
            return n.state.loading |= 4, n.instance = d, Mt(d), d;
          l = Kx(r), (u = Xn.get(u)) && sd(l, u), d = (e.ownerDocument || e).createElement("link"), Mt(d);
          var y = d;
          return y._p = new Promise(function(k, _) {
            y.onload = k, y.onerror = _;
          }), Xt(d, "link", l), n.state.loading |= 4, Qs(d, r.precedence, e), n.instance = d;
        case "script":
          return d = ll(r.src), (u = e.querySelector(
            ao(d)
          )) ? (n.instance = u, Mt(u), u) : (l = r, (u = Xn.get(d)) && (l = X({}, r), ud(l, u)), e = e.ownerDocument || e, u = e.createElement("script"), Mt(u), Xt(u, "link", l), e.head.appendChild(u), n.instance = u);
        case "void":
          return null;
        default:
          throw Error(o(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (l = n.instance, n.state.loading |= 4, Qs(l, r.precedence, e));
    return n.instance;
  }
  function Qs(e, n, r) {
    for (var l = r.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = l.length ? l[l.length - 1] : null, d = u, y = 0; y < l.length; y++) {
      var k = l[y];
      if (k.dataset.precedence === n) d = k;
      else if (d !== u) break;
    }
    d ? d.parentNode.insertBefore(e, d.nextSibling) : (n = r.nodeType === 9 ? r.head : r, n.insertBefore(e, n.firstChild));
  }
  function sd(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title);
  }
  function ud(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.integrity == null && (e.integrity = n.integrity);
  }
  var Ps = null;
  function Wx(e, n, r) {
    if (Ps === null) {
      var l = /* @__PURE__ */ new Map(), u = Ps = /* @__PURE__ */ new Map();
      u.set(r, l);
    } else
      u = Ps, l = u.get(r), l || (l = /* @__PURE__ */ new Map(), u.set(r, l));
    if (l.has(e)) return l;
    for (l.set(e, null), r = r.getElementsByTagName(e), u = 0; u < r.length; u++) {
      var d = r[u];
      if (!(d[vl] || d[$t] || e === "link" && d.getAttribute("rel") === "stylesheet") && d.namespaceURI !== "http://www.w3.org/2000/svg") {
        var y = d.getAttribute(n) || "";
        y = e + y;
        var k = l.get(y);
        k ? k.push(d) : l.set(y, [d]);
      }
    }
    return l;
  }
  function cd(e, n, r) {
    e = e.ownerDocument || e, e.head.insertBefore(
      r,
      n === "title" ? e.querySelector("head > title") : null
    );
  }
  function Fk(e, n, r) {
    if (r === 1 || n.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        return n.rel === "stylesheet" ? (e = n.disabled, typeof n.precedence == "string" && e == null) : !0;
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function eb(e, n) {
    return e === "img" && n.src != null && n.src !== "" && n.onLoad == null && n.loading !== "lazy";
  }
  function tb(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function nb(e) {
    return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function ib(e, n) {
    typeof n.decode == "function" && (e.imgCount++, n.complete || (e.imgBytes += nb(n), e.suspenseyImages.push(n)), e = Pk.bind(e), n.decode().then(e, e));
  }
  function Xk(e, n, r, l) {
    if (r.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (r.state.loading & 4) === 0) {
      if (r.instance === null) {
        var u = al(l.href), d = n.querySelector(
          ro(u)
        );
        if (d) {
          n = d._p, n !== null && typeof n == "object" && typeof n.then == "function" && (e.count++, e = lo.bind(e), n.then(e, e)), r.state.loading |= 4, r.instance = d, Mt(d);
          return;
        }
        d = n.ownerDocument || n, l = Kx(l), (u = Xn.get(u)) && sd(l, u), d = d.createElement("link"), Mt(d);
        var y = d;
        y._p = new Promise(function(k, _) {
          y.onload = k, y.onerror = _;
        }), Xt(d, "link", l), r.instance = d;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(r, n), (n = r.state.preload) && (r.state.loading & 3) === 0 && (e.count++, r = lo.bind(e), n.addEventListener("load", r), n.addEventListener("error", r));
    }
  }
  var Ks = 0;
  function Qk(e, n) {
    return e.stylesheets && e.count === 0 && Ws(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(r) {
      var l = setTimeout(function() {
        if (e.stylesheets && Ws(e, e.stylesheets), e.unsuspend) {
          var d = e.unsuspend;
          e.unsuspend = null, d();
        }
      }, 6e4 + n);
      0 < e.imgBytes && Ks === 0 && (Ks = 62500 * pk());
      var u = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Ws(e, e.stylesheets), e.unsuspend)) {
            var d = e.unsuspend;
            e.unsuspend = null, d();
          }
        },
        (e.imgBytes > Ks ? 50 : 800) + n
      );
      return e.unsuspend = r, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(u);
      };
    } : null;
  }
  function rb(e) {
    if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
      if (e.stylesheets) Ws(e, e.stylesheets);
      else if (e.unsuspend) {
        var n = e.unsuspend;
        e.unsuspend = null, n();
      }
    }
  }
  function lo() {
    this.count--, rb(this);
  }
  function Pk() {
    this.imgCount--, rb(this);
  }
  var Js = null;
  function Ws(e, n) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Js = /* @__PURE__ */ new Map(), n.forEach(Kk, e), Js = null, lo.call(e));
  }
  function Kk(e, n) {
    if (!(n.state.loading & 4)) {
      var r = Js.get(e);
      if (r) var l = r.get(null);
      else {
        r = /* @__PURE__ */ new Map(), Js.set(e, r);
        for (var u = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), d = 0; d < u.length; d++) {
          var y = u[d];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (r.set(y.dataset.precedence, y), l = y);
        }
        l && r.set(null, l);
      }
      u = n.instance, y = u.getAttribute("data-precedence"), d = r.get(y) || l, d === l && r.set(null, u), r.set(y, u), this.count++, l = lo.bind(this), u.addEventListener("load", l), u.addEventListener("error", l), d ? d.parentNode.insertBefore(u, d.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(u, e.firstChild)), n.state.loading |= 4;
    }
  }
  var ol = {
    $$typeof: ee,
    Provider: null,
    Consumer: null,
    _currentValue: Bt,
    _currentValue2: Bt,
    _threadCount: 0
  };
  function Jk(e, n, r, l, u, d, y, k, _) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = an(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = an(0), this.hiddenUpdates = an(null), this.identifierPrefix = l, this.onUncaughtError = u, this.onCaughtError = d, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = _, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function ab(e, n, r, l, u, d, y, k, _, R, q, Q) {
    return e = new Jk(
      e,
      n,
      r,
      y,
      _,
      R,
      q,
      Q,
      k
    ), n = 1, d === !0 && (n |= 24), d = mn(3, null, null, n), e.current = d, d.stateNode = e, n = zc(), n.refCount++, e.pooledCache = n, n.refCount++, d.memoizedState = {
      element: l,
      isDehydrated: r,
      cache: n
    }, Cc(d), e;
  }
  function lb(e) {
    return e ? (e = Da, e) : Da;
  }
  function ob(e, n, r, l, u, d) {
    u = lb(u), l.context === null ? l.context = u : l.pendingContext = u, l = fr(n), l.payload = { element: r }, d = d === void 0 ? null : d, d !== null && (l.callback = d), r = dr(e, l, n), r !== null && (yn(r, e, n), Ll(r, e, n));
  }
  function sb(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < n ? r : n;
    }
  }
  function fd(e, n) {
    sb(e, n), (e = e.alternate) && sb(e, n);
  }
  function ub(e) {
    if (e.tag === 13 || e.tag === 31) {
      var n = $r(e, 67108864);
      n !== null && yn(n, e, 67108864), fd(e, 67108864);
    }
  }
  function cb(e) {
    if (e.tag === 13 || e.tag === 31) {
      var n = On();
      n = Br(n);
      var r = $r(e, n);
      r !== null && yn(r, e, n), fd(e, n);
    }
  }
  var sl = !0;
  function Wk(e, n, r, l) {
    var u = ce.T;
    ce.T = null;
    var d = we.p;
    try {
      we.p = 2, dd(e, n, r, l);
    } finally {
      we.p = d, ce.T = u;
    }
  }
  function eS(e, n, r, l) {
    var u = ce.T;
    ce.T = null;
    var d = we.p;
    try {
      we.p = 8, dd(e, n, r, l);
    } finally {
      we.p = d, ce.T = u;
    }
  }
  function dd(e, n, r, l) {
    if (sl) {
      var u = pd(l);
      if (u === null)
        Ff(
          e,
          n,
          l,
          eu,
          r
        ), db(e, l);
      else if (nS(
        u,
        e,
        n,
        r,
        l
      ))
        l.stopPropagation();
      else if (db(e, l), n & 4 && -1 < tS.indexOf(e)) {
        for (; u !== null; ) {
          var d = ka(u);
          if (d !== null)
            switch (d.tag) {
              case 3:
                if (d = d.stateNode, d.current.memoizedState.isDehydrated) {
                  var y = U(d.pendingLanes);
                  if (y !== 0) {
                    var k = d;
                    for (k.pendingLanes |= 2, k.entangledLanes |= 2; y; ) {
                      var _ = 1 << 31 - rn(y);
                      k.entanglements[1] |= _, y &= ~_;
                    }
                    zi(d), (Ke & 6) === 0 && (Is = Ue() + 500, Wl(0));
                  }
                }
                break;
              case 31:
              case 13:
                k = $r(d, 2), k !== null && yn(k, d, 2), qs(), fd(d, 2);
            }
          if (d = pd(l), d === null && Ff(
            e,
            n,
            l,
            eu,
            r
          ), d === u) break;
          u = d;
        }
        u !== null && l.stopPropagation();
      } else
        Ff(
          e,
          n,
          l,
          null,
          r
        );
    }
  }
  function pd(e) {
    return e = Ku(e), hd(e);
  }
  var eu = null;
  function hd(e) {
    if (eu = null, e = Ir(e), e !== null) {
      var n = c(e);
      if (n === null) e = null;
      else {
        var r = n.tag;
        if (r === 13) {
          if (e = f(n), e !== null) return e;
          e = null;
        } else if (r === 31) {
          if (e = p(n), e !== null) return e;
          e = null;
        } else if (r === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      }
    }
    return eu = e, null;
  }
  function fb(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (Ot()) {
          case Kt:
            return 2;
          case Dt:
            return 8;
          case nr:
          case Uo:
            return 32;
          case fi:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var md = !1, zr = null, _r = null, jr = null, oo = /* @__PURE__ */ new Map(), so = /* @__PURE__ */ new Map(), Er = [], tS = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function db(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        zr = null;
        break;
      case "dragenter":
      case "dragleave":
        _r = null;
        break;
      case "mouseover":
      case "mouseout":
        jr = null;
        break;
      case "pointerover":
      case "pointerout":
        oo.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        so.delete(n.pointerId);
    }
  }
  function uo(e, n, r, l, u, d) {
    return e === null || e.nativeEvent !== d ? (e = {
      blockedOn: n,
      domEventName: r,
      eventSystemFlags: l,
      nativeEvent: d,
      targetContainers: [u]
    }, n !== null && (n = ka(n), n !== null && ub(n)), e) : (e.eventSystemFlags |= l, n = e.targetContainers, u !== null && n.indexOf(u) === -1 && n.push(u), e);
  }
  function nS(e, n, r, l, u) {
    switch (n) {
      case "focusin":
        return zr = uo(
          zr,
          e,
          n,
          r,
          l,
          u
        ), !0;
      case "dragenter":
        return _r = uo(
          _r,
          e,
          n,
          r,
          l,
          u
        ), !0;
      case "mouseover":
        return jr = uo(
          jr,
          e,
          n,
          r,
          l,
          u
        ), !0;
      case "pointerover":
        var d = u.pointerId;
        return oo.set(
          d,
          uo(
            oo.get(d) || null,
            e,
            n,
            r,
            l,
            u
          )
        ), !0;
      case "gotpointercapture":
        return d = u.pointerId, so.set(
          d,
          uo(
            so.get(d) || null,
            e,
            n,
            r,
            l,
            u
          )
        ), !0;
    }
    return !1;
  }
  function pb(e) {
    var n = Ir(e.target);
    if (n !== null) {
      var r = c(n);
      if (r !== null) {
        if (n = r.tag, n === 13) {
          if (n = f(r), n !== null) {
            e.blockedOn = n, ah(e.priority, function() {
              cb(r);
            });
            return;
          }
        } else if (n === 31) {
          if (n = p(r), n !== null) {
            e.blockedOn = n, ah(e.priority, function() {
              cb(r);
            });
            return;
          }
        } else if (n === 3 && r.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function tu(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var r = pd(e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var l = new r.constructor(
          r.type,
          r
        );
        Pu = l, r.target.dispatchEvent(l), Pu = null;
      } else
        return n = ka(r), n !== null && ub(n), e.blockedOn = r, !1;
      n.shift();
    }
    return !0;
  }
  function hb(e, n, r) {
    tu(e) && r.delete(n);
  }
  function iS() {
    md = !1, zr !== null && tu(zr) && (zr = null), _r !== null && tu(_r) && (_r = null), jr !== null && tu(jr) && (jr = null), oo.forEach(hb), so.forEach(hb);
  }
  function nu(e, n) {
    e.blockedOn === n && (e.blockedOn = null, md || (md = !0, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      iS
    )));
  }
  var iu = null;
  function mb(e) {
    iu !== e && (iu = e, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      function() {
        iu === e && (iu = null);
        for (var n = 0; n < e.length; n += 3) {
          var r = e[n], l = e[n + 1], u = e[n + 2];
          if (typeof l != "function") {
            if (hd(l || r) === null)
              continue;
            break;
          }
          var d = ka(r);
          d !== null && (e.splice(n, 3), n -= 3, Qc(
            d,
            {
              pending: !0,
              data: u,
              method: r.method,
              action: l
            },
            l,
            u
          ));
        }
      }
    ));
  }
  function ul(e) {
    function n(_) {
      return nu(_, e);
    }
    zr !== null && nu(zr, e), _r !== null && nu(_r, e), jr !== null && nu(jr, e), oo.forEach(n), so.forEach(n);
    for (var r = 0; r < Er.length; r++) {
      var l = Er[r];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Er.length && (r = Er[0], r.blockedOn === null); )
      pb(r), r.blockedOn === null && Er.shift();
    if (r = (e.ownerDocument || e).$$reactFormReplay, r != null)
      for (l = 0; l < r.length; l += 3) {
        var u = r[l], d = r[l + 1], y = u[hn] || null;
        if (typeof d == "function")
          y || mb(r);
        else if (y) {
          var k = null;
          if (d && d.hasAttribute("formAction")) {
            if (u = d, y = d[hn] || null)
              k = y.formAction;
            else if (hd(u) !== null) continue;
          } else k = y.action;
          typeof k == "function" ? r[l + 1] = k : (r.splice(l, 3), l -= 3), mb(r);
        }
      }
  }
  function gb() {
    function e(d) {
      d.canIntercept && d.info === "react-transition" && d.intercept({
        handler: function() {
          return new Promise(function(y) {
            return u = y;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function n() {
      u !== null && (u(), u = null), l || setTimeout(r, 20);
    }
    function r() {
      if (!l && !navigation.transition) {
        var d = navigation.currentEntry;
        d && d.url != null && navigation.navigate(d.url, {
          state: d.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = !1, u = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", n), navigation.addEventListener("navigateerror", n), setTimeout(r, 100), function() {
        l = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", n), navigation.removeEventListener("navigateerror", n), u !== null && (u(), u = null);
      };
    }
  }
  function gd(e) {
    this._internalRoot = e;
  }
  ru.prototype.render = gd.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(o(409));
    var r = n.current, l = On();
    ob(r, l, e, n, null, null);
  }, ru.prototype.unmount = gd.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      ob(e.current, 2, null, e, null, null), qs(), n[wa] = null;
    }
  };
  function ru(e) {
    this._internalRoot = e;
  }
  ru.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = rh();
      e = { blockedOn: null, target: e, priority: n };
      for (var r = 0; r < Er.length && n !== 0 && n < Er[r].priority; r++) ;
      Er.splice(r, 0, e), r === 0 && pb(e);
    }
  };
  var xb = i.version;
  if (xb !== "19.3.0")
    throw Error(
      o(
        527,
        xb,
        "19.3.0"
      )
    );
  we.findDOMNode = function(e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = g(n), e = e !== null ? b(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var rS = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: ce,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var au = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!au.isDisabled && au.supportsFiber)
      try {
        Oi = au.inject(
          rS
        ), Jt = au;
      } catch {
      }
  }
  return fo.createRoot = function(e, n) {
    if (!s(e)) throw Error(o(299));
    var r = !1, l = "", u = lg, d = og, y = sg;
    return n != null && (n.unstable_strictMode === !0 && (r = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (d = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError)), n = ab(
      e,
      1,
      !1,
      null,
      null,
      r,
      l,
      null,
      u,
      d,
      y,
      gb
    ), e[wa] = n.current, Gf(e), new gd(n);
  }, fo.hydrateRoot = function(e, n, r) {
    if (!s(e)) throw Error(o(299));
    var l = !1, u = "", d = lg, y = og, k = sg, _ = null;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onUncaughtError !== void 0 && (d = r.onUncaughtError), r.onCaughtError !== void 0 && (y = r.onCaughtError), r.onRecoverableError !== void 0 && (k = r.onRecoverableError), r.formState !== void 0 && (_ = r.formState)), n = ab(
      e,
      1,
      !0,
      n,
      r ?? null,
      l,
      u,
      _,
      d,
      y,
      k,
      gb
    ), n.context = lb(null), r = n.current, l = On(), l = Br(l), u = fr(l), u.callback = null, dr(r, u, l), r = l, n.current.lanes = r, pi(n, r), zi(n), e[wa] = n.current, Gf(e), new ru(n);
  }, fo.version = "19.3.0", fo;
}
var Eb;
function hS() {
  if (Eb) return yd.exports;
  Eb = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (i) {
        console.error(i);
      }
  }
  return t(), yd.exports = pS(), yd.exports;
}
var mS = hS();
const gS = (t) => t?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
function xS(t, i, a = []) {
  if (i == null)
    throw new Error("[lucide]: iconNode is required when icon name is used");
  return {
    name: gS(t),
    size: 24,
    node: i,
    ...a.length > 0 ? { aliases: a } : {}
  };
}
const bS = (t) => {
  let i = "", a = !1;
  for (const o of t) {
    if (o === "-" || o === "_" || o <= " ") {
      a = i.length > 0;
      continue;
    }
    i.length === 0 ? i += o.toLowerCase() : i += a ? o.toUpperCase() : o, a = !1;
  }
  return i;
};
const yS = (t) => {
  const i = bS(t);
  return i.charAt(0).toUpperCase() + i.slice(1);
};
const Xd = (...t) => t.filter((i, a, o) => !!i && i.trim() !== "" && o.indexOf(i) === a).join(" ").trim();
const oa = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Sd(t) {
  return t != null;
}
function vS(t, i = {}) {
  const a = i.attributeNames ?? {}, o = (w) => a[w] ?? w, s = t.size ?? t.width ?? oa.width, c = t.size ?? t.height ?? oa.height, f = t.aliases?.filter((w) => typeof w == "string" && w.trim() !== "").map((w) => `lucide-${w}`) ?? [], p = [...t.name ? [`lucide-${t.name}`] : [], ...f], m = i.className?.split(" ").filter(Boolean) ?? [], g = i.includeDefaultClasses === !1 ? Xd(...m) : Xd("lucide", ...p, ...m), b = i.absoluteStrokeWidth ? Number(i.strokeWidth ?? oa["stroke-width"]) * Number(t.size ?? t.width ?? oa.width) / Number(i.size ?? i.width ?? oa.width) : i.strokeWidth ?? oa["stroke-width"];
  return [
    "svg",
    {
      ...Object.entries(oa).reduce((w, [v, S]) => (w[o(v)] = S, w), {}),
      ..."color" in i && i.color && {
        [o("stroke")]: i.color
      },
      ..."size" in i && Sd(i.size) && {
        [o("width")]: i.size,
        [o("height")]: i.size
      },
      ..."width" in i && Sd(i.width) && {
        [o("width")]: i.width
      },
      ..."height" in i && Sd(i.height) && {
        [o("height")]: i.height
      },
      [o("stroke-width")]: b,
      ...g && {
        [o("class")]: g
      },
      [o("viewBox")]: `0 0 ${s} ${c}`,
      ...i.hasA11yProp === !1 ? {
        [o("aria-hidden")]: "true"
      } : {},
      ..."attributes" in i && i.attributes
    },
    t.node.map((w) => {
      const [v, S, j] = w, E = i.nonScalingStroke ? { [o("vector-effect")]: "non-scaling-stroke", ...S } : S;
      return j ? [v, E, j] : [v, E];
    })
  ];
}
function wS(t, i = {}) {
  return vS(t, {
    ...i,
    attributeNames: {
      ...i.attributeNames,
      class: "className",
      "stroke-width": "strokeWidth",
      "stroke-linecap": "strokeLinecap",
      "stroke-linejoin": "strokeLinejoin",
      "vector-effect": "vectorEffect"
    }
  });
}
const kS = (t) => {
  for (const i in t)
    if (i.startsWith("aria-") || i === "role" || i === "title")
      return !0;
  return !1;
}, SS = G.createContext({}), zS = () => G.useContext(SS), _S = G.forwardRef(
  ({
    color: t,
    size: i,
    width: a,
    height: o,
    strokeWidth: s,
    absoluteStrokeWidth: c,
    nonScalingStroke: f,
    className: p = "",
    children: m,
    iconNode: g = [],
    icon: b = {
      node: g,
      aliases: [],
      size: 24
    },
    ...x
  }, w) => {
    const {
      size: v = 24,
      strokeWidth: S = 2,
      absoluteStrokeWidth: j = !1,
      nonScalingStroke: E = !1,
      color: O = "currentColor",
      className: I = ""
    } = zS() ?? {}, L = !!m || kS(x), [V, J, T = []] = wS(b, {
      color: t ?? O,
      width: a ?? i ?? v,
      height: o ?? i ?? v,
      strokeWidth: s ?? S,
      absoluteStrokeWidth: c ?? j,
      nonScalingStroke: f ?? E,
      className: Xd(I, p),
      hasA11yProp: L,
      attributes: x
    });
    return G.createElement(
      V,
      {
        ref: w,
        ...J
      },
      [
        ...T.map(([X, pe]) => G.createElement(X, pe)),
        ...Array.isArray(m) ? m : [m]
      ]
    );
  }
);
function Se(t, i = [], a = []) {
  const o = typeof t == "string" ? xS(t, i, a) : t, s = G.forwardRef(
    ({ className: c, ...f }, p) => G.createElement(_S, {
      ref: p,
      icon: o,
      className: c,
      ...f
    })
  );
  return o.name && (s.displayName = yS(o.name)), s;
}
const rv = {
  name: "archive",
  size: 24,
  node: [
    ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
    ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
    ["path", { d: "M10 12h4", key: "a56b0p" }]
  ]
};
rv.node;
const Cb = Se(rv);
const av = {
  name: "arrow-down",
  size: 24,
  node: [
    ["path", { d: "M12 5v14", key: "s699le" }],
    ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
  ]
};
av.node;
const jS = Se(av);
const lv = {
  name: "arrow-left",
  size: 24,
  node: [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }]
  ]
};
lv.node;
const ES = Se(lv);
const ov = {
  name: "arrow-right",
  size: 24,
  node: [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
  ]
};
ov.node;
const CS = Se(ov);
const sv = {
  name: "arrow-up-right",
  size: 24,
  node: [
    ["path", { d: "M7 7h10v10", key: "1tivn9" }],
    ["path", { d: "M7 17 17 7", key: "1vkiza" }]
  ]
};
sv.node;
const Or = Se(sv);
const uv = {
  name: "arrow-up",
  size: 24,
  node: [
    ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
    ["path", { d: "M12 19V5", key: "x0mq9r" }]
  ]
};
uv.node;
const TS = Se(uv);
const cv = {
  name: "audio-lines",
  size: 24,
  node: [
    ["path", { d: "M2 10v3", key: "1fnikh" }],
    ["path", { d: "M6 6v11", key: "11sgs0" }],
    ["path", { d: "M10 3v18", key: "yhl04a" }],
    ["path", { d: "M14 8v7", key: "3a1oy3" }],
    ["path", { d: "M18 5v13", key: "123xd1" }],
    ["path", { d: "M22 10v3", key: "154ddg" }]
  ]
};
cv.node;
const NS = Se(cv);
const fv = {
  name: "book-open",
  size: 24,
  node: [
    ["path", { d: "M12 5v16", key: "1f6ucr" }],
    [
      "path",
      {
        d: "M20.001 19A2 2 0 0022 17V5a2 2 0 00-1.999-2L16 3.002A5 5 0 0012 5a5 5 0 00-4-2H4a2 2 0 00-2 2v12a2 2 0 001.999 2H8a5 5 0 014 2 5 5 0 014-2z",
        key: "1fyvmf"
      }
    ]
  ]
};
fv.node;
const dv = Se(fv);
const pv = {
  name: "check",
  size: 24,
  node: [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]
};
pv.node;
const Un = Se(pv);
const hv = {
  name: "chevron-down",
  size: 24,
  node: [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]
};
hv.node;
const bo = Se(hv);
const mv = {
  name: "chevron-right",
  size: 24,
  node: [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]
};
mv.node;
const Ci = Se(mv);
const gv = {
  name: "chevron-left",
  size: 24,
  node: [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]]
};
gv.node;
const AS = Se(gv);
const xv = {
  name: "circle-check",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m16 9-5.5 5.5L8 12", key: "xofnsj" }]
  ],
  aliases: ["check-circle-2"]
};
xv.node;
const OS = Se(xv);
const bv = {
  name: "circle-dot",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
  ]
};
bv.node;
const Tb = Se(bv);
const yv = {
  name: "circle-question-mark",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }]
  ],
  aliases: ["help-circle", "circle-help"]
};
yv.node;
const DS = Se(yv);
const vv = {
  name: "code-xml",
  size: 24,
  node: [
    ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
    ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
    ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
  ],
  aliases: ["code-2"]
};
vv.node;
const wv = Se(vv);
const kv = {
  name: "copy",
  size: 24,
  node: [
    ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
    ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
  ]
};
kv.node;
const MS = Se(kv);
const Sv = {
  name: "download",
  size: 24,
  node: [
    ["path", { d: "M12 15V3", key: "m9g1x1" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
  ]
};
Sv.node;
const RS = Se(Sv);
const zv = {
  name: "ellipsis",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
    ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
    ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
  ],
  aliases: ["more-horizontal"]
};
zv.node;
const US = Se(zv);
const _v = {
  name: "external-link",
  size: 24,
  node: [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
  ]
};
_v.node;
const Qd = Se(_v);
const jv = {
  name: "face-slightly-smiling",
  size: 24,
  node: [
    ["path", { d: "M15 10V9", key: "4dkmfx" }],
    ["path", { d: "M16.472 15a6 6 0 01-8.943 0", key: "7qomzy" }],
    ["path", { d: "M9 10V9", key: "1lazqi" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
  ],
  aliases: ["smile"]
};
jv.node;
const Ev = Se(jv);
const Cv = {
  name: "file-code-corner",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35",
        key: "1wthlu"
      }
    ],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
    ["path", { d: "m5 16-3 3 3 3", key: "331omg" }],
    ["path", { d: "m9 22 3-3-3-3", key: "lsp7cz" }]
  ],
  aliases: ["file-code-2"]
};
Cv.node;
const pa = Se(Cv);
const Tv = {
  name: "file-text",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        key: "1oefj6"
      }
    ],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }],
    ["path", { d: "M10 9H8", key: "b1mrlr" }],
    ["path", { d: "M16 13H8", key: "t4e002" }],
    ["path", { d: "M16 17H8", key: "z1uh3a" }]
  ]
};
Tv.node;
const Nv = Se(Tv);
const Av = {
  name: "file",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
        key: "1oefj6"
      }
    ],
    ["path", { d: "M14 2v5a1 1 0 0 0 1 1h5", key: "wfsgrz" }]
  ]
};
Av.node;
const LS = Se(Av);
const Ov = {
  name: "files",
  size: 24,
  node: [
    ["path", { d: "M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8", key: "14sh0y" }],
    [
      "path",
      {
        d: "M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z",
        key: "1970lx"
      }
    ],
    ["path", { d: "M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1", key: "l4dndm" }]
  ]
};
Ov.node;
const BS = Se(Ov);
const Dv = {
  name: "folder-open",
  size: 24,
  node: [
    [
      "path",
      {
        d: "m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",
        key: "usdka0"
      }
    ]
  ]
};
Dv.node;
const Dr = Se(Dv);
const Mv = {
  name: "folder-search",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1",
        key: "1bw5m7"
      }
    ],
    ["path", { d: "m21 21-1.9-1.9", key: "1g2n9r" }],
    ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }]
  ]
};
Mv.node;
const IS = Se(Mv);
const Rv = {
  name: "folder",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",
        key: "1kt360"
      }
    ]
  ]
};
Rv.node;
const Uv = Se(Rv);
const Lv = {
  name: "git-branch",
  size: 24,
  node: [
    ["path", { d: "M15 6a9 9 0 0 0-9 9V3", key: "1cii5b" }],
    ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
    ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }]
  ]
};
Lv.node;
const Bv = Se(Lv);
const Iv = {
  name: "image",
  size: 24,
  node: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
    ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
  ]
};
Iv.node;
const HS = Se(Iv);
const Hv = {
  name: "layers",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
        key: "zw3jo"
      }
    ],
    [
      "path",
      {
        d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
        key: "1wduqc"
      }
    ],
    [
      "path",
      {
        d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
        key: "kqbvx6"
      }
    ]
  ],
  aliases: ["layers-3"]
};
Hv.node;
const Zv = Se(Hv);
const qv = {
  name: "leaf",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M11 20a10 10 0 0010-10 25.9 25.9 0 00-1.04-7.281 1 1 0 00-1.755-.325C15.833 5.5 13 5.5 9.8 6.1A7 7 0 0011 20",
        key: "1wjnjv"
      }
    ],
    ["path", { d: "M2 21a5 5 0 012.911-4.544C7.613 15.212 8.351 15.24 11 13", key: "c1ejpn" }]
  ]
};
qv.node;
const $v = Se(qv);
const Vv = {
  name: "list-checks",
  size: 24,
  node: [
    ["path", { d: "M13 5h8", key: "a7qcls" }],
    ["path", { d: "M13 12h8", key: "h98zly" }],
    ["path", { d: "M13 19h8", key: "c3s6r1" }],
    ["path", { d: "m3 17 2 2 4-4", key: "1jhpwq" }],
    ["path", { d: "m3 7 2 2 4-4", key: "1obspn" }]
  ]
};
Vv.node;
const ZS = Se(Vv);
const Yv = {
  name: "loader-circle",
  size: 24,
  node: [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]],
  aliases: ["loader-2"]
};
Yv.node;
const dl = Se(Yv);
const Gv = {
  name: "message-square",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",
        key: "18887p"
      }
    ]
  ]
};
Gv.node;
const yo = Se(Gv);
const Fv = {
  name: "monitor",
  size: 24,
  node: [
    ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
    ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
    ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
  ]
};
Fv.node;
const qS = Se(Fv);
const Xv = {
  name: "moon",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",
        key: "kfwtm"
      }
    ]
  ]
};
Xv.node;
const Qv = Se(Xv);
const Pv = {
  name: "palette",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",
        key: "e79jfc"
      }
    ],
    ["circle", { cx: "13.5", cy: "6.5", r: ".5", fill: "currentColor", key: "1okk4w" }],
    ["circle", { cx: "17.5", cy: "10.5", r: ".5", fill: "currentColor", key: "f64h9f" }],
    ["circle", { cx: "6.5", cy: "12.5", r: ".5", fill: "currentColor", key: "qy21gx" }],
    ["circle", { cx: "8.5", cy: "7.5", r: ".5", fill: "currentColor", key: "fotxhn" }]
  ]
};
Pv.node;
const Sp = Se(Pv);
const Kv = {
  name: "panel-left-close",
  size: 24,
  node: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
    ["path", { d: "M9 3v18", key: "fh3hqa" }],
    ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }]
  ],
  aliases: ["sidebar-close"]
};
Kv.node;
const $S = Se(Kv);
const Jv = {
  name: "panel-left-open",
  size: 24,
  node: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
    ["path", { d: "M9 3v18", key: "fh3hqa" }],
    ["path", { d: "m14 9 3 3-3 3", key: "8010ee" }]
  ],
  aliases: ["sidebar-open"]
};
Jv.node;
const VS = Se(Jv);
const Wv = {
  name: "panel-right",
  size: 24,
  node: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
    ["path", { d: "M15 3v18", key: "14nvp0" }]
  ]
};
Wv.node;
const YS = Se(Wv);
const e1 = {
  name: "paperclip",
  size: 24,
  node: [
    [
      "path",
      {
        d: "m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551",
        key: "1miecu"
      }
    ]
  ]
};
e1.node;
const GS = Se(e1);
const t1 = {
  name: "pin",
  size: 24,
  node: [
    ["path", { d: "M12 17v5", key: "bb1du9" }],
    [
      "path",
      {
        d: "M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1z",
        key: "1nkz8b"
      }
    ]
  ]
};
t1.node;
const Nb = Se(t1);
const n1 = {
  name: "plus",
  size: 24,
  node: [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }]
  ]
};
n1.node;
const Co = Se(n1);
const i1 = {
  name: "refresh-cw",
  size: 24,
  node: [
    ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
    ["path", { d: "M8 16H3v5", key: "1cv678" }]
  ]
};
i1.node;
const r1 = Se(i1);
const a1 = {
  name: "search",
  size: 24,
  node: [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
  ]
};
a1.node;
const vu = Se(a1);
const l1 = {
  name: "settings-2",
  size: 24,
  node: [
    ["path", { d: "M14 17H5", key: "gfn3mx" }],
    ["path", { d: "M19 7h-9", key: "6i9tg" }],
    ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
    ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
  ]
};
l1.node;
const o1 = Se(l1);
const s1 = {
  name: "shield-check",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y"
      }
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
  ]
};
s1.node;
const FS = Se(s1);
const u1 = {
  name: "sparkles",
  size: 24,
  node: [
    [
      "path",
      {
        d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
        key: "1s2grr"
      }
    ],
    ["path", { d: "M20 2v4", key: "1rf3ol" }],
    ["path", { d: "M22 4h-4", key: "gwowj6" }],
    ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
  ],
  aliases: ["stars"]
};
u1.node;
const XS = Se(u1);
const c1 = {
  name: "square-pen",
  size: 24,
  node: [
    ["path", { d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7", key: "1m0v6g" }],
    [
      "path",
      {
        d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
        key: "ohrbg2"
      }
    ]
  ],
  aliases: ["pen-box", "edit", "pen-square"]
};
c1.node;
const QS = Se(c1);
const f1 = {
  name: "square",
  size: 24,
  node: [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]]
};
f1.node;
const PS = Se(f1);
const d1 = {
  name: "sun",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
    ["path", { d: "M12 2v2", key: "tus03m" }],
    ["path", { d: "M12 20v2", key: "1lh1kg" }],
    ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
    ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
    ["path", { d: "M2 12h2", key: "1t8f8n" }],
    ["path", { d: "M20 12h2", key: "1q8mjw" }],
    ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
    ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }]
  ]
};
d1.node;
const p1 = Se(d1);
const h1 = {
  name: "terminal",
  size: 24,
  node: [
    ["path", { d: "M12 19h8", key: "baeox8" }],
    ["path", { d: "m4 17 6-6-6-6", key: "1yngyt" }]
  ]
};
h1.node;
const wu = Se(h1);
const m1 = {
  name: "trash",
  size: 24,
  node: [
    ["path", { d: "M10 11v6", key: "nco0om" }],
    ["path", { d: "M14 11v6", key: "outv1u" }],
    ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
    ["path", { d: "M3 6h18", key: "d0wm0j" }],
    ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
  ],
  aliases: ["trash-2"]
};
m1.node;
const Ab = Se(m1);
const g1 = {
  name: "users",
  size: 24,
  node: [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
  ]
};
g1.node;
const KS = Se(g1);
const x1 = {
  name: "x",
  size: 24,
  node: [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ]
};
x1.node;
const ha = Se(x1);
function mu({
  label: t,
  value: i,
  options: a,
  onChange: o,
  disabled: s,
  icon: c,
  className: f = ""
}) {
  const p = G.useId(), m = G.useRef(null), g = G.useRef(null), [b, x] = G.useState(!1), [w, v] = G.useState(0), S = G.useRef({ text: "", at: 0 }), j = a.findIndex((L) => L.value === i), E = () => {
    if (!m.current || !g.current) return;
    const L = m.current.getBoundingClientRect(), V = g.current;
    V.style.minWidth = `${Math.max(L.width, 200)}px`, V.style.maxHeight = `${Math.min(420, Math.max(L.top, innerHeight - L.bottom) - 16)}px`;
    const J = innerHeight - L.bottom < V.offsetHeight + 12;
    V.style.top = `${Math.max(8, J ? L.top - V.offsetHeight - 8 : L.bottom + 8)}px`, V.style.left = `${Math.max(8, Math.min(L.left, innerWidth - V.offsetWidth - 8))}px`;
  }, O = (L = Math.max(0, j)) => {
    v(L), g.current?.showPopover(), x(!0), E();
  }, I = (L) => {
    a[L] && o(a[L].value), g.current?.hidePopover(), m.current?.focus();
  };
  return G.useEffect(() => {
    if (!b) return;
    E(), window.addEventListener("resize", E);
    const L = (V) => {
      g.current?.contains(V.target) || g.current?.hidePopover();
    };
    return window.addEventListener("scroll", L, !0), () => {
      window.removeEventListener("resize", E), window.removeEventListener("scroll", L, !0);
    };
  }, [b]), G.useEffect(() => {
    b && document.getElementById(`${p}-${w}`)?.scrollIntoView({ block: "nearest" });
  }, [w, b, p]), G.useEffect(() => {
    const L = (V) => {
      V.detail !== t || s || (m.current?.focus(), O());
    };
    return window.addEventListener("muse:select", L), () => window.removeEventListener("muse:select", L);
  }), /* @__PURE__ */ h.jsxs("div", { className: `muse-select ${f}`, children: [
    /* @__PURE__ */ h.jsxs(
      "button",
      {
        ref: m,
        type: "button",
        className: "select-control",
        role: "combobox",
        "aria-label": t,
        "aria-haspopup": "listbox",
        "aria-expanded": b,
        "aria-controls": p,
        "aria-activedescendant": b ? `${p}-${w}` : void 0,
        disabled: s,
        onClick: () => b ? g.current?.hidePopover() : O(),
        onKeyDown: (L) => {
          if (["ArrowDown", "ArrowUp", "Home", "End"].includes(L.key)) {
            L.preventDefault();
            const V = L.key === "Home" ? 0 : L.key === "End" ? a.length - 1 : Math.max(
              0,
              Math.min(a.length - 1, w + (L.key === "ArrowDown" ? 1 : -1))
            );
            b ? v(V) : O(L.key === "Home" || L.key === "End" ? V : Math.max(0, j));
          } else if (L.key === "Enter" || L.key === " ")
            L.preventDefault(), b ? I(w) : O();
          else if (L.key === "Escape" || L.key === "Tab")
            L.key === "Escape" && b && (L.preventDefault(), L.stopPropagation()), g.current?.hidePopover();
          else if (L.key.length === 1 && !L.metaKey && !L.ctrlKey && !L.altKey) {
            S.current = {
              text: (Date.now() - S.current.at < 700 ? S.current.text : "") + L.key.toLowerCase(),
              at: Date.now()
            };
            const V = a.findIndex(
              (J) => J.label.toLowerCase().startsWith(S.current.text)
            );
            V >= 0 && (b ? v(V) : O(V));
          }
        },
        children: [
          c,
          /* @__PURE__ */ h.jsx("span", { className: "select-value", children: a[j]?.label || i }),
          /* @__PURE__ */ h.jsx(bo, { size: 13, className: "select-chevron" })
        ]
      }
    ),
    /* @__PURE__ */ h.jsxs(
      "div",
      {
        id: p,
        ref: g,
        className: "select-popover",
        popover: "auto",
        role: "listbox",
        "aria-label": t,
        onToggle: (L) => x(L.newState === "open"),
        children: [
          /* @__PURE__ */ h.jsx("div", { className: "select-heading", children: t }),
          a.map((L, V) => /* @__PURE__ */ h.jsxs(
            "div",
            {
              id: `${p}-${V}`,
              role: "option",
              "aria-selected": L.value === i,
              className: `select-option ${V === w ? "highlighted" : ""}`,
              onPointerMove: () => v(V),
              onMouseDown: (J) => J.preventDefault(),
              onClick: () => I(V),
              children: [
                /* @__PURE__ */ h.jsx(
                  Un,
                  {
                    size: 15,
                    style: { visibility: L.value === i ? "visible" : "hidden" }
                  }
                ),
                /* @__PURE__ */ h.jsx("span", { children: L.label })
              ]
            },
            L.value
          ))
        ]
      }
    )
  ] });
}
function b1(t) {
  return t.kind === "reminderChild" || t.kind === "hookRun";
}
function JS(t) {
  return t.kind === "reminderChild" ? t.reminderAgentId ? `Reminder · ${t.reminderAgentId}` : "Background reminder" : t.kind === "hookRun" ? t.label || "CLI hook" : t.tool || t.label || t.kind.replace(/([A-Z])/g, " $1").replace(/^./, (i) => i.toUpperCase());
}
function WS(t) {
  const i = t.filter((a) => !a.retracted && a.status === "inProgress");
  return i.length > 0 && i.every(b1);
}
const Pd = [
  { name: "clear", description: "Start a new conversation; keep saved history" },
  { name: "new", description: "Start a new conversation" },
  { name: "model", description: "Choose a model, or /model <model-id>" },
  { name: "effort", description: "Choose reasoning effort, or /effort <level>" },
  { name: "compact", description: "Compact this conversation with Muse Code" },
  { name: "rename", description: "/rename <conversation name>" },
  { name: "stop", description: "Stop Muse’s active turn" },
  { name: "settings", description: "Open desktop settings" },
  { name: "help", description: "Open the guide and CLI compatibility information" }
];
function y1(t) {
  const i = /^\/([a-z-]+)(?:\s+([\s\S]*))?$/i.exec(t.trim());
  return i ? { name: i[1].toLowerCase(), argument: i[2]?.trim() || "" } : null;
}
function Kd(t) {
  const i = Object.values(t).filter((o) => typeof o == "number");
  return Object.entries(t).filter(([o, s]) => i.indexOf(+o) === -1).map(([o, s]) => s);
}
function Ob(t, i = "|") {
  return t.map((a) => _1(a)).join(i);
}
function Jd(t, i) {
  return typeof i == "bigint" ? i.toString() : i;
}
class ez {
  constructor(i) {
    this._getter = i, this._value = void 0;
  }
  get value() {
    const i = this._getter;
    return i !== void 0 && (this._value = i(), this._getter = void 0), this._value;
  }
}
function zp(t) {
  return new ez(t);
}
function tz(t) {
  return t == null;
}
function _p(t) {
  const i = t.startsWith("^") ? 1 : 0, a = t.endsWith("$") ? t.length - 1 : t.length;
  return t.slice(i, a);
}
function nz(t, i) {
  const a = t / i, o = Math.round(a), s = 4 * Number.EPSILON * Math.max(Math.abs(a), 1);
  return Math.abs(a - o) < s ? 0 : a - o;
}
function xa(t, i, a) {
  Object.defineProperty(t, i, {
    value: a,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function v1(t) {
  const i = Object.getOwnPropertyDescriptor(t, "shape");
  return i?.get ? i.get.raw : i?.value;
}
function Wi(t) {
  return v1(t._zod.def) ?? t._zod.def.shape;
}
function w1(t, i, a) {
  Object.defineProperty(t, i, {
    get() {
      const o = a();
      return xa(this, i, o), o;
    },
    enumerable: !0,
    configurable: !0
  });
}
function k1(t, i, a) {
  i in t ? xa(t, i, a) : t[i] = a;
}
function ma(t, i, a, o) {
  const s = Wi(i);
  for (const c of a) {
    const f = Object.getOwnPropertyDescriptor(s, c);
    f.enumerable && (f.get ? w1(t, c, () => {
      const p = i._zod.def.shape[c];
      return o ? o(p, c) : p;
    }) : k1(t, c, o ? o(f.value, c) : f.value));
  }
}
function iz(t, i) {
  for (const a of Reflect.ownKeys(i)) {
    const o = Object.getOwnPropertyDescriptor(i, a);
    o.enumerable && (o.get ? w1(t, a, () => i[a]) : k1(t, a, o.value));
  }
}
function Ln(...t) {
  const i = {};
  for (const a of t) {
    const o = Object.getOwnPropertyDescriptors(a);
    Object.assign(i, o);
  }
  return Object.defineProperties({}, i);
}
function rz(t) {
  return JSON.stringify(t);
}
function az(t) {
  return t.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const S1 = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {
};
function ku(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
const lz = /* @__PURE__ */ zp(() => {
  if (Ti.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const t = Function;
    return new t(""), !0;
  } catch {
    return !1;
  }
});
function To(t) {
  if (ku(t) === !1)
    return !1;
  const i = t.constructor;
  if (i === void 0 || typeof i != "function")
    return !0;
  const a = i.prototype;
  return !(ku(a) === !1 || Object.prototype.hasOwnProperty.call(a, "isPrototypeOf") === !1);
}
function z1(t) {
  return To(t) ? { ...t } : Array.isArray(t) ? [...t] : t instanceof Map ? new Map(t) : t instanceof Set ? new Set(t) : t;
}
const oz = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Mu(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Rr(t, i, a) {
  const o = new t._zod.constr(i ?? t._zod.def);
  return (!i || a?.parent) && (o._zod.parent = t), o;
}
function ze(t) {
  const i = t;
  if (!i)
    return {};
  if (typeof i == "string")
    return { error: () => i };
  if (i?.message !== void 0) {
    if (i?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    i.error = i.message;
  }
  return delete i.message, typeof i.error == "string" ? { ...i, error: () => i.error } : i;
}
function _1(t) {
  return typeof t == "bigint" ? t.toString() + "n" : typeof t == "string" ? `"${t}"` : `${t}`;
}
function sz(t) {
  return Object.keys(t).filter((i) => t[i]._zod.optin !== void 0 && t[i]._zod.optout === "optional");
}
const j1 = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}, uz = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function cz(t, i) {
  const a = t._zod.def, o = a.checks;
  if (o && o.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const c = {};
  return ma(c, t, Ru(t, i)), Rr(t, Ln(a, { shape: c, checks: [] }));
}
function Ru(t, i) {
  const a = Wi(t), o = [];
  for (const s of Reflect.ownKeys(i)) {
    if (!Object.getOwnPropertyDescriptor(a, s)?.enumerable)
      throw new Error(`Unrecognized key: "${String(s)}"`);
    i[s] && o.push(s);
  }
  return o;
}
function fz(t, i) {
  const a = t._zod.def, o = a.checks;
  if (o && o.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const c = new Set(Ru(t, i)), f = {};
  return ma(f, t, Reflect.ownKeys(Wi(t)).filter((p) => !c.has(p))), Rr(t, Ln(a, { shape: f, checks: [] }));
}
function dz(t, i) {
  if (!To(i))
    throw new Error("Invalid input to extend: expected a plain object");
  const a = t._zod.def.checks;
  if (a && a.length > 0) {
    const s = Wi(t);
    for (const c of Reflect.ownKeys(i))
      if (Object.getOwnPropertyDescriptor(s, c) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  return Rr(t, Ln(t._zod.def, { shape: E1(t, i) }));
}
function E1(t, i) {
  const a = {};
  return ma(a, t, Reflect.ownKeys(Wi(t))), iz(a, i), a;
}
function pz(t, i) {
  if (!To(i))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  return Rr(t, Ln(t._zod.def, { shape: E1(t, i) }));
}
function hz(t, i) {
  if (!i?._zod?.def)
    throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
  if (t._zod.def.checks?.length)
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  const a = {};
  ma(a, t, Reflect.ownKeys(Wi(t))), ma(a, i, Reflect.ownKeys(Wi(i)));
  const o = Ln(t._zod.def, {
    shape: a,
    get catchall() {
      return i._zod.def.catchall;
    },
    checks: i._zod.def.checks ?? []
  });
  return Rr(t, o);
}
function Db(t, i, a, o = "partial") {
  const c = i._zod.def.checks;
  if (c && c.length > 0)
    throw new Error(`.${o}() cannot be used on object schemas containing refinements`);
  const p = a ? new Set(Ru(i, a)) : void 0, m = {};
  return ma(m, i, Reflect.ownKeys(Wi(i)), t && ((g, b) => p && !p.has(b) ? g : new t({ type: "optional", innerType: g }))), Rr(i, Ln(i._zod.def, { shape: m, checks: [] }));
}
function mz(t, i, a) {
  const o = a ? new Set(Ru(i, a)) : void 0, s = {};
  return ma(s, i, Reflect.ownKeys(Wi(i)), (c, f) => (
    // overwrite with non-optional
    o && !o.has(f) ? c : new t({ type: "nonoptional", innerType: c })
  )), Rr(i, Ln(i._zod.def, { shape: s }));
}
function Ji(t, i = 0) {
  if (t.aborted === !0)
    return !0;
  for (let a = i; a < t.issues.length; a++)
    if (t.issues[a]?.continue !== !0)
      return !0;
  return !1;
}
function gz(t, i = 0) {
  if (t.aborted === !0)
    return !0;
  for (let a = i; a < t.issues.length; a++)
    if (t.issues[a]?.continue === !1)
      return !0;
  return !1;
}
function C1(t, i) {
  return i.map((a) => {
    var o;
    return (o = a).path ?? (o.path = []), a.path.unshift(t), a;
  });
}
function po(t) {
  return typeof t == "string" ? t : t?.message;
}
function Mb(t) {
  const i = [];
  for (const a of t ?? []) {
    const o = a._zod.def;
    if (!/_(length|size)$|_equals$/.test(o.check))
      break;
    const s = o.maximum ?? o.length ?? o.size;
    s >= 0 && i.push([s, a]);
  }
  return i;
}
function Wd(t, i, a) {
  var o;
  for (let s = i; s < t.length; s++)
    (o = t[s]).schema ?? (o.schema = a);
}
function ml(t, i, a) {
  var o;
  const s = t.inst?._zod?.traits;
  s?.has("$ZodType") && (s.has("$ZodCheck") ? (o = t).schema ?? (o.schema = t.inst) : t.schema = t.inst);
  const c = t.schema !== t.inst ? t.schema?._zod.def?.error : void 0, f = t.message ? t.message : po(t.inst?._zod.def?.error?.(t)) ?? po(c?.(t)) ?? po(i?.error?.(t)) ?? po(a.customError?.(t)) ?? po(a.localeError?.(t)) ?? "Invalid input", p = {};
  for (const m of Object.keys(t))
    m === "inst" || m === "schema" || m === "continue" || m === "input" || m === "__proto__" || (p[m] = t[m]);
  return p.path ?? (p.path = []), p.message = f, i?.reportInput && (p.input = t.input), p;
}
const xz = /[\uD800-\uDBFF]/;
function jp(t) {
  const i = t.length;
  if (!xz.test(t))
    return i;
  let a = i;
  for (let o = 0; o < i - 1; o++)
    (t.charCodeAt(o) & 64512) === 55296 && (t.charCodeAt(o + 1) & 64512) === 56320 && (a--, o++);
  return a;
}
function Ep(t) {
  return Array.isArray(t) ? "array" : typeof t == "string" ? "string" : "unknown";
}
function bz(t) {
  const i = typeof t;
  switch (i) {
    case "number":
      return Number.isNaN(t) ? "nan" : "number";
    case "object": {
      if (t === null)
        return "null";
      if (Array.isArray(t))
        return "array";
      const a = t;
      if (a && Object.getPrototypeOf(a) !== Object.prototype && "constructor" in a && a.constructor)
        return a.constructor.name;
    }
  }
  return i;
}
function No(...t) {
  const [i, a, o] = t;
  return typeof i == "string" ? {
    message: i,
    code: "custom",
    input: a,
    inst: o
  } : { ...i };
}
function yz(t, i) {
  for (const a in i) {
    const o = Object.getOwnPropertyDescriptor(i, a);
    o.get ? Object.defineProperty(t, a, { ...o, enumerable: !1 }) : vz(t, a, o.value);
  }
}
function Mr(t, i, a, o = !0) {
  return Object.defineProperty(t, i, { configurable: !0, writable: !0, enumerable: o, value: a }), a;
}
function T1(t, i, a) {
  return Mr(t, i, a, !1);
}
function N1(t, i) {
  for (const a in t) {
    const o = t[a];
    Object.defineProperty(i, a, {
      configurable: !0,
      enumerable: !0,
      get() {
        return Mr(this, a, o(this));
      },
      set(s) {
        Mr(this, a, s);
      }
    });
  }
  return i;
}
function vz(t, i, a) {
  Object.defineProperty(t, i, {
    configurable: !0,
    get() {
      return this == null ? a : Mr(this, i, a.bind(this));
    },
    set(o) {
      Mr(this, i, o);
    }
  });
}
function wz(t, i) {
  const a = Object.getPrototypeOf(t);
  return i in a ? void 0 : a;
}
let zd, Nr = !1;
const kz = {
  configurable: !0,
  get() {
    Nr = !0;
  }
};
function nt(t, i, a) {
  const o = Object.getPrototypeOf(t._zod);
  if (i in o && zd !== t._zod) {
    zd = void 0;
    return;
  }
  zd = t._zod, Object.defineProperty(o, i, {
    configurable: !0,
    get() {
      Object.defineProperty(this, i, kz);
      const s = Nr;
      Nr = !1;
      try {
        const c = a(this);
        return Nr ? delete this[i] : Object.defineProperty(this, i, { configurable: !0, writable: !0, value: c }), Nr = Nr || s, c;
      } catch (c) {
        throw delete this[i], Nr = Nr || s, c;
      }
    },
    set(s) {
      Object.defineProperty(this, i, { configurable: !0, writable: !0, value: s });
    }
  });
}
function Sz(t, i, a, o) {
  const s = wz(t, i);
  s && Object.defineProperty(s, i, {
    configurable: !0,
    get() {
      const c = { configurable: !0, writable: !0, enumerable: o, value: void 0 };
      return Object.defineProperty(this, i, c), c.value = a(this), Object.defineProperty(this, i, c), c.value;
    },
    set(c) {
      Object.defineProperty(this, i, { configurable: !0, writable: !0, enumerable: o, value: c });
    }
  });
}
const zz = "~constantCatch";
function _z(t) {
  const i = () => t;
  return i[zz] = !0, i;
}
var Rb;
const _d = { value: void 0, enumerable: !1 };
let Ub = "captureStackTrace" in Error ? Error : null;
function jz(t) {
  const i = Ub;
  if (i) {
    const a = i.stackTraceLimit;
    if (typeof a == "number") {
      try {
        i.stackTraceLimit = 0;
      } catch {
        return Ub = null, new t();
      }
      try {
        return new t();
      } finally {
        i.stackTraceLimit = a;
      }
    }
  }
  return new t();
}
function K(t, i, a, o) {
  const s = {};
  function c(w) {
    this.def = w, this.constr = x, this.traits = /* @__PURE__ */ new Set();
  }
  c.prototype = s;
  const f = a, p = f && /* @__PURE__ */ new WeakSet();
  function m(w, v) {
    if (w._zod) {
      if (w._zod.traits.has(t))
        return;
    } else {
      _d.value = new c(v);
      try {
        Object.defineProperty(w, "_zod", _d);
      } finally {
        _d.value = void 0;
      }
    }
    if (w._zod.traits.add(t), i(w, v), p) {
      const j = Object.getPrototypeOf(w), E = w._zod.constr.prototype;
      let O = j;
      for (; O && O !== E; )
        O = Object.getPrototypeOf(O);
      const I = O ?? j;
      p.has(I) || (p.add(I), yz(I, f));
    }
    const S = x.prototype;
    for (const j in S)
      Object.prototype.hasOwnProperty.call(S, j) && (j in w || (w[j] = S[j].bind(w)));
  }
  const g = o?.Parent ?? Object;
  class b extends g {
  }
  Object.defineProperty(b, "name", { value: t });
  function x(w) {
    const v = o?.Parent ? jz(b) : this;
    m(v, w);
    const S = v._zod.deferred;
    if (S) {
      for (const E of S)
        E();
      v._zod.deferred = void 0;
    }
    const j = globalThis.__zod_globalConfig?.postProcessor;
    return j && j(v), v;
  }
  return Object.defineProperty(x, "init", { value: m }), Object.defineProperty(x, Symbol.hasInstance, {
    value: (w) => o?.Parent && w instanceof o.Parent ? !0 : w?._zod?.traits?.has(t)
  }), Object.defineProperty(x, "name", { value: t }), x;
}
class fa extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class A1 extends Error {
  constructor(i) {
    super(`Encountered unidirectional transform during encode: ${i}`), this.name = "ZodEncodeError";
  }
}
(Rb = globalThis).__zod_globalConfig ?? (Rb.__zod_globalConfig = {});
const Ti = globalThis.__zod_globalConfig;
function Ur(t) {
  return t && Object.assign(Ti, t), Ti;
}
function Ez() {
  const t = this._zod;
  return t.message ?? (t.message = JSON.stringify(t.def, Jd, 2)), t.message;
}
function Cz(t) {
  this._zod.message = t;
}
const Tz = {
  get: Ez,
  set: Cz,
  enumerable: !0,
  configurable: !0
}, jd = { value: void 0, enumerable: !1 }, Lb = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]), Nz = (t, i) => {
  t.name = "$ZodError", jd.value = i, Object.defineProperty(t, "issues", jd), jd.value = void 0, Object.defineProperty(t, "message", Tz);
  const a = Object.getPrototypeOf(t);
  Lb.has(a) || (Lb.add(a), Object.defineProperty(a, "toString", {
    configurable: !0,
    enumerable: !1,
    get() {
      const o = () => this.message;
      return Object.defineProperty(this, "toString", { value: o, configurable: !0, writable: !0 }), o;
    },
    set(o) {
      Object.defineProperty(this, "toString", { value: o, configurable: !0, writable: !0 });
    }
  }));
}, Az = K("$ZodError", Nz);
function Oz(t, i, a) {
  return Object.prototype.hasOwnProperty.call(t, i) || (i === "__proto__" ? Object.defineProperty(t, i, { value: a(), writable: !0, enumerable: !0, configurable: !0 }) : t[i] = a()), t[i];
}
function Dz(t, i = (a) => a.message) {
  const a = {}, o = [];
  for (const s of t.issues)
    s.path.length > 0 ? Oz(a, s.path[0], () => []).push(i(s)) : o.push(i(s));
  return { formErrors: o, fieldErrors: a };
}
function Mz(t, i = (a) => a.message) {
  const a = { _errors: [] }, o = (s, c = []) => {
    for (const f of s.issues)
      if (f.code === "invalid_union" && f.errors.length)
        f.errors.map((p) => o({ issues: p }, [...c, ...f.path]));
      else if (f.code === "invalid_key")
        o({ issues: f.issues }, [...c, ...f.path]);
      else if (f.code === "invalid_element")
        o({ issues: f.issues }, [...c, ...f.path]);
      else {
        const p = [...c, ...f.path];
        if (p.length === 0)
          a._errors.push(i(f));
        else {
          let m = a, g = 0;
          for (; g < p.length; ) {
            const b = p[g], x = g === p.length - 1;
            if (b === "_errors") {
              x && m._errors.push(i(f)), g++;
              continue;
            }
            Object.prototype.hasOwnProperty.call(m, b) || Object.defineProperty(m, b, {
              value: { _errors: [] },
              enumerable: !0,
              writable: !0,
              configurable: !0
            });
            const w = m[b];
            x && w._errors.push(i(f)), m = w, g++;
          }
        }
      }
  };
  return o(t), a;
}
function Uu(t, i) {
  return { callee: i?.callee ?? t, Err: i?.Err };
}
const Cp = (t) => {
  const i = (a, o, s, c) => {
    const f = s ? { ...s, async: !1 } : { async: !1 }, p = a._zod.run({ value: o, issues: [] }, f);
    if (p instanceof Promise)
      throw new fa();
    if (p.issues.length) {
      const m = new (c?.Err ?? t)(p.issues.map((g) => ml(g, f, Ur())));
      throw S1(m, c?.callee ?? i), m;
    }
    return p.value;
  };
  return i;
}, Tp = (t) => {
  const i = async (a, o, s, c) => {
    const f = s ? { ...s, async: !0 } : { async: !0 };
    let p = a._zod.run({ value: o, issues: [] }, f);
    if (p instanceof Promise && (p = await p), p.issues.length) {
      const m = new (c?.Err ?? t)(p.issues.map((g) => ml(g, f, Ur())));
      throw S1(m, c?.callee ?? i), m;
    }
    return p.value;
  };
  return i;
}, Np = (t) => (i, a, o) => {
  const s = o ? { ...o, async: !1 } : { async: !1 }, c = i._zod.run({ value: a, issues: [] }, s);
  if (c instanceof Promise)
    throw new fa();
  return c.issues.length ? O1(t, c.issues, s) : { success: !0, data: c.value };
};
function O1(t, i, a) {
  let o;
  return {
    success: !1,
    get error() {
      return o || (o = new t(i.map((s) => ml(s, a, Ur()))), i = void 0, a = void 0), o;
    },
    set error(s) {
      o = s, i = void 0, a = void 0;
    }
  };
}
const Ap = (t) => async (i, a, o) => {
  const s = o ? { ...o, async: !0 } : { async: !0 };
  let c = i._zod.run({ value: a, issues: [] }, s);
  return c instanceof Promise && (c = await c), c.issues.length ? O1(t, c.issues, s) : { success: !0, data: c.value };
}, Rz = /* @__PURE__ */ Symbol.for("zod.compile.invalid"), Uz = /* @__PURE__ */ Symbol.for("zod.compile.fallback"), Lz = ((t, i, a) => {
  const o = t._zod.bag.validator;
  if (o !== void 0) {
    if (o(i) !== Rz)
      return !0;
    if (o.definite === !0 && a === void 0)
      return !1;
  }
  return Bz(t, i, a);
});
function Bz(t, i, a) {
  const o = a ? { ...a, async: !1, abortEarly: !0 } : { async: !1, abortEarly: !0 }, s = t._zod.bag.fallbackRun;
  let c;
  if (s ? (o[Uz] = !0, c = s({ value: i, issues: [] }, o)) : c = t._zod.run({ value: i, issues: [] }, o), c instanceof Promise)
    throw new fa();
  return c.issues.length === 0;
}
const Iz = async (t, i, a) => {
  const o = a ? { ...a, async: !0, abortEarly: !0 } : { async: !0, abortEarly: !0 };
  let s = t._zod.run({ value: i, issues: [] }, o);
  return s instanceof Promise && (s = await s), s.issues.length === 0;
}, Hz = (t) => {
  const i = Cp(t), a = (o, s, c, f) => {
    const p = c ? { ...c, direction: "backward" } : { direction: "backward" };
    return i(o, s, p, Uu(a, f));
  };
  return a;
}, Zz = (t) => {
  const i = Cp(t), a = (o, s, c, f) => i(o, s, c, Uu(a, f));
  return a;
}, qz = (t) => {
  const i = Tp(t), a = async (o, s, c, f) => {
    const p = c ? { ...c, direction: "backward" } : { direction: "backward" };
    return await i(o, s, p, Uu(a, f));
  };
  return a;
}, $z = (t) => {
  const i = Tp(t), a = async (o, s, c, f) => await i(o, s, c, Uu(a, f));
  return a;
}, Vz = (t) => (i, a, o) => {
  const s = o ? { ...o, direction: "backward" } : { direction: "backward" };
  return Np(t)(i, a, s);
}, Yz = (t) => (i, a, o) => Np(t)(i, a, o), Gz = (t) => async (i, a, o) => {
  const s = o ? { ...o, direction: "backward" } : { direction: "backward" };
  return Ap(t)(i, a, s);
}, Fz = (t) => async (i, a, o) => Ap(t)(i, a, o), Xz = /^[cC][0-9a-z]{6,}$/, Qz = /^[0-9a-z]+$/, Pz = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, Kz = /^[0-9a-vA-V]{20}$/, Jz = /^[A-Za-z0-9]{27}$/, Wz = /^[a-zA-Z0-9_-]{21}$/;
function e_(t) {
  return new RegExp(`^[a-zA-Z0-9_-]{${t}}$`);
}
const t_ = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, n_ = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Bb = (t) => t ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, i_ = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, r_ = "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";
function a_() {
  return new RegExp(r_, "u");
}
const l_ = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, o_ = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, s_ = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, u_ = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, c_ = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, f_ = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/, d_ = /^https?$/, p_ = /^\+[1-9]\d{6,14}$/, D1 = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
function h_(t) {
  return new RegExp(`^${t}$`);
}
const m_ = /* @__PURE__ */ h_(D1);
function ep(t) {
  const i = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof t.precision == "number" ? t.precision === -1 ? `${i}` : t.precision === 0 ? `${i}:[0-5]\\d` : `${i}:[0-5]\\d\\.\\d{${t.precision}}` : t.seconds ? `${i}:[0-5]\\d(?:\\.\\d+)?` : `${i}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function g_(t) {
  return new RegExp(`^${ep(t)}$`);
}
function x_(t) {
  const i = ["Z"];
  t.offset && i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const a = `${ep({ precision: t.precision, seconds: !0 })}(?:${i.join("|")})`, o = t.local ? `${a}|${ep({ precision: t.precision })}` : a;
  return new RegExp(`^${D1}T(?:${o})$`);
}
const b_ = /^[\s\S]{0,}$/, y_ = /^-?\d+(?:\.\d+)?$/, v_ = /^(?:true|false)$/i, w_ = /^[^A-Z]*$/, k_ = /^[^a-z]*$/, wn = /* @__PURE__ */ K("$ZodCheck", (t, i) => {
  var a;
  t._zod ?? (t._zod = {}), t._zod.def = i, (a = t._zod).onattach ?? (a.onattach = []);
}), Op = (t) => {
  const i = t.value;
  return !tz(i) && i.length !== void 0;
}, Su = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, M1 = /* @__PURE__ */ K("$ZodCheckLessThan", (t, i) => {
  wn.init(t, i);
  const a = Su[typeof i.value];
  t._zod.check = (o) => {
    (i.inclusive ? o.value <= i.value : o.value < i.value) || o.issues.push({
      origin: Su[typeof o.value] ?? a,
      code: "too_big",
      maximum: typeof i.value == "object" ? i.value.getTime() : i.value,
      input: o.value,
      inclusive: i.inclusive,
      inst: t,
      continue: !i.abort
    });
  };
}), R1 = /* @__PURE__ */ K("$ZodCheckGreaterThan", (t, i) => {
  wn.init(t, i);
  const a = Su[typeof i.value];
  t._zod.check = (o) => {
    (i.inclusive ? o.value >= i.value : o.value > i.value) || o.issues.push({
      origin: Su[typeof o.value] ?? a,
      code: "too_small",
      minimum: typeof i.value == "object" ? i.value.getTime() : i.value,
      input: o.value,
      inclusive: i.inclusive,
      inst: t,
      continue: !i.abort
    });
  };
}), S_ = /* @__PURE__ */ K("$ZodCheckMultipleOf", (t, i) => {
  wn.init(t, i), t._zod.check = (a) => {
    if (typeof a.value != typeof i.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof a.value == "bigint" ? (
      // `value % 0n` throws, and nothing is a multiple of zero — the number branch already fails this way via NaN
      i.value !== BigInt(0) && a.value % i.value === BigInt(0)
    ) : nz(a.value, i.value) === 0) || a.issues.push({
      origin: typeof a.value,
      code: "not_multiple_of",
      divisor: i.value,
      input: a.value,
      inst: t,
      continue: !i.abort
    });
  };
}), z_ = /* @__PURE__ */ K("$ZodCheckNumberFormat", (t, i) => {
  wn.init(t, i), i.format = i.format || "float64";
  const a = i.format?.includes("int"), o = a ? "int" : "number", [s, c] = j1[i.format];
  t._zod.check = (f) => {
    const p = f.value;
    if (a) {
      if (!Number.isInteger(p)) {
        f.issues.push({
          expected: o,
          format: i.format,
          code: "invalid_type",
          continue: !1,
          input: p,
          inst: t
        });
        return;
      }
      if (!Number.isSafeInteger(p)) {
        p > 0 ? f.issues.push({
          input: p,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: t,
          origin: o,
          inclusive: !0,
          continue: !i.abort
        }) : f.issues.push({
          input: p,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: t,
          origin: o,
          inclusive: !0,
          continue: !i.abort
        });
        return;
      }
    }
    p < s && f.issues.push({
      origin: "number",
      input: p,
      code: "too_small",
      minimum: s,
      inclusive: !0,
      inst: t,
      continue: !i.abort
    }), p > c && f.issues.push({
      origin: "number",
      input: p,
      code: "too_big",
      maximum: c,
      inclusive: !0,
      inst: t,
      continue: !i.abort
    });
  };
}), __ = /* @__PURE__ */ K("$ZodCheckMaxLength", (t, i) => {
  var a;
  wn.init(t, i), (a = t._zod.def).when ?? (a.when = Op), t._zod.check = (o) => {
    const s = o.value, c = s.length;
    if ((typeof s == "string" && c > i.maximum ? jp(s) : c) <= i.maximum)
      return;
    const p = Ep(s);
    o.issues.push({
      origin: p,
      code: "too_big",
      maximum: i.maximum,
      inclusive: !0,
      input: s,
      inst: t,
      continue: !i.abort
    });
  };
}), j_ = /* @__PURE__ */ K("$ZodCheckMinLength", (t, i) => {
  var a;
  wn.init(t, i), (a = t._zod.def).when ?? (a.when = Op), t._zod.check = (o) => {
    const s = o.value, c = s.length;
    if ((typeof s == "string" && c >= i.minimum && c < i.minimum * 2 ? jp(s) : c) >= i.minimum)
      return;
    const p = Ep(s);
    o.issues.push({
      origin: p,
      code: "too_small",
      minimum: i.minimum,
      inclusive: !0,
      input: s,
      inst: t,
      continue: !i.abort
    });
  };
}), E_ = /* @__PURE__ */ K("$ZodCheckLengthEquals", (t, i) => {
  var a;
  wn.init(t, i), (a = t._zod.def).when ?? (a.when = Op), t._zod.check = (o) => {
    const s = o.value, c = s.length, f = typeof s == "string" && c >= i.length && c <= i.length * 2 ? jp(s) : c;
    if (f === i.length)
      return;
    const p = Ep(s), m = f > i.length;
    o.issues.push({
      origin: p,
      ...m ? { code: "too_big", maximum: i.length } : { code: "too_small", minimum: i.length },
      inclusive: !0,
      exact: !0,
      input: o.value,
      inst: t,
      continue: !i.abort
    });
  };
}), Lu = /* @__PURE__ */ K("$ZodCheckStringFormat", (t, i) => {
  var a, o;
  wn.init(t, i), i.pattern ? (a = t._zod).check ?? (a.check = (s) => {
    i.pattern.lastIndex = 0, !i.pattern.test(s.value) && s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: i.format,
      input: s.value,
      ...i.pattern ? { pattern: i.pattern.toString() } : {},
      inst: t,
      continue: !i.abort
    });
  }) : (o = t._zod).check ?? (o.check = () => {
  });
}), C_ = /* @__PURE__ */ K("$ZodCheckRegex", (t, i) => {
  Lu.init(t, i), t._zod.check = (a) => {
    i.pattern.lastIndex = 0, !i.pattern.test(a.value) && a.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: a.value,
      pattern: i.pattern.toString(),
      inst: t,
      continue: !i.abort
    });
  };
}), T_ = /* @__PURE__ */ K("$ZodCheckLowerCase", (t, i) => {
  i.pattern ?? (i.pattern = w_), Lu.init(t, i);
}), N_ = /* @__PURE__ */ K("$ZodCheckUpperCase", (t, i) => {
  i.pattern ?? (i.pattern = k_), Lu.init(t, i);
}), A_ = /* @__PURE__ */ K("$ZodCheckIncludes", (t, i) => {
  wn.init(t, i);
  const a = Mu(i.includes), o = new RegExp(typeof i.position == "number" ? `^.{${i.position},}${a}` : a);
  i.pattern = o, t._zod.check = (s) => {
    s.value.includes(i.includes, i.position) || s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: i.includes,
      input: s.value,
      inst: t,
      continue: !i.abort
    });
  };
}), O_ = /* @__PURE__ */ K("$ZodCheckStartsWith", (t, i) => {
  wn.init(t, i);
  const a = new RegExp(`^${Mu(i.prefix)}.*`);
  i.pattern ?? (i.pattern = a), t._zod.check = (o) => {
    o.value.startsWith(i.prefix) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: i.prefix,
      input: o.value,
      inst: t,
      continue: !i.abort
    });
  };
}), D_ = /* @__PURE__ */ K("$ZodCheckEndsWith", (t, i) => {
  wn.init(t, i);
  const a = new RegExp(`.*${Mu(i.suffix)}$`);
  i.pattern ?? (i.pattern = a), t._zod.check = (o) => {
    o.value.endsWith(i.suffix) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: i.suffix,
      input: o.value,
      inst: t,
      continue: !i.abort
    });
  };
}), M_ = /* @__PURE__ */ K("$ZodCheckOverwrite", (t, i) => {
  wn.init(t, i), t._zod.check = (a) => {
    a.value = i.tx(a.value);
  };
});
class R_ {
  constructor(i = [], a = {}) {
    this.content = [], this.indent = 0, this.args = i, this.closed = a;
  }
  // the compiler catches a child's throw and keeps writing into this doc, so the indent has to unwind with it
  indented(i) {
    this.indent += 1;
    try {
      i(this);
    } finally {
      this.indent -= 1;
    }
  }
  write(i) {
    if (typeof i == "function") {
      i(this, { execution: "sync" }), i(this, { execution: "async" });
      return;
    }
    const o = i.split(`
`).filter((f) => f), s = Math.min(...o.map((f) => f.length - f.trimStart().length)), c = o.map((f) => f.slice(s)).map((f) => " ".repeat(this.indent * 2) + f);
    for (const f of c)
      this.content.push(f);
  }
  compile() {
    const i = Function, a = this?.content ?? [""];
    return new i(...Object.keys(this.closed), `return function (${this.args.join(", ")}) {
${a.join(`
`)}
};`)(...Object.values(this.closed));
  }
}
const U_ = {
  major: 4,
  minor: 6,
  patch: 7
}, wt = /* @__PURE__ */ K("$ZodType", (t, i) => {
  var a;
  t ?? (t = {}), t._zod.def = i, t._zod.bag = t._zod.bag || {}, t._zod.version = U_;
  const o = t._zod.def.checks, s = t._zod.traits.has("$ZodCheck") ? [t, ...o ?? []] : o?.length ? [...o] : [];
  for (const c of s)
    for (const f of c._zod.onattach)
      f(t);
  if (s.length === 0)
    (a = t._zod).deferred ?? (a.deferred = []), t._zod.deferred?.push(() => {
      t._zod.run = t._zod.parse;
    });
  else {
    const c = (p, m, g) => {
      if (p.memo)
        return p;
      let b = Ji(p), x;
      for (const w of m) {
        if (w._zod.def.when) {
          if (gz(p) || !w._zod.def.when(p))
            continue;
        } else if (b)
          continue;
        const v = p.issues.length, S = w._zod.check(p);
        if (S instanceof Promise && g?.async === !1)
          throw new fa();
        if (x || S instanceof Promise)
          x = (x ?? Promise.resolve()).then(async () => {
            await S, p.issues.length !== v && (Wd(p.issues, v, t), b || (b = Ji(p, v)));
          });
        else {
          if (p.issues.length === v)
            continue;
          Wd(p.issues, v, t), b || (b = Ji(p, v));
        }
      }
      return x ? x.then(() => p) : p;
    }, f = (p, m, g) => {
      if (Ji(p))
        return p.aborted = !0, p;
      const b = c(m, s, g);
      if (b instanceof Promise) {
        if (g.async === !1)
          throw new fa();
        return b.then((x) => t._zod.parse(x, g));
      }
      return t._zod.parse(b, g);
    };
    t._zod.run = (p, m) => {
      if (m.skipChecks)
        return t._zod.parse(p, m);
      if (m.direction === "backward") {
        const b = t._zod.parse({ value: p.value, issues: [] }, { ...m, skipChecks: !0 });
        return b instanceof Promise ? b.then((x) => f(x, p, m)) : f(b, p, m);
      }
      const g = t._zod.parse(p, m);
      if (g instanceof Promise) {
        if (m.async === !1)
          throw new fa();
        return g.then((b) => c(b, s, m));
      }
      return c(g, s, m);
    };
  }
}, {
  // Wrappers extend this by installing a richer factory over it; reading it eagerly would defeat the laziness.
  get "~standard"() {
    return T1(this, "~standard", L1(this));
  },
  set "~standard"(t) {
    Mr(this, "~standard", t);
  }
}), U1 = (t, i) => t.issues.length ? { issues: t.issues.map((a) => ml(a, i, Ur())) } : { value: t.value };
async function L_(t, i) {
  const a = { async: !0 };
  return U1(await t._zod.run({ value: i, issues: [] }, a), a);
}
function L1(t) {
  return {
    validate: (i) => {
      const a = { async: !1 };
      try {
        const o = t._zod.run({ value: i, issues: [] }, a);
        if (!(o instanceof Promise))
          return U1(o, a);
      } catch {
      }
      return L_(t, i);
    },
    vendor: "zod",
    version: 1
  };
}
const Dp = /* @__PURE__ */ K("$ZodString", (t, i) => {
  wt.init(t, i), t._zod.pattern = i.pattern ?? b_, t._zod.parse = (a, o) => {
    if (i.coerce)
      try {
        a.value = String(a.value);
      } catch {
      }
    return typeof a.value == "string" || a.issues.push({
      expected: "string",
      code: "invalid_type",
      input: a.value,
      inst: t
    }), a;
  };
}), ft = /* @__PURE__ */ K("$ZodStringFormat", (t, i) => {
  Lu.init(t, i), Dp.init(t, i);
}), B_ = /* @__PURE__ */ K("$ZodGUID", (t, i) => {
  i.pattern ?? (i.pattern = n_), ft.init(t, i);
}), I_ = /* @__PURE__ */ K("$ZodUUID", (t, i) => {
  if (i.version) {
    const o = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[i.version];
    if (o === void 0)
      throw new Error(`Invalid UUID version: "${i.version}"`);
    i.pattern ?? (i.pattern = Bb(o));
  } else
    i.pattern ?? (i.pattern = Bb());
  ft.init(t, i);
}), H_ = /* @__PURE__ */ K("$ZodEmail", (t, i) => {
  i.pattern ?? (i.pattern = i_), ft.init(t, i);
}), B1 = 1, zu = 2;
function I1(t) {
  try {
    return typeof URL < "u" && typeof URL.canParse == "function" ? URL.canParse(t) : (new URL(t), !0);
  } catch {
    return !1;
  }
}
function Z_(t, i) {
  return !("normalize" in i) && !("hostname" in i) && !("protocol" in i) ? I1(t) || zu : q_(t, i);
}
function q_(t, i) {
  if (!i.normalize && i.protocol?.source === d_.source && !/^https?:\/\//i.test(t))
    return B1;
  try {
    if (typeof URL < "u") {
      const a = URL;
      if (typeof a.parse == "function")
        return a.parse(t) ?? zu;
    }
    return new URL(t);
  } catch {
    return zu;
  }
}
const $_ = /[\t\n\r]/g;
function Ib(t) {
  return t.replace($_, "");
}
function V_(t, i) {
  return i.lastIndex = 0, i.test(t.hostname);
}
function Y_(t, i) {
  return i.lastIndex = 0, i.test(t.protocol.endsWith(":") ? t.protocol.slice(0, -1) : t.protocol);
}
const G_ = /* @__PURE__ */ K("$ZodURL", (t, i) => {
  ft.init(t, i), t._zod.check = (a) => {
    try {
      const o = a.value.trim(), s = Z_(o, i);
      if (s === B1) {
        a.issues.push({
          code: "invalid_format",
          format: "url",
          note: "Invalid URL format",
          input: a.value,
          inst: t,
          continue: !i.abort
        });
        return;
      }
      if (s === zu) {
        a.issues.push({
          code: "invalid_format",
          format: "url",
          input: a.value,
          inst: t,
          continue: !i.abort
        });
        return;
      }
      if (s === !0) {
        a.value = Ib(o);
        return;
      }
      i.hostname && !V_(s, i.hostname) && a.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: i.hostname.source,
        input: a.value,
        inst: t,
        continue: !i.abort
      }), i.protocol && !Y_(s, i.protocol) && a.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: i.protocol.source,
        input: a.value,
        inst: t,
        continue: !i.abort
      }), a.value = i.normalize ? s.href : Ib(o);
      return;
    } catch {
      a.issues.push({
        code: "invalid_format",
        format: "url",
        input: a.value,
        inst: t,
        continue: !i.abort
      });
    }
  };
}), F_ = /* @__PURE__ */ K("$ZodEmoji", (t, i) => {
  i.pattern ?? (i.pattern = a_()), ft.init(t, i);
}), X_ = /* @__PURE__ */ K("$ZodNanoID", (t, i) => {
  if (i.length !== void 0 && (!Number.isInteger(i.length) || i.length < 1))
    throw new Error(`Invalid nanoid length: ${i.length}`);
  i.pattern ?? (i.pattern = i.length === void 0 ? Wz : e_(i.length)), ft.init(t, i);
}), Q_ = /* @__PURE__ */ K("$ZodCUID", (t, i) => {
  i.pattern ?? (i.pattern = Xz), ft.init(t, i);
}), P_ = /* @__PURE__ */ K("$ZodCUID2", (t, i) => {
  i.pattern ?? (i.pattern = Qz), ft.init(t, i);
}), K_ = /* @__PURE__ */ K("$ZodULID", (t, i) => {
  i.pattern ?? (i.pattern = Pz), ft.init(t, i);
}), J_ = /* @__PURE__ */ K("$ZodXID", (t, i) => {
  i.pattern ?? (i.pattern = Kz), ft.init(t, i);
}), W_ = /* @__PURE__ */ K("$ZodKSUID", (t, i) => {
  i.pattern ?? (i.pattern = Jz), ft.init(t, i);
}), e4 = /* @__PURE__ */ K("$ZodISODateTime", (t, i) => {
  i.pattern ?? (i.pattern = x_(i)), ft.init(t, i);
}), t4 = /* @__PURE__ */ K("$ZodISODate", (t, i) => {
  i.pattern ?? (i.pattern = m_), ft.init(t, i);
}), n4 = /* @__PURE__ */ K("$ZodISOTime", (t, i) => {
  i.pattern ?? (i.pattern = g_(i)), ft.init(t, i);
}), i4 = /* @__PURE__ */ K("$ZodISODuration", (t, i) => {
  i.pattern ?? (i.pattern = t_), ft.init(t, i);
}), r4 = /* @__PURE__ */ K("$ZodIPv4", (t, i) => {
  i.pattern ?? (i.pattern = l_), ft.init(t, i);
}), a4 = /^[0-9a-fA-F:.]+$/;
function H1(t) {
  return a4.test(t) ? I1(`http://[${t}]`) : !1;
}
const l4 = /* @__PURE__ */ K("$ZodIPv6", (t, i) => {
  i.pattern ?? (i.pattern = o_), ft.init(t, i), t._zod.check = (a) => {
    H1(a.value) || a.issues.push({
      code: "invalid_format",
      format: "ipv6",
      input: a.value,
      inst: t,
      continue: !i.abort
    });
  };
}), o4 = /* @__PURE__ */ K("$ZodCIDRv4", (t, i) => {
  i.pattern ?? (i.pattern = s_), ft.init(t, i);
});
function s4(t) {
  const i = t.split("/");
  if (i.length !== 2)
    return !1;
  const [a, o] = i;
  if (!o)
    return !1;
  const s = Number(o);
  return `${s}` !== o || s < 0 || s > 128 ? !1 : H1(a);
}
const u4 = /* @__PURE__ */ K("$ZodCIDRv6", (t, i) => {
  i.pattern ?? (i.pattern = u_), ft.init(t, i), t._zod.check = (a) => {
    s4(a.value) || a.issues.push({
      code: "invalid_format",
      format: "cidrv6",
      input: a.value,
      inst: t,
      continue: !i.abort
    });
  };
});
function Z1(t) {
  if (t === "")
    return !0;
  if (/\s/.test(t) || t.length % 4 !== 0)
    return !1;
  try {
    return atob(t), !0;
  } catch {
    return !1;
  }
}
const q1 = /^[0-9a-zA-Z+/]*={0,2}$/, c4 = /* @__PURE__ */ K("$ZodBase64", (t, i) => {
  i.pattern ?? (i.pattern = q1), ft.init(t, i), t._zod.check = (a) => {
    Z1(a.value) || a.issues.push({
      code: "invalid_format",
      format: "base64",
      input: a.value,
      inst: t,
      continue: !i.abort
    });
  };
}), Mp = /^[A-Za-z0-9_-]*$/;
function f4(t) {
  if (!Mp.test(t))
    return !1;
  const i = t.replace(/[-_]/g, (o) => o === "-" ? "+" : "/"), a = i.padEnd(Math.ceil(i.length / 4) * 4, "=");
  return Z1(a);
}
const d4 = /* @__PURE__ */ K("$ZodBase64URL", (t, i) => {
  i.pattern ?? (i.pattern = Mp), ft.init(t, i), t._zod.check = (a) => {
    f4(a.value) || a.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: a.value,
      inst: t,
      continue: !i.abort
    });
  };
}), p4 = /* @__PURE__ */ K("$ZodE164", (t, i) => {
  i.pattern ?? (i.pattern = p_), ft.init(t, i);
});
function h4(t, i = null) {
  try {
    const a = t.split(".");
    if (a.length !== 3)
      return !1;
    const [o] = a;
    if (!o)
      return !1;
    const s = JSON.parse(atob(o));
    return !("typ" in s && s?.typ !== "JWT" || !s.alg || i && (!("alg" in s) || s.alg !== i));
  } catch {
    return !1;
  }
}
const m4 = /* @__PURE__ */ K("$ZodJWT", (t, i) => {
  ft.init(t, i), t._zod.check = (a) => {
    h4(a.value, i.alg) || a.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: a.value,
      inst: t,
      continue: !i.abort
    });
  };
}), $1 = /* @__PURE__ */ K("$ZodNumber", (t, i) => {
  wt.init(t, i), t._zod.pattern = y_, t._zod.parse = (a, o) => {
    if (i.coerce)
      try {
        a.value = Number(a.value);
      } catch {
      }
    const s = a.value;
    if (typeof s == "number" && !Number.isNaN(s) && Number.isFinite(s))
      return a;
    const c = typeof s == "number" ? Number.isNaN(s) ? "NaN" : Number.isFinite(s) ? void 0 : String(s) : void 0;
    return a.issues.push({
      expected: "number",
      code: "invalid_type",
      input: s,
      inst: t,
      ...c ? { received: c } : {}
    }), a;
  };
}), g4 = /* @__PURE__ */ K("$ZodNumberFormat", (t, i) => {
  z_.init(t, i), $1.init(t, i);
}), x4 = /* @__PURE__ */ K("$ZodBoolean", (t, i) => {
  wt.init(t, i), t._zod.pattern = v_, t._zod.parse = (a, o) => {
    if (i.coerce)
      try {
        a.value = !!a.value;
      } catch {
      }
    const s = a.value;
    return typeof s == "boolean" || a.issues.push({
      expected: "boolean",
      code: "invalid_type",
      input: s,
      inst: t
    }), a;
  };
}), b4 = /* @__PURE__ */ K("$ZodUnknown", (t, i) => {
  wt.init(t, i), t._zod.parse = (a) => a;
}), y4 = /* @__PURE__ */ K("$ZodNever", (t, i) => {
  wt.init(t, i), t._zod.parse = (a, o) => (a.issues.push({
    expected: "never",
    code: "invalid_type",
    input: a.value,
    inst: t
  }), a);
});
function v4(t, i) {
  const a = Mb(t._zod.def.checks);
  if (!a.length)
    return;
  const o = Math.min(...a.map((c) => c[0])), s = t._zod.parse;
  t._zod.parse = (c, f) => {
    const p = i(c.value);
    if (p > o && !f?.skipChecks && f?.direction !== "backward") {
      for (const [m, g] of Mb(t._zod.def.checks))
        if (p > m && g._zod.def.when(c)) {
          const b = c.issues.length;
          return g._zod.check(c), c.issues[b].continue = !1, Wd(c.issues, b, t), c;
        }
    }
    return s(c, f);
  };
}
const w4 = (t) => Array.isArray(t) ? t.length : -1;
function Hb(t, i, a) {
  t.issues.length && i.issues.push(...C1(a, t.issues)), i.value[a] = t.value;
}
const k4 = /* @__PURE__ */ K("$ZodArray", (t, i) => {
  wt.init(t, i);
  const a = Ti.memoizer;
  a?.attach(t), t._zod.parse = (o, s) => {
    const c = o.value;
    if (!Array.isArray(c))
      return o.issues.push({
        expected: "array",
        code: "invalid_type",
        input: c,
        inst: t
      }), o;
    o.value = a ? a.alloc(t, o, Array(c.length), s) : Array(c.length);
    const f = [], p = s?.abortEarly;
    for (let m = 0; m < c.length; m++) {
      const g = c[m], b = i.element._zod.run({
        value: g,
        issues: []
      }, s);
      if (b instanceof Promise)
        f.push(b.then((x) => Hb(x, o, m)));
      else if (Hb(b, o, m), p && b.issues.length !== 0 && Ji(b))
        break;
    }
    return f.length ? Promise.all(f).then(() => o) : o;
  }, v4(t, w4);
});
function _u(t, i, a, o, s, c) {
  const f = a in o, p = c === "optional";
  if (!(!f && p && s === "optional")) {
    if (t.issues.length) {
      if (s !== void 0 && p && !f)
        return;
      i.issues.push(...C1(a, t.issues));
    }
    if (!f && s === void 0) {
      t.issues.length || i.issues.push({
        code: "invalid_type",
        expected: "nonoptional",
        input: void 0,
        path: [a]
      });
      return;
    }
    t.value === void 0 ? (f || s === "defaulted" && !p) && (i.value[a] = void 0) : i.value[a] = t.value;
  }
}
const S4 = [];
function V1(t) {
  const i = Object.keys(t.shape), a = Object.getOwnPropertySymbols(t.shape), o = a.length ? a : S4, s = o.length ? [...i, ...o] : i;
  for (const f of s)
    if (!t.shape?.[f]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${String(f)}": expected a Zod schema`);
  const c = sz(t.shape);
  return {
    ...t,
    allKeys: s,
    symbolKeys: o,
    // string-only: handleCatchall matches it against `for...in`, which never yields a symbol
    keySet: new Set(i),
    numKeys: i.length,
    optionalKeys: new Set(c)
  };
}
function Y1(t, i, a, o, s, c, f) {
  const p = [], m = s.keySet, g = s.catchall._zod, b = g.def.type, x = g.optin, w = g.optout;
  let v = 0;
  for (const S in i) {
    if (f && a.issues.length !== v) {
      if (Ji(a, v))
        break;
      v = a.issues.length;
    }
    if (m.has(S))
      continue;
    if (S === "__proto__") {
      b === "never" && p.push(S);
      continue;
    }
    if (b === "never") {
      p.push(S);
      continue;
    }
    const j = g.run({ value: i[S], issues: [] }, o);
    j instanceof Promise ? t.push(j.then((E) => _u(E, a, S, i, x, w))) : _u(j, a, S, i, x, w);
  }
  return p.length && a.issues.push({
    code: "unrecognized_keys",
    keys: p,
    input: i,
    inst: c,
    // Describes the shape of the input, not the validity of the parsed value, so it never aborts. The parse still fails; the schema's own checks just get to run first, and an enclosing intersection can reconcile the key against a sibling operand.
    continue: !0
  }), t.length ? Promise.all(t).then(() => a) : a;
}
const z4 = /* @__PURE__ */ K("$ZodObject", (t, i) => {
  wt.init(t, i);
  const a = Object.getOwnPropertyDescriptor(i, "shape"), o = a?.get ? a.get.raw : i.shape ?? {};
  if (o) {
    const g = () => {
      const b = { ...o };
      return Object.defineProperty(i, "shape", { value: b }), g.raw = b, b;
    };
    g.raw = o, Object.defineProperty(i, "shape", { get: g });
  }
  const s = zp(() => V1(i));
  nt(t, "propValues", (g) => {
    const b = g.def.shape, x = {};
    for (const w in b) {
      const v = b[w]._zod;
      if (v.values) {
        Object.prototype.hasOwnProperty.call(x, w) || xa(x, w, /* @__PURE__ */ new Set());
        for (const S of v.values)
          x[w].add(S);
        v.optin !== void 0 && x[w].add(void 0);
      }
    }
    return x;
  });
  const c = ku, f = i.catchall;
  let p;
  const m = Ti.memoizer;
  m?.attach(t), t._zod.parse = (g, b) => {
    p ?? (p = s.value);
    const x = g.value;
    if (!c(x))
      return g.issues.push({
        expected: "object",
        code: "invalid_type",
        input: x,
        inst: t
      }), g;
    g.value = m ? m.alloc(t, g, {}, b) : {};
    const w = [], v = p.shape, S = b?.abortEarly;
    let j = g.issues.length;
    for (const E of p.allKeys) {
      if (S && g.issues.length !== j) {
        if (Ji(g, j))
          break;
        j = g.issues.length;
      }
      if (E === "__proto__")
        continue;
      const O = v[E], I = O._zod.optin, L = O._zod.optout, V = O._zod.run({ value: x[E], issues: [] }, b);
      V instanceof Promise ? w.push(V.then((J) => _u(J, g, E, x, I, L))) : _u(V, g, E, x, I, L);
    }
    return f ? Y1(w, x, g, b, s.value, t, S === !0) : w.length ? Promise.all(w).then(() => g) : g;
  };
}), _4 = /* @__PURE__ */ K("$ZodObjectJIT", (t, i) => {
  z4.init(t, i);
  const a = t._zod.parse, o = zp(() => V1(i)), s = Ti.memoizer, c = (v) => {
    const S = o.value, j = S.symbolKeys, E = new R_(["payload", "ctx"], { shape: v, inst: t, memo: s, syms: j }), O = (J) => `shape[${J}]._zod.run({ value: input[${J}], issues: [] }, ctx)`, I = (J, T) => `
          let ${J}_ab = false;
          for (let i = 0; i < ${J}.issues.length; i++) {
            const iss = ${J}.issues[i];
            iss.path = iss.path ? [${T}, ...iss.path] : [${T}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${J}_ab = true;
          }
          if (${J}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
    E.write("const input = payload.value;");
    const L = /* @__PURE__ */ Object.create(null);
    let V = 0;
    for (const J of S.allKeys)
      L[J] = `key_${V++}`;
    E.write(s ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};");
    for (const J of S.allKeys) {
      if (J === "__proto__")
        continue;
      const T = L[J], X = typeof J == "symbol" ? `syms[${j.indexOf(J)}]` : rz(J), pe = `${X} in input`, _e = v[J], Z = _e?._zod?.optin, te = Z !== void 0, oe = _e?._zod?.optout === "optional";
      if (E.write(`const ${T} = ${O(X)};`), te && oe) {
        const Ne = Z === "optional" ? `${T}_present` : `${T}.value !== undefined || ${T}_present`;
        E.write(`
        const ${T}_present = ${pe};
        if (!${T}.issues.length || ${T}_present) {
          if (${T}.issues.length) {${I(T, X)}
          }

          if (${Ne}) {
            newResult[${X}] = ${T}.value;
          }
        }

      `);
      } else te ? (E.write(`
        if (${T}.issues.length) {${I(T, X)}
        }
      `), Z === "defaulted" ? E.write(`newResult[${X}] = ${T}.value;`) : E.write(`
        if (${T}.value !== undefined || ${pe}) {
          newResult[${X}] = ${T}.value;
        }
      `)) : E.write(`
        const ${T}_present = ${pe};
        if (${T}.issues.length) {${I(T, X)}
        }
        if (!${T}_present && !${T}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${X}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${T}_present) {
          newResult[${X}] = ${T}.value;
        }

      `);
    }
    return E.write("payload.value = newResult;"), E.write("return payload;"), E.compile();
  };
  let f;
  const p = ku, m = !Ti.jitless, b = m && lz.value, x = i.catchall;
  let w;
  t._zod.parse = (v, S) => {
    w ?? (w = o.value);
    const j = v.value;
    return p(j) ? m && b && S?.async === !1 && S.jitless !== !0 ? (f || (f = c(i.shape)), v = f(v, S), x ? Y1([], j, v, S, w, t, S?.abortEarly === !0) : v) : a(v, S) : (v.issues.push({
      expected: "object",
      code: "invalid_type",
      input: j,
      inst: t
    }), v);
  };
});
function Zb(t, i, a, o) {
  for (const c of t)
    if (c.issues.length === 0)
      return i.value = c.value, i;
  const s = t.filter((c) => !Ji(c));
  return s.length === 1 ? (i.value = s[0].value, s[0]) : (i.issues.push({
    code: "invalid_union",
    input: i.value,
    inst: a,
    errors: t.map((c) => c.issues.map((f) => ml(f, o, Ur())))
  }), i);
}
const j4 = /* @__PURE__ */ K("$ZodUnion", (t, i) => {
  wt.init(t, i), nt(t, "optin", (o) => o.def.options.some((s) => s._zod.optin === "defaulted") ? "defaulted" : o.def.options.some((s) => s._zod.optin !== void 0) ? "optional" : void 0), nt(t, "optout", (o) => o.def.options.some((s) => s._zod.optout === "optional") ? "optional" : void 0), nt(t, "values", (o) => {
    if (o.def.options.every((s) => s._zod.values))
      return new Set(o.def.options.flatMap((s) => Array.from(s._zod.values)));
  }), nt(t, "pattern", (o) => {
    if (o.def.options.every((s) => s._zod.pattern)) {
      const s = o.def.options.map((c) => c._zod.pattern);
      return new RegExp(`^(${s.map((c) => _p(c.source)).join("|")})$`);
    }
  });
  const a = i.options.length === 1 ? i.options[0]._zod.run : null;
  t._zod.parse = (o, s) => {
    if (a)
      return a(o, s);
    let c = !1;
    const f = [];
    for (const p of i.options) {
      const m = p._zod.run({
        value: o.value,
        issues: []
      }, s);
      if (m instanceof Promise)
        f.push(m), c = !0;
      else {
        if (m.issues.length === 0)
          return m;
        f.push(m);
      }
    }
    return c ? Promise.all(f).then((p) => Zb(p, o, t, s)) : Zb(f, o, t, s);
  };
}), E4 = /* @__PURE__ */ K("$ZodIntersection", (t, i) => {
  wt.init(t, i), t._zod.parse = (a, o) => {
    const s = a.value, c = i.left._zod.run({ value: s, issues: [] }, o), f = i.right._zod.run({ value: s, issues: [] }, o);
    return c instanceof Promise || f instanceof Promise ? Promise.all([c, f]).then(([m, g]) => qb(a, m, g)) : qb(a, c, f);
  };
});
function tp(t, i) {
  if (t === i)
    return { valid: !0, data: t };
  if (t instanceof Date && i instanceof Date && +t == +i)
    return { valid: !0, data: t };
  if (To(t) && To(i)) {
    const a = Object.keys(i), o = Object.keys(t).filter((c) => a.indexOf(c) !== -1), s = { ...t, ...i };
    Object.prototype.hasOwnProperty.call(s, "__proto__") && delete s.__proto__;
    for (const c of o) {
      if (c === "__proto__")
        continue;
      const f = tp(t[c], i[c]);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [c, ...f.mergeErrorPath]
        };
      s[c] = f.data;
    }
    return { valid: !0, data: s };
  }
  if (Array.isArray(t) && Array.isArray(i)) {
    if (t.length !== i.length)
      return { valid: !1, mergeErrorPath: [] };
    const a = [];
    for (let o = 0; o < t.length; o++) {
      const s = t[o], c = i[o], f = tp(s, c);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [o, ...f.mergeErrorPath]
        };
      a.push(f.data);
    }
    return { valid: !0, data: a };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function qb(t, i, a) {
  const o = /* @__PURE__ */ new Map();
  let s;
  const c = /* @__PURE__ */ new Map(), f = (g, b) => {
    let x;
    if (g.code === "unrecognized_keys" && !g.path?.length)
      s ?? (s = g), x = g.keys;
    else if (g.code === "invalid_key" && g.origin === "record" && g.path?.length === 1) {
      const w = String(g.path[0]);
      c.has(w) || c.set(w, g), x = [w];
    } else
      return !1;
    for (const w of x)
      o.has(w) || o.set(w, {}), o.get(w)[b] = !0;
    return !0;
  };
  for (const g of i.issues)
    f(g, "l") || t.issues.push(g);
  for (const g of a.issues)
    f(g, "r") || t.issues.push(g);
  const p = [...o].filter(([, g]) => g.l && g.r).map(([g]) => g);
  if (p.length) {
    const g = s ? p.filter((b) => s.keys.includes(b)) : [];
    g.length && t.issues.push({ ...s, keys: g });
    for (const b of p)
      !g.includes(b) && c.has(b) && t.issues.push(c.get(b));
  }
  const m = tp(i.value, a.value);
  if (!m.valid) {
    if (Ji(t))
      return t;
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(m.mergeErrorPath)}`);
  }
  return t.value = m.data, t;
}
const C4 = /* @__PURE__ */ K("$ZodEnum", (t, i) => {
  wt.init(t, i);
  const a = Kd(i.entries), o = new Set(a);
  t._zod.values = o, nt(t, "pattern", (s) => {
    const c = Kd(s.def.entries).filter((f) => oz.has(typeof f));
    return new RegExp(c.length ? `^(${c.map((f) => Mu(f.toString())).join("|")})$` : "^[^\\s\\S]$");
  }), t._zod.parse = (s, c) => {
    const f = s.value;
    return o.has(f) || s.issues.push({
      code: "invalid_value",
      values: a,
      input: f,
      inst: t
    }), s;
  };
}), T4 = /* @__PURE__ */ K("$ZodTransform", (t, i) => {
  wt.init(t, i), t._zod.optin = "optional", Ti.memoizer?.guard(t), t._zod.parse = (a, o) => {
    if (o.direction === "backward")
      throw new A1(t.constructor.name);
    const s = i.transform(a.value, a);
    if (o.async)
      return (s instanceof Promise ? s : Promise.resolve(s)).then((f) => (a.value = f, a));
    if (s instanceof Promise)
      throw new fa();
    return a.value = s, a;
  };
});
function $b(t, i) {
  return t.value = i.issues.length ? void 0 : i.value, t;
}
const G1 = /* @__PURE__ */ K("$ZodOptional", (t, i) => {
  wt.init(t, i), nt(t, "optin", (a) => a.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), t._zod.optout = "optional", nt(t, "values", (a) => {
    const o = a.def.innerType._zod.values;
    return o ? /* @__PURE__ */ new Set([...o, void 0]) : void 0;
  }), nt(t, "pattern", (a) => {
    const o = a.def.innerType._zod.pattern;
    return o ? new RegExp(`^(${_p(o.source)})?$`) : void 0;
  }), t._zod.parse = (a, o) => {
    if (a.value === void 0) {
      if (i.innerType._zod.optin !== "defaulted")
        return a;
      const s = i.innerType._zod.run({ value: a.value, issues: [] }, o);
      return s instanceof Promise ? s.then((c) => $b(a, c)) : $b(a, s);
    }
    return i.innerType._zod.run(a, o);
  };
}), N4 = /* @__PURE__ */ K("$ZodExactOptional", (t, i) => {
  G1.init(t, i), nt(t, "values", (a) => a.def.innerType._zod.values), nt(t, "pattern", (a) => a.def.innerType._zod.pattern), t._zod.parse = (a, o) => i.innerType._zod.run(a, o);
}), A4 = /* @__PURE__ */ K("$ZodNullable", (t, i) => {
  wt.init(t, i), nt(t, "optin", (a) => a.def.innerType._zod.optin), nt(t, "optout", (a) => a.def.innerType._zod.optout), nt(t, "pattern", (a) => {
    const o = a.def.innerType._zod.pattern;
    return o ? new RegExp(`^(${_p(o.source)}|null)$`) : void 0;
  }), nt(t, "values", (a) => a.def.innerType._zod.values ? /* @__PURE__ */ new Set([...a.def.innerType._zod.values, null]) : void 0), t._zod.parse = (a, o) => a.value === null ? a : i.innerType._zod.run(a, o);
}), O4 = /* @__PURE__ */ K("$ZodDefault", (t, i) => {
  wt.init(t, i), t._zod.optin = "defaulted", nt(t, "values", (a) => a.def.innerType._zod.values), t._zod.parse = (a, o) => {
    if (o.direction === "backward")
      return i.innerType._zod.run(a, o);
    if (a.value === void 0)
      return a.value = i.defaultValue, a;
    const s = i.innerType._zod.run(a, o);
    return s instanceof Promise ? s.then((c) => Vb(c, i)) : Vb(s, i);
  };
});
function Vb(t, i) {
  return t.value === void 0 && (t.value = i.defaultValue), t;
}
const D4 = /* @__PURE__ */ K("$ZodPrefault", (t, i) => {
  wt.init(t, i), t._zod.optin = "defaulted", nt(t, "values", (a) => a.def.innerType._zod.values), t._zod.parse = (a, o) => (o.direction === "backward" || a.value === void 0 && (a.value = i.defaultValue), i.innerType._zod.run(a, o));
}), M4 = /* @__PURE__ */ K("$ZodNonOptional", (t, i) => {
  wt.init(t, i), nt(t, "values", (a) => {
    const o = a.def.innerType._zod.values;
    return o ? new Set([...o].filter((s) => s !== void 0)) : void 0;
  }), t._zod.parse = (a, o) => {
    const s = i.innerType._zod.run(a, o);
    return s instanceof Promise ? s.then((c) => Yb(c, t)) : Yb(s, t);
  };
});
function Yb(t, i) {
  return !t.issues.length && t.value === void 0 && t.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: t.value,
    inst: i
  }), t;
}
function Gb(t, i, a, o) {
  return i.issues.length ? (t.value = a.catchValue({
    ...i,
    value: t.value,
    error: {
      issues: i.issues.map((s) => ml(s, o, Ur()))
    },
    input: t.value
  }), t) : (t.value = i.value, i.memo && (t.memo = !0), t);
}
const R4 = /* @__PURE__ */ K("$ZodCatch", (t, i) => {
  wt.init(t, i), nt(t, "optin", (a) => a.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), nt(t, "optout", (a) => a.def.innerType._zod.optout), nt(t, "values", (a) => a.def.innerType._zod.values), t._zod.parse = (a, o) => {
    if (o.direction === "backward")
      return i.innerType._zod.run(a, o);
    const s = i.innerType._zod.run({ value: a.value, issues: [] }, o);
    return s instanceof Promise ? s.then((c) => Gb(a, c, i, o)) : Gb(a, s, i, o);
  };
}), U4 = /* @__PURE__ */ K("$ZodPipe", (t, i) => {
  wt.init(t, i), nt(t, "values", (a) => a.def.in._zod.values), nt(t, "optin", (a) => a.def.in._zod.optin), nt(t, "optout", (a) => a.def.out._zod.optout), nt(t, "propValues", (a) => a.def.in._zod.propValues), t._zod.parse = (a, o) => {
    if (o.direction === "backward") {
      const c = i.out._zod.run(a, o);
      return c instanceof Promise ? c.then((f) => lu(f, i.in, o)) : lu(c, i.in, o);
    }
    const s = i.in._zod.run(a, o);
    return s instanceof Promise ? s.then((c) => lu(c, i.out, o)) : lu(s, i.out, o);
  };
});
function lu(t, i, a) {
  return t.issues.some((o) => o.code !== "unrecognized_keys") ? (t.aborted = !0, t) : i._zod.run({ value: t.value, issues: t.issues }, a);
}
const L4 = /* @__PURE__ */ K("$ZodReadonly", (t, i) => {
  wt.init(t, i), nt(t, "propValues", (a) => a.def.innerType._zod.propValues), nt(t, "values", (a) => a.def.innerType._zod.values), nt(t, "optin", (a) => a.def.innerType?._zod?.optin), nt(t, "optout", (a) => a.def.innerType?._zod?.optout), t._zod.parse = (a, o) => {
    if (o.direction === "backward")
      return i.innerType._zod.run(a, o);
    const s = i.innerType._zod.run(a, o);
    return s instanceof Promise ? s.then(Fb) : Fb(s);
  };
});
function Fb(t) {
  return t.memo || (t.value = Object.freeze(t.value)), t;
}
const B4 = /* @__PURE__ */ K("$ZodCustom", (t, i) => {
  wn.init(t, i), wt.init(t, i), t._zod.parse = (a, o) => a, t._zod.check = (a) => {
    const o = a.value, s = i.fn(o);
    if (s instanceof Promise)
      return s.then((c) => Xb(c, a, o, t));
    Xb(s, a, o, t);
  };
});
function Xb(t, i, a, o) {
  if (!t) {
    const s = {
      code: "custom",
      input: a,
      inst: o,
      // incorporates params.error into issue reporting
      path: [...o._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !o._zod.def.abort
      // params: inst._zod.def.params,
    };
    o._zod.def.params && (s.params = o._zod.def.params), i.issues.push(No(s));
  }
}
class I4 extends Error {
  constructor() {
    super("Cannot parse a reference cycle that closes through a transform"), this.name = "ZodCyclicError";
  }
}
const np = "~memo", Qb = [];
function F1(t) {
  return t !== null && typeof t == "object";
}
function Ed(t) {
  return t.map((i) => i.path ? { ...i, path: i.path.slice() } : { ...i });
}
const X1 = /* @__PURE__ */ new WeakMap(), vo = 0, gu = 1, ko = 2;
function xu(t, i, a) {
  const o = X1.get(t);
  if (o !== void 0)
    return o ? ko : vo;
  if (i.has(t))
    return ko;
  i.add(t);
  let s = vo;
  const c = (b) => {
    if (s !== ko && b?._zod) {
      const x = xu(b, i);
      x > s && (s = x);
    }
  }, f = (b, x) => {
    let w = vo;
    for (const v of Reflect.ownKeys(b)) {
      const S = Object.getOwnPropertyDescriptor(b, v);
      if (!S.enumerable)
        continue;
      const j = S.get ? gu : S.value?._zod ? xu(S.value, i) : vo;
      j > w && (w = j);
    }
    return w;
  }, p = (b) => {
    b > s && (s = b);
  }, m = t._zod.def;
  switch (m.type) {
    case "object": {
      const b = v1(m);
      p(b ? f(b) : gu), c(m.catchall);
      break;
    }
    case "array":
      c(m.element);
      break;
    case "tuple":
      for (const b of m.items)
        c(b);
      c(m.rest);
      break;
    case "record":
    case "map":
      c(m.keyType), c(m.valueType);
      break;
    case "set":
      c(m.valueType);
      break;
    case "union":
      for (const b of m.options)
        c(b);
      break;
    case "intersection":
      c(m.left), c(m.right);
      break;
    case "optional":
    case "nullable":
    case "default":
    case "prefault":
    case "catch":
    case "readonly":
    case "nonoptional":
    case "promise":
    case "success":
      c(m.innerType);
      break;
    case "pipe":
      c(m.in), c(m.out);
      break;
    case "function":
      c(m.input), c(m.output);
      break;
    // `$ZodLazy` caches its inner on the def, so a resolved edge is followed exactly
    case "lazy": {
      const b = m._cachedInner ?? void 0;
      p(b ? xu(b, i) : gu);
      break;
    }
    // a leaf by choice: `parts` are regex fragments, not data positions
    case "template_literal":
    // leaves
    case "string":
    case "number":
    case "int":
    case "boolean":
    case "bigint":
    case "symbol":
    case "undefined":
    case "null":
    case "void":
    case "never":
    case "any":
    case "unknown":
    case "date":
    case "nan":
    case "enum":
    case "literal":
    case "file":
    case "transform":
    case "custom":
      break;
    default:
      for (const b in m) {
        const x = Object.getOwnPropertyDescriptor(m, b);
        if (!x || x.get)
          continue;
        const w = x.value;
        if (!(!w || typeof w != "object")) {
          if (w._zod)
            c(w);
          else if (Array.isArray(w))
            for (const v of w)
              c(v);
        }
      }
  }
  return i.delete(t), H4(t, s);
}
function H4(t, i) {
  return i !== gu && X1.set(t, i === ko), i;
}
function Z4(t, i) {
  let a = t.buckets.get(i);
  return a || (a = /* @__PURE__ */ new WeakMap(), t.buckets.set(i, a)), a;
}
let ou;
const su = [], q4 = {
  alloc(t, i, a) {
    const o = ou;
    if (!o)
      return a;
    ou = void 0;
    const s = { value: a, issues: null };
    return o.set(i.value, s), su.push(s), a;
  },
  guard(t) {
    var i;
    (i = t._zod).deferred ?? (i.deferred = []), t._zod.deferred.push(() => {
      const a = t._zod.parse, o = (s, c) => {
        if (c.direction !== "backward" && V4(c, s.value))
          throw new I4();
        return a(s, c);
      };
      t._zod.parse = o, t._zod.run === a && (t._zod.run = o);
    });
  },
  attach(t) {
    var i;
    let a, o = !1, s, c;
    (i = t._zod).deferred ?? (i.deferred = []), t._zod.deferred.push(() => {
      const f = t._zod.parse, p = (m, g) => {
        if (a === void 0) {
          const O = xu(t, /* @__PURE__ */ new Set());
          if (O === vo)
            return t._zod.parse = f, t._zod.run === p && (t._zod.run = f), f(m, g);
          O === ko || o ? a = !0 : o = !0;
        }
        const b = m.value;
        if (!F1(b))
          return f(m, g);
        let x = g[np];
        x || (x = { buckets: /* @__PURE__ */ new WeakMap(), backEdges: void 0 }, g[np] = x);
        let w;
        s === g ? w = c : (w = Z4(x, t), s = g, c = w);
        const v = w.get(b);
        if (v)
          return m.value = v.value, v.issues ? v.issues.length && m.issues.push(...Ed(v.issues)) : (m.memo = !0, x.backEdges ?? (x.backEdges = /* @__PURE__ */ new WeakSet()), x.backEdges.add(v.value)), m;
        ou = w;
        const S = su.length, j = f(m, g);
        ou = void 0;
        const E = su.length > S ? su.pop() : void 0;
        return j instanceof Promise ? j.then((O) => (E && (E.issues = O.issues.length ? Ed(O.issues) : Qb), O)) : (E && (E.issues = j.issues.length ? Ed(j.issues) : Qb), j);
      };
      t._zod.parse = p, t._zod.run === f && (t._zod.run = p);
    });
  }
};
function $4() {
  return q4;
}
function V4(t, i) {
  const a = t[np]?.backEdges;
  return a !== void 0 && F1(i) && a.has(i);
}
const Y4 = () => {
  const t = {
    string: { unit: "characters", verb: "to have" },
    file: { unit: "bytes", verb: "to have" },
    array: { unit: "items", verb: "to have" },
    set: { unit: "items", verb: "to have" },
    map: { unit: "entries", verb: "to have" }
  };
  function i(c) {
    return t[c] ?? null;
  }
  const a = {
    regex: "input",
    email: "email address",
    url: "URL",
    emoji: "emoji",
    uuid: "UUID",
    uuidv4: "UUIDv4",
    uuidv6: "UUIDv6",
    nanoid: "nanoid",
    guid: "GUID",
    cuid: "cuid",
    cuid2: "cuid2",
    ulid: "ULID",
    xid: "XID",
    ksuid: "KSUID",
    datetime: "ISO datetime",
    date: "ISO date",
    time: "ISO time",
    duration: "ISO duration",
    ipv4: "IPv4 address",
    ipv6: "IPv6 address",
    mac: "MAC address",
    cidrv4: "IPv4 range",
    cidrv6: "IPv6 range",
    base64: "base64-encoded string",
    base64url: "base64url-encoded string",
    json_string: "JSON string",
    e164: "E.164 number",
    currency_code: "currency code",
    credit_card: "credit card number",
    iban: "IBAN",
    jwt: "JWT",
    template_literal: "input"
  }, o = {
    // Compatibility: "nan" -> "NaN" for display
    nan: "NaN"
    // All other type names omitted - they fall back to raw values via ?? operator
  };
  function s(c, f) {
    return c === "number" && typeof f == "number" && !Number.isFinite(f) ? String(f) : o[c] ?? c;
  }
  return (c) => {
    switch (c.code) {
      case "invalid_type": {
        const f = s(c.expected), p = bz(c.input), m = s(p, c.input);
        return `Invalid input: expected ${f}, received ${m}`;
      }
      case "invalid_value":
        return c.values.length === 1 ? `Invalid input: expected ${_1(c.values[0])}` : `Invalid option: expected one of ${Ob(c.values, "|")}`;
      case "too_big": {
        const f = c.exact ? "exactly " : c.inclusive ? "<=" : "<", p = i(c.origin);
        return p ? `Too big: expected ${c.origin ?? "value"} to have ${f}${c.maximum.toString()} ${p.unit ?? "elements"}` : `Too big: expected ${c.origin ?? "value"} to be ${f}${c.maximum.toString()}`;
      }
      case "too_small": {
        const f = c.exact ? "exactly " : c.inclusive ? ">=" : ">", p = i(c.origin);
        return p ? `Too small: expected ${c.origin} to have ${f}${c.minimum.toString()} ${p.unit}` : `Too small: expected ${c.origin} to be ${f}${c.minimum.toString()}`;
      }
      case "invalid_format": {
        const f = c;
        return f.format === "starts_with" ? `Invalid string: must start with "${f.prefix}"` : f.format === "ends_with" ? `Invalid string: must end with "${f.suffix}"` : f.format === "includes" ? `Invalid string: must include "${f.includes}"` : f.format === "regex" ? `Invalid string: must match pattern ${f.pattern}` : `Invalid ${a[f.format] ?? c.format}`;
      }
      case "not_multiple_of":
        return `Invalid number: must be a multiple of ${c.divisor}`;
      case "unrecognized_keys":
        return `Unrecognized key${c.keys.length > 1 ? "s" : ""}: ${Ob(c.keys, ", ")}`;
      case "invalid_key":
        return `Invalid key in ${c.origin}`;
      case "invalid_union":
        return c.options && Array.isArray(c.options) && c.options.length > 0 ? `Invalid discriminator value. Expected ${c.options.map((p) => `'${p}'`).join(" | ")}` : c.inclusive === !1 ? "Invalid input: more than one option matched" : "Invalid input";
      case "invalid_element":
        return `Invalid value in ${c.origin}`;
      default:
        return "Invalid input";
    }
  };
};
function G4() {
  return {
    localeError: Y4()
  };
}
var Pb;
class F4 {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(i, ...a) {
    const o = a[0];
    return this._map.set(i, o), o && typeof o == "object" && "id" in o && this._idmap.set(o.id, i), this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(i) {
    const a = this._map.get(i);
    return a && typeof a == "object" && "id" in a && this._idmap.delete(a.id), this._map.delete(i), this;
  }
  get(i) {
    const a = i._zod.parent;
    if (a) {
      const o = { ...this.get(a) ?? {} };
      delete o.id;
      const s = { ...o, ...this._map.get(i) };
      return Object.keys(s).length ? s : void 0;
    }
    return this._map.get(i);
  }
  has(i) {
    return this._map.has(i);
  }
}
function X4() {
  return new F4();
}
(Pb = globalThis).__zod_globalRegistry ?? (Pb.__zod_globalRegistry = X4());
const wo = globalThis.__zod_globalRegistry;
function Q1(t) {
  return t.checks && (t.checks = [...t.checks]), t;
}
// @__NO_SIDE_EFFECTS__
function Q4(t, i) {
  return new t(Q1({ type: "string", ...ze(i) }));
}
// @__NO_SIDE_EFFECTS__
function P4(t, i) {
  return new t({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...ze(i)
  });
}
// @__NO_SIDE_EFFECTS__
function K4(t, i) {
  return new t({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...ze(i)
  });
}
// @__NO_SIDE_EFFECTS__
function J4(t, i) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...ze(i)
  });
}
// @__NO_SIDE_EFFECTS__
function W4(t, i) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...ze(i)
  });
}
// @__NO_SIDE_EFFECTS__
function ej(t, i) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...ze(i)
  });
}
// @__NO_SIDE_EFFECTS__
function tj(t, i) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...ze(i)
  });
}
// @__NO_SIDE_EFFECTS__
function nj(t, i) {
  return new t({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...ze(i)
  });
}
// @__NO_SIDE_EFFECTS__
function ij(t, i) {
  return new t({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...ze(i)
  });
}
// @__NO_SIDE_EFFECTS__
function rj(t, i) {
  return new t({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...ze(i)
  });
}
// @__NO_SIDE_EFFECTS__
function aj(t, i) {
  return new t({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...ze(i)
  });
}
// @__NO_SIDE_EFFECTS__
function lj(t, i) {
  return new t({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...ze(i)
  });
}
// @__NO_SIDE_EFFECTS__
function oj(t, i) {
  return new t({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...ze(i)
  });
}
// @__NO_SIDE_EFFECTS__
function sj(t, i) {
  return new t({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...ze(i)
  });
}
// @__NO_SIDE_EFFECTS__
function uj(t, i) {
  return new t({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...ze(i)
  });
}
// @__NO_SIDE_EFFECTS__
function cj(t, i) {
  return new t({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...ze(i)
  });
}
// @__NO_SIDE_EFFECTS__
function fj(t, i) {
  return new t({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...ze(i)
  });
}
// @__NO_SIDE_EFFECTS__
function dj(t, i) {
  return new t({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...ze(i)
  });
}
// @__NO_SIDE_EFFECTS__
function pj(t, i) {
  return new t({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...ze(i)
  });
}
// @__NO_SIDE_EFFECTS__
function hj(t, i) {
  return new t({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...ze(i)
  });
}
// @__NO_SIDE_EFFECTS__
function mj(t, i) {
  return new t({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...ze(i)
  });
}
// @__NO_SIDE_EFFECTS__
function gj(t, i) {
  return new t({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...ze(i)
  });
}
// @__NO_SIDE_EFFECTS__
function xj(t, i) {
  return new t({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...ze(i)
  });
}
// @__NO_SIDE_EFFECTS__
function bj(t, i) {
  return new t({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...ze(i)
  });
}
// @__NO_SIDE_EFFECTS__
function yj(t, i) {
  return new t({
    type: "string",
    format: "date",
    check: "string_format",
    ...ze(i)
  });
}
// @__NO_SIDE_EFFECTS__
function vj(t, i) {
  return new t({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...ze(i)
  });
}
// @__NO_SIDE_EFFECTS__
function wj(t, i) {
  return new t({
    type: "string",
    format: "duration",
    check: "string_format",
    ...ze(i)
  });
}
// @__NO_SIDE_EFFECTS__
function kj(t, i) {
  return new t(Q1({ type: "number", checks: [], ...ze(i) }));
}
// @__NO_SIDE_EFFECTS__
function Sj(t, i) {
  return new t({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...ze(i)
  });
}
// @__NO_SIDE_EFFECTS__
function zj(t, i) {
  return new t({
    type: "boolean",
    ...ze(i)
  });
}
// @__NO_SIDE_EFFECTS__
function _j(t) {
  return new t({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function jj(t, i) {
  return new t({
    type: "never",
    ...ze(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Kb(t, i) {
  return new M1({
    check: "less_than",
    ...ze(i),
    value: t,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Cd(t, i) {
  return new M1({
    check: "less_than",
    ...ze(i),
    value: t,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Jb(t, i) {
  return new R1({
    check: "greater_than",
    ...ze(i),
    value: t,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function Td(t, i) {
  return new R1({
    check: "greater_than",
    ...ze(i),
    value: t,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Wb(t, i) {
  return new S_({
    check: "multiple_of",
    ...ze(i),
    value: t
  });
}
// @__NO_SIDE_EFFECTS__
function P1(t, i) {
  return new __({
    check: "max_length",
    ...ze(i),
    maximum: t
  });
}
// @__NO_SIDE_EFFECTS__
function ju(t, i) {
  return new j_({
    check: "min_length",
    ...ze(i),
    minimum: t
  });
}
// @__NO_SIDE_EFFECTS__
function K1(t, i) {
  return new E_({
    check: "length_equals",
    ...ze(i),
    length: t
  });
}
// @__NO_SIDE_EFFECTS__
function Ej(t, i) {
  return new C_({
    check: "string_format",
    format: "regex",
    ...ze(i),
    pattern: t
  });
}
// @__NO_SIDE_EFFECTS__
function Cj(t) {
  return new T_({
    check: "string_format",
    format: "lowercase",
    ...ze(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Tj(t) {
  return new N_({
    check: "string_format",
    format: "uppercase",
    ...ze(t)
  });
}
// @__NO_SIDE_EFFECTS__
function Nj(t, i) {
  return new A_({
    check: "string_format",
    format: "includes",
    ...ze(i),
    includes: t
  });
}
// @__NO_SIDE_EFFECTS__
function Aj(t, i) {
  return new O_({
    check: "string_format",
    format: "starts_with",
    ...ze(i),
    prefix: t
  });
}
// @__NO_SIDE_EFFECTS__
function Oj(t, i) {
  return new D_({
    check: "string_format",
    format: "ends_with",
    ...ze(i),
    suffix: t
  });
}
// @__NO_SIDE_EFFECTS__
function gl(t) {
  return new M_({
    check: "overwrite",
    tx: t
  });
}
// @__NO_SIDE_EFFECTS__
function Dj(t) {
  return /* @__PURE__ */ gl((i) => i.normalize(t));
}
// @__NO_SIDE_EFFECTS__
function Mj() {
  return /* @__PURE__ */ gl((t) => t.trim());
}
// @__NO_SIDE_EFFECTS__
function Rj() {
  return /* @__PURE__ */ gl((t) => t.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function Uj() {
  return /* @__PURE__ */ gl((t) => t.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function Lj() {
  return /* @__PURE__ */ gl((t) => az(t));
}
// @__NO_SIDE_EFFECTS__
function Bj(t, i, a) {
  return new t({
    type: "array",
    element: i,
    // get element() {
    //   return element;
    // },
    ...ze(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Ij(t, i, a) {
  return new t({
    type: "custom",
    check: "custom",
    fn: i,
    ...ze(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Hj(t, i) {
  const a = /* @__PURE__ */ Zj((o) => (o.addIssue = (s) => {
    if (typeof s == "string")
      o.issues.push(No(s, o.value, a._zod.def));
    else {
      const c = s;
      c.fatal && (c.continue = !1), c.code ?? (c.code = "custom"), "input" in c || (c.input = o.value), c.inst ?? (c.inst = a), c.continue ?? (c.continue = !a._zod.def.abort), o.issues.push(No(c));
    }
  }, t(o.value, o)), i);
  return a;
}
// @__NO_SIDE_EFFECTS__
function Zj(t, i) {
  const a = new wn({
    check: "custom",
    ...ze(i)
  });
  return a._zod.check = t, a;
}
function So(t, ...i) {
  for (const a of i)
    for (const o of Reflect.ownKeys(a))
      Object.prototype.propertyIsEnumerable.call(a, o) && xa(t, o, a[o]);
  return t;
}
function J1(t) {
  let i = t?.target ?? "draft-2020-12";
  return i === "draft-4" && (i = "draft-04"), i === "draft-7" && (i = "draft-07"), {
    processors: t.processors ?? {},
    metadataRegistry: t?.metadata ?? wo,
    target: i,
    unrepresentable: t?.unrepresentable ?? "throw",
    override: t?.override ?? (() => {
    }),
    io: t?.io ?? "output",
    counter: 0,
    seen: /* @__PURE__ */ new Map(),
    sharedDefsExtractedFor: void 0,
    sharedEmitDoneFor: void 0,
    cycles: t?.cycles ?? "ref",
    reused: t?.reused ?? "inline",
    intersections: [],
    deferred: [],
    external: t?.external ?? void 0
  };
}
function xl(t, i, a, o, s) {
  const c = typeof i.unrepresentable == "function" ? i.unrepresentable({ zodSchema: t, path: o.path, message: s }) : i.unrepresentable;
  if (c === "any")
    return !1;
  if (c === void 0 || c === "throw")
    throw new Error(s);
  return Object.assign(a, c), !0;
}
function Pt(t, i, a = { path: [], schemaPath: [] }) {
  var o;
  const s = t._zod.def, c = i.seen.get(t);
  if (c)
    return c.count++, a.schemaPath.includes(t) && (c.cycle = a.path), c.schema;
  const f = { schema: {}, count: 1, cycle: void 0, path: a.path };
  i.seen.set(t, f), i.sharedDefsExtractedFor = void 0, i.sharedEmitDoneFor = void 0;
  const p = t._zod.toJSONSchema?.();
  if (p)
    f.schema = p;
  else {
    const b = {
      ...a,
      schemaPath: [...a.schemaPath, t],
      path: a.path
    };
    if (t._zod.processJSONSchema)
      t._zod.processJSONSchema(i, f.schema, b);
    else {
      const w = f.schema, v = i.processors[s.type];
      if (!v)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${s.type}`);
      v(t, i, w, b);
    }
    const x = t._zod.parent;
    x && (f.ref || (f.ref = x), Pt(x, i, b), i.seen.get(x).isParent = !0);
  }
  const m = i.metadataRegistry.get(t);
  return m && So(f.schema, m), i.io === "input" && fn(t) && (delete f.schema.examples, delete f.schema.default), i.io === "input" && "_prefault" in f.schema && ((o = f.schema).default ?? (o.default = f.schema._prefault)), delete f.schema._prefault, i.seen.get(t).schema;
}
function ey(t) {
  return t.replace(/~/g, "~0").replace(/\//g, "~1");
}
function W1(t, i) {
  const a = t.seen.get(i);
  if (!a)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  if (t.external && t.sharedDefsExtractedFor === t.external)
    return;
  const o = /* @__PURE__ */ new Map();
  for (const f of t.seen.entries()) {
    const p = t.metadataRegistry.get(f[0])?.id;
    if (p) {
      const m = o.get(p);
      if (m && m !== f[0])
        throw new Error(`Duplicate schema id "${p}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
      o.set(p, f[0]);
    }
  }
  const s = (f) => {
    const p = t.target === "draft-2020-12" ? "$defs" : "definitions";
    if (t.external) {
      const x = t.external.registry.get(f[0])?.id, w = t.external.uri ?? ((S) => S);
      if (x)
        return { ref: w(x) };
      const v = f[1].defId ?? f[1].schema.id ?? `schema${t.counter++}`;
      return f[1].defId = v, { defId: v, ref: `${w("__shared")}#/${p}/${ey(v)}` };
    }
    const m = "#", g = `${m}/${p}/`;
    if (f[1] === a && !f[1].schema.id)
      return { ref: m };
    const b = f[1].schema.id ?? `__schema${t.counter++}`;
    return { defId: b, ref: g + ey(b) };
  }, c = (f) => {
    if (f[1].schema.$ref)
      return;
    const p = f[1], { ref: m, defId: g } = s(f);
    p.def = { ...p.schema }, g && (p.defId = g);
    const b = p.schema;
    for (const x in b)
      delete b[x];
    b.$ref = m;
  };
  if (t.cycles === "throw")
    for (const f of t.seen.entries()) {
      const p = f[1];
      if (p.cycle)
        throw new Error(`Cycle detected: #/${p.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
    }
  for (const f of t.seen.entries()) {
    const p = f[1];
    if (i === f[0]) {
      c(f);
      continue;
    }
    if (t.external) {
      const g = t.external.registry.get(f[0])?.id;
      if (i !== f[0] && g) {
        c(f);
        continue;
      }
    }
    if (t.metadataRegistry.get(f[0])?.id) {
      c(f);
      continue;
    }
    if (p.cycle) {
      c(f);
      continue;
    }
    p.count > 1 && t.reused === "ref" && c(f);
  }
  t.external && (t.sharedDefsExtractedFor = t.external);
}
function e0(t) {
  const i = t.anyOf;
  if (!Array.isArray(i) || i.length === 0 || t.type !== void 0)
    return;
  const a = [];
  for (const o of i) {
    if (!o || typeof o != "object")
      return;
    e0(o);
    const s = Object.keys(o);
    if (s.length !== 1 || s[0] !== "type")
      return;
    const c = o.type;
    for (const f of Array.isArray(c) ? c : [c]) {
      if (typeof f != "string")
        return;
      a.includes(f) || a.push(f);
    }
  }
  delete t.anyOf, t.type = a.length === 1 ? a[0] : a;
}
const t0 = /* @__PURE__ */ new Set(["type", "properties", "required", "additionalProperties"]), ty = ["oneOf", "anyOf"];
function ny(t) {
  const i = t.additionalProperties;
  return i === void 0 || i === !1 || typeof i != "object" || i === null ? null : Object.keys(i).length ? i : null;
}
function ip(t) {
  const i = [];
  for (const c of t) {
    if (typeof c != "object" || c.type !== "object")
      return null;
    for (const f in c)
      if (!t0.has(f))
        return null;
    i.push(c);
  }
  const a = {}, o = /* @__PURE__ */ new Set();
  for (const c of i) {
    for (const f in c.properties) {
      if (Object.prototype.hasOwnProperty.call(a, f))
        continue;
      const p = [];
      for (const g of i) {
        const b = g.properties?.[f] ?? ny(g);
        b != null && (p.some((x) => JSON.stringify(x) === JSON.stringify(b)) || p.push(b));
      }
      const m = p.length === 1 ? p[0] : ip(p) ?? { allOf: p };
      xa(a, f, m);
    }
    for (const f of c.required ?? [])
      o.add(f);
  }
  const s = { type: "object", properties: a };
  if (o.size && (s.required = [...o]), i.every((c) => c.additionalProperties === !1))
    s.additionalProperties = !1;
  else {
    const c = [];
    for (const f of i) {
      const p = ny(f);
      p && !c.some((m) => JSON.stringify(m) === JSON.stringify(p)) && c.push(p);
    }
    c.length === 1 ? s.additionalProperties = c[0] : c.length > 1 && (s.additionalProperties = { allOf: c });
  }
  return s;
}
function qj(t) {
  const i = t.allOf;
  if (!Array.isArray(i) || i.length < 2)
    return;
  for (const s of t0)
    if (s in t)
      return;
  const a = i.filter((s) => ty.some((c) => Array.isArray(s[c])));
  let o = null;
  if (!a.length)
    o = ip(i);
  else {
    const s = a[0], c = ty.find((m) => Array.isArray(s[m]));
    if (Object.keys(s).length !== 1)
      return;
    const f = i.filter((m) => m !== s), p = s[c].map((m) => ip([...f, m]));
    if (p.some((m) => !m))
      return;
    o = { [c]: p };
  }
  o && (delete t.allOf, So(t, o));
}
function n0(t, i) {
  const a = t.seen.get(i);
  if (!a)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const o = (p) => {
    const m = t.seen.get(p);
    if (m.ref === null)
      return;
    const g = m.def ?? m.schema, b = { ...g }, x = m.ref;
    if (m.ref = null, x) {
      o(x);
      const v = t.seen.get(x), S = v.schema;
      if (S.$ref && (t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0") ? (g.allOf = g.allOf ?? [], g.allOf.push(S)) : So(g, S), So(g, b), p._zod.parent === x)
        for (const E in g)
          E === "$ref" || E === "allOf" || E in b || delete g[E];
      if (S.$ref && v.def)
        for (const E in g)
          E === "$ref" || E === "allOf" || E in v.def && JSON.stringify(g[E]) === JSON.stringify(v.def[E]) && delete g[E];
    }
    const w = p._zod.parent;
    if (w && w !== x) {
      o(w);
      const v = t.seen.get(w);
      if (v?.schema.$ref && (g.$ref = v.schema.$ref, v.def))
        for (const S in g)
          S === "$ref" || S === "allOf" || S in v.def && JSON.stringify(g[S]) === JSON.stringify(v.def[S]) && delete g[S];
    }
    t.override({
      zodSchema: p,
      jsonSchema: g,
      path: m.path ?? []
    });
  };
  if (!t.external || t.sharedEmitDoneFor !== t.external) {
    for (const p of [...t.seen.entries()].reverse())
      o(p[0]);
    if (t.target !== "openapi-3.0")
      for (const p of t.seen.entries())
        e0(p[1].def ?? p[1].schema);
    for (const p of t.deferred)
      p();
    if (t.intersections.length) {
      const p = /* @__PURE__ */ new Map();
      for (const m of t.seen.values())
        for (const g of [m.schema, m.def]) {
          const b = g?.allOf;
          if (!Array.isArray(b))
            continue;
          const x = p.get(b);
          x ? x.push(g) : p.set(b, [g]);
        }
      for (const m of t.intersections)
        for (const g of p.get(m) ?? [])
          qj(g);
    }
  }
  const s = {};
  if (t.target === "draft-2020-12" ? s.$schema = "https://json-schema.org/draft/2020-12/schema" : t.target === "draft-07" ? s.$schema = "http://json-schema.org/draft-07/schema#" : t.target === "draft-04" ? s.$schema = "http://json-schema.org/draft-04/schema#" : t.target, t.external?.uri) {
    const p = t.external.registry.get(i)?.id;
    if (!p)
      throw new Error("Schema is missing an `id` property");
    s.$id = t.external.uri(p);
  }
  So(s, a.defId ? a.schema : a.def ?? a.schema);
  const c = t.metadataRegistry.get(i)?.id;
  c !== void 0 && s.id === c && delete s.id;
  const f = t.external?.defs ?? {};
  if (!t.external || t.sharedEmitDoneFor !== t.external)
    for (const p of t.seen.entries()) {
      const m = p[1];
      m.def && m.defId && (m.def.id === m.defId && delete m.def.id, xa(f, m.defId, m.def));
    }
  t.external && (t.sharedEmitDoneFor = t.external), t.external || Object.keys(f).length > 0 && (t.target === "draft-2020-12" ? s.$defs = f : s.definitions = f);
  try {
    const p = JSON.parse(JSON.stringify(s));
    return Object.defineProperty(p, "~standard", {
      value: {
        ...i["~standard"],
        jsonSchema: {
          input: Eu(i, "input", t.processors),
          output: Eu(i, "output", t.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), p;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function fn(t, i) {
  const a = i ?? { seen: /* @__PURE__ */ new Set() };
  if (a.seen.has(t))
    return !1;
  a.seen.add(t);
  const o = t._zod.def;
  if (o.type === "transform")
    return !0;
  if (o.type === "array")
    return fn(o.element, a);
  if (o.type === "set")
    return fn(o.valueType, a);
  if (o.type === "lazy")
    return fn(o.getter(), a);
  if (o.type === "promise" || o.type === "optional" || o.type === "nonoptional" || o.type === "nullable" || o.type === "readonly" || o.type === "default" || o.type === "prefault" || o.type === "catch")
    return fn(o.innerType, a);
  if (o.type === "intersection")
    return fn(o.left, a) || fn(o.right, a);
  if (o.type === "record" || o.type === "map")
    return fn(o.keyType, a) || fn(o.valueType, a);
  if (o.type === "pipe")
    return t._zod.traits.has("$ZodCodec") ? !0 : fn(o.in, a) || fn(o.out, a);
  if (o.type === "object") {
    for (const s in o.shape)
      if (fn(o.shape[s], a))
        return !0;
    return !1;
  }
  if (o.type === "union") {
    for (const s of o.options)
      if (fn(s, a))
        return !0;
    return !1;
  }
  if (o.type === "tuple") {
    for (const s of o.items)
      if (fn(s, a))
        return !0;
    return !!(o.rest && fn(o.rest, a));
  }
  return !1;
}
const $j = (t, i = {}) => (a) => {
  const o = J1({ ...a, processors: i });
  return Pt(t, o), W1(o, t), n0(o, t);
}, Eu = (t, i, a = {}) => (o) => {
  const { libraryOptions: s, target: c } = o ?? {}, f = J1({ ...s ?? {}, target: c, io: i, processors: a });
  return Pt(t, f), W1(f, t), n0(f, t);
}, pl = (t, i, a) => {
  (t[i] === void 0 || a > t[i]) && (t[i] = a);
}, hl = (t, i, a) => {
  (t[i] === void 0 || a < t[i]) && (t[i] = a);
}, iy = (t, i) => {
  pl(t, "minimum", i), hl(t, "maximum", i);
}, i0 = (t, i) => {
  t.multipleOf ?? (t.multipleOf = []), t.multipleOf.includes(i) || t.multipleOf.push(i);
}, r0 = (t, i) => {
  t.patterns ?? (t.patterns = /* @__PURE__ */ new Set()), t.patterns.add(i);
}, a0 = (t, i) => {
  t.mime = t.mime ? t.mime.filter((a) => i.includes(a)) : [...i];
}, l0 = (t, i) => {
  t.format = i, i.includes("int") && (t.isInt = !0);
}, ry = (t, i) => pl(t, "minimum", i.minimum), ay = (t, i) => hl(t, "maximum", i.maximum), ly = (t) => (i, a) => {
  l0(i, a.format);
  const [o, s] = t[a.format];
  pl(i, "minimum", o), hl(i, "maximum", s);
}, Vj = {
  greater_than: (t, i) => pl(t, i.inclusive ? "minimum" : "exclusiveMinimum", i.value),
  less_than: (t, i) => hl(t, i.inclusive ? "maximum" : "exclusiveMaximum", i.value),
  multiple_of: (t, i) => i0(t, i.value),
  number_format: ly(j1),
  bigint_format: ly(uz),
  min_length: ry,
  max_length: ay,
  length_equals: (t, i) => iy(t, i.length),
  min_size: ry,
  max_size: ay,
  size_equals: (t, i) => iy(t, i.size),
  string_format: (t, i) => {
    l0(t, i.format), i.pattern && r0(t, i.pattern), (i.format === "base64" || i.format === "base64url") && (t.contentEncoding = i.format), (i.local || i.precision === -1) && (t.laxFormat = !0);
  },
  mime_type: (t, i) => a0(t, i.mime)
};
function Ei(t) {
  const i = {}, a = t._zod.def, o = t._zod.traits.has("$ZodCheck") ? [t, ...a.checks ?? []] : a.checks ?? [];
  for (const c of o)
    Vj[c._zod.def.check]?.(i, c._zod.def);
  const s = t._zod.bag;
  s.minimum !== void 0 && pl(i, "minimum", s.minimum), s.exclusiveMinimum !== void 0 && pl(i, "exclusiveMinimum", s.exclusiveMinimum), s.maximum !== void 0 && hl(i, "maximum", s.maximum), s.exclusiveMaximum !== void 0 && hl(i, "exclusiveMaximum", s.exclusiveMaximum), s.multipleOf !== void 0 && i0(i, s.multipleOf), s.format !== void 0 && (i.format ?? (i.format = s.format), s.format.includes("int") && (i.isInt = !0)), s.mime && a0(i, s.mime);
  for (const c of s.patterns ?? [])
    r0(i, c);
  return i;
}
const Yj = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, Gj = /* @__PURE__ */ new Map([
  [q1, c_],
  [Mp, f_]
]), Fj = (t) => Gj.get(t) ?? t, Xj = (t, i, a, o) => {
  const s = a;
  s.type = "string";
  const { minimum: c, maximum: f, format: p, patterns: m, contentEncoding: g, laxFormat: b } = Ei(t);
  if (typeof c == "number" && (s.minLength = c), typeof f == "number" && (s.maxLength = f), p && (s.format = Yj[p] ?? p, s.format === "" && delete s.format, (p === "time" || b) && delete s.format), g && (s.contentEncoding = g), m && m.size > 0) {
    const x = [...m].map(Fj);
    x.length === 1 ? s.pattern = x[0].source : x.length > 1 && (s.allOf = [
      ...x.map((w) => ({
        ...i.target === "draft-07" || i.target === "draft-04" || i.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: w.source
      }))
    ]);
  }
}, Qj = (t, i, a, o) => {
  const s = a, { minimum: c, maximum: f, multipleOf: p, exclusiveMaximum: m, exclusiveMinimum: g, isInt: b } = Ei(t);
  s.type = b ? "integer" : "number";
  const x = typeof g == "number" && g >= (c ?? Number.NEGATIVE_INFINITY), w = typeof m == "number" && m <= (f ?? Number.POSITIVE_INFINITY), v = i.target === "draft-04" || i.target === "openapi-3.0";
  if (x ? v ? (s.minimum = g, s.exclusiveMinimum = !0) : s.exclusiveMinimum = g : typeof c == "number" && (s.minimum = c), w ? v ? (s.maximum = m, s.exclusiveMaximum = !0) : s.exclusiveMaximum = m : typeof f == "number" && (s.maximum = f), p) {
    const S = /* @__PURE__ */ new Set();
    for (const O of p)
      Number.isFinite(O) && O !== 0 ? S.add(Math.abs(O)) : xl(t, i, s, o, `A multipleOf divisor of ${O} cannot be represented in JSON Schema`);
    const [j, ...E] = S;
    j !== void 0 && (s.multipleOf = j), E.length && (s.allOf = [...s.allOf ?? [], ...E.map((O) => ({ multipleOf: O }))]);
  }
}, Pj = (t, i, a, o) => {
  a.type = "boolean";
}, Kj = (t, i, a, o) => {
  a.not = {};
}, Jj = (t, i, a, o) => {
}, Wj = (t, i, a, o) => {
  const s = t._zod.def, c = Kd(s.entries);
  if (c.length === 0) {
    a.not = {};
    return;
  }
  c.every((f) => typeof f == "number") && (a.type = "number"), c.every((f) => typeof f == "string") && (a.type = "string"), a.enum = c;
}, e3 = (t, i, a, o) => {
  xl(t, i, a, o, "Custom types cannot be represented in JSON Schema");
}, t3 = (t, i, a, o) => {
  xl(t, i, a, o, "Transforms cannot be represented in JSON Schema");
}, n3 = (t, i, a, o) => {
  const s = a, c = t._zod.def, { minimum: f, maximum: p } = Ei(t);
  typeof f == "number" && (s.minItems = f), typeof p == "number" && (s.maxItems = p), s.type = "array", s.items = Pt(c.element, i, {
    ...o,
    path: [...o.path, "items"]
  });
};
function rp(t) {
  const i = t._zod.def;
  return i.type === "pipe" && i.in._zod.traits.has("$ZodTransform") ? rp(i.out) : i.type === "catch" ? rp(i.innerType) : t._zod.optin;
}
const i3 = (t, i, a, o) => {
  const s = a, c = t._zod.def, f = c.shape;
  if (Object.getOwnPropertySymbols(f).length && xl(t, i, s, o, "Symbol keys cannot be represented in JSON Schema"))
    return;
  s.type = "object", s.properties = {};
  for (const g in f)
    xa(s.properties, g, Pt(f[g], i, {
      ...o,
      path: [...o.path, "properties", g]
    }));
  const m = [];
  for (const g of Object.keys(f)) {
    const b = c.shape[g];
    (i.io === "input" ? rp(b) === void 0 : b._zod.optout === void 0) && m.push(g);
  }
  m.length > 0 && (s.required = m), c.catchall?._zod.def.type === "never" ? s.additionalProperties = !1 : c.catchall ? c.catchall && (s.additionalProperties = Pt(c.catchall, i, {
    ...o,
    path: [...o.path, "additionalProperties"]
  })) : i.io === "output" && (s.additionalProperties = !1);
}, r3 = (t, i, a, o) => {
  const s = t._zod.def, c = s.inclusive === !1, f = s.options.map((p, m) => Pt(p, i, {
    ...o,
    path: [...o.path, c ? "oneOf" : "anyOf", m]
  }));
  c ? a.oneOf = f : a.anyOf = f;
}, a3 = (t, i, a, o) => {
  const s = t._zod.def, c = Pt(s.left, i, {
    ...o,
    path: [...o.path, "allOf", 0]
  }), f = Pt(s.right, i, {
    ...o,
    path: [...o.path, "allOf", 1]
  }), p = (g) => "allOf" in g && Object.keys(g).length === 1, m = [
    ...p(c) ? c.allOf : [c],
    ...p(f) ? f.allOf : [f]
  ];
  a.allOf = m, i.intersections.push(m);
}, l3 = (t, i, a, o) => {
  const s = t._zod.def, c = Pt(s.innerType, i, o), f = i.seen.get(t);
  i.target === "openapi-3.0" ? (f.ref = s.innerType, a.nullable = !0) : a.anyOf = [c, { type: "null" }];
}, o3 = (t, i, a, o) => {
  const s = t._zod.def;
  Pt(s.innerType, i, o);
  const c = i.seen.get(t);
  c.ref = s.innerType;
}, Rp = /* @__PURE__ */ Symbol();
function o0(t, i, a, o, s) {
  let c = !1;
  const f = JSON.stringify(t, (p, m) => typeof m != "bigint" ? m : (c = !0, null));
  return c ? (xl(i, a, o, s, "BigInt defaults cannot be represented in JSON Schema"), Rp) : JSON.parse(f);
}
const s3 = (t, i, a, o) => {
  const s = t._zod.def;
  Pt(s.innerType, i, o);
  const c = i.seen.get(t);
  c.ref = s.innerType;
  const f = o0(s.defaultValue, t, i, a, o);
  f !== Rp && (a.default = f);
}, u3 = (t, i, a, o) => {
  const s = t._zod.def;
  Pt(s.innerType, i, o);
  const c = i.seen.get(t);
  if (c.ref = s.innerType, i.io !== "input")
    return;
  const f = o0(s.defaultValue, t, i, a, o);
  f !== Rp && (a._prefault = f);
}, c3 = (t, i, a, o) => {
  const s = t._zod.def;
  Pt(s.innerType, i, o);
  const c = i.seen.get(t);
  c.ref = s.innerType;
  let f;
  try {
    f = s.catchValue(void 0);
  } catch {
    xl(t, i, a, o, "Dynamic catch values are not supported in JSON Schema");
    return;
  }
  a.default = f;
}, f3 = (t, i, a, o) => {
  const s = t._zod.def, c = s.in._zod.traits.has("$ZodTransform"), f = i.io === "input" ? c ? s.out : s.in : s.out;
  Pt(f, i, o);
  const p = i.seen.get(t);
  p.ref = f;
}, d3 = (t, i, a, o) => {
  const s = t._zod.def;
  Pt(s.innerType, i, o);
  const c = i.seen.get(t);
  c.ref = s.innerType, a.readOnly = !0;
}, s0 = (t, i, a, o) => {
  const s = t._zod.def;
  Pt(s.innerType, i, o);
  const c = i.seen.get(t);
  c.ref = s.innerType;
}, oy = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
function uu(t, i, a) {
  Object.defineProperty(t, i, {
    configurable: !0,
    enumerable: !1,
    get() {
      const o = a(this);
      return Object.defineProperty(this, i, { value: o, configurable: !0, writable: !0 }), o;
    },
    set(o) {
      Object.defineProperty(this, i, { value: o, configurable: !0, writable: !0 });
    }
  });
}
const p3 = (t, i) => {
  Az.init(t, i), t.name = "ZodError";
  const a = Object.getPrototypeOf(t);
  oy.has(a) || (oy.add(a), uu(a, "format", (o) => (s) => Mz(o, s)), uu(a, "flatten", (o) => (s) => Dz(o, s)), uu(a, "addIssue", (o) => (s) => {
    o.issues.push(s), o.message = JSON.stringify(o.issues, Jd, 2);
  }), uu(a, "addIssues", (o) => (s) => {
    o.issues.push(...s), o.message = JSON.stringify(o.issues, Jd, 2);
  }), Object.defineProperty(a, "isEmpty", {
    configurable: !0,
    enumerable: !1,
    get() {
      return this.issues.length === 0;
    }
  }));
}, Kn = /* @__PURE__ */ K("ZodError", p3, void 0, {
  Parent: Error
}), h3 = /* @__PURE__ */ Cp(Kn), m3 = /* @__PURE__ */ Tp(Kn), g3 = /* @__PURE__ */ Np(Kn), x3 = /* @__PURE__ */ Ap(Kn), b3 = /* @__PURE__ */ Hz(Kn), y3 = /* @__PURE__ */ Zz(Kn), v3 = /* @__PURE__ */ qz(Kn), w3 = /* @__PURE__ */ $z(Kn), k3 = /* @__PURE__ */ Vz(Kn), S3 = /* @__PURE__ */ Yz(Kn), z3 = /* @__PURE__ */ Gz(Kn), _3 = /* @__PURE__ */ Fz(Kn);
function j3() {
  Ti.localeError || Ur(G4());
}
function Up() {
  Ti.memoizer || Ur({ memoizer: $4() });
}
const kt = /* @__PURE__ */ K("ZodType", (t, i) => (j3(), wt.init(t, i), t.def = i, t.type = i.type, t), {
  check(...t) {
    const i = this.def;
    return this.clone(Ln(i, {
      checks: [
        ...i.checks ?? [],
        ...t.map((a) => typeof a == "function" ? { _zod: { check: a, def: { check: "custom" }, onattach: [] } } : a)
      ]
    }), { parent: !0 });
  },
  with(...t) {
    return this.check(...t);
  },
  clone(t, i) {
    return Rr(this, t, i);
  },
  brand() {
    return this;
  },
  register(t, i) {
    return t.add(this, i), this;
  },
  refine(t, i) {
    return this.check(kE(t, i));
  },
  superRefine(t, i) {
    return this.check(SE(t, i));
  },
  overwrite(t) {
    return this.check(/* @__PURE__ */ gl(t));
  },
  optional() {
    return cy(this);
  },
  exactOptional() {
    return uE(this);
  },
  nullable() {
    return fy(this);
  },
  nullish() {
    return cy(fy(this));
  },
  nonoptional(t) {
    return mE(this, t);
  },
  array() {
    return Bn(this);
  },
  or(t) {
    return rE([this, t]);
  },
  and(t) {
    return lE(this, t);
  },
  transform(t) {
    return dy(this, sE(t));
  },
  default(t) {
    return dE(this, t);
  },
  prefault(t) {
    return hE(this, t);
  },
  catch(t) {
    return xE(this, t);
  },
  pipe(t) {
    return dy(this, t);
  },
  readonly() {
    return vE(this);
  },
  describe(t) {
    const i = this.clone();
    return wo.add(i, { description: t }), i;
  },
  meta(...t) {
    if (t.length === 0)
      return wo.get(this);
    const i = this.clone();
    return wo.add(i, t[0]), i;
  },
  isOptional() {
    return this.safeParse(void 0).success;
  },
  isNullable() {
    return this.safeParse(null).success;
  },
  apply(t, ...i) {
    return i.length === 0 ? t(this) : t(this, ...i);
  },
  // Overrides core's `~standard` to add `jsonSchema`. Must stay a prototype entry: redefining it per instance demotes instances to dictionary mode.
  get "~standard"() {
    return T1(this, "~standard", {
      ...L1(this),
      jsonSchema: {
        input: Eu(this, "input"),
        output: Eu(this, "output")
      }
    });
  },
  set "~standard"(t) {
    Mr(this, "~standard", t);
  },
  parse: function t(i, a) {
    return h3(this, i, a, { callee: t });
  },
  parseAsync: async function t(i, a) {
    return await m3(this, i, a, { callee: t });
  },
  safeParse(t, i) {
    return g3(this, t, i);
  },
  async safeParseAsync(t, i) {
    return x3(this, t, i);
  },
  // `spa` is an alias: same function object as `safeParseAsync`, as before.
  get spa() {
    return this?.safeParseAsync;
  },
  set spa(t) {
    Mr(this, "spa", t);
  },
  validate(t, i) {
    return Lz(this, t, i);
  },
  validateAsync(t, i) {
    return Iz(this, t, i);
  },
  encode: function t(i, a) {
    return b3(this, i, a, { callee: t });
  },
  decode: function t(i, a) {
    return y3(this, i, a, { callee: t });
  },
  encodeAsync: async function t(i, a) {
    return await v3(this, i, a, { callee: t });
  },
  decodeAsync: async function t(i, a) {
    return await w3(this, i, a, { callee: t });
  },
  safeEncode(t, i) {
    return k3(this, t, i);
  },
  safeDecode(t, i) {
    return S3(this, t, i);
  },
  async safeEncodeAsync(t, i) {
    return z3(this, t, i);
  },
  async safeDecodeAsync(t, i) {
    return _3(this, t, i);
  },
  toJSONSchema(t) {
    return $j(this, {})(t);
  },
  // Reads through to the registry on every access, so it must not cache.
  get description() {
    return wo.get(this)?.description;
  },
  // No setter: `schema._def = x` throws, as it did when `_def` was a non-writable own property.
  get _def() {
    return this._zod.def;
  }
}), u0 = /* @__PURE__ */ K(
  "_ZodString",
  (t, i) => {
    Dp.init(t, i), kt.init(t, i), t._zod.processJSONSchema = (a, o, s) => Xj(t, a, o);
  },
  /* @__PURE__ */ N1({
    format: (t) => Ei(t).format ?? null,
    minLength: (t) => Ei(t).minimum ?? null,
    maxLength: (t) => Ei(t).maximum ?? null
  }, {
    regex(...t) {
      return this.check(/* @__PURE__ */ Ej(...t));
    },
    includes(...t) {
      return this.check(/* @__PURE__ */ Nj(...t));
    },
    startsWith(...t) {
      return this.check(/* @__PURE__ */ Aj(...t));
    },
    endsWith(...t) {
      return this.check(/* @__PURE__ */ Oj(...t));
    },
    min(...t) {
      return this.check(/* @__PURE__ */ ju(...t));
    },
    max(...t) {
      return this.check(/* @__PURE__ */ P1(...t));
    },
    length(...t) {
      return this.check(/* @__PURE__ */ K1(...t));
    },
    nonempty(...t) {
      return this.check(/* @__PURE__ */ ju(1, ...t));
    },
    lowercase(t) {
      return this.check(/* @__PURE__ */ Cj(t));
    },
    uppercase(t) {
      return this.check(/* @__PURE__ */ Tj(t));
    },
    trim() {
      return this.check(/* @__PURE__ */ Mj());
    },
    normalize(...t) {
      return this.check(/* @__PURE__ */ Dj(...t));
    },
    toLowerCase() {
      return this.check(/* @__PURE__ */ Rj());
    },
    toUpperCase() {
      return this.check(/* @__PURE__ */ Uj());
    },
    slugify() {
      return this.check(/* @__PURE__ */ Lj());
    }
  })
), E3 = /* @__PURE__ */ K("ZodString", (t, i) => {
  Dp.init(t, i), u0.init(t, i);
}, {
  email(t) {
    return this.check(/* @__PURE__ */ P4(O3, t));
  },
  url(t) {
    return this.check(/* @__PURE__ */ nj(M3, t));
  },
  jwt(t) {
    return this.check(/* @__PURE__ */ xj(Q3, t));
  },
  emoji(t) {
    return this.check(/* @__PURE__ */ ij(R3, t));
  },
  guid(t) {
    return this.check(/* @__PURE__ */ K4(D3, t));
  },
  uuid(t) {
    return this.check(/* @__PURE__ */ J4(cu, t));
  },
  uuidv4(t) {
    return this.check(/* @__PURE__ */ W4(cu, t));
  },
  uuidv6(t) {
    return this.check(/* @__PURE__ */ ej(cu, t));
  },
  uuidv7(t) {
    return this.check(/* @__PURE__ */ tj(cu, t));
  },
  nanoid(t) {
    return this.check(/* @__PURE__ */ rj(U3, t));
  },
  cuid(t) {
    return this.check(/* @__PURE__ */ aj(L3, t));
  },
  cuid2(t) {
    return this.check(/* @__PURE__ */ lj(B3, t));
  },
  ulid(t) {
    return this.check(/* @__PURE__ */ oj(I3, t));
  },
  base64(t) {
    return this.check(/* @__PURE__ */ hj(G3, t));
  },
  base64url(t) {
    return this.check(/* @__PURE__ */ mj(F3, t));
  },
  xid(t) {
    return this.check(/* @__PURE__ */ sj(H3, t));
  },
  ksuid(t) {
    return this.check(/* @__PURE__ */ uj(Z3, t));
  },
  ipv4(t) {
    return this.check(/* @__PURE__ */ cj(q3, t));
  },
  ipv6(t) {
    return this.check(/* @__PURE__ */ fj($3, t));
  },
  cidrv4(t) {
    return this.check(/* @__PURE__ */ dj(V3, t));
  },
  cidrv6(t) {
    return this.check(/* @__PURE__ */ pj(Y3, t));
  },
  e164(t) {
    return this.check(/* @__PURE__ */ gj(X3, t));
  },
  datetime(t) {
    return this.check(/* @__PURE__ */ bj(C3, t));
  },
  date(t) {
    return this.check(/* @__PURE__ */ yj(T3, t));
  },
  time(t) {
    return this.check(/* @__PURE__ */ vj(N3, t));
  },
  duration(t) {
    return this.check(/* @__PURE__ */ wj(A3, t));
  }
});
function se(t) {
  return /* @__PURE__ */ Q4(E3, t);
}
const ht = /* @__PURE__ */ K("ZodStringFormat", (t, i) => {
  ft.init(t, i), u0.init(t, i);
}), C3 = /* @__PURE__ */ K("ZodISODateTime", (t, i) => {
  e4.init(t, i), ht.init(t, i);
}), T3 = /* @__PURE__ */ K("ZodISODate", (t, i) => {
  t4.init(t, i), ht.init(t, i);
}), N3 = /* @__PURE__ */ K("ZodISOTime", (t, i) => {
  n4.init(t, i), ht.init(t, i);
}), A3 = /* @__PURE__ */ K("ZodISODuration", (t, i) => {
  i4.init(t, i), ht.init(t, i);
}), O3 = /* @__PURE__ */ K("ZodEmail", (t, i) => {
  H_.init(t, i), ht.init(t, i);
}), D3 = /* @__PURE__ */ K("ZodGUID", (t, i) => {
  B_.init(t, i), ht.init(t, i);
}), cu = /* @__PURE__ */ K("ZodUUID", (t, i) => {
  I_.init(t, i), ht.init(t, i);
}), M3 = /* @__PURE__ */ K("ZodURL", (t, i) => {
  G_.init(t, i), ht.init(t, i);
}), R3 = /* @__PURE__ */ K("ZodEmoji", (t, i) => {
  F_.init(t, i), ht.init(t, i);
}), U3 = /* @__PURE__ */ K("ZodNanoID", (t, i) => {
  X_.init(t, i), ht.init(t, i);
}), L3 = /* @__PURE__ */ K("ZodCUID", (t, i) => {
  Q_.init(t, i), ht.init(t, i);
}), B3 = /* @__PURE__ */ K("ZodCUID2", (t, i) => {
  P_.init(t, i), ht.init(t, i);
}), I3 = /* @__PURE__ */ K("ZodULID", (t, i) => {
  K_.init(t, i), ht.init(t, i);
}), H3 = /* @__PURE__ */ K("ZodXID", (t, i) => {
  J_.init(t, i), ht.init(t, i);
}), Z3 = /* @__PURE__ */ K("ZodKSUID", (t, i) => {
  W_.init(t, i), ht.init(t, i);
}), q3 = /* @__PURE__ */ K("ZodIPv4", (t, i) => {
  r4.init(t, i), ht.init(t, i);
}), $3 = /* @__PURE__ */ K("ZodIPv6", (t, i) => {
  l4.init(t, i), ht.init(t, i);
}), V3 = /* @__PURE__ */ K("ZodCIDRv4", (t, i) => {
  o4.init(t, i), ht.init(t, i);
}), Y3 = /* @__PURE__ */ K("ZodCIDRv6", (t, i) => {
  u4.init(t, i), ht.init(t, i);
}), G3 = /* @__PURE__ */ K("ZodBase64", (t, i) => {
  c4.init(t, i), ht.init(t, i);
}), F3 = /* @__PURE__ */ K("ZodBase64URL", (t, i) => {
  d4.init(t, i), ht.init(t, i);
}), X3 = /* @__PURE__ */ K("ZodE164", (t, i) => {
  p4.init(t, i), ht.init(t, i);
}), Q3 = /* @__PURE__ */ K("ZodJWT", (t, i) => {
  m4.init(t, i), ht.init(t, i);
}), c0 = /* @__PURE__ */ K(
  "ZodNumber",
  (t, i) => {
    $1.init(t, i), kt.init(t, i), t._zod.processJSONSchema = (a, o, s) => Qj(t, a, o, s), t.isFinite = !0;
  },
  /* @__PURE__ */ N1({
    minValue: (t) => {
      const { minimum: i, exclusiveMinimum: a } = Ei(t);
      return Math.max(i ?? Number.NEGATIVE_INFINITY, a ?? Number.NEGATIVE_INFINITY);
    },
    maxValue: (t) => {
      const { maximum: i, exclusiveMaximum: a } = Ei(t);
      return Math.min(i ?? Number.POSITIVE_INFINITY, a ?? Number.POSITIVE_INFINITY);
    },
    isInt: (t) => {
      const { isInt: i, multipleOf: a } = Ei(t);
      return !!i || !!a?.some(Number.isSafeInteger);
    },
    format: (t) => Ei(t).format ?? null
  }, {
    gt(t, i) {
      return this.check(/* @__PURE__ */ Jb(t, i));
    },
    gte(t, i) {
      return this.check(/* @__PURE__ */ Td(t, i));
    },
    min(t, i) {
      return this.check(/* @__PURE__ */ Td(t, i));
    },
    lt(t, i) {
      return this.check(/* @__PURE__ */ Kb(t, i));
    },
    lte(t, i) {
      return this.check(/* @__PURE__ */ Cd(t, i));
    },
    max(t, i) {
      return this.check(/* @__PURE__ */ Cd(t, i));
    },
    int(t) {
      return this.check(sy(t));
    },
    safe(t) {
      return this.check(sy(t));
    },
    positive(t) {
      return this.check(/* @__PURE__ */ Jb(0, t));
    },
    nonnegative(t) {
      return this.check(/* @__PURE__ */ Td(0, t));
    },
    negative(t) {
      return this.check(/* @__PURE__ */ Kb(0, t));
    },
    nonpositive(t) {
      return this.check(/* @__PURE__ */ Cd(0, t));
    },
    multipleOf(t, i) {
      return this.check(/* @__PURE__ */ Wb(t, i));
    },
    step(t, i) {
      return this.check(/* @__PURE__ */ Wb(t, i));
    },
    finite() {
      return this;
    }
  })
);
function Rn(t) {
  return /* @__PURE__ */ kj(c0, t);
}
const P3 = /* @__PURE__ */ K("ZodNumberFormat", (t, i) => {
  g4.init(t, i), c0.init(t, i);
});
function sy(t) {
  return /* @__PURE__ */ Sj(P3, t);
}
const K3 = /* @__PURE__ */ K("ZodBoolean", (t, i) => {
  x4.init(t, i), kt.init(t, i), t._zod.processJSONSchema = (a, o, s) => Pj(t, a, o);
});
function Ar(t) {
  return /* @__PURE__ */ zj(K3, t);
}
const J3 = /* @__PURE__ */ K("ZodUnknown", (t, i) => {
  b4.init(t, i), kt.init(t, i), t._zod.processJSONSchema = (a, o, s) => Jj();
});
function uy() {
  return /* @__PURE__ */ _j(J3);
}
const W3 = /* @__PURE__ */ K("ZodNever", (t, i) => {
  y4.init(t, i), kt.init(t, i), t._zod.processJSONSchema = (a, o, s) => Kj(t, a, o);
});
function eE(t) {
  return /* @__PURE__ */ jj(W3, t);
}
const tE = /* @__PURE__ */ K("ZodArray", (t, i) => {
  Up(), k4.init(t, i), kt.init(t, i), t._zod.processJSONSchema = (a, o, s) => n3(t, a, o, s), t.element = i.element;
}, {
  min(t, i) {
    return this.check(/* @__PURE__ */ ju(t, i));
  },
  nonempty(t) {
    return this.check(/* @__PURE__ */ ju(1, t));
  },
  max(t, i) {
    return this.check(/* @__PURE__ */ P1(t, i));
  },
  length(t, i) {
    return this.check(/* @__PURE__ */ K1(t, i));
  },
  unwrap() {
    return this.element;
  }
});
function Bn(t, i) {
  return /* @__PURE__ */ Bj(tE, t, i);
}
const nE = /* @__PURE__ */ K("ZodObject", (t, i) => {
  Up(), _4.init(t, i), kt.init(t, i), t._zod.processJSONSchema = (a, o, s) => i3(t, a, o, s), Sz(t, "shape", (a) => a._zod.def.shape, !1);
}, {
  keyof() {
    return Ao(Object.keys(this._zod.def.shape));
  },
  catchall(t) {
    return this.clone(Ln(this._zod.def, { catchall: t }));
  },
  passthrough() {
    return this.clone(Ln(this._zod.def, { catchall: uy() }));
  },
  loose() {
    return this.clone(Ln(this._zod.def, { catchall: uy() }));
  },
  strict() {
    return this.clone(Ln(this._zod.def, { catchall: eE() }));
  },
  strip() {
    return this.clone(Ln(this._zod.def, { catchall: void 0 }));
  },
  extend(t) {
    return dz(this, t);
  },
  safeExtend(t) {
    return pz(this, t);
  },
  merge(t) {
    return hz(this, t);
  },
  pick(t) {
    return cz(this, t);
  },
  omit(t) {
    return fz(this, t);
  },
  partial(...t) {
    return Db(f0, this, t[0]);
  },
  exactPartial(...t) {
    return Db(d0, this, t[0], "exactPartial");
  },
  required(...t) {
    return mz(p0, this, t[0]);
  }
});
function vt(t, i) {
  const a = {
    type: "object",
    shape: t ?? {},
    ...ze(i)
  };
  return new nE(a);
}
const iE = /* @__PURE__ */ K("ZodUnion", (t, i) => {
  j4.init(t, i), kt.init(t, i), t._zod.processJSONSchema = (a, o, s) => r3(t, a, o, s), t.options = i.options;
});
function rE(t, i) {
  return new iE({
    type: "union",
    options: t,
    ...ze(i)
  });
}
const aE = /* @__PURE__ */ K("ZodIntersection", (t, i) => {
  E4.init(t, i), kt.init(t, i), t._zod.processJSONSchema = (a, o, s) => a3(t, a, o, s);
});
function lE(t, i) {
  return new aE({
    type: "intersection",
    left: t,
    right: i
  });
}
const ap = /* @__PURE__ */ K("ZodEnum", (t, i) => {
  C4.init(t, i), kt.init(t, i), t._zod.processJSONSchema = (o, s, c) => Wj(t, o, s), t.enum = i.entries, t.options = [...t._zod.values];
  const a = new Set(Object.keys(i.entries));
  t.extract = (o, s) => {
    const c = {};
    for (const f of o)
      if (a.has(f))
        c[f] = i.entries[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new ap({
      ...i,
      checks: [],
      ...ze(s),
      entries: c
    });
  }, t.exclude = (o, s) => {
    const c = { ...i.entries };
    for (const f of o)
      if (a.has(f))
        delete c[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new ap({
      ...i,
      checks: [],
      ...ze(s),
      entries: c
    });
  };
});
function Ao(t, i) {
  const a = Array.isArray(t) ? Object.fromEntries(t.map((o) => [o, o])) : t;
  return new ap({
    type: "enum",
    entries: a,
    ...ze(i)
  });
}
const oE = /* @__PURE__ */ K("ZodTransform", (t, i) => {
  Up(), T4.init(t, i), kt.init(t, i), t._zod.processJSONSchema = (a, o, s) => t3(t, a, o, s), t._zod.parse = (a, o) => {
    if (o.direction === "backward")
      throw new A1(t.constructor.name);
    a.addIssue = (c) => {
      if (typeof c == "string")
        a.issues.push(No(c, a.value, i));
      else {
        const f = c;
        f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), "input" in f || (f.input = a.value), f.inst ?? (f.inst = t), a.issues.push(No(f));
      }
    };
    const s = i.transform(a.value, a);
    return s instanceof Promise ? s.then((c) => (a.value = c, a)) : (a.value = s, a);
  };
});
function sE(t) {
  return new oE({
    type: "transform",
    transform: t
  });
}
const f0 = /* @__PURE__ */ K("ZodOptional", (t, i) => {
  G1.init(t, i), kt.init(t, i), t._zod.processJSONSchema = (a, o, s) => s0(t, a, o, s), t.unwrap = () => t._zod.def.innerType;
});
function cy(t) {
  return new f0({
    type: "optional",
    innerType: t
  });
}
const d0 = /* @__PURE__ */ K("ZodExactOptional", (t, i) => {
  N4.init(t, i), kt.init(t, i), t._zod.processJSONSchema = (a, o, s) => s0(t, a, o, s), t.unwrap = () => t._zod.def.innerType;
});
function uE(t) {
  return new d0({
    type: "optional",
    innerType: t
  });
}
const cE = /* @__PURE__ */ K("ZodNullable", (t, i) => {
  A4.init(t, i), kt.init(t, i), t._zod.processJSONSchema = (a, o, s) => l3(t, a, o, s), t.unwrap = () => t._zod.def.innerType;
});
function fy(t) {
  return new cE({
    type: "nullable",
    innerType: t
  });
}
const fE = /* @__PURE__ */ K("ZodDefault", (t, i) => {
  O4.init(t, i), kt.init(t, i), t._zod.processJSONSchema = (a, o, s) => s3(t, a, o, s), t.unwrap = () => t._zod.def.innerType, t.removeDefault = t.unwrap;
});
function dE(t, i) {
  return new fE({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof i == "function" ? i() : z1(i);
    }
  });
}
const pE = /* @__PURE__ */ K("ZodPrefault", (t, i) => {
  D4.init(t, i), kt.init(t, i), t._zod.processJSONSchema = (a, o, s) => u3(t, a, o, s), t.unwrap = () => t._zod.def.innerType;
});
function hE(t, i) {
  return new pE({
    type: "prefault",
    innerType: t,
    get defaultValue() {
      return typeof i == "function" ? i() : z1(i);
    }
  });
}
const p0 = /* @__PURE__ */ K("ZodNonOptional", (t, i) => {
  M4.init(t, i), kt.init(t, i), t._zod.processJSONSchema = (a, o, s) => o3(t, a, o, s), t.unwrap = () => t._zod.def.innerType;
});
function mE(t, i) {
  return new p0({
    type: "nonoptional",
    innerType: t,
    ...ze(i)
  });
}
const gE = /* @__PURE__ */ K("ZodCatch", (t, i) => {
  R4.init(t, i), kt.init(t, i), t._zod.processJSONSchema = (a, o, s) => c3(t, a, o, s), t.unwrap = () => t._zod.def.innerType, t.removeCatch = t.unwrap;
});
function xE(t, i) {
  return new gE({
    type: "catch",
    innerType: t,
    catchValue: typeof i == "function" ? i : _z(i)
  });
}
const bE = /* @__PURE__ */ K("ZodPipe", (t, i) => {
  U4.init(t, i), kt.init(t, i), t._zod.processJSONSchema = (a, o, s) => f3(t, a, o, s), t.in = i.in, t.out = i.out;
});
function dy(t, i) {
  return new bE({
    type: "pipe",
    in: t,
    out: i
    // ...util.normalizeParams(params),
  });
}
const yE = /* @__PURE__ */ K("ZodReadonly", (t, i) => {
  L4.init(t, i), kt.init(t, i), t._zod.processJSONSchema = (a, o, s) => d3(t, a, o, s), t.unwrap = () => t._zod.def.innerType;
});
function vE(t) {
  return new yE({
    type: "readonly",
    innerType: t
  });
}
const wE = /* @__PURE__ */ K("ZodCustom", (t, i) => {
  B4.init(t, i), kt.init(t, i), t._zod.processJSONSchema = (a, o, s) => e3(t, a, o, s);
});
function kE(t, i = {}) {
  return /* @__PURE__ */ Ij(wE, t, i);
}
function SE(t, i) {
  return /* @__PURE__ */ Hj(t, i);
}
vt({
  itemId: se(),
  kind: se(),
  revision: Rn(),
  status: se(),
  turnId: se().nullish(),
  text: se().optional(),
  displayText: se().optional(),
  imageRefs: Bn(vt({ id: se(), name: se(), mimeType: se() })).optional(),
  fileRefs: Bn(vt({ id: se(), name: se(), size: Rn() })).optional(),
  summary: Bn(se()).optional(),
  tool: se().optional(),
  args: se().optional(),
  visibleOutput: se().optional(),
  commandText: se().optional(),
  fallbackText: se().optional(),
  statusLine: se().optional(),
  failureReason: se().optional(),
  objective: se().optional(),
  agentPath: se().optional(),
  role: se().optional(),
  childSessionId: se().optional(),
  subagentId: se().optional(),
  reminderAgentId: se().optional(),
  blocking: Ar().optional(),
  durationMs: Rn().optional(),
  recordedAt: se().optional(),
  truncated: Ar().optional(),
  retracted: Ar().optional(),
  label: se().optional(),
  finalSummary: se().optional(),
  outputRef: vt({ id: se(), byteLen: Rn().optional() }).passthrough().optional(),
  patchSummary: vt({ added: Rn(), removed: Rn(), files: Rn() }).optional(),
  result: vt({ text: se().optional(), summary: se().optional() }).passthrough().optional()
});
vt({
  sessionId: se(),
  workspaceRoot: se().nullable(),
  createdAt: se(),
  updatedAt: se(),
  lastActivityAt: se().optional(),
  status: se(),
  activeTurnId: se().nullable(),
  modelId: se().nullable(),
  name: se().optional(),
  title: se().optional(),
  firstUserPrompt: se().optional(),
  branch: se().optional(),
  turnCount: Rn(),
  kind: se().optional(),
  approvalMode: vt({ mode: se() }).passthrough().optional()
});
vt({
  approvalId: se(),
  sessionId: se(),
  toolName: se(),
  rawArgs: se(),
  currentRequirementId: vt({ approvalId: se(), sourceIndex: Rn() }),
  subject: vt({
    kind: se(),
    command: se().optional(),
    path: se().optional(),
    host: se().optional(),
    target: se().optional()
  }),
  availableChoices: Bn(
    vt({
      choiceId: se(),
      label: se(),
      decision: se(),
      scope: se(),
      rulePreview: se().optional(),
      acceptsFeedback: Ar().optional()
    })
  )
});
vt({
  userInputId: se(),
  sessionId: se(),
  questions: Bn(
    vt({
      id: se(),
      header: se(),
      question: se(),
      options: Bn(vt({ label: se(), description: se().optional() })),
      selection: vt({
        mode: Ao(["single", "multiple"]),
        minSelections: Rn().optional(),
        maxSelections: Rn().optional()
      })
    })
  )
});
vt({
  modelId: se(),
  displayLabel: se(),
  providerId: se(),
  isDefault: Ar(),
  isActive: Ar(),
  contextLimit: Rn().nullable(),
  defaultReasoningEffort: se().optional(),
  reasoningEffortVariants: Bn(vt({ tier: se(), description: se().optional() })).optional()
});
const h0 = Ao([
  "none",
  "minimal",
  "low",
  "medium",
  "high",
  "xhigh",
  "max",
  "ultra"
]), Qn = {
  theme: Ao(["muse", "daylight", "moonlight", "grove", "plush", "system"]),
  backgroundIntensity: Rn().min(0).max(100),
  cliPath: se().max(4096),
  recentProjects: Bn(se()),
  trustedProjects: Bn(se()),
  archivedSessionIds: Bn(se()),
  pinnedSessionIds: Bn(se()),
  reasoningEffort: h0,
  fontSize: Ao(["compact", "comfortable", "large"]),
  reduceMotion: Ar(),
  notifyOnCompletion: Ar()
}, zE = vt({
  theme: Qn.theme.default("muse"),
  backgroundIntensity: Qn.backgroundIntensity.default(70),
  cliPath: Qn.cliPath.default(""),
  recentProjects: Qn.recentProjects.default([]),
  trustedProjects: Qn.trustedProjects.default([]),
  archivedSessionIds: Qn.archivedSessionIds.default([]),
  pinnedSessionIds: Qn.pinnedSessionIds.default([]),
  reasoningEffort: Qn.reasoningEffort.default("high"),
  fontSize: Qn.fontSize.default("comfortable"),
  reduceMotion: Qn.reduceMotion.default(!1),
  notifyOnCompletion: Qn.notifyOnCompletion.default(!1)
});
vt(Qn).omit({ trustedProjects: !0, recentProjects: !0 }).partial().strict();
vt({
  questionId: se(),
  selectedLabel: se().optional(),
  selectedLabels: Bn(se()).optional(),
  freeText: se().max(500).optional()
});
function dn({
  label: t,
  children: i,
  onClick: a,
  active: o,
  disabled: s,
  className: c = ""
}) {
  return /* @__PURE__ */ h.jsx(
    "button",
    {
      type: "button",
      className: `icon-button ${o ? "active" : ""} ${c}`,
      title: t,
      "aria-label": t,
      "aria-pressed": o,
      disabled: s,
      onClick: a,
      children: i
    }
  );
}
function Cu({
  title: t,
  children: i,
  onClose: a,
  className: o = ""
}) {
  const s = G.useRef(null);
  return G.useEffect(() => (s.current?.showModal(), () => s.current?.close()), []), /* @__PURE__ */ h.jsxs(
    "dialog",
    {
      ref: s,
      className: `dialog ${o}`,
      "aria-label": t,
      onCancel: a,
      onClick: (c) => {
        if (c.target === c.currentTarget) {
          const f = c.currentTarget.getBoundingClientRect();
          (c.clientX < f.left || c.clientX > f.right || c.clientY < f.top || c.clientY > f.bottom) && a();
        }
      },
      children: [
        /* @__PURE__ */ h.jsxs("header", { className: "dialog-heading", children: [
          /* @__PURE__ */ h.jsx("h2", { children: t }),
          /* @__PURE__ */ h.jsx(dn, { label: "Close dialog", onClick: a, children: /* @__PURE__ */ h.jsx(ha, { size: 18 }) })
        ] }),
        i
      ]
    }
  );
}
function zo({ size: t = 26 }) {
  return /* @__PURE__ */ h.jsx(
    "img",
    {
      className: "muse-mark",
      src: "./muse-logo.png",
      width: t,
      height: t,
      alt: "",
      "aria-hidden": "true"
    }
  );
}
function Ki(t) {
  return t.split(/[\\/]/).filter(Boolean).at(-1) || t;
}
function m0(t) {
  if (!t) return "";
  let i = t;
  for (let o = 0; o < 4; o++) {
    const s = i.replace(/<([a-zA-Z_][\w.-]*)\b[^>]*>[\s\S]*?<\/\1>/g, "");
    if (s === i) break;
    i = s;
  }
  const a = i.lastIndexOf("</");
  if (a !== -1) {
    const o = i.indexOf(">", a);
    o !== -1 && /^<\/[a-zA-Z_][\w.-]*>$/.test(i.slice(a, o + 1)) && (i = i.slice(o + 1));
  }
  return i.replace(/^<[a-zA-Z_][\w.-]*\b[^>]*>[\s\S]*/i, "").trim();
}
function Nd(t) {
  return m0(t).replace(/\s+/g, " ").trim();
}
function _E(t) {
  return m0(t);
}
function _i(t) {
  const i = Nd(t.name) || Nd(t.title) || Nd(t.firstUserPrompt);
  return i ? i.length > 76 ? `${i.slice(0, 76).trimEnd()}…` : i : "Untitled conversation";
}
function g0(t) {
  const i = new Date(t);
  if (Number.isNaN(i.getTime())) return "";
  const a = (Date.now() - i.getTime()) / 6e4;
  return a < 1 ? "Now" : a < 60 ? `${Math.floor(a)}m` : a < 1440 ? `${Math.floor(a / 60)}h` : i.toLocaleDateString(void 0, { month: "short", day: "numeric" });
}
const jE = [
  "none",
  "minimal",
  "low",
  "medium",
  "high",
  "xhigh",
  "max",
  "ultra"
];
function EE({
  draft: t,
  setDraft: i,
  running: a,
  backgroundOnly: o,
  submitting: s,
  connected: c,
  hasProject: f,
  project: p,
  models: m,
  modelId: g,
  preferences: b,
  onModel: x,
  onEffort: w,
  onSubmit: v,
  onCancel: S,
  onError: j
}) {
  const E = G.useRef(null), [O, I] = G.useState(!1), L = G.useRef([]), [V, J] = G.useState(0), [T, X] = G.useState(0), [pe, _e] = G.useState([]), [Z, te] = G.useState(!1), oe = /^\/[a-z-]*$/i.test(t) ? Pd.filter(($) => $.name.startsWith(t.slice(1).toLowerCase())) : [], Ne = p ? /(?:^|\s)@([^\s@]*)$/.exec(t) : null, ue = Ne ? Ne[1] : null, ee = ue && ue.includes("/") ? ue.slice(0, ue.lastIndexOf("/")) : "", W = ue !== null ? (ue.includes("/") ? ue.slice(ue.lastIndexOf("/") + 1) : ue).toLowerCase() : "";
  G.useEffect(() => {
    if (!p || ue === null) {
      _e([]);
      return;
    }
    let $ = !1;
    return window.muse.listFiles(p, ee).then((re) => {
      $ || _e(re);
    }).catch(() => {
      $ || _e([]);
    }), () => {
      $ = !0;
    };
  }, [p, ee, ue !== null]);
  const de = ue !== null ? pe.filter(($) => $.name.toLowerCase().includes(W)).slice(0, 12) : [], ge = !!y1(t), Ae = ($) => {
    i(`/${$} `), P.current?.focus();
  }, z = ($) => {
    if (ue === null) return;
    const re = t.slice(0, t.length - ue.length - 1);
    i(`${re}@${$.path}${$.directory ? "/" : " "}`), P.current?.focus();
  };
  G.useEffect(() => {
    J(0), X(0);
  }, [t]);
  const [Ie, ut] = G.useState([]);
  L.current = Ie;
  const [N, C] = G.useState("queue"), P = G.useRef(null);
  G.useEffect(() => {
    P.current && (P.current.style.height = "auto", P.current.style.height = `${Math.min(P.current.scrollHeight, 200)}px`);
  }, [t]);
  const le = async () => {
    O || s || !c && !ge || !t.trim() && !Ie.length || await v(Ie, N) && ut([]);
  }, xe = async () => {
    try {
      E.current?.click();
    } catch ($) {
      j($ instanceof Error ? $.message : String($));
    }
  }, Te = async ($) => {
    if (!(O || s))
      try {
        if (I(!0), $.length > 5) throw new Error("每次最多选择 5 个文件。");
        if (L.current.length + $.length > 5) throw new Error("每条消息最多 5 个附件。");
        for (const re of $) {
          const ce = /^image\/(png|jpeg|webp|gif)$/.test(re.type);
          let we = ce ? "image" : "file", Bt = ce ? re.type : "application/octet-stream";
          if (!ce && re.size <= 120 * 1024 && /\.(txt|md|csv|json|js|jsx|ts|tsx|py|css|html|xml|yaml|yml|toml|log|sh|ps1|sql|rs|go|java|c|h|cpp)$/i.test(re.name))
            try {
              new TextDecoder("utf-8", { fatal: !0 }).decode(await re.arrayBuffer()).includes("\0") || (we = "text", Bt = "text/plain");
            } catch {
            }
          if (re.size > 10 * 1024 * 1024) throw new Error("单个附件最多 10 MB。");
          const Sn = await new Promise((qe, Ge) => {
            const Nt = new FileReader();
            Nt.onload = () => qe(String(Nt.result)), Nt.onerror = () => Ge(new Error("附件读取失败。")), Nt.readAsDataURL(re);
          }), zn = Sn.slice(Sn.indexOf(",") + 1), dt = await window.muse.uploadImage({ action: "begin", name: re.name, mimeType: Bt, size: re.size });
          try {
            for (let qe = 0; qe < zn.length; qe += 6e4) await window.muse.uploadImage({ action: "chunk", id: dt.id, offset: qe, chunk: zn.slice(qe, qe + 6e4) });
            await window.muse.uploadImage({ action: "finish", id: dt.id }), ut((qe) => [...qe, { id: dt.id, name: re.name, size: re.size, kind: we, preview: ce ? Sn : void 0 }]);
          } catch (qe) {
            throw await window.muse.removeAttachment(dt.id).catch(() => {
            }), qe;
          }
          continue;
        }
        P.current?.focus();
      } catch (re) {
        j(re instanceof Error ? re.message : String(re));
      } finally {
        I(!1);
      }
  };
  return /* @__PURE__ */ h.jsxs("div", { className: "composer-wrap", children: [
    oe.length > 0 && /* @__PURE__ */ h.jsx(
      "div",
      {
        className: "slash-menu",
        role: "listbox",
        id: "composer-commands",
        "aria-label": "Composer commands",
        children: oe.map(($, re) => /* @__PURE__ */ h.jsxs(
          "button",
          {
            type: "button",
            role: "option",
            id: `command-${$.name}`,
            "aria-selected": re === V,
            onMouseDown: (ce) => ce.preventDefault(),
            onClick: () => Ae($.name),
            children: [
              /* @__PURE__ */ h.jsxs("strong", { children: [
                "/",
                $.name
              ] }),
              /* @__PURE__ */ h.jsx("span", { children: $.description })
            ]
          },
          $.name
        ))
      }
    ),
    de.length > 0 && /* @__PURE__ */ h.jsx(
      "div",
      {
        className: "slash-menu mention-menu",
        role: "listbox",
        id: "composer-mentions",
        "aria-label": "Project files",
        children: de.map(($, re) => /* @__PURE__ */ h.jsxs(
          "button",
          {
            type: "button",
            role: "option",
            id: `mention-${$.path}`,
            "aria-selected": re === T,
            onMouseDown: (ce) => ce.preventDefault(),
            onClick: () => z($),
            children: [
              $.directory ? /* @__PURE__ */ h.jsx(Uv, { size: 14 }) : /* @__PURE__ */ h.jsx(pa, { size: 14 }),
              /* @__PURE__ */ h.jsx("strong", { children: $.path }),
              /* @__PURE__ */ h.jsx("span", { children: $.directory ? "Folder" : "File" })
            ]
          },
          $.path
        ))
      }
    ),
    /* @__PURE__ */ h.jsx("div", { className: `sidebar-collapse ${a ? "open" : ""}`, children: /* @__PURE__ */ h.jsx("div", { className: "sidebar-collapse-inner", children: /* @__PURE__ */ h.jsxs("div", { className: "running-line", children: [
      /* @__PURE__ */ h.jsx("span", { className: "working-orb" }),
      /* @__PURE__ */ h.jsxs("span", { children: [
        o ? "Finishing background tasks" : "Muse is working",
        /* @__PURE__ */ h.jsx("span", { className: "animated-dots", children: "…" })
      ] }),
      /* @__PURE__ */ h.jsx("span", { className: "running-hint", children: "Send a follow-up to queue or steer." })
    ] }) }) }),
    /* @__PURE__ */ h.jsxs(
      "form",
      {
        className: `composer ${a ? "is-running" : ""} ${Z ? "is-dragging" : ""}`,
        onDragOver: ($) => {
          $.preventDefault(), Z || te(!0);
        },
        onDragLeave: ($) => {
          $.currentTarget.contains($.relatedTarget) || te(!1);
        },
        onDrop: ($) => {
          $.preventDefault(), te(!1);
          const re = Array.from($.dataTransfer.files);
          re.length && Te(re);
        },
        onSubmit: ($) => {
          $.preventDefault(), le();
        },
        children: [
          Ie.length > 0 && /* @__PURE__ */ h.jsx("div", { className: "attachment-list", children: Ie.map(($) => /* @__PURE__ */ h.jsxs("span", { className: "attachment", children: [
            $.preview ? /* @__PURE__ */ h.jsx("img", { src: $.preview, alt: $.name, style: { width: 48, height: 48, objectFit: "cover", borderRadius: 6 } }) : $.kind === "image" ? /* @__PURE__ */ h.jsx(HS, { size: 14 }) : /* @__PURE__ */ h.jsx(Nv, { size: 14 }),
            /* @__PURE__ */ h.jsx("span", { children: $.name }),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                type: "button",
                "aria-label": `Remove ${$.name}`,
                onClick: () => {
                  window.muse.removeAttachment($.id).catch((re) => j(re.message)), ut((re) => re.filter((ce) => ce.id !== $.id));
                },
                children: /* @__PURE__ */ h.jsx(ha, { size: 12 })
              }
            )
          ] }, $.id)) }),
          /* @__PURE__ */ h.jsx(
            "textarea",
            {
              ref: P,
              onPaste: ($) => {
                const re = Array.from($.clipboardData.files);
                re.length && ($.preventDefault(), Te(re));
              },
              "aria-label": "Message UniPi",
              "aria-controls": oe.length ? "composer-commands" : void 0,
              "aria-activedescendant": oe[V] ? `command-${oe[V].name}` : void 0,
              placeholder: f ? "Ask UniPi about your project…" : "Ask UniPi anything…",
              value: t,
              onChange: ($) => i($.target.value),
              rows: 2,
              spellCheck: !0,
              onKeyDown: ($) => {
                if (oe.length && !$.nativeEvent.isComposing) {
                  if ($.key === "ArrowDown" || $.key === "ArrowUp") {
                    $.preventDefault();
                    const re = (V + ($.key === "ArrowDown" ? 1 : -1) + oe.length) % oe.length;
                    J(re), document.getElementById(`command-${oe[re].name}`)?.scrollIntoView({ block: "nearest" });
                    return;
                  }
                  if ($.key === "Tab" || $.key === "Enter" && !$.shiftKey && !Pd.some((re) => `/${re.name}` === t.toLowerCase())) {
                    $.preventDefault(), Ae(oe[V].name);
                    return;
                  }
                  if ($.key === "Escape") {
                    $.preventDefault(), i(`${t} `);
                    return;
                  }
                }
                if (de.length && !$.nativeEvent.isComposing) {
                  if ($.key === "ArrowDown" || $.key === "ArrowUp") {
                    $.preventDefault();
                    const re = (T + ($.key === "ArrowDown" ? 1 : -1) + de.length) % de.length;
                    X(re), document.getElementById(`mention-${de[re].path}`)?.scrollIntoView({ block: "nearest" });
                    return;
                  }
                  if ($.key === "Tab" || $.key === "Enter" && !$.shiftKey) {
                    $.preventDefault(), z(de[T]);
                    return;
                  }
                  if ($.key === "Escape") {
                    $.preventDefault(), _e([]);
                    return;
                  }
                }
                $.key === "Enter" && !$.shiftKey && !$.nativeEvent.isComposing && ($.preventDefault(), le());
              }
            }
          ),
          /* @__PURE__ */ h.jsx(
            "input",
            {
              ref: E,
              type: "file",
              multiple: !0,
              hidden: !0,
              onChange: async ($) => {
                const re = Array.from($.currentTarget.files || []);
                $.currentTarget.value = "", await Te(re);
              }
            }
          ),
          /* @__PURE__ */ h.jsxs("div", { className: "composer-toolbar", children: [
            /* @__PURE__ */ h.jsxs("div", { className: "composer-tools", children: [
              /* @__PURE__ */ h.jsx(
                dn,
                {
                  label: O ? "正在上传附件…" : "添加附件",
                  disabled: s || O,
                  onClick: () => {
                    xe();
                  },
                  children: /* @__PURE__ */ h.jsx(GS, { size: 17 })
                }
              ),
              /* @__PURE__ */ h.jsx("span", { className: "toolbar-divider" }),
              /* @__PURE__ */ h.jsx(
                mu,
                {
                  label: "Model",
                  className: "model-select",
                  value: g,
                  disabled: s || m.length === 0,
                  onChange: x,
                  icon: /* @__PURE__ */ h.jsx("span", { className: "model-spark", children: "✳" }),
                  options: [
                    ...m.some(($) => $.modelId === g) ? [] : [{ value: g, label: g || "CLI default" }],
                    ...m.map(($) => ({
                      value: $.modelId,
                      label: $.displayLabel || $.modelId
                    }))
                  ]
                }
              ),
              /* @__PURE__ */ h.jsx(
                mu,
                {
                  label: "Reasoning effort",
                  className: "effort-select",
                  value: b.reasoningEffort,
                  onChange: ($) => w($),
                  icon: /* @__PURE__ */ h.jsx(NS, { size: 15, className: "effort-icon" }),
                  options: jE.map(($) => ({
                    value: $,
                    label: $ === "xhigh" ? "Extra high" : $[0].toUpperCase() + $.slice(1)
                  }))
                }
              )
            ] }),
            /* @__PURE__ */ h.jsxs("div", { className: "composer-actions", children: [
              a && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
                /* @__PURE__ */ h.jsx(
                  mu,
                  {
                    label: "Follow-up behavior",
                    value: N,
                    onChange: ($) => C($),
                    options: [
                      { value: "queue", label: "Queue next" },
                      { value: "steer", label: "Steer now" }
                    ]
                  }
                ),
                /* @__PURE__ */ h.jsx(dn, { label: "Stop Muse", onClick: S, children: /* @__PURE__ */ h.jsx(PS, { size: 14, fill: "currentColor" }) })
              ] }),
              /* @__PURE__ */ h.jsx(
                "button",
                {
                  className: "send-button",
                  type: "submit",
                  "aria-label": a ? "Send follow-up" : "Send message",
                  disabled: O || s || !c && !ge || !t.trim() && !Ie.length,
                  children: s ? /* @__PURE__ */ h.jsx("span", { className: "spinner" }) : /* @__PURE__ */ h.jsx(TS, { size: 19, strokeWidth: 2.2 })
                }
              )
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ h.jsxs("div", { className: "composer-footnote", children: [
      /* @__PURE__ */ h.jsx("span", { children: f ? "" : "Select a project when you send your first message." }),
      /* @__PURE__ */ h.jsxs("span", { className: "composer-shortcuts", children: [
        /* @__PURE__ */ h.jsxs("span", { className: "composer-shortcut", children: [
          /* @__PURE__ */ h.jsx("kbd", { children: "↵" }),
          /* @__PURE__ */ h.jsx("span", { children: "Send" })
        ] }),
        /* @__PURE__ */ h.jsx("span", { className: "footnote-dot", "aria-hidden": "true", children: "·" }),
        /* @__PURE__ */ h.jsxs("span", { className: "composer-shortcut", children: [
          /* @__PURE__ */ h.jsx("kbd", { children: "⇧" }),
          /* @__PURE__ */ h.jsx("kbd", { children: "↵" }),
          /* @__PURE__ */ h.jsx("span", { children: "New line" })
        ] })
      ] })
    ] })
  ] });
}
function CE({
  platform: t = "darwin",
  sessions: i,
  onSession: a,
  onNew: o,
  onOpen: s,
  onSettings: c,
  onTheme: f,
  onClose: p
}) {
  const [m, g] = G.useState(""), [b, x] = G.useState(0), w = t === "darwin" ? "⌘" : "Ctrl", v = [
    {
      id: "new",
      group: "Actions",
      title: "New conversation",
      subtitle: "Start a conversation",
      icon: Co,
      shortcut: `${w} N`,
      action: o
    },
    {
      id: "open",
      group: "Actions",
      title: "Open project",
      subtitle: t === "darwin" ? "Choose a folder on your Mac" : "Choose a project folder",
      icon: Dr,
      shortcut: `${w} O`,
      action: s
    },
    {
      id: "settings",
      group: "Actions",
      title: "Open settings",
      subtitle: "Appearance and Muse Code connection",
      icon: o1,
      shortcut: `${w} ,`,
      action: c
    },
    ...i.map((j) => ({
      id: j.sessionId,
      group: "Recent conversations",
      title: _i(j),
      subtitle: j.workspaceRoot ? Ki(j.workspaceRoot) : "Conversation",
      icon: yo,
      shortcut: "",
      action: () => a(j.sessionId)
    })),
    {
      id: "muse",
      group: "Themes",
      title: "Switch to Muse",
      subtitle: "Electric blue",
      icon: Sp,
      shortcut: "",
      action: () => f("muse")
    },
    {
      id: "daylight",
      group: "Themes",
      title: "Switch to Daylight",
      subtitle: "Warm and light",
      icon: p1,
      shortcut: "",
      action: () => f("daylight")
    },
    {
      id: "moonlight",
      group: "Themes",
      title: "Switch to Moonlight",
      subtitle: "Soft and dark",
      icon: Qv,
      shortcut: "",
      action: () => f("moonlight")
    },
    {
      id: "grove",
      group: "Themes",
      title: "Switch to Grove",
      subtitle: "Natural green",
      icon: $v,
      shortcut: "",
      action: () => f("grove")
    },
    {
      id: "plush",
      group: "Themes",
      title: "Switch to Plush",
      subtitle: "Blue mascot close-up",
      icon: Ev,
      shortcut: "",
      action: () => f("plush")
    }
  ].filter(
    (j) => `${j.title} ${j.subtitle}`.toLowerCase().includes(m.toLowerCase())
  ).slice(0, 30);
  G.useEffect(() => {
    const j = v[b];
    j && document.getElementById(`cmd-item-${j.id}`)?.scrollIntoView({ block: "nearest" });
  }, [b, v]);
  const S = (j) => {
    const E = v[j];
    E && (p(), E.action());
  };
  return /* @__PURE__ */ h.jsxs(Cu, { title: "Search", onClose: p, className: "command-dialog", children: [
    /* @__PURE__ */ h.jsxs("div", { className: "command-search", children: [
      /* @__PURE__ */ h.jsx(vu, { size: 19 }),
      /* @__PURE__ */ h.jsx(
        "input",
        {
          autoFocus: !0,
          value: m,
          "aria-label": "Search commands and conversations",
          placeholder: "Search commands and conversations…",
          onChange: (j) => {
            g(j.target.value), x(0);
          },
          onKeyDown: (j) => {
            j.key === "ArrowDown" && (j.preventDefault(), x((E) => Math.min(E + 1, v.length - 1))), j.key === "ArrowUp" && (j.preventDefault(), x((E) => Math.max(0, E - 1))), j.key === "Enter" && (j.preventDefault(), S(b));
          }
        }
      )
    ] }),
    /* @__PURE__ */ h.jsxs("div", { className: "command-results", children: [
      v.map((j, E) => /* @__PURE__ */ h.jsxs(G.Fragment, { children: [
        (E === 0 || v[E - 1].group !== j.group) && /* @__PURE__ */ h.jsx("div", { className: "command-group-heading", children: j.group }),
        /* @__PURE__ */ h.jsxs(
          "button",
          {
            id: `cmd-item-${j.id}`,
            className: E === b ? "selected" : "",
            onClick: () => S(E),
            onMouseEnter: () => x(E),
            children: [
              /* @__PURE__ */ h.jsx(j.icon, { size: 17 }),
              /* @__PURE__ */ h.jsxs("span", { children: [
                /* @__PURE__ */ h.jsx("strong", { children: j.title }),
                /* @__PURE__ */ h.jsx("small", { children: j.subtitle })
              ] }),
              j.shortcut ? /* @__PURE__ */ h.jsx("kbd", { children: j.shortcut }) : /* @__PURE__ */ h.jsx(Or, { size: 14 })
            ]
          }
        )
      ] }, j.id)),
      !v.length && /* @__PURE__ */ h.jsx("div", { className: "command-empty", children: "No matches. Try a project or conversation name." })
    ] }),
    /* @__PURE__ */ h.jsxs("footer", { children: [
      /* @__PURE__ */ h.jsxs("span", { children: [
        /* @__PURE__ */ h.jsx("kbd", { children: "↑" }),
        /* @__PURE__ */ h.jsx("kbd", { children: "↓" }),
        " Navigate"
      ] }),
      /* @__PURE__ */ h.jsxs("span", { children: [
        /* @__PURE__ */ h.jsx("kbd", { children: "↵" }),
        " Open"
      ] }),
      /* @__PURE__ */ h.jsxs("span", { children: [
        /* @__PURE__ */ h.jsx("kbd", { children: "esc" }),
        " Close"
      ] })
    ] })
  ] });
}
function TE(t) {
  let i = 0, a = 0;
  return t.split(`
`).map((o) => {
    const s = /^@@ -(\d+)(?:,\d+)? \+(\d+)(?:,\d+)? @@/.exec(o);
    if (s)
      return i = Number(s[1]), a = Number(s[2]), { kind: "hunk", oldNum: "", newNum: "", text: o };
    if (o.startsWith("---") || o.startsWith("+++") || o.startsWith("diff ") || o.startsWith("index "))
      return { kind: "meta", oldNum: "", newNum: "", text: o };
    if (o.startsWith("+"))
      return { kind: "added", oldNum: "", newNum: a ? String(a++) : "", text: o };
    if (o.startsWith("-"))
      return { kind: "removed", oldNum: i ? String(i++) : "", newNum: "", text: o };
    const c = i ? String(i++) : "", f = a ? String(a++) : "";
    return { kind: "context", oldNum: c, newNum: f, text: o };
  });
}
function NE({
  open: t = !0,
  project: i,
  platform: a = "darwin",
  view: o,
  onClose: s,
  onMentionDiff: c,
  onError: f
}) {
  const [p, m] = G.useState("changes"), [g, b] = G.useState(), [x, w] = G.useState(!1), [v, S] = G.useState(""), [j, E] = G.useState(""), [O, I] = G.useState(""), [L, V] = G.useState(0);
  G.useEffect(() => {
    if (!t) return;
    let T = !1;
    if (b(void 0), E(""), I(""), !!i)
      return w(!0), S(""), window.muse.gitStatus(i).then((X) => {
        T || b(X);
      }).catch((X) => {
        T || S(X.message);
      }).finally(() => {
        T || w(!1);
      }), () => {
        T = !0;
      };
  }, [t, i, o?.session.status, L]), G.useEffect(() => {
    if (!t || !j) return;
    let T = !1;
    return I("Loading diff…"), window.muse.gitDiff(i, j).then((X) => {
      T || I(X);
    }).catch((X) => {
      T || (I(X.message), f(X.message));
    }), () => {
      T = !0;
    };
  }, [t, i, j, f]);
  const J = o?.items.filter(
    (T) => !T.retracted && !["userMessage", "agentMessage", "reasoning"].includes(T.kind)
  ) || [];
  return /* @__PURE__ */ h.jsxs(
    "aside",
    {
      className: "inspector",
      "aria-label": "Project inspector",
      "aria-hidden": !t || void 0,
      inert: t ? void 0 : !0,
      children: [
        /* @__PURE__ */ h.jsxs("header", { children: [
          /* @__PURE__ */ h.jsx("span", { children: "Project inspector" }),
          /* @__PURE__ */ h.jsx(dn, { label: "Close inspector", onClick: s, children: /* @__PURE__ */ h.jsx(ha, { size: 16 }) })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "inspector-project", children: [
          /* @__PURE__ */ h.jsx("span", { className: "project-icon", children: /* @__PURE__ */ h.jsx(Dr, { size: 20 }) }),
          /* @__PURE__ */ h.jsxs("div", { children: [
            /* @__PURE__ */ h.jsx("strong", { children: i ? Ki(i) : "No project selected" }),
            /* @__PURE__ */ h.jsx("span", { children: g?.branch ? /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
              /* @__PURE__ */ h.jsx(Bv, { size: 11 }),
              g.branch
            ] }) : "Local project" })
          ] })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "inspector-tabs", role: "tablist", "aria-label": "Inspector view", children: [
          /* @__PURE__ */ h.jsxs("button", { role: "tab", "aria-selected": p === "changes", onClick: () => m("changes"), children: [
            "Changes",
            !!g?.changes.length && /* @__PURE__ */ h.jsx("span", { children: g?.changes.length })
          ] }),
          /* @__PURE__ */ h.jsxs("button", { role: "tab", "aria-selected": p === "activity", onClick: () => m("activity"), children: [
            "Activity",
            J.length > 0 && /* @__PURE__ */ h.jsx("span", { children: J.length })
          ] }),
          /* @__PURE__ */ h.jsx(
            dn,
            {
              label: "Refresh changes",
              disabled: x || !i,
              onClick: () => V((T) => T + 1),
              children: /* @__PURE__ */ h.jsx(r1, { size: 13, className: x ? "spin" : "" })
            }
          )
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "inspector-body", children: [
          p === "changes" && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
            v && /* @__PURE__ */ h.jsx("p", { className: "inline-error", children: v }),
            j ? /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
              /* @__PURE__ */ h.jsxs("div", { className: "diff-header", children: [
                /* @__PURE__ */ h.jsxs("button", { className: "diff-back", onClick: () => E(""), children: [
                  /* @__PURE__ */ h.jsx(AS, { size: 13 }),
                  /* @__PURE__ */ h.jsx("span", { children: j })
                ] }),
                c && /* @__PURE__ */ h.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "diff-ask-button",
                    onClick: () => c(j),
                    children: [
                      "Ask UniPi ",
                      /* @__PURE__ */ h.jsx(Or, { size: 11 })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ h.jsx("pre", { className: "diff-view", children: TE(O).map((T, X) => /* @__PURE__ */ h.jsxs(
                "span",
                {
                  className: T.kind === "added" ? "added" : T.kind === "removed" ? "removed" : T.kind === "hunk" ? "hunk" : T.kind === "meta" ? "meta" : "",
                  children: [
                    /* @__PURE__ */ h.jsx("span", { className: "diff-gutter", "aria-hidden": "true", children: T.newNum || T.oldNum || " " }),
                    T.text || " ",
                    /* @__PURE__ */ h.jsx("br", {})
                  ]
                },
                X
              )) })
            ] }) : /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
              g?.changes.map((T) => {
                const X = T.path.replaceAll("\\", "/");
                return /* @__PURE__ */ h.jsxs(
                  "button",
                  {
                    className: "changed-file",
                    onClick: () => E(T.path),
                    children: [
                      /* @__PURE__ */ h.jsx(pa, { size: 15 }),
                      /* @__PURE__ */ h.jsxs("span", { children: [
                        /* @__PURE__ */ h.jsx("strong", { children: X.split("/").at(-1) }),
                        /* @__PURE__ */ h.jsx("small", { children: X.includes("/") ? X.slice(0, X.lastIndexOf("/")) : "Project root" })
                      ] }),
                      /* @__PURE__ */ h.jsx("b", { className: T.status.includes("D") ? "deleted" : "", children: T.status === "??" ? "U" : T.status }),
                      /* @__PURE__ */ h.jsx(Ci, { size: 12 })
                    ]
                  },
                  T.path
                );
              }),
              !x && !g?.changes.length && !v && /* @__PURE__ */ h.jsxs("div", { className: "inspector-empty", children: [
                /* @__PURE__ */ h.jsx("span", { className: "empty-glyph", children: /* @__PURE__ */ h.jsx(Un, { size: 22, strokeWidth: 1.4 }) }),
                /* @__PURE__ */ h.jsx("h3", { children: i ? g?.isRepository ? "No changes" : "No Git repository" : "Open a project" }),
                /* @__PURE__ */ h.jsx("p", { children: i ? g?.isRepository ? "Your working tree has no changes." : "This folder isn’t a Git repository. Muse can still work with its files." : "Open a project and its changes will appear here." })
              ] }),
              x && !g && /* @__PURE__ */ h.jsxs("div", { className: "inspector-empty", children: [
                /* @__PURE__ */ h.jsx(dl, { className: "spin", size: 20 }),
                /* @__PURE__ */ h.jsx("p", { children: "Reading your workspace…" })
              ] })
            ] })
          ] }),
          p === "activity" && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
            J.map((T) => /* @__PURE__ */ h.jsxs("div", { className: "activity-entry", children: [
              /* @__PURE__ */ h.jsx("span", { children: T.status === "inProgress" ? /* @__PURE__ */ h.jsx(dl, { size: 14, className: "spin" }) : T.status === "completed" ? /* @__PURE__ */ h.jsx(Un, { size: 14 }) : /* @__PURE__ */ h.jsx(ha, { size: 14 }) }),
              /* @__PURE__ */ h.jsxs("div", { children: [
                /* @__PURE__ */ h.jsx("strong", { children: JS(T) }),
                /* @__PURE__ */ h.jsx("p", { children: T.kind === "reminderChild" ? `${T.blocking ? "Keeps the turn open · " : ""}${T.status === "inProgress" ? "Running" : T.status}` : T.statusLine || T.objective || T.fallbackText || T.status })
              ] })
            ] }, T.itemId)),
            !J.length && /* @__PURE__ */ h.jsxs("div", { className: "inspector-empty", children: [
              /* @__PURE__ */ h.jsx("span", { className: "empty-glyph", children: /* @__PURE__ */ h.jsx(wu, { size: 22, strokeWidth: 1.4 }) }),
              /* @__PURE__ */ h.jsx("h3", { children: "No activity yet" }),
              /* @__PURE__ */ h.jsx("p", { children: "Tool calls, file edits, and agent activity appear here." })
            ] })
          ] })
        ] }),
        o?.usage && /* @__PURE__ */ h.jsxs("div", { className: "usage-panel", children: [
          /* @__PURE__ */ h.jsx("span", { className: "eyebrow", children: "SESSION USAGE" }),
          /* @__PURE__ */ h.jsxs("div", { children: [
            /* @__PURE__ */ h.jsx("span", { children: "Input" }),
            /* @__PURE__ */ h.jsx("strong", { children: o.usage.input.toLocaleString() })
          ] }),
          /* @__PURE__ */ h.jsxs("div", { children: [
            /* @__PURE__ */ h.jsx("span", { children: "Output" }),
            /* @__PURE__ */ h.jsx("strong", { children: o.usage.output.toLocaleString() })
          ] }),
          /* @__PURE__ */ h.jsxs("div", { children: [
            /* @__PURE__ */ h.jsx("span", { children: "Total tokens" }),
            /* @__PURE__ */ h.jsx("strong", { children: o.usage.total.toLocaleString() })
          ] })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "inspector-footer", children: [
          /* @__PURE__ */ h.jsxs(
            "button",
            {
              disabled: !i,
              onClick: () => {
                window.muse.revealProject(i).catch((T) => f(T.message));
              },
              children: [
                /* @__PURE__ */ h.jsx(Dr, { size: 14 }),
                a === "win32" ? "Explorer" : a === "linux" ? "Files" : "Finder"
              ]
            }
          ),
          /* @__PURE__ */ h.jsxs(
            "button",
            {
              disabled: !i,
              onClick: () => {
                window.muse.openTerminal(i).catch((T) => f(T.message));
              },
              children: [
                /* @__PURE__ */ h.jsx(wu, { size: 14 }),
                "Terminal"
              ]
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              disabled: !i,
              onClick: () => {
                window.muse.openCli(i).catch((T) => f(T.message));
              },
              children: "Muse Code"
            }
          )
        ] })
      ]
    }
  );
}
const x0 = [
  { id: "muse", label: "Muse", description: "Electric blue", icon: Sp },
  { id: "daylight", label: "Daylight", description: "Warm and light", icon: p1 },
  { id: "moonlight", label: "Moonlight", description: "Soft and dark", icon: Qv },
  { id: "grove", label: "Grove", description: "Natural green", icon: $v },
  { id: "plush", label: "Plush", description: "A playful close-up", icon: Ev }
];
function AE({
  preferences: t,
  status: i,
  version: a,
  platform: o = "darwin",
  onSave: s,
  onClose: c,
  onError: f,
  onReconnect: p,
  initialTab: m
}) {
  const [g, b] = G.useState(m), [x, w] = G.useState(t.cliPath);
  return /* @__PURE__ */ h.jsx(Cu, { title: "Settings", onClose: c, className: "settings-dialog", children: /* @__PURE__ */ h.jsxs("div", { className: "settings-layout", children: [
    /* @__PURE__ */ h.jsxs("nav", { className: "settings-nav", "aria-label": "Settings sections", children: [
      /* @__PURE__ */ h.jsxs(
        "button",
        {
          className: g === "appearance" ? "selected" : "",
          onClick: () => b("appearance"),
          children: [
            /* @__PURE__ */ h.jsx(Sp, { size: 16 }),
            "Appearance"
          ]
        }
      ),
      /* @__PURE__ */ h.jsxs(
        "button",
        {
          className: g === "connection" ? "selected" : "",
          onClick: () => b("connection"),
          children: [
            /* @__PURE__ */ h.jsx(wu, { size: 16 }),
            "Muse Code"
          ]
        }
      ),
      /* @__PURE__ */ h.jsxs("button", { className: g === "about" ? "selected" : "", onClick: () => b("about"), children: [
        /* @__PURE__ */ h.jsx(zo, { size: 16 }),
        "About"
      ] })
    ] }),
    /* @__PURE__ */ h.jsxs("div", { className: "settings-content", children: [
      g === "appearance" && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
        /* @__PURE__ */ h.jsxs("div", { className: "settings-section-heading", children: [
          /* @__PURE__ */ h.jsx("h3", { children: "Appearance" }),
          /* @__PURE__ */ h.jsx("p", { children: "Choose a theme and adjust your workspace." })
        ] }),
        /* @__PURE__ */ h.jsx("div", { className: "theme-grid", children: x0.map((v) => /* @__PURE__ */ h.jsxs(
          "button",
          {
            className: `theme-card ${t.theme === v.id ? "selected" : ""}`,
            onClick: () => s({ theme: v.id }),
            "aria-pressed": t.theme === v.id,
            children: [
              /* @__PURE__ */ h.jsxs(
                "div",
                {
                  className: `theme-thumbnail ${v.id === "muse" ? "muse-thumbnail" : ""}`,
                  children: [
                    /* @__PURE__ */ h.jsx(
                      "img",
                      {
                        src: v.id === "muse" ? "./muse-logo.png" : `./themes/${v.id}.png`,
                        alt: `${v.label} background`
                      }
                    ),
                    t.theme === v.id && /* @__PURE__ */ h.jsx("span", { className: "theme-check", children: /* @__PURE__ */ h.jsx(Un, { size: 13 }) })
                  ]
                }
              ),
              /* @__PURE__ */ h.jsxs("span", { className: "theme-name", children: [
                /* @__PURE__ */ h.jsx(v.icon, { size: 14 }),
                v.label
              ] }),
              /* @__PURE__ */ h.jsx("span", { className: "theme-description", children: v.description })
            ]
          },
          v.id
        )) }),
        /* @__PURE__ */ h.jsxs("label", { className: "setting-row", children: [
          /* @__PURE__ */ h.jsxs("div", { children: [
            /* @__PURE__ */ h.jsxs("span", { className: "setting-label", children: [
              /* @__PURE__ */ h.jsx(qS, { size: 16 }),
              o === "darwin" ? "Follow macOS appearance" : "Follow system appearance"
            ] }),
            /* @__PURE__ */ h.jsx("small", { children: "Use Daylight in light mode and Moonlight in dark mode." })
          ] }),
          /* @__PURE__ */ h.jsx(
            "input",
            {
              className: "switch",
              type: "checkbox",
              checked: t.theme === "system",
              onChange: (v) => s({ theme: v.target.checked ? "system" : "daylight" })
            }
          )
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "setting-row", children: [
          /* @__PURE__ */ h.jsxs("div", { children: [
            /* @__PURE__ */ h.jsx("span", { className: "setting-label", children: "Background intensity" }),
            /* @__PURE__ */ h.jsx("small", { children: "Adjust the visibility of the logo and illustrations." })
          ] }),
          /* @__PURE__ */ h.jsxs("div", { className: "range-setting", children: [
            /* @__PURE__ */ h.jsx(
              "input",
              {
                type: "range",
                min: "0",
                max: "100",
                step: "5",
                "aria-label": "Background intensity",
                value: t.backgroundIntensity,
                onChange: (v) => s({ backgroundIntensity: Number(v.target.value) })
              }
            ),
            /* @__PURE__ */ h.jsxs("span", { children: [
              t.backgroundIntensity,
              "%"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "setting-row", children: [
          /* @__PURE__ */ h.jsxs("div", { children: [
            /* @__PURE__ */ h.jsx("span", { className: "setting-label", children: "Text size" }),
            /* @__PURE__ */ h.jsx("small", { children: "Adjust the size of conversation text." })
          ] }),
          /* @__PURE__ */ h.jsx("div", { className: "segmented", children: ["compact", "comfortable", "large"].map((v, S) => /* @__PURE__ */ h.jsx(
            "button",
            {
              "aria-label": `${v} text`,
              "aria-pressed": t.fontSize === v,
              className: t.fontSize === v ? "selected" : "",
              onClick: () => s({ fontSize: v }),
              style: { fontSize: 14 + S * 2 },
              children: "A"
            },
            v
          )) })
        ] }),
        /* @__PURE__ */ h.jsxs("label", { className: "setting-row", children: [
          /* @__PURE__ */ h.jsxs("div", { children: [
            /* @__PURE__ */ h.jsx("span", { className: "setting-label", children: "Reduce motion" }),
            /* @__PURE__ */ h.jsx("small", { children: "Reduce transitions and animations." })
          ] }),
          /* @__PURE__ */ h.jsx(
            "input",
            {
              type: "checkbox",
              className: "switch",
              checked: t.reduceMotion,
              onChange: (v) => s({ reduceMotion: v.target.checked })
            }
          )
        ] }),
        /* @__PURE__ */ h.jsxs("label", { className: "setting-row", children: [
          /* @__PURE__ */ h.jsxs("div", { children: [
            /* @__PURE__ */ h.jsx("span", { className: "setting-label", children: "Completion notifications" }),
            /* @__PURE__ */ h.jsx("small", { children: "Show a notification when a turn finishes in the background." })
          ] }),
          /* @__PURE__ */ h.jsx(
            "input",
            {
              type: "checkbox",
              className: "switch",
              checked: t.notifyOnCompletion,
              onChange: (v) => s({ notifyOnCompletion: v.target.checked })
            }
          )
        ] })
      ] }),
      g === "connection" && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
        /* @__PURE__ */ h.jsxs("div", { className: "settings-section-heading", children: [
          /* @__PURE__ */ h.jsx("h3", { children: "Muse Code connection" }),
          /* @__PURE__ */ h.jsx("p", { children: "UniPi runs your installed CLI and uses its existing sign-in, models, and saved conversations." })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: `connection-card ${i.state}`, children: [
          /* @__PURE__ */ h.jsx(OS, { size: 20 }),
          /* @__PURE__ */ h.jsxs("div", { children: [
            /* @__PURE__ */ h.jsx("strong", { children: i.state === "ready" ? "Muse Code is connected" : i.state === "connecting" ? "Connecting to Muse Code…" : "Muse Code is disconnected" }),
            /* @__PURE__ */ h.jsx("span", { children: i.version ? `Version ${i.version}` : i.message })
          ] }),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: "icon-button",
              "aria-label": "Reconnect to Muse Code",
              onClick: p,
              children: /* @__PURE__ */ h.jsx(r1, { size: 16 })
            }
          )
        ] }),
        i.path && /* @__PURE__ */ h.jsx("p", { className: "path-readout", children: i.path }),
        i.fingerprintWarning && /* @__PURE__ */ h.jsx("p", { className: "inline-notice", children: i.fingerprintWarning }),
        /* @__PURE__ */ h.jsx("label", { className: "field-label", htmlFor: "cli-path", children: "Custom executable path" }),
        /* @__PURE__ */ h.jsxs("div", { className: "input-with-button", children: [
          /* @__PURE__ */ h.jsx(
            "input",
            {
              id: "cli-path",
              className: "text-input",
              placeholder: "Automatic detection (recommended)",
              value: x,
              onChange: (v) => w(v.target.value)
            }
          ),
          /* @__PURE__ */ h.jsxs(
            "button",
            {
              className: "button secondary",
              onClick: () => {
                window.muse.chooseCli().then((v) => {
                  v && w(v);
                }).catch((v) => f(v.message));
              },
              children: [
                /* @__PURE__ */ h.jsx(IS, { size: 15 }),
                "Browse"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ h.jsx("p", { className: "field-hint", children: "Leave empty to find Muse through your login shell and standard installation locations." }),
        /* @__PURE__ */ h.jsx(
          "button",
          {
            className: "button primary",
            onClick: async () => {
              try {
                await window.muse.savePreferences({ cliPath: x.trim() }), p();
              } catch (v) {
                f(v instanceof Error ? v.message : String(v));
              }
            },
            children: "Save & reconnect"
          }
        ),
        /* @__PURE__ */ h.jsxs("div", { className: "setup-instructions", children: [
          /* @__PURE__ */ h.jsx("h4", { children: "New to Muse Code?" }),
          /* @__PURE__ */ h.jsxs("p", { children: [
            "Install Muse Code using the official instructions, then run",
            " ",
            /* @__PURE__ */ h.jsx("code", { children: "muse login" }),
            " in Terminal. Your credentials stay with the CLI."
          ] }),
          /* @__PURE__ */ h.jsxs(
            "button",
            {
              className: "text-button",
              onClick: () => {
                window.muse.openExternal("https://dev.meta.ai/docs/muse-code").catch((v) => f(v.message));
              },
              children: [
                "Open installation guide ",
                /* @__PURE__ */ h.jsx(Qd, { size: 13 })
              ]
            }
          )
        ] })
      ] }),
      g === "about" && /* @__PURE__ */ h.jsxs("div", { className: "about-settings", children: [
        /* @__PURE__ */ h.jsx("img", { src: "./icon.png", alt: "UniPi mascot" }),
        /* @__PURE__ */ h.jsx("h3", { children: "UniPi" }),
        /* @__PURE__ */ h.jsxs("span", { className: "version-pill", children: [
          "Version ",
          a
        ] }),
        /* @__PURE__ */ h.jsx("p", { children: "An unofficial, open-source companion for Muse Code by Robert Courson." }),
        /* @__PURE__ */ h.jsx(OE, { platform: o, onError: f }),
        /* @__PURE__ */ h.jsxs("div", { className: "about-facts", children: [
          /* @__PURE__ */ h.jsxs("span", { children: [
            o === "win32" ? "Built for Windows" : o === "linux" ? "Built for Linux" : "Built for macOS",
            " ",
            /* @__PURE__ */ h.jsx(Un, { size: 13 })
          ] }),
          /* @__PURE__ */ h.jsxs("span", { children: [
            "Your CLI, your credentials ",
            /* @__PURE__ */ h.jsx(Un, { size: 13 })
          ] }),
          /* @__PURE__ */ h.jsxs("span", { children: [
            "No desktop telemetry ",
            /* @__PURE__ */ h.jsx(Un, { size: 13 })
          ] }),
          /* @__PURE__ */ h.jsxs("span", { children: [
            "MIT licensed source ",
            /* @__PURE__ */ h.jsx(Un, { size: 13 })
          ] })
        ] }),
        /* @__PURE__ */ h.jsx("p", { className: "affiliation-note", children: "Unofficial community software. Not affiliated with, endorsed by, sponsored by, or supported by Meta. Muse Code is a product of Meta. Model requests and tools are handled by your installed CLI under its own settings." }),
        /* @__PURE__ */ h.jsxs(
          "button",
          {
            className: "text-button",
            onClick: () => {
              window.muse.openExternal("https://github.com/vsd269/UniPi").catch((v) => f(v.message));
            },
            children: [
              "Source & issue tracker ",
              /* @__PURE__ */ h.jsx(Qd, { size: 13 })
            ]
          }
        ),
        /* @__PURE__ */ h.jsxs(
          "button",
          {
            className: "text-button",
            onClick: () => {
              window.muse.openExternal("https://meta-models.github.io/muse-code-sdk/").catch((v) => f(v.message));
            },
            children: [
              "Built with the official Muse SDK ",
              /* @__PURE__ */ h.jsx(Ci, { size: 13 })
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
function OE({
  platform: t = "darwin",
  onError: i
}) {
  const [a, o] = G.useState();
  return G.useEffect(() => {
    let s = !0;
    const c = () => {
      window.muse.updateStatus().then((p) => {
        s && o(p);
      }).catch((p) => {
        s && o({
          available: !1,
          canCheck: !1,
          automaticChecks: !1,
          message: p.message
        });
      });
    };
    c();
    const f = window.setInterval(c, 2e3);
    return () => {
      s = !1, window.clearInterval(f);
    };
  }, []), /* @__PURE__ */ h.jsxs("section", { className: "update-settings", "aria-label": "Software updates", children: [
    /* @__PURE__ */ h.jsxs("div", { className: "setting-row", children: [
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("span", { className: "setting-label", children: "Software updates" }),
        /* @__PURE__ */ h.jsx("small", { children: t === "darwin" ? "Signed updates via Sparkle. You choose when to install." : "Updates via GitHub Releases. You choose when to install." })
      ] }),
      /* @__PURE__ */ h.jsx(
        "button",
        {
          className: "button secondary",
          disabled: !a?.canCheck,
          onClick: () => {
            window.muse.checkForUpdates().then(o).catch((s) => i(s.message));
          },
          children: "Check for updates"
        }
      )
    ] }),
    a?.available && /* @__PURE__ */ h.jsxs("label", { className: "setting-row", children: [
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("span", { className: "setting-label", children: "Check automatically" }),
        /* @__PURE__ */ h.jsx("small", { children: "Check GitHub daily for new releases." })
      ] }),
      /* @__PURE__ */ h.jsx(
        "input",
        {
          className: "switch",
          type: "checkbox",
          checked: a.automaticChecks,
          onChange: (s) => {
            window.muse.setAutomaticUpdateChecks(s.target.checked).then(o).catch((c) => i(c.message));
          }
        }
      )
    ] }),
    a?.message && /* @__PURE__ */ h.jsx("p", { className: "field-hint", children: a.message })
  ] });
}
function DE(t, i) {
  const a = {};
  return (t[t.length - 1] === "" ? [...t, ""] : t).join(
    (a.padRight ? " " : "") + "," + (a.padLeft === !1 ? "" : " ")
  ).trim();
}
const ME = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, RE = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, UE = {};
function py(t, i) {
  return (UE.jsx ? RE : ME).test(t);
}
const LE = /[ \t\n\f\r]/g;
function BE(t) {
  return typeof t == "object" ? t.type === "text" ? hy(t.value) : !1 : hy(t);
}
function hy(t) {
  return t.replace(LE, "") === "";
}
class Do {
  /**
   * @param {SchemaType['property']} property
   *   Property.
   * @param {SchemaType['normal']} normal
   *   Normal.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Schema.
   */
  constructor(i, a, o) {
    this.normal = a, this.property = i, o && (this.space = o);
  }
}
Do.prototype.normal = {};
Do.prototype.property = {};
Do.prototype.space = void 0;
function b0(t, i) {
  const a = {}, o = {};
  for (const s of t)
    Object.assign(a, s.property), Object.assign(o, s.normal);
  return new Do(a, o, i);
}
function lp(t) {
  return t.toLowerCase();
}
class kn {
  /**
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @returns
   *   Info.
   */
  constructor(i, a) {
    this.attribute = a, this.property = i;
  }
}
kn.prototype.attribute = "";
kn.prototype.booleanish = !1;
kn.prototype.boolean = !1;
kn.prototype.commaOrSpaceSeparated = !1;
kn.prototype.commaSeparated = !1;
kn.prototype.defined = !1;
kn.prototype.mustUseProperty = !1;
kn.prototype.number = !1;
kn.prototype.overloadedBoolean = !1;
kn.prototype.property = "";
kn.prototype.spaceSeparated = !1;
kn.prototype.space = void 0;
let IE = 0;
const De = ba(), Tt = ba(), op = ba(), ie = ba(), at = ba(), da = ba(), Mn = ba();
function ba() {
  return 2 ** ++IE;
}
const sp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: De,
  booleanish: Tt,
  commaOrSpaceSeparated: Mn,
  commaSeparated: da,
  number: ie,
  overloadedBoolean: op,
  spaceSeparated: at
}, Symbol.toStringTag, { value: "Module" })), Ad = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(sp)
);
class Lp extends kn {
  /**
   * @constructor
   * @param {string} property
   *   Property.
   * @param {string} attribute
   *   Attribute.
   * @param {number | null | undefined} [mask]
   *   Mask.
   * @param {Space | undefined} [space]
   *   Space.
   * @returns
   *   Info.
   */
  constructor(i, a, o, s) {
    let c = -1;
    if (super(i, a), my(this, "space", s), typeof o == "number")
      for (; ++c < Ad.length; ) {
        const f = Ad[c];
        my(this, Ad[c], (o & sp[f]) === sp[f]);
      }
  }
}
Lp.prototype.defined = !0;
function my(t, i, a) {
  a && (t[i] = a);
}
function bl(t) {
  const i = {}, a = {};
  for (const [o, s] of Object.entries(t.properties)) {
    const c = new Lp(
      o,
      t.transform(t.attributes || {}, o),
      s,
      t.space
    );
    t.mustUseProperty && t.mustUseProperty.includes(o) && (c.mustUseProperty = !0), i[o] = c, a[lp(o)] = o, a[lp(c.attribute)] = o;
  }
  return new Do(i, a, t.space);
}
const y0 = bl({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Tt,
    ariaAutoComplete: null,
    ariaBusy: Tt,
    ariaChecked: Tt,
    ariaColCount: ie,
    ariaColIndex: ie,
    ariaColSpan: ie,
    ariaControls: at,
    ariaCurrent: null,
    ariaDescribedBy: at,
    ariaDetails: null,
    ariaDisabled: Tt,
    ariaDropEffect: at,
    ariaErrorMessage: null,
    ariaExpanded: Tt,
    ariaFlowTo: at,
    ariaGrabbed: Tt,
    ariaHasPopup: null,
    ariaHidden: Tt,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: at,
    ariaLevel: ie,
    ariaLive: null,
    ariaModal: Tt,
    ariaMultiLine: Tt,
    ariaMultiSelectable: Tt,
    ariaOrientation: null,
    ariaOwns: at,
    ariaPlaceholder: null,
    ariaPosInSet: ie,
    ariaPressed: Tt,
    ariaReadOnly: Tt,
    ariaRelevant: null,
    ariaRequired: Tt,
    ariaRoleDescription: at,
    ariaRowCount: ie,
    ariaRowIndex: ie,
    ariaRowSpan: ie,
    ariaSelected: Tt,
    ariaSetSize: ie,
    ariaSort: null,
    ariaValueMax: ie,
    ariaValueMin: ie,
    ariaValueNow: ie,
    ariaValueText: null,
    role: null
  },
  transform(t, i) {
    return i === "role" ? i : "aria-" + i.slice(4).toLowerCase();
  }
});
function v0(t, i) {
  return i in t ? t[i] : i;
}
function w0(t, i) {
  return v0(t, i.toLowerCase());
}
const HE = bl({
  attributes: {
    acceptcharset: "accept-charset",
    classname: "class",
    htmlfor: "for",
    httpequiv: "http-equiv"
  },
  mustUseProperty: ["checked", "multiple", "muted", "selected"],
  properties: {
    // Standard Properties.
    abbr: null,
    accept: da,
    acceptCharset: at,
    accessKey: at,
    action: null,
    allow: null,
    allowFullScreen: De,
    allowPaymentRequest: De,
    allowUserMedia: De,
    alpha: De,
    alt: null,
    as: null,
    async: De,
    autoCapitalize: null,
    autoComplete: at,
    autoFocus: De,
    autoPlay: De,
    blocking: at,
    capture: null,
    charSet: null,
    checked: De,
    cite: null,
    className: at,
    closedBy: null,
    colorSpace: null,
    cols: ie,
    colSpan: ie,
    command: null,
    commandFor: null,
    content: null,
    contentEditable: Tt,
    controls: De,
    controlsList: at,
    coords: ie | da,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: De,
    defer: De,
    dir: null,
    dirName: null,
    disabled: De,
    download: op,
    draggable: Tt,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: De,
    formTarget: null,
    headers: at,
    height: ie,
    hidden: op,
    high: ie,
    href: null,
    hrefLang: null,
    htmlFor: at,
    httpEquiv: at,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: De,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: De,
    itemId: null,
    itemProp: at,
    itemRef: at,
    itemScope: De,
    itemType: at,
    kind: null,
    label: null,
    lang: null,
    language: null,
    list: null,
    loading: null,
    loop: De,
    low: ie,
    manifest: null,
    max: null,
    maxLength: ie,
    media: null,
    method: null,
    min: null,
    minLength: ie,
    multiple: De,
    muted: De,
    name: null,
    nonce: null,
    noModule: De,
    noValidate: De,
    onAbort: null,
    onAfterPrint: null,
    onAuxClick: null,
    onBeforeMatch: null,
    onBeforePrint: null,
    onBeforeToggle: null,
    onBeforeUnload: null,
    onBlur: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onContextLost: null,
    onContextMenu: null,
    onContextRestored: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFormData: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLanguageChange: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadEnd: null,
    onLoadStart: null,
    onMessage: null,
    onMessageError: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRejectionHandled: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onScrollEnd: null,
    onSecurityPolicyViolation: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onSlotChange: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnhandledRejection: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onWheel: null,
    open: De,
    optimum: ie,
    pattern: null,
    ping: at,
    placeholder: null,
    playsInline: De,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: De,
    referrerPolicy: null,
    rel: at,
    required: De,
    reversed: De,
    rows: ie,
    rowSpan: ie,
    sandbox: at,
    scope: null,
    scoped: De,
    seamless: De,
    selected: De,
    shadowRootClonable: De,
    shadowRootCustomElementRegistry: De,
    shadowRootDelegatesFocus: De,
    shadowRootMode: null,
    shadowRootSerializable: De,
    shape: null,
    size: ie,
    sizes: null,
    slot: null,
    span: ie,
    spellCheck: Tt,
    src: null,
    srcDoc: null,
    srcLang: null,
    srcSet: null,
    start: ie,
    step: null,
    style: null,
    tabIndex: ie,
    target: null,
    title: null,
    translate: null,
    type: null,
    typeMustMatch: De,
    useMap: null,
    value: Tt,
    width: ie,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: at,
    // `<object>`. List of URIs to archives
    axis: null,
    // `<td>` and `<th>`. Use `scope` on `<th>`
    background: null,
    // `<body>`. Use CSS `background-image` instead
    bgColor: null,
    // `<body>` and table elements. Use CSS `background-color` instead
    border: ie,
    // `<table>`. Use CSS `border-width` instead,
    borderColor: null,
    // `<table>`. Use CSS `border-color` instead,
    bottomMargin: ie,
    // `<body>`
    cellPadding: null,
    // `<table>`
    cellSpacing: null,
    // `<table>`
    char: null,
    // Several table elements. When `align=char`, sets the character to align on
    charOff: null,
    // Several table elements. When `char`, offsets the alignment
    classId: null,
    // `<object>`
    clear: null,
    // `<br>`. Use CSS `clear` instead
    code: null,
    // `<object>`
    codeBase: null,
    // `<object>`
    codeType: null,
    // `<object>`
    color: null,
    // `<font>` and `<hr>`. Use CSS instead
    compact: De,
    // Lists. Use CSS to reduce space between items instead
    declare: De,
    // `<object>`
    event: null,
    // `<script>`
    face: null,
    // `<font>`. Use CSS instead
    frame: null,
    // `<table>`
    frameBorder: null,
    // `<iframe>`. Use CSS `border` instead
    hSpace: ie,
    // `<img>` and `<object>`
    leftMargin: ie,
    // `<body>`
    link: null,
    // `<body>`. Use CSS `a:link {color: *}` instead
    longDesc: null,
    // `<frame>`, `<iframe>`, and `<img>`. Use an `<a>`
    lowSrc: null,
    // `<img>`. Use a `<picture>`
    marginHeight: ie,
    // `<body>`
    marginWidth: ie,
    // `<body>`
    noResize: De,
    // `<frame>`
    noHref: De,
    // `<area>`. Use no href instead of an explicit `nohref`
    noShade: De,
    // `<hr>`. Use background-color and height instead of borders
    noWrap: De,
    // `<td>` and `<th>`
    object: null,
    // `<applet>`
    profile: null,
    // `<head>`
    prompt: null,
    // `<isindex>`
    rev: null,
    // `<link>`
    rightMargin: ie,
    // `<body>`
    rules: null,
    // `<table>`
    scheme: null,
    // `<meta>`
    scrolling: Tt,
    // `<frame>`. Use overflow in the child context
    standby: null,
    // `<object>`
    summary: null,
    // `<table>`
    text: null,
    // `<body>`. Use CSS `color` instead
    topMargin: ie,
    // `<body>`
    valueType: null,
    // `<param>`
    version: null,
    // `<html>`. Use a doctype.
    vAlign: null,
    // Several. Use CSS `vertical-align` instead
    vLink: null,
    // `<body>`. Use CSS `a:visited {color}` instead
    vSpace: ie,
    // `<img>` and `<object>`
    // Non-standard Properties.
    allowTransparency: null,
    autoCorrect: null,
    autoSave: null,
    credentialless: De,
    disablePictureInPicture: De,
    disableRemotePlayback: De,
    exportParts: da,
    part: at,
    prefix: null,
    property: null,
    results: ie,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: w0
}), ZE = bl({
  attributes: {
    accentHeight: "accent-height",
    alignmentBaseline: "alignment-baseline",
    arabicForm: "arabic-form",
    baselineShift: "baseline-shift",
    capHeight: "cap-height",
    className: "class",
    clipPath: "clip-path",
    clipRule: "clip-rule",
    colorInterpolation: "color-interpolation",
    colorInterpolationFilters: "color-interpolation-filters",
    colorProfile: "color-profile",
    colorRendering: "color-rendering",
    crossOrigin: "crossorigin",
    dataType: "datatype",
    dominantBaseline: "dominant-baseline",
    enableBackground: "enable-background",
    fillOpacity: "fill-opacity",
    fillRule: "fill-rule",
    floodColor: "flood-color",
    floodOpacity: "flood-opacity",
    fontFamily: "font-family",
    fontSize: "font-size",
    fontSizeAdjust: "font-size-adjust",
    fontStretch: "font-stretch",
    fontStyle: "font-style",
    fontVariant: "font-variant",
    fontWeight: "font-weight",
    glyphName: "glyph-name",
    glyphOrientationHorizontal: "glyph-orientation-horizontal",
    glyphOrientationVertical: "glyph-orientation-vertical",
    hrefLang: "hreflang",
    horizAdvX: "horiz-adv-x",
    horizOriginX: "horiz-origin-x",
    horizOriginY: "horiz-origin-y",
    imageRendering: "image-rendering",
    letterSpacing: "letter-spacing",
    lightingColor: "lighting-color",
    markerEnd: "marker-end",
    markerMid: "marker-mid",
    markerStart: "marker-start",
    maskType: "mask-type",
    navDown: "nav-down",
    navDownLeft: "nav-down-left",
    navDownRight: "nav-down-right",
    navLeft: "nav-left",
    navNext: "nav-next",
    navPrev: "nav-prev",
    navRight: "nav-right",
    navUp: "nav-up",
    navUpLeft: "nav-up-left",
    navUpRight: "nav-up-right",
    onAbort: "onabort",
    onActivate: "onactivate",
    onAfterPrint: "onafterprint",
    onBeforePrint: "onbeforeprint",
    onBegin: "onbegin",
    onCancel: "oncancel",
    onCanPlay: "oncanplay",
    onCanPlayThrough: "oncanplaythrough",
    onChange: "onchange",
    onClick: "onclick",
    onClose: "onclose",
    onCopy: "oncopy",
    onCueChange: "oncuechange",
    onCut: "oncut",
    onDblClick: "ondblclick",
    onDrag: "ondrag",
    onDragEnd: "ondragend",
    onDragEnter: "ondragenter",
    onDragExit: "ondragexit",
    onDragLeave: "ondragleave",
    onDragOver: "ondragover",
    onDragStart: "ondragstart",
    onDrop: "ondrop",
    onDurationChange: "ondurationchange",
    onEmptied: "onemptied",
    onEnd: "onend",
    onEnded: "onended",
    onError: "onerror",
    onFocus: "onfocus",
    onFocusIn: "onfocusin",
    onFocusOut: "onfocusout",
    onHashChange: "onhashchange",
    onInput: "oninput",
    onInvalid: "oninvalid",
    onKeyDown: "onkeydown",
    onKeyPress: "onkeypress",
    onKeyUp: "onkeyup",
    onLoad: "onload",
    onLoadedData: "onloadeddata",
    onLoadedMetadata: "onloadedmetadata",
    onLoadStart: "onloadstart",
    onMessage: "onmessage",
    onMouseDown: "onmousedown",
    onMouseEnter: "onmouseenter",
    onMouseLeave: "onmouseleave",
    onMouseMove: "onmousemove",
    onMouseOut: "onmouseout",
    onMouseOver: "onmouseover",
    onMouseUp: "onmouseup",
    onMouseWheel: "onmousewheel",
    onOffline: "onoffline",
    onOnline: "ononline",
    onPageHide: "onpagehide",
    onPageShow: "onpageshow",
    onPaste: "onpaste",
    onPause: "onpause",
    onPlay: "onplay",
    onPlaying: "onplaying",
    onPopState: "onpopstate",
    onProgress: "onprogress",
    onRateChange: "onratechange",
    onRepeat: "onrepeat",
    onReset: "onreset",
    onResize: "onresize",
    onScroll: "onscroll",
    onSeeked: "onseeked",
    onSeeking: "onseeking",
    onSelect: "onselect",
    onShow: "onshow",
    onStalled: "onstalled",
    onStorage: "onstorage",
    onSubmit: "onsubmit",
    onSuspend: "onsuspend",
    onTimeUpdate: "ontimeupdate",
    onToggle: "ontoggle",
    onUnload: "onunload",
    onVolumeChange: "onvolumechange",
    onWaiting: "onwaiting",
    onZoom: "onzoom",
    overlinePosition: "overline-position",
    overlineThickness: "overline-thickness",
    paintOrder: "paint-order",
    panose1: "panose-1",
    pointerEvents: "pointer-events",
    referrerPolicy: "referrerpolicy",
    renderingIntent: "rendering-intent",
    shapeRendering: "shape-rendering",
    stopColor: "stop-color",
    stopOpacity: "stop-opacity",
    strikethroughPosition: "strikethrough-position",
    strikethroughThickness: "strikethrough-thickness",
    strokeDashArray: "stroke-dasharray",
    strokeDashOffset: "stroke-dashoffset",
    strokeLineCap: "stroke-linecap",
    strokeLineJoin: "stroke-linejoin",
    strokeMiterLimit: "stroke-miterlimit",
    strokeOpacity: "stroke-opacity",
    strokeWidth: "stroke-width",
    tabIndex: "tabindex",
    textAnchor: "text-anchor",
    textDecoration: "text-decoration",
    textRendering: "text-rendering",
    transformOrigin: "transform-origin",
    typeOf: "typeof",
    underlinePosition: "underline-position",
    underlineThickness: "underline-thickness",
    unicodeBidi: "unicode-bidi",
    unicodeRange: "unicode-range",
    unitsPerEm: "units-per-em",
    vAlphabetic: "v-alphabetic",
    vHanging: "v-hanging",
    vIdeographic: "v-ideographic",
    vMathematical: "v-mathematical",
    vectorEffect: "vector-effect",
    vertAdvY: "vert-adv-y",
    vertOriginX: "vert-origin-x",
    vertOriginY: "vert-origin-y",
    wordSpacing: "word-spacing",
    writingMode: "writing-mode",
    xHeight: "x-height",
    // These were camelcased in Tiny. Now lowercased in SVG 2
    playbackOrder: "playbackorder",
    timelineBegin: "timelinebegin"
  },
  properties: {
    about: Mn,
    accentHeight: ie,
    accumulate: null,
    additive: null,
    alignmentBaseline: null,
    alphabetic: ie,
    amplitude: ie,
    arabicForm: null,
    ascent: ie,
    attributeName: null,
    attributeType: null,
    azimuth: ie,
    bandwidth: null,
    baselineShift: null,
    baseFrequency: null,
    baseProfile: null,
    bbox: null,
    begin: null,
    bias: ie,
    by: null,
    calcMode: null,
    capHeight: ie,
    className: at,
    clip: null,
    clipPath: null,
    clipPathUnits: null,
    clipRule: null,
    color: null,
    colorInterpolation: null,
    colorInterpolationFilters: null,
    colorProfile: null,
    colorRendering: null,
    content: null,
    contentScriptType: null,
    contentStyleType: null,
    crossOrigin: null,
    cursor: null,
    cx: null,
    cy: null,
    d: null,
    dataType: null,
    defaultAction: null,
    descent: ie,
    diffuseConstant: ie,
    direction: null,
    display: null,
    dur: null,
    divisor: ie,
    dominantBaseline: null,
    download: De,
    dx: null,
    dy: null,
    edgeMode: null,
    editable: null,
    elevation: ie,
    enableBackground: null,
    end: null,
    event: null,
    exponent: ie,
    externalResourcesRequired: null,
    fill: null,
    fillOpacity: ie,
    fillRule: null,
    filter: null,
    filterRes: null,
    filterUnits: null,
    floodColor: null,
    floodOpacity: null,
    focusable: null,
    focusHighlight: null,
    fontFamily: null,
    fontSize: null,
    fontSizeAdjust: null,
    fontStretch: null,
    fontStyle: null,
    fontVariant: null,
    fontWeight: null,
    format: null,
    fr: null,
    from: null,
    fx: null,
    fy: null,
    g1: da,
    g2: da,
    glyphName: da,
    glyphOrientationHorizontal: null,
    glyphOrientationVertical: null,
    glyphRef: null,
    gradientTransform: null,
    gradientUnits: null,
    handler: null,
    hanging: ie,
    hatchContentUnits: null,
    hatchUnits: null,
    height: null,
    href: null,
    hrefLang: null,
    horizAdvX: ie,
    horizOriginX: ie,
    horizOriginY: ie,
    id: null,
    ideographic: ie,
    imageRendering: null,
    initialVisibility: null,
    in: null,
    in2: null,
    intercept: ie,
    k: ie,
    k1: ie,
    k2: ie,
    k3: ie,
    k4: ie,
    kernelMatrix: Mn,
    kernelUnitLength: null,
    keyPoints: null,
    // SEMI_COLON_SEPARATED
    keySplines: null,
    // SEMI_COLON_SEPARATED
    keyTimes: null,
    // SEMI_COLON_SEPARATED
    kerning: null,
    lang: null,
    lengthAdjust: null,
    letterSpacing: null,
    lightingColor: null,
    limitingConeAngle: ie,
    local: null,
    markerEnd: null,
    markerMid: null,
    markerStart: null,
    markerHeight: null,
    markerUnits: null,
    markerWidth: null,
    mask: null,
    maskContentUnits: null,
    maskType: null,
    maskUnits: null,
    mathematical: null,
    max: null,
    media: null,
    mediaCharacterEncoding: null,
    mediaContentEncodings: null,
    mediaSize: ie,
    mediaTime: null,
    method: null,
    min: null,
    mode: null,
    name: null,
    navDown: null,
    navDownLeft: null,
    navDownRight: null,
    navLeft: null,
    navNext: null,
    navPrev: null,
    navRight: null,
    navUp: null,
    navUpLeft: null,
    navUpRight: null,
    numOctaves: null,
    observer: null,
    offset: null,
    onAbort: null,
    onActivate: null,
    onAfterPrint: null,
    onBeforePrint: null,
    onBegin: null,
    onCancel: null,
    onCanPlay: null,
    onCanPlayThrough: null,
    onChange: null,
    onClick: null,
    onClose: null,
    onCopy: null,
    onCueChange: null,
    onCut: null,
    onDblClick: null,
    onDrag: null,
    onDragEnd: null,
    onDragEnter: null,
    onDragExit: null,
    onDragLeave: null,
    onDragOver: null,
    onDragStart: null,
    onDrop: null,
    onDurationChange: null,
    onEmptied: null,
    onEnd: null,
    onEnded: null,
    onError: null,
    onFocus: null,
    onFocusIn: null,
    onFocusOut: null,
    onHashChange: null,
    onInput: null,
    onInvalid: null,
    onKeyDown: null,
    onKeyPress: null,
    onKeyUp: null,
    onLoad: null,
    onLoadedData: null,
    onLoadedMetadata: null,
    onLoadStart: null,
    onMessage: null,
    onMouseDown: null,
    onMouseEnter: null,
    onMouseLeave: null,
    onMouseMove: null,
    onMouseOut: null,
    onMouseOver: null,
    onMouseUp: null,
    onMouseWheel: null,
    onOffline: null,
    onOnline: null,
    onPageHide: null,
    onPageShow: null,
    onPaste: null,
    onPause: null,
    onPlay: null,
    onPlaying: null,
    onPopState: null,
    onProgress: null,
    onRateChange: null,
    onRepeat: null,
    onReset: null,
    onResize: null,
    onScroll: null,
    onSeeked: null,
    onSeeking: null,
    onSelect: null,
    onShow: null,
    onStalled: null,
    onStorage: null,
    onSubmit: null,
    onSuspend: null,
    onTimeUpdate: null,
    onToggle: null,
    onUnload: null,
    onVolumeChange: null,
    onWaiting: null,
    onZoom: null,
    opacity: null,
    operator: null,
    order: null,
    orient: null,
    orientation: null,
    origin: null,
    overflow: null,
    overlay: null,
    overlinePosition: ie,
    overlineThickness: ie,
    paintOrder: null,
    panose1: null,
    path: null,
    pathLength: ie,
    patternContentUnits: null,
    patternTransform: null,
    patternUnits: null,
    phase: null,
    ping: at,
    pitch: null,
    playbackOrder: null,
    pointerEvents: null,
    points: null,
    pointsAtX: ie,
    pointsAtY: ie,
    pointsAtZ: ie,
    preserveAlpha: null,
    preserveAspectRatio: null,
    primitiveUnits: null,
    propagate: null,
    property: Mn,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: Mn,
    rev: Mn,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: Mn,
    requiredFeatures: Mn,
    requiredFonts: Mn,
    requiredFormats: Mn,
    resource: null,
    restart: null,
    result: null,
    rotate: null,
    rx: null,
    ry: null,
    scale: null,
    seed: null,
    shapeRendering: null,
    side: null,
    slope: null,
    snapshotTime: null,
    specularConstant: ie,
    specularExponent: ie,
    spreadMethod: null,
    spacing: null,
    startOffset: null,
    stdDeviation: null,
    stemh: null,
    stemv: null,
    stitchTiles: null,
    stopColor: null,
    stopOpacity: null,
    strikethroughPosition: ie,
    strikethroughThickness: ie,
    string: null,
    stroke: null,
    strokeDashArray: Mn,
    strokeDashOffset: null,
    strokeLineCap: null,
    strokeLineJoin: null,
    strokeMiterLimit: ie,
    strokeOpacity: ie,
    strokeWidth: null,
    style: null,
    surfaceScale: ie,
    syncBehavior: null,
    syncBehaviorDefault: null,
    syncMaster: null,
    syncTolerance: null,
    syncToleranceDefault: null,
    systemLanguage: Mn,
    tabIndex: ie,
    tableValues: null,
    target: null,
    targetX: ie,
    targetY: ie,
    textAnchor: null,
    textDecoration: null,
    textRendering: null,
    textLength: null,
    timelineBegin: null,
    title: null,
    transformBehavior: null,
    type: null,
    typeOf: Mn,
    to: null,
    transform: null,
    transformOrigin: null,
    u1: null,
    u2: null,
    underlinePosition: ie,
    underlineThickness: ie,
    unicode: null,
    unicodeBidi: null,
    unicodeRange: null,
    unitsPerEm: ie,
    values: null,
    vAlphabetic: ie,
    vMathematical: ie,
    vectorEffect: null,
    vHanging: ie,
    vIdeographic: ie,
    version: null,
    vertAdvY: ie,
    vertOriginX: ie,
    vertOriginY: ie,
    viewBox: null,
    viewTarget: null,
    visibility: null,
    width: null,
    widths: null,
    wordSpacing: null,
    writingMode: null,
    x: null,
    x1: null,
    x2: null,
    xChannelSelector: null,
    xHeight: ie,
    y: null,
    y1: null,
    y2: null,
    yChannelSelector: null,
    z: null,
    zoomAndPan: null
  },
  space: "svg",
  transform: v0
}), k0 = bl({
  properties: {
    xLinkActuate: null,
    xLinkArcRole: null,
    xLinkHref: null,
    xLinkRole: null,
    xLinkShow: null,
    xLinkTitle: null,
    xLinkType: null
  },
  space: "xlink",
  transform(t, i) {
    return "xlink:" + i.slice(5).toLowerCase();
  }
}), S0 = bl({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: w0
}), z0 = bl({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(t, i) {
    return "xml:" + i.slice(3).toLowerCase();
  }
}), qE = {
  classId: "classID",
  dataType: "datatype",
  itemId: "itemID",
  strokeDashArray: "strokeDasharray",
  strokeDashOffset: "strokeDashoffset",
  strokeLineCap: "strokeLinecap",
  strokeLineJoin: "strokeLinejoin",
  strokeMiterLimit: "strokeMiterlimit",
  typeOf: "typeof",
  xLinkActuate: "xlinkActuate",
  xLinkArcRole: "xlinkArcrole",
  xLinkHref: "xlinkHref",
  xLinkRole: "xlinkRole",
  xLinkShow: "xlinkShow",
  xLinkTitle: "xlinkTitle",
  xLinkType: "xlinkType",
  xmlnsXLink: "xmlnsXlink"
}, $E = /[A-Z]/g, gy = /-[a-z]/g, VE = /^data[-\w.:]+$/i;
function YE(t, i) {
  const a = lp(i);
  let o = i, s = kn;
  if (a in t.normal)
    return t.property[t.normal[a]];
  if (a.length > 4 && a.slice(0, 4) === "data" && VE.test(i)) {
    if (i.charAt(4) === "-") {
      const c = i.slice(5).replace(gy, FE);
      o = "data" + c.charAt(0).toUpperCase() + c.slice(1);
    } else {
      const c = i.slice(4);
      if (!gy.test(c)) {
        let f = c.replace($E, GE);
        f.charAt(0) !== "-" && (f = "-" + f), i = "data" + f;
      }
    }
    s = Lp;
  }
  return new s(o, i);
}
function GE(t) {
  return "-" + t.toLowerCase();
}
function FE(t) {
  return t.charAt(1).toUpperCase();
}
const XE = b0([y0, HE, k0, S0, z0], "html"), Bp = b0([y0, ZE, k0, S0, z0], "svg");
function QE(t) {
  return t.join(" ").trim();
}
var cl = {}, Od, xy;
function PE() {
  if (xy) return Od;
  xy = 1;
  var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, i = /\n/g, a = /^\s*/, o = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, s = /^:\s*/, c = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, f = /^[;\s]*/, p = /^\s+|\s+$/g, m = `
`, g = "/", b = "*", x = "", w = "comment", v = "declaration";
  function S(E, O) {
    if (typeof E != "string")
      throw new TypeError("First argument must be a string");
    if (!E) return [];
    O = O || {};
    var I = 1, L = 1;
    function V(ue) {
      var ee = ue.match(i);
      ee && (I += ee.length);
      var W = ue.lastIndexOf(m);
      L = ~W ? ue.length - W : L + ue.length;
    }
    function J() {
      var ue = { line: I, column: L };
      return function(ee) {
        return ee.position = new T(ue), _e(), ee;
      };
    }
    function T(ue) {
      this.start = ue, this.end = { line: I, column: L }, this.source = O.source;
    }
    T.prototype.content = E;
    function X(ue) {
      var ee = new Error(
        O.source + ":" + I + ":" + L + ": " + ue
      );
      if (ee.reason = ue, ee.filename = O.source, ee.line = I, ee.column = L, ee.source = E, !O.silent) throw ee;
    }
    function pe(ue) {
      var ee = ue.exec(E);
      if (ee) {
        var W = ee[0];
        return V(W), E = E.slice(W.length), ee;
      }
    }
    function _e() {
      pe(a);
    }
    function Z(ue) {
      var ee;
      for (ue = ue || []; ee = te(); )
        ee !== !1 && ue.push(ee);
      return ue;
    }
    function te() {
      var ue = J();
      if (!(g != E.charAt(0) || b != E.charAt(1))) {
        for (var ee = 2; x != E.charAt(ee) && (b != E.charAt(ee) || g != E.charAt(ee + 1)); )
          ++ee;
        if (ee += 2, x === E.charAt(ee - 1))
          return X("End of comment missing");
        var W = E.slice(2, ee - 2);
        return L += 2, V(W), E = E.slice(ee), L += 2, ue({
          type: w,
          comment: W
        });
      }
    }
    function oe() {
      var ue = J(), ee = pe(o);
      if (ee) {
        if (te(), !pe(s)) return X("property missing ':'");
        var W = pe(c), de = ue({
          type: v,
          property: j(ee[0].replace(t, x)),
          value: W ? j(W[0].replace(t, x)) : x
        });
        return pe(f), de;
      }
    }
    function Ne() {
      var ue = [];
      Z(ue);
      for (var ee; ee = oe(); )
        ee !== !1 && (ue.push(ee), Z(ue));
      return ue;
    }
    return _e(), Ne();
  }
  function j(E) {
    return E ? E.replace(p, x) : x;
  }
  return Od = S, Od;
}
var by;
function KE() {
  if (by) return cl;
  by = 1;
  var t = cl && cl.__importDefault || function(o) {
    return o && o.__esModule ? o : { default: o };
  };
  Object.defineProperty(cl, "__esModule", { value: !0 }), cl.default = a;
  const i = t(PE());
  function a(o, s) {
    let c = null;
    if (!o || typeof o != "string")
      return c;
    const f = (0, i.default)(o), p = typeof s == "function";
    return f.forEach((m) => {
      if (m.type !== "declaration")
        return;
      const { property: g, value: b } = m;
      p ? s(g, b, m) : b && (c = c || {}, c[g] = b);
    }), c;
  }
  return cl;
}
var ho = {}, yy;
function JE() {
  if (yy) return ho;
  yy = 1, Object.defineProperty(ho, "__esModule", { value: !0 }), ho.camelCase = void 0;
  var t = /^--[a-zA-Z0-9_-]+$/, i = /-([a-z])/g, a = /^[^-]+$/, o = /^-(webkit|moz|ms|o|khtml)-/, s = /^-(ms)-/, c = function(g) {
    return !g || a.test(g) || t.test(g);
  }, f = function(g, b) {
    return b.toUpperCase();
  }, p = function(g, b) {
    return "".concat(b, "-");
  }, m = function(g, b) {
    return b === void 0 && (b = {}), c(g) ? g : (g = g.toLowerCase(), b.reactCompat ? g = g.replace(s, p) : g = g.replace(o, p), g.replace(i, f));
  };
  return ho.camelCase = m, ho;
}
var mo, vy;
function WE() {
  if (vy) return mo;
  vy = 1;
  var t = mo && mo.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  }, i = t(KE()), a = JE();
  function o(s, c) {
    var f = {};
    return !s || typeof s != "string" || (0, i.default)(s, function(p, m) {
      p && m && (f[(0, a.camelCase)(p, c)] = m);
    }), f;
  }
  return o.default = o, mo = o, mo;
}
var eC = WE();
const tC = /* @__PURE__ */ iv(eC), _0 = j0("end"), Ip = j0("start");
function j0(t) {
  return i;
  function i(a) {
    const o = a && a.position && a.position[t] || {};
    if (typeof o.line == "number" && o.line > 0 && typeof o.column == "number" && o.column > 0)
      return {
        line: o.line,
        column: o.column,
        offset: typeof o.offset == "number" && o.offset > -1 ? o.offset : void 0
      };
  }
}
function nC(t) {
  const i = Ip(t), a = _0(t);
  if (i && a)
    return { start: i, end: a };
}
function _o(t) {
  return !t || typeof t != "object" ? "" : "position" in t || "type" in t ? wy(t.position) : "start" in t || "end" in t ? wy(t) : "line" in t || "column" in t ? up(t) : "";
}
function up(t) {
  return ky(t && t.line) + ":" + ky(t && t.column);
}
function wy(t) {
  return up(t && t.start) + "-" + up(t && t.end);
}
function ky(t) {
  return t && typeof t == "number" ? t : 1;
}
class nn extends Error {
  /**
   * Create a message for `reason`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {Options | null | undefined} [options]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | Options | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns
   *   Instance of `VFileMessage`.
   */
  // eslint-disable-next-line complexity
  constructor(i, a, o) {
    super(), typeof a == "string" && (o = a, a = void 0);
    let s = "", c = {}, f = !1;
    if (a && ("line" in a && "column" in a ? c = { place: a } : "start" in a && "end" in a ? c = { place: a } : "type" in a ? c = {
      ancestors: [a],
      place: a.position
    } : c = { ...a }), typeof i == "string" ? s = i : !c.cause && i && (f = !0, s = i.message, c.cause = i), !c.ruleId && !c.source && typeof o == "string") {
      const m = o.indexOf(":");
      m === -1 ? c.ruleId = o : (c.source = o.slice(0, m), c.ruleId = o.slice(m + 1));
    }
    if (!c.place && c.ancestors && c.ancestors) {
      const m = c.ancestors[c.ancestors.length - 1];
      m && (c.place = m.position);
    }
    const p = c.place && "start" in c.place ? c.place.start : c.place;
    this.ancestors = c.ancestors || void 0, this.cause = c.cause || void 0, this.column = p ? p.column : void 0, this.fatal = void 0, this.file = "", this.message = s, this.line = p ? p.line : void 0, this.name = _o(c.place) || "1:1", this.place = c.place || void 0, this.reason = this.message, this.ruleId = c.ruleId || void 0, this.source = c.source || void 0, this.stack = f && c.cause && typeof c.cause.stack == "string" ? c.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
  }
}
nn.prototype.file = "";
nn.prototype.name = "";
nn.prototype.reason = "";
nn.prototype.message = "";
nn.prototype.stack = "";
nn.prototype.column = void 0;
nn.prototype.line = void 0;
nn.prototype.ancestors = void 0;
nn.prototype.cause = void 0;
nn.prototype.fatal = void 0;
nn.prototype.place = void 0;
nn.prototype.ruleId = void 0;
nn.prototype.source = void 0;
const Hp = {}.hasOwnProperty, iC = /* @__PURE__ */ new Map(), rC = /[A-Z]/g, aC = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), lC = /* @__PURE__ */ new Set(["td", "th"]), E0 = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function oC(t, i) {
  if (!i || i.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const a = i.filePath || void 0;
  let o;
  if (i.development) {
    if (typeof i.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    o = mC(a, i.jsxDEV);
  } else {
    if (typeof i.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof i.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    o = hC(a, i.jsx, i.jsxs);
  }
  const s = {
    Fragment: i.Fragment,
    ancestors: [],
    components: i.components || {},
    create: o,
    elementAttributeNameCase: i.elementAttributeNameCase || "react",
    evaluater: i.createEvaluater ? i.createEvaluater() : void 0,
    filePath: a,
    ignoreInvalidStyle: i.ignoreInvalidStyle || !1,
    passKeys: i.passKeys !== !1,
    passNode: i.passNode || !1,
    schema: i.space === "svg" ? Bp : XE,
    stylePropertyNameCase: i.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: i.tableCellAlignToStyle !== !1
  }, c = C0(s, t, void 0);
  return c && typeof c != "string" ? c : s.create(
    t,
    s.Fragment,
    { children: c || void 0 },
    void 0
  );
}
function C0(t, i, a) {
  if (i.type === "element")
    return sC(t, i, a);
  if (i.type === "mdxFlowExpression" || i.type === "mdxTextExpression")
    return uC(t, i);
  if (i.type === "mdxJsxFlowElement" || i.type === "mdxJsxTextElement")
    return fC(t, i, a);
  if (i.type === "mdxjsEsm")
    return cC(t, i);
  if (i.type === "root")
    return dC(t, i, a);
  if (i.type === "text")
    return pC(t, i);
}
function sC(t, i, a) {
  const o = t.schema;
  let s = o;
  i.tagName.toLowerCase() === "svg" && o.space === "html" && (s = Bp, t.schema = s), t.ancestors.push(i);
  const c = N0(t, i.tagName, !1), f = gC(t, i);
  let p = qp(t, i);
  return aC.has(i.tagName) && (p = p.filter(function(m) {
    return typeof m == "string" ? !BE(m) : !0;
  })), T0(t, f, c, i), Zp(f, p), t.ancestors.pop(), t.schema = o, t.create(i, c, f, a);
}
function uC(t, i) {
  if (i.data && i.data.estree && t.evaluater) {
    const o = i.data.estree.body[0];
    return o.type, /** @type {Child | undefined} */
    t.evaluater.evaluateExpression(o.expression);
  }
  Oo(t, i.position);
}
function cC(t, i) {
  if (i.data && i.data.estree && t.evaluater)
    return (
      /** @type {Child | undefined} */
      t.evaluater.evaluateProgram(i.data.estree)
    );
  Oo(t, i.position);
}
function fC(t, i, a) {
  const o = t.schema;
  let s = o;
  i.name === "svg" && o.space === "html" && (s = Bp, t.schema = s), t.ancestors.push(i);
  const c = i.name === null ? t.Fragment : N0(t, i.name, !0), f = xC(t, i), p = qp(t, i);
  return T0(t, f, c, i), Zp(f, p), t.ancestors.pop(), t.schema = o, t.create(i, c, f, a);
}
function dC(t, i, a) {
  const o = {};
  return Zp(o, qp(t, i)), t.create(i, t.Fragment, o, a);
}
function pC(t, i) {
  return i.value;
}
function T0(t, i, a, o) {
  typeof a != "string" && a !== t.Fragment && t.passNode && (i.node = o);
}
function Zp(t, i) {
  if (i.length > 0) {
    const a = i.length > 1 ? i : i[0];
    a && (t.children = a);
  }
}
function hC(t, i, a) {
  return o;
  function o(s, c, f, p) {
    const g = Array.isArray(f.children) ? a : i;
    return p ? g(c, f, p) : g(c, f);
  }
}
function mC(t, i) {
  return a;
  function a(o, s, c, f) {
    const p = Array.isArray(c.children), m = Ip(o);
    return i(
      s,
      c,
      f,
      p,
      {
        columnNumber: m ? m.column - 1 : void 0,
        fileName: t,
        lineNumber: m ? m.line : void 0
      },
      void 0
    );
  }
}
function gC(t, i) {
  const a = {};
  let o, s;
  for (s in i.properties)
    if (s !== "children" && Hp.call(i.properties, s)) {
      const c = bC(t, s, i.properties[s]);
      if (c) {
        const [f, p] = c;
        t.tableCellAlignToStyle && f === "align" && typeof p == "string" && lC.has(i.tagName) ? o = p : a[f] = p;
      }
    }
  if (o) {
    const c = (
      /** @type {Style} */
      a.style || (a.style = {})
    );
    c[t.stylePropertyNameCase === "css" ? "text-align" : "textAlign"] = o;
  }
  return a;
}
function xC(t, i) {
  const a = {};
  for (const o of i.attributes)
    if (o.type === "mdxJsxExpressionAttribute")
      if (o.data && o.data.estree && t.evaluater) {
        const c = o.data.estree.body[0];
        c.type;
        const f = c.expression;
        f.type;
        const p = f.properties[0];
        p.type, Object.assign(
          a,
          t.evaluater.evaluateExpression(p.argument)
        );
      } else
        Oo(t, i.position);
    else {
      const s = o.name;
      let c;
      if (o.value && typeof o.value == "object")
        if (o.value.data && o.value.data.estree && t.evaluater) {
          const p = o.value.data.estree.body[0];
          p.type, c = t.evaluater.evaluateExpression(p.expression);
        } else
          Oo(t, i.position);
      else
        c = o.value === null ? !0 : o.value;
      a[s] = /** @type {Props[keyof Props]} */
      c;
    }
  return a;
}
function qp(t, i) {
  const a = [];
  let o = -1;
  const s = t.passKeys ? /* @__PURE__ */ new Map() : iC;
  for (; ++o < i.children.length; ) {
    const c = i.children[o];
    let f;
    if (t.passKeys) {
      const m = c.type === "element" ? c.tagName : c.type === "mdxJsxFlowElement" || c.type === "mdxJsxTextElement" ? c.name : void 0;
      if (m) {
        const g = s.get(m) || 0;
        f = m + "-" + g, s.set(m, g + 1);
      }
    }
    const p = C0(t, c, f);
    p !== void 0 && a.push(p);
  }
  return a;
}
function bC(t, i, a) {
  const o = YE(t.schema, i);
  if (!(a == null || typeof a == "number" && Number.isNaN(a))) {
    if (Array.isArray(a) && (a = o.commaSeparated ? DE(a) : QE(a)), o.property === "style") {
      let s = typeof a == "object" ? a : yC(t, String(a));
      return t.stylePropertyNameCase === "css" && (s = vC(s)), ["style", s];
    }
    return [
      t.elementAttributeNameCase === "react" && o.space ? qE[o.property] || o.property : o.attribute,
      a
    ];
  }
}
function yC(t, i) {
  try {
    return tC(i, { reactCompat: !0 });
  } catch (a) {
    if (t.ignoreInvalidStyle)
      return {};
    const o = (
      /** @type {Error} */
      a
    ), s = new nn("Cannot parse `style` attribute", {
      ancestors: t.ancestors,
      cause: o,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw s.file = t.filePath || void 0, s.url = E0 + "#cannot-parse-style-attribute", s;
  }
}
function N0(t, i, a) {
  let o;
  if (!a)
    o = { type: "Literal", value: i };
  else if (i.includes(".")) {
    const s = i.split(".");
    let c = -1, f;
    for (; ++c < s.length; ) {
      const p = py(s[c]) ? { type: "Identifier", name: s[c] } : { type: "Literal", value: s[c] };
      f = f ? {
        type: "MemberExpression",
        object: f,
        property: p,
        computed: !!(c && p.type === "Literal"),
        optional: !1
      } : p;
    }
    o = f;
  } else
    o = py(i) && !/^[a-z]/.test(i) ? { type: "Identifier", name: i } : { type: "Literal", value: i };
  if (o.type === "Literal") {
    const s = (
      /** @type {string | number} */
      o.value
    );
    return Hp.call(t.components, s) ? t.components[s] : s;
  }
  if (t.evaluater)
    return t.evaluater.evaluateExpression(o);
  Oo(t);
}
function Oo(t, i) {
  const a = new nn(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: t.ancestors,
      place: i,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw a.file = t.filePath || void 0, a.url = E0 + "#cannot-handle-mdx-estrees-without-createevaluater", a;
}
function vC(t) {
  const i = {};
  let a;
  for (a in t)
    Hp.call(t, a) && (i[wC(a)] = t[a]);
  return i;
}
function wC(t) {
  let i = t.replace(rC, kC);
  return i.slice(0, 3) === "ms-" && (i = "-" + i), i;
}
function kC(t) {
  return "-" + t.toLowerCase();
}
const Dd = {
  action: ["form"],
  cite: ["blockquote", "del", "ins", "q"],
  data: ["object"],
  formAction: ["button", "input"],
  href: ["a", "area", "base", "link"],
  icon: ["menuitem"],
  itemId: null,
  manifest: ["html"],
  ping: ["a", "area"],
  poster: ["video"],
  src: [
    "audio",
    "embed",
    "iframe",
    "img",
    "input",
    "script",
    "source",
    "track",
    "video"
  ]
}, SC = {};
function $p(t, i) {
  const a = SC, o = typeof a.includeImageAlt == "boolean" ? a.includeImageAlt : !0, s = typeof a.includeHtml == "boolean" ? a.includeHtml : !0;
  return A0(t, o, s);
}
function A0(t, i, a) {
  if (zC(t)) {
    if ("value" in t)
      return t.type === "html" && !a ? "" : t.value;
    if (i && "alt" in t && t.alt)
      return t.alt;
    if ("children" in t)
      return Sy(t.children, i, a);
  }
  return Array.isArray(t) ? Sy(t, i, a) : "";
}
function Sy(t, i, a) {
  const o = [];
  let s = -1;
  for (; ++s < t.length; )
    o[s] = A0(t[s], i, a);
  return o.join("");
}
function zC(t) {
  return !!(t && typeof t == "object");
}
const zy = document.createElement("i");
function Vp(t) {
  const i = "&" + t + ";";
  zy.innerHTML = i;
  const a = zy.textContent;
  return a.charCodeAt(a.length - 1) === 59 && t !== "semi" || a === i ? !1 : a;
}
function ri(t, i, a, o) {
  const s = t.length;
  let c = 0, f;
  if (i < 0 ? i = -i > s ? 0 : s + i : i = i > s ? s : i, a = a > 0 ? a : 0, o.length < 1e4)
    f = Array.from(o), f.unshift(i, a), t.splice(...f);
  else
    for (a && t.splice(i, a); c < o.length; )
      f = o.slice(c, c + 1e4), f.unshift(i, 0), t.splice(...f), c += 1e4, i += 1e4;
}
function Pn(t, i) {
  return t.length > 0 ? (ri(t, t.length, 0, i), t) : i;
}
const _y = {}.hasOwnProperty;
function O0(t) {
  const i = {};
  let a = -1;
  for (; ++a < t.length; )
    _C(i, t[a]);
  return i;
}
function _C(t, i) {
  let a;
  for (a in i) {
    const s = (_y.call(t, a) ? t[a] : void 0) || (t[a] = {}), c = i[a];
    let f;
    if (c)
      for (f in c) {
        _y.call(s, f) || (s[f] = []);
        const p = c[f];
        jC(
          // @ts-expect-error Looks like a list.
          s[f],
          Array.isArray(p) ? p : p ? [p] : []
        );
      }
  }
}
function jC(t, i) {
  let a = -1;
  const o = [];
  for (; ++a < i.length; )
    (i[a].add === "after" ? t : o).push(i[a]);
  ri(t, 0, 0, o);
}
function D0(t, i) {
  const a = Number.parseInt(t, i);
  return (
    // C0 except for HT, LF, FF, CR, space.
    a < 9 || a === 11 || a > 13 && a < 32 || // Control character (DEL) of C0, and C1 controls.
    a > 126 && a < 160 || // Lone high surrogates and low surrogates.
    a > 55295 && a < 57344 || // Noncharacters.
    a > 64975 && a < 65008 || /* eslint-disable no-bitwise */
    (a & 65535) === 65535 || (a & 65535) === 65534 || /* eslint-enable no-bitwise */
    // Out of range
    a > 1114111 ? "�" : String.fromCodePoint(a)
  );
}
function ai(t) {
  return t.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const pn = Lr(/[A-Za-z]/), tn = Lr(/[\dA-Za-z]/), EC = Lr(/[#-'*+\--9=?A-Z^-~]/);
function Tu(t) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    t !== null && (t < 32 || t === 127)
  );
}
const cp = Lr(/\d/), CC = Lr(/[\dA-Fa-f]/), TC = Lr(/[!-/:-@[-`{-~]/);
function Ee(t) {
  return t !== null && t < -2;
}
function lt(t) {
  return t !== null && (t < 0 || t === 32);
}
function Be(t) {
  return t === -2 || t === -1 || t === 32;
}
const Bu = Lr(new RegExp("\\p{P}|\\p{S}", "u")), ga = Lr(/\s/);
function Lr(t) {
  return i;
  function i(a) {
    return a !== null && a > -1 && t.test(String.fromCharCode(a));
  }
}
function yl(t) {
  const i = [];
  let a = -1, o = 0, s = 0;
  for (; ++a < t.length; ) {
    const c = t.charCodeAt(a);
    let f = "";
    if (c === 37 && tn(t.charCodeAt(a + 1)) && tn(t.charCodeAt(a + 2)))
      s = 2;
    else if (c < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(c)) || (f = String.fromCharCode(c));
    else if (c > 55295 && c < 57344) {
      const p = t.charCodeAt(a + 1);
      c < 56320 && p > 56319 && p < 57344 ? (f = String.fromCharCode(c, p), s = 1) : f = "�";
    } else
      f = String.fromCharCode(c);
    f && (i.push(t.slice(o, a), encodeURIComponent(f)), o = a + s + 1, f = ""), s && (a += s, s = 0);
  }
  return i.join("") + t.slice(o);
}
function Xe(t, i, a, o) {
  const s = o ? o - 1 : 1 / 0;
  let c = 0;
  return f;
  function f(m) {
    return Be(m) ? (t.enter(a), p(m)) : i(m);
  }
  function p(m) {
    return Be(m) && c++ < s ? (t.consume(m), p) : (t.exit(a), i(m));
  }
}
function M0(t, i, a, o, s, c) {
  let f = 0;
  return p;
  function p(b) {
    return Be(b) ? (t.enter(o), m(b)) : g(b);
  }
  function m(b) {
    return Be(b) && f < c ? (t.consume(b), f++, m) : (t.exit(o), g(b));
  }
  function g(b) {
    return f >= s ? i(b) : a(b);
  }
}
const NC = {
  tokenize: AC
};
function AC(t) {
  const i = t.attempt(this.parser.constructs.contentInitial, o, s);
  let a;
  return i;
  function o(p) {
    if (p === null) {
      t.consume(p);
      return;
    }
    return t.enter("lineEnding"), t.consume(p), t.exit("lineEnding"), Xe(t, i, "linePrefix");
  }
  function s(p) {
    return t.enter("paragraph"), c(p);
  }
  function c(p) {
    const m = t.enter("chunkText", {
      contentType: "text",
      previous: a
    });
    return a && (a.next = m), a = m, f(p);
  }
  function f(p) {
    if (p === null) {
      t.exit("chunkText"), t.exit("paragraph"), t.consume(p);
      return;
    }
    return Ee(p) ? (t.consume(p), t.exit("chunkText"), c) : (t.consume(p), f);
  }
}
let Nu = class {
  /**
   * Create a new edit map.
   *
   * @returns
   *   New instance.
   */
  constructor() {
    this.index = /* @__PURE__ */ new Map(), this.map = [];
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   *   Index at which to apply the edit.
   * @param {number} remove
   *   Count of items to remove at the index.
   * @param {Array<Event>} add
   *   Items to add at the index.
   * @returns {undefined}
   *   Nothing.
   */
  add(i, a, o) {
    jy(this, i, a, o, !1);
  }
  /**
   * Create an edit: but insert `add` before existing additions, instead of
   * after them.
   *
   * @param {number} index
   *   Index at which to apply the edit.
   * @param {number} remove
   *   Count of items to remove at the index.
   * @param {Array<Event>} add
   *   Items to add at the index.
   * @returns {undefined}
   *   Nothing.
   */
  addBefore(i, a, o) {
    jy(this, i, a, o, !0);
  }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   *   List of events to apply the edits to.
   * @returns {undefined}
   *   Nothing.
   */
  consume(i) {
    if (this.map.sort(function(c, f) {
      return c[0] - f[0];
    }), this.map.length === 0)
      return;
    let a = this.map.length;
    const o = [];
    for (; a > 0; )
      a -= 1, o.push(i.slice(this.map[a][0] + this.map[a][1]), this.map[a][2]), i.length = this.map[a][0];
    o.push(i.slice()), i.length = 0;
    let s = o.pop();
    for (; s; ) {
      for (const c of s)
        i.push(c);
      s = o.pop();
    }
    this.map.length = 0, this.index.clear();
  }
};
function jy(t, i, a, o, s) {
  if (a === 0 && o.length === 0)
    return;
  const c = t.index.get(i);
  if (c) {
    c[1] += a, s ? (o.push(...c[2]), c[2] = o) : c[2].push(...o);
    return;
  }
  const f = [i, a, o];
  t.map.push(f), t.index.set(i, f);
}
const OC = {
  tokenize: DC
}, Ey = {
  tokenize: MC
};
function DC(t) {
  const i = this, a = [];
  let o = 0, s, c, f;
  return p;
  function p(L) {
    if (o < a.length) {
      const V = a[o];
      return i.containerState = V[1], t.attempt(V[0].continuation, m, g)(L);
    }
    return g(L);
  }
  function m(L) {
    if (o++, i.containerState._closeFlow) {
      i.containerState._closeFlow = void 0, s && I();
      const V = i.events.length;
      let J = V, T;
      for (; J--; )
        if (i.events[J][0] === "exit" && i.events[J][1].type === "chunkFlow") {
          T = i.events[J][1].end;
          break;
        }
      O(o);
      let X = V;
      for (; X < i.events.length; )
        i.events[X][1].end = {
          ...T
        }, X++;
      const pe = new Nu();
      return pe.add(J + 1, 0, i.events.slice(V)), pe.add(V, X - V, []), pe.consume(i.events), g(L);
    }
    return p(L);
  }
  function g(L) {
    if (o === a.length) {
      if (!s)
        return w(L);
      if (s.currentConstruct && s.currentConstruct.concrete)
        return S(L);
      i.interrupt = !!(s.currentConstruct && !s._gfmTableDynamicInterruptHack);
    }
    return i.containerState = {}, t.check(Ey, b, x)(L);
  }
  function b(L) {
    return s && I(), O(o), w(L);
  }
  function x(L) {
    return i.parser.lazy[i.now().line] = o !== a.length, f = i.now().offset, S(L);
  }
  function w(L) {
    return i.containerState = {}, t.attempt(Ey, v, S)(L);
  }
  function v(L) {
    return o++, a.push([i.currentConstruct, i.containerState]), w(L);
  }
  function S(L) {
    if (L === null) {
      s && I(), O(0), t.consume(L);
      return;
    }
    return s = s || i.parser.flow(i.now()), t.enter("chunkFlow", {
      _tokenizer: s,
      contentType: "flow",
      previous: c
    }), j(L);
  }
  function j(L) {
    if (L === null) {
      E(t.exit("chunkFlow"), !0), O(0), t.consume(L);
      return;
    }
    return Ee(L) ? (t.consume(L), E(t.exit("chunkFlow")), o = 0, i.interrupt = void 0, p) : (t.consume(L), j);
  }
  function E(L, V) {
    const J = i.sliceStream(L);
    if (V && J.push(null), L.previous = c, c && (c.next = L), c = L, s.defineSkip(L.start), s.write(J), i.parser.lazy[L.start.line]) {
      let T = s.events.length;
      for (; T--; )
        if (
          // The token starts before the line ending…
          s.events[T][1].start.offset < f && // …and either is not ended yet…
          (!s.events[T][1].end || // …or ends after it.
          s.events[T][1].end.offset > f)
        )
          return;
      const X = i.events.length;
      let pe = X, _e, Z;
      for (; pe--; )
        if (i.events[pe][0] === "exit" && i.events[pe][1].type === "chunkFlow") {
          if (_e) {
            Z = i.events[pe][1].end;
            break;
          }
          _e = !0;
        }
      for (O(o), T = X; T < i.events.length; )
        i.events[T][1].end = {
          ...Z
        }, T++;
      const te = new Nu();
      te.add(pe + 1, 0, i.events.slice(X)), te.add(X, T - X, []), te.consume(i.events);
    }
  }
  function O(L) {
    let V = a.length;
    for (; V-- > L; ) {
      const J = a[V];
      i.containerState = J[1], J[0].exit.call(i, t);
    }
    a.length = L;
  }
  function I() {
    s.write([null]), c = void 0, s = void 0, i.containerState._closeFlow = void 0;
  }
}
function MC(t, i, a) {
  return Xe(t, t.attempt(this.parser.constructs.document, i, a), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Au(t) {
  if (t === null || lt(t) || ga(t))
    return 1;
  if (Bu(t))
    return 2;
}
function Iu(t, i, a) {
  const o = [];
  let s = -1;
  for (; ++s < t.length; ) {
    const c = t[s].resolveAll;
    c && !o.includes(c) && (i = c(i, a), o.push(c));
  }
  return i;
}
const fp = {
  name: "attention",
  resolveAll: RC,
  tokenize: UC
};
function RC(t, i) {
  let a = -1, o;
  for (; ++a < t.length; )
    if (t[a][0] === "enter" && t[a][1].type === "attentionSequence" && t[a][1]._close) {
      let s = a;
      for (; s--; )
        if (t[s][0] === "exit" && t[s][1].type === "attentionSequence" && t[s][1]._open && // If the markers are the same:
        i.sliceSerialize(t[s][1]).charCodeAt(0) === i.sliceSerialize(t[a][1]).charCodeAt(0)) {
          if ((t[s][1]._close || t[a][1]._open) && (t[a][1].end.offset - t[a][1].start.offset) % 3 && !((t[s][1].end.offset - t[s][1].start.offset + t[a][1].end.offset - t[a][1].start.offset) % 3))
            continue;
          const c = t[s][1].end.offset - t[s][1].start.offset > 1 && t[a][1].end.offset - t[a][1].start.offset > 1 ? 2 : 1, f = {
            ...t[s][1].end
          }, p = {
            ...t[a][1].start
          };
          Cy(f, -c), Cy(p, c);
          const m = {
            type: c > 1 ? "strongSequence" : "emphasisSequence",
            start: f,
            end: {
              ...t[s][1].end
            }
          }, g = {
            type: c > 1 ? "strongSequence" : "emphasisSequence",
            start: {
              ...t[a][1].start
            },
            end: p
          }, b = {
            type: c > 1 ? "strongText" : "emphasisText",
            start: {
              ...t[s][1].end
            },
            end: {
              ...t[a][1].start
            }
          }, x = {
            type: c > 1 ? "strong" : "emphasis",
            start: {
              ...m.start
            },
            end: {
              ...g.end
            }
          };
          t[s][1].end = {
            ...m.start
          }, t[a][1].start = {
            ...g.end
          }, o = [], t[s][1].end.offset - t[s][1].start.offset && (o = Pn(o, [["enter", t[s][1], i], ["exit", t[s][1], i]])), o = Pn(o, [["enter", x, i], ["enter", m, i], ["exit", m, i], ["enter", b, i]]), o = Pn(o, Iu(i.parser.constructs.insideSpan.null, t.slice(s + 1, a), i)), o = Pn(o, [["exit", b, i], ["enter", g, i], ["exit", g, i], ["exit", x, i]]);
          let w = 0;
          t[a][1].end.offset - t[a][1].start.offset && (w = 2, o = Pn(o, [["enter", t[a][1], i], ["exit", t[a][1], i]])), ri(t, s - 1, a - s + 3, o), a = s + o.length - w - 2;
          break;
        }
    }
  for (a = -1; ++a < t.length; )
    t[a][1].type === "attentionSequence" && (t[a][1].type = "data");
  return t;
}
function UC(t, i) {
  const a = this.parser.constructs.attentionMarkers.null, o = this.previous, s = Au(o);
  let c;
  return f;
  function f(m) {
    return c = m, t.enter("attentionSequence"), p(m);
  }
  function p(m) {
    if (m === c)
      return t.consume(m), p;
    const g = t.exit("attentionSequence"), b = Au(m), x = !b || b === 2 && s || a.includes(m) && m !== 42 && m !== 95, w = !s || s === 2 && b || a.includes(o) && o !== 42 && o !== 95;
    return g._open = !!(c === 42 ? x : x && (s || !w)), g._close = !!(c === 42 ? w : w && (b || !x)), i(m);
  }
}
function Cy(t, i) {
  t.column += i, t.offset += i, t._bufferIndex += i;
}
const LC = {
  name: "autolink",
  tokenize: BC
};
function BC(t, i, a) {
  let o = 0;
  return s;
  function s(v) {
    return t.enter("autolink"), t.enter("autolinkMarker"), t.consume(v), t.exit("autolinkMarker"), t.enter("autolinkProtocol"), c;
  }
  function c(v) {
    return pn(v) ? (t.consume(v), f) : v === 64 ? a(v) : g(v);
  }
  function f(v) {
    return v === 43 || v === 45 || v === 46 || tn(v) ? (o = 1, p(v)) : g(v);
  }
  function p(v) {
    return v === 58 ? (t.consume(v), o = 0, m) : (v === 43 || v === 45 || v === 46 || tn(v)) && o++ < 32 ? (t.consume(v), p) : (o = 0, g(v));
  }
  function m(v) {
    return v === 62 ? (t.exit("autolinkProtocol"), t.enter("autolinkMarker"), t.consume(v), t.exit("autolinkMarker"), t.exit("autolink"), i) : v === null || v === 32 || v === 60 || Tu(v) ? a(v) : (t.consume(v), m);
  }
  function g(v) {
    return v === 64 ? (t.consume(v), b) : EC(v) ? (t.consume(v), g) : a(v);
  }
  function b(v) {
    return tn(v) ? x(v) : a(v);
  }
  function x(v) {
    return v === 46 ? (t.consume(v), o = 0, b) : v === 62 ? (t.exit("autolinkProtocol").type = "autolinkEmail", t.enter("autolinkMarker"), t.consume(v), t.exit("autolinkMarker"), t.exit("autolink"), i) : w(v);
  }
  function w(v) {
    if ((v === 45 || tn(v)) && o++ < 63) {
      const S = v === 45 ? w : x;
      return t.consume(v), S;
    }
    return a(v);
  }
}
const Mo = {
  partial: !0,
  tokenize: IC
};
function IC(t, i, a) {
  return o;
  function o(c) {
    return Be(c) ? Xe(t, s, "linePrefix")(c) : s(c);
  }
  function s(c) {
    return c === null || Ee(c) ? i(c) : a(c);
  }
}
const R0 = {
  continuation: {
    tokenize: ZC
  },
  exit: qC,
  name: "blockQuote",
  tokenize: HC
};
function HC(t, i, a) {
  const o = this;
  return s;
  function s(f) {
    if (f === 62) {
      const p = o.containerState;
      return p.open || (t.enter("blockQuote", {
        _container: !0
      }), p.open = !0), t.enter("blockQuotePrefix"), t.enter("blockQuoteMarker"), t.consume(f), t.exit("blockQuoteMarker"), c;
    }
    return a(f);
  }
  function c(f) {
    return Be(f) ? (t.enter("blockQuotePrefixWhitespace"), t.consume(f), t.exit("blockQuotePrefixWhitespace"), t.exit("blockQuotePrefix"), i) : (t.exit("blockQuotePrefix"), i(f));
  }
}
function ZC(t, i, a) {
  const o = this;
  return s;
  function s(f) {
    return Be(f) ? Xe(t, c, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(f) : c(f);
  }
  function c(f) {
    return t.attempt(R0, i, a)(f);
  }
}
function qC(t) {
  t.exit("blockQuote");
}
const U0 = {
  name: "characterEscape",
  tokenize: $C
};
function $C(t, i, a) {
  return o;
  function o(c) {
    return t.enter("characterEscape"), t.enter("escapeMarker"), t.consume(c), t.exit("escapeMarker"), s;
  }
  function s(c) {
    return TC(c) ? (t.enter("characterEscapeValue"), t.consume(c), t.exit("characterEscapeValue"), t.exit("characterEscape"), i) : a(c);
  }
}
const L0 = {
  name: "characterReference",
  tokenize: VC
};
function VC(t, i, a) {
  const o = this;
  let s = 0, c, f;
  return p;
  function p(x) {
    return t.enter("characterReference"), t.enter("characterReferenceMarker"), t.consume(x), t.exit("characterReferenceMarker"), m;
  }
  function m(x) {
    return x === 35 ? (t.enter("characterReferenceMarkerNumeric"), t.consume(x), t.exit("characterReferenceMarkerNumeric"), g) : (t.enter("characterReferenceValue"), c = 31, f = tn, b(x));
  }
  function g(x) {
    return x === 88 || x === 120 ? (t.enter("characterReferenceMarkerHexadecimal"), t.consume(x), t.exit("characterReferenceMarkerHexadecimal"), t.enter("characterReferenceValue"), c = 6, f = CC, b) : (t.enter("characterReferenceValue"), c = 7, f = cp, b(x));
  }
  function b(x) {
    if (x === 59 && s) {
      const w = t.exit("characterReferenceValue");
      return f === tn && !Vp(o.sliceSerialize(w)) ? a(x) : (t.enter("characterReferenceMarker"), t.consume(x), t.exit("characterReferenceMarker"), t.exit("characterReference"), i);
    }
    return f(x) && s++ < c ? (t.consume(x), b) : a(x);
  }
}
const dp = {
  partial: !0,
  tokenize: YC
};
function YC(t, i, a) {
  const o = this;
  return s;
  function s(f) {
    return f === null ? a(f) : (t.enter("lineEnding"), t.consume(f), t.exit("lineEnding"), c);
  }
  function c(f) {
    return o.parser.lazy[o.now().line] ? a(f) : i(f);
  }
}
const Ty = {
  concrete: !0,
  name: "codeFenced",
  tokenize: GC
};
function GC(t, i, a) {
  const o = this, s = {
    partial: !0,
    tokenize: J
  };
  let c = 0, f = 0, p;
  return m;
  function m(T) {
    return g(T);
  }
  function g(T) {
    const X = o.events[o.events.length - 1];
    return c = X && X[1].type === "linePrefix" ? X[2].sliceSerialize(X[1], !0).length : 0, p = T, t.enter("codeFenced"), t.enter("codeFencedFence"), t.enter("codeFencedFenceSequence"), b(T);
  }
  function b(T) {
    return T === p ? (f++, t.consume(T), b) : f < 3 ? a(T) : (t.exit("codeFencedFenceSequence"), Be(T) ? Xe(t, x, "whitespace")(T) : x(T));
  }
  function x(T) {
    return T === null || Ee(T) ? (t.exit("codeFencedFence"), o.interrupt ? i(T) : t.check(dp, j, V)(T)) : (t.enter("codeFencedFenceInfo"), t.enter("chunkString", {
      contentType: "string"
    }), w(T));
  }
  function w(T) {
    return T === null || Ee(T) ? (t.exit("chunkString"), t.exit("codeFencedFenceInfo"), x(T)) : Be(T) ? (t.exit("chunkString"), t.exit("codeFencedFenceInfo"), Xe(t, v, "whitespace")(T)) : T === 96 && T === p ? a(T) : (t.consume(T), w);
  }
  function v(T) {
    return T === null || Ee(T) ? x(T) : (t.enter("codeFencedFenceMeta"), t.enter("chunkString", {
      contentType: "string"
    }), S(T));
  }
  function S(T) {
    return T === null || Ee(T) ? (t.exit("chunkString"), t.exit("codeFencedFenceMeta"), x(T)) : T === 96 && T === p ? a(T) : (t.consume(T), S);
  }
  function j(T) {
    return t.attempt(s, V, E)(T);
  }
  function E(T) {
    return t.enter("lineEnding"), t.consume(T), t.exit("lineEnding"), O;
  }
  function O(T) {
    return c > 0 && Be(T) ? Xe(t, I, "linePrefix", c + 1)(T) : I(T);
  }
  function I(T) {
    return T === null || Ee(T) ? t.check(dp, j, V)(T) : (t.enter("codeFlowValue"), L(T));
  }
  function L(T) {
    return T === null || Ee(T) ? (t.exit("codeFlowValue"), I(T)) : (t.consume(T), L);
  }
  function V(T) {
    return t.exit("codeFenced"), i(T);
  }
  function J(T, X, pe) {
    let _e = 0;
    return Z;
    function Z(ee) {
      return T.enter("lineEnding"), T.consume(ee), T.exit("lineEnding"), te;
    }
    function te(ee) {
      return T.enter("codeFencedFence"), Be(ee) ? Xe(T, oe, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(ee) : oe(ee);
    }
    function oe(ee) {
      return ee === p ? (T.enter("codeFencedFenceSequence"), Ne(ee)) : pe(ee);
    }
    function Ne(ee) {
      return ee === p ? (_e++, T.consume(ee), Ne) : _e >= f ? (T.exit("codeFencedFenceSequence"), Be(ee) ? Xe(T, ue, "whitespace")(ee) : ue(ee)) : pe(ee);
    }
    function ue(ee) {
      return ee === null || Ee(ee) ? (T.exit("codeFencedFence"), X(ee)) : pe(ee);
    }
  }
}
const Md = {
  name: "codeIndented",
  tokenize: XC
}, FC = {
  partial: !0,
  tokenize: QC
};
function XC(t, i, a) {
  return o;
  function o(p) {
    return t.enter("codeIndented"), M0(t, s, a, "linePrefix", 4, 4)(p);
  }
  function s(p) {
    return p === null ? f(p) : Ee(p) ? t.attempt(FC, s, f)(p) : (t.enter("codeFlowValue"), c(p));
  }
  function c(p) {
    return p === null || Ee(p) ? (t.exit("codeFlowValue"), s(p)) : (t.consume(p), c);
  }
  function f(p) {
    return t.exit("codeIndented"), i(p);
  }
}
function QC(t, i, a) {
  const o = this;
  return s;
  function s(f) {
    return o.parser.lazy[o.now().line] ? a(f) : Ee(f) ? (t.enter("lineEnding"), t.consume(f), t.exit("lineEnding"), s) : M0(t, i, c, "linePrefix", 4, 4)(f);
  }
  function c(f) {
    return Ee(f) ? s(f) : a(f);
  }
}
const PC = {
  name: "codeText",
  previous: JC,
  resolve: KC,
  tokenize: WC
};
function KC(t) {
  let i = t.length - 4, a = 3, o, s;
  if ((t[a][1].type === "lineEnding" || t[a][1].type === "space") && (t[i][1].type === "lineEnding" || t[i][1].type === "space")) {
    for (o = a; ++o < i; )
      if (t[o][1].type === "codeTextData") {
        t[a][1].type = "codeTextPadding", t[i][1].type = "codeTextPadding", a += 2, i -= 2;
        break;
      }
  }
  for (o = a - 1, i++; ++o <= i; )
    s === void 0 ? o !== i && t[o][1].type !== "lineEnding" && (s = o) : (o === i || t[o][1].type === "lineEnding") && (t[s][1].type = "codeTextData", o !== s + 2 && (t[s][1].end = t[o - 1][1].end, t.splice(s + 2, o - s - 2), i -= o - s - 2, o = s + 2), s = void 0);
  return t;
}
function JC(t) {
  return t !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function WC(t, i, a) {
  let o = 0, s, c;
  return f;
  function f(x) {
    return t.enter("codeText"), t.enter("codeTextSequence"), p(x);
  }
  function p(x) {
    return x === 96 ? (t.consume(x), o++, p) : (t.exit("codeTextSequence"), m(x));
  }
  function m(x) {
    return x === null ? a(x) : x === 32 ? (t.enter("space"), t.consume(x), t.exit("space"), m) : x === 96 ? (c = t.enter("codeTextSequence"), s = 0, b(x)) : Ee(x) ? (t.enter("lineEnding"), t.consume(x), t.exit("lineEnding"), m) : (t.enter("codeTextData"), g(x));
  }
  function g(x) {
    return x === null || x === 32 || x === 96 || Ee(x) ? (t.exit("codeTextData"), m(x)) : (t.consume(x), g);
  }
  function b(x) {
    return x === 96 ? (t.consume(x), s++, b) : s === o ? (t.exit("codeTextSequence"), t.exit("codeText"), i(x)) : (c.type = "codeTextData", g(x));
  }
}
class e5 {
  /**
   * @param {ReadonlyArray<T> | null | undefined} [initial]
   *   Initial items (optional).
   * @returns
   *   Splice buffer.
   */
  constructor(i) {
    this.left = i ? [...i] : [], this.right = [];
  }
  /**
   * Array access;
   * does not move the cursor.
   *
   * @param {number} index
   *   Index.
   * @return {T}
   *   Item.
   */
  get(i) {
    if (i < 0 || i >= this.left.length + this.right.length)
      throw new RangeError("Cannot access index `" + i + "` in a splice buffer of size `" + (this.left.length + this.right.length) + "`");
    return i < this.left.length ? this.left[i] : this.right[this.right.length - i + this.left.length - 1];
  }
  /**
   * The length of the splice buffer, one greater than the largest index in the
   * array.
   */
  get length() {
    return this.left.length + this.right.length;
  }
  /**
   * Remove and return `list[0]`;
   * moves the cursor to `0`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  shift() {
    return this.setCursor(0), this.right.pop();
  }
  /**
   * Slice the buffer to get an array;
   * does not move the cursor.
   *
   * @param {number} start
   *   Start.
   * @param {number | null | undefined} [end]
   *   End (optional).
   * @returns {Array<T>}
   *   Array of items.
   */
  slice(i, a) {
    const o = a ?? Number.POSITIVE_INFINITY;
    return o < this.left.length ? this.left.slice(i, o) : i > this.left.length ? this.right.slice(this.right.length - o + this.left.length, this.right.length - i + this.left.length).reverse() : this.left.slice(i).concat(this.right.slice(this.right.length - o + this.left.length).reverse());
  }
  /**
   * Mimics the behavior of Array.prototype.splice() except for the change of
   * interface necessary to avoid segfaults when patching in very large arrays.
   *
   * This operation moves cursor is moved to `start` and results in the cursor
   * placed after any inserted items.
   *
   * @param {number} start
   *   Start;
   *   zero-based index at which to start changing the array;
   *   negative numbers count backwards from the end of the array and values
   *   that are out-of bounds are clamped to the appropriate end of the array.
   * @param {number | null | undefined} [deleteCount=0]
   *   Delete count (default: `0`);
   *   maximum number of elements to delete, starting from start.
   * @param {Array<T> | null | undefined} [items=[]]
   *   Items to include in place of the deleted items (default: `[]`).
   * @return {Array<T>}
   *   Any removed items.
   */
  splice(i, a, o) {
    const s = a || 0;
    this.setCursor(Math.trunc(i));
    const c = this.right.splice(this.right.length - s, Number.POSITIVE_INFINITY);
    return o && go(this.left, o), c.reverse();
  }
  /**
   * Remove and return the highest-numbered item in the array, so
   * `list[list.length - 1]`;
   * Moves the cursor to `length`.
   *
   * @returns {T | undefined}
   *   Item, optional.
   */
  pop() {
    return this.setCursor(Number.POSITIVE_INFINITY), this.left.pop();
  }
  /**
   * Inserts a single item to the high-numbered side of the array;
   * moves the cursor to `length`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  push(i) {
    this.setCursor(Number.POSITIVE_INFINITY), this.left.push(i);
  }
  /**
   * Inserts many items to the high-numbered side of the array.
   * Moves the cursor to `length`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  pushMany(i) {
    this.setCursor(Number.POSITIVE_INFINITY), go(this.left, i);
  }
  /**
   * Inserts a single item to the low-numbered side of the array;
   * Moves the cursor to `0`.
   *
   * @param {T} item
   *   Item.
   * @returns {undefined}
   *   Nothing.
   */
  unshift(i) {
    this.setCursor(0), this.right.push(i);
  }
  /**
   * Inserts many items to the low-numbered side of the array;
   * moves the cursor to `0`.
   *
   * @param {Array<T>} items
   *   Items.
   * @returns {undefined}
   *   Nothing.
   */
  unshiftMany(i) {
    this.setCursor(0), go(this.right, i.reverse());
  }
  /**
   * Move the cursor to a specific position in the array. Requires
   * time proportional to the distance moved.
   *
   * If `n < 0`, the cursor will end up at the beginning.
   * If `n > length`, the cursor will end up at the end.
   *
   * @param {number} n
   *   Position.
   * @return {undefined}
   *   Nothing.
   */
  setCursor(i) {
    if (!(i === this.left.length || i > this.left.length && this.right.length === 0 || i < 0 && this.left.length === 0))
      if (i < this.left.length) {
        const a = this.left.splice(i, Number.POSITIVE_INFINITY);
        go(this.right, a.reverse());
      } else {
        const a = this.right.splice(this.left.length + this.right.length - i, Number.POSITIVE_INFINITY);
        go(this.left, a.reverse());
      }
  }
}
function go(t, i) {
  let a = 0;
  if (i.length < 1e4)
    t.push(...i);
  else
    for (; a < i.length; )
      t.push(...i.slice(a, a + 1e4)), a += 1e4;
}
function B0(t) {
  const i = {};
  let a = -1, o, s, c, f, p, m, g;
  const b = new e5(t);
  for (; ++a < b.length; ) {
    for (; a in i; )
      a = i[a];
    if (o = b.get(a), a && o[1].type === "chunkFlow" && b.get(a - 1)[1].type === "listItemPrefix" && (m = o[1]._tokenizer.events, c = 0, c < m.length && m[c][1].type === "lineEndingBlank" && (c += 2), c < m.length && m[c][1].type === "content"))
      for (; ++c < m.length && m[c][1].type !== "content"; )
        m[c][1].type === "chunkText" && (m[c][1]._isInFirstContentOfListItem = !0, c++);
    if (o[0] === "enter")
      o[1].contentType && (Object.assign(i, t5(b, a)), a = i[a], g = !0);
    else if (o[1]._container) {
      for (c = a, s = void 0; c--; )
        if (f = b.get(c), f[1].type === "lineEnding" || f[1].type === "lineEndingBlank")
          f[0] === "enter" && (s && (b.get(s)[1].type = "lineEndingBlank"), f[1].type = "lineEnding", s = c);
        else if (!(f[1].type === "linePrefix" || f[1].type === "listItemIndent")) break;
      s && (o[1].end = {
        ...b.get(s)[1].start
      }, p = b.slice(s, a), p.unshift(o), b.splice(s, a - s + 1, p));
    }
  }
  return ri(t, 0, Number.POSITIVE_INFINITY, b.slice(0)), !g;
}
function t5(t, i) {
  const a = t.get(i)[1], o = t.get(i)[2];
  let s = i - 1;
  const c = [];
  let f = a._tokenizer;
  f || (f = o.parser[a.contentType](a.start), a._contentTypeTextTrailing && (f._contentTypeTextTrailing = !0));
  const p = f.events, m = [], g = {};
  let b, x, w = -1, v = a, S = 0, j = 0;
  const E = [j];
  for (; v; ) {
    for (; t.get(++s)[1] !== v; )
      ;
    c.push(s), v._tokenizer || (b = o.sliceStream(v), v.next || b.push(null), x && f.defineSkip(v.start), v._isInFirstContentOfListItem && (f._gfmTasklistFirstContentOfListItem = !0), f.write(b), v._isInFirstContentOfListItem && (f._gfmTasklistFirstContentOfListItem = void 0)), x = v, v = v.next;
  }
  for (v = a; ++w < p.length; )
    // Find a void token that includes a break.
    p[w][0] === "exit" && p[w - 1][0] === "enter" && p[w][1].type === p[w - 1][1].type && p[w][1].start.line !== p[w][1].end.line && (j = w + 1, E.push(j), v._tokenizer = void 0, v.previous = void 0, v = v.next);
  for (f.events = [], v ? (v._tokenizer = void 0, v.previous = void 0) : E.pop(), w = E.length; w--; ) {
    const O = p.slice(E[w], E[w + 1]), I = c.pop();
    m.push([I, I + O.length - 1]), t.splice(I, 2, O);
  }
  for (m.reverse(), w = -1; ++w < m.length; )
    g[S + m[w][0]] = S + m[w][1], S += m[w][1] - m[w][0] - 1;
  return g;
}
const n5 = {
  resolve: r5,
  tokenize: a5
}, i5 = {
  partial: !0,
  tokenize: l5
};
function r5(t) {
  return B0(t), t;
}
function a5(t, i) {
  let a;
  return o;
  function o(p) {
    return t.enter("content"), a = t.enter("chunkContent", {
      contentType: "content"
    }), s(p);
  }
  function s(p) {
    return p === null ? c(p) : Ee(p) ? t.check(i5, f, c)(p) : (t.consume(p), s);
  }
  function c(p) {
    return t.exit("chunkContent"), t.exit("content"), i(p);
  }
  function f(p) {
    return t.consume(p), t.exit("chunkContent"), a.next = t.enter("chunkContent", {
      contentType: "content",
      previous: a
    }), a = a.next, s;
  }
}
function l5(t, i, a) {
  const o = this;
  return s;
  function s(f) {
    return t.exit("chunkContent"), t.enter("lineEnding"), t.consume(f), t.exit("lineEnding"), Xe(t, c, "linePrefix");
  }
  function c(f) {
    if (f === null || Ee(f))
      return a(f);
    const p = o.events[o.events.length - 1];
    return !o.parser.constructs.disable.null.includes("codeIndented") && p && p[1].type === "linePrefix" && p[2].sliceSerialize(p[1], !0).length >= 4 ? i(f) : t.interrupt(o.parser.constructs.flow, a, i)(f);
  }
}
function I0(t, i, a, o, s, c, f, p, m) {
  const g = m || Number.POSITIVE_INFINITY;
  let b = 0;
  return x;
  function x(O) {
    return O === 60 ? (t.enter(o), t.enter(s), t.enter(c), t.consume(O), t.exit(c), w) : O === null || O === 32 || O === 41 || Tu(O) ? a(O) : (t.enter(o), t.enter(f), t.enter(p), t.enter("chunkString", {
      contentType: "string"
    }), j(O));
  }
  function w(O) {
    return O === 62 ? (t.enter(c), t.consume(O), t.exit(c), t.exit(s), t.exit(o), i) : (t.enter(p), t.enter("chunkString", {
      contentType: "string"
    }), v(O));
  }
  function v(O) {
    return O === 62 ? (t.exit("chunkString"), t.exit(p), w(O)) : O === null || O === 60 || Ee(O) ? a(O) : (t.consume(O), O === 92 ? S : v);
  }
  function S(O) {
    return O === 60 || O === 62 || O === 92 ? (t.consume(O), v) : v(O);
  }
  function j(O) {
    return !b && (O === null || O === 41 || lt(O)) ? (t.exit("chunkString"), t.exit(p), t.exit(f), t.exit(o), i(O)) : b < g && O === 40 ? (t.consume(O), b++, j) : O === 41 ? (t.consume(O), b--, j) : O === null || O === 32 || O === 40 || Tu(O) ? a(O) : (t.consume(O), O === 92 ? E : j);
  }
  function E(O) {
    return O === 40 || O === 41 || O === 92 ? (t.consume(O), j) : j(O);
  }
}
function H0(t, i, a, o, s, c) {
  const f = this;
  let p = 0, m;
  return g;
  function g(v) {
    return t.enter(o), t.enter(s), t.consume(v), t.exit(s), t.enter(c), b;
  }
  function b(v) {
    return p > 999 || v === null || v === 91 || v === 93 && !m || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    v === 94 && !p && "_hiddenFootnoteSupport" in f.parser.constructs ? a(v) : v === 93 ? (t.exit(c), t.enter(s), t.consume(v), t.exit(s), t.exit(o), i) : Ee(v) ? (t.enter("lineEnding"), t.consume(v), t.exit("lineEnding"), b) : (t.enter("chunkString", {
      contentType: "string"
    }), x(v));
  }
  function x(v) {
    return v === null || v === 91 || v === 93 || Ee(v) || p++ > 999 ? (t.exit("chunkString"), b(v)) : (t.consume(v), m || (m = !Be(v)), v === 92 ? w : x);
  }
  function w(v) {
    return v === 91 || v === 92 || v === 93 ? (t.consume(v), p++, x) : x(v);
  }
}
function Z0(t, i, a, o, s, c) {
  let f;
  return p;
  function p(w) {
    return w === 34 || w === 39 || w === 40 ? (t.enter(o), t.enter(s), t.consume(w), t.exit(s), f = w === 40 ? 41 : w, m) : a(w);
  }
  function m(w) {
    return w === f ? (t.enter(s), t.consume(w), t.exit(s), t.exit(o), i) : (t.enter(c), g(w));
  }
  function g(w) {
    return w === f ? (t.exit(c), m(f)) : w === null ? a(w) : Ee(w) ? (t.enter("lineEnding"), t.consume(w), t.exit("lineEnding"), Xe(t, g, "linePrefix")) : (t.enter("chunkString", {
      contentType: "string"
    }), b(w));
  }
  function b(w) {
    return w === f || w === null || Ee(w) ? (t.exit("chunkString"), g(w)) : (t.consume(w), w === 92 ? x : b);
  }
  function x(w) {
    return w === f || w === 92 ? (t.consume(w), b) : b(w);
  }
}
function jo(t, i) {
  let a;
  return o;
  function o(s) {
    return Ee(s) ? (t.enter("lineEnding"), t.consume(s), t.exit("lineEnding"), a = !0, o) : Be(s) ? Xe(t, o, a ? "linePrefix" : "lineSuffix")(s) : i(s);
  }
}
const o5 = {
  name: "definition",
  tokenize: u5
}, s5 = {
  partial: !0,
  tokenize: c5
};
function u5(t, i, a) {
  const o = this;
  let s;
  return c;
  function c(v) {
    return t.enter("definition"), f(v);
  }
  function f(v) {
    return H0.call(
      o,
      t,
      p,
      // Note: we don’t need to reset the way `markdown-rs` does.
      a,
      "definitionLabel",
      "definitionLabelMarker",
      "definitionLabelString"
    )(v);
  }
  function p(v) {
    return s = ai(o.sliceSerialize(o.events[o.events.length - 1][1]).slice(1, -1)), v === 58 ? (t.enter("definitionMarker"), t.consume(v), t.exit("definitionMarker"), m) : a(v);
  }
  function m(v) {
    return lt(v) ? jo(t, g)(v) : g(v);
  }
  function g(v) {
    return I0(
      t,
      b,
      // Note: we don’t need to reset the way `markdown-rs` does.
      a,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(v);
  }
  function b(v) {
    return t.attempt(s5, x, x)(v);
  }
  function x(v) {
    return Be(v) ? Xe(t, w, "whitespace")(v) : w(v);
  }
  function w(v) {
    return v === null || Ee(v) ? (t.exit("definition"), o.parser.defined.push(s), i(v)) : a(v);
  }
}
function c5(t, i, a) {
  return o;
  function o(p) {
    return lt(p) ? jo(t, s)(p) : a(p);
  }
  function s(p) {
    return Z0(t, c, a, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(p);
  }
  function c(p) {
    return Be(p) ? Xe(t, f, "whitespace")(p) : f(p);
  }
  function f(p) {
    return p === null || Ee(p) ? i(p) : a(p);
  }
}
const f5 = {
  name: "hardBreakEscape",
  tokenize: d5
};
function d5(t, i, a) {
  return o;
  function o(c) {
    return t.enter("hardBreakEscape"), t.consume(c), s;
  }
  function s(c) {
    return Ee(c) ? (t.exit("hardBreakEscape"), i(c)) : a(c);
  }
}
const p5 = {
  name: "headingAtx",
  resolve: h5,
  tokenize: m5
};
function h5(t, i) {
  let a = t.length - 2, o = 3;
  if (t[o][1].type === "whitespace" && (o += 2), a - 2 > o && t[a][1].type === "whitespace" && (a -= 2), t[a][1].type === "atxHeadingSequence" && (o === a - 1 || a - 4 > o && t[a - 2][1].type === "whitespace") && (a -= o + 1 === a ? 2 : 4), a > o) {
    const s = {
      type: "atxHeadingText",
      start: t[o][1].start,
      end: t[a][1].end
    }, c = {
      type: "chunkText",
      start: t[o][1].start,
      end: t[a][1].end,
      contentType: "text"
    };
    ri(t, o, a - o + 1, [["enter", s, i], ["enter", c, i], ["exit", c, i], ["exit", s, i]]);
  }
  return t;
}
function m5(t, i, a) {
  let o = 0;
  return s;
  function s(b) {
    return t.enter("atxHeading"), c(b);
  }
  function c(b) {
    return t.enter("atxHeadingSequence"), f(b);
  }
  function f(b) {
    return b === 35 && o++ < 6 ? (t.consume(b), f) : b === null || lt(b) ? (t.exit("atxHeadingSequence"), p(b)) : a(b);
  }
  function p(b) {
    return b === 35 ? (t.enter("atxHeadingSequence"), m(b)) : b === null || Ee(b) ? (t.exit("atxHeading"), i(b)) : Be(b) ? Xe(t, p, "whitespace")(b) : (t.enter("atxHeadingText"), g(b));
  }
  function m(b) {
    return b === 35 ? (t.consume(b), m) : (t.exit("atxHeadingSequence"), p(b));
  }
  function g(b) {
    return b === null || b === 35 || lt(b) ? (t.exit("atxHeadingText"), p(b)) : (t.consume(b), g);
  }
}
const g5 = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "search",
  "section",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], Ny = ["pre", "script", "style", "textarea"], x5 = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: y5,
  tokenize: v5
}, b5 = {
  partial: !0,
  tokenize: w5
};
function y5(t) {
  let i = t.length;
  for (; i-- && !(t[i][0] === "enter" && t[i][1].type === "htmlFlow"); )
    ;
  return i > 1 && t[i - 2][1].type === "linePrefix" && (t[i][1].start = t[i - 2][1].start, t[i + 1][1].start = t[i - 2][1].start, t.splice(i - 2, 2)), t;
}
function v5(t, i, a) {
  const o = this;
  let s, c, f, p, m;
  return g;
  function g(N) {
    return b(N);
  }
  function b(N) {
    return t.enter("htmlFlow"), t.enter("htmlFlowData"), t.consume(N), x;
  }
  function x(N) {
    return N === 33 ? (t.consume(N), w) : N === 47 ? (t.consume(N), c = !0, j) : N === 63 ? (t.consume(N), s = 3, o.interrupt ? i : z) : pn(N) ? (t.consume(N), f = String.fromCharCode(N), E) : a(N);
  }
  function w(N) {
    return N === 45 ? (t.consume(N), s = 2, v) : N === 91 ? (t.consume(N), s = 5, p = 0, S) : pn(N) ? (t.consume(N), s = 4, o.interrupt ? i : z) : a(N);
  }
  function v(N) {
    return N === 45 ? (t.consume(N), o.interrupt ? i : z) : a(N);
  }
  function S(N) {
    const C = "CDATA[";
    return N === C.charCodeAt(p++) ? (t.consume(N), p === C.length ? o.interrupt ? i : oe : S) : a(N);
  }
  function j(N) {
    return pn(N) ? (t.consume(N), f = String.fromCharCode(N), E) : a(N);
  }
  function E(N) {
    if (N === null || N === 47 || N === 62 || lt(N)) {
      const C = N === 47, P = f.toLowerCase();
      return !C && !c && Ny.includes(P) ? (s = 1, o.interrupt ? i(N) : oe(N)) : g5.includes(f.toLowerCase()) ? (s = 6, C ? (t.consume(N), O) : o.interrupt ? i(N) : oe(N)) : (s = 7, o.interrupt && !o.parser.lazy[o.now().line] ? a(N) : c ? I(N) : L(N));
    }
    return N === 45 || tn(N) ? (t.consume(N), f += String.fromCharCode(N), E) : a(N);
  }
  function O(N) {
    return N === 62 ? (t.consume(N), o.interrupt ? i : oe) : a(N);
  }
  function I(N) {
    return Be(N) ? (t.consume(N), I) : Z(N);
  }
  function L(N) {
    return N === 47 ? (t.consume(N), Z) : N === 58 || N === 95 || pn(N) ? (t.consume(N), V) : Be(N) ? (t.consume(N), L) : Z(N);
  }
  function V(N) {
    return N === 45 || N === 46 || N === 58 || N === 95 || tn(N) ? (t.consume(N), V) : J(N);
  }
  function J(N) {
    return N === 61 ? (t.consume(N), T) : Be(N) ? (t.consume(N), J) : L(N);
  }
  function T(N) {
    return N === null || N === 60 || N === 61 || N === 62 || N === 96 ? a(N) : N === 34 || N === 39 ? (t.consume(N), m = N, X) : Be(N) ? (t.consume(N), T) : pe(N);
  }
  function X(N) {
    return N === m ? (t.consume(N), m = null, _e) : N === null || Ee(N) ? a(N) : (t.consume(N), X);
  }
  function pe(N) {
    return N === null || N === 34 || N === 39 || N === 47 || N === 60 || N === 61 || N === 62 || N === 96 || lt(N) ? J(N) : (t.consume(N), pe);
  }
  function _e(N) {
    return N === 47 || N === 62 || Be(N) ? L(N) : a(N);
  }
  function Z(N) {
    return N === 62 ? (t.consume(N), te) : a(N);
  }
  function te(N) {
    return N === null || Ee(N) ? oe(N) : Be(N) ? (t.consume(N), te) : a(N);
  }
  function oe(N) {
    return N === 45 && s === 2 ? (t.consume(N), W) : N === 60 && s === 1 ? (t.consume(N), de) : N === 62 && s === 4 ? (t.consume(N), Ie) : N === 63 && s === 3 ? (t.consume(N), z) : N === 93 && s === 5 ? (t.consume(N), Ae) : Ee(N) && (s === 6 || s === 7) ? (t.exit("htmlFlowData"), t.check(b5, ut, Ne)(N)) : N === null || Ee(N) ? (t.exit("htmlFlowData"), Ne(N)) : (t.consume(N), oe);
  }
  function Ne(N) {
    return t.check(dp, ue, ut)(N);
  }
  function ue(N) {
    return t.enter("lineEnding"), t.consume(N), t.exit("lineEnding"), ee;
  }
  function ee(N) {
    return N === null || Ee(N) ? Ne(N) : (t.enter("htmlFlowData"), oe(N));
  }
  function W(N) {
    return N === 45 ? (t.consume(N), z) : oe(N);
  }
  function de(N) {
    return N === 47 ? (t.consume(N), f = "", ge) : oe(N);
  }
  function ge(N) {
    if (N === 62) {
      const C = f.toLowerCase();
      return Ny.includes(C) ? (t.consume(N), Ie) : oe(N);
    }
    return pn(N) && f.length < 8 ? (t.consume(N), f += String.fromCharCode(N), ge) : oe(N);
  }
  function Ae(N) {
    return N === 93 ? (t.consume(N), z) : oe(N);
  }
  function z(N) {
    return N === 62 ? (t.consume(N), Ie) : N === 45 && s === 2 ? (t.consume(N), z) : oe(N);
  }
  function Ie(N) {
    return N === null || Ee(N) ? (t.exit("htmlFlowData"), ut(N)) : (t.consume(N), Ie);
  }
  function ut(N) {
    return t.exit("htmlFlow"), i(N);
  }
}
function w5(t, i, a) {
  return o;
  function o(s) {
    return t.enter("lineEnding"), t.consume(s), t.exit("lineEnding"), t.attempt(Mo, i, a);
  }
}
const k5 = {
  name: "htmlText",
  tokenize: S5
};
function S5(t, i, a) {
  const o = this;
  let s, c, f;
  return p;
  function p(z) {
    return t.enter("htmlText"), t.enter("htmlTextData"), t.consume(z), m;
  }
  function m(z) {
    return z === 33 ? (t.consume(z), g) : z === 47 ? (t.consume(z), J) : z === 63 ? (t.consume(z), L) : pn(z) ? (t.consume(z), pe) : a(z);
  }
  function g(z) {
    return z === 45 ? (t.consume(z), b) : z === 91 ? (t.consume(z), c = 0, S) : pn(z) ? (t.consume(z), I) : a(z);
  }
  function b(z) {
    return z === 45 ? (t.consume(z), v) : a(z);
  }
  function x(z) {
    return z === null ? a(z) : z === 45 ? (t.consume(z), w) : Ee(z) ? (f = x, de(z)) : (t.consume(z), x);
  }
  function w(z) {
    return z === 45 ? (t.consume(z), v) : x(z);
  }
  function v(z) {
    return z === 62 ? W(z) : z === 45 ? w(z) : x(z);
  }
  function S(z) {
    const Ie = "CDATA[";
    return z === Ie.charCodeAt(c++) ? (t.consume(z), c === Ie.length ? j : S) : a(z);
  }
  function j(z) {
    return z === null ? a(z) : z === 93 ? (t.consume(z), E) : Ee(z) ? (f = j, de(z)) : (t.consume(z), j);
  }
  function E(z) {
    return z === 93 ? (t.consume(z), O) : j(z);
  }
  function O(z) {
    return z === 62 ? W(z) : z === 93 ? (t.consume(z), O) : j(z);
  }
  function I(z) {
    return z === null || z === 62 ? W(z) : Ee(z) ? (f = I, de(z)) : (t.consume(z), I);
  }
  function L(z) {
    return z === null ? a(z) : z === 63 ? (t.consume(z), V) : Ee(z) ? (f = L, de(z)) : (t.consume(z), L);
  }
  function V(z) {
    return z === 62 ? W(z) : L(z);
  }
  function J(z) {
    return pn(z) ? (t.consume(z), T) : a(z);
  }
  function T(z) {
    return z === 45 || tn(z) ? (t.consume(z), T) : X(z);
  }
  function X(z) {
    return Ee(z) ? (f = X, de(z)) : Be(z) ? (t.consume(z), X) : W(z);
  }
  function pe(z) {
    return z === 45 || tn(z) ? (t.consume(z), pe) : z === 47 || z === 62 || lt(z) ? _e(z) : a(z);
  }
  function _e(z) {
    return z === 47 ? (t.consume(z), W) : z === 58 || z === 95 || pn(z) ? (t.consume(z), Z) : Ee(z) ? (f = _e, de(z)) : Be(z) ? (t.consume(z), _e) : W(z);
  }
  function Z(z) {
    return z === 45 || z === 46 || z === 58 || z === 95 || tn(z) ? (t.consume(z), Z) : te(z);
  }
  function te(z) {
    return z === 61 ? (t.consume(z), oe) : Ee(z) ? (f = te, de(z)) : Be(z) ? (t.consume(z), te) : _e(z);
  }
  function oe(z) {
    return z === null || z === 60 || z === 61 || z === 62 || z === 96 ? a(z) : z === 34 || z === 39 ? (t.consume(z), s = z, Ne) : Ee(z) ? (f = oe, de(z)) : Be(z) ? (t.consume(z), oe) : (t.consume(z), ue);
  }
  function Ne(z) {
    return z === s ? (t.consume(z), s = void 0, ee) : z === null ? a(z) : Ee(z) ? (f = Ne, de(z)) : (t.consume(z), Ne);
  }
  function ue(z) {
    return z === null || z === 34 || z === 39 || z === 60 || z === 61 || z === 96 ? a(z) : z === 47 || z === 62 || lt(z) ? _e(z) : (t.consume(z), ue);
  }
  function ee(z) {
    return z === 47 || z === 62 || lt(z) ? _e(z) : a(z);
  }
  function W(z) {
    return z === 62 ? (t.consume(z), t.exit("htmlTextData"), t.exit("htmlText"), i) : a(z);
  }
  function de(z) {
    return t.exit("htmlTextData"), t.enter("lineEnding"), t.consume(z), t.exit("lineEnding"), ge;
  }
  function ge(z) {
    return Be(z) ? Xe(t, Ae, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(z) : Ae(z);
  }
  function Ae(z) {
    return t.enter("htmlTextData"), f(z);
  }
}
const Yp = {
  name: "labelEnd",
  resolveAll: E5,
  resolveTo: C5,
  tokenize: T5
}, z5 = {
  tokenize: N5
}, _5 = {
  tokenize: A5
}, j5 = {
  tokenize: O5
};
function E5(t) {
  let i = -1;
  const a = [];
  for (; ++i < t.length; ) {
    const o = t[i][1];
    if (a.push(t[i]), o.type === "labelImage" || o.type === "labelLink" || o.type === "labelEnd") {
      const s = o.type === "labelImage" ? 4 : 2;
      o.type = "data", i += s;
    }
  }
  return t.length !== a.length && ri(t, 0, t.length, a), t;
}
function C5(t, i) {
  let a = t.length, o = 0, s, c, f;
  for (; a--; ) {
    const b = t[a][1];
    if (s) {
      if (b.type === "link" || b.type === "labelLink" && b._inactive)
        break;
      t[a][0] === "enter" && b.type === "labelLink" && (b._inactive = !0);
    } else if (c) {
      if (t[a][0] === "enter" && (b.type === "labelImage" || b.type === "labelLink") && !b._balanced && (s = a, b.type !== "labelLink")) {
        o = 2;
        break;
      }
    } else b.type === "labelEnd" && (c = a);
  }
  const p = {
    type: t[s][1].type === "labelLink" ? "link" : "image",
    start: {
      ...t[s][1].start
    },
    end: {
      ...t[t.length - 1][1].end
    }
  }, m = {
    type: "label",
    start: {
      ...t[s][1].start
    },
    end: {
      ...t[c][1].end
    }
  }, g = {
    type: "labelText",
    start: {
      ...t[s + o + 2][1].end
    },
    end: {
      ...t[c - 2][1].start
    }
  };
  return f = [["enter", p, i], ["enter", m, i]], f = Pn(f, t.slice(s + 1, s + o + 3)), f = Pn(f, [["enter", g, i]]), f = Pn(f, Iu(i.parser.constructs.insideSpan.null, t.slice(s + o + 4, c - 3), i)), f = Pn(f, [["exit", g, i], t[c - 2], t[c - 1], ["exit", m, i]]), f = Pn(f, t.slice(c + 1)), f = Pn(f, [["exit", p, i]]), ri(t, s, t.length, f), t;
}
function T5(t, i, a) {
  const o = this, s = o._labelStarts;
  let c, f;
  if (s) {
    for (; s.length > 0 && s[s.length - 1]._balanced; )
      s.pop();
    c = s[s.length - 1];
  }
  return p;
  function p(w) {
    return c ? c._inactive ? x(w) : (f = o.parser.defined.includes(ai(o.sliceSerialize({
      start: c.end,
      end: o.now()
    }))), t.enter("labelEnd"), t.enter("labelMarker"), t.consume(w), t.exit("labelMarker"), t.exit("labelEnd"), m) : a(w);
  }
  function m(w) {
    return w === 40 ? t.attempt(z5, b, f ? b : x)(w) : w === 91 ? t.attempt(_5, b, f ? g : x)(w) : f ? b(w) : x(w);
  }
  function g(w) {
    return t.attempt(j5, b, x)(w);
  }
  function b(w) {
    return s.pop(), i(w);
  }
  function x(w) {
    return c._balanced = !0, a(w);
  }
}
function N5(t, i, a) {
  return o;
  function o(x) {
    return t.enter("resource"), t.enter("resourceMarker"), t.consume(x), t.exit("resourceMarker"), s;
  }
  function s(x) {
    return lt(x) ? jo(t, c)(x) : c(x);
  }
  function c(x) {
    return x === 41 ? b(x) : I0(t, f, p, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(x);
  }
  function f(x) {
    return lt(x) ? jo(t, m)(x) : b(x);
  }
  function p(x) {
    return a(x);
  }
  function m(x) {
    return x === 34 || x === 39 || x === 40 ? Z0(t, g, a, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(x) : b(x);
  }
  function g(x) {
    return lt(x) ? jo(t, b)(x) : b(x);
  }
  function b(x) {
    return x === 41 ? (t.enter("resourceMarker"), t.consume(x), t.exit("resourceMarker"), t.exit("resource"), i) : a(x);
  }
}
function A5(t, i, a) {
  const o = this;
  return s;
  function s(p) {
    return H0.call(o, t, c, f, "reference", "referenceMarker", "referenceString")(p);
  }
  function c(p) {
    return o.parser.defined.includes(ai(o.sliceSerialize(o.events[o.events.length - 1][1]).slice(1, -1))) ? i(p) : a(p);
  }
  function f(p) {
    return a(p);
  }
}
function O5(t, i, a) {
  return o;
  function o(c) {
    return t.enter("reference"), t.enter("referenceMarker"), t.consume(c), t.exit("referenceMarker"), s;
  }
  function s(c) {
    return c === 93 ? (t.enter("referenceMarker"), t.consume(c), t.exit("referenceMarker"), t.exit("reference"), i) : a(c);
  }
}
const D5 = {
  name: "labelStartImage",
  resolveAll: Yp.resolveAll,
  tokenize: M5
};
function M5(t, i, a) {
  const o = this;
  let s;
  return c;
  function c(m) {
    return t.enter("labelImage"), t.enter("labelImageMarker"), t.consume(m), t.exit("labelImageMarker"), f;
  }
  function f(m) {
    return m === 91 ? (t.enter("labelMarker"), t.consume(m), t.exit("labelMarker"), s = t.exit("labelImage"), p) : a(m);
  }
  function p(m) {
    return m === 94 && "_hiddenFootnoteSupport" in o.parser.constructs ? a(m) : (o._labelStarts = o._labelStarts || [], o._labelStarts.push(s), i(m));
  }
}
const R5 = {
  name: "labelStartLink",
  resolveAll: Yp.resolveAll,
  tokenize: U5
};
function U5(t, i, a) {
  const o = this;
  let s;
  return c;
  function c(p) {
    return t.enter("labelLink"), t.enter("labelMarker"), t.consume(p), t.exit("labelMarker"), s = t.exit("labelLink"), f;
  }
  function f(p) {
    return p === 94 && "_hiddenFootnoteSupport" in o.parser.constructs ? a(p) : (o._labelStarts = o._labelStarts || [], o._labelStarts.push(s), i(p));
  }
}
const Rd = {
  name: "lineEnding",
  tokenize: L5
};
function L5(t, i) {
  return a;
  function a(o) {
    return t.enter("lineEnding"), t.consume(o), t.exit("lineEnding"), Xe(t, i, "linePrefix");
  }
}
const bu = {
  name: "thematicBreak",
  tokenize: B5
};
function B5(t, i, a) {
  let o = 0, s;
  return c;
  function c(g) {
    return t.enter("thematicBreak"), f(g);
  }
  function f(g) {
    return s = g, p(g);
  }
  function p(g) {
    return g === s ? (t.enter("thematicBreakSequence"), m(g)) : o >= 3 && (g === null || Ee(g)) ? (t.exit("thematicBreak"), i(g)) : a(g);
  }
  function m(g) {
    return g === s ? (t.consume(g), o++, m) : (t.exit("thematicBreakSequence"), Be(g) ? Xe(t, p, "whitespace")(g) : p(g));
  }
}
const vn = {
  continuation: {
    tokenize: q5
  },
  exit: V5,
  name: "list",
  tokenize: Z5
}, I5 = {
  partial: !0,
  tokenize: Y5
}, H5 = {
  partial: !0,
  tokenize: $5
};
function Z5(t, i, a) {
  const o = this, s = o.events[o.events.length - 1];
  let c = s && s[1].type === "linePrefix" ? s[2].sliceSerialize(s[1], !0).length : 0, f = 0;
  return p;
  function p(v) {
    const S = o.containerState.type || (v === 42 || v === 43 || v === 45 ? "listUnordered" : "listOrdered");
    if (S === "listUnordered" ? !o.containerState.marker || v === o.containerState.marker : cp(v)) {
      if (o.containerState.type || (o.containerState.type = S, t.enter(S, {
        _container: !0
      })), S === "listUnordered")
        return t.enter("listItemPrefix"), v === 42 || v === 45 ? t.check(bu, a, g)(v) : g(v);
      if (!o.interrupt || v === 49)
        return t.enter("listItemPrefix"), t.enter("listItemValue"), m(v);
    }
    return a(v);
  }
  function m(v) {
    return cp(v) && ++f < 10 ? (t.consume(v), m) : (!o.interrupt || f < 2) && (o.containerState.marker ? v === o.containerState.marker : v === 41 || v === 46) ? (t.exit("listItemValue"), g(v)) : a(v);
  }
  function g(v) {
    return t.enter("listItemMarker"), t.consume(v), t.exit("listItemMarker"), o.containerState.marker = o.containerState.marker || v, t.check(
      Mo,
      // Can’t be empty when interrupting.
      o.interrupt ? a : b,
      t.attempt(I5, w, x)
    );
  }
  function b(v) {
    return o.containerState.initialBlankLine = !0, c++, w(v);
  }
  function x(v) {
    return Be(v) ? (t.enter("listItemPrefixWhitespace"), t.consume(v), t.exit("listItemPrefixWhitespace"), w) : a(v);
  }
  function w(v) {
    return o.containerState.size = c + o.sliceSerialize(t.exit("listItemPrefix"), !0).length, i(v);
  }
}
function q5(t, i, a) {
  const o = this;
  return o.containerState._closeFlow = void 0, t.check(Mo, s, c);
  function s(p) {
    return o.containerState.furtherBlankLines = o.containerState.furtherBlankLines || o.containerState.initialBlankLine, Xe(t, i, "listItemIndent", o.containerState.size + 1)(p);
  }
  function c(p) {
    return o.containerState.furtherBlankLines || !Be(p) ? (o.containerState.furtherBlankLines = void 0, o.containerState.initialBlankLine = void 0, f(p)) : (o.containerState.furtherBlankLines = void 0, o.containerState.initialBlankLine = void 0, t.attempt(H5, i, f)(p));
  }
  function f(p) {
    return o.containerState._closeFlow = !0, o.interrupt = void 0, Xe(t, t.attempt(vn, i, a), "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(p);
  }
}
function $5(t, i, a) {
  const o = this;
  return Xe(t, s, "listItemIndent", o.containerState.size + 1);
  function s(c) {
    const f = o.events[o.events.length - 1];
    return f && f[1].type === "listItemIndent" && f[2].sliceSerialize(f[1], !0).length === o.containerState.size ? i(c) : a(c);
  }
}
function V5(t) {
  t.exit(this.containerState.type);
}
function Y5(t, i, a) {
  const o = this;
  return Xe(t, s, "listItemPrefixWhitespace", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function s(c) {
    const f = o.events[o.events.length - 1];
    return !Be(c) && f && f[1].type === "listItemPrefixWhitespace" ? i(c) : a(c);
  }
}
const Ay = {
  name: "setextUnderline",
  resolveTo: G5,
  tokenize: F5
};
function G5(t, i) {
  const a = new Nu();
  let o = t.length, s, c, f;
  for (; o--; )
    if (t[o][0] === "enter") {
      if (t[o][1].type === "content") {
        s = o;
        break;
      }
      t[o][1].type === "paragraph" && (c = o);
    } else
      t[o][1].type === "content" && a.add(o, 1, []), !f && t[o][1].type === "definition" && (f = o);
  const p = {
    type: "setextHeading",
    start: {
      ...t[s][1].start
    },
    end: {
      ...t[t.length - 1][1].end
    }
  };
  return t[c][1].type = "setextHeadingText", f ? (a.add(c, 0, [["enter", p, i]]), a.add(f + 1, 0, [["exit", t[s][1], i]]), t[s][1].end = {
    ...t[f][1].end
  }) : t[s][1] = p, a.add(t.length, 0, [["exit", p, i]]), a.consume(t), t;
}
function F5(t, i, a) {
  const o = this;
  let s;
  return c;
  function c(g) {
    let b = o.events.length, x;
    for (; b--; )
      if (o.events[b][1].type !== "lineEnding" && o.events[b][1].type !== "linePrefix" && o.events[b][1].type !== "content") {
        x = o.events[b][1].type === "paragraph";
        break;
      }
    return !o.parser.lazy[o.now().line] && (o.interrupt || x) ? (t.enter("setextHeadingLine"), s = g, f(g)) : a(g);
  }
  function f(g) {
    return t.enter("setextHeadingLineSequence"), p(g);
  }
  function p(g) {
    return g === s ? (t.consume(g), p) : (t.exit("setextHeadingLineSequence"), Be(g) ? Xe(t, m, "lineSuffix")(g) : m(g));
  }
  function m(g) {
    return g === null || Ee(g) ? (t.exit("setextHeadingLine"), i(g)) : a(g);
  }
}
const X5 = {
  tokenize: Q5
};
function Q5(t) {
  const i = this, a = t.attempt(
    // Try to parse a blank line.
    Mo,
    o,
    // Try to parse initial flow (essentially, only code).
    t.attempt(this.parser.constructs.flowInitial, s, Xe(t, t.attempt(this.parser.constructs.flow, s, t.attempt(n5, s)), "linePrefix"))
  );
  return a;
  function o(c) {
    if (c === null) {
      t.consume(c);
      return;
    }
    return t.enter("lineEndingBlank"), t.consume(c), t.exit("lineEndingBlank"), i.currentConstruct = void 0, a;
  }
  function s(c) {
    if (c === null) {
      t.consume(c);
      return;
    }
    return t.enter("lineEnding"), t.consume(c), t.exit("lineEnding"), i.currentConstruct = void 0, a;
  }
}
const P5 = {
  resolveAll: $0()
}, K5 = q0("string"), J5 = q0("text");
function q0(t) {
  return {
    resolveAll: $0(t === "text" ? W5 : void 0),
    tokenize: i
  };
  function i(a) {
    const o = this, s = this.parser.constructs[t], c = a.attempt(s, f, p);
    return f;
    function f(b) {
      return g(b) ? c(b) : p(b);
    }
    function p(b) {
      if (b === null) {
        a.consume(b);
        return;
      }
      return a.enter("data"), a.consume(b), m;
    }
    function m(b) {
      return g(b) ? (a.exit("data"), c(b)) : (a.consume(b), m);
    }
    function g(b) {
      if (b === null)
        return !0;
      const x = s[b];
      let w = -1;
      if (x)
        for (; ++w < x.length; ) {
          const v = x[w];
          if (!v.previous || v.previous.call(o, o.previous))
            return !0;
        }
      return !1;
    }
  }
}
function $0(t) {
  return i;
  function i(a, o) {
    let s = -1, c;
    for (; ++s <= a.length; )
      c === void 0 ? a[s] && a[s][1].type === "data" && (c = s, s++) : (!a[s] || a[s][1].type !== "data") && (s !== c + 2 && (a[c][1].end = a[s - 1][1].end, a.splice(c + 2, s - c - 2), s = c + 2), c = void 0);
    return t ? t(a, o) : a;
  }
}
function W5(t, i) {
  const a = new Nu();
  let o = 0;
  for (; ++o <= t.length; )
    if ((o === t.length || t[o][1].type === "lineEnding") && t[o - 1][1].type === "data") {
      const s = t[o - 1][1], c = i.sliceStream(s);
      let f = c.length, p = -1, m = 0, g;
      for (; f--; ) {
        const b = c[f];
        if (typeof b == "string") {
          for (p = b.length; b.charCodeAt(p - 1) === 32; )
            m++, p--;
          if (p)
            break;
          p = -1;
        } else if (b === -2)
          g = !0, m++;
        else if (b !== -1) {
          f++;
          break;
        }
      }
      if (i._contentTypeTextTrailing && o === t.length && (m = 0), m) {
        const b = {
          type: o === t.length || g || m < 2 ? "lineSuffix" : "hardBreakTrailing",
          start: {
            _bufferIndex: f ? p : s.start._bufferIndex + p,
            _index: s.start._index + f,
            line: s.end.line,
            column: s.end.column - m,
            offset: s.end.offset - m
          },
          end: {
            ...s.end
          }
        };
        s.end = {
          ...b.start
        }, s.start.offset === s.end.offset ? Object.assign(s, b) : a.add(o, 0, [["enter", b, i], ["exit", b, i]]);
      }
      o++;
    }
  return a.consume(t), t;
}
const eT = {
  42: vn,
  43: vn,
  45: vn,
  48: vn,
  49: vn,
  50: vn,
  51: vn,
  52: vn,
  53: vn,
  54: vn,
  55: vn,
  56: vn,
  57: vn,
  62: R0
}, tT = {
  91: o5
}, nT = {
  [-2]: Md,
  [-1]: Md,
  32: Md
}, iT = {
  35: p5,
  42: bu,
  45: [Ay, bu],
  60: x5,
  61: Ay,
  95: bu,
  96: Ty,
  126: Ty
}, rT = {
  38: L0,
  92: U0
}, aT = {
  [-5]: Rd,
  [-4]: Rd,
  [-3]: Rd,
  33: D5,
  38: L0,
  42: fp,
  60: [LC, k5],
  91: R5,
  92: [f5, U0],
  93: Yp,
  95: fp,
  96: PC
}, lT = {
  null: [fp, P5]
}, oT = {
  null: [42, 95]
}, sT = {
  null: []
}, uT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: oT,
  contentInitial: tT,
  disable: sT,
  document: eT,
  flow: iT,
  flowInitial: nT,
  insideSpan: lT,
  string: rT,
  text: aT
}, Symbol.toStringTag, { value: "Module" }));
function cT(t, i, a) {
  let o = {
    _bufferIndex: -1,
    _index: 0,
    line: a && a.line || 1,
    column: a && a.column || 1,
    offset: a && a.offset || 0
  };
  const s = {}, c = [];
  let f = [], p = [];
  const m = {
    attempt: X(J),
    check: X(T),
    consume: I,
    enter: L,
    exit: V,
    interrupt: X(T, {
      interrupt: !0
    })
  }, g = {
    code: null,
    containerState: {},
    defineSkip: j,
    events: [],
    now: S,
    parser: t,
    previous: null,
    sliceSerialize: w,
    sliceStream: v,
    write: x
  };
  let b = i.tokenize.call(g, m);
  return i.resolveAll && c.push(i), g;
  function x(te) {
    return f = Pn(f, te), E(), f[f.length - 1] !== null ? [] : (pe(i, 0), g.events = Iu(c, g.events, g), g.events);
  }
  function w(te, oe) {
    return dT(v(te), oe);
  }
  function v(te) {
    return fT(f, te);
  }
  function S() {
    const {
      _bufferIndex: te,
      _index: oe,
      line: Ne,
      column: ue,
      offset: ee
    } = o;
    return {
      _bufferIndex: te,
      _index: oe,
      line: Ne,
      column: ue,
      offset: ee
    };
  }
  function j(te) {
    s[te.line] = te.column, Z();
  }
  function E() {
    for (; o._index < f.length; ) {
      const te = f[o._index];
      if (typeof te == "string") {
        const oe = o._index;
        for (o._bufferIndex < 0 && (o._bufferIndex = 0); o._index === oe && o._bufferIndex < te.length; )
          O(te.charCodeAt(o._bufferIndex));
      } else
        O(te);
    }
  }
  function O(te) {
    b = b(te);
  }
  function I(te) {
    Ee(te) ? (o.line++, o.column = 1, o.offset += te === -3 ? 2 : 1, Z()) : te !== -1 && (o.column++, o.offset++), o._bufferIndex < 0 ? o._index++ : (o._bufferIndex++, o._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    f[o._index].length && (o._bufferIndex = -1, o._index++)), g.previous = te;
  }
  function L(te, oe) {
    const Ne = oe || {};
    return Ne.type = te, Ne.start = S(), g.events.push(["enter", Ne, g]), p.push(Ne), Ne;
  }
  function V(te) {
    const oe = p.pop();
    return oe.end = S(), g.events.push(["exit", oe, g]), oe;
  }
  function J(te, oe) {
    pe(te, oe.from);
  }
  function T(te, oe) {
    oe.restore();
  }
  function X(te, oe) {
    return Ne;
    function Ne(ue, ee, W) {
      let de, ge, Ae, z;
      return Array.isArray(ue) ? (
        /* c8 ignore next 1 */
        ut(ue)
      ) : "tokenize" in ue ? (
        // Looks like a construct.
        ut([
          /** @type {Construct} */
          ue
        ])
      ) : Ie(ue);
      function Ie(le) {
        return xe;
        function xe(Te) {
          const $ = Te !== null && le[Te], re = Te !== null && le.null, ce = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray($) ? $ : $ ? [$] : [],
            ...Array.isArray(re) ? re : re ? [re] : []
          ];
          return ut(ce)(Te);
        }
      }
      function ut(le) {
        return de = le, ge = 0, le.length === 0 ? W : N(le[ge]);
      }
      function N(le) {
        return xe;
        function xe(Te) {
          return z = _e(), Ae = le, le.partial || (g.currentConstruct = le), le.name && g.parser.constructs.disable.null.includes(le.name) ? P() : le.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            oe ? Object.assign(Object.create(g), oe) : g,
            m,
            C,
            P
          )(Te);
        }
      }
      function C(le) {
        return te(Ae, z), ee;
      }
      function P(le) {
        return z.restore(), ++ge < de.length ? N(de[ge]) : W;
      }
    }
  }
  function pe(te, oe) {
    te.resolveAll && !c.includes(te) && c.push(te), te.resolve && ri(g.events, oe, g.events.length - oe, te.resolve(g.events.slice(oe), g)), te.resolveTo && (g.events = te.resolveTo(g.events, g));
  }
  function _e() {
    const te = S(), oe = g.previous, Ne = g.currentConstruct, ue = g.events.length, ee = Array.from(p);
    return {
      from: ue,
      restore: W
    };
    function W() {
      o = te, g.previous = oe, g.currentConstruct = Ne, g.events.length = ue, p = ee, Z();
    }
  }
  function Z() {
    o.line in s && o.column < 2 && (o.column = s[o.line], o.offset += s[o.line] - 1);
  }
}
function fT(t, i) {
  const a = i.start._index, o = i.start._bufferIndex, s = i.end._index, c = i.end._bufferIndex;
  let f;
  if (a === s)
    f = [t[a].slice(o, c)];
  else {
    if (f = t.slice(a, s), o > -1) {
      const p = f[0];
      typeof p == "string" ? f[0] = p.slice(o) : f.shift();
    }
    c > 0 && f.push(t[s].slice(0, c));
  }
  return f;
}
function dT(t, i) {
  let a = -1;
  const o = [];
  let s;
  for (; ++a < t.length; ) {
    const c = t[a];
    let f;
    if (typeof c == "string")
      f = c;
    else
      switch (c) {
        case -5: {
          f = "\r";
          break;
        }
        case -4: {
          f = `
`;
          break;
        }
        case -3: {
          f = `\r
`;
          break;
        }
        case -2: {
          f = i ? " " : "	";
          break;
        }
        case -1: {
          if (!i && s)
            continue;
          f = " ";
          break;
        }
        default:
          f = String.fromCharCode(c);
      }
    s = c === -2, o.push(f);
  }
  return o.join("");
}
function pT(t) {
  const o = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      O0([uT, ...(t || {}).extensions || []])
    ),
    content: s(NC),
    defined: [],
    document: s(OC),
    flow: s(X5),
    lazy: {},
    string: s(K5),
    text: s(J5)
  };
  return o;
  function s(c) {
    return f;
    function f(p) {
      return cT(o, c, p);
    }
  }
}
function hT(t) {
  for (; !B0(t); )
    ;
  return t;
}
const Oy = /[\0\t\n\r]/g;
function mT() {
  let t = 1, i = "", a = !0, o;
  return s;
  function s(c, f, p) {
    c = i + (typeof c == "string" ? c.toString() : new TextDecoder(f || void 0).decode(c));
    const m = [];
    let g = 0;
    for (i = "", a && (c.charCodeAt(0) === 65279 && g++, a = void 0); g < c.length; ) {
      Oy.lastIndex = g;
      const b = Oy.exec(c), x = b && b.index !== void 0 ? b.index : c.length, w = c.charCodeAt(x);
      if (!b) {
        i = c.slice(g);
        break;
      }
      if (w === 10 && g === x && o)
        m.push(-3), o = void 0;
      else
        switch (o && (m.push(-5), o = void 0), g < x && (m.push(c.slice(g, x)), t += x - g), w) {
          case 0: {
            m.push(65533), t++;
            break;
          }
          case 9: {
            const v = Math.ceil(t / 4) * 4;
            for (m.push(-2); t++ < v; )
              m.push(-1);
            break;
          }
          case 10: {
            m.push(-4), t = 1;
            break;
          }
          default:
            o = !0, t = 1;
        }
      g = x + 1;
    }
    return p && (o && m.push(-5), i && m.push(i), m.push(null)), m;
  }
}
const gT = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function xT(t) {
  return t.replace(gT, bT);
}
function bT(t, i, a) {
  if (i)
    return i;
  if (a.charCodeAt(0) === 35) {
    const s = a.charCodeAt(1), c = s === 120 || s === 88;
    return D0(a.slice(c ? 2 : 1), c ? 16 : 10);
  }
  return Vp(a) || t;
}
const V0 = {}.hasOwnProperty;
function yT(t, i, a) {
  return i && typeof i == "object" && (a = i, i = void 0), vT(a)(hT(pT(a).document().write(mT()(t, i, !0))));
}
function vT(t) {
  const i = {
    afterExit: [],
    beforeEnter: [],
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: f(li),
      autolinkProtocol: Z,
      autolinkEmail: Z,
      atxHeading: f(dt),
      blockQuote: f(ce),
      characterEscape: Z,
      characterReference: Z,
      codeFenced: f(we),
      codeFencedFenceInfo: p,
      codeFencedFenceMeta: p,
      codeIndented: f(we, p),
      codeText: f(Bt, p),
      codeTextData: Z,
      data: Z,
      codeFlowValue: Z,
      definition: f(Sn),
      definitionDestinationString: p,
      definitionLabelString: p,
      definitionTitleString: p,
      emphasis: f(zn),
      hardBreakEscape: f(qe),
      hardBreakTrailing: f(qe),
      htmlFlow: f(Ge, p),
      htmlFlowData: Z,
      htmlText: f(Ge, p),
      htmlTextData: Z,
      image: f(Nt),
      label: p,
      link: f(li),
      listItem: f(oi),
      listItemValue: v,
      listOrdered: f(It, w),
      listUnordered: f(It),
      paragraph: f(si),
      reference: C,
      referenceString: p,
      resourceDestinationString: p,
      resourceTitleString: p,
      setextHeading: f(dt),
      strong: f(Ht),
      thematicBreak: f(tr)
    },
    exit: {
      atxHeading: g(),
      atxHeadingSequence: T,
      autolink: g(),
      autolinkEmail: re,
      autolinkProtocol: $,
      blockQuote: g(),
      characterEscapeValue: te,
      characterReferenceMarkerHexadecimal: le,
      characterReferenceMarkerNumeric: le,
      characterReferenceValue: xe,
      characterReference: Te,
      codeFenced: g(O),
      codeFencedFence: E,
      codeFencedFenceInfo: S,
      codeFencedFenceMeta: j,
      codeFlowValue: te,
      codeIndented: g(I),
      codeText: g(W),
      codeTextData: te,
      data: te,
      definition: g(),
      definitionDestinationString: J,
      definitionLabelString: L,
      definitionTitleString: V,
      emphasis: g(),
      hardBreakEscape: g(Ne),
      hardBreakTrailing: g(Ne),
      htmlFlow: g(ue),
      htmlFlowData: te,
      htmlText: g(ee),
      htmlTextData: te,
      image: g(ge),
      label: z,
      labelText: Ae,
      lineEnding: oe,
      link: g(de),
      listItem: g(),
      listOrdered: g(),
      listUnordered: g(),
      paragraph: g(),
      referenceString: P,
      resourceDestinationString: Ie,
      resourceTitleString: ut,
      resource: N,
      setextHeading: g(_e),
      setextHeadingLineSequence: pe,
      setextHeadingText: X,
      strong: g(),
      thematicBreak: g()
    }
  };
  Y0(i, (t || {}).mdastExtensions || []);
  const a = {};
  return o;
  function o(Y) {
    let ne = {
      type: "root",
      children: [],
      position: void 0
    };
    const be = {
      stack: [ne],
      tokenStack: [],
      config: i,
      enter: m,
      exit: b,
      buffer: p,
      resume: x,
      data: a
    }, je = [], xt = [];
    let Qe = -1;
    for (; ++Qe < Y.length; )
      if (xt.push(Y[Qe]), Y[Qe][1].type === "listOrdered" || Y[Qe][1].type === "listUnordered")
        if (Y[Qe][0] === "enter")
          je.push(xt.length - 1);
        else {
          const bt = je.pop();
          c(xt, bt);
        }
    for (Y = xt, Qe = -1; ++Qe < Y.length; ) {
      const bt = i[Y[Qe][0]];
      Y[Qe][0] === "enter" && i.beforeEnter.length > 0 && s(i.beforeEnter, {
        ...be,
        sliceSerialize: Y[Qe][2].sliceSerialize
      }, Y[Qe][1]), V0.call(bt, Y[Qe][1].type) && bt[Y[Qe][1].type].call({
        ...be,
        sliceSerialize: Y[Qe][2].sliceSerialize
      }, Y[Qe][1]), Y[Qe][0] === "exit" && i.afterExit.length > 0 && s(i.afterExit, {
        ...be,
        sliceSerialize: Y[Qe][2].sliceSerialize
      }, Y[Qe][1]);
    }
    if (be.tokenStack.length > 0) {
      const bt = be.tokenStack[be.tokenStack.length - 1];
      (bt[1] || Dy).call(be, void 0, bt[0]);
    }
    for (ne.position = {
      start: Tr(Y.length > 0 ? Y[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: Tr(Y.length > 0 ? Y[Y.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, Qe = -1; ++Qe < i.transforms.length; )
      ne = i.transforms[Qe](ne) || ne;
    return ne;
  }
  function s(Y, ne, be) {
    let je = -1;
    for (; ++je < Y.length; )
      Y[je].call(ne, be);
  }
  function c(Y, ne) {
    const be = Y.length - 1;
    let je = ne - 1, xt = -1, Qe = !1, bt, St, In, zt;
    const ci = [];
    for (; ++je <= be; ) {
      const Ot = Y[je];
      switch (Ot[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          Ot[0] === "enter" ? xt++ : xt--, zt = void 0;
          break;
        }
        case "lineEndingBlank": {
          Ot[0] === "enter" && (bt && !zt && !xt && !In && (In = je), zt = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          zt = void 0;
      }
      if (!xt && Ot[0] === "enter" && Ot[1].type === "listItemPrefix" || xt === -1 && Ot[0] === "exit" && (Ot[1].type === "listUnordered" || Ot[1].type === "listOrdered")) {
        if (bt) {
          let Kt = je;
          for (St = void 0; Kt--; ) {
            const Dt = Y[Kt];
            if (Dt[1].type === "lineEnding" || Dt[1].type === "lineEndingBlank") {
              if (Dt[0] === "exit") continue;
              St && (Y[St][1].type = "lineEndingBlank", Qe = !0), Dt[1].type = "lineEnding", St = Kt;
            } else if (!(Dt[1].type === "linePrefix" || Dt[1].type === "blockQuotePrefix" || Dt[1].type === "blockQuotePrefixWhitespace" || Dt[1].type === "blockQuoteMarker" || Dt[1].type === "listItemIndent")) break;
          }
          In && (!St || In < St) && (bt._spread = !0), bt.end = Object.assign({}, St ? Y[St][1].start : Ot[1].end), ci.push({
            at: St || je,
            event: ["exit", bt, Ot[2]]
          });
        }
        if (Ot[1].type === "listItemPrefix") {
          const Kt = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Ot[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          bt = Kt, ci.push({
            at: je,
            event: ["enter", Kt, Ot[2]]
          }), In = void 0, zt = !0;
        }
      }
    }
    const ya = Y.splice(ne);
    let Ue = 0;
    for (je = -1; ++je < ya.length; ) {
      for (; Ue < ci.length && ci[Ue].at === ne + je; )
        Y.push(ci[Ue++].event);
      Y.push(ya[je]);
    }
    Y[ne][1]._spread = Qe;
  }
  function f(Y, ne) {
    return be;
    function be(je) {
      m.call(this, Y(je), je), ne && ne.call(this, je);
    }
  }
  function p() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function m(Y, ne, be) {
    this.stack[this.stack.length - 1].children.push(Y), this.stack.push(Y), this.tokenStack.push([ne, be || void 0]), Y.position = {
      start: Tr(ne.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function g(Y) {
    return ne;
    function ne(be) {
      Y && Y.call(this, be), b.call(this, be);
    }
  }
  function b(Y, ne) {
    const be = this.stack.pop(), je = this.tokenStack.pop();
    if (!je)
      throw new Error("Cannot close `" + Y.type + "` (" + _o({
        start: Y.start,
        end: Y.end
      }) + "): it’s not open");
    je[0].type !== Y.type && (ne ? ne.call(this, Y, je[0]) : (je[1] || Dy).call(this, Y, je[0])), be.position.end = Tr(Y.end);
  }
  function x() {
    return $p(this.stack.pop());
  }
  function w() {
    this.data.expectingFirstListItemValue = !0;
  }
  function v(Y) {
    if (this.data.expectingFirstListItemValue) {
      const ne = this.stack[this.stack.length - 2];
      ne.start = Number.parseInt(this.sliceSerialize(Y), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function S() {
    const Y = this.resume(), ne = this.stack[this.stack.length - 1];
    ne.lang = Y;
  }
  function j() {
    const Y = this.resume(), ne = this.stack[this.stack.length - 1];
    ne.meta = Y;
  }
  function E() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function O() {
    const Y = this.resume(), ne = this.stack[this.stack.length - 1];
    ne.value = Y.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function I() {
    const Y = this.resume(), ne = this.stack[this.stack.length - 1];
    ne.value = Y.replace(/(\r?\n|\r)$/g, "");
  }
  function L(Y) {
    const ne = this.resume(), be = this.stack[this.stack.length - 1];
    be.label = ne, be.identifier = ai(this.sliceSerialize(Y)).toLowerCase();
  }
  function V() {
    const Y = this.resume(), ne = this.stack[this.stack.length - 1];
    ne.title = Y;
  }
  function J() {
    const Y = this.resume(), ne = this.stack[this.stack.length - 1];
    ne.url = Y;
  }
  function T(Y) {
    const ne = this.stack[this.stack.length - 1];
    if (!ne.depth) {
      const be = this.sliceSerialize(Y).length;
      ne.depth = be;
    }
  }
  function X() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function pe(Y) {
    const ne = this.stack[this.stack.length - 1];
    ne.depth = this.sliceSerialize(Y).codePointAt(0) === 61 ? 1 : 2;
  }
  function _e() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function Z(Y) {
    const be = this.stack[this.stack.length - 1].children;
    let je = be[be.length - 1];
    (!je || je.type !== "text") && (je = ui(), je.position = {
      start: Tr(Y.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, be.push(je)), this.stack.push(je);
  }
  function te(Y) {
    const ne = this.stack.pop();
    ne.value += this.sliceSerialize(Y), ne.position.end = Tr(Y.end);
  }
  function oe(Y) {
    const ne = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const be = ne.children[ne.children.length - 1];
      be.position.end = Tr(Y.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && i.canContainEols.includes(ne.type) && (Z.call(this, Y), te.call(this, Y));
  }
  function Ne() {
    this.data.atHardBreak = !0;
  }
  function ue() {
    const Y = this.resume(), ne = this.stack[this.stack.length - 1];
    ne.value = Y;
  }
  function ee() {
    const Y = this.resume(), ne = this.stack[this.stack.length - 1];
    ne.value = Y;
  }
  function W() {
    const Y = this.resume(), ne = this.stack[this.stack.length - 1];
    ne.value = Y;
  }
  function de() {
    const Y = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const ne = this.data.referenceType || "shortcut";
      Y.type += "Reference", Y.referenceType = ne, delete Y.url, delete Y.title;
    } else
      delete Y.identifier, delete Y.label;
    this.data.referenceType = void 0;
  }
  function ge() {
    const Y = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const ne = this.data.referenceType || "shortcut";
      Y.type += "Reference", Y.referenceType = ne, delete Y.url, delete Y.title;
    } else
      delete Y.identifier, delete Y.label;
    this.data.referenceType = void 0;
  }
  function Ae(Y) {
    const ne = this.sliceSerialize(Y), be = this.stack[this.stack.length - 2];
    be.label = xT(ne), be.identifier = ai(ne).toLowerCase();
  }
  function z() {
    const Y = this.stack[this.stack.length - 1], ne = this.resume(), be = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, be.type === "link") {
      const je = Y.children;
      be.children = je;
    } else
      be.alt = ne;
  }
  function Ie() {
    const Y = this.resume(), ne = this.stack[this.stack.length - 1];
    ne.url = Y;
  }
  function ut() {
    const Y = this.resume(), ne = this.stack[this.stack.length - 1];
    ne.title = Y;
  }
  function N() {
    this.data.inReference = void 0;
  }
  function C() {
    this.data.referenceType = "collapsed";
  }
  function P(Y) {
    const ne = this.resume(), be = this.stack[this.stack.length - 1];
    be.label = ne, be.identifier = ai(this.sliceSerialize(Y)).toLowerCase(), this.data.referenceType = "full";
  }
  function le(Y) {
    this.data.characterReferenceType = Y.type;
  }
  function xe(Y) {
    const ne = this.sliceSerialize(Y), be = this.data.characterReferenceType;
    let je;
    be ? (je = D0(ne, be === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : je = Vp(ne);
    const xt = this.stack[this.stack.length - 1];
    xt.value += je;
  }
  function Te(Y) {
    const ne = this.stack.pop();
    ne.position.end = Tr(Y.end);
  }
  function $(Y) {
    te.call(this, Y);
    const ne = this.stack[this.stack.length - 1];
    ne.url = this.sliceSerialize(Y);
  }
  function re(Y) {
    te.call(this, Y);
    const ne = this.stack[this.stack.length - 1];
    ne.url = "mailto:" + this.sliceSerialize(Y);
  }
  function ce() {
    return {
      type: "blockquote",
      children: [],
      position: void 0
    };
  }
  function we() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: "",
      position: void 0
    };
  }
  function Bt() {
    return {
      type: "inlineCode",
      value: "",
      position: void 0
    };
  }
  function Sn() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: "",
      position: void 0
    };
  }
  function zn() {
    return {
      type: "emphasis",
      children: [],
      position: void 0
    };
  }
  function dt() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: [],
      position: void 0
    };
  }
  function qe() {
    return {
      type: "break",
      position: void 0
    };
  }
  function Ge() {
    return {
      type: "html",
      value: "",
      position: void 0
    };
  }
  function Nt() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null,
      position: void 0
    };
  }
  function li() {
    return {
      type: "link",
      title: null,
      url: "",
      children: [],
      position: void 0
    };
  }
  function It(Y) {
    return {
      type: "list",
      ordered: Y.type === "listOrdered",
      start: null,
      spread: Y._spread,
      children: [],
      position: void 0
    };
  }
  function oi(Y) {
    return {
      type: "listItem",
      spread: Y._spread,
      checked: null,
      children: [],
      position: void 0
    };
  }
  function si() {
    return {
      type: "paragraph",
      children: [],
      position: void 0
    };
  }
  function Ht() {
    return {
      type: "strong",
      children: [],
      position: void 0
    };
  }
  function ui() {
    return {
      type: "text",
      value: "",
      position: void 0
    };
  }
  function tr() {
    return {
      type: "thematicBreak",
      position: void 0
    };
  }
}
function Tr(t) {
  return {
    line: t.line,
    column: t.column,
    offset: t.offset
  };
}
function Y0(t, i) {
  let a = -1;
  for (; ++a < i.length; ) {
    const o = i[a];
    Array.isArray(o) ? Y0(t, o) : wT(t, o);
  }
}
function wT(t, i) {
  let a;
  for (a in i)
    if (V0.call(i, a))
      switch (a) {
        case "canContainEols": {
          const o = i[a];
          o && t[a].push(...o);
          break;
        }
        case "transforms": {
          const o = i[a];
          o && t[a].push(...o);
          break;
        }
        case "afterExit":
        case "beforeEnter": {
          const o = i[a];
          o && t[a].push(o);
          break;
        }
        case "enter":
        case "exit": {
          const o = i[a];
          o && Object.assign(t[a], o);
          break;
        }
      }
}
function Dy(t, i) {
  throw t ? new Error("Cannot close `" + t.type + "` (" + _o({
    start: t.start,
    end: t.end
  }) + "): a different token (`" + i.type + "`, " + _o({
    start: i.start,
    end: i.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + i.type + "`, " + _o({
    start: i.start,
    end: i.end
  }) + ") is still open");
}
function kT(t) {
  const i = this;
  i.parser = a;
  function a(o) {
    return yT(o, {
      ...i.data("settings"),
      ...t,
      // Note: these options are not in the readme.
      // The goal is for them to be set by plugins on `data` instead of being
      // passed by users.
      extensions: i.data("micromarkExtensions") || [],
      mdastExtensions: i.data("fromMarkdownExtensions") || []
    });
  }
}
function ST(t, i) {
  const a = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: t.wrap(t.all(i), !0)
  };
  return t.patch(i, a), t.applyData(i, a);
}
function zT(t, i) {
  const a = { type: "element", tagName: "br", properties: {}, children: [] };
  return t.patch(i, a), [t.applyData(i, a), { type: "text", value: `
` }];
}
function _T(t, i) {
  const a = i.value ? i.value + `
` : "", o = {}, s = i.lang ? i.lang.split(/\s+/) : [];
  s.length > 0 && (o.className = ["language-" + s[0]]);
  let c = {
    type: "element",
    tagName: "code",
    properties: o,
    children: [{ type: "text", value: a }]
  };
  return i.meta && (c.data = { meta: i.meta }), t.patch(i, c), c = t.applyData(i, c), c = { type: "element", tagName: "pre", properties: {}, children: [c] }, t.patch(i, c), c;
}
function jT(t, i) {
  const a = {
    type: "element",
    tagName: "del",
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, a), t.applyData(i, a);
}
function ET(t, i) {
  const a = {
    type: "element",
    tagName: "em",
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, a), t.applyData(i, a);
}
function CT(t, i) {
  const a = typeof t.options.clobberPrefix == "string" ? t.options.clobberPrefix : "user-content-", o = String(i.identifier).toUpperCase(), s = yl(o.toLowerCase()), c = t.footnoteOrder.indexOf(o);
  let f, p = t.footnoteCounts.get(o);
  p === void 0 ? (p = 0, t.footnoteOrder.push(o), f = t.footnoteOrder.length) : f = c + 1, p += 1, t.footnoteCounts.set(o, p);
  const m = {
    type: "element",
    tagName: "a",
    properties: {
      href: "#" + a + "fn-" + s,
      id: a + "fnref-" + s + (p > 1 ? "-" + p : ""),
      dataFootnoteRef: !0,
      ariaDescribedBy: ["footnote-label"]
    },
    children: [{ type: "text", value: String(f) }]
  };
  t.patch(i, m);
  const g = {
    type: "element",
    tagName: "sup",
    properties: {},
    children: [m]
  };
  return t.patch(i, g), t.applyData(i, g);
}
function TT(t, i) {
  const a = {
    type: "element",
    tagName: "h" + i.depth,
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, a), t.applyData(i, a);
}
function NT(t, i) {
  if (t.options.allowDangerousHtml) {
    const a = { type: "raw", value: i.value };
    return t.patch(i, a), t.applyData(i, a);
  }
}
function G0(t, i) {
  const a = i.referenceType;
  let o = "]";
  if (a === "collapsed" ? o += "[]" : a === "full" && (o += "[" + (i.label || i.identifier) + "]"), i.type === "imageReference")
    return [{ type: "text", value: "![" + i.alt + o }];
  const s = t.all(i), c = s[0];
  c && c.type === "text" ? c.value = "[" + c.value : s.unshift({ type: "text", value: "[" });
  const f = s[s.length - 1];
  return f && f.type === "text" ? f.value += o : s.push({ type: "text", value: o }), s;
}
function AT(t, i) {
  const a = String(i.identifier).toUpperCase(), o = t.definitionById.get(a);
  if (!o)
    return G0(t, i);
  const s = { src: yl(o.url || ""), alt: i.alt };
  o.title !== null && o.title !== void 0 && (s.title = o.title);
  const c = { type: "element", tagName: "img", properties: s, children: [] };
  return t.patch(i, c), t.applyData(i, c);
}
function OT(t, i) {
  const a = { src: yl(i.url) };
  i.alt !== null && i.alt !== void 0 && (a.alt = i.alt), i.title !== null && i.title !== void 0 && (a.title = i.title);
  const o = { type: "element", tagName: "img", properties: a, children: [] };
  return t.patch(i, o), t.applyData(i, o);
}
function DT(t, i) {
  const a = { type: "text", value: i.value.replace(/\r?\n|\r/g, " ") };
  t.patch(i, a);
  const o = {
    type: "element",
    tagName: "code",
    properties: {},
    children: [a]
  };
  return t.patch(i, o), t.applyData(i, o);
}
function MT(t, i) {
  const a = String(i.identifier).toUpperCase(), o = t.definitionById.get(a);
  if (!o)
    return G0(t, i);
  const s = { href: yl(o.url || "") };
  o.title !== null && o.title !== void 0 && (s.title = o.title);
  const c = {
    type: "element",
    tagName: "a",
    properties: s,
    children: t.all(i)
  };
  return t.patch(i, c), t.applyData(i, c);
}
function RT(t, i) {
  const a = { href: yl(i.url) };
  i.title !== null && i.title !== void 0 && (a.title = i.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: a,
    children: t.all(i)
  };
  return t.patch(i, o), t.applyData(i, o);
}
function UT(t, i, a) {
  const o = t.all(i), s = a ? LT(a) : F0(i), c = {}, f = [];
  if (typeof i.checked == "boolean") {
    const b = o[0];
    let x;
    b && b.type === "element" && b.tagName === "p" ? x = b : (x = { type: "element", tagName: "p", properties: {}, children: [] }, o.unshift(x)), x.children.length > 0 && x.children.unshift({ type: "text", value: " " }), x.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: i.checked, disabled: !0 },
      children: []
    }), c.className = ["task-list-item"];
  }
  let p = -1;
  for (; ++p < o.length; ) {
    const b = o[p];
    (s || p !== 0 || b.type !== "element" || b.tagName !== "p") && f.push({ type: "text", value: `
` }), b.type === "element" && b.tagName === "p" && !s ? f.push(...b.children) : f.push(b);
  }
  const m = o[o.length - 1];
  m && (s || m.type !== "element" || m.tagName !== "p") && f.push({ type: "text", value: `
` });
  const g = { type: "element", tagName: "li", properties: c, children: f };
  return t.patch(i, g), t.applyData(i, g);
}
function LT(t) {
  let i = !1;
  if (t.type === "list") {
    i = t.spread || !1;
    const a = t.children;
    let o = -1;
    for (; !i && ++o < a.length; )
      i = F0(a[o]);
  }
  return i;
}
function F0(t) {
  const i = t.spread;
  return i ?? t.children.length > 1;
}
function BT(t, i) {
  const a = {}, o = t.all(i);
  let s = -1;
  for (typeof i.start == "number" && i.start !== 1 && (a.start = i.start); ++s < o.length; ) {
    const f = o[s];
    if (f.type === "element" && f.tagName === "li" && f.properties && Array.isArray(f.properties.className) && f.properties.className.includes("task-list-item")) {
      a.className = ["contains-task-list"];
      break;
    }
  }
  const c = {
    type: "element",
    tagName: i.ordered ? "ol" : "ul",
    properties: a,
    children: t.wrap(o, !0)
  };
  return t.patch(i, c), t.applyData(i, c);
}
function IT(t, i) {
  const a = {
    type: "element",
    tagName: "p",
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, a), t.applyData(i, a);
}
function HT(t, i) {
  const a = { type: "root", children: t.wrap(t.all(i)) };
  return t.patch(i, a), t.applyData(i, a);
}
function ZT(t, i) {
  const a = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, a), t.applyData(i, a);
}
function qT(t, i) {
  const a = t.all(i), o = a.shift(), s = [];
  if (o) {
    const f = {
      type: "element",
      tagName: "thead",
      properties: {},
      children: t.wrap([o], !0)
    };
    t.patch(i.children[0], f), s.push(f);
  }
  if (a.length > 0) {
    const f = {
      type: "element",
      tagName: "tbody",
      properties: {},
      children: t.wrap(a, !0)
    }, p = Ip(i.children[1]), m = _0(i.children[i.children.length - 1]);
    p && m && (f.position = { start: p, end: m }), s.push(f);
  }
  const c = {
    type: "element",
    tagName: "table",
    properties: {},
    children: t.wrap(s, !0)
  };
  return t.patch(i, c), t.applyData(i, c);
}
function $T(t, i, a) {
  const o = a ? a.children : void 0, c = (o ? o.indexOf(i) : 1) === 0 ? "th" : "td", f = a && a.type === "table" ? a.align : void 0, p = f ? f.length : i.children.length;
  let m = -1;
  const g = [];
  for (; ++m < p; ) {
    const x = i.children[m], w = {}, v = f ? f[m] : void 0;
    v && (w.align = v);
    let S = { type: "element", tagName: c, properties: w, children: [] };
    x && (S.children = t.all(x), t.patch(x, S), S = t.applyData(x, S)), g.push(S);
  }
  const b = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: t.wrap(g, !0)
  };
  return t.patch(i, b), t.applyData(i, b);
}
function VT(t, i) {
  const a = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, a), t.applyData(i, a);
}
const My = 9, Ry = 32;
function YT(t) {
  const i = String(t), a = /\r?\n|\r/g;
  let o = a.exec(i), s = 0;
  const c = [];
  for (; o; )
    c.push(
      Uy(i.slice(s, o.index), s > 0, !0),
      o[0]
    ), s = o.index + o[0].length, o = a.exec(i);
  return c.push(Uy(i.slice(s), s > 0, !1)), c.join("");
}
function Uy(t, i, a) {
  let o = 0, s = t.length;
  if (i) {
    let c = t.codePointAt(o);
    for (; c === My || c === Ry; )
      o++, c = t.codePointAt(o);
  }
  if (a) {
    let c = t.codePointAt(s - 1);
    for (; c === My || c === Ry; )
      s--, c = t.codePointAt(s - 1);
  }
  return s > o ? t.slice(o, s) : "";
}
function GT(t, i) {
  const a = { type: "text", value: YT(String(i.value)) };
  return t.patch(i, a), t.applyData(i, a);
}
function FT(t, i) {
  const a = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return t.patch(i, a), t.applyData(i, a);
}
const XT = {
  blockquote: ST,
  break: zT,
  code: _T,
  delete: jT,
  emphasis: ET,
  footnoteReference: CT,
  heading: TT,
  html: NT,
  imageReference: AT,
  image: OT,
  inlineCode: DT,
  linkReference: MT,
  link: RT,
  listItem: UT,
  list: BT,
  paragraph: IT,
  // @ts-expect-error: root is different, but hard to type.
  root: HT,
  strong: ZT,
  table: qT,
  tableCell: VT,
  tableRow: $T,
  text: GT,
  thematicBreak: FT,
  toml: fu,
  yaml: fu,
  definition: fu,
  footnoteDefinition: fu
};
function fu() {
}
const X0 = -1, Hu = 0, Eo = 1, Ou = 2, Gp = 3, Fp = 4, Xp = 5, Qp = 6, Q0 = 7, P0 = 8, { defineProperty: QT } = Object, K0 = typeof self == "object" ? self : globalThis, Ly = (t, i) => {
  switch (t) {
    case "Function":
    case "SharedWorker":
    case "Worker":
    case "eval":
    case "setInterval":
    case "setTimeout":
      throw new TypeError("unable to deserialize " + t);
  }
  return new K0[t](i);
}, PT = (t, i) => {
  const a = (s, c) => (t.set(c, s), s), o = (s) => {
    if (t.has(s))
      return t.get(s);
    const [c, f] = i[s];
    switch (c) {
      case Hu:
      case X0:
        return a(f, s);
      case Eo: {
        const p = a([], s);
        for (const m of f)
          p.push(o(m));
        return p;
      }
      case Ou: {
        const p = a({}, s);
        for (const [m, g] of f) {
          const b = o(m), x = o(g);
          b === "__proto__" ? QT(p, b, {
            value: x,
            configurable: !0,
            enumerable: !0,
            writable: !0
          }) : p[b] = x;
        }
        return p;
      }
      case Gp:
        return a(new Date(f), s);
      case Fp: {
        const { source: p, flags: m } = f;
        return a(new RegExp(p, m), s);
      }
      case Xp: {
        const p = a(/* @__PURE__ */ new Map(), s);
        for (const [m, g] of f)
          p.set(o(m), o(g));
        return p;
      }
      case Qp: {
        const p = a(/* @__PURE__ */ new Set(), s);
        for (const m of f)
          p.add(o(m));
        return p;
      }
      case Q0: {
        const { name: p, message: m } = f;
        return a(
          typeof K0[p] == "function" ? Ly(p, m) : new Error(m),
          s
        );
      }
      case P0:
        return a(BigInt(f), s);
      case "BigInt":
        return a(Object(BigInt(f)), s);
      case "ArrayBuffer":
        return a(new Uint8Array(f).buffer, f);
      case "DataView": {
        const { buffer: p } = new Uint8Array(f);
        return a(new DataView(p), f);
      }
      case "-0":
        return -0;
    }
    return a(Ly(c, f), s);
  };
  return o;
}, By = (t) => PT(/* @__PURE__ */ new Map(), t)(0), ca = "", { toString: KT } = {}, { keys: JT, is: WT } = Object, xo = (t) => {
  const i = typeof t;
  if (i !== "object" || !t)
    return [Hu, i];
  const a = KT.call(t).slice(8, -1);
  switch (a) {
    case "Array":
      return [Eo, ca];
    case "Object":
      return [Ou, ca];
    case "Date":
      return [Gp, ca];
    case "RegExp":
      return [Fp, ca];
    case "Map":
      return [Xp, ca];
    case "Set":
      return [Qp, ca];
    case "DataView":
      return [Eo, a];
  }
  return a.includes("Array") ? [Eo, a] : t instanceof Error ? [Q0, t.name || "Error"] : [Ou, a];
}, du = ([t, i]) => t === Hu && (i === "function" || i === "symbol"), eN = (t, i, a, o) => {
  const s = (f, p) => {
    const m = o.push(f) - 1;
    return a.set(p, m), m;
  }, c = (f) => {
    if (a.has(f))
      return a.get(f);
    let [p, m] = xo(f);
    switch (p) {
      case Hu: {
        let b = f;
        switch (m) {
          case "bigint":
            p = P0, b = f.toString();
            break;
          case "number":
            if (!f && WT(f, -0))
              return o.push(["-0"]) - 1;
            break;
          case "function":
          case "symbol":
            if (t)
              throw new TypeError("unable to serialize " + m);
            b = null;
            break;
          case "undefined":
            return s([X0], f);
        }
        return s([p, b], f);
      }
      case Eo: {
        if (m) {
          let w = f;
          return m === "DataView" ? w = new Uint8Array(f.buffer) : m === "ArrayBuffer" && (w = new Uint8Array(f)), s([m, [...w]], f);
        }
        const b = [], x = s([p, b], f);
        for (const w of f)
          b.push(c(w));
        return x;
      }
      case Ou: {
        if (m)
          switch (m) {
            case "BigInt":
              return s([m, f.toString()], f);
            case "Boolean":
            case "Number":
            case "String":
              return s([m, f.valueOf()], f);
          }
        if (i && "toJSON" in f)
          return c(f.toJSON());
        const b = [], x = s([p, b], f);
        for (const w of JT(f))
          (t || !du(xo(f[w]))) && b.push([c(w), c(f[w])]);
        return x;
      }
      case Gp:
        return s([p, isNaN(f.getTime()) ? ca : f.toISOString()], f);
      case Fp: {
        const { source: b, flags: x } = f;
        return s([p, { source: b, flags: x }], f);
      }
      case Xp: {
        const b = [], x = s([p, b], f);
        for (const [w, v] of f)
          (t || !(du(xo(w)) || du(xo(v)))) && b.push([c(w), c(v)]);
        return x;
      }
      case Qp: {
        const b = [], x = s([p, b], f);
        for (const w of f)
          (t || !du(xo(w))) && b.push(c(w));
        return x;
      }
    }
    const { message: g } = f;
    return s([p, { name: m, message: g }], f);
  };
  return c;
}, Iy = (t, { json: i, lossy: a } = {}) => {
  const o = [];
  return eN(!(i || a), !!i, /* @__PURE__ */ new Map(), o)(t), o;
}, Du = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (t, i) => i && ("json" in i || "lossy" in i) ? By(Iy(t, i)) : structuredClone(t)
) : (t, i) => By(Iy(t, i));
function tN(t, i) {
  const a = [{ type: "text", value: "↩" }];
  return i > 1 && a.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(i) }]
  }), a;
}
function nN(t, i) {
  return "Back to reference " + (t + 1) + (i > 1 ? "-" + i : "");
}
function iN(t) {
  const i = typeof t.options.clobberPrefix == "string" ? t.options.clobberPrefix : "user-content-", a = t.options.footnoteBackContent || tN, o = t.options.footnoteBackLabel || nN, s = t.options.footnoteLabel || "Footnotes", c = t.options.footnoteLabelTagName || "h2", f = t.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, p = [];
  let m = -1;
  for (; ++m < t.footnoteOrder.length; ) {
    const g = t.footnoteById.get(
      t.footnoteOrder[m]
    );
    if (!g)
      continue;
    const b = t.all(g), x = String(g.identifier).toUpperCase(), w = yl(x.toLowerCase());
    let v = 0;
    const S = [], j = t.footnoteCounts.get(x);
    for (; j !== void 0 && ++v <= j; ) {
      S.length > 0 && S.push({ type: "text", value: " " });
      let I = typeof a == "string" ? a : a(m, v);
      typeof I == "string" && (I = { type: "text", value: I }), S.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + i + "fnref-" + w + (v > 1 ? "-" + v : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof o == "string" ? o : o(m, v),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(I) ? I : [I]
      });
    }
    const E = b[b.length - 1];
    if (E && E.type === "element" && E.tagName === "p") {
      const I = E.children[E.children.length - 1];
      I && I.type === "text" ? I.value += " " : E.children.push({ type: "text", value: " " }), E.children.push(...S);
    } else
      b.push(...S);
    const O = {
      type: "element",
      tagName: "li",
      properties: { id: i + "fn-" + w },
      children: t.wrap(b, !0)
    };
    t.patch(g, O), p.push(O);
  }
  if (p.length !== 0)
    return {
      type: "element",
      tagName: "section",
      properties: { dataFootnotes: !0, className: ["footnotes"] },
      children: [
        {
          type: "element",
          tagName: c,
          properties: {
            ...Du(f),
            id: "footnote-label"
          },
          children: [{ type: "text", value: s }]
        },
        { type: "text", value: `
` },
        {
          type: "element",
          tagName: "ol",
          properties: {},
          children: t.wrap(p, !0)
        },
        { type: "text", value: `
` }
      ]
    };
}
const Zu = (
  // Note: overloads in JSDoc can’t yet use different `@template`s.
  /**
   * @type {(
   *   (<Condition extends string>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & {type: Condition}) &
   *   (<Condition extends Props>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Condition) &
   *   (<Condition extends TestFunction>(test: Condition) => (node: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node & Predicate<Condition, Node>) &
   *   ((test?: null | undefined) => (node?: unknown, index?: number | null | undefined, parent?: Parent | null | undefined, context?: unknown) => node is Node) &
   *   ((test?: Test) => Check)
   * )}
   */
  /**
   * @param {Test} [test]
   * @returns {Check}
   */
  (function(t) {
    if (t == null)
      return oN;
    if (typeof t == "function")
      return qu(t);
    if (typeof t == "object")
      return Array.isArray(t) ? rN(t) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        aN(
          /** @type {Props} */
          t
        )
      );
    if (typeof t == "string")
      return lN(t);
    throw new Error("Expected function, string, or object as test");
  })
);
function rN(t) {
  const i = [];
  let a = -1;
  for (; ++a < t.length; )
    i[a] = Zu(t[a]);
  return qu(o);
  function o(...s) {
    let c = -1;
    for (; ++c < i.length; )
      if (i[c].apply(this, s)) return !0;
    return !1;
  }
}
function aN(t) {
  const i = (
    /** @type {Record<string, unknown>} */
    t
  );
  return qu(a);
  function a(o) {
    const s = (
      /** @type {Record<string, unknown>} */
      /** @type {unknown} */
      o
    );
    let c;
    for (c in t)
      if (s[c] !== i[c]) return !1;
    return !0;
  }
}
function lN(t) {
  return qu(i);
  function i(a) {
    return a && a.type === t;
  }
}
function qu(t) {
  return i;
  function i(a, o, s) {
    return !!(sN(a) && t.call(
      this,
      a,
      typeof o == "number" ? o : void 0,
      s || void 0
    ));
  }
}
function oN() {
  return !0;
}
function sN(t) {
  return t !== null && typeof t == "object" && "type" in t;
}
const J0 = [], uN = !0, yu = !1, pp = "skip";
function hp(t, i, a, o) {
  if (!t || typeof t != "object")
    throw new Error("Unexpected value `" + t + "` for `tree`, expected node");
  let s = !0, c, f, p, m;
  if (typeof a == "function" || a && typeof a == "object" ? (c = /** @type {Test} */
  i, f = a, o && (s = !1)) : (f = /** @type {Visitors | Visitor} */
  i, a && (s = !1)), typeof f == "function")
    p = f;
  else if (f && typeof f == "object") {
    if (!(f.enter === null || f.enter === void 0)) if (typeof f.enter == "function")
      p = f.enter;
    else
      throw new Error(
        "Unexpected value `" + f.enter + "` for `visitors.enter`, expected optional visitor"
      );
    if (typeof f.exit == "function")
      m = f.exit;
    else
      throw new Error(
        "Unexpected value `" + f.exit + "` for `visitors.exit`, expected visitor (pass a visitor directly if you only want an enter visitor)"
      );
  } else
    throw new Error(
      "Unexpected value `" + f + "` for `enter` or `visitors`, expected visitor or object with visitors"
    );
  const g = Zu(c), b = s ? 1 : -1;
  x(t, void 0, [])();
  function x(w, v, S) {
    const j = (
      /** @type {Record<string, unknown>} */
      w && typeof w == "object" ? w : {}
    );
    if (typeof j.type == "string") {
      const O = (
        // `hast`
        typeof j.tagName == "string" ? j.tagName : (
          // `xast`
          typeof j.name == "string" ? j.name : void 0
        )
      );
      Object.defineProperty(E, "name", {
        value: "node (" + (w.type + (O ? "<" + O + ">" : "")) + ")"
      });
    }
    return E;
    function E() {
      const O = !c || g(w, v, S[S.length - 1] || void 0);
      let I = J0;
      if (p && O && (I = Hy(p(w, S, v)), I[0] === yu))
        return I;
      if ("children" in w && w.children) {
        const L = (
          /** @type {UnistParent} */
          w
        );
        if (L.children && I[0] !== pp) {
          let V = (s ? -1 : L.children.length) + b;
          const J = [...S, L];
          for (; V > -1 && V < L.children.length; ) {
            const T = L.children[V], X = x(T, V, J)();
            if (X[0] === yu)
              return X;
            V = typeof X[1] == "number" ? X[1] : V + b;
          }
        }
      }
      if (m && O) {
        const L = Hy(m(w, S, v));
        if (L[0] === pp)
          throw new Error(
            "Unexpected value `" + L[0] + "` from `exit`, expected `CONTINUE`, `EXIT`, index, or nothing"
          );
        if (L[0] === yu || typeof L[1] == "number")
          return L;
      }
      return I;
    }
  }
}
function Hy(t) {
  return Array.isArray(t) ? t : typeof t == "number" ? [uN, t] : t == null ? J0 : [t];
}
function Pp(t, i, a, o) {
  let s, c, f;
  c = /** @type {Visitor | Visitors} */
  i, f = a, typeof c == "function" ? hp(t, s, mp(c), f) : hp(t, s, cN(c), f);
}
function cN(t) {
  return !t || typeof t != "object" ? t : {
    enter: typeof t.enter == "function" ? mp(t.enter) : t.enter,
    exit: typeof t.exit == "function" ? mp(t.exit) : t.exit
  };
}
function mp(t) {
  return i;
  function i(a, o, s) {
    return t(a, s, o[o.length - 1]);
  }
}
const gp = {}.hasOwnProperty, fN = {};
function dN(t, i) {
  const a = i || fN, o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), f = { ...XT, ...a.handlers }, p = {
    all: g,
    applyData: hN,
    definitionById: o,
    footnoteById: s,
    footnoteCounts: c,
    footnoteOrder: [],
    handlers: f,
    one: m,
    options: a,
    patch: pN,
    wrap: gN
  };
  return Pp(t, function(b) {
    if (b.type === "definition" || b.type === "footnoteDefinition") {
      const x = b.type === "definition" ? o : s, w = String(b.identifier).toUpperCase();
      x.has(w) || x.set(w, b);
    }
  }), p;
  function m(b, x) {
    const w = b.type, v = p.handlers[w];
    if (gp.call(p.handlers, w) && v)
      return v(p, b, x);
    if (p.options.passThrough && p.options.passThrough.includes(w)) {
      if ("children" in b) {
        const { children: j, ...E } = b, O = Du(E);
        return O.children = p.all(b), O;
      }
      return Du(b);
    }
    return (p.options.unknownHandler || mN)(p, b, x);
  }
  function g(b) {
    const x = [];
    if ("children" in b) {
      const w = b.children;
      let v = -1;
      for (; ++v < w.length; ) {
        const S = p.one(w[v], b);
        if (S) {
          if (v && w[v - 1].type === "break" && (!Array.isArray(S) && S.type === "text" && (S.value = Zy(S.value)), !Array.isArray(S) && S.type === "element")) {
            const j = S.children[0];
            j && j.type === "text" && (j.value = Zy(j.value));
          }
          Array.isArray(S) ? x.push(...S) : x.push(S);
        }
      }
    }
    return x;
  }
}
function pN(t, i) {
  t.position && (i.position = nC(t));
}
function hN(t, i) {
  let a = i;
  if (t && t.data) {
    const o = t.data.hName, s = t.data.hChildren, c = t.data.hProperties;
    if (typeof o == "string")
      if (a.type === "element")
        a.tagName = o;
      else {
        const f = "children" in a ? a.children : [a];
        a = { type: "element", tagName: o, properties: {}, children: f };
      }
    a.type === "element" && c && Object.assign(a.properties, Du(c)), "children" in a && a.children && s !== null && s !== void 0 && (a.children = s);
  }
  return a;
}
function mN(t, i) {
  const a = i.data || {}, o = "value" in i && !(gp.call(a, "hProperties") || gp.call(a, "hChildren")) ? { type: "text", value: i.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, o), t.applyData(i, o);
}
function gN(t, i) {
  const a = [];
  let o = -1;
  for (i && a.push({ type: "text", value: `
` }); ++o < t.length; )
    o && a.push({ type: "text", value: `
` }), a.push(t[o]);
  return i && t.length > 0 && a.push({ type: "text", value: `
` }), a;
}
function Zy(t) {
  let i = 0, a = t.charCodeAt(i);
  for (; a === 9 || a === 32; )
    i++, a = t.charCodeAt(i);
  return t.slice(i);
}
function qy(t, i) {
  const a = dN(t, i), o = a.one(t, void 0), s = iN(a), c = Array.isArray(o) ? { type: "root", children: o } : o || { type: "root", children: [] };
  return s && c.children.push({ type: "text", value: `
` }, s), c;
}
function xN(t, i) {
  return t && "run" in t ? async function(a, o) {
    const s = (
      /** @type {HastRoot} */
      qy(a, { file: o, ...i })
    );
    await t.run(s, o);
  } : function(a, o) {
    return (
      /** @type {HastRoot} */
      qy(a, { file: o, ...t || i })
    );
  };
}
function $y(t) {
  if (t)
    throw t;
}
var Ud, Vy;
function bN() {
  if (Vy) return Ud;
  Vy = 1;
  var t = Object.prototype.hasOwnProperty, i = Object.prototype.toString, a = Object.defineProperty, o = Object.getOwnPropertyDescriptor, s = function(g) {
    return typeof Array.isArray == "function" ? Array.isArray(g) : i.call(g) === "[object Array]";
  }, c = function(g) {
    if (!g || i.call(g) !== "[object Object]")
      return !1;
    var b = t.call(g, "constructor"), x = g.constructor && g.constructor.prototype && t.call(g.constructor.prototype, "isPrototypeOf");
    if (g.constructor && !b && !x)
      return !1;
    var w;
    for (w in g)
      ;
    return typeof w > "u" || t.call(g, w);
  }, f = function(g, b) {
    a && b.name === "__proto__" ? a(g, b.name, {
      enumerable: !0,
      configurable: !0,
      value: b.newValue,
      writable: !0
    }) : g[b.name] = b.newValue;
  }, p = function(g, b) {
    if (b === "__proto__")
      if (t.call(g, b)) {
        if (o)
          return o(g, b).value;
      } else return;
    return g[b];
  };
  return Ud = function m() {
    var g, b, x, w, v, S, j = arguments[0], E = 1, O = arguments.length, I = !1;
    for (typeof j == "boolean" && (I = j, j = arguments[1] || {}, E = 2), (j == null || typeof j != "object" && typeof j != "function") && (j = {}); E < O; ++E)
      if (g = arguments[E], g != null)
        for (b in g)
          x = p(j, b), w = p(g, b), j !== w && (I && w && (c(w) || (v = s(w))) ? (v ? (v = !1, S = x && s(x) ? x : []) : S = x && c(x) ? x : {}, f(j, { name: b, newValue: m(I, S, w) })) : typeof w < "u" && f(j, { name: b, newValue: w }));
    return j;
  }, Ud;
}
var yN = bN();
const Ld = /* @__PURE__ */ iv(yN);
function xp(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const i = Object.getPrototypeOf(t);
  return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}
function vN() {
  const t = [], i = { run: a, use: o };
  return i;
  function a(...s) {
    let c = -1;
    const f = s.pop();
    if (typeof f != "function")
      throw new TypeError("Expected function as last argument, not " + f);
    p(null, ...s);
    function p(m, ...g) {
      const b = t[++c];
      let x = -1;
      if (m) {
        f(m);
        return;
      }
      for (; ++x < s.length; )
        (g[x] === null || g[x] === void 0) && (g[x] = s[x]);
      s = g, b ? wN(b, p)(...g) : f(null, ...g);
    }
  }
  function o(s) {
    if (typeof s != "function")
      throw new TypeError(
        "Expected `middelware` to be a function, not " + s
      );
    return t.push(s), i;
  }
}
function wN(t, i) {
  let a;
  return o;
  function o(...f) {
    const p = t.length > f.length;
    let m;
    p && f.push(s);
    try {
      m = t.apply(this, f);
    } catch (g) {
      const b = (
        /** @type {Error} */
        g
      );
      if (p && a)
        throw b;
      return s(b);
    }
    p || (m && m.then && typeof m.then == "function" ? m.then(c, s) : m instanceof Error ? s(m) : c(m));
  }
  function s(f, ...p) {
    a || (a = !0, i(f, ...p));
  }
  function c(f) {
    s(null, f);
  }
}
const ji = { basename: kN, dirname: SN, extname: zN, join: _N, sep: "/" };
function kN(t, i) {
  if (i !== void 0 && typeof i != "string")
    throw new TypeError('"ext" argument must be a string');
  Ro(t);
  let a = 0, o = -1, s = t.length, c;
  if (i === void 0 || i.length === 0 || i.length > t.length) {
    for (; s--; )
      if (t.codePointAt(s) === 47) {
        if (c) {
          a = s + 1;
          break;
        }
      } else o < 0 && (c = !0, o = s + 1);
    return o < 0 ? "" : t.slice(a, o);
  }
  if (i === t)
    return "";
  let f = -1, p = i.length - 1;
  for (; s--; )
    if (t.codePointAt(s) === 47) {
      if (c) {
        a = s + 1;
        break;
      }
    } else
      f < 0 && (c = !0, f = s + 1), p > -1 && (t.codePointAt(s) === i.codePointAt(p--) ? p < 0 && (o = s) : (p = -1, o = f));
  return a === o ? o = f : o < 0 && (o = t.length), t.slice(a, o);
}
function SN(t) {
  if (Ro(t), t.length === 0)
    return ".";
  let i = -1, a = t.length, o;
  for (; --a; )
    if (t.codePointAt(a) === 47) {
      if (o) {
        i = a;
        break;
      }
    } else o || (o = !0);
  return i < 0 ? t.codePointAt(0) === 47 ? "/" : "." : i === 1 && t.codePointAt(0) === 47 ? "//" : t.slice(0, i);
}
function zN(t) {
  Ro(t);
  let i = t.length, a = -1, o = 0, s = -1, c = 0, f;
  for (; i--; ) {
    const p = t.codePointAt(i);
    if (p === 47) {
      if (f) {
        o = i + 1;
        break;
      }
      continue;
    }
    a < 0 && (f = !0, a = i + 1), p === 46 ? s < 0 ? s = i : c !== 1 && (c = 1) : s > -1 && (c = -1);
  }
  return s < 0 || a < 0 || // We saw a non-dot character immediately before the dot.
  c === 0 || // The (right-most) trimmed path component is exactly `..`.
  c === 1 && s === a - 1 && s === o + 1 ? "" : t.slice(s, a);
}
function _N(...t) {
  let i = -1, a;
  for (; ++i < t.length; )
    Ro(t[i]), t[i] && (a = a === void 0 ? t[i] : a + "/" + t[i]);
  return a === void 0 ? "." : jN(a);
}
function jN(t) {
  Ro(t);
  const i = t.codePointAt(0) === 47;
  let a = EN(t, !i);
  return a.length === 0 && !i && (a = "."), a.length > 0 && t.codePointAt(t.length - 1) === 47 && (a += "/"), i ? "/" + a : a;
}
function EN(t, i) {
  let a = "", o = 0, s = -1, c = 0, f = -1, p, m;
  for (; ++f <= t.length; ) {
    if (f < t.length)
      p = t.codePointAt(f);
    else {
      if (p === 47)
        break;
      p = 47;
    }
    if (p === 47) {
      if (!(s === f - 1 || c === 1)) if (s !== f - 1 && c === 2) {
        if (a.length < 2 || o !== 2 || a.codePointAt(a.length - 1) !== 46 || a.codePointAt(a.length - 2) !== 46) {
          if (a.length > 2) {
            if (m = a.lastIndexOf("/"), m !== a.length - 1) {
              m < 0 ? (a = "", o = 0) : (a = a.slice(0, m), o = a.length - 1 - a.lastIndexOf("/")), s = f, c = 0;
              continue;
            }
          } else if (a.length > 0) {
            a = "", o = 0, s = f, c = 0;
            continue;
          }
        }
        i && (a = a.length > 0 ? a + "/.." : "..", o = 2);
      } else
        a.length > 0 ? a += "/" + t.slice(s + 1, f) : a = t.slice(s + 1, f), o = f - s - 1;
      s = f, c = 0;
    } else p === 46 && c > -1 ? c++ : c = -1;
  }
  return a;
}
function Ro(t) {
  if (typeof t != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(t)
    );
}
const CN = { cwd: TN };
function TN() {
  return "/";
}
function bp(t) {
  return !!(t !== null && typeof t == "object" && "href" in t && t.href && "protocol" in t && t.protocol && // @ts-expect-error: indexing is fine.
  t.auth === void 0);
}
function NN(t) {
  if (typeof t == "string")
    t = new URL(t);
  else if (!bp(t)) {
    const i = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + t + "`"
    );
    throw i.code = "ERR_INVALID_ARG_TYPE", i;
  }
  if (t.protocol !== "file:") {
    const i = new TypeError("The URL must be of scheme file");
    throw i.code = "ERR_INVALID_URL_SCHEME", i;
  }
  return AN(t);
}
function AN(t) {
  if (t.hostname !== "") {
    const o = new TypeError(
      'File URL host must be "localhost" or empty on darwin'
    );
    throw o.code = "ERR_INVALID_FILE_URL_HOST", o;
  }
  const i = t.pathname;
  let a = -1;
  for (; ++a < i.length; )
    if (i.codePointAt(a) === 37 && i.codePointAt(a + 1) === 50) {
      const o = i.codePointAt(a + 2);
      if (o === 70 || o === 102) {
        const s = new TypeError(
          "File URL path must not include encoded / characters"
        );
        throw s.code = "ERR_INVALID_FILE_URL_PATH", s;
      }
    }
  return decodeURIComponent(i);
}
const Bd = (
  /** @type {const} */
  [
    "history",
    "path",
    "basename",
    "stem",
    "extname",
    "dirname"
  ]
);
class W0 {
  /**
   * Create a new virtual file.
   *
   * `options` is treated as:
   *
   * *   `string` or `Uint8Array` — `{value: options}`
   * *   `URL` — `{path: options}`
   * *   `VFile` — shallow copies its data over to the new file
   * *   `object` — all fields are shallow copied over to the new file
   *
   * Path related fields are set in the following order (least specific to
   * most specific): `history`, `path`, `basename`, `stem`, `extname`,
   * `dirname`.
   *
   * You cannot set `dirname` or `extname` without setting either `history`,
   * `path`, `basename`, or `stem` too.
   *
   * @param {Compatible | null | undefined} [value]
   *   File value.
   * @returns
   *   New instance.
   */
  constructor(i) {
    let a;
    i ? bp(i) ? a = { path: i } : typeof i == "string" || ON(i) ? a = { value: i } : a = i : a = {}, this.cwd = "cwd" in a ? "" : CN.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let o = -1;
    for (; ++o < Bd.length; ) {
      const c = Bd[o];
      c in a && a[c] !== void 0 && a[c] !== null && (this[c] = c === "history" ? [...a[c]] : a[c]);
    }
    let s;
    for (s in a)
      Bd.includes(s) || (this[s] = a[s]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? ji.basename(this.path) : void 0;
  }
  /**
   * Set basename (including extname) (`'index.min.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} basename
   *   Basename.
   * @returns {undefined}
   *   Nothing.
   */
  set basename(i) {
    Hd(i, "basename"), Id(i, "basename"), this.path = ji.join(this.dirname || "", i);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? ji.dirname(this.path) : void 0;
  }
  /**
   * Set the parent path (example: `'~'`).
   *
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} dirname
   *   Dirname.
   * @returns {undefined}
   *   Nothing.
   */
  set dirname(i) {
    Yy(this.basename, "dirname"), this.path = ji.join(i || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? ji.extname(this.path) : void 0;
  }
  /**
   * Set the extname (including dot) (example: `'.js'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be set if there’s no `path` yet.
   *
   * @param {string | undefined} extname
   *   Extname.
   * @returns {undefined}
   *   Nothing.
   */
  set extname(i) {
    if (Id(i, "extname"), Yy(this.dirname, "extname"), i) {
      if (i.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (i.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = ji.join(this.dirname, this.stem + (i || ""));
  }
  /**
   * Get the full path (example: `'~/index.min.js'`).
   *
   * @returns {string}
   *   Path.
   */
  get path() {
    return this.history[this.history.length - 1];
  }
  /**
   * Set the full path (example: `'~/index.min.js'`).
   *
   * Cannot be nullified.
   * You can set a file URL (a `URL` object with a `file:` protocol) which will
   * be turned into a path with `url.fileURLToPath`.
   *
   * @param {URL | string} path
   *   Path.
   * @returns {undefined}
   *   Nothing.
   */
  set path(i) {
    bp(i) && (i = NN(i)), Hd(i, "path"), this.path !== i && this.history.push(i);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? ji.basename(this.path, this.extname) : void 0;
  }
  /**
   * Set the stem (basename w/o extname) (example: `'index.min'`).
   *
   * Cannot contain path separators (`'/'` on unix, macOS, and browsers, `'\'`
   * on windows).
   * Cannot be nullified (use `file.path = file.dirname` instead).
   *
   * @param {string} stem
   *   Stem.
   * @returns {undefined}
   *   Nothing.
   */
  set stem(i) {
    Hd(i, "stem"), Id(i, "stem"), this.path = ji.join(this.dirname || "", i + (this.extname || ""));
  }
  // Normal prototypal methods.
  /**
   * Create a fatal message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `true` (error; file not usable)
   * and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {never}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {never}
   *   Never.
   * @throws {VFileMessage}
   *   Message.
   */
  fail(i, a, o) {
    const s = this.message(i, a, o);
    throw s.fatal = !0, s;
  }
  /**
   * Create an info message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `undefined` (info; change
   * likely not needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  info(i, a, o) {
    const s = this.message(i, a, o);
    return s.fatal = void 0, s;
  }
  /**
   * Create a message for `reason` associated with the file.
   *
   * The `fatal` field of the message is set to `false` (warning; change may be
   * needed) and the `file` field is set to the current file path.
   * The message is added to the `messages` field on `file`.
   *
   * > 🪦 **Note**: also has obsolete signatures.
   *
   * @overload
   * @param {string} reason
   * @param {MessageOptions | null | undefined} [options]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {string} reason
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Node | NodeLike | null | undefined} parent
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {Point | Position | null | undefined} place
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @overload
   * @param {Error | VFileMessage} cause
   * @param {string | null | undefined} [origin]
   * @returns {VFileMessage}
   *
   * @param {Error | VFileMessage | string} causeOrReason
   *   Reason for message, should use markdown.
   * @param {Node | NodeLike | MessageOptions | Point | Position | string | null | undefined} [optionsOrParentOrPlace]
   *   Configuration (optional).
   * @param {string | null | undefined} [origin]
   *   Place in code where the message originates (example:
   *   `'my-package:my-rule'` or `'my-rule'`).
   * @returns {VFileMessage}
   *   Message.
   */
  message(i, a, o) {
    const s = new nn(
      // @ts-expect-error: the overloads are fine.
      i,
      a,
      o
    );
    return this.path && (s.name = this.path + ":" + s.name, s.file = this.path), s.fatal = !1, this.messages.push(s), s;
  }
  /**
   * Serialize the file.
   *
   * > **Note**: which encodings are supported depends on the engine.
   * > For info on Node.js, see:
   * > <https://nodejs.org/api/util.html#whatwg-supported-encodings>.
   *
   * @param {string | null | undefined} [encoding='utf8']
   *   Character encoding to understand `value` as when it’s a `Uint8Array`
   *   (default: `'utf-8'`).
   * @returns {string}
   *   Serialized file.
   */
  toString(i) {
    return this.value === void 0 ? "" : typeof this.value == "string" ? this.value : new TextDecoder(i || void 0).decode(this.value);
  }
}
function Id(t, i) {
  if (t && t.includes(ji.sep))
    throw new Error(
      "`" + i + "` cannot be a path: did not expect `" + ji.sep + "`"
    );
}
function Hd(t, i) {
  if (!t)
    throw new Error("`" + i + "` cannot be empty");
}
function Yy(t, i) {
  if (!t)
    throw new Error("Setting `" + i + "` requires `path` to be set too");
}
function ON(t) {
  return !!(t && typeof t == "object" && "byteLength" in t && "byteOffset" in t);
}
const DN = (
  /**
   * @type {new <Parameters extends Array<unknown>, Result>(property: string | symbol) => (...parameters: Parameters) => Result}
   */
  /** @type {unknown} */
  /**
   * @this {Function}
   * @param {string | symbol} property
   * @returns {(...parameters: Array<unknown>) => unknown}
   */
  (function(t) {
    const o = (
      /** @type {Record<string | symbol, Function>} */
      // Prototypes do exist.
      // type-coverage:ignore-next-line
      this.constructor.prototype
    ), s = o[t], c = function() {
      return s.apply(c, arguments);
    };
    return Object.setPrototypeOf(c, o), c;
  })
), MN = {}.hasOwnProperty;
class Kp extends DN {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = vN();
  }
  /**
   * Copy a processor.
   *
   * @deprecated
   *   This is a private internal method and should not be used.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   New *unfrozen* processor ({@linkcode Processor}) that is
   *   configured to work the same as its ancestor.
   *   When the descendant processor is configured in the future it does not
   *   affect the ancestral processor.
   */
  copy() {
    const i = (
      /** @type {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>} */
      new Kp()
    );
    let a = -1;
    for (; ++a < this.attachers.length; ) {
      const o = this.attachers[a];
      i.use(...o);
    }
    return i.data(Ld(!0, {}, this.namespace)), i;
  }
  /**
   * Configure the processor with info available to all plugins.
   * Information is stored in an object.
   *
   * Typically, options can be given to a specific plugin, but sometimes it
   * makes sense to have information shared with several plugins.
   * For example, a list of HTML elements that are self-closing, which is
   * needed during all phases.
   *
   * > **Note**: setting information cannot occur on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * > **Note**: to register custom data in TypeScript, augment the
   * > {@linkcode Data} interface.
   *
   * @example
   *   This example show how to get and set info:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   const processor = unified().data('alpha', 'bravo')
   *
   *   processor.data('alpha') // => 'bravo'
   *
   *   processor.data() // => {alpha: 'bravo'}
   *
   *   processor.data({charlie: 'delta'})
   *
   *   processor.data() // => {charlie: 'delta'}
   *   ```
   *
   * @template {keyof Data} Key
   *
   * @overload
   * @returns {Data}
   *
   * @overload
   * @param {Data} dataset
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Key} key
   * @returns {Data[Key]}
   *
   * @overload
   * @param {Key} key
   * @param {Data[Key]} value
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @param {Data | Key} [key]
   *   Key to get or set, or entire dataset to set, or nothing to get the
   *   entire dataset (optional).
   * @param {Data[Key]} [value]
   *   Value to set (optional).
   * @returns {unknown}
   *   The current processor when setting, the value at `key` when getting, or
   *   the entire dataset when getting without key.
   */
  data(i, a) {
    return typeof i == "string" ? arguments.length === 2 ? ($d("data", this.frozen), this.namespace[i] = a, this) : MN.call(this.namespace, i) && this.namespace[i] || void 0 : i ? ($d("data", this.frozen), this.namespace = i, this) : this.namespace;
  }
  /**
   * Freeze a processor.
   *
   * Frozen processors are meant to be extended and not to be configured
   * directly.
   *
   * When a processor is frozen it cannot be unfrozen.
   * New processors working the same way can be created by calling the
   * processor.
   *
   * It’s possible to freeze processors explicitly by calling `.freeze()`.
   * Processors freeze automatically when `.parse()`, `.run()`, `.runSync()`,
   * `.stringify()`, `.process()`, or `.processSync()` are called.
   *
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   The current processor.
   */
  freeze() {
    if (this.frozen)
      return this;
    const i = (
      /** @type {Processor} */
      /** @type {unknown} */
      this
    );
    for (; ++this.freezeIndex < this.attachers.length; ) {
      const [a, ...o] = this.attachers[this.freezeIndex];
      if (o[0] === !1)
        continue;
      o[0] === !0 && (o[0] = void 0);
      const s = a.call(i, ...o);
      typeof s == "function" && this.transformers.use(s);
    }
    return this.frozen = !0, this.freezeIndex = Number.POSITIVE_INFINITY, this;
  }
  /**
   * Parse text to a syntax tree.
   *
   * > **Note**: `parse` freezes the processor if not already *frozen*.
   *
   * > **Note**: `parse` performs the parse phase, not the run phase or other
   * > phases.
   *
   * @param {Compatible | undefined} [file]
   *   file to parse (optional); typically `string` or `VFile`; any value
   *   accepted as `x` in `new VFile(x)`.
   * @returns {ParseTree extends undefined ? Node : ParseTree}
   *   Syntax tree representing `file`.
   */
  parse(i) {
    this.freeze();
    const a = pu(i), o = this.parser || this.Parser;
    return Zd("parse", o), o(String(a), a);
  }
  /**
   * Process the given file as configured on the processor.
   *
   * > **Note**: `process` freezes the processor if not already *frozen*.
   *
   * > **Note**: `process` performs the parse, run, and stringify phases.
   *
   * @overload
   * @param {Compatible | undefined} file
   * @param {ProcessCallback<VFileWithOutput<CompileResult>>} done
   * @returns {undefined}
   *
   * @overload
   * @param {Compatible | undefined} [file]
   * @returns {Promise<VFileWithOutput<CompileResult>>}
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`]; any value accepted as
   *   `x` in `new VFile(x)`.
   * @param {ProcessCallback<VFileWithOutput<CompileResult>> | undefined} [done]
   *   Callback (optional).
   * @returns {Promise<VFile> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise a promise, rejected with a fatal error or resolved with the
   *   processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  process(i, a) {
    const o = this;
    return this.freeze(), Zd("process", this.parser || this.Parser), qd("process", this.compiler || this.Compiler), a ? s(void 0, a) : new Promise(s);
    function s(c, f) {
      const p = pu(i), m = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        o.parse(p)
      );
      o.run(m, p, function(b, x, w) {
        if (b || !x || !w)
          return g(b);
        const v = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          x
        ), S = o.stringify(v, w);
        LN(S) ? w.value = S : w.result = S, g(
          b,
          /** @type {VFileWithOutput<CompileResult>} */
          w
        );
      });
      function g(b, x) {
        b || !x ? f(b) : c ? c(x) : a(void 0, x);
      }
    }
  }
  /**
   * Process the given file as configured on the processor.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `processSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `processSync` performs the parse, run, and stringify phases.
   *
   * @param {Compatible | undefined} [file]
   *   File (optional); typically `string` or `VFile`; any value accepted as
   *   `x` in `new VFile(x)`.
   * @returns {VFileWithOutput<CompileResult>}
   *   The processed file.
   *
   *   The parsed, transformed, and compiled value is available at
   *   `file.value` (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most
   *   > compilers return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  processSync(i) {
    let a = !1, o;
    return this.freeze(), Zd("processSync", this.parser || this.Parser), qd("processSync", this.compiler || this.Compiler), this.process(i, s), Fy("processSync", "process", a), o;
    function s(c, f) {
      a = !0, $y(c), o = f;
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * > **Note**: `run` freezes the processor if not already *frozen*.
   *
   * > **Note**: `run` performs the run phase, not other phases.
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} file
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} done
   * @returns {undefined}
   *
   * @overload
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   * @param {Compatible | undefined} [file]
   * @returns {Promise<TailTree extends undefined ? Node : TailTree>}
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {(
   *   RunCallback<TailTree extends undefined ? Node : TailTree> |
   *   Compatible
   * )} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @param {RunCallback<TailTree extends undefined ? Node : TailTree>} [done]
   *   Callback (optional).
   * @returns {Promise<TailTree extends undefined ? Node : TailTree> | undefined}
   *   Nothing if `done` is given.
   *   Otherwise, a promise rejected with a fatal error or resolved with the
   *   transformed tree.
   */
  run(i, a, o) {
    Gy(i), this.freeze();
    const s = this.transformers;
    return !o && typeof a == "function" && (o = a, a = void 0), o ? c(void 0, o) : new Promise(c);
    function c(f, p) {
      const m = pu(a);
      s.run(i, m, g);
      function g(b, x, w) {
        const v = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          x || i
        );
        b ? p(b) : f ? f(v) : o(void 0, v, w);
      }
    }
  }
  /**
   * Run *transformers* on a syntax tree.
   *
   * An error is thrown if asynchronous transforms are configured.
   *
   * > **Note**: `runSync` freezes the processor if not already *frozen*.
   *
   * > **Note**: `runSync` performs the run phase, not other phases.
   *
   * @param {HeadTree extends undefined ? Node : HeadTree} tree
   *   Tree to transform and inspect.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {TailTree extends undefined ? Node : TailTree}
   *   Transformed tree.
   */
  runSync(i, a) {
    let o = !1, s;
    return this.run(i, a, c), Fy("runSync", "run", o), s;
    function c(f, p) {
      $y(f), s = p, o = !0;
    }
  }
  /**
   * Compile a syntax tree.
   *
   * > **Note**: `stringify` freezes the processor if not already *frozen*.
   *
   * > **Note**: `stringify` performs the stringify phase, not the run phase
   * > or other phases.
   *
   * @param {CompileTree extends undefined ? Node : CompileTree} tree
   *   Tree to compile.
   * @param {Compatible | undefined} [file]
   *   File associated with `node` (optional); any value accepted as `x` in
   *   `new VFile(x)`.
   * @returns {CompileResult extends undefined ? Value : CompileResult}
   *   Textual representation of the tree (see note).
   *
   *   > **Note**: unified typically compiles by serializing: most compilers
   *   > return `string` (or `Uint8Array`).
   *   > Some compilers, such as the one configured with
   *   > [`rehype-react`][rehype-react], return other values (in this case, a
   *   > React tree).
   *   > If you’re using a compiler that doesn’t serialize, expect different
   *   > result values.
   *   >
   *   > To register custom results in TypeScript, add them to
   *   > {@linkcode CompileResultMap}.
   *
   *   [rehype-react]: https://github.com/rehypejs/rehype-react
   */
  stringify(i, a) {
    this.freeze();
    const o = pu(a), s = this.compiler || this.Compiler;
    return qd("stringify", s), Gy(i), s(i, o);
  }
  /**
   * Configure the processor to use a plugin, a list of usable values, or a
   * preset.
   *
   * If the processor is already using a plugin, the previous plugin
   * configuration is changed based on the options that are passed in.
   * In other words, the plugin is not added a second time.
   *
   * > **Note**: `use` cannot be called on *frozen* processors.
   * > Call the processor first to create a new unfrozen processor.
   *
   * @example
   *   There are many ways to pass plugins to `.use()`.
   *   This example gives an overview:
   *
   *   ```js
   *   import {unified} from 'unified'
   *
   *   unified()
   *     // Plugin with options:
   *     .use(pluginA, {x: true, y: true})
   *     // Passing the same plugin again merges configuration (to `{x: true, y: false, z: true}`):
   *     .use(pluginA, {y: false, z: true})
   *     // Plugins:
   *     .use([pluginB, pluginC])
   *     // Two plugins, the second with options:
   *     .use([pluginD, [pluginE, {}]])
   *     // Preset with plugins and settings:
   *     .use({plugins: [pluginF, [pluginG, {}]], settings: {position: false}})
   *     // Settings only:
   *     .use({settings: {position: false}})
   *   ```
   *
   * @template {Array<unknown>} [Parameters=[]]
   * @template {Node | string | undefined} [Input=undefined]
   * @template [Output=Input]
   *
   * @overload
   * @param {Preset | null | undefined} [preset]
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {PluggableList} list
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *
   * @overload
   * @param {Plugin<Parameters, Input, Output>} plugin
   * @param {...(Parameters | [boolean])} parameters
   * @returns {UsePlugin<ParseTree, HeadTree, TailTree, CompileTree, CompileResult, Input, Output>}
   *
   * @param {PluggableList | Plugin | Preset | null | undefined} value
   *   Usable value.
   * @param {...unknown} parameters
   *   Parameters, when a plugin is given as a usable value.
   * @returns {Processor<ParseTree, HeadTree, TailTree, CompileTree, CompileResult>}
   *   Current processor.
   */
  use(i, ...a) {
    const o = this.attachers, s = this.namespace;
    if ($d("use", this.frozen), i != null) if (typeof i == "function")
      m(i, a);
    else if (typeof i == "object")
      Array.isArray(i) ? p(i) : f(i);
    else
      throw new TypeError("Expected usable value, not `" + i + "`");
    return this;
    function c(g) {
      if (typeof g == "function")
        m(g, []);
      else if (typeof g == "object")
        if (Array.isArray(g)) {
          const [b, ...x] = (
            /** @type {PluginTuple<Array<unknown>>} */
            g
          );
          m(b, x);
        } else
          f(g);
      else
        throw new TypeError("Expected usable value, not `" + g + "`");
    }
    function f(g) {
      if (!("plugins" in g) && !("settings" in g))
        throw new Error(
          "Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither"
        );
      p(g.plugins), g.settings && (s.settings = Ld(!0, s.settings, g.settings));
    }
    function p(g) {
      let b = -1;
      if (g != null) if (Array.isArray(g))
        for (; ++b < g.length; ) {
          const x = g[b];
          c(x);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + g + "`");
    }
    function m(g, b) {
      let x = -1, w = -1;
      for (; ++x < o.length; )
        if (o[x][0] === g) {
          w = x;
          break;
        }
      if (w === -1)
        o.push([g, ...b]);
      else if (b.length > 0) {
        let [v, ...S] = b;
        const j = o[w][1];
        xp(j) && xp(v) && (v = Ld(!0, j, v)), o[w] = [g, v, ...S];
      }
    }
  }
}
const RN = new Kp().freeze();
function Zd(t, i) {
  if (typeof i != "function")
    throw new TypeError("Cannot `" + t + "` without `parser`");
}
function qd(t, i) {
  if (typeof i != "function")
    throw new TypeError("Cannot `" + t + "` without `compiler`");
}
function $d(t, i) {
  if (i)
    throw new Error(
      "Cannot call `" + t + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function Gy(t) {
  if (!xp(t) || typeof t.type != "string")
    throw new TypeError("Expected node, got `" + t + "`");
}
function Fy(t, i, a) {
  if (!a)
    throw new Error(
      "`" + t + "` finished async. Use `" + i + "` instead"
    );
}
function pu(t) {
  return UN(t) ? t : new W0(t);
}
function UN(t) {
  return !!(t && typeof t == "object" && "message" in t && "messages" in t);
}
function LN(t) {
  return typeof t == "string" || BN(t);
}
function BN(t) {
  return !!(t && typeof t == "object" && "byteLength" in t && "byteOffset" in t);
}
const IN = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Xy = [], Qy = { allowDangerousHtml: !0 }, HN = /^(https?|ircs?|mailto|xmpp)$/i, ZN = [
  { from: "astPlugins", id: "remove-buggy-html-in-markdown-parser" },
  { from: "allowDangerousHtml", id: "remove-buggy-html-in-markdown-parser" },
  {
    from: "allowNode",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowElement"
  },
  {
    from: "allowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "allowedElements"
  },
  { from: "className", id: "remove-classname" },
  {
    from: "disallowedTypes",
    id: "replace-allownode-allowedtypes-and-disallowedtypes",
    to: "disallowedElements"
  },
  { from: "escapeHtml", id: "remove-buggy-html-in-markdown-parser" },
  { from: "includeElementIndex", id: "#remove-includeelementindex" },
  {
    from: "includeNodeIndex",
    id: "change-includenodeindex-to-includeelementindex"
  },
  { from: "linkTarget", id: "remove-linktarget" },
  { from: "plugins", id: "change-plugins-to-remarkplugins", to: "remarkPlugins" },
  { from: "rawSourcePos", id: "#remove-rawsourcepos" },
  { from: "renderers", id: "change-renderers-to-components", to: "components" },
  { from: "source", id: "change-source-to-children", to: "children" },
  { from: "sourcePos", id: "#remove-sourcepos" },
  { from: "transformImageUri", id: "#add-urltransform", to: "urlTransform" },
  { from: "transformLinkUri", id: "#add-urltransform", to: "urlTransform" }
];
function qN(t) {
  const i = $N(t), a = VN(t);
  return YN(i.runSync(i.parse(a), a), t);
}
function $N(t) {
  const i = t.rehypePlugins || Xy, a = t.remarkPlugins || Xy, o = t.remarkRehypeOptions ? { ...t.remarkRehypeOptions, ...Qy } : Qy;
  return RN().use(kT).use(a).use(xN, o).use(i);
}
function VN(t) {
  const i = t.children || "", a = new W0();
  return typeof i == "string" && (a.value = i), a;
}
function YN(t, i) {
  const a = i.allowedElements, o = i.allowElement, s = i.components, c = i.disallowedElements, f = i.skipHtml, p = i.unwrapDisallowed, m = i.urlTransform || GN;
  for (const b of ZN)
    Object.hasOwn(i, b.from) && ("" + b.from + (b.to ? "use `" + b.to + "` instead" : "remove it") + IN + b.id, void 0);
  return Pp(t, g), oC(t, {
    Fragment: h.Fragment,
    components: s,
    ignoreInvalidStyle: !0,
    jsx: h.jsx,
    jsxs: h.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function g(b, x, w) {
    if (b.type === "raw" && w && typeof x == "number")
      return f ? w.children.splice(x, 1) : w.children[x] = { type: "text", value: b.value }, x;
    if (b.type === "element") {
      let v;
      for (v in Dd)
        if (Object.hasOwn(Dd, v) && Object.hasOwn(b.properties, v)) {
          const S = b.properties[v], j = Dd[v];
          (j === null || j.includes(b.tagName)) && (b.properties[v] = m(String(S || ""), v, b));
        }
    }
    if (b.type === "element") {
      let v = a ? !a.includes(b.tagName) : c ? c.includes(b.tagName) : !1;
      if (!v && o && typeof x == "number" && (v = !o(b, x, w)), v && w && typeof x == "number")
        return p && b.children ? w.children.splice(x, 1, ...b.children) : w.children.splice(x, 1), x;
    }
  }
}
function GN(t) {
  const i = t.indexOf(":"), a = t.indexOf("?"), o = t.indexOf("#"), s = t.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    i === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    s !== -1 && i > s || a !== -1 && i > a || o !== -1 && i > o || // It is a protocol, it should be allowed.
    HN.test(t.slice(0, i)) ? t : ""
  );
}
function Py(t, i) {
  const a = String(t);
  if (typeof i != "string")
    throw new TypeError("Expected character");
  let o = 0, s = a.indexOf(i);
  for (; s !== -1; )
    o++, s = a.indexOf(i, s + i.length);
  return o;
}
function FN(t) {
  if (typeof t != "string")
    throw new TypeError("Expected a string");
  return t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function XN(t, i, a) {
  const s = Zu((a || {}).ignore || []), c = QN(i);
  let f = -1;
  for (; ++f < c.length; )
    hp(t, p);
  function p(g, b, x) {
    if (g.type === "text" && typeof x == "number")
      return m(g, b, x);
    if (s(g, x, b[b.length - 1])) return pp;
  }
  function m(g, b, x) {
    const w = b[b.length - 1], v = c[f][0], S = c[f][1];
    let j = 0, E = !1, O = [];
    v.lastIndex = 0;
    let I = v.exec(g.value);
    for (; I; ) {
      const V = I.index, J = {
        index: I.index,
        input: I.input,
        stack: [...b, g]
      };
      let T = S(...I, J);
      if (typeof T == "string" && (T = T.length > 0 ? { type: "text", value: T } : void 0), T === !1)
        v.lastIndex = V + 1;
      else {
        if (j !== V && L({ type: "text", value: g.value.slice(j, V) }), Array.isArray(T))
          for (const X of T) L(X);
        else T && L(T);
        j = V + I[0].length, E = !0;
      }
      if (!v.global)
        break;
      I = v.exec(g.value);
    }
    return E ? (j < g.value.length && L({ type: "text", value: g.value.slice(j) }), w.children.splice(x, 1, ...O)) : O = [g], x + O.length;
    function L(V) {
      const J = O[O.length - 1];
      J && J.type === "text" && V.type === "text" ? J.value += V.value : O.push(V);
    }
  }
}
function QN(t) {
  if (!Array.isArray(t))
    throw new TypeError("Expected find and replace tuple or list of tuples");
  const i = [], a = !t[0] || Array.isArray(t[0]) ? (
    /** @type {FindAndReplaceList} */
    t
  ) : [
    /** @type {FindAndReplaceTuple} */
    t
  ];
  let o = -1;
  for (; ++o < a.length; ) {
    const s = a[o];
    i.push([PN(s[0]), KN(s[1])]);
  }
  return i;
}
function PN(t) {
  return typeof t == "string" ? new RegExp(FN(t), "g") : t;
}
function KN(t) {
  return typeof t == "function" ? t : function() {
    return t;
  };
}
const Vd = "phrasing", Yd = ["autolink", "link", "image", "label"];
function JN() {
  return {
    transforms: [a6],
    enter: {
      literalAutolink: e6,
      literalAutolinkEmail: Gd,
      literalAutolinkHttp: Gd,
      literalAutolinkWww: Gd
    },
    exit: {
      literalAutolink: r6,
      literalAutolinkEmail: i6,
      literalAutolinkHttp: t6,
      literalAutolinkWww: n6
    }
  };
}
function WN() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: Vd,
        notInConstruct: Yd
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: Vd,
        notInConstruct: Yd
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: Vd,
        notInConstruct: Yd
      }
    ]
  };
}
function e6(t) {
  this.enter({ type: "link", title: null, url: "", children: [] }, t);
}
function Gd(t) {
  this.config.enter.autolinkProtocol.call(this, t);
}
function t6(t) {
  this.config.exit.autolinkProtocol.call(this, t);
}
function n6(t) {
  this.config.exit.data.call(this, t);
  const i = this.stack[this.stack.length - 1];
  i.type, i.url = "http://" + this.sliceSerialize(t);
}
function i6(t) {
  this.config.exit.autolinkEmail.call(this, t);
}
function r6(t) {
  this.exit(t);
}
function a6(t) {
  XN(
    t,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, l6],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), o6]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function l6(t, i, a, o, s) {
  let c = "";
  if (!ew(s) || (/^w/i.test(i) && (a = i + a, i = "", c = "http://"), !s6(a)))
    return !1;
  const f = u6(a + o);
  if (!f[0]) return !1;
  const p = {
    type: "link",
    title: null,
    url: c + i + f[0],
    children: [{ type: "text", value: i + f[0] }]
  };
  return f[1] ? [p, { type: "text", value: f[1] }] : p;
}
function o6(t, i, a, o) {
  return (
    // Not an expected previous character.
    !ew(o, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(a) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + i + "@" + a,
      children: [{ type: "text", value: i + "@" + a }]
    }
  );
}
function s6(t) {
  const i = t.split(".");
  return !(i.length < 2 || i[i.length - 1] && (/_/.test(i[i.length - 1]) || !/[a-zA-Z\d]/.test(i[i.length - 1])) || i[i.length - 2] && (/_/.test(i[i.length - 2]) || !/[a-zA-Z\d]/.test(i[i.length - 2])));
}
function u6(t) {
  const i = /[!"&'),.:;<>?\]}]+$/.exec(t);
  if (!i)
    return [t, void 0];
  t = t.slice(0, i.index);
  let a = i[0], o = a.indexOf(")");
  const s = Py(t, "(");
  let c = Py(t, ")");
  for (; o !== -1 && s > c; )
    t += a.slice(0, o + 1), a = a.slice(o + 1), o = a.indexOf(")"), c++;
  return [t, a];
}
function ew(t, i) {
  const a = t.input.charCodeAt(t.index - 1);
  return (t.index === 0 || ga(a) || Bu(a)) && // If it’s an email, the previous character should not be a slash.
  (!i || a !== 47);
}
tw.peek = b6;
function c6() {
  this.buffer();
}
function f6(t) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, t);
}
function d6() {
  this.buffer();
}
function p6(t) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    t
  );
}
function h6(t) {
  const i = this.resume(), a = this.stack[this.stack.length - 1];
  a.type, a.identifier = ai(
    this.sliceSerialize(t)
  ).toLowerCase(), a.label = i;
}
function m6(t) {
  this.exit(t);
}
function g6(t) {
  const i = this.resume(), a = this.stack[this.stack.length - 1];
  a.type, a.identifier = ai(
    this.sliceSerialize(t)
  ).toLowerCase(), a.label = i;
}
function x6(t) {
  this.exit(t);
}
function b6() {
  return "[";
}
function tw(t, i, a, o) {
  const s = a.createTracker(o);
  let c = s.move("[^");
  const f = a.enter("footnoteReference"), p = a.enter("reference");
  return c += s.move(
    a.safe(a.associationId(t), { after: "]", before: c })
  ), p(), f(), c += s.move("]"), c;
}
function y6() {
  return {
    enter: {
      gfmFootnoteCallString: c6,
      gfmFootnoteCall: f6,
      gfmFootnoteDefinitionLabelString: d6,
      gfmFootnoteDefinition: p6
    },
    exit: {
      gfmFootnoteCallString: h6,
      gfmFootnoteCall: m6,
      gfmFootnoteDefinitionLabelString: g6,
      gfmFootnoteDefinition: x6
    }
  };
}
function v6(t) {
  let i = !1;
  return t && t.firstLineBlank && (i = !0), {
    handlers: { footnoteDefinition: a, footnoteReference: tw },
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }]
  };
  function a(o, s, c, f) {
    const p = c.createTracker(f);
    let m = p.move("[^");
    const g = c.enter("footnoteDefinition"), b = c.enter("label");
    return m += p.move(
      c.safe(c.associationId(o), { before: m, after: "]" })
    ), b(), m += p.move("]:"), o.children && o.children.length > 0 && (p.shift(4), m += p.move(
      (i ? `
` : " ") + c.indentLines(
        c.containerFlow(o, p.current()),
        i ? nw : w6
      )
    )), g(), m;
  }
}
function w6(t, i, a) {
  return i === 0 ? t : nw(t, i, a);
}
function nw(t, i, a) {
  return (a ? "" : "    ") + t;
}
const k6 = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
Jp.attention = E6;
Jp.peek = C6;
function S6() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: _6 },
    exit: { strikethrough: j6 }
  };
}
function z6() {
  return {
    handlers: { delete: Jp },
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: k6
      }
    ]
  };
}
function _6(t) {
  this.enter({ type: "delete", children: [], position: void 0 }, t);
}
function j6(t) {
  this.exit(t);
}
function Jp(t, i, a, o) {
  const s = a.createTracker(o), c = a.stack.includes("strikethrough") ? "~" : "~~", f = a.enter("strikethrough");
  let p = s.move(c);
  return p += a.containerPhrasing(t, {
    ...s.current(),
    before: p,
    after: "~"
  }), p += s.move(c), f(), p;
}
function E6() {
  return { construct: "strikethrough", markers: ["~"], sizes: [2, 1] };
}
function C6() {
  return "~";
}
function T6(t) {
  return t.length;
}
function N6(t, i) {
  const a = i || {}, o = (a.align || []).concat(), s = a.stringLength || T6, c = [], f = [], p = [], m = [];
  let g = 0, b = -1;
  for (; ++b < t.length; ) {
    const j = [], E = [];
    let O = -1;
    for (t[b].length > g && (g = t[b].length); ++O < t[b].length; ) {
      const I = A6(t[b][O]);
      if (a.alignDelimiters !== !1) {
        const L = s(I);
        E[O] = L, (m[O] === void 0 || L > m[O]) && (m[O] = L);
      }
      j.push(I);
    }
    f[b] = j, p[b] = E;
  }
  let x = -1;
  if (typeof o == "object" && "length" in o)
    for (; ++x < g; )
      c[x] = Ky(o[x]);
  else {
    const j = Ky(o);
    for (; ++x < g; )
      c[x] = j;
  }
  x = -1;
  const w = [], v = [];
  for (; ++x < g; ) {
    const j = c[x];
    let E = "", O = "";
    j === 99 ? (E = ":", O = ":") : j === 108 ? E = ":" : j === 114 && (O = ":");
    let I = a.alignDelimiters === !1 ? 1 : Math.max(
      1,
      m[x] - E.length - O.length
    );
    const L = E + "-".repeat(I) + O;
    a.alignDelimiters !== !1 && (I = E.length + I + O.length, I > m[x] && (m[x] = I), v[x] = I), w[x] = L;
  }
  f.splice(1, 0, w), p.splice(1, 0, v), b = -1;
  const S = [];
  for (; ++b < f.length; ) {
    const j = f[b], E = p[b];
    x = -1;
    const O = [];
    for (; ++x < g; ) {
      const I = j[x] || "";
      let L = "", V = "";
      if (a.alignDelimiters !== !1) {
        const J = m[x] - (E[x] || 0), T = c[x];
        T === 114 ? L = " ".repeat(J) : T === 99 ? J % 2 ? (L = " ".repeat(J / 2 + 0.5), V = " ".repeat(J / 2 - 0.5)) : (L = " ".repeat(J / 2), V = L) : V = " ".repeat(J);
      }
      a.delimiterStart !== !1 && !x && O.push("|"), a.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(a.alignDelimiters === !1 && I === "") && (a.delimiterStart !== !1 || x) && O.push(" "), a.alignDelimiters !== !1 && O.push(L), O.push(I), a.alignDelimiters !== !1 && O.push(V), a.padding !== !1 && O.push(" "), (a.delimiterEnd !== !1 || x !== g - 1) && O.push("|");
    }
    S.push(
      a.delimiterEnd === !1 ? O.join("").replace(/ +$/, "") : O.join("")
    );
  }
  return S.join(`
`);
}
function A6(t) {
  return t == null ? "" : String(t);
}
function Ky(t) {
  const i = typeof t == "string" ? t.codePointAt(0) : 0;
  return i === 67 || i === 99 ? 99 : i === 76 || i === 108 ? 108 : i === 82 || i === 114 ? 114 : 0;
}
const O6 = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  Zu([
    "break",
    "delete",
    "emphasis",
    // To do: next major: removed since footnotes were added to GFM.
    "footnote",
    "footnoteReference",
    "image",
    "imageReference",
    "inlineCode",
    // Enabled by `mdast-util-math`:
    "inlineMath",
    "link",
    "linkReference",
    // Enabled by `mdast-util-mdx`:
    "mdxJsxTextElement",
    // Enabled by `mdast-util-mdx`:
    "mdxTextExpression",
    "strong",
    "text",
    // Enabled by `mdast-util-directive`:
    "textDirective"
  ])
);
function D6(t, i, a, o) {
  const s = a.enter("blockquote"), c = a.createTracker(o);
  c.move("> "), c.shift(2);
  const f = a.indentLines(
    a.containerFlow(t, c.current()),
    M6
  );
  return s(), f;
}
function M6(t, i, a) {
  return ">" + (a ? "" : " ") + t;
}
function R6(t, i) {
  return Jy(t, i.inConstruct, !0) && !Jy(t, i.notInConstruct, !1);
}
function Jy(t, i, a) {
  if (typeof i == "string" && (i = [i]), !i || i.length === 0)
    return a;
  let o = -1;
  for (; ++o < i.length; )
    if (t.includes(i[o]))
      return !0;
  return !1;
}
function Wy(t, i, a, o) {
  let s = -1;
  for (; ++s < a.unsafe.length; ) {
    const c = a.unsafe[s];
    if (c.character === `
` && !c.before && !c.after && R6(a.stack, c))
      return /[\t ]/.test(o.before) ? "" : " ";
  }
  return `\\
`;
}
function U6(t, i) {
  const a = String(t);
  let o = a.indexOf(i), s = o, c = 0, f = 0;
  if (typeof i != "string")
    throw new TypeError("Expected substring");
  for (; o !== -1; )
    o === s ? ++c > f && (f = c) : c = 1, s = o + i.length, o = a.indexOf(i, s);
  return f;
}
function L6(t, i) {
  return !!(i.options.fences === !1 && t.value && // If there’s no info…
  !t.lang && // And there’s a non-whitespace character…
  /[^\n\r ]/.test(t.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\n\r]|$)|(?:^|[\n\r])[\t ]*$/.test(t.value));
}
function B6(t) {
  const i = t.options.fence || "`";
  if (i !== "`" && i !== "~")
    throw new Error(
      "Cannot serialize code with `" + i + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return i;
}
function I6(t, i, a, o) {
  const s = B6(a), c = t.value || "";
  if (L6(t, a)) {
    const x = a.enter("codeIndented"), w = a.indentLines(c, H6);
    return x(), w;
  }
  const f = a.createTracker(o), p = s.repeat(Math.max(U6(c, s) + 1, 3)), m = a.enter("codeFenced"), g = s === "`" ? "GraveAccent" : "Tilde";
  let b = f.move(p);
  if (t.lang) {
    const x = a.enter(`codeFencedLang${g}`);
    b += f.move(
      a.safe(t.lang, {
        before: b,
        after: " ",
        encode: ["`"],
        ...f.current()
      })
    ), x();
  }
  if (t.lang && t.meta) {
    const x = a.enter(`codeFencedMeta${g}`);
    b += f.move(" "), b += f.move(
      a.safe(t.meta, {
        before: b,
        after: `
`,
        encode: ["`"],
        ...f.current()
      })
    ), x();
  }
  return b += f.move(`
`), c && (b += f.move(c + `
`)), b += f.move(p), m(), b;
}
function H6(t, i, a) {
  return (a ? "" : "    ") + t;
}
function Wp(t) {
  const i = t.options.quote || '"';
  if (i !== '"' && i !== "'")
    throw new Error(
      "Cannot serialize title with `" + i + "` for `options.quote`, expected `\"`, or `'`"
    );
  return i;
}
function Z6(t, i, a, o) {
  const s = Wp(a), c = s === '"' ? "Quote" : "Apostrophe", f = a.enter("definition");
  let p = a.enter("label");
  const m = a.createTracker(o);
  let g = m.move("[");
  return g += m.move(
    a.safe(a.associationId(t), {
      before: g,
      after: "]",
      ...m.current()
    })
  ), g += m.move("]: "), p(), // If there’s no url, or…
  !t.url || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(t.url) ? (p = a.enter("destinationLiteral"), g += m.move("<"), g += m.move(
    a.safe(t.url, { before: g, after: ">", ...m.current() })
  ), g += m.move(">")) : (p = a.enter("destinationRaw"), g += m.move(
    a.safe(t.url, {
      before: g,
      after: t.title ? " " : `
`,
      ...m.current()
    })
  )), p(), t.title && (p = a.enter(`title${c}`), g += m.move(" " + s), g += m.move(
    a.safe(t.title, {
      before: g,
      after: s,
      ...m.current()
    })
  ), g += m.move(s), p()), f(), g;
}
function q6(t) {
  const i = t.options.emphasis || "*";
  if (i !== "*" && i !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + i + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return i;
}
eh.attention = $6;
eh.peek = V6;
function eh(t, i, a, o) {
  const s = a.enter("phrasing"), c = a.containerPhrasing({ type: "root", children: [t] }, o);
  return s(), c;
}
function $6(t, i) {
  return {
    construct: "emphasis",
    markers: q6(i) === "*" ? ["*", "_"] : ["_", "*"],
    sizes: [1]
  };
}
function V6(t, i, a) {
  return a.options.emphasis || "*";
}
function Y6(t) {
  return "&#x" + t.toString(16).toUpperCase() + ";";
}
function G6(t, i) {
  let a = !1;
  return Pp(t, function(o) {
    if ("value" in o && /\r?\n|\r/.test(o.value) || o.type === "break")
      return a = !0, yu;
  }), !!((!t.depth || t.depth < 3) && $p(t) && (i.options.setext || a));
}
function F6(t, i, a, o) {
  const s = Math.max(Math.min(6, t.depth || 1), 1), c = a.createTracker(o);
  if (G6(t, a)) {
    const x = a.enter("headingSetext"), w = a.enter("phrasing"), v = a.containerPhrasing(t, {
      ...c.current(),
      before: `
`,
      after: `
`
    });
    return w(), x(), v + `
` + (s === 1 ? "=" : "-").repeat(
      // The whole size…
      v.length - // Minus the position of the character after the last EOL (or
      // 0 if there is none)…
      (Math.max(v.lastIndexOf("\r"), v.lastIndexOf(`
`)) + 1)
    );
  }
  const f = "#".repeat(s), p = a.enter("headingAtx"), m = a.enter("phrasing");
  c.move(f + " ");
  let g = a.containerPhrasing(t, {
    before: "# ",
    after: `
`,
    ...c.current()
  });
  const b = g.charCodeAt(0);
  return (b === 9 || b === 32) && (g = Y6(b) + g.slice(1)), g = g ? f + " " + g : f, a.options.closeAtx && (g += " " + f), m(), p(), g;
}
iw.peek = X6;
function iw(t) {
  return t.value || "";
}
function X6() {
  return "<";
}
rw.peek = Q6;
function rw(t, i, a, o) {
  const s = Wp(a), c = s === '"' ? "Quote" : "Apostrophe", f = a.enter("image");
  let p = a.enter("label");
  const m = a.createTracker(o);
  let g = m.move("![");
  return g += m.move(
    a.safe(t.alt, { before: g, after: "]", ...m.current() })
  ), g += m.move("]("), p(), // If there’s no url but there is a title…
  !t.url && t.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(t.url) ? (p = a.enter("destinationLiteral"), g += m.move("<"), g += m.move(
    a.safe(t.url, { before: g, after: ">", ...m.current() })
  ), g += m.move(">")) : (p = a.enter("destinationRaw"), g += m.move(
    a.safe(t.url, {
      before: g,
      after: t.title ? " " : ")",
      ...m.current()
    })
  )), p(), t.title && (p = a.enter(`title${c}`), g += m.move(" " + s), g += m.move(
    a.safe(t.title, {
      before: g,
      after: s,
      ...m.current()
    })
  ), g += m.move(s), p()), g += m.move(")"), f(), g;
}
function Q6() {
  return "!";
}
aw.peek = P6;
function aw(t, i, a, o) {
  const s = t.referenceType, c = a.enter("imageReference");
  let f = a.enter("label");
  const p = a.createTracker(o);
  let m = p.move("![");
  const g = a.safe(t.alt, {
    before: m,
    after: "]",
    ...p.current()
  });
  m += p.move(g + "]["), f();
  const b = a.stack;
  a.stack = b.filter(function(w) {
    return w !== "phrasing";
  }), f = a.enter("reference");
  const x = a.safe(a.associationId(t), {
    before: m,
    after: "]",
    ...p.current()
  });
  return f(), a.stack = b, c(), s === "full" || !g || g !== x ? m += p.move(x + "]") : s === "shortcut" ? m = m.slice(0, -1) : m += p.move("]"), m;
}
function P6() {
  return "!";
}
lw.peek = K6;
function lw(t, i, a) {
  let o = t.value || "", s = "`", c = -1;
  for (; new RegExp("(^|[^`])" + s + "([^`]|$)").test(o); )
    s += "`";
  for (/[^\n\r ]/.test(o) && (/^[\n\r ]/.test(o) && /[\n\r ]$/.test(o) || /^`|`$/.test(o)) && (o = " " + o + " "); ++c < a.unsafe.length; ) {
    const f = a.unsafe[c], p = a.compilePattern(f);
    if (!f.atBreak) continue;
    let m;
    for (; m = p.exec(o); ) {
      let g = m.index;
      o.charCodeAt(g) === 10 && o.charCodeAt(g - 1) === 13 && g--, o = o.slice(0, g) + " " + o.slice(m.index + 1);
    }
  }
  return s + o + s;
}
function K6() {
  return "`";
}
function ow(t, i) {
  const a = $p(t);
  return !!(!i.options.resourceLink && // If there’s a url…
  t.url && // And there’s no title…
  !t.title && // And the content of `node` is a single text node…
  t.children && t.children.length === 1 && t.children[0].type === "text" && // And if the url is the same as the content…
  (a === t.url || "mailto:" + a === t.url) && // And that starts w/ a protocol…
  /^[a-z][+\-.a-z]+:/i.test(t.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(t.url));
}
sw.peek = J6;
function sw(t, i, a, o) {
  const s = Wp(a), c = s === '"' ? "Quote" : "Apostrophe", f = a.createTracker(o);
  if (ow(t, a)) {
    const b = a.stack;
    a.stack = b.filter(function(v) {
      return v !== "phrasing";
    });
    const x = a.enter("autolink");
    let w = f.move("<");
    return w += f.move(
      a.containerPhrasing(t, {
        before: w,
        after: ">",
        ...f.current()
      })
    ), w += f.move(">"), x(), a.stack = b, w;
  }
  const p = a.enter("link");
  let m = a.enter("label"), g = f.move("[");
  return g += f.move(
    a.containerPhrasing(t, {
      before: g,
      after: "](",
      ...f.current()
    })
  ), g += f.move("]("), m(), // If there’s no url but there is a title…
  !t.url && t.title || // If there are control characters or whitespace.
  /[\0- \u007F]/.test(t.url) ? (m = a.enter("destinationLiteral"), g += f.move("<"), g += f.move(
    a.safe(t.url, { before: g, after: ">", ...f.current() })
  ), g += f.move(">")) : (m = a.enter("destinationRaw"), g += f.move(
    a.safe(t.url, {
      before: g,
      after: t.title ? " " : ")",
      ...f.current()
    })
  )), m(), t.title && (m = a.enter(`title${c}`), g += f.move(" " + s), g += f.move(
    a.safe(t.title, {
      before: g,
      after: s,
      ...f.current()
    })
  ), g += f.move(s), m()), g += f.move(")"), p(), g;
}
function J6(t, i, a) {
  return ow(t, a) ? "<" : "[";
}
uw.peek = W6;
function uw(t, i, a, o) {
  const s = t.referenceType, c = a.enter("linkReference");
  let f = a.enter("label");
  const p = a.createTracker(o);
  let m = p.move("[");
  const g = a.containerPhrasing(t, {
    before: m,
    after: "]",
    ...p.current()
  });
  m += p.move(g + "]["), f();
  const b = a.stack;
  a.stack = b.filter(function(w) {
    return w !== "phrasing";
  }), f = a.enter("reference");
  const x = a.safe(a.associationId(t), {
    before: m,
    after: "]",
    ...p.current()
  });
  return f(), a.stack = b, c(), s === "full" || !g || g !== x ? m += p.move(x + "]") : s === "shortcut" ? m = m.slice(0, -1) : m += p.move("]"), m;
}
function W6() {
  return "[";
}
function th(t) {
  const i = t.options.bullet || "*";
  if (i !== "*" && i !== "+" && i !== "-")
    throw new Error(
      "Cannot serialize items with `" + i + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return i;
}
function eA(t) {
  const i = th(t), a = t.options.bulletOther;
  if (!a)
    return i === "*" ? "-" : "*";
  if (a !== "*" && a !== "+" && a !== "-")
    throw new Error(
      "Cannot serialize items with `" + a + "` for `options.bulletOther`, expected `*`, `+`, or `-`"
    );
  if (a === i)
    throw new Error(
      "Expected `bullet` (`" + i + "`) and `bulletOther` (`" + a + "`) to be different"
    );
  return a;
}
function tA(t) {
  const i = t.options.bulletOrdered || ".";
  if (i !== "." && i !== ")")
    throw new Error(
      "Cannot serialize items with `" + i + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return i;
}
function cw(t) {
  const i = t.options.rule || "*";
  if (i !== "*" && i !== "-" && i !== "_")
    throw new Error(
      "Cannot serialize rules with `" + i + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return i;
}
function nA(t, i, a, o) {
  const s = a.enter("list"), c = a.bulletCurrent;
  let f = t.ordered ? tA(a) : th(a);
  const p = t.ordered ? f === "." ? ")" : "." : eA(a);
  let m = i && a.bulletLastUsed ? f === a.bulletLastUsed : !1;
  if (!t.ordered) {
    const b = t.children ? t.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (f === "*" || f === "-") && // Empty first list item:
      b && (!b.children || !b.children[0]) && // Directly in two other list items:
      a.stack[a.stack.length - 1] === "list" && a.stack[a.stack.length - 2] === "listItem" && a.stack[a.stack.length - 3] === "list" && a.stack[a.stack.length - 4] === "listItem" && // That are each the first child.
      a.indexStack[a.indexStack.length - 1] === 0 && a.indexStack[a.indexStack.length - 2] === 0 && a.indexStack[a.indexStack.length - 3] === 0 && (m = !0), cw(a) === f && b
    ) {
      let x = -1;
      for (; ++x < t.children.length; ) {
        const w = t.children[x];
        if (w && w.type === "listItem" && w.children && w.children[0] && w.children[0].type === "thematicBreak") {
          m = !0;
          break;
        }
      }
    }
  }
  m && (f = p), a.bulletCurrent = f;
  const g = a.containerFlow(t, o);
  return a.bulletLastUsed = f, a.bulletCurrent = c, s(), g;
}
function iA(t) {
  const i = t.options.listItemIndent || "one";
  if (i !== "tab" && i !== "one" && i !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + i + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return i;
}
function rA(t, i, a, o) {
  const s = iA(a);
  let c = a.bulletCurrent || th(a);
  i && i.type === "list" && i.ordered && (c = (typeof i.start == "number" && i.start > -1 ? i.start : 1) + (a.options.incrementListMarker === !1 ? 0 : i.children.indexOf(t)) + c);
  let f = c.length + 1;
  (s === "tab" || s === "mixed" && (i && i.type === "list" && i.spread || t.spread)) && (f = Math.ceil(f / 4) * 4);
  const p = a.createTracker(o);
  p.move(c + " ".repeat(f - c.length)), p.shift(f);
  const m = a.enter("listItem"), g = a.indentLines(
    a.containerFlow(t, p.current()),
    b
  );
  return m(), g;
  function b(x, w, v) {
    return w ? (v ? "" : " ".repeat(f)) + x : (v ? c : c + " ".repeat(f - c.length)) + x;
  }
}
function aA(t, i, a, o) {
  const s = a.enter("paragraph"), c = a.enter("phrasing"), f = a.containerPhrasing(t, o);
  return c(), s(), f;
}
function lA(t, i, a, o) {
  if (!t.children.some(function(p) {
    return O6(p);
  })) return a.containerFlow(t, o);
  const c = a.enter("phrasing"), f = a.containerPhrasing(t, o);
  return c(), f;
}
function oA(t) {
  const i = t.options.strong || "*";
  if (i !== "*" && i !== "_")
    throw new Error(
      "Cannot serialize strong with `" + i + "` for `options.strong`, expected `*`, or `_`"
    );
  return i;
}
nh.attention = sA;
nh.peek = uA;
function nh(t, i, a, o) {
  const s = a.enter("phrasing"), c = a.containerPhrasing({ type: "root", children: [t] }, o);
  return s(), c;
}
function sA(t, i) {
  return {
    construct: "strong",
    markers: oA(i) === "*" ? ["*", "_"] : ["_", "*"],
    sizes: [2]
  };
}
function uA(t, i, a) {
  return a.options.strong || "*";
}
function cA(t, i, a, o) {
  const s = i ? i.children : [], c = s.indexOf(t);
  return a.safe(t.value, {
    ...o,
    afterNode: s[c + 1],
    beforeNode: s[c - 1]
  });
}
function fA(t) {
  const i = t.options.ruleRepetition || 3;
  if (i < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + i + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return i;
}
function dA(t, i, a) {
  const o = (cw(a) + (a.options.ruleSpaces ? " " : "")).repeat(fA(a));
  return a.options.ruleSpaces ? o.slice(0, -1) : o;
}
const fw = {
  blockquote: D6,
  break: Wy,
  code: I6,
  definition: Z6,
  emphasis: eh,
  hardBreak: Wy,
  heading: F6,
  html: iw,
  image: rw,
  imageReference: aw,
  inlineCode: lw,
  link: sw,
  linkReference: uw,
  list: nA,
  listItem: rA,
  paragraph: aA,
  root: lA,
  strong: nh,
  text: cA,
  thematicBreak: dA
};
function pA() {
  return {
    enter: {
      table: hA,
      tableData: ev,
      tableHeader: ev,
      tableRow: gA
    },
    exit: {
      codeText: xA,
      table: mA,
      tableData: Fd,
      tableHeader: Fd,
      tableRow: Fd
    }
  };
}
function hA(t) {
  const i = t._align;
  this.enter(
    {
      type: "table",
      align: i.map(function(a) {
        return a === "none" ? null : a;
      }),
      children: []
    },
    t
  ), this.data.inTable = !0;
}
function mA(t) {
  this.exit(t), this.data.inTable = void 0;
}
function gA(t) {
  this.enter({ type: "tableRow", children: [] }, t);
}
function Fd(t) {
  this.exit(t);
}
function ev(t) {
  this.enter({ type: "tableCell", children: [] }, t);
}
function xA(t) {
  let i = this.resume();
  this.data.inTable && (i = i.replace(/\\([\\|])/g, bA));
  const a = this.stack[this.stack.length - 1];
  a.type, a.value = i, this.exit(t);
}
function bA(t, i) {
  return i === "|" ? i : t;
}
function yA(t) {
  const i = t || {}, a = i.tableCellPadding, o = i.tablePipeAlign, s = i.stringLength, c = a ? " " : "|";
  return {
    unsafe: [
      { character: "\r", inConstruct: "tableCell" },
      { character: `
`, inConstruct: "tableCell" },
      // A pipe, when followed by a tab or space (padding), or a dash or colon
      // (unpadded delimiter row), could result in a table.
      { atBreak: !0, character: "|", after: "[	 :-]" },
      // A pipe in a cell must be encoded.
      { character: "|", inConstruct: "tableCell" },
      // A colon must be followed by a dash, in which case it could start a
      // delimiter row.
      { atBreak: !0, character: ":", after: "-" },
      // A delimiter row can also start with a dash, when followed by more
      // dashes, a colon, or a pipe.
      // This is a stricter version than the built in check for lists, thematic
      // breaks, and setex heading underlines though:
      // <https://github.com/syntax-tree/mdast-util-to-markdown/blob/51a2038/lib/unsafe.js#L57>
      { atBreak: !0, character: "-", after: "[:|-]" }
    ],
    handlers: {
      inlineCode: w,
      table: f,
      tableCell: m,
      tableRow: p
    }
  };
  function f(v, S, j, E) {
    return g(b(v, j, E), v.align);
  }
  function p(v, S, j, E) {
    const O = x(v, j, E), I = g([O]);
    return I.slice(0, I.indexOf(`
`));
  }
  function m(v, S, j, E) {
    const O = j.enter("tableCell"), I = j.enter("phrasing"), L = j.containerPhrasing(v, {
      ...E,
      before: c,
      after: c
    });
    return I(), O(), L;
  }
  function g(v, S) {
    return N6(v, {
      align: S,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: o,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: a,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: s
    });
  }
  function b(v, S, j) {
    const E = v.children;
    let O = -1;
    const I = [], L = S.enter("table");
    for (; ++O < E.length; )
      I[O] = x(E[O], S, j);
    return L(), I;
  }
  function x(v, S, j) {
    const E = v.children;
    let O = -1;
    const I = [], L = S.enter("tableRow");
    for (; ++O < E.length; )
      I[O] = m(E[O], v, S, j);
    return L(), I;
  }
  function w(v, S, j) {
    let E = fw.inlineCode(v, S, j);
    return j.stack.includes("tableCell") && (E = E.replace(/\|/g, "\\$&")), E;
  }
}
function vA() {
  return {
    exit: {
      taskListCheckValueChecked: tv,
      taskListCheckValueUnchecked: tv,
      paragraph: kA
    }
  };
}
function wA() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: SA }
  };
}
function tv(t) {
  const i = this.stack[this.stack.length - 2];
  i.type, i.checked = t.type === "taskListCheckValueChecked";
}
function kA(t) {
  const i = this.stack[this.stack.length - 2];
  if (i && i.type === "listItem" && typeof i.checked == "boolean") {
    const a = this.stack[this.stack.length - 1];
    a.type;
    const o = a.children[0];
    if (o && o.type === "text") {
      const s = i.children;
      let c = -1, f;
      for (; ++c < s.length; ) {
        const p = s[c];
        if (p.type === "paragraph") {
          f = p;
          break;
        }
      }
      f === a && (o.value = o.value.slice(1), o.value.length === 0 ? a.children.shift() : a.position && o.position && typeof o.position.start.offset == "number" && (o.position.start.column++, o.position.start.offset++, a.position.start = Object.assign({}, o.position.start)));
    }
  }
  this.exit(t);
}
function SA(t, i, a, o) {
  const s = t.children[0], c = typeof t.checked == "boolean" && s && s.type === "paragraph", f = "[" + (t.checked ? "x" : " ") + "] ", p = a.createTracker(o);
  c && p.move(f);
  let m = fw.listItem(t, i, a, {
    ...o,
    ...p.current()
  });
  return c && (m = m.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, g)), m;
  function g(b) {
    return b + f;
  }
}
function zA() {
  return [
    JN(),
    y6(),
    S6(),
    pA(),
    vA()
  ];
}
function _A(t) {
  return {
    extensions: [
      WN(),
      v6(t),
      z6(),
      yA(t),
      wA()
    ]
  };
}
const jA = {
  tokenize: OA,
  partial: !0
}, dw = {
  tokenize: DA,
  partial: !0
}, pw = {
  tokenize: MA,
  partial: !0
}, hw = {
  tokenize: RA,
  partial: !0
}, EA = {
  tokenize: UA,
  partial: !0
}, mw = {
  name: "wwwAutolink",
  tokenize: NA,
  previous: xw
}, gw = {
  name: "protocolAutolink",
  tokenize: AA,
  previous: bw
}, er = {
  name: "emailAutolink",
  tokenize: TA,
  previous: yw
}, Ni = {};
function CA() {
  return {
    text: Ni
  };
}
let sa = 48;
for (; sa < 123; )
  Ni[sa] = er, sa++, sa === 58 ? sa = 65 : sa === 91 && (sa = 97);
Ni[43] = er;
Ni[45] = er;
Ni[46] = er;
Ni[95] = er;
Ni[72] = [er, gw];
Ni[104] = [er, gw];
Ni[87] = [er, mw];
Ni[119] = [er, mw];
function TA(t, i, a) {
  const o = this;
  let s, c;
  return f;
  function f(x) {
    return !yp(x) || !yw.call(o, o.previous) || ih(o.events) ? a(x) : (t.enter("literalAutolink"), t.enter("literalAutolinkEmail"), p(x));
  }
  function p(x) {
    return yp(x) ? (t.consume(x), p) : x === 64 ? (t.consume(x), m) : a(x);
  }
  function m(x) {
    return x === 46 ? t.check(EA, b, g)(x) : x === 45 || x === 95 || tn(x) ? (c = !0, t.consume(x), m) : b(x);
  }
  function g(x) {
    return t.consume(x), s = !0, m;
  }
  function b(x) {
    return c && s && pn(o.previous) ? (t.exit("literalAutolinkEmail"), t.exit("literalAutolink"), i(x)) : a(x);
  }
}
function NA(t, i, a) {
  const o = this;
  return s;
  function s(f) {
    return f !== 87 && f !== 119 || !xw.call(o, o.previous) || ih(o.events) ? a(f) : (t.enter("literalAutolink"), t.enter("literalAutolinkWww"), t.check(jA, t.attempt(dw, t.attempt(pw, c), a), a)(f));
  }
  function c(f) {
    return t.exit("literalAutolinkWww"), t.exit("literalAutolink"), i(f);
  }
}
function AA(t, i, a) {
  const o = this;
  let s = "", c = !1;
  return f;
  function f(x) {
    return (x === 72 || x === 104) && bw.call(o, o.previous) && !ih(o.events) ? (t.enter("literalAutolink"), t.enter("literalAutolinkHttp"), s += String.fromCodePoint(x), t.consume(x), p) : a(x);
  }
  function p(x) {
    if (pn(x) && s.length < 5)
      return s += String.fromCodePoint(x), t.consume(x), p;
    if (x === 58) {
      const w = s.toLowerCase();
      if (w === "http" || w === "https")
        return t.consume(x), m;
    }
    return a(x);
  }
  function m(x) {
    return x === 47 ? (t.consume(x), c ? g : (c = !0, m)) : a(x);
  }
  function g(x) {
    return x === null || Tu(x) || lt(x) || ga(x) || Bu(x) ? a(x) : t.attempt(dw, t.attempt(pw, b), a)(x);
  }
  function b(x) {
    return t.exit("literalAutolinkHttp"), t.exit("literalAutolink"), i(x);
  }
}
function OA(t, i, a) {
  let o = 0;
  return s;
  function s(f) {
    return (f === 87 || f === 119) && o < 3 ? (o++, t.consume(f), s) : f === 46 && o === 3 ? (t.consume(f), c) : a(f);
  }
  function c(f) {
    return f === null ? a(f) : i(f);
  }
}
function DA(t, i, a) {
  let o, s, c;
  return f;
  function f(g) {
    return g === 46 || g === 95 ? t.check(hw, m, p)(g) : g === null || lt(g) || ga(g) || g !== 45 && Bu(g) ? m(g) : (c = !0, t.consume(g), f);
  }
  function p(g) {
    return g === 95 ? o = !0 : (s = o, o = void 0), t.consume(g), f;
  }
  function m(g) {
    return s || o || !c ? a(g) : i(g);
  }
}
function MA(t, i) {
  let a = 0, o = 0;
  return s;
  function s(f) {
    return f === 40 ? (a++, t.consume(f), s) : f === 41 && o < a ? c(f) : f === 33 || f === 34 || f === 38 || f === 39 || f === 41 || f === 42 || f === 44 || f === 46 || f === 58 || f === 59 || f === 60 || f === 63 || f === 93 || f === 95 || f === 126 ? t.check(hw, i, c)(f) : f === null || lt(f) || ga(f) ? i(f) : (t.consume(f), s);
  }
  function c(f) {
    return f === 41 && o++, t.consume(f), s;
  }
}
function RA(t, i, a) {
  return o;
  function o(p) {
    return p === 33 || p === 34 || p === 39 || p === 41 || p === 42 || p === 44 || p === 46 || p === 58 || p === 59 || p === 63 || p === 95 || p === 126 ? (t.consume(p), o) : p === 38 ? (t.consume(p), c) : p === 93 ? (t.consume(p), s) : (
      // `<` is an end.
      p === 60 || // So is whitespace.
      p === null || lt(p) || ga(p) ? i(p) : a(p)
    );
  }
  function s(p) {
    return p === null || p === 40 || p === 91 || lt(p) || ga(p) ? i(p) : o(p);
  }
  function c(p) {
    return pn(p) ? f(p) : a(p);
  }
  function f(p) {
    return p === 59 ? (t.consume(p), o) : pn(p) ? (t.consume(p), f) : a(p);
  }
}
function UA(t, i, a) {
  return o;
  function o(c) {
    return t.consume(c), s;
  }
  function s(c) {
    return tn(c) ? a(c) : i(c);
  }
}
function xw(t) {
  return t === null || t === 40 || t === 42 || t === 95 || t === 91 || t === 93 || t === 126 || lt(t);
}
function bw(t) {
  return !pn(t);
}
function yw(t) {
  return !(t === 47 || yp(t));
}
function yp(t) {
  return t === 43 || t === 45 || t === 46 || t === 95 || tn(t);
}
function ih(t) {
  let i = t.length, a = !1;
  for (; i--; ) {
    const o = t[i][1];
    if ((o.type === "labelLink" || o.type === "labelImage") && !o._balanced) {
      a = !0;
      break;
    }
    if (o._gfmAutolinkLiteralWalkedInto) {
      a = !1;
      break;
    }
  }
  return t.length > 0 && !a && (t[t.length - 1][1]._gfmAutolinkLiteralWalkedInto = !0), a;
}
const LA = {
  tokenize: YA,
  partial: !0
};
function BA() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: qA,
        continuation: {
          tokenize: $A
        },
        exit: VA
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: ZA
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: IA,
        resolveTo: HA
      }
    }
  };
}
function IA(t, i, a) {
  const o = this;
  let s = o.events.length;
  const c = o.parser.gfmFootnotes || (o.parser.gfmFootnotes = []);
  let f;
  for (; s--; ) {
    const m = o.events[s][1];
    if (m.type === "labelImage") {
      f = m;
      break;
    }
    if (m.type === "gfmFootnoteCall" || m.type === "labelLink" || m.type === "label" || m.type === "image" || m.type === "link")
      break;
  }
  return p;
  function p(m) {
    if (!f || !f._balanced)
      return a(m);
    const g = ai(o.sliceSerialize({
      start: f.end,
      end: o.now()
    }));
    return g.codePointAt(0) !== 94 || !c.includes(g.slice(1)) ? a(m) : (t.enter("gfmFootnoteCallLabelMarker"), t.consume(m), t.exit("gfmFootnoteCallLabelMarker"), i(m));
  }
}
function HA(t, i) {
  let a = t.length;
  for (; a--; )
    if (t[a][1].type === "labelImage" && t[a][0] === "enter") {
      t[a][1];
      break;
    }
  t[a + 1][1].type = "data", t[a + 3][1].type = "gfmFootnoteCallLabelMarker";
  const o = {
    type: "gfmFootnoteCall",
    start: Object.assign({}, t[a + 3][1].start),
    end: Object.assign({}, t[t.length - 1][1].end)
  }, s = {
    type: "gfmFootnoteCallMarker",
    start: Object.assign({}, t[a + 3][1].end),
    end: Object.assign({}, t[a + 3][1].end)
  };
  s.end.column++, s.end.offset++, s.end._bufferIndex++;
  const c = {
    type: "gfmFootnoteCallString",
    start: Object.assign({}, s.end),
    end: Object.assign({}, t[t.length - 1][1].start)
  }, f = {
    type: "chunkString",
    contentType: "string",
    start: Object.assign({}, c.start),
    end: Object.assign({}, c.end)
  }, p = [
    // Take the `labelImageMarker` (now `data`, the `!`)
    t[a + 1],
    t[a + 2],
    ["enter", o, i],
    // The `[`
    t[a + 3],
    t[a + 4],
    // The `^`.
    ["enter", s, i],
    ["exit", s, i],
    // Everything in between.
    ["enter", c, i],
    ["enter", f, i],
    ["exit", f, i],
    ["exit", c, i],
    // The ending (`]`, properly parsed and labelled).
    t[t.length - 2],
    t[t.length - 1],
    ["exit", o, i]
  ];
  return t.splice(a, t.length - a + 1, ...p), t;
}
function ZA(t, i, a) {
  const o = this, s = o.parser.gfmFootnotes || (o.parser.gfmFootnotes = []);
  let c = 0, f;
  return p;
  function p(x) {
    return t.enter("gfmFootnoteCall"), t.enter("gfmFootnoteCallLabelMarker"), t.consume(x), t.exit("gfmFootnoteCallLabelMarker"), m;
  }
  function m(x) {
    return x !== 94 ? a(x) : (t.enter("gfmFootnoteCallMarker"), t.consume(x), t.exit("gfmFootnoteCallMarker"), t.enter("gfmFootnoteCallString"), t.enter("chunkString").contentType = "string", g);
  }
  function g(x) {
    if (
      // Too long.
      c > 999 || // Closing brace with nothing.
      x === 93 && !f || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      x === null || x === 91 || lt(x)
    )
      return a(x);
    if (x === 93) {
      t.exit("chunkString");
      const w = t.exit("gfmFootnoteCallString");
      return s.includes(ai(o.sliceSerialize(w))) ? (t.enter("gfmFootnoteCallLabelMarker"), t.consume(x), t.exit("gfmFootnoteCallLabelMarker"), t.exit("gfmFootnoteCall"), i) : a(x);
    }
    return lt(x) || (f = !0), c++, t.consume(x), x === 92 ? b : g;
  }
  function b(x) {
    return x === 91 || x === 92 || x === 93 ? (t.consume(x), c++, g) : g(x);
  }
}
function qA(t, i, a) {
  const o = this, s = o.parser.gfmFootnotes || (o.parser.gfmFootnotes = []);
  let c, f = 0, p;
  return m;
  function m(S) {
    return t.enter("gfmFootnoteDefinition")._container = !0, t.enter("gfmFootnoteDefinitionLabel"), t.enter("gfmFootnoteDefinitionLabelMarker"), t.consume(S), t.exit("gfmFootnoteDefinitionLabelMarker"), g;
  }
  function g(S) {
    return S === 94 ? (t.enter("gfmFootnoteDefinitionMarker"), t.consume(S), t.exit("gfmFootnoteDefinitionMarker"), t.enter("gfmFootnoteDefinitionLabelString"), t.enter("chunkString").contentType = "string", b) : a(S);
  }
  function b(S) {
    if (
      // Too long.
      f > 999 || // Closing brace with nothing.
      S === 93 && !p || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      S === null || S === 91 || lt(S)
    )
      return a(S);
    if (S === 93) {
      t.exit("chunkString");
      const j = t.exit("gfmFootnoteDefinitionLabelString");
      return c = ai(o.sliceSerialize(j)), t.enter("gfmFootnoteDefinitionLabelMarker"), t.consume(S), t.exit("gfmFootnoteDefinitionLabelMarker"), t.exit("gfmFootnoteDefinitionLabel"), w;
    }
    return lt(S) || (p = !0), f++, t.consume(S), S === 92 ? x : b;
  }
  function x(S) {
    return S === 91 || S === 92 || S === 93 ? (t.consume(S), f++, b) : b(S);
  }
  function w(S) {
    return S === 58 ? (t.enter("definitionMarker"), t.consume(S), t.exit("definitionMarker"), s.includes(c) || s.push(c), Xe(t, v, "gfmFootnoteDefinitionWhitespace")) : a(S);
  }
  function v(S) {
    return i(S);
  }
}
function $A(t, i, a) {
  return t.check(Mo, i, t.attempt(LA, i, a));
}
function VA(t) {
  t.exit("gfmFootnoteDefinition");
}
function YA(t, i, a) {
  const o = this;
  return Xe(t, s, "gfmFootnoteDefinitionIndent", 5);
  function s(c) {
    const f = o.events[o.events.length - 1];
    return f && f[1].type === "gfmFootnoteDefinitionIndent" && f[2].sliceSerialize(f[1], !0).length === 4 ? i(c) : a(c);
  }
}
function GA(t) {
  let a = (t || {}).singleTilde;
  const o = {
    name: "strikethrough",
    tokenize: c,
    resolveAll: s
  };
  return a == null && (a = !0), {
    text: {
      126: o
    },
    insideSpan: {
      null: [o]
    },
    attentionMarkers: {
      null: [126]
    }
  };
  function s(f, p) {
    let m = -1;
    for (; ++m < f.length; )
      if (f[m][0] === "enter" && f[m][1].type === "strikethroughSequenceTemporary" && f[m][1]._close) {
        let g = m;
        for (; g--; )
          if (f[g][0] === "exit" && f[g][1].type === "strikethroughSequenceTemporary" && f[g][1]._open && // If the sizes are the same:
          f[m][1].end.offset - f[m][1].start.offset === f[g][1].end.offset - f[g][1].start.offset) {
            f[m][1].type = "strikethroughSequence", f[g][1].type = "strikethroughSequence";
            const b = {
              type: "strikethrough",
              start: Object.assign({}, f[g][1].start),
              end: Object.assign({}, f[m][1].end)
            }, x = {
              type: "strikethroughText",
              start: Object.assign({}, f[g][1].end),
              end: Object.assign({}, f[m][1].start)
            }, w = [["enter", b, p], ["enter", f[g][1], p], ["exit", f[g][1], p], ["enter", x, p]], v = p.parser.constructs.insideSpan.null;
            v && ri(w, w.length, 0, Iu(v, f.slice(g + 1, m), p)), ri(w, w.length, 0, [["exit", x, p], ["enter", f[m][1], p], ["exit", f[m][1], p], ["exit", b, p]]), ri(f, g - 1, m - g + 3, w), m = g + w.length - 2;
            break;
          }
      }
    for (m = -1; ++m < f.length; )
      f[m][1].type === "strikethroughSequenceTemporary" && (f[m][1].type = "data");
    return f;
  }
  function c(f, p, m) {
    const g = this.previous, b = this.events;
    let x = 0;
    return w;
    function w(S) {
      return g === 126 && b[b.length - 1][1].type !== "characterEscape" ? m(S) : (f.enter("strikethroughSequenceTemporary"), v(S));
    }
    function v(S) {
      const j = Au(g);
      if (S === 126)
        return x > 1 ? m(S) : (f.consume(S), x++, v);
      if (x < 2 && !a) return m(S);
      const E = f.exit("strikethroughSequenceTemporary"), O = Au(S);
      return E._open = !O || O === 2 && !!j, E._close = !j || j === 2 && !!O, p(S);
    }
  }
}
class FA {
  /**
   * Create a new edit map.
   */
  constructor() {
    this.map = [], this.index = /* @__PURE__ */ new Map();
  }
  /**
   * Create an edit: a remove and/or add at a certain place.
   *
   * @param {number} index
   *   Index at which to apply the edit.
   * @param {number} remove
   *   Count of items to remove at the index.
   * @param {Array<Event>} add
   *   Items to add at the index.
   * @returns {undefined}
   *   Nothing.
   */
  add(i, a, o) {
    XA(this, i, a, o);
  }
  // To do: add this when moving to `micromark`.
  // /**
  //  * Create an edit: but insert `add` before existing additions.
  //  *
  //  * @param {number} index
  //  * @param {number} remove
  //  * @param {Array<Event>} add
  //  * @returns {undefined}
  //  */
  // addBefore(index, remove, add) {
  //   addImplementation(this, index, remove, add, true)
  // }
  /**
   * Done, change the events.
   *
   * @param {Array<Event>} events
   *   List of events to apply the edits to.
   * @returns {undefined}
   *   Nothing.
   */
  consume(i) {
    if (this.map.sort(function(c, f) {
      return c[0] - f[0];
    }), this.map.length === 0)
      return;
    let a = this.map.length;
    const o = [];
    for (; a > 0; )
      a -= 1, o.push(i.slice(this.map[a][0] + this.map[a][1]), this.map[a][2]), i.length = this.map[a][0];
    o.push(i.slice()), i.length = 0;
    let s = o.pop();
    for (; s; ) {
      for (const c of s)
        i.push(c);
      s = o.pop();
    }
    this.map.length = 0, this.index.clear();
  }
}
function XA(t, i, a, o) {
  if (a === 0 && o.length === 0)
    return;
  const s = t.index.get(i);
  if (s) {
    s[1] += a, s[2].push(...o);
    return;
  }
  const c = [i, a, o];
  t.map.push(c), t.index.set(i, c);
}
function QA(t, i) {
  let a = !1;
  const o = [];
  for (; i < t.length; ) {
    const s = t[i];
    if (a) {
      if (s[0] === "enter")
        s[1].type === "tableContent" && o.push(t[i + 1][1].type === "tableDelimiterMarker" ? "left" : "none");
      else if (s[1].type === "tableContent") {
        if (t[i - 1][1].type === "tableDelimiterMarker") {
          const c = o.length - 1;
          o[c] = o[c] === "left" ? "center" : "right";
        }
      } else if (s[1].type === "tableDelimiterRow")
        break;
    } else s[0] === "enter" && s[1].type === "tableDelimiterRow" && (a = !0);
    i += 1;
  }
  return o;
}
function PA() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: KA,
        resolveAll: JA
      }
    }
  };
}
function KA(t, i, a) {
  const o = this;
  let s = 0, c = 0, f;
  return p;
  function p(Z) {
    let te = o.events.length - 1;
    for (; te > -1; ) {
      const {
        type: ue
      } = o.events[te][1];
      if (ue === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      ue === "linePrefix")
        te--;
      else
        break;
    }
    const oe = te > -1 ? o.events[te][1].type : null, Ne = oe === "tableHead" || oe === "tableRow" ? T : m;
    return Ne === T && o.parser.lazy[o.now().line] ? a(Z) : Ne(Z);
  }
  function m(Z) {
    return t.enter("tableHead"), t.enter("tableRow"), g(Z);
  }
  function g(Z) {
    return Z === 124 || (f = !0, c += 1), b(Z);
  }
  function b(Z) {
    return Z === null ? a(Z) : Ee(Z) ? c > 1 ? (c = 0, o.interrupt = !0, t.exit("tableRow"), t.enter("lineEnding"), t.consume(Z), t.exit("lineEnding"), v) : a(Z) : Be(Z) ? Xe(t, b, "whitespace")(Z) : (c += 1, f && (f = !1, s += 1), Z === 124 ? (t.enter("tableCellDivider"), t.consume(Z), t.exit("tableCellDivider"), f = !0, b) : (t.enter("data"), x(Z)));
  }
  function x(Z) {
    return Z === null || Z === 124 || lt(Z) ? (t.exit("data"), b(Z)) : (t.consume(Z), Z === 92 ? w : x);
  }
  function w(Z) {
    return Z === 92 || Z === 124 ? (t.consume(Z), x) : x(Z);
  }
  function v(Z) {
    return o.interrupt = !1, o.parser.lazy[o.now().line] ? a(Z) : (t.enter("tableDelimiterRow"), f = !1, Be(Z) ? Xe(t, S, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(Z) : S(Z));
  }
  function S(Z) {
    return Z === 45 || Z === 58 ? E(Z) : Z === 124 ? (f = !0, t.enter("tableCellDivider"), t.consume(Z), t.exit("tableCellDivider"), j) : J(Z);
  }
  function j(Z) {
    return Be(Z) ? Xe(t, E, "whitespace")(Z) : E(Z);
  }
  function E(Z) {
    return Z === 58 ? (c += 1, f = !0, t.enter("tableDelimiterMarker"), t.consume(Z), t.exit("tableDelimiterMarker"), O) : Z === 45 ? (c += 1, O(Z)) : Z === null || Ee(Z) ? V(Z) : J(Z);
  }
  function O(Z) {
    return Z === 45 ? (t.enter("tableDelimiterFiller"), I(Z)) : J(Z);
  }
  function I(Z) {
    return Z === 45 ? (t.consume(Z), I) : Z === 58 ? (f = !0, t.exit("tableDelimiterFiller"), t.enter("tableDelimiterMarker"), t.consume(Z), t.exit("tableDelimiterMarker"), L) : (t.exit("tableDelimiterFiller"), L(Z));
  }
  function L(Z) {
    return Be(Z) ? Xe(t, V, "whitespace")(Z) : V(Z);
  }
  function V(Z) {
    return Z === 124 ? S(Z) : Z === null || Ee(Z) ? !f || s !== c ? J(Z) : (t.exit("tableDelimiterRow"), t.exit("tableHead"), i(Z)) : J(Z);
  }
  function J(Z) {
    return a(Z);
  }
  function T(Z) {
    return t.enter("tableRow"), X(Z);
  }
  function X(Z) {
    return Z === 124 ? (t.enter("tableCellDivider"), t.consume(Z), t.exit("tableCellDivider"), X) : Z === null || Ee(Z) ? (t.exit("tableRow"), i(Z)) : Be(Z) ? Xe(t, X, "whitespace")(Z) : (t.enter("data"), pe(Z));
  }
  function pe(Z) {
    return Z === null || Z === 124 || lt(Z) ? (t.exit("data"), X(Z)) : (t.consume(Z), Z === 92 ? _e : pe);
  }
  function _e(Z) {
    return Z === 92 || Z === 124 ? (t.consume(Z), pe) : pe(Z);
  }
}
function JA(t, i) {
  let a = -1, o = !0, s = 0, c = [0, 0, 0, 0], f = [0, 0, 0, 0], p = !1, m = 0, g, b, x;
  const w = new FA();
  for (; ++a < t.length; ) {
    const v = t[a], S = v[1];
    v[0] === "enter" ? S.type === "tableHead" ? (p = !1, m !== 0 && (nv(w, i, m, g, b), b = void 0, m = 0), g = {
      type: "table",
      start: Object.assign({}, S.start),
      // Note: correct end is set later.
      end: Object.assign({}, S.end)
    }, w.add(a, 0, [["enter", g, i]])) : S.type === "tableRow" || S.type === "tableDelimiterRow" ? (o = !0, x = void 0, c = [0, 0, 0, 0], f = [0, a + 1, 0, 0], p && (p = !1, b = {
      type: "tableBody",
      start: Object.assign({}, S.start),
      // Note: correct end is set later.
      end: Object.assign({}, S.end)
    }, w.add(a, 0, [["enter", b, i]])), s = S.type === "tableDelimiterRow" ? 2 : b ? 3 : 1) : s && (S.type === "data" || S.type === "tableDelimiterMarker" || S.type === "tableDelimiterFiller") ? (o = !1, f[2] === 0 && (c[1] !== 0 && (f[0] = f[1], x = hu(w, i, c, s, void 0, x), c = [0, 0, 0, 0]), f[2] = a)) : S.type === "tableCellDivider" && (o ? o = !1 : (c[1] !== 0 && (f[0] = f[1], x = hu(w, i, c, s, void 0, x)), c = f, f = [c[1], a, 0, 0])) : S.type === "tableHead" ? (p = !0, m = a) : S.type === "tableRow" || S.type === "tableDelimiterRow" ? (m = a, c[1] !== 0 ? (f[0] = f[1], x = hu(w, i, c, s, a, x)) : f[1] !== 0 && (x = hu(w, i, f, s, a, x)), s = 0) : s && (S.type === "data" || S.type === "tableDelimiterMarker" || S.type === "tableDelimiterFiller") && (f[3] = a);
  }
  for (m !== 0 && nv(w, i, m, g, b), w.consume(i.events), a = -1; ++a < i.events.length; ) {
    const v = i.events[a];
    v[0] === "enter" && v[1].type === "table" && (v[1]._align = QA(i.events, a));
  }
  return t;
}
function hu(t, i, a, o, s, c) {
  const f = o === 1 ? "tableHeader" : o === 2 ? "tableDelimiter" : "tableData", p = "tableContent";
  a[0] !== 0 && (c.end = Object.assign({}, fl(i.events, a[0])), t.add(a[0], 0, [["exit", c, i]]));
  const m = fl(i.events, a[1]);
  if (c = {
    type: f,
    start: Object.assign({}, m),
    // Note: correct end is set later.
    end: Object.assign({}, m)
  }, t.add(a[1], 0, [["enter", c, i]]), a[2] !== 0) {
    const g = fl(i.events, a[2]), b = fl(i.events, a[3]), x = {
      type: p,
      start: Object.assign({}, g),
      end: Object.assign({}, b)
    };
    if (t.add(a[2], 0, [["enter", x, i]]), o !== 2) {
      const w = i.events[a[2]], v = i.events[a[3]];
      if (w[1].end = Object.assign({}, v[1].end), w[1].type = "chunkText", w[1].contentType = "text", a[3] > a[2] + 1) {
        const S = a[2] + 1, j = a[3] - a[2] - 1;
        t.add(S, j, []);
      }
    }
    t.add(a[3] + 1, 0, [["exit", x, i]]);
  }
  return s !== void 0 && (c.end = Object.assign({}, fl(i.events, s)), t.add(s, 0, [["exit", c, i]]), c = void 0), c;
}
function nv(t, i, a, o, s) {
  const c = [], f = fl(i.events, a);
  s && (s.end = Object.assign({}, f), c.push(["exit", s, i])), o.end = Object.assign({}, f), c.push(["exit", o, i]), t.add(a + 1, 0, c);
}
function fl(t, i) {
  const a = t[i], o = a[0] === "enter" ? "start" : "end";
  return a[1][o];
}
const WA = {
  name: "tasklistCheck",
  tokenize: tO
};
function eO() {
  return {
    text: {
      91: WA
    }
  };
}
function tO(t, i, a) {
  const o = this;
  return s;
  function s(m) {
    return (
      // Exit if there’s stuff before.
      o.previous !== null || // Exit if not in the first content that is the first child of a list
      // item.
      !o._gfmTasklistFirstContentOfListItem ? a(m) : (t.enter("taskListCheck"), t.enter("taskListCheckMarker"), t.consume(m), t.exit("taskListCheckMarker"), c)
    );
  }
  function c(m) {
    return lt(m) ? (t.enter("taskListCheckValueUnchecked"), t.consume(m), t.exit("taskListCheckValueUnchecked"), f) : m === 88 || m === 120 ? (t.enter("taskListCheckValueChecked"), t.consume(m), t.exit("taskListCheckValueChecked"), f) : a(m);
  }
  function f(m) {
    return m === 93 ? (t.enter("taskListCheckMarker"), t.consume(m), t.exit("taskListCheckMarker"), t.exit("taskListCheck"), p) : a(m);
  }
  function p(m) {
    return Ee(m) ? i(m) : Be(m) ? t.check({
      tokenize: nO
    }, i, a)(m) : a(m);
  }
}
function nO(t, i, a) {
  return Xe(t, o, "whitespace");
  function o(s) {
    return s === null ? a(s) : i(s);
  }
}
function iO(t) {
  return O0([
    CA(),
    BA(),
    GA(t),
    PA(),
    eO()
  ]);
}
const rO = {};
function aO(t) {
  const i = (
    /** @type {Processor<Root>} */
    this
  ), a = t || rO, o = i.data(), s = o.micromarkExtensions || (o.micromarkExtensions = []), c = o.fromMarkdownExtensions || (o.fromMarkdownExtensions = []), f = o.toMarkdownExtensions || (o.toMarkdownExtensions = []);
  s.push(iO(a)), c.push(zA()), f.push(_A(a));
}
const ua = /* @__PURE__ */ new Map();
function lO({ file: t }) {
  const [i, a] = G.useState(ua.get(t.id) || ""), [o, s] = G.useState(!1);
  return G.useEffect(() => {
    if (ua.has(t.id)) {
      a(ua.get(t.id));
      return;
    }
    let c = !1;
    return (async () => {
      try {
        let f = 0;
        const p = [];
        for (; !c; ) {
          const m = await window.muse.uploadImage({ action: "preview", id: t.id, mimeType: t.mimeType, offset: f });
          if (p.push(m.chunk || ""), m.done) break;
          if (!m.next || m.next <= f) throw Error("Invalid image response");
          f = m.next;
        }
        if (!c) {
          const m = "data:" + t.mimeType + ";base64," + p.join("");
          ua.size >= 20 && ua.delete(ua.keys().next().value), ua.set(t.id, m), a(m);
        }
      } catch {
        c || s(!0);
      }
    })(), () => {
      c = !0;
    };
  }, [t.id, t.mimeType]), /* @__PURE__ */ h.jsxs("figure", { style: { margin: "10px 0" }, children: [
    i ? /* @__PURE__ */ h.jsx("a", { href: i, download: t.name, children: /* @__PURE__ */ h.jsx("img", { src: i, alt: t.name, style: { maxWidth: "100%", width: 240, maxHeight: 240, objectFit: "contain", borderRadius: 10 } }) }) : /* @__PURE__ */ h.jsxs("span", { children: [
      o ? "图片无法读取：" : "正在加载图片：",
      t.name
    ] }),
    /* @__PURE__ */ h.jsx("figcaption", { children: t.name })
  ] });
}
function vp(t) {
  return typeof t == "string" || typeof t == "number" ? String(t) : Array.isArray(t) ? t.map(vp).join("") : G.isValidElement(t) ? vp(t.props.children) : "";
}
function wp({ text: t, label: i }) {
  const [a, o] = G.useState(!1), [s, c] = G.useState(!1);
  return /* @__PURE__ */ h.jsxs(
    "button",
    {
      type: "button",
      className: "copy-button",
      title: s ? "Could not copy. Select and copy the text." : "Copy",
      "aria-label": a ? "Copied" : i || "Copy",
      onClick: () => {
        navigator.clipboard.writeText(t).then(
          () => {
            o(!0), setTimeout(() => o(!1), 1800);
          },
          () => c(!0)
        );
      },
      children: [
        a ? /* @__PURE__ */ h.jsx(Un, { size: 13 }) : /* @__PURE__ */ h.jsx(MS, { size: 13 }),
        i && /* @__PURE__ */ h.jsx("span", { children: a ? "Copied" : i }),
        s && "Select to copy"
      ]
    }
  );
}
function vw({ text: t, onError: i }) {
  return /* @__PURE__ */ h.jsx("div", { className: "markdown", children: /* @__PURE__ */ h.jsx(
    qN,
    {
      remarkPlugins: [aO],
      components: {
        a: ({ href: a, children: o }) => /* @__PURE__ */ h.jsxs(
          "a",
          {
            href: a,
            onClick: (s) => {
              s.preventDefault(), a && window.muse.openExternal(a).catch((c) => i(c.message));
            },
            children: [
              o,
              /* @__PURE__ */ h.jsx(Qd, { size: 10, className: "inline-link-icon" })
            ]
          }
        ),
        img: ({ alt: a }) => /* @__PURE__ */ h.jsxs("span", { className: "remote-image", children: [
          "[Image: ",
          a || "External image",
          "]"
        ] }),
        pre: ({ children: a }) => {
          const o = Array.isArray(a) ? a[0] : a, c = (G.isValidElement(o) && o.props.className || "").replace(/^language-/, "").trim() || "code", f = vp(a).replace(/\n$/, "");
          return /* @__PURE__ */ h.jsxs("div", { className: "code-block", children: [
            /* @__PURE__ */ h.jsxs("div", { className: "code-block-header", children: [
              /* @__PURE__ */ h.jsx("span", { className: "code-block-lang", children: c }),
              /* @__PURE__ */ h.jsx(wp, { text: f, label: "Copy" })
            ] }),
            /* @__PURE__ */ h.jsx("pre", { children: a })
          ] });
        },
        code: ({ className: a, children: o }) => /* @__PURE__ */ h.jsx("code", { className: a, children: o })
      },
      children: t
    }
  ) });
}
function ww({
  item: t,
  sessionId: i,
  onError: a
}) {
  const [o, s] = G.useState(!1), [c, f] = G.useState(), [p, m] = G.useState(!1), g = t.status === "inProgress", b = t.tool || t.label || t.role || t.kind.replace(/([A-Z])/g, " $1").toLowerCase(), x = t.statusLine || t.objective || t.commandText || t.fallbackText;
  return /* @__PURE__ */ h.jsxs("div", { className: `tool-item ${g ? "tool-running" : ""} ${o ? "open" : ""}`, children: [
    /* @__PURE__ */ h.jsxs(
      "button",
      {
        type: "button",
        className: "tool-summary-button",
        "aria-expanded": o,
        onClick: () => s((w) => !w),
        children: [
          /* @__PURE__ */ h.jsx("span", { className: "tool-state", children: g ? /* @__PURE__ */ h.jsx(dl, { size: 14, className: "spin" }) : t.status === "completed" ? /* @__PURE__ */ h.jsx(Un, { size: 14 }) : /* @__PURE__ */ h.jsx(ha, { size: 14 }) }),
          t.kind === "subagent" ? /* @__PURE__ */ h.jsx(KS, { size: 14 }) : t.kind === "toolCall" ? /* @__PURE__ */ h.jsx(wu, { size: 14 }) : /* @__PURE__ */ h.jsx(pa, { size: 14 }),
          /* @__PURE__ */ h.jsx("span", { className: "tool-title", children: b }),
          x && /* @__PURE__ */ h.jsx("span", { className: "tool-summary", children: x }),
          t.patchSummary && /* @__PURE__ */ h.jsxs("span", { className: "diff-count", children: [
            /* @__PURE__ */ h.jsxs("b", { children: [
              "+",
              t.patchSummary.added
            ] }),
            /* @__PURE__ */ h.jsxs("i", { children: [
              "−",
              t.patchSummary.removed
            ] })
          ] }),
          /* @__PURE__ */ h.jsx(Ci, { className: `details-chevron ${o ? "open" : ""}`, size: 13 })
        ]
      }
    ),
    /* @__PURE__ */ h.jsx("div", { className: `sidebar-collapse ${o ? "open" : ""}`, children: /* @__PURE__ */ h.jsx("div", { className: "sidebar-collapse-inner", children: /* @__PURE__ */ h.jsxs("div", { className: "tool-body", children: [
      t.objective && /* @__PURE__ */ h.jsx("p", { children: t.objective }),
      t.args && /* @__PURE__ */ h.jsxs("div", { className: "tool-arguments", children: [
        /* @__PURE__ */ h.jsx("span", { className: "eyebrow", children: "INPUT" }),
        /* @__PURE__ */ h.jsx("pre", { children: uO(t.args) })
      ] }),
      (c || t.visibleOutput || t.result?.text || t.failureReason || t.finalSummary) && /* @__PURE__ */ h.jsx("pre", { children: c || t.visibleOutput || t.result?.text || t.failureReason || t.finalSummary }),
      t.truncated && /* @__PURE__ */ h.jsx("p", { className: "muted", children: "Muse shortened the displayed output." }),
      t.outputRef && !c && /* @__PURE__ */ h.jsx(
        "button",
        {
          type: "button",
          className: "text-button",
          disabled: p,
          onClick: () => {
            m(!0), window.muse.readOutput(i, t.itemId).then(f).catch((w) => a(w.message)).finally(() => m(!1));
          },
          children: p ? "Loading…" : "Read stored output"
        }
      ),
      /* @__PURE__ */ h.jsxs("span", { className: "tool-result-status", children: [
        t.status,
        t.durationMs !== void 0 ? ` · ${(t.durationMs / 1e3).toFixed(1)}s` : ""
      ] })
    ] }) }) })
  ] });
}
function oO({
  items: t,
  sessionId: i,
  onError: a
}) {
  const [o, s] = G.useState(!1), c = t.reduce((m, g) => m + (g.patchSummary?.added || 0), 0), f = t.reduce((m, g) => m + (g.patchSummary?.removed || 0), 0), p = Array.from(
    new Set(
      t.map(
        (m) => m.tool || m.label || m.role || m.kind.replace(/([A-Z])/g, " $1").toLowerCase()
      )
    )
  ).slice(0, 3).join(", ");
  return /* @__PURE__ */ h.jsxs("div", { className: `tool-group ${o ? "open" : ""}`, children: [
    /* @__PURE__ */ h.jsxs(
      "button",
      {
        type: "button",
        className: "tool-group-header",
        "aria-expanded": o,
        onClick: () => s((m) => !m),
        children: [
          /* @__PURE__ */ h.jsx("span", { className: "tool-state", children: /* @__PURE__ */ h.jsx(Un, { size: 14 }) }),
          /* @__PURE__ */ h.jsx(Zv, { size: 14 }),
          /* @__PURE__ */ h.jsxs("span", { className: "tool-title", children: [
            "Ran ",
            t.length,
            " tools"
          ] }),
          /* @__PURE__ */ h.jsx("span", { className: "tool-summary", children: p }),
          (c > 0 || f > 0) && /* @__PURE__ */ h.jsxs("span", { className: "diff-count", children: [
            /* @__PURE__ */ h.jsxs("b", { children: [
              "+",
              c
            ] }),
            /* @__PURE__ */ h.jsxs("i", { children: [
              "−",
              f
            ] })
          ] }),
          /* @__PURE__ */ h.jsx(Ci, { className: `details-chevron ${o ? "open" : ""}`, size: 13 })
        ]
      }
    ),
    /* @__PURE__ */ h.jsx("div", { className: `sidebar-collapse ${o ? "open" : ""}`, children: /* @__PURE__ */ h.jsx("div", { className: "sidebar-collapse-inner", children: /* @__PURE__ */ h.jsx("div", { className: "tool-group-list", children: t.map((m) => /* @__PURE__ */ h.jsx(ww, { item: m, sessionId: i, onError: a }, m.itemId)) }) }) })
  ] });
}
function sO({
  item: t,
  onError: i
}) {
  const [a, o] = G.useState(!1);
  return /* @__PURE__ */ h.jsxs("div", { className: `reasoning-item ${a ? "open" : ""}`, children: [
    /* @__PURE__ */ h.jsxs(
      "button",
      {
        type: "button",
        className: "reasoning-summary-button",
        "aria-expanded": a,
        onClick: () => o((s) => !s),
        children: [
          t.status === "inProgress" ? /* @__PURE__ */ h.jsx(dl, { size: 13, className: "spin" }) : /* @__PURE__ */ h.jsx(Un, { size: 13 }),
          /* @__PURE__ */ h.jsx("span", { children: t.status === "inProgress" ? "Thinking" : "Reasoning summary" }),
          /* @__PURE__ */ h.jsx(Ci, { size: 12, className: `details-chevron ${a ? "open" : ""}` })
        ]
      }
    ),
    /* @__PURE__ */ h.jsx("div", { className: `sidebar-collapse ${a ? "open" : ""}`, children: /* @__PURE__ */ h.jsx("div", { className: "sidebar-collapse-inner", children: /* @__PURE__ */ h.jsx(
      vw,
      {
        text: t.summary?.join(`

`) || t.text || "No reasoning text was provided by the model.",
        onError: i
      }
    ) }) })
  ] });
}
function uO(t) {
  try {
    return JSON.stringify(JSON.parse(t), null, 2);
  } catch {
    return t;
  }
}
function cO({
  approval: t,
  onError: i
}) {
  const [a, o] = G.useState(!1);
  return /* @__PURE__ */ h.jsxs("section", { className: "approval-card", "aria-label": "Approval required", children: [
    /* @__PURE__ */ h.jsxs("div", { className: "request-heading", children: [
      /* @__PURE__ */ h.jsx("span", { className: "request-icon", children: /* @__PURE__ */ h.jsx(FS, { size: 18 }) }),
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("h3", { children: "Approval required" }),
        /* @__PURE__ */ h.jsxs("p", { children: [
          "Muse would like permission to use ",
          t.toolName,
          "."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ h.jsx("pre", { children: t.subject.command || t.subject.path || t.subject.host || t.subject.target || t.rawArgs }),
    /* @__PURE__ */ h.jsx("div", { className: "approval-choices", children: t.availableChoices.map((s) => /* @__PURE__ */ h.jsxs(
      "button",
      {
        title: s.rulePreview || `Applies ${s.scope === "once" ? "once" : s.scope === "session" ? "for this session" : "as a saved policy"}`,
        className: s.decision.startsWith("approved") ? "button primary" : "button secondary",
        disabled: a,
        onClick: () => {
          o(!0), window.muse.approve(t.sessionId, t.approvalId, s.choiceId).catch((c) => i(c.message)).finally(() => o(!1));
        },
        children: [
          s.label,
          s.scope === "localPersistent" && /* @__PURE__ */ h.jsx("span", { className: "choice-scope", children: "Saves a rule" })
        ]
      },
      s.choiceId
    )) })
  ] });
}
function fO({
  request: t,
  onError: i
}) {
  const [a, o] = G.useState({}), [s, c] = G.useState(!1), f = t.questions.every((p) => {
    const m = a[p.id];
    if (!m) return !1;
    if (m.freeText?.trim() || m.selectedLabel) return !0;
    const g = m.selectedLabels?.length ?? 0;
    return p.selection.mode === "multiple" && g >= (p.selection.minSelections ?? 1) && g <= (p.selection.maxSelections ?? 1 / 0);
  });
  return /* @__PURE__ */ h.jsxs(
    "form",
    {
      className: "question-card",
      onSubmit: (p) => {
        p.preventDefault(), c(!0), window.muse.answer(t.sessionId, t.userInputId, Object.values(a)).catch((m) => i(m.message)).finally(() => c(!1));
      },
      children: [
        /* @__PURE__ */ h.jsxs("div", { className: "request-heading", children: [
          /* @__PURE__ */ h.jsx("span", { className: "request-icon", children: /* @__PURE__ */ h.jsx(DS, { size: 18 }) }),
          /* @__PURE__ */ h.jsxs("div", { children: [
            /* @__PURE__ */ h.jsx("h3", { children: "Input required" }),
            /* @__PURE__ */ h.jsx("p", { children: "Muse has a question before continuing." })
          ] })
        ] }),
        t.questions.map((p) => /* @__PURE__ */ h.jsxs("fieldset", { children: [
          /* @__PURE__ */ h.jsx("legend", { children: p.question }),
          /* @__PURE__ */ h.jsx("div", { className: "question-options", children: p.options.map((m) => {
            const g = a[p.id]?.selectedLabel === m.label || a[p.id]?.selectedLabels?.includes(m.label);
            return /* @__PURE__ */ h.jsxs(
              "label",
              {
                className: `question-option ${g ? "selected" : ""}`,
                children: [
                  /* @__PURE__ */ h.jsx(
                    "input",
                    {
                      type: p.selection.mode === "multiple" ? "checkbox" : "radio",
                      name: p.id,
                      checked: !!g,
                      onChange: () => o((b) => {
                        if (p.selection.mode === "single")
                          return {
                            ...b,
                            [p.id]: { questionId: p.id, selectedLabel: m.label }
                          };
                        const x = b[p.id]?.selectedLabels || [];
                        return {
                          ...b,
                          [p.id]: {
                            questionId: p.id,
                            selectedLabels: g ? x.filter((w) => w !== m.label) : [...x, m.label]
                          }
                        };
                      })
                    }
                  ),
                  /* @__PURE__ */ h.jsxs("span", { children: [
                    /* @__PURE__ */ h.jsx("strong", { children: m.label }),
                    m.description && /* @__PURE__ */ h.jsx("small", { children: m.description })
                  ] })
                ]
              },
              m.label
            );
          }) }),
          /* @__PURE__ */ h.jsx(
            "input",
            {
              className: "text-input",
              "aria-label": `Your answer: ${p.header}`,
              placeholder: "Or write your own answer…",
              maxLength: 500,
              value: a[p.id]?.freeText || "",
              onChange: (m) => o((g) => ({
                ...g,
                [p.id]: { questionId: p.id, freeText: m.target.value }
              }))
            }
          )
        ] }, p.id)),
        /* @__PURE__ */ h.jsxs("div", { className: "request-actions", children: [
          /* @__PURE__ */ h.jsx(
            "button",
            {
              type: "button",
              className: "button secondary",
              disabled: s,
              onClick: () => {
                c(!0), window.muse.cancelQuestion(t.sessionId, t.userInputId).catch((p) => i(p.message)).finally(() => c(!1));
              },
              children: "Skip question"
            }
          ),
          /* @__PURE__ */ h.jsx("button", { type: "submit", className: "button primary", disabled: !f || s, children: s ? "Sending…" : "Continue" })
        ] })
      ]
    }
  );
}
function dO({
  view: t,
  onError: i
}) {
  const a = G.useRef(null), o = G.useRef(!0), [s, c] = G.useState(!1);
  G.useEffect(() => {
    o.current && a.current && (a.current.scrollTop = a.current.scrollHeight);
  }, [t]);
  const f = t.items.filter((m) => !m.retracted && !b1(m)), p = [];
  for (const m of f) {
    const g = !["userMessage", "agentMessage", "reasoning"].includes(m.kind) && m.status === "completed", b = p[p.length - 1];
    g && b?.type === "toolGroup" ? b.items.push(m) : g && b?.type === "single" && !["userMessage", "agentMessage", "reasoning"].includes(b.item.kind) && b.item.status === "completed" ? p[p.length - 1] = { type: "toolGroup", items: [b.item, m] } : p.push({ type: "single", item: m });
  }
  return /* @__PURE__ */ h.jsxs("div", { className: "transcript-wrap", children: [
    /* @__PURE__ */ h.jsx(
      "div",
      {
        className: "transcript-scroll",
        ref: a,
        onScroll: () => {
          const m = a.current;
          m && (o.current = m.scrollHeight - m.scrollTop - m.clientHeight < 110, c(!o.current));
        },
        children: /* @__PURE__ */ h.jsxs("div", { className: "transcript", role: "log", "aria-label": "Conversation", "aria-live": "off", children: [
          /* @__PURE__ */ h.jsxs("div", { className: "conversation-beginning", children: [
            /* @__PURE__ */ h.jsx(zo, { size: 23 }),
            /* @__PURE__ */ h.jsx("span", { children: "Conversation with Muse" })
          ] }),
          t.historyNotice && /* @__PURE__ */ h.jsx("div", { className: "inline-notice", children: t.historyNotice }),
          p.map((m) => m.type === "toolGroup" && m.items.length >= 3 ? /* @__PURE__ */ h.jsx(
            oO,
            {
              items: m.items,
              sessionId: t.session.sessionId,
              onError: i
            },
            m.items[0].itemId
          ) : (m.type === "toolGroup" ? m.items : [m.item]).map((b) => {
            if (b.kind === "userMessage") {
              const x = _E(b.displayText || b.text) || b.displayText || b.text || "";
              return /* @__PURE__ */ h.jsxs("article", { className: "message user-message", children: [
                /* @__PURE__ */ h.jsxs("div", { className: "message-heading", children: [
                  /* @__PURE__ */ h.jsx("span", { className: "avatar user-avatar", children: "Y" }),
                  /* @__PURE__ */ h.jsx("strong", { children: "You" }),
                  b.recordedAt && /* @__PURE__ */ h.jsx("time", { children: new Date(b.recordedAt).toLocaleTimeString(void 0, {
                    hour: "numeric",
                    minute: "2-digit"
                  }) }),
                  /* @__PURE__ */ h.jsx(wp, { text: x })
                ] }),
                /* @__PURE__ */ h.jsx("div", { className: "user-message-text", children: x }),
                b.imageRefs?.map((w) => /* @__PURE__ */ h.jsx(lO, { file: w }, w.id)),
                b.fileRefs?.map((w) => /* @__PURE__ */ h.jsxs("div", { className: "attachment", style: { marginTop: 8 }, children: [
                  /* @__PURE__ */ h.jsx(pa, { size: 16 }),
                  /* @__PURE__ */ h.jsx("span", { children: w.name }),
                  /* @__PURE__ */ h.jsxs("small", { children: [
                    Math.ceil(w.size / 1024),
                    " KB"
                  ] })
                ] }, w.id))
              ] }, b.itemId);
            }
            return b.kind === "agentMessage" ? /* @__PURE__ */ h.jsxs("article", { className: "message agent-message", children: [
              /* @__PURE__ */ h.jsxs("div", { className: "message-heading", children: [
                /* @__PURE__ */ h.jsx("span", { className: "avatar muse-avatar", children: /* @__PURE__ */ h.jsx(zo, { size: 26 }) }),
                /* @__PURE__ */ h.jsx("strong", { children: "Muse" }),
                b.status === "inProgress" && /* @__PURE__ */ h.jsx("span", { className: "streaming-label", children: "Composing" }),
                /* @__PURE__ */ h.jsx(wp, { text: b.text || "" })
              ] }),
              /* @__PURE__ */ h.jsx(
                vw,
                {
                  text: b.text || (b.status === "inProgress" ? "…" : ""),
                  onError: i
                }
              )
            ] }, b.itemId) : b.kind === "reasoning" ? /* @__PURE__ */ h.jsx(sO, { item: b, onError: i }, b.itemId) : /* @__PURE__ */ h.jsx(
              ww,
              {
                item: b,
                sessionId: t.session.sessionId,
                onError: i
              },
              b.itemId
            );
          })),
          t.approvals.map((m) => /* @__PURE__ */ h.jsx(
            cO,
            {
              approval: m,
              onError: i
            },
            `${m.approvalId}:${m.currentRequirementId.sourceIndex}`
          )),
          t.questions.map((m) => /* @__PURE__ */ h.jsx(fO, { request: m, onError: i }, m.userInputId)),
          t.error && /* @__PURE__ */ h.jsxs("div", { className: "inline-error", role: "alert", children: [
            /* @__PURE__ */ h.jsx("strong", { children: "Muse couldn’t finish this turn." }),
            /* @__PURE__ */ h.jsx("p", { children: t.error }),
            /* @__PURE__ */ h.jsx("span", { children: "Your conversation is saved. You can send a follow-up or reconnect." })
          ] }),
          f.length === 0 && /* @__PURE__ */ h.jsxs("div", { className: "empty-conversation", children: [
            /* @__PURE__ */ h.jsx(zo, { size: 48 }),
            /* @__PURE__ */ h.jsx("h2", { children: "Start a conversation" }),
            /* @__PURE__ */ h.jsx("p", { children: "Ask a question or describe what you want to build." })
          ] })
        ] })
      }
    ),
    s && /* @__PURE__ */ h.jsx(
      dn,
      {
        className: "jump-button",
        label: "Jump to latest message",
        onClick: () => {
          o.current = !0, a.current?.scrollTo({ top: a.current.scrollHeight, behavior: "smooth" }), c(!1);
        },
        children: /* @__PURE__ */ h.jsx(jS, { size: 17 })
      }
    )
  ] });
}
function pO(t) {
  return t.directory ? /* @__PURE__ */ h.jsx(Uv, { size: 15, className: "file-icon folder" }) : /\.(ts|tsx|js|jsx|mjs|cjs|py|rs|go|rb|java|c|cpp|h|swift|css|scss|html|sh)$/i.test(t.name) ? /* @__PURE__ */ h.jsx(pa, { size: 15, className: "file-icon code" }) : /\.(md|mdx|txt|json|yaml|yml|toml|lock)$/i.test(t.name) ? /* @__PURE__ */ h.jsx(Nv, { size: 15, className: "file-icon doc" }) : /* @__PURE__ */ h.jsx(LS, { size: 15, className: "file-icon" });
}
function hO({
  projects: t,
  sessions: i,
  onOpen: a,
  onChoose: o
}) {
  const [s, c] = G.useState({});
  return G.useEffect(() => {
    let f = !1;
    return Promise.all(
      t.map(async (p) => {
        try {
          const m = await window.muse.gitStatus(p);
          return [p, m];
        } catch {
          return null;
        }
      })
    ).then((p) => {
      if (f) return;
      const m = {};
      for (const g of p)
        g && (m[g[0]] = g[1]);
      c(m);
    }), () => {
      f = !0;
    };
  }, [t]), /* @__PURE__ */ h.jsxs("section", { className: "workspace-page", children: [
    /* @__PURE__ */ h.jsxs("div", { className: "page-heading", children: [
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("h1", { children: "Projects" }),
        /* @__PURE__ */ h.jsx("p", { children: "Open a recent project or choose a folder." })
      ] }),
      /* @__PURE__ */ h.jsxs("button", { className: "button primary", onClick: a, children: [
        /* @__PURE__ */ h.jsx(Co, { size: 15 }),
        "Open project"
      ] })
    ] }),
    /* @__PURE__ */ h.jsxs("div", { className: "project-grid", children: [
      t.map((f, p) => {
        const m = i.filter((x) => x.workspaceRoot === f), g = m.map((x) => x.lastActivityAt || x.updatedAt).sort().at(-1), b = s[f];
        return /* @__PURE__ */ h.jsxs("button", { className: "project-card", onClick: () => o(f), children: [
          /* @__PURE__ */ h.jsxs("div", { className: "project-card-top", children: [
            /* @__PURE__ */ h.jsx("span", { className: `project-card-icon hue-${p % 3}`, children: /* @__PURE__ */ h.jsx(Dr, { size: 24, strokeWidth: 1.5 }) }),
            b?.isRepository && /* @__PURE__ */ h.jsxs("span", { className: "project-git-pills", children: [
              b.branch && /* @__PURE__ */ h.jsxs("span", { className: "project-git-pill", children: [
                /* @__PURE__ */ h.jsx(Bv, { size: 11 }),
                b.branch
              ] }),
              /* @__PURE__ */ h.jsx("span", { className: `project-git-pill ${b.changes.length ? "dirty" : "clean"}`, children: b.changes.length ? `${b.changes.length} changed` : "Clean" })
            ] })
          ] }),
          /* @__PURE__ */ h.jsx("h2", { children: Ki(f) }),
          /* @__PURE__ */ h.jsx("p", { children: f.replace(/^(?:\/Users\/[^/]+|\/home\/[^/]+|[A-Za-z]:\\Users\\[^\\]+)/, "~") }),
          /* @__PURE__ */ h.jsxs("footer", { children: [
            /* @__PURE__ */ h.jsxs("span", { children: [
              m.length,
              " conversation",
              m.length === 1 ? "" : "s",
              g ? ` · ${g0(g)}` : ""
            ] }),
            /* @__PURE__ */ h.jsx(Or, { size: 16 })
          ] })
        ] }, f);
      }),
      /* @__PURE__ */ h.jsxs("button", { className: "project-card add-project", onClick: a, children: [
        /* @__PURE__ */ h.jsx(Co, { size: 26, strokeWidth: 1.2 }),
        /* @__PURE__ */ h.jsx("h2", { children: "Open project" }),
        /* @__PURE__ */ h.jsx("p", { children: "Open a folder on your Mac." })
      ] })
    ] }),
    /* @__PURE__ */ h.jsx("p", { className: "page-footnote", children: "Projects stay right where they are. Muse works in the folders you choose." })
  ] });
}
function mO({
  project: t,
  onOpen: i,
  onMention: a
}) {
  const [o, s] = G.useState(""), [c, f] = G.useState([]), [p, m] = G.useState(""), [g, b] = G.useState(""), [x, w] = G.useState(""), [v, S] = G.useState(""), [j, E] = G.useState(!1);
  if (G.useEffect(() => {
    s(""), m(""), b(""), w("");
  }, [t]), G.useEffect(() => {
    if (!t) return;
    let V = !1;
    return E(!0), S(""), f([]), window.muse.listFiles(t, o).then((J) => {
      V || f(J);
    }).catch((J) => {
      V || S(J.message);
    }).finally(() => {
      V || E(!1);
    }), () => {
      V = !0;
    };
  }, [t, o]), G.useEffect(() => {
    if (!p) return;
    let V = !1;
    return b("Loading preview…"), window.muse.readFile(t, p).then((J) => {
      V || b(J);
    }).catch((J) => {
      V || b(J.message);
    }), () => {
      V = !0;
    };
  }, [t, p]), !t)
    return /* @__PURE__ */ h.jsxs("section", { className: "workspace-page page-empty", children: [
      /* @__PURE__ */ h.jsx(Dr, { size: 36, strokeWidth: 1.2 }),
      /* @__PURE__ */ h.jsx("h1", { children: "Files" }),
      /* @__PURE__ */ h.jsx("p", { children: "Choose a project to explore its files and bring context into a conversation." }),
      /* @__PURE__ */ h.jsxs("button", { className: "button primary", onClick: i, children: [
        "Open project ",
        /* @__PURE__ */ h.jsx(Or, { size: 14 })
      ] })
    ] });
  const O = c.filter((V) => V.name.toLowerCase().includes(x.toLowerCase())).sort((V, J) => Number(J.directory) - Number(V.directory) || V.name.localeCompare(J.name)), I = o ? o.split("/").filter(Boolean) : [], L = p && g ? g.split(`
`).length : 0;
  return /* @__PURE__ */ h.jsxs("section", { className: "workspace-page files-page", children: [
    /* @__PURE__ */ h.jsx("div", { className: "page-heading", children: /* @__PURE__ */ h.jsxs("div", { children: [
      /* @__PURE__ */ h.jsx("h1", { children: "Files" }),
      /* @__PURE__ */ h.jsxs("div", { className: "files-breadcrumbs", "aria-label": "Folder path", children: [
        /* @__PURE__ */ h.jsxs(
          "button",
          {
            type: "button",
            className: `breadcrumb-segment ${o ? "" : "current"}`,
            onClick: () => {
              s(""), w("");
            },
            children: [
              /* @__PURE__ */ h.jsx(Dr, { size: 13 }),
              /* @__PURE__ */ h.jsx("span", { children: Ki(t) })
            ]
          }
        ),
        /* @__PURE__ */ h.jsx(Ci, { size: 12 }),
        I.length === 0 ? /* @__PURE__ */ h.jsx("span", { className: "breadcrumb-segment current", children: "Project root" }) : I.map((V, J) => {
          const T = I.slice(0, J + 1).join("/"), X = J === I.length - 1;
          return /* @__PURE__ */ h.jsxs("span", { className: "breadcrumb-part", children: [
            J > 0 && /* @__PURE__ */ h.jsx(Ci, { size: 12 }),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                type: "button",
                className: `breadcrumb-segment ${X ? "current" : ""}`,
                onClick: () => {
                  s(T), w("");
                },
                children: V
              }
            )
          ] }, T);
        })
      ] })
    ] }) }),
    /* @__PURE__ */ h.jsxs("div", { className: "file-browser", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "file-browser-sidebar", children: [
        /* @__PURE__ */ h.jsx("div", { className: "file-search-bar", children: /* @__PURE__ */ h.jsxs("div", { className: "file-search", children: [
          /* @__PURE__ */ h.jsx(vu, { size: 14 }),
          /* @__PURE__ */ h.jsx(
            "input",
            {
              "aria-label": "Filter files",
              placeholder: "Find in this folder…",
              value: x,
              onChange: (V) => w(V.target.value)
            }
          ),
          x && /* @__PURE__ */ h.jsx(
            "button",
            {
              type: "button",
              className: "file-search-clear",
              "aria-label": "Clear filter",
              onClick: () => w(""),
              children: /* @__PURE__ */ h.jsx(ha, { size: 13 })
            }
          )
        ] }) }),
        /* @__PURE__ */ h.jsxs("div", { className: "file-browser-list", children: [
          o && /* @__PURE__ */ h.jsxs(
            "button",
            {
              className: "file-row parent-folder",
              onClick: () => {
                s(o.split("/").slice(0, -1).join("/")), w("");
              },
              children: [
                /* @__PURE__ */ h.jsx(ES, { size: 14 }),
                /* @__PURE__ */ h.jsx("span", { children: "Parent folder" })
              ]
            }
          ),
          v && /* @__PURE__ */ h.jsx("p", { className: "inline-error", children: v }),
          j && /* @__PURE__ */ h.jsx("p", { className: "file-list-message", children: "Opening folder…" }),
          !j && O.map((V) => /* @__PURE__ */ h.jsxs(
            "button",
            {
              "aria-label": V.name,
              className: `file-row ${p === V.path ? "selected" : ""}`,
              onClick: () => {
                V.directory ? (s(V.path), w("")) : m(V.path);
              },
              children: [
                pO(V),
                /* @__PURE__ */ h.jsx("span", { children: V.name }),
                V.directory && /* @__PURE__ */ h.jsx(Ci, { size: 13, className: "file-row-chevron" })
              ]
            },
            V.path
          )),
          !j && !v && !O.length && /* @__PURE__ */ h.jsx("p", { className: "file-list-message", children: x ? "No matching files." : "This folder is empty." })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "file-list-footnote", children: [
          /* @__PURE__ */ h.jsxs("span", { children: [
            c.length,
            " entries"
          ] }),
          /* @__PURE__ */ h.jsx("span", { children: "·" }),
          /* @__PURE__ */ h.jsx("span", { children: "build dependencies hidden" })
        ] })
      ] }),
      /* @__PURE__ */ h.jsx("div", { className: "file-preview", children: p ? /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
        /* @__PURE__ */ h.jsxs("header", { children: [
          /* @__PURE__ */ h.jsxs("div", { className: "file-preview-title", children: [
            /* @__PURE__ */ h.jsx(pa, { size: 15 }),
            /* @__PURE__ */ h.jsx("span", { children: p }),
            L > 0 && /* @__PURE__ */ h.jsxs("small", { children: [
              L,
              " lines"
            ] })
          ] }),
          /* @__PURE__ */ h.jsxs("button", { className: "file-ask-button text-button", onClick: () => a(p), children: [
            "Ask UniPi ",
            /* @__PURE__ */ h.jsx(Or, { size: 12 })
          ] })
        ] }),
        /* @__PURE__ */ h.jsx("pre", { children: g })
      ] }) : /* @__PURE__ */ h.jsxs("div", { className: "file-preview-empty", children: [
        /* @__PURE__ */ h.jsx("span", { className: "file-empty-badge", children: /* @__PURE__ */ h.jsx(pa, { size: 24, strokeWidth: 1.4 }) }),
        /* @__PURE__ */ h.jsx("h3", { children: "File preview" }),
        /* @__PURE__ */ h.jsx("p", { children: "Select a file on the left to inspect its contents or reference it in chat." })
      ] }) })
    ] })
  ] });
}
const gO = [
  {
    title: "Voice input",
    detail: "Click the microphone or press Option–V to start and stop recording. Muse Code transcribes your speech into the draft for you to review before sending. Escape cancels. Recordings stop at two minutes, and temporary audio is removed after transcription. Microphone permission is requested the first time you use voice."
  },
  {
    title: "Your full CLI",
    detail: "Tools, skills, hooks, plugins, and permission policies run through your existing Muse Code installation. Background reminders and hooks appear in the Activity inspector. For interactive CLI commands, skill and plugin administration, worktree setup, or account settings, use Muse Code in the project inspector to open the full CLI in Terminal. Type / for desktop commands, including /clear, /voice, /model, /effort, /compact, /rename, and /stop. Unsupported commands stay out of model messages."
  },
  {
    title: "Your first conversation",
    detail: "Open a project folder, tell Muse what you want to accomplish, and press Return. Muse uses the same credentials, settings, and models as your CLI. Shift–Return adds a new line."
  },
  {
    title: "Bring your existing work",
    detail: "Your CLI conversations appear in the sidebar. Choose a project to filter them, or select All projects. Opening a conversation reads its saved history; sending a message resumes it. A session already running in another CLI window may need to finish there before Desktop can resume it."
  },
  {
    title: "Permissions and approvals",
    detail: "Muse keeps its configured sandbox and tool permissions. When it asks for approval, read the exact command or target and choose one of the options offered by your CLI. Some choices apply once; others apply to the session or save a policy rule. Desktop never chooses one for you."
  },
  {
    title: "Send follow-ups",
    detail: "Send a follow-up while Muse works. Queue next saves it for the next turn; Steer now guides the current turn. The stop button cancels the active turn. Choose reasoning effort and model in the message toolbar."
  },
  {
    title: "Add context",
    detail: "Attach images or text files using the paperclip. Select up to five files, 2 MB per file and 4 MB total; text files are limited to 200 KB. The Files tab can add a relative file reference to your message. Muse reads that project file using its own tools and permissions."
  },
  {
    title: "Customize your workspace",
    detail: "Choose Muse, Daylight, Moonlight, Grove, or Plush in Settings. Adjust background intensity and reading size, or follow your Mac’s light and dark appearance. Reduced motion honors both your app preference and your macOS accessibility settings."
  }
];
function xO({
  platform: t = "darwin",
  onError: i
}) {
  const [a, o] = G.useState({ 0: !0 }), s = t === "darwin" ? "⌘" : "Ctrl", c = t === "darwin" ? "⌥" : "Alt";
  return /* @__PURE__ */ h.jsx("section", { className: "workspace-page docs-page", children: /* @__PURE__ */ h.jsxs("div", { className: "docs-container", children: [
    /* @__PURE__ */ h.jsxs("div", { className: "page-heading", children: [
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("h1", { children: "Getting started" }),
        /* @__PURE__ */ h.jsx("p", { children: "Learn the basics and keyboard shortcuts." })
      ] }),
      /* @__PURE__ */ h.jsx(dv, { size: 32, strokeWidth: 1.2 })
    ] }),
    /* @__PURE__ */ h.jsx("div", { className: "guides", children: gO.map((f, p) => {
      const m = !!a[p];
      return /* @__PURE__ */ h.jsxs("div", { className: `guide-item ${m ? "open" : ""}`, children: [
        /* @__PURE__ */ h.jsxs(
          "button",
          {
            type: "button",
            className: "guide-summary",
            "aria-expanded": m,
            onClick: () => o((g) => ({
              ...g,
              [p]: !g[p]
            })),
            children: [
              /* @__PURE__ */ h.jsxs("span", { className: "guide-number", children: [
                "0",
                p + 1
              ] }),
              /* @__PURE__ */ h.jsx("span", { children: f.title }),
              /* @__PURE__ */ h.jsx(Ci, { size: 15, className: "guide-chevron" })
            ]
          }
        ),
        /* @__PURE__ */ h.jsx("div", { className: `guide-collapse ${m ? "open" : ""}`, children: /* @__PURE__ */ h.jsx("div", { className: "guide-collapse-inner", children: /* @__PURE__ */ h.jsx("p", { children: f.detail }) }) })
      ] }, f.title);
    }) }),
    /* @__PURE__ */ h.jsxs("div", { className: "shortcuts-guide", children: [
      /* @__PURE__ */ h.jsx("h2", { children: "Keyboard shortcuts" }),
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("span", { children: "Start or stop voice input" }),
        /* @__PURE__ */ h.jsxs("kbd", { children: [
          c,
          " V"
        ] })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("span", { children: "Cancel voice input" }),
        /* @__PURE__ */ h.jsx("kbd", { children: "Esc" })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("span", { children: "New conversation" }),
        /* @__PURE__ */ h.jsxs("kbd", { children: [
          s,
          " N"
        ] })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("span", { children: "Open project" }),
        /* @__PURE__ */ h.jsxs("kbd", { children: [
          s,
          " O"
        ] })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("span", { children: "Search & commands" }),
        /* @__PURE__ */ h.jsxs("kbd", { children: [
          s,
          " K"
        ] })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("span", { children: "Settings" }),
        /* @__PURE__ */ h.jsxs("kbd", { children: [
          s,
          " ,"
        ] })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("span", { children: "Toggle sidebar" }),
        /* @__PURE__ */ h.jsxs("kbd", { children: [
          s,
          " B"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ h.jsxs(
      "button",
      {
        className: "button secondary",
        onClick: () => {
          window.muse.openExternal("https://dev.meta.ai/docs/muse-code").catch((f) => i(f.message));
        },
        children: [
          "Muse Code documentation ",
          /* @__PURE__ */ h.jsx(Or, { size: 14 })
        ]
      }
    ),
    /* @__PURE__ */ h.jsx("p", { className: "page-footnote", children: "UniPi is an independent community app. Your CLI remains the home of your account and conversations." })
  ] }) });
}
const bO = [
  {
    icon: XS,
    title: "Plan a feature",
    description: "Turn an idea into an approach",
    prompt: "I have an idea I’d like to build. First, help me think through the approach. "
  },
  {
    icon: wv,
    title: "Explore the project",
    description: "Understand the code and architecture",
    prompt: "Explore this project and give me a clear tour of its architecture, key files, and how to run it. Do not make changes yet."
  },
  {
    icon: Zv,
    title: "Review the code",
    description: "Find bugs and improvements",
    prompt: "Review this project for bugs, rough edges, and opportunities to simplify. Explain the most useful improvements before making changes."
  }
];
function yO(t, i) {
  if (i.includes(t.sessionId)) return "Pinned";
  const a = new Date(t.lastActivityAt || t.updatedAt), o = /* @__PURE__ */ new Date();
  if (o.setHours(0, 0, 0, 0), a >= o) return "Today";
  const s = new Date(o);
  if (s.setDate(o.getDate() - 1), a >= s) return "Yesterday";
  const c = new Date(o);
  return c.setDate(o.getDate() - 7), a >= c ? "Previous 7 days" : "Earlier";
}
function vO() {
  const [t, i] = G.useState(() => zE.parse({})), [a, o] = G.useState({ state: "connecting" }), [s, c] = G.useState("0.2.0"), [f, p] = G.useState("darwin"), [m, g] = G.useState([]), [b, x] = G.useState(null), [w, v] = G.useState(!0), [S, j] = G.useState(""), [E, O] = G.useState(""), [I, L] = G.useState(null), [V, J] = G.useState([]), [T, X] = G.useState(""), [pe, _e] = G.useState({}), [Z, te] = G.useState(!1), [oe, Ne] = G.useState(!1), [ue, ee] = G.useState(!0), [W, de] = G.useState(!1), [ge, Ae] = G.useState(!1), [z, Ie] = G.useState("chat"), [ut, N] = G.useState(!1), [C, P] = G.useState(!1), [le, xe] = G.useState(!1), [Te, $] = G.useState([]), [re, ce] = G.useState([]), [we, Bt] = G.useState(!1), [Sn, zn] = G.useState(!0), [dt, qe] = G.useState(!0), [Ge, Nt] = G.useState({}), [li, It] = G.useState(!1), [oi, si] = G.useState(""), [Ht, ui] = G.useState(null), [tr, Y] = G.useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ), ne = G.useRef(null), be = G.useRef(0), je = G.useRef(0), xt = G.useRef(!1), Qe = G.useRef(() => {
  }), bt = G.useRef(void 0), St = t.theme === "system" ? tr ? "moonlight" : "daylight" : t.theme, In = f === "darwin" ? "⌘" : "Ctrl", zt = I?.session.sessionId || `new:${E}`, ci = pe[zt] || "", ya = I?.session.status === "running", Ue = G.useCallback((U) => ui({ message: U, kind: "error" }), []), Ot = (U) => ui({ message: U, kind: "success" }), Kt = G.useCallback(async () => {
    const U = ++je.current;
    xt.current || v(!0), j("");
    try {
      const ae = /* @__PURE__ */ new Map(), he = /* @__PURE__ */ new Set();
      let ve;
      do {
        const Wt = await window.muse.listSessions(ve);
        if (U !== je.current) return;
        for (const Zt of Wt.sessions) ae.set(Zt.sessionId, Zt);
        if (g([...ae.values()]), x(Wt.nextCursor), ve = Wt.nextCursor || void 0, ve && he.has(ve))
          throw new Error("Muse returned a repeated history cursor. Reconnect to refresh history.");
        ve && he.add(ve);
      } while (ve);
      xt.current = !0;
    } catch (ae) {
      U === je.current && j(ae instanceof Error ? ae.message : String(ae));
    } finally {
      U === je.current && v(!1);
    }
  }, []), Dt = G.useRef({}), nr = G.useRef(void 0), Uo = G.useRef(0);
  G.useEffect(() => () => clearTimeout(nr.current), []);
  const fi = G.useCallback(
    (U) => {
      Dt.current = { ...Dt.current, ...U }, i((he) => ({ ...he, ...U }));
      const ae = ++Uo.current;
      clearTimeout(nr.current), nr.current = setTimeout(() => {
        const he = { ...Dt.current };
        window.muse.savePreferences(he).then((ve) => {
          ae === Uo.current && (Dt.current = {}, i(ve));
        }).catch((ve) => Ue(ve.message));
      }, 250);
    },
    [Ue]
  );
  G.useEffect(() => {
    const U = window.matchMedia("(prefers-color-scheme: dark)"), ae = () => Y(U.matches);
    return U.addEventListener("change", ae), () => U.removeEventListener("change", ae);
  }, []), G.useEffect(() => {
  }, [St, t.fontSize, t.reduceMotion]), G.useEffect(() => {
    if (!Ht || Ht.kind === "error") return;
    const U = setTimeout(() => ui(null), 4e3);
    return () => clearTimeout(U);
  }, [Ht]), G.useEffect(() => {
    const U = (he) => {
      he.type === "connection" && o(he.status), he.type === "preferences" && i({ ...he.preferences, ...Dt.current }), he.type === "error" && Ue(he.message), he.type === "menu" && Qe.current(he.action), he.type === "session" && (he.view.session.sessionId === ne.current && L(he.view), g(
        (ve) => ve.map(
          (Wt) => Wt.sessionId === he.view.session.sessionId ? he.view.session : Wt
        )
      )), he.type === "sessions-changed" && (clearTimeout(bt.current), bt.current = setTimeout(() => {
        Kt();
      }, 250));
    }, ae = window.muse.onEvent(U);
    return window.muse.bootstrap().then((he) => {
      i(he.preferences), o(he.status), c(he.version), p(he.platform || "darwin"), O(he.preferences.recentProjects[0] || "");
    }).catch((he) => Ue(he.message)), () => {
      ae(), clearTimeout(bt.current), je.current++;
    };
  }, [Kt, Ue]), G.useEffect(() => {
    a.state === "ready" && (Kt(), window.muse.models().then((U) => {
      J(U), X((ae) => ae || U.find((he) => he.isDefault)?.modelId || "");
    }).catch((U) => Ue(U.message)));
  }, [a.state, Kt, Ue]);
  const _n = () => {
    Ie("chat"), be.current++, ne.current = null, L(null), Ne(!1), P(!1);
  }, Ai = async () => {
    try {
      const U = await window.muse.chooseProject();
      U && (O(U), _n());
    } catch (U) {
      Ue(U instanceof Error ? U.message : String(U));
    }
  }, Oi = async (U) => {
    if (Ie("chat"), ne.current === U && I?.session.sessionId === U) return;
    const ae = ++be.current;
    !I && Ne(!0), ne.current = U;
    try {
      const ve = await window.muse.openSession(U);
      if (be.current !== ae) return;
      L(ve), O(ve.session.workspaceRoot || ""), X(ve.session.modelId || "");
    } catch (ve) {
      be.current === ae && (Ue(ve instanceof Error ? ve.message : String(ve)), ne.current = I?.session.sessionId || null);
    } finally {
      be.current === ae && Ne(!1);
    }
  }, Jt = () => {
    window.muse.connect().then((U) => {
      if (o(U), U.state === "ready") {
        const ae = ne.current;
        ae && Oi(ae);
      }
    }).catch((U) => Ue(U.message));
  };
  Qe.current = (U) => {
    U === "new" && _n(), U === "open" && Ai(), U === "search" && N(!0), U === "settings" && Ae("appearance"), U === "sidebar" && ee((ae) => !ae);
  }, G.useEffect(() => {
    if (f === "darwin") return;
    const U = (ae) => {
      if (!(ae.ctrlKey || ae.metaKey) || ae.altKey || ae.shiftKey) return;
      const he = ae.key.toLowerCase(), Wt = {
        n: "new",
        o: "open",
        k: "search",
        ",": "settings",
        b: "sidebar"
      }[he];
      Wt && (ae.preventDefault(), Qe.current(Wt));
    };
    return window.addEventListener("keydown", U), () => window.removeEventListener("keydown", U);
  }, [f]);
  const di = async (U, ae) => {
    te(!0);
    const he = ci, ve = zt, Wt = be.current;
    try {
      const Zt = y1(he);
      if (Zt) {
        if (!Pd.some((ln) => ln.name === Zt.name))
          throw new Error(
            `/${Zt.name} is not handled by Desktop. Use /help, or open Muse Code in the project inspector for CLI commands.`
          );
        if (U.length)
          throw new Error("Send attachments with a message, or remove them before using a command.");
        const { name: Pe, argument: qt } = Zt;
        if ((Pe === "clear" || Pe === "new") && _n(), Pe === "help" && Ie("docs"), Pe === "settings" && Ae("appearance"), Pe === "voice") throw new Error("此插件不支持语音输入。");
        if (Pe === "model")
          if (!qt) window.dispatchEvent(new CustomEvent("muse:select", { detail: "Model" }));
          else {
            if (!V.some((ln) => ln.modelId === qt))
              throw new Error("Choose one of the models available in the Model menu.");
            I && await window.muse.setModel(I.session.sessionId, qt), X(qt);
          }
        if (Pe === "effort")
          if (!qt)
            window.dispatchEvent(new CustomEvent("muse:select", { detail: "Reasoning effort" }));
          else {
            const ln = h0.safeParse(qt.toLowerCase());
            if (!ln.success)
              throw new Error("Choose none, minimal, low, medium, high, xhigh, max, or ultra.");
            i(await window.muse.savePreferences({ reasoningEffort: ln.data }));
          }
        if (["compact", "rename", "stop"].includes(Pe)) {
          if (!I) throw new Error("Open a conversation before using this command.");
          if (Pe === "compact") {
            const ln = await window.muse.compact(I.session.sessionId);
            Ot(
              ln.status === "noop" ? "There is no conversation history to compact yet." : "Muse is compacting this conversation."
            );
          }
          Pe === "stop" && await window.muse.cancel(I.session.sessionId), Pe === "rename" && (qt ? await window.muse.renameSession(I.session.sessionId, qt) : (si(_i(I.session)), It(!0)));
        }
        return _e((ln) => ({ ...ln, [ve]: "" })), !0;
      }
      let an = I;
      if (!an) {
        let Pe = E;
        if (!Pe) {
          if (Pe = await window.muse.chooseProject() || "", !Pe) return !1;
          O(Pe);
        }
        an = await window.muse.createSession(Pe, T || void 0), be.current === Wt && (ne.current = an.session.sessionId);
      }
      const pi = an.session.sessionId, Vu = {
        itemId: `optimistic-${Date.now()}`,
        kind: "userMessage",
        revision: 0,
        status: "completed",
        text: he,
        displayText: he,
        recordedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      return be.current === Wt && L((Pe) => {
        const qt = Pe?.session.sessionId === pi ? Pe : an, ln = qt.items.some(
          (Br) => Br.kind === "userMessage" && (Br.text === he || Br.displayText === he)
        );
        return {
          ...qt,
          session: { ...qt.session, status: "running" },
          items: ln ? qt.items : [...qt.items, Vu]
        };
      }), _e((Pe) => ({
        ...Pe,
        [ve]: Pe[ve] === he ? "" : Pe[ve] || "",
        [pi]: Pe[pi] === he ? "" : Pe[pi] || ""
      })), await window.muse.send({
        sessionId: an.session.sessionId,
        text: he,
        attachments: U.map((Pe) => Pe.id),
        effort: t.reasoningEffort,
        mode: ae
      }), !0;
    } catch (Zt) {
      return _e((an) => ({ ...an, [ve]: an[ve] || he })), Ue(Zt instanceof Error ? Zt.message : String(Zt)), !1;
    } finally {
      te(!1);
    }
  }, rn = (U) => {
    if (!I) {
      X(U);
      return;
    }
    const ae = be.current;
    window.muse.setModel(I.session.sessionId, U).then(() => {
      be.current === ae && X(U);
    }).catch((he) => Ue(he.message));
  }, Lo = (U) => fi({
    pinnedSessionIds: t.pinnedSessionIds.includes(U) ? t.pinnedSessionIds.filter((ae) => ae !== U) : [...t.pinnedSessionIds, U]
  }), $u = (U) => {
    fi({
      archivedSessionIds: t.archivedSessionIds.includes(U) ? t.archivedSessionIds.filter((ae) => ae !== U) : [...t.archivedSessionIds, U]
    }), U === I?.session.sessionId && _n();
  }, Di = m.filter(
    (U) => (!E || U.workspaceRoot === E) && !["subagent", "reminder"].includes(U.kind || "") && t.archivedSessionIds.includes(U.sessionId) === C
  ).sort(
    (U, ae) => Number(t.pinnedSessionIds.includes(ae.sessionId)) - Number(t.pinnedSessionIds.includes(U.sessionId)) || (ae.lastActivityAt || ae.updatedAt).localeCompare(U.lastActivityAt || U.updatedAt)
  ), Mi = Di.filter((U) => Te.includes(U.sessionId)).map((U) => U.sessionId), va = async () => {
    if (we || !re.length) return;
    const U = [...re];
    Bt(!0);
    try {
      await window.muse.deleteSessions(U), je.current++, g((ae) => ae.filter((he) => !U.includes(he.sessionId))), $((ae) => ae.filter((he) => !U.includes(he))), _e((ae) => Object.fromEntries(Object.entries(ae).filter(([he]) => !U.includes(he)))), fi({
        pinnedSessionIds: t.pinnedSessionIds.filter((ae) => !U.includes(ae)),
        archivedSessionIds: t.archivedSessionIds.filter((ae) => !U.includes(ae))
      }), U.includes(ne.current || "") && _n(), ce([]), Kt();
    } catch (ae) {
      Ue(ae instanceof Error ? ae.message : String(ae));
    } finally {
      Bt(!1);
    }
  }, Ri = [];
  for (const U of Di) {
    const ae = yO(U, t.pinnedSessionIds), he = Ri[Ri.length - 1];
    he && he.group === ae ? he.entries.push(U) : Ri.push({ group: ae, entries: [U] });
  }
  return /* @__PURE__ */ h.jsxs(
    "div",
    {
      "data-theme": St,
      "data-text-size": t.fontSize,
      "data-reduce-motion": String(t.reduceMotion),
      className: `app-shell ${ue ? "" : "sidebar-hidden"} ${W ? "with-inspector" : ""}`,
      style: { "--background-presence": t.backgroundIntensity / 100 },
      children: [
        f !== "darwin" && /* @__PURE__ */ h.jsxs("div", { className: "window-traffic-lights", role: "group", "aria-label": "Window controls", children: [
          /* @__PURE__ */ h.jsx(
            "button",
            {
              type: "button",
              className: "traffic-light close",
              "aria-label": "Close window",
              title: "Close",
              onClick: () => {
                window.muse.windowAction("close");
              }
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              type: "button",
              className: "traffic-light minimize",
              "aria-label": "Minimize window",
              title: "Minimize",
              onClick: () => {
                window.muse.windowAction("minimize");
              }
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              type: "button",
              className: "traffic-light maximize",
              "aria-label": "Maximize window",
              title: "Maximize",
              onClick: () => {
                window.muse.windowAction("maximize");
              }
            }
          )
        ] }),
        /* @__PURE__ */ h.jsxs(
          "aside",
          {
            "aria-hidden": !ue || void 0,
            inert: ue ? void 0 : !0,
            className: `sidebar ${Di.length ? "has-conversations" : ""}`,
            children: [
              /* @__PURE__ */ h.jsx("div", { className: "sidebar-titlebar", children: /* @__PURE__ */ h.jsx(dn, { label: "Hide sidebar", onClick: () => ee(!1), children: /* @__PURE__ */ h.jsx($S, { size: 17 }) }) }),
              /* @__PURE__ */ h.jsxs("button", { className: "brand", onClick: _n, "aria-label": "UniPi home", children: [
                /* @__PURE__ */ h.jsx(zo, { size: 37 }),
                /* @__PURE__ */ h.jsx("span", { children: "UniPi" }),
                /* @__PURE__ */ h.jsx(
                  "span",
                  {
                    className: "desktop-tag",
                    "data-tooltip": "Community desktop app for Muse Code · Not affiliated with Meta",
                    children: "Unofficial"
                  }
                )
              ] }),
              /* @__PURE__ */ h.jsx("div", { className: "sidebar-search", children: /* @__PURE__ */ h.jsxs("button", { className: "search-button", onClick: () => N(!0), children: [
                /* @__PURE__ */ h.jsx("span", { className: "sidebar-item-icon", children: /* @__PURE__ */ h.jsx(vu, { size: 15 }) }),
                /* @__PURE__ */ h.jsx("span", { children: "Search conversations" }),
                /* @__PURE__ */ h.jsxs("kbd", { children: [
                  In,
                  " K"
                ] })
              ] }) }),
              /* @__PURE__ */ h.jsxs("nav", { className: "main-nav", "aria-label": "Main navigation", children: [
                [
                  { id: "chat", icon: yo, label: "Chat" },
                  { id: "projects", icon: wv, label: "Projects" },
                  { id: "files", icon: BS, label: "Files" },
                  { id: "docs", icon: dv, label: "Docs" }
                ].map((U) => /* @__PURE__ */ h.jsxs(
                  "button",
                  {
                    "aria-label": U.label,
                    title: U.label,
                    className: z === U.id ? "selected" : "",
                    onClick: () => Ie(U.id),
                    children: [
                      /* @__PURE__ */ h.jsx(U.icon, { size: 19, strokeWidth: 1.7 }),
                      /* @__PURE__ */ h.jsx("span", { children: U.label }),
                      z === U.id && /* @__PURE__ */ h.jsx("span", { className: "nav-active-dot" })
                    ]
                  },
                  U.id
                )),
                /* @__PURE__ */ h.jsxs("button", { "aria-label": "Settings", title: "Settings", onClick: () => Ae("appearance"), children: [
                  /* @__PURE__ */ h.jsx(o1, { size: 19, strokeWidth: 1.7 }),
                  /* @__PURE__ */ h.jsx("span", { children: "Settings" })
                ] })
              ] }),
              /* @__PURE__ */ h.jsx("div", { className: "sidebar-primary", children: /* @__PURE__ */ h.jsxs("button", { className: "new-button", onClick: _n, children: [
                /* @__PURE__ */ h.jsx("span", { className: "sidebar-item-icon", children: /* @__PURE__ */ h.jsx(Co, { size: 15 }) }),
                /* @__PURE__ */ h.jsx("span", { children: "New conversation" }),
                /* @__PURE__ */ h.jsxs("kbd", { children: [
                  In,
                  " N"
                ] })
              ] }) }),
              /* @__PURE__ */ h.jsxs("div", { className: "sidebar-section-label", children: [
                /* @__PURE__ */ h.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "section-toggle",
                    "aria-expanded": Sn,
                    onClick: () => zn((U) => !U),
                    children: [
                      /* @__PURE__ */ h.jsx("span", { children: "PROJECTS" }),
                      /* @__PURE__ */ h.jsx(
                        bo,
                        {
                          size: 12,
                          className: `section-chevron ${Sn ? "" : "collapsed"}`
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ h.jsx(
                  dn,
                  {
                    label: "Open a project",
                    onClick: () => {
                      Ai();
                    },
                    children: /* @__PURE__ */ h.jsx(Co, { size: 14 })
                  }
                )
              ] }),
              /* @__PURE__ */ h.jsx("div", { className: `sidebar-collapse ${Sn ? "open" : ""}`, children: /* @__PURE__ */ h.jsx("div", { className: "sidebar-collapse-inner", children: /* @__PURE__ */ h.jsx("div", { className: "project-switcher", children: /* @__PURE__ */ h.jsx(
                mu,
                {
                  label: "Current project",
                  value: E,
                  icon: /* @__PURE__ */ h.jsx("span", { className: "sidebar-item-icon", children: /* @__PURE__ */ h.jsx(Dr, { size: 15 }) }),
                  onChange: (U) => {
                    if (U === "__open") {
                      Ai();
                      return;
                    }
                    O(U), _n();
                  },
                  options: [
                    { value: "", label: "All projects" },
                    ...t.recentProjects.map((U) => ({
                      value: U,
                      label: Ki(U)
                    })),
                    ...E && !t.recentProjects.includes(E) ? [{ value: E, label: Ki(E) }] : [],
                    { value: "__open", label: "Open another project…" }
                  ]
                }
              ) }) }) }),
              /* @__PURE__ */ h.jsxs("div", { className: "sidebar-section-label conversations-label", children: [
                /* @__PURE__ */ h.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "section-toggle",
                    "aria-expanded": dt,
                    onClick: () => qe((U) => !U),
                    children: [
                      /* @__PURE__ */ h.jsx("span", { children: C ? "ARCHIVED" : "CONVERSATIONS" }),
                      /* @__PURE__ */ h.jsx(
                        bo,
                        {
                          size: 12,
                          className: `section-chevron ${dt ? "" : "collapsed"}`
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ h.jsx(
                  dn,
                  {
                    label: C ? "Show conversations" : "Show archived conversations",
                    active: C,
                    onClick: () => P((U) => !U),
                    children: /* @__PURE__ */ h.jsx(Cb, { size: 13 })
                  }
                ),
                /* @__PURE__ */ h.jsx(
                  dn,
                  {
                    label: le ? "Done selecting" : "Select conversations",
                    active: le,
                    onClick: () => {
                      xe((U) => !U), $([]), qe(!0);
                    },
                    children: /* @__PURE__ */ h.jsx(ZS, { size: 14 })
                  }
                )
              ] }),
              le && /* @__PURE__ */ h.jsxs("div", { className: "conversation-selection", children: [
                /* @__PURE__ */ h.jsxs("label", { children: [
                  /* @__PURE__ */ h.jsx(
                    "input",
                    {
                      type: "checkbox",
                      "aria-label": "Select all visible conversations",
                      checked: Di.length > 0 && Mi.length === Di.length,
                      onChange: (U) => $(U.target.checked ? Di.map((ae) => ae.sessionId) : [])
                    }
                  ),
                  /* @__PURE__ */ h.jsx("span", { children: "Select all" })
                ] }),
                /* @__PURE__ */ h.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "text-button conversation-delete-action",
                    disabled: !Mi.length || we,
                    onClick: () => ce(Mi),
                    children: [
                      /* @__PURE__ */ h.jsx(Ab, { size: 13 }),
                      /* @__PURE__ */ h.jsx("span", { children: "Delete selected" }),
                      " (",
                      Mi.length,
                      ")"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ h.jsx("div", { className: `conversation-list ${dt ? "" : "is-collapsed"}`, children: /* @__PURE__ */ h.jsx("div", { className: `sidebar-collapse ${dt ? "open" : ""}`, children: /* @__PURE__ */ h.jsxs("div", { className: "sidebar-collapse-inner", children: [
                S && /* @__PURE__ */ h.jsxs("div", { className: "history-error", children: [
                  /* @__PURE__ */ h.jsx("p", { children: "Could not load your conversation history." }),
                  /* @__PURE__ */ h.jsx("p", { children: S }),
                  /* @__PURE__ */ h.jsx(
                    "button",
                    {
                      className: "text-button",
                      onClick: () => {
                        Kt();
                      },
                      children: "Try again"
                    }
                  )
                ] }),
                Ri.map(({ group: U, entries: ae }) => {
                  const he = !!Ge[U];
                  return /* @__PURE__ */ h.jsxs("div", { className: "conversation-group", children: [
                    /* @__PURE__ */ h.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "conversation-group-label",
                        "aria-expanded": !he,
                        onClick: () => Nt((ve) => ({
                          ...ve,
                          [U]: !ve[U]
                        })),
                        children: [
                          /* @__PURE__ */ h.jsx("span", { children: U }),
                          /* @__PURE__ */ h.jsx(
                            bo,
                            {
                              size: 12,
                              className: `section-chevron ${he ? "collapsed" : ""}`
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ h.jsx("div", { className: `sidebar-collapse ${he ? "" : "open"}`, children: /* @__PURE__ */ h.jsx("div", { className: "sidebar-collapse-inner", children: ae.map((ve) => /* @__PURE__ */ h.jsxs(
                      "div",
                      {
                        className: `conversation-row ${ve.sessionId === I?.session.sessionId ? "selected" : ""}`,
                        children: [
                          le && /* @__PURE__ */ h.jsx(
                            "input",
                            {
                              className: "conversation-checkbox",
                              type: "checkbox",
                              "aria-label": `Select ${_i(ve)}`,
                              checked: Te.includes(ve.sessionId),
                              onChange: (Wt) => $((Zt) => Wt.target.checked ? [...Zt, ve.sessionId] : Zt.filter((an) => an !== ve.sessionId))
                            }
                          ),
                          /* @__PURE__ */ h.jsxs(
                            "button",
                            {
                              className: "conversation-link",
                              title: _i(ve),
                              onClick: () => {
                                Oi(ve.sessionId);
                              },
                              children: [
                                /* @__PURE__ */ h.jsx(
                                  "span",
                                  {
                                    className: `conversation-indicator sidebar-item-icon ${ve.status === "running" ? "running" : ""}`,
                                    children: t.pinnedSessionIds.includes(ve.sessionId) ? /* @__PURE__ */ h.jsx(Nb, { size: 13 }) : ve.status === "running" ? /* @__PURE__ */ h.jsx("span", { className: "working-dot" }) : /* @__PURE__ */ h.jsx(yo, { size: 14 })
                                  }
                                ),
                                /* @__PURE__ */ h.jsxs("span", { className: "conversation-copy", children: [
                                  /* @__PURE__ */ h.jsx("span", { className: "conversation-title", children: _i(ve) }),
                                  !E && ve.workspaceRoot && /* @__PURE__ */ h.jsx("span", { className: "conversation-project", children: Ki(ve.workspaceRoot) })
                                ] }),
                                /* @__PURE__ */ h.jsx("time", { children: g0(ve.lastActivityAt || ve.updatedAt) })
                              ]
                            }
                          ),
                          !le && /* @__PURE__ */ h.jsx(
                            "button",
                            {
                              className: "row-pin",
                              title: t.pinnedSessionIds.includes(ve.sessionId) ? "Unpin conversation" : "Pin conversation",
                              "aria-label": `${t.pinnedSessionIds.includes(ve.sessionId) ? "Unpin" : "Pin"} ${_i(ve)}`,
                              onClick: () => Lo(ve.sessionId),
                              children: /* @__PURE__ */ h.jsx(Nb, { size: 12 })
                            }
                          ),
                          !le && /* @__PURE__ */ h.jsx(
                            "button",
                            {
                              type: "button",
                              className: "row-delete",
                              title: "Delete conversation",
                              "aria-label": `Delete ${_i(ve)}`,
                              onClick: () => ce([ve.sessionId]),
                              children: /* @__PURE__ */ h.jsx(Ab, { size: 13 })
                            }
                          )
                        ]
                      },
                      ve.sessionId
                    )) }) })
                  ] }, U);
                }),
                w && a.state === "ready" && /* @__PURE__ */ h.jsxs("div", { className: "history-status", children: [
                  /* @__PURE__ */ h.jsx(dl, { size: 14, className: "spin" }),
                  /* @__PURE__ */ h.jsx("span", { children: "Loading Muse history…" })
                ] }),
                !Di.length && !w && !S && a.state === "ready" && /* @__PURE__ */ h.jsxs("div", { className: "sidebar-empty", children: [
                  /* @__PURE__ */ h.jsx(yo, { size: 19, strokeWidth: 1.3 }),
                  /* @__PURE__ */ h.jsx("p", { children: C ? "No archived conversations" : "No conversations yet" }),
                  /* @__PURE__ */ h.jsx("span", { children: C ? "Archived conversations appear here." : "Start a conversation in this project." })
                ] }),
                b && !w && /* @__PURE__ */ h.jsx(
                  "button",
                  {
                    className: "load-more",
                    onClick: () => {
                      window.muse.listSessions(b).then((U) => {
                        g((ae) => [
                          ...ae,
                          ...U.sessions.filter(
                            (he) => !ae.some((ve) => ve.sessionId === he.sessionId)
                          )
                        ]), x(U.nextCursor);
                      }).catch((U) => Ue(U.message));
                    },
                    children: "Load earlier conversations"
                  }
                )
              ] }) }) }),
              /* @__PURE__ */ h.jsxs("div", { className: "sidebar-companion", children: [
                /* @__PURE__ */ h.jsx("img", { src: "./mascot-wave.png", alt: "Muse mascot waving hello" }),
                /* @__PURE__ */ h.jsx("span", { children: "Good to see you!" }),
                /* @__PURE__ */ h.jsx("svg", { viewBox: "0 0 64 8", "aria-hidden": "true", children: /* @__PURE__ */ h.jsx("path", { d: "M3 4c9-6 18 6 29 0s17 2 28-1" }) })
              ] }),
              /* @__PURE__ */ h.jsxs("div", { className: "sidebar-bottom", children: [
                /* @__PURE__ */ h.jsx("div", { className: "theme-mini-switch", role: "group", "aria-label": "Appearance", children: x0.map((U) => /* @__PURE__ */ h.jsxs(
                  "button",
                  {
                    title: U.label,
                    "aria-label": `${U.label} theme`,
                    "aria-pressed": St === U.id,
                    className: St === U.id ? "selected" : "",
                    onClick: () => fi({ theme: U.id }),
                    children: [
                      /* @__PURE__ */ h.jsx(U.icon, { size: 14 }),
                      /* @__PURE__ */ h.jsx("span", { className: "theme-mini-label", children: /* @__PURE__ */ h.jsx("span", { children: U.label }) })
                    ]
                  },
                  U.id
                )) }),
                /* @__PURE__ */ h.jsxs("button", { className: "connection-status", onClick: () => Ae("connection"), children: [
                  /* @__PURE__ */ h.jsx("span", { className: `status-dot ${a.state}` }),
                  /* @__PURE__ */ h.jsx("span", { children: a.state === "ready" ? "Connected to Muse Code" : a.state === "connecting" ? "Connecting to Muse…" : "Muse Code disconnected" }),
                  /* @__PURE__ */ h.jsx(Or, { size: 11 })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ h.jsxs("main", { className: "main-workspace", children: [
          z === "chat" && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
            /* @__PURE__ */ h.jsx("div", { className: `welcome-art theme-${St}`, "aria-hidden": "true" }),
            /* @__PURE__ */ h.jsx("div", { className: "chat-brand-background", "aria-hidden": "true" })
          ] }),
          /* @__PURE__ */ h.jsxs("header", { className: `workspace-titlebar ${ue ? "" : "with-traffic-lights"}`, children: [
            /* @__PURE__ */ h.jsxs("div", { className: "workspace-breadcrumb", children: [
              !ue && /* @__PURE__ */ h.jsx(dn, { label: "Show sidebar", onClick: () => ee(!0), children: /* @__PURE__ */ h.jsx(VS, { size: 17 }) }),
              /* @__PURE__ */ h.jsx("span", { className: "breadcrumb-project", children: E ? Ki(E) : "UniPi" }),
              /* @__PURE__ */ h.jsx(Ci, { size: 12 }),
              /* @__PURE__ */ h.jsx("span", { className: "breadcrumb-title", children: z !== "chat" ? z[0].toUpperCase() + z.slice(1) : I ? _i(I.session) : "New conversation" })
            ] }),
            /* @__PURE__ */ h.jsxs("div", { className: "window-tools", children: [
              /* @__PURE__ */ h.jsx(dn, { label: "New conversation", onClick: _n, children: /* @__PURE__ */ h.jsx(QS, { size: 17 }) }),
              /* @__PURE__ */ h.jsx(dn, { label: "Search conversations and commands", onClick: () => N(!0), children: /* @__PURE__ */ h.jsx(vu, { size: 17 }) }),
              I && /* @__PURE__ */ h.jsxs("details", { className: "conversation-menu", children: [
                /* @__PURE__ */ h.jsx("summary", { "aria-label": "Conversation actions", children: /* @__PURE__ */ h.jsx(US, { size: 19 }) }),
                /* @__PURE__ */ h.jsxs("div", { className: "popover", children: [
                  /* @__PURE__ */ h.jsx(
                    "button",
                    {
                      onClick: () => {
                        si(_i(I.session)), It(!0);
                      },
                      children: "Rename conversation"
                    }
                  ),
                  /* @__PURE__ */ h.jsx("button", { onClick: () => Lo(I.session.sessionId), children: t.pinnedSessionIds.includes(I.session.sessionId) ? "Unpin conversation" : "Pin conversation" }),
                  /* @__PURE__ */ h.jsxs(
                    "button",
                    {
                      onClick: () => {
                        window.muse.exportSession(I.session.sessionId).then((U) => {
                          U && Ot("Conversation exported to Markdown.");
                        }).catch((U) => Ue(U.message));
                      },
                      children: [
                        /* @__PURE__ */ h.jsx(RS, { size: 13 }),
                        "Export as Markdown"
                      ]
                    }
                  ),
                  /* @__PURE__ */ h.jsxs("button", { onClick: () => $u(I.session.sessionId), children: [
                    /* @__PURE__ */ h.jsx(Cb, { size: 13 }),
                    C ? "Restore conversation" : "Archive in Desktop"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ h.jsx(
                dn,
                {
                  label: "Toggle project inspector",
                  active: W,
                  onClick: () => de((U) => !U),
                  children: /* @__PURE__ */ h.jsx(YS, { size: 17 })
                }
              )
            ] })
          ] }),
          a.state !== "ready" && a.state !== "connecting" && /* @__PURE__ */ h.jsxs("div", { className: "connection-banner", children: [
            /* @__PURE__ */ h.jsx(Tb, { size: 16 }),
            /* @__PURE__ */ h.jsx("span", { children: a.message || "Connect Muse Code to get started." }),
            /* @__PURE__ */ h.jsx("button", { onClick: Jt, children: "Reconnect" }),
            /* @__PURE__ */ h.jsxs("button", { onClick: () => Ae("connection"), children: [
              "Set up ",
              /* @__PURE__ */ h.jsx(CS, { size: 12 })
            ] })
          ] }),
          z === "projects" && /* @__PURE__ */ h.jsx(
            hO,
            {
              projects: t.recentProjects,
              sessions: m,
              onOpen: () => {
                Ai();
              },
              onChoose: (U) => {
                O(U), _n();
              }
            }
          ),
          z === "files" && /* @__PURE__ */ h.jsx(
            mO,
            {
              project: E,
              onOpen: () => {
                Ai();
              },
              onMention: (U) => {
                Ie("chat"), _e((ae) => ({
                  ...ae,
                  [zt]: `${ae[zt] || ""}${ae[zt] ? `
` : ""}Please look at the project file: ${JSON.stringify(U)}
`
                }));
              }
            }
          ),
          z === "docs" && /* @__PURE__ */ h.jsx(xO, { platform: f, onError: Ue }),
          z === "chat" && /* @__PURE__ */ h.jsxs("div", { className: "workspace-body", children: [
            oe ? /* @__PURE__ */ h.jsxs("div", { className: "loading-conversation", children: [
              /* @__PURE__ */ h.jsx(dl, { className: "spin", size: 23 }),
              /* @__PURE__ */ h.jsx("p", { children: "Loading conversation…" })
            ] }) : I ? /* @__PURE__ */ h.jsx(dO, { view: I, onError: Ue }, I.session.sessionId) : /* @__PURE__ */ h.jsxs("div", { className: "welcome", children: [
              /* @__PURE__ */ h.jsxs("div", { className: "welcome-content", children: [
                /* @__PURE__ */ h.jsxs("div", { className: "welcome-kicker", children: [
                  /* @__PURE__ */ h.jsx("span", { className: "tiny-spark", children: "✳" }),
                  f === "win32" ? "MUSE CODE, ON WINDOWS" : f === "linux" ? "MUSE CODE, ON LINUX" : "MUSE CODE, ON YOUR MAC"
                ] }),
                /* @__PURE__ */ h.jsxs("h1", { children: [
                  "Good things start",
                  /* @__PURE__ */ h.jsx("br", {}),
                  "with a little ",
                  /* @__PURE__ */ h.jsx("em", { children: "UniPi." })
                ] }),
                /* @__PURE__ */ h.jsx("p", { className: "welcome-subtitle", children: "Build, explore, and improve your project with UniPi." }),
                /* @__PURE__ */ h.jsx("div", { className: "welcome-project", children: /* @__PURE__ */ h.jsxs(
                  "button",
                  {
                    className: "project-chip",
                    onClick: () => {
                      Ai();
                    },
                    children: [
                      /* @__PURE__ */ h.jsx(Dr, { size: 14 }),
                      E ? Ki(E) : "Choose a project",
                      /* @__PURE__ */ h.jsx(bo, { size: 12 })
                    ]
                  }
                ) })
              ] }),
              /* @__PURE__ */ h.jsxs("div", { className: "starter-section", children: [
                /* @__PURE__ */ h.jsx("div", { className: "starter-label", children: /* @__PURE__ */ h.jsx("span", { children: "SUGGESTED PROMPTS" }) }),
                /* @__PURE__ */ h.jsx("div", { className: "starter-grid", children: bO.map((U) => /* @__PURE__ */ h.jsxs(
                  "button",
                  {
                    className: "starter-card",
                    onClick: () => {
                      _e((ae) => ({ ...ae, [zt]: U.prompt })), document.querySelector("textarea")?.focus();
                    },
                    children: [
                      /* @__PURE__ */ h.jsx(U.icon, { size: 19, strokeWidth: 1.5 }),
                      /* @__PURE__ */ h.jsxs("span", { children: [
                        /* @__PURE__ */ h.jsx("strong", { children: U.title }),
                        /* @__PURE__ */ h.jsx("small", { children: U.description })
                      ] }),
                      /* @__PURE__ */ h.jsx(Or, { size: 13, className: "starter-arrow" })
                    ]
                  },
                  U.title
                )) })
              ] })
            ] }),
            !oe && /* @__PURE__ */ h.jsx("div", { className: `composer-dock ${I ? "conversation-dock" : ""}`, children: /* @__PURE__ */ h.jsx(
              EE,
              {
                draft: ci,
                setDraft: (U) => _e((ae) => ({ ...ae, [zt]: U })),
                running: !!ya,
                backgroundOnly: !!(I && WS(I.items)),
                submitting: Z,
                connected: a.state === "ready",
                hasProject: !!E,
                project: E,
                models: V,
                modelId: T,
                preferences: t,
                onModel: rn,
                onEffort: (U) => fi({ reasoningEffort: U }),
                onSubmit: di,
                onCancel: () => {
                  I && window.muse.cancel(I.session.sessionId).catch((U) => Ue(U.message));
                },
                onError: Ue
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ h.jsx(
          NE,
          {
            open: W,
            project: E,
            platform: f,
            view: I,
            onClose: () => de(!1),
            onMentionDiff: (U) => {
              Ie("chat"), _e((ae) => ({
                ...ae,
                [zt]: `${ae[zt] || ""}${ae[zt] ? `
` : ""}Please review the changes in @${U}
`
              }));
            },
            onError: Ue
          },
          E
        ),
        ge && /* @__PURE__ */ h.jsx(
          AE,
          {
            initialTab: ge,
            preferences: t,
            status: a,
            version: s,
            platform: f,
            onSave: fi,
            onClose: () => Ae(!1),
            onError: Ue,
            onReconnect: Jt
          }
        ),
        ut && /* @__PURE__ */ h.jsx(
          CE,
          {
            platform: f,
            sessions: m.filter(
              (U) => !t.archivedSessionIds.includes(U.sessionId)
            ),
            onSession: (U) => {
              Oi(U);
            },
            onNew: _n,
            onOpen: () => {
              Ai();
            },
            onSettings: () => Ae("appearance"),
            onTheme: (U) => fi({ theme: U }),
            onClose: () => N(!1)
          }
        ),
        re.length > 0 && /* @__PURE__ */ h.jsxs(Cu, { title: "Delete conversations", className: "delete-conversations-dialog", onClose: () => {
          we || ce([]);
        }, children: [
          /* @__PURE__ */ h.jsxs("div", { className: "delete-dialog-body", children: [
            /* @__PURE__ */ h.jsxs("p", { className: "delete-dialog-summary", children: [
              /* @__PURE__ */ h.jsx("span", { children: "Selected conversations" }),
              /* @__PURE__ */ h.jsx("span", { className: "delete-dialog-count", children: re.length })
            ] }),
            /* @__PURE__ */ h.jsxs("div", { className: "delete-dialog-preview", children: [
              re.slice(0, 3).map((U) => {
                const ae = m.find((he) => he.sessionId === U);
                return /* @__PURE__ */ h.jsxs("div", { className: "delete-dialog-item", children: [
                  /* @__PURE__ */ h.jsx(yo, { size: 15 }),
                  /* @__PURE__ */ h.jsx("span", { children: ae ? _i(ae) : U })
                ] }, U);
              }),
              re.length > 3 && /* @__PURE__ */ h.jsxs("div", { className: "delete-dialog-more", children: [
                "+",
                re.length - 3
              ] })
            ] }),
            /* @__PURE__ */ h.jsx("p", { className: "delete-dialog-warning", children: "Conversation messages will be deleted permanently." }),
            /* @__PURE__ */ h.jsx("p", { className: "delete-dialog-note", children: "Native sessions and original files will be kept." })
          ] }),
          /* @__PURE__ */ h.jsxs("div", { className: "delete-dialog-actions", children: [
            /* @__PURE__ */ h.jsx("button", { type: "button", className: "button secondary", disabled: we, onClick: () => ce([]), children: "Cancel" }),
            /* @__PURE__ */ h.jsx("button", { type: "button", className: "button danger", disabled: we, onClick: () => {
              va();
            }, children: we ? "Deleting…" : "Delete permanently" })
          ] })
        ] }),
        li && I && /* @__PURE__ */ h.jsx(
          Cu,
          {
            title: "Rename conversation",
            onClose: () => It(!1),
            className: "rename-dialog",
            children: /* @__PURE__ */ h.jsxs(
              "form",
              {
                onSubmit: (U) => {
                  U.preventDefault(), window.muse.renameSession(I.session.sessionId, oi).then(() => It(!1)).catch((ae) => Ue(ae.message));
                },
                children: [
                  /* @__PURE__ */ h.jsx("label", { className: "field-label", htmlFor: "conversation-name", children: "Conversation name" }),
                  /* @__PURE__ */ h.jsx(
                    "input",
                    {
                      id: "conversation-name",
                      className: "text-input",
                      autoFocus: !0,
                      value: oi,
                      maxLength: 200,
                      onChange: (U) => si(U.target.value)
                    }
                  ),
                  /* @__PURE__ */ h.jsxs("div", { className: "request-actions", children: [
                    /* @__PURE__ */ h.jsx("button", { type: "button", className: "button secondary", onClick: () => It(!1), children: "Cancel" }),
                    /* @__PURE__ */ h.jsx("button", { className: "button primary", disabled: !oi.trim(), children: "Save" })
                  ] })
                ]
              }
            )
          }
        ),
        Ht && /* @__PURE__ */ h.jsxs("div", { className: `toast ${Ht.kind}`, role: Ht.kind === "error" ? "alert" : "status", children: [
          Ht.kind === "success" ? /* @__PURE__ */ h.jsx(Un, { size: 16 }) : /* @__PURE__ */ h.jsx(Tb, { size: 16 }),
          /* @__PURE__ */ h.jsx("span", { children: Ht.message }),
          /* @__PURE__ */ h.jsx(dn, { label: "Dismiss notification", onClick: () => ui(null), children: /* @__PURE__ */ h.jsx(ha, { size: 14 }) })
        ] })
      ]
    }
  );
}
const wO = ':root{color-scheme:light;--font-family-ui: -apple-system, BlinkMacSystemFont, "Segoe UI Variable Text", "Segoe UI", "Inter", "Ubuntu", "Cantarell", "Helvetica Neue", system-ui, sans-serif;--font-family-code: "SF Mono", "Cascadia Mono", "JetBrains Mono", "Fira Code", Menlo, Consolas, monospace;--font-caption: 12px;--font-support: 13px;--font-ui: 14px;--font-body: 15px;--font-title: 17px;--font-section: 20px;--font-heading: 22px;--font-brand: 24px;--font-page: 28px;--reading-size: 15px;--base: #f8f7f4;--app-background: #f8f7f4;--sidebar: #f0efeb;--sidebar-solid: #eeece7;--text: #30332f;--heading: #373c34;--message-text: #42453f;--secondary-text: #64685f;--muted: #686d63;--placeholder: #73796e;--accent: #567a65;--serif-accent: #60755b;--primary: #4d6956;--on-primary: #fff;--primary-border: #3f5d4933;--button-shadow: 0 2px 5px #253e2315;--border: #45453515;--faint-border: #4545350b;--strong-border: #4545352b;--hover: #5757400a;--selected: #e4e8de;--selection: #c6d2be;--surface: #ffffff85;--soft-surface: #737c6008;--glass: #ffffff70;--dialog: #fbfaf7;--input: #fff9;--inspector: #f4f3ef;--composer: #ffffffc9;--composer-border: #bfc5b18c;--composer-focus: #859d7c;--composer-shadow: 0 4px 21px #34392707, 0 1px 4px #34392704;--focus: #739369;--focus-soft: #7a986214;--scrollbar: #63695333;--green: #5b8c67;--red: #b76a67;--warning: #bd954f;--nav-selected: #ffffff90;--nav-border: #dedfd580;--nav-shadow: 0 1px 5px #3a3a2b04;--disabled-button: #e6e8e0;--disabled-text: #a3ab9a;--user-avatar: #e6e5dd;--user-message: #eeeee87d;--code-inline: #535b480b;--code-background: #f0f1eb;--tool-background: #ffffff60;--request-border: #7e9d7447;--request-background: #eef3eac9;--notice: #f3f0e3;--error-background: #ba656510;--error-text: #99615e;--error-border: #b9746833;--diff-added: #3b8b520d;--diff-removed: #aa534d0e;--backdrop: #35372d38}[data-theme=daylight]{--accent: #927459;--serif-accent: #987b5c;--primary: #73634e;--primary-border: #67594255;--selected: #e9e4dc;--focus: #ab9171;--focus-soft: #b39a7715;--selection: #e0d2c0;--composer-focus: #b4a48c;--composer-border: #d2c9bb9c;--request-border: #b7a07d55;--request-background: #f6f0e7d4}[data-theme=grove]{--base: #f0f3ec;--app-background: #f0f3ec;--sidebar: #e7ece3;--sidebar-solid: #e7ece3;--dialog: #f5f7f1;--inspector: #eaf0e6;--heading: #354434;--primary: #54734f;--accent: #567852;--code-background: #e8eee2;--user-message: #e3eadd99}[data-theme=moonlight]{color-scheme:dark;--base: #141b28;--app-background: #141b28;--sidebar: #111824;--sidebar-solid: #17202d;--text: #e1e5ee;--heading: #e9e9ef;--message-text: #d7dce7;--secondary-text: #a8b1c3;--muted: #a0aec6;--placeholder: #8691a7;--accent: #b4bee4;--serif-accent: #c1c8e5;--primary: #adb9df;--on-primary: #182239;--primary-border: #d2dcf255;--button-shadow: 0 2px 10px #0002;--border: #b0c5ff13;--faint-border: #b0c5ff09;--strong-border: #b0c5ff2c;--hover: #bac8f70a;--selected: #a4b7f218;--selection: #52678b;--surface: #23304990;--soft-surface: #afc5ef05;--glass: #1b273882;--dialog: #1c2536;--input: #152133;--inspector: #151d2b;--composer: #1d293cd9;--composer-border: #7390c138;--composer-focus: #7288b3;--composer-shadow: 0 5px 30px #060a112b, inset 0 1px 0 #b9d1ff08;--focus: #a1b7e5;--focus-soft: #748aca15;--scrollbar: #aec0ed25;--green: #8cbc9e;--red: #d49399;--warning: #d3b16d;--nav-selected: #a3bafb10;--nav-border: #acc1ed13;--nav-shadow: inset 0 1px 0 #c5d7ff06;--disabled-button: #36425a;--disabled-text: #8090ad;--user-avatar: #29334a;--user-message: #24304a70;--code-inline: #b5c2f014;--code-background: #101a2b;--tool-background: #21304a5c;--request-border: #99b4d440;--request-background: #233248e6;--notice: #b7975020;--error-background: #b6747416;--error-text: #e0a5aa;--error-border: #c0888430;--diff-added: #85c7980d;--diff-removed: #e191990d;--backdrop: #070d1b88}[data-theme=muse]{color-scheme:dark;--base: #062565;--app-background: radial-gradient(ellipse at 95% 0%, #0758cd 0%, transparent 62%), linear-gradient(125deg, #082968, #061b52 63%, #072e83);--sidebar: linear-gradient(160deg, #1452b252, #041b53ad 75%);--sidebar-solid: #0a347c;--text: #f0f5ff;--heading: #f5f8ff;--message-text: #e1ebff;--secondary-text: #c0d5fb;--muted: #b4caee;--placeholder: #a9c6f3;--accent: #b5d4ff;--serif-accent: #b9d3ff;--primary: linear-gradient(140deg, #cee5ff, #8db9ff);--on-primary: #0753dd;--primary-border: #deeeff99;--button-shadow: inset 0 1px 3px #ffffff80, 0 0 16px #3a86ff4a;--border: #87baff24;--faint-border: #92bdff10;--strong-border: #98c6ff4f;--hover: #629eff1e;--selected: #5292f12b;--selection: #397dde99;--surface: #124087d4;--soft-surface: #558de112;--glass: #2864b825;--dialog: #0c2c66;--input: #061d4e9c;--inspector: linear-gradient(160deg, #083d8d, #08215a);--composer: linear-gradient(145deg, #3174d348, #1450b334);--composer-border: #70a7ff9c;--composer-focus: #a7ceff;--composer-shadow: inset 0 1px 0 #b4d5ff1a, 0 8px 40px #00104714;--focus: #b2d9ff;--focus-soft: #81b8ff15;--scrollbar: #a7c9ff35;--green: #85e1b5;--red: #ffb3b9;--warning: #ead095;--nav-selected: linear-gradient(125deg, #357df14d, #5396ff3d);--nav-border: #6ca8ff6c;--nav-shadow: inset 0 1px 4px #92bdff23, 0 0 10px #3984ff11;--disabled-button: #8db9ff;--disabled-text: #0a52d2;--user-avatar: #3975bf69;--user-message: #174c9659;--code-inline: #88b6ff1a;--code-background: #071e50de;--tool-background: #0b2e6ad9;--request-border: #95bcff77;--request-background: #123f80f2;--notice: #c7a46e20;--error-background: #ab6b811e;--error-text: #ffbec8;--error-border: #e7a5b740;--diff-added: #79d7ac15;--diff-removed: #efa9b418;--backdrop: #020e379c}[data-theme=plush]{color-scheme:light;--base: #fff0e9;--app-background: #fff0e9;--sidebar: #fae5df;--sidebar-solid: #fae5df;--dialog: #fff7f3;--inspector: #faeae4;--text: #49352f;--heading: #55372e;--message-text: #49352f;--secondary-text: #755b52;--muted: #80665b;--placeholder: #886c61;--accent: #a45e4b;--serif-accent: #a45e4b;--primary: #a85d4b;--primary-border: #99523e44;--selected: #f2d6cb;--selection: #edc6b8;--focus: #ac6c56;--composer: #fffaf5eb;--composer-border: #d2a39099;--composer-focus: #b57860;--code-background: #f5e5dc;--user-avatar: #efd2c4;--user-message: #fff8f0eb;--request-border: #bd8a7155;--request-background: #fff3e9ee}[data-text-size=compact]{--reading-size: 14px}[data-text-size=large]{--reading-size: 17px}*{box-sizing:border-box}html,body,#root{width:100%;height:100%;margin:0;overflow:hidden}body{font-family:var(--font-family-ui);color:var(--text);background:var(--base);font-size:var(--font-ui);line-height:1.5;-webkit-font-smoothing:antialiased}button,input,select,textarea{font:inherit}button,a,input,select,textarea{-webkit-app-region:no-drag}button{color:inherit;cursor:pointer;border:0;background:none}button:disabled{opacity:.42;cursor:not-allowed}button,a,input,select,textarea,summary{-webkit-tap-highlight-color:transparent}button:focus-visible,a:focus-visible,summary:focus-visible,select:focus-visible{outline:2px solid var(--focus);outline-offset:3px}input:focus-visible,textarea:focus-visible{outline:none}input:focus-visible{box-shadow:0 0 0 3px var(--focus-soft);border-color:var(--focus)}::selection{background:var(--selection)}::-webkit-scrollbar{width:8px;height:8px}::-webkit-scrollbar-thumb{border-radius:999px;border:2px solid transparent;background-clip:padding-box;background-color:var(--scrollbar)}::-webkit-scrollbar-track{background:transparent;margin-block:6px;margin-inline:6px}::-webkit-scrollbar-corner{background:transparent}.select-popover::-webkit-scrollbar-track,.slash-menu::-webkit-scrollbar-track,.dialog::-webkit-scrollbar-track,.command-results::-webkit-scrollbar-track,.file-browser-list::-webkit-scrollbar-track,.code-block pre::-webkit-scrollbar-track,.tool-body pre::-webkit-scrollbar-track,.approval-card>pre::-webkit-scrollbar-track{margin-block:10px;margin-inline:10px}h1,h2,h3,h4,p{margin-top:0}svg{flex-shrink:0}kbd{font-family:inherit;font-size:var(--font-caption);color:var(--muted);font-weight:400;letter-spacing:.02em}.muted{color:var(--muted)}.eyebrow{font-size:var(--font-caption);font-weight:600;letter-spacing:.13em;color:var(--muted)}.app-shell{display:grid;grid-template-columns:264px minmax(0,1fr) 0px;height:100%;background:var(--app-background);transition:grid-template-columns .32s cubic-bezier(.22,1,.36,1)}.app-shell.with-inspector{grid-template-columns:264px minmax(0,1fr) 292px}.app-shell.sidebar-hidden{grid-template-columns:0px minmax(0,1fr) 0px}.app-shell.sidebar-hidden.with-inspector{grid-template-columns:0px minmax(0,1fr) 292px}.icon-button{width:30px;height:30px;padding:0;display:inline-flex;align-items:center;justify-content:center;border-radius:7px;color:var(--muted);transition:background .15s,color .15s;flex-shrink:0}.icon-button:hover,.icon-button.active{background:var(--hover);color:var(--text)}.button{display:inline-flex;align-items:center;justify-content:center;gap:8px;border-radius:9px;padding:10px 14px;font-size:var(--font-ui);font-weight:500;transition:transform .15s,background .15s}.button:active:not(:disabled){transform:translateY(1px)}.button.primary{background:var(--primary);color:var(--on-primary);box-shadow:var(--button-shadow);border:1px solid var(--primary-border)}.button.primary:hover:not(:disabled){filter:brightness(1.07)}.button.secondary{border:1px solid var(--border);background:var(--surface)}.button.secondary:hover{background:var(--hover)}.text-button{display:inline-flex;align-items:center;gap:6px;font-size:var(--font-ui);color:var(--accent);padding:5px 0;text-align:left}.text-button:hover{text-decoration:underline;text-underline-offset:3px}.sidebar{width:264px;min-width:0;display:flex;flex-direction:column;min-height:0;background:var(--sidebar);border-right:1px solid var(--border);-webkit-user-select:none;user-select:none;position:relative;z-index:4;overflow:hidden;transition:transform .32s cubic-bezier(.22,1,.36,1),opacity .24s cubic-bezier(.22,1,.36,1),border-color .24s ease}.app-shell.sidebar-hidden .sidebar{transform:translate(-100%);opacity:0;pointer-events:none;border-right-color:transparent}.sidebar>:not(.conversation-list):not(.sidebar-companion){flex-shrink:0}.sidebar-titlebar{height:46px;flex-shrink:0;display:flex;align-items:center;justify-content:flex-end;padding:8px 14px 0;-webkit-app-region:drag}.window-traffic-lights{position:fixed;top:22px;left:20px;z-index:20;display:flex;align-items:center;gap:8px;-webkit-app-region:no-drag}.traffic-light{width:12px;height:12px;border-radius:50%;padding:0;position:relative;border:.5px solid #00000024;transition:filter .14s ease,transform .14s ease}.traffic-light.close{background:#ff5f57}.traffic-light.minimize{background:#febc2e}.traffic-light.maximize{background:#28c840}.traffic-light:after{content:"";position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;line-height:1;color:#0009;opacity:0;transition:opacity .12s ease}.traffic-light.close:after{content:"×"}.traffic-light.minimize:after{content:"−"}.traffic-light.maximize:after{content:"+"}.window-traffic-lights:hover .traffic-light:after,.traffic-light:focus-visible:after{opacity:1}.brand{padding:12px 24px 18px;display:flex;align-items:center;gap:8px;width:100%;text-align:left}.brand>span:first-of-type{font-size:var(--font-brand);font-weight:600;letter-spacing:-.8px}.brand .muse-mark{object-fit:contain;margin-left:-4px}.desktop-tag{position:relative;flex-shrink:0;font-size:var(--font-caption);letter-spacing:.04em;color:var(--muted);border:1px solid var(--border);padding:3px 6px;border-radius:5px;margin:3px 0 0 auto;transition:color .18s ease,border-color .18s ease,background-color .18s ease}.desktop-tag:hover{color:var(--text);border-color:var(--strong-border);background:var(--soft-surface);opacity:1!important}.desktop-tag:after{content:attr(data-tooltip);position:absolute;top:calc(100% + 8px);right:0;width:210px;padding:8px 10px;border-radius:9px;background:var(--dialog);border:1px solid var(--strong-border);color:var(--text);font-size:11.5px;font-weight:450;letter-spacing:0;line-height:1.45;white-space:normal;box-shadow:0 12px 30px #0005;opacity:0;transform:translateY(-4px);pointer-events:none;transition:opacity .18s cubic-bezier(.22,1,.36,1),transform .18s cubic-bezier(.22,1,.36,1);z-index:30}.desktop-tag:hover:after{opacity:1;transform:translateY(0)}.update-settings{text-align:left;margin:22px 0}.update-settings .setting-row{gap:18px}.update-settings .button{flex-shrink:0}.muse-mark{object-fit:contain}.main-nav{display:flex;flex-direction:column;gap:4px;padding:0 13px 12px}.main-nav button{display:flex;align-items:center;gap:13px;padding:11px 13px;font-size:var(--font-ui);border:1px solid transparent;border-radius:10px;text-align:left;color:var(--secondary-text)}.main-nav button:hover{background:var(--hover);color:var(--text)}.main-nav button.selected{background:var(--nav-selected);border-color:var(--nav-border);color:var(--text);box-shadow:var(--nav-shadow)}.nav-active-dot{margin-left:auto;height:4px;width:4px;border-radius:50%;background:currentColor;opacity:.7}.sidebar-search{padding:0 13px 10px}.sidebar-search .search-button{width:100%;background:var(--soft-surface);border:1px solid var(--border)}.sidebar-search .search-button:hover{background:var(--hover);border-color:var(--strong-border)}.sidebar-primary{padding:0 13px 6px;display:flex;flex-direction:column;gap:3px}.sidebar-item-icon{width:16px;height:16px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--muted);transition:color .18s ease}.new-button,.search-button{display:flex;align-items:center;gap:10px;min-height:32px;border-radius:8px;font-size:var(--font-support);color:var(--secondary-text);text-align:left;padding:6px 10px;transition:background-color .18s ease,border-color .18s ease,color .18s ease}.new-button:hover,.search-button:hover{background:var(--hover);color:var(--text)}.new-button:hover .sidebar-item-icon,.search-button:hover .sidebar-item-icon{color:var(--text)}.new-button kbd,.search-button kbd{margin-left:auto;font-family:var(--font-family-ui);font-size:var(--font-caption);color:var(--muted);opacity:.9}.sidebar-section-label{padding:4px 19px 2px 13px;margin-top:4px;height:30px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;color:var(--muted);font-size:var(--font-caption);font-weight:600;letter-spacing:.09em}.section-toggle{display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:6px;color:var(--muted);font-size:var(--font-caption);font-weight:600;letter-spacing:.09em;transition:color .18s ease,background-color .18s ease}.section-toggle:hover{color:var(--text);background:var(--hover)}.section-chevron{flex-shrink:0;opacity:0;transition:transform .26s cubic-bezier(.22,1,.36,1),opacity .18s ease}.section-toggle:hover .section-chevron,.section-chevron.collapsed{opacity:.75}.section-chevron.collapsed{transform:rotate(-90deg)}.sidebar-collapse{display:grid;grid-template-rows:0fr;opacity:0;transition:grid-template-rows .28s cubic-bezier(.22,1,.36,1),opacity .22s cubic-bezier(.22,1,.36,1)}.sidebar-collapse.open{grid-template-rows:1fr;opacity:1}.sidebar-collapse-inner{min-height:0;overflow:hidden}.sidebar-section-label .icon-button{width:22px;height:22px}.project-switcher{padding:0 13px 4px;display:flex;align-items:center;color:var(--secondary-text)}.conversation-list{padding:2px 13px 7px;min-height:100px;flex:1;overflow-y:auto}.conversation-group{margin-bottom:2px}.conversation-row{display:flex;align-items:center;position:relative;border-radius:8px;margin-bottom:2px;transition:background-color .18s ease}.conversation-row:hover{background:var(--hover)}.conversation-row.selected{background:var(--selected)}.conversation-link{display:flex;align-items:center;width:100%;min-height:32px;padding:6px 10px;gap:10px;text-align:left;min-width:0;font-size:var(--font-support);color:var(--secondary-text);transition:color .18s ease}.conversation-row:hover .conversation-link,.conversation-row.selected .conversation-link{color:var(--text)}.conversation-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}.conversation-indicator{color:var(--muted)}.conversation-row:hover .conversation-indicator,.conversation-row.selected .conversation-indicator{color:var(--text)}.conversation-link time{font-size:var(--font-caption);color:var(--muted);font-variant-numeric:tabular-nums;flex-shrink:0}.row-pin{position:absolute;right:29px;width:22px;height:23px;border-radius:5px;background:var(--sidebar-solid);opacity:0;display:flex;align-items:center;justify-content:center}.conversation-row:hover .row-pin,.row-pin:focus-visible{opacity:1}.conversation-row:hover time{visibility:hidden}.row-delete{position:absolute;right:4px;width:23px;height:23px;display:grid;place-items:center;border-radius:5px;color:var(--muted);background:var(--sidebar-solid);opacity:0}.conversation-row:hover .row-delete,.conversation-row:focus-within .row-delete{opacity:1}.row-delete:hover{color:var(--red);background:var(--error-background)}.conversation-row:hover .conversation-link,.conversation-row:focus-within .conversation-link{padding-right:56px}.conversation-row:focus-within .row-pin{opacity:1}.conversation-row:focus-within time{visibility:hidden}.conversation-checkbox{margin-left:9px;flex-shrink:0;accent-color:var(--accent)}.conversation-selection{display:flex;align-items:center;gap:6px;padding:5px 10px 9px;font-size:12px;flex-wrap:wrap}.conversation-selection label,.conversation-delete-action{display:inline-flex;align-items:center;gap:4px}.conversation-delete-action{color:var(--red);margin-left:auto}.button.danger{background:#b43d3d;color:#fff}.sidebar-empty{padding:13px 10px;color:var(--muted);font-size:var(--font-support)}.sidebar-empty>svg{display:none}.sidebar-empty p{margin:0 0 5px;color:var(--secondary-text);font-size:var(--font-support)}.sidebar-empty span{font-size:var(--font-support);line-height:1.6}.load-more{font-size:var(--font-support);padding:8px 10px;color:var(--muted)}.sidebar-companion{flex:0 0 54px;min-height:0;height:54px;display:flex;flex-direction:row;align-items:center;justify-content:center;gap:10px;margin:6px 18px 0;overflow:hidden}.sidebar-companion img{width:43px;height:50px;min-height:0;object-fit:contain;filter:drop-shadow(0 8px 13px #00000020)}.sidebar-companion>span{color:var(--muted);font-size:var(--font-support);font-family:var(--font-family-ui);font-style:normal;margin:0}.sidebar-companion>svg{display:none}.sidebar-bottom{padding:7px 15px 11px;flex-shrink:0}.theme-mini-switch{display:flex;align-items:center;padding:3px;gap:2px;border-radius:10px;border:1px solid var(--border);background:var(--soft-surface);margin:0 2px 7px;height:36px}.theme-mini-switch button{display:flex;flex:1 1 0px;gap:0;align-items:center;justify-content:center;height:28px;border-radius:7px;color:var(--muted);font-size:12.5px;padding:0 2px;min-width:0;overflow:hidden;transition:flex-grow .3s cubic-bezier(.22,1,.36,1),background-color .24s cubic-bezier(.22,1,.36,1),color .18s ease,box-shadow .24s cubic-bezier(.22,1,.36,1),transform .16s cubic-bezier(.22,1,.36,1)}.theme-mini-switch button>svg{flex-shrink:0;transition:transform .24s cubic-bezier(.22,1,.36,1)}.theme-mini-switch button:hover:not(.selected){background:var(--hover);color:var(--secondary-text)}.theme-mini-switch button:active{transform:scale(.96)}.theme-mini-switch button.selected{flex:3.7 1 0px;padding:0 6px;background:var(--selected);color:var(--text);box-shadow:0 1px 4px #00000014}.theme-mini-label{display:inline-grid;grid-template-columns:0fr;opacity:0;margin-left:0;transition:grid-template-columns .3s cubic-bezier(.22,1,.36,1),opacity .2s ease,margin-left .3s cubic-bezier(.22,1,.36,1)}.theme-mini-label>span{overflow:hidden;white-space:nowrap}.theme-mini-switch button.selected .theme-mini-label{grid-template-columns:1fr;opacity:1;margin-left:5px}.connection-status{display:flex;align-items:center;gap:7px;width:100%;padding:6px 9px 0;color:var(--muted);font-size:var(--font-support)}.connection-status>svg{margin-left:auto}.status-dot{width:5px;height:5px;background:var(--warning);border-radius:50%;flex-shrink:0}.status-dot.ready{background:var(--green);box-shadow:0 0 6px color-mix(in srgb,var(--green),transparent 50%)}.status-dot.connecting{background:var(--accent);animation:breathe 2s infinite}.main-workspace{display:flex;flex-direction:column;min-width:0;min-height:0;position:relative;overflow:hidden}.workspace-titlebar{height:62px;flex-shrink:0;display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 25px 0;-webkit-app-region:drag;z-index:6;transition:padding-left .32s cubic-bezier(.22,1,.36,1)}.workspace-titlebar.with-traffic-lights{padding-left:var(--titlebar-leading-space, 96px)}.workspace-breadcrumb{display:flex;align-items:center;gap:10px;min-width:0;font-size:var(--font-ui)}.breadcrumb-project{color:var(--muted);flex-shrink:0;max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.workspace-breadcrumb>svg{color:var(--muted);opacity:.65}.breadcrumb-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:500}.window-tools{display:flex;align-items:center;gap:6px}.local-pill{display:flex;align-items:center;gap:5px;font-size:var(--font-support);color:var(--muted);margin-right:8px}.local-pill>span{height:4px;width:4px;background:var(--green);border-radius:50%}.conversation-menu{position:relative}.conversation-menu>summary{list-style:none;cursor:pointer;padding:5px;display:flex;color:var(--muted);border-radius:6px}.conversation-menu>summary:hover{background:var(--hover)}.popover{position:absolute;z-index:15;top:32px;right:0;min-width:205px;padding:5px;background:var(--dialog);border:1px solid var(--border);box-shadow:0 12px 40px #0003;border-radius:10px}.popover button{width:100%;text-align:left;padding:9px 10px;display:flex;align-items:center;gap:7px;border-radius:6px;font-size:var(--font-ui)}.popover button:hover{background:var(--hover)}.connection-banner{display:flex;align-items:center;gap:10px;padding:10px 24px;background:var(--notice);color:var(--text);border-bottom:1px solid var(--border);font-size:var(--font-support);position:relative;z-index:5}.connection-banner>span{flex:1;line-height:1.5}.connection-banner button{display:flex;align-items:center;gap:5px;color:var(--accent);white-space:nowrap;font-size:var(--font-support)}.workspace-body{flex:1;min-height:0;display:flex;flex-direction:column;position:relative}.chat-brand-background{position:absolute;inset:0;background:url(/muse-logo.png) no-repeat 52% 26% / min(83%,865px);opacity:calc(var(--background-presence) * .045);pointer-events:none;will-change:opacity;transform:translateZ(0);transition:opacity .32s cubic-bezier(.22,1,.36,1)}.welcome{position:relative;display:flex;flex:1;flex-direction:column;min-height:310px}.welcome-art{position:absolute;inset:0;background-size:cover;background-position:center;opacity:var(--background-presence);pointer-events:none;-webkit-mask-image:linear-gradient(black 65%,transparent 100%);mask-image:linear-gradient(black 65%,transparent 100%);will-change:opacity;transform:translateZ(0);transition:opacity .32s cubic-bezier(.22,1,.36,1)}.main-workspace:has(.transcript,.loading-conversation) .welcome-art{opacity:var(--background-presence)}[data-theme=muse] .welcome-art{opacity:0!important}.theme-daylight{background-image:url(/themes/daylight.png)}.theme-moonlight{background-image:url(/themes/moonlight.png)}.theme-grove{background-image:url(/themes/grove.png)}.theme-plush{background-image:url(/themes/plush.png)}.app-shell:not([data-theme=muse]) .chat-brand-background{display:none}.app-shell:not([data-theme=muse]) .welcome-art{-webkit-mask-image:none;mask-image:none}.welcome-content{position:relative;width:calc(100% - 112px);max-width:930px;margin:0 auto;padding:clamp(35px,8vh,100px) 0 25px}.welcome-kicker{display:flex;align-items:center;gap:8px;font-size:var(--font-caption);letter-spacing:.15em;font-weight:500;color:var(--muted);margin-bottom:23px}.tiny-spark{font-size:var(--font-title);letter-spacing:0;color:var(--accent)}.welcome h1{font-size:clamp(33px,3.7vw,53px);line-height:1.1;font-weight:420;letter-spacing:-2px;margin:0 0 19px;color:var(--heading)}.welcome h1 em{font-family:Iowan Old Style,Palatino Linotype,Georgia,serif;font-weight:400;letter-spacing:-1.7px;color:var(--serif-accent)}.welcome-subtitle{font-size:var(--font-body);line-height:1.8;color:var(--secondary-text);margin-bottom:24px}.welcome-project{display:flex;align-items:center;gap:14px}.project-chip{padding:8px 11px;border:1px solid var(--border);display:inline-flex;align-items:center;gap:8px;background:var(--glass);border-radius:8px;-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);font-size:var(--font-support);max-width:260px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.project-chip:hover{background:var(--hover)}.starter-section{width:calc(100% - 112px);max-width:930px;margin:auto auto 23px;position:relative;padding-top:25px}.starter-label{display:flex;align-items:center;justify-content:space-between;margin-bottom:11px;font-size:var(--font-caption);letter-spacing:.1em;color:var(--muted)}.starter-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.starter-card{display:flex;align-items:flex-start;text-align:left;gap:10px;padding:17px 13px;min-width:0;border:1px solid var(--border);border-radius:11px;background:var(--glass);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);transition:transform .2s,border .2s,background .2s}.starter-card:hover{transform:translateY(-2px);background:var(--hover);border-color:var(--strong-border)}.starter-card>svg:first-child{color:var(--accent);margin-top:1px}.starter-card>span{min-width:0;display:flex;flex-direction:column;gap:6px}.starter-card strong{font-size:var(--font-ui);font-weight:500;white-space:normal}.starter-card small{font-size:var(--font-support);color:var(--muted);white-space:normal}.starter-arrow{color:var(--muted);margin-left:auto}.composer-dock{width:calc(100% - 112px);max-width:930px;margin:0 auto;position:relative;flex-shrink:0;padding-bottom:18px;z-index:2}.composer{background:var(--composer);border:1px solid var(--composer-border);border-radius:22px;box-shadow:var(--composer-shadow);padding:20px 20px 14px;-webkit-backdrop-filter:blur(28px);backdrop-filter:blur(28px);transition:border-color .2s,box-shadow .2s,background-color .2s}.composer:focus-within{border-color:var(--composer-focus);box-shadow:var(--composer-shadow),0 0 0 2px var(--focus-soft)}.composer textarea{display:block;width:100%;resize:none;min-height:64px;max-height:200px;line-height:1.6;background:transparent;color:var(--text);padding:0 3px;border:0;font-size:var(--font-body)}.composer textarea::placeholder{color:var(--placeholder)}.composer-toolbar{display:flex;align-items:center;justify-content:space-between;gap:10px;padding-top:8px}.composer-tools,.composer-actions{display:flex;align-items:center;gap:6px}.composer-tools{min-width:0}.composer-tools .icon-button{width:34px;height:34px;border-radius:50%;background:var(--soft-surface);border:1px solid var(--border);margin-right:2px}.toolbar-divider{display:none}.select-control{display:inline-flex;align-items:center;gap:6px;border-radius:8px;color:var(--secondary-text);min-width:0;padding:5px 8px;transition:background-color .18s ease,color .18s ease}.select-control:hover{background:var(--hover);color:var(--text)}.composer-tools .muse-select .select-control{min-height:38px;padding:7px 12px;border-radius:15px;background:var(--soft-surface);border:1px solid var(--border);gap:6px}.composer-tools .muse-select .select-control:hover{background:var(--hover)}.model-spark,.effort-icon{color:var(--accent);width:16px;height:16px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;line-height:1}.model-spark{font-size:var(--font-title)}.effort-select{color:var(--secondary-text)}.send-button{width:40px;height:40px;border-radius:50%;display:flex;justify-content:center;align-items:center;flex-shrink:0;background:var(--primary);border:1px solid var(--primary-border);color:var(--on-primary);box-shadow:var(--button-shadow)}.send-button:disabled{background:var(--disabled-button);color:var(--disabled-text);opacity:.8;box-shadow:none;border-color:transparent}.send-button:hover:not(:disabled){transform:translateY(-1px);filter:brightness(1.06)}.composer-footnote{display:flex;justify-content:space-between;gap:12px;font-size:var(--font-caption);color:var(--muted);margin:11px 6px 0;opacity:1;flex-wrap:wrap;align-items:center}.composer-shortcuts{display:inline-flex;align-items:center;gap:8px;margin-left:auto}.composer-shortcut{display:inline-flex;align-items:center;gap:5px;color:var(--secondary-text);font-weight:450}.composer-footnote kbd{display:inline-flex;align-items:center;justify-content:center;min-width:20px;height:20px;padding:0 5px;border-radius:6px;border:1px solid var(--border);background:var(--soft-surface);color:var(--secondary-text);font-family:var(--font-family-ui);font-size:11px;font-weight:500;line-height:1;box-shadow:inset 0 1px #ffffff0d}.footnote-dot{color:var(--muted);opacity:.55;padding:0 1px}.workspace-statusbar{height:29px;display:flex;align-items:center;justify-content:space-between;font-size:var(--font-caption);color:var(--muted);padding:0 24px;flex-shrink:0;border-top:1px solid var(--faint-border)}.workspace-statusbar>span{display:flex;align-items:center;gap:6px}.statusbar-dot{margin:0 3px}.attachment-list{display:flex;flex-wrap:wrap;gap:6px;margin:-3px 0 12px}.attachment{display:inline-flex;align-items:center;gap:5px;border:1px solid var(--border);border-radius:6px;background:var(--soft-surface);font-size:var(--font-support);padding:5px 6px;max-width:200px}.attachment>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.attachment button{padding:2px;display:flex;border-radius:3px}.attachment button:hover{background:var(--hover)}.running-line{display:flex;align-items:center;gap:8px;font-size:var(--font-support);padding:9px 5px 12px;color:var(--secondary-text)}.running-hint{margin-left:auto;color:var(--muted);font-size:var(--font-support);white-space:normal}.working-orb,.working-dot{width:6px;height:6px;display:inline-block;border-radius:50%;background:var(--accent);box-shadow:0 0 9px var(--focus-soft);animation:breathe 2s infinite}.working-dot{width:5px;height:5px}.transcript-wrap{position:relative;flex:1;min-height:0}.transcript-scroll{height:100%;overflow-y:auto;scroll-behavior:auto}.transcript{width:calc(100% - 112px);max-width:890px;margin:0 auto;padding:30px 0 40px;position:relative}.conversation-beginning{display:flex;align-items:center;justify-content:center;gap:9px;font-size:var(--font-support);color:var(--muted);margin:4px 0 42px}.conversation-beginning .muse-mark{opacity:.6}.message{margin:0 0 29px}.message-heading{display:flex;align-items:center;gap:8px;margin-bottom:10px;height:27px}.message-heading strong{font-size:var(--font-support);font-weight:600}.message-heading time{font-size:var(--font-caption);color:var(--muted)}.message-heading .copy-button{margin-left:2px;opacity:0;transition:opacity .16s ease,background-color .16s ease,color .16s ease}.message:hover .copy-button,.copy-button:focus-visible{opacity:1}.avatar{display:flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:9px}.user-avatar{background:var(--user-avatar);color:var(--secondary-text);font-size:var(--font-support);font-weight:600}.muse-avatar{background:var(--soft-surface);padding:3px}.muse-avatar .muse-mark{width:19px;height:19px}.user-message-text{margin-left:34px;font-size:var(--reading-size);line-height:1.65;white-space:pre-wrap;overflow-wrap:anywhere;padding:10px 15px;border-radius:13px;background:var(--user-message);border:1px solid var(--border);width:fit-content;max-width:calc(100% - 34px)}.agent-message .markdown{margin-left:35px}.markdown{font-size:var(--reading-size);line-height:1.85;overflow-wrap:anywhere;color:var(--message-text)}.markdown p{margin:0 0 16px}.markdown p:last-child{margin-bottom:0}.markdown h1,.markdown h2,.markdown h3{line-height:1.4;margin:22px 0 12px;letter-spacing:-.3px;color:var(--text)}.markdown h1{font-size:var(--font-brand)}.markdown h2{font-size:19px}.markdown h3{font-size:var(--font-title)}.markdown a{color:var(--accent);text-underline-offset:3px}.markdown blockquote{margin:18px 0;padding:2px 15px;border-left:2px solid var(--accent);color:var(--secondary-text)}.markdown ul,.markdown ol{padding-left:22px;margin:10px 0 18px}.markdown li{margin:5px 0}.markdown li>input{accent-color:var(--accent)}.markdown code{font-family:var(--font-family-code);background:var(--code-inline);border-radius:4px;font-size:.9em;padding:2px 5px}.markdown pre{font-size:var(--font-support);line-height:1.8;padding:16px 18px;margin:0;overflow-x:auto}.markdown pre code{padding:0;background:transparent;font-size:inherit}.code-block{border:1px solid var(--border);background:var(--code-background);border-radius:10px;margin:16px 0;overflow:hidden}.code-block-header{display:flex;align-items:center;justify-content:space-between;padding:6px 12px 6px 14px;border-bottom:1px solid var(--border);background:var(--soft-surface);font-size:var(--font-caption);color:var(--muted)}.code-block-lang{font-family:var(--font-family-code);font-size:11px;text-transform:lowercase;color:var(--muted)}.code-block-header .copy-button{font-size:11.5px;padding:3px 7px}.markdown table{border-collapse:collapse;display:block;overflow-x:auto;font-size:var(--font-ui);margin:18px 0}.markdown th,.markdown td{border:1px solid var(--border);padding:8px 13px;text-align:left}.markdown th{background:var(--soft-surface)}.markdown hr{border:0;border-top:1px solid var(--border);margin:24px 0}.inline-link-icon{margin-left:3px;vertical-align:middle}.remote-image{color:var(--muted);font-style:italic}.copy-button{display:inline-flex;align-items:center;gap:4px;padding:5px;color:var(--muted);border-radius:5px;font-size:var(--font-support)}.copy-button:hover{background:var(--hover);color:var(--text)}.streaming-label{font-size:var(--font-support);color:var(--muted);animation:breathe 2s infinite}.tool-item,.tool-group{margin:6px 0 6px 35px;border:1px solid var(--border);background:var(--tool-background);border-radius:9px;font-size:var(--font-support);overflow:hidden}.tool-item>summary,.tool-summary-button,.tool-group-header{width:100%;display:flex;align-items:center;gap:8px;list-style:none;padding:10px 12px;cursor:pointer;color:var(--secondary-text);text-align:left;transition:background-color .16s ease,color .16s ease}.tool-summary-button:hover,.tool-group-header:hover{background:var(--hover);color:var(--text)}.tool-group-list{padding:6px 10px 10px;border-top:1px solid var(--border);display:flex;flex-direction:column;gap:5px}.tool-group-list .tool-item{margin:0}summary::-webkit-details-marker{display:none}.tool-state{display:flex;color:var(--green)}.tool-title{font-weight:500}.tool-summary{color:var(--muted);flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--font-support)}.details-chevron{margin-left:auto;color:var(--muted);transition:transform .24s cubic-bezier(.22,1,.36,1)}details[open]>summary .details-chevron,.details-chevron.open{transform:rotate(90deg)}.tool-body{padding:12px 14px;border-top:1px solid var(--border)}.tool-body pre{margin:8px 0 12px;font-family:var(--font-family-code);font-size:var(--font-support);line-height:1.7;white-space:pre-wrap;overflow-wrap:anywhere;max-height:320px;overflow:auto}.tool-body p{font-size:var(--font-support);line-height:1.6}.tool-result-status{display:block;font-size:var(--font-support);color:var(--muted);padding-top:8px}.reasoning-item{margin:0 0 18px 35px;color:var(--muted)}.reasoning-item>summary,.reasoning-summary-button{display:flex;align-items:center;list-style:none;gap:7px;font-size:var(--font-support);color:var(--muted);cursor:pointer;padding:6px 8px;margin-left:-8px;border-radius:6px;width:fit-content;transition:background-color .16s ease,color .16s ease}.reasoning-summary-button:hover{background:var(--hover);color:var(--text)}.reasoning-item .markdown{padding:13px 15px;margin-top:6px;border-left:1px solid var(--border);color:var(--muted);font-size:var(--font-ui)}.diff-count{display:inline-flex;gap:5px;font-size:var(--font-support);margin-left:auto}.diff-count b{color:var(--green);font-weight:500}.diff-count i{color:var(--red);font-style:normal}.jump-button{position:absolute;bottom:12px;left:calc(50% - 17px);width:34px;height:34px;border-radius:50%;background:var(--dialog);border:1px solid var(--border);box-shadow:0 3px 15px #0002}.empty-conversation{text-align:center;padding:70px 20px;color:var(--muted)}.empty-conversation h2{font-family:var(--font-family-ui);font-weight:400;margin-top:20px;font-size:var(--font-page);color:var(--text)}.empty-conversation p{font-size:var(--font-ui)}.approval-card,.question-card{margin:24px 0 24px 35px;border:1px solid var(--request-border);background:var(--request-background);border-radius:13px;padding:19px}.request-heading{display:flex;align-items:center;gap:11px;margin-bottom:14px}.request-heading h3{font-size:var(--font-ui);margin:0 0 5px;font-weight:600}.request-heading p{font-size:var(--font-support);color:var(--secondary-text);margin:0}.request-icon{color:var(--accent);display:flex}.approval-card>pre{background:var(--code-background);border:1px solid var(--border);border-radius:7px;padding:13px;font-family:var(--font-family-code);font-size:var(--font-support);line-height:1.7;white-space:pre-wrap;overflow-wrap:anywhere;max-height:220px;overflow:auto}.approval-choices{display:flex;flex-wrap:wrap;gap:7px;margin-top:15px}.approval-choices .button{font-size:var(--font-support)}.choice-scope{font-size:var(--font-support);opacity:.7;border-left:1px solid currentColor;padding-left:6px}.question-card fieldset{padding:0;margin:19px 0;border:0}.question-card legend{font-size:var(--font-ui);font-weight:500;line-height:1.6;margin-bottom:12px}.question-options{display:flex;flex-direction:column;gap:6px;margin-bottom:10px}.question-option{display:flex;gap:9px;align-items:flex-start;background:var(--surface);border:1px solid var(--border);padding:10px 12px;border-radius:7px;cursor:pointer}.question-option.selected{border-color:var(--accent);background:var(--selected)}.question-option input{accent-color:var(--accent);margin:2px 0 0}.question-option strong{font-size:var(--font-support);font-weight:500}.question-option small{display:block;margin-top:4px;font-size:var(--font-support);color:var(--secondary-text);line-height:1.5}.request-actions{display:flex;gap:8px;justify-content:flex-end;margin-top:20px}.inline-error{padding:14px;font-size:var(--font-support);line-height:1.7;background:var(--error-background);color:var(--error-text);border:1px solid var(--error-border);border-radius:8px;margin:16px 0;overflow-wrap:anywhere}.inline-error strong{font-weight:500}.inline-error p{margin:7px 0}.inline-error>span{opacity:.8}.inline-notice{padding:12px 14px;background:var(--notice);border:1px solid var(--border);border-radius:8px;font-size:var(--font-support);color:var(--secondary-text);line-height:1.6;margin-bottom:18px}.loading-conversation{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:var(--muted);font-size:var(--font-ui)}.inspector{width:292px;min-width:0;border-left:1px solid var(--border);display:flex;flex-direction:column;min-height:0;background:var(--inspector);z-index:4;overflow:hidden;transition:transform .32s cubic-bezier(.22,1,.36,1),opacity .24s cubic-bezier(.22,1,.36,1),border-color .24s ease}.app-shell:not(.with-inspector) .inspector{transform:translate(100%);opacity:0;pointer-events:none;border-left-color:transparent}.inspector>header{height:62px;display:flex;align-items:center;justify-content:space-between;padding:8px 15px 0 19px;-webkit-app-region:drag;font-size:var(--font-support);color:var(--muted)}.inspector-project{display:flex;align-items:center;gap:10px;padding:21px 19px 25px}.project-icon{width:38px;height:38px;display:flex;align-items:center;justify-content:center;border:1px solid var(--border);background:var(--soft-surface);border-radius:10px;color:var(--accent)}.inspector-project>div{min-width:0}.inspector-project strong{display:block;font-size:var(--font-ui);margin-bottom:5px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.inspector-project div>span{display:flex;align-items:center;gap:5px;font-size:var(--font-support);color:var(--muted)}.inspector-tabs{display:flex;align-items:center;gap:18px;padding:0 16px;border-bottom:1px solid var(--border);height:39px}.inspector-tabs>button[role]{display:flex;gap:6px;align-items:center;height:39px;padding:0 0 2px;color:var(--muted);border-bottom:1.5px solid transparent;font-size:var(--font-support)}.inspector-tabs>button[aria-selected=true]{color:var(--text);border-bottom-color:var(--accent)}.inspector-tabs>button>span{font-size:var(--font-support);border-radius:4px;padding:1px 4px;background:var(--hover)}.inspector-tabs>.icon-button{margin-left:auto}.inspector-body{flex:1;overflow:auto;min-height:0;padding:12px 11px}.inspector-empty{text-align:center;padding:50px 19px;color:var(--muted)}.empty-glyph{display:inline-flex;padding:13px;border-radius:15px;background:var(--soft-surface);border:1px solid var(--faint-border)}.inspector-empty h3{color:var(--secondary-text);font-size:var(--font-ui);font-weight:500;margin:19px 0 10px}.inspector-empty p{font-size:var(--font-support);line-height:1.85}.changed-file{width:100%;display:flex;align-items:center;gap:9px;padding:10px 7px;text-align:left;border-radius:7px}.changed-file:hover{background:var(--hover)}.changed-file>svg:first-child{color:var(--muted)}.changed-file>span{flex:1;min-width:0}.changed-file strong{display:block;font-size:var(--font-support);font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.changed-file small{display:block;font-size:var(--font-support);color:var(--muted);margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.changed-file b{font-family:var(--font-family-code);font-size:var(--font-support);font-weight:400;color:var(--green)}.changed-file b.deleted{color:var(--red)}.changed-file>svg:last-child{color:var(--muted)}.diff-header{display:flex;align-items:center;justify-content:space-between;gap:8px;margin:4px 0 10px}.diff-back{display:flex;align-items:center;gap:5px;font-size:var(--font-support);min-width:0;flex:1;overflow:hidden;text-align:left}.diff-back>span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.diff-ask-button{display:inline-flex;align-items:center;gap:4px;padding:4px 8px;border-radius:6px;border:1px solid var(--border);background:var(--soft-surface);color:var(--secondary-text);font-size:11.5px;flex-shrink:0;transition:background-color .16s ease,color .16s ease}.diff-ask-button:hover{background:var(--hover);color:var(--text)}.diff-view{font-family:var(--font-family-code);font-size:var(--font-support);line-height:1.8;white-space:pre;overflow:auto;margin:0;padding:7px;border-radius:8px;border:1px solid var(--faint-border);background:var(--code-background)}.diff-view>span{display:inline-block;min-width:100%;padding:0 6px;border-radius:3px}.diff-gutter{display:inline-block;width:32px;padding-right:8px;margin-right:6px;text-align:right;color:var(--muted);opacity:.55;-webkit-user-select:none;user-select:none;font-variant-numeric:tabular-nums}.diff-view .added{background:var(--diff-added);color:var(--green)}.diff-view .removed{background:var(--diff-removed);color:var(--red)}.diff-view .hunk{color:var(--accent)}.diff-view .meta{color:var(--muted);opacity:.7}.activity-entry{display:flex;gap:9px;padding:12px 7px;border-bottom:1px solid var(--faint-border)}.activity-entry>span{color:var(--green)}.activity-entry strong{font-size:var(--font-support);font-weight:500}.activity-entry p{font-size:var(--font-support);color:var(--muted);line-height:1.6;margin:5px 0 0;overflow-wrap:anywhere}.usage-panel{border-top:1px solid var(--border);padding:16px 20px}.usage-panel>span{display:block;margin-bottom:12px}.usage-panel>div{display:flex;justify-content:space-between;font-size:var(--font-support);margin:7px 0;color:var(--muted)}.usage-panel strong{font-weight:500;color:var(--secondary-text);font-variant-numeric:tabular-nums}.inspector-footer{border-top:1px solid var(--border);display:flex;justify-content:space-between;padding:12px 18px}.inspector-footer button{display:flex;align-items:center;gap:7px;font-size:var(--font-support);color:var(--muted)}.inspector-footer button:hover{color:var(--text)}.dialog{background:var(--dialog);color:var(--text);border:1px solid var(--strong-border);border-radius:17px;box-shadow:0 30px 100px #0005,0 4px 20px #0002;padding:0;max-height:calc(100vh - 70px);overflow:hidden}.dialog[open]{animation:dialog-in .2s cubic-bezier(.22,1,.36,1)}.dialog::backdrop{background:var(--backdrop);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);animation:backdrop-in .2s ease}@keyframes dialog-in{0%{opacity:0;transform:translateY(6px) scale(.985)}to{opacity:1;transform:translateY(0) scale(1)}}@keyframes backdrop-in{0%{opacity:0}to{opacity:1}}.dialog-heading{padding:17px 20px 17px 25px;display:flex;align-items:center;justify-content:space-between;gap:20px;border-bottom:1px solid var(--border)}.dialog-heading h2{margin:0;font-size:var(--font-ui);font-weight:600}.delete-conversations-dialog{width:400px;max-width:calc(100vw - 32px);overflow-y:auto;border-radius:16px}.delete-conversations-dialog .dialog-heading{padding:20px 20px 8px 24px;border:0}.delete-conversations-dialog .dialog-heading h2{font-size:17px}.delete-dialog-body{padding:10px 24px 22px}.delete-dialog-summary{display:flex;align-items:center;gap:8px;margin:0 0 12px;color:var(--muted);font-size:12px}.delete-dialog-count{min-width:20px;padding:1px 6px;border-radius:6px;background:var(--selected);color:var(--text);text-align:center;font-variant-numeric:tabular-nums}.delete-dialog-preview{padding:4px 12px;border:1px solid var(--border);border-radius:10px;background:var(--soft-surface)}.delete-dialog-item{display:flex;align-items:center;gap:10px;min-height:36px;color:var(--text);font-size:13px}.delete-dialog-item svg{flex-shrink:0;color:var(--muted)}.delete-dialog-item span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.delete-dialog-more{padding:4px 0 8px 25px;color:var(--muted);font-size:12px}.delete-dialog-warning{margin:18px 0 5px;font-size:13px;line-height:1.6}.delete-dialog-note{margin:0;color:var(--muted);font-size:12px;line-height:1.6}.delete-dialog-actions{display:flex;justify-content:flex-end;gap:8px;padding:0 24px 22px}.delete-dialog-actions .button{min-height:34px;padding:7px 16px;border-radius:8px;font-size:13px;box-shadow:none}.delete-dialog-actions .danger{background:#b43d3d;border:1px solid #b43d3d;color:#fff}.delete-dialog-actions .danger:hover:not(:disabled){background:#9d3333;border-color:#9d3333}.settings-dialog{width:880px;max-width:calc(100vw - 64px)}.settings-layout{display:flex;height:min(590px,calc(100vh - 143px))}.settings-nav{width:168px;border-right:1px solid var(--border);padding:19px 12px;display:flex;flex-direction:column;gap:5px;flex-shrink:0;background:var(--soft-surface)}.settings-nav>button{display:flex;align-items:center;gap:9px;padding:11px 12px;font-size:var(--font-support);border-radius:8px;color:var(--muted);text-align:left}.settings-nav>button.selected{color:var(--text);background:var(--selected)}.settings-nav>button:hover{color:var(--text)}.settings-nav>button .muse-mark{flex-shrink:0;opacity:.78;transition:opacity .16s ease}.settings-nav>button.selected .muse-mark,.settings-nav>button:hover .muse-mark{opacity:1}.settings-content{padding:31px 30px;overflow:auto;flex:1;min-width:0}.settings-section-heading h3{font-family:var(--font-family-ui);font-size:29px;font-weight:400;letter-spacing:-.5px;margin:10px 0}.settings-section-heading p{color:var(--muted);font-size:var(--font-body);line-height:1.75;margin-bottom:23px}.theme-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px;margin:0 -3px 24px}.theme-card{padding:4px;border:1px solid transparent;border-radius:10px;text-align:left}.theme-card.selected{border-color:var(--accent);background:var(--selected)}.theme-card:hover{background:var(--hover)}.theme-thumbnail{aspect-ratio:1.35;position:relative;overflow:hidden;border-radius:6px;border:1px solid var(--border)}.theme-thumbnail>img{width:100%;height:100%;object-fit:cover;object-position:78% center}.theme-thumbnail.muse-thumbnail{background:linear-gradient(135deg,#003698,#092063)}.theme-thumbnail.muse-thumbnail>img{object-fit:contain;padding:9px}.theme-check{position:absolute;top:5px;right:5px;height:18px;width:18px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:var(--primary);color:var(--on-primary)}.theme-name{display:flex;align-items:center;gap:5px;font-size:var(--font-support);font-weight:500;margin:10px 3px 6px}.theme-description{display:block;margin:0 3px 5px;color:var(--muted);font-size:var(--font-support);line-height:1.5}.setting-row{display:flex;justify-content:space-between;align-items:center;gap:18px;min-height:73px;padding:15px 0;border-top:1px solid var(--border)}.setting-label{display:flex;align-items:center;gap:7px;font-size:var(--font-ui);font-weight:500}.setting-row small{display:block;color:var(--muted);font-size:var(--font-support);line-height:1.6;margin-top:6px;max-width:290px}.switch{appearance:none;width:31px;height:18px;border-radius:15px;border:1px solid var(--strong-border);background:var(--disabled-button);position:relative;flex-shrink:0;cursor:pointer;transition:background .2s}.switch:after{content:"";display:block;height:12px;width:12px;position:absolute;top:2px;left:2px;background:var(--muted);border-radius:50%;transition:transform .2s}.switch:checked{background:var(--primary);border-color:var(--primary-border)}.switch:checked:after{background:var(--on-primary);transform:translate(12px)}.range-setting{display:flex;gap:9px;align-items:center;font-size:var(--font-support);color:var(--muted);width:150px}.range-setting input{width:110px;accent-color:var(--accent);height:3px;cursor:pointer}.range-setting span{min-width:26px}.segmented{display:flex;gap:2px;padding:3px;border:1px solid var(--border);border-radius:7px;background:var(--soft-surface)}.segmented>button{width:29px;height:24px;border-radius:4px}.segmented>button.selected{background:var(--selected);box-shadow:0 1px 3px #0002}.connection-card{display:flex;gap:11px;align-items:center;padding:16px;border:1px solid var(--border);background:var(--soft-surface);border-radius:10px}.connection-card>svg{color:var(--muted)}.connection-card.ready>svg{color:var(--green)}.connection-card>div{flex:1}.connection-card strong{font-size:var(--font-ui);font-weight:500}.connection-card span{display:block;margin-top:5px;color:var(--muted);font-size:var(--font-support);line-height:1.6}.path-readout{margin:10px 0 26px;color:var(--muted);font-size:var(--font-support);font-family:var(--font-family-code);overflow-wrap:anywhere}.field-label{display:block;font-size:var(--font-support);font-weight:500;margin:20px 0 10px}.text-input{background:var(--input);border:1px solid var(--border);border-radius:7px;padding:10px 11px;color:var(--text);width:100%;font-size:var(--font-ui)}.text-input::placeholder{color:var(--placeholder)}.input-with-button{display:flex;gap:7px}.input-with-button input{min-width:0}.field-hint{font-size:var(--font-support);color:var(--muted);line-height:1.7;margin:9px 0 18px}.setup-instructions{margin-top:28px;padding-top:22px;border-top:1px solid var(--border)}.setup-instructions h4{font-size:var(--font-ui);font-weight:500;margin:0 0 10px}.setup-instructions p{font-size:var(--font-support);line-height:1.8;color:var(--muted)}.setup-instructions code{background:var(--code-inline);padding:2px 4px;border-radius:4px;color:var(--text)}.about-settings{text-align:center}.about-settings>img{width:88px;height:88px;object-fit:contain}.about-settings h3{font-size:var(--font-brand);font-weight:500;margin:9px 0;letter-spacing:-.6px}.version-pill{display:inline-block;color:var(--muted);border:1px solid var(--border);border-radius:5px;padding:3px 7px;font-size:var(--font-support)}.about-settings>p{color:var(--muted);font-size:var(--font-support);line-height:1.85;margin:20px 0}.about-facts{border-top:1px solid var(--border);border-bottom:1px solid var(--border);padding:15px 0;text-align:left;max-width:290px;margin:0 auto}.about-facts>span{display:flex;justify-content:space-between;font-size:var(--font-support);padding:7px 0;color:var(--secondary-text)}.about-facts svg{color:var(--green)}.about-settings>p.affiliation-note{font-size:var(--font-support)}.command-dialog{width:580px;max-width:calc(100vw - 60px);margin-top:min(17vh,140px)}.command-dialog .dialog-heading{display:none}.command-search{display:flex;align-items:center;gap:12px;padding:21px;border-bottom:1px solid var(--border);color:var(--muted)}.command-search input{flex:1;border:0;background:transparent;color:var(--text);font-size:var(--font-body);padding:0;box-shadow:none}.command-search input::placeholder{color:var(--placeholder)}.command-results{padding:8px;max-height:360px;overflow:auto}.command-group-heading{padding:8px 12px 4px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}.command-results>button{width:100%;display:flex;align-items:center;gap:13px;padding:12px 13px;border-radius:8px;text-align:left}.command-results>button.selected{background:var(--selected)}.command-results>button>svg{color:var(--muted)}.command-results>button>span{flex:1;min-width:0}.command-results strong{display:block;font-weight:500;font-size:var(--font-ui);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.command-results small{display:block;color:var(--muted);font-size:var(--font-support);margin-top:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.command-dialog footer{display:flex;align-items:center;justify-content:center;gap:20px;font-size:var(--font-caption);color:var(--muted);padding:12px 19px;border-top:1px solid var(--border)}.command-dialog footer>span{display:inline-flex;align-items:center;gap:5px;line-height:1}.command-dialog footer kbd{display:inline-flex;align-items:center;justify-content:center;min-width:22px;height:20px;padding:0 5px;border:1px solid var(--border);border-radius:5px;background:var(--soft-surface);color:var(--secondary-text);font-family:var(--font-family-ui);font-size:11px;font-weight:500;line-height:1}.command-empty{text-align:center;padding:35px 20px;color:var(--muted);font-size:var(--font-ui)}.rename-dialog{width:430px}.rename-dialog form{padding:0 25px 25px}.toast{position:fixed;bottom:45px;left:50%;transform:translate(-50%);max-width:min(650px,calc(100vw - 60px));display:flex;align-items:center;gap:10px;padding:10px 12px 10px 17px;border-radius:11px;border:1px solid var(--strong-border);background:var(--dialog);box-shadow:0 7px 35px #0003;z-index:200;font-size:var(--font-ui);line-height:1.6}.toast.error{border-color:var(--error-border)}.toast.error>svg{color:var(--red)}.toast.success>svg{color:var(--green)}.toast>span{flex:1;overflow-wrap:anywhere}.workspace-page{overflow:auto;flex:1;min-height:0;padding:48px 50px 30px;position:relative}.page-heading{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-bottom:36px}.page-heading h1,.page-empty h1{font-family:var(--font-family-ui);font-size:var(--font-page);font-weight:400;letter-spacing:-.8px;margin:12px 0}.page-heading p{display:flex;align-items:center;gap:6px;color:var(--muted);margin:0;font-size:var(--font-ui);line-height:1.7}.page-heading>svg{color:var(--muted)}.project-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(235px,1fr));gap:16px}.project-card{background:var(--glass);border:1px solid var(--border);border-radius:13px;text-align:left;padding:22px;min-height:205px;transition:background .2s,transform .2s}.project-card:hover{background:var(--hover);transform:translateY(-2px)}.project-card-top{display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:17px}.project-card-icon{display:inline-flex;padding:12px;border-radius:12px;background:var(--soft-surface);color:var(--accent)}.project-git-pills{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:5px}.project-git-pill{display:inline-flex;align-items:center;gap:4px;padding:3px 8px;border-radius:999px;border:1px solid var(--border);background:var(--soft-surface);font-size:11px;color:var(--secondary-text);max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.project-git-pill.clean{color:var(--green)}.project-git-pill.dirty{color:var(--warning)}.project-card h2{font-size:var(--font-title);font-weight:500;margin:0 0 8px}.project-card p{font-family:var(--font-family-code);font-size:var(--font-support);color:var(--muted);overflow-wrap:anywhere;line-height:1.7}.project-card footer{display:flex;justify-content:space-between;color:var(--muted);font-size:var(--font-support);margin-top:20px;padding-top:15px;border-top:1px solid var(--border)}.add-project{border-style:dashed;background:transparent;display:flex;align-items:center;justify-content:center;flex-direction:column;color:var(--muted)}.add-project h2{margin-top:17px;font-size:var(--font-ui)}.add-project p{font-family:inherit;font-size:var(--font-support)}.page-footnote{font-size:var(--font-support);color:var(--muted);line-height:1.7;margin:28px 0 0}.page-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}.page-empty>svg{color:var(--accent);margin-bottom:15px}.page-empty>p{font-size:var(--font-ui);line-height:1.8;color:var(--muted);max-width:360px}.page-empty .button{margin-top:17px}.files-page{display:flex;flex-direction:column}.files-page .page-heading{margin-bottom:22px}.files-breadcrumbs{display:flex;align-items:center;flex-wrap:wrap;gap:5px;color:var(--muted);font-size:var(--font-support);margin-top:6px}.breadcrumb-part{display:inline-flex;align-items:center;gap:5px}.breadcrumb-segment{display:inline-flex;align-items:center;gap:6px;padding:4px 8px;border-radius:6px;color:var(--secondary-text);font-size:var(--font-support);transition:background-color .16s ease,color .16s ease}button.breadcrumb-segment:hover{background:var(--hover);color:var(--text)}.breadcrumb-segment.current{color:var(--text);font-weight:500;background:var(--soft-surface)}.file-browser{flex:1;display:grid;grid-template-columns:minmax(220px,31%) minmax(0,1fr);min-height:240px;border:1px solid var(--border);border-radius:15px;background:var(--glass);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);box-shadow:var(--composer-shadow);overflow:hidden}.file-browser-sidebar{border-right:1px solid var(--border);display:flex;flex-direction:column;min-height:0;min-width:0;background:var(--soft-surface)}.file-search-bar{padding:12px 12px 10px;border-bottom:1px solid var(--faint-border);flex-shrink:0}.file-search{display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;border:1px solid var(--border);background:var(--input);color:var(--muted);transition:border-color .18s ease,box-shadow .18s ease}.file-search:focus-within{border-color:var(--focus);box-shadow:0 0 0 2px var(--focus-soft)}.file-search input{width:100%;background:transparent;border:0;color:var(--text);font-size:var(--font-support);box-shadow:none}.file-search input::placeholder{color:var(--placeholder)}.file-search-clear{display:inline-flex;align-items:center;justify-content:center;padding:2px;border-radius:4px;color:var(--muted)}.file-search-clear:hover{background:var(--hover);color:var(--text)}.file-browser-list{flex:1;min-height:0;overflow-y:auto;padding:8px 10px}.file-row{display:flex;width:100%;align-items:center;gap:9px;text-align:left;padding:8px 10px;margin-bottom:2px;border-radius:8px;font-size:var(--font-support);color:var(--secondary-text);transition:background-color .16s ease,color .16s ease}.file-row>span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}.file-icon{color:var(--muted);flex-shrink:0;transition:color .16s ease}.file-icon.folder{color:var(--accent)}.file-row-chevron{color:var(--muted);opacity:.65;transition:transform .16s ease}.file-row:hover .file-row-chevron{transform:translate(2px);opacity:1}.file-row:hover{background:var(--hover);color:var(--text)}.file-row.selected{background:var(--selected);color:var(--text);font-weight:500}.file-row.selected .file-icon,.file-row:hover .file-icon{color:var(--accent)}.parent-folder{color:var(--muted);font-size:var(--font-support);margin-bottom:6px;border-bottom:1px solid var(--faint-border);border-radius:8px 8px 0 0}.file-preview{display:flex;flex-direction:column;min-width:0;min-height:0;overflow:hidden;background:var(--code-background)}.file-preview>header{display:flex;gap:12px;padding:11px 18px;align-items:center;justify-content:space-between;border-bottom:1px solid var(--border);background:var(--soft-surface);font-size:var(--font-support);color:var(--muted)}.file-preview-title{display:flex;align-items:center;gap:8px;min-width:0;color:var(--text);font-weight:500}.file-preview-title>svg{color:var(--accent)}.file-preview-title>span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.file-preview-title>small{font-size:11px;font-weight:400;color:var(--muted);padding:2px 7px;border-radius:999px;border:1px solid var(--border);background:var(--soft-surface);flex-shrink:0}.file-ask-button.text-button{font-size:var(--font-support);white-space:nowrap;padding:5px 10px;border-radius:7px;border:1px solid var(--border);background:var(--surface);color:var(--text);text-decoration:none;transition:background-color .16s ease,border-color .16s ease}.file-ask-button.text-button:hover{background:var(--hover);border-color:var(--strong-border);text-decoration:none}.file-preview>pre{margin:0;overflow:auto;font-family:var(--font-family-code);font-size:var(--font-support);line-height:1.85;padding:18px 20px;flex:1}.file-preview-empty{margin:auto;text-align:center;padding:32px 24px;max-width:320px;color:var(--muted)}.file-empty-badge{width:52px;height:52px;border-radius:15px;display:inline-flex;align-items:center;justify-content:center;background:var(--soft-surface);border:1px solid var(--border);color:var(--accent)}.file-preview-empty h3{font-size:var(--font-title);font-weight:500;color:var(--text);margin:16px 0 8px}.file-preview-empty p{font-size:var(--font-support);line-height:1.65;color:var(--muted)}.file-list-message{font-size:var(--font-support);color:var(--muted);padding:14px 10px;line-height:1.7}.file-list-footnote{display:flex;align-items:center;gap:6px;font-size:11.5px;color:var(--muted);padding:9px 14px;border-top:1px solid var(--border);background:var(--soft-surface);flex-shrink:0}.docs-page{width:100%}.docs-container{max-width:850px;width:100%;margin:0 auto}.guides{border:1px solid var(--border);border-radius:14px;background:var(--glass);-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);overflow:hidden}.guide-item{border-bottom:1px solid var(--border);transition:background-color .2s ease}.guide-item:last-child{border-bottom:0}.guide-item:hover{background:var(--soft-surface)}.guide-summary{width:100%;display:flex;align-items:center;gap:13px;font-size:var(--font-ui);font-weight:450;padding:19px 20px;text-align:left;color:var(--text);cursor:pointer}.guide-number{font-family:var(--font-family-code);font-size:var(--font-caption);color:var(--muted)}.guide-chevron{margin-left:auto;color:var(--muted);transition:transform .28s cubic-bezier(.22,1,.36,1),color .18s ease}.guide-item.open .guide-chevron{transform:rotate(90deg);color:var(--accent)}.guide-collapse{display:grid;grid-template-rows:0fr;opacity:0;transition:grid-template-rows .3s cubic-bezier(.22,1,.36,1),opacity .24s cubic-bezier(.22,1,.36,1)}.guide-collapse.open{grid-template-rows:1fr;opacity:1}.guide-collapse-inner{min-height:0;overflow:hidden}.guide-collapse-inner p{margin:0 20px 20px 49px;font-size:var(--font-body);line-height:1.85;color:var(--secondary-text)}.shortcuts-guide{padding:30px 0;max-width:390px}.shortcuts-guide h2{font-size:var(--font-ui);font-weight:500;margin-bottom:16px}.shortcuts-guide div{display:flex;justify-content:space-between;margin:12px 0;color:var(--secondary-text);font-size:var(--font-support)}.shortcuts-guide kbd{padding:2px 6px;border-radius:4px;border:1px solid var(--border)}.fatal-error{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;padding:40px;text-align:center}.fatal-error>img{width:100px}.fatal-error h1{font-family:var(--font-family-ui);font-weight:400}.fatal-error p{line-height:1.8;max-width:480px;color:var(--muted)}.fatal-error pre{margin-bottom:25px;color:var(--red);white-space:pre-wrap}.spin{animation:rotate 1.5s linear infinite}.spinner{height:13px;width:13px;border:1.5px solid currentColor;border-right-color:transparent;border-radius:50%;animation:rotate .8s linear infinite}@keyframes rotate{to{transform:rotate(360deg)}}@keyframes breathe{0%,to{opacity:1}50%{opacity:.45}}[data-theme=muse] .muse-mark{filter:brightness(0) invert(1)}[data-theme=muse] .sidebar{box-shadow:inset -1px 0 #7eadff0a}[data-theme=muse] .sidebar-titlebar{color:#b8d2ff}[data-theme=muse] .desktop-tag{opacity:.6}[data-theme=muse] .main-nav button.selected>svg{filter:drop-shadow(0 0 5px #8cd2ff99)}[data-theme=muse] .chat-brand-background{opacity:calc(var(--background-presence) * .95);filter:drop-shadow(0 1px 0 #5db2ff24)}[data-theme=muse] .welcome-content{padding:0;position:absolute;bottom:15px;left:50%;transform:translate(-50%)}[data-theme=muse] .welcome-kicker,[data-theme=muse] .welcome h1,[data-theme=muse] .welcome-subtitle,[data-theme=muse] .project-local{display:none}[data-theme=muse] .welcome-project{justify-content:flex-start}[data-theme=muse] .project-chip{background:#1e60c129;border-color:#80b8ff22;color:#c4d8fc;font-size:var(--font-support);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}[data-theme=muse] .starter-section{display:none}[data-theme=muse] .composer-tools .icon-button{background:#407de350;border:1px solid #80b6ff36;color:#d9e8ff}[data-theme=muse] .select-control{background:#2767c738;border-radius:15px;padding:5px 10px;gap:7px}[data-theme=muse] .composer-tools .muse-select .select-control{min-height:38px;background:#2767c738;border-color:transparent;border-radius:15px;padding:7px 12px;gap:6px}[data-theme=muse] .composer-tools .muse-select .select-control:hover{background:#3578de4d}[data-theme=muse] .send-button:disabled{border:1px solid #8db9ff88;opacity:.9;box-shadow:0 0 18px #287bff22}[data-theme=muse] .composer-footnote kbd{background:#2767c745;border-color:#80b6ff33;color:#d9e8ff}[data-theme=muse] .main-workspace:has(.transcript,.loading-conversation) .chat-brand-background{opacity:calc(var(--background-presence) * .95)}@media(max-width:1100px){.app-shell{grid-template-columns:244px minmax(0,1fr) 0px}.app-shell.with-inspector{grid-template-columns:244px minmax(0,1fr) 250px}.app-shell.sidebar-hidden{grid-template-columns:0px minmax(0,1fr) 0px}.app-shell.sidebar-hidden.with-inspector{grid-template-columns:0px minmax(0,1fr) 250px}.sidebar{width:244px}.inspector{width:250px}.starter-arrow,.statusbar-motto,.local-pill{display:none}.welcome-content,.starter-section,.composer-dock,.transcript{width:calc(100% - 64px)}.with-inspector .welcome-content,.with-inspector .starter-section,.with-inspector .composer-dock,.with-inspector .transcript{width:calc(100% - 38px)}.starter-card{padding:14px 10px;gap:7px;flex-direction:column}.starter-card small{font-size:var(--font-support);white-space:normal}.with-inspector .starter-grid{grid-template-columns:1fr;gap:5px}.with-inspector .starter-card{flex-direction:row;padding:10px;align-items:center}.with-inspector .starter-card small{display:none}.with-inspector .welcome-subtitle{max-width:220px}.with-inspector .welcome-subtitle br{display:none}.with-inspector .composer-footnote>span:first-child{display:none}.with-inspector .effort-select{display:none}.with-inspector .welcome-content{padding-top:40px}.workspace-page{padding:36px 28px}.window-tools{gap:2px}}@media(max-height:780px){.sidebar-companion{height:54px}.main-nav{gap:2px;padding-bottom:7px}.main-nav button{padding:8px 13px}.brand,[data-theme=muse] .brand{padding-bottom:12px}.sidebar-primary{padding-bottom:3px}.welcome-content{padding-top:35px}.welcome h1{font-size:38px}.welcome-kicker{margin-bottom:17px}.welcome-subtitle{margin-bottom:18px}.starter-section{padding-top:12px;margin-bottom:15px}.starter-card{padding-top:12px;padding-bottom:12px}.composer-dock{padding-bottom:11px}}@media(max-height:740px){.sidebar-companion{display:none}.main-nav{display:grid;grid-template-columns:repeat(5,1fr);gap:3px}.main-nav button{justify-content:center;padding:10px 0}.main-nav button>span{display:none}}@media(max-height:660px){.sidebar-companion{display:none}.sidebar-empty{padding-top:5px}.welcome{min-height:260px}.welcome-content{padding-top:20px}.welcome h1{font-size:33px;margin-bottom:12px}.welcome-subtitle{font-size:var(--font-body);margin-bottom:12px}.welcome-kicker{margin-bottom:11px}.starter-label{display:none}.composer textarea{min-height:43px}.composer{padding-top:13px}}@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}[data-reduce-motion=true] *,[data-reduce-motion=true] *:before,[data-reduce-motion=true] *:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}.conversation-group-label{width:100%;display:inline-flex;align-items:center;gap:6px;padding:5px 10px;margin:4px 0 2px;border-radius:6px;font-size:var(--font-caption);font-weight:600;color:var(--muted);text-align:left;transition:background-color .18s ease,color .18s ease}.conversation-group-label:hover{background:var(--hover);color:var(--text)}.conversation-group-label .section-chevron{opacity:0}.conversation-group-label:hover .section-chevron,.conversation-group-label .section-chevron.collapsed{opacity:.75}.conversation-copy{min-width:0;flex:1;display:flex;flex-direction:column;gap:3px}.conversation-copy .conversation-title{flex:none;font-weight:500}.conversation-project{font-size:var(--font-caption);color:var(--muted);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.history-status{display:flex;align-items:center;gap:8px;padding:12px 10px;color:var(--muted);font-size:var(--font-support)}.history-error{padding:12px 10px;font-size:var(--font-support);color:var(--error-text)}.history-error p{margin-bottom:8px}.muse-select{min-width:0}.muse-select .select-control{width:100%;font:inherit;font-size:var(--font-support);cursor:pointer;border:0;background:transparent}.select-value{min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.model-select .select-value{max-width:178px}.select-chevron{flex:0 0 auto;margin-left:auto;opacity:.7;transition:transform .22s cubic-bezier(.22,1,.36,1)}.select-control[aria-expanded=true] .select-chevron{transform:rotate(180deg)}.select-control[aria-expanded=true]{background:var(--selected)}.select-control:disabled{cursor:default;opacity:.55}.project-switcher .muse-select{flex:1}.project-switcher .select-control{min-height:32px;padding:6px 10px;gap:10px;border-radius:8px;border:1px solid var(--border);background:var(--soft-surface);text-align:left}.project-switcher .select-control:hover{background:var(--hover);border-color:var(--strong-border);color:var(--text)}.project-switcher .select-control:hover .sidebar-item-icon{color:var(--text)}.select-popover{position:fixed;inset:auto;margin:0;padding:6px;max-width:calc(100vw - 16px);overflow-y:auto;border-radius:14px;border:1px solid var(--border);color:var(--text);background:var(--dialog);box-shadow:0 16px 48px #0004,inset 0 1px #ffffff10;font-size:var(--font-ui)}.select-heading{padding:7px 10px 9px;font-size:var(--font-support);color:var(--muted)}.select-option{display:flex;align-items:center;gap:9px;padding:9px 10px;border-radius:8px;cursor:pointer;white-space:nowrap;transition:background-color .14s ease}.select-option.highlighted{background:var(--selected)}.select-option[aria-selected=true]{color:var(--accent)}.select-option span{overflow:hidden;text-overflow:ellipsis}[data-theme=muse] .muse-select .select-control{background:#2767c738;padding:6px 12px}[data-theme=muse] .project-switcher .select-control{background:var(--soft-surface);padding:6px 10px}[data-theme=muse] .project-switcher .select-control:hover{background:var(--hover)}[data-theme=muse] .select-option[aria-selected=true]{color:#e3edff}.voice-control{display:flex;align-items:center}.voice-control.recording .icon-button{color:#e85d6f}.voice-status{position:absolute;bottom:calc(100% + 10px);left:0;display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:12px;border:1px solid var(--border);background:var(--dialog);color:var(--text);font-size:var(--font-support);box-shadow:0 8px 28px #0002}.voice-waveform{display:inline-flex;align-items:center;gap:2.5px;height:14px}.voice-wave-bar{width:2.5px;height:14px;border-radius:999px;background:#e85d6f;transform-origin:center;transition:transform .1s ease}.voice-status .icon-button{width:25px;height:25px}.composer.is-dragging{border-color:var(--focus);box-shadow:var(--composer-shadow),0 0 0 3px var(--focus-soft)}.mention-menu button{gap:10px}.mention-menu strong{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.slash-menu{position:absolute;bottom:calc(100% + 10px);left:0;right:0;max-height:290px;overflow-y:auto;padding:7px;z-index:8;background:var(--dialog);border:1px solid var(--strong-border);border-radius:15px;box-shadow:0 12px 32px #0003}.slash-menu button{display:flex;align-items:center;gap:18px;width:100%;padding:10px 12px;border-radius:8px;text-align:left;font-size:var(--font-ui)}.slash-menu button[aria-selected=true],.slash-menu button:hover{background:var(--selected)}.slash-menu strong{min-width:72px;font-weight:500}.slash-menu span{color:var(--muted);font-size:var(--font-support)}textarea,input,[contenteditable=true]{caret-color:var(--text,#30332f)}[data-theme=daylight] textarea,[data-theme=grove] textarea{caret-color:#26362b;color-scheme:light}.app-shell[data-theme]{color:var(--text);background:var(--app-background)}.app-shell .message{background:color-mix(in srgb,var(--base) 92%,transparent);padding:14px 18px;border-radius:14px;border:1px solid var(--faint-border)}';
class kO extends G.Component {
  constructor() {
    super(...arguments), this.state = { error: null };
  }
  static getDerivedStateFromError(i) {
    return { error: i.message };
  }
  render() {
    return this.state.error ? /* @__PURE__ */ h.jsxs("div", { className: "fatal-error", children: [
      /* @__PURE__ */ h.jsx("img", { src: "./icon.png", alt: "Muse" }),
      /* @__PURE__ */ h.jsx("h1", { children: "The workspace needs to reload." }),
      /* @__PURE__ */ h.jsx("p", { children: "The interface hit an unexpected problem. Your Muse conversations are still saved by the CLI." }),
      /* @__PURE__ */ h.jsx("pre", { children: this.state.error }),
      /* @__PURE__ */ h.jsx("button", { className: "button primary", onClick: () => location.reload(), children: "Reopen the workspace" })
    ] }) : this.props.children;
  }
}
const zO = wO;
function _O(t) {
  const i = mS.createRoot(t);
  return i.render(
    /* @__PURE__ */ h.jsx(kO, { children: /* @__PURE__ */ h.jsx(vO, {}) })
  ), () => i.unmount();
}
export {
  _O as mount,
  zO as styles
};
