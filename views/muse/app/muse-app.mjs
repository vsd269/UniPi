function ev(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ud = { exports: {} }, io = {};
var gx;
function iS() {
  if (gx) return io;
  gx = 1;
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
  return io.Fragment = i, io.jsx = a, io.jsxs = a, io;
}
var bx;
function rS() {
  return bx || (bx = 1, ud.exports = iS()), ud.exports;
}
var h = rS(), cd = { exports: {} }, Oe = {};
var xx;
function aS() {
  if (xx) return Oe;
  xx = 1;
  var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), a = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), c = /* @__PURE__ */ Symbol.for("react.consumer"), f = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), m = /* @__PURE__ */ Symbol.for("react.suspense"), g = /* @__PURE__ */ Symbol.for("react.memo"), x = /* @__PURE__ */ Symbol.for("react.lazy"), b = /* @__PURE__ */ Symbol.for("react.activity"), w = /* @__PURE__ */ Symbol.for("react.view_transition"), v = Symbol.iterator;
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
  function B(C, J, re) {
    this.props = C, this.context = J, this.refs = O, this.updater = re || j;
  }
  B.prototype.isReactComponent = {}, B.prototype.setState = function(C, J) {
    if (typeof C != "object" && typeof C != "function" && C != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, C, J, "setState");
  }, B.prototype.forceUpdate = function(C) {
    this.updater.enqueueForceUpdate(this, C, "forceUpdate");
  };
  function U() {
  }
  U.prototype = B.prototype;
  function V(C, J, re) {
    this.props = C, this.context = J, this.refs = O, this.updater = re || j;
  }
  var K = V.prototype = new U();
  K.constructor = V, E(K, B.prototype), K.isPureReactComponent = !0;
  var N = Array.isArray;
  function X() {
  }
  var pe = { H: null, A: null, T: null, S: null }, je = Object.prototype.hasOwnProperty;
  function Z(C, J, re) {
    var ge = re.ref;
    return {
      $$typeof: t,
      type: C,
      key: J,
      ref: ge !== void 0 ? ge : null,
      props: re
    };
  }
  function ne(C, J) {
    return Z(C.type, J, C.props);
  }
  function le(C) {
    return typeof C == "object" && C !== null && C.$$typeof === t;
  }
  function Te(C) {
    var J = { "=": "=0", ":": "=2" };
    return "$" + C.replace(/[=:]/g, function(re) {
      return J[re];
    });
  }
  var oe = /\/+/g;
  function te(C, J) {
    return typeof C == "object" && C !== null && C.key != null ? Te("" + C.key) : J.toString(36);
  }
  function W(C) {
    switch (C.status) {
      case "fulfilled":
        return C.value;
      case "rejected":
        throw C.reason;
      default:
        switch (typeof C.status == "string" ? C.then(X, X) : (C.status = "pending", C.then(
          function(J) {
            C.status === "pending" && (C.status = "fulfilled", C.value = J);
          },
          function(J) {
            C.status === "pending" && (C.status = "rejected", C.reason = J);
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
  function ce(C, J, re, ge, Ce) {
    var $ = typeof C;
    ($ === "undefined" || $ === "boolean") && (C = null);
    var he = !1;
    if (C === null) he = !0;
    else
      switch ($) {
        case "bigint":
        case "string":
        case "number":
          he = !0;
          break;
        case "object":
          switch (C.$$typeof) {
            case t:
            case i:
              he = !0;
              break;
            case x:
              return he = C._init, ce(
                he(C._payload),
                J,
                re,
                ge,
                Ce
              );
          }
      }
    if (he)
      return Ce = Ce(C), he = ge === "" ? "." + te(C, 0) : ge, N(Ce) ? (re = "", he != null && (re = he.replace(oe, "$&/") + "/"), ce(Ce, J, re, "", function(ft) {
        return ft;
      })) : Ce != null && (le(Ce) && (Ce = ne(
        Ce,
        re + (Ce.key == null || C && C.key === Ce.key ? "" : ("" + Ce.key).replace(
          oe,
          "$&/"
        ) + "/") + he
      )), J.push(Ce)), 1;
    he = 0;
    var ae = ge === "" ? "." : ge + ":";
    if (N(C))
      for (var fe = 0; fe < C.length; fe++)
        ge = C[fe], $ = ae + te(ge, fe), he += ce(
          ge,
          J,
          re,
          $,
          Ce
        );
    else if (fe = S(C), typeof fe == "function")
      for (C = fe.call(C), fe = 0; !(ge = C.next()).done; )
        ge = ge.value, $ = ae + te(ge, fe++), he += ce(
          ge,
          J,
          re,
          $,
          Ce
        );
    else if ($ === "object") {
      if (typeof C.then == "function")
        return ce(
          W(C),
          J,
          re,
          ge,
          Ce
        );
      throw J = String(C), Error(
        "Objects are not valid as a React child (found: " + (J === "[object Object]" ? "object with keys {" + Object.keys(C).join(", ") + "}" : J) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return he;
  }
  function be(C, J, re) {
    if (C == null) return C;
    var ge = [], Ce = 0;
    return ce(C, ge, "", "", function($) {
      return J.call(re, $, Ce++);
    }), ge;
  }
  function Ne(C) {
    if (C._status === -1) {
      var J = C._result, re = J();
      re.then(
        function(ge) {
          (C._status === 0 || C._status === -1) && (C._status = 1, C._result = ge, re.status === void 0 && (re.status = "fulfilled", re.value = ge));
        },
        function(ge) {
          (C._status === 0 || C._status === -1) && (C._status = 2, C._result = ge, re.status === void 0 && (re.status = "rejected", re.reason = ge));
        }
      ), C._status === -1 && (C._status = 0, C._result = re);
    }
    if (C._status === 1) return C._result.default;
    throw C._result;
  }
  var z = typeof reportError == "function" ? reportError : function(C) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var J = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof C == "object" && C !== null && typeof C.message == "string" ? String(C.message) : String(C),
        error: C
      });
      if (!window.dispatchEvent(J)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", C);
      return;
    }
    console.error(C);
  };
  function Ve(C) {
    var J = pe.T, re = {};
    re.types = J !== null ? J.types : null, pe.T = re;
    try {
      var ge = C(), Ce = pe.S;
      Ce !== null && Ce(re, ge), typeof ge == "object" && ge !== null && typeof ge.then == "function" && ge.then(X, z);
    } catch ($) {
      z($);
    } finally {
      J !== null && re.types !== null && (J.types = re.types), pe.T = J;
    }
  }
  function it(C) {
    var J = pe.T;
    if (J !== null) {
      var re = J.types;
      re === null ? J.types = [C] : re.indexOf(C) === -1 && re.push(C);
    } else Ve(it.bind(null, C));
  }
  var T = {
    map: be,
    forEach: function(C, J, re) {
      be(
        C,
        function() {
          J.apply(this, arguments);
        },
        re
      );
    },
    count: function(C) {
      var J = 0;
      return be(C, function() {
        J++;
      }), J;
    },
    toArray: function(C) {
      return be(C, function(J) {
        return J;
      }) || [];
    },
    only: function(C) {
      if (!le(C))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return C;
    }
  };
  return Oe.Activity = b, Oe.Children = T, Oe.Component = B, Oe.Fragment = a, Oe.Profiler = s, Oe.PureComponent = V, Oe.StrictMode = o, Oe.Suspense = m, Oe.ViewTransition = w, Oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = pe, Oe.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(C) {
      return pe.H.useMemoCache(C);
    }
  }, Oe.addTransitionType = it, Oe.cache = function(C) {
    return function() {
      return C.apply(null, arguments);
    };
  }, Oe.cacheSignal = function() {
    return null;
  }, Oe.cloneElement = function(C, J, re) {
    if (C == null)
      throw Error(
        "The argument must be a React element, but you passed " + C + "."
      );
    var ge = E({}, C.props), Ce = C.key;
    if (J != null)
      for ($ in J.key !== void 0 && (Ce = "" + J.key), J)
        !je.call(J, $) || $ === "key" || $ === "__self" || $ === "__source" || $ === "ref" && J.ref === void 0 || (ge[$] = J[$]);
    var $ = arguments.length - 2;
    if ($ === 1) ge.children = re;
    else if (1 < $) {
      for (var he = Array($), ae = 0; ae < $; ae++)
        he[ae] = arguments[ae + 2];
      ge.children = he;
    }
    return Z(C.type, Ce, ge);
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
  }, Oe.createElement = function(C, J, re) {
    var ge, Ce = {}, $ = null;
    if (J != null)
      for (ge in J.key !== void 0 && ($ = "" + J.key), J)
        je.call(J, ge) && ge !== "key" && ge !== "__self" && ge !== "__source" && (Ce[ge] = J[ge]);
    var he = arguments.length - 2;
    if (he === 1) Ce.children = re;
    else if (1 < he) {
      for (var ae = Array(he), fe = 0; fe < he; fe++)
        ae[fe] = arguments[fe + 2];
      Ce.children = ae;
    }
    if (C && C.defaultProps)
      for (ge in he = C.defaultProps, he)
        Ce[ge] === void 0 && (Ce[ge] = he[ge]);
    return Z(C, $, Ce);
  }, Oe.createRef = function() {
    return { current: null };
  }, Oe.forwardRef = function(C) {
    return { $$typeof: p, render: C };
  }, Oe.isValidElement = le, Oe.lazy = function(C) {
    return {
      $$typeof: x,
      _payload: { _status: -1, _result: C },
      _init: Ne
    };
  }, Oe.memo = function(C, J) {
    return {
      $$typeof: g,
      type: C,
      compare: J === void 0 ? null : J
    };
  }, Oe.startTransition = Ve, Oe.unstable_useCacheRefresh = function() {
    return pe.H.useCacheRefresh();
  }, Oe.use = function(C) {
    return pe.H.use(C);
  }, Oe.useActionState = function(C, J, re) {
    return pe.H.useActionState(C, J, re);
  }, Oe.useCallback = function(C, J) {
    return pe.H.useCallback(C, J);
  }, Oe.useContext = function(C) {
    return pe.H.useContext(C);
  }, Oe.useDebugValue = function() {
  }, Oe.useDeferredValue = function(C, J) {
    return pe.H.useDeferredValue(C, J);
  }, Oe.useEffect = function(C, J) {
    return pe.H.useEffect(C, J);
  }, Oe.useEffectEvent = function(C) {
    return pe.H.useEffectEvent(C);
  }, Oe.useId = function() {
    return pe.H.useId();
  }, Oe.useImperativeHandle = function(C, J, re) {
    return pe.H.useImperativeHandle(C, J, re);
  }, Oe.useInsertionEffect = function(C, J) {
    return pe.H.useInsertionEffect(C, J);
  }, Oe.useLayoutEffect = function(C, J) {
    return pe.H.useLayoutEffect(C, J);
  }, Oe.useMemo = function(C, J) {
    return pe.H.useMemo(C, J);
  }, Oe.useOptimistic = function(C, J) {
    return pe.H.useOptimistic(C, J);
  }, Oe.useReducer = function(C, J, re) {
    return pe.H.useReducer(C, J, re);
  }, Oe.useRef = function(C) {
    return pe.H.useRef(C);
  }, Oe.useState = function(C) {
    return pe.H.useState(C);
  }, Oe.useSyncExternalStore = function(C, J, re) {
    return pe.H.useSyncExternalStore(
      C,
      J,
      re
    );
  }, Oe.useTransition = function() {
    return pe.H.useTransition();
  }, Oe.version = "19.3.0", Oe;
}
var yx;
function hp() {
  return yx || (yx = 1, cd.exports = aS()), cd.exports;
}
var G = hp(), fd = { exports: {} }, ro = {}, dd = { exports: {} }, pd = {};
var vx;
function lS() {
  return vx || (vx = 1, (function(t) {
    function i(W, ce) {
      var be = W.length;
      W.push(ce);
      e: for (; 0 < be; ) {
        var Ne = be - 1 >>> 1, z = W[Ne];
        if (0 < s(z, ce))
          W[Ne] = ce, W[be] = z, be = Ne;
        else break e;
      }
    }
    function a(W) {
      return W.length === 0 ? null : W[0];
    }
    function o(W) {
      if (W.length === 0) return null;
      var ce = W[0], be = W.pop();
      if (be !== ce) {
        W[0] = be;
        e: for (var Ne = 0, z = W.length, Ve = z >>> 1; Ne < Ve; ) {
          var it = 2 * (Ne + 1) - 1, T = W[it], C = it + 1, J = W[C];
          if (0 > s(T, be))
            C < z && 0 > s(J, T) ? (W[Ne] = J, W[C] = be, Ne = C) : (W[Ne] = T, W[it] = be, Ne = it);
          else if (C < z && 0 > s(J, be))
            W[Ne] = J, W[C] = be, Ne = C;
          else break e;
        }
      }
      return ce;
    }
    function s(W, ce) {
      var be = W.sortIndex - ce.sortIndex;
      return be !== 0 ? be : W.id - ce.id;
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
    var m = [], g = [], x = 1, b = null, w = 3, v = !1, S = !1, j = !1, E = !1, O = typeof setTimeout == "function" ? setTimeout : null, B = typeof clearTimeout == "function" ? clearTimeout : null, U = typeof setImmediate < "u" ? setImmediate : null;
    function V(W) {
      for (var ce = a(g); ce !== null; ) {
        if (ce.callback === null) o(g);
        else if (ce.startTime <= W)
          o(g), ce.sortIndex = ce.expirationTime, i(m, ce);
        else break;
        ce = a(g);
      }
    }
    function K(W) {
      if (j = !1, V(W), !S)
        if (a(m) !== null)
          S = !0, N || (N = !0, le());
        else {
          var ce = a(g);
          ce !== null && te(K, ce.startTime - W);
        }
    }
    var N = !1, X = -1, pe = 5, je = -1;
    function Z() {
      return E ? !0 : !(t.unstable_now() - je < pe);
    }
    function ne() {
      if (E = !1, N) {
        var W = t.unstable_now();
        je = W;
        var ce = !0;
        try {
          e: {
            S = !1, j && (j = !1, B(X), X = -1), v = !0;
            var be = w;
            try {
              t: {
                for (V(W), b = a(m); b !== null && !(b.expirationTime > W && Z()); ) {
                  var Ne = b.callback;
                  if (typeof Ne == "function") {
                    b.callback = null, w = b.priorityLevel;
                    var z = Ne(
                      b.expirationTime <= W
                    );
                    if (W = t.unstable_now(), typeof z == "function") {
                      b.callback = z, V(W), ce = !0;
                      break t;
                    }
                    b === a(m) && o(m), V(W);
                  } else o(m);
                  b = a(m);
                }
                if (b !== null) ce = !0;
                else {
                  var Ve = a(g);
                  Ve !== null && te(
                    K,
                    Ve.startTime - W
                  ), ce = !1;
                }
              }
              break e;
            } finally {
              b = null, w = be, v = !1;
            }
            ce = void 0;
          }
        } finally {
          ce ? le() : N = !1;
        }
      }
    }
    var le;
    if (typeof U == "function")
      le = function() {
        U(ne);
      };
    else if (typeof MessageChannel < "u") {
      var Te = new MessageChannel(), oe = Te.port2;
      Te.port1.onmessage = ne, le = function() {
        oe.postMessage(null);
      };
    } else
      le = function() {
        O(ne, 0);
      };
    function te(W, ce) {
      X = O(function() {
        W(t.unstable_now());
      }, ce);
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
          var ce = 3;
          break;
        default:
          ce = w;
      }
      var be = w;
      w = ce;
      try {
        return W();
      } finally {
        w = be;
      }
    }, t.unstable_requestPaint = function() {
      E = !0;
    }, t.unstable_runWithPriority = function(W, ce) {
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
      var be = w;
      w = W;
      try {
        return ce();
      } finally {
        w = be;
      }
    }, t.unstable_scheduleCallback = function(W, ce, be) {
      var Ne = t.unstable_now();
      switch (typeof be == "object" && be !== null ? (be = be.delay, be = typeof be == "number" && 0 < be ? Ne + be : Ne) : be = Ne, W) {
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
      return z = be + z, W = {
        id: x++,
        callback: ce,
        priorityLevel: W,
        startTime: be,
        expirationTime: z,
        sortIndex: -1
      }, be > Ne ? (W.sortIndex = be, i(g, W), a(m) === null && W === a(g) && (j ? (B(X), X = -1) : j = !0, te(K, be - Ne))) : (W.sortIndex = z, i(m, W), S || v || (S = !0, N || (N = !0, le()))), W;
    }, t.unstable_shouldYield = Z, t.unstable_wrapCallback = function(W) {
      var ce = w;
      return function() {
        var be = w;
        w = ce;
        try {
          return W.apply(this, arguments);
        } finally {
          w = be;
        }
      };
    };
  })(pd)), pd;
}
var wx;
function oS() {
  return wx || (wx = 1, dd.exports = lS()), dd.exports;
}
var hd = { exports: {} }, Gt = {};
var kx;
function sS() {
  if (kx) return Gt;
  kx = 1;
  var t = hp();
  function i(x) {
    var b = "https://react.dev/errors/" + x;
    if (1 < arguments.length) {
      b += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var w = 2; w < arguments.length; w++)
        b += "&args[]=" + encodeURIComponent(arguments[w]);
    }
    return "Minified React error #" + x + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function p(x, b, w) {
    var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: v == null ? null : v === f ? f : "" + v,
      children: x,
      containerInfo: b,
      implementation: w
    };
  }
  var m = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function g(x, b) {
    if (x === "font") return "";
    if (typeof b == "string")
      return b === "use-credentials" ? b : "";
  }
  return Gt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Gt.browser = function(x) {
    return { $$typeof: c, _reason: x };
  }, Gt.createPortal = function(x, b) {
    var w = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!b || b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11)
      throw Error(i(299));
    return p(x, b, null, w);
  }, Gt.flushSync = function(x) {
    var b = m.T, w = o.p;
    try {
      if (m.T = null, o.p = 2, x) return x();
    } finally {
      m.T = b, o.p = w, o.d.f();
    }
  }, Gt.preconnect = function(x, b) {
    typeof x == "string" && (b ? (b = b.crossOrigin, b = typeof b == "string" ? b === "use-credentials" ? b : "" : void 0) : b = null, o.d.C(x, b));
  }, Gt.prefetchDNS = function(x) {
    typeof x == "string" && o.d.D(x);
  }, Gt.preinit = function(x, b) {
    if (typeof x == "string" && b && typeof b.as == "string") {
      var w = b.as, v = g(w, b.crossOrigin), S = typeof b.integrity == "string" ? b.integrity : void 0, j = typeof b.fetchPriority == "string" ? b.fetchPriority : void 0;
      w === "style" ? o.d.S(
        x,
        typeof b.precedence == "string" ? b.precedence : void 0,
        {
          crossOrigin: v,
          integrity: S,
          fetchPriority: j
        }
      ) : w === "script" && o.d.X(x, {
        crossOrigin: v,
        integrity: S,
        fetchPriority: j,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0
      });
    }
  }, Gt.preinitModule = function(x, b) {
    if (typeof x == "string")
      if (typeof b == "object" && b !== null) {
        if (b.as == null || b.as === "script") {
          var w = g(
            b.as,
            b.crossOrigin
          );
          o.d.M(x, {
            crossOrigin: w,
            integrity: typeof b.integrity == "string" ? b.integrity : void 0,
            nonce: typeof b.nonce == "string" ? b.nonce : void 0,
            fetchPriority: typeof b.fetchPriority == "string" ? b.fetchPriority : void 0
          });
        }
      } else b == null && o.d.M(x);
  }, Gt.preload = function(x, b) {
    if (typeof x == "string" && typeof b == "object" && b !== null && typeof b.as == "string") {
      var w = b.as, v = g(w, b.crossOrigin);
      o.d.L(x, w, {
        crossOrigin: v,
        integrity: typeof b.integrity == "string" ? b.integrity : void 0,
        nonce: typeof b.nonce == "string" ? b.nonce : void 0,
        type: typeof b.type == "string" ? b.type : void 0,
        fetchPriority: typeof b.fetchPriority == "string" ? b.fetchPriority : void 0,
        referrerPolicy: typeof b.referrerPolicy == "string" ? b.referrerPolicy : void 0,
        imageSrcSet: typeof b.imageSrcSet == "string" ? b.imageSrcSet : void 0,
        imageSizes: typeof b.imageSizes == "string" ? b.imageSizes : void 0,
        media: typeof b.media == "string" ? b.media : void 0
      });
    }
  }, Gt.preloadModule = function(x, b) {
    if (typeof x == "string")
      if (b) {
        var w = g(b.as, b.crossOrigin);
        o.d.m(x, {
          as: typeof b.as == "string" && b.as !== "script" ? b.as : void 0,
          crossOrigin: w,
          integrity: typeof b.integrity == "string" ? b.integrity : void 0,
          nonce: typeof b.nonce == "string" ? b.nonce : void 0,
          fetchPriority: typeof b.fetchPriority == "string" ? b.fetchPriority : void 0
        });
      } else o.d.m(x);
  }, Gt.requestFormReset = function(x) {
    o.d.r(x);
  }, Gt.unstable_batchedUpdates = function(x, b) {
    return x(b);
  }, Gt.useFormState = function(x, b, w) {
    return m.H.useFormState(x, b, w);
  }, Gt.useFormStatus = function() {
    return m.H.useHostTransitionStatus();
  }, Gt.version = "19.3.0", Gt;
}
var Sx;
function uS() {
  if (Sx) return hd.exports;
  Sx = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (i) {
        console.error(i);
      }
  }
  return t(), hd.exports = sS(), hd.exports;
}
var zx;
function cS() {
  if (zx) return ro;
  zx = 1;
  var t = oS(), i = hp(), a = uS();
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
  function x(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (n = x(e), n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  function b(e, n, r, l, u, d) {
    for (; e !== null; ) {
      if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && r(e, l, u, d) || (e.tag !== 22 || e.memoizedState === null) && (n || e.tag !== 5 && e.tag !== 27) && b(
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
  var O = null, B = null;
  function U(e, n, r) {
    return e === r ? !0 : e === n ? (O = e, !0) : !1;
  }
  function V(e, n, r) {
    return e === r ? (B = e, !1) : e === n ? (B !== null && (O = e), !0) : !1;
  }
  function K(e) {
    if (e === null) return null;
    do
      e = e === null ? null : e.return;
    while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
    return e || null;
  }
  function N(e, n, r) {
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
  var X = Object.assign, pe = /* @__PURE__ */ Symbol.for("react.element"), je = /* @__PURE__ */ Symbol.for("react.transitional.element"), Z = /* @__PURE__ */ Symbol.for("react.portal"), ne = /* @__PURE__ */ Symbol.for("react.fragment"), le = /* @__PURE__ */ Symbol.for("react.strict_mode"), Te = /* @__PURE__ */ Symbol.for("react.profiler"), oe = /* @__PURE__ */ Symbol.for("react.consumer"), te = /* @__PURE__ */ Symbol.for("react.context"), W = /* @__PURE__ */ Symbol.for("react.forward_ref"), ce = /* @__PURE__ */ Symbol.for("react.suspense"), be = /* @__PURE__ */ Symbol.for("react.suspense_list"), Ne = /* @__PURE__ */ Symbol.for("react.memo"), z = /* @__PURE__ */ Symbol.for("react.lazy"), Ve = /* @__PURE__ */ Symbol.for("react.activity"), it = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), T = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), C = /* @__PURE__ */ Symbol.for("react.view_transition"), J = /* @__PURE__ */ Symbol.for("react.recoverable"), re = Symbol.iterator;
  function ge(e) {
    return e === null || typeof e != "object" ? null : (e = re && e[re] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ce = /* @__PURE__ */ Symbol.for("react.client.reference");
  function $(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ce ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ne:
        return "Fragment";
      case Te:
        return "Profiler";
      case le:
        return "StrictMode";
      case ce:
        return "Suspense";
      case be:
        return "SuspenseList";
      case Ve:
        return "Activity";
      case C:
        return "ViewTransition";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Z:
          return "Portal";
        case te:
          return e.displayName || "Context";
        case oe:
          return (e._context.displayName || "Context") + ".Consumer";
        case W:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Ne:
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
  var he = Array.isArray, ae = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, fe = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ft = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, vn = [], Jt = -1;
  function at(e) {
    return { current: e };
  }
  function Ie(e) {
    0 > Jt || (e.current = vn[Jt], vn[Jt] = null, Jt--);
  }
  function Ge(e, n) {
    Jt++, vn[Jt] = e.current, e.current = n;
  }
  var Ot = at(null), Xt = at(null), xt = at(null), Mn = at(null);
  function zi(e, n) {
    switch (Ge(xt, n), Ge(Xt, e), Ge(Ot, null), n.nodeType) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? _b(e) : 0;
        break;
      default:
        if (e = n.tagName, n = n.namespaceURI)
          n = _b(n), e = jb(n, e);
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
    Ie(Ot), Ge(Ot, e);
  }
  function Rn() {
    Ie(Ot), Ie(Xt), Ie(xt);
  }
  function _i(e) {
    var n = e.memoizedState;
    n !== null && (Ka._currentValue = n.memoizedState, Ge(Mn, e)), n = Ot.current;
    var r = jb(n, e.type);
    n !== r && (Ge(Xt, e), Ge(Ot, r));
  }
  function Un(e) {
    Xt.current === e && (Ie(Ot), Ie(Xt)), Mn.current === e && (Ie(Mn), Ka._currentValue = ft);
  }
  var Y, ee;
  function ke(e) {
    if (Y === void 0)
      try {
        throw Error();
      } catch (r) {
        var n = r.stack.trim().match(/\n( *(at )?)/);
        Y = n && n[1] || "", ee = -1 < r.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < r.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Y + e + ee;
  }
  var Ae = !1;
  function Ue(e, n) {
    if (!e || Ae) return "";
    Ae = !0;
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
                } catch (se) {
                  var D = se;
                }
                Reflect.construct(e, [], Q);
              } else {
                try {
                  Q.call();
                } catch (se) {
                  D = se;
                }
                Q = !1;
                try {
                  var I = Object.getOwnPropertyDescriptor(
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
                  Q && (I !== void 0 ? Object.defineProperty(e.prototype, "props", I) : delete e.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (se) {
                D = se;
              }
              (Q = e()) && typeof Q.catch == "function" && Q.catch(function() {
              });
            }
          } catch (se) {
            if (se && D && typeof se.stack == "string")
              return [se.stack, D.stack];
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
      Ae = !1, Error.prepareStackTrace = r;
    }
    return (r = e ? e.displayName || e.name : "") ? ke(r) : "";
  }
  function Ke(e, n) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ke(e.type);
      case 16:
        return ke("Lazy");
      case 13:
        return e.child !== n && n !== null ? ke("Suspense Fallback") : ke("Suspense");
      case 19:
        return ke("SuspenseList");
      case 0:
      case 15:
        return Ue(e.type, !1);
      case 11:
        return Ue(e.type.render, !1);
      case 1:
        return Ue(e.type, !0);
      case 31:
        return ke("Activity");
      case 30:
        return ke("ViewTransition");
      default:
        return "";
    }
  }
  function mt(e) {
    try {
      var n = "", r = null;
      do
        n += Ke(e, r), r = e, e = e.return;
      while (e);
      return n;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var _t = Object.prototype.hasOwnProperty, wn = t.unstable_scheduleCallback, Ln = t.unstable_cancelCallback, on = t.unstable_shouldYield, Wt = t.unstable_requestPaint, dt = t.unstable_now, Dt = t.unstable_getCurrentPriorityLevel, Bn = t.unstable_ImmediatePriority, sn = t.unstable_UserBlockingPriority, sa = t.unstable_NormalPriority, Co = t.unstable_LowPriority, To = t.unstable_IdlePriority, fl = t.log, ua = t.unstable_setDisableYieldValue, H = null, de = null;
  function xe(e) {
    if (typeof fl == "function" && ua(e), de && typeof de.setStrictMode == "function")
      try {
        de.setStrictMode(H, e);
      } catch {
      }
  }
  var ye = Math.clz32 ? Math.clz32 : Wn, un = Math.log, kn = Math.LN2;
  function Wn(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (un(e) / kn | 0) | 0;
  }
  var ji = 256, ca = 262144, Fe = 4194304;
  function yt(e) {
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
  function It(e, n, r) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var u = 0, d = e.suspendedLanes, y = e.pingedLanes;
    e = e.warmLanes;
    var k = l & 134217727;
    return k !== 0 ? (l = k & ~d, l !== 0 ? u = yt(l) : (y &= k, y !== 0 ? u = yt(y) : r || (r = k & ~e, r !== 0 && (u = yt(r))))) : (k = l & ~d, k !== 0 ? u = yt(k) : y !== 0 ? u = yt(y) : r || (r = l & ~e, r !== 0 && (u = yt(r)))), u === 0 ? 0 : n !== 0 && n !== u && (n & d) === 0 && (d = u & -u, r = n & -n, d >= r || d === 32 && (r & 4194048) !== 0) ? n : u;
  }
  function Ei(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function Kp(e, n) {
    (n & 8) !== 0 && (n |= n & 32);
    var r = e.entangledLanes;
    if (r !== 0)
      for (e = e.entanglements, r &= n; 0 < r; ) {
        var l = 31 - ye(r), u = 1 << l;
        n |= e[l], r &= ~u;
      }
    return n;
  }
  function bw(e, n) {
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
  function Jp() {
    var e = Fe;
    return Fe <<= 1, (Fe & 62914560) === 0 && (Fe = 4194304), e;
  }
  function Ru(e) {
    for (var n = [], r = 0; 31 > r; r++) n.push(e);
    return n;
  }
  function dl(e, n) {
    e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function xw(e, n, r, l, u, d) {
    var y = e.pendingLanes;
    e.pendingLanes = r, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= r, e.entangledLanes &= r, e.errorRecoveryDisabledLanes &= r, e.shellSuspendCounter = 0;
    var k = e.entanglements, _ = e.expirationTimes, R = e.hiddenUpdates;
    for (r = y & ~r; 0 < r; ) {
      var q = 31 - ye(r), Q = 1 << q;
      k[q] = 0, _[q] = -1;
      var D = R[q];
      if (D !== null)
        for (R[q] = null, q = 0; q < D.length; q++) {
          var I = D[q];
          I !== null && (I.lane &= -536870913);
        }
      r &= ~Q;
    }
    l !== 0 && Wp(e, l, 0), d !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= d & ~(y & ~n));
  }
  function Wp(e, n, r) {
    e.pendingLanes |= n, e.suspendedLanes &= ~n;
    var l = 31 - ye(n);
    e.entangledLanes |= n, e.entanglements[l] = e.entanglements[l] | 1073741824 | r & 261930;
  }
  function eh(e, n) {
    var r = e.entangledLanes |= n;
    for (e = e.entanglements; r; ) {
      var l = 31 - ye(r), u = 1 << l;
      u & n | e[l] & n && (e[l] |= n), r &= ~u;
    }
  }
  function th(e, n) {
    var r = n & -n;
    return r = (r & 42) !== 0 ? 1 : Uu(r), (r & (e.suspendedLanes | n)) !== 0 ? 0 : r;
  }
  function Uu(e) {
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
  function Lu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function nh() {
    var e = fe.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : ux(e.type));
  }
  function ih(e, n) {
    var r = fe.p;
    try {
      return fe.p = e, n();
    } finally {
      fe.p = r;
    }
  }
  var Ci = Math.random().toString(36).slice(2), Ht = "__reactFiber$" + Ci, cn = "__reactProps$" + Ci, fa = "__reactContainer$" + Ci, rh = "__reactEvents$" + Ci, yw = "__reactListeners$" + Ci, vw = "__reactHandles$" + Ci, ah = "__reactResources$" + Ci, pl = "__reactMarker$" + Ci, No = "__reactLoad$" + Ci;
  function Ao(e) {
    delete e[Ht], delete e[cn], delete e[yw], delete e[vw];
  }
  function Cr(e) {
    var n;
    if (n = e[Ht]) return n;
    for (var r = e.parentNode; r; ) {
      if (n = r[fa] || r[Ht]) {
        if (r = n.alternate, n.child !== null || r !== null && r.child !== null)
          for (e = $b(e); e !== null; ) {
            if (r = e[Ht]) return r;
            e = $b(e);
          }
        return n;
      }
      e = r, r = e.parentNode;
    }
    return null;
  }
  function da(e) {
    if (e = e[Ht] || e[fa]) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
        return e;
    }
    return null;
  }
  function hl(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(o(33));
  }
  function pa(e) {
    var n = e[ah];
    return n || (n = e[ah] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Rt(e) {
    e[pl] = !0;
  }
  function lh(e) {
    e[No] = void 0;
  }
  var oh = /* @__PURE__ */ new Set(), sh = {};
  function Tr(e, n) {
    ha(e, n), ha(e + "Capture", n);
  }
  function ha(e, n) {
    for (sh[e] = n, e = 0; e < n.length; e++)
      oh.add(n[e]);
  }
  var ww = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), uh = {}, ch = {};
  function kw(e) {
    return _t.call(ch, e) ? !0 : _t.call(uh, e) ? !1 : ww.test(e) ? ch[e] = !0 : (uh[e] = !0, !1);
  }
  var Xe = !1;
  function fh() {
    var e = Xe;
    return Xe = !1, e;
  }
  function Oo(e, n, r) {
    if (kw(n))
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
  function Do(e, n, r) {
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
  function Ti(e, n, r, l) {
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
  function Sn(e) {
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
  function dh(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Sw(e, n, r) {
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
  function Bu(e) {
    if (!e._valueTracker) {
      var n = dh(e) ? "checked" : "value";
      e._valueTracker = Sw(
        e,
        n,
        "" + e[n]
      );
    }
  }
  function ph(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var r = n.getValue(), l = "";
    return e && (l = dh(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== r ? (n.setValue(e), !0) : !1;
  }
  var zw = /[\n"\\]/g;
  function In(e) {
    return e.replace(
      zw,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Iu(e, n, r, l, u, d, y, k) {
    e.name = "", y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.type = y : e.removeAttribute("type"), n != null ? y === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + Sn(n)) : e.value !== "" + Sn(n) && (e.value = "" + Sn(n)) : y !== "submit" && y !== "reset" || e.removeAttribute("value"), n != null ? y === "number" && e.value == n ? Hu(e, Sn(e.value)) : Hu(e, Sn(n)) : r != null ? Hu(e, Sn(r)) : l != null && e.removeAttribute("value"), u == null && d != null && (e.defaultChecked = !!d), u != null && (e.checked = u && typeof u != "function" && typeof u != "symbol"), k != null && typeof k != "function" && typeof k != "symbol" && typeof k != "boolean" ? e.name = "" + Sn(k) : e.removeAttribute("name");
  }
  function hh(e, n, r, l, u, d, y, k) {
    if (d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.type = d), n != null || r != null) {
      if (!(d !== "submit" && d !== "reset" || n != null)) {
        Bu(e);
        return;
      }
      r = r != null ? "" + Sn(r) : "", n = n != null ? "" + Sn(n) : r, k || n === e.value || (e.value = n), e.defaultValue = n;
    }
    l = l ?? u, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = k ? e.checked : !!l, e.defaultChecked = !!l, y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (e.name = y), Bu(e);
  }
  function Hu(e, n) {
    e.defaultValue !== "" + n && (e.defaultValue = "" + n);
  }
  function ma(e, n, r, l) {
    if (e = e.options, n) {
      n = {};
      for (var u = 0; u < r.length; u++)
        n["$" + r[u]] = !0;
      for (r = 0; r < e.length; r++)
        u = n.hasOwnProperty("$" + e[r].value), e[r].selected !== u && (e[r].selected = u), u && l && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + Sn(r), n = null, u = 0; u < e.length; u++) {
        if (e[u].value === r) {
          e[u].selected = !0, l && (e[u].defaultSelected = !0);
          return;
        }
        n !== null || e[u].disabled || (n = e[u]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function mh(e, n, r) {
    if (n != null && (n = "" + Sn(n), n !== e.value && (e.value = n), r == null)) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = r != null ? "" + Sn(r) : "";
  }
  function gh(e, n, r, l) {
    if (n == null) {
      if (l != null) {
        if (r != null) throw Error(o(92));
        if (he(l)) {
          if (1 < l.length) throw Error(o(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), n = r;
    }
    r = Sn(n), e.defaultValue = r, l = e.textContent, l === r && l !== "" && l !== null && (e.value = l), Bu(e);
  }
  function ga(e, n) {
    if (n) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var _w = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function bh(e, n, r) {
    var l = n.indexOf("--") === 0;
    r == null || typeof r == "boolean" || r === "" ? l ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : l ? e.setProperty(n, r) : typeof r != "number" || r === 0 || _w.has(n) ? n === "float" ? e.cssFloat = r : e[n] = ("" + r).trim() : e[n] = r + "px";
  }
  function xh(e, n, r) {
    if (n != null && typeof n != "object")
      throw Error(o(62));
    if (e = e.style, r != null) {
      for (var l in r)
        !r.hasOwnProperty(l) || n != null && n.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "", Xe = !0);
      for (var u in n)
        l = n[u], n.hasOwnProperty(u) && r[u] !== l && (bh(e, u, l), Xe = !0);
    } else
      for (var d in n)
        n.hasOwnProperty(d) && bh(e, d, n[d]);
  }
  function Zu(e) {
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
  var jw = /* @__PURE__ */ new Map([
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
  ]), Ew = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Mo(e) {
    return Ew.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function si() {
  }
  var qu = null;
  function $u(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var ba = null, xa = null;
  function yh(e) {
    var n = da(e);
    if (n && (e = n.stateNode)) {
      var r = e[cn] || null;
      e: switch (e = n.stateNode, n.type) {
        case "input":
          if (Iu(
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
              'input[name="' + In(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < r.length; n++) {
              var l = r[n];
              if (l !== e && l.form === e.form) {
                var u = l[cn] || null;
                if (!u) throw Error(o(90));
                Iu(
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
              l = r[n], l.form === e.form && ph(l);
          }
          break e;
        case "textarea":
          mh(e, r.value, r.defaultValue);
          break e;
        case "select":
          n = r.value, n != null && ma(e, !!r.multiple, n, !1);
      }
    }
  }
  var Vu = !1;
  function vh(e, n, r) {
    if (Vu) return e(n, r);
    Vu = !0;
    try {
      var l = e(n);
      return l;
    } finally {
      if (Vu = !1, (ba !== null || xa !== null) && (Ms(), ba && (n = ba, e = xa, xa = ba = null, yh(n), e)))
        for (n = 0; n < e.length; n++) yh(e[n]);
    }
  }
  function ml(e, n) {
    var r = e.stateNode;
    if (r === null) return null;
    var l = r[cn] || null;
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
  var Ni = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Yu = !1;
  if (Ni)
    try {
      var gl = {};
      Object.defineProperty(gl, "passive", {
        get: function() {
          Yu = !0;
        }
      }), window.addEventListener("test", gl, gl), window.removeEventListener("test", gl, gl);
    } catch {
      Yu = !1;
    }
  var Fi = null, Gu = null, Ro = null;
  function wh() {
    if (Ro) return Ro;
    var e, n = Gu, r = n.length, l, u = "value" in Fi ? Fi.value : Fi.textContent, d = u.length;
    for (e = 0; e < r && n[e] === u[e]; e++) ;
    var y = r - e;
    for (l = 1; l <= y && n[r - l] === u[d - l]; l++) ;
    return Ro = u.slice(e, 1 < l ? 1 - l : void 0);
  }
  function Uo(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Lo() {
    return !0;
  }
  function kh() {
    return !1;
  }
  function en(e) {
    function n(r, l, u, d, y) {
      this._reactName = r, this._targetInst = u, this.type = l, this.nativeEvent = d, this.target = y, this.currentTarget = null;
      for (var k in e)
        e.hasOwnProperty(k) && (r = e[k], this[k] = r ? r(d) : d[k]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Lo : kh, this.isPropagationStopped = kh, this;
    }
    return X(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = Lo);
      },
      stopPropagation: function() {
        var r = this.nativeEvent;
        r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = Lo);
      },
      persist: function() {
      },
      isPersistent: Lo
    }), n;
  }
  var Xi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Bo = en(Xi), bl = X({}, Xi, { view: 0, detail: 0 }), Cw = en(bl), Fu, Xu, xl, Io = X({}, bl, {
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
    getModifierState: Pu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== xl && (xl && e.type === "mousemove" ? (Fu = e.screenX - xl.screenX, Xu = e.screenY - xl.screenY) : Xu = Fu = 0, xl = e), Fu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Xu;
    }
  }), Sh = en(Io), Tw = X({}, Io, { dataTransfer: 0 }), Nw = en(Tw), Aw = X({}, bl, { relatedTarget: 0 }), Qu = en(Aw), Ow = X({}, Xi, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Dw = en(Ow), Mw = X({}, Xi, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Rw = en(Mw), Uw = X({}, Xi, { data: 0 }), zh = en(Uw), Lw = {
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
  }, Bw = {
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
  }, Iw = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Hw(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = Iw[e]) ? !!n[e] : !1;
  }
  function Pu() {
    return Hw;
  }
  var Zw = X({}, bl, {
    key: function(e) {
      if (e.key) {
        var n = Lw[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress" ? (e = Uo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Bw[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Pu,
    charCode: function(e) {
      return e.type === "keypress" ? Uo(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Uo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), qw = en(Zw), $w = X({}, Io, {
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
  }), _h = en($w), Vw = X({}, Xi, { submitter: 0 }), Yw = en(Vw), Gw = X({}, bl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Pu
  }), Fw = en(Gw), Xw = X({}, Xi, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Qw = en(Xw), Pw = X({}, Io, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Kw = en(Pw), Jw = X({}, Xi, {
    newState: 0,
    oldState: 0,
    source: 0
  }), Ww = en(Jw), e2 = [9, 13, 27, 32], Ku = Ni && "CompositionEvent" in window, yl = null;
  Ni && "documentMode" in document && (yl = document.documentMode);
  var t2 = Ni && "TextEvent" in window && !yl, jh = Ni && (!Ku || yl && 8 < yl && 11 >= yl), Eh = " ", Ch = !1;
  function Th(e, n) {
    switch (e) {
      case "keyup":
        return e2.indexOf(n.keyCode) !== -1;
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
  function Nh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var ya = !1;
  function n2(e, n) {
    switch (e) {
      case "compositionend":
        return Nh(n);
      case "keypress":
        return n.which !== 32 ? null : (Ch = !0, Eh);
      case "textInput":
        return e = n.data, e === Eh && Ch ? null : e;
      default:
        return null;
    }
  }
  function i2(e, n) {
    if (ya)
      return e === "compositionend" || !Ku && Th(e, n) ? (e = wh(), Ro = Gu = Fi = null, ya = !1, e) : null;
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
        return jh && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var r2 = {
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
  function Ah(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!r2[e.type] : n === "textarea";
  }
  function Oh(e, n, r, l) {
    ba ? xa ? xa.push(l) : xa = [l] : ba = l, n = Hs(n, "onChange"), 0 < n.length && (r = new Bo(
      "onChange",
      "change",
      null,
      r,
      l
    ), e.push({ event: r, listeners: n }));
  }
  var vl = null, wl = null;
  function a2(e) {
    yb(e, 0);
  }
  function Ho(e) {
    var n = hl(e);
    if (ph(n)) return e;
  }
  function Dh(e, n) {
    if (e === "change") return n;
  }
  var Mh = !1;
  if (Ni) {
    var Ju;
    if (Ni) {
      var Wu = "oninput" in document;
      if (!Wu) {
        var Rh = document.createElement("div");
        Rh.setAttribute("oninput", "return;"), Wu = typeof Rh.oninput == "function";
      }
      Ju = Wu;
    } else Ju = !1;
    Mh = Ju && (!document.documentMode || 9 < document.documentMode);
  }
  function Uh() {
    vl && (vl.detachEvent("onpropertychange", Lh), wl = vl = null);
  }
  function Lh(e) {
    if (e.propertyName === "value" && Ho(wl)) {
      var n = [];
      Oh(
        n,
        wl,
        e,
        $u(e)
      ), vh(a2, n);
    }
  }
  function l2(e, n, r) {
    e === "focusin" ? (Uh(), vl = n, wl = r, vl.attachEvent("onpropertychange", Lh)) : e === "focusout" && Uh();
  }
  function o2(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Ho(wl);
  }
  function s2(e, n) {
    if (e === "click") return Ho(n);
  }
  function u2(e, n) {
    if (e === "input" || e === "change")
      return Ho(n);
  }
  function c2(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var zn = typeof Object.is == "function" ? Object.is : c2;
  function kl(e, n) {
    if (zn(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var r = Object.keys(e), l = Object.keys(n);
    if (r.length !== l.length) return !1;
    for (l = 0; l < r.length; l++) {
      var u = r[l];
      if (!_t.call(n, u) || !zn(e[u], n[u]))
        return !1;
    }
    return !0;
  }
  function ec(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Bh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ih(e, n) {
    var r = Bh(e);
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
      r = Bh(r);
    }
  }
  function Hh(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Hh(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Zh(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var n = ec(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof n.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = n.contentWindow;
      else break;
      n = ec(e.document);
    }
    return n;
  }
  function tc(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  var f2 = Ni && "documentMode" in document && 11 >= document.documentMode, va = null, nc = null, Sl = null, ic = !1;
  function qh(e, n, r) {
    var l = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    ic || va == null || va !== ec(l) || (l = va, "selectionStart" in l && tc(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Sl && kl(Sl, l) || (Sl = l, l = Hs(nc, "onSelect"), 0 < l.length && (n = new Bo(
      "onSelect",
      "select",
      null,
      n,
      r
    ), e.push({ event: n, listeners: l }), n.target = va)));
  }
  function Nr(e, n) {
    var r = {};
    return r[e.toLowerCase()] = n.toLowerCase(), r["Webkit" + e] = "webkit" + n, r["Moz" + e] = "moz" + n, r;
  }
  var wa = {
    animationend: Nr("Animation", "AnimationEnd"),
    animationiteration: Nr("Animation", "AnimationIteration"),
    animationstart: Nr("Animation", "AnimationStart"),
    transitionrun: Nr("Transition", "TransitionRun"),
    transitionstart: Nr("Transition", "TransitionStart"),
    transitioncancel: Nr("Transition", "TransitionCancel"),
    transitionend: Nr("Transition", "TransitionEnd")
  }, rc = {}, $h = {};
  Ni && ($h = document.createElement("div").style, "AnimationEvent" in window || (delete wa.animationend.animation, delete wa.animationiteration.animation, delete wa.animationstart.animation), "TransitionEvent" in window || delete wa.transitionend.transition);
  function Ar(e) {
    if (rc[e]) return rc[e];
    if (!wa[e]) return e;
    var n = wa[e], r;
    for (r in n)
      if (n.hasOwnProperty(r) && r in $h)
        return rc[e] = n[r];
    return e;
  }
  var Vh = Ar("animationend"), Yh = Ar("animationiteration"), Gh = Ar("animationstart"), d2 = Ar("transitionrun"), p2 = Ar("transitionstart"), h2 = Ar("transitioncancel"), Fh = Ar("transitionend"), Xh = /* @__PURE__ */ new Map(), ac = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ac.push("scrollEnd");
  function ei(e, n) {
    Xh.set(e, n), Tr(n, [e]);
  }
  var m2 = 0;
  function Ai(e, n) {
    if (e.name != null && e.name !== "auto") return e.name;
    if (n.autoName !== null) return n.autoName;
    e = ri.identifierPrefix;
    var r = m2++;
    return e = "_" + e + "t_" + r.toString(32) + "_", n.autoName = e;
  }
  function Qh(e) {
    if (e == null || typeof e == "string")
      return e;
    var n = null, r = Za;
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
  function Oi(e, n) {
    return e = Qh(e), n = Qh(n), n == null ? e === "auto" ? null : e : n === "auto" ? null : n;
  }
  var Zo = typeof reportError == "function" ? reportError : function(e) {
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
  }, Hn = [], ka = 0, lc = 0;
  function qo() {
    for (var e = ka, n = lc = ka = 0; n < e; ) {
      var r = Hn[n];
      Hn[n++] = null;
      var l = Hn[n];
      Hn[n++] = null;
      var u = Hn[n];
      Hn[n++] = null;
      var d = Hn[n];
      if (Hn[n++] = null, l !== null && u !== null) {
        var y = l.pending;
        y === null ? u.next = u : (u.next = y.next, y.next = u), l.pending = u;
      }
      d !== 0 && Ph(r, u, d);
    }
  }
  function $o(e, n, r, l) {
    Hn[ka++] = e, Hn[ka++] = n, Hn[ka++] = r, Hn[ka++] = l, lc |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function oc(e, n, r, l) {
    return $o(e, n, r, l), Vo(e);
  }
  function Or(e, n) {
    return $o(e, null, null, n), Vo(e);
  }
  function Ph(e, n, r) {
    e.lanes |= r;
    var l = e.alternate;
    l !== null && (l.lanes |= r);
    for (var u = !1, d = e.return; d !== null; )
      d.childLanes |= r, l = d.alternate, l !== null && (l.childLanes |= r), d.tag === 22 && (e = d.stateNode, e === null || e._visibility & 1 || (u = !0)), e = d, d = d.return;
    return e.tag === 3 ? (d = e.stateNode, u && n !== null && (u = 31 - ye(r), e = d.hiddenUpdates, l = e[u], l === null ? e[u] = [n] : l.push(n), n.lane = r | 536870912), d) : null;
  }
  function Vo(e) {
    if (50 < Yl)
      throw Yl = 0, Ds = null, Error(o(185));
    for (var n = e.return; n !== null; )
      e = n, n = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Sa = {};
  function g2(e, n, r, l) {
    this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function fn(e, n, r, l) {
    return new g2(e, n, r, l);
  }
  function sc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Di(e, n) {
    var r = e.alternate;
    return r === null ? (r = fn(
      e.tag,
      n,
      e.key,
      e.mode
    ), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = n, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 1206910976, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, n = e.dependencies, r.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r.refCleanup = e.refCleanup, r;
  }
  function Kh(e, n) {
    e.flags &= 1206910978;
    var r = e.alternate;
    return r === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = r.childLanes, e.lanes = r.lanes, e.child = r.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = r.memoizedProps, e.memoizedState = r.memoizedState, e.updateQueue = r.updateQueue, e.type = r.type, n = r.dependencies, e.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), e;
  }
  function Yo(e, n, r, l, u, d) {
    var y = 0;
    if (l = e, typeof l == "function") sc(l) && (y = 1);
    else if (typeof l == "string")
      y = Vk(
        e,
        r,
        Ot.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (l) {
        case Ve:
          return e = fn(31, r, n, u), e.elementType = Ve, e.lanes = d, e;
        case ne:
          return Dr(r.children, u, d, n);
        case le:
          y = 8, u |= 24;
          break;
        case Te:
          return e = fn(12, r, n, u | 2), e.elementType = Te, e.lanes = d, e;
        case ce:
          return e = fn(13, r, n, u), e.elementType = ce, e.lanes = d, e;
        case be:
          return e = fn(19, r, n, u), e.elementType = be, e.lanes = d, e;
        case it:
        case C:
          return e = u | 32, e = fn(30, r, n, e), e.elementType = C, e.lanes = d, e.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, e;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case te:
                y = 10;
                break e;
              case oe:
                y = 9;
                break e;
              case W:
                y = 11;
                break e;
              case Ne:
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
    return n = fn(y, r, n, u), n.elementType = e, n.type = l, n.lanes = d, n;
  }
  function Dr(e, n, r, l) {
    return e = fn(7, e, l, n), e.lanes = r, e;
  }
  function uc(e, n, r) {
    return e = fn(6, e, null, n), e.lanes = r, e;
  }
  function Jh(e) {
    var n = fn(18, null, null, 0);
    return n.stateNode = e, n;
  }
  function cc(e, n, r) {
    return n = fn(
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
  var Wh = /* @__PURE__ */ new WeakMap();
  function Zn(e, n) {
    if (typeof e == "object" && e !== null) {
      var r = Wh.get(e);
      return r !== void 0 ? r : (n = {
        value: e,
        source: n,
        stack: mt(n)
      }, Wh.set(e, n), n);
    }
    return {
      value: e,
      source: n,
      stack: mt(n)
    };
  }
  var za = [], _a = 0, Go = null, zl = 0, qn = [], $n = 0, Qi = null, ui = 1, ci = "";
  function Mi(e, n) {
    za[_a++] = zl, za[_a++] = Go, Go = e, zl = n;
  }
  function em(e, n, r) {
    qn[$n++] = ui, qn[$n++] = ci, qn[$n++] = Qi, Qi = e;
    var l = ui;
    e = ci;
    var u = 32 - ye(l) - 1;
    l &= ~(1 << u), r += 1;
    var d = 32 - ye(n) + u;
    if (30 < d) {
      var y = u - u % 5;
      d = (l & (1 << y) - 1).toString(32), l >>= y, u -= y, ui = 1 << 32 - ye(n) + u | r << u | l, ci = d + e;
    } else
      ui = 1 << d | r << u | l, ci = e;
  }
  function Fo(e) {
    e.return !== null && (Mi(e, 1), em(e, 1, 0));
  }
  function fc(e) {
    for (; e === Go; )
      Go = za[--_a], za[_a] = null, zl = za[--_a], za[_a] = null;
    for (; e === Qi; )
      Qi = qn[--$n], qn[$n] = null, ci = qn[--$n], qn[$n] = null, ui = qn[--$n], qn[$n] = null;
  }
  function tm(e, n) {
    qn[$n++] = ui, qn[$n++] = ci, qn[$n++] = Qi, ui = n.id, ci = n.overflow, Qi = e;
  }
  var Ut = null, ut = null, Le = !1, Pi = null, Vn = !1, dc = Error(o(519));
  function Ki(e) {
    var n = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw _l(Zn(n, e)), dc;
  }
  function nm(e) {
    var n = e.stateNode, r = e.type, l = e.memoizedProps;
    switch (n[Ht] = e, n[cn] = l, r) {
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
        for (r = 0; r < Fl.length; r++)
          Ze(Fl[r], n);
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
        Ze("invalid", n), hh(
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
        Ze("invalid", n), gh(n, l.value, l.defaultValue, l.children);
    }
    r = l.children, typeof r != "string" && typeof r != "number" && typeof r != "bigint" || n.textContent === "" + r || l.suppressHydrationWarning === !0 || Sb(n.textContent, r) ? (l.popover != null && (Ze("beforetoggle", n), Ze("toggle", n)), l.onScroll != null && Ze("scroll", n), l.onScrollEnd != null && Ze("scrollend", n), l.onClick != null && (n.onclick = si), n = !0) : n = !1, n || Ki(e, !0);
  }
  function Xo(e) {
    for (Ut = e.return; Ut; )
      switch (Ut.tag) {
        case 5:
        case 31:
        case 13:
          Vn = !1;
          return;
        case 27:
        case 3:
          Vn = !0;
          return;
        default:
          Ut = Ut.return;
      }
  }
  function ja(e) {
    if (e !== Ut) return !1;
    if (!Le) return Xo(e), Le = !0, !1;
    var n = e.tag, r;
    if ((r = n !== 3 && n !== 27) && ((r = n === 5) && (r = e.type, r = !(r !== "form" && r !== "button") || $f(e.type, e.memoizedProps)), r = !r), r && ut && Ki(e), Xo(e), n === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      ut = qb(e);
    } else if (n === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      ut = qb(e);
    } else
      n === 27 ? (n = ut, pr(e.type) ? (e = Jf, Jf = null, ut = e) : ut = n) : ut = Ut ? Gn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Mr() {
    ut = Ut = null, Le = !1;
  }
  function pc() {
    var e = Pi;
    return e !== null && (hn === null ? hn = e : hn.push.apply(
      hn,
      e
    ), Pi = null), e;
  }
  function _l(e) {
    Pi === null ? Pi = [e] : Pi.push(e);
  }
  var hc = at(null), Rr = null, Ri = null;
  function Ji(e, n, r) {
    Ge(hc, n._currentValue), n._currentValue = r;
  }
  function Ui(e) {
    e._currentValue = hc.current, Ie(hc);
  }
  function Qo(e, n, r) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, l !== null && (l.childLanes |= n)) : l !== null && (l.childLanes & n) !== n && (l.childLanes |= n), e === r) break;
      e = e.return;
    }
  }
  function mc(e, n, r, l) {
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
              d.lanes |= r, k = d.alternate, k !== null && (k.lanes |= r), Qo(
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
        y.lanes |= r, d = y.alternate, d !== null && (d.lanes |= r), Qo(y, r, e), y = null;
      } else
        u.tag === 13 && u.memoizedState !== null && u.memoizedState.dehydrated === null ? (u.lanes |= r, y = u.alternate, y !== null && (y.lanes |= r), Qo(
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
  function Ur(e, n, r, l) {
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
          zn(u.pendingProps.value, y.value) || (e !== null ? e.push(k) : e = [k]);
        }
      } else if (u === Mn.current) {
        if (y = u.alternate, y === null) throw Error(o(387));
        y.memoizedState.memoizedState !== u.memoizedState.memoizedState && (e !== null ? e.push(Ka) : e = [Ka]);
      }
      u = u.return;
    }
    return e !== null && mc(
      n,
      e,
      r,
      l
    ), n.flags |= 262144, e !== null;
  }
  function Po(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!zn(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Lr(e) {
    Rr = e, Ri = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Zt(e) {
    return im(Rr, e);
  }
  function Ko(e, n) {
    return Rr === null && Lr(e), im(e, n);
  }
  function im(e, n) {
    var r = n._currentValue;
    if (n = { context: n, memoizedValue: r, next: null }, Ri === null) {
      if (e === null) throw Error(o(308));
      Ri = n, e.dependencies = { lanes: 0, firstContext: n }, e.flags |= 524288;
    } else Ri = Ri.next = n;
    return r;
  }
  var b2 = typeof AbortController < "u" ? AbortController : function() {
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
  }, x2 = t.unstable_scheduleCallback, y2 = t.unstable_NormalPriority, jt = {
    $$typeof: te,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function gc() {
    return {
      controller: new b2(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function jl(e) {
    e.refCount--, e.refCount === 0 && x2(y2, function() {
      e.controller.abort();
    });
  }
  function rm(e, n) {
    if ((e.pendingLanes & 4194048) !== 0) {
      var r = e.transitionTypes;
      for (r === null && (r = e.transitionTypes = []), e = 0; e < n.length; e++) {
        var l = n[e];
        r.indexOf(l) === -1 && r.push(l);
      }
    }
  }
  var El = null;
  function v2(e) {
    var n = e.transitionTypes;
    return e.transitionTypes = null, n;
  }
  var Cl = null, bc = 0, Br = 0, Ea = null;
  function w2(e, n) {
    if (Cl === null) {
      var r = Cl = [];
      bc = 0, Br = Mf(), Ea = {
        status: "pending",
        value: void 0,
        then: function(l) {
          r.push(l);
        }
      };
    }
    return bc++, n.then(am, am), n;
  }
  function am() {
    if (--bc === 0 && (El = null, Cl !== null)) {
      Ea !== null && (Ea.status = "fulfilled");
      var e = Cl;
      Cl = null, Br = 0, Ea = null;
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function k2(e, n) {
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
  var lm = ae.S;
  ae.S = function(e, n) {
    if (Jg = dt(), typeof n == "object" && n !== null && typeof n.then == "function" && w2(e, n), El !== null)
      for (var r = Ya; r !== null; )
        rm(r, El), r = r.next;
    if (r = e.types, r !== null) {
      for (var l = Ya; l !== null; )
        rm(l, r), l = l.next;
      if (Br !== 0) {
        l = El, l === null && (l = El = []);
        for (var u = 0; u < r.length; u++) {
          var d = r[u];
          l.indexOf(d) === -1 && l.push(d);
        }
      }
    }
    lm !== null && lm(e, n);
  };
  var Ir = at(null);
  function xc() {
    var e = Ir.current;
    return e !== null ? e : lt.pooledCache;
  }
  function Jo(e, n) {
    n === null ? Ge(Ir, Ir.current) : Ge(Ir, n.pool);
  }
  function om() {
    var e = xc();
    return e === null ? null : { parent: jt._currentValue, pool: e };
  }
  var Ca = Error(o(460)), yc = Error(o(474)), Wo = Error(o(542)), es = { then: function() {
  } };
  function sm(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function um(e, n, r) {
    switch (r = e[r], r === void 0 ? e.push(n) : r !== n && (n.then(si, si), n = r), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw e = n.reason, fm(e), e === void 0 && !("reason" in n) ? Error(o(600)) : e;
      default:
        if (typeof n.status == "string") n.then(si, si);
        else {
          if (e = lt, e !== null && 100 < e.shellSuspendCounter)
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
            throw e = n.reason, fm(e), e;
        }
        throw Zr = n, Ca;
    }
  }
  function Hr(e) {
    try {
      var n = e._init;
      return n(e._payload);
    } catch (r) {
      throw r !== null && typeof r == "object" && typeof r.then == "function" ? (Zr = r, Ca) : r;
    }
  }
  var Zr = null;
  function cm() {
    if (Zr === null) throw Error(o(459));
    var e = Zr;
    return Zr = null, e;
  }
  function fm(e) {
    if (e === Ca || e === Wo)
      throw Error(o(483));
  }
  var Ta = null, Tl = 0;
  function ts(e) {
    var n = Tl;
    return Tl += 1, Ta === null && (Ta = []), um(Ta, e, n);
  }
  function Wi(e, n) {
    n = n.props.ref, e.ref = n !== void 0 ? n : null;
  }
  function ns(e, n) {
    throw n.$$typeof === pe ? Error(o(525)) : (e = Object.prototype.toString.call(n), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e
      )
    ));
  }
  function dm(e) {
    function n(M, A) {
      if (e) {
        var L = M.deletions;
        L === null ? (M.deletions = [A], M.flags |= 16) : L.push(A);
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
      return M = Di(M, A), M.index = 0, M.sibling = null, M;
    }
    function d(M, A, L) {
      return M.index = L, e ? (L = M.alternate, L !== null ? (L = L.index, L < A ? (M.flags |= 2, A) : L) : (M.flags |= 134217730, A)) : (M.flags |= 1048576, A);
    }
    function y(M) {
      return e && M.alternate === null && (M.flags |= 134217730), M;
    }
    function k(M, A, L, F) {
      return A === null || A.tag !== 6 ? (A = uc(L, M.mode, F), A.return = M, A) : (A = u(A, L), A.return = M, A);
    }
    function _(M, A, L, F) {
      var me = L.type;
      return me === ne ? (M = q(
        M,
        A,
        L.props.children,
        F,
        L.key
      ), Wi(M, L), M) : A !== null && (A.elementType === me || typeof me == "object" && me !== null && me.$$typeof === z && Hr(me) === A.type) ? (A = u(A, L.props), Wi(A, L), A.return = M, A) : (A = Yo(
        L.type,
        L.key,
        L.props,
        null,
        M.mode,
        F
      ), Wi(A, L), A.return = M, A);
    }
    function R(M, A, L, F) {
      return A === null || A.tag !== 4 || A.stateNode.containerInfo !== L.containerInfo || A.stateNode.implementation !== L.implementation ? (A = cc(L, M.mode, F), A.return = M, A) : (A = u(A, L.children || []), A.return = M, A);
    }
    function q(M, A, L, F, me) {
      return A === null || A.tag !== 7 ? (A = Dr(
        L,
        M.mode,
        F,
        me
      ), A.return = M, A) : (A = u(A, L), A.return = M, A);
    }
    function Q(M, A, L) {
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return A = uc(
          "" + A,
          M.mode,
          L
        ), A.return = M, A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case je:
            return L = Yo(
              A.type,
              A.key,
              A.props,
              null,
              M.mode,
              L
            ), Wi(L, A), L.return = M, L;
          case Z:
            return A = cc(
              A,
              M.mode,
              L
            ), A.return = M, A;
          case z:
            return A = Hr(A), Q(M, A, L);
        }
        if (he(A) || ge(A))
          return A = Dr(
            A,
            M.mode,
            L,
            null
          ), A.return = M, A;
        if (typeof A.then == "function")
          return Q(M, ts(A), L);
        if (A.$$typeof === te)
          return Q(
            M,
            Ko(M, A),
            L
          );
        ns(M, A);
      }
      return null;
    }
    function D(M, A, L, F) {
      var me = A !== null ? A.key : null;
      if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
        return me !== null ? null : k(M, A, "" + L, F);
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case je:
            return L.key === me ? _(M, A, L, F) : null;
          case Z:
            return L.key === me ? R(M, A, L, F) : null;
          case z:
            return L = Hr(L), D(M, A, L, F);
        }
        if (he(L) || ge(L))
          return me !== null ? null : q(M, A, L, F, null);
        if (typeof L.then == "function")
          return D(
            M,
            A,
            ts(L),
            F
          );
        if (L.$$typeof === te)
          return D(
            M,
            A,
            Ko(M, L),
            F
          );
        ns(M, L);
      }
      return null;
    }
    function I(M, A, L, F, me) {
      if (typeof F == "string" && F !== "" || typeof F == "number" || typeof F == "bigint")
        return M = M.get(L) || null, k(A, M, "" + F, me);
      if (typeof F == "object" && F !== null) {
        switch (F.$$typeof) {
          case je:
            return M = M.get(
              F.key === null ? L : F.key
            ) || null, _(A, M, F, me);
          case Z:
            return M = M.get(
              F.key === null ? L : F.key
            ) || null, R(A, M, F, me);
          case z:
            return F = Hr(F), I(
              M,
              A,
              L,
              F,
              me
            );
        }
        if (he(F) || ge(F))
          return M = M.get(L) || null, q(A, M, F, me, null);
        if (typeof F.then == "function")
          return I(
            M,
            A,
            L,
            ts(F),
            me
          );
        if (F.$$typeof === te)
          return I(
            M,
            A,
            L,
            Ko(A, F),
            me
          );
        ns(A, F);
      }
      return null;
    }
    function se(M, A, L, F) {
      for (var me = null, $e = null, we = A, Ee = A = 0, Tt = null; we !== null && Ee < L.length; Ee++) {
        we.index > Ee ? (Tt = we, we = null) : Tt = we.sibling;
        var Ye = D(
          M,
          we,
          L[Ee],
          F
        );
        if (Ye === null) {
          we === null && (we = Tt);
          break;
        }
        e && we && Ye.alternate === null && n(M, we), A = d(Ye, A, Ee), $e === null ? me = Ye : $e.sibling = Ye, $e = Ye, we = Tt;
      }
      if (Ee === L.length)
        return r(M, we), Le && Mi(M, Ee), me;
      if (we === null) {
        for (; Ee < L.length; Ee++)
          we = Q(M, L[Ee], F), we !== null && (A = d(
            we,
            A,
            Ee
          ), $e === null ? me = we : $e.sibling = we, $e = we);
        return Le && Mi(M, Ee), me;
      }
      for (we = l(we); Ee < L.length; Ee++)
        Tt = I(
          we,
          M,
          Ee,
          L[Ee],
          F
        ), Tt !== null && (e && (Ye = Tt.alternate, Ye !== null && we.delete(Ye.key === null ? Ee : Ye.key)), A = d(
          Tt,
          A,
          Ee
        ), $e === null ? me = Tt : $e.sibling = Tt, $e = Tt);
      return e && we.forEach(function(xr) {
        return n(M, xr);
      }), Le && Mi(M, Ee), me;
    }
    function ve(M, A, L, F) {
      if (L == null) throw Error(o(151));
      for (var me = null, $e = null, we = A, Ee = A = 0, Tt = null, Ye = L.next(); we !== null && !Ye.done; Ee++, Ye = L.next()) {
        we.index > Ee ? (Tt = we, we = null) : Tt = we.sibling;
        var xr = D(M, we, Ye.value, F);
        if (xr === null) {
          we === null && (we = Tt);
          break;
        }
        e && we && xr.alternate === null && n(M, we), A = d(xr, A, Ee), $e === null ? me = xr : $e.sibling = xr, $e = xr, we = Tt;
      }
      if (Ye.done)
        return r(M, we), Le && Mi(M, Ee), me;
      if (we === null) {
        for (; !Ye.done; Ee++, Ye = L.next())
          Ye = Q(M, Ye.value, F), Ye !== null && (A = d(Ye, A, Ee), $e === null ? me = Ye : $e.sibling = Ye, $e = Ye);
        return Le && Mi(M, Ee), me;
      }
      for (we = l(we); !Ye.done; Ee++, Ye = L.next())
        Ye = I(we, M, Ee, Ye.value, F), Ye !== null && (e && (Tt = Ye.alternate, Tt !== null && we.delete(
          Tt.key === null ? Ee : Tt.key
        )), A = d(Ye, A, Ee), $e === null ? me = Ye : $e.sibling = Ye, $e = Ye);
      return e && we.forEach(function(nS) {
        return n(M, nS);
      }), Le && Mi(M, Ee), me;
    }
    function Re(M, A, L, F) {
      if (typeof L == "object" && L !== null && L.type === ne && L.key === null && L.props.ref === void 0 && (L = L.props.children), typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case je:
            e: {
              for (var me = L.key; A !== null; ) {
                if (A.key === me) {
                  if (me = L.type, me === ne) {
                    if (A.tag === 7) {
                      r(
                        M,
                        A.sibling
                      ), F = u(
                        A,
                        L.props.children
                      ), Wi(F, L), F.return = M, M = F;
                      break e;
                    }
                  } else if (A.elementType === me || typeof me == "object" && me !== null && me.$$typeof === z && Hr(me) === A.type) {
                    r(
                      M,
                      A.sibling
                    ), F = u(A, L.props), Wi(F, L), F.return = M, M = F;
                    break e;
                  }
                  r(M, A);
                  break;
                } else n(M, A);
                A = A.sibling;
              }
              L.type === ne ? (F = Dr(
                L.props.children,
                M.mode,
                F,
                L.key
              ), Wi(F, L), F.return = M, M = F) : (F = Yo(
                L.type,
                L.key,
                L.props,
                null,
                M.mode,
                F
              ), Wi(F, L), F.return = M, M = F);
            }
            return y(M);
          case Z:
            e: {
              for (me = L.key; A !== null; ) {
                if (A.key === me)
                  if (A.tag === 4 && A.stateNode.containerInfo === L.containerInfo && A.stateNode.implementation === L.implementation) {
                    r(
                      M,
                      A.sibling
                    ), F = u(A, L.children || []), F.return = M, M = F;
                    break e;
                  } else {
                    r(M, A);
                    break;
                  }
                else n(M, A);
                A = A.sibling;
              }
              F = cc(L, M.mode, F), F.return = M, M = F;
            }
            return y(M);
          case z:
            return L = Hr(L), Re(
              M,
              A,
              L,
              F
            );
        }
        if (he(L))
          return se(
            M,
            A,
            L,
            F
          );
        if (ge(L)) {
          if (me = ge(L), typeof me != "function") throw Error(o(150));
          return L = me.call(L), ve(
            M,
            A,
            L,
            F
          );
        }
        if (typeof L.then == "function")
          return Re(
            M,
            A,
            ts(L),
            F
          );
        if (L.$$typeof === te)
          return Re(
            M,
            A,
            Ko(M, L),
            F
          );
        ns(M, L);
      }
      return typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint" ? (L = "" + L, A !== null && A.tag === 6 ? (r(M, A.sibling), F = u(A, L), F.return = M, M = F) : (r(M, A), F = uc(L, M.mode, F), F.return = M, M = F), y(M)) : r(M, A);
    }
    return function(M, A, L, F) {
      try {
        Tl = 0;
        var me = Re(
          M,
          A,
          L,
          F
        );
        return Ta = null, me;
      } catch (we) {
        if (we === Ca || we === Wo) throw we;
        var $e = fn(29, we, null, M.mode);
        return $e.lanes = F, $e.return = M, $e;
      }
    };
  }
  var qr = dm(!0), pm = dm(!1), er = !1;
  function vc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function wc(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function tr(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function nr(e, n, r) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Pe & 2) !== 0) {
      var u = l.pending;
      return u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n, n = Vo(e), Ph(e, null, r), n;
    }
    return $o(e, l, n, r), Vo(e);
  }
  function Nl(e, n, r) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (r & 4194048) !== 0)) {
      var l = n.lanes;
      l &= e.pendingLanes, r |= l, n.lanes = r, eh(e, r);
    }
  }
  function kc(e, n) {
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
  var Sc = !1;
  function Al() {
    if (Sc) {
      var e = Ea;
      if (e !== null) throw e;
    }
  }
  function Ol(e, n, r, l) {
    Sc = !1;
    var u = e.updateQueue;
    er = !1;
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
        var D = k.lane & -536870913, I = D !== k.lane;
        if (I ? (qe & D) === D : (l & D) === D) {
          D !== 0 && D === Br && (Sc = !0), q !== null && (q = q.next = {
            lane: 0,
            tag: k.tag,
            payload: k.payload,
            callback: null,
            next: null
          });
          e: {
            var se = e, ve = k;
            D = n;
            var Re = r;
            switch (ve.tag) {
              case 1:
                if (se = ve.payload, typeof se == "function") {
                  Q = se.call(Re, Q, D);
                  break e;
                }
                Q = se;
                break e;
              case 3:
                se.flags = se.flags & -65537 | 128;
              case 0:
                if (se = ve.payload, D = typeof se == "function" ? se.call(Re, Q, D) : se, D == null) break e;
                Q = X({}, Q, D);
                break e;
              case 2:
                er = !0;
            }
          }
          D = k.callback, D !== null && (e.flags |= 64, I && (e.flags |= 8192), I = u.callbacks, I === null ? u.callbacks = [D] : I.push(D));
        } else
          I = {
            lane: D,
            tag: k.tag,
            payload: k.payload,
            callback: k.callback,
            next: null
          }, q === null ? (R = q = I, _ = Q) : q = q.next = I, y |= D;
        if (k = k.next, k === null) {
          if (k = u.shared.pending, k === null)
            break;
          I = k, k = I.next, I.next = null, u.lastBaseUpdate = I, u.shared.pending = null;
        }
      } while (!0);
      q === null && (_ = Q), u.baseState = _, u.firstBaseUpdate = R, u.lastBaseUpdate = q, d === null && (u.shared.lanes = 0), ur |= y, e.lanes = y, e.memoizedState = Q;
    }
  }
  function hm(e, n) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(n);
  }
  function mm(e, n) {
    var r = e.callbacks;
    if (r !== null)
      for (e.callbacks = null, e = 0; e < r.length; e++)
        hm(r[e], n);
  }
  var ir = at(null), is = at(0);
  function gm(e, n) {
    e = Zi, Ge(is, e), Ge(ir, n), Zi = e | n.baseLanes;
  }
  function zc() {
    Ge(is, Zi), Ge(ir, ir.current);
  }
  function _c() {
    Zi = is.current, Ie(ir), Ie(is);
  }
  var qt = at(null), Qt = null;
  function rr(e) {
    var n = e.alternate;
    Ge($t, $t.current & 1), Ge(qt, e), Qt === null && (n === null || ir.current !== null || n.memoizedState !== null) && (Qt = e);
  }
  function jc(e) {
    Ge($t, $t.current), Ge(qt, e), Qt === null && (Qt = e);
  }
  function bm(e) {
    e.tag === 22 ? (Ge($t, $t.current), Ge(qt, e), Qt === null && (Qt = e)) : ar();
  }
  function ar() {
    Ge($t, $t.current), Ge(qt, qt.current);
  }
  function _n(e) {
    Ie(qt), Qt === e && (Qt = null), Ie($t);
  }
  var $t = at(0);
  function Dl(e, n) {
    Ge(qt, qt.current), Ge($t, n);
  }
  function Ec(e) {
    Ie($t), Ie(qt), Qt === e && (Qt = null);
  }
  function rs(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var r = n.memoizedState;
        if (r !== null && (r = r.dehydrated, r === null || Pf(r) || Kf(r)))
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
  var Li = 0, Me = null, rt = null, Et = null, as = !1, Na = !1, $r = !1, ls = 0, Ml = 0, Aa = null, S2 = 0;
  function vt() {
    throw Error(o(321));
  }
  function Cc(e, n) {
    if (n === null) return !1;
    for (var r = 0; r < n.length && r < e.length; r++)
      if (!zn(e[r], n[r])) return !1;
    return !0;
  }
  function Tc(e, n, r, l, u, d) {
    return Li = d, Me = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, ae.H = e === null || e.memoizedState === null ? eg : tg, $r = !1, d = r(l, u), $r = !1, Na && (d = ym(
      n,
      r,
      l,
      u
    )), xm(e), d;
  }
  function xm(e) {
    ae.H = ps;
    var n = rt !== null && rt.next !== null;
    if (Li = 0, Et = rt = Me = null, as = !1, Ml = 0, Aa = null, n) throw Error(o(300));
    e === null || Ct || (e = e.dependencies, e !== null && Po(e) && (Ct = !0));
  }
  function ym(e, n, r, l) {
    Me = e;
    var u = 0;
    do {
      if (Na && (Aa = null), Ml = 0, Na = !1, 25 <= u) throw Error(o(301));
      if (u += 1, Et = rt = null, e.updateQueue != null) {
        var d = e.updateQueue;
        d.lastEffect = null, d.events = null, d.stores = null, d.memoCache != null && (d.memoCache.index = 0);
      }
      ae.H = A2, d = n(r, l);
    } while (Na);
    return d;
  }
  function z2() {
    var e = ae.H, n = e.useState()[0];
    return n = typeof n.then == "function" ? Rl(n) : n, e = e.useState()[0], (rt !== null ? rt.memoizedState : null) !== e && (Me.flags |= 1024), n;
  }
  function Nc() {
    var e = ls !== 0;
    return ls = 0, e;
  }
  function Ac(e, n, r) {
    n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~r;
  }
  function Oc(e) {
    if (as) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), e = e.next;
      }
      as = !1;
    }
    Li = 0, Et = rt = Me = null, Na = !1, Ml = ls = 0, Aa = null;
  }
  function tn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Et === null ? Me.memoizedState = Et = e : Et = Et.next = e, Et;
  }
  function kt() {
    if (rt === null) {
      var e = Me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = rt.next;
    var n = Et === null ? Me.memoizedState : Et.next;
    if (n !== null)
      Et = n, rt = e;
    else {
      if (e === null)
        throw Me.alternate === null ? Error(o(467)) : Error(o(310));
      rt = e, e = {
        memoizedState: rt.memoizedState,
        baseState: rt.baseState,
        baseQueue: rt.baseQueue,
        queue: rt.queue,
        next: null
      }, Et === null ? Me.memoizedState = Et = e : Et = Et.next = e;
    }
    return Et;
  }
  function os() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Rl(e) {
    var n = Ml;
    return Ml += 1, Aa === null && (Aa = []), e = um(Aa, e, n), n = Me, (Et === null ? n.memoizedState : Et.next) === null && (n = n.alternate, ae.H = n === null || n.memoizedState === null ? eg : tg), e;
  }
  function ss(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Rl(e);
      if (e.$$typeof === J) return;
      if (e.$$typeof === te) return Zt(e);
    }
    throw Error(o(438, String(e)));
  }
  function Dc(e) {
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
    if (n == null && (n = { data: [], index: 0 }), r === null && (r = os(), Me.updateQueue = r), r.memoCache = n, r = n.data[n.index], r === void 0)
      for (r = n.data[n.index] = Array(e), l = 0; l < e; l++)
        r[l] = T;
    return n.index++, r;
  }
  function Bi(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function us(e) {
    var n = kt();
    return Mc(n, rt, e);
  }
  function Mc(e, n, r) {
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
        if (Q !== R.lane ? (qe & Q) === Q : (Li & Q) === Q) {
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
            }), Q === Br && (q = !0);
          else if ((Li & D) === D) {
            R = R.next, D === Br && (q = !0);
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
            }, _ === null ? (k = _ = Q, y = d) : _ = _.next = Q, Me.lanes |= D, ur |= D;
          Q = R.action, $r && r(d, Q), d = R.hasEagerState ? R.eagerState : r(d, Q);
        } else
          D = {
            lane: Q,
            revertLane: R.revertLane,
            gesture: R.gesture,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null
          }, _ === null ? (k = _ = D, y = d) : _ = _.next = D, Me.lanes |= Q, ur |= Q;
        R = R.next;
      } while (R !== null && R !== n);
      if (_ === null ? y = d : _.next = k, !zn(d, e.memoizedState) && (Ct = !0, q && (r = Ea, r !== null)))
        throw r;
      e.memoizedState = d, e.baseState = y, e.baseQueue = _, l.lastRenderedState = d;
    }
    return u === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Rc(e) {
    var n = kt(), r = n.queue;
    if (r === null) throw Error(o(311));
    r.lastRenderedReducer = e;
    var l = r.dispatch, u = r.pending, d = n.memoizedState;
    if (u !== null) {
      r.pending = null;
      var y = u = u.next;
      do
        d = e(d, y.action), y = y.next;
      while (y !== u);
      zn(d, n.memoizedState) || (Ct = !0), n.memoizedState = d, n.baseQueue === null && (n.baseState = d), r.lastRenderedState = d;
    }
    return [d, l];
  }
  function vm(e, n, r) {
    var l = Me, u = kt(), d = Le;
    if (d) {
      if (r === void 0) throw Error(o(407));
      r = r();
    } else r = n();
    var y = !zn(
      (rt || u).memoizedState,
      r
    );
    if (y && (u.memoizedState = r, Ct = !0), u = u.queue, Bc(Sm.bind(null, l, u, e), [
      e
    ]), e = u.getSnapshot !== n || y || Et !== null && (Et.memoizedState.tag & 1) !== 0, Oa(
      e ? 9 : 8,
      { destroy: void 0 },
      km.bind(null, l, u, r, n),
      null
    ), e) {
      if (l.flags |= 2048, lt === null) throw Error(o(349));
      d || (Li & 127) !== 0 || wm(l, n, r);
    }
    return r;
  }
  function wm(e, n, r) {
    e.flags |= 16384, e = { getSnapshot: n, value: r }, n = Me.updateQueue, n === null ? (n = os(), Me.updateQueue = n, n.stores = [e]) : (r = n.stores, r === null ? n.stores = [e] : r.push(e));
  }
  function km(e, n, r, l) {
    n.value = r, n.getSnapshot = l, zm(n) && _m(e);
  }
  function Sm(e, n, r) {
    return r(function() {
      zm(n) && _m(e);
    });
  }
  function zm(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var r = n();
      return !zn(e, r);
    } catch {
      return !0;
    }
  }
  function _m(e) {
    var n = Or(e, 2);
    n !== null && mn(n, e, 2);
  }
  function Uc(e) {
    var n = tn();
    if (typeof e == "function") {
      var r = e;
      if (e = r(), $r) {
        xe(!0);
        try {
          r();
        } finally {
          xe(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = e, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Bi,
      lastRenderedState: e
    }, n;
  }
  function jm(e, n, r, l) {
    return e.baseState = r, Mc(
      e,
      rt,
      typeof l == "function" ? l : Bi
    );
  }
  function _2(e, n, r, l, u) {
    if (ds(e)) throw Error(o(485));
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
      ae.T !== null ? r(!0) : d.isTransition = !1, l(d), r = n.pending, r === null ? (d.next = n.pending = d, Em(n, d)) : (d.next = r.next, n.pending = r.next = d);
    }
  }
  function Em(e, n) {
    var r = n.action, l = n.payload, u = e.state;
    if (n.isTransition) {
      var d = ae.T, y = {};
      y.types = d !== null ? d.types : null, ae.T = y;
      try {
        var k = r(u, l), _ = ae.S;
        _ !== null && _(y, k), Cm(e, n, k);
      } catch (R) {
        Lc(e, n, R);
      } finally {
        d !== null && y.types !== null && (d.types = y.types), ae.T = d;
      }
    } else
      try {
        d = r(u, l), Cm(e, n, d);
      } catch (R) {
        Lc(e, n, R);
      }
  }
  function Cm(e, n, r) {
    r !== null && typeof r == "object" && typeof r.then == "function" ? r.then(
      function(l) {
        Tm(e, n, l);
      },
      function(l) {
        return Lc(e, n, l);
      }
    ) : Tm(e, n, r);
  }
  function Tm(e, n, r) {
    n.status = "fulfilled", n.value = r, Nm(n), e.state = r, n = e.pending, n !== null && (r = n.next, r === n ? e.pending = null : (r = r.next, n.next = r, Em(e, r)));
  }
  function Lc(e, n, r) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        n.status = "rejected", n.reason = r, Nm(n), n = n.next;
      while (n !== l);
    }
    e.action = null;
  }
  function Nm(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function Am(e, n) {
    return n;
  }
  function Om(e, n) {
    if (Le) {
      var r = lt.formState;
      if (r !== null) {
        e: {
          var l = Me;
          if (Le) {
            if (ut) {
              t: {
                for (var u = ut, d = Vn; u.nodeType !== 8; ) {
                  if (!d) {
                    u = null;
                    break t;
                  }
                  if (u = Gn(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break t;
                  }
                }
                d = u.data, u = d === "F!" || d === "F" ? u : null;
              }
              if (u) {
                ut = Gn(
                  u.nextSibling
                ), l = u.data === "F!";
                break e;
              }
            }
            Ki(l);
          }
          l = !1;
        }
        l && (n = r[0]);
      }
    }
    return r = tn(), r.memoizedState = r.baseState = n, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Am,
      lastRenderedState: n
    }, r.queue = l, r = Km.bind(
      null,
      Me,
      l
    ), l.dispatch = r, l = Uc(!1), d = $c.bind(
      null,
      Me,
      !1,
      l.queue
    ), l = tn(), u = {
      state: n,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = u, r = _2.bind(
      null,
      Me,
      u,
      d,
      r
    ), u.dispatch = r, l.memoizedState = e, [n, r, !1];
  }
  function Dm(e) {
    var n = kt();
    return Mm(n, rt, e);
  }
  function Mm(e, n, r) {
    if (n = Mc(
      e,
      n,
      Am
    )[0], e = us(Bi)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var l = Rl(n);
      } catch (y) {
        throw y === Ca ? Wo : y;
      }
    else l = n;
    n = kt();
    var u = n.queue, d = u.dispatch;
    return r !== n.memoizedState && (Me.flags |= 2048, Oa(
      9,
      { destroy: void 0 },
      j2.bind(null, u, r),
      null
    )), [l, d, e];
  }
  function j2(e, n) {
    e.action = n;
  }
  function Rm(e) {
    var n = kt(), r = rt;
    if (r !== null)
      return Mm(n, r, e);
    kt(), n = n.memoizedState, r = kt();
    var l = r.queue.dispatch;
    return r.memoizedState = e, [n, l, !1];
  }
  function Oa(e, n, r, l) {
    return e = { tag: e, create: r, deps: l, inst: n, next: null }, n = Me.updateQueue, n === null && (n = os(), Me.updateQueue = n), r = n.lastEffect, r === null ? n.lastEffect = e.next = e : (l = r.next, r.next = e, e.next = l, n.lastEffect = e), e;
  }
  function Um() {
    return kt().memoizedState;
  }
  function cs(e, n, r, l) {
    var u = tn();
    Me.flags |= e, u.memoizedState = Oa(
      1 | n,
      { destroy: void 0 },
      r,
      l === void 0 ? null : l
    );
  }
  function fs(e, n, r, l) {
    var u = kt();
    l = l === void 0 ? null : l;
    var d = u.memoizedState.inst;
    rt !== null && l !== null && Cc(l, rt.memoizedState.deps) ? u.memoizedState = Oa(n, d, r, l) : (Me.flags |= e, u.memoizedState = Oa(
      1 | n,
      d,
      r,
      l
    ));
  }
  function Lm(e, n) {
    cs(8390656, 8, e, n);
  }
  function Bc(e, n) {
    fs(2048, 8, e, n);
  }
  function E2(e) {
    Me.flags |= 4;
    var n = Me.updateQueue;
    if (n === null)
      n = os(), Me.updateQueue = n, n.events = [e];
    else {
      var r = n.events;
      r === null ? n.events = [e] : r.push(e);
    }
  }
  function Bm(e) {
    var n = kt().memoizedState;
    return E2({ ref: n, nextImpl: e }), function() {
      if ((Pe & 2) !== 0) throw Error(o(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function Im(e, n) {
    return fs(4, 2, e, n);
  }
  function Hm(e, n) {
    return fs(4, 4, e, n);
  }
  function Zm(e, n) {
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
  function qm(e, n, r) {
    r = r != null ? r.concat([e]) : null, fs(4, 4, Zm.bind(null, n, e), r);
  }
  function Ic() {
  }
  function $m(e, n) {
    var r = kt();
    n = n === void 0 ? null : n;
    var l = r.memoizedState;
    return n !== null && Cc(n, l[1]) ? l[0] : (r.memoizedState = [e, n], e);
  }
  function Vm(e, n) {
    var r = kt();
    n = n === void 0 ? null : n;
    var l = r.memoizedState;
    if (n !== null && Cc(n, l[1]))
      return l[0];
    if (l = e(), $r) {
      xe(!0);
      try {
        e();
      } finally {
        xe(!1);
      }
    }
    return r.memoizedState = [l, n], l;
  }
  function Hc(e, n, r) {
    return r === void 0 || (Li & 1073741824) !== 0 && (qe & 261930) === 0 ? e.memoizedState = n : (e.memoizedState = r, e = eb(), Me.lanes |= e, ur |= e, r);
  }
  function Ym(e, n, r, l) {
    return zn(r, n) ? r : ir.current !== null ? (e = Hc(e, r, l), zn(e, n) || (Ct = !0), e) : (Li & 106) === 0 || (Li & 1073741824) !== 0 && (qe & 261930) === 0 ? (Ct = !0, e.memoizedState = r) : (e = eb(), Me.lanes |= e, ur |= e, n);
  }
  function Gm(e, n, r, l, u) {
    var d = fe.p;
    fe.p = d !== 0 && 8 > d ? d : 8;
    var y = ae.T, k = {};
    k.types = y !== null ? y.types : null, ae.T = k, $c(e, !1, n, r);
    try {
      var _ = u(), R = ae.S;
      if (R !== null && R(k, _), _ !== null && typeof _ == "object" && typeof _.then == "function") {
        var q = k2(
          _,
          l
        );
        Ul(
          e,
          n,
          q,
          Tn(e)
        );
      } else
        Ul(
          e,
          n,
          l,
          Tn(e)
        );
    } catch (Q) {
      Ul(
        e,
        n,
        { then: function() {
        }, status: "rejected", reason: Q },
        Tn()
      );
    } finally {
      fe.p = d, y !== null && k.types !== null && (y.types = k.types), ae.T = y;
    }
  }
  function C2() {
  }
  function Zc(e, n, r, l) {
    if (e.tag !== 5) throw Error(o(476));
    var u = Fm(e).queue;
    Gm(
      e,
      u,
      n,
      ft,
      r === null ? C2 : function() {
        return Xm(e), r(l);
      }
    );
  }
  function Fm(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: ft,
      baseState: ft,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Bi,
        lastRenderedState: ft
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
        lastRenderedReducer: Bi,
        lastRenderedState: r
      },
      next: null
    }, e.memoizedState = n, e = e.alternate, e !== null && (e.memoizedState = n), n;
  }
  function Xm(e) {
    var n = Fm(e);
    n.next === null && (n = e.alternate.memoizedState), Ul(
      e,
      n.next.queue,
      {},
      Tn()
    );
  }
  function qc() {
    return Zt(Ka);
  }
  function Qm() {
    return kt().memoizedState;
  }
  function Pm() {
    return kt().memoizedState;
  }
  function T2(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var r = Tn();
          e = tr(r);
          var l = nr(n, e, r);
          l !== null && (mn(l, n, r), Nl(l, n, r)), n = { cache: gc() }, e.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function N2(e, n, r) {
    var l = Tn();
    r = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ds(e) ? Jm(n, r) : (r = oc(e, n, r, l), r !== null && (mn(r, e, l), Wm(r, n, l)));
  }
  function Km(e, n, r) {
    var l = Tn();
    Ul(e, n, r, l);
  }
  function Ul(e, n, r, l) {
    var u = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ds(e)) Jm(n, u);
    else {
      var d = e.alternate;
      if (e.lanes === 0 && (d === null || d.lanes === 0) && (d = n.lastRenderedReducer, d !== null))
        try {
          var y = n.lastRenderedState, k = d(y, r);
          if (u.hasEagerState = !0, u.eagerState = k, zn(k, y))
            return $o(e, n, u, 0), lt === null && qo(), !1;
        } catch {
        }
      if (r = oc(e, n, u, l), r !== null)
        return mn(r, e, l), Wm(r, n, l), !0;
    }
    return !1;
  }
  function $c(e, n, r, l) {
    if (l = {
      lane: 2,
      revertLane: Mf(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ds(e)) {
      if (n) throw Error(o(479));
    } else
      n = oc(
        e,
        r,
        l,
        2
      ), n !== null && mn(n, e, 2);
  }
  function ds(e) {
    var n = e.alternate;
    return e === Me || n !== null && n === Me;
  }
  function Jm(e, n) {
    Na = as = !0;
    var r = e.pending;
    r === null ? n.next = n : (n.next = r.next, r.next = n), e.pending = n;
  }
  function Wm(e, n, r) {
    if ((r & 4194048) !== 0) {
      var l = n.lanes;
      l &= e.pendingLanes, r |= l, n.lanes = r, eh(e, r);
    }
  }
  var ps = {
    readContext: Zt,
    use: ss,
    useCallback: vt,
    useContext: vt,
    useEffect: vt,
    useImperativeHandle: vt,
    useLayoutEffect: vt,
    useInsertionEffect: vt,
    useMemo: vt,
    useReducer: vt,
    useRef: vt,
    useState: vt,
    useDebugValue: vt,
    useDeferredValue: vt,
    useTransition: vt,
    useSyncExternalStore: vt,
    useId: vt,
    useHostTransitionStatus: vt,
    useFormState: vt,
    useActionState: vt,
    useOptimistic: vt,
    useMemoCache: vt,
    useCacheRefresh: vt,
    useEffectEvent: vt
  }, eg = {
    readContext: Zt,
    use: ss,
    useCallback: function(e, n) {
      return tn().memoizedState = [
        e,
        n === void 0 ? null : n
      ], e;
    },
    useContext: Zt,
    useEffect: Lm,
    useImperativeHandle: function(e, n, r) {
      r = r != null ? r.concat([e]) : null, cs(
        4194308,
        4,
        Zm.bind(null, n, e),
        r
      );
    },
    useLayoutEffect: function(e, n) {
      return cs(4194308, 4, e, n);
    },
    useInsertionEffect: function(e, n) {
      cs(4, 2, e, n);
    },
    useMemo: function(e, n) {
      var r = tn();
      n = n === void 0 ? null : n;
      var l = e();
      if ($r) {
        xe(!0);
        try {
          e();
        } finally {
          xe(!1);
        }
      }
      return r.memoizedState = [l, n], l;
    },
    useReducer: function(e, n, r) {
      var l = tn();
      if (r !== void 0) {
        var u = r(n);
        if ($r) {
          xe(!0);
          try {
            r(n);
          } finally {
            xe(!1);
          }
        }
      } else u = n;
      return l.memoizedState = l.baseState = u, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      }, l.queue = e, e = e.dispatch = N2.bind(
        null,
        Me,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var n = tn();
      return e = { current: e }, n.memoizedState = e;
    },
    useState: function(e) {
      e = Uc(e);
      var n = e.queue, r = Km.bind(null, Me, n);
      return n.dispatch = r, [e.memoizedState, r];
    },
    useDebugValue: Ic,
    useDeferredValue: function(e, n) {
      var r = tn();
      return Hc(r, e, n);
    },
    useTransition: function() {
      var e = Uc(!1);
      return e = Gm.bind(
        null,
        Me,
        e.queue,
        !0,
        !1
      ), tn().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, n, r) {
      var l = Me, u = tn();
      if (Le) {
        if (r === void 0)
          throw Error(o(407));
        r = r();
      } else {
        if (r = n(), lt === null)
          throw Error(o(349));
        (qe & 127) !== 0 || wm(l, n, r);
      }
      u.memoizedState = r;
      var d = { value: r, getSnapshot: n };
      return u.queue = d, Lm(Sm.bind(null, l, d, e), [
        e
      ]), l.flags |= 2048, Oa(
        9,
        { destroy: void 0 },
        km.bind(
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
      var e = tn(), n = lt.identifierPrefix;
      if (Le) {
        var r = ci, l = ui;
        r = (l & ~(1 << 32 - ye(l) - 1)).toString(32) + r, n = "_" + n + "R_" + r, r = ls++, 0 < r && (n += "H" + r.toString(32)), n += "_";
      } else
        r = S2++, n = "_" + n + "r_" + r.toString(32) + "_";
      return e.memoizedState = n;
    },
    useHostTransitionStatus: qc,
    useFormState: Om,
    useActionState: Om,
    useOptimistic: function(e) {
      var n = tn();
      n.memoizedState = n.baseState = e;
      var r = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = r, n = $c.bind(
        null,
        Me,
        !0,
        r
      ), r.dispatch = n, [e, n];
    },
    useMemoCache: Dc,
    useCacheRefresh: function() {
      return tn().memoizedState = T2.bind(
        null,
        Me
      );
    },
    useEffectEvent: function(e) {
      var n = tn(), r = { impl: e };
      return n.memoizedState = r, function() {
        if ((Pe & 2) !== 0)
          throw Error(o(440));
        return r.impl.apply(void 0, arguments);
      };
    }
  }, tg = {
    readContext: Zt,
    use: ss,
    useCallback: $m,
    useContext: Zt,
    useEffect: Bc,
    useImperativeHandle: qm,
    useInsertionEffect: Im,
    useLayoutEffect: Hm,
    useMemo: Vm,
    useReducer: us,
    useRef: Um,
    useState: function() {
      return us(Bi);
    },
    useDebugValue: Ic,
    useDeferredValue: function(e, n) {
      var r = kt();
      return Ym(
        r,
        rt.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = us(Bi)[0], n = kt().memoizedState;
      return [
        typeof e == "boolean" ? e : Rl(e),
        n
      ];
    },
    useSyncExternalStore: vm,
    useId: Qm,
    useHostTransitionStatus: qc,
    useFormState: Dm,
    useActionState: Dm,
    useOptimistic: function(e, n) {
      var r = kt();
      return jm(r, rt, e, n);
    },
    useMemoCache: Dc,
    useCacheRefresh: Pm,
    useEffectEvent: Bm
  }, A2 = {
    readContext: Zt,
    use: ss,
    useCallback: $m,
    useContext: Zt,
    useEffect: Bc,
    useImperativeHandle: qm,
    useInsertionEffect: Im,
    useLayoutEffect: Hm,
    useMemo: Vm,
    useReducer: Rc,
    useRef: Um,
    useState: function() {
      return Rc(Bi);
    },
    useDebugValue: Ic,
    useDeferredValue: function(e, n) {
      var r = kt();
      return rt === null ? Hc(r, e, n) : Ym(
        r,
        rt.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Rc(Bi)[0], n = kt().memoizedState;
      return [
        typeof e == "boolean" ? e : Rl(e),
        n
      ];
    },
    useSyncExternalStore: vm,
    useId: Qm,
    useHostTransitionStatus: qc,
    useFormState: Rm,
    useActionState: Rm,
    useOptimistic: function(e, n) {
      var r = kt();
      return rt !== null ? jm(r, rt, e, n) : (r.baseState = e, [e, r.queue.dispatch]);
    },
    useMemoCache: Dc,
    useCacheRefresh: Pm,
    useEffectEvent: Bm
  };
  function Vc(e, n, r, l) {
    n = e.memoizedState, r = r(l, n), r = r == null ? n : X({}, n, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var Yc = {
    enqueueSetState: function(e, n, r) {
      e = e._reactInternals;
      var l = Tn(), u = tr(l);
      u.payload = n, r != null && (u.callback = r), n = nr(e, u, l), n !== null && (mn(n, e, l), Nl(n, e, l));
    },
    enqueueReplaceState: function(e, n, r) {
      e = e._reactInternals;
      var l = Tn(), u = tr(l);
      u.tag = 1, u.payload = n, r != null && (u.callback = r), n = nr(e, u, l), n !== null && (mn(n, e, l), Nl(n, e, l));
    },
    enqueueForceUpdate: function(e, n) {
      e = e._reactInternals;
      var r = Tn(), l = tr(r);
      l.tag = 2, n != null && (l.callback = n), n = nr(e, l, r), n !== null && (mn(n, e, r), Nl(n, e, r));
    }
  };
  function ng(e, n, r, l, u, d, y) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, d, y) : n.prototype && n.prototype.isPureReactComponent ? !kl(r, l) || !kl(u, d) : !0;
  }
  function ig(e, n, r, l) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(r, l), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(r, l), n.state !== e && Yc.enqueueReplaceState(n, n.state, null);
  }
  function Vr(e, n) {
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
  function rg(e) {
    Zo(e);
  }
  function ag(e) {
    console.error(e);
  }
  function lg(e) {
    Zo(e);
  }
  function hs(e, n) {
    try {
      var r = e.onUncaughtError;
      r(n.value, { componentStack: n.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function og(e, n, r) {
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
  function Gc(e, n, r) {
    return r = tr(r), r.tag = 3, r.payload = { element: null }, r.callback = function() {
      hs(e, n);
    }, r;
  }
  function sg(e) {
    return e = tr(e), e.tag = 3, e;
  }
  function ug(e, n, r, l) {
    var u = r.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var d = l.value;
      e.payload = function() {
        return u(d);
      }, e.callback = function() {
        og(n, r, l);
      };
    }
    var y = r.stateNode;
    y !== null && typeof y.componentDidCatch == "function" && (e.callback = function() {
      og(n, r, l), typeof u != "function" && (cr === null ? cr = /* @__PURE__ */ new Set([this]) : cr.add(this));
      var k = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: k !== null ? k : ""
      });
    });
  }
  function O2(e, n, r, l, u) {
    if (r.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (n = r.alternate, n !== null && Ur(
        n,
        r,
        u,
        !0
      ), r = qt.current, r !== null) {
        switch (r.tag) {
          case 31:
          case 13:
          case 19:
            return Qt === null ? Rs() : r.alternate === null && wt === 0 && (wt = 3), r.flags &= -257, r.flags |= 65536, r.lanes = u, l === es ? r.flags |= 16384 : (n = r.updateQueue, n === null ? r.updateQueue = /* @__PURE__ */ new Set([l]) : n.add(l), Af(e, l, u)), !1;
          case 22:
            return r.flags |= 65536, l === es ? r.flags |= 16384 : (n = r.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, r.updateQueue = n) : (r = n.retryQueue, r === null ? n.retryQueue = /* @__PURE__ */ new Set([l]) : r.add(l)), Af(e, l, u)), !1;
        }
        throw Error(o(435, r.tag));
      }
      return Af(e, l, u), Rs(), !1;
    }
    if (Le)
      return n = qt.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = u, l !== dc && (e = Error(o(422), { cause: l }), _l(Zn(e, r)))) : (l !== dc && (n = Error(o(423), {
        cause: l
      }), _l(
        Zn(n, r)
      )), e = e.current.alternate, e.flags |= 65536, u &= -u, e.lanes |= u, l = Zn(l, r), u = Gc(
        e.stateNode,
        l,
        u
      ), kc(e, u), wt !== 4 && (wt = 2)), !1;
    var d = Error(o(520), { cause: l });
    if (d = Zn(d, r), Vl === null ? Vl = [d] : Vl.push(d), wt !== 4 && (wt = 2), n === null) return !0;
    l = Zn(l, r), r = n;
    do {
      switch (r.tag) {
        case 3:
          return r.flags |= 65536, e = u & -u, r.lanes |= e, e = Gc(r.stateNode, l, e), kc(r, e), !1;
        case 1:
          if (n = r.type, d = r.stateNode, (r.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (cr === null || !cr.has(d))))
            return r.flags |= 65536, u &= -u, r.lanes |= u, u = sg(u), ug(
              u,
              e,
              r,
              l
            ), kc(r, u), !1;
          break;
        case 22:
          if (r.memoizedState !== null)
            return r.flags |= 65536, !1;
      }
      r = r.return;
    } while (r !== null);
    return !1;
  }
  var Fc = Error(o(461)), Ct = !1;
  function Mt(e, n, r, l) {
    n.child = e === null ? pm(n, null, r, l) : qr(
      n,
      e.child,
      r,
      l
    );
  }
  function cg(e, n, r, l, u) {
    r = r.render;
    var d = n.ref;
    if ("ref" in l) {
      var y = {};
      for (var k in l)
        k !== "ref" && (y[k] = l[k]);
    } else y = l;
    return Lr(n), l = Tc(
      e,
      n,
      r,
      y,
      d,
      u
    ), k = Nc(), e !== null && !Ct ? (Ac(e, n, u), Ii(e, n, u)) : (Le && k && Fo(n), n.flags |= 1, Mt(e, n, l, u), n.child);
  }
  function fg(e, n, r, l, u) {
    if (e === null) {
      var d = r.type;
      return typeof d == "function" && !sc(d) && d.defaultProps === void 0 && r.compare === null ? (n.tag = 15, n.type = d, dg(
        e,
        n,
        d,
        l,
        u
      )) : (e = Yo(
        r.type,
        null,
        l,
        n,
        n.mode,
        u
      ), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (d = e.child, !tf(e, u)) {
      var y = d.memoizedProps;
      if (r = r.compare, r = r !== null ? r : kl, r(y, l) && e.ref === n.ref)
        return Ii(e, n, u);
    }
    return n.flags |= 1, e = Di(d, l), e.ref = n.ref, e.return = n, n.child = e;
  }
  function dg(e, n, r, l, u) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (kl(d, l) && e.ref === n.ref)
        if (Ct = !1, n.pendingProps = l = d, tf(e, u))
          (e.flags & 131072) !== 0 && (Ct = !0);
        else
          return n.lanes = e.lanes, Ii(e, n, u);
    }
    return Xc(
      e,
      n,
      r,
      l,
      u
    );
  }
  function pg(e, n, r, l) {
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
        return hg(
          e,
          n,
          d,
          r,
          l
        );
      }
      if ((r & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Jo(
          n,
          d !== null ? d.cachePool : null
        ), d !== null ? gm(n, d) : zc(), bm(n);
      else
        return l = n.lanes = 536870912, hg(
          e,
          n,
          d !== null ? d.baseLanes | r : r,
          r,
          l
        );
    } else
      d !== null ? (Jo(n, d.cachePool), gm(n, d), ar(), n.memoizedState = null) : (e !== null && Jo(n, null), zc(), ar());
    return Mt(e, n, u, r), n.child;
  }
  function Ll(e, n) {
    return e !== null && e.tag === 22 || n.stateNode !== null || (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.sibling;
  }
  function hg(e, n, r, l, u) {
    var d = xc();
    return d = d === null ? null : { parent: jt._currentValue, pool: d }, n.memoizedState = {
      baseLanes: r,
      cachePool: d
    }, e !== null && Jo(n, null), zc(), bm(n), e !== null && Ur(e, n, l, !0), n.childLanes = u, null;
  }
  function ms(e, n) {
    return n = gs(
      { mode: n.mode, children: n.children },
      e.mode
    ), n.ref = e.ref, e.child = n, n.return = e, n;
  }
  function mg(e, n, r) {
    return qr(n, e.child, null, r), e = ms(n, n.pendingProps), e.flags |= 2, _n(n), n.memoizedState = null, e;
  }
  function D2(e, n, r) {
    var l = n.pendingProps, u = (n.flags & 128) !== 0;
    if (n.flags &= -129, e === null) {
      if (Le) {
        if (l.mode === "hidden")
          return e = ms(n, l), n.lanes = 536870912, e.memoizedState = { baseLanes: 0, cachePool: null }, Ll(null, e);
        if (jc(n), (e = ut) ? (e = Zb(
          e,
          Vn
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (n.memoizedState = {
          dehydrated: e,
          treeContext: Qi !== null ? { id: ui, overflow: ci } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, r = Jh(e), r.return = n, n.child = r, Ut = n, ut = null)) : e = null, e === null) throw Ki(n);
        return n.lanes = 536870912, null;
      }
      return ms(n, l);
    }
    var d = e.memoizedState;
    if (d !== null) {
      var y = d.dehydrated;
      if (jc(n), u)
        if (n.flags & 256)
          n.flags &= -257, n = mg(
            e,
            n,
            r
          );
        else if (n.memoizedState !== null)
          n.child = e.child, n.flags |= 128, n = null;
        else throw Error(o(558));
      else if (Ct || Ur(e, n, r, !1), u = (r & e.childLanes) !== 0, Ct || u) {
        if (ir.current === null) {
          if (l = lt, l !== null && (y = th(l, r), y !== 0 && y !== d.retryLane))
            throw d.retryLane = y, Or(e, y), mn(l, e, y), Fc;
          Rs();
        }
        n = mg(
          e,
          n,
          r
        );
      } else
        e = d.treeContext, ut = Gn(y.nextSibling), Ut = n, Le = !0, Pi = null, Vn = !1, e !== null && tm(n, e), n = ms(n, l), n.flags |= 134221824;
      return n;
    }
    return e = Di(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = n.ref, n.child = e, e.return = n, e;
  }
  function Da(e, n) {
    var r = n.ref;
    if (r === null)
      e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof r != "function" && typeof r != "object")
        throw Error(o(284));
      (e === null || e.ref !== r) && (n.flags |= 4194816);
    }
  }
  function Xc(e, n, r, l, u) {
    return Lr(n), r = Tc(
      e,
      n,
      r,
      l,
      void 0,
      u
    ), l = Nc(), e !== null && !Ct ? (Ac(e, n, u), Ii(e, n, u)) : (Le && l && Fo(n), n.flags |= 1, Mt(e, n, r, u), n.child);
  }
  function gg(e, n, r, l, u, d) {
    return Lr(n), n.updateQueue = null, r = ym(
      n,
      l,
      r,
      u
    ), xm(e), l = Nc(), e !== null && !Ct ? (Ac(e, n, d), Ii(e, n, d)) : (Le && l && Fo(n), n.flags |= 1, Mt(e, n, r, d), n.child);
  }
  function bg(e, n, r, l, u) {
    if (Lr(n), n.stateNode === null) {
      var d = Sa, y = r.contextType;
      typeof y == "object" && y !== null && (d = Zt(y)), d = new r(l, d), n.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, d.updater = Yc, n.stateNode = d, d._reactInternals = n, d = n.stateNode, d.props = l, d.state = n.memoizedState, d.refs = {}, vc(n), y = r.contextType, d.context = typeof y == "object" && y !== null ? Zt(y) : Sa, d.state = n.memoizedState, y = r.getDerivedStateFromProps, typeof y == "function" && (Vc(
        n,
        r,
        y,
        l
      ), d.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (y = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), y !== d.state && Yc.enqueueReplaceState(d, d.state, null), Ol(n, l, d, u), Al(), d.state = n.memoizedState), typeof d.componentDidMount == "function" && (n.flags |= 4194308), l = !0;
    } else if (e === null) {
      d = n.stateNode;
      var k = n.memoizedProps, _ = Vr(r, k);
      d.props = _;
      var R = d.context, q = r.contextType;
      y = Sa, typeof q == "object" && q !== null && (y = Zt(q));
      var Q = r.getDerivedStateFromProps;
      q = typeof Q == "function" || typeof d.getSnapshotBeforeUpdate == "function", k = n.pendingProps !== k, q || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (k || R !== y) && ig(
        n,
        d,
        l,
        y
      ), er = !1;
      var D = n.memoizedState;
      d.state = D, Ol(n, l, d, u), Al(), R = n.memoizedState, k || D !== R || er ? (typeof Q == "function" && (Vc(
        n,
        r,
        Q,
        l
      ), R = n.memoizedState), (_ = er || ng(
        n,
        r,
        _,
        l,
        D,
        R,
        y
      )) ? (q || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = l, n.memoizedState = R), d.props = l, d.state = R, d.context = y, l = _) : (typeof d.componentDidMount == "function" && (n.flags |= 4194308), l = !1);
    } else {
      d = n.stateNode, wc(e, n), y = n.memoizedProps, q = Vr(r, y), d.props = q, Q = n.pendingProps, D = d.context, R = r.contextType, _ = Sa, typeof R == "object" && R !== null && (_ = Zt(R)), k = r.getDerivedStateFromProps, (R = typeof k == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (y !== Q || D !== _) && ig(
        n,
        d,
        l,
        _
      ), er = !1, D = n.memoizedState, d.state = D, Ol(n, l, d, u), Al();
      var I = n.memoizedState;
      y !== Q || D !== I || er || e !== null && e.dependencies !== null && Po(e.dependencies) ? (typeof k == "function" && (Vc(
        n,
        r,
        k,
        l
      ), I = n.memoizedState), (q = er || ng(
        n,
        r,
        q,
        l,
        D,
        I,
        _
      ) || e !== null && e.dependencies !== null && Po(e.dependencies)) ? (R || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(l, I, _), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(
        l,
        I,
        _
      )), typeof d.componentDidUpdate == "function" && (n.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || y === e.memoizedProps && D === e.memoizedState || (n.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && D === e.memoizedState || (n.flags |= 1024), n.memoizedProps = l, n.memoizedState = I), d.props = l, d.state = I, d.context = _, l = q) : (typeof d.componentDidUpdate != "function" || y === e.memoizedProps && D === e.memoizedState || (n.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && D === e.memoizedState || (n.flags |= 1024), l = !1);
    }
    return d = l, Da(e, n), l = (n.flags & 128) !== 0, d || l ? (d = n.stateNode, r = l && typeof r.getDerivedStateFromError != "function" ? null : d.render(), n.flags |= 1, e !== null && l ? (n.child = qr(
      n,
      e.child,
      null,
      u
    ), n.child = qr(
      n,
      null,
      r,
      u
    )) : Mt(e, n, r, u), n.memoizedState = d.state, e = n.child) : e = Ii(
      e,
      n,
      u
    ), e;
  }
  function xg(e, n, r, l) {
    return Mr(), n.flags |= 256, Mt(e, n, r, l), n.child;
  }
  var Qc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Pc(e) {
    return { baseLanes: e, cachePool: om() };
  }
  function Kc(e, n, r) {
    return e = e !== null ? e.childLanes & ~r : 0, n && (e |= Cn), e;
  }
  function yg(e, n, r) {
    var l = n.pendingProps, u = !1, d = (n.flags & 128) !== 0, y;
    if ((y = d) || (y = e !== null && e.memoizedState === null ? !1 : ($t.current & 2) !== 0), y && (u = !0, n.flags &= -129), y = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
      if (Le) {
        if (u ? rr(n) : ar(), (e = ut) ? (e = Zb(
          e,
          Vn
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (n.memoizedState = {
          dehydrated: e,
          treeContext: Qi !== null ? { id: ui, overflow: ci } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, r = Jh(e), r.return = n, n.child = r, Ut = n, ut = null)) : e = null, e === null) throw Ki(n);
        return Kf(e) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      return d = l.children, l = l.fallback, u ? (ar(), u = n.mode, d = gs(
        { mode: "hidden", children: d },
        u
      ), l = Dr(
        l,
        u,
        r,
        null
      ), d.return = n, l.return = n, d.sibling = l, n.child = d, l = n.child, l.memoizedState = Pc(r), l.childLanes = Kc(
        e,
        y,
        r
      ), n.memoizedState = Qc, Ll(null, l)) : (rr(n), Jc(n, d));
    }
    var k = e.memoizedState;
    if (k !== null) {
      var _ = k.dehydrated;
      if (_ !== null)
        return M2(
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
    return u ? (ar(), u = l.fallback, d = n.mode, k = e.child, _ = k.sibling, l = Di(k, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = k.subtreeFlags & 1206910976, _ !== null ? u = Di(_, u) : (u = Dr(
      u,
      d,
      r,
      null
    ), u.flags |= 2), u.return = n, l.return = n, l.sibling = u, n.child = l, Ll(null, l), l = n.child, u = e.child.memoizedState, u === null ? u = Pc(r) : (d = u.cachePool, d !== null ? (k = jt._currentValue, d = d.parent !== k ? { parent: k, pool: k } : d) : d = om(), u = {
      baseLanes: u.baseLanes | r,
      cachePool: d
    }), l.memoizedState = u, l.childLanes = Kc(
      e,
      y,
      r
    ), n.memoizedState = Qc, Ll(e.child, l)) : (rr(n), r = e.child, e = r.sibling, r = Di(r, {
      mode: "visible",
      children: l.children
    }), r.return = n, r.sibling = null, e !== null && (y = n.deletions, y === null ? (n.deletions = [e], n.flags |= 16) : y.push(e)), n.child = r, n.memoizedState = null, r);
  }
  function Jc(e, n) {
    return n = gs(
      { mode: "visible", children: n },
      e.mode
    ), n.return = e, e.child = n;
  }
  function gs(e, n) {
    return e = fn(22, e, null, n), e.lanes = 0, e;
  }
  function bs(e, n, r) {
    return qr(n, e.child, null, r), e = Jc(
      n,
      n.pendingProps.children
    ), e.flags |= 2, n.memoizedState = null, e;
  }
  function M2(e, n, r, l, u, d, y, k) {
    if (r)
      return n.flags & 256 ? (rr(n), n.flags &= -257, bs(
        e,
        n,
        k
      )) : n.memoizedState !== null ? (ar(), n.child = e.child, n.flags |= 128, null) : (ar(), d = u.fallback, y = n.mode, u = gs(
        { mode: "visible", children: u.children },
        y
      ), d = Dr(
        d,
        y,
        k,
        null
      ), d.flags |= 2, u.return = n, d.return = n, u.sibling = d, n.child = u, qr(n, e.child, null, k), u = n.child, u.memoizedState = Pc(k), u.childLanes = Kc(
        e,
        l,
        k
      ), n.memoizedState = Qc, Ll(null, u));
    if (rr(n), Kf(d)) {
      if (l = d.nextSibling && d.nextSibling.dataset, l) var _ = l.dgst;
      return l = _, l !== "" && (u = Error(o(419)), u.stack = "", u.digest = l, _l({ value: u, source: null, stack: null })), bs(
        e,
        n,
        k
      );
    }
    if (Ct || Ur(e, n, k, !1), l = (k & e.childLanes) !== 0, Ct || l) {
      if (ir.current !== null)
        return bs(
          e,
          n,
          k
        );
      if (l = lt, l !== null && (u = th(
        l,
        k
      ), u !== 0 && u !== y.retryLane))
        throw y.retryLane = u, Or(e, u), mn(l, e, u), Fc;
      return Pf(d) || Rs(), bs(
        e,
        n,
        k
      );
    }
    return Pf(d) ? (n.flags |= 192, n.child = e.child, null) : (e = y.treeContext, ut = Gn(d.nextSibling), Ut = n, Le = !0, Pi = null, Vn = !1, e !== null && tm(n, e), n = Jc(
      n,
      u.children
    ), n.flags |= 134221824, n);
  }
  function vg(e, n, r) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n), Qo(e.return, n, r);
  }
  function wg(e) {
    for (var n = null; e !== null; ) {
      var r = e.alternate;
      r !== null && rs(r) === null && (n = e), e = e.sibling;
    }
    return n;
  }
  function xs(e, n, r, l, u, d) {
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
  function Wc(e) {
    var n = e.child;
    for (e.child = null; n !== null; ) {
      var r = n.sibling;
      n.sibling = e.child, e.child = n, n = r;
    }
  }
  function ef(e, n, r) {
    var l = n.pendingProps, u = l.revealOrder, d = l.tail;
    l = l.children;
    var y = $t.current;
    if (n.flags & 128)
      return Dl(n, y), null;
    var k = (y & 2) !== 0;
    if (k ? (y = y & 1 | 2, n.flags |= 128) : y &= 1, Dl(n, y), u === "backwards" && e !== null ? (Wc(e), Mt(e, n, l, r), Wc(e)) : Mt(e, n, l, r), l = Le ? zl : 0, !k && e !== null && (e.flags & 128) !== 0)
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && vg(e, r, n);
        else if (e.tag === 19)
          vg(e, r, n);
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
        r = wg(n.child), r === null ? (u = n.child, n.child = null) : (u = r.sibling, r.sibling = null, Wc(n)), xs(
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
          if (e = u.alternate, e !== null && rs(e) === null) {
            n.child = u;
            break;
          }
          e = u.sibling, u.sibling = r, r = u, u = e;
        }
        xs(
          n,
          !0,
          r,
          null,
          d,
          l
        );
        break;
      case "together":
        xs(
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
        r = wg(n.child), r === null ? (u = n.child, n.child = null) : (u = r.sibling, r.sibling = null), xs(
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
  function kg(e, n, r) {
    var l = n.pendingProps;
    return Ji(n, n.type, l.value), Mt(e, n, l.children, r), n.child;
  }
  function Ii(e, n, r) {
    if (e !== null && (n.dependencies = e.dependencies), ur |= n.lanes, (r & n.childLanes) === 0)
      if (e !== null) {
        if (Ur(
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
      for (e = n.child, r = Di(e, e.pendingProps), n.child = r, r.return = n; e.sibling !== null; )
        e = e.sibling, r = r.sibling = Di(e, e.pendingProps), r.return = n;
      r.sibling = null;
    }
    return n.child;
  }
  function tf(e, n) {
    return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Po(e)));
  }
  function R2(e, n, r) {
    switch (n.tag) {
      case 3:
        zi(n, n.stateNode.containerInfo), Ji(n, jt, e.memoizedState.cache), Mr();
        break;
      case 27:
      case 5:
        _i(n);
        break;
      case 4:
        zi(n, n.stateNode.containerInfo);
        break;
      case 10:
        Ji(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 31:
        if (n.memoizedState !== null)
          return n.flags |= 128, jc(n), null;
        break;
      case 13:
        var l = n.memoizedState;
        if (l !== null) {
          if (l.dehydrated !== null)
            return rr(n), n.flags |= 128, null;
          l = Ur(
            e,
            n,
            r,
            !1
          );
          var u = n.child.childLanes;
          return l || (r & u) !== 0 ? yg(e, n, r) : (rr(n), e = Ii(
            e,
            n,
            r
          ), e !== null ? e.sibling : null);
        }
        rr(n);
        break;
      case 19:
        if (n.flags & 128)
          return ef(
            e,
            n,
            r
          );
        if (u = (e.flags & 128) !== 0, l = (r & n.childLanes) !== 0, l || (Ur(
          e,
          n,
          r,
          !1
        ), l = (r & n.childLanes) !== 0), u) {
          if (l)
            return ef(
              e,
              n,
              r
            );
          n.flags |= 128;
        }
        if (u = n.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), Dl(n, $t.current), l) break;
        return null;
      case 22:
        return n.lanes = 0, pg(
          e,
          n,
          r,
          n.pendingProps
        );
      case 24:
        Ji(n, jt, e.memoizedState.cache);
    }
    return Ii(e, n, r);
  }
  function Sg(e, n, r) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps)
        Ct = !0;
      else {
        if (!tf(e, r) && (n.flags & 128) === 0)
          return Ct = !1, R2(
            e,
            n,
            r
          );
        Ct = (e.flags & 131072) !== 0;
      }
    else
      Ct = !1, Le && (n.flags & 1048576) !== 0 && em(n, zl, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          var l = n.pendingProps;
          if (e = Hr(n.elementType), n.type = e, typeof e == "function")
            sc(e) ? (l = Vr(e, l), n.tag = 1, n = bg(
              null,
              n,
              e,
              l,
              r
            )) : (n.tag = 0, n = Xc(
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
                n.tag = 11, n = cg(
                  null,
                  n,
                  e,
                  l,
                  r
                );
                break e;
              } else if (u === Ne) {
                n.tag = 14, n = fg(
                  null,
                  n,
                  e,
                  l,
                  r
                );
                break e;
              } else if (u === te) {
                n.tag = 10, n.type = e, n = kg(
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
        return Xc(
          e,
          n,
          n.type,
          n.pendingProps,
          r
        );
      case 1:
        return l = n.type, u = Vr(
          l,
          n.pendingProps
        ), bg(
          e,
          n,
          l,
          u,
          r
        );
      case 3:
        e: {
          if (zi(
            n,
            n.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          l = n.pendingProps;
          var d = n.memoizedState;
          u = d.element, wc(e, n), Ol(n, l, null, r);
          var y = n.memoizedState;
          if (l = y.cache, Ji(n, jt, l), l !== d.cache && mc(
            n,
            [jt],
            r,
            !0
          ), Al(), l = y.element, d.isDehydrated)
            if (d = {
              element: l,
              isDehydrated: !1,
              cache: y.cache
            }, n.updateQueue.baseState = d, n.memoizedState = d, n.flags & 256) {
              n = xg(
                e,
                n,
                l,
                r
              );
              break e;
            } else if (l !== u) {
              u = Zn(
                Error(o(424)),
                n
              ), _l(u), n = xg(
                e,
                n,
                l,
                r
              );
              break e;
            } else
              for (e = n.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, ut = Gn(e.firstChild), Ut = n, Le = !0, Pi = null, Vn = !0, r = pm(
                n,
                null,
                l,
                r
              ), n.child = r; r; )
                r.flags = r.flags & -3 | 134221824, r = r.sibling;
          else {
            if (Mr(), l === u) {
              n = Ii(
                e,
                n,
                r
              );
              break e;
            }
            Mt(e, n, l, r);
          }
          n = n.child;
        }
        return n;
      case 26:
        return Da(e, n), e === null ? (r = Xb(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = r : Le || (n.stateNode = Eb(
          n.type,
          n.pendingProps,
          xt.current,
          n
        )) : n.memoizedState = Xb(
          n.type,
          e.memoizedProps,
          n.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return _i(n), e === null && Le && (l = n.stateNode = Vb(
          n.type,
          n.pendingProps,
          xt.current
        ), Ut = n, Vn = !0, u = ut, pr(n.type) ? (Jf = u, ut = Gn(l.firstChild)) : ut = u), Mt(
          e,
          n,
          n.pendingProps.children,
          r
        ), Da(e, n), e === null && (n.flags |= 4194304), n.child;
      case 5:
        return e === null && Le && ((u = l = ut) && (l = Tk(
          l,
          n.type,
          n.pendingProps,
          Vn
        ), l !== null ? (n.stateNode = l, Ut = n, ut = Gn(l.firstChild), Vn = !1, u = !0) : u = !1), u || Ki(n)), _i(n), u = n.type, d = n.pendingProps, y = e !== null ? e.memoizedProps : null, l = d.children, $f(u, d) ? l = null : y !== null && $f(u, y) && (n.flags |= 32), n.memoizedState !== null && (u = Tc(
          e,
          n,
          z2,
          null,
          null,
          r
        ), Ka._currentValue = u), Da(e, n), Mt(e, n, l, r), n.child;
      case 6:
        return e === null && Le && ((e = r = ut) && (r = Nk(
          r,
          n.pendingProps,
          Vn
        ), r !== null ? (n.stateNode = r, Ut = n, ut = null, e = !0) : e = !1), e || Ki(n)), null;
      case 13:
        return yg(e, n, r);
      case 4:
        return zi(
          n,
          n.stateNode.containerInfo
        ), l = n.pendingProps, e === null ? n.child = qr(
          n,
          null,
          l,
          r
        ) : Mt(e, n, l, r), n.child;
      case 11:
        return cg(
          e,
          n,
          n.type,
          n.pendingProps,
          r
        );
      case 7:
        return l = n.pendingProps, Da(e, n), Mt(e, n, l, r), n.child;
      case 8:
        return Mt(
          e,
          n,
          n.pendingProps.children,
          r
        ), n.child;
      case 12:
        return Mt(
          e,
          n,
          n.pendingProps.children,
          r
        ), n.child;
      case 10:
        return kg(e, n, r);
      case 9:
        return u = n.type._context, l = n.pendingProps.children, Lr(n), u = Zt(u), l = l(u), n.flags |= 1, Mt(e, n, l, r), n.child;
      case 14:
        return fg(
          e,
          n,
          n.type,
          n.pendingProps,
          r
        );
      case 15:
        return dg(
          e,
          n,
          n.type,
          n.pendingProps,
          r
        );
      case 19:
        return ef(e, n, r);
      case 31:
        return D2(e, n, r);
      case 22:
        return pg(
          e,
          n,
          r,
          n.pendingProps
        );
      case 24:
        return Lr(n), l = Zt(jt), e === null ? (u = xc(), u === null && (u = lt, d = gc(), u.pooledCache = d, d.refCount++, d !== null && (u.pooledCacheLanes |= r), u = d), n.memoizedState = { parent: l, cache: u }, vc(n), Ji(n, jt, u)) : ((e.lanes & r) !== 0 && (wc(e, n), Ol(n, null, null, r), Al()), u = e.memoizedState, d = n.memoizedState, u.parent !== l ? (u = { parent: l, cache: l }, n.memoizedState = u, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = u), Ji(n, jt, l)) : (l = d.cache, Ji(n, jt, l), l !== u.cache && mc(
          n,
          [jt],
          r,
          !0
        ))), Mt(
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
        }), l = n.pendingProps, l.name != null && l.name !== "auto" ? n.flags |= e === null ? 18882560 : 18874368 : Le && Fo(n), e !== null && e.memoizedProps.name !== l.name ? n.flags |= 4194816 : Da(e, n), Mt(e, n, l.children, r), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(o(156, n.tag));
  }
  function Hi(e) {
    e.flags |= 4;
  }
  function nf(e, n, r, l, u) {
    var d;
    if ((d = (e.mode & 32) !== 0) && (d = r === null ? Jb(n, l) : Jb(n, l) && (l.src !== r.src || l.srcSet !== r.srcSet)), d) {
      if (e.flags |= 16777216, (u & 335544128) === u)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (rb()) e.flags |= 8192;
        else
          throw Zr = es, yc;
    } else e.flags &= -16777217;
  }
  function zg(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Wb(n))
      if (rb()) e.flags |= 8192;
      else
        throw Zr = es, yc;
  }
  function ys(e, n) {
    n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? Jp() : 536870912, e.lanes |= n, Ba |= n);
  }
  function Bl(e, n) {
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
  function ct(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, r = 0, l = 0;
    if (n)
      for (var u = e.child; u !== null; )
        r |= u.lanes | u.childLanes, l |= u.subtreeFlags & 1206910976, l |= u.flags & 1206910976, u.return = e, u = u.sibling;
    else
      for (u = e.child; u !== null; )
        r |= u.lanes | u.childLanes, l |= u.subtreeFlags, l |= u.flags, u.return = e, u = u.sibling;
    return e.subtreeFlags |= l, e.childLanes = r, n;
  }
  function U2(e, n, r) {
    var l = n.pendingProps;
    switch (fc(n), n.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ct(n), null;
      case 1:
        return ct(n), null;
      case 3:
        return r = n.stateNode, l = null, e !== null && (l = e.memoizedState.cache), n.memoizedState.cache !== l && (n.flags |= 2048), Ui(jt), Rn(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ja(n) ? Hi(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, pc())), ct(n), null;
      case 26:
        var u = n.type, d = n.memoizedState;
        return e === null ? (Hi(n), d !== null ? (ct(n), zg(n, d)) : (ct(n), nf(
          n,
          u,
          null,
          l,
          r
        ))) : d ? d !== e.memoizedState ? (Hi(n), ct(n), zg(n, d)) : (ct(n), n.flags &= -16777217) : (e = e.memoizedProps, e !== l && Hi(n), ct(n), nf(
          n,
          u,
          e,
          l,
          r
        )), null;
      case 27:
        if (Un(n), r = xt.current, u = n.type, e !== null && n.stateNode != null)
          e.memoizedProps !== l && Hi(n);
        else {
          if (!l) {
            if (n.stateNode === null)
              throw Error(o(166));
            return ct(n), n.subtreeFlags &= -33554433, null;
          }
          e = Ot.current, ja(n) ? nm(n) : (e = Vb(u, l, r), n.stateNode = e, Hi(n));
        }
        return ct(n), n.subtreeFlags &= -33554433, null;
      case 5:
        if (Un(n), u = n.type, e !== null && n.stateNode != null)
          e.memoizedProps !== l && Hi(n);
        else {
          if (!l) {
            if (n.stateNode === null)
              throw Error(o(166));
            return ct(n), n.subtreeFlags &= -33554433, null;
          }
          if (d = Ot.current, ja(n))
            nm(n);
          else {
            var y = Ql(
              xt.current
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
            d[Ht] = n, d[cn] = l;
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
            e: switch (Yt(d, u, l), u) {
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
            l && Hi(n);
          }
        }
        return ct(n), n.subtreeFlags &= -33554433, nf(
          n,
          n.type,
          e === null ? null : e.memoizedProps,
          n.pendingProps,
          r
        ), null;
      case 6:
        if (e && n.stateNode != null)
          e.memoizedProps !== l && Hi(n);
        else {
          if (typeof l != "string" && n.stateNode === null)
            throw Error(o(166));
          if (e = xt.current, ja(n)) {
            if (e = n.stateNode, r = n.memoizedProps, l = null, u = Ut, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  l = u.memoizedProps;
              }
            e[Ht] = n, e = !!(e.nodeValue === r || l !== null && l.suppressHydrationWarning === !0 || Sb(e.nodeValue, r)), e || Ki(n, !0);
          } else
            e = Ql(e).createTextNode(
              l
            ), e[Ht] = n, n.stateNode = e;
        }
        return ct(n), null;
      case 31:
        if (r = n.memoizedState, e === null || e.memoizedState !== null) {
          if (l = ja(n), r !== null) {
            if (e === null) {
              if (!l) throw Error(o(318));
              if (e = n.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[Ht] = n;
            } else
              Mr(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            ct(n), e = !1;
          } else
            r = pc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = r), e = !0;
          if (!e)
            return n.flags & 256 ? (_n(n), n) : (_n(n), null);
          if ((n.flags & 128) !== 0)
            throw Error(o(558));
        }
        return ct(n), null;
      case 13:
        if (l = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (u = ja(n), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(o(318));
              if (u = n.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[Ht] = n;
            } else
              Mr(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            ct(n), u = !1;
          } else
            u = pc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return n.flags & 256 ? (_n(n), n) : (_n(n), null);
        }
        return _n(n), (n.flags & 128) !== 0 ? (n.lanes = r, n) : (r = l !== null, e = e !== null && e.memoizedState !== null, r && (l = n.child, u = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (u = l.alternate.memoizedState.cachePool.pool), d = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (d = l.memoizedState.cachePool.pool), d !== u && (l.flags |= 2048)), r !== e && r && (n.child.flags |= 8192), ys(n, n.updateQueue), ct(n), null);
      case 4:
        return Rn(), e === null && Bf(n.stateNode.containerInfo), n.flags |= 67108864, ct(n), null;
      case 10:
        return Ui(n.type), ct(n), null;
      case 19:
        if (Ec(n), l = n.memoizedState, l === null) return ct(n), null;
        if (u = (n.flags & 128) !== 0, d = l.rendering, d === null)
          if (u) Bl(l, !1);
          else {
            if (wt !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = n.child; e !== null; ) {
                if (d = rs(e), d !== null) {
                  for (n.flags |= 128, Bl(l, !1), e = d.updateQueue, n.updateQueue = e, ys(n, e), n.subtreeFlags = 0, e = r, r = n.child; r !== null; )
                    Kh(r, e), r = r.sibling;
                  return Dl(
                    n,
                    $t.current & 1 | 2
                  ), Le && Mi(n, l.treeForkCount), n.child;
                }
                e = e.sibling;
              }
            l.tail !== null && dt() > As && (n.flags |= 128, u = !0, Bl(l, !1), n.lanes = 4194304);
          }
        else {
          if (!u)
            if (e = rs(d), e !== null) {
              if (n.flags |= 128, u = !0, e = e.updateQueue, n.updateQueue = e, ys(n, e), Bl(l, !0), l.tail === null && l.tailMode !== "collapsed" && l.tailMode !== "visible" && !d.alternate && !Le)
                return ct(n), null;
            } else
              2 * dt() - l.renderingStartTime > As && r !== 536870912 && (n.flags |= 128, u = !0, Bl(l, !1), n.lanes = 4194304);
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
          return l.rendering = e, l.tail = e.sibling, l.renderingStartTime = dt(), e.sibling = null, d = $t.current, d = u ? d & 1 | 2 : d & 1, l.tailMode === "visible" || l.tailMode === "collapsed" || !r || Le ? Dl(n, d) : (r = d, Ge(qt, n), Ge($t, r), Qt === null && (Qt = n)), Le && Mi(n, l.treeForkCount), e;
        }
        return ct(n), null;
      case 22:
      case 23:
        return _n(n), _c(), l = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (n.flags |= 8192) : l && (n.flags |= 8192), l ? (r & 536870912) !== 0 && (n.flags & 128) === 0 && (ct(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ct(n), r = n.updateQueue, r !== null && ys(n, r.retryQueue), r = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== r && (n.flags |= 2048), e !== null && Ie(Ir), null;
      case 24:
        return r = null, e !== null && (r = e.memoizedState.cache), n.memoizedState.cache !== r && (n.flags |= 2048), Ui(jt), ct(n), null;
      case 25:
        return null;
      case 30:
        return n.flags |= 33554432, ct(n), null;
    }
    throw Error(o(156, n.tag));
  }
  function L2(e, n) {
    switch (fc(n), n.tag) {
      case 1:
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return Ui(jt), Rn(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return Un(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (_n(n), n.alternate === null)
            throw Error(o(340));
          Mr();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 13:
        if (_n(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(o(340));
          Mr();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return Ec(n), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, e = n.memoizedState, e !== null && (e.rendering = null, e.tail = null), n.flags |= 4, n) : null;
      case 4:
        return Rn(), null;
      case 10:
        return Ui(n.type), null;
      case 22:
      case 23:
        return _n(n), _c(), e !== null && Ie(Ir), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 24:
        return Ui(jt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function _g(e, n) {
    switch (fc(n), n.tag) {
      case 3:
        Ui(jt), Rn();
        break;
      case 26:
      case 27:
      case 5:
        Un(n);
        break;
      case 4:
        Rn();
        break;
      case 31:
        n.memoizedState !== null && _n(n);
        break;
      case 13:
        _n(n);
        break;
      case 19:
        Ec(n);
        break;
      case 10:
        Ui(n.type);
        break;
      case 22:
      case 23:
        _n(n), _c(), e !== null && Ie(Ir);
        break;
      case 24:
        Ui(jt);
    }
  }
  function Il(e, n) {
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
  function lr(e, n, r) {
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
  function jg(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var r = e.stateNode;
      try {
        mm(n, r);
      } catch (l) {
        et(e, e.return, l);
      }
    }
  }
  function Eg(e, n, r) {
    r.props = Vr(
      e.type,
      e.memoizedProps
    ), r.state = e.memoizedState;
    try {
      r.componentWillUnmount();
    } catch (l) {
      et(e, n, l);
    }
  }
  function fi(e, n) {
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
            var u = e.stateNode, d = Ai(e.memoizedProps, u);
            (u.ref === null || u.ref.name !== d) && (u.ref = Mb(d)), l = u.ref;
            break;
          case 7:
            if (e.stateNode === null) {
              var y = new Nn(e);
              b(
                e.child,
                !1,
                Ek,
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
  function Vt(e, n) {
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
  function vs(e, n) {
    if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && n !== null)
      for (var r = 0; r < n.length; r++)
        Hb(
          e.stateNode,
          n[r]
        );
  }
  function Cg(e) {
    for (var n = e.return; n !== null && (af(n) && Hb(e.stateNode, n.stateNode), !rf(n)); )
      n = n.return;
  }
  function Hl(e) {
    for (var n = e.return; n !== null && (af(n) && Ck(e.stateNode, n.stateNode), !rf(n)); )
      n = n.return;
  }
  function rf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 27;
  }
  function af(e) {
    return e && e.tag === 7 && e.stateNode !== null;
  }
  function lf(e) {
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
  function of(e, n, r) {
    try {
      var l = e.stateNode;
      uk(l, e.type, r, n), l[cn] = n;
    } catch (u) {
      et(e, e.return, u);
    }
  }
  function Tg(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && pr(e.type) || e.tag === 4;
  }
  function sf(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Tg(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && pr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function uf(e, n, r, l) {
    var u = e.tag;
    if (u === 5 || u === 6)
      u = e.stateNode, n ? (r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r).insertBefore(u, n) : (n = r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r, n.appendChild(u), r = r._reactRootContainer, r != null || n.onclick !== null || (n.onclick = si)), vs(e, l), Xe = !0;
    else if (u !== 4 && (u === 27 && (vs(e, l), l = null, pr(e.type) && (r = e.stateNode, n = null)), e = e.child, e !== null))
      for (uf(
        e,
        n,
        r,
        l
      ), e = e.sibling; e !== null; )
        uf(
          e,
          n,
          r,
          l
        ), e = e.sibling;
  }
  function ws(e, n, r, l) {
    var u = e.tag;
    if (u === 5 || u === 6)
      u = e.stateNode, n ? r.insertBefore(u, n) : r.appendChild(u), vs(e, l), Xe = !0;
    else if (u !== 4 && (u === 27 && (vs(e, l), l = null, pr(e.type) && (r = e.stateNode)), e = e.child, e !== null))
      for (ws(
        e,
        n,
        r,
        l
      ), e = e.sibling; e !== null; )
        ws(
          e,
          n,
          r,
          l
        ), e = e.sibling;
  }
  function Ng(e) {
    var n = e.stateNode, r = e.memoizedProps;
    try {
      for (var l = e.type, u = n.attributes; u.length; )
        n.removeAttributeNode(u[0]);
      Yt(n, l, r), n[Ht] = e, n[cn] = r;
    } catch (d) {
      et(e, e.return, d);
    }
  }
  var ks = !1, jn = null;
  function Ag(e) {
    (e.tag === 30 || (e.subtreeFlags & 33554432) !== 0) && (ks = !0);
  }
  var di = null;
  function Og() {
    var e = di;
    return di = null, e;
  }
  var dn = 0;
  function Ma(e, n, r, l, u) {
    return dn = 0, Dg(
      e.child,
      n,
      r,
      l,
      u
    );
  }
  function Dg(e, n, r, l, u) {
    for (var d = !1; e !== null; ) {
      if (e.tag === 5) {
        var y = e.stateNode;
        if (l !== null) {
          var k = Gf(y);
          l.push(k), k.view && (d = !0);
        } else
          d || Gf(y).view && (d = !0);
        ks = !0, Ob(
          y,
          dn === 0 ? n : n + "_" + dn,
          r
        ), dn++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && u || Dg(
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
  function pi(e, n) {
    for (; e !== null; )
      e.tag === 5 ? Db(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && n || pi(
        e.child,
        n
      )), e = e.sibling;
  }
  function Ss(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if ((e.tag !== 22 || e.memoizedState === null) && (Ss(e), e.tag === 30 && (e.flags & 18874368) !== 0 && e.stateNode.paired)) {
          var n = e.memoizedProps;
          if (n.name == null || n.name === "auto")
            throw Error(o(544));
          var r = n.name;
          n = Oi(n.default, n.share), n !== "none" && (Ma(
            e,
            r,
            n,
            null,
            !1
          ) || pi(e.child, !1));
        }
        e = e.sibling;
      }
  }
  function cf(e, n) {
    if (e.tag === 30) {
      var r = e.stateNode, l = e.memoizedProps, u = Ai(l, r), d = Oi(
        l.default,
        r.paired ? l.share : l.enter
      );
      d !== "none" ? Ma(e, u, d, null, !1) ? (Ss(e), r.paired || n || qa(e, l.onEnter)) : pi(e.child, !1) : Ss(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        cf(e, n), e = e.sibling;
    else Ss(e);
  }
  function ff(e) {
    if (jn !== null && jn.size !== 0) {
      var n = jn;
      if ((e.subtreeFlags & 18874368) !== 0)
        for (e = e.child; e !== null; ) {
          if (e.tag !== 22 || e.memoizedState === null) {
            if (e.tag === 30 && (e.flags & 18874368) !== 0) {
              var r = e.memoizedProps, l = r.name;
              if (l != null && l !== "auto") {
                var u = n.get(l);
                if (u !== void 0) {
                  var d = Oi(
                    r.default,
                    r.share
                  );
                  if (d !== "none" && (Ma(
                    e,
                    l,
                    d,
                    null,
                    !1
                  ) ? (d = e.stateNode, u.paired = d, d.paired = u, qa(e, r.onShare)) : pi(e.child, !1)), n.delete(l), n.size === 0) break;
                }
              }
            }
            ff(e);
          }
          e = e.sibling;
        }
    }
  }
  function df(e) {
    if (e.tag === 30) {
      var n = e.memoizedProps, r = Ai(n, e.stateNode), l = jn !== null ? jn.get(r) : void 0, u = Oi(
        n.default,
        l !== void 0 ? n.share : n.exit
      );
      u !== "none" && (Ma(e, r, u, null, !1) ? l !== void 0 ? (u = e.stateNode, l.paired = u, u.paired = l, jn.delete(r), qa(e, n.onShare)) : qa(e, n.onExit) : pi(e.child, !1)), jn !== null && ff(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        df(e), e = e.sibling;
    else
      jn !== null && ff(e);
  }
  function Mg(e) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var n = e.memoizedProps, r = Ai(n, e.stateNode);
        n = Oi(n.default, n.update), e.flags &= -5, n !== "none" && Ma(
          e,
          r,
          n,
          e.memoizedState = [],
          !1
        );
      } else
        (e.subtreeFlags & 33554432) !== 0 && Mg(e);
      e = e.sibling;
    }
  }
  function pf(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if (e.tag !== 22 || e.memoizedState === null) {
          if (e.tag === 30 && (e.flags & 18874368) !== 0) {
            var n = e.stateNode;
            n.paired !== null && (n.paired = null, pi(e.child, !1));
          }
          pf(e);
        }
        e = e.sibling;
      }
  }
  function zs(e) {
    if (e.tag === 30)
      e.stateNode.paired = null, pi(e.child, !1), pf(e);
    else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        zs(e), e = e.sibling;
    else pf(e);
  }
  function Rg(e) {
    for (e = e.child; e !== null; )
      e.tag === 30 ? pi(e.child, !1) : (e.subtreeFlags & 33554432) !== 0 && Rg(e), e = e.sibling;
  }
  function hf(e, n, r, l, u, d, y) {
    for (var k = !1; n !== null; ) {
      if (n.tag === 5) {
        var _ = n.stateNode;
        if (d !== null && dn < d.length) {
          var R = d[dn], q = Gf(_);
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
        (e.flags & 4) !== 0 && Ob(
          _,
          dn === 0 ? r : r + "_" + dn,
          u
        ), k && (e.flags & 4) !== 0 || (di === null && (di = []), di.push(
          _,
          dn === 0 ? l : l + "_" + dn,
          n.memoizedProps
        )), dn++;
      } else (n.tag !== 22 || n.memoizedState === null) && (n.tag === 30 && y ? e.flags |= n.flags & 32 : hf(
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
  function Ug(e, n) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var r = e.memoizedProps, l = e.stateNode, u = Ai(r, l), d = Oi(r.default, r.update), y;
        y = e.memoizedState, e.memoizedState = null, l = e;
        var k = e.child;
        dn = 0, u = hf(
          l,
          k,
          u,
          u,
          d,
          y,
          !1
        ), (e.flags & 4) !== 0 && u && qa(e, r.onUpdate);
      } else
        (e.subtreeFlags & 33554432) !== 0 && Ug(e);
      e = e.sibling;
    }
  }
  var Lt = !1, Je = !1, hi = !1, mf = !1, Lg = typeof WeakSet == "function" ? WeakSet : Set, Bt = null, mi = !1, Zl = !1, _s = !1, gf = !1;
  function B2(e, n, r) {
    if (e = e.containerInfo, Zf = Ja, e = Zh(e), tc(e)) {
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
            var k = 0, _ = -1, R = -1, q = 0, Q = 0, D = e, I = null;
            t: for (; ; ) {
              for (var se; D !== l || d !== 0 && D.nodeType !== 3 || (_ = k + d), D !== y || u !== 0 && D.nodeType !== 3 || (R = k + u), D.nodeType === 3 && (k += D.nodeValue.length), (se = D.firstChild) !== null; )
                I = D, D = se;
              for (; ; ) {
                if (D === e) break t;
                if (I === l && ++q === d && (_ = k), I === y && ++Q === u && (R = k), (se = D.nextSibling) !== null) break;
                D = I, I = D.parentNode;
              }
              D = se;
            }
            l = _ === -1 || R === -1 ? null : { start: _, end: R };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (qf = { focusedElem: e, selectionRange: l }, Ja = !1, r = (r & 335544064) === r, Bt = n, n = r ? 9270 : 1024; Bt !== null; ) {
      if (e = Bt, r && (l = e.deletions, l !== null))
        for (d = 0; d < l.length; d++)
          r && df(l[d]);
      if (e.alternate === null && (e.flags & 2) !== 0)
        r && Ag(e), js(r);
      else {
        if (e.tag === 22) {
          if (l = e.alternate, e.memoizedState !== null) {
            l !== null && l.memoizedState === null && r && df(l), js(r);
            continue;
          } else if (l !== null && l.memoizedState !== null) {
            r && Ag(e), js(r);
            continue;
          }
        }
        l = e.child, (e.subtreeFlags & n) !== 0 && l !== null ? (l.return = e, Bt = l) : (r && Mg(e), js(r));
      }
    }
    jn = null;
  }
  function js(e) {
    for (; Bt !== null; ) {
      var n = Bt, r = e, l = n.alternate, u = n.flags;
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
              var y = Vr(
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
              Qf(l);
            else if (r === 1)
              switch (l.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Qf(l);
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
          r && l !== null && (r = Ai(
            l.memoizedProps,
            l.stateNode
          ), u = n.memoizedProps, u = Oi(u.default, u.update), u !== "none" && Ma(
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
        l.return = n.return, Bt = l;
        break;
      }
      Bt = n.return;
    }
  }
  function Bg(e, n, r) {
    var l = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        gi(e, r), l & 4 && Il(5, r);
        break;
      case 1:
        if (gi(e, r), l & 4)
          if (e = r.stateNode, n === null)
            try {
              e.componentDidMount();
            } catch (y) {
              et(r, r.return, y);
            }
          else {
            var u = Vr(
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
        l & 64 && jg(r), l & 512 && fi(r, r.return);
        break;
      case 3:
        if (gi(e, r), l & 64 && (e = r.updateQueue, e !== null)) {
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
            mm(e, n);
          } catch (y) {
            et(r, r.return, y);
          }
        }
        break;
      case 27:
        n === null && l & 4 && Ng(r);
      case 26:
      case 5:
        gi(e, r), n === null && l & 4 && lf(r), l & 512 && fi(r, r.return);
        break;
      case 12:
        gi(e, r);
        break;
      case 31:
        gi(e, r), l & 4 && qg(e, r);
        break;
      case 13:
        gi(e, r), l & 4 && $g(e, r), l & 64 && (e = r.memoizedState, e !== null && (e = e.dehydrated, e !== null && (r = P2.bind(
          null,
          r
        ), Ak(e, r))));
        break;
      case 22:
        if (l = r.memoizedState !== null || Lt, !l) {
          var d = n !== null && n.memoizedState !== null || Je;
          n = Lt, u = Je, Lt = l, (Je = d) && !u ? (l = 2, (r.subtreeFlags & 8772) !== 0 && (l |= 1), ii(
            e,
            r,
            l
          )) : gi(e, r), Lt = n, Je = u;
        }
        break;
      case 30:
        gi(e, r), l & 512 && fi(r, r.return);
        break;
      case 7:
        l & 512 && fi(r, r.return);
      default:
        gi(e, r);
    }
  }
  function bf(e, n) {
    for (e = e.child; e !== null; )
      Ig(e, n), e = e.sibling;
  }
  function Ig(e, n) {
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
        xf(e, n);
        break;
      case 6:
        try {
          e.stateNode.nodeValue = n ? "" : e.memoizedProps, Xe = !0;
        } catch (_) {
          et(e, e.return, _);
        }
        break;
      case 18:
        try {
          var k = e.stateNode;
          n ? Ab(k, !0) : Ab(e.stateNode, !1);
        } catch (_) {
          et(e, e.return, _);
        }
        break;
      case 22:
      case 23:
        e.memoizedState === null && bf(e, n);
        break;
      default:
        bf(e, n);
    }
  }
  function xf(e, n) {
    if (e.subtreeFlags & 67108864)
      for (e = e.child; e !== null; ) {
        e: {
          var r = e, l = n;
          switch (r.tag) {
            case 4:
              Ig(r, l);
              break e;
            case 22:
              r.memoizedState === null && xf(r, l);
              break e;
            default:
              xf(r, l);
          }
        }
        e = e.sibling;
      }
  }
  function Hg(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Hg(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && Ao(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var pt = null, pn = !1;
  function ti(e, n, r) {
    for (r = r.child; r !== null; )
      Zg(e, n, r), r = r.sibling;
  }
  function Zg(e, n, r) {
    if (de && typeof de.onCommitFiberUnmount == "function")
      try {
        de.onCommitFiberUnmount(H, r);
      } catch {
      }
    switch (r.tag) {
      case 26:
        Je || Vt(r, n), ti(
          e,
          n,
          r
        ), r.memoizedState ? r.memoizedState.count-- : r.stateNode && !Je && (r = r.stateNode, r.parentNode.removeChild(r));
        break;
      case 27:
        Je || Vt(r, n), Hl(r);
        var l = pt, u = pn;
        pr(r.type) && (pt = r.stateNode, pn = !1), ti(
          e,
          n,
          r
        ), Yb(
          r.stateNode,
          r.type,
          r.memoizedProps
        ), pt = l, pn = u;
        break;
      case 5:
        Je || Vt(r, n), Hl(r);
      case 6:
        if (r.tag === 6 && Hl(r), l = pt, u = pn, pt = null, ti(
          e,
          n,
          r
        ), pt = l, pn = u, pt !== null)
          if (pn)
            try {
              (pt.nodeType === 9 ? pt.body : pt.nodeName === "HTML" ? pt.ownerDocument.body : pt).removeChild(r.stateNode), Xe = !0;
            } catch (d) {
              et(
                r,
                n,
                d
              );
            }
          else
            try {
              pt.removeChild(r.stateNode), Xe = !0;
            } catch (d) {
              et(
                r,
                n,
                d
              );
            }
        break;
      case 18:
        pt !== null && (pn ? (e = pt, Nb(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          r.stateNode
        ), Wa(e)) : Nb(pt, r.stateNode));
        break;
      case 4:
        l = pt, u = pn, pt = r.stateNode.containerInfo, pn = !0, ti(
          e,
          n,
          r
        ), pt = l, pn = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        lr(2, r, n), Je || lr(4, r, n), ti(
          e,
          n,
          r
        );
        break;
      case 1:
        Je || (Vt(r, n), l = r.stateNode, typeof l.componentWillUnmount == "function" && Eg(
          r,
          n,
          l
        )), ti(
          e,
          n,
          r
        );
        break;
      case 21:
        ti(
          e,
          n,
          r
        );
        break;
      case 22:
        Je = (l = Je) || r.memoizedState !== null, ti(
          e,
          n,
          r
        ), Je = l;
        break;
      case 30:
        Vt(r, n), ti(
          e,
          n,
          r
        );
        break;
      case 7:
        Je || Vt(r, n), ti(
          e,
          n,
          r
        );
        break;
      default:
        ti(
          e,
          n,
          r
        );
    }
  }
  function qg(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Wa(e);
      } catch (r) {
        et(n, n.return, r);
      }
    }
  }
  function $g(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Wa(e);
      } catch (r) {
        et(n, n.return, r);
      }
  }
  function I2(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new Lg()), n;
      case 22:
        return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new Lg()), n;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function Es(e, n) {
    var r = I2(e);
    n.forEach(function(l) {
      if (!r.has(l)) {
        r.add(l);
        var u = K2.bind(null, e, l);
        l.then(u, u);
      }
    });
  }
  function nn(e, n, r) {
    var l = n.deletions;
    if (l !== null)
      for (var u = 0; u < l.length; u++) {
        var d = l[u], y = e, k = n, _ = k;
        e: for (; _ !== null; ) {
          switch (_.tag) {
            case 27:
              if (pr(_.type)) {
                pt = _.stateNode, pn = !1;
                break e;
              }
              break;
            case 5:
              pt = _.stateNode, pn = !1;
              break e;
            case 3:
            case 4:
              pt = _.stateNode.containerInfo, pn = !0;
              break e;
          }
          _ = _.return;
        }
        if (pt === null) throw Error(o(160));
        Zg(y, k, d), pt = null, pn = !1, y = d.alternate, y !== null && (y.return = null), d.return = null;
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; )
        Vg(n, e, r), n = n.sibling;
  }
  var ni = null;
  function Vg(e, n, r) {
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
        nn(n, e, r), rn(e), u & 4 && (lr(3, e, e.return), Il(3, e), lr(5, e, e.return));
        break;
      case 1:
        nn(n, e, r), rn(e), u & 512 && (Je || l === null || Vt(l, l.return)), u & 64 && Lt && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (r = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = r === null ? n : r.concat(n))));
        break;
      case 26:
        if (d = ni, nn(n, e, r), rn(e), u & 512 && (Je || l === null || Vt(l, l.return)), u & 4)
          if (u = l !== null ? l.memoizedState : null, r = e.memoizedState, l === null)
            if (r === null)
              if (e.stateNode === null)
                if (Lt)
                  e.stateNode = Eb(
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
                        l = u.getElementsByTagName("title")[0], (!l || l[pl] || l[Ht] || l.namespaceURI === "http://www.w3.org/2000/svg" || l.hasAttribute("itemprop")) && (l = u.createElement(n), u.head.insertBefore(
                          l,
                          u.querySelector("head > title")
                        )), Yt(l, n, r), l[Ht] = e, Rt(l), n = l;
                        break e;
                      case "link":
                        if (d = Kb(
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
                        l = u.createElement(n), Yt(l, n, r), u.head.appendChild(l);
                        break;
                      case "meta":
                        if (d = Kb(
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
                        l = u.createElement(n), Yt(l, n, r), u.head.appendChild(l);
                        break;
                      default:
                        throw Error(o(468, n));
                    }
                    l[Ht] = e, Rt(l), n = l;
                  }
                  e.stateNode = n;
                }
              else
                Lt || nd(d, e.type, e.stateNode);
            else
              e.stateNode = Pb(
                d,
                r,
                e.memoizedProps
              );
          else
            u !== r ? (u === null ? (n = l.stateNode, n === null || Je || n.parentNode.removeChild(n)) : u.count--, r === null ? Lt || nd(d, e.type, e.stateNode) : Pb(d, r, e.memoizedProps)) : r === null && e.stateNode !== null && of(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        break;
      case 27:
        nn(n, e, r), rn(e), u & 512 && (Je || l === null || Vt(l, l.return)), l !== null && u & 4 && of(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (d = hi, hi = !1, nn(n, e, r), hi = d, rn(e), u & 512 && (Je || l === null || Vt(l, l.return)), e.flags & 32) {
          n = e.stateNode;
          try {
            ga(n, ""), Xe = !0;
          } catch (q) {
            et(e, e.return, q);
          }
        }
        u & 4 && e.stateNode != null && (n = e.memoizedProps, of(
          e,
          n,
          l !== null ? l.memoizedProps : n
        )), u & 1024 && (mf = !0);
        break;
      case 6:
        if (nn(n, e, r), rn(e), u & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          n = e.memoizedProps, r = e.stateNode;
          try {
            r.nodeValue = n, Xe = !0;
          } catch (q) {
            et(e, e.return, q);
          }
        }
        break;
      case 3:
        if (Xe = !1, qs = null, d = ni, ni = Pl(n.containerInfo), nn(n, e, r), ni = d, rn(e), u & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Wa(n.containerInfo);
          } catch (q) {
            et(e, e.return, q);
          }
        mf && (mf = !1, Yg(e)), Xe = !1;
        break;
      case 4:
        u = hi, hi = Lt, l = fh(), d = ni, ni = Pl(
          e.stateNode.containerInfo
        ), nn(n, e, r), rn(e), ni = d, Xe && Zl && (_s = !0), Xe = l, hi = u;
        break;
      case 12:
        nn(n, e, r), rn(e);
        break;
      case 31:
        nn(n, e, r), rn(e), u & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Es(e, n)));
        break;
      case 13:
        nn(n, e, r), rn(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Ns = dt()), u & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Es(e, n)));
        break;
      case 22:
        d = e.memoizedState !== null, y = l !== null && l.memoizedState !== null;
        var k = Lt, _ = Je, R = hi;
        Lt = k || d, hi = R || d, Je = _ || y, nn(n, e, r), Je = _, hi = R, Lt = k, rn(e), u & 8192 && (n = e.stateNode, n._visibility = d ? n._visibility & -2 : n._visibility | 1, !d || l === null || y || Lt || Je || (n = y || Je, r = Lt, l = Je, Lt = d || Lt, Je = n, or(e, 2), Lt = r, Je = l), !d && hi || bf(e, d)), u & 4 && (n = e.updateQueue, n !== null && (r = n.retryQueue, r !== null && (n.retryQueue = null, Es(e, r))));
        break;
      case 19:
        nn(n, e, r), rn(e), u & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, Es(e, n)));
        break;
      case 30:
        u & 512 && (Je || l === null || Vt(l, l.return)), u = fh(), d = Zl, y = (r & 335544064) === r, k = e.memoizedProps, Zl = y && Oi(
          k.default,
          k.update
        ) !== "none", nn(n, e, r), rn(e), y && l !== null && Xe && (e.flags |= 4), Zl = d, Xe = u;
        break;
      case 21:
        break;
      case 7:
        u & 512 && (Je || l === null || Vt(l, l.return)), l && l.stateNode !== null && (l.stateNode._fragmentFiber = e);
      default:
        nn(n, e, r), rn(e);
    }
  }
  function rn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var r, l = e.return; l !== null; ) {
          if (Tg(l)) {
            r = l;
            break;
          }
          l = l.return;
        }
        l = null;
        for (var u = e.return; u !== null; ) {
          if (af(u)) {
            var d = u.stateNode;
            l === null ? l = [d] : l.push(d);
          }
          if (rf(u)) break;
          u = u.return;
        }
        var y = l;
        if (r == null) throw Error(o(160));
        switch (r.tag) {
          case 27:
            var k = r.stateNode, _ = sf(e);
            ws(
              e,
              _,
              k,
              y
            );
            break;
          case 5:
            var R = r.stateNode;
            r.flags & 32 && (ga(R, ""), r.flags &= -33);
            var q = sf(e);
            ws(
              e,
              q,
              R,
              y
            );
            break;
          case 3:
          case 4:
            var Q = r.stateNode.containerInfo, D = sf(e);
            uf(
              e,
              D,
              Q,
              y
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (I) {
        et(e, e.return, I);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Yg(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        Yg(n), n.tag === 5 && n.flags & 1024 && (n = n.stateNode, Ja = !0, n.reset(), Ja = !1), e = e.sibling;
      }
  }
  function Ra(e, n) {
    if (n.subtreeFlags & 9270)
      for (n = n.child; n !== null; )
        Gg(n, e), n = n.sibling;
    else Ug(n);
  }
  function Gg(e, n) {
    var r = e.alternate;
    if (r === null) cf(e, !1);
    else
      switch (e.tag) {
        case 3:
          if (gf = mi = !1, Og(), Ra(n, e), !mi && !_s) {
            if (e = di, e !== null)
              for (var l = 0; l < e.length; l += 3) {
                r = e[l];
                var u = e[l + 1];
                Db(r, e[l + 2]), r = r.ownerDocument.documentElement, r !== null && r.animate(
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
            )), gf = !0;
          }
          di = null;
          break;
        case 5:
          Ra(n, e);
          break;
        case 4:
          l = mi, mi = !1, Ra(n, e), mi && (_s = !0), mi = l;
          break;
        case 22:
          e.memoizedState === null && (r.memoizedState !== null ? cf(e, !1) : Ra(n, e));
          break;
        case 30:
          l = mi, u = Og(), mi = !1, Ra(n, e), mi && (e.flags |= 4);
          var d = e.memoizedProps, y = e.stateNode;
          n = Ai(d, y), y = Ai(r.memoizedProps, y);
          var k = Oi(d.default, d.update);
          k === "none" ? n = !1 : (d = r.memoizedState, r.memoizedState = null, r = e.child, dn = 0, n = hf(
            e,
            r,
            n,
            y,
            k,
            d,
            !0
          ), dn !== (d === null ? 0 : d.length) && (e.flags |= 32)), (e.flags & 4) !== 0 && n ? (qa(
            e,
            e.memoizedProps.onUpdate
          ), di = u) : u !== null && (u.push.apply(u, di), di = u), mi = (e.flags & 32) !== 0 ? !0 : l;
          break;
        default:
          Ra(n, e);
      }
  }
  function gi(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Bg(e, n.alternate, n), n = n.sibling;
  }
  function or(e, n) {
    for (e = e.child; e !== null; ) {
      var r = e, l = n;
      switch (r.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          lr(4, r, r.return), or(
            r,
            l
          );
          break;
        case 1:
          Vt(r, r.return);
          var u = r.stateNode;
          typeof u.componentWillUnmount == "function" && Eg(
            r,
            r.return,
            u
          ), or(
            r,
            l
          );
          break;
        case 27:
          (l & 2) !== 0 && Yb(
            r.stateNode,
            r.type,
            r.memoizedProps
          );
        case 5:
          Vt(r, r.return), r.tag !== 5 && r.tag !== 27 || Hl(r), or(
            r,
            l
          );
          break;
        case 6:
          Hl(r);
          break;
        case 26:
          Vt(r, r.return), u = r.stateNode, r.memoizedState !== null || u === null || Je || u.parentNode.removeChild(u), or(
            r,
            l
          );
          break;
        case 22:
          r.memoizedState === null && or(
            r,
            l
          );
          break;
        case 30:
          Vt(r, r.return), or(
            r,
            l
          );
          break;
        case 7:
          Vt(r, r.return);
        default:
          or(
            r,
            l
          );
      }
      e = e.sibling;
    }
  }
  function ii(e, n, r) {
    for (r = (n.subtreeFlags & 8772) !== 0 ? r : r & -2, n = n.child; n !== null; ) {
      var l = n.alternate, u = e, d = n, y = d.flags, k = (r & 1) !== 0;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          ii(
            u,
            d,
            r
          ), Il(4, d);
          break;
        case 1:
          if (ii(
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
                  hm(R[u], _);
            } catch (q) {
              et(l, l.return, q);
            }
          }
          k && y & 64 && jg(d), fi(d, d.return);
          break;
        case 27:
          (r & 2) !== 0 && Ng(d);
        case 5:
          d.tag !== 5 && d.tag !== 27 || Cg(d), ii(
            u,
            d,
            r
          ), k && l === null && y & 4 && lf(d), fi(d, d.return);
          break;
        case 6:
          Cg(d);
          break;
        case 26:
          _ = d.stateNode, d.memoizedState !== null || _ === null || Lt || nd(
            Pl(_.ownerDocument),
            d.type,
            _
          ), ii(
            u,
            d,
            r
          ), k && l === null && y & 4 && lf(d), fi(d, d.return);
          break;
        case 12:
          ii(
            u,
            d,
            r
          );
          break;
        case 31:
          ii(
            u,
            d,
            r
          ), k && y & 4 && qg(u, d);
          break;
        case 13:
          ii(
            u,
            d,
            r
          ), k && y & 4 && $g(u, d);
          break;
        case 22:
          d.memoizedState === null && ii(
            u,
            d,
            r
          ), fi(d, d.return);
          break;
        case 30:
          ii(
            u,
            d,
            r
          ), fi(d, d.return);
          break;
        case 7:
          fi(d, d.return);
        default:
          ii(
            u,
            d,
            r
          );
      }
      n = n.sibling;
    }
  }
  function yf(e, n) {
    var r = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== r && (e != null && e.refCount++, r != null && jl(r));
  }
  function vf(e, n) {
    e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && jl(e));
  }
  function Yn(e, n, r, l) {
    var u = (r & 335544064) === r;
    if (n.subtreeFlags & (u ? 10262 : 10256))
      for (n = n.child; n !== null; )
        Fg(
          e,
          n,
          r,
          l
        ), n = n.sibling;
    else u && Rg(n);
  }
  function Fg(e, n, r, l) {
    var u = (r & 335544064) === r;
    u && n.alternate === null && n.return !== null && n.return.alternate !== null && zs(n);
    var d = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Yn(
          e,
          n,
          r,
          l
        ), d & 2048 && Il(9, n);
        break;
      case 1:
        Yn(
          e,
          n,
          r,
          l
        );
        break;
      case 3:
        Yn(
          e,
          n,
          r,
          l
        ), u && gf && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), d & 2048 && (d = null, n.alternate !== null && (d = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== d && (n.refCount++, d != null && jl(d)));
        break;
      case 12:
        if (d & 2048) {
          Yn(
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
          Yn(
            e,
            n,
            r,
            l
          );
        break;
      case 31:
        Yn(
          e,
          n,
          r,
          l
        );
        break;
      case 13:
        Yn(
          e,
          n,
          r,
          l
        );
        break;
      case 23:
        break;
      case 22:
        y = n.stateNode, k = n.alternate, n.memoizedState !== null ? (u && k !== null && k.memoizedState === null && zs(k), y._visibility & 2 ? Yn(
          e,
          n,
          r,
          l
        ) : ql(
          e,
          n
        )) : (u && k !== null && k.memoizedState !== null && zs(n), y._visibility & 2 ? Yn(
          e,
          n,
          r,
          l
        ) : (y._visibility |= 2, Ua(
          e,
          n,
          r,
          l,
          (n.subtreeFlags & 10256) !== 0 || !1
        ))), d & 2048 && yf(k, n);
        break;
      case 24:
        Yn(
          e,
          n,
          r,
          l
        ), d & 2048 && vf(n.alternate, n);
        break;
      case 30:
        u && (d = n.alternate, d !== null && (pi(d.child, !0), pi(n.child, !0))), Yn(
          e,
          n,
          r,
          l
        );
        break;
      default:
        Yn(
          e,
          n,
          r,
          l
        );
    }
  }
  function Ua(e, n, r, l, u) {
    for (u = u && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var d = e, y = n, k = r, _ = l, R = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          Ua(
            d,
            y,
            k,
            _,
            u
          ), Il(8, y);
          break;
        case 23:
          break;
        case 22:
          var q = y.stateNode;
          y.memoizedState !== null ? q._visibility & 2 ? Ua(
            d,
            y,
            k,
            _,
            u
          ) : ql(
            d,
            y
          ) : (q._visibility |= 2, Ua(
            d,
            y,
            k,
            _,
            u
          )), u && R & 2048 && yf(
            y.alternate,
            y
          );
          break;
        case 24:
          Ua(
            d,
            y,
            k,
            _,
            u
          ), u && R & 2048 && vf(y.alternate, y);
          break;
        default:
          Ua(
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
  function ql(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var r = e, l = n, u = l.flags;
        switch (l.tag) {
          case 22:
            ql(r, l), u & 2048 && yf(
              l.alternate,
              l
            );
            break;
          case 24:
            ql(r, l), u & 2048 && vf(l.alternate, l);
            break;
          default:
            ql(r, l);
        }
        n = n.sibling;
      }
  }
  var Yr = 8192;
  function Gr(e, n, r) {
    if (e.subtreeFlags & Yr)
      for (e = e.child; e !== null; )
        Xg(
          e,
          n,
          r
        ), e = e.sibling;
  }
  function Xg(e, n, r) {
    switch (e.tag) {
      case 26:
        Gr(
          e,
          n,
          r
        ), e.flags & Yr && (e.memoizedState !== null ? Yk(
          r,
          ni,
          e.memoizedState,
          e.memoizedProps
        ) : (e = e.stateNode, (n & 335544128) === n && tx(r, e)));
        break;
      case 5:
        Gr(
          e,
          n,
          r
        ), e.flags & Yr && (e = e.stateNode, (n & 335544128) === n && tx(r, e));
        break;
      case 3:
      case 4:
        var l = ni;
        ni = Pl(e.stateNode.containerInfo), Gr(
          e,
          n,
          r
        ), ni = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = Yr, Yr = 16777216, Gr(
          e,
          n,
          r
        ), Yr = l) : Gr(
          e,
          n,
          r
        ));
        break;
      case 30:
        if ((e.flags & Yr) !== 0 && (l = e.memoizedProps.name, l != null && l !== "auto")) {
          var u = e.stateNode;
          u.paired = null, jn === null && (jn = /* @__PURE__ */ new Map()), jn.set(l, u);
        }
        Gr(
          e,
          n,
          r
        );
        break;
      default:
        Gr(
          e,
          n,
          r
        );
    }
  }
  function Qg(e) {
    var n = e.alternate;
    if (n !== null && (e = n.child, e !== null)) {
      n.child = null;
      do
        n = e.sibling, e.sibling = null, e = n;
      while (e !== null);
    }
  }
  function $l(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var l = n[r];
          Bt = l, Kg(
            l,
            e
          );
        }
      Qg(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Pg(e), e = e.sibling;
  }
  function Pg(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        $l(e), e.flags & 2048 && lr(9, e, e.return);
        break;
      case 3:
        $l(e);
        break;
      case 12:
        $l(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, Cs(e)) : $l(e);
        break;
      default:
        $l(e);
    }
  }
  function Cs(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var l = n[r];
          Bt = l, Kg(
            l,
            e
          );
        }
      Qg(e);
    }
    for (e = e.child; e !== null; ) {
      switch (n = e, n.tag) {
        case 0:
        case 11:
        case 15:
          lr(8, n, n.return), Cs(n);
          break;
        case 22:
          r = n.stateNode, r._visibility & 2 && (r._visibility &= -3, Cs(n));
          break;
        default:
          Cs(n);
      }
      e = e.sibling;
    }
  }
  function Kg(e, n) {
    for (; Bt !== null; ) {
      var r = Bt;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          lr(8, r, n);
          break;
        case 23:
        case 22:
          if (r.memoizedState !== null && r.memoizedState.cachePool !== null) {
            var l = r.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          jl(r.memoizedState.cache);
      }
      if (l = r.child, l !== null) l.return = r, Bt = l;
      else
        e: for (r = e; Bt !== null; ) {
          l = Bt;
          var u = l.sibling, d = l.return;
          if (Hg(l), l === r) {
            Bt = null;
            break e;
          }
          if (u !== null) {
            u.return = d, Bt = u;
            break e;
          }
          Bt = d;
        }
    }
  }
  var H2 = {
    getCacheForType: function(e) {
      var n = Zt(jt), r = n.data.get(e);
      return r === void 0 && (r = e(), n.data.set(e, r)), r;
    },
    cacheSignal: function() {
      return Zt(jt).controller.signal;
    }
  }, Z2 = typeof WeakMap == "function" ? WeakMap : Map, Pe = 0, lt = null, He = null, qe = 0, We = 0, En = null, sr = !1, La = !1, wf = !1, Zi = 0, wt = 0, ur = 0, Fr = 0, Ts = 0, Cn = 0, Ba = 0, Vl = null, hn = null, kf = !1, Ns = 0, Jg = 0, As = 1 / 0, Os = null, cr = null, gt = 0, ri = null, Xr = null, bi = 0, Sf = 0, zf = null, Wg = null, Ia = null, Ha = null, Za = null, Yl = 0, Ds = null;
  function Tn() {
    return (Pe & 2) !== 0 && qe !== 0 ? qe & -qe : ae.T !== null ? Mf() : nh();
  }
  function eb() {
    if (Cn === 0)
      if ((qe & 536870912) === 0 || Le) {
        var e = ca;
        ca <<= 1, (ca & 3932160) === 0 && (ca = 262144), Cn = e;
      } else Cn = 536870912;
    return e = qt.current, e !== null && (e.flags |= 32), Cn;
  }
  function qa(e, n) {
    if (n != null) {
      var r = e.stateNode, l = r.ref;
      l === null && (l = r.ref = Mb(
        Ai(e.memoizedProps, r)
      )), Ha === null && (Ha = []), Ha.push(n.bind(null, l));
    }
  }
  function mn(e, n, r) {
    (e === lt && (We === 2 || We === 9) || e.cancelPendingCommit !== null) && ($a(e, 0), fr(
      e,
      qe,
      Cn,
      !1
    )), dl(e, r), ((Pe & 2) === 0 || e !== lt) && (e === lt && ((Pe & 2) === 0 && (Fr |= r), wt === 4 && fr(
      e,
      qe,
      Cn,
      !1
    )), xi(e));
  }
  function tb(e, n, r) {
    if ((Pe & 6) !== 0) throw Error(o(327));
    var l = !r && (n & 127) === 0 && (n & e.expiredLanes) === 0 || Ei(e, n), u = l ? V2(e, n) : jf(e, n, !0), d = l;
    do {
      if (u === 0) {
        La && !l && fr(e, n, 0, !1);
        break;
      } else {
        if (r = e.current.alternate, d && !q2(r)) {
          u = jf(e, n, !1), d = !1;
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
              u = Vl;
              var _ = k.current.memoizedState.isDehydrated;
              if (_ && ($a(k, y).flags |= 256), y = jf(
                k,
                y,
                !1
              ), y !== 2 && y !== 6) {
                if (wf && !_) {
                  k.errorRecoveryDisabledLanes |= d, Fr |= d, u = 4;
                  break e;
                }
                d = hn, hn = u, d !== null && (hn === null ? hn = d : hn.push.apply(
                  hn,
                  d
                ));
              }
              u = y;
            }
            if (d = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          $a(e, 0), fr(e, n, 0, !0);
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
              fr(
                l,
                n,
                Cn,
                !sr
              );
              break e;
            case 2:
              hn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((n & 62914560) === n && (u = Ns + 300 - dt(), 10 < u)) {
            if (fr(
              l,
              n,
              Cn,
              !sr
            ), It(l, 0, !0) !== 0) break e;
            bi = n, l.timeoutHandle = Yf(
              nb.bind(
                null,
                l,
                r,
                hn,
                Os,
                kf,
                n,
                Cn,
                Fr,
                Ba,
                sr,
                d,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break e;
          }
          nb(
            l,
            r,
            hn,
            Os,
            kf,
            n,
            Cn,
            Fr,
            Ba,
            sr,
            d,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    xi(e);
  }
  function nb(e, n, r, l, u, d, y, k, _, R, q, Q, D, I) {
    e.timeoutHandle = -1;
    var se = n.subtreeFlags, ve = (d & 335544064) === d;
    if (Q = null, (ve || se & 8192 || (se & 16785408) === 16785408) && (Q = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: si
    }, jn = null, Xg(
      n,
      d,
      Q
    ), ve && (se = Q, ve = e.containerInfo, ve = (ve.nodeType === 9 ? ve : ve.ownerDocument).__reactViewTransition, ve != null && (se.count++, se.waitingForViewTransition = !0, se = Wl.bind(se), ve.finished.then(se, se))), se = (d & 62914560) === d ? Ns - dt() : (d & 4194048) === d ? Jg - dt() : 0, se = Gk(
      Q,
      se
    ), se !== null)) {
      bi = d, e.cancelPendingCommit = se(
        cb.bind(
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
          I
        )
      ), fr(e, d, y, !R);
      return;
    }
    cb(
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
  function q2(e) {
    for (var n = e; ; ) {
      var r = n.tag;
      if ((r === 0 || r === 11 || r === 15) && n.flags & 16384 && (r = n.updateQueue, r !== null && (r = r.stores, r !== null)))
        for (var l = 0; l < r.length; l++) {
          var u = r[l], d = u.getSnapshot;
          u = u.value;
          try {
            if (!zn(d(), u)) return !1;
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
  function fr(e, n, r, l) {
    n = Kp(e, n), n &= ~Ts, n &= ~Fr, e.suspendedLanes |= n, e.pingedLanes &= ~n, l && (e.warmLanes |= n), l = e.expirationTimes;
    for (var u = n; 0 < u; ) {
      var d = 31 - ye(u), y = 1 << d;
      l[d] = -1, u &= ~y;
    }
    r !== 0 && Wp(e, r, n);
  }
  function Ms() {
    return (Pe & 6) === 0 ? (Gl(0), !1) : !0;
  }
  function _f() {
    if (He !== null) {
      if (We === 0)
        var e = He.return;
      else
        e = He, Ri = Rr = null, Oc(e), Ta = null, Tl = 0, e = He;
      for (; e !== null; )
        _g(e.alternate, e), e = e.return;
      He = null;
    }
  }
  function $a(e, n) {
    var r = e.timeoutHandle;
    return r !== -1 && (e.timeoutHandle = -1, dk(r)), r = e.cancelPendingCommit, r !== null && (e.cancelPendingCommit = null, r()), bi = 0, _f(), lt = e, He = r = Di(e.current, null), qe = n, We = 0, En = null, sr = !1, La = Ei(e, n), wf = !1, Ba = Cn = Ts = Fr = ur = wt = 0, hn = Vl = null, kf = !1, Zi = Kp(e, n), qo(), r;
  }
  function ib(e, n) {
    Me = null, ae.H = ps, n === Ca || n === Wo ? (n = cm(), We = 3) : n === yc ? (n = cm(), We = 4) : We = n === Fc ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, En = n, He === null && (wt = 1, hs(
      e,
      Zn(n, e.current)
    ));
  }
  function rb() {
    var e = qt.current;
    return e === null ? !0 : (qe & 4194048) === qe ? Qt === null : (qe & 62914560) === qe || (qe & 536870912) !== 0 ? e === Qt : !1;
  }
  function ab() {
    var e = ae.H;
    return ae.H = ps, e === null ? ps : e;
  }
  function lb() {
    var e = ae.A;
    return ae.A = H2, e;
  }
  function Rs() {
    wt = 4, sr || (qe & 4194048) !== qe && qt.current !== null || (La = !0), (ur & 134217727) === 0 && (Fr & 134217727) === 0 || lt === null || fr(
      lt,
      qe,
      Cn,
      !1
    );
  }
  function jf(e, n, r) {
    var l = Pe;
    Pe |= 2;
    var u = ab(), d = lb();
    (lt !== e || qe !== n) && (Os = null, $a(e, n)), n = !1;
    var y = wt;
    e: do
      try {
        if (We !== 0 && He !== null) {
          var k = He, _ = En;
          switch (We) {
            case 8:
              _f(), y = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              qt.current === null && (n = !0);
              var R = We;
              if (We = 0, En = null, Va(e, k, _, R), r && La) {
                y = 0;
                break e;
              }
              break;
            default:
              R = We, We = 0, En = null, Va(e, k, _, R);
          }
        }
        $2(), y = wt;
        break;
      } catch (q) {
        ib(e, q);
      }
    while (!0);
    return n && e.shellSuspendCounter++, Ri = Rr = null, Pe = l, ae.H = u, ae.A = d, He === null && (lt = null, qe = 0, qo()), y;
  }
  function $2() {
    for (; He !== null; ) ob(He);
  }
  function V2(e, n) {
    var r = Pe;
    Pe |= 2;
    var l = ab(), u = lb();
    lt !== e || qe !== n ? (Os = null, As = dt() + 500, $a(e, n)) : La = Ei(
      e,
      n
    );
    e: do
      try {
        if (We !== 0 && He !== null) {
          n = He;
          var d = En;
          t: switch (We) {
            case 1:
              We = 0, En = null, Va(e, n, d, 1);
              break;
            case 2:
            case 9:
              if (sm(d)) {
                We = 0, En = null, sb(n);
                break;
              }
              n = function() {
                We !== 2 && We !== 9 || lt !== e || (We = 7), xi(e);
              }, d.then(n, n);
              break e;
            case 3:
              We = 7;
              break e;
            case 4:
              We = 5;
              break e;
            case 7:
              sm(d) ? (We = 0, En = null, sb(n)) : (We = 0, En = null, Va(e, n, d, 7));
              break;
            case 5:
              var y = null;
              switch (He.tag) {
                case 26:
                  y = He.memoizedState;
                case 5:
                case 27:
                  var k = He;
                  if (y ? Wb(y) : k.stateNode.complete) {
                    We = 0, En = null;
                    var _ = k.sibling;
                    if (_ !== null) He = _;
                    else {
                      var R = k.return;
                      R !== null ? (He = R, Us(R)) : He = null;
                    }
                    break t;
                  }
              }
              We = 0, En = null, Va(e, n, d, 5);
              break;
            case 6:
              We = 0, En = null, Va(e, n, d, 6);
              break;
            case 8:
              _f(), wt = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        Y2();
        break;
      } catch (q) {
        ib(e, q);
      }
    while (!0);
    return Ri = Rr = null, ae.H = l, ae.A = u, Pe = r, He !== null ? 0 : (lt = null, qe = 0, qo(), wt);
  }
  function Y2() {
    for (; He !== null && !on(); )
      ob(He);
  }
  function ob(e) {
    var n = Sg(e.alternate, e, Zi);
    e.memoizedProps = e.pendingProps, n === null ? Us(e) : He = n;
  }
  function sb(e) {
    var n = e, r = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = gg(
          r,
          n,
          n.pendingProps,
          n.type,
          void 0,
          qe
        );
        break;
      case 11:
        n = gg(
          r,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          qe
        );
        break;
      case 5:
        Oc(n);
        var l = n;
        l === Ut && (Le ? (Xo(l), l.tag === 5 && l.stateNode != null && (ut = l.stateNode)) : (Xo(l), Le = !0));
      default:
        _g(r, n), n = He = Kh(n, Zi), n = Sg(r, n, Zi);
    }
    e.memoizedProps = e.pendingProps, n === null ? Us(e) : He = n;
  }
  function Va(e, n, r, l) {
    Ri = Rr = null, Oc(n), Ta = null, Tl = 0;
    var u = n.return;
    try {
      if (O2(
        e,
        u,
        n,
        r,
        qe
      )) {
        wt = 1, hs(
          e,
          Zn(r, e.current)
        ), He = null;
        return;
      }
    } catch (d) {
      if (u !== null) throw He = u, d;
      wt = 1, hs(
        e,
        Zn(r, e.current)
      ), He = null;
      return;
    }
    n.flags & 32768 ? (Le || l === 1 ? e = !0 : La || (qe & 536870912) !== 0 ? e = !1 : (sr = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = qt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), ub(n, e)) : Us(n);
  }
  function Us(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        ub(
          n,
          sr
        );
        return;
      }
      e = n.return;
      var r = U2(
        n.alternate,
        n,
        Zi
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
    wt === 0 && (wt = 5);
  }
  function ub(e, n) {
    do {
      var r = L2(e.alternate, e);
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
    wt = 6, He = null;
  }
  function cb(e, n, r, l, u, d, y, k, _, R, q, Q) {
    e.cancelPendingCommit = null;
    do
      Ls();
    while (gt !== 0);
    if ((Pe & 6) !== 0) throw Error(o(327));
    if (n !== null) {
      if (n === e.current) throw Error(o(177));
      e === lt && (He = lt = null, qe = 0), Xr = n, ri = e, bi = r, zf = u, Wg = l, G2(
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
  function G2(e, n, r, l, u, d, y) {
    var k = n.lanes | n.childLanes;
    if (Sf = k, k |= lc, xw(
      e,
      r,
      k,
      l,
      u,
      d
    ), Ha = null, (r & 335544064) === r ? (Za = v2(e), l = 10262) : (Za = null, l = 10256), (n.subtreeFlags & l) !== 0 || (n.flags & l) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, J2(sa, function() {
      return Nf(), null;
    })) : (e.callbackNode = null, e.callbackPriority = 0), ks = !1, l = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || l) {
      l = ae.T, ae.T = null, u = fe.p, fe.p = 2, d = Pe, Pe |= 4;
      try {
        B2(e, n, r);
      } finally {
        Pe = d, fe.p = u, ae.T = l;
      }
    }
    gt = 1, ks ? Ia = xk(
      y,
      e.containerInfo,
      Za,
      Ef,
      Cf,
      X2,
      Tf,
      Nf,
      F2
    ) : (Ef(), Cf(), Tf());
  }
  function F2(e) {
    if (gt !== 0) {
      var n = ri.onRecoverableError;
      n(e, { componentStack: null });
    }
  }
  function X2() {
    gt === 3 && (gt = 0, Gg(Xr, ri), gt = 4);
  }
  function Ef() {
    if (gt === 1) {
      gt = 0;
      var e = ri, n = Xr, r = bi, l = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || l) {
        l = ae.T, ae.T = null;
        var u = fe.p;
        fe.p = 2;
        var d = Pe;
        Pe |= 4;
        try {
          Zl = _s = !1, Vg(n, e, r), r = qf;
          var y = Zh(e.containerInfo), k = r.focusedElem, _ = r.selectionRange;
          if (y !== k && k && k.ownerDocument && Hh(
            k.ownerDocument.documentElement,
            k
          )) {
            if (_ !== null && tc(k)) {
              var R = _.start, q = _.end;
              if (q === void 0 && (q = R), "selectionStart" in k)
                k.selectionStart = R, k.selectionEnd = Math.min(
                  q,
                  k.value.length
                );
              else {
                var Q = k.ownerDocument || document, D = Q && Q.defaultView || window;
                if (D.getSelection) {
                  var I = D.getSelection(), se = k.textContent.length, ve = Math.min(_.start, se), Re = _.end === void 0 ? ve : Math.min(_.end, se);
                  !I.extend && ve > Re && (y = Re, Re = ve, ve = y);
                  var M = Ih(
                    k,
                    ve
                  ), A = Ih(
                    k,
                    Re
                  );
                  if (M && A && (I.rangeCount !== 1 || I.anchorNode !== M.node || I.anchorOffset !== M.offset || I.focusNode !== A.node || I.focusOffset !== A.offset)) {
                    var L = Q.createRange();
                    L.setStart(M.node, M.offset), I.removeAllRanges(), ve > Re ? (I.addRange(L), I.extend(A.node, A.offset)) : (L.setEnd(A.node, A.offset), I.addRange(L));
                  }
                }
              }
            }
            for (Q = [], I = k; I = I.parentNode; )
              I.nodeType === 1 && Q.push({
                element: I,
                left: I.scrollLeft,
                top: I.scrollTop
              });
            for (typeof k.focus == "function" && k.focus(), k = 0; k < Q.length; k++) {
              var F = Q[k];
              F.element.scrollLeft = F.left, F.element.scrollTop = F.top;
            }
          }
          Ja = !!Zf, qf = Zf = null;
        } finally {
          Pe = d, fe.p = u, ae.T = l;
        }
      }
      e.current = n, gt = 2;
    }
  }
  function Cf() {
    if (gt === 2) {
      gt = 0;
      var e = ri, n = Xr, r = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || r) {
        r = ae.T, ae.T = null;
        var l = fe.p;
        fe.p = 2;
        var u = Pe;
        Pe |= 4;
        try {
          Bg(e, n.alternate, n);
        } finally {
          Pe = u, fe.p = l, ae.T = r;
        }
      }
      gt = 3;
    }
  }
  function Tf() {
    if (gt === 4 || gt === 3) {
      gt = 0;
      var e = Ia;
      Ia = null, Wt();
      var n = ri, r = Xr, l = bi, u = Wg, d = (l & 335544064) === l ? 10262 : 10256;
      if ((r.subtreeFlags & d) !== 0 || (r.flags & d) !== 0 ? gt = 5 : (gt = 0, Xr = ri = null, fb(n, n.pendingLanes)), d = n.pendingLanes, d === 0 && (cr = null), Lu(l), r = r.stateNode, de && typeof de.onCommitFiberRoot == "function")
        try {
          de.onCommitFiberRoot(
            H,
            r,
            void 0,
            (r.current.flags & 128) === 128
          );
        } catch {
        }
      if (u !== null) {
        r = ae.T, d = fe.p, fe.p = 2, ae.T = null;
        try {
          for (var y = n.onRecoverableError, k = 0; k < u.length; k++) {
            var _ = u[k];
            y(_.value, {
              componentStack: _.stack
            });
          }
        } finally {
          ae.T = r, fe.p = d;
        }
      }
      if (u = Ha, y = Za, Za = null, u !== null && (Ha = null, y === null && (y = []), e !== null))
        for (_ = 0; _ < u.length; _++)
          r = (0, u[_])(
            y
          ), r !== void 0 && e.finished.finally(r);
      (bi & 3) !== 0 && Ls(), xi(n), d = n.pendingLanes, (l & 261930) !== 0 && (d & 42) !== 0 ? n === Ds ? Yl++ : (Yl = 0, Ds = n) : (Yl = 0, Ds = null), Gl(0);
    }
  }
  function fb(e, n) {
    (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, jl(n)));
  }
  function Ls() {
    return Ia !== null && (Ia.skipTransition(), Ia = null), Ef(), Cf(), Tf(), Nf();
  }
  function Nf() {
    if (gt !== 5) return !1;
    var e = ri, n = Sf;
    Sf = 0;
    var r = Lu(bi), l = ae.T, u = fe.p;
    try {
      fe.p = 32 > r ? 32 : r, ae.T = null, r = zf, zf = null;
      var d = ri, y = bi;
      if (gt = 0, Xr = ri = null, bi = 0, (Pe & 6) !== 0) throw Error(o(331));
      var k = Pe;
      if (Pe |= 4, Pg(d.current), Fg(
        d,
        d.current,
        y,
        r
      ), Pe = k, Gl(0, !1), de && typeof de.onPostCommitFiberRoot == "function")
        try {
          de.onPostCommitFiberRoot(H, d);
        } catch {
        }
      return !0;
    } finally {
      fe.p = u, ae.T = l, fb(e, n);
    }
  }
  function db(e, n, r) {
    n = Zn(r, n), n = Gc(e.stateNode, n, 2), e = nr(e, n, 2), e !== null && (dl(e, 2), xi(e));
  }
  function et(e, n, r) {
    if (e.tag === 3)
      db(e, e, r);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          db(
            n,
            e,
            r
          );
          break;
        } else if (n.tag === 1) {
          var l = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (cr === null || !cr.has(l))) {
            e = Zn(r, e), r = sg(2), l = nr(n, r, 2), l !== null && (ug(
              r,
              l,
              n,
              e
            ), dl(l, 2), xi(l));
            break;
          }
        }
        n = n.return;
      }
  }
  function Af(e, n, r) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Z2();
      var u = /* @__PURE__ */ new Set();
      l.set(n, u);
    } else
      u = l.get(n), u === void 0 && (u = /* @__PURE__ */ new Set(), l.set(n, u));
    u.has(r) || (wf = !0, u.add(r), e = Q2.bind(null, e, n, r), n.then(e, e));
  }
  function Q2(e, n, r) {
    var l = e.pingCache;
    l !== null && l.delete(n), e.pingedLanes |= e.suspendedLanes & r, e.warmLanes &= ~r, lt === e && (qe & r) === r && ((wt === 4 || wt === 3 && (qe & 62914560) === qe && 300 > dt() - Ns) && (Pe & 2) === 0 ? $a(e, 0) : Ts |= r, Ba === qe && (Ba = 0)), xi(e);
  }
  function pb(e, n) {
    n === 0 && (n = Jp()), e = Or(e, n), e !== null && (dl(e, n), xi(e));
  }
  function P2(e) {
    var n = e.memoizedState, r = 0;
    n !== null && (r = n.retryLane), pb(e, r);
  }
  function K2(e, n) {
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
    l !== null && l.delete(n), pb(e, r);
  }
  function J2(e, n) {
    return wn(e, n);
  }
  var Ya = null, Ga = null, Of = !1, Bs = !1, Df = !1, dr = 0;
  function xi(e) {
    e !== Ga && e.next === null && (Ga === null ? Ya = Ga = e : Ga = Ga.next = e), Bs = !0, Of || (Of = !0, ek());
  }
  function Gl(e, n) {
    if (!Df && Bs) {
      Df = !0;
      do
        for (var r = !1, l = Ya; l !== null; ) {
          if (e !== 0) {
            var u = l.pendingLanes;
            if (u === 0) var d = 0;
            else {
              var y = l.suspendedLanes, k = l.pingedLanes;
              d = (1 << 31 - ye(42 | e) + 1) - 1, d &= u & ~(y & ~k), d = d & 201326741 ? d & 201326741 | 1 : d ? d | 2 : 0;
            }
            d !== 0 && (r = !0, bb(l, d));
          } else
            d = qe, d = It(
              l,
              l === lt ? d : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (d & 3) === 0 || Ei(l, d) || (r = !0, bb(l, d));
          l = l.next;
        }
      while (r);
      Df = !1;
    }
  }
  function W2() {
    hb();
  }
  function hb() {
    Bs = Of = !1;
    var e = 0;
    dr !== 0 && fk() && (e = dr);
    for (var n = dt(), r = null, l = Ya; l !== null; ) {
      var u = l.next, d = mb(l, n);
      d === 0 ? (l.next = null, r === null ? Ya = u : r.next = u, u === null && (Ga = r)) : (r = l, (e !== 0 || (d & 3) !== 0) && (Bs = !0)), l = u;
    }
    gt !== 0 && gt !== 5 || Gl(e), dr !== 0 && (dr = 0);
  }
  function mb(e, n) {
    for (var r = e.suspendedLanes, l = e.pingedLanes, u = e.expirationTimes, d = e.pendingLanes & -62914561; 0 < d; ) {
      var y = 31 - ye(d), k = 1 << y, _ = u[y];
      _ === -1 ? ((k & r) === 0 || (k & l) !== 0) && (u[y] = bw(k, n)) : _ <= n && (e.expiredLanes |= k), d &= ~k;
    }
    if (n = lt, r = qe, r = It(
      e,
      e === n ? r : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, r === 0 || e === n && (We === 2 || We === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && Ln(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((r & 3) === 0 || Ei(e, r)) {
      if (n = r & -r, n === e.callbackPriority) return n;
      switch (l !== null && Ln(l), Lu(r)) {
        case 2:
        case 8:
          r = sn;
          break;
        case 32:
          r = sa;
          break;
        case 268435456:
          r = To;
          break;
        default:
          r = sa;
      }
      return l = gb.bind(null, e), r = wn(r, l), e.callbackPriority = n, e.callbackNode = r, n;
    }
    return l !== null && l !== null && Ln(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function gb(e, n) {
    if (gt !== 0 && gt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var r = e.callbackNode;
    if (Ls() && e.callbackNode !== r)
      return null;
    var l = qe;
    return l = It(
      e,
      e === lt ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (tb(e, l, n), mb(e, dt()), e.callbackNode != null && e.callbackNode === r ? gb.bind(null, e) : null);
  }
  function bb(e, n) {
    if (Ls()) return null;
    tb(e, n, !0);
  }
  function ek() {
    pk(function() {
      (Pe & 6) !== 0 ? wn(
        Bn,
        W2
      ) : hb();
    });
  }
  function Mf() {
    if (dr === 0) {
      var e = Br;
      e === 0 && (e = ji, ji <<= 1, (ji & 261888) === 0 && (ji = 256)), dr = e;
    }
    return dr;
  }
  function xb(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Mo(e);
  }
  function tk(e, n, r, l, u) {
    if (n === "submit" && r && r.stateNode === u) {
      var d = xb(
        (u[cn] || null).action
      ), y = l.submitter;
      y && (n = (n = y[cn] || null) ? xb(n.formAction) : y.getAttribute("formAction"), n !== null && (d = n, y = null));
      var k = new Bo(
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
                if (dr !== 0) {
                  var _ = new FormData(u, y);
                  Zc(
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
                typeof d == "function" && (k.preventDefault(), _ = new FormData(u, y), Zc(
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
  for (var Rf = 0; Rf < ac.length; Rf++) {
    var Uf = ac[Rf], nk = Uf.toLowerCase(), ik = Uf[0].toUpperCase() + Uf.slice(1);
    ei(
      nk,
      "on" + ik
    );
  }
  ei(Vh, "onAnimationEnd"), ei(Yh, "onAnimationIteration"), ei(Gh, "onAnimationStart"), ei("dblclick", "onDoubleClick"), ei("focusin", "onFocus"), ei("focusout", "onBlur"), ei(d2, "onTransitionRun"), ei(p2, "onTransitionStart"), ei(h2, "onTransitionCancel"), ei(Fh, "onTransitionEnd"), ha("onMouseEnter", ["mouseout", "mouseover"]), ha("onMouseLeave", ["mouseout", "mouseover"]), ha("onPointerEnter", ["pointerout", "pointerover"]), ha("onPointerLeave", ["pointerout", "pointerover"]), Tr(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Tr(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Tr("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Tr(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Tr(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Tr(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Fl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), rk = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fl)
  );
  function yb(e, n) {
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
              Zo(q);
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
              Zo(q);
            }
            u.currentTarget = null, d = _;
          }
      }
    }
  }
  function Ze(e, n) {
    var r = n[rh];
    r === void 0 && (r = n[rh] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    r.has(l) || (vb(n, e, 2, !1), r.add(l));
  }
  function Lf(e, n, r) {
    var l = 0;
    n && (l |= 4), vb(
      r,
      e,
      l,
      n
    );
  }
  var Is = "_reactListening" + Math.random().toString(36).slice(2);
  function Bf(e) {
    if (!e[Is]) {
      e[Is] = !0, oh.forEach(function(r) {
        r !== "selectionchange" && (rk.has(r) || Lf(r, !1, e), Lf(r, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Is] || (n[Is] = !0, Lf("selectionchange", !1, n));
    }
  }
  function vb(e, n, r, l) {
    switch (ux(n)) {
      case 2:
        var u = Pk;
        break;
      case 8:
        u = Kk;
        break;
      default:
        u = rd;
    }
    r = u.bind(
      null,
      n,
      r,
      e
    ), u = void 0, !Yu || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (u = !0), l ? u !== void 0 ? e.addEventListener(n, r, {
      capture: !0,
      passive: u
    }) : e.addEventListener(n, r, !0) : u !== void 0 ? e.addEventListener(n, r, {
      passive: u
    }) : e.addEventListener(n, r, !1);
  }
  function If(e, n, r, l, u) {
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
            if (y = Cr(k), y === null) return;
            if (_ = y.tag, _ === 5 || _ === 6 || _ === 26 || _ === 27) {
              l = d = y;
              continue e;
            }
            k = k.parentNode;
          }
        }
        l = l.return;
      }
    vh(function() {
      var R = d, q = $u(r), Q = [];
      e: {
        var D = Xh.get(e);
        if (D !== void 0) {
          var I = Bo, se = e;
          switch (e) {
            case "keypress":
              if (Uo(r) === 0) break e;
            case "keydown":
            case "keyup":
              I = qw;
              break;
            case "focusin":
              se = "focus", I = Qu;
              break;
            case "focusout":
              se = "blur", I = Qu;
              break;
            case "beforeblur":
            case "afterblur":
              I = Qu;
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
              I = Sh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              I = Nw;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              I = Fw;
              break;
            case Vh:
            case Yh:
            case Gh:
              I = Dw;
              break;
            case Fh:
              I = Qw;
              break;
            case "scroll":
            case "scrollend":
              I = Cw;
              break;
            case "wheel":
              I = Kw;
              break;
            case "copy":
            case "cut":
            case "paste":
              I = Rw;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              I = _h;
              break;
            case "submit":
              I = Yw;
              break;
            case "toggle":
            case "beforetoggle":
              I = Ww;
          }
          var ve = (n & 4) !== 0, Re = !ve && (e === "scroll" || e === "scrollend"), M = ve ? D !== null ? D + "Capture" : null : D;
          ve = [];
          for (var A = R, L; A !== null; ) {
            var F = A;
            if (L = F.stateNode, F = F.tag, F !== 5 && F !== 26 && F !== 27 || L === null || M === null || (F = ml(A, M), F != null && ve.push(
              Xl(A, F, L)
            )), Re) break;
            A = A.return;
          }
          0 < ve.length && (D = new I(
            D,
            se,
            null,
            r,
            q
          ), Q.push({ event: D, listeners: ve }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (I = e === "mouseover" || e === "pointerover", D = e === "mouseout" || e === "pointerout", I && r !== qu && (se = r.relatedTarget || r.fromElement) && (Cr(se) || se[fa]))
            break e;
          (D || I) && (se = q.window === q ? q : (I = q.ownerDocument) ? I.defaultView || I.parentWindow : window, D ? (I = r.relatedTarget || r.toElement, D = R, I = I ? Cr(I) : null, I !== null && (Re = c(I), ve = I.tag, I !== Re || ve !== 5 && ve !== 27 && ve !== 6) && (I = null)) : (D = null, I = R), D !== I && (ve = Sh, F = "onMouseLeave", M = "onMouseEnter", A = "mouse", (e === "pointerout" || e === "pointerover") && (ve = _h, F = "onPointerLeave", M = "onPointerEnter", A = "pointer"), Re = D == null ? se : hl(D), L = I == null ? se : hl(I), se = new ve(
            F,
            A + "leave",
            D,
            r,
            q
          ), se.target = Re, se.relatedTarget = L, F = null, Cr(q) === R && (ve = new ve(
            M,
            A + "enter",
            I,
            r,
            q
          ), ve.target = L, ve.relatedTarget = Re, F = ve), Re = F, ve = D && I ? N(
            D,
            I,
            ak
          ) : null, D !== null && wb(
            Q,
            se,
            D,
            ve,
            !1
          ), I !== null && Re !== null && wb(
            Q,
            Re,
            I,
            ve,
            !0
          )));
        }
        e: {
          if (D = R ? hl(R) : window, I = D.nodeName && D.nodeName.toLowerCase(), I === "select" || I === "input" && D.type === "file")
            var me = Dh;
          else if (Ah(D))
            if (Mh)
              me = u2;
            else {
              me = o2;
              var $e = l2;
            }
          else
            I = D.nodeName, !I || I.toLowerCase() !== "input" || D.type !== "checkbox" && D.type !== "radio" ? R && Zu(R.elementType) && (me = Dh) : me = s2;
          if (me && (me = me(e, R))) {
            Oh(
              Q,
              me,
              r,
              q
            );
            break e;
          }
          $e && $e(e, D, R);
        }
        switch ($e = R ? hl(R) : window, e) {
          case "focusin":
            (Ah($e) || $e.contentEditable === "true") && (va = $e, nc = R, Sl = null);
            break;
          case "focusout":
            Sl = nc = va = null;
            break;
          case "mousedown":
            ic = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ic = !1, qh(Q, r, q);
            break;
          case "selectionchange":
            if (f2) break;
          case "keydown":
          case "keyup":
            qh(Q, r, q);
        }
        var we;
        if (Ku)
          e: {
            switch (e) {
              case "compositionstart":
                var Ee = "onCompositionStart";
                break e;
              case "compositionend":
                Ee = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ee = "onCompositionUpdate";
                break e;
            }
            Ee = void 0;
          }
        else
          ya ? Th(e, r) && (Ee = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (Ee = "onCompositionStart");
        Ee && (jh && r.locale !== "ko" && (ya || Ee !== "onCompositionStart" ? Ee === "onCompositionEnd" && ya && (we = wh()) : (Fi = q, Gu = "value" in Fi ? Fi.value : Fi.textContent, ya = !0)), $e = Hs(R, Ee), 0 < $e.length && (Ee = new zh(
          Ee,
          e,
          null,
          r,
          q
        ), Q.push({ event: Ee, listeners: $e }), we ? Ee.data = we : (we = Nh(r), we !== null && (Ee.data = we)))), (we = t2 ? n2(e, r) : i2(e, r)) && (Ee = Hs(R, "onBeforeInput"), 0 < Ee.length && ($e = new zh(
          "onBeforeInput",
          "beforeinput",
          null,
          r,
          q
        ), Q.push({
          event: $e,
          listeners: Ee
        }), $e.data = we)), tk(
          Q,
          e,
          R,
          r,
          q
        );
      }
      yb(Q, n);
    });
  }
  function Xl(e, n, r) {
    return {
      instance: e,
      listener: n,
      currentTarget: r
    };
  }
  function Hs(e, n) {
    for (var r = n + "Capture", l = []; e !== null; ) {
      var u = e, d = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || d === null || (u = ml(e, r), u != null && l.unshift(
        Xl(e, u, d)
      ), u = ml(e, n), u != null && l.push(
        Xl(e, u, d)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function ak(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function wb(e, n, r, l, u) {
    for (var d = n._reactName, y = []; r !== null && r !== l; ) {
      var k = r, _ = k.alternate, R = k.stateNode;
      if (k = k.tag, _ !== null && _ === l) break;
      k !== 5 && k !== 26 && k !== 27 || R === null || (_ = R, u ? (R = ml(r, d), R != null && y.unshift(
        Xl(r, R, _)
      )) : u || (R = ml(r, d), R != null && y.push(
        Xl(r, R, _)
      ))), r = r.return;
    }
    y.length !== 0 && e.push({ event: n, listeners: y });
  }
  var lk = /\r\n?/g, ok = /\u0000|\uFFFD/g;
  function kb(e) {
    return (typeof e == "string" ? e : "" + e).replace(lk, `
`).replace(ok, "");
  }
  function Sb(e, n) {
    return n = kb(n), kb(e) === n;
  }
  function tt(e, n, r, l, u, d) {
    switch (r) {
      case "children":
        if (typeof l == "string")
          n === "body" || n === "textarea" && l === "" || ga(e, l);
        else if (typeof l == "number" || typeof l == "bigint")
          n !== "body" && ga(e, "" + l);
        else return;
        break;
      case "className":
        Do(e, "class", l);
        break;
      case "tabIndex":
        Do(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Do(e, r, l);
        break;
      case "style":
        xh(e, l, d);
        return;
      case "data":
        if (n !== "object") {
          Do(e, "data", l);
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
        l = Mo(l), e.setAttribute(r, l);
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
        l = Mo(l), e.setAttribute(r, l);
        break;
      case "onClick":
        l != null && (e.onclick = si);
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
        r = Mo(l), e.setAttributeNS(
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
        Ze("beforetoggle", e), Ze("toggle", e), Oo(e, "popover", l);
        break;
      case "xlinkActuate":
        Ti(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        Ti(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        Ti(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        Ti(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        Ti(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        Ti(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        Ti(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        Ti(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        Ti(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        Oo(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N")
          r = jw.get(r) || r, Oo(e, r, l);
        else return;
    }
    Xe = !0;
  }
  function Hf(e, n, r, l, u, d) {
    switch (r) {
      case "style":
        xh(e, l, d);
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
        if (typeof l == "string") ga(e, l);
        else if (typeof l == "number" || typeof l == "bigint")
          ga(e, "" + l);
        else return;
        break;
      case "onScroll":
        l != null && Ze("scroll", e);
        return;
      case "onScrollEnd":
        l != null && Ze("scrollend", e);
        return;
      case "onClick":
        l != null && (e.onclick = si);
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
        if (!sh.hasOwnProperty(r))
          e: {
            if (r[0] === "o" && r[1] === "n" && (u = r.endsWith("Capture"), d = r.slice(2, u ? r.length - 7 : void 0), n = e[cn] || null, n = n != null ? n[r] : null, typeof n == "function" && e.removeEventListener(d, n, u), typeof l == "function")) {
              typeof n != "function" && n !== null && (r in e ? e[r] = null : e.hasAttribute(r) && e.removeAttribute(r)), e.addEventListener(d, l, u);
              break e;
            }
            Xe = !0, r in e ? e[r] = l : l === !0 ? e.setAttribute(r, "") : Oo(e, r, l);
          }
        return;
    }
    Xe = !0;
  }
  function Yt(e, n, r) {
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
        hh(
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
        n = d, r = y, e.multiple = !!l, n != null ? ma(e, !!l, n, !1) : r != null && ma(e, !!l, r, !0);
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
        gh(e, l, u, d);
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
        for (l = 0; l < Fl.length; l++)
          Ze(Fl[l], e);
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
        if (Zu(n)) {
          for (q in r)
            r.hasOwnProperty(q) && (l = r[q], l !== void 0 && Hf(
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
  var sk = {};
  function uk(e, n, r, l) {
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
        for (I in r) {
          var Q = r[I];
          if (r.hasOwnProperty(I) && Q != null)
            switch (I) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                _ = Q;
              default:
                l.hasOwnProperty(I) || tt(e, n, I, null, l, Q);
            }
        }
        for (var D in l) {
          var I = l[D];
          if (Q = r[D], l.hasOwnProperty(D) && (I != null || Q != null))
            switch (D) {
              case "type":
                I !== Q && (Xe = !0), d = I;
                break;
              case "name":
                I !== Q && (Xe = !0), u = I;
                break;
              case "checked":
                I !== Q && (Xe = !0), R = I;
                break;
              case "defaultChecked":
                I !== Q && (Xe = !0), q = I;
                break;
              case "value":
                I !== Q && (Xe = !0), y = I;
                break;
              case "defaultValue":
                I !== Q && (Xe = !0), k = I;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (I != null)
                  throw Error(o(137, n));
                break;
              default:
                I !== Q && tt(
                  e,
                  n,
                  D,
                  I,
                  l,
                  Q
                );
            }
        }
        Iu(
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
        I = y = k = D = null;
        for (d in r)
          if (_ = r[d], r.hasOwnProperty(d) && _ != null)
            switch (d) {
              case "value":
                break;
              case "multiple":
                I = _;
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
                d !== _ && (Xe = !0), D = d;
                break;
              case "defaultValue":
                d !== _ && (Xe = !0), k = d;
                break;
              case "multiple":
                d !== _ && (Xe = !0), y = d;
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
        n = k, r = y, l = I, D != null ? ma(e, !!r, D, !1) : !!l != !!r && (n != null ? ma(e, !!r, n, !0) : ma(e, !!r, r ? [] : "", !1));
        return;
      case "textarea":
        I = D = null;
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
                u !== d && (Xe = !0), D = u;
                break;
              case "defaultValue":
                u !== d && (Xe = !0), I = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(o(91));
                break;
              default:
                u !== d && tt(e, n, y, u, l, d);
            }
        mh(e, D, I);
        return;
      case "option":
        for (var se in r)
          D = r[se], r.hasOwnProperty(se) && D != null && !l.hasOwnProperty(se) && (se === "selected" ? e.selected = !1 : tt(
            e,
            n,
            se,
            null,
            l,
            D
          ));
        for (_ in l)
          D = l[_], I = r[_], l.hasOwnProperty(_) && D !== I && (D != null || I != null) && (_ === "selected" ? (D !== I && (Xe = !0), e.selected = D && typeof D != "function" && typeof D != "symbol") : tt(
            e,
            n,
            _,
            D,
            l,
            I
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
        for (var ve in r)
          D = r[ve], r.hasOwnProperty(ve) && D != null && !l.hasOwnProperty(ve) && tt(e, n, ve, null, l, D);
        for (R in l)
          if (D = l[R], I = r[R], l.hasOwnProperty(R) && D !== I && (D != null || I != null))
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
                  I
                );
            }
        return;
      default:
        if (Zu(n)) {
          for (var Re in r)
            D = r[Re], r.hasOwnProperty(Re) && D !== void 0 && !l.hasOwnProperty(Re) && Hf(
              e,
              n,
              Re,
              void 0,
              l,
              D
            );
          for (q in l)
            D = l[q], I = r[q], !l.hasOwnProperty(q) || D === I || D === void 0 && I === void 0 || Hf(
              e,
              n,
              q,
              D,
              l,
              I
            );
          return;
        }
    }
    for (var M in r)
      D = r[M], r.hasOwnProperty(M) && D != null && !l.hasOwnProperty(M) && tt(e, n, M, null, l, D);
    for (Q in l)
      D = l[Q], I = r[Q], !l.hasOwnProperty(Q) || D === I || D == null && I == null || tt(e, n, Q, D, l, I);
  }
  function zb(e) {
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
  function ck() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, n = 0, r = performance.getEntriesByType("resource"), l = 0; l < r.length; l++) {
        var u = r[l], d = u.transferSize, y = u.initiatorType, k = u.duration;
        if (d && k && zb(y)) {
          for (y = 0, k = u.responseEnd, l += 1; l < r.length; l++) {
            var _ = r[l], R = _.startTime;
            if (R > k) break;
            var q = _.transferSize, Q = _.initiatorType;
            q && zb(Q) && (_ = _.responseEnd, y += q * (_ < k ? 1 : (k - R) / (_ - R)));
          }
          if (--l, n += 8 * (d + y) / (u.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return n / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Zf = null, qf = null;
  function Ql(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function _b(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function jb(e, n) {
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
  function Eb(e, n, r, l) {
    return r = Ql(
      r
    ).createElement(e), r[Ht] = l, r[cn] = n, Yt(r, e, n), Rt(r), r;
  }
  function $f(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Vf = null;
  function fk() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Vf ? !1 : (Vf = e, !0) : (Vf = null, !1);
  }
  var Yf = typeof setTimeout == "function" ? setTimeout : void 0, dk = typeof clearTimeout == "function" ? clearTimeout : void 0, Cb = typeof Promise == "function" ? Promise : void 0, Tb = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Yf, pk = typeof queueMicrotask == "function" ? queueMicrotask : typeof Cb < "u" ? function(e) {
    return Cb.resolve(null).then(e).catch(hk);
  } : Yf;
  function hk(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function pr(e) {
    return e === "head";
  }
  function Nb(e, n) {
    var r = n, l = 0;
    do {
      var u = r.nextSibling;
      if (e.removeChild(r), u && u.nodeType === 8)
        if (r = u.data, r === "/$" || r === "/&") {
          if (l === 0) {
            e.removeChild(u), Wa(n);
            return;
          }
          l--;
        } else if (r === "$" || r === "$?" || r === "$~" || r === "$!" || r === "&")
          l++;
        else if (r === "html")
          Wf(
            e.ownerDocument.documentElement
          );
        else if (r === "head") {
          r = e.ownerDocument.head, Wf(r);
          for (var d = r.firstChild; d; ) {
            var y = d.nextSibling, k = d.nodeName;
            d[pl] || k === "SCRIPT" || k === "STYLE" || k === "LINK" && d.rel.toLowerCase() === "stylesheet" || r.removeChild(d), d = y;
          }
        } else
          r === "body" && Wf(e.ownerDocument.body);
      r = u;
    } while (r);
    Wa(n);
  }
  function Ab(e, n) {
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
  function Ob(e, n, r) {
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
  function Db(e, n) {
    e = e.style, n = n.style;
    var r = n != null ? n.hasOwnProperty("viewTransitionName") ? n.viewTransitionName : n.hasOwnProperty("view-transition-name") ? n["view-transition-name"] : null : null;
    e.viewTransitionName = r == null || typeof r == "boolean" ? "" : ("" + r).trim(), r = n != null ? n.hasOwnProperty("viewTransitionClass") ? n.viewTransitionClass : n.hasOwnProperty("view-transition-class") ? n["view-transition-class"] : null : null, e.viewTransitionClass = r == null || typeof r == "boolean" ? "" : ("" + r).trim(), e.display === "inline-block" && (n == null ? e.display = e.margin = "" : (r = n.display, e.display = r == null || typeof r == "boolean" ? "" : r, r = n.margin, r != null ? e.margin = r : (r = n.hasOwnProperty("marginTop") ? n.marginTop : n["margin-top"], e.marginTop = r == null || typeof r == "boolean" ? "" : r, n = n.hasOwnProperty("marginBottom") ? n.marginBottom : n["margin-bottom"], e.marginBottom = n == null || typeof n == "boolean" ? "" : n)));
  }
  function mk(e, n, r) {
    return r = r.ownerDocument.defaultView, {
      rect: e,
      abs: n.position === "absolute" || n.position === "fixed",
      clip: n.clipPath !== "none" || n.overflow !== "visible" || n.filter !== "none" || n.mask !== "none" || n.mask !== "none" || n.borderRadius !== "0px",
      view: 0 <= e.bottom && 0 <= e.right && e.top <= r.innerHeight && e.left <= r.innerWidth
    };
  }
  function Gf(e) {
    var n = e.getBoundingClientRect(), r = getComputedStyle(e);
    return mk(n, r, e);
  }
  function gk(e) {
    return e.documentElement.clientHeight;
  }
  function bk(e) {
    this.addEventListener("load", e), this.addEventListener("error", e);
  }
  function xk(e, n, r, l, u, d, y, k, _) {
    var R = n.nodeType === 9 ? n : n.ownerDocument;
    try {
      var q = R.startViewTransition({
        update: function() {
          var D = R.defaultView, I = D.navigation && D.navigation.transition, se = R.fonts.status;
          l();
          var ve = [];
          if (se === "loaded" && (gk(R), R.fonts.status === "loading" && ve.push(R.fonts.ready)), se = ve.length, e !== null)
            for (var Re = e.suspenseyImages, M = 0, A = 0; A < Re.length; A++) {
              var L = Re[A];
              if (!L.complete) {
                var F = L.getBoundingClientRect();
                if (0 < F.bottom && 0 < F.right && F.top < D.innerHeight && F.left < D.innerWidth) {
                  if (M += ex(L), M > $s) {
                    ve.length = se;
                    break;
                  }
                  L = new Promise(
                    bk.bind(L)
                  ), ve.push(L);
                }
              }
            }
          if (0 < ve.length)
            return D = Promise.race([
              Promise.all(ve),
              new Promise(function(me) {
                return setTimeout(me, 500);
              })
            ]).then(u, u), (I ? Promise.allSettled([I.finished, D]) : D).then(d, d);
          if (u(), I)
            return I.finished.then(
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
          }), I = 0; I < D.length; I++) {
            var se = D[I], ve = se.effect, Re = ve.pseudoElement;
            if (Re != null && Re.startsWith("::view-transition")) {
              Q.push(se), se = ve.getKeyframes();
              for (var M = Re = void 0, A = !0, L = 0; L < se.length; L++) {
                var F = se[L], me = F.width;
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
              A && Re !== void 0 && M !== void 0 && (ve.setKeyframes(se), A = getComputedStyle(
                ve.target,
                ve.pseudoElement
              ), A.width !== Re || A.height !== M) && (A = se[0], A.width = Re, A.height = M, A = se[se.length - 1], A.width = Re, A.height = M, ve.setKeyframes(se));
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
  function Qr(e, n) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + n + ")";
  }
  Qr.prototype.animate = function(e, n) {
    return n = typeof n == "number" ? { duration: n } : X({}, n), n.pseudoElement = this._selector, this._scope.animate(e, n);
  }, Qr.prototype.getAnimations = function() {
    for (var e = this._scope, n = this._selector, r = e.getAnimations({ subtree: !0 }), l = [], u = 0; u < r.length; u++) {
      var d = r[u].effect;
      d !== null && d.target === e && d.pseudoElement === n && l.push(r[u]);
    }
    return l;
  }, Qr.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Mb(e) {
    return {
      name: e,
      group: new Qr("group", e),
      imagePair: new Qr("image-pair", e),
      old: new Qr("old", e),
      new: new Qr("new", e)
    };
  }
  function Nn(e) {
    this._fragmentFiber = e, this._observers = this._eventListeners = null;
  }
  Nn.prototype.addEventListener = function(e, n, r) {
    var l = null, u = null;
    if (!(r != null && typeof r != "boolean" && (l = r.signal || null, l !== null && l.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var d = this._eventListeners;
      if (Ub(d, e, n, r) === -1) {
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
        ), l.addEventListener("abort", u, { once: !0 }), u = l.removeEventListener.bind(l, "abort", u)), l = Fa(r), d.push({
          type: e,
          listener: n,
          optionsOrUseCapture: r,
          attachedListener: k,
          cleanup: u
        }), b(
          this._fragmentFiber.child,
          !1,
          yk,
          e,
          k,
          l
        );
      }
      this._eventListeners = d;
    }
  };
  function yk(e, n, r, l) {
    return E(e).addEventListener(
      n,
      r,
      l
    ), !1;
  }
  Nn.prototype.removeEventListener = function(e, n, r) {
    var l = this._eventListeners;
    if (l !== null && (n = Ub(
      l,
      e,
      n,
      r
    ), n !== -1)) {
      var u = l[n];
      r = u.attachedListener;
      var d = u.cleanup;
      u = Fa(u.optionsOrUseCapture), b(
        this._fragmentFiber.child,
        !1,
        vk,
        e,
        r,
        u
      ), l.splice(n, 1), d !== null && d();
    }
  };
  function vk(e, n, r, l) {
    return E(e).removeEventListener(
      n,
      r,
      l
    ), !1;
  }
  function Fa(e) {
    return e != null && typeof e != "boolean" && (e.once === !0 || e.signal instanceof AbortSignal) ? { capture: e.capture, passive: e.passive } : e;
  }
  function Rb(e) {
    return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
  }
  function Ub(e, n, r, l) {
    if (e.length === 0) return -1;
    l = Rb(l);
    for (var u = 0; u < e.length; u++) {
      var d = e[u];
      if (d.type === n && d.listener === r && Rb(d.optionsOrUseCapture) === l)
        return u;
    }
    return -1;
  }
  Nn.prototype.dispatchEvent = function(e) {
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
            Fa(d.optionsOrUseCapture)
          );
        }
      if (n.appendChild(l), e = l.dispatchEvent(e), r)
        for (u = 0; u < r.length; u++)
          d = r[u], l.removeEventListener(
            d.type,
            d.attachedListener,
            Fa(d.optionsOrUseCapture)
          );
      return n.removeChild(l), e;
    }
    return n.dispatchEvent(e);
  }, Nn.prototype.focus = function(e) {
    b(
      this._fragmentFiber.child,
      !0,
      Lb,
      e,
      void 0,
      void 0
    );
  };
  function Lb(e, n) {
    return e.tag === 6 ? !1 : (e = E(e), Ok(e, n));
  }
  Nn.prototype.focusLast = function(e) {
    var n = [];
    b(
      this._fragmentFiber.child,
      !0,
      Ff,
      n,
      void 0,
      void 0
    );
    for (var r = n.length - 1; 0 <= r && !Lb(n[r], e); r--) ;
  };
  function Ff(e, n) {
    return n.push(e), !1;
  }
  Nn.prototype.blur = function() {
    var e = w(
      this._fragmentFiber
    );
    e !== null && (e = E(e), e = Ql(e).activeElement, e !== null && b(
      this._fragmentFiber.child,
      !1,
      wk,
      e,
      void 0,
      void 0
    ));
  };
  function wk(e, n) {
    return e.tag === 6 ? !1 : (e = E(e), e === n || e.contains(n) ? (n.blur(), !0) : !1);
  }
  Nn.prototype.observeUsing = function(e) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), b(
      this._fragmentFiber.child,
      !1,
      kk,
      e,
      void 0,
      void 0
    );
  };
  function kk(e, n) {
    return e.tag === 6 || (e = E(e), n.observe(e)), !1;
  }
  Nn.prototype.unobserveUsing = function(e) {
    var n = this._observers;
    if (n !== null && n.has(e)) {
      n.delete(e), b(
        this._fragmentFiber.child,
        !1,
        Sk,
        e,
        void 0,
        void 0
      );
      for (var r = n = 0; r < ai.length; r++) {
        var l = ai[r];
        l.fragmentInstance === this && l.observer === e ? e.unobserve(l.instance) : ai[n++] = l;
      }
      ai.length = n;
    }
  };
  function Sk(e, n) {
    return e.tag === 6 || (e = E(e), n.unobserve(e)), !1;
  }
  var ai = [], Xf = !1;
  function zk(e, n, r) {
    ai.push({
      fragmentInstance: e,
      observer: n,
      instance: r
    }), Xf || (Xf = !0, Dk(function() {
      Xf = !1;
      var l = ai;
      ai = [];
      for (var u = 0; u < l.length; u++) {
        var d = l[u];
        d.observer.unobserve(d.instance);
      }
    }));
  }
  Nn.prototype.getClientRects = function() {
    var e = [];
    return b(
      this._fragmentFiber.child,
      !1,
      _k,
      e,
      void 0,
      void 0
    ), e;
  };
  function _k(e, n) {
    if (e.tag === 6) {
      e = e.stateNode;
      var r = e.ownerDocument.createRange();
      r.selectNodeContents(e), n.push.apply(n, r.getClientRects());
    } else
      e = E(e), n.push.apply(n, e.getClientRects());
    return !1;
  }
  Nn.prototype.getRootNode = function(e) {
    var n = w(
      this._fragmentFiber
    );
    return n === null ? this : E(n).getRootNode(e);
  }, Nn.prototype.compareDocumentPosition = function(e) {
    var n = w(
      this._fragmentFiber
    );
    if (n === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var r = [];
    b(
      this._fragmentFiber.child,
      !1,
      Ff,
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
    return k = l && d && y & Node.DOCUMENT_POSITION_FOLLOWING && k & Node.DOCUMENT_POSITION_PRECEDING, n = l && n === e || d && u === e || _ || k ? Node.DOCUMENT_POSITION_CONTAINED_BY : !l && n === e || !d && u === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : y, n & Node.DOCUMENT_POSITION_DISCONNECTED || n & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || jk(
      n,
      this._fragmentFiber,
      r[0],
      r[r.length - 1],
      e
    ) ? n : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function jk(e, n, r, l, u) {
    var d = Cr(u);
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
    return e & Node.DOCUMENT_POSITION_PRECEDING ? ((n = !!d) && !(n = d === r) && (n = N(
      r,
      d,
      K
    ), n === null ? n = !1 : (b(
      n,
      !0,
      U,
      d,
      r
    ), d = O, O = null, n = d !== null)), n) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((n = !!d) && !(n = d === l) && (n = N(
      l,
      d,
      K
    ), n === null ? n = !1 : (b(
      n,
      !0,
      V,
      d,
      l
    ), d = O, B = O = null, n = d !== null)), n) : !1;
  }
  function Bb(e, n) {
    var r = e.ownerDocument.createRange();
    r.selectNodeContents(e), e = r.getBoundingClientRect(), window.scrollTo(
      window.scrollX + e.left,
      n ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight
    );
  }
  Nn.prototype.scrollIntoView = function(e) {
    if (typeof e == "object") throw Error(o(566));
    var n = [];
    b(
      this._fragmentFiber.child,
      !1,
      Ff,
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
        e = E(l), Bb(e, r);
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
      u.tag === 6 ? (u = E(u), Bb(u, r)) : E(u).scrollIntoView(e), l += r ? -1 : 1;
    }
  };
  function Ek(e, n) {
    return e = E(e), Ib(e, n), !1;
  }
  function Ib(e, n) {
    e.reactFragments == null && (e.reactFragments = /* @__PURE__ */ new Set()), e.reactFragments.add(n);
  }
  function Hb(e, n) {
    var r = n._eventListeners;
    if (r !== null)
      for (var l = 0; l < r.length; l++) {
        var u = r[l];
        e.addEventListener(
          u.type,
          u.attachedListener,
          Fa(u.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 && (r = n._observers, r !== null && r.forEach(function(d) {
      for (var y = 0, k = 0; k < ai.length; k++) {
        var _ = ai[k];
        (_.fragmentInstance !== n || _.observer !== d || _.instance !== e) && (ai[y++] = _);
      }
      ai.length = y, d.observe(e);
    }), Ib(e, n));
  }
  function Ck(e, n) {
    var r = n._eventListeners;
    if (r !== null)
      for (var l = 0; l < r.length; l++) {
        var u = r[l];
        e.removeEventListener(
          u.type,
          u.attachedListener,
          Fa(u.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 && (r = n._observers, r !== null && r.forEach(function(d) {
      typeof d.rootMargin == "string" ? zk(
        n,
        d,
        e
      ) : d.unobserve(e);
    }), e.reactFragments != null && e.reactFragments.delete(n));
  }
  function Qf(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var r = n;
      switch (n = n.nextSibling, r.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Qf(r), Ao(r);
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
  function Tk(e, n, r, l) {
    for (; e.nodeType === 1; ) {
      var u = r;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[pl])
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
      if (e = Gn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Nk(e, n, r) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !r || (e = Gn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Zb(e, n) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Gn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Pf(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Kf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Ak(e, n) {
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
  function Gn(e) {
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
  var Jf = null;
  function qb(e) {
    e = e.nextSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "/$" || r === "/&") {
          if (n === 0)
            return Gn(e.nextSibling);
          n--;
        } else
          r !== "$" && r !== "$!" && r !== "$?" && r !== "$~" && r !== "&" || n++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function $b(e) {
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
  function Ok(e, n) {
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
  function Dk(e) {
    Tb(function() {
      Tb(function(n) {
        return e(n);
      });
    });
  }
  function Vb(e, n, r) {
    switch (n = Ql(r), e) {
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
  function Yb(e, n, r) {
    for (var l in r) {
      var u = r[l];
      r.hasOwnProperty(l) && u != null && tt(e, n, l, null, sk, u);
    }
    r.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === si && (e.onclick = null), Ao(e);
  }
  function Wf(e) {
    for (var n = e.attributes; n.length; )
      e.removeAttributeNode(n[0]);
    Ao(e);
  }
  var Fn = /* @__PURE__ */ new Map(), Gb = /* @__PURE__ */ new Set();
  function Pl(e) {
    if (typeof e.getRootNode == "function") {
      var n = e.getRootNode();
      if (n.nodeType === 9 || n.nodeType === 11) return n;
    }
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  var qi = fe.d;
  fe.d = {
    f: Mk,
    r: Rk,
    D: Uk,
    C: Lk,
    L: Bk,
    m: Ik,
    X: Zk,
    S: Hk,
    M: qk
  };
  function Mk() {
    var e = qi.f(), n = Ms();
    return e || n;
  }
  function Rk(e) {
    var n = da(e);
    n !== null && n.tag === 5 && n.type === "form" ? Xm(n) : qi.r(e);
  }
  var Xa = typeof document > "u" ? null : document;
  function Fb(e, n, r) {
    var l = Xa;
    if (l && typeof n == "string" && n) {
      var u = In(n);
      u = 'link[rel="' + e + '"][href="' + u + '"]', typeof r == "string" && (u += '[crossorigin="' + r + '"]'), Gb.has(u) || (Gb.add(u), e = { rel: e, crossOrigin: r, href: n }, l.querySelector(u) === null && (n = l.createElement("link"), Yt(n, "link", e), Rt(n), l.head.appendChild(n)));
    }
  }
  function Uk(e) {
    qi.D(e), Fb("dns-prefetch", e, null);
  }
  function Lk(e, n) {
    qi.C(e, n), Fb("preconnect", e, n);
  }
  function Bk(e, n, r) {
    qi.L(e, n, r);
    var l = Xa;
    if (l && e && n) {
      var u = 'link[rel="preload"][as="' + In(n) + '"]';
      n === "image" && r && r.imageSrcSet ? (u += '[imagesrcset="' + In(
        r.imageSrcSet
      ) + '"]', typeof r.imageSizes == "string" && (u += '[imagesizes="' + In(
        r.imageSizes
      ) + '"]')) : u += '[href="' + In(e) + '"]';
      var d = u;
      switch (n) {
        case "style":
          d = Qa(e);
          break;
        case "script":
          d = Pa(e);
      }
      if (!(Fn.has(d) || (e = X(
        {
          rel: "preload",
          href: n === "image" && r && r.imageSrcSet ? void 0 : e,
          as: n
        },
        r
      ), Fn.set(d, e), l.querySelector(u) !== null || n === "style" && l.querySelector(Kl(d)) || n === "script" && l.querySelector(Jl(d))))) {
        var y = l.createElement("link");
        Yt(y, "link", e), n === "style" && (y[No] = !0, y.onload = y.onerror = function() {
          lh(y);
        }), Rt(y), l.head.appendChild(y);
      }
    }
  }
  function Ik(e, n) {
    qi.m(e, n);
    var r = Xa;
    if (r && e) {
      var l = n && typeof n.as == "string" ? n.as : "script", u = 'link[rel="modulepreload"][as="' + In(l) + '"][href="' + In(e) + '"]', d = u;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          d = Pa(e);
      }
      if (!Fn.has(d) && (e = X({ rel: "modulepreload", href: e }, n), Fn.set(d, e), r.querySelector(u) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (r.querySelector(Jl(d)))
              return;
        }
        l = r.createElement("link"), Yt(l, "link", e), Rt(l), r.head.appendChild(l);
      }
    }
  }
  function Hk(e, n, r) {
    qi.S(e, n, r);
    var l = Xa;
    if (l && e) {
      var u = pa(l).hoistableStyles, d = Qa(e);
      n = n || "default";
      var y = u.get(d);
      if (!y) {
        var k = { loading: 0, preload: null };
        if (y = l.querySelector(
          Kl(d)
        ))
          k.loading = 5;
        else {
          e = X(
            { rel: "stylesheet", href: e, "data-precedence": n },
            r
          ), (r = Fn.get(d)) && ed(e, r);
          var _ = y = l.createElement("link");
          Rt(_), Yt(_, "link", e), _._p = new Promise(function(R, q) {
            _.onload = R, _.onerror = q;
          }), _.addEventListener("load", function() {
            k.loading |= 1;
          }), _.addEventListener("error", function() {
            k.loading |= 2;
          }), k.loading |= 4, Zs(y, n, l);
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
  function Zk(e, n) {
    qi.X(e, n);
    var r = Xa;
    if (r && e) {
      var l = pa(r).hoistableScripts, u = Pa(e), d = l.get(u);
      d || (d = r.querySelector(Jl(u)), d || (e = X({ src: e, async: !0 }, n), (n = Fn.get(u)) && td(e, n), d = r.createElement("script"), Rt(d), Yt(d, "link", e), r.head.appendChild(d)), d = {
        type: "script",
        instance: d,
        count: 1,
        state: null
      }, l.set(u, d));
    }
  }
  function qk(e, n) {
    qi.M(e, n);
    var r = Xa;
    if (r && e) {
      var l = pa(r).hoistableScripts, u = Pa(e), d = l.get(u);
      d || (d = r.querySelector(Jl(u)), d || (e = X({ src: e, async: !0, type: "module" }, n), (n = Fn.get(u)) && td(e, n), d = r.createElement("script"), Rt(d), Yt(d, "link", e), r.head.appendChild(d)), d = {
        type: "script",
        instance: d,
        count: 1,
        state: null
      }, l.set(u, d));
    }
  }
  function Xb(e, n, r, l) {
    var u = (u = xt.current) ? Pl(u) : null;
    if (!u) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof r.precedence == "string" && typeof r.href == "string" ? (r = Qa(r.href), n = pa(
          u
        ).hoistableStyles, l = n.get(r), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(r, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (r.rel === "stylesheet" && typeof r.href == "string" && typeof r.precedence == "string") {
          e = Qa(r.href);
          var d = pa(
            u
          ).hoistableStyles, y = d.get(e);
          if (y || (u = u.ownerDocument || u, y = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, d.set(e, y), (d = u.querySelector(
            Kl(e)
          )) ? d._p || (y.instance = d, y.state.loading = 5) : (d = Fn.get(e), d || (d = {
            rel: "preload",
            as: "style",
            href: r.href,
            crossOrigin: r.crossOrigin,
            integrity: r.integrity,
            media: r.media,
            hrefLang: r.hrefLang,
            referrerPolicy: r.referrerPolicy
          }, Fn.set(e, d)), $k(
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
        return n = r.async, r = r.src, typeof r == "string" && n && typeof n != "function" && typeof n != "symbol" ? (r = Pa(r), n = pa(
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
  function Qa(e) {
    return 'href="' + In(e) + '"';
  }
  function Kl(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Qb(e) {
    return X({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function $k(e, n, r, l) {
    if (n = e.querySelector(
      'link[rel="preload"][as="style"][' + n + "]"
    )) {
      if (n[No] !== !0) {
        l.loading = 1;
        return;
      }
    } else
      n = e.createElement("link"), n[No] = !0, n.onload = n.onerror = lh.bind(null, n), Yt(n, "link", r), Rt(n), e.head.appendChild(n);
    l.preload = n, n.addEventListener("load", function() {
      return l.loading |= 1;
    }), n.addEventListener("error", function() {
      return l.loading |= 2;
    });
  }
  function Pa(e) {
    return '[src="' + In(e) + '"]';
  }
  function Jl(e) {
    return "script[async]" + e;
  }
  function Pb(e, n, r) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + In(r.href) + '"]'
          );
          if (l)
            return n.instance = l, Rt(l), l;
          var u = X({}, r, {
            "data-href": r.href,
            "data-precedence": r.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), Rt(l), Yt(l, "style", u), Zs(l, r.precedence, e), n.instance = l;
        case "stylesheet":
          u = Qa(r.href);
          var d = e.querySelector(
            Kl(u)
          );
          if (d)
            return n.state.loading |= 4, n.instance = d, Rt(d), d;
          l = Qb(r), (u = Fn.get(u)) && ed(l, u), d = (e.ownerDocument || e).createElement("link"), Rt(d);
          var y = d;
          return y._p = new Promise(function(k, _) {
            y.onload = k, y.onerror = _;
          }), Yt(d, "link", l), n.state.loading |= 4, Zs(d, r.precedence, e), n.instance = d;
        case "script":
          return d = Pa(r.src), (u = e.querySelector(
            Jl(d)
          )) ? (n.instance = u, Rt(u), u) : (l = r, (u = Fn.get(d)) && (l = X({}, r), td(l, u)), e = e.ownerDocument || e, u = e.createElement("script"), Rt(u), Yt(u, "link", l), e.head.appendChild(u), n.instance = u);
        case "void":
          return null;
        default:
          throw Error(o(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (l = n.instance, n.state.loading |= 4, Zs(l, r.precedence, e));
    return n.instance;
  }
  function Zs(e, n, r) {
    for (var l = r.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = l.length ? l[l.length - 1] : null, d = u, y = 0; y < l.length; y++) {
      var k = l[y];
      if (k.dataset.precedence === n) d = k;
      else if (d !== u) break;
    }
    d ? d.parentNode.insertBefore(e, d.nextSibling) : (n = r.nodeType === 9 ? r.head : r, n.insertBefore(e, n.firstChild));
  }
  function ed(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title);
  }
  function td(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.integrity == null && (e.integrity = n.integrity);
  }
  var qs = null;
  function Kb(e, n, r) {
    if (qs === null) {
      var l = /* @__PURE__ */ new Map(), u = qs = /* @__PURE__ */ new Map();
      u.set(r, l);
    } else
      u = qs, l = u.get(r), l || (l = /* @__PURE__ */ new Map(), u.set(r, l));
    if (l.has(e)) return l;
    for (l.set(e, null), r = r.getElementsByTagName(e), u = 0; u < r.length; u++) {
      var d = r[u];
      if (!(d[pl] || d[Ht] || e === "link" && d.getAttribute("rel") === "stylesheet") && d.namespaceURI !== "http://www.w3.org/2000/svg") {
        var y = d.getAttribute(n) || "";
        y = e + y;
        var k = l.get(y);
        k ? k.push(d) : l.set(y, [d]);
      }
    }
    return l;
  }
  function nd(e, n, r) {
    e = e.ownerDocument || e, e.head.insertBefore(
      r,
      n === "title" ? e.querySelector("head > title") : null
    );
  }
  function Vk(e, n, r) {
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
  function Jb(e, n) {
    return e === "img" && n.src != null && n.src !== "" && n.onLoad == null && n.loading !== "lazy";
  }
  function Wb(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function ex(e) {
    return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function tx(e, n) {
    typeof n.decode == "function" && (e.imgCount++, n.complete || (e.imgBytes += ex(n), e.suspenseyImages.push(n)), e = Fk.bind(e), n.decode().then(e, e));
  }
  function Yk(e, n, r, l) {
    if (r.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (r.state.loading & 4) === 0) {
      if (r.instance === null) {
        var u = Qa(l.href), d = n.querySelector(
          Kl(u)
        );
        if (d) {
          n = d._p, n !== null && typeof n == "object" && typeof n.then == "function" && (e.count++, e = Wl.bind(e), n.then(e, e)), r.state.loading |= 4, r.instance = d, Rt(d);
          return;
        }
        d = n.ownerDocument || n, l = Qb(l), (u = Fn.get(u)) && ed(l, u), d = d.createElement("link"), Rt(d);
        var y = d;
        y._p = new Promise(function(k, _) {
          y.onload = k, y.onerror = _;
        }), Yt(d, "link", l), r.instance = d;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(r, n), (n = r.state.preload) && (r.state.loading & 3) === 0 && (e.count++, r = Wl.bind(e), n.addEventListener("load", r), n.addEventListener("error", r));
    }
  }
  var $s = 0;
  function Gk(e, n) {
    return e.stylesheets && e.count === 0 && Ys(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(r) {
      var l = setTimeout(function() {
        if (e.stylesheets && Ys(e, e.stylesheets), e.unsuspend) {
          var d = e.unsuspend;
          e.unsuspend = null, d();
        }
      }, 6e4 + n);
      0 < e.imgBytes && $s === 0 && ($s = 62500 * ck());
      var u = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Ys(e, e.stylesheets), e.unsuspend)) {
            var d = e.unsuspend;
            e.unsuspend = null, d();
          }
        },
        (e.imgBytes > $s ? 50 : 800) + n
      );
      return e.unsuspend = r, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(u);
      };
    } : null;
  }
  function nx(e) {
    if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
      if (e.stylesheets) Ys(e, e.stylesheets);
      else if (e.unsuspend) {
        var n = e.unsuspend;
        e.unsuspend = null, n();
      }
    }
  }
  function Wl() {
    this.count--, nx(this);
  }
  function Fk() {
    this.imgCount--, nx(this);
  }
  var Vs = null;
  function Ys(e, n) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Vs = /* @__PURE__ */ new Map(), n.forEach(Xk, e), Vs = null, Wl.call(e));
  }
  function Xk(e, n) {
    if (!(n.state.loading & 4)) {
      var r = Vs.get(e);
      if (r) var l = r.get(null);
      else {
        r = /* @__PURE__ */ new Map(), Vs.set(e, r);
        for (var u = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), d = 0; d < u.length; d++) {
          var y = u[d];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (r.set(y.dataset.precedence, y), l = y);
        }
        l && r.set(null, l);
      }
      u = n.instance, y = u.getAttribute("data-precedence"), d = r.get(y) || l, d === l && r.set(null, u), r.set(y, u), this.count++, l = Wl.bind(this), u.addEventListener("load", l), u.addEventListener("error", l), d ? d.parentNode.insertBefore(u, d.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(u, e.firstChild)), n.state.loading |= 4;
    }
  }
  var Ka = {
    $$typeof: te,
    Provider: null,
    Consumer: null,
    _currentValue: ft,
    _currentValue2: ft,
    _threadCount: 0
  };
  function Qk(e, n, r, l, u, d, y, k, _) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ru(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ru(0), this.hiddenUpdates = Ru(null), this.identifierPrefix = l, this.onUncaughtError = u, this.onCaughtError = d, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = _, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function ix(e, n, r, l, u, d, y, k, _, R, q, Q) {
    return e = new Qk(
      e,
      n,
      r,
      y,
      _,
      R,
      q,
      Q,
      k
    ), n = 1, d === !0 && (n |= 24), d = fn(3, null, null, n), e.current = d, d.stateNode = e, n = gc(), n.refCount++, e.pooledCache = n, n.refCount++, d.memoizedState = {
      element: l,
      isDehydrated: r,
      cache: n
    }, vc(d), e;
  }
  function rx(e) {
    return e ? (e = Sa, e) : Sa;
  }
  function ax(e, n, r, l, u, d) {
    u = rx(u), l.context === null ? l.context = u : l.pendingContext = u, l = tr(n), l.payload = { element: r }, d = d === void 0 ? null : d, d !== null && (l.callback = d), r = nr(e, l, n), r !== null && (mn(r, e, n), Nl(r, e, n));
  }
  function lx(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < n ? r : n;
    }
  }
  function id(e, n) {
    lx(e, n), (e = e.alternate) && lx(e, n);
  }
  function ox(e) {
    if (e.tag === 13 || e.tag === 31) {
      var n = Or(e, 67108864);
      n !== null && mn(n, e, 67108864), id(e, 67108864);
    }
  }
  function sx(e) {
    if (e.tag === 13 || e.tag === 31) {
      var n = Tn();
      n = Uu(n);
      var r = Or(e, n);
      r !== null && mn(r, e, n), id(e, n);
    }
  }
  var Ja = !0;
  function Pk(e, n, r, l) {
    var u = ae.T;
    ae.T = null;
    var d = fe.p;
    try {
      fe.p = 2, rd(e, n, r, l);
    } finally {
      fe.p = d, ae.T = u;
    }
  }
  function Kk(e, n, r, l) {
    var u = ae.T;
    ae.T = null;
    var d = fe.p;
    try {
      fe.p = 8, rd(e, n, r, l);
    } finally {
      fe.p = d, ae.T = u;
    }
  }
  function rd(e, n, r, l) {
    if (Ja) {
      var u = ad(l);
      if (u === null)
        If(
          e,
          n,
          l,
          Gs,
          r
        ), cx(e, l);
      else if (Wk(
        u,
        e,
        n,
        r,
        l
      ))
        l.stopPropagation();
      else if (cx(e, l), n & 4 && -1 < Jk.indexOf(e)) {
        for (; u !== null; ) {
          var d = da(u);
          if (d !== null)
            switch (d.tag) {
              case 3:
                if (d = d.stateNode, d.current.memoizedState.isDehydrated) {
                  var y = yt(d.pendingLanes);
                  if (y !== 0) {
                    var k = d;
                    for (k.pendingLanes |= 2, k.entangledLanes |= 2; y; ) {
                      var _ = 1 << 31 - ye(y);
                      k.entanglements[1] |= _, y &= ~_;
                    }
                    xi(d), (Pe & 6) === 0 && (As = dt() + 500, Gl(0));
                  }
                }
                break;
              case 31:
              case 13:
                k = Or(d, 2), k !== null && mn(k, d, 2), Ms(), id(d, 2);
            }
          if (d = ad(l), d === null && If(
            e,
            n,
            l,
            Gs,
            r
          ), d === u) break;
          u = d;
        }
        u !== null && l.stopPropagation();
      } else
        If(
          e,
          n,
          l,
          null,
          r
        );
    }
  }
  function ad(e) {
    return e = $u(e), ld(e);
  }
  var Gs = null;
  function ld(e) {
    if (Gs = null, e = Cr(e), e !== null) {
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
    return Gs = e, null;
  }
  function ux(e) {
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
        switch (Dt()) {
          case Bn:
            return 2;
          case sn:
            return 8;
          case sa:
          case Co:
            return 32;
          case To:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var od = !1, hr = null, mr = null, gr = null, eo = /* @__PURE__ */ new Map(), to = /* @__PURE__ */ new Map(), br = [], Jk = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function cx(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        hr = null;
        break;
      case "dragenter":
      case "dragleave":
        mr = null;
        break;
      case "mouseover":
      case "mouseout":
        gr = null;
        break;
      case "pointerover":
      case "pointerout":
        eo.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        to.delete(n.pointerId);
    }
  }
  function no(e, n, r, l, u, d) {
    return e === null || e.nativeEvent !== d ? (e = {
      blockedOn: n,
      domEventName: r,
      eventSystemFlags: l,
      nativeEvent: d,
      targetContainers: [u]
    }, n !== null && (n = da(n), n !== null && ox(n)), e) : (e.eventSystemFlags |= l, n = e.targetContainers, u !== null && n.indexOf(u) === -1 && n.push(u), e);
  }
  function Wk(e, n, r, l, u) {
    switch (n) {
      case "focusin":
        return hr = no(
          hr,
          e,
          n,
          r,
          l,
          u
        ), !0;
      case "dragenter":
        return mr = no(
          mr,
          e,
          n,
          r,
          l,
          u
        ), !0;
      case "mouseover":
        return gr = no(
          gr,
          e,
          n,
          r,
          l,
          u
        ), !0;
      case "pointerover":
        var d = u.pointerId;
        return eo.set(
          d,
          no(
            eo.get(d) || null,
            e,
            n,
            r,
            l,
            u
          )
        ), !0;
      case "gotpointercapture":
        return d = u.pointerId, to.set(
          d,
          no(
            to.get(d) || null,
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
  function fx(e) {
    var n = Cr(e.target);
    if (n !== null) {
      var r = c(n);
      if (r !== null) {
        if (n = r.tag, n === 13) {
          if (n = f(r), n !== null) {
            e.blockedOn = n, ih(e.priority, function() {
              sx(r);
            });
            return;
          }
        } else if (n === 31) {
          if (n = p(r), n !== null) {
            e.blockedOn = n, ih(e.priority, function() {
              sx(r);
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
  function Fs(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var r = ad(e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var l = new r.constructor(
          r.type,
          r
        );
        qu = l, r.target.dispatchEvent(l), qu = null;
      } else
        return n = da(r), n !== null && ox(n), e.blockedOn = r, !1;
      n.shift();
    }
    return !0;
  }
  function dx(e, n, r) {
    Fs(e) && r.delete(n);
  }
  function eS() {
    od = !1, hr !== null && Fs(hr) && (hr = null), mr !== null && Fs(mr) && (mr = null), gr !== null && Fs(gr) && (gr = null), eo.forEach(dx), to.forEach(dx);
  }
  function Xs(e, n) {
    e.blockedOn === n && (e.blockedOn = null, od || (od = !0, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      eS
    )));
  }
  var Qs = null;
  function px(e) {
    Qs !== e && (Qs = e, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      function() {
        Qs === e && (Qs = null);
        for (var n = 0; n < e.length; n += 3) {
          var r = e[n], l = e[n + 1], u = e[n + 2];
          if (typeof l != "function") {
            if (ld(l || r) === null)
              continue;
            break;
          }
          var d = da(r);
          d !== null && (e.splice(n, 3), n -= 3, Zc(
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
  function Wa(e) {
    function n(_) {
      return Xs(_, e);
    }
    hr !== null && Xs(hr, e), mr !== null && Xs(mr, e), gr !== null && Xs(gr, e), eo.forEach(n), to.forEach(n);
    for (var r = 0; r < br.length; r++) {
      var l = br[r];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < br.length && (r = br[0], r.blockedOn === null); )
      fx(r), r.blockedOn === null && br.shift();
    if (r = (e.ownerDocument || e).$$reactFormReplay, r != null)
      for (l = 0; l < r.length; l += 3) {
        var u = r[l], d = r[l + 1], y = u[cn] || null;
        if (typeof d == "function")
          y || px(r);
        else if (y) {
          var k = null;
          if (d && d.hasAttribute("formAction")) {
            if (u = d, y = d[cn] || null)
              k = y.formAction;
            else if (ld(u) !== null) continue;
          } else k = y.action;
          typeof k == "function" ? r[l + 1] = k : (r.splice(l, 3), l -= 3), px(r);
        }
      }
  }
  function hx() {
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
  function sd(e) {
    this._internalRoot = e;
  }
  Ps.prototype.render = sd.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(o(409));
    var r = n.current, l = Tn();
    ax(r, l, e, n, null, null);
  }, Ps.prototype.unmount = sd.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      ax(e.current, 2, null, e, null, null), Ms(), n[fa] = null;
    }
  };
  function Ps(e) {
    this._internalRoot = e;
  }
  Ps.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = nh();
      e = { blockedOn: null, target: e, priority: n };
      for (var r = 0; r < br.length && n !== 0 && n < br[r].priority; r++) ;
      br.splice(r, 0, e), r === 0 && fx(e);
    }
  };
  var mx = i.version;
  if (mx !== "19.3.0")
    throw Error(
      o(
        527,
        mx,
        "19.3.0"
      )
    );
  fe.findDOMNode = function(e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = g(n), e = e !== null ? x(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var tS = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: ae,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ks = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ks.isDisabled && Ks.supportsFiber)
      try {
        H = Ks.inject(
          tS
        ), de = Ks;
      } catch {
      }
  }
  return ro.createRoot = function(e, n) {
    if (!s(e)) throw Error(o(299));
    var r = !1, l = "", u = rg, d = ag, y = lg;
    return n != null && (n.unstable_strictMode === !0 && (r = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (d = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError)), n = ix(
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
      hx
    ), e[fa] = n.current, Bf(e), new sd(n);
  }, ro.hydrateRoot = function(e, n, r) {
    if (!s(e)) throw Error(o(299));
    var l = !1, u = "", d = rg, y = ag, k = lg, _ = null;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onUncaughtError !== void 0 && (d = r.onUncaughtError), r.onCaughtError !== void 0 && (y = r.onCaughtError), r.onRecoverableError !== void 0 && (k = r.onRecoverableError), r.formState !== void 0 && (_ = r.formState)), n = ix(
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
      hx
    ), n.context = rx(null), r = n.current, l = Tn(), l = Uu(l), u = tr(l), u.callback = null, nr(r, u, l), r = l, n.current.lanes = r, dl(n, r), xi(n), e[fa] = n.current, Bf(e), new Ps(n);
  }, ro.version = "19.3.0", ro;
}
var _x;
function fS() {
  if (_x) return fd.exports;
  _x = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (i) {
        console.error(i);
      }
  }
  return t(), fd.exports = cS(), fd.exports;
}
var dS = fS();
const pS = (t) => t?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
function hS(t, i, a = []) {
  if (i == null)
    throw new Error("[lucide]: iconNode is required when icon name is used");
  return {
    name: pS(t),
    size: 24,
    node: i,
    ...a.length > 0 ? { aliases: a } : {}
  };
}
const mS = (t) => {
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
const gS = (t) => {
  const i = mS(t);
  return i.charAt(0).toUpperCase() + i.slice(1);
};
const Hd = (...t) => t.filter((i, a, o) => !!i && i.trim() !== "" && o.indexOf(i) === a).join(" ").trim();
const Pr = {
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
function md(t) {
  return t != null;
}
function bS(t, i = {}) {
  const a = i.attributeNames ?? {}, o = (w) => a[w] ?? w, s = t.size ?? t.width ?? Pr.width, c = t.size ?? t.height ?? Pr.height, f = t.aliases?.filter((w) => typeof w == "string" && w.trim() !== "").map((w) => `lucide-${w}`) ?? [], p = [...t.name ? [`lucide-${t.name}`] : [], ...f], m = i.className?.split(" ").filter(Boolean) ?? [], g = i.includeDefaultClasses === !1 ? Hd(...m) : Hd("lucide", ...p, ...m), x = i.absoluteStrokeWidth ? Number(i.strokeWidth ?? Pr["stroke-width"]) * Number(t.size ?? t.width ?? Pr.width) / Number(i.size ?? i.width ?? Pr.width) : i.strokeWidth ?? Pr["stroke-width"];
  return [
    "svg",
    {
      ...Object.entries(Pr).reduce((w, [v, S]) => (w[o(v)] = S, w), {}),
      ..."color" in i && i.color && {
        [o("stroke")]: i.color
      },
      ..."size" in i && md(i.size) && {
        [o("width")]: i.size,
        [o("height")]: i.size
      },
      ..."width" in i && md(i.width) && {
        [o("width")]: i.width
      },
      ..."height" in i && md(i.height) && {
        [o("height")]: i.height
      },
      [o("stroke-width")]: x,
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
function xS(t, i = {}) {
  return bS(t, {
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
const yS = (t) => {
  for (const i in t)
    if (i.startsWith("aria-") || i === "role" || i === "title")
      return !0;
  return !1;
}, vS = G.createContext({}), wS = () => G.useContext(vS), kS = G.forwardRef(
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
    icon: x = {
      node: g,
      aliases: [],
      size: 24
    },
    ...b
  }, w) => {
    const {
      size: v = 24,
      strokeWidth: S = 2,
      absoluteStrokeWidth: j = !1,
      nonScalingStroke: E = !1,
      color: O = "currentColor",
      className: B = ""
    } = wS() ?? {}, U = !!m || yS(b), [V, K, N = []] = xS(x, {
      color: t ?? O,
      width: a ?? i ?? v,
      height: o ?? i ?? v,
      strokeWidth: s ?? S,
      absoluteStrokeWidth: c ?? j,
      nonScalingStroke: f ?? E,
      className: Hd(B, p),
      hasA11yProp: U,
      attributes: b
    });
    return G.createElement(
      V,
      {
        ref: w,
        ...K
      },
      [
        ...N.map(([X, pe]) => G.createElement(X, pe)),
        ...Array.isArray(m) ? m : [m]
      ]
    );
  }
);
function ze(t, i = [], a = []) {
  const o = typeof t == "string" ? hS(t, i, a) : t, s = G.forwardRef(
    ({ className: c, ...f }, p) => G.createElement(kS, {
      ref: p,
      icon: o,
      className: c,
      ...f
    })
  );
  return o.name && (s.displayName = gS(o.name)), s;
}
const tv = {
  name: "archive",
  size: 24,
  node: [
    ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
    ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
    ["path", { d: "M10 12h4", key: "a56b0p" }]
  ]
};
tv.node;
const jx = ze(tv);
const nv = {
  name: "arrow-down",
  size: 24,
  node: [
    ["path", { d: "M12 5v14", key: "s699le" }],
    ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
  ]
};
nv.node;
const SS = ze(nv);
const iv = {
  name: "arrow-left",
  size: 24,
  node: [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }]
  ]
};
iv.node;
const zS = ze(iv);
const rv = {
  name: "arrow-right",
  size: 24,
  node: [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
  ]
};
rv.node;
const _S = ze(rv);
const av = {
  name: "arrow-up-right",
  size: 24,
  node: [
    ["path", { d: "M7 7h10v10", key: "1tivn9" }],
    ["path", { d: "M7 17 17 7", key: "1vkiza" }]
  ]
};
av.node;
const kr = ze(av);
const lv = {
  name: "arrow-up",
  size: 24,
  node: [
    ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
    ["path", { d: "M12 19V5", key: "x0mq9r" }]
  ]
};
lv.node;
const jS = ze(lv);
const ov = {
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
ov.node;
const ES = ze(ov);
const sv = {
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
sv.node;
const uv = ze(sv);
const cv = {
  name: "check",
  size: 24,
  node: [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]
};
cv.node;
const On = ze(cv);
const fv = {
  name: "chevron-down",
  size: 24,
  node: [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]
};
fv.node;
const co = ze(fv);
const dv = {
  name: "chevron-right",
  size: 24,
  node: [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]
};
dv.node;
const wi = ze(dv);
const pv = {
  name: "chevron-left",
  size: 24,
  node: [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]]
};
pv.node;
const CS = ze(pv);
const hv = {
  name: "circle-check",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m16 9-5.5 5.5L8 12", key: "xofnsj" }]
  ],
  aliases: ["check-circle-2"]
};
hv.node;
const TS = ze(hv);
const mv = {
  name: "circle-dot",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
  ]
};
mv.node;
const Ex = ze(mv);
const gv = {
  name: "circle-question-mark",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }]
  ],
  aliases: ["help-circle", "circle-help"]
};
gv.node;
const NS = ze(gv);
const bv = {
  name: "code-xml",
  size: 24,
  node: [
    ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
    ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
    ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
  ],
  aliases: ["code-2"]
};
bv.node;
const xv = ze(bv);
const yv = {
  name: "copy",
  size: 24,
  node: [
    ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
    ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
  ]
};
yv.node;
const AS = ze(yv);
const vv = {
  name: "download",
  size: 24,
  node: [
    ["path", { d: "M12 15V3", key: "m9g1x1" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
  ]
};
vv.node;
const OS = ze(vv);
const wv = {
  name: "ellipsis",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
    ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
    ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
  ],
  aliases: ["more-horizontal"]
};
wv.node;
const DS = ze(wv);
const kv = {
  name: "external-link",
  size: 24,
  node: [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
  ]
};
kv.node;
const Zd = ze(kv);
const Sv = {
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
Sv.node;
const zv = ze(Sv);
const _v = {
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
_v.node;
const nl = ze(_v);
const jv = {
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
jv.node;
const Ev = ze(jv);
const Cv = {
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
Cv.node;
const MS = ze(Cv);
const Tv = {
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
Tv.node;
const RS = ze(Tv);
const Nv = {
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
Nv.node;
const Sr = ze(Nv);
const Av = {
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
Av.node;
const US = ze(Av);
const Ov = {
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
Ov.node;
const Dv = ze(Ov);
const Mv = {
  name: "git-branch",
  size: 24,
  node: [
    ["path", { d: "M15 6a9 9 0 0 0-9 9V3", key: "1cii5b" }],
    ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
    ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }]
  ]
};
Mv.node;
const Rv = ze(Mv);
const Uv = {
  name: "image",
  size: 24,
  node: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
    ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
  ]
};
Uv.node;
const LS = ze(Uv);
const Lv = {
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
Lv.node;
const Bv = ze(Lv);
const Iv = {
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
Iv.node;
const Hv = ze(Iv);
const Zv = {
  name: "loader-circle",
  size: 24,
  node: [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]],
  aliases: ["loader-2"]
};
Zv.node;
const il = ze(Zv);
const qv = {
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
qv.node;
const ou = ze(qv);
const $v = {
  name: "monitor",
  size: 24,
  node: [
    ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
    ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
    ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
  ]
};
$v.node;
const BS = ze($v);
const Vv = {
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
Vv.node;
const Yv = ze(Vv);
const Gv = {
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
Gv.node;
const mp = ze(Gv);
const Fv = {
  name: "panel-left-close",
  size: 24,
  node: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
    ["path", { d: "M9 3v18", key: "fh3hqa" }],
    ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }]
  ],
  aliases: ["sidebar-close"]
};
Fv.node;
const IS = ze(Fv);
const Xv = {
  name: "panel-left-open",
  size: 24,
  node: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
    ["path", { d: "M9 3v18", key: "fh3hqa" }],
    ["path", { d: "m14 9 3 3-3 3", key: "8010ee" }]
  ],
  aliases: ["sidebar-open"]
};
Xv.node;
const HS = ze(Xv);
const Qv = {
  name: "panel-right",
  size: 24,
  node: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
    ["path", { d: "M15 3v18", key: "14nvp0" }]
  ]
};
Qv.node;
const ZS = ze(Qv);
const Pv = {
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
Pv.node;
const qS = ze(Pv);
const Kv = {
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
Kv.node;
const Cx = ze(Kv);
const Jv = {
  name: "plus",
  size: 24,
  node: [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }]
  ]
};
Jv.node;
const vo = ze(Jv);
const Wv = {
  name: "refresh-cw",
  size: 24,
  node: [
    ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
    ["path", { d: "M8 16H3v5", key: "1cv678" }]
  ]
};
Wv.node;
const e1 = ze(Wv);
const t1 = {
  name: "search",
  size: 24,
  node: [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
  ]
};
t1.node;
const pu = ze(t1);
const n1 = {
  name: "settings-2",
  size: 24,
  node: [
    ["path", { d: "M14 17H5", key: "gfn3mx" }],
    ["path", { d: "M19 7h-9", key: "6i9tg" }],
    ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
    ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
  ]
};
n1.node;
const i1 = ze(n1);
const r1 = {
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
r1.node;
const $S = ze(r1);
const a1 = {
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
a1.node;
const VS = ze(a1);
const l1 = {
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
l1.node;
const YS = ze(l1);
const o1 = {
  name: "square",
  size: 24,
  node: [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]]
};
o1.node;
const GS = ze(o1);
const s1 = {
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
s1.node;
const u1 = ze(s1);
const c1 = {
  name: "terminal",
  size: 24,
  node: [
    ["path", { d: "M12 19h8", key: "baeox8" }],
    ["path", { d: "m4 17 6-6-6-6", key: "1yngyt" }]
  ]
};
c1.node;
const hu = ze(c1);
const f1 = {
  name: "users",
  size: 24,
  node: [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
  ]
};
f1.node;
const FS = ze(f1);
const d1 = {
  name: "x",
  size: 24,
  node: [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ]
};
d1.node;
const ia = ze(d1);
function su({
  label: t,
  value: i,
  options: a,
  onChange: o,
  disabled: s,
  icon: c,
  className: f = ""
}) {
  const p = G.useId(), m = G.useRef(null), g = G.useRef(null), [x, b] = G.useState(!1), [w, v] = G.useState(0), S = G.useRef({ text: "", at: 0 }), j = a.findIndex((U) => U.value === i), E = () => {
    if (!m.current || !g.current) return;
    const U = m.current.getBoundingClientRect(), V = g.current;
    V.style.minWidth = `${Math.max(U.width, 200)}px`, V.style.maxHeight = `${Math.min(420, Math.max(U.top, innerHeight - U.bottom) - 16)}px`;
    const K = innerHeight - U.bottom < V.offsetHeight + 12;
    V.style.top = `${Math.max(8, K ? U.top - V.offsetHeight - 8 : U.bottom + 8)}px`, V.style.left = `${Math.max(8, Math.min(U.left, innerWidth - V.offsetWidth - 8))}px`;
  }, O = (U = Math.max(0, j)) => {
    v(U), g.current?.showPopover(), b(!0), E();
  }, B = (U) => {
    a[U] && o(a[U].value), g.current?.hidePopover(), m.current?.focus();
  };
  return G.useEffect(() => {
    if (!x) return;
    E(), window.addEventListener("resize", E);
    const U = (V) => {
      g.current?.contains(V.target) || g.current?.hidePopover();
    };
    return window.addEventListener("scroll", U, !0), () => {
      window.removeEventListener("resize", E), window.removeEventListener("scroll", U, !0);
    };
  }, [x]), G.useEffect(() => {
    x && document.getElementById(`${p}-${w}`)?.scrollIntoView({ block: "nearest" });
  }, [w, x, p]), G.useEffect(() => {
    const U = (V) => {
      V.detail !== t || s || (m.current?.focus(), O());
    };
    return window.addEventListener("muse:select", U), () => window.removeEventListener("muse:select", U);
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
        "aria-expanded": x,
        "aria-controls": p,
        "aria-activedescendant": x ? `${p}-${w}` : void 0,
        disabled: s,
        onClick: () => x ? g.current?.hidePopover() : O(),
        onKeyDown: (U) => {
          if (["ArrowDown", "ArrowUp", "Home", "End"].includes(U.key)) {
            U.preventDefault();
            const V = U.key === "Home" ? 0 : U.key === "End" ? a.length - 1 : Math.max(
              0,
              Math.min(a.length - 1, w + (U.key === "ArrowDown" ? 1 : -1))
            );
            x ? v(V) : O(U.key === "Home" || U.key === "End" ? V : Math.max(0, j));
          } else if (U.key === "Enter" || U.key === " ")
            U.preventDefault(), x ? B(w) : O();
          else if (U.key === "Escape" || U.key === "Tab")
            U.key === "Escape" && x && (U.preventDefault(), U.stopPropagation()), g.current?.hidePopover();
          else if (U.key.length === 1 && !U.metaKey && !U.ctrlKey && !U.altKey) {
            S.current = {
              text: (Date.now() - S.current.at < 700 ? S.current.text : "") + U.key.toLowerCase(),
              at: Date.now()
            };
            const V = a.findIndex(
              (K) => K.label.toLowerCase().startsWith(S.current.text)
            );
            V >= 0 && (x ? v(V) : O(V));
          }
        },
        children: [
          c,
          /* @__PURE__ */ h.jsx("span", { className: "select-value", children: a[j]?.label || i }),
          /* @__PURE__ */ h.jsx(co, { size: 13, className: "select-chevron" })
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
        onToggle: (U) => b(U.newState === "open"),
        children: [
          /* @__PURE__ */ h.jsx("div", { className: "select-heading", children: t }),
          a.map((U, V) => /* @__PURE__ */ h.jsxs(
            "div",
            {
              id: `${p}-${V}`,
              role: "option",
              "aria-selected": U.value === i,
              className: `select-option ${V === w ? "highlighted" : ""}`,
              onPointerMove: () => v(V),
              onMouseDown: (K) => K.preventDefault(),
              onClick: () => B(V),
              children: [
                /* @__PURE__ */ h.jsx(
                  On,
                  {
                    size: 15,
                    style: { visibility: U.value === i ? "visible" : "hidden" }
                  }
                ),
                /* @__PURE__ */ h.jsx("span", { children: U.label })
              ]
            },
            U.value
          ))
        ]
      }
    )
  ] });
}
function p1(t) {
  return t.kind === "reminderChild" || t.kind === "hookRun";
}
function XS(t) {
  return t.kind === "reminderChild" ? t.reminderAgentId ? `Reminder · ${t.reminderAgentId}` : "Background reminder" : t.kind === "hookRun" ? t.label || "CLI hook" : t.tool || t.label || t.kind.replace(/([A-Z])/g, " $1").replace(/^./, (i) => i.toUpperCase());
}
function QS(t) {
  const i = t.filter((a) => !a.retracted && a.status === "inProgress");
  return i.length > 0 && i.every(p1);
}
const qd = [
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
function h1(t) {
  const i = /^\/([a-z-]+)(?:\s+([\s\S]*))?$/i.exec(t.trim());
  return i ? { name: i[1].toLowerCase(), argument: i[2]?.trim() || "" } : null;
}
function $d(t) {
  const i = Object.values(t).filter((o) => typeof o == "number");
  return Object.entries(t).filter(([o, s]) => i.indexOf(+o) === -1).map(([o, s]) => s);
}
function Tx(t, i = "|") {
  return t.map((a) => v1(a)).join(i);
}
function Vd(t, i) {
  return typeof i == "bigint" ? i.toString() : i;
}
class PS {
  constructor(i) {
    this._getter = i, this._value = void 0;
  }
  get value() {
    const i = this._getter;
    return i !== void 0 && (this._value = i(), this._getter = void 0), this._value;
  }
}
function gp(t) {
  return new PS(t);
}
function KS(t) {
  return t == null;
}
function bp(t) {
  const i = t.startsWith("^") ? 1 : 0, a = t.endsWith("$") ? t.length - 1 : t.length;
  return t.slice(i, a);
}
function JS(t, i) {
  const a = t / i, o = Math.round(a), s = 4 * Number.EPSILON * Math.max(Math.abs(a), 1);
  return Math.abs(a - o) < s ? 0 : a - o;
}
function la(t, i, a) {
  Object.defineProperty(t, i, {
    value: a,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function m1(t) {
  const i = Object.getOwnPropertyDescriptor(t, "shape");
  return i?.get ? i.get.raw : i?.value;
}
function Yi(t) {
  return m1(t._zod.def) ?? t._zod.def.shape;
}
function g1(t, i, a) {
  Object.defineProperty(t, i, {
    get() {
      const o = a();
      return la(this, i, o), o;
    },
    enumerable: !0,
    configurable: !0
  });
}
function b1(t, i, a) {
  i in t ? la(t, i, a) : t[i] = a;
}
function ra(t, i, a, o) {
  const s = Yi(i);
  for (const c of a) {
    const f = Object.getOwnPropertyDescriptor(s, c);
    f.enumerable && (f.get ? g1(t, c, () => {
      const p = i._zod.def.shape[c];
      return o ? o(p, c) : p;
    }) : b1(t, c, o ? o(f.value, c) : f.value));
  }
}
function WS(t, i) {
  for (const a of Reflect.ownKeys(i)) {
    const o = Object.getOwnPropertyDescriptor(i, a);
    o.enumerable && (o.get ? g1(t, a, () => i[a]) : b1(t, a, o.value));
  }
}
function Dn(...t) {
  const i = {};
  for (const a of t) {
    const o = Object.getOwnPropertyDescriptors(a);
    Object.assign(i, o);
  }
  return Object.defineProperties({}, i);
}
function ez(t) {
  return JSON.stringify(t);
}
function tz(t) {
  return t.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const x1 = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {
};
function mu(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
const nz = /* @__PURE__ */ gp(() => {
  if (ki.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const t = Function;
    return new t(""), !0;
  } catch {
    return !1;
  }
});
function wo(t) {
  if (mu(t) === !1)
    return !1;
  const i = t.constructor;
  if (i === void 0 || typeof i != "function")
    return !0;
  const a = i.prototype;
  return !(mu(a) === !1 || Object.prototype.hasOwnProperty.call(a, "isPrototypeOf") === !1);
}
function y1(t) {
  return wo(t) ? { ...t } : Array.isArray(t) ? [...t] : t instanceof Map ? new Map(t) : t instanceof Set ? new Set(t) : t;
}
const iz = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function ju(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function _r(t, i, a) {
  const o = new t._zod.constr(i ?? t._zod.def);
  return (!i || a?.parent) && (o._zod.parent = t), o;
}
function Se(t) {
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
function v1(t) {
  return typeof t == "bigint" ? t.toString() + "n" : typeof t == "string" ? `"${t}"` : `${t}`;
}
function rz(t) {
  return Object.keys(t).filter((i) => t[i]._zod.optin !== void 0 && t[i]._zod.optout === "optional");
}
const w1 = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}, az = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function lz(t, i) {
  const a = t._zod.def, o = a.checks;
  if (o && o.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const c = {};
  return ra(c, t, Eu(t, i)), _r(t, Dn(a, { shape: c, checks: [] }));
}
function Eu(t, i) {
  const a = Yi(t), o = [];
  for (const s of Reflect.ownKeys(i)) {
    if (!Object.getOwnPropertyDescriptor(a, s)?.enumerable)
      throw new Error(`Unrecognized key: "${String(s)}"`);
    i[s] && o.push(s);
  }
  return o;
}
function oz(t, i) {
  const a = t._zod.def, o = a.checks;
  if (o && o.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const c = new Set(Eu(t, i)), f = {};
  return ra(f, t, Reflect.ownKeys(Yi(t)).filter((p) => !c.has(p))), _r(t, Dn(a, { shape: f, checks: [] }));
}
function sz(t, i) {
  if (!wo(i))
    throw new Error("Invalid input to extend: expected a plain object");
  const a = t._zod.def.checks;
  if (a && a.length > 0) {
    const s = Yi(t);
    for (const c of Reflect.ownKeys(i))
      if (Object.getOwnPropertyDescriptor(s, c) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  return _r(t, Dn(t._zod.def, { shape: k1(t, i) }));
}
function k1(t, i) {
  const a = {};
  return ra(a, t, Reflect.ownKeys(Yi(t))), WS(a, i), a;
}
function uz(t, i) {
  if (!wo(i))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  return _r(t, Dn(t._zod.def, { shape: k1(t, i) }));
}
function cz(t, i) {
  if (!i?._zod?.def)
    throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
  if (t._zod.def.checks?.length)
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  const a = {};
  ra(a, t, Reflect.ownKeys(Yi(t))), ra(a, i, Reflect.ownKeys(Yi(i)));
  const o = Dn(t._zod.def, {
    shape: a,
    get catchall() {
      return i._zod.def.catchall;
    },
    checks: i._zod.def.checks ?? []
  });
  return _r(t, o);
}
function Nx(t, i, a, o = "partial") {
  const c = i._zod.def.checks;
  if (c && c.length > 0)
    throw new Error(`.${o}() cannot be used on object schemas containing refinements`);
  const p = a ? new Set(Eu(i, a)) : void 0, m = {};
  return ra(m, i, Reflect.ownKeys(Yi(i)), t && ((g, x) => p && !p.has(x) ? g : new t({ type: "optional", innerType: g }))), _r(i, Dn(i._zod.def, { shape: m, checks: [] }));
}
function fz(t, i, a) {
  const o = a ? new Set(Eu(i, a)) : void 0, s = {};
  return ra(s, i, Reflect.ownKeys(Yi(i)), (c, f) => (
    // overwrite with non-optional
    o && !o.has(f) ? c : new t({ type: "nonoptional", innerType: c })
  )), _r(i, Dn(i._zod.def, { shape: s }));
}
function Vi(t, i = 0) {
  if (t.aborted === !0)
    return !0;
  for (let a = i; a < t.issues.length; a++)
    if (t.issues[a]?.continue !== !0)
      return !0;
  return !1;
}
function dz(t, i = 0) {
  if (t.aborted === !0)
    return !0;
  for (let a = i; a < t.issues.length; a++)
    if (t.issues[a]?.continue === !1)
      return !0;
  return !1;
}
function S1(t, i) {
  return i.map((a) => {
    var o;
    return (o = a).path ?? (o.path = []), a.path.unshift(t), a;
  });
}
function ao(t) {
  return typeof t == "string" ? t : t?.message;
}
function Ax(t) {
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
function Yd(t, i, a) {
  var o;
  for (let s = i; s < t.length; s++)
    (o = t[s]).schema ?? (o.schema = a);
}
function ll(t, i, a) {
  var o;
  const s = t.inst?._zod?.traits;
  s?.has("$ZodType") && (s.has("$ZodCheck") ? (o = t).schema ?? (o.schema = t.inst) : t.schema = t.inst);
  const c = t.schema !== t.inst ? t.schema?._zod.def?.error : void 0, f = t.message ? t.message : ao(t.inst?._zod.def?.error?.(t)) ?? ao(c?.(t)) ?? ao(i?.error?.(t)) ?? ao(a.customError?.(t)) ?? ao(a.localeError?.(t)) ?? "Invalid input", p = {};
  for (const m of Object.keys(t))
    m === "inst" || m === "schema" || m === "continue" || m === "input" || m === "__proto__" || (p[m] = t[m]);
  return p.path ?? (p.path = []), p.message = f, i?.reportInput && (p.input = t.input), p;
}
const pz = /[\uD800-\uDBFF]/;
function xp(t) {
  const i = t.length;
  if (!pz.test(t))
    return i;
  let a = i;
  for (let o = 0; o < i - 1; o++)
    (t.charCodeAt(o) & 64512) === 55296 && (t.charCodeAt(o + 1) & 64512) === 56320 && (a--, o++);
  return a;
}
function yp(t) {
  return Array.isArray(t) ? "array" : typeof t == "string" ? "string" : "unknown";
}
function hz(t) {
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
function ko(...t) {
  const [i, a, o] = t;
  return typeof i == "string" ? {
    message: i,
    code: "custom",
    input: a,
    inst: o
  } : { ...i };
}
function mz(t, i) {
  for (const a in i) {
    const o = Object.getOwnPropertyDescriptor(i, a);
    o.get ? Object.defineProperty(t, a, { ...o, enumerable: !1 }) : gz(t, a, o.value);
  }
}
function zr(t, i, a, o = !0) {
  return Object.defineProperty(t, i, { configurable: !0, writable: !0, enumerable: o, value: a }), a;
}
function z1(t, i, a) {
  return zr(t, i, a, !1);
}
function _1(t, i) {
  for (const a in t) {
    const o = t[a];
    Object.defineProperty(i, a, {
      configurable: !0,
      enumerable: !0,
      get() {
        return zr(this, a, o(this));
      },
      set(s) {
        zr(this, a, s);
      }
    });
  }
  return i;
}
function gz(t, i, a) {
  Object.defineProperty(t, i, {
    configurable: !0,
    get() {
      return this == null ? a : zr(this, i, a.bind(this));
    },
    set(o) {
      zr(this, i, o);
    }
  });
}
function bz(t, i) {
  const a = Object.getPrototypeOf(t);
  return i in a ? void 0 : a;
}
let gd, vr = !1;
const xz = {
  configurable: !0,
  get() {
    vr = !0;
  }
};
function nt(t, i, a) {
  const o = Object.getPrototypeOf(t._zod);
  if (i in o && gd !== t._zod) {
    gd = void 0;
    return;
  }
  gd = t._zod, Object.defineProperty(o, i, {
    configurable: !0,
    get() {
      Object.defineProperty(this, i, xz);
      const s = vr;
      vr = !1;
      try {
        const c = a(this);
        return vr ? delete this[i] : Object.defineProperty(this, i, { configurable: !0, writable: !0, value: c }), vr = vr || s, c;
      } catch (c) {
        throw delete this[i], vr = vr || s, c;
      }
    },
    set(s) {
      Object.defineProperty(this, i, { configurable: !0, writable: !0, value: s });
    }
  });
}
function yz(t, i, a, o) {
  const s = bz(t, i);
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
const vz = "~constantCatch";
function wz(t) {
  const i = () => t;
  return i[vz] = !0, i;
}
var Ox;
const bd = { value: void 0, enumerable: !1 };
let Dx = "captureStackTrace" in Error ? Error : null;
function kz(t) {
  const i = Dx;
  if (i) {
    const a = i.stackTraceLimit;
    if (typeof a == "number") {
      try {
        i.stackTraceLimit = 0;
      } catch {
        return Dx = null, new t();
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
function P(t, i, a, o) {
  const s = {};
  function c(w) {
    this.def = w, this.constr = b, this.traits = /* @__PURE__ */ new Set();
  }
  c.prototype = s;
  const f = a, p = f && /* @__PURE__ */ new WeakSet();
  function m(w, v) {
    if (w._zod) {
      if (w._zod.traits.has(t))
        return;
    } else {
      bd.value = new c(v);
      try {
        Object.defineProperty(w, "_zod", bd);
      } finally {
        bd.value = void 0;
      }
    }
    if (w._zod.traits.add(t), i(w, v), p) {
      const j = Object.getPrototypeOf(w), E = w._zod.constr.prototype;
      let O = j;
      for (; O && O !== E; )
        O = Object.getPrototypeOf(O);
      const B = O ?? j;
      p.has(B) || (p.add(B), mz(B, f));
    }
    const S = b.prototype;
    for (const j in S)
      Object.prototype.hasOwnProperty.call(S, j) && (j in w || (w[j] = S[j].bind(w)));
  }
  const g = o?.Parent ?? Object;
  class x extends g {
  }
  Object.defineProperty(x, "name", { value: t });
  function b(w) {
    const v = o?.Parent ? kz(x) : this;
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
  return Object.defineProperty(b, "init", { value: m }), Object.defineProperty(b, Symbol.hasInstance, {
    value: (w) => o?.Parent && w instanceof o.Parent ? !0 : w?._zod?.traits?.has(t)
  }), Object.defineProperty(b, "name", { value: t }), b;
}
class ta extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class j1 extends Error {
  constructor(i) {
    super(`Encountered unidirectional transform during encode: ${i}`), this.name = "ZodEncodeError";
  }
}
(Ox = globalThis).__zod_globalConfig ?? (Ox.__zod_globalConfig = {});
const ki = globalThis.__zod_globalConfig;
function jr(t) {
  return t && Object.assign(ki, t), ki;
}
function Sz() {
  const t = this._zod;
  return t.message ?? (t.message = JSON.stringify(t.def, Vd, 2)), t.message;
}
function zz(t) {
  this._zod.message = t;
}
const _z = {
  get: Sz,
  set: zz,
  enumerable: !0,
  configurable: !0
}, xd = { value: void 0, enumerable: !1 }, Mx = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]), jz = (t, i) => {
  t.name = "$ZodError", xd.value = i, Object.defineProperty(t, "issues", xd), xd.value = void 0, Object.defineProperty(t, "message", _z);
  const a = Object.getPrototypeOf(t);
  Mx.has(a) || (Mx.add(a), Object.defineProperty(a, "toString", {
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
}, Ez = P("$ZodError", jz);
function Cz(t, i, a) {
  return Object.prototype.hasOwnProperty.call(t, i) || (i === "__proto__" ? Object.defineProperty(t, i, { value: a(), writable: !0, enumerable: !0, configurable: !0 }) : t[i] = a()), t[i];
}
function Tz(t, i = (a) => a.message) {
  const a = {}, o = [];
  for (const s of t.issues)
    s.path.length > 0 ? Cz(a, s.path[0], () => []).push(i(s)) : o.push(i(s));
  return { formErrors: o, fieldErrors: a };
}
function Nz(t, i = (a) => a.message) {
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
            const x = p[g], b = g === p.length - 1;
            if (x === "_errors") {
              b && m._errors.push(i(f)), g++;
              continue;
            }
            Object.prototype.hasOwnProperty.call(m, x) || Object.defineProperty(m, x, {
              value: { _errors: [] },
              enumerable: !0,
              writable: !0,
              configurable: !0
            });
            const w = m[x];
            b && w._errors.push(i(f)), m = w, g++;
          }
        }
      }
  };
  return o(t), a;
}
function Cu(t, i) {
  return { callee: i?.callee ?? t, Err: i?.Err };
}
const vp = (t) => {
  const i = (a, o, s, c) => {
    const f = s ? { ...s, async: !1 } : { async: !1 }, p = a._zod.run({ value: o, issues: [] }, f);
    if (p instanceof Promise)
      throw new ta();
    if (p.issues.length) {
      const m = new (c?.Err ?? t)(p.issues.map((g) => ll(g, f, jr())));
      throw x1(m, c?.callee ?? i), m;
    }
    return p.value;
  };
  return i;
}, wp = (t) => {
  const i = async (a, o, s, c) => {
    const f = s ? { ...s, async: !0 } : { async: !0 };
    let p = a._zod.run({ value: o, issues: [] }, f);
    if (p instanceof Promise && (p = await p), p.issues.length) {
      const m = new (c?.Err ?? t)(p.issues.map((g) => ll(g, f, jr())));
      throw x1(m, c?.callee ?? i), m;
    }
    return p.value;
  };
  return i;
}, kp = (t) => (i, a, o) => {
  const s = o ? { ...o, async: !1 } : { async: !1 }, c = i._zod.run({ value: a, issues: [] }, s);
  if (c instanceof Promise)
    throw new ta();
  return c.issues.length ? E1(t, c.issues, s) : { success: !0, data: c.value };
};
function E1(t, i, a) {
  let o;
  return {
    success: !1,
    get error() {
      return o || (o = new t(i.map((s) => ll(s, a, jr()))), i = void 0, a = void 0), o;
    },
    set error(s) {
      o = s, i = void 0, a = void 0;
    }
  };
}
const Sp = (t) => async (i, a, o) => {
  const s = o ? { ...o, async: !0 } : { async: !0 };
  let c = i._zod.run({ value: a, issues: [] }, s);
  return c instanceof Promise && (c = await c), c.issues.length ? E1(t, c.issues, s) : { success: !0, data: c.value };
}, Az = /* @__PURE__ */ Symbol.for("zod.compile.invalid"), Oz = /* @__PURE__ */ Symbol.for("zod.compile.fallback"), Dz = ((t, i, a) => {
  const o = t._zod.bag.validator;
  if (o !== void 0) {
    if (o(i) !== Az)
      return !0;
    if (o.definite === !0 && a === void 0)
      return !1;
  }
  return Mz(t, i, a);
});
function Mz(t, i, a) {
  const o = a ? { ...a, async: !1, abortEarly: !0 } : { async: !1, abortEarly: !0 }, s = t._zod.bag.fallbackRun;
  let c;
  if (s ? (o[Oz] = !0, c = s({ value: i, issues: [] }, o)) : c = t._zod.run({ value: i, issues: [] }, o), c instanceof Promise)
    throw new ta();
  return c.issues.length === 0;
}
const Rz = async (t, i, a) => {
  const o = a ? { ...a, async: !0, abortEarly: !0 } : { async: !0, abortEarly: !0 };
  let s = t._zod.run({ value: i, issues: [] }, o);
  return s instanceof Promise && (s = await s), s.issues.length === 0;
}, Uz = (t) => {
  const i = vp(t), a = (o, s, c, f) => {
    const p = c ? { ...c, direction: "backward" } : { direction: "backward" };
    return i(o, s, p, Cu(a, f));
  };
  return a;
}, Lz = (t) => {
  const i = vp(t), a = (o, s, c, f) => i(o, s, c, Cu(a, f));
  return a;
}, Bz = (t) => {
  const i = wp(t), a = async (o, s, c, f) => {
    const p = c ? { ...c, direction: "backward" } : { direction: "backward" };
    return await i(o, s, p, Cu(a, f));
  };
  return a;
}, Iz = (t) => {
  const i = wp(t), a = async (o, s, c, f) => await i(o, s, c, Cu(a, f));
  return a;
}, Hz = (t) => (i, a, o) => {
  const s = o ? { ...o, direction: "backward" } : { direction: "backward" };
  return kp(t)(i, a, s);
}, Zz = (t) => (i, a, o) => kp(t)(i, a, o), qz = (t) => async (i, a, o) => {
  const s = o ? { ...o, direction: "backward" } : { direction: "backward" };
  return Sp(t)(i, a, s);
}, $z = (t) => async (i, a, o) => Sp(t)(i, a, o), Vz = /^[cC][0-9a-z]{6,}$/, Yz = /^[0-9a-z]+$/, Gz = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, Fz = /^[0-9a-vA-V]{20}$/, Xz = /^[A-Za-z0-9]{27}$/, Qz = /^[a-zA-Z0-9_-]{21}$/;
function Pz(t) {
  return new RegExp(`^[a-zA-Z0-9_-]{${t}}$`);
}
const Kz = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Jz = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Rx = (t) => t ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Wz = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, e_ = "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";
function t_() {
  return new RegExp(e_, "u");
}
const n_ = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, i_ = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, r_ = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, a_ = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, l_ = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, o_ = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/, s_ = /^https?$/, u_ = /^\+[1-9]\d{6,14}$/, C1 = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
function c_(t) {
  return new RegExp(`^${t}$`);
}
const f_ = /* @__PURE__ */ c_(C1);
function Gd(t) {
  const i = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof t.precision == "number" ? t.precision === -1 ? `${i}` : t.precision === 0 ? `${i}:[0-5]\\d` : `${i}:[0-5]\\d\\.\\d{${t.precision}}` : t.seconds ? `${i}:[0-5]\\d(?:\\.\\d+)?` : `${i}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function d_(t) {
  return new RegExp(`^${Gd(t)}$`);
}
function p_(t) {
  const i = ["Z"];
  t.offset && i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const a = `${Gd({ precision: t.precision, seconds: !0 })}(?:${i.join("|")})`, o = t.local ? `${a}|${Gd({ precision: t.precision })}` : a;
  return new RegExp(`^${C1}T(?:${o})$`);
}
const h_ = /^[\s\S]{0,}$/, m_ = /^-?\d+(?:\.\d+)?$/, g_ = /^(?:true|false)$/i, b_ = /^[^A-Z]*$/, x_ = /^[^a-z]*$/, xn = /* @__PURE__ */ P("$ZodCheck", (t, i) => {
  var a;
  t._zod ?? (t._zod = {}), t._zod.def = i, (a = t._zod).onattach ?? (a.onattach = []);
}), zp = (t) => {
  const i = t.value;
  return !KS(i) && i.length !== void 0;
}, gu = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, T1 = /* @__PURE__ */ P("$ZodCheckLessThan", (t, i) => {
  xn.init(t, i);
  const a = gu[typeof i.value];
  t._zod.check = (o) => {
    (i.inclusive ? o.value <= i.value : o.value < i.value) || o.issues.push({
      origin: gu[typeof o.value] ?? a,
      code: "too_big",
      maximum: typeof i.value == "object" ? i.value.getTime() : i.value,
      input: o.value,
      inclusive: i.inclusive,
      inst: t,
      continue: !i.abort
    });
  };
}), N1 = /* @__PURE__ */ P("$ZodCheckGreaterThan", (t, i) => {
  xn.init(t, i);
  const a = gu[typeof i.value];
  t._zod.check = (o) => {
    (i.inclusive ? o.value >= i.value : o.value > i.value) || o.issues.push({
      origin: gu[typeof o.value] ?? a,
      code: "too_small",
      minimum: typeof i.value == "object" ? i.value.getTime() : i.value,
      input: o.value,
      inclusive: i.inclusive,
      inst: t,
      continue: !i.abort
    });
  };
}), y_ = /* @__PURE__ */ P("$ZodCheckMultipleOf", (t, i) => {
  xn.init(t, i), t._zod.check = (a) => {
    if (typeof a.value != typeof i.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof a.value == "bigint" ? (
      // `value % 0n` throws, and nothing is a multiple of zero — the number branch already fails this way via NaN
      i.value !== BigInt(0) && a.value % i.value === BigInt(0)
    ) : JS(a.value, i.value) === 0) || a.issues.push({
      origin: typeof a.value,
      code: "not_multiple_of",
      divisor: i.value,
      input: a.value,
      inst: t,
      continue: !i.abort
    });
  };
}), v_ = /* @__PURE__ */ P("$ZodCheckNumberFormat", (t, i) => {
  xn.init(t, i), i.format = i.format || "float64";
  const a = i.format?.includes("int"), o = a ? "int" : "number", [s, c] = w1[i.format];
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
}), w_ = /* @__PURE__ */ P("$ZodCheckMaxLength", (t, i) => {
  var a;
  xn.init(t, i), (a = t._zod.def).when ?? (a.when = zp), t._zod.check = (o) => {
    const s = o.value, c = s.length;
    if ((typeof s == "string" && c > i.maximum ? xp(s) : c) <= i.maximum)
      return;
    const p = yp(s);
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
}), k_ = /* @__PURE__ */ P("$ZodCheckMinLength", (t, i) => {
  var a;
  xn.init(t, i), (a = t._zod.def).when ?? (a.when = zp), t._zod.check = (o) => {
    const s = o.value, c = s.length;
    if ((typeof s == "string" && c >= i.minimum && c < i.minimum * 2 ? xp(s) : c) >= i.minimum)
      return;
    const p = yp(s);
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
}), S_ = /* @__PURE__ */ P("$ZodCheckLengthEquals", (t, i) => {
  var a;
  xn.init(t, i), (a = t._zod.def).when ?? (a.when = zp), t._zod.check = (o) => {
    const s = o.value, c = s.length, f = typeof s == "string" && c >= i.length && c <= i.length * 2 ? xp(s) : c;
    if (f === i.length)
      return;
    const p = yp(s), m = f > i.length;
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
}), Tu = /* @__PURE__ */ P("$ZodCheckStringFormat", (t, i) => {
  var a, o;
  xn.init(t, i), i.pattern ? (a = t._zod).check ?? (a.check = (s) => {
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
}), z_ = /* @__PURE__ */ P("$ZodCheckRegex", (t, i) => {
  Tu.init(t, i), t._zod.check = (a) => {
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
}), __ = /* @__PURE__ */ P("$ZodCheckLowerCase", (t, i) => {
  i.pattern ?? (i.pattern = b_), Tu.init(t, i);
}), j_ = /* @__PURE__ */ P("$ZodCheckUpperCase", (t, i) => {
  i.pattern ?? (i.pattern = x_), Tu.init(t, i);
}), E_ = /* @__PURE__ */ P("$ZodCheckIncludes", (t, i) => {
  xn.init(t, i);
  const a = ju(i.includes), o = new RegExp(typeof i.position == "number" ? `^.{${i.position},}${a}` : a);
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
}), C_ = /* @__PURE__ */ P("$ZodCheckStartsWith", (t, i) => {
  xn.init(t, i);
  const a = new RegExp(`^${ju(i.prefix)}.*`);
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
}), T_ = /* @__PURE__ */ P("$ZodCheckEndsWith", (t, i) => {
  xn.init(t, i);
  const a = new RegExp(`.*${ju(i.suffix)}$`);
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
}), N_ = /* @__PURE__ */ P("$ZodCheckOverwrite", (t, i) => {
  xn.init(t, i), t._zod.check = (a) => {
    a.value = i.tx(a.value);
  };
});
class A_ {
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
const O_ = {
  major: 4,
  minor: 6,
  patch: 7
}, St = /* @__PURE__ */ P("$ZodType", (t, i) => {
  var a;
  t ?? (t = {}), t._zod.def = i, t._zod.bag = t._zod.bag || {}, t._zod.version = O_;
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
      let x = Vi(p), b;
      for (const w of m) {
        if (w._zod.def.when) {
          if (dz(p) || !w._zod.def.when(p))
            continue;
        } else if (x)
          continue;
        const v = p.issues.length, S = w._zod.check(p);
        if (S instanceof Promise && g?.async === !1)
          throw new ta();
        if (b || S instanceof Promise)
          b = (b ?? Promise.resolve()).then(async () => {
            await S, p.issues.length !== v && (Yd(p.issues, v, t), x || (x = Vi(p, v)));
          });
        else {
          if (p.issues.length === v)
            continue;
          Yd(p.issues, v, t), x || (x = Vi(p, v));
        }
      }
      return b ? b.then(() => p) : p;
    }, f = (p, m, g) => {
      if (Vi(p))
        return p.aborted = !0, p;
      const x = c(m, s, g);
      if (x instanceof Promise) {
        if (g.async === !1)
          throw new ta();
        return x.then((b) => t._zod.parse(b, g));
      }
      return t._zod.parse(x, g);
    };
    t._zod.run = (p, m) => {
      if (m.skipChecks)
        return t._zod.parse(p, m);
      if (m.direction === "backward") {
        const x = t._zod.parse({ value: p.value, issues: [] }, { ...m, skipChecks: !0 });
        return x instanceof Promise ? x.then((b) => f(b, p, m)) : f(x, p, m);
      }
      const g = t._zod.parse(p, m);
      if (g instanceof Promise) {
        if (m.async === !1)
          throw new ta();
        return g.then((x) => c(x, s, m));
      }
      return c(g, s, m);
    };
  }
}, {
  // Wrappers extend this by installing a richer factory over it; reading it eagerly would defeat the laziness.
  get "~standard"() {
    return z1(this, "~standard", O1(this));
  },
  set "~standard"(t) {
    zr(this, "~standard", t);
  }
}), A1 = (t, i) => t.issues.length ? { issues: t.issues.map((a) => ll(a, i, jr())) } : { value: t.value };
async function D_(t, i) {
  const a = { async: !0 };
  return A1(await t._zod.run({ value: i, issues: [] }, a), a);
}
function O1(t) {
  return {
    validate: (i) => {
      const a = { async: !1 };
      try {
        const o = t._zod.run({ value: i, issues: [] }, a);
        if (!(o instanceof Promise))
          return A1(o, a);
      } catch {
      }
      return D_(t, i);
    },
    vendor: "zod",
    version: 1
  };
}
const _p = /* @__PURE__ */ P("$ZodString", (t, i) => {
  St.init(t, i), t._zod.pattern = i.pattern ?? h_, t._zod.parse = (a, o) => {
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
}), ht = /* @__PURE__ */ P("$ZodStringFormat", (t, i) => {
  Tu.init(t, i), _p.init(t, i);
}), M_ = /* @__PURE__ */ P("$ZodGUID", (t, i) => {
  i.pattern ?? (i.pattern = Jz), ht.init(t, i);
}), R_ = /* @__PURE__ */ P("$ZodUUID", (t, i) => {
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
    i.pattern ?? (i.pattern = Rx(o));
  } else
    i.pattern ?? (i.pattern = Rx());
  ht.init(t, i);
}), U_ = /* @__PURE__ */ P("$ZodEmail", (t, i) => {
  i.pattern ?? (i.pattern = Wz), ht.init(t, i);
}), D1 = 1, bu = 2;
function M1(t) {
  try {
    return typeof URL < "u" && typeof URL.canParse == "function" ? URL.canParse(t) : (new URL(t), !0);
  } catch {
    return !1;
  }
}
function L_(t, i) {
  return !("normalize" in i) && !("hostname" in i) && !("protocol" in i) ? M1(t) || bu : B_(t, i);
}
function B_(t, i) {
  if (!i.normalize && i.protocol?.source === s_.source && !/^https?:\/\//i.test(t))
    return D1;
  try {
    if (typeof URL < "u") {
      const a = URL;
      if (typeof a.parse == "function")
        return a.parse(t) ?? bu;
    }
    return new URL(t);
  } catch {
    return bu;
  }
}
const I_ = /[\t\n\r]/g;
function Ux(t) {
  return t.replace(I_, "");
}
function H_(t, i) {
  return i.lastIndex = 0, i.test(t.hostname);
}
function Z_(t, i) {
  return i.lastIndex = 0, i.test(t.protocol.endsWith(":") ? t.protocol.slice(0, -1) : t.protocol);
}
const q_ = /* @__PURE__ */ P("$ZodURL", (t, i) => {
  ht.init(t, i), t._zod.check = (a) => {
    try {
      const o = a.value.trim(), s = L_(o, i);
      if (s === D1) {
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
      if (s === bu) {
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
        a.value = Ux(o);
        return;
      }
      i.hostname && !H_(s, i.hostname) && a.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: i.hostname.source,
        input: a.value,
        inst: t,
        continue: !i.abort
      }), i.protocol && !Z_(s, i.protocol) && a.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: i.protocol.source,
        input: a.value,
        inst: t,
        continue: !i.abort
      }), a.value = i.normalize ? s.href : Ux(o);
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
}), $_ = /* @__PURE__ */ P("$ZodEmoji", (t, i) => {
  i.pattern ?? (i.pattern = t_()), ht.init(t, i);
}), V_ = /* @__PURE__ */ P("$ZodNanoID", (t, i) => {
  if (i.length !== void 0 && (!Number.isInteger(i.length) || i.length < 1))
    throw new Error(`Invalid nanoid length: ${i.length}`);
  i.pattern ?? (i.pattern = i.length === void 0 ? Qz : Pz(i.length)), ht.init(t, i);
}), Y_ = /* @__PURE__ */ P("$ZodCUID", (t, i) => {
  i.pattern ?? (i.pattern = Vz), ht.init(t, i);
}), G_ = /* @__PURE__ */ P("$ZodCUID2", (t, i) => {
  i.pattern ?? (i.pattern = Yz), ht.init(t, i);
}), F_ = /* @__PURE__ */ P("$ZodULID", (t, i) => {
  i.pattern ?? (i.pattern = Gz), ht.init(t, i);
}), X_ = /* @__PURE__ */ P("$ZodXID", (t, i) => {
  i.pattern ?? (i.pattern = Fz), ht.init(t, i);
}), Q_ = /* @__PURE__ */ P("$ZodKSUID", (t, i) => {
  i.pattern ?? (i.pattern = Xz), ht.init(t, i);
}), P_ = /* @__PURE__ */ P("$ZodISODateTime", (t, i) => {
  i.pattern ?? (i.pattern = p_(i)), ht.init(t, i);
}), K_ = /* @__PURE__ */ P("$ZodISODate", (t, i) => {
  i.pattern ?? (i.pattern = f_), ht.init(t, i);
}), J_ = /* @__PURE__ */ P("$ZodISOTime", (t, i) => {
  i.pattern ?? (i.pattern = d_(i)), ht.init(t, i);
}), W_ = /* @__PURE__ */ P("$ZodISODuration", (t, i) => {
  i.pattern ?? (i.pattern = Kz), ht.init(t, i);
}), e4 = /* @__PURE__ */ P("$ZodIPv4", (t, i) => {
  i.pattern ?? (i.pattern = n_), ht.init(t, i);
}), t4 = /^[0-9a-fA-F:.]+$/;
function R1(t) {
  return t4.test(t) ? M1(`http://[${t}]`) : !1;
}
const n4 = /* @__PURE__ */ P("$ZodIPv6", (t, i) => {
  i.pattern ?? (i.pattern = i_), ht.init(t, i), t._zod.check = (a) => {
    R1(a.value) || a.issues.push({
      code: "invalid_format",
      format: "ipv6",
      input: a.value,
      inst: t,
      continue: !i.abort
    });
  };
}), i4 = /* @__PURE__ */ P("$ZodCIDRv4", (t, i) => {
  i.pattern ?? (i.pattern = r_), ht.init(t, i);
});
function r4(t) {
  const i = t.split("/");
  if (i.length !== 2)
    return !1;
  const [a, o] = i;
  if (!o)
    return !1;
  const s = Number(o);
  return `${s}` !== o || s < 0 || s > 128 ? !1 : R1(a);
}
const a4 = /* @__PURE__ */ P("$ZodCIDRv6", (t, i) => {
  i.pattern ?? (i.pattern = a_), ht.init(t, i), t._zod.check = (a) => {
    r4(a.value) || a.issues.push({
      code: "invalid_format",
      format: "cidrv6",
      input: a.value,
      inst: t,
      continue: !i.abort
    });
  };
});
function U1(t) {
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
const L1 = /^[0-9a-zA-Z+/]*={0,2}$/, l4 = /* @__PURE__ */ P("$ZodBase64", (t, i) => {
  i.pattern ?? (i.pattern = L1), ht.init(t, i), t._zod.check = (a) => {
    U1(a.value) || a.issues.push({
      code: "invalid_format",
      format: "base64",
      input: a.value,
      inst: t,
      continue: !i.abort
    });
  };
}), jp = /^[A-Za-z0-9_-]*$/;
function o4(t) {
  if (!jp.test(t))
    return !1;
  const i = t.replace(/[-_]/g, (o) => o === "-" ? "+" : "/"), a = i.padEnd(Math.ceil(i.length / 4) * 4, "=");
  return U1(a);
}
const s4 = /* @__PURE__ */ P("$ZodBase64URL", (t, i) => {
  i.pattern ?? (i.pattern = jp), ht.init(t, i), t._zod.check = (a) => {
    o4(a.value) || a.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: a.value,
      inst: t,
      continue: !i.abort
    });
  };
}), u4 = /* @__PURE__ */ P("$ZodE164", (t, i) => {
  i.pattern ?? (i.pattern = u_), ht.init(t, i);
});
function c4(t, i = null) {
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
const f4 = /* @__PURE__ */ P("$ZodJWT", (t, i) => {
  ht.init(t, i), t._zod.check = (a) => {
    c4(a.value, i.alg) || a.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: a.value,
      inst: t,
      continue: !i.abort
    });
  };
}), B1 = /* @__PURE__ */ P("$ZodNumber", (t, i) => {
  St.init(t, i), t._zod.pattern = m_, t._zod.parse = (a, o) => {
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
}), d4 = /* @__PURE__ */ P("$ZodNumberFormat", (t, i) => {
  v_.init(t, i), B1.init(t, i);
}), p4 = /* @__PURE__ */ P("$ZodBoolean", (t, i) => {
  St.init(t, i), t._zod.pattern = g_, t._zod.parse = (a, o) => {
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
}), h4 = /* @__PURE__ */ P("$ZodUnknown", (t, i) => {
  St.init(t, i), t._zod.parse = (a) => a;
}), m4 = /* @__PURE__ */ P("$ZodNever", (t, i) => {
  St.init(t, i), t._zod.parse = (a, o) => (a.issues.push({
    expected: "never",
    code: "invalid_type",
    input: a.value,
    inst: t
  }), a);
});
function g4(t, i) {
  const a = Ax(t._zod.def.checks);
  if (!a.length)
    return;
  const o = Math.min(...a.map((c) => c[0])), s = t._zod.parse;
  t._zod.parse = (c, f) => {
    const p = i(c.value);
    if (p > o && !f?.skipChecks && f?.direction !== "backward") {
      for (const [m, g] of Ax(t._zod.def.checks))
        if (p > m && g._zod.def.when(c)) {
          const x = c.issues.length;
          return g._zod.check(c), c.issues[x].continue = !1, Yd(c.issues, x, t), c;
        }
    }
    return s(c, f);
  };
}
const b4 = (t) => Array.isArray(t) ? t.length : -1;
function Lx(t, i, a) {
  t.issues.length && i.issues.push(...S1(a, t.issues)), i.value[a] = t.value;
}
const x4 = /* @__PURE__ */ P("$ZodArray", (t, i) => {
  St.init(t, i);
  const a = ki.memoizer;
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
      const g = c[m], x = i.element._zod.run({
        value: g,
        issues: []
      }, s);
      if (x instanceof Promise)
        f.push(x.then((b) => Lx(b, o, m)));
      else if (Lx(x, o, m), p && x.issues.length !== 0 && Vi(x))
        break;
    }
    return f.length ? Promise.all(f).then(() => o) : o;
  }, g4(t, b4);
});
function xu(t, i, a, o, s, c) {
  const f = a in o, p = c === "optional";
  if (!(!f && p && s === "optional")) {
    if (t.issues.length) {
      if (s !== void 0 && p && !f)
        return;
      i.issues.push(...S1(a, t.issues));
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
const y4 = [];
function I1(t) {
  const i = Object.keys(t.shape), a = Object.getOwnPropertySymbols(t.shape), o = a.length ? a : y4, s = o.length ? [...i, ...o] : i;
  for (const f of s)
    if (!t.shape?.[f]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${String(f)}": expected a Zod schema`);
  const c = rz(t.shape);
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
function H1(t, i, a, o, s, c, f) {
  const p = [], m = s.keySet, g = s.catchall._zod, x = g.def.type, b = g.optin, w = g.optout;
  let v = 0;
  for (const S in i) {
    if (f && a.issues.length !== v) {
      if (Vi(a, v))
        break;
      v = a.issues.length;
    }
    if (m.has(S))
      continue;
    if (S === "__proto__") {
      x === "never" && p.push(S);
      continue;
    }
    if (x === "never") {
      p.push(S);
      continue;
    }
    const j = g.run({ value: i[S], issues: [] }, o);
    j instanceof Promise ? t.push(j.then((E) => xu(E, a, S, i, b, w))) : xu(j, a, S, i, b, w);
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
const v4 = /* @__PURE__ */ P("$ZodObject", (t, i) => {
  St.init(t, i);
  const a = Object.getOwnPropertyDescriptor(i, "shape"), o = a?.get ? a.get.raw : i.shape ?? {};
  if (o) {
    const g = () => {
      const x = { ...o };
      return Object.defineProperty(i, "shape", { value: x }), g.raw = x, x;
    };
    g.raw = o, Object.defineProperty(i, "shape", { get: g });
  }
  const s = gp(() => I1(i));
  nt(t, "propValues", (g) => {
    const x = g.def.shape, b = {};
    for (const w in x) {
      const v = x[w]._zod;
      if (v.values) {
        Object.prototype.hasOwnProperty.call(b, w) || la(b, w, /* @__PURE__ */ new Set());
        for (const S of v.values)
          b[w].add(S);
        v.optin !== void 0 && b[w].add(void 0);
      }
    }
    return b;
  });
  const c = mu, f = i.catchall;
  let p;
  const m = ki.memoizer;
  m?.attach(t), t._zod.parse = (g, x) => {
    p ?? (p = s.value);
    const b = g.value;
    if (!c(b))
      return g.issues.push({
        expected: "object",
        code: "invalid_type",
        input: b,
        inst: t
      }), g;
    g.value = m ? m.alloc(t, g, {}, x) : {};
    const w = [], v = p.shape, S = x?.abortEarly;
    let j = g.issues.length;
    for (const E of p.allKeys) {
      if (S && g.issues.length !== j) {
        if (Vi(g, j))
          break;
        j = g.issues.length;
      }
      if (E === "__proto__")
        continue;
      const O = v[E], B = O._zod.optin, U = O._zod.optout, V = O._zod.run({ value: b[E], issues: [] }, x);
      V instanceof Promise ? w.push(V.then((K) => xu(K, g, E, b, B, U))) : xu(V, g, E, b, B, U);
    }
    return f ? H1(w, b, g, x, s.value, t, S === !0) : w.length ? Promise.all(w).then(() => g) : g;
  };
}), w4 = /* @__PURE__ */ P("$ZodObjectJIT", (t, i) => {
  v4.init(t, i);
  const a = t._zod.parse, o = gp(() => I1(i)), s = ki.memoizer, c = (v) => {
    const S = o.value, j = S.symbolKeys, E = new A_(["payload", "ctx"], { shape: v, inst: t, memo: s, syms: j }), O = (K) => `shape[${K}]._zod.run({ value: input[${K}], issues: [] }, ctx)`, B = (K, N) => `
          let ${K}_ab = false;
          for (let i = 0; i < ${K}.issues.length; i++) {
            const iss = ${K}.issues[i];
            iss.path = iss.path ? [${N}, ...iss.path] : [${N}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${K}_ab = true;
          }
          if (${K}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
    E.write("const input = payload.value;");
    const U = /* @__PURE__ */ Object.create(null);
    let V = 0;
    for (const K of S.allKeys)
      U[K] = `key_${V++}`;
    E.write(s ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};");
    for (const K of S.allKeys) {
      if (K === "__proto__")
        continue;
      const N = U[K], X = typeof K == "symbol" ? `syms[${j.indexOf(K)}]` : ez(K), pe = `${X} in input`, je = v[K], Z = je?._zod?.optin, ne = Z !== void 0, le = je?._zod?.optout === "optional";
      if (E.write(`const ${N} = ${O(X)};`), ne && le) {
        const Te = Z === "optional" ? `${N}_present` : `${N}.value !== undefined || ${N}_present`;
        E.write(`
        const ${N}_present = ${pe};
        if (!${N}.issues.length || ${N}_present) {
          if (${N}.issues.length) {${B(N, X)}
          }

          if (${Te}) {
            newResult[${X}] = ${N}.value;
          }
        }

      `);
      } else ne ? (E.write(`
        if (${N}.issues.length) {${B(N, X)}
        }
      `), Z === "defaulted" ? E.write(`newResult[${X}] = ${N}.value;`) : E.write(`
        if (${N}.value !== undefined || ${pe}) {
          newResult[${X}] = ${N}.value;
        }
      `)) : E.write(`
        const ${N}_present = ${pe};
        if (${N}.issues.length) {${B(N, X)}
        }
        if (!${N}_present && !${N}.issues.length) {
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

        if (${N}_present) {
          newResult[${X}] = ${N}.value;
        }

      `);
    }
    return E.write("payload.value = newResult;"), E.write("return payload;"), E.compile();
  };
  let f;
  const p = mu, m = !ki.jitless, x = m && nz.value, b = i.catchall;
  let w;
  t._zod.parse = (v, S) => {
    w ?? (w = o.value);
    const j = v.value;
    return p(j) ? m && x && S?.async === !1 && S.jitless !== !0 ? (f || (f = c(i.shape)), v = f(v, S), b ? H1([], j, v, S, w, t, S?.abortEarly === !0) : v) : a(v, S) : (v.issues.push({
      expected: "object",
      code: "invalid_type",
      input: j,
      inst: t
    }), v);
  };
});
function Bx(t, i, a, o) {
  for (const c of t)
    if (c.issues.length === 0)
      return i.value = c.value, i;
  const s = t.filter((c) => !Vi(c));
  return s.length === 1 ? (i.value = s[0].value, s[0]) : (i.issues.push({
    code: "invalid_union",
    input: i.value,
    inst: a,
    errors: t.map((c) => c.issues.map((f) => ll(f, o, jr())))
  }), i);
}
const k4 = /* @__PURE__ */ P("$ZodUnion", (t, i) => {
  St.init(t, i), nt(t, "optin", (o) => o.def.options.some((s) => s._zod.optin === "defaulted") ? "defaulted" : o.def.options.some((s) => s._zod.optin !== void 0) ? "optional" : void 0), nt(t, "optout", (o) => o.def.options.some((s) => s._zod.optout === "optional") ? "optional" : void 0), nt(t, "values", (o) => {
    if (o.def.options.every((s) => s._zod.values))
      return new Set(o.def.options.flatMap((s) => Array.from(s._zod.values)));
  }), nt(t, "pattern", (o) => {
    if (o.def.options.every((s) => s._zod.pattern)) {
      const s = o.def.options.map((c) => c._zod.pattern);
      return new RegExp(`^(${s.map((c) => bp(c.source)).join("|")})$`);
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
    return c ? Promise.all(f).then((p) => Bx(p, o, t, s)) : Bx(f, o, t, s);
  };
}), S4 = /* @__PURE__ */ P("$ZodIntersection", (t, i) => {
  St.init(t, i), t._zod.parse = (a, o) => {
    const s = a.value, c = i.left._zod.run({ value: s, issues: [] }, o), f = i.right._zod.run({ value: s, issues: [] }, o);
    return c instanceof Promise || f instanceof Promise ? Promise.all([c, f]).then(([m, g]) => Ix(a, m, g)) : Ix(a, c, f);
  };
});
function Fd(t, i) {
  if (t === i)
    return { valid: !0, data: t };
  if (t instanceof Date && i instanceof Date && +t == +i)
    return { valid: !0, data: t };
  if (wo(t) && wo(i)) {
    const a = Object.keys(i), o = Object.keys(t).filter((c) => a.indexOf(c) !== -1), s = { ...t, ...i };
    Object.prototype.hasOwnProperty.call(s, "__proto__") && delete s.__proto__;
    for (const c of o) {
      if (c === "__proto__")
        continue;
      const f = Fd(t[c], i[c]);
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
      const s = t[o], c = i[o], f = Fd(s, c);
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
function Ix(t, i, a) {
  const o = /* @__PURE__ */ new Map();
  let s;
  const c = /* @__PURE__ */ new Map(), f = (g, x) => {
    let b;
    if (g.code === "unrecognized_keys" && !g.path?.length)
      s ?? (s = g), b = g.keys;
    else if (g.code === "invalid_key" && g.origin === "record" && g.path?.length === 1) {
      const w = String(g.path[0]);
      c.has(w) || c.set(w, g), b = [w];
    } else
      return !1;
    for (const w of b)
      o.has(w) || o.set(w, {}), o.get(w)[x] = !0;
    return !0;
  };
  for (const g of i.issues)
    f(g, "l") || t.issues.push(g);
  for (const g of a.issues)
    f(g, "r") || t.issues.push(g);
  const p = [...o].filter(([, g]) => g.l && g.r).map(([g]) => g);
  if (p.length) {
    const g = s ? p.filter((x) => s.keys.includes(x)) : [];
    g.length && t.issues.push({ ...s, keys: g });
    for (const x of p)
      !g.includes(x) && c.has(x) && t.issues.push(c.get(x));
  }
  const m = Fd(i.value, a.value);
  if (!m.valid) {
    if (Vi(t))
      return t;
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(m.mergeErrorPath)}`);
  }
  return t.value = m.data, t;
}
const z4 = /* @__PURE__ */ P("$ZodEnum", (t, i) => {
  St.init(t, i);
  const a = $d(i.entries), o = new Set(a);
  t._zod.values = o, nt(t, "pattern", (s) => {
    const c = $d(s.def.entries).filter((f) => iz.has(typeof f));
    return new RegExp(c.length ? `^(${c.map((f) => ju(f.toString())).join("|")})$` : "^[^\\s\\S]$");
  }), t._zod.parse = (s, c) => {
    const f = s.value;
    return o.has(f) || s.issues.push({
      code: "invalid_value",
      values: a,
      input: f,
      inst: t
    }), s;
  };
}), _4 = /* @__PURE__ */ P("$ZodTransform", (t, i) => {
  St.init(t, i), t._zod.optin = "optional", ki.memoizer?.guard(t), t._zod.parse = (a, o) => {
    if (o.direction === "backward")
      throw new j1(t.constructor.name);
    const s = i.transform(a.value, a);
    if (o.async)
      return (s instanceof Promise ? s : Promise.resolve(s)).then((f) => (a.value = f, a));
    if (s instanceof Promise)
      throw new ta();
    return a.value = s, a;
  };
});
function Hx(t, i) {
  return t.value = i.issues.length ? void 0 : i.value, t;
}
const Z1 = /* @__PURE__ */ P("$ZodOptional", (t, i) => {
  St.init(t, i), nt(t, "optin", (a) => a.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), t._zod.optout = "optional", nt(t, "values", (a) => {
    const o = a.def.innerType._zod.values;
    return o ? /* @__PURE__ */ new Set([...o, void 0]) : void 0;
  }), nt(t, "pattern", (a) => {
    const o = a.def.innerType._zod.pattern;
    return o ? new RegExp(`^(${bp(o.source)})?$`) : void 0;
  }), t._zod.parse = (a, o) => {
    if (a.value === void 0) {
      if (i.innerType._zod.optin !== "defaulted")
        return a;
      const s = i.innerType._zod.run({ value: a.value, issues: [] }, o);
      return s instanceof Promise ? s.then((c) => Hx(a, c)) : Hx(a, s);
    }
    return i.innerType._zod.run(a, o);
  };
}), j4 = /* @__PURE__ */ P("$ZodExactOptional", (t, i) => {
  Z1.init(t, i), nt(t, "values", (a) => a.def.innerType._zod.values), nt(t, "pattern", (a) => a.def.innerType._zod.pattern), t._zod.parse = (a, o) => i.innerType._zod.run(a, o);
}), E4 = /* @__PURE__ */ P("$ZodNullable", (t, i) => {
  St.init(t, i), nt(t, "optin", (a) => a.def.innerType._zod.optin), nt(t, "optout", (a) => a.def.innerType._zod.optout), nt(t, "pattern", (a) => {
    const o = a.def.innerType._zod.pattern;
    return o ? new RegExp(`^(${bp(o.source)}|null)$`) : void 0;
  }), nt(t, "values", (a) => a.def.innerType._zod.values ? /* @__PURE__ */ new Set([...a.def.innerType._zod.values, null]) : void 0), t._zod.parse = (a, o) => a.value === null ? a : i.innerType._zod.run(a, o);
}), C4 = /* @__PURE__ */ P("$ZodDefault", (t, i) => {
  St.init(t, i), t._zod.optin = "defaulted", nt(t, "values", (a) => a.def.innerType._zod.values), t._zod.parse = (a, o) => {
    if (o.direction === "backward")
      return i.innerType._zod.run(a, o);
    if (a.value === void 0)
      return a.value = i.defaultValue, a;
    const s = i.innerType._zod.run(a, o);
    return s instanceof Promise ? s.then((c) => Zx(c, i)) : Zx(s, i);
  };
});
function Zx(t, i) {
  return t.value === void 0 && (t.value = i.defaultValue), t;
}
const T4 = /* @__PURE__ */ P("$ZodPrefault", (t, i) => {
  St.init(t, i), t._zod.optin = "defaulted", nt(t, "values", (a) => a.def.innerType._zod.values), t._zod.parse = (a, o) => (o.direction === "backward" || a.value === void 0 && (a.value = i.defaultValue), i.innerType._zod.run(a, o));
}), N4 = /* @__PURE__ */ P("$ZodNonOptional", (t, i) => {
  St.init(t, i), nt(t, "values", (a) => {
    const o = a.def.innerType._zod.values;
    return o ? new Set([...o].filter((s) => s !== void 0)) : void 0;
  }), t._zod.parse = (a, o) => {
    const s = i.innerType._zod.run(a, o);
    return s instanceof Promise ? s.then((c) => qx(c, t)) : qx(s, t);
  };
});
function qx(t, i) {
  return !t.issues.length && t.value === void 0 && t.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: t.value,
    inst: i
  }), t;
}
function $x(t, i, a, o) {
  return i.issues.length ? (t.value = a.catchValue({
    ...i,
    value: t.value,
    error: {
      issues: i.issues.map((s) => ll(s, o, jr()))
    },
    input: t.value
  }), t) : (t.value = i.value, i.memo && (t.memo = !0), t);
}
const A4 = /* @__PURE__ */ P("$ZodCatch", (t, i) => {
  St.init(t, i), nt(t, "optin", (a) => a.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), nt(t, "optout", (a) => a.def.innerType._zod.optout), nt(t, "values", (a) => a.def.innerType._zod.values), t._zod.parse = (a, o) => {
    if (o.direction === "backward")
      return i.innerType._zod.run(a, o);
    const s = i.innerType._zod.run({ value: a.value, issues: [] }, o);
    return s instanceof Promise ? s.then((c) => $x(a, c, i, o)) : $x(a, s, i, o);
  };
}), O4 = /* @__PURE__ */ P("$ZodPipe", (t, i) => {
  St.init(t, i), nt(t, "values", (a) => a.def.in._zod.values), nt(t, "optin", (a) => a.def.in._zod.optin), nt(t, "optout", (a) => a.def.out._zod.optout), nt(t, "propValues", (a) => a.def.in._zod.propValues), t._zod.parse = (a, o) => {
    if (o.direction === "backward") {
      const c = i.out._zod.run(a, o);
      return c instanceof Promise ? c.then((f) => Js(f, i.in, o)) : Js(c, i.in, o);
    }
    const s = i.in._zod.run(a, o);
    return s instanceof Promise ? s.then((c) => Js(c, i.out, o)) : Js(s, i.out, o);
  };
});
function Js(t, i, a) {
  return t.issues.some((o) => o.code !== "unrecognized_keys") ? (t.aborted = !0, t) : i._zod.run({ value: t.value, issues: t.issues }, a);
}
const D4 = /* @__PURE__ */ P("$ZodReadonly", (t, i) => {
  St.init(t, i), nt(t, "propValues", (a) => a.def.innerType._zod.propValues), nt(t, "values", (a) => a.def.innerType._zod.values), nt(t, "optin", (a) => a.def.innerType?._zod?.optin), nt(t, "optout", (a) => a.def.innerType?._zod?.optout), t._zod.parse = (a, o) => {
    if (o.direction === "backward")
      return i.innerType._zod.run(a, o);
    const s = i.innerType._zod.run(a, o);
    return s instanceof Promise ? s.then(Vx) : Vx(s);
  };
});
function Vx(t) {
  return t.memo || (t.value = Object.freeze(t.value)), t;
}
const M4 = /* @__PURE__ */ P("$ZodCustom", (t, i) => {
  xn.init(t, i), St.init(t, i), t._zod.parse = (a, o) => a, t._zod.check = (a) => {
    const o = a.value, s = i.fn(o);
    if (s instanceof Promise)
      return s.then((c) => Yx(c, a, o, t));
    Yx(s, a, o, t);
  };
});
function Yx(t, i, a, o) {
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
    o._zod.def.params && (s.params = o._zod.def.params), i.issues.push(ko(s));
  }
}
class R4 extends Error {
  constructor() {
    super("Cannot parse a reference cycle that closes through a transform"), this.name = "ZodCyclicError";
  }
}
const Xd = "~memo", Gx = [];
function q1(t) {
  return t !== null && typeof t == "object";
}
function yd(t) {
  return t.map((i) => i.path ? { ...i, path: i.path.slice() } : { ...i });
}
const $1 = /* @__PURE__ */ new WeakMap(), fo = 0, uu = 1, ho = 2;
function cu(t, i, a) {
  const o = $1.get(t);
  if (o !== void 0)
    return o ? ho : fo;
  if (i.has(t))
    return ho;
  i.add(t);
  let s = fo;
  const c = (x) => {
    if (s !== ho && x?._zod) {
      const b = cu(x, i);
      b > s && (s = b);
    }
  }, f = (x, b) => {
    let w = fo;
    for (const v of Reflect.ownKeys(x)) {
      const S = Object.getOwnPropertyDescriptor(x, v);
      if (!S.enumerable)
        continue;
      const j = S.get ? uu : S.value?._zod ? cu(S.value, i) : fo;
      j > w && (w = j);
    }
    return w;
  }, p = (x) => {
    x > s && (s = x);
  }, m = t._zod.def;
  switch (m.type) {
    case "object": {
      const x = m1(m);
      p(x ? f(x) : uu), c(m.catchall);
      break;
    }
    case "array":
      c(m.element);
      break;
    case "tuple":
      for (const x of m.items)
        c(x);
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
      for (const x of m.options)
        c(x);
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
      const x = m._cachedInner ?? void 0;
      p(x ? cu(x, i) : uu);
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
      for (const x in m) {
        const b = Object.getOwnPropertyDescriptor(m, x);
        if (!b || b.get)
          continue;
        const w = b.value;
        if (!(!w || typeof w != "object")) {
          if (w._zod)
            c(w);
          else if (Array.isArray(w))
            for (const v of w)
              c(v);
        }
      }
  }
  return i.delete(t), U4(t, s);
}
function U4(t, i) {
  return i !== uu && $1.set(t, i === ho), i;
}
function L4(t, i) {
  let a = t.buckets.get(i);
  return a || (a = /* @__PURE__ */ new WeakMap(), t.buckets.set(i, a)), a;
}
let Ws;
const eu = [], B4 = {
  alloc(t, i, a) {
    const o = Ws;
    if (!o)
      return a;
    Ws = void 0;
    const s = { value: a, issues: null };
    return o.set(i.value, s), eu.push(s), a;
  },
  guard(t) {
    var i;
    (i = t._zod).deferred ?? (i.deferred = []), t._zod.deferred.push(() => {
      const a = t._zod.parse, o = (s, c) => {
        if (c.direction !== "backward" && H4(c, s.value))
          throw new R4();
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
          const O = cu(t, /* @__PURE__ */ new Set());
          if (O === fo)
            return t._zod.parse = f, t._zod.run === p && (t._zod.run = f), f(m, g);
          O === ho || o ? a = !0 : o = !0;
        }
        const x = m.value;
        if (!q1(x))
          return f(m, g);
        let b = g[Xd];
        b || (b = { buckets: /* @__PURE__ */ new WeakMap(), backEdges: void 0 }, g[Xd] = b);
        let w;
        s === g ? w = c : (w = L4(b, t), s = g, c = w);
        const v = w.get(x);
        if (v)
          return m.value = v.value, v.issues ? v.issues.length && m.issues.push(...yd(v.issues)) : (m.memo = !0, b.backEdges ?? (b.backEdges = /* @__PURE__ */ new WeakSet()), b.backEdges.add(v.value)), m;
        Ws = w;
        const S = eu.length, j = f(m, g);
        Ws = void 0;
        const E = eu.length > S ? eu.pop() : void 0;
        return j instanceof Promise ? j.then((O) => (E && (E.issues = O.issues.length ? yd(O.issues) : Gx), O)) : (E && (E.issues = j.issues.length ? yd(j.issues) : Gx), j);
      };
      t._zod.parse = p, t._zod.run === f && (t._zod.run = p);
    });
  }
};
function I4() {
  return B4;
}
function H4(t, i) {
  const a = t[Xd]?.backEdges;
  return a !== void 0 && q1(i) && a.has(i);
}
const Z4 = () => {
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
        const f = s(c.expected), p = hz(c.input), m = s(p, c.input);
        return `Invalid input: expected ${f}, received ${m}`;
      }
      case "invalid_value":
        return c.values.length === 1 ? `Invalid input: expected ${v1(c.values[0])}` : `Invalid option: expected one of ${Tx(c.values, "|")}`;
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
        return `Unrecognized key${c.keys.length > 1 ? "s" : ""}: ${Tx(c.keys, ", ")}`;
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
function q4() {
  return {
    localeError: Z4()
  };
}
var Fx;
class $4 {
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
function V4() {
  return new $4();
}
(Fx = globalThis).__zod_globalRegistry ?? (Fx.__zod_globalRegistry = V4());
const po = globalThis.__zod_globalRegistry;
function V1(t) {
  return t.checks && (t.checks = [...t.checks]), t;
}
// @__NO_SIDE_EFFECTS__
function Y4(t, i) {
  return new t(V1({ type: "string", ...Se(i) }));
}
// @__NO_SIDE_EFFECTS__
function G4(t, i) {
  return new t({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...Se(i)
  });
}
// @__NO_SIDE_EFFECTS__
function F4(t, i) {
  return new t({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...Se(i)
  });
}
// @__NO_SIDE_EFFECTS__
function X4(t, i) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...Se(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Q4(t, i) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...Se(i)
  });
}
// @__NO_SIDE_EFFECTS__
function P4(t, i) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...Se(i)
  });
}
// @__NO_SIDE_EFFECTS__
function K4(t, i) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...Se(i)
  });
}
// @__NO_SIDE_EFFECTS__
function J4(t, i) {
  return new t({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...Se(i)
  });
}
// @__NO_SIDE_EFFECTS__
function W4(t, i) {
  return new t({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...Se(i)
  });
}
// @__NO_SIDE_EFFECTS__
function ej(t, i) {
  return new t({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...Se(i)
  });
}
// @__NO_SIDE_EFFECTS__
function tj(t, i) {
  return new t({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...Se(i)
  });
}
// @__NO_SIDE_EFFECTS__
function nj(t, i) {
  return new t({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...Se(i)
  });
}
// @__NO_SIDE_EFFECTS__
function ij(t, i) {
  return new t({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...Se(i)
  });
}
// @__NO_SIDE_EFFECTS__
function rj(t, i) {
  return new t({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...Se(i)
  });
}
// @__NO_SIDE_EFFECTS__
function aj(t, i) {
  return new t({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...Se(i)
  });
}
// @__NO_SIDE_EFFECTS__
function lj(t, i) {
  return new t({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...Se(i)
  });
}
// @__NO_SIDE_EFFECTS__
function oj(t, i) {
  return new t({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...Se(i)
  });
}
// @__NO_SIDE_EFFECTS__
function sj(t, i) {
  return new t({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...Se(i)
  });
}
// @__NO_SIDE_EFFECTS__
function uj(t, i) {
  return new t({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...Se(i)
  });
}
// @__NO_SIDE_EFFECTS__
function cj(t, i) {
  return new t({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...Se(i)
  });
}
// @__NO_SIDE_EFFECTS__
function fj(t, i) {
  return new t({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...Se(i)
  });
}
// @__NO_SIDE_EFFECTS__
function dj(t, i) {
  return new t({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...Se(i)
  });
}
// @__NO_SIDE_EFFECTS__
function pj(t, i) {
  return new t({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...Se(i)
  });
}
// @__NO_SIDE_EFFECTS__
function hj(t, i) {
  return new t({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...Se(i)
  });
}
// @__NO_SIDE_EFFECTS__
function mj(t, i) {
  return new t({
    type: "string",
    format: "date",
    check: "string_format",
    ...Se(i)
  });
}
// @__NO_SIDE_EFFECTS__
function gj(t, i) {
  return new t({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...Se(i)
  });
}
// @__NO_SIDE_EFFECTS__
function bj(t, i) {
  return new t({
    type: "string",
    format: "duration",
    check: "string_format",
    ...Se(i)
  });
}
// @__NO_SIDE_EFFECTS__
function xj(t, i) {
  return new t(V1({ type: "number", checks: [], ...Se(i) }));
}
// @__NO_SIDE_EFFECTS__
function yj(t, i) {
  return new t({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...Se(i)
  });
}
// @__NO_SIDE_EFFECTS__
function vj(t, i) {
  return new t({
    type: "boolean",
    ...Se(i)
  });
}
// @__NO_SIDE_EFFECTS__
function wj(t) {
  return new t({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function kj(t, i) {
  return new t({
    type: "never",
    ...Se(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Xx(t, i) {
  return new T1({
    check: "less_than",
    ...Se(i),
    value: t,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function vd(t, i) {
  return new T1({
    check: "less_than",
    ...Se(i),
    value: t,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Qx(t, i) {
  return new N1({
    check: "greater_than",
    ...Se(i),
    value: t,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function wd(t, i) {
  return new N1({
    check: "greater_than",
    ...Se(i),
    value: t,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Px(t, i) {
  return new y_({
    check: "multiple_of",
    ...Se(i),
    value: t
  });
}
// @__NO_SIDE_EFFECTS__
function Y1(t, i) {
  return new w_({
    check: "max_length",
    ...Se(i),
    maximum: t
  });
}
// @__NO_SIDE_EFFECTS__
function yu(t, i) {
  return new k_({
    check: "min_length",
    ...Se(i),
    minimum: t
  });
}
// @__NO_SIDE_EFFECTS__
function G1(t, i) {
  return new S_({
    check: "length_equals",
    ...Se(i),
    length: t
  });
}
// @__NO_SIDE_EFFECTS__
function Sj(t, i) {
  return new z_({
    check: "string_format",
    format: "regex",
    ...Se(i),
    pattern: t
  });
}
// @__NO_SIDE_EFFECTS__
function zj(t) {
  return new __({
    check: "string_format",
    format: "lowercase",
    ...Se(t)
  });
}
// @__NO_SIDE_EFFECTS__
function _j(t) {
  return new j_({
    check: "string_format",
    format: "uppercase",
    ...Se(t)
  });
}
// @__NO_SIDE_EFFECTS__
function jj(t, i) {
  return new E_({
    check: "string_format",
    format: "includes",
    ...Se(i),
    includes: t
  });
}
// @__NO_SIDE_EFFECTS__
function Ej(t, i) {
  return new C_({
    check: "string_format",
    format: "starts_with",
    ...Se(i),
    prefix: t
  });
}
// @__NO_SIDE_EFFECTS__
function Cj(t, i) {
  return new T_({
    check: "string_format",
    format: "ends_with",
    ...Se(i),
    suffix: t
  });
}
// @__NO_SIDE_EFFECTS__
function ol(t) {
  return new N_({
    check: "overwrite",
    tx: t
  });
}
// @__NO_SIDE_EFFECTS__
function Tj(t) {
  return /* @__PURE__ */ ol((i) => i.normalize(t));
}
// @__NO_SIDE_EFFECTS__
function Nj() {
  return /* @__PURE__ */ ol((t) => t.trim());
}
// @__NO_SIDE_EFFECTS__
function Aj() {
  return /* @__PURE__ */ ol((t) => t.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function Oj() {
  return /* @__PURE__ */ ol((t) => t.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function Dj() {
  return /* @__PURE__ */ ol((t) => tz(t));
}
// @__NO_SIDE_EFFECTS__
function Mj(t, i, a) {
  return new t({
    type: "array",
    element: i,
    // get element() {
    //   return element;
    // },
    ...Se(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Rj(t, i, a) {
  return new t({
    type: "custom",
    check: "custom",
    fn: i,
    ...Se(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Uj(t, i) {
  const a = /* @__PURE__ */ Lj((o) => (o.addIssue = (s) => {
    if (typeof s == "string")
      o.issues.push(ko(s, o.value, a._zod.def));
    else {
      const c = s;
      c.fatal && (c.continue = !1), c.code ?? (c.code = "custom"), "input" in c || (c.input = o.value), c.inst ?? (c.inst = a), c.continue ?? (c.continue = !a._zod.def.abort), o.issues.push(ko(c));
    }
  }, t(o.value, o)), i);
  return a;
}
// @__NO_SIDE_EFFECTS__
function Lj(t, i) {
  const a = new xn({
    check: "custom",
    ...Se(i)
  });
  return a._zod.check = t, a;
}
function mo(t, ...i) {
  for (const a of i)
    for (const o of Reflect.ownKeys(a))
      Object.prototype.propertyIsEnumerable.call(a, o) && la(t, o, a[o]);
  return t;
}
function F1(t) {
  let i = t?.target ?? "draft-2020-12";
  return i === "draft-4" && (i = "draft-04"), i === "draft-7" && (i = "draft-07"), {
    processors: t.processors ?? {},
    metadataRegistry: t?.metadata ?? po,
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
function sl(t, i, a, o, s) {
  const c = typeof i.unrepresentable == "function" ? i.unrepresentable({ zodSchema: t, path: o.path, message: s }) : i.unrepresentable;
  if (c === "any")
    return !1;
  if (c === void 0 || c === "throw")
    throw new Error(s);
  return Object.assign(a, c), !0;
}
function Ft(t, i, a = { path: [], schemaPath: [] }) {
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
    const x = {
      ...a,
      schemaPath: [...a.schemaPath, t],
      path: a.path
    };
    if (t._zod.processJSONSchema)
      t._zod.processJSONSchema(i, f.schema, x);
    else {
      const w = f.schema, v = i.processors[s.type];
      if (!v)
        throw new Error(`[toJSONSchema]: Non-representable type encountered: ${s.type}`);
      v(t, i, w, x);
    }
    const b = t._zod.parent;
    b && (f.ref || (f.ref = b), Ft(b, i, x), i.seen.get(b).isParent = !0);
  }
  const m = i.metadataRegistry.get(t);
  return m && mo(f.schema, m), i.io === "input" && an(t) && (delete f.schema.examples, delete f.schema.default), i.io === "input" && "_prefault" in f.schema && ((o = f.schema).default ?? (o.default = f.schema._prefault)), delete f.schema._prefault, i.seen.get(t).schema;
}
function Kx(t) {
  return t.replace(/~/g, "~0").replace(/\//g, "~1");
}
function X1(t, i) {
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
      const b = t.external.registry.get(f[0])?.id, w = t.external.uri ?? ((S) => S);
      if (b)
        return { ref: w(b) };
      const v = f[1].defId ?? f[1].schema.id ?? `schema${t.counter++}`;
      return f[1].defId = v, { defId: v, ref: `${w("__shared")}#/${p}/${Kx(v)}` };
    }
    const m = "#", g = `${m}/${p}/`;
    if (f[1] === a && !f[1].schema.id)
      return { ref: m };
    const x = f[1].schema.id ?? `__schema${t.counter++}`;
    return { defId: x, ref: g + Kx(x) };
  }, c = (f) => {
    if (f[1].schema.$ref)
      return;
    const p = f[1], { ref: m, defId: g } = s(f);
    p.def = { ...p.schema }, g && (p.defId = g);
    const x = p.schema;
    for (const b in x)
      delete x[b];
    x.$ref = m;
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
function Q1(t) {
  const i = t.anyOf;
  if (!Array.isArray(i) || i.length === 0 || t.type !== void 0)
    return;
  const a = [];
  for (const o of i) {
    if (!o || typeof o != "object")
      return;
    Q1(o);
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
const P1 = /* @__PURE__ */ new Set(["type", "properties", "required", "additionalProperties"]), Jx = ["oneOf", "anyOf"];
function Wx(t) {
  const i = t.additionalProperties;
  return i === void 0 || i === !1 || typeof i != "object" || i === null ? null : Object.keys(i).length ? i : null;
}
function Qd(t) {
  const i = [];
  for (const c of t) {
    if (typeof c != "object" || c.type !== "object")
      return null;
    for (const f in c)
      if (!P1.has(f))
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
        const x = g.properties?.[f] ?? Wx(g);
        x != null && (p.some((b) => JSON.stringify(b) === JSON.stringify(x)) || p.push(x));
      }
      const m = p.length === 1 ? p[0] : Qd(p) ?? { allOf: p };
      la(a, f, m);
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
      const p = Wx(f);
      p && !c.some((m) => JSON.stringify(m) === JSON.stringify(p)) && c.push(p);
    }
    c.length === 1 ? s.additionalProperties = c[0] : c.length > 1 && (s.additionalProperties = { allOf: c });
  }
  return s;
}
function Bj(t) {
  const i = t.allOf;
  if (!Array.isArray(i) || i.length < 2)
    return;
  for (const s of P1)
    if (s in t)
      return;
  const a = i.filter((s) => Jx.some((c) => Array.isArray(s[c])));
  let o = null;
  if (!a.length)
    o = Qd(i);
  else {
    const s = a[0], c = Jx.find((m) => Array.isArray(s[m]));
    if (Object.keys(s).length !== 1)
      return;
    const f = i.filter((m) => m !== s), p = s[c].map((m) => Qd([...f, m]));
    if (p.some((m) => !m))
      return;
    o = { [c]: p };
  }
  o && (delete t.allOf, mo(t, o));
}
function K1(t, i) {
  const a = t.seen.get(i);
  if (!a)
    throw new Error("Unprocessed schema. This is a bug in Zod.");
  const o = (p) => {
    const m = t.seen.get(p);
    if (m.ref === null)
      return;
    const g = m.def ?? m.schema, x = { ...g }, b = m.ref;
    if (m.ref = null, b) {
      o(b);
      const v = t.seen.get(b), S = v.schema;
      if (S.$ref && (t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0") ? (g.allOf = g.allOf ?? [], g.allOf.push(S)) : mo(g, S), mo(g, x), p._zod.parent === b)
        for (const E in g)
          E === "$ref" || E === "allOf" || E in x || delete g[E];
      if (S.$ref && v.def)
        for (const E in g)
          E === "$ref" || E === "allOf" || E in v.def && JSON.stringify(g[E]) === JSON.stringify(v.def[E]) && delete g[E];
    }
    const w = p._zod.parent;
    if (w && w !== b) {
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
        Q1(p[1].def ?? p[1].schema);
    for (const p of t.deferred)
      p();
    if (t.intersections.length) {
      const p = /* @__PURE__ */ new Map();
      for (const m of t.seen.values())
        for (const g of [m.schema, m.def]) {
          const x = g?.allOf;
          if (!Array.isArray(x))
            continue;
          const b = p.get(x);
          b ? b.push(g) : p.set(x, [g]);
        }
      for (const m of t.intersections)
        for (const g of p.get(m) ?? [])
          Bj(g);
    }
  }
  const s = {};
  if (t.target === "draft-2020-12" ? s.$schema = "https://json-schema.org/draft/2020-12/schema" : t.target === "draft-07" ? s.$schema = "http://json-schema.org/draft-07/schema#" : t.target === "draft-04" ? s.$schema = "http://json-schema.org/draft-04/schema#" : t.target, t.external?.uri) {
    const p = t.external.registry.get(i)?.id;
    if (!p)
      throw new Error("Schema is missing an `id` property");
    s.$id = t.external.uri(p);
  }
  mo(s, a.defId ? a.schema : a.def ?? a.schema);
  const c = t.metadataRegistry.get(i)?.id;
  c !== void 0 && s.id === c && delete s.id;
  const f = t.external?.defs ?? {};
  if (!t.external || t.sharedEmitDoneFor !== t.external)
    for (const p of t.seen.entries()) {
      const m = p[1];
      m.def && m.defId && (m.def.id === m.defId && delete m.def.id, la(f, m.defId, m.def));
    }
  t.external && (t.sharedEmitDoneFor = t.external), t.external || Object.keys(f).length > 0 && (t.target === "draft-2020-12" ? s.$defs = f : s.definitions = f);
  try {
    const p = JSON.parse(JSON.stringify(s));
    return Object.defineProperty(p, "~standard", {
      value: {
        ...i["~standard"],
        jsonSchema: {
          input: vu(i, "input", t.processors),
          output: vu(i, "output", t.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), p;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function an(t, i) {
  const a = i ?? { seen: /* @__PURE__ */ new Set() };
  if (a.seen.has(t))
    return !1;
  a.seen.add(t);
  const o = t._zod.def;
  if (o.type === "transform")
    return !0;
  if (o.type === "array")
    return an(o.element, a);
  if (o.type === "set")
    return an(o.valueType, a);
  if (o.type === "lazy")
    return an(o.getter(), a);
  if (o.type === "promise" || o.type === "optional" || o.type === "nonoptional" || o.type === "nullable" || o.type === "readonly" || o.type === "default" || o.type === "prefault" || o.type === "catch")
    return an(o.innerType, a);
  if (o.type === "intersection")
    return an(o.left, a) || an(o.right, a);
  if (o.type === "record" || o.type === "map")
    return an(o.keyType, a) || an(o.valueType, a);
  if (o.type === "pipe")
    return t._zod.traits.has("$ZodCodec") ? !0 : an(o.in, a) || an(o.out, a);
  if (o.type === "object") {
    for (const s in o.shape)
      if (an(o.shape[s], a))
        return !0;
    return !1;
  }
  if (o.type === "union") {
    for (const s of o.options)
      if (an(s, a))
        return !0;
    return !1;
  }
  if (o.type === "tuple") {
    for (const s of o.items)
      if (an(s, a))
        return !0;
    return !!(o.rest && an(o.rest, a));
  }
  return !1;
}
const Ij = (t, i = {}) => (a) => {
  const o = F1({ ...a, processors: i });
  return Ft(t, o), X1(o, t), K1(o, t);
}, vu = (t, i, a = {}) => (o) => {
  const { libraryOptions: s, target: c } = o ?? {}, f = F1({ ...s ?? {}, target: c, io: i, processors: a });
  return Ft(t, f), X1(f, t), K1(f, t);
}, rl = (t, i, a) => {
  (t[i] === void 0 || a > t[i]) && (t[i] = a);
}, al = (t, i, a) => {
  (t[i] === void 0 || a < t[i]) && (t[i] = a);
}, ey = (t, i) => {
  rl(t, "minimum", i), al(t, "maximum", i);
}, J1 = (t, i) => {
  t.multipleOf ?? (t.multipleOf = []), t.multipleOf.includes(i) || t.multipleOf.push(i);
}, W1 = (t, i) => {
  t.patterns ?? (t.patterns = /* @__PURE__ */ new Set()), t.patterns.add(i);
}, e0 = (t, i) => {
  t.mime = t.mime ? t.mime.filter((a) => i.includes(a)) : [...i];
}, t0 = (t, i) => {
  t.format = i, i.includes("int") && (t.isInt = !0);
}, ty = (t, i) => rl(t, "minimum", i.minimum), ny = (t, i) => al(t, "maximum", i.maximum), iy = (t) => (i, a) => {
  t0(i, a.format);
  const [o, s] = t[a.format];
  rl(i, "minimum", o), al(i, "maximum", s);
}, Hj = {
  greater_than: (t, i) => rl(t, i.inclusive ? "minimum" : "exclusiveMinimum", i.value),
  less_than: (t, i) => al(t, i.inclusive ? "maximum" : "exclusiveMaximum", i.value),
  multiple_of: (t, i) => J1(t, i.value),
  number_format: iy(w1),
  bigint_format: iy(az),
  min_length: ty,
  max_length: ny,
  length_equals: (t, i) => ey(t, i.length),
  min_size: ty,
  max_size: ny,
  size_equals: (t, i) => ey(t, i.size),
  string_format: (t, i) => {
    t0(t, i.format), i.pattern && W1(t, i.pattern), (i.format === "base64" || i.format === "base64url") && (t.contentEncoding = i.format), (i.local || i.precision === -1) && (t.laxFormat = !0);
  },
  mime_type: (t, i) => e0(t, i.mime)
};
function vi(t) {
  const i = {}, a = t._zod.def, o = t._zod.traits.has("$ZodCheck") ? [t, ...a.checks ?? []] : a.checks ?? [];
  for (const c of o)
    Hj[c._zod.def.check]?.(i, c._zod.def);
  const s = t._zod.bag;
  s.minimum !== void 0 && rl(i, "minimum", s.minimum), s.exclusiveMinimum !== void 0 && rl(i, "exclusiveMinimum", s.exclusiveMinimum), s.maximum !== void 0 && al(i, "maximum", s.maximum), s.exclusiveMaximum !== void 0 && al(i, "exclusiveMaximum", s.exclusiveMaximum), s.multipleOf !== void 0 && J1(i, s.multipleOf), s.format !== void 0 && (i.format ?? (i.format = s.format), s.format.includes("int") && (i.isInt = !0)), s.mime && e0(i, s.mime);
  for (const c of s.patterns ?? [])
    W1(i, c);
  return i;
}
const Zj = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, qj = /* @__PURE__ */ new Map([
  [L1, l_],
  [jp, o_]
]), $j = (t) => qj.get(t) ?? t, Vj = (t, i, a, o) => {
  const s = a;
  s.type = "string";
  const { minimum: c, maximum: f, format: p, patterns: m, contentEncoding: g, laxFormat: x } = vi(t);
  if (typeof c == "number" && (s.minLength = c), typeof f == "number" && (s.maxLength = f), p && (s.format = Zj[p] ?? p, s.format === "" && delete s.format, (p === "time" || x) && delete s.format), g && (s.contentEncoding = g), m && m.size > 0) {
    const b = [...m].map($j);
    b.length === 1 ? s.pattern = b[0].source : b.length > 1 && (s.allOf = [
      ...b.map((w) => ({
        ...i.target === "draft-07" || i.target === "draft-04" || i.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: w.source
      }))
    ]);
  }
}, Yj = (t, i, a, o) => {
  const s = a, { minimum: c, maximum: f, multipleOf: p, exclusiveMaximum: m, exclusiveMinimum: g, isInt: x } = vi(t);
  s.type = x ? "integer" : "number";
  const b = typeof g == "number" && g >= (c ?? Number.NEGATIVE_INFINITY), w = typeof m == "number" && m <= (f ?? Number.POSITIVE_INFINITY), v = i.target === "draft-04" || i.target === "openapi-3.0";
  if (b ? v ? (s.minimum = g, s.exclusiveMinimum = !0) : s.exclusiveMinimum = g : typeof c == "number" && (s.minimum = c), w ? v ? (s.maximum = m, s.exclusiveMaximum = !0) : s.exclusiveMaximum = m : typeof f == "number" && (s.maximum = f), p) {
    const S = /* @__PURE__ */ new Set();
    for (const O of p)
      Number.isFinite(O) && O !== 0 ? S.add(Math.abs(O)) : sl(t, i, s, o, `A multipleOf divisor of ${O} cannot be represented in JSON Schema`);
    const [j, ...E] = S;
    j !== void 0 && (s.multipleOf = j), E.length && (s.allOf = [...s.allOf ?? [], ...E.map((O) => ({ multipleOf: O }))]);
  }
}, Gj = (t, i, a, o) => {
  a.type = "boolean";
}, Fj = (t, i, a, o) => {
  a.not = {};
}, Xj = (t, i, a, o) => {
}, Qj = (t, i, a, o) => {
  const s = t._zod.def, c = $d(s.entries);
  if (c.length === 0) {
    a.not = {};
    return;
  }
  c.every((f) => typeof f == "number") && (a.type = "number"), c.every((f) => typeof f == "string") && (a.type = "string"), a.enum = c;
}, Pj = (t, i, a, o) => {
  sl(t, i, a, o, "Custom types cannot be represented in JSON Schema");
}, Kj = (t, i, a, o) => {
  sl(t, i, a, o, "Transforms cannot be represented in JSON Schema");
}, Jj = (t, i, a, o) => {
  const s = a, c = t._zod.def, { minimum: f, maximum: p } = vi(t);
  typeof f == "number" && (s.minItems = f), typeof p == "number" && (s.maxItems = p), s.type = "array", s.items = Ft(c.element, i, {
    ...o,
    path: [...o.path, "items"]
  });
};
function Pd(t) {
  const i = t._zod.def;
  return i.type === "pipe" && i.in._zod.traits.has("$ZodTransform") ? Pd(i.out) : i.type === "catch" ? Pd(i.innerType) : t._zod.optin;
}
const Wj = (t, i, a, o) => {
  const s = a, c = t._zod.def, f = c.shape;
  if (Object.getOwnPropertySymbols(f).length && sl(t, i, s, o, "Symbol keys cannot be represented in JSON Schema"))
    return;
  s.type = "object", s.properties = {};
  for (const g in f)
    la(s.properties, g, Ft(f[g], i, {
      ...o,
      path: [...o.path, "properties", g]
    }));
  const m = [];
  for (const g of Object.keys(f)) {
    const x = c.shape[g];
    (i.io === "input" ? Pd(x) === void 0 : x._zod.optout === void 0) && m.push(g);
  }
  m.length > 0 && (s.required = m), c.catchall?._zod.def.type === "never" ? s.additionalProperties = !1 : c.catchall ? c.catchall && (s.additionalProperties = Ft(c.catchall, i, {
    ...o,
    path: [...o.path, "additionalProperties"]
  })) : i.io === "output" && (s.additionalProperties = !1);
}, e3 = (t, i, a, o) => {
  const s = t._zod.def, c = s.inclusive === !1, f = s.options.map((p, m) => Ft(p, i, {
    ...o,
    path: [...o.path, c ? "oneOf" : "anyOf", m]
  }));
  c ? a.oneOf = f : a.anyOf = f;
}, t3 = (t, i, a, o) => {
  const s = t._zod.def, c = Ft(s.left, i, {
    ...o,
    path: [...o.path, "allOf", 0]
  }), f = Ft(s.right, i, {
    ...o,
    path: [...o.path, "allOf", 1]
  }), p = (g) => "allOf" in g && Object.keys(g).length === 1, m = [
    ...p(c) ? c.allOf : [c],
    ...p(f) ? f.allOf : [f]
  ];
  a.allOf = m, i.intersections.push(m);
}, n3 = (t, i, a, o) => {
  const s = t._zod.def, c = Ft(s.innerType, i, o), f = i.seen.get(t);
  i.target === "openapi-3.0" ? (f.ref = s.innerType, a.nullable = !0) : a.anyOf = [c, { type: "null" }];
}, i3 = (t, i, a, o) => {
  const s = t._zod.def;
  Ft(s.innerType, i, o);
  const c = i.seen.get(t);
  c.ref = s.innerType;
}, Ep = /* @__PURE__ */ Symbol();
function n0(t, i, a, o, s) {
  let c = !1;
  const f = JSON.stringify(t, (p, m) => typeof m != "bigint" ? m : (c = !0, null));
  return c ? (sl(i, a, o, s, "BigInt defaults cannot be represented in JSON Schema"), Ep) : JSON.parse(f);
}
const r3 = (t, i, a, o) => {
  const s = t._zod.def;
  Ft(s.innerType, i, o);
  const c = i.seen.get(t);
  c.ref = s.innerType;
  const f = n0(s.defaultValue, t, i, a, o);
  f !== Ep && (a.default = f);
}, a3 = (t, i, a, o) => {
  const s = t._zod.def;
  Ft(s.innerType, i, o);
  const c = i.seen.get(t);
  if (c.ref = s.innerType, i.io !== "input")
    return;
  const f = n0(s.defaultValue, t, i, a, o);
  f !== Ep && (a._prefault = f);
}, l3 = (t, i, a, o) => {
  const s = t._zod.def;
  Ft(s.innerType, i, o);
  const c = i.seen.get(t);
  c.ref = s.innerType;
  let f;
  try {
    f = s.catchValue(void 0);
  } catch {
    sl(t, i, a, o, "Dynamic catch values are not supported in JSON Schema");
    return;
  }
  a.default = f;
}, o3 = (t, i, a, o) => {
  const s = t._zod.def, c = s.in._zod.traits.has("$ZodTransform"), f = i.io === "input" ? c ? s.out : s.in : s.out;
  Ft(f, i, o);
  const p = i.seen.get(t);
  p.ref = f;
}, s3 = (t, i, a, o) => {
  const s = t._zod.def;
  Ft(s.innerType, i, o);
  const c = i.seen.get(t);
  c.ref = s.innerType, a.readOnly = !0;
}, i0 = (t, i, a, o) => {
  const s = t._zod.def;
  Ft(s.innerType, i, o);
  const c = i.seen.get(t);
  c.ref = s.innerType;
}, ry = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
function tu(t, i, a) {
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
const u3 = (t, i) => {
  Ez.init(t, i), t.name = "ZodError";
  const a = Object.getPrototypeOf(t);
  ry.has(a) || (ry.add(a), tu(a, "format", (o) => (s) => Nz(o, s)), tu(a, "flatten", (o) => (s) => Tz(o, s)), tu(a, "addIssue", (o) => (s) => {
    o.issues.push(s), o.message = JSON.stringify(o.issues, Vd, 2);
  }), tu(a, "addIssues", (o) => (s) => {
    o.issues.push(...s), o.message = JSON.stringify(o.issues, Vd, 2);
  }), Object.defineProperty(a, "isEmpty", {
    configurable: !0,
    enumerable: !1,
    get() {
      return this.issues.length === 0;
    }
  }));
}, Jn = /* @__PURE__ */ P("ZodError", u3, void 0, {
  Parent: Error
}), c3 = /* @__PURE__ */ vp(Jn), f3 = /* @__PURE__ */ wp(Jn), d3 = /* @__PURE__ */ kp(Jn), p3 = /* @__PURE__ */ Sp(Jn), h3 = /* @__PURE__ */ Uz(Jn), m3 = /* @__PURE__ */ Lz(Jn), g3 = /* @__PURE__ */ Bz(Jn), b3 = /* @__PURE__ */ Iz(Jn), x3 = /* @__PURE__ */ Hz(Jn), y3 = /* @__PURE__ */ Zz(Jn), v3 = /* @__PURE__ */ qz(Jn), w3 = /* @__PURE__ */ $z(Jn);
function k3() {
  ki.localeError || jr(q4());
}
function Cp() {
  ki.memoizer || jr({ memoizer: I4() });
}
const zt = /* @__PURE__ */ P("ZodType", (t, i) => (k3(), St.init(t, i), t.def = i, t.type = i.type, t), {
  check(...t) {
    const i = this.def;
    return this.clone(Dn(i, {
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
    return _r(this, t, i);
  },
  brand() {
    return this;
  },
  register(t, i) {
    return t.add(this, i), this;
  },
  refine(t, i) {
    return this.check(xE(t, i));
  },
  superRefine(t, i) {
    return this.check(yE(t, i));
  },
  overwrite(t) {
    return this.check(/* @__PURE__ */ ol(t));
  },
  optional() {
    return oy(this);
  },
  exactOptional() {
    return aE(this);
  },
  nullable() {
    return sy(this);
  },
  nullish() {
    return oy(sy(this));
  },
  nonoptional(t) {
    return fE(this, t);
  },
  array() {
    return Kn(this);
  },
  or(t) {
    return eE([this, t]);
  },
  and(t) {
    return nE(this, t);
  },
  transform(t) {
    return uy(this, rE(t));
  },
  default(t) {
    return sE(this, t);
  },
  prefault(t) {
    return cE(this, t);
  },
  catch(t) {
    return pE(this, t);
  },
  pipe(t) {
    return uy(this, t);
  },
  readonly() {
    return gE(this);
  },
  describe(t) {
    const i = this.clone();
    return po.add(i, { description: t }), i;
  },
  meta(...t) {
    if (t.length === 0)
      return po.get(this);
    const i = this.clone();
    return po.add(i, t[0]), i;
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
    return z1(this, "~standard", {
      ...O1(this),
      jsonSchema: {
        input: vu(this, "input"),
        output: vu(this, "output")
      }
    });
  },
  set "~standard"(t) {
    zr(this, "~standard", t);
  },
  parse: function t(i, a) {
    return c3(this, i, a, { callee: t });
  },
  parseAsync: async function t(i, a) {
    return await f3(this, i, a, { callee: t });
  },
  safeParse(t, i) {
    return d3(this, t, i);
  },
  async safeParseAsync(t, i) {
    return p3(this, t, i);
  },
  // `spa` is an alias: same function object as `safeParseAsync`, as before.
  get spa() {
    return this?.safeParseAsync;
  },
  set spa(t) {
    zr(this, "spa", t);
  },
  validate(t, i) {
    return Dz(this, t, i);
  },
  validateAsync(t, i) {
    return Rz(this, t, i);
  },
  encode: function t(i, a) {
    return h3(this, i, a, { callee: t });
  },
  decode: function t(i, a) {
    return m3(this, i, a, { callee: t });
  },
  encodeAsync: async function t(i, a) {
    return await g3(this, i, a, { callee: t });
  },
  decodeAsync: async function t(i, a) {
    return await b3(this, i, a, { callee: t });
  },
  safeEncode(t, i) {
    return x3(this, t, i);
  },
  safeDecode(t, i) {
    return y3(this, t, i);
  },
  async safeEncodeAsync(t, i) {
    return v3(this, t, i);
  },
  async safeDecodeAsync(t, i) {
    return w3(this, t, i);
  },
  toJSONSchema(t) {
    return Ij(this, {})(t);
  },
  // Reads through to the registry on every access, so it must not cache.
  get description() {
    return po.get(this)?.description;
  },
  // No setter: `schema._def = x` throws, as it did when `_def` was a non-writable own property.
  get _def() {
    return this._zod.def;
  }
}), r0 = /* @__PURE__ */ P(
  "_ZodString",
  (t, i) => {
    _p.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => Vj(t, a, o);
  },
  /* @__PURE__ */ _1({
    format: (t) => vi(t).format ?? null,
    minLength: (t) => vi(t).minimum ?? null,
    maxLength: (t) => vi(t).maximum ?? null
  }, {
    regex(...t) {
      return this.check(/* @__PURE__ */ Sj(...t));
    },
    includes(...t) {
      return this.check(/* @__PURE__ */ jj(...t));
    },
    startsWith(...t) {
      return this.check(/* @__PURE__ */ Ej(...t));
    },
    endsWith(...t) {
      return this.check(/* @__PURE__ */ Cj(...t));
    },
    min(...t) {
      return this.check(/* @__PURE__ */ yu(...t));
    },
    max(...t) {
      return this.check(/* @__PURE__ */ Y1(...t));
    },
    length(...t) {
      return this.check(/* @__PURE__ */ G1(...t));
    },
    nonempty(...t) {
      return this.check(/* @__PURE__ */ yu(1, ...t));
    },
    lowercase(t) {
      return this.check(/* @__PURE__ */ zj(t));
    },
    uppercase(t) {
      return this.check(/* @__PURE__ */ _j(t));
    },
    trim() {
      return this.check(/* @__PURE__ */ Nj());
    },
    normalize(...t) {
      return this.check(/* @__PURE__ */ Tj(...t));
    },
    toLowerCase() {
      return this.check(/* @__PURE__ */ Aj());
    },
    toUpperCase() {
      return this.check(/* @__PURE__ */ Oj());
    },
    slugify() {
      return this.check(/* @__PURE__ */ Dj());
    }
  })
), S3 = /* @__PURE__ */ P("ZodString", (t, i) => {
  _p.init(t, i), r0.init(t, i);
}, {
  email(t) {
    return this.check(/* @__PURE__ */ G4(C3, t));
  },
  url(t) {
    return this.check(/* @__PURE__ */ J4(N3, t));
  },
  jwt(t) {
    return this.check(/* @__PURE__ */ pj(Y3, t));
  },
  emoji(t) {
    return this.check(/* @__PURE__ */ W4(A3, t));
  },
  guid(t) {
    return this.check(/* @__PURE__ */ F4(T3, t));
  },
  uuid(t) {
    return this.check(/* @__PURE__ */ X4(nu, t));
  },
  uuidv4(t) {
    return this.check(/* @__PURE__ */ Q4(nu, t));
  },
  uuidv6(t) {
    return this.check(/* @__PURE__ */ P4(nu, t));
  },
  uuidv7(t) {
    return this.check(/* @__PURE__ */ K4(nu, t));
  },
  nanoid(t) {
    return this.check(/* @__PURE__ */ ej(O3, t));
  },
  cuid(t) {
    return this.check(/* @__PURE__ */ tj(D3, t));
  },
  cuid2(t) {
    return this.check(/* @__PURE__ */ nj(M3, t));
  },
  ulid(t) {
    return this.check(/* @__PURE__ */ ij(R3, t));
  },
  base64(t) {
    return this.check(/* @__PURE__ */ cj(q3, t));
  },
  base64url(t) {
    return this.check(/* @__PURE__ */ fj($3, t));
  },
  xid(t) {
    return this.check(/* @__PURE__ */ rj(U3, t));
  },
  ksuid(t) {
    return this.check(/* @__PURE__ */ aj(L3, t));
  },
  ipv4(t) {
    return this.check(/* @__PURE__ */ lj(B3, t));
  },
  ipv6(t) {
    return this.check(/* @__PURE__ */ oj(I3, t));
  },
  cidrv4(t) {
    return this.check(/* @__PURE__ */ sj(H3, t));
  },
  cidrv6(t) {
    return this.check(/* @__PURE__ */ uj(Z3, t));
  },
  e164(t) {
    return this.check(/* @__PURE__ */ dj(V3, t));
  },
  datetime(t) {
    return this.check(/* @__PURE__ */ hj(z3, t));
  },
  date(t) {
    return this.check(/* @__PURE__ */ mj(_3, t));
  },
  time(t) {
    return this.check(/* @__PURE__ */ gj(j3, t));
  },
  duration(t) {
    return this.check(/* @__PURE__ */ bj(E3, t));
  }
});
function ue(t) {
  return /* @__PURE__ */ Y4(S3, t);
}
const bt = /* @__PURE__ */ P("ZodStringFormat", (t, i) => {
  ht.init(t, i), r0.init(t, i);
}), z3 = /* @__PURE__ */ P("ZodISODateTime", (t, i) => {
  P_.init(t, i), bt.init(t, i);
}), _3 = /* @__PURE__ */ P("ZodISODate", (t, i) => {
  K_.init(t, i), bt.init(t, i);
}), j3 = /* @__PURE__ */ P("ZodISOTime", (t, i) => {
  J_.init(t, i), bt.init(t, i);
}), E3 = /* @__PURE__ */ P("ZodISODuration", (t, i) => {
  W_.init(t, i), bt.init(t, i);
}), C3 = /* @__PURE__ */ P("ZodEmail", (t, i) => {
  U_.init(t, i), bt.init(t, i);
}), T3 = /* @__PURE__ */ P("ZodGUID", (t, i) => {
  M_.init(t, i), bt.init(t, i);
}), nu = /* @__PURE__ */ P("ZodUUID", (t, i) => {
  R_.init(t, i), bt.init(t, i);
}), N3 = /* @__PURE__ */ P("ZodURL", (t, i) => {
  q_.init(t, i), bt.init(t, i);
}), A3 = /* @__PURE__ */ P("ZodEmoji", (t, i) => {
  $_.init(t, i), bt.init(t, i);
}), O3 = /* @__PURE__ */ P("ZodNanoID", (t, i) => {
  V_.init(t, i), bt.init(t, i);
}), D3 = /* @__PURE__ */ P("ZodCUID", (t, i) => {
  Y_.init(t, i), bt.init(t, i);
}), M3 = /* @__PURE__ */ P("ZodCUID2", (t, i) => {
  G_.init(t, i), bt.init(t, i);
}), R3 = /* @__PURE__ */ P("ZodULID", (t, i) => {
  F_.init(t, i), bt.init(t, i);
}), U3 = /* @__PURE__ */ P("ZodXID", (t, i) => {
  X_.init(t, i), bt.init(t, i);
}), L3 = /* @__PURE__ */ P("ZodKSUID", (t, i) => {
  Q_.init(t, i), bt.init(t, i);
}), B3 = /* @__PURE__ */ P("ZodIPv4", (t, i) => {
  e4.init(t, i), bt.init(t, i);
}), I3 = /* @__PURE__ */ P("ZodIPv6", (t, i) => {
  n4.init(t, i), bt.init(t, i);
}), H3 = /* @__PURE__ */ P("ZodCIDRv4", (t, i) => {
  i4.init(t, i), bt.init(t, i);
}), Z3 = /* @__PURE__ */ P("ZodCIDRv6", (t, i) => {
  a4.init(t, i), bt.init(t, i);
}), q3 = /* @__PURE__ */ P("ZodBase64", (t, i) => {
  l4.init(t, i), bt.init(t, i);
}), $3 = /* @__PURE__ */ P("ZodBase64URL", (t, i) => {
  s4.init(t, i), bt.init(t, i);
}), V3 = /* @__PURE__ */ P("ZodE164", (t, i) => {
  u4.init(t, i), bt.init(t, i);
}), Y3 = /* @__PURE__ */ P("ZodJWT", (t, i) => {
  f4.init(t, i), bt.init(t, i);
}), a0 = /* @__PURE__ */ P(
  "ZodNumber",
  (t, i) => {
    B1.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => Yj(t, a, o, s), t.isFinite = !0;
  },
  /* @__PURE__ */ _1({
    minValue: (t) => {
      const { minimum: i, exclusiveMinimum: a } = vi(t);
      return Math.max(i ?? Number.NEGATIVE_INFINITY, a ?? Number.NEGATIVE_INFINITY);
    },
    maxValue: (t) => {
      const { maximum: i, exclusiveMaximum: a } = vi(t);
      return Math.min(i ?? Number.POSITIVE_INFINITY, a ?? Number.POSITIVE_INFINITY);
    },
    isInt: (t) => {
      const { isInt: i, multipleOf: a } = vi(t);
      return !!i || !!a?.some(Number.isSafeInteger);
    },
    format: (t) => vi(t).format ?? null
  }, {
    gt(t, i) {
      return this.check(/* @__PURE__ */ Qx(t, i));
    },
    gte(t, i) {
      return this.check(/* @__PURE__ */ wd(t, i));
    },
    min(t, i) {
      return this.check(/* @__PURE__ */ wd(t, i));
    },
    lt(t, i) {
      return this.check(/* @__PURE__ */ Xx(t, i));
    },
    lte(t, i) {
      return this.check(/* @__PURE__ */ vd(t, i));
    },
    max(t, i) {
      return this.check(/* @__PURE__ */ vd(t, i));
    },
    int(t) {
      return this.check(ay(t));
    },
    safe(t) {
      return this.check(ay(t));
    },
    positive(t) {
      return this.check(/* @__PURE__ */ Qx(0, t));
    },
    nonnegative(t) {
      return this.check(/* @__PURE__ */ wd(0, t));
    },
    negative(t) {
      return this.check(/* @__PURE__ */ Xx(0, t));
    },
    nonpositive(t) {
      return this.check(/* @__PURE__ */ vd(0, t));
    },
    multipleOf(t, i) {
      return this.check(/* @__PURE__ */ Px(t, i));
    },
    step(t, i) {
      return this.check(/* @__PURE__ */ Px(t, i));
    },
    finite() {
      return this;
    }
  })
);
function Qn(t) {
  return /* @__PURE__ */ xj(a0, t);
}
const G3 = /* @__PURE__ */ P("ZodNumberFormat", (t, i) => {
  d4.init(t, i), a0.init(t, i);
});
function ay(t) {
  return /* @__PURE__ */ yj(G3, t);
}
const F3 = /* @__PURE__ */ P("ZodBoolean", (t, i) => {
  p4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => Gj(t, a, o);
});
function wr(t) {
  return /* @__PURE__ */ vj(F3, t);
}
const X3 = /* @__PURE__ */ P("ZodUnknown", (t, i) => {
  h4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => Xj();
});
function ly() {
  return /* @__PURE__ */ wj(X3);
}
const Q3 = /* @__PURE__ */ P("ZodNever", (t, i) => {
  m4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => Fj(t, a, o);
});
function P3(t) {
  return /* @__PURE__ */ kj(Q3, t);
}
const K3 = /* @__PURE__ */ P("ZodArray", (t, i) => {
  Cp(), x4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => Jj(t, a, o, s), t.element = i.element;
}, {
  min(t, i) {
    return this.check(/* @__PURE__ */ yu(t, i));
  },
  nonempty(t) {
    return this.check(/* @__PURE__ */ yu(1, t));
  },
  max(t, i) {
    return this.check(/* @__PURE__ */ Y1(t, i));
  },
  length(t, i) {
    return this.check(/* @__PURE__ */ G1(t, i));
  },
  unwrap() {
    return this.element;
  }
});
function Kn(t, i) {
  return /* @__PURE__ */ Mj(K3, t, i);
}
const J3 = /* @__PURE__ */ P("ZodObject", (t, i) => {
  Cp(), w4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => Wj(t, a, o, s), yz(t, "shape", (a) => a._zod.def.shape, !1);
}, {
  keyof() {
    return So(Object.keys(this._zod.def.shape));
  },
  catchall(t) {
    return this.clone(Dn(this._zod.def, { catchall: t }));
  },
  passthrough() {
    return this.clone(Dn(this._zod.def, { catchall: ly() }));
  },
  loose() {
    return this.clone(Dn(this._zod.def, { catchall: ly() }));
  },
  strict() {
    return this.clone(Dn(this._zod.def, { catchall: P3() }));
  },
  strip() {
    return this.clone(Dn(this._zod.def, { catchall: void 0 }));
  },
  extend(t) {
    return sz(this, t);
  },
  safeExtend(t) {
    return uz(this, t);
  },
  merge(t) {
    return cz(this, t);
  },
  pick(t) {
    return lz(this, t);
  },
  omit(t) {
    return oz(this, t);
  },
  partial(...t) {
    return Nx(l0, this, t[0]);
  },
  exactPartial(...t) {
    return Nx(o0, this, t[0], "exactPartial");
  },
  required(...t) {
    return fz(s0, this, t[0]);
  }
});
function At(t, i) {
  const a = {
    type: "object",
    shape: t ?? {},
    ...Se(i)
  };
  return new J3(a);
}
const W3 = /* @__PURE__ */ P("ZodUnion", (t, i) => {
  k4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => e3(t, a, o, s), t.options = i.options;
});
function eE(t, i) {
  return new W3({
    type: "union",
    options: t,
    ...Se(i)
  });
}
const tE = /* @__PURE__ */ P("ZodIntersection", (t, i) => {
  S4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => t3(t, a, o, s);
});
function nE(t, i) {
  return new tE({
    type: "intersection",
    left: t,
    right: i
  });
}
const Kd = /* @__PURE__ */ P("ZodEnum", (t, i) => {
  z4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (o, s, c) => Qj(t, o, s), t.enum = i.entries, t.options = [...t._zod.values];
  const a = new Set(Object.keys(i.entries));
  t.extract = (o, s) => {
    const c = {};
    for (const f of o)
      if (a.has(f))
        c[f] = i.entries[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Kd({
      ...i,
      checks: [],
      ...Se(s),
      entries: c
    });
  }, t.exclude = (o, s) => {
    const c = { ...i.entries };
    for (const f of o)
      if (a.has(f))
        delete c[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Kd({
      ...i,
      checks: [],
      ...Se(s),
      entries: c
    });
  };
});
function So(t, i) {
  const a = Array.isArray(t) ? Object.fromEntries(t.map((o) => [o, o])) : t;
  return new Kd({
    type: "enum",
    entries: a,
    ...Se(i)
  });
}
const iE = /* @__PURE__ */ P("ZodTransform", (t, i) => {
  Cp(), _4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => Kj(t, a, o, s), t._zod.parse = (a, o) => {
    if (o.direction === "backward")
      throw new j1(t.constructor.name);
    a.addIssue = (c) => {
      if (typeof c == "string")
        a.issues.push(ko(c, a.value, i));
      else {
        const f = c;
        f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), "input" in f || (f.input = a.value), f.inst ?? (f.inst = t), a.issues.push(ko(f));
      }
    };
    const s = i.transform(a.value, a);
    return s instanceof Promise ? s.then((c) => (a.value = c, a)) : (a.value = s, a);
  };
});
function rE(t) {
  return new iE({
    type: "transform",
    transform: t
  });
}
const l0 = /* @__PURE__ */ P("ZodOptional", (t, i) => {
  Z1.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => i0(t, a, o, s), t.unwrap = () => t._zod.def.innerType;
});
function oy(t) {
  return new l0({
    type: "optional",
    innerType: t
  });
}
const o0 = /* @__PURE__ */ P("ZodExactOptional", (t, i) => {
  j4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => i0(t, a, o, s), t.unwrap = () => t._zod.def.innerType;
});
function aE(t) {
  return new o0({
    type: "optional",
    innerType: t
  });
}
const lE = /* @__PURE__ */ P("ZodNullable", (t, i) => {
  E4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => n3(t, a, o, s), t.unwrap = () => t._zod.def.innerType;
});
function sy(t) {
  return new lE({
    type: "nullable",
    innerType: t
  });
}
const oE = /* @__PURE__ */ P("ZodDefault", (t, i) => {
  C4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => r3(t, a, o, s), t.unwrap = () => t._zod.def.innerType, t.removeDefault = t.unwrap;
});
function sE(t, i) {
  return new oE({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof i == "function" ? i() : y1(i);
    }
  });
}
const uE = /* @__PURE__ */ P("ZodPrefault", (t, i) => {
  T4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => a3(t, a, o, s), t.unwrap = () => t._zod.def.innerType;
});
function cE(t, i) {
  return new uE({
    type: "prefault",
    innerType: t,
    get defaultValue() {
      return typeof i == "function" ? i() : y1(i);
    }
  });
}
const s0 = /* @__PURE__ */ P("ZodNonOptional", (t, i) => {
  N4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => i3(t, a, o, s), t.unwrap = () => t._zod.def.innerType;
});
function fE(t, i) {
  return new s0({
    type: "nonoptional",
    innerType: t,
    ...Se(i)
  });
}
const dE = /* @__PURE__ */ P("ZodCatch", (t, i) => {
  A4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => l3(t, a, o, s), t.unwrap = () => t._zod.def.innerType, t.removeCatch = t.unwrap;
});
function pE(t, i) {
  return new dE({
    type: "catch",
    innerType: t,
    catchValue: typeof i == "function" ? i : wz(i)
  });
}
const hE = /* @__PURE__ */ P("ZodPipe", (t, i) => {
  O4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => o3(t, a, o, s), t.in = i.in, t.out = i.out;
});
function uy(t, i) {
  return new hE({
    type: "pipe",
    in: t,
    out: i
    // ...util.normalizeParams(params),
  });
}
const mE = /* @__PURE__ */ P("ZodReadonly", (t, i) => {
  D4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => s3(t, a, o, s), t.unwrap = () => t._zod.def.innerType;
});
function gE(t) {
  return new mE({
    type: "readonly",
    innerType: t
  });
}
const bE = /* @__PURE__ */ P("ZodCustom", (t, i) => {
  M4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => Pj(t, a, o, s);
});
function xE(t, i = {}) {
  return /* @__PURE__ */ Rj(bE, t, i);
}
function yE(t, i) {
  return /* @__PURE__ */ Uj(t, i);
}
At({
  itemId: ue(),
  kind: ue(),
  revision: Qn(),
  status: ue(),
  turnId: ue().nullish(),
  text: ue().optional(),
  displayText: ue().optional(),
  imageRefs: Kn(At({ id: ue(), name: ue(), mimeType: ue() })).optional(),
  summary: Kn(ue()).optional(),
  tool: ue().optional(),
  args: ue().optional(),
  visibleOutput: ue().optional(),
  commandText: ue().optional(),
  fallbackText: ue().optional(),
  statusLine: ue().optional(),
  failureReason: ue().optional(),
  objective: ue().optional(),
  agentPath: ue().optional(),
  role: ue().optional(),
  childSessionId: ue().optional(),
  subagentId: ue().optional(),
  reminderAgentId: ue().optional(),
  blocking: wr().optional(),
  durationMs: Qn().optional(),
  recordedAt: ue().optional(),
  truncated: wr().optional(),
  retracted: wr().optional(),
  label: ue().optional(),
  finalSummary: ue().optional(),
  outputRef: At({ id: ue(), byteLen: Qn().optional() }).passthrough().optional(),
  patchSummary: At({ added: Qn(), removed: Qn(), files: Qn() }).optional(),
  result: At({ text: ue().optional(), summary: ue().optional() }).passthrough().optional()
});
At({
  sessionId: ue(),
  workspaceRoot: ue().nullable(),
  createdAt: ue(),
  updatedAt: ue(),
  lastActivityAt: ue().optional(),
  status: ue(),
  activeTurnId: ue().nullable(),
  modelId: ue().nullable(),
  name: ue().optional(),
  title: ue().optional(),
  firstUserPrompt: ue().optional(),
  branch: ue().optional(),
  turnCount: Qn(),
  kind: ue().optional(),
  approvalMode: At({ mode: ue() }).passthrough().optional()
});
At({
  approvalId: ue(),
  sessionId: ue(),
  toolName: ue(),
  rawArgs: ue(),
  currentRequirementId: At({ approvalId: ue(), sourceIndex: Qn() }),
  subject: At({
    kind: ue(),
    command: ue().optional(),
    path: ue().optional(),
    host: ue().optional(),
    target: ue().optional()
  }),
  availableChoices: Kn(
    At({
      choiceId: ue(),
      label: ue(),
      decision: ue(),
      scope: ue(),
      rulePreview: ue().optional(),
      acceptsFeedback: wr().optional()
    })
  )
});
At({
  userInputId: ue(),
  sessionId: ue(),
  questions: Kn(
    At({
      id: ue(),
      header: ue(),
      question: ue(),
      options: Kn(At({ label: ue(), description: ue().optional() })),
      selection: At({
        mode: So(["single", "multiple"]),
        minSelections: Qn().optional(),
        maxSelections: Qn().optional()
      })
    })
  )
});
At({
  modelId: ue(),
  displayLabel: ue(),
  providerId: ue(),
  isDefault: wr(),
  isActive: wr(),
  contextLimit: Qn().nullable(),
  defaultReasoningEffort: ue().optional(),
  reasoningEffortVariants: Kn(At({ tier: ue(), description: ue().optional() })).optional()
});
const u0 = So([
  "none",
  "minimal",
  "low",
  "medium",
  "high",
  "xhigh",
  "max",
  "ultra"
]), Xn = {
  theme: So(["muse", "daylight", "moonlight", "grove", "plush", "system"]),
  backgroundIntensity: Qn().min(0).max(100),
  cliPath: ue().max(4096),
  recentProjects: Kn(ue()),
  trustedProjects: Kn(ue()),
  archivedSessionIds: Kn(ue()),
  pinnedSessionIds: Kn(ue()),
  reasoningEffort: u0,
  fontSize: So(["compact", "comfortable", "large"]),
  reduceMotion: wr(),
  notifyOnCompletion: wr()
}, vE = At({
  theme: Xn.theme.default("muse"),
  backgroundIntensity: Xn.backgroundIntensity.default(70),
  cliPath: Xn.cliPath.default(""),
  recentProjects: Xn.recentProjects.default([]),
  trustedProjects: Xn.trustedProjects.default([]),
  archivedSessionIds: Xn.archivedSessionIds.default([]),
  pinnedSessionIds: Xn.pinnedSessionIds.default([]),
  reasoningEffort: Xn.reasoningEffort.default("high"),
  fontSize: Xn.fontSize.default("comfortable"),
  reduceMotion: Xn.reduceMotion.default(!1),
  notifyOnCompletion: Xn.notifyOnCompletion.default(!1)
});
At(Xn).omit({ trustedProjects: !0, recentProjects: !0 }).partial().strict();
At({
  questionId: ue(),
  selectedLabel: ue().optional(),
  selectedLabels: Kn(ue()).optional(),
  freeText: ue().max(500).optional()
});
function bn({
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
function Tp({
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
          /* @__PURE__ */ h.jsx(bn, { label: "Close dialog", onClick: a, children: /* @__PURE__ */ h.jsx(ia, { size: 18 }) })
        ] }),
        i
      ]
    }
  );
}
function go({ size: t = 26 }) {
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
function $i(t) {
  return t.split(/[\\/]/).filter(Boolean).at(-1) || t;
}
function c0(t) {
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
function kd(t) {
  return c0(t).replace(/\s+/g, " ").trim();
}
function wE(t) {
  return c0(t);
}
function Wr(t) {
  const i = kd(t.name) || kd(t.title) || kd(t.firstUserPrompt);
  return i ? i.length > 76 ? `${i.slice(0, 76).trimEnd()}…` : i : "Untitled conversation";
}
function f0(t) {
  const i = new Date(t);
  if (Number.isNaN(i.getTime())) return "";
  const a = (Date.now() - i.getTime()) / 6e4;
  return a < 1 ? "Now" : a < 60 ? `${Math.floor(a)}m` : a < 1440 ? `${Math.floor(a / 60)}h` : i.toLocaleDateString(void 0, { month: "short", day: "numeric" });
}
const kE = [
  "none",
  "minimal",
  "low",
  "medium",
  "high",
  "xhigh",
  "max",
  "ultra"
];
function SE({
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
  preferences: x,
  onModel: b,
  onEffort: w,
  onSubmit: v,
  onCancel: S,
  onError: j
}) {
  const E = G.useRef(null), [O, B] = G.useState(!1), U = G.useRef([]), [V, K] = G.useState(0), [N, X] = G.useState(0), [pe, je] = G.useState([]), [Z, ne] = G.useState(!1), le = /^\/[a-z-]*$/i.test(t) ? qd.filter(($) => $.name.startsWith(t.slice(1).toLowerCase())) : [], Te = p ? /(?:^|\s)@([^\s@]*)$/.exec(t) : null, oe = Te ? Te[1] : null, te = oe && oe.includes("/") ? oe.slice(0, oe.lastIndexOf("/")) : "", W = oe !== null ? (oe.includes("/") ? oe.slice(oe.lastIndexOf("/") + 1) : oe).toLowerCase() : "";
  G.useEffect(() => {
    if (!p || oe === null) {
      je([]);
      return;
    }
    let $ = !1;
    return window.muse.listFiles(p, te).then((he) => {
      $ || je(he);
    }).catch(() => {
      $ || je([]);
    }), () => {
      $ = !0;
    };
  }, [p, te, oe !== null]);
  const ce = oe !== null ? pe.filter(($) => $.name.toLowerCase().includes(W)).slice(0, 12) : [], be = !!h1(t), Ne = ($) => {
    i(`/${$} `), re.current?.focus();
  }, z = ($) => {
    if (oe === null) return;
    const he = t.slice(0, t.length - oe.length - 1);
    i(`${he}@${$.path}${$.directory ? "/" : " "}`), re.current?.focus();
  };
  G.useEffect(() => {
    K(0), X(0);
  }, [t]);
  const Ve = G.useRef(t);
  Ve.current = t;
  const [it, T] = G.useState([]);
  U.current = it;
  const [C, J] = G.useState("queue"), re = G.useRef(null);
  G.useEffect(() => {
    re.current && (re.current.style.height = "auto", re.current.style.height = `${Math.min(re.current.scrollHeight, 200)}px`);
  }, [t]);
  const ge = async () => {
    O || s || !c && !be || !t.trim() && !it.length || await v(it, C) && T([]);
  }, Ce = async () => {
    try {
      E.current?.click();
    } catch ($) {
      j($ instanceof Error ? $.message : String($));
    }
  };
  return /* @__PURE__ */ h.jsxs("div", { className: "composer-wrap", children: [
    le.length > 0 && /* @__PURE__ */ h.jsx(
      "div",
      {
        className: "slash-menu",
        role: "listbox",
        id: "composer-commands",
        "aria-label": "Composer commands",
        children: le.map(($, he) => /* @__PURE__ */ h.jsxs(
          "button",
          {
            type: "button",
            role: "option",
            id: `command-${$.name}`,
            "aria-selected": he === V,
            onMouseDown: (ae) => ae.preventDefault(),
            onClick: () => Ne($.name),
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
    ce.length > 0 && /* @__PURE__ */ h.jsx(
      "div",
      {
        className: "slash-menu mention-menu",
        role: "listbox",
        id: "composer-mentions",
        "aria-label": "Project files",
        children: ce.map(($, he) => /* @__PURE__ */ h.jsxs(
          "button",
          {
            type: "button",
            role: "option",
            id: `mention-${$.path}`,
            "aria-selected": he === N,
            onMouseDown: (ae) => ae.preventDefault(),
            onClick: () => z($),
            children: [
              $.directory ? /* @__PURE__ */ h.jsx(Dv, { size: 14 }) : /* @__PURE__ */ h.jsx(nl, { size: 14 }),
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
          $.preventDefault(), Z || ne(!0);
        },
        onDragLeave: ($) => {
          $.currentTarget.contains($.relatedTarget) || ne(!1);
        },
        onDrop: ($) => {
          $.preventDefault(), ne(!1);
          const he = Array.from($.dataTransfer.files);
          he.length && (async () => {
            const ae = [];
            for (const fe of he.slice(0, 5)) {
              if (fe.size <= 120 * 1024 && !/\.(png|jpe?g|webp|gif|pdf|zip)$/i.test(fe.name))
                try {
                  const ft = await fe.text();
                  if (!ft.includes("\0")) {
                    ae.push(`\`\`\`${fe.name}
${ft.trim()}
\`\`\``);
                    continue;
                  }
                } catch {
                }
              ae.push(`@${fe.name}`);
            }
            if (ae.length) {
              const fe = Ve.current;
              i(
                `${fe}${fe && !/\s$/.test(fe) ? `
` : ""}${ae.join(`
`)}
`
              ), re.current?.focus();
            }
          })();
        },
        onSubmit: ($) => {
          $.preventDefault(), ge();
        },
        children: [
          it.length > 0 && /* @__PURE__ */ h.jsx("div", { className: "attachment-list", children: it.map(($) => /* @__PURE__ */ h.jsxs("span", { className: "attachment", children: [
            $.preview ? /* @__PURE__ */ h.jsx("img", { src: $.preview, alt: $.name, style: { width: 48, height: 48, objectFit: "cover", borderRadius: 6 } }) : $.kind === "image" ? /* @__PURE__ */ h.jsx(LS, { size: 14 }) : /* @__PURE__ */ h.jsx(Ev, { size: 14 }),
            /* @__PURE__ */ h.jsx("span", { children: $.name }),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                type: "button",
                "aria-label": `Remove ${$.name}`,
                onClick: () => {
                  window.muse.removeAttachment($.id).catch((he) => j(he.message)), T((he) => he.filter((ae) => ae.id !== $.id));
                },
                children: /* @__PURE__ */ h.jsx(ia, { size: 12 })
              }
            )
          ] }, $.id)) }),
          /* @__PURE__ */ h.jsx(
            "textarea",
            {
              ref: re,
              "aria-label": "Message UniPi",
              "aria-controls": le.length ? "composer-commands" : void 0,
              "aria-activedescendant": le[V] ? `command-${le[V].name}` : void 0,
              placeholder: f ? "Ask UniPi about your project…" : "Ask UniPi anything…",
              value: t,
              onChange: ($) => i($.target.value),
              rows: 2,
              spellCheck: !0,
              onKeyDown: ($) => {
                if (le.length && !$.nativeEvent.isComposing) {
                  if ($.key === "ArrowDown" || $.key === "ArrowUp") {
                    $.preventDefault();
                    const he = (V + ($.key === "ArrowDown" ? 1 : -1) + le.length) % le.length;
                    K(he), document.getElementById(`command-${le[he].name}`)?.scrollIntoView({ block: "nearest" });
                    return;
                  }
                  if ($.key === "Tab" || $.key === "Enter" && !$.shiftKey && !qd.some((he) => `/${he.name}` === t.toLowerCase())) {
                    $.preventDefault(), Ne(le[V].name);
                    return;
                  }
                  if ($.key === "Escape") {
                    $.preventDefault(), i(`${t} `);
                    return;
                  }
                }
                if (ce.length && !$.nativeEvent.isComposing) {
                  if ($.key === "ArrowDown" || $.key === "ArrowUp") {
                    $.preventDefault();
                    const he = (N + ($.key === "ArrowDown" ? 1 : -1) + ce.length) % ce.length;
                    X(he), document.getElementById(`mention-${ce[he].path}`)?.scrollIntoView({ block: "nearest" });
                    return;
                  }
                  if ($.key === "Tab" || $.key === "Enter" && !$.shiftKey) {
                    $.preventDefault(), z(ce[N]);
                    return;
                  }
                  if ($.key === "Escape") {
                    $.preventDefault(), je([]);
                    return;
                  }
                }
                $.key === "Enter" && !$.shiftKey && !$.nativeEvent.isComposing && ($.preventDefault(), ge());
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
              accept: "image/png,image/jpeg,image/webp,image/gif,.txt,.md,.csv,.json,.js,.jsx,.ts,.tsx,.py,.css,.html,.xml,.yaml,.yml,.toml,.log,.sh,.ps1,.sql,.rs,.go,.java,.c,.h,.cpp",
              onChange: async ($) => {
                const he = Array.from($.currentTarget.files || []);
                $.currentTarget.value = "";
                try {
                  if (B(!0), he.length > 5) throw new Error("每次最多选择 5 个文件。");
                  if (U.current.length + he.filter((fe) => fe.type.startsWith("image/")).length > 5) throw new Error("每条消息最多 5 张图片。");
                  if (he.filter((fe) => !fe.type.startsWith("image/")).reduce((fe, ft) => fe + ft.size, 0) > 120 * 1024) throw new Error("文本文件总大小不能超过 120 KB。");
                  const ae = [];
                  for (const fe of he) {
                    if (/^image\/(png|jpeg|webp|gif)$/.test(fe.type)) {
                      if (fe.size > 10 * 1024 * 1024) throw new Error("单张图片最多 10 MB。");
                      const vn = await new Promise((Ie, Ge) => {
                        const Ot = new FileReader();
                        Ot.onload = () => Ie(String(Ot.result)), Ot.onerror = () => Ge(new Error("图片读取失败。")), Ot.readAsDataURL(fe);
                      }), Jt = vn.slice(vn.indexOf(",") + 1), at = await window.muse.uploadImage({ action: "begin", name: fe.name, mimeType: fe.type, size: fe.size });
                      try {
                        for (let Ie = 0; Ie < Jt.length; Ie += 48e3) await window.muse.uploadImage({ action: "chunk", id: at.id, offset: Ie, chunk: Jt.slice(Ie, Ie + 48e3) });
                        await window.muse.uploadImage({ action: "finish", id: at.id }), T((Ie) => [...Ie, { id: at.id, name: fe.name, size: fe.size, kind: "image", preview: vn }]);
                      } catch (Ie) {
                        throw await window.muse.removeAttachment(at.id).catch(() => {
                        }), Ie;
                      }
                      continue;
                    }
                    if (!/\.(txt|md|csv|json|js|jsx|ts|tsx|py|css|html|xml|yaml|yml|toml|log|sh|ps1|sql|rs|go|java|c|h|cpp)$/i.test(fe.name)) throw new Error("目前仅支持文本和代码文件，暂不支持图片或 PDF。");
                    const ft = await fe.text();
                    if (ft.includes("\0")) throw new Error("不能添加二进制文件。");
                    ae.push("文件：" + fe.name + `
` + ft);
                  }
                  ae.length && i([Ve.current, ...ae].filter(Boolean).join(`

`)), re.current?.focus();
                } catch (ae) {
                  j(ae instanceof Error ? ae.message : String(ae));
                } finally {
                  B(!1);
                }
              }
            }
          ),
          /* @__PURE__ */ h.jsxs("div", { className: "composer-toolbar", children: [
            /* @__PURE__ */ h.jsxs("div", { className: "composer-tools", children: [
              /* @__PURE__ */ h.jsx(
                bn,
                {
                  label: O ? "正在上传图片…" : "添加图片、文本或代码文件",
                  disabled: s || O,
                  onClick: () => {
                    Ce();
                  },
                  children: /* @__PURE__ */ h.jsx(qS, { size: 17 })
                }
              ),
              /* @__PURE__ */ h.jsx("span", { className: "toolbar-divider" }),
              /* @__PURE__ */ h.jsx(
                su,
                {
                  label: "Model",
                  className: "model-select",
                  value: g,
                  disabled: s || m.length === 0,
                  onChange: b,
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
                su,
                {
                  label: "Reasoning effort",
                  className: "effort-select",
                  value: x.reasoningEffort,
                  onChange: ($) => w($),
                  icon: /* @__PURE__ */ h.jsx(ES, { size: 15, className: "effort-icon" }),
                  options: kE.map(($) => ({
                    value: $,
                    label: $ === "xhigh" ? "Extra high" : $[0].toUpperCase() + $.slice(1)
                  }))
                }
              )
            ] }),
            /* @__PURE__ */ h.jsxs("div", { className: "composer-actions", children: [
              a && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
                /* @__PURE__ */ h.jsx(
                  su,
                  {
                    label: "Follow-up behavior",
                    value: C,
                    onChange: ($) => J($),
                    options: [
                      { value: "queue", label: "Queue next" },
                      { value: "steer", label: "Steer now" }
                    ]
                  }
                ),
                /* @__PURE__ */ h.jsx(bn, { label: "Stop Muse", onClick: S, children: /* @__PURE__ */ h.jsx(GS, { size: 14, fill: "currentColor" }) })
              ] }),
              /* @__PURE__ */ h.jsx(
                "button",
                {
                  className: "send-button",
                  type: "submit",
                  "aria-label": a ? "Send follow-up" : "Send message",
                  disabled: O || s || !c && !be || !t.trim() && !it.length,
                  children: s ? /* @__PURE__ */ h.jsx("span", { className: "spinner" }) : /* @__PURE__ */ h.jsx(jS, { size: 19, strokeWidth: 2.2 })
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
function zE({
  platform: t = "darwin",
  sessions: i,
  onSession: a,
  onNew: o,
  onOpen: s,
  onSettings: c,
  onTheme: f,
  onClose: p
}) {
  const [m, g] = G.useState(""), [x, b] = G.useState(0), w = t === "darwin" ? "⌘" : "Ctrl", v = [
    {
      id: "new",
      group: "Actions",
      title: "New conversation",
      subtitle: "Start a conversation",
      icon: vo,
      shortcut: `${w} N`,
      action: o
    },
    {
      id: "open",
      group: "Actions",
      title: "Open project",
      subtitle: t === "darwin" ? "Choose a folder on your Mac" : "Choose a project folder",
      icon: Sr,
      shortcut: `${w} O`,
      action: s
    },
    {
      id: "settings",
      group: "Actions",
      title: "Open settings",
      subtitle: "Appearance and Muse Code connection",
      icon: i1,
      shortcut: `${w} ,`,
      action: c
    },
    ...i.map((j) => ({
      id: j.sessionId,
      group: "Recent conversations",
      title: Wr(j),
      subtitle: j.workspaceRoot ? $i(j.workspaceRoot) : "Conversation",
      icon: ou,
      shortcut: "",
      action: () => a(j.sessionId)
    })),
    {
      id: "muse",
      group: "Themes",
      title: "Switch to Muse",
      subtitle: "Electric blue",
      icon: mp,
      shortcut: "",
      action: () => f("muse")
    },
    {
      id: "daylight",
      group: "Themes",
      title: "Switch to Daylight",
      subtitle: "Warm and light",
      icon: u1,
      shortcut: "",
      action: () => f("daylight")
    },
    {
      id: "moonlight",
      group: "Themes",
      title: "Switch to Moonlight",
      subtitle: "Soft and dark",
      icon: Yv,
      shortcut: "",
      action: () => f("moonlight")
    },
    {
      id: "grove",
      group: "Themes",
      title: "Switch to Grove",
      subtitle: "Natural green",
      icon: Hv,
      shortcut: "",
      action: () => f("grove")
    },
    {
      id: "plush",
      group: "Themes",
      title: "Switch to Plush",
      subtitle: "Blue mascot close-up",
      icon: zv,
      shortcut: "",
      action: () => f("plush")
    }
  ].filter(
    (j) => `${j.title} ${j.subtitle}`.toLowerCase().includes(m.toLowerCase())
  ).slice(0, 30);
  G.useEffect(() => {
    const j = v[x];
    j && document.getElementById(`cmd-item-${j.id}`)?.scrollIntoView({ block: "nearest" });
  }, [x, v]);
  const S = (j) => {
    const E = v[j];
    E && (p(), E.action());
  };
  return /* @__PURE__ */ h.jsxs(Tp, { title: "Search", onClose: p, className: "command-dialog", children: [
    /* @__PURE__ */ h.jsxs("div", { className: "command-search", children: [
      /* @__PURE__ */ h.jsx(pu, { size: 19 }),
      /* @__PURE__ */ h.jsx(
        "input",
        {
          autoFocus: !0,
          value: m,
          "aria-label": "Search commands and conversations",
          placeholder: "Search commands and conversations…",
          onChange: (j) => {
            g(j.target.value), b(0);
          },
          onKeyDown: (j) => {
            j.key === "ArrowDown" && (j.preventDefault(), b((E) => Math.min(E + 1, v.length - 1))), j.key === "ArrowUp" && (j.preventDefault(), b((E) => Math.max(0, E - 1))), j.key === "Enter" && (j.preventDefault(), S(x));
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
            className: E === x ? "selected" : "",
            onClick: () => S(E),
            onMouseEnter: () => b(E),
            children: [
              /* @__PURE__ */ h.jsx(j.icon, { size: 17 }),
              /* @__PURE__ */ h.jsxs("span", { children: [
                /* @__PURE__ */ h.jsx("strong", { children: j.title }),
                /* @__PURE__ */ h.jsx("small", { children: j.subtitle })
              ] }),
              j.shortcut ? /* @__PURE__ */ h.jsx("kbd", { children: j.shortcut }) : /* @__PURE__ */ h.jsx(kr, { size: 14 })
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
function _E(t) {
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
function jE({
  open: t = !0,
  project: i,
  platform: a = "darwin",
  view: o,
  onClose: s,
  onMentionDiff: c,
  onError: f
}) {
  const [p, m] = G.useState("changes"), [g, x] = G.useState(), [b, w] = G.useState(!1), [v, S] = G.useState(""), [j, E] = G.useState(""), [O, B] = G.useState(""), [U, V] = G.useState(0);
  G.useEffect(() => {
    if (!t) return;
    let N = !1;
    if (x(void 0), E(""), B(""), !!i)
      return w(!0), S(""), window.muse.gitStatus(i).then((X) => {
        N || x(X);
      }).catch((X) => {
        N || S(X.message);
      }).finally(() => {
        N || w(!1);
      }), () => {
        N = !0;
      };
  }, [t, i, o?.session.status, U]), G.useEffect(() => {
    if (!t || !j) return;
    let N = !1;
    return B("Loading diff…"), window.muse.gitDiff(i, j).then((X) => {
      N || B(X);
    }).catch((X) => {
      N || (B(X.message), f(X.message));
    }), () => {
      N = !0;
    };
  }, [t, i, j, f]);
  const K = o?.items.filter(
    (N) => !N.retracted && !["userMessage", "agentMessage", "reasoning"].includes(N.kind)
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
          /* @__PURE__ */ h.jsx(bn, { label: "Close inspector", onClick: s, children: /* @__PURE__ */ h.jsx(ia, { size: 16 }) })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "inspector-project", children: [
          /* @__PURE__ */ h.jsx("span", { className: "project-icon", children: /* @__PURE__ */ h.jsx(Sr, { size: 20 }) }),
          /* @__PURE__ */ h.jsxs("div", { children: [
            /* @__PURE__ */ h.jsx("strong", { children: i ? $i(i) : "No project selected" }),
            /* @__PURE__ */ h.jsx("span", { children: g?.branch ? /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
              /* @__PURE__ */ h.jsx(Rv, { size: 11 }),
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
            K.length > 0 && /* @__PURE__ */ h.jsx("span", { children: K.length })
          ] }),
          /* @__PURE__ */ h.jsx(
            bn,
            {
              label: "Refresh changes",
              disabled: b || !i,
              onClick: () => V((N) => N + 1),
              children: /* @__PURE__ */ h.jsx(e1, { size: 13, className: b ? "spin" : "" })
            }
          )
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "inspector-body", children: [
          p === "changes" && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
            v && /* @__PURE__ */ h.jsx("p", { className: "inline-error", children: v }),
            j ? /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
              /* @__PURE__ */ h.jsxs("div", { className: "diff-header", children: [
                /* @__PURE__ */ h.jsxs("button", { className: "diff-back", onClick: () => E(""), children: [
                  /* @__PURE__ */ h.jsx(CS, { size: 13 }),
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
                      /* @__PURE__ */ h.jsx(kr, { size: 11 })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ h.jsx("pre", { className: "diff-view", children: _E(O).map((N, X) => /* @__PURE__ */ h.jsxs(
                "span",
                {
                  className: N.kind === "added" ? "added" : N.kind === "removed" ? "removed" : N.kind === "hunk" ? "hunk" : N.kind === "meta" ? "meta" : "",
                  children: [
                    /* @__PURE__ */ h.jsx("span", { className: "diff-gutter", "aria-hidden": "true", children: N.newNum || N.oldNum || " " }),
                    N.text || " ",
                    /* @__PURE__ */ h.jsx("br", {})
                  ]
                },
                X
              )) })
            ] }) : /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
              g?.changes.map((N) => {
                const X = N.path.replaceAll("\\", "/");
                return /* @__PURE__ */ h.jsxs(
                  "button",
                  {
                    className: "changed-file",
                    onClick: () => E(N.path),
                    children: [
                      /* @__PURE__ */ h.jsx(nl, { size: 15 }),
                      /* @__PURE__ */ h.jsxs("span", { children: [
                        /* @__PURE__ */ h.jsx("strong", { children: X.split("/").at(-1) }),
                        /* @__PURE__ */ h.jsx("small", { children: X.includes("/") ? X.slice(0, X.lastIndexOf("/")) : "Project root" })
                      ] }),
                      /* @__PURE__ */ h.jsx("b", { className: N.status.includes("D") ? "deleted" : "", children: N.status === "??" ? "U" : N.status }),
                      /* @__PURE__ */ h.jsx(wi, { size: 12 })
                    ]
                  },
                  N.path
                );
              }),
              !b && !g?.changes.length && !v && /* @__PURE__ */ h.jsxs("div", { className: "inspector-empty", children: [
                /* @__PURE__ */ h.jsx("span", { className: "empty-glyph", children: /* @__PURE__ */ h.jsx(On, { size: 22, strokeWidth: 1.4 }) }),
                /* @__PURE__ */ h.jsx("h3", { children: i ? g?.isRepository ? "No changes" : "No Git repository" : "Open a project" }),
                /* @__PURE__ */ h.jsx("p", { children: i ? g?.isRepository ? "Your working tree has no changes." : "This folder isn’t a Git repository. Muse can still work with its files." : "Open a project and its changes will appear here." })
              ] }),
              b && !g && /* @__PURE__ */ h.jsxs("div", { className: "inspector-empty", children: [
                /* @__PURE__ */ h.jsx(il, { className: "spin", size: 20 }),
                /* @__PURE__ */ h.jsx("p", { children: "Reading your workspace…" })
              ] })
            ] })
          ] }),
          p === "activity" && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
            K.map((N) => /* @__PURE__ */ h.jsxs("div", { className: "activity-entry", children: [
              /* @__PURE__ */ h.jsx("span", { children: N.status === "inProgress" ? /* @__PURE__ */ h.jsx(il, { size: 14, className: "spin" }) : N.status === "completed" ? /* @__PURE__ */ h.jsx(On, { size: 14 }) : /* @__PURE__ */ h.jsx(ia, { size: 14 }) }),
              /* @__PURE__ */ h.jsxs("div", { children: [
                /* @__PURE__ */ h.jsx("strong", { children: XS(N) }),
                /* @__PURE__ */ h.jsx("p", { children: N.kind === "reminderChild" ? `${N.blocking ? "Keeps the turn open · " : ""}${N.status === "inProgress" ? "Running" : N.status}` : N.statusLine || N.objective || N.fallbackText || N.status })
              ] })
            ] }, N.itemId)),
            !K.length && /* @__PURE__ */ h.jsxs("div", { className: "inspector-empty", children: [
              /* @__PURE__ */ h.jsx("span", { className: "empty-glyph", children: /* @__PURE__ */ h.jsx(hu, { size: 22, strokeWidth: 1.4 }) }),
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
                window.muse.revealProject(i).catch((N) => f(N.message));
              },
              children: [
                /* @__PURE__ */ h.jsx(Sr, { size: 14 }),
                a === "win32" ? "Explorer" : a === "linux" ? "Files" : "Finder"
              ]
            }
          ),
          /* @__PURE__ */ h.jsxs(
            "button",
            {
              disabled: !i,
              onClick: () => {
                window.muse.openTerminal(i).catch((N) => f(N.message));
              },
              children: [
                /* @__PURE__ */ h.jsx(hu, { size: 14 }),
                "Terminal"
              ]
            }
          ),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              disabled: !i,
              onClick: () => {
                window.muse.openCli(i).catch((N) => f(N.message));
              },
              children: "Muse Code"
            }
          )
        ] })
      ]
    }
  );
}
const d0 = [
  { id: "muse", label: "Muse", description: "Electric blue", icon: mp },
  { id: "daylight", label: "Daylight", description: "Warm and light", icon: u1 },
  { id: "moonlight", label: "Moonlight", description: "Soft and dark", icon: Yv },
  { id: "grove", label: "Grove", description: "Natural green", icon: Hv },
  { id: "plush", label: "Plush", description: "A playful close-up", icon: zv }
];
function EE({
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
  const [g, x] = G.useState(m), [b, w] = G.useState(t.cliPath);
  return /* @__PURE__ */ h.jsx(Tp, { title: "Settings", onClose: c, className: "settings-dialog", children: /* @__PURE__ */ h.jsxs("div", { className: "settings-layout", children: [
    /* @__PURE__ */ h.jsxs("nav", { className: "settings-nav", "aria-label": "Settings sections", children: [
      /* @__PURE__ */ h.jsxs(
        "button",
        {
          className: g === "appearance" ? "selected" : "",
          onClick: () => x("appearance"),
          children: [
            /* @__PURE__ */ h.jsx(mp, { size: 16 }),
            "Appearance"
          ]
        }
      ),
      /* @__PURE__ */ h.jsxs(
        "button",
        {
          className: g === "connection" ? "selected" : "",
          onClick: () => x("connection"),
          children: [
            /* @__PURE__ */ h.jsx(hu, { size: 16 }),
            "Muse Code"
          ]
        }
      ),
      /* @__PURE__ */ h.jsxs("button", { className: g === "about" ? "selected" : "", onClick: () => x("about"), children: [
        /* @__PURE__ */ h.jsx(go, { size: 16 }),
        "About"
      ] })
    ] }),
    /* @__PURE__ */ h.jsxs("div", { className: "settings-content", children: [
      g === "appearance" && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
        /* @__PURE__ */ h.jsxs("div", { className: "settings-section-heading", children: [
          /* @__PURE__ */ h.jsx("h3", { children: "Appearance" }),
          /* @__PURE__ */ h.jsx("p", { children: "Choose a theme and adjust your workspace." })
        ] }),
        /* @__PURE__ */ h.jsx("div", { className: "theme-grid", children: d0.map((v) => /* @__PURE__ */ h.jsxs(
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
                    t.theme === v.id && /* @__PURE__ */ h.jsx("span", { className: "theme-check", children: /* @__PURE__ */ h.jsx(On, { size: 13 }) })
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
              /* @__PURE__ */ h.jsx(BS, { size: 16 }),
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
          /* @__PURE__ */ h.jsx(TS, { size: 20 }),
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
              children: /* @__PURE__ */ h.jsx(e1, { size: 16 })
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
              value: b,
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
                /* @__PURE__ */ h.jsx(US, { size: 15 }),
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
                await window.muse.savePreferences({ cliPath: b.trim() }), p();
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
                /* @__PURE__ */ h.jsx(Zd, { size: 13 })
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
        /* @__PURE__ */ h.jsx(CE, { platform: o, onError: f }),
        /* @__PURE__ */ h.jsxs("div", { className: "about-facts", children: [
          /* @__PURE__ */ h.jsxs("span", { children: [
            o === "win32" ? "Built for Windows" : o === "linux" ? "Built for Linux" : "Built for macOS",
            " ",
            /* @__PURE__ */ h.jsx(On, { size: 13 })
          ] }),
          /* @__PURE__ */ h.jsxs("span", { children: [
            "Your CLI, your credentials ",
            /* @__PURE__ */ h.jsx(On, { size: 13 })
          ] }),
          /* @__PURE__ */ h.jsxs("span", { children: [
            "No desktop telemetry ",
            /* @__PURE__ */ h.jsx(On, { size: 13 })
          ] }),
          /* @__PURE__ */ h.jsxs("span", { children: [
            "MIT licensed source ",
            /* @__PURE__ */ h.jsx(On, { size: 13 })
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
              /* @__PURE__ */ h.jsx(Zd, { size: 13 })
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
              /* @__PURE__ */ h.jsx(wi, { size: 13 })
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
function CE({
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
function TE(t, i) {
  const a = {};
  return (t[t.length - 1] === "" ? [...t, ""] : t).join(
    (a.padRight ? " " : "") + "," + (a.padLeft === !1 ? "" : " ")
  ).trim();
}
const NE = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, AE = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, OE = {};
function cy(t, i) {
  return (OE.jsx ? AE : NE).test(t);
}
const DE = /[ \t\n\f\r]/g;
function ME(t) {
  return typeof t == "object" ? t.type === "text" ? fy(t.value) : !1 : fy(t);
}
function fy(t) {
  return t.replace(DE, "") === "";
}
class _o {
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
_o.prototype.normal = {};
_o.prototype.property = {};
_o.prototype.space = void 0;
function p0(t, i) {
  const a = {}, o = {};
  for (const s of t)
    Object.assign(a, s.property), Object.assign(o, s.normal);
  return new _o(a, o, i);
}
function Jd(t) {
  return t.toLowerCase();
}
class yn {
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
yn.prototype.attribute = "";
yn.prototype.booleanish = !1;
yn.prototype.boolean = !1;
yn.prototype.commaOrSpaceSeparated = !1;
yn.prototype.commaSeparated = !1;
yn.prototype.defined = !1;
yn.prototype.mustUseProperty = !1;
yn.prototype.number = !1;
yn.prototype.overloadedBoolean = !1;
yn.prototype.property = "";
yn.prototype.spaceSeparated = !1;
yn.prototype.space = void 0;
let RE = 0;
const De = oa(), Nt = oa(), Wd = oa(), ie = oa(), ot = oa(), na = oa(), An = oa();
function oa() {
  return 2 ** ++RE;
}
const ep = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: De,
  booleanish: Nt,
  commaOrSpaceSeparated: An,
  commaSeparated: na,
  number: ie,
  overloadedBoolean: Wd,
  spaceSeparated: ot
}, Symbol.toStringTag, { value: "Module" })), Sd = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(ep)
);
class Np extends yn {
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
    if (super(i, a), dy(this, "space", s), typeof o == "number")
      for (; ++c < Sd.length; ) {
        const f = Sd[c];
        dy(this, Sd[c], (o & ep[f]) === ep[f]);
      }
  }
}
Np.prototype.defined = !0;
function dy(t, i, a) {
  a && (t[i] = a);
}
function ul(t) {
  const i = {}, a = {};
  for (const [o, s] of Object.entries(t.properties)) {
    const c = new Np(
      o,
      t.transform(t.attributes || {}, o),
      s,
      t.space
    );
    t.mustUseProperty && t.mustUseProperty.includes(o) && (c.mustUseProperty = !0), i[o] = c, a[Jd(o)] = o, a[Jd(c.attribute)] = o;
  }
  return new _o(i, a, t.space);
}
const h0 = ul({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: Nt,
    ariaAutoComplete: null,
    ariaBusy: Nt,
    ariaChecked: Nt,
    ariaColCount: ie,
    ariaColIndex: ie,
    ariaColSpan: ie,
    ariaControls: ot,
    ariaCurrent: null,
    ariaDescribedBy: ot,
    ariaDetails: null,
    ariaDisabled: Nt,
    ariaDropEffect: ot,
    ariaErrorMessage: null,
    ariaExpanded: Nt,
    ariaFlowTo: ot,
    ariaGrabbed: Nt,
    ariaHasPopup: null,
    ariaHidden: Nt,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: ot,
    ariaLevel: ie,
    ariaLive: null,
    ariaModal: Nt,
    ariaMultiLine: Nt,
    ariaMultiSelectable: Nt,
    ariaOrientation: null,
    ariaOwns: ot,
    ariaPlaceholder: null,
    ariaPosInSet: ie,
    ariaPressed: Nt,
    ariaReadOnly: Nt,
    ariaRelevant: null,
    ariaRequired: Nt,
    ariaRoleDescription: ot,
    ariaRowCount: ie,
    ariaRowIndex: ie,
    ariaRowSpan: ie,
    ariaSelected: Nt,
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
function m0(t, i) {
  return i in t ? t[i] : i;
}
function g0(t, i) {
  return m0(t, i.toLowerCase());
}
const UE = ul({
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
    accept: na,
    acceptCharset: ot,
    accessKey: ot,
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
    autoComplete: ot,
    autoFocus: De,
    autoPlay: De,
    blocking: ot,
    capture: null,
    charSet: null,
    checked: De,
    cite: null,
    className: ot,
    closedBy: null,
    colorSpace: null,
    cols: ie,
    colSpan: ie,
    command: null,
    commandFor: null,
    content: null,
    contentEditable: Nt,
    controls: De,
    controlsList: ot,
    coords: ie | na,
    crossOrigin: null,
    data: null,
    dateTime: null,
    decoding: null,
    default: De,
    defer: De,
    dir: null,
    dirName: null,
    disabled: De,
    download: Wd,
    draggable: Nt,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: De,
    formTarget: null,
    headers: ot,
    height: ie,
    hidden: Wd,
    high: ie,
    href: null,
    hrefLang: null,
    htmlFor: ot,
    httpEquiv: ot,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: De,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: De,
    itemId: null,
    itemProp: ot,
    itemRef: ot,
    itemScope: De,
    itemType: ot,
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
    ping: ot,
    placeholder: null,
    playsInline: De,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: De,
    referrerPolicy: null,
    rel: ot,
    required: De,
    reversed: De,
    rows: ie,
    rowSpan: ie,
    sandbox: ot,
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
    spellCheck: Nt,
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
    value: Nt,
    width: ie,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: ot,
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
    scrolling: Nt,
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
    exportParts: na,
    part: ot,
    prefix: null,
    property: null,
    results: ie,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: g0
}), LE = ul({
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
    about: An,
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
    className: ot,
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
    g1: na,
    g2: na,
    glyphName: na,
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
    kernelMatrix: An,
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
    ping: ot,
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
    property: An,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: An,
    rev: An,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: An,
    requiredFeatures: An,
    requiredFonts: An,
    requiredFormats: An,
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
    strokeDashArray: An,
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
    systemLanguage: An,
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
    typeOf: An,
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
  transform: m0
}), b0 = ul({
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
}), x0 = ul({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: g0
}), y0 = ul({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(t, i) {
    return "xml:" + i.slice(3).toLowerCase();
  }
}), BE = {
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
}, IE = /[A-Z]/g, py = /-[a-z]/g, HE = /^data[-\w.:]+$/i;
function ZE(t, i) {
  const a = Jd(i);
  let o = i, s = yn;
  if (a in t.normal)
    return t.property[t.normal[a]];
  if (a.length > 4 && a.slice(0, 4) === "data" && HE.test(i)) {
    if (i.charAt(4) === "-") {
      const c = i.slice(5).replace(py, $E);
      o = "data" + c.charAt(0).toUpperCase() + c.slice(1);
    } else {
      const c = i.slice(4);
      if (!py.test(c)) {
        let f = c.replace(IE, qE);
        f.charAt(0) !== "-" && (f = "-" + f), i = "data" + f;
      }
    }
    s = Np;
  }
  return new s(o, i);
}
function qE(t) {
  return "-" + t.toLowerCase();
}
function $E(t) {
  return t.charAt(1).toUpperCase();
}
const VE = p0([h0, UE, b0, x0, y0], "html"), Ap = p0([h0, LE, b0, x0, y0], "svg");
function YE(t) {
  return t.join(" ").trim();
}
var el = {}, zd, hy;
function GE() {
  if (hy) return zd;
  hy = 1;
  var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, i = /\n/g, a = /^\s*/, o = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, s = /^:\s*/, c = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, f = /^[;\s]*/, p = /^\s+|\s+$/g, m = `
`, g = "/", x = "*", b = "", w = "comment", v = "declaration";
  function S(E, O) {
    if (typeof E != "string")
      throw new TypeError("First argument must be a string");
    if (!E) return [];
    O = O || {};
    var B = 1, U = 1;
    function V(oe) {
      var te = oe.match(i);
      te && (B += te.length);
      var W = oe.lastIndexOf(m);
      U = ~W ? oe.length - W : U + oe.length;
    }
    function K() {
      var oe = { line: B, column: U };
      return function(te) {
        return te.position = new N(oe), je(), te;
      };
    }
    function N(oe) {
      this.start = oe, this.end = { line: B, column: U }, this.source = O.source;
    }
    N.prototype.content = E;
    function X(oe) {
      var te = new Error(
        O.source + ":" + B + ":" + U + ": " + oe
      );
      if (te.reason = oe, te.filename = O.source, te.line = B, te.column = U, te.source = E, !O.silent) throw te;
    }
    function pe(oe) {
      var te = oe.exec(E);
      if (te) {
        var W = te[0];
        return V(W), E = E.slice(W.length), te;
      }
    }
    function je() {
      pe(a);
    }
    function Z(oe) {
      var te;
      for (oe = oe || []; te = ne(); )
        te !== !1 && oe.push(te);
      return oe;
    }
    function ne() {
      var oe = K();
      if (!(g != E.charAt(0) || x != E.charAt(1))) {
        for (var te = 2; b != E.charAt(te) && (x != E.charAt(te) || g != E.charAt(te + 1)); )
          ++te;
        if (te += 2, b === E.charAt(te - 1))
          return X("End of comment missing");
        var W = E.slice(2, te - 2);
        return U += 2, V(W), E = E.slice(te), U += 2, oe({
          type: w,
          comment: W
        });
      }
    }
    function le() {
      var oe = K(), te = pe(o);
      if (te) {
        if (ne(), !pe(s)) return X("property missing ':'");
        var W = pe(c), ce = oe({
          type: v,
          property: j(te[0].replace(t, b)),
          value: W ? j(W[0].replace(t, b)) : b
        });
        return pe(f), ce;
      }
    }
    function Te() {
      var oe = [];
      Z(oe);
      for (var te; te = le(); )
        te !== !1 && (oe.push(te), Z(oe));
      return oe;
    }
    return je(), Te();
  }
  function j(E) {
    return E ? E.replace(p, b) : b;
  }
  return zd = S, zd;
}
var my;
function FE() {
  if (my) return el;
  my = 1;
  var t = el && el.__importDefault || function(o) {
    return o && o.__esModule ? o : { default: o };
  };
  Object.defineProperty(el, "__esModule", { value: !0 }), el.default = a;
  const i = t(GE());
  function a(o, s) {
    let c = null;
    if (!o || typeof o != "string")
      return c;
    const f = (0, i.default)(o), p = typeof s == "function";
    return f.forEach((m) => {
      if (m.type !== "declaration")
        return;
      const { property: g, value: x } = m;
      p ? s(g, x, m) : x && (c = c || {}, c[g] = x);
    }), c;
  }
  return el;
}
var lo = {}, gy;
function XE() {
  if (gy) return lo;
  gy = 1, Object.defineProperty(lo, "__esModule", { value: !0 }), lo.camelCase = void 0;
  var t = /^--[a-zA-Z0-9_-]+$/, i = /-([a-z])/g, a = /^[^-]+$/, o = /^-(webkit|moz|ms|o|khtml)-/, s = /^-(ms)-/, c = function(g) {
    return !g || a.test(g) || t.test(g);
  }, f = function(g, x) {
    return x.toUpperCase();
  }, p = function(g, x) {
    return "".concat(x, "-");
  }, m = function(g, x) {
    return x === void 0 && (x = {}), c(g) ? g : (g = g.toLowerCase(), x.reactCompat ? g = g.replace(s, p) : g = g.replace(o, p), g.replace(i, f));
  };
  return lo.camelCase = m, lo;
}
var oo, by;
function QE() {
  if (by) return oo;
  by = 1;
  var t = oo && oo.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  }, i = t(FE()), a = XE();
  function o(s, c) {
    var f = {};
    return !s || typeof s != "string" || (0, i.default)(s, function(p, m) {
      p && m && (f[(0, a.camelCase)(p, c)] = m);
    }), f;
  }
  return o.default = o, oo = o, oo;
}
var PE = QE();
const KE = /* @__PURE__ */ ev(PE), v0 = w0("end"), Op = w0("start");
function w0(t) {
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
function JE(t) {
  const i = Op(t), a = v0(t);
  if (i && a)
    return { start: i, end: a };
}
function bo(t) {
  return !t || typeof t != "object" ? "" : "position" in t || "type" in t ? xy(t.position) : "start" in t || "end" in t ? xy(t) : "line" in t || "column" in t ? tp(t) : "";
}
function tp(t) {
  return yy(t && t.line) + ":" + yy(t && t.column);
}
function xy(t) {
  return tp(t && t.start) + "-" + tp(t && t.end);
}
function yy(t) {
  return t && typeof t == "number" ? t : 1;
}
class Kt extends Error {
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
    this.ancestors = c.ancestors || void 0, this.cause = c.cause || void 0, this.column = p ? p.column : void 0, this.fatal = void 0, this.file = "", this.message = s, this.line = p ? p.line : void 0, this.name = bo(c.place) || "1:1", this.place = c.place || void 0, this.reason = this.message, this.ruleId = c.ruleId || void 0, this.source = c.source || void 0, this.stack = f && c.cause && typeof c.cause.stack == "string" ? c.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
  }
}
Kt.prototype.file = "";
Kt.prototype.name = "";
Kt.prototype.reason = "";
Kt.prototype.message = "";
Kt.prototype.stack = "";
Kt.prototype.column = void 0;
Kt.prototype.line = void 0;
Kt.prototype.ancestors = void 0;
Kt.prototype.cause = void 0;
Kt.prototype.fatal = void 0;
Kt.prototype.place = void 0;
Kt.prototype.ruleId = void 0;
Kt.prototype.source = void 0;
const Dp = {}.hasOwnProperty, WE = /* @__PURE__ */ new Map(), eC = /[A-Z]/g, tC = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), nC = /* @__PURE__ */ new Set(["td", "th"]), k0 = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function iC(t, i) {
  if (!i || i.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const a = i.filePath || void 0;
  let o;
  if (i.development) {
    if (typeof i.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    o = fC(a, i.jsxDEV);
  } else {
    if (typeof i.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof i.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    o = cC(a, i.jsx, i.jsxs);
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
    schema: i.space === "svg" ? Ap : VE,
    stylePropertyNameCase: i.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: i.tableCellAlignToStyle !== !1
  }, c = S0(s, t, void 0);
  return c && typeof c != "string" ? c : s.create(
    t,
    s.Fragment,
    { children: c || void 0 },
    void 0
  );
}
function S0(t, i, a) {
  if (i.type === "element")
    return rC(t, i, a);
  if (i.type === "mdxFlowExpression" || i.type === "mdxTextExpression")
    return aC(t, i);
  if (i.type === "mdxJsxFlowElement" || i.type === "mdxJsxTextElement")
    return oC(t, i, a);
  if (i.type === "mdxjsEsm")
    return lC(t, i);
  if (i.type === "root")
    return sC(t, i, a);
  if (i.type === "text")
    return uC(t, i);
}
function rC(t, i, a) {
  const o = t.schema;
  let s = o;
  i.tagName.toLowerCase() === "svg" && o.space === "html" && (s = Ap, t.schema = s), t.ancestors.push(i);
  const c = _0(t, i.tagName, !1), f = dC(t, i);
  let p = Rp(t, i);
  return tC.has(i.tagName) && (p = p.filter(function(m) {
    return typeof m == "string" ? !ME(m) : !0;
  })), z0(t, f, c, i), Mp(f, p), t.ancestors.pop(), t.schema = o, t.create(i, c, f, a);
}
function aC(t, i) {
  if (i.data && i.data.estree && t.evaluater) {
    const o = i.data.estree.body[0];
    return o.type, /** @type {Child | undefined} */
    t.evaluater.evaluateExpression(o.expression);
  }
  zo(t, i.position);
}
function lC(t, i) {
  if (i.data && i.data.estree && t.evaluater)
    return (
      /** @type {Child | undefined} */
      t.evaluater.evaluateProgram(i.data.estree)
    );
  zo(t, i.position);
}
function oC(t, i, a) {
  const o = t.schema;
  let s = o;
  i.name === "svg" && o.space === "html" && (s = Ap, t.schema = s), t.ancestors.push(i);
  const c = i.name === null ? t.Fragment : _0(t, i.name, !0), f = pC(t, i), p = Rp(t, i);
  return z0(t, f, c, i), Mp(f, p), t.ancestors.pop(), t.schema = o, t.create(i, c, f, a);
}
function sC(t, i, a) {
  const o = {};
  return Mp(o, Rp(t, i)), t.create(i, t.Fragment, o, a);
}
function uC(t, i) {
  return i.value;
}
function z0(t, i, a, o) {
  typeof a != "string" && a !== t.Fragment && t.passNode && (i.node = o);
}
function Mp(t, i) {
  if (i.length > 0) {
    const a = i.length > 1 ? i : i[0];
    a && (t.children = a);
  }
}
function cC(t, i, a) {
  return o;
  function o(s, c, f, p) {
    const g = Array.isArray(f.children) ? a : i;
    return p ? g(c, f, p) : g(c, f);
  }
}
function fC(t, i) {
  return a;
  function a(o, s, c, f) {
    const p = Array.isArray(c.children), m = Op(o);
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
function dC(t, i) {
  const a = {};
  let o, s;
  for (s in i.properties)
    if (s !== "children" && Dp.call(i.properties, s)) {
      const c = hC(t, s, i.properties[s]);
      if (c) {
        const [f, p] = c;
        t.tableCellAlignToStyle && f === "align" && typeof p == "string" && nC.has(i.tagName) ? o = p : a[f] = p;
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
function pC(t, i) {
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
        zo(t, i.position);
    else {
      const s = o.name;
      let c;
      if (o.value && typeof o.value == "object")
        if (o.value.data && o.value.data.estree && t.evaluater) {
          const p = o.value.data.estree.body[0];
          p.type, c = t.evaluater.evaluateExpression(p.expression);
        } else
          zo(t, i.position);
      else
        c = o.value === null ? !0 : o.value;
      a[s] = /** @type {Props[keyof Props]} */
      c;
    }
  return a;
}
function Rp(t, i) {
  const a = [];
  let o = -1;
  const s = t.passKeys ? /* @__PURE__ */ new Map() : WE;
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
    const p = S0(t, c, f);
    p !== void 0 && a.push(p);
  }
  return a;
}
function hC(t, i, a) {
  const o = ZE(t.schema, i);
  if (!(a == null || typeof a == "number" && Number.isNaN(a))) {
    if (Array.isArray(a) && (a = o.commaSeparated ? TE(a) : YE(a)), o.property === "style") {
      let s = typeof a == "object" ? a : mC(t, String(a));
      return t.stylePropertyNameCase === "css" && (s = gC(s)), ["style", s];
    }
    return [
      t.elementAttributeNameCase === "react" && o.space ? BE[o.property] || o.property : o.attribute,
      a
    ];
  }
}
function mC(t, i) {
  try {
    return KE(i, { reactCompat: !0 });
  } catch (a) {
    if (t.ignoreInvalidStyle)
      return {};
    const o = (
      /** @type {Error} */
      a
    ), s = new Kt("Cannot parse `style` attribute", {
      ancestors: t.ancestors,
      cause: o,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw s.file = t.filePath || void 0, s.url = k0 + "#cannot-parse-style-attribute", s;
  }
}
function _0(t, i, a) {
  let o;
  if (!a)
    o = { type: "Literal", value: i };
  else if (i.includes(".")) {
    const s = i.split(".");
    let c = -1, f;
    for (; ++c < s.length; ) {
      const p = cy(s[c]) ? { type: "Identifier", name: s[c] } : { type: "Literal", value: s[c] };
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
    o = cy(i) && !/^[a-z]/.test(i) ? { type: "Identifier", name: i } : { type: "Literal", value: i };
  if (o.type === "Literal") {
    const s = (
      /** @type {string | number} */
      o.value
    );
    return Dp.call(t.components, s) ? t.components[s] : s;
  }
  if (t.evaluater)
    return t.evaluater.evaluateExpression(o);
  zo(t);
}
function zo(t, i) {
  const a = new Kt(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: t.ancestors,
      place: i,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw a.file = t.filePath || void 0, a.url = k0 + "#cannot-handle-mdx-estrees-without-createevaluater", a;
}
function gC(t) {
  const i = {};
  let a;
  for (a in t)
    Dp.call(t, a) && (i[bC(a)] = t[a]);
  return i;
}
function bC(t) {
  let i = t.replace(eC, xC);
  return i.slice(0, 3) === "ms-" && (i = "-" + i), i;
}
function xC(t) {
  return "-" + t.toLowerCase();
}
const _d = {
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
}, yC = {};
function Up(t, i) {
  const a = yC, o = typeof a.includeImageAlt == "boolean" ? a.includeImageAlt : !0, s = typeof a.includeHtml == "boolean" ? a.includeHtml : !0;
  return j0(t, o, s);
}
function j0(t, i, a) {
  if (vC(t)) {
    if ("value" in t)
      return t.type === "html" && !a ? "" : t.value;
    if (i && "alt" in t && t.alt)
      return t.alt;
    if ("children" in t)
      return vy(t.children, i, a);
  }
  return Array.isArray(t) ? vy(t, i, a) : "";
}
function vy(t, i, a) {
  const o = [];
  let s = -1;
  for (; ++s < t.length; )
    o[s] = j0(t[s], i, a);
  return o.join("");
}
function vC(t) {
  return !!(t && typeof t == "object");
}
const wy = document.createElement("i");
function Lp(t) {
  const i = "&" + t + ";";
  wy.innerHTML = i;
  const a = wy.textContent;
  return a.charCodeAt(a.length - 1) === 59 && t !== "semi" || a === i ? !1 : a;
}
function li(t, i, a, o) {
  const s = t.length;
  let c = 0, f;
  if (i < 0 ? i = -i > s ? 0 : s + i : i = i > s ? s : i, a = a > 0 ? a : 0, o.length < 1e4)
    f = Array.from(o), f.unshift(i, a), t.splice(...f);
  else
    for (a && t.splice(i, a); c < o.length; )
      f = o.slice(c, c + 1e4), f.unshift(i, 0), t.splice(...f), c += 1e4, i += 1e4;
}
function Pn(t, i) {
  return t.length > 0 ? (li(t, t.length, 0, i), t) : i;
}
const ky = {}.hasOwnProperty;
function E0(t) {
  const i = {};
  let a = -1;
  for (; ++a < t.length; )
    wC(i, t[a]);
  return i;
}
function wC(t, i) {
  let a;
  for (a in i) {
    const s = (ky.call(t, a) ? t[a] : void 0) || (t[a] = {}), c = i[a];
    let f;
    if (c)
      for (f in c) {
        ky.call(s, f) || (s[f] = []);
        const p = c[f];
        kC(
          // @ts-expect-error Looks like a list.
          s[f],
          Array.isArray(p) ? p : p ? [p] : []
        );
      }
  }
}
function kC(t, i) {
  let a = -1;
  const o = [];
  for (; ++a < i.length; )
    (i[a].add === "after" ? t : o).push(i[a]);
  li(t, 0, 0, o);
}
function C0(t, i) {
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
function oi(t) {
  return t.replace(/[\t\n\r ]+/g, " ").replace(/^ | $/g, "").toLowerCase().toUpperCase();
}
const ln = Er(/[A-Za-z]/), Pt = Er(/[\dA-Za-z]/), SC = Er(/[#-'*+\--9=?A-Z^-~]/);
function wu(t) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    t !== null && (t < 32 || t === 127)
  );
}
const np = Er(/\d/), zC = Er(/[\dA-Fa-f]/), _C = Er(/[!-/:-@[-`{-~]/);
function _e(t) {
  return t !== null && t < -2;
}
function st(t) {
  return t !== null && (t < 0 || t === 32);
}
function Be(t) {
  return t === -2 || t === -1 || t === 32;
}
const Nu = Er(new RegExp("\\p{P}|\\p{S}", "u")), aa = Er(/\s/);
function Er(t) {
  return i;
  function i(a) {
    return a !== null && a > -1 && t.test(String.fromCharCode(a));
  }
}
function cl(t) {
  const i = [];
  let a = -1, o = 0, s = 0;
  for (; ++a < t.length; ) {
    const c = t.charCodeAt(a);
    let f = "";
    if (c === 37 && Pt(t.charCodeAt(a + 1)) && Pt(t.charCodeAt(a + 2)))
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
function Qe(t, i, a, o) {
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
function T0(t, i, a, o, s, c) {
  let f = 0;
  return p;
  function p(x) {
    return Be(x) ? (t.enter(o), m(x)) : g(x);
  }
  function m(x) {
    return Be(x) && f < c ? (t.consume(x), f++, m) : (t.exit(o), g(x));
  }
  function g(x) {
    return f >= s ? i(x) : a(x);
  }
}
const jC = {
  tokenize: EC
};
function EC(t) {
  const i = t.attempt(this.parser.constructs.contentInitial, o, s);
  let a;
  return i;
  function o(p) {
    if (p === null) {
      t.consume(p);
      return;
    }
    return t.enter("lineEnding"), t.consume(p), t.exit("lineEnding"), Qe(t, i, "linePrefix");
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
    return _e(p) ? (t.consume(p), t.exit("chunkText"), c) : (t.consume(p), f);
  }
}
let ku = class {
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
    Sy(this, i, a, o, !1);
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
    Sy(this, i, a, o, !0);
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
function Sy(t, i, a, o, s) {
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
const CC = {
  tokenize: TC
}, zy = {
  tokenize: NC
};
function TC(t) {
  const i = this, a = [];
  let o = 0, s, c, f;
  return p;
  function p(U) {
    if (o < a.length) {
      const V = a[o];
      return i.containerState = V[1], t.attempt(V[0].continuation, m, g)(U);
    }
    return g(U);
  }
  function m(U) {
    if (o++, i.containerState._closeFlow) {
      i.containerState._closeFlow = void 0, s && B();
      const V = i.events.length;
      let K = V, N;
      for (; K--; )
        if (i.events[K][0] === "exit" && i.events[K][1].type === "chunkFlow") {
          N = i.events[K][1].end;
          break;
        }
      O(o);
      let X = V;
      for (; X < i.events.length; )
        i.events[X][1].end = {
          ...N
        }, X++;
      const pe = new ku();
      return pe.add(K + 1, 0, i.events.slice(V)), pe.add(V, X - V, []), pe.consume(i.events), g(U);
    }
    return p(U);
  }
  function g(U) {
    if (o === a.length) {
      if (!s)
        return w(U);
      if (s.currentConstruct && s.currentConstruct.concrete)
        return S(U);
      i.interrupt = !!(s.currentConstruct && !s._gfmTableDynamicInterruptHack);
    }
    return i.containerState = {}, t.check(zy, x, b)(U);
  }
  function x(U) {
    return s && B(), O(o), w(U);
  }
  function b(U) {
    return i.parser.lazy[i.now().line] = o !== a.length, f = i.now().offset, S(U);
  }
  function w(U) {
    return i.containerState = {}, t.attempt(zy, v, S)(U);
  }
  function v(U) {
    return o++, a.push([i.currentConstruct, i.containerState]), w(U);
  }
  function S(U) {
    if (U === null) {
      s && B(), O(0), t.consume(U);
      return;
    }
    return s = s || i.parser.flow(i.now()), t.enter("chunkFlow", {
      _tokenizer: s,
      contentType: "flow",
      previous: c
    }), j(U);
  }
  function j(U) {
    if (U === null) {
      E(t.exit("chunkFlow"), !0), O(0), t.consume(U);
      return;
    }
    return _e(U) ? (t.consume(U), E(t.exit("chunkFlow")), o = 0, i.interrupt = void 0, p) : (t.consume(U), j);
  }
  function E(U, V) {
    const K = i.sliceStream(U);
    if (V && K.push(null), U.previous = c, c && (c.next = U), c = U, s.defineSkip(U.start), s.write(K), i.parser.lazy[U.start.line]) {
      let N = s.events.length;
      for (; N--; )
        if (
          // The token starts before the line ending…
          s.events[N][1].start.offset < f && // …and either is not ended yet…
          (!s.events[N][1].end || // …or ends after it.
          s.events[N][1].end.offset > f)
        )
          return;
      const X = i.events.length;
      let pe = X, je, Z;
      for (; pe--; )
        if (i.events[pe][0] === "exit" && i.events[pe][1].type === "chunkFlow") {
          if (je) {
            Z = i.events[pe][1].end;
            break;
          }
          je = !0;
        }
      for (O(o), N = X; N < i.events.length; )
        i.events[N][1].end = {
          ...Z
        }, N++;
      const ne = new ku();
      ne.add(pe + 1, 0, i.events.slice(X)), ne.add(X, N - X, []), ne.consume(i.events);
    }
  }
  function O(U) {
    let V = a.length;
    for (; V-- > U; ) {
      const K = a[V];
      i.containerState = K[1], K[0].exit.call(i, t);
    }
    a.length = U;
  }
  function B() {
    s.write([null]), c = void 0, s = void 0, i.containerState._closeFlow = void 0;
  }
}
function NC(t, i, a) {
  return Qe(t, t.attempt(this.parser.constructs.document, i, a), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function Su(t) {
  if (t === null || st(t) || aa(t))
    return 1;
  if (Nu(t))
    return 2;
}
function Au(t, i, a) {
  const o = [];
  let s = -1;
  for (; ++s < t.length; ) {
    const c = t[s].resolveAll;
    c && !o.includes(c) && (i = c(i, a), o.push(c));
  }
  return i;
}
const ip = {
  name: "attention",
  resolveAll: AC,
  tokenize: OC
};
function AC(t, i) {
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
          _y(f, -c), _y(p, c);
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
          }, x = {
            type: c > 1 ? "strongText" : "emphasisText",
            start: {
              ...t[s][1].end
            },
            end: {
              ...t[a][1].start
            }
          }, b = {
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
          }, o = [], t[s][1].end.offset - t[s][1].start.offset && (o = Pn(o, [["enter", t[s][1], i], ["exit", t[s][1], i]])), o = Pn(o, [["enter", b, i], ["enter", m, i], ["exit", m, i], ["enter", x, i]]), o = Pn(o, Au(i.parser.constructs.insideSpan.null, t.slice(s + 1, a), i)), o = Pn(o, [["exit", x, i], ["enter", g, i], ["exit", g, i], ["exit", b, i]]);
          let w = 0;
          t[a][1].end.offset - t[a][1].start.offset && (w = 2, o = Pn(o, [["enter", t[a][1], i], ["exit", t[a][1], i]])), li(t, s - 1, a - s + 3, o), a = s + o.length - w - 2;
          break;
        }
    }
  for (a = -1; ++a < t.length; )
    t[a][1].type === "attentionSequence" && (t[a][1].type = "data");
  return t;
}
function OC(t, i) {
  const a = this.parser.constructs.attentionMarkers.null, o = this.previous, s = Su(o);
  let c;
  return f;
  function f(m) {
    return c = m, t.enter("attentionSequence"), p(m);
  }
  function p(m) {
    if (m === c)
      return t.consume(m), p;
    const g = t.exit("attentionSequence"), x = Su(m), b = !x || x === 2 && s || a.includes(m) && m !== 42 && m !== 95, w = !s || s === 2 && x || a.includes(o) && o !== 42 && o !== 95;
    return g._open = !!(c === 42 ? b : b && (s || !w)), g._close = !!(c === 42 ? w : w && (x || !b)), i(m);
  }
}
function _y(t, i) {
  t.column += i, t.offset += i, t._bufferIndex += i;
}
const DC = {
  name: "autolink",
  tokenize: MC
};
function MC(t, i, a) {
  let o = 0;
  return s;
  function s(v) {
    return t.enter("autolink"), t.enter("autolinkMarker"), t.consume(v), t.exit("autolinkMarker"), t.enter("autolinkProtocol"), c;
  }
  function c(v) {
    return ln(v) ? (t.consume(v), f) : v === 64 ? a(v) : g(v);
  }
  function f(v) {
    return v === 43 || v === 45 || v === 46 || Pt(v) ? (o = 1, p(v)) : g(v);
  }
  function p(v) {
    return v === 58 ? (t.consume(v), o = 0, m) : (v === 43 || v === 45 || v === 46 || Pt(v)) && o++ < 32 ? (t.consume(v), p) : (o = 0, g(v));
  }
  function m(v) {
    return v === 62 ? (t.exit("autolinkProtocol"), t.enter("autolinkMarker"), t.consume(v), t.exit("autolinkMarker"), t.exit("autolink"), i) : v === null || v === 32 || v === 60 || wu(v) ? a(v) : (t.consume(v), m);
  }
  function g(v) {
    return v === 64 ? (t.consume(v), x) : SC(v) ? (t.consume(v), g) : a(v);
  }
  function x(v) {
    return Pt(v) ? b(v) : a(v);
  }
  function b(v) {
    return v === 46 ? (t.consume(v), o = 0, x) : v === 62 ? (t.exit("autolinkProtocol").type = "autolinkEmail", t.enter("autolinkMarker"), t.consume(v), t.exit("autolinkMarker"), t.exit("autolink"), i) : w(v);
  }
  function w(v) {
    if ((v === 45 || Pt(v)) && o++ < 63) {
      const S = v === 45 ? w : b;
      return t.consume(v), S;
    }
    return a(v);
  }
}
const jo = {
  partial: !0,
  tokenize: RC
};
function RC(t, i, a) {
  return o;
  function o(c) {
    return Be(c) ? Qe(t, s, "linePrefix")(c) : s(c);
  }
  function s(c) {
    return c === null || _e(c) ? i(c) : a(c);
  }
}
const N0 = {
  continuation: {
    tokenize: LC
  },
  exit: BC,
  name: "blockQuote",
  tokenize: UC
};
function UC(t, i, a) {
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
function LC(t, i, a) {
  const o = this;
  return s;
  function s(f) {
    return Be(f) ? Qe(t, c, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(f) : c(f);
  }
  function c(f) {
    return t.attempt(N0, i, a)(f);
  }
}
function BC(t) {
  t.exit("blockQuote");
}
const A0 = {
  name: "characterEscape",
  tokenize: IC
};
function IC(t, i, a) {
  return o;
  function o(c) {
    return t.enter("characterEscape"), t.enter("escapeMarker"), t.consume(c), t.exit("escapeMarker"), s;
  }
  function s(c) {
    return _C(c) ? (t.enter("characterEscapeValue"), t.consume(c), t.exit("characterEscapeValue"), t.exit("characterEscape"), i) : a(c);
  }
}
const O0 = {
  name: "characterReference",
  tokenize: HC
};
function HC(t, i, a) {
  const o = this;
  let s = 0, c, f;
  return p;
  function p(b) {
    return t.enter("characterReference"), t.enter("characterReferenceMarker"), t.consume(b), t.exit("characterReferenceMarker"), m;
  }
  function m(b) {
    return b === 35 ? (t.enter("characterReferenceMarkerNumeric"), t.consume(b), t.exit("characterReferenceMarkerNumeric"), g) : (t.enter("characterReferenceValue"), c = 31, f = Pt, x(b));
  }
  function g(b) {
    return b === 88 || b === 120 ? (t.enter("characterReferenceMarkerHexadecimal"), t.consume(b), t.exit("characterReferenceMarkerHexadecimal"), t.enter("characterReferenceValue"), c = 6, f = zC, x) : (t.enter("characterReferenceValue"), c = 7, f = np, x(b));
  }
  function x(b) {
    if (b === 59 && s) {
      const w = t.exit("characterReferenceValue");
      return f === Pt && !Lp(o.sliceSerialize(w)) ? a(b) : (t.enter("characterReferenceMarker"), t.consume(b), t.exit("characterReferenceMarker"), t.exit("characterReference"), i);
    }
    return f(b) && s++ < c ? (t.consume(b), x) : a(b);
  }
}
const rp = {
  partial: !0,
  tokenize: ZC
};
function ZC(t, i, a) {
  const o = this;
  return s;
  function s(f) {
    return f === null ? a(f) : (t.enter("lineEnding"), t.consume(f), t.exit("lineEnding"), c);
  }
  function c(f) {
    return o.parser.lazy[o.now().line] ? a(f) : i(f);
  }
}
const jy = {
  concrete: !0,
  name: "codeFenced",
  tokenize: qC
};
function qC(t, i, a) {
  const o = this, s = {
    partial: !0,
    tokenize: K
  };
  let c = 0, f = 0, p;
  return m;
  function m(N) {
    return g(N);
  }
  function g(N) {
    const X = o.events[o.events.length - 1];
    return c = X && X[1].type === "linePrefix" ? X[2].sliceSerialize(X[1], !0).length : 0, p = N, t.enter("codeFenced"), t.enter("codeFencedFence"), t.enter("codeFencedFenceSequence"), x(N);
  }
  function x(N) {
    return N === p ? (f++, t.consume(N), x) : f < 3 ? a(N) : (t.exit("codeFencedFenceSequence"), Be(N) ? Qe(t, b, "whitespace")(N) : b(N));
  }
  function b(N) {
    return N === null || _e(N) ? (t.exit("codeFencedFence"), o.interrupt ? i(N) : t.check(rp, j, V)(N)) : (t.enter("codeFencedFenceInfo"), t.enter("chunkString", {
      contentType: "string"
    }), w(N));
  }
  function w(N) {
    return N === null || _e(N) ? (t.exit("chunkString"), t.exit("codeFencedFenceInfo"), b(N)) : Be(N) ? (t.exit("chunkString"), t.exit("codeFencedFenceInfo"), Qe(t, v, "whitespace")(N)) : N === 96 && N === p ? a(N) : (t.consume(N), w);
  }
  function v(N) {
    return N === null || _e(N) ? b(N) : (t.enter("codeFencedFenceMeta"), t.enter("chunkString", {
      contentType: "string"
    }), S(N));
  }
  function S(N) {
    return N === null || _e(N) ? (t.exit("chunkString"), t.exit("codeFencedFenceMeta"), b(N)) : N === 96 && N === p ? a(N) : (t.consume(N), S);
  }
  function j(N) {
    return t.attempt(s, V, E)(N);
  }
  function E(N) {
    return t.enter("lineEnding"), t.consume(N), t.exit("lineEnding"), O;
  }
  function O(N) {
    return c > 0 && Be(N) ? Qe(t, B, "linePrefix", c + 1)(N) : B(N);
  }
  function B(N) {
    return N === null || _e(N) ? t.check(rp, j, V)(N) : (t.enter("codeFlowValue"), U(N));
  }
  function U(N) {
    return N === null || _e(N) ? (t.exit("codeFlowValue"), B(N)) : (t.consume(N), U);
  }
  function V(N) {
    return t.exit("codeFenced"), i(N);
  }
  function K(N, X, pe) {
    let je = 0;
    return Z;
    function Z(te) {
      return N.enter("lineEnding"), N.consume(te), N.exit("lineEnding"), ne;
    }
    function ne(te) {
      return N.enter("codeFencedFence"), Be(te) ? Qe(N, le, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(te) : le(te);
    }
    function le(te) {
      return te === p ? (N.enter("codeFencedFenceSequence"), Te(te)) : pe(te);
    }
    function Te(te) {
      return te === p ? (je++, N.consume(te), Te) : je >= f ? (N.exit("codeFencedFenceSequence"), Be(te) ? Qe(N, oe, "whitespace")(te) : oe(te)) : pe(te);
    }
    function oe(te) {
      return te === null || _e(te) ? (N.exit("codeFencedFence"), X(te)) : pe(te);
    }
  }
}
const jd = {
  name: "codeIndented",
  tokenize: VC
}, $C = {
  partial: !0,
  tokenize: YC
};
function VC(t, i, a) {
  return o;
  function o(p) {
    return t.enter("codeIndented"), T0(t, s, a, "linePrefix", 4, 4)(p);
  }
  function s(p) {
    return p === null ? f(p) : _e(p) ? t.attempt($C, s, f)(p) : (t.enter("codeFlowValue"), c(p));
  }
  function c(p) {
    return p === null || _e(p) ? (t.exit("codeFlowValue"), s(p)) : (t.consume(p), c);
  }
  function f(p) {
    return t.exit("codeIndented"), i(p);
  }
}
function YC(t, i, a) {
  const o = this;
  return s;
  function s(f) {
    return o.parser.lazy[o.now().line] ? a(f) : _e(f) ? (t.enter("lineEnding"), t.consume(f), t.exit("lineEnding"), s) : T0(t, i, c, "linePrefix", 4, 4)(f);
  }
  function c(f) {
    return _e(f) ? s(f) : a(f);
  }
}
const GC = {
  name: "codeText",
  previous: XC,
  resolve: FC,
  tokenize: QC
};
function FC(t) {
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
function XC(t) {
  return t !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function QC(t, i, a) {
  let o = 0, s, c;
  return f;
  function f(b) {
    return t.enter("codeText"), t.enter("codeTextSequence"), p(b);
  }
  function p(b) {
    return b === 96 ? (t.consume(b), o++, p) : (t.exit("codeTextSequence"), m(b));
  }
  function m(b) {
    return b === null ? a(b) : b === 32 ? (t.enter("space"), t.consume(b), t.exit("space"), m) : b === 96 ? (c = t.enter("codeTextSequence"), s = 0, x(b)) : _e(b) ? (t.enter("lineEnding"), t.consume(b), t.exit("lineEnding"), m) : (t.enter("codeTextData"), g(b));
  }
  function g(b) {
    return b === null || b === 32 || b === 96 || _e(b) ? (t.exit("codeTextData"), m(b)) : (t.consume(b), g);
  }
  function x(b) {
    return b === 96 ? (t.consume(b), s++, x) : s === o ? (t.exit("codeTextSequence"), t.exit("codeText"), i(b)) : (c.type = "codeTextData", g(b));
  }
}
class PC {
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
    return o && so(this.left, o), c.reverse();
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
    this.setCursor(Number.POSITIVE_INFINITY), so(this.left, i);
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
    this.setCursor(0), so(this.right, i.reverse());
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
        so(this.right, a.reverse());
      } else {
        const a = this.right.splice(this.left.length + this.right.length - i, Number.POSITIVE_INFINITY);
        so(this.left, a.reverse());
      }
  }
}
function so(t, i) {
  let a = 0;
  if (i.length < 1e4)
    t.push(...i);
  else
    for (; a < i.length; )
      t.push(...i.slice(a, a + 1e4)), a += 1e4;
}
function D0(t) {
  const i = {};
  let a = -1, o, s, c, f, p, m, g;
  const x = new PC(t);
  for (; ++a < x.length; ) {
    for (; a in i; )
      a = i[a];
    if (o = x.get(a), a && o[1].type === "chunkFlow" && x.get(a - 1)[1].type === "listItemPrefix" && (m = o[1]._tokenizer.events, c = 0, c < m.length && m[c][1].type === "lineEndingBlank" && (c += 2), c < m.length && m[c][1].type === "content"))
      for (; ++c < m.length && m[c][1].type !== "content"; )
        m[c][1].type === "chunkText" && (m[c][1]._isInFirstContentOfListItem = !0, c++);
    if (o[0] === "enter")
      o[1].contentType && (Object.assign(i, KC(x, a)), a = i[a], g = !0);
    else if (o[1]._container) {
      for (c = a, s = void 0; c--; )
        if (f = x.get(c), f[1].type === "lineEnding" || f[1].type === "lineEndingBlank")
          f[0] === "enter" && (s && (x.get(s)[1].type = "lineEndingBlank"), f[1].type = "lineEnding", s = c);
        else if (!(f[1].type === "linePrefix" || f[1].type === "listItemIndent")) break;
      s && (o[1].end = {
        ...x.get(s)[1].start
      }, p = x.slice(s, a), p.unshift(o), x.splice(s, a - s + 1, p));
    }
  }
  return li(t, 0, Number.POSITIVE_INFINITY, x.slice(0)), !g;
}
function KC(t, i) {
  const a = t.get(i)[1], o = t.get(i)[2];
  let s = i - 1;
  const c = [];
  let f = a._tokenizer;
  f || (f = o.parser[a.contentType](a.start), a._contentTypeTextTrailing && (f._contentTypeTextTrailing = !0));
  const p = f.events, m = [], g = {};
  let x, b, w = -1, v = a, S = 0, j = 0;
  const E = [j];
  for (; v; ) {
    for (; t.get(++s)[1] !== v; )
      ;
    c.push(s), v._tokenizer || (x = o.sliceStream(v), v.next || x.push(null), b && f.defineSkip(v.start), v._isInFirstContentOfListItem && (f._gfmTasklistFirstContentOfListItem = !0), f.write(x), v._isInFirstContentOfListItem && (f._gfmTasklistFirstContentOfListItem = void 0)), b = v, v = v.next;
  }
  for (v = a; ++w < p.length; )
    // Find a void token that includes a break.
    p[w][0] === "exit" && p[w - 1][0] === "enter" && p[w][1].type === p[w - 1][1].type && p[w][1].start.line !== p[w][1].end.line && (j = w + 1, E.push(j), v._tokenizer = void 0, v.previous = void 0, v = v.next);
  for (f.events = [], v ? (v._tokenizer = void 0, v.previous = void 0) : E.pop(), w = E.length; w--; ) {
    const O = p.slice(E[w], E[w + 1]), B = c.pop();
    m.push([B, B + O.length - 1]), t.splice(B, 2, O);
  }
  for (m.reverse(), w = -1; ++w < m.length; )
    g[S + m[w][0]] = S + m[w][1], S += m[w][1] - m[w][0] - 1;
  return g;
}
const JC = {
  resolve: eT,
  tokenize: tT
}, WC = {
  partial: !0,
  tokenize: nT
};
function eT(t) {
  return D0(t), t;
}
function tT(t, i) {
  let a;
  return o;
  function o(p) {
    return t.enter("content"), a = t.enter("chunkContent", {
      contentType: "content"
    }), s(p);
  }
  function s(p) {
    return p === null ? c(p) : _e(p) ? t.check(WC, f, c)(p) : (t.consume(p), s);
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
function nT(t, i, a) {
  const o = this;
  return s;
  function s(f) {
    return t.exit("chunkContent"), t.enter("lineEnding"), t.consume(f), t.exit("lineEnding"), Qe(t, c, "linePrefix");
  }
  function c(f) {
    if (f === null || _e(f))
      return a(f);
    const p = o.events[o.events.length - 1];
    return !o.parser.constructs.disable.null.includes("codeIndented") && p && p[1].type === "linePrefix" && p[2].sliceSerialize(p[1], !0).length >= 4 ? i(f) : t.interrupt(o.parser.constructs.flow, a, i)(f);
  }
}
function M0(t, i, a, o, s, c, f, p, m) {
  const g = m || Number.POSITIVE_INFINITY;
  let x = 0;
  return b;
  function b(O) {
    return O === 60 ? (t.enter(o), t.enter(s), t.enter(c), t.consume(O), t.exit(c), w) : O === null || O === 32 || O === 41 || wu(O) ? a(O) : (t.enter(o), t.enter(f), t.enter(p), t.enter("chunkString", {
      contentType: "string"
    }), j(O));
  }
  function w(O) {
    return O === 62 ? (t.enter(c), t.consume(O), t.exit(c), t.exit(s), t.exit(o), i) : (t.enter(p), t.enter("chunkString", {
      contentType: "string"
    }), v(O));
  }
  function v(O) {
    return O === 62 ? (t.exit("chunkString"), t.exit(p), w(O)) : O === null || O === 60 || _e(O) ? a(O) : (t.consume(O), O === 92 ? S : v);
  }
  function S(O) {
    return O === 60 || O === 62 || O === 92 ? (t.consume(O), v) : v(O);
  }
  function j(O) {
    return !x && (O === null || O === 41 || st(O)) ? (t.exit("chunkString"), t.exit(p), t.exit(f), t.exit(o), i(O)) : x < g && O === 40 ? (t.consume(O), x++, j) : O === 41 ? (t.consume(O), x--, j) : O === null || O === 32 || O === 40 || wu(O) ? a(O) : (t.consume(O), O === 92 ? E : j);
  }
  function E(O) {
    return O === 40 || O === 41 || O === 92 ? (t.consume(O), j) : j(O);
  }
}
function R0(t, i, a, o, s, c) {
  const f = this;
  let p = 0, m;
  return g;
  function g(v) {
    return t.enter(o), t.enter(s), t.consume(v), t.exit(s), t.enter(c), x;
  }
  function x(v) {
    return p > 999 || v === null || v === 91 || v === 93 && !m || // To do: remove in the future once we’ve switched from
    // `micromark-extension-footnote` to `micromark-extension-gfm-footnote`,
    // which doesn’t need this.
    // Hidden footnotes hook.
    /* c8 ignore next 3 */
    v === 94 && !p && "_hiddenFootnoteSupport" in f.parser.constructs ? a(v) : v === 93 ? (t.exit(c), t.enter(s), t.consume(v), t.exit(s), t.exit(o), i) : _e(v) ? (t.enter("lineEnding"), t.consume(v), t.exit("lineEnding"), x) : (t.enter("chunkString", {
      contentType: "string"
    }), b(v));
  }
  function b(v) {
    return v === null || v === 91 || v === 93 || _e(v) || p++ > 999 ? (t.exit("chunkString"), x(v)) : (t.consume(v), m || (m = !Be(v)), v === 92 ? w : b);
  }
  function w(v) {
    return v === 91 || v === 92 || v === 93 ? (t.consume(v), p++, b) : b(v);
  }
}
function U0(t, i, a, o, s, c) {
  let f;
  return p;
  function p(w) {
    return w === 34 || w === 39 || w === 40 ? (t.enter(o), t.enter(s), t.consume(w), t.exit(s), f = w === 40 ? 41 : w, m) : a(w);
  }
  function m(w) {
    return w === f ? (t.enter(s), t.consume(w), t.exit(s), t.exit(o), i) : (t.enter(c), g(w));
  }
  function g(w) {
    return w === f ? (t.exit(c), m(f)) : w === null ? a(w) : _e(w) ? (t.enter("lineEnding"), t.consume(w), t.exit("lineEnding"), Qe(t, g, "linePrefix")) : (t.enter("chunkString", {
      contentType: "string"
    }), x(w));
  }
  function x(w) {
    return w === f || w === null || _e(w) ? (t.exit("chunkString"), g(w)) : (t.consume(w), w === 92 ? b : x);
  }
  function b(w) {
    return w === f || w === 92 ? (t.consume(w), x) : x(w);
  }
}
function xo(t, i) {
  let a;
  return o;
  function o(s) {
    return _e(s) ? (t.enter("lineEnding"), t.consume(s), t.exit("lineEnding"), a = !0, o) : Be(s) ? Qe(t, o, a ? "linePrefix" : "lineSuffix")(s) : i(s);
  }
}
const iT = {
  name: "definition",
  tokenize: aT
}, rT = {
  partial: !0,
  tokenize: lT
};
function aT(t, i, a) {
  const o = this;
  let s;
  return c;
  function c(v) {
    return t.enter("definition"), f(v);
  }
  function f(v) {
    return R0.call(
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
    return s = oi(o.sliceSerialize(o.events[o.events.length - 1][1]).slice(1, -1)), v === 58 ? (t.enter("definitionMarker"), t.consume(v), t.exit("definitionMarker"), m) : a(v);
  }
  function m(v) {
    return st(v) ? xo(t, g)(v) : g(v);
  }
  function g(v) {
    return M0(
      t,
      x,
      // Note: we don’t need to reset the way `markdown-rs` does.
      a,
      "definitionDestination",
      "definitionDestinationLiteral",
      "definitionDestinationLiteralMarker",
      "definitionDestinationRaw",
      "definitionDestinationString"
    )(v);
  }
  function x(v) {
    return t.attempt(rT, b, b)(v);
  }
  function b(v) {
    return Be(v) ? Qe(t, w, "whitespace")(v) : w(v);
  }
  function w(v) {
    return v === null || _e(v) ? (t.exit("definition"), o.parser.defined.push(s), i(v)) : a(v);
  }
}
function lT(t, i, a) {
  return o;
  function o(p) {
    return st(p) ? xo(t, s)(p) : a(p);
  }
  function s(p) {
    return U0(t, c, a, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(p);
  }
  function c(p) {
    return Be(p) ? Qe(t, f, "whitespace")(p) : f(p);
  }
  function f(p) {
    return p === null || _e(p) ? i(p) : a(p);
  }
}
const oT = {
  name: "hardBreakEscape",
  tokenize: sT
};
function sT(t, i, a) {
  return o;
  function o(c) {
    return t.enter("hardBreakEscape"), t.consume(c), s;
  }
  function s(c) {
    return _e(c) ? (t.exit("hardBreakEscape"), i(c)) : a(c);
  }
}
const uT = {
  name: "headingAtx",
  resolve: cT,
  tokenize: fT
};
function cT(t, i) {
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
    li(t, o, a - o + 1, [["enter", s, i], ["enter", c, i], ["exit", c, i], ["exit", s, i]]);
  }
  return t;
}
function fT(t, i, a) {
  let o = 0;
  return s;
  function s(x) {
    return t.enter("atxHeading"), c(x);
  }
  function c(x) {
    return t.enter("atxHeadingSequence"), f(x);
  }
  function f(x) {
    return x === 35 && o++ < 6 ? (t.consume(x), f) : x === null || st(x) ? (t.exit("atxHeadingSequence"), p(x)) : a(x);
  }
  function p(x) {
    return x === 35 ? (t.enter("atxHeadingSequence"), m(x)) : x === null || _e(x) ? (t.exit("atxHeading"), i(x)) : Be(x) ? Qe(t, p, "whitespace")(x) : (t.enter("atxHeadingText"), g(x));
  }
  function m(x) {
    return x === 35 ? (t.consume(x), m) : (t.exit("atxHeadingSequence"), p(x));
  }
  function g(x) {
    return x === null || x === 35 || st(x) ? (t.exit("atxHeadingText"), p(x)) : (t.consume(x), g);
  }
}
const dT = [
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
], Ey = ["pre", "script", "style", "textarea"], pT = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: mT,
  tokenize: gT
}, hT = {
  partial: !0,
  tokenize: bT
};
function mT(t) {
  let i = t.length;
  for (; i-- && !(t[i][0] === "enter" && t[i][1].type === "htmlFlow"); )
    ;
  return i > 1 && t[i - 2][1].type === "linePrefix" && (t[i][1].start = t[i - 2][1].start, t[i + 1][1].start = t[i - 2][1].start, t.splice(i - 2, 2)), t;
}
function gT(t, i, a) {
  const o = this;
  let s, c, f, p, m;
  return g;
  function g(T) {
    return x(T);
  }
  function x(T) {
    return t.enter("htmlFlow"), t.enter("htmlFlowData"), t.consume(T), b;
  }
  function b(T) {
    return T === 33 ? (t.consume(T), w) : T === 47 ? (t.consume(T), c = !0, j) : T === 63 ? (t.consume(T), s = 3, o.interrupt ? i : z) : ln(T) ? (t.consume(T), f = String.fromCharCode(T), E) : a(T);
  }
  function w(T) {
    return T === 45 ? (t.consume(T), s = 2, v) : T === 91 ? (t.consume(T), s = 5, p = 0, S) : ln(T) ? (t.consume(T), s = 4, o.interrupt ? i : z) : a(T);
  }
  function v(T) {
    return T === 45 ? (t.consume(T), o.interrupt ? i : z) : a(T);
  }
  function S(T) {
    const C = "CDATA[";
    return T === C.charCodeAt(p++) ? (t.consume(T), p === C.length ? o.interrupt ? i : le : S) : a(T);
  }
  function j(T) {
    return ln(T) ? (t.consume(T), f = String.fromCharCode(T), E) : a(T);
  }
  function E(T) {
    if (T === null || T === 47 || T === 62 || st(T)) {
      const C = T === 47, J = f.toLowerCase();
      return !C && !c && Ey.includes(J) ? (s = 1, o.interrupt ? i(T) : le(T)) : dT.includes(f.toLowerCase()) ? (s = 6, C ? (t.consume(T), O) : o.interrupt ? i(T) : le(T)) : (s = 7, o.interrupt && !o.parser.lazy[o.now().line] ? a(T) : c ? B(T) : U(T));
    }
    return T === 45 || Pt(T) ? (t.consume(T), f += String.fromCharCode(T), E) : a(T);
  }
  function O(T) {
    return T === 62 ? (t.consume(T), o.interrupt ? i : le) : a(T);
  }
  function B(T) {
    return Be(T) ? (t.consume(T), B) : Z(T);
  }
  function U(T) {
    return T === 47 ? (t.consume(T), Z) : T === 58 || T === 95 || ln(T) ? (t.consume(T), V) : Be(T) ? (t.consume(T), U) : Z(T);
  }
  function V(T) {
    return T === 45 || T === 46 || T === 58 || T === 95 || Pt(T) ? (t.consume(T), V) : K(T);
  }
  function K(T) {
    return T === 61 ? (t.consume(T), N) : Be(T) ? (t.consume(T), K) : U(T);
  }
  function N(T) {
    return T === null || T === 60 || T === 61 || T === 62 || T === 96 ? a(T) : T === 34 || T === 39 ? (t.consume(T), m = T, X) : Be(T) ? (t.consume(T), N) : pe(T);
  }
  function X(T) {
    return T === m ? (t.consume(T), m = null, je) : T === null || _e(T) ? a(T) : (t.consume(T), X);
  }
  function pe(T) {
    return T === null || T === 34 || T === 39 || T === 47 || T === 60 || T === 61 || T === 62 || T === 96 || st(T) ? K(T) : (t.consume(T), pe);
  }
  function je(T) {
    return T === 47 || T === 62 || Be(T) ? U(T) : a(T);
  }
  function Z(T) {
    return T === 62 ? (t.consume(T), ne) : a(T);
  }
  function ne(T) {
    return T === null || _e(T) ? le(T) : Be(T) ? (t.consume(T), ne) : a(T);
  }
  function le(T) {
    return T === 45 && s === 2 ? (t.consume(T), W) : T === 60 && s === 1 ? (t.consume(T), ce) : T === 62 && s === 4 ? (t.consume(T), Ve) : T === 63 && s === 3 ? (t.consume(T), z) : T === 93 && s === 5 ? (t.consume(T), Ne) : _e(T) && (s === 6 || s === 7) ? (t.exit("htmlFlowData"), t.check(hT, it, Te)(T)) : T === null || _e(T) ? (t.exit("htmlFlowData"), Te(T)) : (t.consume(T), le);
  }
  function Te(T) {
    return t.check(rp, oe, it)(T);
  }
  function oe(T) {
    return t.enter("lineEnding"), t.consume(T), t.exit("lineEnding"), te;
  }
  function te(T) {
    return T === null || _e(T) ? Te(T) : (t.enter("htmlFlowData"), le(T));
  }
  function W(T) {
    return T === 45 ? (t.consume(T), z) : le(T);
  }
  function ce(T) {
    return T === 47 ? (t.consume(T), f = "", be) : le(T);
  }
  function be(T) {
    if (T === 62) {
      const C = f.toLowerCase();
      return Ey.includes(C) ? (t.consume(T), Ve) : le(T);
    }
    return ln(T) && f.length < 8 ? (t.consume(T), f += String.fromCharCode(T), be) : le(T);
  }
  function Ne(T) {
    return T === 93 ? (t.consume(T), z) : le(T);
  }
  function z(T) {
    return T === 62 ? (t.consume(T), Ve) : T === 45 && s === 2 ? (t.consume(T), z) : le(T);
  }
  function Ve(T) {
    return T === null || _e(T) ? (t.exit("htmlFlowData"), it(T)) : (t.consume(T), Ve);
  }
  function it(T) {
    return t.exit("htmlFlow"), i(T);
  }
}
function bT(t, i, a) {
  return o;
  function o(s) {
    return t.enter("lineEnding"), t.consume(s), t.exit("lineEnding"), t.attempt(jo, i, a);
  }
}
const xT = {
  name: "htmlText",
  tokenize: yT
};
function yT(t, i, a) {
  const o = this;
  let s, c, f;
  return p;
  function p(z) {
    return t.enter("htmlText"), t.enter("htmlTextData"), t.consume(z), m;
  }
  function m(z) {
    return z === 33 ? (t.consume(z), g) : z === 47 ? (t.consume(z), K) : z === 63 ? (t.consume(z), U) : ln(z) ? (t.consume(z), pe) : a(z);
  }
  function g(z) {
    return z === 45 ? (t.consume(z), x) : z === 91 ? (t.consume(z), c = 0, S) : ln(z) ? (t.consume(z), B) : a(z);
  }
  function x(z) {
    return z === 45 ? (t.consume(z), v) : a(z);
  }
  function b(z) {
    return z === null ? a(z) : z === 45 ? (t.consume(z), w) : _e(z) ? (f = b, ce(z)) : (t.consume(z), b);
  }
  function w(z) {
    return z === 45 ? (t.consume(z), v) : b(z);
  }
  function v(z) {
    return z === 62 ? W(z) : z === 45 ? w(z) : b(z);
  }
  function S(z) {
    const Ve = "CDATA[";
    return z === Ve.charCodeAt(c++) ? (t.consume(z), c === Ve.length ? j : S) : a(z);
  }
  function j(z) {
    return z === null ? a(z) : z === 93 ? (t.consume(z), E) : _e(z) ? (f = j, ce(z)) : (t.consume(z), j);
  }
  function E(z) {
    return z === 93 ? (t.consume(z), O) : j(z);
  }
  function O(z) {
    return z === 62 ? W(z) : z === 93 ? (t.consume(z), O) : j(z);
  }
  function B(z) {
    return z === null || z === 62 ? W(z) : _e(z) ? (f = B, ce(z)) : (t.consume(z), B);
  }
  function U(z) {
    return z === null ? a(z) : z === 63 ? (t.consume(z), V) : _e(z) ? (f = U, ce(z)) : (t.consume(z), U);
  }
  function V(z) {
    return z === 62 ? W(z) : U(z);
  }
  function K(z) {
    return ln(z) ? (t.consume(z), N) : a(z);
  }
  function N(z) {
    return z === 45 || Pt(z) ? (t.consume(z), N) : X(z);
  }
  function X(z) {
    return _e(z) ? (f = X, ce(z)) : Be(z) ? (t.consume(z), X) : W(z);
  }
  function pe(z) {
    return z === 45 || Pt(z) ? (t.consume(z), pe) : z === 47 || z === 62 || st(z) ? je(z) : a(z);
  }
  function je(z) {
    return z === 47 ? (t.consume(z), W) : z === 58 || z === 95 || ln(z) ? (t.consume(z), Z) : _e(z) ? (f = je, ce(z)) : Be(z) ? (t.consume(z), je) : W(z);
  }
  function Z(z) {
    return z === 45 || z === 46 || z === 58 || z === 95 || Pt(z) ? (t.consume(z), Z) : ne(z);
  }
  function ne(z) {
    return z === 61 ? (t.consume(z), le) : _e(z) ? (f = ne, ce(z)) : Be(z) ? (t.consume(z), ne) : je(z);
  }
  function le(z) {
    return z === null || z === 60 || z === 61 || z === 62 || z === 96 ? a(z) : z === 34 || z === 39 ? (t.consume(z), s = z, Te) : _e(z) ? (f = le, ce(z)) : Be(z) ? (t.consume(z), le) : (t.consume(z), oe);
  }
  function Te(z) {
    return z === s ? (t.consume(z), s = void 0, te) : z === null ? a(z) : _e(z) ? (f = Te, ce(z)) : (t.consume(z), Te);
  }
  function oe(z) {
    return z === null || z === 34 || z === 39 || z === 60 || z === 61 || z === 96 ? a(z) : z === 47 || z === 62 || st(z) ? je(z) : (t.consume(z), oe);
  }
  function te(z) {
    return z === 47 || z === 62 || st(z) ? je(z) : a(z);
  }
  function W(z) {
    return z === 62 ? (t.consume(z), t.exit("htmlTextData"), t.exit("htmlText"), i) : a(z);
  }
  function ce(z) {
    return t.exit("htmlTextData"), t.enter("lineEnding"), t.consume(z), t.exit("lineEnding"), be;
  }
  function be(z) {
    return Be(z) ? Qe(t, Ne, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(z) : Ne(z);
  }
  function Ne(z) {
    return t.enter("htmlTextData"), f(z);
  }
}
const Bp = {
  name: "labelEnd",
  resolveAll: ST,
  resolveTo: zT,
  tokenize: _T
}, vT = {
  tokenize: jT
}, wT = {
  tokenize: ET
}, kT = {
  tokenize: CT
};
function ST(t) {
  let i = -1;
  const a = [];
  for (; ++i < t.length; ) {
    const o = t[i][1];
    if (a.push(t[i]), o.type === "labelImage" || o.type === "labelLink" || o.type === "labelEnd") {
      const s = o.type === "labelImage" ? 4 : 2;
      o.type = "data", i += s;
    }
  }
  return t.length !== a.length && li(t, 0, t.length, a), t;
}
function zT(t, i) {
  let a = t.length, o = 0, s, c, f;
  for (; a--; ) {
    const x = t[a][1];
    if (s) {
      if (x.type === "link" || x.type === "labelLink" && x._inactive)
        break;
      t[a][0] === "enter" && x.type === "labelLink" && (x._inactive = !0);
    } else if (c) {
      if (t[a][0] === "enter" && (x.type === "labelImage" || x.type === "labelLink") && !x._balanced && (s = a, x.type !== "labelLink")) {
        o = 2;
        break;
      }
    } else x.type === "labelEnd" && (c = a);
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
  return f = [["enter", p, i], ["enter", m, i]], f = Pn(f, t.slice(s + 1, s + o + 3)), f = Pn(f, [["enter", g, i]]), f = Pn(f, Au(i.parser.constructs.insideSpan.null, t.slice(s + o + 4, c - 3), i)), f = Pn(f, [["exit", g, i], t[c - 2], t[c - 1], ["exit", m, i]]), f = Pn(f, t.slice(c + 1)), f = Pn(f, [["exit", p, i]]), li(t, s, t.length, f), t;
}
function _T(t, i, a) {
  const o = this, s = o._labelStarts;
  let c, f;
  if (s) {
    for (; s.length > 0 && s[s.length - 1]._balanced; )
      s.pop();
    c = s[s.length - 1];
  }
  return p;
  function p(w) {
    return c ? c._inactive ? b(w) : (f = o.parser.defined.includes(oi(o.sliceSerialize({
      start: c.end,
      end: o.now()
    }))), t.enter("labelEnd"), t.enter("labelMarker"), t.consume(w), t.exit("labelMarker"), t.exit("labelEnd"), m) : a(w);
  }
  function m(w) {
    return w === 40 ? t.attempt(vT, x, f ? x : b)(w) : w === 91 ? t.attempt(wT, x, f ? g : b)(w) : f ? x(w) : b(w);
  }
  function g(w) {
    return t.attempt(kT, x, b)(w);
  }
  function x(w) {
    return s.pop(), i(w);
  }
  function b(w) {
    return c._balanced = !0, a(w);
  }
}
function jT(t, i, a) {
  return o;
  function o(b) {
    return t.enter("resource"), t.enter("resourceMarker"), t.consume(b), t.exit("resourceMarker"), s;
  }
  function s(b) {
    return st(b) ? xo(t, c)(b) : c(b);
  }
  function c(b) {
    return b === 41 ? x(b) : M0(t, f, p, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(b);
  }
  function f(b) {
    return st(b) ? xo(t, m)(b) : x(b);
  }
  function p(b) {
    return a(b);
  }
  function m(b) {
    return b === 34 || b === 39 || b === 40 ? U0(t, g, a, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(b) : x(b);
  }
  function g(b) {
    return st(b) ? xo(t, x)(b) : x(b);
  }
  function x(b) {
    return b === 41 ? (t.enter("resourceMarker"), t.consume(b), t.exit("resourceMarker"), t.exit("resource"), i) : a(b);
  }
}
function ET(t, i, a) {
  const o = this;
  return s;
  function s(p) {
    return R0.call(o, t, c, f, "reference", "referenceMarker", "referenceString")(p);
  }
  function c(p) {
    return o.parser.defined.includes(oi(o.sliceSerialize(o.events[o.events.length - 1][1]).slice(1, -1))) ? i(p) : a(p);
  }
  function f(p) {
    return a(p);
  }
}
function CT(t, i, a) {
  return o;
  function o(c) {
    return t.enter("reference"), t.enter("referenceMarker"), t.consume(c), t.exit("referenceMarker"), s;
  }
  function s(c) {
    return c === 93 ? (t.enter("referenceMarker"), t.consume(c), t.exit("referenceMarker"), t.exit("reference"), i) : a(c);
  }
}
const TT = {
  name: "labelStartImage",
  resolveAll: Bp.resolveAll,
  tokenize: NT
};
function NT(t, i, a) {
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
const AT = {
  name: "labelStartLink",
  resolveAll: Bp.resolveAll,
  tokenize: OT
};
function OT(t, i, a) {
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
const Ed = {
  name: "lineEnding",
  tokenize: DT
};
function DT(t, i) {
  return a;
  function a(o) {
    return t.enter("lineEnding"), t.consume(o), t.exit("lineEnding"), Qe(t, i, "linePrefix");
  }
}
const fu = {
  name: "thematicBreak",
  tokenize: MT
};
function MT(t, i, a) {
  let o = 0, s;
  return c;
  function c(g) {
    return t.enter("thematicBreak"), f(g);
  }
  function f(g) {
    return s = g, p(g);
  }
  function p(g) {
    return g === s ? (t.enter("thematicBreakSequence"), m(g)) : o >= 3 && (g === null || _e(g)) ? (t.exit("thematicBreak"), i(g)) : a(g);
  }
  function m(g) {
    return g === s ? (t.consume(g), o++, m) : (t.exit("thematicBreakSequence"), Be(g) ? Qe(t, p, "whitespace")(g) : p(g));
  }
}
const gn = {
  continuation: {
    tokenize: BT
  },
  exit: HT,
  name: "list",
  tokenize: LT
}, RT = {
  partial: !0,
  tokenize: ZT
}, UT = {
  partial: !0,
  tokenize: IT
};
function LT(t, i, a) {
  const o = this, s = o.events[o.events.length - 1];
  let c = s && s[1].type === "linePrefix" ? s[2].sliceSerialize(s[1], !0).length : 0, f = 0;
  return p;
  function p(v) {
    const S = o.containerState.type || (v === 42 || v === 43 || v === 45 ? "listUnordered" : "listOrdered");
    if (S === "listUnordered" ? !o.containerState.marker || v === o.containerState.marker : np(v)) {
      if (o.containerState.type || (o.containerState.type = S, t.enter(S, {
        _container: !0
      })), S === "listUnordered")
        return t.enter("listItemPrefix"), v === 42 || v === 45 ? t.check(fu, a, g)(v) : g(v);
      if (!o.interrupt || v === 49)
        return t.enter("listItemPrefix"), t.enter("listItemValue"), m(v);
    }
    return a(v);
  }
  function m(v) {
    return np(v) && ++f < 10 ? (t.consume(v), m) : (!o.interrupt || f < 2) && (o.containerState.marker ? v === o.containerState.marker : v === 41 || v === 46) ? (t.exit("listItemValue"), g(v)) : a(v);
  }
  function g(v) {
    return t.enter("listItemMarker"), t.consume(v), t.exit("listItemMarker"), o.containerState.marker = o.containerState.marker || v, t.check(
      jo,
      // Can’t be empty when interrupting.
      o.interrupt ? a : x,
      t.attempt(RT, w, b)
    );
  }
  function x(v) {
    return o.containerState.initialBlankLine = !0, c++, w(v);
  }
  function b(v) {
    return Be(v) ? (t.enter("listItemPrefixWhitespace"), t.consume(v), t.exit("listItemPrefixWhitespace"), w) : a(v);
  }
  function w(v) {
    return o.containerState.size = c + o.sliceSerialize(t.exit("listItemPrefix"), !0).length, i(v);
  }
}
function BT(t, i, a) {
  const o = this;
  return o.containerState._closeFlow = void 0, t.check(jo, s, c);
  function s(p) {
    return o.containerState.furtherBlankLines = o.containerState.furtherBlankLines || o.containerState.initialBlankLine, Qe(t, i, "listItemIndent", o.containerState.size + 1)(p);
  }
  function c(p) {
    return o.containerState.furtherBlankLines || !Be(p) ? (o.containerState.furtherBlankLines = void 0, o.containerState.initialBlankLine = void 0, f(p)) : (o.containerState.furtherBlankLines = void 0, o.containerState.initialBlankLine = void 0, t.attempt(UT, i, f)(p));
  }
  function f(p) {
    return o.containerState._closeFlow = !0, o.interrupt = void 0, Qe(t, t.attempt(gn, i, a), "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(p);
  }
}
function IT(t, i, a) {
  const o = this;
  return Qe(t, s, "listItemIndent", o.containerState.size + 1);
  function s(c) {
    const f = o.events[o.events.length - 1];
    return f && f[1].type === "listItemIndent" && f[2].sliceSerialize(f[1], !0).length === o.containerState.size ? i(c) : a(c);
  }
}
function HT(t) {
  t.exit(this.containerState.type);
}
function ZT(t, i, a) {
  const o = this;
  return Qe(t, s, "listItemPrefixWhitespace", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function s(c) {
    const f = o.events[o.events.length - 1];
    return !Be(c) && f && f[1].type === "listItemPrefixWhitespace" ? i(c) : a(c);
  }
}
const Cy = {
  name: "setextUnderline",
  resolveTo: qT,
  tokenize: $T
};
function qT(t, i) {
  const a = new ku();
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
function $T(t, i, a) {
  const o = this;
  let s;
  return c;
  function c(g) {
    let x = o.events.length, b;
    for (; x--; )
      if (o.events[x][1].type !== "lineEnding" && o.events[x][1].type !== "linePrefix" && o.events[x][1].type !== "content") {
        b = o.events[x][1].type === "paragraph";
        break;
      }
    return !o.parser.lazy[o.now().line] && (o.interrupt || b) ? (t.enter("setextHeadingLine"), s = g, f(g)) : a(g);
  }
  function f(g) {
    return t.enter("setextHeadingLineSequence"), p(g);
  }
  function p(g) {
    return g === s ? (t.consume(g), p) : (t.exit("setextHeadingLineSequence"), Be(g) ? Qe(t, m, "lineSuffix")(g) : m(g));
  }
  function m(g) {
    return g === null || _e(g) ? (t.exit("setextHeadingLine"), i(g)) : a(g);
  }
}
const VT = {
  tokenize: YT
};
function YT(t) {
  const i = this, a = t.attempt(
    // Try to parse a blank line.
    jo,
    o,
    // Try to parse initial flow (essentially, only code).
    t.attempt(this.parser.constructs.flowInitial, s, Qe(t, t.attempt(this.parser.constructs.flow, s, t.attempt(JC, s)), "linePrefix"))
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
const GT = {
  resolveAll: B0()
}, FT = L0("string"), XT = L0("text");
function L0(t) {
  return {
    resolveAll: B0(t === "text" ? QT : void 0),
    tokenize: i
  };
  function i(a) {
    const o = this, s = this.parser.constructs[t], c = a.attempt(s, f, p);
    return f;
    function f(x) {
      return g(x) ? c(x) : p(x);
    }
    function p(x) {
      if (x === null) {
        a.consume(x);
        return;
      }
      return a.enter("data"), a.consume(x), m;
    }
    function m(x) {
      return g(x) ? (a.exit("data"), c(x)) : (a.consume(x), m);
    }
    function g(x) {
      if (x === null)
        return !0;
      const b = s[x];
      let w = -1;
      if (b)
        for (; ++w < b.length; ) {
          const v = b[w];
          if (!v.previous || v.previous.call(o, o.previous))
            return !0;
        }
      return !1;
    }
  }
}
function B0(t) {
  return i;
  function i(a, o) {
    let s = -1, c;
    for (; ++s <= a.length; )
      c === void 0 ? a[s] && a[s][1].type === "data" && (c = s, s++) : (!a[s] || a[s][1].type !== "data") && (s !== c + 2 && (a[c][1].end = a[s - 1][1].end, a.splice(c + 2, s - c - 2), s = c + 2), c = void 0);
    return t ? t(a, o) : a;
  }
}
function QT(t, i) {
  const a = new ku();
  let o = 0;
  for (; ++o <= t.length; )
    if ((o === t.length || t[o][1].type === "lineEnding") && t[o - 1][1].type === "data") {
      const s = t[o - 1][1], c = i.sliceStream(s);
      let f = c.length, p = -1, m = 0, g;
      for (; f--; ) {
        const x = c[f];
        if (typeof x == "string") {
          for (p = x.length; x.charCodeAt(p - 1) === 32; )
            m++, p--;
          if (p)
            break;
          p = -1;
        } else if (x === -2)
          g = !0, m++;
        else if (x !== -1) {
          f++;
          break;
        }
      }
      if (i._contentTypeTextTrailing && o === t.length && (m = 0), m) {
        const x = {
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
          ...x.start
        }, s.start.offset === s.end.offset ? Object.assign(s, x) : a.add(o, 0, [["enter", x, i], ["exit", x, i]]);
      }
      o++;
    }
  return a.consume(t), t;
}
const PT = {
  42: gn,
  43: gn,
  45: gn,
  48: gn,
  49: gn,
  50: gn,
  51: gn,
  52: gn,
  53: gn,
  54: gn,
  55: gn,
  56: gn,
  57: gn,
  62: N0
}, KT = {
  91: iT
}, JT = {
  [-2]: jd,
  [-1]: jd,
  32: jd
}, WT = {
  35: uT,
  42: fu,
  45: [Cy, fu],
  60: pT,
  61: Cy,
  95: fu,
  96: jy,
  126: jy
}, e5 = {
  38: O0,
  92: A0
}, t5 = {
  [-5]: Ed,
  [-4]: Ed,
  [-3]: Ed,
  33: TT,
  38: O0,
  42: ip,
  60: [DC, xT],
  91: AT,
  92: [oT, A0],
  93: Bp,
  95: ip,
  96: GC
}, n5 = {
  null: [ip, GT]
}, i5 = {
  null: [42, 95]
}, r5 = {
  null: []
}, a5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: i5,
  contentInitial: KT,
  disable: r5,
  document: PT,
  flow: WT,
  flowInitial: JT,
  insideSpan: n5,
  string: e5,
  text: t5
}, Symbol.toStringTag, { value: "Module" }));
function l5(t, i, a) {
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
    attempt: X(K),
    check: X(N),
    consume: B,
    enter: U,
    exit: V,
    interrupt: X(N, {
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
    write: b
  };
  let x = i.tokenize.call(g, m);
  return i.resolveAll && c.push(i), g;
  function b(ne) {
    return f = Pn(f, ne), E(), f[f.length - 1] !== null ? [] : (pe(i, 0), g.events = Au(c, g.events, g), g.events);
  }
  function w(ne, le) {
    return s5(v(ne), le);
  }
  function v(ne) {
    return o5(f, ne);
  }
  function S() {
    const {
      _bufferIndex: ne,
      _index: le,
      line: Te,
      column: oe,
      offset: te
    } = o;
    return {
      _bufferIndex: ne,
      _index: le,
      line: Te,
      column: oe,
      offset: te
    };
  }
  function j(ne) {
    s[ne.line] = ne.column, Z();
  }
  function E() {
    for (; o._index < f.length; ) {
      const ne = f[o._index];
      if (typeof ne == "string") {
        const le = o._index;
        for (o._bufferIndex < 0 && (o._bufferIndex = 0); o._index === le && o._bufferIndex < ne.length; )
          O(ne.charCodeAt(o._bufferIndex));
      } else
        O(ne);
    }
  }
  function O(ne) {
    x = x(ne);
  }
  function B(ne) {
    _e(ne) ? (o.line++, o.column = 1, o.offset += ne === -3 ? 2 : 1, Z()) : ne !== -1 && (o.column++, o.offset++), o._bufferIndex < 0 ? o._index++ : (o._bufferIndex++, o._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    f[o._index].length && (o._bufferIndex = -1, o._index++)), g.previous = ne;
  }
  function U(ne, le) {
    const Te = le || {};
    return Te.type = ne, Te.start = S(), g.events.push(["enter", Te, g]), p.push(Te), Te;
  }
  function V(ne) {
    const le = p.pop();
    return le.end = S(), g.events.push(["exit", le, g]), le;
  }
  function K(ne, le) {
    pe(ne, le.from);
  }
  function N(ne, le) {
    le.restore();
  }
  function X(ne, le) {
    return Te;
    function Te(oe, te, W) {
      let ce, be, Ne, z;
      return Array.isArray(oe) ? (
        /* c8 ignore next 1 */
        it(oe)
      ) : "tokenize" in oe ? (
        // Looks like a construct.
        it([
          /** @type {Construct} */
          oe
        ])
      ) : Ve(oe);
      function Ve(re) {
        return ge;
        function ge(Ce) {
          const $ = Ce !== null && re[Ce], he = Ce !== null && re.null, ae = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray($) ? $ : $ ? [$] : [],
            ...Array.isArray(he) ? he : he ? [he] : []
          ];
          return it(ae)(Ce);
        }
      }
      function it(re) {
        return ce = re, be = 0, re.length === 0 ? W : T(re[be]);
      }
      function T(re) {
        return ge;
        function ge(Ce) {
          return z = je(), Ne = re, re.partial || (g.currentConstruct = re), re.name && g.parser.constructs.disable.null.includes(re.name) ? J() : re.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            le ? Object.assign(Object.create(g), le) : g,
            m,
            C,
            J
          )(Ce);
        }
      }
      function C(re) {
        return ne(Ne, z), te;
      }
      function J(re) {
        return z.restore(), ++be < ce.length ? T(ce[be]) : W;
      }
    }
  }
  function pe(ne, le) {
    ne.resolveAll && !c.includes(ne) && c.push(ne), ne.resolve && li(g.events, le, g.events.length - le, ne.resolve(g.events.slice(le), g)), ne.resolveTo && (g.events = ne.resolveTo(g.events, g));
  }
  function je() {
    const ne = S(), le = g.previous, Te = g.currentConstruct, oe = g.events.length, te = Array.from(p);
    return {
      from: oe,
      restore: W
    };
    function W() {
      o = ne, g.previous = le, g.currentConstruct = Te, g.events.length = oe, p = te, Z();
    }
  }
  function Z() {
    o.line in s && o.column < 2 && (o.column = s[o.line], o.offset += s[o.line] - 1);
  }
}
function o5(t, i) {
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
function s5(t, i) {
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
function u5(t) {
  const o = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      E0([a5, ...(t || {}).extensions || []])
    ),
    content: s(jC),
    defined: [],
    document: s(CC),
    flow: s(VT),
    lazy: {},
    string: s(FT),
    text: s(XT)
  };
  return o;
  function s(c) {
    return f;
    function f(p) {
      return l5(o, c, p);
    }
  }
}
function c5(t) {
  for (; !D0(t); )
    ;
  return t;
}
const Ty = /[\0\t\n\r]/g;
function f5() {
  let t = 1, i = "", a = !0, o;
  return s;
  function s(c, f, p) {
    c = i + (typeof c == "string" ? c.toString() : new TextDecoder(f || void 0).decode(c));
    const m = [];
    let g = 0;
    for (i = "", a && (c.charCodeAt(0) === 65279 && g++, a = void 0); g < c.length; ) {
      Ty.lastIndex = g;
      const x = Ty.exec(c), b = x && x.index !== void 0 ? x.index : c.length, w = c.charCodeAt(b);
      if (!x) {
        i = c.slice(g);
        break;
      }
      if (w === 10 && g === b && o)
        m.push(-3), o = void 0;
      else
        switch (o && (m.push(-5), o = void 0), g < b && (m.push(c.slice(g, b)), t += b - g), w) {
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
      g = b + 1;
    }
    return p && (o && m.push(-5), i && m.push(i), m.push(null)), m;
  }
}
const d5 = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function p5(t) {
  return t.replace(d5, h5);
}
function h5(t, i, a) {
  if (i)
    return i;
  if (a.charCodeAt(0) === 35) {
    const s = a.charCodeAt(1), c = s === 120 || s === 88;
    return C0(a.slice(c ? 2 : 1), c ? 16 : 10);
  }
  return Lp(a) || t;
}
const I0 = {}.hasOwnProperty;
function m5(t, i, a) {
  return i && typeof i == "object" && (a = i, i = void 0), g5(a)(c5(u5(a).document().write(f5()(t, i, !0))));
}
function g5(t) {
  const i = {
    afterExit: [],
    beforeEnter: [],
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: f(Xt),
      autolinkProtocol: Z,
      autolinkEmail: Z,
      atxHeading: f(at),
      blockQuote: f(ae),
      characterEscape: Z,
      characterReference: Z,
      codeFenced: f(fe),
      codeFencedFenceInfo: p,
      codeFencedFenceMeta: p,
      codeIndented: f(fe, p),
      codeText: f(ft, p),
      codeTextData: Z,
      data: Z,
      codeFlowValue: Z,
      definition: f(vn),
      definitionDestinationString: p,
      definitionLabelString: p,
      definitionTitleString: p,
      emphasis: f(Jt),
      hardBreakEscape: f(Ie),
      hardBreakTrailing: f(Ie),
      htmlFlow: f(Ge, p),
      htmlFlowData: Z,
      htmlText: f(Ge, p),
      htmlTextData: Z,
      image: f(Ot),
      label: p,
      link: f(Xt),
      listItem: f(Mn),
      listItemValue: v,
      listOrdered: f(xt, w),
      listUnordered: f(xt),
      paragraph: f(zi),
      reference: C,
      referenceString: p,
      resourceDestinationString: p,
      resourceTitleString: p,
      setextHeading: f(at),
      strong: f(Rn),
      thematicBreak: f(Un)
    },
    exit: {
      atxHeading: g(),
      atxHeadingSequence: N,
      autolink: g(),
      autolinkEmail: he,
      autolinkProtocol: $,
      blockQuote: g(),
      characterEscapeValue: ne,
      characterReferenceMarkerHexadecimal: re,
      characterReferenceMarkerNumeric: re,
      characterReferenceValue: ge,
      characterReference: Ce,
      codeFenced: g(O),
      codeFencedFence: E,
      codeFencedFenceInfo: S,
      codeFencedFenceMeta: j,
      codeFlowValue: ne,
      codeIndented: g(B),
      codeText: g(W),
      codeTextData: ne,
      data: ne,
      definition: g(),
      definitionDestinationString: K,
      definitionLabelString: U,
      definitionTitleString: V,
      emphasis: g(),
      hardBreakEscape: g(Te),
      hardBreakTrailing: g(Te),
      htmlFlow: g(oe),
      htmlFlowData: ne,
      htmlText: g(te),
      htmlTextData: ne,
      image: g(be),
      label: z,
      labelText: Ne,
      lineEnding: le,
      link: g(ce),
      listItem: g(),
      listOrdered: g(),
      listUnordered: g(),
      paragraph: g(),
      referenceString: J,
      resourceDestinationString: Ve,
      resourceTitleString: it,
      resource: T,
      setextHeading: g(je),
      setextHeadingLineSequence: pe,
      setextHeadingText: X,
      strong: g(),
      thematicBreak: g()
    }
  };
  H0(i, (t || {}).mdastExtensions || []);
  const a = {};
  return o;
  function o(Y) {
    let ee = {
      type: "root",
      children: [],
      position: void 0
    };
    const ke = {
      stack: [ee],
      tokenStack: [],
      config: i,
      enter: m,
      exit: x,
      buffer: p,
      resume: b,
      data: a
    }, Ae = [], Ue = [];
    let Ke = -1;
    for (; ++Ke < Y.length; )
      if (Ue.push(Y[Ke]), Y[Ke][1].type === "listOrdered" || Y[Ke][1].type === "listUnordered")
        if (Y[Ke][0] === "enter")
          Ae.push(Ue.length - 1);
        else {
          const mt = Ae.pop();
          c(Ue, mt);
        }
    for (Y = Ue, Ke = -1; ++Ke < Y.length; ) {
      const mt = i[Y[Ke][0]];
      Y[Ke][0] === "enter" && i.beforeEnter.length > 0 && s(i.beforeEnter, {
        ...ke,
        sliceSerialize: Y[Ke][2].sliceSerialize
      }, Y[Ke][1]), I0.call(mt, Y[Ke][1].type) && mt[Y[Ke][1].type].call({
        ...ke,
        sliceSerialize: Y[Ke][2].sliceSerialize
      }, Y[Ke][1]), Y[Ke][0] === "exit" && i.afterExit.length > 0 && s(i.afterExit, {
        ...ke,
        sliceSerialize: Y[Ke][2].sliceSerialize
      }, Y[Ke][1]);
    }
    if (ke.tokenStack.length > 0) {
      const mt = ke.tokenStack[ke.tokenStack.length - 1];
      (mt[1] || Ny).call(ke, void 0, mt[0]);
    }
    for (ee.position = {
      start: yr(Y.length > 0 ? Y[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: yr(Y.length > 0 ? Y[Y.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, Ke = -1; ++Ke < i.transforms.length; )
      ee = i.transforms[Ke](ee) || ee;
    return ee;
  }
  function s(Y, ee, ke) {
    let Ae = -1;
    for (; ++Ae < Y.length; )
      Y[Ae].call(ee, ke);
  }
  function c(Y, ee) {
    const ke = Y.length - 1;
    let Ae = ee - 1, Ue = -1, Ke = !1, mt, _t, wn, Ln;
    const on = [];
    for (; ++Ae <= ke; ) {
      const Dt = Y[Ae];
      switch (Dt[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          Dt[0] === "enter" ? Ue++ : Ue--, Ln = void 0;
          break;
        }
        case "lineEndingBlank": {
          Dt[0] === "enter" && (mt && !Ln && !Ue && !wn && (wn = Ae), Ln = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Ln = void 0;
      }
      if (!Ue && Dt[0] === "enter" && Dt[1].type === "listItemPrefix" || Ue === -1 && Dt[0] === "exit" && (Dt[1].type === "listUnordered" || Dt[1].type === "listOrdered")) {
        if (mt) {
          let Bn = Ae;
          for (_t = void 0; Bn--; ) {
            const sn = Y[Bn];
            if (sn[1].type === "lineEnding" || sn[1].type === "lineEndingBlank") {
              if (sn[0] === "exit") continue;
              _t && (Y[_t][1].type = "lineEndingBlank", Ke = !0), sn[1].type = "lineEnding", _t = Bn;
            } else if (!(sn[1].type === "linePrefix" || sn[1].type === "blockQuotePrefix" || sn[1].type === "blockQuotePrefixWhitespace" || sn[1].type === "blockQuoteMarker" || sn[1].type === "listItemIndent")) break;
          }
          wn && (!_t || wn < _t) && (mt._spread = !0), mt.end = Object.assign({}, _t ? Y[_t][1].start : Dt[1].end), on.push({
            at: _t || Ae,
            event: ["exit", mt, Dt[2]]
          });
        }
        if (Dt[1].type === "listItemPrefix") {
          const Bn = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, Dt[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          mt = Bn, on.push({
            at: Ae,
            event: ["enter", Bn, Dt[2]]
          }), wn = void 0, Ln = !0;
        }
      }
    }
    const Wt = Y.splice(ee);
    let dt = 0;
    for (Ae = -1; ++Ae < Wt.length; ) {
      for (; dt < on.length && on[dt].at === ee + Ae; )
        Y.push(on[dt++].event);
      Y.push(Wt[Ae]);
    }
    Y[ee][1]._spread = Ke;
  }
  function f(Y, ee) {
    return ke;
    function ke(Ae) {
      m.call(this, Y(Ae), Ae), ee && ee.call(this, Ae);
    }
  }
  function p() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function m(Y, ee, ke) {
    this.stack[this.stack.length - 1].children.push(Y), this.stack.push(Y), this.tokenStack.push([ee, ke || void 0]), Y.position = {
      start: yr(ee.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function g(Y) {
    return ee;
    function ee(ke) {
      Y && Y.call(this, ke), x.call(this, ke);
    }
  }
  function x(Y, ee) {
    const ke = this.stack.pop(), Ae = this.tokenStack.pop();
    if (!Ae)
      throw new Error("Cannot close `" + Y.type + "` (" + bo({
        start: Y.start,
        end: Y.end
      }) + "): it’s not open");
    Ae[0].type !== Y.type && (ee ? ee.call(this, Y, Ae[0]) : (Ae[1] || Ny).call(this, Y, Ae[0])), ke.position.end = yr(Y.end);
  }
  function b() {
    return Up(this.stack.pop());
  }
  function w() {
    this.data.expectingFirstListItemValue = !0;
  }
  function v(Y) {
    if (this.data.expectingFirstListItemValue) {
      const ee = this.stack[this.stack.length - 2];
      ee.start = Number.parseInt(this.sliceSerialize(Y), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function S() {
    const Y = this.resume(), ee = this.stack[this.stack.length - 1];
    ee.lang = Y;
  }
  function j() {
    const Y = this.resume(), ee = this.stack[this.stack.length - 1];
    ee.meta = Y;
  }
  function E() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function O() {
    const Y = this.resume(), ee = this.stack[this.stack.length - 1];
    ee.value = Y.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function B() {
    const Y = this.resume(), ee = this.stack[this.stack.length - 1];
    ee.value = Y.replace(/(\r?\n|\r)$/g, "");
  }
  function U(Y) {
    const ee = this.resume(), ke = this.stack[this.stack.length - 1];
    ke.label = ee, ke.identifier = oi(this.sliceSerialize(Y)).toLowerCase();
  }
  function V() {
    const Y = this.resume(), ee = this.stack[this.stack.length - 1];
    ee.title = Y;
  }
  function K() {
    const Y = this.resume(), ee = this.stack[this.stack.length - 1];
    ee.url = Y;
  }
  function N(Y) {
    const ee = this.stack[this.stack.length - 1];
    if (!ee.depth) {
      const ke = this.sliceSerialize(Y).length;
      ee.depth = ke;
    }
  }
  function X() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function pe(Y) {
    const ee = this.stack[this.stack.length - 1];
    ee.depth = this.sliceSerialize(Y).codePointAt(0) === 61 ? 1 : 2;
  }
  function je() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function Z(Y) {
    const ke = this.stack[this.stack.length - 1].children;
    let Ae = ke[ke.length - 1];
    (!Ae || Ae.type !== "text") && (Ae = _i(), Ae.position = {
      start: yr(Y.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, ke.push(Ae)), this.stack.push(Ae);
  }
  function ne(Y) {
    const ee = this.stack.pop();
    ee.value += this.sliceSerialize(Y), ee.position.end = yr(Y.end);
  }
  function le(Y) {
    const ee = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const ke = ee.children[ee.children.length - 1];
      ke.position.end = yr(Y.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && i.canContainEols.includes(ee.type) && (Z.call(this, Y), ne.call(this, Y));
  }
  function Te() {
    this.data.atHardBreak = !0;
  }
  function oe() {
    const Y = this.resume(), ee = this.stack[this.stack.length - 1];
    ee.value = Y;
  }
  function te() {
    const Y = this.resume(), ee = this.stack[this.stack.length - 1];
    ee.value = Y;
  }
  function W() {
    const Y = this.resume(), ee = this.stack[this.stack.length - 1];
    ee.value = Y;
  }
  function ce() {
    const Y = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const ee = this.data.referenceType || "shortcut";
      Y.type += "Reference", Y.referenceType = ee, delete Y.url, delete Y.title;
    } else
      delete Y.identifier, delete Y.label;
    this.data.referenceType = void 0;
  }
  function be() {
    const Y = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const ee = this.data.referenceType || "shortcut";
      Y.type += "Reference", Y.referenceType = ee, delete Y.url, delete Y.title;
    } else
      delete Y.identifier, delete Y.label;
    this.data.referenceType = void 0;
  }
  function Ne(Y) {
    const ee = this.sliceSerialize(Y), ke = this.stack[this.stack.length - 2];
    ke.label = p5(ee), ke.identifier = oi(ee).toLowerCase();
  }
  function z() {
    const Y = this.stack[this.stack.length - 1], ee = this.resume(), ke = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, ke.type === "link") {
      const Ae = Y.children;
      ke.children = Ae;
    } else
      ke.alt = ee;
  }
  function Ve() {
    const Y = this.resume(), ee = this.stack[this.stack.length - 1];
    ee.url = Y;
  }
  function it() {
    const Y = this.resume(), ee = this.stack[this.stack.length - 1];
    ee.title = Y;
  }
  function T() {
    this.data.inReference = void 0;
  }
  function C() {
    this.data.referenceType = "collapsed";
  }
  function J(Y) {
    const ee = this.resume(), ke = this.stack[this.stack.length - 1];
    ke.label = ee, ke.identifier = oi(this.sliceSerialize(Y)).toLowerCase(), this.data.referenceType = "full";
  }
  function re(Y) {
    this.data.characterReferenceType = Y.type;
  }
  function ge(Y) {
    const ee = this.sliceSerialize(Y), ke = this.data.characterReferenceType;
    let Ae;
    ke ? (Ae = C0(ee, ke === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : Ae = Lp(ee);
    const Ue = this.stack[this.stack.length - 1];
    Ue.value += Ae;
  }
  function Ce(Y) {
    const ee = this.stack.pop();
    ee.position.end = yr(Y.end);
  }
  function $(Y) {
    ne.call(this, Y);
    const ee = this.stack[this.stack.length - 1];
    ee.url = this.sliceSerialize(Y);
  }
  function he(Y) {
    ne.call(this, Y);
    const ee = this.stack[this.stack.length - 1];
    ee.url = "mailto:" + this.sliceSerialize(Y);
  }
  function ae() {
    return {
      type: "blockquote",
      children: [],
      position: void 0
    };
  }
  function fe() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: "",
      position: void 0
    };
  }
  function ft() {
    return {
      type: "inlineCode",
      value: "",
      position: void 0
    };
  }
  function vn() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: "",
      position: void 0
    };
  }
  function Jt() {
    return {
      type: "emphasis",
      children: [],
      position: void 0
    };
  }
  function at() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: [],
      position: void 0
    };
  }
  function Ie() {
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
  function Ot() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null,
      position: void 0
    };
  }
  function Xt() {
    return {
      type: "link",
      title: null,
      url: "",
      children: [],
      position: void 0
    };
  }
  function xt(Y) {
    return {
      type: "list",
      ordered: Y.type === "listOrdered",
      start: null,
      spread: Y._spread,
      children: [],
      position: void 0
    };
  }
  function Mn(Y) {
    return {
      type: "listItem",
      spread: Y._spread,
      checked: null,
      children: [],
      position: void 0
    };
  }
  function zi() {
    return {
      type: "paragraph",
      children: [],
      position: void 0
    };
  }
  function Rn() {
    return {
      type: "strong",
      children: [],
      position: void 0
    };
  }
  function _i() {
    return {
      type: "text",
      value: "",
      position: void 0
    };
  }
  function Un() {
    return {
      type: "thematicBreak",
      position: void 0
    };
  }
}
function yr(t) {
  return {
    line: t.line,
    column: t.column,
    offset: t.offset
  };
}
function H0(t, i) {
  let a = -1;
  for (; ++a < i.length; ) {
    const o = i[a];
    Array.isArray(o) ? H0(t, o) : b5(t, o);
  }
}
function b5(t, i) {
  let a;
  for (a in i)
    if (I0.call(i, a))
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
function Ny(t, i) {
  throw t ? new Error("Cannot close `" + t.type + "` (" + bo({
    start: t.start,
    end: t.end
  }) + "): a different token (`" + i.type + "`, " + bo({
    start: i.start,
    end: i.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + i.type + "`, " + bo({
    start: i.start,
    end: i.end
  }) + ") is still open");
}
function x5(t) {
  const i = this;
  i.parser = a;
  function a(o) {
    return m5(o, {
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
function y5(t, i) {
  const a = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: t.wrap(t.all(i), !0)
  };
  return t.patch(i, a), t.applyData(i, a);
}
function v5(t, i) {
  const a = { type: "element", tagName: "br", properties: {}, children: [] };
  return t.patch(i, a), [t.applyData(i, a), { type: "text", value: `
` }];
}
function w5(t, i) {
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
function k5(t, i) {
  const a = {
    type: "element",
    tagName: "del",
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, a), t.applyData(i, a);
}
function S5(t, i) {
  const a = {
    type: "element",
    tagName: "em",
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, a), t.applyData(i, a);
}
function z5(t, i) {
  const a = typeof t.options.clobberPrefix == "string" ? t.options.clobberPrefix : "user-content-", o = String(i.identifier).toUpperCase(), s = cl(o.toLowerCase()), c = t.footnoteOrder.indexOf(o);
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
function _5(t, i) {
  const a = {
    type: "element",
    tagName: "h" + i.depth,
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, a), t.applyData(i, a);
}
function j5(t, i) {
  if (t.options.allowDangerousHtml) {
    const a = { type: "raw", value: i.value };
    return t.patch(i, a), t.applyData(i, a);
  }
}
function Z0(t, i) {
  const a = i.referenceType;
  let o = "]";
  if (a === "collapsed" ? o += "[]" : a === "full" && (o += "[" + (i.label || i.identifier) + "]"), i.type === "imageReference")
    return [{ type: "text", value: "![" + i.alt + o }];
  const s = t.all(i), c = s[0];
  c && c.type === "text" ? c.value = "[" + c.value : s.unshift({ type: "text", value: "[" });
  const f = s[s.length - 1];
  return f && f.type === "text" ? f.value += o : s.push({ type: "text", value: o }), s;
}
function E5(t, i) {
  const a = String(i.identifier).toUpperCase(), o = t.definitionById.get(a);
  if (!o)
    return Z0(t, i);
  const s = { src: cl(o.url || ""), alt: i.alt };
  o.title !== null && o.title !== void 0 && (s.title = o.title);
  const c = { type: "element", tagName: "img", properties: s, children: [] };
  return t.patch(i, c), t.applyData(i, c);
}
function C5(t, i) {
  const a = { src: cl(i.url) };
  i.alt !== null && i.alt !== void 0 && (a.alt = i.alt), i.title !== null && i.title !== void 0 && (a.title = i.title);
  const o = { type: "element", tagName: "img", properties: a, children: [] };
  return t.patch(i, o), t.applyData(i, o);
}
function T5(t, i) {
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
function N5(t, i) {
  const a = String(i.identifier).toUpperCase(), o = t.definitionById.get(a);
  if (!o)
    return Z0(t, i);
  const s = { href: cl(o.url || "") };
  o.title !== null && o.title !== void 0 && (s.title = o.title);
  const c = {
    type: "element",
    tagName: "a",
    properties: s,
    children: t.all(i)
  };
  return t.patch(i, c), t.applyData(i, c);
}
function A5(t, i) {
  const a = { href: cl(i.url) };
  i.title !== null && i.title !== void 0 && (a.title = i.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: a,
    children: t.all(i)
  };
  return t.patch(i, o), t.applyData(i, o);
}
function O5(t, i, a) {
  const o = t.all(i), s = a ? D5(a) : q0(i), c = {}, f = [];
  if (typeof i.checked == "boolean") {
    const x = o[0];
    let b;
    x && x.type === "element" && x.tagName === "p" ? b = x : (b = { type: "element", tagName: "p", properties: {}, children: [] }, o.unshift(b)), b.children.length > 0 && b.children.unshift({ type: "text", value: " " }), b.children.unshift({
      type: "element",
      tagName: "input",
      properties: { type: "checkbox", checked: i.checked, disabled: !0 },
      children: []
    }), c.className = ["task-list-item"];
  }
  let p = -1;
  for (; ++p < o.length; ) {
    const x = o[p];
    (s || p !== 0 || x.type !== "element" || x.tagName !== "p") && f.push({ type: "text", value: `
` }), x.type === "element" && x.tagName === "p" && !s ? f.push(...x.children) : f.push(x);
  }
  const m = o[o.length - 1];
  m && (s || m.type !== "element" || m.tagName !== "p") && f.push({ type: "text", value: `
` });
  const g = { type: "element", tagName: "li", properties: c, children: f };
  return t.patch(i, g), t.applyData(i, g);
}
function D5(t) {
  let i = !1;
  if (t.type === "list") {
    i = t.spread || !1;
    const a = t.children;
    let o = -1;
    for (; !i && ++o < a.length; )
      i = q0(a[o]);
  }
  return i;
}
function q0(t) {
  const i = t.spread;
  return i ?? t.children.length > 1;
}
function M5(t, i) {
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
function R5(t, i) {
  const a = {
    type: "element",
    tagName: "p",
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, a), t.applyData(i, a);
}
function U5(t, i) {
  const a = { type: "root", children: t.wrap(t.all(i)) };
  return t.patch(i, a), t.applyData(i, a);
}
function L5(t, i) {
  const a = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, a), t.applyData(i, a);
}
function B5(t, i) {
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
    }, p = Op(i.children[1]), m = v0(i.children[i.children.length - 1]);
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
function I5(t, i, a) {
  const o = a ? a.children : void 0, c = (o ? o.indexOf(i) : 1) === 0 ? "th" : "td", f = a && a.type === "table" ? a.align : void 0, p = f ? f.length : i.children.length;
  let m = -1;
  const g = [];
  for (; ++m < p; ) {
    const b = i.children[m], w = {}, v = f ? f[m] : void 0;
    v && (w.align = v);
    let S = { type: "element", tagName: c, properties: w, children: [] };
    b && (S.children = t.all(b), t.patch(b, S), S = t.applyData(b, S)), g.push(S);
  }
  const x = {
    type: "element",
    tagName: "tr",
    properties: {},
    children: t.wrap(g, !0)
  };
  return t.patch(i, x), t.applyData(i, x);
}
function H5(t, i) {
  const a = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, a), t.applyData(i, a);
}
const Ay = 9, Oy = 32;
function Z5(t) {
  const i = String(t), a = /\r?\n|\r/g;
  let o = a.exec(i), s = 0;
  const c = [];
  for (; o; )
    c.push(
      Dy(i.slice(s, o.index), s > 0, !0),
      o[0]
    ), s = o.index + o[0].length, o = a.exec(i);
  return c.push(Dy(i.slice(s), s > 0, !1)), c.join("");
}
function Dy(t, i, a) {
  let o = 0, s = t.length;
  if (i) {
    let c = t.codePointAt(o);
    for (; c === Ay || c === Oy; )
      o++, c = t.codePointAt(o);
  }
  if (a) {
    let c = t.codePointAt(s - 1);
    for (; c === Ay || c === Oy; )
      s--, c = t.codePointAt(s - 1);
  }
  return s > o ? t.slice(o, s) : "";
}
function q5(t, i) {
  const a = { type: "text", value: Z5(String(i.value)) };
  return t.patch(i, a), t.applyData(i, a);
}
function $5(t, i) {
  const a = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return t.patch(i, a), t.applyData(i, a);
}
const V5 = {
  blockquote: y5,
  break: v5,
  code: w5,
  delete: k5,
  emphasis: S5,
  footnoteReference: z5,
  heading: _5,
  html: j5,
  imageReference: E5,
  image: C5,
  inlineCode: T5,
  linkReference: N5,
  link: A5,
  listItem: O5,
  list: M5,
  paragraph: R5,
  // @ts-expect-error: root is different, but hard to type.
  root: U5,
  strong: L5,
  table: B5,
  tableCell: H5,
  tableRow: I5,
  text: q5,
  thematicBreak: $5,
  toml: iu,
  yaml: iu,
  definition: iu,
  footnoteDefinition: iu
};
function iu() {
}
const $0 = -1, Ou = 0, yo = 1, zu = 2, Ip = 3, Hp = 4, Zp = 5, qp = 6, V0 = 7, Y0 = 8, { defineProperty: Y5 } = Object, G0 = typeof self == "object" ? self : globalThis, My = (t, i) => {
  switch (t) {
    case "Function":
    case "SharedWorker":
    case "Worker":
    case "eval":
    case "setInterval":
    case "setTimeout":
      throw new TypeError("unable to deserialize " + t);
  }
  return new G0[t](i);
}, G5 = (t, i) => {
  const a = (s, c) => (t.set(c, s), s), o = (s) => {
    if (t.has(s))
      return t.get(s);
    const [c, f] = i[s];
    switch (c) {
      case Ou:
      case $0:
        return a(f, s);
      case yo: {
        const p = a([], s);
        for (const m of f)
          p.push(o(m));
        return p;
      }
      case zu: {
        const p = a({}, s);
        for (const [m, g] of f) {
          const x = o(m), b = o(g);
          x === "__proto__" ? Y5(p, x, {
            value: b,
            configurable: !0,
            enumerable: !0,
            writable: !0
          }) : p[x] = b;
        }
        return p;
      }
      case Ip:
        return a(new Date(f), s);
      case Hp: {
        const { source: p, flags: m } = f;
        return a(new RegExp(p, m), s);
      }
      case Zp: {
        const p = a(/* @__PURE__ */ new Map(), s);
        for (const [m, g] of f)
          p.set(o(m), o(g));
        return p;
      }
      case qp: {
        const p = a(/* @__PURE__ */ new Set(), s);
        for (const m of f)
          p.add(o(m));
        return p;
      }
      case V0: {
        const { name: p, message: m } = f;
        return a(
          typeof G0[p] == "function" ? My(p, m) : new Error(m),
          s
        );
      }
      case Y0:
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
    return a(My(c, f), s);
  };
  return o;
}, Ry = (t) => G5(/* @__PURE__ */ new Map(), t)(0), ea = "", { toString: F5 } = {}, { keys: X5, is: Q5 } = Object, uo = (t) => {
  const i = typeof t;
  if (i !== "object" || !t)
    return [Ou, i];
  const a = F5.call(t).slice(8, -1);
  switch (a) {
    case "Array":
      return [yo, ea];
    case "Object":
      return [zu, ea];
    case "Date":
      return [Ip, ea];
    case "RegExp":
      return [Hp, ea];
    case "Map":
      return [Zp, ea];
    case "Set":
      return [qp, ea];
    case "DataView":
      return [yo, a];
  }
  return a.includes("Array") ? [yo, a] : t instanceof Error ? [V0, t.name || "Error"] : [zu, a];
}, ru = ([t, i]) => t === Ou && (i === "function" || i === "symbol"), P5 = (t, i, a, o) => {
  const s = (f, p) => {
    const m = o.push(f) - 1;
    return a.set(p, m), m;
  }, c = (f) => {
    if (a.has(f))
      return a.get(f);
    let [p, m] = uo(f);
    switch (p) {
      case Ou: {
        let x = f;
        switch (m) {
          case "bigint":
            p = Y0, x = f.toString();
            break;
          case "number":
            if (!f && Q5(f, -0))
              return o.push(["-0"]) - 1;
            break;
          case "function":
          case "symbol":
            if (t)
              throw new TypeError("unable to serialize " + m);
            x = null;
            break;
          case "undefined":
            return s([$0], f);
        }
        return s([p, x], f);
      }
      case yo: {
        if (m) {
          let w = f;
          return m === "DataView" ? w = new Uint8Array(f.buffer) : m === "ArrayBuffer" && (w = new Uint8Array(f)), s([m, [...w]], f);
        }
        const x = [], b = s([p, x], f);
        for (const w of f)
          x.push(c(w));
        return b;
      }
      case zu: {
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
        const x = [], b = s([p, x], f);
        for (const w of X5(f))
          (t || !ru(uo(f[w]))) && x.push([c(w), c(f[w])]);
        return b;
      }
      case Ip:
        return s([p, isNaN(f.getTime()) ? ea : f.toISOString()], f);
      case Hp: {
        const { source: x, flags: b } = f;
        return s([p, { source: x, flags: b }], f);
      }
      case Zp: {
        const x = [], b = s([p, x], f);
        for (const [w, v] of f)
          (t || !(ru(uo(w)) || ru(uo(v)))) && x.push([c(w), c(v)]);
        return b;
      }
      case qp: {
        const x = [], b = s([p, x], f);
        for (const w of f)
          (t || !ru(uo(w))) && x.push(c(w));
        return b;
      }
    }
    const { message: g } = f;
    return s([p, { name: m, message: g }], f);
  };
  return c;
}, Uy = (t, { json: i, lossy: a } = {}) => {
  const o = [];
  return P5(!(i || a), !!i, /* @__PURE__ */ new Map(), o)(t), o;
}, _u = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (t, i) => i && ("json" in i || "lossy" in i) ? Ry(Uy(t, i)) : structuredClone(t)
) : (t, i) => Ry(Uy(t, i));
function K5(t, i) {
  const a = [{ type: "text", value: "↩" }];
  return i > 1 && a.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(i) }]
  }), a;
}
function J5(t, i) {
  return "Back to reference " + (t + 1) + (i > 1 ? "-" + i : "");
}
function W5(t) {
  const i = typeof t.options.clobberPrefix == "string" ? t.options.clobberPrefix : "user-content-", a = t.options.footnoteBackContent || K5, o = t.options.footnoteBackLabel || J5, s = t.options.footnoteLabel || "Footnotes", c = t.options.footnoteLabelTagName || "h2", f = t.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, p = [];
  let m = -1;
  for (; ++m < t.footnoteOrder.length; ) {
    const g = t.footnoteById.get(
      t.footnoteOrder[m]
    );
    if (!g)
      continue;
    const x = t.all(g), b = String(g.identifier).toUpperCase(), w = cl(b.toLowerCase());
    let v = 0;
    const S = [], j = t.footnoteCounts.get(b);
    for (; j !== void 0 && ++v <= j; ) {
      S.length > 0 && S.push({ type: "text", value: " " });
      let B = typeof a == "string" ? a : a(m, v);
      typeof B == "string" && (B = { type: "text", value: B }), S.push({
        type: "element",
        tagName: "a",
        properties: {
          href: "#" + i + "fnref-" + w + (v > 1 ? "-" + v : ""),
          dataFootnoteBackref: "",
          ariaLabel: typeof o == "string" ? o : o(m, v),
          className: ["data-footnote-backref"]
        },
        children: Array.isArray(B) ? B : [B]
      });
    }
    const E = x[x.length - 1];
    if (E && E.type === "element" && E.tagName === "p") {
      const B = E.children[E.children.length - 1];
      B && B.type === "text" ? B.value += " " : E.children.push({ type: "text", value: " " }), E.children.push(...S);
    } else
      x.push(...S);
    const O = {
      type: "element",
      tagName: "li",
      properties: { id: i + "fn-" + w },
      children: t.wrap(x, !0)
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
            ..._u(f),
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
const Du = (
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
      return iN;
    if (typeof t == "function")
      return Mu(t);
    if (typeof t == "object")
      return Array.isArray(t) ? eN(t) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        tN(
          /** @type {Props} */
          t
        )
      );
    if (typeof t == "string")
      return nN(t);
    throw new Error("Expected function, string, or object as test");
  })
);
function eN(t) {
  const i = [];
  let a = -1;
  for (; ++a < t.length; )
    i[a] = Du(t[a]);
  return Mu(o);
  function o(...s) {
    let c = -1;
    for (; ++c < i.length; )
      if (i[c].apply(this, s)) return !0;
    return !1;
  }
}
function tN(t) {
  const i = (
    /** @type {Record<string, unknown>} */
    t
  );
  return Mu(a);
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
function nN(t) {
  return Mu(i);
  function i(a) {
    return a && a.type === t;
  }
}
function Mu(t) {
  return i;
  function i(a, o, s) {
    return !!(rN(a) && t.call(
      this,
      a,
      typeof o == "number" ? o : void 0,
      s || void 0
    ));
  }
}
function iN() {
  return !0;
}
function rN(t) {
  return t !== null && typeof t == "object" && "type" in t;
}
const F0 = [], aN = !0, du = !1, ap = "skip";
function lp(t, i, a, o) {
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
  const g = Du(c), x = s ? 1 : -1;
  b(t, void 0, [])();
  function b(w, v, S) {
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
      let B = F0;
      if (p && O && (B = Ly(p(w, S, v)), B[0] === du))
        return B;
      if ("children" in w && w.children) {
        const U = (
          /** @type {UnistParent} */
          w
        );
        if (U.children && B[0] !== ap) {
          let V = (s ? -1 : U.children.length) + x;
          const K = [...S, U];
          for (; V > -1 && V < U.children.length; ) {
            const N = U.children[V], X = b(N, V, K)();
            if (X[0] === du)
              return X;
            V = typeof X[1] == "number" ? X[1] : V + x;
          }
        }
      }
      if (m && O) {
        const U = Ly(m(w, S, v));
        if (U[0] === ap)
          throw new Error(
            "Unexpected value `" + U[0] + "` from `exit`, expected `CONTINUE`, `EXIT`, index, or nothing"
          );
        if (U[0] === du || typeof U[1] == "number")
          return U;
      }
      return B;
    }
  }
}
function Ly(t) {
  return Array.isArray(t) ? t : typeof t == "number" ? [aN, t] : t == null ? F0 : [t];
}
function $p(t, i, a, o) {
  let s, c, f;
  c = /** @type {Visitor | Visitors} */
  i, f = a, typeof c == "function" ? lp(t, s, op(c), f) : lp(t, s, lN(c), f);
}
function lN(t) {
  return !t || typeof t != "object" ? t : {
    enter: typeof t.enter == "function" ? op(t.enter) : t.enter,
    exit: typeof t.exit == "function" ? op(t.exit) : t.exit
  };
}
function op(t) {
  return i;
  function i(a, o, s) {
    return t(a, s, o[o.length - 1]);
  }
}
const sp = {}.hasOwnProperty, oN = {};
function sN(t, i) {
  const a = i || oN, o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), f = { ...V5, ...a.handlers }, p = {
    all: g,
    applyData: cN,
    definitionById: o,
    footnoteById: s,
    footnoteCounts: c,
    footnoteOrder: [],
    handlers: f,
    one: m,
    options: a,
    patch: uN,
    wrap: dN
  };
  return $p(t, function(x) {
    if (x.type === "definition" || x.type === "footnoteDefinition") {
      const b = x.type === "definition" ? o : s, w = String(x.identifier).toUpperCase();
      b.has(w) || b.set(w, x);
    }
  }), p;
  function m(x, b) {
    const w = x.type, v = p.handlers[w];
    if (sp.call(p.handlers, w) && v)
      return v(p, x, b);
    if (p.options.passThrough && p.options.passThrough.includes(w)) {
      if ("children" in x) {
        const { children: j, ...E } = x, O = _u(E);
        return O.children = p.all(x), O;
      }
      return _u(x);
    }
    return (p.options.unknownHandler || fN)(p, x, b);
  }
  function g(x) {
    const b = [];
    if ("children" in x) {
      const w = x.children;
      let v = -1;
      for (; ++v < w.length; ) {
        const S = p.one(w[v], x);
        if (S) {
          if (v && w[v - 1].type === "break" && (!Array.isArray(S) && S.type === "text" && (S.value = By(S.value)), !Array.isArray(S) && S.type === "element")) {
            const j = S.children[0];
            j && j.type === "text" && (j.value = By(j.value));
          }
          Array.isArray(S) ? b.push(...S) : b.push(S);
        }
      }
    }
    return b;
  }
}
function uN(t, i) {
  t.position && (i.position = JE(t));
}
function cN(t, i) {
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
    a.type === "element" && c && Object.assign(a.properties, _u(c)), "children" in a && a.children && s !== null && s !== void 0 && (a.children = s);
  }
  return a;
}
function fN(t, i) {
  const a = i.data || {}, o = "value" in i && !(sp.call(a, "hProperties") || sp.call(a, "hChildren")) ? { type: "text", value: i.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, o), t.applyData(i, o);
}
function dN(t, i) {
  const a = [];
  let o = -1;
  for (i && a.push({ type: "text", value: `
` }); ++o < t.length; )
    o && a.push({ type: "text", value: `
` }), a.push(t[o]);
  return i && t.length > 0 && a.push({ type: "text", value: `
` }), a;
}
function By(t) {
  let i = 0, a = t.charCodeAt(i);
  for (; a === 9 || a === 32; )
    i++, a = t.charCodeAt(i);
  return t.slice(i);
}
function Iy(t, i) {
  const a = sN(t, i), o = a.one(t, void 0), s = W5(a), c = Array.isArray(o) ? { type: "root", children: o } : o || { type: "root", children: [] };
  return s && c.children.push({ type: "text", value: `
` }, s), c;
}
function pN(t, i) {
  return t && "run" in t ? async function(a, o) {
    const s = (
      /** @type {HastRoot} */
      Iy(a, { file: o, ...i })
    );
    await t.run(s, o);
  } : function(a, o) {
    return (
      /** @type {HastRoot} */
      Iy(a, { file: o, ...t || i })
    );
  };
}
function Hy(t) {
  if (t)
    throw t;
}
var Cd, Zy;
function hN() {
  if (Zy) return Cd;
  Zy = 1;
  var t = Object.prototype.hasOwnProperty, i = Object.prototype.toString, a = Object.defineProperty, o = Object.getOwnPropertyDescriptor, s = function(g) {
    return typeof Array.isArray == "function" ? Array.isArray(g) : i.call(g) === "[object Array]";
  }, c = function(g) {
    if (!g || i.call(g) !== "[object Object]")
      return !1;
    var x = t.call(g, "constructor"), b = g.constructor && g.constructor.prototype && t.call(g.constructor.prototype, "isPrototypeOf");
    if (g.constructor && !x && !b)
      return !1;
    var w;
    for (w in g)
      ;
    return typeof w > "u" || t.call(g, w);
  }, f = function(g, x) {
    a && x.name === "__proto__" ? a(g, x.name, {
      enumerable: !0,
      configurable: !0,
      value: x.newValue,
      writable: !0
    }) : g[x.name] = x.newValue;
  }, p = function(g, x) {
    if (x === "__proto__")
      if (t.call(g, x)) {
        if (o)
          return o(g, x).value;
      } else return;
    return g[x];
  };
  return Cd = function m() {
    var g, x, b, w, v, S, j = arguments[0], E = 1, O = arguments.length, B = !1;
    for (typeof j == "boolean" && (B = j, j = arguments[1] || {}, E = 2), (j == null || typeof j != "object" && typeof j != "function") && (j = {}); E < O; ++E)
      if (g = arguments[E], g != null)
        for (x in g)
          b = p(j, x), w = p(g, x), j !== w && (B && w && (c(w) || (v = s(w))) ? (v ? (v = !1, S = b && s(b) ? b : []) : S = b && c(b) ? b : {}, f(j, { name: x, newValue: m(B, S, w) })) : typeof w < "u" && f(j, { name: x, newValue: w }));
    return j;
  }, Cd;
}
var mN = hN();
const Td = /* @__PURE__ */ ev(mN);
function up(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const i = Object.getPrototypeOf(t);
  return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}
function gN() {
  const t = [], i = { run: a, use: o };
  return i;
  function a(...s) {
    let c = -1;
    const f = s.pop();
    if (typeof f != "function")
      throw new TypeError("Expected function as last argument, not " + f);
    p(null, ...s);
    function p(m, ...g) {
      const x = t[++c];
      let b = -1;
      if (m) {
        f(m);
        return;
      }
      for (; ++b < s.length; )
        (g[b] === null || g[b] === void 0) && (g[b] = s[b]);
      s = g, x ? bN(x, p)(...g) : f(null, ...g);
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
function bN(t, i) {
  let a;
  return o;
  function o(...f) {
    const p = t.length > f.length;
    let m;
    p && f.push(s);
    try {
      m = t.apply(this, f);
    } catch (g) {
      const x = (
        /** @type {Error} */
        g
      );
      if (p && a)
        throw x;
      return s(x);
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
const yi = { basename: xN, dirname: yN, extname: vN, join: wN, sep: "/" };
function xN(t, i) {
  if (i !== void 0 && typeof i != "string")
    throw new TypeError('"ext" argument must be a string');
  Eo(t);
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
function yN(t) {
  if (Eo(t), t.length === 0)
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
function vN(t) {
  Eo(t);
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
function wN(...t) {
  let i = -1, a;
  for (; ++i < t.length; )
    Eo(t[i]), t[i] && (a = a === void 0 ? t[i] : a + "/" + t[i]);
  return a === void 0 ? "." : kN(a);
}
function kN(t) {
  Eo(t);
  const i = t.codePointAt(0) === 47;
  let a = SN(t, !i);
  return a.length === 0 && !i && (a = "."), a.length > 0 && t.codePointAt(t.length - 1) === 47 && (a += "/"), i ? "/" + a : a;
}
function SN(t, i) {
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
function Eo(t) {
  if (typeof t != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(t)
    );
}
const zN = { cwd: _N };
function _N() {
  return "/";
}
function cp(t) {
  return !!(t !== null && typeof t == "object" && "href" in t && t.href && "protocol" in t && t.protocol && // @ts-expect-error: indexing is fine.
  t.auth === void 0);
}
function jN(t) {
  if (typeof t == "string")
    t = new URL(t);
  else if (!cp(t)) {
    const i = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + t + "`"
    );
    throw i.code = "ERR_INVALID_ARG_TYPE", i;
  }
  if (t.protocol !== "file:") {
    const i = new TypeError("The URL must be of scheme file");
    throw i.code = "ERR_INVALID_URL_SCHEME", i;
  }
  return EN(t);
}
function EN(t) {
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
const Nd = (
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
class X0 {
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
    i ? cp(i) ? a = { path: i } : typeof i == "string" || CN(i) ? a = { value: i } : a = i : a = {}, this.cwd = "cwd" in a ? "" : zN.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let o = -1;
    for (; ++o < Nd.length; ) {
      const c = Nd[o];
      c in a && a[c] !== void 0 && a[c] !== null && (this[c] = c === "history" ? [...a[c]] : a[c]);
    }
    let s;
    for (s in a)
      Nd.includes(s) || (this[s] = a[s]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? yi.basename(this.path) : void 0;
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
    Od(i, "basename"), Ad(i, "basename"), this.path = yi.join(this.dirname || "", i);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? yi.dirname(this.path) : void 0;
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
    qy(this.basename, "dirname"), this.path = yi.join(i || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? yi.extname(this.path) : void 0;
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
    if (Ad(i, "extname"), qy(this.dirname, "extname"), i) {
      if (i.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (i.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = yi.join(this.dirname, this.stem + (i || ""));
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
    cp(i) && (i = jN(i)), Od(i, "path"), this.path !== i && this.history.push(i);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? yi.basename(this.path, this.extname) : void 0;
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
    Od(i, "stem"), Ad(i, "stem"), this.path = yi.join(this.dirname || "", i + (this.extname || ""));
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
    const s = new Kt(
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
function Ad(t, i) {
  if (t && t.includes(yi.sep))
    throw new Error(
      "`" + i + "` cannot be a path: did not expect `" + yi.sep + "`"
    );
}
function Od(t, i) {
  if (!t)
    throw new Error("`" + i + "` cannot be empty");
}
function qy(t, i) {
  if (!t)
    throw new Error("Setting `" + i + "` requires `path` to be set too");
}
function CN(t) {
  return !!(t && typeof t == "object" && "byteLength" in t && "byteOffset" in t);
}
const TN = (
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
), NN = {}.hasOwnProperty;
class Vp extends TN {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = gN();
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
      new Vp()
    );
    let a = -1;
    for (; ++a < this.attachers.length; ) {
      const o = this.attachers[a];
      i.use(...o);
    }
    return i.data(Td(!0, {}, this.namespace)), i;
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
    return typeof i == "string" ? arguments.length === 2 ? (Rd("data", this.frozen), this.namespace[i] = a, this) : NN.call(this.namespace, i) && this.namespace[i] || void 0 : i ? (Rd("data", this.frozen), this.namespace = i, this) : this.namespace;
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
    const a = au(i), o = this.parser || this.Parser;
    return Dd("parse", o), o(String(a), a);
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
    return this.freeze(), Dd("process", this.parser || this.Parser), Md("process", this.compiler || this.Compiler), a ? s(void 0, a) : new Promise(s);
    function s(c, f) {
      const p = au(i), m = (
        /** @type {HeadTree extends undefined ? Node : HeadTree} */
        /** @type {unknown} */
        o.parse(p)
      );
      o.run(m, p, function(x, b, w) {
        if (x || !b || !w)
          return g(x);
        const v = (
          /** @type {CompileTree extends undefined ? Node : CompileTree} */
          /** @type {unknown} */
          b
        ), S = o.stringify(v, w);
        DN(S) ? w.value = S : w.result = S, g(
          x,
          /** @type {VFileWithOutput<CompileResult>} */
          w
        );
      });
      function g(x, b) {
        x || !b ? f(x) : c ? c(b) : a(void 0, b);
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
    return this.freeze(), Dd("processSync", this.parser || this.Parser), Md("processSync", this.compiler || this.Compiler), this.process(i, s), Vy("processSync", "process", a), o;
    function s(c, f) {
      a = !0, Hy(c), o = f;
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
    $y(i), this.freeze();
    const s = this.transformers;
    return !o && typeof a == "function" && (o = a, a = void 0), o ? c(void 0, o) : new Promise(c);
    function c(f, p) {
      const m = au(a);
      s.run(i, m, g);
      function g(x, b, w) {
        const v = (
          /** @type {TailTree extends undefined ? Node : TailTree} */
          b || i
        );
        x ? p(x) : f ? f(v) : o(void 0, v, w);
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
    return this.run(i, a, c), Vy("runSync", "run", o), s;
    function c(f, p) {
      Hy(f), s = p, o = !0;
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
    const o = au(a), s = this.compiler || this.Compiler;
    return Md("stringify", s), $y(i), s(i, o);
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
    if (Rd("use", this.frozen), i != null) if (typeof i == "function")
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
          const [x, ...b] = (
            /** @type {PluginTuple<Array<unknown>>} */
            g
          );
          m(x, b);
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
      p(g.plugins), g.settings && (s.settings = Td(!0, s.settings, g.settings));
    }
    function p(g) {
      let x = -1;
      if (g != null) if (Array.isArray(g))
        for (; ++x < g.length; ) {
          const b = g[x];
          c(b);
        }
      else
        throw new TypeError("Expected a list of plugins, not `" + g + "`");
    }
    function m(g, x) {
      let b = -1, w = -1;
      for (; ++b < o.length; )
        if (o[b][0] === g) {
          w = b;
          break;
        }
      if (w === -1)
        o.push([g, ...x]);
      else if (x.length > 0) {
        let [v, ...S] = x;
        const j = o[w][1];
        up(j) && up(v) && (v = Td(!0, j, v)), o[w] = [g, v, ...S];
      }
    }
  }
}
const AN = new Vp().freeze();
function Dd(t, i) {
  if (typeof i != "function")
    throw new TypeError("Cannot `" + t + "` without `parser`");
}
function Md(t, i) {
  if (typeof i != "function")
    throw new TypeError("Cannot `" + t + "` without `compiler`");
}
function Rd(t, i) {
  if (i)
    throw new Error(
      "Cannot call `" + t + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function $y(t) {
  if (!up(t) || typeof t.type != "string")
    throw new TypeError("Expected node, got `" + t + "`");
}
function Vy(t, i, a) {
  if (!a)
    throw new Error(
      "`" + t + "` finished async. Use `" + i + "` instead"
    );
}
function au(t) {
  return ON(t) ? t : new X0(t);
}
function ON(t) {
  return !!(t && typeof t == "object" && "message" in t && "messages" in t);
}
function DN(t) {
  return typeof t == "string" || MN(t);
}
function MN(t) {
  return !!(t && typeof t == "object" && "byteLength" in t && "byteOffset" in t);
}
const RN = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Yy = [], Gy = { allowDangerousHtml: !0 }, UN = /^(https?|ircs?|mailto|xmpp)$/i, LN = [
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
function BN(t) {
  const i = IN(t), a = HN(t);
  return ZN(i.runSync(i.parse(a), a), t);
}
function IN(t) {
  const i = t.rehypePlugins || Yy, a = t.remarkPlugins || Yy, o = t.remarkRehypeOptions ? { ...t.remarkRehypeOptions, ...Gy } : Gy;
  return AN().use(x5).use(a).use(pN, o).use(i);
}
function HN(t) {
  const i = t.children || "", a = new X0();
  return typeof i == "string" && (a.value = i), a;
}
function ZN(t, i) {
  const a = i.allowedElements, o = i.allowElement, s = i.components, c = i.disallowedElements, f = i.skipHtml, p = i.unwrapDisallowed, m = i.urlTransform || qN;
  for (const x of LN)
    Object.hasOwn(i, x.from) && ("" + x.from + (x.to ? "use `" + x.to + "` instead" : "remove it") + RN + x.id, void 0);
  return $p(t, g), iC(t, {
    Fragment: h.Fragment,
    components: s,
    ignoreInvalidStyle: !0,
    jsx: h.jsx,
    jsxs: h.jsxs,
    passKeys: !0,
    passNode: !0
  });
  function g(x, b, w) {
    if (x.type === "raw" && w && typeof b == "number")
      return f ? w.children.splice(b, 1) : w.children[b] = { type: "text", value: x.value }, b;
    if (x.type === "element") {
      let v;
      for (v in _d)
        if (Object.hasOwn(_d, v) && Object.hasOwn(x.properties, v)) {
          const S = x.properties[v], j = _d[v];
          (j === null || j.includes(x.tagName)) && (x.properties[v] = m(String(S || ""), v, x));
        }
    }
    if (x.type === "element") {
      let v = a ? !a.includes(x.tagName) : c ? c.includes(x.tagName) : !1;
      if (!v && o && typeof b == "number" && (v = !o(x, b, w)), v && w && typeof b == "number")
        return p && x.children ? w.children.splice(b, 1, ...x.children) : w.children.splice(b, 1), b;
    }
  }
}
function qN(t) {
  const i = t.indexOf(":"), a = t.indexOf("?"), o = t.indexOf("#"), s = t.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    i === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    s !== -1 && i > s || a !== -1 && i > a || o !== -1 && i > o || // It is a protocol, it should be allowed.
    UN.test(t.slice(0, i)) ? t : ""
  );
}
function Fy(t, i) {
  const a = String(t);
  if (typeof i != "string")
    throw new TypeError("Expected character");
  let o = 0, s = a.indexOf(i);
  for (; s !== -1; )
    o++, s = a.indexOf(i, s + i.length);
  return o;
}
function $N(t) {
  if (typeof t != "string")
    throw new TypeError("Expected a string");
  return t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function VN(t, i, a) {
  const s = Du((a || {}).ignore || []), c = YN(i);
  let f = -1;
  for (; ++f < c.length; )
    lp(t, p);
  function p(g, x, b) {
    if (g.type === "text" && typeof b == "number")
      return m(g, x, b);
    if (s(g, b, x[x.length - 1])) return ap;
  }
  function m(g, x, b) {
    const w = x[x.length - 1], v = c[f][0], S = c[f][1];
    let j = 0, E = !1, O = [];
    v.lastIndex = 0;
    let B = v.exec(g.value);
    for (; B; ) {
      const V = B.index, K = {
        index: B.index,
        input: B.input,
        stack: [...x, g]
      };
      let N = S(...B, K);
      if (typeof N == "string" && (N = N.length > 0 ? { type: "text", value: N } : void 0), N === !1)
        v.lastIndex = V + 1;
      else {
        if (j !== V && U({ type: "text", value: g.value.slice(j, V) }), Array.isArray(N))
          for (const X of N) U(X);
        else N && U(N);
        j = V + B[0].length, E = !0;
      }
      if (!v.global)
        break;
      B = v.exec(g.value);
    }
    return E ? (j < g.value.length && U({ type: "text", value: g.value.slice(j) }), w.children.splice(b, 1, ...O)) : O = [g], b + O.length;
    function U(V) {
      const K = O[O.length - 1];
      K && K.type === "text" && V.type === "text" ? K.value += V.value : O.push(V);
    }
  }
}
function YN(t) {
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
    i.push([GN(s[0]), FN(s[1])]);
  }
  return i;
}
function GN(t) {
  return typeof t == "string" ? new RegExp($N(t), "g") : t;
}
function FN(t) {
  return typeof t == "function" ? t : function() {
    return t;
  };
}
const Ud = "phrasing", Ld = ["autolink", "link", "image", "label"];
function XN() {
  return {
    transforms: [t6],
    enter: {
      literalAutolink: PN,
      literalAutolinkEmail: Bd,
      literalAutolinkHttp: Bd,
      literalAutolinkWww: Bd
    },
    exit: {
      literalAutolink: e6,
      literalAutolinkEmail: WN,
      literalAutolinkHttp: KN,
      literalAutolinkWww: JN
    }
  };
}
function QN() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: Ud,
        notInConstruct: Ld
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: Ud,
        notInConstruct: Ld
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: Ud,
        notInConstruct: Ld
      }
    ]
  };
}
function PN(t) {
  this.enter({ type: "link", title: null, url: "", children: [] }, t);
}
function Bd(t) {
  this.config.enter.autolinkProtocol.call(this, t);
}
function KN(t) {
  this.config.exit.autolinkProtocol.call(this, t);
}
function JN(t) {
  this.config.exit.data.call(this, t);
  const i = this.stack[this.stack.length - 1];
  i.type, i.url = "http://" + this.sliceSerialize(t);
}
function WN(t) {
  this.config.exit.autolinkEmail.call(this, t);
}
function e6(t) {
  this.exit(t);
}
function t6(t) {
  VN(
    t,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, n6],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), i6]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function n6(t, i, a, o, s) {
  let c = "";
  if (!Q0(s) || (/^w/i.test(i) && (a = i + a, i = "", c = "http://"), !r6(a)))
    return !1;
  const f = a6(a + o);
  if (!f[0]) return !1;
  const p = {
    type: "link",
    title: null,
    url: c + i + f[0],
    children: [{ type: "text", value: i + f[0] }]
  };
  return f[1] ? [p, { type: "text", value: f[1] }] : p;
}
function i6(t, i, a, o) {
  return (
    // Not an expected previous character.
    !Q0(o, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(a) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + i + "@" + a,
      children: [{ type: "text", value: i + "@" + a }]
    }
  );
}
function r6(t) {
  const i = t.split(".");
  return !(i.length < 2 || i[i.length - 1] && (/_/.test(i[i.length - 1]) || !/[a-zA-Z\d]/.test(i[i.length - 1])) || i[i.length - 2] && (/_/.test(i[i.length - 2]) || !/[a-zA-Z\d]/.test(i[i.length - 2])));
}
function a6(t) {
  const i = /[!"&'),.:;<>?\]}]+$/.exec(t);
  if (!i)
    return [t, void 0];
  t = t.slice(0, i.index);
  let a = i[0], o = a.indexOf(")");
  const s = Fy(t, "(");
  let c = Fy(t, ")");
  for (; o !== -1 && s > c; )
    t += a.slice(0, o + 1), a = a.slice(o + 1), o = a.indexOf(")"), c++;
  return [t, a];
}
function Q0(t, i) {
  const a = t.input.charCodeAt(t.index - 1);
  return (t.index === 0 || aa(a) || Nu(a)) && // If it’s an email, the previous character should not be a slash.
  (!i || a !== 47);
}
P0.peek = h6;
function l6() {
  this.buffer();
}
function o6(t) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, t);
}
function s6() {
  this.buffer();
}
function u6(t) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    t
  );
}
function c6(t) {
  const i = this.resume(), a = this.stack[this.stack.length - 1];
  a.type, a.identifier = oi(
    this.sliceSerialize(t)
  ).toLowerCase(), a.label = i;
}
function f6(t) {
  this.exit(t);
}
function d6(t) {
  const i = this.resume(), a = this.stack[this.stack.length - 1];
  a.type, a.identifier = oi(
    this.sliceSerialize(t)
  ).toLowerCase(), a.label = i;
}
function p6(t) {
  this.exit(t);
}
function h6() {
  return "[";
}
function P0(t, i, a, o) {
  const s = a.createTracker(o);
  let c = s.move("[^");
  const f = a.enter("footnoteReference"), p = a.enter("reference");
  return c += s.move(
    a.safe(a.associationId(t), { after: "]", before: c })
  ), p(), f(), c += s.move("]"), c;
}
function m6() {
  return {
    enter: {
      gfmFootnoteCallString: l6,
      gfmFootnoteCall: o6,
      gfmFootnoteDefinitionLabelString: s6,
      gfmFootnoteDefinition: u6
    },
    exit: {
      gfmFootnoteCallString: c6,
      gfmFootnoteCall: f6,
      gfmFootnoteDefinitionLabelString: d6,
      gfmFootnoteDefinition: p6
    }
  };
}
function g6(t) {
  let i = !1;
  return t && t.firstLineBlank && (i = !0), {
    handlers: { footnoteDefinition: a, footnoteReference: P0 },
    // This is on by default already.
    unsafe: [{ character: "[", inConstruct: ["label", "phrasing", "reference"] }]
  };
  function a(o, s, c, f) {
    const p = c.createTracker(f);
    let m = p.move("[^");
    const g = c.enter("footnoteDefinition"), x = c.enter("label");
    return m += p.move(
      c.safe(c.associationId(o), { before: m, after: "]" })
    ), x(), m += p.move("]:"), o.children && o.children.length > 0 && (p.shift(4), m += p.move(
      (i ? `
` : " ") + c.indentLines(
        c.containerFlow(o, p.current()),
        i ? K0 : b6
      )
    )), g(), m;
  }
}
function b6(t, i, a) {
  return i === 0 ? t : K0(t, i, a);
}
function K0(t, i, a) {
  return (a ? "" : "    ") + t;
}
const x6 = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
Yp.attention = S6;
Yp.peek = z6;
function y6() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: w6 },
    exit: { strikethrough: k6 }
  };
}
function v6() {
  return {
    handlers: { delete: Yp },
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: x6
      }
    ]
  };
}
function w6(t) {
  this.enter({ type: "delete", children: [], position: void 0 }, t);
}
function k6(t) {
  this.exit(t);
}
function Yp(t, i, a, o) {
  const s = a.createTracker(o), c = a.stack.includes("strikethrough") ? "~" : "~~", f = a.enter("strikethrough");
  let p = s.move(c);
  return p += a.containerPhrasing(t, {
    ...s.current(),
    before: p,
    after: "~"
  }), p += s.move(c), f(), p;
}
function S6() {
  return { construct: "strikethrough", markers: ["~"], sizes: [2, 1] };
}
function z6() {
  return "~";
}
function _6(t) {
  return t.length;
}
function j6(t, i) {
  const a = i || {}, o = (a.align || []).concat(), s = a.stringLength || _6, c = [], f = [], p = [], m = [];
  let g = 0, x = -1;
  for (; ++x < t.length; ) {
    const j = [], E = [];
    let O = -1;
    for (t[x].length > g && (g = t[x].length); ++O < t[x].length; ) {
      const B = E6(t[x][O]);
      if (a.alignDelimiters !== !1) {
        const U = s(B);
        E[O] = U, (m[O] === void 0 || U > m[O]) && (m[O] = U);
      }
      j.push(B);
    }
    f[x] = j, p[x] = E;
  }
  let b = -1;
  if (typeof o == "object" && "length" in o)
    for (; ++b < g; )
      c[b] = Xy(o[b]);
  else {
    const j = Xy(o);
    for (; ++b < g; )
      c[b] = j;
  }
  b = -1;
  const w = [], v = [];
  for (; ++b < g; ) {
    const j = c[b];
    let E = "", O = "";
    j === 99 ? (E = ":", O = ":") : j === 108 ? E = ":" : j === 114 && (O = ":");
    let B = a.alignDelimiters === !1 ? 1 : Math.max(
      1,
      m[b] - E.length - O.length
    );
    const U = E + "-".repeat(B) + O;
    a.alignDelimiters !== !1 && (B = E.length + B + O.length, B > m[b] && (m[b] = B), v[b] = B), w[b] = U;
  }
  f.splice(1, 0, w), p.splice(1, 0, v), x = -1;
  const S = [];
  for (; ++x < f.length; ) {
    const j = f[x], E = p[x];
    b = -1;
    const O = [];
    for (; ++b < g; ) {
      const B = j[b] || "";
      let U = "", V = "";
      if (a.alignDelimiters !== !1) {
        const K = m[b] - (E[b] || 0), N = c[b];
        N === 114 ? U = " ".repeat(K) : N === 99 ? K % 2 ? (U = " ".repeat(K / 2 + 0.5), V = " ".repeat(K / 2 - 0.5)) : (U = " ".repeat(K / 2), V = U) : V = " ".repeat(K);
      }
      a.delimiterStart !== !1 && !b && O.push("|"), a.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(a.alignDelimiters === !1 && B === "") && (a.delimiterStart !== !1 || b) && O.push(" "), a.alignDelimiters !== !1 && O.push(U), O.push(B), a.alignDelimiters !== !1 && O.push(V), a.padding !== !1 && O.push(" "), (a.delimiterEnd !== !1 || b !== g - 1) && O.push("|");
    }
    S.push(
      a.delimiterEnd === !1 ? O.join("").replace(/ +$/, "") : O.join("")
    );
  }
  return S.join(`
`);
}
function E6(t) {
  return t == null ? "" : String(t);
}
function Xy(t) {
  const i = typeof t == "string" ? t.codePointAt(0) : 0;
  return i === 67 || i === 99 ? 99 : i === 76 || i === 108 ? 108 : i === 82 || i === 114 ? 114 : 0;
}
const C6 = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  Du([
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
function T6(t, i, a, o) {
  const s = a.enter("blockquote"), c = a.createTracker(o);
  c.move("> "), c.shift(2);
  const f = a.indentLines(
    a.containerFlow(t, c.current()),
    N6
  );
  return s(), f;
}
function N6(t, i, a) {
  return ">" + (a ? "" : " ") + t;
}
function A6(t, i) {
  return Qy(t, i.inConstruct, !0) && !Qy(t, i.notInConstruct, !1);
}
function Qy(t, i, a) {
  if (typeof i == "string" && (i = [i]), !i || i.length === 0)
    return a;
  let o = -1;
  for (; ++o < i.length; )
    if (t.includes(i[o]))
      return !0;
  return !1;
}
function Py(t, i, a, o) {
  let s = -1;
  for (; ++s < a.unsafe.length; ) {
    const c = a.unsafe[s];
    if (c.character === `
` && !c.before && !c.after && A6(a.stack, c))
      return /[\t ]/.test(o.before) ? "" : " ";
  }
  return `\\
`;
}
function O6(t, i) {
  const a = String(t);
  let o = a.indexOf(i), s = o, c = 0, f = 0;
  if (typeof i != "string")
    throw new TypeError("Expected substring");
  for (; o !== -1; )
    o === s ? ++c > f && (f = c) : c = 1, s = o + i.length, o = a.indexOf(i, s);
  return f;
}
function D6(t, i) {
  return !!(i.options.fences === !1 && t.value && // If there’s no info…
  !t.lang && // And there’s a non-whitespace character…
  /[^\n\r ]/.test(t.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\n\r]|$)|(?:^|[\n\r])[\t ]*$/.test(t.value));
}
function M6(t) {
  const i = t.options.fence || "`";
  if (i !== "`" && i !== "~")
    throw new Error(
      "Cannot serialize code with `" + i + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return i;
}
function R6(t, i, a, o) {
  const s = M6(a), c = t.value || "";
  if (D6(t, a)) {
    const b = a.enter("codeIndented"), w = a.indentLines(c, U6);
    return b(), w;
  }
  const f = a.createTracker(o), p = s.repeat(Math.max(O6(c, s) + 1, 3)), m = a.enter("codeFenced"), g = s === "`" ? "GraveAccent" : "Tilde";
  let x = f.move(p);
  if (t.lang) {
    const b = a.enter(`codeFencedLang${g}`);
    x += f.move(
      a.safe(t.lang, {
        before: x,
        after: " ",
        encode: ["`"],
        ...f.current()
      })
    ), b();
  }
  if (t.lang && t.meta) {
    const b = a.enter(`codeFencedMeta${g}`);
    x += f.move(" "), x += f.move(
      a.safe(t.meta, {
        before: x,
        after: `
`,
        encode: ["`"],
        ...f.current()
      })
    ), b();
  }
  return x += f.move(`
`), c && (x += f.move(c + `
`)), x += f.move(p), m(), x;
}
function U6(t, i, a) {
  return (a ? "" : "    ") + t;
}
function Gp(t) {
  const i = t.options.quote || '"';
  if (i !== '"' && i !== "'")
    throw new Error(
      "Cannot serialize title with `" + i + "` for `options.quote`, expected `\"`, or `'`"
    );
  return i;
}
function L6(t, i, a, o) {
  const s = Gp(a), c = s === '"' ? "Quote" : "Apostrophe", f = a.enter("definition");
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
function B6(t) {
  const i = t.options.emphasis || "*";
  if (i !== "*" && i !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + i + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return i;
}
Fp.attention = I6;
Fp.peek = H6;
function Fp(t, i, a, o) {
  const s = a.enter("phrasing"), c = a.containerPhrasing({ type: "root", children: [t] }, o);
  return s(), c;
}
function I6(t, i) {
  return {
    construct: "emphasis",
    markers: B6(i) === "*" ? ["*", "_"] : ["_", "*"],
    sizes: [1]
  };
}
function H6(t, i, a) {
  return a.options.emphasis || "*";
}
function Z6(t) {
  return "&#x" + t.toString(16).toUpperCase() + ";";
}
function q6(t, i) {
  let a = !1;
  return $p(t, function(o) {
    if ("value" in o && /\r?\n|\r/.test(o.value) || o.type === "break")
      return a = !0, du;
  }), !!((!t.depth || t.depth < 3) && Up(t) && (i.options.setext || a));
}
function $6(t, i, a, o) {
  const s = Math.max(Math.min(6, t.depth || 1), 1), c = a.createTracker(o);
  if (q6(t, a)) {
    const b = a.enter("headingSetext"), w = a.enter("phrasing"), v = a.containerPhrasing(t, {
      ...c.current(),
      before: `
`,
      after: `
`
    });
    return w(), b(), v + `
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
  const x = g.charCodeAt(0);
  return (x === 9 || x === 32) && (g = Z6(x) + g.slice(1)), g = g ? f + " " + g : f, a.options.closeAtx && (g += " " + f), m(), p(), g;
}
J0.peek = V6;
function J0(t) {
  return t.value || "";
}
function V6() {
  return "<";
}
W0.peek = Y6;
function W0(t, i, a, o) {
  const s = Gp(a), c = s === '"' ? "Quote" : "Apostrophe", f = a.enter("image");
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
function Y6() {
  return "!";
}
ew.peek = G6;
function ew(t, i, a, o) {
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
  const x = a.stack;
  a.stack = x.filter(function(w) {
    return w !== "phrasing";
  }), f = a.enter("reference");
  const b = a.safe(a.associationId(t), {
    before: m,
    after: "]",
    ...p.current()
  });
  return f(), a.stack = x, c(), s === "full" || !g || g !== b ? m += p.move(b + "]") : s === "shortcut" ? m = m.slice(0, -1) : m += p.move("]"), m;
}
function G6() {
  return "!";
}
tw.peek = F6;
function tw(t, i, a) {
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
function F6() {
  return "`";
}
function nw(t, i) {
  const a = Up(t);
  return !!(!i.options.resourceLink && // If there’s a url…
  t.url && // And there’s no title…
  !t.title && // And the content of `node` is a single text node…
  t.children && t.children.length === 1 && t.children[0].type === "text" && // And if the url is the same as the content…
  (a === t.url || "mailto:" + a === t.url) && // And that starts w/ a protocol…
  /^[a-z][+\-.a-z]+:/i.test(t.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(t.url));
}
iw.peek = X6;
function iw(t, i, a, o) {
  const s = Gp(a), c = s === '"' ? "Quote" : "Apostrophe", f = a.createTracker(o);
  if (nw(t, a)) {
    const x = a.stack;
    a.stack = x.filter(function(v) {
      return v !== "phrasing";
    });
    const b = a.enter("autolink");
    let w = f.move("<");
    return w += f.move(
      a.containerPhrasing(t, {
        before: w,
        after: ">",
        ...f.current()
      })
    ), w += f.move(">"), b(), a.stack = x, w;
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
function X6(t, i, a) {
  return nw(t, a) ? "<" : "[";
}
rw.peek = Q6;
function rw(t, i, a, o) {
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
  const x = a.stack;
  a.stack = x.filter(function(w) {
    return w !== "phrasing";
  }), f = a.enter("reference");
  const b = a.safe(a.associationId(t), {
    before: m,
    after: "]",
    ...p.current()
  });
  return f(), a.stack = x, c(), s === "full" || !g || g !== b ? m += p.move(b + "]") : s === "shortcut" ? m = m.slice(0, -1) : m += p.move("]"), m;
}
function Q6() {
  return "[";
}
function Xp(t) {
  const i = t.options.bullet || "*";
  if (i !== "*" && i !== "+" && i !== "-")
    throw new Error(
      "Cannot serialize items with `" + i + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return i;
}
function P6(t) {
  const i = Xp(t), a = t.options.bulletOther;
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
function K6(t) {
  const i = t.options.bulletOrdered || ".";
  if (i !== "." && i !== ")")
    throw new Error(
      "Cannot serialize items with `" + i + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return i;
}
function aw(t) {
  const i = t.options.rule || "*";
  if (i !== "*" && i !== "-" && i !== "_")
    throw new Error(
      "Cannot serialize rules with `" + i + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return i;
}
function J6(t, i, a, o) {
  const s = a.enter("list"), c = a.bulletCurrent;
  let f = t.ordered ? K6(a) : Xp(a);
  const p = t.ordered ? f === "." ? ")" : "." : P6(a);
  let m = i && a.bulletLastUsed ? f === a.bulletLastUsed : !1;
  if (!t.ordered) {
    const x = t.children ? t.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (f === "*" || f === "-") && // Empty first list item:
      x && (!x.children || !x.children[0]) && // Directly in two other list items:
      a.stack[a.stack.length - 1] === "list" && a.stack[a.stack.length - 2] === "listItem" && a.stack[a.stack.length - 3] === "list" && a.stack[a.stack.length - 4] === "listItem" && // That are each the first child.
      a.indexStack[a.indexStack.length - 1] === 0 && a.indexStack[a.indexStack.length - 2] === 0 && a.indexStack[a.indexStack.length - 3] === 0 && (m = !0), aw(a) === f && x
    ) {
      let b = -1;
      for (; ++b < t.children.length; ) {
        const w = t.children[b];
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
function W6(t) {
  const i = t.options.listItemIndent || "one";
  if (i !== "tab" && i !== "one" && i !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + i + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return i;
}
function eA(t, i, a, o) {
  const s = W6(a);
  let c = a.bulletCurrent || Xp(a);
  i && i.type === "list" && i.ordered && (c = (typeof i.start == "number" && i.start > -1 ? i.start : 1) + (a.options.incrementListMarker === !1 ? 0 : i.children.indexOf(t)) + c);
  let f = c.length + 1;
  (s === "tab" || s === "mixed" && (i && i.type === "list" && i.spread || t.spread)) && (f = Math.ceil(f / 4) * 4);
  const p = a.createTracker(o);
  p.move(c + " ".repeat(f - c.length)), p.shift(f);
  const m = a.enter("listItem"), g = a.indentLines(
    a.containerFlow(t, p.current()),
    x
  );
  return m(), g;
  function x(b, w, v) {
    return w ? (v ? "" : " ".repeat(f)) + b : (v ? c : c + " ".repeat(f - c.length)) + b;
  }
}
function tA(t, i, a, o) {
  const s = a.enter("paragraph"), c = a.enter("phrasing"), f = a.containerPhrasing(t, o);
  return c(), s(), f;
}
function nA(t, i, a, o) {
  if (!t.children.some(function(p) {
    return C6(p);
  })) return a.containerFlow(t, o);
  const c = a.enter("phrasing"), f = a.containerPhrasing(t, o);
  return c(), f;
}
function iA(t) {
  const i = t.options.strong || "*";
  if (i !== "*" && i !== "_")
    throw new Error(
      "Cannot serialize strong with `" + i + "` for `options.strong`, expected `*`, or `_`"
    );
  return i;
}
Qp.attention = rA;
Qp.peek = aA;
function Qp(t, i, a, o) {
  const s = a.enter("phrasing"), c = a.containerPhrasing({ type: "root", children: [t] }, o);
  return s(), c;
}
function rA(t, i) {
  return {
    construct: "strong",
    markers: iA(i) === "*" ? ["*", "_"] : ["_", "*"],
    sizes: [2]
  };
}
function aA(t, i, a) {
  return a.options.strong || "*";
}
function lA(t, i, a, o) {
  const s = i ? i.children : [], c = s.indexOf(t);
  return a.safe(t.value, {
    ...o,
    afterNode: s[c + 1],
    beforeNode: s[c - 1]
  });
}
function oA(t) {
  const i = t.options.ruleRepetition || 3;
  if (i < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + i + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return i;
}
function sA(t, i, a) {
  const o = (aw(a) + (a.options.ruleSpaces ? " " : "")).repeat(oA(a));
  return a.options.ruleSpaces ? o.slice(0, -1) : o;
}
const lw = {
  blockquote: T6,
  break: Py,
  code: R6,
  definition: L6,
  emphasis: Fp,
  hardBreak: Py,
  heading: $6,
  html: J0,
  image: W0,
  imageReference: ew,
  inlineCode: tw,
  link: iw,
  linkReference: rw,
  list: J6,
  listItem: eA,
  paragraph: tA,
  root: nA,
  strong: Qp,
  text: lA,
  thematicBreak: sA
};
function uA() {
  return {
    enter: {
      table: cA,
      tableData: Ky,
      tableHeader: Ky,
      tableRow: dA
    },
    exit: {
      codeText: pA,
      table: fA,
      tableData: Id,
      tableHeader: Id,
      tableRow: Id
    }
  };
}
function cA(t) {
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
function fA(t) {
  this.exit(t), this.data.inTable = void 0;
}
function dA(t) {
  this.enter({ type: "tableRow", children: [] }, t);
}
function Id(t) {
  this.exit(t);
}
function Ky(t) {
  this.enter({ type: "tableCell", children: [] }, t);
}
function pA(t) {
  let i = this.resume();
  this.data.inTable && (i = i.replace(/\\([\\|])/g, hA));
  const a = this.stack[this.stack.length - 1];
  a.type, a.value = i, this.exit(t);
}
function hA(t, i) {
  return i === "|" ? i : t;
}
function mA(t) {
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
    return g(x(v, j, E), v.align);
  }
  function p(v, S, j, E) {
    const O = b(v, j, E), B = g([O]);
    return B.slice(0, B.indexOf(`
`));
  }
  function m(v, S, j, E) {
    const O = j.enter("tableCell"), B = j.enter("phrasing"), U = j.containerPhrasing(v, {
      ...E,
      before: c,
      after: c
    });
    return B(), O(), U;
  }
  function g(v, S) {
    return j6(v, {
      align: S,
      // @ts-expect-error: `markdown-table` types should support `null`.
      alignDelimiters: o,
      // @ts-expect-error: `markdown-table` types should support `null`.
      padding: a,
      // @ts-expect-error: `markdown-table` types should support `null`.
      stringLength: s
    });
  }
  function x(v, S, j) {
    const E = v.children;
    let O = -1;
    const B = [], U = S.enter("table");
    for (; ++O < E.length; )
      B[O] = b(E[O], S, j);
    return U(), B;
  }
  function b(v, S, j) {
    const E = v.children;
    let O = -1;
    const B = [], U = S.enter("tableRow");
    for (; ++O < E.length; )
      B[O] = m(E[O], v, S, j);
    return U(), B;
  }
  function w(v, S, j) {
    let E = lw.inlineCode(v, S, j);
    return j.stack.includes("tableCell") && (E = E.replace(/\|/g, "\\$&")), E;
  }
}
function gA() {
  return {
    exit: {
      taskListCheckValueChecked: Jy,
      taskListCheckValueUnchecked: Jy,
      paragraph: xA
    }
  };
}
function bA() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: yA }
  };
}
function Jy(t) {
  const i = this.stack[this.stack.length - 2];
  i.type, i.checked = t.type === "taskListCheckValueChecked";
}
function xA(t) {
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
function yA(t, i, a, o) {
  const s = t.children[0], c = typeof t.checked == "boolean" && s && s.type === "paragraph", f = "[" + (t.checked ? "x" : " ") + "] ", p = a.createTracker(o);
  c && p.move(f);
  let m = lw.listItem(t, i, a, {
    ...o,
    ...p.current()
  });
  return c && (m = m.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, g)), m;
  function g(x) {
    return x + f;
  }
}
function vA() {
  return [
    XN(),
    m6(),
    y6(),
    uA(),
    gA()
  ];
}
function wA(t) {
  return {
    extensions: [
      QN(),
      g6(t),
      v6(),
      mA(t),
      bA()
    ]
  };
}
const kA = {
  tokenize: CA,
  partial: !0
}, ow = {
  tokenize: TA,
  partial: !0
}, sw = {
  tokenize: NA,
  partial: !0
}, uw = {
  tokenize: AA,
  partial: !0
}, SA = {
  tokenize: OA,
  partial: !0
}, cw = {
  name: "wwwAutolink",
  tokenize: jA,
  previous: dw
}, fw = {
  name: "protocolAutolink",
  tokenize: EA,
  previous: pw
}, Gi = {
  name: "emailAutolink",
  tokenize: _A,
  previous: hw
}, Si = {};
function zA() {
  return {
    text: Si
  };
}
let Kr = 48;
for (; Kr < 123; )
  Si[Kr] = Gi, Kr++, Kr === 58 ? Kr = 65 : Kr === 91 && (Kr = 97);
Si[43] = Gi;
Si[45] = Gi;
Si[46] = Gi;
Si[95] = Gi;
Si[72] = [Gi, fw];
Si[104] = [Gi, fw];
Si[87] = [Gi, cw];
Si[119] = [Gi, cw];
function _A(t, i, a) {
  const o = this;
  let s, c;
  return f;
  function f(b) {
    return !fp(b) || !hw.call(o, o.previous) || Pp(o.events) ? a(b) : (t.enter("literalAutolink"), t.enter("literalAutolinkEmail"), p(b));
  }
  function p(b) {
    return fp(b) ? (t.consume(b), p) : b === 64 ? (t.consume(b), m) : a(b);
  }
  function m(b) {
    return b === 46 ? t.check(SA, x, g)(b) : b === 45 || b === 95 || Pt(b) ? (c = !0, t.consume(b), m) : x(b);
  }
  function g(b) {
    return t.consume(b), s = !0, m;
  }
  function x(b) {
    return c && s && ln(o.previous) ? (t.exit("literalAutolinkEmail"), t.exit("literalAutolink"), i(b)) : a(b);
  }
}
function jA(t, i, a) {
  const o = this;
  return s;
  function s(f) {
    return f !== 87 && f !== 119 || !dw.call(o, o.previous) || Pp(o.events) ? a(f) : (t.enter("literalAutolink"), t.enter("literalAutolinkWww"), t.check(kA, t.attempt(ow, t.attempt(sw, c), a), a)(f));
  }
  function c(f) {
    return t.exit("literalAutolinkWww"), t.exit("literalAutolink"), i(f);
  }
}
function EA(t, i, a) {
  const o = this;
  let s = "", c = !1;
  return f;
  function f(b) {
    return (b === 72 || b === 104) && pw.call(o, o.previous) && !Pp(o.events) ? (t.enter("literalAutolink"), t.enter("literalAutolinkHttp"), s += String.fromCodePoint(b), t.consume(b), p) : a(b);
  }
  function p(b) {
    if (ln(b) && s.length < 5)
      return s += String.fromCodePoint(b), t.consume(b), p;
    if (b === 58) {
      const w = s.toLowerCase();
      if (w === "http" || w === "https")
        return t.consume(b), m;
    }
    return a(b);
  }
  function m(b) {
    return b === 47 ? (t.consume(b), c ? g : (c = !0, m)) : a(b);
  }
  function g(b) {
    return b === null || wu(b) || st(b) || aa(b) || Nu(b) ? a(b) : t.attempt(ow, t.attempt(sw, x), a)(b);
  }
  function x(b) {
    return t.exit("literalAutolinkHttp"), t.exit("literalAutolink"), i(b);
  }
}
function CA(t, i, a) {
  let o = 0;
  return s;
  function s(f) {
    return (f === 87 || f === 119) && o < 3 ? (o++, t.consume(f), s) : f === 46 && o === 3 ? (t.consume(f), c) : a(f);
  }
  function c(f) {
    return f === null ? a(f) : i(f);
  }
}
function TA(t, i, a) {
  let o, s, c;
  return f;
  function f(g) {
    return g === 46 || g === 95 ? t.check(uw, m, p)(g) : g === null || st(g) || aa(g) || g !== 45 && Nu(g) ? m(g) : (c = !0, t.consume(g), f);
  }
  function p(g) {
    return g === 95 ? o = !0 : (s = o, o = void 0), t.consume(g), f;
  }
  function m(g) {
    return s || o || !c ? a(g) : i(g);
  }
}
function NA(t, i) {
  let a = 0, o = 0;
  return s;
  function s(f) {
    return f === 40 ? (a++, t.consume(f), s) : f === 41 && o < a ? c(f) : f === 33 || f === 34 || f === 38 || f === 39 || f === 41 || f === 42 || f === 44 || f === 46 || f === 58 || f === 59 || f === 60 || f === 63 || f === 93 || f === 95 || f === 126 ? t.check(uw, i, c)(f) : f === null || st(f) || aa(f) ? i(f) : (t.consume(f), s);
  }
  function c(f) {
    return f === 41 && o++, t.consume(f), s;
  }
}
function AA(t, i, a) {
  return o;
  function o(p) {
    return p === 33 || p === 34 || p === 39 || p === 41 || p === 42 || p === 44 || p === 46 || p === 58 || p === 59 || p === 63 || p === 95 || p === 126 ? (t.consume(p), o) : p === 38 ? (t.consume(p), c) : p === 93 ? (t.consume(p), s) : (
      // `<` is an end.
      p === 60 || // So is whitespace.
      p === null || st(p) || aa(p) ? i(p) : a(p)
    );
  }
  function s(p) {
    return p === null || p === 40 || p === 91 || st(p) || aa(p) ? i(p) : o(p);
  }
  function c(p) {
    return ln(p) ? f(p) : a(p);
  }
  function f(p) {
    return p === 59 ? (t.consume(p), o) : ln(p) ? (t.consume(p), f) : a(p);
  }
}
function OA(t, i, a) {
  return o;
  function o(c) {
    return t.consume(c), s;
  }
  function s(c) {
    return Pt(c) ? a(c) : i(c);
  }
}
function dw(t) {
  return t === null || t === 40 || t === 42 || t === 95 || t === 91 || t === 93 || t === 126 || st(t);
}
function pw(t) {
  return !ln(t);
}
function hw(t) {
  return !(t === 47 || fp(t));
}
function fp(t) {
  return t === 43 || t === 45 || t === 46 || t === 95 || Pt(t);
}
function Pp(t) {
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
const DA = {
  tokenize: ZA,
  partial: !0
};
function MA() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: BA,
        continuation: {
          tokenize: IA
        },
        exit: HA
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: LA
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: RA,
        resolveTo: UA
      }
    }
  };
}
function RA(t, i, a) {
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
    const g = oi(o.sliceSerialize({
      start: f.end,
      end: o.now()
    }));
    return g.codePointAt(0) !== 94 || !c.includes(g.slice(1)) ? a(m) : (t.enter("gfmFootnoteCallLabelMarker"), t.consume(m), t.exit("gfmFootnoteCallLabelMarker"), i(m));
  }
}
function UA(t, i) {
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
function LA(t, i, a) {
  const o = this, s = o.parser.gfmFootnotes || (o.parser.gfmFootnotes = []);
  let c = 0, f;
  return p;
  function p(b) {
    return t.enter("gfmFootnoteCall"), t.enter("gfmFootnoteCallLabelMarker"), t.consume(b), t.exit("gfmFootnoteCallLabelMarker"), m;
  }
  function m(b) {
    return b !== 94 ? a(b) : (t.enter("gfmFootnoteCallMarker"), t.consume(b), t.exit("gfmFootnoteCallMarker"), t.enter("gfmFootnoteCallString"), t.enter("chunkString").contentType = "string", g);
  }
  function g(b) {
    if (
      // Too long.
      c > 999 || // Closing brace with nothing.
      b === 93 && !f || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      b === null || b === 91 || st(b)
    )
      return a(b);
    if (b === 93) {
      t.exit("chunkString");
      const w = t.exit("gfmFootnoteCallString");
      return s.includes(oi(o.sliceSerialize(w))) ? (t.enter("gfmFootnoteCallLabelMarker"), t.consume(b), t.exit("gfmFootnoteCallLabelMarker"), t.exit("gfmFootnoteCall"), i) : a(b);
    }
    return st(b) || (f = !0), c++, t.consume(b), b === 92 ? x : g;
  }
  function x(b) {
    return b === 91 || b === 92 || b === 93 ? (t.consume(b), c++, g) : g(b);
  }
}
function BA(t, i, a) {
  const o = this, s = o.parser.gfmFootnotes || (o.parser.gfmFootnotes = []);
  let c, f = 0, p;
  return m;
  function m(S) {
    return t.enter("gfmFootnoteDefinition")._container = !0, t.enter("gfmFootnoteDefinitionLabel"), t.enter("gfmFootnoteDefinitionLabelMarker"), t.consume(S), t.exit("gfmFootnoteDefinitionLabelMarker"), g;
  }
  function g(S) {
    return S === 94 ? (t.enter("gfmFootnoteDefinitionMarker"), t.consume(S), t.exit("gfmFootnoteDefinitionMarker"), t.enter("gfmFootnoteDefinitionLabelString"), t.enter("chunkString").contentType = "string", x) : a(S);
  }
  function x(S) {
    if (
      // Too long.
      f > 999 || // Closing brace with nothing.
      S === 93 && !p || // Space or tab is not supported by GFM for some reason.
      // `\n` and `[` not being supported makes sense.
      S === null || S === 91 || st(S)
    )
      return a(S);
    if (S === 93) {
      t.exit("chunkString");
      const j = t.exit("gfmFootnoteDefinitionLabelString");
      return c = oi(o.sliceSerialize(j)), t.enter("gfmFootnoteDefinitionLabelMarker"), t.consume(S), t.exit("gfmFootnoteDefinitionLabelMarker"), t.exit("gfmFootnoteDefinitionLabel"), w;
    }
    return st(S) || (p = !0), f++, t.consume(S), S === 92 ? b : x;
  }
  function b(S) {
    return S === 91 || S === 92 || S === 93 ? (t.consume(S), f++, x) : x(S);
  }
  function w(S) {
    return S === 58 ? (t.enter("definitionMarker"), t.consume(S), t.exit("definitionMarker"), s.includes(c) || s.push(c), Qe(t, v, "gfmFootnoteDefinitionWhitespace")) : a(S);
  }
  function v(S) {
    return i(S);
  }
}
function IA(t, i, a) {
  return t.check(jo, i, t.attempt(DA, i, a));
}
function HA(t) {
  t.exit("gfmFootnoteDefinition");
}
function ZA(t, i, a) {
  const o = this;
  return Qe(t, s, "gfmFootnoteDefinitionIndent", 5);
  function s(c) {
    const f = o.events[o.events.length - 1];
    return f && f[1].type === "gfmFootnoteDefinitionIndent" && f[2].sliceSerialize(f[1], !0).length === 4 ? i(c) : a(c);
  }
}
function qA(t) {
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
            const x = {
              type: "strikethrough",
              start: Object.assign({}, f[g][1].start),
              end: Object.assign({}, f[m][1].end)
            }, b = {
              type: "strikethroughText",
              start: Object.assign({}, f[g][1].end),
              end: Object.assign({}, f[m][1].start)
            }, w = [["enter", x, p], ["enter", f[g][1], p], ["exit", f[g][1], p], ["enter", b, p]], v = p.parser.constructs.insideSpan.null;
            v && li(w, w.length, 0, Au(v, f.slice(g + 1, m), p)), li(w, w.length, 0, [["exit", b, p], ["enter", f[m][1], p], ["exit", f[m][1], p], ["exit", x, p]]), li(f, g - 1, m - g + 3, w), m = g + w.length - 2;
            break;
          }
      }
    for (m = -1; ++m < f.length; )
      f[m][1].type === "strikethroughSequenceTemporary" && (f[m][1].type = "data");
    return f;
  }
  function c(f, p, m) {
    const g = this.previous, x = this.events;
    let b = 0;
    return w;
    function w(S) {
      return g === 126 && x[x.length - 1][1].type !== "characterEscape" ? m(S) : (f.enter("strikethroughSequenceTemporary"), v(S));
    }
    function v(S) {
      const j = Su(g);
      if (S === 126)
        return b > 1 ? m(S) : (f.consume(S), b++, v);
      if (b < 2 && !a) return m(S);
      const E = f.exit("strikethroughSequenceTemporary"), O = Su(S);
      return E._open = !O || O === 2 && !!j, E._close = !j || j === 2 && !!O, p(S);
    }
  }
}
class $A {
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
    VA(this, i, a, o);
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
function VA(t, i, a, o) {
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
function YA(t, i) {
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
function GA() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: FA,
        resolveAll: XA
      }
    }
  };
}
function FA(t, i, a) {
  const o = this;
  let s = 0, c = 0, f;
  return p;
  function p(Z) {
    let ne = o.events.length - 1;
    for (; ne > -1; ) {
      const {
        type: oe
      } = o.events[ne][1];
      if (oe === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      oe === "linePrefix")
        ne--;
      else
        break;
    }
    const le = ne > -1 ? o.events[ne][1].type : null, Te = le === "tableHead" || le === "tableRow" ? N : m;
    return Te === N && o.parser.lazy[o.now().line] ? a(Z) : Te(Z);
  }
  function m(Z) {
    return t.enter("tableHead"), t.enter("tableRow"), g(Z);
  }
  function g(Z) {
    return Z === 124 || (f = !0, c += 1), x(Z);
  }
  function x(Z) {
    return Z === null ? a(Z) : _e(Z) ? c > 1 ? (c = 0, o.interrupt = !0, t.exit("tableRow"), t.enter("lineEnding"), t.consume(Z), t.exit("lineEnding"), v) : a(Z) : Be(Z) ? Qe(t, x, "whitespace")(Z) : (c += 1, f && (f = !1, s += 1), Z === 124 ? (t.enter("tableCellDivider"), t.consume(Z), t.exit("tableCellDivider"), f = !0, x) : (t.enter("data"), b(Z)));
  }
  function b(Z) {
    return Z === null || Z === 124 || st(Z) ? (t.exit("data"), x(Z)) : (t.consume(Z), Z === 92 ? w : b);
  }
  function w(Z) {
    return Z === 92 || Z === 124 ? (t.consume(Z), b) : b(Z);
  }
  function v(Z) {
    return o.interrupt = !1, o.parser.lazy[o.now().line] ? a(Z) : (t.enter("tableDelimiterRow"), f = !1, Be(Z) ? Qe(t, S, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(Z) : S(Z));
  }
  function S(Z) {
    return Z === 45 || Z === 58 ? E(Z) : Z === 124 ? (f = !0, t.enter("tableCellDivider"), t.consume(Z), t.exit("tableCellDivider"), j) : K(Z);
  }
  function j(Z) {
    return Be(Z) ? Qe(t, E, "whitespace")(Z) : E(Z);
  }
  function E(Z) {
    return Z === 58 ? (c += 1, f = !0, t.enter("tableDelimiterMarker"), t.consume(Z), t.exit("tableDelimiterMarker"), O) : Z === 45 ? (c += 1, O(Z)) : Z === null || _e(Z) ? V(Z) : K(Z);
  }
  function O(Z) {
    return Z === 45 ? (t.enter("tableDelimiterFiller"), B(Z)) : K(Z);
  }
  function B(Z) {
    return Z === 45 ? (t.consume(Z), B) : Z === 58 ? (f = !0, t.exit("tableDelimiterFiller"), t.enter("tableDelimiterMarker"), t.consume(Z), t.exit("tableDelimiterMarker"), U) : (t.exit("tableDelimiterFiller"), U(Z));
  }
  function U(Z) {
    return Be(Z) ? Qe(t, V, "whitespace")(Z) : V(Z);
  }
  function V(Z) {
    return Z === 124 ? S(Z) : Z === null || _e(Z) ? !f || s !== c ? K(Z) : (t.exit("tableDelimiterRow"), t.exit("tableHead"), i(Z)) : K(Z);
  }
  function K(Z) {
    return a(Z);
  }
  function N(Z) {
    return t.enter("tableRow"), X(Z);
  }
  function X(Z) {
    return Z === 124 ? (t.enter("tableCellDivider"), t.consume(Z), t.exit("tableCellDivider"), X) : Z === null || _e(Z) ? (t.exit("tableRow"), i(Z)) : Be(Z) ? Qe(t, X, "whitespace")(Z) : (t.enter("data"), pe(Z));
  }
  function pe(Z) {
    return Z === null || Z === 124 || st(Z) ? (t.exit("data"), X(Z)) : (t.consume(Z), Z === 92 ? je : pe);
  }
  function je(Z) {
    return Z === 92 || Z === 124 ? (t.consume(Z), pe) : pe(Z);
  }
}
function XA(t, i) {
  let a = -1, o = !0, s = 0, c = [0, 0, 0, 0], f = [0, 0, 0, 0], p = !1, m = 0, g, x, b;
  const w = new $A();
  for (; ++a < t.length; ) {
    const v = t[a], S = v[1];
    v[0] === "enter" ? S.type === "tableHead" ? (p = !1, m !== 0 && (Wy(w, i, m, g, x), x = void 0, m = 0), g = {
      type: "table",
      start: Object.assign({}, S.start),
      // Note: correct end is set later.
      end: Object.assign({}, S.end)
    }, w.add(a, 0, [["enter", g, i]])) : S.type === "tableRow" || S.type === "tableDelimiterRow" ? (o = !0, b = void 0, c = [0, 0, 0, 0], f = [0, a + 1, 0, 0], p && (p = !1, x = {
      type: "tableBody",
      start: Object.assign({}, S.start),
      // Note: correct end is set later.
      end: Object.assign({}, S.end)
    }, w.add(a, 0, [["enter", x, i]])), s = S.type === "tableDelimiterRow" ? 2 : x ? 3 : 1) : s && (S.type === "data" || S.type === "tableDelimiterMarker" || S.type === "tableDelimiterFiller") ? (o = !1, f[2] === 0 && (c[1] !== 0 && (f[0] = f[1], b = lu(w, i, c, s, void 0, b), c = [0, 0, 0, 0]), f[2] = a)) : S.type === "tableCellDivider" && (o ? o = !1 : (c[1] !== 0 && (f[0] = f[1], b = lu(w, i, c, s, void 0, b)), c = f, f = [c[1], a, 0, 0])) : S.type === "tableHead" ? (p = !0, m = a) : S.type === "tableRow" || S.type === "tableDelimiterRow" ? (m = a, c[1] !== 0 ? (f[0] = f[1], b = lu(w, i, c, s, a, b)) : f[1] !== 0 && (b = lu(w, i, f, s, a, b)), s = 0) : s && (S.type === "data" || S.type === "tableDelimiterMarker" || S.type === "tableDelimiterFiller") && (f[3] = a);
  }
  for (m !== 0 && Wy(w, i, m, g, x), w.consume(i.events), a = -1; ++a < i.events.length; ) {
    const v = i.events[a];
    v[0] === "enter" && v[1].type === "table" && (v[1]._align = YA(i.events, a));
  }
  return t;
}
function lu(t, i, a, o, s, c) {
  const f = o === 1 ? "tableHeader" : o === 2 ? "tableDelimiter" : "tableData", p = "tableContent";
  a[0] !== 0 && (c.end = Object.assign({}, tl(i.events, a[0])), t.add(a[0], 0, [["exit", c, i]]));
  const m = tl(i.events, a[1]);
  if (c = {
    type: f,
    start: Object.assign({}, m),
    // Note: correct end is set later.
    end: Object.assign({}, m)
  }, t.add(a[1], 0, [["enter", c, i]]), a[2] !== 0) {
    const g = tl(i.events, a[2]), x = tl(i.events, a[3]), b = {
      type: p,
      start: Object.assign({}, g),
      end: Object.assign({}, x)
    };
    if (t.add(a[2], 0, [["enter", b, i]]), o !== 2) {
      const w = i.events[a[2]], v = i.events[a[3]];
      if (w[1].end = Object.assign({}, v[1].end), w[1].type = "chunkText", w[1].contentType = "text", a[3] > a[2] + 1) {
        const S = a[2] + 1, j = a[3] - a[2] - 1;
        t.add(S, j, []);
      }
    }
    t.add(a[3] + 1, 0, [["exit", b, i]]);
  }
  return s !== void 0 && (c.end = Object.assign({}, tl(i.events, s)), t.add(s, 0, [["exit", c, i]]), c = void 0), c;
}
function Wy(t, i, a, o, s) {
  const c = [], f = tl(i.events, a);
  s && (s.end = Object.assign({}, f), c.push(["exit", s, i])), o.end = Object.assign({}, f), c.push(["exit", o, i]), t.add(a + 1, 0, c);
}
function tl(t, i) {
  const a = t[i], o = a[0] === "enter" ? "start" : "end";
  return a[1][o];
}
const QA = {
  name: "tasklistCheck",
  tokenize: KA
};
function PA() {
  return {
    text: {
      91: QA
    }
  };
}
function KA(t, i, a) {
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
    return st(m) ? (t.enter("taskListCheckValueUnchecked"), t.consume(m), t.exit("taskListCheckValueUnchecked"), f) : m === 88 || m === 120 ? (t.enter("taskListCheckValueChecked"), t.consume(m), t.exit("taskListCheckValueChecked"), f) : a(m);
  }
  function f(m) {
    return m === 93 ? (t.enter("taskListCheckMarker"), t.consume(m), t.exit("taskListCheckMarker"), t.exit("taskListCheck"), p) : a(m);
  }
  function p(m) {
    return _e(m) ? i(m) : Be(m) ? t.check({
      tokenize: JA
    }, i, a)(m) : a(m);
  }
}
function JA(t, i, a) {
  return Qe(t, o, "whitespace");
  function o(s) {
    return s === null ? a(s) : i(s);
  }
}
function WA(t) {
  return E0([
    zA(),
    MA(),
    qA(t),
    GA(),
    PA()
  ]);
}
const eO = {};
function tO(t) {
  const i = (
    /** @type {Processor<Root>} */
    this
  ), a = t || eO, o = i.data(), s = o.micromarkExtensions || (o.micromarkExtensions = []), c = o.fromMarkdownExtensions || (o.fromMarkdownExtensions = []), f = o.toMarkdownExtensions || (o.toMarkdownExtensions = []);
  s.push(WA(a)), c.push(vA()), f.push(wA(a));
}
const Jr = /* @__PURE__ */ new Map();
function nO({ file: t }) {
  const [i, a] = G.useState(Jr.get(t.id) || ""), [o, s] = G.useState(!1);
  return G.useEffect(() => {
    if (Jr.has(t.id)) {
      a(Jr.get(t.id));
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
          Jr.size >= 20 && Jr.delete(Jr.keys().next().value), Jr.set(t.id, m), a(m);
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
function dp(t) {
  return typeof t == "string" || typeof t == "number" ? String(t) : Array.isArray(t) ? t.map(dp).join("") : G.isValidElement(t) ? dp(t.props.children) : "";
}
function pp({ text: t, label: i }) {
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
        a ? /* @__PURE__ */ h.jsx(On, { size: 13 }) : /* @__PURE__ */ h.jsx(AS, { size: 13 }),
        i && /* @__PURE__ */ h.jsx("span", { children: a ? "Copied" : i }),
        s && "Select to copy"
      ]
    }
  );
}
function mw({ text: t, onError: i }) {
  return /* @__PURE__ */ h.jsx("div", { className: "markdown", children: /* @__PURE__ */ h.jsx(
    BN,
    {
      remarkPlugins: [tO],
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
              /* @__PURE__ */ h.jsx(Zd, { size: 10, className: "inline-link-icon" })
            ]
          }
        ),
        img: ({ alt: a }) => /* @__PURE__ */ h.jsxs("span", { className: "remote-image", children: [
          "[Image: ",
          a || "External image",
          "]"
        ] }),
        pre: ({ children: a }) => {
          const o = Array.isArray(a) ? a[0] : a, c = (G.isValidElement(o) && o.props.className || "").replace(/^language-/, "").trim() || "code", f = dp(a).replace(/\n$/, "");
          return /* @__PURE__ */ h.jsxs("div", { className: "code-block", children: [
            /* @__PURE__ */ h.jsxs("div", { className: "code-block-header", children: [
              /* @__PURE__ */ h.jsx("span", { className: "code-block-lang", children: c }),
              /* @__PURE__ */ h.jsx(pp, { text: f, label: "Copy" })
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
function gw({
  item: t,
  sessionId: i,
  onError: a
}) {
  const [o, s] = G.useState(!1), [c, f] = G.useState(), [p, m] = G.useState(!1), g = t.status === "inProgress", x = t.tool || t.label || t.role || t.kind.replace(/([A-Z])/g, " $1").toLowerCase(), b = t.statusLine || t.objective || t.commandText || t.fallbackText;
  return /* @__PURE__ */ h.jsxs("div", { className: `tool-item ${g ? "tool-running" : ""} ${o ? "open" : ""}`, children: [
    /* @__PURE__ */ h.jsxs(
      "button",
      {
        type: "button",
        className: "tool-summary-button",
        "aria-expanded": o,
        onClick: () => s((w) => !w),
        children: [
          /* @__PURE__ */ h.jsx("span", { className: "tool-state", children: g ? /* @__PURE__ */ h.jsx(il, { size: 14, className: "spin" }) : t.status === "completed" ? /* @__PURE__ */ h.jsx(On, { size: 14 }) : /* @__PURE__ */ h.jsx(ia, { size: 14 }) }),
          t.kind === "subagent" ? /* @__PURE__ */ h.jsx(FS, { size: 14 }) : t.kind === "toolCall" ? /* @__PURE__ */ h.jsx(hu, { size: 14 }) : /* @__PURE__ */ h.jsx(nl, { size: 14 }),
          /* @__PURE__ */ h.jsx("span", { className: "tool-title", children: x }),
          b && /* @__PURE__ */ h.jsx("span", { className: "tool-summary", children: b }),
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
          /* @__PURE__ */ h.jsx(wi, { className: `details-chevron ${o ? "open" : ""}`, size: 13 })
        ]
      }
    ),
    /* @__PURE__ */ h.jsx("div", { className: `sidebar-collapse ${o ? "open" : ""}`, children: /* @__PURE__ */ h.jsx("div", { className: "sidebar-collapse-inner", children: /* @__PURE__ */ h.jsxs("div", { className: "tool-body", children: [
      t.objective && /* @__PURE__ */ h.jsx("p", { children: t.objective }),
      t.args && /* @__PURE__ */ h.jsxs("div", { className: "tool-arguments", children: [
        /* @__PURE__ */ h.jsx("span", { className: "eyebrow", children: "INPUT" }),
        /* @__PURE__ */ h.jsx("pre", { children: aO(t.args) })
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
function iO({
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
          /* @__PURE__ */ h.jsx("span", { className: "tool-state", children: /* @__PURE__ */ h.jsx(On, { size: 14 }) }),
          /* @__PURE__ */ h.jsx(Bv, { size: 14 }),
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
          /* @__PURE__ */ h.jsx(wi, { className: `details-chevron ${o ? "open" : ""}`, size: 13 })
        ]
      }
    ),
    /* @__PURE__ */ h.jsx("div", { className: `sidebar-collapse ${o ? "open" : ""}`, children: /* @__PURE__ */ h.jsx("div", { className: "sidebar-collapse-inner", children: /* @__PURE__ */ h.jsx("div", { className: "tool-group-list", children: t.map((m) => /* @__PURE__ */ h.jsx(gw, { item: m, sessionId: i, onError: a }, m.itemId)) }) }) })
  ] });
}
function rO({
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
          t.status === "inProgress" ? /* @__PURE__ */ h.jsx(il, { size: 13, className: "spin" }) : /* @__PURE__ */ h.jsx(On, { size: 13 }),
          /* @__PURE__ */ h.jsx("span", { children: t.status === "inProgress" ? "Thinking" : "Reasoning summary" }),
          /* @__PURE__ */ h.jsx(wi, { size: 12, className: `details-chevron ${a ? "open" : ""}` })
        ]
      }
    ),
    /* @__PURE__ */ h.jsx("div", { className: `sidebar-collapse ${a ? "open" : ""}`, children: /* @__PURE__ */ h.jsx("div", { className: "sidebar-collapse-inner", children: /* @__PURE__ */ h.jsx(
      mw,
      {
        text: t.summary?.join(`

`) || t.text || "No reasoning text was provided by the model.",
        onError: i
      }
    ) }) })
  ] });
}
function aO(t) {
  try {
    return JSON.stringify(JSON.parse(t), null, 2);
  } catch {
    return t;
  }
}
function lO({
  approval: t,
  onError: i
}) {
  const [a, o] = G.useState(!1);
  return /* @__PURE__ */ h.jsxs("section", { className: "approval-card", "aria-label": "Approval required", children: [
    /* @__PURE__ */ h.jsxs("div", { className: "request-heading", children: [
      /* @__PURE__ */ h.jsx("span", { className: "request-icon", children: /* @__PURE__ */ h.jsx($S, { size: 18 }) }),
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
function oO({
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
          /* @__PURE__ */ h.jsx("span", { className: "request-icon", children: /* @__PURE__ */ h.jsx(NS, { size: 18 }) }),
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
                      onChange: () => o((x) => {
                        if (p.selection.mode === "single")
                          return {
                            ...x,
                            [p.id]: { questionId: p.id, selectedLabel: m.label }
                          };
                        const b = x[p.id]?.selectedLabels || [];
                        return {
                          ...x,
                          [p.id]: {
                            questionId: p.id,
                            selectedLabels: g ? b.filter((w) => w !== m.label) : [...b, m.label]
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
function sO({
  view: t,
  onError: i
}) {
  const a = G.useRef(null), o = G.useRef(!0), [s, c] = G.useState(!1);
  G.useEffect(() => {
    o.current && a.current && (a.current.scrollTop = a.current.scrollHeight);
  }, [t]);
  const f = t.items.filter((m) => !m.retracted && !p1(m)), p = [];
  for (const m of f) {
    const g = !["userMessage", "agentMessage", "reasoning"].includes(m.kind) && m.status === "completed", x = p[p.length - 1];
    g && x?.type === "toolGroup" ? x.items.push(m) : g && x?.type === "single" && !["userMessage", "agentMessage", "reasoning"].includes(x.item.kind) && x.item.status === "completed" ? p[p.length - 1] = { type: "toolGroup", items: [x.item, m] } : p.push({ type: "single", item: m });
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
            /* @__PURE__ */ h.jsx(go, { size: 23 }),
            /* @__PURE__ */ h.jsx("span", { children: "Conversation with Muse" })
          ] }),
          t.historyNotice && /* @__PURE__ */ h.jsx("div", { className: "inline-notice", children: t.historyNotice }),
          p.map((m) => m.type === "toolGroup" && m.items.length >= 3 ? /* @__PURE__ */ h.jsx(
            iO,
            {
              items: m.items,
              sessionId: t.session.sessionId,
              onError: i
            },
            m.items[0].itemId
          ) : (m.type === "toolGroup" ? m.items : [m.item]).map((x) => {
            if (x.kind === "userMessage") {
              const b = wE(x.displayText || x.text) || x.displayText || x.text || "";
              return /* @__PURE__ */ h.jsxs("article", { className: "message user-message", children: [
                /* @__PURE__ */ h.jsxs("div", { className: "message-heading", children: [
                  /* @__PURE__ */ h.jsx("span", { className: "avatar user-avatar", children: "Y" }),
                  /* @__PURE__ */ h.jsx("strong", { children: "You" }),
                  x.recordedAt && /* @__PURE__ */ h.jsx("time", { children: new Date(x.recordedAt).toLocaleTimeString(void 0, {
                    hour: "numeric",
                    minute: "2-digit"
                  }) }),
                  /* @__PURE__ */ h.jsx(pp, { text: b })
                ] }),
                /* @__PURE__ */ h.jsx("div", { className: "user-message-text", children: b }),
                x.imageRefs?.map((w) => /* @__PURE__ */ h.jsx(nO, { file: w }, w.id))
              ] }, x.itemId);
            }
            return x.kind === "agentMessage" ? /* @__PURE__ */ h.jsxs("article", { className: "message agent-message", children: [
              /* @__PURE__ */ h.jsxs("div", { className: "message-heading", children: [
                /* @__PURE__ */ h.jsx("span", { className: "avatar muse-avatar", children: /* @__PURE__ */ h.jsx(go, { size: 26 }) }),
                /* @__PURE__ */ h.jsx("strong", { children: "Muse" }),
                x.status === "inProgress" && /* @__PURE__ */ h.jsx("span", { className: "streaming-label", children: "Composing" }),
                /* @__PURE__ */ h.jsx(pp, { text: x.text || "" })
              ] }),
              /* @__PURE__ */ h.jsx(
                mw,
                {
                  text: x.text || (x.status === "inProgress" ? "…" : ""),
                  onError: i
                }
              )
            ] }, x.itemId) : x.kind === "reasoning" ? /* @__PURE__ */ h.jsx(rO, { item: x, onError: i }, x.itemId) : /* @__PURE__ */ h.jsx(
              gw,
              {
                item: x,
                sessionId: t.session.sessionId,
                onError: i
              },
              x.itemId
            );
          })),
          t.approvals.map((m) => /* @__PURE__ */ h.jsx(
            lO,
            {
              approval: m,
              onError: i
            },
            `${m.approvalId}:${m.currentRequirementId.sourceIndex}`
          )),
          t.questions.map((m) => /* @__PURE__ */ h.jsx(oO, { request: m, onError: i }, m.userInputId)),
          t.error && /* @__PURE__ */ h.jsxs("div", { className: "inline-error", role: "alert", children: [
            /* @__PURE__ */ h.jsx("strong", { children: "Muse couldn’t finish this turn." }),
            /* @__PURE__ */ h.jsx("p", { children: t.error }),
            /* @__PURE__ */ h.jsx("span", { children: "Your conversation is saved. You can send a follow-up or reconnect." })
          ] }),
          f.length === 0 && /* @__PURE__ */ h.jsxs("div", { className: "empty-conversation", children: [
            /* @__PURE__ */ h.jsx(go, { size: 48 }),
            /* @__PURE__ */ h.jsx("h2", { children: "Start a conversation" }),
            /* @__PURE__ */ h.jsx("p", { children: "Ask a question or describe what you want to build." })
          ] })
        ] })
      }
    ),
    s && /* @__PURE__ */ h.jsx(
      bn,
      {
        className: "jump-button",
        label: "Jump to latest message",
        onClick: () => {
          o.current = !0, a.current?.scrollTo({ top: a.current.scrollHeight, behavior: "smooth" }), c(!1);
        },
        children: /* @__PURE__ */ h.jsx(SS, { size: 17 })
      }
    )
  ] });
}
function uO(t) {
  return t.directory ? /* @__PURE__ */ h.jsx(Dv, { size: 15, className: "file-icon folder" }) : /\.(ts|tsx|js|jsx|mjs|cjs|py|rs|go|rb|java|c|cpp|h|swift|css|scss|html|sh)$/i.test(t.name) ? /* @__PURE__ */ h.jsx(nl, { size: 15, className: "file-icon code" }) : /\.(md|mdx|txt|json|yaml|yml|toml|lock)$/i.test(t.name) ? /* @__PURE__ */ h.jsx(Ev, { size: 15, className: "file-icon doc" }) : /* @__PURE__ */ h.jsx(MS, { size: 15, className: "file-icon" });
}
function cO({
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
        /* @__PURE__ */ h.jsx(vo, { size: 15 }),
        "Open project"
      ] })
    ] }),
    /* @__PURE__ */ h.jsxs("div", { className: "project-grid", children: [
      t.map((f, p) => {
        const m = i.filter((b) => b.workspaceRoot === f), g = m.map((b) => b.lastActivityAt || b.updatedAt).sort().at(-1), x = s[f];
        return /* @__PURE__ */ h.jsxs("button", { className: "project-card", onClick: () => o(f), children: [
          /* @__PURE__ */ h.jsxs("div", { className: "project-card-top", children: [
            /* @__PURE__ */ h.jsx("span", { className: `project-card-icon hue-${p % 3}`, children: /* @__PURE__ */ h.jsx(Sr, { size: 24, strokeWidth: 1.5 }) }),
            x?.isRepository && /* @__PURE__ */ h.jsxs("span", { className: "project-git-pills", children: [
              x.branch && /* @__PURE__ */ h.jsxs("span", { className: "project-git-pill", children: [
                /* @__PURE__ */ h.jsx(Rv, { size: 11 }),
                x.branch
              ] }),
              /* @__PURE__ */ h.jsx("span", { className: `project-git-pill ${x.changes.length ? "dirty" : "clean"}`, children: x.changes.length ? `${x.changes.length} changed` : "Clean" })
            ] })
          ] }),
          /* @__PURE__ */ h.jsx("h2", { children: $i(f) }),
          /* @__PURE__ */ h.jsx("p", { children: f.replace(/^(?:\/Users\/[^/]+|\/home\/[^/]+|[A-Za-z]:\\Users\\[^\\]+)/, "~") }),
          /* @__PURE__ */ h.jsxs("footer", { children: [
            /* @__PURE__ */ h.jsxs("span", { children: [
              m.length,
              " conversation",
              m.length === 1 ? "" : "s",
              g ? ` · ${f0(g)}` : ""
            ] }),
            /* @__PURE__ */ h.jsx(kr, { size: 16 })
          ] })
        ] }, f);
      }),
      /* @__PURE__ */ h.jsxs("button", { className: "project-card add-project", onClick: a, children: [
        /* @__PURE__ */ h.jsx(vo, { size: 26, strokeWidth: 1.2 }),
        /* @__PURE__ */ h.jsx("h2", { children: "Open project" }),
        /* @__PURE__ */ h.jsx("p", { children: "Open a folder on your Mac." })
      ] })
    ] }),
    /* @__PURE__ */ h.jsx("p", { className: "page-footnote", children: "Projects stay right where they are. Muse works in the folders you choose." })
  ] });
}
function fO({
  project: t,
  onOpen: i,
  onMention: a
}) {
  const [o, s] = G.useState(""), [c, f] = G.useState([]), [p, m] = G.useState(""), [g, x] = G.useState(""), [b, w] = G.useState(""), [v, S] = G.useState(""), [j, E] = G.useState(!1);
  if (G.useEffect(() => {
    s(""), m(""), x(""), w("");
  }, [t]), G.useEffect(() => {
    if (!t) return;
    let V = !1;
    return E(!0), S(""), f([]), window.muse.listFiles(t, o).then((K) => {
      V || f(K);
    }).catch((K) => {
      V || S(K.message);
    }).finally(() => {
      V || E(!1);
    }), () => {
      V = !0;
    };
  }, [t, o]), G.useEffect(() => {
    if (!p) return;
    let V = !1;
    return x("Loading preview…"), window.muse.readFile(t, p).then((K) => {
      V || x(K);
    }).catch((K) => {
      V || x(K.message);
    }), () => {
      V = !0;
    };
  }, [t, p]), !t)
    return /* @__PURE__ */ h.jsxs("section", { className: "workspace-page page-empty", children: [
      /* @__PURE__ */ h.jsx(Sr, { size: 36, strokeWidth: 1.2 }),
      /* @__PURE__ */ h.jsx("h1", { children: "Files" }),
      /* @__PURE__ */ h.jsx("p", { children: "Choose a project to explore its files and bring context into a conversation." }),
      /* @__PURE__ */ h.jsxs("button", { className: "button primary", onClick: i, children: [
        "Open project ",
        /* @__PURE__ */ h.jsx(kr, { size: 14 })
      ] })
    ] });
  const O = c.filter((V) => V.name.toLowerCase().includes(b.toLowerCase())).sort((V, K) => Number(K.directory) - Number(V.directory) || V.name.localeCompare(K.name)), B = o ? o.split("/").filter(Boolean) : [], U = p && g ? g.split(`
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
              /* @__PURE__ */ h.jsx(Sr, { size: 13 }),
              /* @__PURE__ */ h.jsx("span", { children: $i(t) })
            ]
          }
        ),
        /* @__PURE__ */ h.jsx(wi, { size: 12 }),
        B.length === 0 ? /* @__PURE__ */ h.jsx("span", { className: "breadcrumb-segment current", children: "Project root" }) : B.map((V, K) => {
          const N = B.slice(0, K + 1).join("/"), X = K === B.length - 1;
          return /* @__PURE__ */ h.jsxs("span", { className: "breadcrumb-part", children: [
            K > 0 && /* @__PURE__ */ h.jsx(wi, { size: 12 }),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                type: "button",
                className: `breadcrumb-segment ${X ? "current" : ""}`,
                onClick: () => {
                  s(N), w("");
                },
                children: V
              }
            )
          ] }, N);
        })
      ] })
    ] }) }),
    /* @__PURE__ */ h.jsxs("div", { className: "file-browser", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "file-browser-sidebar", children: [
        /* @__PURE__ */ h.jsx("div", { className: "file-search-bar", children: /* @__PURE__ */ h.jsxs("div", { className: "file-search", children: [
          /* @__PURE__ */ h.jsx(pu, { size: 14 }),
          /* @__PURE__ */ h.jsx(
            "input",
            {
              "aria-label": "Filter files",
              placeholder: "Find in this folder…",
              value: b,
              onChange: (V) => w(V.target.value)
            }
          ),
          b && /* @__PURE__ */ h.jsx(
            "button",
            {
              type: "button",
              className: "file-search-clear",
              "aria-label": "Clear filter",
              onClick: () => w(""),
              children: /* @__PURE__ */ h.jsx(ia, { size: 13 })
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
                /* @__PURE__ */ h.jsx(zS, { size: 14 }),
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
                uO(V),
                /* @__PURE__ */ h.jsx("span", { children: V.name }),
                V.directory && /* @__PURE__ */ h.jsx(wi, { size: 13, className: "file-row-chevron" })
              ]
            },
            V.path
          )),
          !j && !v && !O.length && /* @__PURE__ */ h.jsx("p", { className: "file-list-message", children: b ? "No matching files." : "This folder is empty." })
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
            /* @__PURE__ */ h.jsx(nl, { size: 15 }),
            /* @__PURE__ */ h.jsx("span", { children: p }),
            U > 0 && /* @__PURE__ */ h.jsxs("small", { children: [
              U,
              " lines"
            ] })
          ] }),
          /* @__PURE__ */ h.jsxs("button", { className: "file-ask-button text-button", onClick: () => a(p), children: [
            "Ask UniPi ",
            /* @__PURE__ */ h.jsx(kr, { size: 12 })
          ] })
        ] }),
        /* @__PURE__ */ h.jsx("pre", { children: g })
      ] }) : /* @__PURE__ */ h.jsxs("div", { className: "file-preview-empty", children: [
        /* @__PURE__ */ h.jsx("span", { className: "file-empty-badge", children: /* @__PURE__ */ h.jsx(nl, { size: 24, strokeWidth: 1.4 }) }),
        /* @__PURE__ */ h.jsx("h3", { children: "File preview" }),
        /* @__PURE__ */ h.jsx("p", { children: "Select a file on the left to inspect its contents or reference it in chat." })
      ] }) })
    ] })
  ] });
}
const dO = [
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
function pO({
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
      /* @__PURE__ */ h.jsx(uv, { size: 32, strokeWidth: 1.2 })
    ] }),
    /* @__PURE__ */ h.jsx("div", { className: "guides", children: dO.map((f, p) => {
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
              /* @__PURE__ */ h.jsx(wi, { size: 15, className: "guide-chevron" })
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
          /* @__PURE__ */ h.jsx(kr, { size: 14 })
        ]
      }
    ),
    /* @__PURE__ */ h.jsx("p", { className: "page-footnote", children: "UniPi is an independent community app. Your CLI remains the home of your account and conversations." })
  ] }) });
}
const hO = [
  {
    icon: VS,
    title: "Plan a feature",
    description: "Turn an idea into an approach",
    prompt: "I have an idea I’d like to build. First, help me think through the approach. "
  },
  {
    icon: xv,
    title: "Explore the project",
    description: "Understand the code and architecture",
    prompt: "Explore this project and give me a clear tour of its architecture, key files, and how to run it. Do not make changes yet."
  },
  {
    icon: Bv,
    title: "Review the code",
    description: "Find bugs and improvements",
    prompt: "Review this project for bugs, rough edges, and opportunities to simplify. Explain the most useful improvements before making changes."
  }
];
function mO(t, i) {
  if (i.includes(t.sessionId)) return "Pinned";
  const a = new Date(t.lastActivityAt || t.updatedAt), o = /* @__PURE__ */ new Date();
  if (o.setHours(0, 0, 0, 0), a >= o) return "Today";
  const s = new Date(o);
  if (s.setDate(o.getDate() - 1), a >= s) return "Yesterday";
  const c = new Date(o);
  return c.setDate(o.getDate() - 7), a >= c ? "Previous 7 days" : "Earlier";
}
function gO() {
  const [t, i] = G.useState(() => vE.parse({})), [a, o] = G.useState({ state: "connecting" }), [s, c] = G.useState("0.2.0"), [f, p] = G.useState("darwin"), [m, g] = G.useState([]), [x, b] = G.useState(null), [w, v] = G.useState(!0), [S, j] = G.useState(""), [E, O] = G.useState(""), [B, U] = G.useState(null), [V, K] = G.useState([]), [N, X] = G.useState(""), [pe, je] = G.useState({}), [Z, ne] = G.useState(!1), [le, Te] = G.useState(!1), [oe, te] = G.useState(!0), [W, ce] = G.useState(!1), [be, Ne] = G.useState(!1), [z, Ve] = G.useState("chat"), [it, T] = G.useState(!1), [C, J] = G.useState(!1), [re, ge] = G.useState(!0), [Ce, $] = G.useState(!0), [he, ae] = G.useState({}), [fe, ft] = G.useState(!1), [vn, Jt] = G.useState(""), [at, Ie] = G.useState(null), [Ge, Ot] = G.useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ), Xt = G.useRef(null), xt = G.useRef(0), Mn = G.useRef(0), zi = G.useRef(!1), Rn = G.useRef(() => {
  }), _i = G.useRef(void 0), Un = t.theme === "system" ? Ge ? "moonlight" : "daylight" : t.theme, Y = f === "darwin" ? "⌘" : "Ctrl", ee = B?.session.sessionId || `new:${E}`, ke = pe[ee] || "", Ae = B?.session.status === "running", Ue = G.useCallback((H) => Ie({ message: H, kind: "error" }), []), Ke = (H) => Ie({ message: H, kind: "success" }), mt = G.useCallback(async () => {
    const H = ++Mn.current;
    zi.current || v(!0), j("");
    try {
      const de = /* @__PURE__ */ new Map(), xe = /* @__PURE__ */ new Set();
      let ye;
      do {
        const un = await window.muse.listSessions(ye);
        if (H !== Mn.current) return;
        for (const kn of un.sessions) de.set(kn.sessionId, kn);
        if (g([...de.values()]), b(un.nextCursor), ye = un.nextCursor || void 0, ye && xe.has(ye))
          throw new Error("Muse returned a repeated history cursor. Reconnect to refresh history.");
        ye && xe.add(ye);
      } while (ye);
      zi.current = !0;
    } catch (de) {
      H === Mn.current && j(de instanceof Error ? de.message : String(de));
    } finally {
      H === Mn.current && v(!1);
    }
  }, []), _t = G.useRef({}), wn = G.useRef(void 0), Ln = G.useRef(0);
  G.useEffect(() => () => clearTimeout(wn.current), []);
  const on = G.useCallback(
    (H) => {
      _t.current = { ..._t.current, ...H }, i((xe) => ({ ...xe, ...H }));
      const de = ++Ln.current;
      clearTimeout(wn.current), wn.current = setTimeout(() => {
        const xe = { ..._t.current };
        window.muse.savePreferences(xe).then((ye) => {
          de === Ln.current && (_t.current = {}, i(ye));
        }).catch((ye) => Ue(ye.message));
      }, 250);
    },
    [Ue]
  );
  G.useEffect(() => {
    const H = window.matchMedia("(prefers-color-scheme: dark)"), de = () => Ot(H.matches);
    return H.addEventListener("change", de), () => H.removeEventListener("change", de);
  }, []), G.useEffect(() => {
  }, [Un, t.fontSize, t.reduceMotion]), G.useEffect(() => {
    if (!at || at.kind === "error") return;
    const H = setTimeout(() => Ie(null), 4e3);
    return () => clearTimeout(H);
  }, [at]), G.useEffect(() => {
    const H = (xe) => {
      xe.type === "connection" && o(xe.status), xe.type === "preferences" && i({ ...xe.preferences, ..._t.current }), xe.type === "error" && Ue(xe.message), xe.type === "menu" && Rn.current(xe.action), xe.type === "session" && (xe.view.session.sessionId === Xt.current && U(xe.view), g(
        (ye) => ye.map(
          (un) => un.sessionId === xe.view.session.sessionId ? xe.view.session : un
        )
      )), xe.type === "sessions-changed" && (clearTimeout(_i.current), _i.current = setTimeout(() => {
        mt();
      }, 250));
    }, de = window.muse.onEvent(H);
    return window.muse.bootstrap().then((xe) => {
      i(xe.preferences), o(xe.status), c(xe.version), p(xe.platform || "darwin"), O(xe.preferences.recentProjects[0] || "");
    }).catch((xe) => Ue(xe.message)), () => {
      de(), clearTimeout(_i.current), Mn.current++;
    };
  }, [mt, Ue]), G.useEffect(() => {
    a.state === "ready" && (mt(), window.muse.models().then((H) => {
      K(H), X((de) => de || H.find((xe) => xe.isDefault)?.modelId || "");
    }).catch((H) => Ue(H.message)));
  }, [a.state, mt, Ue]);
  const Wt = () => {
    Ve("chat"), xt.current++, Xt.current = null, U(null), Te(!1), J(!1);
  }, dt = async () => {
    try {
      const H = await window.muse.chooseProject();
      H && (O(H), Wt());
    } catch (H) {
      Ue(H instanceof Error ? H.message : String(H));
    }
  }, Dt = async (H) => {
    if (Ve("chat"), Xt.current === H && B?.session.sessionId === H) return;
    const de = ++xt.current;
    !B && Te(!0), Xt.current = H;
    try {
      const ye = await window.muse.openSession(H);
      if (xt.current !== de) return;
      U(ye), O(ye.session.workspaceRoot || ""), X(ye.session.modelId || "");
    } catch (ye) {
      xt.current === de && (Ue(ye instanceof Error ? ye.message : String(ye)), Xt.current = B?.session.sessionId || null);
    } finally {
      xt.current === de && Te(!1);
    }
  }, Bn = () => {
    window.muse.connect().then((H) => {
      if (o(H), H.state === "ready") {
        const de = Xt.current;
        de && Dt(de);
      }
    }).catch((H) => Ue(H.message));
  };
  Rn.current = (H) => {
    H === "new" && Wt(), H === "open" && dt(), H === "search" && T(!0), H === "settings" && Ne("appearance"), H === "sidebar" && te((de) => !de);
  }, G.useEffect(() => {
    if (f === "darwin") return;
    const H = (de) => {
      if (!(de.ctrlKey || de.metaKey) || de.altKey || de.shiftKey) return;
      const xe = de.key.toLowerCase(), un = {
        n: "new",
        o: "open",
        k: "search",
        ",": "settings",
        b: "sidebar"
      }[xe];
      un && (de.preventDefault(), Rn.current(un));
    };
    return window.addEventListener("keydown", H), () => window.removeEventListener("keydown", H);
  }, [f]);
  const sn = async (H, de) => {
    ne(!0);
    const xe = ke, ye = ee, un = xt.current;
    try {
      const kn = h1(xe);
      if (kn) {
        if (!qd.some((It) => It.name === kn.name))
          throw new Error(
            `/${kn.name} is not handled by Desktop. Use /help, or open Muse Code in the project inspector for CLI commands.`
          );
        if (H.length)
          throw new Error("Send attachments with a message, or remove them before using a command.");
        const { name: Fe, argument: yt } = kn;
        if ((Fe === "clear" || Fe === "new") && Wt(), Fe === "help" && Ve("docs"), Fe === "settings" && Ne("appearance"), Fe === "voice") throw new Error("此插件不支持语音输入。");
        if (Fe === "model")
          if (!yt) window.dispatchEvent(new CustomEvent("muse:select", { detail: "Model" }));
          else {
            if (!V.some((It) => It.modelId === yt))
              throw new Error("Choose one of the models available in the Model menu.");
            B && await window.muse.setModel(B.session.sessionId, yt), X(yt);
          }
        if (Fe === "effort")
          if (!yt)
            window.dispatchEvent(new CustomEvent("muse:select", { detail: "Reasoning effort" }));
          else {
            const It = u0.safeParse(yt.toLowerCase());
            if (!It.success)
              throw new Error("Choose none, minimal, low, medium, high, xhigh, max, or ultra.");
            i(await window.muse.savePreferences({ reasoningEffort: It.data }));
          }
        if (["compact", "rename", "stop"].includes(Fe)) {
          if (!B) throw new Error("Open a conversation before using this command.");
          if (Fe === "compact") {
            const It = await window.muse.compact(B.session.sessionId);
            Ke(
              It.status === "noop" ? "There is no conversation history to compact yet." : "Muse is compacting this conversation."
            );
          }
          Fe === "stop" && await window.muse.cancel(B.session.sessionId), Fe === "rename" && (yt ? await window.muse.renameSession(B.session.sessionId, yt) : (Jt(Wr(B.session)), ft(!0)));
        }
        return je((It) => ({ ...It, [ye]: "" })), !0;
      }
      let Wn = B;
      if (!Wn) {
        let Fe = E;
        if (!Fe) {
          if (Fe = await window.muse.chooseProject() || "", !Fe) return !1;
          O(Fe);
        }
        Wn = await window.muse.createSession(Fe, N || void 0), xt.current === un && (Xt.current = Wn.session.sessionId);
      }
      const ji = Wn.session.sessionId, ca = {
        itemId: `optimistic-${Date.now()}`,
        kind: "userMessage",
        revision: 0,
        status: "completed",
        text: xe,
        displayText: xe,
        recordedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      return xt.current === un && U((Fe) => {
        const yt = Fe?.session.sessionId === ji ? Fe : Wn, It = yt.items.some(
          (Ei) => Ei.kind === "userMessage" && (Ei.text === xe || Ei.displayText === xe)
        );
        return {
          ...yt,
          session: { ...yt.session, status: "running" },
          items: It ? yt.items : [...yt.items, ca]
        };
      }), je((Fe) => ({
        ...Fe,
        [ye]: Fe[ye] === xe ? "" : Fe[ye] || "",
        [ji]: Fe[ji] === xe ? "" : Fe[ji] || ""
      })), await window.muse.send({
        sessionId: Wn.session.sessionId,
        text: xe,
        attachments: H.map((Fe) => Fe.id),
        effort: t.reasoningEffort,
        mode: de
      }), !0;
    } catch (kn) {
      return je((Wn) => ({ ...Wn, [ye]: Wn[ye] || xe })), Ue(kn instanceof Error ? kn.message : String(kn)), !1;
    } finally {
      ne(!1);
    }
  }, sa = (H) => {
    if (!B) {
      X(H);
      return;
    }
    const de = xt.current;
    window.muse.setModel(B.session.sessionId, H).then(() => {
      xt.current === de && X(H);
    }).catch((xe) => Ue(xe.message));
  }, Co = (H) => on({
    pinnedSessionIds: t.pinnedSessionIds.includes(H) ? t.pinnedSessionIds.filter((de) => de !== H) : [...t.pinnedSessionIds, H]
  }), To = (H) => {
    on({
      archivedSessionIds: t.archivedSessionIds.includes(H) ? t.archivedSessionIds.filter((de) => de !== H) : [...t.archivedSessionIds, H]
    }), H === B?.session.sessionId && Wt();
  }, fl = m.filter(
    (H) => (!E || H.workspaceRoot === E) && !["subagent", "reminder"].includes(H.kind || "") && t.archivedSessionIds.includes(H.sessionId) === C
  ).sort(
    (H, de) => Number(t.pinnedSessionIds.includes(de.sessionId)) - Number(t.pinnedSessionIds.includes(H.sessionId)) || (de.lastActivityAt || de.updatedAt).localeCompare(H.lastActivityAt || H.updatedAt)
  ), ua = [];
  for (const H of fl) {
    const de = mO(H, t.pinnedSessionIds), xe = ua[ua.length - 1];
    xe && xe.group === de ? xe.entries.push(H) : ua.push({ group: de, entries: [H] });
  }
  return /* @__PURE__ */ h.jsxs(
    "div",
    {
      "data-theme": Un,
      "data-text-size": t.fontSize,
      "data-reduce-motion": String(t.reduceMotion),
      className: `app-shell ${oe ? "" : "sidebar-hidden"} ${W ? "with-inspector" : ""}`,
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
            "aria-hidden": !oe || void 0,
            inert: oe ? void 0 : !0,
            className: `sidebar ${fl.length ? "has-conversations" : ""}`,
            children: [
              /* @__PURE__ */ h.jsx("div", { className: "sidebar-titlebar", children: /* @__PURE__ */ h.jsx(bn, { label: "Hide sidebar", onClick: () => te(!1), children: /* @__PURE__ */ h.jsx(IS, { size: 17 }) }) }),
              /* @__PURE__ */ h.jsxs("button", { className: "brand", onClick: Wt, "aria-label": "UniPi home", children: [
                /* @__PURE__ */ h.jsx(go, { size: 37 }),
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
              /* @__PURE__ */ h.jsx("div", { className: "sidebar-search", children: /* @__PURE__ */ h.jsxs("button", { className: "search-button", onClick: () => T(!0), children: [
                /* @__PURE__ */ h.jsx("span", { className: "sidebar-item-icon", children: /* @__PURE__ */ h.jsx(pu, { size: 15 }) }),
                /* @__PURE__ */ h.jsx("span", { children: "Search conversations" }),
                /* @__PURE__ */ h.jsxs("kbd", { children: [
                  Y,
                  " K"
                ] })
              ] }) }),
              /* @__PURE__ */ h.jsxs("nav", { className: "main-nav", "aria-label": "Main navigation", children: [
                [
                  { id: "chat", icon: ou, label: "Chat" },
                  { id: "projects", icon: xv, label: "Projects" },
                  { id: "files", icon: RS, label: "Files" },
                  { id: "docs", icon: uv, label: "Docs" }
                ].map((H) => /* @__PURE__ */ h.jsxs(
                  "button",
                  {
                    "aria-label": H.label,
                    title: H.label,
                    className: z === H.id ? "selected" : "",
                    onClick: () => Ve(H.id),
                    children: [
                      /* @__PURE__ */ h.jsx(H.icon, { size: 19, strokeWidth: 1.7 }),
                      /* @__PURE__ */ h.jsx("span", { children: H.label }),
                      z === H.id && /* @__PURE__ */ h.jsx("span", { className: "nav-active-dot" })
                    ]
                  },
                  H.id
                )),
                /* @__PURE__ */ h.jsxs("button", { "aria-label": "Settings", title: "Settings", onClick: () => Ne("appearance"), children: [
                  /* @__PURE__ */ h.jsx(i1, { size: 19, strokeWidth: 1.7 }),
                  /* @__PURE__ */ h.jsx("span", { children: "Settings" })
                ] })
              ] }),
              /* @__PURE__ */ h.jsx("div", { className: "sidebar-primary", children: /* @__PURE__ */ h.jsxs("button", { className: "new-button", onClick: Wt, children: [
                /* @__PURE__ */ h.jsx("span", { className: "sidebar-item-icon", children: /* @__PURE__ */ h.jsx(vo, { size: 15 }) }),
                /* @__PURE__ */ h.jsx("span", { children: "New conversation" }),
                /* @__PURE__ */ h.jsxs("kbd", { children: [
                  Y,
                  " N"
                ] })
              ] }) }),
              /* @__PURE__ */ h.jsxs("div", { className: "sidebar-section-label", children: [
                /* @__PURE__ */ h.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "section-toggle",
                    "aria-expanded": re,
                    onClick: () => ge((H) => !H),
                    children: [
                      /* @__PURE__ */ h.jsx("span", { children: "PROJECTS" }),
                      /* @__PURE__ */ h.jsx(
                        co,
                        {
                          size: 12,
                          className: `section-chevron ${re ? "" : "collapsed"}`
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ h.jsx(
                  bn,
                  {
                    label: "Open a project",
                    onClick: () => {
                      dt();
                    },
                    children: /* @__PURE__ */ h.jsx(vo, { size: 14 })
                  }
                )
              ] }),
              /* @__PURE__ */ h.jsx("div", { className: `sidebar-collapse ${re ? "open" : ""}`, children: /* @__PURE__ */ h.jsx("div", { className: "sidebar-collapse-inner", children: /* @__PURE__ */ h.jsx("div", { className: "project-switcher", children: /* @__PURE__ */ h.jsx(
                su,
                {
                  label: "Current project",
                  value: E,
                  icon: /* @__PURE__ */ h.jsx("span", { className: "sidebar-item-icon", children: /* @__PURE__ */ h.jsx(Sr, { size: 15 }) }),
                  onChange: (H) => {
                    if (H === "__open") {
                      dt();
                      return;
                    }
                    O(H), Wt();
                  },
                  options: [
                    { value: "", label: "All projects" },
                    ...t.recentProjects.map((H) => ({
                      value: H,
                      label: $i(H)
                    })),
                    ...E && !t.recentProjects.includes(E) ? [{ value: E, label: $i(E) }] : [],
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
                    "aria-expanded": Ce,
                    onClick: () => $((H) => !H),
                    children: [
                      /* @__PURE__ */ h.jsx("span", { children: C ? "ARCHIVED" : "CONVERSATIONS" }),
                      /* @__PURE__ */ h.jsx(
                        co,
                        {
                          size: 12,
                          className: `section-chevron ${Ce ? "" : "collapsed"}`
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ h.jsx(
                  bn,
                  {
                    label: C ? "Show conversations" : "Show archived conversations",
                    active: C,
                    onClick: () => J((H) => !H),
                    children: /* @__PURE__ */ h.jsx(jx, { size: 13 })
                  }
                )
              ] }),
              /* @__PURE__ */ h.jsx("div", { className: `conversation-list ${Ce ? "" : "is-collapsed"}`, children: /* @__PURE__ */ h.jsx("div", { className: `sidebar-collapse ${Ce ? "open" : ""}`, children: /* @__PURE__ */ h.jsxs("div", { className: "sidebar-collapse-inner", children: [
                S && /* @__PURE__ */ h.jsxs("div", { className: "history-error", children: [
                  /* @__PURE__ */ h.jsx("p", { children: "Could not load your conversation history." }),
                  /* @__PURE__ */ h.jsx("p", { children: S }),
                  /* @__PURE__ */ h.jsx(
                    "button",
                    {
                      className: "text-button",
                      onClick: () => {
                        mt();
                      },
                      children: "Try again"
                    }
                  )
                ] }),
                ua.map(({ group: H, entries: de }) => {
                  const xe = !!he[H];
                  return /* @__PURE__ */ h.jsxs("div", { className: "conversation-group", children: [
                    /* @__PURE__ */ h.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "conversation-group-label",
                        "aria-expanded": !xe,
                        onClick: () => ae((ye) => ({
                          ...ye,
                          [H]: !ye[H]
                        })),
                        children: [
                          /* @__PURE__ */ h.jsx("span", { children: H }),
                          /* @__PURE__ */ h.jsx(
                            co,
                            {
                              size: 12,
                              className: `section-chevron ${xe ? "collapsed" : ""}`
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ h.jsx("div", { className: `sidebar-collapse ${xe ? "" : "open"}`, children: /* @__PURE__ */ h.jsx("div", { className: "sidebar-collapse-inner", children: de.map((ye) => /* @__PURE__ */ h.jsxs(
                      "div",
                      {
                        className: `conversation-row ${ye.sessionId === B?.session.sessionId ? "selected" : ""}`,
                        children: [
                          /* @__PURE__ */ h.jsxs(
                            "button",
                            {
                              className: "conversation-link",
                              title: Wr(ye),
                              onClick: () => {
                                Dt(ye.sessionId);
                              },
                              children: [
                                /* @__PURE__ */ h.jsx(
                                  "span",
                                  {
                                    className: `conversation-indicator sidebar-item-icon ${ye.status === "running" ? "running" : ""}`,
                                    children: t.pinnedSessionIds.includes(ye.sessionId) ? /* @__PURE__ */ h.jsx(Cx, { size: 13 }) : ye.status === "running" ? /* @__PURE__ */ h.jsx("span", { className: "working-dot" }) : /* @__PURE__ */ h.jsx(ou, { size: 14 })
                                  }
                                ),
                                /* @__PURE__ */ h.jsxs("span", { className: "conversation-copy", children: [
                                  /* @__PURE__ */ h.jsx("span", { className: "conversation-title", children: Wr(ye) }),
                                  !E && ye.workspaceRoot && /* @__PURE__ */ h.jsx("span", { className: "conversation-project", children: $i(ye.workspaceRoot) })
                                ] }),
                                /* @__PURE__ */ h.jsx("time", { children: f0(ye.lastActivityAt || ye.updatedAt) })
                              ]
                            }
                          ),
                          /* @__PURE__ */ h.jsx(
                            "button",
                            {
                              className: "row-pin",
                              title: t.pinnedSessionIds.includes(ye.sessionId) ? "Unpin conversation" : "Pin conversation",
                              "aria-label": `${t.pinnedSessionIds.includes(ye.sessionId) ? "Unpin" : "Pin"} ${Wr(ye)}`,
                              onClick: () => Co(ye.sessionId),
                              children: /* @__PURE__ */ h.jsx(Cx, { size: 12 })
                            }
                          )
                        ]
                      },
                      ye.sessionId
                    )) }) })
                  ] }, H);
                }),
                w && a.state === "ready" && /* @__PURE__ */ h.jsxs("div", { className: "history-status", children: [
                  /* @__PURE__ */ h.jsx(il, { size: 14, className: "spin" }),
                  /* @__PURE__ */ h.jsx("span", { children: "Loading Muse history…" })
                ] }),
                !fl.length && !w && !S && a.state === "ready" && /* @__PURE__ */ h.jsxs("div", { className: "sidebar-empty", children: [
                  /* @__PURE__ */ h.jsx(ou, { size: 19, strokeWidth: 1.3 }),
                  /* @__PURE__ */ h.jsx("p", { children: C ? "No archived conversations" : "No conversations yet" }),
                  /* @__PURE__ */ h.jsx("span", { children: C ? "Archived conversations appear here." : "Start a conversation in this project." })
                ] }),
                x && !w && /* @__PURE__ */ h.jsx(
                  "button",
                  {
                    className: "load-more",
                    onClick: () => {
                      window.muse.listSessions(x).then((H) => {
                        g((de) => [
                          ...de,
                          ...H.sessions.filter(
                            (xe) => !de.some((ye) => ye.sessionId === xe.sessionId)
                          )
                        ]), b(H.nextCursor);
                      }).catch((H) => Ue(H.message));
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
                /* @__PURE__ */ h.jsx("div", { className: "theme-mini-switch", role: "group", "aria-label": "Appearance", children: d0.map((H) => /* @__PURE__ */ h.jsxs(
                  "button",
                  {
                    title: H.label,
                    "aria-label": `${H.label} theme`,
                    "aria-pressed": Un === H.id,
                    className: Un === H.id ? "selected" : "",
                    onClick: () => on({ theme: H.id }),
                    children: [
                      /* @__PURE__ */ h.jsx(H.icon, { size: 14 }),
                      /* @__PURE__ */ h.jsx("span", { className: "theme-mini-label", children: /* @__PURE__ */ h.jsx("span", { children: H.label }) })
                    ]
                  },
                  H.id
                )) }),
                /* @__PURE__ */ h.jsxs("button", { className: "connection-status", onClick: () => Ne("connection"), children: [
                  /* @__PURE__ */ h.jsx("span", { className: `status-dot ${a.state}` }),
                  /* @__PURE__ */ h.jsx("span", { children: a.state === "ready" ? "Connected to Muse Code" : a.state === "connecting" ? "Connecting to Muse…" : "Muse Code disconnected" }),
                  /* @__PURE__ */ h.jsx(kr, { size: 11 })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ h.jsxs("main", { className: "main-workspace", children: [
          z === "chat" && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
            /* @__PURE__ */ h.jsx("div", { className: `welcome-art theme-${Un}`, "aria-hidden": "true" }),
            /* @__PURE__ */ h.jsx("div", { className: "chat-brand-background", "aria-hidden": "true" })
          ] }),
          /* @__PURE__ */ h.jsxs("header", { className: `workspace-titlebar ${oe ? "" : "with-traffic-lights"}`, children: [
            /* @__PURE__ */ h.jsxs("div", { className: "workspace-breadcrumb", children: [
              !oe && /* @__PURE__ */ h.jsx(bn, { label: "Show sidebar", onClick: () => te(!0), children: /* @__PURE__ */ h.jsx(HS, { size: 17 }) }),
              /* @__PURE__ */ h.jsx("span", { className: "breadcrumb-project", children: E ? $i(E) : "UniPi" }),
              /* @__PURE__ */ h.jsx(wi, { size: 12 }),
              /* @__PURE__ */ h.jsx("span", { className: "breadcrumb-title", children: z !== "chat" ? z[0].toUpperCase() + z.slice(1) : B ? Wr(B.session) : "New conversation" })
            ] }),
            /* @__PURE__ */ h.jsxs("div", { className: "window-tools", children: [
              /* @__PURE__ */ h.jsx(bn, { label: "New conversation", onClick: Wt, children: /* @__PURE__ */ h.jsx(YS, { size: 17 }) }),
              /* @__PURE__ */ h.jsx(bn, { label: "Search conversations and commands", onClick: () => T(!0), children: /* @__PURE__ */ h.jsx(pu, { size: 17 }) }),
              B && /* @__PURE__ */ h.jsxs("details", { className: "conversation-menu", children: [
                /* @__PURE__ */ h.jsx("summary", { "aria-label": "Conversation actions", children: /* @__PURE__ */ h.jsx(DS, { size: 19 }) }),
                /* @__PURE__ */ h.jsxs("div", { className: "popover", children: [
                  /* @__PURE__ */ h.jsx(
                    "button",
                    {
                      onClick: () => {
                        Jt(Wr(B.session)), ft(!0);
                      },
                      children: "Rename conversation"
                    }
                  ),
                  /* @__PURE__ */ h.jsx("button", { onClick: () => Co(B.session.sessionId), children: t.pinnedSessionIds.includes(B.session.sessionId) ? "Unpin conversation" : "Pin conversation" }),
                  /* @__PURE__ */ h.jsxs(
                    "button",
                    {
                      onClick: () => {
                        window.muse.exportSession(B.session.sessionId).then((H) => {
                          H && Ke("Conversation exported to Markdown.");
                        }).catch((H) => Ue(H.message));
                      },
                      children: [
                        /* @__PURE__ */ h.jsx(OS, { size: 13 }),
                        "Export as Markdown"
                      ]
                    }
                  ),
                  /* @__PURE__ */ h.jsxs("button", { onClick: () => To(B.session.sessionId), children: [
                    /* @__PURE__ */ h.jsx(jx, { size: 13 }),
                    C ? "Restore conversation" : "Archive in Desktop"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ h.jsx(
                bn,
                {
                  label: "Toggle project inspector",
                  active: W,
                  onClick: () => ce((H) => !H),
                  children: /* @__PURE__ */ h.jsx(ZS, { size: 17 })
                }
              )
            ] })
          ] }),
          a.state !== "ready" && a.state !== "connecting" && /* @__PURE__ */ h.jsxs("div", { className: "connection-banner", children: [
            /* @__PURE__ */ h.jsx(Ex, { size: 16 }),
            /* @__PURE__ */ h.jsx("span", { children: a.message || "Connect Muse Code to get started." }),
            /* @__PURE__ */ h.jsx("button", { onClick: Bn, children: "Reconnect" }),
            /* @__PURE__ */ h.jsxs("button", { onClick: () => Ne("connection"), children: [
              "Set up ",
              /* @__PURE__ */ h.jsx(_S, { size: 12 })
            ] })
          ] }),
          z === "projects" && /* @__PURE__ */ h.jsx(
            cO,
            {
              projects: t.recentProjects,
              sessions: m,
              onOpen: () => {
                dt();
              },
              onChoose: (H) => {
                O(H), Wt();
              }
            }
          ),
          z === "files" && /* @__PURE__ */ h.jsx(
            fO,
            {
              project: E,
              onOpen: () => {
                dt();
              },
              onMention: (H) => {
                Ve("chat"), je((de) => ({
                  ...de,
                  [ee]: `${de[ee] || ""}${de[ee] ? `
` : ""}Please look at the project file: ${JSON.stringify(H)}
`
                }));
              }
            }
          ),
          z === "docs" && /* @__PURE__ */ h.jsx(pO, { platform: f, onError: Ue }),
          z === "chat" && /* @__PURE__ */ h.jsxs("div", { className: "workspace-body", children: [
            le ? /* @__PURE__ */ h.jsxs("div", { className: "loading-conversation", children: [
              /* @__PURE__ */ h.jsx(il, { className: "spin", size: 23 }),
              /* @__PURE__ */ h.jsx("p", { children: "Loading conversation…" })
            ] }) : B ? /* @__PURE__ */ h.jsx(sO, { view: B, onError: Ue }, B.session.sessionId) : /* @__PURE__ */ h.jsxs("div", { className: "welcome", children: [
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
                      dt();
                    },
                    children: [
                      /* @__PURE__ */ h.jsx(Sr, { size: 14 }),
                      E ? $i(E) : "Choose a project",
                      /* @__PURE__ */ h.jsx(co, { size: 12 })
                    ]
                  }
                ) })
              ] }),
              /* @__PURE__ */ h.jsxs("div", { className: "starter-section", children: [
                /* @__PURE__ */ h.jsx("div", { className: "starter-label", children: /* @__PURE__ */ h.jsx("span", { children: "SUGGESTED PROMPTS" }) }),
                /* @__PURE__ */ h.jsx("div", { className: "starter-grid", children: hO.map((H) => /* @__PURE__ */ h.jsxs(
                  "button",
                  {
                    className: "starter-card",
                    onClick: () => {
                      je((de) => ({ ...de, [ee]: H.prompt })), document.querySelector("textarea")?.focus();
                    },
                    children: [
                      /* @__PURE__ */ h.jsx(H.icon, { size: 19, strokeWidth: 1.5 }),
                      /* @__PURE__ */ h.jsxs("span", { children: [
                        /* @__PURE__ */ h.jsx("strong", { children: H.title }),
                        /* @__PURE__ */ h.jsx("small", { children: H.description })
                      ] }),
                      /* @__PURE__ */ h.jsx(kr, { size: 13, className: "starter-arrow" })
                    ]
                  },
                  H.title
                )) })
              ] })
            ] }),
            !le && /* @__PURE__ */ h.jsx("div", { className: `composer-dock ${B ? "conversation-dock" : ""}`, children: /* @__PURE__ */ h.jsx(
              SE,
              {
                draft: ke,
                setDraft: (H) => je((de) => ({ ...de, [ee]: H })),
                running: !!Ae,
                backgroundOnly: !!(B && QS(B.items)),
                submitting: Z,
                connected: a.state === "ready",
                hasProject: !!E,
                project: E,
                models: V,
                modelId: N,
                preferences: t,
                onModel: sa,
                onEffort: (H) => on({ reasoningEffort: H }),
                onSubmit: sn,
                onCancel: () => {
                  B && window.muse.cancel(B.session.sessionId).catch((H) => Ue(H.message));
                },
                onError: Ue
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ h.jsx(
          jE,
          {
            open: W,
            project: E,
            platform: f,
            view: B,
            onClose: () => ce(!1),
            onMentionDiff: (H) => {
              Ve("chat"), je((de) => ({
                ...de,
                [ee]: `${de[ee] || ""}${de[ee] ? `
` : ""}Please review the changes in @${H}
`
              }));
            },
            onError: Ue
          },
          E
        ),
        be && /* @__PURE__ */ h.jsx(
          EE,
          {
            initialTab: be,
            preferences: t,
            status: a,
            version: s,
            platform: f,
            onSave: on,
            onClose: () => Ne(!1),
            onError: Ue,
            onReconnect: Bn
          }
        ),
        it && /* @__PURE__ */ h.jsx(
          zE,
          {
            platform: f,
            sessions: m.filter(
              (H) => !t.archivedSessionIds.includes(H.sessionId)
            ),
            onSession: (H) => {
              Dt(H);
            },
            onNew: Wt,
            onOpen: () => {
              dt();
            },
            onSettings: () => Ne("appearance"),
            onTheme: (H) => on({ theme: H }),
            onClose: () => T(!1)
          }
        ),
        fe && B && /* @__PURE__ */ h.jsx(
          Tp,
          {
            title: "Rename conversation",
            onClose: () => ft(!1),
            className: "rename-dialog",
            children: /* @__PURE__ */ h.jsxs(
              "form",
              {
                onSubmit: (H) => {
                  H.preventDefault(), window.muse.renameSession(B.session.sessionId, vn).then(() => ft(!1)).catch((de) => Ue(de.message));
                },
                children: [
                  /* @__PURE__ */ h.jsx("label", { className: "field-label", htmlFor: "conversation-name", children: "Conversation name" }),
                  /* @__PURE__ */ h.jsx(
                    "input",
                    {
                      id: "conversation-name",
                      className: "text-input",
                      autoFocus: !0,
                      value: vn,
                      maxLength: 200,
                      onChange: (H) => Jt(H.target.value)
                    }
                  ),
                  /* @__PURE__ */ h.jsxs("div", { className: "request-actions", children: [
                    /* @__PURE__ */ h.jsx("button", { type: "button", className: "button secondary", onClick: () => ft(!1), children: "Cancel" }),
                    /* @__PURE__ */ h.jsx("button", { className: "button primary", disabled: !vn.trim(), children: "Save" })
                  ] })
                ]
              }
            )
          }
        ),
        at && /* @__PURE__ */ h.jsxs("div", { className: `toast ${at.kind}`, role: at.kind === "error" ? "alert" : "status", children: [
          at.kind === "success" ? /* @__PURE__ */ h.jsx(On, { size: 16 }) : /* @__PURE__ */ h.jsx(Ex, { size: 16 }),
          /* @__PURE__ */ h.jsx("span", { children: at.message }),
          /* @__PURE__ */ h.jsx(bn, { label: "Dismiss notification", onClick: () => Ie(null), children: /* @__PURE__ */ h.jsx(ia, { size: 14 }) })
        ] })
      ]
    }
  );
}
const bO = ':root{color-scheme:light;--font-family-ui: -apple-system, BlinkMacSystemFont, "Segoe UI Variable Text", "Segoe UI", "Inter", "Ubuntu", "Cantarell", "Helvetica Neue", system-ui, sans-serif;--font-family-code: "SF Mono", "Cascadia Mono", "JetBrains Mono", "Fira Code", Menlo, Consolas, monospace;--font-caption: 12px;--font-support: 13px;--font-ui: 14px;--font-body: 15px;--font-title: 17px;--font-section: 20px;--font-heading: 22px;--font-brand: 24px;--font-page: 28px;--reading-size: 15px;--base: #f8f7f4;--app-background: #f8f7f4;--sidebar: #f0efeb;--sidebar-solid: #eeece7;--text: #30332f;--heading: #373c34;--message-text: #42453f;--secondary-text: #64685f;--muted: #686d63;--placeholder: #73796e;--accent: #567a65;--serif-accent: #60755b;--primary: #4d6956;--on-primary: #fff;--primary-border: #3f5d4933;--button-shadow: 0 2px 5px #253e2315;--border: #45453515;--faint-border: #4545350b;--strong-border: #4545352b;--hover: #5757400a;--selected: #e4e8de;--selection: #c6d2be;--surface: #ffffff85;--soft-surface: #737c6008;--glass: #ffffff70;--dialog: #fbfaf7;--input: #fff9;--inspector: #f4f3ef;--composer: #ffffffc9;--composer-border: #bfc5b18c;--composer-focus: #859d7c;--composer-shadow: 0 4px 21px #34392707, 0 1px 4px #34392704;--focus: #739369;--focus-soft: #7a986214;--scrollbar: #63695333;--green: #5b8c67;--red: #b76a67;--warning: #bd954f;--nav-selected: #ffffff90;--nav-border: #dedfd580;--nav-shadow: 0 1px 5px #3a3a2b04;--disabled-button: #e6e8e0;--disabled-text: #a3ab9a;--user-avatar: #e6e5dd;--user-message: #eeeee87d;--code-inline: #535b480b;--code-background: #f0f1eb;--tool-background: #ffffff60;--request-border: #7e9d7447;--request-background: #eef3eac9;--notice: #f3f0e3;--error-background: #ba656510;--error-text: #99615e;--error-border: #b9746833;--diff-added: #3b8b520d;--diff-removed: #aa534d0e;--backdrop: #35372d38}[data-theme=daylight]{--accent: #927459;--serif-accent: #987b5c;--primary: #73634e;--primary-border: #67594255;--selected: #e9e4dc;--focus: #ab9171;--focus-soft: #b39a7715;--selection: #e0d2c0;--composer-focus: #b4a48c;--composer-border: #d2c9bb9c;--request-border: #b7a07d55;--request-background: #f6f0e7d4}[data-theme=grove]{--base: #f0f3ec;--app-background: #f0f3ec;--sidebar: #e7ece3;--sidebar-solid: #e7ece3;--dialog: #f5f7f1;--inspector: #eaf0e6;--heading: #354434;--primary: #54734f;--accent: #567852;--code-background: #e8eee2;--user-message: #e3eadd99}[data-theme=moonlight]{color-scheme:dark;--base: #141b28;--app-background: #141b28;--sidebar: #111824;--sidebar-solid: #17202d;--text: #e1e5ee;--heading: #e9e9ef;--message-text: #d7dce7;--secondary-text: #a8b1c3;--muted: #a0aec6;--placeholder: #8691a7;--accent: #b4bee4;--serif-accent: #c1c8e5;--primary: #adb9df;--on-primary: #182239;--primary-border: #d2dcf255;--button-shadow: 0 2px 10px #0002;--border: #b0c5ff13;--faint-border: #b0c5ff09;--strong-border: #b0c5ff2c;--hover: #bac8f70a;--selected: #a4b7f218;--selection: #52678b;--surface: #23304990;--soft-surface: #afc5ef05;--glass: #1b273882;--dialog: #1c2536;--input: #152133;--inspector: #151d2b;--composer: #1d293cd9;--composer-border: #7390c138;--composer-focus: #7288b3;--composer-shadow: 0 5px 30px #060a112b, inset 0 1px 0 #b9d1ff08;--focus: #a1b7e5;--focus-soft: #748aca15;--scrollbar: #aec0ed25;--green: #8cbc9e;--red: #d49399;--warning: #d3b16d;--nav-selected: #a3bafb10;--nav-border: #acc1ed13;--nav-shadow: inset 0 1px 0 #c5d7ff06;--disabled-button: #36425a;--disabled-text: #8090ad;--user-avatar: #29334a;--user-message: #24304a70;--code-inline: #b5c2f014;--code-background: #101a2b;--tool-background: #21304a5c;--request-border: #99b4d440;--request-background: #233248e6;--notice: #b7975020;--error-background: #b6747416;--error-text: #e0a5aa;--error-border: #c0888430;--diff-added: #85c7980d;--diff-removed: #e191990d;--backdrop: #070d1b88}[data-theme=muse],[data-theme=plush]{color-scheme:dark;--base: #062565;--app-background: radial-gradient(ellipse at 95% 0%, #0758cd 0%, transparent 62%), linear-gradient(125deg, #082968, #061b52 63%, #072e83);--sidebar: linear-gradient(160deg, #1452b252, #041b53ad 75%);--sidebar-solid: #0a347c;--text: #f0f5ff;--heading: #f5f8ff;--message-text: #e1ebff;--secondary-text: #c0d5fb;--muted: #b4caee;--placeholder: #a9c6f3;--accent: #b5d4ff;--serif-accent: #b9d3ff;--primary: linear-gradient(140deg, #cee5ff, #8db9ff);--on-primary: #0753dd;--primary-border: #deeeff99;--button-shadow: inset 0 1px 3px #ffffff80, 0 0 16px #3a86ff4a;--border: #87baff24;--faint-border: #92bdff10;--strong-border: #98c6ff4f;--hover: #629eff1e;--selected: #5292f12b;--selection: #397dde99;--surface: #124087d4;--soft-surface: #558de112;--glass: #2864b825;--dialog: #0c2c66;--input: #061d4e9c;--inspector: linear-gradient(160deg, #083d8d, #08215a);--composer: linear-gradient(145deg, #3174d348, #1450b334);--composer-border: #70a7ff9c;--composer-focus: #a7ceff;--composer-shadow: inset 0 1px 0 #b4d5ff1a, 0 8px 40px #00104714;--focus: #b2d9ff;--focus-soft: #81b8ff15;--scrollbar: #a7c9ff35;--green: #85e1b5;--red: #ffb3b9;--warning: #ead095;--nav-selected: linear-gradient(125deg, #357df14d, #5396ff3d);--nav-border: #6ca8ff6c;--nav-shadow: inset 0 1px 4px #92bdff23, 0 0 10px #3984ff11;--disabled-button: #8db9ff;--disabled-text: #0a52d2;--user-avatar: #3975bf69;--user-message: #174c9659;--code-inline: #88b6ff1a;--code-background: #071e50de;--tool-background: #0b2e6ad9;--request-border: #95bcff77;--request-background: #123f80f2;--notice: #c7a46e20;--error-background: #ab6b811e;--error-text: #ffbec8;--error-border: #e7a5b740;--diff-added: #79d7ac15;--diff-removed: #efa9b418;--backdrop: #020e379c}[data-text-size=compact]{--reading-size: 14px}[data-text-size=large]{--reading-size: 17px}*{box-sizing:border-box}html,body,#root{width:100%;height:100%;margin:0;overflow:hidden}body{font-family:var(--font-family-ui);color:var(--text);background:var(--base);font-size:var(--font-ui);line-height:1.5;-webkit-font-smoothing:antialiased}button,input,select,textarea{font:inherit}button,a,input,select,textarea{-webkit-app-region:no-drag}button{color:inherit;cursor:pointer;border:0;background:none}button:disabled{opacity:.42;cursor:not-allowed}button,a,input,select,textarea,summary{-webkit-tap-highlight-color:transparent}button:focus-visible,a:focus-visible,summary:focus-visible,select:focus-visible{outline:2px solid var(--focus);outline-offset:3px}input:focus-visible,textarea:focus-visible{outline:none}input:focus-visible{box-shadow:0 0 0 3px var(--focus-soft);border-color:var(--focus)}::selection{background:var(--selection)}::-webkit-scrollbar{width:8px;height:8px}::-webkit-scrollbar-thumb{border-radius:999px;border:2px solid transparent;background-clip:padding-box;background-color:var(--scrollbar)}::-webkit-scrollbar-track{background:transparent;margin-block:6px;margin-inline:6px}::-webkit-scrollbar-corner{background:transparent}.select-popover::-webkit-scrollbar-track,.slash-menu::-webkit-scrollbar-track,.dialog::-webkit-scrollbar-track,.command-results::-webkit-scrollbar-track,.file-browser-list::-webkit-scrollbar-track,.code-block pre::-webkit-scrollbar-track,.tool-body pre::-webkit-scrollbar-track,.approval-card>pre::-webkit-scrollbar-track{margin-block:10px;margin-inline:10px}h1,h2,h3,h4,p{margin-top:0}svg{flex-shrink:0}kbd{font-family:inherit;font-size:var(--font-caption);color:var(--muted);font-weight:400;letter-spacing:.02em}.muted{color:var(--muted)}.eyebrow{font-size:var(--font-caption);font-weight:600;letter-spacing:.13em;color:var(--muted)}.app-shell{display:grid;grid-template-columns:264px minmax(0,1fr) 0px;height:100%;background:var(--app-background);transition:grid-template-columns .32s cubic-bezier(.22,1,.36,1)}.app-shell.with-inspector{grid-template-columns:264px minmax(0,1fr) 292px}.app-shell.sidebar-hidden{grid-template-columns:0px minmax(0,1fr) 0px}.app-shell.sidebar-hidden.with-inspector{grid-template-columns:0px minmax(0,1fr) 292px}.icon-button{width:30px;height:30px;padding:0;display:inline-flex;align-items:center;justify-content:center;border-radius:7px;color:var(--muted);transition:background .15s,color .15s;flex-shrink:0}.icon-button:hover,.icon-button.active{background:var(--hover);color:var(--text)}.button{display:inline-flex;align-items:center;justify-content:center;gap:8px;border-radius:9px;padding:10px 14px;font-size:var(--font-ui);font-weight:500;transition:transform .15s,background .15s}.button:active:not(:disabled){transform:translateY(1px)}.button.primary{background:var(--primary);color:var(--on-primary);box-shadow:var(--button-shadow);border:1px solid var(--primary-border)}.button.primary:hover:not(:disabled){filter:brightness(1.07)}.button.secondary{border:1px solid var(--border);background:var(--surface)}.button.secondary:hover{background:var(--hover)}.text-button{display:inline-flex;align-items:center;gap:6px;font-size:var(--font-ui);color:var(--accent);padding:5px 0;text-align:left}.text-button:hover{text-decoration:underline;text-underline-offset:3px}.sidebar{width:264px;min-width:0;display:flex;flex-direction:column;min-height:0;background:var(--sidebar);border-right:1px solid var(--border);-webkit-user-select:none;user-select:none;position:relative;z-index:4;overflow:hidden;transition:transform .32s cubic-bezier(.22,1,.36,1),opacity .24s cubic-bezier(.22,1,.36,1),border-color .24s ease}.app-shell.sidebar-hidden .sidebar{transform:translate(-100%);opacity:0;pointer-events:none;border-right-color:transparent}.sidebar>:not(.conversation-list):not(.sidebar-companion){flex-shrink:0}.sidebar-titlebar{height:46px;flex-shrink:0;display:flex;align-items:center;justify-content:flex-end;padding:8px 14px 0;-webkit-app-region:drag}.window-traffic-lights{position:fixed;top:22px;left:20px;z-index:20;display:flex;align-items:center;gap:8px;-webkit-app-region:no-drag}.traffic-light{width:12px;height:12px;border-radius:50%;padding:0;position:relative;border:.5px solid #00000024;transition:filter .14s ease,transform .14s ease}.traffic-light.close{background:#ff5f57}.traffic-light.minimize{background:#febc2e}.traffic-light.maximize{background:#28c840}.traffic-light:after{content:"";position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;line-height:1;color:#0009;opacity:0;transition:opacity .12s ease}.traffic-light.close:after{content:"×"}.traffic-light.minimize:after{content:"−"}.traffic-light.maximize:after{content:"+"}.window-traffic-lights:hover .traffic-light:after,.traffic-light:focus-visible:after{opacity:1}.brand{padding:12px 24px 18px;display:flex;align-items:center;gap:8px;width:100%;text-align:left}.brand>span:first-of-type{font-size:var(--font-brand);font-weight:600;letter-spacing:-.8px}.brand .muse-mark{object-fit:contain;margin-left:-4px}.desktop-tag{position:relative;flex-shrink:0;font-size:var(--font-caption);letter-spacing:.04em;color:var(--muted);border:1px solid var(--border);padding:3px 6px;border-radius:5px;margin:3px 0 0 auto;transition:color .18s ease,border-color .18s ease,background-color .18s ease}.desktop-tag:hover{color:var(--text);border-color:var(--strong-border);background:var(--soft-surface);opacity:1!important}.desktop-tag:after{content:attr(data-tooltip);position:absolute;top:calc(100% + 8px);right:0;width:210px;padding:8px 10px;border-radius:9px;background:var(--dialog);border:1px solid var(--strong-border);color:var(--text);font-size:11.5px;font-weight:450;letter-spacing:0;line-height:1.45;white-space:normal;box-shadow:0 12px 30px #0005;opacity:0;transform:translateY(-4px);pointer-events:none;transition:opacity .18s cubic-bezier(.22,1,.36,1),transform .18s cubic-bezier(.22,1,.36,1);z-index:30}.desktop-tag:hover:after{opacity:1;transform:translateY(0)}.update-settings{text-align:left;margin:22px 0}.update-settings .setting-row{gap:18px}.update-settings .button{flex-shrink:0}.muse-mark{object-fit:contain}.main-nav{display:flex;flex-direction:column;gap:4px;padding:0 13px 12px}.main-nav button{display:flex;align-items:center;gap:13px;padding:11px 13px;font-size:var(--font-ui);border:1px solid transparent;border-radius:10px;text-align:left;color:var(--secondary-text)}.main-nav button:hover{background:var(--hover);color:var(--text)}.main-nav button.selected{background:var(--nav-selected);border-color:var(--nav-border);color:var(--text);box-shadow:var(--nav-shadow)}.nav-active-dot{margin-left:auto;height:4px;width:4px;border-radius:50%;background:currentColor;opacity:.7}.sidebar-search{padding:0 13px 10px}.sidebar-search .search-button{width:100%;background:var(--soft-surface);border:1px solid var(--border)}.sidebar-search .search-button:hover{background:var(--hover);border-color:var(--strong-border)}.sidebar-primary{padding:0 13px 6px;display:flex;flex-direction:column;gap:3px}.sidebar-item-icon{width:16px;height:16px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--muted);transition:color .18s ease}.new-button,.search-button{display:flex;align-items:center;gap:10px;min-height:32px;border-radius:8px;font-size:var(--font-support);color:var(--secondary-text);text-align:left;padding:6px 10px;transition:background-color .18s ease,border-color .18s ease,color .18s ease}.new-button:hover,.search-button:hover{background:var(--hover);color:var(--text)}.new-button:hover .sidebar-item-icon,.search-button:hover .sidebar-item-icon{color:var(--text)}.new-button kbd,.search-button kbd{margin-left:auto;font-family:var(--font-family-ui);font-size:var(--font-caption);color:var(--muted);opacity:.9}.sidebar-section-label{padding:4px 19px 2px 13px;margin-top:4px;height:30px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;color:var(--muted);font-size:var(--font-caption);font-weight:600;letter-spacing:.09em}.section-toggle{display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:6px;color:var(--muted);font-size:var(--font-caption);font-weight:600;letter-spacing:.09em;transition:color .18s ease,background-color .18s ease}.section-toggle:hover{color:var(--text);background:var(--hover)}.section-chevron{flex-shrink:0;opacity:0;transition:transform .26s cubic-bezier(.22,1,.36,1),opacity .18s ease}.section-toggle:hover .section-chevron,.section-chevron.collapsed{opacity:.75}.section-chevron.collapsed{transform:rotate(-90deg)}.sidebar-collapse{display:grid;grid-template-rows:0fr;opacity:0;transition:grid-template-rows .28s cubic-bezier(.22,1,.36,1),opacity .22s cubic-bezier(.22,1,.36,1)}.sidebar-collapse.open{grid-template-rows:1fr;opacity:1}.sidebar-collapse-inner{min-height:0;overflow:hidden}.sidebar-section-label .icon-button{width:22px;height:22px}.project-switcher{padding:0 13px 4px;display:flex;align-items:center;color:var(--secondary-text)}.conversation-list{padding:2px 13px 7px;min-height:100px;flex:1;overflow-y:auto}.conversation-group{margin-bottom:2px}.conversation-row{display:flex;align-items:center;position:relative;border-radius:8px;margin-bottom:2px;transition:background-color .18s ease}.conversation-row:hover{background:var(--hover)}.conversation-row.selected{background:var(--selected)}.conversation-link{display:flex;align-items:center;width:100%;min-height:32px;padding:6px 10px;gap:10px;text-align:left;min-width:0;font-size:var(--font-support);color:var(--secondary-text);transition:color .18s ease}.conversation-row:hover .conversation-link,.conversation-row.selected .conversation-link{color:var(--text)}.conversation-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}.conversation-indicator{color:var(--muted)}.conversation-row:hover .conversation-indicator,.conversation-row.selected .conversation-indicator{color:var(--text)}.conversation-link time{font-size:var(--font-caption);color:var(--muted);font-variant-numeric:tabular-nums;flex-shrink:0}.row-pin{position:absolute;right:5px;width:22px;height:23px;border-radius:5px;background:var(--sidebar-solid);opacity:0;display:flex;align-items:center;justify-content:center}.conversation-row:hover .row-pin,.row-pin:focus-visible{opacity:1}.conversation-row:hover time{visibility:hidden}.sidebar-empty{padding:13px 10px;color:var(--muted);font-size:var(--font-support)}.sidebar-empty>svg{display:none}.sidebar-empty p{margin:0 0 5px;color:var(--secondary-text);font-size:var(--font-support)}.sidebar-empty span{font-size:var(--font-support);line-height:1.6}.load-more{font-size:var(--font-support);padding:8px 10px;color:var(--muted)}.sidebar-companion{flex:0 0 54px;min-height:0;height:54px;display:flex;flex-direction:row;align-items:center;justify-content:center;gap:10px;margin:6px 18px 0;overflow:hidden}.sidebar-companion img{width:43px;height:50px;min-height:0;object-fit:contain;filter:drop-shadow(0 8px 13px #00000020)}.sidebar-companion>span{color:var(--muted);font-size:var(--font-support);font-family:var(--font-family-ui);font-style:normal;margin:0}.sidebar-companion>svg{display:none}.sidebar-bottom{padding:7px 15px 11px;flex-shrink:0}.theme-mini-switch{display:flex;align-items:center;padding:3px;gap:2px;border-radius:10px;border:1px solid var(--border);background:var(--soft-surface);margin:0 2px 7px;height:36px}.theme-mini-switch button{display:flex;flex:1 1 0px;gap:0;align-items:center;justify-content:center;height:28px;border-radius:7px;color:var(--muted);font-size:12.5px;padding:0 2px;min-width:0;overflow:hidden;transition:flex-grow .3s cubic-bezier(.22,1,.36,1),background-color .24s cubic-bezier(.22,1,.36,1),color .18s ease,box-shadow .24s cubic-bezier(.22,1,.36,1),transform .16s cubic-bezier(.22,1,.36,1)}.theme-mini-switch button>svg{flex-shrink:0;transition:transform .24s cubic-bezier(.22,1,.36,1)}.theme-mini-switch button:hover:not(.selected){background:var(--hover);color:var(--secondary-text)}.theme-mini-switch button:active{transform:scale(.96)}.theme-mini-switch button.selected{flex:3.7 1 0px;padding:0 6px;background:var(--selected);color:var(--text);box-shadow:0 1px 4px #00000014}.theme-mini-label{display:inline-grid;grid-template-columns:0fr;opacity:0;margin-left:0;transition:grid-template-columns .3s cubic-bezier(.22,1,.36,1),opacity .2s ease,margin-left .3s cubic-bezier(.22,1,.36,1)}.theme-mini-label>span{overflow:hidden;white-space:nowrap}.theme-mini-switch button.selected .theme-mini-label{grid-template-columns:1fr;opacity:1;margin-left:5px}.connection-status{display:flex;align-items:center;gap:7px;width:100%;padding:6px 9px 0;color:var(--muted);font-size:var(--font-support)}.connection-status>svg{margin-left:auto}.status-dot{width:5px;height:5px;background:var(--warning);border-radius:50%;flex-shrink:0}.status-dot.ready{background:var(--green);box-shadow:0 0 6px color-mix(in srgb,var(--green),transparent 50%)}.status-dot.connecting{background:var(--accent);animation:breathe 2s infinite}.main-workspace{display:flex;flex-direction:column;min-width:0;min-height:0;position:relative;overflow:hidden}.workspace-titlebar{height:62px;flex-shrink:0;display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 25px 0;-webkit-app-region:drag;z-index:6;transition:padding-left .32s cubic-bezier(.22,1,.36,1)}.workspace-titlebar.with-traffic-lights{padding-left:96px}.workspace-breadcrumb{display:flex;align-items:center;gap:10px;min-width:0;font-size:var(--font-ui)}.breadcrumb-project{color:var(--muted);flex-shrink:0;max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.workspace-breadcrumb>svg{color:var(--muted);opacity:.65}.breadcrumb-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:500}.window-tools{display:flex;align-items:center;gap:6px}.local-pill{display:flex;align-items:center;gap:5px;font-size:var(--font-support);color:var(--muted);margin-right:8px}.local-pill>span{height:4px;width:4px;background:var(--green);border-radius:50%}.conversation-menu{position:relative}.conversation-menu>summary{list-style:none;cursor:pointer;padding:5px;display:flex;color:var(--muted);border-radius:6px}.conversation-menu>summary:hover{background:var(--hover)}.popover{position:absolute;z-index:15;top:32px;right:0;min-width:205px;padding:5px;background:var(--dialog);border:1px solid var(--border);box-shadow:0 12px 40px #0003;border-radius:10px}.popover button{width:100%;text-align:left;padding:9px 10px;display:flex;align-items:center;gap:7px;border-radius:6px;font-size:var(--font-ui)}.popover button:hover{background:var(--hover)}.connection-banner{display:flex;align-items:center;gap:10px;padding:10px 24px;background:var(--notice);color:var(--text);border-bottom:1px solid var(--border);font-size:var(--font-support);position:relative;z-index:5}.connection-banner>span{flex:1;line-height:1.5}.connection-banner button{display:flex;align-items:center;gap:5px;color:var(--accent);white-space:nowrap;font-size:var(--font-support)}.workspace-body{flex:1;min-height:0;display:flex;flex-direction:column;position:relative}.chat-brand-background{position:absolute;inset:0;background:url(/muse-logo.png) no-repeat 52% 26% / min(83%,865px);opacity:calc(var(--background-presence) * .045);pointer-events:none;will-change:opacity;transform:translateZ(0);transition:opacity .32s cubic-bezier(.22,1,.36,1)}.welcome{position:relative;display:flex;flex:1;flex-direction:column;min-height:310px}.welcome-art{position:absolute;inset:0;background-size:cover;background-position:center;opacity:var(--background-presence);pointer-events:none;-webkit-mask-image:linear-gradient(black 65%,transparent 100%);mask-image:linear-gradient(black 65%,transparent 100%);will-change:opacity;transform:translateZ(0);transition:opacity .32s cubic-bezier(.22,1,.36,1)}.main-workspace:has(.transcript,.loading-conversation) .welcome-art{opacity:calc(var(--background-presence) * .14)}:is([data-theme=muse],[data-theme=plush]) .welcome-art{opacity:0!important}.theme-daylight{background-image:url(/themes/daylight.png)}.theme-moonlight{background-image:url(/themes/moonlight.png)}.theme-grove{background-image:url(/themes/grove.png)}.welcome-content{position:relative;width:calc(100% - 112px);max-width:930px;margin:0 auto;padding:clamp(35px,8vh,100px) 0 25px}.welcome-kicker{display:flex;align-items:center;gap:8px;font-size:var(--font-caption);letter-spacing:.15em;font-weight:500;color:var(--muted);margin-bottom:23px}.tiny-spark{font-size:var(--font-title);letter-spacing:0;color:var(--accent)}.welcome h1{font-size:clamp(33px,3.7vw,53px);line-height:1.1;font-weight:420;letter-spacing:-2px;margin:0 0 19px;color:var(--heading)}.welcome h1 em{font-family:Iowan Old Style,Palatino Linotype,Georgia,serif;font-weight:400;letter-spacing:-1.7px;color:var(--serif-accent)}.welcome-subtitle{font-size:var(--font-body);line-height:1.8;color:var(--secondary-text);margin-bottom:24px}.welcome-project{display:flex;align-items:center;gap:14px}.project-chip{padding:8px 11px;border:1px solid var(--border);display:inline-flex;align-items:center;gap:8px;background:var(--glass);border-radius:8px;-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);font-size:var(--font-support);max-width:260px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.project-chip:hover{background:var(--hover)}.starter-section{width:calc(100% - 112px);max-width:930px;margin:auto auto 23px;position:relative;padding-top:25px}.starter-label{display:flex;align-items:center;justify-content:space-between;margin-bottom:11px;font-size:var(--font-caption);letter-spacing:.1em;color:var(--muted)}.starter-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.starter-card{display:flex;align-items:flex-start;text-align:left;gap:10px;padding:17px 13px;min-width:0;border:1px solid var(--border);border-radius:11px;background:var(--glass);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);transition:transform .2s,border .2s,background .2s}.starter-card:hover{transform:translateY(-2px);background:var(--hover);border-color:var(--strong-border)}.starter-card>svg:first-child{color:var(--accent);margin-top:1px}.starter-card>span{min-width:0;display:flex;flex-direction:column;gap:6px}.starter-card strong{font-size:var(--font-ui);font-weight:500;white-space:normal}.starter-card small{font-size:var(--font-support);color:var(--muted);white-space:normal}.starter-arrow{color:var(--muted);margin-left:auto}.composer-dock{width:calc(100% - 112px);max-width:930px;margin:0 auto;position:relative;flex-shrink:0;padding-bottom:18px;z-index:2}.composer{background:var(--composer);border:1px solid var(--composer-border);border-radius:22px;box-shadow:var(--composer-shadow);padding:20px 20px 14px;-webkit-backdrop-filter:blur(28px);backdrop-filter:blur(28px);transition:border-color .2s,box-shadow .2s,background-color .2s}.composer:focus-within{border-color:var(--composer-focus);box-shadow:var(--composer-shadow),0 0 0 2px var(--focus-soft)}.composer textarea{display:block;width:100%;resize:none;min-height:64px;max-height:200px;line-height:1.6;background:transparent;color:var(--text);padding:0 3px;border:0;font-size:var(--font-body)}.composer textarea::placeholder{color:var(--placeholder)}.composer-toolbar{display:flex;align-items:center;justify-content:space-between;gap:10px;padding-top:8px}.composer-tools,.composer-actions{display:flex;align-items:center;gap:6px}.composer-tools{min-width:0}.composer-tools .icon-button{width:34px;height:34px;border-radius:50%;background:var(--soft-surface);border:1px solid var(--border);margin-right:2px}.toolbar-divider{display:none}.select-control{display:inline-flex;align-items:center;gap:6px;border-radius:8px;color:var(--secondary-text);min-width:0;padding:5px 8px;transition:background-color .18s ease,color .18s ease}.select-control:hover{background:var(--hover);color:var(--text)}.composer-tools .muse-select .select-control{min-height:38px;padding:7px 12px;border-radius:15px;background:var(--soft-surface);border:1px solid var(--border);gap:6px}.composer-tools .muse-select .select-control:hover{background:var(--hover)}.model-spark,.effort-icon{color:var(--accent);width:16px;height:16px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;line-height:1}.model-spark{font-size:var(--font-title)}.effort-select{color:var(--secondary-text)}.send-button{width:40px;height:40px;border-radius:50%;display:flex;justify-content:center;align-items:center;flex-shrink:0;background:var(--primary);border:1px solid var(--primary-border);color:var(--on-primary);box-shadow:var(--button-shadow)}.send-button:disabled{background:var(--disabled-button);color:var(--disabled-text);opacity:.8;box-shadow:none;border-color:transparent}.send-button:hover:not(:disabled){transform:translateY(-1px);filter:brightness(1.06)}.composer-footnote{display:flex;justify-content:space-between;gap:12px;font-size:var(--font-caption);color:var(--muted);margin:11px 6px 0;opacity:1;flex-wrap:wrap;align-items:center}.composer-shortcuts{display:inline-flex;align-items:center;gap:8px;margin-left:auto}.composer-shortcut{display:inline-flex;align-items:center;gap:5px;color:var(--secondary-text);font-weight:450}.composer-footnote kbd{display:inline-flex;align-items:center;justify-content:center;min-width:20px;height:20px;padding:0 5px;border-radius:6px;border:1px solid var(--border);background:var(--soft-surface);color:var(--secondary-text);font-family:var(--font-family-ui);font-size:11px;font-weight:500;line-height:1;box-shadow:inset 0 1px #ffffff0d}.footnote-dot{color:var(--muted);opacity:.55;padding:0 1px}.workspace-statusbar{height:29px;display:flex;align-items:center;justify-content:space-between;font-size:var(--font-caption);color:var(--muted);padding:0 24px;flex-shrink:0;border-top:1px solid var(--faint-border)}.workspace-statusbar>span{display:flex;align-items:center;gap:6px}.statusbar-dot{margin:0 3px}.attachment-list{display:flex;flex-wrap:wrap;gap:6px;margin:-3px 0 12px}.attachment{display:inline-flex;align-items:center;gap:5px;border:1px solid var(--border);border-radius:6px;background:var(--soft-surface);font-size:var(--font-support);padding:5px 6px;max-width:200px}.attachment>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.attachment button{padding:2px;display:flex;border-radius:3px}.attachment button:hover{background:var(--hover)}.running-line{display:flex;align-items:center;gap:8px;font-size:var(--font-support);padding:9px 5px 12px;color:var(--secondary-text)}.running-hint{margin-left:auto;color:var(--muted);font-size:var(--font-support);white-space:normal}.working-orb,.working-dot{width:6px;height:6px;display:inline-block;border-radius:50%;background:var(--accent);box-shadow:0 0 9px var(--focus-soft);animation:breathe 2s infinite}.working-dot{width:5px;height:5px}.transcript-wrap{position:relative;flex:1;min-height:0}.transcript-scroll{height:100%;overflow-y:auto;scroll-behavior:auto}.transcript{width:calc(100% - 112px);max-width:890px;margin:0 auto;padding:30px 0 40px;position:relative}.conversation-beginning{display:flex;align-items:center;justify-content:center;gap:9px;font-size:var(--font-support);color:var(--muted);margin:4px 0 42px}.conversation-beginning .muse-mark{opacity:.6}.message{margin:0 0 29px}.message-heading{display:flex;align-items:center;gap:8px;margin-bottom:10px;height:27px}.message-heading strong{font-size:var(--font-support);font-weight:600}.message-heading time{font-size:var(--font-caption);color:var(--muted)}.message-heading .copy-button{margin-left:2px;opacity:0;transition:opacity .16s ease,background-color .16s ease,color .16s ease}.message:hover .copy-button,.copy-button:focus-visible{opacity:1}.avatar{display:flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:9px}.user-avatar{background:var(--user-avatar);color:var(--secondary-text);font-size:var(--font-support);font-weight:600}.muse-avatar{background:var(--soft-surface);padding:3px}.muse-avatar .muse-mark{width:19px;height:19px}.user-message-text{margin-left:34px;font-size:var(--reading-size);line-height:1.65;white-space:pre-wrap;overflow-wrap:anywhere;padding:10px 15px;border-radius:13px;background:var(--user-message);border:1px solid var(--border);width:fit-content;max-width:calc(100% - 34px)}.agent-message .markdown{margin-left:35px}.markdown{font-size:var(--reading-size);line-height:1.85;overflow-wrap:anywhere;color:var(--message-text)}.markdown p{margin:0 0 16px}.markdown p:last-child{margin-bottom:0}.markdown h1,.markdown h2,.markdown h3{line-height:1.4;margin:22px 0 12px;letter-spacing:-.3px;color:var(--text)}.markdown h1{font-size:var(--font-brand)}.markdown h2{font-size:19px}.markdown h3{font-size:var(--font-title)}.markdown a{color:var(--accent);text-underline-offset:3px}.markdown blockquote{margin:18px 0;padding:2px 15px;border-left:2px solid var(--accent);color:var(--secondary-text)}.markdown ul,.markdown ol{padding-left:22px;margin:10px 0 18px}.markdown li{margin:5px 0}.markdown li>input{accent-color:var(--accent)}.markdown code{font-family:var(--font-family-code);background:var(--code-inline);border-radius:4px;font-size:.9em;padding:2px 5px}.markdown pre{font-size:var(--font-support);line-height:1.8;padding:16px 18px;margin:0;overflow-x:auto}.markdown pre code{padding:0;background:transparent;font-size:inherit}.code-block{border:1px solid var(--border);background:var(--code-background);border-radius:10px;margin:16px 0;overflow:hidden}.code-block-header{display:flex;align-items:center;justify-content:space-between;padding:6px 12px 6px 14px;border-bottom:1px solid var(--border);background:var(--soft-surface);font-size:var(--font-caption);color:var(--muted)}.code-block-lang{font-family:var(--font-family-code);font-size:11px;text-transform:lowercase;color:var(--muted)}.code-block-header .copy-button{font-size:11.5px;padding:3px 7px}.markdown table{border-collapse:collapse;display:block;overflow-x:auto;font-size:var(--font-ui);margin:18px 0}.markdown th,.markdown td{border:1px solid var(--border);padding:8px 13px;text-align:left}.markdown th{background:var(--soft-surface)}.markdown hr{border:0;border-top:1px solid var(--border);margin:24px 0}.inline-link-icon{margin-left:3px;vertical-align:middle}.remote-image{color:var(--muted);font-style:italic}.copy-button{display:inline-flex;align-items:center;gap:4px;padding:5px;color:var(--muted);border-radius:5px;font-size:var(--font-support)}.copy-button:hover{background:var(--hover);color:var(--text)}.streaming-label{font-size:var(--font-support);color:var(--muted);animation:breathe 2s infinite}.tool-item,.tool-group{margin:6px 0 6px 35px;border:1px solid var(--border);background:var(--tool-background);border-radius:9px;font-size:var(--font-support);overflow:hidden}.tool-item>summary,.tool-summary-button,.tool-group-header{width:100%;display:flex;align-items:center;gap:8px;list-style:none;padding:10px 12px;cursor:pointer;color:var(--secondary-text);text-align:left;transition:background-color .16s ease,color .16s ease}.tool-summary-button:hover,.tool-group-header:hover{background:var(--hover);color:var(--text)}.tool-group-list{padding:6px 10px 10px;border-top:1px solid var(--border);display:flex;flex-direction:column;gap:5px}.tool-group-list .tool-item{margin:0}summary::-webkit-details-marker{display:none}.tool-state{display:flex;color:var(--green)}.tool-title{font-weight:500}.tool-summary{color:var(--muted);flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--font-support)}.details-chevron{margin-left:auto;color:var(--muted);transition:transform .24s cubic-bezier(.22,1,.36,1)}details[open]>summary .details-chevron,.details-chevron.open{transform:rotate(90deg)}.tool-body{padding:12px 14px;border-top:1px solid var(--border)}.tool-body pre{margin:8px 0 12px;font-family:var(--font-family-code);font-size:var(--font-support);line-height:1.7;white-space:pre-wrap;overflow-wrap:anywhere;max-height:320px;overflow:auto}.tool-body p{font-size:var(--font-support);line-height:1.6}.tool-result-status{display:block;font-size:var(--font-support);color:var(--muted);padding-top:8px}.reasoning-item{margin:0 0 18px 35px;color:var(--muted)}.reasoning-item>summary,.reasoning-summary-button{display:flex;align-items:center;list-style:none;gap:7px;font-size:var(--font-support);color:var(--muted);cursor:pointer;padding:6px 8px;margin-left:-8px;border-radius:6px;width:fit-content;transition:background-color .16s ease,color .16s ease}.reasoning-summary-button:hover{background:var(--hover);color:var(--text)}.reasoning-item .markdown{padding:13px 15px;margin-top:6px;border-left:1px solid var(--border);color:var(--muted);font-size:var(--font-ui)}.diff-count{display:inline-flex;gap:5px;font-size:var(--font-support);margin-left:auto}.diff-count b{color:var(--green);font-weight:500}.diff-count i{color:var(--red);font-style:normal}.jump-button{position:absolute;bottom:12px;left:calc(50% - 17px);width:34px;height:34px;border-radius:50%;background:var(--dialog);border:1px solid var(--border);box-shadow:0 3px 15px #0002}.empty-conversation{text-align:center;padding:70px 20px;color:var(--muted)}.empty-conversation h2{font-family:var(--font-family-ui);font-weight:400;margin-top:20px;font-size:var(--font-page);color:var(--text)}.empty-conversation p{font-size:var(--font-ui)}.approval-card,.question-card{margin:24px 0 24px 35px;border:1px solid var(--request-border);background:var(--request-background);border-radius:13px;padding:19px}.request-heading{display:flex;align-items:center;gap:11px;margin-bottom:14px}.request-heading h3{font-size:var(--font-ui);margin:0 0 5px;font-weight:600}.request-heading p{font-size:var(--font-support);color:var(--secondary-text);margin:0}.request-icon{color:var(--accent);display:flex}.approval-card>pre{background:var(--code-background);border:1px solid var(--border);border-radius:7px;padding:13px;font-family:var(--font-family-code);font-size:var(--font-support);line-height:1.7;white-space:pre-wrap;overflow-wrap:anywhere;max-height:220px;overflow:auto}.approval-choices{display:flex;flex-wrap:wrap;gap:7px;margin-top:15px}.approval-choices .button{font-size:var(--font-support)}.choice-scope{font-size:var(--font-support);opacity:.7;border-left:1px solid currentColor;padding-left:6px}.question-card fieldset{padding:0;margin:19px 0;border:0}.question-card legend{font-size:var(--font-ui);font-weight:500;line-height:1.6;margin-bottom:12px}.question-options{display:flex;flex-direction:column;gap:6px;margin-bottom:10px}.question-option{display:flex;gap:9px;align-items:flex-start;background:var(--surface);border:1px solid var(--border);padding:10px 12px;border-radius:7px;cursor:pointer}.question-option.selected{border-color:var(--accent);background:var(--selected)}.question-option input{accent-color:var(--accent);margin:2px 0 0}.question-option strong{font-size:var(--font-support);font-weight:500}.question-option small{display:block;margin-top:4px;font-size:var(--font-support);color:var(--secondary-text);line-height:1.5}.request-actions{display:flex;gap:8px;justify-content:flex-end;margin-top:20px}.inline-error{padding:14px;font-size:var(--font-support);line-height:1.7;background:var(--error-background);color:var(--error-text);border:1px solid var(--error-border);border-radius:8px;margin:16px 0;overflow-wrap:anywhere}.inline-error strong{font-weight:500}.inline-error p{margin:7px 0}.inline-error>span{opacity:.8}.inline-notice{padding:12px 14px;background:var(--notice);border:1px solid var(--border);border-radius:8px;font-size:var(--font-support);color:var(--secondary-text);line-height:1.6;margin-bottom:18px}.loading-conversation{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:var(--muted);font-size:var(--font-ui)}.inspector{width:292px;min-width:0;border-left:1px solid var(--border);display:flex;flex-direction:column;min-height:0;background:var(--inspector);z-index:4;overflow:hidden;transition:transform .32s cubic-bezier(.22,1,.36,1),opacity .24s cubic-bezier(.22,1,.36,1),border-color .24s ease}.app-shell:not(.with-inspector) .inspector{transform:translate(100%);opacity:0;pointer-events:none;border-left-color:transparent}.inspector>header{height:62px;display:flex;align-items:center;justify-content:space-between;padding:8px 15px 0 19px;-webkit-app-region:drag;font-size:var(--font-support);color:var(--muted)}.inspector-project{display:flex;align-items:center;gap:10px;padding:21px 19px 25px}.project-icon{width:38px;height:38px;display:flex;align-items:center;justify-content:center;border:1px solid var(--border);background:var(--soft-surface);border-radius:10px;color:var(--accent)}.inspector-project>div{min-width:0}.inspector-project strong{display:block;font-size:var(--font-ui);margin-bottom:5px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.inspector-project div>span{display:flex;align-items:center;gap:5px;font-size:var(--font-support);color:var(--muted)}.inspector-tabs{display:flex;align-items:center;gap:18px;padding:0 16px;border-bottom:1px solid var(--border);height:39px}.inspector-tabs>button[role]{display:flex;gap:6px;align-items:center;height:39px;padding:0 0 2px;color:var(--muted);border-bottom:1.5px solid transparent;font-size:var(--font-support)}.inspector-tabs>button[aria-selected=true]{color:var(--text);border-bottom-color:var(--accent)}.inspector-tabs>button>span{font-size:var(--font-support);border-radius:4px;padding:1px 4px;background:var(--hover)}.inspector-tabs>.icon-button{margin-left:auto}.inspector-body{flex:1;overflow:auto;min-height:0;padding:12px 11px}.inspector-empty{text-align:center;padding:50px 19px;color:var(--muted)}.empty-glyph{display:inline-flex;padding:13px;border-radius:15px;background:var(--soft-surface);border:1px solid var(--faint-border)}.inspector-empty h3{color:var(--secondary-text);font-size:var(--font-ui);font-weight:500;margin:19px 0 10px}.inspector-empty p{font-size:var(--font-support);line-height:1.85}.changed-file{width:100%;display:flex;align-items:center;gap:9px;padding:10px 7px;text-align:left;border-radius:7px}.changed-file:hover{background:var(--hover)}.changed-file>svg:first-child{color:var(--muted)}.changed-file>span{flex:1;min-width:0}.changed-file strong{display:block;font-size:var(--font-support);font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.changed-file small{display:block;font-size:var(--font-support);color:var(--muted);margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.changed-file b{font-family:var(--font-family-code);font-size:var(--font-support);font-weight:400;color:var(--green)}.changed-file b.deleted{color:var(--red)}.changed-file>svg:last-child{color:var(--muted)}.diff-header{display:flex;align-items:center;justify-content:space-between;gap:8px;margin:4px 0 10px}.diff-back{display:flex;align-items:center;gap:5px;font-size:var(--font-support);min-width:0;flex:1;overflow:hidden;text-align:left}.diff-back>span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.diff-ask-button{display:inline-flex;align-items:center;gap:4px;padding:4px 8px;border-radius:6px;border:1px solid var(--border);background:var(--soft-surface);color:var(--secondary-text);font-size:11.5px;flex-shrink:0;transition:background-color .16s ease,color .16s ease}.diff-ask-button:hover{background:var(--hover);color:var(--text)}.diff-view{font-family:var(--font-family-code);font-size:var(--font-support);line-height:1.8;white-space:pre;overflow:auto;margin:0;padding:7px;border-radius:8px;border:1px solid var(--faint-border);background:var(--code-background)}.diff-view>span{display:inline-block;min-width:100%;padding:0 6px;border-radius:3px}.diff-gutter{display:inline-block;width:32px;padding-right:8px;margin-right:6px;text-align:right;color:var(--muted);opacity:.55;-webkit-user-select:none;user-select:none;font-variant-numeric:tabular-nums}.diff-view .added{background:var(--diff-added);color:var(--green)}.diff-view .removed{background:var(--diff-removed);color:var(--red)}.diff-view .hunk{color:var(--accent)}.diff-view .meta{color:var(--muted);opacity:.7}.activity-entry{display:flex;gap:9px;padding:12px 7px;border-bottom:1px solid var(--faint-border)}.activity-entry>span{color:var(--green)}.activity-entry strong{font-size:var(--font-support);font-weight:500}.activity-entry p{font-size:var(--font-support);color:var(--muted);line-height:1.6;margin:5px 0 0;overflow-wrap:anywhere}.usage-panel{border-top:1px solid var(--border);padding:16px 20px}.usage-panel>span{display:block;margin-bottom:12px}.usage-panel>div{display:flex;justify-content:space-between;font-size:var(--font-support);margin:7px 0;color:var(--muted)}.usage-panel strong{font-weight:500;color:var(--secondary-text);font-variant-numeric:tabular-nums}.inspector-footer{border-top:1px solid var(--border);display:flex;justify-content:space-between;padding:12px 18px}.inspector-footer button{display:flex;align-items:center;gap:7px;font-size:var(--font-support);color:var(--muted)}.inspector-footer button:hover{color:var(--text)}.dialog{background:var(--dialog);color:var(--text);border:1px solid var(--strong-border);border-radius:17px;box-shadow:0 30px 100px #0005,0 4px 20px #0002;padding:0;max-height:calc(100vh - 70px);overflow:hidden}.dialog[open]{animation:dialog-in .2s cubic-bezier(.22,1,.36,1)}.dialog::backdrop{background:var(--backdrop);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);animation:backdrop-in .2s ease}@keyframes dialog-in{0%{opacity:0;transform:translateY(6px) scale(.985)}to{opacity:1;transform:translateY(0) scale(1)}}@keyframes backdrop-in{0%{opacity:0}to{opacity:1}}.dialog-heading{padding:17px 20px 17px 25px;display:flex;align-items:center;justify-content:space-between;gap:20px;border-bottom:1px solid var(--border)}.dialog-heading h2{margin:0;font-size:var(--font-ui);font-weight:600}.settings-dialog{width:880px;max-width:calc(100vw - 64px)}.settings-layout{display:flex;height:min(590px,calc(100vh - 143px))}.settings-nav{width:168px;border-right:1px solid var(--border);padding:19px 12px;display:flex;flex-direction:column;gap:5px;flex-shrink:0;background:var(--soft-surface)}.settings-nav>button{display:flex;align-items:center;gap:9px;padding:11px 12px;font-size:var(--font-support);border-radius:8px;color:var(--muted);text-align:left}.settings-nav>button.selected{color:var(--text);background:var(--selected)}.settings-nav>button:hover{color:var(--text)}.settings-nav>button .muse-mark{flex-shrink:0;opacity:.78;transition:opacity .16s ease}.settings-nav>button.selected .muse-mark,.settings-nav>button:hover .muse-mark{opacity:1}.settings-content{padding:31px 30px;overflow:auto;flex:1;min-width:0}.settings-section-heading h3{font-family:var(--font-family-ui);font-size:29px;font-weight:400;letter-spacing:-.5px;margin:10px 0}.settings-section-heading p{color:var(--muted);font-size:var(--font-body);line-height:1.75;margin-bottom:23px}.theme-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px;margin:0 -3px 24px}.theme-card{padding:4px;border:1px solid transparent;border-radius:10px;text-align:left}.theme-card.selected{border-color:var(--accent);background:var(--selected)}.theme-card:hover{background:var(--hover)}.theme-thumbnail{aspect-ratio:1.35;position:relative;overflow:hidden;border-radius:6px;border:1px solid var(--border)}.theme-thumbnail>img{width:100%;height:100%;object-fit:cover;object-position:78% center}.theme-thumbnail.muse-thumbnail{background:linear-gradient(135deg,#003698,#092063)}.theme-thumbnail.muse-thumbnail>img{object-fit:contain;padding:9px}.theme-check{position:absolute;top:5px;right:5px;height:18px;width:18px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:var(--primary);color:var(--on-primary)}.theme-name{display:flex;align-items:center;gap:5px;font-size:var(--font-support);font-weight:500;margin:10px 3px 6px}.theme-description{display:block;margin:0 3px 5px;color:var(--muted);font-size:var(--font-support);line-height:1.5}.setting-row{display:flex;justify-content:space-between;align-items:center;gap:18px;min-height:73px;padding:15px 0;border-top:1px solid var(--border)}.setting-label{display:flex;align-items:center;gap:7px;font-size:var(--font-ui);font-weight:500}.setting-row small{display:block;color:var(--muted);font-size:var(--font-support);line-height:1.6;margin-top:6px;max-width:290px}.switch{appearance:none;width:31px;height:18px;border-radius:15px;border:1px solid var(--strong-border);background:var(--disabled-button);position:relative;flex-shrink:0;cursor:pointer;transition:background .2s}.switch:after{content:"";display:block;height:12px;width:12px;position:absolute;top:2px;left:2px;background:var(--muted);border-radius:50%;transition:transform .2s}.switch:checked{background:var(--primary);border-color:var(--primary-border)}.switch:checked:after{background:var(--on-primary);transform:translate(12px)}.range-setting{display:flex;gap:9px;align-items:center;font-size:var(--font-support);color:var(--muted);width:150px}.range-setting input{width:110px;accent-color:var(--accent);height:3px;cursor:pointer}.range-setting span{min-width:26px}.segmented{display:flex;gap:2px;padding:3px;border:1px solid var(--border);border-radius:7px;background:var(--soft-surface)}.segmented>button{width:29px;height:24px;border-radius:4px}.segmented>button.selected{background:var(--selected);box-shadow:0 1px 3px #0002}.connection-card{display:flex;gap:11px;align-items:center;padding:16px;border:1px solid var(--border);background:var(--soft-surface);border-radius:10px}.connection-card>svg{color:var(--muted)}.connection-card.ready>svg{color:var(--green)}.connection-card>div{flex:1}.connection-card strong{font-size:var(--font-ui);font-weight:500}.connection-card span{display:block;margin-top:5px;color:var(--muted);font-size:var(--font-support);line-height:1.6}.path-readout{margin:10px 0 26px;color:var(--muted);font-size:var(--font-support);font-family:var(--font-family-code);overflow-wrap:anywhere}.field-label{display:block;font-size:var(--font-support);font-weight:500;margin:20px 0 10px}.text-input{background:var(--input);border:1px solid var(--border);border-radius:7px;padding:10px 11px;color:var(--text);width:100%;font-size:var(--font-ui)}.text-input::placeholder{color:var(--placeholder)}.input-with-button{display:flex;gap:7px}.input-with-button input{min-width:0}.field-hint{font-size:var(--font-support);color:var(--muted);line-height:1.7;margin:9px 0 18px}.setup-instructions{margin-top:28px;padding-top:22px;border-top:1px solid var(--border)}.setup-instructions h4{font-size:var(--font-ui);font-weight:500;margin:0 0 10px}.setup-instructions p{font-size:var(--font-support);line-height:1.8;color:var(--muted)}.setup-instructions code{background:var(--code-inline);padding:2px 4px;border-radius:4px;color:var(--text)}.about-settings{text-align:center}.about-settings>img{width:88px;height:88px;object-fit:contain}.about-settings h3{font-size:var(--font-brand);font-weight:500;margin:9px 0;letter-spacing:-.6px}.version-pill{display:inline-block;color:var(--muted);border:1px solid var(--border);border-radius:5px;padding:3px 7px;font-size:var(--font-support)}.about-settings>p{color:var(--muted);font-size:var(--font-support);line-height:1.85;margin:20px 0}.about-facts{border-top:1px solid var(--border);border-bottom:1px solid var(--border);padding:15px 0;text-align:left;max-width:290px;margin:0 auto}.about-facts>span{display:flex;justify-content:space-between;font-size:var(--font-support);padding:7px 0;color:var(--secondary-text)}.about-facts svg{color:var(--green)}.about-settings>p.affiliation-note{font-size:var(--font-support)}.command-dialog{width:580px;max-width:calc(100vw - 60px);margin-top:min(17vh,140px)}.command-dialog .dialog-heading{display:none}.command-search{display:flex;align-items:center;gap:12px;padding:21px;border-bottom:1px solid var(--border);color:var(--muted)}.command-search input{flex:1;border:0;background:transparent;color:var(--text);font-size:var(--font-body);padding:0;box-shadow:none}.command-search input::placeholder{color:var(--placeholder)}.command-results{padding:8px;max-height:360px;overflow:auto}.command-group-heading{padding:8px 12px 4px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}.command-results>button{width:100%;display:flex;align-items:center;gap:13px;padding:12px 13px;border-radius:8px;text-align:left}.command-results>button.selected{background:var(--selected)}.command-results>button>svg{color:var(--muted)}.command-results>button>span{flex:1;min-width:0}.command-results strong{display:block;font-weight:500;font-size:var(--font-ui);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.command-results small{display:block;color:var(--muted);font-size:var(--font-support);margin-top:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.command-dialog footer{display:flex;align-items:center;justify-content:center;gap:20px;font-size:var(--font-caption);color:var(--muted);padding:12px 19px;border-top:1px solid var(--border)}.command-dialog footer>span{display:inline-flex;align-items:center;gap:5px;line-height:1}.command-dialog footer kbd{display:inline-flex;align-items:center;justify-content:center;min-width:22px;height:20px;padding:0 5px;border:1px solid var(--border);border-radius:5px;background:var(--soft-surface);color:var(--secondary-text);font-family:var(--font-family-ui);font-size:11px;font-weight:500;line-height:1}.command-empty{text-align:center;padding:35px 20px;color:var(--muted);font-size:var(--font-ui)}.rename-dialog{width:430px}.rename-dialog form{padding:0 25px 25px}.toast{position:fixed;bottom:45px;left:50%;transform:translate(-50%);max-width:min(650px,calc(100vw - 60px));display:flex;align-items:center;gap:10px;padding:10px 12px 10px 17px;border-radius:11px;border:1px solid var(--strong-border);background:var(--dialog);box-shadow:0 7px 35px #0003;z-index:200;font-size:var(--font-ui);line-height:1.6}.toast.error{border-color:var(--error-border)}.toast.error>svg{color:var(--red)}.toast.success>svg{color:var(--green)}.toast>span{flex:1;overflow-wrap:anywhere}.workspace-page{overflow:auto;flex:1;min-height:0;padding:48px 50px 30px;position:relative}.page-heading{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-bottom:36px}.page-heading h1,.page-empty h1{font-family:var(--font-family-ui);font-size:var(--font-page);font-weight:400;letter-spacing:-.8px;margin:12px 0}.page-heading p{display:flex;align-items:center;gap:6px;color:var(--muted);margin:0;font-size:var(--font-ui);line-height:1.7}.page-heading>svg{color:var(--muted)}.project-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(235px,1fr));gap:16px}.project-card{background:var(--glass);border:1px solid var(--border);border-radius:13px;text-align:left;padding:22px;min-height:205px;transition:background .2s,transform .2s}.project-card:hover{background:var(--hover);transform:translateY(-2px)}.project-card-top{display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:17px}.project-card-icon{display:inline-flex;padding:12px;border-radius:12px;background:var(--soft-surface);color:var(--accent)}.project-git-pills{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:5px}.project-git-pill{display:inline-flex;align-items:center;gap:4px;padding:3px 8px;border-radius:999px;border:1px solid var(--border);background:var(--soft-surface);font-size:11px;color:var(--secondary-text);max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.project-git-pill.clean{color:var(--green)}.project-git-pill.dirty{color:var(--warning)}.project-card h2{font-size:var(--font-title);font-weight:500;margin:0 0 8px}.project-card p{font-family:var(--font-family-code);font-size:var(--font-support);color:var(--muted);overflow-wrap:anywhere;line-height:1.7}.project-card footer{display:flex;justify-content:space-between;color:var(--muted);font-size:var(--font-support);margin-top:20px;padding-top:15px;border-top:1px solid var(--border)}.add-project{border-style:dashed;background:transparent;display:flex;align-items:center;justify-content:center;flex-direction:column;color:var(--muted)}.add-project h2{margin-top:17px;font-size:var(--font-ui)}.add-project p{font-family:inherit;font-size:var(--font-support)}.page-footnote{font-size:var(--font-support);color:var(--muted);line-height:1.7;margin:28px 0 0}.page-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}.page-empty>svg{color:var(--accent);margin-bottom:15px}.page-empty>p{font-size:var(--font-ui);line-height:1.8;color:var(--muted);max-width:360px}.page-empty .button{margin-top:17px}.files-page{display:flex;flex-direction:column}.files-page .page-heading{margin-bottom:22px}.files-breadcrumbs{display:flex;align-items:center;flex-wrap:wrap;gap:5px;color:var(--muted);font-size:var(--font-support);margin-top:6px}.breadcrumb-part{display:inline-flex;align-items:center;gap:5px}.breadcrumb-segment{display:inline-flex;align-items:center;gap:6px;padding:4px 8px;border-radius:6px;color:var(--secondary-text);font-size:var(--font-support);transition:background-color .16s ease,color .16s ease}button.breadcrumb-segment:hover{background:var(--hover);color:var(--text)}.breadcrumb-segment.current{color:var(--text);font-weight:500;background:var(--soft-surface)}.file-browser{flex:1;display:grid;grid-template-columns:minmax(220px,31%) minmax(0,1fr);min-height:240px;border:1px solid var(--border);border-radius:15px;background:var(--glass);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);box-shadow:var(--composer-shadow);overflow:hidden}.file-browser-sidebar{border-right:1px solid var(--border);display:flex;flex-direction:column;min-height:0;min-width:0;background:var(--soft-surface)}.file-search-bar{padding:12px 12px 10px;border-bottom:1px solid var(--faint-border);flex-shrink:0}.file-search{display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;border:1px solid var(--border);background:var(--input);color:var(--muted);transition:border-color .18s ease,box-shadow .18s ease}.file-search:focus-within{border-color:var(--focus);box-shadow:0 0 0 2px var(--focus-soft)}.file-search input{width:100%;background:transparent;border:0;color:var(--text);font-size:var(--font-support);box-shadow:none}.file-search input::placeholder{color:var(--placeholder)}.file-search-clear{display:inline-flex;align-items:center;justify-content:center;padding:2px;border-radius:4px;color:var(--muted)}.file-search-clear:hover{background:var(--hover);color:var(--text)}.file-browser-list{flex:1;min-height:0;overflow-y:auto;padding:8px 10px}.file-row{display:flex;width:100%;align-items:center;gap:9px;text-align:left;padding:8px 10px;margin-bottom:2px;border-radius:8px;font-size:var(--font-support);color:var(--secondary-text);transition:background-color .16s ease,color .16s ease}.file-row>span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}.file-icon{color:var(--muted);flex-shrink:0;transition:color .16s ease}.file-icon.folder{color:var(--accent)}.file-row-chevron{color:var(--muted);opacity:.65;transition:transform .16s ease}.file-row:hover .file-row-chevron{transform:translate(2px);opacity:1}.file-row:hover{background:var(--hover);color:var(--text)}.file-row.selected{background:var(--selected);color:var(--text);font-weight:500}.file-row.selected .file-icon,.file-row:hover .file-icon{color:var(--accent)}.parent-folder{color:var(--muted);font-size:var(--font-support);margin-bottom:6px;border-bottom:1px solid var(--faint-border);border-radius:8px 8px 0 0}.file-preview{display:flex;flex-direction:column;min-width:0;min-height:0;overflow:hidden;background:var(--code-background)}.file-preview>header{display:flex;gap:12px;padding:11px 18px;align-items:center;justify-content:space-between;border-bottom:1px solid var(--border);background:var(--soft-surface);font-size:var(--font-support);color:var(--muted)}.file-preview-title{display:flex;align-items:center;gap:8px;min-width:0;color:var(--text);font-weight:500}.file-preview-title>svg{color:var(--accent)}.file-preview-title>span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.file-preview-title>small{font-size:11px;font-weight:400;color:var(--muted);padding:2px 7px;border-radius:999px;border:1px solid var(--border);background:var(--soft-surface);flex-shrink:0}.file-ask-button.text-button{font-size:var(--font-support);white-space:nowrap;padding:5px 10px;border-radius:7px;border:1px solid var(--border);background:var(--surface);color:var(--text);text-decoration:none;transition:background-color .16s ease,border-color .16s ease}.file-ask-button.text-button:hover{background:var(--hover);border-color:var(--strong-border);text-decoration:none}.file-preview>pre{margin:0;overflow:auto;font-family:var(--font-family-code);font-size:var(--font-support);line-height:1.85;padding:18px 20px;flex:1}.file-preview-empty{margin:auto;text-align:center;padding:32px 24px;max-width:320px;color:var(--muted)}.file-empty-badge{width:52px;height:52px;border-radius:15px;display:inline-flex;align-items:center;justify-content:center;background:var(--soft-surface);border:1px solid var(--border);color:var(--accent)}.file-preview-empty h3{font-size:var(--font-title);font-weight:500;color:var(--text);margin:16px 0 8px}.file-preview-empty p{font-size:var(--font-support);line-height:1.65;color:var(--muted)}.file-list-message{font-size:var(--font-support);color:var(--muted);padding:14px 10px;line-height:1.7}.file-list-footnote{display:flex;align-items:center;gap:6px;font-size:11.5px;color:var(--muted);padding:9px 14px;border-top:1px solid var(--border);background:var(--soft-surface);flex-shrink:0}.docs-page{width:100%}.docs-container{max-width:850px;width:100%;margin:0 auto}.guides{border:1px solid var(--border);border-radius:14px;background:var(--glass);-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);overflow:hidden}.guide-item{border-bottom:1px solid var(--border);transition:background-color .2s ease}.guide-item:last-child{border-bottom:0}.guide-item:hover{background:var(--soft-surface)}.guide-summary{width:100%;display:flex;align-items:center;gap:13px;font-size:var(--font-ui);font-weight:450;padding:19px 20px;text-align:left;color:var(--text);cursor:pointer}.guide-number{font-family:var(--font-family-code);font-size:var(--font-caption);color:var(--muted)}.guide-chevron{margin-left:auto;color:var(--muted);transition:transform .28s cubic-bezier(.22,1,.36,1),color .18s ease}.guide-item.open .guide-chevron{transform:rotate(90deg);color:var(--accent)}.guide-collapse{display:grid;grid-template-rows:0fr;opacity:0;transition:grid-template-rows .3s cubic-bezier(.22,1,.36,1),opacity .24s cubic-bezier(.22,1,.36,1)}.guide-collapse.open{grid-template-rows:1fr;opacity:1}.guide-collapse-inner{min-height:0;overflow:hidden}.guide-collapse-inner p{margin:0 20px 20px 49px;font-size:var(--font-body);line-height:1.85;color:var(--secondary-text)}.shortcuts-guide{padding:30px 0;max-width:390px}.shortcuts-guide h2{font-size:var(--font-ui);font-weight:500;margin-bottom:16px}.shortcuts-guide div{display:flex;justify-content:space-between;margin:12px 0;color:var(--secondary-text);font-size:var(--font-support)}.shortcuts-guide kbd{padding:2px 6px;border-radius:4px;border:1px solid var(--border)}.fatal-error{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;padding:40px;text-align:center}.fatal-error>img{width:100px}.fatal-error h1{font-family:var(--font-family-ui);font-weight:400}.fatal-error p{line-height:1.8;max-width:480px;color:var(--muted)}.fatal-error pre{margin-bottom:25px;color:var(--red);white-space:pre-wrap}.spin{animation:rotate 1.5s linear infinite}.spinner{height:13px;width:13px;border:1.5px solid currentColor;border-right-color:transparent;border-radius:50%;animation:rotate .8s linear infinite}@keyframes rotate{to{transform:rotate(360deg)}}@keyframes breathe{0%,to{opacity:1}50%{opacity:.45}}:is([data-theme=muse],[data-theme=plush]) .muse-mark{filter:brightness(0) invert(1)}:is([data-theme=muse],[data-theme=plush]) .sidebar{box-shadow:inset -1px 0 #7eadff0a}:is([data-theme=muse],[data-theme=plush]) .sidebar-titlebar{color:#b8d2ff}:is([data-theme=muse],[data-theme=plush]) .desktop-tag{opacity:.6}:is([data-theme=muse],[data-theme=plush]) .main-nav button.selected>svg{filter:drop-shadow(0 0 5px #8cd2ff99)}:is([data-theme=muse],[data-theme=plush]) .chat-brand-background{opacity:calc(var(--background-presence) * .95);filter:drop-shadow(0 1px 0 #5db2ff24)}:is([data-theme=muse],[data-theme=plush]) .welcome-content{padding:0;position:absolute;bottom:15px;left:50%;transform:translate(-50%)}:is([data-theme=muse],[data-theme=plush]) .welcome-kicker,:is([data-theme=muse],[data-theme=plush]) .welcome h1,:is([data-theme=muse],[data-theme=plush]) .welcome-subtitle,:is([data-theme=muse],[data-theme=plush]) .project-local{display:none}:is([data-theme=muse],[data-theme=plush]) .welcome-project{justify-content:flex-start}:is([data-theme=muse],[data-theme=plush]) .project-chip{background:#1e60c129;border-color:#80b8ff22;color:#c4d8fc;font-size:var(--font-support);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}:is([data-theme=muse],[data-theme=plush]) .starter-section{display:none}:is([data-theme=muse],[data-theme=plush]) .composer-tools .icon-button{background:#407de350;border:1px solid #80b6ff36;color:#d9e8ff}:is([data-theme=muse],[data-theme=plush]) .select-control{background:#2767c738;border-radius:15px;padding:5px 10px;gap:7px}:is([data-theme=muse],[data-theme=plush]) .composer-tools .muse-select .select-control{min-height:38px;background:#2767c738;border-color:transparent;border-radius:15px;padding:7px 12px;gap:6px}:is([data-theme=muse],[data-theme=plush]) .composer-tools .muse-select .select-control:hover{background:#3578de4d}:is([data-theme=muse],[data-theme=plush]) .send-button:disabled{border:1px solid #8db9ff88;opacity:.9;box-shadow:0 0 18px #287bff22}:is([data-theme=muse],[data-theme=plush]) .composer-footnote kbd{background:#2767c745;border-color:#80b6ff33;color:#d9e8ff}:is([data-theme=muse],[data-theme=plush]) .main-workspace:has(.transcript,.loading-conversation) .chat-brand-background{opacity:calc(var(--background-presence) * .092)}@media(max-width:1100px){.app-shell{grid-template-columns:244px minmax(0,1fr) 0px}.app-shell.with-inspector{grid-template-columns:244px minmax(0,1fr) 250px}.app-shell.sidebar-hidden{grid-template-columns:0px minmax(0,1fr) 0px}.app-shell.sidebar-hidden.with-inspector{grid-template-columns:0px minmax(0,1fr) 250px}.sidebar{width:244px}.inspector{width:250px}.starter-arrow,.statusbar-motto,.local-pill{display:none}.welcome-content,.starter-section,.composer-dock,.transcript{width:calc(100% - 64px)}.with-inspector .welcome-content,.with-inspector .starter-section,.with-inspector .composer-dock,.with-inspector .transcript{width:calc(100% - 38px)}.starter-card{padding:14px 10px;gap:7px;flex-direction:column}.starter-card small{font-size:var(--font-support);white-space:normal}.with-inspector .starter-grid{grid-template-columns:1fr;gap:5px}.with-inspector .starter-card{flex-direction:row;padding:10px;align-items:center}.with-inspector .starter-card small{display:none}.with-inspector .welcome-subtitle{max-width:220px}.with-inspector .welcome-subtitle br{display:none}.with-inspector .composer-footnote>span:first-child{display:none}.with-inspector .effort-select{display:none}.with-inspector .welcome-content{padding-top:40px}.workspace-page{padding:36px 28px}.window-tools{gap:2px}}@media(max-height:780px){.sidebar-companion{height:54px}.main-nav{gap:2px;padding-bottom:7px}.main-nav button{padding:8px 13px}.brand{padding-bottom:12px}:is([data-theme=muse],[data-theme=plush]) .brand{padding-bottom:12px}.sidebar-primary{padding-bottom:3px}.welcome-content{padding-top:35px}.welcome h1{font-size:38px}.welcome-kicker{margin-bottom:17px}.welcome-subtitle{margin-bottom:18px}.starter-section{padding-top:12px;margin-bottom:15px}.starter-card{padding-top:12px;padding-bottom:12px}.composer-dock{padding-bottom:11px}}@media(max-height:740px){.sidebar-companion{display:none}.main-nav{display:grid;grid-template-columns:repeat(5,1fr);gap:3px}.main-nav button{justify-content:center;padding:10px 0}.main-nav button>span{display:none}}@media(max-height:660px){.sidebar-companion{display:none}.sidebar-empty{padding-top:5px}.welcome{min-height:260px}.welcome-content{padding-top:20px}.welcome h1{font-size:33px;margin-bottom:12px}.welcome-subtitle{font-size:var(--font-body);margin-bottom:12px}.welcome-kicker{margin-bottom:11px}.starter-label{display:none}.composer textarea{min-height:43px}.composer{padding-top:13px}}@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}[data-reduce-motion=true] *,[data-reduce-motion=true] *:before,[data-reduce-motion=true] *:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}[data-theme=plush] .chat-brand-background{background-image:linear-gradient(0deg,#06256588,transparent 40%),url(/themes/plush.png);background-size:cover;background-position:center right;opacity:var(--background-presence);filter:none}[data-theme=plush] .main-workspace:has(.transcript,.loading-conversation) .chat-brand-background{opacity:calc(var(--background-presence) * .09)}.conversation-group-label{width:100%;display:inline-flex;align-items:center;gap:6px;padding:5px 10px;margin:4px 0 2px;border-radius:6px;font-size:var(--font-caption);font-weight:600;color:var(--muted);text-align:left;transition:background-color .18s ease,color .18s ease}.conversation-group-label:hover{background:var(--hover);color:var(--text)}.conversation-group-label .section-chevron{opacity:0}.conversation-group-label:hover .section-chevron,.conversation-group-label .section-chevron.collapsed{opacity:.75}.conversation-copy{min-width:0;flex:1;display:flex;flex-direction:column;gap:3px}.conversation-copy .conversation-title{flex:none;font-weight:500}.conversation-project{font-size:var(--font-caption);color:var(--muted);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.history-status{display:flex;align-items:center;gap:8px;padding:12px 10px;color:var(--muted);font-size:var(--font-support)}.history-error{padding:12px 10px;font-size:var(--font-support);color:var(--error-text)}.history-error p{margin-bottom:8px}.muse-select{min-width:0}.muse-select .select-control{width:100%;font:inherit;font-size:var(--font-support);cursor:pointer;border:0;background:transparent}.select-value{min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.model-select .select-value{max-width:178px}.select-chevron{flex:0 0 auto;margin-left:auto;opacity:.7;transition:transform .22s cubic-bezier(.22,1,.36,1)}.select-control[aria-expanded=true] .select-chevron{transform:rotate(180deg)}.select-control[aria-expanded=true]{background:var(--selected)}.select-control:disabled{cursor:default;opacity:.55}.project-switcher .muse-select{flex:1}.project-switcher .select-control{min-height:32px;padding:6px 10px;gap:10px;border-radius:8px;border:1px solid var(--border);background:var(--soft-surface);text-align:left}.project-switcher .select-control:hover{background:var(--hover);border-color:var(--strong-border);color:var(--text)}.project-switcher .select-control:hover .sidebar-item-icon{color:var(--text)}.select-popover{position:fixed;inset:auto;margin:0;padding:6px;max-width:calc(100vw - 16px);overflow-y:auto;border-radius:14px;border:1px solid var(--border);color:var(--text);background:var(--dialog);box-shadow:0 16px 48px #0004,inset 0 1px #ffffff10;font-size:var(--font-ui)}.select-heading{padding:7px 10px 9px;font-size:var(--font-support);color:var(--muted)}.select-option{display:flex;align-items:center;gap:9px;padding:9px 10px;border-radius:8px;cursor:pointer;white-space:nowrap;transition:background-color .14s ease}.select-option.highlighted{background:var(--selected)}.select-option[aria-selected=true]{color:var(--accent)}.select-option span{overflow:hidden;text-overflow:ellipsis}:is([data-theme=muse],[data-theme=plush]) .muse-select .select-control{background:#2767c738;padding:6px 12px}:is([data-theme=muse],[data-theme=plush]) .project-switcher .select-control{background:var(--soft-surface);padding:6px 10px}:is([data-theme=muse],[data-theme=plush]) .project-switcher .select-control:hover{background:var(--hover)}:is([data-theme=muse],[data-theme=plush]) .select-option[aria-selected=true]{color:#e3edff}.voice-control{display:flex;align-items:center}.voice-control.recording .icon-button{color:#e85d6f}.voice-status{position:absolute;bottom:calc(100% + 10px);left:0;display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:12px;border:1px solid var(--border);background:var(--dialog);color:var(--text);font-size:var(--font-support);box-shadow:0 8px 28px #0002}.voice-waveform{display:inline-flex;align-items:center;gap:2.5px;height:14px}.voice-wave-bar{width:2.5px;height:14px;border-radius:999px;background:#e85d6f;transform-origin:center;transition:transform .1s ease}.voice-status .icon-button{width:25px;height:25px}.composer.is-dragging{border-color:var(--focus);box-shadow:var(--composer-shadow),0 0 0 3px var(--focus-soft)}.mention-menu button{gap:10px}.mention-menu strong{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.slash-menu{position:absolute;bottom:calc(100% + 10px);left:0;right:0;max-height:290px;overflow-y:auto;padding:7px;z-index:8;background:var(--dialog);border:1px solid var(--strong-border);border-radius:15px;box-shadow:0 12px 32px #0003}.slash-menu button{display:flex;align-items:center;gap:18px;width:100%;padding:10px 12px;border-radius:8px;text-align:left;font-size:var(--font-ui)}.slash-menu button[aria-selected=true],.slash-menu button:hover{background:var(--selected)}.slash-menu strong{min-width:72px;font-weight:500}.slash-menu span{color:var(--muted);font-size:var(--font-support)}textarea,input,[contenteditable=true]{caret-color:var(--text,#30332f)}[data-theme=daylight] textarea,[data-theme=grove] textarea{caret-color:#26362b;color-scheme:light}.app-shell[data-theme]{color:var(--text);background:var(--app-background)}';
class xO extends G.Component {
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
const vO = bO;
function wO(t) {
  const i = dS.createRoot(t);
  return i.render(
    /* @__PURE__ */ h.jsx(xO, { children: /* @__PURE__ */ h.jsx(gO, {}) })
  ), () => i.unmount();
}
export {
  wO as mount,
  vO as styles
};
