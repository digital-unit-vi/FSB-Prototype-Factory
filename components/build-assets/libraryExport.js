import * as D from "react";
import Dt, { useCallback as be, createContext as Ie, useMemo as ze, createElement as G, useContext as ue, useLayoutEffect as ni, useRef as k, useEffect as B, useState as N, forwardRef as ge, Children as Ne, isValidElement as Ht, cloneElement as ht, Fragment as Zr, useReducer as Fc, useInsertionEffect as ri, useId as si, Component as qc, useImperativeHandle as Wc } from "react";
import { flushSync as ba, createPortal as Uc } from "react-dom";
var tr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function _a(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Vs = { exports: {} }, vn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ao;
function Gc() {
  if (ao)
    return vn;
  ao = 1;
  var e = Dt, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(l, c, d) {
    var f, u = {}, h = null, p = null;
    d !== void 0 && (h = "" + d), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && (p = c.ref);
    for (f in c)
      r.call(c, f) && !o.hasOwnProperty(f) && (u[f] = c[f]);
    if (l && l.defaultProps)
      for (f in c = l.defaultProps, c)
        u[f] === void 0 && (u[f] = c[f]);
    return { $$typeof: t, type: l, key: h, ref: p, props: u, _owner: s.current };
  }
  return vn.Fragment = n, vn.jsx = a, vn.jsxs = a, vn;
}
var gn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lo;
function Kc() {
  return lo || (lo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Dt, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), l = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v = Symbol.iterator, m = "@@iterator";
    function w(g) {
      if (g === null || typeof g != "object")
        return null;
      var S = v && g[v] || g[m];
      return typeof S == "function" ? S : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(g) {
      {
        for (var S = arguments.length, T = new Array(S > 1 ? S - 1 : 0), H = 1; H < S; H++)
          T[H - 1] = arguments[H];
        C("error", g, T);
      }
    }
    function C(g, S, T) {
      {
        var H = x.ReactDebugCurrentFrame, K = H.getStackAddendum();
        K !== "" && (S += "%s", T = T.concat([K]));
        var te = T.map(function(U) {
          return String(U);
        });
        te.unshift("Warning: " + S), Function.prototype.apply.call(console[g], console, te);
      }
    }
    var _ = !1, j = !1, M = !1, L = !1, b = !1, V;
    V = Symbol.for("react.module.reference");
    function E(g) {
      return !!(typeof g == "string" || typeof g == "function" || g === r || g === o || b || g === s || g === d || g === f || L || g === p || _ || j || M || typeof g == "object" && g !== null && (g.$$typeof === h || g.$$typeof === u || g.$$typeof === a || g.$$typeof === l || g.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      g.$$typeof === V || g.getModuleId !== void 0));
    }
    function Z(g, S, T) {
      var H = g.displayName;
      if (H)
        return H;
      var K = S.displayName || S.name || "";
      return K !== "" ? T + "(" + K + ")" : T;
    }
    function J(g) {
      return g.displayName || "Context";
    }
    function F(g) {
      if (g == null)
        return null;
      if (typeof g.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof g == "function")
        return g.displayName || g.name || null;
      if (typeof g == "string")
        return g;
      switch (g) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case o:
          return "Profiler";
        case s:
          return "StrictMode";
        case d:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case l:
            var S = g;
            return J(S) + ".Consumer";
          case a:
            var T = g;
            return J(T._context) + ".Provider";
          case c:
            return Z(g, g.render, "ForwardRef");
          case u:
            var H = g.displayName || null;
            return H !== null ? H : F(g.type) || "Memo";
          case h: {
            var K = g, te = K._payload, U = K._init;
            try {
              return F(U(te));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var q = Object.assign, O = 0, Q, Y, de, xe, je, we, Pe;
    function Se() {
    }
    Se.__reactDisabledLog = !0;
    function rt() {
      {
        if (O === 0) {
          Q = console.log, Y = console.info, de = console.warn, xe = console.error, je = console.group, we = console.groupCollapsed, Pe = console.groupEnd;
          var g = {
            configurable: !0,
            enumerable: !0,
            value: Se,
            writable: !0
          };
          Object.defineProperties(console, {
            info: g,
            log: g,
            warn: g,
            error: g,
            group: g,
            groupCollapsed: g,
            groupEnd: g
          });
        }
        O++;
      }
    }
    function Ue() {
      {
        if (O--, O === 0) {
          var g = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: q({}, g, {
              value: Q
            }),
            info: q({}, g, {
              value: Y
            }),
            warn: q({}, g, {
              value: de
            }),
            error: q({}, g, {
              value: xe
            }),
            group: q({}, g, {
              value: je
            }),
            groupCollapsed: q({}, g, {
              value: we
            }),
            groupEnd: q({}, g, {
              value: Pe
            })
          });
        }
        O < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var $ = x.ReactCurrentDispatcher, re;
    function ee(g, S, T) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (K) {
            var H = K.stack.trim().match(/\n( *(at )?)/);
            re = H && H[1] || "";
          }
        return `
` + re + g;
      }
    }
    var pe = !1, ne;
    {
      var X = typeof WeakMap == "function" ? WeakMap : Map;
      ne = new X();
    }
    function P(g, S) {
      if (!g || pe)
        return "";
      {
        var T = ne.get(g);
        if (T !== void 0)
          return T;
      }
      var H;
      pe = !0;
      var K = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var te;
      te = $.current, $.current = null, rt();
      try {
        if (S) {
          var U = function() {
            throw Error();
          };
          if (Object.defineProperty(U.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(U, []);
            } catch (at) {
              H = at;
            }
            Reflect.construct(g, [], U);
          } else {
            try {
              U.call();
            } catch (at) {
              H = at;
            }
            g.call(U.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (at) {
            H = at;
          }
          g();
        }
      } catch (at) {
        if (at && H && typeof at.stack == "string") {
          for (var I = at.stack.split(`
`), Ve = H.stack.split(`
`), le = I.length - 1, fe = Ve.length - 1; le >= 1 && fe >= 0 && I[le] !== Ve[fe]; )
            fe--;
          for (; le >= 1 && fe >= 0; le--, fe--)
            if (I[le] !== Ve[fe]) {
              if (le !== 1 || fe !== 1)
                do
                  if (le--, fe--, fe < 0 || I[le] !== Ve[fe]) {
                    var Ae = `
` + I[le].replace(" at new ", " at ");
                    return g.displayName && Ae.includes("<anonymous>") && (Ae = Ae.replace("<anonymous>", g.displayName)), typeof g == "function" && ne.set(g, Ae), Ae;
                  }
                while (le >= 1 && fe >= 0);
              break;
            }
        }
      } finally {
        pe = !1, $.current = te, Ue(), Error.prepareStackTrace = K;
      }
      var qt = g ? g.displayName || g.name : "", oo = qt ? ee(qt) : "";
      return typeof g == "function" && ne.set(g, oo), oo;
    }
    function W(g, S, T) {
      return P(g, !1);
    }
    function oe(g) {
      var S = g.prototype;
      return !!(S && S.isReactComponent);
    }
    function ae(g, S, T) {
      if (g == null)
        return "";
      if (typeof g == "function")
        return P(g, oe(g));
      if (typeof g == "string")
        return ee(g);
      switch (g) {
        case d:
          return ee("Suspense");
        case f:
          return ee("SuspenseList");
      }
      if (typeof g == "object")
        switch (g.$$typeof) {
          case c:
            return W(g.render);
          case u:
            return ae(g.type, S, T);
          case h: {
            var H = g, K = H._payload, te = H._init;
            try {
              return ae(te(K), S, T);
            } catch {
            }
          }
        }
      return "";
    }
    var ye = Object.prototype.hasOwnProperty, Me = {}, Le = x.ReactDebugCurrentFrame;
    function He(g) {
      if (g) {
        var S = g._owner, T = ae(g.type, g._source, S ? S.type : null);
        Le.setExtraStackFrame(T);
      } else
        Le.setExtraStackFrame(null);
    }
    function un(g, S, T, H, K) {
      {
        var te = Function.call.bind(ye);
        for (var U in g)
          if (te(g, U)) {
            var I = void 0;
            try {
              if (typeof g[U] != "function") {
                var Ve = Error((H || "React class") + ": " + T + " type `" + U + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof g[U] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ve.name = "Invariant Violation", Ve;
              }
              I = g[U](S, U, H, T, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (le) {
              I = le;
            }
            I && !(I instanceof Error) && (He(K), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", H || "React class", T, U, typeof I), He(null)), I instanceof Error && !(I.message in Me) && (Me[I.message] = !0, He(K), y("Failed %s type: %s", T, I.message), He(null));
          }
      }
    }
    var dn = Array.isArray;
    function $t(g) {
      return dn(g);
    }
    function Xn(g) {
      {
        var S = typeof Symbol == "function" && Symbol.toStringTag, T = S && g[Symbol.toStringTag] || g.constructor.name || "Object";
        return T;
      }
    }
    function Yr(g) {
      try {
        return fn(g), !1;
      } catch {
        return !0;
      }
    }
    function fn(g) {
      return "" + g;
    }
    function Jn(g) {
      if (Yr(g))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xn(g)), fn(g);
    }
    var st = x.ReactCurrentOwner, it = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, It, zt, pt;
    pt = {};
    function Xr(g) {
      if (ye.call(g, "ref")) {
        var S = Object.getOwnPropertyDescriptor(g, "ref").get;
        if (S && S.isReactWarning)
          return !1;
      }
      return g.ref !== void 0;
    }
    function Jr(g) {
      if (ye.call(g, "key")) {
        var S = Object.getOwnPropertyDescriptor(g, "key").get;
        if (S && S.isReactWarning)
          return !1;
      }
      return g.key !== void 0;
    }
    function Qr(g, S) {
      if (typeof g.ref == "string" && st.current && S && st.current.stateNode !== S) {
        var T = F(st.current.type);
        pt[T] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(st.current.type), g.ref), pt[T] = !0);
      }
    }
    function es(g, S) {
      {
        var T = function() {
          It || (It = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        T.isReactWarning = !0, Object.defineProperty(g, "key", {
          get: T,
          configurable: !0
        });
      }
    }
    function Qn(g, S) {
      {
        var T = function() {
          zt || (zt = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", S));
        };
        T.isReactWarning = !0, Object.defineProperty(g, "ref", {
          get: T,
          configurable: !0
        });
      }
    }
    var ts = function(g, S, T, H, K, te, U) {
      var I = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: g,
        key: S,
        ref: T,
        props: U,
        // Record the component responsible for creating this element.
        _owner: te
      };
      return I._store = {}, Object.defineProperty(I._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(I, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: H
      }), Object.defineProperty(I, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: K
      }), Object.freeze && (Object.freeze(I.props), Object.freeze(I)), I;
    };
    function er(g, S, T, H, K) {
      {
        var te, U = {}, I = null, Ve = null;
        T !== void 0 && (Jn(T), I = "" + T), Jr(S) && (Jn(S.key), I = "" + S.key), Xr(S) && (Ve = S.ref, Qr(S, K));
        for (te in S)
          ye.call(S, te) && !it.hasOwnProperty(te) && (U[te] = S[te]);
        if (g && g.defaultProps) {
          var le = g.defaultProps;
          for (te in le)
            U[te] === void 0 && (U[te] = le[te]);
        }
        if (I || Ve) {
          var fe = typeof g == "function" ? g.displayName || g.name || "Unknown" : g;
          I && es(U, fe), Ve && Qn(U, fe);
        }
        return ts(g, I, Ve, K, H, st.current, U);
      }
    }
    var hn = x.ReactCurrentOwner, pn = x.ReactDebugCurrentFrame;
    function ot(g) {
      if (g) {
        var S = g._owner, T = ae(g.type, g._source, S ? S.type : null);
        pn.setExtraStackFrame(T);
      } else
        pn.setExtraStackFrame(null);
    }
    var mn;
    mn = !1;
    function Ft(g) {
      return typeof g == "object" && g !== null && g.$$typeof === t;
    }
    function to() {
      {
        if (hn.current) {
          var g = F(hn.current.type);
          if (g)
            return `

Check the render method of \`` + g + "`.";
        }
        return "";
      }
    }
    function Zc(g) {
      {
        if (g !== void 0) {
          var S = g.fileName.replace(/^.*[\\\/]/, ""), T = g.lineNumber;
          return `

Check your code at ` + S + ":" + T + ".";
        }
        return "";
      }
    }
    var no = {};
    function Bc(g) {
      {
        var S = to();
        if (!S) {
          var T = typeof g == "string" ? g : g.displayName || g.name;
          T && (S = `

Check the top-level render call using <` + T + ">.");
        }
        return S;
      }
    }
    function ro(g, S) {
      {
        if (!g._store || g._store.validated || g.key != null)
          return;
        g._store.validated = !0;
        var T = Bc(S);
        if (no[T])
          return;
        no[T] = !0;
        var H = "";
        g && g._owner && g._owner !== hn.current && (H = " It was passed a child from " + F(g._owner.type) + "."), ot(g), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', T, H), ot(null);
      }
    }
    function so(g, S) {
      {
        if (typeof g != "object")
          return;
        if ($t(g))
          for (var T = 0; T < g.length; T++) {
            var H = g[T];
            Ft(H) && ro(H, S);
          }
        else if (Ft(g))
          g._store && (g._store.validated = !0);
        else if (g) {
          var K = w(g);
          if (typeof K == "function" && K !== g.entries)
            for (var te = K.call(g), U; !(U = te.next()).done; )
              Ft(U.value) && ro(U.value, S);
        }
      }
    }
    function Dc(g) {
      {
        var S = g.type;
        if (S == null || typeof S == "string")
          return;
        var T;
        if (typeof S == "function")
          T = S.propTypes;
        else if (typeof S == "object" && (S.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        S.$$typeof === u))
          T = S.propTypes;
        else
          return;
        if (T) {
          var H = F(S);
          un(T, g.props, "prop", H, g);
        } else if (S.PropTypes !== void 0 && !mn) {
          mn = !0;
          var K = F(S);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", K || "Unknown");
        }
        typeof S.getDefaultProps == "function" && !S.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Nc(g) {
      {
        for (var S = Object.keys(g.props), T = 0; T < S.length; T++) {
          var H = S[T];
          if (H !== "children" && H !== "key") {
            ot(g), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", H), ot(null);
            break;
          }
        }
        g.ref !== null && (ot(g), y("Invalid attribute `ref` supplied to `React.Fragment`."), ot(null));
      }
    }
    function io(g, S, T, H, K, te) {
      {
        var U = E(g);
        if (!U) {
          var I = "";
          (g === void 0 || typeof g == "object" && g !== null && Object.keys(g).length === 0) && (I += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ve = Zc(K);
          Ve ? I += Ve : I += to();
          var le;
          g === null ? le = "null" : $t(g) ? le = "array" : g !== void 0 && g.$$typeof === t ? (le = "<" + (F(g.type) || "Unknown") + " />", I = " Did you accidentally export a JSX literal instead of a component?") : le = typeof g, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", le, I);
        }
        var fe = er(g, S, T, K, te);
        if (fe == null)
          return fe;
        if (U) {
          var Ae = S.children;
          if (Ae !== void 0)
            if (H)
              if ($t(Ae)) {
                for (var qt = 0; qt < Ae.length; qt++)
                  so(Ae[qt], g);
                Object.freeze && Object.freeze(Ae);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              so(Ae, g);
        }
        return g === r ? Nc(fe) : Dc(fe), fe;
      }
    }
    function Oc(g, S, T) {
      return io(g, S, T, !0);
    }
    function $c(g, S, T) {
      return io(g, S, T, !1);
    }
    var Ic = $c, zc = Oc;
    gn.Fragment = r, gn.jsx = Ic, gn.jsxs = zc;
  }()), gn;
}
process.env.NODE_ENV === "production" ? Vs.exports = Gc() : Vs.exports = Kc();
var i = Vs.exports;
var ja = "_5yj2ss0";
const A = (...e) => (e == null ? void 0 : e.filter((n) => typeof n != "string" || !n.length ? !1 : n.trim())).join(" ").trim();
var Fe = "eit9bw1";
var Yc = "_14h5rnw1", Xc = "_14h5rnw0", Jc = "_14h5rnw2";
const vp = ({ children: e }) => /* @__PURE__ */ i.jsx("div", { className: A(Yc, Fe), children: e }), gp = ({
  header: e,
  logos: t,
  bigLogos: n
}) => {
  const r = n ? Xc : "";
  return (
    // <DarkTheme>
    /* @__PURE__ */ i.jsxs("div", { className: A(Jc, ja, r), children: [
      e,
      t && /* @__PURE__ */ i.jsx("ul", { children: t.map((s, o) => /* @__PURE__ */ i.jsx("li", { children: s }, o)) })
    ] })
  );
}, xp = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    focusable: "false",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M12.49 6.05c-.13-.14 0-.36.18-.35 1.63.16 3.06.94 4.08 2.1.2.23.27.55.2.84-.1.41-.27.84-.59 1.33C15.18 11.89 12.18 12 12 12c0 0 1.66 1.28 3.92 1.2.94 0 1.6-.33 2.03-.72.14-.13.36 0 .35.18a6.226 6.226 0 0 1-2.1 4.08.95.95 0 0 1-.84.2c-.41-.1-.84-.27-1.33-.59-1.92-1.18-2.03-4.18-2.03-4.36 0 0-1.28 1.66-1.2 3.92 0 .94.33 1.6.72 2.03.13.14 0 .36-.18.35a6.226 6.226 0 0 1-4.08-2.1.95.95 0 0 1-.2-.84c.1-.41.27-.84.59-1.33 1.18-1.92 4.18-2.03 4.36-2.03 0 0-1.66-1.28-3.92-1.2-.94 0-1.6.33-2.03.72-.14.13-.36 0-.35-.18.16-1.63.94-3.07 2.1-4.08.23-.2.55-.27.84-.2.41.1.84.27 1.33.59 1.92 1.18 2.03 4.18 2.03 4.36 0 0 1.28-1.66 1.2-3.92 0-.94-.33-1.6-.72-2.03ZM12 3a9 9 0 1 0 .001 18.001A9 9 0 0 0 12 3Zm-7.8 9c0-4.31 3.49-7.8 7.8-7.8s7.8 3.49 7.8 7.8-3.49 7.8-7.8 7.8-7.8-3.49-7.8-7.8Z",
        fill: "currentColor"
      }
    )
  }
);
function Qc(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Sa = Qc, e2 = typeof tr == "object" && tr && tr.Object === Object && tr, t2 = e2, n2 = t2, r2 = typeof self == "object" && self && self.Object === Object && self, s2 = n2 || r2 || Function("return this")(), Ma = s2, i2 = Ma, o2 = function() {
  return i2.Date.now();
}, a2 = o2, l2 = /\s/;
function c2(e) {
  for (var t = e.length; t-- && l2.test(e.charAt(t)); )
    ;
  return t;
}
var u2 = c2, d2 = u2, f2 = /^\s+/;
function h2(e) {
  return e && e.slice(0, d2(e) + 1).replace(f2, "");
}
var p2 = h2, m2 = Ma, v2 = m2.Symbol, La = v2, co = La, Ta = Object.prototype, g2 = Ta.hasOwnProperty, x2 = Ta.toString, xn = co ? co.toStringTag : void 0;
function w2(e) {
  var t = g2.call(e, xn), n = e[xn];
  try {
    e[xn] = void 0;
    var r = !0;
  } catch {
  }
  var s = x2.call(e);
  return r && (t ? e[xn] = n : delete e[xn]), s;
}
var y2 = w2, C2 = Object.prototype, b2 = C2.toString;
function _2(e) {
  return b2.call(e);
}
var j2 = _2, uo = La, S2 = y2, M2 = j2, L2 = "[object Null]", T2 = "[object Undefined]", fo = uo ? uo.toStringTag : void 0;
function V2(e) {
  return e == null ? e === void 0 ? T2 : L2 : fo && fo in Object(e) ? S2(e) : M2(e);
}
var P2 = V2;
function E2(e) {
  return e != null && typeof e == "object";
}
var R2 = E2, H2 = P2, A2 = R2, k2 = "[object Symbol]";
function Z2(e) {
  return typeof e == "symbol" || A2(e) && H2(e) == k2;
}
var B2 = Z2, D2 = p2, ho = Sa, N2 = B2, po = 0 / 0, O2 = /^[-+]0x[0-9a-f]+$/i, $2 = /^0b[01]+$/i, I2 = /^0o[0-7]+$/i, z2 = parseInt;
function F2(e) {
  if (typeof e == "number")
    return e;
  if (N2(e))
    return po;
  if (ho(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = ho(t) ? t + "" : t;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = D2(e);
  var n = $2.test(e);
  return n || I2.test(e) ? z2(e.slice(2), n ? 2 : 8) : O2.test(e) ? po : +e;
}
var q2 = F2, W2 = Sa, ns = a2, mo = q2, U2 = "Expected a function", G2 = Math.max, K2 = Math.min;
function Y2(e, t, n) {
  var r, s, o, a, l, c, d = 0, f = !1, u = !1, h = !0;
  if (typeof e != "function")
    throw new TypeError(U2);
  t = mo(t) || 0, W2(n) && (f = !!n.leading, u = "maxWait" in n, o = u ? G2(mo(n.maxWait) || 0, t) : o, h = "trailing" in n ? !!n.trailing : h);
  function p(M) {
    var L = r, b = s;
    return r = s = void 0, d = M, a = e.apply(b, L), a;
  }
  function v(M) {
    return d = M, l = setTimeout(x, t), f ? p(M) : a;
  }
  function m(M) {
    var L = M - c, b = M - d, V = t - L;
    return u ? K2(V, o - b) : V;
  }
  function w(M) {
    var L = M - c, b = M - d;
    return c === void 0 || L >= t || L < 0 || u && b >= o;
  }
  function x() {
    var M = ns();
    if (w(M))
      return y(M);
    l = setTimeout(x, m(M));
  }
  function y(M) {
    return l = void 0, h && r ? p(M) : (r = s = void 0, a);
  }
  function C() {
    l !== void 0 && clearTimeout(l), d = 0, r = c = s = l = void 0;
  }
  function _() {
    return l === void 0 ? a : y(ns());
  }
  function j() {
    var M = ns(), L = w(M);
    if (r = arguments, s = this, c = M, L) {
      if (l === void 0)
        return v(c);
      if (u)
        return clearTimeout(l), l = setTimeout(x, t), p(c);
    }
    return l === void 0 && (l = setTimeout(x, t)), a;
  }
  return j.cancel = C, j.flush = _, j;
}
var X2 = Y2;
const Va = /* @__PURE__ */ _a(X2);
var Pa = "isActive", J2 = "_1qyxb2gh", nr = { transparent: "_1qyxb2gd _1qyxb2gc", invertedTransparent: "_1qyxb2ge _1qyxb2gc", blackGradient: "_1qyxb2gf _1qyxb2gc", solidWhite: "_1qyxb2gg _1qyxb2gc" }, Ps = "_1qyxb2gb", Q2 = "_1qyxb2g3", e0 = "_1qyxb2g5", t0 = "_1qyxb2g2", n0 = "_1qyxb2g4", r0 = "_1qyxb2g0", s0 = { sticky: "_1qyxb2g7 _1qyxb2g6", normal: "_1qyxb2g8 _1qyxb2g6", semiSticky: "_1qyxb2g9 _1qyxb2g6" }, vo = "_1qyxb2g1", go = "_1qyxb2ga", i0 = "w5nxqn2", o0 = "w5nxqn0", a0 = "w5nxqn1";
const Es = ({
  label: e,
  children: t,
  count: n,
  ...r
}) => /* @__PURE__ */ i.jsxs("button", { className: o0, ...r, children: [
  n && /* @__PURE__ */ i.jsx("span", { className: i0, children: n }),
  t,
  /* @__PURE__ */ i.jsx("span", { className: a0, children: e })
] }), l0 = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M3.02 4.6h17.96v1.8H3.02V4.6Zm0 6.5h17.96v1.8H3.02v-1.8Zm0 6.5h17.96v1.8H3.02v-1.8Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
);
function Ee() {
  return Ee = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Ee.apply(this, arguments);
}
function Qt(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(s) {
    if (e == null || e(s), n === !1 || !s.defaultPrevented)
      return t == null ? void 0 : t(s);
  };
}
function c0(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Ea(...e) {
  return (t) => e.forEach(
    (n) => c0(n, t)
  );
}
function On(...e) {
  return be(Ea(...e), e);
}
function u0(e, t = []) {
  let n = [];
  function r(o, a) {
    const l = /* @__PURE__ */ Ie(a), c = n.length;
    n = [
      ...n,
      a
    ];
    function d(u) {
      const { scope: h, children: p, ...v } = u, m = (h == null ? void 0 : h[e][c]) || l, w = ze(
        () => v,
        Object.values(v)
      );
      return /* @__PURE__ */ G(m.Provider, {
        value: w
      }, p);
    }
    function f(u, h) {
      const p = (h == null ? void 0 : h[e][c]) || l, v = ue(p);
      if (v)
        return v;
      if (a !== void 0)
        return a;
      throw new Error(`\`${u}\` must be used within \`${o}\``);
    }
    return d.displayName = o + "Provider", [
      d,
      f
    ];
  }
  const s = () => {
    const o = n.map((a) => /* @__PURE__ */ Ie(a));
    return function(l) {
      const c = (l == null ? void 0 : l[e]) || o;
      return ze(
        () => ({
          [`__scope${e}`]: {
            ...l,
            [e]: c
          }
        }),
        [
          l,
          c
        ]
      );
    };
  };
  return s.scopeName = e, [
    r,
    d0(s, ...t)
  ];
}
function d0(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const n = () => {
    const r = e.map(
      (s) => ({
        useScope: s(),
        scopeName: s.scopeName
      })
    );
    return function(o) {
      const a = r.reduce((l, { useScope: c, scopeName: d }) => {
        const u = c(o)[`__scope${d}`];
        return {
          ...l,
          ...u
        };
      }, {});
      return ze(
        () => ({
          [`__scope${t.scopeName}`]: a
        }),
        [
          a
        ]
      );
    };
  };
  return n.scopeName = t.scopeName, n;
}
const Rs = globalThis != null && globalThis.document ? ni : () => {
}, f0 = D["useId".toString()] || (() => {
});
let h0 = 0;
function rs(e) {
  const [t, n] = D.useState(f0());
  return Rs(() => {
    e || n(
      (r) => r ?? String(h0++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function At(e) {
  const t = k(e);
  return B(() => {
    t.current = e;
  }), ze(
    () => (...n) => {
      var r;
      return (r = t.current) === null || r === void 0 ? void 0 : r.call(t, ...n);
    },
    []
  );
}
function p0({ prop: e, defaultProp: t, onChange: n = () => {
} }) {
  const [r, s] = m0({
    defaultProp: t,
    onChange: n
  }), o = e !== void 0, a = o ? e : r, l = At(n), c = be((d) => {
    if (o) {
      const u = typeof d == "function" ? d(e) : d;
      u !== e && l(u);
    } else
      s(d);
  }, [
    o,
    e,
    s,
    l
  ]);
  return [
    a,
    c
  ];
}
function m0({ defaultProp: e, onChange: t }) {
  const n = N(e), [r] = n, s = k(r), o = At(t);
  return B(() => {
    s.current !== r && (o(r), s.current = r);
  }, [
    r,
    s,
    o
  ]), n;
}
const ii = /* @__PURE__ */ ge((e, t) => {
  const { children: n, ...r } = e, s = Ne.toArray(n), o = s.find(g0);
  if (o) {
    const a = o.props.children, l = s.map((c) => c === o ? Ne.count(a) > 1 ? Ne.only(null) : /* @__PURE__ */ Ht(a) ? a.props.children : null : c);
    return /* @__PURE__ */ G(Hs, Ee({}, r, {
      ref: t
    }), /* @__PURE__ */ Ht(a) ? /* @__PURE__ */ ht(a, void 0, l) : null);
  }
  return /* @__PURE__ */ G(Hs, Ee({}, r, {
    ref: t
  }), n);
});
ii.displayName = "Slot";
const Hs = /* @__PURE__ */ ge((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ Ht(n) ? /* @__PURE__ */ ht(n, {
    ...x0(r, n.props),
    ref: t ? Ea(t, n.ref) : n.ref
  }) : Ne.count(n) > 1 ? Ne.only(null) : null;
});
Hs.displayName = "SlotClone";
const v0 = ({ children: e }) => /* @__PURE__ */ G(Zr, null, e);
function g0(e) {
  return /* @__PURE__ */ Ht(e) && e.type === v0;
}
function x0(e, t) {
  const n = {
    ...t
  };
  for (const r in t) {
    const s = e[r], o = t[r];
    /^on[A-Z]/.test(r) ? s && o ? n[r] = (...l) => {
      o(...l), s(...l);
    } : s && (n[r] = s) : r === "style" ? n[r] = {
      ...s,
      ...o
    } : r === "className" && (n[r] = [
      s,
      o
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n
  };
}
const w0 = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], oi = w0.reduce((e, t) => {
  const n = /* @__PURE__ */ ge((r, s) => {
    const { asChild: o, ...a } = r, l = o ? ii : t;
    return B(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ G(l, Ee({}, a, {
      ref: s
    }));
  });
  return n.displayName = `Primitive.${t}`, {
    ...e,
    [t]: n
  };
}, {});
function y0(e, t) {
  e && ba(
    () => e.dispatchEvent(t)
  );
}
function C0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = At(e);
  B(() => {
    const r = (s) => {
      s.key === "Escape" && n(s);
    };
    return t.addEventListener("keydown", r), () => t.removeEventListener("keydown", r);
  }, [
    n,
    t
  ]);
}
const As = "dismissableLayer.update", b0 = "dismissableLayer.pointerDownOutside", _0 = "dismissableLayer.focusOutside";
let xo;
const j0 = /* @__PURE__ */ Ie({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), S0 = /* @__PURE__ */ ge((e, t) => {
  var n;
  const { disableOutsidePointerEvents: r = !1, onEscapeKeyDown: s, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: l, onDismiss: c, ...d } = e, f = ue(j0), [u, h] = N(null), p = (n = u == null ? void 0 : u.ownerDocument) !== null && n !== void 0 ? n : globalThis == null ? void 0 : globalThis.document, [, v] = N({}), m = On(
    t,
    (b) => h(b)
  ), w = Array.from(f.layers), [x] = [
    ...f.layersWithOutsidePointerEventsDisabled
  ].slice(-1), y = w.indexOf(x), C = u ? w.indexOf(u) : -1, _ = f.layersWithOutsidePointerEventsDisabled.size > 0, j = C >= y, M = M0((b) => {
    const V = b.target, E = [
      ...f.branches
    ].some(
      (Z) => Z.contains(V)
    );
    !j || E || (o == null || o(b), l == null || l(b), b.defaultPrevented || c == null || c());
  }, p), L = L0((b) => {
    const V = b.target;
    [
      ...f.branches
    ].some(
      (Z) => Z.contains(V)
    ) || (a == null || a(b), l == null || l(b), b.defaultPrevented || c == null || c());
  }, p);
  return C0((b) => {
    C === f.layers.size - 1 && (s == null || s(b), !b.defaultPrevented && c && (b.preventDefault(), c()));
  }, p), B(() => {
    if (u)
      return r && (f.layersWithOutsidePointerEventsDisabled.size === 0 && (xo = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), f.layersWithOutsidePointerEventsDisabled.add(u)), f.layers.add(u), wo(), () => {
        r && f.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = xo);
      };
  }, [
    u,
    p,
    r,
    f
  ]), B(() => () => {
    u && (f.layers.delete(u), f.layersWithOutsidePointerEventsDisabled.delete(u), wo());
  }, [
    u,
    f
  ]), B(() => {
    const b = () => v({});
    return document.addEventListener(As, b), () => document.removeEventListener(As, b);
  }, []), /* @__PURE__ */ G(oi.div, Ee({}, d, {
    ref: m,
    style: {
      pointerEvents: _ ? j ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: Qt(e.onFocusCapture, L.onFocusCapture),
    onBlurCapture: Qt(e.onBlurCapture, L.onBlurCapture),
    onPointerDownCapture: Qt(e.onPointerDownCapture, M.onPointerDownCapture)
  }));
});
function M0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = At(e), r = k(!1), s = k(() => {
  });
  return B(() => {
    const o = (l) => {
      if (l.target && !r.current) {
        let d = function() {
          Ra(b0, n, c, {
            discrete: !0
          });
        };
        const c = {
          originalEvent: l
        };
        l.pointerType === "touch" ? (t.removeEventListener("click", s.current), s.current = d, t.addEventListener("click", s.current, {
          once: !0
        })) : d();
      } else
        t.removeEventListener("click", s.current);
      r.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", o);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", o), t.removeEventListener("click", s.current);
    };
  }, [
    t,
    n
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function L0(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = At(e), r = k(!1);
  return B(() => {
    const s = (o) => {
      o.target && !r.current && Ra(_0, n, {
        originalEvent: o
      }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", s), () => t.removeEventListener("focusin", s);
  }, [
    t,
    n
  ]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function wo() {
  const e = new CustomEvent(As);
  document.dispatchEvent(e);
}
function Ra(e, t, n, { discrete: r }) {
  const s = n.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: n
  });
  t && s.addEventListener(e, t, {
    once: !0
  }), r ? y0(s, o) : s.dispatchEvent(o);
}
const ss = "focusScope.autoFocusOnMount", is = "focusScope.autoFocusOnUnmount", yo = {
  bubbles: !1,
  cancelable: !0
}, T0 = /* @__PURE__ */ ge((e, t) => {
  const { loop: n = !1, trapped: r = !1, onMountAutoFocus: s, onUnmountAutoFocus: o, ...a } = e, [l, c] = N(null), d = At(s), f = At(o), u = k(null), h = On(
    t,
    (m) => c(m)
  ), p = k({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  B(() => {
    if (r) {
      let m = function(C) {
        if (p.paused || !l)
          return;
        const _ = C.target;
        l.contains(_) ? u.current = _ : vt(u.current, {
          select: !0
        });
      }, w = function(C) {
        if (p.paused || !l)
          return;
        const _ = C.relatedTarget;
        _ !== null && (l.contains(_) || vt(u.current, {
          select: !0
        }));
      }, x = function(C) {
        if (document.activeElement === document.body)
          for (const j of C)
            j.removedNodes.length > 0 && vt(l);
      };
      document.addEventListener("focusin", m), document.addEventListener("focusout", w);
      const y = new MutationObserver(x);
      return l && y.observe(l, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", m), document.removeEventListener("focusout", w), y.disconnect();
      };
    }
  }, [
    r,
    l,
    p.paused
  ]), B(() => {
    if (l) {
      bo.add(p);
      const m = document.activeElement;
      if (!l.contains(m)) {
        const x = new CustomEvent(ss, yo);
        l.addEventListener(ss, d), l.dispatchEvent(x), x.defaultPrevented || (V0(A0(Ha(l)), {
          select: !0
        }), document.activeElement === m && vt(l));
      }
      return () => {
        l.removeEventListener(ss, d), setTimeout(() => {
          const x = new CustomEvent(is, yo);
          l.addEventListener(is, f), l.dispatchEvent(x), x.defaultPrevented || vt(m ?? document.body, {
            select: !0
          }), l.removeEventListener(is, f), bo.remove(p);
        }, 0);
      };
    }
  }, [
    l,
    d,
    f,
    p
  ]);
  const v = be((m) => {
    if (!n && !r || p.paused)
      return;
    const w = m.key === "Tab" && !m.altKey && !m.ctrlKey && !m.metaKey, x = document.activeElement;
    if (w && x) {
      const y = m.currentTarget, [C, _] = P0(y);
      C && _ ? !m.shiftKey && x === _ ? (m.preventDefault(), n && vt(C, {
        select: !0
      })) : m.shiftKey && x === C && (m.preventDefault(), n && vt(_, {
        select: !0
      })) : x === y && m.preventDefault();
    }
  }, [
    n,
    r,
    p.paused
  ]);
  return /* @__PURE__ */ G(oi.div, Ee({
    tabIndex: -1
  }, a, {
    ref: h,
    onKeyDown: v
  }));
});
function V0(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (vt(r, {
      select: t
    }), document.activeElement !== n)
      return;
}
function P0(e) {
  const t = Ha(e), n = Co(t, e), r = Co(t.reverse(), e);
  return [
    n,
    r
  ];
}
function Ha(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const s = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || s ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); )
    t.push(n.currentNode);
  return t;
}
function Co(e, t) {
  for (const n of e)
    if (!E0(n, {
      upTo: t
    }))
      return n;
}
function E0(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function R0(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function vt(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== n && R0(e) && t && e.select();
  }
}
const bo = H0();
function H0() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = _o(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = _o(e, t), (n = e[0]) === null || n === void 0 || n.resume();
    }
  };
}
function _o(e, t) {
  const n = [
    ...e
  ], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function A0(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
function k0(e, t) {
  return Fc((n, r) => {
    const s = t[n][r];
    return s ?? n;
  }, e);
}
const ai = (e) => {
  const { present: t, children: n } = e, r = Z0(t), s = typeof n == "function" ? n({
    present: r.isPresent
  }) : Ne.only(n), o = On(r.ref, s.ref);
  return typeof n == "function" || r.isPresent ? /* @__PURE__ */ ht(s, {
    ref: o
  }) : null;
};
ai.displayName = "Presence";
function Z0(e) {
  const [t, n] = N(), r = k({}), s = k(e), o = k("none"), a = e ? "mounted" : "unmounted", [l, c] = k0(a, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return B(() => {
    const d = rr(r.current);
    o.current = l === "mounted" ? d : "none";
  }, [
    l
  ]), Rs(() => {
    const d = r.current, f = s.current;
    if (f !== e) {
      const h = o.current, p = rr(d);
      e ? c("MOUNT") : p === "none" || (d == null ? void 0 : d.display) === "none" ? c("UNMOUNT") : c(f && h !== p ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e;
    }
  }, [
    e,
    c
  ]), Rs(() => {
    if (t) {
      const d = (u) => {
        const p = rr(r.current).includes(u.animationName);
        u.target === t && p && ba(
          () => c("ANIMATION_END")
        );
      }, f = (u) => {
        u.target === t && (o.current = rr(r.current));
      };
      return t.addEventListener("animationstart", f), t.addEventListener("animationcancel", d), t.addEventListener("animationend", d), () => {
        t.removeEventListener("animationstart", f), t.removeEventListener("animationcancel", d), t.removeEventListener("animationend", d);
      };
    } else
      c("ANIMATION_END");
  }, [
    t,
    c
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(l),
    ref: be((d) => {
      d && (r.current = getComputedStyle(d)), n(d);
    }, [])
  };
}
function rr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let os = 0;
function B0() {
  B(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = n[0]) !== null && e !== void 0 ? e : jo()), document.body.insertAdjacentElement("beforeend", (t = n[1]) !== null && t !== void 0 ? t : jo()), os++, () => {
      os === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (r) => r.remove()
      ), os--;
    };
  }, []);
}
function jo() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var Ke = function() {
  return Ke = Object.assign || function(t) {
    for (var n, r = 1, s = arguments.length; r < s; r++) {
      n = arguments[r];
      for (var o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, Ke.apply(this, arguments);
};
function Aa(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
      t.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[s]) && (n[r[s]] = e[r[s]]);
  return n;
}
function D0(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, s = t.length, o; r < s; r++)
      (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var mr = "right-scroll-bar-position", vr = "width-before-scroll-bar", N0 = "with-scroll-bars-hidden", O0 = "--removed-body-scroll-bar-size";
function $0(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function I0(e, t) {
  var n = N(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var s = n.value;
          s !== r && (n.value = r, n.callback(r, s));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
function z0(e, t) {
  return I0(t || null, function(n) {
    return e.forEach(function(r) {
      return $0(r, n);
    });
  });
}
function F0(e) {
  return e;
}
function q0(e, t) {
  t === void 0 && (t = F0);
  var n = [], r = !1, s = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(o) {
      var a = t(o, r);
      return n.push(a), function() {
        n = n.filter(function(l) {
          return l !== a;
        });
      };
    },
    assignSyncMedium: function(o) {
      for (r = !0; n.length; ) {
        var a = n;
        n = [], a.forEach(o);
      }
      n = {
        push: function(l) {
          return o(l);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(o) {
      r = !0;
      var a = [];
      if (n.length) {
        var l = n;
        n = [], l.forEach(o), a = n;
      }
      var c = function() {
        var f = a;
        a = [], f.forEach(o);
      }, d = function() {
        return Promise.resolve().then(c);
      };
      d(), n = {
        push: function(f) {
          a.push(f), d();
        },
        filter: function(f) {
          return a = a.filter(f), n;
        }
      };
    }
  };
  return s;
}
function W0(e) {
  e === void 0 && (e = {});
  var t = q0(null);
  return t.options = Ke({ async: !0, ssr: !1 }, e), t;
}
var ka = function(e) {
  var t = e.sideCar, n = Aa(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return D.createElement(r, Ke({}, n));
};
ka.isSideCarExport = !0;
function U0(e, t) {
  return e.useMedium(t), ka;
}
var Za = W0(), as = function() {
}, Br = D.forwardRef(function(e, t) {
  var n = D.useRef(null), r = D.useState({
    onScrollCapture: as,
    onWheelCapture: as,
    onTouchMoveCapture: as
  }), s = r[0], o = r[1], a = e.forwardProps, l = e.children, c = e.className, d = e.removeScrollBar, f = e.enabled, u = e.shards, h = e.sideCar, p = e.noIsolation, v = e.inert, m = e.allowPinchZoom, w = e.as, x = w === void 0 ? "div" : w, y = Aa(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), C = h, _ = z0([n, t]), j = Ke(Ke({}, y), s);
  return D.createElement(
    D.Fragment,
    null,
    f && D.createElement(C, { sideCar: Za, removeScrollBar: d, shards: u, noIsolation: p, inert: v, setCallbacks: o, allowPinchZoom: !!m, lockRef: n }),
    a ? D.cloneElement(D.Children.only(l), Ke(Ke({}, j), { ref: _ })) : D.createElement(x, Ke({}, j, { className: c, ref: _ }), l)
  );
});
Br.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Br.classNames = {
  fullWidth: vr,
  zeroRight: mr
};
var So, G0 = function() {
  if (So)
    return So;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function K0() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = G0();
  return t && e.setAttribute("nonce", t), e;
}
function Y0(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function X0(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var J0 = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = K0()) && (Y0(t, n), X0(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Q0 = function() {
  var e = J0();
  return function(t, n) {
    D.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Ba = function() {
  var e = Q0(), t = function(n) {
    var r = n.styles, s = n.dynamic;
    return e(r, s), null;
  };
  return t;
}, e3 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, ls = function(e) {
  return parseInt(e || "", 10) || 0;
}, t3 = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], s = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [ls(n), ls(r), ls(s)];
}, n3 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return e3;
  var t = t3(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, r3 = Ba(), s3 = function(e, t, n, r) {
  var s = e.left, o = e.top, a = e.right, l = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(N0, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(l, "px ").concat(r, `;
  }
  body {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(s, `px;
    padding-top: `).concat(o, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(l, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(mr, ` {
    right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(vr, ` {
    margin-right: `).concat(l, "px ").concat(r, `;
  }
  
  .`).concat(mr, " .").concat(mr, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(vr, " .").concat(vr, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(O0, ": ").concat(l, `px;
  }
`);
}, i3 = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, s = r === void 0 ? "margin" : r, o = D.useMemo(function() {
    return n3(s);
  }, [s]);
  return D.createElement(r3, { styles: s3(o, !t, s, n ? "" : "!important") });
}, ks = !1;
if (typeof window < "u")
  try {
    var sr = Object.defineProperty({}, "passive", {
      get: function() {
        return ks = !0, !0;
      }
    });
    window.addEventListener("test", sr, sr), window.removeEventListener("test", sr, sr);
  } catch {
    ks = !1;
  }
var Wt = ks ? { passive: !1 } : !1, o3 = function(e) {
  return e.tagName === "TEXTAREA";
}, Da = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !o3(e) && n[t] === "visible")
  );
}, a3 = function(e) {
  return Da(e, "overflowY");
}, l3 = function(e) {
  return Da(e, "overflowX");
}, Mo = function(e, t) {
  var n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var r = Na(e, n);
    if (r) {
      var s = Oa(e, n), o = s[1], a = s[2];
      if (o > a)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== document.body);
  return !1;
}, c3 = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, u3 = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, Na = function(e, t) {
  return e === "v" ? a3(t) : l3(t);
}, Oa = function(e, t) {
  return e === "v" ? c3(t) : u3(t);
}, d3 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, f3 = function(e, t, n, r, s) {
  var o = d3(e, window.getComputedStyle(t).direction), a = o * r, l = n.target, c = t.contains(l), d = !1, f = a > 0, u = 0, h = 0;
  do {
    var p = Oa(e, l), v = p[0], m = p[1], w = p[2], x = m - w - o * v;
    (v || x) && Na(e, l) && (u += x, h += v), l = l.parentNode;
  } while (
    // portaled content
    !c && l !== document.body || // self content
    c && (t.contains(l) || t === l)
  );
  return (f && (s && u === 0 || !s && a > u) || !f && (s && h === 0 || !s && -a > h)) && (d = !0), d;
}, ir = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Lo = function(e) {
  return [e.deltaX, e.deltaY];
}, To = function(e) {
  return e && "current" in e ? e.current : e;
}, h3 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, p3 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, m3 = 0, Ut = [];
function v3(e) {
  var t = D.useRef([]), n = D.useRef([0, 0]), r = D.useRef(), s = D.useState(m3++)[0], o = D.useState(function() {
    return Ba();
  })[0], a = D.useRef(e);
  D.useEffect(function() {
    a.current = e;
  }, [e]), D.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var m = D0([e.lockRef.current], (e.shards || []).map(To), !0).filter(Boolean);
      return m.forEach(function(w) {
        return w.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), m.forEach(function(w) {
          return w.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var l = D.useCallback(function(m, w) {
    if ("touches" in m && m.touches.length === 2)
      return !a.current.allowPinchZoom;
    var x = ir(m), y = n.current, C = "deltaX" in m ? m.deltaX : y[0] - x[0], _ = "deltaY" in m ? m.deltaY : y[1] - x[1], j, M = m.target, L = Math.abs(C) > Math.abs(_) ? "h" : "v";
    if ("touches" in m && L === "h" && M.type === "range")
      return !1;
    var b = Mo(L, M);
    if (!b)
      return !0;
    if (b ? j = L : (j = L === "v" ? "h" : "v", b = Mo(L, M)), !b)
      return !1;
    if (!r.current && "changedTouches" in m && (C || _) && (r.current = j), !j)
      return !0;
    var V = r.current || j;
    return f3(V, w, m, V === "h" ? C : _, !0);
  }, []), c = D.useCallback(function(m) {
    var w = m;
    if (!(!Ut.length || Ut[Ut.length - 1] !== o)) {
      var x = "deltaY" in w ? Lo(w) : ir(w), y = t.current.filter(function(j) {
        return j.name === w.type && j.target === w.target && h3(j.delta, x);
      })[0];
      if (y && y.should) {
        w.cancelable && w.preventDefault();
        return;
      }
      if (!y) {
        var C = (a.current.shards || []).map(To).filter(Boolean).filter(function(j) {
          return j.contains(w.target);
        }), _ = C.length > 0 ? l(w, C[0]) : !a.current.noIsolation;
        _ && w.cancelable && w.preventDefault();
      }
    }
  }, []), d = D.useCallback(function(m, w, x, y) {
    var C = { name: m, delta: w, target: x, should: y };
    t.current.push(C), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== C;
      });
    }, 1);
  }, []), f = D.useCallback(function(m) {
    n.current = ir(m), r.current = void 0;
  }, []), u = D.useCallback(function(m) {
    d(m.type, Lo(m), m.target, l(m, e.lockRef.current));
  }, []), h = D.useCallback(function(m) {
    d(m.type, ir(m), m.target, l(m, e.lockRef.current));
  }, []);
  D.useEffect(function() {
    return Ut.push(o), e.setCallbacks({
      onScrollCapture: u,
      onWheelCapture: u,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", c, Wt), document.addEventListener("touchmove", c, Wt), document.addEventListener("touchstart", f, Wt), function() {
      Ut = Ut.filter(function(m) {
        return m !== o;
      }), document.removeEventListener("wheel", c, Wt), document.removeEventListener("touchmove", c, Wt), document.removeEventListener("touchstart", f, Wt);
    };
  }, []);
  var p = e.removeScrollBar, v = e.inert;
  return D.createElement(
    D.Fragment,
    null,
    v ? D.createElement(o, { styles: p3(s) }) : null,
    p ? D.createElement(i3, { gapMode: "margin" }) : null
  );
}
const g3 = U0(Za, v3);
var $a = D.forwardRef(function(e, t) {
  return D.createElement(Br, Ke({}, e, { ref: t, sideCar: g3 }));
});
$a.classNames = Br.classNames;
const x3 = $a;
var w3 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Gt = /* @__PURE__ */ new WeakMap(), or = /* @__PURE__ */ new WeakMap(), ar = {}, cs = 0, Ia = function(e) {
  return e && (e.host || Ia(e.parentNode));
}, y3 = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = Ia(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, C3 = function(e, t, n, r) {
  var s = y3(t, Array.isArray(e) ? e : [e]);
  ar[n] || (ar[n] = /* @__PURE__ */ new WeakMap());
  var o = ar[n], a = [], l = /* @__PURE__ */ new Set(), c = new Set(s), d = function(u) {
    !u || l.has(u) || (l.add(u), d(u.parentNode));
  };
  s.forEach(d);
  var f = function(u) {
    !u || c.has(u) || Array.prototype.forEach.call(u.children, function(h) {
      if (l.has(h))
        f(h);
      else {
        var p = h.getAttribute(r), v = p !== null && p !== "false", m = (Gt.get(h) || 0) + 1, w = (o.get(h) || 0) + 1;
        Gt.set(h, m), o.set(h, w), a.push(h), m === 1 && v && or.set(h, !0), w === 1 && h.setAttribute(n, "true"), v || h.setAttribute(r, "true");
      }
    });
  };
  return f(t), l.clear(), cs++, function() {
    a.forEach(function(u) {
      var h = Gt.get(u) - 1, p = o.get(u) - 1;
      Gt.set(u, h), o.set(u, p), h || (or.has(u) || u.removeAttribute(r), or.delete(u)), p || u.removeAttribute(n);
    }), cs--, cs || (Gt = /* @__PURE__ */ new WeakMap(), Gt = /* @__PURE__ */ new WeakMap(), or = /* @__PURE__ */ new WeakMap(), ar = {});
  };
}, b3 = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), s = t || w3(e);
  return s ? (r.push.apply(r, Array.from(s.querySelectorAll("[aria-live]"))), C3(r, s, n, "aria-hidden")) : function() {
    return null;
  };
};
const za = "Dialog", [Fa, wp] = u0(za), [_3, an] = Fa(za), j3 = (e) => {
  const { __scopeDialog: t, children: n, open: r, defaultOpen: s, onOpenChange: o, modal: a = !0 } = e, l = k(null), c = k(null), [d = !1, f] = p0({
    prop: r,
    defaultProp: s,
    onChange: o
  });
  return /* @__PURE__ */ G(_3, {
    scope: t,
    triggerRef: l,
    contentRef: c,
    contentId: rs(),
    titleId: rs(),
    descriptionId: rs(),
    open: d,
    onOpenChange: f,
    onOpenToggle: be(
      () => f(
        (u) => !u
      ),
      [
        f
      ]
    ),
    modal: a
  }, n);
}, S3 = "DialogPortal", [yp, qa] = Fa(S3, {
  forceMount: void 0
}), Zs = "DialogOverlay", M3 = /* @__PURE__ */ ge((e, t) => {
  const n = qa(Zs, e.__scopeDialog), { forceMount: r = n.forceMount, ...s } = e, o = an(Zs, e.__scopeDialog);
  return o.modal ? /* @__PURE__ */ G(ai, {
    present: r || o.open
  }, /* @__PURE__ */ G(L3, Ee({}, s, {
    ref: t
  }))) : null;
}), L3 = /* @__PURE__ */ ge((e, t) => {
  const { __scopeDialog: n, ...r } = e, s = an(Zs, n);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ G(x3, {
      as: ii,
      allowPinchZoom: !0,
      shards: [
        s.contentRef
      ]
    }, /* @__PURE__ */ G(oi.div, Ee({
      "data-state": Ua(s.open)
    }, r, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...r.style
      }
    })))
  );
}), Hn = "DialogContent", T3 = /* @__PURE__ */ ge((e, t) => {
  const n = qa(Hn, e.__scopeDialog), { forceMount: r = n.forceMount, ...s } = e, o = an(Hn, e.__scopeDialog);
  return /* @__PURE__ */ G(ai, {
    present: r || o.open
  }, o.modal ? /* @__PURE__ */ G(V3, Ee({}, s, {
    ref: t
  })) : /* @__PURE__ */ G(P3, Ee({}, s, {
    ref: t
  })));
}), V3 = /* @__PURE__ */ ge((e, t) => {
  const n = an(Hn, e.__scopeDialog), r = k(null), s = On(t, n.contentRef, r);
  return B(() => {
    const o = r.current;
    if (o)
      return b3(o);
  }, []), /* @__PURE__ */ G(Wa, Ee({}, e, {
    ref: s,
    trapFocus: n.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: Qt(e.onCloseAutoFocus, (o) => {
      var a;
      o.preventDefault(), (a = n.triggerRef.current) === null || a === void 0 || a.focus();
    }),
    onPointerDownOutside: Qt(e.onPointerDownOutside, (o) => {
      const a = o.detail.originalEvent, l = a.button === 0 && a.ctrlKey === !0;
      (a.button === 2 || l) && o.preventDefault();
    }),
    onFocusOutside: Qt(
      e.onFocusOutside,
      (o) => o.preventDefault()
    )
  }));
}), P3 = /* @__PURE__ */ ge((e, t) => {
  const n = an(Hn, e.__scopeDialog), r = k(!1), s = k(!1);
  return /* @__PURE__ */ G(Wa, Ee({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (o) => {
      var a;
      if ((a = e.onCloseAutoFocus) === null || a === void 0 || a.call(e, o), !o.defaultPrevented) {
        var l;
        r.current || (l = n.triggerRef.current) === null || l === void 0 || l.focus(), o.preventDefault();
      }
      r.current = !1, s.current = !1;
    },
    onInteractOutside: (o) => {
      var a, l;
      (a = e.onInteractOutside) === null || a === void 0 || a.call(e, o), o.defaultPrevented || (r.current = !0, o.detail.originalEvent.type === "pointerdown" && (s.current = !0));
      const c = o.target;
      ((l = n.triggerRef.current) === null || l === void 0 ? void 0 : l.contains(c)) && o.preventDefault(), o.detail.originalEvent.type === "focusin" && s.current && o.preventDefault();
    }
  }));
}), Wa = /* @__PURE__ */ ge((e, t) => {
  const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: s, onCloseAutoFocus: o, ...a } = e, l = an(Hn, n), c = k(null), d = On(t, c);
  return B0(), /* @__PURE__ */ G(Zr, null, /* @__PURE__ */ G(T0, {
    asChild: !0,
    loop: !0,
    trapped: r,
    onMountAutoFocus: s,
    onUnmountAutoFocus: o
  }, /* @__PURE__ */ G(S0, Ee({
    role: "dialog",
    id: l.contentId,
    "aria-describedby": l.descriptionId,
    "aria-labelledby": l.titleId,
    "data-state": Ua(l.open)
  }, a, {
    ref: d,
    onDismiss: () => l.onOpenChange(!1)
  }))), !1);
});
function Ua(e) {
  return e ? "open" : "closed";
}
const $n = j3, li = M3, In = T3;
var E3 = "qn51an4", R3 = "qn51an3", H3 = "qn51an0";
const tt = () => {
  const [e, t] = N([
    window.innerHeight,
    window.innerWidth
  ]), n = () => {
    t([window.innerWidth, window.innerHeight]);
  }, r = Va(n, 40);
  return B(() => (window.addEventListener("resize", r), n(), () => {
    window.removeEventListener("resize", r);
  }), []), e;
};
var nt = { xs: "375px", m: "768px", l: "992px", xl: "1200px", xxl: "1400px" }, en = { xs: "374px", m: "767px", l: "991px", xl: "1199px", xxl: "1399px" }, kt = { color: { brand: { orange: { O500: "var(--_1epihgq1)", O75: "var(--_1epihgq2)", O15: "var(--_1epihgq3)" }, yellow: { Y500: "var(--_1epihgq4)", Y75: "var(--_1epihgq5)", Y15: "var(--_1epihgq6)" }, red: { R500: "var(--_1epihgq7)", R75: "var(--_1epihgq8)", R15: "var(--_1epihgq9)" }, blue: { B500: "var(--_1epihgqa)", B75: "var(--_1epihgqb)", B15: "var(--_1epihgqc)" }, purple: { P500: "var(--_1epihgqd)", P75: "var(--_1epihgqe)", P15: "var(--_1epihgqf)" }, green: { G900: "var(--_1epihgqg)", G800: "var(--_1epihgqh)", G700: "var(--_1epihgqi)", G600: "var(--_1epihgqj)", G500: "var(--_1epihgqk)", G400: "var(--_1epihgql)", G300: "var(--_1epihgqm)", G200: "var(--_1epihgqn)", G100: "var(--_1epihgqo)", G20: "var(--_1epihgqp)", G15: "var(--_1epihgqq)" } }, neutrals: { neutrals: { N100: "var(--_1epihgqr)", N100Bold: "var(--_1epihgqs)", N100Bolder: "var(--_1epihgqt)", N200: "var(--_1epihgqu)", N200Bold: "var(--_1epihgqv)", N200Bolder: "var(--_1epihgqw)", N300: "var(--_1epihgqx)", N400: "var(--_1epihgqy)", N500: "var(--_1epihgqz)", N600: "var(--_1epihgq10)", N700: "var(--_1epihgq11)", N800: "var(--_1epihgq12)", N900: "var(--_1epihgq13)", N1000: "var(--_1epihgq14)" }, whites: { W100: "var(--_1epihgq15)", W75: "var(--_1epihgq16)", W50: "var(--_1epihgq17)", W30: "var(--_1epihgq18)", W15: "var(--_1epihgq19)", W5: "var(--_1epihgq1a)", W0: "var(--_1epihgq1b)" }, blacks: { B100: "var(--_1epihgq1c)", B60: "var(--_1epihgq1d)", B40: "var(--_1epihgq1e)", B20: "var(--_1epihgq1f)", B16: "var(--_1epihgq1g)", B7: "var(--_1epihgq1h)" } }, contextual: { informative: { Blue1000: "var(--_1epihgq1i)", Blue900: "var(--_1epihgq1j)", Blue800: "var(--_1epihgq1k)", Blue700: "var(--_1epihgq1l)", Blue600: "var(--_1epihgq1m)", Blue500: "var(--_1epihgq1n)", Blue400: "var(--_1epihgq1o)", Blue300: "var(--_1epihgq1p)", Blue200: "var(--_1epihgq1q)", Blue100: "var(--_1epihgq1r)" }, positive: { Green1000: "var(--_1epihgq1s)", Green900: "var(--_1epihgq1t)", Green800: "var(--_1epihgq1u)", Green700: "var(--_1epihgq1v)", Green600: "var(--_1epihgq1w)", Green500: "var(--_1epihgq1x)", Green400: "var(--_1epihgq1y)", Green300: "var(--_1epihgq1z)", Green200: "var(--_1epihgq20)", Green100: "var(--_1epihgq21)" }, negative: { Red1000: "var(--_1epihgq22)", Red900: "var(--_1epihgq23)", Red800: "var(--_1epihgq24)", Red700: "var(--_1epihgq25)", Red600: "var(--_1epihgq26)", Red500: "var(--_1epihgq27)", Red400: "var(--_1epihgq28)", Red300: "var(--_1epihgq29)", Red200: "var(--_1epihgq2a)", Red100: "var(--_1epihgq2b)" }, notice: { yellow1000: "var(--_1epihgq2c)", yellow900: "var(--_1epihgq2d)", yellow800: "var(--_1epihgq2e)", yellow700: "var(--_1epihgq2f)", yellow600: "var(--_1epihgq2g)", yellow500: "var(--_1epihgq2h)", yellow400: "var(--_1epihgq2i)", yellow300: "var(--_1epihgq2j)", yellow200: "var(--_1epihgq2k)", yellow100: "var(--_1epihgq2l)" } }, icon: { inverted: "var(--_1epihgq2m)", facebookMessengerOne: "var(--_1epihgq2n)", facebookMessengerTwo: "var(--_1epihgq2o)", facebookMessengerThree: "var(--_1epihgq2p)" }, background: { backgroundPrimary: "var(--_1epihgq2q)", backgroundPrimaryBold: "var(--_1epihgq2r)", backgroundPrimaryBolder: "var(--_1epihgq2s)", backgroundSecondary: "var(--_1epihgq2t)", backgroundSecondaryBolder: "var(--_1epihgq2u)", backgroundAccent: "var(--_1epihgq2v)", backgroundAccentBold: "var(--_1epihgq2w)", backgroundAccentBolder: "var(--_1epihgq2x)", backgroundFourth: "var(--_1epihgq2y)", backgroundBoldPrimary: "var(--_1epihgq2z)", backgroundBoldFourth: "var(--_1epihgq30)", backgroundBoldTertiary: "var(--_1epihgq31)", backgroundBoldFifth: "var(--_1epihgq32)", backgroundBlack7: "var(--_1epihgq33)", backgroundBlack16: "var(--_1epihgq34)", backgroundBlack20: "var(--_1epihgq35)", backgroundBlack40: "var(--_1epihgq36)", backgroundWhite5: "var(--_1epihgq37)", backgroundWhite15: "var(--_1epihgq38)", backgroundWhite30: "var(--_1epihgq39)", backgroundWhite50: "var(--_1epihgq3a)", backgroundWhite75: "var(--_1epihgq3b)", backgroundAccentSubtlest: "var(--_1epihgq3c)", backgroundBrandPurple: "var(--_1epihgq3d)" }, content: { contentOnColorPrimary: "var(--_1epihgq3e)", contentOnColorSecondary: "var(--_1epihgq3f)", contentOnColorTertiary: "var(--_1epihgq3g)", contentAccent: "var(--_1epihgq3h)", contentAccentBold: "var(--_1epihgq3i)", contentAccentBolder: "var(--_1epihgq3j)", contentPrimary: "var(--_1epihgq3k)", contentSecondary: "var(--_1epihgq3l)", contentTertiary: "var(--_1epihgq3m)", contentBrandPurple: "var(--_1epihgq3n)", contentError: "var(--_1epihgq3o)" }, border: { borderDefault: "var(--_1epihgq3p)", borderOnColorDisabled: "var(--_1epihgq3q)", borderAccent: "var(--_1epihgq3r)", borderAccentBold: "var(--_1epihgq3s)", borderAccentBolder: "var(--_1epihgq3t)", borderDisabled: "var(--_1epihgq3u)", borderWhite15: "var(--_1epihgq3v)", borderWhite100: "var(--_1epihgq3w)" } }, font: { body: "var(--_1epihgq3x)" }, typography: { header1: { fontFamily: "var(--_1epihgq3y)", fontSize: "var(--_1epihgq3z)", lineHeight: "var(--_1epihgq40)" }, header1L: { fontSize: "var(--_1epihgq41)", lineHeight: "var(--_1epihgq42)" }, header1XL: { fontSize: "var(--_1epihgq43)", lineHeight: "var(--_1epihgq44)" }, header2: { fontFamily: "var(--_1epihgq45)", fontSize: "var(--_1epihgq46)", lineHeight: "var(--_1epihgq47)" }, header2L: { fontSize: "var(--_1epihgq48)", lineHeight: "var(--_1epihgq49)" }, header2XL: { fontSize: "var(--_1epihgq4a)", lineHeight: "var(--_1epihgq4b)" }, header3: { fontFamily: "var(--_1epihgq4c)", fontSize: "var(--_1epihgq4d)", lineHeight: "var(--_1epihgq4e)" }, header3L: { fontSize: "var(--_1epihgq4f)", lineHeight: "var(--_1epihgq4g)" }, header3XL: { fontSize: "var(--_1epihgq4h)", lineHeight: "var(--_1epihgq4i)" }, header4: { fontFamily: "var(--_1epihgq4j)", fontSize: "var(--_1epihgq4k)", lineHeight: "var(--_1epihgq4l)" }, header4L: { fontSize: "var(--_1epihgq4m)", lineHeight: "var(--_1epihgq4n)" }, header4XL: { fontSize: "var(--_1epihgq4o)", lineHeight: "var(--_1epihgq4p)" }, header5: { fontFamily: "var(--_1epihgq4q)", fontSize: "var(--_1epihgq4r)", lineHeight: "var(--_1epihgq4s)" }, header5L: { fontSize: "var(--_1epihgq4t)", lineHeight: "var(--_1epihgq4u)" }, header5XL: { fontSize: "var(--_1epihgq4v)", lineHeight: "var(--_1epihgq4w)" }, header6: { fontFamily: "var(--_1epihgq4x)", fontSize: "var(--_1epihgq4y)", lineHeight: "var(--_1epihgq4z)" }, header6L: { fontSize: "var(--_1epihgq50)", lineHeight: "var(--_1epihgq51)" }, header6XL: { fontSize: "var(--_1epihgq52)", lineHeight: "var(--_1epihgq53)" }, paragraph8: { fontFamily: "var(--_1epihgq54)", fontSize: "var(--_1epihgq55)", lineHeight: "var(--_1epihgq56)" }, paragraph10: { fontFamily: "var(--_1epihgq57)", fontSize: "var(--_1epihgq58)", lineHeight: "var(--_1epihgq59)" }, paragraph12: { fontFamily: "var(--_1epihgq5a)", fontSize: "var(--_1epihgq5b)", lineHeight: "var(--_1epihgq5c)" }, paragraph14: { fontFamily: "var(--_1epihgq5d)", fontSize: "var(--_1epihgq5e)", lineHeight: "var(--_1epihgq5f)" }, paragraph16: { fontFamily: "var(--_1epihgq5g)", fontSize: "var(--_1epihgq5h)", lineHeight: "var(--_1epihgq5i)" }, paragraph18: { fontFamily: "var(--_1epihgq5j)", fontSize: "var(--_1epihgq5k)", lineHeight: "var(--_1epihgq5l)" } }, spacings: { 0: "var(--_1epihgq5m)", "16s": "var(--_1epihgq5n)", "14s": "var(--_1epihgq5o)", "12s": "var(--_1epihgq5p)", "10s": "var(--_1epihgq5q)", "9s": "var(--_1epihgq5r)", "8s": "var(--_1epihgq5s)", "7s": "var(--_1epihgq5t)", "6s": "var(--_1epihgq5u)", "5s": "var(--_1epihgq5v)", "4,75s": "var(--_1epihgq5w)", "4s": "var(--_1epihgq5x)", "3s": "var(--_1epihgq5y)", "2s": "var(--_1epihgq5z)", "1,75s": "var(--_1epihgq60)", "1,5s": "var(--_1epihgq61)", "1s": "var(--_1epihgq62)", "0,75s": "var(--_1epihgq63)", "0,5s": "var(--_1epihgq64)" }, radius: { "6r": "var(--_1epihgq65)", "5r": "var(--_1epihgq66)", "4r": "var(--_1epihgq67)", "3r": "var(--_1epihgq68)", "2r": "var(--_1epihgq69)", "1r": "var(--_1epihgq6a)", "0,75r": "var(--_1epihgq6b)", "0,5r": "var(--_1epihgq6c)" }, swirlRadius: { small: "var(--_1epihgq6d)", medium: "var(--_1epihgq6e)", large: "var(--_1epihgq6f)", xlarge: "var(--_1epihgq6g)", xxlarge: "var(--_1epihgq6h)" }, shadows: { one: "var(--_1epihgq6i)", two: "var(--_1epihgq6j)", three: "var(--_1epihgq6k)", threeNegativeYAxis: "var(--_1epihgq6l)", four: "var(--_1epihgq6m)", five: "var(--_1epihgq6n)", six: "var(--_1epihgq6o)" }, gradients: { one: "var(--_1epihgq6p)" } };
const A3 = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "m8.3 12 8-7.65-1.24-1.3L5.7 12l9.36 8.95 1.24-1.3-8-7.65Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), k3 = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "m15.7 12-8 7.65 1.24 1.3L18.3 12 8.94 3.05 7.7 4.35l8 7.65Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
);
var Z3 = "zf6z1hd", us = { topLevel: "zf6z1h3 zf6z1h2", secondLevel: "zf6z1h4 zf6z1h2", thirdLevel: "zf6z1h5 zf6z1h2" }, B3 = "zf6z1h8", Vo = { fullWidthDropdown: "zf6z1h0", relativeWidthDropdown: "zf6z1h1" }, D3 = "zf6z1h7", N3 = "zf6z1h6", O3 = { level1: "zf6z1ha zf6z1h9", level2: "zf6z1hb zf6z1h9", level3: "zf6z1hc zf6z1h9" };
var $3 = { inActive: "_11fw99d1 _11fw99d0", active: "_11fw99d2 _11fw99d0" };
let Po = 0;
const Cp = ({
  href: e,
  label: t,
  navItems: n,
  level: r = 1,
  onActiveIndexChange: s,
  isMainLevelActive: o,
  index: a
}) => {
  const [l, c] = N(!1), [d, f] = N(!1), h = tt()[0] < Number(nt.l.replace("px", "")), p = k(null), v = (y) => {
    s && s(y);
  }, m = n != null && n.length && n.length > 1 ? Vo.fullWidthDropdown : Vo.relativeWidthDropdown;
  let w = us.topLevel;
  r === 2 ? w = us.secondLevel : r === 3 && (w = us.thirdLevel);
  let x = r === 1 && !h ? !!o : l;
  return r > 1 && !h && o && (x = !0), /* @__PURE__ */ i.jsxs("li", { className: `${r === 1 ? m : ""}`, children: [
    /* @__PURE__ */ i.jsxs(
      "a",
      {
        href: e,
        className: `${w} ${x ? Pa : ""}`,
        onClick: (y) => {
          !h && (n != null && n.length) && r === 1 && !x && (y.preventDefault(), d || v(a)), h && (n != null && n.length) && (y.preventDefault(), c(!0), s && s(a || 0));
        },
        children: [
          t,
          /* @__PURE__ */ i.jsx("span", { className: N3, children: /* @__PURE__ */ i.jsx(k3, { className: D3 }) })
        ]
      }
    ),
    n && /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: $3[x ? "active" : "inActive"],
        ref: p,
        children: [
          /* @__PURE__ */ i.jsxs(
            "button",
            {
              onClick: () => {
                c(!1);
              },
              className: B3,
              children: [
                /* @__PURE__ */ i.jsx(A3, {}),
                t
              ]
            }
          ),
          /* @__PURE__ */ i.jsx(
            I3,
            {
              isActive: x,
              subNavContainerRef: p,
              onClose: () => {
                f(!0), clearTimeout(Po), Po = window.setTimeout(() => {
                  f(!1);
                }, 200), c(!1), s && s(void 0);
              },
              level: r,
              children: /* @__PURE__ */ i.jsx(Ga, { level: r + 1, children: n.map((y, C) => /* @__PURE__ */ i.jsx(Dt.Fragment, { children: y }, C)) })
            }
          )
        ]
      }
    )
  ] }, a);
}, I3 = ({
  children: e,
  isActive: t,
  onClose: n,
  subNavContainerRef: r,
  level: s
}) => {
  const a = tt()[0] < Number(nt.l.replace("px", "")), l = k(null);
  return a || s > 1 ? /* @__PURE__ */ i.jsx(i.Fragment, { children: e }) : /* @__PURE__ */ i.jsx(
    $n,
    {
      open: t,
      modal: !1,
      onOpenChange: (c) => {
        c || n();
      },
      children: /* @__PURE__ */ i.jsx(
        In,
        {
          ref: l,
          onPointerDownOutside: (c) => {
            var u;
            if (c.preventDefault(), !t)
              return;
            const d = (u = r.current) == null ? void 0 : u.contains(
              c.target
            ), f = c.target === l.current;
            (!d || !f) && n();
          },
          className: Z3,
          forceMount: !0,
          onEscapeKeyDown: () => {
            n();
          },
          children: e
        }
      )
    }
  );
}, Ga = ({
  children: e,
  level: t,
  mobileAccountButton: n
}) => {
  const s = tt()[0] < Number(nt.l.replace("px", ""));
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx("ul", { className: O3[`level${t}`], children: e }),
    s && t === 1 && n && /* @__PURE__ */ i.jsx("div", { className: E3, children: n })
  ] });
};
var z3 = "yh30yx0";
const F3 = ({
  children: e,
  isMenuOpen: t,
  onOpenChange: n
}) => tt()[0] < Number(nt.l.replace("px", "")) ? /* @__PURE__ */ i.jsxs($n, { open: t, modal: !0, onOpenChange: n, children: [
  /* @__PURE__ */ i.jsx(li, {}),
  /* @__PURE__ */ i.jsx(In, { className: R3, children: e })
] }) : /* @__PURE__ */ i.jsx(
  "div",
  {
    className: A(
      Fe,
      Ps,
      z3
    ),
    children: e
  }
), q3 = ({
  isMenuOpen: e,
  onOpenChange: t,
  children: n,
  mobileAccountButton: r
}) => {
  const [s, o] = N(void 0), a = Ne.map(n, (l, c) => ht(l, {
    index: c,
    isMainLevelActive: s === c,
    onActiveIndexChange: (d) => {
      d !== s && o(d);
    }
  }));
  return /* @__PURE__ */ i.jsx(F3, { isMenuOpen: e, onOpenChange: t, children: /* @__PURE__ */ i.jsx("nav", { className: H3, children: /* @__PURE__ */ i.jsx(Ga, { mobileAccountButton: r, level: 1, children: a }) }) });
}, jr = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M10.73 12 3.1 4.37 4.37 3.1 12 10.73l7.63-7.63 1.27 1.27L13.27 12l7.63 7.63-1.27 1.27L12 13.27 4.37 20.9 3.1 19.63 10.73 12Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
);
var W3 = "_1topwo74", U3 = "_1topwo75";
const Sr = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M14.21 15.59A6.995 6.995 0 0 1 3 10c0-3.87 3.13-7 7-7s7 3.13 7 7c0 1.64-.56 3.14-1.5 4.34l5.5 5.38-1.26 1.29-5.53-5.41ZM15.2 10c0 2.87-2.33 5.2-5.2 5.2S4.8 12.87 4.8 10 7.13 4.8 10 4.8s5.2 2.33 5.2 5.2Z"
      }
    )
  }
);
var G3 = "_1y2ff7g0", K3 = "_1y2ff7g3", Y3 = "_1y2ff7g1", X3 = "_1y2ff7g2", Eo = "_1y2ff7g4", J3 = "_1y2ff7g5", Ro = { default: "gm9kwm2", invertedColors: "gm9kwm3" }, Q3 = "gm9kwm0", e4 = "gm9kwm1";
const Ka = ({
  label: e,
  icon: t,
  invertedColors: n,
  ...r
}) => {
  const s = n ? Ro.invertedColors : Ro.default;
  return /* @__PURE__ */ i.jsxs(
    "button",
    {
      className: A(e4, s),
      ...r,
      children: [
        t,
        e && /* @__PURE__ */ i.jsx("span", { className: Q3, children: e })
      ]
    }
  );
};
var t4 = "ki0jez9", n4 = { left: "ki0jezc", right: "ki0jezd" }, r4 = { small: "ki0jez6", medium: "ki0jez7", large: "ki0jez8" }, s4 = "ki0jeze", i4 = { primary: "ki0jez2 ki0jez0", secondary: "ki0jez3 ki0jez0", tertiary: "ki0jez4 ki0jez0", transparent: "ki0jez5 ki0jez0" }, o4 = { primary: "ki0jezb ki0jeza" }, a4 = "ki0jez1";
const Ya = ({
  componentNode: e = "button",
  type: t = "primary",
  size: n = "small",
  iconPosition: r = "left",
  children: s,
  counter: o,
  invertColors: a = !1,
  icon: l,
  ...c
}) => {
  const d = i4[t], f = r4[n], u = l ? n4[r] : "", h = o ? o4.primary : "", v = A(
    d,
    f,
    u,
    a ? a4 : ""
  );
  return /* @__PURE__ */ i.jsxs(e, { className: v, ...c, children: [
    l && /* @__PURE__ */ i.jsx("span", { className: t4, children: l }),
    s && /* @__PURE__ */ i.jsx("span", { className: s4, children: s }),
    o && n === "large" && t === "primary" && /* @__PURE__ */ i.jsx("span", { className: h, children: o })
  ] });
};
var Dr = { one: "_1900asl0", two: "_1900asl1", three: "_1900asl2", threeNegativeYAxis: "_1900asl3", four: "_1900asl4", five: "_1900asl5", six: "_1900asl6" };
const l4 = ({
  placeholder: e,
  value: t,
  onChange: n,
  isParentOpen: r,
  searchButtonLabel: s,
  searchSuggestions: o,
  fieldIcon: a,
  showButton: l = !1,
  label: c,
  supportingText: d,
  id: f = "searchField"
}) => {
  const u = k(null), h = a ? ht(a, {
    className: Eo
  }) : /* @__PURE__ */ i.jsx(Sr, { className: Eo });
  return B(() => {
    r && u.current && u.current.focus();
  }, [r, u]), /* @__PURE__ */ i.jsxs(
    "form",
    {
      onSubmit: (p) => {
        p.preventDefault();
      },
      children: [
        c && /* @__PURE__ */ i.jsx("label", { htmlFor: f, className: Y3, children: c }),
        /* @__PURE__ */ i.jsxs("div", { className: G3, children: [
          h,
          /* @__PURE__ */ i.jsx(
            "input",
            {
              type: "text",
              id: f,
              placeholder: e,
              value: t,
              onChange: (p) => n(p.target.value),
              className: K3,
              ref: u
            }
          ),
          t && /* @__PURE__ */ i.jsx(Ka, { icon: /* @__PURE__ */ i.jsx(jr, {}), onClick: () => n("") }),
          l && /* @__PURE__ */ i.jsx(
            Ya,
            {
              type: "primary",
              size: "medium",
              icon: /* @__PURE__ */ i.jsx(Sr, {}),
              iconPosition: "right",
              children: s && /* @__PURE__ */ i.jsx(i.Fragment, { children: s })
            }
          ),
          o && t && /* @__PURE__ */ i.jsx(
            "div",
            {
              className: A(J3, Dr.two),
              children: o
            }
          )
        ] }),
        d && /* @__PURE__ */ i.jsx("p", { className: X3, children: d })
      ]
    }
  );
};
var c4 = "asj0v2", Ho = "dk6f4c0", u4 = "dk6f4cg", d4 = "dk6f4c1 dk6f4c0", f4 = "dk6f4c2 dk6f4c0", h4 = "dk6f4c3 dk6f4c0", p4 = "dk6f4c4 dk6f4c0", m4 = "dk6f4c5 dk6f4c0", v4 = "dk6f4c6 dk6f4c0", g4 = "dk6f4cd", x4 = "dk6f4cf", w4 = "dk6f4c8", y4 = "dk6f4c9", lr = "dk6f4ca", C4 = "dk6f4cb", b4 = "dk6f4cc", _4 = "dk6f4c7", j4 = "dk6f4ce";
function Ce({
  component: e = "p",
  variant: t,
  children: n,
  className: r = "",
  fontWeight: s = "light",
  spaceBelow: o
}) {
  const a = t || e, c = {
    h1: d4,
    h2: f4,
    h3: h4,
    h4: p4,
    h5: m4,
    h6: v4,
    p: lr,
    paragraph8: _4,
    paragraph10: w4,
    paragraph12: y4,
    paragraph14: lr,
    paragraph16: C4,
    paragraph18: b4,
    span: lr,
    div: lr
  }[a] ?? Ho;
  let d = g4;
  s === "regular" && (d = j4), s === "bold" && (d = u4), s === "medium" && (d = x4);
  let f = "";
  o && (f = c4);
  const u = A(
    c,
    Ho,
    a,
    r,
    d,
    f
  );
  return e === "h1" ? /* @__PURE__ */ i.jsx("h1", { className: u, children: n }) : e === "h2" ? /* @__PURE__ */ i.jsx("h2", { className: u, children: n }) : e === "h3" ? /* @__PURE__ */ i.jsx("h3", { className: u, children: n }) : e === "h4" ? /* @__PURE__ */ i.jsx("h4", { className: u, children: n }) : e === "h5" ? /* @__PURE__ */ i.jsx("h5", { className: u, children: n }) : e === "h6" ? /* @__PURE__ */ i.jsx("h6", { className: u, children: n }) : e === "div" ? /* @__PURE__ */ i.jsx("div", { className: u, children: n }) : e === "span" ? /* @__PURE__ */ i.jsx("span", { className: u, children: n }) : /* @__PURE__ */ i.jsx("p", { className: u, children: n });
}
var S4 = "zp3qgn2", M4 = "zp3qgn0", L4 = "zp3qgn1";
const T4 = ({ tags: e, label: t }) => /* @__PURE__ */ i.jsxs("div", { className: M4, children: [
  /* @__PURE__ */ i.jsx(Ce, { variant: "paragraph16", fontWeight: "medium", children: t }),
  /* @__PURE__ */ i.jsx("ul", { className: L4, children: e.map((n, r) => /* @__PURE__ */ i.jsx("li", { children: /* @__PURE__ */ i.jsx("button", { className: S4, children: n }) }, r)) })
] });
var V4 = "ksiy7w0";
const P4 = ({ children: e, ...t }) => /* @__PURE__ */ i.jsx("button", { className: V4, ...t, children: e });
var E4 = "b65uxn2", R4 = "b65uxn1", H4 = "b65uxn0";
const A4 = ({ categories: e }) => /* @__PURE__ */ i.jsx("div", { className: H4, children: e.map((t, n) => /* @__PURE__ */ i.jsxs("div", { children: [
  /* @__PURE__ */ i.jsx(
    Ce,
    {
      variant: "paragraph12",
      fontWeight: "regular",
      className: R4,
      children: t.name
    }
  ),
  t.suggestions.map((r, s) => /* @__PURE__ */ i.jsxs(P4, { onClick: r.onClick, children: [
    /* @__PURE__ */ i.jsx(Sr, { className: E4 }),
    /* @__PURE__ */ i.jsx(
      Ce,
      {
        component: "span",
        variant: "paragraph16",
        fontWeight: "regular",
        dangerouslySetInnerHTML: { __html: r.name },
        children: /* @__PURE__ */ i.jsx("span", { dangerouslySetInnerHTML: { __html: r.name } })
      }
    )
  ] }, s))
] }, n)) }), k4 = ({
  isOpen: e,
  onOpenChange: t,
  placeholder: n
}) => {
  const [r, s] = N(""), o = e ? Pa : "", l = tt()[0] < Number(nt.l.replace("px", ""));
  return /* @__PURE__ */ i.jsxs($n, { open: e, modal: l, onOpenChange: t, children: [
    /* @__PURE__ */ i.jsx(li, {}),
    /* @__PURE__ */ i.jsx(In, { className: A(W3), children: /* @__PURE__ */ i.jsx("div", { className: Fe, children: /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: A(
          U3,
          Dr.three,
          o
        ),
        children: [
          /* @__PURE__ */ i.jsx(
            l4,
            {
              onChange: (c) => s(c),
              placeholder: n ?? "",
              value: r,
              isParentOpen: e
            }
          ),
          r.length > 0 ? /* @__PURE__ */ i.jsx(
            A4,
            {
              categories: [
                {
                  name: "Products",
                  suggestions: [
                    {
                      name: "Thermo<strong>mix TM6</strong>",
                      onClick: () => {
                      }
                    },
                    {
                      name: "<strong>Cookbook “Fit with</strong> Thermo<strong>mix®”</strong>",
                      onClick: () => {
                      }
                    }
                  ]
                },
                {
                  name: "Articles",
                  suggestions: [
                    {
                      name: "<strong>Tips and tricks for</strong> Thermo<strong>mix®</strong>",
                      onClick: () => {
                      }
                    },
                    {
                      name: "<strong>How Star chefs use</strong> Thermo<strong>mix®</strong>",
                      onClick: () => {
                      }
                    }
                  ]
                }
              ]
            }
          ) : /* @__PURE__ */ i.jsx(
            T4,
            {
              label: "Searched most often",
              tags: [
                "Thermomix TM6",
                "Kobold VK7",
                "Robot",
                "Hotline",
                "Accessories"
              ]
            }
          )
        ]
      }
    ) }) })
  ] });
}, bp = ({
  logo: e,
  landingPageLogo: t,
  advisor: n,
  cart: r,
  backgroundType: s = "transparent",
  stickyMode: o = "sticky",
  isLandingPage: a = !1,
  navigation: l,
  mobileAccountButton: c
}) => {
  const [d, f] = N(!1), [u, h] = N(!1), [p, v] = N(!0), [m, w] = N(!1), y = tt()[0] < Number(nt.l.replace("px", "")), [C, _] = N(!1);
  B(() => {
    let E = window.scrollY;
    const J = Va(() => {
      const F = window.scrollY;
      F > E ? (f(!0), h(!1), v(!1)) : F === 0 ? (f(!1), h(!1), v(!0)) : (f(!1), h(!0), v(!1)), E = F;
    }, 0);
    return window.addEventListener("scroll", J), () => {
      window.removeEventListener("scroll", J);
    };
  }, []);
  const j = a ? Q2 : "", M = d ? t0 : "", L = u ? n0 : "", b = p ? e0 : "";
  let V = nr[s] || "";
  return a && (V = nr.transparent, o = "normal"), o === "sticky" && (M || L) && (V = nr.solidWhite), o === "semiSticky" && u && !p && (V = nr.solidWhite), /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsx(
      "header",
      {
        className: A(
          s0[o],
          M,
          L,
          V,
          j,
          b
        ),
        children: a ? /* @__PURE__ */ i.jsx(
          "div",
          {
            className: A(
              Fe,
              go,
              Ps
            ),
            children: /* @__PURE__ */ i.jsx("div", { className: r0, children: t })
          }
        ) : /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
          /* @__PURE__ */ i.jsxs(
            "div",
            {
              className: A(
                Fe,
                go,
                Ps
              ),
              children: [
                /* @__PURE__ */ i.jsxs("div", { className: vo, children: [
                  y && /* @__PURE__ */ i.jsx(
                    Es,
                    {
                      label: "Menu",
                      children: m ? /* @__PURE__ */ i.jsx(jr, {}) : /* @__PURE__ */ i.jsx(l0, {}),
                      disabled: m,
                      onClick: () => {
                        w(!m);
                      }
                    }
                  ),
                  n
                ] }),
                /* @__PURE__ */ i.jsx("div", { children: e }),
                /* @__PURE__ */ i.jsxs("div", { className: vo, children: [
                  /* @__PURE__ */ i.jsx(
                    Es,
                    {
                      label: "Search",
                      children: C ? /* @__PURE__ */ i.jsx(jr, {}) : /* @__PURE__ */ i.jsx(Sr, {}),
                      onClick: () => {
                        _(!C);
                      }
                    }
                  ),
                  r
                ] })
              ]
            }
          ),
          /* @__PURE__ */ i.jsx(
            q3,
            {
              isMenuOpen: m,
              onOpenChange: (E) => w(E),
              mobileAccountButton: c,
              children: l
            }
          ),
          /* @__PURE__ */ i.jsx(
            k4,
            {
              isOpen: C,
              onOpenChange: (E) => {
                _(E);
              },
              placeholder: "Search"
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ i.jsx("div", { className: A(J2) })
  ] });
};
var Z4 = { left: "_7kok976", center: "_7kok977", right: "_7kok978" }, B4 = { horizontal: "_7kok971 _7kok970", vertical: "_7kok972 _7kok970" }, D4 = { fill: "_7kok973", "50%": "_7kok974", hug: "_7kok975" };
const N4 = ({
  children: e,
  layout: t = "horizontal",
  sizing: n = "hug",
  alignment: r = "left"
}) => {
  const s = B4[t], o = n ? D4[n] : "", a = Z4[r];
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      className: A(
        s,
        o,
        a
      ),
      children: e
    }
  );
};
var O4 = "_1epihgq0", $4 = "_5yj2ss0";
const Mr = Dt.forwardRef(function({ children: e, className: t, ...n }, r) {
  return /* @__PURE__ */ i.jsx("div", { ref: r, className: A(O4, t), ...n, children: e });
}), I4 = Dt.forwardRef(function({ children: e, className: t, ...n }, r) {
  return /* @__PURE__ */ i.jsx(
    "div",
    {
      ref: r,
      className: A($4, t),
      ...n,
      children: e
    }
  );
}), Nr = Ie({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), Or = Ie({}), $r = Ie(null), ci = typeof document < "u", zn = ci ? ni : B, Xa = Ie({ strict: !1 }), ui = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(), z4 = "framerAppearId", Ja = "data-" + ui(z4), F4 = {
  skipAnimations: !1,
  useManualTiming: !1
};
class Ao {
  constructor() {
    this.order = [], this.scheduled = /* @__PURE__ */ new Set();
  }
  add(t) {
    if (!this.scheduled.has(t))
      return this.scheduled.add(t), this.order.push(t), !0;
  }
  remove(t) {
    const n = this.order.indexOf(t);
    n !== -1 && (this.order.splice(n, 1), this.scheduled.delete(t));
  }
  clear() {
    this.order.length = 0, this.scheduled.clear();
  }
}
function q4(e) {
  let t = new Ao(), n = new Ao(), r = 0, s = !1, o = !1;
  const a = /* @__PURE__ */ new WeakSet(), l = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (c, d = !1, f = !1) => {
      const u = f && s, h = u ? t : n;
      return d && a.add(c), h.add(c) && u && s && (r = t.order.length), c;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (c) => {
      n.remove(c), a.delete(c);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (c) => {
      if (s) {
        o = !0;
        return;
      }
      if (s = !0, [t, n] = [n, t], n.clear(), r = t.order.length, r)
        for (let d = 0; d < r; d++) {
          const f = t.order[d];
          a.has(f) && (l.schedule(f), e()), f(c);
        }
      s = !1, o && (o = !1, l.process(c));
    }
  };
  return l;
}
const cr = [
  "read",
  // Read
  "resolveKeyframes",
  // Write/Read/Write/Read
  "update",
  // Compute
  "preRender",
  // Compute
  "render",
  // Write
  "postRender"
  // Compute
], W4 = 40;
function Qa(e, t) {
  let n = !1, r = !0;
  const s = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }, o = cr.reduce((u, h) => (u[h] = q4(() => n = !0), u), {}), a = (u) => {
    o[u].process(s);
  }, l = () => {
    const u = performance.now();
    n = !1, s.delta = r ? 1e3 / 60 : Math.max(Math.min(u - s.timestamp, W4), 1), s.timestamp = u, s.isProcessing = !0, cr.forEach(a), s.isProcessing = !1, n && t && (r = !1, e(l));
  }, c = () => {
    n = !0, r = !0, s.isProcessing || e(l);
  };
  return { schedule: cr.reduce((u, h) => {
    const p = o[h];
    return u[h] = (v, m = !1, w = !1) => (n || c(), p.schedule(v, m, w)), u;
  }, {}), cancel: (u) => cr.forEach((h) => o[h].cancel(u)), state: s, steps: o };
}
const { schedule: di, cancel: _p } = Qa(queueMicrotask, !1);
function Kt(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
const el = Ie({});
let ko = !1;
function U4(e, t, n, r, s) {
  const { visualElement: o } = ue(Or), a = ue(Xa), l = ue($r), c = ue(Nr).reducedMotion, d = k();
  r = r || a.renderer, !d.current && r && (d.current = r(e, {
    visualState: t,
    parent: o,
    props: n,
    presenceContext: l,
    blockInitialAnimation: l ? l.initial === !1 : !1,
    reducedMotionConfig: c
  }));
  const f = d.current, u = ue(el);
  f && !f.projection && s && (f.type === "html" || f.type === "svg") && K4(d.current, n, s, u), ri(() => {
    f && f.update(n, l);
  });
  const h = k(!!(n[Ja] && !window.HandoffComplete));
  return zn(() => {
    f && (f.updateFeatures(), di.render(f.render), h.current && f.animationState && f.animationState.animateChanges());
  }), B(() => {
    f && (!h.current && f.animationState && f.animationState.animateChanges(), h.current && (h.current = !1, ko || (ko = !0, queueMicrotask(G4))));
  }), f;
}
function G4() {
  window.HandoffComplete = !0;
}
function K4(e, t, n, r) {
  const { layoutId: s, layout: o, drag: a, dragConstraints: l, layoutScroll: c, layoutRoot: d } = t;
  e.projection = new n(e.latestValues, t["data-framer-portal-id"] ? void 0 : tl(e.parent)), e.projection.setOptions({
    layoutId: s,
    layout: o,
    alwaysMeasureLayout: !!a || l && Kt(l),
    visualElement: e,
    scheduleRender: () => e.scheduleRender(),
    /**
     * TODO: Update options in an effect. This could be tricky as it'll be too late
     * to update by the time layout animations run.
     * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
     * ensuring it gets called if there's no potential layout animations.
     *
     */
    animationType: typeof o == "string" ? o : "both",
    initialPromotionConfig: r,
    layoutScroll: c,
    layoutRoot: d
  });
}
function tl(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : tl(e.parent);
}
function Y4(e, t, n) {
  return be(
    (r) => {
      r && e.mount && e.mount(r), t && (r ? t.mount(r) : t.unmount()), n && (typeof n == "function" ? n(r) : Kt(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function An(e) {
  return typeof e == "string" || Array.isArray(e);
}
function Ir(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const fi = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], hi = ["initial", ...fi];
function zr(e) {
  return Ir(e.animate) || hi.some((t) => An(e[t]));
}
function nl(e) {
  return !!(zr(e) || e.variants);
}
function X4(e, t) {
  if (zr(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || An(n) ? n : void 0,
      animate: An(r) ? r : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function J4(e) {
  const { initial: t, animate: n } = X4(e, ue(Or));
  return ze(() => ({ initial: t, animate: n }), [Zo(t), Zo(n)]);
}
function Zo(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Bo = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, tn = {};
for (const e in Bo)
  tn[e] = {
    isEnabled: (t) => Bo[e].some((n) => !!t[n])
  };
function Q4(e) {
  for (const t in e)
    tn[t] = {
      ...tn[t],
      ...e[t]
    };
}
const pi = Ie({}), eu = Symbol.for("motionComponentSymbol"), _e = (e) => e;
let Nt = _e, qe = _e;
process.env.NODE_ENV !== "production" && (Nt = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, qe = (e, t) => {
  if (!e)
    throw new Error(t);
});
function tu({ preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: s }) {
  e && Q4(e);
  function o(l, c) {
    let d;
    const f = {
      ...ue(Nr),
      ...l,
      layoutId: nu(l)
    }, { isStatic: u } = f, h = J4(l), p = r(l, u);
    if (!u && ci) {
      ru(f, e);
      const v = su(f);
      d = v.MeasureLayout, h.visualElement = U4(s, p, f, t, v.ProjectionNode);
    }
    return i.jsxs(Or.Provider, { value: h, children: [d && h.visualElement ? i.jsx(d, { visualElement: h.visualElement, ...f }) : null, n(s, l, Y4(p, h.visualElement, c), p, u, h.visualElement)] });
  }
  const a = ge(o);
  return a[eu] = s, a;
}
function nu({ layoutId: e }) {
  const t = ue(pi).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function ru(e, t) {
  const n = ue(Xa).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const r = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? Nt(!1, r) : qe(!1, r);
  }
}
function su(e) {
  const { drag: t, layout: n } = tn;
  if (!t && !n)
    return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode
  };
}
function iu(e) {
  function t(r, s = {}) {
    return tu(e(r, s));
  }
  if (typeof Proxy > "u")
    return t;
  const n = /* @__PURE__ */ new Map();
  return new Proxy(t, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, s) => (n.has(s) || n.set(s, t(s)), n.get(s))
  });
}
const ou = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function mi(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(ou.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/u.test(e))
    )
  );
}
const Lr = {};
function au(e) {
  Object.assign(Lr, e);
}
const Fn = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], Ot = new Set(Fn);
function rl(e, { layout: t, layoutId: n }) {
  return Ot.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Lr[e] || e === "opacity");
}
const ve = (e) => !!(e && e.getVelocity), lu = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, cu = Fn.length;
function uu(e, { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 }, r, s) {
  let o = "";
  for (let a = 0; a < cu; a++) {
    const l = Fn[a];
    if (e[l] !== void 0) {
      const c = lu[l] || l;
      o += `${c}(${e[l]}) `;
    }
  }
  return t && !e.z && (o += "translateZ(0)"), o = o.trim(), s ? o = s(e, r ? "" : o) : n && r && (o = "none"), o;
}
const sl = (e) => (t) => typeof t == "string" && t.startsWith(e), il = sl("--"), du = sl("var(--"), vi = (e) => du(e) ? fu.test(e.split("/*")[0].trim()) : !1, fu = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu, hu = (e, t) => t && typeof e == "number" ? t.transform(e) : e, Ct = (e, t, n) => n > t ? t : n < e ? e : n, ln = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Sn = {
  ...ln,
  transform: (e) => Ct(0, 1, e)
}, ur = {
  ...ln,
  default: 1
}, Mn = (e) => Math.round(e * 1e5) / 1e5, gi = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu, pu = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu, mu = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function qn(e) {
  return typeof e == "string";
}
const Wn = (e) => ({
  test: (t) => qn(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), gt = Wn("deg"), Xe = Wn("%"), R = Wn("px"), vu = Wn("vh"), gu = Wn("vw"), Do = {
  ...Xe,
  parse: (e) => Xe.parse(e) / 100,
  transform: (e) => Xe.transform(e * 100)
}, No = {
  ...ln,
  transform: Math.round
}, ol = {
  // Border props
  borderWidth: R,
  borderTopWidth: R,
  borderRightWidth: R,
  borderBottomWidth: R,
  borderLeftWidth: R,
  borderRadius: R,
  radius: R,
  borderTopLeftRadius: R,
  borderTopRightRadius: R,
  borderBottomRightRadius: R,
  borderBottomLeftRadius: R,
  // Positioning props
  width: R,
  maxWidth: R,
  height: R,
  maxHeight: R,
  size: R,
  top: R,
  right: R,
  bottom: R,
  left: R,
  // Spacing props
  padding: R,
  paddingTop: R,
  paddingRight: R,
  paddingBottom: R,
  paddingLeft: R,
  margin: R,
  marginTop: R,
  marginRight: R,
  marginBottom: R,
  marginLeft: R,
  // Transform props
  rotate: gt,
  rotateX: gt,
  rotateY: gt,
  rotateZ: gt,
  scale: ur,
  scaleX: ur,
  scaleY: ur,
  scaleZ: ur,
  skew: gt,
  skewX: gt,
  skewY: gt,
  distance: R,
  translateX: R,
  translateY: R,
  translateZ: R,
  x: R,
  y: R,
  z: R,
  perspective: R,
  transformPerspective: R,
  opacity: Sn,
  originX: Do,
  originY: Do,
  originZ: R,
  // Misc
  zIndex: No,
  backgroundPositionX: R,
  backgroundPositionY: R,
  // SVG
  fillOpacity: Sn,
  strokeOpacity: Sn,
  numOctaves: No
};
function xi(e, t, n, r) {
  const { style: s, vars: o, transform: a, transformOrigin: l } = e;
  let c = !1, d = !1, f = !0;
  for (const u in t) {
    const h = t[u];
    if (il(u)) {
      o[u] = h;
      continue;
    }
    const p = ol[u], v = hu(h, p);
    if (Ot.has(u)) {
      if (c = !0, a[u] = v, !f)
        continue;
      h !== (p.default || 0) && (f = !1);
    } else
      u.startsWith("origin") ? (d = !0, l[u] = v) : s[u] = v;
  }
  if (t.transform || (c || r ? s.transform = uu(e.transform, n, f, r) : s.transform && (s.transform = "none")), d) {
    const { originX: u = "50%", originY: h = "50%", originZ: p = 0 } = l;
    s.transformOrigin = `${u} ${h} ${p}`;
  }
}
const wi = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function al(e, t, n) {
  for (const r in t)
    !ve(t[r]) && !rl(r, n) && (e[r] = t[r]);
}
function xu({ transformTemplate: e }, t, n) {
  return ze(() => {
    const r = wi();
    return xi(r, t, { enableHardwareAcceleration: !n }, e), Object.assign({}, r.vars, r.style);
  }, [t]);
}
function wu(e, t, n) {
  const r = e.style || {}, s = {};
  return al(s, r, e), Object.assign(s, xu(e, t, n)), s;
}
function yu(e, t, n) {
  const r = {}, s = wu(e, t, n);
  return e.drag && e.dragListener !== !1 && (r.draggable = !1, s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none", s.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0), r.style = s, r;
}
const Cu = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "ignoreStrict",
  "viewport"
]);
function Tr(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Cu.has(e);
}
let ll = (e) => !Tr(e);
function bu(e) {
  e && (ll = (t) => t.startsWith("on") ? !Tr(t) : e(t));
}
try {
  bu(require("@emotion/is-prop-valid").default);
} catch {
}
function _u(e, t, n) {
  const r = {};
  for (const s in e)
    s === "values" && typeof e.values == "object" || (ll(s) || n === !0 && Tr(s) || !t && !Tr(s) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && s.startsWith("onDrag")) && (r[s] = e[s]);
  return r;
}
function Oo(e, t, n) {
  return typeof e == "string" ? e : R.transform(t + n * e);
}
function ju(e, t, n) {
  const r = Oo(t, e.x, e.width), s = Oo(n, e.y, e.height);
  return `${r} ${s}`;
}
const Su = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, Mu = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function Lu(e, t, n = 1, r = 0, s = !0) {
  e.pathLength = 1;
  const o = s ? Su : Mu;
  e[o.offset] = R.transform(-r);
  const a = R.transform(t), l = R.transform(n);
  e[o.array] = `${a} ${l}`;
}
function yi(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  originX: s,
  originY: o,
  pathLength: a,
  pathSpacing: l = 1,
  pathOffset: c = 0,
  // This is object creation, which we try to avoid per-frame.
  ...d
}, f, u, h) {
  if (xi(e, d, f, h), u) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: p, style: v, dimensions: m } = e;
  p.transform && (m && (v.transform = p.transform), delete p.transform), m && (s !== void 0 || o !== void 0 || v.transform) && (v.transformOrigin = ju(m, s !== void 0 ? s : 0.5, o !== void 0 ? o : 0.5)), t !== void 0 && (p.x = t), n !== void 0 && (p.y = n), r !== void 0 && (p.scale = r), a !== void 0 && Lu(p, a, l, c, !1);
}
const cl = () => ({
  ...wi(),
  attrs: {}
}), Ci = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function Tu(e, t, n, r) {
  const s = ze(() => {
    const o = cl();
    return yi(o, t, { enableHardwareAcceleration: !1 }, Ci(r), e.transformTemplate), {
      ...o.attrs,
      style: { ...o.style }
    };
  }, [t]);
  if (e.style) {
    const o = {};
    al(o, e.style, e), s.style = { ...o, ...s.style };
  }
  return s;
}
function Vu(e = !1) {
  return (n, r, s, { latestValues: o }, a) => {
    const c = (mi(n) ? Tu : yu)(r, o, a, n), d = _u(r, typeof n == "string", e), f = n !== Zr ? { ...d, ...c, ref: s } : {}, { children: u } = r, h = ze(() => ve(u) ? u.get() : u, [u]);
    return G(n, {
      ...f,
      children: h
    });
  };
}
function ul(e, { style: t, vars: n }, r, s) {
  Object.assign(e.style, t, s && s.getProjectionStyles(r));
  for (const o in n)
    e.style.setProperty(o, n[o]);
}
const dl = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function fl(e, t, n, r) {
  ul(e, t, void 0, r);
  for (const s in t.attrs)
    e.setAttribute(dl.has(s) ? s : ui(s), t.attrs[s]);
}
function bi(e, t, n) {
  var r;
  const { style: s } = e, o = {};
  for (const a in s)
    (ve(s[a]) || t.style && ve(t.style[a]) || rl(a, e) || ((r = n == null ? void 0 : n.getValue(a)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (o[a] = s[a]);
  return o;
}
function hl(e, t, n) {
  const r = bi(e, t, n);
  for (const s in e)
    if (ve(e[s]) || ve(t[s])) {
      const o = Fn.indexOf(s) !== -1 ? "attr" + s.charAt(0).toUpperCase() + s.substring(1) : s;
      r[o] = e[s];
    }
  return r;
}
function $o(e) {
  const t = [{}, {}];
  return e == null || e.values.forEach((n, r) => {
    t[0][r] = n.get(), t[1][r] = n.getVelocity();
  }), t;
}
function _i(e, t, n, r) {
  if (typeof t == "function") {
    const [s, o] = $o(r);
    t = t(n !== void 0 ? n : e.custom, s, o);
  }
  if (typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function") {
    const [s, o] = $o(r);
    t = t(n !== void 0 ? n : e.custom, s, o);
  }
  return t;
}
function Un(e) {
  const t = k(null);
  return t.current === null && (t.current = e()), t.current;
}
const Bs = (e) => Array.isArray(e), Pu = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), Eu = (e) => Bs(e) ? e[e.length - 1] || 0 : e;
function gr(e) {
  const t = ve(e) ? e.get() : e;
  return Pu(t) ? t.toValue() : t;
}
function Ru({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n }, r, s, o) {
  const a = {
    latestValues: Hu(r, s, o, e),
    renderState: t()
  };
  return n && (a.mount = (l) => n(r, l, a)), a;
}
const pl = (e) => (t, n) => {
  const r = ue(Or), s = ue($r), o = () => Ru(e, t, r, s);
  return n ? o() : Un(o);
};
function Hu(e, t, n, r) {
  const s = {}, o = r(e, {});
  for (const h in o)
    s[h] = gr(o[h]);
  let { initial: a, animate: l } = e;
  const c = zr(e), d = nl(e);
  t && d && !c && e.inherit !== !1 && (a === void 0 && (a = t.initial), l === void 0 && (l = t.animate));
  let f = n ? n.initial === !1 : !1;
  f = f || a === !1;
  const u = f ? l : a;
  return u && typeof u != "boolean" && !Ir(u) && (Array.isArray(u) ? u : [u]).forEach((p) => {
    const v = _i(e, p);
    if (!v)
      return;
    const { transitionEnd: m, transition: w, ...x } = v;
    for (const y in x) {
      let C = x[y];
      if (Array.isArray(C)) {
        const _ = f ? C.length - 1 : 0;
        C = C[_];
      }
      C !== null && (s[y] = C);
    }
    for (const y in m)
      s[y] = m[y];
  }), s;
}
const { schedule: z, cancel: We, state: me, steps: ds } = Qa(typeof requestAnimationFrame < "u" ? requestAnimationFrame : _e, !0), Au = {
  useVisualState: pl({
    scrapeMotionValuesFromProps: hl,
    createRenderState: cl,
    onMount: (e, t, { renderState: n, latestValues: r }) => {
      z.read(() => {
        try {
          n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
        } catch {
          n.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
          };
        }
      }), z.render(() => {
        yi(n, r, { enableHardwareAcceleration: !1 }, Ci(t.tagName), e.transformTemplate), fl(t, n);
      });
    }
  })
}, ku = {
  useVisualState: pl({
    scrapeMotionValuesFromProps: bi,
    createRenderState: wi
  })
};
function Zu(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...mi(e) ? Au : ku,
    preloadedFeatures: n,
    useRender: Vu(t),
    createVisualElement: r,
    Component: e
  };
}
function ct(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const ml = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Fr(e, t = "page") {
  return {
    point: {
      x: e[`${t}X`],
      y: e[`${t}Y`]
    }
  };
}
const Bu = (e) => (t) => ml(t) && e(t, Fr(t));
function dt(e, t, n, r) {
  return ct(e, t, Bu(n), r);
}
const Du = (e, t) => (n) => t(e(n)), ft = (...e) => e.reduce(Du);
function vl(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? (t = e, n) : !1;
  };
}
const Io = vl("dragHorizontal"), zo = vl("dragVertical");
function gl(e) {
  let t = !1;
  if (e === "y")
    t = zo();
  else if (e === "x")
    t = Io();
  else {
    const n = Io(), r = zo();
    n && r ? t = () => {
      n(), r();
    } : (n && n(), r && r());
  }
  return t;
}
function xl() {
  const e = gl(!0);
  return e ? (e(), !1) : !0;
}
class _t {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function Fo(e, t) {
  const n = t ? "pointerenter" : "pointerleave", r = t ? "onHoverStart" : "onHoverEnd", s = (o, a) => {
    if (o.pointerType === "touch" || xl())
      return;
    const l = e.getProps();
    e.animationState && l.whileHover && e.animationState.setActive("whileHover", t);
    const c = l[r];
    c && z.postRender(() => c(o, a));
  };
  return dt(e.current, n, s, {
    passive: !e.getProps()[r]
  });
}
class Nu extends _t {
  mount() {
    this.unmount = ft(Fo(this.node, !0), Fo(this.node, !1));
  }
  unmount() {
  }
}
class Ou extends _t {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = ft(ct(this.node.current, "focus", () => this.onFocus()), ct(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const wl = (e, t) => t ? e === t ? !0 : wl(e, t.parentElement) : !1;
function fs(e, t) {
  if (!t)
    return;
  const n = new PointerEvent("pointer" + e);
  t(n, Fr(n));
}
class $u extends _t {
  constructor() {
    super(...arguments), this.removeStartListeners = _e, this.removeEndListeners = _e, this.removeAccessibleListeners = _e, this.startPointerPress = (t, n) => {
      if (this.isPressing)
        return;
      this.removeEndListeners();
      const r = this.node.getProps(), o = dt(window, "pointerup", (l, c) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: d, onTapCancel: f, globalTapTarget: u } = this.node.getProps(), h = !u && !wl(this.node.current, l.target) ? f : d;
        h && z.update(() => h(l, c));
      }, {
        passive: !(r.onTap || r.onPointerUp)
      }), a = dt(window, "pointercancel", (l, c) => this.cancelPress(l, c), {
        passive: !(r.onTapCancel || r.onPointerCancel)
      });
      this.removeEndListeners = ft(o, a), this.startPress(t, n);
    }, this.startAccessiblePress = () => {
      const t = (o) => {
        if (o.key !== "Enter" || this.isPressing)
          return;
        const a = (l) => {
          l.key !== "Enter" || !this.checkPressEnd() || fs("up", (c, d) => {
            const { onTap: f } = this.node.getProps();
            f && z.postRender(() => f(c, d));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = ct(this.node.current, "keyup", a), fs("down", (l, c) => {
          this.startPress(l, c);
        });
      }, n = ct(this.node.current, "keydown", t), r = () => {
        this.isPressing && fs("cancel", (o, a) => this.cancelPress(o, a));
      }, s = ct(this.node.current, "blur", r);
      this.removeAccessibleListeners = ft(n, s);
    };
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: s } = this.node.getProps();
    s && this.node.animationState && this.node.animationState.setActive("whileTap", !0), r && z.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !xl();
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: r } = this.node.getProps();
    r && z.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(), n = dt(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
      passive: !(t.onTapStart || t.onPointerStart)
    }), r = ct(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = ft(n, r);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Ds = /* @__PURE__ */ new WeakMap(), hs = /* @__PURE__ */ new WeakMap(), Iu = (e) => {
  const t = Ds.get(e.target);
  t && t(e);
}, zu = (e) => {
  e.forEach(Iu);
};
function Fu({ root: e, ...t }) {
  const n = e || document;
  hs.has(n) || hs.set(n, {});
  const r = hs.get(n), s = JSON.stringify(t);
  return r[s] || (r[s] = new IntersectionObserver(zu, { root: e, ...t })), r[s];
}
function qu(e, t, n) {
  const r = Fu(t);
  return Ds.set(e, n), r.observe(e), () => {
    Ds.delete(e), r.unobserve(e);
  };
}
const Wu = {
  some: 0,
  all: 1
};
class Uu extends _t {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: n, margin: r, amount: s = "some", once: o } = t, a = {
      root: n ? n.current : void 0,
      rootMargin: r,
      threshold: typeof s == "number" ? s : Wu[s]
    }, l = (c) => {
      const { isIntersecting: d } = c;
      if (this.isInView === d || (this.isInView = d, o && !d && this.hasEnteredView))
        return;
      d && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", d);
      const { onViewportEnter: f, onViewportLeave: u } = this.node.getProps(), h = d ? f : u;
      h && h(c);
    };
    return qu(this.node.current, a, l);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(Gu(t, n)) && this.startObserver();
  }
  unmount() {
  }
}
function Gu({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const Ku = {
  inView: {
    Feature: Uu
  },
  tap: {
    Feature: $u
  },
  focus: {
    Feature: Ou
  },
  hover: {
    Feature: Nu
  }
};
function yl(e, t) {
  if (!Array.isArray(t))
    return !1;
  const n = t.length;
  if (n !== e.length)
    return !1;
  for (let r = 0; r < n; r++)
    if (t[r] !== e[r])
      return !1;
  return !0;
}
function qr(e, t, n) {
  const r = e.getProps();
  return _i(r, t, n !== void 0 ? n : r.custom, e);
}
const Je = (e) => e * 1e3, Qe = (e) => e / 1e3, Yu = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Xu = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Ju = {
  type: "keyframes",
  duration: 0.8
}, Qu = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, e5 = (e, { keyframes: t }) => t.length > 2 ? Ju : Ot.has(e) ? e.startsWith("scale") ? Xu(t[1]) : Yu : Qu;
function t5({ when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: s, repeat: o, repeatType: a, repeatDelay: l, from: c, elapsed: d, ...f }) {
  return !!Object.keys(f).length;
}
function ji(e, t) {
  return e[t] || e.default || e;
}
const n5 = (e) => e !== null;
function Wr(e, { repeat: t, repeatType: n = "loop" }, r) {
  const s = e.filter(n5), o = t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return !o || r === void 0 ? s[o] : r;
}
let xr;
function r5() {
  xr = void 0;
}
const yt = {
  now: () => (xr === void 0 && yt.set(me.isProcessing || F4.useManualTiming ? me.timestamp : performance.now()), xr),
  set: (e) => {
    xr = e, queueMicrotask(r5);
  }
}, Cl = (e) => /^0[^.\s]+$/u.test(e);
function s5(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Cl(e) : !0;
}
const bl = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e), i5 = (
  // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
  /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u
);
function o5(e) {
  const t = i5.exec(e);
  if (!t)
    return [,];
  const [, n, r, s] = t;
  return [`--${n ?? r}`, s];
}
const a5 = 4;
function _l(e, t, n = 1) {
  qe(n <= a5, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [r, s] = o5(e);
  if (!r)
    return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const a = o.trim();
    return bl(a) ? parseFloat(a) : a;
  }
  return vi(s) ? _l(s, t, n + 1) : s;
}
const l5 = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y",
  "translateX",
  "translateY"
]), qo = (e) => e === ln || e === R, Wo = (e, t) => parseFloat(e.split(", ")[t]), Uo = (e, t) => (n, { transform: r }) => {
  if (r === "none" || !r)
    return 0;
  const s = r.match(/^matrix3d\((.+)\)$/u);
  if (s)
    return Wo(s[1], t);
  {
    const o = r.match(/^matrix\((.+)\)$/u);
    return o ? Wo(o[1], e) : 0;
  }
}, c5 = /* @__PURE__ */ new Set(["x", "y", "z"]), u5 = Fn.filter((e) => !c5.has(e));
function d5(e) {
  const t = [];
  return u5.forEach((n) => {
    const r = e.getValue(n);
    r !== void 0 && (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
  }), t;
}
const nn = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: Uo(4, 13),
  y: Uo(5, 14)
};
nn.translateX = nn.x;
nn.translateY = nn.y;
const jl = (e) => (t) => t.test(e), f5 = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Sl = [ln, R, Xe, gt, gu, vu, f5], Go = (e) => Sl.find(jl(e)), Rt = /* @__PURE__ */ new Set();
let Ns = !1, Os = !1;
function Ml() {
  if (Os) {
    const e = Array.from(Rt).filter((r) => r.needsMeasurement), t = new Set(e.map((r) => r.element)), n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const s = d5(r);
      s.length && (n.set(r, s), r.render());
    }), e.forEach((r) => r.measureInitialState()), t.forEach((r) => {
      r.render();
      const s = n.get(r);
      s && s.forEach(([o, a]) => {
        var l;
        (l = r.getValue(o)) === null || l === void 0 || l.set(a);
      });
    }), e.forEach((r) => r.measureEndState()), e.forEach((r) => {
      r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
    });
  }
  Os = !1, Ns = !1, Rt.forEach((e) => e.complete()), Rt.clear();
}
function Ll() {
  Rt.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (Os = !0);
  });
}
function h5() {
  Ll(), Ml();
}
class Si {
  constructor(t, n, r, s, o, a = !1) {
    this.isComplete = !1, this.isAsync = !1, this.needsMeasurement = !1, this.isScheduled = !1, this.unresolvedKeyframes = [...t], this.onComplete = n, this.name = r, this.motionValue = s, this.element = o, this.isAsync = a;
  }
  scheduleResolve() {
    this.isScheduled = !0, this.isAsync ? (Rt.add(this), Ns || (Ns = !0, z.read(Ll), z.resolveKeyframes(Ml))) : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, name: n, element: r, motionValue: s } = this;
    for (let o = 0; o < t.length; o++)
      if (t[o] === null)
        if (o === 0) {
          const a = s == null ? void 0 : s.get(), l = t[t.length - 1];
          if (a !== void 0)
            t[0] = a;
          else if (r && n) {
            const c = r.readValue(n, l);
            c != null && (t[0] = c);
          }
          t[0] === void 0 && (t[0] = l), s && a === void 0 && s.set(t[0]);
        } else
          t[o] = t[o - 1];
  }
  setFinalKeyframe() {
  }
  measureInitialState() {
  }
  renderEndStyles() {
  }
  measureEndState() {
  }
  complete() {
    this.isComplete = !0, this.onComplete(this.unresolvedKeyframes, this.finalKeyframe), Rt.delete(this);
  }
  cancel() {
    this.isComplete || (this.isScheduled = !1, Rt.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const Mi = (e, t) => (n) => !!(qn(n) && mu.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t)), Tl = (e, t, n) => (r) => {
  if (!qn(r))
    return r;
  const [s, o, a, l] = r.match(gi);
  return {
    [e]: parseFloat(s),
    [t]: parseFloat(o),
    [n]: parseFloat(a),
    alpha: l !== void 0 ? parseFloat(l) : 1
  };
}, p5 = (e) => Ct(0, 255, e), ps = {
  ...ln,
  transform: (e) => Math.round(p5(e))
}, Et = {
  test: Mi("rgb", "red"),
  parse: Tl("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) => "rgba(" + ps.transform(e) + ", " + ps.transform(t) + ", " + ps.transform(n) + ", " + Mn(Sn.transform(r)) + ")"
};
function m5(e) {
  let t = "", n = "", r = "", s = "";
  return e.length > 5 ? (t = e.substring(1, 3), n = e.substring(3, 5), r = e.substring(5, 7), s = e.substring(7, 9)) : (t = e.substring(1, 2), n = e.substring(2, 3), r = e.substring(3, 4), s = e.substring(4, 5), t += t, n += n, r += r, s += s), {
    red: parseInt(t, 16),
    green: parseInt(n, 16),
    blue: parseInt(r, 16),
    alpha: s ? parseInt(s, 16) / 255 : 1
  };
}
const $s = {
  test: Mi("#"),
  parse: m5,
  transform: Et.transform
}, Yt = {
  test: Mi("hsl", "hue"),
  parse: Tl("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + Xe.transform(Mn(t)) + ", " + Xe.transform(Mn(n)) + ", " + Mn(Sn.transform(r)) + ")"
}, Te = {
  test: (e) => Et.test(e) || $s.test(e) || Yt.test(e),
  parse: (e) => Et.test(e) ? Et.parse(e) : Yt.test(e) ? Yt.parse(e) : $s.parse(e),
  transform: (e) => qn(e) ? e : e.hasOwnProperty("red") ? Et.transform(e) : Yt.transform(e)
};
function v5(e) {
  var t, n;
  return isNaN(e) && qn(e) && (((t = e.match(gi)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(pu)) === null || n === void 0 ? void 0 : n.length) || 0) > 0;
}
const Vl = "number", Pl = "color", g5 = "var", x5 = "var(", Ko = "${}", w5 = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function kn(e) {
  const t = e.toString(), n = [], r = {
    color: [],
    number: [],
    var: []
  }, s = [];
  let o = 0;
  const l = t.replace(w5, (c) => (Te.test(c) ? (r.color.push(o), s.push(Pl), n.push(Te.parse(c))) : c.startsWith(x5) ? (r.var.push(o), s.push(g5), n.push(c)) : (r.number.push(o), s.push(Vl), n.push(parseFloat(c))), ++o, Ko)).split(Ko);
  return { values: n, split: l, indexes: r, types: s };
}
function El(e) {
  return kn(e).values;
}
function Rl(e) {
  const { split: t, types: n } = kn(e), r = t.length;
  return (s) => {
    let o = "";
    for (let a = 0; a < r; a++)
      if (o += t[a], s[a] !== void 0) {
        const l = n[a];
        l === Vl ? o += Mn(s[a]) : l === Pl ? o += Te.transform(s[a]) : o += s[a];
      }
    return o;
  };
}
const y5 = (e) => typeof e == "number" ? 0 : e;
function C5(e) {
  const t = El(e);
  return Rl(e)(t.map(y5));
}
const bt = {
  test: v5,
  parse: El,
  createTransformer: Rl,
  getAnimatableNone: C5
}, b5 = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function _5(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [r] = n.match(gi) || [];
  if (!r)
    return e;
  const s = n.replace(r, "");
  let o = b5.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + s + ")";
}
const j5 = /\b([a-z-]*)\(.*?\)/gu, Is = {
  ...bt,
  getAnimatableNone: (e) => {
    const t = e.match(j5);
    return t ? t.map(_5).join(" ") : e;
  }
}, S5 = {
  ...ol,
  // Color props
  color: Te,
  backgroundColor: Te,
  outlineColor: Te,
  fill: Te,
  stroke: Te,
  // Border props
  borderColor: Te,
  borderTopColor: Te,
  borderRightColor: Te,
  borderBottomColor: Te,
  borderLeftColor: Te,
  filter: Is,
  WebkitFilter: Is
}, Li = (e) => S5[e];
function Hl(e, t) {
  let n = Li(e);
  return n !== Is && (n = bt), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0;
}
const M5 = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function L5(e, t, n) {
  let r = 0, s;
  for (; r < e.length && !s; ) {
    const o = e[r];
    typeof o == "string" && !M5.has(o) && kn(o).values.length && (s = e[r]), r++;
  }
  if (s && n)
    for (const o of t)
      e[o] = Hl(n, s);
}
class Al extends Si {
  constructor(t, n, r, s) {
    super(t, n, r, s, s == null ? void 0 : s.owner, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n.current)
      return;
    super.readKeyframes();
    for (let c = 0; c < t.length; c++) {
      let d = t[c];
      if (typeof d == "string" && (d = d.trim(), vi(d))) {
        const f = _l(d, n.current);
        f !== void 0 && (t[c] = f), c === t.length - 1 && (this.finalKeyframe = d);
      }
    }
    if (this.resolveNoneKeyframes(), !l5.has(r) || t.length !== 2)
      return;
    const [s, o] = t, a = Go(s), l = Go(o);
    if (a !== l)
      if (qo(a) && qo(l))
        for (let c = 0; c < t.length; c++) {
          const d = t[c];
          typeof d == "string" && (t[c] = parseFloat(d));
        }
      else
        this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this, r = [];
    for (let s = 0; s < t.length; s++)
      s5(t[s]) && r.push(s);
    r.length && L5(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset), this.measuredOrigin = nn[r](t.measureViewportBox(), window.getComputedStyle(t.current)), n[0] = this.measuredOrigin;
    const s = n[n.length - 1];
    s !== void 0 && t.getValue(r, s).jump(s, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: s } = this;
    if (!n.current)
      return;
    const o = n.getValue(r);
    o && o.jump(this.measuredOrigin, !1);
    const a = s.length - 1, l = s[a];
    s[a] = nn[r](n.measureViewportBox(), window.getComputedStyle(n.current)), l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l), !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach(([c, d]) => {
      n.getValue(c).set(d);
    }), this.resolveNoneKeyframes();
  }
}
function kl(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const Yo = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && // It's animatable if we have a string
(bt.test(e) || e === "0") && // And it contains numbers and/or colors
!e.startsWith("url("));
function T5(e) {
  const t = e[0];
  if (e.length === 1)
    return !0;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t)
      return !0;
}
function V5(e, t, n, r) {
  const s = e[0];
  if (s === null)
    return !1;
  if (t === "display" || t === "visibility")
    return !0;
  const o = e[e.length - 1], a = Yo(s, t), l = Yo(o, t);
  return Nt(a === l, `You are trying to animate ${t} from "${s}" to "${o}". ${s} is not an animatable value - to enable this animation set ${s} to a value animatable to ${o} via the \`style\` property.`), !a || !l ? !1 : T5(e) || n === "spring" && r;
}
class Zl {
  constructor({ autoplay: t = !0, delay: n = 0, type: r = "keyframes", repeat: s = 0, repeatDelay: o = 0, repeatType: a = "loop", ...l }) {
    this.isStopped = !1, this.hasAttemptedResolve = !1, this.options = {
      autoplay: t,
      delay: n,
      type: r,
      repeat: s,
      repeatDelay: o,
      repeatType: a,
      ...l
    }, this.updateFinishedPromise();
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && h5(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.hasAttemptedResolve = !0;
    const { name: r, type: s, velocity: o, delay: a, onComplete: l, onUpdate: c, isGenerator: d } = this.options;
    if (!d && !V5(t, r, s, o))
      if (a)
        this.options.duration = 0;
      else {
        c == null || c(Wr(t, this.options, n)), l == null || l(), this.resolveFinishedPromise();
        return;
      }
    const f = this.initPlayback(t, n);
    f !== !1 && (this._resolved = {
      keyframes: t,
      finalKeyframe: n,
      ...f
    }, this.onPostResolved());
  }
  onPostResolved() {
  }
  /**
   * Allows the returned animation to be awaited or promise-chained. Currently
   * resolves when the animation finishes at all but in a future update could/should
   * reject if its cancels.
   */
  then(t, n) {
    return this.currentFinishedPromise.then(t, n);
  }
  updateFinishedPromise() {
    this.currentFinishedPromise = new Promise((t) => {
      this.resolveFinishedPromise = t;
    });
  }
}
function Ti(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const P5 = 5;
function Bl(e, t, n) {
  const r = Math.max(t - P5, 0);
  return Ti(n - e(r), t - r);
}
const ms = 1e-3, E5 = 0.01, Xo = 10, R5 = 0.05, H5 = 1;
function A5({ duration: e = 800, bounce: t = 0.25, velocity: n = 0, mass: r = 1 }) {
  let s, o;
  Nt(e <= Je(Xo), "Spring duration must be 10 seconds or less");
  let a = 1 - t;
  a = Ct(R5, H5, a), e = Ct(E5, Xo, Qe(e)), a < 1 ? (s = (d) => {
    const f = d * a, u = f * e, h = f - n, p = zs(d, a), v = Math.exp(-u);
    return ms - h / p * v;
  }, o = (d) => {
    const u = d * a * e, h = u * n + n, p = Math.pow(a, 2) * Math.pow(d, 2) * e, v = Math.exp(-u), m = zs(Math.pow(d, 2), a);
    return (-s(d) + ms > 0 ? -1 : 1) * ((h - p) * v) / m;
  }) : (s = (d) => {
    const f = Math.exp(-d * e), u = (d - n) * e + 1;
    return -ms + f * u;
  }, o = (d) => {
    const f = Math.exp(-d * e), u = (n - d) * (e * e);
    return f * u;
  });
  const l = 5 / e, c = Z5(s, o, l);
  if (e = Je(e), isNaN(c))
    return {
      stiffness: 100,
      damping: 10,
      duration: e
    };
  {
    const d = Math.pow(c, 2) * r;
    return {
      stiffness: d,
      damping: a * 2 * Math.sqrt(r * d),
      duration: e
    };
  }
}
const k5 = 12;
function Z5(e, t, n) {
  let r = n;
  for (let s = 1; s < k5; s++)
    r = r - e(r) / t(r);
  return r;
}
function zs(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const B5 = ["duration", "bounce"], D5 = ["stiffness", "damping", "mass"];
function Jo(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function N5(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!Jo(e, D5) && Jo(e, B5)) {
    const n = A5(e);
    t = {
      ...t,
      ...n,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function Vi({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const s = e[0], o = e[e.length - 1], a = { done: !1, value: s }, { stiffness: l, damping: c, mass: d, duration: f, velocity: u, isResolvedFromDuration: h } = N5({
    ...r,
    velocity: -Qe(r.velocity || 0)
  }), p = u || 0, v = c / (2 * Math.sqrt(l * d)), m = o - s, w = Qe(Math.sqrt(l / d)), x = Math.abs(m) < 5;
  n || (n = x ? 0.01 : 2), t || (t = x ? 5e-3 : 0.5);
  let y;
  if (v < 1) {
    const C = zs(w, v);
    y = (_) => {
      const j = Math.exp(-v * w * _);
      return o - j * ((p + v * w * m) / C * Math.sin(C * _) + m * Math.cos(C * _));
    };
  } else if (v === 1)
    y = (C) => o - Math.exp(-w * C) * (m + (p + w * m) * C);
  else {
    const C = w * Math.sqrt(v * v - 1);
    y = (_) => {
      const j = Math.exp(-v * w * _), M = Math.min(C * _, 300);
      return o - j * ((p + v * w * m) * Math.sinh(M) + C * m * Math.cosh(M)) / C;
    };
  }
  return {
    calculatedDuration: h && f || null,
    next: (C) => {
      const _ = y(C);
      if (h)
        a.done = C >= f;
      else {
        let j = p;
        C !== 0 && (v < 1 ? j = Bl(y, C, _) : j = 0);
        const M = Math.abs(j) <= n, L = Math.abs(o - _) <= t;
        a.done = M && L;
      }
      return a.value = a.done ? o : _, a;
    }
  };
}
function Qo({ keyframes: e, velocity: t = 0, power: n = 0.8, timeConstant: r = 325, bounceDamping: s = 10, bounceStiffness: o = 500, modifyTarget: a, min: l, max: c, restDelta: d = 0.5, restSpeed: f }) {
  const u = e[0], h = {
    done: !1,
    value: u
  }, p = (b) => l !== void 0 && b < l || c !== void 0 && b > c, v = (b) => l === void 0 ? c : c === void 0 || Math.abs(l - b) < Math.abs(c - b) ? l : c;
  let m = n * t;
  const w = u + m, x = a === void 0 ? w : a(w);
  x !== w && (m = x - u);
  const y = (b) => -m * Math.exp(-b / r), C = (b) => x + y(b), _ = (b) => {
    const V = y(b), E = C(b);
    h.done = Math.abs(V) <= d, h.value = h.done ? x : E;
  };
  let j, M;
  const L = (b) => {
    p(h.value) && (j = b, M = Vi({
      keyframes: [h.value, v(h.value)],
      velocity: Bl(C, b, h.value),
      // TODO: This should be passing * 1000
      damping: s,
      stiffness: o,
      restDelta: d,
      restSpeed: f
    }));
  };
  return L(0), {
    calculatedDuration: null,
    next: (b) => {
      let V = !1;
      return !M && j === void 0 && (V = !0, _(b), L(b)), j !== void 0 && b >= j ? M.next(b - j) : (!V && _(b), h);
    }
  };
}
const Dl = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e, O5 = 1e-7, $5 = 12;
function I5(e, t, n, r, s) {
  let o, a, l = 0;
  do
    a = t + (n - t) / 2, o = Dl(a, r, s) - e, o > 0 ? n = a : t = a;
  while (Math.abs(o) > O5 && ++l < $5);
  return a;
}
function Gn(e, t, n, r) {
  if (e === t && n === r)
    return _e;
  const s = (o) => I5(o, 0, 1, e, n);
  return (o) => o === 0 || o === 1 ? o : Dl(s(o), t, r);
}
const z5 = Gn(0.42, 0, 1, 1), F5 = Gn(0, 0, 0.58, 1), Nl = Gn(0.42, 0, 0.58, 1), Ol = (e) => Array.isArray(e) && typeof e[0] != "number", $l = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, Il = (e) => (t) => 1 - e(1 - t), Pi = (e) => 1 - Math.sin(Math.acos(e)), zl = Il(Pi), q5 = $l(Pi), Fl = Gn(0.33, 1.53, 0.69, 0.99), Ei = Il(Fl), W5 = $l(Ei), U5 = (e) => (e *= 2) < 1 ? 0.5 * Ei(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), e1 = {
  linear: _e,
  easeIn: z5,
  easeInOut: Nl,
  easeOut: F5,
  circIn: Pi,
  circInOut: q5,
  circOut: zl,
  backIn: Ei,
  backInOut: W5,
  backOut: Fl,
  anticipate: U5
}, t1 = (e) => {
  if (Array.isArray(e)) {
    qe(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, n, r, s] = e;
    return Gn(t, n, r, s);
  } else if (typeof e == "string")
    return qe(e1[e] !== void 0, `Invalid easing type '${e}'`), e1[e];
  return e;
}, Zt = (e, t, n) => {
  const r = t - e;
  return r === 0 ? 1 : (n - e) / r;
}, se = (e, t, n) => e + (t - e) * n;
function vs(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function G5({ hue: e, saturation: t, lightness: n, alpha: r }) {
  e /= 360, t /= 100, n /= 100;
  let s = 0, o = 0, a = 0;
  if (!t)
    s = o = a = n;
  else {
    const l = n < 0.5 ? n * (1 + t) : n + t - n * t, c = 2 * n - l;
    s = vs(c, l, e + 1 / 3), o = vs(c, l, e), a = vs(c, l, e - 1 / 3);
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(o * 255),
    blue: Math.round(a * 255),
    alpha: r
  };
}
function Vr(e, t) {
  return (n) => n > 0 ? t : e;
}
const gs = (e, t, n) => {
  const r = e * e, s = n * (t * t - r) + r;
  return s < 0 ? 0 : Math.sqrt(s);
}, K5 = [$s, Et, Yt], Y5 = (e) => K5.find((t) => t.test(e));
function n1(e) {
  const t = Y5(e);
  if (Nt(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`), !t)
    return !1;
  let n = t.parse(e);
  return t === Yt && (n = G5(n)), n;
}
const r1 = (e, t) => {
  const n = n1(e), r = n1(t);
  if (!n || !r)
    return Vr(e, t);
  const s = { ...n };
  return (o) => (s.red = gs(n.red, r.red, o), s.green = gs(n.green, r.green, o), s.blue = gs(n.blue, r.blue, o), s.alpha = se(n.alpha, r.alpha, o), Et.transform(s));
}, Fs = /* @__PURE__ */ new Set(["none", "hidden"]);
function X5(e, t) {
  return Fs.has(e) ? (n) => n <= 0 ? e : t : (n) => n >= 1 ? t : e;
}
function J5(e, t) {
  return (n) => se(e, t, n);
}
function Ri(e) {
  return typeof e == "number" ? J5 : typeof e == "string" ? vi(e) ? Vr : Te.test(e) ? r1 : t6 : Array.isArray(e) ? ql : typeof e == "object" ? Te.test(e) ? r1 : Q5 : Vr;
}
function ql(e, t) {
  const n = [...e], r = n.length, s = e.map((o, a) => Ri(o)(o, t[a]));
  return (o) => {
    for (let a = 0; a < r; a++)
      n[a] = s[a](o);
    return n;
  };
}
function Q5(e, t) {
  const n = { ...e, ...t }, r = {};
  for (const s in n)
    e[s] !== void 0 && t[s] !== void 0 && (r[s] = Ri(e[s])(e[s], t[s]));
  return (s) => {
    for (const o in r)
      n[o] = r[o](s);
    return n;
  };
}
function e6(e, t) {
  var n;
  const r = [], s = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const a = t.types[o], l = e.indexes[a][s[a]], c = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
    r[o] = c, s[a]++;
  }
  return r;
}
const t6 = (e, t) => {
  const n = bt.createTransformer(t), r = kn(e), s = kn(t);
  return r.indexes.var.length === s.indexes.var.length && r.indexes.color.length === s.indexes.color.length && r.indexes.number.length >= s.indexes.number.length ? Fs.has(e) && !s.values.length || Fs.has(t) && !r.values.length ? X5(e, t) : ft(ql(e6(r, s), s.values), n) : (Nt(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), Vr(e, t));
};
function Wl(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number" ? se(e, t, n) : Ri(e)(e, t);
}
function n6(e, t, n) {
  const r = [], s = n || Wl, o = e.length - 1;
  for (let a = 0; a < o; a++) {
    let l = s(e[a], e[a + 1]);
    if (t) {
      const c = Array.isArray(t) ? t[a] || _e : t;
      l = ft(c, l);
    }
    r.push(l);
  }
  return r;
}
function Hi(e, t, { clamp: n = !0, ease: r, mixer: s } = {}) {
  const o = e.length;
  if (qe(o === t.length, "Both input and output ranges must be the same length"), o === 1)
    return () => t[0];
  if (o === 2 && e[0] === e[1])
    return () => t[1];
  e[0] > e[o - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = n6(t, r, s), l = a.length, c = (d) => {
    let f = 0;
    if (l > 1)
      for (; f < e.length - 2 && !(d < e[f + 1]); f++)
        ;
    const u = Zt(e[f], e[f + 1], d);
    return a[f](u);
  };
  return n ? (d) => c(Ct(e[0], e[o - 1], d)) : c;
}
function Ul(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const s = Zt(0, t, r);
    e.push(se(n, 1, s));
  }
}
function Ai(e) {
  const t = [0];
  return Ul(t, e.length - 1), t;
}
function r6(e, t) {
  return e.map((n) => n * t);
}
function s6(e, t) {
  return e.map(() => t || Nl).splice(0, e.length - 1);
}
function Pr({ duration: e = 300, keyframes: t, times: n, ease: r = "easeInOut" }) {
  const s = Ol(r) ? r.map(t1) : t1(r), o = {
    done: !1,
    value: t[0]
  }, a = r6(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    n && n.length === t.length ? n : Ai(t),
    e
  ), l = Hi(a, t, {
    ease: Array.isArray(s) ? s : s6(t, s)
  });
  return {
    calculatedDuration: e,
    next: (c) => (o.value = l(c), o.done = c >= e, o)
  };
}
const qs = 2e4;
function Gl(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < qs; )
    t += n, r = e.next(t);
  return t >= qs ? 1 / 0 : t;
}
const i6 = (e) => {
  const t = ({ timestamp: n }) => e(n);
  return {
    start: () => z.update(t, !0),
    stop: () => We(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => me.isProcessing ? me.timestamp : yt.now()
  };
}, o6 = {
  decay: Qo,
  inertia: Qo,
  tween: Pr,
  keyframes: Pr,
  spring: Vi
}, a6 = (e) => e / 100;
class ki extends Zl {
  constructor({ KeyframeResolver: t = Si, ...n }) {
    super(n), this.holdTime = null, this.startTime = null, this.cancelTime = null, this.currentTime = 0, this.playbackSpeed = 1, this.pendingPlayState = "running", this.state = "idle", this.stop = () => {
      if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
        return;
      this.teardown();
      const { onStop: l } = this.options;
      l && l();
    };
    const { name: r, motionValue: s, keyframes: o } = this.options, a = (l, c) => this.onKeyframesResolved(l, c);
    r && s && s.owner ? this.resolver = s.owner.resolveKeyframes(o, a, r, s) : this.resolver = new t(o, a, r, s), this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const { type: n = "keyframes", repeat: r = 0, repeatDelay: s = 0, repeatType: o, velocity: a = 0 } = this.options, l = o6[n] || Pr;
    let c, d;
    l !== Pr && typeof t[0] != "number" && (process.env.NODE_ENV !== "production" && qe(t.length === 2, `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${t}`), c = ft(a6, Wl(t[0], t[1])), t = [0, 100]);
    const f = l({ ...this.options, keyframes: t });
    o === "mirror" && (d = l({
      ...this.options,
      keyframes: [...t].reverse(),
      velocity: -a
    })), f.calculatedDuration === null && (f.calculatedDuration = Gl(f));
    const { calculatedDuration: u } = f, h = u + s, p = h * (r + 1) - s;
    return {
      generator: f,
      mirroredGenerator: d,
      mapPercentToKeyframes: c,
      calculatedDuration: u,
      resolvedDuration: h,
      totalDuration: p
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(), this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState;
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: b } = this.options;
      return { done: !0, value: b[b.length - 1] };
    }
    const { finalKeyframe: s, generator: o, mirroredGenerator: a, mapPercentToKeyframes: l, keyframes: c, calculatedDuration: d, totalDuration: f, resolvedDuration: u } = r;
    if (this.startTime === null)
      return o.next(0);
    const { delay: h, repeat: p, repeatType: v, repeatDelay: m, onUpdate: w } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - f / this.speed, this.startTime)), n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
    const x = this.currentTime - h * (this.speed >= 0 ? 1 : -1), y = this.speed >= 0 ? x < 0 : x > f;
    this.currentTime = Math.max(x, 0), this.state === "finished" && this.holdTime === null && (this.currentTime = f);
    let C = this.currentTime, _ = o;
    if (p) {
      const b = Math.min(this.currentTime, f) / u;
      let V = Math.floor(b), E = b % 1;
      !E && b >= 1 && (E = 1), E === 1 && V--, V = Math.min(V, p + 1), !!(V % 2) && (v === "reverse" ? (E = 1 - E, m && (E -= m / u)) : v === "mirror" && (_ = a)), C = Ct(0, 1, E) * u;
    }
    const j = y ? { done: !1, value: c[0] } : _.next(C);
    l && (j.value = l(j.value));
    let { done: M } = j;
    !y && d !== null && (M = this.speed >= 0 ? this.currentTime >= f : this.currentTime <= 0);
    const L = this.holdTime === null && (this.state === "finished" || this.state === "running" && M);
    return L && s !== void 0 && (j.value = Wr(c, this.options, s)), w && w(j.value), L && this.finish(), j;
  }
  get duration() {
    const { resolved: t } = this;
    return t ? Qe(t.calculatedDuration) : 0;
  }
  get time() {
    return Qe(this.currentTime);
  }
  set time(t) {
    t = Je(t), this.currentTime = t, this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    this.playbackSpeed = t, n && (this.time = Qe(this.currentTime));
  }
  play() {
    if (this.resolver.isScheduled || this.resolver.resume(), !this._resolved) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped)
      return;
    const { driver: t = i6, onPlay: n } = this.options;
    this.driver || (this.driver = t((s) => this.tick(s))), n && n();
    const r = this.driver.now();
    this.holdTime !== null ? this.startTime = r - this.holdTime : (!this.startTime || this.state === "finished") && (this.startTime = r), this.state === "finished" && this.updateFinishedPromise(), this.cancelTime = this.startTime, this.holdTime = null, this.state = "running", this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    this.state = "paused", this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0;
  }
  complete() {
    this.state !== "running" && this.play(), this.pendingPlayState = this.state = "finished", this.holdTime = null;
  }
  finish() {
    this.teardown(), this.state = "finished";
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime), this.teardown(), this.updateFinishedPromise();
  }
  teardown() {
    this.state = "idle", this.stopDriver(), this.resolveFinishedPromise(), this.updateFinishedPromise(), this.startTime = this.cancelTime = null, this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), this.driver = void 0);
  }
  sample(t) {
    return this.startTime = 0, this.tick(t, !0);
  }
}
const Kl = (e) => Array.isArray(e) && typeof e[0] == "number";
function Yl(e) {
  return !!(!e || typeof e == "string" && e in Zi || Kl(e) || Array.isArray(e) && e.every(Yl));
}
const jn = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`, Zi = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: jn([0, 0.65, 0.55, 1]),
  circOut: jn([0.55, 0, 1, 0.45]),
  backIn: jn([0.31, 0.01, 0.66, -0.59]),
  backOut: jn([0.33, 1.53, 0.69, 0.99])
};
function l6(e) {
  return Xl(e) || Zi.easeOut;
}
function Xl(e) {
  if (e)
    return Kl(e) ? jn(e) : Array.isArray(e) ? e.map(l6) : Zi[e];
}
function c6(e, t, n, { delay: r = 0, duration: s = 300, repeat: o = 0, repeatType: a = "loop", ease: l, times: c } = {}) {
  const d = { [t]: n };
  c && (d.offset = c);
  const f = Xl(l);
  return Array.isArray(f) && (d.easing = f), e.animate(d, {
    delay: r,
    duration: s,
    easing: Array.isArray(f) ? "linear" : f,
    fill: "both",
    iterations: o + 1,
    direction: a === "reverse" ? "alternate" : "normal"
  });
}
const u6 = kl(() => Object.hasOwnProperty.call(Element.prototype, "animate")), d6 = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform"
  // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
  // or until we implement support for linear() easing.
  // "background-color"
]), Er = 10, f6 = 2e4;
function h6(e) {
  return e.type === "spring" || e.name === "backgroundColor" || !Yl(e.ease);
}
function p6(e, t) {
  const n = new ki({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0
  });
  let r = { done: !1, value: e[0] };
  const s = [];
  let o = 0;
  for (; !r.done && o < f6; )
    r = n.sample(o), s.push(r.value), o += Er;
  return {
    times: void 0,
    keyframes: s,
    duration: o - Er,
    ease: "linear"
  };
}
class s1 extends Zl {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, keyframes: s } = this.options;
    this.resolver = new Al(s, (o, a) => this.onKeyframesResolved(o, a), n, r), this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let { duration: s = 300, times: o, ease: a, type: l, motionValue: c, name: d } = this.options;
    if (!(!((r = c.owner) === null || r === void 0) && r.current))
      return !1;
    if (h6(this.options)) {
      const { onComplete: u, onUpdate: h, motionValue: p, ...v } = this.options, m = p6(t, v);
      t = m.keyframes, t.length === 1 && (t[1] = t[0]), s = m.duration, o = m.times, a = m.ease, l = "keyframes";
    }
    const f = c6(c.owner.current, d, t, { ...this.options, duration: s, times: o, ease: a });
    return f.startTime = yt.now(), this.pendingTimeline ? (f.timeline = this.pendingTimeline, this.pendingTimeline = void 0) : f.onfinish = () => {
      const { onComplete: u } = this.options;
      c.set(Wr(t, this.options, n)), u && u(), this.cancel(), this.resolveFinishedPromise();
    }, {
      animation: f,
      duration: s,
      times: o,
      type: l,
      ease: a,
      keyframes: t
    };
  }
  get duration() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { duration: n } = t;
    return Qe(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t)
      return 0;
    const { animation: n } = t;
    return Qe(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.currentTime = Je(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t)
      return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n)
      return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t)
      return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */
  attachTimeline(t) {
    if (!this._resolved)
      this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n)
        return _e;
      const { animation: r } = n;
      r.timeline = t, r.onfinish = null;
    }
    return _e;
  }
  play() {
    if (this.isStopped)
      return;
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if (this.resolver.cancel(), this.isStopped = !0, this.state === "idle")
      return;
    const { resolved: t } = this;
    if (!t)
      return;
    const { animation: n, keyframes: r, duration: s, type: o, ease: a, times: l } = t;
    if (!(n.playState === "idle" || n.playState === "finished")) {
      if (this.time) {
        const { motionValue: c, onUpdate: d, onComplete: f, ...u } = this.options, h = new ki({
          ...u,
          keyframes: r,
          duration: s,
          type: o,
          ease: a,
          times: l,
          isGenerator: !0
        }), p = Je(this.time);
        c.setWithVelocity(h.sample(p - Er).value, h.sample(p).value, Er);
      }
      this.cancel();
    }
  }
  complete() {
    const { resolved: t } = this;
    t && t.animation.finish();
  }
  cancel() {
    const { resolved: t } = this;
    t && t.animation.cancel();
  }
  static supports(t) {
    const { motionValue: n, name: r, repeatDelay: s, repeatType: o, damping: a, type: l } = t;
    return u6() && r && d6.has(r) && n && n.owner && n.owner.current instanceof HTMLElement && /**
     * If we're outputting values to onUpdate then we can't use WAAPI as there's
     * no way to read the value from WAAPI every frame.
     */
    !n.owner.getProps().onUpdate && !s && o !== "mirror" && a !== 0 && l !== "inertia";
  }
}
function m6(e, t) {
  let n;
  const r = () => {
    const { currentTime: s } = t, a = (s === null ? 0 : s.value) / 100;
    n !== a && e(a), n = a;
  };
  return z.update(r, !0), () => We(r);
}
const v6 = kl(() => window.ScrollTimeline !== void 0);
class Bi {
  constructor(t) {
    this.stop = () => this.runAll("stop"), this.animations = t.filter(Boolean);
  }
  then(t, n) {
    return Promise.all(this.animations).then(t).catch(n);
  }
  /**
   * TODO: Filter out cancelled or stopped animations before returning
   */
  getAll(t) {
    return this.animations[0][t];
  }
  setAll(t, n) {
    for (let r = 0; r < this.animations.length; r++)
      this.animations[r][t] = n;
  }
  attachTimeline(t) {
    const n = this.animations.map((r) => {
      if (v6() && r.attachTimeline)
        r.attachTimeline(t);
      else
        return r.pause(), m6((s) => {
          r.time = r.duration * s;
        }, t);
    });
    return () => {
      n.forEach((r, s) => {
        r && r(), this.animations[s].stop();
      });
    };
  }
  get time() {
    return this.getAll("time");
  }
  set time(t) {
    this.setAll("time", t);
  }
  get speed() {
    return this.getAll("speed");
  }
  set speed(t) {
    this.setAll("speed", t);
  }
  get duration() {
    let t = 0;
    for (let n = 0; n < this.animations.length; n++)
      t = Math.max(t, this.animations[n].duration);
    return t;
  }
  runAll(t) {
    this.animations.forEach((n) => n[t]());
  }
  play() {
    this.runAll("play");
  }
  pause() {
    this.runAll("pause");
  }
  cancel() {
    this.runAll("cancel");
  }
  complete() {
    this.runAll("complete");
  }
}
const Di = (e, t, n, r = {}, s, o) => (a) => {
  const l = ji(r, e) || {}, c = l.delay || r.delay || 0;
  let { elapsed: d = 0 } = r;
  d = d - Je(c);
  let f = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: "easeOut",
    velocity: t.getVelocity(),
    ...l,
    delay: -d,
    onUpdate: (h) => {
      t.set(h), l.onUpdate && l.onUpdate(h);
    },
    onComplete: () => {
      a(), l.onComplete && l.onComplete();
    },
    name: e,
    motionValue: t,
    element: o ? void 0 : s
  };
  t5(l) || (f = {
    ...f,
    ...e5(e, f)
  }), f.duration && (f.duration = Je(f.duration)), f.repeatDelay && (f.repeatDelay = Je(f.repeatDelay)), f.from !== void 0 && (f.keyframes[0] = f.from);
  let u = !1;
  if ((f.type === !1 || f.duration === 0 && !f.repeatDelay) && (f.duration = 0, f.delay === 0 && (u = !0)), u && !o && t.get() !== void 0) {
    const h = Wr(f.keyframes, l);
    if (h !== void 0)
      return z.update(() => {
        f.onUpdate(h), f.onComplete();
      }), new Bi([]);
  }
  return !o && s1.supports(f) ? new s1(f) : new ki(f);
};
function Rr(e) {
  return !!(ve(e) && e.add);
}
function Ni(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Ur(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class Oi {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return Ni(this.subscriptions, t), () => Ur(this.subscriptions, t);
  }
  notify(t, n, r) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1)
        this.subscriptions[0](t, n, r);
      else
        for (let o = 0; o < s; o++) {
          const a = this.subscriptions[o];
          a && a(t, n, r);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const i1 = /* @__PURE__ */ new Set();
function Kn(e, t, n) {
  e || i1.has(t) || (console.warn(t), n && console.warn(n), i1.add(t));
}
const o1 = 30, g6 = (e) => !isNaN(parseFloat(e)), Ln = {
  current: void 0
};
class x6 {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, n = {}) {
    this.version = "11.2.12", this.canTrackVelocity = null, this.events = {}, this.updateAndNotify = (r, s = !0) => {
      const o = yt.now();
      this.updatedAt !== o && this.setPrevFrameValue(), this.prev = this.current, this.setCurrent(r), this.current !== this.prev && this.events.change && this.events.change.notify(this.current), s && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.hasAnimated = !1, this.setCurrent(t), this.owner = n.owner;
  }
  setCurrent(t) {
    this.current = t, this.updatedAt = yt.now(), this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = g6(this.current));
  }
  setPrevFrameValue(t = this.current) {
    this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return process.env.NODE_ENV !== "production" && Kn(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new Oi());
    const r = this.events[t].add(n);
    return t === "change" ? () => {
      r(), z.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : r;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(t, n) {
    this.passiveEffect = t, this.stopPassiveEffect = n;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t, n = !0) {
    !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n), this.prev = void 0, this.prevFrameValue = t, this.prevUpdatedAt = this.updatedAt - r;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t, n = !0) {
    this.updateAndNotify(t), this.prev = t, this.prevUpdatedAt = this.prevFrameValue = void 0, n && this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return Ln.current && Ln.current.push(this), this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    const t = yt.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > o1)
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, o1);
    return Ti(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(t) {
    return this.stop(), new Promise((n) => {
      this.hasAnimated = !0, this.animation = t(n), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Ye(e, t) {
  return new x6(e, t);
}
function w6(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ye(n));
}
function y6(e, t) {
  const n = qr(e, t);
  let { transitionEnd: r = {}, transition: s = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (const a in o) {
    const l = Eu(o[a]);
    w6(e, a, l);
  }
}
function Jl(e) {
  return e.getProps()[Ja];
}
function C6({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return t[n] = !1, r;
}
function $i(e, t, { delay: n = 0, transitionOverride: r, type: s } = {}) {
  var o;
  let { transition: a = e.getDefaultTransition(), transitionEnd: l, ...c } = t;
  const d = e.getValue("willChange");
  r && (a = r);
  const f = [], u = s && e.animationState && e.animationState.getState()[s];
  for (const h in c) {
    const p = e.getValue(h, (o = e.latestValues[h]) !== null && o !== void 0 ? o : null), v = c[h];
    if (v === void 0 || u && C6(u, h))
      continue;
    const m = {
      delay: n,
      elapsed: 0,
      ...ji(a || {}, h)
    };
    let w = !1;
    if (window.HandoffAppearAnimations) {
      const y = Jl(e);
      if (y) {
        const C = window.HandoffAppearAnimations(y, h, p, z);
        C !== null && (m.elapsed = C, w = !0);
      }
    }
    p.start(Di(h, p, v, e.shouldReduceMotion && Ot.has(h) ? { type: !1 } : m, e, w));
    const x = p.animation;
    x && (Rr(d) && (d.add(h), x.then(() => d.remove(h))), f.push(x));
  }
  return l && Promise.all(f).then(() => {
    z.update(() => {
      l && y6(e, l);
    });
  }), f;
}
function Ws(e, t, n = {}) {
  var r;
  const s = qr(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
  let { transition: o = e.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (o = n.transitionOverride);
  const a = s ? () => Promise.all($i(e, s, n)) : () => Promise.resolve(), l = e.variantChildren && e.variantChildren.size ? (d = 0) => {
    const { delayChildren: f = 0, staggerChildren: u, staggerDirection: h } = o;
    return b6(e, t, f + d, u, h, n);
  } : () => Promise.resolve(), { when: c } = o;
  if (c) {
    const [d, f] = c === "beforeChildren" ? [a, l] : [l, a];
    return d().then(() => f());
  } else
    return Promise.all([a(), l(n.delay)]);
}
function b6(e, t, n = 0, r = 0, s = 1, o) {
  const a = [], l = (e.variantChildren.size - 1) * r, c = s === 1 ? (d = 0) => d * r : (d = 0) => l - d * r;
  return Array.from(e.variantChildren).sort(_6).forEach((d, f) => {
    d.notify("AnimationStart", t), a.push(Ws(d, t, {
      ...o,
      delay: n + c(f)
    }).then(() => d.notify("AnimationComplete", t)));
  }), Promise.all(a);
}
function _6(e, t) {
  return e.sortNodePosition(t);
}
function j6(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const s = t.map((o) => Ws(e, o, n));
    r = Promise.all(s);
  } else if (typeof t == "string")
    r = Ws(e, t, n);
  else {
    const s = typeof t == "function" ? qr(e, t, n.custom) : t;
    r = Promise.all($i(e, s, n));
  }
  return r.then(() => {
    z.postRender(() => {
      e.notify("AnimationComplete", t);
    });
  });
}
const S6 = [...fi].reverse(), M6 = fi.length;
function L6(e) {
  return (t) => Promise.all(t.map(({ animation: n, options: r }) => j6(e, n, r)));
}
function T6(e) {
  let t = L6(e), n = a1(), r = !0;
  const s = (c) => (d, f) => {
    var u;
    const h = qr(e, f, c === "exit" ? (u = e.presenceContext) === null || u === void 0 ? void 0 : u.custom : void 0);
    if (h) {
      const { transition: p, transitionEnd: v, ...m } = h;
      d = { ...d, ...m, ...v };
    }
    return d;
  };
  function o(c) {
    t = c(e);
  }
  function a(c) {
    const d = e.getProps(), f = e.getVariantContext(!0) || {}, u = [], h = /* @__PURE__ */ new Set();
    let p = {}, v = 1 / 0;
    for (let w = 0; w < M6; w++) {
      const x = S6[w], y = n[x], C = d[x] !== void 0 ? d[x] : f[x], _ = An(C), j = x === c ? y.isActive : null;
      j === !1 && (v = w);
      let M = C === f[x] && C !== d[x] && _;
      if (M && r && e.manuallyAnimateOnMount && (M = !1), y.protectedKeys = { ...p }, // If it isn't active and hasn't *just* been set as inactive
      !y.isActive && j === null || // If we didn't and don't have any defined prop for this animation type
      !C && !y.prevProp || // Or if the prop doesn't define an animation
      Ir(C) || typeof C == "boolean")
        continue;
      let b = V6(y.prevProp, C) || // If we're making this variant active, we want to always make it active
      x === c && y.isActive && !M && _ || // If we removed a higher-priority variant (i is in reverse order)
      w > v && _, V = !1;
      const E = Array.isArray(C) ? C : [C];
      let Z = E.reduce(s(x), {});
      j === !1 && (Z = {});
      const { prevResolvedValues: J = {} } = y, F = {
        ...J,
        ...Z
      }, q = (O) => {
        b = !0, h.has(O) && (V = !0, h.delete(O)), y.needsAnimating[O] = !0;
        const Q = e.getValue(O);
        Q && (Q.liveStyle = !1);
      };
      for (const O in F) {
        const Q = Z[O], Y = J[O];
        if (p.hasOwnProperty(O))
          continue;
        let de = !1;
        Bs(Q) && Bs(Y) ? de = !yl(Q, Y) : de = Q !== Y, de ? Q != null ? q(O) : h.add(O) : Q !== void 0 && h.has(O) ? q(O) : y.protectedKeys[O] = !0;
      }
      y.prevProp = C, y.prevResolvedValues = Z, y.isActive && (p = { ...p, ...Z }), r && e.blockInitialAnimation && (b = !1), b && (!M || V) && u.push(...E.map((O) => ({
        animation: O,
        options: { type: x }
      })));
    }
    if (h.size) {
      const w = {};
      h.forEach((x) => {
        const y = e.getBaseTarget(x), C = e.getValue(x);
        C && (C.liveStyle = !0), w[x] = y ?? null;
      }), u.push({ animation: w });
    }
    let m = !!u.length;
    return r && (d.initial === !1 || d.initial === d.animate) && !e.manuallyAnimateOnMount && (m = !1), r = !1, m ? t(u) : Promise.resolve();
  }
  function l(c, d) {
    var f;
    if (n[c].isActive === d)
      return Promise.resolve();
    (f = e.variantChildren) === null || f === void 0 || f.forEach((h) => {
      var p;
      return (p = h.animationState) === null || p === void 0 ? void 0 : p.setActive(c, d);
    }), n[c].isActive = d;
    const u = a(c);
    for (const h in n)
      n[h].protectedKeys = {};
    return u;
  }
  return {
    animateChanges: a,
    setActive: l,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      n = a1(), r = !0;
    }
  };
}
function V6(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !yl(t, e) : !1;
}
function jt(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function a1() {
  return {
    animate: jt(!0),
    whileInView: jt(),
    whileHover: jt(),
    whileTap: jt(),
    whileDrag: jt(),
    whileFocus: jt(),
    exit: jt()
  };
}
class P6 extends _t {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = T6(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    Ir(t) && (this.unmountControls = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(), (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let E6 = 0;
class R6 extends _t {
  constructor() {
    super(...arguments), this.id = E6++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext, { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r)
      return;
    const s = this.node.animationState.setActive("exit", !t);
    n && !t && s.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const H6 = {
  animation: {
    Feature: P6
  },
  exit: {
    Feature: R6
  }
}, l1 = (e, t) => Math.abs(e - t);
function A6(e, t) {
  const n = l1(e.x, t.x), r = l1(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class Ql {
  constructor(t, n, { transformPagePoint: r, contextWindow: s, dragSnapToOrigin: o = !1 } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.contextWindow = window, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const u = ws(this.lastMoveEventInfo, this.history), h = this.startEvent !== null, p = A6(u.offset, { x: 0, y: 0 }) >= 3;
      if (!h && !p)
        return;
      const { point: v } = u, { timestamp: m } = me;
      this.history.push({ ...v, timestamp: m });
      const { onStart: w, onMove: x } = this.handlers;
      h || (w && w(this.lastMoveEvent, u), this.startEvent = this.lastMoveEvent), x && x(this.lastMoveEvent, u);
    }, this.handlePointerMove = (u, h) => {
      this.lastMoveEvent = u, this.lastMoveEventInfo = xs(h, this.transformPagePoint), z.update(this.updatePoint, !0);
    }, this.handlePointerUp = (u, h) => {
      this.end();
      const { onEnd: p, onSessionEnd: v, resumeAnimation: m } = this.handlers;
      if (this.dragSnapToOrigin && m && m(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const w = ws(u.type === "pointercancel" ? this.lastMoveEventInfo : xs(h, this.transformPagePoint), this.history);
      this.startEvent && p && p(u, w), v && v(u, w);
    }, !ml(t))
      return;
    this.dragSnapToOrigin = o, this.handlers = n, this.transformPagePoint = r, this.contextWindow = s || window;
    const a = Fr(t), l = xs(a, this.transformPagePoint), { point: c } = l, { timestamp: d } = me;
    this.history = [{ ...c, timestamp: d }];
    const { onSessionStart: f } = n;
    f && f(t, ws(l, this.history)), this.removeListeners = ft(dt(this.contextWindow, "pointermove", this.handlePointerMove), dt(this.contextWindow, "pointerup", this.handlePointerUp), dt(this.contextWindow, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), We(this.updatePoint);
  }
}
function xs(e, t) {
  return t ? { point: t(e.point) } : e;
}
function c1(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function ws({ point: e }, t) {
  return {
    point: e,
    delta: c1(e, ec(t)),
    offset: c1(e, k6(t)),
    velocity: Z6(t, 0.1)
  };
}
function k6(e) {
  return e[0];
}
function ec(e) {
  return e[e.length - 1];
}
function Z6(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const s = ec(e);
  for (; n >= 0 && (r = e[n], !(s.timestamp - r.timestamp > Je(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const o = Qe(s.timestamp - r.timestamp);
  if (o === 0)
    return { x: 0, y: 0 };
  const a = {
    x: (s.x - r.x) / o,
    y: (s.y - r.y) / o
  };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function Re(e) {
  return e.max - e.min;
}
function Us(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function u1(e, t, n, r = 0.5) {
  e.origin = r, e.originPoint = se(t.min, t.max, e.origin), e.scale = Re(n) / Re(t), (Us(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = se(n.min, n.max, e.origin) - e.originPoint, (Us(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Tn(e, t, n, r) {
  u1(e.x, t.x, n.x, r ? r.originX : void 0), u1(e.y, t.y, n.y, r ? r.originY : void 0);
}
function d1(e, t, n) {
  e.min = n.min + t.min, e.max = e.min + Re(t);
}
function B6(e, t, n) {
  d1(e.x, t.x, n.x), d1(e.y, t.y, n.y);
}
function f1(e, t, n) {
  e.min = t.min - n.min, e.max = e.min + Re(t);
}
function Vn(e, t, n) {
  f1(e.x, t.x, n.x), f1(e.y, t.y, n.y);
}
function D6(e, { min: t, max: n }, r) {
  return t !== void 0 && e < t ? e = r ? se(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? se(n, e, r.max) : Math.min(e, n)), e;
}
function h1(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
  };
}
function N6(e, { top: t, left: n, bottom: r, right: s }) {
  return {
    x: h1(e.x, n, s),
    y: h1(e.y, t, r)
  };
}
function p1(e, t) {
  let n = t.min - e.min, r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function O6(e, t) {
  return {
    x: p1(e.x, t.x),
    y: p1(e.y, t.y)
  };
}
function $6(e, t) {
  let n = 0.5;
  const r = Re(e), s = Re(t);
  return s > r ? n = Zt(t.min, t.max - r, e.min) : r > s && (n = Zt(e.min, e.max - s, t.min)), Ct(0, 1, n);
}
function I6(e, t) {
  const n = {};
  return t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n;
}
const Gs = 0.35;
function z6(e = Gs) {
  return e === !1 ? e = 0 : e === !0 && (e = Gs), {
    x: m1(e, "left", "right"),
    y: m1(e, "top", "bottom")
  };
}
function m1(e, t, n) {
  return {
    min: v1(e, t),
    max: v1(e, n)
  };
}
function v1(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const g1 = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Xt = () => ({
  x: g1(),
  y: g1()
}), x1 = () => ({ min: 0, max: 0 }), ce = () => ({
  x: x1(),
  y: x1()
});
function Be(e) {
  return [e("x"), e("y")];
}
function tc({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r }
  };
}
function F6({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function q6(e, t) {
  if (!t)
    return e;
  const n = t({ x: e.left, y: e.top }), r = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
function ys(e) {
  return e === void 0 || e === 1;
}
function Ks({ scale: e, scaleX: t, scaleY: n }) {
  return !ys(e) || !ys(t) || !ys(n);
}
function Tt(e) {
  return Ks(e) || nc(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY;
}
function nc(e) {
  return w1(e.x) || w1(e.y);
}
function w1(e) {
  return e && e !== "0%";
}
function Hr(e, t, n) {
  const r = e - n, s = t * r;
  return n + s;
}
function y1(e, t, n, r, s) {
  return s !== void 0 && (e = Hr(e, s, r)), Hr(e, n, r) + t;
}
function Ys(e, t = 0, n = 1, r, s) {
  e.min = y1(e.min, t, n, r, s), e.max = y1(e.max, t, n, r, s);
}
function rc(e, { x: t, y: n }) {
  Ys(e.x, t.translate, t.scale, t.originPoint), Ys(e.y, n.translate, n.scale, n.originPoint);
}
function W6(e, t, n, r = !1) {
  const s = n.length;
  if (!s)
    return;
  t.x = t.y = 1;
  let o, a;
  for (let l = 0; l < s; l++) {
    o = n[l], a = o.projectionDelta;
    const c = o.instance;
    c && c.style && c.style.display === "contents" || (r && o.options.layoutScroll && o.scroll && o !== o.root && Jt(e, {
      x: -o.scroll.offset.x,
      y: -o.scroll.offset.y
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, rc(e, a)), r && Tt(o.latestValues) && Jt(e, o.latestValues));
  }
  t.x = C1(t.x), t.y = C1(t.y);
}
function C1(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function wt(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function b1(e, t, [n, r, s]) {
  const o = t[s] !== void 0 ? t[s] : 0.5, a = se(e.min, e.max, o);
  Ys(e, t[n], t[r], a, t.scale);
}
const U6 = ["x", "scaleX", "originX"], G6 = ["y", "scaleY", "originY"];
function Jt(e, t) {
  b1(e.x, t, U6), b1(e.y, t, G6);
}
function sc(e, t) {
  return tc(q6(e.getBoundingClientRect(), t));
}
function K6(e, t, n) {
  const r = sc(e, n), { scroll: s } = t;
  return s && (wt(r.x, s.offset.x), wt(r.y, s.offset.y)), r;
}
const ic = ({ current: e }) => e ? e.ownerDocument.defaultView : null, Y6 = /* @__PURE__ */ new WeakMap();
class X6 {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ce(), this.visualElement = t;
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1)
      return;
    const s = (f) => {
      const { dragSnapToOrigin: u } = this.getProps();
      u ? this.pauseAnimation() : this.stopAnimation(), n && this.snapToCursor(Fr(f, "page").point);
    }, o = (f, u) => {
      const { drag: h, dragPropagation: p, onDragStart: v } = this.getProps();
      if (h && !p && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = gl(h), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), Be((w) => {
        let x = this.getAxisMotionValue(w).get() || 0;
        if (Xe.test(x)) {
          const { projection: y } = this.visualElement;
          if (y && y.layout) {
            const C = y.layout.layoutBox[w];
            C && (x = Re(C) * (parseFloat(x) / 100));
          }
        }
        this.originPoint[w] = x;
      }), v && z.postRender(() => v(f, u));
      const { animationState: m } = this.visualElement;
      m && m.setActive("whileDrag", !0);
    }, a = (f, u) => {
      const { dragPropagation: h, dragDirectionLock: p, onDirectionLock: v, onDrag: m } = this.getProps();
      if (!h && !this.openGlobalLock)
        return;
      const { offset: w } = u;
      if (p && this.currentDirection === null) {
        this.currentDirection = J6(w), this.currentDirection !== null && v && v(this.currentDirection);
        return;
      }
      this.updateAxis("x", u.point, w), this.updateAxis("y", u.point, w), this.visualElement.render(), m && m(f, u);
    }, l = (f, u) => this.stop(f, u), c = () => Be((f) => {
      var u;
      return this.getAnimationState(f) === "paused" && ((u = this.getAxisMotionValue(f).animation) === null || u === void 0 ? void 0 : u.play());
    }), { dragSnapToOrigin: d } = this.getProps();
    this.panSession = new Ql(t, {
      onSessionStart: s,
      onStart: o,
      onMove: a,
      onSessionEnd: l,
      resumeAnimation: c
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: d,
      contextWindow: ic(this.visualElement)
    });
  }
  stop(t, n) {
    const r = this.isDragging;
    if (this.cancel(), !r)
      return;
    const { velocity: s } = n;
    this.startAnimation(s);
    const { onDragEnd: o } = this.getProps();
    o && z.postRender(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: r } = this.getProps();
    !r && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: s } = this.getProps();
    if (!r || !dr(t, s, this.currentDirection))
      return;
    const o = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + r[t];
    this.constraints && this.constraints[t] && (a = D6(a, this.constraints[t], this.elastic[t])), o.set(a);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(), s = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout, o = this.constraints;
    n && Kt(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && s ? this.constraints = N6(s.layoutBox, n) : this.constraints = !1, this.elastic = z6(r), o !== this.constraints && s && this.constraints && !this.hasMutatedConstraints && Be((a) => {
      this.constraints !== !1 && this.getAxisMotionValue(a) && (this.constraints[a] = I6(s.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Kt(t))
      return !1;
    const r = t.current;
    qe(r !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: s } = this.visualElement;
    if (!s || !s.layout)
      return !1;
    const o = K6(r, s.root, this.visualElement.getTransformPagePoint());
    let a = O6(s.layout.layoutBox, o);
    if (n) {
      const l = n(F6(a));
      this.hasMutatedConstraints = !!l, l && (a = tc(l));
    }
    return a;
  }
  startAnimation(t) {
    const { drag: n, dragMomentum: r, dragElastic: s, dragTransition: o, dragSnapToOrigin: a, onDragTransitionEnd: l } = this.getProps(), c = this.constraints || {}, d = Be((f) => {
      if (!dr(f, n, this.currentDirection))
        return;
      let u = c && c[f] || {};
      a && (u = { min: 0, max: 0 });
      const h = s ? 200 : 1e6, p = s ? 40 : 1e7, v = {
        type: "inertia",
        velocity: r ? t[f] : 0,
        bounceStiffness: h,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...o,
        ...u
      };
      return this.startAxisValueAnimation(f, v);
    });
    return Promise.all(d).then(l);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Di(t, r, 0, n, this.visualElement));
  }
  stopAnimation() {
    Be((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Be((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`, r = this.visualElement.getProps(), s = r[n];
    return s || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    Be((n) => {
      const { drag: r } = this.getProps();
      if (!dr(n, r, this.currentDirection))
        return;
      const { projection: s } = this.visualElement, o = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: a, max: l } = s.layout.layoutBox[n];
        o.set(t[n] - se(a, l, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: n } = this.getProps(), { projection: r } = this.visualElement;
    if (!Kt(n) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    Be((a) => {
      const l = this.getAxisMotionValue(a);
      if (l && this.constraints !== !1) {
        const c = l.get();
        s[a] = $6({ min: c, max: c }, this.constraints[a]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    this.visualElement.current.style.transform = o ? o({}, "") : "none", r.root && r.root.updateScroll(), r.updateLayout(), this.resolveConstraints(), Be((a) => {
      if (!dr(a, t, null))
        return;
      const l = this.getAxisMotionValue(a), { min: c, max: d } = this.constraints[a];
      l.set(se(c, d, s[a]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    Y6.set(this.visualElement, this);
    const t = this.visualElement.current, n = dt(t, "pointerdown", (c) => {
      const { drag: d, dragListener: f = !0 } = this.getProps();
      d && f && this.start(c);
    }), r = () => {
      const { dragConstraints: c } = this.getProps();
      Kt(c) && c.current && (this.constraints = this.resolveRefConstraints());
    }, { projection: s } = this.visualElement, o = s.addEventListener("measure", r);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()), z.read(r);
    const a = ct(window, "resize", () => this.scalePositionWithinConstraints()), l = s.addEventListener("didUpdate", ({ delta: c, hasLayoutChanged: d }) => {
      this.isDragging && d && (Be((f) => {
        const u = this.getAxisMotionValue(f);
        u && (this.originPoint[f] += c[f].translate, u.set(u.get() + c[f].translate));
      }), this.visualElement.render());
    });
    return () => {
      a(), n(), o(), l && l();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: n = !1, dragDirectionLock: r = !1, dragPropagation: s = !1, dragConstraints: o = !1, dragElastic: a = Gs, dragMomentum: l = !0 } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: s,
      dragConstraints: o,
      dragElastic: a,
      dragMomentum: l
    };
  }
}
function dr(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function J6(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"), n;
}
class Q6 extends _t {
  constructor(t) {
    super(t), this.removeGroupControls = _e, this.removeListeners = _e, this.controls = new X6(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || _e;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const _1 = (e) => (t, n) => {
  e && z.postRender(() => e(t, n));
};
class ed extends _t {
  constructor() {
    super(...arguments), this.removePointerDownListener = _e;
  }
  onPointerDown(t) {
    this.session = new Ql(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: ic(this.node)
    });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: s } = this.node.getProps();
    return {
      onSessionStart: _1(t),
      onStart: _1(n),
      onMove: r,
      onEnd: (o, a) => {
        delete this.session, s && z.postRender(() => s(o, a));
      }
    };
  }
  mount() {
    this.removePointerDownListener = dt(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function td() {
  const e = ue($r);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e, s = si();
  return B(() => r(s), []), !t && n ? [!1, () => n && n(s)] : [!0];
}
const wr = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function j1(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const wn = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (R.test(e))
        e = parseFloat(e);
      else
        return e;
    const n = j1(e, t.target.x), r = j1(e, t.target.y);
    return `${n}% ${r}%`;
  }
}, nd = {
  correct: (e, { treeScale: t, projectionDelta: n }) => {
    const r = e, s = bt.parse(e);
    if (s.length > 5)
      return r;
    const o = bt.createTransformer(e), a = typeof s[0] != "number" ? 1 : 0, l = n.x.scale * t.x, c = n.y.scale * t.y;
    s[0 + a] /= l, s[1 + a] /= c;
    const d = se(l, c, 0.5);
    return typeof s[2 + a] == "number" && (s[2 + a] /= d), typeof s[3 + a] == "number" && (s[3 + a] /= d), o(s);
  }
};
class rd extends qc {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: s } = this.props, { projection: o } = t;
    au(sd), o && (n.group && n.group.add(o), r && r.register && s && r.register(o), o.root.didUpdate(), o.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), o.setOptions({
      ...o.options,
      onExitComplete: () => this.safeToRemove()
    })), wr.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: n, visualElement: r, drag: s, isPresent: o } = this.props, a = r.projection;
    return a && (a.isPresent = o, s || t.layoutDependency !== n || n === void 0 ? a.willUpdate() : this.safeToRemove(), t.isPresent !== o && (o ? a.promote() : a.relegate() || z.postRender(() => {
      const l = a.getStack();
      (!l || !l.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), di.postRender(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: n, switchLayoutGroup: r } = this.props, { projection: s } = t;
    s && (s.scheduleCheckAfterUnmount(), n && n.group && n.group.remove(s), r && r.deregister && r.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function oc(e) {
  const [t, n] = td(), r = ue(pi);
  return i.jsx(rd, { ...e, layoutGroup: r, switchLayoutGroup: ue(el), isPresent: t, safeToRemove: n });
}
const sd = {
  borderRadius: {
    ...wn,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: wn,
  borderTopRightRadius: wn,
  borderBottomLeftRadius: wn,
  borderBottomRightRadius: wn,
  boxShadow: nd
}, ac = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], id = ac.length, S1 = (e) => typeof e == "string" ? parseFloat(e) : e, M1 = (e) => typeof e == "number" || R.test(e);
function od(e, t, n, r, s, o) {
  s ? (e.opacity = se(
    0,
    // TODO Reinstate this if only child
    n.opacity !== void 0 ? n.opacity : 1,
    ad(r)
  ), e.opacityExit = se(t.opacity !== void 0 ? t.opacity : 1, 0, ld(r))) : o && (e.opacity = se(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
  for (let a = 0; a < id; a++) {
    const l = `border${ac[a]}Radius`;
    let c = L1(t, l), d = L1(n, l);
    if (c === void 0 && d === void 0)
      continue;
    c || (c = 0), d || (d = 0), c === 0 || d === 0 || M1(c) === M1(d) ? (e[l] = Math.max(se(S1(c), S1(d), r), 0), (Xe.test(d) || Xe.test(c)) && (e[l] += "%")) : e[l] = d;
  }
  (t.rotate || n.rotate) && (e.rotate = se(t.rotate || 0, n.rotate || 0, r));
}
function L1(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const ad = lc(0, 0.5, zl), ld = lc(0.5, 0.95, _e);
function lc(e, t, n) {
  return (r) => r < e ? 0 : r > t ? 1 : n(Zt(e, t, r));
}
function T1(e, t) {
  e.min = t.min, e.max = t.max;
}
function ke(e, t) {
  T1(e.x, t.x), T1(e.y, t.y);
}
function V1(e, t, n, r, s) {
  return e -= t, e = Hr(e, 1 / n, r), s !== void 0 && (e = Hr(e, 1 / s, r)), e;
}
function cd(e, t = 0, n = 1, r = 0.5, s, o = e, a = e) {
  if (Xe.test(t) && (t = parseFloat(t), t = se(a.min, a.max, t / 100) - a.min), typeof t != "number")
    return;
  let l = se(o.min, o.max, r);
  e === o && (l -= t), e.min = V1(e.min, t, n, l, s), e.max = V1(e.max, t, n, l, s);
}
function P1(e, t, [n, r, s], o, a) {
  cd(e, t[n], t[r], t[s], t.scale, o, a);
}
const ud = ["x", "scaleX", "originX"], dd = ["y", "scaleY", "originY"];
function E1(e, t, n, r) {
  P1(e.x, t, ud, n ? n.x : void 0, r ? r.x : void 0), P1(e.y, t, dd, n ? n.y : void 0, r ? r.y : void 0);
}
function R1(e) {
  return e.translate === 0 && e.scale === 1;
}
function cc(e) {
  return R1(e.x) && R1(e.y);
}
function fd(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function uc(e, t) {
  return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max);
}
function H1(e) {
  return Re(e.x) / Re(e.y);
}
class hd {
  constructor() {
    this.members = [];
  }
  add(t) {
    Ni(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Ur(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((s) => t === s);
    if (n === 0)
      return !1;
    let r;
    for (let s = n; s >= 0; s--) {
      const o = this.members[s];
      if (o.isPresent !== !1) {
        r = o;
        break;
      }
    }
    return r ? (this.promote(r), !0) : !1;
  }
  promote(t, n) {
    const r = this.lead;
    if (t !== r && (this.prevLead = r, this.lead = t, t.show(), r)) {
      r.instance && r.scheduleRender(), t.scheduleRender(), t.resumeFrom = r, n && (t.resumeFrom.preserveOpacity = !0), r.snapshot && (t.snapshot = r.snapshot, t.snapshot.latestValues = r.animationValues || r.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: s } = t.options;
      s === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(), r && r.options.onExitComplete && r.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function A1(e, t, n) {
  let r = "";
  const s = e.x.translate / t.x, o = e.y.translate / t.y, a = (n == null ? void 0 : n.z) || 0;
  if ((s || o || a) && (r = `translate3d(${s}px, ${o}px, ${a}px) `), (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `), n) {
    const { transformPerspective: d, rotate: f, rotateX: u, rotateY: h, skewX: p, skewY: v } = n;
    d && (r = `perspective(${d}px) ${r}`), f && (r += `rotate(${f}deg) `), u && (r += `rotateX(${u}deg) `), h && (r += `rotateY(${h}deg) `), p && (r += `skewX(${p}deg) `), v && (r += `skewY(${v}deg) `);
  }
  const l = e.x.scale * t.x, c = e.y.scale * t.y;
  return (l !== 1 || c !== 1) && (r += `scale(${l}, ${c})`), r || "none";
}
const pd = (e, t) => e.depth - t.depth;
class md {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    Ni(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Ur(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(pd), this.isDirty = !1, this.children.forEach(t);
  }
}
function vd(e, t) {
  const n = yt.now(), r = ({ timestamp: s }) => {
    const o = s - n;
    o >= t && (We(r), e(o - t));
  };
  return z.read(r, !0), () => We(r);
}
function gd(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function dc(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function Ii(e, t, n) {
  const r = ve(e) ? e : Ye(e);
  return r.start(Di("", r, t, n)), r.animation;
}
const Cs = ["", "X", "Y", "Z"], xd = { visibility: "hidden" }, k1 = 1e3;
let wd = 0;
const Vt = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function bs(e, t, n, r) {
  const { latestValues: s } = t;
  s[e] && (n[e] = s[e], t.setStaticValue(e, 0), r && (r[e] = 0));
}
function fc(e) {
  if (e.hasCheckedOptimisedAppear = !0, e.root === e)
    return !1;
  const { visualElement: t } = e.options;
  return t ? Jl(t) ? !0 : e.parent && !e.parent.hasCheckedOptimisedAppear ? fc(e.parent) : !1 : !1;
}
function hc({ attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: s }) {
  return class {
    constructor(a = {}, l = t == null ? void 0 : t()) {
      this.id = wd++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.hasCheckedOptimisedAppear = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.scheduleUpdate = () => this.update(), this.projectionUpdateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        this.projectionUpdateScheduled = !1, Vt.totalNodes = Vt.resolvedTargetDeltas = Vt.recalculatedProjection = 0, this.nodes.forEach(bd), this.nodes.forEach(Ld), this.nodes.forEach(Td), this.nodes.forEach(_d), gd(Vt);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = a, this.root = l ? l.root || l : this, this.path = l ? [...l.path, l] : [], this.parent = l, this.depth = l ? l.depth + 1 : 0;
      for (let c = 0; c < this.path.length; c++)
        this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new md());
    }
    addEventListener(a, l) {
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new Oi()), this.eventHandlers.get(a).add(l);
    }
    notifyListeners(a, ...l) {
      const c = this.eventHandlers.get(a);
      c && c.notify(...l);
    }
    hasListeners(a) {
      return this.eventHandlers.has(a);
    }
    /**
     * Lifecycles
     */
    mount(a, l = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = dc(a), this.instance = a;
      const { layoutId: c, layout: d, visualElement: f } = this.options;
      if (f && !f.current && f.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), l && (d || c) && (this.isLayoutDirty = !0), e) {
        let u;
        const h = () => this.root.updateBlockedByResize = !1;
        e(a, () => {
          this.root.updateBlockedByResize = !0, u && u(), u = vd(h, 250), wr.hasAnimatedSinceResize && (wr.hasAnimatedSinceResize = !1, this.nodes.forEach(B1));
        });
      }
      c && this.root.registerSharedNode(c, this), this.options.animate !== !1 && f && (c || d) && this.addEventListener("didUpdate", ({ delta: u, hasLayoutChanged: h, hasRelativeTargetChanged: p, layout: v }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const m = this.options.transition || f.getDefaultTransition() || Hd, { onLayoutAnimationStart: w, onLayoutAnimationComplete: x } = f.getProps(), y = !this.targetLayout || !uc(this.targetLayout, v) || p, C = !h && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || C || h && (y || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(u, C);
          const _ = {
            ...ji(m, "layout"),
            onPlay: w,
            onComplete: x
          };
          (f.shouldReduceMotion || this.options.layoutRoot) && (_.delay = 0, _.type = !1), this.startAnimation(_);
        } else
          h || B1(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = v;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, We(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(Vd), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: a } = this.options;
      return a && a.getProps().transformTemplate;
    }
    willUpdate(a = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (window.HandoffCancelAllAnimations && fc(this) && window.HandoffCancelAllAnimations(), !this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let f = 0; f < this.path.length; f++) {
        const u = this.path[f];
        u.shouldResetTransform = !0, u.updateScroll("snapshot"), u.options.layoutRoot && u.willUpdate(!1);
      }
      const { layoutId: l, layout: c } = this.options;
      if (l === void 0 && !c)
        return;
      const d = this.getTransformTemplate();
      this.prevTransformTemplateValue = d ? d(this.latestValues, "") : void 0, this.updateSnapshot(), a && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Z1);
        return;
      }
      this.isUpdating || this.nodes.forEach(Sd), this.isUpdating = !1, this.nodes.forEach(Md), this.nodes.forEach(yd), this.nodes.forEach(Cd), this.clearAllSnapshots();
      const l = yt.now();
      me.delta = Ct(0, 1e3 / 60, l - me.timestamp), me.timestamp = l, me.isProcessing = !0, ds.update.process(me), ds.preRender.process(me), ds.render.process(me), me.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, di.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(jd), this.sharedNodes.forEach(Pd);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0, z.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      z.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let c = 0; c < this.path.length; c++)
          this.path[c].updateScroll();
      const a = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = ce(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: l } = this.options;
      l && l.notify("LayoutMeasure", this.layout.layoutBox, a ? a.layoutBox : void 0);
    }
    updateScroll(a = "measure") {
      let l = !!(this.options.layoutScroll && this.instance);
      this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === a && (l = !1), l && (this.scroll = {
        animationId: this.root.animationId,
        phase: a,
        isRoot: r(this.instance),
        offset: n(this.instance)
      });
    }
    resetTransform() {
      if (!s)
        return;
      const a = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout, l = this.projectionDelta && !cc(this.projectionDelta), c = this.getTransformTemplate(), d = c ? c(this.latestValues, "") : void 0, f = d !== this.prevTransformTemplateValue;
      a && (l || Tt(this.latestValues) || f) && (s(this.instance, d), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const l = this.measurePageBox();
      let c = this.removeElementScroll(l);
      return a && (c = this.removeTransform(c)), Ad(c), {
        animationId: this.root.animationId,
        measuredBox: l,
        layoutBox: c,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: a } = this.options;
      if (!a)
        return ce();
      const l = a.measureViewportBox(), { scroll: c } = this.root;
      return c && (wt(l.x, c.offset.x), wt(l.y, c.offset.y)), l;
    }
    removeElementScroll(a) {
      const l = ce();
      ke(l, a);
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c], { scroll: f, options: u } = d;
        if (d !== this.root && f && u.layoutScroll) {
          if (f.isRoot) {
            ke(l, a);
            const { scroll: h } = this.root;
            h && (wt(l.x, -h.offset.x), wt(l.y, -h.offset.y));
          }
          wt(l.x, f.offset.x), wt(l.y, f.offset.y);
        }
      }
      return l;
    }
    applyTransform(a, l = !1) {
      const c = ce();
      ke(c, a);
      for (let d = 0; d < this.path.length; d++) {
        const f = this.path[d];
        !l && f.options.layoutScroll && f.scroll && f !== f.root && Jt(c, {
          x: -f.scroll.offset.x,
          y: -f.scroll.offset.y
        }), Tt(f.latestValues) && Jt(c, f.latestValues);
      }
      return Tt(this.latestValues) && Jt(c, this.latestValues), c;
    }
    removeTransform(a) {
      const l = ce();
      ke(l, a);
      for (let c = 0; c < this.path.length; c++) {
        const d = this.path[c];
        if (!d.instance || !Tt(d.latestValues))
          continue;
        Ks(d.latestValues) && d.updateSnapshot();
        const f = ce(), u = d.measurePageBox();
        ke(f, u), E1(l, d.latestValues, d.snapshot ? d.snapshot.layoutBox : void 0, f);
      }
      return Tt(this.latestValues) && E1(l, this.latestValues), l;
    }
    setTargetDelta(a) {
      this.targetDelta = a, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(a) {
      this.options = {
        ...this.options,
        ...a,
        crossfade: a.crossfade !== void 0 ? a.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== me.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(a = !1) {
      var l;
      const c = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = c.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = c.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = c.isSharedProjectionDirty);
      const d = !!this.resumingFrom || this !== c;
      if (!(a || d && this.isSharedProjectionDirty || this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty || this.attemptToResolveRelativeTarget))
        return;
      const { layout: u, layoutId: h } = this.options;
      if (!(!this.layout || !(u || h))) {
        if (this.resolvedRelativeTargetAt = me.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ce(), this.relativeTargetOrigin = ce(), Vn(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), ke(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = ce(), this.targetWithTransforms = ce()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), B6(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : ke(this.target, this.layout.layoutBox), rc(this.target, this.targetDelta)) : ke(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ce(), this.relativeTargetOrigin = ce(), Vn(this.relativeTargetOrigin, this.target, p.target), ke(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Vt.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Ks(this.parent.latestValues) || nc(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var a;
      const l = this.getLead(), c = !!this.resumingFrom || this !== l;
      let d = !0;
      if ((this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty) && (d = !1), c && (this.isSharedProjectionDirty || this.isTransformDirty) && (d = !1), this.resolvedRelativeTargetAt === me.timestamp && (d = !1), d)
        return;
      const { layout: f, layoutId: u } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(f || u))
        return;
      ke(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x, p = this.treeScale.y;
      W6(this.layoutCorrected, this.treeScale, this.path, c), l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox, l.targetWithTransforms = ce());
      const { target: v } = l;
      if (!v) {
        this.projectionTransform && (this.projectionDelta = Xt(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = Xt(), this.projectionDeltaWithTransform = Xt());
      const m = this.projectionTransform;
      Tn(this.projectionDelta, this.layoutCorrected, v, this.latestValues), this.projectionTransform = A1(this.projectionDelta, this.treeScale), (this.projectionTransform !== m || this.treeScale.x !== h || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", v)), Vt.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(a = !0) {
      if (this.options.scheduleRender && this.options.scheduleRender(), a) {
        const l = this.getStack();
        l && l.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    setAnimationOrigin(a, l = !1) {
      const c = this.snapshot, d = c ? c.latestValues : {}, f = { ...this.latestValues }, u = Xt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !l;
      const h = ce(), p = c ? c.source : void 0, v = this.layout ? this.layout.source : void 0, m = p !== v, w = this.getStack(), x = !w || w.members.length <= 1, y = !!(m && !x && this.options.crossfade === !0 && !this.path.some(Rd));
      this.animationProgress = 0;
      let C;
      this.mixTargetDelta = (_) => {
        const j = _ / 1e3;
        D1(u.x, a.x, j), D1(u.y, a.y, j), this.setTargetDelta(u), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Vn(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), Ed(this.relativeTarget, this.relativeTargetOrigin, h, j), C && fd(this.relativeTarget, C) && (this.isProjectionDirty = !1), C || (C = ce()), ke(C, this.relativeTarget)), m && (this.animationValues = f, od(f, d, this.latestValues, j, y, x)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = j;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (We(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = z.update(() => {
        wr.hasAnimatedSinceResize = !0, this.currentAnimation = Ii(0, k1, {
          ...a,
          onUpdate: (l) => {
            this.mixTargetDelta(l), a.onUpdate && a.onUpdate(l);
          },
          onComplete: () => {
            a.onComplete && a.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const a = this.getStack();
      a && a.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(k1), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let { targetWithTransforms: l, target: c, layout: d, latestValues: f } = a;
      if (!(!l || !c || !d)) {
        if (this !== a && this.layout && d && pc(this.options.animationType, this.layout.layoutBox, d.layoutBox)) {
          c = this.target || ce();
          const u = Re(this.layout.layoutBox.x);
          c.x.min = a.target.x.min, c.x.max = c.x.min + u;
          const h = Re(this.layout.layoutBox.y);
          c.y.min = a.target.y.min, c.y.max = c.y.min + h;
        }
        ke(l, c), Jt(l, f), Tn(this.projectionDeltaWithTransform, this.layoutCorrected, l, f);
      }
    }
    registerSharedNode(a, l) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new hd()), this.sharedNodes.get(a).add(l);
      const d = l.options.initialPromotionConfig;
      l.promote({
        transition: d ? d.transition : void 0,
        preserveFollowOpacity: d && d.shouldPreserveFollowOpacity ? d.shouldPreserveFollowOpacity(l) : void 0
      });
    }
    isLead() {
      const a = this.getStack();
      return a ? a.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: l } = this.options;
      return l ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) || this : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: l } = this.options;
      return l ? (a = this.getStack()) === null || a === void 0 ? void 0 : a.prevLead : void 0;
    }
    getStack() {
      const { layoutId: a } = this.options;
      if (a)
        return this.root.sharedNodes.get(a);
    }
    promote({ needsReset: a, transition: l, preserveFollowOpacity: c } = {}) {
      const d = this.getStack();
      d && d.promote(this, c), a && (this.projectionDelta = void 0, this.needsReset = !0), l && this.setOptions({ transition: l });
    }
    relegate() {
      const a = this.getStack();
      return a ? a.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: a } = this.options;
      if (!a)
        return;
      let l = !1;
      const { latestValues: c } = a;
      if ((c.z || c.rotate || c.rotateX || c.rotateY || c.rotateZ || c.skewX || c.skewY) && (l = !0), !l)
        return;
      const d = {};
      c.z && bs("z", a, d, this.animationValues);
      for (let f = 0; f < Cs.length; f++)
        bs(`rotate${Cs[f]}`, a, d, this.animationValues), bs(`skew${Cs[f]}`, a, d, this.animationValues);
      a.render();
      for (const f in d)
        a.setStaticValue(f, d[f]), this.animationValues && (this.animationValues[f] = d[f]);
      a.scheduleRender();
    }
    getProjectionStyles(a) {
      var l, c;
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible)
        return xd;
      const d = {
        visibility: ""
      }, f = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, d.opacity = "", d.pointerEvents = gr(a == null ? void 0 : a.pointerEvents) || "", d.transform = f ? f(this.latestValues, "") : "none", d;
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        const m = {};
        return this.options.layoutId && (m.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, m.pointerEvents = gr(a == null ? void 0 : a.pointerEvents) || ""), this.hasProjected && !Tt(this.latestValues) && (m.transform = f ? f({}, "") : "none", this.hasProjected = !1), m;
      }
      const h = u.animationValues || u.latestValues;
      this.applyTransformsToTarget(), d.transform = A1(this.projectionDeltaWithTransform, this.treeScale, h), f && (d.transform = f(h, d.transform));
      const { x: p, y: v } = this.projectionDelta;
      d.transformOrigin = `${p.origin * 100}% ${v.origin * 100}% 0`, u.animationValues ? d.opacity = u === this ? (c = (l = h.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && c !== void 0 ? c : 1 : this.preserveOpacity ? this.latestValues.opacity : h.opacityExit : d.opacity = u === this ? h.opacity !== void 0 ? h.opacity : "" : h.opacityExit !== void 0 ? h.opacityExit : 0;
      for (const m in Lr) {
        if (h[m] === void 0)
          continue;
        const { correct: w, applyTo: x } = Lr[m], y = d.transform === "none" ? h[m] : w(h[m], u);
        if (x) {
          const C = x.length;
          for (let _ = 0; _ < C; _++)
            d[x[_]] = y;
        } else
          d[m] = y;
      }
      return this.options.layoutId && (d.pointerEvents = u === this ? gr(a == null ? void 0 : a.pointerEvents) || "" : "none"), d;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((a) => {
        var l;
        return (l = a.currentAnimation) === null || l === void 0 ? void 0 : l.stop();
      }), this.root.nodes.forEach(Z1), this.root.sharedNodes.clear();
    }
  };
}
function yd(e) {
  e.updateLayout();
}
function Cd(e) {
  var t;
  const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: s } = e.layout, { animationType: o } = e.options, a = n.source !== e.layout.source;
    o === "size" ? Be((u) => {
      const h = a ? n.measuredBox[u] : n.layoutBox[u], p = Re(h);
      h.min = r[u].min, h.max = h.min + p;
    }) : pc(o, n.layoutBox, r) && Be((u) => {
      const h = a ? n.measuredBox[u] : n.layoutBox[u], p = Re(r[u]);
      h.max = h.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[u].max = e.relativeTarget[u].min + p);
    });
    const l = Xt();
    Tn(l, r, n.layoutBox);
    const c = Xt();
    a ? Tn(c, e.applyTransform(s, !0), n.measuredBox) : Tn(c, r, n.layoutBox);
    const d = !cc(l);
    let f = !1;
    if (!e.resumeFrom) {
      const u = e.getClosestProjectingParent();
      if (u && !u.resumeFrom) {
        const { snapshot: h, layout: p } = u;
        if (h && p) {
          const v = ce();
          Vn(v, n.layoutBox, h.layoutBox);
          const m = ce();
          Vn(m, r, p.layoutBox), uc(v, m) || (f = !0), u.options.layoutRoot && (e.relativeTarget = m, e.relativeTargetOrigin = v, e.relativeParent = u);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: c,
      layoutDelta: l,
      hasLayoutChanged: d,
      hasRelativeTargetChanged: f
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function bd(e) {
  Vt.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function _d(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function jd(e) {
  e.clearSnapshot();
}
function Z1(e) {
  e.clearMeasurements();
}
function Sd(e) {
  e.isLayoutDirty = !1;
}
function Md(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function B1(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function Ld(e) {
  e.resolveTargetDelta();
}
function Td(e) {
  e.calcProjection();
}
function Vd(e) {
  e.resetSkewAndRotation();
}
function Pd(e) {
  e.removeLeadSnapshot();
}
function D1(e, t, n) {
  e.translate = se(t.translate, 0, n), e.scale = se(t.scale, 1, n), e.origin = t.origin, e.originPoint = t.originPoint;
}
function N1(e, t, n, r) {
  e.min = se(t.min, n.min, r), e.max = se(t.max, n.max, r);
}
function Ed(e, t, n, r) {
  N1(e.x, t.x, n.x, r), N1(e.y, t.y, n.y, r);
}
function Rd(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const Hd = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
}, O1 = (e) => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e), $1 = O1("applewebkit/") && !O1("chrome/") ? Math.round : _e;
function I1(e) {
  e.min = $1(e.min), e.max = $1(e.max);
}
function Ad(e) {
  I1(e.x), I1(e.y);
}
function pc(e, t, n) {
  return e === "position" || e === "preserve-aspect" && !Us(H1(t), H1(n), 0.2);
}
const kd = hc({
  attachResizeListener: (e, t) => ct(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), _s = {
  current: void 0
}, mc = hc({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!_s.current) {
      const e = new kd({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), _s.current = e;
    }
    return _s.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), Zd = {
  pan: {
    Feature: ed
  },
  drag: {
    Feature: Q6,
    ProjectionNode: mc,
    MeasureLayout: oc
  }
}, Ar = { current: null }, zi = { current: !1 };
function vc() {
  if (zi.current = !0, !!ci)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Ar.current = e.matches;
      e.addListener(t), t();
    } else
      Ar.current = !1;
}
function Bd(e, t, n) {
  const { willChange: r } = t;
  for (const s in t) {
    const o = t[s], a = n[s];
    if (ve(o))
      e.addValue(s, o), Rr(r) && r.add(s), process.env.NODE_ENV === "development" && Kn(o.version === "11.2.12", `Attempting to mix Framer Motion versions ${o.version} with 11.2.12 may not work as expected.`);
    else if (ve(a))
      e.addValue(s, Ye(o, { owner: e })), Rr(r) && r.remove(s);
    else if (a !== o)
      if (e.hasValue(s)) {
        const l = e.getValue(s);
        l.liveStyle === !0 ? l.jump(o) : l.hasAnimated || l.set(o);
      } else {
        const l = e.getStaticValue(s);
        e.addValue(s, Ye(l !== void 0 ? l : o, { owner: e }));
      }
  }
  for (const s in n)
    t[s] === void 0 && e.removeValue(s);
  return t;
}
const Zn = /* @__PURE__ */ new WeakMap(), Dd = [...Sl, Te, bt], Nd = (e) => Dd.find(jl(e)), z1 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], Od = hi.length;
class $d {
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, n, r) {
    return {};
  }
  constructor({ parent: t, props: n, presenceContext: r, reducedMotionConfig: s, blockInitialAnimation: o, visualState: a }, l = {}) {
    this.resolveKeyframes = (h, p, v, m) => new this.KeyframeResolver(h, p, v, m, this), this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.KeyframeResolver = Si, this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => z.render(this.render, !1, !0);
    const { latestValues: c, renderState: d } = a;
    this.latestValues = c, this.baseTarget = { ...c }, this.initialValues = n.initial ? { ...c } : {}, this.renderState = d, this.parent = t, this.props = n, this.presenceContext = r, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = s, this.options = l, this.blockInitialAnimation = !!o, this.isControllingVariants = zr(n), this.isVariantNode = nl(n), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: f, ...u } = this.scrapeMotionValuesFromProps(n, {}, this);
    for (const h in u) {
      const p = u[h];
      c[h] !== void 0 && ve(p) && (p.set(c[h], !1), Rr(f) && f.add(h));
    }
  }
  mount(t) {
    this.current = t, Zn.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((n, r) => this.bindToMotionValue(r, n)), zi.current || vc(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ar.current, process.env.NODE_ENV !== "production" && Kn(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Zn.delete(this.current), this.projection && this.projection.unmount(), We(this.notifyUpdate), We(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), n.isMounted = !1);
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = Ot.has(t), s = n.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && z.preRender(this.notifyUpdate), r && this.projection && (this.projection.isTransformDirty = !0);
    }), o = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      s(), o(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in tn) {
      const n = tn[t];
      if (!n)
        continue;
      const { isEnabled: r, Feature: s } = n;
      if (!this.features[t] && s && r(this.props) && (this.features[t] = new s(this)), this.features[t]) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(), o.isMounted = !0);
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ce();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, n) {
    this.latestValues[t] = n;
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, n) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = n;
    for (let r = 0; r < z1.length; r++) {
      const s = z1[r];
      this.propEventSubscriptions[s] && (this.propEventSubscriptions[s](), delete this.propEventSubscriptions[s]);
      const o = "on" + s, a = t[o];
      a && (this.propEventSubscriptions[s] = this.on(s, a));
    }
    this.prevMotionValues = Bd(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  getVariantContext(t = !1) {
    if (t)
      return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return this.props.initial !== void 0 && (r.initial = this.props.initial), r;
    }
    const n = {};
    for (let r = 0; r < Od; r++) {
      const s = hi[r], o = this.props[s];
      (An(o) || o === !1) && (n[s] = o);
    }
    return n;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return n.variantChildren && n.variantChildren.add(t), () => n.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r && (r && this.removeValue(t), this.bindToMotionValue(t, n), this.values.set(t, n), this.latestValues[t] = n.get());
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let r = this.values.get(t);
    return r === void 0 && n !== void 0 && (r = Ye(n === null ? void 0 : n, { owner: this }), this.addValue(t, r)), r;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var r;
    let s = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
    return s != null && (typeof s == "string" && (bl(s) || Cl(s)) ? s = parseFloat(s) : !Nd(s) && bt.test(n) && (s = Hl(t, n)), this.setBaseTarget(t, ve(s) ? s.get() : s)), ve(s) ? s.get() : s;
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, n) {
    this.baseTarget[t] = n;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var n;
    const { initial: r } = this.props;
    let s;
    if (typeof r == "string" || typeof r == "object") {
      const a = _i(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
      a && (s = a[t]);
    }
    if (r && s !== void 0)
      return s;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !ve(o) ? o : this.initialValues[t] !== void 0 && s === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new Oi()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class gc extends $d {
  constructor() {
    super(...arguments), this.KeyframeResolver = Al;
  }
  sortInstanceNodePosition(t, n) {
    return t.compareDocumentPosition(n) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, n) {
    return t.style ? t.style[n] : void 0;
  }
  removeValueFromRenderState(t, { vars: n, style: r }) {
    delete n[t], delete r[t];
  }
}
function Id(e) {
  return window.getComputedStyle(e);
}
class xc extends gc {
  constructor() {
    super(...arguments), this.type = "html";
  }
  readValueFromInstance(t, n) {
    if (Ot.has(n)) {
      const r = Li(n);
      return r && r.default || 0;
    } else {
      const r = Id(t), s = (il(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return sc(t, n);
  }
  build(t, n, r, s) {
    xi(t, n, r, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return bi(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    ve(t) && (this.childSubscription = t.on("change", (n) => {
      this.current && (this.current.textContent = `${n}`);
    }));
  }
  renderInstance(t, n, r, s) {
    ul(t, n, r, s);
  }
}
class wc extends gc {
  constructor() {
    super(...arguments), this.type = "svg", this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (Ot.has(n)) {
      const r = Li(n);
      return r && r.default || 0;
    }
    return n = dl.has(n) ? n : ui(n), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return ce();
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return hl(t, n, r);
  }
  build(t, n, r, s) {
    yi(t, n, r, this.isSVGTag, s.transformTemplate);
  }
  renderInstance(t, n, r, s) {
    fl(t, n, r, s);
  }
  mount(t) {
    this.isSVGTag = Ci(t.tagName), super.mount(t);
  }
}
const zd = (e, t) => mi(e) ? new wc(t, { enableHardwareAcceleration: !1 }) : new xc(t, {
  allowProjection: e !== Zr,
  enableHardwareAcceleration: !0
}), Fd = {
  layout: {
    ProjectionNode: mc,
    MeasureLayout: oc
  }
}, qd = {
  ...H6,
  ...Ku,
  ...Zd,
  ...Fd
}, et = /* @__PURE__ */ iu((e, t) => Zu(e, t, qd, zd));
function yc() {
  const e = k(!1);
  return zn(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function Wd() {
  const e = yc(), [t, n] = N(0), r = be(() => {
    e.current && n(t + 1);
  }, [t]);
  return [be(() => z.postRender(r), [r]), t];
}
class Ud extends D.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      r.height = n.offsetHeight || 0, r.width = n.offsetWidth || 0, r.top = n.offsetTop, r.left = n.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function Gd({ children: e, isPresent: t }) {
  const n = si(), r = k(null), s = k({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  }), { nonce: o } = ue(Nr);
  return ri(() => {
    const { width: a, height: l, top: c, left: d } = s.current;
    if (t || !r.current || !a || !l)
      return;
    r.current.dataset.motionPopId = n;
    const f = document.createElement("style");
    return o && (f.nonce = o), document.head.appendChild(f), f.sheet && f.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${l}px !important;
            top: ${c}px !important;
            left: ${d}px !important;
          }
        `), () => {
      document.head.removeChild(f);
    };
  }, [t]), i.jsx(Ud, { isPresent: t, childRef: r, sizeRef: s, children: D.cloneElement(e, { ref: r }) });
}
const js = ({ children: e, initial: t, isPresent: n, onExitComplete: r, custom: s, presenceAffectsLayout: o, mode: a }) => {
  const l = Un(Kd), c = si(), d = ze(
    () => ({
      id: c,
      initial: t,
      isPresent: n,
      custom: s,
      onExitComplete: (f) => {
        l.set(f, !0);
        for (const u of l.values())
          if (!u)
            return;
        r && r();
      },
      register: (f) => (l.set(f, !1), () => l.delete(f))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    o ? [Math.random()] : [n]
  );
  return ze(() => {
    l.forEach((f, u) => l.set(u, !1));
  }, [n]), D.useEffect(() => {
    !n && !l.size && r && r();
  }, [n]), a === "popLayout" && (e = i.jsx(Gd, { isPresent: n, children: e })), i.jsx($r.Provider, { value: d, children: e });
};
function Kd() {
  return /* @__PURE__ */ new Map();
}
function Yd(e) {
  return B(() => () => e(), []);
}
const Pt = (e) => e.key || "";
function Xd(e, t) {
  e.forEach((n) => {
    const r = Pt(n);
    t.set(r, n);
  });
}
function Jd(e) {
  const t = [];
  return Ne.forEach(e, (n) => {
    Ht(n) && t.push(n);
  }), t;
}
const Qd = ({ children: e, custom: t, initial: n = !0, onExitComplete: r, exitBeforeEnter: s, presenceAffectsLayout: o = !0, mode: a = "sync" }) => {
  qe(!s, "Replace exitBeforeEnter with mode='wait'");
  const l = ue(pi).forceRender || Wd()[0], c = yc(), d = Jd(e);
  let f = d;
  const u = k(/* @__PURE__ */ new Map()).current, h = k(f), p = k(/* @__PURE__ */ new Map()).current, v = k(!0);
  if (zn(() => {
    v.current = !1, Xd(d, p), h.current = f;
  }), Yd(() => {
    v.current = !0, p.clear(), u.clear();
  }), v.current)
    return i.jsx(i.Fragment, { children: f.map((y) => i.jsx(js, { isPresent: !0, initial: n ? void 0 : !1, presenceAffectsLayout: o, mode: a, children: y }, Pt(y))) });
  f = [...f];
  const m = h.current.map(Pt), w = d.map(Pt), x = m.length;
  for (let y = 0; y < x; y++) {
    const C = m[y];
    w.indexOf(C) === -1 && !u.has(C) && u.set(C, void 0);
  }
  return a === "wait" && u.size && (f = []), u.forEach((y, C) => {
    if (w.indexOf(C) !== -1)
      return;
    const _ = p.get(C);
    if (!_)
      return;
    const j = m.indexOf(C);
    let M = y;
    if (!M) {
      const L = () => {
        u.delete(C);
        const b = Array.from(p.keys()).filter((V) => !w.includes(V));
        if (b.forEach((V) => p.delete(V)), h.current = d.filter((V) => {
          const E = Pt(V);
          return (
            // filter out the node exiting
            E === C || // filter out the leftover children
            b.includes(E)
          );
        }), !u.size) {
          if (c.current === !1)
            return;
          l(), r && r();
        }
      };
      M = i.jsx(js, { isPresent: !1, onExitComplete: L, custom: t, presenceAffectsLayout: o, mode: a, children: _ }, Pt(_)), u.set(C, M);
    }
    f.splice(j, 0, M);
  }), f = f.map((y) => {
    const C = y.key;
    return u.has(C) ? y : i.jsx(js, { isPresent: !0, presenceAffectsLayout: o, mode: a, children: y }, Pt(y));
  }), process.env.NODE_ENV !== "production" && a === "wait" && f.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`), i.jsx(i.Fragment, { children: u.size ? f : f.map((y) => ht(y)) });
};
function Xs(e) {
  const t = Un(() => Ye(e)), { isStatic: n } = ue(Nr);
  if (n) {
    const [, r] = N(e);
    B(() => t.on("change", r), []);
  }
  return t;
}
const e7 = (e) => e && typeof e == "object" && e.mix, t7 = (e) => e7(e) ? e.mix : void 0;
function n7(...e) {
  const t = !Array.isArray(e[0]), n = t ? 0 : -1, r = e[0 + n], s = e[1 + n], o = e[2 + n], a = e[3 + n], l = Hi(s, o, {
    mixer: t7(o[0]),
    ...a
  });
  return t ? l(r) : l;
}
function Cc(e, t) {
  const n = Xs(t()), r = () => n.set(t());
  return r(), zn(() => {
    const s = () => z.preRender(r, !1, !0), o = e.map((a) => a.on("change", s));
    return () => {
      o.forEach((a) => a()), We(r);
    };
  }), n;
}
function r7(e) {
  Ln.current = [], e();
  const t = Cc(Ln.current, e);
  return Ln.current = void 0, t;
}
function rn(e, t, n, r) {
  if (typeof e == "function")
    return r7(e);
  const s = typeof t == "function" ? t : n7(t, n, r);
  return Array.isArray(e) ? F1(e, s) : F1([e], ([o]) => s(o));
}
function F1(e, t) {
  const n = Un(() => []);
  return Cc(e, () => {
    n.length = 0;
    const r = e.length;
    for (let s = 0; s < r; s++)
      n[s] = e[s].get();
    return t(n);
  });
}
function bc(e, t, n) {
  ri(() => e.on(t, n), [e, t, n]);
}
function Fi(e, t, n) {
  var r;
  if (typeof e == "string") {
    let s = document;
    t && (qe(!!t.current, "Scope provided, but no element detected."), s = t.current), n ? ((r = n[e]) !== null && r !== void 0 || (n[e] = s.querySelectorAll(e)), e = n[e]) : e = s.querySelectorAll(e);
  } else
    e instanceof Element && (e = [e]);
  return Array.from(e || []);
}
const yr = /* @__PURE__ */ new WeakMap();
let xt;
function s7(e, t) {
  if (t) {
    const { inlineSize: n, blockSize: r } = t[0];
    return { width: n, height: r };
  } else
    return e instanceof SVGElement && "getBBox" in e ? e.getBBox() : {
      width: e.offsetWidth,
      height: e.offsetHeight
    };
}
function i7({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = yr.get(e)) === null || r === void 0 || r.forEach((s) => {
    s({
      target: e,
      contentSize: t,
      get size() {
        return s7(e, n);
      }
    });
  });
}
function o7(e) {
  e.forEach(i7);
}
function a7() {
  typeof ResizeObserver > "u" || (xt = new ResizeObserver(o7));
}
function l7(e, t) {
  xt || a7();
  const n = Fi(e);
  return n.forEach((r) => {
    let s = yr.get(r);
    s || (s = /* @__PURE__ */ new Set(), yr.set(r, s)), s.add(t), xt == null || xt.observe(r);
  }), () => {
    n.forEach((r) => {
      const s = yr.get(r);
      s == null || s.delete(t), s != null && s.size || xt == null || xt.unobserve(r);
    });
  };
}
const Cr = /* @__PURE__ */ new Set();
let Pn;
function c7() {
  Pn = () => {
    const e = {
      width: window.innerWidth,
      height: window.innerHeight
    }, t = {
      target: window,
      size: e,
      contentSize: e
    };
    Cr.forEach((n) => n(t));
  }, window.addEventListener("resize", Pn);
}
function u7(e) {
  return Cr.add(e), Pn || c7(), () => {
    Cr.delete(e), !Cr.size && Pn && (Pn = void 0);
  };
}
function d7(e, t) {
  return typeof e == "function" ? u7(e) : l7(e, t);
}
const f7 = 50, q1 = () => ({
  current: 0,
  offset: [],
  progress: 0,
  scrollLength: 0,
  targetOffset: 0,
  targetLength: 0,
  containerLength: 0,
  velocity: 0
}), h7 = () => ({
  time: 0,
  x: q1(),
  y: q1()
}), p7 = {
  x: {
    length: "Width",
    position: "Left"
  },
  y: {
    length: "Height",
    position: "Top"
  }
};
function W1(e, t, n, r) {
  const s = n[t], { length: o, position: a } = p7[t], l = s.current, c = n.time;
  s.current = e[`scroll${a}`], s.scrollLength = e[`scroll${o}`] - e[`client${o}`], s.offset.length = 0, s.offset[0] = 0, s.offset[1] = s.scrollLength, s.progress = Zt(0, s.scrollLength, s.current);
  const d = r - c;
  s.velocity = d > f7 ? 0 : Ti(s.current - l, d);
}
function m7(e, t, n) {
  W1(e, "x", t, n), W1(e, "y", t, n), t.time = n;
}
function v7(e, t) {
  const n = { x: 0, y: 0 };
  let r = e;
  for (; r && r !== t; )
    if (r instanceof HTMLElement)
      n.x += r.offsetLeft, n.y += r.offsetTop, r = r.offsetParent;
    else if (r.tagName === "svg") {
      const s = r.getBoundingClientRect();
      r = r.parentElement;
      const o = r.getBoundingClientRect();
      n.x += s.left - o.left, n.y += s.top - o.top;
    } else if (r instanceof SVGGraphicsElement) {
      const { x: s, y: o } = r.getBBox();
      n.x += s, n.y += o;
      let a = null, l = r.parentNode;
      for (; !a; )
        l.tagName === "svg" && (a = l), l = r.parentNode;
      r = a;
    } else
      break;
  return n;
}
const g7 = {
  Enter: [
    [0, 1],
    [1, 1]
  ],
  Exit: [
    [0, 0],
    [1, 0]
  ],
  Any: [
    [1, 0],
    [0, 1]
  ],
  All: [
    [0, 0],
    [1, 1]
  ]
}, Js = {
  start: 0,
  center: 0.5,
  end: 1
};
function U1(e, t, n = 0) {
  let r = 0;
  if (e in Js && (e = Js[e]), typeof e == "string") {
    const s = parseFloat(e);
    e.endsWith("px") ? r = s : e.endsWith("%") ? e = s / 100 : e.endsWith("vw") ? r = s / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? r = s / 100 * document.documentElement.clientHeight : e = s;
  }
  return typeof e == "number" && (r = t * e), n + r;
}
const x7 = [0, 0];
function w7(e, t, n, r) {
  let s = Array.isArray(e) ? e : x7, o = 0, a = 0;
  return typeof e == "number" ? s = [e, e] : typeof e == "string" && (e = e.trim(), e.includes(" ") ? s = e.split(" ") : s = [e, Js[e] ? e : "0"]), o = U1(s[0], n, r), a = U1(s[1], t), o - a;
}
const y7 = { x: 0, y: 0 };
function C7(e) {
  return "getBBox" in e && e.tagName !== "svg" ? e.getBBox() : { width: e.clientWidth, height: e.clientHeight };
}
function b7(e, t, n) {
  const { offset: r = g7.All } = n, { target: s = e, axis: o = "y" } = n, a = o === "y" ? "height" : "width", l = s !== e ? v7(s, e) : y7, c = s === e ? { width: e.scrollWidth, height: e.scrollHeight } : C7(s), d = {
    width: e.clientWidth,
    height: e.clientHeight
  };
  t[o].offset.length = 0;
  let f = !t[o].interpolate;
  const u = r.length;
  for (let h = 0; h < u; h++) {
    const p = w7(r[h], d[a], c[a], l[o]);
    !f && p !== t[o].interpolatorOffsets[h] && (f = !0), t[o].offset[h] = p;
  }
  f && (t[o].interpolate = Hi(t[o].offset, Ai(r)), t[o].interpolatorOffsets = [...t[o].offset]), t[o].progress = t[o].interpolate(t[o].current);
}
function _7(e, t = e, n) {
  if (n.x.targetOffset = 0, n.y.targetOffset = 0, t !== e) {
    let r = t;
    for (; r && r !== e; )
      n.x.targetOffset += r.offsetLeft, n.y.targetOffset += r.offsetTop, r = r.offsetParent;
  }
  n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth, n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight, n.x.containerLength = e.clientWidth, n.y.containerLength = e.clientHeight, process.env.NODE_ENV !== "production" && e && t && t !== e && Kn(getComputedStyle(e).position !== "static", "Please ensure that the container has a non-static position, like 'relative', 'fixed', or 'absolute' to ensure scroll offset is calculated correctly.");
}
function j7(e, t, n, r = {}) {
  return {
    measure: () => _7(e, r.target, n),
    update: (s) => {
      m7(e, n, s), (r.offset || r.target) && b7(e, n, r);
    },
    notify: () => t(n)
  };
}
const yn = /* @__PURE__ */ new WeakMap(), G1 = /* @__PURE__ */ new WeakMap(), Ss = /* @__PURE__ */ new WeakMap(), K1 = (e) => e === document.documentElement ? window : e;
function S7(e, { container: t = document.documentElement, ...n } = {}) {
  let r = Ss.get(t);
  r || (r = /* @__PURE__ */ new Set(), Ss.set(t, r));
  const s = h7(), o = j7(t, e, s, n);
  if (r.add(o), !yn.has(t)) {
    const l = () => {
      for (const h of r)
        h.measure();
    }, c = () => {
      for (const h of r)
        h.update(me.timestamp);
    }, d = () => {
      for (const h of r)
        h.notify();
    }, f = () => {
      z.read(l, !1, !0), z.read(c, !1, !0), z.update(d, !1, !0);
    };
    yn.set(t, f);
    const u = K1(t);
    window.addEventListener("resize", f, { passive: !0 }), t !== document.documentElement && G1.set(t, d7(t, f)), u.addEventListener("scroll", f, { passive: !0 });
  }
  const a = yn.get(t);
  return z.read(a, !1, !0), () => {
    var l;
    We(a);
    const c = Ss.get(t);
    if (!c || (c.delete(o), c.size))
      return;
    const d = yn.get(t);
    yn.delete(t), d && (K1(t).removeEventListener("scroll", d), (l = G1.get(t)) === null || l === void 0 || l(), window.removeEventListener("resize", d));
  };
}
function Y1(e, t) {
  Nt(!!(!t || t.current), `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`);
}
const M7 = () => ({
  scrollX: Ye(0),
  scrollY: Ye(0),
  scrollXProgress: Ye(0),
  scrollYProgress: Ye(0)
});
function qi({ container: e, target: t, layoutEffect: n = !0, ...r } = {}) {
  const s = Un(M7);
  return (n ? zn : B)(() => (Y1("target", t), Y1("container", e), S7(({ x: a, y: l }) => {
    s.scrollX.set(a.current), s.scrollXProgress.set(a.progress), s.scrollY.set(l.current), s.scrollYProgress.set(l.progress);
  }, {
    ...r,
    container: (e == null ? void 0 : e.current) || void 0,
    target: (t == null ? void 0 : t.current) || void 0
  })), [e, t, JSON.stringify(r.offset)]), s;
}
function L7() {
  !zi.current && vc();
  const [e] = N(Ar.current);
  return process.env.NODE_ENV !== "production" && Kn(e !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), e;
}
function T7(e) {
  return typeof e == "object" && !Array.isArray(e);
}
function V7(e) {
  const t = {
    presenceContext: null,
    props: {},
    visualState: {
      renderState: {
        transform: {},
        transformOrigin: {},
        style: {},
        vars: {},
        attrs: {}
      },
      latestValues: {}
    }
  }, n = dc(e) ? new wc(t, {
    enableHardwareAcceleration: !1
  }) : new xc(t, {
    enableHardwareAcceleration: !0
  });
  n.mount(e), Zn.set(e, n);
}
function P7(e, t = 100) {
  const n = Vi({ keyframes: [0, t], ...e }), r = Math.min(Gl(n), qs);
  return {
    type: "keyframes",
    ease: (s) => n.next(r * s).value / t,
    duration: Qe(r)
  };
}
function X1(e, t, n, r) {
  var s;
  return typeof t == "number" ? t : t.startsWith("-") || t.startsWith("+") ? Math.max(0, e + parseFloat(t)) : t === "<" ? n : (s = r.get(t)) !== null && s !== void 0 ? s : e;
}
const E7 = (e, t, n) => {
  const r = t - e;
  return ((n - e) % r + r) % r + e;
};
function R7(e, t) {
  return Ol(e) ? e[E7(0, e.length, t)] : e;
}
function H7(e, t, n) {
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    s.at > t && s.at < n && (Ur(e, s), r--);
  }
}
function A7(e, t, n, r, s, o) {
  H7(e, s, o);
  for (let a = 0; a < t.length; a++)
    e.push({
      value: t[a],
      at: se(s, o, r[a]),
      easing: R7(n, a)
    });
}
function k7(e, t) {
  return e.at === t.at ? e.value === null ? 1 : t.value === null ? -1 : 0 : e.at - t.at;
}
const Z7 = "easeInOut";
function B7(e, { defaultTransition: t = {}, ...n } = {}, r) {
  const s = t.duration || 0.3, o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map(), l = {}, c = /* @__PURE__ */ new Map();
  let d = 0, f = 0, u = 0;
  for (let h = 0; h < e.length; h++) {
    const p = e[h];
    if (typeof p == "string") {
      c.set(p, f);
      continue;
    } else if (!Array.isArray(p)) {
      c.set(p.name, X1(f, p.at, d, c));
      continue;
    }
    let [v, m, w = {}] = p;
    w.at !== void 0 && (f = X1(f, w.at, d, c));
    let x = 0;
    const y = (C, _, j, M = 0, L = 0) => {
      const b = D7(C), { delay: V = 0, times: E = Ai(b), type: Z = "keyframes", ...J } = _;
      let { ease: F = t.ease || "easeOut", duration: q } = _;
      const O = typeof V == "function" ? V(M, L) : V, Q = b.length;
      if (Q <= 2 && Z === "spring") {
        let je = 100;
        if (Q === 2 && $7(b)) {
          const Se = b[1] - b[0];
          je = Math.abs(Se);
        }
        const we = { ...J };
        q !== void 0 && (we.duration = Je(q));
        const Pe = P7(we, je);
        F = Pe.ease, q = Pe.duration;
      }
      q ?? (q = s);
      const Y = f + O, de = Y + q;
      E.length === 1 && E[0] === 0 && (E[1] = 1);
      const xe = E.length - b.length;
      xe > 0 && Ul(E, xe), b.length === 1 && b.unshift(null), A7(j, b, F, E, Y, de), x = Math.max(O + q, x), u = Math.max(de, u);
    };
    if (ve(v)) {
      const C = J1(v, a);
      y(m, w, Q1("default", C));
    } else {
      const C = Fi(v, r, l), _ = C.length;
      for (let j = 0; j < _; j++) {
        m = m, w = w;
        const M = C[j], L = J1(M, a);
        for (const b in m)
          y(m[b], N7(w, b), Q1(b, L), j, _);
      }
    }
    d = f, f += x;
  }
  return a.forEach((h, p) => {
    for (const v in h) {
      const m = h[v];
      m.sort(k7);
      const w = [], x = [], y = [];
      for (let _ = 0; _ < m.length; _++) {
        const { at: j, value: M, easing: L } = m[_];
        w.push(M), x.push(Zt(0, u, j)), y.push(L || "easeOut");
      }
      x[0] !== 0 && (x.unshift(0), w.unshift(w[0]), y.unshift(Z7)), x[x.length - 1] !== 1 && (x.push(1), w.push(null)), o.has(p) || o.set(p, {
        keyframes: {},
        transition: {}
      });
      const C = o.get(p);
      C.keyframes[v] = w, C.transition[v] = {
        ...t,
        duration: u,
        ease: y,
        times: x,
        ...n
      };
    }
  }), o;
}
function J1(e, t) {
  return !t.has(e) && t.set(e, {}), t.get(e);
}
function Q1(e, t) {
  return t[e] || (t[e] = []), t[e];
}
function D7(e) {
  return Array.isArray(e) ? e : [e];
}
function N7(e, t) {
  return e[t] ? {
    ...e,
    ...e[t]
  } : { ...e };
}
const O7 = (e) => typeof e == "number", $7 = (e) => e.every(O7);
function _c(e, t, n, r) {
  const s = Fi(e, r), o = s.length;
  qe(!!o, "No valid element provided.");
  const a = [];
  for (let l = 0; l < o; l++) {
    const c = s[l];
    Zn.has(c) || V7(c);
    const d = Zn.get(c), f = { ...n };
    typeof f.delay == "function" && (f.delay = f.delay(l, o)), a.push(...$i(d, { ...t, transition: f }, {}));
  }
  return new Bi(a);
}
const I7 = (e) => Array.isArray(e) && Array.isArray(e[0]);
function z7(e, t, n) {
  const r = [];
  return B7(e, t, n).forEach(({ keyframes: o, transition: a }, l) => {
    let c;
    ve(l) ? c = Ii(l, o.default, a.default) : c = _c(l, o, a), r.push(c);
  }), new Bi(r);
}
const F7 = (e) => {
  function t(n, r, s) {
    let o;
    return I7(n) ? o = z7(n, r, e) : T7(r) ? o = _c(n, r, s, e) : o = Ii(n, r, s), e && e.animations.push(o), o;
  }
  return t;
}, ea = F7(), q7 = typeof window < "u" ? Dt.useLayoutEffect : () => {
};
function Qs(...e) {
  return (...t) => {
    for (let n of e)
      typeof n == "function" && n(...t);
  };
}
let Cn = /* @__PURE__ */ new Map(), ta = /* @__PURE__ */ new Set();
function na() {
  if (typeof window > "u")
    return;
  let e = (n) => {
    let r = Cn.get(n.target);
    r || (r = /* @__PURE__ */ new Set(), Cn.set(n.target, r), n.target.addEventListener("transitioncancel", t)), r.add(n.propertyName);
  }, t = (n) => {
    let r = Cn.get(n.target);
    if (r && (r.delete(n.propertyName), r.size === 0 && (n.target.removeEventListener("transitioncancel", t), Cn.delete(n.target)), Cn.size === 0)) {
      for (let s of ta)
        s();
      ta.clear();
    }
  };
  document.body.addEventListener("transitionrun", e), document.body.addEventListener("transitionend", t);
}
typeof document < "u" && (document.readyState !== "loading" ? na() : document.addEventListener("DOMContentLoaded", na));
function jc(e) {
  for (ra(e) && (e = e.parentElement); e && !ra(e); )
    e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
function ra(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function Wi(e) {
  var t;
  return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1;
}
function W7() {
  return Wi(/^Mac/i);
}
function U7() {
  return Wi(/^iPhone/i);
}
function G7() {
  return Wi(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  W7() && navigator.maxTouchPoints > 1;
}
function K7() {
  return U7() || G7();
}
function Oe() {
  return Oe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, Oe.apply(this, arguments);
}
function cn(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), s, o;
  for (o = 0; o < r.length; o++)
    s = r[o], !(t.indexOf(s) >= 0) && (n[s] = e[s]);
  return n;
}
var sa = "calc(100% - env(safe-area-inset-top) - 34px)", Sc = typeof window > "u", Y7 = {
  ease: "easeOut",
  duration: 0.2
}, X7 = {
  ease: "linear",
  duration: 0.01
}, J7 = 0.6, Q7 = 500;
function ia(e, t) {
  for (var n = e[0], r = Math.abs(e[0] - t), s = 1; s < e.length; s++) {
    var o = Math.abs(e[s] - t);
    o < r && (n = e[s], r = o);
  }
  return n;
}
function e8(e) {
  var t = document.querySelector("body"), n = document.querySelector("#" + e);
  if (n) {
    var r = 24, s = window.innerHeight, o = (s - r) / s;
    t.style.backgroundColor = "#000", n.style.overflow = "hidden", n.style.willChange = "transform", n.style.transition = "transform 200ms ease-in-out, border-radius 200ms linear", n.style.transform = "translateY(calc(env(safe-area-inset-top) + " + r / 2 + "px)) scale(" + o + ")", n.style.borderTopRightRadius = "10px", n.style.borderTopLeftRadius = "10px";
  }
}
function oa(e) {
  var t = document.querySelector("body"), n = document.getElementById(e);
  function r() {
    n.style.removeProperty("overflow"), n.style.removeProperty("will-change"), n.style.removeProperty("transition"), t.style.removeProperty("background-color"), n.removeEventListener("transitionend", r);
  }
  n && (n.style.removeProperty("border-top-right-radius"), n.style.removeProperty("border-top-left-radius"), n.style.removeProperty("transform"), n.addEventListener("transitionend", r));
}
function t8(e) {
  for (var t = 0; t < e.length; t++)
    if (e[t + 1] > e[t])
      return !1;
  return !0;
}
function aa(e) {
  var t = e.snapTo, n = e.sheetHeight;
  return t < 0 && console.warn("Snap point is out of bounds. Sheet height is " + n + " but snap point is " + (n + Math.abs(t)) + "."), Math.max(Math.round(t), 0);
}
function Ui(e) {
  return function(t) {
    e.forEach(function(n) {
      typeof n == "function" ? n(t) : n && (n.current = t);
    });
  };
}
function n8() {
  return typeof window > "u" ? !1 : "ontouchstart" in window || navigator.maxTouchPoints > 0;
}
var Gi = Sc ? B : ni;
function r8(e, t) {
  var n = Mc(e);
  B(function() {
    t && !n && e ? e8(t) : t && !e && n && oa(t);
  }, [e, n]), B(function() {
    return function() {
      t && e && oa(t);
    };
  }, [e]);
}
function s8(e, t) {
  var n = Mc(e), r = k(!1), s = be(function() {
    r.current ? (t.current.onCloseEnd == null || t.current.onCloseEnd(), r.current = !1) : (t.current.onOpenEnd == null || t.current.onOpenEnd(), r.current = !0);
  }, [e, n]);
  return B(function() {
    !n && e ? t.current.onOpenStart == null || t.current.onOpenStart() : !e && n && (t.current.onCloseStart == null || t.current.onCloseStart());
  }, [e, n]), {
    handleAnimationComplete: s
  };
}
function i8() {
  var e = N(0), t = e[0], n = e[1];
  return Gi(function() {
    var r = function() {
      return n(window.innerHeight);
    };
    return window.addEventListener("resize", r), r(), function() {
      return window.removeEventListener("resize", r);
    };
  }, []), t;
}
function Mc(e) {
  var t = k();
  return B(function() {
    t.current = e;
  }), t.current;
}
function la(e) {
  var t = k();
  return Gi(function() {
    t.current = e;
  }), be(function() {
    for (var n = t.current, r = arguments.length, s = new Array(r), o = 0; o < r; o++)
      s[o] = arguments[o];
    return n == null ? void 0 : n.apply(void 0, s);
  }, []);
}
var o8 = {
  bottom: 0,
  top: 0,
  left: 0,
  right: 0
};
function Lc() {
  var e = k(null), t = be(function() {
    return o8;
  }, []);
  return {
    constraintsRef: e,
    onMeasureDragConstraints: t
  };
}
var Tc = /* @__PURE__ */ Ie(void 0), Gr = function() {
  var t = ue(Tc);
  if (!t)
    throw Error("Sheet context error");
  return t;
}, Vc = /* @__PURE__ */ Ie(void 0);
function a8(e) {
  var t = e.children, n = Gr(), r = N(!!n.disableDrag), s = r[0], o = r[1];
  function a() {
    n.disableDrag || o(!1);
  }
  function l() {
    s || o(!0);
  }
  return G(Vc.Provider, {
    value: {
      disableDrag: s,
      setDragEnabled: a,
      setDragDisabled: l
    }
  }, t);
}
var Pc = function() {
  var t = ue(Vc);
  if (!t)
    throw Error("Sheet scroller context error");
  return t;
}, Ms = typeof window < "u" && window.visualViewport, l8 = /* @__PURE__ */ new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]), fr = 0, Ls;
function c8(e) {
  e === void 0 && (e = {});
  var t = e, n = t.isDisabled;
  q7(function() {
    if (!n)
      return fr++, fr === 1 && (K7() ? Ls = d8() : Ls = u8()), function() {
        fr--, fr === 0 && Ls();
      };
  }, [n]);
}
function u8() {
  return Qs(En(document.documentElement, "paddingRight", window.innerWidth - document.documentElement.clientWidth + "px"), En(document.documentElement, "overflow", "hidden"));
}
function d8() {
  var e, t = 0, n = function(h) {
    e = jc(h.target), !(e === document.documentElement && e === document.body) && (t = h.changedTouches[0].pageY);
  }, r = function(h) {
    if (e === document.documentElement || e === document.body) {
      h.preventDefault();
      return;
    }
    var p = h.changedTouches[0].pageY, v = e.scrollTop, m = e.scrollHeight - e.clientHeight;
    m !== 0 && ((v <= 0 && p > t || v >= m && p < t) && h.preventDefault(), t = p);
  }, s = function(h) {
    var p = h.target;
    ua(p) && p !== document.activeElement && (h.preventDefault(), p.style.transform = "translateY(-2000px)", p.focus(), requestAnimationFrame(function() {
      p.style.transform = "";
    }));
  }, o = function(h) {
    var p = h.target;
    ua(p) && (p.style.transform = "translateY(-2000px)", requestAnimationFrame(function() {
      p.style.transform = "", Ms && (Ms.height < window.innerHeight ? requestAnimationFrame(function() {
        ca(p);
      }) : Ms.addEventListener("resize", function() {
        return ca(p);
      }, {
        once: !0
      }));
    }));
  }, a = function() {
    window.scrollTo(0, 0);
  }, l = window.pageXOffset, c = window.pageYOffset, d = Qs(En(document.documentElement, "paddingRight", window.innerWidth - document.documentElement.clientWidth + "px"), En(document.documentElement, "overflow", "hidden"), En(document.body, "marginTop", "-" + c + "px"));
  window.scrollTo(0, 0);
  var f = Qs(bn(document, "touchstart", n, {
    passive: !1,
    capture: !0
  }), bn(document, "touchmove", r, {
    passive: !1,
    capture: !0
  }), bn(document, "touchend", s, {
    passive: !1,
    capture: !0
  }), bn(document, "focus", o, !0), bn(window, "scroll", a));
  return function() {
    d(), f(), window.scrollTo(l, c);
  };
}
function En(e, t, n) {
  var r = e.style[t];
  return e.style[t] = n, function() {
    e.style[t] = r;
  };
}
function bn(e, t, n, r) {
  return e.addEventListener(t, n, r), function() {
    e.removeEventListener(t, n, r);
  };
}
function ca(e) {
  for (var t = document.scrollingElement || document.documentElement; e && e !== t; ) {
    var n = jc(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      var r = n.getBoundingClientRect().top, s = e.getBoundingClientRect().top;
      s > r + e.clientHeight && (n.scrollTop += s - r);
    }
    e = n.parentElement;
  }
}
function ua(e) {
  return e instanceof HTMLInputElement && !l8.has(e.type) || e instanceof HTMLTextAreaElement || e instanceof HTMLElement && e.isContentEditable;
}
var ut = {
  wrapper: {
    position: "fixed",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
    pointerEvents: "none"
  },
  backdrop: {
    zIndex: 1,
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    touchAction: "none",
    border: "none"
  },
  container: {
    zIndex: 2,
    position: "absolute",
    left: 0,
    bottom: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTopRightRadius: "8px",
    borderTopLeftRadius: "8px",
    boxShadow: "0px -2px 16px rgba(0, 0, 0, 0.3)",
    display: "flex",
    flexDirection: "column",
    pointerEvents: "auto"
  },
  headerWrapper: {
    width: "100%"
  },
  header: {
    height: "40px",
    width: "100%",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  indicator: {
    width: "18px",
    height: "4px",
    borderRadius: "99px",
    backgroundColor: "#ddd"
  },
  content: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    minHeight: "0px",
    position: "relative"
  },
  scroller: {
    height: "100%",
    overflowY: "auto"
  }
}, f8 = ["onOpenStart", "onOpenEnd", "onClose", "onCloseStart", "onCloseEnd", "onSnap", "children", "disableScrollLocking", "isOpen", "snapPoints", "rootId", "mountPoint", "style", "detent", "initialSnap", "disableDrag", "prefersReducedMotion", "tweenConfig"], h8 = /* @__PURE__ */ ge(function(e, t) {
  var n = e.onOpenStart, r = e.onOpenEnd, s = e.onClose, o = e.onCloseStart, a = e.onCloseEnd, l = e.onSnap, c = e.children, d = e.disableScrollLocking, f = d === void 0 ? !1 : d, u = e.isOpen, h = e.snapPoints, p = e.rootId, v = e.mountPoint, m = e.style, w = e.detent, x = w === void 0 ? "full-height" : w, y = e.initialSnap, C = y === void 0 ? 0 : y, _ = e.disableDrag, j = _ === void 0 ? !1 : _, M = e.prefersReducedMotion, L = M === void 0 ? !1 : M, b = e.tweenConfig, V = b === void 0 ? Y7 : b, E = cn(e, f8), Z = k(null), J = Xs(0), F = i8(), q = L7(), O = !!(L || q), Q = Oe({
    type: "tween"
  }, O ? X7 : V), Y = Xs(0), de = rn(Y, function($) {
    return $ >= F ? -1 : 9999999;
  }), xe = rn(Y, function($) {
    return $ >= F ? "hidden" : "visible";
  }), je = k({
    onOpenStart: n,
    onOpenEnd: r,
    onCloseStart: o,
    onCloseEnd: a
  });
  Gi(function() {
    je.current = {
      onOpenStart: n,
      onOpenEnd: r,
      onCloseStart: o,
      onCloseEnd: a
    };
  }), h && (h = h.map(function($) {
    return $ > 0 && $ <= 1 ? Math.round($ * F) : $ < 0 ? F + $ : $;
  }), console.assert(t8(h) || F === 0, "Snap points need to be in descending order got: [" + h + "]"));
  var we = la(function($, re) {
    var ee = re.delta, pe = Y.getVelocity();
    pe > 0 && J.set(10), pe < 0 && J.set(-10), Y.set(Math.max(Y.get() + ee.y, 0));
  }), Pe = la(function($, re) {
    var ee = re.velocity;
    if (ee.y > Q7)
      s();
    else {
      var pe = Z.current, ne = pe.getBoundingClientRect().height, X = Y.get(), P = 0;
      if (h) {
        var W = h.map(function(Le) {
          return ne - Math.min(Le, ne);
        });
        x === "content-height" && !W.includes(0) && W.unshift(0), P = ia(W, X);
      } else
        X / ne > J7 && (P = ne);
      if (P = aa({
        snapTo: P,
        sheetHeight: ne
      }), ea(Y, P, Q), h && l) {
        var oe = Math.abs(Math.round(h[0] - P)), ae = h.indexOf(ia(h, oe));
        l(ae);
      }
      var ye = Math.round(ne), Me = P >= ye;
      Me && s();
    }
    J.set(0);
  });
  B(function() {
    if (!(!h || !l)) {
      var $ = u ? C : h.length - 1;
      l($);
    }
  }, [u]), Wc(t, function() {
    return {
      y: Y,
      snapTo: function(re) {
        var ee = Z.current;
        if (h && h[re] !== void 0 && ee !== null) {
          var pe = ee.getBoundingClientRect().height, ne = h[re], X = aa({
            snapTo: pe - ne,
            sheetHeight: pe
          });
          ea(Y, X, Q), l && l(re), X >= pe && s();
        }
      }
    };
  }), r8(u, p), c8({
    isDisabled: f === !0 || !u
  });
  var Se = ze(function() {
    var $ = {
      drag: "y",
      dragElastic: 0,
      dragMomentum: !1,
      dragPropagation: !1,
      onDrag: we,
      onDragEnd: Pe
    };
    return j ? void 0 : $;
  }, [j]), rt = {
    y: Y,
    sheetRef: Z,
    isOpen: u,
    initialSnap: C,
    snapPoints: h,
    detent: x,
    indicatorRotation: J,
    callbacks: je,
    dragProps: Se,
    windowHeight: F,
    animationOptions: Q,
    reduceMotion: O,
    disableDrag: j
  }, Ue = G(Tc.Provider, {
    value: rt
  }, G(et.div, Object.assign({}, E, {
    ref: t,
    style: Oe({}, ut.wrapper, {
      zIndex: de,
      visibility: xe
    }, m)
  }), G(Qd, null, u ? G(a8, null, Ne.map(c, function($, re) {
    return ht($, {
      key: "sheet-child-" + re
    });
  })) : null)));
  return Sc ? Ue : Uc(Ue, v ?? document.body);
}), p8 = ["children", "style", "className"], m8 = /* @__PURE__ */ ge(function(e, t) {
  var n = e.children, r = e.style, s = r === void 0 ? {} : r, o = e.className, a = o === void 0 ? "" : o, l = cn(e, p8), c = Gr(), d = c.y, f = c.isOpen, u = c.callbacks, h = c.snapPoints, p = c.initialSnap, v = p === void 0 ? 0 : p, m = c.sheetRef, w = c.windowHeight, x = c.detent, y = c.animationOptions, C = c.reduceMotion, _ = s8(f, u), j = _.handleAnimationComplete, M = h ? h[0] - h[v] : 0, L = h ? h[0] : null, b = L !== null ? "min(" + L + "px, " + sa + ")" : sa;
  return G(et.div, Object.assign({}, l, {
    ref: Ui([m, t]),
    className: "react-modal-sheet-container " + a,
    style: Oe({}, ut.container, s, x === "full-height" && {
      height: b
    }, x === "content-height" && {
      maxHeight: b
    }, {
      y: d
    }),
    initial: C ? !1 : {
      y: w
    },
    animate: {
      y: M,
      transition: y
    },
    exit: {
      y: w,
      transition: y
    },
    onAnimationComplete: j
  }), n);
}), v8 = ["children", "style", "disableDrag", "className"], g8 = /* @__PURE__ */ ge(function(e, t) {
  var n = e.children, r = e.style, s = e.disableDrag, o = e.className, a = o === void 0 ? "" : o, l = cn(e, v8), c = Gr(), d = Pc(), f = Lc(), u = f.constraintsRef, h = f.onMeasureDragConstraints, p = s || d.disableDrag ? void 0 : c.dragProps;
  return G(et.div, Object.assign({}, l, {
    ref: Ui([t, u]),
    className: "react-modal-sheet-content " + a,
    style: Oe({}, ut.content, r)
  }, p, {
    dragConstraints: u,
    onMeasureDragConstraints: h
  }), n);
}), x8 = ["children", "style", "disableDrag"], w8 = /* @__PURE__ */ ge(function(e, t) {
  var n = e.children, r = e.style, s = e.disableDrag, o = cn(e, x8), a = Gr(), l = a.indicatorRotation, c = a.dragProps, d = Lc(), f = d.constraintsRef, u = d.onMeasureDragConstraints, h = s ? void 0 : c, p = rn(l, function(m) {
    return "translateX(2px) rotate(" + m + "deg)";
  }), v = rn(l, function(m) {
    return "translateX(-2px) rotate(" + -1 * m + "deg)";
  });
  return G(et.div, Object.assign({}, o, {
    ref: Ui([t, f]),
    style: Oe({}, ut.headerWrapper, r)
  }, h, {
    dragConstraints: f,
    onMeasureDragConstraints: u
  }), n || G("div", {
    className: "react-modal-sheet-header",
    style: ut.header
  }, G(et.span, {
    className: "react-modal-sheet-drag-indicator",
    style: Oe({}, ut.indicator, {
      transform: p
    })
  }), G(et.span, {
    className: "react-modal-sheet-drag-indicator",
    style: Oe({}, ut.indicator, {
      transform: v
    })
  })));
}), y8 = ["style", "className"], da = function(t) {
  return !!t.onClick || !!t.onTap;
}, C8 = /* @__PURE__ */ ge(function(e, t) {
  var n = e.style, r = n === void 0 ? {} : n, s = e.className, o = s === void 0 ? "" : s, a = cn(e, y8), l = da(a) ? et.button : et.div, c = da(a) ? "auto" : "none";
  return G(l, Object.assign({}, a, {
    ref: t,
    className: "react-modal-sheet-backdrop " + o,
    style: Oe({}, ut.backdrop, r, {
      pointerEvents: c
    }),
    initial: {
      opacity: 0
    },
    animate: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
  }));
}), b8 = ["draggableAt", "children", "style", "className"], _8 = /* @__PURE__ */ ge(function(e, t) {
  var n = e.draggableAt, r = n === void 0 ? "top" : n, s = e.children, o = e.style, a = e.className, l = a === void 0 ? "" : a, c = cn(e, b8), d = Pc();
  function f(v) {
    var m = v.scrollTop, w = v.scrollHeight, x = v.clientHeight, y = w > x;
    if (y) {
      var C = m <= 0, _ = w - m === x, j = r === "top" && C || r === "bottom" && _ || r === "both" && (C || _);
      j ? d.setDragEnabled() : d.setDragDisabled();
    }
  }
  function u(v) {
    f(v.currentTarget);
  }
  function h(v) {
    f(v.currentTarget);
  }
  var p = n8() ? {
    onScroll: u,
    onTouchStart: h
  } : void 0;
  return G("div", Object.assign({}, c, {
    ref: t,
    className: "react-modal-sheet-scroller " + l,
    style: Oe({}, ut.scroller, o)
  }, p), s);
}), he = h8;
he.Container = m8;
he.Header = w8;
he.Content = g8;
he.Backdrop = C8;
he.Scroller = _8;
const fa = (e) => /* @__PURE__ */ i.jsxs("svg", { viewBox: "0 0 48 48", focusable: "false", ...e, children: [
  /* @__PURE__ */ i.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M19.876 4.5H43.5v9.34a5.172 5.172 0 01-5.17 5.178h-4.416l-5.166 4.138-1.425-4.134h-1.727v-2.446h3.468l.863 2.503 3.13-2.507h5.273a2.728 2.728 0 002.727-2.732V6.946H22.32v4.4h-2.443V4.5z"
    }
  ),
  /* @__PURE__ */ i.jsx(
    "path",
    {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M16.99 14.656c-3.725 0-6.746 2.992-6.746 6.682 0 3.69 3.02 6.682 6.746 6.682 3.725 0 6.745-2.993 6.745-6.682 0-3.69-3.02-6.682-6.745-6.682zm0 2.446c2.373 0 4.303 1.9 4.303 4.236s-1.93 4.236-4.303 4.236c-2.374 0-4.303-1.9-4.303-4.236s1.93-4.236 4.303-4.236zM9.28 29.471a4.786 4.786 0 00-4.78 4.787V43.5h24.98v-9.242a4.786 4.786 0 00-4.78-4.787H9.28zm-2.337 4.787c0-1.29 1.049-2.34 2.336-2.34H24.7a2.342 2.342 0 012.337 2.34v6.796H6.943v-6.796z",
      clipRule: "evenodd"
    }
  )
] });
var j8 = { "no-advisor": "mzs9pj4", "one-advisor": "mzs9pj5", "two-advisors": "mzs9pj6" }, S8 = "mzs9pj1", M8 = "mzs9pj8", L8 = "mzs9pj7", T8 = { false: "mzs9pj2 mzs9pj0", true: "mzs9pj3 mzs9pj0" };
var V8 = "afdy2r1", P8 = "afdy2r0", E8 = "afdy2r2";
var R8 = { icon: "_1vjhm7c1 _1vjhm7c0", advisor: "_1vjhm7c2 _1vjhm7c0" }, H8 = "_1vjhm7c4", A8 = "_1vjhm7c3";
const k8 = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "m12 15.7-7.65-8-1.3 1.24L12 18.3l8.95-9.36-1.3-1.24-7.65 8Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
);
var Z8 = "whu6990", B8 = "whu6992", D8 = "whu6991";
const Ki = () => /* @__PURE__ */ i.jsx("div", { className: Z8, children: /* @__PURE__ */ i.jsx("div", { className: D8 }) }), Sp = ({
  children: e,
  isActive: t,
  setIsActive: n
}) => (B(() => {
  const r = (s) => {
    if (s.key === "Escape")
      return n(!1);
  };
  window.addEventListener("keydown", r);
}, []), /* @__PURE__ */ i.jsxs(
  he,
  {
    isOpen: t,
    onClose: () => n(!1),
    detent: "content-height",
    children: [
      /* @__PURE__ */ i.jsxs(he.Container, { children: [
        /* @__PURE__ */ i.jsx(he.Header, { children: /* @__PURE__ */ i.jsx(Ki, {}) }),
        /* @__PURE__ */ i.jsx(he.Content, { children: /* @__PURE__ */ i.jsx(Mr, { children: /* @__PURE__ */ i.jsx("div", { className: B8, children: e }) }) })
      ] }),
      /* @__PURE__ */ i.jsx(he.Backdrop, { onTap: () => n(!1) })
    ]
  }
)), N8 = ({
  buttonLabel: e,
  buttonAvatars: t,
  ...n
}) => {
  const r = T8.false, s = j8["no-advisor"];
  return tt()[0] < Number(nt.l.replace("px", "")) ? /* @__PURE__ */ i.jsx(Es, { ...n, label: e, children: /* @__PURE__ */ i.jsx(fa, {}) }) : /* @__PURE__ */ i.jsxs(
    "button",
    {
      ...n,
      className: A(r, s),
      children: [
        !t && /* @__PURE__ */ i.jsx(fa, { className: L8 }),
        t && /* @__PURE__ */ i.jsx("div", { className: M8, children: t }),
        e,
        /* @__PURE__ */ i.jsx("div", { className: S8, children: /* @__PURE__ */ i.jsx(k8, {}) })
      ]
    }
  );
}, Mp = ({
  type: e = "icon",
  icon: t,
  avatar: n,
  labels: r,
  ...s
}) => {
  const o = R8[e];
  return /* @__PURE__ */ i.jsxs("a", { className: o, ...s, children: [
    /* @__PURE__ */ i.jsxs("div", { className: H8, children: [
      t,
      n
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: A8, children: r })
  ] });
};
let ha = 0;
const O8 = ({
  children: e,
  isActive: t,
  setIsActive: n,
  setIsClosing: r
}) => {
  const o = tt()[0] < Number(nt.l.replace("px", ""));
  return B(() => {
    const a = (l) => {
      if (l.key === "Escape")
        return n(!1);
    };
    window.addEventListener("keydown", a);
  }, []), o ? /* @__PURE__ */ i.jsxs(
    he,
    {
      isOpen: t,
      onClose: () => n(!1),
      detent: "content-height",
      children: [
        /* @__PURE__ */ i.jsxs(he.Container, { children: [
          /* @__PURE__ */ i.jsx(he.Header, { children: /* @__PURE__ */ i.jsx(Ki, {}) }),
          /* @__PURE__ */ i.jsx(he.Content, { children: /* @__PURE__ */ i.jsx(Mr, { children: e }) })
        ] }),
        /* @__PURE__ */ i.jsx(he.Backdrop, { onTap: () => n(!1) })
      ]
    }
  ) : /* @__PURE__ */ i.jsx(
    $n,
    {
      open: t,
      modal: !1,
      onOpenChange: (a) => {
        a || (r(!0), clearTimeout(ha), ha = window.setTimeout(() => {
          r(!1);
        }, 200)), n(a);
      },
      children: /* @__PURE__ */ i.jsx(
        In,
        {
          className: A(V8, Dr.two),
          forceMount: !0,
          children: e
        }
      )
    }
  );
}, Lp = ({
  buttonLabel: e,
  children: t,
  buttonAvatars: n
}) => {
  const [r, s] = N(!1), [o, a] = N(!1);
  return /* @__PURE__ */ i.jsxs("div", { className: P8, children: [
    /* @__PURE__ */ i.jsx(
      N8,
      {
        buttonLabel: e,
        buttonAvatars: n,
        onClick: () => {
          o || s(!r);
        }
      }
    ),
    /* @__PURE__ */ i.jsx(
      O8,
      {
        isActive: r,
        setIsActive: s,
        setIsClosing: a,
        children: t
      }
    )
  ] });
}, Tp = () => /* @__PURE__ */ i.jsx("hr", { className: E8 }), Vp = (e) => /* @__PURE__ */ i.jsx("svg", { viewBox: "0 0 48 48", focusable: "false", ...e, children: /* @__PURE__ */ i.jsx("g", { children: /* @__PURE__ */ i.jsx(
  "path",
  {
    fill: "currentColor",
    d: "M35.9 37.84c.38.92-.08 1.96-1 2.34h-.08c-.92.4-1.98-.04-2.34-.96-.38-.92.08-1.96 1-2.34h.08c.92-.4 1.98.04 2.34.96zM6 30v10.1h21.84v-3.58H9.58v-6.54c0-1.22.98-2.2 2.18-2.2h16.08V24.2H11.76C8.58 24.2 6 26.78 6 29.98V30zm28.64-14.06c-2.5 0-4.7 1.24-6.04 3.14l2.94 2.04c.68-.98 1.82-1.62 3.1-1.62 2.08 0 3.78 1.7 3.78 3.8 0 2.1-1.52 3.62-3.46 3.78h-2.78v7.52h3.58v-4C39.3 30.06 42 27 42 23.32c0-4.06-3.3-7.38-7.36-7.38zm-23.42-2.06c0-4.28 3.46-7.76 7.76-7.76s7.76 3.48 7.76 7.76c0 4.28-3.46 7.76-7.76 7.76s-7.76-3.48-7.76-7.76zm3.58 0c0 2.32 1.88 4.18 4.18 4.18s4.18-1.86 4.18-4.18c0-2.32-1.88-4.18-4.18-4.18s-4.18 1.86-4.18 4.18z"
  }
) }) });
var $8 = { small: "_1l5ogmz9", medium: "_1l5ogmza", large: "_1l5ogmzb" }, I8 = { small: "_1l5ogmz6", medium: "_1l5ogmz7", large: "_1l5ogmz8" }, z8 = { small: "_1l5ogmz0", medium: "_1l5ogmz1", large: "_1l5ogmz2" }, F8 = { small: "_1l5ogmz3", medium: "_1l5ogmz4", large: "_1l5ogmz5" }, q8 = { small: "_1l5ogmzg", medium: "_1l5ogmzh", large: "_1l5ogmzi" }, W8 = { small: "_1l5ogmzd _1l5ogmzc", medium: "_1l5ogmze _1l5ogmzc", large: "_1l5ogmzf _1l5ogmzc" }, U8 = { small: "_1l5ogmzk _1l5ogmzj", medium: "_1l5ogmzl _1l5ogmzj", large: "_1l5ogmzm _1l5ogmzj" };
const Pp = ({
  className: e = "",
  size: t = "small",
  showVorwerkLogo: n = !0
}) => {
  const r = z8[t];
  return /* @__PURE__ */ i.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "150",
      height: "72",
      fill: "none",
      viewBox: "0 0 150 72",
      focusable: "false",
      className: A(r, e),
      children: [
        /* @__PURE__ */ i.jsxs("g", { fill: "#00AC46", clipPath: "url(#clip0_1707_1608)", children: [
          /* @__PURE__ */ i.jsx(
            "path",
            {
              d: "M36.8493 31.5104C34.3926 33.9447 31.4 35.1507 27.8714 35.1507C24.3428 35.1507 21.3502 33.9447 18.9383 31.5104C16.504 29.0761 15.298 26.1058 15.298 22.5772C15.298 19.0486 16.504 16.056 18.9383 13.6441C21.3726 11.2098 24.3428 10.0038 27.8714 10.0038C31.4 10.0038 34.3926 11.2098 36.8493 13.6441C39.3059 16.0784 40.5119 19.0486 40.5119 22.5772C40.5119 26.1058 39.2836 29.0985 36.8493 31.5104ZM23.2709 27.2895C24.4992 28.5401 26.0178 29.1431 27.8714 29.1431C29.7251 29.1431 31.266 28.5178 32.4944 27.2895C33.7227 26.0612 34.348 24.4755 34.348 22.5772C34.348 20.6789 33.7227 19.0933 32.4944 17.865C31.266 16.6367 29.7027 16.0114 27.8714 16.0114C26.0401 16.0114 24.4992 16.6367 23.2709 17.865C22.0425 19.1156 21.4396 20.6789 21.4396 22.5772C21.4396 24.4755 22.0425 26.0612 23.2709 27.2895Z",
              fill: "#00AC46"
            }
          ),
          /* @__PURE__ */ i.jsx(
            "path",
            {
              d: "M44.7329 34.4807V1.09296H50.8968V34.4807H44.7329Z",
              fill: "#00AC46"
            }
          ),
          /* @__PURE__ */ i.jsx(
            "path",
            {
              d: "M56.1226 34.4807V1.09296H62.2865V34.4807H56.1226Z",
              fill: "#00AC46"
            }
          ),
          /* @__PURE__ */ i.jsx(
            "path",
            {
              d: "M72.9394 25.0785C73.7657 28.0711 75.999 29.5674 79.6616 29.5674C82.0065 29.5674 83.7932 28.7635 84.9991 27.1778L89.9571 30.0364C87.6121 33.431 84.1282 35.1507 79.5499 35.1507C75.597 35.1507 72.448 33.967 70.0584 31.5774C67.6688 29.1878 66.4852 26.1952 66.4852 22.5549C66.4852 18.9146 67.6688 15.9667 70.0138 13.5547C72.3587 11.1428 75.396 9.95914 79.0809 9.95914C82.5872 9.95914 85.4681 11.1651 87.7461 13.5771C90.024 15.989 91.163 18.9816 91.163 22.5549C91.163 23.3589 91.0737 24.1852 90.9174 25.0785H72.9394ZM72.85 20.2993H85.0215C84.6641 18.669 83.9495 17.463 82.8552 16.6813C81.7609 15.8774 80.5102 15.4977 79.1032 15.4977C77.4506 15.4977 76.0883 15.922 74.994 16.7707C73.922 17.6193 73.2074 18.803 72.85 20.3216V20.2993Z",
              fill: "#00AC46"
            }
          ),
          /* @__PURE__ */ i.jsx(
            "path",
            {
              d: "M114.322 16.5473H101.168V26.4632C101.168 27.2895 101.369 27.8925 101.794 28.2721C102.218 28.6518 102.821 28.8751 103.603 28.9198C104.384 28.9645 105.389 28.9644 106.55 28.8975V34.4807C102.33 34.9497 99.337 34.57 97.6173 33.297C95.8754 32.0241 95.0267 29.7461 95.0267 26.4855V5.82754L101.191 3.97391V10.6515H114.345V16.5697L114.322 16.5473Z",
              fill: "#00AC46"
            }
          ),
          /* @__PURE__ */ i.jsx(
            "path",
            {
              d: "M123.211 16.5473H116.399V26.4632C116.399 27.2895 116.6 27.8925 117.025 28.2721C117.449 28.6518 118.052 28.8751 118.833 28.9198C119.615 28.9645 120.62 28.9644 121.781 28.8975V34.4807C117.56 34.9497 114.568 34.57 112.848 33.297C111.106 32.0241 110.258 29.7461 110.258 26.4855V5.82754L116.422 3.97391V10.6515H123.233V16.5697L123.211 16.5473Z",
              fill: "#00AC46"
            }
          ),
          /* @__PURE__ */ i.jsx(
            "path",
            {
              d: "M145.745 31.5104C143.288 33.9447 140.295 35.1507 136.767 35.1507C133.238 35.1507 130.246 33.9447 127.834 31.5104C125.422 29.0761 124.193 26.1058 124.193 22.5772C124.193 19.0486 125.399 16.056 127.834 13.6441C130.268 11.2321 133.238 10.0038 136.767 10.0038C140.295 10.0038 143.288 11.2098 145.745 13.6441C148.201 16.0784 149.407 19.0486 149.407 22.5772C149.407 26.1058 148.179 29.0985 145.745 31.5104ZM132.166 27.2895C133.395 28.5401 134.913 29.1431 136.767 29.1431C138.62 29.1431 140.161 28.5178 141.39 27.2895C142.64 26.0388 143.243 24.4755 143.243 22.5772C143.243 20.6789 142.618 19.0933 141.39 17.865C140.161 16.6367 138.598 16.0114 136.767 16.0114C134.935 16.0114 133.395 16.6367 132.166 17.865C130.938 19.1156 130.335 20.6789 130.335 22.5772C130.335 24.4755 130.938 26.0612 132.166 27.2895Z",
              fill: "#00AC46"
            }
          ),
          /* @__PURE__ */ i.jsx(
            "path",
            {
              d: "M6.14156 9.71347V11.2991H12.9308V17.195H6.14156V34.503H6.97613e-06V9.71347C6.97613e-06 9.71347 -0.0669918 -1.20732 12.9308 0.110318V5.93921C12.9308 5.93921 6.45422 4.5099 6.14156 9.71347Z",
              fill: "#00AC46"
            }
          ),
          n && /* @__PURE__ */ i.jsx(
            "path",
            {
              d: "M56.6698 66.2158H55.3968C57.6301 69.6997 61.516 72 65.9603 72C69.8462 72 73.3301 70.2357 75.6081 67.4664C77.9084 70.2357 81.3923 72 85.2782 72C89.7225 72 93.6308 69.6997 95.8417 66.2158H94.5687C92.4694 69.0967 89.0972 70.9503 85.2559 70.9503C81.2136 70.9503 77.6404 68.8511 75.5858 65.6798C73.5311 68.8511 69.9802 70.9503 65.9379 70.9503C62.119 70.9503 58.7244 69.0744 56.6251 66.2158M85.2112 61.8162V59.2256H89.3428V57.6846H85.2112V55.4066H89.8342V53.8657H83.1566V63.3572H90.0575V61.8162H85.2112ZM76.9927 63.3572H79.025L81.6826 53.8657H79.8513L78.1317 60.4539L76.6354 53.8657H74.7148L73.0845 60.4762L71.5658 53.8657H69.2879L71.9232 63.3572H73.9331L75.4294 57.2826L76.9704 63.3572H76.9927ZM68.7072 63.3572L66.2506 59.7392C66.8982 59.4936 68.2829 58.6002 68.2829 56.9923C68.2829 54.96 66.7196 53.8657 65.0446 53.8657H60.645V63.3572H62.6997V55.3173H64.4416C65.3573 55.3173 66.1836 55.9203 66.1836 57.0369C66.1836 58.1536 65.2009 58.7789 64.0843 58.7789C63.8833 58.7789 63.6823 58.7789 63.526 58.7566L66.1166 63.3348H68.6849L68.7072 63.3572ZM45.1907 63.3572L48.6746 53.8657H46.754L44.3197 60.8335L41.9524 53.8657H39.6074L43.1584 63.3572H45.1683H45.1907ZM56.8484 58.6002C56.8484 60.5432 55.6201 62.1065 54.0345 62.1065C52.4488 62.1065 51.2205 60.5432 51.2205 58.6002C51.2205 56.6573 52.4488 55.094 54.0345 55.094C55.6201 55.094 56.8484 56.6573 56.8484 58.6002ZM54.0345 53.5753C51.2875 53.5753 49.0766 55.831 49.0766 58.6002C49.0766 61.3695 51.3099 63.6251 54.0345 63.6251C56.7591 63.6251 59.0147 61.3695 59.0147 58.6002C59.0147 55.831 56.7814 53.5753 54.0345 53.5753ZM94.5017 50.9624H95.7747C93.5414 47.5008 89.6555 45.2005 85.2336 45.2005C81.3477 45.2005 77.8637 46.9648 75.5634 49.7564C73.2631 46.9871 69.8015 45.2005 65.8933 45.2005C61.4713 45.2005 57.5854 47.5008 55.3521 50.9624H56.6251C58.7244 48.1038 62.0967 46.2501 65.8933 46.2501C69.9355 46.2501 73.5088 48.3494 75.5634 51.5207C77.618 48.3494 81.169 46.2501 85.2336 46.2501C89.0525 46.2501 92.4248 48.1038 94.5017 50.9624ZM99.9063 63.3572L97.4497 59.7392C98.0973 59.4936 99.482 58.6002 99.482 56.9923C99.482 54.96 97.9187 53.8657 96.2437 53.8657H91.8441V63.3572H93.8764V55.3173H95.6184C96.534 55.3173 97.3604 55.9203 97.3604 57.0369C97.3604 58.1536 96.3777 58.7789 95.2611 58.7789C95.0601 58.7789 94.8591 58.7789 94.7027 58.7566L97.2934 63.3348H99.8616L99.9063 63.3572ZM101.291 63.3572H103.323V53.8657H101.291V63.3572ZM109.8 63.3572L105.825 58.0866L109.353 53.8657H106.897L103.591 58.1982L107.075 63.3572H109.8Z",
              fill: "#00AC46"
            }
          )
        ] }),
        /* @__PURE__ */ i.jsx("defs", { children: /* @__PURE__ */ i.jsx("clipPath", { id: "clip0_1707_1608", children: /* @__PURE__ */ i.jsx("path", { fill: "#fff", d: "M0 0H149.407V72H0z" }) }) })
      ]
    }
  );
}, Ep = ({
  className: e = "",
  size: t = "small",
  showVorwerkLogo: n = !0
}) => {
  const r = F8[t];
  return /* @__PURE__ */ i.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "149",
      height: "72",
      fill: "none",
      viewBox: "0 0 149 72",
      focusable: "false",
      className: A(r, e),
      children: [
        /* @__PURE__ */ i.jsxs("g", { fill: "#00AC46", clipPath: "url(#clip0_1707_1632)", children: [
          /* @__PURE__ */ i.jsx(
            "path",
            {
              d: "M22.337 33.9024H15.0803L6.2589 22.9039V33.9024H0V0H6.2589V20.3868L14.5814 9.68315H22.0422L12.3137 21.6567L22.337 33.9024Z",
              fill: "#00AC46"
            }
          ),
          /* @__PURE__ */ i.jsx(
            "path",
            {
              d: "M44.3112 30.8863C41.8167 33.3581 38.778 34.5827 35.195 34.5827C31.612 34.5827 28.5733 33.3581 26.1241 30.8863C23.675 28.4145 22.4277 25.3984 22.4277 21.8154C22.4277 18.2324 23.6523 15.1937 26.1241 12.7446C28.5959 10.2954 31.612 9.04819 35.195 9.04819C38.778 9.04819 41.8167 10.2728 44.3112 12.7446C46.8057 15.2164 48.0303 18.2324 48.0303 21.8154C48.0303 25.3984 46.783 28.4372 44.3112 30.8863ZM30.5235 26.6003C31.7707 27.8702 33.3128 28.4825 35.195 28.4825C37.0772 28.4825 38.6419 27.8476 39.8892 26.6003C41.1364 25.3531 41.7714 23.743 41.7714 21.8154C41.7714 19.8879 41.1364 18.2778 39.8892 17.0306C38.6419 15.7833 37.0545 15.1483 35.195 15.1483C33.3355 15.1483 31.7707 15.7833 30.5235 17.0306C29.2763 18.3005 28.664 19.8879 28.664 21.8154C28.664 23.743 29.2763 25.3531 30.5235 26.6003Z",
              fill: "#00AC46"
            }
          ),
          /* @__PURE__ */ i.jsx(
            "path",
            {
              d: "M66.5575 9.00284C69.823 9.00284 72.6123 10.2274 74.9027 12.6992C77.1931 15.171 78.3723 18.1871 78.3723 21.7701C78.3723 25.3531 77.2158 28.3918 74.9027 30.8409C72.5896 33.2901 69.8003 34.5373 66.5575 34.5373C63.3147 34.5373 60.548 33.3581 58.7112 30.9997V33.857H52.4523V0H58.7112V12.5405C60.548 10.182 63.1559 9.00284 66.5575 9.00284ZM60.5934 26.7137C61.8633 27.9836 63.4507 28.6186 65.3783 28.6186C67.3058 28.6186 68.9159 27.9836 70.2085 26.7137C71.4784 25.4438 72.1134 23.811 72.1134 21.7928C72.1134 19.7745 71.4784 18.1417 70.2085 16.8718C68.9386 15.6019 67.3285 14.9669 65.3783 14.9669C63.428 14.9669 61.8406 15.6019 60.5934 16.8718C59.3235 18.1417 58.7112 19.7972 58.7112 21.7928C58.7112 23.7883 59.3462 25.4438 60.5934 26.7137Z",
              fill: "#00AC46"
            }
          ),
          /* @__PURE__ */ i.jsx(
            "path",
            {
              d: "M103.408 30.8863C100.913 33.3581 97.8745 34.5827 94.2915 34.5827C90.7086 34.5827 87.6698 33.3581 85.2207 30.8863C82.7489 28.4145 81.5243 25.3984 81.5243 21.8154C81.5243 18.2324 82.7489 15.1937 85.2207 12.7446C87.6925 10.2728 90.7086 9.04819 94.2915 9.04819C97.8745 9.04819 100.913 10.2728 103.408 12.7446C105.902 15.2164 107.127 18.2324 107.127 21.8154C107.127 25.3984 105.88 28.4372 103.408 30.8863ZM89.62 26.6003C90.8673 27.8702 92.4093 28.4825 94.2915 28.4825C96.1738 28.4825 97.7385 27.8476 98.9857 26.6003C100.233 25.3531 100.868 23.743 100.868 21.8154C100.868 19.8879 100.233 18.2778 98.9857 17.0306C97.7385 15.7833 96.1511 15.1483 94.2915 15.1483C92.432 15.1483 90.8673 15.7833 89.62 17.0306C88.3728 18.3005 87.7605 19.8879 87.7605 21.8154C87.7605 23.743 88.3728 25.3531 89.62 26.6003Z",
              fill: "#00AC46"
            }
          ),
          /* @__PURE__ */ i.jsx("path", { d: "M111.549 33.9024V0H117.808V33.9024H111.549Z", fill: "#00AC46" }),
          /* @__PURE__ */ i.jsx(
            "path",
            {
              d: "M141.868 0H148.127V33.9024H141.868V31.045C140.032 33.4035 137.424 34.5827 134.022 34.5827C130.62 34.5827 127.967 33.3581 125.677 30.8863C123.364 28.4145 122.207 25.3984 122.207 21.8154C122.207 18.2324 123.364 15.1937 125.677 12.7446C127.99 10.2728 130.779 9.04819 134.022 9.04819C137.265 9.04819 140.032 10.2274 141.868 12.5858V0ZM130.371 26.7137C131.641 27.9836 133.251 28.6186 135.179 28.6186C137.106 28.6186 138.716 27.9836 139.964 26.7137C141.233 25.4438 141.846 23.811 141.846 21.7928C141.846 19.7745 141.211 18.1417 139.964 16.8718C138.694 15.6019 137.106 14.9669 135.179 14.9669C133.251 14.9669 131.641 15.6019 130.371 16.8718C129.101 18.1417 128.466 19.7972 128.466 21.7928C128.466 23.7883 129.101 25.4438 130.371 26.7137Z",
              fill: "#00AC46"
            }
          ),
          n && /* @__PURE__ */ i.jsx(
            "path",
            {
              d: "M55.7517 66.1266H54.4591C56.7269 69.6643 60.6727 72 65.1854 72C69.1313 72 72.6689 70.2085 74.982 67.3965C77.3177 70.2085 80.8554 72 84.8012 72C89.3139 72 93.2825 69.6643 95.5275 66.1266H94.2349C92.1032 69.052 88.679 70.9342 84.7785 70.9342C80.6739 70.9342 77.0456 68.8025 74.9593 65.5824C72.873 68.8025 69.2673 70.9342 65.1628 70.9342C61.285 70.9342 57.838 69.0293 55.7064 66.1266M84.7332 61.6592V59.0287H88.9284V57.4639H84.7332V55.1509H89.4273V53.5861H82.6469V63.2239H89.6541V61.6592H84.7332ZM76.388 63.2239H78.4516L81.1502 53.5861H79.2906L77.5445 60.2759L76.0251 53.5861H74.0749L72.4195 60.2986L70.8774 53.5861H68.5643L71.2402 63.2239H73.2812L74.8006 57.0557L76.3653 63.2239H76.388ZM67.9747 63.2239L65.4802 59.5502C66.1379 59.3008 67.5439 58.3937 67.5439 56.7609C67.5439 54.6973 65.9565 53.5861 64.2557 53.5861H59.7883V63.2239H61.8746V55.0602H63.6434C64.5732 55.0602 65.4122 55.6724 65.4122 56.8063C65.4122 57.9402 64.4144 58.5751 63.2806 58.5751C63.0765 58.5751 62.8724 58.5751 62.7136 58.5524L65.3442 63.2013H67.9521L67.9747 63.2239ZM44.0957 63.2239L47.6333 53.5861H45.6831L43.2113 60.6614L40.8075 53.5861H38.4264L42.0321 63.2239H44.073H44.0957ZM55.9332 58.3937C55.9332 60.3666 54.6859 61.954 53.0758 61.954C51.4658 61.954 50.2185 60.3666 50.2185 58.3937C50.2185 56.4208 51.4658 54.8334 53.0758 54.8334C54.6859 54.8334 55.9332 56.4208 55.9332 58.3937ZM53.0758 53.2913C50.2866 53.2913 48.0415 55.5817 48.0415 58.3937C48.0415 61.2057 50.3092 63.4961 53.0758 63.4961C55.8425 63.4961 58.1328 61.2057 58.1328 58.3937C58.1328 55.5817 55.8651 53.2913 53.0758 53.2913ZM94.1669 50.6381H95.4595C93.1917 47.1231 89.2459 44.7874 84.7558 44.7874C80.81 44.7874 77.2724 46.5789 74.9366 49.4135C72.6009 46.6016 69.0859 44.7874 65.1174 44.7874C60.6273 44.7874 56.6815 47.1231 54.4138 50.6381H55.7064C57.838 47.7354 61.2623 45.8532 65.1174 45.8532C69.222 45.8532 72.8503 47.9849 74.9366 51.205C77.0229 47.9849 80.6286 45.8532 84.7558 45.8532C88.6336 45.8532 92.0579 47.7354 94.1669 50.6381ZM99.6547 63.2239L97.1603 59.5502C97.8179 59.3008 99.2239 58.3937 99.2239 56.7609C99.2239 54.6973 97.6365 53.5861 95.9357 53.5861H91.4683V63.2239H93.5319V55.0602H95.3007C96.2305 55.0602 97.0695 55.6724 97.0695 56.8063C97.0695 57.9402 96.0717 58.5751 94.9379 58.5751C94.7338 58.5751 94.5297 58.5751 94.371 58.5524L97.0015 63.2013H99.6094L99.6547 63.2239ZM101.061 63.2239H103.124V53.5861H101.061V63.2239ZM109.701 63.2239L105.664 57.8721L109.247 53.5861H106.753L103.396 57.9855L106.934 63.2239H109.701Z",
              fill: "#00AC46"
            }
          )
        ] }),
        /* @__PURE__ */ i.jsx("defs", { children: /* @__PURE__ */ i.jsx("clipPath", { id: "clip0_1707_1632", children: /* @__PURE__ */ i.jsx("path", { fill: "#fff", d: "M0 0H148.127V72H0z" }) }) })
      ]
    }
  );
}, Rp = ({
  className: e = "",
  size: t = "small",
  showVorwerkLogo: n = !0
}) => {
  const r = I8[t];
  return /* @__PURE__ */ i.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "127",
      height: "72",
      fill: "none",
      viewBox: "0 0 127 72",
      focusable: "false",
      className: A(r, e),
      children: [
        /* @__PURE__ */ i.jsxs("g", { fill: "#00AC46", clipPath: "url(#clip0_1707_1671)", children: [
          /* @__PURE__ */ i.jsx(
            "path",
            {
              d: "M13.1448 14.3917C16.188 14.3917 18.7874 15.5329 20.9218 17.8364C23.0774 20.1399 24.1552 22.9506 24.1552 26.2897C24.1552 29.6287 23.0774 32.4605 20.9218 34.7429C18.7663 37.0464 16.1669 38.1876 13.1448 38.1876C10.1228 38.1876 7.54454 37.0887 5.83275 34.8909V37.5536H0V6.00182H5.83275V17.6885C7.54454 15.4906 9.97485 14.3917 13.1448 14.3917ZM7.58681 30.8967C8.77026 32.0801 10.2496 32.6719 12.0459 32.6719C13.8422 32.6719 15.3427 32.0801 16.5473 30.8967C17.7307 29.7132 18.3225 28.1916 18.3225 26.3108C18.3225 24.4299 17.7307 22.9084 16.5473 21.7249C15.3638 20.5414 13.8634 19.9497 12.0459 19.9497C10.2285 19.9497 8.74913 20.5414 7.58681 21.7249C6.40335 22.9084 5.83275 24.4511 5.83275 26.3108C5.83275 28.1705 6.42448 29.7132 7.58681 30.8967Z",
              fill: "#00AC46"
            }
          ),
          /* @__PURE__ */ i.jsx(
            "path",
            {
              d: "M64.3717 14.3917C66.9499 14.3917 69.021 15.237 70.5849 16.9277C72.1276 18.6183 72.9095 20.8796 72.9095 23.6903V37.5959H67.0767V24.0918C67.0767 22.7393 66.7386 21.6826 66.0835 20.9218C65.4284 20.161 64.4985 19.8018 63.2939 19.8018C61.9625 19.8018 60.9481 20.2456 60.2085 21.112C59.4688 21.9785 59.1095 23.2465 59.1095 24.8949V37.5748H53.2768V24.0707C53.2768 22.7182 52.9387 21.6615 52.2835 20.9007C51.6284 20.1399 50.6985 19.7806 49.4939 19.7806C48.2048 19.7806 47.1693 20.2244 46.4085 21.0909C45.6477 21.9574 45.2673 23.2254 45.2673 24.8737V37.5536H39.4346V15.0257H45.2673V17.4137C46.6198 15.4061 48.712 14.3917 51.5439 14.3917C54.3757 14.3917 56.3622 15.4695 57.6725 17.6462C59.1729 15.4695 61.4131 14.3917 64.3928 14.3917H64.3717Z",
              fill: "#00AC46"
            }
          ),
          /* @__PURE__ */ i.jsx(
            "path",
            {
              d: "M90.9993 14.3917C94.0425 14.3917 96.6419 15.5329 98.7764 17.8364C100.932 20.1399 102.01 22.9506 102.01 26.2897C102.01 29.6287 100.932 32.4605 98.7764 34.7429C96.6208 37.0464 94.0214 38.1876 90.9993 38.1876C87.9773 38.1876 85.399 37.0887 83.6873 34.8909V37.5536H77.8545V6.00182H83.6873V17.6885C85.399 15.4906 87.8294 14.3917 90.9993 14.3917ZM85.4413 30.8967C86.6248 32.0801 88.1041 32.6719 89.9004 32.6719C91.6967 32.6719 93.1972 32.0801 94.4018 30.8967C95.5852 29.7132 96.177 28.1916 96.177 26.3108C96.177 24.4299 95.5852 22.9084 94.4018 21.7249C93.2183 20.5414 91.7179 19.9497 89.9004 19.9497C88.083 19.9497 86.6036 20.5414 85.4413 21.7249C84.2579 22.9084 83.6873 24.4511 83.6873 26.3108C83.6873 28.1705 84.279 29.7132 85.4413 30.8967Z",
              fill: "#00AC46"
            }
          ),
          /* @__PURE__ */ i.jsx(
            "path",
            {
              d: "M119.931 15.0257H126.165L117.944 37.6382C116.761 40.8504 115.218 43.1962 113.274 44.6544C111.329 46.1126 108.92 46.7677 106.046 46.6198V41.2097C107.61 41.2308 108.857 40.9138 109.766 40.2164C110.674 39.519 111.414 38.4201 111.963 36.8774L102.707 15.0257H109.068L114.964 30.1993L119.952 15.0257H119.931Z",
              fill: "#00AC46"
            }
          ),
          /* @__PURE__ */ i.jsx(
            "path",
            {
              d: "M33.7709 20.5414C32.6931 20.5414 29.5442 20.3935 28.3185 16.9911V37.5959H34.0879V20.5203C34.0879 20.5203 33.8765 20.5414 33.7709 20.5414Z",
              fill: "#00AC46"
            }
          ),
          /* @__PURE__ */ i.jsx(
            "path",
            {
              d: "M33.5805 16.9065C31.2981 16.9065 29.6286 15.3638 28.4874 12.1938L28.0014 10.8624L27.5787 10.9892C27.1772 11.116 24.0283 12.0882 22.5067 13.1448C22.4222 12.8278 22.3377 12.5108 22.2954 12.1938C21.8939 9.42539 23.3732 7.54454 26.9447 6.25542L28.2761 5.76935L28.1493 5.34669C28.0225 4.94516 27.0504 1.79632 26.0148 0.274731C26.3318 0.190198 26.6488 0.105666 26.9658 0.0633995C27.2617 0.0211332 27.5364 0 27.8112 0C30.0935 0 31.7631 1.54272 32.9042 4.7127L33.3903 6.06522L33.813 5.93842C34.2145 5.81162 37.3633 4.8395 38.8849 3.78284C38.9695 4.09983 39.054 4.41683 39.0963 4.73383C39.4978 7.50227 38.0185 9.38313 34.447 10.6722L33.2212 11.116V11.433C33.2212 11.581 34.2779 15.0257 35.398 16.6529C35.081 16.7375 34.764 16.822 34.447 16.8643C34.1511 16.9065 33.8764 16.9277 33.6016 16.9277L33.5805 16.9065Z",
              fill: "#00AC46"
            }
          ),
          n && /* @__PURE__ */ i.jsx(
            "path",
            {
              d: "M46.0174 66.5265H44.8129C46.9262 69.8233 50.6033 72 54.8088 72C58.486 72 61.7828 70.3305 63.9384 67.71C66.1151 70.3305 69.4119 72 73.089 72C77.2945 72 80.9928 69.8233 83.085 66.5265H81.8804C79.8939 69.2527 76.7028 71.0067 73.0679 71.0067C69.2428 71.0067 65.8615 69.0202 63.9172 66.0193C61.973 69.0202 58.6128 71.0067 54.7877 71.0067C51.1739 71.0067 47.9617 69.2316 45.9752 66.5265M73.0256 62.3633V59.9118H76.9353V58.4536H73.0256V56.2981H77.4002V54.8399H71.0814V63.8215H77.6115V62.3633H73.0256ZM65.2486 63.8215H67.1717L69.6866 54.8399H67.9537L66.3264 61.0742L64.9105 54.8399H63.093L61.5503 61.0953L60.1133 54.8399H57.9577L60.4514 63.8215H62.3534L63.7693 58.0732L65.2275 63.8215H65.2486ZM57.4082 63.8215L55.0836 60.3979C55.6964 60.1654 57.0067 59.3201 57.0067 57.7985C57.0067 55.8754 55.5274 54.8399 53.9424 54.8399H49.7791V63.8215H51.7234V56.2135H53.3718C54.2382 56.2135 55.0202 56.7841 55.0202 57.8408C55.0202 58.8974 54.0903 59.4892 53.0337 59.4892C52.8435 59.4892 52.6533 59.4892 52.5053 59.468L54.9568 63.8003H57.3871L57.4082 63.8215ZM35.155 63.8215L38.4518 54.8399H36.6343L34.3308 61.4334L32.0907 54.8399H29.8717L33.2319 63.8215H35.1339H35.155ZM46.1865 59.3201C46.1865 61.1587 45.0242 62.638 43.5237 62.638C42.0233 62.638 40.8609 61.1587 40.8609 59.3201C40.8609 57.4815 42.0233 56.0022 43.5237 56.0022C45.0242 56.0022 46.1865 57.4815 46.1865 59.3201ZM43.5237 54.5651C40.9243 54.5651 38.8322 56.6996 38.8322 59.3201C38.8322 61.9406 40.9455 64.0751 43.5237 64.0751C46.102 64.0751 48.2364 61.9406 48.2364 59.3201C48.2364 56.6996 46.1231 54.5651 43.5237 54.5651ZM81.817 52.0926H83.0216C80.9083 48.8169 77.2311 46.6402 73.0468 46.6402C69.3696 46.6402 66.0728 48.3097 63.8961 50.9514C61.7194 48.3308 58.4437 46.6402 54.7454 46.6402C50.5611 46.6402 46.8839 48.8169 44.7706 52.0926H45.9752C47.9617 49.3875 51.1528 47.6335 54.7454 47.6335C58.5705 47.6335 61.9519 49.62 63.8961 52.6209C65.8404 49.62 69.2005 47.6335 73.0468 47.6335C76.6605 47.6335 79.8516 49.3875 81.817 52.0926ZM86.9313 63.8215L84.6066 60.3979C85.2195 60.1654 86.5297 59.3201 86.5297 57.7985C86.5297 55.8754 85.0504 54.8399 83.4654 54.8399H79.3022V63.8215H81.2253V56.2135H82.8737C83.7401 56.2135 84.5221 56.7841 84.5221 57.8408C84.5221 58.8974 83.5922 59.4892 82.5356 59.4892C82.3454 59.4892 82.1552 59.4892 82.0072 59.468L84.4587 63.8003H86.889L86.9313 63.8215ZM88.2415 63.8215H90.1646V54.8399H88.2415V63.8215ZM96.2932 63.8215L92.5315 58.834L95.8706 54.8399H93.5459L90.4182 58.9397L93.715 63.8215H96.2932Z",
              fill: "#00AC46"
            }
          )
        ] }),
        /* @__PURE__ */ i.jsx("defs", { children: /* @__PURE__ */ i.jsx("clipPath", { id: "clip0_1707_1671", children: /* @__PURE__ */ i.jsx("path", { fill: "#fff", d: "M0 0H126.165V72H0z" }) }) })
      ]
    }
  );
}, Hp = ({
  className: e = "",
  size: t = "small",
  showVorwerkLogo: n = !0
}) => {
  const r = $8[t];
  return /* @__PURE__ */ i.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "165",
      height: "72",
      fill: "none",
      viewBox: "0 0 165 72",
      focusable: "false",
      className: A(r, e),
      children: [
        /* @__PURE__ */ i.jsx(
          "path",
          {
            fill: "#00AC46",
            d: "M6.215 35.271l2.642-7.044h15.848l2.642 7.044h6.474L20.25.829h-6.733L0 35.27h6.215zm4.662-12.327L16.832 7.2l5.904 15.745h-11.86zM38.29 35.271h5.646V11.187l11.343 15.797L66.517 11.24v24.032h5.697V.829h-4.662L55.33 18.335 42.952.829H38.29V35.27zM90.868 36.1c7.562 0 12.275-4.04 12.275-10.307 0-6.889-4.817-9.064-10.98-10.462-4.61-1.088-6.785-2.176-6.785-5.335 0-2.745 2.227-4.61 5.8-4.61 3.16 0 5.905 1.295 8.236 3.315l3.159-4.402C99.725 1.709 95.943 0 91.075 0c-6.992 0-11.809 4.247-11.809 10.359 0 6.992 5.49 9.115 10.773 10.255 4.35.932 6.992 2.02 6.992 5.334 0 3.004-2.382 4.765-6.215 4.765-3.832 0-6.837-1.45-9.374-3.625l-3.16 4.661c2.849 2.59 7.407 4.35 12.586 4.35zM131.047.829l-9.53 16.573L111.987.83h-6.992l13.466 22.53V35.27h6.163V23.359L137.987.829h-6.94zM151.967 36.1c7.562 0 12.275-4.04 12.275-10.307 0-6.889-4.816-9.064-10.98-10.462-4.609-1.088-6.785-2.176-6.785-5.335 0-2.745 2.227-4.61 5.801-4.61 3.16 0 5.905 1.295 8.235 3.315l3.16-4.402C160.824 1.709 157.043 0 152.175 0c-6.992 0-11.809 4.247-11.809 10.359 0 6.992 5.49 9.115 10.773 10.255 4.35.932 6.992 2.02 6.992 5.334 0 3.004-2.383 4.765-6.215 4.765-3.833 0-6.837-1.45-9.375-3.625l-3.159 4.661c2.848 2.59 7.406 4.35 12.585 4.35z"
          }
        ),
        n && /* @__PURE__ */ i.jsx(
          "path",
          {
            fill: "#00AC46",
            fillRule: "evenodd",
            d: "M113.082 57.208l3.732 5.525h2.922l-4.256-5.641 3.778-4.527h-2.624l-3.552 4.643zm-2.468-4.643h2.186v10.168h-2.186V52.565zm-7.002 5.26l2.77 4.907h2.742l-2.622-3.871c.691-.257 2.188-1.212 2.188-2.942 0-2.172-1.684-3.353-3.459-3.353h-4.71v10.168h2.187V54.12h1.868c.986 0 1.869.643 1.869 1.855 0 1.215-1.063 1.875-2.244 1.875-.224 0-.42.006-.589-.025zm-12.456-5.26v10.168h7.386v-1.65h-5.197V58.31h4.421V56.66h-4.42v-2.449h4.966v-1.645l-7.156-.002zM82.9 56.21l1.644 6.523h2.17l2.858-10.168H87.61l-1.836 7.05-1.596-7.05h-2.062l-1.736 7.082-1.62-7.082h-2.442l2.825 10.168H81.3l1.601-6.523zm-12.75 1.615l2.767 4.907h2.746l-2.622-3.871c.689-.257 2.188-1.212 2.188-2.942 0-2.172-1.686-3.353-3.459-3.353h-4.712v10.168h2.19V54.12h1.867c.984 0 1.867.643 1.867 1.855 0 1.215-1.065 1.875-2.246 1.875-.224 0-.418.006-.587-.025zm-10.194-5.584c-2.94 0-5.324 2.413-5.324 5.389 0 2.977 2.384 5.388 5.324 5.388s5.324-2.409 5.324-5.388c0-2.976-2.384-5.389-5.324-5.389zm0 9.156c-1.68 0-3.008-1.687-3.008-3.767 0-2.077 1.328-3.762 3.008-3.762 1.684 0 3.01 1.683 3.01 3.762 0 2.08-1.326 3.767-3.01 3.767zm-10.416-1.376l-2.53-7.456h-2.504l3.807 10.168h2.152l3.74-10.168H52.15l-2.599 7.477-.009-.021zm55.145-10.576h-1.363a12.3 12.3 0 00-9.94-5.036c-4.342 0-8.16 2.245-10.355 5.637A12.298 12.298 0 0072.68 44.41c-4.083 0-7.696 1.988-9.938 5.043h-1.359c2.39-3.71 6.555-6.172 11.297-6.172a13.39 13.39 0 0110.35 4.873 13.407 13.407 0 0110.354-4.873 13.43 13.43 0 0111.303 6.163v.002zm.027 16.345A13.407 13.407 0 0193.385 72a13.416 13.416 0 01-10.355-4.868A13.403 13.403 0 0172.681 72a13.42 13.42 0 01-11.328-6.205v-.005h1.357a12.296 12.296 0 009.971 5.083c4.344 0 8.158-2.244 10.35-5.638a12.31 12.31 0 0010.354 5.638c4.1 0 7.732-2.003 9.971-5.083h1.357z",
            clipRule: "evenodd"
          }
        )
      ]
    }
  );
}, Ap = ({
  className: e = "",
  size: t = "small",
  showVorwerkLogo: n = !0
}) => {
  const r = W8[t];
  switch (t) {
    case "small":
      return /* @__PURE__ */ i.jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "178",
          height: "72",
          fill: "currentColor",
          viewBox: "0 0 178 72",
          className: A(r, e),
          children: /* @__PURE__ */ i.jsxs("g", { fill: "currentColor", children: [
            /* @__PURE__ */ i.jsx("path", { d: "M12.8434 16.1497H7.81313V23.4965C7.81313 24.1087 7.96205 24.5555 8.27644 24.8368C8.59083 25.1181 9.0376 25.2836 9.61674 25.3167C10.1959 25.3497 10.9405 25.3497 11.8009 25.3001V29.4368C8.67357 29.7843 6.4563 29.503 5.18219 28.5598C3.89154 27.6167 3.26276 25.9289 3.26276 23.5131V16.1663H3.24622V8.20725L7.81313 6.83387V11.7814H12.8599V16.1663L12.8434 16.1497Z" }),
            /* @__PURE__ */ i.jsx("path", { d: "M24.8397 11.2684C26.7757 11.2684 28.3642 11.9137 29.6217 13.2209C30.8793 14.5281 31.5081 16.3152 31.5081 18.5986V29.4533H26.9412V19.1612C26.9412 17.9864 26.6268 17.0763 25.9814 16.4641C25.3361 15.8518 24.4922 15.5209 23.4332 15.5209C22.2584 15.5209 21.3153 15.8849 20.6037 16.613C19.8922 17.3411 19.5447 18.4331 19.5447 19.9058V29.4533H14.9778V4.6993H19.5447V13.7504C20.6534 12.0957 22.4073 11.2684 24.8066 11.2684H24.8397Z" }),
            /* @__PURE__ */ i.jsx("path", { d: "M39.2685 22.4871C39.8808 24.7044 41.5354 25.813 44.2491 25.813C45.9865 25.813 47.3103 25.2173 48.2038 24.0425L51.8772 26.1605C50.1398 28.6756 47.5585 29.9497 44.1664 29.9497C41.2376 29.9497 38.9045 29.0727 37.134 27.3022C35.3635 25.5317 34.4865 23.3144 34.4865 20.6173C34.4865 17.9202 35.3635 15.736 37.1009 13.9489C38.8383 12.1619 41.0887 11.2849 43.8189 11.2849C46.4168 11.2849 48.5513 12.1784 50.2391 13.9655C51.9268 15.7525 52.7707 17.9698 52.7707 20.6173C52.7707 21.213 52.7045 21.8252 52.5887 22.4871H39.2685ZM39.2023 18.9461H48.2204C47.9556 17.7382 47.4261 16.8446 46.6153 16.2655C45.8045 15.6698 44.8779 15.3885 43.8355 15.3885C42.611 15.3885 41.6016 15.7029 40.7908 16.3317C39.9966 16.9605 39.4671 17.8374 39.2023 18.9626V18.9461Z" }),
            /* @__PURE__ */ i.jsx("path", { d: "M60.4981 14.8094C60.9284 13.6842 61.6233 12.8237 62.5996 12.2612C63.5759 11.6986 64.6679 11.4173 65.8759 11.4173V16.5137C64.4859 16.3482 63.2449 16.6295 62.1528 17.3576C61.0607 18.0856 60.5147 19.2935 60.5147 20.9979V29.4367H55.9478V11.7648H60.5147V14.8094H60.4981Z" }),
            /* @__PURE__ */ i.jsx("path", { d: "M113.696 27.236C111.876 29.0396 109.659 29.9332 107.044 29.9332C104.43 29.9332 102.213 29.0396 100.426 27.236C98.622 25.4324 97.7285 23.2317 97.7285 20.6173C97.7285 18.0029 98.622 15.7856 100.426 13.9986C102.229 12.195 104.43 11.3015 107.044 11.3015C109.659 11.3015 111.876 12.195 113.696 13.9986C115.516 15.8022 116.41 18.0029 116.41 20.6173C116.41 23.2317 115.5 25.449 113.696 27.236ZM103.636 24.1087C104.546 25.0353 105.671 25.4821 107.044 25.4821C108.418 25.4821 109.559 25.0188 110.47 24.1087C111.38 23.1986 111.843 22.0238 111.843 20.6173C111.843 19.2108 111.38 18.036 110.47 17.1259C109.559 16.2159 108.401 15.7525 107.044 15.7525C105.688 15.7525 104.546 16.2159 103.636 17.1259C102.726 18.0526 102.279 19.2108 102.279 20.6173C102.279 22.0238 102.726 23.1986 103.636 24.1087Z" }),
            /* @__PURE__ */ i.jsx("path", { d: "M154.054 16.0835C153.21 16.0835 150.744 15.9677 149.785 13.3037V29.4368H154.302V16.067C154.302 16.067 154.137 16.0835 154.054 16.0835Z" }),
            /* @__PURE__ */ i.jsx("path", { d: "M153.905 13.2374C152.118 13.2374 150.811 12.0295 149.917 9.54751L149.536 8.50506L149.206 8.60434C148.891 8.70362 146.426 9.46477 145.234 10.2921C145.168 10.0439 145.102 9.79571 145.069 9.54751C144.754 7.37988 145.913 5.90721 148.709 4.89785L149.752 4.51728L149.652 4.18634C149.553 3.87195 148.792 1.40648 147.981 0.215108C148.229 0.148921 148.477 0.082734 148.726 0.0496404C148.957 0.0165468 149.172 0 149.388 0C151.175 0 152.482 1.20792 153.375 3.68994L153.756 4.74893L154.087 4.64965C154.401 4.55037 156.867 3.78922 158.058 2.96188C158.124 3.21008 158.19 3.45828 158.224 3.70648C158.538 5.87412 157.38 7.34678 154.583 8.35614L153.624 8.70362V8.95182C153.624 9.06765 154.451 11.7648 155.328 13.0389C155.08 13.1051 154.831 13.1713 154.583 13.2044C154.352 13.2374 154.137 13.254 153.921 13.254L153.905 13.2374Z" }),
            /* @__PURE__ */ i.jsx("path", { d: "M174.754 29.4368H169.492L165.653 24.0756L161.814 29.4368H156.552L163.022 20.4188L156.834 11.7648H162.096L165.653 16.7454L169.227 11.7648H174.456L168.267 20.4022L174.737 29.4368H174.754Z" }),
            /* @__PURE__ */ i.jsx("path", { d: "M88.0651 11.2684C90.0838 11.2684 91.7054 11.9302 92.9299 13.254C94.1543 14.5777 94.75 16.3482 94.75 18.549V29.4368H90.1831V18.8634C90.1831 17.8044 89.9183 16.977 89.4054 16.3813C88.8924 15.7856 88.1644 15.5044 87.2212 15.5044C86.1788 15.5044 85.3845 15.8518 84.8054 16.5303C84.2262 17.2087 83.9449 18.2015 83.9449 19.4921V29.4202H79.378V18.8468C79.378 17.7878 79.1133 16.9605 78.6003 16.3648C78.0874 15.7691 77.3593 15.4878 76.4161 15.4878C75.4068 15.4878 74.596 15.8353 74.0003 16.5137C73.4046 17.1921 73.1068 18.1849 73.1068 19.4756V29.4037H68.5399V11.7648H73.1068V13.6346C74.1658 12.0626 75.8039 11.2684 78.0212 11.2684C80.2385 11.2684 81.7939 12.1123 82.8198 13.8166C83.9946 12.1123 85.7485 11.2684 88.0816 11.2684H88.0651Z" }),
            /* @__PURE__ */ i.jsx("path", { d: "M139.178 11.2684C141.197 11.2684 142.819 11.9302 144.043 13.254C145.267 14.5777 145.863 16.3482 145.863 18.549V29.4368H141.296V18.8634C141.296 17.8044 141.031 16.977 140.519 16.3813C140.006 15.7856 139.277 15.5044 138.334 15.5044C137.292 15.5044 136.498 15.8518 135.919 16.5303C135.339 17.2087 135.058 18.2015 135.058 19.4921V29.4202H130.491V18.8468C130.491 17.7878 130.226 16.9605 129.713 16.3648C129.2 15.7691 128.472 15.4878 127.529 15.4878C126.52 15.4878 125.709 15.8353 125.113 16.5137C124.518 17.1921 124.22 18.1849 124.22 19.4756V29.4037H119.653V11.7648H124.22V13.6346C125.279 12.0626 126.917 11.2684 129.134 11.2684C131.352 11.2684 132.907 12.1123 133.933 13.8166C135.108 12.1123 136.862 11.2684 139.195 11.2684H139.178Z" }),
            n && /* @__PURE__ */ i.jsx("path", { d: "M68.7033 65.525H67.2706C69.7841 69.425 74.1577 72 79.1596 72C83.5331 72 87.4542 70.025 90.018 66.925C92.6069 70.025 96.528 72 100.902 72C105.903 72 110.302 69.425 112.79 65.525H111.358C108.995 68.75 105.2 70.825 100.876 70.825C96.3269 70.825 92.3053 68.475 89.9928 64.925C87.6804 68.475 83.6839 70.825 79.1344 70.825C74.8363 70.825 71.0157 68.725 68.653 65.525M100.826 60.6V57.7H105.476V55.975H100.826V53.425H106.029V51.7H98.5137V62.325H106.28V60.6H100.826ZM93.8637 62.325L96.8548 51.7H94.7937L92.8583 59.075L91.1742 51.7H89.0126L87.1777 59.1L85.4685 51.7H82.9047L85.8707 62.325H88.1328L89.8169 55.525L91.5512 62.325H93.8637ZM82.2512 62.325L79.4863 58.275C80.2152 58 81.7736 57 81.7736 55.2C81.7736 52.925 80.0142 51.7 78.129 51.7H73.1774V62.325H75.4898V53.325H77.4504C78.4809 53.325 79.4109 54 79.4109 55.25C79.4109 56.5 78.305 57.2 77.0482 57.2C76.822 57.2 76.5958 57.2 76.4198 57.175L79.3355 62.3H82.2261L82.2512 62.325ZM55.7838 62.325L59.7049 51.7H57.5433L54.8035 59.5L52.1392 51.7H49.5L53.4965 62.325H55.7838ZM68.9044 57C68.9044 59.175 67.5219 60.925 65.7374 60.925C63.9528 60.925 62.5703 59.175 62.5703 57C62.5703 54.825 63.9528 53.075 65.7374 53.075C67.5219 53.075 68.9044 54.825 68.9044 57ZM65.7374 51.375C62.6457 51.375 60.1573 53.9 60.1573 57C60.1573 60.1 62.6709 62.625 65.7374 62.625C68.8038 62.625 71.3425 60.1 71.3425 57C71.3425 53.9 68.829 51.375 65.7374 51.375ZM111.282 48.45H112.715C110.202 44.575 105.828 42 100.851 42C96.4777 42 92.5566 43.975 89.9677 47.1C87.3788 44 83.4828 42 79.0841 42C74.1074 42 69.7338 44.575 67.2203 48.45H68.653C71.0157 45.25 74.8112 43.175 79.0841 43.175C83.6336 43.175 87.6553 45.525 89.9677 49.075C92.2801 45.525 96.2766 43.175 100.851 43.175C105.149 43.175 108.945 45.25 111.282 48.45ZM117.365 62.325L114.6 58.275C115.329 58 116.888 57 116.888 55.2C116.888 52.925 115.128 51.7 113.243 51.7H108.291V62.325H110.579V53.325H112.539C113.57 53.325 114.5 54 114.5 55.25C114.5 56.5 113.394 57.2 112.137 57.2C111.911 57.2 111.685 57.2 111.509 57.175L114.424 62.3H117.315L117.365 62.325ZM118.923 62.325H121.211V51.7H118.923V62.325ZM128.5 62.325L124.026 56.425L127.997 51.7H125.232L121.512 56.55L125.434 62.325H128.5Z" })
          ] })
        }
      );
    case "medium":
      return /* @__PURE__ */ i.jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "223",
          height: "72",
          fill: "currentColor",
          viewBox: "0 0 223 72",
          className: A(r, e),
          children: /* @__PURE__ */ i.jsxs("g", { fill: "currentColor", children: [
            /* @__PURE__ */ i.jsx("path", { d: "M15.7346 20.3079H9.40919V29.5464C9.40919 30.3162 9.59645 30.878 9.99179 31.2317C10.3871 31.5855 10.9489 31.7935 11.6772 31.8352C12.4054 31.8768 13.3418 31.8768 14.4237 31.8144V37.0162C10.4912 37.4531 7.70299 37.0994 6.10083 35.9134C4.47786 34.7274 3.68719 32.605 3.68719 29.5672V20.3287H3.66638V10.3205L9.40919 8.59345V14.8148H15.7554V20.3287L15.7346 20.3079Z" }),
            /* @__PURE__ */ i.jsx("path", { d: "M30.8198 14.1698C33.2542 14.1698 35.2517 14.9812 36.8331 16.625C38.4144 18.2688 39.2051 20.516 39.2051 23.3874V37.0369H33.4623V24.0948C33.4623 22.6175 33.0669 21.4731 32.2555 20.7032C31.444 19.9334 30.3828 19.5172 29.0511 19.5172C27.5738 19.5172 26.3878 19.975 25.4931 20.8905C24.5984 21.806 24.1614 23.1793 24.1614 25.0311V37.0369H18.4186V5.90927H24.1614V17.2908C25.5555 15.2101 27.7611 14.1698 30.7782 14.1698H30.8198Z" }),
            /* @__PURE__ */ i.jsx("path", { d: "M48.9637 28.2771C49.7336 31.0652 51.8143 32.4593 55.2267 32.4593C57.4115 32.4593 59.076 31.7103 60.1996 30.2329L64.8188 32.8963C62.6341 36.059 59.3881 37.6611 55.1226 37.6611C51.4398 37.6611 48.5059 36.5583 46.2796 34.332C44.0532 32.1056 42.9504 29.3174 42.9504 25.9258C42.9504 22.5343 44.0532 19.7877 46.2379 17.5405C48.4227 15.2933 51.2525 14.1905 54.6857 14.1905C57.9524 14.1905 60.6366 15.3141 62.7589 17.5613C64.8813 19.8085 65.9424 22.5967 65.9424 25.9258C65.9424 26.6749 65.8592 27.4448 65.7135 28.2771H48.9637ZM48.8805 23.8243H60.2204C59.8875 22.3054 59.2217 21.1818 58.2021 20.4535C57.1826 19.7045 56.0174 19.3507 54.7065 19.3507C53.1668 19.3507 51.8975 19.7461 50.878 20.5368C49.8792 21.3274 49.2134 22.4302 48.8805 23.8451V23.8243Z" }),
            /* @__PURE__ */ i.jsx("path", { d: "M75.6595 18.6225C76.2005 17.2076 77.0744 16.1256 78.302 15.4181C79.5296 14.7107 80.9029 14.357 82.4218 14.357V20.7656C80.674 20.5575 79.1135 20.9113 77.7402 21.8268C76.3669 22.7423 75.6803 24.2612 75.6803 26.4044V37.0161H69.9375V14.7939H75.6803V18.6225H75.6595Z" }),
            /* @__PURE__ */ i.jsx("path", { d: "M142.555 34.2487C140.266 36.5167 137.478 37.6403 134.19 37.6403C130.903 37.6403 128.115 36.5167 125.867 34.2487C123.599 31.9807 122.476 29.2134 122.476 25.9258C122.476 22.6383 123.599 19.8501 125.867 17.6029C128.135 15.3349 130.903 14.2113 134.19 14.2113C137.478 14.2113 140.266 15.3349 142.555 17.6029C144.844 19.8709 145.967 22.6383 145.967 25.9258C145.967 29.2134 144.823 32.0016 142.555 34.2487ZM129.904 30.3162C131.048 31.4814 132.463 32.0432 134.19 32.0432C135.917 32.0432 137.353 31.4606 138.497 30.3162C139.642 29.1718 140.224 27.6945 140.224 25.9258C140.224 24.1572 139.642 22.6799 138.497 21.5355C137.353 20.3911 135.897 19.8085 134.19 19.8085C132.484 19.8085 131.048 20.3911 129.904 21.5355C128.76 22.7007 128.198 24.1572 128.198 25.9258C128.198 27.6945 128.76 29.1718 129.904 30.3162Z" }),
            /* @__PURE__ */ i.jsx("path", { d: "M193.304 20.2247C192.243 20.2247 189.142 20.0791 187.936 16.7291V37.0162H193.616V20.2039C193.616 20.2039 193.408 20.2247 193.304 20.2247Z" }),
            /* @__PURE__ */ i.jsx("path", { d: "M193.116 16.6458C190.869 16.6458 189.226 15.1269 188.102 12.0058L187.623 10.6949L187.207 10.8198C186.812 10.9446 183.712 11.9018 182.213 12.9421C182.13 12.63 182.047 12.3179 182.005 12.0058C181.61 9.28004 183.067 7.42819 186.583 6.15895L187.894 5.68038L187.769 5.26424C187.644 4.8689 186.687 1.76862 185.667 0.270494C185.98 0.187265 186.292 0.104036 186.604 0.0624218C186.895 0.0208073 187.166 0 187.436 0C189.683 0 191.327 1.51893 192.451 4.64002L192.929 5.97168L193.345 5.84684C193.741 5.722 196.841 4.76486 198.339 3.7245C198.422 4.03661 198.506 4.34872 198.547 4.66083C198.943 7.38658 197.486 9.23842 193.97 10.5077L192.763 10.9446V11.2567C192.763 11.4024 193.803 14.794 194.906 16.3961C194.594 16.4794 194.282 16.5626 193.97 16.6042C193.678 16.6458 193.408 16.6666 193.137 16.6666L193.116 16.6458Z" }),
            /* @__PURE__ */ i.jsx("path", { d: "M219.334 37.0161H212.717L207.89 30.2746L203.062 37.0161H196.446L204.581 25.6762L196.799 14.794H203.416L207.89 21.057L212.384 14.794H218.959L211.177 25.6554L219.313 37.0161H219.334Z" }),
            /* @__PURE__ */ i.jsx("path", { d: "M110.324 14.1697C112.863 14.1697 114.902 15.002 116.442 16.6666C117.981 18.3312 118.73 20.5576 118.73 23.3249V37.0161H112.988V23.7203C112.988 22.3886 112.655 21.3482 112.01 20.5992C111.365 19.8501 110.449 19.4964 109.263 19.4964C107.952 19.4964 106.954 19.9333 106.225 20.7864C105.497 21.6395 105.143 22.888 105.143 24.5109V36.9953H99.4005V23.6995C99.4005 22.3678 99.0676 21.3274 98.4226 20.5784C97.7776 19.8293 96.8621 19.4756 95.676 19.4756C94.4068 19.4756 93.3872 19.9125 92.6382 20.7656C91.8891 21.6187 91.5146 22.8672 91.5146 24.4901V36.9745H85.7718V14.794H91.5146V17.1452C92.8463 15.1685 94.9062 14.1697 97.6944 14.1697C100.483 14.1697 102.438 15.2309 103.728 17.3741C105.206 15.2309 107.411 14.1697 110.345 14.1697H110.324Z" }),
            /* @__PURE__ */ i.jsx("path", { d: "M174.598 14.1697C177.137 14.1697 179.176 15.002 180.715 16.6666C182.255 18.3312 183.004 20.5576 183.004 23.3249V37.0161H177.261V23.7203C177.261 22.3886 176.928 21.3482 176.283 20.5992C175.638 19.8501 174.723 19.4964 173.537 19.4964C172.226 19.4964 171.227 19.9333 170.499 20.7864C169.771 21.6395 169.417 22.888 169.417 24.5109V36.9953H163.674V23.6995C163.674 22.3678 163.341 21.3274 162.696 20.5784C162.051 19.8293 161.136 19.4756 159.95 19.4756C158.68 19.4756 157.661 19.9125 156.912 20.7656C156.163 21.6187 155.788 22.8672 155.788 24.4901V36.9745H150.045V14.794H155.788V17.1452C157.12 15.1685 159.18 14.1697 161.968 14.1697C164.756 14.1697 166.712 15.2309 168.002 17.3741C169.479 15.2309 171.685 14.1697 174.619 14.1697H174.598Z" }),
            n && /* @__PURE__ */ i.jsx("path", { d: "M94.677 66.5588H93.4895C95.5729 69.8088 99.1979 71.9546 103.344 71.9546C106.969 71.9546 110.219 70.3088 112.344 67.7254C114.49 70.3088 117.74 71.9546 121.365 71.9546C125.51 71.9546 129.156 69.8088 131.219 66.5588H130.031C128.073 69.2463 124.927 70.9754 121.344 70.9754C117.573 70.9754 114.24 69.0171 112.323 66.0588C110.406 69.0171 107.094 70.9754 103.323 70.9754C99.7604 70.9754 96.5937 69.2254 94.6354 66.5588M121.302 62.4546V60.0379H125.156V58.6004H121.302V56.4754H125.615V55.0379H119.385V63.8921H125.823V62.4546H121.302ZM115.531 63.8921L118.01 55.0379H116.302L114.698 61.1838L113.302 55.0379H111.51L109.99 61.2046L108.573 55.0379H106.448L108.906 63.8921H110.781L112.177 58.2254L113.615 63.8921H115.531ZM105.906 63.8921L103.615 60.5171C104.219 60.2879 105.51 59.4546 105.51 57.9546C105.51 56.0588 104.052 55.0379 102.49 55.0379H98.3854V63.8921H100.302V56.3921H101.927C102.781 56.3921 103.552 56.9546 103.552 57.9963C103.552 59.0379 102.635 59.6213 101.594 59.6213C101.406 59.6213 101.219 59.6213 101.073 59.6004L103.49 63.8713H105.885L105.906 63.8921ZM83.9687 63.8921L87.2187 55.0379H85.427L83.1562 61.5379L80.9479 55.0379H78.7604L82.0729 63.8921H83.9687ZM94.8437 59.4546C94.8437 61.2671 93.6979 62.7254 92.2187 62.7254C90.7395 62.7254 89.5937 61.2671 89.5937 59.4546C89.5937 57.6421 90.7395 56.1838 92.2187 56.1838C93.6979 56.1838 94.8437 57.6421 94.8437 59.4546ZM92.2187 54.7671C89.6562 54.7671 87.5937 56.8713 87.5937 59.4546C87.5937 62.0379 89.677 64.1421 92.2187 64.1421C94.7604 64.1421 96.8645 62.0379 96.8645 59.4546C96.8645 56.8713 94.7812 54.7671 92.2187 54.7671ZM129.969 52.3296H131.156C129.073 49.1004 125.448 46.9546 121.323 46.9546C117.698 46.9546 114.448 48.6004 112.302 51.2046C110.156 48.6213 106.927 46.9546 103.281 46.9546C99.1562 46.9546 95.5312 49.1004 93.4479 52.3296H94.6354C96.5937 49.6629 99.7395 47.9338 103.281 47.9338C107.052 47.9338 110.385 49.8921 112.302 52.8504C114.219 49.8921 117.531 47.9338 121.323 47.9338C124.885 47.9338 128.031 49.6629 129.969 52.3296ZM135.01 63.8921L132.719 60.5171C133.323 60.2879 134.615 59.4546 134.615 57.9546C134.615 56.0588 133.156 55.0379 131.594 55.0379H127.49V63.8921H129.385V56.3921H131.01C131.865 56.3921 132.635 56.9546 132.635 57.9963C132.635 59.0379 131.719 59.6213 130.677 59.6213C130.49 59.6213 130.302 59.6213 130.156 59.6004L132.573 63.8713H134.969L135.01 63.8921ZM136.302 63.8921H138.198V55.0379H136.302V63.8921ZM144.24 63.8921L140.531 58.9754L143.823 55.0379H141.531L138.448 59.0796L141.698 63.8921H144.24Z" })
          ] })
        }
      );
    case "large":
      return /* @__PURE__ */ i.jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "152",
          height: "72",
          fill: "currentColor",
          viewBox: "0 0 152 72",
          className: A(r, e),
          children: /* @__PURE__ */ i.jsxs("g", { fill: "currentColor", children: [
            /* @__PURE__ */ i.jsx("path", { d: "M11.3841 13.7024H7.11618V19.9358C7.11618 20.4553 7.24253 20.8344 7.50928 21.073C7.77603 21.3117 8.15509 21.4521 8.64646 21.4802C9.13784 21.5082 9.76961 21.5082 10.4997 21.4661V24.976C7.84622 25.2708 5.96496 25.0321 4.88393 24.2319C3.78887 23.4316 3.25537 21.9996 3.25537 19.9499V13.7164H3.24133V6.96353L7.11618 5.79827V9.99602H11.3982V13.7164L11.3841 13.7024Z" }),
            /* @__PURE__ */ i.jsx("path", { d: "M21.5626 9.56077C23.2052 9.56077 24.5529 10.1083 25.6199 11.2174C26.6869 12.3265 27.2204 13.8428 27.2204 15.7802V24.99H23.3456V16.2575C23.3456 15.2607 23.0788 14.4886 22.5313 13.9691C21.9837 13.4497 21.2677 13.1689 20.3692 13.1689C19.3724 13.1689 18.5722 13.4777 17.9685 14.0955C17.3648 14.7132 17.07 15.6398 17.07 16.8893V24.99H13.1951V3.98717H17.07V11.6667C18.0106 10.2627 19.4988 9.56077 21.5345 9.56077H21.5626Z" }),
            /* @__PURE__ */ i.jsx("path", { d: "M33.8048 19.0794C34.3243 20.9607 35.7282 21.9013 38.0307 21.9013C39.5048 21.9013 40.6279 21.3959 41.3861 20.3991L44.5028 22.1961C43.0287 24.3301 40.8385 25.4111 37.9605 25.4111C35.4755 25.4111 33.496 24.667 31.9938 23.1648C30.4916 21.6626 29.7475 19.7814 29.7475 17.493C29.7475 15.2046 30.4916 13.3514 31.9657 11.8351C33.4398 10.3189 35.3492 9.5748 37.6656 9.5748C39.8698 9.5748 41.6809 10.3329 43.1129 11.8492C44.5449 13.3654 45.2609 15.2467 45.2609 17.493C45.2609 17.9984 45.2047 18.5178 45.1065 19.0794H33.8048ZM33.7487 16.075H41.4001C41.1755 15.0501 40.7262 14.292 40.0383 13.8006C39.3504 13.2952 38.5642 13.0565 37.6797 13.0565C36.6408 13.0565 35.7844 13.3233 35.0965 13.8568C34.4226 14.3903 33.9733 15.1344 33.7487 16.089V16.075Z" }),
            /* @__PURE__ */ i.jsx("path", { d: "M51.8173 12.5652C52.1823 11.6105 52.772 10.8804 53.6003 10.4031C54.4286 9.92577 55.3552 9.6871 56.3801 9.6871V14.0112C55.2008 13.8708 54.1478 14.1095 53.2212 14.7272C52.2947 15.3449 51.8314 16.3698 51.8314 17.8159V24.9759H47.9565V9.98192H51.8314V12.5652H51.8173Z" }),
            /* @__PURE__ */ i.jsx("path", { d: "M96.9537 23.1087C95.4094 24.639 93.5281 25.3971 91.3099 25.3971C89.0917 25.3971 87.2104 24.639 85.6942 23.1087C84.1639 21.5784 83.4058 19.7112 83.4058 17.493C83.4058 15.2748 84.1639 13.3935 85.6942 11.8772C87.2245 10.347 89.0917 9.58884 91.3099 9.58884C93.5281 9.58884 95.4094 10.347 96.9537 11.8772C98.498 13.4075 99.2561 15.2748 99.2561 17.493C99.2561 19.7112 98.484 21.5924 96.9537 23.1087ZM88.4178 20.4553C89.19 21.2415 90.1446 21.6205 91.3099 21.6205C92.4752 21.6205 93.4439 21.2274 94.216 20.4553C94.9882 19.6831 95.3813 18.6863 95.3813 17.493C95.3813 16.2996 94.9882 15.3028 94.216 14.5307C93.4439 13.7585 92.4611 13.3654 91.3099 13.3654C90.1587 13.3654 89.19 13.7585 88.4178 14.5307C87.6456 15.3169 87.2666 16.2996 87.2666 17.493C87.2666 18.6863 87.6456 19.6831 88.4178 20.4553Z" }),
            /* @__PURE__ */ i.jsx("path", { d: "M131.196 13.6462C130.48 13.6462 128.388 13.548 127.573 11.2876V24.976H131.406V13.6322C131.406 13.6322 131.266 13.6462 131.196 13.6462Z" }),
            /* @__PURE__ */ i.jsx("path", { d: "M131.069 11.2314C129.553 11.2314 128.444 10.2066 127.686 8.10068L127.363 7.2162L127.082 7.30044C126.815 7.38467 124.723 8.03048 123.713 8.73245C123.656 8.52186 123.6 8.31127 123.572 8.10068C123.305 6.26153 124.288 5.01203 126.661 4.15563L127.545 3.83273L127.461 3.55194C127.377 3.2852 126.731 1.19334 126.043 0.182511C126.254 0.126354 126.464 0.0701965 126.675 0.0421179C126.871 0.0140393 127.054 0 127.236 0C128.753 0 129.862 1.02487 130.62 3.13076L130.943 4.02928L131.224 3.94504C131.49 3.86081 133.582 3.215 134.593 2.51304C134.649 2.72363 134.705 2.93421 134.733 3.1448C135 4.98395 134.017 6.23345 131.645 7.08985L130.831 7.38468V7.59526C130.831 7.69354 131.532 9.98195 132.277 11.063C132.066 11.1191 131.855 11.1753 131.645 11.2034C131.448 11.2314 131.266 11.2455 131.083 11.2455L131.069 11.2314Z" }),
            /* @__PURE__ */ i.jsx("path", { d: "M148.759 24.9759H144.294L141.037 20.4272L137.78 24.9759H133.315L138.805 17.3245L133.554 9.98195H138.019L141.037 14.2078L144.07 9.98195H148.506L143.255 17.3105L148.745 24.9759H148.759Z" }),
            /* @__PURE__ */ i.jsx("path", { d: "M75.2068 9.56076C76.9196 9.56076 78.2954 10.1223 79.3343 11.2455C80.3732 12.3686 80.8786 13.8708 80.8786 15.7381V24.9759H77.0038V16.0048C77.0038 15.1063 76.7792 14.4043 76.344 13.8989C75.9087 13.3935 75.291 13.1548 74.4908 13.1548C73.6063 13.1548 72.9324 13.4496 72.441 14.0253C71.9497 14.6009 71.711 15.4432 71.711 16.5383V24.9619H67.8361V15.9908C67.8361 15.0922 67.6115 14.3903 67.1763 13.8849C66.7411 13.3795 66.1233 13.1408 65.3231 13.1408C64.4667 13.1408 63.7788 13.4356 63.2734 14.0112C62.7679 14.5868 62.5152 15.4292 62.5152 16.5243V24.9478H58.6404V9.98194H62.5152V11.5684C63.4138 10.2346 64.8036 9.56076 66.6849 9.56076C68.5662 9.56076 69.8859 10.2768 70.7563 11.7228C71.7531 10.2768 73.2413 9.56076 75.2208 9.56076H75.2068Z" }),
            /* @__PURE__ */ i.jsx("path", { d: "M118.574 9.56076C120.287 9.56076 121.663 10.1223 122.702 11.2455C123.741 12.3686 124.246 13.8708 124.246 15.7381V24.9759H120.371V16.0048C120.371 15.1063 120.147 14.4043 119.711 13.8989C119.276 13.3935 118.658 13.1548 117.858 13.1548C116.974 13.1548 116.3 13.4496 115.808 14.0253C115.317 14.6009 115.078 15.4432 115.078 16.5383V24.9619H111.204V15.9908C111.204 15.0922 110.979 14.3903 110.544 13.8849C110.109 13.3795 109.491 13.1408 108.691 13.1408C107.834 13.1408 107.146 13.4356 106.641 14.0112C106.135 14.5868 105.883 15.4292 105.883 16.5243V24.9478H102.008V9.98194H105.883V11.5684C106.781 10.2346 108.171 9.56076 110.052 9.56076C111.934 9.56076 113.253 10.2768 114.124 11.7228C115.121 10.2768 116.609 9.56076 118.588 9.56076H118.574Z" }),
            n && /* @__PURE__ */ i.jsx("path", { d: "M52.3205 64.4458H50.649C53.5814 68.9958 58.6839 72 64.5194 72C69.6219 72 74.1965 69.6958 77.1876 66.0792C80.208 69.6958 84.7826 72 89.8851 72C95.7206 72 100.852 68.9958 103.756 64.4458H102.084C99.3275 68.2083 94.8995 70.6292 89.8557 70.6292C84.548 70.6292 79.8561 67.8875 77.1583 63.7458C74.4604 67.8875 69.7978 70.6292 64.4901 70.6292C59.4756 70.6292 55.0183 68.1792 52.2618 64.4458M89.7971 58.7V55.3167H95.2221V53.3042H89.7971V50.3292H95.8672V48.3167H87.0993V60.7125H96.1605V58.7H89.7971ZM81.6742 60.7125L85.1638 48.3167H82.7592L80.5013 56.9208L78.5365 48.3167H76.0146L73.8739 56.95L71.8799 48.3167H68.8888L72.3491 60.7125H74.9883L76.953 52.7792L78.9764 60.7125H81.6742ZM68.1264 60.7125L64.9007 55.9875C65.7511 55.6667 67.5692 54.5 67.5692 52.4C67.5692 49.7458 65.5165 48.3167 63.3171 48.3167H57.5402V60.7125H60.2381V50.2125H62.5254C63.7277 50.2125 64.8127 51 64.8127 52.4583C64.8127 53.9167 63.5224 54.7333 62.0562 54.7333C61.7923 54.7333 61.5284 54.7333 61.3231 54.7042L64.7247 60.6833H68.097L68.1264 60.7125ZM37.2477 60.7125L41.8223 48.3167H39.3004L36.1041 57.4167L32.9957 48.3167H29.9166L34.5792 60.7125H37.2477ZM52.5551 54.5C52.5551 57.0375 50.9422 59.0792 48.8602 59.0792C46.7782 59.0792 45.1653 57.0375 45.1653 54.5C45.1653 51.9625 46.7782 49.9208 48.8602 49.9208C50.9422 49.9208 52.5551 51.9625 52.5551 54.5ZM48.8602 47.9375C45.2533 47.9375 42.3502 50.8833 42.3502 54.5C42.3502 58.1167 45.2826 61.0625 48.8602 61.0625C52.4378 61.0625 55.3995 58.1167 55.3995 54.5C55.3995 50.8833 52.4671 47.9375 48.8602 47.9375ZM101.996 44.525H103.668C100.735 40.0042 95.6327 37 89.8264 37C84.724 37 80.1494 39.3042 77.1289 42.95C74.1085 39.3333 69.5632 37 64.4315 37C58.6252 37 53.5228 40.0042 50.5903 44.525H52.2618C55.0183 40.7917 59.4463 38.3708 64.4315 38.3708C69.7392 38.3708 74.4311 41.1125 77.1289 45.2542C79.8268 41.1125 84.4894 38.3708 89.8264 38.3708C94.8409 38.3708 99.2689 40.7917 101.996 44.525ZM109.093 60.7125L105.867 55.9875C106.717 55.6667 108.535 54.5 108.535 52.4C108.535 49.7458 106.483 48.3167 104.283 48.3167H98.5065V60.7125H101.175V50.2125H103.462C104.665 50.2125 105.75 51 105.75 52.4583C105.75 53.9167 104.459 54.7333 102.993 54.7333C102.729 54.7333 102.465 54.7333 102.26 54.7042L105.662 60.6833H109.034L109.093 60.7125ZM110.911 60.7125H113.579V48.3167H110.911V60.7125ZM122.083 60.7125L116.864 53.8292L121.497 48.3167H118.271L113.931 53.975L118.506 60.7125H122.083Z" })
          ] })
        }
      );
  }
}, kp = ({
  className: e = "",
  size: t = "small",
  showVorwerkLogo: n = !0
}) => {
  const r = q8[t];
  return /* @__PURE__ */ i.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "71",
      height: "77",
      fill: "none",
      viewBox: "0 0 71 77",
      className: A(r, e),
      focusable: "false",
      children: [
        /* @__PURE__ */ i.jsxs("g", { fill: "#00AC46", clipPath: "url(#clip0_2651_398)", children: [
          /* @__PURE__ */ i.jsx(
            "path",
            {
              fillRule: "evenodd",
              d: "M29.456 5.737c0 .255-.203.46-.46.47-5.931.229-10.72 4.852-11.12 10.663a.474.474 0 01-.664.404.474.474 0 01-.29-.461c.375-6.345 5.58-11.41 12.038-11.657a.475.475 0 01.496.472v.11zM29.219 0C39.229 0 47.34 7.724 47.34 17.253c0 9.528-8.113 17.252-18.122 17.252a18.912 18.912 0 01-6.03-.98l-9.022 5.659 2.213-9.708.085.032-.06-.057c-3.28-3.122-5.309-7.435-5.309-12.198C11.096 7.724 19.21 0 29.22 0zm25.469 0c2.435 0 4.408 2.985 4.408 6.667 0 2.772-1.12 5.15-2.712 6.155V32.5c0 .986-.76 1.786-1.695 1.786-.938 0-1.696-.8-1.696-1.786V12.823C51.4 11.818 50.28 9.44 50.28 6.668c0-3.683 1.974-6.667 4.408-6.667V0z",
              clipRule: "evenodd"
            }
          ),
          n && /* @__PURE__ */ i.jsx("path", { d: "M17.062 70.249H15.79c2.234 3.484 6.12 5.784 10.564 5.784 3.886 0 7.37-1.764 9.648-4.534a12.547 12.547 0 009.67 4.534c4.444 0 8.352-2.3 10.563-5.784h-1.273a11.462 11.462 0 01-9.313 4.734c-4.042 0-7.615-2.099-9.67-5.27-2.054 3.171-5.605 5.27-9.648 5.27-3.818 0-7.213-1.876-9.312-4.734m28.586-4.4v-2.59h4.131v-1.541h-4.131V59.44h4.623v-1.541h-6.678v9.491h6.901v-1.54h-4.846zm-8.219 1.541h2.033l2.657-9.491h-1.831l-1.72 6.588-1.496-6.588h-1.92l-1.631 6.61-1.519-6.61h-2.277l2.635 9.491h2.01l1.496-6.074 1.541 6.074h.022zm-8.285 0l-2.457-3.618c.648-.245 2.032-1.139 2.032-2.747 0-2.032-1.563-3.126-3.238-3.126h-4.4v9.491h2.055v-8.04h1.742c.916 0 1.742.603 1.742 1.72s-.983 1.742-2.1 1.742c-.2 0-.401 0-.557-.022l2.59 4.578h2.569l.022.022zm-23.517 0L9.067 57.9h-1.92l-2.435 6.968-2.367-6.968H0l3.55 9.491h2.033zm11.658-4.757c0 1.943-1.228 3.506-2.814 3.506s-2.814-1.563-2.814-3.506c0-1.943 1.228-3.506 2.814-3.506s2.814 1.563 2.814 3.506zm-2.814-5.025c-2.747 0-4.958 2.256-4.958 5.025 0 2.77 2.233 5.025 4.958 5.025s4.98-2.255 4.98-5.025c0-2.769-2.233-5.025-4.98-5.025zm40.467-2.613h1.273c-2.233-3.461-6.119-5.761-10.54-5.761-3.887 0-7.37 1.764-9.671 4.555-2.3-2.769-5.762-4.556-9.67-4.556-4.422 0-8.308 2.3-10.541 5.762h1.273c2.099-2.858 5.471-4.712 9.268-4.712 4.042 0 7.615 2.1 9.67 5.27 2.055-3.17 5.606-5.27 9.67-5.27 3.82 0 7.191 1.854 9.268 4.712zM60.3 67.39l-2.457-3.618c.648-.245 2.033-1.139 2.033-2.747 0-2.032-1.564-3.126-3.239-3.126h-4.4v9.491h2.033v-8.04h1.742c.916 0 1.742.603 1.742 1.72s-.983 1.742-2.1 1.742c-.2 0-.401 0-.558-.022l2.59 4.578h2.57l.044.022zm1.385 0h2.032V57.9h-2.032v9.491zm8.508 0l-3.975-5.27 3.529-4.221h-2.457l-3.305 4.332 3.484 5.16h2.724z" })
        ] }),
        /* @__PURE__ */ i.jsx("defs", { children: /* @__PURE__ */ i.jsx("clipPath", { id: "clip0_2651_398", children: /* @__PURE__ */ i.jsx("path", { fill: "#fff", d: "M0 0H70.192V76.033H0z" }) }) })
      ]
    }
  );
}, Zp = ({ className: e = "", size: t = "small" }) => {
  const n = U8[t];
  return /* @__PURE__ */ i.jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "190",
      height: "72",
      fill: "none",
      viewBox: "0 0 190 72",
      className: A(n, e),
      focusable: "false",
      children: [
        /* @__PURE__ */ i.jsx("g", { clipPath: "url(#clip0_1707_1691)", children: /* @__PURE__ */ i.jsx(
          "path",
          {
            fill: "currentColor",
            d: "M46.264 56.437h-3.395C48.847 65.796 59.333 72 71.275 72a33.547 33.547 0 0025.943-12.213C103.392 67.238 112.736 72 123.176 72c11.942 0 22.427-6.204 28.406-15.578h-3.41c-5.618 7.737-14.721 12.754-24.996 12.754-10.891 0-20.46-5.633-25.958-14.136-5.498 8.503-15.067 14.136-25.943 14.136-10.29 0-19.393-5.017-24.996-12.739m76.807-11.807v-6.955h11.086v-4.131h-11.086v-6.129h12.453v-4.131h-17.936v25.492h18.507v-4.13h-13.024v-.016zm-22.068 4.131h5.453l7.151-25.492h-4.912l-4.597 17.68-4.011-17.68h-5.168l-4.356 17.756-4.07-17.756h-6.115L87.47 48.76h5.407l4.026-16.344 4.116 16.344zm-22.262 0l-6.58-9.704c1.728-.646 5.483-3.05 5.483-7.376 0-5.438-4.22-8.412-8.667-8.412H57.184V48.76h5.498V27.175h4.672c2.479 0 4.687 1.607 4.687 4.641 0 3.035-2.674 4.702-5.633 4.702-.57 0-1.052 0-1.472-.06l6.94 12.303h6.88zm-63.182 0l9.388-25.492h-5.167l-6.52 18.747v-.045L6.906 23.27H.627l9.539 25.492H15.574zM46.91 35.962c0 5.213-3.32 9.434-7.541 9.434-4.222 0-7.541-4.22-7.541-9.434 0-5.212 3.32-9.433 7.54-9.433 4.222 0 7.541 4.22 7.541 9.433zm-7.541-13.52c-7.376 0-13.355 6.055-13.355 13.52 0 7.466 5.979 13.52 13.354 13.52 7.376 0 13.355-6.054 13.355-13.52 0-7.465-5.979-13.52-13.355-13.52zm108.743-7h3.41C145.528 6.145 135.073-.014 123.191-.014c-10.44 0-19.784 4.762-25.958 12.213C91.043 4.762 81.715 0 71.26 0 59.378 0 48.922 6.174 42.944 15.473h3.41C51.972 7.81 61.045 2.824 71.275 2.824c10.89 0 20.46 5.633 25.958 14.136C102.73 8.457 112.3 2.824 123.19 2.824c10.23 0 19.303 4.972 24.921 12.634m14.541 33.318l-6.579-9.704c1.727-.646 5.483-3.05 5.483-7.376 0-5.438-4.221-8.412-8.668-8.412h-11.807v25.492h5.483V27.19h4.687c2.478 0 4.687 1.607 4.687 4.641 0 3.035-2.674 4.702-5.634 4.702-.571 0-1.051 0-1.472-.06l6.94 12.303h6.88zm3.726 0h5.483V23.27h-5.483v25.507zm22.863 0L178.577 34.64l9.478-11.341h-6.579l-8.893 11.642 9.358 13.85h7.316l-.015-.015z"
          }
        ) }),
        /* @__PURE__ */ i.jsx("defs", { children: /* @__PURE__ */ i.jsx("clipPath", { id: "clip0_1707_1691", children: /* @__PURE__ */ i.jsx(
          "path",
          {
            fill: "#fff",
            d: "M0 0H188.615V72H0z",
            transform: "translate(.627)"
          }
        ) }) })
      ]
    }
  );
};
var G8 = { lightGrey: "wl5grib", blue: "wl5gric", green: "wl5grid", orange: "wl5grie", red: "wl5grif", white: "wl5grig", black: "wl5grih" }, K8 = { imageFill: "wl5gri9 wl5gri8", colorFill: "wl5gria wl5gri8" }, Y8 = { imageFill: "wl5gri3 wl5gri2", colorFill: "wl5gri4 wl5gri2" }, X8 = { imageFill: "wl5gri6 wl5gri5", colorFill: "wl5gri7 wl5gri5" }, J8 = "wl5gri1", Q8 = "wl5gri0";
const Bp = ({
  image: e,
  video: t,
  headline: n,
  infoList: r,
  cta: s,
  type: o = "imageFill",
  backgroundColor: a = "lightGrey",
  isLandingPage: l = !1,
  icon: c
}) => {
  const f = tt()[0] >= Number(nt.l.replace("px", "")), u = l ? Q8 : "", h = o === "colorFill" ? G8[a] : "";
  return /* @__PURE__ */ i.jsxs("div", { className: A(Y8[o], h, u), children: [
    /* @__PURE__ */ i.jsxs("div", { className: X8[o], children: [
      o === "imageFill" && t && /* @__PURE__ */ i.jsx("div", { children: t }),
      e
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: A(K8[o], u), children: [
      /* @__PURE__ */ i.jsx("div", { children: n }),
      /* @__PURE__ */ i.jsx("div", { children: Ne.map(s, (p) => Ht(p) ? ht(p, {
        layout: f ? "horizontal" : "vertical",
        children: Ne.map(p.props.children, (v) => Ht(v) ? ht(v, {
          size: f ? "large" : "medium",
          icon: c
        }) : v)
      }) : p) }),
      r && /* @__PURE__ */ i.jsx("div", { className: J8, children: r })
    ] })
  ] });
};
var ef = "bb4ht01", tf = "bb4ht03", nf = "bb4ht0c", rf = "bb4ht00", sf = { default: "bb4ht0e bb4ht0d", additional: "bb4ht0f bb4ht0d" }, of = { green: "bb4ht04", blue: "bb4ht05", purple: "bb4ht06", red: "bb4ht07", orange: "bb4ht08", yellow: "bb4ht09", anthracite: "bb4ht0a", white: "bb4ht0b" }, af = "bb4ht02";
const Dp = ({
  children: e,
  eyebrowLine: t,
  subline: n,
  spaceBelow: r,
  strongColor: s = "green"
}) => {
  const o = r ? sf[r] : "", a = n ? nf : "", l = of[s];
  return /* @__PURE__ */ i.jsxs("div", { className: A(o, rf, l), children: [
    t && /* @__PURE__ */ i.jsx("p", { className: ef, children: t }),
    /* @__PURE__ */ i.jsx(
      "div",
      {
        className: A(tf, a),
        children: e
      }
    ),
    n && /* @__PURE__ */ i.jsx("p", { className: af, children: n })
  ] });
};
var lf = "zjytp2", cf = "zjytp1", uf = "zjytp0";
const Np = ({
  logo: e,
  text: t,
  images: n
}) => /* @__PURE__ */ i.jsxs("div", { className: A(Fe, uf), children: [
  /* @__PURE__ */ i.jsxs("div", { className: cf, children: [
    e,
    /* @__PURE__ */ i.jsx("div", { children: t })
  ] }),
  /* @__PURE__ */ i.jsx("div", { className: lf, children: n })
] });
var df = "_1llv8oz1", ff = { spacingVertical: "_1llv8oz2 _1llv8oz0", spacingBottom: "_1llv8oz3 _1llv8oz0" };
const Op = ({
  children: e,
  variant: t = "spacingVertical",
  borderBottom: n
}) => {
  const r = n ? df : "";
  return /* @__PURE__ */ i.jsx(
    "section",
    {
      className: A(
        ff[t],
        r
      ),
      children: /* @__PURE__ */ i.jsx(I4, { children: e })
    }
  );
};
var hf = "qtlqkt0";
const $p = ({ children: e }) => /* @__PURE__ */ i.jsx("div", { className: A(hf, Fe), children: e });
var pf = "_1u0x3zt0";
const Ip = ({ children: e }) => /* @__PURE__ */ i.jsx("div", { className: A(pf, Fe), children: e });
var mf = "_19agmar2", vf = "_19agmar1", gf = "_19agmar0";
const zp = ({
  headline: e,
  button: t
}) => /* @__PURE__ */ i.jsxs("div", { className: A(Fe, gf), children: [
  /* @__PURE__ */ i.jsx("div", { className: vf, children: e }),
  /* @__PURE__ */ i.jsx("div", { className: mf, children: t })
] }), xf = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M3 12a9 9 0 1 1 18.001.001A9 9 0 0 1 3 12Zm2.06-1.92c-.17.61-.26 1.25-.26 1.92s.09 1.31.26 1.92h2.97c-.07-.63-.11-1.27-.11-1.92s.04-1.29.11-1.92H5.06Zm.77-1.8h2.49c.23-1.05.55-2.04.95-2.95a7.234 7.234 0 0 0-3.44 2.95Zm5.73-3.47c-.59.97-1.07 2.16-1.39 3.47h3.64c-.33-1.31-.81-2.5-1.4-3.47-.14 0-.28-.01-.42-.01-.15 0-.29 0-.44.01Zm3.15.51c.4.91.73 1.91.96 2.96h2.5a7.255 7.255 0 0 0-3.46-2.96Zm4.24 4.76h-2.98c.07.63.11 1.27.11 1.92s-.04 1.29-.11 1.92h2.98c.17-.61.26-1.25.26-1.92s-.09-1.31-.26-1.92Zm-.77 5.64h-2.5c-.23 1.05-.56 2.05-.96 2.96a7.202 7.202 0 0 0 3.46-2.96Zm-5.75 3.47c.59-.97 1.07-2.16 1.4-3.47h-3.65c.32 1.31.8 2.5 1.38 3.47.15 0 .3.01.44.01s.28 0 .42-.01Zm-3.15-.52c-.4-.91-.72-1.9-.94-2.95H5.85c.79 1.31 2 2.36 3.43 2.95Zm.58-4.75h4.31c.08-.63.12-1.27.12-1.92s-.04-1.29-.12-1.92H9.86c-.08.63-.12 1.27-.12 1.92s.04 1.29.12 1.92Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
);
var wf = "_16ls4wa1", yf = "_16ls4wa0", Cf = "_16ls4wa4", bf = "_16ls4wa9", _f = "_16ls4wa3", jf = "_16ls4wa8", Sf = "_16ls4wa5", Mf = "_16ls4wa2", Lf = "_16ls4waa", Tf = "_16ls4wa6", Vf = "_16ls4wa7";
let pa = 0;
const Pf = ({
  children: e,
  isActive: t,
  setIsActive: n,
  setIsClosing: r
}) => tt()[0] < Number(nt.m.replace("px", "")) ? /* @__PURE__ */ i.jsxs(
  he,
  {
    isOpen: t,
    onClose: () => n(!1),
    detent: "content-height",
    children: [
      /* @__PURE__ */ i.jsxs(he.Container, { children: [
        /* @__PURE__ */ i.jsx(he.Header, { children: /* @__PURE__ */ i.jsx(Ki, {}) }),
        /* @__PURE__ */ i.jsx(he.Content, { children: /* @__PURE__ */ i.jsx(Mr, { children: /* @__PURE__ */ i.jsx("div", { className: bf, children: e }) }) })
      ] }),
      /* @__PURE__ */ i.jsx(he.Backdrop, { onTap: () => n(!1) })
    ]
  }
) : /* @__PURE__ */ i.jsxs(
  $n,
  {
    open: t,
    modal: !0,
    onOpenChange: (a) => {
      a || (r(!0), clearTimeout(pa), pa = window.setTimeout(() => {
        r(!1);
      }, 200)), n(a);
    },
    children: [
      /* @__PURE__ */ i.jsx(li, { className: _f }),
      /* @__PURE__ */ i.jsx(In, { className: wf, children: /* @__PURE__ */ i.jsx(Mr, { children: /* @__PURE__ */ i.jsxs("div", { className: Mf, children: [
        /* @__PURE__ */ i.jsx(
          Ka,
          {
            onClick: () => n(!1),
            icon: /* @__PURE__ */ i.jsx(jr, {})
          }
        ),
        e
      ] }) }) })
    ]
  }
), Fp = ({
  title: e,
  buttonLabel: t,
  modalTitle: n,
  suggestedLanguages: r,
  suggestedLabel: s,
  languages: o
}) => {
  const [a, l] = N(!1), [c, d] = N(!1);
  return B(() => {
    const f = (u) => {
      if (u.key === "Escape")
        return l(!1);
    };
    window.addEventListener("keydown", f);
  }, []), /* @__PURE__ */ i.jsxs("div", { className: yf, children: [
    e,
    /* @__PURE__ */ i.jsxs(
      "button",
      {
        onClick: () => {
          c || l(!a);
        },
        className: Lf,
        children: [
          /* @__PURE__ */ i.jsx(xf, {}),
          /* @__PURE__ */ i.jsx(Ce, { variant: "paragraph16", fontWeight: "medium", children: t })
        ]
      }
    ),
    /* @__PURE__ */ i.jsxs(
      Pf,
      {
        isActive: a,
        setIsActive: l,
        setIsClosing: d,
        children: [
          /* @__PURE__ */ i.jsx(
            Ce,
            {
              component: "h3",
              fontWeight: "bold",
              className: jf,
              children: n
            }
          ),
          /* @__PURE__ */ i.jsxs("div", { className: Cf, children: [
            /* @__PURE__ */ i.jsx(
              Ce,
              {
                variant: "paragraph12",
                fontWeight: "regular",
                className: Vf,
                children: s
              }
            ),
            (r == null ? void 0 : r.length) > 0 && /* @__PURE__ */ i.jsx("div", { className: Tf, children: r.map((f, u) => /* @__PURE__ */ i.jsx("div", { children: f }, u)) }),
            /* @__PURE__ */ i.jsx("div", { className: Sf, children: o == null ? void 0 : o.map((f, u) => /* @__PURE__ */ i.jsx("div", { children: f }, u)) })
          ] })
        ]
      }
    )
  ] });
}, qp = (e) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    focusable: "false",
    ...e,
    width: "24",
    height: "16",
    viewBox: "0 0 24 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [
      /* @__PURE__ */ i.jsxs("g", { clipPath: "url(#clip0_1858_5368)", children: [
        /* @__PURE__ */ i.jsx("path", { d: "M0 10.6667H24V16H0V10.6667Z", fill: "#FFCE00" }),
        /* @__PURE__ */ i.jsx("path", { d: "M0 0H24V5.33333H0V0Z", fill: "black" }),
        /* @__PURE__ */ i.jsx("path", { d: "M0 5.33334H24V10.6667H0V5.33334Z", fill: "#DD0000" })
      ] }),
      /* @__PURE__ */ i.jsx(
        "rect",
        {
          x: "0.5",
          y: "0.5",
          width: "23",
          height: "15",
          stroke: "black",
          strokeOpacity: "0.2"
        }
      ),
      /* @__PURE__ */ i.jsx("defs", { children: /* @__PURE__ */ i.jsx("clipPath", { id: "clip0_1858_5368", children: /* @__PURE__ */ i.jsx("rect", { width: "24", height: "16", fill: "white" }) }) })
    ]
  }
), Wp = (e) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    focusable: "false",
    ...e,
    children: [
      /* @__PURE__ */ i.jsxs("g", { clipPath: "url(#clip0_2050_3075)", children: [
        /* @__PURE__ */ i.jsx(
          "mask",
          {
            id: "mask0_2050_3075",
            style: { maskType: "luminance" },
            width: "32",
            height: "32",
            x: "0",
            y: "0",
            maskUnits: "userSpaceOnUse",
            children: /* @__PURE__ */ i.jsx(
              "path",
              {
                fill: "#fff",
                d: "M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16z"
              }
            )
          }
        ),
        /* @__PURE__ */ i.jsxs("g", { mask: "url(#mask0_2050_3075)", children: [
          /* @__PURE__ */ i.jsx(
            "path",
            {
              fill: "currentColor",
              d: "M16.005 0c-6.68 0-8.633.007-9.013.038-1.37.114-2.224.33-3.153.793A6.386 6.386 0 002 2.177C.985 3.231.37 4.528.147 6.07c-.108.748-.14.9-.146 4.723-.002 1.275 0 2.951 0 5.2 0 6.677.007 8.63.04 9.008.11 1.335.32 2.174.762 3.092a6.741 6.741 0 004.369 3.57c.66.17 1.388.263 2.323.308.396.017 4.435.029 8.476.029 4.04 0 8.082-.005 8.468-.025 1.083-.05 1.712-.135 2.407-.315a6.699 6.699 0 004.368-3.577c.435-.896.655-1.767.755-3.032.021-.276.03-4.671.03-9.062 0-4.39-.01-8.778-.031-9.054-.1-1.285-.321-2.15-.77-3.062a6.343 6.343 0 00-1.37-1.877C28.77.985 27.477.369 25.934.146c-.747-.108-.896-.14-4.72-.146h-5.209.001z"
            }
          ),
          /* @__PURE__ */ i.jsx(
            "path",
            {
              style: {
                fill: `${kt.color.icon.inverted}`
              },
              d: "M16.001 5.76c-2.781 0-3.13.012-4.222.062-1.09.05-1.835.222-2.486.476a5.015 5.015 0 00-1.814 1.18c-.57.57-.92 1.141-1.182 1.814-.253.651-.426 1.396-.475 2.486-.05 1.092-.062 1.441-.062 4.222 0 2.78.012 3.129.062 4.221.05 1.09.222 1.834.475 2.486a5.016 5.016 0 001.181 1.814c.57.57 1.14.92 1.814 1.181.651.254 1.396.426 2.486.476 1.092.05 1.44.062 4.221.062s3.13-.012 4.222-.062c1.09-.05 1.835-.222 2.487-.476a5.01 5.01 0 001.812-1.181c.57-.57.92-1.14 1.182-1.814.252-.651.425-1.396.476-2.486.049-1.092.062-1.44.062-4.22 0-2.782-.013-3.13-.062-4.223-.051-1.09-.224-1.835-.476-2.486a5.026 5.026 0 00-1.182-1.814c-.57-.57-1.139-.92-1.813-1.18-.653-.254-1.398-.427-2.487-.476-1.093-.05-1.44-.062-4.222-.062H16zm-.919 1.846h.919c2.734 0 3.058.01 4.138.058.998.046 1.54.213 1.901.353.478.186.819.407 1.177.766.358.358.58.7.766 1.177.14.361.307.903.353 1.901.049 1.08.06 1.404.06 4.137 0 2.733-.011 3.057-.06 4.136-.046.999-.213 1.54-.353 1.901a3.167 3.167 0 01-.766 1.177c-.359.358-.699.58-1.177.765-.36.141-.903.308-1.901.353-1.08.05-1.404.06-4.138.06s-3.058-.01-4.138-.06c-.998-.046-1.54-.212-1.901-.353a3.172 3.172 0 01-1.178-.765 3.177 3.177 0 01-.766-1.177c-.14-.361-.308-.903-.353-1.901-.049-1.08-.059-1.404-.059-4.138 0-2.735.01-3.057.06-4.137.045-.998.212-1.54.352-1.901.185-.478.408-.82.766-1.178.358-.358.7-.58 1.178-.766.36-.141.903-.307 1.901-.353.945-.043 1.31-.055 3.22-.058v.003zm6.385 1.7a1.229 1.229 0 100 2.458 1.229 1.229 0 000-2.459zm-5.466 1.436a5.259 5.259 0 100 10.517 5.259 5.259 0 000-10.517zm0 1.845a3.413 3.413 0 110 6.827 3.413 3.413 0 010-6.827z"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ i.jsx("defs", { children: /* @__PURE__ */ i.jsx("clipPath", { id: "clip0_2050_3075", children: /* @__PURE__ */ i.jsx("path", { fill: "#fff", d: "M0 0H32V32H0z" }) }) })
    ]
  }
), Up = (e) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    focusable: "false",
    ...e,
    children: [
      /* @__PURE__ */ i.jsx("g", { clipPath: "url(#a)", children: /* @__PURE__ */ i.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M16 0C7.164 0 0 7.164 0 16c0 6.778 4.217 12.573 10.169 14.904-.14-1.265-.266-3.213.055-4.594.291-1.249 1.877-7.953 1.877-7.953s-.478-.959-.478-2.375c0-2.225 1.289-3.886 2.894-3.886 1.366 0 2.024 1.024 2.024 2.253 0 1.372-.874 3.425-1.325 5.326-.376 1.592.799 2.892 2.37 2.892 2.844 0 5.029-2.998 5.029-7.327 0-3.83-2.753-6.51-6.683-6.51-4.553 0-7.225 3.415-7.225 6.945 0 1.374.53 2.85 1.19 3.651.131.158.15.298.111.459-.12.505-.39 1.592-.444 1.814-.07.293-.231.356-.534.215-2-.93-3.248-3.852-3.248-6.198 0-5.048 3.668-9.682 10.572-9.682 5.55 0 9.864 3.954 9.864 9.24s-3.477 9.952-8.303 9.952c-1.621 0-3.146-.843-3.668-1.837 0 0-.802 3.055-.997 3.803-.36 1.39-1.336 3.132-1.988 4.194 1.497.464 3.088.714 4.737.714 8.836 0 16-7.164 16-16S24.836 0 16 0Z"
        }
      ) }),
      /* @__PURE__ */ i.jsx("defs", { children: /* @__PURE__ */ i.jsx("clipPath", { id: "a", children: /* @__PURE__ */ i.jsx("path", { fill: "#fff", d: "M0 0h32v32H0z" }) }) })
    ]
  }
), Gp = (e) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    focusable: "false",
    ...e,
    children: [
      /* @__PURE__ */ i.jsxs("g", { clipPath: "url(#a)", children: [
        /* @__PURE__ */ i.jsx(
          "path",
          {
            fill: "currentColor",
            d: "M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16Z"
          }
        ),
        /* @__PURE__ */ i.jsx(
          "path",
          {
            style: {
              fill: `${kt.color.icon.inverted}`
            },
            d: "M26.222 10.866a2.672 2.672 0 0 0-1.887-1.887C22.67 8.533 16 8.533 16 8.533s-6.67 0-8.335.446a2.676 2.676 0 0 0-1.886 1.887C5.334 12.53 5.334 16 5.334 16s0 3.47.446 5.134c.244.917.967 1.64 1.886 1.887 1.664.445 8.335.445 8.335.445s6.67 0 8.334-.445a2.676 2.676 0 0 0 1.887-1.887c.445-1.664.445-5.134.445-5.134s0-3.47-.445-5.134ZM13.867 19.2v-6.4L19.41 16l-5.542 3.2Z"
          }
        )
      ] }),
      /* @__PURE__ */ i.jsx("defs", { children: /* @__PURE__ */ i.jsx("clipPath", { id: "a", children: /* @__PURE__ */ i.jsx("path", { fill: "#fff", d: "M0 0h32v32H0z" }) }) })
    ]
  }
), Kp = (e) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    focusable: "false",
    ...e,
    children: [
      /* @__PURE__ */ i.jsxs("g", { clipPath: "url(#a)", children: [
        /* @__PURE__ */ i.jsx(
          "path",
          {
            fill: "currentColor",
            d: "M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16Z"
          }
        ),
        /* @__PURE__ */ i.jsx(
          "path",
          {
            style: {
              fill: `${kt.color.icon.inverted}`
            },
            fillRule: "evenodd",
            d: "M14.197 11.25c0 .099-.08.18-.18.183-2.325.09-4.202 1.902-4.36 4.18a.186.186 0 0 1-.186.173.187.187 0 0 1-.187-.195c.147-2.488 2.187-4.473 4.719-4.57a.186.186 0 0 1 .194.185v.043ZM14.104 9c3.924 0 7.104 3.028 7.104 6.763s-3.18 6.763-7.104 6.763a7.415 7.415 0 0 1-2.363-.384L8.204 24.36l.867-3.805.034.012-.024-.022C7.795 19.32 7 17.63 7 15.763 7 12.028 10.18 9 14.104 9Zm9.984 0c.955 0 1.728 1.17 1.728 2.614 0 1.086-.439 2.018-1.063 2.412v7.714c0 .387-.298.7-.665.7-.367 0-.664-.313-.664-.7v-7.713c-.625-.394-1.064-1.326-1.064-2.413 0-1.444.774-2.614 1.728-2.614Z",
            clipRule: "evenodd"
          }
        )
      ] }),
      /* @__PURE__ */ i.jsx("defs", { children: /* @__PURE__ */ i.jsx("clipPath", { id: "a", children: /* @__PURE__ */ i.jsx("path", { fill: "#fff", d: "M0 0h32v32H0z" }) }) })
    ]
  }
), Yp = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    focusable: "false",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M12.44 3.33c-.98 1.01-1.43 1.75-1.86 3.1-1.11 3.42 3.01 5.21 2.73 8.79-.17 2.23-1.58 3.53-2.73 5.45M5.59 5.24C4.61 6.14 4.16 6.8 3.73 8c-1.11 3.04 3.01 4.64 2.73 7.83-.17 1.98-1.58 3.14-2.73 4.85M19.58 5.25c-.98.9-1.43 1.56-1.86 2.76-1.11 3.04 3.01 4.64 2.73 7.83-.17 1.98-1.58 3.14-2.73 4.85",
        "data-name": "high-temperature-CI/CD",
        strokeWidth: 1.2,
        fill: "none",
        stroke: "currentColor"
      }
    )
  }
);
var Ef = "_12sdaeq0", Rf = "_12sdaeq1";
const Xp = ({ children: e }) => /* @__PURE__ */ i.jsx("div", { className: A(Ef, Fe), children: e }), Jp = ({
  header: e,
  links: t
}) => (
  // <DarkTheme>
  /* @__PURE__ */ i.jsxs("div", { className: A(Rf, ja), children: [
    e,
    t && /* @__PURE__ */ i.jsx("ul", { children: t.map((n, r) => /* @__PURE__ */ i.jsx("li", { children: n }, r)) })
  ] })
), Qp = (e) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    focusable: "false",
    ...e,
    children: [
      /* @__PURE__ */ i.jsxs("g", { clipPath: "url(#a)", children: [
        /* @__PURE__ */ i.jsx(
          "path",
          {
            fill: "currentColor",
            d: "M32 16c0-8.837-7.163-16-16-16S0 7.163 0 16c0 7.986 5.85 14.606 13.5 15.806V20.625H9.435V16H13.5v-3.525c0-4.01 2.39-6.224 6.045-6.224 1.751 0 3.581.313 3.581.313V10.5h-2.017c-1.986 0-2.607 1.232-2.607 2.498V16h4.437l-.709 4.625h-3.728v11.18C26.15 30.607 32 23.986 32 16Z"
          }
        ),
        /* @__PURE__ */ i.jsx(
          "path",
          {
            fill: "none",
            d: "M22.227 20.625 22.936 16h-4.438v-3c0-1.267.619-2.5 2.608-2.5h2.017V6.565s-1.83-.313-3.582-.313c-3.655 0-6.044 2.214-6.044 6.224V16H9.434v4.625h4.063v11.18a16.11 16.11 0 0 0 5.001 0v-11.18h3.729Z"
          }
        )
      ] }),
      /* @__PURE__ */ i.jsx("defs", { children: /* @__PURE__ */ i.jsx("clipPath", { id: "a", children: /* @__PURE__ */ i.jsx("path", { fill: "none", d: "M0 0h32v32H0z" }) }) })
    ]
  }
);
var Hf = "_1l2267a0", Af = "_1l2267a1", De = { two: "_1l2267a2", three: "_1l2267a3", four: "_1l2267a4", five: "_1l2267a5", six: "_1l2267a6", seven: "_1l2267a7", eight: "_1l2267a8", nine: "_1l2267a9", ten: "_1l2267aa", eleven: "_1l2267ab", twelve: "_1l2267ac" };
const em = ({ children: e }) => /* @__PURE__ */ i.jsx("div", { className: Hf, children: e }), tm = ({
  children: e,
  columns: t = 1,
  className: n = ""
}) => {
  let r = "";
  switch (t) {
    case 2:
      r = De.two;
      break;
    case 3:
      r = De.three;
      break;
    case 4:
      r = De.four;
      break;
    case 5:
      r = De.five;
      break;
    case 6:
      r = De.six;
      break;
    case 7:
      r = De.seven;
      break;
    case 8:
      r = De.eight;
      break;
    case 9:
      r = De.nine;
      break;
    case 10:
      r = De.ten;
      break;
    case 11:
      r = De.eleven;
      break;
    case 12:
      r = De.twelve;
      break;
    default:
      r = "";
      break;
  }
  return /* @__PURE__ */ i.jsx("div", { className: A(Af, r, n), children: e });
}, nm = ({
  shadowType: e,
  children: t,
  className: n = ""
}) => {
  const r = Dr[e];
  return /* @__PURE__ */ i.jsx("div", { className: A(r, n), children: t });
};
var ma = "_1gbfig05", kf = { inGrid: "_1gbfig01 _1gbfig00", fullWidth: "_1gbfig02 _1gbfig00" }, Zf = { left: "_1gbfig03", right: "_1gbfig04" }, Bf = "_1gbfig06", Df = "_1gbfig07";
const rm = ({
  layout: e = "inGrid",
  mediaAlignment: t = "left",
  media: n,
  headline: r,
  paragraph: s,
  buttonGroup: o
}) => /* @__PURE__ */ i.jsxs(
  "div",
  {
    className: A(
      kf[e],
      Zf[t],
      e === "inGrid" ? Fe : ""
    ),
    children: [
      /* @__PURE__ */ i.jsx(
        "div",
        {
          className: A(
            ma,
            e === "fullWidth" ? Df : ""
          ),
          children: n
        }
      ),
      /* @__PURE__ */ i.jsxs("div", { className: A(ma, Bf), children: [
        /* @__PURE__ */ i.jsxs("div", { children: [
          r,
          s
        ] }),
        /* @__PURE__ */ i.jsx("div", { children: o })
      ] })
    ]
  }
);
var Nf = { purple: "_1mubyh30", green: "_1mubyh31", yellow: "_1mubyh32", orange: "_1mubyh33", red: "_1mubyh34", blue: "_1mubyh35" }, Of = "_1mubyh39", $f = { "5 degrees": "_1mubyh36", "-5 degrees": "_1mubyh37", none: "_1mubyh38" }, If = { small: "_1mubyh3b", medium: "_1mubyh3c", large: "_1mubyh3d" }, zf = "_1mubyh3a";
const Ff = ({
  firstLine: e,
  secondLine: t,
  thirdLine: n,
  buttonSize: r,
  backgroundColor: s = "purple",
  rotation: o = "none",
  size: a = "small"
}) => /* @__PURE__ */ i.jsx(
  "div",
  {
    className: A(
      Of,
      Nf[s],
      If[a]
    ),
    style: r ? { "--eyecatcherButtonSize": r } : {},
    children: /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: A(
          zf,
          $f[o]
        ),
        children: [
          e && /* @__PURE__ */ i.jsx(Ce, { variant: "paragraph16", fontWeight: "regular", children: e }),
          t && /* @__PURE__ */ i.jsx(Ce, { variant: "paragraph16", fontWeight: "bold", children: t }),
          n && /* @__PURE__ */ i.jsx(Ce, { variant: "paragraph16", fontWeight: "regular", children: n })
        ]
      }
    )
  }
);
var qf = { "3/2": "_8a58ly1", "1/1": "_8a58ly2", "4/3": "_8a58ly3", "16/9": "_8a58ly4", "2/1": "_8a58ly5", "21/9": "_8a58ly6", "3/1": "_8a58ly7", "4/1": "_8a58ly8", "n/a": "_8a58ly9" }, Wf = "_8a58ly0";
const Uf = ({
  children: e,
  aspectRatio: t
}) => /* @__PURE__ */ i.jsx(
  "div",
  {
    className: A(qf[t], Wf),
    children: e
  }
);
var Gf = "_1wj0mv72", Kf = "_1wj0mv70", Yf = { small: "_1wj0mv74 _1wj0mv73", medium: "_1wj0mv75 _1wj0mv73", large: "_1wj0mv76 _1wj0mv73" }, Xf = "_1wj0mv77", Jf = "_1wj0mv71";
const Qf = ({
  size: e = "medium",
  stock: t,
  price: n,
  lowestPrice: r,
  basePrice: s,
  vat: o,
  delivery: a
}) => /* @__PURE__ */ i.jsxs("div", { className: Kf, children: [
  /* @__PURE__ */ i.jsxs("div", { className: Jf, children: [
    /* @__PURE__ */ i.jsx("span", { className: Yf[e], children: n }),
    r && /* @__PURE__ */ i.jsx(
      Ce,
      {
        variant: "paragraph12",
        component: "span",
        className: Gf,
        children: r
      }
    )
  ] }),
  t ? /* @__PURE__ */ i.jsx(
    Ce,
    {
      variant: "paragraph10",
      fontWeight: "bold",
      className: Xf,
      children: t
    }
  ) : /* @__PURE__ */ i.jsxs("div", { children: [
    s && /* @__PURE__ */ i.jsx(Ce, { variant: "paragraph10", fontWeight: "regular", children: s }),
    o && /* @__PURE__ */ i.jsx(Ce, { variant: "paragraph10", fontWeight: "regular", children: o }),
    a && /* @__PURE__ */ i.jsx(Ce, { variant: "paragraph10", fontWeight: "regular", children: a })
  ] })
] });
var e9 = "_19xwol23", t9 = "_19xwol22", n9 = "_19xwol21", r9 = "_19xwol20";
const sm = ({
  image: e,
  button: t,
  price: n,
  title: r
}) => /* @__PURE__ */ i.jsx("div", { className: r9, children: /* @__PURE__ */ i.jsxs("div", { className: n9, children: [
  /* @__PURE__ */ i.jsxs("div", { className: e9, children: [
    e,
    /* @__PURE__ */ i.jsx(Ce, { component: "h6", fontWeight: "bold", children: r })
  ] }),
  /* @__PURE__ */ i.jsxs("div", { className: t9, children: [
    n,
    t
  ] })
] }) }), s9 = "_bentoBoxTiles_u1djx_1", i9 = "_bentoBoxTile_u1djx_1", o9 = "_darkMode_u1djx_16", a9 = "_tileIcon_u1djx_46", l9 = "_tileTitle_u1djx_57", c9 = "_tileText_u1djx_65", u9 = "_tileContent_u1djx_74", d9 = "_tileImageContainer_u1djx_78", f9 = "_tileImageBottom_u1djx_85", h9 = "_tileBig_u1djx_155", Ge = {
  bentoBoxTiles: s9,
  bentoBoxTile: i9,
  darkMode: o9,
  tileIcon: a9,
  tileTitle: l9,
  tileText: c9,
  tileContent: u9,
  tileImageContainer: d9,
  tileImageBottom: f9,
  tileBig: h9
}, im = ({
  tiles: e,
  darkMode: t
}) => /* @__PURE__ */ i.jsx("div", { className: `${Ge.bentoBoxTiles} ${t ? Ge.darkMode : ""}`, children: e.map((n, r) => /* @__PURE__ */ i.jsxs("div", { className: `${Ge.bentoBoxTile} ${n.bigTile ? Ge.tileBig : ""}`, children: [
  n.image && /* @__PURE__ */ i.jsx("div", { className: `${Ge.tileImageContainer} ${n.imageBottom ? Ge.tileImageBottom : ""}`, children: /* @__PURE__ */ i.jsx("img", { src: n.image }) }),
  /* @__PURE__ */ i.jsxs("div", { className: Ge.tileContent, children: [
    /* @__PURE__ */ i.jsx("div", { className: Ge.tileIcon, children: n.icon }),
    /* @__PURE__ */ i.jsx(Ce, { className: Ge.tileTitle, component: "h4", fontWeight: "bold", children: n.title }),
    /* @__PURE__ */ i.jsx("div", { className: Ge.tileText, children: n.text })
  ] })
] }, r)) }), p9 = "_galleryCarouselWrapper_ke8br_1", m9 = "_swiper__dots_ke8br_5", v9 = "_swiper__dot_ke8br_5", g9 = "_swiper__dotSelected_ke8br_31", x9 = "_swiper__dotContinuePrev_ke8br_39", w9 = "_swiper__dotContinueNext_ke8br_44", br = {
  galleryCarouselWrapper: p9,
  swiper__dots: m9,
  swiper__dot: v9,
  swiper__dotSelected: g9,
  swiper__dotContinuePrev: x9,
  swiper__dotContinueNext: w9
};
var Ec = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function(e) {
  (function() {
    var t = {}.hasOwnProperty;
    function n() {
      for (var o = "", a = 0; a < arguments.length; a++) {
        var l = arguments[a];
        l && (o = s(o, r(l)));
      }
      return o;
    }
    function r(o) {
      if (typeof o == "string" || typeof o == "number")
        return o;
      if (typeof o != "object")
        return "";
      if (Array.isArray(o))
        return n.apply(null, o);
      if (o.toString !== Object.prototype.toString && !o.toString.toString().includes("[native code]"))
        return o.toString();
      var a = "";
      for (var l in o)
        t.call(o, l) && o[l] && (a = s(a, l));
      return a;
    }
    function s(o, a) {
      return a ? o ? o + " " + a : o + a : o;
    }
    e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
  })();
})(Ec);
var y9 = Ec.exports;
const sn = /* @__PURE__ */ _a(y9), C9 = "_desktopCarouselWrapper_116f5_1", b9 = "_swiper_116f5_8", _9 = "_swiper__container_116f5_17", j9 = "_swiper__slide_116f5_22", S9 = "_swiper__pagination_116f5_29", M9 = "_swiper__prev_116f5_47", L9 = "_swiper__next_116f5_52", mt = {
  desktopCarouselWrapper: C9,
  swiper: b9,
  swiper__container: _9,
  swiper__slide: j9,
  swiper__pagination: S9,
  swiper__prev: M9,
  swiper__next: L9
};
function T9(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function va(e) {
  return T9(e) || Array.isArray(e);
}
function V9() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Yi(e, t) {
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  const s = JSON.stringify(Object.keys(e.breakpoints || {})), o = JSON.stringify(Object.keys(t.breakpoints || {}));
  return s !== o ? !1 : n.every((a) => {
    const l = e[a], c = t[a];
    return typeof l == "function" ? `${l}` == `${c}` : !va(l) || !va(c) ? l === c : Yi(l, c);
  });
}
function ga(e) {
  return e.concat().sort((t, n) => t.name > n.name ? 1 : -1).map((t) => t.options);
}
function P9(e, t) {
  if (e.length !== t.length)
    return !1;
  const n = ga(e), r = ga(t);
  return n.every((s, o) => {
    const a = r[o];
    return Yi(s, a);
  });
}
function Xi(e) {
  return typeof e == "number";
}
function ei(e) {
  return typeof e == "string";
}
function Ji(e) {
  return typeof e == "boolean";
}
function xa(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function ie(e) {
  return Math.abs(e);
}
function Qi(e) {
  return Math.sign(e);
}
function Rn(e, t) {
  return ie(e - t);
}
function E9(e, t) {
  if (e === 0 || t === 0 || ie(e) <= ie(t))
    return 0;
  const n = Rn(ie(e), ie(t));
  return ie(n / e);
}
function Bn(e) {
  return Dn(e).map(Number);
}
function $e(e) {
  return e[Yn(e)];
}
function Yn(e) {
  return Math.max(0, e.length - 1);
}
function eo(e, t) {
  return t === Yn(e);
}
function wa(e, t = 0) {
  return Array.from(Array(e), (n, r) => t + r);
}
function Dn(e) {
  return Object.keys(e);
}
function Rc(e, t) {
  return [e, t].reduce((n, r) => (Dn(r).forEach((s) => {
    const o = n[s], a = r[s], l = xa(o) && xa(a);
    n[s] = l ? Rc(o, a) : a;
  }), n), {});
}
function ti(e, t) {
  return typeof t.MouseEvent < "u" && e instanceof t.MouseEvent;
}
function R9(e, t) {
  const n = {
    start: r,
    center: s,
    end: o
  };
  function r() {
    return 0;
  }
  function s(c) {
    return o(c) / 2;
  }
  function o(c) {
    return t - c;
  }
  function a(c, d) {
    return ei(e) ? n[e](c) : e(t, c, d);
  }
  return {
    measure: a
  };
}
function Nn() {
  let e = [];
  function t(s, o, a, l = {
    passive: !0
  }) {
    let c;
    if ("addEventListener" in s)
      s.addEventListener(o, a, l), c = () => s.removeEventListener(o, a, l);
    else {
      const d = s;
      d.addListener(a), c = () => d.removeListener(a);
    }
    return e.push(c), r;
  }
  function n() {
    e = e.filter((s) => s());
  }
  const r = {
    add: t,
    clear: n
  };
  return r;
}
function H9(e, t, n, r) {
  const s = Nn(), o = 1e3 / 60;
  let a = null, l = 0, c = 0;
  function d() {
    s.add(e, "visibilitychange", () => {
      e.hidden && v();
    });
  }
  function f() {
    p(), s.clear();
  }
  function u(w) {
    if (!c)
      return;
    a || (a = w);
    const x = w - a;
    for (a = w, l += x; l >= o; )
      n(), l -= o;
    const y = ie(l / o);
    r(y), c && t.requestAnimationFrame(u);
  }
  function h() {
    c || (c = t.requestAnimationFrame(u));
  }
  function p() {
    t.cancelAnimationFrame(c), a = null, l = 0, c = 0;
  }
  function v() {
    a = null, l = 0;
  }
  return {
    init: d,
    destroy: f,
    start: h,
    stop: p,
    update: n,
    render: r
  };
}
function A9(e, t) {
  const n = t === "rtl", r = e === "y", s = r ? "y" : "x", o = r ? "x" : "y", a = !r && n ? -1 : 1, l = f(), c = u();
  function d(v) {
    const {
      height: m,
      width: w
    } = v;
    return r ? m : w;
  }
  function f() {
    return r ? "top" : n ? "right" : "left";
  }
  function u() {
    return r ? "bottom" : n ? "left" : "right";
  }
  function h(v) {
    return v * a;
  }
  return {
    scroll: s,
    cross: o,
    startEdge: l,
    endEdge: c,
    measureSize: d,
    direction: h
  };
}
function Bt(e = 0, t = 0) {
  const n = ie(e - t);
  function r(d) {
    return d < e;
  }
  function s(d) {
    return d > t;
  }
  function o(d) {
    return r(d) || s(d);
  }
  function a(d) {
    return o(d) ? r(d) ? e : t : d;
  }
  function l(d) {
    return n ? d - n * Math.ceil((d - t) / n) : d;
  }
  return {
    length: n,
    max: t,
    min: e,
    constrain: a,
    reachedAny: o,
    reachedMax: s,
    reachedMin: r,
    removeOffset: l
  };
}
function Hc(e, t, n) {
  const {
    constrain: r
  } = Bt(0, e), s = e + 1;
  let o = a(t);
  function a(h) {
    return n ? ie((s + h) % s) : r(h);
  }
  function l() {
    return o;
  }
  function c(h) {
    return o = a(h), u;
  }
  function d(h) {
    return f().set(l() + h);
  }
  function f() {
    return Hc(e, l(), n);
  }
  const u = {
    get: l,
    set: c,
    add: d,
    clone: f
  };
  return u;
}
function k9(e, t, n, r, s, o, a, l, c, d, f, u, h, p, v, m, w, x, y) {
  const {
    cross: C,
    direction: _
  } = e, j = ["INPUT", "SELECT", "TEXTAREA"], M = {
    passive: !1
  }, L = Nn(), b = Nn(), V = Bt(50, 225).constrain(p.measure(20)), E = {
    mouse: 300,
    touch: 400
  }, Z = {
    mouse: 500,
    touch: 600
  }, J = v ? 43 : 25;
  let F = !1, q = 0, O = 0, Q = !1, Y = !1, de = !1, xe = !1;
  function je(P) {
    if (!y)
      return;
    function W(ae) {
      (Ji(y) || y(P, ae)) && $(ae);
    }
    const oe = t;
    L.add(oe, "dragstart", (ae) => ae.preventDefault(), M).add(oe, "touchmove", () => {
    }, M).add(oe, "touchend", () => {
    }).add(oe, "touchstart", W).add(oe, "mousedown", W).add(oe, "touchcancel", ee).add(oe, "contextmenu", ee).add(oe, "click", pe, !0);
  }
  function we() {
    L.clear(), b.clear();
  }
  function Pe() {
    const P = xe ? n : t;
    b.add(P, "touchmove", re, M).add(P, "touchend", ee).add(P, "mousemove", re, M).add(P, "mouseup", ee);
  }
  function Se(P) {
    const W = P.nodeName || "";
    return j.includes(W);
  }
  function rt() {
    return (v ? Z : E)[xe ? "mouse" : "touch"];
  }
  function Ue(P, W) {
    const oe = u.add(Qi(P) * -1), ae = f.byDistance(P, !v).distance;
    return v || ie(P) < V ? ae : w && W ? ae * 0.5 : f.byIndex(oe.get(), 0).distance;
  }
  function $(P) {
    const W = ti(P, r);
    xe = W, de = v && W && !P.buttons && F, F = Rn(s.get(), a.get()) >= 2, !(W && P.button !== 0) && (Se(P.target) || (Q = !0, o.pointerDown(P), d.useFriction(0).useDuration(0), s.set(a), Pe(), q = o.readPoint(P), O = o.readPoint(P, C), h.emit("pointerDown")));
  }
  function re(P) {
    if (!ti(P, r) && P.touches.length >= 2)
      return ee(P);
    const oe = o.readPoint(P), ae = o.readPoint(P, C), ye = Rn(oe, q), Me = Rn(ae, O);
    if (!Y && !xe && (!P.cancelable || (Y = ye > Me, !Y)))
      return ee(P);
    const Le = o.pointerMove(P);
    ye > m && (de = !0), d.useFriction(0.3).useDuration(0.75), l.start(), s.add(_(Le)), P.preventDefault();
  }
  function ee(P) {
    const oe = f.byDistance(0, !1).index !== u.get(), ae = o.pointerUp(P) * rt(), ye = Ue(_(ae), oe), Me = E9(ae, ye), Le = J - 10 * Me, He = x + Me / 50;
    Y = !1, Q = !1, b.clear(), d.useDuration(Le).useFriction(He), c.distance(ye, !v), xe = !1, h.emit("pointerUp");
  }
  function pe(P) {
    de && (P.stopPropagation(), P.preventDefault(), de = !1);
  }
  function ne() {
    return Q;
  }
  return {
    init: je,
    destroy: we,
    pointerDown: ne
  };
}
function Z9(e, t) {
  let r, s;
  function o(u) {
    return u.timeStamp;
  }
  function a(u, h) {
    const v = `client${(h || e.scroll) === "x" ? "X" : "Y"}`;
    return (ti(u, t) ? u : u.touches[0])[v];
  }
  function l(u) {
    return r = u, s = u, a(u);
  }
  function c(u) {
    const h = a(u) - a(s), p = o(u) - o(r) > 170;
    return s = u, p && (r = u), h;
  }
  function d(u) {
    if (!r || !s)
      return 0;
    const h = a(s) - a(r), p = o(u) - o(r), v = o(u) - o(s) > 170, m = h / p;
    return p && !v && ie(m) > 0.1 ? m : 0;
  }
  return {
    pointerDown: l,
    pointerMove: c,
    pointerUp: d,
    readPoint: a
  };
}
function B9() {
  function e(n) {
    const {
      offsetTop: r,
      offsetLeft: s,
      offsetWidth: o,
      offsetHeight: a
    } = n;
    return {
      top: r,
      right: s + o,
      bottom: r + a,
      left: s,
      width: o,
      height: a
    };
  }
  return {
    measure: e
  };
}
function D9(e) {
  function t(r) {
    return e * (r / 100);
  }
  return {
    measure: t
  };
}
function N9(e, t, n, r, s, o, a) {
  let l, c, d = [], f = !1;
  function u(m) {
    return s.measureSize(a.measure(m));
  }
  function h(m) {
    if (!o)
      return;
    c = u(e), d = r.map(u);
    function w(y) {
      for (const C of y) {
        const _ = C.target === e, j = r.indexOf(C.target), M = _ ? c : d[j], L = u(_ ? e : r[j]);
        if (ie(L - M) >= 0.5) {
          n.requestAnimationFrame(() => {
            m.reInit(), t.emit("resize");
          });
          break;
        }
      }
    }
    l = new ResizeObserver((y) => {
      f || (Ji(o) || o(m, y)) && w(y);
    }), [e].concat(r).forEach((y) => l.observe(y));
  }
  function p() {
    l && l.disconnect(), f = !0;
  }
  return {
    init: h,
    destroy: p
  };
}
function O9(e, t, n, r, s) {
  let o = 0, a = 0, l = r, c = s, d = e.get(), f = 0;
  function u() {
    const j = n.get() - e.get(), M = !l;
    let L = 0;
    return M ? (o = 0, e.set(n), L = j) : (o += j / l, o *= c, d += o, e.add(o), L = d - f), a = Qi(L), f = d, _;
  }
  function h() {
    const j = n.get() - t.get();
    return ie(j) < 1e-3;
  }
  function p() {
    return l;
  }
  function v() {
    return a;
  }
  function m() {
    return o;
  }
  function w() {
    return y(r);
  }
  function x() {
    return C(s);
  }
  function y(j) {
    return l = j, _;
  }
  function C(j) {
    return c = j, _;
  }
  const _ = {
    direction: v,
    duration: p,
    velocity: m,
    seek: u,
    settled: h,
    useBaseFriction: x,
    useBaseDuration: w,
    useFriction: C,
    useDuration: y
  };
  return _;
}
function $9(e, t, n, r, s) {
  const o = s.measure(10), a = s.measure(50), l = Bt(0.1, 0.99);
  let c = !1;
  function d() {
    return !(c || !e.reachedAny(n.get()) || !e.reachedAny(t.get()));
  }
  function f(p) {
    if (!d())
      return;
    const v = e.reachedMin(t.get()) ? "min" : "max", m = ie(e[v] - t.get()), w = n.get() - t.get(), x = l.constrain(m / a);
    n.subtract(w * x), !p && ie(w) < o && (n.set(e.constrain(n.get())), r.useDuration(25).useBaseFriction());
  }
  function u(p) {
    c = !p;
  }
  return {
    shouldConstrain: d,
    constrain: f,
    toggleActive: u
  };
}
function I9(e, t, n, r, s) {
  const o = Bt(-t + e, 0), a = u(), l = f(), c = h();
  function d(v, m) {
    return Rn(v, m) < 1;
  }
  function f() {
    const v = a[0], m = $e(a), w = a.lastIndexOf(v), x = a.indexOf(m) + 1;
    return Bt(w, x);
  }
  function u() {
    return n.map((v, m) => {
      const {
        min: w,
        max: x
      } = o, y = o.constrain(v), C = !m, _ = eo(n, m);
      return C ? x : _ || d(w, y) ? w : d(x, y) ? x : y;
    }).map((v) => parseFloat(v.toFixed(3)));
  }
  function h() {
    if (t <= e + s)
      return [o.max];
    if (r === "keepSnaps")
      return a;
    const {
      min: v,
      max: m
    } = l;
    return a.slice(v, m);
  }
  return {
    snapsContained: c,
    scrollContainLimit: l
  };
}
function z9(e, t, n) {
  const r = t[0], s = n ? r - e : $e(t);
  return {
    limit: Bt(s, r)
  };
}
function F9(e, t, n, r) {
  const o = t.min + 0.1, a = t.max + 0.1, {
    reachedMin: l,
    reachedMax: c
  } = Bt(o, a);
  function d(h) {
    return h === 1 ? c(n.get()) : h === -1 ? l(n.get()) : !1;
  }
  function f(h) {
    if (!d(h))
      return;
    const p = e * (h * -1);
    r.forEach((v) => v.add(p));
  }
  return {
    loop: f
  };
}
function q9(e) {
  const {
    max: t,
    length: n
  } = e;
  function r(o) {
    const a = o - t;
    return n ? a / -n : 0;
  }
  return {
    get: r
  };
}
function W9(e, t, n, r, s) {
  const {
    startEdge: o,
    endEdge: a
  } = e, {
    groupSlides: l
  } = s, c = u().map(t.measure), d = h(), f = p();
  function u() {
    return l(r).map((m) => $e(m)[a] - m[0][o]).map(ie);
  }
  function h() {
    return r.map((m) => n[o] - m[o]).map((m) => -ie(m));
  }
  function p() {
    return l(d).map((m) => m[0]).map((m, w) => m + c[w]);
  }
  return {
    snaps: d,
    snapsAligned: f
  };
}
function U9(e, t, n, r, s, o) {
  const {
    groupSlides: a
  } = s, {
    min: l,
    max: c
  } = r, d = f();
  function f() {
    const h = a(o), p = !e || t === "keepSnaps";
    return n.length === 1 ? [o] : p ? h : h.slice(l, c).map((v, m, w) => {
      const x = !m, y = eo(w, m);
      if (x) {
        const C = $e(w[0]) + 1;
        return wa(C);
      }
      if (y) {
        const C = Yn(o) - $e(w)[0] + 1;
        return wa(C, $e(w)[0]);
      }
      return v;
    });
  }
  return {
    slideRegistry: d
  };
}
function G9(e, t, n, r, s) {
  const {
    reachedAny: o,
    removeOffset: a,
    constrain: l
  } = r;
  function c(v) {
    return v.concat().sort((m, w) => ie(m) - ie(w))[0];
  }
  function d(v) {
    const m = e ? a(v) : l(v), w = t.map((y, C) => ({
      diff: f(y - m, 0),
      index: C
    })).sort((y, C) => ie(y.diff) - ie(C.diff)), {
      index: x
    } = w[0];
    return {
      index: x,
      distance: m
    };
  }
  function f(v, m) {
    const w = [v, v + n, v - n];
    if (!e)
      return v;
    if (!m)
      return c(w);
    const x = w.filter((y) => Qi(y) === m);
    return x.length ? c(x) : $e(w) - n;
  }
  function u(v, m) {
    const w = t[v] - s.get(), x = f(w, m);
    return {
      index: v,
      distance: x
    };
  }
  function h(v, m) {
    const w = s.get() + v, {
      index: x,
      distance: y
    } = d(w), C = !e && o(w);
    if (!m || C)
      return {
        index: x,
        distance: v
      };
    const _ = t[x] - y, j = v + f(_, 0);
    return {
      index: x,
      distance: j
    };
  }
  return {
    byDistance: h,
    byIndex: u,
    shortcut: f
  };
}
function K9(e, t, n, r, s, o, a) {
  function l(u) {
    const h = u.distance, p = u.index !== t.get();
    o.add(h), h && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), p && (n.set(t.get()), t.set(u.index), a.emit("select"));
  }
  function c(u, h) {
    const p = s.byDistance(u, h);
    l(p);
  }
  function d(u, h) {
    const p = t.clone().set(u), v = s.byIndex(p.get(), h);
    l(v);
  }
  return {
    distance: c,
    index: d
  };
}
function Y9(e, t, n, r, s, o, a) {
  let l = 0;
  function c() {
    o.add(document, "keydown", d, !1), t.forEach(f);
  }
  function d(h) {
    h.code === "Tab" && (l = (/* @__PURE__ */ new Date()).getTime());
  }
  function f(h) {
    const p = () => {
      if ((/* @__PURE__ */ new Date()).getTime() - l > 10)
        return;
      e.scrollLeft = 0;
      const w = t.indexOf(h), x = n.findIndex((y) => y.includes(w));
      Xi(x) && (s.useDuration(0), r.index(x, 0), a.emit("slideFocus"));
    };
    o.add(h, "focus", p, {
      passive: !0,
      capture: !0
    });
  }
  return {
    init: c
  };
}
function _r(e) {
  let t = e;
  function n() {
    return t;
  }
  function r(c) {
    t = a(c);
  }
  function s(c) {
    t += a(c);
  }
  function o(c) {
    t -= a(c);
  }
  function a(c) {
    return Xi(c) ? c : c.get();
  }
  return {
    get: n,
    set: r,
    add: s,
    subtract: o
  };
}
function Ac(e, t) {
  const n = e.scroll === "x" ? o : a, r = t.style;
  let s = !1;
  function o(u) {
    return `translate3d(${u}px,0px,0px)`;
  }
  function a(u) {
    return `translate3d(0px,${u}px,0px)`;
  }
  function l(u) {
    s || (r.transform = n(e.direction(u)));
  }
  function c(u) {
    s = !u;
  }
  function d() {
    s || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"));
  }
  return {
    clear: d,
    to: l,
    toggleActive: c
  };
}
function X9(e, t, n, r, s, o, a, l, c) {
  const f = Bn(s), u = Bn(s).reverse(), h = x().concat(y());
  function p(L, b) {
    return L.reduce((V, E) => V - s[E], b);
  }
  function v(L, b) {
    return L.reduce((V, E) => p(V, b) > 0 ? V.concat([E]) : V, []);
  }
  function m(L) {
    return o.map((b, V) => ({
      start: b - r[V] + 0.5 + L,
      end: b + t - 0.5 + L
    }));
  }
  function w(L, b, V) {
    const E = m(b);
    return L.map((Z) => {
      const J = V ? 0 : -n, F = V ? n : 0, q = V ? "end" : "start", O = E[Z][q];
      return {
        index: Z,
        loopPoint: O,
        slideLocation: _r(-1),
        translate: Ac(e, c[Z]),
        target: () => l.get() > O ? J : F
      };
    });
  }
  function x() {
    const L = a[0], b = v(u, L);
    return w(b, n, !1);
  }
  function y() {
    const L = t - a[0] - 1, b = v(f, L);
    return w(b, -n, !0);
  }
  function C() {
    return h.every(({
      index: L
    }) => {
      const b = f.filter((V) => V !== L);
      return p(b, t) <= 0.1;
    });
  }
  function _() {
    h.forEach((L) => {
      const {
        target: b,
        translate: V,
        slideLocation: E
      } = L, Z = b();
      Z !== E.get() && (V.to(Z), E.set(Z));
    });
  }
  function j() {
    h.forEach((L) => L.translate.clear());
  }
  return {
    canLoop: C,
    clear: j,
    loop: _,
    loopPoints: h
  };
}
function J9(e, t, n) {
  let r, s = !1;
  function o(c) {
    if (!n)
      return;
    function d(f) {
      for (const u of f)
        if (u.type === "childList") {
          c.reInit(), t.emit("slidesChanged");
          break;
        }
    }
    r = new MutationObserver((f) => {
      s || (Ji(n) || n(c, f)) && d(f);
    }), r.observe(e, {
      childList: !0
    });
  }
  function a() {
    r && r.disconnect(), s = !0;
  }
  return {
    init: o,
    destroy: a
  };
}
function Q9(e, t, n, r) {
  const s = {};
  let o = null, a = null, l, c = !1;
  function d() {
    l = new IntersectionObserver((v) => {
      c || (v.forEach((m) => {
        const w = t.indexOf(m.target);
        s[w] = m;
      }), o = null, a = null, n.emit("slidesInView"));
    }, {
      root: e.parentElement,
      threshold: r
    }), t.forEach((v) => l.observe(v));
  }
  function f() {
    l && l.disconnect(), c = !0;
  }
  function u(v) {
    return Dn(s).reduce((m, w) => {
      const x = parseInt(w), {
        isIntersecting: y
      } = s[x];
      return (v && y || !v && !y) && m.push(x), m;
    }, []);
  }
  function h(v = !0) {
    if (v && o)
      return o;
    if (!v && a)
      return a;
    const m = u(v);
    return v && (o = m), v || (a = m), m;
  }
  return {
    init: d,
    destroy: f,
    get: h
  };
}
function eh(e, t, n, r, s, o) {
  const {
    measureSize: a,
    startEdge: l,
    endEdge: c
  } = e, d = n[0] && s, f = v(), u = m(), h = n.map(a), p = w();
  function v() {
    if (!d)
      return 0;
    const y = n[0];
    return ie(t[l] - y[l]);
  }
  function m() {
    if (!d)
      return 0;
    const y = o.getComputedStyle($e(r));
    return parseFloat(y.getPropertyValue(`margin-${c}`));
  }
  function w() {
    return n.map((y, C, _) => {
      const j = !C, M = eo(_, C);
      return j ? h[C] + f : M ? h[C] + u : _[C + 1][l] - y[l];
    }).map(ie);
  }
  return {
    slideSizes: h,
    slideSizesWithGaps: p,
    startGap: f,
    endGap: u
  };
}
function th(e, t, n, r, s, o, a, l, c) {
  const {
    startEdge: d,
    endEdge: f,
    direction: u
  } = e, h = Xi(n);
  function p(x, y) {
    return Bn(x).filter((C) => C % y === 0).map((C) => x.slice(C, C + y));
  }
  function v(x) {
    return x.length ? Bn(x).reduce((y, C, _) => {
      const j = $e(y) || 0, M = j === 0, L = C === Yn(x), b = s[d] - o[j][d], V = s[d] - o[C][f], E = !r && M ? u(a) : 0, Z = !r && L ? u(l) : 0, J = ie(V - Z - (b + E));
      return _ && J > t + c && y.push(C), L && y.push(x.length), y;
    }, []).map((y, C, _) => {
      const j = Math.max(_[C - 1] || 0);
      return x.slice(j, y);
    }) : [];
  }
  function m(x) {
    return h ? p(x, n) : v(x);
  }
  return {
    groupSlides: m
  };
}
function nh(e, t, n, r, s, o, a) {
  const {
    align: l,
    axis: c,
    direction: d,
    startIndex: f,
    loop: u,
    duration: h,
    dragFree: p,
    dragThreshold: v,
    inViewThreshold: m,
    slidesToScroll: w,
    skipSnaps: x,
    containScroll: y,
    watchResize: C,
    watchSlides: _,
    watchDrag: j
  } = o, M = 2, L = B9(), b = L.measure(t), V = n.map(L.measure), E = A9(c, d), Z = E.measureSize(b), J = D9(Z), F = R9(l, Z), q = !u && !!y, O = u || !!y, {
    slideSizes: Q,
    slideSizesWithGaps: Y,
    startGap: de,
    endGap: xe
  } = eh(E, b, V, n, O, s), je = th(E, Z, w, u, b, V, de, xe, M), {
    snaps: we,
    snapsAligned: Pe
  } = W9(E, F, b, V, je), Se = -$e(we) + $e(Y), {
    snapsContained: rt,
    scrollContainLimit: Ue
  } = I9(Z, Se, Pe, y, M), $ = q ? rt : Pe, {
    limit: re
  } = z9(Se, $, u), ee = Hc(Yn($), f, u), pe = ee.clone(), ne = Bn(n), X = ({
    dragHandler: it,
    scrollBody: It,
    scrollBounds: zt,
    options: {
      loop: pt
    }
  }) => {
    pt || zt.constrain(it.pointerDown()), It.seek();
  }, P = ({
    scrollBody: it,
    translate: It,
    location: zt,
    offsetLocation: pt,
    scrollLooper: Xr,
    slideLooper: Jr,
    dragHandler: Qr,
    animation: es,
    eventHandler: Qn,
    scrollBounds: ts,
    options: {
      loop: er
    }
  }, hn) => {
    const pn = it.velocity(), ot = it.settled(), mn = !ts.shouldConstrain(), Ft = er ? ot : ot && mn;
    Ft && !Qr.pointerDown() && (es.stop(), Qn.emit("settle")), Ft || Qn.emit("scroll"), pt.set(zt.get() - pn + pn * hn), er && (Xr.loop(it.direction()), Jr.loop()), It.to(pt.get());
  }, W = H9(r, s, () => X(st), (it) => P(st, it)), oe = 0.68, ae = $[ee.get()], ye = _r(ae), Me = _r(ae), Le = _r(ae), He = O9(ye, Me, Le, h, oe), un = G9(u, $, Se, re, Le), dn = K9(W, ee, pe, He, un, Le, a), $t = q9(re), Xn = Nn(), Yr = Q9(t, n, a, m), {
    slideRegistry: fn
  } = U9(q, y, $, Ue, je, ne), Jn = Y9(e, n, fn, dn, He, Xn, a), st = {
    ownerDocument: r,
    ownerWindow: s,
    eventHandler: a,
    containerRect: b,
    slideRects: V,
    animation: W,
    axis: E,
    dragHandler: k9(E, e, r, s, Le, Z9(E, s), ye, W, dn, He, un, ee, a, J, p, v, x, oe, j),
    eventStore: Xn,
    percentOfView: J,
    index: ee,
    indexPrevious: pe,
    limit: re,
    location: ye,
    offsetLocation: Me,
    options: o,
    resizeHandler: N9(t, a, s, n, E, C, L),
    scrollBody: He,
    scrollBounds: $9(re, Me, Le, He, J),
    scrollLooper: F9(Se, re, Me, [ye, Me, Le]),
    scrollProgress: $t,
    scrollSnapList: $.map($t.get),
    scrollSnaps: $,
    scrollTarget: un,
    scrollTo: dn,
    slideLooper: X9(E, Z, Se, Q, Y, we, $, Me, n),
    slideFocus: Jn,
    slidesHandler: J9(t, a, _),
    slidesInView: Yr,
    slideIndexes: ne,
    slideRegistry: fn,
    slidesToScroll: je,
    target: Le,
    translate: Ac(E, t)
  };
  return st;
}
function rh() {
  let e = {}, t;
  function n(d) {
    t = d;
  }
  function r(d) {
    return e[d] || [];
  }
  function s(d) {
    return r(d).forEach((f) => f(t, d)), c;
  }
  function o(d, f) {
    return e[d] = r(d).concat([f]), c;
  }
  function a(d, f) {
    return e[d] = r(d).filter((u) => u !== f), c;
  }
  function l() {
    e = {};
  }
  const c = {
    init: n,
    emit: s,
    off: a,
    on: o,
    clear: l
  };
  return c;
}
const sh = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0
};
function ih(e) {
  function t(o, a) {
    return Rc(o, a || {});
  }
  function n(o) {
    const a = o.breakpoints || {}, l = Dn(a).filter((c) => e.matchMedia(c).matches).map((c) => a[c]).reduce((c, d) => t(c, d), {});
    return t(o, l);
  }
  function r(o) {
    return o.map((a) => Dn(a.breakpoints || {})).reduce((a, l) => a.concat(l), []).map(e.matchMedia);
  }
  return {
    mergeOptions: t,
    optionsAtMedia: n,
    optionsMediaQueries: r
  };
}
function oh(e) {
  let t = [];
  function n(o, a) {
    return t = a.filter(({
      options: l
    }) => e.optionsAtMedia(l).active !== !1), t.forEach((l) => l.init(o, e)), a.reduce((l, c) => Object.assign(l, {
      [c.name]: c
    }), {});
  }
  function r() {
    t = t.filter((o) => o.destroy());
  }
  return {
    init: n,
    destroy: r
  };
}
function kr(e, t, n) {
  const r = e.ownerDocument, s = r.defaultView, o = ih(s), a = oh(o), l = Nn(), c = rh(), {
    mergeOptions: d,
    optionsAtMedia: f,
    optionsMediaQueries: u
  } = o, {
    on: h,
    off: p,
    emit: v
  } = c, m = Z;
  let w = !1, x, y = d(sh, kr.globalOptions), C = d(y), _ = [], j, M, L;
  function b() {
    const {
      container: X,
      slides: P
    } = C;
    M = (ei(X) ? e.querySelector(X) : X) || e.children[0];
    const oe = ei(P) ? M.querySelectorAll(P) : P;
    L = [].slice.call(oe || M.children);
  }
  function V(X) {
    const P = nh(e, M, L, r, s, X, c);
    if (X.loop && !P.slideLooper.canLoop()) {
      const W = Object.assign({}, X, {
        loop: !1
      });
      return V(W);
    }
    return P;
  }
  function E(X, P) {
    w || (y = d(y, X), C = f(y), _ = P || _, b(), x = V(C), u([y, ..._.map(({
      options: W
    }) => W)]).forEach((W) => l.add(W, "change", Z)), C.active && (x.translate.to(x.location.get()), x.animation.init(), x.slidesInView.init(), x.slideFocus.init(), x.eventHandler.init(ne), x.resizeHandler.init(ne), x.slidesHandler.init(ne), x.options.loop && x.slideLooper.loop(), M.offsetParent && L.length && x.dragHandler.init(ne), j = a.init(ne, _)));
  }
  function Z(X, P) {
    const W = we();
    J(), E(d({
      startIndex: W
    }, X), P), c.emit("reInit");
  }
  function J() {
    x.dragHandler.destroy(), x.eventStore.clear(), x.translate.clear(), x.slideLooper.clear(), x.resizeHandler.destroy(), x.slidesHandler.destroy(), x.slidesInView.destroy(), x.animation.destroy(), a.destroy(), l.clear();
  }
  function F() {
    w || (w = !0, l.clear(), J(), c.emit("destroy"), c.clear());
  }
  function q(X, P, W) {
    !C.active || w || (x.scrollBody.useBaseFriction().useDuration(P === !0 ? 0 : C.duration), x.scrollTo.index(X, W || 0));
  }
  function O(X) {
    const P = x.index.add(1).get();
    q(P, X, -1);
  }
  function Q(X) {
    const P = x.index.add(-1).get();
    q(P, X, 1);
  }
  function Y() {
    return x.index.add(1).get() !== we();
  }
  function de() {
    return x.index.add(-1).get() !== we();
  }
  function xe() {
    return x.scrollSnapList;
  }
  function je() {
    return x.scrollProgress.get(x.location.get());
  }
  function we() {
    return x.index.get();
  }
  function Pe() {
    return x.indexPrevious.get();
  }
  function Se() {
    return x.slidesInView.get();
  }
  function rt() {
    return x.slidesInView.get(!1);
  }
  function Ue() {
    return j;
  }
  function $() {
    return x;
  }
  function re() {
    return e;
  }
  function ee() {
    return M;
  }
  function pe() {
    return L;
  }
  const ne = {
    canScrollNext: Y,
    canScrollPrev: de,
    containerNode: ee,
    internalEngine: $,
    destroy: F,
    off: p,
    on: h,
    emit: v,
    plugins: Ue,
    previousScrollSnap: Pe,
    reInit: m,
    rootNode: re,
    scrollNext: O,
    scrollPrev: Q,
    scrollProgress: je,
    scrollSnapList: xe,
    scrollTo: q,
    selectedScrollSnap: we,
    slideNodes: pe,
    slidesInView: Se,
    slidesNotInView: rt
  };
  return E(t, n), setTimeout(() => c.emit("init"), 0), ne;
}
kr.globalOptions = void 0;
function Kr(e = {}, t = []) {
  const n = k(e), r = k(t), [s, o] = N(), [a, l] = N(), c = be(() => {
    s && s.reInit(n.current, r.current);
  }, [s]);
  return B(() => {
    if (V9() && a) {
      kr.globalOptions = Kr.globalOptions;
      const d = kr(a, n.current, r.current);
      return o(d), () => d.destroy();
    } else
      o(void 0);
  }, [a, o]), B(() => {
    Yi(n.current, e) || (n.current = e, c());
  }, [e, c]), B(() => {
    P9(r.current, t) || (r.current = t, c());
  }, [t, c]), [l, s];
}
Kr.globalOptions = void 0;
const ah = (e) => {
  const [t, n] = N(0), [r, s] = N([]), o = be(
    (c) => {
      e && e.scrollTo(c);
    },
    [e]
  ), a = be((c) => {
    s(c.scrollSnapList());
  }, []), l = be((c) => {
    n(c.selectedScrollSnap());
  }, []);
  return B(() => {
    e && (a(e), l(e), e.on("reInit", a).on("reInit", l).on("select", l));
  }, [e, a, l]), {
    selectedIndex: t,
    scrollSnaps: r,
    onDotButtonClick: o
  };
}, lh = (e) => {
  const { children: t, ...n } = e;
  return /* @__PURE__ */ i.jsx("button", { type: "button", ...n, children: t });
}, kc = ({ emblaApi: e }) => {
  const { selectedIndex: t, scrollSnaps: n, onDotButtonClick: r } = ah(e), s = 7, o = () => {
    const a = [];
    let l = 0, c = n.length, d, f, u, h = n.length > s, p = t >= Math.floor(s / 2) && t <= n.length - Math.ceil(s / 2), v = t > n.length - Math.ceil(s / 2);
    h && (p ? (l = t - Math.floor(s / 2), c = t + Math.ceil(s / 2)) : v ? (l = n.length - s, c = n.length) : (l = 0, c = s));
    for (let m = l; m < c; m++)
      d = m === t ? br.swiper__dotSelected : "", f = void 0, u = void 0, a.push(
        /* @__PURE__ */ i.jsx(
          lh,
          {
            "data-index": m,
            onClick: () => r(m),
            className: sn(br.swiper__dot, d, u, f)
          },
          m
        )
      );
    return a;
  };
  return /* @__PURE__ */ i.jsx("div", { className: br.swiper__dots, children: o() });
}, ch = "_imageLayoutWrap_1g0cg_1", lt = {
  imageLayoutWrap: ch,
  "image-variant": "_image-variant_1g0cg_12",
  "layout--1": "_layout--1_1g0cg_12",
  "layout--2": "_layout--2_1g0cg_22",
  "big-left": "_big-left_1g0cg_31",
  "layout--3": "_layout--3_1g0cg_63"
}, uh = ({
  bigImagePosLeft: e = !1,
  images: t = [
    {
      url: "",
      alt: "",
      title: ""
    }
  ]
}) => {
  const n = t.length, r = sn(
    lt.imageLayoutWrap,
    lt["image-variant"],
    lt[dh(n)],
    { [lt["big-left"]]: e }
  );
  return /* @__PURE__ */ i.jsxs("article", { className: lt.imageLayoutWrap, children: [
    n === 1 && /* @__PURE__ */ i.jsx("div", { className: r, children: /* @__PURE__ */ i.jsx("div", { children: /* @__PURE__ */ i.jsx("img", { src: t[0].url, alt: t[0].alt, title: t[0].title }) }) }),
    n === 2 && /* @__PURE__ */ i.jsxs("div", { className: r, children: [
      /* @__PURE__ */ i.jsx("div", { style: { backgroundImage: `url(${t[0].url})` } }),
      /* @__PURE__ */ i.jsx("div", { children: /* @__PURE__ */ i.jsx("img", { src: t[1].url, alt: t[1].alt, title: t[1].title }) })
    ] }),
    n === 3 && /* @__PURE__ */ i.jsxs("div", { className: r, children: [
      /* @__PURE__ */ i.jsxs("div", { className: lt.csmall, children: [
        /* @__PURE__ */ i.jsx("div", { className: lt.c1, style: { backgroundImage: `url(${t[0].url})` } }),
        /* @__PURE__ */ i.jsx("div", { className: lt.c2, style: { backgroundImage: `url(${t[1].url})` } })
      ] }),
      /* @__PURE__ */ i.jsx("div", { className: lt.cbig, children: /* @__PURE__ */ i.jsx("img", { src: t[2].url, alt: t[2].alt, title: t[2].title }) })
    ] })
  ] });
}, dh = (e) => e > 0 && e <= 3 ? `layout--${e}` : "layout--1", fh = ({
  slides: e = [
    {
      bigImagePosLeft: !1,
      images: [
        {
          url: "",
          alt: "",
          title: ""
        }
      ]
    }
  ]
}) => {
  const [t, n] = Kr({ loop: !0 }), r = be(() => {
    n && n.scrollPrev();
  }, [n]), s = be(() => {
    n && n.scrollNext();
  }, [n]);
  return /* @__PURE__ */ i.jsx("div", { className: mt.desktopCarouselWrapper, children: /* @__PURE__ */ i.jsxs("div", { className: mt.swiper, ref: t, children: [
    /* @__PURE__ */ i.jsx("div", { className: mt.swiper__container, children: e.map((o, a) => /* @__PURE__ */ i.jsx("div", { className: mt.swiper__slide, children: /* @__PURE__ */ i.jsx(uh, { bigImagePosLeft: o.bigImagePosLeft, images: o.images }) }, a)) }),
    /* @__PURE__ */ i.jsx("button", { className: sn(mt.swiper__pagination, mt.swiper__prev), onClick: r, children: "Prev" }),
    /* @__PURE__ */ i.jsx("button", { className: sn(mt.swiper__pagination, mt.swiper__next), onClick: s, children: "Next" }),
    n && /* @__PURE__ */ i.jsx(kc, { emblaApi: n })
  ] }) });
}, hh = "_mobileCarouselWrapper_zuf7v_1", ph = "_swiper_zuf7v_8", mh = "_swiper__container_zuf7v_17", vh = "_swiper__slide_zuf7v_22", hr = {
  mobileCarouselWrapper: hh,
  swiper: ph,
  swiper__container: mh,
  swiper__slide: vh
}, gh = ({
  mobileCarouselItems: e = [
    {
      url: "",
      alt: "",
      title: ""
    }
  ]
}) => {
  const [t, n] = Kr({ loop: !0 });
  return /* @__PURE__ */ i.jsx("div", { className: hr.mobileCarouselWrapper, children: /* @__PURE__ */ i.jsxs("div", { className: hr.swiper, ref: t, children: [
    /* @__PURE__ */ i.jsx("div", { className: hr.swiper__container, children: e.map((r, s) => /* @__PURE__ */ i.jsx("div", { className: hr.swiper__slide, children: /* @__PURE__ */ i.jsx("img", { src: r.url, alt: r.alt, title: r.title }) }, s)) }),
    n && /* @__PURE__ */ i.jsx(kc, { emblaApi: n })
  ] }) });
}, om = ({
  desktopSlides: e,
  mobileSlides: t
}) => {
  const [n] = N([parseInt(en.xxl.replace("px", ""))]), [r, s] = N(!1);
  B(() => (o(), window.addEventListener("resize", o), () => window.removeEventListener("resize", o)), []);
  const o = () => {
    const l = window.innerWidth;
    let c;
    c = n.find((d) => l < d), c ? c.toString() === en.xxl.replace("px", "") && s(!0) : s(!1);
  };
  return t || (t = ((l) => {
    let c = [];
    const d = (f) => {
      for (const u in f)
        u === "images" && Array.isArray(f[u]) ? c = c.concat(f[u]) : typeof f[u] == "object" && f[u] !== null && d(f[u]);
    };
    return d(l), [{ mobileCarouselItems: c }];
  })(e)), /* @__PURE__ */ i.jsx("div", { className: br.galleryCarouselWrapper, children: r ? /* @__PURE__ */ i.jsx(gh, { mobileCarouselItems: t[0].mobileCarouselItems }) : /* @__PURE__ */ i.jsx(fh, { slides: e }) });
}, xh = "_parallaxProductSection_qh1hl_1", wh = "_productImage_qh1hl_10", yh = "_logoImage_qh1hl_11", Ts = {
  parallaxProductSection: xh,
  productImage: wh,
  logoImage: yh
}, am = ({
  productImage: e,
  logoImage: t
}) => {
  const n = k(null), { scrollYProgress: r } = qi({
    target: n,
    offset: ["start end", "end end"]
  }), s = rn(r, [0, 1], ["0", "-175px"]);
  return /* @__PURE__ */ i.jsxs(
    et.div,
    {
      ref: n,
      className: Ts.parallaxProductSection,
      style: { translateY: s },
      transition: { ease: "easeInOut", duration: 2 },
      children: [
        /* @__PURE__ */ i.jsx("div", { className: Ts.productImage, children: /* @__PURE__ */ i.jsx("img", { src: e }) }),
        /* @__PURE__ */ i.jsx("div", { className: Ts.logoImage, children: /* @__PURE__ */ i.jsx("img", { src: t }) })
      ]
    }
  );
}, Ch = "_functionsTabWrapper_1uo3e_1", bh = {
  functionsTabWrapper: Ch
}, _h = "_active_hv7w7_1", jh = "_inactive_hv7w7_1", Sh = "_desktopScrollboxWrapper_hv7w7_3", Mh = "_desktopScrollbox__list_hv7w7_19", Lh = "_desktopScrollbox__title_hv7w7_47", Th = "_desktopScrollbox__progress_hv7w7_108", Vh = "_desktopScrollbox__media_hv7w7_131", Ze = {
  active: _h,
  inactive: jh,
  desktopScrollboxWrapper: Sh,
  desktopScrollbox__list: Mh,
  desktopScrollbox__title: Lh,
  desktopScrollbox__progress: Th,
  desktopScrollbox__media: Vh
}, on = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    focusable: "false",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M14.54 14.88c.95.72 1.57 1.87 1.57 3.16 0 2.45-2.21 4.38-4.74 3.89a3.87 3.87 0 0 1-3.08-3.08 3.978 3.978 0 0 1 1.49-3.96V4.38a2.38 2.38 0 1 1 4.76 0v10.5Zm-1.8-5.31V4.38a.58.58 0 0 0-1.16 0v5.19h1.16ZM17.16 2c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5ZM6.19 9.42c-.31.31-.83.83-1.77.83s-1.47-.53-1.78-.83l-.04-.04-.6-.6 1.2-1.2.6.6c.17.17.25.25.34.31.06.04.13.07.28.07.22 0 .3-.06.6-.35l.02-.02c.31-.31.83-.83 1.79-.83s1.46.51 1.78.82l.6.6-1.2 1.2-.6-.6c-.15-.15-.22-.22-.3-.26a.507.507 0 0 0-.27-.06c-.23 0-.32.06-.61.35l-.02.02Zm13.39.83c-.95 0-1.46-.52-1.77-.83l-.02-.02c-.29-.29-.37-.35-.61-.35-.14 0-.22.03-.27.06-.08.04-.15.11-.3.26l-.6.6-1.2-1.2.6-.6c.32-.32.83-.82 1.78-.82s1.48.52 1.79.83l.02.02c.29.29.37.35.6.35.14 0 .22-.03.28-.07.09-.06.17-.13.34-.31l.6-.6 1.2 1.2-.6.6-.04.04c-.31.31-.83.83-1.78.83ZM6.19 13.53c-.31.31-.83.83-1.77.83s-1.47-.53-1.78-.84l-.04-.04-.6-.6 1.2-1.2.6.6c.17.17.25.25.34.31.06.04.13.07.28.07.22 0 .3-.06.6-.35l.02-.02c.31-.31.83-.83 1.79-.83s1.46.51 1.78.82l.6.6-1.2 1.2-.6-.6c-.15-.15-.22-.22-.3-.26a.507.507 0 0 0-.27-.06c-.23 0-.32.06-.61.35l-.02.02Zm13.39.83c-.95 0-1.46-.52-1.77-.83l-.02-.02c-.29-.29-.37-.35-.61-.35-.14 0-.22.03-.27.06-.08.04-.15.11-.3.26l-.6.6-1.2-1.2.6-.6c.32-.32.83-.82 1.78-.82s1.48.52 1.79.83l.02.02c.29.29.37.35.6.35.14 0 .22-.03.28-.07.09-.06.17-.13.34-.31l.6-.6 1.2 1.2-.6.6-.04.04c-.31.31-.83.84-1.78.84Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), Ph = ({
  items: e = [
    {
      id: 1,
      text: "Sous-Vide",
      icon: on,
      isActive: !1,
      scrollMin: 0,
      scrollMax: 1,
      media: {
        type: "image",
        src: "/images/functionTab/function-tab-image.png",
        alt: "",
        title: ""
      }
    },
    {
      id: 2,
      text: "Slow Cook",
      icon: on,
      isActive: !1,
      scrollMin: 0,
      scrollMax: 1,
      media: {
        type: "image",
        src: "/images/functionTab/function-tab-image.png",
        alt: "",
        title: ""
      }
    }
  ]
}) => {
  const [t, n] = N("0vh"), [r, s] = N(e), o = "vh", a = k([]), l = k(null), { scrollYProgress: c } = qi({
    target: l
  }), d = () => {
    a.current.forEach((u) => {
      u && (u.pause(), u.currentTime = 0, u.load());
    });
  }, f = (u, h) => {
    a.current[h] = u;
  };
  return B(() => {
    const u = r.length, h = String(u * 100) + o;
    n(h), s(
      (p) => p.map((v, m) => ({
        ...v,
        scrollMin: m * (1 / u),
        scrollMax: (m + 1) * (1 / u),
        isActive: !1
      }))
    );
  }, []), bc(c, "change", (u) => {
    s(
      (h) => h.map((p) => {
        const v = u > p.scrollMin && u <= p.scrollMax;
        return p.isActive !== v && a.current.length > 0 && d(), p.isActive !== v ? { ...p, isActive: v } : p;
      })
    );
  }), /* @__PURE__ */ i.jsx("div", { ref: l, style: { height: t }, children: /* @__PURE__ */ i.jsxs("article", { className: Ze.desktopScrollboxWrapper, children: [
    /* @__PURE__ */ i.jsxs("ul", { className: Ze.desktopScrollbox__list, children: [
      r.map((u, h) => {
        const p = rn(
          c,
          [h / r.length, (h + 1) / r.length],
          ["-100%", "0%"]
        );
        let v = u.isActive ? Ze.active : Ze.inactive;
        return /* @__PURE__ */ i.jsxs(
          "li",
          {
            className: v,
            children: [
              /* @__PURE__ */ i.jsxs("div", { className: Ze.desktopScrollbox__title, children: [
                /* @__PURE__ */ i.jsx("span", { style: { color: kt.color.brand.green.G500 }, children: /* @__PURE__ */ i.jsx(u.icon, {}) }),
                /* @__PURE__ */ i.jsx("span", { children: u.text })
              ] }),
              /* @__PURE__ */ i.jsx("div", { className: Ze.desktopScrollbox__progress, children: /* @__PURE__ */ i.jsx(et.div, { style: { x: p } }) })
            ]
          },
          u.id
        );
      }),
      /* @__PURE__ */ i.jsxs("li", { className: Ze.inactive, children: [
        /* @__PURE__ */ i.jsxs("div", { className: Ze.desktopScrollbox__title, children: [
          /* @__PURE__ */ i.jsx("span", { style: { color: kt.color.brand.green.G500 } }),
          /* @__PURE__ */ i.jsx("span", { children: "and many more..." })
        ] }),
        /* @__PURE__ */ i.jsx("div", { className: Ze.desktopScrollbox__progress })
      ] })
    ] }),
    /* @__PURE__ */ i.jsx("div", { className: Ze.desktopScrollbox__media, children: r.map((u, h) => {
      let p = u.isActive ? Ze.active : Ze.inactive;
      return /* @__PURE__ */ i.jsx(Dt.Fragment, { children: /* @__PURE__ */ i.jsxs("div", { className: sn(u.media.type, p), children: [
        u.media.type === "image" && /* @__PURE__ */ i.jsx("img", { src: u.media.src, alt: u.media.alt, title: u.media.title }),
        u.media.type === "video" && /* @__PURE__ */ i.jsx("video", { ref: (v) => f(v, h), controls: !0, playsInline: !0, children: /* @__PURE__ */ i.jsx("source", { src: u.media.src }) })
      ] }) }, h);
    }) })
  ] }) });
}, Eh = "_active_1fxey_1", Rh = "_inactive_1fxey_1", Hh = "_mobileScrollboxWrapper_1fxey_3", Ah = "_mobileScrollbox__list_1fxey_17", kh = "_mobileScrollbox__title_1fxey_68", St = {
  active: Eh,
  inactive: Rh,
  mobileScrollboxWrapper: Hh,
  mobileScrollbox__list: Ah,
  mobileScrollbox__title: kh
}, Zh = ({
  items: e = [
    {
      id: 1,
      text: "Sous-Vide",
      icon: on,
      isActive: !1,
      scrollMin: 0,
      scrollMax: 1,
      media: {
        type: "image",
        src: "/images/functionTab/function-tab-image.png",
        alt: "",
        title: ""
      }
    },
    {
      id: 2,
      text: "Slow Cook",
      icon: on,
      isActive: !1,
      scrollMin: 0,
      scrollMax: 1,
      media: {
        type: "image",
        src: "/images/functionTab/function-tab-image.png",
        alt: "",
        title: ""
      }
    }
  ]
}) => {
  const [t, n] = N("0dvh"), [r, s] = N(e), o = "dvh", a = k([]), l = k(null), { scrollYProgress: c } = qi({
    target: l
  }), d = () => {
    a.current.forEach((u) => {
      u && (u.pause(), u.currentTime = 0, u.load());
    });
  }, f = (u, h) => {
    a.current[h] = u;
  };
  return B(() => {
    const u = r.length, h = String(u * 100) + o;
    n(h), s(
      (p) => p.map((v, m) => ({
        ...v,
        scrollMin: m * (1 / u),
        scrollMax: (m + 1) * (1 / u),
        isActive: !1
      }))
    );
  }, []), bc(c, "change", (u) => {
    s(
      (h) => h.map((p) => {
        const v = u > p.scrollMin && u <= p.scrollMax;
        return p.isActive !== v && a.current.length > 0 && d(), p.isActive !== v ? { ...p, isActive: v } : p;
      })
    );
  }), /* @__PURE__ */ i.jsx("div", { ref: l, style: { height: t }, children: /* @__PURE__ */ i.jsx("article", { className: St.mobileScrollboxWrapper, children: /* @__PURE__ */ i.jsxs("ul", { className: St.mobileScrollbox__list, children: [
    r.map((u, h) => {
      let p = u.isActive ? St.active : St.inactive;
      return /* @__PURE__ */ i.jsxs(
        "li",
        {
          className: p,
          children: [
            /* @__PURE__ */ i.jsxs("div", { className: St.mobileScrollbox__title, children: [
              /* @__PURE__ */ i.jsx("span", { style: { color: kt.color.brand.green.G500 }, children: /* @__PURE__ */ i.jsx(u.icon, {}) }),
              /* @__PURE__ */ i.jsx("span", { children: u.text })
            ] }),
            /* @__PURE__ */ i.jsxs("div", { className: u.media.type, children: [
              u.media.type === "image" && /* @__PURE__ */ i.jsx("img", { src: u.media.src, alt: u.media.alt, title: u.media.title }),
              u.media.type === "video" && /* @__PURE__ */ i.jsx("video", { ref: (v) => f(v, h), controls: !0, playsInline: !0, children: /* @__PURE__ */ i.jsx("source", { src: u.media.src }) })
            ] })
          ]
        },
        u.id
      );
    }),
    /* @__PURE__ */ i.jsx("li", { className: St.inactive, children: /* @__PURE__ */ i.jsxs("div", { className: St.mobileScrollbox__title, children: [
      /* @__PURE__ */ i.jsx("span", { style: { color: kt.color.brand.green.G500 } }),
      /* @__PURE__ */ i.jsx("span", { children: "and many more..." })
    ] }) })
  ] }) }) });
}, lm = ({
  items: e = [
    {
      id: 1,
      text: "Sous-Vide",
      icon: on,
      isActive: !1,
      scrollMin: 0,
      scrollMax: 1,
      media: {
        type: "image",
        src: "/images/functionTab/function-tab-image.png",
        alt: "",
        title: ""
      }
    },
    {
      id: 2,
      text: "Slow Cook",
      icon: on,
      isActive: !1,
      scrollMin: 0,
      scrollMax: 1,
      media: {
        type: "image",
        src: "/images/functionTab/function-tab-image.png",
        alt: "",
        title: ""
      }
    }
  ]
}) => {
  const [t] = N([parseInt(en.xxl.replace("px", ""))]), [n, r] = N(!1);
  B(() => (s(), window.addEventListener("resize", s), () => window.removeEventListener("resize", s)), []);
  const s = () => {
    const o = window.innerWidth;
    let a;
    a = t.find((l) => o < l), a ? a.toString() === en.xxl.replace("px", "") && r(!0) : r(!1);
  };
  return /* @__PURE__ */ i.jsx("div", { className: bh.functionsTabWrapper, children: n ? /* @__PURE__ */ i.jsx(Zh, { items: e }) : /* @__PURE__ */ i.jsx(Ph, { items: e }) });
}, Bh = "_ModuleImageCarousel_1k5eh_1", Dh = "_ModuleImageCarousel__gallery_1k5eh_9", Nh = "_ModuleImageCarousel__packshot_1k5eh_17", Oh = "_ModuleImageCarousel__eyecatcher_1k5eh_22", pr = {
  ModuleImageCarousel: Bh,
  ModuleImageCarousel__gallery: Dh,
  ModuleImageCarousel__packshot: Nh,
  ModuleImageCarousel__eyecatcher: Oh
}, $h = "_staticGalleryWrapper_1r6u3_1", Ih = {
  staticGalleryWrapper: $h
}, zh = ({
  imageSize: e,
  images: t = []
}) => {
  const [n] = N([parseInt(en.xxl.replace("px", ""))]), [r, s] = N(t);
  B(() => (a(), window.addEventListener("resize", a), () => window.removeEventListener("resize", a)), [n]);
  const o = () => {
    let c = t ? [...t] : [];
    if (c.length) {
      let d = !1;
      for (; c.length > 4; )
        d ? c.splice(0, 1) : c.splice(c.length - 1, 1), d = !d;
    }
    return c;
  }, a = () => {
    const l = window.innerWidth;
    let c;
    c = n.find((d) => l < d), c ? c.toString() === en.xxl.replace("px", "") && s(o()) : s(t);
  };
  return /* @__PURE__ */ i.jsx("div", { className: Ih.staticGalleryWrapper, children: /* @__PURE__ */ i.jsx("ul", { style: e ? { "--staticImageGalleryTileSize": e } : {}, children: r && r.map((l, c) => /* @__PURE__ */ i.jsx("li", { children: /* @__PURE__ */ i.jsx("img", { src: l.url, alt: l.alt, title: l.title ? l.title : "" }) }, c)) }) });
}, Fh = "_scroller_103vz_7", qh = "_scroller__inner_103vz_11", Wh = "_scroll_103vz_7", ya = {
  scroller: Fh,
  scroller__inner: qh,
  scroll: Wh
}, Uh = ({
  imageSize: e,
  images: t = [],
  direction: n,
  speed: r
}) => /* @__PURE__ */ i.jsx(
  "div",
  {
    className: ya.scroller,
    "data-animated": "true",
    "data-direction": n,
    "data-speed": r,
    children: /* @__PURE__ */ i.jsxs(
      "div",
      {
        className: ya.scroller__inner,
        style: e ? { "--staticImageGalleryTileSize": e } : {},
        children: [
          t && t.map((s, o) => /* @__PURE__ */ i.jsx(
            "img",
            {
              src: s.url,
              alt: s.alt,
              title: s.title ? s.title : ""
            },
            o
          )),
          t && t.map((s, o) => /* @__PURE__ */ i.jsx("img", { src: s.url, "aria-hidden": "true" }, o))
        ]
      }
    )
  }
), cm = ({
  eyecatcher: e = {
    firstLine: "First line",
    secondLine: "Second Line",
    thirdLine: "ThirdLine",
    size: "medium",
    backgroundColor: "green",
    rotation: "-5 degrees",
    buttonSize: "160px"
  },
  productImage: t = "/images/image-carousel-product.png",
  infiniteGallery: n = !1,
  imageSize: r,
  images: s = [
    {
      url: "/images/image-carousel.png",
      alt: "Bild von einem Kuchen",
      title: "Kuchenbild"
    }
  ],
  direction: o = "left",
  speed: a = "slow"
}) => /* @__PURE__ */ i.jsxs("div", { className: pr.ModuleImageCarousel, children: [
  /* @__PURE__ */ i.jsx("div", { className: pr.ModuleImageCarousel__gallery, children: n ? /* @__PURE__ */ i.jsx(Uh, { direction: o, speed: a, imageSize: r, images: s }) : /* @__PURE__ */ i.jsx(zh, { imageSize: r, images: s }) }),
  t && /* @__PURE__ */ i.jsx("div", { className: pr.ModuleImageCarousel__packshot, children: /* @__PURE__ */ i.jsx(Uf, { aspectRatio: "16/9", children: /* @__PURE__ */ i.jsx("img", { src: t }) }) }),
  /* @__PURE__ */ i.jsx("div", { className: pr.ModuleImageCarousel__eyecatcher, children: /* @__PURE__ */ i.jsx(Ff, { ...e }) })
] }), Gh = "_userReview_x3nmn_1", Kh = "_lead_x3nmn_9", Yh = "_title_x3nmn_15", Xh = "_follow_x3nmn_25", Jh = "_reviewContent_x3nmn_38", _n = {
  userReview: Gh,
  lead: Kh,
  title: Yh,
  follow: Xh,
  reviewContent: Jh
}, Qh = "_StarRating_14tll_1", ep = "_firstRow_14tll_7", tp = "_secondRow_14tll_7", np = "_small_14tll_13", rp = "_star_14tll_27", Mt = {
  StarRating: Qh,
  firstRow: ep,
  secondRow: tp,
  small: np,
  star: rp
}, Ca = ({
  overallStars: e,
  size: t,
  aria: n
}) => {
  let r = !1, s;
  return n || (n = `Rating: ${e} out of 5 stars`), t && t === "small" && (s = Mt.small), e % 1 !== 0 && (r = !0, e = Math.floor(e)), /* @__PURE__ */ i.jsxs("div", { className: sn(Mt.StarRating, s), role: "img", "aria-label": n, children: [
    /* @__PURE__ */ i.jsx("div", { className: Mt.firstRow, "aria-hidden": "true", children: [...Array(5)].map((o, a) => /* @__PURE__ */ i.jsx("div", { className: Mt.star, children: /* @__PURE__ */ i.jsx(dp, {}) }, a)) }),
    /* @__PURE__ */ i.jsxs("div", { className: Mt.secondRow, children: [
      [...Array(e)].map((o, a) => /* @__PURE__ */ i.jsx("div", { className: Mt.star, children: /* @__PURE__ */ i.jsx(hp, {}) }, a)),
      r && /* @__PURE__ */ i.jsx("div", { className: Mt.star, children: /* @__PURE__ */ i.jsx(fp, {}) })
    ] })
  ] });
}, um = ({
  greenText: e,
  additionalText: t,
  overallStars: n,
  reviewItems: r
}) => /* @__PURE__ */ i.jsxs("div", { className: _n.userReview, children: [
  /* @__PURE__ */ i.jsxs("div", { className: _n.lead, children: [
    /* @__PURE__ */ i.jsx("span", { className: _n.title, children: e }),
    /* @__PURE__ */ i.jsxs("div", { className: _n.follow, children: [
      /* @__PURE__ */ i.jsx(Ca, { overallStars: n }),
      /* @__PURE__ */ i.jsx("span", { children: t })
    ] })
  ] }),
  r && r.map((s, o) => /* @__PURE__ */ i.jsxs("div", { children: [
    /* @__PURE__ */ i.jsx(Ca, { overallStars: s.stars, size: "small" }),
    /* @__PURE__ */ i.jsx("p", { className: _n.reviewContent, children: s.reviewText })
  ] }, o))
] }), sp = "_productBlockWrap_kg3gw_1", ip = "_productBlockWrap__container_kg3gw_6", op = "_darkMode_kg3gw_11", ap = "_productBlockWrap__inner_kg3gw_15", lp = "_productBlockWrap__image_kg3gw_24", cp = "_productBlockWrap__content_kg3gw_38", up = "_btnWrap_kg3gw_53", Lt = {
  productBlockWrap: sp,
  productBlockWrap__container: ip,
  darkMode: op,
  productBlockWrap__inner: ap,
  productBlockWrap__image: lp,
  productBlockWrap__content: cp,
  btnWrap: up
}, dm = ({
  darkMode: e,
  headline: t,
  price: n,
  ctaText: r,
  image: s,
  imageLeft: o = !0
}) => /* @__PURE__ */ i.jsx("div", { className: `${Lt.productBlockWrap} ${e ? Lt.darkMode : ""}`, children: /* @__PURE__ */ i.jsx("article", { className: Lt.productBlockWrap__container, children: /* @__PURE__ */ i.jsxs("div", { className: Lt.productBlockWrap__inner, children: [
  /* @__PURE__ */ i.jsx("div", { className: Lt.productBlockWrap__image, style: o ? {} : { order: 2 }, children: s && /* @__PURE__ */ i.jsx("img", { src: s, alt: "Thermomix" }) }),
  /* @__PURE__ */ i.jsxs("div", { className: Lt.productBlockWrap__content, style: o ? {} : { order: 1 }, children: [
    t && /* @__PURE__ */ i.jsx(Ce, { component: "h4", variant: "h4", fontWeight: "bold", children: t }),
    n && /* @__PURE__ */ i.jsx(Qf, { size: "large", price: n }),
    r && /* @__PURE__ */ i.jsx("div", { className: Lt.btnWrap, children: /* @__PURE__ */ i.jsx(N4, { sizing: "fill", children: /* @__PURE__ */ i.jsx(
      Ya,
      {
        size: "medium",
        type: "primary",
        children: r
      }
    ) }) })
  ] })
] }) }) }), fm = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    focusable: "false",
    viewBox: "0 0 24 24",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m12 2.95 9.05 8.33-.81.89-1.32-1.22v6.48c0 2-1.61 3.62-3.6 3.62h-10V10.74l-1.56 1.43-.81-.89L12 2.95ZM6.52 9.64 12 4.59l5.72 5.26v7.58c0 1.33-1.07 2.41-2.4 2.41h-8.8V9.63Z"
      }
    )
  }
), hm = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M10.74 5.76A1.261 1.261 0 1 1 12 7.02c-.69 0-1.26-.56-1.26-1.26Zm6.24 0a1.261 1.261 0 1 1 1.26 1.26c-.69 0-1.26-.56-1.26-1.26Zm-12.47 0a1.261 1.261 0 1 1 1.26 1.26c-.69 0-1.26-.56-1.26-1.26Zm0 6.24a1.261 1.261 0 1 1 1.26 1.26c-.69 0-1.26-.56-1.26-1.26Zm6.24 0a1.261 1.261 0 1 1 1.26 1.26c-.69 0-1.26-.56-1.26-1.26Zm6.24 0a1.261 1.261 0 1 1 1.26 1.26c-.69 0-1.26-.56-1.26-1.26ZM4.52 18.24a1.261 1.261 0 1 1 1.26 1.26c-.69 0-1.26-.56-1.26-1.26Zm6.24 0a1.261 1.261 0 1 1 1.26 1.26c-.69 0-1.26-.56-1.26-1.26Zm6.24 0a1.261 1.261 0 1 1 1.26 1.26c-.69 0-1.26-.56-1.26-1.26Z"
      }
    )
  }
), pm = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    focusable: "false",
    viewBox: "0 0 24 24",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M3.02 4.9h17.96v1.2H3.02V4.9Zm0 6.5h17.96v1.2H3.02v-1.2Zm0 6.5h17.96v1.2H3.02v-1.2Z"
      }
    )
  }
), mm = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M11.15 15.3c0-.5.4-.9.9-.9h.01c.5 0 .9.4.9.9s-.4.9-.9.9h-.01c-.5 0-.9-.4-.9-.9Zm8.9-5.82v8.02c0 1.98-1.61 3.59-3.59 3.59H3.95V9.47h2.98V7.98c0-2.81 2.28-5.1 5.09-5.1s5.09 2.29 5.09 5.1v1.49h2.94Zm-11.92 0h7.78V7.99c0-2.15-1.75-3.9-3.89-3.9s-3.89 1.75-3.89 3.9v1.49Zm10.72 1.2H5.15v9.22h11.31a2.39 2.39 0 0 0 2.39-2.39v-6.82Z"
      }
    )
  }
), vm = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    focusable: "false",
    viewBox: "0 0 24 24",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M11.15 15.3c0-.5.4-.9.9-.9h.01c.5 0 .9.4.9.9s-.4.9-.9.9h-.01c-.5 0-.9-.4-.9-.9Zm8.9-5.82v8.02c0 1.98-1.61 3.59-3.59 3.59H3.95V9.47h11.86V7.98c0-2.14-1.75-3.9-3.9-3.9-.99 0-1.89.37-2.58.98l-.45.4-.8-.9.45-.4c.9-.8 2.08-1.28 3.37-1.28 2.81 0 5.1 2.29 5.1 5.1v1.49h3.04Zm-1.2 1.2H5.15v9.22h11.31a2.39 2.39 0 0 0 2.39-2.39v-6.82Z"
      }
    )
  }
), gm = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M2.95 3.05h2.7l.69 2.28h14.71V9.3c0 1.99-1.61 3.6-3.6 3.6H8.66l.77 2.35h9.66v1.2H8.56l-1.3-3.97-2.5-8.23H2.95v-1.2Zm3.76 3.48 1.57 5.17h9.17c1.33 0 2.4-1.07 2.4-2.4V6.53H6.71Zm2.2 13.17a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Zm6.27 0a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z"
      }
    )
  }
), xm = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    focusable: "false",
    viewBox: "0 0 24 24",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M6.93 11.4h4.14v1.2H6.93v-1.2Zm6.1 1.2h4.14v-1.2h-4.14v1.2Zm-6.1 2.44H11v-1.2H6.93v1.2Zm6.1 0h4.14v-1.2h-4.14v1.2Zm-6.1 2.46h4.06v-1.19H6.93v1.19Zm9.14-12.48V2.9h1.2v2.12h3.78V15.5c0 3.09-2.51 5.6-5.6 5.6H2.95V5.02h3.77V2.9h1.2v2.12h8.15Zm3.78 3.15V6.22H4.15v1.95h15.7ZM4.15 19.89h11.3a4.4 4.4 0 0 0 4.4-4.4V9.37H4.15v10.52Z"
      }
    )
  }
), wm = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    focusable: "false",
    viewBox: "0 0 24 24",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M11.19 19.9 3 12l8.19-7.9.83.86-6.68 6.44H21v1.2H5.34l6.68 6.44-.83.86Z"
      }
    )
  }
), ym = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M19.9 12.81 12 21l-7.9-8.19.86-.83 6.44 6.68V3h1.2v15.66l6.44-6.68.86.83Z"
      }
    )
  }
), Cm = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12.81 4.1 21 12l-8.19 7.9-.83-.86 6.68-6.44H3v-1.2h15.66l-6.68-6.44.83-.86Z"
      }
    )
  }
), bm = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M4.1 11.19 12 3l7.9 8.19-.86.83-6.44-6.68V21h-1.2V5.34l-6.44 6.68-.86-.83Z"
      }
    )
  }
), _m = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m7.74 12 8.56-8.14-.83-.86L6 12l9.47 9 .83-.86L7.74 12Z"
      }
    )
  }
), jm = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12 16.26 3.86 7.7 3 8.53 12 18l9-9.47-.86-.83L12 16.26Z"
      }
    )
  }
), Sm = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M16.26 12 7.7 20.14l.83.86L18 12 8.53 3l-.83.86L16.26 12Z"
      }
    )
  }
), Mm = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m12 7.74 8.14 8.56.86-.83L12 6l-9 9.47.86.83L12 7.74Z"
      }
    )
  }
), Lm = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M12.01 18.53c-.5 0-.9-.4-.9-.9s.4-.9.89-.9c.5 0 .9.4.9.9s-.4.9-.9.9Zm3.9-4.31c-2.16-2.08-5.66-2.08-7.82 0l.83.86c1.7-1.64 4.46-1.64 6.15 0l.83-.86Zm2.73-2.83c-3.66-3.54-9.61-3.54-13.27 0l.83.86c3.2-3.1 8.4-3.1 11.6 0l.83-.86Zm2.76-2.81c-5.18-5-13.62-5-18.8.01l.83.86c4.72-4.57 12.41-4.57 17.13 0l.83-.86Zm-4.32 7.45c0-.13.03-.29.08-.44.05-.16.12-.3.22-.39.09-.08.22-.15.43-.15.22 0 .35.07.43.15.09.09.17.22.22.38.05.15.07.31.07.44h-1.45Zm-1.46 0v3.13h4.4v-3.13h-.69v-.01c0-.17-.03-.41-.11-.66-.07-.24-.2-.52-.44-.74-.24-.23-.57-.36-.98-.36-.41 0-.74.14-.98.36-.23.22-.36.49-.44.74-.08.25-.1.49-.11.66v.01h-.66Z"
      }
    )
  }
), Tm = (e) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: [
      /* @__PURE__ */ i.jsx(
        "path",
        {
          fill: "#cfd0d0",
          d: "M20.57 9.45c-4.72-4.57-12.41-4.57-17.13 0l-.83-.86c5.18-5.01 13.62-5.01 18.8 0l-.83.86Z"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "path",
        {
          d: "M12.01 18.53c-.5 0-.9-.4-.9-.9s.4-.9.89-.9c.5 0 .9.4.9.9s-.4.9-.9.9Zm3.9-4.31c-2.16-2.08-5.66-2.08-7.82 0l.83.86c1.7-1.64 4.46-1.64 6.15 0l.83-.86Zm2.73-2.83c-3.66-3.54-9.61-3.54-13.27 0l.83.86c3.2-3.1 8.4-3.1 11.6 0l.83-.86Zm-1.55 4.64c0-.13.03-.29.08-.44.05-.16.12-.3.22-.39.09-.08.22-.15.43-.15.22 0 .35.07.43.15.09.09.17.22.22.38.05.15.07.31.07.44h-1.45Zm-1.46 0v3.13h4.4v-3.13h-.69v-.01c0-.17-.03-.41-.11-.66-.07-.24-.2-.52-.44-.74-.24-.23-.57-.36-.98-.36-.41 0-.74.14-.98.36-.23.22-.36.49-.44.74-.08.25-.1.49-.11.66v.01h-.66Z",
          fill: "currentColor"
        }
      )
    ]
  }
), Vm = (e) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: [
      /* @__PURE__ */ i.jsx(
        "path",
        {
          d: "M17.8 12.26c-3.2-3.1-8.4-3.1-11.6 0l-.83-.86c3.66-3.54 9.61-3.54 13.27 0l-.83.86Zm2.76-2.81c-4.72-4.57-12.41-4.57-17.13 0l-.83-.86c5.18-5.01 13.62-5.01 18.8 0l-.83.86Z",
          fill: "#cfd0d0"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "path",
        {
          d: "M12.01 18.53c-.5 0-.9-.4-.9-.9s.4-.9.89-.9c.5 0 .9.4.9.9s-.4.9-.9.9Zm3.9-4.31c-2.16-2.08-5.66-2.08-7.82 0l.83.86c1.7-1.64 4.46-1.64 6.15 0l.83-.86Zm1.17 1.81c0-.13.03-.29.08-.44.05-.16.12-.3.22-.39.09-.08.22-.15.43-.15.22 0 .35.07.43.15.09.09.17.22.22.38.05.15.07.31.07.44h-1.45Zm-1.46 0v3.13h4.4v-3.13h-.69v-.01c0-.17-.03-.41-.11-.66-.07-.24-.2-.52-.44-.74-.24-.23-.57-.36-.98-.36-.41 0-.74.14-.98.36-.23.22-.36.49-.44.74-.08.25-.1.49-.11.66v.01h-.66Z",
          fill: "currentColor"
        }
      )
    ]
  }
), Pm = (e) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: [
      /* @__PURE__ */ i.jsx(
        "path",
        {
          d: "M15.08 15.08c-1.7-1.64-4.46-1.64-6.15 0l-.83-.86c2.16-2.08 5.66-2.08 7.82 0l-.83.86Zm2.72-2.83c-3.2-3.1-8.4-3.1-11.6 0l-.83-.86c3.66-3.54 9.61-3.54 13.27 0l-.83.86Zm2.76-2.81c-4.72-4.57-12.41-4.57-17.13 0l-.83-.86c5.18-5.01 13.62-5.01 18.8 0l-.83.86Z",
          fill: "#cfd0d0"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "path",
        {
          d: "M12.01 18.53c-.5 0-.9-.4-.9-.9s.4-.9.89-.9c.5 0 .9.4.9.9s-.4.9-.9.9Zm5.07-2.49c0-.13.03-.29.08-.44.05-.16.12-.3.22-.39.09-.08.22-.15.43-.15.22 0 .35.07.43.15.09.09.17.22.22.38.05.15.07.31.07.44h-1.45Zm-1.46 0v3.13h4.4v-3.13h-.69v-.01c0-.17-.03-.41-.11-.66-.07-.24-.2-.52-.44-.74-.24-.23-.57-.36-.98-.36-.41 0-.74.14-.98.36-.23.22-.36.49-.44.74-.08.25-.1.49-.11.66v.01h-.66Z",
          fill: "currentColor"
        }
      )
    ]
  }
), Em = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M12.01 18.85c-.5 0-.9-.4-.9-.9s.4-.9.89-.9c.5 0 .9.4.9.9s-.4.9-.9.9Zm3.9-4.31c-2.16-2.08-5.66-2.08-7.82 0l.83.86c1.7-1.63 4.46-1.64 6.15 0l.83-.86Zm2.73-2.83c-3.66-3.54-9.61-3.54-13.27 0l.83.86c3.2-3.09 8.4-3.09 11.6 0l.83-.86ZM21.4 8.9c-5.18-5-13.62-5-18.8.01l.83.86c4.72-4.57 12.41-4.57 17.13 0l.83-.86Z"
      }
    )
  }
), Rm = (e) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: [
      /* @__PURE__ */ i.jsx(
        "path",
        {
          d: "M12.01 18.85c-.5 0-.9-.4-.9-.9s.4-.9.89-.9c.5 0 .9.4.9.9s-.4.9-.9.9Zm3.9-4.31c-2.16-2.08-5.66-2.08-7.82 0l.83.86c1.7-1.63 4.46-1.64 6.15 0l.83-.86Zm2.73-2.83c-3.66-3.54-9.61-3.54-13.27 0l.83.86c3.2-3.09 8.4-3.09 11.6 0l.83-.86Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "path",
        {
          d: "M20.57 9.77C15.85 5.2 8.16 5.2 3.44 9.77l-.83-.86c5.18-5.01 13.62-5.01 18.8 0l-.83.86Z",
          fill: "#cfd0d0"
        }
      )
    ]
  }
), Hm = (e) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: [
      /* @__PURE__ */ i.jsx(
        "path",
        {
          d: "M12.01 18.85c-.5 0-.9-.4-.9-.9s.4-.9.89-.9c.5 0 .9.4.9.9s-.4.9-.9.9Zm3.9-4.31c-2.16-2.08-5.66-2.08-7.82 0l.83.86c1.7-1.63 4.46-1.64 6.15 0l.83-.86Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "path",
        {
          d: "M17.8 12.58c-3.2-3.09-8.41-3.09-11.6 0l-.83-.86c3.66-3.54 9.61-3.54 13.27 0l-.83.86Zm2.76-2.81C15.84 5.2 8.15 5.2 3.43 9.77l-.83-.86c5.18-5.01 13.62-5.01 18.8 0l-.83.86Z",
          fill: "#cfd0d0"
        }
      )
    ]
  }
), Am = (e) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: [
      /* @__PURE__ */ i.jsx(
        "path",
        {
          d: "M12.01 18.85c-.5 0-.9-.4-.9-.9s.4-.9.89-.9c.5 0 .9.4.9.9s-.4.9-.9.9Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "path",
        {
          d: "M15.08 15.4c-1.7-1.64-4.46-1.63-6.15 0l-.83-.86c2.16-2.08 5.66-2.08 7.82 0l-.83.86Zm2.72-2.83c-3.2-3.09-8.41-3.09-11.6 0l-.83-.86c3.66-3.54 9.61-3.54 13.27 0l-.83.86Zm2.76-2.81c-4.72-4.57-12.41-4.57-17.13 0L2.6 8.9c5.18-5.01 13.62-5.01 18.8 0l-.83.86Z",
          fill: "#cfd0d0"
        }
      )
    ]
  }
), km = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M11.42 13.88V3h1.2v10.88l3.36-3.65.88.81-4.84 5.26-4.84-5.26.88-.81 3.36 3.65Zm9.58-.46v3.99c0 1.98-1.61 3.59-3.6 3.59H3v-7.58h1.2v6.38h13.2c1.33 0 2.4-1.07 2.4-2.39v-3.99H21Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), Zm = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "m12.01 3 4.85 5.22-.88.8-3.36-3.62v10.75h-1.2V5.4L8.06 9.02l-.88-.8L12.01 3ZM21 13.48v3.96c0 1.97-1.61 3.56-3.6 3.56H3v-7.52h1.2v6.33h13.2c1.33 0 2.4-1.06 2.4-2.38v-3.96H21Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), Bm = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M21 5.06 9.18 19.7 3 13.58l.85-.86 5.23 5.18L20.06 4.3l.94.76Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), Dm = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M11.4 11.4V3h1.2v8.4H21v1.2h-8.4V21h-1.2v-8.4H3v-1.2h8.4Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), Nm = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M11.13 12 3.1 3.97l.87-.87L12 11.13l8.03-8.03.87.87L12.87 12l8.03 8.03-.87.87L12 12.87 3.97 20.9l-.87-.87L11.13 12Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), Om = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx("path", { d: "M3 12.6v-1.2h18v1.2H3Z", fill: "currentColor", fillRule: "evenodd" })
  }
), $m = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M12 3.2a8.8 8.8 0 1 0 0 17.6 8.8 8.8 0 0 0 0-17.6ZM2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm14.91-3.24-6.33 7.74-3.43-3.35.84-.86 2.5 2.43L15.99 8l.93.76Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), Im = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M12 3.2a8.8 8.8 0 1 0 0 17.6 8.8 8.8 0 0 0 0-17.6ZM2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm9.4-.6V6.94h1.2v4.46h4.46v1.2H12.6v4.46h-1.2V12.6H6.94v-1.2h4.46Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), zm = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 48 48",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M24 6.4C14.28 6.4 6.4 14.28 6.4 24c0 9.72 7.88 17.6 17.6 17.6 9.72 0 17.6-7.88 17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zM4 24C4 12.96 12.96 4 24 4s20 8.96 20 20-8.96 20-20 20S4 35.04 4 24zm30.12 1.2H13.88v-2.4h20.24v2.4z",
        clipRule: "evenodd"
      }
    )
  }
), Fm = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M12 3.2a8.8 8.8 0 1 0 0 17.6 8.8 8.8 0 0 0 0-17.6ZM2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm9.15 0L7.96 8.81l.85-.85L12 11.15l3.19-3.19.85.85L12.85 12l3.19 3.19-.85.85L12 12.85l-3.19 3.19-.85-.85L11.15 12Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), qm = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm10-8.8a8.8 8.8 0 1 0 0 17.6 8.8 8.8 0 0 0 0-17.6Zm.6 6.86v7.16h-1.2v-7.16h1.2Zm.26-2.24c0 .48-.39.86-.86.86s-.86-.39-.86-.86.39-.86.86-.86.86.39.86.86Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), Wm = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M3 12a9 9 0 1 1 18.001.001A9 9 0 0 1 3 12Zm1.55-2.32c-.23.73-.35 1.51-.35 2.32s.12 1.59.35 2.32h3.71c-.1-.76-.15-1.54-.15-2.32s.05-1.56.15-2.32H4.55Zm.49-1.2h3.42c.29-1.44.75-2.8 1.35-3.97a7.804 7.804 0 0 0-4.77 3.97Zm6.31-4.25c-.73 1.16-1.31 2.63-1.66 4.25h4.62c-.36-1.62-.95-3.09-1.68-4.25-.21-.02-.41-.02-.63-.02s-.44 0-.65.03Zm2.81.28c.6 1.17 1.07 2.53 1.37 3.97h3.43a7.802 7.802 0 0 0-4.8-3.97Zm5.29 5.17h-3.71c.1.76.16 1.54.16 2.32s-.05 1.56-.16 2.32h3.71c.23-.73.35-1.51.35-2.32s-.12-1.59-.35-2.32Zm-.49 5.84h-3.43c-.3 1.45-.77 2.8-1.37 3.97 2.1-.6 3.83-2.06 4.8-3.97Zm-6.34 4.25c.73-1.16 1.32-2.63 1.68-4.25H9.68c.35 1.62.93 3.09 1.66 4.25.22.02.43.03.66.03s.42 0 .63-.02Zm-2.82-.29a15.78 15.78 0 0 1-1.35-3.96H5.03a7.79 7.79 0 0 0 4.77 3.96Zm-.34-5.16h5.05c.11-.76.17-1.54.17-2.32s-.06-1.57-.17-2.32H9.46c-.11.76-.16 1.53-.16 2.32s.06 1.57.16 2.32Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), Um = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M12 4.2c-4.31 0-7.8 3.49-7.8 7.8s3.49 7.8 7.8 7.8 7.8-3.49 7.8-7.8-3.49-7.8-7.8-7.8ZM3 12a9 9 0 1 1 18.001.001A9 9 0 0 1 3 12Zm9.6-4.73v4.51l3.14 3.14-.85.85-3.5-3.5v-5h1.2Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), Gm = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 48 48",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M31.04 7.54H16.96v-2.4h14.08v2.4zM24 12.94c-7.62 0-13.8 6.16-13.8 13.76S16.38 40.46 24 40.46c7.62 0 13.8-6.16 13.8-13.76S31.62 12.94 24 12.94zM7.8 26.7c0-8.92 7.26-16.16 16.2-16.16s16.2 7.24 16.2 16.16S32.94 42.86 24 42.86 7.8 35.64 7.8 26.7zm17.4-8.56v8.1l5.66 5.66-1.7 1.7-6.38-6.36v-9.1h2.42z",
        clipRule: "evenodd"
      }
    )
  }
), Km = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M12.75 16.15c0 .41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75ZM2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm10-8.8a8.8 8.8 0 1 0 0 17.6 8.8 8.8 0 0 0 0-17.6Zm0 4.99c-.99 0-1.72.52-2.03 1.42l-1.13-.38c.47-1.4 1.67-2.24 3.16-2.24 1.62 0 3.19 1.05 3.19 2.91 0 1.14-.69 1.76-1.28 2.19-.11.08-.21.15-.3.22-.18.13-.34.24-.5.38-.22.19-.38.37-.47.58 0 0 0 .01-.01.04 0 .03-.01.08-.02.15-.01.13-.01.3-.01.53h-1.2c0-.23 0-.44.02-.63.02-.18.05-.38.13-.57.19-.43.49-.75.79-1.01.2-.17.43-.33.63-.48.08-.06.16-.12.23-.17.52-.39.8-.7.8-1.23 0-1.01-.83-1.71-1.99-1.71Z",
        fill: "currentColor"
      }
    )
  }
), Ym = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m20.9 20.04-5.34-5.22a7.076 7.076 0 0 0 1.73-4.63c0-3.92-3.18-7.1-7.1-7.1s-7.1 3.18-7.1 7.1a7.102 7.102 0 0 0 11.62 5.48l5.35 5.23.84-.86ZM4.3 10.2c0-3.26 2.64-5.9 5.9-5.9s5.9 2.64 5.9 5.9-2.64 5.9-5.9 5.9-5.9-2.64-5.9-5.9Z"
      }
    )
  }
), Xm = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "m17.35 3.25 3.4 3.4L7.18 20.22l-3.93.53.53-3.93L17.35 3.25ZM4.92 17.38l-.26 1.96 1.96-.26L19.05 6.65l-1.7-1.7L4.92 17.38Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), Jm = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M8.12 3.1h7.44v3.15h5.53v1.19h-2.26L17.8 20.9H6.28L5.2 7.44H2.9V6.25h5.22V3.1Zm1.2 3.15h5.04V4.29H9.32v1.96ZM6.4 7.44l.99 12.27h9.31l.94-12.27H6.4Zm3.14 9.5V9.6h1.2v7.34h-1.2Zm3.72 0V9.6h1.2v7.34h-1.2Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), Qm = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "m11.09 2 7.51 5.59L12.95 12l5.65 4.41L11.09 22v-8.55l-4.94 3.86-.74-.95L11 11.99 5.4 7.63l.74-.95 4.94 3.86V2Zm1.2 11.01 4.32 3.38-4.32 3.22v-6.59Zm0-2.03V4.4l4.32 3.22L12.29 11Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), ev = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M4.73 5.1c-.82 0-1.48.66-1.48 1.47v10.86c0 .81.66 1.47 1.48 1.47h14.54c.82 0 1.48-.66 1.48-1.47V6.57c0-.81-.66-1.47-1.48-1.47H4.73ZM2.05 6.57c0-1.48 1.2-2.67 2.68-2.67h14.54c1.48 0 2.68 1.19 2.68 2.67v10.86c0 1.48-1.2 2.67-2.68 2.67H4.73c-1.48 0-2.68-1.19-2.68-2.67V6.57Zm11.93 2.48V7.58h1.2v1.47h3.13v1.2h-3.13v1.47h-1.2v-1.47H5.64v-1.2h8.34Zm-6.45 4.7v-1.47h1.2v1.47h9.59v1.2H8.73v1.47h-1.2v-1.47H5.64v-1.2h1.89Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), tv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "m17.68 3.15 3.22 3.22-9.85 9.86-3.3.09.09-3.31 9.84-9.86ZM9.02 13.52l-.04 1.56 1.56-.04 8.66-8.67-1.52-1.52-8.66 8.67ZM3.1 5.12h8.11v1.2H4.3v13.33h10.71c1.36 0 2.47-1.11 2.47-2.47v-4.54h1.2v4.54c0 2.03-1.64 3.67-3.67 3.67H3.1V5.12Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), nv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M5.64 5.64A8.972 8.972 0 0 1 12 3a9 9 0 0 1 0 18c-2.49 0-4.74-1.01-6.36-2.64l.85-.85a7.775 7.775 0 0 0 5.52 2.28c4.31 0 7.8-3.49 7.8-7.8s-3.49-7.8-7.8-7.8c-2.15 0-4.1.87-5.52 2.28-.37.37-.98 1.03-1.5 1.61l-.04.04H7.8v1.2H3V4.53h1.2v2.64c.49-.54 1.06-1.16 1.44-1.53Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), rv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M12 4.2c-4.31 0-7.8 3.49-7.8 7.8s3.49 7.8 7.8 7.8c2.15 0 4.1-.87 5.52-2.28l.85.85a8.972 8.972 0 0 1-6.36 2.64c-4.97 0-9-4.03-9-9S7.03 3 12 3c2.49 0 4.74 1.01 6.36 2.64.37.37.94.99 1.44 1.53V4.53H21v4.8h-4.8v-1.2h2.85l-.04-.04c-.52-.57-1.13-1.23-1.5-1.61a7.775 7.775 0 0 0-5.52-2.28Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), sv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M3.43 8.96 8.16 4.2l.84.86-3.7 3.73h10.24c3.01 0 5.46 2.46 5.46 5.51s-2.45 5.51-5.46 5.51H5.69V18.6h9.85c2.36 0 4.27-1.93 4.27-4.29s-1.91-4.29-4.27-4.29H5.3l3.68 3.71-.84.86L3 9.39l.43-.43Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), iv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M18.7 8.79 15 5.06l.84-.86 5.15 5.19-5.14 5.18-.84-.86L18.69 10H8.46c-2.36 0-4.27 1.93-4.27 4.29s1.91 4.29 4.27 4.29h9.85v1.21H8.46C5.45 19.79 3 17.33 3 14.28s2.45-5.51 5.46-5.51H18.7Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), ov = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "m18.19 6.19-2.37-2.34.85-.85 3.83 3.79-3.83 3.79-.85-.85 2.37-2.35H7.75c-.74 0-1.45.29-1.98.81a2.77 2.77 0 0 0-.82 1.96v1.68H3.74v-1.68c0-1.05.42-2.06 1.17-2.8.75-.74 1.77-1.16 2.83-1.16h10.44Zm.86 7.65v-1.68h1.21v1.68c0 1.05-.42 2.06-1.17 2.8-.75.74-1.77 1.16-2.83 1.16H5.81l2.37 2.35-.85.85-3.83-3.79 3.83-3.79.85.85-2.37 2.35h10.44c.74 0 1.45-.29 1.98-.81s.82-1.22.82-1.96Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), av = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M17.35 3v15.36l2.89-2.94.86.84-4.34 4.43-4.34-4.43.86-.84 2.89 2.94V3h1.2Zm-10.11.14 4.34 4.43-.86.84-2.89-2.94V21h-1.2V5.47L3.74 8.41l-.86-.84 4.37-4.43Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), lv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M7.88 7.05 4.12 3.3l-.85.85 6.3 6.28A2.894 2.894 0 0 0 12 14.9c.58 0 1.13-.17 1.58-.47l6.29 6.27.85-.85-3.54-3.53c.54-.36 1.03-.74 1.48-1.12.83-.71 1.5-1.42 1.96-1.95.23-.27.41-.49.54-.64.06-.08.11-.14.14-.18.02-.02.03-.04.04-.05h.01v-.02l.25-.35-.25-.35h-.01s-.02-.04-.04-.06c-.03-.04-.08-.11-.14-.18-.12-.16-.3-.38-.54-.64a18.92 18.92 0 0 0-1.96-1.95c-1.64-1.4-3.99-2.89-6.65-2.89-1.5 0-2.89.47-4.12 1.13Zm.89.89 1.65 1.65c.45-.3 1-.47 1.58-.47a2.894 2.894 0 0 1 2.43 4.47l1.88 1.88c.56-.36 1.09-.76 1.57-1.17.77-.66 1.4-1.33 1.84-1.82.16-.18.29-.34.39-.46-.1-.13-.23-.28-.39-.46-.43-.5-1.06-1.16-1.84-1.82-1.57-1.34-3.65-2.6-5.88-2.6-1.13 0-2.23.32-3.23.82Zm-2.87.42c-.19.15-.37.3-.55.45-.83.71-1.5 1.42-1.96 1.95-.23.27-.41.49-.54.64-.06.08-.11.14-.14.18-.02.02-.03.04-.04.05v.02h-.01l-.25.35.25.35v.02s.04.03.05.05c.03.04.08.11.14.18.12.16.3.38.54.64.46.53 1.13 1.24 1.96 1.95 1.64 1.4 3.99 2.89 6.65 2.89 1.06 0 2.07-.23 3.01-.61l-.93-.93c-.67.22-1.36.34-2.07.34-2.23 0-4.31-1.26-5.88-2.6-.77-.66-1.4-1.33-1.84-1.82-.16-.18-.29-.34-.39-.46.1-.13.23-.28.39-.46a16.706 16.706 0 0 1 2.47-2.33l-.85-.85Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), cv = (e) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: [
      /* @__PURE__ */ i.jsx("path", { d: "m21.74 12.35-.48-.35.48.35Z", fill: "none" }),
      /* @__PURE__ */ i.jsx(
        "path",
        {
          d: "M14.89 12c0 1.6-1.29 2.9-2.89 2.9S9.11 13.6 9.11 12 10.4 9.1 12 9.1s2.89 1.3 2.89 2.9Zm6.71 0-.25.35h-.01s-.02.04-.04.06c-.03.04-.08.11-.14.18-.12.16-.3.38-.54.65-.46.53-1.13 1.24-1.96 1.95-1.64 1.41-3.99 2.89-6.65 2.89S7 16.59 5.36 15.19a18.92 18.92 0 0 1-2.5-2.6c-.06-.08-.11-.14-.14-.18-.02-.02-.03-.04-.04-.05h-.01v-.02l-.25-.35.25-.35h.01s.02-.04.04-.06c.03-.04.08-.11.14-.18.12-.16.3-.38.54-.65.46-.53 1.13-1.24 1.96-1.95C7 7.39 9.35 5.91 12.01 5.91s5.01 1.49 6.65 2.89a18.92 18.92 0 0 1 2.5 2.6c.06.08.11.14.14.18.02.02.03.04.04.05h.01v.02l.25.35Zm-1.49 0c-.1-.13-.23-.29-.39-.46-.43-.5-1.06-1.17-1.84-1.83C16.31 8.37 14.23 7.1 12 7.1S7.69 8.36 6.12 9.71c-.77.66-1.4 1.33-1.84 1.83-.16.18-.29.34-.39.46.1.13.23.29.39.46.43.5 1.06 1.16 1.84 1.83C7.69 15.63 9.77 16.9 12 16.9s4.31-1.26 5.88-2.61c.77-.66 1.4-1.33 1.84-1.83.16-.18.29-.34.39-.46Z",
          fill: "currentColor"
        }
      )
    ]
  }
), uv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M11.98 4.25c-4.27 0-7.73 3.47-7.73 7.75s3.46 7.75 7.73 7.75 7.73-3.47 7.73-7.75h1.2c0 4.94-4 8.95-8.93 8.95S3.05 16.94 3.05 12s4-8.95 8.93-8.95c2.47 0 4.7 1 6.31 2.62.38.38.96 1.01 1.46 1.56V4.56h1.2v4.78h-4.76v-1.2h2.77l-.03-.03c-.52-.57-1.12-1.22-1.49-1.6a7.708 7.708 0 0 0-5.47-2.27Zm-.83 2.88h1.2v4.75l3.28 3.29-.85.85-3.63-3.64V7.13Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), dv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M12.44 5.38c.94-.94 2.25-1.48 3.59-1.48s2.64.54 3.59 1.48c.94.94 1.49 2.24 1.49 3.57s-.54 2.63-1.49 3.57l-7.61 7.58-7.61-7.58c-.95-.95-1.49-2.23-1.49-3.57s.53-2.62 1.49-3.57c.95-.95 2.24-1.48 3.59-1.48s2.64.53 3.59 1.48l.44.44.44-.44Zm3.59-.28a3.9 3.9 0 0 0-2.74 1.13L12 7.51l-1.29-1.28C9.98 5.51 9 5.1 7.97 5.1s-2.01.41-2.74 1.13c-.73.72-1.13 1.7-1.13 2.73s.41 2 1.13 2.73L12 18.42l6.77-6.73c.72-.71 1.13-1.71 1.13-2.73s-.42-2.01-1.13-2.72a3.9 3.9 0 0 0-2.74-1.13Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), fv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M16.03 3.9c-.67 0-1.33.13-1.94.38-.62.25-1.18.63-1.65 1.1l-.44.44-.44-.44c-.95-.95-2.24-1.48-3.59-1.48s-2.64.53-3.59 1.48c-.95.95-1.49 2.23-1.49 3.57s.53 2.62 1.49 3.57l7.61 7.58 7.61-7.58c.47-.47.85-1.03 1.1-1.64.26-.61.39-1.27.39-1.93s-.13-1.32-.39-1.93c-.26-.61-.63-1.17-1.1-1.64a5.13 5.13 0 0 0-1.65-1.1c-.62-.25-1.28-.38-1.94-.38Z",
        fill: "currentColor"
      }
    )
  }
), hv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M9.93 3h4.16l.08.51c.19 1.26.76 2.02 1.46 2.39.71.38 1.66.41 2.7 0l.48-.19 2.08 3.58-.41.32c-.9.71-1.31 1.58-1.31 2.39 0 .82.41 1.68 1.31 2.39l.41.32-2.08 3.58-.48-.19c-1.04-.41-1.99-.37-2.71 0-.7.37-1.28 1.13-1.47 2.39l-.08.51H9.91l-.08-.51c-.16-1.09-.67-1.9-1.36-2.33-.68-.42-1.63-.54-2.83-.07l-.48.19-2.08-3.58.41-.32c.87-.68 1.32-1.52 1.35-2.33.03-.79-.34-1.67-1.34-2.46l-.41-.32 2.08-3.58.48.19c1.2.47 2.15.35 2.82-.07.69-.43 1.19-1.23 1.36-2.32l.08-.51Zm1.01 1.19c-.28 1.13-.89 2.08-1.81 2.65-.94.59-2.12.72-3.41.33L4.66 9c.97.91 1.44 2 1.4 3.1-.04 1.07-.56 2.08-1.41 2.88l1.07 1.83c1.29-.38 2.47-.25 3.42.34.92.57 1.53 1.52 1.81 2.65h2.13c.31-1.29 1.01-2.24 1.99-2.76.95-.51 2.09-.56 3.22-.23l1.07-1.83c-.89-.85-1.37-1.9-1.37-2.98 0-1.09.47-2.14 1.37-2.99l-1.07-1.83c-1.13.33-2.26.28-3.21-.22-.98-.52-1.68-1.46-1.99-2.76h-2.13ZM12 9.73c-1.27 0-2.29 1.02-2.29 2.27s1.02 2.27 2.29 2.27 2.29-1.02 2.29-2.27S13.27 9.73 12 9.73ZM8.51 12c0-1.91 1.57-3.46 3.49-3.46s3.49 1.55 3.49 3.46-1.57 3.46-3.49 3.46S8.51 13.91 8.51 12Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), pv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "m12 3.35 2.8 5.69 6.21.91-4.51 4.46 1.08 6.24-5.57-3-5.57 3 1.09-6.24L3 9.95l6.24-.91L12 3.35Zm0 2.71-1.97 4.06-4.5.66L8.79 14l-.77 4.44L12 16.3l3.98 2.14-.77-4.44 3.26-3.22-4.47-.66-2-4.06Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), mv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "m14.79 9.04-2.8-5.69-2.76 5.69-6.24.91 4.52 4.46-1.09 6.24 5.57-3 5.57 3-1.08-6.24 4.51-4.46-6.21-.91ZM12 6.06l2 4.06 4.47.66L15.21 14l.77 4.44L12 16.3V6.06Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), vv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "m14.79 9.04-2.8-5.69-2.76 5.69-6.24.91 4.52 4.46-1.09 6.24 5.57-3 5.57 3-1.08-6.24 4.51-4.46-6.21-.91Z",
        fill: "currentColor"
      }
    )
  }
), gv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M13.74 6.12 3.95 6.1V4.9l10.99.02v2.24h4.5L22 11.15v4.83h-1.58c.03.17.05.34.05.51a2.62 2.62 0 0 1-5.24 0c0-.18.02-.35.05-.51H10.9c.03.17.05.34.05.51a2.62 2.62 0 1 1-5.19-.53H3.94v-1.2h2.42c.48-.54 1.18-.88 1.96-.88s1.49.35 1.97.89h3.43V6.12Zm1.2 8.66h.94c.48-.55 1.19-.89 1.97-.89s1.49.35 1.97.89h.97V11.5l-2.01-3.14h-3.84v6.42ZM6.82 9.31H2v-1.2h4.82v1.2Zm-.63 3.18H2.98v-1.2h3.21v1.2Zm2.15 2.58a1.41 1.41 0 1 0 0 2.82 1.41 1.41 0 1 0 0-2.82Zm9.52 0a1.41 1.41 0 1 0 0 2.82 1.41 1.41 0 1 0 0-2.82Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), xv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M15.72 6.45c-.98 0-1.77.79-1.77 1.77s.79 1.77 1.77 1.77 1.77-.79 1.77-1.77-.79-1.77-1.77-1.77Zm-2.91 1.17a2.972 2.972 0 0 1 5.82 0H21v1.2h-2.37a2.972 2.972 0 0 1-5.82 0H3v-1.2h9.81ZM8.15 14c-.98 0-1.77.79-1.77 1.77s.79 1.77 1.77 1.77 1.77-.79 1.77-1.77S9.13 14 8.15 14Zm-2.91 1.17a2.972 2.972 0 0 1 5.82 0H21v1.2h-9.94a2.972 2.972 0 0 1-5.82 0H3v-1.2h2.24Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), wv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M15.03 18.84H8.96v-1.2h6.07v1.2Zm-3.77-2.25c-.85 0-1.65 0-2.14-.01h-.59v-2.33c0-.17-.04-.34-.12-.5a1.1 1.1 0 0 0-.32-.39 6.433 6.433 0 0 1-1.78-2.2c-.42-.86-.64-1.81-.65-2.76-.02-3.44 2.75-6.31 6.17-6.38 1.32-.05 2.63.35 3.73 1.11 1.1.76 1.92 1.83 2.38 3.09.45 1.26.5 2.61.13 3.9a6.328 6.328 0 0 1-2.17 3.24c-.14.11-.25.25-.33.4-.08.16-.12.33-.12.5v2.33h-.6c-.12 0-1.95.01-3.6.01Zm-1.53-1.2h4.53v-1.14c0-.36.08-.71.24-1.03.16-.32.39-.6.67-.82.85-.67 1.46-1.58 1.76-2.62A5.157 5.157 0 0 0 14.9 4.1c-.89-.61-1.95-.92-3.02-.9-2.77.06-5.02 2.39-5 5.18 0 .77.18 1.55.52 2.24.34.69.84 1.31 1.44 1.79.28.22.51.5.66.81.15.32.24.67.24 1.02v1.14Zm.06 4.41c0 1.22.98 2.2 2.2 2.2s2.2-.98 2.2-2.2h-4.4Z",
        fill: "currentColor"
      }
    )
  }
), yv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 48 48",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M44 9v22.54c0 4.12-3.36 7.46-7.5 7.46H4V9m2.4 27.62h30.1c2.82 0 5.1-2.28 5.1-5.08V12.92L24 28.98 6.4 12.92v23.7zm1.9-25.2L24 25.74l15.7-14.32H8.3z"
      }
    )
  }
), Cv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "m12.26 2.49-.32-.19-.31.19L7.91 4.8 4.19 7.11l-.28.18v9.62l.29.17 7.44 4.44.31.18.31-.18 7.56-4.44.3-.17V7.28l-.29-.18-7.57-4.61ZM9.38 5.3l2.57-1.59 6.38 3.9-2.6 1.51-6.35-3.81Zm6.95 4.85 2.58-1.5v7.56l-6.36 3.74v-7.61l2.58-1.5v3.5l1.2-.67v-3.53Zm-4.98 2.19v7.6l-6.24-3.73V8.66l6.24 3.68Zm.6-1.04L5.66 7.6l2.57-1.59 6.31 3.79-2.6 1.51Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), bv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M10.8 3.82c.45-.26.95-.33 1.46-.22h.03c.53.14.97.46 1.24.9s.35.96.23 1.48l-.47 2.51h5.22c.33 0 .65.06.95.2.3.13.57.33.78.58.22.25.38.54.47.85.09.31.11.64.06.97l-1.15 7.45c-.08.54-.36 1.03-.77 1.38-.42.35-.94.54-1.49.54H3.2V10.15h4.38l2.23-5.12c.23-.52.55-.94.99-1.2Zm-3.43 7.53H4.39v7.9H7.36v-7.9Zm1.2 7.9h8.81c.26 0 .51-.09.7-.25.2-.17.32-.39.36-.64l1.15-7.45a1.049 1.049 0 0 0-.62-1.12c-.14-.06-.3-.09-.45-.09h-6.67l.74-3.94c.05-.26.01-.46-.08-.62a.846.846 0 0 0-.51-.36.78.78 0 0 0-.58.08c-.17.1-.35.29-.5.65s-2.34 5.37-2.34 5.37v8.37Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), _v = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M19.4 4.75h-2.77v7.9h2.98v-7.9h-.2Zm.8-1.2h.6v10.3h-4.38l-2.23 5.12c-.23.52-.55.94-.99 1.2-.45.26-.95.33-1.46.22h-.02c-.53-.14-.97-.46-1.24-.9s-.35-.96-.23-1.48l.47-2.51H5.49c-.33 0-.65-.06-.95-.2-.3-.13-.57-.33-.78-.58-.22-.25-.38-.54-.47-.85a2.26 2.26 0 0 1-.06-.97l1.15-7.45c.08-.54.36-1.03.77-1.38.42-.35.94-.54 1.49-.54h13.57Zm-4.77 9.58V4.75h-8.8c-.26 0-.51.09-.7.25-.2.17-.32.39-.36.64l-1.15 7.45a1.049 1.049 0 0 0 .62 1.12c.14.06.3.09.45.09h6.67l-.74 3.94c-.05.26-.01.46.08.62.09.15.26.29.51.36.24.05.43.01.58-.08.17-.1.35-.29.5-.65l2.34-5.37Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), jv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M10.03 4.35c-3.11 0-5.63 2.54-5.63 5.68s2.53 5.68 5.63 5.68c1.41 0 2.7-.52 3.69-1.39l.61-.63c.83-.99 1.33-2.27 1.33-3.66 0-3.14-2.53-5.68-5.63-5.68Zm5.17 10.18a6.915 6.915 0 0 0 1.66-4.49c0-3.8-3.05-6.88-6.83-6.88S3.2 6.23 3.2 10.03s3.05 6.88 6.83 6.88c1.64 0 3.14-.58 4.32-1.55l5.61 5.49.84-.86-5.6-5.47ZM9.43 9.44V6.66h1.2v2.78h2.76v1.2h-2.76v2.78h-1.2v-2.78H6.67v-1.2h2.76Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), Sv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M10.03 4.35c-3.11 0-5.63 2.54-5.63 5.68s2.53 5.68 5.63 5.68c1.41 0 2.7-.52 3.69-1.39l.61-.63c.83-.99 1.33-2.27 1.33-3.66 0-3.14-2.53-5.68-5.63-5.68Zm5.17 10.18a6.915 6.915 0 0 0 1.66-4.49c0-3.8-3.05-6.88-6.83-6.88S3.2 6.23 3.2 10.03s3.05 6.88 6.83 6.88c1.64 0 3.14-.58 4.32-1.55l5.61 5.49.84-.86-5.6-5.47Zm-8.53-3.9v-1.2h6.71v1.2h-6.7Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), Mv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M12 4.6c-2.15 0-3.89 1.74-3.89 3.88s1.74 3.88 3.89 3.88 3.89-1.74 3.89-3.88S14.15 4.6 12 4.6ZM6.91 8.48C6.91 5.67 9.19 3.4 12 3.4s5.09 2.28 5.09 5.08-2.28 5.08-5.09 5.08-5.09-2.28-5.09-5.08ZM3.75 20.59l-.52-.3-.52-.3v-.02c0-.01.02-.03.03-.05.02-.04.06-.09.1-.16.09-.13.22-.31.39-.53.35-.43.89-1 1.63-1.57C6.35 16.52 8.67 15.4 12 15.4s5.64 1.12 7.14 2.26c.74.57 1.28 1.14 1.63 1.57.18.22.31.4.39.53.04.07.08.12.1.16.01.02.02.03.03.05s0 .02 0 .02l-.52.3-.52.3s0-.02-.02-.03c-.02-.02-.04-.06-.08-.12-.07-.1-.18-.26-.33-.44-.3-.37-.77-.87-1.43-1.37-1.31-1-3.38-2.02-6.4-2.02s-5.1 1.02-6.4 2.02c-.66.5-1.13 1-1.43 1.37-.15.19-.26.34-.33.44-.03.05-.06.09-.07.12 0 .01-.01.02-.02.03Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), Lv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    focusable: "false",
    viewBox: "0 0 24 24",
    ...e,
    children: /* @__PURE__ */ i.jsx("path", { d: "m11.89 3.4 9.66 17.2H2.45l9.44-17.2Zm.01 2.47L4.47 19.4H19.5L11.9 5.87Zm-.51 9.47V9.76h1.2v5.58h-1.2Zm-.2 2.21c0-.44.36-.8.8-.8s.8.36.8.8-.36.8-.8.8-.8-.36-.8-.8Z" })
  }
), Tv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M12.25 18.8c1.56-1.83 2.5-4.2 2.5-6.8s-.94-4.97-2.5-6.8l-.97.72c1.41 1.63 2.27 3.75 2.27 6.08s-.86 4.45-2.27 6.08l.97.72Zm1.81 1.34c1.83-2.2 2.93-5.04 2.93-8.13s-1.1-5.93-2.93-8.13l.97-.72c1.98 2.41 3.17 5.49 3.17 8.85s-1.19 6.44-3.17 8.85l-.97-.72Zm-4.6-3.4c1.14-1.25 1.84-2.91 1.84-4.74s-.7-3.49-1.84-4.74l-.98.72c1 1.04 1.61 2.46 1.61 4.02s-.61 2.98-1.61 4.02l.98.72ZM6.8 14.77c.76-.68 1.24-1.67 1.24-2.77s-.48-2.09-1.23-2.77l-1 .74c.62.46 1.03 1.19 1.03 2.03s-.41 1.57-1.03 2.03l1 .74Z",
        fill: "currentColor"
      }
    )
  }
), Vv = (e) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: [
      /* @__PURE__ */ i.jsx(
        "path",
        {
          d: "M12 6.97c-1.41 0-2.57 1.14-2.57 2.55s1.15 2.55 2.57 2.55 2.57-1.14 2.57-2.55S13.42 6.97 12 6.97Zm0 3.9c-.76 0-1.37-.61-1.37-1.35s.61-1.35 1.37-1.35 1.37.61 1.37 1.35-.61 1.35-1.37 1.35Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "path",
        {
          d: "M16.74 4.85C15.42 3.61 13.66 3 12.02 3s-3.4.6-4.72 1.84c-1.34 1.25-2.19 3.12-2.02 5.57.17 2.47 1.77 5.05 3.23 6.94.74.96 3.33 3.65 3.33 3.65s2.71-2.68 3.48-3.65c1.53-1.9 3.21-4.48 3.41-6.94.19-2.44-.65-4.31-1.99-5.57Zm.79 5.47c-.16 2.07-1.62 4.4-3.14 6.28-.75.92-1.49 1.71-2.04 2.27-.19.19-.36.36-.5.49-.13-.13-.29-.29-.46-.48-.53-.55-1.23-1.34-1.94-2.26-1.44-1.87-2.84-4.21-2.98-6.29-.15-2.1.58-3.62 1.65-4.61 1.08-1.01 2.55-1.51 3.91-1.51s2.82.51 3.89 1.52c1.06 1 1.78 2.51 1.61 4.6Z",
          fill: "currentColor"
        }
      )
    ]
  }
), Pv = (e) => /* @__PURE__ */ i.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", focusable: "false", ...e, children: /* @__PURE__ */ i.jsx(
  "path",
  {
    fill: "currentColor",
    fillRule: "evenodd",
    d: "m12 3 9 8.14-1.21 1.31-.75-.68v5.38c0 2.13-1.74 3.85-3.9 3.85H5.2v-9.43l-.98.89-1.21-1.31L12 3ZM6.99 9.94 12 5.41l5.24 4.73v7c0 1.15-.94 2.07-2.1 2.07H6.99V9.93Z"
  }
) }), Ev = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M10.35 5.8c0-.91.74-1.65 1.65-1.65.91 0 1.65.74 1.65 1.65S12.91 7.45 12 7.45c-.91 0-1.65-.74-1.65-1.65Zm6.2 0c0-.91.74-1.65 1.65-1.65.91 0 1.65.74 1.65 1.65s-.74 1.65-1.65 1.65c-.91 0-1.65-.74-1.65-1.65Zm-12.39 0c0-.91.74-1.65 1.65-1.65.91 0 1.65.74 1.65 1.65s-.74 1.65-1.65 1.65c-.91 0-1.65-.74-1.65-1.65Zm0 6.2c0-.91.74-1.65 1.65-1.65.91 0 1.65.74 1.65 1.65s-.74 1.65-1.65 1.65c-.91 0-1.65-.74-1.65-1.65Zm6.2 0c0-.91.74-1.65 1.65-1.65.91 0 1.65.74 1.65 1.65s-.74 1.65-1.65 1.65c-.91 0-1.65-.74-1.65-1.65Zm6.2 0c0-.91.74-1.65 1.65-1.65.91 0 1.65.74 1.65 1.65s-.74 1.65-1.65 1.65c-.91 0-1.65-.74-1.65-1.65ZM4.17 18.2c0-.91.74-1.65 1.65-1.65.91 0 1.65.74 1.65 1.65s-.74 1.65-1.65 1.65c-.91 0-1.65-.74-1.65-1.65Zm6.2 0c0-.91.74-1.65 1.65-1.65.91 0 1.65.74 1.65 1.65s-.74 1.65-1.65 1.65c-.91 0-1.65-.74-1.65-1.65Zm6.2 0c0-.91.74-1.65 1.65-1.65.91 0 1.65.74 1.65 1.65s-.74 1.65-1.65 1.65c-.91 0-1.65-.74-1.65-1.65Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), Rv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M11.02 15.27c0-.55.45-1 1-1h.01c.55 0 1 .45 1 1s-.45 1-1 1h-.01c-.55 0-1-.45-1-1Zm9.33-6.09v8.32c0 2.15-1.74 3.89-3.89 3.89H3.65V9.17h2.98V7.98c0-2.97 2.42-5.4 5.39-5.4s5.39 2.42 5.39 5.4v1.19h2.94Zm-11.92 0h7.18V7.99c0-1.98-1.62-3.6-3.59-3.6s-3.59 1.62-3.59 3.6v1.19Zm10.12 1.8H5.45v8.62h11.01c1.16 0 2.09-.94 2.09-2.1v-6.53Z"
      }
    )
  }
), Hv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M11.02 15.27c0-.55.45-1 1-1h.01c.55 0 1 .45 1 1s-.45 1-1 1h-.01c-.55 0-1-.45-1-1Zm9.33-6.09v8.32c0 2.15-1.74 3.89-3.89 3.89H3.65V9.17h11.86V7.98c0-1.98-1.62-3.6-3.61-3.6-.91 0-1.75.34-2.38.9l-.67.6-1.19-1.34.67-.6a5.38 5.38 0 0 1 3.57-1.36c2.97 0 5.4 2.42 5.4 5.4v1.19h3.04Zm-1.8 1.8H5.45v8.62h11.01c1.16 0 2.09-.94 2.09-2.1v-6.53Z"
      }
    )
  }
), Av = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M3 2.9h2.87l.68 2.22H21v4.11c0 2.15-1.75 3.9-3.9 3.9H9.01l.55 1.66h9.21v1.8H8.25L6.91 12.5 4.54 4.7H3V2.9Zm5.44 8.43L7.1 6.92h12.1v2.31a2.1 2.1 0 0 1-2.1 2.1H8.44Zm.08 8.27c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5Zm6.27 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), kv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m6.16 12.9 6.26 5.95-1.24 1.31L2.6 12l8.59-8.15 1.24 1.31-6.26 5.95h15.24v1.8H6.16Z"
      }
    )
  }
), Zv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m12.9 17.84 5.95-6.26 1.31 1.24-8.15 8.59-8.16-8.6 1.31-1.24 5.95 6.26V2.6h1.8v15.24Z"
      }
    )
  }
), Bv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m17.84 11.1-6.26-5.95 1.24-1.31 8.59 8.15-8.59 8.15-1.24-1.31 6.26-5.95H2.6v-1.8h15.24Z"
      }
    )
  }
), Dv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m11.1 6.16-5.95 6.26-1.31-1.24L12 2.6l8.15 8.59-1.31 1.24-5.95-6.26v15.24h-1.8V6.16Z"
      }
    )
  }
), Nv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "m12 8.3 7.65 8 1.3-1.24L12 5.7l-8.95 9.36 1.3 1.24 7.65-8Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), Ov = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M3.75 10.08c4.55-4.37 11.95-4.37 16.51 0l1.25-1.3c-5.26-5.04-13.76-5.04-19.01 0l1.25 1.3Zm2.73 2.76c3.05-2.92 8-2.92 11.04 0l1.25-1.3c-3.74-3.59-9.8-3.59-13.54 0l1.25 1.3Zm2.69 2.77c1.56-1.49 4.1-1.49 5.66 0l1.24-1.3c-2.25-2.16-5.89-2.16-8.15 0l1.24 1.3ZM11.98 17c-.55 0-1 .45-1 1s.45 1 1 1h.01c.55 0 1-.45 1-1s-.45-1-1-1h-.01Z",
        fill: "currentColor"
      }
    )
  }
), $v = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M20.34 9.82c-4.61-4.49-12.08-4.49-16.69 0L2.39 8.53c5.3-5.17 13.9-5.17 19.2 0l-1.26 1.29Zm-2.76 2.83c-3.08-3-8.09-3-11.17 0l-1.26-1.29c3.78-3.69 9.9-3.69 13.68 0l-1.26 1.29Zm-2.72 2.85c-1.58-1.53-4.15-1.53-5.72 0l-1.25-1.29c2.28-2.21 5.96-2.21 8.23 0l-1.25 1.29ZM11 17.85c0-.55.45-1 1-1h.01c.55 0 1 .45 1 1s-.45 1-1 1H12c-.55 0-1-.45-1-1Zm7.42-2.07c.05.15.07.31.07.44h-1.44c0-.13.03-.29.08-.44.05-.16.12-.3.22-.39.09-.08.22-.15.43-.15.22 0 .34.07.43.15.09.09.17.22.22.38Zm-2.17.43-.66.01v3.13h4.39v-3.13h-.68c0-.18-.03-.42-.11-.67-.07-.24-.2-.52-.43-.74-.24-.23-.57-.36-.98-.36-.41 0-.73.14-.98.36-.23.22-.36.49-.44.74-.08.25-.1.48-.11.66Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), Iv = (e) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: [
      /* @__PURE__ */ i.jsx(
        "path",
        {
          d: "m6.42 12.65-1.26-1.29c3.78-3.69 9.9-3.69 13.68 0l-1.26 1.29c-3.08-3-8.09-3-11.17 0Zm5.59 4.2H12c-.55 0-1 .45-1 1s.45 1 1 1h.01c.55 0 1-.45 1-1s-.45-1-1-1Zm7.28-.63h.68v3.13h-4.39v-3.13h.66c0-.19.04-.43.11-.67.08-.24.21-.52.44-.74.24-.23.57-.36.98-.36.41 0 .73.14.98.36.23.22.36.49.43.74s.1.49.11.66Zm-.8.01c0-.13-.03-.29-.07-.44-.05-.16-.12-.3-.22-.38a.593.593 0 0 0-.43-.15c-.22 0-.34.07-.43.15-.1.09-.17.22-.22.39-.05.15-.07.31-.08.44h1.44ZM7.88 14.21l1.25 1.29c1.58-1.53 4.15-1.53 5.72 0l1.25-1.29c-2.28-2.21-5.96-2.21-8.23 0Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "path",
        {
          d: "m2.4 8.53 1.26 1.29c4.61-4.49 12.08-4.49 16.69 0l1.26-1.29C16.3 3.36 7.7 3.36 2.4 8.53Z",
          fill: "#cfd0d0"
        }
      )
    ]
  }
), zv = (e) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: [
      /* @__PURE__ */ i.jsx(
        "path",
        {
          d: "M13.01 17.85c0 .55-.45 1-1 1H12c-.55 0-1-.45-1-1s.45-1 1-1h.01c.55 0 1 .45 1 1Zm6.28-1.63h.68v3.13h-4.39v-3.13h.66c0-.19.04-.43.11-.67.08-.24.21-.52.44-.74.24-.23.57-.36.98-.36.41 0 .73.14.98.36.23.22.36.49.43.74s.1.49.11.66Zm-.8.01c0-.13-.03-.29-.07-.44-.05-.16-.12-.3-.22-.38a.593.593 0 0 0-.43-.15c-.22 0-.34.07-.43.15-.1.09-.17.22-.22.39-.05.15-.07.31-.08.44h1.44ZM7.88 14.21l1.25 1.29c1.58-1.53 4.15-1.53 5.72 0l1.25-1.29c-2.28-2.21-5.96-2.21-8.23 0Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "path",
        {
          d: "m6.42 12.65-1.26-1.29c3.78-3.69 9.9-3.69 13.68 0l-1.26 1.29c-3.08-3-8.09-3-11.17 0ZM2.4 8.53l1.26 1.29c4.61-4.49 12.08-4.49 16.69 0l1.26-1.29C16.3 3.36 7.7 3.36 2.4 8.53Z",
          fill: "#cfd0d0"
        }
      )
    ]
  }
), Fv = (e) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: [
      /* @__PURE__ */ i.jsx(
        "path",
        {
          d: "M13.01 17.85c0 .55-.45 1-1 1H12c-.55 0-1-.45-1-1s.45-1 1-1h.01c.55 0 1 .45 1 1Zm6.28-1.63h.68v3.13h-4.39v-3.13h.66c0-.19.04-.43.11-.67.08-.24.21-.52.44-.74.24-.23.57-.36.98-.36.41 0 .73.14.98.36.23.22.36.49.43.74s.1.49.11.66Zm-.8.01c0-.13-.03-.29-.07-.44-.05-.16-.12-.3-.22-.38a.593.593 0 0 0-.43-.15c-.22 0-.34.07-.43.15-.1.09-.17.22-.22.39-.05.15-.07.31-.08.44h1.44Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "path",
        {
          d: "m6.42 12.65-1.26-1.29c3.78-3.69 9.9-3.69 13.68 0l-1.26 1.29c-3.08-3-8.09-3-11.17 0Zm1.47 1.56 1.25 1.29c1.58-1.53 4.15-1.53 5.72 0l1.25-1.29c-2.28-2.21-5.96-2.21-8.23 0ZM2.4 8.53l1.26 1.29c4.61-4.49 12.08-4.49 16.69 0l1.26-1.29C16.3 3.36 7.7 3.36 2.4 8.53Z",
          fill: "#cfd0d0"
        }
      )
    ]
  }
), qv = (e) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: [
      /* @__PURE__ */ i.jsx(
        "path",
        {
          d: "M3.75 10.08c4.55-4.37 11.95-4.37 16.51 0l1.25-1.3c-5.26-5.04-13.76-5.04-19.01 0l1.25 1.3Z",
          fill: "#cfd0d0"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "path",
        {
          d: "M6.48 12.83c3.05-2.92 8-2.92 11.04 0l1.25-1.3c-3.74-3.59-9.8-3.59-13.54 0l1.25 1.3Zm2.69 2.77c1.56-1.49 4.1-1.49 5.66 0l1.24-1.3c-2.25-2.16-5.89-2.16-8.15 0l1.24 1.3Zm2.81 1.39c-1.3-.02-1.29 2.03.01 2 1.3.02 1.29-2.03-.01-2Z",
          fill: "currentColor"
        }
      )
    ]
  }
), Wv = (e) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: [
      /* @__PURE__ */ i.jsx(
        "path",
        {
          d: "M3.75 10.08c4.55-4.37 11.95-4.37 16.51 0l1.25-1.3c-5.26-5.04-13.76-5.04-19.01 0l1.25 1.3Zm2.73 2.76c3.05-2.92 8-2.92 11.04 0l1.25-1.3c-3.74-3.59-9.8-3.59-13.54 0l1.25 1.3Z",
          fill: "#cfd0d0"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "path",
        {
          d: "M9.17 15.61c1.56-1.49 4.1-1.49 5.66 0l1.24-1.3c-2.25-2.16-5.89-2.16-8.15 0l1.24 1.3ZM11.98 17c-1.3-.02-1.29 2.03.01 2 1.3.02 1.29-2.03-.01-2Z",
          fill: "currentColor"
        }
      )
    ]
  }
), Uv = (e) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: [
      /* @__PURE__ */ i.jsx(
        "path",
        {
          d: "M3.75 10.08c4.55-4.37 11.95-4.37 16.51 0l1.25-1.3c-5.26-5.04-13.76-5.04-19.01 0l1.25 1.3Zm2.73 2.76c3.05-2.92 8-2.92 11.04 0l1.25-1.3c-3.74-3.59-9.8-3.59-13.54 0l1.25 1.3Zm2.69 2.77c1.56-1.49 4.1-1.49 5.66 0l1.24-1.3c-2.25-2.16-5.89-2.16-8.15 0l1.24 1.3Z",
          fill: "#cfd0d0"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "path",
        {
          d: "M11.98 17c-1.3-.02-1.29 2.03.01 2 1.3.02 1.29-2.03-.01-2Z",
          fill: "currentColor"
        }
      )
    ]
  }
), Gv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M11.1 12.74V3.05h1.8v9.69l2.84-3.09 1.33 1.22-5.06 5.52-5.06-5.52 1.33-1.22 2.84 3.09Zm9.8.31v4c0 2.15-1.75 3.9-3.9 3.9H3.1v-7.9h1.8v6.1H17a2.1 2.1 0 0 0 2.1-2.1v-4h1.8Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), Kv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "m12 3.03 5.06 5.52-1.33 1.22-2.84-3.09v9.09h-1.8V6.68L8.25 9.77 6.92 8.55 12 3.03Zm8.9 10.03v4c0 2.15-1.75 3.9-3.9 3.9H3.1v-7.9h1.8v6.1H17a2.1 2.1 0 0 0 2.1-2.1v-4h1.8Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), Yv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M20.96 5.38 9.28 19.75l-6.24-6.13 1.26-1.28 4.83 4.75L19.57 4.25l1.4 1.14Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), Xv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M11.1 11.1V3h1.8v8.1H21v1.8h-8.1V21h-1.8v-8.1H3v-1.8h8.1Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), Jv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M21 11.1v1.8H3v-1.8h18Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), Qv = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M12 3.8c-4.53 0-8.2 3.67-8.2 8.2s3.67 8.2 8.2 8.2 8.2-3.67 8.2-8.2-3.67-8.2-8.2-8.2ZM2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm15-2.93-6.35 7.76-3.57-3.49 1.26-1.29 2.17 2.11 5.11-6.24 1.39 1.14Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), eg = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M12 3.8c-4.53 0-8.2 3.67-8.2 8.2s3.67 8.2 8.2 8.2 8.2-3.67 8.2-8.2-3.67-8.2-8.2-8.2ZM2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm9.1-.9v-4h1.8v4h4v1.8h-4v4h-1.8v-4h-4v-1.8h4Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), tg = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M12 3.8c-4.53 0-8.2 3.67-8.2 8.2s3.67 8.2 8.2 8.2 8.2-3.67 8.2-8.2-3.67-8.2-8.2-8.2ZM2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm8.73 0L7.87 9.14l1.27-1.27L12 10.73l2.86-2.86 1.27 1.27L13.27 12l2.86 2.86-1.27 1.27L12 13.27l-2.86 2.86-1.27-1.27L10.73 12Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), ng = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm10-8.2c-4.53 0-8.2 3.67-8.2 8.2s3.67 8.2 8.2 8.2 8.2-3.67 8.2-8.2-3.67-8.2-8.2-8.2Zm.9 6.95v6.3h-1.8v-6.3h1.8Zm.1-2.79c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), rg = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M12 4.9c-3.92 0-7.1 3.18-7.1 7.1s3.18 7.1 7.1 7.1 7.1-3.18 7.1-7.1-3.18-7.1-7.1-7.1ZM3.1 12c0-4.92 3.98-8.9 8.9-8.9s8.9 3.98 8.9 8.9-3.98 8.9-8.9 8.9-8.9-3.98-8.9-8.9Zm9.8-4.83v4.49l3.13 3.13-1.27 1.27-3.66-3.66V7.17h1.8Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), sg = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "m14.64 6.67-.51 6.39-4.57 4.5.51-6.39 4.57-4.5Zm-1.57 3.38-1.74 1.71 1.54.72.19-2.43ZM3.11 12C3.1 7.08 7.08 3.1 12 3.1s8.9 3.98 8.9 8.9-3.98 8.9-8.9 8.9-8.9-3.98-8.9-8.9ZM12 4.9c-3.92 0-7.1 3.18-7.1 7.1s3.18 7.1 7.1 7.1 7.1-3.18 7.1-7.1-3.18-7.1-7.1-7.1Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), ig = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M12 4.1c-4.36 0-7.9 3.54-7.9 7.9s3.54 7.9 7.9 7.9 7.9-3.54 7.9-7.9-3.54-7.9-7.9-7.9ZM2.9 12c0-5.03 4.07-9.1 9.1-9.1s9.1 4.07 9.1 9.1-4.07 9.1-9.1 9.1-9.1-4.07-9.1-9.1Zm11.5-5.15-.48 6.04-4.32 4.25.48-6.04 4.32-4.25Zm-1.39 2.98-1.82 1.79 1.61.75.2-2.54Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), og = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm10-8.2c-4.53 0-8.2 3.67-8.2 8.2s3.67 8.2 8.2 8.2 8.2-3.67 8.2-8.2-3.67-8.2-8.2-8.2ZM13 16c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm-1-7.23c-.74 0-1.28.39-1.51 1.09L8.78 9.3c.47-1.45 1.7-2.33 3.22-2.33 1.63 0 3.26 1.1 3.26 3.06 0 1.22-.74 1.89-1.3 2.31-.11.09-.21.16-.3.22-.15.11-.28.21-.41.32-.17.15-.27.28-.33.4 0 .01 0 .04-.01.1 0 .11-.01.26-.01.47h-1.8c0-.22 0-.43.02-.62.02-.18.05-.41.14-.63.2-.47.51-.81.81-1.06.19-.17.42-.34.61-.48.07-.05.14-.1.19-.14.45-.35.59-.54.59-.88 0-.72-.56-1.26-1.46-1.26Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), ag = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M3.79 16.39 16.98 3.2l3.82 3.82L7.61 20.21l-4.41.59.59-4.41Zm1.7.84-.2 1.47 1.47-.2L18.25 7.02l-1.27-1.27L5.49 17.24Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), lg = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M7.82 3h8.05v2.92h5.23v1.8h-1.98L18.09 21H6L4.92 7.72H2.9v-1.8h4.92V3Zm1.8 2.92h4.44V4.8H9.62v1.12Zm-2.9 1.8.94 11.48h8.76l.89-11.48H6.73ZM9.23 17V9.6h1.8V17h-1.8Zm3.72 0V9.6h1.8V17h-1.8Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), cg = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "m10.64 2 7.86 5.88L13.25 12l5.25 4.12L10.64 22v-7.95l-4.03 3.17L5.5 15.8l4.84-3.8L5.5 8.2l1.11-1.42 4.03 3.17V2Zm1.79 11.64 3.11 2.44-3.11 2.33v-4.77Zm0-3.29V5.59l3.11 2.33-3.11 2.44Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), ug = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M5 5.65c-.61 0-1.1.49-1.1 1.1v10.5c0 .61.49 1.1 1.1 1.1h14c.61 0 1.1-.49 1.1-1.1V6.75c0-.61-.49-1.1-1.1-1.1H5Zm-2.9 1.1c0-1.6 1.3-2.9 2.9-2.9h14c1.6 0 2.9 1.3 2.9 2.9v10.5c0 1.6-1.3 2.9-2.9 2.9H5c-1.6 0-2.9-1.3-2.9-2.9V6.75Zm11.49 2.08v-1.1h1.8v1.1h2.69v1.8h-2.69v1.1h-1.8v-1.1H5.88v-1.8h7.71Zm-6.21 4.54v-1.1h1.8v1.1h8.9v1.8h-8.9v1.1h-1.8v-1.1h-1.5v-1.8h1.5Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), dg = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "m17.5 3 3.6 3.58-9.96 9.91-3.69.09.1-3.68L17.5 3ZM9.33 13.67l-.03 1.07 1.08-.03 8.17-8.13-1.05-1.04-8.17 8.13ZM2.9 5.05h8.26v1.79H4.7v12.37h10.18c1.16 0 2.1-.94 2.1-2.09v-4.43h1.8v4.43c0 2.15-1.75 3.89-3.91 3.89H2.9V5.05Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), fg = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M5.71 5.71A8.894 8.894 0 0 1 20.9 12c0 4.92-3.98 8.9-8.9 8.9-2.46 0-4.68-1-6.29-2.61l1.27-1.27A7.102 7.102 0 0 0 19.1 12 7.102 7.102 0 0 0 6.98 6.98c-.24.24-.6.62-.95 1.01H8v1.8H3.1v-4.9h1.8v1.67c.3-.32.59-.63.81-.85Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), hg = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M12 4.9c-3.92 0-7.1 3.18-7.1 7.1a7.102 7.102 0 0 0 12.12 5.02l1.27 1.27A8.894 8.894 0 0 1 3.1 12c0-4.92 3.98-8.9 8.9-8.9 2.46 0 4.68 1 6.29 2.61.22.22.51.53.81.85V4.89h1.8v4.9H16v-1.8h1.97c-.36-.39-.71-.77-.95-1.01A7.066 7.066 0 0 0 12 4.9Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), pg = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M3.64 8.83 8.16 4.3l1.28 1.28-2.98 2.99h8.99c3.07 0 5.55 2.49 5.55 5.57s-2.49 5.57-5.55 5.57H6.03V17.9h9.42c2.07 0 3.75-1.68 3.75-3.76s-1.68-3.76-3.75-3.76h-9l2.97 2.98-1.28 1.28L3 9.47l.64-.64Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), mg = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "m17.55 8.57-2.98-2.99 1.28-1.28 5.16 5.17-5.14 5.16-1.28-1.28 2.97-2.98H8.55c-2.07 0-3.75 1.68-3.75 3.76s1.68 3.76 3.75 3.76h9.41v1.81H8.55C5.48 19.7 3 17.21 3 14.13s2.49-5.57 5.55-5.57h9Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), vg = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "m17.25 6.02-1.76-1.75L16.77 3l3.94 3.92-3.94 3.92-1.28-1.27 1.76-1.76H7.88a2.392 2.392 0 0 0-2.39 2.39v1.64H3.68V10.2c0-1.11.44-2.17 1.23-2.96.79-.78 1.86-1.23 2.97-1.23h9.37Zm1.27 7.78v-1.64h1.81v1.64c0 1.11-.44 2.17-1.23 2.96-.79.78-1.86 1.23-2.97 1.23H6.75l1.76 1.76-1.28 1.27-3.94-3.92 3.94-3.92 1.28 1.27-1.76 1.76h9.37a2.392 2.392 0 0 0 2.39-2.39Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), gg = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "m7.34 2.95 4.69 4.79L10.75 9 8.24 6.43v14.59h-1.8V6.44L3.93 9.01 2.65 7.75l4.69-4.8Zm10.21.07v14.54l2.51-2.57 1.28 1.26-4.69 4.79-4.69-4.79 1.28-1.26 2.51 2.57V3.02h1.8Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), xg = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M7.94 6.65c1.21-.62 2.59-1.06 4.06-1.06 2.78 0 5.21 1.55 6.87 2.97.85.72 1.53 1.45 2 1.99.24.27.42.5.55.66.06.08.11.14.15.19.02.02.44.6.44.6s-.42.58-.44.6c-.03.05-.08.11-.15.19-.13.16-.31.39-.55.66-.47.54-1.15 1.26-2 1.99-.37.31-.77.63-1.21.94l3.28 3.28-1.27 1.27-6.12-6.13c-.46.25-.98.39-1.54.39-1.77 0-3.2-1.43-3.2-3.2 0-.56.14-1.08.39-1.54L3.07 4.32l1.27-1.27 3.6 3.6ZM9.29 8l1.19 1.19c.46-.25.98-.39 1.54-.39 1.77 0 3.2 1.43 3.2 3.2 0 .56-.14 1.08-.39 1.54l1.55 1.55c.47-.32.92-.66 1.34-1.02.76-.65 1.38-1.31 1.81-1.8.08-.1.16-.19.23-.27-.07-.08-.14-.17-.23-.27-.43-.49-1.05-1.15-1.81-1.8-1.55-1.33-3.57-2.54-5.7-2.54-.94 0-1.85.23-2.71.61Zm-4.32.7c-.77.68-1.4 1.34-1.84 1.85-.24.27-.42.5-.55.66-.06.08-.58.79-.58.79l.38.53s.14.18.2.26c.13.16.31.39.55.66.47.54 1.15 1.26 2 1.99 1.66 1.42 4.09 2.97 6.87 2.97.8 0 1.57-.13 2.31-.35l-1.51-1.51c-.26.04-.53.06-.8.06-2.13 0-4.15-1.21-5.7-2.54-.76-.65-1.38-1.31-1.81-1.8-.08-.1-.16-.19-.23-.27.07-.08.14-.17.23-.27.42-.48 1.02-1.12 1.76-1.75L4.98 8.7Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), wg = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M15.2 12c0 1.77-1.43 3.2-3.2 3.2S8.8 13.77 8.8 12s1.43-3.2 3.2-3.2 3.2 1.43 3.2 3.2Zm6.8 0s-.52.71-.58.79c-.13.16-.31.39-.55.66-.47.54-1.15 1.26-2 1.98-1.66 1.42-4.09 2.97-6.87 2.97s-5.21-1.54-6.87-2.97a18.75 18.75 0 0 1-2-1.98c-.24-.27-.42-.5-.55-.66-.06-.08-.11-.14-.15-.19-.02-.02-.44-.6-.44-.6s.42-.58.44-.6c.03-.05.08-.11.15-.19.13-.16.31-.39.55-.66.47-.54 1.15-1.26 2-1.98C6.79 7.15 9.22 5.6 12 5.6s5.21 1.54 6.87 2.97c.85.72 1.53 1.44 2 1.98.24.27.42.5.55.66.06.08.11.14.15.19.02.02.44.6.44.6Zm-2.26 0c-.07-.08-.14-.17-.23-.27-.43-.49-1.05-1.15-1.81-1.8C16.15 8.6 14.13 7.4 12 7.4S7.85 8.61 6.3 9.93c-.76.65-1.38 1.31-1.81 1.8-.08.1-.16.19-.23.27.07.08.14.17.23.27.43.49 1.05 1.15 1.81 1.8C7.85 15.4 9.87 16.6 12 16.6s4.15-1.21 5.7-2.53c.76-.65 1.38-1.31 1.81-1.8.08-.1.16-.19.23-.27Z",
        fill: "currentColor"
      }
    )
  }
), yg = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M11.98 4.9C8.07 4.9 4.9 8.08 4.9 12s3.17 7.1 7.08 7.1 7.08-3.18 7.08-7.1h1.8c0 4.92-3.98 8.9-8.88 8.9S3.1 16.92 3.1 12s3.98-8.9 8.88-8.9c2.45 0 4.67 1 6.28 2.61.23.23.53.55.85.89V4.88h1.8v4.9h-4.89v-1.8h1.92c-.35-.39-.7-.76-.94-1a7.025 7.025 0 0 0-5.01-2.08Zm-1.12 2.46h1.8v4.4l3.09 3.1-1.27 1.27-3.62-3.63V7.36Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), Cg = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M12.18 5.32c.96-.97 2.29-1.52 3.65-1.52s2.69.56 3.65 1.52c.96.97 1.51 2.31 1.51 3.67s-.55 2.7-1.51 3.67l-7.49 7.54-7.49-7.54c-.97-.97-1.51-2.29-1.51-3.67s.54-2.7 1.51-3.67c.97-.97 2.28-1.52 3.65-1.52s2.68.55 3.65 1.52l.18.18.18-.18Zm3.65.28c-.88 0-1.75.36-2.38.99l-1.46 1.47-1.46-1.47c-.63-.64-1.49-.99-2.38-.99s-1.75.36-2.38.99c-.63.64-.99 1.5-.99 2.4s.36 1.76.99 2.4l6.21 6.25 6.21-6.25c.62-.63.99-1.51.99-2.4s-.36-1.77-.99-2.4c-.62-.63-1.5-.99-2.38-.99Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), bg = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M15.84 3.8c-.68 0-1.35.13-1.98.4-.63.26-1.2.64-1.68 1.13l-.18.18-.18-.18c-.97-.97-2.28-1.52-3.65-1.52s-2.68.55-3.65 1.52C3.55 6.3 3.01 7.62 3.01 9s.54 2.7 1.51 3.67l7.49 7.54 7.49-7.54A5.154 5.154 0 0 0 21.01 9a5.154 5.154 0 0 0-1.51-3.67c-.48-.48-1.05-.87-1.67-1.13-.63-.26-1.3-.4-1.98-.4Z",
        fill: "currentColor"
      }
    )
  }
), _g = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M9.73 2.9h4.55l.11.77c.17 1.15.67 1.79 1.24 2.09.58.31 1.39.36 2.32-.02l.73-.29 2.27 3.97-.6.48c-.8.64-1.13 1.4-1.13 2.09s.34 1.45 1.14 2.09l.6.48-2.27 3.97-.72-.29c-.93-.37-1.74-.32-2.32 0-.57.31-1.07.95-1.24 2.1l-.11.77H9.75l-.11-.77c-.15-1-.59-1.69-1.16-2.05-.55-.35-1.35-.47-2.42-.04l-.72.29-2.27-3.97.6-.48c.78-.62 1.15-1.36 1.17-2.03.02-.66-.27-1.42-1.17-2.14l-.6-.48 2.27-3.97.73.29c1.07.43 1.87.31 2.41-.04.56-.35 1.01-1.04 1.16-2.04l.11-.77Zm1.5 1.8c-.31 1.06-.91 1.97-1.81 2.53-.93.59-2.07.74-3.29.43l-.78 1.36c.87.91 1.3 1.98 1.26 3.09-.04 1.06-.51 2.05-1.27 2.85l.78 1.36c1.22-.31 2.36-.15 3.29.44.9.57 1.5 1.48 1.81 2.54h1.55c.34-1.21 1.04-2.13 2.01-2.66.93-.5 2.02-.58 3.09-.32l.78-1.37c-.8-.85-1.24-1.88-1.24-2.96s.43-2.12 1.23-2.97l-.78-1.37c-1.07.26-2.15.19-3.08-.31-.97-.52-1.67-1.44-2.01-2.65h-1.54Zm.77 5.41c-1.03 0-1.88.84-1.88 1.89a1.88 1.88 0 1 0 3.76 0c0-1.05-.84-1.89-1.88-1.89ZM8.33 12c0-2.04 1.64-3.69 3.67-3.69s3.67 1.66 3.67 3.69-1.64 3.69-3.67 3.69S8.33 14.03 8.33 12Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), dp = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "m12 3.3 2.8 5.72 6.21.92-4.51 4.48 1.08 6.28-5.57-3.02-5.58 3.02 1.09-6.28L3 9.94l6.24-.92L12 3.3Zm.01 4.12-1.57 3.25-3.6.53 2.61 2.59-.62 3.55L12 15.62l3.17 1.72-.61-3.55 2.61-2.59-3.58-.53L12 7.42Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), fp = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M12 3.3 9.24 9.02 3 9.94l4.51 4.48-1.09 6.28L12 17.68l5.57 3.02-1.08-6.28L21 9.94l-6.21-.92-2.8-5.72Zm.01 4.12 1.59 3.25 3.58.53-2.61 2.59.61 3.55-3.17-1.72v-8.2Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), hp = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M12 3.3 9.24 9.02 3 9.94l4.51 4.48-1.09 6.28L12 17.68l5.57 3.02-1.08-6.28L21 9.94l-6.21-.92-2.8-5.72Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), jg = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M13.27 6.42H3.88V4.6l11.18.02v2.24h4.32l2.67 4.2v5.22h-1.52v.21c0 1.61-1.3 2.91-2.9 2.91s-2.9-1.3-2.9-2.91v-.21h-3.64v.21c0 1.61-1.3 2.91-2.9 2.91s-2.9-1.3-2.9-2.91v-.23H3.84v-1.81H6.1c.53-.54 1.26-.88 2.07-.88s1.56.34 2.09.89h2.95V6.42Zm2.28 8.05h-.49V8.66h3.33l1.86 2.92v2.89h-.52c-.53-.55-1.27-.89-2.09-.89s-1.56.34-2.09.89ZM6.72 9.62H1.95V7.81h4.77v1.81ZM6.1 12.8H2.92v-1.81H6.1v1.81Zm2.12 2.58c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1 1.1-.49 1.1-1.1-.49-1.1-1.1-1.1Zm9.42 0c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1 1.1-.49 1.1-1.1-.49-1.1-1.1-1.1Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), Sg = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M15.28 19.2H8.72v-1.8h6.56v1.8ZM8.3 16.87v-2.58c0-.12-.03-.24-.08-.35a.763.763 0 0 0-.22-.28c-.77-.6-1.4-1.39-1.83-2.26-.44-.88-.67-1.86-.67-2.84C5.48 5.03 8.33 2.08 11.84 2c1.37-.03 2.7.36 3.83 1.14 1.13.78 1.98 1.88 2.44 3.18.46 1.3.51 2.68.13 4.01a6.508 6.508 0 0 1-2.23 3.33.77.77 0 0 0-.23.28c-.05.11-.08.24-.08.36v2.59l-7.4-.02Zm1.79-1.77h3.8v-.8c0-.4.09-.79.27-1.15.17-.35.43-.66.74-.91.78-.61 1.34-1.45 1.61-2.41.28-.96.24-1.96-.09-2.91-.34-.94-.95-1.73-1.77-2.3-.82-.56-1.78-.86-2.77-.82-2.54.06-4.6 2.19-4.59 4.75 0 .71.17 1.42.48 2.06.31.64.77 1.2 1.32 1.64.31.24.56.55.73.91.17.35.26.75.26 1.14v.81h.01Zm-.39 4.59a2.3 2.3 0 0 0 4.6 0H9.7Z",
        fill: "currentColor"
      }
    )
  }
), Mg = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M15.72 6.75c-.81 0-1.47.66-1.47 1.47s.66 1.47 1.47 1.47 1.47-.66 1.47-1.47-.66-1.47-1.47-1.47Zm-3.15.57a3.279 3.279 0 0 1 6.3 0H21v1.8h-2.13a3.279 3.279 0 0 1-6.3 0H3v-1.8h9.58ZM8.14 14.3c-.81 0-1.47.66-1.47 1.47s.66 1.47 1.47 1.47 1.47-.66 1.47-1.47-.66-1.47-1.47-1.47Zm-3.15.57a3.279 3.279 0 0 1 6.3 0H21v1.8h-9.71a3.279 3.279 0 0 1-6.3 0H3v-1.8h2Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), Lg = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M10.67 3.75c.51-.3 1.08-.37 1.65-.25h.02l.02.01c1.23.33 1.91 1.46 1.66 2.68l-.38 2.07h4.67a2.537 2.537 0 0 1 1.92.86c.24.27.42.6.52.95.1.35.13.72.07 1.08s-1.11 7.26-1.11 7.26a2.517 2.517 0 0 1-2.51 2.14c-4.68 0-9.36.02-14.05 0V9.88H7.5l2.08-4.8c.24-.55.59-1.02 1.09-1.32Zm-3.48 7.92H4.95v7.07h2.24v-7.07Zm1.8 7.07h8.22c.17 0 .34-.06.47-.17.13-.11.22-.27.24-.44l1.11-7.26c.02-.1 0-.21-.02-.3a.72.72 0 0 0-.4-.45.765.765 0 0 0-.3-.06h-6.85l.78-4.22c.06-.29-.05-.5-.34-.58a.44.44 0 0 0-.32.04c-.09.05-.23.18-.36.48l-2.24 5.18v7.78Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), Tg = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M19.05 5.25h-2.24v7.07h2.24V5.25Zm1.8-1.79v10.66H16.5l-2.08 4.8c-.24.55-.59 1.02-1.09 1.32-.51.3-1.08.37-1.65.25h-.02l-.02-.01c-1.23-.33-1.91-1.46-1.66-2.68l.38-2.07H5.69a2.537 2.537 0 0 1-1.92-.86c-.24-.27-.42-.6-.52-.95-.1-.35-.13-.72-.07-1.08l1.11-7.26A2.517 2.517 0 0 1 6.8 3.44c4.68 0 9.36-.02 14.05 0Zm-5.84 9.58V5.26H6.79c-.17 0-.34.06-.47.17-.13.11-.22.27-.24.44l-1.11 7.26c-.02.1 0 .21.02.3a.72.72 0 0 0 .4.45c.09.04.2.06.3.06h6.85l-.78 4.22c-.06.29.05.5.34.58.15.03.25 0 .32-.04.09-.05.23-.18.36-.48l2.24-5.18Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), Vg = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M10.01 4.8c-2.86 0-5.19 2.33-5.19 5.21s2.33 5.21 5.19 5.21c1.3 0 2.48-.48 3.4-1.27l.58-.59c.76-.91 1.22-2.07 1.22-3.35 0-2.89-2.33-5.21-5.19-5.21Zm5.5 9.57c.95-1.2 1.51-2.71 1.51-4.35 0-3.87-3.13-7.02-7.01-7.02S3 6.15 3 10.02s3.13 7.02 7.01 7.02c1.58 0 3.03-.52 4.2-1.4l5.52 5.37L21 19.72l-5.5-5.34Zm-6.4-5.25V6.73h1.81v2.39h2.38v1.8h-2.38v2.39H9.11v-2.39H6.73v-1.8h2.38Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), Pg = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M10.01 4.8c-2.86 0-5.19 2.33-5.19 5.21s2.33 5.21 5.19 5.21c1.3 0 2.48-.48 3.4-1.27l.58-.59c.76-.91 1.22-2.07 1.22-3.35 0-2.89-2.33-5.21-5.19-5.21Zm5.5 9.57c.95-1.2 1.51-2.71 1.51-4.35 0-3.87-3.13-7.02-7.01-7.02S3 6.15 3 10.02s3.13 7.02 7.01 7.02c1.58 0 3.03-.52 4.2-1.4l5.52 5.37L21 19.72l-5.5-5.34Zm-8.78-3.45v-1.8h6.57v1.8H6.72Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), Eg = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M12 5.11c-1.93 0-3.49 1.57-3.49 3.51s1.56 3.51 3.49 3.51 3.49-1.57 3.49-3.51S13.93 5.11 12 5.11ZM6.72 8.62C6.72 5.68 9.08 3.3 12 3.3s5.28 2.38 5.28 5.32-2.36 5.32-5.28 5.32-5.28-2.38-5.28-5.32ZM4.21 20.7l-.78-.45q-.78-.44-.78-.45v-.02c0-.01.02-.03.03-.05.02-.04.06-.1.11-.16.09-.14.22-.32.4-.54.36-.44.9-1.02 1.64-1.6 1.51-1.16 3.84-2.29 7.15-2.29s5.65 1.13 7.15 2.29a9.65 9.65 0 0 1 1.64 1.6c.18.22.31.41.4.54.05.07.08.12.11.16.01.02.02.04.03.05v.02h.01l-.78.45q-.78.44-.78.45v-.02s-.05-.06-.08-.1c-.06-.09-.16-.24-.3-.41-.28-.35-.72-.82-1.34-1.3-1.23-.95-3.18-1.92-6.06-1.92s-4.84.97-6.06 1.92c-.62.48-1.06.95-1.34 1.3-.14.17-.24.32-.3.41-.03.05-.05.08-.07.1v.02H4.2Zm15.58 0Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), Rg = (e) => /* @__PURE__ */ i.jsx("svg", { viewBox: "0 0 24 24", focusable: "false", ...e, children: /* @__PURE__ */ i.jsx(
  "path",
  {
    d: "M11.89 2.9 22 21.1H2l9.89-18.2Zm.02 3.73L5.03 19.29h13.92L11.9 6.63Zm-.8 8.88V9.9h1.8v5.61h-1.8Zm0 2.25c0-.5.4-.9.9-.9s.9.4.9.9-.4.9-.9.9-.9-.4-.9-.9Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }
) }), Hg = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M12.47 18.95c1.59-1.87 2.55-4.3 2.55-6.95s-.96-5.08-2.55-6.95l-1.45 1.07c1.37 1.57 2.2 3.63 2.2 5.88s-.83 4.31-2.2 5.88l1.45 1.07Zm1.32.98c1.79-2.15 2.86-4.91 2.86-7.93s-1.08-5.78-2.86-7.93L15.24 3c2.01 2.45 3.21 5.58 3.21 9s-1.21 6.55-3.21 9l-1.45-1.07ZM9.7 16.9c1.18-1.29 1.89-3.01 1.89-4.9s-.72-3.61-1.89-4.9L8.24 8.18c.96.99 1.55 2.33 1.55 3.82s-.59 2.84-1.55 3.82L9.7 16.9Zm-2.65-1.96c.79-.73 1.28-1.78 1.28-2.94s-.49-2.21-1.28-2.94l-1.5 1.11c.59.39.98 1.07.98 1.83s-.39 1.44-.98 1.84l1.5 1.11Z",
        fill: "currentColor"
      }
    )
  }
), Ag = (e) => /* @__PURE__ */ i.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: [
      /* @__PURE__ */ i.jsx(
        "path",
        {
          d: "M16.8 4.82c-1.34-1.26-3.13-1.87-4.78-1.87s-3.44.61-4.79 1.86C5.86 6.08 5 7.98 5.17 10.44c.17 2.48 1.77 5.03 3.19 6.87.73.94 1.44 1.73 1.97 2.29.27.28 1.5 1.46 1.5 1.46s1.27-1.16 1.55-1.45c.56-.56 1.31-1.36 2.07-2.3 1.49-1.83 3.17-4.39 3.37-6.86.19-2.45-.66-4.35-2.02-5.62Zm.23 5.48c-.15 1.88-1.5 4.06-2.97 5.87-.71.88-1.42 1.63-1.95 2.16l-.25.25c-.07-.07-.14-.15-.22-.23-.5-.53-1.17-1.28-1.85-2.15-1.39-1.8-2.68-3.98-2.82-5.89-.13-1.93.53-3.3 1.49-4.19.98-.91 2.32-1.37 3.56-1.37s2.57.47 3.55 1.38c.95.89 1.61 2.26 1.46 4.17Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ i.jsx(
        "path",
        {
          d: "M12 6.77c-1.54 0-2.81 1.23-2.81 2.78s1.27 2.78 2.81 2.78 2.81-1.24 2.81-2.78S13.54 6.77 12 6.77Zm0 3.76c-.57 0-1.01-.45-1.01-.98s.44-.98 1.01-.98 1.01.45 1.01.98-.44.98-1.01.98Z",
          fill: "currentColor"
        }
      )
    ]
  }
), kg = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    focusable: "false",
    viewBox: "0 0 48 48",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        d: "M34.92 9.74V5.6h-3.6v4.14H16.66V5.6h-3.6v4.14H5.7V42.4h24.8c6.52 0 11.8-5.28 11.8-11.8V9.74h-7.38zM38.7 30.6c0 4.52-3.68 8.2-8.2 8.2H9.3V19.5h29.4v11.1zm0-14.7H9.3v-2.56h29.4v2.56zm-24.6 6.8h8.08v2.6H14.1v-2.6zm20 0v2.6h-8.08v-2.6h8.08zm-8.08 4.78h8.08v2.6h-8.08v-2.6zm-11.92 0h7.96v2.6H14.1v-2.6zm0 4.8h7.94l-.02 2.62H14.1v-2.62z"
      }
    )
  }
), Zg = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 48 48",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M24 7.6C14.94 7.6 7.6 14.94 7.6 24c0 9.06 7.34 16.4 16.4 16.4 9.06 0 16.4-7.34 16.4-16.4 0-9.06-7.34-16.4-16.4-16.4zM4 24C4 12.96 12.96 4 24 4s20 8.96 20 20-8.96 20-20 20S4 35.04 4 24zm29.8 1.8H14.2v-3.6h19.6v3.6z",
        clipRule: "evenodd"
      }
    )
  }
), Bg = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 48 48",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M30.48 9.45H17.52v-3.4h12.96v3.4zM24 14.43c-6.68 0-12.1 5.4-12.1 12.06S17.32 38.55 24 38.55s12.1-5.4 12.1-12.06S30.68 14.43 24 14.43zM8.5 26.49c0-8.54 6.94-15.46 15.5-15.46 8.56 0 15.5 6.92 15.5 15.46 0 8.54-6.94 15.46-15.5 15.46-8.56 0-15.5-6.92-15.5-15.46zm17.2-8.48v7.8l5.46 5.44-2.4 2.4-6.46-6.44v-9.22h3.4v.02z",
        clipRule: "evenodd"
      }
    )
  }
), Dg = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 48 48",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M4.3 9h39.4v22.2c0 4.3-3.5 7.8-7.8 7.8H4.3v-1.8h1.8-1.8V9zm3.6 26.4h28a4.2 4.2 0 004.2-4.2V14.9L24 29.66 7.9 14.9v20.5zm2.82-22.8h26.54L24 24.76 10.74 12.6h-.02z",
        clipRule: "evenodd"
      }
    )
  }
), Ng = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M12.41 2.29 11.94 2l-.47.29-3.72 2.3-3.72 2.3-.43.26v9.9l.44.26 7.44 4.42.46.27.46-.27 7.56-4.42.44-.26V7.14l-.43-.26-7.56-4.59ZM9.95 5.34l2-1.23 5.79 3.52-2.01 1.16-5.78-3.45Zm6.67 5.01 1.98-1.14v6.83l-5.76 3.37v-6.87l1.98-1.14v3.13l1.8-.99v-3.17Zm-5.58 2.18v6.87L5.4 16.05V9.23l5.64 3.31Zm.9-1.55L6.23 7.64l1.99-1.23 5.72 3.42-2 1.16Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), Og = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 48 48",
    focusable: "false",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M22.04 30.54c0-1.1.9-2 2-2h.02c1.1 0 2 .9 2 2s-.9 2-2 2h-.02c-1.1 0-2-.9-2-2zM40.7 18.36V35c0 4.3-3.48 7.78-7.78 7.78H7.3V18.34h5.96v-2.38c0-5.94 4.84-10.8 10.78-10.8 5.94 0 10.78 4.84 10.78 10.8v2.38h5.88v.02zm-23.84 0h14.36v-2.38c0-3.96-3.24-7.2-7.18-7.2-3.94 0-7.18 3.24-7.18 7.2v2.38z",
        clipRule: "evenodd"
      }
    )
  }
), $g = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    focusable: "false",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M9.67 14.89V4.38a2.38 2.38 0 1 1 4.76 0v10.51c.95.72 1.57 1.87 1.57 3.16 0 2.45-2.21 4.37-4.74 3.88a3.87 3.87 0 0 1-3.08-3.08c-.32-1.61.35-3.08 1.49-3.96Zm3.56-5.25V4.38c0-.65-.53-1.18-1.18-1.18s-1.18.53-1.18 1.18v5.25h2.36ZM4.41 10c.84 0 1.3-.45 1.6-.76l.02-.02c.29-.29.44-.42.78-.42s.48.13.75.4l.42.43.85-.85-.42-.43c-.31-.31-.76-.75-1.6-.75s-1.31.46-1.62.76h-.01c-.3.31-.44.44-.77.44s-.48-.14-.79-.45l-.42-.43-.85.85.42.43.04.04c.3.3.76.76 1.61.76Zm15.16 0c-.84 0-1.3-.45-1.6-.76l-.02-.02c-.29-.29-.44-.42-.78-.42s-.48.13-.75.4l-.42.43-.85-.85.42-.43c.31-.31.76-.75 1.6-.75s1.31.46 1.62.76h.01c.3.31.44.44.77.44s.48-.14.79-.45l.42-.43.85.85-.42.43-.04.04c-.3.3-.76.76-1.61.76ZM6.01 13.34c-.3.3-.76.76-1.6.76s-1.3-.46-1.61-.76l-.04-.04-.42-.43.85-.85.42.43c.31.31.45.45.79.45s.48-.13.77-.42h.01c.31-.32.76-.78 1.62-.78s1.29.44 1.6.75l.42.43-.85.85-.42-.43c-.27-.27-.42-.4-.75-.4s-.49.13-.78.42l-.02.02Zm13.56.76c-.84 0-1.3-.45-1.6-.76l-.02-.02c-.29-.29-.44-.42-.78-.42s-.48.13-.75.4l-.42.43-.85-.85.42-.43c.31-.31.76-.75 1.6-.75s1.31.45 1.62.76h.01c.3.31.44.44.77.44s.48-.14.79-.45l.42-.43.85.85-.42.43-.04.04c-.3.3-.76.76-1.61.76Zm-2.48-9.35a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
), Ig = (e) => /* @__PURE__ */ i.jsx(
  "svg",
  {
    viewBox: "0 0 24 24",
    focusable: "false",
    xmlns: "http://www.w3.org/2000/svg",
    ...e,
    children: /* @__PURE__ */ i.jsx(
      "path",
      {
        d: "M4.2 15.3c0 2.47 2.03 4.5 4.56 4.5s4.56-2.03 4.56-4.5c0-.74-.28-1.75-.8-2.95-.51-1.17-1.2-2.41-1.9-3.55-.67-1.08-1.34-2.06-1.86-2.79-.52.73-1.19 1.7-1.86 2.79-.7 1.14-1.39 2.38-1.9 3.55-.52 1.2-.8 2.21-.8 2.95ZM8.02 5C6.46 7.15 3 12.25 3 15.3S5.58 21 8.76 21s5.76-2.55 5.76-5.7S11.06 7.15 9.5 5c-.45-.62-.75-1-.75-1s-.29.37-.75 1Zm8.7.27c1.77-.43 1.69-.88 2.16-2.27.4 1.5.53 1.84 2.12 2.27-1.53.17-1.69.66-2.12 2.01-.51-1.81-.87-1.62-2.16-2.01Zm-2.44 5.6c2.6-.63 2.49-1.29 3.17-3.33.58 2.2.79 2.7 3.12 3.33-2.26.25-2.49.96-3.12 2.96-.75-2.67-1.28-2.38-3.17-2.96Z",
        fill: "currentColor",
        fillRule: "evenodd"
      }
    )
  }
);
export {
  fa as Advisor,
  Lp as AdvisorDropdown,
  Mp as AdvisorDropdownMenuItem,
  Vp as AdvisorUnassigned,
  Rg as Alert,
  Lv as AlertLight,
  Hp as Amsys,
  Zv as ArrowDown,
  ym as ArrowDownLight,
  kv as ArrowLeft,
  wm as ArrowLeftLight,
  Bv as ArrowRight,
  Cm as ArrowRightLight,
  Dv as ArrowUp,
  bm as ArrowUpLight,
  im as BentoBoxTiles,
  Rp as Bimby,
  xp as BlendLight,
  cg as Bluetooth,
  Qm as BluetoothLight,
  Sp as BottomSheet,
  Ya as Button,
  N4 as ButtonGroup,
  kg as Calendar,
  xm as CalendarLight,
  k8 as CaretDown,
  jm as CaretDownLight,
  A3 as CaretLeft,
  _m as CaretLeftLight,
  k3 as CaretRight,
  Sm as CaretRightLight,
  Nv as CaretUp,
  Mm as CaretUpLight,
  Yv as Check,
  Qv as CheckCircle,
  $m as CheckCircleLight,
  Bm as CheckLight,
  rg as Clock,
  Um as ClockLight,
  jr as Close,
  tg as CloseCircle,
  Fm as CloseCircleLight,
  Nm as CloseLight,
  rm as ContentBlock,
  lg as Delete,
  Jm as DeleteLight,
  jg as Delivery,
  gv as DeliveryLight,
  ug as DisplaySettings,
  ev as DisplaySettingsLight,
  Gv as Download,
  km as DownloadLight,
  P4 as DropdownItem,
  dg as Edit,
  tv as EditLight,
  ag as EditPen,
  Xm as EditPenLight,
  sg as Explore,
  ig as ExploreLight,
  Ff as EyeCatcher,
  Qp as Facebook,
  Cg as Favorite,
  bg as FavoriteFilled,
  fv as FavoriteFilledLight,
  dv as FavoriteLight,
  Mg as Filter,
  xv as FilterLight,
  Pp as Folletto,
  $p as FooterLinks,
  Op as FooterSection,
  vp as FooterShopLogos,
  gp as FooterShopLogosBlock,
  Ip as FooterSmallLinks,
  Jp as FooterSocialLinkBlock,
  Xp as FooterSocialLinks,
  lm as FunctionsTab,
  om as GalleryCarousel,
  qp as Germany,
  em as GridContainer,
  tm as GridItem,
  bp as Header,
  Es as HeaderButton,
  Dp as Headline,
  Bp as Hero,
  Yp as HighTemperatureLight,
  Pv as Home,
  fm as HomeLight,
  cm as ImageCarousel,
  ng as Info,
  qm as InfoLight,
  Wp as Instagram,
  Ka as InteractiveIcon,
  Ep as Kobold,
  xf as Language,
  Wm as LanguageLight,
  Fp as LanguageSelector,
  Sg as Lightbulb,
  wv as LightbulbLight,
  Ag as Location,
  Vv as LocationLight,
  Rv as LockClosed,
  Og as LockClosedFilled,
  mm as LockClosedLight,
  Hv as LockOpen,
  vm as LockOpenLight,
  Dg as Mail,
  yv as MailLight,
  Uf as MediaContainer,
  l0 as Menu,
  pm as MenuLight,
  Jv as Minus,
  Zg as MinusCircle,
  zm as MinusCircleLight,
  Om as MinusLight,
  Ev as More,
  hm as MoreLight,
  Cp as NavItem,
  zp as NewsletterSubscription,
  Hg as Nfc,
  Tv as NfcLight,
  Ng as Package,
  Cv as PackageLight,
  am as ParallaxProductSection,
  Up as Pinterest,
  Xv as Plus,
  eg as PlusCircle,
  Im as PlusCircleLight,
  Dm as PlusLight,
  Ig as PreCleanLight,
  Qf as Price,
  dm as ProductBlock,
  Np as ProductStripe,
  og as Question,
  Km as QuestionLight,
  kp as RecipePlatform,
  mg as Redo,
  iv as RedoLight,
  vg as Repeat,
  ov as RepeatLight,
  fg as Replay1,
  nv as Replay1Light,
  hg as Replay2,
  rv as Replay2Light,
  Kp as Rezeptwelt,
  Sr as Search,
  l4 as SearchField,
  k4 as SearchFlyout,
  Ym as SearchLight,
  A4 as SearchSuggestions,
  Tp as SectionSeparator,
  _g as Settings,
  hv as SettingsLight,
  nm as Shadow,
  Av as ShoppingCart,
  gm as ShoppingCartLight,
  yg as SoftwareUpdate,
  uv as SoftwareUpdateLight,
  gg as Sort,
  av as SortLight,
  $g as SousVideLight,
  dp as StarEmpty,
  pv as StarEmptyLight,
  hp as StarFull,
  vv as StarFullLight,
  fp as StarHalfBorder,
  mv as StarHalfBorderLight,
  sm as StickyProductBar,
  T4 as TagCloud,
  Mr as Theme,
  Ap as Thermomix,
  Tg as ThumbDown,
  _v as ThumbDownLight,
  Lg as ThumbUp,
  bv as ThumbUpLight,
  Bg as Timer,
  Gm as TimerLight,
  Ce as Typography,
  pg as Undo,
  sv as UndoLight,
  Kv as Upload,
  Zm as UploadLight,
  Eg as User,
  Mv as UserLight,
  um as UserReview,
  xg as VisibilityOff,
  lv as VisibilityOffLight,
  wg as VisibilityOn,
  cv as VisibilityOnLight,
  Zp as Vorwerk,
  Ov as Wifi1,
  Em as Wifi1Light,
  qv as Wifi2,
  Rm as Wifi2Light,
  Wv as Wifi3,
  Hm as Wifi3Light,
  Uv as Wifi4,
  Am as Wifi4Light,
  $v as WifiLock1,
  Lm as WifiLock1Light,
  Iv as WifiLock2,
  Tm as WifiLock2Light,
  zv as WifiLock3,
  Vm as WifiLock3Light,
  Fv as WifiLock4,
  Pm as WifiLock4Light,
  Gp as Youtube,
  Vg as ZoomIn,
  jv as ZoomInLight,
  Pg as ZoomOut,
  Sv as ZoomOutLight
};
