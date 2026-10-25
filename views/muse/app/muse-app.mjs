function Wy(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var sd = { exports: {} }, no = {};
var mx;
function nS() {
  if (mx) return no;
  mx = 1;
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
  return no.Fragment = i, no.jsx = a, no.jsxs = a, no;
}
var gx;
function iS() {
  return gx || (gx = 1, sd.exports = nS()), sd.exports;
}
var h = iS(), ud = { exports: {} }, Oe = {};
var bx;
function rS() {
  if (bx) return Oe;
  bx = 1;
  var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), i = /* @__PURE__ */ Symbol.for("react.portal"), a = /* @__PURE__ */ Symbol.for("react.fragment"), o = /* @__PURE__ */ Symbol.for("react.strict_mode"), s = /* @__PURE__ */ Symbol.for("react.profiler"), c = /* @__PURE__ */ Symbol.for("react.consumer"), f = /* @__PURE__ */ Symbol.for("react.context"), p = /* @__PURE__ */ Symbol.for("react.forward_ref"), m = /* @__PURE__ */ Symbol.for("react.suspense"), g = /* @__PURE__ */ Symbol.for("react.memo"), x = /* @__PURE__ */ Symbol.for("react.lazy"), b = /* @__PURE__ */ Symbol.for("react.activity"), w = /* @__PURE__ */ Symbol.for("react.view_transition"), v = Symbol.iterator;
  function S(T) {
    return T === null || typeof T != "object" ? null : (T = v && T[v] || T["@@iterator"], typeof T == "function" ? T : null);
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
  }, C = Object.assign, O = {};
  function I(T, J, L) {
    this.props = T, this.context = J, this.refs = O, this.updater = L || j;
  }
  I.prototype.isReactComponent = {}, I.prototype.setState = function(T, J) {
    if (typeof T != "object" && typeof T != "function" && T != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, T, J, "setState");
  }, I.prototype.forceUpdate = function(T) {
    this.updater.enqueueForceUpdate(this, T, "forceUpdate");
  };
  function U() {
  }
  U.prototype = I.prototype;
  function Y(T, J, L) {
    this.props = T, this.context = J, this.refs = O, this.updater = L || j;
  }
  var K = Y.prototype = new U();
  K.constructor = Y, C(K, I.prototype), K.isPureReactComponent = !0;
  var N = Array.isArray;
  function F() {
  }
  var le = { H: null, A: null, T: null, S: null }, ye = Object.prototype.hasOwnProperty;
  function Z(T, J, L) {
    var re = L.ref;
    return {
      $$typeof: t,
      type: T,
      key: J,
      ref: re !== void 0 ? re : null,
      props: L
    };
  }
  function ee(T, J) {
    return Z(T.type, J, T.props);
  }
  function se(T) {
    return typeof T == "object" && T !== null && T.$$typeof === t;
  }
  function Ne(T) {
    var J = { "=": "=0", ":": "=2" };
    return "$" + T.replace(/[=:]/g, function(L) {
      return J[L];
    });
  }
  var ce = /\/+/g;
  function ne(T, J) {
    return typeof T == "object" && T !== null && T.key != null ? Ne("" + T.key) : J.toString(36);
  }
  function W(T) {
    switch (T.status) {
      case "fulfilled":
        return T.value;
      case "rejected":
        throw T.reason;
      default:
        switch (typeof T.status == "string" ? T.then(F, F) : (T.status = "pending", T.then(
          function(J) {
            T.status === "pending" && (T.status = "fulfilled", T.value = J);
          },
          function(J) {
            T.status === "pending" && (T.status = "rejected", T.reason = J);
          }
        )), T.status) {
          case "fulfilled":
            return T.value;
          case "rejected":
            throw T.reason;
        }
    }
    throw T;
  }
  function ue(T, J, L, re, he) {
    var be = typeof T;
    (be === "undefined" || be === "boolean") && (T = null);
    var Te = !1;
    if (T === null) Te = !0;
    else
      switch (be) {
        case "bigint":
        case "string":
        case "number":
          Te = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case t:
            case i:
              Te = !0;
              break;
            case x:
              return Te = T._init, ue(
                Te(T._payload),
                J,
                L,
                re,
                he
              );
          }
      }
    if (Te)
      return he = he(T), Te = re === "" ? "." + ne(T, 0) : re, N(he) ? (L = "", Te != null && (L = Te.replace(ce, "$&/") + "/"), ue(he, J, L, "", function(Ht) {
        return Ht;
      })) : he != null && (se(he) && (he = ee(
        he,
        L + (he.key == null || T && T.key === he.key ? "" : ("" + he.key).replace(
          ce,
          "$&/"
        ) + "/") + Te
      )), J.push(he)), 1;
    Te = 0;
    var me = re === "" ? "." : re + ":";
    if (N(T))
      for (var je = 0; je < T.length; je++)
        re = T[je], be = me + ne(re, je), Te += ue(
          re,
          J,
          L,
          be,
          he
        );
    else if (je = S(T), typeof je == "function")
      for (T = je.call(T), je = 0; !(re = T.next()).done; )
        re = re.value, be = me + ne(re, je++), Te += ue(
          re,
          J,
          L,
          be,
          he
        );
    else if (be === "object") {
      if (typeof T.then == "function")
        return ue(
          W(T),
          J,
          L,
          re,
          he
        );
      throw J = String(T), Error(
        "Objects are not valid as a React child (found: " + (J === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : J) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Te;
  }
  function pe(T, J, L) {
    if (T == null) return T;
    var re = [], he = 0;
    return ue(T, re, "", "", function(be) {
      return J.call(L, be, he++);
    }), re;
  }
  function _e(T) {
    if (T._status === -1) {
      var J = T._result, L = J();
      L.then(
        function(re) {
          (T._status === 0 || T._status === -1) && (T._status = 1, T._result = re, L.status === void 0 && (L.status = "fulfilled", L.value = re));
        },
        function(re) {
          (T._status === 0 || T._status === -1) && (T._status = 2, T._result = re, L.status === void 0 && (L.status = "rejected", L.reason = re));
        }
      ), T._status === -1 && (T._status = 0, T._result = L);
    }
    if (T._status === 1) return T._result.default;
    throw T._result;
  }
  var z = typeof reportError == "function" ? reportError : function(T) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var J = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof T == "object" && T !== null && typeof T.message == "string" ? String(T.message) : String(T),
        error: T
      });
      if (!window.dispatchEvent(J)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", T);
      return;
    }
    console.error(T);
  };
  function Ve(T) {
    var J = le.T, L = {};
    L.types = J !== null ? J.types : null, le.T = L;
    try {
      var re = T(), he = le.S;
      he !== null && he(L, re), typeof re == "object" && re !== null && typeof re.then == "function" && re.then(F, z);
    } catch (be) {
      z(be);
    } finally {
      J !== null && L.types !== null && (J.types = L.types), le.T = J;
    }
  }
  function dt(T) {
    var J = le.T;
    if (J !== null) {
      var L = J.types;
      L === null ? J.types = [T] : L.indexOf(T) === -1 && L.push(T);
    } else Ve(dt.bind(null, T));
  }
  var E = {
    map: pe,
    forEach: function(T, J, L) {
      pe(
        T,
        function() {
          J.apply(this, arguments);
        },
        L
      );
    },
    count: function(T) {
      var J = 0;
      return pe(T, function() {
        J++;
      }), J;
    },
    toArray: function(T) {
      return pe(T, function(J) {
        return J;
      }) || [];
    },
    only: function(T) {
      if (!se(T))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return T;
    }
  };
  return Oe.Activity = b, Oe.Children = E, Oe.Component = I, Oe.Fragment = a, Oe.Profiler = s, Oe.PureComponent = Y, Oe.StrictMode = o, Oe.Suspense = m, Oe.ViewTransition = w, Oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = le, Oe.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(T) {
      return le.H.useMemoCache(T);
    }
  }, Oe.addTransitionType = dt, Oe.cache = function(T) {
    return function() {
      return T.apply(null, arguments);
    };
  }, Oe.cacheSignal = function() {
    return null;
  }, Oe.cloneElement = function(T, J, L) {
    if (T == null)
      throw Error(
        "The argument must be a React element, but you passed " + T + "."
      );
    var re = C({}, T.props), he = T.key;
    if (J != null)
      for (be in J.key !== void 0 && (he = "" + J.key), J)
        !ye.call(J, be) || be === "key" || be === "__self" || be === "__source" || be === "ref" && J.ref === void 0 || (re[be] = J[be]);
    var be = arguments.length - 2;
    if (be === 1) re.children = L;
    else if (1 < be) {
      for (var Te = Array(be), me = 0; me < be; me++)
        Te[me] = arguments[me + 2];
      re.children = Te;
    }
    return Z(T.type, he, re);
  }, Oe.createContext = function(T) {
    return T = {
      $$typeof: f,
      _currentValue: T,
      _currentValue2: T,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, T.Provider = T, T.Consumer = {
      $$typeof: c,
      _context: T
    }, T;
  }, Oe.createElement = function(T, J, L) {
    var re, he = {}, be = null;
    if (J != null)
      for (re in J.key !== void 0 && (be = "" + J.key), J)
        ye.call(J, re) && re !== "key" && re !== "__self" && re !== "__source" && (he[re] = J[re]);
    var Te = arguments.length - 2;
    if (Te === 1) he.children = L;
    else if (1 < Te) {
      for (var me = Array(Te), je = 0; je < Te; je++)
        me[je] = arguments[je + 2];
      he.children = me;
    }
    if (T && T.defaultProps)
      for (re in Te = T.defaultProps, Te)
        he[re] === void 0 && (he[re] = Te[re]);
    return Z(T, be, he);
  }, Oe.createRef = function() {
    return { current: null };
  }, Oe.forwardRef = function(T) {
    return { $$typeof: p, render: T };
  }, Oe.isValidElement = se, Oe.lazy = function(T) {
    return {
      $$typeof: x,
      _payload: { _status: -1, _result: T },
      _init: _e
    };
  }, Oe.memo = function(T, J) {
    return {
      $$typeof: g,
      type: T,
      compare: J === void 0 ? null : J
    };
  }, Oe.startTransition = Ve, Oe.unstable_useCacheRefresh = function() {
    return le.H.useCacheRefresh();
  }, Oe.use = function(T) {
    return le.H.use(T);
  }, Oe.useActionState = function(T, J, L) {
    return le.H.useActionState(T, J, L);
  }, Oe.useCallback = function(T, J) {
    return le.H.useCallback(T, J);
  }, Oe.useContext = function(T) {
    return le.H.useContext(T);
  }, Oe.useDebugValue = function() {
  }, Oe.useDeferredValue = function(T, J) {
    return le.H.useDeferredValue(T, J);
  }, Oe.useEffect = function(T, J) {
    return le.H.useEffect(T, J);
  }, Oe.useEffectEvent = function(T) {
    return le.H.useEffectEvent(T);
  }, Oe.useId = function() {
    return le.H.useId();
  }, Oe.useImperativeHandle = function(T, J, L) {
    return le.H.useImperativeHandle(T, J, L);
  }, Oe.useInsertionEffect = function(T, J) {
    return le.H.useInsertionEffect(T, J);
  }, Oe.useLayoutEffect = function(T, J) {
    return le.H.useLayoutEffect(T, J);
  }, Oe.useMemo = function(T, J) {
    return le.H.useMemo(T, J);
  }, Oe.useOptimistic = function(T, J) {
    return le.H.useOptimistic(T, J);
  }, Oe.useReducer = function(T, J, L) {
    return le.H.useReducer(T, J, L);
  }, Oe.useRef = function(T) {
    return le.H.useRef(T);
  }, Oe.useState = function(T) {
    return le.H.useState(T);
  }, Oe.useSyncExternalStore = function(T, J, L) {
    return le.H.useSyncExternalStore(
      T,
      J,
      L
    );
  }, Oe.useTransition = function() {
    return le.H.useTransition();
  }, Oe.version = "19.3.0", Oe;
}
var xx;
function pp() {
  return xx || (xx = 1, ud.exports = rS()), ud.exports;
}
var Q = pp(), cd = { exports: {} }, io = {}, fd = { exports: {} }, dd = {};
var yx;
function aS() {
  return yx || (yx = 1, (function(t) {
    function i(W, ue) {
      var pe = W.length;
      W.push(ue);
      e: for (; 0 < pe; ) {
        var _e = pe - 1 >>> 1, z = W[_e];
        if (0 < s(z, ue))
          W[_e] = ue, W[pe] = z, pe = _e;
        else break e;
      }
    }
    function a(W) {
      return W.length === 0 ? null : W[0];
    }
    function o(W) {
      if (W.length === 0) return null;
      var ue = W[0], pe = W.pop();
      if (pe !== ue) {
        W[0] = pe;
        e: for (var _e = 0, z = W.length, Ve = z >>> 1; _e < Ve; ) {
          var dt = 2 * (_e + 1) - 1, E = W[dt], T = dt + 1, J = W[T];
          if (0 > s(E, pe))
            T < z && 0 > s(J, E) ? (W[_e] = J, W[T] = pe, _e = T) : (W[_e] = E, W[dt] = pe, _e = dt);
          else if (T < z && 0 > s(J, pe))
            W[_e] = J, W[T] = pe, _e = T;
          else break e;
        }
      }
      return ue;
    }
    function s(W, ue) {
      var pe = W.sortIndex - ue.sortIndex;
      return pe !== 0 ? pe : W.id - ue.id;
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
    var m = [], g = [], x = 1, b = null, w = 3, v = !1, S = !1, j = !1, C = !1, O = typeof setTimeout == "function" ? setTimeout : null, I = typeof clearTimeout == "function" ? clearTimeout : null, U = typeof setImmediate < "u" ? setImmediate : null;
    function Y(W) {
      for (var ue = a(g); ue !== null; ) {
        if (ue.callback === null) o(g);
        else if (ue.startTime <= W)
          o(g), ue.sortIndex = ue.expirationTime, i(m, ue);
        else break;
        ue = a(g);
      }
    }
    function K(W) {
      if (j = !1, Y(W), !S)
        if (a(m) !== null)
          S = !0, N || (N = !0, se());
        else {
          var ue = a(g);
          ue !== null && ne(K, ue.startTime - W);
        }
    }
    var N = !1, F = -1, le = 5, ye = -1;
    function Z() {
      return C ? !0 : !(t.unstable_now() - ye < le);
    }
    function ee() {
      if (C = !1, N) {
        var W = t.unstable_now();
        ye = W;
        var ue = !0;
        try {
          e: {
            S = !1, j && (j = !1, I(F), F = -1), v = !0;
            var pe = w;
            try {
              t: {
                for (Y(W), b = a(m); b !== null && !(b.expirationTime > W && Z()); ) {
                  var _e = b.callback;
                  if (typeof _e == "function") {
                    b.callback = null, w = b.priorityLevel;
                    var z = _e(
                      b.expirationTime <= W
                    );
                    if (W = t.unstable_now(), typeof z == "function") {
                      b.callback = z, Y(W), ue = !0;
                      break t;
                    }
                    b === a(m) && o(m), Y(W);
                  } else o(m);
                  b = a(m);
                }
                if (b !== null) ue = !0;
                else {
                  var Ve = a(g);
                  Ve !== null && ne(
                    K,
                    Ve.startTime - W
                  ), ue = !1;
                }
              }
              break e;
            } finally {
              b = null, w = pe, v = !1;
            }
            ue = void 0;
          }
        } finally {
          ue ? se() : N = !1;
        }
      }
    }
    var se;
    if (typeof U == "function")
      se = function() {
        U(ee);
      };
    else if (typeof MessageChannel < "u") {
      var Ne = new MessageChannel(), ce = Ne.port2;
      Ne.port1.onmessage = ee, se = function() {
        ce.postMessage(null);
      };
    } else
      se = function() {
        O(ee, 0);
      };
    function ne(W, ue) {
      F = O(function() {
        W(t.unstable_now());
      }, ue);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(W) {
      W.callback = null;
    }, t.unstable_forceFrameRate = function(W) {
      0 > W || 125 < W ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : le = 0 < W ? Math.floor(1e3 / W) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return w;
    }, t.unstable_next = function(W) {
      switch (w) {
        case 1:
        case 2:
        case 3:
          var ue = 3;
          break;
        default:
          ue = w;
      }
      var pe = w;
      w = ue;
      try {
        return W();
      } finally {
        w = pe;
      }
    }, t.unstable_requestPaint = function() {
      C = !0;
    }, t.unstable_runWithPriority = function(W, ue) {
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
      var pe = w;
      w = W;
      try {
        return ue();
      } finally {
        w = pe;
      }
    }, t.unstable_scheduleCallback = function(W, ue, pe) {
      var _e = t.unstable_now();
      switch (typeof pe == "object" && pe !== null ? (pe = pe.delay, pe = typeof pe == "number" && 0 < pe ? _e + pe : _e) : pe = _e, W) {
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
      return z = pe + z, W = {
        id: x++,
        callback: ue,
        priorityLevel: W,
        startTime: pe,
        expirationTime: z,
        sortIndex: -1
      }, pe > _e ? (W.sortIndex = pe, i(g, W), a(m) === null && W === a(g) && (j ? (I(F), F = -1) : j = !0, ne(K, pe - _e))) : (W.sortIndex = z, i(m, W), S || v || (S = !0, N || (N = !0, se()))), W;
    }, t.unstable_shouldYield = Z, t.unstable_wrapCallback = function(W) {
      var ue = w;
      return function() {
        var pe = w;
        w = ue;
        try {
          return W.apply(this, arguments);
        } finally {
          w = pe;
        }
      };
    };
  })(dd)), dd;
}
var vx;
function lS() {
  return vx || (vx = 1, fd.exports = aS()), fd.exports;
}
var pd = { exports: {} }, Pt = {};
var wx;
function oS() {
  if (wx) return Pt;
  wx = 1;
  var t = pp();
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
  return Pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Pt.browser = function(x) {
    return { $$typeof: c, _reason: x };
  }, Pt.createPortal = function(x, b) {
    var w = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!b || b.nodeType !== 1 && b.nodeType !== 9 && b.nodeType !== 11)
      throw Error(i(299));
    return p(x, b, null, w);
  }, Pt.flushSync = function(x) {
    var b = m.T, w = o.p;
    try {
      if (m.T = null, o.p = 2, x) return x();
    } finally {
      m.T = b, o.p = w, o.d.f();
    }
  }, Pt.preconnect = function(x, b) {
    typeof x == "string" && (b ? (b = b.crossOrigin, b = typeof b == "string" ? b === "use-credentials" ? b : "" : void 0) : b = null, o.d.C(x, b));
  }, Pt.prefetchDNS = function(x) {
    typeof x == "string" && o.d.D(x);
  }, Pt.preinit = function(x, b) {
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
  }, Pt.preinitModule = function(x, b) {
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
  }, Pt.preload = function(x, b) {
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
  }, Pt.preloadModule = function(x, b) {
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
  }, Pt.requestFormReset = function(x) {
    o.d.r(x);
  }, Pt.unstable_batchedUpdates = function(x, b) {
    return x(b);
  }, Pt.useFormState = function(x, b, w) {
    return m.H.useFormState(x, b, w);
  }, Pt.useFormStatus = function() {
    return m.H.useHostTransitionStatus();
  }, Pt.version = "19.3.0", Pt;
}
var kx;
function sS() {
  if (kx) return pd.exports;
  kx = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (i) {
        console.error(i);
      }
  }
  return t(), pd.exports = oS(), pd.exports;
}
var Sx;
function uS() {
  if (Sx) return io;
  Sx = 1;
  var t = lS(), i = pp(), a = sS();
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
  function C(e) {
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
  function U(e, n, r) {
    return e === r ? !0 : e === n ? (O = e, !0) : !1;
  }
  function Y(e, n, r) {
    return e === r ? (I = e, !1) : e === n ? (I !== null && (O = e), !0) : !1;
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
  var F = Object.assign, le = /* @__PURE__ */ Symbol.for("react.element"), ye = /* @__PURE__ */ Symbol.for("react.transitional.element"), Z = /* @__PURE__ */ Symbol.for("react.portal"), ee = /* @__PURE__ */ Symbol.for("react.fragment"), se = /* @__PURE__ */ Symbol.for("react.strict_mode"), Ne = /* @__PURE__ */ Symbol.for("react.profiler"), ce = /* @__PURE__ */ Symbol.for("react.consumer"), ne = /* @__PURE__ */ Symbol.for("react.context"), W = /* @__PURE__ */ Symbol.for("react.forward_ref"), ue = /* @__PURE__ */ Symbol.for("react.suspense"), pe = /* @__PURE__ */ Symbol.for("react.suspense_list"), _e = /* @__PURE__ */ Symbol.for("react.memo"), z = /* @__PURE__ */ Symbol.for("react.lazy"), Ve = /* @__PURE__ */ Symbol.for("react.activity"), dt = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), E = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), T = /* @__PURE__ */ Symbol.for("react.view_transition"), J = /* @__PURE__ */ Symbol.for("react.recoverable"), L = Symbol.iterator;
  function re(e) {
    return e === null || typeof e != "object" ? null : (e = L && e[L] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var he = /* @__PURE__ */ Symbol.for("react.client.reference");
  function be(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === he ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ee:
        return "Fragment";
      case Ne:
        return "Profiler";
      case se:
        return "StrictMode";
      case ue:
        return "Suspense";
      case pe:
        return "SuspenseList";
      case Ve:
        return "Activity";
      case T:
        return "ViewTransition";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Z:
          return "Portal";
        case ne:
          return e.displayName || "Context";
        case ce:
          return (e._context.displayName || "Context") + ".Consumer";
        case W:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case _e:
          return n = e.displayName || null, n !== null ? n : be(e.type) || "Memo";
        case z:
          n = e._payload, e = e._init;
          try {
            return be(e(n));
          } catch {
          }
      }
    return null;
  }
  var Te = Array.isArray, me = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, je = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Ht = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ki = [], On = -1;
  function bt(e) {
    return { current: e };
  }
  function ut(e) {
    0 > On || (e.current = ki[On], ki[On] = null, On--);
  }
  function Fe(e, n) {
    On++, ki[On] = e.current, e.current = n;
  }
  var un = bt(null), Jt = bt(null), xt = bt(null), Dn = bt(null);
  function Si(e, n) {
    switch (Fe(xt, n), Fe(Jt, e), Fe(un, null), n.nodeType) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? zb(e) : 0;
        break;
      default:
        if (e = n.tagName, n = n.namespaceURI)
          n = zb(n), e = _b(n, e);
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
    ut(un), Fe(un, e);
  }
  function Mn() {
    ut(un), ut(Jt), ut(xt);
  }
  function zi(e) {
    var n = e.memoizedState;
    n !== null && (Pa._currentValue = n.memoizedState, Fe(Dn, e)), n = un.current;
    var r = _b(n, e.type);
    n !== r && (Fe(Jt, e), Fe(un, r));
  }
  function Rn(e) {
    Jt.current === e && (ut(un), ut(Jt)), Dn.current === e && (ut(Dn), Pa._currentValue = Ht);
  }
  var V, te;
  function ve(e) {
    if (V === void 0)
      try {
        throw Error();
      } catch (r) {
        var n = r.stack.trim().match(/\n( *(at )?)/);
        V = n && n[1] || "", te = -1 < r.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < r.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + V + e + te;
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
              var X = function() {
                throw Error();
              };
              if (Object.defineProperty(X.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(X, []);
                } catch (ae) {
                  var D = ae;
                }
                Reflect.construct(e, [], X);
              } else {
                try {
                  X.call();
                } catch (ae) {
                  D = ae;
                }
                X = !1;
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
                  }), X = !0, new e();
                } finally {
                  X && (H !== void 0 ? Object.defineProperty(e.prototype, "props", H) : delete e.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (ae) {
                D = ae;
              }
              (X = e()) && typeof X.catch == "function" && X.catch(function() {
              });
            }
          } catch (ae) {
            if (ae && D && typeof ae.stack == "string")
              return [ae.stack, D.stack];
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
                  var $ = `
` + _[l].replace(" at new ", " at ");
                  return e.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", e.displayName)), $;
                }
              while (1 <= l && 0 <= u);
            break;
          }
      }
    } finally {
      Ae = !1, Error.prepareStackTrace = r;
    }
    return (r = e ? e.displayName || e.name : "") ? ve(r) : "";
  }
  function Qe(e, n) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ve(e.type);
      case 16:
        return ve("Lazy");
      case 13:
        return e.child !== n && n !== null ? ve("Suspense Fallback") : ve("Suspense");
      case 19:
        return ve("SuspenseList");
      case 0:
      case 15:
        return Ue(e.type, !1);
      case 11:
        return Ue(e.type.render, !1);
      case 1:
        return Ue(e.type, !0);
      case 31:
        return ve("Activity");
      case 30:
        return ve("ViewTransition");
      default:
        return "";
    }
  }
  function pt(e) {
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
  var wt = Object.prototype.hasOwnProperty, _t = t.unstable_scheduleCallback, Zt = t.unstable_cancelCallback, Pn = t.unstable_shouldYield, Er = t.unstable_requestPaint, Ot = t.unstable_now, qt = t.unstable_getCurrentPriorityLevel, Un = t.unstable_ImmediatePriority, cn = t.unstable_UserBlockingPriority, Vi = t.unstable_NormalPriority, sa = t.unstable_LowPriority, q = t.unstable_IdlePriority, de = t.log, we = t.unstable_setDisableYieldValue, ze = null, lt = null;
  function jt(e) {
    if (typeof de == "function" && we(e), lt && typeof lt.setStrictMode == "function")
      try {
        lt.setStrictMode(ze, e);
      } catch {
      }
  }
  var ht = Math.clz32 ? Math.clz32 : Pe, ua = Math.log, Du = Math.LN2;
  function Pe(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (ua(e) / Du | 0) | 0;
  }
  var Dt = 256, $t = 262144, Yi = 4194304;
  function Cr(e) {
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
  function Eo(e, n, r) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var u = 0, d = e.suspendedLanes, y = e.pingedLanes;
    e = e.warmLanes;
    var k = l & 134217727;
    return k !== 0 ? (l = k & ~d, l !== 0 ? u = Cr(l) : (y &= k, y !== 0 ? u = Cr(y) : r || (r = k & ~e, r !== 0 && (u = Cr(r))))) : (k = l & ~d, k !== 0 ? u = Cr(k) : y !== 0 ? u = Cr(y) : r || (r = l & ~e, r !== 0 && (u = Cr(r)))), u === 0 ? 0 : n !== 0 && n !== u && (n & d) === 0 && (d = u & -u, r = n & -n, d >= r || d === 32 && (r & 4194048) !== 0) ? n : u;
  }
  function cl(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function Pp(e, n) {
    (n & 8) !== 0 && (n |= n & 32);
    var r = e.entangledLanes;
    if (r !== 0)
      for (e = e.entanglements, r &= n; 0 < r; ) {
        var l = 31 - ht(r), u = 1 << l;
        n |= e[l], r &= ~u;
      }
    return n;
  }
  function gw(e, n) {
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
  function Kp() {
    var e = Yi;
    return Yi <<= 1, (Yi & 62914560) === 0 && (Yi = 4194304), e;
  }
  function Mu(e) {
    for (var n = [], r = 0; 31 > r; r++) n.push(e);
    return n;
  }
  function fl(e, n) {
    e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function bw(e, n, r, l, u, d) {
    var y = e.pendingLanes;
    e.pendingLanes = r, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= r, e.entangledLanes &= r, e.errorRecoveryDisabledLanes &= r, e.shellSuspendCounter = 0;
    var k = e.entanglements, _ = e.expirationTimes, R = e.hiddenUpdates;
    for (r = y & ~r; 0 < r; ) {
      var $ = 31 - ht(r), X = 1 << $;
      k[$] = 0, _[$] = -1;
      var D = R[$];
      if (D !== null)
        for (R[$] = null, $ = 0; $ < D.length; $++) {
          var H = D[$];
          H !== null && (H.lane &= -536870913);
        }
      r &= ~X;
    }
    l !== 0 && Jp(e, l, 0), d !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= d & ~(y & ~n));
  }
  function Jp(e, n, r) {
    e.pendingLanes |= n, e.suspendedLanes &= ~n;
    var l = 31 - ht(n);
    e.entangledLanes |= n, e.entanglements[l] = e.entanglements[l] | 1073741824 | r & 261930;
  }
  function Wp(e, n) {
    var r = e.entangledLanes |= n;
    for (e = e.entanglements; r; ) {
      var l = 31 - ht(r), u = 1 << l;
      u & n | e[l] & n && (e[l] |= n), r &= ~u;
    }
  }
  function eh(e, n) {
    var r = n & -n;
    return r = (r & 42) !== 0 ? 1 : Ru(r), (r & (e.suspendedLanes | n)) !== 0 ? 0 : r;
  }
  function Ru(e) {
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
  function Uu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function th() {
    var e = je.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : sx(e.type));
  }
  function nh(e, n) {
    var r = je.p;
    try {
      return je.p = e, n();
    } finally {
      je.p = r;
    }
  }
  var _i = Math.random().toString(36).slice(2), Vt = "__reactFiber$" + _i, fn = "__reactProps$" + _i, ca = "__reactContainer$" + _i, ih = "__reactEvents$" + _i, xw = "__reactListeners$" + _i, yw = "__reactHandles$" + _i, rh = "__reactResources$" + _i, dl = "__reactMarker$" + _i, Co = "__reactLoad$" + _i;
  function To(e) {
    delete e[Vt], delete e[fn], delete e[xw], delete e[yw];
  }
  function Tr(e) {
    var n;
    if (n = e[Vt]) return n;
    for (var r = e.parentNode; r; ) {
      if (n = r[ca] || r[Vt]) {
        if (r = n.alternate, n.child !== null || r !== null && r.child !== null)
          for (e = qb(e); e !== null; ) {
            if (r = e[Vt]) return r;
            e = qb(e);
          }
        return n;
      }
      e = r, r = e.parentNode;
    }
    return null;
  }
  function fa(e) {
    if (e = e[Vt] || e[ca]) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 31 || n === 26 || n === 27 || n === 3)
        return e;
    }
    return null;
  }
  function pl(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(o(33));
  }
  function da(e) {
    var n = e[rh];
    return n || (n = e[rh] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Ut(e) {
    e[dl] = !0;
  }
  function ah(e) {
    e[Co] = void 0;
  }
  var lh = /* @__PURE__ */ new Set(), oh = {};
  function Nr(e, n) {
    pa(e, n), pa(e + "Capture", n);
  }
  function pa(e, n) {
    for (oh[e] = n, e = 0; e < n.length; e++)
      lh.add(n[e]);
  }
  var vw = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), sh = {}, uh = {};
  function ww(e) {
    return wt.call(uh, e) ? !0 : wt.call(sh, e) ? !1 : vw.test(e) ? uh[e] = !0 : (sh[e] = !0, !1);
  }
  var Ye = !1;
  function ch() {
    var e = Ye;
    return Ye = !1, e;
  }
  function No(e, n, r) {
    if (ww(n))
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
  function Ao(e, n, r) {
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
  function ji(e, n, r, l) {
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
  function wn(e) {
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
  function fh(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function kw(e, n, r) {
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
  function Lu(e) {
    if (!e._valueTracker) {
      var n = fh(e) ? "checked" : "value";
      e._valueTracker = kw(
        e,
        n,
        "" + e[n]
      );
    }
  }
  function dh(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var r = n.getValue(), l = "";
    return e && (l = fh(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== r ? (n.setValue(e), !0) : !1;
  }
  var Sw = /[\n"\\]/g;
  function Ln(e) {
    return e.replace(
      Sw,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Bu(e, n, r, l, u, d, y, k) {
    e.name = "", y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" ? e.type = y : e.removeAttribute("type"), n != null ? y === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + wn(n)) : e.value !== "" + wn(n) && (e.value = "" + wn(n)) : y !== "submit" && y !== "reset" || e.removeAttribute("value"), n != null ? y === "number" && e.value == n ? Iu(e, wn(e.value)) : Iu(e, wn(n)) : r != null ? Iu(e, wn(r)) : l != null && e.removeAttribute("value"), u == null && d != null && (e.defaultChecked = !!d), u != null && (e.checked = u && typeof u != "function" && typeof u != "symbol"), k != null && typeof k != "function" && typeof k != "symbol" && typeof k != "boolean" ? e.name = "" + wn(k) : e.removeAttribute("name");
  }
  function ph(e, n, r, l, u, d, y, k) {
    if (d != null && typeof d != "function" && typeof d != "symbol" && typeof d != "boolean" && (e.type = d), n != null || r != null) {
      if (!(d !== "submit" && d !== "reset" || n != null)) {
        Lu(e);
        return;
      }
      r = r != null ? "" + wn(r) : "", n = n != null ? "" + wn(n) : r, k || n === e.value || (e.value = n), e.defaultValue = n;
    }
    l = l ?? u, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = k ? e.checked : !!l, e.defaultChecked = !!l, y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (e.name = y), Lu(e);
  }
  function Iu(e, n) {
    e.defaultValue !== "" + n && (e.defaultValue = "" + n);
  }
  function ha(e, n, r, l) {
    if (e = e.options, n) {
      n = {};
      for (var u = 0; u < r.length; u++)
        n["$" + r[u]] = !0;
      for (r = 0; r < e.length; r++)
        u = n.hasOwnProperty("$" + e[r].value), e[r].selected !== u && (e[r].selected = u), u && l && (e[r].defaultSelected = !0);
    } else {
      for (r = "" + wn(r), n = null, u = 0; u < e.length; u++) {
        if (e[u].value === r) {
          e[u].selected = !0, l && (e[u].defaultSelected = !0);
          return;
        }
        n !== null || e[u].disabled || (n = e[u]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function hh(e, n, r) {
    if (n != null && (n = "" + wn(n), n !== e.value && (e.value = n), r == null)) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = r != null ? "" + wn(r) : "";
  }
  function mh(e, n, r, l) {
    if (n == null) {
      if (l != null) {
        if (r != null) throw Error(o(92));
        if (Te(l)) {
          if (1 < l.length) throw Error(o(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), n = r;
    }
    r = wn(n), e.defaultValue = r, l = e.textContent, l === r && l !== "" && l !== null && (e.value = l), Lu(e);
  }
  function ma(e, n) {
    if (n) {
      var r = e.firstChild;
      if (r && r === e.lastChild && r.nodeType === 3) {
        r.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var zw = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function gh(e, n, r) {
    var l = n.indexOf("--") === 0;
    r == null || typeof r == "boolean" || r === "" ? l ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : l ? e.setProperty(n, r) : typeof r != "number" || r === 0 || zw.has(n) ? n === "float" ? e.cssFloat = r : e[n] = ("" + r).trim() : e[n] = r + "px";
  }
  function bh(e, n, r) {
    if (n != null && typeof n != "object")
      throw Error(o(62));
    if (e = e.style, r != null) {
      for (var l in r)
        !r.hasOwnProperty(l) || n != null && n.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "", Ye = !0);
      for (var u in n)
        l = n[u], n.hasOwnProperty(u) && r[u] !== l && (gh(e, u, l), Ye = !0);
    } else
      for (var d in n)
        n.hasOwnProperty(d) && gh(e, d, n[d]);
  }
  function Hu(e) {
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
  var _w = /* @__PURE__ */ new Map([
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
  ]), jw = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Oo(e) {
    return jw.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function li() {
  }
  var Zu = null;
  function qu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var ga = null, ba = null;
  function xh(e) {
    var n = fa(e);
    if (n && (e = n.stateNode)) {
      var r = e[fn] || null;
      e: switch (e = n.stateNode, n.type) {
        case "input":
          if (Bu(
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
              'input[name="' + Ln(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < r.length; n++) {
              var l = r[n];
              if (l !== e && l.form === e.form) {
                var u = l[fn] || null;
                if (!u) throw Error(o(90));
                Bu(
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
              l = r[n], l.form === e.form && dh(l);
          }
          break e;
        case "textarea":
          hh(e, r.value, r.defaultValue);
          break e;
        case "select":
          n = r.value, n != null && ha(e, !!r.multiple, n, !1);
      }
    }
  }
  var $u = !1;
  function yh(e, n, r) {
    if ($u) return e(n, r);
    $u = !0;
    try {
      var l = e(n);
      return l;
    } finally {
      if ($u = !1, (ga !== null || ba !== null) && (Os(), ga && (n = ga, e = ba, ba = ga = null, xh(n), e)))
        for (n = 0; n < e.length; n++) xh(e[n]);
    }
  }
  function hl(e, n) {
    var r = e.stateNode;
    if (r === null) return null;
    var l = r[fn] || null;
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
  var Ei = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Vu = !1;
  if (Ei)
    try {
      var ml = {};
      Object.defineProperty(ml, "passive", {
        get: function() {
          Vu = !0;
        }
      }), window.addEventListener("test", ml, ml), window.removeEventListener("test", ml, ml);
    } catch {
      Vu = !1;
    }
  var Gi = null, Yu = null, Do = null;
  function vh() {
    if (Do) return Do;
    var e, n = Yu, r = n.length, l, u = "value" in Gi ? Gi.value : Gi.textContent, d = u.length;
    for (e = 0; e < r && n[e] === u[e]; e++) ;
    var y = r - e;
    for (l = 1; l <= y && n[r - l] === u[d - l]; l++) ;
    return Do = u.slice(e, 1 < l ? 1 - l : void 0);
  }
  function Mo(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ro() {
    return !0;
  }
  function wh() {
    return !1;
  }
  function nn(e) {
    function n(r, l, u, d, y) {
      this._reactName = r, this._targetInst = u, this.type = l, this.nativeEvent = d, this.target = y, this.currentTarget = null;
      for (var k in e)
        e.hasOwnProperty(k) && (r = e[k], this[k] = r ? r(d) : d[k]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? Ro : wh, this.isPropagationStopped = wh, this;
    }
    return F(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r && (r.preventDefault ? r.preventDefault() : typeof r.returnValue != "unknown" && (r.returnValue = !1), this.isDefaultPrevented = Ro);
      },
      stopPropagation: function() {
        var r = this.nativeEvent;
        r && (r.stopPropagation ? r.stopPropagation() : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0), this.isPropagationStopped = Ro);
      },
      persist: function() {
      },
      isPersistent: Ro
    }), n;
  }
  var Fi = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Uo = nn(Fi), gl = F({}, Fi, { view: 0, detail: 0 }), Ew = nn(gl), Gu, Fu, bl, Lo = F({}, gl, {
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
    getModifierState: Qu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== bl && (bl && e.type === "mousemove" ? (Gu = e.screenX - bl.screenX, Fu = e.screenY - bl.screenY) : Fu = Gu = 0, bl = e), Gu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Fu;
    }
  }), kh = nn(Lo), Cw = F({}, Lo, { dataTransfer: 0 }), Tw = nn(Cw), Nw = F({}, gl, { relatedTarget: 0 }), Xu = nn(Nw), Aw = F({}, Fi, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ow = nn(Aw), Dw = F({}, Fi, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Mw = nn(Dw), Rw = F({}, Fi, { data: 0 }), Sh = nn(Rw), Uw = {
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
  }, Lw = {
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
  }, Bw = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Iw(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = Bw[e]) ? !!n[e] : !1;
  }
  function Qu() {
    return Iw;
  }
  var Hw = F({}, gl, {
    key: function(e) {
      if (e.key) {
        var n = Uw[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress" ? (e = Mo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Lw[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Qu,
    charCode: function(e) {
      return e.type === "keypress" ? Mo(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Mo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Zw = nn(Hw), qw = F({}, Lo, {
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
  }), zh = nn(qw), $w = F({}, Fi, { submitter: 0 }), Vw = nn($w), Yw = F({}, gl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Qu
  }), Gw = nn(Yw), Fw = F({}, Fi, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Xw = nn(Fw), Qw = F({}, Lo, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Pw = nn(Qw), Kw = F({}, Fi, {
    newState: 0,
    oldState: 0,
    source: 0
  }), Jw = nn(Kw), Ww = [9, 13, 27, 32], Pu = Ei && "CompositionEvent" in window, xl = null;
  Ei && "documentMode" in document && (xl = document.documentMode);
  var e2 = Ei && "TextEvent" in window && !xl, _h = Ei && (!Pu || xl && 8 < xl && 11 >= xl), jh = " ", Eh = !1;
  function Ch(e, n) {
    switch (e) {
      case "keyup":
        return Ww.indexOf(n.keyCode) !== -1;
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
  function Th(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var xa = !1;
  function t2(e, n) {
    switch (e) {
      case "compositionend":
        return Th(n);
      case "keypress":
        return n.which !== 32 ? null : (Eh = !0, jh);
      case "textInput":
        return e = n.data, e === jh && Eh ? null : e;
      default:
        return null;
    }
  }
  function n2(e, n) {
    if (xa)
      return e === "compositionend" || !Pu && Ch(e, n) ? (e = vh(), Do = Yu = Gi = null, xa = !1, e) : null;
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
        return _h && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var i2 = {
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
  function Nh(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!i2[e.type] : n === "textarea";
  }
  function Ah(e, n, r, l) {
    ga ? ba ? ba.push(l) : ba = [l] : ga = l, n = Bs(n, "onChange"), 0 < n.length && (r = new Uo(
      "onChange",
      "change",
      null,
      r,
      l
    ), e.push({ event: r, listeners: n }));
  }
  var yl = null, vl = null;
  function r2(e) {
    xb(e, 0);
  }
  function Bo(e) {
    var n = pl(e);
    if (dh(n)) return e;
  }
  function Oh(e, n) {
    if (e === "change") return n;
  }
  var Dh = !1;
  if (Ei) {
    var Ku;
    if (Ei) {
      var Ju = "oninput" in document;
      if (!Ju) {
        var Mh = document.createElement("div");
        Mh.setAttribute("oninput", "return;"), Ju = typeof Mh.oninput == "function";
      }
      Ku = Ju;
    } else Ku = !1;
    Dh = Ku && (!document.documentMode || 9 < document.documentMode);
  }
  function Rh() {
    yl && (yl.detachEvent("onpropertychange", Uh), vl = yl = null);
  }
  function Uh(e) {
    if (e.propertyName === "value" && Bo(vl)) {
      var n = [];
      Ah(
        n,
        vl,
        e,
        qu(e)
      ), yh(r2, n);
    }
  }
  function a2(e, n, r) {
    e === "focusin" ? (Rh(), yl = n, vl = r, yl.attachEvent("onpropertychange", Uh)) : e === "focusout" && Rh();
  }
  function l2(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Bo(vl);
  }
  function o2(e, n) {
    if (e === "click") return Bo(n);
  }
  function s2(e, n) {
    if (e === "input" || e === "change")
      return Bo(n);
  }
  function u2(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var kn = typeof Object.is == "function" ? Object.is : u2;
  function wl(e, n) {
    if (kn(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var r = Object.keys(e), l = Object.keys(n);
    if (r.length !== l.length) return !1;
    for (l = 0; l < r.length; l++) {
      var u = r[l];
      if (!wt.call(n, u) || !kn(e[u], n[u]))
        return !1;
    }
    return !0;
  }
  function Wu(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Lh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Bh(e, n) {
    var r = Lh(e);
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
      r = Lh(r);
    }
  }
  function Ih(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Ih(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Hh(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var n = Wu(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var r = typeof n.contentWindow.location.href == "string";
      } catch {
        r = !1;
      }
      if (r) e = n.contentWindow;
      else break;
      n = Wu(e.document);
    }
    return n;
  }
  function ec(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  var c2 = Ei && "documentMode" in document && 11 >= document.documentMode, ya = null, tc = null, kl = null, nc = !1;
  function Zh(e, n, r) {
    var l = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
    nc || ya == null || ya !== Wu(l) || (l = ya, "selectionStart" in l && ec(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), kl && wl(kl, l) || (kl = l, l = Bs(tc, "onSelect"), 0 < l.length && (n = new Uo(
      "onSelect",
      "select",
      null,
      n,
      r
    ), e.push({ event: n, listeners: l }), n.target = ya)));
  }
  function Ar(e, n) {
    var r = {};
    return r[e.toLowerCase()] = n.toLowerCase(), r["Webkit" + e] = "webkit" + n, r["Moz" + e] = "moz" + n, r;
  }
  var va = {
    animationend: Ar("Animation", "AnimationEnd"),
    animationiteration: Ar("Animation", "AnimationIteration"),
    animationstart: Ar("Animation", "AnimationStart"),
    transitionrun: Ar("Transition", "TransitionRun"),
    transitionstart: Ar("Transition", "TransitionStart"),
    transitioncancel: Ar("Transition", "TransitionCancel"),
    transitionend: Ar("Transition", "TransitionEnd")
  }, ic = {}, qh = {};
  Ei && (qh = document.createElement("div").style, "AnimationEvent" in window || (delete va.animationend.animation, delete va.animationiteration.animation, delete va.animationstart.animation), "TransitionEvent" in window || delete va.transitionend.transition);
  function Or(e) {
    if (ic[e]) return ic[e];
    if (!va[e]) return e;
    var n = va[e], r;
    for (r in n)
      if (n.hasOwnProperty(r) && r in qh)
        return ic[e] = n[r];
    return e;
  }
  var $h = Or("animationend"), Vh = Or("animationiteration"), Yh = Or("animationstart"), f2 = Or("transitionrun"), d2 = Or("transitionstart"), p2 = Or("transitioncancel"), Gh = Or("transitionend"), Fh = /* @__PURE__ */ new Map(), rc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  rc.push("scrollEnd");
  function Kn(e, n) {
    Fh.set(e, n), Nr(n, [e]);
  }
  var h2 = 0;
  function Ci(e, n) {
    if (e.name != null && e.name !== "auto") return e.name;
    if (n.autoName !== null) return n.autoName;
    e = ti.identifierPrefix;
    var r = h2++;
    return e = "_" + e + "t_" + r.toString(32) + "_", n.autoName = e;
  }
  function Xh(e) {
    if (e == null || typeof e == "string")
      return e;
    var n = null, r = Ha;
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
  function Ti(e, n) {
    return e = Xh(e), n = Xh(n), n == null ? e === "auto" ? null : e : n === "auto" ? null : n;
  }
  var Io = typeof reportError == "function" ? reportError : function(e) {
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
  }, Bn = [], wa = 0, ac = 0;
  function Ho() {
    for (var e = wa, n = ac = wa = 0; n < e; ) {
      var r = Bn[n];
      Bn[n++] = null;
      var l = Bn[n];
      Bn[n++] = null;
      var u = Bn[n];
      Bn[n++] = null;
      var d = Bn[n];
      if (Bn[n++] = null, l !== null && u !== null) {
        var y = l.pending;
        y === null ? u.next = u : (u.next = y.next, y.next = u), l.pending = u;
      }
      d !== 0 && Qh(r, u, d);
    }
  }
  function Zo(e, n, r, l) {
    Bn[wa++] = e, Bn[wa++] = n, Bn[wa++] = r, Bn[wa++] = l, ac |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function lc(e, n, r, l) {
    return Zo(e, n, r, l), qo(e);
  }
  function Dr(e, n) {
    return Zo(e, null, null, n), qo(e);
  }
  function Qh(e, n, r) {
    e.lanes |= r;
    var l = e.alternate;
    l !== null && (l.lanes |= r);
    for (var u = !1, d = e.return; d !== null; )
      d.childLanes |= r, l = d.alternate, l !== null && (l.childLanes |= r), d.tag === 22 && (e = d.stateNode, e === null || e._visibility & 1 || (u = !0)), e = d, d = d.return;
    return e.tag === 3 ? (d = e.stateNode, u && n !== null && (u = 31 - ht(r), e = d.hiddenUpdates, l = e[u], l === null ? e[u] = [n] : l.push(n), n.lane = r | 536870912), d) : null;
  }
  function qo(e) {
    if (50 < Vl)
      throw Vl = 0, As = null, Error(o(185));
    for (var n = e.return; n !== null; )
      e = n, n = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ka = {};
  function m2(e, n, r, l) {
    this.tag = e, this.key = r, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function dn(e, n, r, l) {
    return new m2(e, n, r, l);
  }
  function oc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Ni(e, n) {
    var r = e.alternate;
    return r === null ? (r = dn(
      e.tag,
      n,
      e.key,
      e.mode
    ), r.elementType = e.elementType, r.type = e.type, r.stateNode = e.stateNode, r.alternate = e, e.alternate = r) : (r.pendingProps = n, r.type = e.type, r.flags = 0, r.subtreeFlags = 0, r.deletions = null), r.flags = e.flags & 1206910976, r.childLanes = e.childLanes, r.lanes = e.lanes, r.child = e.child, r.memoizedProps = e.memoizedProps, r.memoizedState = e.memoizedState, r.updateQueue = e.updateQueue, n = e.dependencies, r.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, r.sibling = e.sibling, r.index = e.index, r.ref = e.ref, r.refCleanup = e.refCleanup, r;
  }
  function Ph(e, n) {
    e.flags &= 1206910978;
    var r = e.alternate;
    return r === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = r.childLanes, e.lanes = r.lanes, e.child = r.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = r.memoizedProps, e.memoizedState = r.memoizedState, e.updateQueue = r.updateQueue, e.type = r.type, n = r.dependencies, e.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), e;
  }
  function $o(e, n, r, l, u, d) {
    var y = 0;
    if (l = e, typeof l == "function") oc(l) && (y = 1);
    else if (typeof l == "string")
      y = $k(
        e,
        r,
        un.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (l) {
        case Ve:
          return e = dn(31, r, n, u), e.elementType = Ve, e.lanes = d, e;
        case ee:
          return Mr(r.children, u, d, n);
        case se:
          y = 8, u |= 24;
          break;
        case Ne:
          return e = dn(12, r, n, u | 2), e.elementType = Ne, e.lanes = d, e;
        case ue:
          return e = dn(13, r, n, u), e.elementType = ue, e.lanes = d, e;
        case pe:
          return e = dn(19, r, n, u), e.elementType = pe, e.lanes = d, e;
        case dt:
        case T:
          return e = u | 32, e = dn(30, r, n, e), e.elementType = T, e.lanes = d, e.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, e;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case ne:
                y = 10;
                break e;
              case ce:
                y = 9;
                break e;
              case W:
                y = 11;
                break e;
              case _e:
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
    return n = dn(y, r, n, u), n.elementType = e, n.type = l, n.lanes = d, n;
  }
  function Mr(e, n, r, l) {
    return e = dn(7, e, l, n), e.lanes = r, e;
  }
  function sc(e, n, r) {
    return e = dn(6, e, null, n), e.lanes = r, e;
  }
  function Kh(e) {
    var n = dn(18, null, null, 0);
    return n.stateNode = e, n;
  }
  function uc(e, n, r) {
    return n = dn(
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
  var Jh = /* @__PURE__ */ new WeakMap();
  function In(e, n) {
    if (typeof e == "object" && e !== null) {
      var r = Jh.get(e);
      return r !== void 0 ? r : (n = {
        value: e,
        source: n,
        stack: pt(n)
      }, Jh.set(e, n), n);
    }
    return {
      value: e,
      source: n,
      stack: pt(n)
    };
  }
  var Sa = [], za = 0, Vo = null, Sl = 0, Hn = [], Zn = 0, Xi = null, oi = 1, si = "";
  function Ai(e, n) {
    Sa[za++] = Sl, Sa[za++] = Vo, Vo = e, Sl = n;
  }
  function Wh(e, n, r) {
    Hn[Zn++] = oi, Hn[Zn++] = si, Hn[Zn++] = Xi, Xi = e;
    var l = oi;
    e = si;
    var u = 32 - ht(l) - 1;
    l &= ~(1 << u), r += 1;
    var d = 32 - ht(n) + u;
    if (30 < d) {
      var y = u - u % 5;
      d = (l & (1 << y) - 1).toString(32), l >>= y, u -= y, oi = 1 << 32 - ht(n) + u | r << u | l, si = d + e;
    } else
      oi = 1 << d | r << u | l, si = e;
  }
  function Yo(e) {
    e.return !== null && (Ai(e, 1), Wh(e, 1, 0));
  }
  function cc(e) {
    for (; e === Vo; )
      Vo = Sa[--za], Sa[za] = null, Sl = Sa[--za], Sa[za] = null;
    for (; e === Xi; )
      Xi = Hn[--Zn], Hn[Zn] = null, si = Hn[--Zn], Hn[Zn] = null, oi = Hn[--Zn], Hn[Zn] = null;
  }
  function em(e, n) {
    Hn[Zn++] = oi, Hn[Zn++] = si, Hn[Zn++] = Xi, oi = n.id, si = n.overflow, Xi = e;
  }
  var Lt = null, ot = null, Le = !1, Qi = null, qn = !1, fc = Error(o(519));
  function Pi(e) {
    var n = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw zl(In(n, e)), fc;
  }
  function tm(e) {
    var n = e.stateNode, r = e.type, l = e.memoizedProps;
    switch (n[Vt] = e, n[fn] = l, r) {
      case "dialog":
        He("cancel", n), He("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        He("load", n);
        break;
      case "video":
      case "audio":
        for (r = 0; r < Gl.length; r++)
          He(Gl[r], n);
        break;
      case "source":
        He("error", n);
        break;
      case "img":
      case "image":
      case "link":
        He("error", n), He("load", n);
        break;
      case "details":
        He("toggle", n);
        break;
      case "input":
        He("invalid", n), ph(
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
        He("invalid", n);
        break;
      case "textarea":
        He("invalid", n), mh(n, l.value, l.defaultValue, l.children);
    }
    r = l.children, typeof r != "string" && typeof r != "number" && typeof r != "bigint" || n.textContent === "" + r || l.suppressHydrationWarning === !0 || kb(n.textContent, r) ? (l.popover != null && (He("beforetoggle", n), He("toggle", n)), l.onScroll != null && He("scroll", n), l.onScrollEnd != null && He("scrollend", n), l.onClick != null && (n.onclick = li), n = !0) : n = !1, n || Pi(e, !0);
  }
  function Go(e) {
    for (Lt = e.return; Lt; )
      switch (Lt.tag) {
        case 5:
        case 31:
        case 13:
          qn = !1;
          return;
        case 27:
        case 3:
          qn = !0;
          return;
        default:
          Lt = Lt.return;
      }
  }
  function _a(e) {
    if (e !== Lt) return !1;
    if (!Le) return Go(e), Le = !0, !1;
    var n = e.tag, r;
    if ((r = n !== 3 && n !== 27) && ((r = n === 5) && (r = e.type, r = !(r !== "form" && r !== "button") || qf(e.type, e.memoizedProps)), r = !r), r && ot && Pi(e), Go(e), n === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      ot = Zb(e);
    } else if (n === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      ot = Zb(e);
    } else
      n === 27 ? (n = ot, dr(e.type) ? (e = Kf, Kf = null, ot = e) : ot = n) : ot = Lt ? Vn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Rr() {
    ot = Lt = null, Le = !1;
  }
  function dc() {
    var e = Qi;
    return e !== null && (mn === null ? mn = e : mn.push.apply(
      mn,
      e
    ), Qi = null), e;
  }
  function zl(e) {
    Qi === null ? Qi = [e] : Qi.push(e);
  }
  var pc = bt(null), Ur = null, Oi = null;
  function Ki(e, n, r) {
    Fe(pc, n._currentValue), n._currentValue = r;
  }
  function Di(e) {
    e._currentValue = pc.current, ut(pc);
  }
  function Fo(e, n, r) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, l !== null && (l.childLanes |= n)) : l !== null && (l.childLanes & n) !== n && (l.childLanes |= n), e === r) break;
      e = e.return;
    }
  }
  function hc(e, n, r, l) {
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
              d.lanes |= r, k = d.alternate, k !== null && (k.lanes |= r), Fo(
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
        y.lanes |= r, d = y.alternate, d !== null && (d.lanes |= r), Fo(y, r, e), y = null;
      } else
        u.tag === 13 && u.memoizedState !== null && u.memoizedState.dehydrated === null ? (u.lanes |= r, y = u.alternate, y !== null && (y.lanes |= r), Fo(
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
  function Lr(e, n, r, l) {
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
          kn(u.pendingProps.value, y.value) || (e !== null ? e.push(k) : e = [k]);
        }
      } else if (u === Dn.current) {
        if (y = u.alternate, y === null) throw Error(o(387));
        y.memoizedState.memoizedState !== u.memoizedState.memoizedState && (e !== null ? e.push(Pa) : e = [Pa]);
      }
      u = u.return;
    }
    return e !== null && hc(
      n,
      e,
      r,
      l
    ), n.flags |= 262144, e !== null;
  }
  function Xo(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!kn(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Br(e) {
    Ur = e, Oi = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Yt(e) {
    return nm(Ur, e);
  }
  function Qo(e, n) {
    return Ur === null && Br(e), nm(e, n);
  }
  function nm(e, n) {
    var r = n._currentValue;
    if (n = { context: n, memoizedValue: r, next: null }, Oi === null) {
      if (e === null) throw Error(o(308));
      Oi = n, e.dependencies = { lanes: 0, firstContext: n }, e.flags |= 524288;
    } else Oi = Oi.next = n;
    return r;
  }
  var g2 = typeof AbortController < "u" ? AbortController : function() {
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
  }, b2 = t.unstable_scheduleCallback, x2 = t.unstable_NormalPriority, Et = {
    $$typeof: ne,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function mc() {
    return {
      controller: new g2(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function _l(e) {
    e.refCount--, e.refCount === 0 && b2(x2, function() {
      e.controller.abort();
    });
  }
  function im(e, n) {
    if ((e.pendingLanes & 4194048) !== 0) {
      var r = e.transitionTypes;
      for (r === null && (r = e.transitionTypes = []), e = 0; e < n.length; e++) {
        var l = n[e];
        r.indexOf(l) === -1 && r.push(l);
      }
    }
  }
  var jl = null;
  function y2(e) {
    var n = e.transitionTypes;
    return e.transitionTypes = null, n;
  }
  var El = null, gc = 0, Ir = 0, ja = null;
  function v2(e, n) {
    if (El === null) {
      var r = El = [];
      gc = 0, Ir = Df(), ja = {
        status: "pending",
        value: void 0,
        then: function(l) {
          r.push(l);
        }
      };
    }
    return gc++, n.then(rm, rm), n;
  }
  function rm() {
    if (--gc === 0 && (jl = null, El !== null)) {
      ja !== null && (ja.status = "fulfilled");
      var e = El;
      El = null, Ir = 0, ja = null;
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function w2(e, n) {
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
  var am = me.S;
  me.S = function(e, n) {
    if (Kg = Ot(), typeof n == "object" && n !== null && typeof n.then == "function" && v2(e, n), jl !== null)
      for (var r = Va; r !== null; )
        im(r, jl), r = r.next;
    if (r = e.types, r !== null) {
      for (var l = Va; l !== null; )
        im(l, r), l = l.next;
      if (Ir !== 0) {
        l = jl, l === null && (l = jl = []);
        for (var u = 0; u < r.length; u++) {
          var d = r[u];
          l.indexOf(d) === -1 && l.push(d);
        }
      }
    }
    am !== null && am(e, n);
  };
  var Hr = bt(null);
  function bc() {
    var e = Hr.current;
    return e !== null ? e : it.pooledCache;
  }
  function Po(e, n) {
    n === null ? Fe(Hr, Hr.current) : Fe(Hr, n.pool);
  }
  function lm() {
    var e = bc();
    return e === null ? null : { parent: Et._currentValue, pool: e };
  }
  var Ea = Error(o(460)), xc = Error(o(474)), Ko = Error(o(542)), Jo = { then: function() {
  } };
  function om(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function sm(e, n, r) {
    switch (r = e[r], r === void 0 ? e.push(n) : r !== n && (n.then(li, li), n = r), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw e = n.reason, cm(e), e === void 0 && !("reason" in n) ? Error(o(600)) : e;
      default:
        if (typeof n.status == "string") n.then(li, li);
        else {
          if (e = it, e !== null && 100 < e.shellSuspendCounter)
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
            throw e = n.reason, cm(e), e;
        }
        throw qr = n, Ea;
    }
  }
  function Zr(e) {
    try {
      var n = e._init;
      return n(e._payload);
    } catch (r) {
      throw r !== null && typeof r == "object" && typeof r.then == "function" ? (qr = r, Ea) : r;
    }
  }
  var qr = null;
  function um() {
    if (qr === null) throw Error(o(459));
    var e = qr;
    return qr = null, e;
  }
  function cm(e) {
    if (e === Ea || e === Ko)
      throw Error(o(483));
  }
  var Ca = null, Cl = 0;
  function Wo(e) {
    var n = Cl;
    return Cl += 1, Ca === null && (Ca = []), sm(Ca, e, n);
  }
  function Ji(e, n) {
    n = n.props.ref, e.ref = n !== void 0 ? n : null;
  }
  function es(e, n) {
    throw n.$$typeof === le ? Error(o(525)) : (e = Object.prototype.toString.call(n), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e
      )
    ));
  }
  function fm(e) {
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
      return M = Ni(M, A), M.index = 0, M.sibling = null, M;
    }
    function d(M, A, B) {
      return M.index = B, e ? (B = M.alternate, B !== null ? (B = B.index, B < A ? (M.flags |= 2, A) : B) : (M.flags |= 134217730, A)) : (M.flags |= 1048576, A);
    }
    function y(M) {
      return e && M.alternate === null && (M.flags |= 134217730), M;
    }
    function k(M, A, B, G) {
      return A === null || A.tag !== 6 ? (A = sc(B, M.mode, G), A.return = M, A) : (A = u(A, B), A.return = M, A);
    }
    function _(M, A, B, G) {
      var fe = B.type;
      return fe === ee ? (M = $(
        M,
        A,
        B.props.children,
        G,
        B.key
      ), Ji(M, B), M) : A !== null && (A.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === z && Zr(fe) === A.type) ? (A = u(A, B.props), Ji(A, B), A.return = M, A) : (A = $o(
        B.type,
        B.key,
        B.props,
        null,
        M.mode,
        G
      ), Ji(A, B), A.return = M, A);
    }
    function R(M, A, B, G) {
      return A === null || A.tag !== 4 || A.stateNode.containerInfo !== B.containerInfo || A.stateNode.implementation !== B.implementation ? (A = uc(B, M.mode, G), A.return = M, A) : (A = u(A, B.children || []), A.return = M, A);
    }
    function $(M, A, B, G, fe) {
      return A === null || A.tag !== 7 ? (A = Mr(
        B,
        M.mode,
        G,
        fe
      ), A.return = M, A) : (A = u(A, B), A.return = M, A);
    }
    function X(M, A, B) {
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return A = sc(
          "" + A,
          M.mode,
          B
        ), A.return = M, A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case ye:
            return B = $o(
              A.type,
              A.key,
              A.props,
              null,
              M.mode,
              B
            ), Ji(B, A), B.return = M, B;
          case Z:
            return A = uc(
              A,
              M.mode,
              B
            ), A.return = M, A;
          case z:
            return A = Zr(A), X(M, A, B);
        }
        if (Te(A) || re(A))
          return A = Mr(
            A,
            M.mode,
            B,
            null
          ), A.return = M, A;
        if (typeof A.then == "function")
          return X(M, Wo(A), B);
        if (A.$$typeof === ne)
          return X(
            M,
            Qo(M, A),
            B
          );
        es(M, A);
      }
      return null;
    }
    function D(M, A, B, G) {
      var fe = A !== null ? A.key : null;
      if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint")
        return fe !== null ? null : k(M, A, "" + B, G);
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case ye:
            return B.key === fe ? _(M, A, B, G) : null;
          case Z:
            return B.key === fe ? R(M, A, B, G) : null;
          case z:
            return B = Zr(B), D(M, A, B, G);
        }
        if (Te(B) || re(B))
          return fe !== null ? null : $(M, A, B, G, null);
        if (typeof B.then == "function")
          return D(
            M,
            A,
            Wo(B),
            G
          );
        if (B.$$typeof === ne)
          return D(
            M,
            A,
            Qo(M, B),
            G
          );
        es(M, B);
      }
      return null;
    }
    function H(M, A, B, G, fe) {
      if (typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint")
        return M = M.get(B) || null, k(A, M, "" + G, fe);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case ye:
            return M = M.get(
              G.key === null ? B : G.key
            ) || null, _(A, M, G, fe);
          case Z:
            return M = M.get(
              G.key === null ? B : G.key
            ) || null, R(A, M, G, fe);
          case z:
            return G = Zr(G), H(
              M,
              A,
              B,
              G,
              fe
            );
        }
        if (Te(G) || re(G))
          return M = M.get(B) || null, $(A, M, G, fe, null);
        if (typeof G.then == "function")
          return H(
            M,
            A,
            B,
            Wo(G),
            fe
          );
        if (G.$$typeof === ne)
          return H(
            M,
            A,
            B,
            Qo(A, G),
            fe
          );
        es(A, G);
      }
      return null;
    }
    function ae(M, A, B, G) {
      for (var fe = null, qe = null, xe = A, Ce = A = 0, Nt = null; xe !== null && Ce < B.length; Ce++) {
        xe.index > Ce ? (Nt = xe, xe = null) : Nt = xe.sibling;
        var $e = D(
          M,
          xe,
          B[Ce],
          G
        );
        if ($e === null) {
          xe === null && (xe = Nt);
          break;
        }
        e && xe && $e.alternate === null && n(M, xe), A = d($e, A, Ce), qe === null ? fe = $e : qe.sibling = $e, qe = $e, xe = Nt;
      }
      if (Ce === B.length)
        return r(M, xe), Le && Ai(M, Ce), fe;
      if (xe === null) {
        for (; Ce < B.length; Ce++)
          xe = X(M, B[Ce], G), xe !== null && (A = d(
            xe,
            A,
            Ce
          ), qe === null ? fe = xe : qe.sibling = xe, qe = xe);
        return Le && Ai(M, Ce), fe;
      }
      for (xe = l(xe); Ce < B.length; Ce++)
        Nt = H(
          xe,
          M,
          Ce,
          B[Ce],
          G
        ), Nt !== null && (e && ($e = Nt.alternate, $e !== null && xe.delete($e.key === null ? Ce : $e.key)), A = d(
          Nt,
          A,
          Ce
        ), qe === null ? fe = Nt : qe.sibling = Nt, qe = Nt);
      return e && xe.forEach(function(br) {
        return n(M, br);
      }), Le && Ai(M, Ce), fe;
    }
    function ge(M, A, B, G) {
      if (B == null) throw Error(o(151));
      for (var fe = null, qe = null, xe = A, Ce = A = 0, Nt = null, $e = B.next(); xe !== null && !$e.done; Ce++, $e = B.next()) {
        xe.index > Ce ? (Nt = xe, xe = null) : Nt = xe.sibling;
        var br = D(M, xe, $e.value, G);
        if (br === null) {
          xe === null && (xe = Nt);
          break;
        }
        e && xe && br.alternate === null && n(M, xe), A = d(br, A, Ce), qe === null ? fe = br : qe.sibling = br, qe = br, xe = Nt;
      }
      if ($e.done)
        return r(M, xe), Le && Ai(M, Ce), fe;
      if (xe === null) {
        for (; !$e.done; Ce++, $e = B.next())
          $e = X(M, $e.value, G), $e !== null && (A = d($e, A, Ce), qe === null ? fe = $e : qe.sibling = $e, qe = $e);
        return Le && Ai(M, Ce), fe;
      }
      for (xe = l(xe); !$e.done; Ce++, $e = B.next())
        $e = H(xe, M, Ce, $e.value, G), $e !== null && (e && (Nt = $e.alternate, Nt !== null && xe.delete(
          Nt.key === null ? Ce : Nt.key
        )), A = d($e, A, Ce), qe === null ? fe = $e : qe.sibling = $e, qe = $e);
      return e && xe.forEach(function(tS) {
        return n(M, tS);
      }), Le && Ai(M, Ce), fe;
    }
    function Re(M, A, B, G) {
      if (typeof B == "object" && B !== null && B.type === ee && B.key === null && B.props.ref === void 0 && (B = B.props.children), typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case ye:
            e: {
              for (var fe = B.key; A !== null; ) {
                if (A.key === fe) {
                  if (fe = B.type, fe === ee) {
                    if (A.tag === 7) {
                      r(
                        M,
                        A.sibling
                      ), G = u(
                        A,
                        B.props.children
                      ), Ji(G, B), G.return = M, M = G;
                      break e;
                    }
                  } else if (A.elementType === fe || typeof fe == "object" && fe !== null && fe.$$typeof === z && Zr(fe) === A.type) {
                    r(
                      M,
                      A.sibling
                    ), G = u(A, B.props), Ji(G, B), G.return = M, M = G;
                    break e;
                  }
                  r(M, A);
                  break;
                } else n(M, A);
                A = A.sibling;
              }
              B.type === ee ? (G = Mr(
                B.props.children,
                M.mode,
                G,
                B.key
              ), Ji(G, B), G.return = M, M = G) : (G = $o(
                B.type,
                B.key,
                B.props,
                null,
                M.mode,
                G
              ), Ji(G, B), G.return = M, M = G);
            }
            return y(M);
          case Z:
            e: {
              for (fe = B.key; A !== null; ) {
                if (A.key === fe)
                  if (A.tag === 4 && A.stateNode.containerInfo === B.containerInfo && A.stateNode.implementation === B.implementation) {
                    r(
                      M,
                      A.sibling
                    ), G = u(A, B.children || []), G.return = M, M = G;
                    break e;
                  } else {
                    r(M, A);
                    break;
                  }
                else n(M, A);
                A = A.sibling;
              }
              G = uc(B, M.mode, G), G.return = M, M = G;
            }
            return y(M);
          case z:
            return B = Zr(B), Re(
              M,
              A,
              B,
              G
            );
        }
        if (Te(B))
          return ae(
            M,
            A,
            B,
            G
          );
        if (re(B)) {
          if (fe = re(B), typeof fe != "function") throw Error(o(150));
          return B = fe.call(B), ge(
            M,
            A,
            B,
            G
          );
        }
        if (typeof B.then == "function")
          return Re(
            M,
            A,
            Wo(B),
            G
          );
        if (B.$$typeof === ne)
          return Re(
            M,
            A,
            Qo(M, B),
            G
          );
        es(M, B);
      }
      return typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint" ? (B = "" + B, A !== null && A.tag === 6 ? (r(M, A.sibling), G = u(A, B), G.return = M, M = G) : (r(M, A), G = sc(B, M.mode, G), G.return = M, M = G), y(M)) : r(M, A);
    }
    return function(M, A, B, G) {
      try {
        Cl = 0;
        var fe = Re(
          M,
          A,
          B,
          G
        );
        return Ca = null, fe;
      } catch (xe) {
        if (xe === Ea || xe === Ko) throw xe;
        var qe = dn(29, xe, null, M.mode);
        return qe.lanes = G, qe.return = M, qe;
      }
    };
  }
  var $r = fm(!0), dm = fm(!1), Wi = !1;
  function yc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function vc(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function er(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function tr(e, n, r) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Xe & 2) !== 0) {
      var u = l.pending;
      return u === null ? n.next = n : (n.next = u.next, u.next = n), l.pending = n, n = qo(e), Qh(e, null, r), n;
    }
    return Zo(e, l, n, r), qo(e);
  }
  function Tl(e, n, r) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (r & 4194048) !== 0)) {
      var l = n.lanes;
      l &= e.pendingLanes, r |= l, n.lanes = r, Wp(e, r);
    }
  }
  function wc(e, n) {
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
  var kc = !1;
  function Nl() {
    if (kc) {
      var e = ja;
      if (e !== null) throw e;
    }
  }
  function Al(e, n, r, l) {
    kc = !1;
    var u = e.updateQueue;
    Wi = !1;
    var d = u.firstBaseUpdate, y = u.lastBaseUpdate, k = u.shared.pending;
    if (k !== null) {
      u.shared.pending = null;
      var _ = k, R = _.next;
      _.next = null, y === null ? d = R : y.next = R, y = _;
      var $ = e.alternate;
      $ !== null && ($ = $.updateQueue, k = $.lastBaseUpdate, k !== y && (k === null ? $.firstBaseUpdate = R : k.next = R, $.lastBaseUpdate = _));
    }
    if (d !== null) {
      var X = u.baseState;
      y = 0, $ = R = _ = null, k = d;
      do {
        var D = k.lane & -536870913, H = D !== k.lane;
        if (H ? (Ze & D) === D : (l & D) === D) {
          D !== 0 && D === Ir && (kc = !0), $ !== null && ($ = $.next = {
            lane: 0,
            tag: k.tag,
            payload: k.payload,
            callback: null,
            next: null
          });
          e: {
            var ae = e, ge = k;
            D = n;
            var Re = r;
            switch (ge.tag) {
              case 1:
                if (ae = ge.payload, typeof ae == "function") {
                  X = ae.call(Re, X, D);
                  break e;
                }
                X = ae;
                break e;
              case 3:
                ae.flags = ae.flags & -65537 | 128;
              case 0:
                if (ae = ge.payload, D = typeof ae == "function" ? ae.call(Re, X, D) : ae, D == null) break e;
                X = F({}, X, D);
                break e;
              case 2:
                Wi = !0;
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
          }, $ === null ? (R = $ = H, _ = X) : $ = $.next = H, y |= D;
        if (k = k.next, k === null) {
          if (k = u.shared.pending, k === null)
            break;
          H = k, k = H.next, H.next = null, u.lastBaseUpdate = H, u.shared.pending = null;
        }
      } while (!0);
      $ === null && (_ = X), u.baseState = _, u.firstBaseUpdate = R, u.lastBaseUpdate = $, d === null && (u.shared.lanes = 0), sr |= y, e.lanes = y, e.memoizedState = X;
    }
  }
  function pm(e, n) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(n);
  }
  function hm(e, n) {
    var r = e.callbacks;
    if (r !== null)
      for (e.callbacks = null, e = 0; e < r.length; e++)
        pm(r[e], n);
  }
  var nr = bt(null), ts = bt(0);
  function mm(e, n) {
    e = Bi, Fe(ts, e), Fe(nr, n), Bi = e | n.baseLanes;
  }
  function Sc() {
    Fe(ts, Bi), Fe(nr, nr.current);
  }
  function zc() {
    Bi = ts.current, ut(nr), ut(ts);
  }
  var Gt = bt(null), Wt = null;
  function ir(e) {
    var n = e.alternate;
    Fe(Ft, Ft.current & 1), Fe(Gt, e), Wt === null && (n === null || nr.current !== null || n.memoizedState !== null) && (Wt = e);
  }
  function _c(e) {
    Fe(Ft, Ft.current), Fe(Gt, e), Wt === null && (Wt = e);
  }
  function gm(e) {
    e.tag === 22 ? (Fe(Ft, Ft.current), Fe(Gt, e), Wt === null && (Wt = e)) : rr();
  }
  function rr() {
    Fe(Ft, Ft.current), Fe(Gt, Gt.current);
  }
  function Sn(e) {
    ut(Gt), Wt === e && (Wt = null), ut(Ft);
  }
  var Ft = bt(0);
  function Ol(e, n) {
    Fe(Gt, Gt.current), Fe(Ft, n);
  }
  function jc(e) {
    ut(Ft), ut(Gt), Wt === e && (Wt = null);
  }
  function ns(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var r = n.memoizedState;
        if (r !== null && (r = r.dehydrated, r === null || Qf(r) || Pf(r)))
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
  var Mi = 0, Me = null, nt = null, Ct = null, is = !1, Ta = !1, Vr = !1, rs = 0, Dl = 0, Na = null, k2 = 0;
  function yt() {
    throw Error(o(321));
  }
  function Ec(e, n) {
    if (n === null) return !1;
    for (var r = 0; r < n.length && r < e.length; r++)
      if (!kn(e[r], n[r])) return !1;
    return !0;
  }
  function Cc(e, n, r, l, u, d) {
    return Mi = d, Me = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, me.H = e === null || e.memoizedState === null ? Wm : eg, Vr = !1, d = r(l, u), Vr = !1, Ta && (d = xm(
      n,
      r,
      l,
      u
    )), bm(e), d;
  }
  function bm(e) {
    me.H = fs;
    var n = nt !== null && nt.next !== null;
    if (Mi = 0, Ct = nt = Me = null, is = !1, Dl = 0, Na = null, n) throw Error(o(300));
    e === null || Tt || (e = e.dependencies, e !== null && Xo(e) && (Tt = !0));
  }
  function xm(e, n, r, l) {
    Me = e;
    var u = 0;
    do {
      if (Ta && (Na = null), Dl = 0, Ta = !1, 25 <= u) throw Error(o(301));
      if (u += 1, Ct = nt = null, e.updateQueue != null) {
        var d = e.updateQueue;
        d.lastEffect = null, d.events = null, d.stores = null, d.memoCache != null && (d.memoCache.index = 0);
      }
      me.H = N2, d = n(r, l);
    } while (Ta);
    return d;
  }
  function S2() {
    var e = me.H, n = e.useState()[0];
    return n = typeof n.then == "function" ? Ml(n) : n, e = e.useState()[0], (nt !== null ? nt.memoizedState : null) !== e && (Me.flags |= 1024), n;
  }
  function Tc() {
    var e = rs !== 0;
    return rs = 0, e;
  }
  function Nc(e, n, r) {
    n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~r;
  }
  function Ac(e) {
    if (is) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), e = e.next;
      }
      is = !1;
    }
    Mi = 0, Ct = nt = Me = null, Ta = !1, Dl = rs = 0, Na = null;
  }
  function rn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Ct === null ? Me.memoizedState = Ct = e : Ct = Ct.next = e, Ct;
  }
  function kt() {
    if (nt === null) {
      var e = Me.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = nt.next;
    var n = Ct === null ? Me.memoizedState : Ct.next;
    if (n !== null)
      Ct = n, nt = e;
    else {
      if (e === null)
        throw Me.alternate === null ? Error(o(467)) : Error(o(310));
      nt = e, e = {
        memoizedState: nt.memoizedState,
        baseState: nt.baseState,
        baseQueue: nt.baseQueue,
        queue: nt.queue,
        next: null
      }, Ct === null ? Me.memoizedState = Ct = e : Ct = Ct.next = e;
    }
    return Ct;
  }
  function as() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ml(e) {
    var n = Dl;
    return Dl += 1, Na === null && (Na = []), e = sm(Na, e, n), n = Me, (Ct === null ? n.memoizedState : Ct.next) === null && (n = n.alternate, me.H = n === null || n.memoizedState === null ? Wm : eg), e;
  }
  function ls(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ml(e);
      if (e.$$typeof === J) return;
      if (e.$$typeof === ne) return Yt(e);
    }
    throw Error(o(438, String(e)));
  }
  function Oc(e) {
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
    if (n == null && (n = { data: [], index: 0 }), r === null && (r = as(), Me.updateQueue = r), r.memoCache = n, r = n.data[n.index], r === void 0)
      for (r = n.data[n.index] = Array(e), l = 0; l < e; l++)
        r[l] = E;
    return n.index++, r;
  }
  function Ri(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function os(e) {
    var n = kt();
    return Dc(n, nt, e);
  }
  function Dc(e, n, r) {
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
      var k = y = null, _ = null, R = n, $ = !1;
      do {
        var X = R.lane & -536870913;
        if (X !== R.lane ? (Ze & X) === X : (Mi & X) === X) {
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
            }), X === Ir && ($ = !0);
          else if ((Mi & D) === D) {
            R = R.next, D === Ir && ($ = !0);
            continue;
          } else
            X = {
              lane: 0,
              revertLane: R.revertLane,
              gesture: null,
              action: R.action,
              hasEagerState: R.hasEagerState,
              eagerState: R.eagerState,
              next: null
            }, _ === null ? (k = _ = X, y = d) : _ = _.next = X, Me.lanes |= D, sr |= D;
          X = R.action, Vr && r(d, X), d = R.hasEagerState ? R.eagerState : r(d, X);
        } else
          D = {
            lane: X,
            revertLane: R.revertLane,
            gesture: R.gesture,
            action: R.action,
            hasEagerState: R.hasEagerState,
            eagerState: R.eagerState,
            next: null
          }, _ === null ? (k = _ = D, y = d) : _ = _.next = D, Me.lanes |= X, sr |= X;
        R = R.next;
      } while (R !== null && R !== n);
      if (_ === null ? y = d : _.next = k, !kn(d, e.memoizedState) && (Tt = !0, $ && (r = ja, r !== null)))
        throw r;
      e.memoizedState = d, e.baseState = y, e.baseQueue = _, l.lastRenderedState = d;
    }
    return u === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Mc(e) {
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
      kn(d, n.memoizedState) || (Tt = !0), n.memoizedState = d, n.baseQueue === null && (n.baseState = d), r.lastRenderedState = d;
    }
    return [d, l];
  }
  function ym(e, n, r) {
    var l = Me, u = kt(), d = Le;
    if (d) {
      if (r === void 0) throw Error(o(407));
      r = r();
    } else r = n();
    var y = !kn(
      (nt || u).memoizedState,
      r
    );
    if (y && (u.memoizedState = r, Tt = !0), u = u.queue, Lc(km.bind(null, l, u, e), [
      e
    ]), e = u.getSnapshot !== n || y || Ct !== null && (Ct.memoizedState.tag & 1) !== 0, Aa(
      e ? 9 : 8,
      { destroy: void 0 },
      wm.bind(null, l, u, r, n),
      null
    ), e) {
      if (l.flags |= 2048, it === null) throw Error(o(349));
      d || (Mi & 127) !== 0 || vm(l, n, r);
    }
    return r;
  }
  function vm(e, n, r) {
    e.flags |= 16384, e = { getSnapshot: n, value: r }, n = Me.updateQueue, n === null ? (n = as(), Me.updateQueue = n, n.stores = [e]) : (r = n.stores, r === null ? n.stores = [e] : r.push(e));
  }
  function wm(e, n, r, l) {
    n.value = r, n.getSnapshot = l, Sm(n) && zm(e);
  }
  function km(e, n, r) {
    return r(function() {
      Sm(n) && zm(e);
    });
  }
  function Sm(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var r = n();
      return !kn(e, r);
    } catch {
      return !0;
    }
  }
  function zm(e) {
    var n = Dr(e, 2);
    n !== null && gn(n, e, 2);
  }
  function Rc(e) {
    var n = rn();
    if (typeof e == "function") {
      var r = e;
      if (e = r(), Vr) {
        jt(!0);
        try {
          r();
        } finally {
          jt(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = e, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ri,
      lastRenderedState: e
    }, n;
  }
  function _m(e, n, r, l) {
    return e.baseState = r, Dc(
      e,
      nt,
      typeof l == "function" ? l : Ri
    );
  }
  function z2(e, n, r, l, u) {
    if (cs(e)) throw Error(o(485));
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
      me.T !== null ? r(!0) : d.isTransition = !1, l(d), r = n.pending, r === null ? (d.next = n.pending = d, jm(n, d)) : (d.next = r.next, n.pending = r.next = d);
    }
  }
  function jm(e, n) {
    var r = n.action, l = n.payload, u = e.state;
    if (n.isTransition) {
      var d = me.T, y = {};
      y.types = d !== null ? d.types : null, me.T = y;
      try {
        var k = r(u, l), _ = me.S;
        _ !== null && _(y, k), Em(e, n, k);
      } catch (R) {
        Uc(e, n, R);
      } finally {
        d !== null && y.types !== null && (d.types = y.types), me.T = d;
      }
    } else
      try {
        d = r(u, l), Em(e, n, d);
      } catch (R) {
        Uc(e, n, R);
      }
  }
  function Em(e, n, r) {
    r !== null && typeof r == "object" && typeof r.then == "function" ? r.then(
      function(l) {
        Cm(e, n, l);
      },
      function(l) {
        return Uc(e, n, l);
      }
    ) : Cm(e, n, r);
  }
  function Cm(e, n, r) {
    n.status = "fulfilled", n.value = r, Tm(n), e.state = r, n = e.pending, n !== null && (r = n.next, r === n ? e.pending = null : (r = r.next, n.next = r, jm(e, r)));
  }
  function Uc(e, n, r) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        n.status = "rejected", n.reason = r, Tm(n), n = n.next;
      while (n !== l);
    }
    e.action = null;
  }
  function Tm(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function Nm(e, n) {
    return n;
  }
  function Am(e, n) {
    if (Le) {
      var r = it.formState;
      if (r !== null) {
        e: {
          var l = Me;
          if (Le) {
            if (ot) {
              t: {
                for (var u = ot, d = qn; u.nodeType !== 8; ) {
                  if (!d) {
                    u = null;
                    break t;
                  }
                  if (u = Vn(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break t;
                  }
                }
                d = u.data, u = d === "F!" || d === "F" ? u : null;
              }
              if (u) {
                ot = Vn(
                  u.nextSibling
                ), l = u.data === "F!";
                break e;
              }
            }
            Pi(l);
          }
          l = !1;
        }
        l && (n = r[0]);
      }
    }
    return r = rn(), r.memoizedState = r.baseState = n, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Nm,
      lastRenderedState: n
    }, r.queue = l, r = Pm.bind(
      null,
      Me,
      l
    ), l.dispatch = r, l = Rc(!1), d = qc.bind(
      null,
      Me,
      !1,
      l.queue
    ), l = rn(), u = {
      state: n,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = u, r = z2.bind(
      null,
      Me,
      u,
      d,
      r
    ), u.dispatch = r, l.memoizedState = e, [n, r, !1];
  }
  function Om(e) {
    var n = kt();
    return Dm(n, nt, e);
  }
  function Dm(e, n, r) {
    if (n = Dc(
      e,
      n,
      Nm
    )[0], e = os(Ri)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var l = Ml(n);
      } catch (y) {
        throw y === Ea ? Ko : y;
      }
    else l = n;
    n = kt();
    var u = n.queue, d = u.dispatch;
    return r !== n.memoizedState && (Me.flags |= 2048, Aa(
      9,
      { destroy: void 0 },
      _2.bind(null, u, r),
      null
    )), [l, d, e];
  }
  function _2(e, n) {
    e.action = n;
  }
  function Mm(e) {
    var n = kt(), r = nt;
    if (r !== null)
      return Dm(n, r, e);
    kt(), n = n.memoizedState, r = kt();
    var l = r.queue.dispatch;
    return r.memoizedState = e, [n, l, !1];
  }
  function Aa(e, n, r, l) {
    return e = { tag: e, create: r, deps: l, inst: n, next: null }, n = Me.updateQueue, n === null && (n = as(), Me.updateQueue = n), r = n.lastEffect, r === null ? n.lastEffect = e.next = e : (l = r.next, r.next = e, e.next = l, n.lastEffect = e), e;
  }
  function Rm() {
    return kt().memoizedState;
  }
  function ss(e, n, r, l) {
    var u = rn();
    Me.flags |= e, u.memoizedState = Aa(
      1 | n,
      { destroy: void 0 },
      r,
      l === void 0 ? null : l
    );
  }
  function us(e, n, r, l) {
    var u = kt();
    l = l === void 0 ? null : l;
    var d = u.memoizedState.inst;
    nt !== null && l !== null && Ec(l, nt.memoizedState.deps) ? u.memoizedState = Aa(n, d, r, l) : (Me.flags |= e, u.memoizedState = Aa(
      1 | n,
      d,
      r,
      l
    ));
  }
  function Um(e, n) {
    ss(8390656, 8, e, n);
  }
  function Lc(e, n) {
    us(2048, 8, e, n);
  }
  function j2(e) {
    Me.flags |= 4;
    var n = Me.updateQueue;
    if (n === null)
      n = as(), Me.updateQueue = n, n.events = [e];
    else {
      var r = n.events;
      r === null ? n.events = [e] : r.push(e);
    }
  }
  function Lm(e) {
    var n = kt().memoizedState;
    return j2({ ref: n, nextImpl: e }), function() {
      if ((Xe & 2) !== 0) throw Error(o(440));
      return n.impl.apply(void 0, arguments);
    };
  }
  function Bm(e, n) {
    return us(4, 2, e, n);
  }
  function Im(e, n) {
    return us(4, 4, e, n);
  }
  function Hm(e, n) {
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
  function Zm(e, n, r) {
    r = r != null ? r.concat([e]) : null, us(4, 4, Hm.bind(null, n, e), r);
  }
  function Bc() {
  }
  function qm(e, n) {
    var r = kt();
    n = n === void 0 ? null : n;
    var l = r.memoizedState;
    return n !== null && Ec(n, l[1]) ? l[0] : (r.memoizedState = [e, n], e);
  }
  function $m(e, n) {
    var r = kt();
    n = n === void 0 ? null : n;
    var l = r.memoizedState;
    if (n !== null && Ec(n, l[1]))
      return l[0];
    if (l = e(), Vr) {
      jt(!0);
      try {
        e();
      } finally {
        jt(!1);
      }
    }
    return r.memoizedState = [l, n], l;
  }
  function Ic(e, n, r) {
    return r === void 0 || (Mi & 1073741824) !== 0 && (Ze & 261930) === 0 ? e.memoizedState = n : (e.memoizedState = r, e = Wg(), Me.lanes |= e, sr |= e, r);
  }
  function Vm(e, n, r, l) {
    return kn(r, n) ? r : nr.current !== null ? (e = Ic(e, r, l), kn(e, n) || (Tt = !0), e) : (Mi & 106) === 0 || (Mi & 1073741824) !== 0 && (Ze & 261930) === 0 ? (Tt = !0, e.memoizedState = r) : (e = Wg(), Me.lanes |= e, sr |= e, n);
  }
  function Ym(e, n, r, l, u) {
    var d = je.p;
    je.p = d !== 0 && 8 > d ? d : 8;
    var y = me.T, k = {};
    k.types = y !== null ? y.types : null, me.T = k, qc(e, !1, n, r);
    try {
      var _ = u(), R = me.S;
      if (R !== null && R(k, _), _ !== null && typeof _ == "object" && typeof _.then == "function") {
        var $ = w2(
          _,
          l
        );
        Rl(
          e,
          n,
          $,
          En(e)
        );
      } else
        Rl(
          e,
          n,
          l,
          En(e)
        );
    } catch (X) {
      Rl(
        e,
        n,
        { then: function() {
        }, status: "rejected", reason: X },
        En()
      );
    } finally {
      je.p = d, y !== null && k.types !== null && (y.types = k.types), me.T = y;
    }
  }
  function E2() {
  }
  function Hc(e, n, r, l) {
    if (e.tag !== 5) throw Error(o(476));
    var u = Gm(e).queue;
    Ym(
      e,
      u,
      n,
      Ht,
      r === null ? E2 : function() {
        return Fm(e), r(l);
      }
    );
  }
  function Gm(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: Ht,
      baseState: Ht,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ri,
        lastRenderedState: Ht
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
        lastRenderedReducer: Ri,
        lastRenderedState: r
      },
      next: null
    }, e.memoizedState = n, e = e.alternate, e !== null && (e.memoizedState = n), n;
  }
  function Fm(e) {
    var n = Gm(e);
    n.next === null && (n = e.alternate.memoizedState), Rl(
      e,
      n.next.queue,
      {},
      En()
    );
  }
  function Zc() {
    return Yt(Pa);
  }
  function Xm() {
    return kt().memoizedState;
  }
  function Qm() {
    return kt().memoizedState;
  }
  function C2(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var r = En();
          e = er(r);
          var l = tr(n, e, r);
          l !== null && (gn(l, n, r), Tl(l, n, r)), n = { cache: mc() }, e.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function T2(e, n, r) {
    var l = En();
    r = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, cs(e) ? Km(n, r) : (r = lc(e, n, r, l), r !== null && (gn(r, e, l), Jm(r, n, l)));
  }
  function Pm(e, n, r) {
    var l = En();
    Rl(e, n, r, l);
  }
  function Rl(e, n, r, l) {
    var u = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (cs(e)) Km(n, u);
    else {
      var d = e.alternate;
      if (e.lanes === 0 && (d === null || d.lanes === 0) && (d = n.lastRenderedReducer, d !== null))
        try {
          var y = n.lastRenderedState, k = d(y, r);
          if (u.hasEagerState = !0, u.eagerState = k, kn(k, y))
            return Zo(e, n, u, 0), it === null && Ho(), !1;
        } catch {
        }
      if (r = lc(e, n, u, l), r !== null)
        return gn(r, e, l), Jm(r, n, l), !0;
    }
    return !1;
  }
  function qc(e, n, r, l) {
    if (l = {
      lane: 2,
      revertLane: Df(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, cs(e)) {
      if (n) throw Error(o(479));
    } else
      n = lc(
        e,
        r,
        l,
        2
      ), n !== null && gn(n, e, 2);
  }
  function cs(e) {
    var n = e.alternate;
    return e === Me || n !== null && n === Me;
  }
  function Km(e, n) {
    Ta = is = !0;
    var r = e.pending;
    r === null ? n.next = n : (n.next = r.next, r.next = n), e.pending = n;
  }
  function Jm(e, n, r) {
    if ((r & 4194048) !== 0) {
      var l = n.lanes;
      l &= e.pendingLanes, r |= l, n.lanes = r, Wp(e, r);
    }
  }
  var fs = {
    readContext: Yt,
    use: ls,
    useCallback: yt,
    useContext: yt,
    useEffect: yt,
    useImperativeHandle: yt,
    useLayoutEffect: yt,
    useInsertionEffect: yt,
    useMemo: yt,
    useReducer: yt,
    useRef: yt,
    useState: yt,
    useDebugValue: yt,
    useDeferredValue: yt,
    useTransition: yt,
    useSyncExternalStore: yt,
    useId: yt,
    useHostTransitionStatus: yt,
    useFormState: yt,
    useActionState: yt,
    useOptimistic: yt,
    useMemoCache: yt,
    useCacheRefresh: yt,
    useEffectEvent: yt
  }, Wm = {
    readContext: Yt,
    use: ls,
    useCallback: function(e, n) {
      return rn().memoizedState = [
        e,
        n === void 0 ? null : n
      ], e;
    },
    useContext: Yt,
    useEffect: Um,
    useImperativeHandle: function(e, n, r) {
      r = r != null ? r.concat([e]) : null, ss(
        4194308,
        4,
        Hm.bind(null, n, e),
        r
      );
    },
    useLayoutEffect: function(e, n) {
      return ss(4194308, 4, e, n);
    },
    useInsertionEffect: function(e, n) {
      ss(4, 2, e, n);
    },
    useMemo: function(e, n) {
      var r = rn();
      n = n === void 0 ? null : n;
      var l = e();
      if (Vr) {
        jt(!0);
        try {
          e();
        } finally {
          jt(!1);
        }
      }
      return r.memoizedState = [l, n], l;
    },
    useReducer: function(e, n, r) {
      var l = rn();
      if (r !== void 0) {
        var u = r(n);
        if (Vr) {
          jt(!0);
          try {
            r(n);
          } finally {
            jt(!1);
          }
        }
      } else u = n;
      return l.memoizedState = l.baseState = u, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      }, l.queue = e, e = e.dispatch = T2.bind(
        null,
        Me,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var n = rn();
      return e = { current: e }, n.memoizedState = e;
    },
    useState: function(e) {
      e = Rc(e);
      var n = e.queue, r = Pm.bind(null, Me, n);
      return n.dispatch = r, [e.memoizedState, r];
    },
    useDebugValue: Bc,
    useDeferredValue: function(e, n) {
      var r = rn();
      return Ic(r, e, n);
    },
    useTransition: function() {
      var e = Rc(!1);
      return e = Ym.bind(
        null,
        Me,
        e.queue,
        !0,
        !1
      ), rn().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, n, r) {
      var l = Me, u = rn();
      if (Le) {
        if (r === void 0)
          throw Error(o(407));
        r = r();
      } else {
        if (r = n(), it === null)
          throw Error(o(349));
        (Ze & 127) !== 0 || vm(l, n, r);
      }
      u.memoizedState = r;
      var d = { value: r, getSnapshot: n };
      return u.queue = d, Um(km.bind(null, l, d, e), [
        e
      ]), l.flags |= 2048, Aa(
        9,
        { destroy: void 0 },
        wm.bind(
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
      var e = rn(), n = it.identifierPrefix;
      if (Le) {
        var r = si, l = oi;
        r = (l & ~(1 << 32 - ht(l) - 1)).toString(32) + r, n = "_" + n + "R_" + r, r = rs++, 0 < r && (n += "H" + r.toString(32)), n += "_";
      } else
        r = k2++, n = "_" + n + "r_" + r.toString(32) + "_";
      return e.memoizedState = n;
    },
    useHostTransitionStatus: Zc,
    useFormState: Am,
    useActionState: Am,
    useOptimistic: function(e) {
      var n = rn();
      n.memoizedState = n.baseState = e;
      var r = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = r, n = qc.bind(
        null,
        Me,
        !0,
        r
      ), r.dispatch = n, [e, n];
    },
    useMemoCache: Oc,
    useCacheRefresh: function() {
      return rn().memoizedState = C2.bind(
        null,
        Me
      );
    },
    useEffectEvent: function(e) {
      var n = rn(), r = { impl: e };
      return n.memoizedState = r, function() {
        if ((Xe & 2) !== 0)
          throw Error(o(440));
        return r.impl.apply(void 0, arguments);
      };
    }
  }, eg = {
    readContext: Yt,
    use: ls,
    useCallback: qm,
    useContext: Yt,
    useEffect: Lc,
    useImperativeHandle: Zm,
    useInsertionEffect: Bm,
    useLayoutEffect: Im,
    useMemo: $m,
    useReducer: os,
    useRef: Rm,
    useState: function() {
      return os(Ri);
    },
    useDebugValue: Bc,
    useDeferredValue: function(e, n) {
      var r = kt();
      return Vm(
        r,
        nt.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = os(Ri)[0], n = kt().memoizedState;
      return [
        typeof e == "boolean" ? e : Ml(e),
        n
      ];
    },
    useSyncExternalStore: ym,
    useId: Xm,
    useHostTransitionStatus: Zc,
    useFormState: Om,
    useActionState: Om,
    useOptimistic: function(e, n) {
      var r = kt();
      return _m(r, nt, e, n);
    },
    useMemoCache: Oc,
    useCacheRefresh: Qm,
    useEffectEvent: Lm
  }, N2 = {
    readContext: Yt,
    use: ls,
    useCallback: qm,
    useContext: Yt,
    useEffect: Lc,
    useImperativeHandle: Zm,
    useInsertionEffect: Bm,
    useLayoutEffect: Im,
    useMemo: $m,
    useReducer: Mc,
    useRef: Rm,
    useState: function() {
      return Mc(Ri);
    },
    useDebugValue: Bc,
    useDeferredValue: function(e, n) {
      var r = kt();
      return nt === null ? Ic(r, e, n) : Vm(
        r,
        nt.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Mc(Ri)[0], n = kt().memoizedState;
      return [
        typeof e == "boolean" ? e : Ml(e),
        n
      ];
    },
    useSyncExternalStore: ym,
    useId: Xm,
    useHostTransitionStatus: Zc,
    useFormState: Mm,
    useActionState: Mm,
    useOptimistic: function(e, n) {
      var r = kt();
      return nt !== null ? _m(r, nt, e, n) : (r.baseState = e, [e, r.queue.dispatch]);
    },
    useMemoCache: Oc,
    useCacheRefresh: Qm,
    useEffectEvent: Lm
  };
  function $c(e, n, r, l) {
    n = e.memoizedState, r = r(l, n), r = r == null ? n : F({}, n, r), e.memoizedState = r, e.lanes === 0 && (e.updateQueue.baseState = r);
  }
  var Vc = {
    enqueueSetState: function(e, n, r) {
      e = e._reactInternals;
      var l = En(), u = er(l);
      u.payload = n, r != null && (u.callback = r), n = tr(e, u, l), n !== null && (gn(n, e, l), Tl(n, e, l));
    },
    enqueueReplaceState: function(e, n, r) {
      e = e._reactInternals;
      var l = En(), u = er(l);
      u.tag = 1, u.payload = n, r != null && (u.callback = r), n = tr(e, u, l), n !== null && (gn(n, e, l), Tl(n, e, l));
    },
    enqueueForceUpdate: function(e, n) {
      e = e._reactInternals;
      var r = En(), l = er(r);
      l.tag = 2, n != null && (l.callback = n), n = tr(e, l, r), n !== null && (gn(n, e, r), Tl(n, e, r));
    }
  };
  function tg(e, n, r, l, u, d, y) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, d, y) : n.prototype && n.prototype.isPureReactComponent ? !wl(r, l) || !wl(u, d) : !0;
  }
  function ng(e, n, r, l) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(r, l), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(r, l), n.state !== e && Vc.enqueueReplaceState(n, n.state, null);
  }
  function Yr(e, n) {
    var r = n;
    if ("ref" in n) {
      r = {};
      for (var l in n)
        l !== "ref" && (r[l] = n[l]);
    }
    if (e = e.defaultProps) {
      r === n && (r = F({}, r));
      for (var u in e)
        r[u] === void 0 && (r[u] = e[u]);
    }
    return r;
  }
  function ig(e) {
    Io(e);
  }
  function rg(e) {
    console.error(e);
  }
  function ag(e) {
    Io(e);
  }
  function ds(e, n) {
    try {
      var r = e.onUncaughtError;
      r(n.value, { componentStack: n.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function lg(e, n, r) {
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
  function Yc(e, n, r) {
    return r = er(r), r.tag = 3, r.payload = { element: null }, r.callback = function() {
      ds(e, n);
    }, r;
  }
  function og(e) {
    return e = er(e), e.tag = 3, e;
  }
  function sg(e, n, r, l) {
    var u = r.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var d = l.value;
      e.payload = function() {
        return u(d);
      }, e.callback = function() {
        lg(n, r, l);
      };
    }
    var y = r.stateNode;
    y !== null && typeof y.componentDidCatch == "function" && (e.callback = function() {
      lg(n, r, l), typeof u != "function" && (ur === null ? ur = /* @__PURE__ */ new Set([this]) : ur.add(this));
      var k = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: k !== null ? k : ""
      });
    });
  }
  function A2(e, n, r, l, u) {
    if (r.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (n = r.alternate, n !== null && Lr(
        n,
        r,
        u,
        !0
      ), r = Gt.current, r !== null) {
        switch (r.tag) {
          case 31:
          case 13:
          case 19:
            return Wt === null ? Ds() : r.alternate === null && vt === 0 && (vt = 3), r.flags &= -257, r.flags |= 65536, r.lanes = u, l === Jo ? r.flags |= 16384 : (n = r.updateQueue, n === null ? r.updateQueue = /* @__PURE__ */ new Set([l]) : n.add(l), Nf(e, l, u)), !1;
          case 22:
            return r.flags |= 65536, l === Jo ? r.flags |= 16384 : (n = r.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, r.updateQueue = n) : (r = n.retryQueue, r === null ? n.retryQueue = /* @__PURE__ */ new Set([l]) : r.add(l)), Nf(e, l, u)), !1;
        }
        throw Error(o(435, r.tag));
      }
      return Nf(e, l, u), Ds(), !1;
    }
    if (Le)
      return n = Gt.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = u, l !== fc && (e = Error(o(422), { cause: l }), zl(In(e, r)))) : (l !== fc && (n = Error(o(423), {
        cause: l
      }), zl(
        In(n, r)
      )), e = e.current.alternate, e.flags |= 65536, u &= -u, e.lanes |= u, l = In(l, r), u = Yc(
        e.stateNode,
        l,
        u
      ), wc(e, u), vt !== 4 && (vt = 2)), !1;
    var d = Error(o(520), { cause: l });
    if (d = In(d, r), $l === null ? $l = [d] : $l.push(d), vt !== 4 && (vt = 2), n === null) return !0;
    l = In(l, r), r = n;
    do {
      switch (r.tag) {
        case 3:
          return r.flags |= 65536, e = u & -u, r.lanes |= e, e = Yc(r.stateNode, l, e), wc(r, e), !1;
        case 1:
          if (n = r.type, d = r.stateNode, (r.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (ur === null || !ur.has(d))))
            return r.flags |= 65536, u &= -u, r.lanes |= u, u = og(u), sg(
              u,
              e,
              r,
              l
            ), wc(r, u), !1;
          break;
        case 22:
          if (r.memoizedState !== null)
            return r.flags |= 65536, !1;
      }
      r = r.return;
    } while (r !== null);
    return !1;
  }
  var Gc = Error(o(461)), Tt = !1;
  function Mt(e, n, r, l) {
    n.child = e === null ? dm(n, null, r, l) : $r(
      n,
      e.child,
      r,
      l
    );
  }
  function ug(e, n, r, l, u) {
    r = r.render;
    var d = n.ref;
    if ("ref" in l) {
      var y = {};
      for (var k in l)
        k !== "ref" && (y[k] = l[k]);
    } else y = l;
    return Br(n), l = Cc(
      e,
      n,
      r,
      y,
      d,
      u
    ), k = Tc(), e !== null && !Tt ? (Nc(e, n, u), Ui(e, n, u)) : (Le && k && Yo(n), n.flags |= 1, Mt(e, n, l, u), n.child);
  }
  function cg(e, n, r, l, u) {
    if (e === null) {
      var d = r.type;
      return typeof d == "function" && !oc(d) && d.defaultProps === void 0 && r.compare === null ? (n.tag = 15, n.type = d, fg(
        e,
        n,
        d,
        l,
        u
      )) : (e = $o(
        r.type,
        null,
        l,
        n,
        n.mode,
        u
      ), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (d = e.child, !ef(e, u)) {
      var y = d.memoizedProps;
      if (r = r.compare, r = r !== null ? r : wl, r(y, l) && e.ref === n.ref)
        return Ui(e, n, u);
    }
    return n.flags |= 1, e = Ni(d, l), e.ref = n.ref, e.return = n, n.child = e;
  }
  function fg(e, n, r, l, u) {
    if (e !== null) {
      var d = e.memoizedProps;
      if (wl(d, l) && e.ref === n.ref)
        if (Tt = !1, n.pendingProps = l = d, ef(e, u))
          (e.flags & 131072) !== 0 && (Tt = !0);
        else
          return n.lanes = e.lanes, Ui(e, n, u);
    }
    return Fc(
      e,
      n,
      r,
      l,
      u
    );
  }
  function dg(e, n, r, l) {
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
        return pg(
          e,
          n,
          d,
          r,
          l
        );
      }
      if ((r & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Po(
          n,
          d !== null ? d.cachePool : null
        ), d !== null ? mm(n, d) : Sc(), gm(n);
      else
        return l = n.lanes = 536870912, pg(
          e,
          n,
          d !== null ? d.baseLanes | r : r,
          r,
          l
        );
    } else
      d !== null ? (Po(n, d.cachePool), mm(n, d), rr(), n.memoizedState = null) : (e !== null && Po(n, null), Sc(), rr());
    return Mt(e, n, u, r), n.child;
  }
  function Ul(e, n) {
    return e !== null && e.tag === 22 || n.stateNode !== null || (n.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), n.sibling;
  }
  function pg(e, n, r, l, u) {
    var d = bc();
    return d = d === null ? null : { parent: Et._currentValue, pool: d }, n.memoizedState = {
      baseLanes: r,
      cachePool: d
    }, e !== null && Po(n, null), Sc(), gm(n), e !== null && Lr(e, n, l, !0), n.childLanes = u, null;
  }
  function ps(e, n) {
    return n = hs(
      { mode: n.mode, children: n.children },
      e.mode
    ), n.ref = e.ref, e.child = n, n.return = e, n;
  }
  function hg(e, n, r) {
    return $r(n, e.child, null, r), e = ps(n, n.pendingProps), e.flags |= 2, Sn(n), n.memoizedState = null, e;
  }
  function O2(e, n, r) {
    var l = n.pendingProps, u = (n.flags & 128) !== 0;
    if (n.flags &= -129, e === null) {
      if (Le) {
        if (l.mode === "hidden")
          return e = ps(n, l), n.lanes = 536870912, e.memoizedState = { baseLanes: 0, cachePool: null }, Ul(null, e);
        if (_c(n), (e = ot) ? (e = Hb(
          e,
          qn
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (n.memoizedState = {
          dehydrated: e,
          treeContext: Xi !== null ? { id: oi, overflow: si } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, r = Kh(e), r.return = n, n.child = r, Lt = n, ot = null)) : e = null, e === null) throw Pi(n);
        return n.lanes = 536870912, null;
      }
      return ps(n, l);
    }
    var d = e.memoizedState;
    if (d !== null) {
      var y = d.dehydrated;
      if (_c(n), u)
        if (n.flags & 256)
          n.flags &= -257, n = hg(
            e,
            n,
            r
          );
        else if (n.memoizedState !== null)
          n.child = e.child, n.flags |= 128, n = null;
        else throw Error(o(558));
      else if (Tt || Lr(e, n, r, !1), u = (r & e.childLanes) !== 0, Tt || u) {
        if (nr.current === null) {
          if (l = it, l !== null && (y = eh(l, r), y !== 0 && y !== d.retryLane))
            throw d.retryLane = y, Dr(e, y), gn(l, e, y), Gc;
          Ds();
        }
        n = hg(
          e,
          n,
          r
        );
      } else
        e = d.treeContext, ot = Vn(y.nextSibling), Lt = n, Le = !0, Qi = null, qn = !1, e !== null && em(n, e), n = ps(n, l), n.flags |= 134221824;
      return n;
    }
    return e = Ni(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = n.ref, n.child = e, e.return = n, e;
  }
  function Oa(e, n) {
    var r = n.ref;
    if (r === null)
      e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof r != "function" && typeof r != "object")
        throw Error(o(284));
      (e === null || e.ref !== r) && (n.flags |= 4194816);
    }
  }
  function Fc(e, n, r, l, u) {
    return Br(n), r = Cc(
      e,
      n,
      r,
      l,
      void 0,
      u
    ), l = Tc(), e !== null && !Tt ? (Nc(e, n, u), Ui(e, n, u)) : (Le && l && Yo(n), n.flags |= 1, Mt(e, n, r, u), n.child);
  }
  function mg(e, n, r, l, u, d) {
    return Br(n), n.updateQueue = null, r = xm(
      n,
      l,
      r,
      u
    ), bm(e), l = Tc(), e !== null && !Tt ? (Nc(e, n, d), Ui(e, n, d)) : (Le && l && Yo(n), n.flags |= 1, Mt(e, n, r, d), n.child);
  }
  function gg(e, n, r, l, u) {
    if (Br(n), n.stateNode === null) {
      var d = ka, y = r.contextType;
      typeof y == "object" && y !== null && (d = Yt(y)), d = new r(l, d), n.memoizedState = d.state !== null && d.state !== void 0 ? d.state : null, d.updater = Vc, n.stateNode = d, d._reactInternals = n, d = n.stateNode, d.props = l, d.state = n.memoizedState, d.refs = {}, yc(n), y = r.contextType, d.context = typeof y == "object" && y !== null ? Yt(y) : ka, d.state = n.memoizedState, y = r.getDerivedStateFromProps, typeof y == "function" && ($c(
        n,
        r,
        y,
        l
      ), d.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof d.getSnapshotBeforeUpdate == "function" || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (y = d.state, typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount(), y !== d.state && Vc.enqueueReplaceState(d, d.state, null), Al(n, l, d, u), Nl(), d.state = n.memoizedState), typeof d.componentDidMount == "function" && (n.flags |= 4194308), l = !0;
    } else if (e === null) {
      d = n.stateNode;
      var k = n.memoizedProps, _ = Yr(r, k);
      d.props = _;
      var R = d.context, $ = r.contextType;
      y = ka, typeof $ == "object" && $ !== null && (y = Yt($));
      var X = r.getDerivedStateFromProps;
      $ = typeof X == "function" || typeof d.getSnapshotBeforeUpdate == "function", k = n.pendingProps !== k, $ || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (k || R !== y) && ng(
        n,
        d,
        l,
        y
      ), Wi = !1;
      var D = n.memoizedState;
      d.state = D, Al(n, l, d, u), Nl(), R = n.memoizedState, k || D !== R || Wi ? (typeof X == "function" && ($c(
        n,
        r,
        X,
        l
      ), R = n.memoizedState), (_ = Wi || tg(
        n,
        r,
        _,
        l,
        D,
        R,
        y
      )) ? ($ || typeof d.UNSAFE_componentWillMount != "function" && typeof d.componentWillMount != "function" || (typeof d.componentWillMount == "function" && d.componentWillMount(), typeof d.UNSAFE_componentWillMount == "function" && d.UNSAFE_componentWillMount()), typeof d.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof d.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = l, n.memoizedState = R), d.props = l, d.state = R, d.context = y, l = _) : (typeof d.componentDidMount == "function" && (n.flags |= 4194308), l = !1);
    } else {
      d = n.stateNode, vc(e, n), y = n.memoizedProps, $ = Yr(r, y), d.props = $, X = n.pendingProps, D = d.context, R = r.contextType, _ = ka, typeof R == "object" && R !== null && (_ = Yt(R)), k = r.getDerivedStateFromProps, (R = typeof k == "function" || typeof d.getSnapshotBeforeUpdate == "function") || typeof d.UNSAFE_componentWillReceiveProps != "function" && typeof d.componentWillReceiveProps != "function" || (y !== X || D !== _) && ng(
        n,
        d,
        l,
        _
      ), Wi = !1, D = n.memoizedState, d.state = D, Al(n, l, d, u), Nl();
      var H = n.memoizedState;
      y !== X || D !== H || Wi || e !== null && e.dependencies !== null && Xo(e.dependencies) ? (typeof k == "function" && ($c(
        n,
        r,
        k,
        l
      ), H = n.memoizedState), ($ = Wi || tg(
        n,
        r,
        $,
        l,
        D,
        H,
        _
      ) || e !== null && e.dependencies !== null && Xo(e.dependencies)) ? (R || typeof d.UNSAFE_componentWillUpdate != "function" && typeof d.componentWillUpdate != "function" || (typeof d.componentWillUpdate == "function" && d.componentWillUpdate(l, H, _), typeof d.UNSAFE_componentWillUpdate == "function" && d.UNSAFE_componentWillUpdate(
        l,
        H,
        _
      )), typeof d.componentDidUpdate == "function" && (n.flags |= 4), typeof d.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof d.componentDidUpdate != "function" || y === e.memoizedProps && D === e.memoizedState || (n.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && D === e.memoizedState || (n.flags |= 1024), n.memoizedProps = l, n.memoizedState = H), d.props = l, d.state = H, d.context = _, l = $) : (typeof d.componentDidUpdate != "function" || y === e.memoizedProps && D === e.memoizedState || (n.flags |= 4), typeof d.getSnapshotBeforeUpdate != "function" || y === e.memoizedProps && D === e.memoizedState || (n.flags |= 1024), l = !1);
    }
    return d = l, Oa(e, n), l = (n.flags & 128) !== 0, d || l ? (d = n.stateNode, r = l && typeof r.getDerivedStateFromError != "function" ? null : d.render(), n.flags |= 1, e !== null && l ? (n.child = $r(
      n,
      e.child,
      null,
      u
    ), n.child = $r(
      n,
      null,
      r,
      u
    )) : Mt(e, n, r, u), n.memoizedState = d.state, e = n.child) : e = Ui(
      e,
      n,
      u
    ), e;
  }
  function bg(e, n, r, l) {
    return Rr(), n.flags |= 256, Mt(e, n, r, l), n.child;
  }
  var Xc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Qc(e) {
    return { baseLanes: e, cachePool: lm() };
  }
  function Pc(e, n, r) {
    return e = e !== null ? e.childLanes & ~r : 0, n && (e |= jn), e;
  }
  function xg(e, n, r) {
    var l = n.pendingProps, u = !1, d = (n.flags & 128) !== 0, y;
    if ((y = d) || (y = e !== null && e.memoizedState === null ? !1 : (Ft.current & 2) !== 0), y && (u = !0, n.flags &= -129), y = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
      if (Le) {
        if (u ? ir(n) : rr(), (e = ot) ? (e = Hb(
          e,
          qn
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (n.memoizedState = {
          dehydrated: e,
          treeContext: Xi !== null ? { id: oi, overflow: si } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, r = Kh(e), r.return = n, n.child = r, Lt = n, ot = null)) : e = null, e === null) throw Pi(n);
        return Pf(e) ? n.lanes = 32 : n.lanes = 536870912, null;
      }
      return d = l.children, l = l.fallback, u ? (rr(), u = n.mode, d = hs(
        { mode: "hidden", children: d },
        u
      ), l = Mr(
        l,
        u,
        r,
        null
      ), d.return = n, l.return = n, d.sibling = l, n.child = d, l = n.child, l.memoizedState = Qc(r), l.childLanes = Pc(
        e,
        y,
        r
      ), n.memoizedState = Xc, Ul(null, l)) : (ir(n), Kc(n, d));
    }
    var k = e.memoizedState;
    if (k !== null) {
      var _ = k.dehydrated;
      if (_ !== null)
        return D2(
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
    return u ? (rr(), u = l.fallback, d = n.mode, k = e.child, _ = k.sibling, l = Ni(k, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = k.subtreeFlags & 1206910976, _ !== null ? u = Ni(_, u) : (u = Mr(
      u,
      d,
      r,
      null
    ), u.flags |= 2), u.return = n, l.return = n, l.sibling = u, n.child = l, Ul(null, l), l = n.child, u = e.child.memoizedState, u === null ? u = Qc(r) : (d = u.cachePool, d !== null ? (k = Et._currentValue, d = d.parent !== k ? { parent: k, pool: k } : d) : d = lm(), u = {
      baseLanes: u.baseLanes | r,
      cachePool: d
    }), l.memoizedState = u, l.childLanes = Pc(
      e,
      y,
      r
    ), n.memoizedState = Xc, Ul(e.child, l)) : (ir(n), r = e.child, e = r.sibling, r = Ni(r, {
      mode: "visible",
      children: l.children
    }), r.return = n, r.sibling = null, e !== null && (y = n.deletions, y === null ? (n.deletions = [e], n.flags |= 16) : y.push(e)), n.child = r, n.memoizedState = null, r);
  }
  function Kc(e, n) {
    return n = hs(
      { mode: "visible", children: n },
      e.mode
    ), n.return = e, e.child = n;
  }
  function hs(e, n) {
    return e = dn(22, e, null, n), e.lanes = 0, e;
  }
  function ms(e, n, r) {
    return $r(n, e.child, null, r), e = Kc(
      n,
      n.pendingProps.children
    ), e.flags |= 2, n.memoizedState = null, e;
  }
  function D2(e, n, r, l, u, d, y, k) {
    if (r)
      return n.flags & 256 ? (ir(n), n.flags &= -257, ms(
        e,
        n,
        k
      )) : n.memoizedState !== null ? (rr(), n.child = e.child, n.flags |= 128, null) : (rr(), d = u.fallback, y = n.mode, u = hs(
        { mode: "visible", children: u.children },
        y
      ), d = Mr(
        d,
        y,
        k,
        null
      ), d.flags |= 2, u.return = n, d.return = n, u.sibling = d, n.child = u, $r(n, e.child, null, k), u = n.child, u.memoizedState = Qc(k), u.childLanes = Pc(
        e,
        l,
        k
      ), n.memoizedState = Xc, Ul(null, u));
    if (ir(n), Pf(d)) {
      if (l = d.nextSibling && d.nextSibling.dataset, l) var _ = l.dgst;
      return l = _, l !== "" && (u = Error(o(419)), u.stack = "", u.digest = l, zl({ value: u, source: null, stack: null })), ms(
        e,
        n,
        k
      );
    }
    if (Tt || Lr(e, n, k, !1), l = (k & e.childLanes) !== 0, Tt || l) {
      if (nr.current !== null)
        return ms(
          e,
          n,
          k
        );
      if (l = it, l !== null && (u = eh(
        l,
        k
      ), u !== 0 && u !== y.retryLane))
        throw y.retryLane = u, Dr(e, u), gn(l, e, u), Gc;
      return Qf(d) || Ds(), ms(
        e,
        n,
        k
      );
    }
    return Qf(d) ? (n.flags |= 192, n.child = e.child, null) : (e = y.treeContext, ot = Vn(d.nextSibling), Lt = n, Le = !0, Qi = null, qn = !1, e !== null && em(n, e), n = Kc(
      n,
      u.children
    ), n.flags |= 134221824, n);
  }
  function yg(e, n, r) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n), Fo(e.return, n, r);
  }
  function vg(e) {
    for (var n = null; e !== null; ) {
      var r = e.alternate;
      r !== null && ns(r) === null && (n = e), e = e.sibling;
    }
    return n;
  }
  function gs(e, n, r, l, u, d) {
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
  function Jc(e) {
    var n = e.child;
    for (e.child = null; n !== null; ) {
      var r = n.sibling;
      n.sibling = e.child, e.child = n, n = r;
    }
  }
  function Wc(e, n, r) {
    var l = n.pendingProps, u = l.revealOrder, d = l.tail;
    l = l.children;
    var y = Ft.current;
    if (n.flags & 128)
      return Ol(n, y), null;
    var k = (y & 2) !== 0;
    if (k ? (y = y & 1 | 2, n.flags |= 128) : y &= 1, Ol(n, y), u === "backwards" && e !== null ? (Jc(e), Mt(e, n, l, r), Jc(e)) : Mt(e, n, l, r), l = Le ? Sl : 0, !k && e !== null && (e.flags & 128) !== 0)
      e: for (e = n.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && yg(e, r, n);
        else if (e.tag === 19)
          yg(e, r, n);
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
        r = vg(n.child), r === null ? (u = n.child, n.child = null) : (u = r.sibling, r.sibling = null, Jc(n)), gs(
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
          if (e = u.alternate, e !== null && ns(e) === null) {
            n.child = u;
            break;
          }
          e = u.sibling, u.sibling = r, r = u, u = e;
        }
        gs(
          n,
          !0,
          r,
          null,
          d,
          l
        );
        break;
      case "together":
        gs(
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
        r = vg(n.child), r === null ? (u = n.child, n.child = null) : (u = r.sibling, r.sibling = null), gs(
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
  function wg(e, n, r) {
    var l = n.pendingProps;
    return Ki(n, n.type, l.value), Mt(e, n, l.children, r), n.child;
  }
  function Ui(e, n, r) {
    if (e !== null && (n.dependencies = e.dependencies), sr |= n.lanes, (r & n.childLanes) === 0)
      if (e !== null) {
        if (Lr(
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
      for (e = n.child, r = Ni(e, e.pendingProps), n.child = r, r.return = n; e.sibling !== null; )
        e = e.sibling, r = r.sibling = Ni(e, e.pendingProps), r.return = n;
      r.sibling = null;
    }
    return n.child;
  }
  function ef(e, n) {
    return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Xo(e)));
  }
  function M2(e, n, r) {
    switch (n.tag) {
      case 3:
        Si(n, n.stateNode.containerInfo), Ki(n, Et, e.memoizedState.cache), Rr();
        break;
      case 27:
      case 5:
        zi(n);
        break;
      case 4:
        Si(n, n.stateNode.containerInfo);
        break;
      case 10:
        Ki(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 31:
        if (n.memoizedState !== null)
          return n.flags |= 128, _c(n), null;
        break;
      case 13:
        var l = n.memoizedState;
        if (l !== null) {
          if (l.dehydrated !== null)
            return ir(n), n.flags |= 128, null;
          l = Lr(
            e,
            n,
            r,
            !1
          );
          var u = n.child.childLanes;
          return l || (r & u) !== 0 ? xg(e, n, r) : (ir(n), e = Ui(
            e,
            n,
            r
          ), e !== null ? e.sibling : null);
        }
        ir(n);
        break;
      case 19:
        if (n.flags & 128)
          return Wc(
            e,
            n,
            r
          );
        if (u = (e.flags & 128) !== 0, l = (r & n.childLanes) !== 0, l || (Lr(
          e,
          n,
          r,
          !1
        ), l = (r & n.childLanes) !== 0), u) {
          if (l)
            return Wc(
              e,
              n,
              r
            );
          n.flags |= 128;
        }
        if (u = n.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), Ol(n, Ft.current), l) break;
        return null;
      case 22:
        return n.lanes = 0, dg(
          e,
          n,
          r,
          n.pendingProps
        );
      case 24:
        Ki(n, Et, e.memoizedState.cache);
    }
    return Ui(e, n, r);
  }
  function kg(e, n, r) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps)
        Tt = !0;
      else {
        if (!ef(e, r) && (n.flags & 128) === 0)
          return Tt = !1, M2(
            e,
            n,
            r
          );
        Tt = (e.flags & 131072) !== 0;
      }
    else
      Tt = !1, Le && (n.flags & 1048576) !== 0 && Wh(n, Sl, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          var l = n.pendingProps;
          if (e = Zr(n.elementType), n.type = e, typeof e == "function")
            oc(e) ? (l = Yr(e, l), n.tag = 1, n = gg(
              null,
              n,
              e,
              l,
              r
            )) : (n.tag = 0, n = Fc(
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
                n.tag = 11, n = ug(
                  null,
                  n,
                  e,
                  l,
                  r
                );
                break e;
              } else if (u === _e) {
                n.tag = 14, n = cg(
                  null,
                  n,
                  e,
                  l,
                  r
                );
                break e;
              } else if (u === ne) {
                n.tag = 10, n.type = e, n = wg(
                  null,
                  n,
                  r
                );
                break e;
              }
            }
            throw n = be(e) || e, Error(o(306, n, ""));
          }
        }
        return n;
      case 0:
        return Fc(
          e,
          n,
          n.type,
          n.pendingProps,
          r
        );
      case 1:
        return l = n.type, u = Yr(
          l,
          n.pendingProps
        ), gg(
          e,
          n,
          l,
          u,
          r
        );
      case 3:
        e: {
          if (Si(
            n,
            n.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          l = n.pendingProps;
          var d = n.memoizedState;
          u = d.element, vc(e, n), Al(n, l, null, r);
          var y = n.memoizedState;
          if (l = y.cache, Ki(n, Et, l), l !== d.cache && hc(
            n,
            [Et],
            r,
            !0
          ), Nl(), l = y.element, d.isDehydrated)
            if (d = {
              element: l,
              isDehydrated: !1,
              cache: y.cache
            }, n.updateQueue.baseState = d, n.memoizedState = d, n.flags & 256) {
              n = bg(
                e,
                n,
                l,
                r
              );
              break e;
            } else if (l !== u) {
              u = In(
                Error(o(424)),
                n
              ), zl(u), n = bg(
                e,
                n,
                l,
                r
              );
              break e;
            } else
              for (e = n.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, ot = Vn(e.firstChild), Lt = n, Le = !0, Qi = null, qn = !0, r = dm(
                n,
                null,
                l,
                r
              ), n.child = r; r; )
                r.flags = r.flags & -3 | 134221824, r = r.sibling;
          else {
            if (Rr(), l === u) {
              n = Ui(
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
        return Oa(e, n), e === null ? (r = Fb(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = r : Le || (n.stateNode = jb(
          n.type,
          n.pendingProps,
          xt.current,
          n
        )) : n.memoizedState = Fb(
          n.type,
          e.memoizedProps,
          n.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return zi(n), e === null && Le && (l = n.stateNode = $b(
          n.type,
          n.pendingProps,
          xt.current
        ), Lt = n, qn = !0, u = ot, dr(n.type) ? (Kf = u, ot = Vn(l.firstChild)) : ot = u), Mt(
          e,
          n,
          n.pendingProps.children,
          r
        ), Oa(e, n), e === null && (n.flags |= 4194304), n.child;
      case 5:
        return e === null && Le && ((u = l = ot) && (l = Ck(
          l,
          n.type,
          n.pendingProps,
          qn
        ), l !== null ? (n.stateNode = l, Lt = n, ot = Vn(l.firstChild), qn = !1, u = !0) : u = !1), u || Pi(n)), zi(n), u = n.type, d = n.pendingProps, y = e !== null ? e.memoizedProps : null, l = d.children, qf(u, d) ? l = null : y !== null && qf(u, y) && (n.flags |= 32), n.memoizedState !== null && (u = Cc(
          e,
          n,
          S2,
          null,
          null,
          r
        ), Pa._currentValue = u), Oa(e, n), Mt(e, n, l, r), n.child;
      case 6:
        return e === null && Le && ((e = r = ot) && (r = Tk(
          r,
          n.pendingProps,
          qn
        ), r !== null ? (n.stateNode = r, Lt = n, ot = null, e = !0) : e = !1), e || Pi(n)), null;
      case 13:
        return xg(e, n, r);
      case 4:
        return Si(
          n,
          n.stateNode.containerInfo
        ), l = n.pendingProps, e === null ? n.child = $r(
          n,
          null,
          l,
          r
        ) : Mt(e, n, l, r), n.child;
      case 11:
        return ug(
          e,
          n,
          n.type,
          n.pendingProps,
          r
        );
      case 7:
        return l = n.pendingProps, Oa(e, n), Mt(e, n, l, r), n.child;
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
        return wg(e, n, r);
      case 9:
        return u = n.type._context, l = n.pendingProps.children, Br(n), u = Yt(u), l = l(u), n.flags |= 1, Mt(e, n, l, r), n.child;
      case 14:
        return cg(
          e,
          n,
          n.type,
          n.pendingProps,
          r
        );
      case 15:
        return fg(
          e,
          n,
          n.type,
          n.pendingProps,
          r
        );
      case 19:
        return Wc(e, n, r);
      case 31:
        return O2(e, n, r);
      case 22:
        return dg(
          e,
          n,
          r,
          n.pendingProps
        );
      case 24:
        return Br(n), l = Yt(Et), e === null ? (u = bc(), u === null && (u = it, d = mc(), u.pooledCache = d, d.refCount++, d !== null && (u.pooledCacheLanes |= r), u = d), n.memoizedState = { parent: l, cache: u }, yc(n), Ki(n, Et, u)) : ((e.lanes & r) !== 0 && (vc(e, n), Al(n, null, null, r), Nl()), u = e.memoizedState, d = n.memoizedState, u.parent !== l ? (u = { parent: l, cache: l }, n.memoizedState = u, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = u), Ki(n, Et, l)) : (l = d.cache, Ki(n, Et, l), l !== u.cache && hc(
          n,
          [Et],
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
        }), l = n.pendingProps, l.name != null && l.name !== "auto" ? n.flags |= e === null ? 18882560 : 18874368 : Le && Yo(n), e !== null && e.memoizedProps.name !== l.name ? n.flags |= 4194816 : Oa(e, n), Mt(e, n, l.children, r), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(o(156, n.tag));
  }
  function Li(e) {
    e.flags |= 4;
  }
  function tf(e, n, r, l, u) {
    var d;
    if ((d = (e.mode & 32) !== 0) && (d = r === null ? Kb(n, l) : Kb(n, l) && (l.src !== r.src || l.srcSet !== r.srcSet)), d) {
      if (e.flags |= 16777216, (u & 335544128) === u)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (ib()) e.flags |= 8192;
        else
          throw qr = Jo, xc;
    } else e.flags &= -16777217;
  }
  function Sg(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Jb(n))
      if (ib()) e.flags |= 8192;
      else
        throw qr = Jo, xc;
  }
  function bs(e, n) {
    n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? Kp() : 536870912, e.lanes |= n, La |= n);
  }
  function Ll(e, n) {
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
  function R2(e, n, r) {
    var l = n.pendingProps;
    switch (cc(n), n.tag) {
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
        return r = n.stateNode, l = null, e !== null && (l = e.memoizedState.cache), n.memoizedState.cache !== l && (n.flags |= 2048), Di(Et), Mn(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (_a(n) ? Li(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, dc())), st(n), null;
      case 26:
        var u = n.type, d = n.memoizedState;
        return e === null ? (Li(n), d !== null ? (st(n), Sg(n, d)) : (st(n), tf(
          n,
          u,
          null,
          l,
          r
        ))) : d ? d !== e.memoizedState ? (Li(n), st(n), Sg(n, d)) : (st(n), n.flags &= -16777217) : (e = e.memoizedProps, e !== l && Li(n), st(n), tf(
          n,
          u,
          e,
          l,
          r
        )), null;
      case 27:
        if (Rn(n), r = xt.current, u = n.type, e !== null && n.stateNode != null)
          e.memoizedProps !== l && Li(n);
        else {
          if (!l) {
            if (n.stateNode === null)
              throw Error(o(166));
            return st(n), n.subtreeFlags &= -33554433, null;
          }
          e = un.current, _a(n) ? tm(n) : (e = $b(u, l, r), n.stateNode = e, Li(n));
        }
        return st(n), n.subtreeFlags &= -33554433, null;
      case 5:
        if (Rn(n), u = n.type, e !== null && n.stateNode != null)
          e.memoizedProps !== l && Li(n);
        else {
          if (!l) {
            if (n.stateNode === null)
              throw Error(o(166));
            return st(n), n.subtreeFlags &= -33554433, null;
          }
          if (d = un.current, _a(n))
            tm(n);
          else {
            var y = Xl(
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
            d[Vt] = n, d[fn] = l;
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
            e: switch (Qt(d, u, l), u) {
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
            l && Li(n);
          }
        }
        return st(n), n.subtreeFlags &= -33554433, tf(
          n,
          n.type,
          e === null ? null : e.memoizedProps,
          n.pendingProps,
          r
        ), null;
      case 6:
        if (e && n.stateNode != null)
          e.memoizedProps !== l && Li(n);
        else {
          if (typeof l != "string" && n.stateNode === null)
            throw Error(o(166));
          if (e = xt.current, _a(n)) {
            if (e = n.stateNode, r = n.memoizedProps, l = null, u = Lt, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  l = u.memoizedProps;
              }
            e[Vt] = n, e = !!(e.nodeValue === r || l !== null && l.suppressHydrationWarning === !0 || kb(e.nodeValue, r)), e || Pi(n, !0);
          } else
            e = Xl(e).createTextNode(
              l
            ), e[Vt] = n, n.stateNode = e;
        }
        return st(n), null;
      case 31:
        if (r = n.memoizedState, e === null || e.memoizedState !== null) {
          if (l = _a(n), r !== null) {
            if (e === null) {
              if (!l) throw Error(o(318));
              if (e = n.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[Vt] = n;
            } else
              Rr(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            st(n), e = !1;
          } else
            r = dc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = r), e = !0;
          if (!e)
            return n.flags & 256 ? (Sn(n), n) : (Sn(n), null);
          if ((n.flags & 128) !== 0)
            throw Error(o(558));
        }
        return st(n), null;
      case 13:
        if (l = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (u = _a(n), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(o(318));
              if (u = n.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[Vt] = n;
            } else
              Rr(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            st(n), u = !1;
          } else
            u = dc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return n.flags & 256 ? (Sn(n), n) : (Sn(n), null);
        }
        return Sn(n), (n.flags & 128) !== 0 ? (n.lanes = r, n) : (r = l !== null, e = e !== null && e.memoizedState !== null, r && (l = n.child, u = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (u = l.alternate.memoizedState.cachePool.pool), d = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (d = l.memoizedState.cachePool.pool), d !== u && (l.flags |= 2048)), r !== e && r && (n.child.flags |= 8192), bs(n, n.updateQueue), st(n), null);
      case 4:
        return Mn(), e === null && Lf(n.stateNode.containerInfo), n.flags |= 67108864, st(n), null;
      case 10:
        return Di(n.type), st(n), null;
      case 19:
        if (jc(n), l = n.memoizedState, l === null) return st(n), null;
        if (u = (n.flags & 128) !== 0, d = l.rendering, d === null)
          if (u) Ll(l, !1);
          else {
            if (vt !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = n.child; e !== null; ) {
                if (d = ns(e), d !== null) {
                  for (n.flags |= 128, Ll(l, !1), e = d.updateQueue, n.updateQueue = e, bs(n, e), n.subtreeFlags = 0, e = r, r = n.child; r !== null; )
                    Ph(r, e), r = r.sibling;
                  return Ol(
                    n,
                    Ft.current & 1 | 2
                  ), Le && Ai(n, l.treeForkCount), n.child;
                }
                e = e.sibling;
              }
            l.tail !== null && Ot() > Ts && (n.flags |= 128, u = !0, Ll(l, !1), n.lanes = 4194304);
          }
        else {
          if (!u)
            if (e = ns(d), e !== null) {
              if (n.flags |= 128, u = !0, e = e.updateQueue, n.updateQueue = e, bs(n, e), Ll(l, !0), l.tail === null && l.tailMode !== "collapsed" && l.tailMode !== "visible" && !d.alternate && !Le)
                return st(n), null;
            } else
              2 * Ot() - l.renderingStartTime > Ts && r !== 536870912 && (n.flags |= 128, u = !0, Ll(l, !1), n.lanes = 4194304);
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
          return l.rendering = e, l.tail = e.sibling, l.renderingStartTime = Ot(), e.sibling = null, d = Ft.current, d = u ? d & 1 | 2 : d & 1, l.tailMode === "visible" || l.tailMode === "collapsed" || !r || Le ? Ol(n, d) : (r = d, Fe(Gt, n), Fe(Ft, r), Wt === null && (Wt = n)), Le && Ai(n, l.treeForkCount), e;
        }
        return st(n), null;
      case 22:
      case 23:
        return Sn(n), zc(), l = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (n.flags |= 8192) : l && (n.flags |= 8192), l ? (r & 536870912) !== 0 && (n.flags & 128) === 0 && (st(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : st(n), r = n.updateQueue, r !== null && bs(n, r.retryQueue), r = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== r && (n.flags |= 2048), e !== null && ut(Hr), null;
      case 24:
        return r = null, e !== null && (r = e.memoizedState.cache), n.memoizedState.cache !== r && (n.flags |= 2048), Di(Et), st(n), null;
      case 25:
        return null;
      case 30:
        return n.flags |= 33554432, st(n), null;
    }
    throw Error(o(156, n.tag));
  }
  function U2(e, n) {
    switch (cc(n), n.tag) {
      case 1:
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return Di(Et), Mn(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return Rn(n), null;
      case 31:
        if (n.memoizedState !== null) {
          if (Sn(n), n.alternate === null)
            throw Error(o(340));
          Rr();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 13:
        if (Sn(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(o(340));
          Rr();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return jc(n), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, e = n.memoizedState, e !== null && (e.rendering = null, e.tail = null), n.flags |= 4, n) : null;
      case 4:
        return Mn(), null;
      case 10:
        return Di(n.type), null;
      case 22:
      case 23:
        return Sn(n), zc(), e !== null && ut(Hr), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 24:
        return Di(Et), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function zg(e, n) {
    switch (cc(n), n.tag) {
      case 3:
        Di(Et), Mn();
        break;
      case 26:
      case 27:
      case 5:
        Rn(n);
        break;
      case 4:
        Mn();
        break;
      case 31:
        n.memoizedState !== null && Sn(n);
        break;
      case 13:
        Sn(n);
        break;
      case 19:
        jc(n);
        break;
      case 10:
        Di(n.type);
        break;
      case 22:
      case 23:
        Sn(n), zc(), e !== null && ut(Hr);
        break;
      case 24:
        Di(Et);
    }
  }
  function Bl(e, n) {
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
      We(n, n.return, k);
    }
  }
  function ar(e, n, r) {
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
              } catch ($) {
                We(
                  u,
                  _,
                  $
                );
              }
            }
          }
          l = l.next;
        } while (l !== d);
      }
    } catch ($) {
      We(n, n.return, $);
    }
  }
  function _g(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var r = e.stateNode;
      try {
        hm(n, r);
      } catch (l) {
        We(e, e.return, l);
      }
    }
  }
  function jg(e, n, r) {
    r.props = Yr(
      e.type,
      e.memoizedProps
    ), r.state = e.memoizedState;
    try {
      r.componentWillUnmount();
    } catch (l) {
      We(e, n, l);
    }
  }
  function ui(e, n) {
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
            var u = e.stateNode, d = Ci(e.memoizedProps, u);
            (u.ref === null || u.ref.name !== d) && (u.ref = Db(d)), l = u.ref;
            break;
          case 7:
            if (e.stateNode === null) {
              var y = new Cn(e);
              b(
                e.child,
                !1,
                jk,
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
      We(e, n, k);
    }
  }
  function Xt(e, n) {
    var r = e.ref, l = e.refCleanup;
    if (r !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (u) {
          We(e, n, u);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof r == "function")
        try {
          r(null);
        } catch (u) {
          We(e, n, u);
        }
      else r.current = null;
  }
  function xs(e, n) {
    if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && n !== null)
      for (var r = 0; r < n.length; r++)
        Ib(
          e.stateNode,
          n[r]
        );
  }
  function Eg(e) {
    for (var n = e.return; n !== null && (rf(n) && Ib(e.stateNode, n.stateNode), !nf(n)); )
      n = n.return;
  }
  function Il(e) {
    for (var n = e.return; n !== null && (rf(n) && Ek(e.stateNode, n.stateNode), !nf(n)); )
      n = n.return;
  }
  function nf(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 27;
  }
  function rf(e) {
    return e && e.tag === 7 && e.stateNode !== null;
  }
  function af(e) {
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
      We(e, e.return, u);
    }
  }
  function lf(e, n, r) {
    try {
      var l = e.stateNode;
      sk(l, e.type, r, n), l[fn] = n;
    } catch (u) {
      We(e, e.return, u);
    }
  }
  function Cg(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && dr(e.type) || e.tag === 4;
  }
  function of(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Cg(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && dr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function sf(e, n, r, l) {
    var u = e.tag;
    if (u === 5 || u === 6)
      u = e.stateNode, n ? (r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r).insertBefore(u, n) : (n = r.nodeType === 9 ? r.body : r.nodeName === "HTML" ? r.ownerDocument.body : r, n.appendChild(u), r = r._reactRootContainer, r != null || n.onclick !== null || (n.onclick = li)), xs(e, l), Ye = !0;
    else if (u !== 4 && (u === 27 && (xs(e, l), l = null, dr(e.type) && (r = e.stateNode, n = null)), e = e.child, e !== null))
      for (sf(
        e,
        n,
        r,
        l
      ), e = e.sibling; e !== null; )
        sf(
          e,
          n,
          r,
          l
        ), e = e.sibling;
  }
  function ys(e, n, r, l) {
    var u = e.tag;
    if (u === 5 || u === 6)
      u = e.stateNode, n ? r.insertBefore(u, n) : r.appendChild(u), xs(e, l), Ye = !0;
    else if (u !== 4 && (u === 27 && (xs(e, l), l = null, dr(e.type) && (r = e.stateNode)), e = e.child, e !== null))
      for (ys(
        e,
        n,
        r,
        l
      ), e = e.sibling; e !== null; )
        ys(
          e,
          n,
          r,
          l
        ), e = e.sibling;
  }
  function Tg(e) {
    var n = e.stateNode, r = e.memoizedProps;
    try {
      for (var l = e.type, u = n.attributes; u.length; )
        n.removeAttributeNode(u[0]);
      Qt(n, l, r), n[Vt] = e, n[fn] = r;
    } catch (d) {
      We(e, e.return, d);
    }
  }
  var vs = !1, zn = null;
  function Ng(e) {
    (e.tag === 30 || (e.subtreeFlags & 33554432) !== 0) && (vs = !0);
  }
  var ci = null;
  function Ag() {
    var e = ci;
    return ci = null, e;
  }
  var pn = 0;
  function Da(e, n, r, l, u) {
    return pn = 0, Og(
      e.child,
      n,
      r,
      l,
      u
    );
  }
  function Og(e, n, r, l, u) {
    for (var d = !1; e !== null; ) {
      if (e.tag === 5) {
        var y = e.stateNode;
        if (l !== null) {
          var k = Yf(y);
          l.push(k), k.view && (d = !0);
        } else
          d || Yf(y).view && (d = !0);
        vs = !0, Ab(
          y,
          pn === 0 ? n : n + "_" + pn,
          r
        ), pn++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && u || Og(
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
  function fi(e, n) {
    for (; e !== null; )
      e.tag === 5 ? Ob(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && n || fi(
        e.child,
        n
      )), e = e.sibling;
  }
  function ws(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if ((e.tag !== 22 || e.memoizedState === null) && (ws(e), e.tag === 30 && (e.flags & 18874368) !== 0 && e.stateNode.paired)) {
          var n = e.memoizedProps;
          if (n.name == null || n.name === "auto")
            throw Error(o(544));
          var r = n.name;
          n = Ti(n.default, n.share), n !== "none" && (Da(
            e,
            r,
            n,
            null,
            !1
          ) || fi(e.child, !1));
        }
        e = e.sibling;
      }
  }
  function uf(e, n) {
    if (e.tag === 30) {
      var r = e.stateNode, l = e.memoizedProps, u = Ci(l, r), d = Ti(
        l.default,
        r.paired ? l.share : l.enter
      );
      d !== "none" ? Da(e, u, d, null, !1) ? (ws(e), r.paired || n || Za(e, l.onEnter)) : fi(e.child, !1) : ws(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        uf(e, n), e = e.sibling;
    else ws(e);
  }
  function cf(e) {
    if (zn !== null && zn.size !== 0) {
      var n = zn;
      if ((e.subtreeFlags & 18874368) !== 0)
        for (e = e.child; e !== null; ) {
          if (e.tag !== 22 || e.memoizedState === null) {
            if (e.tag === 30 && (e.flags & 18874368) !== 0) {
              var r = e.memoizedProps, l = r.name;
              if (l != null && l !== "auto") {
                var u = n.get(l);
                if (u !== void 0) {
                  var d = Ti(
                    r.default,
                    r.share
                  );
                  if (d !== "none" && (Da(
                    e,
                    l,
                    d,
                    null,
                    !1
                  ) ? (d = e.stateNode, u.paired = d, d.paired = u, Za(e, r.onShare)) : fi(e.child, !1)), n.delete(l), n.size === 0) break;
                }
              }
            }
            cf(e);
          }
          e = e.sibling;
        }
    }
  }
  function ff(e) {
    if (e.tag === 30) {
      var n = e.memoizedProps, r = Ci(n, e.stateNode), l = zn !== null ? zn.get(r) : void 0, u = Ti(
        n.default,
        l !== void 0 ? n.share : n.exit
      );
      u !== "none" && (Da(e, r, u, null, !1) ? l !== void 0 ? (u = e.stateNode, l.paired = u, u.paired = l, zn.delete(r), Za(e, n.onShare)) : Za(e, n.onExit) : fi(e.child, !1)), zn !== null && cf(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        ff(e), e = e.sibling;
    else
      zn !== null && cf(e);
  }
  function Dg(e) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var n = e.memoizedProps, r = Ci(n, e.stateNode);
        n = Ti(n.default, n.update), e.flags &= -5, n !== "none" && Da(
          e,
          r,
          n,
          e.memoizedState = [],
          !1
        );
      } else
        (e.subtreeFlags & 33554432) !== 0 && Dg(e);
      e = e.sibling;
    }
  }
  function df(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if (e.tag !== 22 || e.memoizedState === null) {
          if (e.tag === 30 && (e.flags & 18874368) !== 0) {
            var n = e.stateNode;
            n.paired !== null && (n.paired = null, fi(e.child, !1));
          }
          df(e);
        }
        e = e.sibling;
      }
  }
  function ks(e) {
    if (e.tag === 30)
      e.stateNode.paired = null, fi(e.child, !1), df(e);
    else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        ks(e), e = e.sibling;
    else df(e);
  }
  function Mg(e) {
    for (e = e.child; e !== null; )
      e.tag === 30 ? fi(e.child, !1) : (e.subtreeFlags & 33554432) !== 0 && Mg(e), e = e.sibling;
  }
  function pf(e, n, r, l, u, d, y) {
    for (var k = !1; n !== null; ) {
      if (n.tag === 5) {
        var _ = n.stateNode;
        if (d !== null && pn < d.length) {
          var R = d[pn], $ = Yf(_);
          (R.view || $.view) && (k = !0);
          var X;
          if (X = (e.flags & 4) === 0)
            if ($.clip) X = !0;
            else {
              X = R.rect;
              var D = $.rect;
              X = X.y !== D.y || X.x !== D.x || X.height !== D.height || X.width !== D.width;
            }
          X && (e.flags |= 4), $.abs ? $ = !R.abs : (R = R.rect, $ = $.rect, $ = R.height !== $.height || R.width !== $.width), $ && (e.flags |= 32);
        } else e.flags |= 32;
        (e.flags & 4) !== 0 && Ab(
          _,
          pn === 0 ? r : r + "_" + pn,
          u
        ), k && (e.flags & 4) !== 0 || (ci === null && (ci = []), ci.push(
          _,
          pn === 0 ? l : l + "_" + pn,
          n.memoizedProps
        )), pn++;
      } else (n.tag !== 22 || n.memoizedState === null) && (n.tag === 30 && y ? e.flags |= n.flags & 32 : pf(
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
  function Rg(e, n) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var r = e.memoizedProps, l = e.stateNode, u = Ci(r, l), d = Ti(r.default, r.update), y;
        y = e.memoizedState, e.memoizedState = null, l = e;
        var k = e.child;
        pn = 0, u = pf(
          l,
          k,
          u,
          u,
          d,
          y,
          !1
        ), (e.flags & 4) !== 0 && u && Za(e, r.onUpdate);
      } else
        (e.subtreeFlags & 33554432) !== 0 && Rg(e);
      e = e.sibling;
    }
  }
  var Bt = !1, Ke = !1, di = !1, hf = !1, Ug = typeof WeakSet == "function" ? WeakSet : Set, It = null, pi = !1, Hl = !1, Ss = !1, mf = !1;
  function L2(e, n, r) {
    if (e = e.containerInfo, Hf = Ka, e = Hh(e), ec(e)) {
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
            var k = 0, _ = -1, R = -1, $ = 0, X = 0, D = e, H = null;
            t: for (; ; ) {
              for (var ae; D !== l || d !== 0 && D.nodeType !== 3 || (_ = k + d), D !== y || u !== 0 && D.nodeType !== 3 || (R = k + u), D.nodeType === 3 && (k += D.nodeValue.length), (ae = D.firstChild) !== null; )
                H = D, D = ae;
              for (; ; ) {
                if (D === e) break t;
                if (H === l && ++$ === d && (_ = k), H === y && ++X === u && (R = k), (ae = D.nextSibling) !== null) break;
                D = H, H = D.parentNode;
              }
              D = ae;
            }
            l = _ === -1 || R === -1 ? null : { start: _, end: R };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Zf = { focusedElem: e, selectionRange: l }, Ka = !1, r = (r & 335544064) === r, It = n, n = r ? 9270 : 1024; It !== null; ) {
      if (e = It, r && (l = e.deletions, l !== null))
        for (d = 0; d < l.length; d++)
          r && ff(l[d]);
      if (e.alternate === null && (e.flags & 2) !== 0)
        r && Ng(e), zs(r);
      else {
        if (e.tag === 22) {
          if (l = e.alternate, e.memoizedState !== null) {
            l !== null && l.memoizedState === null && r && ff(l), zs(r);
            continue;
          } else if (l !== null && l.memoizedState !== null) {
            r && Ng(e), zs(r);
            continue;
          }
        }
        l = e.child, (e.subtreeFlags & n) !== 0 && l !== null ? (l.return = e, It = l) : (r && Dg(e), zs(r));
      }
    }
    zn = null;
  }
  function zs(e) {
    for (; It !== null; ) {
      var n = It, r = e, l = n.alternate, u = n.flags;
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
              var y = Yr(
                n.type,
                u
              );
              r = d.getSnapshotBeforeUpdate(
                y,
                l
              ), d.__reactInternalSnapshotBeforeUpdate = r;
            } catch (k) {
              We(n, n.return, k);
            }
          }
          break;
        case 3:
          if ((u & 1024) !== 0) {
            if (l = n.stateNode.containerInfo, r = l.nodeType, r === 9)
              Xf(l);
            else if (r === 1)
              switch (l.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  Xf(l);
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
          r && l !== null && (r = Ci(
            l.memoizedProps,
            l.stateNode
          ), u = n.memoizedProps, u = Ti(u.default, u.update), u !== "none" && Da(
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
        l.return = n.return, It = l;
        break;
      }
      It = n.return;
    }
  }
  function Lg(e, n, r) {
    var l = r.flags;
    switch (r.tag) {
      case 0:
      case 11:
      case 15:
        hi(e, r), l & 4 && Bl(5, r);
        break;
      case 1:
        if (hi(e, r), l & 4)
          if (e = r.stateNode, n === null)
            try {
              e.componentDidMount();
            } catch (y) {
              We(r, r.return, y);
            }
          else {
            var u = Yr(
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
              We(
                r,
                r.return,
                y
              );
            }
          }
        l & 64 && _g(r), l & 512 && ui(r, r.return);
        break;
      case 3:
        if (hi(e, r), l & 64 && (e = r.updateQueue, e !== null)) {
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
            hm(e, n);
          } catch (y) {
            We(r, r.return, y);
          }
        }
        break;
      case 27:
        n === null && l & 4 && Tg(r);
      case 26:
      case 5:
        hi(e, r), n === null && l & 4 && af(r), l & 512 && ui(r, r.return);
        break;
      case 12:
        hi(e, r);
        break;
      case 31:
        hi(e, r), l & 4 && Zg(e, r);
        break;
      case 13:
        hi(e, r), l & 4 && qg(e, r), l & 64 && (e = r.memoizedState, e !== null && (e = e.dehydrated, e !== null && (r = Q2.bind(
          null,
          r
        ), Nk(e, r))));
        break;
      case 22:
        if (l = r.memoizedState !== null || Bt, !l) {
          var d = n !== null && n.memoizedState !== null || Ke;
          n = Bt, u = Ke, Bt = l, (Ke = d) && !u ? (l = 2, (r.subtreeFlags & 8772) !== 0 && (l |= 1), ei(
            e,
            r,
            l
          )) : hi(e, r), Bt = n, Ke = u;
        }
        break;
      case 30:
        hi(e, r), l & 512 && ui(r, r.return);
        break;
      case 7:
        l & 512 && ui(r, r.return);
      default:
        hi(e, r);
    }
  }
  function gf(e, n) {
    for (e = e.child; e !== null; )
      Bg(e, n), e = e.sibling;
  }
  function Bg(e, n) {
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
          We(e, e.return, _);
        }
        bf(e, n);
        break;
      case 6:
        try {
          e.stateNode.nodeValue = n ? "" : e.memoizedProps, Ye = !0;
        } catch (_) {
          We(e, e.return, _);
        }
        break;
      case 18:
        try {
          var k = e.stateNode;
          n ? Nb(k, !0) : Nb(e.stateNode, !1);
        } catch (_) {
          We(e, e.return, _);
        }
        break;
      case 22:
      case 23:
        e.memoizedState === null && gf(e, n);
        break;
      default:
        gf(e, n);
    }
  }
  function bf(e, n) {
    if (e.subtreeFlags & 67108864)
      for (e = e.child; e !== null; ) {
        e: {
          var r = e, l = n;
          switch (r.tag) {
            case 4:
              Bg(r, l);
              break e;
            case 22:
              r.memoizedState === null && bf(r, l);
              break e;
            default:
              bf(r, l);
          }
        }
        e = e.sibling;
      }
  }
  function Ig(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Ig(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && To(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var ct = null, hn = !1;
  function Jn(e, n, r) {
    for (r = r.child; r !== null; )
      Hg(e, n, r), r = r.sibling;
  }
  function Hg(e, n, r) {
    if (lt && typeof lt.onCommitFiberUnmount == "function")
      try {
        lt.onCommitFiberUnmount(ze, r);
      } catch {
      }
    switch (r.tag) {
      case 26:
        Ke || Xt(r, n), Jn(
          e,
          n,
          r
        ), r.memoizedState ? r.memoizedState.count-- : r.stateNode && !Ke && (r = r.stateNode, r.parentNode.removeChild(r));
        break;
      case 27:
        Ke || Xt(r, n), Il(r);
        var l = ct, u = hn;
        dr(r.type) && (ct = r.stateNode, hn = !1), Jn(
          e,
          n,
          r
        ), Vb(
          r.stateNode,
          r.type,
          r.memoizedProps
        ), ct = l, hn = u;
        break;
      case 5:
        Ke || Xt(r, n), Il(r);
      case 6:
        if (r.tag === 6 && Il(r), l = ct, u = hn, ct = null, Jn(
          e,
          n,
          r
        ), ct = l, hn = u, ct !== null)
          if (hn)
            try {
              (ct.nodeType === 9 ? ct.body : ct.nodeName === "HTML" ? ct.ownerDocument.body : ct).removeChild(r.stateNode), Ye = !0;
            } catch (d) {
              We(
                r,
                n,
                d
              );
            }
          else
            try {
              ct.removeChild(r.stateNode), Ye = !0;
            } catch (d) {
              We(
                r,
                n,
                d
              );
            }
        break;
      case 18:
        ct !== null && (hn ? (e = ct, Tb(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          r.stateNode
        ), Ja(e)) : Tb(ct, r.stateNode));
        break;
      case 4:
        l = ct, u = hn, ct = r.stateNode.containerInfo, hn = !0, Jn(
          e,
          n,
          r
        ), ct = l, hn = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ar(2, r, n), Ke || ar(4, r, n), Jn(
          e,
          n,
          r
        );
        break;
      case 1:
        Ke || (Xt(r, n), l = r.stateNode, typeof l.componentWillUnmount == "function" && jg(
          r,
          n,
          l
        )), Jn(
          e,
          n,
          r
        );
        break;
      case 21:
        Jn(
          e,
          n,
          r
        );
        break;
      case 22:
        Ke = (l = Ke) || r.memoizedState !== null, Jn(
          e,
          n,
          r
        ), Ke = l;
        break;
      case 30:
        Xt(r, n), Jn(
          e,
          n,
          r
        );
        break;
      case 7:
        Ke || Xt(r, n), Jn(
          e,
          n,
          r
        );
        break;
      default:
        Jn(
          e,
          n,
          r
        );
    }
  }
  function Zg(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Ja(e);
      } catch (r) {
        We(n, n.return, r);
      }
    }
  }
  function qg(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Ja(e);
      } catch (r) {
        We(n, n.return, r);
      }
  }
  function B2(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new Ug()), n;
      case 22:
        return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new Ug()), n;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function _s(e, n) {
    var r = B2(e);
    n.forEach(function(l) {
      if (!r.has(l)) {
        r.add(l);
        var u = P2.bind(null, e, l);
        l.then(u, u);
      }
    });
  }
  function an(e, n, r) {
    var l = n.deletions;
    if (l !== null)
      for (var u = 0; u < l.length; u++) {
        var d = l[u], y = e, k = n, _ = k;
        e: for (; _ !== null; ) {
          switch (_.tag) {
            case 27:
              if (dr(_.type)) {
                ct = _.stateNode, hn = !1;
                break e;
              }
              break;
            case 5:
              ct = _.stateNode, hn = !1;
              break e;
            case 3:
            case 4:
              ct = _.stateNode.containerInfo, hn = !0;
              break e;
          }
          _ = _.return;
        }
        if (ct === null) throw Error(o(160));
        Hg(y, k, d), ct = null, hn = !1, y = d.alternate, y !== null && (y.return = null), d.return = null;
      }
    if (n.subtreeFlags & 13886)
      for (n = n.child; n !== null; )
        $g(n, e, r), n = n.sibling;
  }
  var Wn = null;
  function $g(e, n, r) {
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
        an(n, e, r), ln(e), u & 4 && (ar(3, e, e.return), Bl(3, e), ar(5, e, e.return));
        break;
      case 1:
        an(n, e, r), ln(e), u & 512 && (Ke || l === null || Xt(l, l.return)), u & 64 && Bt && (e = e.updateQueue, e !== null && (n = e.callbacks, n !== null && (r = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = r === null ? n : r.concat(n))));
        break;
      case 26:
        if (d = Wn, an(n, e, r), ln(e), u & 512 && (Ke || l === null || Xt(l, l.return)), u & 4)
          if (u = l !== null ? l.memoizedState : null, r = e.memoizedState, l === null)
            if (r === null)
              if (e.stateNode === null)
                if (Bt)
                  e.stateNode = jb(
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
                        l = u.getElementsByTagName("title")[0], (!l || l[dl] || l[Vt] || l.namespaceURI === "http://www.w3.org/2000/svg" || l.hasAttribute("itemprop")) && (l = u.createElement(n), u.head.insertBefore(
                          l,
                          u.querySelector("head > title")
                        )), Qt(l, n, r), l[Vt] = e, Ut(l), n = l;
                        break e;
                      case "link":
                        if (d = Pb(
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
                        l = u.createElement(n), Qt(l, n, r), u.head.appendChild(l);
                        break;
                      case "meta":
                        if (d = Pb(
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
                        l = u.createElement(n), Qt(l, n, r), u.head.appendChild(l);
                        break;
                      default:
                        throw Error(o(468, n));
                    }
                    l[Vt] = e, Ut(l), n = l;
                  }
                  e.stateNode = n;
                }
              else
                Bt || td(d, e.type, e.stateNode);
            else
              e.stateNode = Qb(
                d,
                r,
                e.memoizedProps
              );
          else
            u !== r ? (u === null ? (n = l.stateNode, n === null || Ke || n.parentNode.removeChild(n)) : u.count--, r === null ? Bt || td(d, e.type, e.stateNode) : Qb(d, r, e.memoizedProps)) : r === null && e.stateNode !== null && lf(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        break;
      case 27:
        an(n, e, r), ln(e), u & 512 && (Ke || l === null || Xt(l, l.return)), l !== null && u & 4 && lf(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (d = di, di = !1, an(n, e, r), di = d, ln(e), u & 512 && (Ke || l === null || Xt(l, l.return)), e.flags & 32) {
          n = e.stateNode;
          try {
            ma(n, ""), Ye = !0;
          } catch ($) {
            We(e, e.return, $);
          }
        }
        u & 4 && e.stateNode != null && (n = e.memoizedProps, lf(
          e,
          n,
          l !== null ? l.memoizedProps : n
        )), u & 1024 && (hf = !0);
        break;
      case 6:
        if (an(n, e, r), ln(e), u & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          n = e.memoizedProps, r = e.stateNode;
          try {
            r.nodeValue = n, Ye = !0;
          } catch ($) {
            We(e, e.return, $);
          }
        }
        break;
      case 3:
        if (Ye = !1, Hs = null, d = Wn, Wn = Ql(n.containerInfo), an(n, e, r), Wn = d, ln(e), u & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Ja(n.containerInfo);
          } catch ($) {
            We(e, e.return, $);
          }
        hf && (hf = !1, Vg(e)), Ye = !1;
        break;
      case 4:
        u = di, di = Bt, l = ch(), d = Wn, Wn = Ql(
          e.stateNode.containerInfo
        ), an(n, e, r), ln(e), Wn = d, Ye && Hl && (Ss = !0), Ye = l, di = u;
        break;
      case 12:
        an(n, e, r), ln(e);
        break;
      case 31:
        an(n, e, r), ln(e), u & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, _s(e, n)));
        break;
      case 13:
        an(n, e, r), ln(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Cs = Ot()), u & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, _s(e, n)));
        break;
      case 22:
        d = e.memoizedState !== null, y = l !== null && l.memoizedState !== null;
        var k = Bt, _ = Ke, R = di;
        Bt = k || d, di = R || d, Ke = _ || y, an(n, e, r), Ke = _, di = R, Bt = k, ln(e), u & 8192 && (n = e.stateNode, n._visibility = d ? n._visibility & -2 : n._visibility | 1, !d || l === null || y || Bt || Ke || (n = y || Ke, r = Bt, l = Ke, Bt = d || Bt, Ke = n, lr(e, 2), Bt = r, Ke = l), !d && di || gf(e, d)), u & 4 && (n = e.updateQueue, n !== null && (r = n.retryQueue, r !== null && (n.retryQueue = null, _s(e, r))));
        break;
      case 19:
        an(n, e, r), ln(e), u & 4 && (n = e.updateQueue, n !== null && (e.updateQueue = null, _s(e, n)));
        break;
      case 30:
        u & 512 && (Ke || l === null || Xt(l, l.return)), u = ch(), d = Hl, y = (r & 335544064) === r, k = e.memoizedProps, Hl = y && Ti(
          k.default,
          k.update
        ) !== "none", an(n, e, r), ln(e), y && l !== null && Ye && (e.flags |= 4), Hl = d, Ye = u;
        break;
      case 21:
        break;
      case 7:
        u & 512 && (Ke || l === null || Xt(l, l.return)), l && l.stateNode !== null && (l.stateNode._fragmentFiber = e);
      default:
        an(n, e, r), ln(e);
    }
  }
  function ln(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var r, l = e.return; l !== null; ) {
          if (Cg(l)) {
            r = l;
            break;
          }
          l = l.return;
        }
        l = null;
        for (var u = e.return; u !== null; ) {
          if (rf(u)) {
            var d = u.stateNode;
            l === null ? l = [d] : l.push(d);
          }
          if (nf(u)) break;
          u = u.return;
        }
        var y = l;
        if (r == null) throw Error(o(160));
        switch (r.tag) {
          case 27:
            var k = r.stateNode, _ = of(e);
            ys(
              e,
              _,
              k,
              y
            );
            break;
          case 5:
            var R = r.stateNode;
            r.flags & 32 && (ma(R, ""), r.flags &= -33);
            var $ = of(e);
            ys(
              e,
              $,
              R,
              y
            );
            break;
          case 3:
          case 4:
            var X = r.stateNode.containerInfo, D = of(e);
            sf(
              e,
              D,
              X,
              y
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (H) {
        We(e, e.return, H);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Vg(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        Vg(n), n.tag === 5 && n.flags & 1024 && (n = n.stateNode, Ka = !0, n.reset(), Ka = !1), e = e.sibling;
      }
  }
  function Ma(e, n) {
    if (n.subtreeFlags & 9270)
      for (n = n.child; n !== null; )
        Yg(n, e), n = n.sibling;
    else Rg(n);
  }
  function Yg(e, n) {
    var r = e.alternate;
    if (r === null) uf(e, !1);
    else
      switch (e.tag) {
        case 3:
          if (mf = pi = !1, Ag(), Ma(n, e), !pi && !Ss) {
            if (e = ci, e !== null)
              for (var l = 0; l < e.length; l += 3) {
                r = e[l];
                var u = e[l + 1];
                Ob(r, e[l + 2]), r = r.ownerDocument.documentElement, r !== null && r.animate(
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
            )), mf = !0;
          }
          ci = null;
          break;
        case 5:
          Ma(n, e);
          break;
        case 4:
          l = pi, pi = !1, Ma(n, e), pi && (Ss = !0), pi = l;
          break;
        case 22:
          e.memoizedState === null && (r.memoizedState !== null ? uf(e, !1) : Ma(n, e));
          break;
        case 30:
          l = pi, u = Ag(), pi = !1, Ma(n, e), pi && (e.flags |= 4);
          var d = e.memoizedProps, y = e.stateNode;
          n = Ci(d, y), y = Ci(r.memoizedProps, y);
          var k = Ti(d.default, d.update);
          k === "none" ? n = !1 : (d = r.memoizedState, r.memoizedState = null, r = e.child, pn = 0, n = pf(
            e,
            r,
            n,
            y,
            k,
            d,
            !0
          ), pn !== (d === null ? 0 : d.length) && (e.flags |= 32)), (e.flags & 4) !== 0 && n ? (Za(
            e,
            e.memoizedProps.onUpdate
          ), ci = u) : u !== null && (u.push.apply(u, ci), ci = u), pi = (e.flags & 32) !== 0 ? !0 : l;
          break;
        default:
          Ma(n, e);
      }
  }
  function hi(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Lg(e, n.alternate, n), n = n.sibling;
  }
  function lr(e, n) {
    for (e = e.child; e !== null; ) {
      var r = e, l = n;
      switch (r.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ar(4, r, r.return), lr(
            r,
            l
          );
          break;
        case 1:
          Xt(r, r.return);
          var u = r.stateNode;
          typeof u.componentWillUnmount == "function" && jg(
            r,
            r.return,
            u
          ), lr(
            r,
            l
          );
          break;
        case 27:
          (l & 2) !== 0 && Vb(
            r.stateNode,
            r.type,
            r.memoizedProps
          );
        case 5:
          Xt(r, r.return), r.tag !== 5 && r.tag !== 27 || Il(r), lr(
            r,
            l
          );
          break;
        case 6:
          Il(r);
          break;
        case 26:
          Xt(r, r.return), u = r.stateNode, r.memoizedState !== null || u === null || Ke || u.parentNode.removeChild(u), lr(
            r,
            l
          );
          break;
        case 22:
          r.memoizedState === null && lr(
            r,
            l
          );
          break;
        case 30:
          Xt(r, r.return), lr(
            r,
            l
          );
          break;
        case 7:
          Xt(r, r.return);
        default:
          lr(
            r,
            l
          );
      }
      e = e.sibling;
    }
  }
  function ei(e, n, r) {
    for (r = (n.subtreeFlags & 8772) !== 0 ? r : r & -2, n = n.child; n !== null; ) {
      var l = n.alternate, u = e, d = n, y = d.flags, k = (r & 1) !== 0;
      switch (d.tag) {
        case 0:
        case 11:
        case 15:
          ei(
            u,
            d,
            r
          ), Bl(4, d);
          break;
        case 1:
          if (ei(
            u,
            d,
            r
          ), l = d, u = l.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch ($) {
              We(l, l.return, $);
            }
          if (l = d, u = l.updateQueue, u !== null) {
            var _ = l.stateNode;
            try {
              var R = u.shared.hiddenCallbacks;
              if (R !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < R.length; u++)
                  pm(R[u], _);
            } catch ($) {
              We(l, l.return, $);
            }
          }
          k && y & 64 && _g(d), ui(d, d.return);
          break;
        case 27:
          (r & 2) !== 0 && Tg(d);
        case 5:
          d.tag !== 5 && d.tag !== 27 || Eg(d), ei(
            u,
            d,
            r
          ), k && l === null && y & 4 && af(d), ui(d, d.return);
          break;
        case 6:
          Eg(d);
          break;
        case 26:
          _ = d.stateNode, d.memoizedState !== null || _ === null || Bt || td(
            Ql(_.ownerDocument),
            d.type,
            _
          ), ei(
            u,
            d,
            r
          ), k && l === null && y & 4 && af(d), ui(d, d.return);
          break;
        case 12:
          ei(
            u,
            d,
            r
          );
          break;
        case 31:
          ei(
            u,
            d,
            r
          ), k && y & 4 && Zg(u, d);
          break;
        case 13:
          ei(
            u,
            d,
            r
          ), k && y & 4 && qg(u, d);
          break;
        case 22:
          d.memoizedState === null && ei(
            u,
            d,
            r
          ), ui(d, d.return);
          break;
        case 30:
          ei(
            u,
            d,
            r
          ), ui(d, d.return);
          break;
        case 7:
          ui(d, d.return);
        default:
          ei(
            u,
            d,
            r
          );
      }
      n = n.sibling;
    }
  }
  function xf(e, n) {
    var r = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (r = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== r && (e != null && e.refCount++, r != null && _l(r));
  }
  function yf(e, n) {
    e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && _l(e));
  }
  function $n(e, n, r, l) {
    var u = (r & 335544064) === r;
    if (n.subtreeFlags & (u ? 10262 : 10256))
      for (n = n.child; n !== null; )
        Gg(
          e,
          n,
          r,
          l
        ), n = n.sibling;
    else u && Mg(n);
  }
  function Gg(e, n, r, l) {
    var u = (r & 335544064) === r;
    u && n.alternate === null && n.return !== null && n.return.alternate !== null && ks(n);
    var d = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        $n(
          e,
          n,
          r,
          l
        ), d & 2048 && Bl(9, n);
        break;
      case 1:
        $n(
          e,
          n,
          r,
          l
        );
        break;
      case 3:
        $n(
          e,
          n,
          r,
          l
        ), u && mf && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), d & 2048 && (d = null, n.alternate !== null && (d = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== d && (n.refCount++, d != null && _l(d)));
        break;
      case 12:
        if (d & 2048) {
          $n(
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
            We(n, n.return, R);
          }
        } else
          $n(
            e,
            n,
            r,
            l
          );
        break;
      case 31:
        $n(
          e,
          n,
          r,
          l
        );
        break;
      case 13:
        $n(
          e,
          n,
          r,
          l
        );
        break;
      case 23:
        break;
      case 22:
        y = n.stateNode, k = n.alternate, n.memoizedState !== null ? (u && k !== null && k.memoizedState === null && ks(k), y._visibility & 2 ? $n(
          e,
          n,
          r,
          l
        ) : Zl(
          e,
          n
        )) : (u && k !== null && k.memoizedState !== null && ks(n), y._visibility & 2 ? $n(
          e,
          n,
          r,
          l
        ) : (y._visibility |= 2, Ra(
          e,
          n,
          r,
          l,
          (n.subtreeFlags & 10256) !== 0 || !1
        ))), d & 2048 && xf(k, n);
        break;
      case 24:
        $n(
          e,
          n,
          r,
          l
        ), d & 2048 && yf(n.alternate, n);
        break;
      case 30:
        u && (d = n.alternate, d !== null && (fi(d.child, !0), fi(n.child, !0))), $n(
          e,
          n,
          r,
          l
        );
        break;
      default:
        $n(
          e,
          n,
          r,
          l
        );
    }
  }
  function Ra(e, n, r, l, u) {
    for (u = u && ((n.subtreeFlags & 10256) !== 0 || !1), n = n.child; n !== null; ) {
      var d = e, y = n, k = r, _ = l, R = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          Ra(
            d,
            y,
            k,
            _,
            u
          ), Bl(8, y);
          break;
        case 23:
          break;
        case 22:
          var $ = y.stateNode;
          y.memoizedState !== null ? $._visibility & 2 ? Ra(
            d,
            y,
            k,
            _,
            u
          ) : Zl(
            d,
            y
          ) : ($._visibility |= 2, Ra(
            d,
            y,
            k,
            _,
            u
          )), u && R & 2048 && xf(
            y.alternate,
            y
          );
          break;
        case 24:
          Ra(
            d,
            y,
            k,
            _,
            u
          ), u && R & 2048 && yf(y.alternate, y);
          break;
        default:
          Ra(
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
  function Zl(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var r = e, l = n, u = l.flags;
        switch (l.tag) {
          case 22:
            Zl(r, l), u & 2048 && xf(
              l.alternate,
              l
            );
            break;
          case 24:
            Zl(r, l), u & 2048 && yf(l.alternate, l);
            break;
          default:
            Zl(r, l);
        }
        n = n.sibling;
      }
  }
  var Gr = 8192;
  function Fr(e, n, r) {
    if (e.subtreeFlags & Gr)
      for (e = e.child; e !== null; )
        Fg(
          e,
          n,
          r
        ), e = e.sibling;
  }
  function Fg(e, n, r) {
    switch (e.tag) {
      case 26:
        Fr(
          e,
          n,
          r
        ), e.flags & Gr && (e.memoizedState !== null ? Vk(
          r,
          Wn,
          e.memoizedState,
          e.memoizedProps
        ) : (e = e.stateNode, (n & 335544128) === n && ex(r, e)));
        break;
      case 5:
        Fr(
          e,
          n,
          r
        ), e.flags & Gr && (e = e.stateNode, (n & 335544128) === n && ex(r, e));
        break;
      case 3:
      case 4:
        var l = Wn;
        Wn = Ql(e.stateNode.containerInfo), Fr(
          e,
          n,
          r
        ), Wn = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = Gr, Gr = 16777216, Fr(
          e,
          n,
          r
        ), Gr = l) : Fr(
          e,
          n,
          r
        ));
        break;
      case 30:
        if ((e.flags & Gr) !== 0 && (l = e.memoizedProps.name, l != null && l !== "auto")) {
          var u = e.stateNode;
          u.paired = null, zn === null && (zn = /* @__PURE__ */ new Map()), zn.set(l, u);
        }
        Fr(
          e,
          n,
          r
        );
        break;
      default:
        Fr(
          e,
          n,
          r
        );
    }
  }
  function Xg(e) {
    var n = e.alternate;
    if (n !== null && (e = n.child, e !== null)) {
      n.child = null;
      do
        n = e.sibling, e.sibling = null, e = n;
      while (e !== null);
    }
  }
  function ql(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var l = n[r];
          It = l, Pg(
            l,
            e
          );
        }
      Xg(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Qg(e), e = e.sibling;
  }
  function Qg(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        ql(e), e.flags & 2048 && ar(9, e, e.return);
        break;
      case 3:
        ql(e);
        break;
      case 12:
        ql(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, js(e)) : ql(e);
        break;
      default:
        ql(e);
    }
  }
  function js(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var r = 0; r < n.length; r++) {
          var l = n[r];
          It = l, Pg(
            l,
            e
          );
        }
      Xg(e);
    }
    for (e = e.child; e !== null; ) {
      switch (n = e, n.tag) {
        case 0:
        case 11:
        case 15:
          ar(8, n, n.return), js(n);
          break;
        case 22:
          r = n.stateNode, r._visibility & 2 && (r._visibility &= -3, js(n));
          break;
        default:
          js(n);
      }
      e = e.sibling;
    }
  }
  function Pg(e, n) {
    for (; It !== null; ) {
      var r = It;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          ar(8, r, n);
          break;
        case 23:
        case 22:
          if (r.memoizedState !== null && r.memoizedState.cachePool !== null) {
            var l = r.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          _l(r.memoizedState.cache);
      }
      if (l = r.child, l !== null) l.return = r, It = l;
      else
        e: for (r = e; It !== null; ) {
          l = It;
          var u = l.sibling, d = l.return;
          if (Ig(l), l === r) {
            It = null;
            break e;
          }
          if (u !== null) {
            u.return = d, It = u;
            break e;
          }
          It = d;
        }
    }
  }
  var I2 = {
    getCacheForType: function(e) {
      var n = Yt(Et), r = n.data.get(e);
      return r === void 0 && (r = e(), n.data.set(e, r)), r;
    },
    cacheSignal: function() {
      return Yt(Et).controller.signal;
    }
  }, H2 = typeof WeakMap == "function" ? WeakMap : Map, Xe = 0, it = null, Ie = null, Ze = 0, Je = 0, _n = null, or = !1, Ua = !1, vf = !1, Bi = 0, vt = 0, sr = 0, Xr = 0, Es = 0, jn = 0, La = 0, $l = null, mn = null, wf = !1, Cs = 0, Kg = 0, Ts = 1 / 0, Ns = null, ur = null, mt = 0, ti = null, Qr = null, mi = 0, kf = 0, Sf = null, Jg = null, Ba = null, Ia = null, Ha = null, Vl = 0, As = null;
  function En() {
    return (Xe & 2) !== 0 && Ze !== 0 ? Ze & -Ze : me.T !== null ? Df() : th();
  }
  function Wg() {
    if (jn === 0)
      if ((Ze & 536870912) === 0 || Le) {
        var e = $t;
        $t <<= 1, ($t & 3932160) === 0 && ($t = 262144), jn = e;
      } else jn = 536870912;
    return e = Gt.current, e !== null && (e.flags |= 32), jn;
  }
  function Za(e, n) {
    if (n != null) {
      var r = e.stateNode, l = r.ref;
      l === null && (l = r.ref = Db(
        Ci(e.memoizedProps, r)
      )), Ia === null && (Ia = []), Ia.push(n.bind(null, l));
    }
  }
  function gn(e, n, r) {
    (e === it && (Je === 2 || Je === 9) || e.cancelPendingCommit !== null) && (qa(e, 0), cr(
      e,
      Ze,
      jn,
      !1
    )), fl(e, r), ((Xe & 2) === 0 || e !== it) && (e === it && ((Xe & 2) === 0 && (Xr |= r), vt === 4 && cr(
      e,
      Ze,
      jn,
      !1
    )), gi(e));
  }
  function eb(e, n, r) {
    if ((Xe & 6) !== 0) throw Error(o(327));
    var l = !r && (n & 127) === 0 && (n & e.expiredLanes) === 0 || cl(e, n), u = l ? $2(e, n) : _f(e, n, !0), d = l;
    do {
      if (u === 0) {
        Ua && !l && cr(e, n, 0, !1);
        break;
      } else {
        if (r = e.current.alternate, d && !Z2(r)) {
          u = _f(e, n, !1), d = !1;
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
              u = $l;
              var _ = k.current.memoizedState.isDehydrated;
              if (_ && (qa(k, y).flags |= 256), y = _f(
                k,
                y,
                !1
              ), y !== 2 && y !== 6) {
                if (vf && !_) {
                  k.errorRecoveryDisabledLanes |= d, Xr |= d, u = 4;
                  break e;
                }
                d = mn, mn = u, d !== null && (mn === null ? mn = d : mn.push.apply(
                  mn,
                  d
                ));
              }
              u = y;
            }
            if (d = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          qa(e, 0), cr(e, n, 0, !0);
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
              cr(
                l,
                n,
                jn,
                !or
              );
              break e;
            case 2:
              mn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((n & 62914560) === n && (u = Cs + 300 - Ot(), 10 < u)) {
            if (cr(
              l,
              n,
              jn,
              !or
            ), Eo(l, 0, !0) !== 0) break e;
            mi = n, l.timeoutHandle = Vf(
              tb.bind(
                null,
                l,
                r,
                mn,
                Ns,
                wf,
                n,
                jn,
                Xr,
                La,
                or,
                d,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break e;
          }
          tb(
            l,
            r,
            mn,
            Ns,
            wf,
            n,
            jn,
            Xr,
            La,
            or,
            d,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    gi(e);
  }
  function tb(e, n, r, l, u, d, y, k, _, R, $, X, D, H) {
    e.timeoutHandle = -1;
    var ae = n.subtreeFlags, ge = (d & 335544064) === d;
    if (X = null, (ge || ae & 8192 || (ae & 16785408) === 16785408) && (X = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: li
    }, zn = null, Fg(
      n,
      d,
      X
    ), ge && (ae = X, ge = e.containerInfo, ge = (ge.nodeType === 9 ? ge : ge.ownerDocument).__reactViewTransition, ge != null && (ae.count++, ae.waitingForViewTransition = !0, ae = Jl.bind(ae), ge.finished.then(ae, ae))), ae = (d & 62914560) === d ? Cs - Ot() : (d & 4194048) === d ? Kg - Ot() : 0, ae = Yk(
      X,
      ae
    ), ae !== null)) {
      mi = d, e.cancelPendingCommit = ae(
        ub.bind(
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
          $,
          X,
          null,
          D,
          H
        )
      ), cr(e, d, y, !R);
      return;
    }
    ub(
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
      $,
      X
    );
  }
  function Z2(e) {
    for (var n = e; ; ) {
      var r = n.tag;
      if ((r === 0 || r === 11 || r === 15) && n.flags & 16384 && (r = n.updateQueue, r !== null && (r = r.stores, r !== null)))
        for (var l = 0; l < r.length; l++) {
          var u = r[l], d = u.getSnapshot;
          u = u.value;
          try {
            if (!kn(d(), u)) return !1;
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
  function cr(e, n, r, l) {
    n = Pp(e, n), n &= ~Es, n &= ~Xr, e.suspendedLanes |= n, e.pingedLanes &= ~n, l && (e.warmLanes |= n), l = e.expirationTimes;
    for (var u = n; 0 < u; ) {
      var d = 31 - ht(u), y = 1 << d;
      l[d] = -1, u &= ~y;
    }
    r !== 0 && Jp(e, r, n);
  }
  function Os() {
    return (Xe & 6) === 0 ? (Yl(0), !1) : !0;
  }
  function zf() {
    if (Ie !== null) {
      if (Je === 0)
        var e = Ie.return;
      else
        e = Ie, Oi = Ur = null, Ac(e), Ca = null, Cl = 0, e = Ie;
      for (; e !== null; )
        zg(e.alternate, e), e = e.return;
      Ie = null;
    }
  }
  function qa(e, n) {
    var r = e.timeoutHandle;
    return r !== -1 && (e.timeoutHandle = -1, fk(r)), r = e.cancelPendingCommit, r !== null && (e.cancelPendingCommit = null, r()), mi = 0, zf(), it = e, Ie = r = Ni(e.current, null), Ze = n, Je = 0, _n = null, or = !1, Ua = cl(e, n), vf = !1, La = jn = Es = Xr = sr = vt = 0, mn = $l = null, wf = !1, Bi = Pp(e, n), Ho(), r;
  }
  function nb(e, n) {
    Me = null, me.H = fs, n === Ea || n === Ko ? (n = um(), Je = 3) : n === xc ? (n = um(), Je = 4) : Je = n === Gc ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, _n = n, Ie === null && (vt = 1, ds(
      e,
      In(n, e.current)
    ));
  }
  function ib() {
    var e = Gt.current;
    return e === null ? !0 : (Ze & 4194048) === Ze ? Wt === null : (Ze & 62914560) === Ze || (Ze & 536870912) !== 0 ? e === Wt : !1;
  }
  function rb() {
    var e = me.H;
    return me.H = fs, e === null ? fs : e;
  }
  function ab() {
    var e = me.A;
    return me.A = I2, e;
  }
  function Ds() {
    vt = 4, or || (Ze & 4194048) !== Ze && Gt.current !== null || (Ua = !0), (sr & 134217727) === 0 && (Xr & 134217727) === 0 || it === null || cr(
      it,
      Ze,
      jn,
      !1
    );
  }
  function _f(e, n, r) {
    var l = Xe;
    Xe |= 2;
    var u = rb(), d = ab();
    (it !== e || Ze !== n) && (Ns = null, qa(e, n)), n = !1;
    var y = vt;
    e: do
      try {
        if (Je !== 0 && Ie !== null) {
          var k = Ie, _ = _n;
          switch (Je) {
            case 8:
              zf(), y = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Gt.current === null && (n = !0);
              var R = Je;
              if (Je = 0, _n = null, $a(e, k, _, R), r && Ua) {
                y = 0;
                break e;
              }
              break;
            default:
              R = Je, Je = 0, _n = null, $a(e, k, _, R);
          }
        }
        q2(), y = vt;
        break;
      } catch ($) {
        nb(e, $);
      }
    while (!0);
    return n && e.shellSuspendCounter++, Oi = Ur = null, Xe = l, me.H = u, me.A = d, Ie === null && (it = null, Ze = 0, Ho()), y;
  }
  function q2() {
    for (; Ie !== null; ) lb(Ie);
  }
  function $2(e, n) {
    var r = Xe;
    Xe |= 2;
    var l = rb(), u = ab();
    it !== e || Ze !== n ? (Ns = null, Ts = Ot() + 500, qa(e, n)) : Ua = cl(
      e,
      n
    );
    e: do
      try {
        if (Je !== 0 && Ie !== null) {
          n = Ie;
          var d = _n;
          t: switch (Je) {
            case 1:
              Je = 0, _n = null, $a(e, n, d, 1);
              break;
            case 2:
            case 9:
              if (om(d)) {
                Je = 0, _n = null, ob(n);
                break;
              }
              n = function() {
                Je !== 2 && Je !== 9 || it !== e || (Je = 7), gi(e);
              }, d.then(n, n);
              break e;
            case 3:
              Je = 7;
              break e;
            case 4:
              Je = 5;
              break e;
            case 7:
              om(d) ? (Je = 0, _n = null, ob(n)) : (Je = 0, _n = null, $a(e, n, d, 7));
              break;
            case 5:
              var y = null;
              switch (Ie.tag) {
                case 26:
                  y = Ie.memoizedState;
                case 5:
                case 27:
                  var k = Ie;
                  if (y ? Jb(y) : k.stateNode.complete) {
                    Je = 0, _n = null;
                    var _ = k.sibling;
                    if (_ !== null) Ie = _;
                    else {
                      var R = k.return;
                      R !== null ? (Ie = R, Ms(R)) : Ie = null;
                    }
                    break t;
                  }
              }
              Je = 0, _n = null, $a(e, n, d, 5);
              break;
            case 6:
              Je = 0, _n = null, $a(e, n, d, 6);
              break;
            case 8:
              zf(), vt = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        V2();
        break;
      } catch ($) {
        nb(e, $);
      }
    while (!0);
    return Oi = Ur = null, me.H = l, me.A = u, Xe = r, Ie !== null ? 0 : (it = null, Ze = 0, Ho(), vt);
  }
  function V2() {
    for (; Ie !== null && !Pn(); )
      lb(Ie);
  }
  function lb(e) {
    var n = kg(e.alternate, e, Bi);
    e.memoizedProps = e.pendingProps, n === null ? Ms(e) : Ie = n;
  }
  function ob(e) {
    var n = e, r = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = mg(
          r,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Ze
        );
        break;
      case 11:
        n = mg(
          r,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Ze
        );
        break;
      case 5:
        Ac(n);
        var l = n;
        l === Lt && (Le ? (Go(l), l.tag === 5 && l.stateNode != null && (ot = l.stateNode)) : (Go(l), Le = !0));
      default:
        zg(r, n), n = Ie = Ph(n, Bi), n = kg(r, n, Bi);
    }
    e.memoizedProps = e.pendingProps, n === null ? Ms(e) : Ie = n;
  }
  function $a(e, n, r, l) {
    Oi = Ur = null, Ac(n), Ca = null, Cl = 0;
    var u = n.return;
    try {
      if (A2(
        e,
        u,
        n,
        r,
        Ze
      )) {
        vt = 1, ds(
          e,
          In(r, e.current)
        ), Ie = null;
        return;
      }
    } catch (d) {
      if (u !== null) throw Ie = u, d;
      vt = 1, ds(
        e,
        In(r, e.current)
      ), Ie = null;
      return;
    }
    n.flags & 32768 ? (Le || l === 1 ? e = !0 : Ua || (Ze & 536870912) !== 0 ? e = !1 : (or = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Gt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), sb(n, e)) : Ms(n);
  }
  function Ms(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        sb(
          n,
          or
        );
        return;
      }
      e = n.return;
      var r = R2(
        n.alternate,
        n,
        Bi
      );
      if (r !== null) {
        Ie = r;
        return;
      }
      if (n = n.sibling, n !== null) {
        Ie = n;
        return;
      }
      Ie = n = e;
    } while (n !== null);
    vt === 0 && (vt = 5);
  }
  function sb(e, n) {
    do {
      var r = U2(e.alternate, e);
      if (r !== null) {
        r.flags &= 32767, Ie = r;
        return;
      }
      if (r = e.return, r !== null && (r.flags |= 32768, r.subtreeFlags = 0, r.deletions = null), !n && (e = e.sibling, e !== null)) {
        Ie = e;
        return;
      }
      Ie = e = r;
    } while (e !== null);
    vt = 6, Ie = null;
  }
  function ub(e, n, r, l, u, d, y, k, _, R, $, X) {
    e.cancelPendingCommit = null;
    do
      Rs();
    while (mt !== 0);
    if ((Xe & 6) !== 0) throw Error(o(327));
    if (n !== null) {
      if (n === e.current) throw Error(o(177));
      e === it && (Ie = it = null, Ze = 0), Qr = n, ti = e, mi = r, Sf = u, Jg = l, Y2(
        e,
        n,
        r,
        y,
        k,
        _,
        X
      );
    }
  }
  function Y2(e, n, r, l, u, d, y) {
    var k = n.lanes | n.childLanes;
    if (kf = k, k |= ac, bw(
      e,
      r,
      k,
      l,
      u,
      d
    ), Ia = null, (r & 335544064) === r ? (Ha = y2(e), l = 10262) : (Ha = null, l = 10256), (n.subtreeFlags & l) !== 0 || (n.flags & l) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, K2(Vi, function() {
      return Tf(), null;
    })) : (e.callbackNode = null, e.callbackPriority = 0), vs = !1, l = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || l) {
      l = me.T, me.T = null, u = je.p, je.p = 2, d = Xe, Xe |= 4;
      try {
        L2(e, n, r);
      } finally {
        Xe = d, je.p = u, me.T = l;
      }
    }
    mt = 1, vs ? Ba = bk(
      y,
      e.containerInfo,
      Ha,
      jf,
      Ef,
      F2,
      Cf,
      Tf,
      G2
    ) : (jf(), Ef(), Cf());
  }
  function G2(e) {
    if (mt !== 0) {
      var n = ti.onRecoverableError;
      n(e, { componentStack: null });
    }
  }
  function F2() {
    mt === 3 && (mt = 0, Yg(Qr, ti), mt = 4);
  }
  function jf() {
    if (mt === 1) {
      mt = 0;
      var e = ti, n = Qr, r = mi, l = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || l) {
        l = me.T, me.T = null;
        var u = je.p;
        je.p = 2;
        var d = Xe;
        Xe |= 4;
        try {
          Hl = Ss = !1, $g(n, e, r), r = Zf;
          var y = Hh(e.containerInfo), k = r.focusedElem, _ = r.selectionRange;
          if (y !== k && k && k.ownerDocument && Ih(
            k.ownerDocument.documentElement,
            k
          )) {
            if (_ !== null && ec(k)) {
              var R = _.start, $ = _.end;
              if ($ === void 0 && ($ = R), "selectionStart" in k)
                k.selectionStart = R, k.selectionEnd = Math.min(
                  $,
                  k.value.length
                );
              else {
                var X = k.ownerDocument || document, D = X && X.defaultView || window;
                if (D.getSelection) {
                  var H = D.getSelection(), ae = k.textContent.length, ge = Math.min(_.start, ae), Re = _.end === void 0 ? ge : Math.min(_.end, ae);
                  !H.extend && ge > Re && (y = Re, Re = ge, ge = y);
                  var M = Bh(
                    k,
                    ge
                  ), A = Bh(
                    k,
                    Re
                  );
                  if (M && A && (H.rangeCount !== 1 || H.anchorNode !== M.node || H.anchorOffset !== M.offset || H.focusNode !== A.node || H.focusOffset !== A.offset)) {
                    var B = X.createRange();
                    B.setStart(M.node, M.offset), H.removeAllRanges(), ge > Re ? (H.addRange(B), H.extend(A.node, A.offset)) : (B.setEnd(A.node, A.offset), H.addRange(B));
                  }
                }
              }
            }
            for (X = [], H = k; H = H.parentNode; )
              H.nodeType === 1 && X.push({
                element: H,
                left: H.scrollLeft,
                top: H.scrollTop
              });
            for (typeof k.focus == "function" && k.focus(), k = 0; k < X.length; k++) {
              var G = X[k];
              G.element.scrollLeft = G.left, G.element.scrollTop = G.top;
            }
          }
          Ka = !!Hf, Zf = Hf = null;
        } finally {
          Xe = d, je.p = u, me.T = l;
        }
      }
      e.current = n, mt = 2;
    }
  }
  function Ef() {
    if (mt === 2) {
      mt = 0;
      var e = ti, n = Qr, r = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || r) {
        r = me.T, me.T = null;
        var l = je.p;
        je.p = 2;
        var u = Xe;
        Xe |= 4;
        try {
          Lg(e, n.alternate, n);
        } finally {
          Xe = u, je.p = l, me.T = r;
        }
      }
      mt = 3;
    }
  }
  function Cf() {
    if (mt === 4 || mt === 3) {
      mt = 0;
      var e = Ba;
      Ba = null, Er();
      var n = ti, r = Qr, l = mi, u = Jg, d = (l & 335544064) === l ? 10262 : 10256;
      if ((r.subtreeFlags & d) !== 0 || (r.flags & d) !== 0 ? mt = 5 : (mt = 0, Qr = ti = null, cb(n, n.pendingLanes)), d = n.pendingLanes, d === 0 && (ur = null), Uu(l), r = r.stateNode, lt && typeof lt.onCommitFiberRoot == "function")
        try {
          lt.onCommitFiberRoot(
            ze,
            r,
            void 0,
            (r.current.flags & 128) === 128
          );
        } catch {
        }
      if (u !== null) {
        r = me.T, d = je.p, je.p = 2, me.T = null;
        try {
          for (var y = n.onRecoverableError, k = 0; k < u.length; k++) {
            var _ = u[k];
            y(_.value, {
              componentStack: _.stack
            });
          }
        } finally {
          me.T = r, je.p = d;
        }
      }
      if (u = Ia, y = Ha, Ha = null, u !== null && (Ia = null, y === null && (y = []), e !== null))
        for (_ = 0; _ < u.length; _++)
          r = (0, u[_])(
            y
          ), r !== void 0 && e.finished.finally(r);
      (mi & 3) !== 0 && Rs(), gi(n), d = n.pendingLanes, (l & 261930) !== 0 && (d & 42) !== 0 ? n === As ? Vl++ : (Vl = 0, As = n) : (Vl = 0, As = null), Yl(0);
    }
  }
  function cb(e, n) {
    (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, _l(n)));
  }
  function Rs() {
    return Ba !== null && (Ba.skipTransition(), Ba = null), jf(), Ef(), Cf(), Tf();
  }
  function Tf() {
    if (mt !== 5) return !1;
    var e = ti, n = kf;
    kf = 0;
    var r = Uu(mi), l = me.T, u = je.p;
    try {
      je.p = 32 > r ? 32 : r, me.T = null, r = Sf, Sf = null;
      var d = ti, y = mi;
      if (mt = 0, Qr = ti = null, mi = 0, (Xe & 6) !== 0) throw Error(o(331));
      var k = Xe;
      if (Xe |= 4, Qg(d.current), Gg(
        d,
        d.current,
        y,
        r
      ), Xe = k, Yl(0, !1), lt && typeof lt.onPostCommitFiberRoot == "function")
        try {
          lt.onPostCommitFiberRoot(ze, d);
        } catch {
        }
      return !0;
    } finally {
      je.p = u, me.T = l, cb(e, n);
    }
  }
  function fb(e, n, r) {
    n = In(r, n), n = Yc(e.stateNode, n, 2), e = tr(e, n, 2), e !== null && (fl(e, 2), gi(e));
  }
  function We(e, n, r) {
    if (e.tag === 3)
      fb(e, e, r);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          fb(
            n,
            e,
            r
          );
          break;
        } else if (n.tag === 1) {
          var l = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (ur === null || !ur.has(l))) {
            e = In(r, e), r = og(2), l = tr(n, r, 2), l !== null && (sg(
              r,
              l,
              n,
              e
            ), fl(l, 2), gi(l));
            break;
          }
        }
        n = n.return;
      }
  }
  function Nf(e, n, r) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new H2();
      var u = /* @__PURE__ */ new Set();
      l.set(n, u);
    } else
      u = l.get(n), u === void 0 && (u = /* @__PURE__ */ new Set(), l.set(n, u));
    u.has(r) || (vf = !0, u.add(r), e = X2.bind(null, e, n, r), n.then(e, e));
  }
  function X2(e, n, r) {
    var l = e.pingCache;
    l !== null && l.delete(n), e.pingedLanes |= e.suspendedLanes & r, e.warmLanes &= ~r, it === e && (Ze & r) === r && ((vt === 4 || vt === 3 && (Ze & 62914560) === Ze && 300 > Ot() - Cs) && (Xe & 2) === 0 ? qa(e, 0) : Es |= r, La === Ze && (La = 0)), gi(e);
  }
  function db(e, n) {
    n === 0 && (n = Kp()), e = Dr(e, n), e !== null && (fl(e, n), gi(e));
  }
  function Q2(e) {
    var n = e.memoizedState, r = 0;
    n !== null && (r = n.retryLane), db(e, r);
  }
  function P2(e, n) {
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
    l !== null && l.delete(n), db(e, r);
  }
  function K2(e, n) {
    return _t(e, n);
  }
  var Va = null, Ya = null, Af = !1, Us = !1, Of = !1, fr = 0;
  function gi(e) {
    e !== Ya && e.next === null && (Ya === null ? Va = Ya = e : Ya = Ya.next = e), Us = !0, Af || (Af = !0, W2());
  }
  function Yl(e, n) {
    if (!Of && Us) {
      Of = !0;
      do
        for (var r = !1, l = Va; l !== null; ) {
          if (e !== 0) {
            var u = l.pendingLanes;
            if (u === 0) var d = 0;
            else {
              var y = l.suspendedLanes, k = l.pingedLanes;
              d = (1 << 31 - ht(42 | e) + 1) - 1, d &= u & ~(y & ~k), d = d & 201326741 ? d & 201326741 | 1 : d ? d | 2 : 0;
            }
            d !== 0 && (r = !0, gb(l, d));
          } else
            d = Ze, d = Eo(
              l,
              l === it ? d : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (d & 3) === 0 || cl(l, d) || (r = !0, gb(l, d));
          l = l.next;
        }
      while (r);
      Of = !1;
    }
  }
  function J2() {
    pb();
  }
  function pb() {
    Us = Af = !1;
    var e = 0;
    fr !== 0 && ck() && (e = fr);
    for (var n = Ot(), r = null, l = Va; l !== null; ) {
      var u = l.next, d = hb(l, n);
      d === 0 ? (l.next = null, r === null ? Va = u : r.next = u, u === null && (Ya = r)) : (r = l, (e !== 0 || (d & 3) !== 0) && (Us = !0)), l = u;
    }
    mt !== 0 && mt !== 5 || Yl(e), fr !== 0 && (fr = 0);
  }
  function hb(e, n) {
    for (var r = e.suspendedLanes, l = e.pingedLanes, u = e.expirationTimes, d = e.pendingLanes & -62914561; 0 < d; ) {
      var y = 31 - ht(d), k = 1 << y, _ = u[y];
      _ === -1 ? ((k & r) === 0 || (k & l) !== 0) && (u[y] = gw(k, n)) : _ <= n && (e.expiredLanes |= k), d &= ~k;
    }
    if (n = it, r = Ze, r = Eo(
      e,
      e === n ? r : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, r === 0 || e === n && (Je === 2 || Je === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && Zt(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((r & 3) === 0 || cl(e, r)) {
      if (n = r & -r, n === e.callbackPriority) return n;
      switch (l !== null && Zt(l), Uu(r)) {
        case 2:
        case 8:
          r = cn;
          break;
        case 32:
          r = Vi;
          break;
        case 268435456:
          r = q;
          break;
        default:
          r = Vi;
      }
      return l = mb.bind(null, e), r = _t(r, l), e.callbackPriority = n, e.callbackNode = r, n;
    }
    return l !== null && l !== null && Zt(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function mb(e, n) {
    if (mt !== 0 && mt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var r = e.callbackNode;
    if (Rs() && e.callbackNode !== r)
      return null;
    var l = Ze;
    return l = Eo(
      e,
      e === it ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (eb(e, l, n), hb(e, Ot()), e.callbackNode != null && e.callbackNode === r ? mb.bind(null, e) : null);
  }
  function gb(e, n) {
    if (Rs()) return null;
    eb(e, n, !0);
  }
  function W2() {
    dk(function() {
      (Xe & 6) !== 0 ? _t(
        Un,
        J2
      ) : pb();
    });
  }
  function Df() {
    if (fr === 0) {
      var e = Ir;
      e === 0 && (e = Dt, Dt <<= 1, (Dt & 261888) === 0 && (Dt = 256)), fr = e;
    }
    return fr;
  }
  function bb(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Oo(e);
  }
  function ek(e, n, r, l, u) {
    if (n === "submit" && r && r.stateNode === u) {
      var d = bb(
        (u[fn] || null).action
      ), y = l.submitter;
      y && (n = (n = y[fn] || null) ? bb(n.formAction) : y.getAttribute("formAction"), n !== null && (d = n, y = null));
      var k = new Uo(
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
                if (fr !== 0) {
                  var _ = new FormData(u, y);
                  Hc(
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
                typeof d == "function" && (k.preventDefault(), _ = new FormData(u, y), Hc(
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
  for (var Mf = 0; Mf < rc.length; Mf++) {
    var Rf = rc[Mf], tk = Rf.toLowerCase(), nk = Rf[0].toUpperCase() + Rf.slice(1);
    Kn(
      tk,
      "on" + nk
    );
  }
  Kn($h, "onAnimationEnd"), Kn(Vh, "onAnimationIteration"), Kn(Yh, "onAnimationStart"), Kn("dblclick", "onDoubleClick"), Kn("focusin", "onFocus"), Kn("focusout", "onBlur"), Kn(f2, "onTransitionRun"), Kn(d2, "onTransitionStart"), Kn(p2, "onTransitionCancel"), Kn(Gh, "onTransitionEnd"), pa("onMouseEnter", ["mouseout", "mouseover"]), pa("onMouseLeave", ["mouseout", "mouseover"]), pa("onPointerEnter", ["pointerout", "pointerover"]), pa("onPointerLeave", ["pointerout", "pointerover"]), Nr(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Nr(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Nr("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Nr(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Nr(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Nr(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Gl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), ik = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Gl)
  );
  function xb(e, n) {
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
            } catch ($) {
              Io($);
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
            } catch ($) {
              Io($);
            }
            u.currentTarget = null, d = _;
          }
      }
    }
  }
  function He(e, n) {
    var r = n[ih];
    r === void 0 && (r = n[ih] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    r.has(l) || (yb(n, e, 2, !1), r.add(l));
  }
  function Uf(e, n, r) {
    var l = 0;
    n && (l |= 4), yb(
      r,
      e,
      l,
      n
    );
  }
  var Ls = "_reactListening" + Math.random().toString(36).slice(2);
  function Lf(e) {
    if (!e[Ls]) {
      e[Ls] = !0, lh.forEach(function(r) {
        r !== "selectionchange" && (ik.has(r) || Uf(r, !1, e), Uf(r, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Ls] || (n[Ls] = !0, Uf("selectionchange", !1, n));
    }
  }
  function yb(e, n, r, l) {
    switch (sx(n)) {
      case 2:
        var u = Qk;
        break;
      case 8:
        u = Pk;
        break;
      default:
        u = id;
    }
    r = u.bind(
      null,
      n,
      r,
      e
    ), u = void 0, !Vu || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (u = !0), l ? u !== void 0 ? e.addEventListener(n, r, {
      capture: !0,
      passive: u
    }) : e.addEventListener(n, r, !0) : u !== void 0 ? e.addEventListener(n, r, {
      passive: u
    }) : e.addEventListener(n, r, !1);
  }
  function Bf(e, n, r, l, u) {
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
            if (y = Tr(k), y === null) return;
            if (_ = y.tag, _ === 5 || _ === 6 || _ === 26 || _ === 27) {
              l = d = y;
              continue e;
            }
            k = k.parentNode;
          }
        }
        l = l.return;
      }
    yh(function() {
      var R = d, $ = qu(r), X = [];
      e: {
        var D = Fh.get(e);
        if (D !== void 0) {
          var H = Uo, ae = e;
          switch (e) {
            case "keypress":
              if (Mo(r) === 0) break e;
            case "keydown":
            case "keyup":
              H = Zw;
              break;
            case "focusin":
              ae = "focus", H = Xu;
              break;
            case "focusout":
              ae = "blur", H = Xu;
              break;
            case "beforeblur":
            case "afterblur":
              H = Xu;
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
              H = kh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              H = Tw;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              H = Gw;
              break;
            case $h:
            case Vh:
            case Yh:
              H = Ow;
              break;
            case Gh:
              H = Xw;
              break;
            case "scroll":
            case "scrollend":
              H = Ew;
              break;
            case "wheel":
              H = Pw;
              break;
            case "copy":
            case "cut":
            case "paste":
              H = Mw;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              H = zh;
              break;
            case "submit":
              H = Vw;
              break;
            case "toggle":
            case "beforetoggle":
              H = Jw;
          }
          var ge = (n & 4) !== 0, Re = !ge && (e === "scroll" || e === "scrollend"), M = ge ? D !== null ? D + "Capture" : null : D;
          ge = [];
          for (var A = R, B; A !== null; ) {
            var G = A;
            if (B = G.stateNode, G = G.tag, G !== 5 && G !== 26 && G !== 27 || B === null || M === null || (G = hl(A, M), G != null && ge.push(
              Fl(A, G, B)
            )), Re) break;
            A = A.return;
          }
          0 < ge.length && (D = new H(
            D,
            ae,
            null,
            r,
            $
          ), X.push({ event: D, listeners: ge }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (H = e === "mouseover" || e === "pointerover", D = e === "mouseout" || e === "pointerout", H && r !== Zu && (ae = r.relatedTarget || r.fromElement) && (Tr(ae) || ae[ca]))
            break e;
          (D || H) && (ae = $.window === $ ? $ : (H = $.ownerDocument) ? H.defaultView || H.parentWindow : window, D ? (H = r.relatedTarget || r.toElement, D = R, H = H ? Tr(H) : null, H !== null && (Re = c(H), ge = H.tag, H !== Re || ge !== 5 && ge !== 27 && ge !== 6) && (H = null)) : (D = null, H = R), D !== H && (ge = kh, G = "onMouseLeave", M = "onMouseEnter", A = "mouse", (e === "pointerout" || e === "pointerover") && (ge = zh, G = "onPointerLeave", M = "onPointerEnter", A = "pointer"), Re = D == null ? ae : pl(D), B = H == null ? ae : pl(H), ae = new ge(
            G,
            A + "leave",
            D,
            r,
            $
          ), ae.target = Re, ae.relatedTarget = B, G = null, Tr($) === R && (ge = new ge(
            M,
            A + "enter",
            H,
            r,
            $
          ), ge.target = B, ge.relatedTarget = Re, G = ge), Re = G, ge = D && H ? N(
            D,
            H,
            rk
          ) : null, D !== null && vb(
            X,
            ae,
            D,
            ge,
            !1
          ), H !== null && Re !== null && vb(
            X,
            Re,
            H,
            ge,
            !0
          )));
        }
        e: {
          if (D = R ? pl(R) : window, H = D.nodeName && D.nodeName.toLowerCase(), H === "select" || H === "input" && D.type === "file")
            var fe = Oh;
          else if (Nh(D))
            if (Dh)
              fe = s2;
            else {
              fe = l2;
              var qe = a2;
            }
          else
            H = D.nodeName, !H || H.toLowerCase() !== "input" || D.type !== "checkbox" && D.type !== "radio" ? R && Hu(R.elementType) && (fe = Oh) : fe = o2;
          if (fe && (fe = fe(e, R))) {
            Ah(
              X,
              fe,
              r,
              $
            );
            break e;
          }
          qe && qe(e, D, R);
        }
        switch (qe = R ? pl(R) : window, e) {
          case "focusin":
            (Nh(qe) || qe.contentEditable === "true") && (ya = qe, tc = R, kl = null);
            break;
          case "focusout":
            kl = tc = ya = null;
            break;
          case "mousedown":
            nc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            nc = !1, Zh(X, r, $);
            break;
          case "selectionchange":
            if (c2) break;
          case "keydown":
          case "keyup":
            Zh(X, r, $);
        }
        var xe;
        if (Pu)
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
          xa ? Ch(e, r) && (Ce = "onCompositionEnd") : e === "keydown" && r.keyCode === 229 && (Ce = "onCompositionStart");
        Ce && (_h && r.locale !== "ko" && (xa || Ce !== "onCompositionStart" ? Ce === "onCompositionEnd" && xa && (xe = vh()) : (Gi = $, Yu = "value" in Gi ? Gi.value : Gi.textContent, xa = !0)), qe = Bs(R, Ce), 0 < qe.length && (Ce = new Sh(
          Ce,
          e,
          null,
          r,
          $
        ), X.push({ event: Ce, listeners: qe }), xe ? Ce.data = xe : (xe = Th(r), xe !== null && (Ce.data = xe)))), (xe = e2 ? t2(e, r) : n2(e, r)) && (Ce = Bs(R, "onBeforeInput"), 0 < Ce.length && (qe = new Sh(
          "onBeforeInput",
          "beforeinput",
          null,
          r,
          $
        ), X.push({
          event: qe,
          listeners: Ce
        }), qe.data = xe)), ek(
          X,
          e,
          R,
          r,
          $
        );
      }
      xb(X, n);
    });
  }
  function Fl(e, n, r) {
    return {
      instance: e,
      listener: n,
      currentTarget: r
    };
  }
  function Bs(e, n) {
    for (var r = n + "Capture", l = []; e !== null; ) {
      var u = e, d = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || d === null || (u = hl(e, r), u != null && l.unshift(
        Fl(e, u, d)
      ), u = hl(e, n), u != null && l.push(
        Fl(e, u, d)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function rk(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function vb(e, n, r, l, u) {
    for (var d = n._reactName, y = []; r !== null && r !== l; ) {
      var k = r, _ = k.alternate, R = k.stateNode;
      if (k = k.tag, _ !== null && _ === l) break;
      k !== 5 && k !== 26 && k !== 27 || R === null || (_ = R, u ? (R = hl(r, d), R != null && y.unshift(
        Fl(r, R, _)
      )) : u || (R = hl(r, d), R != null && y.push(
        Fl(r, R, _)
      ))), r = r.return;
    }
    y.length !== 0 && e.push({ event: n, listeners: y });
  }
  var ak = /\r\n?/g, lk = /\u0000|\uFFFD/g;
  function wb(e) {
    return (typeof e == "string" ? e : "" + e).replace(ak, `
`).replace(lk, "");
  }
  function kb(e, n) {
    return n = wb(n), wb(e) === n;
  }
  function et(e, n, r, l, u, d) {
    switch (r) {
      case "children":
        if (typeof l == "string")
          n === "body" || n === "textarea" && l === "" || ma(e, l);
        else if (typeof l == "number" || typeof l == "bigint")
          n !== "body" && ma(e, "" + l);
        else return;
        break;
      case "className":
        Ao(e, "class", l);
        break;
      case "tabIndex":
        Ao(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ao(e, r, l);
        break;
      case "style":
        bh(e, l, d);
        return;
      case "data":
        if (n !== "object") {
          Ao(e, "data", l);
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
        l = Oo(l), e.setAttribute(r, l);
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
          typeof d == "function" && (r === "formAction" ? (n !== "input" && et(e, n, "name", u.name, u, null), et(
            e,
            n,
            "formEncType",
            u.formEncType,
            u,
            null
          ), et(
            e,
            n,
            "formMethod",
            u.formMethod,
            u,
            null
          ), et(
            e,
            n,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (et(e, n, "encType", u.encType, u, null), et(e, n, "method", u.method, u, null), et(e, n, "target", u.target, u, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(r);
          break;
        }
        l = Oo(l), e.setAttribute(r, l);
        break;
      case "onClick":
        l != null && (e.onclick = li);
        return;
      case "onScroll":
        l != null && He("scroll", e);
        return;
      case "onScrollEnd":
        l != null && He("scrollend", e);
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
        r = Oo(l), e.setAttributeNS(
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
        He("beforetoggle", e), He("toggle", e), No(e, "popover", l);
        break;
      case "xlinkActuate":
        ji(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        ji(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        ji(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        ji(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        ji(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        ji(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        ji(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        ji(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        ji(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        No(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N")
          r = _w.get(r) || r, No(e, r, l);
        else return;
    }
    Ye = !0;
  }
  function If(e, n, r, l, u, d) {
    switch (r) {
      case "style":
        bh(e, l, d);
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
        if (typeof l == "string") ma(e, l);
        else if (typeof l == "number" || typeof l == "bigint")
          ma(e, "" + l);
        else return;
        break;
      case "onScroll":
        l != null && He("scroll", e);
        return;
      case "onScrollEnd":
        l != null && He("scrollend", e);
        return;
      case "onClick":
        l != null && (e.onclick = li);
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
        if (!oh.hasOwnProperty(r))
          e: {
            if (r[0] === "o" && r[1] === "n" && (u = r.endsWith("Capture"), d = r.slice(2, u ? r.length - 7 : void 0), n = e[fn] || null, n = n != null ? n[r] : null, typeof n == "function" && e.removeEventListener(d, n, u), typeof l == "function")) {
              typeof n != "function" && n !== null && (r in e ? e[r] = null : e.hasAttribute(r) && e.removeAttribute(r)), e.addEventListener(d, l, u);
              break e;
            }
            Ye = !0, r in e ? e[r] = l : l === !0 ? e.setAttribute(r, "") : No(e, r, l);
          }
        return;
    }
    Ye = !0;
  }
  function Qt(e, n, r) {
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
        He("error", e), He("load", e);
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
                  et(e, n, d, y, r, null);
              }
          }
        u && et(e, n, "srcSet", r.srcSet, r, null), l && et(e, n, "src", r.src, r, null);
        return;
      case "input":
        He("invalid", e);
        var k = d = y = u = null, _ = null, R = null;
        for (l in r)
          if (r.hasOwnProperty(l)) {
            var $ = r[l];
            if ($ != null)
              switch (l) {
                case "name":
                  u = $;
                  break;
                case "type":
                  y = $;
                  break;
                case "checked":
                  _ = $;
                  break;
                case "defaultChecked":
                  R = $;
                  break;
                case "value":
                  d = $;
                  break;
                case "defaultValue":
                  k = $;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if ($ != null)
                    throw Error(o(137, n));
                  break;
                default:
                  et(e, n, l, $, r, null);
              }
          }
        ph(
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
        He("invalid", e), l = y = d = null;
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
                et(e, n, u, k, r, null);
            }
        n = d, r = y, e.multiple = !!l, n != null ? ha(e, !!l, n, !1) : r != null && ha(e, !!l, r, !0);
        return;
      case "textarea":
        He("invalid", e), d = u = l = null;
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
                et(e, n, y, k, r, null);
            }
        mh(e, l, u, d);
        return;
      case "option":
        for (_ in r)
          r.hasOwnProperty(_) && (l = r[_], l != null) && (_ === "selected" ? e.selected = l && typeof l != "function" && typeof l != "symbol" : et(e, n, _, l, r, null));
        return;
      case "dialog":
        He("beforetoggle", e), He("toggle", e), He("cancel", e), He("close", e);
        break;
      case "iframe":
      case "object":
        He("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Gl.length; l++)
          He(Gl[l], e);
        break;
      case "image":
        He("error", e), He("load", e);
        break;
      case "details":
        He("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        He("error", e), He("load", e);
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
                et(e, n, R, l, r, null);
            }
        return;
      default:
        if (Hu(n)) {
          for ($ in r)
            r.hasOwnProperty($) && (l = r[$], l !== void 0 && If(
              e,
              n,
              $,
              l,
              r,
              void 0
            ));
          return;
        }
    }
    for (k in r)
      r.hasOwnProperty(k) && (l = r[k], l != null && et(e, n, k, l, r, null));
  }
  var ok = {};
  function sk(e, n, r, l) {
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
        var u = null, d = null, y = null, k = null, _ = null, R = null, $ = null;
        for (H in r) {
          var X = r[H];
          if (r.hasOwnProperty(H) && X != null)
            switch (H) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                _ = X;
              default:
                l.hasOwnProperty(H) || et(e, n, H, null, l, X);
            }
        }
        for (var D in l) {
          var H = l[D];
          if (X = r[D], l.hasOwnProperty(D) && (H != null || X != null))
            switch (D) {
              case "type":
                H !== X && (Ye = !0), d = H;
                break;
              case "name":
                H !== X && (Ye = !0), u = H;
                break;
              case "checked":
                H !== X && (Ye = !0), R = H;
                break;
              case "defaultChecked":
                H !== X && (Ye = !0), $ = H;
                break;
              case "value":
                H !== X && (Ye = !0), y = H;
                break;
              case "defaultValue":
                H !== X && (Ye = !0), k = H;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (H != null)
                  throw Error(o(137, n));
                break;
              default:
                H !== X && et(
                  e,
                  n,
                  D,
                  H,
                  l,
                  X
                );
            }
        }
        Bu(
          e,
          y,
          k,
          _,
          R,
          $,
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
                l.hasOwnProperty(d) || et(
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
                d !== _ && (Ye = !0), D = d;
                break;
              case "defaultValue":
                d !== _ && (Ye = !0), k = d;
                break;
              case "multiple":
                d !== _ && (Ye = !0), y = d;
              default:
                d !== _ && et(
                  e,
                  n,
                  u,
                  d,
                  l,
                  _
                );
            }
        n = k, r = y, l = H, D != null ? ha(e, !!r, D, !1) : !!l != !!r && (n != null ? ha(e, !!r, n, !0) : ha(e, !!r, r ? [] : "", !1));
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
                et(e, n, k, null, l, u);
            }
        for (y in l)
          if (u = l[y], d = r[y], l.hasOwnProperty(y) && (u != null || d != null))
            switch (y) {
              case "value":
                u !== d && (Ye = !0), D = u;
                break;
              case "defaultValue":
                u !== d && (Ye = !0), H = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(o(91));
                break;
              default:
                u !== d && et(e, n, y, u, l, d);
            }
        hh(e, D, H);
        return;
      case "option":
        for (var ae in r)
          D = r[ae], r.hasOwnProperty(ae) && D != null && !l.hasOwnProperty(ae) && (ae === "selected" ? e.selected = !1 : et(
            e,
            n,
            ae,
            null,
            l,
            D
          ));
        for (_ in l)
          D = l[_], H = r[_], l.hasOwnProperty(_) && D !== H && (D != null || H != null) && (_ === "selected" ? (D !== H && (Ye = !0), e.selected = D && typeof D != "function" && typeof D != "symbol") : et(
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
        for (var ge in r)
          D = r[ge], r.hasOwnProperty(ge) && D != null && !l.hasOwnProperty(ge) && et(e, n, ge, null, l, D);
        for (R in l)
          if (D = l[R], H = r[R], l.hasOwnProperty(R) && D !== H && (D != null || H != null))
            switch (R) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null)
                  throw Error(o(137, n));
                break;
              default:
                et(
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
        if (Hu(n)) {
          for (var Re in r)
            D = r[Re], r.hasOwnProperty(Re) && D !== void 0 && !l.hasOwnProperty(Re) && If(
              e,
              n,
              Re,
              void 0,
              l,
              D
            );
          for ($ in l)
            D = l[$], H = r[$], !l.hasOwnProperty($) || D === H || D === void 0 && H === void 0 || If(
              e,
              n,
              $,
              D,
              l,
              H
            );
          return;
        }
    }
    for (var M in r)
      D = r[M], r.hasOwnProperty(M) && D != null && !l.hasOwnProperty(M) && et(e, n, M, null, l, D);
    for (X in l)
      D = l[X], H = r[X], !l.hasOwnProperty(X) || D === H || D == null && H == null || et(e, n, X, D, l, H);
  }
  function Sb(e) {
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
  function uk() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, n = 0, r = performance.getEntriesByType("resource"), l = 0; l < r.length; l++) {
        var u = r[l], d = u.transferSize, y = u.initiatorType, k = u.duration;
        if (d && k && Sb(y)) {
          for (y = 0, k = u.responseEnd, l += 1; l < r.length; l++) {
            var _ = r[l], R = _.startTime;
            if (R > k) break;
            var $ = _.transferSize, X = _.initiatorType;
            $ && Sb(X) && (_ = _.responseEnd, y += $ * (_ < k ? 1 : (k - R) / (_ - R)));
          }
          if (--l, n += 8 * (d + y) / (u.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return n / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Hf = null, Zf = null;
  function Xl(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function zb(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function _b(e, n) {
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
  function jb(e, n, r, l) {
    return r = Xl(
      r
    ).createElement(e), r[Vt] = l, r[fn] = n, Qt(r, e, n), Ut(r), r;
  }
  function qf(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var $f = null;
  function ck() {
    var e = window.event;
    return e && e.type === "popstate" ? e === $f ? !1 : ($f = e, !0) : ($f = null, !1);
  }
  var Vf = typeof setTimeout == "function" ? setTimeout : void 0, fk = typeof clearTimeout == "function" ? clearTimeout : void 0, Eb = typeof Promise == "function" ? Promise : void 0, Cb = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Vf, dk = typeof queueMicrotask == "function" ? queueMicrotask : typeof Eb < "u" ? function(e) {
    return Eb.resolve(null).then(e).catch(pk);
  } : Vf;
  function pk(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function dr(e) {
    return e === "head";
  }
  function Tb(e, n) {
    var r = n, l = 0;
    do {
      var u = r.nextSibling;
      if (e.removeChild(r), u && u.nodeType === 8)
        if (r = u.data, r === "/$" || r === "/&") {
          if (l === 0) {
            e.removeChild(u), Ja(n);
            return;
          }
          l--;
        } else if (r === "$" || r === "$?" || r === "$~" || r === "$!" || r === "&")
          l++;
        else if (r === "html")
          Jf(
            e.ownerDocument.documentElement
          );
        else if (r === "head") {
          r = e.ownerDocument.head, Jf(r);
          for (var d = r.firstChild; d; ) {
            var y = d.nextSibling, k = d.nodeName;
            d[dl] || k === "SCRIPT" || k === "STYLE" || k === "LINK" && d.rel.toLowerCase() === "stylesheet" || r.removeChild(d), d = y;
          }
        } else
          r === "body" && Jf(e.ownerDocument.body);
      r = u;
    } while (r);
    Ja(n);
  }
  function Nb(e, n) {
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
  function Ab(e, n, r) {
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
  function Ob(e, n) {
    e = e.style, n = n.style;
    var r = n != null ? n.hasOwnProperty("viewTransitionName") ? n.viewTransitionName : n.hasOwnProperty("view-transition-name") ? n["view-transition-name"] : null : null;
    e.viewTransitionName = r == null || typeof r == "boolean" ? "" : ("" + r).trim(), r = n != null ? n.hasOwnProperty("viewTransitionClass") ? n.viewTransitionClass : n.hasOwnProperty("view-transition-class") ? n["view-transition-class"] : null : null, e.viewTransitionClass = r == null || typeof r == "boolean" ? "" : ("" + r).trim(), e.display === "inline-block" && (n == null ? e.display = e.margin = "" : (r = n.display, e.display = r == null || typeof r == "boolean" ? "" : r, r = n.margin, r != null ? e.margin = r : (r = n.hasOwnProperty("marginTop") ? n.marginTop : n["margin-top"], e.marginTop = r == null || typeof r == "boolean" ? "" : r, n = n.hasOwnProperty("marginBottom") ? n.marginBottom : n["margin-bottom"], e.marginBottom = n == null || typeof n == "boolean" ? "" : n)));
  }
  function hk(e, n, r) {
    return r = r.ownerDocument.defaultView, {
      rect: e,
      abs: n.position === "absolute" || n.position === "fixed",
      clip: n.clipPath !== "none" || n.overflow !== "visible" || n.filter !== "none" || n.mask !== "none" || n.mask !== "none" || n.borderRadius !== "0px",
      view: 0 <= e.bottom && 0 <= e.right && e.top <= r.innerHeight && e.left <= r.innerWidth
    };
  }
  function Yf(e) {
    var n = e.getBoundingClientRect(), r = getComputedStyle(e);
    return hk(n, r, e);
  }
  function mk(e) {
    return e.documentElement.clientHeight;
  }
  function gk(e) {
    this.addEventListener("load", e), this.addEventListener("error", e);
  }
  function bk(e, n, r, l, u, d, y, k, _) {
    var R = n.nodeType === 9 ? n : n.ownerDocument;
    try {
      var $ = R.startViewTransition({
        update: function() {
          var D = R.defaultView, H = D.navigation && D.navigation.transition, ae = R.fonts.status;
          l();
          var ge = [];
          if (ae === "loaded" && (mk(R), R.fonts.status === "loading" && ge.push(R.fonts.ready)), ae = ge.length, e !== null)
            for (var Re = e.suspenseyImages, M = 0, A = 0; A < Re.length; A++) {
              var B = Re[A];
              if (!B.complete) {
                var G = B.getBoundingClientRect();
                if (0 < G.bottom && 0 < G.right && G.top < D.innerHeight && G.left < D.innerWidth) {
                  if (M += Wb(B), M > Zs) {
                    ge.length = ae;
                    break;
                  }
                  B = new Promise(
                    gk.bind(B)
                  ), ge.push(B);
                }
              }
            }
          if (0 < ge.length)
            return D = Promise.race([
              Promise.all(ge),
              new Promise(function(fe) {
                return setTimeout(fe, 500);
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
      R.__reactViewTransition = $;
      var X = [];
      return $.ready.then(
        function() {
          for (var D = R.documentElement.getAnimations({
            subtree: !0
          }), H = 0; H < D.length; H++) {
            var ae = D[H], ge = ae.effect, Re = ge.pseudoElement;
            if (Re != null && Re.startsWith("::view-transition")) {
              X.push(ae), ae = ge.getKeyframes();
              for (var M = Re = void 0, A = !0, B = 0; B < ae.length; B++) {
                var G = ae[B], fe = G.width;
                if (Re === void 0) Re = fe;
                else if (Re !== fe) {
                  A = !1;
                  break;
                }
                if (fe = G.height, M === void 0) M = fe;
                else if (M !== fe) {
                  A = !1;
                  break;
                }
                delete G.width, delete G.height, G.transform === "none" && delete G.transform;
              }
              A && Re !== void 0 && M !== void 0 && (ge.setKeyframes(ae), A = getComputedStyle(
                ge.target,
                ge.pseudoElement
              ), A.width !== Re || A.height !== M) && (A = ae[0], A.width = Re, A.height = M, A = ae[ae.length - 1], A.width = Re, A.height = M, ge.setKeyframes(ae));
            }
          }
          y();
        },
        function(D) {
          R.__reactViewTransition === $ && (R.__reactViewTransition = null);
          try {
            typeof D == "object" && D !== null && D.name === "InvalidStateError" && (D.message === "View transition was skipped because document visibility state is hidden." || D.message === "Skipping view transition because document visibility state has become hidden." || D.message === "Skipping view transition because viewport size changed." || D.message === "Transition was aborted because of invalid state") && (D = null), D !== null && _(D);
          } finally {
            l(), u(), y();
          }
        }
      ), $.finished.finally(function() {
        for (var D = 0; D < X.length; D++)
          X[D].cancel();
        R.__reactViewTransition === $ && (R.__reactViewTransition = null), k();
      }), $;
    } catch {
      return l(), u(), y(), null;
    }
  }
  function Pr(e, n) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + n + ")";
  }
  Pr.prototype.animate = function(e, n) {
    return n = typeof n == "number" ? { duration: n } : F({}, n), n.pseudoElement = this._selector, this._scope.animate(e, n);
  }, Pr.prototype.getAnimations = function() {
    for (var e = this._scope, n = this._selector, r = e.getAnimations({ subtree: !0 }), l = [], u = 0; u < r.length; u++) {
      var d = r[u].effect;
      d !== null && d.target === e && d.pseudoElement === n && l.push(r[u]);
    }
    return l;
  }, Pr.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Db(e) {
    return {
      name: e,
      group: new Pr("group", e),
      imagePair: new Pr("image-pair", e),
      old: new Pr("old", e),
      new: new Pr("new", e)
    };
  }
  function Cn(e) {
    this._fragmentFiber = e, this._observers = this._eventListeners = null;
  }
  Cn.prototype.addEventListener = function(e, n, r) {
    var l = null, u = null;
    if (!(r != null && typeof r != "boolean" && (l = r.signal || null, l !== null && l.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var d = this._eventListeners;
      if (Rb(d, e, n, r) === -1) {
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
        ), l.addEventListener("abort", u, { once: !0 }), u = l.removeEventListener.bind(l, "abort", u)), l = Ga(r), d.push({
          type: e,
          listener: n,
          optionsOrUseCapture: r,
          attachedListener: k,
          cleanup: u
        }), b(
          this._fragmentFiber.child,
          !1,
          xk,
          e,
          k,
          l
        );
      }
      this._eventListeners = d;
    }
  };
  function xk(e, n, r, l) {
    return C(e).addEventListener(
      n,
      r,
      l
    ), !1;
  }
  Cn.prototype.removeEventListener = function(e, n, r) {
    var l = this._eventListeners;
    if (l !== null && (n = Rb(
      l,
      e,
      n,
      r
    ), n !== -1)) {
      var u = l[n];
      r = u.attachedListener;
      var d = u.cleanup;
      u = Ga(u.optionsOrUseCapture), b(
        this._fragmentFiber.child,
        !1,
        yk,
        e,
        r,
        u
      ), l.splice(n, 1), d !== null && d();
    }
  };
  function yk(e, n, r, l) {
    return C(e).removeEventListener(
      n,
      r,
      l
    ), !1;
  }
  function Ga(e) {
    return e != null && typeof e != "boolean" && (e.once === !0 || e.signal instanceof AbortSignal) ? { capture: e.capture, passive: e.passive } : e;
  }
  function Mb(e) {
    return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
  }
  function Rb(e, n, r, l) {
    if (e.length === 0) return -1;
    l = Mb(l);
    for (var u = 0; u < e.length; u++) {
      var d = e[u];
      if (d.type === n && d.listener === r && Mb(d.optionsOrUseCapture) === l)
        return u;
    }
    return -1;
  }
  Cn.prototype.dispatchEvent = function(e) {
    var n = w(
      this._fragmentFiber
    );
    if (n === null) return !0;
    n = C(n);
    var r = this._eventListeners;
    if (r !== null && 0 < r.length || !e.bubbles) {
      var l = n.nodeType === 9 ? n.createComment("") : document.createTextNode("");
      if (r)
        for (var u = 0; u < r.length; u++) {
          var d = r[u];
          l.addEventListener(
            d.type,
            d.attachedListener,
            Ga(d.optionsOrUseCapture)
          );
        }
      if (n.appendChild(l), e = l.dispatchEvent(e), r)
        for (u = 0; u < r.length; u++)
          d = r[u], l.removeEventListener(
            d.type,
            d.attachedListener,
            Ga(d.optionsOrUseCapture)
          );
      return n.removeChild(l), e;
    }
    return n.dispatchEvent(e);
  }, Cn.prototype.focus = function(e) {
    b(
      this._fragmentFiber.child,
      !0,
      Ub,
      e,
      void 0,
      void 0
    );
  };
  function Ub(e, n) {
    return e.tag === 6 ? !1 : (e = C(e), Ak(e, n));
  }
  Cn.prototype.focusLast = function(e) {
    var n = [];
    b(
      this._fragmentFiber.child,
      !0,
      Gf,
      n,
      void 0,
      void 0
    );
    for (var r = n.length - 1; 0 <= r && !Ub(n[r], e); r--) ;
  };
  function Gf(e, n) {
    return n.push(e), !1;
  }
  Cn.prototype.blur = function() {
    var e = w(
      this._fragmentFiber
    );
    e !== null && (e = C(e), e = Xl(e).activeElement, e !== null && b(
      this._fragmentFiber.child,
      !1,
      vk,
      e,
      void 0,
      void 0
    ));
  };
  function vk(e, n) {
    return e.tag === 6 ? !1 : (e = C(e), e === n || e.contains(n) ? (n.blur(), !0) : !1);
  }
  Cn.prototype.observeUsing = function(e) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), b(
      this._fragmentFiber.child,
      !1,
      wk,
      e,
      void 0,
      void 0
    );
  };
  function wk(e, n) {
    return e.tag === 6 || (e = C(e), n.observe(e)), !1;
  }
  Cn.prototype.unobserveUsing = function(e) {
    var n = this._observers;
    if (n !== null && n.has(e)) {
      n.delete(e), b(
        this._fragmentFiber.child,
        !1,
        kk,
        e,
        void 0,
        void 0
      );
      for (var r = n = 0; r < ni.length; r++) {
        var l = ni[r];
        l.fragmentInstance === this && l.observer === e ? e.unobserve(l.instance) : ni[n++] = l;
      }
      ni.length = n;
    }
  };
  function kk(e, n) {
    return e.tag === 6 || (e = C(e), n.unobserve(e)), !1;
  }
  var ni = [], Ff = !1;
  function Sk(e, n, r) {
    ni.push({
      fragmentInstance: e,
      observer: n,
      instance: r
    }), Ff || (Ff = !0, Ok(function() {
      Ff = !1;
      var l = ni;
      ni = [];
      for (var u = 0; u < l.length; u++) {
        var d = l[u];
        d.observer.unobserve(d.instance);
      }
    }));
  }
  Cn.prototype.getClientRects = function() {
    var e = [];
    return b(
      this._fragmentFiber.child,
      !1,
      zk,
      e,
      void 0,
      void 0
    ), e;
  };
  function zk(e, n) {
    if (e.tag === 6) {
      e = e.stateNode;
      var r = e.ownerDocument.createRange();
      r.selectNodeContents(e), n.push.apply(n, r.getClientRects());
    } else
      e = C(e), n.push.apply(n, e.getClientRects());
    return !1;
  }
  Cn.prototype.getRootNode = function(e) {
    var n = w(
      this._fragmentFiber
    );
    return n === null ? this : C(n).getRootNode(e);
  }, Cn.prototype.compareDocumentPosition = function(e) {
    var n = w(
      this._fragmentFiber
    );
    if (n === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var r = [];
    b(
      this._fragmentFiber.child,
      !1,
      Gf,
      r,
      void 0,
      void 0
    );
    var l = C(n);
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
      return r === e ? u = Node.DOCUMENT_POSITION_CONTAINS : l & Node.DOCUMENT_POSITION_CONTAINED_BY && (r = S(n)[1], r === null ? u = Node.DOCUMENT_POSITION_PRECEDING : (e = C(r).compareDocumentPosition(
        e
      ), u = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), u |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    n = C(r[0]), u = C(r[r.length - 1]);
    var d = v(this._fragmentFiber) ? n.parentElement : l;
    if (d == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    l = d.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY, d = d.compareDocumentPosition(u) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var y = n.compareDocumentPosition(e), k = u.compareDocumentPosition(e), _ = y & Node.DOCUMENT_POSITION_CONTAINED_BY || k & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return k = l && d && y & Node.DOCUMENT_POSITION_FOLLOWING && k & Node.DOCUMENT_POSITION_PRECEDING, n = l && n === e || d && u === e || _ || k ? Node.DOCUMENT_POSITION_CONTAINED_BY : !l && n === e || !d && u === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : y, n & Node.DOCUMENT_POSITION_DISCONNECTED || n & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || _k(
      n,
      this._fragmentFiber,
      r[0],
      r[r.length - 1],
      e
    ) ? n : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function _k(e, n, r, l, u) {
    var d = Tr(u);
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
      Y,
      d,
      l
    ), d = O, I = O = null, n = d !== null)), n) : !1;
  }
  function Lb(e, n) {
    var r = e.ownerDocument.createRange();
    r.selectNodeContents(e), e = r.getBoundingClientRect(), window.scrollTo(
      window.scrollX + e.left,
      n ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight
    );
  }
  Cn.prototype.scrollIntoView = function(e) {
    if (typeof e == "object") throw Error(o(566));
    var n = [];
    b(
      this._fragmentFiber.child,
      !1,
      Gf,
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
        e = C(l), Lb(e, r);
        return;
      }
      if (l = C(l), l.nodeType !== 9) {
        if (l.nodeType === 11) {
          r = "host" in l ? l.host : null, r !== null && r.scrollIntoView(e);
          return;
        }
        l.scrollIntoView(e);
      }
    }
    for (l = r ? n.length - 1 : 0; l !== (r ? -1 : n.length); ) {
      var u = n[l];
      u.tag === 6 ? (u = C(u), Lb(u, r)) : C(u).scrollIntoView(e), l += r ? -1 : 1;
    }
  };
  function jk(e, n) {
    return e = C(e), Bb(e, n), !1;
  }
  function Bb(e, n) {
    e.reactFragments == null && (e.reactFragments = /* @__PURE__ */ new Set()), e.reactFragments.add(n);
  }
  function Ib(e, n) {
    var r = n._eventListeners;
    if (r !== null)
      for (var l = 0; l < r.length; l++) {
        var u = r[l];
        e.addEventListener(
          u.type,
          u.attachedListener,
          Ga(u.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 && (r = n._observers, r !== null && r.forEach(function(d) {
      for (var y = 0, k = 0; k < ni.length; k++) {
        var _ = ni[k];
        (_.fragmentInstance !== n || _.observer !== d || _.instance !== e) && (ni[y++] = _);
      }
      ni.length = y, d.observe(e);
    }), Bb(e, n));
  }
  function Ek(e, n) {
    var r = n._eventListeners;
    if (r !== null)
      for (var l = 0; l < r.length; l++) {
        var u = r[l];
        e.removeEventListener(
          u.type,
          u.attachedListener,
          Ga(u.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 && (r = n._observers, r !== null && r.forEach(function(d) {
      typeof d.rootMargin == "string" ? Sk(
        n,
        d,
        e
      ) : d.unobserve(e);
    }), e.reactFragments != null && e.reactFragments.delete(n));
  }
  function Xf(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var r = n;
      switch (n = n.nextSibling, r.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Xf(r), To(r);
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
  function Ck(e, n, r, l) {
    for (; e.nodeType === 1; ) {
      var u = r;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[dl])
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
      if (e = Vn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Tk(e, n, r) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !r || (e = Vn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Hb(e, n) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Vn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Qf(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function Pf(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Nk(e, n) {
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
  function Vn(e) {
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
  var Kf = null;
  function Zb(e) {
    e = e.nextSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var r = e.data;
        if (r === "/$" || r === "/&") {
          if (n === 0)
            return Vn(e.nextSibling);
          n--;
        } else
          r !== "$" && r !== "$!" && r !== "$?" && r !== "$~" && r !== "&" || n++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function qb(e) {
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
  function Ak(e, n) {
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
  function Ok(e) {
    Cb(function() {
      Cb(function(n) {
        return e(n);
      });
    });
  }
  function $b(e, n, r) {
    switch (n = Xl(r), e) {
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
  function Vb(e, n, r) {
    for (var l in r) {
      var u = r[l];
      r.hasOwnProperty(l) && u != null && et(e, n, l, null, ok, u);
    }
    r.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === li && (e.onclick = null), To(e);
  }
  function Jf(e) {
    for (var n = e.attributes; n.length; )
      e.removeAttributeNode(n[0]);
    To(e);
  }
  var Yn = /* @__PURE__ */ new Map(), Yb = /* @__PURE__ */ new Set();
  function Ql(e) {
    if (typeof e.getRootNode == "function") {
      var n = e.getRootNode();
      if (n.nodeType === 9 || n.nodeType === 11) return n;
    }
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Ii = je.d;
  je.d = {
    f: Dk,
    r: Mk,
    D: Rk,
    C: Uk,
    L: Lk,
    m: Bk,
    X: Hk,
    S: Ik,
    M: Zk
  };
  function Dk() {
    var e = Ii.f(), n = Os();
    return e || n;
  }
  function Mk(e) {
    var n = fa(e);
    n !== null && n.tag === 5 && n.type === "form" ? Fm(n) : Ii.r(e);
  }
  var Fa = typeof document > "u" ? null : document;
  function Gb(e, n, r) {
    var l = Fa;
    if (l && typeof n == "string" && n) {
      var u = Ln(n);
      u = 'link[rel="' + e + '"][href="' + u + '"]', typeof r == "string" && (u += '[crossorigin="' + r + '"]'), Yb.has(u) || (Yb.add(u), e = { rel: e, crossOrigin: r, href: n }, l.querySelector(u) === null && (n = l.createElement("link"), Qt(n, "link", e), Ut(n), l.head.appendChild(n)));
    }
  }
  function Rk(e) {
    Ii.D(e), Gb("dns-prefetch", e, null);
  }
  function Uk(e, n) {
    Ii.C(e, n), Gb("preconnect", e, n);
  }
  function Lk(e, n, r) {
    Ii.L(e, n, r);
    var l = Fa;
    if (l && e && n) {
      var u = 'link[rel="preload"][as="' + Ln(n) + '"]';
      n === "image" && r && r.imageSrcSet ? (u += '[imagesrcset="' + Ln(
        r.imageSrcSet
      ) + '"]', typeof r.imageSizes == "string" && (u += '[imagesizes="' + Ln(
        r.imageSizes
      ) + '"]')) : u += '[href="' + Ln(e) + '"]';
      var d = u;
      switch (n) {
        case "style":
          d = Xa(e);
          break;
        case "script":
          d = Qa(e);
      }
      if (!(Yn.has(d) || (e = F(
        {
          rel: "preload",
          href: n === "image" && r && r.imageSrcSet ? void 0 : e,
          as: n
        },
        r
      ), Yn.set(d, e), l.querySelector(u) !== null || n === "style" && l.querySelector(Pl(d)) || n === "script" && l.querySelector(Kl(d))))) {
        var y = l.createElement("link");
        Qt(y, "link", e), n === "style" && (y[Co] = !0, y.onload = y.onerror = function() {
          ah(y);
        }), Ut(y), l.head.appendChild(y);
      }
    }
  }
  function Bk(e, n) {
    Ii.m(e, n);
    var r = Fa;
    if (r && e) {
      var l = n && typeof n.as == "string" ? n.as : "script", u = 'link[rel="modulepreload"][as="' + Ln(l) + '"][href="' + Ln(e) + '"]', d = u;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          d = Qa(e);
      }
      if (!Yn.has(d) && (e = F({ rel: "modulepreload", href: e }, n), Yn.set(d, e), r.querySelector(u) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (r.querySelector(Kl(d)))
              return;
        }
        l = r.createElement("link"), Qt(l, "link", e), Ut(l), r.head.appendChild(l);
      }
    }
  }
  function Ik(e, n, r) {
    Ii.S(e, n, r);
    var l = Fa;
    if (l && e) {
      var u = da(l).hoistableStyles, d = Xa(e);
      n = n || "default";
      var y = u.get(d);
      if (!y) {
        var k = { loading: 0, preload: null };
        if (y = l.querySelector(
          Pl(d)
        ))
          k.loading = 5;
        else {
          e = F(
            { rel: "stylesheet", href: e, "data-precedence": n },
            r
          ), (r = Yn.get(d)) && Wf(e, r);
          var _ = y = l.createElement("link");
          Ut(_), Qt(_, "link", e), _._p = new Promise(function(R, $) {
            _.onload = R, _.onerror = $;
          }), _.addEventListener("load", function() {
            k.loading |= 1;
          }), _.addEventListener("error", function() {
            k.loading |= 2;
          }), k.loading |= 4, Is(y, n, l);
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
  function Hk(e, n) {
    Ii.X(e, n);
    var r = Fa;
    if (r && e) {
      var l = da(r).hoistableScripts, u = Qa(e), d = l.get(u);
      d || (d = r.querySelector(Kl(u)), d || (e = F({ src: e, async: !0 }, n), (n = Yn.get(u)) && ed(e, n), d = r.createElement("script"), Ut(d), Qt(d, "link", e), r.head.appendChild(d)), d = {
        type: "script",
        instance: d,
        count: 1,
        state: null
      }, l.set(u, d));
    }
  }
  function Zk(e, n) {
    Ii.M(e, n);
    var r = Fa;
    if (r && e) {
      var l = da(r).hoistableScripts, u = Qa(e), d = l.get(u);
      d || (d = r.querySelector(Kl(u)), d || (e = F({ src: e, async: !0, type: "module" }, n), (n = Yn.get(u)) && ed(e, n), d = r.createElement("script"), Ut(d), Qt(d, "link", e), r.head.appendChild(d)), d = {
        type: "script",
        instance: d,
        count: 1,
        state: null
      }, l.set(u, d));
    }
  }
  function Fb(e, n, r, l) {
    var u = (u = xt.current) ? Ql(u) : null;
    if (!u) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof r.precedence == "string" && typeof r.href == "string" ? (r = Xa(r.href), n = da(
          u
        ).hoistableStyles, l = n.get(r), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(r, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (r.rel === "stylesheet" && typeof r.href == "string" && typeof r.precedence == "string") {
          e = Xa(r.href);
          var d = da(
            u
          ).hoistableStyles, y = d.get(e);
          if (y || (u = u.ownerDocument || u, y = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, d.set(e, y), (d = u.querySelector(
            Pl(e)
          )) ? d._p || (y.instance = d, y.state.loading = 5) : (d = Yn.get(e), d || (d = {
            rel: "preload",
            as: "style",
            href: r.href,
            crossOrigin: r.crossOrigin,
            integrity: r.integrity,
            media: r.media,
            hrefLang: r.hrefLang,
            referrerPolicy: r.referrerPolicy
          }, Yn.set(e, d)), qk(
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
        return n = r.async, r = r.src, typeof r == "string" && n && typeof n != "function" && typeof n != "symbol" ? (r = Qa(r), n = da(
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
  function Xa(e) {
    return 'href="' + Ln(e) + '"';
  }
  function Pl(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Xb(e) {
    return F({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function qk(e, n, r, l) {
    if (n = e.querySelector(
      'link[rel="preload"][as="style"][' + n + "]"
    )) {
      if (n[Co] !== !0) {
        l.loading = 1;
        return;
      }
    } else
      n = e.createElement("link"), n[Co] = !0, n.onload = n.onerror = ah.bind(null, n), Qt(n, "link", r), Ut(n), e.head.appendChild(n);
    l.preload = n, n.addEventListener("load", function() {
      return l.loading |= 1;
    }), n.addEventListener("error", function() {
      return l.loading |= 2;
    });
  }
  function Qa(e) {
    return '[src="' + Ln(e) + '"]';
  }
  function Kl(e) {
    return "script[async]" + e;
  }
  function Qb(e, n, r) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + Ln(r.href) + '"]'
          );
          if (l)
            return n.instance = l, Ut(l), l;
          var u = F({}, r, {
            "data-href": r.href,
            "data-precedence": r.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), Ut(l), Qt(l, "style", u), Is(l, r.precedence, e), n.instance = l;
        case "stylesheet":
          u = Xa(r.href);
          var d = e.querySelector(
            Pl(u)
          );
          if (d)
            return n.state.loading |= 4, n.instance = d, Ut(d), d;
          l = Xb(r), (u = Yn.get(u)) && Wf(l, u), d = (e.ownerDocument || e).createElement("link"), Ut(d);
          var y = d;
          return y._p = new Promise(function(k, _) {
            y.onload = k, y.onerror = _;
          }), Qt(d, "link", l), n.state.loading |= 4, Is(d, r.precedence, e), n.instance = d;
        case "script":
          return d = Qa(r.src), (u = e.querySelector(
            Kl(d)
          )) ? (n.instance = u, Ut(u), u) : (l = r, (u = Yn.get(d)) && (l = F({}, r), ed(l, u)), e = e.ownerDocument || e, u = e.createElement("script"), Ut(u), Qt(u, "link", l), e.head.appendChild(u), n.instance = u);
        case "void":
          return null;
        default:
          throw Error(o(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (l = n.instance, n.state.loading |= 4, Is(l, r.precedence, e));
    return n.instance;
  }
  function Is(e, n, r) {
    for (var l = r.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = l.length ? l[l.length - 1] : null, d = u, y = 0; y < l.length; y++) {
      var k = l[y];
      if (k.dataset.precedence === n) d = k;
      else if (d !== u) break;
    }
    d ? d.parentNode.insertBefore(e, d.nextSibling) : (n = r.nodeType === 9 ? r.head : r, n.insertBefore(e, n.firstChild));
  }
  function Wf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title);
  }
  function ed(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.integrity == null && (e.integrity = n.integrity);
  }
  var Hs = null;
  function Pb(e, n, r) {
    if (Hs === null) {
      var l = /* @__PURE__ */ new Map(), u = Hs = /* @__PURE__ */ new Map();
      u.set(r, l);
    } else
      u = Hs, l = u.get(r), l || (l = /* @__PURE__ */ new Map(), u.set(r, l));
    if (l.has(e)) return l;
    for (l.set(e, null), r = r.getElementsByTagName(e), u = 0; u < r.length; u++) {
      var d = r[u];
      if (!(d[dl] || d[Vt] || e === "link" && d.getAttribute("rel") === "stylesheet") && d.namespaceURI !== "http://www.w3.org/2000/svg") {
        var y = d.getAttribute(n) || "";
        y = e + y;
        var k = l.get(y);
        k ? k.push(d) : l.set(y, [d]);
      }
    }
    return l;
  }
  function td(e, n, r) {
    e = e.ownerDocument || e, e.head.insertBefore(
      r,
      n === "title" ? e.querySelector("head > title") : null
    );
  }
  function $k(e, n, r) {
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
  function Kb(e, n) {
    return e === "img" && n.src != null && n.src !== "" && n.onLoad == null && n.loading !== "lazy";
  }
  function Jb(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Wb(e) {
    return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function ex(e, n) {
    typeof n.decode == "function" && (e.imgCount++, n.complete || (e.imgBytes += Wb(n), e.suspenseyImages.push(n)), e = Gk.bind(e), n.decode().then(e, e));
  }
  function Vk(e, n, r, l) {
    if (r.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (r.state.loading & 4) === 0) {
      if (r.instance === null) {
        var u = Xa(l.href), d = n.querySelector(
          Pl(u)
        );
        if (d) {
          n = d._p, n !== null && typeof n == "object" && typeof n.then == "function" && (e.count++, e = Jl.bind(e), n.then(e, e)), r.state.loading |= 4, r.instance = d, Ut(d);
          return;
        }
        d = n.ownerDocument || n, l = Xb(l), (u = Yn.get(u)) && Wf(l, u), d = d.createElement("link"), Ut(d);
        var y = d;
        y._p = new Promise(function(k, _) {
          y.onload = k, y.onerror = _;
        }), Qt(d, "link", l), r.instance = d;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(r, n), (n = r.state.preload) && (r.state.loading & 3) === 0 && (e.count++, r = Jl.bind(e), n.addEventListener("load", r), n.addEventListener("error", r));
    }
  }
  var Zs = 0;
  function Yk(e, n) {
    return e.stylesheets && e.count === 0 && $s(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(r) {
      var l = setTimeout(function() {
        if (e.stylesheets && $s(e, e.stylesheets), e.unsuspend) {
          var d = e.unsuspend;
          e.unsuspend = null, d();
        }
      }, 6e4 + n);
      0 < e.imgBytes && Zs === 0 && (Zs = 62500 * uk());
      var u = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && $s(e, e.stylesheets), e.unsuspend)) {
            var d = e.unsuspend;
            e.unsuspend = null, d();
          }
        },
        (e.imgBytes > Zs ? 50 : 800) + n
      );
      return e.unsuspend = r, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(u);
      };
    } : null;
  }
  function tx(e) {
    if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
      if (e.stylesheets) $s(e, e.stylesheets);
      else if (e.unsuspend) {
        var n = e.unsuspend;
        e.unsuspend = null, n();
      }
    }
  }
  function Jl() {
    this.count--, tx(this);
  }
  function Gk() {
    this.imgCount--, tx(this);
  }
  var qs = null;
  function $s(e, n) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, qs = /* @__PURE__ */ new Map(), n.forEach(Fk, e), qs = null, Jl.call(e));
  }
  function Fk(e, n) {
    if (!(n.state.loading & 4)) {
      var r = qs.get(e);
      if (r) var l = r.get(null);
      else {
        r = /* @__PURE__ */ new Map(), qs.set(e, r);
        for (var u = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), d = 0; d < u.length; d++) {
          var y = u[d];
          (y.nodeName === "LINK" || y.getAttribute("media") !== "not all") && (r.set(y.dataset.precedence, y), l = y);
        }
        l && r.set(null, l);
      }
      u = n.instance, y = u.getAttribute("data-precedence"), d = r.get(y) || l, d === l && r.set(null, u), r.set(y, u), this.count++, l = Jl.bind(this), u.addEventListener("load", l), u.addEventListener("error", l), d ? d.parentNode.insertBefore(u, d.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(u, e.firstChild)), n.state.loading |= 4;
    }
  }
  var Pa = {
    $$typeof: ne,
    Provider: null,
    Consumer: null,
    _currentValue: Ht,
    _currentValue2: Ht,
    _threadCount: 0
  };
  function Xk(e, n, r, l, u, d, y, k, _) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Mu(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Mu(0), this.hiddenUpdates = Mu(null), this.identifierPrefix = l, this.onUncaughtError = u, this.onCaughtError = d, this.onRecoverableError = y, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = _, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function nx(e, n, r, l, u, d, y, k, _, R, $, X) {
    return e = new Xk(
      e,
      n,
      r,
      y,
      _,
      R,
      $,
      X,
      k
    ), n = 1, d === !0 && (n |= 24), d = dn(3, null, null, n), e.current = d, d.stateNode = e, n = mc(), n.refCount++, e.pooledCache = n, n.refCount++, d.memoizedState = {
      element: l,
      isDehydrated: r,
      cache: n
    }, yc(d), e;
  }
  function ix(e) {
    return e ? (e = ka, e) : ka;
  }
  function rx(e, n, r, l, u, d) {
    u = ix(u), l.context === null ? l.context = u : l.pendingContext = u, l = er(n), l.payload = { element: r }, d = d === void 0 ? null : d, d !== null && (l.callback = d), r = tr(e, l, n), r !== null && (gn(r, e, n), Tl(r, e, n));
  }
  function ax(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var r = e.retryLane;
      e.retryLane = r !== 0 && r < n ? r : n;
    }
  }
  function nd(e, n) {
    ax(e, n), (e = e.alternate) && ax(e, n);
  }
  function lx(e) {
    if (e.tag === 13 || e.tag === 31) {
      var n = Dr(e, 67108864);
      n !== null && gn(n, e, 67108864), nd(e, 67108864);
    }
  }
  function ox(e) {
    if (e.tag === 13 || e.tag === 31) {
      var n = En();
      n = Ru(n);
      var r = Dr(e, n);
      r !== null && gn(r, e, n), nd(e, n);
    }
  }
  var Ka = !0;
  function Qk(e, n, r, l) {
    var u = me.T;
    me.T = null;
    var d = je.p;
    try {
      je.p = 2, id(e, n, r, l);
    } finally {
      je.p = d, me.T = u;
    }
  }
  function Pk(e, n, r, l) {
    var u = me.T;
    me.T = null;
    var d = je.p;
    try {
      je.p = 8, id(e, n, r, l);
    } finally {
      je.p = d, me.T = u;
    }
  }
  function id(e, n, r, l) {
    if (Ka) {
      var u = rd(l);
      if (u === null)
        Bf(
          e,
          n,
          l,
          Vs,
          r
        ), ux(e, l);
      else if (Jk(
        u,
        e,
        n,
        r,
        l
      ))
        l.stopPropagation();
      else if (ux(e, l), n & 4 && -1 < Kk.indexOf(e)) {
        for (; u !== null; ) {
          var d = fa(u);
          if (d !== null)
            switch (d.tag) {
              case 3:
                if (d = d.stateNode, d.current.memoizedState.isDehydrated) {
                  var y = Cr(d.pendingLanes);
                  if (y !== 0) {
                    var k = d;
                    for (k.pendingLanes |= 2, k.entangledLanes |= 2; y; ) {
                      var _ = 1 << 31 - ht(y);
                      k.entanglements[1] |= _, y &= ~_;
                    }
                    gi(d), (Xe & 6) === 0 && (Ts = Ot() + 500, Yl(0));
                  }
                }
                break;
              case 31:
              case 13:
                k = Dr(d, 2), k !== null && gn(k, d, 2), Os(), nd(d, 2);
            }
          if (d = rd(l), d === null && Bf(
            e,
            n,
            l,
            Vs,
            r
          ), d === u) break;
          u = d;
        }
        u !== null && l.stopPropagation();
      } else
        Bf(
          e,
          n,
          l,
          null,
          r
        );
    }
  }
  function rd(e) {
    return e = qu(e), ad(e);
  }
  var Vs = null;
  function ad(e) {
    if (Vs = null, e = Tr(e), e !== null) {
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
    return Vs = e, null;
  }
  function sx(e) {
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
        switch (qt()) {
          case Un:
            return 2;
          case cn:
            return 8;
          case Vi:
          case sa:
            return 32;
          case q:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ld = !1, pr = null, hr = null, mr = null, Wl = /* @__PURE__ */ new Map(), eo = /* @__PURE__ */ new Map(), gr = [], Kk = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function ux(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        pr = null;
        break;
      case "dragenter":
      case "dragleave":
        hr = null;
        break;
      case "mouseover":
      case "mouseout":
        mr = null;
        break;
      case "pointerover":
      case "pointerout":
        Wl.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        eo.delete(n.pointerId);
    }
  }
  function to(e, n, r, l, u, d) {
    return e === null || e.nativeEvent !== d ? (e = {
      blockedOn: n,
      domEventName: r,
      eventSystemFlags: l,
      nativeEvent: d,
      targetContainers: [u]
    }, n !== null && (n = fa(n), n !== null && lx(n)), e) : (e.eventSystemFlags |= l, n = e.targetContainers, u !== null && n.indexOf(u) === -1 && n.push(u), e);
  }
  function Jk(e, n, r, l, u) {
    switch (n) {
      case "focusin":
        return pr = to(
          pr,
          e,
          n,
          r,
          l,
          u
        ), !0;
      case "dragenter":
        return hr = to(
          hr,
          e,
          n,
          r,
          l,
          u
        ), !0;
      case "mouseover":
        return mr = to(
          mr,
          e,
          n,
          r,
          l,
          u
        ), !0;
      case "pointerover":
        var d = u.pointerId;
        return Wl.set(
          d,
          to(
            Wl.get(d) || null,
            e,
            n,
            r,
            l,
            u
          )
        ), !0;
      case "gotpointercapture":
        return d = u.pointerId, eo.set(
          d,
          to(
            eo.get(d) || null,
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
  function cx(e) {
    var n = Tr(e.target);
    if (n !== null) {
      var r = c(n);
      if (r !== null) {
        if (n = r.tag, n === 13) {
          if (n = f(r), n !== null) {
            e.blockedOn = n, nh(e.priority, function() {
              ox(r);
            });
            return;
          }
        } else if (n === 31) {
          if (n = p(r), n !== null) {
            e.blockedOn = n, nh(e.priority, function() {
              ox(r);
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
  function Ys(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var r = rd(e.nativeEvent);
      if (r === null) {
        r = e.nativeEvent;
        var l = new r.constructor(
          r.type,
          r
        );
        Zu = l, r.target.dispatchEvent(l), Zu = null;
      } else
        return n = fa(r), n !== null && lx(n), e.blockedOn = r, !1;
      n.shift();
    }
    return !0;
  }
  function fx(e, n, r) {
    Ys(e) && r.delete(n);
  }
  function Wk() {
    ld = !1, pr !== null && Ys(pr) && (pr = null), hr !== null && Ys(hr) && (hr = null), mr !== null && Ys(mr) && (mr = null), Wl.forEach(fx), eo.forEach(fx);
  }
  function Gs(e, n) {
    e.blockedOn === n && (e.blockedOn = null, ld || (ld = !0, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      Wk
    )));
  }
  var Fs = null;
  function dx(e) {
    Fs !== e && (Fs = e, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      function() {
        Fs === e && (Fs = null);
        for (var n = 0; n < e.length; n += 3) {
          var r = e[n], l = e[n + 1], u = e[n + 2];
          if (typeof l != "function") {
            if (ad(l || r) === null)
              continue;
            break;
          }
          var d = fa(r);
          d !== null && (e.splice(n, 3), n -= 3, Hc(
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
  function Ja(e) {
    function n(_) {
      return Gs(_, e);
    }
    pr !== null && Gs(pr, e), hr !== null && Gs(hr, e), mr !== null && Gs(mr, e), Wl.forEach(n), eo.forEach(n);
    for (var r = 0; r < gr.length; r++) {
      var l = gr[r];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < gr.length && (r = gr[0], r.blockedOn === null); )
      cx(r), r.blockedOn === null && gr.shift();
    if (r = (e.ownerDocument || e).$$reactFormReplay, r != null)
      for (l = 0; l < r.length; l += 3) {
        var u = r[l], d = r[l + 1], y = u[fn] || null;
        if (typeof d == "function")
          y || dx(r);
        else if (y) {
          var k = null;
          if (d && d.hasAttribute("formAction")) {
            if (u = d, y = d[fn] || null)
              k = y.formAction;
            else if (ad(u) !== null) continue;
          } else k = y.action;
          typeof k == "function" ? r[l + 1] = k : (r.splice(l, 3), l -= 3), dx(r);
        }
      }
  }
  function px() {
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
  function od(e) {
    this._internalRoot = e;
  }
  Xs.prototype.render = od.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(o(409));
    var r = n.current, l = En();
    rx(r, l, e, n, null, null);
  }, Xs.prototype.unmount = od.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      rx(e.current, 2, null, e, null, null), Os(), n[ca] = null;
    }
  };
  function Xs(e) {
    this._internalRoot = e;
  }
  Xs.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = th();
      e = { blockedOn: null, target: e, priority: n };
      for (var r = 0; r < gr.length && n !== 0 && n < gr[r].priority; r++) ;
      gr.splice(r, 0, e), r === 0 && cx(e);
    }
  };
  var hx = i.version;
  if (hx !== "19.3.0")
    throw Error(
      o(
        527,
        hx,
        "19.3.0"
      )
    );
  je.findDOMNode = function(e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = g(n), e = e !== null ? x(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var eS = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: me,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Qs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Qs.isDisabled && Qs.supportsFiber)
      try {
        ze = Qs.inject(
          eS
        ), lt = Qs;
      } catch {
      }
  }
  return io.createRoot = function(e, n) {
    if (!s(e)) throw Error(o(299));
    var r = !1, l = "", u = ig, d = rg, y = ag;
    return n != null && (n.unstable_strictMode === !0 && (r = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (d = n.onCaughtError), n.onRecoverableError !== void 0 && (y = n.onRecoverableError)), n = nx(
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
      px
    ), e[ca] = n.current, Lf(e), new od(n);
  }, io.hydrateRoot = function(e, n, r) {
    if (!s(e)) throw Error(o(299));
    var l = !1, u = "", d = ig, y = rg, k = ag, _ = null;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onUncaughtError !== void 0 && (d = r.onUncaughtError), r.onCaughtError !== void 0 && (y = r.onCaughtError), r.onRecoverableError !== void 0 && (k = r.onRecoverableError), r.formState !== void 0 && (_ = r.formState)), n = nx(
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
      px
    ), n.context = ix(null), r = n.current, l = En(), l = Ru(l), u = er(l), u.callback = null, tr(r, u, l), r = l, n.current.lanes = r, fl(n, r), gi(n), e[ca] = n.current, Lf(e), new Xs(n);
  }, io.version = "19.3.0", io;
}
var zx;
function cS() {
  if (zx) return cd.exports;
  zx = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (i) {
        console.error(i);
      }
  }
  return t(), cd.exports = uS(), cd.exports;
}
var fS = cS();
const dS = (t) => t?.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
function pS(t, i, a = []) {
  if (i == null)
    throw new Error("[lucide]: iconNode is required when icon name is used");
  return {
    name: dS(t),
    size: 24,
    node: i,
    ...a.length > 0 ? { aliases: a } : {}
  };
}
const hS = (t) => {
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
const mS = (t) => {
  const i = hS(t);
  return i.charAt(0).toUpperCase() + i.slice(1);
};
const Id = (...t) => t.filter((i, a, o) => !!i && i.trim() !== "" && o.indexOf(i) === a).join(" ").trim();
const Kr = {
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
function hd(t) {
  return t != null;
}
function gS(t, i = {}) {
  const a = i.attributeNames ?? {}, o = (w) => a[w] ?? w, s = t.size ?? t.width ?? Kr.width, c = t.size ?? t.height ?? Kr.height, f = t.aliases?.filter((w) => typeof w == "string" && w.trim() !== "").map((w) => `lucide-${w}`) ?? [], p = [...t.name ? [`lucide-${t.name}`] : [], ...f], m = i.className?.split(" ").filter(Boolean) ?? [], g = i.includeDefaultClasses === !1 ? Id(...m) : Id("lucide", ...p, ...m), x = i.absoluteStrokeWidth ? Number(i.strokeWidth ?? Kr["stroke-width"]) * Number(t.size ?? t.width ?? Kr.width) / Number(i.size ?? i.width ?? Kr.width) : i.strokeWidth ?? Kr["stroke-width"];
  return [
    "svg",
    {
      ...Object.entries(Kr).reduce((w, [v, S]) => (w[o(v)] = S, w), {}),
      ..."color" in i && i.color && {
        [o("stroke")]: i.color
      },
      ..."size" in i && hd(i.size) && {
        [o("width")]: i.size,
        [o("height")]: i.size
      },
      ..."width" in i && hd(i.width) && {
        [o("width")]: i.width
      },
      ..."height" in i && hd(i.height) && {
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
      const [v, S, j] = w, C = i.nonScalingStroke ? { [o("vector-effect")]: "non-scaling-stroke", ...S } : S;
      return j ? [v, C, j] : [v, C];
    })
  ];
}
function bS(t, i = {}) {
  return gS(t, {
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
const xS = (t) => {
  for (const i in t)
    if (i.startsWith("aria-") || i === "role" || i === "title")
      return !0;
  return !1;
}, yS = Q.createContext({}), vS = () => Q.useContext(yS), wS = Q.forwardRef(
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
      nonScalingStroke: C = !1,
      color: O = "currentColor",
      className: I = ""
    } = vS() ?? {}, U = !!m || xS(b), [Y, K, N = []] = bS(x, {
      color: t ?? O,
      width: a ?? i ?? v,
      height: o ?? i ?? v,
      strokeWidth: s ?? S,
      absoluteStrokeWidth: c ?? j,
      nonScalingStroke: f ?? C,
      className: Id(I, p),
      hasA11yProp: U,
      attributes: b
    });
    return Q.createElement(
      Y,
      {
        ref: w,
        ...K
      },
      [
        ...N.map(([F, le]) => Q.createElement(F, le)),
        ...Array.isArray(m) ? m : [m]
      ]
    );
  }
);
function Se(t, i = [], a = []) {
  const o = typeof t == "string" ? pS(t, i, a) : t, s = Q.forwardRef(
    ({ className: c, ...f }, p) => Q.createElement(wS, {
      ref: p,
      icon: o,
      className: c,
      ...f
    })
  );
  return o.name && (s.displayName = mS(o.name)), s;
}
const ev = {
  name: "archive",
  size: 24,
  node: [
    ["rect", { width: "20", height: "5", x: "2", y: "3", rx: "1", key: "1wp1u1" }],
    ["path", { d: "M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8", key: "1s80jp" }],
    ["path", { d: "M10 12h4", key: "a56b0p" }]
  ]
};
ev.node;
const _x = Se(ev);
const tv = {
  name: "arrow-down",
  size: 24,
  node: [
    ["path", { d: "M12 5v14", key: "s699le" }],
    ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }]
  ]
};
tv.node;
const kS = Se(tv);
const nv = {
  name: "arrow-left",
  size: 24,
  node: [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }]
  ]
};
nv.node;
const SS = Se(nv);
const iv = {
  name: "arrow-right",
  size: 24,
  node: [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }]
  ]
};
iv.node;
const zS = Se(iv);
const rv = {
  name: "arrow-up-right",
  size: 24,
  node: [
    ["path", { d: "M7 7h10v10", key: "1tivn9" }],
    ["path", { d: "M7 17 17 7", key: "1vkiza" }]
  ]
};
rv.node;
const wr = Se(rv);
const av = {
  name: "arrow-up",
  size: 24,
  node: [
    ["path", { d: "m5 12 7-7 7 7", key: "hav0vg" }],
    ["path", { d: "M12 19V5", key: "x0mq9r" }]
  ]
};
av.node;
const _S = Se(av);
const lv = {
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
lv.node;
const jS = Se(lv);
const ov = {
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
ov.node;
const sv = Se(ov);
const uv = {
  name: "check",
  size: 24,
  node: [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]
};
uv.node;
const Nn = Se(uv);
const cv = {
  name: "chevron-down",
  size: 24,
  node: [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]
};
cv.node;
const uo = Se(cv);
const fv = {
  name: "chevron-right",
  size: 24,
  node: [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]]
};
fv.node;
const yi = Se(fv);
const dv = {
  name: "chevron-left",
  size: 24,
  node: [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]]
};
dv.node;
const ES = Se(dv);
const pv = {
  name: "circle-check",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m16 9-5.5 5.5L8 12", key: "xofnsj" }]
  ],
  aliases: ["check-circle-2"]
};
pv.node;
const CS = Se(pv);
const hv = {
  name: "circle-dot",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
  ]
};
hv.node;
const jx = Se(hv);
const mv = {
  name: "circle-question-mark",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }]
  ],
  aliases: ["help-circle", "circle-help"]
};
mv.node;
const TS = Se(mv);
const gv = {
  name: "code-xml",
  size: 24,
  node: [
    ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
    ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
    ["path", { d: "m14.5 4-5 16", key: "e7oirm" }]
  ],
  aliases: ["code-2"]
};
gv.node;
const bv = Se(gv);
const xv = {
  name: "copy",
  size: 24,
  node: [
    ["rect", { width: "14", height: "14", x: "8", y: "8", rx: "2", ry: "2", key: "17jyea" }],
    ["path", { d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2", key: "zix9uf" }]
  ]
};
xv.node;
const NS = Se(xv);
const yv = {
  name: "download",
  size: 24,
  node: [
    ["path", { d: "M12 15V3", key: "m9g1x1" }],
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["path", { d: "m7 10 5 5 5-5", key: "brsn70" }]
  ]
};
yv.node;
const AS = Se(yv);
const vv = {
  name: "ellipsis",
  size: 24,
  node: [
    ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
    ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
    ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
  ],
  aliases: ["more-horizontal"]
};
vv.node;
const OS = Se(vv);
const wv = {
  name: "external-link",
  size: 24,
  node: [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    ["path", { d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6", key: "a6xqqp" }]
  ]
};
wv.node;
const Hd = Se(wv);
const kv = {
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
kv.node;
const Sv = Se(kv);
const zv = {
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
zv.node;
const tl = Se(zv);
const _v = {
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
_v.node;
const jv = Se(_v);
const Ev = {
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
Ev.node;
const DS = Se(Ev);
const Cv = {
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
Cv.node;
const MS = Se(Cv);
const Tv = {
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
Tv.node;
const kr = Se(Tv);
const Nv = {
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
Nv.node;
const RS = Se(Nv);
const Av = {
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
Av.node;
const Ov = Se(Av);
const Dv = {
  name: "git-branch",
  size: 24,
  node: [
    ["path", { d: "M15 6a9 9 0 0 0-9 9V3", key: "1cii5b" }],
    ["circle", { cx: "18", cy: "6", r: "3", key: "1h7g24" }],
    ["circle", { cx: "6", cy: "18", r: "3", key: "fqmcym" }]
  ]
};
Dv.node;
const Mv = Se(Dv);
const Rv = {
  name: "image",
  size: 24,
  node: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
    ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
  ]
};
Rv.node;
const US = Se(Rv);
const Uv = {
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
Uv.node;
const Lv = Se(Uv);
const Bv = {
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
Bv.node;
const Iv = Se(Bv);
const Hv = {
  name: "loader-circle",
  size: 24,
  node: [["path", { d: "M21 12a9 9 0 1 1-6.219-8.56", key: "13zald" }]],
  aliases: ["loader-2"]
};
Hv.node;
const nl = Se(Hv);
const Zv = {
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
Zv.node;
const au = Se(Zv);
const qv = {
  name: "monitor",
  size: 24,
  node: [
    ["rect", { width: "20", height: "14", x: "2", y: "3", rx: "2", key: "48i651" }],
    ["line", { x1: "8", x2: "16", y1: "21", y2: "21", key: "1svkeh" }],
    ["line", { x1: "12", x2: "12", y1: "17", y2: "21", key: "vw1qmm" }]
  ]
};
qv.node;
const LS = Se(qv);
const $v = {
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
$v.node;
const Vv = Se($v);
const Yv = {
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
Yv.node;
const hp = Se(Yv);
const Gv = {
  name: "panel-left-close",
  size: 24,
  node: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
    ["path", { d: "M9 3v18", key: "fh3hqa" }],
    ["path", { d: "m16 15-3-3 3-3", key: "14y99z" }]
  ],
  aliases: ["sidebar-close"]
};
Gv.node;
const BS = Se(Gv);
const Fv = {
  name: "panel-left-open",
  size: 24,
  node: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
    ["path", { d: "M9 3v18", key: "fh3hqa" }],
    ["path", { d: "m14 9 3 3-3 3", key: "8010ee" }]
  ],
  aliases: ["sidebar-open"]
};
Fv.node;
const IS = Se(Fv);
const Xv = {
  name: "panel-right",
  size: 24,
  node: [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
    ["path", { d: "M15 3v18", key: "14nvp0" }]
  ]
};
Xv.node;
const HS = Se(Xv);
const Qv = {
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
Qv.node;
const ZS = Se(Qv);
const Pv = {
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
Pv.node;
const Ex = Se(Pv);
const Kv = {
  name: "plus",
  size: 24,
  node: [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "M12 5v14", key: "s699le" }]
  ]
};
Kv.node;
const yo = Se(Kv);
const Jv = {
  name: "refresh-cw",
  size: 24,
  node: [
    ["path", { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "v9h5vc" }],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
    ["path", { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "3uifl3" }],
    ["path", { d: "M8 16H3v5", key: "1cv678" }]
  ]
};
Jv.node;
const Wv = Se(Jv);
const e1 = {
  name: "search",
  size: 24,
  node: [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }]
  ]
};
e1.node;
const fu = Se(e1);
const t1 = {
  name: "settings-2",
  size: 24,
  node: [
    ["path", { d: "M14 17H5", key: "gfn3mx" }],
    ["path", { d: "M19 7h-9", key: "6i9tg" }],
    ["circle", { cx: "17", cy: "17", r: "3", key: "18b49y" }],
    ["circle", { cx: "7", cy: "7", r: "3", key: "dfmy0x" }]
  ]
};
t1.node;
const n1 = Se(t1);
const i1 = {
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
i1.node;
const qS = Se(i1);
const r1 = {
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
r1.node;
const $S = Se(r1);
const a1 = {
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
a1.node;
const VS = Se(a1);
const l1 = {
  name: "square",
  size: 24,
  node: [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]]
};
l1.node;
const YS = Se(l1);
const o1 = {
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
o1.node;
const s1 = Se(o1);
const u1 = {
  name: "terminal",
  size: 24,
  node: [
    ["path", { d: "M12 19h8", key: "baeox8" }],
    ["path", { d: "m4 17 6-6-6-6", key: "1yngyt" }]
  ]
};
u1.node;
const du = Se(u1);
const c1 = {
  name: "users",
  size: 24,
  node: [
    ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
    ["path", { d: "M16 3.128a4 4 0 0 1 0 7.744", key: "16gr8j" }],
    ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
    ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }]
  ]
};
c1.node;
const GS = Se(c1);
const f1 = {
  name: "x",
  size: 24,
  node: [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
  ]
};
f1.node;
const ia = Se(f1);
function lu({
  label: t,
  value: i,
  options: a,
  onChange: o,
  disabled: s,
  icon: c,
  className: f = ""
}) {
  const p = Q.useId(), m = Q.useRef(null), g = Q.useRef(null), [x, b] = Q.useState(!1), [w, v] = Q.useState(0), S = Q.useRef({ text: "", at: 0 }), j = a.findIndex((U) => U.value === i), C = () => {
    if (!m.current || !g.current) return;
    const U = m.current.getBoundingClientRect(), Y = g.current;
    Y.style.minWidth = `${Math.max(U.width, 200)}px`, Y.style.maxHeight = `${Math.min(420, Math.max(U.top, innerHeight - U.bottom) - 16)}px`;
    const K = innerHeight - U.bottom < Y.offsetHeight + 12;
    Y.style.top = `${Math.max(8, K ? U.top - Y.offsetHeight - 8 : U.bottom + 8)}px`, Y.style.left = `${Math.max(8, Math.min(U.left, innerWidth - Y.offsetWidth - 8))}px`;
  }, O = (U = Math.max(0, j)) => {
    v(U), g.current?.showPopover(), b(!0), C();
  }, I = (U) => {
    a[U] && o(a[U].value), g.current?.hidePopover(), m.current?.focus();
  };
  return Q.useEffect(() => {
    if (!x) return;
    C(), window.addEventListener("resize", C);
    const U = (Y) => {
      g.current?.contains(Y.target) || g.current?.hidePopover();
    };
    return window.addEventListener("scroll", U, !0), () => {
      window.removeEventListener("resize", C), window.removeEventListener("scroll", U, !0);
    };
  }, [x]), Q.useEffect(() => {
    x && document.getElementById(`${p}-${w}`)?.scrollIntoView({ block: "nearest" });
  }, [w, x, p]), Q.useEffect(() => {
    const U = (Y) => {
      Y.detail !== t || s || (m.current?.focus(), O());
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
            const Y = U.key === "Home" ? 0 : U.key === "End" ? a.length - 1 : Math.max(
              0,
              Math.min(a.length - 1, w + (U.key === "ArrowDown" ? 1 : -1))
            );
            x ? v(Y) : O(U.key === "Home" || U.key === "End" ? Y : Math.max(0, j));
          } else if (U.key === "Enter" || U.key === " ")
            U.preventDefault(), x ? I(w) : O();
          else if (U.key === "Escape" || U.key === "Tab")
            U.key === "Escape" && x && (U.preventDefault(), U.stopPropagation()), g.current?.hidePopover();
          else if (U.key.length === 1 && !U.metaKey && !U.ctrlKey && !U.altKey) {
            S.current = {
              text: (Date.now() - S.current.at < 700 ? S.current.text : "") + U.key.toLowerCase(),
              at: Date.now()
            };
            const Y = a.findIndex(
              (K) => K.label.toLowerCase().startsWith(S.current.text)
            );
            Y >= 0 && (x ? v(Y) : O(Y));
          }
        },
        children: [
          c,
          /* @__PURE__ */ h.jsx("span", { className: "select-value", children: a[j]?.label || i }),
          /* @__PURE__ */ h.jsx(uo, { size: 13, className: "select-chevron" })
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
          a.map((U, Y) => /* @__PURE__ */ h.jsxs(
            "div",
            {
              id: `${p}-${Y}`,
              role: "option",
              "aria-selected": U.value === i,
              className: `select-option ${Y === w ? "highlighted" : ""}`,
              onPointerMove: () => v(Y),
              onMouseDown: (K) => K.preventDefault(),
              onClick: () => I(Y),
              children: [
                /* @__PURE__ */ h.jsx(
                  Nn,
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
function d1(t) {
  return t.kind === "reminderChild" || t.kind === "hookRun";
}
function FS(t) {
  return t.kind === "reminderChild" ? t.reminderAgentId ? `Reminder · ${t.reminderAgentId}` : "Background reminder" : t.kind === "hookRun" ? t.label || "CLI hook" : t.tool || t.label || t.kind.replace(/([A-Z])/g, " $1").replace(/^./, (i) => i.toUpperCase());
}
function XS(t) {
  const i = t.filter((a) => !a.retracted && a.status === "inProgress");
  return i.length > 0 && i.every(d1);
}
const Zd = [
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
function p1(t) {
  const i = /^\/([a-z-]+)(?:\s+([\s\S]*))?$/i.exec(t.trim());
  return i ? { name: i[1].toLowerCase(), argument: i[2]?.trim() || "" } : null;
}
function qd(t) {
  const i = Object.values(t).filter((o) => typeof o == "number");
  return Object.entries(t).filter(([o, s]) => i.indexOf(+o) === -1).map(([o, s]) => s);
}
function Cx(t, i = "|") {
  return t.map((a) => y1(a)).join(i);
}
function $d(t, i) {
  return typeof i == "bigint" ? i.toString() : i;
}
class QS {
  constructor(i) {
    this._getter = i, this._value = void 0;
  }
  get value() {
    const i = this._getter;
    return i !== void 0 && (this._value = i(), this._getter = void 0), this._value;
  }
}
function mp(t) {
  return new QS(t);
}
function PS(t) {
  return t == null;
}
function gp(t) {
  const i = t.startsWith("^") ? 1 : 0, a = t.endsWith("$") ? t.length - 1 : t.length;
  return t.slice(i, a);
}
function KS(t, i) {
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
function h1(t) {
  const i = Object.getOwnPropertyDescriptor(t, "shape");
  return i?.get ? i.get.raw : i?.value;
}
function qi(t) {
  return h1(t._zod.def) ?? t._zod.def.shape;
}
function m1(t, i, a) {
  Object.defineProperty(t, i, {
    get() {
      const o = a();
      return la(this, i, o), o;
    },
    enumerable: !0,
    configurable: !0
  });
}
function g1(t, i, a) {
  i in t ? la(t, i, a) : t[i] = a;
}
function ra(t, i, a, o) {
  const s = qi(i);
  for (const c of a) {
    const f = Object.getOwnPropertyDescriptor(s, c);
    f.enumerable && (f.get ? m1(t, c, () => {
      const p = i._zod.def.shape[c];
      return o ? o(p, c) : p;
    }) : g1(t, c, o ? o(f.value, c) : f.value));
  }
}
function JS(t, i) {
  for (const a of Reflect.ownKeys(i)) {
    const o = Object.getOwnPropertyDescriptor(i, a);
    o.enumerable && (o.get ? m1(t, a, () => i[a]) : g1(t, a, o.value));
  }
}
function An(...t) {
  const i = {};
  for (const a of t) {
    const o = Object.getOwnPropertyDescriptors(a);
    Object.assign(i, o);
  }
  return Object.defineProperties({}, i);
}
function WS(t) {
  return JSON.stringify(t);
}
function ez(t) {
  return t.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const b1 = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {
};
function pu(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
const tz = /* @__PURE__ */ mp(() => {
  if (vi.jitless || typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const t = Function;
    return new t(""), !0;
  } catch {
    return !1;
  }
});
function vo(t) {
  if (pu(t) === !1)
    return !1;
  const i = t.constructor;
  if (i === void 0 || typeof i != "function")
    return !0;
  const a = i.prototype;
  return !(pu(a) === !1 || Object.prototype.hasOwnProperty.call(a, "isPrototypeOf") === !1);
}
function x1(t) {
  return vo(t) ? { ...t } : Array.isArray(t) ? [...t] : t instanceof Map ? new Map(t) : t instanceof Set ? new Set(t) : t;
}
const nz = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function zu(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function zr(t, i, a) {
  const o = new t._zod.constr(i ?? t._zod.def);
  return (!i || a?.parent) && (o._zod.parent = t), o;
}
function ke(t) {
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
function y1(t) {
  return typeof t == "bigint" ? t.toString() + "n" : typeof t == "string" ? `"${t}"` : `${t}`;
}
function iz(t) {
  return Object.keys(t).filter((i) => t[i]._zod.optin !== void 0 && t[i]._zod.optout === "optional");
}
const v1 = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
}, rz = {
  int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
  uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
};
function az(t, i) {
  const a = t._zod.def, o = a.checks;
  if (o && o.length > 0)
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  const c = {};
  return ra(c, t, _u(t, i)), zr(t, An(a, { shape: c, checks: [] }));
}
function _u(t, i) {
  const a = qi(t), o = [];
  for (const s of Reflect.ownKeys(i)) {
    if (!Object.getOwnPropertyDescriptor(a, s)?.enumerable)
      throw new Error(`Unrecognized key: "${String(s)}"`);
    i[s] && o.push(s);
  }
  return o;
}
function lz(t, i) {
  const a = t._zod.def, o = a.checks;
  if (o && o.length > 0)
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  const c = new Set(_u(t, i)), f = {};
  return ra(f, t, Reflect.ownKeys(qi(t)).filter((p) => !c.has(p))), zr(t, An(a, { shape: f, checks: [] }));
}
function oz(t, i) {
  if (!vo(i))
    throw new Error("Invalid input to extend: expected a plain object");
  const a = t._zod.def.checks;
  if (a && a.length > 0) {
    const s = qi(t);
    for (const c of Reflect.ownKeys(i))
      if (Object.getOwnPropertyDescriptor(s, c) !== void 0)
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
  }
  return zr(t, An(t._zod.def, { shape: w1(t, i) }));
}
function w1(t, i) {
  const a = {};
  return ra(a, t, Reflect.ownKeys(qi(t))), JS(a, i), a;
}
function sz(t, i) {
  if (!vo(i))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  return zr(t, An(t._zod.def, { shape: w1(t, i) }));
}
function uz(t, i) {
  if (!i?._zod?.def)
    throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
  if (t._zod.def.checks?.length)
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  const a = {};
  ra(a, t, Reflect.ownKeys(qi(t))), ra(a, i, Reflect.ownKeys(qi(i)));
  const o = An(t._zod.def, {
    shape: a,
    get catchall() {
      return i._zod.def.catchall;
    },
    checks: i._zod.def.checks ?? []
  });
  return zr(t, o);
}
function Tx(t, i, a, o = "partial") {
  const c = i._zod.def.checks;
  if (c && c.length > 0)
    throw new Error(`.${o}() cannot be used on object schemas containing refinements`);
  const p = a ? new Set(_u(i, a)) : void 0, m = {};
  return ra(m, i, Reflect.ownKeys(qi(i)), t && ((g, x) => p && !p.has(x) ? g : new t({ type: "optional", innerType: g }))), zr(i, An(i._zod.def, { shape: m, checks: [] }));
}
function cz(t, i, a) {
  const o = a ? new Set(_u(i, a)) : void 0, s = {};
  return ra(s, i, Reflect.ownKeys(qi(i)), (c, f) => (
    // overwrite with non-optional
    o && !o.has(f) ? c : new t({ type: "nonoptional", innerType: c })
  )), zr(i, An(i._zod.def, { shape: s }));
}
function Zi(t, i = 0) {
  if (t.aborted === !0)
    return !0;
  for (let a = i; a < t.issues.length; a++)
    if (t.issues[a]?.continue !== !0)
      return !0;
  return !1;
}
function fz(t, i = 0) {
  if (t.aborted === !0)
    return !0;
  for (let a = i; a < t.issues.length; a++)
    if (t.issues[a]?.continue === !1)
      return !0;
  return !1;
}
function k1(t, i) {
  return i.map((a) => {
    var o;
    return (o = a).path ?? (o.path = []), a.path.unshift(t), a;
  });
}
function ro(t) {
  return typeof t == "string" ? t : t?.message;
}
function Nx(t) {
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
function Vd(t, i, a) {
  var o;
  for (let s = i; s < t.length; s++)
    (o = t[s]).schema ?? (o.schema = a);
}
function al(t, i, a) {
  var o;
  const s = t.inst?._zod?.traits;
  s?.has("$ZodType") && (s.has("$ZodCheck") ? (o = t).schema ?? (o.schema = t.inst) : t.schema = t.inst);
  const c = t.schema !== t.inst ? t.schema?._zod.def?.error : void 0, f = t.message ? t.message : ro(t.inst?._zod.def?.error?.(t)) ?? ro(c?.(t)) ?? ro(i?.error?.(t)) ?? ro(a.customError?.(t)) ?? ro(a.localeError?.(t)) ?? "Invalid input", p = {};
  for (const m of Object.keys(t))
    m === "inst" || m === "schema" || m === "continue" || m === "input" || m === "__proto__" || (p[m] = t[m]);
  return p.path ?? (p.path = []), p.message = f, i?.reportInput && (p.input = t.input), p;
}
const dz = /[\uD800-\uDBFF]/;
function bp(t) {
  const i = t.length;
  if (!dz.test(t))
    return i;
  let a = i;
  for (let o = 0; o < i - 1; o++)
    (t.charCodeAt(o) & 64512) === 55296 && (t.charCodeAt(o + 1) & 64512) === 56320 && (a--, o++);
  return a;
}
function xp(t) {
  return Array.isArray(t) ? "array" : typeof t == "string" ? "string" : "unknown";
}
function pz(t) {
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
function wo(...t) {
  const [i, a, o] = t;
  return typeof i == "string" ? {
    message: i,
    code: "custom",
    input: a,
    inst: o
  } : { ...i };
}
function hz(t, i) {
  for (const a in i) {
    const o = Object.getOwnPropertyDescriptor(i, a);
    o.get ? Object.defineProperty(t, a, { ...o, enumerable: !1 }) : mz(t, a, o.value);
  }
}
function Sr(t, i, a, o = !0) {
  return Object.defineProperty(t, i, { configurable: !0, writable: !0, enumerable: o, value: a }), a;
}
function S1(t, i, a) {
  return Sr(t, i, a, !1);
}
function z1(t, i) {
  for (const a in t) {
    const o = t[a];
    Object.defineProperty(i, a, {
      configurable: !0,
      enumerable: !0,
      get() {
        return Sr(this, a, o(this));
      },
      set(s) {
        Sr(this, a, s);
      }
    });
  }
  return i;
}
function mz(t, i, a) {
  Object.defineProperty(t, i, {
    configurable: !0,
    get() {
      return this == null ? a : Sr(this, i, a.bind(this));
    },
    set(o) {
      Sr(this, i, o);
    }
  });
}
function gz(t, i) {
  const a = Object.getPrototypeOf(t);
  return i in a ? void 0 : a;
}
let md, yr = !1;
const bz = {
  configurable: !0,
  get() {
    yr = !0;
  }
};
function tt(t, i, a) {
  const o = Object.getPrototypeOf(t._zod);
  if (i in o && md !== t._zod) {
    md = void 0;
    return;
  }
  md = t._zod, Object.defineProperty(o, i, {
    configurable: !0,
    get() {
      Object.defineProperty(this, i, bz);
      const s = yr;
      yr = !1;
      try {
        const c = a(this);
        return yr ? delete this[i] : Object.defineProperty(this, i, { configurable: !0, writable: !0, value: c }), yr = yr || s, c;
      } catch (c) {
        throw delete this[i], yr = yr || s, c;
      }
    },
    set(s) {
      Object.defineProperty(this, i, { configurable: !0, writable: !0, value: s });
    }
  });
}
function xz(t, i, a, o) {
  const s = gz(t, i);
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
const yz = "~constantCatch";
function vz(t) {
  const i = () => t;
  return i[yz] = !0, i;
}
var Ax;
const gd = { value: void 0, enumerable: !1 };
let Ox = "captureStackTrace" in Error ? Error : null;
function wz(t) {
  const i = Ox;
  if (i) {
    const a = i.stackTraceLimit;
    if (typeof a == "number") {
      try {
        i.stackTraceLimit = 0;
      } catch {
        return Ox = null, new t();
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
      gd.value = new c(v);
      try {
        Object.defineProperty(w, "_zod", gd);
      } finally {
        gd.value = void 0;
      }
    }
    if (w._zod.traits.add(t), i(w, v), p) {
      const j = Object.getPrototypeOf(w), C = w._zod.constr.prototype;
      let O = j;
      for (; O && O !== C; )
        O = Object.getPrototypeOf(O);
      const I = O ?? j;
      p.has(I) || (p.add(I), hz(I, f));
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
    const v = o?.Parent ? wz(x) : this;
    m(v, w);
    const S = v._zod.deferred;
    if (S) {
      for (const C of S)
        C();
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
class _1 extends Error {
  constructor(i) {
    super(`Encountered unidirectional transform during encode: ${i}`), this.name = "ZodEncodeError";
  }
}
(Ax = globalThis).__zod_globalConfig ?? (Ax.__zod_globalConfig = {});
const vi = globalThis.__zod_globalConfig;
function _r(t) {
  return t && Object.assign(vi, t), vi;
}
function kz() {
  const t = this._zod;
  return t.message ?? (t.message = JSON.stringify(t.def, $d, 2)), t.message;
}
function Sz(t) {
  this._zod.message = t;
}
const zz = {
  get: kz,
  set: Sz,
  enumerable: !0,
  configurable: !0
}, bd = { value: void 0, enumerable: !1 }, Dx = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]), _z = (t, i) => {
  t.name = "$ZodError", bd.value = i, Object.defineProperty(t, "issues", bd), bd.value = void 0, Object.defineProperty(t, "message", zz);
  const a = Object.getPrototypeOf(t);
  Dx.has(a) || (Dx.add(a), Object.defineProperty(a, "toString", {
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
}, jz = P("$ZodError", _z);
function Ez(t, i, a) {
  return Object.prototype.hasOwnProperty.call(t, i) || (i === "__proto__" ? Object.defineProperty(t, i, { value: a(), writable: !0, enumerable: !0, configurable: !0 }) : t[i] = a()), t[i];
}
function Cz(t, i = (a) => a.message) {
  const a = {}, o = [];
  for (const s of t.issues)
    s.path.length > 0 ? Ez(a, s.path[0], () => []).push(i(s)) : o.push(i(s));
  return { formErrors: o, fieldErrors: a };
}
function Tz(t, i = (a) => a.message) {
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
function ju(t, i) {
  return { callee: i?.callee ?? t, Err: i?.Err };
}
const yp = (t) => {
  const i = (a, o, s, c) => {
    const f = s ? { ...s, async: !1 } : { async: !1 }, p = a._zod.run({ value: o, issues: [] }, f);
    if (p instanceof Promise)
      throw new ta();
    if (p.issues.length) {
      const m = new (c?.Err ?? t)(p.issues.map((g) => al(g, f, _r())));
      throw b1(m, c?.callee ?? i), m;
    }
    return p.value;
  };
  return i;
}, vp = (t) => {
  const i = async (a, o, s, c) => {
    const f = s ? { ...s, async: !0 } : { async: !0 };
    let p = a._zod.run({ value: o, issues: [] }, f);
    if (p instanceof Promise && (p = await p), p.issues.length) {
      const m = new (c?.Err ?? t)(p.issues.map((g) => al(g, f, _r())));
      throw b1(m, c?.callee ?? i), m;
    }
    return p.value;
  };
  return i;
}, wp = (t) => (i, a, o) => {
  const s = o ? { ...o, async: !1 } : { async: !1 }, c = i._zod.run({ value: a, issues: [] }, s);
  if (c instanceof Promise)
    throw new ta();
  return c.issues.length ? j1(t, c.issues, s) : { success: !0, data: c.value };
};
function j1(t, i, a) {
  let o;
  return {
    success: !1,
    get error() {
      return o || (o = new t(i.map((s) => al(s, a, _r()))), i = void 0, a = void 0), o;
    },
    set error(s) {
      o = s, i = void 0, a = void 0;
    }
  };
}
const kp = (t) => async (i, a, o) => {
  const s = o ? { ...o, async: !0 } : { async: !0 };
  let c = i._zod.run({ value: a, issues: [] }, s);
  return c instanceof Promise && (c = await c), c.issues.length ? j1(t, c.issues, s) : { success: !0, data: c.value };
}, Nz = /* @__PURE__ */ Symbol.for("zod.compile.invalid"), Az = /* @__PURE__ */ Symbol.for("zod.compile.fallback"), Oz = ((t, i, a) => {
  const o = t._zod.bag.validator;
  if (o !== void 0) {
    if (o(i) !== Nz)
      return !0;
    if (o.definite === !0 && a === void 0)
      return !1;
  }
  return Dz(t, i, a);
});
function Dz(t, i, a) {
  const o = a ? { ...a, async: !1, abortEarly: !0 } : { async: !1, abortEarly: !0 }, s = t._zod.bag.fallbackRun;
  let c;
  if (s ? (o[Az] = !0, c = s({ value: i, issues: [] }, o)) : c = t._zod.run({ value: i, issues: [] }, o), c instanceof Promise)
    throw new ta();
  return c.issues.length === 0;
}
const Mz = async (t, i, a) => {
  const o = a ? { ...a, async: !0, abortEarly: !0 } : { async: !0, abortEarly: !0 };
  let s = t._zod.run({ value: i, issues: [] }, o);
  return s instanceof Promise && (s = await s), s.issues.length === 0;
}, Rz = (t) => {
  const i = yp(t), a = (o, s, c, f) => {
    const p = c ? { ...c, direction: "backward" } : { direction: "backward" };
    return i(o, s, p, ju(a, f));
  };
  return a;
}, Uz = (t) => {
  const i = yp(t), a = (o, s, c, f) => i(o, s, c, ju(a, f));
  return a;
}, Lz = (t) => {
  const i = vp(t), a = async (o, s, c, f) => {
    const p = c ? { ...c, direction: "backward" } : { direction: "backward" };
    return await i(o, s, p, ju(a, f));
  };
  return a;
}, Bz = (t) => {
  const i = vp(t), a = async (o, s, c, f) => await i(o, s, c, ju(a, f));
  return a;
}, Iz = (t) => (i, a, o) => {
  const s = o ? { ...o, direction: "backward" } : { direction: "backward" };
  return wp(t)(i, a, s);
}, Hz = (t) => (i, a, o) => wp(t)(i, a, o), Zz = (t) => async (i, a, o) => {
  const s = o ? { ...o, direction: "backward" } : { direction: "backward" };
  return kp(t)(i, a, s);
}, qz = (t) => async (i, a, o) => kp(t)(i, a, o), $z = /^[cC][0-9a-z]{6,}$/, Vz = /^[0-9a-z]+$/, Yz = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/, Gz = /^[0-9a-vA-V]{20}$/, Fz = /^[A-Za-z0-9]{27}$/, Xz = /^[a-zA-Z0-9_-]{21}$/;
function Qz(t) {
  return new RegExp(`^[a-zA-Z0-9_-]{${t}}$`);
}
const Pz = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, Kz = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, Mx = (t) => t ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, Jz = /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, Wz = "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$";
function e_() {
  return new RegExp(Wz, "u");
}
const t_ = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, n_ = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, i_ = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, r_ = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, a_ = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, l_ = /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/, o_ = /^https?$/, s_ = /^\+[1-9]\d{6,14}$/, E1 = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))";
function u_(t) {
  return new RegExp(`^${t}$`);
}
const c_ = /* @__PURE__ */ u_(E1);
function Yd(t) {
  const i = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof t.precision == "number" ? t.precision === -1 ? `${i}` : t.precision === 0 ? `${i}:[0-5]\\d` : `${i}:[0-5]\\d\\.\\d{${t.precision}}` : t.seconds ? `${i}:[0-5]\\d(?:\\.\\d+)?` : `${i}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function f_(t) {
  return new RegExp(`^${Yd(t)}$`);
}
function d_(t) {
  const i = ["Z"];
  t.offset && i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const a = `${Yd({ precision: t.precision, seconds: !0 })}(?:${i.join("|")})`, o = t.local ? `${a}|${Yd({ precision: t.precision })}` : a;
  return new RegExp(`^${E1}T(?:${o})$`);
}
const p_ = /^[\s\S]{0,}$/, h_ = /^-?\d+(?:\.\d+)?$/, m_ = /^(?:true|false)$/i, g_ = /^[^A-Z]*$/, b_ = /^[^a-z]*$/, yn = /* @__PURE__ */ P("$ZodCheck", (t, i) => {
  var a;
  t._zod ?? (t._zod = {}), t._zod.def = i, (a = t._zod).onattach ?? (a.onattach = []);
}), Sp = (t) => {
  const i = t.value;
  return !PS(i) && i.length !== void 0;
}, hu = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, C1 = /* @__PURE__ */ P("$ZodCheckLessThan", (t, i) => {
  yn.init(t, i);
  const a = hu[typeof i.value];
  t._zod.check = (o) => {
    (i.inclusive ? o.value <= i.value : o.value < i.value) || o.issues.push({
      origin: hu[typeof o.value] ?? a,
      code: "too_big",
      maximum: typeof i.value == "object" ? i.value.getTime() : i.value,
      input: o.value,
      inclusive: i.inclusive,
      inst: t,
      continue: !i.abort
    });
  };
}), T1 = /* @__PURE__ */ P("$ZodCheckGreaterThan", (t, i) => {
  yn.init(t, i);
  const a = hu[typeof i.value];
  t._zod.check = (o) => {
    (i.inclusive ? o.value >= i.value : o.value > i.value) || o.issues.push({
      origin: hu[typeof o.value] ?? a,
      code: "too_small",
      minimum: typeof i.value == "object" ? i.value.getTime() : i.value,
      input: o.value,
      inclusive: i.inclusive,
      inst: t,
      continue: !i.abort
    });
  };
}), x_ = /* @__PURE__ */ P("$ZodCheckMultipleOf", (t, i) => {
  yn.init(t, i), t._zod.check = (a) => {
    if (typeof a.value != typeof i.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof a.value == "bigint" ? (
      // `value % 0n` throws, and nothing is a multiple of zero — the number branch already fails this way via NaN
      i.value !== BigInt(0) && a.value % i.value === BigInt(0)
    ) : KS(a.value, i.value) === 0) || a.issues.push({
      origin: typeof a.value,
      code: "not_multiple_of",
      divisor: i.value,
      input: a.value,
      inst: t,
      continue: !i.abort
    });
  };
}), y_ = /* @__PURE__ */ P("$ZodCheckNumberFormat", (t, i) => {
  yn.init(t, i), i.format = i.format || "float64";
  const a = i.format?.includes("int"), o = a ? "int" : "number", [s, c] = v1[i.format];
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
}), v_ = /* @__PURE__ */ P("$ZodCheckMaxLength", (t, i) => {
  var a;
  yn.init(t, i), (a = t._zod.def).when ?? (a.when = Sp), t._zod.check = (o) => {
    const s = o.value, c = s.length;
    if ((typeof s == "string" && c > i.maximum ? bp(s) : c) <= i.maximum)
      return;
    const p = xp(s);
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
}), w_ = /* @__PURE__ */ P("$ZodCheckMinLength", (t, i) => {
  var a;
  yn.init(t, i), (a = t._zod.def).when ?? (a.when = Sp), t._zod.check = (o) => {
    const s = o.value, c = s.length;
    if ((typeof s == "string" && c >= i.minimum && c < i.minimum * 2 ? bp(s) : c) >= i.minimum)
      return;
    const p = xp(s);
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
}), k_ = /* @__PURE__ */ P("$ZodCheckLengthEquals", (t, i) => {
  var a;
  yn.init(t, i), (a = t._zod.def).when ?? (a.when = Sp), t._zod.check = (o) => {
    const s = o.value, c = s.length, f = typeof s == "string" && c >= i.length && c <= i.length * 2 ? bp(s) : c;
    if (f === i.length)
      return;
    const p = xp(s), m = f > i.length;
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
}), Eu = /* @__PURE__ */ P("$ZodCheckStringFormat", (t, i) => {
  var a, o;
  yn.init(t, i), i.pattern ? (a = t._zod).check ?? (a.check = (s) => {
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
}), S_ = /* @__PURE__ */ P("$ZodCheckRegex", (t, i) => {
  Eu.init(t, i), t._zod.check = (a) => {
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
}), z_ = /* @__PURE__ */ P("$ZodCheckLowerCase", (t, i) => {
  i.pattern ?? (i.pattern = g_), Eu.init(t, i);
}), __ = /* @__PURE__ */ P("$ZodCheckUpperCase", (t, i) => {
  i.pattern ?? (i.pattern = b_), Eu.init(t, i);
}), j_ = /* @__PURE__ */ P("$ZodCheckIncludes", (t, i) => {
  yn.init(t, i);
  const a = zu(i.includes), o = new RegExp(typeof i.position == "number" ? `^.{${i.position},}${a}` : a);
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
}), E_ = /* @__PURE__ */ P("$ZodCheckStartsWith", (t, i) => {
  yn.init(t, i);
  const a = new RegExp(`^${zu(i.prefix)}.*`);
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
}), C_ = /* @__PURE__ */ P("$ZodCheckEndsWith", (t, i) => {
  yn.init(t, i);
  const a = new RegExp(`.*${zu(i.suffix)}$`);
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
}), T_ = /* @__PURE__ */ P("$ZodCheckOverwrite", (t, i) => {
  yn.init(t, i), t._zod.check = (a) => {
    a.value = i.tx(a.value);
  };
});
class N_ {
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
const A_ = {
  major: 4,
  minor: 6,
  patch: 7
}, St = /* @__PURE__ */ P("$ZodType", (t, i) => {
  var a;
  t ?? (t = {}), t._zod.def = i, t._zod.bag = t._zod.bag || {}, t._zod.version = A_;
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
      let x = Zi(p), b;
      for (const w of m) {
        if (w._zod.def.when) {
          if (fz(p) || !w._zod.def.when(p))
            continue;
        } else if (x)
          continue;
        const v = p.issues.length, S = w._zod.check(p);
        if (S instanceof Promise && g?.async === !1)
          throw new ta();
        if (b || S instanceof Promise)
          b = (b ?? Promise.resolve()).then(async () => {
            await S, p.issues.length !== v && (Vd(p.issues, v, t), x || (x = Zi(p, v)));
          });
        else {
          if (p.issues.length === v)
            continue;
          Vd(p.issues, v, t), x || (x = Zi(p, v));
        }
      }
      return b ? b.then(() => p) : p;
    }, f = (p, m, g) => {
      if (Zi(p))
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
    return S1(this, "~standard", A1(this));
  },
  set "~standard"(t) {
    Sr(this, "~standard", t);
  }
}), N1 = (t, i) => t.issues.length ? { issues: t.issues.map((a) => al(a, i, _r())) } : { value: t.value };
async function O_(t, i) {
  const a = { async: !0 };
  return N1(await t._zod.run({ value: i, issues: [] }, a), a);
}
function A1(t) {
  return {
    validate: (i) => {
      const a = { async: !1 };
      try {
        const o = t._zod.run({ value: i, issues: [] }, a);
        if (!(o instanceof Promise))
          return N1(o, a);
      } catch {
      }
      return O_(t, i);
    },
    vendor: "zod",
    version: 1
  };
}
const zp = /* @__PURE__ */ P("$ZodString", (t, i) => {
  St.init(t, i), t._zod.pattern = i.pattern ?? p_, t._zod.parse = (a, o) => {
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
}), ft = /* @__PURE__ */ P("$ZodStringFormat", (t, i) => {
  Eu.init(t, i), zp.init(t, i);
}), D_ = /* @__PURE__ */ P("$ZodGUID", (t, i) => {
  i.pattern ?? (i.pattern = Kz), ft.init(t, i);
}), M_ = /* @__PURE__ */ P("$ZodUUID", (t, i) => {
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
    i.pattern ?? (i.pattern = Mx(o));
  } else
    i.pattern ?? (i.pattern = Mx());
  ft.init(t, i);
}), R_ = /* @__PURE__ */ P("$ZodEmail", (t, i) => {
  i.pattern ?? (i.pattern = Jz), ft.init(t, i);
}), O1 = 1, mu = 2;
function D1(t) {
  try {
    return typeof URL < "u" && typeof URL.canParse == "function" ? URL.canParse(t) : (new URL(t), !0);
  } catch {
    return !1;
  }
}
function U_(t, i) {
  return !("normalize" in i) && !("hostname" in i) && !("protocol" in i) ? D1(t) || mu : L_(t, i);
}
function L_(t, i) {
  if (!i.normalize && i.protocol?.source === o_.source && !/^https?:\/\//i.test(t))
    return O1;
  try {
    if (typeof URL < "u") {
      const a = URL;
      if (typeof a.parse == "function")
        return a.parse(t) ?? mu;
    }
    return new URL(t);
  } catch {
    return mu;
  }
}
const B_ = /[\t\n\r]/g;
function Rx(t) {
  return t.replace(B_, "");
}
function I_(t, i) {
  return i.lastIndex = 0, i.test(t.hostname);
}
function H_(t, i) {
  return i.lastIndex = 0, i.test(t.protocol.endsWith(":") ? t.protocol.slice(0, -1) : t.protocol);
}
const Z_ = /* @__PURE__ */ P("$ZodURL", (t, i) => {
  ft.init(t, i), t._zod.check = (a) => {
    try {
      const o = a.value.trim(), s = U_(o, i);
      if (s === O1) {
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
      if (s === mu) {
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
        a.value = Rx(o);
        return;
      }
      i.hostname && !I_(s, i.hostname) && a.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: i.hostname.source,
        input: a.value,
        inst: t,
        continue: !i.abort
      }), i.protocol && !H_(s, i.protocol) && a.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: i.protocol.source,
        input: a.value,
        inst: t,
        continue: !i.abort
      }), a.value = i.normalize ? s.href : Rx(o);
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
}), q_ = /* @__PURE__ */ P("$ZodEmoji", (t, i) => {
  i.pattern ?? (i.pattern = e_()), ft.init(t, i);
}), $_ = /* @__PURE__ */ P("$ZodNanoID", (t, i) => {
  if (i.length !== void 0 && (!Number.isInteger(i.length) || i.length < 1))
    throw new Error(`Invalid nanoid length: ${i.length}`);
  i.pattern ?? (i.pattern = i.length === void 0 ? Xz : Qz(i.length)), ft.init(t, i);
}), V_ = /* @__PURE__ */ P("$ZodCUID", (t, i) => {
  i.pattern ?? (i.pattern = $z), ft.init(t, i);
}), Y_ = /* @__PURE__ */ P("$ZodCUID2", (t, i) => {
  i.pattern ?? (i.pattern = Vz), ft.init(t, i);
}), G_ = /* @__PURE__ */ P("$ZodULID", (t, i) => {
  i.pattern ?? (i.pattern = Yz), ft.init(t, i);
}), F_ = /* @__PURE__ */ P("$ZodXID", (t, i) => {
  i.pattern ?? (i.pattern = Gz), ft.init(t, i);
}), X_ = /* @__PURE__ */ P("$ZodKSUID", (t, i) => {
  i.pattern ?? (i.pattern = Fz), ft.init(t, i);
}), Q_ = /* @__PURE__ */ P("$ZodISODateTime", (t, i) => {
  i.pattern ?? (i.pattern = d_(i)), ft.init(t, i);
}), P_ = /* @__PURE__ */ P("$ZodISODate", (t, i) => {
  i.pattern ?? (i.pattern = c_), ft.init(t, i);
}), K_ = /* @__PURE__ */ P("$ZodISOTime", (t, i) => {
  i.pattern ?? (i.pattern = f_(i)), ft.init(t, i);
}), J_ = /* @__PURE__ */ P("$ZodISODuration", (t, i) => {
  i.pattern ?? (i.pattern = Pz), ft.init(t, i);
}), W_ = /* @__PURE__ */ P("$ZodIPv4", (t, i) => {
  i.pattern ?? (i.pattern = t_), ft.init(t, i);
}), e4 = /^[0-9a-fA-F:.]+$/;
function M1(t) {
  return e4.test(t) ? D1(`http://[${t}]`) : !1;
}
const t4 = /* @__PURE__ */ P("$ZodIPv6", (t, i) => {
  i.pattern ?? (i.pattern = n_), ft.init(t, i), t._zod.check = (a) => {
    M1(a.value) || a.issues.push({
      code: "invalid_format",
      format: "ipv6",
      input: a.value,
      inst: t,
      continue: !i.abort
    });
  };
}), n4 = /* @__PURE__ */ P("$ZodCIDRv4", (t, i) => {
  i.pattern ?? (i.pattern = i_), ft.init(t, i);
});
function i4(t) {
  const i = t.split("/");
  if (i.length !== 2)
    return !1;
  const [a, o] = i;
  if (!o)
    return !1;
  const s = Number(o);
  return `${s}` !== o || s < 0 || s > 128 ? !1 : M1(a);
}
const r4 = /* @__PURE__ */ P("$ZodCIDRv6", (t, i) => {
  i.pattern ?? (i.pattern = r_), ft.init(t, i), t._zod.check = (a) => {
    i4(a.value) || a.issues.push({
      code: "invalid_format",
      format: "cidrv6",
      input: a.value,
      inst: t,
      continue: !i.abort
    });
  };
});
function R1(t) {
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
const U1 = /^[0-9a-zA-Z+/]*={0,2}$/, a4 = /* @__PURE__ */ P("$ZodBase64", (t, i) => {
  i.pattern ?? (i.pattern = U1), ft.init(t, i), t._zod.check = (a) => {
    R1(a.value) || a.issues.push({
      code: "invalid_format",
      format: "base64",
      input: a.value,
      inst: t,
      continue: !i.abort
    });
  };
}), _p = /^[A-Za-z0-9_-]*$/;
function l4(t) {
  if (!_p.test(t))
    return !1;
  const i = t.replace(/[-_]/g, (o) => o === "-" ? "+" : "/"), a = i.padEnd(Math.ceil(i.length / 4) * 4, "=");
  return R1(a);
}
const o4 = /* @__PURE__ */ P("$ZodBase64URL", (t, i) => {
  i.pattern ?? (i.pattern = _p), ft.init(t, i), t._zod.check = (a) => {
    l4(a.value) || a.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: a.value,
      inst: t,
      continue: !i.abort
    });
  };
}), s4 = /* @__PURE__ */ P("$ZodE164", (t, i) => {
  i.pattern ?? (i.pattern = s_), ft.init(t, i);
});
function u4(t, i = null) {
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
const c4 = /* @__PURE__ */ P("$ZodJWT", (t, i) => {
  ft.init(t, i), t._zod.check = (a) => {
    u4(a.value, i.alg) || a.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: a.value,
      inst: t,
      continue: !i.abort
    });
  };
}), L1 = /* @__PURE__ */ P("$ZodNumber", (t, i) => {
  St.init(t, i), t._zod.pattern = h_, t._zod.parse = (a, o) => {
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
}), f4 = /* @__PURE__ */ P("$ZodNumberFormat", (t, i) => {
  y_.init(t, i), L1.init(t, i);
}), d4 = /* @__PURE__ */ P("$ZodBoolean", (t, i) => {
  St.init(t, i), t._zod.pattern = m_, t._zod.parse = (a, o) => {
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
}), p4 = /* @__PURE__ */ P("$ZodUnknown", (t, i) => {
  St.init(t, i), t._zod.parse = (a) => a;
}), h4 = /* @__PURE__ */ P("$ZodNever", (t, i) => {
  St.init(t, i), t._zod.parse = (a, o) => (a.issues.push({
    expected: "never",
    code: "invalid_type",
    input: a.value,
    inst: t
  }), a);
});
function m4(t, i) {
  const a = Nx(t._zod.def.checks);
  if (!a.length)
    return;
  const o = Math.min(...a.map((c) => c[0])), s = t._zod.parse;
  t._zod.parse = (c, f) => {
    const p = i(c.value);
    if (p > o && !f?.skipChecks && f?.direction !== "backward") {
      for (const [m, g] of Nx(t._zod.def.checks))
        if (p > m && g._zod.def.when(c)) {
          const x = c.issues.length;
          return g._zod.check(c), c.issues[x].continue = !1, Vd(c.issues, x, t), c;
        }
    }
    return s(c, f);
  };
}
const g4 = (t) => Array.isArray(t) ? t.length : -1;
function Ux(t, i, a) {
  t.issues.length && i.issues.push(...k1(a, t.issues)), i.value[a] = t.value;
}
const b4 = /* @__PURE__ */ P("$ZodArray", (t, i) => {
  St.init(t, i);
  const a = vi.memoizer;
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
        f.push(x.then((b) => Ux(b, o, m)));
      else if (Ux(x, o, m), p && x.issues.length !== 0 && Zi(x))
        break;
    }
    return f.length ? Promise.all(f).then(() => o) : o;
  }, m4(t, g4);
});
function gu(t, i, a, o, s, c) {
  const f = a in o, p = c === "optional";
  if (!(!f && p && s === "optional")) {
    if (t.issues.length) {
      if (s !== void 0 && p && !f)
        return;
      i.issues.push(...k1(a, t.issues));
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
const x4 = [];
function B1(t) {
  const i = Object.keys(t.shape), a = Object.getOwnPropertySymbols(t.shape), o = a.length ? a : x4, s = o.length ? [...i, ...o] : i;
  for (const f of s)
    if (!t.shape?.[f]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${String(f)}": expected a Zod schema`);
  const c = iz(t.shape);
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
function I1(t, i, a, o, s, c, f) {
  const p = [], m = s.keySet, g = s.catchall._zod, x = g.def.type, b = g.optin, w = g.optout;
  let v = 0;
  for (const S in i) {
    if (f && a.issues.length !== v) {
      if (Zi(a, v))
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
    j instanceof Promise ? t.push(j.then((C) => gu(C, a, S, i, b, w))) : gu(j, a, S, i, b, w);
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
const y4 = /* @__PURE__ */ P("$ZodObject", (t, i) => {
  St.init(t, i);
  const a = Object.getOwnPropertyDescriptor(i, "shape"), o = a?.get ? a.get.raw : i.shape ?? {};
  if (o) {
    const g = () => {
      const x = { ...o };
      return Object.defineProperty(i, "shape", { value: x }), g.raw = x, x;
    };
    g.raw = o, Object.defineProperty(i, "shape", { get: g });
  }
  const s = mp(() => B1(i));
  tt(t, "propValues", (g) => {
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
  const c = pu, f = i.catchall;
  let p;
  const m = vi.memoizer;
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
    for (const C of p.allKeys) {
      if (S && g.issues.length !== j) {
        if (Zi(g, j))
          break;
        j = g.issues.length;
      }
      if (C === "__proto__")
        continue;
      const O = v[C], I = O._zod.optin, U = O._zod.optout, Y = O._zod.run({ value: b[C], issues: [] }, x);
      Y instanceof Promise ? w.push(Y.then((K) => gu(K, g, C, b, I, U))) : gu(Y, g, C, b, I, U);
    }
    return f ? I1(w, b, g, x, s.value, t, S === !0) : w.length ? Promise.all(w).then(() => g) : g;
  };
}), v4 = /* @__PURE__ */ P("$ZodObjectJIT", (t, i) => {
  y4.init(t, i);
  const a = t._zod.parse, o = mp(() => B1(i)), s = vi.memoizer, c = (v) => {
    const S = o.value, j = S.symbolKeys, C = new N_(["payload", "ctx"], { shape: v, inst: t, memo: s, syms: j }), O = (K) => `shape[${K}]._zod.run({ value: input[${K}], issues: [] }, ctx)`, I = (K, N) => `
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
    C.write("const input = payload.value;");
    const U = /* @__PURE__ */ Object.create(null);
    let Y = 0;
    for (const K of S.allKeys)
      U[K] = `key_${Y++}`;
    C.write(s ? "const newResult = memo.alloc(inst, payload, {}, ctx);" : "const newResult = {};");
    for (const K of S.allKeys) {
      if (K === "__proto__")
        continue;
      const N = U[K], F = typeof K == "symbol" ? `syms[${j.indexOf(K)}]` : WS(K), le = `${F} in input`, ye = v[K], Z = ye?._zod?.optin, ee = Z !== void 0, se = ye?._zod?.optout === "optional";
      if (C.write(`const ${N} = ${O(F)};`), ee && se) {
        const Ne = Z === "optional" ? `${N}_present` : `${N}.value !== undefined || ${N}_present`;
        C.write(`
        const ${N}_present = ${le};
        if (!${N}.issues.length || ${N}_present) {
          if (${N}.issues.length) {${I(N, F)}
          }

          if (${Ne}) {
            newResult[${F}] = ${N}.value;
          }
        }

      `);
      } else ee ? (C.write(`
        if (${N}.issues.length) {${I(N, F)}
        }
      `), Z === "defaulted" ? C.write(`newResult[${F}] = ${N}.value;`) : C.write(`
        if (${N}.value !== undefined || ${le}) {
          newResult[${F}] = ${N}.value;
        }
      `)) : C.write(`
        const ${N}_present = ${le};
        if (${N}.issues.length) {${I(N, F)}
        }
        if (!${N}_present && !${N}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${F}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${N}_present) {
          newResult[${F}] = ${N}.value;
        }

      `);
    }
    return C.write("payload.value = newResult;"), C.write("return payload;"), C.compile();
  };
  let f;
  const p = pu, m = !vi.jitless, x = m && tz.value, b = i.catchall;
  let w;
  t._zod.parse = (v, S) => {
    w ?? (w = o.value);
    const j = v.value;
    return p(j) ? m && x && S?.async === !1 && S.jitless !== !0 ? (f || (f = c(i.shape)), v = f(v, S), b ? I1([], j, v, S, w, t, S?.abortEarly === !0) : v) : a(v, S) : (v.issues.push({
      expected: "object",
      code: "invalid_type",
      input: j,
      inst: t
    }), v);
  };
});
function Lx(t, i, a, o) {
  for (const c of t)
    if (c.issues.length === 0)
      return i.value = c.value, i;
  const s = t.filter((c) => !Zi(c));
  return s.length === 1 ? (i.value = s[0].value, s[0]) : (i.issues.push({
    code: "invalid_union",
    input: i.value,
    inst: a,
    errors: t.map((c) => c.issues.map((f) => al(f, o, _r())))
  }), i);
}
const w4 = /* @__PURE__ */ P("$ZodUnion", (t, i) => {
  St.init(t, i), tt(t, "optin", (o) => o.def.options.some((s) => s._zod.optin === "defaulted") ? "defaulted" : o.def.options.some((s) => s._zod.optin !== void 0) ? "optional" : void 0), tt(t, "optout", (o) => o.def.options.some((s) => s._zod.optout === "optional") ? "optional" : void 0), tt(t, "values", (o) => {
    if (o.def.options.every((s) => s._zod.values))
      return new Set(o.def.options.flatMap((s) => Array.from(s._zod.values)));
  }), tt(t, "pattern", (o) => {
    if (o.def.options.every((s) => s._zod.pattern)) {
      const s = o.def.options.map((c) => c._zod.pattern);
      return new RegExp(`^(${s.map((c) => gp(c.source)).join("|")})$`);
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
    return c ? Promise.all(f).then((p) => Lx(p, o, t, s)) : Lx(f, o, t, s);
  };
}), k4 = /* @__PURE__ */ P("$ZodIntersection", (t, i) => {
  St.init(t, i), t._zod.parse = (a, o) => {
    const s = a.value, c = i.left._zod.run({ value: s, issues: [] }, o), f = i.right._zod.run({ value: s, issues: [] }, o);
    return c instanceof Promise || f instanceof Promise ? Promise.all([c, f]).then(([m, g]) => Bx(a, m, g)) : Bx(a, c, f);
  };
});
function Gd(t, i) {
  if (t === i)
    return { valid: !0, data: t };
  if (t instanceof Date && i instanceof Date && +t == +i)
    return { valid: !0, data: t };
  if (vo(t) && vo(i)) {
    const a = Object.keys(i), o = Object.keys(t).filter((c) => a.indexOf(c) !== -1), s = { ...t, ...i };
    Object.prototype.hasOwnProperty.call(s, "__proto__") && delete s.__proto__;
    for (const c of o) {
      if (c === "__proto__")
        continue;
      const f = Gd(t[c], i[c]);
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
      const s = t[o], c = i[o], f = Gd(s, c);
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
function Bx(t, i, a) {
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
  const m = Gd(i.value, a.value);
  if (!m.valid) {
    if (Zi(t))
      return t;
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(m.mergeErrorPath)}`);
  }
  return t.value = m.data, t;
}
const S4 = /* @__PURE__ */ P("$ZodEnum", (t, i) => {
  St.init(t, i);
  const a = qd(i.entries), o = new Set(a);
  t._zod.values = o, tt(t, "pattern", (s) => {
    const c = qd(s.def.entries).filter((f) => nz.has(typeof f));
    return new RegExp(c.length ? `^(${c.map((f) => zu(f.toString())).join("|")})$` : "^[^\\s\\S]$");
  }), t._zod.parse = (s, c) => {
    const f = s.value;
    return o.has(f) || s.issues.push({
      code: "invalid_value",
      values: a,
      input: f,
      inst: t
    }), s;
  };
}), z4 = /* @__PURE__ */ P("$ZodTransform", (t, i) => {
  St.init(t, i), t._zod.optin = "optional", vi.memoizer?.guard(t), t._zod.parse = (a, o) => {
    if (o.direction === "backward")
      throw new _1(t.constructor.name);
    const s = i.transform(a.value, a);
    if (o.async)
      return (s instanceof Promise ? s : Promise.resolve(s)).then((f) => (a.value = f, a));
    if (s instanceof Promise)
      throw new ta();
    return a.value = s, a;
  };
});
function Ix(t, i) {
  return t.value = i.issues.length ? void 0 : i.value, t;
}
const H1 = /* @__PURE__ */ P("$ZodOptional", (t, i) => {
  St.init(t, i), tt(t, "optin", (a) => a.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), t._zod.optout = "optional", tt(t, "values", (a) => {
    const o = a.def.innerType._zod.values;
    return o ? /* @__PURE__ */ new Set([...o, void 0]) : void 0;
  }), tt(t, "pattern", (a) => {
    const o = a.def.innerType._zod.pattern;
    return o ? new RegExp(`^(${gp(o.source)})?$`) : void 0;
  }), t._zod.parse = (a, o) => {
    if (a.value === void 0) {
      if (i.innerType._zod.optin !== "defaulted")
        return a;
      const s = i.innerType._zod.run({ value: a.value, issues: [] }, o);
      return s instanceof Promise ? s.then((c) => Ix(a, c)) : Ix(a, s);
    }
    return i.innerType._zod.run(a, o);
  };
}), _4 = /* @__PURE__ */ P("$ZodExactOptional", (t, i) => {
  H1.init(t, i), tt(t, "values", (a) => a.def.innerType._zod.values), tt(t, "pattern", (a) => a.def.innerType._zod.pattern), t._zod.parse = (a, o) => i.innerType._zod.run(a, o);
}), j4 = /* @__PURE__ */ P("$ZodNullable", (t, i) => {
  St.init(t, i), tt(t, "optin", (a) => a.def.innerType._zod.optin), tt(t, "optout", (a) => a.def.innerType._zod.optout), tt(t, "pattern", (a) => {
    const o = a.def.innerType._zod.pattern;
    return o ? new RegExp(`^(${gp(o.source)}|null)$`) : void 0;
  }), tt(t, "values", (a) => a.def.innerType._zod.values ? /* @__PURE__ */ new Set([...a.def.innerType._zod.values, null]) : void 0), t._zod.parse = (a, o) => a.value === null ? a : i.innerType._zod.run(a, o);
}), E4 = /* @__PURE__ */ P("$ZodDefault", (t, i) => {
  St.init(t, i), t._zod.optin = "defaulted", tt(t, "values", (a) => a.def.innerType._zod.values), t._zod.parse = (a, o) => {
    if (o.direction === "backward")
      return i.innerType._zod.run(a, o);
    if (a.value === void 0)
      return a.value = i.defaultValue, a;
    const s = i.innerType._zod.run(a, o);
    return s instanceof Promise ? s.then((c) => Hx(c, i)) : Hx(s, i);
  };
});
function Hx(t, i) {
  return t.value === void 0 && (t.value = i.defaultValue), t;
}
const C4 = /* @__PURE__ */ P("$ZodPrefault", (t, i) => {
  St.init(t, i), t._zod.optin = "defaulted", tt(t, "values", (a) => a.def.innerType._zod.values), t._zod.parse = (a, o) => (o.direction === "backward" || a.value === void 0 && (a.value = i.defaultValue), i.innerType._zod.run(a, o));
}), T4 = /* @__PURE__ */ P("$ZodNonOptional", (t, i) => {
  St.init(t, i), tt(t, "values", (a) => {
    const o = a.def.innerType._zod.values;
    return o ? new Set([...o].filter((s) => s !== void 0)) : void 0;
  }), t._zod.parse = (a, o) => {
    const s = i.innerType._zod.run(a, o);
    return s instanceof Promise ? s.then((c) => Zx(c, t)) : Zx(s, t);
  };
});
function Zx(t, i) {
  return !t.issues.length && t.value === void 0 && t.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: t.value,
    inst: i
  }), t;
}
function qx(t, i, a, o) {
  return i.issues.length ? (t.value = a.catchValue({
    ...i,
    value: t.value,
    error: {
      issues: i.issues.map((s) => al(s, o, _r()))
    },
    input: t.value
  }), t) : (t.value = i.value, i.memo && (t.memo = !0), t);
}
const N4 = /* @__PURE__ */ P("$ZodCatch", (t, i) => {
  St.init(t, i), tt(t, "optin", (a) => a.def.innerType._zod.optin === "defaulted" ? "defaulted" : "optional"), tt(t, "optout", (a) => a.def.innerType._zod.optout), tt(t, "values", (a) => a.def.innerType._zod.values), t._zod.parse = (a, o) => {
    if (o.direction === "backward")
      return i.innerType._zod.run(a, o);
    const s = i.innerType._zod.run({ value: a.value, issues: [] }, o);
    return s instanceof Promise ? s.then((c) => qx(a, c, i, o)) : qx(a, s, i, o);
  };
}), A4 = /* @__PURE__ */ P("$ZodPipe", (t, i) => {
  St.init(t, i), tt(t, "values", (a) => a.def.in._zod.values), tt(t, "optin", (a) => a.def.in._zod.optin), tt(t, "optout", (a) => a.def.out._zod.optout), tt(t, "propValues", (a) => a.def.in._zod.propValues), t._zod.parse = (a, o) => {
    if (o.direction === "backward") {
      const c = i.out._zod.run(a, o);
      return c instanceof Promise ? c.then((f) => Ps(f, i.in, o)) : Ps(c, i.in, o);
    }
    const s = i.in._zod.run(a, o);
    return s instanceof Promise ? s.then((c) => Ps(c, i.out, o)) : Ps(s, i.out, o);
  };
});
function Ps(t, i, a) {
  return t.issues.some((o) => o.code !== "unrecognized_keys") ? (t.aborted = !0, t) : i._zod.run({ value: t.value, issues: t.issues }, a);
}
const O4 = /* @__PURE__ */ P("$ZodReadonly", (t, i) => {
  St.init(t, i), tt(t, "propValues", (a) => a.def.innerType._zod.propValues), tt(t, "values", (a) => a.def.innerType._zod.values), tt(t, "optin", (a) => a.def.innerType?._zod?.optin), tt(t, "optout", (a) => a.def.innerType?._zod?.optout), t._zod.parse = (a, o) => {
    if (o.direction === "backward")
      return i.innerType._zod.run(a, o);
    const s = i.innerType._zod.run(a, o);
    return s instanceof Promise ? s.then($x) : $x(s);
  };
});
function $x(t) {
  return t.memo || (t.value = Object.freeze(t.value)), t;
}
const D4 = /* @__PURE__ */ P("$ZodCustom", (t, i) => {
  yn.init(t, i), St.init(t, i), t._zod.parse = (a, o) => a, t._zod.check = (a) => {
    const o = a.value, s = i.fn(o);
    if (s instanceof Promise)
      return s.then((c) => Vx(c, a, o, t));
    Vx(s, a, o, t);
  };
});
function Vx(t, i, a, o) {
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
    o._zod.def.params && (s.params = o._zod.def.params), i.issues.push(wo(s));
  }
}
class M4 extends Error {
  constructor() {
    super("Cannot parse a reference cycle that closes through a transform"), this.name = "ZodCyclicError";
  }
}
const Fd = "~memo", Yx = [];
function Z1(t) {
  return t !== null && typeof t == "object";
}
function xd(t) {
  return t.map((i) => i.path ? { ...i, path: i.path.slice() } : { ...i });
}
const q1 = /* @__PURE__ */ new WeakMap(), co = 0, ou = 1, po = 2;
function su(t, i, a) {
  const o = q1.get(t);
  if (o !== void 0)
    return o ? po : co;
  if (i.has(t))
    return po;
  i.add(t);
  let s = co;
  const c = (x) => {
    if (s !== po && x?._zod) {
      const b = su(x, i);
      b > s && (s = b);
    }
  }, f = (x, b) => {
    let w = co;
    for (const v of Reflect.ownKeys(x)) {
      const S = Object.getOwnPropertyDescriptor(x, v);
      if (!S.enumerable)
        continue;
      const j = S.get ? ou : S.value?._zod ? su(S.value, i) : co;
      j > w && (w = j);
    }
    return w;
  }, p = (x) => {
    x > s && (s = x);
  }, m = t._zod.def;
  switch (m.type) {
    case "object": {
      const x = h1(m);
      p(x ? f(x) : ou), c(m.catchall);
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
      p(x ? su(x, i) : ou);
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
  return i.delete(t), R4(t, s);
}
function R4(t, i) {
  return i !== ou && q1.set(t, i === po), i;
}
function U4(t, i) {
  let a = t.buckets.get(i);
  return a || (a = /* @__PURE__ */ new WeakMap(), t.buckets.set(i, a)), a;
}
let Ks;
const Js = [], L4 = {
  alloc(t, i, a) {
    const o = Ks;
    if (!o)
      return a;
    Ks = void 0;
    const s = { value: a, issues: null };
    return o.set(i.value, s), Js.push(s), a;
  },
  guard(t) {
    var i;
    (i = t._zod).deferred ?? (i.deferred = []), t._zod.deferred.push(() => {
      const a = t._zod.parse, o = (s, c) => {
        if (c.direction !== "backward" && I4(c, s.value))
          throw new M4();
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
          const O = su(t, /* @__PURE__ */ new Set());
          if (O === co)
            return t._zod.parse = f, t._zod.run === p && (t._zod.run = f), f(m, g);
          O === po || o ? a = !0 : o = !0;
        }
        const x = m.value;
        if (!Z1(x))
          return f(m, g);
        let b = g[Fd];
        b || (b = { buckets: /* @__PURE__ */ new WeakMap(), backEdges: void 0 }, g[Fd] = b);
        let w;
        s === g ? w = c : (w = U4(b, t), s = g, c = w);
        const v = w.get(x);
        if (v)
          return m.value = v.value, v.issues ? v.issues.length && m.issues.push(...xd(v.issues)) : (m.memo = !0, b.backEdges ?? (b.backEdges = /* @__PURE__ */ new WeakSet()), b.backEdges.add(v.value)), m;
        Ks = w;
        const S = Js.length, j = f(m, g);
        Ks = void 0;
        const C = Js.length > S ? Js.pop() : void 0;
        return j instanceof Promise ? j.then((O) => (C && (C.issues = O.issues.length ? xd(O.issues) : Yx), O)) : (C && (C.issues = j.issues.length ? xd(j.issues) : Yx), j);
      };
      t._zod.parse = p, t._zod.run === f && (t._zod.run = p);
    });
  }
};
function B4() {
  return L4;
}
function I4(t, i) {
  const a = t[Fd]?.backEdges;
  return a !== void 0 && Z1(i) && a.has(i);
}
const H4 = () => {
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
        const f = s(c.expected), p = pz(c.input), m = s(p, c.input);
        return `Invalid input: expected ${f}, received ${m}`;
      }
      case "invalid_value":
        return c.values.length === 1 ? `Invalid input: expected ${y1(c.values[0])}` : `Invalid option: expected one of ${Cx(c.values, "|")}`;
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
        return `Unrecognized key${c.keys.length > 1 ? "s" : ""}: ${Cx(c.keys, ", ")}`;
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
function Z4() {
  return {
    localeError: H4()
  };
}
var Gx;
class q4 {
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
function $4() {
  return new q4();
}
(Gx = globalThis).__zod_globalRegistry ?? (Gx.__zod_globalRegistry = $4());
const fo = globalThis.__zod_globalRegistry;
function $1(t) {
  return t.checks && (t.checks = [...t.checks]), t;
}
// @__NO_SIDE_EFFECTS__
function V4(t, i) {
  return new t($1({ type: "string", ...ke(i) }));
}
// @__NO_SIDE_EFFECTS__
function Y4(t, i) {
  return new t({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function G4(t, i) {
  return new t({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function F4(t, i) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function X4(t, i) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Q4(t, i) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function P4(t, i) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function K4(t, i) {
  return new t({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function J4(t, i) {
  return new t({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function W4(t, i) {
  return new t({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function ej(t, i) {
  return new t({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function tj(t, i) {
  return new t({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function nj(t, i) {
  return new t({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function ij(t, i) {
  return new t({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function rj(t, i) {
  return new t({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function aj(t, i) {
  return new t({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function lj(t, i) {
  return new t({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function oj(t, i) {
  return new t({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function sj(t, i) {
  return new t({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function uj(t, i) {
  return new t({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function cj(t, i) {
  return new t({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function fj(t, i) {
  return new t({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function dj(t, i) {
  return new t({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function pj(t, i) {
  return new t({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function hj(t, i) {
  return new t({
    type: "string",
    format: "date",
    check: "string_format",
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function mj(t, i) {
  return new t({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function gj(t, i) {
  return new t({
    type: "string",
    format: "duration",
    check: "string_format",
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function bj(t, i) {
  return new t($1({ type: "number", checks: [], ...ke(i) }));
}
// @__NO_SIDE_EFFECTS__
function xj(t, i) {
  return new t({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function yj(t, i) {
  return new t({
    type: "boolean",
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function vj(t) {
  return new t({
    type: "unknown"
  });
}
// @__NO_SIDE_EFFECTS__
function wj(t, i) {
  return new t({
    type: "never",
    ...ke(i)
  });
}
// @__NO_SIDE_EFFECTS__
function Fx(t, i) {
  return new C1({
    check: "less_than",
    ...ke(i),
    value: t,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function yd(t, i) {
  return new C1({
    check: "less_than",
    ...ke(i),
    value: t,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Xx(t, i) {
  return new T1({
    check: "greater_than",
    ...ke(i),
    value: t,
    inclusive: !1
  });
}
// @__NO_SIDE_EFFECTS__
function vd(t, i) {
  return new T1({
    check: "greater_than",
    ...ke(i),
    value: t,
    inclusive: !0
  });
}
// @__NO_SIDE_EFFECTS__
function Qx(t, i) {
  return new x_({
    check: "multiple_of",
    ...ke(i),
    value: t
  });
}
// @__NO_SIDE_EFFECTS__
function V1(t, i) {
  return new v_({
    check: "max_length",
    ...ke(i),
    maximum: t
  });
}
// @__NO_SIDE_EFFECTS__
function bu(t, i) {
  return new w_({
    check: "min_length",
    ...ke(i),
    minimum: t
  });
}
// @__NO_SIDE_EFFECTS__
function Y1(t, i) {
  return new k_({
    check: "length_equals",
    ...ke(i),
    length: t
  });
}
// @__NO_SIDE_EFFECTS__
function kj(t, i) {
  return new S_({
    check: "string_format",
    format: "regex",
    ...ke(i),
    pattern: t
  });
}
// @__NO_SIDE_EFFECTS__
function Sj(t) {
  return new z_({
    check: "string_format",
    format: "lowercase",
    ...ke(t)
  });
}
// @__NO_SIDE_EFFECTS__
function zj(t) {
  return new __({
    check: "string_format",
    format: "uppercase",
    ...ke(t)
  });
}
// @__NO_SIDE_EFFECTS__
function _j(t, i) {
  return new j_({
    check: "string_format",
    format: "includes",
    ...ke(i),
    includes: t
  });
}
// @__NO_SIDE_EFFECTS__
function jj(t, i) {
  return new E_({
    check: "string_format",
    format: "starts_with",
    ...ke(i),
    prefix: t
  });
}
// @__NO_SIDE_EFFECTS__
function Ej(t, i) {
  return new C_({
    check: "string_format",
    format: "ends_with",
    ...ke(i),
    suffix: t
  });
}
// @__NO_SIDE_EFFECTS__
function ll(t) {
  return new T_({
    check: "overwrite",
    tx: t
  });
}
// @__NO_SIDE_EFFECTS__
function Cj(t) {
  return /* @__PURE__ */ ll((i) => i.normalize(t));
}
// @__NO_SIDE_EFFECTS__
function Tj() {
  return /* @__PURE__ */ ll((t) => t.trim());
}
// @__NO_SIDE_EFFECTS__
function Nj() {
  return /* @__PURE__ */ ll((t) => t.toLowerCase());
}
// @__NO_SIDE_EFFECTS__
function Aj() {
  return /* @__PURE__ */ ll((t) => t.toUpperCase());
}
// @__NO_SIDE_EFFECTS__
function Oj() {
  return /* @__PURE__ */ ll((t) => ez(t));
}
// @__NO_SIDE_EFFECTS__
function Dj(t, i, a) {
  return new t({
    type: "array",
    element: i,
    // get element() {
    //   return element;
    // },
    ...ke(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Mj(t, i, a) {
  return new t({
    type: "custom",
    check: "custom",
    fn: i,
    ...ke(a)
  });
}
// @__NO_SIDE_EFFECTS__
function Rj(t, i) {
  const a = /* @__PURE__ */ Uj((o) => (o.addIssue = (s) => {
    if (typeof s == "string")
      o.issues.push(wo(s, o.value, a._zod.def));
    else {
      const c = s;
      c.fatal && (c.continue = !1), c.code ?? (c.code = "custom"), "input" in c || (c.input = o.value), c.inst ?? (c.inst = a), c.continue ?? (c.continue = !a._zod.def.abort), o.issues.push(wo(c));
    }
  }, t(o.value, o)), i);
  return a;
}
// @__NO_SIDE_EFFECTS__
function Uj(t, i) {
  const a = new yn({
    check: "custom",
    ...ke(i)
  });
  return a._zod.check = t, a;
}
function ho(t, ...i) {
  for (const a of i)
    for (const o of Reflect.ownKeys(a))
      Object.prototype.propertyIsEnumerable.call(a, o) && la(t, o, a[o]);
  return t;
}
function G1(t) {
  let i = t?.target ?? "draft-2020-12";
  return i === "draft-4" && (i = "draft-04"), i === "draft-7" && (i = "draft-07"), {
    processors: t.processors ?? {},
    metadataRegistry: t?.metadata ?? fo,
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
function ol(t, i, a, o, s) {
  const c = typeof i.unrepresentable == "function" ? i.unrepresentable({ zodSchema: t, path: o.path, message: s }) : i.unrepresentable;
  if (c === "any")
    return !1;
  if (c === void 0 || c === "throw")
    throw new Error(s);
  return Object.assign(a, c), !0;
}
function Kt(t, i, a = { path: [], schemaPath: [] }) {
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
    b && (f.ref || (f.ref = b), Kt(b, i, x), i.seen.get(b).isParent = !0);
  }
  const m = i.metadataRegistry.get(t);
  return m && ho(f.schema, m), i.io === "input" && on(t) && (delete f.schema.examples, delete f.schema.default), i.io === "input" && "_prefault" in f.schema && ((o = f.schema).default ?? (o.default = f.schema._prefault)), delete f.schema._prefault, i.seen.get(t).schema;
}
function Px(t) {
  return t.replace(/~/g, "~0").replace(/\//g, "~1");
}
function F1(t, i) {
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
      return f[1].defId = v, { defId: v, ref: `${w("__shared")}#/${p}/${Px(v)}` };
    }
    const m = "#", g = `${m}/${p}/`;
    if (f[1] === a && !f[1].schema.id)
      return { ref: m };
    const x = f[1].schema.id ?? `__schema${t.counter++}`;
    return { defId: x, ref: g + Px(x) };
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
function X1(t) {
  const i = t.anyOf;
  if (!Array.isArray(i) || i.length === 0 || t.type !== void 0)
    return;
  const a = [];
  for (const o of i) {
    if (!o || typeof o != "object")
      return;
    X1(o);
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
const Q1 = /* @__PURE__ */ new Set(["type", "properties", "required", "additionalProperties"]), Kx = ["oneOf", "anyOf"];
function Jx(t) {
  const i = t.additionalProperties;
  return i === void 0 || i === !1 || typeof i != "object" || i === null ? null : Object.keys(i).length ? i : null;
}
function Xd(t) {
  const i = [];
  for (const c of t) {
    if (typeof c != "object" || c.type !== "object")
      return null;
    for (const f in c)
      if (!Q1.has(f))
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
        const x = g.properties?.[f] ?? Jx(g);
        x != null && (p.some((b) => JSON.stringify(b) === JSON.stringify(x)) || p.push(x));
      }
      const m = p.length === 1 ? p[0] : Xd(p) ?? { allOf: p };
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
      const p = Jx(f);
      p && !c.some((m) => JSON.stringify(m) === JSON.stringify(p)) && c.push(p);
    }
    c.length === 1 ? s.additionalProperties = c[0] : c.length > 1 && (s.additionalProperties = { allOf: c });
  }
  return s;
}
function Lj(t) {
  const i = t.allOf;
  if (!Array.isArray(i) || i.length < 2)
    return;
  for (const s of Q1)
    if (s in t)
      return;
  const a = i.filter((s) => Kx.some((c) => Array.isArray(s[c])));
  let o = null;
  if (!a.length)
    o = Xd(i);
  else {
    const s = a[0], c = Kx.find((m) => Array.isArray(s[m]));
    if (Object.keys(s).length !== 1)
      return;
    const f = i.filter((m) => m !== s), p = s[c].map((m) => Xd([...f, m]));
    if (p.some((m) => !m))
      return;
    o = { [c]: p };
  }
  o && (delete t.allOf, ho(t, o));
}
function P1(t, i) {
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
      if (S.$ref && (t.target === "draft-07" || t.target === "draft-04" || t.target === "openapi-3.0") ? (g.allOf = g.allOf ?? [], g.allOf.push(S)) : ho(g, S), ho(g, x), p._zod.parent === b)
        for (const C in g)
          C === "$ref" || C === "allOf" || C in x || delete g[C];
      if (S.$ref && v.def)
        for (const C in g)
          C === "$ref" || C === "allOf" || C in v.def && JSON.stringify(g[C]) === JSON.stringify(v.def[C]) && delete g[C];
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
        X1(p[1].def ?? p[1].schema);
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
          Lj(g);
    }
  }
  const s = {};
  if (t.target === "draft-2020-12" ? s.$schema = "https://json-schema.org/draft/2020-12/schema" : t.target === "draft-07" ? s.$schema = "http://json-schema.org/draft-07/schema#" : t.target === "draft-04" ? s.$schema = "http://json-schema.org/draft-04/schema#" : t.target, t.external?.uri) {
    const p = t.external.registry.get(i)?.id;
    if (!p)
      throw new Error("Schema is missing an `id` property");
    s.$id = t.external.uri(p);
  }
  ho(s, a.defId ? a.schema : a.def ?? a.schema);
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
          input: xu(i, "input", t.processors),
          output: xu(i, "output", t.processors)
        }
      },
      enumerable: !1,
      writable: !1
    }), p;
  } catch {
    throw new Error("Error converting schema to JSON.");
  }
}
function on(t, i) {
  const a = i ?? { seen: /* @__PURE__ */ new Set() };
  if (a.seen.has(t))
    return !1;
  a.seen.add(t);
  const o = t._zod.def;
  if (o.type === "transform")
    return !0;
  if (o.type === "array")
    return on(o.element, a);
  if (o.type === "set")
    return on(o.valueType, a);
  if (o.type === "lazy")
    return on(o.getter(), a);
  if (o.type === "promise" || o.type === "optional" || o.type === "nonoptional" || o.type === "nullable" || o.type === "readonly" || o.type === "default" || o.type === "prefault" || o.type === "catch")
    return on(o.innerType, a);
  if (o.type === "intersection")
    return on(o.left, a) || on(o.right, a);
  if (o.type === "record" || o.type === "map")
    return on(o.keyType, a) || on(o.valueType, a);
  if (o.type === "pipe")
    return t._zod.traits.has("$ZodCodec") ? !0 : on(o.in, a) || on(o.out, a);
  if (o.type === "object") {
    for (const s in o.shape)
      if (on(o.shape[s], a))
        return !0;
    return !1;
  }
  if (o.type === "union") {
    for (const s of o.options)
      if (on(s, a))
        return !0;
    return !1;
  }
  if (o.type === "tuple") {
    for (const s of o.items)
      if (on(s, a))
        return !0;
    return !!(o.rest && on(o.rest, a));
  }
  return !1;
}
const Bj = (t, i = {}) => (a) => {
  const o = G1({ ...a, processors: i });
  return Kt(t, o), F1(o, t), P1(o, t);
}, xu = (t, i, a = {}) => (o) => {
  const { libraryOptions: s, target: c } = o ?? {}, f = G1({ ...s ?? {}, target: c, io: i, processors: a });
  return Kt(t, f), F1(f, t), P1(f, t);
}, il = (t, i, a) => {
  (t[i] === void 0 || a > t[i]) && (t[i] = a);
}, rl = (t, i, a) => {
  (t[i] === void 0 || a < t[i]) && (t[i] = a);
}, Wx = (t, i) => {
  il(t, "minimum", i), rl(t, "maximum", i);
}, K1 = (t, i) => {
  t.multipleOf ?? (t.multipleOf = []), t.multipleOf.includes(i) || t.multipleOf.push(i);
}, J1 = (t, i) => {
  t.patterns ?? (t.patterns = /* @__PURE__ */ new Set()), t.patterns.add(i);
}, W1 = (t, i) => {
  t.mime = t.mime ? t.mime.filter((a) => i.includes(a)) : [...i];
}, e0 = (t, i) => {
  t.format = i, i.includes("int") && (t.isInt = !0);
}, ey = (t, i) => il(t, "minimum", i.minimum), ty = (t, i) => rl(t, "maximum", i.maximum), ny = (t) => (i, a) => {
  e0(i, a.format);
  const [o, s] = t[a.format];
  il(i, "minimum", o), rl(i, "maximum", s);
}, Ij = {
  greater_than: (t, i) => il(t, i.inclusive ? "minimum" : "exclusiveMinimum", i.value),
  less_than: (t, i) => rl(t, i.inclusive ? "maximum" : "exclusiveMaximum", i.value),
  multiple_of: (t, i) => K1(t, i.value),
  number_format: ny(v1),
  bigint_format: ny(rz),
  min_length: ey,
  max_length: ty,
  length_equals: (t, i) => Wx(t, i.length),
  min_size: ey,
  max_size: ty,
  size_equals: (t, i) => Wx(t, i.size),
  string_format: (t, i) => {
    e0(t, i.format), i.pattern && J1(t, i.pattern), (i.format === "base64" || i.format === "base64url") && (t.contentEncoding = i.format), (i.local || i.precision === -1) && (t.laxFormat = !0);
  },
  mime_type: (t, i) => W1(t, i.mime)
};
function xi(t) {
  const i = {}, a = t._zod.def, o = t._zod.traits.has("$ZodCheck") ? [t, ...a.checks ?? []] : a.checks ?? [];
  for (const c of o)
    Ij[c._zod.def.check]?.(i, c._zod.def);
  const s = t._zod.bag;
  s.minimum !== void 0 && il(i, "minimum", s.minimum), s.exclusiveMinimum !== void 0 && il(i, "exclusiveMinimum", s.exclusiveMinimum), s.maximum !== void 0 && rl(i, "maximum", s.maximum), s.exclusiveMaximum !== void 0 && rl(i, "exclusiveMaximum", s.exclusiveMaximum), s.multipleOf !== void 0 && K1(i, s.multipleOf), s.format !== void 0 && (i.format ?? (i.format = s.format), s.format.includes("int") && (i.isInt = !0)), s.mime && W1(i, s.mime);
  for (const c of s.patterns ?? [])
    J1(i, c);
  return i;
}
const Hj = {
  guid: "uuid",
  url: "uri",
  datetime: "date-time",
  json_string: "json-string",
  regex: ""
  // do not set
}, Zj = /* @__PURE__ */ new Map([
  [U1, a_],
  [_p, l_]
]), qj = (t) => Zj.get(t) ?? t, $j = (t, i, a, o) => {
  const s = a;
  s.type = "string";
  const { minimum: c, maximum: f, format: p, patterns: m, contentEncoding: g, laxFormat: x } = xi(t);
  if (typeof c == "number" && (s.minLength = c), typeof f == "number" && (s.maxLength = f), p && (s.format = Hj[p] ?? p, s.format === "" && delete s.format, (p === "time" || x) && delete s.format), g && (s.contentEncoding = g), m && m.size > 0) {
    const b = [...m].map(qj);
    b.length === 1 ? s.pattern = b[0].source : b.length > 1 && (s.allOf = [
      ...b.map((w) => ({
        ...i.target === "draft-07" || i.target === "draft-04" || i.target === "openapi-3.0" ? { type: "string" } : {},
        pattern: w.source
      }))
    ]);
  }
}, Vj = (t, i, a, o) => {
  const s = a, { minimum: c, maximum: f, multipleOf: p, exclusiveMaximum: m, exclusiveMinimum: g, isInt: x } = xi(t);
  s.type = x ? "integer" : "number";
  const b = typeof g == "number" && g >= (c ?? Number.NEGATIVE_INFINITY), w = typeof m == "number" && m <= (f ?? Number.POSITIVE_INFINITY), v = i.target === "draft-04" || i.target === "openapi-3.0";
  if (b ? v ? (s.minimum = g, s.exclusiveMinimum = !0) : s.exclusiveMinimum = g : typeof c == "number" && (s.minimum = c), w ? v ? (s.maximum = m, s.exclusiveMaximum = !0) : s.exclusiveMaximum = m : typeof f == "number" && (s.maximum = f), p) {
    const S = /* @__PURE__ */ new Set();
    for (const O of p)
      Number.isFinite(O) && O !== 0 ? S.add(Math.abs(O)) : ol(t, i, s, o, `A multipleOf divisor of ${O} cannot be represented in JSON Schema`);
    const [j, ...C] = S;
    j !== void 0 && (s.multipleOf = j), C.length && (s.allOf = [...s.allOf ?? [], ...C.map((O) => ({ multipleOf: O }))]);
  }
}, Yj = (t, i, a, o) => {
  a.type = "boolean";
}, Gj = (t, i, a, o) => {
  a.not = {};
}, Fj = (t, i, a, o) => {
}, Xj = (t, i, a, o) => {
  const s = t._zod.def, c = qd(s.entries);
  if (c.length === 0) {
    a.not = {};
    return;
  }
  c.every((f) => typeof f == "number") && (a.type = "number"), c.every((f) => typeof f == "string") && (a.type = "string"), a.enum = c;
}, Qj = (t, i, a, o) => {
  ol(t, i, a, o, "Custom types cannot be represented in JSON Schema");
}, Pj = (t, i, a, o) => {
  ol(t, i, a, o, "Transforms cannot be represented in JSON Schema");
}, Kj = (t, i, a, o) => {
  const s = a, c = t._zod.def, { minimum: f, maximum: p } = xi(t);
  typeof f == "number" && (s.minItems = f), typeof p == "number" && (s.maxItems = p), s.type = "array", s.items = Kt(c.element, i, {
    ...o,
    path: [...o.path, "items"]
  });
};
function Qd(t) {
  const i = t._zod.def;
  return i.type === "pipe" && i.in._zod.traits.has("$ZodTransform") ? Qd(i.out) : i.type === "catch" ? Qd(i.innerType) : t._zod.optin;
}
const Jj = (t, i, a, o) => {
  const s = a, c = t._zod.def, f = c.shape;
  if (Object.getOwnPropertySymbols(f).length && ol(t, i, s, o, "Symbol keys cannot be represented in JSON Schema"))
    return;
  s.type = "object", s.properties = {};
  for (const g in f)
    la(s.properties, g, Kt(f[g], i, {
      ...o,
      path: [...o.path, "properties", g]
    }));
  const m = [];
  for (const g of Object.keys(f)) {
    const x = c.shape[g];
    (i.io === "input" ? Qd(x) === void 0 : x._zod.optout === void 0) && m.push(g);
  }
  m.length > 0 && (s.required = m), c.catchall?._zod.def.type === "never" ? s.additionalProperties = !1 : c.catchall ? c.catchall && (s.additionalProperties = Kt(c.catchall, i, {
    ...o,
    path: [...o.path, "additionalProperties"]
  })) : i.io === "output" && (s.additionalProperties = !1);
}, Wj = (t, i, a, o) => {
  const s = t._zod.def, c = s.inclusive === !1, f = s.options.map((p, m) => Kt(p, i, {
    ...o,
    path: [...o.path, c ? "oneOf" : "anyOf", m]
  }));
  c ? a.oneOf = f : a.anyOf = f;
}, e3 = (t, i, a, o) => {
  const s = t._zod.def, c = Kt(s.left, i, {
    ...o,
    path: [...o.path, "allOf", 0]
  }), f = Kt(s.right, i, {
    ...o,
    path: [...o.path, "allOf", 1]
  }), p = (g) => "allOf" in g && Object.keys(g).length === 1, m = [
    ...p(c) ? c.allOf : [c],
    ...p(f) ? f.allOf : [f]
  ];
  a.allOf = m, i.intersections.push(m);
}, t3 = (t, i, a, o) => {
  const s = t._zod.def, c = Kt(s.innerType, i, o), f = i.seen.get(t);
  i.target === "openapi-3.0" ? (f.ref = s.innerType, a.nullable = !0) : a.anyOf = [c, { type: "null" }];
}, n3 = (t, i, a, o) => {
  const s = t._zod.def;
  Kt(s.innerType, i, o);
  const c = i.seen.get(t);
  c.ref = s.innerType;
}, jp = /* @__PURE__ */ Symbol();
function t0(t, i, a, o, s) {
  let c = !1;
  const f = JSON.stringify(t, (p, m) => typeof m != "bigint" ? m : (c = !0, null));
  return c ? (ol(i, a, o, s, "BigInt defaults cannot be represented in JSON Schema"), jp) : JSON.parse(f);
}
const i3 = (t, i, a, o) => {
  const s = t._zod.def;
  Kt(s.innerType, i, o);
  const c = i.seen.get(t);
  c.ref = s.innerType;
  const f = t0(s.defaultValue, t, i, a, o);
  f !== jp && (a.default = f);
}, r3 = (t, i, a, o) => {
  const s = t._zod.def;
  Kt(s.innerType, i, o);
  const c = i.seen.get(t);
  if (c.ref = s.innerType, i.io !== "input")
    return;
  const f = t0(s.defaultValue, t, i, a, o);
  f !== jp && (a._prefault = f);
}, a3 = (t, i, a, o) => {
  const s = t._zod.def;
  Kt(s.innerType, i, o);
  const c = i.seen.get(t);
  c.ref = s.innerType;
  let f;
  try {
    f = s.catchValue(void 0);
  } catch {
    ol(t, i, a, o, "Dynamic catch values are not supported in JSON Schema");
    return;
  }
  a.default = f;
}, l3 = (t, i, a, o) => {
  const s = t._zod.def, c = s.in._zod.traits.has("$ZodTransform"), f = i.io === "input" ? c ? s.out : s.in : s.out;
  Kt(f, i, o);
  const p = i.seen.get(t);
  p.ref = f;
}, o3 = (t, i, a, o) => {
  const s = t._zod.def;
  Kt(s.innerType, i, o);
  const c = i.seen.get(t);
  c.ref = s.innerType, a.readOnly = !0;
}, n0 = (t, i, a, o) => {
  const s = t._zod.def;
  Kt(s.innerType, i, o);
  const c = i.seen.get(t);
  c.ref = s.innerType;
}, iy = /* @__PURE__ */ new WeakSet([Object.prototype, Error.prototype]);
function Ws(t, i, a) {
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
const s3 = (t, i) => {
  jz.init(t, i), t.name = "ZodError";
  const a = Object.getPrototypeOf(t);
  iy.has(a) || (iy.add(a), Ws(a, "format", (o) => (s) => Tz(o, s)), Ws(a, "flatten", (o) => (s) => Cz(o, s)), Ws(a, "addIssue", (o) => (s) => {
    o.issues.push(s), o.message = JSON.stringify(o.issues, $d, 2);
  }), Ws(a, "addIssues", (o) => (s) => {
    o.issues.push(...s), o.message = JSON.stringify(o.issues, $d, 2);
  }), Object.defineProperty(a, "isEmpty", {
    configurable: !0,
    enumerable: !1,
    get() {
      return this.issues.length === 0;
    }
  }));
}, Qn = /* @__PURE__ */ P("ZodError", s3, void 0, {
  Parent: Error
}), u3 = /* @__PURE__ */ yp(Qn), c3 = /* @__PURE__ */ vp(Qn), f3 = /* @__PURE__ */ wp(Qn), d3 = /* @__PURE__ */ kp(Qn), p3 = /* @__PURE__ */ Rz(Qn), h3 = /* @__PURE__ */ Uz(Qn), m3 = /* @__PURE__ */ Lz(Qn), g3 = /* @__PURE__ */ Bz(Qn), b3 = /* @__PURE__ */ Iz(Qn), x3 = /* @__PURE__ */ Hz(Qn), y3 = /* @__PURE__ */ Zz(Qn), v3 = /* @__PURE__ */ qz(Qn);
function w3() {
  vi.localeError || _r(Z4());
}
function Ep() {
  vi.memoizer || _r({ memoizer: B4() });
}
const zt = /* @__PURE__ */ P("ZodType", (t, i) => (w3(), St.init(t, i), t.def = i, t.type = i.type, t), {
  check(...t) {
    const i = this.def;
    return this.clone(An(i, {
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
    return zr(this, t, i);
  },
  brand() {
    return this;
  },
  register(t, i) {
    return t.add(this, i), this;
  },
  refine(t, i) {
    return this.check(bE(t, i));
  },
  superRefine(t, i) {
    return this.check(xE(t, i));
  },
  overwrite(t) {
    return this.check(/* @__PURE__ */ ll(t));
  },
  optional() {
    return ly(this);
  },
  exactOptional() {
    return rE(this);
  },
  nullable() {
    return oy(this);
  },
  nullish() {
    return ly(oy(this));
  },
  nonoptional(t) {
    return cE(this, t);
  },
  array() {
    return ii(this);
  },
  or(t) {
    return W3([this, t]);
  },
  and(t) {
    return tE(this, t);
  },
  transform(t) {
    return sy(this, iE(t));
  },
  default(t) {
    return oE(this, t);
  },
  prefault(t) {
    return uE(this, t);
  },
  catch(t) {
    return dE(this, t);
  },
  pipe(t) {
    return sy(this, t);
  },
  readonly() {
    return mE(this);
  },
  describe(t) {
    const i = this.clone();
    return fo.add(i, { description: t }), i;
  },
  meta(...t) {
    if (t.length === 0)
      return fo.get(this);
    const i = this.clone();
    return fo.add(i, t[0]), i;
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
    return S1(this, "~standard", {
      ...A1(this),
      jsonSchema: {
        input: xu(this, "input"),
        output: xu(this, "output")
      }
    });
  },
  set "~standard"(t) {
    Sr(this, "~standard", t);
  },
  parse: function t(i, a) {
    return u3(this, i, a, { callee: t });
  },
  parseAsync: async function t(i, a) {
    return await c3(this, i, a, { callee: t });
  },
  safeParse(t, i) {
    return f3(this, t, i);
  },
  async safeParseAsync(t, i) {
    return d3(this, t, i);
  },
  // `spa` is an alias: same function object as `safeParseAsync`, as before.
  get spa() {
    return this?.safeParseAsync;
  },
  set spa(t) {
    Sr(this, "spa", t);
  },
  validate(t, i) {
    return Oz(this, t, i);
  },
  validateAsync(t, i) {
    return Mz(this, t, i);
  },
  encode: function t(i, a) {
    return p3(this, i, a, { callee: t });
  },
  decode: function t(i, a) {
    return h3(this, i, a, { callee: t });
  },
  encodeAsync: async function t(i, a) {
    return await m3(this, i, a, { callee: t });
  },
  decodeAsync: async function t(i, a) {
    return await g3(this, i, a, { callee: t });
  },
  safeEncode(t, i) {
    return b3(this, t, i);
  },
  safeDecode(t, i) {
    return x3(this, t, i);
  },
  async safeEncodeAsync(t, i) {
    return y3(this, t, i);
  },
  async safeDecodeAsync(t, i) {
    return v3(this, t, i);
  },
  toJSONSchema(t) {
    return Bj(this, {})(t);
  },
  // Reads through to the registry on every access, so it must not cache.
  get description() {
    return fo.get(this)?.description;
  },
  // No setter: `schema._def = x` throws, as it did when `_def` was a non-writable own property.
  get _def() {
    return this._zod.def;
  }
}), i0 = /* @__PURE__ */ P(
  "_ZodString",
  (t, i) => {
    zp.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => $j(t, a, o);
  },
  /* @__PURE__ */ z1({
    format: (t) => xi(t).format ?? null,
    minLength: (t) => xi(t).minimum ?? null,
    maxLength: (t) => xi(t).maximum ?? null
  }, {
    regex(...t) {
      return this.check(/* @__PURE__ */ kj(...t));
    },
    includes(...t) {
      return this.check(/* @__PURE__ */ _j(...t));
    },
    startsWith(...t) {
      return this.check(/* @__PURE__ */ jj(...t));
    },
    endsWith(...t) {
      return this.check(/* @__PURE__ */ Ej(...t));
    },
    min(...t) {
      return this.check(/* @__PURE__ */ bu(...t));
    },
    max(...t) {
      return this.check(/* @__PURE__ */ V1(...t));
    },
    length(...t) {
      return this.check(/* @__PURE__ */ Y1(...t));
    },
    nonempty(...t) {
      return this.check(/* @__PURE__ */ bu(1, ...t));
    },
    lowercase(t) {
      return this.check(/* @__PURE__ */ Sj(t));
    },
    uppercase(t) {
      return this.check(/* @__PURE__ */ zj(t));
    },
    trim() {
      return this.check(/* @__PURE__ */ Tj());
    },
    normalize(...t) {
      return this.check(/* @__PURE__ */ Cj(...t));
    },
    toLowerCase() {
      return this.check(/* @__PURE__ */ Nj());
    },
    toUpperCase() {
      return this.check(/* @__PURE__ */ Aj());
    },
    slugify() {
      return this.check(/* @__PURE__ */ Oj());
    }
  })
), k3 = /* @__PURE__ */ P("ZodString", (t, i) => {
  zp.init(t, i), i0.init(t, i);
}, {
  email(t) {
    return this.check(/* @__PURE__ */ Y4(E3, t));
  },
  url(t) {
    return this.check(/* @__PURE__ */ K4(T3, t));
  },
  jwt(t) {
    return this.check(/* @__PURE__ */ dj(V3, t));
  },
  emoji(t) {
    return this.check(/* @__PURE__ */ J4(N3, t));
  },
  guid(t) {
    return this.check(/* @__PURE__ */ G4(C3, t));
  },
  uuid(t) {
    return this.check(/* @__PURE__ */ F4(eu, t));
  },
  uuidv4(t) {
    return this.check(/* @__PURE__ */ X4(eu, t));
  },
  uuidv6(t) {
    return this.check(/* @__PURE__ */ Q4(eu, t));
  },
  uuidv7(t) {
    return this.check(/* @__PURE__ */ P4(eu, t));
  },
  nanoid(t) {
    return this.check(/* @__PURE__ */ W4(A3, t));
  },
  cuid(t) {
    return this.check(/* @__PURE__ */ ej(O3, t));
  },
  cuid2(t) {
    return this.check(/* @__PURE__ */ tj(D3, t));
  },
  ulid(t) {
    return this.check(/* @__PURE__ */ nj(M3, t));
  },
  base64(t) {
    return this.check(/* @__PURE__ */ uj(Z3, t));
  },
  base64url(t) {
    return this.check(/* @__PURE__ */ cj(q3, t));
  },
  xid(t) {
    return this.check(/* @__PURE__ */ ij(R3, t));
  },
  ksuid(t) {
    return this.check(/* @__PURE__ */ rj(U3, t));
  },
  ipv4(t) {
    return this.check(/* @__PURE__ */ aj(L3, t));
  },
  ipv6(t) {
    return this.check(/* @__PURE__ */ lj(B3, t));
  },
  cidrv4(t) {
    return this.check(/* @__PURE__ */ oj(I3, t));
  },
  cidrv6(t) {
    return this.check(/* @__PURE__ */ sj(H3, t));
  },
  e164(t) {
    return this.check(/* @__PURE__ */ fj($3, t));
  },
  datetime(t) {
    return this.check(/* @__PURE__ */ pj(S3, t));
  },
  date(t) {
    return this.check(/* @__PURE__ */ hj(z3, t));
  },
  time(t) {
    return this.check(/* @__PURE__ */ mj(_3, t));
  },
  duration(t) {
    return this.check(/* @__PURE__ */ gj(j3, t));
  }
});
function oe(t) {
  return /* @__PURE__ */ V4(k3, t);
}
const gt = /* @__PURE__ */ P("ZodStringFormat", (t, i) => {
  ft.init(t, i), i0.init(t, i);
}), S3 = /* @__PURE__ */ P("ZodISODateTime", (t, i) => {
  Q_.init(t, i), gt.init(t, i);
}), z3 = /* @__PURE__ */ P("ZodISODate", (t, i) => {
  P_.init(t, i), gt.init(t, i);
}), _3 = /* @__PURE__ */ P("ZodISOTime", (t, i) => {
  K_.init(t, i), gt.init(t, i);
}), j3 = /* @__PURE__ */ P("ZodISODuration", (t, i) => {
  J_.init(t, i), gt.init(t, i);
}), E3 = /* @__PURE__ */ P("ZodEmail", (t, i) => {
  R_.init(t, i), gt.init(t, i);
}), C3 = /* @__PURE__ */ P("ZodGUID", (t, i) => {
  D_.init(t, i), gt.init(t, i);
}), eu = /* @__PURE__ */ P("ZodUUID", (t, i) => {
  M_.init(t, i), gt.init(t, i);
}), T3 = /* @__PURE__ */ P("ZodURL", (t, i) => {
  Z_.init(t, i), gt.init(t, i);
}), N3 = /* @__PURE__ */ P("ZodEmoji", (t, i) => {
  q_.init(t, i), gt.init(t, i);
}), A3 = /* @__PURE__ */ P("ZodNanoID", (t, i) => {
  $_.init(t, i), gt.init(t, i);
}), O3 = /* @__PURE__ */ P("ZodCUID", (t, i) => {
  V_.init(t, i), gt.init(t, i);
}), D3 = /* @__PURE__ */ P("ZodCUID2", (t, i) => {
  Y_.init(t, i), gt.init(t, i);
}), M3 = /* @__PURE__ */ P("ZodULID", (t, i) => {
  G_.init(t, i), gt.init(t, i);
}), R3 = /* @__PURE__ */ P("ZodXID", (t, i) => {
  F_.init(t, i), gt.init(t, i);
}), U3 = /* @__PURE__ */ P("ZodKSUID", (t, i) => {
  X_.init(t, i), gt.init(t, i);
}), L3 = /* @__PURE__ */ P("ZodIPv4", (t, i) => {
  W_.init(t, i), gt.init(t, i);
}), B3 = /* @__PURE__ */ P("ZodIPv6", (t, i) => {
  t4.init(t, i), gt.init(t, i);
}), I3 = /* @__PURE__ */ P("ZodCIDRv4", (t, i) => {
  n4.init(t, i), gt.init(t, i);
}), H3 = /* @__PURE__ */ P("ZodCIDRv6", (t, i) => {
  r4.init(t, i), gt.init(t, i);
}), Z3 = /* @__PURE__ */ P("ZodBase64", (t, i) => {
  a4.init(t, i), gt.init(t, i);
}), q3 = /* @__PURE__ */ P("ZodBase64URL", (t, i) => {
  o4.init(t, i), gt.init(t, i);
}), $3 = /* @__PURE__ */ P("ZodE164", (t, i) => {
  s4.init(t, i), gt.init(t, i);
}), V3 = /* @__PURE__ */ P("ZodJWT", (t, i) => {
  c4.init(t, i), gt.init(t, i);
}), r0 = /* @__PURE__ */ P(
  "ZodNumber",
  (t, i) => {
    L1.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => Vj(t, a, o, s), t.isFinite = !0;
  },
  /* @__PURE__ */ z1({
    minValue: (t) => {
      const { minimum: i, exclusiveMinimum: a } = xi(t);
      return Math.max(i ?? Number.NEGATIVE_INFINITY, a ?? Number.NEGATIVE_INFINITY);
    },
    maxValue: (t) => {
      const { maximum: i, exclusiveMaximum: a } = xi(t);
      return Math.min(i ?? Number.POSITIVE_INFINITY, a ?? Number.POSITIVE_INFINITY);
    },
    isInt: (t) => {
      const { isInt: i, multipleOf: a } = xi(t);
      return !!i || !!a?.some(Number.isSafeInteger);
    },
    format: (t) => xi(t).format ?? null
  }, {
    gt(t, i) {
      return this.check(/* @__PURE__ */ Xx(t, i));
    },
    gte(t, i) {
      return this.check(/* @__PURE__ */ vd(t, i));
    },
    min(t, i) {
      return this.check(/* @__PURE__ */ vd(t, i));
    },
    lt(t, i) {
      return this.check(/* @__PURE__ */ Fx(t, i));
    },
    lte(t, i) {
      return this.check(/* @__PURE__ */ yd(t, i));
    },
    max(t, i) {
      return this.check(/* @__PURE__ */ yd(t, i));
    },
    int(t) {
      return this.check(ry(t));
    },
    safe(t) {
      return this.check(ry(t));
    },
    positive(t) {
      return this.check(/* @__PURE__ */ Xx(0, t));
    },
    nonnegative(t) {
      return this.check(/* @__PURE__ */ vd(0, t));
    },
    negative(t) {
      return this.check(/* @__PURE__ */ Fx(0, t));
    },
    nonpositive(t) {
      return this.check(/* @__PURE__ */ yd(0, t));
    },
    multipleOf(t, i) {
      return this.check(/* @__PURE__ */ Qx(t, i));
    },
    step(t, i) {
      return this.check(/* @__PURE__ */ Qx(t, i));
    },
    finite() {
      return this;
    }
  })
);
function Fn(t) {
  return /* @__PURE__ */ bj(r0, t);
}
const Y3 = /* @__PURE__ */ P("ZodNumberFormat", (t, i) => {
  f4.init(t, i), r0.init(t, i);
});
function ry(t) {
  return /* @__PURE__ */ xj(Y3, t);
}
const G3 = /* @__PURE__ */ P("ZodBoolean", (t, i) => {
  d4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => Yj(t, a, o);
});
function vr(t) {
  return /* @__PURE__ */ yj(G3, t);
}
const F3 = /* @__PURE__ */ P("ZodUnknown", (t, i) => {
  p4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => Fj();
});
function ay() {
  return /* @__PURE__ */ vj(F3);
}
const X3 = /* @__PURE__ */ P("ZodNever", (t, i) => {
  h4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => Gj(t, a, o);
});
function Q3(t) {
  return /* @__PURE__ */ wj(X3, t);
}
const P3 = /* @__PURE__ */ P("ZodArray", (t, i) => {
  Ep(), b4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => Kj(t, a, o, s), t.element = i.element;
}, {
  min(t, i) {
    return this.check(/* @__PURE__ */ bu(t, i));
  },
  nonempty(t) {
    return this.check(/* @__PURE__ */ bu(1, t));
  },
  max(t, i) {
    return this.check(/* @__PURE__ */ V1(t, i));
  },
  length(t, i) {
    return this.check(/* @__PURE__ */ Y1(t, i));
  },
  unwrap() {
    return this.element;
  }
});
function ii(t, i) {
  return /* @__PURE__ */ Dj(P3, t, i);
}
const K3 = /* @__PURE__ */ P("ZodObject", (t, i) => {
  Ep(), v4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => Jj(t, a, o, s), xz(t, "shape", (a) => a._zod.def.shape, !1);
}, {
  keyof() {
    return ko(Object.keys(this._zod.def.shape));
  },
  catchall(t) {
    return this.clone(An(this._zod.def, { catchall: t }));
  },
  passthrough() {
    return this.clone(An(this._zod.def, { catchall: ay() }));
  },
  loose() {
    return this.clone(An(this._zod.def, { catchall: ay() }));
  },
  strict() {
    return this.clone(An(this._zod.def, { catchall: Q3() }));
  },
  strip() {
    return this.clone(An(this._zod.def, { catchall: void 0 }));
  },
  extend(t) {
    return oz(this, t);
  },
  safeExtend(t) {
    return sz(this, t);
  },
  merge(t) {
    return uz(this, t);
  },
  pick(t) {
    return az(this, t);
  },
  omit(t) {
    return lz(this, t);
  },
  partial(...t) {
    return Tx(a0, this, t[0]);
  },
  exactPartial(...t) {
    return Tx(l0, this, t[0], "exactPartial");
  },
  required(...t) {
    return cz(o0, this, t[0]);
  }
});
function Rt(t, i) {
  const a = {
    type: "object",
    shape: t ?? {},
    ...ke(i)
  };
  return new K3(a);
}
const J3 = /* @__PURE__ */ P("ZodUnion", (t, i) => {
  w4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => Wj(t, a, o, s), t.options = i.options;
});
function W3(t, i) {
  return new J3({
    type: "union",
    options: t,
    ...ke(i)
  });
}
const eE = /* @__PURE__ */ P("ZodIntersection", (t, i) => {
  k4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => e3(t, a, o, s);
});
function tE(t, i) {
  return new eE({
    type: "intersection",
    left: t,
    right: i
  });
}
const Pd = /* @__PURE__ */ P("ZodEnum", (t, i) => {
  S4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (o, s, c) => Xj(t, o, s), t.enum = i.entries, t.options = [...t._zod.values];
  const a = new Set(Object.keys(i.entries));
  t.extract = (o, s) => {
    const c = {};
    for (const f of o)
      if (a.has(f))
        c[f] = i.entries[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Pd({
      ...i,
      checks: [],
      ...ke(s),
      entries: c
    });
  }, t.exclude = (o, s) => {
    const c = { ...i.entries };
    for (const f of o)
      if (a.has(f))
        delete c[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Pd({
      ...i,
      checks: [],
      ...ke(s),
      entries: c
    });
  };
});
function ko(t, i) {
  const a = Array.isArray(t) ? Object.fromEntries(t.map((o) => [o, o])) : t;
  return new Pd({
    type: "enum",
    entries: a,
    ...ke(i)
  });
}
const nE = /* @__PURE__ */ P("ZodTransform", (t, i) => {
  Ep(), z4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => Pj(t, a, o, s), t._zod.parse = (a, o) => {
    if (o.direction === "backward")
      throw new _1(t.constructor.name);
    a.addIssue = (c) => {
      if (typeof c == "string")
        a.issues.push(wo(c, a.value, i));
      else {
        const f = c;
        f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), "input" in f || (f.input = a.value), f.inst ?? (f.inst = t), a.issues.push(wo(f));
      }
    };
    const s = i.transform(a.value, a);
    return s instanceof Promise ? s.then((c) => (a.value = c, a)) : (a.value = s, a);
  };
});
function iE(t) {
  return new nE({
    type: "transform",
    transform: t
  });
}
const a0 = /* @__PURE__ */ P("ZodOptional", (t, i) => {
  H1.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => n0(t, a, o, s), t.unwrap = () => t._zod.def.innerType;
});
function ly(t) {
  return new a0({
    type: "optional",
    innerType: t
  });
}
const l0 = /* @__PURE__ */ P("ZodExactOptional", (t, i) => {
  _4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => n0(t, a, o, s), t.unwrap = () => t._zod.def.innerType;
});
function rE(t) {
  return new l0({
    type: "optional",
    innerType: t
  });
}
const aE = /* @__PURE__ */ P("ZodNullable", (t, i) => {
  j4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => t3(t, a, o, s), t.unwrap = () => t._zod.def.innerType;
});
function oy(t) {
  return new aE({
    type: "nullable",
    innerType: t
  });
}
const lE = /* @__PURE__ */ P("ZodDefault", (t, i) => {
  E4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => i3(t, a, o, s), t.unwrap = () => t._zod.def.innerType, t.removeDefault = t.unwrap;
});
function oE(t, i) {
  return new lE({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof i == "function" ? i() : x1(i);
    }
  });
}
const sE = /* @__PURE__ */ P("ZodPrefault", (t, i) => {
  C4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => r3(t, a, o, s), t.unwrap = () => t._zod.def.innerType;
});
function uE(t, i) {
  return new sE({
    type: "prefault",
    innerType: t,
    get defaultValue() {
      return typeof i == "function" ? i() : x1(i);
    }
  });
}
const o0 = /* @__PURE__ */ P("ZodNonOptional", (t, i) => {
  T4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => n3(t, a, o, s), t.unwrap = () => t._zod.def.innerType;
});
function cE(t, i) {
  return new o0({
    type: "nonoptional",
    innerType: t,
    ...ke(i)
  });
}
const fE = /* @__PURE__ */ P("ZodCatch", (t, i) => {
  N4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => a3(t, a, o, s), t.unwrap = () => t._zod.def.innerType, t.removeCatch = t.unwrap;
});
function dE(t, i) {
  return new fE({
    type: "catch",
    innerType: t,
    catchValue: typeof i == "function" ? i : vz(i)
  });
}
const pE = /* @__PURE__ */ P("ZodPipe", (t, i) => {
  A4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => l3(t, a, o, s), t.in = i.in, t.out = i.out;
});
function sy(t, i) {
  return new pE({
    type: "pipe",
    in: t,
    out: i
    // ...util.normalizeParams(params),
  });
}
const hE = /* @__PURE__ */ P("ZodReadonly", (t, i) => {
  O4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => o3(t, a, o, s), t.unwrap = () => t._zod.def.innerType;
});
function mE(t) {
  return new hE({
    type: "readonly",
    innerType: t
  });
}
const gE = /* @__PURE__ */ P("ZodCustom", (t, i) => {
  D4.init(t, i), zt.init(t, i), t._zod.processJSONSchema = (a, o, s) => Qj(t, a, o, s);
});
function bE(t, i = {}) {
  return /* @__PURE__ */ Mj(gE, t, i);
}
function xE(t, i) {
  return /* @__PURE__ */ Rj(t, i);
}
Rt({
  itemId: oe(),
  kind: oe(),
  revision: Fn(),
  status: oe(),
  turnId: oe().nullish(),
  text: oe().optional(),
  displayText: oe().optional(),
  summary: ii(oe()).optional(),
  tool: oe().optional(),
  args: oe().optional(),
  visibleOutput: oe().optional(),
  commandText: oe().optional(),
  fallbackText: oe().optional(),
  statusLine: oe().optional(),
  failureReason: oe().optional(),
  objective: oe().optional(),
  agentPath: oe().optional(),
  role: oe().optional(),
  childSessionId: oe().optional(),
  subagentId: oe().optional(),
  reminderAgentId: oe().optional(),
  blocking: vr().optional(),
  durationMs: Fn().optional(),
  recordedAt: oe().optional(),
  truncated: vr().optional(),
  retracted: vr().optional(),
  label: oe().optional(),
  finalSummary: oe().optional(),
  outputRef: Rt({ id: oe(), byteLen: Fn().optional() }).passthrough().optional(),
  patchSummary: Rt({ added: Fn(), removed: Fn(), files: Fn() }).optional(),
  result: Rt({ text: oe().optional(), summary: oe().optional() }).passthrough().optional()
});
Rt({
  sessionId: oe(),
  workspaceRoot: oe().nullable(),
  createdAt: oe(),
  updatedAt: oe(),
  lastActivityAt: oe().optional(),
  status: oe(),
  activeTurnId: oe().nullable(),
  modelId: oe().nullable(),
  name: oe().optional(),
  title: oe().optional(),
  firstUserPrompt: oe().optional(),
  branch: oe().optional(),
  turnCount: Fn(),
  kind: oe().optional(),
  approvalMode: Rt({ mode: oe() }).passthrough().optional()
});
Rt({
  approvalId: oe(),
  sessionId: oe(),
  toolName: oe(),
  rawArgs: oe(),
  currentRequirementId: Rt({ approvalId: oe(), sourceIndex: Fn() }),
  subject: Rt({
    kind: oe(),
    command: oe().optional(),
    path: oe().optional(),
    host: oe().optional(),
    target: oe().optional()
  }),
  availableChoices: ii(
    Rt({
      choiceId: oe(),
      label: oe(),
      decision: oe(),
      scope: oe(),
      rulePreview: oe().optional(),
      acceptsFeedback: vr().optional()
    })
  )
});
Rt({
  userInputId: oe(),
  sessionId: oe(),
  questions: ii(
    Rt({
      id: oe(),
      header: oe(),
      question: oe(),
      options: ii(Rt({ label: oe(), description: oe().optional() })),
      selection: Rt({
        mode: ko(["single", "multiple"]),
        minSelections: Fn().optional(),
        maxSelections: Fn().optional()
      })
    })
  )
});
Rt({
  modelId: oe(),
  displayLabel: oe(),
  providerId: oe(),
  isDefault: vr(),
  isActive: vr(),
  contextLimit: Fn().nullable(),
  defaultReasoningEffort: oe().optional(),
  reasoningEffortVariants: ii(Rt({ tier: oe(), description: oe().optional() })).optional()
});
const s0 = ko([
  "none",
  "minimal",
  "low",
  "medium",
  "high",
  "xhigh",
  "max",
  "ultra"
]), Gn = {
  theme: ko(["muse", "daylight", "moonlight", "grove", "plush", "system"]),
  backgroundIntensity: Fn().min(0).max(100),
  cliPath: oe().max(4096),
  recentProjects: ii(oe()),
  trustedProjects: ii(oe()),
  archivedSessionIds: ii(oe()),
  pinnedSessionIds: ii(oe()),
  reasoningEffort: s0,
  fontSize: ko(["compact", "comfortable", "large"]),
  reduceMotion: vr(),
  notifyOnCompletion: vr()
}, yE = Rt({
  theme: Gn.theme.default("muse"),
  backgroundIntensity: Gn.backgroundIntensity.default(70),
  cliPath: Gn.cliPath.default(""),
  recentProjects: Gn.recentProjects.default([]),
  trustedProjects: Gn.trustedProjects.default([]),
  archivedSessionIds: Gn.archivedSessionIds.default([]),
  pinnedSessionIds: Gn.pinnedSessionIds.default([]),
  reasoningEffort: Gn.reasoningEffort.default("high"),
  fontSize: Gn.fontSize.default("comfortable"),
  reduceMotion: Gn.reduceMotion.default(!1),
  notifyOnCompletion: Gn.notifyOnCompletion.default(!1)
});
Rt(Gn).omit({ trustedProjects: !0, recentProjects: !0 }).partial().strict();
Rt({
  questionId: oe(),
  selectedLabel: oe().optional(),
  selectedLabels: ii(oe()).optional(),
  freeText: oe().max(500).optional()
});
function xn({
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
function Cp({
  title: t,
  children: i,
  onClose: a,
  className: o = ""
}) {
  const s = Q.useRef(null);
  return Q.useEffect(() => (s.current?.showModal(), () => s.current?.close()), []), /* @__PURE__ */ h.jsxs(
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
          /* @__PURE__ */ h.jsx(xn, { label: "Close dialog", onClick: a, children: /* @__PURE__ */ h.jsx(ia, { size: 18 }) })
        ] }),
        i
      ]
    }
  );
}
function mo({ size: t = 26 }) {
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
function Hi(t) {
  return t.split(/[\\/]/).filter(Boolean).at(-1) || t;
}
function u0(t) {
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
function wd(t) {
  return u0(t).replace(/\s+/g, " ").trim();
}
function vE(t) {
  return u0(t);
}
function Wr(t) {
  const i = wd(t.name) || wd(t.title) || wd(t.firstUserPrompt);
  return i ? i.length > 76 ? `${i.slice(0, 76).trimEnd()}…` : i : "Untitled conversation";
}
function c0(t) {
  const i = new Date(t);
  if (Number.isNaN(i.getTime())) return "";
  const a = (Date.now() - i.getTime()) / 6e4;
  return a < 1 ? "Now" : a < 60 ? `${Math.floor(a)}m` : a < 1440 ? `${Math.floor(a / 60)}h` : i.toLocaleDateString(void 0, { month: "short", day: "numeric" });
}
const wE = [
  "none",
  "minimal",
  "low",
  "medium",
  "high",
  "xhigh",
  "max",
  "ultra"
];
function kE({
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
  const C = Q.useRef(null), [O, I] = Q.useState(0), [U, Y] = Q.useState(0), [K, N] = Q.useState([]), [F, le] = Q.useState(!1), ye = /^\/[a-z-]*$/i.test(t) ? Zd.filter((L) => L.name.startsWith(t.slice(1).toLowerCase())) : [], Z = p ? /(?:^|\s)@([^\s@]*)$/.exec(t) : null, ee = Z ? Z[1] : null, se = ee && ee.includes("/") ? ee.slice(0, ee.lastIndexOf("/")) : "", Ne = ee !== null ? (ee.includes("/") ? ee.slice(ee.lastIndexOf("/") + 1) : ee).toLowerCase() : "";
  Q.useEffect(() => {
    if (!p || ee === null) {
      N([]);
      return;
    }
    let L = !1;
    return window.muse.listFiles(p, se).then((re) => {
      L || N(re);
    }).catch(() => {
      L || N([]);
    }), () => {
      L = !0;
    };
  }, [p, se, ee !== null]);
  const ce = ee !== null ? K.filter((L) => L.name.toLowerCase().includes(Ne)).slice(0, 12) : [], ne = !!p1(t), W = (L) => {
    i(`/${L} `), E.current?.focus();
  }, ue = (L) => {
    if (ee === null) return;
    const re = t.slice(0, t.length - ee.length - 1);
    i(`${re}@${L.path}${L.directory ? "/" : " "}`), E.current?.focus();
  };
  Q.useEffect(() => {
    I(0), Y(0);
  }, [t]);
  const pe = Q.useRef(t);
  pe.current = t;
  const [_e, z] = Q.useState([]), [Ve, dt] = Q.useState("queue"), E = Q.useRef(null);
  Q.useEffect(() => {
    E.current && (E.current.style.height = "auto", E.current.style.height = `${Math.min(E.current.scrollHeight, 200)}px`);
  }, [t]);
  const T = async () => {
    s || !c && !ne || !t.trim() && !_e.length || await v(_e, Ve) && z([]);
  }, J = async () => {
    try {
      C.current?.click();
    } catch (L) {
      j(L instanceof Error ? L.message : String(L));
    }
  };
  return /* @__PURE__ */ h.jsxs("div", { className: "composer-wrap", children: [
    ye.length > 0 && /* @__PURE__ */ h.jsx(
      "div",
      {
        className: "slash-menu",
        role: "listbox",
        id: "composer-commands",
        "aria-label": "Composer commands",
        children: ye.map((L, re) => /* @__PURE__ */ h.jsxs(
          "button",
          {
            type: "button",
            role: "option",
            id: `command-${L.name}`,
            "aria-selected": re === O,
            onMouseDown: (he) => he.preventDefault(),
            onClick: () => W(L.name),
            children: [
              /* @__PURE__ */ h.jsxs("strong", { children: [
                "/",
                L.name
              ] }),
              /* @__PURE__ */ h.jsx("span", { children: L.description })
            ]
          },
          L.name
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
        children: ce.map((L, re) => /* @__PURE__ */ h.jsxs(
          "button",
          {
            type: "button",
            role: "option",
            id: `mention-${L.path}`,
            "aria-selected": re === U,
            onMouseDown: (he) => he.preventDefault(),
            onClick: () => ue(L),
            children: [
              L.directory ? /* @__PURE__ */ h.jsx(Ov, { size: 14 }) : /* @__PURE__ */ h.jsx(tl, { size: 14 }),
              /* @__PURE__ */ h.jsx("strong", { children: L.path }),
              /* @__PURE__ */ h.jsx("span", { children: L.directory ? "Folder" : "File" })
            ]
          },
          L.path
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
        className: `composer ${a ? "is-running" : ""} ${F ? "is-dragging" : ""}`,
        onDragOver: (L) => {
          L.preventDefault(), F || le(!0);
        },
        onDragLeave: (L) => {
          L.currentTarget.contains(L.relatedTarget) || le(!1);
        },
        onDrop: (L) => {
          L.preventDefault(), le(!1);
          const re = Array.from(L.dataTransfer.files);
          re.length && (async () => {
            const he = [];
            for (const be of re.slice(0, 5)) {
              if (be.size <= 120 * 1024 && !/\.(png|jpe?g|webp|gif|pdf|zip)$/i.test(be.name))
                try {
                  const Te = await be.text();
                  if (!Te.includes("\0")) {
                    he.push(`\`\`\`${be.name}
${Te.trim()}
\`\`\``);
                    continue;
                  }
                } catch {
                }
              he.push(`@${be.name}`);
            }
            if (he.length) {
              const be = pe.current;
              i(
                `${be}${be && !/\s$/.test(be) ? `
` : ""}${he.join(`
`)}
`
              ), E.current?.focus();
            }
          })();
        },
        onSubmit: (L) => {
          L.preventDefault(), T();
        },
        children: [
          _e.length > 0 && /* @__PURE__ */ h.jsx("div", { className: "attachment-list", children: _e.map((L) => /* @__PURE__ */ h.jsxs("span", { className: "attachment", children: [
            L.kind === "image" ? /* @__PURE__ */ h.jsx(US, { size: 14 }) : /* @__PURE__ */ h.jsx(jv, { size: 14 }),
            /* @__PURE__ */ h.jsx("span", { children: L.name }),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                type: "button",
                "aria-label": `Remove ${L.name}`,
                onClick: () => {
                  window.muse.removeAttachment(L.id).catch((re) => j(re.message)), z((re) => re.filter((he) => he.id !== L.id));
                },
                children: /* @__PURE__ */ h.jsx(ia, { size: 12 })
              }
            )
          ] }, L.id)) }),
          /* @__PURE__ */ h.jsx(
            "textarea",
            {
              ref: E,
              "aria-label": "Message UniPi",
              "aria-controls": ye.length ? "composer-commands" : void 0,
              "aria-activedescendant": ye[O] ? `command-${ye[O].name}` : void 0,
              placeholder: f ? "Ask UniPi about your project…" : "Ask UniPi anything…",
              value: t,
              onChange: (L) => i(L.target.value),
              rows: 2,
              spellCheck: !0,
              onKeyDown: (L) => {
                if (ye.length && !L.nativeEvent.isComposing) {
                  if (L.key === "ArrowDown" || L.key === "ArrowUp") {
                    L.preventDefault();
                    const re = (O + (L.key === "ArrowDown" ? 1 : -1) + ye.length) % ye.length;
                    I(re), document.getElementById(`command-${ye[re].name}`)?.scrollIntoView({ block: "nearest" });
                    return;
                  }
                  if (L.key === "Tab" || L.key === "Enter" && !L.shiftKey && !Zd.some((re) => `/${re.name}` === t.toLowerCase())) {
                    L.preventDefault(), W(ye[O].name);
                    return;
                  }
                  if (L.key === "Escape") {
                    L.preventDefault(), i(`${t} `);
                    return;
                  }
                }
                if (ce.length && !L.nativeEvent.isComposing) {
                  if (L.key === "ArrowDown" || L.key === "ArrowUp") {
                    L.preventDefault();
                    const re = (U + (L.key === "ArrowDown" ? 1 : -1) + ce.length) % ce.length;
                    Y(re), document.getElementById(`mention-${ce[re].path}`)?.scrollIntoView({ block: "nearest" });
                    return;
                  }
                  if (L.key === "Tab" || L.key === "Enter" && !L.shiftKey) {
                    L.preventDefault(), ue(ce[U]);
                    return;
                  }
                  if (L.key === "Escape") {
                    L.preventDefault(), N([]);
                    return;
                  }
                }
                L.key === "Enter" && !L.shiftKey && !L.nativeEvent.isComposing && (L.preventDefault(), T());
              }
            }
          ),
          /* @__PURE__ */ h.jsx(
            "input",
            {
              ref: C,
              type: "file",
              multiple: !0,
              hidden: !0,
              accept: ".txt,.md,.csv,.json,.js,.jsx,.ts,.tsx,.py,.css,.html,.xml,.yaml,.yml,.toml,.log,.sh,.ps1,.sql,.rs,.go,.java,.c,.h,.cpp",
              onChange: async (L) => {
                const re = Array.from(L.currentTarget.files || []);
                L.currentTarget.value = "";
                try {
                  if (re.length > 5) throw new Error("每次最多选择 5 个文件。");
                  if (re.reduce((be, Te) => be + Te.size, 0) > 120 * 1024) throw new Error("文件总大小不能超过 120 KB。");
                  const he = [];
                  for (const be of re) {
                    if (!/\.(txt|md|csv|json|js|jsx|ts|tsx|py|css|html|xml|yaml|yml|toml|log|sh|ps1|sql|rs|go|java|c|h|cpp)$/i.test(be.name)) throw new Error("目前仅支持文本和代码文件，暂不支持图片或 PDF。");
                    const Te = await be.text();
                    if (Te.includes("\0")) throw new Error("不能添加二进制文件。");
                    he.push("文件：" + be.name + `
` + Te);
                  }
                  he.length && i([pe.current, ...he].filter(Boolean).join(`

`)), E.current?.focus();
                } catch (he) {
                  j(he instanceof Error ? he.message : String(he));
                }
              }
            }
          ),
          /* @__PURE__ */ h.jsxs("div", { className: "composer-toolbar", children: [
            /* @__PURE__ */ h.jsxs("div", { className: "composer-tools", children: [
              /* @__PURE__ */ h.jsx(
                xn,
                {
                  label: "添加文本或代码文件",
                  disabled: s,
                  onClick: () => {
                    J();
                  },
                  children: /* @__PURE__ */ h.jsx(ZS, { size: 17 })
                }
              ),
              /* @__PURE__ */ h.jsx("span", { className: "toolbar-divider" }),
              /* @__PURE__ */ h.jsx(
                lu,
                {
                  label: "Model",
                  className: "model-select",
                  value: g,
                  disabled: s || m.length === 0,
                  onChange: b,
                  icon: /* @__PURE__ */ h.jsx("span", { className: "model-spark", children: "✳" }),
                  options: [
                    ...m.some((L) => L.modelId === g) ? [] : [{ value: g, label: g || "CLI default" }],
                    ...m.map((L) => ({
                      value: L.modelId,
                      label: L.displayLabel || L.modelId
                    }))
                  ]
                }
              ),
              /* @__PURE__ */ h.jsx(
                lu,
                {
                  label: "Reasoning effort",
                  className: "effort-select",
                  value: x.reasoningEffort,
                  onChange: (L) => w(L),
                  icon: /* @__PURE__ */ h.jsx(jS, { size: 15, className: "effort-icon" }),
                  options: wE.map((L) => ({
                    value: L,
                    label: L === "xhigh" ? "Extra high" : L[0].toUpperCase() + L.slice(1)
                  }))
                }
              )
            ] }),
            /* @__PURE__ */ h.jsxs("div", { className: "composer-actions", children: [
              a && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
                /* @__PURE__ */ h.jsx(
                  lu,
                  {
                    label: "Follow-up behavior",
                    value: Ve,
                    onChange: (L) => dt(L),
                    options: [
                      { value: "queue", label: "Queue next" },
                      { value: "steer", label: "Steer now" }
                    ]
                  }
                ),
                /* @__PURE__ */ h.jsx(xn, { label: "Stop Muse", onClick: S, children: /* @__PURE__ */ h.jsx(YS, { size: 14, fill: "currentColor" }) })
              ] }),
              /* @__PURE__ */ h.jsx(
                "button",
                {
                  className: "send-button",
                  type: "submit",
                  "aria-label": a ? "Send follow-up" : "Send message",
                  disabled: s || !c && !ne || !t.trim() && !_e.length,
                  children: s ? /* @__PURE__ */ h.jsx("span", { className: "spinner" }) : /* @__PURE__ */ h.jsx(_S, { size: 19, strokeWidth: 2.2 })
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
function SE({
  platform: t = "darwin",
  sessions: i,
  onSession: a,
  onNew: o,
  onOpen: s,
  onSettings: c,
  onTheme: f,
  onClose: p
}) {
  const [m, g] = Q.useState(""), [x, b] = Q.useState(0), w = t === "darwin" ? "⌘" : "Ctrl", v = [
    {
      id: "new",
      group: "Actions",
      title: "New conversation",
      subtitle: "Start a conversation",
      icon: yo,
      shortcut: `${w} N`,
      action: o
    },
    {
      id: "open",
      group: "Actions",
      title: "Open project",
      subtitle: t === "darwin" ? "Choose a folder on your Mac" : "Choose a project folder",
      icon: kr,
      shortcut: `${w} O`,
      action: s
    },
    {
      id: "settings",
      group: "Actions",
      title: "Open settings",
      subtitle: "Appearance and Muse Code connection",
      icon: n1,
      shortcut: `${w} ,`,
      action: c
    },
    ...i.map((j) => ({
      id: j.sessionId,
      group: "Recent conversations",
      title: Wr(j),
      subtitle: j.workspaceRoot ? Hi(j.workspaceRoot) : "Conversation",
      icon: au,
      shortcut: "",
      action: () => a(j.sessionId)
    })),
    {
      id: "muse",
      group: "Themes",
      title: "Switch to Muse",
      subtitle: "Electric blue",
      icon: hp,
      shortcut: "",
      action: () => f("muse")
    },
    {
      id: "daylight",
      group: "Themes",
      title: "Switch to Daylight",
      subtitle: "Warm and light",
      icon: s1,
      shortcut: "",
      action: () => f("daylight")
    },
    {
      id: "moonlight",
      group: "Themes",
      title: "Switch to Moonlight",
      subtitle: "Soft and dark",
      icon: Vv,
      shortcut: "",
      action: () => f("moonlight")
    },
    {
      id: "grove",
      group: "Themes",
      title: "Switch to Grove",
      subtitle: "Natural green",
      icon: Iv,
      shortcut: "",
      action: () => f("grove")
    },
    {
      id: "plush",
      group: "Themes",
      title: "Switch to Plush",
      subtitle: "Blue mascot close-up",
      icon: Sv,
      shortcut: "",
      action: () => f("plush")
    }
  ].filter(
    (j) => `${j.title} ${j.subtitle}`.toLowerCase().includes(m.toLowerCase())
  ).slice(0, 30);
  Q.useEffect(() => {
    const j = v[x];
    j && document.getElementById(`cmd-item-${j.id}`)?.scrollIntoView({ block: "nearest" });
  }, [x, v]);
  const S = (j) => {
    const C = v[j];
    C && (p(), C.action());
  };
  return /* @__PURE__ */ h.jsxs(Cp, { title: "Search", onClose: p, className: "command-dialog", children: [
    /* @__PURE__ */ h.jsxs("div", { className: "command-search", children: [
      /* @__PURE__ */ h.jsx(fu, { size: 19 }),
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
            j.key === "ArrowDown" && (j.preventDefault(), b((C) => Math.min(C + 1, v.length - 1))), j.key === "ArrowUp" && (j.preventDefault(), b((C) => Math.max(0, C - 1))), j.key === "Enter" && (j.preventDefault(), S(x));
          }
        }
      )
    ] }),
    /* @__PURE__ */ h.jsxs("div", { className: "command-results", children: [
      v.map((j, C) => /* @__PURE__ */ h.jsxs(Q.Fragment, { children: [
        (C === 0 || v[C - 1].group !== j.group) && /* @__PURE__ */ h.jsx("div", { className: "command-group-heading", children: j.group }),
        /* @__PURE__ */ h.jsxs(
          "button",
          {
            id: `cmd-item-${j.id}`,
            className: C === x ? "selected" : "",
            onClick: () => S(C),
            onMouseEnter: () => b(C),
            children: [
              /* @__PURE__ */ h.jsx(j.icon, { size: 17 }),
              /* @__PURE__ */ h.jsxs("span", { children: [
                /* @__PURE__ */ h.jsx("strong", { children: j.title }),
                /* @__PURE__ */ h.jsx("small", { children: j.subtitle })
              ] }),
              j.shortcut ? /* @__PURE__ */ h.jsx("kbd", { children: j.shortcut }) : /* @__PURE__ */ h.jsx(wr, { size: 14 })
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
function zE(t) {
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
function _E({
  open: t = !0,
  project: i,
  platform: a = "darwin",
  view: o,
  onClose: s,
  onMentionDiff: c,
  onError: f
}) {
  const [p, m] = Q.useState("changes"), [g, x] = Q.useState(), [b, w] = Q.useState(!1), [v, S] = Q.useState(""), [j, C] = Q.useState(""), [O, I] = Q.useState(""), [U, Y] = Q.useState(0);
  Q.useEffect(() => {
    if (!t) return;
    let N = !1;
    if (x(void 0), C(""), I(""), !!i)
      return w(!0), S(""), window.muse.gitStatus(i).then((F) => {
        N || x(F);
      }).catch((F) => {
        N || S(F.message);
      }).finally(() => {
        N || w(!1);
      }), () => {
        N = !0;
      };
  }, [t, i, o?.session.status, U]), Q.useEffect(() => {
    if (!t || !j) return;
    let N = !1;
    return I("Loading diff…"), window.muse.gitDiff(i, j).then((F) => {
      N || I(F);
    }).catch((F) => {
      N || (I(F.message), f(F.message));
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
          /* @__PURE__ */ h.jsx(xn, { label: "Close inspector", onClick: s, children: /* @__PURE__ */ h.jsx(ia, { size: 16 }) })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "inspector-project", children: [
          /* @__PURE__ */ h.jsx("span", { className: "project-icon", children: /* @__PURE__ */ h.jsx(kr, { size: 20 }) }),
          /* @__PURE__ */ h.jsxs("div", { children: [
            /* @__PURE__ */ h.jsx("strong", { children: i ? Hi(i) : "No project selected" }),
            /* @__PURE__ */ h.jsx("span", { children: g?.branch ? /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
              /* @__PURE__ */ h.jsx(Mv, { size: 11 }),
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
            xn,
            {
              label: "Refresh changes",
              disabled: b || !i,
              onClick: () => Y((N) => N + 1),
              children: /* @__PURE__ */ h.jsx(Wv, { size: 13, className: b ? "spin" : "" })
            }
          )
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "inspector-body", children: [
          p === "changes" && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
            v && /* @__PURE__ */ h.jsx("p", { className: "inline-error", children: v }),
            j ? /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
              /* @__PURE__ */ h.jsxs("div", { className: "diff-header", children: [
                /* @__PURE__ */ h.jsxs("button", { className: "diff-back", onClick: () => C(""), children: [
                  /* @__PURE__ */ h.jsx(ES, { size: 13 }),
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
                      /* @__PURE__ */ h.jsx(wr, { size: 11 })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ h.jsx("pre", { className: "diff-view", children: zE(O).map((N, F) => /* @__PURE__ */ h.jsxs(
                "span",
                {
                  className: N.kind === "added" ? "added" : N.kind === "removed" ? "removed" : N.kind === "hunk" ? "hunk" : N.kind === "meta" ? "meta" : "",
                  children: [
                    /* @__PURE__ */ h.jsx("span", { className: "diff-gutter", "aria-hidden": "true", children: N.newNum || N.oldNum || " " }),
                    N.text || " ",
                    /* @__PURE__ */ h.jsx("br", {})
                  ]
                },
                F
              )) })
            ] }) : /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
              g?.changes.map((N) => {
                const F = N.path.replaceAll("\\", "/");
                return /* @__PURE__ */ h.jsxs(
                  "button",
                  {
                    className: "changed-file",
                    onClick: () => C(N.path),
                    children: [
                      /* @__PURE__ */ h.jsx(tl, { size: 15 }),
                      /* @__PURE__ */ h.jsxs("span", { children: [
                        /* @__PURE__ */ h.jsx("strong", { children: F.split("/").at(-1) }),
                        /* @__PURE__ */ h.jsx("small", { children: F.includes("/") ? F.slice(0, F.lastIndexOf("/")) : "Project root" })
                      ] }),
                      /* @__PURE__ */ h.jsx("b", { className: N.status.includes("D") ? "deleted" : "", children: N.status === "??" ? "U" : N.status }),
                      /* @__PURE__ */ h.jsx(yi, { size: 12 })
                    ]
                  },
                  N.path
                );
              }),
              !b && !g?.changes.length && !v && /* @__PURE__ */ h.jsxs("div", { className: "inspector-empty", children: [
                /* @__PURE__ */ h.jsx("span", { className: "empty-glyph", children: /* @__PURE__ */ h.jsx(Nn, { size: 22, strokeWidth: 1.4 }) }),
                /* @__PURE__ */ h.jsx("h3", { children: i ? g?.isRepository ? "No changes" : "No Git repository" : "Open a project" }),
                /* @__PURE__ */ h.jsx("p", { children: i ? g?.isRepository ? "Your working tree has no changes." : "This folder isn’t a Git repository. Muse can still work with its files." : "Open a project and its changes will appear here." })
              ] }),
              b && !g && /* @__PURE__ */ h.jsxs("div", { className: "inspector-empty", children: [
                /* @__PURE__ */ h.jsx(nl, { className: "spin", size: 20 }),
                /* @__PURE__ */ h.jsx("p", { children: "Reading your workspace…" })
              ] })
            ] })
          ] }),
          p === "activity" && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
            K.map((N) => /* @__PURE__ */ h.jsxs("div", { className: "activity-entry", children: [
              /* @__PURE__ */ h.jsx("span", { children: N.status === "inProgress" ? /* @__PURE__ */ h.jsx(nl, { size: 14, className: "spin" }) : N.status === "completed" ? /* @__PURE__ */ h.jsx(Nn, { size: 14 }) : /* @__PURE__ */ h.jsx(ia, { size: 14 }) }),
              /* @__PURE__ */ h.jsxs("div", { children: [
                /* @__PURE__ */ h.jsx("strong", { children: FS(N) }),
                /* @__PURE__ */ h.jsx("p", { children: N.kind === "reminderChild" ? `${N.blocking ? "Keeps the turn open · " : ""}${N.status === "inProgress" ? "Running" : N.status}` : N.statusLine || N.objective || N.fallbackText || N.status })
              ] })
            ] }, N.itemId)),
            !K.length && /* @__PURE__ */ h.jsxs("div", { className: "inspector-empty", children: [
              /* @__PURE__ */ h.jsx("span", { className: "empty-glyph", children: /* @__PURE__ */ h.jsx(du, { size: 22, strokeWidth: 1.4 }) }),
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
                /* @__PURE__ */ h.jsx(kr, { size: 14 }),
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
                /* @__PURE__ */ h.jsx(du, { size: 14 }),
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
const f0 = [
  { id: "muse", label: "Muse", description: "Electric blue", icon: hp },
  { id: "daylight", label: "Daylight", description: "Warm and light", icon: s1 },
  { id: "moonlight", label: "Moonlight", description: "Soft and dark", icon: Vv },
  { id: "grove", label: "Grove", description: "Natural green", icon: Iv },
  { id: "plush", label: "Plush", description: "A playful close-up", icon: Sv }
];
function jE({
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
  const [g, x] = Q.useState(m), [b, w] = Q.useState(t.cliPath);
  return /* @__PURE__ */ h.jsx(Cp, { title: "Settings", onClose: c, className: "settings-dialog", children: /* @__PURE__ */ h.jsxs("div", { className: "settings-layout", children: [
    /* @__PURE__ */ h.jsxs("nav", { className: "settings-nav", "aria-label": "Settings sections", children: [
      /* @__PURE__ */ h.jsxs(
        "button",
        {
          className: g === "appearance" ? "selected" : "",
          onClick: () => x("appearance"),
          children: [
            /* @__PURE__ */ h.jsx(hp, { size: 16 }),
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
            /* @__PURE__ */ h.jsx(du, { size: 16 }),
            "Muse Code"
          ]
        }
      ),
      /* @__PURE__ */ h.jsxs("button", { className: g === "about" ? "selected" : "", onClick: () => x("about"), children: [
        /* @__PURE__ */ h.jsx(mo, { size: 16 }),
        "About"
      ] })
    ] }),
    /* @__PURE__ */ h.jsxs("div", { className: "settings-content", children: [
      g === "appearance" && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
        /* @__PURE__ */ h.jsxs("div", { className: "settings-section-heading", children: [
          /* @__PURE__ */ h.jsx("h3", { children: "Appearance" }),
          /* @__PURE__ */ h.jsx("p", { children: "Choose a theme and adjust your workspace." })
        ] }),
        /* @__PURE__ */ h.jsx("div", { className: "theme-grid", children: f0.map((v) => /* @__PURE__ */ h.jsxs(
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
                    t.theme === v.id && /* @__PURE__ */ h.jsx("span", { className: "theme-check", children: /* @__PURE__ */ h.jsx(Nn, { size: 13 }) })
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
              /* @__PURE__ */ h.jsx(LS, { size: 16 }),
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
          /* @__PURE__ */ h.jsx(CS, { size: 20 }),
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
              children: /* @__PURE__ */ h.jsx(Wv, { size: 16 })
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
                /* @__PURE__ */ h.jsx(RS, { size: 15 }),
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
                /* @__PURE__ */ h.jsx(Hd, { size: 13 })
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
        /* @__PURE__ */ h.jsx(EE, { platform: o, onError: f }),
        /* @__PURE__ */ h.jsxs("div", { className: "about-facts", children: [
          /* @__PURE__ */ h.jsxs("span", { children: [
            o === "win32" ? "Built for Windows" : o === "linux" ? "Built for Linux" : "Built for macOS",
            " ",
            /* @__PURE__ */ h.jsx(Nn, { size: 13 })
          ] }),
          /* @__PURE__ */ h.jsxs("span", { children: [
            "Your CLI, your credentials ",
            /* @__PURE__ */ h.jsx(Nn, { size: 13 })
          ] }),
          /* @__PURE__ */ h.jsxs("span", { children: [
            "No desktop telemetry ",
            /* @__PURE__ */ h.jsx(Nn, { size: 13 })
          ] }),
          /* @__PURE__ */ h.jsxs("span", { children: [
            "MIT licensed source ",
            /* @__PURE__ */ h.jsx(Nn, { size: 13 })
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
              /* @__PURE__ */ h.jsx(Hd, { size: 13 })
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
              /* @__PURE__ */ h.jsx(yi, { size: 13 })
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
function EE({
  platform: t = "darwin",
  onError: i
}) {
  const [a, o] = Q.useState();
  return Q.useEffect(() => {
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
function CE(t, i) {
  const a = {};
  return (t[t.length - 1] === "" ? [...t, ""] : t).join(
    (a.padRight ? " " : "") + "," + (a.padLeft === !1 ? "" : " ")
  ).trim();
}
const TE = /^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, NE = /^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u, AE = {};
function uy(t, i) {
  return (AE.jsx ? NE : TE).test(t);
}
const OE = /[ \t\n\f\r]/g;
function DE(t) {
  return typeof t == "object" ? t.type === "text" ? cy(t.value) : !1 : cy(t);
}
function cy(t) {
  return t.replace(OE, "") === "";
}
class zo {
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
zo.prototype.normal = {};
zo.prototype.property = {};
zo.prototype.space = void 0;
function d0(t, i) {
  const a = {}, o = {};
  for (const s of t)
    Object.assign(a, s.property), Object.assign(o, s.normal);
  return new zo(a, o, i);
}
function Kd(t) {
  return t.toLowerCase();
}
class vn {
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
vn.prototype.attribute = "";
vn.prototype.booleanish = !1;
vn.prototype.boolean = !1;
vn.prototype.commaOrSpaceSeparated = !1;
vn.prototype.commaSeparated = !1;
vn.prototype.defined = !1;
vn.prototype.mustUseProperty = !1;
vn.prototype.number = !1;
vn.prototype.overloadedBoolean = !1;
vn.prototype.property = "";
vn.prototype.spaceSeparated = !1;
vn.prototype.space = void 0;
let ME = 0;
const De = oa(), At = oa(), Jd = oa(), ie = oa(), rt = oa(), na = oa(), Tn = oa();
function oa() {
  return 2 ** ++ME;
}
const Wd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  boolean: De,
  booleanish: At,
  commaOrSpaceSeparated: Tn,
  commaSeparated: na,
  number: ie,
  overloadedBoolean: Jd,
  spaceSeparated: rt
}, Symbol.toStringTag, { value: "Module" })), kd = (
  /** @type {ReadonlyArray<keyof typeof types>} */
  Object.keys(Wd)
);
class Tp extends vn {
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
    if (super(i, a), fy(this, "space", s), typeof o == "number")
      for (; ++c < kd.length; ) {
        const f = kd[c];
        fy(this, kd[c], (o & Wd[f]) === Wd[f]);
      }
  }
}
Tp.prototype.defined = !0;
function fy(t, i, a) {
  a && (t[i] = a);
}
function sl(t) {
  const i = {}, a = {};
  for (const [o, s] of Object.entries(t.properties)) {
    const c = new Tp(
      o,
      t.transform(t.attributes || {}, o),
      s,
      t.space
    );
    t.mustUseProperty && t.mustUseProperty.includes(o) && (c.mustUseProperty = !0), i[o] = c, a[Kd(o)] = o, a[Kd(c.attribute)] = o;
  }
  return new zo(i, a, t.space);
}
const p0 = sl({
  properties: {
    ariaActiveDescendant: null,
    ariaAtomic: At,
    ariaAutoComplete: null,
    ariaBusy: At,
    ariaChecked: At,
    ariaColCount: ie,
    ariaColIndex: ie,
    ariaColSpan: ie,
    ariaControls: rt,
    ariaCurrent: null,
    ariaDescribedBy: rt,
    ariaDetails: null,
    ariaDisabled: At,
    ariaDropEffect: rt,
    ariaErrorMessage: null,
    ariaExpanded: At,
    ariaFlowTo: rt,
    ariaGrabbed: At,
    ariaHasPopup: null,
    ariaHidden: At,
    ariaInvalid: null,
    ariaKeyShortcuts: null,
    ariaLabel: null,
    ariaLabelledBy: rt,
    ariaLevel: ie,
    ariaLive: null,
    ariaModal: At,
    ariaMultiLine: At,
    ariaMultiSelectable: At,
    ariaOrientation: null,
    ariaOwns: rt,
    ariaPlaceholder: null,
    ariaPosInSet: ie,
    ariaPressed: At,
    ariaReadOnly: At,
    ariaRelevant: null,
    ariaRequired: At,
    ariaRoleDescription: rt,
    ariaRowCount: ie,
    ariaRowIndex: ie,
    ariaRowSpan: ie,
    ariaSelected: At,
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
function h0(t, i) {
  return i in t ? t[i] : i;
}
function m0(t, i) {
  return h0(t, i.toLowerCase());
}
const RE = sl({
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
    acceptCharset: rt,
    accessKey: rt,
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
    autoComplete: rt,
    autoFocus: De,
    autoPlay: De,
    blocking: rt,
    capture: null,
    charSet: null,
    checked: De,
    cite: null,
    className: rt,
    closedBy: null,
    colorSpace: null,
    cols: ie,
    colSpan: ie,
    command: null,
    commandFor: null,
    content: null,
    contentEditable: At,
    controls: De,
    controlsList: rt,
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
    download: Jd,
    draggable: At,
    encType: null,
    enterKeyHint: null,
    fetchPriority: null,
    form: null,
    formAction: null,
    formEncType: null,
    formMethod: null,
    formNoValidate: De,
    formTarget: null,
    headers: rt,
    height: ie,
    hidden: Jd,
    high: ie,
    href: null,
    hrefLang: null,
    htmlFor: rt,
    httpEquiv: rt,
    id: null,
    imageSizes: null,
    imageSrcSet: null,
    inert: De,
    inputMode: null,
    integrity: null,
    is: null,
    isMap: De,
    itemId: null,
    itemProp: rt,
    itemRef: rt,
    itemScope: De,
    itemType: rt,
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
    ping: rt,
    placeholder: null,
    playsInline: De,
    popover: null,
    popoverTarget: null,
    popoverTargetAction: null,
    poster: null,
    preload: null,
    readOnly: De,
    referrerPolicy: null,
    rel: rt,
    required: De,
    reversed: De,
    rows: ie,
    rowSpan: ie,
    sandbox: rt,
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
    spellCheck: At,
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
    value: At,
    width: ie,
    wrap: null,
    writingSuggestions: null,
    // Legacy.
    // See: https://html.spec.whatwg.org/#other-elements,-attributes-and-apis
    align: null,
    // Several. Use CSS `text-align` instead,
    aLink: null,
    // `<body>`. Use CSS `a:active {color}` instead
    archive: rt,
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
    scrolling: At,
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
    part: rt,
    prefix: null,
    property: null,
    results: ie,
    security: null,
    unselectable: null
  },
  space: "html",
  transform: m0
}), UE = sl({
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
    about: Tn,
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
    className: rt,
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
    kernelMatrix: Tn,
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
    ping: rt,
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
    property: Tn,
    r: null,
    radius: null,
    referrerPolicy: null,
    refX: null,
    refY: null,
    rel: Tn,
    rev: Tn,
    renderingIntent: null,
    repeatCount: null,
    repeatDur: null,
    requiredExtensions: Tn,
    requiredFeatures: Tn,
    requiredFonts: Tn,
    requiredFormats: Tn,
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
    strokeDashArray: Tn,
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
    systemLanguage: Tn,
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
    typeOf: Tn,
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
  transform: h0
}), g0 = sl({
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
}), b0 = sl({
  attributes: { xmlnsxlink: "xmlns:xlink" },
  properties: { xmlnsXLink: null, xmlns: null },
  space: "xmlns",
  transform: m0
}), x0 = sl({
  properties: { xmlBase: null, xmlLang: null, xmlSpace: null },
  space: "xml",
  transform(t, i) {
    return "xml:" + i.slice(3).toLowerCase();
  }
}), LE = {
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
}, BE = /[A-Z]/g, dy = /-[a-z]/g, IE = /^data[-\w.:]+$/i;
function HE(t, i) {
  const a = Kd(i);
  let o = i, s = vn;
  if (a in t.normal)
    return t.property[t.normal[a]];
  if (a.length > 4 && a.slice(0, 4) === "data" && IE.test(i)) {
    if (i.charAt(4) === "-") {
      const c = i.slice(5).replace(dy, qE);
      o = "data" + c.charAt(0).toUpperCase() + c.slice(1);
    } else {
      const c = i.slice(4);
      if (!dy.test(c)) {
        let f = c.replace(BE, ZE);
        f.charAt(0) !== "-" && (f = "-" + f), i = "data" + f;
      }
    }
    s = Tp;
  }
  return new s(o, i);
}
function ZE(t) {
  return "-" + t.toLowerCase();
}
function qE(t) {
  return t.charAt(1).toUpperCase();
}
const $E = d0([p0, RE, g0, b0, x0], "html"), Np = d0([p0, UE, g0, b0, x0], "svg");
function VE(t) {
  return t.join(" ").trim();
}
var Wa = {}, Sd, py;
function YE() {
  if (py) return Sd;
  py = 1;
  var t = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, i = /\n/g, a = /^\s*/, o = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, s = /^:\s*/, c = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, f = /^[;\s]*/, p = /^\s+|\s+$/g, m = `
`, g = "/", x = "*", b = "", w = "comment", v = "declaration";
  function S(C, O) {
    if (typeof C != "string")
      throw new TypeError("First argument must be a string");
    if (!C) return [];
    O = O || {};
    var I = 1, U = 1;
    function Y(ce) {
      var ne = ce.match(i);
      ne && (I += ne.length);
      var W = ce.lastIndexOf(m);
      U = ~W ? ce.length - W : U + ce.length;
    }
    function K() {
      var ce = { line: I, column: U };
      return function(ne) {
        return ne.position = new N(ce), ye(), ne;
      };
    }
    function N(ce) {
      this.start = ce, this.end = { line: I, column: U }, this.source = O.source;
    }
    N.prototype.content = C;
    function F(ce) {
      var ne = new Error(
        O.source + ":" + I + ":" + U + ": " + ce
      );
      if (ne.reason = ce, ne.filename = O.source, ne.line = I, ne.column = U, ne.source = C, !O.silent) throw ne;
    }
    function le(ce) {
      var ne = ce.exec(C);
      if (ne) {
        var W = ne[0];
        return Y(W), C = C.slice(W.length), ne;
      }
    }
    function ye() {
      le(a);
    }
    function Z(ce) {
      var ne;
      for (ce = ce || []; ne = ee(); )
        ne !== !1 && ce.push(ne);
      return ce;
    }
    function ee() {
      var ce = K();
      if (!(g != C.charAt(0) || x != C.charAt(1))) {
        for (var ne = 2; b != C.charAt(ne) && (x != C.charAt(ne) || g != C.charAt(ne + 1)); )
          ++ne;
        if (ne += 2, b === C.charAt(ne - 1))
          return F("End of comment missing");
        var W = C.slice(2, ne - 2);
        return U += 2, Y(W), C = C.slice(ne), U += 2, ce({
          type: w,
          comment: W
        });
      }
    }
    function se() {
      var ce = K(), ne = le(o);
      if (ne) {
        if (ee(), !le(s)) return F("property missing ':'");
        var W = le(c), ue = ce({
          type: v,
          property: j(ne[0].replace(t, b)),
          value: W ? j(W[0].replace(t, b)) : b
        });
        return le(f), ue;
      }
    }
    function Ne() {
      var ce = [];
      Z(ce);
      for (var ne; ne = se(); )
        ne !== !1 && (ce.push(ne), Z(ce));
      return ce;
    }
    return ye(), Ne();
  }
  function j(C) {
    return C ? C.replace(p, b) : b;
  }
  return Sd = S, Sd;
}
var hy;
function GE() {
  if (hy) return Wa;
  hy = 1;
  var t = Wa && Wa.__importDefault || function(o) {
    return o && o.__esModule ? o : { default: o };
  };
  Object.defineProperty(Wa, "__esModule", { value: !0 }), Wa.default = a;
  const i = t(YE());
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
  return Wa;
}
var ao = {}, my;
function FE() {
  if (my) return ao;
  my = 1, Object.defineProperty(ao, "__esModule", { value: !0 }), ao.camelCase = void 0;
  var t = /^--[a-zA-Z0-9_-]+$/, i = /-([a-z])/g, a = /^[^-]+$/, o = /^-(webkit|moz|ms|o|khtml)-/, s = /^-(ms)-/, c = function(g) {
    return !g || a.test(g) || t.test(g);
  }, f = function(g, x) {
    return x.toUpperCase();
  }, p = function(g, x) {
    return "".concat(x, "-");
  }, m = function(g, x) {
    return x === void 0 && (x = {}), c(g) ? g : (g = g.toLowerCase(), x.reactCompat ? g = g.replace(s, p) : g = g.replace(o, p), g.replace(i, f));
  };
  return ao.camelCase = m, ao;
}
var lo, gy;
function XE() {
  if (gy) return lo;
  gy = 1;
  var t = lo && lo.__importDefault || function(s) {
    return s && s.__esModule ? s : { default: s };
  }, i = t(GE()), a = FE();
  function o(s, c) {
    var f = {};
    return !s || typeof s != "string" || (0, i.default)(s, function(p, m) {
      p && m && (f[(0, a.camelCase)(p, c)] = m);
    }), f;
  }
  return o.default = o, lo = o, lo;
}
var QE = XE();
const PE = /* @__PURE__ */ Wy(QE), y0 = v0("end"), Ap = v0("start");
function v0(t) {
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
function KE(t) {
  const i = Ap(t), a = y0(t);
  if (i && a)
    return { start: i, end: a };
}
function go(t) {
  return !t || typeof t != "object" ? "" : "position" in t || "type" in t ? by(t.position) : "start" in t || "end" in t ? by(t) : "line" in t || "column" in t ? ep(t) : "";
}
function ep(t) {
  return xy(t && t.line) + ":" + xy(t && t.column);
}
function by(t) {
  return ep(t && t.start) + "-" + ep(t && t.end);
}
function xy(t) {
  return t && typeof t == "number" ? t : 1;
}
class tn extends Error {
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
    this.ancestors = c.ancestors || void 0, this.cause = c.cause || void 0, this.column = p ? p.column : void 0, this.fatal = void 0, this.file = "", this.message = s, this.line = p ? p.line : void 0, this.name = go(c.place) || "1:1", this.place = c.place || void 0, this.reason = this.message, this.ruleId = c.ruleId || void 0, this.source = c.source || void 0, this.stack = f && c.cause && typeof c.cause.stack == "string" ? c.cause.stack : "", this.actual = void 0, this.expected = void 0, this.note = void 0, this.url = void 0;
  }
}
tn.prototype.file = "";
tn.prototype.name = "";
tn.prototype.reason = "";
tn.prototype.message = "";
tn.prototype.stack = "";
tn.prototype.column = void 0;
tn.prototype.line = void 0;
tn.prototype.ancestors = void 0;
tn.prototype.cause = void 0;
tn.prototype.fatal = void 0;
tn.prototype.place = void 0;
tn.prototype.ruleId = void 0;
tn.prototype.source = void 0;
const Op = {}.hasOwnProperty, JE = /* @__PURE__ */ new Map(), WE = /[A-Z]/g, eC = /* @__PURE__ */ new Set(["table", "tbody", "thead", "tfoot", "tr"]), tC = /* @__PURE__ */ new Set(["td", "th"]), w0 = "https://github.com/syntax-tree/hast-util-to-jsx-runtime";
function nC(t, i) {
  if (!i || i.Fragment === void 0)
    throw new TypeError("Expected `Fragment` in options");
  const a = i.filePath || void 0;
  let o;
  if (i.development) {
    if (typeof i.jsxDEV != "function")
      throw new TypeError(
        "Expected `jsxDEV` in options when `development: true`"
      );
    o = cC(a, i.jsxDEV);
  } else {
    if (typeof i.jsx != "function")
      throw new TypeError("Expected `jsx` in production options");
    if (typeof i.jsxs != "function")
      throw new TypeError("Expected `jsxs` in production options");
    o = uC(a, i.jsx, i.jsxs);
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
    schema: i.space === "svg" ? Np : $E,
    stylePropertyNameCase: i.stylePropertyNameCase || "dom",
    tableCellAlignToStyle: i.tableCellAlignToStyle !== !1
  }, c = k0(s, t, void 0);
  return c && typeof c != "string" ? c : s.create(
    t,
    s.Fragment,
    { children: c || void 0 },
    void 0
  );
}
function k0(t, i, a) {
  if (i.type === "element")
    return iC(t, i, a);
  if (i.type === "mdxFlowExpression" || i.type === "mdxTextExpression")
    return rC(t, i);
  if (i.type === "mdxJsxFlowElement" || i.type === "mdxJsxTextElement")
    return lC(t, i, a);
  if (i.type === "mdxjsEsm")
    return aC(t, i);
  if (i.type === "root")
    return oC(t, i, a);
  if (i.type === "text")
    return sC(t, i);
}
function iC(t, i, a) {
  const o = t.schema;
  let s = o;
  i.tagName.toLowerCase() === "svg" && o.space === "html" && (s = Np, t.schema = s), t.ancestors.push(i);
  const c = z0(t, i.tagName, !1), f = fC(t, i);
  let p = Mp(t, i);
  return eC.has(i.tagName) && (p = p.filter(function(m) {
    return typeof m == "string" ? !DE(m) : !0;
  })), S0(t, f, c, i), Dp(f, p), t.ancestors.pop(), t.schema = o, t.create(i, c, f, a);
}
function rC(t, i) {
  if (i.data && i.data.estree && t.evaluater) {
    const o = i.data.estree.body[0];
    return o.type, /** @type {Child | undefined} */
    t.evaluater.evaluateExpression(o.expression);
  }
  So(t, i.position);
}
function aC(t, i) {
  if (i.data && i.data.estree && t.evaluater)
    return (
      /** @type {Child | undefined} */
      t.evaluater.evaluateProgram(i.data.estree)
    );
  So(t, i.position);
}
function lC(t, i, a) {
  const o = t.schema;
  let s = o;
  i.name === "svg" && o.space === "html" && (s = Np, t.schema = s), t.ancestors.push(i);
  const c = i.name === null ? t.Fragment : z0(t, i.name, !0), f = dC(t, i), p = Mp(t, i);
  return S0(t, f, c, i), Dp(f, p), t.ancestors.pop(), t.schema = o, t.create(i, c, f, a);
}
function oC(t, i, a) {
  const o = {};
  return Dp(o, Mp(t, i)), t.create(i, t.Fragment, o, a);
}
function sC(t, i) {
  return i.value;
}
function S0(t, i, a, o) {
  typeof a != "string" && a !== t.Fragment && t.passNode && (i.node = o);
}
function Dp(t, i) {
  if (i.length > 0) {
    const a = i.length > 1 ? i : i[0];
    a && (t.children = a);
  }
}
function uC(t, i, a) {
  return o;
  function o(s, c, f, p) {
    const g = Array.isArray(f.children) ? a : i;
    return p ? g(c, f, p) : g(c, f);
  }
}
function cC(t, i) {
  return a;
  function a(o, s, c, f) {
    const p = Array.isArray(c.children), m = Ap(o);
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
function fC(t, i) {
  const a = {};
  let o, s;
  for (s in i.properties)
    if (s !== "children" && Op.call(i.properties, s)) {
      const c = pC(t, s, i.properties[s]);
      if (c) {
        const [f, p] = c;
        t.tableCellAlignToStyle && f === "align" && typeof p == "string" && tC.has(i.tagName) ? o = p : a[f] = p;
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
function dC(t, i) {
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
        So(t, i.position);
    else {
      const s = o.name;
      let c;
      if (o.value && typeof o.value == "object")
        if (o.value.data && o.value.data.estree && t.evaluater) {
          const p = o.value.data.estree.body[0];
          p.type, c = t.evaluater.evaluateExpression(p.expression);
        } else
          So(t, i.position);
      else
        c = o.value === null ? !0 : o.value;
      a[s] = /** @type {Props[keyof Props]} */
      c;
    }
  return a;
}
function Mp(t, i) {
  const a = [];
  let o = -1;
  const s = t.passKeys ? /* @__PURE__ */ new Map() : JE;
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
    const p = k0(t, c, f);
    p !== void 0 && a.push(p);
  }
  return a;
}
function pC(t, i, a) {
  const o = HE(t.schema, i);
  if (!(a == null || typeof a == "number" && Number.isNaN(a))) {
    if (Array.isArray(a) && (a = o.commaSeparated ? CE(a) : VE(a)), o.property === "style") {
      let s = typeof a == "object" ? a : hC(t, String(a));
      return t.stylePropertyNameCase === "css" && (s = mC(s)), ["style", s];
    }
    return [
      t.elementAttributeNameCase === "react" && o.space ? LE[o.property] || o.property : o.attribute,
      a
    ];
  }
}
function hC(t, i) {
  try {
    return PE(i, { reactCompat: !0 });
  } catch (a) {
    if (t.ignoreInvalidStyle)
      return {};
    const o = (
      /** @type {Error} */
      a
    ), s = new tn("Cannot parse `style` attribute", {
      ancestors: t.ancestors,
      cause: o,
      ruleId: "style",
      source: "hast-util-to-jsx-runtime"
    });
    throw s.file = t.filePath || void 0, s.url = w0 + "#cannot-parse-style-attribute", s;
  }
}
function z0(t, i, a) {
  let o;
  if (!a)
    o = { type: "Literal", value: i };
  else if (i.includes(".")) {
    const s = i.split(".");
    let c = -1, f;
    for (; ++c < s.length; ) {
      const p = uy(s[c]) ? { type: "Identifier", name: s[c] } : { type: "Literal", value: s[c] };
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
    o = uy(i) && !/^[a-z]/.test(i) ? { type: "Identifier", name: i } : { type: "Literal", value: i };
  if (o.type === "Literal") {
    const s = (
      /** @type {string | number} */
      o.value
    );
    return Op.call(t.components, s) ? t.components[s] : s;
  }
  if (t.evaluater)
    return t.evaluater.evaluateExpression(o);
  So(t);
}
function So(t, i) {
  const a = new tn(
    "Cannot handle MDX estrees without `createEvaluater`",
    {
      ancestors: t.ancestors,
      place: i,
      ruleId: "mdx-estree",
      source: "hast-util-to-jsx-runtime"
    }
  );
  throw a.file = t.filePath || void 0, a.url = w0 + "#cannot-handle-mdx-estrees-without-createevaluater", a;
}
function mC(t) {
  const i = {};
  let a;
  for (a in t)
    Op.call(t, a) && (i[gC(a)] = t[a]);
  return i;
}
function gC(t) {
  let i = t.replace(WE, bC);
  return i.slice(0, 3) === "ms-" && (i = "-" + i), i;
}
function bC(t) {
  return "-" + t.toLowerCase();
}
const zd = {
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
}, xC = {};
function Rp(t, i) {
  const a = xC, o = typeof a.includeImageAlt == "boolean" ? a.includeImageAlt : !0, s = typeof a.includeHtml == "boolean" ? a.includeHtml : !0;
  return _0(t, o, s);
}
function _0(t, i, a) {
  if (yC(t)) {
    if ("value" in t)
      return t.type === "html" && !a ? "" : t.value;
    if (i && "alt" in t && t.alt)
      return t.alt;
    if ("children" in t)
      return yy(t.children, i, a);
  }
  return Array.isArray(t) ? yy(t, i, a) : "";
}
function yy(t, i, a) {
  const o = [];
  let s = -1;
  for (; ++s < t.length; )
    o[s] = _0(t[s], i, a);
  return o.join("");
}
function yC(t) {
  return !!(t && typeof t == "object");
}
const vy = document.createElement("i");
function Up(t) {
  const i = "&" + t + ";";
  vy.innerHTML = i;
  const a = vy.textContent;
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
function Xn(t, i) {
  return t.length > 0 ? (ri(t, t.length, 0, i), t) : i;
}
const wy = {}.hasOwnProperty;
function j0(t) {
  const i = {};
  let a = -1;
  for (; ++a < t.length; )
    vC(i, t[a]);
  return i;
}
function vC(t, i) {
  let a;
  for (a in i) {
    const s = (wy.call(t, a) ? t[a] : void 0) || (t[a] = {}), c = i[a];
    let f;
    if (c)
      for (f in c) {
        wy.call(s, f) || (s[f] = []);
        const p = c[f];
        wC(
          // @ts-expect-error Looks like a list.
          s[f],
          Array.isArray(p) ? p : p ? [p] : []
        );
      }
  }
}
function wC(t, i) {
  let a = -1;
  const o = [];
  for (; ++a < i.length; )
    (i[a].add === "after" ? t : o).push(i[a]);
  ri(t, 0, 0, o);
}
function E0(t, i) {
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
const sn = jr(/[A-Za-z]/), en = jr(/[\dA-Za-z]/), kC = jr(/[#-'*+\--9=?A-Z^-~]/);
function yu(t) {
  return (
    // Special whitespace codes (which have negative values), C0 and Control
    // character DEL
    t !== null && (t < 32 || t === 127)
  );
}
const tp = jr(/\d/), SC = jr(/[\dA-Fa-f]/), zC = jr(/[!-/:-@[-`{-~]/);
function Ee(t) {
  return t !== null && t < -2;
}
function at(t) {
  return t !== null && (t < 0 || t === 32);
}
function Be(t) {
  return t === -2 || t === -1 || t === 32;
}
const Cu = jr(new RegExp("\\p{P}|\\p{S}", "u")), aa = jr(/\s/);
function jr(t) {
  return i;
  function i(a) {
    return a !== null && a > -1 && t.test(String.fromCharCode(a));
  }
}
function ul(t) {
  const i = [];
  let a = -1, o = 0, s = 0;
  for (; ++a < t.length; ) {
    const c = t.charCodeAt(a);
    let f = "";
    if (c === 37 && en(t.charCodeAt(a + 1)) && en(t.charCodeAt(a + 2)))
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
function Ge(t, i, a, o) {
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
function C0(t, i, a, o, s, c) {
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
const _C = {
  tokenize: jC
};
function jC(t) {
  const i = t.attempt(this.parser.constructs.contentInitial, o, s);
  let a;
  return i;
  function o(p) {
    if (p === null) {
      t.consume(p);
      return;
    }
    return t.enter("lineEnding"), t.consume(p), t.exit("lineEnding"), Ge(t, i, "linePrefix");
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
let vu = class {
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
    ky(this, i, a, o, !1);
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
    ky(this, i, a, o, !0);
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
function ky(t, i, a, o, s) {
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
const EC = {
  tokenize: CC
}, Sy = {
  tokenize: TC
};
function CC(t) {
  const i = this, a = [];
  let o = 0, s, c, f;
  return p;
  function p(U) {
    if (o < a.length) {
      const Y = a[o];
      return i.containerState = Y[1], t.attempt(Y[0].continuation, m, g)(U);
    }
    return g(U);
  }
  function m(U) {
    if (o++, i.containerState._closeFlow) {
      i.containerState._closeFlow = void 0, s && I();
      const Y = i.events.length;
      let K = Y, N;
      for (; K--; )
        if (i.events[K][0] === "exit" && i.events[K][1].type === "chunkFlow") {
          N = i.events[K][1].end;
          break;
        }
      O(o);
      let F = Y;
      for (; F < i.events.length; )
        i.events[F][1].end = {
          ...N
        }, F++;
      const le = new vu();
      return le.add(K + 1, 0, i.events.slice(Y)), le.add(Y, F - Y, []), le.consume(i.events), g(U);
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
    return i.containerState = {}, t.check(Sy, x, b)(U);
  }
  function x(U) {
    return s && I(), O(o), w(U);
  }
  function b(U) {
    return i.parser.lazy[i.now().line] = o !== a.length, f = i.now().offset, S(U);
  }
  function w(U) {
    return i.containerState = {}, t.attempt(Sy, v, S)(U);
  }
  function v(U) {
    return o++, a.push([i.currentConstruct, i.containerState]), w(U);
  }
  function S(U) {
    if (U === null) {
      s && I(), O(0), t.consume(U);
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
      C(t.exit("chunkFlow"), !0), O(0), t.consume(U);
      return;
    }
    return Ee(U) ? (t.consume(U), C(t.exit("chunkFlow")), o = 0, i.interrupt = void 0, p) : (t.consume(U), j);
  }
  function C(U, Y) {
    const K = i.sliceStream(U);
    if (Y && K.push(null), U.previous = c, c && (c.next = U), c = U, s.defineSkip(U.start), s.write(K), i.parser.lazy[U.start.line]) {
      let N = s.events.length;
      for (; N--; )
        if (
          // The token starts before the line ending…
          s.events[N][1].start.offset < f && // …and either is not ended yet…
          (!s.events[N][1].end || // …or ends after it.
          s.events[N][1].end.offset > f)
        )
          return;
      const F = i.events.length;
      let le = F, ye, Z;
      for (; le--; )
        if (i.events[le][0] === "exit" && i.events[le][1].type === "chunkFlow") {
          if (ye) {
            Z = i.events[le][1].end;
            break;
          }
          ye = !0;
        }
      for (O(o), N = F; N < i.events.length; )
        i.events[N][1].end = {
          ...Z
        }, N++;
      const ee = new vu();
      ee.add(le + 1, 0, i.events.slice(F)), ee.add(F, N - F, []), ee.consume(i.events);
    }
  }
  function O(U) {
    let Y = a.length;
    for (; Y-- > U; ) {
      const K = a[Y];
      i.containerState = K[1], K[0].exit.call(i, t);
    }
    a.length = U;
  }
  function I() {
    s.write([null]), c = void 0, s = void 0, i.containerState._closeFlow = void 0;
  }
}
function TC(t, i, a) {
  return Ge(t, t.attempt(this.parser.constructs.document, i, a), "linePrefix", this.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4);
}
function wu(t) {
  if (t === null || at(t) || aa(t))
    return 1;
  if (Cu(t))
    return 2;
}
function Tu(t, i, a) {
  const o = [];
  let s = -1;
  for (; ++s < t.length; ) {
    const c = t[s].resolveAll;
    c && !o.includes(c) && (i = c(i, a), o.push(c));
  }
  return i;
}
const np = {
  name: "attention",
  resolveAll: NC,
  tokenize: AC
};
function NC(t, i) {
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
          zy(f, -c), zy(p, c);
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
          }, o = [], t[s][1].end.offset - t[s][1].start.offset && (o = Xn(o, [["enter", t[s][1], i], ["exit", t[s][1], i]])), o = Xn(o, [["enter", b, i], ["enter", m, i], ["exit", m, i], ["enter", x, i]]), o = Xn(o, Tu(i.parser.constructs.insideSpan.null, t.slice(s + 1, a), i)), o = Xn(o, [["exit", x, i], ["enter", g, i], ["exit", g, i], ["exit", b, i]]);
          let w = 0;
          t[a][1].end.offset - t[a][1].start.offset && (w = 2, o = Xn(o, [["enter", t[a][1], i], ["exit", t[a][1], i]])), ri(t, s - 1, a - s + 3, o), a = s + o.length - w - 2;
          break;
        }
    }
  for (a = -1; ++a < t.length; )
    t[a][1].type === "attentionSequence" && (t[a][1].type = "data");
  return t;
}
function AC(t, i) {
  const a = this.parser.constructs.attentionMarkers.null, o = this.previous, s = wu(o);
  let c;
  return f;
  function f(m) {
    return c = m, t.enter("attentionSequence"), p(m);
  }
  function p(m) {
    if (m === c)
      return t.consume(m), p;
    const g = t.exit("attentionSequence"), x = wu(m), b = !x || x === 2 && s || a.includes(m) && m !== 42 && m !== 95, w = !s || s === 2 && x || a.includes(o) && o !== 42 && o !== 95;
    return g._open = !!(c === 42 ? b : b && (s || !w)), g._close = !!(c === 42 ? w : w && (x || !b)), i(m);
  }
}
function zy(t, i) {
  t.column += i, t.offset += i, t._bufferIndex += i;
}
const OC = {
  name: "autolink",
  tokenize: DC
};
function DC(t, i, a) {
  let o = 0;
  return s;
  function s(v) {
    return t.enter("autolink"), t.enter("autolinkMarker"), t.consume(v), t.exit("autolinkMarker"), t.enter("autolinkProtocol"), c;
  }
  function c(v) {
    return sn(v) ? (t.consume(v), f) : v === 64 ? a(v) : g(v);
  }
  function f(v) {
    return v === 43 || v === 45 || v === 46 || en(v) ? (o = 1, p(v)) : g(v);
  }
  function p(v) {
    return v === 58 ? (t.consume(v), o = 0, m) : (v === 43 || v === 45 || v === 46 || en(v)) && o++ < 32 ? (t.consume(v), p) : (o = 0, g(v));
  }
  function m(v) {
    return v === 62 ? (t.exit("autolinkProtocol"), t.enter("autolinkMarker"), t.consume(v), t.exit("autolinkMarker"), t.exit("autolink"), i) : v === null || v === 32 || v === 60 || yu(v) ? a(v) : (t.consume(v), m);
  }
  function g(v) {
    return v === 64 ? (t.consume(v), x) : kC(v) ? (t.consume(v), g) : a(v);
  }
  function x(v) {
    return en(v) ? b(v) : a(v);
  }
  function b(v) {
    return v === 46 ? (t.consume(v), o = 0, x) : v === 62 ? (t.exit("autolinkProtocol").type = "autolinkEmail", t.enter("autolinkMarker"), t.consume(v), t.exit("autolinkMarker"), t.exit("autolink"), i) : w(v);
  }
  function w(v) {
    if ((v === 45 || en(v)) && o++ < 63) {
      const S = v === 45 ? w : b;
      return t.consume(v), S;
    }
    return a(v);
  }
}
const _o = {
  partial: !0,
  tokenize: MC
};
function MC(t, i, a) {
  return o;
  function o(c) {
    return Be(c) ? Ge(t, s, "linePrefix")(c) : s(c);
  }
  function s(c) {
    return c === null || Ee(c) ? i(c) : a(c);
  }
}
const T0 = {
  continuation: {
    tokenize: UC
  },
  exit: LC,
  name: "blockQuote",
  tokenize: RC
};
function RC(t, i, a) {
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
function UC(t, i, a) {
  const o = this;
  return s;
  function s(f) {
    return Be(f) ? Ge(t, c, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(f) : c(f);
  }
  function c(f) {
    return t.attempt(T0, i, a)(f);
  }
}
function LC(t) {
  t.exit("blockQuote");
}
const N0 = {
  name: "characterEscape",
  tokenize: BC
};
function BC(t, i, a) {
  return o;
  function o(c) {
    return t.enter("characterEscape"), t.enter("escapeMarker"), t.consume(c), t.exit("escapeMarker"), s;
  }
  function s(c) {
    return zC(c) ? (t.enter("characterEscapeValue"), t.consume(c), t.exit("characterEscapeValue"), t.exit("characterEscape"), i) : a(c);
  }
}
const A0 = {
  name: "characterReference",
  tokenize: IC
};
function IC(t, i, a) {
  const o = this;
  let s = 0, c, f;
  return p;
  function p(b) {
    return t.enter("characterReference"), t.enter("characterReferenceMarker"), t.consume(b), t.exit("characterReferenceMarker"), m;
  }
  function m(b) {
    return b === 35 ? (t.enter("characterReferenceMarkerNumeric"), t.consume(b), t.exit("characterReferenceMarkerNumeric"), g) : (t.enter("characterReferenceValue"), c = 31, f = en, x(b));
  }
  function g(b) {
    return b === 88 || b === 120 ? (t.enter("characterReferenceMarkerHexadecimal"), t.consume(b), t.exit("characterReferenceMarkerHexadecimal"), t.enter("characterReferenceValue"), c = 6, f = SC, x) : (t.enter("characterReferenceValue"), c = 7, f = tp, x(b));
  }
  function x(b) {
    if (b === 59 && s) {
      const w = t.exit("characterReferenceValue");
      return f === en && !Up(o.sliceSerialize(w)) ? a(b) : (t.enter("characterReferenceMarker"), t.consume(b), t.exit("characterReferenceMarker"), t.exit("characterReference"), i);
    }
    return f(b) && s++ < c ? (t.consume(b), x) : a(b);
  }
}
const ip = {
  partial: !0,
  tokenize: HC
};
function HC(t, i, a) {
  const o = this;
  return s;
  function s(f) {
    return f === null ? a(f) : (t.enter("lineEnding"), t.consume(f), t.exit("lineEnding"), c);
  }
  function c(f) {
    return o.parser.lazy[o.now().line] ? a(f) : i(f);
  }
}
const _y = {
  concrete: !0,
  name: "codeFenced",
  tokenize: ZC
};
function ZC(t, i, a) {
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
    const F = o.events[o.events.length - 1];
    return c = F && F[1].type === "linePrefix" ? F[2].sliceSerialize(F[1], !0).length : 0, p = N, t.enter("codeFenced"), t.enter("codeFencedFence"), t.enter("codeFencedFenceSequence"), x(N);
  }
  function x(N) {
    return N === p ? (f++, t.consume(N), x) : f < 3 ? a(N) : (t.exit("codeFencedFenceSequence"), Be(N) ? Ge(t, b, "whitespace")(N) : b(N));
  }
  function b(N) {
    return N === null || Ee(N) ? (t.exit("codeFencedFence"), o.interrupt ? i(N) : t.check(ip, j, Y)(N)) : (t.enter("codeFencedFenceInfo"), t.enter("chunkString", {
      contentType: "string"
    }), w(N));
  }
  function w(N) {
    return N === null || Ee(N) ? (t.exit("chunkString"), t.exit("codeFencedFenceInfo"), b(N)) : Be(N) ? (t.exit("chunkString"), t.exit("codeFencedFenceInfo"), Ge(t, v, "whitespace")(N)) : N === 96 && N === p ? a(N) : (t.consume(N), w);
  }
  function v(N) {
    return N === null || Ee(N) ? b(N) : (t.enter("codeFencedFenceMeta"), t.enter("chunkString", {
      contentType: "string"
    }), S(N));
  }
  function S(N) {
    return N === null || Ee(N) ? (t.exit("chunkString"), t.exit("codeFencedFenceMeta"), b(N)) : N === 96 && N === p ? a(N) : (t.consume(N), S);
  }
  function j(N) {
    return t.attempt(s, Y, C)(N);
  }
  function C(N) {
    return t.enter("lineEnding"), t.consume(N), t.exit("lineEnding"), O;
  }
  function O(N) {
    return c > 0 && Be(N) ? Ge(t, I, "linePrefix", c + 1)(N) : I(N);
  }
  function I(N) {
    return N === null || Ee(N) ? t.check(ip, j, Y)(N) : (t.enter("codeFlowValue"), U(N));
  }
  function U(N) {
    return N === null || Ee(N) ? (t.exit("codeFlowValue"), I(N)) : (t.consume(N), U);
  }
  function Y(N) {
    return t.exit("codeFenced"), i(N);
  }
  function K(N, F, le) {
    let ye = 0;
    return Z;
    function Z(ne) {
      return N.enter("lineEnding"), N.consume(ne), N.exit("lineEnding"), ee;
    }
    function ee(ne) {
      return N.enter("codeFencedFence"), Be(ne) ? Ge(N, se, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(ne) : se(ne);
    }
    function se(ne) {
      return ne === p ? (N.enter("codeFencedFenceSequence"), Ne(ne)) : le(ne);
    }
    function Ne(ne) {
      return ne === p ? (ye++, N.consume(ne), Ne) : ye >= f ? (N.exit("codeFencedFenceSequence"), Be(ne) ? Ge(N, ce, "whitespace")(ne) : ce(ne)) : le(ne);
    }
    function ce(ne) {
      return ne === null || Ee(ne) ? (N.exit("codeFencedFence"), F(ne)) : le(ne);
    }
  }
}
const _d = {
  name: "codeIndented",
  tokenize: $C
}, qC = {
  partial: !0,
  tokenize: VC
};
function $C(t, i, a) {
  return o;
  function o(p) {
    return t.enter("codeIndented"), C0(t, s, a, "linePrefix", 4, 4)(p);
  }
  function s(p) {
    return p === null ? f(p) : Ee(p) ? t.attempt(qC, s, f)(p) : (t.enter("codeFlowValue"), c(p));
  }
  function c(p) {
    return p === null || Ee(p) ? (t.exit("codeFlowValue"), s(p)) : (t.consume(p), c);
  }
  function f(p) {
    return t.exit("codeIndented"), i(p);
  }
}
function VC(t, i, a) {
  const o = this;
  return s;
  function s(f) {
    return o.parser.lazy[o.now().line] ? a(f) : Ee(f) ? (t.enter("lineEnding"), t.consume(f), t.exit("lineEnding"), s) : C0(t, i, c, "linePrefix", 4, 4)(f);
  }
  function c(f) {
    return Ee(f) ? s(f) : a(f);
  }
}
const YC = {
  name: "codeText",
  previous: FC,
  resolve: GC,
  tokenize: XC
};
function GC(t) {
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
function FC(t) {
  return t !== 96 || this.events[this.events.length - 1][1].type === "characterEscape";
}
function XC(t, i, a) {
  let o = 0, s, c;
  return f;
  function f(b) {
    return t.enter("codeText"), t.enter("codeTextSequence"), p(b);
  }
  function p(b) {
    return b === 96 ? (t.consume(b), o++, p) : (t.exit("codeTextSequence"), m(b));
  }
  function m(b) {
    return b === null ? a(b) : b === 32 ? (t.enter("space"), t.consume(b), t.exit("space"), m) : b === 96 ? (c = t.enter("codeTextSequence"), s = 0, x(b)) : Ee(b) ? (t.enter("lineEnding"), t.consume(b), t.exit("lineEnding"), m) : (t.enter("codeTextData"), g(b));
  }
  function g(b) {
    return b === null || b === 32 || b === 96 || Ee(b) ? (t.exit("codeTextData"), m(b)) : (t.consume(b), g);
  }
  function x(b) {
    return b === 96 ? (t.consume(b), s++, x) : s === o ? (t.exit("codeTextSequence"), t.exit("codeText"), i(b)) : (c.type = "codeTextData", g(b));
  }
}
class QC {
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
    return o && oo(this.left, o), c.reverse();
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
    this.setCursor(Number.POSITIVE_INFINITY), oo(this.left, i);
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
    this.setCursor(0), oo(this.right, i.reverse());
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
        oo(this.right, a.reverse());
      } else {
        const a = this.right.splice(this.left.length + this.right.length - i, Number.POSITIVE_INFINITY);
        oo(this.left, a.reverse());
      }
  }
}
function oo(t, i) {
  let a = 0;
  if (i.length < 1e4)
    t.push(...i);
  else
    for (; a < i.length; )
      t.push(...i.slice(a, a + 1e4)), a += 1e4;
}
function O0(t) {
  const i = {};
  let a = -1, o, s, c, f, p, m, g;
  const x = new QC(t);
  for (; ++a < x.length; ) {
    for (; a in i; )
      a = i[a];
    if (o = x.get(a), a && o[1].type === "chunkFlow" && x.get(a - 1)[1].type === "listItemPrefix" && (m = o[1]._tokenizer.events, c = 0, c < m.length && m[c][1].type === "lineEndingBlank" && (c += 2), c < m.length && m[c][1].type === "content"))
      for (; ++c < m.length && m[c][1].type !== "content"; )
        m[c][1].type === "chunkText" && (m[c][1]._isInFirstContentOfListItem = !0, c++);
    if (o[0] === "enter")
      o[1].contentType && (Object.assign(i, PC(x, a)), a = i[a], g = !0);
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
  return ri(t, 0, Number.POSITIVE_INFINITY, x.slice(0)), !g;
}
function PC(t, i) {
  const a = t.get(i)[1], o = t.get(i)[2];
  let s = i - 1;
  const c = [];
  let f = a._tokenizer;
  f || (f = o.parser[a.contentType](a.start), a._contentTypeTextTrailing && (f._contentTypeTextTrailing = !0));
  const p = f.events, m = [], g = {};
  let x, b, w = -1, v = a, S = 0, j = 0;
  const C = [j];
  for (; v; ) {
    for (; t.get(++s)[1] !== v; )
      ;
    c.push(s), v._tokenizer || (x = o.sliceStream(v), v.next || x.push(null), b && f.defineSkip(v.start), v._isInFirstContentOfListItem && (f._gfmTasklistFirstContentOfListItem = !0), f.write(x), v._isInFirstContentOfListItem && (f._gfmTasklistFirstContentOfListItem = void 0)), b = v, v = v.next;
  }
  for (v = a; ++w < p.length; )
    // Find a void token that includes a break.
    p[w][0] === "exit" && p[w - 1][0] === "enter" && p[w][1].type === p[w - 1][1].type && p[w][1].start.line !== p[w][1].end.line && (j = w + 1, C.push(j), v._tokenizer = void 0, v.previous = void 0, v = v.next);
  for (f.events = [], v ? (v._tokenizer = void 0, v.previous = void 0) : C.pop(), w = C.length; w--; ) {
    const O = p.slice(C[w], C[w + 1]), I = c.pop();
    m.push([I, I + O.length - 1]), t.splice(I, 2, O);
  }
  for (m.reverse(), w = -1; ++w < m.length; )
    g[S + m[w][0]] = S + m[w][1], S += m[w][1] - m[w][0] - 1;
  return g;
}
const KC = {
  resolve: WC,
  tokenize: e5
}, JC = {
  partial: !0,
  tokenize: t5
};
function WC(t) {
  return O0(t), t;
}
function e5(t, i) {
  let a;
  return o;
  function o(p) {
    return t.enter("content"), a = t.enter("chunkContent", {
      contentType: "content"
    }), s(p);
  }
  function s(p) {
    return p === null ? c(p) : Ee(p) ? t.check(JC, f, c)(p) : (t.consume(p), s);
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
function t5(t, i, a) {
  const o = this;
  return s;
  function s(f) {
    return t.exit("chunkContent"), t.enter("lineEnding"), t.consume(f), t.exit("lineEnding"), Ge(t, c, "linePrefix");
  }
  function c(f) {
    if (f === null || Ee(f))
      return a(f);
    const p = o.events[o.events.length - 1];
    return !o.parser.constructs.disable.null.includes("codeIndented") && p && p[1].type === "linePrefix" && p[2].sliceSerialize(p[1], !0).length >= 4 ? i(f) : t.interrupt(o.parser.constructs.flow, a, i)(f);
  }
}
function D0(t, i, a, o, s, c, f, p, m) {
  const g = m || Number.POSITIVE_INFINITY;
  let x = 0;
  return b;
  function b(O) {
    return O === 60 ? (t.enter(o), t.enter(s), t.enter(c), t.consume(O), t.exit(c), w) : O === null || O === 32 || O === 41 || yu(O) ? a(O) : (t.enter(o), t.enter(f), t.enter(p), t.enter("chunkString", {
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
    return !x && (O === null || O === 41 || at(O)) ? (t.exit("chunkString"), t.exit(p), t.exit(f), t.exit(o), i(O)) : x < g && O === 40 ? (t.consume(O), x++, j) : O === 41 ? (t.consume(O), x--, j) : O === null || O === 32 || O === 40 || yu(O) ? a(O) : (t.consume(O), O === 92 ? C : j);
  }
  function C(O) {
    return O === 40 || O === 41 || O === 92 ? (t.consume(O), j) : j(O);
  }
}
function M0(t, i, a, o, s, c) {
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
    v === 94 && !p && "_hiddenFootnoteSupport" in f.parser.constructs ? a(v) : v === 93 ? (t.exit(c), t.enter(s), t.consume(v), t.exit(s), t.exit(o), i) : Ee(v) ? (t.enter("lineEnding"), t.consume(v), t.exit("lineEnding"), x) : (t.enter("chunkString", {
      contentType: "string"
    }), b(v));
  }
  function b(v) {
    return v === null || v === 91 || v === 93 || Ee(v) || p++ > 999 ? (t.exit("chunkString"), x(v)) : (t.consume(v), m || (m = !Be(v)), v === 92 ? w : b);
  }
  function w(v) {
    return v === 91 || v === 92 || v === 93 ? (t.consume(v), p++, b) : b(v);
  }
}
function R0(t, i, a, o, s, c) {
  let f;
  return p;
  function p(w) {
    return w === 34 || w === 39 || w === 40 ? (t.enter(o), t.enter(s), t.consume(w), t.exit(s), f = w === 40 ? 41 : w, m) : a(w);
  }
  function m(w) {
    return w === f ? (t.enter(s), t.consume(w), t.exit(s), t.exit(o), i) : (t.enter(c), g(w));
  }
  function g(w) {
    return w === f ? (t.exit(c), m(f)) : w === null ? a(w) : Ee(w) ? (t.enter("lineEnding"), t.consume(w), t.exit("lineEnding"), Ge(t, g, "linePrefix")) : (t.enter("chunkString", {
      contentType: "string"
    }), x(w));
  }
  function x(w) {
    return w === f || w === null || Ee(w) ? (t.exit("chunkString"), g(w)) : (t.consume(w), w === 92 ? b : x);
  }
  function b(w) {
    return w === f || w === 92 ? (t.consume(w), x) : x(w);
  }
}
function bo(t, i) {
  let a;
  return o;
  function o(s) {
    return Ee(s) ? (t.enter("lineEnding"), t.consume(s), t.exit("lineEnding"), a = !0, o) : Be(s) ? Ge(t, o, a ? "linePrefix" : "lineSuffix")(s) : i(s);
  }
}
const n5 = {
  name: "definition",
  tokenize: r5
}, i5 = {
  partial: !0,
  tokenize: a5
};
function r5(t, i, a) {
  const o = this;
  let s;
  return c;
  function c(v) {
    return t.enter("definition"), f(v);
  }
  function f(v) {
    return M0.call(
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
    return at(v) ? bo(t, g)(v) : g(v);
  }
  function g(v) {
    return D0(
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
    return t.attempt(i5, b, b)(v);
  }
  function b(v) {
    return Be(v) ? Ge(t, w, "whitespace")(v) : w(v);
  }
  function w(v) {
    return v === null || Ee(v) ? (t.exit("definition"), o.parser.defined.push(s), i(v)) : a(v);
  }
}
function a5(t, i, a) {
  return o;
  function o(p) {
    return at(p) ? bo(t, s)(p) : a(p);
  }
  function s(p) {
    return R0(t, c, a, "definitionTitle", "definitionTitleMarker", "definitionTitleString")(p);
  }
  function c(p) {
    return Be(p) ? Ge(t, f, "whitespace")(p) : f(p);
  }
  function f(p) {
    return p === null || Ee(p) ? i(p) : a(p);
  }
}
const l5 = {
  name: "hardBreakEscape",
  tokenize: o5
};
function o5(t, i, a) {
  return o;
  function o(c) {
    return t.enter("hardBreakEscape"), t.consume(c), s;
  }
  function s(c) {
    return Ee(c) ? (t.exit("hardBreakEscape"), i(c)) : a(c);
  }
}
const s5 = {
  name: "headingAtx",
  resolve: u5,
  tokenize: c5
};
function u5(t, i) {
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
function c5(t, i, a) {
  let o = 0;
  return s;
  function s(x) {
    return t.enter("atxHeading"), c(x);
  }
  function c(x) {
    return t.enter("atxHeadingSequence"), f(x);
  }
  function f(x) {
    return x === 35 && o++ < 6 ? (t.consume(x), f) : x === null || at(x) ? (t.exit("atxHeadingSequence"), p(x)) : a(x);
  }
  function p(x) {
    return x === 35 ? (t.enter("atxHeadingSequence"), m(x)) : x === null || Ee(x) ? (t.exit("atxHeading"), i(x)) : Be(x) ? Ge(t, p, "whitespace")(x) : (t.enter("atxHeadingText"), g(x));
  }
  function m(x) {
    return x === 35 ? (t.consume(x), m) : (t.exit("atxHeadingSequence"), p(x));
  }
  function g(x) {
    return x === null || x === 35 || at(x) ? (t.exit("atxHeadingText"), p(x)) : (t.consume(x), g);
  }
}
const f5 = [
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
], jy = ["pre", "script", "style", "textarea"], d5 = {
  concrete: !0,
  name: "htmlFlow",
  resolveTo: h5,
  tokenize: m5
}, p5 = {
  partial: !0,
  tokenize: g5
};
function h5(t) {
  let i = t.length;
  for (; i-- && !(t[i][0] === "enter" && t[i][1].type === "htmlFlow"); )
    ;
  return i > 1 && t[i - 2][1].type === "linePrefix" && (t[i][1].start = t[i - 2][1].start, t[i + 1][1].start = t[i - 2][1].start, t.splice(i - 2, 2)), t;
}
function m5(t, i, a) {
  const o = this;
  let s, c, f, p, m;
  return g;
  function g(E) {
    return x(E);
  }
  function x(E) {
    return t.enter("htmlFlow"), t.enter("htmlFlowData"), t.consume(E), b;
  }
  function b(E) {
    return E === 33 ? (t.consume(E), w) : E === 47 ? (t.consume(E), c = !0, j) : E === 63 ? (t.consume(E), s = 3, o.interrupt ? i : z) : sn(E) ? (t.consume(E), f = String.fromCharCode(E), C) : a(E);
  }
  function w(E) {
    return E === 45 ? (t.consume(E), s = 2, v) : E === 91 ? (t.consume(E), s = 5, p = 0, S) : sn(E) ? (t.consume(E), s = 4, o.interrupt ? i : z) : a(E);
  }
  function v(E) {
    return E === 45 ? (t.consume(E), o.interrupt ? i : z) : a(E);
  }
  function S(E) {
    const T = "CDATA[";
    return E === T.charCodeAt(p++) ? (t.consume(E), p === T.length ? o.interrupt ? i : se : S) : a(E);
  }
  function j(E) {
    return sn(E) ? (t.consume(E), f = String.fromCharCode(E), C) : a(E);
  }
  function C(E) {
    if (E === null || E === 47 || E === 62 || at(E)) {
      const T = E === 47, J = f.toLowerCase();
      return !T && !c && jy.includes(J) ? (s = 1, o.interrupt ? i(E) : se(E)) : f5.includes(f.toLowerCase()) ? (s = 6, T ? (t.consume(E), O) : o.interrupt ? i(E) : se(E)) : (s = 7, o.interrupt && !o.parser.lazy[o.now().line] ? a(E) : c ? I(E) : U(E));
    }
    return E === 45 || en(E) ? (t.consume(E), f += String.fromCharCode(E), C) : a(E);
  }
  function O(E) {
    return E === 62 ? (t.consume(E), o.interrupt ? i : se) : a(E);
  }
  function I(E) {
    return Be(E) ? (t.consume(E), I) : Z(E);
  }
  function U(E) {
    return E === 47 ? (t.consume(E), Z) : E === 58 || E === 95 || sn(E) ? (t.consume(E), Y) : Be(E) ? (t.consume(E), U) : Z(E);
  }
  function Y(E) {
    return E === 45 || E === 46 || E === 58 || E === 95 || en(E) ? (t.consume(E), Y) : K(E);
  }
  function K(E) {
    return E === 61 ? (t.consume(E), N) : Be(E) ? (t.consume(E), K) : U(E);
  }
  function N(E) {
    return E === null || E === 60 || E === 61 || E === 62 || E === 96 ? a(E) : E === 34 || E === 39 ? (t.consume(E), m = E, F) : Be(E) ? (t.consume(E), N) : le(E);
  }
  function F(E) {
    return E === m ? (t.consume(E), m = null, ye) : E === null || Ee(E) ? a(E) : (t.consume(E), F);
  }
  function le(E) {
    return E === null || E === 34 || E === 39 || E === 47 || E === 60 || E === 61 || E === 62 || E === 96 || at(E) ? K(E) : (t.consume(E), le);
  }
  function ye(E) {
    return E === 47 || E === 62 || Be(E) ? U(E) : a(E);
  }
  function Z(E) {
    return E === 62 ? (t.consume(E), ee) : a(E);
  }
  function ee(E) {
    return E === null || Ee(E) ? se(E) : Be(E) ? (t.consume(E), ee) : a(E);
  }
  function se(E) {
    return E === 45 && s === 2 ? (t.consume(E), W) : E === 60 && s === 1 ? (t.consume(E), ue) : E === 62 && s === 4 ? (t.consume(E), Ve) : E === 63 && s === 3 ? (t.consume(E), z) : E === 93 && s === 5 ? (t.consume(E), _e) : Ee(E) && (s === 6 || s === 7) ? (t.exit("htmlFlowData"), t.check(p5, dt, Ne)(E)) : E === null || Ee(E) ? (t.exit("htmlFlowData"), Ne(E)) : (t.consume(E), se);
  }
  function Ne(E) {
    return t.check(ip, ce, dt)(E);
  }
  function ce(E) {
    return t.enter("lineEnding"), t.consume(E), t.exit("lineEnding"), ne;
  }
  function ne(E) {
    return E === null || Ee(E) ? Ne(E) : (t.enter("htmlFlowData"), se(E));
  }
  function W(E) {
    return E === 45 ? (t.consume(E), z) : se(E);
  }
  function ue(E) {
    return E === 47 ? (t.consume(E), f = "", pe) : se(E);
  }
  function pe(E) {
    if (E === 62) {
      const T = f.toLowerCase();
      return jy.includes(T) ? (t.consume(E), Ve) : se(E);
    }
    return sn(E) && f.length < 8 ? (t.consume(E), f += String.fromCharCode(E), pe) : se(E);
  }
  function _e(E) {
    return E === 93 ? (t.consume(E), z) : se(E);
  }
  function z(E) {
    return E === 62 ? (t.consume(E), Ve) : E === 45 && s === 2 ? (t.consume(E), z) : se(E);
  }
  function Ve(E) {
    return E === null || Ee(E) ? (t.exit("htmlFlowData"), dt(E)) : (t.consume(E), Ve);
  }
  function dt(E) {
    return t.exit("htmlFlow"), i(E);
  }
}
function g5(t, i, a) {
  return o;
  function o(s) {
    return t.enter("lineEnding"), t.consume(s), t.exit("lineEnding"), t.attempt(_o, i, a);
  }
}
const b5 = {
  name: "htmlText",
  tokenize: x5
};
function x5(t, i, a) {
  const o = this;
  let s, c, f;
  return p;
  function p(z) {
    return t.enter("htmlText"), t.enter("htmlTextData"), t.consume(z), m;
  }
  function m(z) {
    return z === 33 ? (t.consume(z), g) : z === 47 ? (t.consume(z), K) : z === 63 ? (t.consume(z), U) : sn(z) ? (t.consume(z), le) : a(z);
  }
  function g(z) {
    return z === 45 ? (t.consume(z), x) : z === 91 ? (t.consume(z), c = 0, S) : sn(z) ? (t.consume(z), I) : a(z);
  }
  function x(z) {
    return z === 45 ? (t.consume(z), v) : a(z);
  }
  function b(z) {
    return z === null ? a(z) : z === 45 ? (t.consume(z), w) : Ee(z) ? (f = b, ue(z)) : (t.consume(z), b);
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
    return z === null ? a(z) : z === 93 ? (t.consume(z), C) : Ee(z) ? (f = j, ue(z)) : (t.consume(z), j);
  }
  function C(z) {
    return z === 93 ? (t.consume(z), O) : j(z);
  }
  function O(z) {
    return z === 62 ? W(z) : z === 93 ? (t.consume(z), O) : j(z);
  }
  function I(z) {
    return z === null || z === 62 ? W(z) : Ee(z) ? (f = I, ue(z)) : (t.consume(z), I);
  }
  function U(z) {
    return z === null ? a(z) : z === 63 ? (t.consume(z), Y) : Ee(z) ? (f = U, ue(z)) : (t.consume(z), U);
  }
  function Y(z) {
    return z === 62 ? W(z) : U(z);
  }
  function K(z) {
    return sn(z) ? (t.consume(z), N) : a(z);
  }
  function N(z) {
    return z === 45 || en(z) ? (t.consume(z), N) : F(z);
  }
  function F(z) {
    return Ee(z) ? (f = F, ue(z)) : Be(z) ? (t.consume(z), F) : W(z);
  }
  function le(z) {
    return z === 45 || en(z) ? (t.consume(z), le) : z === 47 || z === 62 || at(z) ? ye(z) : a(z);
  }
  function ye(z) {
    return z === 47 ? (t.consume(z), W) : z === 58 || z === 95 || sn(z) ? (t.consume(z), Z) : Ee(z) ? (f = ye, ue(z)) : Be(z) ? (t.consume(z), ye) : W(z);
  }
  function Z(z) {
    return z === 45 || z === 46 || z === 58 || z === 95 || en(z) ? (t.consume(z), Z) : ee(z);
  }
  function ee(z) {
    return z === 61 ? (t.consume(z), se) : Ee(z) ? (f = ee, ue(z)) : Be(z) ? (t.consume(z), ee) : ye(z);
  }
  function se(z) {
    return z === null || z === 60 || z === 61 || z === 62 || z === 96 ? a(z) : z === 34 || z === 39 ? (t.consume(z), s = z, Ne) : Ee(z) ? (f = se, ue(z)) : Be(z) ? (t.consume(z), se) : (t.consume(z), ce);
  }
  function Ne(z) {
    return z === s ? (t.consume(z), s = void 0, ne) : z === null ? a(z) : Ee(z) ? (f = Ne, ue(z)) : (t.consume(z), Ne);
  }
  function ce(z) {
    return z === null || z === 34 || z === 39 || z === 60 || z === 61 || z === 96 ? a(z) : z === 47 || z === 62 || at(z) ? ye(z) : (t.consume(z), ce);
  }
  function ne(z) {
    return z === 47 || z === 62 || at(z) ? ye(z) : a(z);
  }
  function W(z) {
    return z === 62 ? (t.consume(z), t.exit("htmlTextData"), t.exit("htmlText"), i) : a(z);
  }
  function ue(z) {
    return t.exit("htmlTextData"), t.enter("lineEnding"), t.consume(z), t.exit("lineEnding"), pe;
  }
  function pe(z) {
    return Be(z) ? Ge(t, _e, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(z) : _e(z);
  }
  function _e(z) {
    return t.enter("htmlTextData"), f(z);
  }
}
const Lp = {
  name: "labelEnd",
  resolveAll: k5,
  resolveTo: S5,
  tokenize: z5
}, y5 = {
  tokenize: _5
}, v5 = {
  tokenize: j5
}, w5 = {
  tokenize: E5
};
function k5(t) {
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
function S5(t, i) {
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
  return f = [["enter", p, i], ["enter", m, i]], f = Xn(f, t.slice(s + 1, s + o + 3)), f = Xn(f, [["enter", g, i]]), f = Xn(f, Tu(i.parser.constructs.insideSpan.null, t.slice(s + o + 4, c - 3), i)), f = Xn(f, [["exit", g, i], t[c - 2], t[c - 1], ["exit", m, i]]), f = Xn(f, t.slice(c + 1)), f = Xn(f, [["exit", p, i]]), ri(t, s, t.length, f), t;
}
function z5(t, i, a) {
  const o = this, s = o._labelStarts;
  let c, f;
  if (s) {
    for (; s.length > 0 && s[s.length - 1]._balanced; )
      s.pop();
    c = s[s.length - 1];
  }
  return p;
  function p(w) {
    return c ? c._inactive ? b(w) : (f = o.parser.defined.includes(ai(o.sliceSerialize({
      start: c.end,
      end: o.now()
    }))), t.enter("labelEnd"), t.enter("labelMarker"), t.consume(w), t.exit("labelMarker"), t.exit("labelEnd"), m) : a(w);
  }
  function m(w) {
    return w === 40 ? t.attempt(y5, x, f ? x : b)(w) : w === 91 ? t.attempt(v5, x, f ? g : b)(w) : f ? x(w) : b(w);
  }
  function g(w) {
    return t.attempt(w5, x, b)(w);
  }
  function x(w) {
    return s.pop(), i(w);
  }
  function b(w) {
    return c._balanced = !0, a(w);
  }
}
function _5(t, i, a) {
  return o;
  function o(b) {
    return t.enter("resource"), t.enter("resourceMarker"), t.consume(b), t.exit("resourceMarker"), s;
  }
  function s(b) {
    return at(b) ? bo(t, c)(b) : c(b);
  }
  function c(b) {
    return b === 41 ? x(b) : D0(t, f, p, "resourceDestination", "resourceDestinationLiteral", "resourceDestinationLiteralMarker", "resourceDestinationRaw", "resourceDestinationString", 32)(b);
  }
  function f(b) {
    return at(b) ? bo(t, m)(b) : x(b);
  }
  function p(b) {
    return a(b);
  }
  function m(b) {
    return b === 34 || b === 39 || b === 40 ? R0(t, g, a, "resourceTitle", "resourceTitleMarker", "resourceTitleString")(b) : x(b);
  }
  function g(b) {
    return at(b) ? bo(t, x)(b) : x(b);
  }
  function x(b) {
    return b === 41 ? (t.enter("resourceMarker"), t.consume(b), t.exit("resourceMarker"), t.exit("resource"), i) : a(b);
  }
}
function j5(t, i, a) {
  const o = this;
  return s;
  function s(p) {
    return M0.call(o, t, c, f, "reference", "referenceMarker", "referenceString")(p);
  }
  function c(p) {
    return o.parser.defined.includes(ai(o.sliceSerialize(o.events[o.events.length - 1][1]).slice(1, -1))) ? i(p) : a(p);
  }
  function f(p) {
    return a(p);
  }
}
function E5(t, i, a) {
  return o;
  function o(c) {
    return t.enter("reference"), t.enter("referenceMarker"), t.consume(c), t.exit("referenceMarker"), s;
  }
  function s(c) {
    return c === 93 ? (t.enter("referenceMarker"), t.consume(c), t.exit("referenceMarker"), t.exit("reference"), i) : a(c);
  }
}
const C5 = {
  name: "labelStartImage",
  resolveAll: Lp.resolveAll,
  tokenize: T5
};
function T5(t, i, a) {
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
const N5 = {
  name: "labelStartLink",
  resolveAll: Lp.resolveAll,
  tokenize: A5
};
function A5(t, i, a) {
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
const jd = {
  name: "lineEnding",
  tokenize: O5
};
function O5(t, i) {
  return a;
  function a(o) {
    return t.enter("lineEnding"), t.consume(o), t.exit("lineEnding"), Ge(t, i, "linePrefix");
  }
}
const uu = {
  name: "thematicBreak",
  tokenize: D5
};
function D5(t, i, a) {
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
    return g === s ? (t.consume(g), o++, m) : (t.exit("thematicBreakSequence"), Be(g) ? Ge(t, p, "whitespace")(g) : p(g));
  }
}
const bn = {
  continuation: {
    tokenize: L5
  },
  exit: I5,
  name: "list",
  tokenize: U5
}, M5 = {
  partial: !0,
  tokenize: H5
}, R5 = {
  partial: !0,
  tokenize: B5
};
function U5(t, i, a) {
  const o = this, s = o.events[o.events.length - 1];
  let c = s && s[1].type === "linePrefix" ? s[2].sliceSerialize(s[1], !0).length : 0, f = 0;
  return p;
  function p(v) {
    const S = o.containerState.type || (v === 42 || v === 43 || v === 45 ? "listUnordered" : "listOrdered");
    if (S === "listUnordered" ? !o.containerState.marker || v === o.containerState.marker : tp(v)) {
      if (o.containerState.type || (o.containerState.type = S, t.enter(S, {
        _container: !0
      })), S === "listUnordered")
        return t.enter("listItemPrefix"), v === 42 || v === 45 ? t.check(uu, a, g)(v) : g(v);
      if (!o.interrupt || v === 49)
        return t.enter("listItemPrefix"), t.enter("listItemValue"), m(v);
    }
    return a(v);
  }
  function m(v) {
    return tp(v) && ++f < 10 ? (t.consume(v), m) : (!o.interrupt || f < 2) && (o.containerState.marker ? v === o.containerState.marker : v === 41 || v === 46) ? (t.exit("listItemValue"), g(v)) : a(v);
  }
  function g(v) {
    return t.enter("listItemMarker"), t.consume(v), t.exit("listItemMarker"), o.containerState.marker = o.containerState.marker || v, t.check(
      _o,
      // Can’t be empty when interrupting.
      o.interrupt ? a : x,
      t.attempt(M5, w, b)
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
function L5(t, i, a) {
  const o = this;
  return o.containerState._closeFlow = void 0, t.check(_o, s, c);
  function s(p) {
    return o.containerState.furtherBlankLines = o.containerState.furtherBlankLines || o.containerState.initialBlankLine, Ge(t, i, "listItemIndent", o.containerState.size + 1)(p);
  }
  function c(p) {
    return o.containerState.furtherBlankLines || !Be(p) ? (o.containerState.furtherBlankLines = void 0, o.containerState.initialBlankLine = void 0, f(p)) : (o.containerState.furtherBlankLines = void 0, o.containerState.initialBlankLine = void 0, t.attempt(R5, i, f)(p));
  }
  function f(p) {
    return o.containerState._closeFlow = !0, o.interrupt = void 0, Ge(t, t.attempt(bn, i, a), "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(p);
  }
}
function B5(t, i, a) {
  const o = this;
  return Ge(t, s, "listItemIndent", o.containerState.size + 1);
  function s(c) {
    const f = o.events[o.events.length - 1];
    return f && f[1].type === "listItemIndent" && f[2].sliceSerialize(f[1], !0).length === o.containerState.size ? i(c) : a(c);
  }
}
function I5(t) {
  t.exit(this.containerState.type);
}
function H5(t, i, a) {
  const o = this;
  return Ge(t, s, "listItemPrefixWhitespace", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 5);
  function s(c) {
    const f = o.events[o.events.length - 1];
    return !Be(c) && f && f[1].type === "listItemPrefixWhitespace" ? i(c) : a(c);
  }
}
const Ey = {
  name: "setextUnderline",
  resolveTo: Z5,
  tokenize: q5
};
function Z5(t, i) {
  const a = new vu();
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
function q5(t, i, a) {
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
    return g === s ? (t.consume(g), p) : (t.exit("setextHeadingLineSequence"), Be(g) ? Ge(t, m, "lineSuffix")(g) : m(g));
  }
  function m(g) {
    return g === null || Ee(g) ? (t.exit("setextHeadingLine"), i(g)) : a(g);
  }
}
const $5 = {
  tokenize: V5
};
function V5(t) {
  const i = this, a = t.attempt(
    // Try to parse a blank line.
    _o,
    o,
    // Try to parse initial flow (essentially, only code).
    t.attempt(this.parser.constructs.flowInitial, s, Ge(t, t.attempt(this.parser.constructs.flow, s, t.attempt(KC, s)), "linePrefix"))
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
const Y5 = {
  resolveAll: L0()
}, G5 = U0("string"), F5 = U0("text");
function U0(t) {
  return {
    resolveAll: L0(t === "text" ? X5 : void 0),
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
function L0(t) {
  return i;
  function i(a, o) {
    let s = -1, c;
    for (; ++s <= a.length; )
      c === void 0 ? a[s] && a[s][1].type === "data" && (c = s, s++) : (!a[s] || a[s][1].type !== "data") && (s !== c + 2 && (a[c][1].end = a[s - 1][1].end, a.splice(c + 2, s - c - 2), s = c + 2), c = void 0);
    return t ? t(a, o) : a;
  }
}
function X5(t, i) {
  const a = new vu();
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
const Q5 = {
  42: bn,
  43: bn,
  45: bn,
  48: bn,
  49: bn,
  50: bn,
  51: bn,
  52: bn,
  53: bn,
  54: bn,
  55: bn,
  56: bn,
  57: bn,
  62: T0
}, P5 = {
  91: n5
}, K5 = {
  [-2]: _d,
  [-1]: _d,
  32: _d
}, J5 = {
  35: s5,
  42: uu,
  45: [Ey, uu],
  60: d5,
  61: Ey,
  95: uu,
  96: _y,
  126: _y
}, W5 = {
  38: A0,
  92: N0
}, eT = {
  [-5]: jd,
  [-4]: jd,
  [-3]: jd,
  33: C5,
  38: A0,
  42: np,
  60: [OC, b5],
  91: N5,
  92: [l5, N0],
  93: Lp,
  95: np,
  96: YC
}, tT = {
  null: [np, Y5]
}, nT = {
  null: [42, 95]
}, iT = {
  null: []
}, rT = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  attentionMarkers: nT,
  contentInitial: P5,
  disable: iT,
  document: Q5,
  flow: J5,
  flowInitial: K5,
  insideSpan: tT,
  string: W5,
  text: eT
}, Symbol.toStringTag, { value: "Module" }));
function aT(t, i, a) {
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
    attempt: F(K),
    check: F(N),
    consume: I,
    enter: U,
    exit: Y,
    interrupt: F(N, {
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
  function b(ee) {
    return f = Xn(f, ee), C(), f[f.length - 1] !== null ? [] : (le(i, 0), g.events = Tu(c, g.events, g), g.events);
  }
  function w(ee, se) {
    return oT(v(ee), se);
  }
  function v(ee) {
    return lT(f, ee);
  }
  function S() {
    const {
      _bufferIndex: ee,
      _index: se,
      line: Ne,
      column: ce,
      offset: ne
    } = o;
    return {
      _bufferIndex: ee,
      _index: se,
      line: Ne,
      column: ce,
      offset: ne
    };
  }
  function j(ee) {
    s[ee.line] = ee.column, Z();
  }
  function C() {
    for (; o._index < f.length; ) {
      const ee = f[o._index];
      if (typeof ee == "string") {
        const se = o._index;
        for (o._bufferIndex < 0 && (o._bufferIndex = 0); o._index === se && o._bufferIndex < ee.length; )
          O(ee.charCodeAt(o._bufferIndex));
      } else
        O(ee);
    }
  }
  function O(ee) {
    x = x(ee);
  }
  function I(ee) {
    Ee(ee) ? (o.line++, o.column = 1, o.offset += ee === -3 ? 2 : 1, Z()) : ee !== -1 && (o.column++, o.offset++), o._bufferIndex < 0 ? o._index++ : (o._bufferIndex++, o._bufferIndex === // Points w/ non-negative `_bufferIndex` reference
    // strings.
    /** @type {string} */
    f[o._index].length && (o._bufferIndex = -1, o._index++)), g.previous = ee;
  }
  function U(ee, se) {
    const Ne = se || {};
    return Ne.type = ee, Ne.start = S(), g.events.push(["enter", Ne, g]), p.push(Ne), Ne;
  }
  function Y(ee) {
    const se = p.pop();
    return se.end = S(), g.events.push(["exit", se, g]), se;
  }
  function K(ee, se) {
    le(ee, se.from);
  }
  function N(ee, se) {
    se.restore();
  }
  function F(ee, se) {
    return Ne;
    function Ne(ce, ne, W) {
      let ue, pe, _e, z;
      return Array.isArray(ce) ? (
        /* c8 ignore next 1 */
        dt(ce)
      ) : "tokenize" in ce ? (
        // Looks like a construct.
        dt([
          /** @type {Construct} */
          ce
        ])
      ) : Ve(ce);
      function Ve(L) {
        return re;
        function re(he) {
          const be = he !== null && L[he], Te = he !== null && L.null, me = [
            // To do: add more extension tests.
            /* c8 ignore next 2 */
            ...Array.isArray(be) ? be : be ? [be] : [],
            ...Array.isArray(Te) ? Te : Te ? [Te] : []
          ];
          return dt(me)(he);
        }
      }
      function dt(L) {
        return ue = L, pe = 0, L.length === 0 ? W : E(L[pe]);
      }
      function E(L) {
        return re;
        function re(he) {
          return z = ye(), _e = L, L.partial || (g.currentConstruct = L), L.name && g.parser.constructs.disable.null.includes(L.name) ? J() : L.tokenize.call(
            // If we do have fields, create an object w/ `context` as its
            // prototype.
            // This allows a “live binding”, which is needed for `interrupt`.
            se ? Object.assign(Object.create(g), se) : g,
            m,
            T,
            J
          )(he);
        }
      }
      function T(L) {
        return ee(_e, z), ne;
      }
      function J(L) {
        return z.restore(), ++pe < ue.length ? E(ue[pe]) : W;
      }
    }
  }
  function le(ee, se) {
    ee.resolveAll && !c.includes(ee) && c.push(ee), ee.resolve && ri(g.events, se, g.events.length - se, ee.resolve(g.events.slice(se), g)), ee.resolveTo && (g.events = ee.resolveTo(g.events, g));
  }
  function ye() {
    const ee = S(), se = g.previous, Ne = g.currentConstruct, ce = g.events.length, ne = Array.from(p);
    return {
      from: ce,
      restore: W
    };
    function W() {
      o = ee, g.previous = se, g.currentConstruct = Ne, g.events.length = ce, p = ne, Z();
    }
  }
  function Z() {
    o.line in s && o.column < 2 && (o.column = s[o.line], o.offset += s[o.line] - 1);
  }
}
function lT(t, i) {
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
function oT(t, i) {
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
function sT(t) {
  const o = {
    constructs: (
      /** @type {FullNormalizedExtension} */
      j0([rT, ...(t || {}).extensions || []])
    ),
    content: s(_C),
    defined: [],
    document: s(EC),
    flow: s($5),
    lazy: {},
    string: s(G5),
    text: s(F5)
  };
  return o;
  function s(c) {
    return f;
    function f(p) {
      return aT(o, c, p);
    }
  }
}
function uT(t) {
  for (; !O0(t); )
    ;
  return t;
}
const Cy = /[\0\t\n\r]/g;
function cT() {
  let t = 1, i = "", a = !0, o;
  return s;
  function s(c, f, p) {
    c = i + (typeof c == "string" ? c.toString() : new TextDecoder(f || void 0).decode(c));
    const m = [];
    let g = 0;
    for (i = "", a && (c.charCodeAt(0) === 65279 && g++, a = void 0); g < c.length; ) {
      Cy.lastIndex = g;
      const x = Cy.exec(c), b = x && x.index !== void 0 ? x.index : c.length, w = c.charCodeAt(b);
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
const fT = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;
function dT(t) {
  return t.replace(fT, pT);
}
function pT(t, i, a) {
  if (i)
    return i;
  if (a.charCodeAt(0) === 35) {
    const s = a.charCodeAt(1), c = s === 120 || s === 88;
    return E0(a.slice(c ? 2 : 1), c ? 16 : 10);
  }
  return Up(a) || t;
}
const B0 = {}.hasOwnProperty;
function hT(t, i, a) {
  return i && typeof i == "object" && (a = i, i = void 0), mT(a)(uT(sT(a).document().write(cT()(t, i, !0))));
}
function mT(t) {
  const i = {
    afterExit: [],
    beforeEnter: [],
    transforms: [],
    canContainEols: ["emphasis", "fragment", "heading", "paragraph", "strong"],
    enter: {
      autolink: f(Jt),
      autolinkProtocol: Z,
      autolinkEmail: Z,
      atxHeading: f(bt),
      blockQuote: f(me),
      characterEscape: Z,
      characterReference: Z,
      codeFenced: f(je),
      codeFencedFenceInfo: p,
      codeFencedFenceMeta: p,
      codeIndented: f(je, p),
      codeText: f(Ht, p),
      codeTextData: Z,
      data: Z,
      codeFlowValue: Z,
      definition: f(ki),
      definitionDestinationString: p,
      definitionLabelString: p,
      definitionTitleString: p,
      emphasis: f(On),
      hardBreakEscape: f(ut),
      hardBreakTrailing: f(ut),
      htmlFlow: f(Fe, p),
      htmlFlowData: Z,
      htmlText: f(Fe, p),
      htmlTextData: Z,
      image: f(un),
      label: p,
      link: f(Jt),
      listItem: f(Dn),
      listItemValue: v,
      listOrdered: f(xt, w),
      listUnordered: f(xt),
      paragraph: f(Si),
      reference: T,
      referenceString: p,
      resourceDestinationString: p,
      resourceTitleString: p,
      setextHeading: f(bt),
      strong: f(Mn),
      thematicBreak: f(Rn)
    },
    exit: {
      atxHeading: g(),
      atxHeadingSequence: N,
      autolink: g(),
      autolinkEmail: Te,
      autolinkProtocol: be,
      blockQuote: g(),
      characterEscapeValue: ee,
      characterReferenceMarkerHexadecimal: L,
      characterReferenceMarkerNumeric: L,
      characterReferenceValue: re,
      characterReference: he,
      codeFenced: g(O),
      codeFencedFence: C,
      codeFencedFenceInfo: S,
      codeFencedFenceMeta: j,
      codeFlowValue: ee,
      codeIndented: g(I),
      codeText: g(W),
      codeTextData: ee,
      data: ee,
      definition: g(),
      definitionDestinationString: K,
      definitionLabelString: U,
      definitionTitleString: Y,
      emphasis: g(),
      hardBreakEscape: g(Ne),
      hardBreakTrailing: g(Ne),
      htmlFlow: g(ce),
      htmlFlowData: ee,
      htmlText: g(ne),
      htmlTextData: ee,
      image: g(pe),
      label: z,
      labelText: _e,
      lineEnding: se,
      link: g(ue),
      listItem: g(),
      listOrdered: g(),
      listUnordered: g(),
      paragraph: g(),
      referenceString: J,
      resourceDestinationString: Ve,
      resourceTitleString: dt,
      resource: E,
      setextHeading: g(ye),
      setextHeadingLineSequence: le,
      setextHeadingText: F,
      strong: g(),
      thematicBreak: g()
    }
  };
  I0(i, (t || {}).mdastExtensions || []);
  const a = {};
  return o;
  function o(V) {
    let te = {
      type: "root",
      children: [],
      position: void 0
    };
    const ve = {
      stack: [te],
      tokenStack: [],
      config: i,
      enter: m,
      exit: x,
      buffer: p,
      resume: b,
      data: a
    }, Ae = [], Ue = [];
    let Qe = -1;
    for (; ++Qe < V.length; )
      if (Ue.push(V[Qe]), V[Qe][1].type === "listOrdered" || V[Qe][1].type === "listUnordered")
        if (V[Qe][0] === "enter")
          Ae.push(Ue.length - 1);
        else {
          const pt = Ae.pop();
          c(Ue, pt);
        }
    for (V = Ue, Qe = -1; ++Qe < V.length; ) {
      const pt = i[V[Qe][0]];
      V[Qe][0] === "enter" && i.beforeEnter.length > 0 && s(i.beforeEnter, {
        ...ve,
        sliceSerialize: V[Qe][2].sliceSerialize
      }, V[Qe][1]), B0.call(pt, V[Qe][1].type) && pt[V[Qe][1].type].call({
        ...ve,
        sliceSerialize: V[Qe][2].sliceSerialize
      }, V[Qe][1]), V[Qe][0] === "exit" && i.afterExit.length > 0 && s(i.afterExit, {
        ...ve,
        sliceSerialize: V[Qe][2].sliceSerialize
      }, V[Qe][1]);
    }
    if (ve.tokenStack.length > 0) {
      const pt = ve.tokenStack[ve.tokenStack.length - 1];
      (pt[1] || Ty).call(ve, void 0, pt[0]);
    }
    for (te.position = {
      start: xr(V.length > 0 ? V[0][1].start : {
        line: 1,
        column: 1,
        offset: 0
      }),
      end: xr(V.length > 0 ? V[V.length - 2][1].end : {
        line: 1,
        column: 1,
        offset: 0
      })
    }, Qe = -1; ++Qe < i.transforms.length; )
      te = i.transforms[Qe](te) || te;
    return te;
  }
  function s(V, te, ve) {
    let Ae = -1;
    for (; ++Ae < V.length; )
      V[Ae].call(te, ve);
  }
  function c(V, te) {
    const ve = V.length - 1;
    let Ae = te - 1, Ue = -1, Qe = !1, pt, wt, _t, Zt;
    const Pn = [];
    for (; ++Ae <= ve; ) {
      const qt = V[Ae];
      switch (qt[1].type) {
        case "listUnordered":
        case "listOrdered":
        case "blockQuote": {
          qt[0] === "enter" ? Ue++ : Ue--, Zt = void 0;
          break;
        }
        case "lineEndingBlank": {
          qt[0] === "enter" && (pt && !Zt && !Ue && !_t && (_t = Ae), Zt = void 0);
          break;
        }
        case "linePrefix":
        case "listItemValue":
        case "listItemMarker":
        case "listItemPrefix":
        case "listItemPrefixWhitespace":
          break;
        default:
          Zt = void 0;
      }
      if (!Ue && qt[0] === "enter" && qt[1].type === "listItemPrefix" || Ue === -1 && qt[0] === "exit" && (qt[1].type === "listUnordered" || qt[1].type === "listOrdered")) {
        if (pt) {
          let Un = Ae;
          for (wt = void 0; Un--; ) {
            const cn = V[Un];
            if (cn[1].type === "lineEnding" || cn[1].type === "lineEndingBlank") {
              if (cn[0] === "exit") continue;
              wt && (V[wt][1].type = "lineEndingBlank", Qe = !0), cn[1].type = "lineEnding", wt = Un;
            } else if (!(cn[1].type === "linePrefix" || cn[1].type === "blockQuotePrefix" || cn[1].type === "blockQuotePrefixWhitespace" || cn[1].type === "blockQuoteMarker" || cn[1].type === "listItemIndent")) break;
          }
          _t && (!wt || _t < wt) && (pt._spread = !0), pt.end = Object.assign({}, wt ? V[wt][1].start : qt[1].end), Pn.push({
            at: wt || Ae,
            event: ["exit", pt, qt[2]]
          });
        }
        if (qt[1].type === "listItemPrefix") {
          const Un = {
            type: "listItem",
            _spread: !1,
            start: Object.assign({}, qt[1].start),
            // @ts-expect-error: we’ll add `end` in a second.
            end: void 0
          };
          pt = Un, Pn.push({
            at: Ae,
            event: ["enter", Un, qt[2]]
          }), _t = void 0, Zt = !0;
        }
      }
    }
    const Er = V.splice(te);
    let Ot = 0;
    for (Ae = -1; ++Ae < Er.length; ) {
      for (; Ot < Pn.length && Pn[Ot].at === te + Ae; )
        V.push(Pn[Ot++].event);
      V.push(Er[Ae]);
    }
    V[te][1]._spread = Qe;
  }
  function f(V, te) {
    return ve;
    function ve(Ae) {
      m.call(this, V(Ae), Ae), te && te.call(this, Ae);
    }
  }
  function p() {
    this.stack.push({
      type: "fragment",
      children: []
    });
  }
  function m(V, te, ve) {
    this.stack[this.stack.length - 1].children.push(V), this.stack.push(V), this.tokenStack.push([te, ve || void 0]), V.position = {
      start: xr(te.start),
      // @ts-expect-error: `end` will be patched later.
      end: void 0
    };
  }
  function g(V) {
    return te;
    function te(ve) {
      V && V.call(this, ve), x.call(this, ve);
    }
  }
  function x(V, te) {
    const ve = this.stack.pop(), Ae = this.tokenStack.pop();
    if (!Ae)
      throw new Error("Cannot close `" + V.type + "` (" + go({
        start: V.start,
        end: V.end
      }) + "): it’s not open");
    Ae[0].type !== V.type && (te ? te.call(this, V, Ae[0]) : (Ae[1] || Ty).call(this, V, Ae[0])), ve.position.end = xr(V.end);
  }
  function b() {
    return Rp(this.stack.pop());
  }
  function w() {
    this.data.expectingFirstListItemValue = !0;
  }
  function v(V) {
    if (this.data.expectingFirstListItemValue) {
      const te = this.stack[this.stack.length - 2];
      te.start = Number.parseInt(this.sliceSerialize(V), 10), this.data.expectingFirstListItemValue = void 0;
    }
  }
  function S() {
    const V = this.resume(), te = this.stack[this.stack.length - 1];
    te.lang = V;
  }
  function j() {
    const V = this.resume(), te = this.stack[this.stack.length - 1];
    te.meta = V;
  }
  function C() {
    this.data.flowCodeInside || (this.buffer(), this.data.flowCodeInside = !0);
  }
  function O() {
    const V = this.resume(), te = this.stack[this.stack.length - 1];
    te.value = V.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g, ""), this.data.flowCodeInside = void 0;
  }
  function I() {
    const V = this.resume(), te = this.stack[this.stack.length - 1];
    te.value = V.replace(/(\r?\n|\r)$/g, "");
  }
  function U(V) {
    const te = this.resume(), ve = this.stack[this.stack.length - 1];
    ve.label = te, ve.identifier = ai(this.sliceSerialize(V)).toLowerCase();
  }
  function Y() {
    const V = this.resume(), te = this.stack[this.stack.length - 1];
    te.title = V;
  }
  function K() {
    const V = this.resume(), te = this.stack[this.stack.length - 1];
    te.url = V;
  }
  function N(V) {
    const te = this.stack[this.stack.length - 1];
    if (!te.depth) {
      const ve = this.sliceSerialize(V).length;
      te.depth = ve;
    }
  }
  function F() {
    this.data.setextHeadingSlurpLineEnding = !0;
  }
  function le(V) {
    const te = this.stack[this.stack.length - 1];
    te.depth = this.sliceSerialize(V).codePointAt(0) === 61 ? 1 : 2;
  }
  function ye() {
    this.data.setextHeadingSlurpLineEnding = void 0;
  }
  function Z(V) {
    const ve = this.stack[this.stack.length - 1].children;
    let Ae = ve[ve.length - 1];
    (!Ae || Ae.type !== "text") && (Ae = zi(), Ae.position = {
      start: xr(V.start),
      // @ts-expect-error: we’ll add `end` later.
      end: void 0
    }, ve.push(Ae)), this.stack.push(Ae);
  }
  function ee(V) {
    const te = this.stack.pop();
    te.value += this.sliceSerialize(V), te.position.end = xr(V.end);
  }
  function se(V) {
    const te = this.stack[this.stack.length - 1];
    if (this.data.atHardBreak) {
      const ve = te.children[te.children.length - 1];
      ve.position.end = xr(V.end), this.data.atHardBreak = void 0;
      return;
    }
    !this.data.setextHeadingSlurpLineEnding && i.canContainEols.includes(te.type) && (Z.call(this, V), ee.call(this, V));
  }
  function Ne() {
    this.data.atHardBreak = !0;
  }
  function ce() {
    const V = this.resume(), te = this.stack[this.stack.length - 1];
    te.value = V;
  }
  function ne() {
    const V = this.resume(), te = this.stack[this.stack.length - 1];
    te.value = V;
  }
  function W() {
    const V = this.resume(), te = this.stack[this.stack.length - 1];
    te.value = V;
  }
  function ue() {
    const V = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const te = this.data.referenceType || "shortcut";
      V.type += "Reference", V.referenceType = te, delete V.url, delete V.title;
    } else
      delete V.identifier, delete V.label;
    this.data.referenceType = void 0;
  }
  function pe() {
    const V = this.stack[this.stack.length - 1];
    if (this.data.inReference) {
      const te = this.data.referenceType || "shortcut";
      V.type += "Reference", V.referenceType = te, delete V.url, delete V.title;
    } else
      delete V.identifier, delete V.label;
    this.data.referenceType = void 0;
  }
  function _e(V) {
    const te = this.sliceSerialize(V), ve = this.stack[this.stack.length - 2];
    ve.label = dT(te), ve.identifier = ai(te).toLowerCase();
  }
  function z() {
    const V = this.stack[this.stack.length - 1], te = this.resume(), ve = this.stack[this.stack.length - 1];
    if (this.data.inReference = !0, ve.type === "link") {
      const Ae = V.children;
      ve.children = Ae;
    } else
      ve.alt = te;
  }
  function Ve() {
    const V = this.resume(), te = this.stack[this.stack.length - 1];
    te.url = V;
  }
  function dt() {
    const V = this.resume(), te = this.stack[this.stack.length - 1];
    te.title = V;
  }
  function E() {
    this.data.inReference = void 0;
  }
  function T() {
    this.data.referenceType = "collapsed";
  }
  function J(V) {
    const te = this.resume(), ve = this.stack[this.stack.length - 1];
    ve.label = te, ve.identifier = ai(this.sliceSerialize(V)).toLowerCase(), this.data.referenceType = "full";
  }
  function L(V) {
    this.data.characterReferenceType = V.type;
  }
  function re(V) {
    const te = this.sliceSerialize(V), ve = this.data.characterReferenceType;
    let Ae;
    ve ? (Ae = E0(te, ve === "characterReferenceMarkerNumeric" ? 10 : 16), this.data.characterReferenceType = void 0) : Ae = Up(te);
    const Ue = this.stack[this.stack.length - 1];
    Ue.value += Ae;
  }
  function he(V) {
    const te = this.stack.pop();
    te.position.end = xr(V.end);
  }
  function be(V) {
    ee.call(this, V);
    const te = this.stack[this.stack.length - 1];
    te.url = this.sliceSerialize(V);
  }
  function Te(V) {
    ee.call(this, V);
    const te = this.stack[this.stack.length - 1];
    te.url = "mailto:" + this.sliceSerialize(V);
  }
  function me() {
    return {
      type: "blockquote",
      children: [],
      position: void 0
    };
  }
  function je() {
    return {
      type: "code",
      lang: null,
      meta: null,
      value: "",
      position: void 0
    };
  }
  function Ht() {
    return {
      type: "inlineCode",
      value: "",
      position: void 0
    };
  }
  function ki() {
    return {
      type: "definition",
      identifier: "",
      label: null,
      title: null,
      url: "",
      position: void 0
    };
  }
  function On() {
    return {
      type: "emphasis",
      children: [],
      position: void 0
    };
  }
  function bt() {
    return {
      type: "heading",
      // @ts-expect-error `depth` will be set later.
      depth: 0,
      children: [],
      position: void 0
    };
  }
  function ut() {
    return {
      type: "break",
      position: void 0
    };
  }
  function Fe() {
    return {
      type: "html",
      value: "",
      position: void 0
    };
  }
  function un() {
    return {
      type: "image",
      title: null,
      url: "",
      alt: null,
      position: void 0
    };
  }
  function Jt() {
    return {
      type: "link",
      title: null,
      url: "",
      children: [],
      position: void 0
    };
  }
  function xt(V) {
    return {
      type: "list",
      ordered: V.type === "listOrdered",
      start: null,
      spread: V._spread,
      children: [],
      position: void 0
    };
  }
  function Dn(V) {
    return {
      type: "listItem",
      spread: V._spread,
      checked: null,
      children: [],
      position: void 0
    };
  }
  function Si() {
    return {
      type: "paragraph",
      children: [],
      position: void 0
    };
  }
  function Mn() {
    return {
      type: "strong",
      children: [],
      position: void 0
    };
  }
  function zi() {
    return {
      type: "text",
      value: "",
      position: void 0
    };
  }
  function Rn() {
    return {
      type: "thematicBreak",
      position: void 0
    };
  }
}
function xr(t) {
  return {
    line: t.line,
    column: t.column,
    offset: t.offset
  };
}
function I0(t, i) {
  let a = -1;
  for (; ++a < i.length; ) {
    const o = i[a];
    Array.isArray(o) ? I0(t, o) : gT(t, o);
  }
}
function gT(t, i) {
  let a;
  for (a in i)
    if (B0.call(i, a))
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
function Ty(t, i) {
  throw t ? new Error("Cannot close `" + t.type + "` (" + go({
    start: t.start,
    end: t.end
  }) + "): a different token (`" + i.type + "`, " + go({
    start: i.start,
    end: i.end
  }) + ") is open") : new Error("Cannot close document, a token (`" + i.type + "`, " + go({
    start: i.start,
    end: i.end
  }) + ") is still open");
}
function bT(t) {
  const i = this;
  i.parser = a;
  function a(o) {
    return hT(o, {
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
function xT(t, i) {
  const a = {
    type: "element",
    tagName: "blockquote",
    properties: {},
    children: t.wrap(t.all(i), !0)
  };
  return t.patch(i, a), t.applyData(i, a);
}
function yT(t, i) {
  const a = { type: "element", tagName: "br", properties: {}, children: [] };
  return t.patch(i, a), [t.applyData(i, a), { type: "text", value: `
` }];
}
function vT(t, i) {
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
function wT(t, i) {
  const a = {
    type: "element",
    tagName: "del",
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, a), t.applyData(i, a);
}
function kT(t, i) {
  const a = {
    type: "element",
    tagName: "em",
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, a), t.applyData(i, a);
}
function ST(t, i) {
  const a = typeof t.options.clobberPrefix == "string" ? t.options.clobberPrefix : "user-content-", o = String(i.identifier).toUpperCase(), s = ul(o.toLowerCase()), c = t.footnoteOrder.indexOf(o);
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
function zT(t, i) {
  const a = {
    type: "element",
    tagName: "h" + i.depth,
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, a), t.applyData(i, a);
}
function _T(t, i) {
  if (t.options.allowDangerousHtml) {
    const a = { type: "raw", value: i.value };
    return t.patch(i, a), t.applyData(i, a);
  }
}
function H0(t, i) {
  const a = i.referenceType;
  let o = "]";
  if (a === "collapsed" ? o += "[]" : a === "full" && (o += "[" + (i.label || i.identifier) + "]"), i.type === "imageReference")
    return [{ type: "text", value: "![" + i.alt + o }];
  const s = t.all(i), c = s[0];
  c && c.type === "text" ? c.value = "[" + c.value : s.unshift({ type: "text", value: "[" });
  const f = s[s.length - 1];
  return f && f.type === "text" ? f.value += o : s.push({ type: "text", value: o }), s;
}
function jT(t, i) {
  const a = String(i.identifier).toUpperCase(), o = t.definitionById.get(a);
  if (!o)
    return H0(t, i);
  const s = { src: ul(o.url || ""), alt: i.alt };
  o.title !== null && o.title !== void 0 && (s.title = o.title);
  const c = { type: "element", tagName: "img", properties: s, children: [] };
  return t.patch(i, c), t.applyData(i, c);
}
function ET(t, i) {
  const a = { src: ul(i.url) };
  i.alt !== null && i.alt !== void 0 && (a.alt = i.alt), i.title !== null && i.title !== void 0 && (a.title = i.title);
  const o = { type: "element", tagName: "img", properties: a, children: [] };
  return t.patch(i, o), t.applyData(i, o);
}
function CT(t, i) {
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
function TT(t, i) {
  const a = String(i.identifier).toUpperCase(), o = t.definitionById.get(a);
  if (!o)
    return H0(t, i);
  const s = { href: ul(o.url || "") };
  o.title !== null && o.title !== void 0 && (s.title = o.title);
  const c = {
    type: "element",
    tagName: "a",
    properties: s,
    children: t.all(i)
  };
  return t.patch(i, c), t.applyData(i, c);
}
function NT(t, i) {
  const a = { href: ul(i.url) };
  i.title !== null && i.title !== void 0 && (a.title = i.title);
  const o = {
    type: "element",
    tagName: "a",
    properties: a,
    children: t.all(i)
  };
  return t.patch(i, o), t.applyData(i, o);
}
function AT(t, i, a) {
  const o = t.all(i), s = a ? OT(a) : Z0(i), c = {}, f = [];
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
function OT(t) {
  let i = !1;
  if (t.type === "list") {
    i = t.spread || !1;
    const a = t.children;
    let o = -1;
    for (; !i && ++o < a.length; )
      i = Z0(a[o]);
  }
  return i;
}
function Z0(t) {
  const i = t.spread;
  return i ?? t.children.length > 1;
}
function DT(t, i) {
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
function MT(t, i) {
  const a = {
    type: "element",
    tagName: "p",
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, a), t.applyData(i, a);
}
function RT(t, i) {
  const a = { type: "root", children: t.wrap(t.all(i)) };
  return t.patch(i, a), t.applyData(i, a);
}
function UT(t, i) {
  const a = {
    type: "element",
    tagName: "strong",
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, a), t.applyData(i, a);
}
function LT(t, i) {
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
    }, p = Ap(i.children[1]), m = y0(i.children[i.children.length - 1]);
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
function BT(t, i, a) {
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
function IT(t, i) {
  const a = {
    type: "element",
    tagName: "td",
    // Assume body cell.
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, a), t.applyData(i, a);
}
const Ny = 9, Ay = 32;
function HT(t) {
  const i = String(t), a = /\r?\n|\r/g;
  let o = a.exec(i), s = 0;
  const c = [];
  for (; o; )
    c.push(
      Oy(i.slice(s, o.index), s > 0, !0),
      o[0]
    ), s = o.index + o[0].length, o = a.exec(i);
  return c.push(Oy(i.slice(s), s > 0, !1)), c.join("");
}
function Oy(t, i, a) {
  let o = 0, s = t.length;
  if (i) {
    let c = t.codePointAt(o);
    for (; c === Ny || c === Ay; )
      o++, c = t.codePointAt(o);
  }
  if (a) {
    let c = t.codePointAt(s - 1);
    for (; c === Ny || c === Ay; )
      s--, c = t.codePointAt(s - 1);
  }
  return s > o ? t.slice(o, s) : "";
}
function ZT(t, i) {
  const a = { type: "text", value: HT(String(i.value)) };
  return t.patch(i, a), t.applyData(i, a);
}
function qT(t, i) {
  const a = {
    type: "element",
    tagName: "hr",
    properties: {},
    children: []
  };
  return t.patch(i, a), t.applyData(i, a);
}
const $T = {
  blockquote: xT,
  break: yT,
  code: vT,
  delete: wT,
  emphasis: kT,
  footnoteReference: ST,
  heading: zT,
  html: _T,
  imageReference: jT,
  image: ET,
  inlineCode: CT,
  linkReference: TT,
  link: NT,
  listItem: AT,
  list: DT,
  paragraph: MT,
  // @ts-expect-error: root is different, but hard to type.
  root: RT,
  strong: UT,
  table: LT,
  tableCell: IT,
  tableRow: BT,
  text: ZT,
  thematicBreak: qT,
  toml: tu,
  yaml: tu,
  definition: tu,
  footnoteDefinition: tu
};
function tu() {
}
const q0 = -1, Nu = 0, xo = 1, ku = 2, Bp = 3, Ip = 4, Hp = 5, Zp = 6, $0 = 7, V0 = 8, { defineProperty: VT } = Object, Y0 = typeof self == "object" ? self : globalThis, Dy = (t, i) => {
  switch (t) {
    case "Function":
    case "SharedWorker":
    case "Worker":
    case "eval":
    case "setInterval":
    case "setTimeout":
      throw new TypeError("unable to deserialize " + t);
  }
  return new Y0[t](i);
}, YT = (t, i) => {
  const a = (s, c) => (t.set(c, s), s), o = (s) => {
    if (t.has(s))
      return t.get(s);
    const [c, f] = i[s];
    switch (c) {
      case Nu:
      case q0:
        return a(f, s);
      case xo: {
        const p = a([], s);
        for (const m of f)
          p.push(o(m));
        return p;
      }
      case ku: {
        const p = a({}, s);
        for (const [m, g] of f) {
          const x = o(m), b = o(g);
          x === "__proto__" ? VT(p, x, {
            value: b,
            configurable: !0,
            enumerable: !0,
            writable: !0
          }) : p[x] = b;
        }
        return p;
      }
      case Bp:
        return a(new Date(f), s);
      case Ip: {
        const { source: p, flags: m } = f;
        return a(new RegExp(p, m), s);
      }
      case Hp: {
        const p = a(/* @__PURE__ */ new Map(), s);
        for (const [m, g] of f)
          p.set(o(m), o(g));
        return p;
      }
      case Zp: {
        const p = a(/* @__PURE__ */ new Set(), s);
        for (const m of f)
          p.add(o(m));
        return p;
      }
      case $0: {
        const { name: p, message: m } = f;
        return a(
          typeof Y0[p] == "function" ? Dy(p, m) : new Error(m),
          s
        );
      }
      case V0:
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
    return a(Dy(c, f), s);
  };
  return o;
}, My = (t) => YT(/* @__PURE__ */ new Map(), t)(0), ea = "", { toString: GT } = {}, { keys: FT, is: XT } = Object, so = (t) => {
  const i = typeof t;
  if (i !== "object" || !t)
    return [Nu, i];
  const a = GT.call(t).slice(8, -1);
  switch (a) {
    case "Array":
      return [xo, ea];
    case "Object":
      return [ku, ea];
    case "Date":
      return [Bp, ea];
    case "RegExp":
      return [Ip, ea];
    case "Map":
      return [Hp, ea];
    case "Set":
      return [Zp, ea];
    case "DataView":
      return [xo, a];
  }
  return a.includes("Array") ? [xo, a] : t instanceof Error ? [$0, t.name || "Error"] : [ku, a];
}, nu = ([t, i]) => t === Nu && (i === "function" || i === "symbol"), QT = (t, i, a, o) => {
  const s = (f, p) => {
    const m = o.push(f) - 1;
    return a.set(p, m), m;
  }, c = (f) => {
    if (a.has(f))
      return a.get(f);
    let [p, m] = so(f);
    switch (p) {
      case Nu: {
        let x = f;
        switch (m) {
          case "bigint":
            p = V0, x = f.toString();
            break;
          case "number":
            if (!f && XT(f, -0))
              return o.push(["-0"]) - 1;
            break;
          case "function":
          case "symbol":
            if (t)
              throw new TypeError("unable to serialize " + m);
            x = null;
            break;
          case "undefined":
            return s([q0], f);
        }
        return s([p, x], f);
      }
      case xo: {
        if (m) {
          let w = f;
          return m === "DataView" ? w = new Uint8Array(f.buffer) : m === "ArrayBuffer" && (w = new Uint8Array(f)), s([m, [...w]], f);
        }
        const x = [], b = s([p, x], f);
        for (const w of f)
          x.push(c(w));
        return b;
      }
      case ku: {
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
        for (const w of FT(f))
          (t || !nu(so(f[w]))) && x.push([c(w), c(f[w])]);
        return b;
      }
      case Bp:
        return s([p, isNaN(f.getTime()) ? ea : f.toISOString()], f);
      case Ip: {
        const { source: x, flags: b } = f;
        return s([p, { source: x, flags: b }], f);
      }
      case Hp: {
        const x = [], b = s([p, x], f);
        for (const [w, v] of f)
          (t || !(nu(so(w)) || nu(so(v)))) && x.push([c(w), c(v)]);
        return b;
      }
      case Zp: {
        const x = [], b = s([p, x], f);
        for (const w of f)
          (t || !nu(so(w))) && x.push(c(w));
        return b;
      }
    }
    const { message: g } = f;
    return s([p, { name: m, message: g }], f);
  };
  return c;
}, Ry = (t, { json: i, lossy: a } = {}) => {
  const o = [];
  return QT(!(i || a), !!i, /* @__PURE__ */ new Map(), o)(t), o;
}, Su = typeof structuredClone == "function" ? (
  /* c8 ignore start */
  (t, i) => i && ("json" in i || "lossy" in i) ? My(Ry(t, i)) : structuredClone(t)
) : (t, i) => My(Ry(t, i));
function PT(t, i) {
  const a = [{ type: "text", value: "↩" }];
  return i > 1 && a.push({
    type: "element",
    tagName: "sup",
    properties: {},
    children: [{ type: "text", value: String(i) }]
  }), a;
}
function KT(t, i) {
  return "Back to reference " + (t + 1) + (i > 1 ? "-" + i : "");
}
function JT(t) {
  const i = typeof t.options.clobberPrefix == "string" ? t.options.clobberPrefix : "user-content-", a = t.options.footnoteBackContent || PT, o = t.options.footnoteBackLabel || KT, s = t.options.footnoteLabel || "Footnotes", c = t.options.footnoteLabelTagName || "h2", f = t.options.footnoteLabelProperties || {
    className: ["sr-only"]
  }, p = [];
  let m = -1;
  for (; ++m < t.footnoteOrder.length; ) {
    const g = t.footnoteById.get(
      t.footnoteOrder[m]
    );
    if (!g)
      continue;
    const x = t.all(g), b = String(g.identifier).toUpperCase(), w = ul(b.toLowerCase());
    let v = 0;
    const S = [], j = t.footnoteCounts.get(b);
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
    const C = x[x.length - 1];
    if (C && C.type === "element" && C.tagName === "p") {
      const I = C.children[C.children.length - 1];
      I && I.type === "text" ? I.value += " " : C.children.push({ type: "text", value: " " }), C.children.push(...S);
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
            ...Su(f),
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
const Au = (
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
      return nN;
    if (typeof t == "function")
      return Ou(t);
    if (typeof t == "object")
      return Array.isArray(t) ? WT(t) : (
        // Cast because `ReadonlyArray` goes into the above but `isArray`
        // narrows to `Array`.
        eN(
          /** @type {Props} */
          t
        )
      );
    if (typeof t == "string")
      return tN(t);
    throw new Error("Expected function, string, or object as test");
  })
);
function WT(t) {
  const i = [];
  let a = -1;
  for (; ++a < t.length; )
    i[a] = Au(t[a]);
  return Ou(o);
  function o(...s) {
    let c = -1;
    for (; ++c < i.length; )
      if (i[c].apply(this, s)) return !0;
    return !1;
  }
}
function eN(t) {
  const i = (
    /** @type {Record<string, unknown>} */
    t
  );
  return Ou(a);
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
function tN(t) {
  return Ou(i);
  function i(a) {
    return a && a.type === t;
  }
}
function Ou(t) {
  return i;
  function i(a, o, s) {
    return !!(iN(a) && t.call(
      this,
      a,
      typeof o == "number" ? o : void 0,
      s || void 0
    ));
  }
}
function nN() {
  return !0;
}
function iN(t) {
  return t !== null && typeof t == "object" && "type" in t;
}
const G0 = [], rN = !0, cu = !1, rp = "skip";
function ap(t, i, a, o) {
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
  const g = Au(c), x = s ? 1 : -1;
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
      Object.defineProperty(C, "name", {
        value: "node (" + (w.type + (O ? "<" + O + ">" : "")) + ")"
      });
    }
    return C;
    function C() {
      const O = !c || g(w, v, S[S.length - 1] || void 0);
      let I = G0;
      if (p && O && (I = Uy(p(w, S, v)), I[0] === cu))
        return I;
      if ("children" in w && w.children) {
        const U = (
          /** @type {UnistParent} */
          w
        );
        if (U.children && I[0] !== rp) {
          let Y = (s ? -1 : U.children.length) + x;
          const K = [...S, U];
          for (; Y > -1 && Y < U.children.length; ) {
            const N = U.children[Y], F = b(N, Y, K)();
            if (F[0] === cu)
              return F;
            Y = typeof F[1] == "number" ? F[1] : Y + x;
          }
        }
      }
      if (m && O) {
        const U = Uy(m(w, S, v));
        if (U[0] === rp)
          throw new Error(
            "Unexpected value `" + U[0] + "` from `exit`, expected `CONTINUE`, `EXIT`, index, or nothing"
          );
        if (U[0] === cu || typeof U[1] == "number")
          return U;
      }
      return I;
    }
  }
}
function Uy(t) {
  return Array.isArray(t) ? t : typeof t == "number" ? [rN, t] : t == null ? G0 : [t];
}
function qp(t, i, a, o) {
  let s, c, f;
  c = /** @type {Visitor | Visitors} */
  i, f = a, typeof c == "function" ? ap(t, s, lp(c), f) : ap(t, s, aN(c), f);
}
function aN(t) {
  return !t || typeof t != "object" ? t : {
    enter: typeof t.enter == "function" ? lp(t.enter) : t.enter,
    exit: typeof t.exit == "function" ? lp(t.exit) : t.exit
  };
}
function lp(t) {
  return i;
  function i(a, o, s) {
    return t(a, s, o[o.length - 1]);
  }
}
const op = {}.hasOwnProperty, lN = {};
function oN(t, i) {
  const a = i || lN, o = /* @__PURE__ */ new Map(), s = /* @__PURE__ */ new Map(), c = /* @__PURE__ */ new Map(), f = { ...$T, ...a.handlers }, p = {
    all: g,
    applyData: uN,
    definitionById: o,
    footnoteById: s,
    footnoteCounts: c,
    footnoteOrder: [],
    handlers: f,
    one: m,
    options: a,
    patch: sN,
    wrap: fN
  };
  return qp(t, function(x) {
    if (x.type === "definition" || x.type === "footnoteDefinition") {
      const b = x.type === "definition" ? o : s, w = String(x.identifier).toUpperCase();
      b.has(w) || b.set(w, x);
    }
  }), p;
  function m(x, b) {
    const w = x.type, v = p.handlers[w];
    if (op.call(p.handlers, w) && v)
      return v(p, x, b);
    if (p.options.passThrough && p.options.passThrough.includes(w)) {
      if ("children" in x) {
        const { children: j, ...C } = x, O = Su(C);
        return O.children = p.all(x), O;
      }
      return Su(x);
    }
    return (p.options.unknownHandler || cN)(p, x, b);
  }
  function g(x) {
    const b = [];
    if ("children" in x) {
      const w = x.children;
      let v = -1;
      for (; ++v < w.length; ) {
        const S = p.one(w[v], x);
        if (S) {
          if (v && w[v - 1].type === "break" && (!Array.isArray(S) && S.type === "text" && (S.value = Ly(S.value)), !Array.isArray(S) && S.type === "element")) {
            const j = S.children[0];
            j && j.type === "text" && (j.value = Ly(j.value));
          }
          Array.isArray(S) ? b.push(...S) : b.push(S);
        }
      }
    }
    return b;
  }
}
function sN(t, i) {
  t.position && (i.position = KE(t));
}
function uN(t, i) {
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
    a.type === "element" && c && Object.assign(a.properties, Su(c)), "children" in a && a.children && s !== null && s !== void 0 && (a.children = s);
  }
  return a;
}
function cN(t, i) {
  const a = i.data || {}, o = "value" in i && !(op.call(a, "hProperties") || op.call(a, "hChildren")) ? { type: "text", value: i.value } : {
    type: "element",
    tagName: "div",
    properties: {},
    children: t.all(i)
  };
  return t.patch(i, o), t.applyData(i, o);
}
function fN(t, i) {
  const a = [];
  let o = -1;
  for (i && a.push({ type: "text", value: `
` }); ++o < t.length; )
    o && a.push({ type: "text", value: `
` }), a.push(t[o]);
  return i && t.length > 0 && a.push({ type: "text", value: `
` }), a;
}
function Ly(t) {
  let i = 0, a = t.charCodeAt(i);
  for (; a === 9 || a === 32; )
    i++, a = t.charCodeAt(i);
  return t.slice(i);
}
function By(t, i) {
  const a = oN(t, i), o = a.one(t, void 0), s = JT(a), c = Array.isArray(o) ? { type: "root", children: o } : o || { type: "root", children: [] };
  return s && c.children.push({ type: "text", value: `
` }, s), c;
}
function dN(t, i) {
  return t && "run" in t ? async function(a, o) {
    const s = (
      /** @type {HastRoot} */
      By(a, { file: o, ...i })
    );
    await t.run(s, o);
  } : function(a, o) {
    return (
      /** @type {HastRoot} */
      By(a, { file: o, ...t || i })
    );
  };
}
function Iy(t) {
  if (t)
    throw t;
}
var Ed, Hy;
function pN() {
  if (Hy) return Ed;
  Hy = 1;
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
  return Ed = function m() {
    var g, x, b, w, v, S, j = arguments[0], C = 1, O = arguments.length, I = !1;
    for (typeof j == "boolean" && (I = j, j = arguments[1] || {}, C = 2), (j == null || typeof j != "object" && typeof j != "function") && (j = {}); C < O; ++C)
      if (g = arguments[C], g != null)
        for (x in g)
          b = p(j, x), w = p(g, x), j !== w && (I && w && (c(w) || (v = s(w))) ? (v ? (v = !1, S = b && s(b) ? b : []) : S = b && c(b) ? b : {}, f(j, { name: x, newValue: m(I, S, w) })) : typeof w < "u" && f(j, { name: x, newValue: w }));
    return j;
  }, Ed;
}
var hN = pN();
const Cd = /* @__PURE__ */ Wy(hN);
function sp(t) {
  if (typeof t != "object" || t === null)
    return !1;
  const i = Object.getPrototypeOf(t);
  return (i === null || i === Object.prototype || Object.getPrototypeOf(i) === null) && !(Symbol.toStringTag in t) && !(Symbol.iterator in t);
}
function mN() {
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
      s = g, x ? gN(x, p)(...g) : f(null, ...g);
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
function gN(t, i) {
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
const bi = { basename: bN, dirname: xN, extname: yN, join: vN, sep: "/" };
function bN(t, i) {
  if (i !== void 0 && typeof i != "string")
    throw new TypeError('"ext" argument must be a string');
  jo(t);
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
function xN(t) {
  if (jo(t), t.length === 0)
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
function yN(t) {
  jo(t);
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
function vN(...t) {
  let i = -1, a;
  for (; ++i < t.length; )
    jo(t[i]), t[i] && (a = a === void 0 ? t[i] : a + "/" + t[i]);
  return a === void 0 ? "." : wN(a);
}
function wN(t) {
  jo(t);
  const i = t.codePointAt(0) === 47;
  let a = kN(t, !i);
  return a.length === 0 && !i && (a = "."), a.length > 0 && t.codePointAt(t.length - 1) === 47 && (a += "/"), i ? "/" + a : a;
}
function kN(t, i) {
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
function jo(t) {
  if (typeof t != "string")
    throw new TypeError(
      "Path must be a string. Received " + JSON.stringify(t)
    );
}
const SN = { cwd: zN };
function zN() {
  return "/";
}
function up(t) {
  return !!(t !== null && typeof t == "object" && "href" in t && t.href && "protocol" in t && t.protocol && // @ts-expect-error: indexing is fine.
  t.auth === void 0);
}
function _N(t) {
  if (typeof t == "string")
    t = new URL(t);
  else if (!up(t)) {
    const i = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' + t + "`"
    );
    throw i.code = "ERR_INVALID_ARG_TYPE", i;
  }
  if (t.protocol !== "file:") {
    const i = new TypeError("The URL must be of scheme file");
    throw i.code = "ERR_INVALID_URL_SCHEME", i;
  }
  return jN(t);
}
function jN(t) {
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
const Td = (
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
class F0 {
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
    i ? up(i) ? a = { path: i } : typeof i == "string" || EN(i) ? a = { value: i } : a = i : a = {}, this.cwd = "cwd" in a ? "" : SN.cwd(), this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
    let o = -1;
    for (; ++o < Td.length; ) {
      const c = Td[o];
      c in a && a[c] !== void 0 && a[c] !== null && (this[c] = c === "history" ? [...a[c]] : a[c]);
    }
    let s;
    for (s in a)
      Td.includes(s) || (this[s] = a[s]);
  }
  /**
   * Get the basename (including extname) (example: `'index.min.js'`).
   *
   * @returns {string | undefined}
   *   Basename.
   */
  get basename() {
    return typeof this.path == "string" ? bi.basename(this.path) : void 0;
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
    Ad(i, "basename"), Nd(i, "basename"), this.path = bi.join(this.dirname || "", i);
  }
  /**
   * Get the parent path (example: `'~'`).
   *
   * @returns {string | undefined}
   *   Dirname.
   */
  get dirname() {
    return typeof this.path == "string" ? bi.dirname(this.path) : void 0;
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
    Zy(this.basename, "dirname"), this.path = bi.join(i || "", this.basename);
  }
  /**
   * Get the extname (including dot) (example: `'.js'`).
   *
   * @returns {string | undefined}
   *   Extname.
   */
  get extname() {
    return typeof this.path == "string" ? bi.extname(this.path) : void 0;
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
    if (Nd(i, "extname"), Zy(this.dirname, "extname"), i) {
      if (i.codePointAt(0) !== 46)
        throw new Error("`extname` must start with `.`");
      if (i.includes(".", 1))
        throw new Error("`extname` cannot contain multiple dots");
    }
    this.path = bi.join(this.dirname, this.stem + (i || ""));
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
    up(i) && (i = _N(i)), Ad(i, "path"), this.path !== i && this.history.push(i);
  }
  /**
   * Get the stem (basename w/o extname) (example: `'index.min'`).
   *
   * @returns {string | undefined}
   *   Stem.
   */
  get stem() {
    return typeof this.path == "string" ? bi.basename(this.path, this.extname) : void 0;
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
    Ad(i, "stem"), Nd(i, "stem"), this.path = bi.join(this.dirname || "", i + (this.extname || ""));
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
    const s = new tn(
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
function Nd(t, i) {
  if (t && t.includes(bi.sep))
    throw new Error(
      "`" + i + "` cannot be a path: did not expect `" + bi.sep + "`"
    );
}
function Ad(t, i) {
  if (!t)
    throw new Error("`" + i + "` cannot be empty");
}
function Zy(t, i) {
  if (!t)
    throw new Error("Setting `" + i + "` requires `path` to be set too");
}
function EN(t) {
  return !!(t && typeof t == "object" && "byteLength" in t && "byteOffset" in t);
}
const CN = (
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
), TN = {}.hasOwnProperty;
class $p extends CN {
  /**
   * Create a processor.
   */
  constructor() {
    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = mN();
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
      new $p()
    );
    let a = -1;
    for (; ++a < this.attachers.length; ) {
      const o = this.attachers[a];
      i.use(...o);
    }
    return i.data(Cd(!0, {}, this.namespace)), i;
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
    return typeof i == "string" ? arguments.length === 2 ? (Md("data", this.frozen), this.namespace[i] = a, this) : TN.call(this.namespace, i) && this.namespace[i] || void 0 : i ? (Md("data", this.frozen), this.namespace = i, this) : this.namespace;
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
    const a = iu(i), o = this.parser || this.Parser;
    return Od("parse", o), o(String(a), a);
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
    return this.freeze(), Od("process", this.parser || this.Parser), Dd("process", this.compiler || this.Compiler), a ? s(void 0, a) : new Promise(s);
    function s(c, f) {
      const p = iu(i), m = (
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
        ON(S) ? w.value = S : w.result = S, g(
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
    return this.freeze(), Od("processSync", this.parser || this.Parser), Dd("processSync", this.compiler || this.Compiler), this.process(i, s), $y("processSync", "process", a), o;
    function s(c, f) {
      a = !0, Iy(c), o = f;
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
    qy(i), this.freeze();
    const s = this.transformers;
    return !o && typeof a == "function" && (o = a, a = void 0), o ? c(void 0, o) : new Promise(c);
    function c(f, p) {
      const m = iu(a);
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
    return this.run(i, a, c), $y("runSync", "run", o), s;
    function c(f, p) {
      Iy(f), s = p, o = !0;
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
    const o = iu(a), s = this.compiler || this.Compiler;
    return Dd("stringify", s), qy(i), s(i, o);
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
    if (Md("use", this.frozen), i != null) if (typeof i == "function")
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
      p(g.plugins), g.settings && (s.settings = Cd(!0, s.settings, g.settings));
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
        sp(j) && sp(v) && (v = Cd(!0, j, v)), o[w] = [g, v, ...S];
      }
    }
  }
}
const NN = new $p().freeze();
function Od(t, i) {
  if (typeof i != "function")
    throw new TypeError("Cannot `" + t + "` without `parser`");
}
function Dd(t, i) {
  if (typeof i != "function")
    throw new TypeError("Cannot `" + t + "` without `compiler`");
}
function Md(t, i) {
  if (i)
    throw new Error(
      "Cannot call `" + t + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`."
    );
}
function qy(t) {
  if (!sp(t) || typeof t.type != "string")
    throw new TypeError("Expected node, got `" + t + "`");
}
function $y(t, i, a) {
  if (!a)
    throw new Error(
      "`" + t + "` finished async. Use `" + i + "` instead"
    );
}
function iu(t) {
  return AN(t) ? t : new F0(t);
}
function AN(t) {
  return !!(t && typeof t == "object" && "message" in t && "messages" in t);
}
function ON(t) {
  return typeof t == "string" || DN(t);
}
function DN(t) {
  return !!(t && typeof t == "object" && "byteLength" in t && "byteOffset" in t);
}
const MN = "https://github.com/remarkjs/react-markdown/blob/main/changelog.md", Vy = [], Yy = { allowDangerousHtml: !0 }, RN = /^(https?|ircs?|mailto|xmpp)$/i, UN = [
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
function LN(t) {
  const i = BN(t), a = IN(t);
  return HN(i.runSync(i.parse(a), a), t);
}
function BN(t) {
  const i = t.rehypePlugins || Vy, a = t.remarkPlugins || Vy, o = t.remarkRehypeOptions ? { ...t.remarkRehypeOptions, ...Yy } : Yy;
  return NN().use(bT).use(a).use(dN, o).use(i);
}
function IN(t) {
  const i = t.children || "", a = new F0();
  return typeof i == "string" && (a.value = i), a;
}
function HN(t, i) {
  const a = i.allowedElements, o = i.allowElement, s = i.components, c = i.disallowedElements, f = i.skipHtml, p = i.unwrapDisallowed, m = i.urlTransform || ZN;
  for (const x of UN)
    Object.hasOwn(i, x.from) && ("" + x.from + (x.to ? "use `" + x.to + "` instead" : "remove it") + MN + x.id, void 0);
  return qp(t, g), nC(t, {
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
      for (v in zd)
        if (Object.hasOwn(zd, v) && Object.hasOwn(x.properties, v)) {
          const S = x.properties[v], j = zd[v];
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
function ZN(t) {
  const i = t.indexOf(":"), a = t.indexOf("?"), o = t.indexOf("#"), s = t.indexOf("/");
  return (
    // If there is no protocol, it’s relative.
    i === -1 || // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.
    s !== -1 && i > s || a !== -1 && i > a || o !== -1 && i > o || // It is a protocol, it should be allowed.
    RN.test(t.slice(0, i)) ? t : ""
  );
}
function Gy(t, i) {
  const a = String(t);
  if (typeof i != "string")
    throw new TypeError("Expected character");
  let o = 0, s = a.indexOf(i);
  for (; s !== -1; )
    o++, s = a.indexOf(i, s + i.length);
  return o;
}
function qN(t) {
  if (typeof t != "string")
    throw new TypeError("Expected a string");
  return t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function $N(t, i, a) {
  const s = Au((a || {}).ignore || []), c = VN(i);
  let f = -1;
  for (; ++f < c.length; )
    ap(t, p);
  function p(g, x, b) {
    if (g.type === "text" && typeof b == "number")
      return m(g, x, b);
    if (s(g, b, x[x.length - 1])) return rp;
  }
  function m(g, x, b) {
    const w = x[x.length - 1], v = c[f][0], S = c[f][1];
    let j = 0, C = !1, O = [];
    v.lastIndex = 0;
    let I = v.exec(g.value);
    for (; I; ) {
      const Y = I.index, K = {
        index: I.index,
        input: I.input,
        stack: [...x, g]
      };
      let N = S(...I, K);
      if (typeof N == "string" && (N = N.length > 0 ? { type: "text", value: N } : void 0), N === !1)
        v.lastIndex = Y + 1;
      else {
        if (j !== Y && U({ type: "text", value: g.value.slice(j, Y) }), Array.isArray(N))
          for (const F of N) U(F);
        else N && U(N);
        j = Y + I[0].length, C = !0;
      }
      if (!v.global)
        break;
      I = v.exec(g.value);
    }
    return C ? (j < g.value.length && U({ type: "text", value: g.value.slice(j) }), w.children.splice(b, 1, ...O)) : O = [g], b + O.length;
    function U(Y) {
      const K = O[O.length - 1];
      K && K.type === "text" && Y.type === "text" ? K.value += Y.value : O.push(Y);
    }
  }
}
function VN(t) {
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
    i.push([YN(s[0]), GN(s[1])]);
  }
  return i;
}
function YN(t) {
  return typeof t == "string" ? new RegExp(qN(t), "g") : t;
}
function GN(t) {
  return typeof t == "function" ? t : function() {
    return t;
  };
}
const Rd = "phrasing", Ud = ["autolink", "link", "image", "label"];
function FN() {
  return {
    transforms: [e6],
    enter: {
      literalAutolink: QN,
      literalAutolinkEmail: Ld,
      literalAutolinkHttp: Ld,
      literalAutolinkWww: Ld
    },
    exit: {
      literalAutolink: WN,
      literalAutolinkEmail: JN,
      literalAutolinkHttp: PN,
      literalAutolinkWww: KN
    }
  };
}
function XN() {
  return {
    unsafe: [
      {
        character: "@",
        before: "[+\\-.\\w]",
        after: "[\\-.\\w]",
        inConstruct: Rd,
        notInConstruct: Ud
      },
      {
        character: ".",
        before: "[Ww]",
        after: "[\\-.\\w]",
        inConstruct: Rd,
        notInConstruct: Ud
      },
      {
        character: ":",
        before: "[ps]",
        after: "\\/",
        inConstruct: Rd,
        notInConstruct: Ud
      }
    ]
  };
}
function QN(t) {
  this.enter({ type: "link", title: null, url: "", children: [] }, t);
}
function Ld(t) {
  this.config.enter.autolinkProtocol.call(this, t);
}
function PN(t) {
  this.config.exit.autolinkProtocol.call(this, t);
}
function KN(t) {
  this.config.exit.data.call(this, t);
  const i = this.stack[this.stack.length - 1];
  i.type, i.url = "http://" + this.sliceSerialize(t);
}
function JN(t) {
  this.config.exit.autolinkEmail.call(this, t);
}
function WN(t) {
  this.exit(t);
}
function e6(t) {
  $N(
    t,
    [
      [/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi, t6],
      [new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)", "gu"), n6]
    ],
    { ignore: ["link", "linkReference"] }
  );
}
function t6(t, i, a, o, s) {
  let c = "";
  if (!X0(s) || (/^w/i.test(i) && (a = i + a, i = "", c = "http://"), !i6(a)))
    return !1;
  const f = r6(a + o);
  if (!f[0]) return !1;
  const p = {
    type: "link",
    title: null,
    url: c + i + f[0],
    children: [{ type: "text", value: i + f[0] }]
  };
  return f[1] ? [p, { type: "text", value: f[1] }] : p;
}
function n6(t, i, a, o) {
  return (
    // Not an expected previous character.
    !X0(o, !0) || // Label ends in not allowed character.
    /[-\d_]$/.test(a) ? !1 : {
      type: "link",
      title: null,
      url: "mailto:" + i + "@" + a,
      children: [{ type: "text", value: i + "@" + a }]
    }
  );
}
function i6(t) {
  const i = t.split(".");
  return !(i.length < 2 || i[i.length - 1] && (/_/.test(i[i.length - 1]) || !/[a-zA-Z\d]/.test(i[i.length - 1])) || i[i.length - 2] && (/_/.test(i[i.length - 2]) || !/[a-zA-Z\d]/.test(i[i.length - 2])));
}
function r6(t) {
  const i = /[!"&'),.:;<>?\]}]+$/.exec(t);
  if (!i)
    return [t, void 0];
  t = t.slice(0, i.index);
  let a = i[0], o = a.indexOf(")");
  const s = Gy(t, "(");
  let c = Gy(t, ")");
  for (; o !== -1 && s > c; )
    t += a.slice(0, o + 1), a = a.slice(o + 1), o = a.indexOf(")"), c++;
  return [t, a];
}
function X0(t, i) {
  const a = t.input.charCodeAt(t.index - 1);
  return (t.index === 0 || aa(a) || Cu(a)) && // If it’s an email, the previous character should not be a slash.
  (!i || a !== 47);
}
Q0.peek = p6;
function a6() {
  this.buffer();
}
function l6(t) {
  this.enter({ type: "footnoteReference", identifier: "", label: "" }, t);
}
function o6() {
  this.buffer();
}
function s6(t) {
  this.enter(
    { type: "footnoteDefinition", identifier: "", label: "", children: [] },
    t
  );
}
function u6(t) {
  const i = this.resume(), a = this.stack[this.stack.length - 1];
  a.type, a.identifier = ai(
    this.sliceSerialize(t)
  ).toLowerCase(), a.label = i;
}
function c6(t) {
  this.exit(t);
}
function f6(t) {
  const i = this.resume(), a = this.stack[this.stack.length - 1];
  a.type, a.identifier = ai(
    this.sliceSerialize(t)
  ).toLowerCase(), a.label = i;
}
function d6(t) {
  this.exit(t);
}
function p6() {
  return "[";
}
function Q0(t, i, a, o) {
  const s = a.createTracker(o);
  let c = s.move("[^");
  const f = a.enter("footnoteReference"), p = a.enter("reference");
  return c += s.move(
    a.safe(a.associationId(t), { after: "]", before: c })
  ), p(), f(), c += s.move("]"), c;
}
function h6() {
  return {
    enter: {
      gfmFootnoteCallString: a6,
      gfmFootnoteCall: l6,
      gfmFootnoteDefinitionLabelString: o6,
      gfmFootnoteDefinition: s6
    },
    exit: {
      gfmFootnoteCallString: u6,
      gfmFootnoteCall: c6,
      gfmFootnoteDefinitionLabelString: f6,
      gfmFootnoteDefinition: d6
    }
  };
}
function m6(t) {
  let i = !1;
  return t && t.firstLineBlank && (i = !0), {
    handlers: { footnoteDefinition: a, footnoteReference: Q0 },
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
        i ? P0 : g6
      )
    )), g(), m;
  }
}
function g6(t, i, a) {
  return i === 0 ? t : P0(t, i, a);
}
function P0(t, i, a) {
  return (a ? "" : "    ") + t;
}
const b6 = [
  "autolink",
  "destinationLiteral",
  "destinationRaw",
  "reference",
  "titleQuote",
  "titleApostrophe"
];
Vp.attention = k6;
Vp.peek = S6;
function x6() {
  return {
    canContainEols: ["delete"],
    enter: { strikethrough: v6 },
    exit: { strikethrough: w6 }
  };
}
function y6() {
  return {
    handlers: { delete: Vp },
    unsafe: [
      {
        character: "~",
        inConstruct: "phrasing",
        notInConstruct: b6
      }
    ]
  };
}
function v6(t) {
  this.enter({ type: "delete", children: [], position: void 0 }, t);
}
function w6(t) {
  this.exit(t);
}
function Vp(t, i, a, o) {
  const s = a.createTracker(o), c = a.stack.includes("strikethrough") ? "~" : "~~", f = a.enter("strikethrough");
  let p = s.move(c);
  return p += a.containerPhrasing(t, {
    ...s.current(),
    before: p,
    after: "~"
  }), p += s.move(c), f(), p;
}
function k6() {
  return { construct: "strikethrough", markers: ["~"], sizes: [2, 1] };
}
function S6() {
  return "~";
}
function z6(t) {
  return t.length;
}
function _6(t, i) {
  const a = i || {}, o = (a.align || []).concat(), s = a.stringLength || z6, c = [], f = [], p = [], m = [];
  let g = 0, x = -1;
  for (; ++x < t.length; ) {
    const j = [], C = [];
    let O = -1;
    for (t[x].length > g && (g = t[x].length); ++O < t[x].length; ) {
      const I = j6(t[x][O]);
      if (a.alignDelimiters !== !1) {
        const U = s(I);
        C[O] = U, (m[O] === void 0 || U > m[O]) && (m[O] = U);
      }
      j.push(I);
    }
    f[x] = j, p[x] = C;
  }
  let b = -1;
  if (typeof o == "object" && "length" in o)
    for (; ++b < g; )
      c[b] = Fy(o[b]);
  else {
    const j = Fy(o);
    for (; ++b < g; )
      c[b] = j;
  }
  b = -1;
  const w = [], v = [];
  for (; ++b < g; ) {
    const j = c[b];
    let C = "", O = "";
    j === 99 ? (C = ":", O = ":") : j === 108 ? C = ":" : j === 114 && (O = ":");
    let I = a.alignDelimiters === !1 ? 1 : Math.max(
      1,
      m[b] - C.length - O.length
    );
    const U = C + "-".repeat(I) + O;
    a.alignDelimiters !== !1 && (I = C.length + I + O.length, I > m[b] && (m[b] = I), v[b] = I), w[b] = U;
  }
  f.splice(1, 0, w), p.splice(1, 0, v), x = -1;
  const S = [];
  for (; ++x < f.length; ) {
    const j = f[x], C = p[x];
    b = -1;
    const O = [];
    for (; ++b < g; ) {
      const I = j[b] || "";
      let U = "", Y = "";
      if (a.alignDelimiters !== !1) {
        const K = m[b] - (C[b] || 0), N = c[b];
        N === 114 ? U = " ".repeat(K) : N === 99 ? K % 2 ? (U = " ".repeat(K / 2 + 0.5), Y = " ".repeat(K / 2 - 0.5)) : (U = " ".repeat(K / 2), Y = U) : Y = " ".repeat(K);
      }
      a.delimiterStart !== !1 && !b && O.push("|"), a.padding !== !1 && // Don’t add the opening space if we’re not aligning and the cell is
      // empty: there will be a closing space.
      !(a.alignDelimiters === !1 && I === "") && (a.delimiterStart !== !1 || b) && O.push(" "), a.alignDelimiters !== !1 && O.push(U), O.push(I), a.alignDelimiters !== !1 && O.push(Y), a.padding !== !1 && O.push(" "), (a.delimiterEnd !== !1 || b !== g - 1) && O.push("|");
    }
    S.push(
      a.delimiterEnd === !1 ? O.join("").replace(/ +$/, "") : O.join("")
    );
  }
  return S.join(`
`);
}
function j6(t) {
  return t == null ? "" : String(t);
}
function Fy(t) {
  const i = typeof t == "string" ? t.codePointAt(0) : 0;
  return i === 67 || i === 99 ? 99 : i === 76 || i === 108 ? 108 : i === 82 || i === 114 ? 114 : 0;
}
const E6 = (
  /** @type {(node?: unknown) => node is Exclude<PhrasingContent, Html>} */
  Au([
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
function C6(t, i, a, o) {
  const s = a.enter("blockquote"), c = a.createTracker(o);
  c.move("> "), c.shift(2);
  const f = a.indentLines(
    a.containerFlow(t, c.current()),
    T6
  );
  return s(), f;
}
function T6(t, i, a) {
  return ">" + (a ? "" : " ") + t;
}
function N6(t, i) {
  return Xy(t, i.inConstruct, !0) && !Xy(t, i.notInConstruct, !1);
}
function Xy(t, i, a) {
  if (typeof i == "string" && (i = [i]), !i || i.length === 0)
    return a;
  let o = -1;
  for (; ++o < i.length; )
    if (t.includes(i[o]))
      return !0;
  return !1;
}
function Qy(t, i, a, o) {
  let s = -1;
  for (; ++s < a.unsafe.length; ) {
    const c = a.unsafe[s];
    if (c.character === `
` && !c.before && !c.after && N6(a.stack, c))
      return /[\t ]/.test(o.before) ? "" : " ";
  }
  return `\\
`;
}
function A6(t, i) {
  const a = String(t);
  let o = a.indexOf(i), s = o, c = 0, f = 0;
  if (typeof i != "string")
    throw new TypeError("Expected substring");
  for (; o !== -1; )
    o === s ? ++c > f && (f = c) : c = 1, s = o + i.length, o = a.indexOf(i, s);
  return f;
}
function O6(t, i) {
  return !!(i.options.fences === !1 && t.value && // If there’s no info…
  !t.lang && // And there’s a non-whitespace character…
  /[^\n\r ]/.test(t.value) && // And the value doesn’t start or end in a blank…
  !/^[\t ]*(?:[\n\r]|$)|(?:^|[\n\r])[\t ]*$/.test(t.value));
}
function D6(t) {
  const i = t.options.fence || "`";
  if (i !== "`" && i !== "~")
    throw new Error(
      "Cannot serialize code with `" + i + "` for `options.fence`, expected `` ` `` or `~`"
    );
  return i;
}
function M6(t, i, a, o) {
  const s = D6(a), c = t.value || "";
  if (O6(t, a)) {
    const b = a.enter("codeIndented"), w = a.indentLines(c, R6);
    return b(), w;
  }
  const f = a.createTracker(o), p = s.repeat(Math.max(A6(c, s) + 1, 3)), m = a.enter("codeFenced"), g = s === "`" ? "GraveAccent" : "Tilde";
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
function R6(t, i, a) {
  return (a ? "" : "    ") + t;
}
function Yp(t) {
  const i = t.options.quote || '"';
  if (i !== '"' && i !== "'")
    throw new Error(
      "Cannot serialize title with `" + i + "` for `options.quote`, expected `\"`, or `'`"
    );
  return i;
}
function U6(t, i, a, o) {
  const s = Yp(a), c = s === '"' ? "Quote" : "Apostrophe", f = a.enter("definition");
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
function L6(t) {
  const i = t.options.emphasis || "*";
  if (i !== "*" && i !== "_")
    throw new Error(
      "Cannot serialize emphasis with `" + i + "` for `options.emphasis`, expected `*`, or `_`"
    );
  return i;
}
Gp.attention = B6;
Gp.peek = I6;
function Gp(t, i, a, o) {
  const s = a.enter("phrasing"), c = a.containerPhrasing({ type: "root", children: [t] }, o);
  return s(), c;
}
function B6(t, i) {
  return {
    construct: "emphasis",
    markers: L6(i) === "*" ? ["*", "_"] : ["_", "*"],
    sizes: [1]
  };
}
function I6(t, i, a) {
  return a.options.emphasis || "*";
}
function H6(t) {
  return "&#x" + t.toString(16).toUpperCase() + ";";
}
function Z6(t, i) {
  let a = !1;
  return qp(t, function(o) {
    if ("value" in o && /\r?\n|\r/.test(o.value) || o.type === "break")
      return a = !0, cu;
  }), !!((!t.depth || t.depth < 3) && Rp(t) && (i.options.setext || a));
}
function q6(t, i, a, o) {
  const s = Math.max(Math.min(6, t.depth || 1), 1), c = a.createTracker(o);
  if (Z6(t, a)) {
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
  return (x === 9 || x === 32) && (g = H6(x) + g.slice(1)), g = g ? f + " " + g : f, a.options.closeAtx && (g += " " + f), m(), p(), g;
}
K0.peek = $6;
function K0(t) {
  return t.value || "";
}
function $6() {
  return "<";
}
J0.peek = V6;
function J0(t, i, a, o) {
  const s = Yp(a), c = s === '"' ? "Quote" : "Apostrophe", f = a.enter("image");
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
function V6() {
  return "!";
}
W0.peek = Y6;
function W0(t, i, a, o) {
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
function Y6() {
  return "!";
}
ew.peek = G6;
function ew(t, i, a) {
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
function G6() {
  return "`";
}
function tw(t, i) {
  const a = Rp(t);
  return !!(!i.options.resourceLink && // If there’s a url…
  t.url && // And there’s no title…
  !t.title && // And the content of `node` is a single text node…
  t.children && t.children.length === 1 && t.children[0].type === "text" && // And if the url is the same as the content…
  (a === t.url || "mailto:" + a === t.url) && // And that starts w/ a protocol…
  /^[a-z][+\-.a-z]+:/i.test(t.url) && // And that doesn’t contain ASCII control codes (character escapes and
  // references don’t work), space, or angle brackets…
  !/[\0- <>\u007F]/.test(t.url));
}
nw.peek = F6;
function nw(t, i, a, o) {
  const s = Yp(a), c = s === '"' ? "Quote" : "Apostrophe", f = a.createTracker(o);
  if (tw(t, a)) {
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
function F6(t, i, a) {
  return tw(t, a) ? "<" : "[";
}
iw.peek = X6;
function iw(t, i, a, o) {
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
function X6() {
  return "[";
}
function Fp(t) {
  const i = t.options.bullet || "*";
  if (i !== "*" && i !== "+" && i !== "-")
    throw new Error(
      "Cannot serialize items with `" + i + "` for `options.bullet`, expected `*`, `+`, or `-`"
    );
  return i;
}
function Q6(t) {
  const i = Fp(t), a = t.options.bulletOther;
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
function P6(t) {
  const i = t.options.bulletOrdered || ".";
  if (i !== "." && i !== ")")
    throw new Error(
      "Cannot serialize items with `" + i + "` for `options.bulletOrdered`, expected `.` or `)`"
    );
  return i;
}
function rw(t) {
  const i = t.options.rule || "*";
  if (i !== "*" && i !== "-" && i !== "_")
    throw new Error(
      "Cannot serialize rules with `" + i + "` for `options.rule`, expected `*`, `-`, or `_`"
    );
  return i;
}
function K6(t, i, a, o) {
  const s = a.enter("list"), c = a.bulletCurrent;
  let f = t.ordered ? P6(a) : Fp(a);
  const p = t.ordered ? f === "." ? ")" : "." : Q6(a);
  let m = i && a.bulletLastUsed ? f === a.bulletLastUsed : !1;
  if (!t.ordered) {
    const x = t.children ? t.children[0] : void 0;
    if (
      // Bullet could be used as a thematic break marker:
      (f === "*" || f === "-") && // Empty first list item:
      x && (!x.children || !x.children[0]) && // Directly in two other list items:
      a.stack[a.stack.length - 1] === "list" && a.stack[a.stack.length - 2] === "listItem" && a.stack[a.stack.length - 3] === "list" && a.stack[a.stack.length - 4] === "listItem" && // That are each the first child.
      a.indexStack[a.indexStack.length - 1] === 0 && a.indexStack[a.indexStack.length - 2] === 0 && a.indexStack[a.indexStack.length - 3] === 0 && (m = !0), rw(a) === f && x
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
function J6(t) {
  const i = t.options.listItemIndent || "one";
  if (i !== "tab" && i !== "one" && i !== "mixed")
    throw new Error(
      "Cannot serialize items with `" + i + "` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`"
    );
  return i;
}
function W6(t, i, a, o) {
  const s = J6(a);
  let c = a.bulletCurrent || Fp(a);
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
function eA(t, i, a, o) {
  const s = a.enter("paragraph"), c = a.enter("phrasing"), f = a.containerPhrasing(t, o);
  return c(), s(), f;
}
function tA(t, i, a, o) {
  if (!t.children.some(function(p) {
    return E6(p);
  })) return a.containerFlow(t, o);
  const c = a.enter("phrasing"), f = a.containerPhrasing(t, o);
  return c(), f;
}
function nA(t) {
  const i = t.options.strong || "*";
  if (i !== "*" && i !== "_")
    throw new Error(
      "Cannot serialize strong with `" + i + "` for `options.strong`, expected `*`, or `_`"
    );
  return i;
}
Xp.attention = iA;
Xp.peek = rA;
function Xp(t, i, a, o) {
  const s = a.enter("phrasing"), c = a.containerPhrasing({ type: "root", children: [t] }, o);
  return s(), c;
}
function iA(t, i) {
  return {
    construct: "strong",
    markers: nA(i) === "*" ? ["*", "_"] : ["_", "*"],
    sizes: [2]
  };
}
function rA(t, i, a) {
  return a.options.strong || "*";
}
function aA(t, i, a, o) {
  const s = i ? i.children : [], c = s.indexOf(t);
  return a.safe(t.value, {
    ...o,
    afterNode: s[c + 1],
    beforeNode: s[c - 1]
  });
}
function lA(t) {
  const i = t.options.ruleRepetition || 3;
  if (i < 3)
    throw new Error(
      "Cannot serialize rules with repetition `" + i + "` for `options.ruleRepetition`, expected `3` or more"
    );
  return i;
}
function oA(t, i, a) {
  const o = (rw(a) + (a.options.ruleSpaces ? " " : "")).repeat(lA(a));
  return a.options.ruleSpaces ? o.slice(0, -1) : o;
}
const aw = {
  blockquote: C6,
  break: Qy,
  code: M6,
  definition: U6,
  emphasis: Gp,
  hardBreak: Qy,
  heading: q6,
  html: K0,
  image: J0,
  imageReference: W0,
  inlineCode: ew,
  link: nw,
  linkReference: iw,
  list: K6,
  listItem: W6,
  paragraph: eA,
  root: tA,
  strong: Xp,
  text: aA,
  thematicBreak: oA
};
function sA() {
  return {
    enter: {
      table: uA,
      tableData: Py,
      tableHeader: Py,
      tableRow: fA
    },
    exit: {
      codeText: dA,
      table: cA,
      tableData: Bd,
      tableHeader: Bd,
      tableRow: Bd
    }
  };
}
function uA(t) {
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
function cA(t) {
  this.exit(t), this.data.inTable = void 0;
}
function fA(t) {
  this.enter({ type: "tableRow", children: [] }, t);
}
function Bd(t) {
  this.exit(t);
}
function Py(t) {
  this.enter({ type: "tableCell", children: [] }, t);
}
function dA(t) {
  let i = this.resume();
  this.data.inTable && (i = i.replace(/\\([\\|])/g, pA));
  const a = this.stack[this.stack.length - 1];
  a.type, a.value = i, this.exit(t);
}
function pA(t, i) {
  return i === "|" ? i : t;
}
function hA(t) {
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
  function f(v, S, j, C) {
    return g(x(v, j, C), v.align);
  }
  function p(v, S, j, C) {
    const O = b(v, j, C), I = g([O]);
    return I.slice(0, I.indexOf(`
`));
  }
  function m(v, S, j, C) {
    const O = j.enter("tableCell"), I = j.enter("phrasing"), U = j.containerPhrasing(v, {
      ...C,
      before: c,
      after: c
    });
    return I(), O(), U;
  }
  function g(v, S) {
    return _6(v, {
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
    const C = v.children;
    let O = -1;
    const I = [], U = S.enter("table");
    for (; ++O < C.length; )
      I[O] = b(C[O], S, j);
    return U(), I;
  }
  function b(v, S, j) {
    const C = v.children;
    let O = -1;
    const I = [], U = S.enter("tableRow");
    for (; ++O < C.length; )
      I[O] = m(C[O], v, S, j);
    return U(), I;
  }
  function w(v, S, j) {
    let C = aw.inlineCode(v, S, j);
    return j.stack.includes("tableCell") && (C = C.replace(/\|/g, "\\$&")), C;
  }
}
function mA() {
  return {
    exit: {
      taskListCheckValueChecked: Ky,
      taskListCheckValueUnchecked: Ky,
      paragraph: bA
    }
  };
}
function gA() {
  return {
    unsafe: [{ atBreak: !0, character: "-", after: "[:|-]" }],
    handlers: { listItem: xA }
  };
}
function Ky(t) {
  const i = this.stack[this.stack.length - 2];
  i.type, i.checked = t.type === "taskListCheckValueChecked";
}
function bA(t) {
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
function xA(t, i, a, o) {
  const s = t.children[0], c = typeof t.checked == "boolean" && s && s.type === "paragraph", f = "[" + (t.checked ? "x" : " ") + "] ", p = a.createTracker(o);
  c && p.move(f);
  let m = aw.listItem(t, i, a, {
    ...o,
    ...p.current()
  });
  return c && (m = m.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/, g)), m;
  function g(x) {
    return x + f;
  }
}
function yA() {
  return [
    FN(),
    h6(),
    x6(),
    sA(),
    mA()
  ];
}
function vA(t) {
  return {
    extensions: [
      XN(),
      m6(t),
      y6(),
      hA(t),
      gA()
    ]
  };
}
const wA = {
  tokenize: EA,
  partial: !0
}, lw = {
  tokenize: CA,
  partial: !0
}, ow = {
  tokenize: TA,
  partial: !0
}, sw = {
  tokenize: NA,
  partial: !0
}, kA = {
  tokenize: AA,
  partial: !0
}, uw = {
  name: "wwwAutolink",
  tokenize: _A,
  previous: fw
}, cw = {
  name: "protocolAutolink",
  tokenize: jA,
  previous: dw
}, $i = {
  name: "emailAutolink",
  tokenize: zA,
  previous: pw
}, wi = {};
function SA() {
  return {
    text: wi
  };
}
let Jr = 48;
for (; Jr < 123; )
  wi[Jr] = $i, Jr++, Jr === 58 ? Jr = 65 : Jr === 91 && (Jr = 97);
wi[43] = $i;
wi[45] = $i;
wi[46] = $i;
wi[95] = $i;
wi[72] = [$i, cw];
wi[104] = [$i, cw];
wi[87] = [$i, uw];
wi[119] = [$i, uw];
function zA(t, i, a) {
  const o = this;
  let s, c;
  return f;
  function f(b) {
    return !cp(b) || !pw.call(o, o.previous) || Qp(o.events) ? a(b) : (t.enter("literalAutolink"), t.enter("literalAutolinkEmail"), p(b));
  }
  function p(b) {
    return cp(b) ? (t.consume(b), p) : b === 64 ? (t.consume(b), m) : a(b);
  }
  function m(b) {
    return b === 46 ? t.check(kA, x, g)(b) : b === 45 || b === 95 || en(b) ? (c = !0, t.consume(b), m) : x(b);
  }
  function g(b) {
    return t.consume(b), s = !0, m;
  }
  function x(b) {
    return c && s && sn(o.previous) ? (t.exit("literalAutolinkEmail"), t.exit("literalAutolink"), i(b)) : a(b);
  }
}
function _A(t, i, a) {
  const o = this;
  return s;
  function s(f) {
    return f !== 87 && f !== 119 || !fw.call(o, o.previous) || Qp(o.events) ? a(f) : (t.enter("literalAutolink"), t.enter("literalAutolinkWww"), t.check(wA, t.attempt(lw, t.attempt(ow, c), a), a)(f));
  }
  function c(f) {
    return t.exit("literalAutolinkWww"), t.exit("literalAutolink"), i(f);
  }
}
function jA(t, i, a) {
  const o = this;
  let s = "", c = !1;
  return f;
  function f(b) {
    return (b === 72 || b === 104) && dw.call(o, o.previous) && !Qp(o.events) ? (t.enter("literalAutolink"), t.enter("literalAutolinkHttp"), s += String.fromCodePoint(b), t.consume(b), p) : a(b);
  }
  function p(b) {
    if (sn(b) && s.length < 5)
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
    return b === null || yu(b) || at(b) || aa(b) || Cu(b) ? a(b) : t.attempt(lw, t.attempt(ow, x), a)(b);
  }
  function x(b) {
    return t.exit("literalAutolinkHttp"), t.exit("literalAutolink"), i(b);
  }
}
function EA(t, i, a) {
  let o = 0;
  return s;
  function s(f) {
    return (f === 87 || f === 119) && o < 3 ? (o++, t.consume(f), s) : f === 46 && o === 3 ? (t.consume(f), c) : a(f);
  }
  function c(f) {
    return f === null ? a(f) : i(f);
  }
}
function CA(t, i, a) {
  let o, s, c;
  return f;
  function f(g) {
    return g === 46 || g === 95 ? t.check(sw, m, p)(g) : g === null || at(g) || aa(g) || g !== 45 && Cu(g) ? m(g) : (c = !0, t.consume(g), f);
  }
  function p(g) {
    return g === 95 ? o = !0 : (s = o, o = void 0), t.consume(g), f;
  }
  function m(g) {
    return s || o || !c ? a(g) : i(g);
  }
}
function TA(t, i) {
  let a = 0, o = 0;
  return s;
  function s(f) {
    return f === 40 ? (a++, t.consume(f), s) : f === 41 && o < a ? c(f) : f === 33 || f === 34 || f === 38 || f === 39 || f === 41 || f === 42 || f === 44 || f === 46 || f === 58 || f === 59 || f === 60 || f === 63 || f === 93 || f === 95 || f === 126 ? t.check(sw, i, c)(f) : f === null || at(f) || aa(f) ? i(f) : (t.consume(f), s);
  }
  function c(f) {
    return f === 41 && o++, t.consume(f), s;
  }
}
function NA(t, i, a) {
  return o;
  function o(p) {
    return p === 33 || p === 34 || p === 39 || p === 41 || p === 42 || p === 44 || p === 46 || p === 58 || p === 59 || p === 63 || p === 95 || p === 126 ? (t.consume(p), o) : p === 38 ? (t.consume(p), c) : p === 93 ? (t.consume(p), s) : (
      // `<` is an end.
      p === 60 || // So is whitespace.
      p === null || at(p) || aa(p) ? i(p) : a(p)
    );
  }
  function s(p) {
    return p === null || p === 40 || p === 91 || at(p) || aa(p) ? i(p) : o(p);
  }
  function c(p) {
    return sn(p) ? f(p) : a(p);
  }
  function f(p) {
    return p === 59 ? (t.consume(p), o) : sn(p) ? (t.consume(p), f) : a(p);
  }
}
function AA(t, i, a) {
  return o;
  function o(c) {
    return t.consume(c), s;
  }
  function s(c) {
    return en(c) ? a(c) : i(c);
  }
}
function fw(t) {
  return t === null || t === 40 || t === 42 || t === 95 || t === 91 || t === 93 || t === 126 || at(t);
}
function dw(t) {
  return !sn(t);
}
function pw(t) {
  return !(t === 47 || cp(t));
}
function cp(t) {
  return t === 43 || t === 45 || t === 46 || t === 95 || en(t);
}
function Qp(t) {
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
const OA = {
  tokenize: HA,
  partial: !0
};
function DA() {
  return {
    document: {
      91: {
        name: "gfmFootnoteDefinition",
        tokenize: LA,
        continuation: {
          tokenize: BA
        },
        exit: IA
      }
    },
    text: {
      91: {
        name: "gfmFootnoteCall",
        tokenize: UA
      },
      93: {
        name: "gfmPotentialFootnoteCall",
        add: "after",
        tokenize: MA,
        resolveTo: RA
      }
    }
  };
}
function MA(t, i, a) {
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
function RA(t, i) {
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
function UA(t, i, a) {
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
      b === null || b === 91 || at(b)
    )
      return a(b);
    if (b === 93) {
      t.exit("chunkString");
      const w = t.exit("gfmFootnoteCallString");
      return s.includes(ai(o.sliceSerialize(w))) ? (t.enter("gfmFootnoteCallLabelMarker"), t.consume(b), t.exit("gfmFootnoteCallLabelMarker"), t.exit("gfmFootnoteCall"), i) : a(b);
    }
    return at(b) || (f = !0), c++, t.consume(b), b === 92 ? x : g;
  }
  function x(b) {
    return b === 91 || b === 92 || b === 93 ? (t.consume(b), c++, g) : g(b);
  }
}
function LA(t, i, a) {
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
      S === null || S === 91 || at(S)
    )
      return a(S);
    if (S === 93) {
      t.exit("chunkString");
      const j = t.exit("gfmFootnoteDefinitionLabelString");
      return c = ai(o.sliceSerialize(j)), t.enter("gfmFootnoteDefinitionLabelMarker"), t.consume(S), t.exit("gfmFootnoteDefinitionLabelMarker"), t.exit("gfmFootnoteDefinitionLabel"), w;
    }
    return at(S) || (p = !0), f++, t.consume(S), S === 92 ? b : x;
  }
  function b(S) {
    return S === 91 || S === 92 || S === 93 ? (t.consume(S), f++, x) : x(S);
  }
  function w(S) {
    return S === 58 ? (t.enter("definitionMarker"), t.consume(S), t.exit("definitionMarker"), s.includes(c) || s.push(c), Ge(t, v, "gfmFootnoteDefinitionWhitespace")) : a(S);
  }
  function v(S) {
    return i(S);
  }
}
function BA(t, i, a) {
  return t.check(_o, i, t.attempt(OA, i, a));
}
function IA(t) {
  t.exit("gfmFootnoteDefinition");
}
function HA(t, i, a) {
  const o = this;
  return Ge(t, s, "gfmFootnoteDefinitionIndent", 5);
  function s(c) {
    const f = o.events[o.events.length - 1];
    return f && f[1].type === "gfmFootnoteDefinitionIndent" && f[2].sliceSerialize(f[1], !0).length === 4 ? i(c) : a(c);
  }
}
function ZA(t) {
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
            v && ri(w, w.length, 0, Tu(v, f.slice(g + 1, m), p)), ri(w, w.length, 0, [["exit", b, p], ["enter", f[m][1], p], ["exit", f[m][1], p], ["exit", x, p]]), ri(f, g - 1, m - g + 3, w), m = g + w.length - 2;
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
      const j = wu(g);
      if (S === 126)
        return b > 1 ? m(S) : (f.consume(S), b++, v);
      if (b < 2 && !a) return m(S);
      const C = f.exit("strikethroughSequenceTemporary"), O = wu(S);
      return C._open = !O || O === 2 && !!j, C._close = !j || j === 2 && !!O, p(S);
    }
  }
}
class qA {
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
    $A(this, i, a, o);
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
function $A(t, i, a, o) {
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
function VA(t, i) {
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
function YA() {
  return {
    flow: {
      null: {
        name: "table",
        tokenize: GA,
        resolveAll: FA
      }
    }
  };
}
function GA(t, i, a) {
  const o = this;
  let s = 0, c = 0, f;
  return p;
  function p(Z) {
    let ee = o.events.length - 1;
    for (; ee > -1; ) {
      const {
        type: ce
      } = o.events[ee][1];
      if (ce === "lineEnding" || // Note: markdown-rs uses `whitespace` instead of `linePrefix`
      ce === "linePrefix")
        ee--;
      else
        break;
    }
    const se = ee > -1 ? o.events[ee][1].type : null, Ne = se === "tableHead" || se === "tableRow" ? N : m;
    return Ne === N && o.parser.lazy[o.now().line] ? a(Z) : Ne(Z);
  }
  function m(Z) {
    return t.enter("tableHead"), t.enter("tableRow"), g(Z);
  }
  function g(Z) {
    return Z === 124 || (f = !0, c += 1), x(Z);
  }
  function x(Z) {
    return Z === null ? a(Z) : Ee(Z) ? c > 1 ? (c = 0, o.interrupt = !0, t.exit("tableRow"), t.enter("lineEnding"), t.consume(Z), t.exit("lineEnding"), v) : a(Z) : Be(Z) ? Ge(t, x, "whitespace")(Z) : (c += 1, f && (f = !1, s += 1), Z === 124 ? (t.enter("tableCellDivider"), t.consume(Z), t.exit("tableCellDivider"), f = !0, x) : (t.enter("data"), b(Z)));
  }
  function b(Z) {
    return Z === null || Z === 124 || at(Z) ? (t.exit("data"), x(Z)) : (t.consume(Z), Z === 92 ? w : b);
  }
  function w(Z) {
    return Z === 92 || Z === 124 ? (t.consume(Z), b) : b(Z);
  }
  function v(Z) {
    return o.interrupt = !1, o.parser.lazy[o.now().line] ? a(Z) : (t.enter("tableDelimiterRow"), f = !1, Be(Z) ? Ge(t, S, "linePrefix", o.parser.constructs.disable.null.includes("codeIndented") ? void 0 : 4)(Z) : S(Z));
  }
  function S(Z) {
    return Z === 45 || Z === 58 ? C(Z) : Z === 124 ? (f = !0, t.enter("tableCellDivider"), t.consume(Z), t.exit("tableCellDivider"), j) : K(Z);
  }
  function j(Z) {
    return Be(Z) ? Ge(t, C, "whitespace")(Z) : C(Z);
  }
  function C(Z) {
    return Z === 58 ? (c += 1, f = !0, t.enter("tableDelimiterMarker"), t.consume(Z), t.exit("tableDelimiterMarker"), O) : Z === 45 ? (c += 1, O(Z)) : Z === null || Ee(Z) ? Y(Z) : K(Z);
  }
  function O(Z) {
    return Z === 45 ? (t.enter("tableDelimiterFiller"), I(Z)) : K(Z);
  }
  function I(Z) {
    return Z === 45 ? (t.consume(Z), I) : Z === 58 ? (f = !0, t.exit("tableDelimiterFiller"), t.enter("tableDelimiterMarker"), t.consume(Z), t.exit("tableDelimiterMarker"), U) : (t.exit("tableDelimiterFiller"), U(Z));
  }
  function U(Z) {
    return Be(Z) ? Ge(t, Y, "whitespace")(Z) : Y(Z);
  }
  function Y(Z) {
    return Z === 124 ? S(Z) : Z === null || Ee(Z) ? !f || s !== c ? K(Z) : (t.exit("tableDelimiterRow"), t.exit("tableHead"), i(Z)) : K(Z);
  }
  function K(Z) {
    return a(Z);
  }
  function N(Z) {
    return t.enter("tableRow"), F(Z);
  }
  function F(Z) {
    return Z === 124 ? (t.enter("tableCellDivider"), t.consume(Z), t.exit("tableCellDivider"), F) : Z === null || Ee(Z) ? (t.exit("tableRow"), i(Z)) : Be(Z) ? Ge(t, F, "whitespace")(Z) : (t.enter("data"), le(Z));
  }
  function le(Z) {
    return Z === null || Z === 124 || at(Z) ? (t.exit("data"), F(Z)) : (t.consume(Z), Z === 92 ? ye : le);
  }
  function ye(Z) {
    return Z === 92 || Z === 124 ? (t.consume(Z), le) : le(Z);
  }
}
function FA(t, i) {
  let a = -1, o = !0, s = 0, c = [0, 0, 0, 0], f = [0, 0, 0, 0], p = !1, m = 0, g, x, b;
  const w = new qA();
  for (; ++a < t.length; ) {
    const v = t[a], S = v[1];
    v[0] === "enter" ? S.type === "tableHead" ? (p = !1, m !== 0 && (Jy(w, i, m, g, x), x = void 0, m = 0), g = {
      type: "table",
      start: Object.assign({}, S.start),
      // Note: correct end is set later.
      end: Object.assign({}, S.end)
    }, w.add(a, 0, [["enter", g, i]])) : S.type === "tableRow" || S.type === "tableDelimiterRow" ? (o = !0, b = void 0, c = [0, 0, 0, 0], f = [0, a + 1, 0, 0], p && (p = !1, x = {
      type: "tableBody",
      start: Object.assign({}, S.start),
      // Note: correct end is set later.
      end: Object.assign({}, S.end)
    }, w.add(a, 0, [["enter", x, i]])), s = S.type === "tableDelimiterRow" ? 2 : x ? 3 : 1) : s && (S.type === "data" || S.type === "tableDelimiterMarker" || S.type === "tableDelimiterFiller") ? (o = !1, f[2] === 0 && (c[1] !== 0 && (f[0] = f[1], b = ru(w, i, c, s, void 0, b), c = [0, 0, 0, 0]), f[2] = a)) : S.type === "tableCellDivider" && (o ? o = !1 : (c[1] !== 0 && (f[0] = f[1], b = ru(w, i, c, s, void 0, b)), c = f, f = [c[1], a, 0, 0])) : S.type === "tableHead" ? (p = !0, m = a) : S.type === "tableRow" || S.type === "tableDelimiterRow" ? (m = a, c[1] !== 0 ? (f[0] = f[1], b = ru(w, i, c, s, a, b)) : f[1] !== 0 && (b = ru(w, i, f, s, a, b)), s = 0) : s && (S.type === "data" || S.type === "tableDelimiterMarker" || S.type === "tableDelimiterFiller") && (f[3] = a);
  }
  for (m !== 0 && Jy(w, i, m, g, x), w.consume(i.events), a = -1; ++a < i.events.length; ) {
    const v = i.events[a];
    v[0] === "enter" && v[1].type === "table" && (v[1]._align = VA(i.events, a));
  }
  return t;
}
function ru(t, i, a, o, s, c) {
  const f = o === 1 ? "tableHeader" : o === 2 ? "tableDelimiter" : "tableData", p = "tableContent";
  a[0] !== 0 && (c.end = Object.assign({}, el(i.events, a[0])), t.add(a[0], 0, [["exit", c, i]]));
  const m = el(i.events, a[1]);
  if (c = {
    type: f,
    start: Object.assign({}, m),
    // Note: correct end is set later.
    end: Object.assign({}, m)
  }, t.add(a[1], 0, [["enter", c, i]]), a[2] !== 0) {
    const g = el(i.events, a[2]), x = el(i.events, a[3]), b = {
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
  return s !== void 0 && (c.end = Object.assign({}, el(i.events, s)), t.add(s, 0, [["exit", c, i]]), c = void 0), c;
}
function Jy(t, i, a, o, s) {
  const c = [], f = el(i.events, a);
  s && (s.end = Object.assign({}, f), c.push(["exit", s, i])), o.end = Object.assign({}, f), c.push(["exit", o, i]), t.add(a + 1, 0, c);
}
function el(t, i) {
  const a = t[i], o = a[0] === "enter" ? "start" : "end";
  return a[1][o];
}
const XA = {
  name: "tasklistCheck",
  tokenize: PA
};
function QA() {
  return {
    text: {
      91: XA
    }
  };
}
function PA(t, i, a) {
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
    return at(m) ? (t.enter("taskListCheckValueUnchecked"), t.consume(m), t.exit("taskListCheckValueUnchecked"), f) : m === 88 || m === 120 ? (t.enter("taskListCheckValueChecked"), t.consume(m), t.exit("taskListCheckValueChecked"), f) : a(m);
  }
  function f(m) {
    return m === 93 ? (t.enter("taskListCheckMarker"), t.consume(m), t.exit("taskListCheckMarker"), t.exit("taskListCheck"), p) : a(m);
  }
  function p(m) {
    return Ee(m) ? i(m) : Be(m) ? t.check({
      tokenize: KA
    }, i, a)(m) : a(m);
  }
}
function KA(t, i, a) {
  return Ge(t, o, "whitespace");
  function o(s) {
    return s === null ? a(s) : i(s);
  }
}
function JA(t) {
  return j0([
    SA(),
    DA(),
    ZA(t),
    YA(),
    QA()
  ]);
}
const WA = {};
function eO(t) {
  const i = (
    /** @type {Processor<Root>} */
    this
  ), a = t || WA, o = i.data(), s = o.micromarkExtensions || (o.micromarkExtensions = []), c = o.fromMarkdownExtensions || (o.fromMarkdownExtensions = []), f = o.toMarkdownExtensions || (o.toMarkdownExtensions = []);
  s.push(JA(a)), c.push(yA()), f.push(vA(a));
}
function fp(t) {
  return typeof t == "string" || typeof t == "number" ? String(t) : Array.isArray(t) ? t.map(fp).join("") : Q.isValidElement(t) ? fp(t.props.children) : "";
}
function dp({ text: t, label: i }) {
  const [a, o] = Q.useState(!1), [s, c] = Q.useState(!1);
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
        a ? /* @__PURE__ */ h.jsx(Nn, { size: 13 }) : /* @__PURE__ */ h.jsx(NS, { size: 13 }),
        i && /* @__PURE__ */ h.jsx("span", { children: a ? "Copied" : i }),
        s && "Select to copy"
      ]
    }
  );
}
function hw({ text: t, onError: i }) {
  return /* @__PURE__ */ h.jsx("div", { className: "markdown", children: /* @__PURE__ */ h.jsx(
    LN,
    {
      remarkPlugins: [eO],
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
              /* @__PURE__ */ h.jsx(Hd, { size: 10, className: "inline-link-icon" })
            ]
          }
        ),
        img: ({ alt: a }) => /* @__PURE__ */ h.jsxs("span", { className: "remote-image", children: [
          "[Image: ",
          a || "External image",
          "]"
        ] }),
        pre: ({ children: a }) => {
          const o = Array.isArray(a) ? a[0] : a, c = (Q.isValidElement(o) && o.props.className || "").replace(/^language-/, "").trim() || "code", f = fp(a).replace(/\n$/, "");
          return /* @__PURE__ */ h.jsxs("div", { className: "code-block", children: [
            /* @__PURE__ */ h.jsxs("div", { className: "code-block-header", children: [
              /* @__PURE__ */ h.jsx("span", { className: "code-block-lang", children: c }),
              /* @__PURE__ */ h.jsx(dp, { text: f, label: "Copy" })
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
function mw({
  item: t,
  sessionId: i,
  onError: a
}) {
  const [o, s] = Q.useState(!1), [c, f] = Q.useState(), [p, m] = Q.useState(!1), g = t.status === "inProgress", x = t.tool || t.label || t.role || t.kind.replace(/([A-Z])/g, " $1").toLowerCase(), b = t.statusLine || t.objective || t.commandText || t.fallbackText;
  return /* @__PURE__ */ h.jsxs("div", { className: `tool-item ${g ? "tool-running" : ""} ${o ? "open" : ""}`, children: [
    /* @__PURE__ */ h.jsxs(
      "button",
      {
        type: "button",
        className: "tool-summary-button",
        "aria-expanded": o,
        onClick: () => s((w) => !w),
        children: [
          /* @__PURE__ */ h.jsx("span", { className: "tool-state", children: g ? /* @__PURE__ */ h.jsx(nl, { size: 14, className: "spin" }) : t.status === "completed" ? /* @__PURE__ */ h.jsx(Nn, { size: 14 }) : /* @__PURE__ */ h.jsx(ia, { size: 14 }) }),
          t.kind === "subagent" ? /* @__PURE__ */ h.jsx(GS, { size: 14 }) : t.kind === "toolCall" ? /* @__PURE__ */ h.jsx(du, { size: 14 }) : /* @__PURE__ */ h.jsx(tl, { size: 14 }),
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
          /* @__PURE__ */ h.jsx(yi, { className: `details-chevron ${o ? "open" : ""}`, size: 13 })
        ]
      }
    ),
    /* @__PURE__ */ h.jsx("div", { className: `sidebar-collapse ${o ? "open" : ""}`, children: /* @__PURE__ */ h.jsx("div", { className: "sidebar-collapse-inner", children: /* @__PURE__ */ h.jsxs("div", { className: "tool-body", children: [
      t.objective && /* @__PURE__ */ h.jsx("p", { children: t.objective }),
      t.args && /* @__PURE__ */ h.jsxs("div", { className: "tool-arguments", children: [
        /* @__PURE__ */ h.jsx("span", { className: "eyebrow", children: "INPUT" }),
        /* @__PURE__ */ h.jsx("pre", { children: iO(t.args) })
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
function tO({
  items: t,
  sessionId: i,
  onError: a
}) {
  const [o, s] = Q.useState(!1), c = t.reduce((m, g) => m + (g.patchSummary?.added || 0), 0), f = t.reduce((m, g) => m + (g.patchSummary?.removed || 0), 0), p = Array.from(
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
          /* @__PURE__ */ h.jsx("span", { className: "tool-state", children: /* @__PURE__ */ h.jsx(Nn, { size: 14 }) }),
          /* @__PURE__ */ h.jsx(Lv, { size: 14 }),
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
          /* @__PURE__ */ h.jsx(yi, { className: `details-chevron ${o ? "open" : ""}`, size: 13 })
        ]
      }
    ),
    /* @__PURE__ */ h.jsx("div", { className: `sidebar-collapse ${o ? "open" : ""}`, children: /* @__PURE__ */ h.jsx("div", { className: "sidebar-collapse-inner", children: /* @__PURE__ */ h.jsx("div", { className: "tool-group-list", children: t.map((m) => /* @__PURE__ */ h.jsx(mw, { item: m, sessionId: i, onError: a }, m.itemId)) }) }) })
  ] });
}
function nO({
  item: t,
  onError: i
}) {
  const [a, o] = Q.useState(!1);
  return /* @__PURE__ */ h.jsxs("div", { className: `reasoning-item ${a ? "open" : ""}`, children: [
    /* @__PURE__ */ h.jsxs(
      "button",
      {
        type: "button",
        className: "reasoning-summary-button",
        "aria-expanded": a,
        onClick: () => o((s) => !s),
        children: [
          t.status === "inProgress" ? /* @__PURE__ */ h.jsx(nl, { size: 13, className: "spin" }) : /* @__PURE__ */ h.jsx(Nn, { size: 13 }),
          /* @__PURE__ */ h.jsx("span", { children: t.status === "inProgress" ? "Thinking" : "Reasoning summary" }),
          /* @__PURE__ */ h.jsx(yi, { size: 12, className: `details-chevron ${a ? "open" : ""}` })
        ]
      }
    ),
    /* @__PURE__ */ h.jsx("div", { className: `sidebar-collapse ${a ? "open" : ""}`, children: /* @__PURE__ */ h.jsx("div", { className: "sidebar-collapse-inner", children: /* @__PURE__ */ h.jsx(
      hw,
      {
        text: t.summary?.join(`

`) || t.text || "No reasoning text was provided by the model.",
        onError: i
      }
    ) }) })
  ] });
}
function iO(t) {
  try {
    return JSON.stringify(JSON.parse(t), null, 2);
  } catch {
    return t;
  }
}
function rO({
  approval: t,
  onError: i
}) {
  const [a, o] = Q.useState(!1);
  return /* @__PURE__ */ h.jsxs("section", { className: "approval-card", "aria-label": "Approval required", children: [
    /* @__PURE__ */ h.jsxs("div", { className: "request-heading", children: [
      /* @__PURE__ */ h.jsx("span", { className: "request-icon", children: /* @__PURE__ */ h.jsx(qS, { size: 18 }) }),
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
function aO({
  request: t,
  onError: i
}) {
  const [a, o] = Q.useState({}), [s, c] = Q.useState(!1), f = t.questions.every((p) => {
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
          /* @__PURE__ */ h.jsx("span", { className: "request-icon", children: /* @__PURE__ */ h.jsx(TS, { size: 18 }) }),
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
function lO({
  view: t,
  onError: i
}) {
  const a = Q.useRef(null), o = Q.useRef(!0), [s, c] = Q.useState(!1);
  Q.useEffect(() => {
    o.current && a.current && (a.current.scrollTop = a.current.scrollHeight);
  }, [t]);
  const f = t.items.filter((m) => !m.retracted && !d1(m)), p = [];
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
            /* @__PURE__ */ h.jsx(mo, { size: 23 }),
            /* @__PURE__ */ h.jsx("span", { children: "Conversation with Muse" })
          ] }),
          t.historyNotice && /* @__PURE__ */ h.jsx("div", { className: "inline-notice", children: t.historyNotice }),
          p.map((m) => m.type === "toolGroup" && m.items.length >= 3 ? /* @__PURE__ */ h.jsx(
            tO,
            {
              items: m.items,
              sessionId: t.session.sessionId,
              onError: i
            },
            m.items[0].itemId
          ) : (m.type === "toolGroup" ? m.items : [m.item]).map((x) => {
            if (x.kind === "userMessage") {
              const b = vE(x.displayText || x.text) || x.displayText || x.text || "";
              return /* @__PURE__ */ h.jsxs("article", { className: "message user-message", children: [
                /* @__PURE__ */ h.jsxs("div", { className: "message-heading", children: [
                  /* @__PURE__ */ h.jsx("span", { className: "avatar user-avatar", children: "Y" }),
                  /* @__PURE__ */ h.jsx("strong", { children: "You" }),
                  x.recordedAt && /* @__PURE__ */ h.jsx("time", { children: new Date(x.recordedAt).toLocaleTimeString(void 0, {
                    hour: "numeric",
                    minute: "2-digit"
                  }) }),
                  /* @__PURE__ */ h.jsx(dp, { text: b })
                ] }),
                /* @__PURE__ */ h.jsx("div", { className: "user-message-text", children: b })
              ] }, x.itemId);
            }
            return x.kind === "agentMessage" ? /* @__PURE__ */ h.jsxs("article", { className: "message agent-message", children: [
              /* @__PURE__ */ h.jsxs("div", { className: "message-heading", children: [
                /* @__PURE__ */ h.jsx("span", { className: "avatar muse-avatar", children: /* @__PURE__ */ h.jsx(mo, { size: 26 }) }),
                /* @__PURE__ */ h.jsx("strong", { children: "Muse" }),
                x.status === "inProgress" && /* @__PURE__ */ h.jsx("span", { className: "streaming-label", children: "Composing" }),
                /* @__PURE__ */ h.jsx(dp, { text: x.text || "" })
              ] }),
              /* @__PURE__ */ h.jsx(
                hw,
                {
                  text: x.text || (x.status === "inProgress" ? "…" : ""),
                  onError: i
                }
              )
            ] }, x.itemId) : x.kind === "reasoning" ? /* @__PURE__ */ h.jsx(nO, { item: x, onError: i }, x.itemId) : /* @__PURE__ */ h.jsx(
              mw,
              {
                item: x,
                sessionId: t.session.sessionId,
                onError: i
              },
              x.itemId
            );
          })),
          t.approvals.map((m) => /* @__PURE__ */ h.jsx(
            rO,
            {
              approval: m,
              onError: i
            },
            `${m.approvalId}:${m.currentRequirementId.sourceIndex}`
          )),
          t.questions.map((m) => /* @__PURE__ */ h.jsx(aO, { request: m, onError: i }, m.userInputId)),
          t.error && /* @__PURE__ */ h.jsxs("div", { className: "inline-error", role: "alert", children: [
            /* @__PURE__ */ h.jsx("strong", { children: "Muse couldn’t finish this turn." }),
            /* @__PURE__ */ h.jsx("p", { children: t.error }),
            /* @__PURE__ */ h.jsx("span", { children: "Your conversation is saved. You can send a follow-up or reconnect." })
          ] }),
          f.length === 0 && /* @__PURE__ */ h.jsxs("div", { className: "empty-conversation", children: [
            /* @__PURE__ */ h.jsx(mo, { size: 48 }),
            /* @__PURE__ */ h.jsx("h2", { children: "Start a conversation" }),
            /* @__PURE__ */ h.jsx("p", { children: "Ask a question or describe what you want to build." })
          ] })
        ] })
      }
    ),
    s && /* @__PURE__ */ h.jsx(
      xn,
      {
        className: "jump-button",
        label: "Jump to latest message",
        onClick: () => {
          o.current = !0, a.current?.scrollTo({ top: a.current.scrollHeight, behavior: "smooth" }), c(!1);
        },
        children: /* @__PURE__ */ h.jsx(kS, { size: 17 })
      }
    )
  ] });
}
function oO(t) {
  return t.directory ? /* @__PURE__ */ h.jsx(Ov, { size: 15, className: "file-icon folder" }) : /\.(ts|tsx|js|jsx|mjs|cjs|py|rs|go|rb|java|c|cpp|h|swift|css|scss|html|sh)$/i.test(t.name) ? /* @__PURE__ */ h.jsx(tl, { size: 15, className: "file-icon code" }) : /\.(md|mdx|txt|json|yaml|yml|toml|lock)$/i.test(t.name) ? /* @__PURE__ */ h.jsx(jv, { size: 15, className: "file-icon doc" }) : /* @__PURE__ */ h.jsx(DS, { size: 15, className: "file-icon" });
}
function sO({
  projects: t,
  sessions: i,
  onOpen: a,
  onChoose: o
}) {
  const [s, c] = Q.useState({});
  return Q.useEffect(() => {
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
        /* @__PURE__ */ h.jsx(yo, { size: 15 }),
        "Open project"
      ] })
    ] }),
    /* @__PURE__ */ h.jsxs("div", { className: "project-grid", children: [
      t.map((f, p) => {
        const m = i.filter((b) => b.workspaceRoot === f), g = m.map((b) => b.lastActivityAt || b.updatedAt).sort().at(-1), x = s[f];
        return /* @__PURE__ */ h.jsxs("button", { className: "project-card", onClick: () => o(f), children: [
          /* @__PURE__ */ h.jsxs("div", { className: "project-card-top", children: [
            /* @__PURE__ */ h.jsx("span", { className: `project-card-icon hue-${p % 3}`, children: /* @__PURE__ */ h.jsx(kr, { size: 24, strokeWidth: 1.5 }) }),
            x?.isRepository && /* @__PURE__ */ h.jsxs("span", { className: "project-git-pills", children: [
              x.branch && /* @__PURE__ */ h.jsxs("span", { className: "project-git-pill", children: [
                /* @__PURE__ */ h.jsx(Mv, { size: 11 }),
                x.branch
              ] }),
              /* @__PURE__ */ h.jsx("span", { className: `project-git-pill ${x.changes.length ? "dirty" : "clean"}`, children: x.changes.length ? `${x.changes.length} changed` : "Clean" })
            ] })
          ] }),
          /* @__PURE__ */ h.jsx("h2", { children: Hi(f) }),
          /* @__PURE__ */ h.jsx("p", { children: f.replace(/^(?:\/Users\/[^/]+|\/home\/[^/]+|[A-Za-z]:\\Users\\[^\\]+)/, "~") }),
          /* @__PURE__ */ h.jsxs("footer", { children: [
            /* @__PURE__ */ h.jsxs("span", { children: [
              m.length,
              " conversation",
              m.length === 1 ? "" : "s",
              g ? ` · ${c0(g)}` : ""
            ] }),
            /* @__PURE__ */ h.jsx(wr, { size: 16 })
          ] })
        ] }, f);
      }),
      /* @__PURE__ */ h.jsxs("button", { className: "project-card add-project", onClick: a, children: [
        /* @__PURE__ */ h.jsx(yo, { size: 26, strokeWidth: 1.2 }),
        /* @__PURE__ */ h.jsx("h2", { children: "Open project" }),
        /* @__PURE__ */ h.jsx("p", { children: "Open a folder on your Mac." })
      ] })
    ] }),
    /* @__PURE__ */ h.jsx("p", { className: "page-footnote", children: "Projects stay right where they are. Muse works in the folders you choose." })
  ] });
}
function uO({
  project: t,
  onOpen: i,
  onMention: a
}) {
  const [o, s] = Q.useState(""), [c, f] = Q.useState([]), [p, m] = Q.useState(""), [g, x] = Q.useState(""), [b, w] = Q.useState(""), [v, S] = Q.useState(""), [j, C] = Q.useState(!1);
  if (Q.useEffect(() => {
    s(""), m(""), x(""), w("");
  }, [t]), Q.useEffect(() => {
    if (!t) return;
    let Y = !1;
    return C(!0), S(""), f([]), window.muse.listFiles(t, o).then((K) => {
      Y || f(K);
    }).catch((K) => {
      Y || S(K.message);
    }).finally(() => {
      Y || C(!1);
    }), () => {
      Y = !0;
    };
  }, [t, o]), Q.useEffect(() => {
    if (!p) return;
    let Y = !1;
    return x("Loading preview…"), window.muse.readFile(t, p).then((K) => {
      Y || x(K);
    }).catch((K) => {
      Y || x(K.message);
    }), () => {
      Y = !0;
    };
  }, [t, p]), !t)
    return /* @__PURE__ */ h.jsxs("section", { className: "workspace-page page-empty", children: [
      /* @__PURE__ */ h.jsx(kr, { size: 36, strokeWidth: 1.2 }),
      /* @__PURE__ */ h.jsx("h1", { children: "Files" }),
      /* @__PURE__ */ h.jsx("p", { children: "Choose a project to explore its files and bring context into a conversation." }),
      /* @__PURE__ */ h.jsxs("button", { className: "button primary", onClick: i, children: [
        "Open project ",
        /* @__PURE__ */ h.jsx(wr, { size: 14 })
      ] })
    ] });
  const O = c.filter((Y) => Y.name.toLowerCase().includes(b.toLowerCase())).sort((Y, K) => Number(K.directory) - Number(Y.directory) || Y.name.localeCompare(K.name)), I = o ? o.split("/").filter(Boolean) : [], U = p && g ? g.split(`
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
              /* @__PURE__ */ h.jsx(kr, { size: 13 }),
              /* @__PURE__ */ h.jsx("span", { children: Hi(t) })
            ]
          }
        ),
        /* @__PURE__ */ h.jsx(yi, { size: 12 }),
        I.length === 0 ? /* @__PURE__ */ h.jsx("span", { className: "breadcrumb-segment current", children: "Project root" }) : I.map((Y, K) => {
          const N = I.slice(0, K + 1).join("/"), F = K === I.length - 1;
          return /* @__PURE__ */ h.jsxs("span", { className: "breadcrumb-part", children: [
            K > 0 && /* @__PURE__ */ h.jsx(yi, { size: 12 }),
            /* @__PURE__ */ h.jsx(
              "button",
              {
                type: "button",
                className: `breadcrumb-segment ${F ? "current" : ""}`,
                onClick: () => {
                  s(N), w("");
                },
                children: Y
              }
            )
          ] }, N);
        })
      ] })
    ] }) }),
    /* @__PURE__ */ h.jsxs("div", { className: "file-browser", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "file-browser-sidebar", children: [
        /* @__PURE__ */ h.jsx("div", { className: "file-search-bar", children: /* @__PURE__ */ h.jsxs("div", { className: "file-search", children: [
          /* @__PURE__ */ h.jsx(fu, { size: 14 }),
          /* @__PURE__ */ h.jsx(
            "input",
            {
              "aria-label": "Filter files",
              placeholder: "Find in this folder…",
              value: b,
              onChange: (Y) => w(Y.target.value)
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
                /* @__PURE__ */ h.jsx(SS, { size: 14 }),
                /* @__PURE__ */ h.jsx("span", { children: "Parent folder" })
              ]
            }
          ),
          v && /* @__PURE__ */ h.jsx("p", { className: "inline-error", children: v }),
          j && /* @__PURE__ */ h.jsx("p", { className: "file-list-message", children: "Opening folder…" }),
          !j && O.map((Y) => /* @__PURE__ */ h.jsxs(
            "button",
            {
              "aria-label": Y.name,
              className: `file-row ${p === Y.path ? "selected" : ""}`,
              onClick: () => {
                Y.directory ? (s(Y.path), w("")) : m(Y.path);
              },
              children: [
                oO(Y),
                /* @__PURE__ */ h.jsx("span", { children: Y.name }),
                Y.directory && /* @__PURE__ */ h.jsx(yi, { size: 13, className: "file-row-chevron" })
              ]
            },
            Y.path
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
            /* @__PURE__ */ h.jsx(tl, { size: 15 }),
            /* @__PURE__ */ h.jsx("span", { children: p }),
            U > 0 && /* @__PURE__ */ h.jsxs("small", { children: [
              U,
              " lines"
            ] })
          ] }),
          /* @__PURE__ */ h.jsxs("button", { className: "file-ask-button text-button", onClick: () => a(p), children: [
            "Ask UniPi ",
            /* @__PURE__ */ h.jsx(wr, { size: 12 })
          ] })
        ] }),
        /* @__PURE__ */ h.jsx("pre", { children: g })
      ] }) : /* @__PURE__ */ h.jsxs("div", { className: "file-preview-empty", children: [
        /* @__PURE__ */ h.jsx("span", { className: "file-empty-badge", children: /* @__PURE__ */ h.jsx(tl, { size: 24, strokeWidth: 1.4 }) }),
        /* @__PURE__ */ h.jsx("h3", { children: "File preview" }),
        /* @__PURE__ */ h.jsx("p", { children: "Select a file on the left to inspect its contents or reference it in chat." })
      ] }) })
    ] })
  ] });
}
const cO = [
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
function fO({
  platform: t = "darwin",
  onError: i
}) {
  const [a, o] = Q.useState({ 0: !0 }), s = t === "darwin" ? "⌘" : "Ctrl", c = t === "darwin" ? "⌥" : "Alt";
  return /* @__PURE__ */ h.jsx("section", { className: "workspace-page docs-page", children: /* @__PURE__ */ h.jsxs("div", { className: "docs-container", children: [
    /* @__PURE__ */ h.jsxs("div", { className: "page-heading", children: [
      /* @__PURE__ */ h.jsxs("div", { children: [
        /* @__PURE__ */ h.jsx("h1", { children: "Getting started" }),
        /* @__PURE__ */ h.jsx("p", { children: "Learn the basics and keyboard shortcuts." })
      ] }),
      /* @__PURE__ */ h.jsx(sv, { size: 32, strokeWidth: 1.2 })
    ] }),
    /* @__PURE__ */ h.jsx("div", { className: "guides", children: cO.map((f, p) => {
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
              /* @__PURE__ */ h.jsx(yi, { size: 15, className: "guide-chevron" })
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
          /* @__PURE__ */ h.jsx(wr, { size: 14 })
        ]
      }
    ),
    /* @__PURE__ */ h.jsx("p", { className: "page-footnote", children: "UniPi is an independent community app. Your CLI remains the home of your account and conversations." })
  ] }) });
}
const dO = [
  {
    icon: $S,
    title: "Plan a feature",
    description: "Turn an idea into an approach",
    prompt: "I have an idea I’d like to build. First, help me think through the approach. "
  },
  {
    icon: bv,
    title: "Explore the project",
    description: "Understand the code and architecture",
    prompt: "Explore this project and give me a clear tour of its architecture, key files, and how to run it. Do not make changes yet."
  },
  {
    icon: Lv,
    title: "Review the code",
    description: "Find bugs and improvements",
    prompt: "Review this project for bugs, rough edges, and opportunities to simplify. Explain the most useful improvements before making changes."
  }
];
function pO(t, i) {
  if (i.includes(t.sessionId)) return "Pinned";
  const a = new Date(t.lastActivityAt || t.updatedAt), o = /* @__PURE__ */ new Date();
  if (o.setHours(0, 0, 0, 0), a >= o) return "Today";
  const s = new Date(o);
  if (s.setDate(o.getDate() - 1), a >= s) return "Yesterday";
  const c = new Date(o);
  return c.setDate(o.getDate() - 7), a >= c ? "Previous 7 days" : "Earlier";
}
function hO() {
  const [t, i] = Q.useState(() => yE.parse({})), [a, o] = Q.useState({ state: "connecting" }), [s, c] = Q.useState("0.2.0"), [f, p] = Q.useState("darwin"), [m, g] = Q.useState([]), [x, b] = Q.useState(null), [w, v] = Q.useState(!0), [S, j] = Q.useState(""), [C, O] = Q.useState(""), [I, U] = Q.useState(null), [Y, K] = Q.useState([]), [N, F] = Q.useState(""), [le, ye] = Q.useState({}), [Z, ee] = Q.useState(!1), [se, Ne] = Q.useState(!1), [ce, ne] = Q.useState(!0), [W, ue] = Q.useState(!1), [pe, _e] = Q.useState(!1), [z, Ve] = Q.useState("chat"), [dt, E] = Q.useState(!1), [T, J] = Q.useState(!1), [L, re] = Q.useState(!0), [he, be] = Q.useState(!0), [Te, me] = Q.useState({}), [je, Ht] = Q.useState(!1), [ki, On] = Q.useState(""), [bt, ut] = Q.useState(null), [Fe, un] = Q.useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ), Jt = Q.useRef(null), xt = Q.useRef(0), Dn = Q.useRef(0), Si = Q.useRef(!1), Mn = Q.useRef(() => {
  }), zi = Q.useRef(void 0), Rn = t.theme === "system" ? Fe ? "moonlight" : "daylight" : t.theme, V = f === "darwin" ? "⌘" : "Ctrl", te = I?.session.sessionId || `new:${C}`, ve = le[te] || "", Ae = I?.session.status === "running", Ue = Q.useCallback((q) => ut({ message: q, kind: "error" }), []), Qe = (q) => ut({ message: q, kind: "success" }), pt = Q.useCallback(async () => {
    const q = ++Dn.current;
    Si.current || v(!0), j("");
    try {
      const de = /* @__PURE__ */ new Map(), we = /* @__PURE__ */ new Set();
      let ze;
      do {
        const lt = await window.muse.listSessions(ze);
        if (q !== Dn.current) return;
        for (const jt of lt.sessions) de.set(jt.sessionId, jt);
        if (g([...de.values()]), b(lt.nextCursor), ze = lt.nextCursor || void 0, ze && we.has(ze))
          throw new Error("Muse returned a repeated history cursor. Reconnect to refresh history.");
        ze && we.add(ze);
      } while (ze);
      Si.current = !0;
    } catch (de) {
      q === Dn.current && j(de instanceof Error ? de.message : String(de));
    } finally {
      q === Dn.current && v(!1);
    }
  }, []), wt = Q.useCallback(
    (q) => {
      window.muse.savePreferences(q).then(i).catch((de) => Ue(de.message));
    },
    [Ue]
  );
  Q.useEffect(() => {
    const q = window.matchMedia("(prefers-color-scheme: dark)"), de = () => un(q.matches);
    return q.addEventListener("change", de), () => q.removeEventListener("change", de);
  }, []), Q.useEffect(() => {
  }, [Rn, t.fontSize, t.reduceMotion]), Q.useEffect(() => {
    if (!bt || bt.kind === "error") return;
    const q = setTimeout(() => ut(null), 4e3);
    return () => clearTimeout(q);
  }, [bt]), Q.useEffect(() => {
    const q = (we) => {
      we.type === "connection" && o(we.status), we.type === "preferences" && i(we.preferences), we.type === "error" && Ue(we.message), we.type === "menu" && Mn.current(we.action), we.type === "session" && (we.view.session.sessionId === Jt.current && U(we.view), g(
        (ze) => ze.map(
          (lt) => lt.sessionId === we.view.session.sessionId ? we.view.session : lt
        )
      )), we.type === "sessions-changed" && (clearTimeout(zi.current), zi.current = setTimeout(() => {
        pt();
      }, 250));
    }, de = window.muse.onEvent(q);
    return window.muse.bootstrap().then((we) => {
      i(we.preferences), o(we.status), c(we.version), p(we.platform || "darwin"), O(we.preferences.recentProjects[0] || "");
    }).catch((we) => Ue(we.message)), () => {
      de(), clearTimeout(zi.current), Dn.current++;
    };
  }, [pt, Ue]), Q.useEffect(() => {
    a.state === "ready" && (pt(), window.muse.models().then((q) => {
      K(q), F((de) => de || q.find((we) => we.isDefault)?.modelId || "");
    }).catch((q) => Ue(q.message)));
  }, [a.state, pt, Ue]);
  const _t = () => {
    Ve("chat"), xt.current++, Jt.current = null, U(null), Ne(!1), J(!1);
  }, Zt = async () => {
    try {
      const q = await window.muse.chooseProject();
      q && (O(q), _t());
    } catch (q) {
      Ue(q instanceof Error ? q.message : String(q));
    }
  }, Pn = async (q) => {
    if (Ve("chat"), Jt.current === q && I?.session.sessionId === q) return;
    const de = ++xt.current;
    !I && Ne(!0), Jt.current = q;
    try {
      const ze = await window.muse.openSession(q);
      if (xt.current !== de) return;
      U(ze), O(ze.session.workspaceRoot || ""), F(ze.session.modelId || "");
    } catch (ze) {
      xt.current === de && (Ue(ze instanceof Error ? ze.message : String(ze)), Jt.current = I?.session.sessionId || null);
    } finally {
      xt.current === de && Ne(!1);
    }
  }, Er = () => {
    window.muse.connect().then((q) => {
      if (o(q), q.state === "ready") {
        const de = Jt.current;
        de && Pn(de);
      }
    }).catch((q) => Ue(q.message));
  };
  Mn.current = (q) => {
    q === "new" && _t(), q === "open" && Zt(), q === "search" && E(!0), q === "settings" && _e("appearance"), q === "sidebar" && ne((de) => !de);
  }, Q.useEffect(() => {
    if (f === "darwin") return;
    const q = (de) => {
      if (!(de.ctrlKey || de.metaKey) || de.altKey || de.shiftKey) return;
      const we = de.key.toLowerCase(), lt = {
        n: "new",
        o: "open",
        k: "search",
        ",": "settings",
        b: "sidebar"
      }[we];
      lt && (de.preventDefault(), Mn.current(lt));
    };
    return window.addEventListener("keydown", q), () => window.removeEventListener("keydown", q);
  }, [f]);
  const Ot = async (q, de) => {
    ee(!0);
    const we = ve, ze = te, lt = xt.current;
    try {
      const jt = p1(we);
      if (jt) {
        if (!Zd.some(($t) => $t.name === jt.name))
          throw new Error(
            `/${jt.name} is not handled by Desktop. Use /help, or open Muse Code in the project inspector for CLI commands.`
          );
        if (q.length)
          throw new Error("Send attachments with a message, or remove them before using a command.");
        const { name: Pe, argument: Dt } = jt;
        if ((Pe === "clear" || Pe === "new") && _t(), Pe === "help" && Ve("docs"), Pe === "settings" && _e("appearance"), Pe === "voice") throw new Error("此插件不支持语音输入。");
        if (Pe === "model")
          if (!Dt) window.dispatchEvent(new CustomEvent("muse:select", { detail: "Model" }));
          else {
            if (!Y.some(($t) => $t.modelId === Dt))
              throw new Error("Choose one of the models available in the Model menu.");
            I && await window.muse.setModel(I.session.sessionId, Dt), F(Dt);
          }
        if (Pe === "effort")
          if (!Dt)
            window.dispatchEvent(new CustomEvent("muse:select", { detail: "Reasoning effort" }));
          else {
            const $t = s0.safeParse(Dt.toLowerCase());
            if (!$t.success)
              throw new Error("Choose none, minimal, low, medium, high, xhigh, max, or ultra.");
            i(await window.muse.savePreferences({ reasoningEffort: $t.data }));
          }
        if (["compact", "rename", "stop"].includes(Pe)) {
          if (!I) throw new Error("Open a conversation before using this command.");
          if (Pe === "compact") {
            const $t = await window.muse.compact(I.session.sessionId);
            Qe(
              $t.status === "noop" ? "There is no conversation history to compact yet." : "Muse is compacting this conversation."
            );
          }
          Pe === "stop" && await window.muse.cancel(I.session.sessionId), Pe === "rename" && (Dt ? await window.muse.renameSession(I.session.sessionId, Dt) : (On(Wr(I.session)), Ht(!0)));
        }
        return ye(($t) => ({ ...$t, [ze]: "" })), !0;
      }
      let ht = I;
      if (!ht) {
        let Pe = C;
        if (!Pe) {
          if (Pe = await window.muse.chooseProject() || "", !Pe) return !1;
          O(Pe);
        }
        ht = await window.muse.createSession(Pe, N || void 0), xt.current === lt && (Jt.current = ht.session.sessionId);
      }
      const ua = ht.session.sessionId, Du = {
        itemId: `optimistic-${Date.now()}`,
        kind: "userMessage",
        revision: 0,
        status: "completed",
        text: we,
        displayText: we,
        recordedAt: (/* @__PURE__ */ new Date()).toISOString()
      };
      return xt.current === lt && U((Pe) => {
        const Dt = Pe?.session.sessionId === ua ? Pe : ht, $t = Dt.items.some(
          (Yi) => Yi.kind === "userMessage" && (Yi.text === we || Yi.displayText === we)
        );
        return {
          ...Dt,
          session: { ...Dt.session, status: "running" },
          items: $t ? Dt.items : [...Dt.items, Du]
        };
      }), ye((Pe) => ({
        ...Pe,
        [ze]: Pe[ze] === we ? "" : Pe[ze] || "",
        [ua]: Pe[ua] === we ? "" : Pe[ua] || ""
      })), await window.muse.send({
        sessionId: ht.session.sessionId,
        text: we,
        attachments: q.map((Pe) => Pe.id),
        effort: t.reasoningEffort,
        mode: de
      }), !0;
    } catch (jt) {
      return ye((ht) => ({ ...ht, [ze]: ht[ze] || we })), Ue(jt instanceof Error ? jt.message : String(jt)), !1;
    } finally {
      ee(!1);
    }
  }, qt = (q) => {
    if (!I) {
      F(q);
      return;
    }
    const de = xt.current;
    window.muse.setModel(I.session.sessionId, q).then(() => {
      xt.current === de && F(q);
    }).catch((we) => Ue(we.message));
  }, Un = (q) => wt({
    pinnedSessionIds: t.pinnedSessionIds.includes(q) ? t.pinnedSessionIds.filter((de) => de !== q) : [...t.pinnedSessionIds, q]
  }), cn = (q) => {
    wt({
      archivedSessionIds: t.archivedSessionIds.includes(q) ? t.archivedSessionIds.filter((de) => de !== q) : [...t.archivedSessionIds, q]
    }), q === I?.session.sessionId && _t();
  }, Vi = m.filter(
    (q) => (!C || q.workspaceRoot === C) && !["subagent", "reminder"].includes(q.kind || "") && t.archivedSessionIds.includes(q.sessionId) === T
  ).sort(
    (q, de) => Number(t.pinnedSessionIds.includes(de.sessionId)) - Number(t.pinnedSessionIds.includes(q.sessionId)) || (de.lastActivityAt || de.updatedAt).localeCompare(q.lastActivityAt || q.updatedAt)
  ), sa = [];
  for (const q of Vi) {
    const de = pO(q, t.pinnedSessionIds), we = sa[sa.length - 1];
    we && we.group === de ? we.entries.push(q) : sa.push({ group: de, entries: [q] });
  }
  return /* @__PURE__ */ h.jsxs(
    "div",
    {
      "data-theme": Rn,
      "data-text-size": t.fontSize,
      "data-reduce-motion": String(t.reduceMotion),
      className: `app-shell ${ce ? "" : "sidebar-hidden"} ${W ? "with-inspector" : ""}`,
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
            "aria-hidden": !ce || void 0,
            inert: ce ? void 0 : !0,
            className: `sidebar ${Vi.length ? "has-conversations" : ""}`,
            children: [
              /* @__PURE__ */ h.jsx("div", { className: "sidebar-titlebar", children: /* @__PURE__ */ h.jsx(xn, { label: "Hide sidebar", onClick: () => ne(!1), children: /* @__PURE__ */ h.jsx(BS, { size: 17 }) }) }),
              /* @__PURE__ */ h.jsxs("button", { className: "brand", onClick: _t, "aria-label": "UniPi home", children: [
                /* @__PURE__ */ h.jsx(mo, { size: 37 }),
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
              /* @__PURE__ */ h.jsx("div", { className: "sidebar-search", children: /* @__PURE__ */ h.jsxs("button", { className: "search-button", onClick: () => E(!0), children: [
                /* @__PURE__ */ h.jsx("span", { className: "sidebar-item-icon", children: /* @__PURE__ */ h.jsx(fu, { size: 15 }) }),
                /* @__PURE__ */ h.jsx("span", { children: "Search conversations" }),
                /* @__PURE__ */ h.jsxs("kbd", { children: [
                  V,
                  " K"
                ] })
              ] }) }),
              /* @__PURE__ */ h.jsxs("nav", { className: "main-nav", "aria-label": "Main navigation", children: [
                [
                  { id: "chat", icon: au, label: "Chat" },
                  { id: "projects", icon: bv, label: "Projects" },
                  { id: "files", icon: MS, label: "Files" },
                  { id: "docs", icon: sv, label: "Docs" }
                ].map((q) => /* @__PURE__ */ h.jsxs(
                  "button",
                  {
                    "aria-label": q.label,
                    title: q.label,
                    className: z === q.id ? "selected" : "",
                    onClick: () => Ve(q.id),
                    children: [
                      /* @__PURE__ */ h.jsx(q.icon, { size: 19, strokeWidth: 1.7 }),
                      /* @__PURE__ */ h.jsx("span", { children: q.label }),
                      z === q.id && /* @__PURE__ */ h.jsx("span", { className: "nav-active-dot" })
                    ]
                  },
                  q.id
                )),
                /* @__PURE__ */ h.jsxs("button", { "aria-label": "Settings", title: "Settings", onClick: () => _e("appearance"), children: [
                  /* @__PURE__ */ h.jsx(n1, { size: 19, strokeWidth: 1.7 }),
                  /* @__PURE__ */ h.jsx("span", { children: "Settings" })
                ] })
              ] }),
              /* @__PURE__ */ h.jsx("div", { className: "sidebar-primary", children: /* @__PURE__ */ h.jsxs("button", { className: "new-button", onClick: _t, children: [
                /* @__PURE__ */ h.jsx("span", { className: "sidebar-item-icon", children: /* @__PURE__ */ h.jsx(yo, { size: 15 }) }),
                /* @__PURE__ */ h.jsx("span", { children: "New conversation" }),
                /* @__PURE__ */ h.jsxs("kbd", { children: [
                  V,
                  " N"
                ] })
              ] }) }),
              /* @__PURE__ */ h.jsxs("div", { className: "sidebar-section-label", children: [
                /* @__PURE__ */ h.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "section-toggle",
                    "aria-expanded": L,
                    onClick: () => re((q) => !q),
                    children: [
                      /* @__PURE__ */ h.jsx("span", { children: "PROJECTS" }),
                      /* @__PURE__ */ h.jsx(
                        uo,
                        {
                          size: 12,
                          className: `section-chevron ${L ? "" : "collapsed"}`
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ h.jsx(
                  xn,
                  {
                    label: "Open a project",
                    onClick: () => {
                      Zt();
                    },
                    children: /* @__PURE__ */ h.jsx(yo, { size: 14 })
                  }
                )
              ] }),
              /* @__PURE__ */ h.jsx("div", { className: `sidebar-collapse ${L ? "open" : ""}`, children: /* @__PURE__ */ h.jsx("div", { className: "sidebar-collapse-inner", children: /* @__PURE__ */ h.jsx("div", { className: "project-switcher", children: /* @__PURE__ */ h.jsx(
                lu,
                {
                  label: "Current project",
                  value: C,
                  icon: /* @__PURE__ */ h.jsx("span", { className: "sidebar-item-icon", children: /* @__PURE__ */ h.jsx(kr, { size: 15 }) }),
                  onChange: (q) => {
                    if (q === "__open") {
                      Zt();
                      return;
                    }
                    O(q), _t();
                  },
                  options: [
                    { value: "", label: "All projects" },
                    ...t.recentProjects.map((q) => ({
                      value: q,
                      label: Hi(q)
                    })),
                    ...C && !t.recentProjects.includes(C) ? [{ value: C, label: Hi(C) }] : [],
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
                    "aria-expanded": he,
                    onClick: () => be((q) => !q),
                    children: [
                      /* @__PURE__ */ h.jsx("span", { children: T ? "ARCHIVED" : "CONVERSATIONS" }),
                      /* @__PURE__ */ h.jsx(
                        uo,
                        {
                          size: 12,
                          className: `section-chevron ${he ? "" : "collapsed"}`
                        }
                      )
                    ]
                  }
                ),
                /* @__PURE__ */ h.jsx(
                  xn,
                  {
                    label: T ? "Show conversations" : "Show archived conversations",
                    active: T,
                    onClick: () => J((q) => !q),
                    children: /* @__PURE__ */ h.jsx(_x, { size: 13 })
                  }
                )
              ] }),
              /* @__PURE__ */ h.jsx("div", { className: `conversation-list ${he ? "" : "is-collapsed"}`, children: /* @__PURE__ */ h.jsx("div", { className: `sidebar-collapse ${he ? "open" : ""}`, children: /* @__PURE__ */ h.jsxs("div", { className: "sidebar-collapse-inner", children: [
                S && /* @__PURE__ */ h.jsxs("div", { className: "history-error", children: [
                  /* @__PURE__ */ h.jsx("p", { children: "Could not load your conversation history." }),
                  /* @__PURE__ */ h.jsx("p", { children: S }),
                  /* @__PURE__ */ h.jsx(
                    "button",
                    {
                      className: "text-button",
                      onClick: () => {
                        pt();
                      },
                      children: "Try again"
                    }
                  )
                ] }),
                sa.map(({ group: q, entries: de }) => {
                  const we = !!Te[q];
                  return /* @__PURE__ */ h.jsxs("div", { className: "conversation-group", children: [
                    /* @__PURE__ */ h.jsxs(
                      "button",
                      {
                        type: "button",
                        className: "conversation-group-label",
                        "aria-expanded": !we,
                        onClick: () => me((ze) => ({
                          ...ze,
                          [q]: !ze[q]
                        })),
                        children: [
                          /* @__PURE__ */ h.jsx("span", { children: q }),
                          /* @__PURE__ */ h.jsx(
                            uo,
                            {
                              size: 12,
                              className: `section-chevron ${we ? "collapsed" : ""}`
                            }
                          )
                        ]
                      }
                    ),
                    /* @__PURE__ */ h.jsx("div", { className: `sidebar-collapse ${we ? "" : "open"}`, children: /* @__PURE__ */ h.jsx("div", { className: "sidebar-collapse-inner", children: de.map((ze) => /* @__PURE__ */ h.jsxs(
                      "div",
                      {
                        className: `conversation-row ${ze.sessionId === I?.session.sessionId ? "selected" : ""}`,
                        children: [
                          /* @__PURE__ */ h.jsxs(
                            "button",
                            {
                              className: "conversation-link",
                              title: Wr(ze),
                              onClick: () => {
                                Pn(ze.sessionId);
                              },
                              children: [
                                /* @__PURE__ */ h.jsx(
                                  "span",
                                  {
                                    className: `conversation-indicator sidebar-item-icon ${ze.status === "running" ? "running" : ""}`,
                                    children: t.pinnedSessionIds.includes(ze.sessionId) ? /* @__PURE__ */ h.jsx(Ex, { size: 13 }) : ze.status === "running" ? /* @__PURE__ */ h.jsx("span", { className: "working-dot" }) : /* @__PURE__ */ h.jsx(au, { size: 14 })
                                  }
                                ),
                                /* @__PURE__ */ h.jsxs("span", { className: "conversation-copy", children: [
                                  /* @__PURE__ */ h.jsx("span", { className: "conversation-title", children: Wr(ze) }),
                                  !C && ze.workspaceRoot && /* @__PURE__ */ h.jsx("span", { className: "conversation-project", children: Hi(ze.workspaceRoot) })
                                ] }),
                                /* @__PURE__ */ h.jsx("time", { children: c0(ze.lastActivityAt || ze.updatedAt) })
                              ]
                            }
                          ),
                          /* @__PURE__ */ h.jsx(
                            "button",
                            {
                              className: "row-pin",
                              title: t.pinnedSessionIds.includes(ze.sessionId) ? "Unpin conversation" : "Pin conversation",
                              "aria-label": `${t.pinnedSessionIds.includes(ze.sessionId) ? "Unpin" : "Pin"} ${Wr(ze)}`,
                              onClick: () => Un(ze.sessionId),
                              children: /* @__PURE__ */ h.jsx(Ex, { size: 12 })
                            }
                          )
                        ]
                      },
                      ze.sessionId
                    )) }) })
                  ] }, q);
                }),
                w && a.state === "ready" && /* @__PURE__ */ h.jsxs("div", { className: "history-status", children: [
                  /* @__PURE__ */ h.jsx(nl, { size: 14, className: "spin" }),
                  /* @__PURE__ */ h.jsx("span", { children: "Loading Muse history…" })
                ] }),
                !Vi.length && !w && !S && a.state === "ready" && /* @__PURE__ */ h.jsxs("div", { className: "sidebar-empty", children: [
                  /* @__PURE__ */ h.jsx(au, { size: 19, strokeWidth: 1.3 }),
                  /* @__PURE__ */ h.jsx("p", { children: T ? "No archived conversations" : "No conversations yet" }),
                  /* @__PURE__ */ h.jsx("span", { children: T ? "Archived conversations appear here." : "Start a conversation in this project." })
                ] }),
                x && !w && /* @__PURE__ */ h.jsx(
                  "button",
                  {
                    className: "load-more",
                    onClick: () => {
                      window.muse.listSessions(x).then((q) => {
                        g((de) => [
                          ...de,
                          ...q.sessions.filter(
                            (we) => !de.some((ze) => ze.sessionId === we.sessionId)
                          )
                        ]), b(q.nextCursor);
                      }).catch((q) => Ue(q.message));
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
                /* @__PURE__ */ h.jsx("div", { className: "theme-mini-switch", role: "group", "aria-label": "Appearance", children: f0.map((q) => /* @__PURE__ */ h.jsxs(
                  "button",
                  {
                    title: q.label,
                    "aria-label": `${q.label} theme`,
                    "aria-pressed": Rn === q.id,
                    className: Rn === q.id ? "selected" : "",
                    onClick: () => wt({ theme: q.id }),
                    children: [
                      /* @__PURE__ */ h.jsx(q.icon, { size: 14 }),
                      /* @__PURE__ */ h.jsx("span", { className: "theme-mini-label", children: /* @__PURE__ */ h.jsx("span", { children: q.label }) })
                    ]
                  },
                  q.id
                )) }),
                /* @__PURE__ */ h.jsxs("button", { className: "connection-status", onClick: () => _e("connection"), children: [
                  /* @__PURE__ */ h.jsx("span", { className: `status-dot ${a.state}` }),
                  /* @__PURE__ */ h.jsx("span", { children: a.state === "ready" ? "Connected to Muse Code" : a.state === "connecting" ? "Connecting to Muse…" : "Muse Code disconnected" }),
                  /* @__PURE__ */ h.jsx(wr, { size: 11 })
                ] })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ h.jsxs("main", { className: "main-workspace", children: [
          z === "chat" && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
            /* @__PURE__ */ h.jsx("div", { className: `welcome-art theme-${Rn}`, "aria-hidden": "true" }),
            /* @__PURE__ */ h.jsx("div", { className: "chat-brand-background", "aria-hidden": "true" })
          ] }),
          /* @__PURE__ */ h.jsxs("header", { className: `workspace-titlebar ${ce ? "" : "with-traffic-lights"}`, children: [
            /* @__PURE__ */ h.jsxs("div", { className: "workspace-breadcrumb", children: [
              !ce && /* @__PURE__ */ h.jsx(xn, { label: "Show sidebar", onClick: () => ne(!0), children: /* @__PURE__ */ h.jsx(IS, { size: 17 }) }),
              /* @__PURE__ */ h.jsx("span", { className: "breadcrumb-project", children: C ? Hi(C) : "UniPi" }),
              /* @__PURE__ */ h.jsx(yi, { size: 12 }),
              /* @__PURE__ */ h.jsx("span", { className: "breadcrumb-title", children: z !== "chat" ? z[0].toUpperCase() + z.slice(1) : I ? Wr(I.session) : "New conversation" })
            ] }),
            /* @__PURE__ */ h.jsxs("div", { className: "window-tools", children: [
              /* @__PURE__ */ h.jsx(xn, { label: "New conversation", onClick: _t, children: /* @__PURE__ */ h.jsx(VS, { size: 17 }) }),
              /* @__PURE__ */ h.jsx(xn, { label: "Search conversations and commands", onClick: () => E(!0), children: /* @__PURE__ */ h.jsx(fu, { size: 17 }) }),
              I && /* @__PURE__ */ h.jsxs("details", { className: "conversation-menu", children: [
                /* @__PURE__ */ h.jsx("summary", { "aria-label": "Conversation actions", children: /* @__PURE__ */ h.jsx(OS, { size: 19 }) }),
                /* @__PURE__ */ h.jsxs("div", { className: "popover", children: [
                  /* @__PURE__ */ h.jsx(
                    "button",
                    {
                      onClick: () => {
                        On(Wr(I.session)), Ht(!0);
                      },
                      children: "Rename conversation"
                    }
                  ),
                  /* @__PURE__ */ h.jsx("button", { onClick: () => Un(I.session.sessionId), children: t.pinnedSessionIds.includes(I.session.sessionId) ? "Unpin conversation" : "Pin conversation" }),
                  /* @__PURE__ */ h.jsxs(
                    "button",
                    {
                      onClick: () => {
                        window.muse.exportSession(I.session.sessionId).then((q) => {
                          q && Qe("Conversation exported to Markdown.");
                        }).catch((q) => Ue(q.message));
                      },
                      children: [
                        /* @__PURE__ */ h.jsx(AS, { size: 13 }),
                        "Export as Markdown"
                      ]
                    }
                  ),
                  /* @__PURE__ */ h.jsxs("button", { onClick: () => cn(I.session.sessionId), children: [
                    /* @__PURE__ */ h.jsx(_x, { size: 13 }),
                    T ? "Restore conversation" : "Archive in Desktop"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ h.jsx(
                xn,
                {
                  label: "Toggle project inspector",
                  active: W,
                  onClick: () => ue((q) => !q),
                  children: /* @__PURE__ */ h.jsx(HS, { size: 17 })
                }
              )
            ] })
          ] }),
          a.state !== "ready" && a.state !== "connecting" && /* @__PURE__ */ h.jsxs("div", { className: "connection-banner", children: [
            /* @__PURE__ */ h.jsx(jx, { size: 16 }),
            /* @__PURE__ */ h.jsx("span", { children: a.message || "Connect Muse Code to get started." }),
            /* @__PURE__ */ h.jsx("button", { onClick: Er, children: "Reconnect" }),
            /* @__PURE__ */ h.jsxs("button", { onClick: () => _e("connection"), children: [
              "Set up ",
              /* @__PURE__ */ h.jsx(zS, { size: 12 })
            ] })
          ] }),
          z === "projects" && /* @__PURE__ */ h.jsx(
            sO,
            {
              projects: t.recentProjects,
              sessions: m,
              onOpen: () => {
                Zt();
              },
              onChoose: (q) => {
                O(q), _t();
              }
            }
          ),
          z === "files" && /* @__PURE__ */ h.jsx(
            uO,
            {
              project: C,
              onOpen: () => {
                Zt();
              },
              onMention: (q) => {
                Ve("chat"), ye((de) => ({
                  ...de,
                  [te]: `${de[te] || ""}${de[te] ? `
` : ""}Please look at the project file: ${JSON.stringify(q)}
`
                }));
              }
            }
          ),
          z === "docs" && /* @__PURE__ */ h.jsx(fO, { platform: f, onError: Ue }),
          z === "chat" && /* @__PURE__ */ h.jsxs("div", { className: "workspace-body", children: [
            se ? /* @__PURE__ */ h.jsxs("div", { className: "loading-conversation", children: [
              /* @__PURE__ */ h.jsx(nl, { className: "spin", size: 23 }),
              /* @__PURE__ */ h.jsx("p", { children: "Loading conversation…" })
            ] }) : I ? /* @__PURE__ */ h.jsx(lO, { view: I, onError: Ue }, I.session.sessionId) : /* @__PURE__ */ h.jsxs("div", { className: "welcome", children: [
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
                      Zt();
                    },
                    children: [
                      /* @__PURE__ */ h.jsx(kr, { size: 14 }),
                      C ? Hi(C) : "Choose a project",
                      /* @__PURE__ */ h.jsx(uo, { size: 12 })
                    ]
                  }
                ) })
              ] }),
              /* @__PURE__ */ h.jsxs("div", { className: "starter-section", children: [
                /* @__PURE__ */ h.jsx("div", { className: "starter-label", children: /* @__PURE__ */ h.jsx("span", { children: "SUGGESTED PROMPTS" }) }),
                /* @__PURE__ */ h.jsx("div", { className: "starter-grid", children: dO.map((q) => /* @__PURE__ */ h.jsxs(
                  "button",
                  {
                    className: "starter-card",
                    onClick: () => {
                      ye((de) => ({ ...de, [te]: q.prompt })), document.querySelector("textarea")?.focus();
                    },
                    children: [
                      /* @__PURE__ */ h.jsx(q.icon, { size: 19, strokeWidth: 1.5 }),
                      /* @__PURE__ */ h.jsxs("span", { children: [
                        /* @__PURE__ */ h.jsx("strong", { children: q.title }),
                        /* @__PURE__ */ h.jsx("small", { children: q.description })
                      ] }),
                      /* @__PURE__ */ h.jsx(wr, { size: 13, className: "starter-arrow" })
                    ]
                  },
                  q.title
                )) })
              ] })
            ] }),
            !se && /* @__PURE__ */ h.jsx("div", { className: `composer-dock ${I ? "conversation-dock" : ""}`, children: /* @__PURE__ */ h.jsx(
              kE,
              {
                draft: ve,
                setDraft: (q) => ye((de) => ({ ...de, [te]: q })),
                running: !!Ae,
                backgroundOnly: !!(I && XS(I.items)),
                submitting: Z,
                connected: a.state === "ready",
                hasProject: !!C,
                project: C,
                models: Y,
                modelId: N,
                preferences: t,
                onModel: qt,
                onEffort: (q) => wt({ reasoningEffort: q }),
                onSubmit: Ot,
                onCancel: () => {
                  I && window.muse.cancel(I.session.sessionId).catch((q) => Ue(q.message));
                },
                onError: Ue
              }
            ) })
          ] })
        ] }),
        /* @__PURE__ */ h.jsx(
          _E,
          {
            open: W,
            project: C,
            platform: f,
            view: I,
            onClose: () => ue(!1),
            onMentionDiff: (q) => {
              Ve("chat"), ye((de) => ({
                ...de,
                [te]: `${de[te] || ""}${de[te] ? `
` : ""}Please review the changes in @${q}
`
              }));
            },
            onError: Ue
          },
          C
        ),
        pe && /* @__PURE__ */ h.jsx(
          jE,
          {
            initialTab: pe,
            preferences: t,
            status: a,
            version: s,
            platform: f,
            onSave: wt,
            onClose: () => _e(!1),
            onError: Ue,
            onReconnect: Er
          }
        ),
        dt && /* @__PURE__ */ h.jsx(
          SE,
          {
            platform: f,
            sessions: m.filter(
              (q) => !t.archivedSessionIds.includes(q.sessionId)
            ),
            onSession: (q) => {
              Pn(q);
            },
            onNew: _t,
            onOpen: () => {
              Zt();
            },
            onSettings: () => _e("appearance"),
            onTheme: (q) => wt({ theme: q }),
            onClose: () => E(!1)
          }
        ),
        je && I && /* @__PURE__ */ h.jsx(
          Cp,
          {
            title: "Rename conversation",
            onClose: () => Ht(!1),
            className: "rename-dialog",
            children: /* @__PURE__ */ h.jsxs(
              "form",
              {
                onSubmit: (q) => {
                  q.preventDefault(), window.muse.renameSession(I.session.sessionId, ki).then(() => Ht(!1)).catch((de) => Ue(de.message));
                },
                children: [
                  /* @__PURE__ */ h.jsx("label", { className: "field-label", htmlFor: "conversation-name", children: "Conversation name" }),
                  /* @__PURE__ */ h.jsx(
                    "input",
                    {
                      id: "conversation-name",
                      className: "text-input",
                      autoFocus: !0,
                      value: ki,
                      maxLength: 200,
                      onChange: (q) => On(q.target.value)
                    }
                  ),
                  /* @__PURE__ */ h.jsxs("div", { className: "request-actions", children: [
                    /* @__PURE__ */ h.jsx("button", { type: "button", className: "button secondary", onClick: () => Ht(!1), children: "Cancel" }),
                    /* @__PURE__ */ h.jsx("button", { className: "button primary", disabled: !ki.trim(), children: "Save" })
                  ] })
                ]
              }
            )
          }
        ),
        bt && /* @__PURE__ */ h.jsxs("div", { className: `toast ${bt.kind}`, role: bt.kind === "error" ? "alert" : "status", children: [
          bt.kind === "success" ? /* @__PURE__ */ h.jsx(Nn, { size: 16 }) : /* @__PURE__ */ h.jsx(jx, { size: 16 }),
          /* @__PURE__ */ h.jsx("span", { children: bt.message }),
          /* @__PURE__ */ h.jsx(xn, { label: "Dismiss notification", onClick: () => ut(null), children: /* @__PURE__ */ h.jsx(ia, { size: 14 }) })
        ] })
      ]
    }
  );
}
const mO = ':root{color-scheme:light;--font-family-ui: -apple-system, BlinkMacSystemFont, "Segoe UI Variable Text", "Segoe UI", "Inter", "Ubuntu", "Cantarell", "Helvetica Neue", system-ui, sans-serif;--font-family-code: "SF Mono", "Cascadia Mono", "JetBrains Mono", "Fira Code", Menlo, Consolas, monospace;--font-caption: 12px;--font-support: 13px;--font-ui: 14px;--font-body: 15px;--font-title: 17px;--font-section: 20px;--font-heading: 22px;--font-brand: 24px;--font-page: 28px;--reading-size: 15px;--base: #f8f7f4;--app-background: #f8f7f4;--sidebar: #f0efeb;--sidebar-solid: #eeece7;--text: #30332f;--heading: #373c34;--message-text: #42453f;--secondary-text: #64685f;--muted: #686d63;--placeholder: #73796e;--accent: #567a65;--serif-accent: #60755b;--primary: #4d6956;--on-primary: #fff;--primary-border: #3f5d4933;--button-shadow: 0 2px 5px #253e2315;--border: #45453515;--faint-border: #4545350b;--strong-border: #4545352b;--hover: #5757400a;--selected: #e4e8de;--selection: #c6d2be;--surface: #ffffff85;--soft-surface: #737c6008;--glass: #ffffff70;--dialog: #fbfaf7;--input: #fff9;--inspector: #f4f3ef;--composer: #ffffffc9;--composer-border: #bfc5b18c;--composer-focus: #859d7c;--composer-shadow: 0 4px 21px #34392707, 0 1px 4px #34392704;--focus: #739369;--focus-soft: #7a986214;--scrollbar: #63695333;--green: #5b8c67;--red: #b76a67;--warning: #bd954f;--nav-selected: #ffffff90;--nav-border: #dedfd580;--nav-shadow: 0 1px 5px #3a3a2b04;--disabled-button: #e6e8e0;--disabled-text: #a3ab9a;--user-avatar: #e6e5dd;--user-message: #eeeee87d;--code-inline: #535b480b;--code-background: #f0f1eb;--tool-background: #ffffff60;--request-border: #7e9d7447;--request-background: #eef3eac9;--notice: #f3f0e3;--error-background: #ba656510;--error-text: #99615e;--error-border: #b9746833;--diff-added: #3b8b520d;--diff-removed: #aa534d0e;--backdrop: #35372d38}[data-theme=daylight]{--accent: #927459;--serif-accent: #987b5c;--primary: #73634e;--primary-border: #67594255;--selected: #e9e4dc;--focus: #ab9171;--focus-soft: #b39a7715;--selection: #e0d2c0;--composer-focus: #b4a48c;--composer-border: #d2c9bb9c;--request-border: #b7a07d55;--request-background: #f6f0e7d4}[data-theme=grove]{--base: #f0f3ec;--app-background: #f0f3ec;--sidebar: #e7ece3;--sidebar-solid: #e7ece3;--dialog: #f5f7f1;--inspector: #eaf0e6;--heading: #354434;--primary: #54734f;--accent: #567852;--code-background: #e8eee2;--user-message: #e3eadd99}[data-theme=moonlight]{color-scheme:dark;--base: #141b28;--app-background: #141b28;--sidebar: #111824;--sidebar-solid: #17202d;--text: #e1e5ee;--heading: #e9e9ef;--message-text: #d7dce7;--secondary-text: #a8b1c3;--muted: #a0aec6;--placeholder: #8691a7;--accent: #b4bee4;--serif-accent: #c1c8e5;--primary: #adb9df;--on-primary: #182239;--primary-border: #d2dcf255;--button-shadow: 0 2px 10px #0002;--border: #b0c5ff13;--faint-border: #b0c5ff09;--strong-border: #b0c5ff2c;--hover: #bac8f70a;--selected: #a4b7f218;--selection: #52678b;--surface: #23304990;--soft-surface: #afc5ef05;--glass: #1b273882;--dialog: #1c2536;--input: #152133;--inspector: #151d2b;--composer: #1d293cd9;--composer-border: #7390c138;--composer-focus: #7288b3;--composer-shadow: 0 5px 30px #060a112b, inset 0 1px 0 #b9d1ff08;--focus: #a1b7e5;--focus-soft: #748aca15;--scrollbar: #aec0ed25;--green: #8cbc9e;--red: #d49399;--warning: #d3b16d;--nav-selected: #a3bafb10;--nav-border: #acc1ed13;--nav-shadow: inset 0 1px 0 #c5d7ff06;--disabled-button: #36425a;--disabled-text: #8090ad;--user-avatar: #29334a;--user-message: #24304a70;--code-inline: #b5c2f014;--code-background: #101a2b;--tool-background: #21304a5c;--request-border: #99b4d440;--request-background: #233248e6;--notice: #b7975020;--error-background: #b6747416;--error-text: #e0a5aa;--error-border: #c0888430;--diff-added: #85c7980d;--diff-removed: #e191990d;--backdrop: #070d1b88}[data-theme=muse],[data-theme=plush]{color-scheme:dark;--base: #062565;--app-background: radial-gradient(ellipse at 95% 0%, #0758cd 0%, transparent 62%), linear-gradient(125deg, #082968, #061b52 63%, #072e83);--sidebar: linear-gradient(160deg, #1452b252, #041b53ad 75%);--sidebar-solid: #0a347c;--text: #f0f5ff;--heading: #f5f8ff;--message-text: #e1ebff;--secondary-text: #c0d5fb;--muted: #b4caee;--placeholder: #a9c6f3;--accent: #b5d4ff;--serif-accent: #b9d3ff;--primary: linear-gradient(140deg, #cee5ff, #8db9ff);--on-primary: #0753dd;--primary-border: #deeeff99;--button-shadow: inset 0 1px 3px #ffffff80, 0 0 16px #3a86ff4a;--border: #87baff24;--faint-border: #92bdff10;--strong-border: #98c6ff4f;--hover: #629eff1e;--selected: #5292f12b;--selection: #397dde99;--surface: #124087d4;--soft-surface: #558de112;--glass: #2864b825;--dialog: #0c2c66;--input: #061d4e9c;--inspector: linear-gradient(160deg, #083d8d, #08215a);--composer: linear-gradient(145deg, #3174d348, #1450b334);--composer-border: #70a7ff9c;--composer-focus: #a7ceff;--composer-shadow: inset 0 1px 0 #b4d5ff1a, 0 8px 40px #00104714;--focus: #b2d9ff;--focus-soft: #81b8ff15;--scrollbar: #a7c9ff35;--green: #85e1b5;--red: #ffb3b9;--warning: #ead095;--nav-selected: linear-gradient(125deg, #357df14d, #5396ff3d);--nav-border: #6ca8ff6c;--nav-shadow: inset 0 1px 4px #92bdff23, 0 0 10px #3984ff11;--disabled-button: #8db9ff;--disabled-text: #0a52d2;--user-avatar: #3975bf69;--user-message: #174c9659;--code-inline: #88b6ff1a;--code-background: #071e50de;--tool-background: #0b2e6ad9;--request-border: #95bcff77;--request-background: #123f80f2;--notice: #c7a46e20;--error-background: #ab6b811e;--error-text: #ffbec8;--error-border: #e7a5b740;--diff-added: #79d7ac15;--diff-removed: #efa9b418;--backdrop: #020e379c}[data-text-size=compact]{--reading-size: 14px}[data-text-size=large]{--reading-size: 17px}*{box-sizing:border-box}html,body,#root{width:100%;height:100%;margin:0;overflow:hidden}body{font-family:var(--font-family-ui);color:var(--text);background:var(--base);font-size:var(--font-ui);line-height:1.5;-webkit-font-smoothing:antialiased}button,input,select,textarea{font:inherit}button,a,input,select,textarea{-webkit-app-region:no-drag}button{color:inherit;cursor:pointer;border:0;background:none}button:disabled{opacity:.42;cursor:not-allowed}button,a,input,select,textarea,summary{-webkit-tap-highlight-color:transparent}button:focus-visible,a:focus-visible,summary:focus-visible,select:focus-visible{outline:2px solid var(--focus);outline-offset:3px}input:focus-visible,textarea:focus-visible{outline:none}input:focus-visible{box-shadow:0 0 0 3px var(--focus-soft);border-color:var(--focus)}::selection{background:var(--selection)}::-webkit-scrollbar{width:8px;height:8px}::-webkit-scrollbar-thumb{border-radius:999px;border:2px solid transparent;background-clip:padding-box;background-color:var(--scrollbar)}::-webkit-scrollbar-track{background:transparent;margin-block:6px;margin-inline:6px}::-webkit-scrollbar-corner{background:transparent}.select-popover::-webkit-scrollbar-track,.slash-menu::-webkit-scrollbar-track,.dialog::-webkit-scrollbar-track,.command-results::-webkit-scrollbar-track,.file-browser-list::-webkit-scrollbar-track,.code-block pre::-webkit-scrollbar-track,.tool-body pre::-webkit-scrollbar-track,.approval-card>pre::-webkit-scrollbar-track{margin-block:10px;margin-inline:10px}h1,h2,h3,h4,p{margin-top:0}svg{flex-shrink:0}kbd{font-family:inherit;font-size:var(--font-caption);color:var(--muted);font-weight:400;letter-spacing:.02em}.muted{color:var(--muted)}.eyebrow{font-size:var(--font-caption);font-weight:600;letter-spacing:.13em;color:var(--muted)}.app-shell{display:grid;grid-template-columns:264px minmax(0,1fr) 0px;height:100%;background:var(--app-background);transition:grid-template-columns .32s cubic-bezier(.22,1,.36,1)}.app-shell.with-inspector{grid-template-columns:264px minmax(0,1fr) 292px}.app-shell.sidebar-hidden{grid-template-columns:0px minmax(0,1fr) 0px}.app-shell.sidebar-hidden.with-inspector{grid-template-columns:0px minmax(0,1fr) 292px}.icon-button{width:30px;height:30px;padding:0;display:inline-flex;align-items:center;justify-content:center;border-radius:7px;color:var(--muted);transition:background .15s,color .15s;flex-shrink:0}.icon-button:hover,.icon-button.active{background:var(--hover);color:var(--text)}.button{display:inline-flex;align-items:center;justify-content:center;gap:8px;border-radius:9px;padding:10px 14px;font-size:var(--font-ui);font-weight:500;transition:transform .15s,background .15s}.button:active:not(:disabled){transform:translateY(1px)}.button.primary{background:var(--primary);color:var(--on-primary);box-shadow:var(--button-shadow);border:1px solid var(--primary-border)}.button.primary:hover:not(:disabled){filter:brightness(1.07)}.button.secondary{border:1px solid var(--border);background:var(--surface)}.button.secondary:hover{background:var(--hover)}.text-button{display:inline-flex;align-items:center;gap:6px;font-size:var(--font-ui);color:var(--accent);padding:5px 0;text-align:left}.text-button:hover{text-decoration:underline;text-underline-offset:3px}.sidebar{width:264px;min-width:0;display:flex;flex-direction:column;min-height:0;background:var(--sidebar);border-right:1px solid var(--border);-webkit-user-select:none;user-select:none;position:relative;z-index:4;overflow:hidden;transition:transform .32s cubic-bezier(.22,1,.36,1),opacity .24s cubic-bezier(.22,1,.36,1),border-color .24s ease}.app-shell.sidebar-hidden .sidebar{transform:translate(-100%);opacity:0;pointer-events:none;border-right-color:transparent}.sidebar>:not(.conversation-list):not(.sidebar-companion){flex-shrink:0}.sidebar-titlebar{height:46px;flex-shrink:0;display:flex;align-items:center;justify-content:flex-end;padding:8px 14px 0;-webkit-app-region:drag}.window-traffic-lights{position:fixed;top:22px;left:20px;z-index:20;display:flex;align-items:center;gap:8px;-webkit-app-region:no-drag}.traffic-light{width:12px;height:12px;border-radius:50%;padding:0;position:relative;border:.5px solid #00000024;transition:filter .14s ease,transform .14s ease}.traffic-light.close{background:#ff5f57}.traffic-light.minimize{background:#febc2e}.traffic-light.maximize{background:#28c840}.traffic-light:after{content:"";position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:700;line-height:1;color:#0009;opacity:0;transition:opacity .12s ease}.traffic-light.close:after{content:"×"}.traffic-light.minimize:after{content:"−"}.traffic-light.maximize:after{content:"+"}.window-traffic-lights:hover .traffic-light:after,.traffic-light:focus-visible:after{opacity:1}.brand{padding:12px 24px 18px;display:flex;align-items:center;gap:8px;width:100%;text-align:left}.brand>span:first-of-type{font-size:var(--font-brand);font-weight:600;letter-spacing:-.8px}.brand .muse-mark{object-fit:contain;margin-left:-4px}.desktop-tag{position:relative;flex-shrink:0;font-size:var(--font-caption);letter-spacing:.04em;color:var(--muted);border:1px solid var(--border);padding:3px 6px;border-radius:5px;margin:3px 0 0 auto;transition:color .18s ease,border-color .18s ease,background-color .18s ease}.desktop-tag:hover{color:var(--text);border-color:var(--strong-border);background:var(--soft-surface);opacity:1!important}.desktop-tag:after{content:attr(data-tooltip);position:absolute;top:calc(100% + 8px);right:0;width:210px;padding:8px 10px;border-radius:9px;background:var(--dialog);border:1px solid var(--strong-border);color:var(--text);font-size:11.5px;font-weight:450;letter-spacing:0;line-height:1.45;white-space:normal;box-shadow:0 12px 30px #0005;opacity:0;transform:translateY(-4px);pointer-events:none;transition:opacity .18s cubic-bezier(.22,1,.36,1),transform .18s cubic-bezier(.22,1,.36,1);z-index:30}.desktop-tag:hover:after{opacity:1;transform:translateY(0)}.update-settings{text-align:left;margin:22px 0}.update-settings .setting-row{gap:18px}.update-settings .button{flex-shrink:0}.muse-mark{object-fit:contain}.main-nav{display:flex;flex-direction:column;gap:4px;padding:0 13px 12px}.main-nav button{display:flex;align-items:center;gap:13px;padding:11px 13px;font-size:var(--font-ui);border:1px solid transparent;border-radius:10px;text-align:left;color:var(--secondary-text)}.main-nav button:hover{background:var(--hover);color:var(--text)}.main-nav button.selected{background:var(--nav-selected);border-color:var(--nav-border);color:var(--text);box-shadow:var(--nav-shadow)}.nav-active-dot{margin-left:auto;height:4px;width:4px;border-radius:50%;background:currentColor;opacity:.7}.sidebar-search{padding:0 13px 10px}.sidebar-search .search-button{width:100%;background:var(--soft-surface);border:1px solid var(--border)}.sidebar-search .search-button:hover{background:var(--hover);border-color:var(--strong-border)}.sidebar-primary{padding:0 13px 6px;display:flex;flex-direction:column;gap:3px}.sidebar-item-icon{width:16px;height:16px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;color:var(--muted);transition:color .18s ease}.new-button,.search-button{display:flex;align-items:center;gap:10px;min-height:32px;border-radius:8px;font-size:var(--font-support);color:var(--secondary-text);text-align:left;padding:6px 10px;transition:background-color .18s ease,border-color .18s ease,color .18s ease}.new-button:hover,.search-button:hover{background:var(--hover);color:var(--text)}.new-button:hover .sidebar-item-icon,.search-button:hover .sidebar-item-icon{color:var(--text)}.new-button kbd,.search-button kbd{margin-left:auto;font-family:var(--font-family-ui);font-size:var(--font-caption);color:var(--muted);opacity:.9}.sidebar-section-label{padding:4px 19px 2px 13px;margin-top:4px;height:30px;display:flex;align-items:center;justify-content:space-between;flex-shrink:0;color:var(--muted);font-size:var(--font-caption);font-weight:600;letter-spacing:.09em}.section-toggle{display:inline-flex;align-items:center;gap:6px;padding:4px 10px;border-radius:6px;color:var(--muted);font-size:var(--font-caption);font-weight:600;letter-spacing:.09em;transition:color .18s ease,background-color .18s ease}.section-toggle:hover{color:var(--text);background:var(--hover)}.section-chevron{flex-shrink:0;opacity:0;transition:transform .26s cubic-bezier(.22,1,.36,1),opacity .18s ease}.section-toggle:hover .section-chevron,.section-chevron.collapsed{opacity:.75}.section-chevron.collapsed{transform:rotate(-90deg)}.sidebar-collapse{display:grid;grid-template-rows:0fr;opacity:0;transition:grid-template-rows .28s cubic-bezier(.22,1,.36,1),opacity .22s cubic-bezier(.22,1,.36,1)}.sidebar-collapse.open{grid-template-rows:1fr;opacity:1}.sidebar-collapse-inner{min-height:0;overflow:hidden}.sidebar-section-label .icon-button{width:22px;height:22px}.project-switcher{padding:0 13px 4px;display:flex;align-items:center;color:var(--secondary-text)}.conversation-list{padding:2px 13px 7px;min-height:100px;flex:1;overflow-y:auto}.conversation-group{margin-bottom:2px}.conversation-row{display:flex;align-items:center;position:relative;border-radius:8px;margin-bottom:2px;transition:background-color .18s ease}.conversation-row:hover{background:var(--hover)}.conversation-row.selected{background:var(--selected)}.conversation-link{display:flex;align-items:center;width:100%;min-height:32px;padding:6px 10px;gap:10px;text-align:left;min-width:0;font-size:var(--font-support);color:var(--secondary-text);transition:color .18s ease}.conversation-row:hover .conversation-link,.conversation-row.selected .conversation-link{color:var(--text)}.conversation-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}.conversation-indicator{color:var(--muted)}.conversation-row:hover .conversation-indicator,.conversation-row.selected .conversation-indicator{color:var(--text)}.conversation-link time{font-size:var(--font-caption);color:var(--muted);font-variant-numeric:tabular-nums;flex-shrink:0}.row-pin{position:absolute;right:5px;width:22px;height:23px;border-radius:5px;background:var(--sidebar-solid);opacity:0;display:flex;align-items:center;justify-content:center}.conversation-row:hover .row-pin,.row-pin:focus-visible{opacity:1}.conversation-row:hover time{visibility:hidden}.sidebar-empty{padding:13px 10px;color:var(--muted);font-size:var(--font-support)}.sidebar-empty>svg{display:none}.sidebar-empty p{margin:0 0 5px;color:var(--secondary-text);font-size:var(--font-support)}.sidebar-empty span{font-size:var(--font-support);line-height:1.6}.load-more{font-size:var(--font-support);padding:8px 10px;color:var(--muted)}.sidebar-companion{flex:0 0 54px;min-height:0;height:54px;display:flex;flex-direction:row;align-items:center;justify-content:center;gap:10px;margin:6px 18px 0;overflow:hidden}.sidebar-companion img{width:43px;height:50px;min-height:0;object-fit:contain;filter:drop-shadow(0 8px 13px #00000020)}.sidebar-companion>span{color:var(--muted);font-size:var(--font-support);font-family:var(--font-family-ui);font-style:normal;margin:0}.sidebar-companion>svg{display:none}.sidebar-bottom{padding:7px 15px 11px;flex-shrink:0}.theme-mini-switch{display:flex;align-items:center;padding:3px;gap:2px;border-radius:10px;border:1px solid var(--border);background:var(--soft-surface);margin:0 2px 7px;height:36px}.theme-mini-switch button{display:flex;flex:1 1 0px;gap:0;align-items:center;justify-content:center;height:28px;border-radius:7px;color:var(--muted);font-size:12.5px;padding:0 2px;min-width:0;overflow:hidden;transition:flex-grow .3s cubic-bezier(.22,1,.36,1),background-color .24s cubic-bezier(.22,1,.36,1),color .18s ease,box-shadow .24s cubic-bezier(.22,1,.36,1),transform .16s cubic-bezier(.22,1,.36,1)}.theme-mini-switch button>svg{flex-shrink:0;transition:transform .24s cubic-bezier(.22,1,.36,1)}.theme-mini-switch button:hover:not(.selected){background:var(--hover);color:var(--secondary-text)}.theme-mini-switch button:active{transform:scale(.96)}.theme-mini-switch button.selected{flex:3.7 1 0px;padding:0 6px;background:var(--selected);color:var(--text);box-shadow:0 1px 4px #00000014}.theme-mini-label{display:inline-grid;grid-template-columns:0fr;opacity:0;margin-left:0;transition:grid-template-columns .3s cubic-bezier(.22,1,.36,1),opacity .2s ease,margin-left .3s cubic-bezier(.22,1,.36,1)}.theme-mini-label>span{overflow:hidden;white-space:nowrap}.theme-mini-switch button.selected .theme-mini-label{grid-template-columns:1fr;opacity:1;margin-left:5px}.connection-status{display:flex;align-items:center;gap:7px;width:100%;padding:6px 9px 0;color:var(--muted);font-size:var(--font-support)}.connection-status>svg{margin-left:auto}.status-dot{width:5px;height:5px;background:var(--warning);border-radius:50%;flex-shrink:0}.status-dot.ready{background:var(--green);box-shadow:0 0 6px color-mix(in srgb,var(--green),transparent 50%)}.status-dot.connecting{background:var(--accent);animation:breathe 2s infinite}.main-workspace{display:flex;flex-direction:column;min-width:0;min-height:0;position:relative;overflow:hidden}.workspace-titlebar{height:62px;flex-shrink:0;display:flex;align-items:center;justify-content:space-between;gap:10px;padding:8px 25px 0;-webkit-app-region:drag;z-index:6;transition:padding-left .32s cubic-bezier(.22,1,.36,1)}.workspace-titlebar.with-traffic-lights{padding-left:96px}.workspace-breadcrumb{display:flex;align-items:center;gap:10px;min-width:0;font-size:var(--font-ui)}.breadcrumb-project{color:var(--muted);flex-shrink:0;max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.workspace-breadcrumb>svg{color:var(--muted);opacity:.65}.breadcrumb-title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:500}.window-tools{display:flex;align-items:center;gap:6px}.local-pill{display:flex;align-items:center;gap:5px;font-size:var(--font-support);color:var(--muted);margin-right:8px}.local-pill>span{height:4px;width:4px;background:var(--green);border-radius:50%}.conversation-menu{position:relative}.conversation-menu>summary{list-style:none;cursor:pointer;padding:5px;display:flex;color:var(--muted);border-radius:6px}.conversation-menu>summary:hover{background:var(--hover)}.popover{position:absolute;z-index:15;top:32px;right:0;min-width:205px;padding:5px;background:var(--dialog);border:1px solid var(--border);box-shadow:0 12px 40px #0003;border-radius:10px}.popover button{width:100%;text-align:left;padding:9px 10px;display:flex;align-items:center;gap:7px;border-radius:6px;font-size:var(--font-ui)}.popover button:hover{background:var(--hover)}.connection-banner{display:flex;align-items:center;gap:10px;padding:10px 24px;background:var(--notice);color:var(--text);border-bottom:1px solid var(--border);font-size:var(--font-support);position:relative;z-index:5}.connection-banner>span{flex:1;line-height:1.5}.connection-banner button{display:flex;align-items:center;gap:5px;color:var(--accent);white-space:nowrap;font-size:var(--font-support)}.workspace-body{flex:1;min-height:0;display:flex;flex-direction:column;position:relative}.chat-brand-background{position:absolute;inset:0;background:url(/muse-logo.png) no-repeat 52% 26% / min(83%,865px);opacity:calc(var(--background-presence) * .045);pointer-events:none;will-change:opacity;transform:translateZ(0);transition:opacity .32s cubic-bezier(.22,1,.36,1)}.welcome{position:relative;display:flex;flex:1;flex-direction:column;min-height:310px}.welcome-art{position:absolute;inset:0;background-size:cover;background-position:center;opacity:var(--background-presence);pointer-events:none;-webkit-mask-image:linear-gradient(black 65%,transparent 100%);mask-image:linear-gradient(black 65%,transparent 100%);will-change:opacity;transform:translateZ(0);transition:opacity .32s cubic-bezier(.22,1,.36,1)}.main-workspace:has(.transcript,.loading-conversation) .welcome-art{opacity:calc(var(--background-presence) * .14)}:is([data-theme=muse],[data-theme=plush]) .welcome-art{opacity:0!important}.theme-daylight{background-image:url(/themes/daylight.png)}.theme-moonlight{background-image:url(/themes/moonlight.png)}.theme-grove{background-image:url(/themes/grove.png)}.welcome-content{position:relative;width:calc(100% - 112px);max-width:930px;margin:0 auto;padding:clamp(35px,8vh,100px) 0 25px}.welcome-kicker{display:flex;align-items:center;gap:8px;font-size:var(--font-caption);letter-spacing:.15em;font-weight:500;color:var(--muted);margin-bottom:23px}.tiny-spark{font-size:var(--font-title);letter-spacing:0;color:var(--accent)}.welcome h1{font-size:clamp(33px,3.7vw,53px);line-height:1.1;font-weight:420;letter-spacing:-2px;margin:0 0 19px;color:var(--heading)}.welcome h1 em{font-family:Iowan Old Style,Palatino Linotype,Georgia,serif;font-weight:400;letter-spacing:-1.7px;color:var(--serif-accent)}.welcome-subtitle{font-size:var(--font-body);line-height:1.8;color:var(--secondary-text);margin-bottom:24px}.welcome-project{display:flex;align-items:center;gap:14px}.project-chip{padding:8px 11px;border:1px solid var(--border);display:inline-flex;align-items:center;gap:8px;background:var(--glass);border-radius:8px;-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);font-size:var(--font-support);max-width:260px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.project-chip:hover{background:var(--hover)}.starter-section{width:calc(100% - 112px);max-width:930px;margin:auto auto 23px;position:relative;padding-top:25px}.starter-label{display:flex;align-items:center;justify-content:space-between;margin-bottom:11px;font-size:var(--font-caption);letter-spacing:.1em;color:var(--muted)}.starter-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.starter-card{display:flex;align-items:flex-start;text-align:left;gap:10px;padding:17px 13px;min-width:0;border:1px solid var(--border);border-radius:11px;background:var(--glass);-webkit-backdrop-filter:blur(12px);backdrop-filter:blur(12px);transition:transform .2s,border .2s,background .2s}.starter-card:hover{transform:translateY(-2px);background:var(--hover);border-color:var(--strong-border)}.starter-card>svg:first-child{color:var(--accent);margin-top:1px}.starter-card>span{min-width:0;display:flex;flex-direction:column;gap:6px}.starter-card strong{font-size:var(--font-ui);font-weight:500;white-space:normal}.starter-card small{font-size:var(--font-support);color:var(--muted);white-space:normal}.starter-arrow{color:var(--muted);margin-left:auto}.composer-dock{width:calc(100% - 112px);max-width:930px;margin:0 auto;position:relative;flex-shrink:0;padding-bottom:18px;z-index:2}.composer{background:var(--composer);border:1px solid var(--composer-border);border-radius:22px;box-shadow:var(--composer-shadow);padding:20px 20px 14px;-webkit-backdrop-filter:blur(28px);backdrop-filter:blur(28px);transition:border-color .2s,box-shadow .2s,background-color .2s}.composer:focus-within{border-color:var(--composer-focus);box-shadow:var(--composer-shadow),0 0 0 2px var(--focus-soft)}.composer textarea{display:block;width:100%;resize:none;min-height:64px;max-height:200px;line-height:1.6;background:transparent;color:var(--text);padding:0 3px;border:0;font-size:var(--font-body)}.composer textarea::placeholder{color:var(--placeholder)}.composer-toolbar{display:flex;align-items:center;justify-content:space-between;gap:10px;padding-top:8px}.composer-tools,.composer-actions{display:flex;align-items:center;gap:6px}.composer-tools{min-width:0}.composer-tools .icon-button{width:34px;height:34px;border-radius:50%;background:var(--soft-surface);border:1px solid var(--border);margin-right:2px}.toolbar-divider{display:none}.select-control{display:inline-flex;align-items:center;gap:6px;border-radius:8px;color:var(--secondary-text);min-width:0;padding:5px 8px;transition:background-color .18s ease,color .18s ease}.select-control:hover{background:var(--hover);color:var(--text)}.composer-tools .muse-select .select-control{min-height:38px;padding:7px 12px;border-radius:15px;background:var(--soft-surface);border:1px solid var(--border);gap:6px}.composer-tools .muse-select .select-control:hover{background:var(--hover)}.model-spark,.effort-icon{color:var(--accent);width:16px;height:16px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;line-height:1}.model-spark{font-size:var(--font-title)}.effort-select{color:var(--secondary-text)}.send-button{width:40px;height:40px;border-radius:50%;display:flex;justify-content:center;align-items:center;flex-shrink:0;background:var(--primary);border:1px solid var(--primary-border);color:var(--on-primary);box-shadow:var(--button-shadow)}.send-button:disabled{background:var(--disabled-button);color:var(--disabled-text);opacity:.8;box-shadow:none;border-color:transparent}.send-button:hover:not(:disabled){transform:translateY(-1px);filter:brightness(1.06)}.composer-footnote{display:flex;justify-content:space-between;gap:12px;font-size:var(--font-caption);color:var(--muted);margin:11px 6px 0;opacity:1;flex-wrap:wrap;align-items:center}.composer-shortcuts{display:inline-flex;align-items:center;gap:8px;margin-left:auto}.composer-shortcut{display:inline-flex;align-items:center;gap:5px;color:var(--secondary-text);font-weight:450}.composer-footnote kbd{display:inline-flex;align-items:center;justify-content:center;min-width:20px;height:20px;padding:0 5px;border-radius:6px;border:1px solid var(--border);background:var(--soft-surface);color:var(--secondary-text);font-family:var(--font-family-ui);font-size:11px;font-weight:500;line-height:1;box-shadow:inset 0 1px #ffffff0d}.footnote-dot{color:var(--muted);opacity:.55;padding:0 1px}.workspace-statusbar{height:29px;display:flex;align-items:center;justify-content:space-between;font-size:var(--font-caption);color:var(--muted);padding:0 24px;flex-shrink:0;border-top:1px solid var(--faint-border)}.workspace-statusbar>span{display:flex;align-items:center;gap:6px}.statusbar-dot{margin:0 3px}.attachment-list{display:flex;flex-wrap:wrap;gap:6px;margin:-3px 0 12px}.attachment{display:inline-flex;align-items:center;gap:5px;border:1px solid var(--border);border-radius:6px;background:var(--soft-surface);font-size:var(--font-support);padding:5px 6px;max-width:200px}.attachment>span{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.attachment button{padding:2px;display:flex;border-radius:3px}.attachment button:hover{background:var(--hover)}.running-line{display:flex;align-items:center;gap:8px;font-size:var(--font-support);padding:9px 5px 12px;color:var(--secondary-text)}.running-hint{margin-left:auto;color:var(--muted);font-size:var(--font-support);white-space:normal}.working-orb,.working-dot{width:6px;height:6px;display:inline-block;border-radius:50%;background:var(--accent);box-shadow:0 0 9px var(--focus-soft);animation:breathe 2s infinite}.working-dot{width:5px;height:5px}.transcript-wrap{position:relative;flex:1;min-height:0}.transcript-scroll{height:100%;overflow-y:auto;scroll-behavior:auto}.transcript{width:calc(100% - 112px);max-width:890px;margin:0 auto;padding:30px 0 40px;position:relative}.conversation-beginning{display:flex;align-items:center;justify-content:center;gap:9px;font-size:var(--font-support);color:var(--muted);margin:4px 0 42px}.conversation-beginning .muse-mark{opacity:.6}.message{margin:0 0 29px}.message-heading{display:flex;align-items:center;gap:8px;margin-bottom:10px;height:27px}.message-heading strong{font-size:var(--font-support);font-weight:600}.message-heading time{font-size:var(--font-caption);color:var(--muted)}.message-heading .copy-button{margin-left:2px;opacity:0;transition:opacity .16s ease,background-color .16s ease,color .16s ease}.message:hover .copy-button,.copy-button:focus-visible{opacity:1}.avatar{display:flex;align-items:center;justify-content:center;width:26px;height:26px;border-radius:9px}.user-avatar{background:var(--user-avatar);color:var(--secondary-text);font-size:var(--font-support);font-weight:600}.muse-avatar{background:var(--soft-surface);padding:3px}.muse-avatar .muse-mark{width:19px;height:19px}.user-message-text{margin-left:34px;font-size:var(--reading-size);line-height:1.65;white-space:pre-wrap;overflow-wrap:anywhere;padding:10px 15px;border-radius:13px;background:var(--user-message);border:1px solid var(--border);width:fit-content;max-width:calc(100% - 34px)}.agent-message .markdown{margin-left:35px}.markdown{font-size:var(--reading-size);line-height:1.85;overflow-wrap:anywhere;color:var(--message-text)}.markdown p{margin:0 0 16px}.markdown p:last-child{margin-bottom:0}.markdown h1,.markdown h2,.markdown h3{line-height:1.4;margin:22px 0 12px;letter-spacing:-.3px;color:var(--text)}.markdown h1{font-size:var(--font-brand)}.markdown h2{font-size:19px}.markdown h3{font-size:var(--font-title)}.markdown a{color:var(--accent);text-underline-offset:3px}.markdown blockquote{margin:18px 0;padding:2px 15px;border-left:2px solid var(--accent);color:var(--secondary-text)}.markdown ul,.markdown ol{padding-left:22px;margin:10px 0 18px}.markdown li{margin:5px 0}.markdown li>input{accent-color:var(--accent)}.markdown code{font-family:var(--font-family-code);background:var(--code-inline);border-radius:4px;font-size:.9em;padding:2px 5px}.markdown pre{font-size:var(--font-support);line-height:1.8;padding:16px 18px;margin:0;overflow-x:auto}.markdown pre code{padding:0;background:transparent;font-size:inherit}.code-block{border:1px solid var(--border);background:var(--code-background);border-radius:10px;margin:16px 0;overflow:hidden}.code-block-header{display:flex;align-items:center;justify-content:space-between;padding:6px 12px 6px 14px;border-bottom:1px solid var(--border);background:var(--soft-surface);font-size:var(--font-caption);color:var(--muted)}.code-block-lang{font-family:var(--font-family-code);font-size:11px;text-transform:lowercase;color:var(--muted)}.code-block-header .copy-button{font-size:11.5px;padding:3px 7px}.markdown table{border-collapse:collapse;display:block;overflow-x:auto;font-size:var(--font-ui);margin:18px 0}.markdown th,.markdown td{border:1px solid var(--border);padding:8px 13px;text-align:left}.markdown th{background:var(--soft-surface)}.markdown hr{border:0;border-top:1px solid var(--border);margin:24px 0}.inline-link-icon{margin-left:3px;vertical-align:middle}.remote-image{color:var(--muted);font-style:italic}.copy-button{display:inline-flex;align-items:center;gap:4px;padding:5px;color:var(--muted);border-radius:5px;font-size:var(--font-support)}.copy-button:hover{background:var(--hover);color:var(--text)}.streaming-label{font-size:var(--font-support);color:var(--muted);animation:breathe 2s infinite}.tool-item,.tool-group{margin:6px 0 6px 35px;border:1px solid var(--border);background:var(--tool-background);border-radius:9px;font-size:var(--font-support);overflow:hidden}.tool-item>summary,.tool-summary-button,.tool-group-header{width:100%;display:flex;align-items:center;gap:8px;list-style:none;padding:10px 12px;cursor:pointer;color:var(--secondary-text);text-align:left;transition:background-color .16s ease,color .16s ease}.tool-summary-button:hover,.tool-group-header:hover{background:var(--hover);color:var(--text)}.tool-group-list{padding:6px 10px 10px;border-top:1px solid var(--border);display:flex;flex-direction:column;gap:5px}.tool-group-list .tool-item{margin:0}summary::-webkit-details-marker{display:none}.tool-state{display:flex;color:var(--green)}.tool-title{font-weight:500}.tool-summary{color:var(--muted);flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:var(--font-support)}.details-chevron{margin-left:auto;color:var(--muted);transition:transform .24s cubic-bezier(.22,1,.36,1)}details[open]>summary .details-chevron,.details-chevron.open{transform:rotate(90deg)}.tool-body{padding:12px 14px;border-top:1px solid var(--border)}.tool-body pre{margin:8px 0 12px;font-family:var(--font-family-code);font-size:var(--font-support);line-height:1.7;white-space:pre-wrap;overflow-wrap:anywhere;max-height:320px;overflow:auto}.tool-body p{font-size:var(--font-support);line-height:1.6}.tool-result-status{display:block;font-size:var(--font-support);color:var(--muted);padding-top:8px}.reasoning-item{margin:0 0 18px 35px;color:var(--muted)}.reasoning-item>summary,.reasoning-summary-button{display:flex;align-items:center;list-style:none;gap:7px;font-size:var(--font-support);color:var(--muted);cursor:pointer;padding:6px 8px;margin-left:-8px;border-radius:6px;width:fit-content;transition:background-color .16s ease,color .16s ease}.reasoning-summary-button:hover{background:var(--hover);color:var(--text)}.reasoning-item .markdown{padding:13px 15px;margin-top:6px;border-left:1px solid var(--border);color:var(--muted);font-size:var(--font-ui)}.diff-count{display:inline-flex;gap:5px;font-size:var(--font-support);margin-left:auto}.diff-count b{color:var(--green);font-weight:500}.diff-count i{color:var(--red);font-style:normal}.jump-button{position:absolute;bottom:12px;left:calc(50% - 17px);width:34px;height:34px;border-radius:50%;background:var(--dialog);border:1px solid var(--border);box-shadow:0 3px 15px #0002}.empty-conversation{text-align:center;padding:70px 20px;color:var(--muted)}.empty-conversation h2{font-family:var(--font-family-ui);font-weight:400;margin-top:20px;font-size:var(--font-page);color:var(--text)}.empty-conversation p{font-size:var(--font-ui)}.approval-card,.question-card{margin:24px 0 24px 35px;border:1px solid var(--request-border);background:var(--request-background);border-radius:13px;padding:19px}.request-heading{display:flex;align-items:center;gap:11px;margin-bottom:14px}.request-heading h3{font-size:var(--font-ui);margin:0 0 5px;font-weight:600}.request-heading p{font-size:var(--font-support);color:var(--secondary-text);margin:0}.request-icon{color:var(--accent);display:flex}.approval-card>pre{background:var(--code-background);border:1px solid var(--border);border-radius:7px;padding:13px;font-family:var(--font-family-code);font-size:var(--font-support);line-height:1.7;white-space:pre-wrap;overflow-wrap:anywhere;max-height:220px;overflow:auto}.approval-choices{display:flex;flex-wrap:wrap;gap:7px;margin-top:15px}.approval-choices .button{font-size:var(--font-support)}.choice-scope{font-size:var(--font-support);opacity:.7;border-left:1px solid currentColor;padding-left:6px}.question-card fieldset{padding:0;margin:19px 0;border:0}.question-card legend{font-size:var(--font-ui);font-weight:500;line-height:1.6;margin-bottom:12px}.question-options{display:flex;flex-direction:column;gap:6px;margin-bottom:10px}.question-option{display:flex;gap:9px;align-items:flex-start;background:var(--surface);border:1px solid var(--border);padding:10px 12px;border-radius:7px;cursor:pointer}.question-option.selected{border-color:var(--accent);background:var(--selected)}.question-option input{accent-color:var(--accent);margin:2px 0 0}.question-option strong{font-size:var(--font-support);font-weight:500}.question-option small{display:block;margin-top:4px;font-size:var(--font-support);color:var(--secondary-text);line-height:1.5}.request-actions{display:flex;gap:8px;justify-content:flex-end;margin-top:20px}.inline-error{padding:14px;font-size:var(--font-support);line-height:1.7;background:var(--error-background);color:var(--error-text);border:1px solid var(--error-border);border-radius:8px;margin:16px 0;overflow-wrap:anywhere}.inline-error strong{font-weight:500}.inline-error p{margin:7px 0}.inline-error>span{opacity:.8}.inline-notice{padding:12px 14px;background:var(--notice);border:1px solid var(--border);border-radius:8px;font-size:var(--font-support);color:var(--secondary-text);line-height:1.6;margin-bottom:18px}.loading-conversation{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:14px;color:var(--muted);font-size:var(--font-ui)}.inspector{width:292px;min-width:0;border-left:1px solid var(--border);display:flex;flex-direction:column;min-height:0;background:var(--inspector);z-index:4;overflow:hidden;transition:transform .32s cubic-bezier(.22,1,.36,1),opacity .24s cubic-bezier(.22,1,.36,1),border-color .24s ease}.app-shell:not(.with-inspector) .inspector{transform:translate(100%);opacity:0;pointer-events:none;border-left-color:transparent}.inspector>header{height:62px;display:flex;align-items:center;justify-content:space-between;padding:8px 15px 0 19px;-webkit-app-region:drag;font-size:var(--font-support);color:var(--muted)}.inspector-project{display:flex;align-items:center;gap:10px;padding:21px 19px 25px}.project-icon{width:38px;height:38px;display:flex;align-items:center;justify-content:center;border:1px solid var(--border);background:var(--soft-surface);border-radius:10px;color:var(--accent)}.inspector-project>div{min-width:0}.inspector-project strong{display:block;font-size:var(--font-ui);margin-bottom:5px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.inspector-project div>span{display:flex;align-items:center;gap:5px;font-size:var(--font-support);color:var(--muted)}.inspector-tabs{display:flex;align-items:center;gap:18px;padding:0 16px;border-bottom:1px solid var(--border);height:39px}.inspector-tabs>button[role]{display:flex;gap:6px;align-items:center;height:39px;padding:0 0 2px;color:var(--muted);border-bottom:1.5px solid transparent;font-size:var(--font-support)}.inspector-tabs>button[aria-selected=true]{color:var(--text);border-bottom-color:var(--accent)}.inspector-tabs>button>span{font-size:var(--font-support);border-radius:4px;padding:1px 4px;background:var(--hover)}.inspector-tabs>.icon-button{margin-left:auto}.inspector-body{flex:1;overflow:auto;min-height:0;padding:12px 11px}.inspector-empty{text-align:center;padding:50px 19px;color:var(--muted)}.empty-glyph{display:inline-flex;padding:13px;border-radius:15px;background:var(--soft-surface);border:1px solid var(--faint-border)}.inspector-empty h3{color:var(--secondary-text);font-size:var(--font-ui);font-weight:500;margin:19px 0 10px}.inspector-empty p{font-size:var(--font-support);line-height:1.85}.changed-file{width:100%;display:flex;align-items:center;gap:9px;padding:10px 7px;text-align:left;border-radius:7px}.changed-file:hover{background:var(--hover)}.changed-file>svg:first-child{color:var(--muted)}.changed-file>span{flex:1;min-width:0}.changed-file strong{display:block;font-size:var(--font-support);font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.changed-file small{display:block;font-size:var(--font-support);color:var(--muted);margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.changed-file b{font-family:var(--font-family-code);font-size:var(--font-support);font-weight:400;color:var(--green)}.changed-file b.deleted{color:var(--red)}.changed-file>svg:last-child{color:var(--muted)}.diff-header{display:flex;align-items:center;justify-content:space-between;gap:8px;margin:4px 0 10px}.diff-back{display:flex;align-items:center;gap:5px;font-size:var(--font-support);min-width:0;flex:1;overflow:hidden;text-align:left}.diff-back>span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.diff-ask-button{display:inline-flex;align-items:center;gap:4px;padding:4px 8px;border-radius:6px;border:1px solid var(--border);background:var(--soft-surface);color:var(--secondary-text);font-size:11.5px;flex-shrink:0;transition:background-color .16s ease,color .16s ease}.diff-ask-button:hover{background:var(--hover);color:var(--text)}.diff-view{font-family:var(--font-family-code);font-size:var(--font-support);line-height:1.8;white-space:pre;overflow:auto;margin:0;padding:7px;border-radius:8px;border:1px solid var(--faint-border);background:var(--code-background)}.diff-view>span{display:inline-block;min-width:100%;padding:0 6px;border-radius:3px}.diff-gutter{display:inline-block;width:32px;padding-right:8px;margin-right:6px;text-align:right;color:var(--muted);opacity:.55;-webkit-user-select:none;user-select:none;font-variant-numeric:tabular-nums}.diff-view .added{background:var(--diff-added);color:var(--green)}.diff-view .removed{background:var(--diff-removed);color:var(--red)}.diff-view .hunk{color:var(--accent)}.diff-view .meta{color:var(--muted);opacity:.7}.activity-entry{display:flex;gap:9px;padding:12px 7px;border-bottom:1px solid var(--faint-border)}.activity-entry>span{color:var(--green)}.activity-entry strong{font-size:var(--font-support);font-weight:500}.activity-entry p{font-size:var(--font-support);color:var(--muted);line-height:1.6;margin:5px 0 0;overflow-wrap:anywhere}.usage-panel{border-top:1px solid var(--border);padding:16px 20px}.usage-panel>span{display:block;margin-bottom:12px}.usage-panel>div{display:flex;justify-content:space-between;font-size:var(--font-support);margin:7px 0;color:var(--muted)}.usage-panel strong{font-weight:500;color:var(--secondary-text);font-variant-numeric:tabular-nums}.inspector-footer{border-top:1px solid var(--border);display:flex;justify-content:space-between;padding:12px 18px}.inspector-footer button{display:flex;align-items:center;gap:7px;font-size:var(--font-support);color:var(--muted)}.inspector-footer button:hover{color:var(--text)}.dialog{background:var(--dialog);color:var(--text);border:1px solid var(--strong-border);border-radius:17px;box-shadow:0 30px 100px #0005,0 4px 20px #0002;padding:0;max-height:calc(100vh - 70px);overflow:hidden}.dialog[open]{animation:dialog-in .2s cubic-bezier(.22,1,.36,1)}.dialog::backdrop{background:var(--backdrop);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);animation:backdrop-in .2s ease}@keyframes dialog-in{0%{opacity:0;transform:translateY(6px) scale(.985)}to{opacity:1;transform:translateY(0) scale(1)}}@keyframes backdrop-in{0%{opacity:0}to{opacity:1}}.dialog-heading{padding:17px 20px 17px 25px;display:flex;align-items:center;justify-content:space-between;gap:20px;border-bottom:1px solid var(--border)}.dialog-heading h2{margin:0;font-size:var(--font-ui);font-weight:600}.settings-dialog{width:880px;max-width:calc(100vw - 64px)}.settings-layout{display:flex;height:min(590px,calc(100vh - 143px))}.settings-nav{width:168px;border-right:1px solid var(--border);padding:19px 12px;display:flex;flex-direction:column;gap:5px;flex-shrink:0;background:var(--soft-surface)}.settings-nav>button{display:flex;align-items:center;gap:9px;padding:11px 12px;font-size:var(--font-support);border-radius:8px;color:var(--muted);text-align:left}.settings-nav>button.selected{color:var(--text);background:var(--selected)}.settings-nav>button:hover{color:var(--text)}.settings-nav>button .muse-mark{flex-shrink:0;opacity:.78;transition:opacity .16s ease}.settings-nav>button.selected .muse-mark,.settings-nav>button:hover .muse-mark{opacity:1}.settings-content{padding:31px 30px;overflow:auto;flex:1;min-width:0}.settings-section-heading h3{font-family:var(--font-family-ui);font-size:29px;font-weight:400;letter-spacing:-.5px;margin:10px 0}.settings-section-heading p{color:var(--muted);font-size:var(--font-body);line-height:1.75;margin-bottom:23px}.theme-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:9px;margin:0 -3px 24px}.theme-card{padding:4px;border:1px solid transparent;border-radius:10px;text-align:left}.theme-card.selected{border-color:var(--accent);background:var(--selected)}.theme-card:hover{background:var(--hover)}.theme-thumbnail{aspect-ratio:1.35;position:relative;overflow:hidden;border-radius:6px;border:1px solid var(--border)}.theme-thumbnail>img{width:100%;height:100%;object-fit:cover;object-position:78% center}.theme-thumbnail.muse-thumbnail{background:linear-gradient(135deg,#003698,#092063)}.theme-thumbnail.muse-thumbnail>img{object-fit:contain;padding:9px}.theme-check{position:absolute;top:5px;right:5px;height:18px;width:18px;display:flex;align-items:center;justify-content:center;border-radius:50%;background:var(--primary);color:var(--on-primary)}.theme-name{display:flex;align-items:center;gap:5px;font-size:var(--font-support);font-weight:500;margin:10px 3px 6px}.theme-description{display:block;margin:0 3px 5px;color:var(--muted);font-size:var(--font-support);line-height:1.5}.setting-row{display:flex;justify-content:space-between;align-items:center;gap:18px;min-height:73px;padding:15px 0;border-top:1px solid var(--border)}.setting-label{display:flex;align-items:center;gap:7px;font-size:var(--font-ui);font-weight:500}.setting-row small{display:block;color:var(--muted);font-size:var(--font-support);line-height:1.6;margin-top:6px;max-width:290px}.switch{appearance:none;width:31px;height:18px;border-radius:15px;border:1px solid var(--strong-border);background:var(--disabled-button);position:relative;flex-shrink:0;cursor:pointer;transition:background .2s}.switch:after{content:"";display:block;height:12px;width:12px;position:absolute;top:2px;left:2px;background:var(--muted);border-radius:50%;transition:transform .2s}.switch:checked{background:var(--primary);border-color:var(--primary-border)}.switch:checked:after{background:var(--on-primary);transform:translate(12px)}.range-setting{display:flex;gap:9px;align-items:center;font-size:var(--font-support);color:var(--muted);width:150px}.range-setting input{width:110px;accent-color:var(--accent);height:3px;cursor:pointer}.range-setting span{min-width:26px}.segmented{display:flex;gap:2px;padding:3px;border:1px solid var(--border);border-radius:7px;background:var(--soft-surface)}.segmented>button{width:29px;height:24px;border-radius:4px}.segmented>button.selected{background:var(--selected);box-shadow:0 1px 3px #0002}.connection-card{display:flex;gap:11px;align-items:center;padding:16px;border:1px solid var(--border);background:var(--soft-surface);border-radius:10px}.connection-card>svg{color:var(--muted)}.connection-card.ready>svg{color:var(--green)}.connection-card>div{flex:1}.connection-card strong{font-size:var(--font-ui);font-weight:500}.connection-card span{display:block;margin-top:5px;color:var(--muted);font-size:var(--font-support);line-height:1.6}.path-readout{margin:10px 0 26px;color:var(--muted);font-size:var(--font-support);font-family:var(--font-family-code);overflow-wrap:anywhere}.field-label{display:block;font-size:var(--font-support);font-weight:500;margin:20px 0 10px}.text-input{background:var(--input);border:1px solid var(--border);border-radius:7px;padding:10px 11px;color:var(--text);width:100%;font-size:var(--font-ui)}.text-input::placeholder{color:var(--placeholder)}.input-with-button{display:flex;gap:7px}.input-with-button input{min-width:0}.field-hint{font-size:var(--font-support);color:var(--muted);line-height:1.7;margin:9px 0 18px}.setup-instructions{margin-top:28px;padding-top:22px;border-top:1px solid var(--border)}.setup-instructions h4{font-size:var(--font-ui);font-weight:500;margin:0 0 10px}.setup-instructions p{font-size:var(--font-support);line-height:1.8;color:var(--muted)}.setup-instructions code{background:var(--code-inline);padding:2px 4px;border-radius:4px;color:var(--text)}.about-settings{text-align:center}.about-settings>img{width:88px;height:88px;object-fit:contain}.about-settings h3{font-size:var(--font-brand);font-weight:500;margin:9px 0;letter-spacing:-.6px}.version-pill{display:inline-block;color:var(--muted);border:1px solid var(--border);border-radius:5px;padding:3px 7px;font-size:var(--font-support)}.about-settings>p{color:var(--muted);font-size:var(--font-support);line-height:1.85;margin:20px 0}.about-facts{border-top:1px solid var(--border);border-bottom:1px solid var(--border);padding:15px 0;text-align:left;max-width:290px;margin:0 auto}.about-facts>span{display:flex;justify-content:space-between;font-size:var(--font-support);padding:7px 0;color:var(--secondary-text)}.about-facts svg{color:var(--green)}.about-settings>p.affiliation-note{font-size:var(--font-support)}.command-dialog{width:580px;max-width:calc(100vw - 60px);margin-top:min(17vh,140px)}.command-dialog .dialog-heading{display:none}.command-search{display:flex;align-items:center;gap:12px;padding:21px;border-bottom:1px solid var(--border);color:var(--muted)}.command-search input{flex:1;border:0;background:transparent;color:var(--text);font-size:var(--font-body);padding:0;box-shadow:none}.command-search input::placeholder{color:var(--placeholder)}.command-results{padding:8px;max-height:360px;overflow:auto}.command-group-heading{padding:8px 12px 4px;font-size:11px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;color:var(--muted)}.command-results>button{width:100%;display:flex;align-items:center;gap:13px;padding:12px 13px;border-radius:8px;text-align:left}.command-results>button.selected{background:var(--selected)}.command-results>button>svg{color:var(--muted)}.command-results>button>span{flex:1;min-width:0}.command-results strong{display:block;font-weight:500;font-size:var(--font-ui);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.command-results small{display:block;color:var(--muted);font-size:var(--font-support);margin-top:4px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.command-dialog footer{display:flex;align-items:center;justify-content:center;gap:20px;font-size:var(--font-caption);color:var(--muted);padding:12px 19px;border-top:1px solid var(--border)}.command-dialog footer>span{display:inline-flex;align-items:center;gap:5px;line-height:1}.command-dialog footer kbd{display:inline-flex;align-items:center;justify-content:center;min-width:22px;height:20px;padding:0 5px;border:1px solid var(--border);border-radius:5px;background:var(--soft-surface);color:var(--secondary-text);font-family:var(--font-family-ui);font-size:11px;font-weight:500;line-height:1}.command-empty{text-align:center;padding:35px 20px;color:var(--muted);font-size:var(--font-ui)}.rename-dialog{width:430px}.rename-dialog form{padding:0 25px 25px}.toast{position:fixed;bottom:45px;left:50%;transform:translate(-50%);max-width:min(650px,calc(100vw - 60px));display:flex;align-items:center;gap:10px;padding:10px 12px 10px 17px;border-radius:11px;border:1px solid var(--strong-border);background:var(--dialog);box-shadow:0 7px 35px #0003;z-index:200;font-size:var(--font-ui);line-height:1.6}.toast.error{border-color:var(--error-border)}.toast.error>svg{color:var(--red)}.toast.success>svg{color:var(--green)}.toast>span{flex:1;overflow-wrap:anywhere}.workspace-page{overflow:auto;flex:1;min-height:0;padding:48px 50px 30px;position:relative}.page-heading{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-bottom:36px}.page-heading h1,.page-empty h1{font-family:var(--font-family-ui);font-size:var(--font-page);font-weight:400;letter-spacing:-.8px;margin:12px 0}.page-heading p{display:flex;align-items:center;gap:6px;color:var(--muted);margin:0;font-size:var(--font-ui);line-height:1.7}.page-heading>svg{color:var(--muted)}.project-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(235px,1fr));gap:16px}.project-card{background:var(--glass);border:1px solid var(--border);border-radius:13px;text-align:left;padding:22px;min-height:205px;transition:background .2s,transform .2s}.project-card:hover{background:var(--hover);transform:translateY(-2px)}.project-card-top{display:flex;align-items:flex-start;justify-content:space-between;gap:8px;margin-bottom:17px}.project-card-icon{display:inline-flex;padding:12px;border-radius:12px;background:var(--soft-surface);color:var(--accent)}.project-git-pills{display:flex;flex-wrap:wrap;justify-content:flex-end;gap:5px}.project-git-pill{display:inline-flex;align-items:center;gap:4px;padding:3px 8px;border-radius:999px;border:1px solid var(--border);background:var(--soft-surface);font-size:11px;color:var(--secondary-text);max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.project-git-pill.clean{color:var(--green)}.project-git-pill.dirty{color:var(--warning)}.project-card h2{font-size:var(--font-title);font-weight:500;margin:0 0 8px}.project-card p{font-family:var(--font-family-code);font-size:var(--font-support);color:var(--muted);overflow-wrap:anywhere;line-height:1.7}.project-card footer{display:flex;justify-content:space-between;color:var(--muted);font-size:var(--font-support);margin-top:20px;padding-top:15px;border-top:1px solid var(--border)}.add-project{border-style:dashed;background:transparent;display:flex;align-items:center;justify-content:center;flex-direction:column;color:var(--muted)}.add-project h2{margin-top:17px;font-size:var(--font-ui)}.add-project p{font-family:inherit;font-size:var(--font-support)}.page-footnote{font-size:var(--font-support);color:var(--muted);line-height:1.7;margin:28px 0 0}.page-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center}.page-empty>svg{color:var(--accent);margin-bottom:15px}.page-empty>p{font-size:var(--font-ui);line-height:1.8;color:var(--muted);max-width:360px}.page-empty .button{margin-top:17px}.files-page{display:flex;flex-direction:column}.files-page .page-heading{margin-bottom:22px}.files-breadcrumbs{display:flex;align-items:center;flex-wrap:wrap;gap:5px;color:var(--muted);font-size:var(--font-support);margin-top:6px}.breadcrumb-part{display:inline-flex;align-items:center;gap:5px}.breadcrumb-segment{display:inline-flex;align-items:center;gap:6px;padding:4px 8px;border-radius:6px;color:var(--secondary-text);font-size:var(--font-support);transition:background-color .16s ease,color .16s ease}button.breadcrumb-segment:hover{background:var(--hover);color:var(--text)}.breadcrumb-segment.current{color:var(--text);font-weight:500;background:var(--soft-surface)}.file-browser{flex:1;display:grid;grid-template-columns:minmax(220px,31%) minmax(0,1fr);min-height:240px;border:1px solid var(--border);border-radius:15px;background:var(--glass);-webkit-backdrop-filter:blur(18px);backdrop-filter:blur(18px);box-shadow:var(--composer-shadow);overflow:hidden}.file-browser-sidebar{border-right:1px solid var(--border);display:flex;flex-direction:column;min-height:0;min-width:0;background:var(--soft-surface)}.file-search-bar{padding:12px 12px 10px;border-bottom:1px solid var(--faint-border);flex-shrink:0}.file-search{display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:8px;border:1px solid var(--border);background:var(--input);color:var(--muted);transition:border-color .18s ease,box-shadow .18s ease}.file-search:focus-within{border-color:var(--focus);box-shadow:0 0 0 2px var(--focus-soft)}.file-search input{width:100%;background:transparent;border:0;color:var(--text);font-size:var(--font-support);box-shadow:none}.file-search input::placeholder{color:var(--placeholder)}.file-search-clear{display:inline-flex;align-items:center;justify-content:center;padding:2px;border-radius:4px;color:var(--muted)}.file-search-clear:hover{background:var(--hover);color:var(--text)}.file-browser-list{flex:1;min-height:0;overflow-y:auto;padding:8px 10px}.file-row{display:flex;width:100%;align-items:center;gap:9px;text-align:left;padding:8px 10px;margin-bottom:2px;border-radius:8px;font-size:var(--font-support);color:var(--secondary-text);transition:background-color .16s ease,color .16s ease}.file-row>span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}.file-icon{color:var(--muted);flex-shrink:0;transition:color .16s ease}.file-icon.folder{color:var(--accent)}.file-row-chevron{color:var(--muted);opacity:.65;transition:transform .16s ease}.file-row:hover .file-row-chevron{transform:translate(2px);opacity:1}.file-row:hover{background:var(--hover);color:var(--text)}.file-row.selected{background:var(--selected);color:var(--text);font-weight:500}.file-row.selected .file-icon,.file-row:hover .file-icon{color:var(--accent)}.parent-folder{color:var(--muted);font-size:var(--font-support);margin-bottom:6px;border-bottom:1px solid var(--faint-border);border-radius:8px 8px 0 0}.file-preview{display:flex;flex-direction:column;min-width:0;min-height:0;overflow:hidden;background:var(--code-background)}.file-preview>header{display:flex;gap:12px;padding:11px 18px;align-items:center;justify-content:space-between;border-bottom:1px solid var(--border);background:var(--soft-surface);font-size:var(--font-support);color:var(--muted)}.file-preview-title{display:flex;align-items:center;gap:8px;min-width:0;color:var(--text);font-weight:500}.file-preview-title>svg{color:var(--accent)}.file-preview-title>span{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.file-preview-title>small{font-size:11px;font-weight:400;color:var(--muted);padding:2px 7px;border-radius:999px;border:1px solid var(--border);background:var(--soft-surface);flex-shrink:0}.file-ask-button.text-button{font-size:var(--font-support);white-space:nowrap;padding:5px 10px;border-radius:7px;border:1px solid var(--border);background:var(--surface);color:var(--text);text-decoration:none;transition:background-color .16s ease,border-color .16s ease}.file-ask-button.text-button:hover{background:var(--hover);border-color:var(--strong-border);text-decoration:none}.file-preview>pre{margin:0;overflow:auto;font-family:var(--font-family-code);font-size:var(--font-support);line-height:1.85;padding:18px 20px;flex:1}.file-preview-empty{margin:auto;text-align:center;padding:32px 24px;max-width:320px;color:var(--muted)}.file-empty-badge{width:52px;height:52px;border-radius:15px;display:inline-flex;align-items:center;justify-content:center;background:var(--soft-surface);border:1px solid var(--border);color:var(--accent)}.file-preview-empty h3{font-size:var(--font-title);font-weight:500;color:var(--text);margin:16px 0 8px}.file-preview-empty p{font-size:var(--font-support);line-height:1.65;color:var(--muted)}.file-list-message{font-size:var(--font-support);color:var(--muted);padding:14px 10px;line-height:1.7}.file-list-footnote{display:flex;align-items:center;gap:6px;font-size:11.5px;color:var(--muted);padding:9px 14px;border-top:1px solid var(--border);background:var(--soft-surface);flex-shrink:0}.docs-page{width:100%}.docs-container{max-width:850px;width:100%;margin:0 auto}.guides{border:1px solid var(--border);border-radius:14px;background:var(--glass);-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);overflow:hidden}.guide-item{border-bottom:1px solid var(--border);transition:background-color .2s ease}.guide-item:last-child{border-bottom:0}.guide-item:hover{background:var(--soft-surface)}.guide-summary{width:100%;display:flex;align-items:center;gap:13px;font-size:var(--font-ui);font-weight:450;padding:19px 20px;text-align:left;color:var(--text);cursor:pointer}.guide-number{font-family:var(--font-family-code);font-size:var(--font-caption);color:var(--muted)}.guide-chevron{margin-left:auto;color:var(--muted);transition:transform .28s cubic-bezier(.22,1,.36,1),color .18s ease}.guide-item.open .guide-chevron{transform:rotate(90deg);color:var(--accent)}.guide-collapse{display:grid;grid-template-rows:0fr;opacity:0;transition:grid-template-rows .3s cubic-bezier(.22,1,.36,1),opacity .24s cubic-bezier(.22,1,.36,1)}.guide-collapse.open{grid-template-rows:1fr;opacity:1}.guide-collapse-inner{min-height:0;overflow:hidden}.guide-collapse-inner p{margin:0 20px 20px 49px;font-size:var(--font-body);line-height:1.85;color:var(--secondary-text)}.shortcuts-guide{padding:30px 0;max-width:390px}.shortcuts-guide h2{font-size:var(--font-ui);font-weight:500;margin-bottom:16px}.shortcuts-guide div{display:flex;justify-content:space-between;margin:12px 0;color:var(--secondary-text);font-size:var(--font-support)}.shortcuts-guide kbd{padding:2px 6px;border-radius:4px;border:1px solid var(--border)}.fatal-error{display:flex;flex-direction:column;align-items:center;justify-content:center;height:100vh;padding:40px;text-align:center}.fatal-error>img{width:100px}.fatal-error h1{font-family:var(--font-family-ui);font-weight:400}.fatal-error p{line-height:1.8;max-width:480px;color:var(--muted)}.fatal-error pre{margin-bottom:25px;color:var(--red);white-space:pre-wrap}.spin{animation:rotate 1.5s linear infinite}.spinner{height:13px;width:13px;border:1.5px solid currentColor;border-right-color:transparent;border-radius:50%;animation:rotate .8s linear infinite}@keyframes rotate{to{transform:rotate(360deg)}}@keyframes breathe{0%,to{opacity:1}50%{opacity:.45}}:is([data-theme=muse],[data-theme=plush]) .muse-mark{filter:brightness(0) invert(1)}:is([data-theme=muse],[data-theme=plush]) .sidebar{box-shadow:inset -1px 0 #7eadff0a}:is([data-theme=muse],[data-theme=plush]) .sidebar-titlebar{color:#b8d2ff}:is([data-theme=muse],[data-theme=plush]) .desktop-tag{opacity:.6}:is([data-theme=muse],[data-theme=plush]) .main-nav button.selected>svg{filter:drop-shadow(0 0 5px #8cd2ff99)}:is([data-theme=muse],[data-theme=plush]) .chat-brand-background{opacity:calc(var(--background-presence) * .95);filter:drop-shadow(0 1px 0 #5db2ff24)}:is([data-theme=muse],[data-theme=plush]) .welcome-content{padding:0;position:absolute;bottom:15px;left:50%;transform:translate(-50%)}:is([data-theme=muse],[data-theme=plush]) .welcome-kicker,:is([data-theme=muse],[data-theme=plush]) .welcome h1,:is([data-theme=muse],[data-theme=plush]) .welcome-subtitle,:is([data-theme=muse],[data-theme=plush]) .project-local{display:none}:is([data-theme=muse],[data-theme=plush]) .welcome-project{justify-content:flex-start}:is([data-theme=muse],[data-theme=plush]) .project-chip{background:#1e60c129;border-color:#80b8ff22;color:#c4d8fc;font-size:var(--font-support);-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px)}:is([data-theme=muse],[data-theme=plush]) .starter-section{display:none}:is([data-theme=muse],[data-theme=plush]) .composer-tools .icon-button{background:#407de350;border:1px solid #80b6ff36;color:#d9e8ff}:is([data-theme=muse],[data-theme=plush]) .select-control{background:#2767c738;border-radius:15px;padding:5px 10px;gap:7px}:is([data-theme=muse],[data-theme=plush]) .composer-tools .muse-select .select-control{min-height:38px;background:#2767c738;border-color:transparent;border-radius:15px;padding:7px 12px;gap:6px}:is([data-theme=muse],[data-theme=plush]) .composer-tools .muse-select .select-control:hover{background:#3578de4d}:is([data-theme=muse],[data-theme=plush]) .send-button:disabled{border:1px solid #8db9ff88;opacity:.9;box-shadow:0 0 18px #287bff22}:is([data-theme=muse],[data-theme=plush]) .composer-footnote kbd{background:#2767c745;border-color:#80b6ff33;color:#d9e8ff}:is([data-theme=muse],[data-theme=plush]) .main-workspace:has(.transcript,.loading-conversation) .chat-brand-background{opacity:calc(var(--background-presence) * .092)}@media(max-width:1100px){.app-shell{grid-template-columns:244px minmax(0,1fr) 0px}.app-shell.with-inspector{grid-template-columns:244px minmax(0,1fr) 250px}.app-shell.sidebar-hidden{grid-template-columns:0px minmax(0,1fr) 0px}.app-shell.sidebar-hidden.with-inspector{grid-template-columns:0px minmax(0,1fr) 250px}.sidebar{width:244px}.inspector{width:250px}.starter-arrow,.statusbar-motto,.local-pill{display:none}.welcome-content,.starter-section,.composer-dock,.transcript{width:calc(100% - 64px)}.with-inspector .welcome-content,.with-inspector .starter-section,.with-inspector .composer-dock,.with-inspector .transcript{width:calc(100% - 38px)}.starter-card{padding:14px 10px;gap:7px;flex-direction:column}.starter-card small{font-size:var(--font-support);white-space:normal}.with-inspector .starter-grid{grid-template-columns:1fr;gap:5px}.with-inspector .starter-card{flex-direction:row;padding:10px;align-items:center}.with-inspector .starter-card small{display:none}.with-inspector .welcome-subtitle{max-width:220px}.with-inspector .welcome-subtitle br{display:none}.with-inspector .composer-footnote>span:first-child{display:none}.with-inspector .effort-select{display:none}.with-inspector .welcome-content{padding-top:40px}.workspace-page{padding:36px 28px}.window-tools{gap:2px}}@media(max-height:780px){.sidebar-companion{height:54px}.main-nav{gap:2px;padding-bottom:7px}.main-nav button{padding:8px 13px}.brand{padding-bottom:12px}:is([data-theme=muse],[data-theme=plush]) .brand{padding-bottom:12px}.sidebar-primary{padding-bottom:3px}.welcome-content{padding-top:35px}.welcome h1{font-size:38px}.welcome-kicker{margin-bottom:17px}.welcome-subtitle{margin-bottom:18px}.starter-section{padding-top:12px;margin-bottom:15px}.starter-card{padding-top:12px;padding-bottom:12px}.composer-dock{padding-bottom:11px}}@media(max-height:740px){.sidebar-companion{display:none}.main-nav{display:grid;grid-template-columns:repeat(5,1fr);gap:3px}.main-nav button{justify-content:center;padding:10px 0}.main-nav button>span{display:none}}@media(max-height:660px){.sidebar-companion{display:none}.sidebar-empty{padding-top:5px}.welcome{min-height:260px}.welcome-content{padding-top:20px}.welcome h1{font-size:33px;margin-bottom:12px}.welcome-subtitle{font-size:var(--font-body);margin-bottom:12px}.welcome-kicker{margin-bottom:11px}.starter-label{display:none}.composer textarea{min-height:43px}.composer{padding-top:13px}}@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}[data-reduce-motion=true] *,[data-reduce-motion=true] *:before,[data-reduce-motion=true] *:after{animation:none!important;transition:none!important;scroll-behavior:auto!important}[data-theme=plush] .chat-brand-background{background-image:linear-gradient(0deg,#06256588,transparent 40%),url(/themes/plush.png);background-size:cover;background-position:center right;opacity:var(--background-presence);filter:none}[data-theme=plush] .main-workspace:has(.transcript,.loading-conversation) .chat-brand-background{opacity:calc(var(--background-presence) * .09)}.conversation-group-label{width:100%;display:inline-flex;align-items:center;gap:6px;padding:5px 10px;margin:4px 0 2px;border-radius:6px;font-size:var(--font-caption);font-weight:600;color:var(--muted);text-align:left;transition:background-color .18s ease,color .18s ease}.conversation-group-label:hover{background:var(--hover);color:var(--text)}.conversation-group-label .section-chevron{opacity:0}.conversation-group-label:hover .section-chevron,.conversation-group-label .section-chevron.collapsed{opacity:.75}.conversation-copy{min-width:0;flex:1;display:flex;flex-direction:column;gap:3px}.conversation-copy .conversation-title{flex:none;font-weight:500}.conversation-project{font-size:var(--font-caption);color:var(--muted);overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.history-status{display:flex;align-items:center;gap:8px;padding:12px 10px;color:var(--muted);font-size:var(--font-support)}.history-error{padding:12px 10px;font-size:var(--font-support);color:var(--error-text)}.history-error p{margin-bottom:8px}.muse-select{min-width:0}.muse-select .select-control{width:100%;font:inherit;font-size:var(--font-support);cursor:pointer;border:0;background:transparent}.select-value{min-width:0;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.model-select .select-value{max-width:178px}.select-chevron{flex:0 0 auto;margin-left:auto;opacity:.7;transition:transform .22s cubic-bezier(.22,1,.36,1)}.select-control[aria-expanded=true] .select-chevron{transform:rotate(180deg)}.select-control[aria-expanded=true]{background:var(--selected)}.select-control:disabled{cursor:default;opacity:.55}.project-switcher .muse-select{flex:1}.project-switcher .select-control{min-height:32px;padding:6px 10px;gap:10px;border-radius:8px;border:1px solid var(--border);background:var(--soft-surface);text-align:left}.project-switcher .select-control:hover{background:var(--hover);border-color:var(--strong-border);color:var(--text)}.project-switcher .select-control:hover .sidebar-item-icon{color:var(--text)}.select-popover{position:fixed;inset:auto;margin:0;padding:6px;max-width:calc(100vw - 16px);overflow-y:auto;border-radius:14px;border:1px solid var(--border);color:var(--text);background:var(--dialog);box-shadow:0 16px 48px #0004,inset 0 1px #ffffff10;font-size:var(--font-ui)}.select-heading{padding:7px 10px 9px;font-size:var(--font-support);color:var(--muted)}.select-option{display:flex;align-items:center;gap:9px;padding:9px 10px;border-radius:8px;cursor:pointer;white-space:nowrap;transition:background-color .14s ease}.select-option.highlighted{background:var(--selected)}.select-option[aria-selected=true]{color:var(--accent)}.select-option span{overflow:hidden;text-overflow:ellipsis}:is([data-theme=muse],[data-theme=plush]) .muse-select .select-control{background:#2767c738;padding:6px 12px}:is([data-theme=muse],[data-theme=plush]) .project-switcher .select-control{background:var(--soft-surface);padding:6px 10px}:is([data-theme=muse],[data-theme=plush]) .project-switcher .select-control:hover{background:var(--hover)}:is([data-theme=muse],[data-theme=plush]) .select-option[aria-selected=true]{color:#e3edff}.voice-control{display:flex;align-items:center}.voice-control.recording .icon-button{color:#e85d6f}.voice-status{position:absolute;bottom:calc(100% + 10px);left:0;display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:12px;border:1px solid var(--border);background:var(--dialog);color:var(--text);font-size:var(--font-support);box-shadow:0 8px 28px #0002}.voice-waveform{display:inline-flex;align-items:center;gap:2.5px;height:14px}.voice-wave-bar{width:2.5px;height:14px;border-radius:999px;background:#e85d6f;transform-origin:center;transition:transform .1s ease}.voice-status .icon-button{width:25px;height:25px}.composer.is-dragging{border-color:var(--focus);box-shadow:var(--composer-shadow),0 0 0 3px var(--focus-soft)}.mention-menu button{gap:10px}.mention-menu strong{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.slash-menu{position:absolute;bottom:calc(100% + 10px);left:0;right:0;max-height:290px;overflow-y:auto;padding:7px;z-index:8;background:var(--dialog);border:1px solid var(--strong-border);border-radius:15px;box-shadow:0 12px 32px #0003}.slash-menu button{display:flex;align-items:center;gap:18px;width:100%;padding:10px 12px;border-radius:8px;text-align:left;font-size:var(--font-ui)}.slash-menu button[aria-selected=true],.slash-menu button:hover{background:var(--selected)}.slash-menu strong{min-width:72px;font-weight:500}.slash-menu span{color:var(--muted);font-size:var(--font-support)}textarea,input,[contenteditable=true]{caret-color:var(--text,#30332f)}[data-theme=daylight] textarea,[data-theme=grove] textarea{caret-color:#26362b;color-scheme:light}.app-shell[data-theme]{color:var(--text);background:var(--app-background)}';
class gO extends Q.Component {
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
const xO = mO;
function yO(t) {
  const i = fS.createRoot(t);
  return i.render(
    /* @__PURE__ */ h.jsx(gO, { children: /* @__PURE__ */ h.jsx(hO, {}) })
  ), () => i.unmount();
}
export {
  yO as mount,
  xO as styles
};
