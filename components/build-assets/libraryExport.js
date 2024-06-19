/* eslint-disable */

import * as A from "react";
import {
  createElement as $,
  useState as F,
  useMemo as Le,
  createContext as Me,
  useEffect as O,
  default as React,
  Children as Se,
  cloneElement as We,
  useContext as X,
  Fragment as Xn,
  useRef as Z,
  useCallback as _e,
  isValidElement as ht,
  default as l,
  useLayoutEffect as m1,
  useImperativeHandle as o2,
  forwardRef as oe,
  useInsertionEffect as p1,
  useReducer as r2,
  Component as s2,
  useId as v1,
} from "react";
import { flushSync as La, createPortal as a2 } from "react-dom";
var bn =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Va(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
function i2(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var Ta = i2,
  l2 = typeof bn == "object" && bn && bn.Object === Object && bn,
  c2 = l2,
  u2 = c2,
  d2 = typeof self == "object" && self && self.Object === Object && self,
  f2 = u2 || d2 || Function("return this")(),
  Pa = f2,
  h2 = Pa,
  m2 = function () {
    return h2.Date.now();
  },
  p2 = m2,
  v2 = /\s/;
function g2(e) {
  for (var t = e.length; t-- && v2.test(e.charAt(t)); );
  return t;
}
var w2 = g2,
  y2 = w2,
  C2 = /^\s+/;
function b2(e) {
  return e && e.slice(0, y2(e) + 1).replace(C2, "");
}
var E2 = b2,
  x2 = Pa,
  S2 = x2.Symbol,
  Ha = S2,
  ws = Ha,
  Aa = Object.prototype,
  R2 = Aa.hasOwnProperty,
  _2 = Aa.toString,
  $t = ws ? ws.toStringTag : void 0;
function M2(e) {
  var t = R2.call(e, $t),
    n = e[$t];
  try {
    e[$t] = void 0;
    var r = !0;
  } catch {}
  var s = _2.call(e);
  return r && (t ? (e[$t] = n) : delete e[$t]), s;
}
var L2 = M2,
  V2 = Object.prototype,
  T2 = V2.toString;
function P2(e) {
  return T2.call(e);
}
var H2 = P2,
  ys = Ha,
  A2 = L2,
  Z2 = H2,
  k2 = "[object Null]",
  D2 = "[object Undefined]",
  Cs = ys ? ys.toStringTag : void 0;
function B2(e) {
  return e == null
    ? e === void 0
      ? D2
      : k2
    : Cs && Cs in Object(e)
    ? A2(e)
    : Z2(e);
}
var O2 = B2;
function N2(e) {
  return e != null && typeof e == "object";
}
var $2 = N2,
  z2 = O2,
  F2 = $2,
  j2 = "[object Symbol]";
function q2(e) {
  return typeof e == "symbol" || (F2(e) && z2(e) == j2);
}
var I2 = q2,
  W2 = E2,
  bs = Ta,
  U2 = I2,
  Es = 0 / 0,
  G2 = /^[-+]0x[0-9a-f]+$/i,
  K2 = /^0b[01]+$/i,
  Y2 = /^0o[0-7]+$/i,
  X2 = parseInt;
function J2(e) {
  if (typeof e == "number") return e;
  if (U2(e)) return Es;
  if (bs(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = bs(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = W2(e);
  var n = K2.test(e);
  return n || Y2.test(e) ? X2(e.slice(2), n ? 2 : 8) : G2.test(e) ? Es : +e;
}
var Q2 = J2,
  ec = Ta,
  gr = p2,
  xs = Q2,
  tc = "Expected a function",
  nc = Math.max,
  rc = Math.min;
function sc(e, t, n) {
  var r,
    s,
    o,
    a,
    i,
    c,
    f = 0,
    d = !1,
    u = !1,
    h = !0;
  if (typeof e != "function") throw new TypeError(tc);
  (t = xs(t) || 0),
    ec(n) &&
      ((d = !!n.leading),
      (u = "maxWait" in n),
      (o = u ? nc(xs(n.maxWait) || 0, t) : o),
      (h = "trailing" in n ? !!n.trailing : h));
  function m(M) {
    var T = r,
      x = s;
    return (r = s = void 0), (f = M), (a = e.apply(x, T)), a;
  }
  function g(M) {
    return (f = M), (i = setTimeout(b, t)), d ? m(M) : a;
  }
  function v(M) {
    var T = M - c,
      x = M - f,
      H = t - T;
    return u ? rc(H, o - x) : H;
  }
  function w(M) {
    var T = M - c,
      x = M - f;
    return c === void 0 || T >= t || T < 0 || (u && x >= o);
  }
  function b() {
    var M = gr();
    if (w(M)) return y(M);
    i = setTimeout(b, v(M));
  }
  function y(M) {
    return (i = void 0), h && r ? m(M) : ((r = s = void 0), a);
  }
  function C() {
    i !== void 0 && clearTimeout(i), (f = 0), (r = c = s = i = void 0);
  }
  function S() {
    return i === void 0 ? a : y(gr());
  }
  function R() {
    var M = gr(),
      T = w(M);
    if (((r = arguments), (s = this), (c = M), T)) {
      if (i === void 0) return g(c);
      if (u) return clearTimeout(i), (i = setTimeout(b, t)), m(c);
    }
    return i === void 0 && (i = setTimeout(b, t)), a;
  }
  return (R.cancel = C), (R.flush = S), R;
}
var oc = sc;
const Za = /* @__PURE__ */ Va(oc),
  P = (...e) =>
    (e == null
      ? void 0
      : e.filter((n) => (typeof n != "string" || !n.length ? !1 : n.trim()))
    )
      .join(" ")
      .trim();
var Be = "eit9bw1";
var ka = "isActive",
  ac = "_1qyxb2gh",
  En = {
    transparent: "_1qyxb2gd _1qyxb2gc",
    invertedTransparent: "_1qyxb2ge _1qyxb2gc",
    blackGradient: "_1qyxb2gf _1qyxb2gc",
    solidWhite: "_1qyxb2gg _1qyxb2gc",
  },
  jr = "_1qyxb2gb",
  ic = "_1qyxb2g3",
  lc = "_1qyxb2g5",
  cc = "_1qyxb2g2",
  uc = "_1qyxb2g4",
  dc = "_1qyxb2g0",
  fc = {
    sticky: "_1qyxb2g7 _1qyxb2g6",
    normal: "_1qyxb2g8 _1qyxb2g6",
    semiSticky: "_1qyxb2g9 _1qyxb2g6",
  },
  Ss = "_1qyxb2g1",
  Rs = "_1qyxb2ga",
  hc = "w5nxqn2",
  mc = "w5nxqn0",
  pc = "w5nxqn1";
const qr = ({ label: e, children: t, count: n, ...r }) =>
    /* @__PURE__ */ React.createElement(
      "button",
      { className: mc, ...r },
      n && /* @__PURE__ */ React.createElement("span", { className: hc }, n),
      t,
      /* @__PURE__ */ React.createElement("span", { className: pc }, e)
    ),
  vc = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M3.02 4.6h17.96v1.8H3.02V4.6Zm0 6.5h17.96v1.8H3.02v-1.8Zm0 6.5h17.96v1.8H3.02v-1.8Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    );
function de() {
  return (
    (de = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    de.apply(this, arguments)
  );
}
function Pt(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (s) {
    if ((e == null || e(s), n === !1 || !s.defaultPrevented))
      return t == null ? void 0 : t(s);
  };
}
function gc(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Da(...e) {
  return (t) => e.forEach((n) => gc(n, t));
}
function an(...e) {
  return _e(Da(...e), e);
}
function wc(e, t = []) {
  let n = [];
  function r(o, a) {
    const i = /* @__PURE__ */ Me(a),
      c = n.length;
    n = [...n, a];
    function f(u) {
      const { scope: h, children: m, ...g } = u,
        v = (h == null ? void 0 : h[e][c]) || i,
        w = Le(() => g, Object.values(g));
      return /* @__PURE__ */ $(
        v.Provider,
        {
          value: w,
        },
        m
      );
    }
    function d(u, h) {
      const m = (h == null ? void 0 : h[e][c]) || i,
        g = X(m);
      if (g) return g;
      if (a !== void 0) return a;
      throw new Error(`\`${u}\` must be used within \`${o}\``);
    }
    return (f.displayName = o + "Provider"), [f, d];
  }
  const s = () => {
    const o = n.map((a) => /* @__PURE__ */ Me(a));
    return function (i) {
      const c = (i == null ? void 0 : i[e]) || o;
      return Le(
        () => ({
          [`__scope${e}`]: {
            ...i,
            [e]: c,
          },
        }),
        [i, c]
      );
    };
  };
  return (s.scopeName = e), [r, yc(s, ...t)];
}
function yc(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((s) => ({
      useScope: s(),
      scopeName: s.scopeName,
    }));
    return function (o) {
      const a = r.reduce((i, { useScope: c, scopeName: f }) => {
        const u = c(o)[`__scope${f}`];
        return {
          ...i,
          ...u,
        };
      }, {});
      return Le(
        () => ({
          [`__scope${t.scopeName}`]: a,
        }),
        [a]
      );
    };
  };
  return (n.scopeName = t.scopeName), n;
}
const Ir = globalThis != null && globalThis.document ? m1 : () => {},
  Cc = A["useId".toString()] || (() => {});
let bc = 0;
function wr(e) {
  const [t, n] = A.useState(Cc());
  return (
    Ir(() => {
      e || n((r) => r ?? String(bc++));
    }, [e]),
    e || (t ? `radix-${t}` : "")
  );
}
function mt(e) {
  const t = Z(e);
  return (
    O(() => {
      t.current = e;
    }),
    Le(
      () =>
        (...n) => {
          var r;
          return (r = t.current) === null || r === void 0
            ? void 0
            : r.call(t, ...n);
        },
      []
    )
  );
}
function Ec({ prop: e, defaultProp: t, onChange: n = () => {} }) {
  const [r, s] = xc({
      defaultProp: t,
      onChange: n,
    }),
    o = e !== void 0,
    a = o ? e : r,
    i = mt(n),
    c = _e(
      (f) => {
        if (o) {
          const u = typeof f == "function" ? f(e) : f;
          u !== e && i(u);
        } else s(f);
      },
      [o, e, s, i]
    );
  return [a, c];
}
function xc({ defaultProp: e, onChange: t }) {
  const n = F(e),
    [r] = n,
    s = Z(r),
    o = mt(t);
  return (
    O(() => {
      s.current !== r && (o(r), (s.current = r));
    }, [r, s, o]),
    n
  );
}
const g1 = /* @__PURE__ */ oe((e, t) => {
  const { children: n, ...r } = e,
    s = Se.toArray(n),
    o = s.find(Rc);
  if (o) {
    const a = o.props.children,
      i = s.map((c) =>
        c === o
          ? Se.count(a) > 1
            ? Se.only(null)
            : /* @__PURE__ */ ht(a)
            ? a.props.children
            : null
          : c
      );
    return /* @__PURE__ */ $(
      Wr,
      de({}, r, {
        ref: t,
      }),
      /* @__PURE__ */ ht(a) ? /* @__PURE__ */ We(a, void 0, i) : null
    );
  }
  return /* @__PURE__ */ $(
    Wr,
    de({}, r, {
      ref: t,
    }),
    n
  );
});
g1.displayName = "Slot";
const Wr = /* @__PURE__ */ oe((e, t) => {
  const { children: n, ...r } = e;
  return /* @__PURE__ */ ht(n)
    ? /* @__PURE__ */ We(n, {
        ..._c(r, n.props),
        ref: t ? Da(t, n.ref) : n.ref,
      })
    : Se.count(n) > 1
    ? Se.only(null)
    : null;
});
Wr.displayName = "SlotClone";
const Sc = ({ children: e }) => /* @__PURE__ */ $(Xn, null, e);
function Rc(e) {
  return /* @__PURE__ */ ht(e) && e.type === Sc;
}
function _c(e, t) {
  const n = {
    ...t,
  };
  for (const r in t) {
    const s = e[r],
      o = t[r];
    /^on[A-Z]/.test(r)
      ? s && o
        ? (n[r] = (...i) => {
            o(...i), s(...i);
          })
        : s && (n[r] = s)
      : r === "style"
      ? (n[r] = {
          ...s,
          ...o,
        })
      : r === "className" && (n[r] = [s, o].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...n,
  };
}
const Mc = [
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
    "ul",
  ],
  w1 = Mc.reduce((e, t) => {
    const n = /* @__PURE__ */ oe((r, s) => {
      const { asChild: o, ...a } = r,
        i = o ? g1 : t;
      return (
        O(() => {
          window[Symbol.for("radix-ui")] = !0;
        }, []),
        /* @__PURE__ */ $(
          i,
          de({}, a, {
            ref: s,
          })
        )
      );
    });
    return (
      (n.displayName = `Primitive.${t}`),
      {
        ...e,
        [t]: n,
      }
    );
  }, {});
function Lc(e, t) {
  e && La(() => e.dispatchEvent(t));
}
function Vc(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = mt(e);
  O(() => {
    const r = (s) => {
      s.key === "Escape" && n(s);
    };
    return (
      t.addEventListener("keydown", r),
      () => t.removeEventListener("keydown", r)
    );
  }, [n, t]);
}
const Ur = "dismissableLayer.update",
  Tc = "dismissableLayer.pointerDownOutside",
  Pc = "dismissableLayer.focusOutside";
let _s;
const Hc = /* @__PURE__ */ Me({
    layers: /* @__PURE__ */ new Set(),
    layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
    branches: /* @__PURE__ */ new Set(),
  }),
  Ac = /* @__PURE__ */ oe((e, t) => {
    var n;
    const {
        disableOutsidePointerEvents: r = !1,
        onEscapeKeyDown: s,
        onPointerDownOutside: o,
        onFocusOutside: a,
        onInteractOutside: i,
        onDismiss: c,
        ...f
      } = e,
      d = X(Hc),
      [u, h] = F(null),
      m =
        (n = u == null ? void 0 : u.ownerDocument) !== null && n !== void 0
          ? n
          : globalThis == null
          ? void 0
          : globalThis.document,
      [, g] = F({}),
      v = an(t, (x) => h(x)),
      w = Array.from(d.layers),
      [b] = [...d.layersWithOutsidePointerEventsDisabled].slice(-1),
      y = w.indexOf(b),
      C = u ? w.indexOf(u) : -1,
      S = d.layersWithOutsidePointerEventsDisabled.size > 0,
      R = C >= y,
      M = Zc((x) => {
        const H = x.target,
          k = [...d.branches].some((te) => te.contains(H));
        !R ||
          k ||
          (o == null || o(x),
          i == null || i(x),
          x.defaultPrevented || c == null || c());
      }, m),
      T = kc((x) => {
        const H = x.target;
        [...d.branches].some((te) => te.contains(H)) ||
          (a == null || a(x),
          i == null || i(x),
          x.defaultPrevented || c == null || c());
      }, m);
    return (
      Vc((x) => {
        C === d.layers.size - 1 &&
          (s == null || s(x),
          !x.defaultPrevented && c && (x.preventDefault(), c()));
      }, m),
      O(() => {
        if (u)
          return (
            r &&
              (d.layersWithOutsidePointerEventsDisabled.size === 0 &&
                ((_s = m.body.style.pointerEvents),
                (m.body.style.pointerEvents = "none")),
              d.layersWithOutsidePointerEventsDisabled.add(u)),
            d.layers.add(u),
            Ms(),
            () => {
              r &&
                d.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (m.body.style.pointerEvents = _s);
            }
          );
      }, [u, m, r, d]),
      O(
        () => () => {
          u &&
            (d.layers.delete(u),
            d.layersWithOutsidePointerEventsDisabled.delete(u),
            Ms());
        },
        [u, d]
      ),
      O(() => {
        const x = () => g({});
        return (
          document.addEventListener(Ur, x),
          () => document.removeEventListener(Ur, x)
        );
      }, []),
      /* @__PURE__ */ $(
        w1.div,
        de({}, f, {
          ref: v,
          style: {
            pointerEvents: S ? (R ? "auto" : "none") : void 0,
            ...e.style,
          },
          onFocusCapture: Pt(e.onFocusCapture, T.onFocusCapture),
          onBlurCapture: Pt(e.onBlurCapture, T.onBlurCapture),
          onPointerDownCapture: Pt(
            e.onPointerDownCapture,
            M.onPointerDownCapture
          ),
        })
      )
    );
  });
function Zc(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = mt(e),
    r = Z(!1),
    s = Z(() => {});
  return (
    O(() => {
      const o = (i) => {
          if (i.target && !r.current) {
            let f = function () {
              Ba(Tc, n, c, {
                discrete: !0,
              });
            };
            const c = {
              originalEvent: i,
            };
            i.pointerType === "touch"
              ? (t.removeEventListener("click", s.current),
                (s.current = f),
                t.addEventListener("click", s.current, {
                  once: !0,
                }))
              : f();
          } else t.removeEventListener("click", s.current);
          r.current = !1;
        },
        a = window.setTimeout(() => {
          t.addEventListener("pointerdown", o);
        }, 0);
      return () => {
        window.clearTimeout(a),
          t.removeEventListener("pointerdown", o),
          t.removeEventListener("click", s.current);
      };
    }, [t, n]),
    {
      // ensures we check React component tree (not just DOM tree)
      onPointerDownCapture: () => (r.current = !0),
    }
  );
}
function kc(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = mt(e),
    r = Z(!1);
  return (
    O(() => {
      const s = (o) => {
        o.target &&
          !r.current &&
          Ba(
            Pc,
            n,
            {
              originalEvent: o,
            },
            {
              discrete: !1,
            }
          );
      };
      return (
        t.addEventListener("focusin", s),
        () => t.removeEventListener("focusin", s)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Ms() {
  const e = new CustomEvent(Ur);
  document.dispatchEvent(e);
}
function Ba(e, t, n, { discrete: r }) {
  const s = n.originalEvent.target,
    o = new CustomEvent(e, {
      bubbles: !1,
      cancelable: !0,
      detail: n,
    });
  t &&
    s.addEventListener(e, t, {
      once: !0,
    }),
    r ? Lc(s, o) : s.dispatchEvent(o);
}
const yr = "focusScope.autoFocusOnMount",
  Cr = "focusScope.autoFocusOnUnmount",
  Ls = {
    bubbles: !1,
    cancelable: !0,
  },
  Dc = /* @__PURE__ */ oe((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: s,
        onUnmountAutoFocus: o,
        ...a
      } = e,
      [i, c] = F(null),
      f = mt(s),
      d = mt(o),
      u = Z(null),
      h = an(t, (v) => c(v)),
      m = Z({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    O(() => {
      if (r) {
        let v = function (C) {
            if (m.paused || !i) return;
            const S = C.target;
            i.contains(S)
              ? (u.current = S)
              : Ge(u.current, {
                  select: !0,
                });
          },
          w = function (C) {
            if (m.paused || !i) return;
            const S = C.relatedTarget;
            S !== null &&
              (i.contains(S) ||
                Ge(u.current, {
                  select: !0,
                }));
          },
          b = function (C) {
            if (document.activeElement === document.body)
              for (const R of C) R.removedNodes.length > 0 && Ge(i);
          };
        document.addEventListener("focusin", v),
          document.addEventListener("focusout", w);
        const y = new MutationObserver(b);
        return (
          i &&
            y.observe(i, {
              childList: !0,
              subtree: !0,
            }),
          () => {
            document.removeEventListener("focusin", v),
              document.removeEventListener("focusout", w),
              y.disconnect();
          }
        );
      }
    }, [r, i, m.paused]),
      O(() => {
        if (i) {
          Ts.add(m);
          const v = document.activeElement;
          if (!i.contains(v)) {
            const b = new CustomEvent(yr, Ls);
            i.addEventListener(yr, f),
              i.dispatchEvent(b),
              b.defaultPrevented ||
                (Bc(Fc(Oa(i)), {
                  select: !0,
                }),
                document.activeElement === v && Ge(i));
          }
          return () => {
            i.removeEventListener(yr, f),
              setTimeout(() => {
                const b = new CustomEvent(Cr, Ls);
                i.addEventListener(Cr, d),
                  i.dispatchEvent(b),
                  b.defaultPrevented ||
                    Ge(v ?? document.body, {
                      select: !0,
                    }),
                  i.removeEventListener(Cr, d),
                  Ts.remove(m);
              }, 0);
          };
        }
      }, [i, f, d, m]);
    const g = _e(
      (v) => {
        if ((!n && !r) || m.paused) return;
        const w = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey,
          b = document.activeElement;
        if (w && b) {
          const y = v.currentTarget,
            [C, S] = Oc(y);
          C && S
            ? !v.shiftKey && b === S
              ? (v.preventDefault(),
                n &&
                  Ge(C, {
                    select: !0,
                  }))
              : v.shiftKey &&
                b === C &&
                (v.preventDefault(),
                n &&
                  Ge(S, {
                    select: !0,
                  }))
            : b === y && v.preventDefault();
        }
      },
      [n, r, m.paused]
    );
    return /* @__PURE__ */ $(
      w1.div,
      de(
        {
          tabIndex: -1,
        },
        a,
        {
          ref: h,
          onKeyDown: g,
        }
      )
    );
  });
function Bc(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (
      (Ge(r, {
        select: t,
      }),
      document.activeElement !== n)
    )
      return;
}
function Oc(e) {
  const t = Oa(e),
    n = Vs(t, e),
    r = Vs(t.reverse(), e);
  return [n, r];
}
function Oa(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const s = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || s
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Vs(e, t) {
  for (const n of e)
    if (
      !Nc(n, {
        upTo: t,
      })
    )
      return n;
}
function Nc(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function $c(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ge(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({
      preventScroll: !0,
    }),
      e !== n && $c(e) && t && e.select();
  }
}
const Ts = zc();
function zc() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = Ps(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = Ps(e, t)), (n = e[0]) === null || n === void 0 || n.resume();
    },
  };
}
function Ps(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Fc(e) {
  return e.filter((t) => t.tagName !== "A");
}
function jc(e, t) {
  return r2((n, r) => {
    const s = t[n][r];
    return s ?? n;
  }, e);
}
const y1 = (e) => {
  const { present: t, children: n } = e,
    r = qc(t),
    s =
      typeof n == "function"
        ? n({
            present: r.isPresent,
          })
        : Se.only(n),
    o = an(r.ref, s.ref);
  return typeof n == "function" || r.isPresent
    ? /* @__PURE__ */ We(s, {
        ref: o,
      })
    : null;
};
y1.displayName = "Presence";
function qc(e) {
  const [t, n] = F(),
    r = Z({}),
    s = Z(e),
    o = Z("none"),
    a = e ? "mounted" : "unmounted",
    [i, c] = jc(a, {
      mounted: {
        UNMOUNT: "unmounted",
        ANIMATION_OUT: "unmountSuspended",
      },
      unmountSuspended: {
        MOUNT: "mounted",
        ANIMATION_END: "unmounted",
      },
      unmounted: {
        MOUNT: "mounted",
      },
    });
  return (
    O(() => {
      const f = xn(r.current);
      o.current = i === "mounted" ? f : "none";
    }, [i]),
    Ir(() => {
      const f = r.current,
        d = s.current;
      if (d !== e) {
        const h = o.current,
          m = xn(f);
        e
          ? c("MOUNT")
          : m === "none" || (f == null ? void 0 : f.display) === "none"
          ? c("UNMOUNT")
          : c(d && h !== m ? "ANIMATION_OUT" : "UNMOUNT"),
          (s.current = e);
      }
    }, [e, c]),
    Ir(() => {
      if (t) {
        const f = (u) => {
            const m = xn(r.current).includes(u.animationName);
            u.target === t && m && La(() => c("ANIMATION_END"));
          },
          d = (u) => {
            u.target === t && (o.current = xn(r.current));
          };
        return (
          t.addEventListener("animationstart", d),
          t.addEventListener("animationcancel", f),
          t.addEventListener("animationend", f),
          () => {
            t.removeEventListener("animationstart", d),
              t.removeEventListener("animationcancel", f),
              t.removeEventListener("animationend", f);
          }
        );
      } else c("ANIMATION_END");
    }, [t, c]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(i),
      ref: _e((f) => {
        f && (r.current = getComputedStyle(f)), n(f);
      }, []),
    }
  );
}
function xn(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let br = 0;
function Ic() {
  O(() => {
    var e, t;
    const n = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement(
        "afterbegin",
        (e = n[0]) !== null && e !== void 0 ? e : Hs()
      ),
      document.body.insertAdjacentElement(
        "beforeend",
        (t = n[1]) !== null && t !== void 0 ? t : Hs()
      ),
      br++,
      () => {
        br === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((r) => r.remove()),
          br--;
      }
    );
  }, []);
}
function Hs() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.cssText =
      "outline: none; opacity: 0; position: fixed; pointer-events: none"),
    e
  );
}
var He = function () {
  return (
    (He =
      Object.assign ||
      function (t) {
        for (var n, r = 1, s = arguments.length; r < s; r++) {
          n = arguments[r];
          for (var o in n)
            Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
        }
        return t;
      }),
    He.apply(this, arguments)
  );
};
function Na(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, r = Object.getOwnPropertySymbols(e); s < r.length; s++)
      t.indexOf(r[s]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[s]) &&
        (n[r[s]] = e[r[s]]);
  return n;
}
function Wc(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, s = t.length, o; r < s; r++)
      (o || !(r in t)) &&
        (o || (o = Array.prototype.slice.call(t, 0, r)), (o[r] = t[r]));
  return e.concat(o || Array.prototype.slice.call(t));
}
var An = "right-scroll-bar-position",
  Zn = "width-before-scroll-bar",
  Uc = "with-scroll-bars-hidden",
  Gc = "--removed-body-scroll-bar-size";
function Kc(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Yc(e, t) {
  var n = F(function () {
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
          s !== r && ((n.value = r), n.callback(r, s));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
function Xc(e, t) {
  return Yc(t || null, function (n) {
    return e.forEach(function (r) {
      return Kc(r, n);
    });
  });
}
function Jc(e) {
  return e;
}
function Qc(e, t) {
  t === void 0 && (t = Jc);
  var n = [],
    r = !1,
    s = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (o) {
        var a = t(o, r);
        return (
          n.push(a),
          function () {
            n = n.filter(function (i) {
              return i !== a;
            });
          }
        );
      },
      assignSyncMedium: function (o) {
        for (r = !0; n.length; ) {
          var a = n;
          (n = []), a.forEach(o);
        }
        n = {
          push: function (i) {
            return o(i);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (o) {
        r = !0;
        var a = [];
        if (n.length) {
          var i = n;
          (n = []), i.forEach(o), (a = n);
        }
        var c = function () {
            var d = a;
            (a = []), d.forEach(o);
          },
          f = function () {
            return Promise.resolve().then(c);
          };
        f(),
          (n = {
            push: function (d) {
              a.push(d), f();
            },
            filter: function (d) {
              return (a = a.filter(d)), n;
            },
          });
      },
    };
  return s;
}
function e0(e) {
  e === void 0 && (e = {});
  var t = Qc(null);
  return (t.options = He({ async: !0, ssr: !1 }, e)), t;
}
var $a = function (e) {
  var t = e.sideCar,
    n = Na(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return A.createElement(r, He({}, n));
};
$a.isSideCarExport = !0;
function t0(e, t) {
  return e.useMedium(t), $a;
}
var za = e0(),
  Er = function () {},
  Jn = A.forwardRef(function (e, t) {
    var n = A.useRef(null),
      r = A.useState({
        onScrollCapture: Er,
        onWheelCapture: Er,
        onTouchMoveCapture: Er,
      }),
      s = r[0],
      o = r[1],
      a = e.forwardProps,
      i = e.children,
      c = e.className,
      f = e.removeScrollBar,
      d = e.enabled,
      u = e.shards,
      h = e.sideCar,
      m = e.noIsolation,
      g = e.inert,
      v = e.allowPinchZoom,
      w = e.as,
      b = w === void 0 ? "div" : w,
      y = Na(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
      ]),
      C = h,
      S = Xc([n, t]),
      R = He(He({}, y), s);
    return A.createElement(
      A.Fragment,
      null,
      d &&
        A.createElement(C, {
          sideCar: za,
          removeScrollBar: f,
          shards: u,
          noIsolation: m,
          inert: g,
          setCallbacks: o,
          allowPinchZoom: !!v,
          lockRef: n,
        }),
      a
        ? A.cloneElement(A.Children.only(i), He(He({}, R), { ref: S }))
        : A.createElement(b, He({}, R, { className: c, ref: S }), i)
    );
  });
Jn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1,
};
Jn.classNames = {
  fullWidth: Zn,
  zeroRight: An,
};
var As,
  n0 = function () {
    if (As) return As;
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
  };
function r0() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = n0();
  return t && e.setAttribute("nonce", t), e;
}
function s0(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function o0(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var a0 = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = r0()) && (s0(t, n), o0(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  i0 = function () {
    var e = a0();
    return function (t, n) {
      A.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  Fa = function () {
    var e = i0(),
      t = function (n) {
        var r = n.styles,
          s = n.dynamic;
        return e(r, s), null;
      };
    return t;
  },
  l0 = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0,
  },
  xr = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  c0 = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      s = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [xr(n), xr(r), xr(s)];
  },
  u0 = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return l0;
    var t = c0(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  d0 = Fa(),
  f0 = function (e, t, n, r) {
    var s = e.left,
      o = e.top,
      a = e.right,
      i = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          Uc,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(i, "px ")
        .concat(
          r,
          `;
  }
  body {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  s,
                  `px;
    padding-top: `
                )
                .concat(
                  o,
                  `px;
    padding-right: `
                )
                .concat(
                  a,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(i, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" &&
              "padding-right: ".concat(i, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          An,
          ` {
    right: `
        )
        .concat(i, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          Zn,
          ` {
    margin-right: `
        )
        .concat(i, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(An, " .")
        .concat(
          An,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(Zn, " .")
        .concat(
          Zn,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body {
    `
        )
        .concat(Gc, ": ")
        .concat(
          i,
          `px;
  }
`
        )
    );
  },
  h0 = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      s = r === void 0 ? "margin" : r,
      o = A.useMemo(
        function () {
          return u0(s);
        },
        [s]
      );
    return A.createElement(d0, { styles: f0(o, !t, s, n ? "" : "!important") });
  },
  Gr = !1;
if (typeof window < "u")
  try {
    var Sn = Object.defineProperty({}, "passive", {
      get: function () {
        return (Gr = !0), !0;
      },
    });
    window.addEventListener("test", Sn, Sn),
      window.removeEventListener("test", Sn, Sn);
  } catch {
    Gr = !1;
  }
var St = Gr ? { passive: !1 } : !1,
  m0 = function (e) {
    return e.tagName === "TEXTAREA";
  },
  ja = function (e, t) {
    var n = window.getComputedStyle(e);
    return (
      // not-not-scrollable
      n[t] !== "hidden" && // contains scroll inside self
      !(n.overflowY === n.overflowX && !m0(e) && n[t] === "visible")
    );
  },
  p0 = function (e) {
    return ja(e, "overflowY");
  },
  v0 = function (e) {
    return ja(e, "overflowX");
  },
  Zs = function (e, t) {
    var n = t;
    do {
      typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
      var r = qa(e, n);
      if (r) {
        var s = Ia(e, n),
          o = s[1],
          a = s[2];
        if (o > a) return !0;
      }
      n = n.parentNode;
    } while (n && n !== document.body);
    return !1;
  },
  g0 = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  w0 = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  qa = function (e, t) {
    return e === "v" ? p0(t) : v0(t);
  },
  Ia = function (e, t) {
    return e === "v" ? g0(t) : w0(t);
  },
  y0 = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  C0 = function (e, t, n, r, s) {
    var o = y0(e, window.getComputedStyle(t).direction),
      a = o * r,
      i = n.target,
      c = t.contains(i),
      f = !1,
      d = a > 0,
      u = 0,
      h = 0;
    do {
      var m = Ia(e, i),
        g = m[0],
        v = m[1],
        w = m[2],
        b = v - w - o * g;
      (g || b) && qa(e, i) && ((u += b), (h += g)), (i = i.parentNode);
    } while (
      // portaled content
      (!c && i !== document.body) || // self content
      (c && (t.contains(i) || t === i))
    );
    return (
      ((d && ((s && u === 0) || (!s && a > u))) ||
        (!d && ((s && h === 0) || (!s && -a > h)))) &&
        (f = !0),
      f
    );
  },
  Rn = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  ks = function (e) {
    return [e.deltaX, e.deltaY];
  },
  Ds = function (e) {
    return e && "current" in e ? e.current : e;
  },
  b0 = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  E0 = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  x0 = 0,
  Rt = [];
function S0(e) {
  var t = A.useRef([]),
    n = A.useRef([0, 0]),
    r = A.useRef(),
    s = A.useState(x0++)[0],
    o = A.useState(function () {
      return Fa();
    })[0],
    a = A.useRef(e);
  A.useEffect(
    function () {
      a.current = e;
    },
    [e]
  ),
    A.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(s));
          var v = Wc([e.lockRef.current], (e.shards || []).map(Ds), !0).filter(
            Boolean
          );
          return (
            v.forEach(function (w) {
              return w.classList.add("allow-interactivity-".concat(s));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(s)),
                v.forEach(function (w) {
                  return w.classList.remove("allow-interactivity-".concat(s));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var i = A.useCallback(function (v, w) {
      if ("touches" in v && v.touches.length === 2)
        return !a.current.allowPinchZoom;
      var b = Rn(v),
        y = n.current,
        C = "deltaX" in v ? v.deltaX : y[0] - b[0],
        S = "deltaY" in v ? v.deltaY : y[1] - b[1],
        R,
        M = v.target,
        T = Math.abs(C) > Math.abs(S) ? "h" : "v";
      if ("touches" in v && T === "h" && M.type === "range") return !1;
      var x = Zs(T, M);
      if (!x) return !0;
      if ((x ? (R = T) : ((R = T === "v" ? "h" : "v"), (x = Zs(T, M))), !x))
        return !1;
      if (
        (!r.current && "changedTouches" in v && (C || S) && (r.current = R), !R)
      )
        return !0;
      var H = r.current || R;
      return C0(H, w, v, H === "h" ? C : S, !0);
    }, []),
    c = A.useCallback(function (v) {
      var w = v;
      if (!(!Rt.length || Rt[Rt.length - 1] !== o)) {
        var b = "deltaY" in w ? ks(w) : Rn(w),
          y = t.current.filter(function (R) {
            return R.name === w.type && R.target === w.target && b0(R.delta, b);
          })[0];
        if (y && y.should) {
          w.cancelable && w.preventDefault();
          return;
        }
        if (!y) {
          var C = (a.current.shards || [])
              .map(Ds)
              .filter(Boolean)
              .filter(function (R) {
                return R.contains(w.target);
              }),
            S = C.length > 0 ? i(w, C[0]) : !a.current.noIsolation;
          S && w.cancelable && w.preventDefault();
        }
      }
    }, []),
    f = A.useCallback(function (v, w, b, y) {
      var C = { name: v, delta: w, target: b, should: y };
      t.current.push(C),
        setTimeout(function () {
          t.current = t.current.filter(function (S) {
            return S !== C;
          });
        }, 1);
    }, []),
    d = A.useCallback(function (v) {
      (n.current = Rn(v)), (r.current = void 0);
    }, []),
    u = A.useCallback(function (v) {
      f(v.type, ks(v), v.target, i(v, e.lockRef.current));
    }, []),
    h = A.useCallback(function (v) {
      f(v.type, Rn(v), v.target, i(v, e.lockRef.current));
    }, []);
  A.useEffect(function () {
    return (
      Rt.push(o),
      e.setCallbacks({
        onScrollCapture: u,
        onWheelCapture: u,
        onTouchMoveCapture: h,
      }),
      document.addEventListener("wheel", c, St),
      document.addEventListener("touchmove", c, St),
      document.addEventListener("touchstart", d, St),
      function () {
        (Rt = Rt.filter(function (v) {
          return v !== o;
        })),
          document.removeEventListener("wheel", c, St),
          document.removeEventListener("touchmove", c, St),
          document.removeEventListener("touchstart", d, St);
      }
    );
  }, []);
  var m = e.removeScrollBar,
    g = e.inert;
  return A.createElement(
    A.Fragment,
    null,
    g ? A.createElement(o, { styles: E0(s) }) : null,
    m ? A.createElement(h0, { gapMode: "margin" }) : null
  );
}
const R0 = t0(za, S0);
var Wa = A.forwardRef(function (e, t) {
  return A.createElement(Jn, He({}, e, { ref: t, sideCar: R0 }));
});
Wa.classNames = Jn.classNames;
const _0 = Wa;
var M0 = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  _t = /* @__PURE__ */ new WeakMap(),
  _n = /* @__PURE__ */ new WeakMap(),
  Mn = {},
  Sr = 0,
  Ua = function (e) {
    return e && (e.host || Ua(e.parentNode));
  },
  L0 = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = Ua(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  V0 = function (e, t, n, r) {
    var s = L0(t, Array.isArray(e) ? e : [e]);
    Mn[n] || (Mn[n] = /* @__PURE__ */ new WeakMap());
    var o = Mn[n],
      a = [],
      i = /* @__PURE__ */ new Set(),
      c = new Set(s),
      f = function (u) {
        !u || i.has(u) || (i.add(u), f(u.parentNode));
      };
    s.forEach(f);
    var d = function (u) {
      !u ||
        c.has(u) ||
        Array.prototype.forEach.call(u.children, function (h) {
          if (i.has(h)) d(h);
          else {
            var m = h.getAttribute(r),
              g = m !== null && m !== "false",
              v = (_t.get(h) || 0) + 1,
              w = (o.get(h) || 0) + 1;
            _t.set(h, v),
              o.set(h, w),
              a.push(h),
              v === 1 && g && _n.set(h, !0),
              w === 1 && h.setAttribute(n, "true"),
              g || h.setAttribute(r, "true");
          }
        });
    };
    return (
      d(t),
      i.clear(),
      Sr++,
      function () {
        a.forEach(function (u) {
          var h = _t.get(u) - 1,
            m = o.get(u) - 1;
          _t.set(u, h),
            o.set(u, m),
            h || (_n.has(u) || u.removeAttribute(r), _n.delete(u)),
            m || u.removeAttribute(n);
        }),
          Sr--,
          Sr ||
            ((_t = /* @__PURE__ */ new WeakMap()),
            (_t = /* @__PURE__ */ new WeakMap()),
            (_n = /* @__PURE__ */ new WeakMap()),
            (Mn = {}));
      }
    );
  },
  T0 = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      s = t || M0(e);
    return s
      ? (r.push.apply(r, Array.from(s.querySelectorAll("[aria-live]"))),
        V0(r, s, n, "aria-hidden"))
      : function () {
          return null;
        };
  };
const Ga = "Dialog",
  [Ka, Pd] = wc(Ga),
  [P0, kt] = Ka(Ga),
  H0 = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: s,
        onOpenChange: o,
        modal: a = !0,
      } = e,
      i = Z(null),
      c = Z(null),
      [f = !1, d] = Ec({
        prop: r,
        defaultProp: s,
        onChange: o,
      });
    return /* @__PURE__ */ $(
      P0,
      {
        scope: t,
        triggerRef: i,
        contentRef: c,
        contentId: wr(),
        titleId: wr(),
        descriptionId: wr(),
        open: f,
        onOpenChange: d,
        onOpenToggle: _e(() => d((u) => !u), [d]),
        modal: a,
      },
      n
    );
  },
  A0 = "DialogPortal",
  [Hd, Ya] = Ka(A0, {
    forceMount: void 0,
  }),
  Kr = "DialogOverlay",
  Z0 = /* @__PURE__ */ oe((e, t) => {
    const n = Ya(Kr, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...s } = e,
      o = kt(Kr, e.__scopeDialog);
    return o.modal
      ? /* @__PURE__ */ $(
          y1,
          {
            present: r || o.open,
          },
          /* @__PURE__ */ $(
            k0,
            de({}, s, {
              ref: t,
            })
          )
        )
      : null;
  }),
  k0 = /* @__PURE__ */ oe((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      s = kt(Kr, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ $(
        _0,
        {
          as: g1,
          allowPinchZoom: !0,
          shards: [s.contentRef],
        },
        /* @__PURE__ */ $(
          w1.div,
          de(
            {
              "data-state": Ja(s.open),
            },
            r,
            {
              ref: t,
              style: {
                pointerEvents: "auto",
                ...r.style,
              },
            }
          )
        )
      )
    );
  }),
  tn = "DialogContent",
  D0 = /* @__PURE__ */ oe((e, t) => {
    const n = Ya(tn, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...s } = e,
      o = kt(tn, e.__scopeDialog);
    return /* @__PURE__ */ $(
      y1,
      {
        present: r || o.open,
      },
      o.modal
        ? /* @__PURE__ */ $(
            B0,
            de({}, s, {
              ref: t,
            })
          )
        : /* @__PURE__ */ $(
            O0,
            de({}, s, {
              ref: t,
            })
          )
    );
  }),
  B0 = /* @__PURE__ */ oe((e, t) => {
    const n = kt(tn, e.__scopeDialog),
      r = Z(null),
      s = an(t, n.contentRef, r);
    return (
      O(() => {
        const o = r.current;
        if (o) return T0(o);
      }, []),
      /* @__PURE__ */ $(
        Xa,
        de({}, e, {
          ref: s,
          trapFocus: n.open,
          disableOutsidePointerEvents: !0,
          onCloseAutoFocus: Pt(e.onCloseAutoFocus, (o) => {
            var a;
            o.preventDefault(),
              (a = n.triggerRef.current) === null || a === void 0 || a.focus();
          }),
          onPointerDownOutside: Pt(e.onPointerDownOutside, (o) => {
            const a = o.detail.originalEvent,
              i = a.button === 0 && a.ctrlKey === !0;
            (a.button === 2 || i) && o.preventDefault();
          }),
          onFocusOutside: Pt(e.onFocusOutside, (o) => o.preventDefault()),
        })
      )
    );
  }),
  O0 = /* @__PURE__ */ oe((e, t) => {
    const n = kt(tn, e.__scopeDialog),
      r = Z(!1),
      s = Z(!1);
    return /* @__PURE__ */ $(
      Xa,
      de({}, e, {
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (o) => {
          var a;
          if (
            ((a = e.onCloseAutoFocus) === null || a === void 0 || a.call(e, o),
            !o.defaultPrevented)
          ) {
            var i;
            r.current ||
              (i = n.triggerRef.current) === null ||
              i === void 0 ||
              i.focus(),
              o.preventDefault();
          }
          (r.current = !1), (s.current = !1);
        },
        onInteractOutside: (o) => {
          var a, i;
          (a = e.onInteractOutside) === null || a === void 0 || a.call(e, o),
            o.defaultPrevented ||
              ((r.current = !0),
              o.detail.originalEvent.type === "pointerdown" &&
                (s.current = !0));
          const c = o.target;
          ((i = n.triggerRef.current) === null || i === void 0
            ? void 0
            : i.contains(c)) && o.preventDefault(),
            o.detail.originalEvent.type === "focusin" &&
              s.current &&
              o.preventDefault();
        },
      })
    );
  }),
  Xa = /* @__PURE__ */ oe((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: s,
        onCloseAutoFocus: o,
        ...a
      } = e,
      i = kt(tn, n),
      c = Z(null),
      f = an(t, c);
    return (
      Ic(),
      /* @__PURE__ */ $(
        Xn,
        null,
        /* @__PURE__ */ $(
          Dc,
          {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: s,
            onUnmountAutoFocus: o,
          },
          /* @__PURE__ */ $(
            Ac,
            de(
              {
                role: "dialog",
                id: i.contentId,
                "aria-describedby": i.descriptionId,
                "aria-labelledby": i.titleId,
                "data-state": Ja(i.open),
              },
              a,
              {
                ref: f,
                onDismiss: () => i.onOpenChange(!1),
              }
            )
          )
        ),
        !1
      )
    );
  });
function Ja(e) {
  return e ? "open" : "closed";
}
const ln = H0,
  C1 = Z0,
  cn = D0;
var N0 = "qn51an4",
  $0 = "qn51an3",
  z0 = "qn51an0";
const Oe = () => {
  const [e, t] = F([window.innerHeight, window.innerWidth]),
    n = () => {
      t([window.innerWidth, window.innerHeight]);
    },
    r = Za(n, 40);
  return (
    O(
      () => (
        window.addEventListener("resize", r),
        n(),
        () => {
          window.removeEventListener("resize", r);
        }
      ),
      []
    ),
    e
  );
};
var Ne = { xs: "375px", m: "768px", l: "992px", xl: "1200px", xxl: "1400px" },
  Bs = { xs: "374px", m: "767px", l: "991px", xl: "1199px", xxl: "1399px" },
  pt = {
    color: {
      brand: {
        orange: {
          O500: "var(--_1epihgq1)",
          O75: "var(--_1epihgq2)",
          O15: "var(--_1epihgq3)",
        },
        yellow: {
          Y500: "var(--_1epihgq4)",
          Y75: "var(--_1epihgq5)",
          Y15: "var(--_1epihgq6)",
        },
        red: {
          R500: "var(--_1epihgq7)",
          R75: "var(--_1epihgq8)",
          R15: "var(--_1epihgq9)",
        },
        blue: {
          B500: "var(--_1epihgqa)",
          B75: "var(--_1epihgqb)",
          B15: "var(--_1epihgqc)",
        },
        purple: {
          P500: "var(--_1epihgqd)",
          P75: "var(--_1epihgqe)",
          P15: "var(--_1epihgqf)",
        },
        green: {
          G900: "var(--_1epihgqg)",
          G800: "var(--_1epihgqh)",
          G700: "var(--_1epihgqi)",
          G600: "var(--_1epihgqj)",
          G500: "var(--_1epihgqk)",
          G400: "var(--_1epihgql)",
          G300: "var(--_1epihgqm)",
          G200: "var(--_1epihgqn)",
          G100: "var(--_1epihgqo)",
          G20: "var(--_1epihgqp)",
          G15: "var(--_1epihgqq)",
        },
      },
      neutrals: {
        neutrals: {
          N100: "var(--_1epihgqr)",
          N100Bold: "var(--_1epihgqs)",
          N100Bolder: "var(--_1epihgqt)",
          N200: "var(--_1epihgqu)",
          N200Bold: "var(--_1epihgqv)",
          N200Bolder: "var(--_1epihgqw)",
          N300: "var(--_1epihgqx)",
          N400: "var(--_1epihgqy)",
          N500: "var(--_1epihgqz)",
          N600: "var(--_1epihgq10)",
          N700: "var(--_1epihgq11)",
          N800: "var(--_1epihgq12)",
          N900: "var(--_1epihgq13)",
          N1000: "var(--_1epihgq14)",
        },
        whites: {
          W100: "var(--_1epihgq15)",
          W75: "var(--_1epihgq16)",
          W50: "var(--_1epihgq17)",
          W30: "var(--_1epihgq18)",
          W15: "var(--_1epihgq19)",
          W5: "var(--_1epihgq1a)",
          W0: "var(--_1epihgq1b)",
        },
        blacks: {
          B100: "var(--_1epihgq1c)",
          B60: "var(--_1epihgq1d)",
          B40: "var(--_1epihgq1e)",
          B20: "var(--_1epihgq1f)",
          B16: "var(--_1epihgq1g)",
          B7: "var(--_1epihgq1h)",
        },
      },
      contextual: {
        informative: {
          Blue1000: "var(--_1epihgq1i)",
          Blue900: "var(--_1epihgq1j)",
          Blue800: "var(--_1epihgq1k)",
          Blue700: "var(--_1epihgq1l)",
          Blue600: "var(--_1epihgq1m)",
          Blue500: "var(--_1epihgq1n)",
          Blue400: "var(--_1epihgq1o)",
          Blue300: "var(--_1epihgq1p)",
          Blue200: "var(--_1epihgq1q)",
          Blue100: "var(--_1epihgq1r)",
        },
        positive: {
          Green1000: "var(--_1epihgq1s)",
          Green900: "var(--_1epihgq1t)",
          Green800: "var(--_1epihgq1u)",
          Green700: "var(--_1epihgq1v)",
          Green600: "var(--_1epihgq1w)",
          Green500: "var(--_1epihgq1x)",
          Green400: "var(--_1epihgq1y)",
          Green300: "var(--_1epihgq1z)",
          Green200: "var(--_1epihgq20)",
          Green100: "var(--_1epihgq21)",
        },
        negative: {
          Red1000: "var(--_1epihgq22)",
          Red900: "var(--_1epihgq23)",
          Red800: "var(--_1epihgq24)",
          Red700: "var(--_1epihgq25)",
          Red600: "var(--_1epihgq26)",
          Red500: "var(--_1epihgq27)",
          Red400: "var(--_1epihgq28)",
          Red300: "var(--_1epihgq29)",
          Red200: "var(--_1epihgq2a)",
          Red100: "var(--_1epihgq2b)",
        },
        notice: {
          yellow1000: "var(--_1epihgq2c)",
          yellow900: "var(--_1epihgq2d)",
          yellow800: "var(--_1epihgq2e)",
          yellow700: "var(--_1epihgq2f)",
          yellow600: "var(--_1epihgq2g)",
          yellow500: "var(--_1epihgq2h)",
          yellow400: "var(--_1epihgq2i)",
          yellow300: "var(--_1epihgq2j)",
          yellow200: "var(--_1epihgq2k)",
          yellow100: "var(--_1epihgq2l)",
        },
      },
      icon: {
        inverted: "var(--_1epihgq2m)",
        facebookMessengerOne: "var(--_1epihgq2n)",
        facebookMessengerTwo: "var(--_1epihgq2o)",
        facebookMessengerThree: "var(--_1epihgq2p)",
      },
      background: {
        backgroundPrimary: "var(--_1epihgq2q)",
        backgroundPrimaryBold: "var(--_1epihgq2r)",
        backgroundPrimaryBolder: "var(--_1epihgq2s)",
        backgroundSecondary: "var(--_1epihgq2t)",
        backgroundSecondaryBolder: "var(--_1epihgq2u)",
        backgroundAccent: "var(--_1epihgq2v)",
        backgroundAccentBold: "var(--_1epihgq2w)",
        backgroundAccentBolder: "var(--_1epihgq2x)",
        backgroundFourth: "var(--_1epihgq2y)",
        backgroundBoldPrimary: "var(--_1epihgq2z)",
        backgroundBoldFourth: "var(--_1epihgq30)",
        backgroundBoldTertiary: "var(--_1epihgq31)",
        backgroundBoldFifth: "var(--_1epihgq32)",
        backgroundBlack7: "var(--_1epihgq33)",
        backgroundBlack16: "var(--_1epihgq34)",
        backgroundBlack20: "var(--_1epihgq35)",
        backgroundBlack40: "var(--_1epihgq36)",
        backgroundWhite5: "var(--_1epihgq37)",
        backgroundWhite15: "var(--_1epihgq38)",
        backgroundWhite30: "var(--_1epihgq39)",
        backgroundWhite50: "var(--_1epihgq3a)",
        backgroundWhite75: "var(--_1epihgq3b)",
        backgroundAccentSubtlest: "var(--_1epihgq3c)",
        backgroundBrandPurple: "var(--_1epihgq3d)",
      },
      content: {
        contentOnColorPrimary: "var(--_1epihgq3e)",
        contentOnColorSecondary: "var(--_1epihgq3f)",
        contentOnColorTertiary: "var(--_1epihgq3g)",
        contentAccent: "var(--_1epihgq3h)",
        contentAccentBold: "var(--_1epihgq3i)",
        contentAccentBolder: "var(--_1epihgq3j)",
        contentPrimary: "var(--_1epihgq3k)",
        contentSecondary: "var(--_1epihgq3l)",
        contentTertiary: "var(--_1epihgq3m)",
        contentBrandPurple: "var(--_1epihgq3n)",
        contentError: "var(--_1epihgq3o)",
      },
      border: {
        borderDefault: "var(--_1epihgq3p)",
        borderOnColorDisabled: "var(--_1epihgq3q)",
        borderAccent: "var(--_1epihgq3r)",
        borderAccentBold: "var(--_1epihgq3s)",
        borderAccentBolder: "var(--_1epihgq3t)",
        borderDisabled: "var(--_1epihgq3u)",
        borderWhite15: "var(--_1epihgq3v)",
        borderWhite100: "var(--_1epihgq3w)",
      },
    },
    font: { body: "var(--_1epihgq3x)" },
    typography: {
      header1: {
        fontFamily: "var(--_1epihgq3y)",
        fontSize: "var(--_1epihgq3z)",
        lineHeight: "var(--_1epihgq40)",
      },
      header1L: {
        fontSize: "var(--_1epihgq41)",
        lineHeight: "var(--_1epihgq42)",
      },
      header1XL: {
        fontSize: "var(--_1epihgq43)",
        lineHeight: "var(--_1epihgq44)",
      },
      header2: {
        fontFamily: "var(--_1epihgq45)",
        fontSize: "var(--_1epihgq46)",
        lineHeight: "var(--_1epihgq47)",
      },
      header2L: {
        fontSize: "var(--_1epihgq48)",
        lineHeight: "var(--_1epihgq49)",
      },
      header2XL: {
        fontSize: "var(--_1epihgq4a)",
        lineHeight: "var(--_1epihgq4b)",
      },
      header3: {
        fontFamily: "var(--_1epihgq4c)",
        fontSize: "var(--_1epihgq4d)",
        lineHeight: "var(--_1epihgq4e)",
      },
      header3L: {
        fontSize: "var(--_1epihgq4f)",
        lineHeight: "var(--_1epihgq4g)",
      },
      header3XL: {
        fontSize: "var(--_1epihgq4h)",
        lineHeight: "var(--_1epihgq4i)",
      },
      header4: {
        fontFamily: "var(--_1epihgq4j)",
        fontSize: "var(--_1epihgq4k)",
        lineHeight: "var(--_1epihgq4l)",
      },
      header4L: {
        fontSize: "var(--_1epihgq4m)",
        lineHeight: "var(--_1epihgq4n)",
      },
      header4XL: {
        fontSize: "var(--_1epihgq4o)",
        lineHeight: "var(--_1epihgq4p)",
      },
      header5: {
        fontFamily: "var(--_1epihgq4q)",
        fontSize: "var(--_1epihgq4r)",
        lineHeight: "var(--_1epihgq4s)",
      },
      header5L: {
        fontSize: "var(--_1epihgq4t)",
        lineHeight: "var(--_1epihgq4u)",
      },
      header5XL: {
        fontSize: "var(--_1epihgq4v)",
        lineHeight: "var(--_1epihgq4w)",
      },
      header6: {
        fontFamily: "var(--_1epihgq4x)",
        fontSize: "var(--_1epihgq4y)",
        lineHeight: "var(--_1epihgq4z)",
      },
      header6L: {
        fontSize: "var(--_1epihgq50)",
        lineHeight: "var(--_1epihgq51)",
      },
      header6XL: {
        fontSize: "var(--_1epihgq52)",
        lineHeight: "var(--_1epihgq53)",
      },
      paragraph8: {
        fontFamily: "var(--_1epihgq54)",
        fontSize: "var(--_1epihgq55)",
        lineHeight: "var(--_1epihgq56)",
      },
      paragraph10: {
        fontFamily: "var(--_1epihgq57)",
        fontSize: "var(--_1epihgq58)",
        lineHeight: "var(--_1epihgq59)",
      },
      paragraph12: {
        fontFamily: "var(--_1epihgq5a)",
        fontSize: "var(--_1epihgq5b)",
        lineHeight: "var(--_1epihgq5c)",
      },
      paragraph14: {
        fontFamily: "var(--_1epihgq5d)",
        fontSize: "var(--_1epihgq5e)",
        lineHeight: "var(--_1epihgq5f)",
      },
      paragraph16: {
        fontFamily: "var(--_1epihgq5g)",
        fontSize: "var(--_1epihgq5h)",
        lineHeight: "var(--_1epihgq5i)",
      },
      paragraph18: {
        fontFamily: "var(--_1epihgq5j)",
        fontSize: "var(--_1epihgq5k)",
        lineHeight: "var(--_1epihgq5l)",
      },
    },
    spacings: {
      0: "var(--_1epihgq5m)",
      "16s": "var(--_1epihgq5n)",
      "14s": "var(--_1epihgq5o)",
      "12s": "var(--_1epihgq5p)",
      "10s": "var(--_1epihgq5q)",
      "9s": "var(--_1epihgq5r)",
      "8s": "var(--_1epihgq5s)",
      "7s": "var(--_1epihgq5t)",
      "6s": "var(--_1epihgq5u)",
      "5s": "var(--_1epihgq5v)",
      "4,75s": "var(--_1epihgq5w)",
      "4s": "var(--_1epihgq5x)",
      "3s": "var(--_1epihgq5y)",
      "2s": "var(--_1epihgq5z)",
      "1,75s": "var(--_1epihgq60)",
      "1,5s": "var(--_1epihgq61)",
      "1s": "var(--_1epihgq62)",
      "0,75s": "var(--_1epihgq63)",
      "0,5s": "var(--_1epihgq64)",
    },
    radius: {
      "6r": "var(--_1epihgq65)",
      "5r": "var(--_1epihgq66)",
      "4r": "var(--_1epihgq67)",
      "3r": "var(--_1epihgq68)",
      "2r": "var(--_1epihgq69)",
      "1r": "var(--_1epihgq6a)",
      "0,75r": "var(--_1epihgq6b)",
      "0,5r": "var(--_1epihgq6c)",
    },
    swirlRadius: {
      small: "var(--_1epihgq6d)",
      medium: "var(--_1epihgq6e)",
      large: "var(--_1epihgq6f)",
      xlarge: "var(--_1epihgq6g)",
      xxlarge: "var(--_1epihgq6h)",
    },
    shadows: {
      one: "var(--_1epihgq6i)",
      two: "var(--_1epihgq6j)",
      three: "var(--_1epihgq6k)",
      threeNegativeYAxis: "var(--_1epihgq6l)",
      four: "var(--_1epihgq6m)",
      five: "var(--_1epihgq6n)",
      six: "var(--_1epihgq6o)",
    },
    gradients: { one: "var(--_1epihgq6p)" },
  };
const F0 = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "m8.3 12 8-7.65-1.24-1.3L5.7 12l9.36 8.95 1.24-1.3-8-7.65Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  j0 = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "m15.7 12-8 7.65 1.24 1.3L18.3 12 8.94 3.05 7.7 4.35l8 7.65Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    );
var q0 = "zf6z1hd",
  Rr = {
    topLevel: "zf6z1h3 zf6z1h2",
    secondLevel: "zf6z1h4 zf6z1h2",
    thirdLevel: "zf6z1h5 zf6z1h2",
  },
  I0 = "zf6z1h8",
  Os = { fullWidthDropdown: "zf6z1h0", relativeWidthDropdown: "zf6z1h1" },
  W0 = "zf6z1h7",
  U0 = "zf6z1h6",
  G0 = {
    level1: "zf6z1ha zf6z1h9",
    level2: "zf6z1hb zf6z1h9",
    level3: "zf6z1hc zf6z1h9",
  };
var K0 = { inActive: "_11fw99d1 _11fw99d0", active: "_11fw99d2 _11fw99d0" };
let Ns = 0;
const Ad = ({
    href: e,
    label: t,
    navItems: n,
    level: r = 1,
    onActiveIndexChange: s,
    isMainLevelActive: o,
    index: a,
  }) => {
    const [i, c] = F(!1),
      [f, d] = F(!1),
      h = Oe()[0] < Number(Ne.l.replace("px", "")),
      m = Z(null),
      g = (y) => {
        s && s(y);
      },
      v =
        n != null && n.length && n.length > 1
          ? Os.fullWidthDropdown
          : Os.relativeWidthDropdown;
    let w = Rr.topLevel;
    r === 2 ? (w = Rr.secondLevel) : r === 3 && (w = Rr.thirdLevel);
    let b = r === 1 && !h ? !!o : i;
    return (
      r > 1 && !h && o && (b = !0),
      /* @__PURE__ */ l.createElement(
        "li",
        { className: `${r === 1 ? v : ""}`, key: a },
        /* @__PURE__ */ l.createElement(
          "a",
          {
            href: e,
            className: `${w} ${b ? ka : ""}`,
            onClick: (y) => {
              !h &&
                n != null &&
                n.length &&
                r === 1 &&
                !b &&
                (y.preventDefault(), f || g(a)),
                h &&
                  n != null &&
                  n.length &&
                  (y.preventDefault(), c(!0), s && s(a || 0));
            },
          },
          t,
          /* @__PURE__ */ l.createElement(
            "span",
            { className: U0 },
            /* @__PURE__ */ l.createElement(j0, { className: W0 })
          )
        ),
        n &&
          /* @__PURE__ */ l.createElement(
            "div",
            {
              className: K0[b ? "active" : "inActive"],
              ref: m,
            },
            /* @__PURE__ */ l.createElement(
              "button",
              {
                onClick: () => {
                  c(!1);
                },
                className: I0,
              },
              /* @__PURE__ */ l.createElement(F0, null),
              t
            ),
            /* @__PURE__ */ l.createElement(
              Y0,
              {
                isActive: b,
                subNavContainerRef: m,
                onClose: () => {
                  d(!0),
                    clearTimeout(Ns),
                    (Ns = window.setTimeout(() => {
                      d(!1);
                    }, 200)),
                    c(!1),
                    s && s(void 0);
                },
                level: r,
              },
              /* @__PURE__ */ l.createElement(
                Qa,
                { level: r + 1 },
                n.map((y, C) =>
                  /* @__PURE__ */ l.createElement(l.Fragment, { key: C }, y)
                )
              )
            )
          )
      )
    );
  },
  Y0 = ({
    children: e,
    isActive: t,
    onClose: n,
    subNavContainerRef: r,
    level: s,
  }) => {
    const a = Oe()[0] < Number(Ne.l.replace("px", "")),
      i = Z(null);
    return a || s > 1
      ? /* @__PURE__ */ l.createElement(l.Fragment, null, e)
      : /* @__PURE__ */ l.createElement(
          ln,
          {
            open: t,
            modal: !1,
            onOpenChange: (c) => {
              c || n();
            },
          },
          /* @__PURE__ */ l.createElement(
            cn,
            {
              ref: i,
              onPointerDownOutside: (c) => {
                var u;
                if ((c.preventDefault(), !t)) return;
                const f =
                    (u = r.current) == null ? void 0 : u.contains(c.target),
                  d = c.target === i.current;
                (!f || !d) && n();
              },
              className: q0,
              forceMount: !0,
              onEscapeKeyDown: () => {
                n();
              },
            },
            e
          )
        );
  },
  Qa = ({ children: e, level: t, mobileAccountButton: n }) => {
    const s = Oe()[0] < Number(Ne.l.replace("px", ""));
    return /* @__PURE__ */ l.createElement(
      l.Fragment,
      null,
      /* @__PURE__ */ l.createElement("ul", { className: G0[`level${t}`] }, e),
      s &&
        t === 1 &&
        n &&
        /* @__PURE__ */ l.createElement("div", { className: N0 }, n)
    );
  };
var X0 = "yh30yx0";
const J0 = ({ children: e, isMenuOpen: t, onOpenChange: n }) =>
    Oe()[0] < Number(Ne.l.replace("px", ""))
      ? /* @__PURE__ */ React.createElement(
          ln,
          { open: t, modal: !0, onOpenChange: n },
          /* @__PURE__ */ React.createElement(C1, null),
          /* @__PURE__ */ React.createElement(cn, { className: $0 }, e)
        )
      : /* @__PURE__ */ React.createElement(
          "div",
          {
            className: P(Be, jr, X0),
          },
          e
        ),
  Q0 = ({
    isMenuOpen: e,
    onOpenChange: t,
    children: n,
    mobileAccountButton: r,
  }) => {
    const [s, o] = F(void 0),
      a = Se.map(n, (i, c) =>
        We(i, {
          index: c,
          isMainLevelActive: s === c,
          onActiveIndexChange: (f) => {
            f !== s && o(f);
          },
        })
      );
    return /* @__PURE__ */ React.createElement(
      J0,
      { isMenuOpen: e, onOpenChange: t },
      /* @__PURE__ */ React.createElement(
        "nav",
        { className: z0 },
        /* @__PURE__ */ React.createElement(
          Qa,
          { mobileAccountButton: r, level: 1 },
          a
        )
      )
    );
  },
  $n = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M10.73 12 3.1 4.37 4.37 3.1 12 10.73l7.63-7.63 1.27 1.27L13.27 12l7.63 7.63-1.27 1.27L12 13.27 4.37 20.9 3.1 19.63 10.73 12Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    );
var e3 = "_1topwo74",
  t3 = "_1topwo75";
const zn = (e) =>
  /* @__PURE__ */ l.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      focusable: "false",
      ...e,
    },
    /* @__PURE__ */ l.createElement("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M14.21 15.59A6.995 6.995 0 0 1 3 10c0-3.87 3.13-7 7-7s7 3.13 7 7c0 1.64-.56 3.14-1.5 4.34l5.5 5.38-1.26 1.29-5.53-5.41ZM15.2 10c0 2.87-2.33 5.2-5.2 5.2S4.8 12.87 4.8 10 7.13 4.8 10 4.8s5.2 2.33 5.2 5.2Z",
    })
  );
var n3 = "_1y2ff7g0",
  r3 = "_1y2ff7g3",
  s3 = "_1y2ff7g1",
  o3 = "_1y2ff7g2",
  $s = "_1y2ff7g4",
  a3 = "_1y2ff7g5";
var zs = { default: "gm9kwm2", invertedColors: "gm9kwm3" },
  i3 = "gm9kwm0",
  l3 = "gm9kwm1";
const ei = ({ label: e, icon: t, invertedColors: n, ...r }) => {
  const s = n ? zs.invertedColors : zs.default;
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      className: P(l3, s),
      ...r,
    },
    t,
    e && /* @__PURE__ */ React.createElement("span", { className: i3 }, e)
  );
};
var c3 = "ki0jez9",
  u3 = { left: "ki0jezc", right: "ki0jezd" },
  d3 = { small: "ki0jez6", medium: "ki0jez7", large: "ki0jez8" },
  f3 = "ki0jeze",
  h3 = {
    primary: "ki0jez2 ki0jez0",
    secondary: "ki0jez3 ki0jez0",
    tertiary: "ki0jez4 ki0jez0",
    transparent: "ki0jez5 ki0jez0",
  },
  m3 = { primary: "ki0jezb ki0jeza" },
  p3 = "ki0jez1";
const v3 = ({
  componentNode: e = "button",
  type: t = "primary",
  size: n = "small",
  iconPosition: r = "left",
  children: s,
  counter: o,
  invertColors: a = !1,
  icon: i,
  ...c
}) => {
  const f = h3[t],
    d = d3[n],
    u = i ? u3[r] : "",
    h = o ? m3.primary : "",
    g = P(f, d, u, a ? p3 : "");
  return /* @__PURE__ */ React.createElement(
    e,
    { className: g, ...c },
    i && /* @__PURE__ */ React.createElement("span", { className: c3 }, i),
    s && /* @__PURE__ */ React.createElement("span", { className: f3 }, s),
    o &&
      n === "large" &&
      t === "primary" &&
      /* @__PURE__ */ React.createElement("span", { className: h }, o)
  );
};
var Qn = {
  one: "_1900asl0",
  two: "_1900asl1",
  three: "_1900asl2",
  threeNegativeYAxis: "_1900asl3",
  four: "_1900asl4",
  five: "_1900asl5",
  six: "_1900asl6",
};
const g3 = ({
  placeholder: e,
  value: t,
  onChange: n,
  isParentOpen: r,
  searchButtonLabel: s,
  searchSuggestions: o,
  fieldIcon: a,
  showButton: i = !1,
  label: c,
  supportingText: f,
  id: d = "searchField",
}) => {
  const u = Z(null),
    h = a
      ? We(a, {
          className: $s,
        })
      : /* @__PURE__ */ React.createElement(zn, { className: $s });
  return (
    O(() => {
      r && u.current && u.current.focus();
    }, [r, u]),
    /* @__PURE__ */ React.createElement(
      "form",
      {
        onSubmit: (m) => {
          m.preventDefault();
        },
      },
      c &&
        /* @__PURE__ */ React.createElement(
          "label",
          { htmlFor: d, className: s3 },
          c
        ),
      /* @__PURE__ */ React.createElement(
        "div",
        { className: n3 },
        h,
        /* @__PURE__ */ React.createElement("input", {
          type: "text",
          id: d,
          placeholder: e,
          value: t,
          onChange: (m) => n(m.target.value),
          className: r3,
          ref: u,
        }),
        t &&
          /* @__PURE__ */ React.createElement(ei, {
            icon: /* @__PURE__ */ React.createElement($n, null),
            onClick: () => n(""),
          }),
        i &&
          /* @__PURE__ */ React.createElement(
            v3,
            {
              type: "primary",
              size: "medium",
              icon: /* @__PURE__ */ React.createElement(zn, null),
              iconPosition: "right",
            },
            s && /* @__PURE__ */ React.createElement(React.Fragment, null, s)
          ),
        o &&
          t &&
          /* @__PURE__ */ React.createElement(
            "div",
            {
              className: P(a3, Qn.two),
            },
            o
          )
      ),
      f && /* @__PURE__ */ React.createElement("p", { className: o3 }, f)
    )
  );
};
var w3 = "asj0v2";
var Fs = "dk6f4c0",
  y3 = "dk6f4cg",
  C3 = "dk6f4c1 dk6f4c0",
  b3 = "dk6f4c2 dk6f4c0",
  E3 = "dk6f4c3 dk6f4c0",
  x3 = "dk6f4c4 dk6f4c0",
  S3 = "dk6f4c5 dk6f4c0",
  R3 = "dk6f4c6 dk6f4c0",
  _3 = "dk6f4cd",
  M3 = "dk6f4cf",
  L3 = "dk6f4c8",
  V3 = "dk6f4c9",
  Ln = "dk6f4ca",
  T3 = "dk6f4cb",
  P3 = "dk6f4cc",
  H3 = "dk6f4c7",
  A3 = "dk6f4ce";
function ue({
  component: e = "p",
  variant: t,
  children: n,
  className: r = "",
  fontWeight: s = "light",
  spaceBelow: o,
}) {
  const a = t || e,
    c =
      {
        h1: C3,
        h2: b3,
        h3: E3,
        h4: x3,
        h5: S3,
        h6: R3,
        p: Ln,
        paragraph8: H3,
        paragraph10: L3,
        paragraph12: V3,
        paragraph14: Ln,
        paragraph16: T3,
        paragraph18: P3,
        span: Ln,
        div: Ln,
      }[a] ?? Fs;
  let f = _3;
  s === "regular" && (f = A3),
    s === "bold" && (f = y3),
    s === "medium" && (f = M3);
  let d = "";
  o && (d = w3);
  const u = P(c, Fs, a, r, f, d);
  return e === "h1"
    ? /* @__PURE__ */ React.createElement("h1", { className: u }, n)
    : e === "h2"
    ? /* @__PURE__ */ React.createElement("h2", { className: u }, n)
    : e === "h3"
    ? /* @__PURE__ */ React.createElement("h3", { className: u }, n)
    : e === "h4"
    ? /* @__PURE__ */ React.createElement("h4", { className: u }, n)
    : e === "h5"
    ? /* @__PURE__ */ React.createElement("h5", { className: u }, n)
    : e === "h6"
    ? /* @__PURE__ */ React.createElement("h6", { className: u }, n)
    : e === "div"
    ? /* @__PURE__ */ React.createElement("div", { className: u }, n)
    : e === "span"
    ? /* @__PURE__ */ React.createElement("span", { className: u }, n)
    : /* @__PURE__ */ React.createElement("p", { className: u }, n);
}
var Z3 = "zp3qgn2",
  k3 = "zp3qgn0",
  D3 = "zp3qgn1";
const B3 = ({ tags: e, label: t }) =>
  /* @__PURE__ */ React.createElement(
    "div",
    { className: k3 },
    /* @__PURE__ */ React.createElement(
      ue,
      { variant: "paragraph16", fontWeight: "medium" },
      t
    ),
    /* @__PURE__ */ React.createElement(
      "ul",
      { className: D3 },
      e.map((n, r) =>
        /* @__PURE__ */ React.createElement(
          "li",
          { key: r },
          /* @__PURE__ */ React.createElement("button", { className: Z3 }, n)
        )
      )
    )
  );
var O3 = "ksiy7w0";
const N3 = ({ children: e, ...t }) =>
  /* @__PURE__ */ React.createElement("button", { className: O3, ...t }, e);
var $3 = "b65uxn2",
  z3 = "b65uxn1",
  F3 = "b65uxn0";
const j3 = ({ categories: e }) =>
    /* @__PURE__ */ React.createElement(
      "div",
      { className: F3 },
      e.map((t, n) =>
        /* @__PURE__ */ React.createElement(
          "div",
          { key: n },
          /* @__PURE__ */ React.createElement(
            ue,
            {
              variant: "paragraph12",
              fontWeight: "regular",
              className: z3,
            },
            t.name
          ),
          t.suggestions.map((r, s) =>
            /* @__PURE__ */ React.createElement(
              N3,
              { onClick: r.onClick, key: s },
              /* @__PURE__ */ React.createElement(zn, { className: $3 }),
              /* @__PURE__ */ React.createElement(
                ue,
                {
                  component: "span",
                  variant: "paragraph16",
                  fontWeight: "regular",
                  dangerouslySetInnerHTML: { __html: r.name },
                },
                /* @__PURE__ */ React.createElement("span", {
                  dangerouslySetInnerHTML: { __html: r.name },
                })
              )
            )
          )
        )
      )
    ),
  q3 = ({ isOpen: e, onOpenChange: t, placeholder: n }) => {
    const [r, s] = F(""),
      o = e ? ka : "",
      i = Oe()[0] < Number(Ne.l.replace("px", ""));
    return /* @__PURE__ */ React.createElement(
      ln,
      { open: e, modal: i, onOpenChange: t },
      /* @__PURE__ */ React.createElement(C1, null),
      /* @__PURE__ */ React.createElement(
        cn,
        { className: P(e3) },
        /* @__PURE__ */ React.createElement(
          "div",
          { className: Be },
          /* @__PURE__ */ React.createElement(
            "div",
            {
              className: P(t3, Qn.three, o),
            },
            /* @__PURE__ */ React.createElement(g3, {
              onChange: (c) => s(c),
              placeholder: n ?? "",
              value: r,
              isParentOpen: e,
            }),
            r.length > 0
              ? /* @__PURE__ */ React.createElement(j3, {
                  categories: [
                    {
                      name: "Products",
                      suggestions: [
                        {
                          name: "Thermo<strong>mix TM6</strong>",
                          onClick: () => {},
                        },
                        {
                          name: "<strong>Cookbook “Fit with</strong> Thermo<strong>mix®”</strong>",
                          onClick: () => {},
                        },
                      ],
                    },
                    {
                      name: "Articles",
                      suggestions: [
                        {
                          name: "<strong>Tips and tricks for</strong> Thermo<strong>mix®</strong>",
                          onClick: () => {},
                        },
                        {
                          name: "<strong>How Star chefs use</strong> Thermo<strong>mix®</strong>",
                          onClick: () => {},
                        },
                      ],
                    },
                  ],
                })
              : /* @__PURE__ */ React.createElement(B3, {
                  label: "Searched most often",
                  tags: [
                    "Thermomix TM6",
                    "Kobold VK7",
                    "Robot",
                    "Hotline",
                    "Accessories",
                  ],
                })
          )
        )
      )
    );
  },
  Zd = ({
    logo: e,
    landingPageLogo: t,
    advisor: n,
    cart: r,
    backgroundType: s = "transparent",
    stickyMode: o = "sticky",
    isLandingPage: a = !1,
    navigation: i,
    mobileAccountButton: c,
  }) => {
    const [f, d] = F(!1),
      [u, h] = F(!1),
      [m, g] = F(!0),
      [v, w] = F(!1),
      y = Oe()[0] < Number(Ne.l.replace("px", "")),
      [C, S] = F(!1);
    O(() => {
      let k = window.scrollY;
      const le = Za(() => {
        const I = window.scrollY;
        I > k
          ? (d(!0), h(!1), g(!1))
          : I === 0
          ? (d(!1), h(!1), g(!0))
          : (d(!1), h(!0), g(!1)),
          (k = I);
      }, 0);
      return (
        window.addEventListener("scroll", le),
        () => {
          window.removeEventListener("scroll", le);
        }
      );
    }, []);
    const R = a ? ic : "",
      M = f ? cc : "",
      T = u ? uc : "",
      x = m ? lc : "";
    let H = En[s] || "";
    return (
      a && ((H = En.transparent), (o = "normal")),
      o === "sticky" && (M || T) && (H = En.solidWhite),
      o === "semiSticky" && u && !m && (H = En.solidWhite),
      /* @__PURE__ */ React.createElement(
        React.Fragment,
        null,
        /* @__PURE__ */ React.createElement(
          "header",
          {
            className: P(fc[o], M, T, H, R, x),
          },
          a
            ? /* @__PURE__ */ React.createElement(
                "div",
                {
                  className: P(Be, Rs, jr),
                },
                /* @__PURE__ */ React.createElement("div", { className: dc }, t)
              )
            : /* @__PURE__ */ React.createElement(
                React.Fragment,
                null,
                /* @__PURE__ */ React.createElement(
                  "div",
                  {
                    className: P(Be, Rs, jr),
                  },
                  /* @__PURE__ */ React.createElement(
                    "div",
                    { className: Ss },
                    y &&
                      /* @__PURE__ */ React.createElement(qr, {
                        label: "Menu",
                        children: v
                          ? /* @__PURE__ */ React.createElement($n, null)
                          : /* @__PURE__ */ React.createElement(vc, null),
                        disabled: v,
                        onClick: () => {
                          w(!v);
                        },
                      }),
                    n
                  ),
                  /* @__PURE__ */ React.createElement("div", null, e),
                  /* @__PURE__ */ React.createElement(
                    "div",
                    { className: Ss },
                    /* @__PURE__ */ React.createElement(qr, {
                      label: "Search",
                      children: C
                        ? /* @__PURE__ */ React.createElement($n, null)
                        : /* @__PURE__ */ React.createElement(zn, null),
                      onClick: () => {
                        S(!C);
                      },
                    }),
                    r
                  )
                ),
                /* @__PURE__ */ React.createElement(
                  Q0,
                  {
                    isMenuOpen: v,
                    onOpenChange: (k) => w(k),
                    mobileAccountButton: c,
                  },
                  i
                ),
                /* @__PURE__ */ React.createElement(q3, {
                  isOpen: C,
                  onOpenChange: (k) => {
                    S(k);
                  },
                  placeholder: "Search",
                })
              )
        ),
        /* @__PURE__ */ React.createElement("div", { className: P(ac) })
      )
    );
  };
var I3 = { left: "_7kok976", center: "_7kok977", right: "_7kok978" },
  W3 = { horizontal: "_7kok971 _7kok970", vertical: "_7kok972 _7kok970" },
  U3 = { fill: "_7kok973", "50%": "_7kok974", hug: "_7kok975" };
const kd = ({
  children: e,
  layout: t = "horizontal",
  sizing: n = "hug",
  alignment: r = "left",
}) => {
  const s = W3[t],
    o = n ? U3[n] : "",
    a = I3[r];
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: P(s, o, a),
    },
    e
  );
};
var G3 = "_1epihgq0";
var K3 = "_5yj2ss0";
const Fn = l.forwardRef(function ({ children: e, className: t, ...n }, r) {
    return /* @__PURE__ */ l.createElement(
      "div",
      { ref: r, className: P(G3, t), ...n },
      e
    );
  }),
  Y3 = l.forwardRef(function ({ children: e, className: t, ...n }, r) {
    return /* @__PURE__ */ l.createElement(
      "div",
      {
        ref: r,
        className: P(K3, t),
        ...n,
      },
      e
    );
  });
var Yr = { exports: {} },
  zt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var js;
function X3() {
  if (js) return zt;
  js = 1;
  var e = l,
    t = Symbol.for("react.element"),
    n = Symbol.for("react.fragment"),
    r = Object.prototype.hasOwnProperty,
    s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(i, c, f) {
    var d,
      u = {},
      h = null,
      m = null;
    f !== void 0 && (h = "" + f),
      c.key !== void 0 && (h = "" + c.key),
      c.ref !== void 0 && (m = c.ref);
    for (d in c) r.call(c, d) && !o.hasOwnProperty(d) && (u[d] = c[d]);
    if (i && i.defaultProps)
      for (d in ((c = i.defaultProps), c)) u[d] === void 0 && (u[d] = c[d]);
    return {
      $$typeof: t,
      type: i,
      key: h,
      ref: m,
      props: u,
      _owner: s.current,
    };
  }
  return (zt.Fragment = n), (zt.jsx = a), (zt.jsxs = a), zt;
}
var Ft = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qs;
function J3() {
  return (
    qs ||
      ((qs = 1),
      process.env.NODE_ENV !== "production" &&
        (function () {
          var e = l,
            t = Symbol.for("react.element"),
            n = Symbol.for("react.portal"),
            r = Symbol.for("react.fragment"),
            s = Symbol.for("react.strict_mode"),
            o = Symbol.for("react.profiler"),
            a = Symbol.for("react.provider"),
            i = Symbol.for("react.context"),
            c = Symbol.for("react.forward_ref"),
            f = Symbol.for("react.suspense"),
            d = Symbol.for("react.suspense_list"),
            u = Symbol.for("react.memo"),
            h = Symbol.for("react.lazy"),
            m = Symbol.for("react.offscreen"),
            g = Symbol.iterator,
            v = "@@iterator";
          function w(p) {
            if (p === null || typeof p != "object") return null;
            var E = (g && p[g]) || p[v];
            return typeof E == "function" ? E : null;
          }
          var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
          function y(p) {
            {
              for (
                var E = arguments.length,
                  _ = new Array(E > 1 ? E - 1 : 0),
                  V = 1;
                V < E;
                V++
              )
                _[V - 1] = arguments[V];
              C("error", p, _);
            }
          }
          function C(p, E, _) {
            {
              var V = b.ReactDebugCurrentFrame,
                z = V.getStackAddendum();
              z !== "" && ((E += "%s"), (_ = _.concat([z])));
              var q = _.map(function (N) {
                return String(N);
              });
              q.unshift("Warning: " + E),
                Function.prototype.apply.call(console[p], console, q);
            }
          }
          var S = !1,
            R = !1,
            M = !1,
            T = !1,
            x = !1,
            H;
          H = Symbol.for("react.module.reference");
          function k(p) {
            return !!(
              typeof p == "string" ||
              typeof p == "function" ||
              p === r ||
              p === o ||
              x ||
              p === s ||
              p === f ||
              p === d ||
              T ||
              p === m ||
              S ||
              R ||
              M ||
              (typeof p == "object" &&
                p !== null &&
                (p.$$typeof === h ||
                  p.$$typeof === u ||
                  p.$$typeof === a ||
                  p.$$typeof === i ||
                  p.$$typeof === c || // This needs to include all possible module reference object
                  // types supported by any Flight configuration anywhere since
                  // we don't know which Flight build this will end up being used
                  // with.
                  p.$$typeof === H ||
                  p.getModuleId !== void 0))
            );
          }
          function te(p, E, _) {
            var V = p.displayName;
            if (V) return V;
            var z = E.displayName || E.name || "";
            return z !== "" ? _ + "(" + z + ")" : _;
          }
          function le(p) {
            return p.displayName || "Context";
          }
          function I(p) {
            if (p == null) return null;
            if (
              (typeof p.tag == "number" &&
                y(
                  "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
                ),
              typeof p == "function")
            )
              return p.displayName || p.name || null;
            if (typeof p == "string") return p;
            switch (p) {
              case r:
                return "Fragment";
              case n:
                return "Portal";
              case o:
                return "Profiler";
              case s:
                return "StrictMode";
              case f:
                return "Suspense";
              case d:
                return "SuspenseList";
            }
            if (typeof p == "object")
              switch (p.$$typeof) {
                case i:
                  var E = p;
                  return le(E) + ".Consumer";
                case a:
                  var _ = p;
                  return le(_._context) + ".Provider";
                case c:
                  return te(p, p.render, "ForwardRef");
                case u:
                  var V = p.displayName || null;
                  return V !== null ? V : I(p.type) || "Memo";
                case h: {
                  var z = p,
                    q = z._payload,
                    N = z._init;
                  try {
                    return I(N(q));
                  } catch {
                    return null;
                  }
                }
              }
            return null;
          }
          var G = Object.assign,
            j = 0,
            ne,
            J,
            be,
            nt,
            Ue,
            rt,
            st;
          function yt() {}
          yt.__reactDisabledLog = !0;
          function ur() {
            {
              if (j === 0) {
                (ne = console.log),
                  (J = console.info),
                  (be = console.warn),
                  (nt = console.error),
                  (Ue = console.group),
                  (rt = console.groupCollapsed),
                  (st = console.groupEnd);
                var p = {
                  configurable: !0,
                  enumerable: !0,
                  value: yt,
                  writable: !0,
                };
                Object.defineProperties(console, {
                  info: p,
                  log: p,
                  warn: p,
                  error: p,
                  group: p,
                  groupCollapsed: p,
                  groupEnd: p,
                });
              }
              j++;
            }
          }
          function gn() {
            {
              if ((j--, j === 0)) {
                var p = {
                  configurable: !0,
                  enumerable: !0,
                  writable: !0,
                };
                Object.defineProperties(console, {
                  log: G({}, p, {
                    value: ne,
                  }),
                  info: G({}, p, {
                    value: J,
                  }),
                  warn: G({}, p, {
                    value: be,
                  }),
                  error: G({}, p, {
                    value: nt,
                  }),
                  group: G({}, p, {
                    value: Ue,
                  }),
                  groupCollapsed: G({}, p, {
                    value: rt,
                  }),
                  groupEnd: G({}, p, {
                    value: st,
                  }),
                });
              }
              j < 0 &&
                y(
                  "disabledDepth fell below zero. This is a bug in React. Please file an issue."
                );
            }
          }
          var U = b.ReactCurrentDispatcher,
            fe;
          function Ee(p, E, _) {
            {
              if (fe === void 0)
                try {
                  throw Error();
                } catch (z) {
                  var V = z.stack.trim().match(/\n( *(at )?)/);
                  fe = (V && V[1]) || "";
                }
              return (
                `
` +
                fe +
                p
              );
            }
          }
          var ve = !1,
            he;
          {
            var ot = typeof WeakMap == "function" ? WeakMap : Map;
            he = new ot();
          }
          function Pe(p, E) {
            if (!p || ve) return "";
            {
              var _ = he.get(p);
              if (_ !== void 0) return _;
            }
            var V;
            ve = !0;
            var z = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            var q;
            (q = U.current), (U.current = null), ur();
            try {
              if (E) {
                var N = function () {
                  throw Error();
                };
                if (
                  (Object.defineProperty(N.prototype, "props", {
                    set: function () {
                      throw Error();
                    },
                  }),
                  typeof Reflect == "object" && Reflect.construct)
                ) {
                  try {
                    Reflect.construct(N, []);
                  } catch ($e) {
                    V = $e;
                  }
                  Reflect.construct(p, [], N);
                } else {
                  try {
                    N.call();
                  } catch ($e) {
                    V = $e;
                  }
                  p.call(N.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch ($e) {
                  V = $e;
                }
                p();
              }
            } catch ($e) {
              if ($e && V && typeof $e.stack == "string") {
                for (
                  var D = $e.stack.split(`
`),
                    ce = V.stack.split(`
`),
                    K = D.length - 1,
                    Q = ce.length - 1;
                  K >= 1 && Q >= 0 && D[K] !== ce[Q];

                )
                  Q--;
                for (; K >= 1 && Q >= 0; K--, Q--)
                  if (D[K] !== ce[Q]) {
                    if (K !== 1 || Q !== 1)
                      do
                        if ((K--, Q--, Q < 0 || D[K] !== ce[Q])) {
                          var ge =
                            `
` + D[K].replace(" at new ", " at ");
                          return (
                            p.displayName &&
                              ge.includes("<anonymous>") &&
                              (ge = ge.replace("<anonymous>", p.displayName)),
                            typeof p == "function" && he.set(p, ge),
                            ge
                          );
                        }
                      while (K >= 1 && Q >= 0);
                    break;
                  }
              }
            } finally {
              (ve = !1), (U.current = q), gn(), (Error.prepareStackTrace = z);
            }
            var xt = p ? p.displayName || p.name : "",
              gs = xt ? Ee(xt) : "";
            return typeof p == "function" && he.set(p, gs), gs;
          }
          function Ot(p, E, _) {
            return Pe(p, !1);
          }
          function dr(p) {
            var E = p.prototype;
            return !!(E && E.isReactComponent);
          }
          function Ct(p, E, _) {
            if (p == null) return "";
            if (typeof p == "function") return Pe(p, dr(p));
            if (typeof p == "string") return Ee(p);
            switch (p) {
              case f:
                return Ee("Suspense");
              case d:
                return Ee("SuspenseList");
            }
            if (typeof p == "object")
              switch (p.$$typeof) {
                case c:
                  return Ot(p.render);
                case u:
                  return Ct(p.type, E, _);
                case h: {
                  var V = p,
                    z = V._payload,
                    q = V._init;
                  try {
                    return Ct(q(z), E, _);
                  } catch {}
                }
              }
            return "";
          }
          var bt = Object.prototype.hasOwnProperty,
            wn = {},
            yn = b.ReactDebugCurrentFrame;
          function Cn(p) {
            if (p) {
              var E = p._owner,
                _ = Ct(p.type, p._source, E ? E.type : null);
              yn.setExtraStackFrame(_);
            } else yn.setExtraStackFrame(null);
          }
          function Bl(p, E, _, V, z) {
            {
              var q = Function.call.bind(bt);
              for (var N in p)
                if (q(p, N)) {
                  var D = void 0;
                  try {
                    if (typeof p[N] != "function") {
                      var ce = Error(
                        (V || "React class") +
                          ": " +
                          _ +
                          " type `" +
                          N +
                          "` is invalid; it must be a function, usually from the `prop-types` package, but received `" +
                          typeof p[N] +
                          "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
                      );
                      throw ((ce.name = "Invariant Violation"), ce);
                    }
                    D = p[N](
                      E,
                      N,
                      V,
                      _,
                      null,
                      "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
                    );
                  } catch (K) {
                    D = K;
                  }
                  D &&
                    !(D instanceof Error) &&
                    (Cn(z),
                    y(
                      "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",
                      V || "React class",
                      _,
                      N,
                      typeof D
                    ),
                    Cn(null)),
                    D instanceof Error &&
                      !(D.message in wn) &&
                      ((wn[D.message] = !0),
                      Cn(z),
                      y("Failed %s type: %s", _, D.message),
                      Cn(null));
                }
            }
          }
          var Ol = Array.isArray;
          function fr(p) {
            return Ol(p);
          }
          function Nl(p) {
            {
              var E = typeof Symbol == "function" && Symbol.toStringTag,
                _ =
                  (E && p[Symbol.toStringTag]) ||
                  p.constructor.name ||
                  "Object";
              return _;
            }
          }
          function $l(p) {
            try {
              return is(p), !1;
            } catch {
              return !0;
            }
          }
          function is(p) {
            return "" + p;
          }
          function ls(p) {
            if ($l(p))
              return (
                y(
                  "The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",
                  Nl(p)
                ),
                is(p)
              );
          }
          var Nt = b.ReactCurrentOwner,
            zl = {
              key: !0,
              ref: !0,
              __self: !0,
              __source: !0,
            },
            cs,
            us,
            hr;
          hr = {};
          function Fl(p) {
            if (bt.call(p, "ref")) {
              var E = Object.getOwnPropertyDescriptor(p, "ref").get;
              if (E && E.isReactWarning) return !1;
            }
            return p.ref !== void 0;
          }
          function jl(p) {
            if (bt.call(p, "key")) {
              var E = Object.getOwnPropertyDescriptor(p, "key").get;
              if (E && E.isReactWarning) return !1;
            }
            return p.key !== void 0;
          }
          function ql(p, E) {
            if (
              typeof p.ref == "string" &&
              Nt.current &&
              E &&
              Nt.current.stateNode !== E
            ) {
              var _ = I(Nt.current.type);
              hr[_] ||
                (y(
                  'Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',
                  I(Nt.current.type),
                  p.ref
                ),
                (hr[_] = !0));
            }
          }
          function Il(p, E) {
            {
              var _ = function () {
                cs ||
                  ((cs = !0),
                  y(
                    "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                    E
                  ));
              };
              (_.isReactWarning = !0),
                Object.defineProperty(p, "key", {
                  get: _,
                  configurable: !0,
                });
            }
          }
          function Wl(p, E) {
            {
              var _ = function () {
                us ||
                  ((us = !0),
                  y(
                    "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",
                    E
                  ));
              };
              (_.isReactWarning = !0),
                Object.defineProperty(p, "ref", {
                  get: _,
                  configurable: !0,
                });
            }
          }
          var Ul = function (p, E, _, V, z, q, N) {
            var D = {
              // This tag allows us to uniquely identify this as a React Element
              $$typeof: t,
              // Built-in properties that belong on the element
              type: p,
              key: E,
              ref: _,
              props: N,
              // Record the component responsible for creating this element.
              _owner: q,
            };
            return (
              (D._store = {}),
              Object.defineProperty(D._store, "validated", {
                configurable: !1,
                enumerable: !1,
                writable: !0,
                value: !1,
              }),
              Object.defineProperty(D, "_self", {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: V,
              }),
              Object.defineProperty(D, "_source", {
                configurable: !1,
                enumerable: !1,
                writable: !1,
                value: z,
              }),
              Object.freeze && (Object.freeze(D.props), Object.freeze(D)),
              D
            );
          };
          function Gl(p, E, _, V, z) {
            {
              var q,
                N = {},
                D = null,
                ce = null;
              _ !== void 0 && (ls(_), (D = "" + _)),
                jl(E) && (ls(E.key), (D = "" + E.key)),
                Fl(E) && ((ce = E.ref), ql(E, z));
              for (q in E)
                bt.call(E, q) && !zl.hasOwnProperty(q) && (N[q] = E[q]);
              if (p && p.defaultProps) {
                var K = p.defaultProps;
                for (q in K) N[q] === void 0 && (N[q] = K[q]);
              }
              if (D || ce) {
                var Q =
                  typeof p == "function"
                    ? p.displayName || p.name || "Unknown"
                    : p;
                D && Il(N, Q), ce && Wl(N, Q);
              }
              return Ul(p, D, ce, z, V, Nt.current, N);
            }
          }
          var mr = b.ReactCurrentOwner,
            ds = b.ReactDebugCurrentFrame;
          function Et(p) {
            if (p) {
              var E = p._owner,
                _ = Ct(p.type, p._source, E ? E.type : null);
              ds.setExtraStackFrame(_);
            } else ds.setExtraStackFrame(null);
          }
          var pr;
          pr = !1;
          function vr(p) {
            return typeof p == "object" && p !== null && p.$$typeof === t;
          }
          function fs() {
            {
              if (mr.current) {
                var p = I(mr.current.type);
                if (p)
                  return (
                    `

Check the render method of \`` +
                    p +
                    "`."
                  );
              }
              return "";
            }
          }
          function Kl(p) {
            {
              if (p !== void 0) {
                var E = p.fileName.replace(/^.*[\\\/]/, ""),
                  _ = p.lineNumber;
                return (
                  `

Check your code at ` +
                  E +
                  ":" +
                  _ +
                  "."
                );
              }
              return "";
            }
          }
          var hs = {};
          function Yl(p) {
            {
              var E = fs();
              if (!E) {
                var _ = typeof p == "string" ? p : p.displayName || p.name;
                _ &&
                  (E =
                    `

Check the top-level render call using <` +
                    _ +
                    ">.");
              }
              return E;
            }
          }
          function ms(p, E) {
            {
              if (!p._store || p._store.validated || p.key != null) return;
              p._store.validated = !0;
              var _ = Yl(E);
              if (hs[_]) return;
              hs[_] = !0;
              var V = "";
              p &&
                p._owner &&
                p._owner !== mr.current &&
                (V = " It was passed a child from " + I(p._owner.type) + "."),
                Et(p),
                y(
                  'Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',
                  _,
                  V
                ),
                Et(null);
            }
          }
          function ps(p, E) {
            {
              if (typeof p != "object") return;
              if (fr(p))
                for (var _ = 0; _ < p.length; _++) {
                  var V = p[_];
                  vr(V) && ms(V, E);
                }
              else if (vr(p)) p._store && (p._store.validated = !0);
              else if (p) {
                var z = w(p);
                if (typeof z == "function" && z !== p.entries)
                  for (var q = z.call(p), N; !(N = q.next()).done; )
                    vr(N.value) && ms(N.value, E);
              }
            }
          }
          function Xl(p) {
            {
              var E = p.type;
              if (E == null || typeof E == "string") return;
              var _;
              if (typeof E == "function") _ = E.propTypes;
              else if (
                typeof E == "object" &&
                (E.$$typeof === c || // Note: Memo only checks outer props here.
                  // Inner props are checked in the reconciler.
                  E.$$typeof === u)
              )
                _ = E.propTypes;
              else return;
              if (_) {
                var V = I(E);
                Bl(_, p.props, "prop", V, p);
              } else if (E.PropTypes !== void 0 && !pr) {
                pr = !0;
                var z = I(E);
                y(
                  "Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",
                  z || "Unknown"
                );
              }
              typeof E.getDefaultProps == "function" &&
                !E.getDefaultProps.isReactClassApproved &&
                y(
                  "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead."
                );
            }
          }
          function Jl(p) {
            {
              for (var E = Object.keys(p.props), _ = 0; _ < E.length; _++) {
                var V = E[_];
                if (V !== "children" && V !== "key") {
                  Et(p),
                    y(
                      "Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",
                      V
                    ),
                    Et(null);
                  break;
                }
              }
              p.ref !== null &&
                (Et(p),
                y("Invalid attribute `ref` supplied to `React.Fragment`."),
                Et(null));
            }
          }
          function vs(p, E, _, V, z, q) {
            {
              var N = k(p);
              if (!N) {
                var D = "";
                (p === void 0 ||
                  (typeof p == "object" &&
                    p !== null &&
                    Object.keys(p).length === 0)) &&
                  (D +=
                    " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var ce = Kl(z);
                ce ? (D += ce) : (D += fs());
                var K;
                p === null
                  ? (K = "null")
                  : fr(p)
                  ? (K = "array")
                  : p !== void 0 && p.$$typeof === t
                  ? ((K = "<" + (I(p.type) || "Unknown") + " />"),
                    (D =
                      " Did you accidentally export a JSX literal instead of a component?"))
                  : (K = typeof p),
                  y(
                    "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
                    K,
                    D
                  );
              }
              var Q = Gl(p, E, _, z, q);
              if (Q == null) return Q;
              if (N) {
                var ge = E.children;
                if (ge !== void 0)
                  if (V)
                    if (fr(ge)) {
                      for (var xt = 0; xt < ge.length; xt++) ps(ge[xt], p);
                      Object.freeze && Object.freeze(ge);
                    } else
                      y(
                        "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
                      );
                  else ps(ge, p);
              }
              return p === r ? Jl(Q) : Xl(Q), Q;
            }
          }
          function Ql(p, E, _) {
            return vs(p, E, _, !0);
          }
          function e2(p, E, _) {
            return vs(p, E, _, !1);
          }
          var t2 = e2,
            n2 = Ql;
          (Ft.Fragment = r), (Ft.jsx = t2), (Ft.jsxs = n2);
        })()),
    Ft
  );
}
process.env.NODE_ENV === "production"
  ? (Yr.exports = X3())
  : (Yr.exports = J3());
var me = Yr.exports;
const er = Me({
    transformPagePoint: (e) => e,
    isStatic: !1,
    reducedMotion: "never",
  }),
  tr = Me({}),
  nr = Me(null),
  b1 = typeof document < "u",
  un = b1 ? m1 : O,
  ti = Me({ strict: !1 }),
  E1 = (e) => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase(),
  Q3 = "framerAppearId",
  ni = "data-" + E1(Q3),
  e4 = {
    skipAnimations: !1,
    useManualTiming: !1,
  };
class Is {
  constructor() {
    (this.order = []), (this.scheduled = /* @__PURE__ */ new Set());
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
    (this.order.length = 0), this.scheduled.clear();
  }
}
function t4(e) {
  let t = new Is(),
    n = new Is(),
    r = 0,
    s = !1,
    o = !1;
  const a = /* @__PURE__ */ new WeakSet(),
    i = {
      /**
       * Schedule a process to run on the next frame.
       */
      schedule: (c, f = !1, d = !1) => {
        const u = d && s,
          h = u ? t : n;
        return f && a.add(c), h.add(c) && u && s && (r = t.order.length), c;
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
        if (((s = !0), ([t, n] = [n, t]), n.clear(), (r = t.order.length), r))
          for (let f = 0; f < r; f++) {
            const d = t.order[f];
            a.has(d) && (i.schedule(d), e()), d(c);
          }
        (s = !1), o && ((o = !1), i.process(c));
      },
    };
  return i;
}
const Vn = [
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
    "postRender",
    // Compute
  ],
  n4 = 40;
function ri(e, t) {
  let n = !1,
    r = !0;
  const s = {
      delta: 0,
      timestamp: 0,
      isProcessing: !1,
    },
    o = Vn.reduce((u, h) => ((u[h] = t4(() => (n = !0))), u), {}),
    a = (u) => {
      o[u].process(s);
    },
    i = () => {
      const u = performance.now();
      (n = !1),
        (s.delta = r ? 1e3 / 60 : Math.max(Math.min(u - s.timestamp, n4), 1)),
        (s.timestamp = u),
        (s.isProcessing = !0),
        Vn.forEach(a),
        (s.isProcessing = !1),
        n && t && ((r = !1), e(i));
    },
    c = () => {
      (n = !0), (r = !0), s.isProcessing || e(i);
    };
  return {
    schedule: Vn.reduce((u, h) => {
      const m = o[h];
      return (u[h] = (g, v = !1, w = !1) => (n || c(), m.schedule(g, v, w))), u;
    }, {}),
    cancel: (u) => Vn.forEach((h) => o[h].cancel(u)),
    state: s,
    steps: o,
  };
}
const { schedule: x1, cancel: Dd } = ri(queueMicrotask, !1);
function Mt(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.hasOwnProperty.call(e, "current")
  );
}
const si = Me({});
let Ws = !1;
function r4(e, t, n, r, s) {
  const { visualElement: o } = X(tr),
    a = X(ti),
    i = X(nr),
    c = X(er).reducedMotion,
    f = Z();
  (r = r || a.renderer),
    !f.current &&
      r &&
      (f.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: i,
        blockInitialAnimation: i ? i.initial === !1 : !1,
        reducedMotionConfig: c,
      }));
  const d = f.current,
    u = X(si);
  d &&
    !d.projection &&
    s &&
    (d.type === "html" || d.type === "svg") &&
    o4(f.current, n, s, u),
    p1(() => {
      d && d.update(n, i);
    });
  const h = Z(!!(n[ni] && !window.HandoffComplete));
  return (
    un(() => {
      d &&
        (d.updateFeatures(),
        x1.render(d.render),
        h.current && d.animationState && d.animationState.animateChanges());
    }),
    O(() => {
      d &&
        (!h.current && d.animationState && d.animationState.animateChanges(),
        h.current && ((h.current = !1), Ws || ((Ws = !0), queueMicrotask(s4))));
    }),
    d
  );
}
function s4() {
  window.HandoffComplete = !0;
}
function o4(e, t, n, r) {
  const {
    layoutId: s,
    layout: o,
    drag: a,
    dragConstraints: i,
    layoutScroll: c,
    layoutRoot: f,
  } = t;
  (e.projection = new n(
    e.latestValues,
    t["data-framer-portal-id"] ? void 0 : oi(e.parent)
  )),
    e.projection.setOptions({
      layoutId: s,
      layout: o,
      alwaysMeasureLayout: !!a || (i && Mt(i)),
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
      layoutRoot: f,
    });
}
function oi(e) {
  if (e) return e.options.allowProjection !== !1 ? e.projection : oi(e.parent);
}
function a4(e, t, n) {
  return _e(
    (r) => {
      r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Mt(n) && (n.current = r));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function nn(e) {
  return typeof e == "string" || Array.isArray(e);
}
function rr(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function";
}
const S1 = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  R1 = ["initial", ...S1];
function sr(e) {
  return rr(e.animate) || R1.some((t) => nn(e[t]));
}
function ai(e) {
  return !!(sr(e) || e.variants);
}
function i4(e, t) {
  if (sr(e)) {
    const { initial: n, animate: r } = e;
    return {
      initial: n === !1 || nn(n) ? n : void 0,
      animate: nn(r) ? r : void 0,
    };
  }
  return e.inherit !== !1 ? t : {};
}
function l4(e) {
  const { initial: t, animate: n } = i4(e, X(tr));
  return Le(() => ({ initial: t, animate: n }), [Us(t), Us(n)]);
}
function Us(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Gs = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  },
  Ht = {};
for (const e in Gs)
  Ht[e] = {
    isEnabled: (t) => Gs[e].some((n) => !!t[n]),
  };
function c4(e) {
  for (const t in e)
    Ht[t] = {
      ...Ht[t],
      ...e[t],
    };
}
const _1 = Me({}),
  u4 = Symbol.for("motionComponentSymbol"),
  ae = (e) => e;
let gt = ae,
  Ve = ae;
process.env.NODE_ENV !== "production" &&
  ((gt = (e, t) => {
    !e && typeof console < "u" && console.warn(t);
  }),
  (Ve = (e, t) => {
    if (!e) throw new Error(t);
  }));
function d4({
  preloadedFeatures: e,
  createVisualElement: t,
  useRender: n,
  useVisualState: r,
  Component: s,
}) {
  e && c4(e);
  function o(i, c) {
    let f;
    const d = {
        ...X(er),
        ...i,
        layoutId: f4(i),
      },
      { isStatic: u } = d,
      h = l4(i),
      m = r(i, u);
    if (!u && b1) {
      h4(d, e);
      const g = m4(d);
      (f = g.MeasureLayout),
        (h.visualElement = r4(s, m, d, t, g.ProjectionNode));
    }
    return me.jsxs(tr.Provider, {
      value: h,
      children: [
        f && h.visualElement
          ? me.jsx(f, { visualElement: h.visualElement, ...d })
          : null,
        n(s, i, a4(m, h.visualElement, c), m, u, h.visualElement),
      ],
    });
  }
  const a = oe(o);
  return (a[u4] = s), a;
}
function f4({ layoutId: e }) {
  const t = X(_1).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function h4(e, t) {
  const n = X(ti).strict;
  if (process.env.NODE_ENV !== "production" && t && n) {
    const r =
      "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
    e.ignoreStrict ? gt(!1, r) : Ve(!1, r);
  }
}
function m4(e) {
  const { drag: t, layout: n } = Ht;
  if (!t && !n) return {};
  const r = { ...t, ...n };
  return {
    MeasureLayout:
      (t != null && t.isEnabled(e)) || (n != null && n.isEnabled(e))
        ? r.MeasureLayout
        : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
function p4(e) {
  function t(r, s = {}) {
    return d4(e(r, s));
  }
  if (typeof Proxy > "u") return t;
  const n = /* @__PURE__ */ new Map();
  return new Proxy(t, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (r, s) => (n.has(s) || n.set(s, t(s)), n.get(s)),
  });
}
const v4 = [
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
  "view",
];
function M1(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" ||
      /**
       * If it contains a dash, the element is a custom HTML webcomponent.
       */ e.includes("-")
      ? !1
      : /**
         * If it's in our list of lowercase SVG tags, it's an SVG component
         */
        !!(
          v4.indexOf(e) > -1 ||
          /**
           * If it contains a capital letter, it's an SVG component
           */ /[A-Z]/u.test(e)
        )
  );
}
const jn = {};
function g4(e) {
  Object.assign(jn, e);
}
const dn = [
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
    "skewY",
  ],
  wt = new Set(dn);
function ii(e, { layout: t, layoutId: n }) {
  return (
    wt.has(e) ||
    e.startsWith("origin") ||
    ((t || n !== void 0) && (!!jn[e] || e === "opacity"))
  );
}
const se = (e) => !!(e && e.getVelocity),
  w4 = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  y4 = dn.length;
function C4(
  e,
  { enableHardwareAcceleration: t = !0, allowTransformNone: n = !0 },
  r,
  s
) {
  let o = "";
  for (let a = 0; a < y4; a++) {
    const i = dn[a];
    if (e[i] !== void 0) {
      const c = w4[i] || i;
      o += `${c}(${e[i]}) `;
    }
  }
  return (
    t && !e.z && (o += "translateZ(0)"),
    (o = o.trim()),
    s ? (o = s(e, r ? "" : o)) : n && r && (o = "none"),
    o
  );
}
const li = (e) => (t) => typeof t == "string" && t.startsWith(e),
  ci = li("--"),
  b4 = li("var(--"),
  L1 = (e) => (b4(e) ? E4.test(e.split("/*")[0].trim()) : !1),
  E4 =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,
  x4 = (e, t) => (t && typeof e == "number" ? t.transform(e) : e),
  Qe = (e, t, n) => (n > t ? t : n < e ? e : n),
  Dt = {
    test: (e) => typeof e == "number",
    parse: parseFloat,
    transform: (e) => e,
  },
  Gt = {
    ...Dt,
    transform: (e) => Qe(0, 1, e),
  },
  Tn = {
    ...Dt,
    default: 1,
  },
  Kt = (e) => Math.round(e * 1e5) / 1e5,
  V1 = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu,
  S4 =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu,
  R4 =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
function fn(e) {
  return typeof e == "string";
}
const hn = (e) => ({
    test: (t) => fn(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: (t) => `${t}${e}`,
  }),
  Ke = hn("deg"),
  Ze = hn("%"),
  L = hn("px"),
  _4 = hn("vh"),
  M4 = hn("vw"),
  Ks = {
    ...Ze,
    parse: (e) => Ze.parse(e) / 100,
    transform: (e) => Ze.transform(e * 100),
  },
  Ys = {
    ...Dt,
    transform: Math.round,
  },
  ui = {
    // Border props
    borderWidth: L,
    borderTopWidth: L,
    borderRightWidth: L,
    borderBottomWidth: L,
    borderLeftWidth: L,
    borderRadius: L,
    radius: L,
    borderTopLeftRadius: L,
    borderTopRightRadius: L,
    borderBottomRightRadius: L,
    borderBottomLeftRadius: L,
    // Positioning props
    width: L,
    maxWidth: L,
    height: L,
    maxHeight: L,
    size: L,
    top: L,
    right: L,
    bottom: L,
    left: L,
    // Spacing props
    padding: L,
    paddingTop: L,
    paddingRight: L,
    paddingBottom: L,
    paddingLeft: L,
    margin: L,
    marginTop: L,
    marginRight: L,
    marginBottom: L,
    marginLeft: L,
    // Transform props
    rotate: Ke,
    rotateX: Ke,
    rotateY: Ke,
    rotateZ: Ke,
    scale: Tn,
    scaleX: Tn,
    scaleY: Tn,
    scaleZ: Tn,
    skew: Ke,
    skewX: Ke,
    skewY: Ke,
    distance: L,
    translateX: L,
    translateY: L,
    translateZ: L,
    x: L,
    y: L,
    z: L,
    perspective: L,
    transformPerspective: L,
    opacity: Gt,
    originX: Ks,
    originY: Ks,
    originZ: L,
    // Misc
    zIndex: Ys,
    backgroundPositionX: L,
    backgroundPositionY: L,
    // SVG
    fillOpacity: Gt,
    strokeOpacity: Gt,
    numOctaves: Ys,
  };
function T1(e, t, n, r) {
  const { style: s, vars: o, transform: a, transformOrigin: i } = e;
  let c = !1,
    f = !1,
    d = !0;
  for (const u in t) {
    const h = t[u];
    if (ci(u)) {
      o[u] = h;
      continue;
    }
    const m = ui[u],
      g = x4(h, m);
    if (wt.has(u)) {
      if (((c = !0), (a[u] = g), !d)) continue;
      h !== (m.default || 0) && (d = !1);
    } else u.startsWith("origin") ? ((f = !0), (i[u] = g)) : (s[u] = g);
  }
  if (
    (t.transform ||
      (c || r
        ? (s.transform = C4(e.transform, n, d, r))
        : s.transform && (s.transform = "none")),
    f)
  ) {
    const { originX: u = "50%", originY: h = "50%", originZ: m = 0 } = i;
    s.transformOrigin = `${u} ${h} ${m}`;
  }
}
const P1 = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {},
});
function di(e, t, n) {
  for (const r in t) !se(t[r]) && !ii(r, n) && (e[r] = t[r]);
}
function L4({ transformTemplate: e }, t, n) {
  return Le(() => {
    const r = P1();
    return (
      T1(r, t, { enableHardwareAcceleration: !n }, e),
      Object.assign({}, r.vars, r.style)
    );
  }, [t]);
}
function V4(e, t, n) {
  const r = e.style || {},
    s = {};
  return di(s, r, e), Object.assign(s, L4(e, t, n)), s;
}
function T4(e, t, n) {
  const r = {},
    s = V4(e, t, n);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((r.draggable = !1),
      (s.userSelect = s.WebkitUserSelect = s.WebkitTouchCallout = "none"),
      (s.touchAction =
        e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`)),
    e.tabIndex === void 0 &&
      (e.onTap || e.onTapStart || e.whileTap) &&
      (r.tabIndex = 0),
    (r.style = s),
    r
  );
}
const P4 = /* @__PURE__ */ new Set([
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
  "viewport",
]);
function qn(e) {
  return (
    e.startsWith("while") ||
    (e.startsWith("drag") && e !== "draggable") ||
    e.startsWith("layout") ||
    e.startsWith("onTap") ||
    e.startsWith("onPan") ||
    e.startsWith("onLayout") ||
    P4.has(e)
  );
}
let fi = (e) => !qn(e);
function H4(e) {
  e && (fi = (t) => (t.startsWith("on") ? !qn(t) : e(t)));
}
try {
  H4(require("@emotion/is-prop-valid").default);
} catch {}
function A4(e, t, n) {
  const r = {};
  for (const s in e)
    (s === "values" && typeof e.values == "object") ||
      ((fi(s) ||
        (n === !0 && qn(s)) ||
        (!t && !qn(s)) || // If trying to use native HTML drag events, forward drag listeners
        (e.draggable && s.startsWith("onDrag"))) &&
        (r[s] = e[s]));
  return r;
}
function Xs(e, t, n) {
  return typeof e == "string" ? e : L.transform(t + n * e);
}
function Z4(e, t, n) {
  const r = Xs(t, e.x, e.width),
    s = Xs(n, e.y, e.height);
  return `${r} ${s}`;
}
const k4 = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray",
  },
  D4 = {
    offset: "strokeDashoffset",
    array: "strokeDasharray",
  };
function B4(e, t, n = 1, r = 0, s = !0) {
  e.pathLength = 1;
  const o = s ? k4 : D4;
  e[o.offset] = L.transform(-r);
  const a = L.transform(t),
    i = L.transform(n);
  e[o.array] = `${a} ${i}`;
}
function H1(
  e,
  {
    attrX: t,
    attrY: n,
    attrScale: r,
    originX: s,
    originY: o,
    pathLength: a,
    pathSpacing: i = 1,
    pathOffset: c = 0,
    // This is object creation, which we try to avoid per-frame.
    ...f
  },
  d,
  u,
  h
) {
  if ((T1(e, f, d, h), u)) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  (e.attrs = e.style), (e.style = {});
  const { attrs: m, style: g, dimensions: v } = e;
  m.transform && (v && (g.transform = m.transform), delete m.transform),
    v &&
      (s !== void 0 || o !== void 0 || g.transform) &&
      (g.transformOrigin = Z4(
        v,
        s !== void 0 ? s : 0.5,
        o !== void 0 ? o : 0.5
      )),
    t !== void 0 && (m.x = t),
    n !== void 0 && (m.y = n),
    r !== void 0 && (m.scale = r),
    a !== void 0 && B4(m, a, i, c, !1);
}
const hi = () => ({
    ...P1(),
    attrs: {},
  }),
  A1 = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function O4(e, t, n, r) {
  const s = Le(() => {
    const o = hi();
    return (
      H1(o, t, { enableHardwareAcceleration: !1 }, A1(r), e.transformTemplate),
      {
        ...o.attrs,
        style: { ...o.style },
      }
    );
  }, [t]);
  if (e.style) {
    const o = {};
    di(o, e.style, e), (s.style = { ...o, ...s.style });
  }
  return s;
}
function N4(e = !1) {
  return (n, r, s, { latestValues: o }, a) => {
    const c = (M1(n) ? O4 : T4)(r, o, a, n),
      f = A4(r, typeof n == "string", e),
      d = n !== Xn ? { ...f, ...c, ref: s } : {},
      { children: u } = r,
      h = Le(() => (se(u) ? u.get() : u), [u]);
    return $(n, {
      ...d,
      children: h,
    });
  };
}
function mi(e, { style: t, vars: n }, r, s) {
  Object.assign(e.style, t, s && s.getProjectionStyles(r));
  for (const o in n) e.style.setProperty(o, n[o]);
}
const pi = /* @__PURE__ */ new Set([
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
  "lengthAdjust",
]);
function vi(e, t, n, r) {
  mi(e, t, void 0, r);
  for (const s in t.attrs) e.setAttribute(pi.has(s) ? s : E1(s), t.attrs[s]);
}
function Z1(e, t, n) {
  var r;
  const { style: s } = e,
    o = {};
  for (const a in s)
    (se(s[a]) ||
      (t.style && se(t.style[a])) ||
      ii(a, e) ||
      ((r = n == null ? void 0 : n.getValue(a)) === null || r === void 0
        ? void 0
        : r.liveStyle) !== void 0) &&
      (o[a] = s[a]);
  return o;
}
function gi(e, t, n) {
  const r = Z1(e, t, n);
  for (const s in e)
    if (se(e[s]) || se(t[s])) {
      const o =
        dn.indexOf(s) !== -1
          ? "attr" + s.charAt(0).toUpperCase() + s.substring(1)
          : s;
      r[o] = e[s];
    }
  return r;
}
function Js(e) {
  const t = [{}, {}];
  return (
    e == null ||
      e.values.forEach((n, r) => {
        (t[0][r] = n.get()), (t[1][r] = n.getVelocity());
      }),
    t
  );
}
function k1(e, t, n, r) {
  if (typeof t == "function") {
    const [s, o] = Js(r);
    t = t(n !== void 0 ? n : e.custom, s, o);
  }
  if (
    (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function")
  ) {
    const [s, o] = Js(r);
    t = t(n !== void 0 ? n : e.custom, s, o);
  }
  return t;
}
function mn(e) {
  const t = Z(null);
  return t.current === null && (t.current = e()), t.current;
}
const Xr = (e) => Array.isArray(e),
  $4 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue),
  z4 = (e) => (Xr(e) ? e[e.length - 1] || 0 : e);
function kn(e) {
  const t = se(e) ? e.get() : e;
  return $4(t) ? t.toValue() : t;
}
function F4(
  { scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n },
  r,
  s,
  o
) {
  const a = {
    latestValues: j4(r, s, o, e),
    renderState: t(),
  };
  return n && (a.mount = (i) => n(r, i, a)), a;
}
const wi = (e) => (t, n) => {
  const r = X(tr),
    s = X(nr),
    o = () => F4(e, t, r, s);
  return n ? o() : mn(o);
};
function j4(e, t, n, r) {
  const s = {},
    o = r(e, {});
  for (const h in o) s[h] = kn(o[h]);
  let { initial: a, animate: i } = e;
  const c = sr(e),
    f = ai(e);
  t &&
    f &&
    !c &&
    e.inherit !== !1 &&
    (a === void 0 && (a = t.initial), i === void 0 && (i = t.animate));
  let d = n ? n.initial === !1 : !1;
  d = d || a === !1;
  const u = d ? i : a;
  return (
    u &&
      typeof u != "boolean" &&
      !rr(u) &&
      (Array.isArray(u) ? u : [u]).forEach((m) => {
        const g = k1(e, m);
        if (!g) return;
        const { transitionEnd: v, transition: w, ...b } = g;
        for (const y in b) {
          let C = b[y];
          if (Array.isArray(C)) {
            const S = d ? C.length - 1 : 0;
            C = C[S];
          }
          C !== null && (s[y] = C);
        }
        for (const y in v) s[y] = v[y];
      }),
    s
  );
}
const {
    schedule: B,
    cancel: Te,
    state: re,
    steps: _r,
  } = ri(typeof requestAnimationFrame < "u" ? requestAnimationFrame : ae, !0),
  q4 = {
    useVisualState: wi({
      scrapeMotionValuesFromProps: gi,
      createRenderState: hi,
      onMount: (e, t, { renderState: n, latestValues: r }) => {
        B.read(() => {
          try {
            n.dimensions =
              typeof t.getBBox == "function"
                ? t.getBBox()
                : t.getBoundingClientRect();
          } catch {
            n.dimensions = {
              x: 0,
              y: 0,
              width: 0,
              height: 0,
            };
          }
        }),
          B.render(() => {
            H1(
              n,
              r,
              { enableHardwareAcceleration: !1 },
              A1(t.tagName),
              e.transformTemplate
            ),
              vi(t, n);
          });
      },
    }),
  },
  I4 = {
    useVisualState: wi({
      scrapeMotionValuesFromProps: Z1,
      createRenderState: P1,
    }),
  };
function W4(e, { forwardMotionProps: t = !1 }, n, r) {
  return {
    ...(M1(e) ? q4 : I4),
    preloadedFeatures: n,
    useRender: N4(t),
    createVisualElement: r,
    Component: e,
  };
}
function ze(e, t, n, r = { passive: !0 }) {
  return e.addEventListener(t, n, r), () => e.removeEventListener(t, n);
}
const yi = (e) =>
  e.pointerType === "mouse"
    ? typeof e.button != "number" || e.button <= 0
    : e.isPrimary !== !1;
function or(e, t = "page") {
  return {
    point: {
      x: e[`${t}X`],
      y: e[`${t}Y`],
    },
  };
}
const U4 = (e) => (t) => yi(t) && e(t, or(t));
function je(e, t, n, r) {
  return ze(e, t, U4(n), r);
}
const G4 = (e, t) => (n) => t(e(n)),
  qe = (...e) => e.reduce(G4);
function Ci(e) {
  let t = null;
  return () => {
    const n = () => {
      t = null;
    };
    return t === null ? ((t = e), n) : !1;
  };
}
const Qs = Ci("dragHorizontal"),
  eo = Ci("dragVertical");
function bi(e) {
  let t = !1;
  if (e === "y") t = eo();
  else if (e === "x") t = Qs();
  else {
    const n = Qs(),
      r = eo();
    n && r
      ? (t = () => {
          n(), r();
        })
      : (n && n(), r && r());
  }
  return t;
}
function Ei() {
  const e = bi(!0);
  return e ? (e(), !1) : !0;
}
class tt {
  constructor(t) {
    (this.isMounted = !1), (this.node = t);
  }
  update() {}
}
function to(e, t) {
  const n = t ? "pointerenter" : "pointerleave",
    r = t ? "onHoverStart" : "onHoverEnd",
    s = (o, a) => {
      if (o.pointerType === "touch" || Ei()) return;
      const i = e.getProps();
      e.animationState &&
        i.whileHover &&
        e.animationState.setActive("whileHover", t);
      const c = i[r];
      c && B.postRender(() => c(o, a));
    };
  return je(e.current, n, s, {
    passive: !e.getProps()[r],
  });
}
class K4 extends tt {
  mount() {
    this.unmount = qe(to(this.node, !0), to(this.node, !1));
  }
  unmount() {}
}
class Y4 extends tt {
  constructor() {
    super(...arguments), (this.isActive = !1);
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = qe(
      ze(this.node.current, "focus", () => this.onFocus()),
      ze(this.node.current, "blur", () => this.onBlur())
    );
  }
  unmount() {}
}
const xi = (e, t) => (t ? (e === t ? !0 : xi(e, t.parentElement)) : !1);
function Mr(e, t) {
  if (!t) return;
  const n = new PointerEvent("pointer" + e);
  t(n, or(n));
}
class X4 extends tt {
  constructor() {
    super(...arguments),
      (this.removeStartListeners = ae),
      (this.removeEndListeners = ae),
      (this.removeAccessibleListeners = ae),
      (this.startPointerPress = (t, n) => {
        if (this.isPressing) return;
        this.removeEndListeners();
        const r = this.node.getProps(),
          o = je(
            window,
            "pointerup",
            (i, c) => {
              if (!this.checkPressEnd()) return;
              const {
                  onTap: f,
                  onTapCancel: d,
                  globalTapTarget: u,
                } = this.node.getProps(),
                h = !u && !xi(this.node.current, i.target) ? d : f;
              h && B.update(() => h(i, c));
            },
            {
              passive: !(r.onTap || r.onPointerUp),
            }
          ),
          a = je(window, "pointercancel", (i, c) => this.cancelPress(i, c), {
            passive: !(r.onTapCancel || r.onPointerCancel),
          });
        (this.removeEndListeners = qe(o, a)), this.startPress(t, n);
      }),
      (this.startAccessiblePress = () => {
        const t = (o) => {
            if (o.key !== "Enter" || this.isPressing) return;
            const a = (i) => {
              i.key !== "Enter" ||
                !this.checkPressEnd() ||
                Mr("up", (c, f) => {
                  const { onTap: d } = this.node.getProps();
                  d && B.postRender(() => d(c, f));
                });
            };
            this.removeEndListeners(),
              (this.removeEndListeners = ze(this.node.current, "keyup", a)),
              Mr("down", (i, c) => {
                this.startPress(i, c);
              });
          },
          n = ze(this.node.current, "keydown", t),
          r = () => {
            this.isPressing && Mr("cancel", (o, a) => this.cancelPress(o, a));
          },
          s = ze(this.node.current, "blur", r);
        this.removeAccessibleListeners = qe(n, s);
      });
  }
  startPress(t, n) {
    this.isPressing = !0;
    const { onTapStart: r, whileTap: s } = this.node.getProps();
    s &&
      this.node.animationState &&
      this.node.animationState.setActive("whileTap", !0),
      r && B.postRender(() => r(t, n));
  }
  checkPressEnd() {
    return (
      this.removeEndListeners(),
      (this.isPressing = !1),
      this.node.getProps().whileTap &&
        this.node.animationState &&
        this.node.animationState.setActive("whileTap", !1),
      !Ei()
    );
  }
  cancelPress(t, n) {
    if (!this.checkPressEnd()) return;
    const { onTapCancel: r } = this.node.getProps();
    r && B.postRender(() => r(t, n));
  }
  mount() {
    const t = this.node.getProps(),
      n = je(
        t.globalTapTarget ? window : this.node.current,
        "pointerdown",
        this.startPointerPress,
        {
          passive: !(t.onTapStart || t.onPointerStart),
        }
      ),
      r = ze(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = qe(n, r);
  }
  unmount() {
    this.removeStartListeners(),
      this.removeEndListeners(),
      this.removeAccessibleListeners();
  }
}
const Jr = /* @__PURE__ */ new WeakMap(),
  Lr = /* @__PURE__ */ new WeakMap(),
  J4 = (e) => {
    const t = Jr.get(e.target);
    t && t(e);
  },
  Q4 = (e) => {
    e.forEach(J4);
  };
function e5({ root: e, ...t }) {
  const n = e || document;
  Lr.has(n) || Lr.set(n, {});
  const r = Lr.get(n),
    s = JSON.stringify(t);
  return r[s] || (r[s] = new IntersectionObserver(Q4, { root: e, ...t })), r[s];
}
function t5(e, t, n) {
  const r = e5(t);
  return (
    Jr.set(e, n),
    r.observe(e),
    () => {
      Jr.delete(e), r.unobserve(e);
    }
  );
}
const n5 = {
  some: 0,
  all: 1,
};
class r5 extends tt {
  constructor() {
    super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1);
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(),
      { root: n, margin: r, amount: s = "some", once: o } = t,
      a = {
        root: n ? n.current : void 0,
        rootMargin: r,
        threshold: typeof s == "number" ? s : n5[s],
      },
      i = (c) => {
        const { isIntersecting: f } = c;
        if (
          this.isInView === f ||
          ((this.isInView = f), o && !f && this.hasEnteredView)
        )
          return;
        f && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", f);
        const { onViewportEnter: d, onViewportLeave: u } = this.node.getProps(),
          h = f ? d : u;
        h && h(c);
      };
    return t5(this.node.current, a, i);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: t, prevProps: n } = this.node;
    ["amount", "margin", "root"].some(s5(t, n)) && this.startObserver();
  }
  unmount() {}
}
function s5({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
const o5 = {
  inView: {
    Feature: r5,
  },
  tap: {
    Feature: X4,
  },
  focus: {
    Feature: Y4,
  },
  hover: {
    Feature: K4,
  },
};
function Si(e, t) {
  if (!Array.isArray(t)) return !1;
  const n = t.length;
  if (n !== e.length) return !1;
  for (let r = 0; r < n; r++) if (t[r] !== e[r]) return !1;
  return !0;
}
function ar(e, t, n) {
  const r = e.getProps();
  return k1(r, t, n !== void 0 ? n : r.custom, e);
}
const ke = (e) => e * 1e3,
  De = (e) => e / 1e3,
  a5 = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10,
  },
  i5 = (e) => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  l5 = {
    type: "keyframes",
    duration: 0.8,
  },
  c5 = {
    type: "keyframes",
    ease: [0.25, 0.1, 0.35, 1],
    duration: 0.3,
  },
  u5 = (e, { keyframes: t }) =>
    t.length > 2
      ? l5
      : wt.has(e)
      ? e.startsWith("scale")
        ? i5(t[1])
        : a5
      : c5;
function d5({
  when: e,
  delay: t,
  delayChildren: n,
  staggerChildren: r,
  staggerDirection: s,
  repeat: o,
  repeatType: a,
  repeatDelay: i,
  from: c,
  elapsed: f,
  ...d
}) {
  return !!Object.keys(d).length;
}
function D1(e, t) {
  return e[t] || e.default || e;
}
const f5 = (e) => e !== null;
function ir(e, { repeat: t, repeatType: n = "loop" }, r) {
  const s = e.filter(f5),
    o = t && n !== "loop" && t % 2 === 1 ? 0 : s.length - 1;
  return !o || r === void 0 ? s[o] : r;
}
let Dn;
function h5() {
  Dn = void 0;
}
const Je = {
    now: () => (
      Dn === void 0 &&
        Je.set(
          re.isProcessing || e4.useManualTiming
            ? re.timestamp
            : performance.now()
        ),
      Dn
    ),
    set: (e) => {
      (Dn = e), queueMicrotask(h5);
    },
  },
  Ri = (e) => /^0[^.\s]+$/u.test(e);
function m5(e) {
  return typeof e == "number"
    ? e === 0
    : e !== null
    ? e === "none" || e === "0" || Ri(e)
    : !0;
}
const _i = (e) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),
  p5 =
    // eslint-disable-next-line redos-detector/no-unsafe-regex -- false positive, as it can match a lot of words
    /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function v5(e) {
  const t = p5.exec(e);
  if (!t) return [,];
  const [, n, r, s] = t;
  return [`--${n ?? r}`, s];
}
const g5 = 4;
function Mi(e, t, n = 1) {
  Ve(
    n <= g5,
    `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`
  );
  const [r, s] = v5(e);
  if (!r) return;
  const o = window.getComputedStyle(t).getPropertyValue(r);
  if (o) {
    const a = o.trim();
    return _i(a) ? parseFloat(a) : a;
  }
  return L1(s) ? Mi(s, t, n + 1) : s;
}
const w5 = /* @__PURE__ */ new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    "x",
    "y",
    "translateX",
    "translateY",
  ]),
  no = (e) => e === Dt || e === L,
  ro = (e, t) => parseFloat(e.split(", ")[t]),
  so =
    (e, t) =>
    (n, { transform: r }) => {
      if (r === "none" || !r) return 0;
      const s = r.match(/^matrix3d\((.+)\)$/u);
      if (s) return ro(s[1], t);
      {
        const o = r.match(/^matrix\((.+)\)$/u);
        return o ? ro(o[1], e) : 0;
      }
    },
  y5 = /* @__PURE__ */ new Set(["x", "y", "z"]),
  C5 = dn.filter((e) => !y5.has(e));
function b5(e) {
  const t = [];
  return (
    C5.forEach((n) => {
      const r = e.getValue(n);
      r !== void 0 &&
        (t.push([n, r.get()]), r.set(n.startsWith("scale") ? 1 : 0));
    }),
    t
  );
}
const At = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: n = "0" }) =>
    e.max - e.min - parseFloat(t) - parseFloat(n),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: so(4, 13),
  y: so(5, 14),
};
At.translateX = At.x;
At.translateY = At.y;
const Li = (e) => (t) => t.test(e),
  E5 = {
    test: (e) => e === "auto",
    parse: (e) => e,
  },
  Vi = [Dt, L, Ze, Ke, M4, _4, E5],
  oo = (e) => Vi.find(Li(e)),
  ft = /* @__PURE__ */ new Set();
let Qr = !1,
  e1 = !1;
function Ti() {
  if (e1) {
    const e = Array.from(ft).filter((r) => r.needsMeasurement),
      t = new Set(e.map((r) => r.element)),
      n = /* @__PURE__ */ new Map();
    t.forEach((r) => {
      const s = b5(r);
      s.length && (n.set(r, s), r.render());
    }),
      e.forEach((r) => r.measureInitialState()),
      t.forEach((r) => {
        r.render();
        const s = n.get(r);
        s &&
          s.forEach(([o, a]) => {
            var i;
            (i = r.getValue(o)) === null || i === void 0 || i.set(a);
          });
      }),
      e.forEach((r) => r.measureEndState()),
      e.forEach((r) => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY);
      });
  }
  (e1 = !1), (Qr = !1), ft.forEach((e) => e.complete()), ft.clear();
}
function Pi() {
  ft.forEach((e) => {
    e.readKeyframes(), e.needsMeasurement && (e1 = !0);
  });
}
function x5() {
  Pi(), Ti();
}
class B1 {
  constructor(t, n, r, s, o, a = !1) {
    (this.isComplete = !1),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.isScheduled = !1),
      (this.unresolvedKeyframes = [...t]),
      (this.onComplete = n),
      (this.name = r),
      (this.motionValue = s),
      (this.element = o),
      (this.isAsync = a);
  }
  scheduleResolve() {
    (this.isScheduled = !0),
      this.isAsync
        ? (ft.add(this), Qr || ((Qr = !0), B.read(Pi), B.resolveKeyframes(Ti)))
        : (this.readKeyframes(), this.complete());
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: t,
      name: n,
      element: r,
      motionValue: s,
    } = this;
    for (let o = 0; o < t.length; o++)
      if (t[o] === null)
        if (o === 0) {
          const a = s == null ? void 0 : s.get(),
            i = t[t.length - 1];
          if (a !== void 0) t[0] = a;
          else if (r && n) {
            const c = r.readValue(n, i);
            c != null && (t[0] = c);
          }
          t[0] === void 0 && (t[0] = i), s && a === void 0 && s.set(t[0]);
        } else t[o] = t[o - 1];
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete() {
    (this.isComplete = !0),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
      ft.delete(this);
  }
  cancel() {
    this.isComplete || ((this.isScheduled = !1), ft.delete(this));
  }
  resume() {
    this.isComplete || this.scheduleResolve();
  }
}
const O1 = (e, t) => (n) =>
    !!(
      (fn(n) && R4.test(n) && n.startsWith(e)) ||
      (t && Object.prototype.hasOwnProperty.call(n, t))
    ),
  Hi = (e, t, n) => (r) => {
    if (!fn(r)) return r;
    const [s, o, a, i] = r.match(V1);
    return {
      [e]: parseFloat(s),
      [t]: parseFloat(o),
      [n]: parseFloat(a),
      alpha: i !== void 0 ? parseFloat(i) : 1,
    };
  },
  S5 = (e) => Qe(0, 255, e),
  Vr = {
    ...Dt,
    transform: (e) => Math.round(S5(e)),
  },
  dt = {
    test: O1("rgb", "red"),
    parse: Hi("red", "green", "blue"),
    transform: ({ red: e, green: t, blue: n, alpha: r = 1 }) =>
      "rgba(" +
      Vr.transform(e) +
      ", " +
      Vr.transform(t) +
      ", " +
      Vr.transform(n) +
      ", " +
      Kt(Gt.transform(r)) +
      ")",
  };
function R5(e) {
  let t = "",
    n = "",
    r = "",
    s = "";
  return (
    e.length > 5
      ? ((t = e.substring(1, 3)),
        (n = e.substring(3, 5)),
        (r = e.substring(5, 7)),
        (s = e.substring(7, 9)))
      : ((t = e.substring(1, 2)),
        (n = e.substring(2, 3)),
        (r = e.substring(3, 4)),
        (s = e.substring(4, 5)),
        (t += t),
        (n += n),
        (r += r),
        (s += s)),
    {
      red: parseInt(t, 16),
      green: parseInt(n, 16),
      blue: parseInt(r, 16),
      alpha: s ? parseInt(s, 16) / 255 : 1,
    }
  );
}
const t1 = {
    test: O1("#"),
    parse: R5,
    transform: dt.transform,
  },
  Lt = {
    test: O1("hsl", "hue"),
    parse: Hi("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: t, lightness: n, alpha: r = 1 }) =>
      "hsla(" +
      Math.round(e) +
      ", " +
      Ze.transform(Kt(t)) +
      ", " +
      Ze.transform(Kt(n)) +
      ", " +
      Kt(Gt.transform(r)) +
      ")",
  },
  ie = {
    test: (e) => dt.test(e) || t1.test(e) || Lt.test(e),
    parse: (e) =>
      dt.test(e) ? dt.parse(e) : Lt.test(e) ? Lt.parse(e) : t1.parse(e),
    transform: (e) =>
      fn(e) ? e : e.hasOwnProperty("red") ? dt.transform(e) : Lt.transform(e),
  };
function _5(e) {
  var t, n;
  return (
    isNaN(e) &&
    fn(e) &&
    (((t = e.match(V1)) === null || t === void 0 ? void 0 : t.length) || 0) +
      (((n = e.match(S4)) === null || n === void 0 ? void 0 : n.length) || 0) >
      0
  );
}
const Ai = "number",
  Zi = "color",
  M5 = "var",
  L5 = "var(",
  ao = "${}",
  V5 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function rn(e) {
  const t = e.toString(),
    n = [],
    r = {
      color: [],
      number: [],
      var: [],
    },
    s = [];
  let o = 0;
  const i = t
    .replace(
      V5,
      (c) => (
        ie.test(c)
          ? (r.color.push(o), s.push(Zi), n.push(ie.parse(c)))
          : c.startsWith(L5)
          ? (r.var.push(o), s.push(M5), n.push(c))
          : (r.number.push(o), s.push(Ai), n.push(parseFloat(c))),
        ++o,
        ao
      )
    )
    .split(ao);
  return { values: n, split: i, indexes: r, types: s };
}
function ki(e) {
  return rn(e).values;
}
function Di(e) {
  const { split: t, types: n } = rn(e),
    r = t.length;
  return (s) => {
    let o = "";
    for (let a = 0; a < r; a++)
      if (((o += t[a]), s[a] !== void 0)) {
        const i = n[a];
        i === Ai
          ? (o += Kt(s[a]))
          : i === Zi
          ? (o += ie.transform(s[a]))
          : (o += s[a]);
      }
    return o;
  };
}
const T5 = (e) => (typeof e == "number" ? 0 : e);
function P5(e) {
  const t = ki(e);
  return Di(e)(t.map(T5));
}
const et = {
    test: _5,
    parse: ki,
    createTransformer: Di,
    getAnimatableNone: P5,
  },
  H5 = /* @__PURE__ */ new Set([
    "brightness",
    "contrast",
    "saturate",
    "opacity",
  ]);
function A5(e) {
  const [t, n] = e.slice(0, -1).split("(");
  if (t === "drop-shadow") return e;
  const [r] = n.match(V1) || [];
  if (!r) return e;
  const s = n.replace(r, "");
  let o = H5.has(t) ? 1 : 0;
  return r !== n && (o *= 100), t + "(" + o + s + ")";
}
const Z5 = /\b([a-z-]*)\(.*?\)/gu,
  n1 = {
    ...et,
    getAnimatableNone: (e) => {
      const t = e.match(Z5);
      return t ? t.map(A5).join(" ") : e;
    },
  },
  k5 = {
    ...ui,
    // Color props
    color: ie,
    backgroundColor: ie,
    outlineColor: ie,
    fill: ie,
    stroke: ie,
    // Border props
    borderColor: ie,
    borderTopColor: ie,
    borderRightColor: ie,
    borderBottomColor: ie,
    borderLeftColor: ie,
    filter: n1,
    WebkitFilter: n1,
  },
  N1 = (e) => k5[e];
function Bi(e, t) {
  let n = N1(e);
  return (
    n !== n1 && (n = et), n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
  );
}
const D5 = /* @__PURE__ */ new Set(["auto", "none", "0"]);
function B5(e, t, n) {
  let r = 0,
    s;
  for (; r < e.length && !s; ) {
    const o = e[r];
    typeof o == "string" && !D5.has(o) && rn(o).values.length && (s = e[r]),
      r++;
  }
  if (s && n) for (const o of t) e[o] = Bi(n, s);
}
class Oi extends B1 {
  constructor(t, n, r, s) {
    super(t, n, r, s, s == null ? void 0 : s.owner, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: t, element: n, name: r } = this;
    if (!n.current) return;
    super.readKeyframes();
    for (let c = 0; c < t.length; c++) {
      let f = t[c];
      if (typeof f == "string" && ((f = f.trim()), L1(f))) {
        const d = Mi(f, n.current);
        d !== void 0 && (t[c] = d),
          c === t.length - 1 && (this.finalKeyframe = f);
      }
    }
    if ((this.resolveNoneKeyframes(), !w5.has(r) || t.length !== 2)) return;
    const [s, o] = t,
      a = oo(s),
      i = oo(o);
    if (a !== i)
      if (no(a) && no(i))
        for (let c = 0; c < t.length; c++) {
          const f = t[c];
          typeof f == "string" && (t[c] = parseFloat(f));
        }
      else this.needsMeasurement = !0;
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: t, name: n } = this,
      r = [];
    for (let s = 0; s < t.length; s++) m5(t[s]) && r.push(s);
    r.length && B5(t, r, n);
  }
  measureInitialState() {
    const { element: t, unresolvedKeyframes: n, name: r } = this;
    if (!t.current) return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = At[r](
        t.measureViewportBox(),
        window.getComputedStyle(t.current)
      )),
      (n[0] = this.measuredOrigin);
    const s = n[n.length - 1];
    s !== void 0 && t.getValue(r, s).jump(s, !1);
  }
  measureEndState() {
    var t;
    const { element: n, name: r, unresolvedKeyframes: s } = this;
    if (!n.current) return;
    const o = n.getValue(r);
    o && o.jump(this.measuredOrigin, !1);
    const a = s.length - 1,
      i = s[a];
    (s[a] = At[r](n.measureViewportBox(), window.getComputedStyle(n.current))),
      i !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = i),
      !((t = this.removedTransforms) === null || t === void 0) &&
        t.length &&
        this.removedTransforms.forEach(([c, f]) => {
          n.getValue(c).set(f);
        }),
      this.resolveNoneKeyframes();
  }
}
function Ni(e) {
  let t;
  return () => (t === void 0 && (t = e()), t);
}
const io = (e, t) =>
  t === "zIndex"
    ? !1
    : !!(
        typeof e == "number" ||
        Array.isArray(e) ||
        (typeof e == "string" && // It's animatable if we have a string
          (et.test(e) || e === "0") && // And it contains numbers and/or colors
          !e.startsWith("url("))
      );
function O5(e) {
  const t = e[0];
  if (e.length === 1) return !0;
  for (let n = 0; n < e.length; n++) if (e[n] !== t) return !0;
}
function N5(e, t, n, r) {
  const s = e[0];
  if (s === null) return !1;
  if (t === "display" || t === "visibility") return !0;
  const o = e[e.length - 1],
    a = io(s, t),
    i = io(o, t);
  return (
    gt(
      a === i,
      `You are trying to animate ${t} from "${s}" to "${o}". ${s} is not an animatable value - to enable this animation set ${s} to a value animatable to ${o} via the \`style\` property.`
    ),
    !a || !i ? !1 : O5(e) || (n === "spring" && r)
  );
}
class $i {
  constructor({
    autoplay: t = !0,
    delay: n = 0,
    type: r = "keyframes",
    repeat: s = 0,
    repeatDelay: o = 0,
    repeatType: a = "loop",
    ...i
  }) {
    (this.isStopped = !1),
      (this.hasAttemptedResolve = !1),
      (this.options = {
        autoplay: t,
        delay: n,
        type: r,
        repeat: s,
        repeatDelay: o,
        repeatType: a,
        ...i,
      }),
      this.updateFinishedPromise();
  }
  /**
   * A getter for resolved data. If keyframes are not yet resolved, accessing
   * this.resolved will synchronously flush all pending keyframe resolvers.
   * This is a deoptimisation, but at its worst still batches read/writes.
   */
  get resolved() {
    return !this._resolved && !this.hasAttemptedResolve && x5(), this._resolved;
  }
  /**
   * A method to be called when the keyframes resolver completes. This method
   * will check if its possible to run the animation and, if not, skip it.
   * Otherwise, it will call initPlayback on the implementing class.
   */
  onKeyframesResolved(t, n) {
    this.hasAttemptedResolve = !0;
    const {
      name: r,
      type: s,
      velocity: o,
      delay: a,
      onComplete: i,
      onUpdate: c,
      isGenerator: f,
    } = this.options;
    if (!f && !N5(t, r, s, o))
      if (a) this.options.duration = 0;
      else {
        c == null || c(ir(t, this.options, n)),
          i == null || i(),
          this.resolveFinishedPromise();
        return;
      }
    const d = this.initPlayback(t, n);
    d !== !1 &&
      ((this._resolved = {
        keyframes: t,
        finalKeyframe: n,
        ...d,
      }),
      this.onPostResolved());
  }
  onPostResolved() {}
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
function $1(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const $5 = 5;
function zi(e, t, n) {
  const r = Math.max(t - $5, 0);
  return $1(n - e(r), t - r);
}
const Tr = 1e-3,
  z5 = 0.01,
  lo = 10,
  F5 = 0.05,
  j5 = 1;
function q5({
  duration: e = 800,
  bounce: t = 0.25,
  velocity: n = 0,
  mass: r = 1,
}) {
  let s, o;
  gt(e <= ke(lo), "Spring duration must be 10 seconds or less");
  let a = 1 - t;
  (a = Qe(F5, j5, a)),
    (e = Qe(z5, lo, De(e))),
    a < 1
      ? ((s = (f) => {
          const d = f * a,
            u = d * e,
            h = d - n,
            m = r1(f, a),
            g = Math.exp(-u);
          return Tr - (h / m) * g;
        }),
        (o = (f) => {
          const u = f * a * e,
            h = u * n + n,
            m = Math.pow(a, 2) * Math.pow(f, 2) * e,
            g = Math.exp(-u),
            v = r1(Math.pow(f, 2), a);
          return ((-s(f) + Tr > 0 ? -1 : 1) * ((h - m) * g)) / v;
        }))
      : ((s = (f) => {
          const d = Math.exp(-f * e),
            u = (f - n) * e + 1;
          return -Tr + d * u;
        }),
        (o = (f) => {
          const d = Math.exp(-f * e),
            u = (n - f) * (e * e);
          return d * u;
        }));
  const i = 5 / e,
    c = W5(s, o, i);
  if (((e = ke(e)), isNaN(c)))
    return {
      stiffness: 100,
      damping: 10,
      duration: e,
    };
  {
    const f = Math.pow(c, 2) * r;
    return {
      stiffness: f,
      damping: a * 2 * Math.sqrt(r * f),
      duration: e,
    };
  }
}
const I5 = 12;
function W5(e, t, n) {
  let r = n;
  for (let s = 1; s < I5; s++) r = r - e(r) / t(r);
  return r;
}
function r1(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const U5 = ["duration", "bounce"],
  G5 = ["stiffness", "damping", "mass"];
function co(e, t) {
  return t.some((n) => e[n] !== void 0);
}
function K5(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e,
  };
  if (!co(e, G5) && co(e, U5)) {
    const n = q5(e);
    (t = {
      ...t,
      ...n,
      mass: 1,
    }),
      (t.isResolvedFromDuration = !0);
  }
  return t;
}
function z1({ keyframes: e, restDelta: t, restSpeed: n, ...r }) {
  const s = e[0],
    o = e[e.length - 1],
    a = { done: !1, value: s },
    {
      stiffness: i,
      damping: c,
      mass: f,
      duration: d,
      velocity: u,
      isResolvedFromDuration: h,
    } = K5({
      ...r,
      velocity: -De(r.velocity || 0),
    }),
    m = u || 0,
    g = c / (2 * Math.sqrt(i * f)),
    v = o - s,
    w = De(Math.sqrt(i / f)),
    b = Math.abs(v) < 5;
  n || (n = b ? 0.01 : 2), t || (t = b ? 5e-3 : 0.5);
  let y;
  if (g < 1) {
    const C = r1(w, g);
    y = (S) => {
      const R = Math.exp(-g * w * S);
      return (
        o - R * (((m + g * w * v) / C) * Math.sin(C * S) + v * Math.cos(C * S))
      );
    };
  } else if (g === 1) y = (C) => o - Math.exp(-w * C) * (v + (m + w * v) * C);
  else {
    const C = w * Math.sqrt(g * g - 1);
    y = (S) => {
      const R = Math.exp(-g * w * S),
        M = Math.min(C * S, 300);
      return (
        o - (R * ((m + g * w * v) * Math.sinh(M) + C * v * Math.cosh(M))) / C
      );
    };
  }
  return {
    calculatedDuration: (h && d) || null,
    next: (C) => {
      const S = y(C);
      if (h) a.done = C >= d;
      else {
        let R = m;
        C !== 0 && (g < 1 ? (R = zi(y, C, S)) : (R = 0));
        const M = Math.abs(R) <= n,
          T = Math.abs(o - S) <= t;
        a.done = M && T;
      }
      return (a.value = a.done ? o : S), a;
    },
  };
}
function uo({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: s = 10,
  bounceStiffness: o = 500,
  modifyTarget: a,
  min: i,
  max: c,
  restDelta: f = 0.5,
  restSpeed: d,
}) {
  const u = e[0],
    h = {
      done: !1,
      value: u,
    },
    m = (x) => (i !== void 0 && x < i) || (c !== void 0 && x > c),
    g = (x) =>
      i === void 0
        ? c
        : c === void 0 || Math.abs(i - x) < Math.abs(c - x)
        ? i
        : c;
  let v = n * t;
  const w = u + v,
    b = a === void 0 ? w : a(w);
  b !== w && (v = b - u);
  const y = (x) => -v * Math.exp(-x / r),
    C = (x) => b + y(x),
    S = (x) => {
      const H = y(x),
        k = C(x);
      (h.done = Math.abs(H) <= f), (h.value = h.done ? b : k);
    };
  let R, M;
  const T = (x) => {
    m(h.value) &&
      ((R = x),
      (M = z1({
        keyframes: [h.value, g(h.value)],
        velocity: zi(C, x, h.value),
        // TODO: This should be passing * 1000
        damping: s,
        stiffness: o,
        restDelta: f,
        restSpeed: d,
      })));
  };
  return (
    T(0),
    {
      calculatedDuration: null,
      next: (x) => {
        let H = !1;
        return (
          !M && R === void 0 && ((H = !0), S(x), T(x)),
          R !== void 0 && x >= R ? M.next(x - R) : (!H && S(x), h)
        );
      },
    }
  );
}
const Fi = (e, t, n) =>
    (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e,
  Y5 = 1e-7,
  X5 = 12;
function J5(e, t, n, r, s) {
  let o,
    a,
    i = 0;
  do (a = t + (n - t) / 2), (o = Fi(a, r, s) - e), o > 0 ? (n = a) : (t = a);
  while (Math.abs(o) > Y5 && ++i < X5);
  return a;
}
function pn(e, t, n, r) {
  if (e === t && n === r) return ae;
  const s = (o) => J5(o, 0, 1, e, n);
  return (o) => (o === 0 || o === 1 ? o : Fi(s(o), t, r));
}
const Q5 = pn(0.42, 0, 1, 1),
  e6 = pn(0, 0, 0.58, 1),
  ji = pn(0.42, 0, 0.58, 1),
  qi = (e) => Array.isArray(e) && typeof e[0] != "number",
  Ii = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2,
  Wi = (e) => (t) => 1 - e(1 - t),
  F1 = (e) => 1 - Math.sin(Math.acos(e)),
  Ui = Wi(F1),
  t6 = Ii(F1),
  Gi = pn(0.33, 1.53, 0.69, 0.99),
  j1 = Wi(Gi),
  n6 = Ii(j1),
  r6 = (e) =>
    (e *= 2) < 1 ? 0.5 * j1(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))),
  fo = {
    linear: ae,
    easeIn: Q5,
    easeInOut: ji,
    easeOut: e6,
    circIn: F1,
    circInOut: t6,
    circOut: Ui,
    backIn: j1,
    backInOut: n6,
    backOut: Gi,
    anticipate: r6,
  },
  ho = (e) => {
    if (Array.isArray(e)) {
      Ve(
        e.length === 4,
        "Cubic bezier arrays must contain four numerical values."
      );
      const [t, n, r, s] = e;
      return pn(t, n, r, s);
    } else if (typeof e == "string")
      return Ve(fo[e] !== void 0, `Invalid easing type '${e}'`), fo[e];
    return e;
  },
  vt = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r;
  },
  W = (e, t, n) => e + (t - e) * n;
function Pr(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * 6 * n
      : n < 1 / 2
      ? t
      : n < 2 / 3
      ? e + (t - e) * (2 / 3 - n) * 6
      : e
  );
}
function s6({ hue: e, saturation: t, lightness: n, alpha: r }) {
  (e /= 360), (t /= 100), (n /= 100);
  let s = 0,
    o = 0,
    a = 0;
  if (!t) s = o = a = n;
  else {
    const i = n < 0.5 ? n * (1 + t) : n + t - n * t,
      c = 2 * n - i;
    (s = Pr(c, i, e + 1 / 3)), (o = Pr(c, i, e)), (a = Pr(c, i, e - 1 / 3));
  }
  return {
    red: Math.round(s * 255),
    green: Math.round(o * 255),
    blue: Math.round(a * 255),
    alpha: r,
  };
}
function In(e, t) {
  return (n) => (n > 0 ? t : e);
}
const Hr = (e, t, n) => {
    const r = e * e,
      s = n * (t * t - r) + r;
    return s < 0 ? 0 : Math.sqrt(s);
  },
  o6 = [t1, dt, Lt],
  a6 = (e) => o6.find((t) => t.test(e));
function mo(e) {
  const t = a6(e);
  if (
    (gt(
      !!t,
      `'${e}' is not an animatable color. Use the equivalent color code instead.`
    ),
    !t)
  )
    return !1;
  let n = t.parse(e);
  return t === Lt && (n = s6(n)), n;
}
const po = (e, t) => {
    const n = mo(e),
      r = mo(t);
    if (!n || !r) return In(e, t);
    const s = { ...n };
    return (o) => (
      (s.red = Hr(n.red, r.red, o)),
      (s.green = Hr(n.green, r.green, o)),
      (s.blue = Hr(n.blue, r.blue, o)),
      (s.alpha = W(n.alpha, r.alpha, o)),
      dt.transform(s)
    );
  },
  s1 = /* @__PURE__ */ new Set(["none", "hidden"]);
function i6(e, t) {
  return s1.has(e) ? (n) => (n <= 0 ? e : t) : (n) => (n >= 1 ? t : e);
}
function l6(e, t) {
  return (n) => W(e, t, n);
}
function q1(e) {
  return typeof e == "number"
    ? l6
    : typeof e == "string"
    ? L1(e)
      ? In
      : ie.test(e)
      ? po
      : d6
    : Array.isArray(e)
    ? Ki
    : typeof e == "object"
    ? ie.test(e)
      ? po
      : c6
    : In;
}
function Ki(e, t) {
  const n = [...e],
    r = n.length,
    s = e.map((o, a) => q1(o)(o, t[a]));
  return (o) => {
    for (let a = 0; a < r; a++) n[a] = s[a](o);
    return n;
  };
}
function c6(e, t) {
  const n = { ...e, ...t },
    r = {};
  for (const s in n)
    e[s] !== void 0 && t[s] !== void 0 && (r[s] = q1(e[s])(e[s], t[s]));
  return (s) => {
    for (const o in r) n[o] = r[o](s);
    return n;
  };
}
function u6(e, t) {
  var n;
  const r = [],
    s = { color: 0, var: 0, number: 0 };
  for (let o = 0; o < t.values.length; o++) {
    const a = t.types[o],
      i = e.indexes[a][s[a]],
      c = (n = e.values[i]) !== null && n !== void 0 ? n : 0;
    (r[o] = c), s[a]++;
  }
  return r;
}
const d6 = (e, t) => {
  const n = et.createTransformer(t),
    r = rn(e),
    s = rn(t);
  return r.indexes.var.length === s.indexes.var.length &&
    r.indexes.color.length === s.indexes.color.length &&
    r.indexes.number.length >= s.indexes.number.length
    ? (s1.has(e) && !s.values.length) || (s1.has(t) && !r.values.length)
      ? i6(e, t)
      : qe(Ki(u6(r, s), s.values), n)
    : (gt(
        !0,
        `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`
      ),
      In(e, t));
};
function Yi(e, t, n) {
  return typeof e == "number" && typeof t == "number" && typeof n == "number"
    ? W(e, t, n)
    : q1(e)(e, t);
}
function f6(e, t, n) {
  const r = [],
    s = n || Yi,
    o = e.length - 1;
  for (let a = 0; a < o; a++) {
    let i = s(e[a], e[a + 1]);
    if (t) {
      const c = Array.isArray(t) ? t[a] || ae : t;
      i = qe(c, i);
    }
    r.push(i);
  }
  return r;
}
function I1(e, t, { clamp: n = !0, ease: r, mixer: s } = {}) {
  const o = e.length;
  if (
    (Ve(o === t.length, "Both input and output ranges must be the same length"),
    o === 1)
  )
    return () => t[0];
  if (o === 2 && e[0] === e[1]) return () => t[1];
  e[0] > e[o - 1] && ((e = [...e].reverse()), (t = [...t].reverse()));
  const a = f6(t, r, s),
    i = a.length,
    c = (f) => {
      let d = 0;
      if (i > 1) for (; d < e.length - 2 && !(f < e[d + 1]); d++);
      const u = vt(e[d], e[d + 1], f);
      return a[d](u);
    };
  return n ? (f) => c(Qe(e[0], e[o - 1], f)) : c;
}
function Xi(e, t) {
  const n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    const s = vt(0, t, r);
    e.push(W(n, 1, s));
  }
}
function W1(e) {
  const t = [0];
  return Xi(t, e.length - 1), t;
}
function h6(e, t) {
  return e.map((n) => n * t);
}
function m6(e, t) {
  return e.map(() => t || ji).splice(0, e.length - 1);
}
function Wn({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = "easeInOut",
}) {
  const s = qi(r) ? r.map(ho) : ho(r),
    o = {
      done: !1,
      value: t[0],
    },
    a = h6(
      // Only use the provided offsets if they're the correct length
      // TODO Maybe we should warn here if there's a length mismatch
      n && n.length === t.length ? n : W1(t),
      e
    ),
    i = I1(a, t, {
      ease: Array.isArray(s) ? s : m6(t, s),
    });
  return {
    calculatedDuration: e,
    next: (c) => ((o.value = i(c)), (o.done = c >= e), o),
  };
}
const o1 = 2e4;
function Ji(e) {
  let t = 0;
  const n = 50;
  let r = e.next(t);
  for (; !r.done && t < o1; ) (t += n), (r = e.next(t));
  return t >= o1 ? 1 / 0 : t;
}
const p6 = (e) => {
    const t = ({ timestamp: n }) => e(n);
    return {
      start: () => B.update(t, !0),
      stop: () => Te(t),
      /**
       * If we're processing this frame we can use the
       * framelocked timestamp to keep things in sync.
       */
      now: () => (re.isProcessing ? re.timestamp : Je.now()),
    };
  },
  v6 = {
    decay: uo,
    inertia: uo,
    tween: Wn,
    keyframes: Wn,
    spring: z1,
  },
  g6 = (e) => e / 100;
class U1 extends $i {
  constructor({ KeyframeResolver: t = B1, ...n }) {
    super(n),
      (this.holdTime = null),
      (this.startTime = null),
      (this.cancelTime = null),
      (this.currentTime = 0),
      (this.playbackSpeed = 1),
      (this.pendingPlayState = "running"),
      (this.state = "idle"),
      (this.stop = () => {
        if (
          (this.resolver.cancel(), (this.isStopped = !0), this.state === "idle")
        )
          return;
        this.teardown();
        const { onStop: i } = this.options;
        i && i();
      });
    const { name: r, motionValue: s, keyframes: o } = this.options,
      a = (i, c) => this.onKeyframesResolved(i, c);
    r && s && s.owner
      ? (this.resolver = s.owner.resolveKeyframes(o, a, r, s))
      : (this.resolver = new t(o, a, r, s)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t) {
    const {
        type: n = "keyframes",
        repeat: r = 0,
        repeatDelay: s = 0,
        repeatType: o,
        velocity: a = 0,
      } = this.options,
      i = v6[n] || Wn;
    let c, f;
    i !== Wn &&
      typeof t[0] != "number" &&
      (process.env.NODE_ENV !== "production" &&
        Ve(
          t.length === 2,
          `Only two keyframes currently supported with spring and inertia animations. Trying to animate ${t}`
        ),
      (c = qe(g6, Yi(t[0], t[1]))),
      (t = [0, 100]));
    const d = i({ ...this.options, keyframes: t });
    o === "mirror" &&
      (f = i({
        ...this.options,
        keyframes: [...t].reverse(),
        velocity: -a,
      })),
      d.calculatedDuration === null && (d.calculatedDuration = Ji(d));
    const { calculatedDuration: u } = d,
      h = u + s,
      m = h * (r + 1) - s;
    return {
      generator: d,
      mirroredGenerator: f,
      mapPercentToKeyframes: c,
      calculatedDuration: u,
      resolvedDuration: h,
      totalDuration: m,
    };
  }
  onPostResolved() {
    const { autoplay: t = !0 } = this.options;
    this.play(),
      this.pendingPlayState === "paused" || !t
        ? this.pause()
        : (this.state = this.pendingPlayState);
  }
  tick(t, n = !1) {
    const { resolved: r } = this;
    if (!r) {
      const { keyframes: x } = this.options;
      return { done: !0, value: x[x.length - 1] };
    }
    const {
      finalKeyframe: s,
      generator: o,
      mirroredGenerator: a,
      mapPercentToKeyframes: i,
      keyframes: c,
      calculatedDuration: f,
      totalDuration: d,
      resolvedDuration: u,
    } = r;
    if (this.startTime === null) return o.next(0);
    const {
      delay: h,
      repeat: m,
      repeatType: g,
      repeatDelay: v,
      onUpdate: w,
    } = this.options;
    this.speed > 0
      ? (this.startTime = Math.min(this.startTime, t))
      : this.speed < 0 &&
        (this.startTime = Math.min(t - d / this.speed, this.startTime)),
      n
        ? (this.currentTime = t)
        : this.holdTime !== null
        ? (this.currentTime = this.holdTime)
        : (this.currentTime = Math.round(t - this.startTime) * this.speed);
    const b = this.currentTime - h * (this.speed >= 0 ? 1 : -1),
      y = this.speed >= 0 ? b < 0 : b > d;
    (this.currentTime = Math.max(b, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = d);
    let C = this.currentTime,
      S = o;
    if (m) {
      const x = Math.min(this.currentTime, d) / u;
      let H = Math.floor(x),
        k = x % 1;
      !k && x >= 1 && (k = 1),
        k === 1 && H--,
        (H = Math.min(H, m + 1)),
        !!(H % 2) &&
          (g === "reverse"
            ? ((k = 1 - k), v && (k -= v / u))
            : g === "mirror" && (S = a)),
        (C = Qe(0, 1, k) * u);
    }
    const R = y ? { done: !1, value: c[0] } : S.next(C);
    i && (R.value = i(R.value));
    let { done: M } = R;
    !y &&
      f !== null &&
      (M = this.speed >= 0 ? this.currentTime >= d : this.currentTime <= 0);
    const T =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && M));
    return (
      T && s !== void 0 && (R.value = ir(c, this.options, s)),
      w && w(R.value),
      T && this.finish(),
      R
    );
  }
  get duration() {
    const { resolved: t } = this;
    return t ? De(t.calculatedDuration) : 0;
  }
  get time() {
    return De(this.currentTime);
  }
  set time(t) {
    (t = ke(t)),
      (this.currentTime = t),
      this.holdTime !== null || this.speed === 0
        ? (this.holdTime = t)
        : this.driver && (this.startTime = this.driver.now() - t / this.speed);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(t) {
    const n = this.playbackSpeed !== t;
    (this.playbackSpeed = t), n && (this.time = De(this.currentTime));
  }
  play() {
    if (
      (this.resolver.isScheduled || this.resolver.resume(), !this._resolved)
    ) {
      this.pendingPlayState = "running";
      return;
    }
    if (this.isStopped) return;
    const { driver: t = p6, onPlay: n } = this.options;
    this.driver || (this.driver = t((s) => this.tick(s))), n && n();
    const r = this.driver.now();
    this.holdTime !== null
      ? (this.startTime = r - this.holdTime)
      : (!this.startTime || this.state === "finished") && (this.startTime = r),
      this.state === "finished" && this.updateFinishedPromise(),
      (this.cancelTime = this.startTime),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start();
  }
  pause() {
    var t;
    if (!this._resolved) {
      this.pendingPlayState = "paused";
      return;
    }
    (this.state = "paused"),
      (this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0);
  }
  complete() {
    this.state !== "running" && this.play(),
      (this.pendingPlayState = this.state = "finished"),
      (this.holdTime = null);
  }
  finish() {
    this.teardown(), (this.state = "finished");
    const { onComplete: t } = this.options;
    t && t();
  }
  cancel() {
    this.cancelTime !== null && this.tick(this.cancelTime),
      this.teardown(),
      this.updateFinishedPromise();
  }
  teardown() {
    (this.state = "idle"),
      this.stopDriver(),
      this.resolveFinishedPromise(),
      this.updateFinishedPromise(),
      (this.startTime = this.cancelTime = null),
      this.resolver.cancel();
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(t) {
    return (this.startTime = 0), this.tick(t, !0);
  }
}
const Qi = (e) => Array.isArray(e) && typeof e[0] == "number";
function el(e) {
  return !!(
    !e ||
    (typeof e == "string" && e in G1) ||
    Qi(e) ||
    (Array.isArray(e) && e.every(el))
  );
}
const Ut = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`,
  G1 = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ut([0, 0.65, 0.55, 1]),
    circOut: Ut([0.55, 0, 1, 0.45]),
    backIn: Ut([0.31, 0.01, 0.66, -0.59]),
    backOut: Ut([0.33, 1.53, 0.69, 0.99]),
  };
function w6(e) {
  return tl(e) || G1.easeOut;
}
function tl(e) {
  if (e) return Qi(e) ? Ut(e) : Array.isArray(e) ? e.map(w6) : G1[e];
}
function y6(
  e,
  t,
  n,
  {
    delay: r = 0,
    duration: s = 300,
    repeat: o = 0,
    repeatType: a = "loop",
    ease: i,
    times: c,
  } = {}
) {
  const f = { [t]: n };
  c && (f.offset = c);
  const d = tl(i);
  return (
    Array.isArray(d) && (f.easing = d),
    e.animate(f, {
      delay: r,
      duration: s,
      easing: Array.isArray(d) ? "linear" : d,
      fill: "both",
      iterations: o + 1,
      direction: a === "reverse" ? "alternate" : "normal",
    })
  );
}
const C6 = Ni(() => Object.hasOwnProperty.call(Element.prototype, "animate")),
  b6 = /* @__PURE__ */ new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    // TODO: Can be accelerated but currently disabled until https://issues.chromium.org/issues/41491098 is resolved
    // or until we implement support for linear() easing.
    // "background-color"
  ]),
  Un = 10,
  E6 = 2e4;
function x6(e) {
  return e.type === "spring" || e.name === "backgroundColor" || !el(e.ease);
}
function S6(e, t) {
  const n = new U1({
    ...t,
    keyframes: e,
    repeat: 0,
    delay: 0,
    isGenerator: !0,
  });
  let r = { done: !1, value: e[0] };
  const s = [];
  let o = 0;
  for (; !r.done && o < E6; ) (r = n.sample(o)), s.push(r.value), (o += Un);
  return {
    times: void 0,
    keyframes: s,
    duration: o - Un,
    ease: "linear",
  };
}
class vo extends $i {
  constructor(t) {
    super(t);
    const { name: n, motionValue: r, keyframes: s } = this.options;
    (this.resolver = new Oi(s, (o, a) => this.onKeyframesResolved(o, a), n, r)),
      this.resolver.scheduleResolve();
  }
  initPlayback(t, n) {
    var r;
    let {
      duration: s = 300,
      times: o,
      ease: a,
      type: i,
      motionValue: c,
      name: f,
    } = this.options;
    if (!(!((r = c.owner) === null || r === void 0) && r.current)) return !1;
    if (x6(this.options)) {
      const { onComplete: u, onUpdate: h, motionValue: m, ...g } = this.options,
        v = S6(t, g);
      (t = v.keyframes),
        t.length === 1 && (t[1] = t[0]),
        (s = v.duration),
        (o = v.times),
        (a = v.ease),
        (i = "keyframes");
    }
    const d = y6(c.owner.current, f, t, {
      ...this.options,
      duration: s,
      times: o,
      ease: a,
    });
    return (
      (d.startTime = Je.now()),
      this.pendingTimeline
        ? ((d.timeline = this.pendingTimeline), (this.pendingTimeline = void 0))
        : (d.onfinish = () => {
            const { onComplete: u } = this.options;
            c.set(ir(t, this.options, n)),
              u && u(),
              this.cancel(),
              this.resolveFinishedPromise();
          }),
      {
        animation: d,
        duration: s,
        times: o,
        type: i,
        ease: a,
        keyframes: t,
      }
    );
  }
  get duration() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { duration: n } = t;
    return De(n);
  }
  get time() {
    const { resolved: t } = this;
    if (!t) return 0;
    const { animation: n } = t;
    return De(n.currentTime || 0);
  }
  set time(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.currentTime = ke(t);
  }
  get speed() {
    const { resolved: t } = this;
    if (!t) return 1;
    const { animation: n } = t;
    return n.playbackRate;
  }
  set speed(t) {
    const { resolved: n } = this;
    if (!n) return;
    const { animation: r } = n;
    r.playbackRate = t;
  }
  get state() {
    const { resolved: t } = this;
    if (!t) return "idle";
    const { animation: n } = t;
    return n.playState;
  }
  /**
   * Replace the default DocumentTimeline with another AnimationTimeline.
   * Currently used for scroll animations.
   */
  attachTimeline(t) {
    if (!this._resolved) this.pendingTimeline = t;
    else {
      const { resolved: n } = this;
      if (!n) return ae;
      const { animation: r } = n;
      (r.timeline = t), (r.onfinish = null);
    }
    return ae;
  }
  play() {
    if (this.isStopped) return;
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.playState === "finished" && this.updateFinishedPromise(), n.play();
  }
  pause() {
    const { resolved: t } = this;
    if (!t) return;
    const { animation: n } = t;
    n.pause();
  }
  stop() {
    if ((this.resolver.cancel(), (this.isStopped = !0), this.state === "idle"))
      return;
    const { resolved: t } = this;
    if (!t) return;
    const {
      animation: n,
      keyframes: r,
      duration: s,
      type: o,
      ease: a,
      times: i,
    } = t;
    if (!(n.playState === "idle" || n.playState === "finished")) {
      if (this.time) {
        const {
            motionValue: c,
            onUpdate: f,
            onComplete: d,
            ...u
          } = this.options,
          h = new U1({
            ...u,
            keyframes: r,
            duration: s,
            type: o,
            ease: a,
            times: i,
            isGenerator: !0,
          }),
          m = ke(this.time);
        c.setWithVelocity(h.sample(m - Un).value, h.sample(m).value, Un);
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
    const {
      motionValue: n,
      name: r,
      repeatDelay: s,
      repeatType: o,
      damping: a,
      type: i,
    } = t;
    return (
      C6() &&
      r &&
      b6.has(r) &&
      n &&
      n.owner &&
      n.owner.current instanceof HTMLElement &&
      /**
       * If we're outputting values to onUpdate then we can't use WAAPI as there's
       * no way to read the value from WAAPI every frame.
       */ !n.owner.getProps().onUpdate &&
      !s &&
      o !== "mirror" &&
      a !== 0 &&
      i !== "inertia"
    );
  }
}
function R6(e, t) {
  let n;
  const r = () => {
    const { currentTime: s } = t,
      a = (s === null ? 0 : s.value) / 100;
    n !== a && e(a), (n = a);
  };
  return B.update(r, !0), () => Te(r);
}
const _6 = Ni(() => window.ScrollTimeline !== void 0);
class K1 {
  constructor(t) {
    (this.stop = () => this.runAll("stop")),
      (this.animations = t.filter(Boolean));
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
    for (let r = 0; r < this.animations.length; r++) this.animations[r][t] = n;
  }
  attachTimeline(t) {
    const n = this.animations.map((r) => {
      if (_6() && r.attachTimeline) r.attachTimeline(t);
      else
        return (
          r.pause(),
          R6((s) => {
            r.time = r.duration * s;
          }, t)
        );
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
const Y1 =
  (e, t, n, r = {}, s, o) =>
  (a) => {
    const i = D1(r, e) || {},
      c = i.delay || r.delay || 0;
    let { elapsed: f = 0 } = r;
    f = f - ke(c);
    let d = {
      keyframes: Array.isArray(n) ? n : [null, n],
      ease: "easeOut",
      velocity: t.getVelocity(),
      ...i,
      delay: -f,
      onUpdate: (h) => {
        t.set(h), i.onUpdate && i.onUpdate(h);
      },
      onComplete: () => {
        a(), i.onComplete && i.onComplete();
      },
      name: e,
      motionValue: t,
      element: o ? void 0 : s,
    };
    d5(i) ||
      (d = {
        ...d,
        ...u5(e, d),
      }),
      d.duration && (d.duration = ke(d.duration)),
      d.repeatDelay && (d.repeatDelay = ke(d.repeatDelay)),
      d.from !== void 0 && (d.keyframes[0] = d.from);
    let u = !1;
    if (
      ((d.type === !1 || (d.duration === 0 && !d.repeatDelay)) &&
        ((d.duration = 0), d.delay === 0 && (u = !0)),
      u && !o && t.get() !== void 0)
    ) {
      const h = ir(d.keyframes, i);
      if (h !== void 0)
        return (
          B.update(() => {
            d.onUpdate(h), d.onComplete();
          }),
          new K1([])
        );
    }
    return !o && vo.supports(d) ? new vo(d) : new U1(d);
  };
function Gn(e) {
  return !!(se(e) && e.add);
}
function X1(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function lr(e, t) {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}
class J1 {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return X1(this.subscriptions, t), () => lr(this.subscriptions, t);
  }
  notify(t, n, r) {
    const s = this.subscriptions.length;
    if (s)
      if (s === 1) this.subscriptions[0](t, n, r);
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
const go = /* @__PURE__ */ new Set();
function vn(e, t, n) {
  e || go.has(t) || (console.warn(t), n && console.warn(n), go.add(t));
}
const wo = 30,
  M6 = (e) => !isNaN(parseFloat(e)),
  Yt = {
    current: void 0,
  };
class L6 {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, n = {}) {
    (this.version = "11.2.11"),
      (this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (r, s = !0) => {
        const o = Je.now();
        this.updatedAt !== o && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(r),
          this.current !== this.prev &&
            this.events.change &&
            this.events.change.notify(this.current),
          s &&
            this.events.renderRequest &&
            this.events.renderRequest.notify(this.current);
      }),
      (this.hasAnimated = !1),
      this.setCurrent(t),
      (this.owner = n.owner);
  }
  setCurrent(t) {
    (this.current = t),
      (this.updatedAt = Je.now()),
      this.canTrackVelocity === null &&
        t !== void 0 &&
        (this.canTrackVelocity = M6(this.current));
  }
  setPrevFrameValue(t = this.current) {
    (this.prevFrameValue = t), (this.prevUpdatedAt = this.updatedAt);
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
    return (
      process.env.NODE_ENV !== "production" &&
        vn(
          !1,
          'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'
        ),
      this.on("change", t)
    );
  }
  on(t, n) {
    this.events[t] || (this.events[t] = new J1());
    const r = this.events[t].add(n);
    return t === "change"
      ? () => {
          r(),
            B.read(() => {
              this.events.change.getSize() || this.stop();
            });
        }
      : r;
  }
  clearListeners() {
    for (const t in this.events) this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(t, n) {
    (this.passiveEffect = t), (this.stopPassiveEffect = n);
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
    !n || !this.passiveEffect
      ? this.updateAndNotify(t, n)
      : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, n, r) {
    this.set(n),
      (this.prev = void 0),
      (this.prevFrameValue = t),
      (this.prevUpdatedAt = this.updatedAt - r);
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t, n = !0) {
    this.updateAndNotify(t),
      (this.prev = t),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      n && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return Yt.current && Yt.current.push(this), this.current;
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
    const t = Je.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      t - this.updatedAt > wo
    )
      return 0;
    const n = Math.min(this.updatedAt - this.prevUpdatedAt, wo);
    return $1(parseFloat(this.current) - parseFloat(this.prevFrameValue), n);
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
    return (
      this.stop(),
      new Promise((n) => {
        (this.hasAnimated = !0),
          (this.animation = t(n)),
          this.events.animationStart && this.events.animationStart.notify();
      }).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation();
      })
    );
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation();
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
    this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Ae(e, t) {
  return new L6(e, t);
}
function V6(e, t, n) {
  e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ae(n));
}
function T6(e, t) {
  const n = ar(e, t);
  let { transitionEnd: r = {}, transition: s = {}, ...o } = n || {};
  o = { ...o, ...r };
  for (const a in o) {
    const i = z4(o[a]);
    V6(e, a, i);
  }
}
function nl(e) {
  return e.getProps()[ni];
}
function P6({ protectedKeys: e, needsAnimating: t }, n) {
  const r = e.hasOwnProperty(n) && t[n] !== !0;
  return (t[n] = !1), r;
}
function Q1(e, t, { delay: n = 0, transitionOverride: r, type: s } = {}) {
  var o;
  let { transition: a = e.getDefaultTransition(), transitionEnd: i, ...c } = t;
  const f = e.getValue("willChange");
  r && (a = r);
  const d = [],
    u = s && e.animationState && e.animationState.getState()[s];
  for (const h in c) {
    const m = e.getValue(
        h,
        (o = e.latestValues[h]) !== null && o !== void 0 ? o : null
      ),
      g = c[h];
    if (g === void 0 || (u && P6(u, h))) continue;
    const v = {
      delay: n,
      elapsed: 0,
      ...D1(a || {}, h),
    };
    let w = !1;
    if (window.HandoffAppearAnimations) {
      const y = nl(e);
      if (y) {
        const C = window.HandoffAppearAnimations(y, h, m, B);
        C !== null && ((v.elapsed = C), (w = !0));
      }
    }
    m.start(
      Y1(h, m, g, e.shouldReduceMotion && wt.has(h) ? { type: !1 } : v, e, w)
    );
    const b = m.animation;
    b && (Gn(f) && (f.add(h), b.then(() => f.remove(h))), d.push(b));
  }
  return (
    i &&
      Promise.all(d).then(() => {
        B.update(() => {
          i && T6(e, i);
        });
      }),
    d
  );
}
function a1(e, t, n = {}) {
  var r;
  const s = ar(
    e,
    t,
    n.type === "exit"
      ? (r = e.presenceContext) === null || r === void 0
        ? void 0
        : r.custom
      : void 0
  );
  let { transition: o = e.getDefaultTransition() || {} } = s || {};
  n.transitionOverride && (o = n.transitionOverride);
  const a = s ? () => Promise.all(Q1(e, s, n)) : () => Promise.resolve(),
    i =
      e.variantChildren && e.variantChildren.size
        ? (f = 0) => {
            const {
              delayChildren: d = 0,
              staggerChildren: u,
              staggerDirection: h,
            } = o;
            return H6(e, t, d + f, u, h, n);
          }
        : () => Promise.resolve(),
    { when: c } = o;
  if (c) {
    const [f, d] = c === "beforeChildren" ? [a, i] : [i, a];
    return f().then(() => d());
  } else return Promise.all([a(), i(n.delay)]);
}
function H6(e, t, n = 0, r = 0, s = 1, o) {
  const a = [],
    i = (e.variantChildren.size - 1) * r,
    c = s === 1 ? (f = 0) => f * r : (f = 0) => i - f * r;
  return (
    Array.from(e.variantChildren)
      .sort(A6)
      .forEach((f, d) => {
        f.notify("AnimationStart", t),
          a.push(
            a1(f, t, {
              ...o,
              delay: n + c(d),
            }).then(() => f.notify("AnimationComplete", t))
          );
      }),
    Promise.all(a)
  );
}
function A6(e, t) {
  return e.sortNodePosition(t);
}
function Z6(e, t, n = {}) {
  e.notify("AnimationStart", t);
  let r;
  if (Array.isArray(t)) {
    const s = t.map((o) => a1(e, o, n));
    r = Promise.all(s);
  } else if (typeof t == "string") r = a1(e, t, n);
  else {
    const s = typeof t == "function" ? ar(e, t, n.custom) : t;
    r = Promise.all(Q1(e, s, n));
  }
  return r.then(() => {
    B.postRender(() => {
      e.notify("AnimationComplete", t);
    });
  });
}
const k6 = [...S1].reverse(),
  D6 = S1.length;
function B6(e) {
  return (t) =>
    Promise.all(t.map(({ animation: n, options: r }) => Z6(e, n, r)));
}
function O6(e) {
  let t = B6(e),
    n = yo(),
    r = !0;
  const s = (c) => (f, d) => {
    var u;
    const h = ar(
      e,
      d,
      c === "exit"
        ? (u = e.presenceContext) === null || u === void 0
          ? void 0
          : u.custom
        : void 0
    );
    if (h) {
      const { transition: m, transitionEnd: g, ...v } = h;
      f = { ...f, ...v, ...g };
    }
    return f;
  };
  function o(c) {
    t = c(e);
  }
  function a(c) {
    const f = e.getProps(),
      d = e.getVariantContext(!0) || {},
      u = [],
      h = /* @__PURE__ */ new Set();
    let m = {},
      g = 1 / 0;
    for (let w = 0; w < D6; w++) {
      const b = k6[w],
        y = n[b],
        C = f[b] !== void 0 ? f[b] : d[b],
        S = nn(C),
        R = b === c ? y.isActive : null;
      R === !1 && (g = w);
      let M = C === d[b] && C !== f[b] && S;
      if (
        (M && r && e.manuallyAnimateOnMount && (M = !1),
        (y.protectedKeys = { ...m }), // If it isn't active and hasn't *just* been set as inactive
        (!y.isActive && R === null) || // If we didn't and don't have any defined prop for this animation type
          (!C && !y.prevProp) || // Or if the prop doesn't define an animation
          rr(C) ||
          typeof C == "boolean")
      )
        continue;
      let x =
          N6(y.prevProp, C) || // If we're making this variant active, we want to always make it active
          (b === c && y.isActive && !M && S) || // If we removed a higher-priority variant (i is in reverse order)
          (w > g && S),
        H = !1;
      const k = Array.isArray(C) ? C : [C];
      let te = k.reduce(s(b), {});
      R === !1 && (te = {});
      const { prevResolvedValues: le = {} } = y,
        I = {
          ...le,
          ...te,
        },
        G = (j) => {
          (x = !0),
            h.has(j) && ((H = !0), h.delete(j)),
            (y.needsAnimating[j] = !0);
          const ne = e.getValue(j);
          ne && (ne.liveStyle = !1);
        };
      for (const j in I) {
        const ne = te[j],
          J = le[j];
        if (m.hasOwnProperty(j)) continue;
        let be = !1;
        Xr(ne) && Xr(J) ? (be = !Si(ne, J)) : (be = ne !== J),
          be
            ? ne != null
              ? G(j)
              : h.add(j)
            : ne !== void 0 && h.has(j)
            ? G(j)
            : (y.protectedKeys[j] = !0);
      }
      (y.prevProp = C),
        (y.prevResolvedValues = te),
        y.isActive && (m = { ...m, ...te }),
        r && e.blockInitialAnimation && (x = !1),
        x &&
          (!M || H) &&
          u.push(
            ...k.map((j) => ({
              animation: j,
              options: { type: b },
            }))
          );
    }
    if (h.size) {
      const w = {};
      h.forEach((b) => {
        const y = e.getBaseTarget(b),
          C = e.getValue(b);
        C && (C.liveStyle = !0), (w[b] = y ?? null);
      }),
        u.push({ animation: w });
    }
    let v = !!u.length;
    return (
      r &&
        (f.initial === !1 || f.initial === f.animate) &&
        !e.manuallyAnimateOnMount &&
        (v = !1),
      (r = !1),
      v ? t(u) : Promise.resolve()
    );
  }
  function i(c, f) {
    var d;
    if (n[c].isActive === f) return Promise.resolve();
    (d = e.variantChildren) === null ||
      d === void 0 ||
      d.forEach((h) => {
        var m;
        return (m = h.animationState) === null || m === void 0
          ? void 0
          : m.setActive(c, f);
      }),
      (n[c].isActive = f);
    const u = a(c);
    for (const h in n) n[h].protectedKeys = {};
    return u;
  }
  return {
    animateChanges: a,
    setActive: i,
    setAnimateFunction: o,
    getState: () => n,
    reset: () => {
      (n = yo()), (r = !0);
    },
  };
}
function N6(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Si(t, e) : !1;
}
function at(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function yo() {
  return {
    animate: at(!0),
    whileInView: at(),
    whileHover: at(),
    whileTap: at(),
    whileDrag: at(),
    whileFocus: at(),
    exit: at(),
  };
}
class $6 extends tt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = O6(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    rr(t) && (this.unmountControls = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(),
      { animate: n } = this.node.prevProps || {};
    t !== n && this.updateAnimationControlsSubscription();
  }
  unmount() {
    var t;
    this.node.animationState.reset(),
      (t = this.unmountControls) === null || t === void 0 || t.call(this);
  }
}
let z6 = 0;
class F6 extends tt {
  constructor() {
    super(...arguments), (this.id = z6++);
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: t, onExitComplete: n } = this.node.presenceContext,
      { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === r) return;
    const s = this.node.animationState.setActive("exit", !t);
    n && !t && s.then(() => n(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {}
}
const j6 = {
    animation: {
      Feature: $6,
    },
    exit: {
      Feature: F6,
    },
  },
  Co = (e, t) => Math.abs(e - t);
function q6(e, t) {
  const n = Co(e.x, t.x),
    r = Co(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
class rl {
  constructor(
    t,
    n,
    { transformPagePoint: r, contextWindow: s, dragSnapToOrigin: o = !1 } = {}
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const u = Zr(this.lastMoveEventInfo, this.history),
          h = this.startEvent !== null,
          m = q6(u.offset, { x: 0, y: 0 }) >= 3;
        if (!h && !m) return;
        const { point: g } = u,
          { timestamp: v } = re;
        this.history.push({ ...g, timestamp: v });
        const { onStart: w, onMove: b } = this.handlers;
        h ||
          (w && w(this.lastMoveEvent, u),
          (this.startEvent = this.lastMoveEvent)),
          b && b(this.lastMoveEvent, u);
      }),
      (this.handlePointerMove = (u, h) => {
        (this.lastMoveEvent = u),
          (this.lastMoveEventInfo = Ar(h, this.transformPagePoint)),
          B.update(this.updatePoint, !0);
      }),
      (this.handlePointerUp = (u, h) => {
        this.end();
        const { onEnd: m, onSessionEnd: g, resumeAnimation: v } = this.handlers;
        if (
          (this.dragSnapToOrigin && v && v(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const w = Zr(
          u.type === "pointercancel"
            ? this.lastMoveEventInfo
            : Ar(h, this.transformPagePoint),
          this.history
        );
        this.startEvent && m && m(u, w), g && g(u, w);
      }),
      !yi(t))
    )
      return;
    (this.dragSnapToOrigin = o),
      (this.handlers = n),
      (this.transformPagePoint = r),
      (this.contextWindow = s || window);
    const a = or(t),
      i = Ar(a, this.transformPagePoint),
      { point: c } = i,
      { timestamp: f } = re;
    this.history = [{ ...c, timestamp: f }];
    const { onSessionStart: d } = n;
    d && d(t, Zr(i, this.history)),
      (this.removeListeners = qe(
        je(this.contextWindow, "pointermove", this.handlePointerMove),
        je(this.contextWindow, "pointerup", this.handlePointerUp),
        je(this.contextWindow, "pointercancel", this.handlePointerUp)
      ));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), Te(this.updatePoint);
  }
}
function Ar(e, t) {
  return t ? { point: t(e.point) } : e;
}
function bo(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Zr({ point: e }, t) {
  return {
    point: e,
    delta: bo(e, sl(t)),
    offset: bo(e, I6(t)),
    velocity: W6(t, 0.1),
  };
}
function I6(e) {
  return e[0];
}
function sl(e) {
  return e[e.length - 1];
}
function W6(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null;
  const s = sl(e);
  for (; n >= 0 && ((r = e[n]), !(s.timestamp - r.timestamp > ke(t))); ) n--;
  if (!r) return { x: 0, y: 0 };
  const o = De(s.timestamp - r.timestamp);
  if (o === 0) return { x: 0, y: 0 };
  const a = {
    x: (s.x - r.x) / o,
    y: (s.y - r.y) / o,
  };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function pe(e) {
  return e.max - e.min;
}
function i1(e, t = 0, n = 0.01) {
  return Math.abs(e - t) <= n;
}
function Eo(e, t, n, r = 0.5) {
  (e.origin = r),
    (e.originPoint = W(t.min, t.max, e.origin)),
    (e.scale = pe(n) / pe(t)),
    (i1(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    (e.translate = W(n.min, n.max, e.origin) - e.originPoint),
    (i1(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Xt(e, t, n, r) {
  Eo(e.x, t.x, n.x, r ? r.originX : void 0),
    Eo(e.y, t.y, n.y, r ? r.originY : void 0);
}
function xo(e, t, n) {
  (e.min = n.min + t.min), (e.max = e.min + pe(t));
}
function U6(e, t, n) {
  xo(e.x, t.x, n.x), xo(e.y, t.y, n.y);
}
function So(e, t, n) {
  (e.min = t.min - n.min), (e.max = e.min + pe(t));
}
function Jt(e, t, n) {
  So(e.x, t.x, n.x), So(e.y, t.y, n.y);
}
function G6(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? W(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? W(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function Ro(e, t, n) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0,
  };
}
function K6(e, { top: t, left: n, bottom: r, right: s }) {
  return {
    x: Ro(e.x, n, s),
    y: Ro(e.y, t, r),
  };
}
function _o(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r };
}
function Y6(e, t) {
  return {
    x: _o(e.x, t.x),
    y: _o(e.y, t.y),
  };
}
function X6(e, t) {
  let n = 0.5;
  const r = pe(e),
    s = pe(t);
  return (
    s > r
      ? (n = vt(t.min, t.max - r, e.min))
      : r > s && (n = vt(e.min, e.max - s, t.min)),
    Qe(0, 1, n)
  );
}
function J6(e, t) {
  const n = {};
  return (
    t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
  );
}
const l1 = 0.35;
function Q6(e = l1) {
  return (
    e === !1 ? (e = 0) : e === !0 && (e = l1),
    {
      x: Mo(e, "left", "right"),
      y: Mo(e, "top", "bottom"),
    }
  );
}
function Mo(e, t, n) {
  return {
    min: Lo(e, t),
    max: Lo(e, n),
  };
}
function Lo(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const Vo = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0,
  }),
  Vt = () => ({
    x: Vo(),
    y: Vo(),
  }),
  To = () => ({ min: 0, max: 0 }),
  Y = () => ({
    x: To(),
    y: To(),
  });
function Ce(e) {
  return [e("x"), e("y")];
}
function ol({ top: e, left: t, right: n, bottom: r }) {
  return {
    x: { min: t, max: n },
    y: { min: e, max: r },
  };
}
function eu({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function tu(e, t) {
  if (!t) return e;
  const n = t({ x: e.left, y: e.top }),
    r = t({ x: e.right, y: e.bottom });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x,
  };
}
function kr(e) {
  return e === void 0 || e === 1;
}
function c1({ scale: e, scaleX: t, scaleY: n }) {
  return !kr(e) || !kr(t) || !kr(n);
}
function lt(e) {
  return (
    c1(e) ||
    al(e) ||
    e.z ||
    e.rotate ||
    e.rotateX ||
    e.rotateY ||
    e.skewX ||
    e.skewY
  );
}
function al(e) {
  return Po(e.x) || Po(e.y);
}
function Po(e) {
  return e && e !== "0%";
}
function Kn(e, t, n) {
  const r = e - n,
    s = t * r;
  return n + s;
}
function Ho(e, t, n, r, s) {
  return s !== void 0 && (e = Kn(e, s, r)), Kn(e, n, r) + t;
}
function u1(e, t = 0, n = 1, r, s) {
  (e.min = Ho(e.min, t, n, r, s)), (e.max = Ho(e.max, t, n, r, s));
}
function il(e, { x: t, y: n }) {
  u1(e.x, t.translate, t.scale, t.originPoint),
    u1(e.y, n.translate, n.scale, n.originPoint);
}
function nu(e, t, n, r = !1) {
  const s = n.length;
  if (!s) return;
  t.x = t.y = 1;
  let o, a;
  for (let i = 0; i < s; i++) {
    (o = n[i]), (a = o.projectionDelta);
    const c = o.instance;
    (c && c.style && c.style.display === "contents") ||
      (r &&
        o.options.layoutScroll &&
        o.scroll &&
        o !== o.root &&
        Tt(e, {
          x: -o.scroll.offset.x,
          y: -o.scroll.offset.y,
        }),
      a && ((t.x *= a.x.scale), (t.y *= a.y.scale), il(e, a)),
      r && lt(o.latestValues) && Tt(e, o.latestValues));
  }
  (t.x = Ao(t.x)), (t.y = Ao(t.y));
}
function Ao(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999
    ? e
    : 1;
}
function Xe(e, t) {
  (e.min = e.min + t), (e.max = e.max + t);
}
function Zo(e, t, [n, r, s]) {
  const o = t[s] !== void 0 ? t[s] : 0.5,
    a = W(e.min, e.max, o);
  u1(e, t[n], t[r], a, t.scale);
}
const ru = ["x", "scaleX", "originX"],
  su = ["y", "scaleY", "originY"];
function Tt(e, t) {
  Zo(e.x, t, ru), Zo(e.y, t, su);
}
function ll(e, t) {
  return ol(tu(e.getBoundingClientRect(), t));
}
function ou(e, t, n) {
  const r = ll(e, n),
    { scroll: s } = t;
  return s && (Xe(r.x, s.offset.x), Xe(r.y, s.offset.y)), r;
}
const cl = ({ current: e }) => (e ? e.ownerDocument.defaultView : null),
  au = /* @__PURE__ */ new WeakMap();
class iu {
  constructor(t) {
    (this.openGlobalLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Y()),
      (this.visualElement = t);
  }
  start(t, { snapToCursor: n = !1 } = {}) {
    const { presenceContext: r } = this.visualElement;
    if (r && r.isPresent === !1) return;
    const s = (d) => {
        const { dragSnapToOrigin: u } = this.getProps();
        u ? this.pauseAnimation() : this.stopAnimation(),
          n && this.snapToCursor(or(d, "page").point);
      },
      o = (d, u) => {
        const { drag: h, dragPropagation: m, onDragStart: g } = this.getProps();
        if (
          h &&
          !m &&
          (this.openGlobalLock && this.openGlobalLock(),
          (this.openGlobalLock = bi(h)),
          !this.openGlobalLock)
        )
          return;
        (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          Ce((w) => {
            let b = this.getAxisMotionValue(w).get() || 0;
            if (Ze.test(b)) {
              const { projection: y } = this.visualElement;
              if (y && y.layout) {
                const C = y.layout.layoutBox[w];
                C && (b = pe(C) * (parseFloat(b) / 100));
              }
            }
            this.originPoint[w] = b;
          }),
          g && B.postRender(() => g(d, u));
        const { animationState: v } = this.visualElement;
        v && v.setActive("whileDrag", !0);
      },
      a = (d, u) => {
        const {
          dragPropagation: h,
          dragDirectionLock: m,
          onDirectionLock: g,
          onDrag: v,
        } = this.getProps();
        if (!h && !this.openGlobalLock) return;
        const { offset: w } = u;
        if (m && this.currentDirection === null) {
          (this.currentDirection = lu(w)),
            this.currentDirection !== null && g && g(this.currentDirection);
          return;
        }
        this.updateAxis("x", u.point, w),
          this.updateAxis("y", u.point, w),
          this.visualElement.render(),
          v && v(d, u);
      },
      i = (d, u) => this.stop(d, u),
      c = () =>
        Ce((d) => {
          var u;
          return (
            this.getAnimationState(d) === "paused" &&
            ((u = this.getAxisMotionValue(d).animation) === null || u === void 0
              ? void 0
              : u.play())
          );
        }),
      { dragSnapToOrigin: f } = this.getProps();
    this.panSession = new rl(
      t,
      {
        onSessionStart: s,
        onStart: o,
        onMove: a,
        onSessionEnd: i,
        resumeAnimation: c,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: f,
        contextWindow: cl(this.visualElement),
      }
    );
  }
  stop(t, n) {
    const r = this.isDragging;
    if ((this.cancel(), !r)) return;
    const { velocity: s } = n;
    this.startAnimation(s);
    const { onDragEnd: o } = this.getProps();
    o && B.postRender(() => o(t, n));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: n } = this.visualElement;
    t && (t.isAnimationBlocked = !1),
      this.panSession && this.panSession.end(),
      (this.panSession = void 0);
    const { dragPropagation: r } = this.getProps();
    !r &&
      this.openGlobalLock &&
      (this.openGlobalLock(), (this.openGlobalLock = null)),
      n && n.setActive("whileDrag", !1);
  }
  updateAxis(t, n, r) {
    const { drag: s } = this.getProps();
    if (!r || !Pn(t, s, this.currentDirection)) return;
    const o = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + r[t];
    this.constraints &&
      this.constraints[t] &&
      (a = G6(a, this.constraints[t], this.elastic[t])),
      o.set(a);
  }
  resolveConstraints() {
    var t;
    const { dragConstraints: n, dragElastic: r } = this.getProps(),
      s =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : (t = this.visualElement.projection) === null || t === void 0
          ? void 0
          : t.layout,
      o = this.constraints;
    n && Mt(n)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : n && s
      ? (this.constraints = K6(s.layoutBox, n))
      : (this.constraints = !1),
      (this.elastic = Q6(r)),
      o !== this.constraints &&
        s &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        Ce((a) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(a) &&
            (this.constraints[a] = J6(s.layoutBox[a], this.constraints[a]));
        });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: n } = this.getProps();
    if (!t || !Mt(t)) return !1;
    const r = t.current;
    Ve(
      r !== null,
      "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop."
    );
    const { projection: s } = this.visualElement;
    if (!s || !s.layout) return !1;
    const o = ou(r, s.root, this.visualElement.getTransformPagePoint());
    let a = Y6(s.layout.layoutBox, o);
    if (n) {
      const i = n(eu(a));
      (this.hasMutatedConstraints = !!i), i && (a = ol(i));
    }
    return a;
  }
  startAnimation(t) {
    const {
        drag: n,
        dragMomentum: r,
        dragElastic: s,
        dragTransition: o,
        dragSnapToOrigin: a,
        onDragTransitionEnd: i,
      } = this.getProps(),
      c = this.constraints || {},
      f = Ce((d) => {
        if (!Pn(d, n, this.currentDirection)) return;
        let u = (c && c[d]) || {};
        a && (u = { min: 0, max: 0 });
        const h = s ? 200 : 1e6,
          m = s ? 40 : 1e7,
          g = {
            type: "inertia",
            velocity: r ? t[d] : 0,
            bounceStiffness: h,
            bounceDamping: m,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...o,
            ...u,
          };
        return this.startAxisValueAnimation(d, g);
      });
    return Promise.all(f).then(i);
  }
  startAxisValueAnimation(t, n) {
    const r = this.getAxisMotionValue(t);
    return r.start(Y1(t, r, 0, n, this.visualElement));
  }
  stopAnimation() {
    Ce((t) => this.getAxisMotionValue(t).stop());
  }
  pauseAnimation() {
    Ce((t) => {
      var n;
      return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
        ? void 0
        : n.pause();
    });
  }
  getAnimationState(t) {
    var n;
    return (n = this.getAxisMotionValue(t).animation) === null || n === void 0
      ? void 0
      : n.state;
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const n = `_drag${t.toUpperCase()}`,
      r = this.visualElement.getProps(),
      s = r[n];
    return (
      s ||
      this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    );
  }
  snapToCursor(t) {
    Ce((n) => {
      const { drag: r } = this.getProps();
      if (!Pn(n, r, this.currentDirection)) return;
      const { projection: s } = this.visualElement,
        o = this.getAxisMotionValue(n);
      if (s && s.layout) {
        const { min: a, max: i } = s.layout.layoutBox[n];
        o.set(t[n] - W(a, i, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: t, dragConstraints: n } = this.getProps(),
      { projection: r } = this.visualElement;
    if (!Mt(n) || !r || !this.constraints) return;
    this.stopAnimation();
    const s = { x: 0, y: 0 };
    Ce((a) => {
      const i = this.getAxisMotionValue(a);
      if (i && this.constraints !== !1) {
        const c = i.get();
        s[a] = X6({ min: c, max: c }, this.constraints[a]);
      }
    });
    const { transformTemplate: o } = this.visualElement.getProps();
    (this.visualElement.current.style.transform = o ? o({}, "") : "none"),
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.resolveConstraints(),
      Ce((a) => {
        if (!Pn(a, t, null)) return;
        const i = this.getAxisMotionValue(a),
          { min: c, max: f } = this.constraints[a];
        i.set(W(c, f, s[a]));
      });
  }
  addListeners() {
    if (!this.visualElement.current) return;
    au.set(this.visualElement, this);
    const t = this.visualElement.current,
      n = je(t, "pointerdown", (c) => {
        const { drag: f, dragListener: d = !0 } = this.getProps();
        f && d && this.start(c);
      }),
      r = () => {
        const { dragConstraints: c } = this.getProps();
        Mt(c) && c.current && (this.constraints = this.resolveRefConstraints());
      },
      { projection: s } = this.visualElement,
      o = s.addEventListener("measure", r);
    s && !s.layout && (s.root && s.root.updateScroll(), s.updateLayout()),
      B.read(r);
    const a = ze(window, "resize", () => this.scalePositionWithinConstraints()),
      i = s.addEventListener(
        "didUpdate",
        ({ delta: c, hasLayoutChanged: f }) => {
          this.isDragging &&
            f &&
            (Ce((d) => {
              const u = this.getAxisMotionValue(d);
              u &&
                ((this.originPoint[d] += c[d].translate),
                u.set(u.get() + c[d].translate));
            }),
            this.visualElement.render());
        }
      );
    return () => {
      a(), n(), o(), i && i();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(),
      {
        drag: n = !1,
        dragDirectionLock: r = !1,
        dragPropagation: s = !1,
        dragConstraints: o = !1,
        dragElastic: a = l1,
        dragMomentum: i = !0,
      } = t;
    return {
      ...t,
      drag: n,
      dragDirectionLock: r,
      dragPropagation: s,
      dragConstraints: o,
      dragElastic: a,
      dragMomentum: i,
    };
  }
}
function Pn(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function lu(e, t = 10) {
  let n = null;
  return Math.abs(e.y) > t ? (n = "y") : Math.abs(e.x) > t && (n = "x"), n;
}
class cu extends tt {
  constructor(t) {
    super(t),
      (this.removeGroupControls = ae),
      (this.removeListeners = ae),
      (this.controls = new iu(t));
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || ae);
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const ko = (e) => (t, n) => {
  e && B.postRender(() => e(t, n));
};
class uu extends tt {
  constructor() {
    super(...arguments), (this.removePointerDownListener = ae);
  }
  onPointerDown(t) {
    this.session = new rl(t, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: cl(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: t,
      onPanStart: n,
      onPan: r,
      onPanEnd: s,
    } = this.node.getProps();
    return {
      onSessionStart: ko(t),
      onStart: ko(n),
      onMove: r,
      onEnd: (o, a) => {
        delete this.session, s && B.postRender(() => s(o, a));
      },
    };
  }
  mount() {
    this.removePointerDownListener = je(this.node.current, "pointerdown", (t) =>
      this.onPointerDown(t)
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function du() {
  const e = X(nr);
  if (e === null) return [!0, null];
  const { isPresent: t, onExitComplete: n, register: r } = e,
    s = v1();
  return O(() => r(s), []), !t && n ? [!1, () => n && n(s)] : [!0];
}
const Bn = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1,
};
function Do(e, t) {
  return t.max === t.min ? 0 : (e / (t.max - t.min)) * 100;
}
const jt = {
    correct: (e, t) => {
      if (!t.target) return e;
      if (typeof e == "string")
        if (L.test(e)) e = parseFloat(e);
        else return e;
      const n = Do(e, t.target.x),
        r = Do(e, t.target.y);
      return `${n}% ${r}%`;
    },
  },
  fu = {
    correct: (e, { treeScale: t, projectionDelta: n }) => {
      const r = e,
        s = et.parse(e);
      if (s.length > 5) return r;
      const o = et.createTransformer(e),
        a = typeof s[0] != "number" ? 1 : 0,
        i = n.x.scale * t.x,
        c = n.y.scale * t.y;
      (s[0 + a] /= i), (s[1 + a] /= c);
      const f = W(i, c, 0.5);
      return (
        typeof s[2 + a] == "number" && (s[2 + a] /= f),
        typeof s[3 + a] == "number" && (s[3 + a] /= f),
        o(s)
      );
    },
  };
class hu extends s2 {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
        layoutId: s,
      } = this.props,
      { projection: o } = t;
    g4(mu),
      o &&
        (n.group && n.group.add(o),
        r && r.register && s && r.register(o),
        o.root.didUpdate(),
        o.addEventListener("animationComplete", () => {
          this.safeToRemove();
        }),
        o.setOptions({
          ...o.options,
          onExitComplete: () => this.safeToRemove(),
        })),
      (Bn.hasEverUpdated = !0);
  }
  getSnapshotBeforeUpdate(t) {
    const {
        layoutDependency: n,
        visualElement: r,
        drag: s,
        isPresent: o,
      } = this.props,
      a = r.projection;
    return (
      a &&
        ((a.isPresent = o),
        s || t.layoutDependency !== n || n === void 0
          ? a.willUpdate()
          : this.safeToRemove(),
        t.isPresent !== o &&
          (o
            ? a.promote()
            : a.relegate() ||
              B.postRender(() => {
                const i = a.getStack();
                (!i || !i.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t &&
      (t.root.didUpdate(),
      x1.postRender(() => {
        !t.currentAnimation && t.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: t,
        layoutGroup: n,
        switchLayoutGroup: r,
      } = this.props,
      { projection: s } = t;
    s &&
      (s.scheduleCheckAfterUnmount(),
      n && n.group && n.group.remove(s),
      r && r.deregister && r.deregister(s));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function ul(e) {
  const [t, n] = du(),
    r = X(_1);
  return me.jsx(hu, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: X(si),
    isPresent: t,
    safeToRemove: n,
  });
}
const mu = {
    borderRadius: {
      ...jt,
      applyTo: [
        "borderTopLeftRadius",
        "borderTopRightRadius",
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ],
    },
    borderTopLeftRadius: jt,
    borderTopRightRadius: jt,
    borderBottomLeftRadius: jt,
    borderBottomRightRadius: jt,
    boxShadow: fu,
  },
  dl = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"],
  pu = dl.length,
  Bo = (e) => (typeof e == "string" ? parseFloat(e) : e),
  Oo = (e) => typeof e == "number" || L.test(e);
function vu(e, t, n, r, s, o) {
  s
    ? ((e.opacity = W(
        0,
        // TODO Reinstate this if only child
        n.opacity !== void 0 ? n.opacity : 1,
        gu(r)
      )),
      (e.opacityExit = W(t.opacity !== void 0 ? t.opacity : 1, 0, wu(r))))
    : o &&
      (e.opacity = W(
        t.opacity !== void 0 ? t.opacity : 1,
        n.opacity !== void 0 ? n.opacity : 1,
        r
      ));
  for (let a = 0; a < pu; a++) {
    const i = `border${dl[a]}Radius`;
    let c = No(t, i),
      f = No(n, i);
    if (c === void 0 && f === void 0) continue;
    c || (c = 0),
      f || (f = 0),
      c === 0 || f === 0 || Oo(c) === Oo(f)
        ? ((e[i] = Math.max(W(Bo(c), Bo(f), r), 0)),
          (Ze.test(f) || Ze.test(c)) && (e[i] += "%"))
        : (e[i] = f);
  }
  (t.rotate || n.rotate) && (e.rotate = W(t.rotate || 0, n.rotate || 0, r));
}
function No(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const gu = fl(0, 0.5, Ui),
  wu = fl(0.5, 0.95, ae);
function fl(e, t, n) {
  return (r) => (r < e ? 0 : r > t ? 1 : n(vt(e, t, r)));
}
function $o(e, t) {
  (e.min = t.min), (e.max = t.max);
}
function we(e, t) {
  $o(e.x, t.x), $o(e.y, t.y);
}
function zo(e, t, n, r, s) {
  return (
    (e -= t), (e = Kn(e, 1 / n, r)), s !== void 0 && (e = Kn(e, 1 / s, r)), e
  );
}
function yu(e, t = 0, n = 1, r = 0.5, s, o = e, a = e) {
  if (
    (Ze.test(t) &&
      ((t = parseFloat(t)), (t = W(a.min, a.max, t / 100) - a.min)),
    typeof t != "number")
  )
    return;
  let i = W(o.min, o.max, r);
  e === o && (i -= t),
    (e.min = zo(e.min, t, n, i, s)),
    (e.max = zo(e.max, t, n, i, s));
}
function Fo(e, t, [n, r, s], o, a) {
  yu(e, t[n], t[r], t[s], t.scale, o, a);
}
const Cu = ["x", "scaleX", "originX"],
  bu = ["y", "scaleY", "originY"];
function jo(e, t, n, r) {
  Fo(e.x, t, Cu, n ? n.x : void 0, r ? r.x : void 0),
    Fo(e.y, t, bu, n ? n.y : void 0, r ? r.y : void 0);
}
function qo(e) {
  return e.translate === 0 && e.scale === 1;
}
function hl(e) {
  return qo(e.x) && qo(e.y);
}
function Eu(e, t) {
  return (
    e.x.min === t.x.min &&
    e.x.max === t.x.max &&
    e.y.min === t.y.min &&
    e.y.max === t.y.max
  );
}
function ml(e, t) {
  return (
    Math.round(e.x.min) === Math.round(t.x.min) &&
    Math.round(e.x.max) === Math.round(t.x.max) &&
    Math.round(e.y.min) === Math.round(t.y.min) &&
    Math.round(e.y.max) === Math.round(t.y.max)
  );
}
function Io(e) {
  return pe(e.x) / pe(e.y);
}
class xu {
  constructor() {
    this.members = [];
  }
  add(t) {
    X1(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (
      (lr(this.members, t),
      t === this.prevLead && (this.prevLead = void 0),
      t === this.lead)
    ) {
      const n = this.members[this.members.length - 1];
      n && this.promote(n);
    }
  }
  relegate(t) {
    const n = this.members.findIndex((s) => t === s);
    if (n === 0) return !1;
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
    if (t !== r && ((this.prevLead = r), (this.lead = t), t.show(), r)) {
      r.instance && r.scheduleRender(),
        t.scheduleRender(),
        (t.resumeFrom = r),
        n && (t.resumeFrom.preserveOpacity = !0),
        r.snapshot &&
          ((t.snapshot = r.snapshot),
          (t.snapshot.latestValues = r.animationValues || r.latestValues)),
        t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: s } = t.options;
      s === !1 && r.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: n, resumingFrom: r } = t;
      n.onExitComplete && n.onExitComplete(),
        r && r.options.onExitComplete && r.options.onExitComplete();
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
function Wo(e, t, n) {
  let r = "";
  const s = e.x.translate / t.x,
    o = e.y.translate / t.y,
    a = (n == null ? void 0 : n.z) || 0;
  if (
    ((s || o || a) && (r = `translate3d(${s}px, ${o}px, ${a}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n)
  ) {
    const {
      transformPerspective: f,
      rotate: d,
      rotateX: u,
      rotateY: h,
      skewX: m,
      skewY: g,
    } = n;
    f && (r = `perspective(${f}px) ${r}`),
      d && (r += `rotate(${d}deg) `),
      u && (r += `rotateX(${u}deg) `),
      h && (r += `rotateY(${h}deg) `),
      m && (r += `skewX(${m}deg) `),
      g && (r += `skewY(${g}deg) `);
  }
  const i = e.x.scale * t.x,
    c = e.y.scale * t.y;
  return (i !== 1 || c !== 1) && (r += `scale(${i}, ${c})`), r || "none";
}
const Su = (e, t) => e.depth - t.depth;
class Ru {
  constructor() {
    (this.children = []), (this.isDirty = !1);
  }
  add(t) {
    X1(this.children, t), (this.isDirty = !0);
  }
  remove(t) {
    lr(this.children, t), (this.isDirty = !0);
  }
  forEach(t) {
    this.isDirty && this.children.sort(Su),
      (this.isDirty = !1),
      this.children.forEach(t);
  }
}
function _u(e, t) {
  const n = Je.now(),
    r = ({ timestamp: s }) => {
      const o = s - n;
      o >= t && (Te(r), e(o - t));
    };
  return B.read(r, !0), () => Te(r);
}
function Mu(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function pl(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function es(e, t, n) {
  const r = se(e) ? e : Ae(e);
  return r.start(Y1("", r, t, n)), r.animation;
}
const Dr = ["", "X", "Y", "Z"],
  Lu = { visibility: "hidden" },
  Uo = 1e3;
let Vu = 0;
const ct = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0,
};
function Br(e, t, n, r) {
  const { latestValues: s } = t;
  s[e] && ((n[e] = s[e]), t.setStaticValue(e, 0), r && (r[e] = 0));
}
function vl(e) {
  if (((e.hasCheckedOptimisedAppear = !0), e.root === e)) return !1;
  const { visualElement: t } = e.options;
  return t
    ? nl(t)
      ? !0
      : e.parent && !e.parent.hasCheckedOptimisedAppear
      ? vl(e.parent)
      : !1
    : !1;
}
function gl({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: s,
}) {
  return class {
    constructor(a = {}, i = t == null ? void 0 : t()) {
      (this.id = Vu++),
        (this.animationId = 0),
        (this.children = /* @__PURE__ */ new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = /* @__PURE__ */ new Map()),
        (this.hasTreeAnimated = !1),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          (this.projectionUpdateScheduled = !1),
            (ct.totalNodes =
              ct.resolvedTargetDeltas =
              ct.recalculatedProjection =
                0),
            this.nodes.forEach(Hu),
            this.nodes.forEach(Bu),
            this.nodes.forEach(Ou),
            this.nodes.forEach(Au),
            Mu(ct);
        }),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = /* @__PURE__ */ new Map()),
        (this.latestValues = a),
        (this.root = i ? i.root || i : this),
        (this.path = i ? [...i.path, i] : []),
        (this.parent = i),
        (this.depth = i ? i.depth + 1 : 0);
      for (let c = 0; c < this.path.length; c++)
        this.path[c].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Ru());
    }
    addEventListener(a, i) {
      return (
        this.eventHandlers.has(a) || this.eventHandlers.set(a, new J1()),
        this.eventHandlers.get(a).add(i)
      );
    }
    notifyListeners(a, ...i) {
      const c = this.eventHandlers.get(a);
      c && c.notify(...i);
    }
    hasListeners(a) {
      return this.eventHandlers.has(a);
    }
    /**
     * Lifecycles
     */
    mount(a, i = this.root.hasTreeAnimated) {
      if (this.instance) return;
      (this.isSVG = pl(a)), (this.instance = a);
      const { layoutId: c, layout: f, visualElement: d } = this.options;
      if (
        (d && !d.current && d.mount(a),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        i && (f || c) && (this.isLayoutDirty = !0),
        e)
      ) {
        let u;
        const h = () => (this.root.updateBlockedByResize = !1);
        e(a, () => {
          (this.root.updateBlockedByResize = !0),
            u && u(),
            (u = _u(h, 250)),
            Bn.hasAnimatedSinceResize &&
              ((Bn.hasAnimatedSinceResize = !1), this.nodes.forEach(Ko));
        });
      }
      c && this.root.registerSharedNode(c, this),
        this.options.animate !== !1 &&
          d &&
          (c || f) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: u,
              hasLayoutChanged: h,
              hasRelativeTargetChanged: m,
              layout: g,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                (this.target = void 0), (this.relativeTarget = void 0);
                return;
              }
              const v =
                  this.options.transition || d.getDefaultTransition() || ju,
                { onLayoutAnimationStart: w, onLayoutAnimationComplete: b } =
                  d.getProps(),
                y = !this.targetLayout || !ml(this.targetLayout, g) || m,
                C = !h && m;
              if (
                this.options.layoutRoot ||
                (this.resumeFrom && this.resumeFrom.instance) ||
                C ||
                (h && (y || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0)),
                  this.setAnimationOrigin(u, C);
                const S = {
                  ...D1(v, "layout"),
                  onPlay: w,
                  onComplete: b,
                };
                (d.shouldReduceMotion || this.options.layoutRoot) &&
                  ((S.delay = 0), (S.type = !1)),
                  this.startAnimation(S);
              } else
                h || Ko(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete();
              this.targetLayout = g;
            }
          );
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        Te(this.updateProjection);
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
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(Nu),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: a } = this.options;
      return a && a.getProps().transformTemplate;
    }
    willUpdate(a = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.HandoffCancelAllAnimations &&
          vl(this) &&
          window.HandoffCancelAllAnimations(),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let d = 0; d < this.path.length; d++) {
        const u = this.path[d];
        (u.shouldResetTransform = !0),
          u.updateScroll("snapshot"),
          u.options.layoutRoot && u.willUpdate(!1);
      }
      const { layoutId: i, layout: c } = this.options;
      if (i === void 0 && !c) return;
      const f = this.getTransformTemplate();
      (this.prevTransformTemplateValue = f ? f(this.latestValues, "") : void 0),
        this.updateSnapshot(),
        a && this.notifyListeners("willUpdate");
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Go);
        return;
      }
      this.isUpdating || this.nodes.forEach(ku),
        (this.isUpdating = !1),
        this.nodes.forEach(Du),
        this.nodes.forEach(Tu),
        this.nodes.forEach(Pu),
        this.clearAllSnapshots();
      const i = Je.now();
      (re.delta = Qe(0, 1e3 / 60, i - re.timestamp)),
        (re.timestamp = i),
        (re.isProcessing = !0),
        _r.update.process(re),
        _r.preRender.process(re),
        _r.render.process(re),
        (re.isProcessing = !1);
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), x1.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Zu), this.sharedNodes.forEach($u);
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        B.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      B.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let c = 0; c < this.path.length; c++) this.path[c].updateScroll();
      const a = this.layout;
      (this.layout = this.measure(!1)),
        (this.layoutCorrected = Y()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: i } = this.options;
      i &&
        i.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          a ? a.layoutBox : void 0
        );
    }
    updateScroll(a = "measure") {
      let i = !!(this.options.layoutScroll && this.instance);
      this.scroll &&
        this.scroll.animationId === this.root.animationId &&
        this.scroll.phase === a &&
        (i = !1),
        i &&
          (this.scroll = {
            animationId: this.root.animationId,
            phase: a,
            isRoot: r(this.instance),
            offset: n(this.instance),
          });
    }
    resetTransform() {
      if (!s) return;
      const a = this.isLayoutDirty || this.shouldResetTransform,
        i = this.projectionDelta && !hl(this.projectionDelta),
        c = this.getTransformTemplate(),
        f = c ? c(this.latestValues, "") : void 0,
        d = f !== this.prevTransformTemplateValue;
      a &&
        (i || lt(this.latestValues) || d) &&
        (s(this.instance, f),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(a = !0) {
      const i = this.measurePageBox();
      let c = this.removeElementScroll(i);
      return (
        a && (c = this.removeTransform(c)),
        qu(c),
        {
          animationId: this.root.animationId,
          measuredBox: i,
          layoutBox: c,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: a } = this.options;
      if (!a) return Y();
      const i = a.measureViewportBox(),
        { scroll: c } = this.root;
      return c && (Xe(i.x, c.offset.x), Xe(i.y, c.offset.y)), i;
    }
    removeElementScroll(a) {
      const i = Y();
      we(i, a);
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c],
          { scroll: d, options: u } = f;
        if (f !== this.root && d && u.layoutScroll) {
          if (d.isRoot) {
            we(i, a);
            const { scroll: h } = this.root;
            h && (Xe(i.x, -h.offset.x), Xe(i.y, -h.offset.y));
          }
          Xe(i.x, d.offset.x), Xe(i.y, d.offset.y);
        }
      }
      return i;
    }
    applyTransform(a, i = !1) {
      const c = Y();
      we(c, a);
      for (let f = 0; f < this.path.length; f++) {
        const d = this.path[f];
        !i &&
          d.options.layoutScroll &&
          d.scroll &&
          d !== d.root &&
          Tt(c, {
            x: -d.scroll.offset.x,
            y: -d.scroll.offset.y,
          }),
          lt(d.latestValues) && Tt(c, d.latestValues);
      }
      return lt(this.latestValues) && Tt(c, this.latestValues), c;
    }
    removeTransform(a) {
      const i = Y();
      we(i, a);
      for (let c = 0; c < this.path.length; c++) {
        const f = this.path[c];
        if (!f.instance || !lt(f.latestValues)) continue;
        c1(f.latestValues) && f.updateSnapshot();
        const d = Y(),
          u = f.measurePageBox();
        we(d, u),
          jo(i, f.latestValues, f.snapshot ? f.snapshot.layoutBox : void 0, d);
      }
      return lt(this.latestValues) && jo(i, this.latestValues), i;
    }
    setTargetDelta(a) {
      (this.targetDelta = a),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0);
    }
    setOptions(a) {
      this.options = {
        ...this.options,
        ...a,
        crossfade: a.crossfade !== void 0 ? a.crossfade : !0,
      };
    }
    clearMeasurements() {
      (this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1);
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== re.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(a = !1) {
      var i;
      const c = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = c.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = c.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = c.isSharedProjectionDirty);
      const f = !!this.resumingFrom || this !== c;
      if (
        !(
          a ||
          (f && this.isSharedProjectionDirty) ||
          this.isProjectionDirty ||
          (!((i = this.parent) === null || i === void 0) &&
            i.isProjectionDirty) ||
          this.attemptToResolveRelativeTarget
        )
      )
        return;
      const { layout: u, layoutId: h } = this.options;
      if (!(!this.layout || !(u || h))) {
        if (
          ((this.resolvedRelativeTargetAt = re.timestamp),
          !this.targetDelta && !this.relativeTarget)
        ) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1
            ? ((this.relativeParent = m),
              this.forceRelativeParentToResolveTarget(),
              (this.relativeTarget = Y()),
              (this.relativeTargetOrigin = Y()),
              Jt(
                this.relativeTargetOrigin,
                this.layout.layoutBox,
                m.layout.layoutBox
              ),
              we(this.relativeTarget, this.relativeTargetOrigin))
            : (this.relativeParent = this.relativeTarget = void 0);
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (
            (this.target ||
              ((this.target = Y()), (this.targetWithTransforms = Y())),
            this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.relativeParent &&
            this.relativeParent.target
              ? (this.forceRelativeParentToResolveTarget(),
                U6(
                  this.target,
                  this.relativeTarget,
                  this.relativeParent.target
                ))
              : this.targetDelta
              ? (this.resumingFrom
                  ? (this.target = this.applyTransform(this.layout.layoutBox))
                  : we(this.target, this.layout.layoutBox),
                il(this.target, this.targetDelta))
              : we(this.target, this.layout.layoutBox),
            this.attemptToResolveRelativeTarget)
          ) {
            this.attemptToResolveRelativeTarget = !1;
            const m = this.getClosestProjectingParent();
            m &&
            !!m.resumingFrom == !!this.resumingFrom &&
            !m.options.layoutScroll &&
            m.target &&
            this.animationProgress !== 1
              ? ((this.relativeParent = m),
                this.forceRelativeParentToResolveTarget(),
                (this.relativeTarget = Y()),
                (this.relativeTargetOrigin = Y()),
                Jt(this.relativeTargetOrigin, this.target, m.target),
                we(this.relativeTarget, this.relativeTargetOrigin))
              : (this.relativeParent = this.relativeTarget = void 0);
          }
          ct.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (
        !(
          !this.parent ||
          c1(this.parent.latestValues) ||
          al(this.parent.latestValues)
        )
      )
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    calcProjection() {
      var a;
      const i = this.getLead(),
        c = !!this.resumingFrom || this !== i;
      let f = !0;
      if (
        ((this.isProjectionDirty ||
          (!((a = this.parent) === null || a === void 0) &&
            a.isProjectionDirty)) &&
          (f = !1),
        c &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (f = !1),
        this.resolvedRelativeTargetAt === re.timestamp && (f = !1),
        f)
      )
        return;
      const { layout: d, layoutId: u } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(d || u))
      )
        return;
      we(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x,
        m = this.treeScale.y;
      nu(this.layoutCorrected, this.treeScale, this.path, c),
        i.layout &&
          !i.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((i.target = i.layout.layoutBox), (i.targetWithTransforms = Y()));
      const { target: g } = i;
      if (!g) {
        this.projectionTransform &&
          ((this.projectionDelta = Vt()),
          (this.projectionTransform = "none"),
          this.scheduleRender());
        return;
      }
      this.projectionDelta ||
        ((this.projectionDelta = Vt()),
        (this.projectionDeltaWithTransform = Vt()));
      const v = this.projectionTransform;
      Xt(this.projectionDelta, this.layoutCorrected, g, this.latestValues),
        (this.projectionTransform = Wo(this.projectionDelta, this.treeScale)),
        (this.projectionTransform !== v ||
          this.treeScale.x !== h ||
          this.treeScale.y !== m) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", g)),
        ct.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(a = !0) {
      if ((this.options.scheduleRender && this.options.scheduleRender(), a)) {
        const i = this.getStack();
        i && i.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    setAnimationOrigin(a, i = !1) {
      const c = this.snapshot,
        f = c ? c.latestValues : {},
        d = { ...this.latestValues },
        u = Vt();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !i);
      const h = Y(),
        m = c ? c.source : void 0,
        g = this.layout ? this.layout.source : void 0,
        v = m !== g,
        w = this.getStack(),
        b = !w || w.members.length <= 1,
        y = !!(v && !b && this.options.crossfade === !0 && !this.path.some(Fu));
      this.animationProgress = 0;
      let C;
      (this.mixTargetDelta = (S) => {
        const R = S / 1e3;
        Yo(u.x, a.x, R),
          Yo(u.y, a.y, R),
          this.setTargetDelta(u),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Jt(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
            zu(this.relativeTarget, this.relativeTargetOrigin, h, R),
            C && Eu(this.relativeTarget, C) && (this.isProjectionDirty = !1),
            C || (C = Y()),
            we(C, this.relativeTarget)),
          v &&
            ((this.animationValues = d), vu(d, f, this.latestValues, R, y, b)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = R);
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"),
        this.currentAnimation && this.currentAnimation.stop(),
        this.resumingFrom &&
          this.resumingFrom.currentAnimation &&
          this.resumingFrom.currentAnimation.stop(),
        this.pendingAnimation &&
          (Te(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = B.update(() => {
          (Bn.hasAnimatedSinceResize = !0),
            (this.currentAnimation = es(0, Uo, {
              ...a,
              onUpdate: (i) => {
                this.mixTargetDelta(i), a.onUpdate && a.onUpdate(i);
              },
              onComplete: () => {
                a.onComplete && a.onComplete(), this.completeAnimation();
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0);
        }));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const a = this.getStack();
      a && a.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Uo),
        this.currentAnimation.stop()),
        this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let {
        targetWithTransforms: i,
        target: c,
        layout: f,
        latestValues: d,
      } = a;
      if (!(!i || !c || !f)) {
        if (
          this !== a &&
          this.layout &&
          f &&
          wl(this.options.animationType, this.layout.layoutBox, f.layoutBox)
        ) {
          c = this.target || Y();
          const u = pe(this.layout.layoutBox.x);
          (c.x.min = a.target.x.min), (c.x.max = c.x.min + u);
          const h = pe(this.layout.layoutBox.y);
          (c.y.min = a.target.y.min), (c.y.max = c.y.min + h);
        }
        we(i, c),
          Tt(i, d),
          Xt(this.projectionDeltaWithTransform, this.layoutCorrected, i, d);
      }
    }
    registerSharedNode(a, i) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new xu()),
        this.sharedNodes.get(a).add(i);
      const f = i.options.initialPromotionConfig;
      i.promote({
        transition: f ? f.transition : void 0,
        preserveFollowOpacity:
          f && f.shouldPreserveFollowOpacity
            ? f.shouldPreserveFollowOpacity(i)
            : void 0,
      });
    }
    isLead() {
      const a = this.getStack();
      return a ? a.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: i } = this.options;
      return i
        ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) ||
            this
        : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: i } = this.options;
      return i
        ? (a = this.getStack()) === null || a === void 0
          ? void 0
          : a.prevLead
        : void 0;
    }
    getStack() {
      const { layoutId: a } = this.options;
      if (a) return this.root.sharedNodes.get(a);
    }
    promote({ needsReset: a, transition: i, preserveFollowOpacity: c } = {}) {
      const f = this.getStack();
      f && f.promote(this, c),
        a && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        i && this.setOptions({ transition: i });
    }
    relegate() {
      const a = this.getStack();
      return a ? a.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: a } = this.options;
      if (!a) return;
      let i = !1;
      const { latestValues: c } = a;
      if (
        ((c.z ||
          c.rotate ||
          c.rotateX ||
          c.rotateY ||
          c.rotateZ ||
          c.skewX ||
          c.skewY) &&
          (i = !0),
        !i)
      )
        return;
      const f = {};
      c.z && Br("z", a, f, this.animationValues);
      for (let d = 0; d < Dr.length; d++)
        Br(`rotate${Dr[d]}`, a, f, this.animationValues),
          Br(`skew${Dr[d]}`, a, f, this.animationValues);
      a.render();
      for (const d in f)
        a.setStaticValue(d, f[d]),
          this.animationValues && (this.animationValues[d] = f[d]);
      a.scheduleRender();
    }
    getProjectionStyles(a) {
      var i, c;
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) return Lu;
      const f = {
          visibility: "",
        },
        d = this.getTransformTemplate();
      if (this.needsReset)
        return (
          (this.needsReset = !1),
          (f.opacity = ""),
          (f.pointerEvents = kn(a == null ? void 0 : a.pointerEvents) || ""),
          (f.transform = d ? d(this.latestValues, "") : "none"),
          f
        );
      const u = this.getLead();
      if (!this.projectionDelta || !this.layout || !u.target) {
        const v = {};
        return (
          this.options.layoutId &&
            ((v.opacity =
              this.latestValues.opacity !== void 0
                ? this.latestValues.opacity
                : 1),
            (v.pointerEvents = kn(a == null ? void 0 : a.pointerEvents) || "")),
          this.hasProjected &&
            !lt(this.latestValues) &&
            ((v.transform = d ? d({}, "") : "none"), (this.hasProjected = !1)),
          v
        );
      }
      const h = u.animationValues || u.latestValues;
      this.applyTransformsToTarget(),
        (f.transform = Wo(
          this.projectionDeltaWithTransform,
          this.treeScale,
          h
        )),
        d && (f.transform = d(h, f.transform));
      const { x: m, y: g } = this.projectionDelta;
      (f.transformOrigin = `${m.origin * 100}% ${g.origin * 100}% 0`),
        u.animationValues
          ? (f.opacity =
              u === this
                ? (c =
                    (i = h.opacity) !== null && i !== void 0
                      ? i
                      : this.latestValues.opacity) !== null && c !== void 0
                  ? c
                  : 1
                : this.preserveOpacity
                ? this.latestValues.opacity
                : h.opacityExit)
          : (f.opacity =
              u === this
                ? h.opacity !== void 0
                  ? h.opacity
                  : ""
                : h.opacityExit !== void 0
                ? h.opacityExit
                : 0);
      for (const v in jn) {
        if (h[v] === void 0) continue;
        const { correct: w, applyTo: b } = jn[v],
          y = f.transform === "none" ? h[v] : w(h[v], u);
        if (b) {
          const C = b.length;
          for (let S = 0; S < C; S++) f[b[S]] = y;
        } else f[v] = y;
      }
      return (
        this.options.layoutId &&
          (f.pointerEvents =
            u === this
              ? kn(a == null ? void 0 : a.pointerEvents) || ""
              : "none"),
        f
      );
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((a) => {
        var i;
        return (i = a.currentAnimation) === null || i === void 0
          ? void 0
          : i.stop();
      }),
        this.root.nodes.forEach(Go),
        this.root.sharedNodes.clear();
    }
  };
}
function Tu(e) {
  e.updateLayout();
}
function Pu(e) {
  var t;
  const n =
    ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) ||
    e.snapshot;
  if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
    const { layoutBox: r, measuredBox: s } = e.layout,
      { animationType: o } = e.options,
      a = n.source !== e.layout.source;
    o === "size"
      ? Ce((u) => {
          const h = a ? n.measuredBox[u] : n.layoutBox[u],
            m = pe(h);
          (h.min = r[u].min), (h.max = h.min + m);
        })
      : wl(o, n.layoutBox, r) &&
        Ce((u) => {
          const h = a ? n.measuredBox[u] : n.layoutBox[u],
            m = pe(r[u]);
          (h.max = h.min + m),
            e.relativeTarget &&
              !e.currentAnimation &&
              ((e.isProjectionDirty = !0),
              (e.relativeTarget[u].max = e.relativeTarget[u].min + m));
        });
    const i = Vt();
    Xt(i, r, n.layoutBox);
    const c = Vt();
    a ? Xt(c, e.applyTransform(s, !0), n.measuredBox) : Xt(c, r, n.layoutBox);
    const f = !hl(i);
    let d = !1;
    if (!e.resumeFrom) {
      const u = e.getClosestProjectingParent();
      if (u && !u.resumeFrom) {
        const { snapshot: h, layout: m } = u;
        if (h && m) {
          const g = Y();
          Jt(g, n.layoutBox, h.layoutBox);
          const v = Y();
          Jt(v, r, m.layoutBox),
            ml(g, v) || (d = !0),
            u.options.layoutRoot &&
              ((e.relativeTarget = v),
              (e.relativeTargetOrigin = g),
              (e.relativeParent = u));
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: r,
      snapshot: n,
      delta: c,
      layoutDelta: i,
      hasLayoutChanged: f,
      hasRelativeTargetChanged: d,
    });
  } else if (e.isLead()) {
    const { onExitComplete: r } = e.options;
    r && r();
  }
  e.options.transition = void 0;
}
function Hu(e) {
  ct.totalNodes++,
    e.parent &&
      (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
      e.isSharedProjectionDirty ||
        (e.isSharedProjectionDirty = !!(
          e.isProjectionDirty ||
          e.parent.isProjectionDirty ||
          e.parent.isSharedProjectionDirty
        )),
      e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function Au(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Zu(e) {
  e.clearSnapshot();
}
function Go(e) {
  e.clearMeasurements();
}
function ku(e) {
  e.isLayoutDirty = !1;
}
function Du(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform();
}
function Ko(e) {
  e.finishAnimation(),
    (e.targetDelta = e.relativeTarget = e.target = void 0),
    (e.isProjectionDirty = !0);
}
function Bu(e) {
  e.resolveTargetDelta();
}
function Ou(e) {
  e.calcProjection();
}
function Nu(e) {
  e.resetSkewAndRotation();
}
function $u(e) {
  e.removeLeadSnapshot();
}
function Yo(e, t, n) {
  (e.translate = W(t.translate, 0, n)),
    (e.scale = W(t.scale, 1, n)),
    (e.origin = t.origin),
    (e.originPoint = t.originPoint);
}
function Xo(e, t, n, r) {
  (e.min = W(t.min, n.min, r)), (e.max = W(t.max, n.max, r));
}
function zu(e, t, n, r) {
  Xo(e.x, t.x, n.x, r), Xo(e.y, t.y, n.y, r);
}
function Fu(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const ju = {
    duration: 0.45,
    ease: [0.4, 0, 0.1, 1],
  },
  Jo = (e) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(e),
  Qo = Jo("applewebkit/") && !Jo("chrome/") ? Math.round : ae;
function ea(e) {
  (e.min = Qo(e.min)), (e.max = Qo(e.max));
}
function qu(e) {
  ea(e.x), ea(e.y);
}
function wl(e, t, n) {
  return (
    e === "position" || (e === "preserve-aspect" && !i1(Io(t), Io(n), 0.2))
  );
}
const Iu = gl({
    attachResizeListener: (e, t) => ze(e, "resize", t),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body.scrollLeft,
      y: document.documentElement.scrollTop || document.body.scrollTop,
    }),
    checkIsScrollRoot: () => !0,
  }),
  Or = {
    current: void 0,
  },
  yl = gl({
    measureScroll: (e) => ({
      x: e.scrollLeft,
      y: e.scrollTop,
    }),
    defaultParent: () => {
      if (!Or.current) {
        const e = new Iu({});
        e.mount(window), e.setOptions({ layoutScroll: !0 }), (Or.current = e);
      }
      return Or.current;
    },
    resetTransform: (e, t) => {
      e.style.transform = t !== void 0 ? t : "none";
    },
    checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed",
  }),
  Wu = {
    pan: {
      Feature: uu,
    },
    drag: {
      Feature: cu,
      ProjectionNode: yl,
      MeasureLayout: ul,
    },
  },
  Yn = { current: null },
  ts = { current: !1 };
function Cl() {
  if (((ts.current = !0), !!b1))
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"),
        t = () => (Yn.current = e.matches);
      e.addListener(t), t();
    } else Yn.current = !1;
}
function Uu(e, t, n) {
  const { willChange: r } = t;
  for (const s in t) {
    const o = t[s],
      a = n[s];
    if (se(o))
      e.addValue(s, o),
        Gn(r) && r.add(s),
        process.env.NODE_ENV === "development" &&
          vn(
            o.version === "11.2.11",
            `Attempting to mix Framer Motion versions ${o.version} with 11.2.11 may not work as expected.`
          );
    else if (se(a)) e.addValue(s, Ae(o, { owner: e })), Gn(r) && r.remove(s);
    else if (a !== o)
      if (e.hasValue(s)) {
        const i = e.getValue(s);
        i.liveStyle === !0 ? i.jump(o) : i.hasAnimated || i.set(o);
      } else {
        const i = e.getStaticValue(s);
        e.addValue(s, Ae(i !== void 0 ? i : o, { owner: e }));
      }
  }
  for (const s in n) t[s] === void 0 && e.removeValue(s);
  return t;
}
const sn = /* @__PURE__ */ new WeakMap(),
  Gu = [...Vi, ie, et],
  Ku = (e) => Gu.find(Li(e)),
  ta = [
    "AnimationStart",
    "AnimationComplete",
    "Update",
    "BeforeLayoutMeasure",
    "LayoutMeasure",
    "LayoutAnimationStart",
    "LayoutAnimationComplete",
  ],
  Yu = R1.length;
class Xu {
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
  constructor(
    {
      parent: t,
      props: n,
      presenceContext: r,
      reducedMotionConfig: s,
      blockInitialAnimation: o,
      visualState: a,
    },
    i = {}
  ) {
    (this.resolveKeyframes = (h, m, g, v) =>
      new this.KeyframeResolver(h, m, g, v, this)),
      (this.current = null),
      (this.children = /* @__PURE__ */ new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.values = /* @__PURE__ */ new Map()),
      (this.KeyframeResolver = B1),
      (this.features = {}),
      (this.valueSubscriptions = /* @__PURE__ */ new Map()),
      (this.prevMotionValues = {}),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection
          ));
      }),
      (this.scheduleRender = () => B.render(this.render, !1, !0));
    const { latestValues: c, renderState: f } = a;
    (this.latestValues = c),
      (this.baseTarget = { ...c }),
      (this.initialValues = n.initial ? { ...c } : {}),
      (this.renderState = f),
      (this.parent = t),
      (this.props = n),
      (this.presenceContext = r),
      (this.depth = t ? t.depth + 1 : 0),
      (this.reducedMotionConfig = s),
      (this.options = i),
      (this.blockInitialAnimation = !!o),
      (this.isControllingVariants = sr(n)),
      (this.isVariantNode = ai(n)),
      this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()),
      (this.manuallyAnimateOnMount = !!(t && t.current));
    const { willChange: d, ...u } = this.scrapeMotionValuesFromProps(
      n,
      {},
      this
    );
    for (const h in u) {
      const m = u[h];
      c[h] !== void 0 && se(m) && (m.set(c[h], !1), Gn(d) && d.add(h));
    }
  }
  mount(t) {
    (this.current = t),
      sn.set(t, this),
      this.projection && !this.projection.instance && this.projection.mount(t),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((n, r) => this.bindToMotionValue(r, n)),
      ts.current || Cl(),
      (this.shouldReduceMotion =
        this.reducedMotionConfig === "never"
          ? !1
          : this.reducedMotionConfig === "always"
          ? !0
          : Yn.current),
      process.env.NODE_ENV !== "production" &&
        vn(
          this.shouldReduceMotion !== !0,
          "You have Reduced Motion enabled on your device. Animations may not appear as expected."
        ),
      this.parent && this.parent.children.add(this),
      this.update(this.props, this.presenceContext);
  }
  unmount() {
    sn.delete(this.current),
      this.projection && this.projection.unmount(),
      Te(this.notifyUpdate),
      Te(this.render),
      this.valueSubscriptions.forEach((t) => t()),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent && this.parent.children.delete(this);
    for (const t in this.events) this.events[t].clear();
    for (const t in this.features) {
      const n = this.features[t];
      n && (n.unmount(), (n.isMounted = !1));
    }
    this.current = null;
  }
  bindToMotionValue(t, n) {
    const r = wt.has(t),
      s = n.on("change", (a) => {
        (this.latestValues[t] = a),
          this.props.onUpdate && B.preRender(this.notifyUpdate),
          r && this.projection && (this.projection.isTransformDirty = !0);
      }),
      o = n.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      s(), o(), n.owner && n.stop();
    });
  }
  sortNodePosition(t) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== t.type
      ? 0
      : this.sortInstanceNodePosition(this.current, t.current);
  }
  updateFeatures() {
    let t = "animation";
    for (t in Ht) {
      const n = Ht[t];
      if (!n) continue;
      const { isEnabled: r, Feature: s } = n;
      if (
        (!this.features[t] &&
          s &&
          r(this.props) &&
          (this.features[t] = new s(this)),
        this.features[t])
      ) {
        const o = this.features[t];
        o.isMounted ? o.update() : (o.mount(), (o.isMounted = !0));
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
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Y();
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
    (t.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = t),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = n);
    for (let r = 0; r < ta.length; r++) {
      const s = ta[r];
      this.propEventSubscriptions[s] &&
        (this.propEventSubscriptions[s](),
        delete this.propEventSubscriptions[s]);
      const o = "on" + s,
        a = t[o];
      a && (this.propEventSubscriptions[s] = this.on(s, a));
    }
    (this.prevMotionValues = Uu(
      this,
      this.scrapeMotionValuesFromProps(t, this.prevProps, this),
      this.prevMotionValues
    )),
      this.handleChildMotionValue && this.handleChildMotionValue();
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
    return this.isVariantNode
      ? this
      : this.parent
      ? this.parent.getClosestVariantNode()
      : void 0;
  }
  getVariantContext(t = !1) {
    if (t) return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const r = this.parent ? this.parent.getVariantContext() || {} : {};
      return (
        this.props.initial !== void 0 && (r.initial = this.props.initial), r
      );
    }
    const n = {};
    for (let r = 0; r < Yu; r++) {
      const s = R1[r],
        o = this.props[s];
      (nn(o) || o === !1) && (n[s] = o);
    }
    return n;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const n = this.getClosestVariantNode();
    if (n)
      return (
        n.variantChildren && n.variantChildren.add(t),
        () => n.variantChildren.delete(t)
      );
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, n) {
    const r = this.values.get(t);
    n !== r &&
      (r && this.removeValue(t),
      this.bindToMotionValue(t, n),
      this.values.set(t, n),
      (this.latestValues[t] = n.get()));
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const n = this.valueSubscriptions.get(t);
    n && (n(), this.valueSubscriptions.delete(t)),
      delete this.latestValues[t],
      this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, n) {
    if (this.props.values && this.props.values[t]) return this.props.values[t];
    let r = this.values.get(t);
    return (
      r === void 0 &&
        n !== void 0 &&
        ((r = Ae(n === null ? void 0 : n, { owner: this })),
        this.addValue(t, r)),
      r
    );
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t, n) {
    var r;
    let s =
      this.latestValues[t] !== void 0 || !this.current
        ? this.latestValues[t]
        : (r = this.getBaseTargetFromProps(this.props, t)) !== null &&
          r !== void 0
        ? r
        : this.readValueFromInstance(this.current, t, this.options);
    return (
      s != null &&
        (typeof s == "string" && (_i(s) || Ri(s))
          ? (s = parseFloat(s))
          : !Ku(s) && et.test(n) && (s = Bi(t, n)),
        this.setBaseTarget(t, se(s) ? s.get() : s)),
      se(s) ? s.get() : s
    );
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
      const a = k1(
        this.props,
        r,
        (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom
      );
      a && (s = a[t]);
    }
    if (r && s !== void 0) return s;
    const o = this.getBaseTargetFromProps(this.props, t);
    return o !== void 0 && !se(o)
      ? o
      : this.initialValues[t] !== void 0 && s === void 0
      ? void 0
      : this.baseTarget[t];
  }
  on(t, n) {
    return this.events[t] || (this.events[t] = new J1()), this.events[t].add(n);
  }
  notify(t, ...n) {
    this.events[t] && this.events[t].notify(...n);
  }
}
class bl extends Xu {
  constructor() {
    super(...arguments), (this.KeyframeResolver = Oi);
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
function Ju(e) {
  return window.getComputedStyle(e);
}
class El extends bl {
  constructor() {
    super(...arguments), (this.type = "html");
  }
  readValueFromInstance(t, n) {
    if (wt.has(n)) {
      const r = N1(n);
      return (r && r.default) || 0;
    } else {
      const r = Ju(t),
        s = (ci(n) ? r.getPropertyValue(n) : r[n]) || 0;
      return typeof s == "string" ? s.trim() : s;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: n }) {
    return ll(t, n);
  }
  build(t, n, r, s) {
    T1(t, n, r, s.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return Z1(t, n, r);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    se(t) &&
      (this.childSubscription = t.on("change", (n) => {
        this.current && (this.current.textContent = `${n}`);
      }));
  }
  renderInstance(t, n, r, s) {
    mi(t, n, r, s);
  }
}
class xl extends bl {
  constructor() {
    super(...arguments), (this.type = "svg"), (this.isSVGTag = !1);
  }
  getBaseTargetFromProps(t, n) {
    return t[n];
  }
  readValueFromInstance(t, n) {
    if (wt.has(n)) {
      const r = N1(n);
      return (r && r.default) || 0;
    }
    return (n = pi.has(n) ? n : E1(n)), t.getAttribute(n);
  }
  measureInstanceViewportBox() {
    return Y();
  }
  scrapeMotionValuesFromProps(t, n, r) {
    return gi(t, n, r);
  }
  build(t, n, r, s) {
    H1(t, n, r, this.isSVGTag, s.transformTemplate);
  }
  renderInstance(t, n, r, s) {
    vi(t, n, r, s);
  }
  mount(t) {
    (this.isSVGTag = A1(t.tagName)), super.mount(t);
  }
}
const Qu = (e, t) =>
    M1(e)
      ? new xl(t, { enableHardwareAcceleration: !1 })
      : new El(t, {
          allowProjection: e !== Xn,
          enableHardwareAcceleration: !0,
        }),
  e8 = {
    layout: {
      ProjectionNode: yl,
      MeasureLayout: ul,
    },
  },
  t8 = {
    ...j6,
    ...o5,
    ...Wu,
    ...e8,
  },
  Ie = /* @__PURE__ */ p4((e, t) => W4(e, t, t8, Qu));
function Sl() {
  const e = Z(!1);
  return (
    un(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    e
  );
}
function n8() {
  const e = Sl(),
    [t, n] = F(0),
    r = _e(() => {
      e.current && n(t + 1);
    }, [t]);
  return [_e(() => B.postRender(r), [r]), t];
}
class r8 extends A.Component {
  getSnapshotBeforeUpdate(t) {
    const n = this.props.childRef.current;
    if (n && t.isPresent && !this.props.isPresent) {
      const r = this.props.sizeRef.current;
      (r.height = n.offsetHeight || 0),
        (r.width = n.offsetWidth || 0),
        (r.top = n.offsetTop),
        (r.left = n.offsetLeft);
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function s8({ children: e, isPresent: t }) {
  const n = v1(),
    r = Z(null),
    s = Z({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
    }),
    { nonce: o } = X(er);
  return (
    p1(() => {
      const { width: a, height: i, top: c, left: f } = s.current;
      if (t || !r.current || !a || !i) return;
      r.current.dataset.motionPopId = n;
      const d = document.createElement("style");
      return (
        o && (d.nonce = o),
        document.head.appendChild(d),
        d.sheet &&
          d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${i}px !important;
            top: ${c}px !important;
            left: ${f}px !important;
          }
        `),
        () => {
          document.head.removeChild(d);
        }
      );
    }, [t]),
    me.jsx(r8, {
      isPresent: t,
      childRef: r,
      sizeRef: s,
      children: A.cloneElement(e, { ref: r }),
    })
  );
}
const Nr = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: s,
  presenceAffectsLayout: o,
  mode: a,
}) => {
  const i = mn(o8),
    c = v1(),
    f = Le(
      () => ({
        id: c,
        initial: t,
        isPresent: n,
        custom: s,
        onExitComplete: (d) => {
          i.set(d, !0);
          for (const u of i.values()) if (!u) return;
          r && r();
        },
        register: (d) => (i.set(d, !1), () => i.delete(d)),
      }),
      /**
       * If the presence of a child affects the layout of the components around it,
       * we want to make a new context value to ensure they get re-rendered
       * so they can detect that layout change.
       */
      o ? [Math.random()] : [n]
    );
  return (
    Le(() => {
      i.forEach((d, u) => i.set(u, !1));
    }, [n]),
    A.useEffect(() => {
      !n && !i.size && r && r();
    }, [n]),
    a === "popLayout" && (e = me.jsx(s8, { isPresent: n, children: e })),
    me.jsx(nr.Provider, { value: f, children: e })
  );
};
function o8() {
  return /* @__PURE__ */ new Map();
}
function a8(e) {
  return O(() => () => e(), []);
}
const ut = (e) => e.key || "";
function i8(e, t) {
  e.forEach((n) => {
    const r = ut(n);
    t.set(r, n);
  });
}
function l8(e) {
  const t = [];
  return (
    Se.forEach(e, (n) => {
      ht(n) && t.push(n);
    }),
    t
  );
}
const c8 = ({
  children: e,
  custom: t,
  initial: n = !0,
  onExitComplete: r,
  exitBeforeEnter: s,
  presenceAffectsLayout: o = !0,
  mode: a = "sync",
}) => {
  Ve(!s, "Replace exitBeforeEnter with mode='wait'");
  const i = X(_1).forceRender || n8()[0],
    c = Sl(),
    f = l8(e);
  let d = f;
  const u = Z(/* @__PURE__ */ new Map()).current,
    h = Z(d),
    m = Z(/* @__PURE__ */ new Map()).current,
    g = Z(!0);
  if (
    (un(() => {
      (g.current = !1), i8(f, m), (h.current = d);
    }),
    a8(() => {
      (g.current = !0), m.clear(), u.clear();
    }),
    g.current)
  )
    return me.jsx(me.Fragment, {
      children: d.map((y) =>
        me.jsx(
          Nr,
          {
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: o,
            mode: a,
            children: y,
          },
          ut(y)
        )
      ),
    });
  d = [...d];
  const v = h.current.map(ut),
    w = f.map(ut),
    b = v.length;
  for (let y = 0; y < b; y++) {
    const C = v[y];
    w.indexOf(C) === -1 && !u.has(C) && u.set(C, void 0);
  }
  return (
    a === "wait" && u.size && (d = []),
    u.forEach((y, C) => {
      if (w.indexOf(C) !== -1) return;
      const S = m.get(C);
      if (!S) return;
      const R = v.indexOf(C);
      let M = y;
      if (!M) {
        const T = () => {
          u.delete(C);
          const x = Array.from(m.keys()).filter((H) => !w.includes(H));
          if (
            (x.forEach((H) => m.delete(H)),
            (h.current = f.filter((H) => {
              const k = ut(H);
              return (
                // filter out the node exiting
                k === C || // filter out the leftover children
                x.includes(k)
              );
            })),
            !u.size)
          ) {
            if (c.current === !1) return;
            i(), r && r();
          }
        };
        (M = me.jsx(
          Nr,
          {
            isPresent: !1,
            onExitComplete: T,
            custom: t,
            presenceAffectsLayout: o,
            mode: a,
            children: S,
          },
          ut(S)
        )),
          u.set(C, M);
      }
      d.splice(R, 0, M);
    }),
    (d = d.map((y) => {
      const C = y.key;
      return u.has(C)
        ? y
        : me.jsx(
            Nr,
            { isPresent: !0, presenceAffectsLayout: o, mode: a, children: y },
            ut(y)
          );
    })),
    process.env.NODE_ENV !== "production" &&
      a === "wait" &&
      d.length > 1 &&
      console.warn(
        `You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`
      ),
    me.jsx(me.Fragment, { children: u.size ? d : d.map((y) => We(y)) })
  );
};
function d1(e) {
  const t = mn(() => Ae(e)),
    { isStatic: n } = X(er);
  if (n) {
    const [, r] = F(e);
    O(() => t.on("change", r), []);
  }
  return t;
}
const u8 = (e) => e && typeof e == "object" && e.mix,
  d8 = (e) => (u8(e) ? e.mix : void 0);
function f8(...e) {
  const t = !Array.isArray(e[0]),
    n = t ? 0 : -1,
    r = e[0 + n],
    s = e[1 + n],
    o = e[2 + n],
    a = e[3 + n],
    i = I1(s, o, {
      mixer: d8(o[0]),
      ...a,
    });
  return t ? i(r) : i;
}
function Rl(e, t) {
  const n = d1(t()),
    r = () => n.set(t());
  return (
    r(),
    un(() => {
      const s = () => B.preRender(r, !1, !0),
        o = e.map((a) => a.on("change", s));
      return () => {
        o.forEach((a) => a()), Te(r);
      };
    }),
    n
  );
}
function h8(e) {
  (Yt.current = []), e();
  const t = Rl(Yt.current, e);
  return (Yt.current = void 0), t;
}
function on(e, t, n, r) {
  if (typeof e == "function") return h8(e);
  const s = typeof t == "function" ? t : f8(t, n, r);
  return Array.isArray(e) ? na(e, s) : na([e], ([o]) => s(o));
}
function na(e, t) {
  const n = mn(() => []);
  return Rl(e, () => {
    n.length = 0;
    const r = e.length;
    for (let s = 0; s < r; s++) n[s] = e[s].get();
    return t(n);
  });
}
function _l(e, t, n) {
  p1(() => e.on(t, n), [e, t, n]);
}
function ns(e, t, n) {
  var r;
  if (typeof e == "string") {
    let s = document;
    t &&
      (Ve(!!t.current, "Scope provided, but no element detected."),
      (s = t.current)),
      n
        ? (((r = n[e]) !== null && r !== void 0) ||
            (n[e] = s.querySelectorAll(e)),
          (e = n[e]))
        : (e = s.querySelectorAll(e));
  } else e instanceof Element && (e = [e]);
  return Array.from(e || []);
}
const On = /* @__PURE__ */ new WeakMap();
let Ye;
function m8(e, t) {
  if (t) {
    const { inlineSize: n, blockSize: r } = t[0];
    return { width: n, height: r };
  } else
    return e instanceof SVGElement && "getBBox" in e
      ? e.getBBox()
      : {
          width: e.offsetWidth,
          height: e.offsetHeight,
        };
}
function p8({ target: e, contentRect: t, borderBoxSize: n }) {
  var r;
  (r = On.get(e)) === null ||
    r === void 0 ||
    r.forEach((s) => {
      s({
        target: e,
        contentSize: t,
        get size() {
          return m8(e, n);
        },
      });
    });
}
function v8(e) {
  e.forEach(p8);
}
function g8() {
  typeof ResizeObserver > "u" || (Ye = new ResizeObserver(v8));
}
function w8(e, t) {
  Ye || g8();
  const n = ns(e);
  return (
    n.forEach((r) => {
      let s = On.get(r);
      s || ((s = /* @__PURE__ */ new Set()), On.set(r, s)),
        s.add(t),
        Ye == null || Ye.observe(r);
    }),
    () => {
      n.forEach((r) => {
        const s = On.get(r);
        s == null || s.delete(t),
          (s != null && s.size) || Ye == null || Ye.unobserve(r);
      });
    }
  );
}
const Nn = /* @__PURE__ */ new Set();
let Qt;
function y8() {
  (Qt = () => {
    const e = {
        width: window.innerWidth,
        height: window.innerHeight,
      },
      t = {
        target: window,
        size: e,
        contentSize: e,
      };
    Nn.forEach((n) => n(t));
  }),
    window.addEventListener("resize", Qt);
}
function C8(e) {
  return (
    Nn.add(e),
    Qt || y8(),
    () => {
      Nn.delete(e), !Nn.size && Qt && (Qt = void 0);
    }
  );
}
function b8(e, t) {
  return typeof e == "function" ? C8(e) : w8(e, t);
}
const E8 = 50,
  ra = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0,
  }),
  x8 = () => ({
    time: 0,
    x: ra(),
    y: ra(),
  }),
  S8 = {
    x: {
      length: "Width",
      position: "Left",
    },
    y: {
      length: "Height",
      position: "Top",
    },
  };
function sa(e, t, n, r) {
  const s = n[t],
    { length: o, position: a } = S8[t],
    i = s.current,
    c = n.time;
  (s.current = e[`scroll${a}`]),
    (s.scrollLength = e[`scroll${o}`] - e[`client${o}`]),
    (s.offset.length = 0),
    (s.offset[0] = 0),
    (s.offset[1] = s.scrollLength),
    (s.progress = vt(0, s.scrollLength, s.current));
  const f = r - c;
  s.velocity = f > E8 ? 0 : $1(s.current - i, f);
}
function R8(e, t, n) {
  sa(e, "x", t, n), sa(e, "y", t, n), (t.time = n);
}
function _8(e, t) {
  const n = { x: 0, y: 0 };
  let r = e;
  for (; r && r !== t; )
    if (r instanceof HTMLElement)
      (n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent);
    else if (r.tagName === "svg") {
      const s = r.getBoundingClientRect();
      r = r.parentElement;
      const o = r.getBoundingClientRect();
      (n.x += s.left - o.left), (n.y += s.top - o.top);
    } else if (r instanceof SVGGraphicsElement) {
      const { x: s, y: o } = r.getBBox();
      (n.x += s), (n.y += o);
      let a = null,
        i = r.parentNode;
      for (; !a; ) i.tagName === "svg" && (a = i), (i = r.parentNode);
      r = a;
    } else break;
  return n;
}
const M8 = {
    Enter: [
      [0, 1],
      [1, 1],
    ],
    Exit: [
      [0, 0],
      [1, 0],
    ],
    Any: [
      [1, 0],
      [0, 1],
    ],
    All: [
      [0, 0],
      [1, 1],
    ],
  },
  f1 = {
    start: 0,
    center: 0.5,
    end: 1,
  };
function oa(e, t, n = 0) {
  let r = 0;
  if ((e in f1 && (e = f1[e]), typeof e == "string")) {
    const s = parseFloat(e);
    e.endsWith("px")
      ? (r = s)
      : e.endsWith("%")
      ? (e = s / 100)
      : e.endsWith("vw")
      ? (r = (s / 100) * document.documentElement.clientWidth)
      : e.endsWith("vh")
      ? (r = (s / 100) * document.documentElement.clientHeight)
      : (e = s);
  }
  return typeof e == "number" && (r = t * e), n + r;
}
const L8 = [0, 0];
function V8(e, t, n, r) {
  let s = Array.isArray(e) ? e : L8,
    o = 0,
    a = 0;
  return (
    typeof e == "number"
      ? (s = [e, e])
      : typeof e == "string" &&
        ((e = e.trim()),
        e.includes(" ") ? (s = e.split(" ")) : (s = [e, f1[e] ? e : "0"])),
    (o = oa(s[0], n, r)),
    (a = oa(s[1], t)),
    o - a
  );
}
const T8 = { x: 0, y: 0 };
function P8(e) {
  return "getBBox" in e && e.tagName !== "svg"
    ? e.getBBox()
    : { width: e.clientWidth, height: e.clientHeight };
}
function H8(e, t, n) {
  const { offset: r = M8.All } = n,
    { target: s = e, axis: o = "y" } = n,
    a = o === "y" ? "height" : "width",
    i = s !== e ? _8(s, e) : T8,
    c = s === e ? { width: e.scrollWidth, height: e.scrollHeight } : P8(s),
    f = {
      width: e.clientWidth,
      height: e.clientHeight,
    };
  t[o].offset.length = 0;
  let d = !t[o].interpolate;
  const u = r.length;
  for (let h = 0; h < u; h++) {
    const m = V8(r[h], f[a], c[a], i[o]);
    !d && m !== t[o].interpolatorOffsets[h] && (d = !0), (t[o].offset[h] = m);
  }
  d &&
    ((t[o].interpolate = I1(t[o].offset, W1(r))),
    (t[o].interpolatorOffsets = [...t[o].offset])),
    (t[o].progress = t[o].interpolate(t[o].current));
}
function A8(e, t = e, n) {
  if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
    let r = t;
    for (; r && r !== e; )
      (n.x.targetOffset += r.offsetLeft),
        (n.y.targetOffset += r.offsetTop),
        (r = r.offsetParent);
  }
  (n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
    (n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
    (n.x.containerLength = e.clientWidth),
    (n.y.containerLength = e.clientHeight),
    process.env.NODE_ENV !== "production" &&
      e &&
      t &&
      t !== e &&
      vn(
        getComputedStyle(e).position !== "static",
        "Please ensure that the container has a non-static position, like 'relative', 'fixed', or 'absolute' to ensure scroll offset is calculated correctly."
      );
}
function Z8(e, t, n, r = {}) {
  return {
    measure: () => A8(e, r.target, n),
    update: (s) => {
      R8(e, n, s), (r.offset || r.target) && H8(e, n, r);
    },
    notify: () => t(n),
  };
}
const qt = /* @__PURE__ */ new WeakMap(),
  aa = /* @__PURE__ */ new WeakMap(),
  $r = /* @__PURE__ */ new WeakMap(),
  ia = (e) => (e === document.documentElement ? window : e);
function k8(e, { container: t = document.documentElement, ...n } = {}) {
  let r = $r.get(t);
  r || ((r = /* @__PURE__ */ new Set()), $r.set(t, r));
  const s = x8(),
    o = Z8(t, e, s, n);
  if ((r.add(o), !qt.has(t))) {
    const i = () => {
        for (const h of r) h.measure();
      },
      c = () => {
        for (const h of r) h.update(re.timestamp);
      },
      f = () => {
        for (const h of r) h.notify();
      },
      d = () => {
        B.read(i, !1, !0), B.read(c, !1, !0), B.update(f, !1, !0);
      };
    qt.set(t, d);
    const u = ia(t);
    window.addEventListener("resize", d, { passive: !0 }),
      t !== document.documentElement && aa.set(t, b8(t, d)),
      u.addEventListener("scroll", d, { passive: !0 });
  }
  const a = qt.get(t);
  return (
    B.read(a, !1, !0),
    () => {
      var i;
      Te(a);
      const c = $r.get(t);
      if (!c || (c.delete(o), c.size)) return;
      const f = qt.get(t);
      qt.delete(t),
        f &&
          (ia(t).removeEventListener("scroll", f),
          (i = aa.get(t)) === null || i === void 0 || i(),
          window.removeEventListener("resize", f));
    }
  );
}
function la(e, t) {
  gt(
    !!(!t || t.current),
    `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`
  );
}
const D8 = () => ({
  scrollX: Ae(0),
  scrollY: Ae(0),
  scrollXProgress: Ae(0),
  scrollYProgress: Ae(0),
});
function Ml({ container: e, target: t, layoutEffect: n = !0, ...r } = {}) {
  const s = mn(D8);
  return (
    (n ? un : O)(
      () => (
        la("target", t),
        la("container", e),
        k8(
          ({ x: a, y: i }) => {
            s.scrollX.set(a.current),
              s.scrollXProgress.set(a.progress),
              s.scrollY.set(i.current),
              s.scrollYProgress.set(i.progress);
          },
          {
            ...r,
            container: (e == null ? void 0 : e.current) || void 0,
            target: (t == null ? void 0 : t.current) || void 0,
          }
        )
      ),
      [e, t, JSON.stringify(r.offset)]
    ),
    s
  );
}
function B8() {
  !ts.current && Cl();
  const [e] = F(Yn.current);
  return (
    process.env.NODE_ENV !== "production" &&
      vn(
        e !== !0,
        "You have Reduced Motion enabled on your device. Animations may not appear as expected."
      ),
    e
  );
}
function O8(e) {
  return typeof e == "object" && !Array.isArray(e);
}
function N8(e) {
  const t = {
      presenceContext: null,
      props: {},
      visualState: {
        renderState: {
          transform: {},
          transformOrigin: {},
          style: {},
          vars: {},
          attrs: {},
        },
        latestValues: {},
      },
    },
    n = pl(e)
      ? new xl(t, {
          enableHardwareAcceleration: !1,
        })
      : new El(t, {
          enableHardwareAcceleration: !0,
        });
  n.mount(e), sn.set(e, n);
}
function $8(e, t = 100) {
  const n = z1({ keyframes: [0, t], ...e }),
    r = Math.min(Ji(n), o1);
  return {
    type: "keyframes",
    ease: (s) => n.next(r * s).value / t,
    duration: De(r),
  };
}
function ca(e, t, n, r) {
  var s;
  return typeof t == "number"
    ? t
    : t.startsWith("-") || t.startsWith("+")
    ? Math.max(0, e + parseFloat(t))
    : t === "<"
    ? n
    : (s = r.get(t)) !== null && s !== void 0
    ? s
    : e;
}
const z8 = (e, t, n) => {
  const r = t - e;
  return ((((n - e) % r) + r) % r) + e;
};
function F8(e, t) {
  return qi(e) ? e[z8(0, e.length, t)] : e;
}
function j8(e, t, n) {
  for (let r = 0; r < e.length; r++) {
    const s = e[r];
    s.at > t && s.at < n && (lr(e, s), r--);
  }
}
function q8(e, t, n, r, s, o) {
  j8(e, s, o);
  for (let a = 0; a < t.length; a++)
    e.push({
      value: t[a],
      at: W(s, o, r[a]),
      easing: F8(n, a),
    });
}
function I8(e, t) {
  return e.at === t.at
    ? e.value === null
      ? 1
      : t.value === null
      ? -1
      : 0
    : e.at - t.at;
}
const W8 = "easeInOut";
function U8(e, { defaultTransition: t = {}, ...n } = {}, r) {
  const s = t.duration || 0.3,
    o = /* @__PURE__ */ new Map(),
    a = /* @__PURE__ */ new Map(),
    i = {},
    c = /* @__PURE__ */ new Map();
  let f = 0,
    d = 0,
    u = 0;
  for (let h = 0; h < e.length; h++) {
    const m = e[h];
    if (typeof m == "string") {
      c.set(m, d);
      continue;
    } else if (!Array.isArray(m)) {
      c.set(m.name, ca(d, m.at, f, c));
      continue;
    }
    let [g, v, w = {}] = m;
    w.at !== void 0 && (d = ca(d, w.at, f, c));
    let b = 0;
    const y = (C, S, R, M = 0, T = 0) => {
      const x = G8(C),
        { delay: H = 0, times: k = W1(x), type: te = "keyframes", ...le } = S;
      let { ease: I = t.ease || "easeOut", duration: G } = S;
      const j = typeof H == "function" ? H(M, T) : H,
        ne = x.length;
      if (ne <= 2 && te === "spring") {
        let Ue = 100;
        if (ne === 2 && X8(x)) {
          const yt = x[1] - x[0];
          Ue = Math.abs(yt);
        }
        const rt = { ...le };
        G !== void 0 && (rt.duration = ke(G));
        const st = $8(rt, Ue);
        (I = st.ease), (G = st.duration);
      }
      G ?? (G = s);
      const J = d + j,
        be = J + G;
      k.length === 1 && k[0] === 0 && (k[1] = 1);
      const nt = k.length - x.length;
      nt > 0 && Xi(k, nt),
        x.length === 1 && x.unshift(null),
        q8(R, x, I, k, J, be),
        (b = Math.max(j + G, b)),
        (u = Math.max(be, u));
    };
    if (se(g)) {
      const C = ua(g, a);
      y(v, w, da("default", C));
    } else {
      const C = ns(g, r, i),
        S = C.length;
      for (let R = 0; R < S; R++) {
        (v = v), (w = w);
        const M = C[R],
          T = ua(M, a);
        for (const x in v) y(v[x], K8(w, x), da(x, T), R, S);
      }
    }
    (f = d), (d += b);
  }
  return (
    a.forEach((h, m) => {
      for (const g in h) {
        const v = h[g];
        v.sort(I8);
        const w = [],
          b = [],
          y = [];
        for (let S = 0; S < v.length; S++) {
          const { at: R, value: M, easing: T } = v[S];
          w.push(M), b.push(vt(0, u, R)), y.push(T || "easeOut");
        }
        b[0] !== 0 && (b.unshift(0), w.unshift(w[0]), y.unshift(W8)),
          b[b.length - 1] !== 1 && (b.push(1), w.push(null)),
          o.has(m) ||
            o.set(m, {
              keyframes: {},
              transition: {},
            });
        const C = o.get(m);
        (C.keyframes[g] = w),
          (C.transition[g] = {
            ...t,
            duration: u,
            ease: y,
            times: b,
            ...n,
          });
      }
    }),
    o
  );
}
function ua(e, t) {
  return !t.has(e) && t.set(e, {}), t.get(e);
}
function da(e, t) {
  return t[e] || (t[e] = []), t[e];
}
function G8(e) {
  return Array.isArray(e) ? e : [e];
}
function K8(e, t) {
  return e[t]
    ? {
        ...e,
        ...e[t],
      }
    : { ...e };
}
const Y8 = (e) => typeof e == "number",
  X8 = (e) => e.every(Y8);
function Ll(e, t, n, r) {
  const s = ns(e, r),
    o = s.length;
  Ve(!!o, "No valid element provided.");
  const a = [];
  for (let i = 0; i < o; i++) {
    const c = s[i];
    sn.has(c) || N8(c);
    const f = sn.get(c),
      d = { ...n };
    typeof d.delay == "function" && (d.delay = d.delay(i, o)),
      a.push(...Q1(f, { ...t, transition: d }, {}));
  }
  return new K1(a);
}
const J8 = (e) => Array.isArray(e) && Array.isArray(e[0]);
function Q8(e, t, n) {
  const r = [];
  return (
    U8(e, t, n).forEach(({ keyframes: o, transition: a }, i) => {
      let c;
      se(i) ? (c = es(i, o.default, a.default)) : (c = Ll(i, o, a)), r.push(c);
    }),
    new K1(r)
  );
}
const e7 = (e) => {
    function t(n, r, s) {
      let o;
      return (
        J8(n)
          ? (o = Q8(n, r, e))
          : O8(r)
          ? (o = Ll(n, r, s, e))
          : (o = es(n, r, s)),
        e && e.animations.push(o),
        o
      );
    }
    return t;
  },
  fa = e7(),
  t7 = typeof window < "u" ? l.useLayoutEffect : () => {};
function h1(...e) {
  return (...t) => {
    for (let n of e) typeof n == "function" && n(...t);
  };
}
let It = /* @__PURE__ */ new Map(),
  ha = /* @__PURE__ */ new Set();
function ma() {
  if (typeof window > "u") return;
  let e = (n) => {
      let r = It.get(n.target);
      r ||
        ((r = /* @__PURE__ */ new Set()),
        It.set(n.target, r),
        n.target.addEventListener("transitioncancel", t)),
        r.add(n.propertyName);
    },
    t = (n) => {
      let r = It.get(n.target);
      if (
        r &&
        (r.delete(n.propertyName),
        r.size === 0 &&
          (n.target.removeEventListener("transitioncancel", t),
          It.delete(n.target)),
        It.size === 0)
      ) {
        for (let s of ha) s();
        ha.clear();
      }
    };
  document.body.addEventListener("transitionrun", e),
    document.body.addEventListener("transitionend", t);
}
typeof document < "u" &&
  (document.readyState !== "loading"
    ? ma()
    : document.addEventListener("DOMContentLoaded", ma));
function Vl(e) {
  for (pa(e) && (e = e.parentElement); e && !pa(e); ) e = e.parentElement;
  return e || document.scrollingElement || document.documentElement;
}
function pa(e) {
  let t = window.getComputedStyle(e);
  return /(auto|scroll)/.test(t.overflow + t.overflowX + t.overflowY);
}
function rs(e) {
  var t;
  return typeof window < "u" && window.navigator != null
    ? e.test(
        ((t = window.navigator.userAgentData) === null || t === void 0
          ? void 0
          : t.platform) || window.navigator.platform
      )
    : !1;
}
function n7() {
  return rs(/^Mac/i);
}
function r7() {
  return rs(/^iPhone/i);
}
function s7() {
  return (
    rs(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
    (n7() && navigator.maxTouchPoints > 1)
  );
}
function o7() {
  return r7() || s7();
}
function Re() {
  return (
    (Re = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Re.apply(this, arguments)
  );
}
function Bt(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    s,
    o;
  for (o = 0; o < r.length; o++)
    (s = r[o]), !(t.indexOf(s) >= 0) && (n[s] = e[s]);
  return n;
}
var va = "calc(100% - env(safe-area-inset-top) - 34px)",
  Tl = typeof window > "u",
  a7 = {
    ease: "easeOut",
    duration: 0.2,
  },
  i7 = {
    ease: "linear",
    duration: 0.01,
  },
  l7 = 0.6,
  c7 = 500;
function ga(e, t) {
  for (var n = e[0], r = Math.abs(e[0] - t), s = 1; s < e.length; s++) {
    var o = Math.abs(e[s] - t);
    o < r && ((n = e[s]), (r = o));
  }
  return n;
}
function u7(e) {
  var t = document.querySelector("body"),
    n = document.querySelector("#" + e);
  if (n) {
    var r = 24,
      s = window.innerHeight,
      o = (s - r) / s;
    (t.style.backgroundColor = "#000"),
      (n.style.overflow = "hidden"),
      (n.style.willChange = "transform"),
      (n.style.transition =
        "transform 200ms ease-in-out, border-radius 200ms linear"),
      (n.style.transform =
        "translateY(calc(env(safe-area-inset-top) + " +
        r / 2 +
        "px)) scale(" +
        o +
        ")"),
      (n.style.borderTopRightRadius = "10px"),
      (n.style.borderTopLeftRadius = "10px");
  }
}
function wa(e) {
  var t = document.querySelector("body"),
    n = document.getElementById(e);
  function r() {
    n.style.removeProperty("overflow"),
      n.style.removeProperty("will-change"),
      n.style.removeProperty("transition"),
      t.style.removeProperty("background-color"),
      n.removeEventListener("transitionend", r);
  }
  n &&
    (n.style.removeProperty("border-top-right-radius"),
    n.style.removeProperty("border-top-left-radius"),
    n.style.removeProperty("transform"),
    n.addEventListener("transitionend", r));
}
function d7(e) {
  for (var t = 0; t < e.length; t++) if (e[t + 1] > e[t]) return !1;
  return !0;
}
function ya(e) {
  var t = e.snapTo,
    n = e.sheetHeight;
  return (
    t < 0 &&
      console.warn(
        "Snap point is out of bounds. Sheet height is " +
          n +
          " but snap point is " +
          (n + Math.abs(t)) +
          "."
      ),
    Math.max(Math.round(t), 0)
  );
}
function ss(e) {
  return function (t) {
    e.forEach(function (n) {
      typeof n == "function" ? n(t) : n && (n.current = t);
    });
  };
}
function f7() {
  return typeof window > "u"
    ? !1
    : "ontouchstart" in window || navigator.maxTouchPoints > 0;
}
var os = Tl ? O : m1;
function h7(e, t) {
  var n = Pl(e);
  O(
    function () {
      t && !n && e ? u7(t) : t && !e && n && wa(t);
    },
    [e, n]
  ),
    O(
      function () {
        return function () {
          t && e && wa(t);
        };
      },
      [e]
    );
}
function m7(e, t) {
  var n = Pl(e),
    r = Z(!1),
    s = _e(
      function () {
        r.current
          ? (t.current.onCloseEnd == null || t.current.onCloseEnd(),
            (r.current = !1))
          : (t.current.onOpenEnd == null || t.current.onOpenEnd(),
            (r.current = !0));
      },
      [e, n]
    );
  return (
    O(
      function () {
        !n && e
          ? t.current.onOpenStart == null || t.current.onOpenStart()
          : !e &&
            n &&
            (t.current.onCloseStart == null || t.current.onCloseStart());
      },
      [e, n]
    ),
    {
      handleAnimationComplete: s,
    }
  );
}
function p7() {
  var e = F(0),
    t = e[0],
    n = e[1];
  return (
    os(function () {
      var r = function () {
        return n(window.innerHeight);
      };
      return (
        window.addEventListener("resize", r),
        r(),
        function () {
          return window.removeEventListener("resize", r);
        }
      );
    }, []),
    t
  );
}
function Pl(e) {
  var t = Z();
  return (
    O(function () {
      t.current = e;
    }),
    t.current
  );
}
function Ca(e) {
  var t = Z();
  return (
    os(function () {
      t.current = e;
    }),
    _e(function () {
      for (
        var n = t.current, r = arguments.length, s = new Array(r), o = 0;
        o < r;
        o++
      )
        s[o] = arguments[o];
      return n == null ? void 0 : n.apply(void 0, s);
    }, [])
  );
}
var v7 = {
  bottom: 0,
  top: 0,
  left: 0,
  right: 0,
};
function Hl() {
  var e = Z(null),
    t = _e(function () {
      return v7;
    }, []);
  return {
    constraintsRef: e,
    onMeasureDragConstraints: t,
  };
}
var Al = /* @__PURE__ */ Me(void 0),
  cr = function () {
    var t = X(Al);
    if (!t) throw Error("Sheet context error");
    return t;
  },
  Zl = /* @__PURE__ */ Me(void 0);
function g7(e) {
  var t = e.children,
    n = cr(),
    r = F(!!n.disableDrag),
    s = r[0],
    o = r[1];
  function a() {
    n.disableDrag || o(!1);
  }
  function i() {
    s || o(!0);
  }
  return $(
    Zl.Provider,
    {
      value: {
        disableDrag: s,
        setDragEnabled: a,
        setDragDisabled: i,
      },
    },
    t
  );
}
var kl = function () {
    var t = X(Zl);
    if (!t) throw Error("Sheet scroller context error");
    return t;
  },
  zr = typeof window < "u" && window.visualViewport,
  w7 = /* @__PURE__ */ new Set([
    "checkbox",
    "radio",
    "range",
    "color",
    "file",
    "image",
    "button",
    "submit",
    "reset",
  ]),
  Hn = 0,
  Fr;
function y7(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.isDisabled;
  t7(
    function () {
      if (!n)
        return (
          Hn++,
          Hn === 1 && (o7() ? (Fr = b7()) : (Fr = C7())),
          function () {
            Hn--, Hn === 0 && Fr();
          }
        );
    },
    [n]
  );
}
function C7() {
  return h1(
    en(
      document.documentElement,
      "paddingRight",
      window.innerWidth - document.documentElement.clientWidth + "px"
    ),
    en(document.documentElement, "overflow", "hidden")
  );
}
function b7() {
  var e,
    t = 0,
    n = function (h) {
      (e = Vl(h.target)),
        !(e === document.documentElement && e === document.body) &&
          (t = h.changedTouches[0].pageY);
    },
    r = function (h) {
      if (e === document.documentElement || e === document.body) {
        h.preventDefault();
        return;
      }
      var m = h.changedTouches[0].pageY,
        g = e.scrollTop,
        v = e.scrollHeight - e.clientHeight;
      v !== 0 &&
        (((g <= 0 && m > t) || (g >= v && m < t)) && h.preventDefault(),
        (t = m));
    },
    s = function (h) {
      var m = h.target;
      Ea(m) &&
        m !== document.activeElement &&
        (h.preventDefault(),
        (m.style.transform = "translateY(-2000px)"),
        m.focus(),
        requestAnimationFrame(function () {
          m.style.transform = "";
        }));
    },
    o = function (h) {
      var m = h.target;
      Ea(m) &&
        ((m.style.transform = "translateY(-2000px)"),
        requestAnimationFrame(function () {
          (m.style.transform = ""),
            zr &&
              (zr.height < window.innerHeight
                ? requestAnimationFrame(function () {
                    ba(m);
                  })
                : zr.addEventListener(
                    "resize",
                    function () {
                      return ba(m);
                    },
                    {
                      once: !0,
                    }
                  ));
        }));
    },
    a = function () {
      window.scrollTo(0, 0);
    },
    i = window.pageXOffset,
    c = window.pageYOffset,
    f = h1(
      en(
        document.documentElement,
        "paddingRight",
        window.innerWidth - document.documentElement.clientWidth + "px"
      ),
      en(document.documentElement, "overflow", "hidden"),
      en(document.body, "marginTop", "-" + c + "px")
    );
  window.scrollTo(0, 0);
  var d = h1(
    Wt(document, "touchstart", n, {
      passive: !1,
      capture: !0,
    }),
    Wt(document, "touchmove", r, {
      passive: !1,
      capture: !0,
    }),
    Wt(document, "touchend", s, {
      passive: !1,
      capture: !0,
    }),
    Wt(document, "focus", o, !0),
    Wt(window, "scroll", a)
  );
  return function () {
    f(), d(), window.scrollTo(i, c);
  };
}
function en(e, t, n) {
  var r = e.style[t];
  return (
    (e.style[t] = n),
    function () {
      e.style[t] = r;
    }
  );
}
function Wt(e, t, n, r) {
  return (
    e.addEventListener(t, n, r),
    function () {
      e.removeEventListener(t, n, r);
    }
  );
}
function ba(e) {
  for (
    var t = document.scrollingElement || document.documentElement;
    e && e !== t;

  ) {
    var n = Vl(e);
    if (n !== document.documentElement && n !== document.body && n !== e) {
      var r = n.getBoundingClientRect().top,
        s = e.getBoundingClientRect().top;
      s > r + e.clientHeight && (n.scrollTop += s - r);
    }
    e = n.parentElement;
  }
}
function Ea(e) {
  return (
    (e instanceof HTMLInputElement && !w7.has(e.type)) ||
    e instanceof HTMLTextAreaElement ||
    (e instanceof HTMLElement && e.isContentEditable)
  );
}
var Fe = {
    wrapper: {
      position: "fixed",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      overflow: "hidden",
      pointerEvents: "none",
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
      border: "none",
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
      pointerEvents: "auto",
    },
    headerWrapper: {
      width: "100%",
    },
    header: {
      height: "40px",
      width: "100%",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    indicator: {
      width: "18px",
      height: "4px",
      borderRadius: "99px",
      backgroundColor: "#ddd",
    },
    content: {
      flexGrow: 1,
      display: "flex",
      flexDirection: "column",
      minHeight: "0px",
      position: "relative",
    },
    scroller: {
      height: "100%",
      overflowY: "auto",
    },
  },
  E7 = [
    "onOpenStart",
    "onOpenEnd",
    "onClose",
    "onCloseStart",
    "onCloseEnd",
    "onSnap",
    "children",
    "disableScrollLocking",
    "isOpen",
    "snapPoints",
    "rootId",
    "mountPoint",
    "style",
    "detent",
    "initialSnap",
    "disableDrag",
    "prefersReducedMotion",
    "tweenConfig",
  ],
  x7 = /* @__PURE__ */ oe(function (e, t) {
    var n = e.onOpenStart,
      r = e.onOpenEnd,
      s = e.onClose,
      o = e.onCloseStart,
      a = e.onCloseEnd,
      i = e.onSnap,
      c = e.children,
      f = e.disableScrollLocking,
      d = f === void 0 ? !1 : f,
      u = e.isOpen,
      h = e.snapPoints,
      m = e.rootId,
      g = e.mountPoint,
      v = e.style,
      w = e.detent,
      b = w === void 0 ? "full-height" : w,
      y = e.initialSnap,
      C = y === void 0 ? 0 : y,
      S = e.disableDrag,
      R = S === void 0 ? !1 : S,
      M = e.prefersReducedMotion,
      T = M === void 0 ? !1 : M,
      x = e.tweenConfig,
      H = x === void 0 ? a7 : x,
      k = Bt(e, E7),
      te = Z(null),
      le = d1(0),
      I = p7(),
      G = B8(),
      j = !!(T || G),
      ne = Re(
        {
          type: "tween",
        },
        j ? i7 : H
      ),
      J = d1(0),
      be = on(J, function (U) {
        return U >= I ? -1 : 9999999;
      }),
      nt = on(J, function (U) {
        return U >= I ? "hidden" : "visible";
      }),
      Ue = Z({
        onOpenStart: n,
        onOpenEnd: r,
        onCloseStart: o,
        onCloseEnd: a,
      });
    os(function () {
      Ue.current = {
        onOpenStart: n,
        onOpenEnd: r,
        onCloseStart: o,
        onCloseEnd: a,
      };
    }),
      h &&
        ((h = h.map(function (U) {
          return U > 0 && U <= 1 ? Math.round(U * I) : U < 0 ? I + U : U;
        })),
        console.assert(
          d7(h) || I === 0,
          "Snap points need to be in descending order got: [" + h + "]"
        ));
    var rt = Ca(function (U, fe) {
        var Ee = fe.delta,
          ve = J.getVelocity();
        ve > 0 && le.set(10),
          ve < 0 && le.set(-10),
          J.set(Math.max(J.get() + Ee.y, 0));
      }),
      st = Ca(function (U, fe) {
        var Ee = fe.velocity;
        if (Ee.y > c7) s();
        else {
          var ve = te.current,
            he = ve.getBoundingClientRect().height,
            ot = J.get(),
            Pe = 0;
          if (h) {
            var Ot = h.map(function (yn) {
              return he - Math.min(yn, he);
            });
            b === "content-height" && !Ot.includes(0) && Ot.unshift(0),
              (Pe = ga(Ot, ot));
          } else ot / he > l7 && (Pe = he);
          if (
            ((Pe = ya({
              snapTo: Pe,
              sheetHeight: he,
            })),
            fa(J, Pe, ne),
            h && i)
          ) {
            var dr = Math.abs(Math.round(h[0] - Pe)),
              Ct = h.indexOf(ga(h, dr));
            i(Ct);
          }
          var bt = Math.round(he),
            wn = Pe >= bt;
          wn && s();
        }
        le.set(0);
      });
    O(
      function () {
        if (!(!h || !i)) {
          var U = u ? C : h.length - 1;
          i(U);
        }
      },
      [u]
    ),
      o2(t, function () {
        return {
          y: J,
          snapTo: function (fe) {
            var Ee = te.current;
            if (h && h[fe] !== void 0 && Ee !== null) {
              var ve = Ee.getBoundingClientRect().height,
                he = h[fe],
                ot = ya({
                  snapTo: ve - he,
                  sheetHeight: ve,
                });
              fa(J, ot, ne), i && i(fe), ot >= ve && s();
            }
          },
        };
      }),
      h7(u, m),
      y7({
        isDisabled: d === !0 || !u,
      });
    var yt = Le(
        function () {
          var U = {
            drag: "y",
            dragElastic: 0,
            dragMomentum: !1,
            dragPropagation: !1,
            onDrag: rt,
            onDragEnd: st,
          };
          return R ? void 0 : U;
        },
        [R]
      ),
      ur = {
        y: J,
        sheetRef: te,
        isOpen: u,
        initialSnap: C,
        snapPoints: h,
        detent: b,
        indicatorRotation: le,
        callbacks: Ue,
        dragProps: yt,
        windowHeight: I,
        animationOptions: ne,
        reduceMotion: j,
        disableDrag: R,
      },
      gn = $(
        Al.Provider,
        {
          value: ur,
        },
        $(
          Ie.div,
          Object.assign({}, k, {
            ref: t,
            style: Re(
              {},
              Fe.wrapper,
              {
                zIndex: be,
                visibility: nt,
              },
              v
            ),
          }),
          $(
            c8,
            null,
            u
              ? $(
                  g7,
                  null,
                  Se.map(c, function (U, fe) {
                    return We(U, {
                      key: "sheet-child-" + fe,
                    });
                  })
                )
              : null
          )
        )
      );
    return Tl ? gn : a2(gn, g ?? document.body);
  }),
  S7 = ["children", "style", "className"],
  R7 = /* @__PURE__ */ oe(function (e, t) {
    var n = e.children,
      r = e.style,
      s = r === void 0 ? {} : r,
      o = e.className,
      a = o === void 0 ? "" : o,
      i = Bt(e, S7),
      c = cr(),
      f = c.y,
      d = c.isOpen,
      u = c.callbacks,
      h = c.snapPoints,
      m = c.initialSnap,
      g = m === void 0 ? 0 : m,
      v = c.sheetRef,
      w = c.windowHeight,
      b = c.detent,
      y = c.animationOptions,
      C = c.reduceMotion,
      S = m7(d, u),
      R = S.handleAnimationComplete,
      M = h ? h[0] - h[g] : 0,
      T = h ? h[0] : null,
      x = T !== null ? "min(" + T + "px, " + va + ")" : va;
    return $(
      Ie.div,
      Object.assign({}, i, {
        ref: ss([v, t]),
        className: "react-modal-sheet-container " + a,
        style: Re(
          {},
          Fe.container,
          s,
          b === "full-height" && {
            height: x,
          },
          b === "content-height" && {
            maxHeight: x,
          },
          {
            y: f,
          }
        ),
        initial: C
          ? !1
          : {
              y: w,
            },
        animate: {
          y: M,
          transition: y,
        },
        exit: {
          y: w,
          transition: y,
        },
        onAnimationComplete: R,
      }),
      n
    );
  }),
  _7 = ["children", "style", "disableDrag", "className"],
  M7 = /* @__PURE__ */ oe(function (e, t) {
    var n = e.children,
      r = e.style,
      s = e.disableDrag,
      o = e.className,
      a = o === void 0 ? "" : o,
      i = Bt(e, _7),
      c = cr(),
      f = kl(),
      d = Hl(),
      u = d.constraintsRef,
      h = d.onMeasureDragConstraints,
      m = s || f.disableDrag ? void 0 : c.dragProps;
    return $(
      Ie.div,
      Object.assign(
        {},
        i,
        {
          ref: ss([t, u]),
          className: "react-modal-sheet-content " + a,
          style: Re({}, Fe.content, r),
        },
        m,
        {
          dragConstraints: u,
          onMeasureDragConstraints: h,
        }
      ),
      n
    );
  }),
  L7 = ["children", "style", "disableDrag"],
  V7 = /* @__PURE__ */ oe(function (e, t) {
    var n = e.children,
      r = e.style,
      s = e.disableDrag,
      o = Bt(e, L7),
      a = cr(),
      i = a.indicatorRotation,
      c = a.dragProps,
      f = Hl(),
      d = f.constraintsRef,
      u = f.onMeasureDragConstraints,
      h = s ? void 0 : c,
      m = on(i, function (v) {
        return "translateX(2px) rotate(" + v + "deg)";
      }),
      g = on(i, function (v) {
        return "translateX(-2px) rotate(" + -1 * v + "deg)";
      });
    return $(
      Ie.div,
      Object.assign(
        {},
        o,
        {
          ref: ss([t, d]),
          style: Re({}, Fe.headerWrapper, r),
        },
        h,
        {
          dragConstraints: d,
          onMeasureDragConstraints: u,
        }
      ),
      n ||
        $(
          "div",
          {
            className: "react-modal-sheet-header",
            style: Fe.header,
          },
          $(Ie.span, {
            className: "react-modal-sheet-drag-indicator",
            style: Re({}, Fe.indicator, {
              transform: m,
            }),
          }),
          $(Ie.span, {
            className: "react-modal-sheet-drag-indicator",
            style: Re({}, Fe.indicator, {
              transform: g,
            }),
          })
        )
    );
  }),
  T7 = ["style", "className"],
  xa = function (t) {
    return !!t.onClick || !!t.onTap;
  },
  P7 = /* @__PURE__ */ oe(function (e, t) {
    var n = e.style,
      r = n === void 0 ? {} : n,
      s = e.className,
      o = s === void 0 ? "" : s,
      a = Bt(e, T7),
      i = xa(a) ? Ie.button : Ie.div,
      c = xa(a) ? "auto" : "none";
    return $(
      i,
      Object.assign({}, a, {
        ref: t,
        className: "react-modal-sheet-backdrop " + o,
        style: Re({}, Fe.backdrop, r, {
          pointerEvents: c,
        }),
        initial: {
          opacity: 0,
        },
        animate: {
          opacity: 1,
        },
        exit: {
          opacity: 0,
        },
      })
    );
  }),
  H7 = ["draggableAt", "children", "style", "className"],
  A7 = /* @__PURE__ */ oe(function (e, t) {
    var n = e.draggableAt,
      r = n === void 0 ? "top" : n,
      s = e.children,
      o = e.style,
      a = e.className,
      i = a === void 0 ? "" : a,
      c = Bt(e, H7),
      f = kl();
    function d(g) {
      var v = g.scrollTop,
        w = g.scrollHeight,
        b = g.clientHeight,
        y = w > b;
      if (y) {
        var C = v <= 0,
          S = w - v === b,
          R =
            (r === "top" && C) ||
            (r === "bottom" && S) ||
            (r === "both" && (C || S));
        R ? f.setDragEnabled() : f.setDragDisabled();
      }
    }
    function u(g) {
      d(g.currentTarget);
    }
    function h(g) {
      d(g.currentTarget);
    }
    var m = f7()
      ? {
          onScroll: u,
          onTouchStart: h,
        }
      : void 0;
    return $(
      "div",
      Object.assign(
        {},
        c,
        {
          ref: t,
          className: "react-modal-sheet-scroller " + i,
          style: Re({}, Fe.scroller, o),
        },
        m
      ),
      s
    );
  }),
  ee = x7;
ee.Container = R7;
ee.Header = V7;
ee.Content = M7;
ee.Backdrop = P7;
ee.Scroller = A7;
const Sa = (e) =>
  /* @__PURE__ */ l.createElement(
    "svg",
    { viewBox: "0 0 48 48", focusable: "false", ...e },
    /* @__PURE__ */ l.createElement("path", {
      fill: "currentColor",
      d: "M19.876 4.5H43.5v9.34a5.172 5.172 0 01-5.17 5.178h-4.416l-5.166 4.138-1.425-4.134h-1.727v-2.446h3.468l.863 2.503 3.13-2.507h5.273a2.728 2.728 0 002.727-2.732V6.946H22.32v4.4h-2.443V4.5z",
    }),
    /* @__PURE__ */ l.createElement("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M16.99 14.656c-3.725 0-6.746 2.992-6.746 6.682 0 3.69 3.02 6.682 6.746 6.682 3.725 0 6.745-2.993 6.745-6.682 0-3.69-3.02-6.682-6.745-6.682zm0 2.446c2.373 0 4.303 1.9 4.303 4.236s-1.93 4.236-4.303 4.236c-2.374 0-4.303-1.9-4.303-4.236s1.93-4.236 4.303-4.236zM9.28 29.471a4.786 4.786 0 00-4.78 4.787V43.5h24.98v-9.242a4.786 4.786 0 00-4.78-4.787H9.28zm-2.337 4.787c0-1.29 1.049-2.34 2.336-2.34H24.7a2.342 2.342 0 012.337 2.34v6.796H6.943v-6.796z",
      clipRule: "evenodd",
    })
  );
var Z7 = {
    "no-advisor": "mzs9pj4",
    "one-advisor": "mzs9pj5",
    "two-advisors": "mzs9pj6",
  },
  k7 = "mzs9pj1",
  D7 = "mzs9pj8",
  B7 = "mzs9pj7",
  O7 = { false: "mzs9pj2 mzs9pj0", true: "mzs9pj3 mzs9pj0" };
var N7 = "afdy2r1",
  $7 = "afdy2r0",
  z7 = "afdy2r2";
var F7 = { icon: "_1vjhm7c1 _1vjhm7c0", advisor: "_1vjhm7c2 _1vjhm7c0" },
  j7 = "_1vjhm7c4",
  q7 = "_1vjhm7c3";
const I7 = (e) =>
  /* @__PURE__ */ l.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      focusable: "false",
      ...e,
    },
    /* @__PURE__ */ l.createElement("path", {
      d: "m12 15.7-7.65-8-1.3 1.24L12 18.3l8.95-9.36-1.3-1.24-7.65 8Z",
      fill: "currentColor",
      fillRule: "evenodd",
    })
  );
var W7 = "whu6990",
  U7 = "whu6992",
  G7 = "whu6991";
const as = () =>
    /* @__PURE__ */ React.createElement(
      "div",
      { className: W7 },
      /* @__PURE__ */ React.createElement("div", { className: G7 })
    ),
  Od = ({ children: e, isActive: t, setIsActive: n }) => (
    O(() => {
      const r = (s) => {
        if (s.key === "Escape") return n(!1);
      };
      window.addEventListener("keydown", r);
    }, []),
    /* @__PURE__ */ React.createElement(
      ee,
      {
        isOpen: t,
        onClose: () => n(!1),
        detent: "content-height",
      },
      /* @__PURE__ */ React.createElement(
        ee.Container,
        null,
        /* @__PURE__ */ React.createElement(
          ee.Header,
          null,
          /* @__PURE__ */ React.createElement(as, null)
        ),
        /* @__PURE__ */ React.createElement(
          ee.Content,
          null,
          /* @__PURE__ */ React.createElement(
            Fn,
            null,
            /* @__PURE__ */ React.createElement("div", { className: U7 }, e)
          )
        )
      ),
      /* @__PURE__ */ React.createElement(ee.Backdrop, { onTap: () => n(!1) })
    )
  ),
  K7 = ({ buttonLabel: e, buttonAvatars: t, ...n }) => {
    const r = O7.false,
      s = Z7["no-advisor"];
    return Oe()[0] < Number(Ne.l.replace("px", ""))
      ? /* @__PURE__ */ l.createElement(
          qr,
          { ...n, label: e },
          /* @__PURE__ */ l.createElement(Sa, null)
        )
      : /* @__PURE__ */ l.createElement(
          "button",
          {
            ...n,
            className: P(r, s),
          },
          !t && /* @__PURE__ */ l.createElement(Sa, { className: B7 }),
          t && /* @__PURE__ */ l.createElement("div", { className: D7 }, t),
          e,
          /* @__PURE__ */ l.createElement(
            "div",
            { className: k7 },
            /* @__PURE__ */ l.createElement(I7, null)
          )
        );
  },
  Nd = ({ type: e = "icon", icon: t, avatar: n, labels: r, ...s }) => {
    const o = F7[e];
    return /* @__PURE__ */ l.createElement(
      "a",
      { className: o, ...s },
      /* @__PURE__ */ l.createElement("div", { className: j7 }, t, n),
      /* @__PURE__ */ l.createElement("div", { className: q7 }, r)
    );
  };
let Ra = 0;
const Y7 = ({ children: e, isActive: t, setIsActive: n, setIsClosing: r }) => {
    const o = Oe()[0] < Number(Ne.l.replace("px", ""));
    return (
      O(() => {
        const a = (i) => {
          if (i.key === "Escape") return n(!1);
        };
        window.addEventListener("keydown", a);
      }, []),
      o
        ? /* @__PURE__ */ l.createElement(
            ee,
            {
              isOpen: t,
              onClose: () => n(!1),
              detent: "content-height",
            },
            /* @__PURE__ */ l.createElement(
              ee.Container,
              null,
              /* @__PURE__ */ l.createElement(
                ee.Header,
                null,
                /* @__PURE__ */ l.createElement(as, null)
              ),
              /* @__PURE__ */ l.createElement(
                ee.Content,
                null,
                /* @__PURE__ */ l.createElement(Fn, null, e)
              )
            ),
            /* @__PURE__ */ l.createElement(ee.Backdrop, { onTap: () => n(!1) })
          )
        : /* @__PURE__ */ l.createElement(
            ln,
            {
              open: t,
              modal: !1,
              onOpenChange: (a) => {
                a ||
                  (r(!0),
                  clearTimeout(Ra),
                  (Ra = window.setTimeout(() => {
                    r(!1);
                  }, 200))),
                  n(a);
              },
            },
            /* @__PURE__ */ l.createElement(
              cn,
              {
                className: P(N7, Qn.two),
                forceMount: !0,
              },
              e
            )
          )
    );
  },
  $d = ({ buttonLabel: e, children: t, buttonAvatars: n }) => {
    const [r, s] = F(!1),
      [o, a] = F(!1);
    return /* @__PURE__ */ l.createElement(
      "div",
      { className: $7 },
      /* @__PURE__ */ l.createElement(K7, {
        buttonLabel: e,
        buttonAvatars: n,
        onClick: () => {
          o || s(!r);
        },
      }),
      /* @__PURE__ */ l.createElement(
        Y7,
        {
          isActive: r,
          setIsActive: s,
          setIsClosing: a,
        },
        t
      )
    );
  },
  zd = () => /* @__PURE__ */ l.createElement("hr", { className: z7 }),
  Fd = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      { viewBox: "0 0 48 48", focusable: "false", ...e },
      /* @__PURE__ */ l.createElement(
        "g",
        null,
        /* @__PURE__ */ l.createElement("path", {
          fill: "currentColor",
          d: "M35.9 37.84c.38.92-.08 1.96-1 2.34h-.08c-.92.4-1.98-.04-2.34-.96-.38-.92.08-1.96 1-2.34h.08c.92-.4 1.98.04 2.34.96zM6 30v10.1h21.84v-3.58H9.58v-6.54c0-1.22.98-2.2 2.18-2.2h16.08V24.2H11.76C8.58 24.2 6 26.78 6 29.98V30zm28.64-14.06c-2.5 0-4.7 1.24-6.04 3.14l2.94 2.04c.68-.98 1.82-1.62 3.1-1.62 2.08 0 3.78 1.7 3.78 3.8 0 2.1-1.52 3.62-3.46 3.78h-2.78v7.52h3.58v-4C39.3 30.06 42 27 42 23.32c0-4.06-3.3-7.38-7.36-7.38zm-23.42-2.06c0-4.28 3.46-7.76 7.76-7.76s7.76 3.48 7.76 7.76c0 4.28-3.46 7.76-7.76 7.76s-7.76-3.48-7.76-7.76zm3.58 0c0 2.32 1.88 4.18 4.18 4.18s4.18-1.86 4.18-4.18c0-2.32-1.88-4.18-4.18-4.18s-4.18 1.86-4.18 4.18z",
        })
      )
    );
var X7 = { small: "_1l5ogmz9", medium: "_1l5ogmza", large: "_1l5ogmzb" },
  J7 = { small: "_1l5ogmz6", medium: "_1l5ogmz7", large: "_1l5ogmz8" },
  Q7 = { small: "_1l5ogmz0", medium: "_1l5ogmz1", large: "_1l5ogmz2" },
  e9 = { small: "_1l5ogmz3", medium: "_1l5ogmz4", large: "_1l5ogmz5" },
  t9 = { small: "_1l5ogmzg", medium: "_1l5ogmzh", large: "_1l5ogmzi" },
  n9 = {
    small: "_1l5ogmzd _1l5ogmzc",
    medium: "_1l5ogmze _1l5ogmzc",
    large: "_1l5ogmzf _1l5ogmzc",
  },
  r9 = {
    small: "_1l5ogmzk _1l5ogmzj",
    medium: "_1l5ogmzl _1l5ogmzj",
    large: "_1l5ogmzm _1l5ogmzj",
  };
const jd = ({
    className: e = "",
    size: t = "small",
    showVorwerkLogo: n = !0,
  }) => {
    const r = Q7[t];
    return /* @__PURE__ */ React.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "150",
        height: "72",
        fill: "none",
        viewBox: "0 0 150 72",
        focusable: "false",
        className: P(r, e),
      },
      /* @__PURE__ */ React.createElement(
        "g",
        { fill: "#00AC46", clipPath: "url(#clip0_1707_1608)" },
        /* @__PURE__ */ React.createElement("path", {
          d: "M36.8493 31.5104C34.3926 33.9447 31.4 35.1507 27.8714 35.1507C24.3428 35.1507 21.3502 33.9447 18.9383 31.5104C16.504 29.0761 15.298 26.1058 15.298 22.5772C15.298 19.0486 16.504 16.056 18.9383 13.6441C21.3726 11.2098 24.3428 10.0038 27.8714 10.0038C31.4 10.0038 34.3926 11.2098 36.8493 13.6441C39.3059 16.0784 40.5119 19.0486 40.5119 22.5772C40.5119 26.1058 39.2836 29.0985 36.8493 31.5104ZM23.2709 27.2895C24.4992 28.5401 26.0178 29.1431 27.8714 29.1431C29.7251 29.1431 31.266 28.5178 32.4944 27.2895C33.7227 26.0612 34.348 24.4755 34.348 22.5772C34.348 20.6789 33.7227 19.0933 32.4944 17.865C31.266 16.6367 29.7027 16.0114 27.8714 16.0114C26.0401 16.0114 24.4992 16.6367 23.2709 17.865C22.0425 19.1156 21.4396 20.6789 21.4396 22.5772C21.4396 24.4755 22.0425 26.0612 23.2709 27.2895Z",
          fill: "#00AC46",
        }),
        /* @__PURE__ */ React.createElement("path", {
          d: "M44.7329 34.4807V1.09296H50.8968V34.4807H44.7329Z",
          fill: "#00AC46",
        }),
        /* @__PURE__ */ React.createElement("path", {
          d: "M56.1226 34.4807V1.09296H62.2865V34.4807H56.1226Z",
          fill: "#00AC46",
        }),
        /* @__PURE__ */ React.createElement("path", {
          d: "M72.9394 25.0785C73.7657 28.0711 75.999 29.5674 79.6616 29.5674C82.0065 29.5674 83.7932 28.7635 84.9991 27.1778L89.9571 30.0364C87.6121 33.431 84.1282 35.1507 79.5499 35.1507C75.597 35.1507 72.448 33.967 70.0584 31.5774C67.6688 29.1878 66.4852 26.1952 66.4852 22.5549C66.4852 18.9146 67.6688 15.9667 70.0138 13.5547C72.3587 11.1428 75.396 9.95914 79.0809 9.95914C82.5872 9.95914 85.4681 11.1651 87.7461 13.5771C90.024 15.989 91.163 18.9816 91.163 22.5549C91.163 23.3589 91.0737 24.1852 90.9174 25.0785H72.9394ZM72.85 20.2993H85.0215C84.6641 18.669 83.9495 17.463 82.8552 16.6813C81.7609 15.8774 80.5102 15.4977 79.1032 15.4977C77.4506 15.4977 76.0883 15.922 74.994 16.7707C73.922 17.6193 73.2074 18.803 72.85 20.3216V20.2993Z",
          fill: "#00AC46",
        }),
        /* @__PURE__ */ React.createElement("path", {
          d: "M114.322 16.5473H101.168V26.4632C101.168 27.2895 101.369 27.8925 101.794 28.2721C102.218 28.6518 102.821 28.8751 103.603 28.9198C104.384 28.9645 105.389 28.9644 106.55 28.8975V34.4807C102.33 34.9497 99.337 34.57 97.6173 33.297C95.8754 32.0241 95.0267 29.7461 95.0267 26.4855V5.82754L101.191 3.97391V10.6515H114.345V16.5697L114.322 16.5473Z",
          fill: "#00AC46",
        }),
        /* @__PURE__ */ React.createElement("path", {
          d: "M123.211 16.5473H116.399V26.4632C116.399 27.2895 116.6 27.8925 117.025 28.2721C117.449 28.6518 118.052 28.8751 118.833 28.9198C119.615 28.9645 120.62 28.9644 121.781 28.8975V34.4807C117.56 34.9497 114.568 34.57 112.848 33.297C111.106 32.0241 110.258 29.7461 110.258 26.4855V5.82754L116.422 3.97391V10.6515H123.233V16.5697L123.211 16.5473Z",
          fill: "#00AC46",
        }),
        /* @__PURE__ */ React.createElement("path", {
          d: "M145.745 31.5104C143.288 33.9447 140.295 35.1507 136.767 35.1507C133.238 35.1507 130.246 33.9447 127.834 31.5104C125.422 29.0761 124.193 26.1058 124.193 22.5772C124.193 19.0486 125.399 16.056 127.834 13.6441C130.268 11.2321 133.238 10.0038 136.767 10.0038C140.295 10.0038 143.288 11.2098 145.745 13.6441C148.201 16.0784 149.407 19.0486 149.407 22.5772C149.407 26.1058 148.179 29.0985 145.745 31.5104ZM132.166 27.2895C133.395 28.5401 134.913 29.1431 136.767 29.1431C138.62 29.1431 140.161 28.5178 141.39 27.2895C142.64 26.0388 143.243 24.4755 143.243 22.5772C143.243 20.6789 142.618 19.0933 141.39 17.865C140.161 16.6367 138.598 16.0114 136.767 16.0114C134.935 16.0114 133.395 16.6367 132.166 17.865C130.938 19.1156 130.335 20.6789 130.335 22.5772C130.335 24.4755 130.938 26.0612 132.166 27.2895Z",
          fill: "#00AC46",
        }),
        /* @__PURE__ */ React.createElement("path", {
          d: "M6.14156 9.71347V11.2991H12.9308V17.195H6.14156V34.503H6.97613e-06V9.71347C6.97613e-06 9.71347 -0.0669918 -1.20732 12.9308 0.110318V5.93921C12.9308 5.93921 6.45422 4.5099 6.14156 9.71347Z",
          fill: "#00AC46",
        }),
        n &&
          /* @__PURE__ */ React.createElement("path", {
            d: "M56.6698 66.2158H55.3968C57.6301 69.6997 61.516 72 65.9603 72C69.8462 72 73.3301 70.2357 75.6081 67.4664C77.9084 70.2357 81.3923 72 85.2782 72C89.7225 72 93.6308 69.6997 95.8417 66.2158H94.5687C92.4694 69.0967 89.0972 70.9503 85.2559 70.9503C81.2136 70.9503 77.6404 68.8511 75.5858 65.6798C73.5311 68.8511 69.9802 70.9503 65.9379 70.9503C62.119 70.9503 58.7244 69.0744 56.6251 66.2158M85.2112 61.8162V59.2256H89.3428V57.6846H85.2112V55.4066H89.8342V53.8657H83.1566V63.3572H90.0575V61.8162H85.2112ZM76.9927 63.3572H79.025L81.6826 53.8657H79.8513L78.1317 60.4539L76.6354 53.8657H74.7148L73.0845 60.4762L71.5658 53.8657H69.2879L71.9232 63.3572H73.9331L75.4294 57.2826L76.9704 63.3572H76.9927ZM68.7072 63.3572L66.2506 59.7392C66.8982 59.4936 68.2829 58.6002 68.2829 56.9923C68.2829 54.96 66.7196 53.8657 65.0446 53.8657H60.645V63.3572H62.6997V55.3173H64.4416C65.3573 55.3173 66.1836 55.9203 66.1836 57.0369C66.1836 58.1536 65.2009 58.7789 64.0843 58.7789C63.8833 58.7789 63.6823 58.7789 63.526 58.7566L66.1166 63.3348H68.6849L68.7072 63.3572ZM45.1907 63.3572L48.6746 53.8657H46.754L44.3197 60.8335L41.9524 53.8657H39.6074L43.1584 63.3572H45.1683H45.1907ZM56.8484 58.6002C56.8484 60.5432 55.6201 62.1065 54.0345 62.1065C52.4488 62.1065 51.2205 60.5432 51.2205 58.6002C51.2205 56.6573 52.4488 55.094 54.0345 55.094C55.6201 55.094 56.8484 56.6573 56.8484 58.6002ZM54.0345 53.5753C51.2875 53.5753 49.0766 55.831 49.0766 58.6002C49.0766 61.3695 51.3099 63.6251 54.0345 63.6251C56.7591 63.6251 59.0147 61.3695 59.0147 58.6002C59.0147 55.831 56.7814 53.5753 54.0345 53.5753ZM94.5017 50.9624H95.7747C93.5414 47.5008 89.6555 45.2005 85.2336 45.2005C81.3477 45.2005 77.8637 46.9648 75.5634 49.7564C73.2631 46.9871 69.8015 45.2005 65.8933 45.2005C61.4713 45.2005 57.5854 47.5008 55.3521 50.9624H56.6251C58.7244 48.1038 62.0967 46.2501 65.8933 46.2501C69.9355 46.2501 73.5088 48.3494 75.5634 51.5207C77.618 48.3494 81.169 46.2501 85.2336 46.2501C89.0525 46.2501 92.4248 48.1038 94.5017 50.9624ZM99.9063 63.3572L97.4497 59.7392C98.0973 59.4936 99.482 58.6002 99.482 56.9923C99.482 54.96 97.9187 53.8657 96.2437 53.8657H91.8441V63.3572H93.8764V55.3173H95.6184C96.534 55.3173 97.3604 55.9203 97.3604 57.0369C97.3604 58.1536 96.3777 58.7789 95.2611 58.7789C95.0601 58.7789 94.8591 58.7789 94.7027 58.7566L97.2934 63.3348H99.8616L99.9063 63.3572ZM101.291 63.3572H103.323V53.8657H101.291V63.3572ZM109.8 63.3572L105.825 58.0866L109.353 53.8657H106.897L103.591 58.1982L107.075 63.3572H109.8Z",
            fill: "#00AC46",
          })
      ),
      /* @__PURE__ */ React.createElement(
        "defs",
        null,
        /* @__PURE__ */ React.createElement(
          "clipPath",
          { id: "clip0_1707_1608" },
          /* @__PURE__ */ React.createElement("path", {
            fill: "#fff",
            d: "M0 0H149.407V72H0z",
          })
        )
      )
    );
  },
  qd = ({ className: e = "", size: t = "small", showVorwerkLogo: n = !0 }) => {
    const r = e9[t];
    return /* @__PURE__ */ React.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "149",
        height: "72",
        fill: "none",
        viewBox: "0 0 149 72",
        focusable: "false",
        className: P(r, e),
      },
      /* @__PURE__ */ React.createElement(
        "g",
        { fill: "#00AC46", clipPath: "url(#clip0_1707_1632)" },
        /* @__PURE__ */ React.createElement("path", {
          d: "M22.337 33.9024H15.0803L6.2589 22.9039V33.9024H0V0H6.2589V20.3868L14.5814 9.68315H22.0422L12.3137 21.6567L22.337 33.9024Z",
          fill: "#00AC46",
        }),
        /* @__PURE__ */ React.createElement("path", {
          d: "M44.3112 30.8863C41.8167 33.3581 38.778 34.5827 35.195 34.5827C31.612 34.5827 28.5733 33.3581 26.1241 30.8863C23.675 28.4145 22.4277 25.3984 22.4277 21.8154C22.4277 18.2324 23.6523 15.1937 26.1241 12.7446C28.5959 10.2954 31.612 9.04819 35.195 9.04819C38.778 9.04819 41.8167 10.2728 44.3112 12.7446C46.8057 15.2164 48.0303 18.2324 48.0303 21.8154C48.0303 25.3984 46.783 28.4372 44.3112 30.8863ZM30.5235 26.6003C31.7707 27.8702 33.3128 28.4825 35.195 28.4825C37.0772 28.4825 38.6419 27.8476 39.8892 26.6003C41.1364 25.3531 41.7714 23.743 41.7714 21.8154C41.7714 19.8879 41.1364 18.2778 39.8892 17.0306C38.6419 15.7833 37.0545 15.1483 35.195 15.1483C33.3355 15.1483 31.7707 15.7833 30.5235 17.0306C29.2763 18.3005 28.664 19.8879 28.664 21.8154C28.664 23.743 29.2763 25.3531 30.5235 26.6003Z",
          fill: "#00AC46",
        }),
        /* @__PURE__ */ React.createElement("path", {
          d: "M66.5575 9.00284C69.823 9.00284 72.6123 10.2274 74.9027 12.6992C77.1931 15.171 78.3723 18.1871 78.3723 21.7701C78.3723 25.3531 77.2158 28.3918 74.9027 30.8409C72.5896 33.2901 69.8003 34.5373 66.5575 34.5373C63.3147 34.5373 60.548 33.3581 58.7112 30.9997V33.857H52.4523V0H58.7112V12.5405C60.548 10.182 63.1559 9.00284 66.5575 9.00284ZM60.5934 26.7137C61.8633 27.9836 63.4507 28.6186 65.3783 28.6186C67.3058 28.6186 68.9159 27.9836 70.2085 26.7137C71.4784 25.4438 72.1134 23.811 72.1134 21.7928C72.1134 19.7745 71.4784 18.1417 70.2085 16.8718C68.9386 15.6019 67.3285 14.9669 65.3783 14.9669C63.428 14.9669 61.8406 15.6019 60.5934 16.8718C59.3235 18.1417 58.7112 19.7972 58.7112 21.7928C58.7112 23.7883 59.3462 25.4438 60.5934 26.7137Z",
          fill: "#00AC46",
        }),
        /* @__PURE__ */ React.createElement("path", {
          d: "M103.408 30.8863C100.913 33.3581 97.8745 34.5827 94.2915 34.5827C90.7086 34.5827 87.6698 33.3581 85.2207 30.8863C82.7489 28.4145 81.5243 25.3984 81.5243 21.8154C81.5243 18.2324 82.7489 15.1937 85.2207 12.7446C87.6925 10.2728 90.7086 9.04819 94.2915 9.04819C97.8745 9.04819 100.913 10.2728 103.408 12.7446C105.902 15.2164 107.127 18.2324 107.127 21.8154C107.127 25.3984 105.88 28.4372 103.408 30.8863ZM89.62 26.6003C90.8673 27.8702 92.4093 28.4825 94.2915 28.4825C96.1738 28.4825 97.7385 27.8476 98.9857 26.6003C100.233 25.3531 100.868 23.743 100.868 21.8154C100.868 19.8879 100.233 18.2778 98.9857 17.0306C97.7385 15.7833 96.1511 15.1483 94.2915 15.1483C92.432 15.1483 90.8673 15.7833 89.62 17.0306C88.3728 18.3005 87.7605 19.8879 87.7605 21.8154C87.7605 23.743 88.3728 25.3531 89.62 26.6003Z",
          fill: "#00AC46",
        }),
        /* @__PURE__ */ React.createElement("path", {
          d: "M111.549 33.9024V0H117.808V33.9024H111.549Z",
          fill: "#00AC46",
        }),
        /* @__PURE__ */ React.createElement("path", {
          d: "M141.868 0H148.127V33.9024H141.868V31.045C140.032 33.4035 137.424 34.5827 134.022 34.5827C130.62 34.5827 127.967 33.3581 125.677 30.8863C123.364 28.4145 122.207 25.3984 122.207 21.8154C122.207 18.2324 123.364 15.1937 125.677 12.7446C127.99 10.2728 130.779 9.04819 134.022 9.04819C137.265 9.04819 140.032 10.2274 141.868 12.5858V0ZM130.371 26.7137C131.641 27.9836 133.251 28.6186 135.179 28.6186C137.106 28.6186 138.716 27.9836 139.964 26.7137C141.233 25.4438 141.846 23.811 141.846 21.7928C141.846 19.7745 141.211 18.1417 139.964 16.8718C138.694 15.6019 137.106 14.9669 135.179 14.9669C133.251 14.9669 131.641 15.6019 130.371 16.8718C129.101 18.1417 128.466 19.7972 128.466 21.7928C128.466 23.7883 129.101 25.4438 130.371 26.7137Z",
          fill: "#00AC46",
        }),
        n &&
          /* @__PURE__ */ React.createElement("path", {
            d: "M55.7517 66.1266H54.4591C56.7269 69.6643 60.6727 72 65.1854 72C69.1313 72 72.6689 70.2085 74.982 67.3965C77.3177 70.2085 80.8554 72 84.8012 72C89.3139 72 93.2825 69.6643 95.5275 66.1266H94.2349C92.1032 69.052 88.679 70.9342 84.7785 70.9342C80.6739 70.9342 77.0456 68.8025 74.9593 65.5824C72.873 68.8025 69.2673 70.9342 65.1628 70.9342C61.285 70.9342 57.838 69.0293 55.7064 66.1266M84.7332 61.6592V59.0287H88.9284V57.4639H84.7332V55.1509H89.4273V53.5861H82.6469V63.2239H89.6541V61.6592H84.7332ZM76.388 63.2239H78.4516L81.1502 53.5861H79.2906L77.5445 60.2759L76.0251 53.5861H74.0749L72.4195 60.2986L70.8774 53.5861H68.5643L71.2402 63.2239H73.2812L74.8006 57.0557L76.3653 63.2239H76.388ZM67.9747 63.2239L65.4802 59.5502C66.1379 59.3008 67.5439 58.3937 67.5439 56.7609C67.5439 54.6973 65.9565 53.5861 64.2557 53.5861H59.7883V63.2239H61.8746V55.0602H63.6434C64.5732 55.0602 65.4122 55.6724 65.4122 56.8063C65.4122 57.9402 64.4144 58.5751 63.2806 58.5751C63.0765 58.5751 62.8724 58.5751 62.7136 58.5524L65.3442 63.2013H67.9521L67.9747 63.2239ZM44.0957 63.2239L47.6333 53.5861H45.6831L43.2113 60.6614L40.8075 53.5861H38.4264L42.0321 63.2239H44.073H44.0957ZM55.9332 58.3937C55.9332 60.3666 54.6859 61.954 53.0758 61.954C51.4658 61.954 50.2185 60.3666 50.2185 58.3937C50.2185 56.4208 51.4658 54.8334 53.0758 54.8334C54.6859 54.8334 55.9332 56.4208 55.9332 58.3937ZM53.0758 53.2913C50.2866 53.2913 48.0415 55.5817 48.0415 58.3937C48.0415 61.2057 50.3092 63.4961 53.0758 63.4961C55.8425 63.4961 58.1328 61.2057 58.1328 58.3937C58.1328 55.5817 55.8651 53.2913 53.0758 53.2913ZM94.1669 50.6381H95.4595C93.1917 47.1231 89.2459 44.7874 84.7558 44.7874C80.81 44.7874 77.2724 46.5789 74.9366 49.4135C72.6009 46.6016 69.0859 44.7874 65.1174 44.7874C60.6273 44.7874 56.6815 47.1231 54.4138 50.6381H55.7064C57.838 47.7354 61.2623 45.8532 65.1174 45.8532C69.222 45.8532 72.8503 47.9849 74.9366 51.205C77.0229 47.9849 80.6286 45.8532 84.7558 45.8532C88.6336 45.8532 92.0579 47.7354 94.1669 50.6381ZM99.6547 63.2239L97.1603 59.5502C97.8179 59.3008 99.2239 58.3937 99.2239 56.7609C99.2239 54.6973 97.6365 53.5861 95.9357 53.5861H91.4683V63.2239H93.5319V55.0602H95.3007C96.2305 55.0602 97.0695 55.6724 97.0695 56.8063C97.0695 57.9402 96.0717 58.5751 94.9379 58.5751C94.7338 58.5751 94.5297 58.5751 94.371 58.5524L97.0015 63.2013H99.6094L99.6547 63.2239ZM101.061 63.2239H103.124V53.5861H101.061V63.2239ZM109.701 63.2239L105.664 57.8721L109.247 53.5861H106.753L103.396 57.9855L106.934 63.2239H109.701Z",
            fill: "#00AC46",
          })
      ),
      /* @__PURE__ */ React.createElement(
        "defs",
        null,
        /* @__PURE__ */ React.createElement(
          "clipPath",
          { id: "clip0_1707_1632" },
          /* @__PURE__ */ React.createElement("path", {
            fill: "#fff",
            d: "M0 0H148.127V72H0z",
          })
        )
      )
    );
  },
  Id = ({ className: e = "", size: t = "small", showVorwerkLogo: n = !0 }) => {
    const r = J7[t];
    return /* @__PURE__ */ React.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "127",
        height: "72",
        fill: "none",
        viewBox: "0 0 127 72",
        focusable: "false",
        className: P(r, e),
      },
      /* @__PURE__ */ React.createElement(
        "g",
        { fill: "#00AC46", clipPath: "url(#clip0_1707_1671)" },
        /* @__PURE__ */ React.createElement("path", {
          d: "M13.1448 14.3917C16.188 14.3917 18.7874 15.5329 20.9218 17.8364C23.0774 20.1399 24.1552 22.9506 24.1552 26.2897C24.1552 29.6287 23.0774 32.4605 20.9218 34.7429C18.7663 37.0464 16.1669 38.1876 13.1448 38.1876C10.1228 38.1876 7.54454 37.0887 5.83275 34.8909V37.5536H0V6.00182H5.83275V17.6885C7.54454 15.4906 9.97485 14.3917 13.1448 14.3917ZM7.58681 30.8967C8.77026 32.0801 10.2496 32.6719 12.0459 32.6719C13.8422 32.6719 15.3427 32.0801 16.5473 30.8967C17.7307 29.7132 18.3225 28.1916 18.3225 26.3108C18.3225 24.4299 17.7307 22.9084 16.5473 21.7249C15.3638 20.5414 13.8634 19.9497 12.0459 19.9497C10.2285 19.9497 8.74913 20.5414 7.58681 21.7249C6.40335 22.9084 5.83275 24.4511 5.83275 26.3108C5.83275 28.1705 6.42448 29.7132 7.58681 30.8967Z",
          fill: "#00AC46",
        }),
        /* @__PURE__ */ React.createElement("path", {
          d: "M64.3717 14.3917C66.9499 14.3917 69.021 15.237 70.5849 16.9277C72.1276 18.6183 72.9095 20.8796 72.9095 23.6903V37.5959H67.0767V24.0918C67.0767 22.7393 66.7386 21.6826 66.0835 20.9218C65.4284 20.161 64.4985 19.8018 63.2939 19.8018C61.9625 19.8018 60.9481 20.2456 60.2085 21.112C59.4688 21.9785 59.1095 23.2465 59.1095 24.8949V37.5748H53.2768V24.0707C53.2768 22.7182 52.9387 21.6615 52.2835 20.9007C51.6284 20.1399 50.6985 19.7806 49.4939 19.7806C48.2048 19.7806 47.1693 20.2244 46.4085 21.0909C45.6477 21.9574 45.2673 23.2254 45.2673 24.8737V37.5536H39.4346V15.0257H45.2673V17.4137C46.6198 15.4061 48.712 14.3917 51.5439 14.3917C54.3757 14.3917 56.3622 15.4695 57.6725 17.6462C59.1729 15.4695 61.4131 14.3917 64.3928 14.3917H64.3717Z",
          fill: "#00AC46",
        }),
        /* @__PURE__ */ React.createElement("path", {
          d: "M90.9993 14.3917C94.0425 14.3917 96.6419 15.5329 98.7764 17.8364C100.932 20.1399 102.01 22.9506 102.01 26.2897C102.01 29.6287 100.932 32.4605 98.7764 34.7429C96.6208 37.0464 94.0214 38.1876 90.9993 38.1876C87.9773 38.1876 85.399 37.0887 83.6873 34.8909V37.5536H77.8545V6.00182H83.6873V17.6885C85.399 15.4906 87.8294 14.3917 90.9993 14.3917ZM85.4413 30.8967C86.6248 32.0801 88.1041 32.6719 89.9004 32.6719C91.6967 32.6719 93.1972 32.0801 94.4018 30.8967C95.5852 29.7132 96.177 28.1916 96.177 26.3108C96.177 24.4299 95.5852 22.9084 94.4018 21.7249C93.2183 20.5414 91.7179 19.9497 89.9004 19.9497C88.083 19.9497 86.6036 20.5414 85.4413 21.7249C84.2579 22.9084 83.6873 24.4511 83.6873 26.3108C83.6873 28.1705 84.279 29.7132 85.4413 30.8967Z",
          fill: "#00AC46",
        }),
        /* @__PURE__ */ React.createElement("path", {
          d: "M119.931 15.0257H126.165L117.944 37.6382C116.761 40.8504 115.218 43.1962 113.274 44.6544C111.329 46.1126 108.92 46.7677 106.046 46.6198V41.2097C107.61 41.2308 108.857 40.9138 109.766 40.2164C110.674 39.519 111.414 38.4201 111.963 36.8774L102.707 15.0257H109.068L114.964 30.1993L119.952 15.0257H119.931Z",
          fill: "#00AC46",
        }),
        /* @__PURE__ */ React.createElement("path", {
          d: "M33.7709 20.5414C32.6931 20.5414 29.5442 20.3935 28.3185 16.9911V37.5959H34.0879V20.5203C34.0879 20.5203 33.8765 20.5414 33.7709 20.5414Z",
          fill: "#00AC46",
        }),
        /* @__PURE__ */ React.createElement("path", {
          d: "M33.5805 16.9065C31.2981 16.9065 29.6286 15.3638 28.4874 12.1938L28.0014 10.8624L27.5787 10.9892C27.1772 11.116 24.0283 12.0882 22.5067 13.1448C22.4222 12.8278 22.3377 12.5108 22.2954 12.1938C21.8939 9.42539 23.3732 7.54454 26.9447 6.25542L28.2761 5.76935L28.1493 5.34669C28.0225 4.94516 27.0504 1.79632 26.0148 0.274731C26.3318 0.190198 26.6488 0.105666 26.9658 0.0633995C27.2617 0.0211332 27.5364 0 27.8112 0C30.0935 0 31.7631 1.54272 32.9042 4.7127L33.3903 6.06522L33.813 5.93842C34.2145 5.81162 37.3633 4.8395 38.8849 3.78284C38.9695 4.09983 39.054 4.41683 39.0963 4.73383C39.4978 7.50227 38.0185 9.38313 34.447 10.6722L33.2212 11.116V11.433C33.2212 11.581 34.2779 15.0257 35.398 16.6529C35.081 16.7375 34.764 16.822 34.447 16.8643C34.1511 16.9065 33.8764 16.9277 33.6016 16.9277L33.5805 16.9065Z",
          fill: "#00AC46",
        }),
        n &&
          /* @__PURE__ */ React.createElement("path", {
            d: "M46.0174 66.5265H44.8129C46.9262 69.8233 50.6033 72 54.8088 72C58.486 72 61.7828 70.3305 63.9384 67.71C66.1151 70.3305 69.4119 72 73.089 72C77.2945 72 80.9928 69.8233 83.085 66.5265H81.8804C79.8939 69.2527 76.7028 71.0067 73.0679 71.0067C69.2428 71.0067 65.8615 69.0202 63.9172 66.0193C61.973 69.0202 58.6128 71.0067 54.7877 71.0067C51.1739 71.0067 47.9617 69.2316 45.9752 66.5265M73.0256 62.3633V59.9118H76.9353V58.4536H73.0256V56.2981H77.4002V54.8399H71.0814V63.8215H77.6115V62.3633H73.0256ZM65.2486 63.8215H67.1717L69.6866 54.8399H67.9537L66.3264 61.0742L64.9105 54.8399H63.093L61.5503 61.0953L60.1133 54.8399H57.9577L60.4514 63.8215H62.3534L63.7693 58.0732L65.2275 63.8215H65.2486ZM57.4082 63.8215L55.0836 60.3979C55.6964 60.1654 57.0067 59.3201 57.0067 57.7985C57.0067 55.8754 55.5274 54.8399 53.9424 54.8399H49.7791V63.8215H51.7234V56.2135H53.3718C54.2382 56.2135 55.0202 56.7841 55.0202 57.8408C55.0202 58.8974 54.0903 59.4892 53.0337 59.4892C52.8435 59.4892 52.6533 59.4892 52.5053 59.468L54.9568 63.8003H57.3871L57.4082 63.8215ZM35.155 63.8215L38.4518 54.8399H36.6343L34.3308 61.4334L32.0907 54.8399H29.8717L33.2319 63.8215H35.1339H35.155ZM46.1865 59.3201C46.1865 61.1587 45.0242 62.638 43.5237 62.638C42.0233 62.638 40.8609 61.1587 40.8609 59.3201C40.8609 57.4815 42.0233 56.0022 43.5237 56.0022C45.0242 56.0022 46.1865 57.4815 46.1865 59.3201ZM43.5237 54.5651C40.9243 54.5651 38.8322 56.6996 38.8322 59.3201C38.8322 61.9406 40.9455 64.0751 43.5237 64.0751C46.102 64.0751 48.2364 61.9406 48.2364 59.3201C48.2364 56.6996 46.1231 54.5651 43.5237 54.5651ZM81.817 52.0926H83.0216C80.9083 48.8169 77.2311 46.6402 73.0468 46.6402C69.3696 46.6402 66.0728 48.3097 63.8961 50.9514C61.7194 48.3308 58.4437 46.6402 54.7454 46.6402C50.5611 46.6402 46.8839 48.8169 44.7706 52.0926H45.9752C47.9617 49.3875 51.1528 47.6335 54.7454 47.6335C58.5705 47.6335 61.9519 49.62 63.8961 52.6209C65.8404 49.62 69.2005 47.6335 73.0468 47.6335C76.6605 47.6335 79.8516 49.3875 81.817 52.0926ZM86.9313 63.8215L84.6066 60.3979C85.2195 60.1654 86.5297 59.3201 86.5297 57.7985C86.5297 55.8754 85.0504 54.8399 83.4654 54.8399H79.3022V63.8215H81.2253V56.2135H82.8737C83.7401 56.2135 84.5221 56.7841 84.5221 57.8408C84.5221 58.8974 83.5922 59.4892 82.5356 59.4892C82.3454 59.4892 82.1552 59.4892 82.0072 59.468L84.4587 63.8003H86.889L86.9313 63.8215ZM88.2415 63.8215H90.1646V54.8399H88.2415V63.8215ZM96.2932 63.8215L92.5315 58.834L95.8706 54.8399H93.5459L90.4182 58.9397L93.715 63.8215H96.2932Z",
            fill: "#00AC46",
          })
      ),
      /* @__PURE__ */ React.createElement(
        "defs",
        null,
        /* @__PURE__ */ React.createElement(
          "clipPath",
          { id: "clip0_1707_1671" },
          /* @__PURE__ */ React.createElement("path", {
            fill: "#fff",
            d: "M0 0H126.165V72H0z",
          })
        )
      )
    );
  },
  Wd = ({ className: e = "", size: t = "small", showVorwerkLogo: n = !0 }) => {
    const r = X7[t];
    return /* @__PURE__ */ React.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "165",
        height: "72",
        fill: "none",
        viewBox: "0 0 165 72",
        focusable: "false",
        className: P(r, e),
      },
      /* @__PURE__ */ React.createElement("path", {
        fill: "#00AC46",
        d: "M6.215 35.271l2.642-7.044h15.848l2.642 7.044h6.474L20.25.829h-6.733L0 35.27h6.215zm4.662-12.327L16.832 7.2l5.904 15.745h-11.86zM38.29 35.271h5.646V11.187l11.343 15.797L66.517 11.24v24.032h5.697V.829h-4.662L55.33 18.335 42.952.829H38.29V35.27zM90.868 36.1c7.562 0 12.275-4.04 12.275-10.307 0-6.889-4.817-9.064-10.98-10.462-4.61-1.088-6.785-2.176-6.785-5.335 0-2.745 2.227-4.61 5.8-4.61 3.16 0 5.905 1.295 8.236 3.315l3.159-4.402C99.725 1.709 95.943 0 91.075 0c-6.992 0-11.809 4.247-11.809 10.359 0 6.992 5.49 9.115 10.773 10.255 4.35.932 6.992 2.02 6.992 5.334 0 3.004-2.382 4.765-6.215 4.765-3.832 0-6.837-1.45-9.374-3.625l-3.16 4.661c2.849 2.59 7.407 4.35 12.586 4.35zM131.047.829l-9.53 16.573L111.987.83h-6.992l13.466 22.53V35.27h6.163V23.359L137.987.829h-6.94zM151.967 36.1c7.562 0 12.275-4.04 12.275-10.307 0-6.889-4.816-9.064-10.98-10.462-4.609-1.088-6.785-2.176-6.785-5.335 0-2.745 2.227-4.61 5.801-4.61 3.16 0 5.905 1.295 8.235 3.315l3.16-4.402C160.824 1.709 157.043 0 152.175 0c-6.992 0-11.809 4.247-11.809 10.359 0 6.992 5.49 9.115 10.773 10.255 4.35.932 6.992 2.02 6.992 5.334 0 3.004-2.383 4.765-6.215 4.765-3.833 0-6.837-1.45-9.375-3.625l-3.159 4.661c2.848 2.59 7.406 4.35 12.585 4.35z",
      }),
      n &&
        /* @__PURE__ */ React.createElement("path", {
          fill: "#00AC46",
          fillRule: "evenodd",
          d: "M113.082 57.208l3.732 5.525h2.922l-4.256-5.641 3.778-4.527h-2.624l-3.552 4.643zm-2.468-4.643h2.186v10.168h-2.186V52.565zm-7.002 5.26l2.77 4.907h2.742l-2.622-3.871c.691-.257 2.188-1.212 2.188-2.942 0-2.172-1.684-3.353-3.459-3.353h-4.71v10.168h2.187V54.12h1.868c.986 0 1.869.643 1.869 1.855 0 1.215-1.063 1.875-2.244 1.875-.224 0-.42.006-.589-.025zm-12.456-5.26v10.168h7.386v-1.65h-5.197V58.31h4.421V56.66h-4.42v-2.449h4.966v-1.645l-7.156-.002zM82.9 56.21l1.644 6.523h2.17l2.858-10.168H87.61l-1.836 7.05-1.596-7.05h-2.062l-1.736 7.082-1.62-7.082h-2.442l2.825 10.168H81.3l1.601-6.523zm-12.75 1.615l2.767 4.907h2.746l-2.622-3.871c.689-.257 2.188-1.212 2.188-2.942 0-2.172-1.686-3.353-3.459-3.353h-4.712v10.168h2.19V54.12h1.867c.984 0 1.867.643 1.867 1.855 0 1.215-1.065 1.875-2.246 1.875-.224 0-.418.006-.587-.025zm-10.194-5.584c-2.94 0-5.324 2.413-5.324 5.389 0 2.977 2.384 5.388 5.324 5.388s5.324-2.409 5.324-5.388c0-2.976-2.384-5.389-5.324-5.389zm0 9.156c-1.68 0-3.008-1.687-3.008-3.767 0-2.077 1.328-3.762 3.008-3.762 1.684 0 3.01 1.683 3.01 3.762 0 2.08-1.326 3.767-3.01 3.767zm-10.416-1.376l-2.53-7.456h-2.504l3.807 10.168h2.152l3.74-10.168H52.15l-2.599 7.477-.009-.021zm55.145-10.576h-1.363a12.3 12.3 0 00-9.94-5.036c-4.342 0-8.16 2.245-10.355 5.637A12.298 12.298 0 0072.68 44.41c-4.083 0-7.696 1.988-9.938 5.043h-1.359c2.39-3.71 6.555-6.172 11.297-6.172a13.39 13.39 0 0110.35 4.873 13.407 13.407 0 0110.354-4.873 13.43 13.43 0 0111.303 6.163v.002zm.027 16.345A13.407 13.407 0 0193.385 72a13.416 13.416 0 01-10.355-4.868A13.403 13.403 0 0172.681 72a13.42 13.42 0 01-11.328-6.205v-.005h1.357a12.296 12.296 0 009.971 5.083c4.344 0 8.158-2.244 10.35-5.638a12.31 12.31 0 0010.354 5.638c4.1 0 7.732-2.003 9.971-5.083h1.357z",
          clipRule: "evenodd",
        })
    );
  },
  Ud = ({ className: e = "", size: t = "small", showVorwerkLogo: n = !0 }) => {
    const r = n9[t];
    switch (t) {
      case "small":
        return /* @__PURE__ */ React.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "178",
            height: "72",
            fill: "currentColor",
            viewBox: "0 0 178 72",
            className: P(r, e),
          },
          /* @__PURE__ */ React.createElement(
            "g",
            { fill: "currentColor" },
            /* @__PURE__ */ React.createElement("path", {
              d: "M12.8434 16.1497H7.81313V23.4965C7.81313 24.1087 7.96205 24.5555 8.27644 24.8368C8.59083 25.1181 9.0376 25.2836 9.61674 25.3167C10.1959 25.3497 10.9405 25.3497 11.8009 25.3001V29.4368C8.67357 29.7843 6.4563 29.503 5.18219 28.5598C3.89154 27.6167 3.26276 25.9289 3.26276 23.5131V16.1663H3.24622V8.20725L7.81313 6.83387V11.7814H12.8599V16.1663L12.8434 16.1497Z",
            }),
            /* @__PURE__ */ React.createElement("path", {
              d: "M24.8397 11.2684C26.7757 11.2684 28.3642 11.9137 29.6217 13.2209C30.8793 14.5281 31.5081 16.3152 31.5081 18.5986V29.4533H26.9412V19.1612C26.9412 17.9864 26.6268 17.0763 25.9814 16.4641C25.3361 15.8518 24.4922 15.5209 23.4332 15.5209C22.2584 15.5209 21.3153 15.8849 20.6037 16.613C19.8922 17.3411 19.5447 18.4331 19.5447 19.9058V29.4533H14.9778V4.6993H19.5447V13.7504C20.6534 12.0957 22.4073 11.2684 24.8066 11.2684H24.8397Z",
            }),
            /* @__PURE__ */ React.createElement("path", {
              d: "M39.2685 22.4871C39.8808 24.7044 41.5354 25.813 44.2491 25.813C45.9865 25.813 47.3103 25.2173 48.2038 24.0425L51.8772 26.1605C50.1398 28.6756 47.5585 29.9497 44.1664 29.9497C41.2376 29.9497 38.9045 29.0727 37.134 27.3022C35.3635 25.5317 34.4865 23.3144 34.4865 20.6173C34.4865 17.9202 35.3635 15.736 37.1009 13.9489C38.8383 12.1619 41.0887 11.2849 43.8189 11.2849C46.4168 11.2849 48.5513 12.1784 50.2391 13.9655C51.9268 15.7525 52.7707 17.9698 52.7707 20.6173C52.7707 21.213 52.7045 21.8252 52.5887 22.4871H39.2685ZM39.2023 18.9461H48.2204C47.9556 17.7382 47.4261 16.8446 46.6153 16.2655C45.8045 15.6698 44.8779 15.3885 43.8355 15.3885C42.611 15.3885 41.6016 15.7029 40.7908 16.3317C39.9966 16.9605 39.4671 17.8374 39.2023 18.9626V18.9461Z",
            }),
            /* @__PURE__ */ React.createElement("path", {
              d: "M60.4981 14.8094C60.9284 13.6842 61.6233 12.8237 62.5996 12.2612C63.5759 11.6986 64.6679 11.4173 65.8759 11.4173V16.5137C64.4859 16.3482 63.2449 16.6295 62.1528 17.3576C61.0607 18.0856 60.5147 19.2935 60.5147 20.9979V29.4367H55.9478V11.7648H60.5147V14.8094H60.4981Z",
            }),
            /* @__PURE__ */ React.createElement("path", {
              d: "M113.696 27.236C111.876 29.0396 109.659 29.9332 107.044 29.9332C104.43 29.9332 102.213 29.0396 100.426 27.236C98.622 25.4324 97.7285 23.2317 97.7285 20.6173C97.7285 18.0029 98.622 15.7856 100.426 13.9986C102.229 12.195 104.43 11.3015 107.044 11.3015C109.659 11.3015 111.876 12.195 113.696 13.9986C115.516 15.8022 116.41 18.0029 116.41 20.6173C116.41 23.2317 115.5 25.449 113.696 27.236ZM103.636 24.1087C104.546 25.0353 105.671 25.4821 107.044 25.4821C108.418 25.4821 109.559 25.0188 110.47 24.1087C111.38 23.1986 111.843 22.0238 111.843 20.6173C111.843 19.2108 111.38 18.036 110.47 17.1259C109.559 16.2159 108.401 15.7525 107.044 15.7525C105.688 15.7525 104.546 16.2159 103.636 17.1259C102.726 18.0526 102.279 19.2108 102.279 20.6173C102.279 22.0238 102.726 23.1986 103.636 24.1087Z",
            }),
            /* @__PURE__ */ React.createElement("path", {
              d: "M154.054 16.0835C153.21 16.0835 150.744 15.9677 149.785 13.3037V29.4368H154.302V16.067C154.302 16.067 154.137 16.0835 154.054 16.0835Z",
            }),
            /* @__PURE__ */ React.createElement("path", {
              d: "M153.905 13.2374C152.118 13.2374 150.811 12.0295 149.917 9.54751L149.536 8.50506L149.206 8.60434C148.891 8.70362 146.426 9.46477 145.234 10.2921C145.168 10.0439 145.102 9.79571 145.069 9.54751C144.754 7.37988 145.913 5.90721 148.709 4.89785L149.752 4.51728L149.652 4.18634C149.553 3.87195 148.792 1.40648 147.981 0.215108C148.229 0.148921 148.477 0.082734 148.726 0.0496404C148.957 0.0165468 149.172 0 149.388 0C151.175 0 152.482 1.20792 153.375 3.68994L153.756 4.74893L154.087 4.64965C154.401 4.55037 156.867 3.78922 158.058 2.96188C158.124 3.21008 158.19 3.45828 158.224 3.70648C158.538 5.87412 157.38 7.34678 154.583 8.35614L153.624 8.70362V8.95182C153.624 9.06765 154.451 11.7648 155.328 13.0389C155.08 13.1051 154.831 13.1713 154.583 13.2044C154.352 13.2374 154.137 13.254 153.921 13.254L153.905 13.2374Z",
            }),
            /* @__PURE__ */ React.createElement("path", {
              d: "M174.754 29.4368H169.492L165.653 24.0756L161.814 29.4368H156.552L163.022 20.4188L156.834 11.7648H162.096L165.653 16.7454L169.227 11.7648H174.456L168.267 20.4022L174.737 29.4368H174.754Z",
            }),
            /* @__PURE__ */ React.createElement("path", {
              d: "M88.0651 11.2684C90.0838 11.2684 91.7054 11.9302 92.9299 13.254C94.1543 14.5777 94.75 16.3482 94.75 18.549V29.4368H90.1831V18.8634C90.1831 17.8044 89.9183 16.977 89.4054 16.3813C88.8924 15.7856 88.1644 15.5044 87.2212 15.5044C86.1788 15.5044 85.3845 15.8518 84.8054 16.5303C84.2262 17.2087 83.9449 18.2015 83.9449 19.4921V29.4202H79.378V18.8468C79.378 17.7878 79.1133 16.9605 78.6003 16.3648C78.0874 15.7691 77.3593 15.4878 76.4161 15.4878C75.4068 15.4878 74.596 15.8353 74.0003 16.5137C73.4046 17.1921 73.1068 18.1849 73.1068 19.4756V29.4037H68.5399V11.7648H73.1068V13.6346C74.1658 12.0626 75.8039 11.2684 78.0212 11.2684C80.2385 11.2684 81.7939 12.1123 82.8198 13.8166C83.9946 12.1123 85.7485 11.2684 88.0816 11.2684H88.0651Z",
            }),
            /* @__PURE__ */ React.createElement("path", {
              d: "M139.178 11.2684C141.197 11.2684 142.819 11.9302 144.043 13.254C145.267 14.5777 145.863 16.3482 145.863 18.549V29.4368H141.296V18.8634C141.296 17.8044 141.031 16.977 140.519 16.3813C140.006 15.7856 139.277 15.5044 138.334 15.5044C137.292 15.5044 136.498 15.8518 135.919 16.5303C135.339 17.2087 135.058 18.2015 135.058 19.4921V29.4202H130.491V18.8468C130.491 17.7878 130.226 16.9605 129.713 16.3648C129.2 15.7691 128.472 15.4878 127.529 15.4878C126.52 15.4878 125.709 15.8353 125.113 16.5137C124.518 17.1921 124.22 18.1849 124.22 19.4756V29.4037H119.653V11.7648H124.22V13.6346C125.279 12.0626 126.917 11.2684 129.134 11.2684C131.352 11.2684 132.907 12.1123 133.933 13.8166C135.108 12.1123 136.862 11.2684 139.195 11.2684H139.178Z",
            }),
            n &&
              /* @__PURE__ */ React.createElement("path", {
                d: "M68.7033 65.525H67.2706C69.7841 69.425 74.1577 72 79.1596 72C83.5331 72 87.4542 70.025 90.018 66.925C92.6069 70.025 96.528 72 100.902 72C105.903 72 110.302 69.425 112.79 65.525H111.358C108.995 68.75 105.2 70.825 100.876 70.825C96.3269 70.825 92.3053 68.475 89.9928 64.925C87.6804 68.475 83.6839 70.825 79.1344 70.825C74.8363 70.825 71.0157 68.725 68.653 65.525M100.826 60.6V57.7H105.476V55.975H100.826V53.425H106.029V51.7H98.5137V62.325H106.28V60.6H100.826ZM93.8637 62.325L96.8548 51.7H94.7937L92.8583 59.075L91.1742 51.7H89.0126L87.1777 59.1L85.4685 51.7H82.9047L85.8707 62.325H88.1328L89.8169 55.525L91.5512 62.325H93.8637ZM82.2512 62.325L79.4863 58.275C80.2152 58 81.7736 57 81.7736 55.2C81.7736 52.925 80.0142 51.7 78.129 51.7H73.1774V62.325H75.4898V53.325H77.4504C78.4809 53.325 79.4109 54 79.4109 55.25C79.4109 56.5 78.305 57.2 77.0482 57.2C76.822 57.2 76.5958 57.2 76.4198 57.175L79.3355 62.3H82.2261L82.2512 62.325ZM55.7838 62.325L59.7049 51.7H57.5433L54.8035 59.5L52.1392 51.7H49.5L53.4965 62.325H55.7838ZM68.9044 57C68.9044 59.175 67.5219 60.925 65.7374 60.925C63.9528 60.925 62.5703 59.175 62.5703 57C62.5703 54.825 63.9528 53.075 65.7374 53.075C67.5219 53.075 68.9044 54.825 68.9044 57ZM65.7374 51.375C62.6457 51.375 60.1573 53.9 60.1573 57C60.1573 60.1 62.6709 62.625 65.7374 62.625C68.8038 62.625 71.3425 60.1 71.3425 57C71.3425 53.9 68.829 51.375 65.7374 51.375ZM111.282 48.45H112.715C110.202 44.575 105.828 42 100.851 42C96.4777 42 92.5566 43.975 89.9677 47.1C87.3788 44 83.4828 42 79.0841 42C74.1074 42 69.7338 44.575 67.2203 48.45H68.653C71.0157 45.25 74.8112 43.175 79.0841 43.175C83.6336 43.175 87.6553 45.525 89.9677 49.075C92.2801 45.525 96.2766 43.175 100.851 43.175C105.149 43.175 108.945 45.25 111.282 48.45ZM117.365 62.325L114.6 58.275C115.329 58 116.888 57 116.888 55.2C116.888 52.925 115.128 51.7 113.243 51.7H108.291V62.325H110.579V53.325H112.539C113.57 53.325 114.5 54 114.5 55.25C114.5 56.5 113.394 57.2 112.137 57.2C111.911 57.2 111.685 57.2 111.509 57.175L114.424 62.3H117.315L117.365 62.325ZM118.923 62.325H121.211V51.7H118.923V62.325ZM128.5 62.325L124.026 56.425L127.997 51.7H125.232L121.512 56.55L125.434 62.325H128.5Z",
              })
          )
        );
      case "medium":
        return /* @__PURE__ */ React.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "223",
            height: "72",
            fill: "currentColor",
            viewBox: "0 0 223 72",
            className: P(r, e),
          },
          /* @__PURE__ */ React.createElement(
            "g",
            { fill: "currentColor" },
            /* @__PURE__ */ React.createElement("path", {
              d: "M15.7346 20.3079H9.40919V29.5464C9.40919 30.3162 9.59645 30.878 9.99179 31.2317C10.3871 31.5855 10.9489 31.7935 11.6772 31.8352C12.4054 31.8768 13.3418 31.8768 14.4237 31.8144V37.0162C10.4912 37.4531 7.70299 37.0994 6.10083 35.9134C4.47786 34.7274 3.68719 32.605 3.68719 29.5672V20.3287H3.66638V10.3205L9.40919 8.59345V14.8148H15.7554V20.3287L15.7346 20.3079Z",
            }),
            /* @__PURE__ */ React.createElement("path", {
              d: "M30.8198 14.1698C33.2542 14.1698 35.2517 14.9812 36.8331 16.625C38.4144 18.2688 39.2051 20.516 39.2051 23.3874V37.0369H33.4623V24.0948C33.4623 22.6175 33.0669 21.4731 32.2555 20.7032C31.444 19.9334 30.3828 19.5172 29.0511 19.5172C27.5738 19.5172 26.3878 19.975 25.4931 20.8905C24.5984 21.806 24.1614 23.1793 24.1614 25.0311V37.0369H18.4186V5.90927H24.1614V17.2908C25.5555 15.2101 27.7611 14.1698 30.7782 14.1698H30.8198Z",
            }),
            /* @__PURE__ */ React.createElement("path", {
              d: "M48.9637 28.2771C49.7336 31.0652 51.8143 32.4593 55.2267 32.4593C57.4115 32.4593 59.076 31.7103 60.1996 30.2329L64.8188 32.8963C62.6341 36.059 59.3881 37.6611 55.1226 37.6611C51.4398 37.6611 48.5059 36.5583 46.2796 34.332C44.0532 32.1056 42.9504 29.3174 42.9504 25.9258C42.9504 22.5343 44.0532 19.7877 46.2379 17.5405C48.4227 15.2933 51.2525 14.1905 54.6857 14.1905C57.9524 14.1905 60.6366 15.3141 62.7589 17.5613C64.8813 19.8085 65.9424 22.5967 65.9424 25.9258C65.9424 26.6749 65.8592 27.4448 65.7135 28.2771H48.9637ZM48.8805 23.8243H60.2204C59.8875 22.3054 59.2217 21.1818 58.2021 20.4535C57.1826 19.7045 56.0174 19.3507 54.7065 19.3507C53.1668 19.3507 51.8975 19.7461 50.878 20.5368C49.8792 21.3274 49.2134 22.4302 48.8805 23.8451V23.8243Z",
            }),
            /* @__PURE__ */ React.createElement("path", {
              d: "M75.6595 18.6225C76.2005 17.2076 77.0744 16.1256 78.302 15.4181C79.5296 14.7107 80.9029 14.357 82.4218 14.357V20.7656C80.674 20.5575 79.1135 20.9113 77.7402 21.8268C76.3669 22.7423 75.6803 24.2612 75.6803 26.4044V37.0161H69.9375V14.7939H75.6803V18.6225H75.6595Z",
            }),
            /* @__PURE__ */ React.createElement("path", {
              d: "M142.555 34.2487C140.266 36.5167 137.478 37.6403 134.19 37.6403C130.903 37.6403 128.115 36.5167 125.867 34.2487C123.599 31.9807 122.476 29.2134 122.476 25.9258C122.476 22.6383 123.599 19.8501 125.867 17.6029C128.135 15.3349 130.903 14.2113 134.19 14.2113C137.478 14.2113 140.266 15.3349 142.555 17.6029C144.844 19.8709 145.967 22.6383 145.967 25.9258C145.967 29.2134 144.823 32.0016 142.555 34.2487ZM129.904 30.3162C131.048 31.4814 132.463 32.0432 134.19 32.0432C135.917 32.0432 137.353 31.4606 138.497 30.3162C139.642 29.1718 140.224 27.6945 140.224 25.9258C140.224 24.1572 139.642 22.6799 138.497 21.5355C137.353 20.3911 135.897 19.8085 134.19 19.8085C132.484 19.8085 131.048 20.3911 129.904 21.5355C128.76 22.7007 128.198 24.1572 128.198 25.9258C128.198 27.6945 128.76 29.1718 129.904 30.3162Z",
            }),
            /* @__PURE__ */ React.createElement("path", {
              d: "M193.304 20.2247C192.243 20.2247 189.142 20.0791 187.936 16.7291V37.0162H193.616V20.2039C193.616 20.2039 193.408 20.2247 193.304 20.2247Z",
            }),
            /* @__PURE__ */ React.createElement("path", {
              d: "M193.116 16.6458C190.869 16.6458 189.226 15.1269 188.102 12.0058L187.623 10.6949L187.207 10.8198C186.812 10.9446 183.712 11.9018 182.213 12.9421C182.13 12.63 182.047 12.3179 182.005 12.0058C181.61 9.28004 183.067 7.42819 186.583 6.15895L187.894 5.68038L187.769 5.26424C187.644 4.8689 186.687 1.76862 185.667 0.270494C185.98 0.187265 186.292 0.104036 186.604 0.0624218C186.895 0.0208073 187.166 0 187.436 0C189.683 0 191.327 1.51893 192.451 4.64002L192.929 5.97168L193.345 5.84684C193.741 5.722 196.841 4.76486 198.339 3.7245C198.422 4.03661 198.506 4.34872 198.547 4.66083C198.943 7.38658 197.486 9.23842 193.97 10.5077L192.763 10.9446V11.2567C192.763 11.4024 193.803 14.794 194.906 16.3961C194.594 16.4794 194.282 16.5626 193.97 16.6042C193.678 16.6458 193.408 16.6666 193.137 16.6666L193.116 16.6458Z",
            }),
            /* @__PURE__ */ React.createElement("path", {
              d: "M219.334 37.0161H212.717L207.89 30.2746L203.062 37.0161H196.446L204.581 25.6762L196.799 14.794H203.416L207.89 21.057L212.384 14.794H218.959L211.177 25.6554L219.313 37.0161H219.334Z",
            }),
            /* @__PURE__ */ React.createElement("path", {
              d: "M110.324 14.1697C112.863 14.1697 114.902 15.002 116.442 16.6666C117.981 18.3312 118.73 20.5576 118.73 23.3249V37.0161H112.988V23.7203C112.988 22.3886 112.655 21.3482 112.01 20.5992C111.365 19.8501 110.449 19.4964 109.263 19.4964C107.952 19.4964 106.954 19.9333 106.225 20.7864C105.497 21.6395 105.143 22.888 105.143 24.5109V36.9953H99.4005V23.6995C99.4005 22.3678 99.0676 21.3274 98.4226 20.5784C97.7776 19.8293 96.8621 19.4756 95.676 19.4756C94.4068 19.4756 93.3872 19.9125 92.6382 20.7656C91.8891 21.6187 91.5146 22.8672 91.5146 24.4901V36.9745H85.7718V14.794H91.5146V17.1452C92.8463 15.1685 94.9062 14.1697 97.6944 14.1697C100.483 14.1697 102.438 15.2309 103.728 17.3741C105.206 15.2309 107.411 14.1697 110.345 14.1697H110.324Z",
            }),
            /* @__PURE__ */ React.createElement("path", {
              d: "M174.598 14.1697C177.137 14.1697 179.176 15.002 180.715 16.6666C182.255 18.3312 183.004 20.5576 183.004 23.3249V37.0161H177.261V23.7203C177.261 22.3886 176.928 21.3482 176.283 20.5992C175.638 19.8501 174.723 19.4964 173.537 19.4964C172.226 19.4964 171.227 19.9333 170.499 20.7864C169.771 21.6395 169.417 22.888 169.417 24.5109V36.9953H163.674V23.6995C163.674 22.3678 163.341 21.3274 162.696 20.5784C162.051 19.8293 161.136 19.4756 159.95 19.4756C158.68 19.4756 157.661 19.9125 156.912 20.7656C156.163 21.6187 155.788 22.8672 155.788 24.4901V36.9745H150.045V14.794H155.788V17.1452C157.12 15.1685 159.18 14.1697 161.968 14.1697C164.756 14.1697 166.712 15.2309 168.002 17.3741C169.479 15.2309 171.685 14.1697 174.619 14.1697H174.598Z",
            }),
            n &&
              /* @__PURE__ */ React.createElement("path", {
                d: "M94.677 66.5588H93.4895C95.5729 69.8088 99.1979 71.9546 103.344 71.9546C106.969 71.9546 110.219 70.3088 112.344 67.7254C114.49 70.3088 117.74 71.9546 121.365 71.9546C125.51 71.9546 129.156 69.8088 131.219 66.5588H130.031C128.073 69.2463 124.927 70.9754 121.344 70.9754C117.573 70.9754 114.24 69.0171 112.323 66.0588C110.406 69.0171 107.094 70.9754 103.323 70.9754C99.7604 70.9754 96.5937 69.2254 94.6354 66.5588M121.302 62.4546V60.0379H125.156V58.6004H121.302V56.4754H125.615V55.0379H119.385V63.8921H125.823V62.4546H121.302ZM115.531 63.8921L118.01 55.0379H116.302L114.698 61.1838L113.302 55.0379H111.51L109.99 61.2046L108.573 55.0379H106.448L108.906 63.8921H110.781L112.177 58.2254L113.615 63.8921H115.531ZM105.906 63.8921L103.615 60.5171C104.219 60.2879 105.51 59.4546 105.51 57.9546C105.51 56.0588 104.052 55.0379 102.49 55.0379H98.3854V63.8921H100.302V56.3921H101.927C102.781 56.3921 103.552 56.9546 103.552 57.9963C103.552 59.0379 102.635 59.6213 101.594 59.6213C101.406 59.6213 101.219 59.6213 101.073 59.6004L103.49 63.8713H105.885L105.906 63.8921ZM83.9687 63.8921L87.2187 55.0379H85.427L83.1562 61.5379L80.9479 55.0379H78.7604L82.0729 63.8921H83.9687ZM94.8437 59.4546C94.8437 61.2671 93.6979 62.7254 92.2187 62.7254C90.7395 62.7254 89.5937 61.2671 89.5937 59.4546C89.5937 57.6421 90.7395 56.1838 92.2187 56.1838C93.6979 56.1838 94.8437 57.6421 94.8437 59.4546ZM92.2187 54.7671C89.6562 54.7671 87.5937 56.8713 87.5937 59.4546C87.5937 62.0379 89.677 64.1421 92.2187 64.1421C94.7604 64.1421 96.8645 62.0379 96.8645 59.4546C96.8645 56.8713 94.7812 54.7671 92.2187 54.7671ZM129.969 52.3296H131.156C129.073 49.1004 125.448 46.9546 121.323 46.9546C117.698 46.9546 114.448 48.6004 112.302 51.2046C110.156 48.6213 106.927 46.9546 103.281 46.9546C99.1562 46.9546 95.5312 49.1004 93.4479 52.3296H94.6354C96.5937 49.6629 99.7395 47.9338 103.281 47.9338C107.052 47.9338 110.385 49.8921 112.302 52.8504C114.219 49.8921 117.531 47.9338 121.323 47.9338C124.885 47.9338 128.031 49.6629 129.969 52.3296ZM135.01 63.8921L132.719 60.5171C133.323 60.2879 134.615 59.4546 134.615 57.9546C134.615 56.0588 133.156 55.0379 131.594 55.0379H127.49V63.8921H129.385V56.3921H131.01C131.865 56.3921 132.635 56.9546 132.635 57.9963C132.635 59.0379 131.719 59.6213 130.677 59.6213C130.49 59.6213 130.302 59.6213 130.156 59.6004L132.573 63.8713H134.969L135.01 63.8921ZM136.302 63.8921H138.198V55.0379H136.302V63.8921ZM144.24 63.8921L140.531 58.9754L143.823 55.0379H141.531L138.448 59.0796L141.698 63.8921H144.24Z",
              })
          )
        );
      case "large":
        return /* @__PURE__ */ React.createElement(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "152",
            height: "72",
            fill: "currentColor",
            viewBox: "0 0 152 72",
            className: P(r, e),
          },
          /* @__PURE__ */ React.createElement(
            "g",
            { fill: "currentColor" },
            /* @__PURE__ */ React.createElement("path", {
              d: "M11.3841 13.7024H7.11618V19.9358C7.11618 20.4553 7.24253 20.8344 7.50928 21.073C7.77603 21.3117 8.15509 21.4521 8.64646 21.4802C9.13784 21.5082 9.76961 21.5082 10.4997 21.4661V24.976C7.84622 25.2708 5.96496 25.0321 4.88393 24.2319C3.78887 23.4316 3.25537 21.9996 3.25537 19.9499V13.7164H3.24133V6.96353L7.11618 5.79827V9.99602H11.3982V13.7164L11.3841 13.7024Z",
            }),
            /* @__PURE__ */ React.createElement("path", {
              d: "M21.5626 9.56077C23.2052 9.56077 24.5529 10.1083 25.6199 11.2174C26.6869 12.3265 27.2204 13.8428 27.2204 15.7802V24.99H23.3456V16.2575C23.3456 15.2607 23.0788 14.4886 22.5313 13.9691C21.9837 13.4497 21.2677 13.1689 20.3692 13.1689C19.3724 13.1689 18.5722 13.4777 17.9685 14.0955C17.3648 14.7132 17.07 15.6398 17.07 16.8893V24.99H13.1951V3.98717H17.07V11.6667C18.0106 10.2627 19.4988 9.56077 21.5345 9.56077H21.5626Z",
            }),
            /* @__PURE__ */ React.createElement("path", {
              d: "M33.8048 19.0794C34.3243 20.9607 35.7282 21.9013 38.0307 21.9013C39.5048 21.9013 40.6279 21.3959 41.3861 20.3991L44.5028 22.1961C43.0287 24.3301 40.8385 25.4111 37.9605 25.4111C35.4755 25.4111 33.496 24.667 31.9938 23.1648C30.4916 21.6626 29.7475 19.7814 29.7475 17.493C29.7475 15.2046 30.4916 13.3514 31.9657 11.8351C33.4398 10.3189 35.3492 9.5748 37.6656 9.5748C39.8698 9.5748 41.6809 10.3329 43.1129 11.8492C44.5449 13.3654 45.2609 15.2467 45.2609 17.493C45.2609 17.9984 45.2047 18.5178 45.1065 19.0794H33.8048ZM33.7487 16.075H41.4001C41.1755 15.0501 40.7262 14.292 40.0383 13.8006C39.3504 13.2952 38.5642 13.0565 37.6797 13.0565C36.6408 13.0565 35.7844 13.3233 35.0965 13.8568C34.4226 14.3903 33.9733 15.1344 33.7487 16.089V16.075Z",
            }),
            /* @__PURE__ */ React.createElement("path", {
              d: "M51.8173 12.5652C52.1823 11.6105 52.772 10.8804 53.6003 10.4031C54.4286 9.92577 55.3552 9.6871 56.3801 9.6871V14.0112C55.2008 13.8708 54.1478 14.1095 53.2212 14.7272C52.2947 15.3449 51.8314 16.3698 51.8314 17.8159V24.9759H47.9565V9.98192H51.8314V12.5652H51.8173Z",
            }),
            /* @__PURE__ */ React.createElement("path", {
              d: "M96.9537 23.1087C95.4094 24.639 93.5281 25.3971 91.3099 25.3971C89.0917 25.3971 87.2104 24.639 85.6942 23.1087C84.1639 21.5784 83.4058 19.7112 83.4058 17.493C83.4058 15.2748 84.1639 13.3935 85.6942 11.8772C87.2245 10.347 89.0917 9.58884 91.3099 9.58884C93.5281 9.58884 95.4094 10.347 96.9537 11.8772C98.498 13.4075 99.2561 15.2748 99.2561 17.493C99.2561 19.7112 98.484 21.5924 96.9537 23.1087ZM88.4178 20.4553C89.19 21.2415 90.1446 21.6205 91.3099 21.6205C92.4752 21.6205 93.4439 21.2274 94.216 20.4553C94.9882 19.6831 95.3813 18.6863 95.3813 17.493C95.3813 16.2996 94.9882 15.3028 94.216 14.5307C93.4439 13.7585 92.4611 13.3654 91.3099 13.3654C90.1587 13.3654 89.19 13.7585 88.4178 14.5307C87.6456 15.3169 87.2666 16.2996 87.2666 17.493C87.2666 18.6863 87.6456 19.6831 88.4178 20.4553Z",
            }),
            /* @__PURE__ */ React.createElement("path", {
              d: "M131.196 13.6462C130.48 13.6462 128.388 13.548 127.573 11.2876V24.976H131.406V13.6322C131.406 13.6322 131.266 13.6462 131.196 13.6462Z",
            }),
            /* @__PURE__ */ React.createElement("path", {
              d: "M131.069 11.2314C129.553 11.2314 128.444 10.2066 127.686 8.10068L127.363 7.2162L127.082 7.30044C126.815 7.38467 124.723 8.03048 123.713 8.73245C123.656 8.52186 123.6 8.31127 123.572 8.10068C123.305 6.26153 124.288 5.01203 126.661 4.15563L127.545 3.83273L127.461 3.55194C127.377 3.2852 126.731 1.19334 126.043 0.182511C126.254 0.126354 126.464 0.0701965 126.675 0.0421179C126.871 0.0140393 127.054 0 127.236 0C128.753 0 129.862 1.02487 130.62 3.13076L130.943 4.02928L131.224 3.94504C131.49 3.86081 133.582 3.215 134.593 2.51304C134.649 2.72363 134.705 2.93421 134.733 3.1448C135 4.98395 134.017 6.23345 131.645 7.08985L130.831 7.38468V7.59526C130.831 7.69354 131.532 9.98195 132.277 11.063C132.066 11.1191 131.855 11.1753 131.645 11.2034C131.448 11.2314 131.266 11.2455 131.083 11.2455L131.069 11.2314Z",
            }),
            /* @__PURE__ */ React.createElement("path", {
              d: "M148.759 24.9759H144.294L141.037 20.4272L137.78 24.9759H133.315L138.805 17.3245L133.554 9.98195H138.019L141.037 14.2078L144.07 9.98195H148.506L143.255 17.3105L148.745 24.9759H148.759Z",
            }),
            /* @__PURE__ */ React.createElement("path", {
              d: "M75.2068 9.56076C76.9196 9.56076 78.2954 10.1223 79.3343 11.2455C80.3732 12.3686 80.8786 13.8708 80.8786 15.7381V24.9759H77.0038V16.0048C77.0038 15.1063 76.7792 14.4043 76.344 13.8989C75.9087 13.3935 75.291 13.1548 74.4908 13.1548C73.6063 13.1548 72.9324 13.4496 72.441 14.0253C71.9497 14.6009 71.711 15.4432 71.711 16.5383V24.9619H67.8361V15.9908C67.8361 15.0922 67.6115 14.3903 67.1763 13.8849C66.7411 13.3795 66.1233 13.1408 65.3231 13.1408C64.4667 13.1408 63.7788 13.4356 63.2734 14.0112C62.7679 14.5868 62.5152 15.4292 62.5152 16.5243V24.9478H58.6404V9.98194H62.5152V11.5684C63.4138 10.2346 64.8036 9.56076 66.6849 9.56076C68.5662 9.56076 69.8859 10.2768 70.7563 11.7228C71.7531 10.2768 73.2413 9.56076 75.2208 9.56076H75.2068Z",
            }),
            /* @__PURE__ */ React.createElement("path", {
              d: "M118.574 9.56076C120.287 9.56076 121.663 10.1223 122.702 11.2455C123.741 12.3686 124.246 13.8708 124.246 15.7381V24.9759H120.371V16.0048C120.371 15.1063 120.147 14.4043 119.711 13.8989C119.276 13.3935 118.658 13.1548 117.858 13.1548C116.974 13.1548 116.3 13.4496 115.808 14.0253C115.317 14.6009 115.078 15.4432 115.078 16.5383V24.9619H111.204V15.9908C111.204 15.0922 110.979 14.3903 110.544 13.8849C110.109 13.3795 109.491 13.1408 108.691 13.1408C107.834 13.1408 107.146 13.4356 106.641 14.0112C106.135 14.5868 105.883 15.4292 105.883 16.5243V24.9478H102.008V9.98194H105.883V11.5684C106.781 10.2346 108.171 9.56076 110.052 9.56076C111.934 9.56076 113.253 10.2768 114.124 11.7228C115.121 10.2768 116.609 9.56076 118.588 9.56076H118.574Z",
            }),
            n &&
              /* @__PURE__ */ React.createElement("path", {
                d: "M52.3205 64.4458H50.649C53.5814 68.9958 58.6839 72 64.5194 72C69.6219 72 74.1965 69.6958 77.1876 66.0792C80.208 69.6958 84.7826 72 89.8851 72C95.7206 72 100.852 68.9958 103.756 64.4458H102.084C99.3275 68.2083 94.8995 70.6292 89.8557 70.6292C84.548 70.6292 79.8561 67.8875 77.1583 63.7458C74.4604 67.8875 69.7978 70.6292 64.4901 70.6292C59.4756 70.6292 55.0183 68.1792 52.2618 64.4458M89.7971 58.7V55.3167H95.2221V53.3042H89.7971V50.3292H95.8672V48.3167H87.0993V60.7125H96.1605V58.7H89.7971ZM81.6742 60.7125L85.1638 48.3167H82.7592L80.5013 56.9208L78.5365 48.3167H76.0146L73.8739 56.95L71.8799 48.3167H68.8888L72.3491 60.7125H74.9883L76.953 52.7792L78.9764 60.7125H81.6742ZM68.1264 60.7125L64.9007 55.9875C65.7511 55.6667 67.5692 54.5 67.5692 52.4C67.5692 49.7458 65.5165 48.3167 63.3171 48.3167H57.5402V60.7125H60.2381V50.2125H62.5254C63.7277 50.2125 64.8127 51 64.8127 52.4583C64.8127 53.9167 63.5224 54.7333 62.0562 54.7333C61.7923 54.7333 61.5284 54.7333 61.3231 54.7042L64.7247 60.6833H68.097L68.1264 60.7125ZM37.2477 60.7125L41.8223 48.3167H39.3004L36.1041 57.4167L32.9957 48.3167H29.9166L34.5792 60.7125H37.2477ZM52.5551 54.5C52.5551 57.0375 50.9422 59.0792 48.8602 59.0792C46.7782 59.0792 45.1653 57.0375 45.1653 54.5C45.1653 51.9625 46.7782 49.9208 48.8602 49.9208C50.9422 49.9208 52.5551 51.9625 52.5551 54.5ZM48.8602 47.9375C45.2533 47.9375 42.3502 50.8833 42.3502 54.5C42.3502 58.1167 45.2826 61.0625 48.8602 61.0625C52.4378 61.0625 55.3995 58.1167 55.3995 54.5C55.3995 50.8833 52.4671 47.9375 48.8602 47.9375ZM101.996 44.525H103.668C100.735 40.0042 95.6327 37 89.8264 37C84.724 37 80.1494 39.3042 77.1289 42.95C74.1085 39.3333 69.5632 37 64.4315 37C58.6252 37 53.5228 40.0042 50.5903 44.525H52.2618C55.0183 40.7917 59.4463 38.3708 64.4315 38.3708C69.7392 38.3708 74.4311 41.1125 77.1289 45.2542C79.8268 41.1125 84.4894 38.3708 89.8264 38.3708C94.8409 38.3708 99.2689 40.7917 101.996 44.525ZM109.093 60.7125L105.867 55.9875C106.717 55.6667 108.535 54.5 108.535 52.4C108.535 49.7458 106.483 48.3167 104.283 48.3167H98.5065V60.7125H101.175V50.2125H103.462C104.665 50.2125 105.75 51 105.75 52.4583C105.75 53.9167 104.459 54.7333 102.993 54.7333C102.729 54.7333 102.465 54.7333 102.26 54.7042L105.662 60.6833H109.034L109.093 60.7125ZM110.911 60.7125H113.579V48.3167H110.911V60.7125ZM122.083 60.7125L116.864 53.8292L121.497 48.3167H118.271L113.931 53.975L118.506 60.7125H122.083Z",
              })
          )
        );
    }
  },
  Gd = ({ className: e = "", size: t = "small", showVorwerkLogo: n = !0 }) => {
    const r = t9[t];
    return /* @__PURE__ */ React.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "71",
        height: "77",
        fill: "none",
        viewBox: "0 0 71 77",
        className: P(r, e),
        focusable: "false",
      },
      /* @__PURE__ */ React.createElement(
        "g",
        { fill: "#00AC46", clipPath: "url(#clip0_2651_398)" },
        /* @__PURE__ */ React.createElement("path", {
          fillRule: "evenodd",
          d: "M29.456 5.737c0 .255-.203.46-.46.47-5.931.229-10.72 4.852-11.12 10.663a.474.474 0 01-.664.404.474.474 0 01-.29-.461c.375-6.345 5.58-11.41 12.038-11.657a.475.475 0 01.496.472v.11zM29.219 0C39.229 0 47.34 7.724 47.34 17.253c0 9.528-8.113 17.252-18.122 17.252a18.912 18.912 0 01-6.03-.98l-9.022 5.659 2.213-9.708.085.032-.06-.057c-3.28-3.122-5.309-7.435-5.309-12.198C11.096 7.724 19.21 0 29.22 0zm25.469 0c2.435 0 4.408 2.985 4.408 6.667 0 2.772-1.12 5.15-2.712 6.155V32.5c0 .986-.76 1.786-1.695 1.786-.938 0-1.696-.8-1.696-1.786V12.823C51.4 11.818 50.28 9.44 50.28 6.668c0-3.683 1.974-6.667 4.408-6.667V0z",
          clipRule: "evenodd",
        }),
        n &&
          /* @__PURE__ */ React.createElement("path", {
            d: "M17.062 70.249H15.79c2.234 3.484 6.12 5.784 10.564 5.784 3.886 0 7.37-1.764 9.648-4.534a12.547 12.547 0 009.67 4.534c4.444 0 8.352-2.3 10.563-5.784h-1.273a11.462 11.462 0 01-9.313 4.734c-4.042 0-7.615-2.099-9.67-5.27-2.054 3.171-5.605 5.27-9.648 5.27-3.818 0-7.213-1.876-9.312-4.734m28.586-4.4v-2.59h4.131v-1.541h-4.131V59.44h4.623v-1.541h-6.678v9.491h6.901v-1.54h-4.846zm-8.219 1.541h2.033l2.657-9.491h-1.831l-1.72 6.588-1.496-6.588h-1.92l-1.631 6.61-1.519-6.61h-2.277l2.635 9.491h2.01l1.496-6.074 1.541 6.074h.022zm-8.285 0l-2.457-3.618c.648-.245 2.032-1.139 2.032-2.747 0-2.032-1.563-3.126-3.238-3.126h-4.4v9.491h2.055v-8.04h1.742c.916 0 1.742.603 1.742 1.72s-.983 1.742-2.1 1.742c-.2 0-.401 0-.557-.022l2.59 4.578h2.569l.022.022zm-23.517 0L9.067 57.9h-1.92l-2.435 6.968-2.367-6.968H0l3.55 9.491h2.033zm11.658-4.757c0 1.943-1.228 3.506-2.814 3.506s-2.814-1.563-2.814-3.506c0-1.943 1.228-3.506 2.814-3.506s2.814 1.563 2.814 3.506zm-2.814-5.025c-2.747 0-4.958 2.256-4.958 5.025 0 2.77 2.233 5.025 4.958 5.025s4.98-2.255 4.98-5.025c0-2.769-2.233-5.025-4.98-5.025zm40.467-2.613h1.273c-2.233-3.461-6.119-5.761-10.54-5.761-3.887 0-7.37 1.764-9.671 4.555-2.3-2.769-5.762-4.556-9.67-4.556-4.422 0-8.308 2.3-10.541 5.762h1.273c2.099-2.858 5.471-4.712 9.268-4.712 4.042 0 7.615 2.1 9.67 5.27 2.055-3.17 5.606-5.27 9.67-5.27 3.82 0 7.191 1.854 9.268 4.712zM60.3 67.39l-2.457-3.618c.648-.245 2.033-1.139 2.033-2.747 0-2.032-1.564-3.126-3.239-3.126h-4.4v9.491h2.033v-8.04h1.742c.916 0 1.742.603 1.742 1.72s-.983 1.742-2.1 1.742c-.2 0-.401 0-.558-.022l2.59 4.578h2.57l.044.022zm1.385 0h2.032V57.9h-2.032v9.491zm8.508 0l-3.975-5.27 3.529-4.221h-2.457l-3.305 4.332 3.484 5.16h2.724z",
          })
      ),
      /* @__PURE__ */ React.createElement(
        "defs",
        null,
        /* @__PURE__ */ React.createElement(
          "clipPath",
          { id: "clip0_2651_398" },
          /* @__PURE__ */ React.createElement("path", {
            fill: "#fff",
            d: "M0 0H70.192V76.033H0z",
          })
        )
      )
    );
  },
  Kd = ({ className: e = "", size: t = "small" }) => {
    const n = r9[t];
    return /* @__PURE__ */ React.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        width: "190",
        height: "72",
        fill: "none",
        viewBox: "0 0 190 72",
        className: P(n, e),
        focusable: "false",
      },
      /* @__PURE__ */ React.createElement(
        "g",
        { clipPath: "url(#clip0_1707_1691)" },
        /* @__PURE__ */ React.createElement("path", {
          fill: "currentColor",
          d: "M46.264 56.437h-3.395C48.847 65.796 59.333 72 71.275 72a33.547 33.547 0 0025.943-12.213C103.392 67.238 112.736 72 123.176 72c11.942 0 22.427-6.204 28.406-15.578h-3.41c-5.618 7.737-14.721 12.754-24.996 12.754-10.891 0-20.46-5.633-25.958-14.136-5.498 8.503-15.067 14.136-25.943 14.136-10.29 0-19.393-5.017-24.996-12.739m76.807-11.807v-6.955h11.086v-4.131h-11.086v-6.129h12.453v-4.131h-17.936v25.492h18.507v-4.13h-13.024v-.016zm-22.068 4.131h5.453l7.151-25.492h-4.912l-4.597 17.68-4.011-17.68h-5.168l-4.356 17.756-4.07-17.756h-6.115L87.47 48.76h5.407l4.026-16.344 4.116 16.344zm-22.262 0l-6.58-9.704c1.728-.646 5.483-3.05 5.483-7.376 0-5.438-4.22-8.412-8.667-8.412H57.184V48.76h5.498V27.175h4.672c2.479 0 4.687 1.607 4.687 4.641 0 3.035-2.674 4.702-5.633 4.702-.57 0-1.052 0-1.472-.06l6.94 12.303h6.88zm-63.182 0l9.388-25.492h-5.167l-6.52 18.747v-.045L6.906 23.27H.627l9.539 25.492H15.574zM46.91 35.962c0 5.213-3.32 9.434-7.541 9.434-4.222 0-7.541-4.22-7.541-9.434 0-5.212 3.32-9.433 7.54-9.433 4.222 0 7.541 4.22 7.541 9.433zm-7.541-13.52c-7.376 0-13.355 6.055-13.355 13.52 0 7.466 5.979 13.52 13.354 13.52 7.376 0 13.355-6.054 13.355-13.52 0-7.465-5.979-13.52-13.355-13.52zm108.743-7h3.41C145.528 6.145 135.073-.014 123.191-.014c-10.44 0-19.784 4.762-25.958 12.213C91.043 4.762 81.715 0 71.26 0 59.378 0 48.922 6.174 42.944 15.473h3.41C51.972 7.81 61.045 2.824 71.275 2.824c10.89 0 20.46 5.633 25.958 14.136C102.73 8.457 112.3 2.824 123.19 2.824c10.23 0 19.303 4.972 24.921 12.634m14.541 33.318l-6.579-9.704c1.727-.646 5.483-3.05 5.483-7.376 0-5.438-4.221-8.412-8.668-8.412h-11.807v25.492h5.483V27.19h4.687c2.478 0 4.687 1.607 4.687 4.641 0 3.035-2.674 4.702-5.634 4.702-.571 0-1.051 0-1.472-.06l6.94 12.303h6.88zm3.726 0h5.483V23.27h-5.483v25.507zm22.863 0L178.577 34.64l9.478-11.341h-6.579l-8.893 11.642 9.358 13.85h7.316l-.015-.015z",
        })
      ),
      /* @__PURE__ */ React.createElement(
        "defs",
        null,
        /* @__PURE__ */ React.createElement(
          "clipPath",
          { id: "clip0_1707_1691" },
          /* @__PURE__ */ React.createElement("path", {
            fill: "#fff",
            d: "M0 0H188.615V72H0z",
            transform: "translate(.627)",
          })
        )
      )
    );
  };
var s9 = {
    lightGrey: "wl5grib",
    blue: "wl5gric",
    green: "wl5grid",
    orange: "wl5grie",
    red: "wl5grif",
    white: "wl5grig",
    black: "wl5grih",
  },
  o9 = { imageFill: "wl5gri9 wl5gri8", colorFill: "wl5gria wl5gri8" },
  a9 = { imageFill: "wl5gri3 wl5gri2", colorFill: "wl5gri4 wl5gri2" },
  i9 = { imageFill: "wl5gri6 wl5gri5", colorFill: "wl5gri7 wl5gri5" },
  l9 = "wl5gri1",
  c9 = "wl5gri0";
const Yd = ({
  image: e,
  video: t,
  headline: n,
  infoList: r,
  cta: s,
  type: o = "imageFill",
  backgroundColor: a = "lightGrey",
  isLandingPage: i = !1,
}) => {
  const f = Oe()[0] >= Number(Ne.l.replace("px", ""));
  console.log(i);
  const d = i ? c9 : "",
    u = o === "colorFill" ? s9[a] : "";
  return /* @__PURE__ */ l.createElement(
    "div",
    { className: P(a9[o], u, d) },
    /* @__PURE__ */ l.createElement(
      "div",
      { className: i9[o] },
      o === "imageFill" && t && /* @__PURE__ */ l.createElement("div", null, t),
      e
    ),
    /* @__PURE__ */ l.createElement(
      "div",
      { className: P(o9[o], d) },
      /* @__PURE__ */ l.createElement("div", null, n),
      /* @__PURE__ */ l.createElement(
        "div",
        null,
        Se.map(s, (h) =>
          ht(h)
            ? We(h, {
                layout: f ? "horizontal" : "vertical",
                children: Se.map(h.props.children, (m) =>
                  ht(m)
                    ? We(m, {
                        size: f ? "large" : "medium",
                      })
                    : m
                ),
              })
            : h
        )
      ),
      r && /* @__PURE__ */ l.createElement("div", { className: l9 }, r)
    )
  );
};
var u9 = "bb4ht01",
  d9 = "bb4ht03",
  f9 = "bb4ht0c",
  h9 = "bb4ht00",
  m9 = { default: "bb4ht0e bb4ht0d", additional: "bb4ht0f bb4ht0d" },
  p9 = {
    green: "bb4ht04",
    blue: "bb4ht05",
    purple: "bb4ht06",
    red: "bb4ht07",
    orange: "bb4ht08",
    yellow: "bb4ht09",
    anthracite: "bb4ht0a",
    white: "bb4ht0b",
  },
  v9 = "bb4ht02";
const Xd = ({
  children: e,
  eyebrowLine: t,
  subline: n,
  spaceBelow: r,
  strongColor: s = "green",
}) => {
  const o = r ? m9[r] : "",
    a = n ? f9 : "",
    i = p9[s];
  return /* @__PURE__ */ React.createElement(
    "div",
    { className: P(o, h9, i) },
    t && /* @__PURE__ */ React.createElement("p", { className: u9 }, t),
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: P(d9, a),
      },
      e
    ),
    n && /* @__PURE__ */ React.createElement("p", { className: v9 }, n)
  );
};
var g9 = "zjytp2",
  w9 = "zjytp1",
  y9 = "zjytp0";
const Jd = ({ logo: e, text: t, images: n }) =>
  /* @__PURE__ */ React.createElement(
    "div",
    { className: P(Be, y9) },
    /* @__PURE__ */ React.createElement(
      "div",
      { className: w9 },
      e,
      /* @__PURE__ */ React.createElement("div", null, t)
    ),
    /* @__PURE__ */ React.createElement("div", { className: g9 }, n)
  );
var C9 = "_1llv8oz1",
  b9 = {
    spacingVertical: "_1llv8oz2 _1llv8oz0",
    spacingBottom: "_1llv8oz3 _1llv8oz0",
  };
const Qd = ({
  children: e,
  variant: t = "spacingVertical",
  borderBottom: n,
}) => {
  const r = n ? C9 : "";
  return /* @__PURE__ */ React.createElement(
    "section",
    {
      className: P(b9[t], r),
    },
    /* @__PURE__ */ React.createElement(Y3, null, e)
  );
};
var E9 = "qtlqkt0";
const ef = ({ children: e }) =>
  /* @__PURE__ */ l.createElement("div", { className: P(E9, Be) }, e);
var x9 = "_1u0x3zt0";
const tf = ({ children: e }) =>
  /* @__PURE__ */ React.createElement("div", { className: P(x9, Be) }, e);
var S9 = "_19agmar2",
  R9 = "_19agmar1",
  _9 = "_19agmar0";
const nf = ({ headline: e, button: t }) =>
    /* @__PURE__ */ React.createElement(
      "div",
      { className: P(Be, _9) },
      /* @__PURE__ */ React.createElement("div", { className: R9 }, e),
      /* @__PURE__ */ React.createElement("div", { className: S9 }, t)
    ),
  M9 = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M3 12a9 9 0 1 1 18.001.001A9 9 0 0 1 3 12Zm2.06-1.92c-.17.61-.26 1.25-.26 1.92s.09 1.31.26 1.92h2.97c-.07-.63-.11-1.27-.11-1.92s.04-1.29.11-1.92H5.06Zm.77-1.8h2.49c.23-1.05.55-2.04.95-2.95a7.234 7.234 0 0 0-3.44 2.95Zm5.73-3.47c-.59.97-1.07 2.16-1.39 3.47h3.64c-.33-1.31-.81-2.5-1.4-3.47-.14 0-.28-.01-.42-.01-.15 0-.29 0-.44.01Zm3.15.51c.4.91.73 1.91.96 2.96h2.5a7.255 7.255 0 0 0-3.46-2.96Zm4.24 4.76h-2.98c.07.63.11 1.27.11 1.92s-.04 1.29-.11 1.92h2.98c.17-.61.26-1.25.26-1.92s-.09-1.31-.26-1.92Zm-.77 5.64h-2.5c-.23 1.05-.56 2.05-.96 2.96a7.202 7.202 0 0 0 3.46-2.96Zm-5.75 3.47c.59-.97 1.07-2.16 1.4-3.47h-3.65c.32 1.31.8 2.5 1.38 3.47.15 0 .3.01.44.01s.28 0 .42-.01Zm-3.15-.52c-.4-.91-.72-1.9-.94-2.95H5.85c.79 1.31 2 2.36 3.43 2.95Zm.58-4.75h4.31c.08-.63.12-1.27.12-1.92s-.04-1.29-.12-1.92H9.86c-.08.63-.12 1.27-.12 1.92s.04 1.29.12 1.92Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    );
var L9 = "_16ls4wa1",
  V9 = "_16ls4wa0",
  T9 = "_16ls4wa4",
  P9 = "_16ls4wa9",
  H9 = "_16ls4wa3",
  A9 = "_16ls4wa8",
  Z9 = "_16ls4wa5",
  k9 = "_16ls4wa2",
  D9 = "_16ls4waa",
  B9 = "_16ls4wa6",
  O9 = "_16ls4wa7";
let _a = 0;
const N9 = ({ children: e, isActive: t, setIsActive: n, setIsClosing: r }) =>
    Oe()[0] < Number(Ne.m.replace("px", ""))
      ? /* @__PURE__ */ l.createElement(
          ee,
          {
            isOpen: t,
            onClose: () => n(!1),
            detent: "content-height",
          },
          /* @__PURE__ */ l.createElement(
            ee.Container,
            null,
            /* @__PURE__ */ l.createElement(
              ee.Header,
              null,
              /* @__PURE__ */ l.createElement(as, null)
            ),
            /* @__PURE__ */ l.createElement(
              ee.Content,
              null,
              /* @__PURE__ */ l.createElement(
                Fn,
                null,
                /* @__PURE__ */ l.createElement("div", { className: P9 }, e)
              )
            )
          ),
          /* @__PURE__ */ l.createElement(ee.Backdrop, { onTap: () => n(!1) })
        )
      : /* @__PURE__ */ l.createElement(
          ln,
          {
            open: t,
            modal: !0,
            onOpenChange: (a) => {
              a ||
                (r(!0),
                clearTimeout(_a),
                (_a = window.setTimeout(() => {
                  r(!1);
                }, 200))),
                n(a);
            },
          },
          /* @__PURE__ */ l.createElement(C1, { className: H9 }),
          /* @__PURE__ */ l.createElement(
            cn,
            { className: L9 },
            /* @__PURE__ */ l.createElement(
              Fn,
              null,
              /* @__PURE__ */ l.createElement(
                "div",
                { className: k9 },
                /* @__PURE__ */ l.createElement(ei, {
                  onClick: () => n(!1),
                  icon: /* @__PURE__ */ l.createElement($n, null),
                }),
                e
              )
            )
          )
        ),
  rf = ({
    title: e,
    buttonLabel: t,
    modalTitle: n,
    suggestedLanguages: r,
    suggestedLabel: s,
    languages: o,
  }) => {
    const [a, i] = F(!1),
      [c, f] = F(!1);
    return (
      O(() => {
        const d = (u) => {
          if (u.key === "Escape") return i(!1);
        };
        window.addEventListener("keydown", d);
      }, []),
      /* @__PURE__ */ l.createElement(
        "div",
        { className: V9 },
        e,
        /* @__PURE__ */ l.createElement(
          "button",
          {
            onClick: () => {
              c || i(!a);
            },
            className: D9,
          },
          /* @__PURE__ */ l.createElement(M9, null),
          /* @__PURE__ */ l.createElement(
            ue,
            { variant: "paragraph16", fontWeight: "medium" },
            t
          )
        ),
        /* @__PURE__ */ l.createElement(
          N9,
          {
            isActive: a,
            setIsActive: i,
            setIsClosing: f,
          },
          /* @__PURE__ */ l.createElement(
            ue,
            {
              component: "h3",
              fontWeight: "bold",
              className: A9,
            },
            n
          ),
          /* @__PURE__ */ l.createElement(
            "div",
            { className: T9 },
            /* @__PURE__ */ l.createElement(
              ue,
              {
                variant: "paragraph12",
                fontWeight: "regular",
                className: O9,
              },
              s
            ),
            (r == null ? void 0 : r.length) > 0 &&
              /* @__PURE__ */ l.createElement(
                "div",
                { className: B9 },
                r.map((d, u) =>
                  /* @__PURE__ */ l.createElement("div", { key: u }, d)
                )
              ),
            /* @__PURE__ */ l.createElement(
              "div",
              { className: Z9 },
              o == null
                ? void 0
                : o.map((d, u) =>
                    /* @__PURE__ */ l.createElement("div", { key: u }, d)
                  )
            )
          )
        )
      )
    );
  },
  sf = (e) =>
    /* @__PURE__ */ React.createElement(
      "svg",
      {
        focusable: "false",
        ...e,
        width: "24",
        height: "16",
        viewBox: "0 0 24 16",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      /* @__PURE__ */ React.createElement(
        "g",
        { clipPath: "url(#clip0_1858_5368)" },
        /* @__PURE__ */ React.createElement("path", {
          d: "M0 10.6667H24V16H0V10.6667Z",
          fill: "#FFCE00",
        }),
        /* @__PURE__ */ React.createElement("path", {
          d: "M0 0H24V5.33333H0V0Z",
          fill: "black",
        }),
        /* @__PURE__ */ React.createElement("path", {
          d: "M0 5.33334H24V10.6667H0V5.33334Z",
          fill: "#DD0000",
        })
      ),
      /* @__PURE__ */ React.createElement("rect", {
        x: "0.5",
        y: "0.5",
        width: "23",
        height: "15",
        stroke: "black",
        strokeOpacity: "0.2",
      }),
      /* @__PURE__ */ React.createElement(
        "defs",
        null,
        /* @__PURE__ */ React.createElement(
          "clipPath",
          { id: "clip0_1858_5368" },
          /* @__PURE__ */ React.createElement("rect", {
            width: "24",
            height: "16",
            fill: "white",
          })
        )
      )
    ),
  of = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement(
        "g",
        { clipPath: "url(#clip0_2050_3075)" },
        /* @__PURE__ */ l.createElement(
          "mask",
          {
            id: "mask0_2050_3075",
            style: { maskType: "luminance" },
            width: "32",
            height: "32",
            x: "0",
            y: "0",
            maskUnits: "userSpaceOnUse",
          },
          /* @__PURE__ */ l.createElement("path", {
            fill: "#fff",
            d: "M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16z",
          })
        ),
        /* @__PURE__ */ l.createElement(
          "g",
          { mask: "url(#mask0_2050_3075)" },
          /* @__PURE__ */ l.createElement("path", {
            fill: "currentColor",
            d: "M16.005 0c-6.68 0-8.633.007-9.013.038-1.37.114-2.224.33-3.153.793A6.386 6.386 0 002 2.177C.985 3.231.37 4.528.147 6.07c-.108.748-.14.9-.146 4.723-.002 1.275 0 2.951 0 5.2 0 6.677.007 8.63.04 9.008.11 1.335.32 2.174.762 3.092a6.741 6.741 0 004.369 3.57c.66.17 1.388.263 2.323.308.396.017 4.435.029 8.476.029 4.04 0 8.082-.005 8.468-.025 1.083-.05 1.712-.135 2.407-.315a6.699 6.699 0 004.368-3.577c.435-.896.655-1.767.755-3.032.021-.276.03-4.671.03-9.062 0-4.39-.01-8.778-.031-9.054-.1-1.285-.321-2.15-.77-3.062a6.343 6.343 0 00-1.37-1.877C28.77.985 27.477.369 25.934.146c-.747-.108-.896-.14-4.72-.146h-5.209.001z",
          }),
          /* @__PURE__ */ l.createElement("path", {
            style: {
              fill: `${pt.color.icon.inverted}`,
            },
            d: "M16.001 5.76c-2.781 0-3.13.012-4.222.062-1.09.05-1.835.222-2.486.476a5.015 5.015 0 00-1.814 1.18c-.57.57-.92 1.141-1.182 1.814-.253.651-.426 1.396-.475 2.486-.05 1.092-.062 1.441-.062 4.222 0 2.78.012 3.129.062 4.221.05 1.09.222 1.834.475 2.486a5.016 5.016 0 001.181 1.814c.57.57 1.14.92 1.814 1.181.651.254 1.396.426 2.486.476 1.092.05 1.44.062 4.221.062s3.13-.012 4.222-.062c1.09-.05 1.835-.222 2.487-.476a5.01 5.01 0 001.812-1.181c.57-.57.92-1.14 1.182-1.814.252-.651.425-1.396.476-2.486.049-1.092.062-1.44.062-4.22 0-2.782-.013-3.13-.062-4.223-.051-1.09-.224-1.835-.476-2.486a5.026 5.026 0 00-1.182-1.814c-.57-.57-1.139-.92-1.813-1.18-.653-.254-1.398-.427-2.487-.476-1.093-.05-1.44-.062-4.222-.062H16zm-.919 1.846h.919c2.734 0 3.058.01 4.138.058.998.046 1.54.213 1.901.353.478.186.819.407 1.177.766.358.358.58.7.766 1.177.14.361.307.903.353 1.901.049 1.08.06 1.404.06 4.137 0 2.733-.011 3.057-.06 4.136-.046.999-.213 1.54-.353 1.901a3.167 3.167 0 01-.766 1.177c-.359.358-.699.58-1.177.765-.36.141-.903.308-1.901.353-1.08.05-1.404.06-4.138.06s-3.058-.01-4.138-.06c-.998-.046-1.54-.212-1.901-.353a3.172 3.172 0 01-1.178-.765 3.177 3.177 0 01-.766-1.177c-.14-.361-.308-.903-.353-1.901-.049-1.08-.059-1.404-.059-4.138 0-2.735.01-3.057.06-4.137.045-.998.212-1.54.352-1.901.185-.478.408-.82.766-1.178.358-.358.7-.58 1.178-.766.36-.141.903-.307 1.901-.353.945-.043 1.31-.055 3.22-.058v.003zm6.385 1.7a1.229 1.229 0 100 2.458 1.229 1.229 0 000-2.459zm-5.466 1.436a5.259 5.259 0 100 10.517 5.259 5.259 0 000-10.517zm0 1.845a3.413 3.413 0 110 6.827 3.413 3.413 0 010-6.827z",
          })
        )
      ),
      /* @__PURE__ */ l.createElement(
        "defs",
        null,
        /* @__PURE__ */ l.createElement(
          "clipPath",
          { id: "clip0_2050_3075" },
          /* @__PURE__ */ l.createElement("path", {
            fill: "#fff",
            d: "M0 0H32V32H0z",
          })
        )
      )
    ),
  af = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement(
        "g",
        { clipPath: "url(#a)" },
        /* @__PURE__ */ l.createElement("path", {
          fill: "currentColor",
          d: "M16 0C7.164 0 0 7.164 0 16c0 6.778 4.217 12.573 10.169 14.904-.14-1.265-.266-3.213.055-4.594.291-1.249 1.877-7.953 1.877-7.953s-.478-.959-.478-2.375c0-2.225 1.289-3.886 2.894-3.886 1.366 0 2.024 1.024 2.024 2.253 0 1.372-.874 3.425-1.325 5.326-.376 1.592.799 2.892 2.37 2.892 2.844 0 5.029-2.998 5.029-7.327 0-3.83-2.753-6.51-6.683-6.51-4.553 0-7.225 3.415-7.225 6.945 0 1.374.53 2.85 1.19 3.651.131.158.15.298.111.459-.12.505-.39 1.592-.444 1.814-.07.293-.231.356-.534.215-2-.93-3.248-3.852-3.248-6.198 0-5.048 3.668-9.682 10.572-9.682 5.55 0 9.864 3.954 9.864 9.24s-3.477 9.952-8.303 9.952c-1.621 0-3.146-.843-3.668-1.837 0 0-.802 3.055-.997 3.803-.36 1.39-1.336 3.132-1.988 4.194 1.497.464 3.088.714 4.737.714 8.836 0 16-7.164 16-16S24.836 0 16 0Z",
        })
      ),
      /* @__PURE__ */ l.createElement(
        "defs",
        null,
        /* @__PURE__ */ l.createElement(
          "clipPath",
          { id: "a" },
          /* @__PURE__ */ l.createElement("path", {
            fill: "#fff",
            d: "M0 0h32v32H0z",
          })
        )
      )
    ),
  lf = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement(
        "g",
        { clipPath: "url(#a)" },
        /* @__PURE__ */ l.createElement("path", {
          fill: "currentColor",
          d: "M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16Z",
        }),
        /* @__PURE__ */ l.createElement("path", {
          style: {
            fill: `${pt.color.icon.inverted}`,
          },
          d: "M26.222 10.866a2.672 2.672 0 0 0-1.887-1.887C22.67 8.533 16 8.533 16 8.533s-6.67 0-8.335.446a2.676 2.676 0 0 0-1.886 1.887C5.334 12.53 5.334 16 5.334 16s0 3.47.446 5.134c.244.917.967 1.64 1.886 1.887 1.664.445 8.335.445 8.335.445s6.67 0 8.334-.445a2.676 2.676 0 0 0 1.887-1.887c.445-1.664.445-5.134.445-5.134s0-3.47-.445-5.134ZM13.867 19.2v-6.4L19.41 16l-5.542 3.2Z",
        })
      ),
      /* @__PURE__ */ l.createElement(
        "defs",
        null,
        /* @__PURE__ */ l.createElement(
          "clipPath",
          { id: "a" },
          /* @__PURE__ */ l.createElement("path", {
            fill: "#fff",
            d: "M0 0h32v32H0z",
          })
        )
      )
    ),
  cf = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement(
        "g",
        { clipPath: "url(#a)" },
        /* @__PURE__ */ l.createElement("path", {
          fill: "currentColor",
          d: "M16 32c8.837 0 16-7.163 16-16S24.837 0 16 0 0 7.163 0 16s7.163 16 16 16Z",
        }),
        /* @__PURE__ */ l.createElement("path", {
          style: {
            fill: `${pt.color.icon.inverted}`,
          },
          fillRule: "evenodd",
          d: "M14.197 11.25c0 .099-.08.18-.18.183-2.325.09-4.202 1.902-4.36 4.18a.186.186 0 0 1-.186.173.187.187 0 0 1-.187-.195c.147-2.488 2.187-4.473 4.719-4.57a.186.186 0 0 1 .194.185v.043ZM14.104 9c3.924 0 7.104 3.028 7.104 6.763s-3.18 6.763-7.104 6.763a7.415 7.415 0 0 1-2.363-.384L8.204 24.36l.867-3.805.034.012-.024-.022C7.795 19.32 7 17.63 7 15.763 7 12.028 10.18 9 14.104 9Zm9.984 0c.955 0 1.728 1.17 1.728 2.614 0 1.086-.439 2.018-1.063 2.412v7.714c0 .387-.298.7-.665.7-.367 0-.664-.313-.664-.7v-7.713c-.625-.394-1.064-1.326-1.064-2.413 0-1.444.774-2.614 1.728-2.614Z",
          clipRule: "evenodd",
        })
      ),
      /* @__PURE__ */ l.createElement(
        "defs",
        null,
        /* @__PURE__ */ l.createElement(
          "clipPath",
          { id: "a" },
          /* @__PURE__ */ l.createElement("path", {
            fill: "#fff",
            d: "M0 0h32v32H0z",
          })
        )
      )
    );
var $9 = "_5yj2ss0";
var z9 = "_12sdaeq0",
  F9 = "_12sdaeq1";
const uf = ({ children: e }) =>
    /* @__PURE__ */ React.createElement("div", { className: P(z9, Be) }, e),
  df = ({ header: e, links: t }) =>
    // <DarkTheme>
    /* @__PURE__ */ React.createElement(
      "div",
      { className: P(F9, $9) },
      e,
      t &&
        /* @__PURE__ */ React.createElement(
          "ul",
          null,
          t.map((n, r) =>
            /* @__PURE__ */ React.createElement("li", { key: r }, n)
          )
        )
    ),
  ff = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement(
        "g",
        { clipPath: "url(#a)" },
        /* @__PURE__ */ l.createElement("path", {
          fill: "currentColor",
          d: "M32 16c0-8.837-7.163-16-16-16S0 7.163 0 16c0 7.986 5.85 14.606 13.5 15.806V20.625H9.435V16H13.5v-3.525c0-4.01 2.39-6.224 6.045-6.224 1.751 0 3.581.313 3.581.313V10.5h-2.017c-1.986 0-2.607 1.232-2.607 2.498V16h4.437l-.709 4.625h-3.728v11.18C26.15 30.607 32 23.986 32 16Z",
        }),
        /* @__PURE__ */ l.createElement("path", {
          fill: "none",
          d: "M22.227 20.625 22.936 16h-4.438v-3c0-1.267.619-2.5 2.608-2.5h2.017V6.565s-1.83-.313-3.582-.313c-3.655 0-6.044 2.214-6.044 6.224V16H9.434v4.625h4.063v11.18a16.11 16.11 0 0 0 5.001 0v-11.18h3.729Z",
        })
      ),
      /* @__PURE__ */ l.createElement(
        "defs",
        null,
        /* @__PURE__ */ l.createElement(
          "clipPath",
          { id: "a" },
          /* @__PURE__ */ l.createElement("path", {
            fill: "none",
            d: "M0 0h32v32H0z",
          })
        )
      )
    );
var j9 = "_1l2267a0",
  q9 = "_1l2267a1",
  xe = {
    two: "_1l2267a2",
    three: "_1l2267a3",
    four: "_1l2267a4",
    five: "_1l2267a5",
    six: "_1l2267a6",
    seven: "_1l2267a7",
    eight: "_1l2267a8",
    nine: "_1l2267a9",
    ten: "_1l2267aa",
    eleven: "_1l2267ab",
    twelve: "_1l2267ac",
  };
const hf = ({ children: e }) =>
    /* @__PURE__ */ React.createElement("div", { className: j9 }, e),
  mf = ({ children: e, columns: t = 1, className: n = "" }) => {
    let r = "";
    switch (t) {
      case 2:
        r = xe.two;
        break;
      case 3:
        r = xe.three;
        break;
      case 4:
        r = xe.four;
        break;
      case 5:
        r = xe.five;
        break;
      case 6:
        r = xe.six;
        break;
      case 7:
        r = xe.seven;
        break;
      case 8:
        r = xe.eight;
        break;
      case 9:
        r = xe.nine;
        break;
      case 10:
        r = xe.ten;
        break;
      case 11:
        r = xe.eleven;
        break;
      case 12:
        r = xe.twelve;
        break;
      default:
        r = "";
        break;
    }
    return /* @__PURE__ */ React.createElement(
      "div",
      { className: P(q9, r, n) },
      e
    );
  },
  pf = ({ shadowType: e, children: t, className: n = "" }) => {
    const r = Qn[e];
    return /* @__PURE__ */ React.createElement(
      "div",
      { className: P(r, n) },
      t
    );
  };
var Ma = "_1gbfig05",
  I9 = { inGrid: "_1gbfig01 _1gbfig00", fullWidth: "_1gbfig02 _1gbfig00" },
  W9 = { left: "_1gbfig03", right: "_1gbfig04" },
  U9 = "_1gbfig06",
  G9 = "_1gbfig07";
const vf = ({
  layout: e = "inGrid",
  mediaAlignment: t = "left",
  media: n,
  headline: r,
  paragraph: s,
  buttonGroup: o,
}) =>
  /* @__PURE__ */ React.createElement(
    "div",
    {
      className: P(I9[e], W9[t], e === "inGrid" ? Be : ""),
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: P(Ma, e === "fullWidth" ? G9 : ""),
      },
      n
    ),
    /* @__PURE__ */ React.createElement(
      "div",
      { className: P(Ma, U9) },
      /* @__PURE__ */ React.createElement("div", null, r, s),
      /* @__PURE__ */ React.createElement("div", null, o)
    )
  );
var K9 = {
    purple: "_1mubyh30",
    green: "_1mubyh31",
    yellow: "_1mubyh32",
    orange: "_1mubyh33",
    red: "_1mubyh34",
    blue: "_1mubyh35",
  },
  Y9 = "_1mubyh39",
  X9 = {
    "5 degrees": "_1mubyh36",
    "-5 degrees": "_1mubyh37",
    none: "_1mubyh38",
  },
  J9 = { small: "_1mubyh3b", medium: "_1mubyh3c", large: "_1mubyh3d" },
  Q9 = "_1mubyh3a";
const gf = ({
  firstLine: e,
  secondLine: t,
  thirdLine: n,
  buttonSize: r,
  backgroundColor: s = "purple",
  rotation: o = "none",
  size: a = "small",
}) =>
  /* @__PURE__ */ React.createElement(
    "div",
    {
      className: P(Y9, K9[s], J9[a]),
      style: r ? { "--eyecatcherButtonSize": r } : {},
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        className: P(Q9, X9[o]),
      },
      e &&
        /* @__PURE__ */ React.createElement(
          ue,
          { variant: "paragraph16", fontWeight: "regular" },
          e
        ),
      t &&
        /* @__PURE__ */ React.createElement(
          ue,
          { variant: "paragraph16", fontWeight: "bold" },
          t
        ),
      n &&
        /* @__PURE__ */ React.createElement(
          ue,
          { variant: "paragraph16", fontWeight: "regular" },
          n
        )
    )
  );
var ed = {
    "3/2": "_8a58ly1",
    "1/1": "_8a58ly2",
    "4/3": "_8a58ly3",
    "16/9": "_8a58ly4",
    "2/1": "_8a58ly5",
    "21/9": "_8a58ly6",
    "3/1": "_8a58ly7",
    "4/1": "_8a58ly8",
    "n/a": "_8a58ly9",
  },
  td = "_8a58ly0";
const wf = ({ children: e, aspectRatio: t }) =>
  /* @__PURE__ */ React.createElement(
    "div",
    {
      className: P(ed[t], td),
    },
    e
  );
var nd = "_1wj0mv72",
  rd = "_1wj0mv70",
  sd = {
    small: "_1wj0mv74 _1wj0mv73",
    medium: "_1wj0mv75 _1wj0mv73",
    large: "_1wj0mv76 _1wj0mv73",
  },
  od = "_1wj0mv77",
  ad = "_1wj0mv71";
const yf = ({
  size: e = "medium",
  stock: t,
  price: n,
  lowestPrice: r,
  basePrice: s,
  vat: o,
  delivery: a,
}) =>
  /* @__PURE__ */ React.createElement(
    "div",
    { className: rd },
    /* @__PURE__ */ React.createElement(
      "div",
      { className: ad },
      /* @__PURE__ */ React.createElement("span", { className: sd[e] }, n),
      r &&
        /* @__PURE__ */ React.createElement(
          ue,
          {
            variant: "paragraph12",
            component: "span",
            className: nd,
          },
          r
        )
    ),
    t
      ? /* @__PURE__ */ React.createElement(
          ue,
          {
            variant: "paragraph10",
            fontWeight: "bold",
            className: od,
          },
          t
        )
      : /* @__PURE__ */ React.createElement(
          "div",
          null,
          s &&
            /* @__PURE__ */ React.createElement(
              ue,
              { variant: "paragraph10", fontWeight: "regular" },
              s
            ),
          o &&
            /* @__PURE__ */ React.createElement(
              ue,
              { variant: "paragraph10", fontWeight: "regular" },
              o
            ),
          a &&
            /* @__PURE__ */ React.createElement(
              ue,
              { variant: "paragraph10", fontWeight: "regular" },
              a
            )
        )
  );
var id = "_19xwol23",
  ld = "_19xwol22",
  cd = "_19xwol21",
  ud = "_19xwol20";
const Cf = ({ image: e, button: t, price: n, title: r }) =>
    /* @__PURE__ */ React.createElement(
      "div",
      { className: ud },
      /* @__PURE__ */ React.createElement(
        "div",
        { className: cd },
        /* @__PURE__ */ React.createElement(
          "div",
          { className: id },
          e,
          /* @__PURE__ */ React.createElement(
            ue,
            { component: "h6", fontWeight: "bold" },
            r
          )
        ),
        /* @__PURE__ */ React.createElement("div", { className: ld }, n, t)
      )
    ),
  dd = "_functionsTabWrapper_1uo3e_1",
  fd = {
    functionsTabWrapper: dd,
  };
var Dl = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
(function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var o = "", a = 0; a < arguments.length; a++) {
        var i = arguments[a];
        i && (o = s(o, r(i)));
      }
      return o;
    }
    function r(o) {
      if (typeof o == "string" || typeof o == "number") return o;
      if (typeof o != "object") return "";
      if (Array.isArray(o)) return n.apply(null, o);
      if (
        o.toString !== Object.prototype.toString &&
        !o.toString.toString().includes("[native code]")
      )
        return o.toString();
      var a = "";
      for (var i in o) t.call(o, i) && o[i] && (a = s(a, i));
      return a;
    }
    function s(o, a) {
      return a ? (o ? o + " " + a : o + a) : o;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(Dl);
var hd = Dl.exports;
const md = /* @__PURE__ */ Va(hd),
  pd = "_active_hv7w7_1",
  vd = "_inactive_hv7w7_1",
  gd = "_desktopScrollboxWrapper_hv7w7_3",
  wd = "_desktopScrollbox__list_hv7w7_19",
  yd = "_desktopScrollbox__title_hv7w7_47",
  Cd = "_desktopScrollbox__progress_hv7w7_108",
  bd = "_desktopScrollbox__media_hv7w7_131",
  ye = {
    active: pd,
    inactive: vd,
    desktopScrollboxWrapper: gd,
    desktopScrollbox__list: wd,
    desktopScrollbox__title: yd,
    desktopScrollbox__progress: Cd,
    desktopScrollbox__media: bd,
  },
  Zt = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        viewBox: "0 0 24 24",
        focusable: "false",
        xmlns: "http://www.w3.org/2000/svg",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M14.54 14.88c.95.72 1.57 1.87 1.57 3.16 0 2.45-2.21 4.38-4.74 3.89a3.87 3.87 0 0 1-3.08-3.08 3.978 3.978 0 0 1 1.49-3.96V4.38a2.38 2.38 0 1 1 4.76 0v10.5Zm-1.8-5.31V4.38a.58.58 0 0 0-1.16 0v5.19h1.16ZM17.16 2c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5ZM6.19 9.42c-.31.31-.83.83-1.77.83s-1.47-.53-1.78-.83l-.04-.04-.6-.6 1.2-1.2.6.6c.17.17.25.25.34.31.06.04.13.07.28.07.22 0 .3-.06.6-.35l.02-.02c.31-.31.83-.83 1.79-.83s1.46.51 1.78.82l.6.6-1.2 1.2-.6-.6c-.15-.15-.22-.22-.3-.26a.507.507 0 0 0-.27-.06c-.23 0-.32.06-.61.35l-.02.02Zm13.39.83c-.95 0-1.46-.52-1.77-.83l-.02-.02c-.29-.29-.37-.35-.61-.35-.14 0-.22.03-.27.06-.08.04-.15.11-.3.26l-.6.6-1.2-1.2.6-.6c.32-.32.83-.82 1.78-.82s1.48.52 1.79.83l.02.02c.29.29.37.35.6.35.14 0 .22-.03.28-.07.09-.06.17-.13.34-.31l.6-.6 1.2 1.2-.6.6-.04.04c-.31.31-.83.83-1.78.83ZM6.19 13.53c-.31.31-.83.83-1.77.83s-1.47-.53-1.78-.84l-.04-.04-.6-.6 1.2-1.2.6.6c.17.17.25.25.34.31.06.04.13.07.28.07.22 0 .3-.06.6-.35l.02-.02c.31-.31.83-.83 1.79-.83s1.46.51 1.78.82l.6.6-1.2 1.2-.6-.6c-.15-.15-.22-.22-.3-.26a.507.507 0 0 0-.27-.06c-.23 0-.32.06-.61.35l-.02.02Zm13.39.83c-.95 0-1.46-.52-1.77-.83l-.02-.02c-.29-.29-.37-.35-.61-.35-.14 0-.22.03-.27.06-.08.04-.15.11-.3.26l-.6.6-1.2-1.2.6-.6c.32-.32.83-.82 1.78-.82s1.48.52 1.79.83l.02.02c.29.29.37.35.6.35.14 0 .22-.03.28-.07.09-.06.17-.13.34-.31l.6-.6 1.2 1.2-.6.6-.04.04c-.31.31-.83.84-1.78.84Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Ed = ({
    items: e = [
      {
        id: 1,
        text: "Sous-Vide",
        icon: Zt,
        isActive: !1,
        scrollMin: 0,
        scrollMax: 1,
        media: {
          type: "image",
          src: "/images/functionTab/function-tab-image.png",
          alt: "",
          title: "",
        },
      },
      {
        id: 2,
        text: "Slow Cook",
        icon: Zt,
        isActive: !1,
        scrollMin: 0,
        scrollMax: 1,
        media: {
          type: "image",
          src: "/images/functionTab/function-tab-image.png",
          alt: "",
          title: "",
        },
      },
    ],
  }) => {
    const [t, n] = F("0vh"),
      [r, s] = F(e),
      o = "vh",
      a = Z([]),
      i = Z(null),
      { scrollYProgress: c } = Ml({
        target: i,
      }),
      f = () => {
        a.current.forEach((u) => {
          u && (u.pause(), (u.currentTime = 0), u.load());
        });
      },
      d = (u, h) => {
        a.current[h] = u;
      };
    return (
      O(() => {
        const u = r.length,
          h = String(u * 100) + o;
        n(h),
          s((m) =>
            m.map((g, v) => ({
              ...g,
              scrollMin: v * (1 / u),
              scrollMax: (v + 1) * (1 / u),
              isActive: !1,
            }))
          );
      }, []),
      _l(c, "change", (u) => {
        s((h) =>
          h.map((m) => {
            const g = u > m.scrollMin && u <= m.scrollMax;
            return (
              m.isActive !== g && a.current.length > 0 && f(),
              m.isActive !== g ? { ...m, isActive: g } : m
            );
          })
        );
      }),
      /* @__PURE__ */ l.createElement(
        "div",
        { ref: i, style: { height: t } },
        /* @__PURE__ */ l.createElement(
          "article",
          { className: ye.desktopScrollboxWrapper },
          /* @__PURE__ */ l.createElement(
            "ul",
            { className: ye.desktopScrollbox__list },
            r.map((u, h) => {
              const m = on(
                c,
                [h / r.length, (h + 1) / r.length],
                ["-100%", "0%"]
              );
              let g = u.isActive ? ye.active : ye.inactive;
              return /* @__PURE__ */ l.createElement(
                "li",
                {
                  key: u.id,
                  className: g,
                },
                /* @__PURE__ */ l.createElement(
                  "div",
                  { className: ye.desktopScrollbox__title },
                  /* @__PURE__ */ l.createElement(
                    "span",
                    { style: { color: pt.color.brand.green.G500 } },
                    /* @__PURE__ */ l.createElement(u.icon, null)
                  ),
                  /* @__PURE__ */ l.createElement("span", null, u.text)
                ),
                /* @__PURE__ */ l.createElement(
                  "div",
                  { className: ye.desktopScrollbox__progress },
                  /* @__PURE__ */ l.createElement(Ie.div, { style: { x: m } })
                )
              );
            }),
            /* @__PURE__ */ l.createElement(
              "li",
              { className: ye.inactive },
              /* @__PURE__ */ l.createElement(
                "div",
                { className: ye.desktopScrollbox__title },
                /* @__PURE__ */ l.createElement("span", {
                  style: { color: pt.color.brand.green.G500 },
                }),
                /* @__PURE__ */ l.createElement(
                  "span",
                  null,
                  "and many more..."
                )
              ),
              /* @__PURE__ */ l.createElement("div", {
                className: ye.desktopScrollbox__progress,
              })
            )
          ),
          /* @__PURE__ */ l.createElement(
            "div",
            { className: ye.desktopScrollbox__media },
            r.map((u, h) => {
              let m = u.isActive ? ye.active : ye.inactive;
              return /* @__PURE__ */ l.createElement(
                l.Fragment,
                { key: h },
                /* @__PURE__ */ l.createElement(
                  "div",
                  { className: md(u.media.type, m) },
                  u.media.type === "image" &&
                    /* @__PURE__ */ l.createElement("img", {
                      src: u.media.src,
                      alt: u.media.alt,
                      title: u.media.title,
                    }),
                  u.media.type === "video" &&
                    /* @__PURE__ */ l.createElement(
                      "video",
                      { ref: (g) => d(g, h), controls: !0, playsInline: !0 },
                      /* @__PURE__ */ l.createElement("source", {
                        src: u.media.src,
                      })
                    )
                )
              );
            })
          )
        )
      )
    );
  },
  xd = "_active_1fxey_1",
  Sd = "_inactive_1fxey_1",
  Rd = "_mobileScrollboxWrapper_1fxey_3",
  _d = "_mobileScrollbox__list_1fxey_17",
  Md = "_mobileScrollbox__title_1fxey_68",
  it = {
    active: xd,
    inactive: Sd,
    mobileScrollboxWrapper: Rd,
    mobileScrollbox__list: _d,
    mobileScrollbox__title: Md,
  },
  Ld = ({
    items: e = [
      {
        id: 1,
        text: "Sous-Vide",
        icon: Zt,
        isActive: !1,
        scrollMin: 0,
        scrollMax: 1,
        media: {
          type: "image",
          src: "/images/functionTab/function-tab-image.png",
          alt: "",
          title: "",
        },
      },
      {
        id: 2,
        text: "Slow Cook",
        icon: Zt,
        isActive: !1,
        scrollMin: 0,
        scrollMax: 1,
        media: {
          type: "image",
          src: "/images/functionTab/function-tab-image.png",
          alt: "",
          title: "",
        },
      },
    ],
  }) => {
    const [t, n] = F("0dvh"),
      [r, s] = F(e),
      o = "dvh",
      a = Z([]),
      i = Z(null),
      { scrollYProgress: c } = Ml({
        target: i,
      }),
      f = () => {
        a.current.forEach((u) => {
          u && (u.pause(), (u.currentTime = 0), u.load());
        });
      },
      d = (u, h) => {
        a.current[h] = u;
      };
    return (
      O(() => {
        const u = r.length,
          h = String(u * 100) + o;
        n(h),
          s((m) =>
            m.map((g, v) => ({
              ...g,
              scrollMin: v * (1 / u),
              scrollMax: (v + 1) * (1 / u),
              isActive: !1,
            }))
          );
      }, []),
      _l(c, "change", (u) => {
        s((h) =>
          h.map((m) => {
            const g = u > m.scrollMin && u <= m.scrollMax;
            return (
              m.isActive !== g && a.current.length > 0 && f(),
              m.isActive !== g ? { ...m, isActive: g } : m
            );
          })
        );
      }),
      /* @__PURE__ */ React.createElement(
        "div",
        { ref: i, style: { height: t } },
        /* @__PURE__ */ React.createElement(
          "article",
          { className: it.mobileScrollboxWrapper },
          /* @__PURE__ */ React.createElement(
            "ul",
            { className: it.mobileScrollbox__list },
            r.map((u, h) => {
              let m = u.isActive ? it.active : it.inactive;
              return /* @__PURE__ */ React.createElement(
                "li",
                {
                  key: u.id,
                  className: m,
                },
                /* @__PURE__ */ React.createElement(
                  "div",
                  { className: it.mobileScrollbox__title },
                  /* @__PURE__ */ React.createElement(
                    "span",
                    { style: { color: pt.color.brand.green.G500 } },
                    /* @__PURE__ */ React.createElement(u.icon, null)
                  ),
                  /* @__PURE__ */ React.createElement("span", null, u.text)
                ),
                /* @__PURE__ */ React.createElement(
                  "div",
                  { className: u.media.type },
                  u.media.type === "image" &&
                    /* @__PURE__ */ React.createElement("img", {
                      src: u.media.src,
                      alt: u.media.alt,
                      title: u.media.title,
                    }),
                  u.media.type === "video" &&
                    /* @__PURE__ */ React.createElement(
                      "video",
                      { ref: (g) => d(g, h), controls: !0, playsInline: !0 },
                      /* @__PURE__ */ React.createElement("source", {
                        src: u.media.src,
                      })
                    )
                )
              );
            }),
            /* @__PURE__ */ React.createElement(
              "li",
              { className: it.inactive },
              /* @__PURE__ */ React.createElement(
                "div",
                { className: it.mobileScrollbox__title },
                /* @__PURE__ */ React.createElement("span", {
                  style: { color: pt.color.brand.green.G500 },
                }),
                /* @__PURE__ */ React.createElement(
                  "span",
                  null,
                  "and many more..."
                )
              )
            )
          )
        )
      )
    );
  },
  bf = ({
    items: e = [
      {
        id: 1,
        text: "Sous-Vide",
        icon: Zt,
        isActive: !1,
        scrollMin: 0,
        scrollMax: 1,
        media: {
          type: "image",
          src: "/images/functionTab/function-tab-image.png",
          alt: "",
          title: "",
        },
      },
      {
        id: 2,
        text: "Slow Cook",
        icon: Zt,
        isActive: !1,
        scrollMin: 0,
        scrollMax: 1,
        media: {
          type: "image",
          src: "/images/functionTab/function-tab-image.png",
          alt: "",
          title: "",
        },
      },
    ],
  }) => {
    const [t] = F([parseInt(Bs.xxl.replace("px", ""))]),
      [n, r] = F(!1);
    O(
      () => (
        s(),
        window.addEventListener("resize", s),
        () => window.removeEventListener("resize", s)
      ),
      []
    );
    const s = () => {
      const o = window.innerWidth;
      let a;
      (a = t.find((i) => o < i)),
        a ? a.toString() === Bs.xxl.replace("px", "") && r(!0) : r(!1);
    };
    return /* @__PURE__ */ React.createElement(
      "div",
      { className: fd.functionsTabWrapper },
      n
        ? /* @__PURE__ */ React.createElement(Ld, { items: e })
        : /* @__PURE__ */ React.createElement(Ed, { items: e })
    );
  },
  Ef = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        focusable: "false",
        viewBox: "0 0 24 24",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m12 2.95 9.05 8.33-.81.89-1.32-1.22v6.48c0 2-1.61 3.62-3.6 3.62h-10V10.74l-1.56 1.43-.81-.89L12 2.95ZM6.52 9.64 12 4.59l5.72 5.26v7.58c0 1.33-1.07 2.41-2.4 2.41h-8.8V9.63Z",
      })
    ),
  xf = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        fill: "currentColor",
        d: "M10.74 5.76A1.261 1.261 0 1 1 12 7.02c-.69 0-1.26-.56-1.26-1.26Zm6.24 0a1.261 1.261 0 1 1 1.26 1.26c-.69 0-1.26-.56-1.26-1.26Zm-12.47 0a1.261 1.261 0 1 1 1.26 1.26c-.69 0-1.26-.56-1.26-1.26Zm0 6.24a1.261 1.261 0 1 1 1.26 1.26c-.69 0-1.26-.56-1.26-1.26Zm6.24 0a1.261 1.261 0 1 1 1.26 1.26c-.69 0-1.26-.56-1.26-1.26Zm6.24 0a1.261 1.261 0 1 1 1.26 1.26c-.69 0-1.26-.56-1.26-1.26ZM4.52 18.24a1.261 1.261 0 1 1 1.26 1.26c-.69 0-1.26-.56-1.26-1.26Zm6.24 0a1.261 1.261 0 1 1 1.26 1.26c-.69 0-1.26-.56-1.26-1.26Zm6.24 0a1.261 1.261 0 1 1 1.26 1.26c-.69 0-1.26-.56-1.26-1.26Z",
      })
    ),
  Sf = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        focusable: "false",
        viewBox: "0 0 24 24",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M3.02 4.9h17.96v1.2H3.02V4.9Zm0 6.5h17.96v1.2H3.02v-1.2Zm0 6.5h17.96v1.2H3.02v-1.2Z",
      })
    ),
  Rf = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M11.15 15.3c0-.5.4-.9.9-.9h.01c.5 0 .9.4.9.9s-.4.9-.9.9h-.01c-.5 0-.9-.4-.9-.9Zm8.9-5.82v8.02c0 1.98-1.61 3.59-3.59 3.59H3.95V9.47h2.98V7.98c0-2.81 2.28-5.1 5.09-5.1s5.09 2.29 5.09 5.1v1.49h2.94Zm-11.92 0h7.78V7.99c0-2.15-1.75-3.9-3.89-3.9s-3.89 1.75-3.89 3.9v1.49Zm10.72 1.2H5.15v9.22h11.31a2.39 2.39 0 0 0 2.39-2.39v-6.82Z",
      })
    ),
  _f = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        focusable: "false",
        viewBox: "0 0 24 24",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M11.15 15.3c0-.5.4-.9.9-.9h.01c.5 0 .9.4.9.9s-.4.9-.9.9h-.01c-.5 0-.9-.4-.9-.9Zm8.9-5.82v8.02c0 1.98-1.61 3.59-3.59 3.59H3.95V9.47h11.86V7.98c0-2.14-1.75-3.9-3.9-3.9-.99 0-1.89.37-2.58.98l-.45.4-.8-.9.45-.4c.9-.8 2.08-1.28 3.37-1.28 2.81 0 5.1 2.29 5.1 5.1v1.49h3.04Zm-1.2 1.2H5.15v9.22h11.31a2.39 2.39 0 0 0 2.39-2.39v-6.82Z",
      })
    ),
  Mf = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M2.95 3.05h2.7l.69 2.28h14.71V9.3c0 1.99-1.61 3.6-3.6 3.6H8.66l.77 2.35h9.66v1.2H8.56l-1.3-3.97-2.5-8.23H2.95v-1.2Zm3.76 3.48 1.57 5.17h9.17c1.33 0 2.4-1.07 2.4-2.4V6.53H6.71Zm2.2 13.17a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Zm6.27 0a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z",
      })
    ),
  Lf = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        focusable: "false",
        viewBox: "0 0 24 24",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        fill: "currentColor",
        d: "M6.93 11.4h4.14v1.2H6.93v-1.2Zm6.1 1.2h4.14v-1.2h-4.14v1.2Zm-6.1 2.44H11v-1.2H6.93v1.2Zm6.1 0h4.14v-1.2h-4.14v1.2Zm-6.1 2.46h4.06v-1.19H6.93v1.19Zm9.14-12.48V2.9h1.2v2.12h3.78V15.5c0 3.09-2.51 5.6-5.6 5.6H2.95V5.02h3.77V2.9h1.2v2.12h8.15Zm3.78 3.15V6.22H4.15v1.95h15.7ZM4.15 19.89h11.3a4.4 4.4 0 0 0 4.4-4.4V9.37H4.15v10.52Z",
      })
    ),
  Vf = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        focusable: "false",
        viewBox: "0 0 24 24",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M11.19 19.9 3 12l8.19-7.9.83.86-6.68 6.44H21v1.2H5.34l6.68 6.44-.83.86Z",
      })
    ),
  Tf = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M19.9 12.81 12 21l-7.9-8.19.86-.83 6.44 6.68V3h1.2v15.66l6.44-6.68.86.83Z",
      })
    ),
  Pf = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12.81 4.1 21 12l-8.19 7.9-.83-.86 6.68-6.44H3v-1.2h15.66l-6.68-6.44.83-.86Z",
      })
    ),
  Hf = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M4.1 11.19 12 3l7.9 8.19-.86.83-6.44-6.68V21h-1.2V5.34l-6.44 6.68-.86-.83Z",
      })
    ),
  Af = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m7.74 12 8.56-8.14-.83-.86L6 12l9.47 9 .83-.86L7.74 12Z",
      })
    ),
  Zf = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M12 16.26 3.86 7.7 3 8.53 12 18l9-9.47-.86-.83L12 16.26Z",
      })
    ),
  kf = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M16.26 12 7.7 20.14l.83.86L18 12 8.53 3l-.83.86L16.26 12Z",
      })
    ),
  Df = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m12 7.74 8.14 8.56.86-.83L12 6l-9 9.47.86.83L12 7.74Z",
      })
    ),
  Bf = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        fill: "currentColor",
        d: "M12.01 18.53c-.5 0-.9-.4-.9-.9s.4-.9.89-.9c.5 0 .9.4.9.9s-.4.9-.9.9Zm3.9-4.31c-2.16-2.08-5.66-2.08-7.82 0l.83.86c1.7-1.64 4.46-1.64 6.15 0l.83-.86Zm2.73-2.83c-3.66-3.54-9.61-3.54-13.27 0l.83.86c3.2-3.1 8.4-3.1 11.6 0l.83-.86Zm2.76-2.81c-5.18-5-13.62-5-18.8.01l.83.86c4.72-4.57 12.41-4.57 17.13 0l.83-.86Zm-4.32 7.45c0-.13.03-.29.08-.44.05-.16.12-.3.22-.39.09-.08.22-.15.43-.15.22 0 .35.07.43.15.09.09.17.22.22.38.05.15.07.31.07.44h-1.45Zm-1.46 0v3.13h4.4v-3.13h-.69v-.01c0-.17-.03-.41-.11-.66-.07-.24-.2-.52-.44-.74-.24-.23-.57-.36-.98-.36-.41 0-.74.14-.98.36-.23.22-.36.49-.44.74-.08.25-.1.49-.11.66v.01h-.66Z",
      })
    ),
  Of = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        fill: "#cfd0d0",
        d: "M20.57 9.45c-4.72-4.57-12.41-4.57-17.13 0l-.83-.86c5.18-5.01 13.62-5.01 18.8 0l-.83.86Z",
      }),
      /* @__PURE__ */ l.createElement("path", {
        d: "M12.01 18.53c-.5 0-.9-.4-.9-.9s.4-.9.89-.9c.5 0 .9.4.9.9s-.4.9-.9.9Zm3.9-4.31c-2.16-2.08-5.66-2.08-7.82 0l.83.86c1.7-1.64 4.46-1.64 6.15 0l.83-.86Zm2.73-2.83c-3.66-3.54-9.61-3.54-13.27 0l.83.86c3.2-3.1 8.4-3.1 11.6 0l.83-.86Zm-1.55 4.64c0-.13.03-.29.08-.44.05-.16.12-.3.22-.39.09-.08.22-.15.43-.15.22 0 .35.07.43.15.09.09.17.22.22.38.05.15.07.31.07.44h-1.45Zm-1.46 0v3.13h4.4v-3.13h-.69v-.01c0-.17-.03-.41-.11-.66-.07-.24-.2-.52-.44-.74-.24-.23-.57-.36-.98-.36-.41 0-.74.14-.98.36-.23.22-.36.49-.44.74-.08.25-.1.49-.11.66v.01h-.66Z",
        fill: "currentColor",
      })
    ),
  Nf = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M17.8 12.26c-3.2-3.1-8.4-3.1-11.6 0l-.83-.86c3.66-3.54 9.61-3.54 13.27 0l-.83.86Zm2.76-2.81c-4.72-4.57-12.41-4.57-17.13 0l-.83-.86c5.18-5.01 13.62-5.01 18.8 0l-.83.86Z",
        fill: "#cfd0d0",
      }),
      /* @__PURE__ */ l.createElement("path", {
        d: "M12.01 18.53c-.5 0-.9-.4-.9-.9s.4-.9.89-.9c.5 0 .9.4.9.9s-.4.9-.9.9Zm3.9-4.31c-2.16-2.08-5.66-2.08-7.82 0l.83.86c1.7-1.64 4.46-1.64 6.15 0l.83-.86Zm1.17 1.81c0-.13.03-.29.08-.44.05-.16.12-.3.22-.39.09-.08.22-.15.43-.15.22 0 .35.07.43.15.09.09.17.22.22.38.05.15.07.31.07.44h-1.45Zm-1.46 0v3.13h4.4v-3.13h-.69v-.01c0-.17-.03-.41-.11-.66-.07-.24-.2-.52-.44-.74-.24-.23-.57-.36-.98-.36-.41 0-.74.14-.98.36-.23.22-.36.49-.44.74-.08.25-.1.49-.11.66v.01h-.66Z",
        fill: "currentColor",
      })
    ),
  $f = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M15.08 15.08c-1.7-1.64-4.46-1.64-6.15 0l-.83-.86c2.16-2.08 5.66-2.08 7.82 0l-.83.86Zm2.72-2.83c-3.2-3.1-8.4-3.1-11.6 0l-.83-.86c3.66-3.54 9.61-3.54 13.27 0l-.83.86Zm2.76-2.81c-4.72-4.57-12.41-4.57-17.13 0l-.83-.86c5.18-5.01 13.62-5.01 18.8 0l-.83.86Z",
        fill: "#cfd0d0",
      }),
      /* @__PURE__ */ l.createElement("path", {
        d: "M12.01 18.53c-.5 0-.9-.4-.9-.9s.4-.9.89-.9c.5 0 .9.4.9.9s-.4.9-.9.9Zm5.07-2.49c0-.13.03-.29.08-.44.05-.16.12-.3.22-.39.09-.08.22-.15.43-.15.22 0 .35.07.43.15.09.09.17.22.22.38.05.15.07.31.07.44h-1.45Zm-1.46 0v3.13h4.4v-3.13h-.69v-.01c0-.17-.03-.41-.11-.66-.07-.24-.2-.52-.44-.74-.24-.23-.57-.36-.98-.36-.41 0-.74.14-.98.36-.23.22-.36.49-.44.74-.08.25-.1.49-.11.66v.01h-.66Z",
        fill: "currentColor",
      })
    ),
  zf = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        fill: "currentColor",
        d: "M12.01 18.85c-.5 0-.9-.4-.9-.9s.4-.9.89-.9c.5 0 .9.4.9.9s-.4.9-.9.9Zm3.9-4.31c-2.16-2.08-5.66-2.08-7.82 0l.83.86c1.7-1.63 4.46-1.64 6.15 0l.83-.86Zm2.73-2.83c-3.66-3.54-9.61-3.54-13.27 0l.83.86c3.2-3.09 8.4-3.09 11.6 0l.83-.86ZM21.4 8.9c-5.18-5-13.62-5-18.8.01l.83.86c4.72-4.57 12.41-4.57 17.13 0l.83-.86Z",
      })
    ),
  Ff = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M12.01 18.85c-.5 0-.9-.4-.9-.9s.4-.9.89-.9c.5 0 .9.4.9.9s-.4.9-.9.9Zm3.9-4.31c-2.16-2.08-5.66-2.08-7.82 0l.83.86c1.7-1.63 4.46-1.64 6.15 0l.83-.86Zm2.73-2.83c-3.66-3.54-9.61-3.54-13.27 0l.83.86c3.2-3.09 8.4-3.09 11.6 0l.83-.86Z",
        fill: "currentColor",
      }),
      /* @__PURE__ */ l.createElement("path", {
        d: "M20.57 9.77C15.85 5.2 8.16 5.2 3.44 9.77l-.83-.86c5.18-5.01 13.62-5.01 18.8 0l-.83.86Z",
        fill: "#cfd0d0",
      })
    ),
  jf = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M12.01 18.85c-.5 0-.9-.4-.9-.9s.4-.9.89-.9c.5 0 .9.4.9.9s-.4.9-.9.9Zm3.9-4.31c-2.16-2.08-5.66-2.08-7.82 0l.83.86c1.7-1.63 4.46-1.64 6.15 0l.83-.86Z",
        fill: "currentColor",
      }),
      /* @__PURE__ */ l.createElement("path", {
        d: "M17.8 12.58c-3.2-3.09-8.41-3.09-11.6 0l-.83-.86c3.66-3.54 9.61-3.54 13.27 0l-.83.86Zm2.76-2.81C15.84 5.2 8.15 5.2 3.43 9.77l-.83-.86c5.18-5.01 13.62-5.01 18.8 0l-.83.86Z",
        fill: "#cfd0d0",
      })
    ),
  qf = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M12.01 18.85c-.5 0-.9-.4-.9-.9s.4-.9.89-.9c.5 0 .9.4.9.9s-.4.9-.9.9Z",
        fill: "currentColor",
      }),
      /* @__PURE__ */ l.createElement("path", {
        d: "M15.08 15.4c-1.7-1.64-4.46-1.63-6.15 0l-.83-.86c2.16-2.08 5.66-2.08 7.82 0l-.83.86Zm2.72-2.83c-3.2-3.09-8.41-3.09-11.6 0l-.83-.86c3.66-3.54 9.61-3.54 13.27 0l-.83.86Zm2.76-2.81c-4.72-4.57-12.41-4.57-17.13 0L2.6 8.9c5.18-5.01 13.62-5.01 18.8 0l-.83.86Z",
        fill: "#cfd0d0",
      })
    ),
  If = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M11.42 13.88V3h1.2v10.88l3.36-3.65.88.81-4.84 5.26-4.84-5.26.88-.81 3.36 3.65Zm9.58-.46v3.99c0 1.98-1.61 3.59-3.6 3.59H3v-7.58h1.2v6.38h13.2c1.33 0 2.4-1.07 2.4-2.39v-3.99H21Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Wf = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "m12.01 3 4.85 5.22-.88.8-3.36-3.62v10.75h-1.2V5.4L8.06 9.02l-.88-.8L12.01 3ZM21 13.48v3.96c0 1.97-1.61 3.56-3.6 3.56H3v-7.52h1.2v6.33h13.2c1.33 0 2.4-1.06 2.4-2.38v-3.96H21Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Uf = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M21 5.06 9.18 19.7 3 13.58l.85-.86 5.23 5.18L20.06 4.3l.94.76Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Gf = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M11.4 11.4V3h1.2v8.4H21v1.2h-8.4V21h-1.2v-8.4H3v-1.2h8.4Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Kf = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M11.13 12 3.1 3.97l.87-.87L12 11.13l8.03-8.03.87.87L12.87 12l8.03 8.03-.87.87L12 12.87 3.97 20.9l-.87-.87L11.13 12Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Yf = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M3 12.6v-1.2h18v1.2H3Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Xf = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M12 3.2a8.8 8.8 0 1 0 0 17.6 8.8 8.8 0 0 0 0-17.6ZM2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm14.91-3.24-6.33 7.74-3.43-3.35.84-.86 2.5 2.43L15.99 8l.93.76Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Jf = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M12 3.2a8.8 8.8 0 1 0 0 17.6 8.8 8.8 0 0 0 0-17.6ZM2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm9.4-.6V6.94h1.2v4.46h4.46v1.2H12.6v4.46h-1.2V12.6H6.94v-1.2h4.46Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Qf = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 48 48",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M24 6.4C14.28 6.4 6.4 14.28 6.4 24c0 9.72 7.88 17.6 17.6 17.6 9.72 0 17.6-7.88 17.6-17.6 0-9.72-7.88-17.6-17.6-17.6zM4 24C4 12.96 12.96 4 24 4s20 8.96 20 20-8.96 20-20 20S4 35.04 4 24zm30.12 1.2H13.88v-2.4h20.24v2.4z",
        clipRule: "evenodd",
      })
    ),
  eh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M12 3.2a8.8 8.8 0 1 0 0 17.6 8.8 8.8 0 0 0 0-17.6ZM2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm9.15 0L7.96 8.81l.85-.85L12 11.15l3.19-3.19.85.85L12.85 12l3.19 3.19-.85.85L12 12.85l-3.19 3.19-.85-.85L11.15 12Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  th = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm10-8.8a8.8 8.8 0 1 0 0 17.6 8.8 8.8 0 0 0 0-17.6Zm.6 6.86v7.16h-1.2v-7.16h1.2Zm.26-2.24c0 .48-.39.86-.86.86s-.86-.39-.86-.86.39-.86.86-.86.86.39.86.86Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  nh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M3 12a9 9 0 1 1 18.001.001A9 9 0 0 1 3 12Zm1.55-2.32c-.23.73-.35 1.51-.35 2.32s.12 1.59.35 2.32h3.71c-.1-.76-.15-1.54-.15-2.32s.05-1.56.15-2.32H4.55Zm.49-1.2h3.42c.29-1.44.75-2.8 1.35-3.97a7.804 7.804 0 0 0-4.77 3.97Zm6.31-4.25c-.73 1.16-1.31 2.63-1.66 4.25h4.62c-.36-1.62-.95-3.09-1.68-4.25-.21-.02-.41-.02-.63-.02s-.44 0-.65.03Zm2.81.28c.6 1.17 1.07 2.53 1.37 3.97h3.43a7.802 7.802 0 0 0-4.8-3.97Zm5.29 5.17h-3.71c.1.76.16 1.54.16 2.32s-.05 1.56-.16 2.32h3.71c.23-.73.35-1.51.35-2.32s-.12-1.59-.35-2.32Zm-.49 5.84h-3.43c-.3 1.45-.77 2.8-1.37 3.97 2.1-.6 3.83-2.06 4.8-3.97Zm-6.34 4.25c.73-1.16 1.32-2.63 1.68-4.25H9.68c.35 1.62.93 3.09 1.66 4.25.22.02.43.03.66.03s.42 0 .63-.02Zm-2.82-.29a15.78 15.78 0 0 1-1.35-3.96H5.03a7.79 7.79 0 0 0 4.77 3.96Zm-.34-5.16h5.05c.11-.76.17-1.54.17-2.32s-.06-1.57-.17-2.32H9.46c-.11.76-.16 1.53-.16 2.32s.06 1.57.16 2.32Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  rh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M12 4.2c-4.31 0-7.8 3.49-7.8 7.8s3.49 7.8 7.8 7.8 7.8-3.49 7.8-7.8-3.49-7.8-7.8-7.8ZM3 12a9 9 0 1 1 18.001.001A9 9 0 0 1 3 12Zm9.6-4.73v4.51l3.14 3.14-.85.85-3.5-3.5v-5h1.2Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  sh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 48 48",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M31.04 7.54H16.96v-2.4h14.08v2.4zM24 12.94c-7.62 0-13.8 6.16-13.8 13.76S16.38 40.46 24 40.46c7.62 0 13.8-6.16 13.8-13.76S31.62 12.94 24 12.94zM7.8 26.7c0-8.92 7.26-16.16 16.2-16.16s16.2 7.24 16.2 16.16S32.94 42.86 24 42.86 7.8 35.64 7.8 26.7zm17.4-8.56v8.1l5.66 5.66-1.7 1.7-6.38-6.36v-9.1h2.42z",
        clipRule: "evenodd",
      })
    ),
  oh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M12.75 16.15c0 .41-.34.75-.75.75s-.75-.34-.75-.75.34-.75.75-.75.75.34.75.75ZM2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm10-8.8a8.8 8.8 0 1 0 0 17.6 8.8 8.8 0 0 0 0-17.6Zm0 4.99c-.99 0-1.72.52-2.03 1.42l-1.13-.38c.47-1.4 1.67-2.24 3.16-2.24 1.62 0 3.19 1.05 3.19 2.91 0 1.14-.69 1.76-1.28 2.19-.11.08-.21.15-.3.22-.18.13-.34.24-.5.38-.22.19-.38.37-.47.58 0 0 0 .01-.01.04 0 .03-.01.08-.02.15-.01.13-.01.3-.01.53h-1.2c0-.23 0-.44.02-.63.02-.18.05-.38.13-.57.19-.43.49-.75.79-1.01.2-.17.43-.33.63-.48.08-.06.16-.12.23-.17.52-.39.8-.7.8-1.23 0-1.01-.83-1.71-1.99-1.71Z",
        fill: "currentColor",
      })
    ),
  ah = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m20.9 20.04-5.34-5.22a7.076 7.076 0 0 0 1.73-4.63c0-3.92-3.18-7.1-7.1-7.1s-7.1 3.18-7.1 7.1a7.102 7.102 0 0 0 11.62 5.48l5.35 5.23.84-.86ZM4.3 10.2c0-3.26 2.64-5.9 5.9-5.9s5.9 2.64 5.9 5.9-2.64 5.9-5.9 5.9-5.9-2.64-5.9-5.9Z",
      })
    ),
  ih = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "m17.35 3.25 3.4 3.4L7.18 20.22l-3.93.53.53-3.93L17.35 3.25ZM4.92 17.38l-.26 1.96 1.96-.26L19.05 6.65l-1.7-1.7L4.92 17.38Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  lh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M8.12 3.1h7.44v3.15h5.53v1.19h-2.26L17.8 20.9H6.28L5.2 7.44H2.9V6.25h5.22V3.1Zm1.2 3.15h5.04V4.29H9.32v1.96ZM6.4 7.44l.99 12.27h9.31l.94-12.27H6.4Zm3.14 9.5V9.6h1.2v7.34h-1.2Zm3.72 0V9.6h1.2v7.34h-1.2Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  ch = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "m11.09 2 7.51 5.59L12.95 12l5.65 4.41L11.09 22v-8.55l-4.94 3.86-.74-.95L11 11.99 5.4 7.63l.74-.95 4.94 3.86V2Zm1.2 11.01 4.32 3.38-4.32 3.22v-6.59Zm0-2.03V4.4l4.32 3.22L12.29 11Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  uh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M4.73 5.1c-.82 0-1.48.66-1.48 1.47v10.86c0 .81.66 1.47 1.48 1.47h14.54c.82 0 1.48-.66 1.48-1.47V6.57c0-.81-.66-1.47-1.48-1.47H4.73ZM2.05 6.57c0-1.48 1.2-2.67 2.68-2.67h14.54c1.48 0 2.68 1.19 2.68 2.67v10.86c0 1.48-1.2 2.67-2.68 2.67H4.73c-1.48 0-2.68-1.19-2.68-2.67V6.57Zm11.93 2.48V7.58h1.2v1.47h3.13v1.2h-3.13v1.47h-1.2v-1.47H5.64v-1.2h8.34Zm-6.45 4.7v-1.47h1.2v1.47h9.59v1.2H8.73v1.47h-1.2v-1.47H5.64v-1.2h1.89Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  dh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "m17.68 3.15 3.22 3.22-9.85 9.86-3.3.09.09-3.31 9.84-9.86ZM9.02 13.52l-.04 1.56 1.56-.04 8.66-8.67-1.52-1.52-8.66 8.67ZM3.1 5.12h8.11v1.2H4.3v13.33h10.71c1.36 0 2.47-1.11 2.47-2.47v-4.54h1.2v4.54c0 2.03-1.64 3.67-3.67 3.67H3.1V5.12Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  fh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M5.64 5.64A8.972 8.972 0 0 1 12 3a9 9 0 0 1 0 18c-2.49 0-4.74-1.01-6.36-2.64l.85-.85a7.775 7.775 0 0 0 5.52 2.28c4.31 0 7.8-3.49 7.8-7.8s-3.49-7.8-7.8-7.8c-2.15 0-4.1.87-5.52 2.28-.37.37-.98 1.03-1.5 1.61l-.04.04H7.8v1.2H3V4.53h1.2v2.64c.49-.54 1.06-1.16 1.44-1.53Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  hh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M12 4.2c-4.31 0-7.8 3.49-7.8 7.8s3.49 7.8 7.8 7.8c2.15 0 4.1-.87 5.52-2.28l.85.85a8.972 8.972 0 0 1-6.36 2.64c-4.97 0-9-4.03-9-9S7.03 3 12 3c2.49 0 4.74 1.01 6.36 2.64.37.37.94.99 1.44 1.53V4.53H21v4.8h-4.8v-1.2h2.85l-.04-.04c-.52-.57-1.13-1.23-1.5-1.61a7.775 7.775 0 0 0-5.52-2.28Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  mh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M3.43 8.96 8.16 4.2l.84.86-3.7 3.73h10.24c3.01 0 5.46 2.46 5.46 5.51s-2.45 5.51-5.46 5.51H5.69V18.6h9.85c2.36 0 4.27-1.93 4.27-4.29s-1.91-4.29-4.27-4.29H5.3l3.68 3.71-.84.86L3 9.39l.43-.43Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  ph = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M18.7 8.79 15 5.06l.84-.86 5.15 5.19-5.14 5.18-.84-.86L18.69 10H8.46c-2.36 0-4.27 1.93-4.27 4.29s1.91 4.29 4.27 4.29h9.85v1.21H8.46C5.45 19.79 3 17.33 3 14.28s2.45-5.51 5.46-5.51H18.7Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  vh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "m18.19 6.19-2.37-2.34.85-.85 3.83 3.79-3.83 3.79-.85-.85 2.37-2.35H7.75c-.74 0-1.45.29-1.98.81a2.77 2.77 0 0 0-.82 1.96v1.68H3.74v-1.68c0-1.05.42-2.06 1.17-2.8.75-.74 1.77-1.16 2.83-1.16h10.44Zm.86 7.65v-1.68h1.21v1.68c0 1.05-.42 2.06-1.17 2.8-.75.74-1.77 1.16-2.83 1.16H5.81l2.37 2.35-.85.85-3.83-3.79 3.83-3.79.85.85-2.37 2.35h10.44c.74 0 1.45-.29 1.98-.81s.82-1.22.82-1.96Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  gh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M17.35 3v15.36l2.89-2.94.86.84-4.34 4.43-4.34-4.43.86-.84 2.89 2.94V3h1.2Zm-10.11.14 4.34 4.43-.86.84-2.89-2.94V21h-1.2V5.47L3.74 8.41l-.86-.84 4.37-4.43Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  wh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M7.88 7.05 4.12 3.3l-.85.85 6.3 6.28A2.894 2.894 0 0 0 12 14.9c.58 0 1.13-.17 1.58-.47l6.29 6.27.85-.85-3.54-3.53c.54-.36 1.03-.74 1.48-1.12.83-.71 1.5-1.42 1.96-1.95.23-.27.41-.49.54-.64.06-.08.11-.14.14-.18.02-.02.03-.04.04-.05h.01v-.02l.25-.35-.25-.35h-.01s-.02-.04-.04-.06c-.03-.04-.08-.11-.14-.18-.12-.16-.3-.38-.54-.64a18.92 18.92 0 0 0-1.96-1.95c-1.64-1.4-3.99-2.89-6.65-2.89-1.5 0-2.89.47-4.12 1.13Zm.89.89 1.65 1.65c.45-.3 1-.47 1.58-.47a2.894 2.894 0 0 1 2.43 4.47l1.88 1.88c.56-.36 1.09-.76 1.57-1.17.77-.66 1.4-1.33 1.84-1.82.16-.18.29-.34.39-.46-.1-.13-.23-.28-.39-.46-.43-.5-1.06-1.16-1.84-1.82-1.57-1.34-3.65-2.6-5.88-2.6-1.13 0-2.23.32-3.23.82Zm-2.87.42c-.19.15-.37.3-.55.45-.83.71-1.5 1.42-1.96 1.95-.23.27-.41.49-.54.64-.06.08-.11.14-.14.18-.02.02-.03.04-.04.05v.02h-.01l-.25.35.25.35v.02s.04.03.05.05c.03.04.08.11.14.18.12.16.3.38.54.64.46.53 1.13 1.24 1.96 1.95 1.64 1.4 3.99 2.89 6.65 2.89 1.06 0 2.07-.23 3.01-.61l-.93-.93c-.67.22-1.36.34-2.07.34-2.23 0-4.31-1.26-5.88-2.6-.77-.66-1.4-1.33-1.84-1.82-.16-.18-.29-.34-.39-.46.1-.13.23-.28.39-.46a16.706 16.706 0 0 1 2.47-2.33l-.85-.85Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  yh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "m21.74 12.35-.48-.35.48.35Z",
        fill: "none",
      }),
      /* @__PURE__ */ l.createElement("path", {
        d: "M14.89 12c0 1.6-1.29 2.9-2.89 2.9S9.11 13.6 9.11 12 10.4 9.1 12 9.1s2.89 1.3 2.89 2.9Zm6.71 0-.25.35h-.01s-.02.04-.04.06c-.03.04-.08.11-.14.18-.12.16-.3.38-.54.65-.46.53-1.13 1.24-1.96 1.95-1.64 1.41-3.99 2.89-6.65 2.89S7 16.59 5.36 15.19a18.92 18.92 0 0 1-2.5-2.6c-.06-.08-.11-.14-.14-.18-.02-.02-.03-.04-.04-.05h-.01v-.02l-.25-.35.25-.35h.01s.02-.04.04-.06c.03-.04.08-.11.14-.18.12-.16.3-.38.54-.65.46-.53 1.13-1.24 1.96-1.95C7 7.39 9.35 5.91 12.01 5.91s5.01 1.49 6.65 2.89a18.92 18.92 0 0 1 2.5 2.6c.06.08.11.14.14.18.02.02.03.04.04.05h.01v.02l.25.35Zm-1.49 0c-.1-.13-.23-.29-.39-.46-.43-.5-1.06-1.17-1.84-1.83C16.31 8.37 14.23 7.1 12 7.1S7.69 8.36 6.12 9.71c-.77.66-1.4 1.33-1.84 1.83-.16.18-.29.34-.39.46.1.13.23.29.39.46.43.5 1.06 1.16 1.84 1.83C7.69 15.63 9.77 16.9 12 16.9s4.31-1.26 5.88-2.61c.77-.66 1.4-1.33 1.84-1.83.16-.18.29-.34.39-.46Z",
        fill: "currentColor",
      })
    ),
  Ch = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M11.98 4.25c-4.27 0-7.73 3.47-7.73 7.75s3.46 7.75 7.73 7.75 7.73-3.47 7.73-7.75h1.2c0 4.94-4 8.95-8.93 8.95S3.05 16.94 3.05 12s4-8.95 8.93-8.95c2.47 0 4.7 1 6.31 2.62.38.38.96 1.01 1.46 1.56V4.56h1.2v4.78h-4.76v-1.2h2.77l-.03-.03c-.52-.57-1.12-1.22-1.49-1.6a7.708 7.708 0 0 0-5.47-2.27Zm-.83 2.88h1.2v4.75l3.28 3.29-.85.85-3.63-3.64V7.13Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  bh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M12.44 5.38c.94-.94 2.25-1.48 3.59-1.48s2.64.54 3.59 1.48c.94.94 1.49 2.24 1.49 3.57s-.54 2.63-1.49 3.57l-7.61 7.58-7.61-7.58c-.95-.95-1.49-2.23-1.49-3.57s.53-2.62 1.49-3.57c.95-.95 2.24-1.48 3.59-1.48s2.64.53 3.59 1.48l.44.44.44-.44Zm3.59-.28a3.9 3.9 0 0 0-2.74 1.13L12 7.51l-1.29-1.28C9.98 5.51 9 5.1 7.97 5.1s-2.01.41-2.74 1.13c-.73.72-1.13 1.7-1.13 2.73s.41 2 1.13 2.73L12 18.42l6.77-6.73c.72-.71 1.13-1.71 1.13-2.73s-.42-2.01-1.13-2.72a3.9 3.9 0 0 0-2.74-1.13Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Eh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M16.03 3.9c-.67 0-1.33.13-1.94.38-.62.25-1.18.63-1.65 1.1l-.44.44-.44-.44c-.95-.95-2.24-1.48-3.59-1.48s-2.64.53-3.59 1.48c-.95.95-1.49 2.23-1.49 3.57s.53 2.62 1.49 3.57l7.61 7.58 7.61-7.58c.47-.47.85-1.03 1.1-1.64.26-.61.39-1.27.39-1.93s-.13-1.32-.39-1.93c-.26-.61-.63-1.17-1.1-1.64a5.13 5.13 0 0 0-1.65-1.1c-.62-.25-1.28-.38-1.94-.38Z",
        fill: "currentColor",
      })
    ),
  xh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "m12 3.35 2.8 5.69 6.21.91-4.51 4.46 1.08 6.24-5.57-3-5.57 3 1.09-6.24L3 9.95l6.24-.91L12 3.35Zm0 2.71-1.97 4.06-4.5.66L8.79 14l-.77 4.44L12 16.3l3.98 2.14-.77-4.44 3.26-3.22-4.47-.66-2-4.06Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Sh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "m14.79 9.04-2.8-5.69-2.76 5.69-6.24.91 4.52 4.46-1.09 6.24 5.57-3 5.57 3-1.08-6.24 4.51-4.46-6.21-.91ZM12 6.06l2 4.06 4.47.66L15.21 14l.77 4.44L12 16.3V6.06Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Rh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "m14.79 9.04-2.8-5.69-2.76 5.69-6.24.91 4.52 4.46-1.09 6.24 5.57-3 5.57 3-1.08-6.24 4.51-4.46-6.21-.91Z",
        fill: "currentColor",
      })
    ),
  _h = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M13.74 6.12 3.95 6.1V4.9l10.99.02v2.24h4.5L22 11.15v4.83h-1.58c.03.17.05.34.05.51a2.62 2.62 0 0 1-5.24 0c0-.18.02-.35.05-.51H10.9c.03.17.05.34.05.51a2.62 2.62 0 1 1-5.19-.53H3.94v-1.2h2.42c.48-.54 1.18-.88 1.96-.88s1.49.35 1.97.89h3.43V6.12Zm1.2 8.66h.94c.48-.55 1.19-.89 1.97-.89s1.49.35 1.97.89h.97V11.5l-2.01-3.14h-3.84v6.42ZM6.82 9.31H2v-1.2h4.82v1.2Zm-.63 3.18H2.98v-1.2h3.21v1.2Zm2.15 2.58a1.41 1.41 0 1 0 0 2.82 1.41 1.41 0 1 0 0-2.82Zm9.52 0a1.41 1.41 0 1 0 0 2.82 1.41 1.41 0 1 0 0-2.82Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Mh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M15.72 6.45c-.98 0-1.77.79-1.77 1.77s.79 1.77 1.77 1.77 1.77-.79 1.77-1.77-.79-1.77-1.77-1.77Zm-2.91 1.17a2.972 2.972 0 0 1 5.82 0H21v1.2h-2.37a2.972 2.972 0 0 1-5.82 0H3v-1.2h9.81ZM8.15 14c-.98 0-1.77.79-1.77 1.77s.79 1.77 1.77 1.77 1.77-.79 1.77-1.77S9.13 14 8.15 14Zm-2.91 1.17a2.972 2.972 0 0 1 5.82 0H21v1.2h-9.94a2.972 2.972 0 0 1-5.82 0H3v-1.2h2.24Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Lh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M15.03 18.84H8.96v-1.2h6.07v1.2Zm-3.77-2.25c-.85 0-1.65 0-2.14-.01h-.59v-2.33c0-.17-.04-.34-.12-.5a1.1 1.1 0 0 0-.32-.39 6.433 6.433 0 0 1-1.78-2.2c-.42-.86-.64-1.81-.65-2.76-.02-3.44 2.75-6.31 6.17-6.38 1.32-.05 2.63.35 3.73 1.11 1.1.76 1.92 1.83 2.38 3.09.45 1.26.5 2.61.13 3.9a6.328 6.328 0 0 1-2.17 3.24c-.14.11-.25.25-.33.4-.08.16-.12.33-.12.5v2.33h-.6c-.12 0-1.95.01-3.6.01Zm-1.53-1.2h4.53v-1.14c0-.36.08-.71.24-1.03.16-.32.39-.6.67-.82.85-.67 1.46-1.58 1.76-2.62A5.157 5.157 0 0 0 14.9 4.1c-.89-.61-1.95-.92-3.02-.9-2.77.06-5.02 2.39-5 5.18 0 .77.18 1.55.52 2.24.34.69.84 1.31 1.44 1.79.28.22.51.5.66.81.15.32.24.67.24 1.02v1.14Zm.06 4.41c0 1.22.98 2.2 2.2 2.2s2.2-.98 2.2-2.2h-4.4Z",
        fill: "currentColor",
      })
    ),
  Vh = (e) =>
    /* @__PURE__ */ React.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 48 48",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ React.createElement("path", {
        fill: "currentColor",
        d: "M44 9v22.54c0 4.12-3.36 7.46-7.5 7.46H4V9m2.4 27.62h30.1c2.82 0 5.1-2.28 5.1-5.08V12.92L24 28.98 6.4 12.92v23.7zm1.9-25.2L24 25.74l15.7-14.32H8.3z",
      })
    ),
  Th = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "m12.26 2.49-.32-.19-.31.19L7.91 4.8 4.19 7.11l-.28.18v9.62l.29.17 7.44 4.44.31.18.31-.18 7.56-4.44.3-.17V7.28l-.29-.18-7.57-4.61ZM9.38 5.3l2.57-1.59 6.38 3.9-2.6 1.51-6.35-3.81Zm6.95 4.85 2.58-1.5v7.56l-6.36 3.74v-7.61l2.58-1.5v3.5l1.2-.67v-3.53Zm-4.98 2.19v7.6l-6.24-3.73V8.66l6.24 3.68Zm.6-1.04L5.66 7.6l2.57-1.59 6.31 3.79-2.6 1.51Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Ph = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M10.8 3.82c.45-.26.95-.33 1.46-.22h.03c.53.14.97.46 1.24.9s.35.96.23 1.48l-.47 2.51h5.22c.33 0 .65.06.95.2.3.13.57.33.78.58.22.25.38.54.47.85.09.31.11.64.06.97l-1.15 7.45c-.08.54-.36 1.03-.77 1.38-.42.35-.94.54-1.49.54H3.2V10.15h4.38l2.23-5.12c.23-.52.55-.94.99-1.2Zm-3.43 7.53H4.39v7.9H7.36v-7.9Zm1.2 7.9h8.81c.26 0 .51-.09.7-.25.2-.17.32-.39.36-.64l1.15-7.45a1.049 1.049 0 0 0-.62-1.12c-.14-.06-.3-.09-.45-.09h-6.67l.74-3.94c.05-.26.01-.46-.08-.62a.846.846 0 0 0-.51-.36.78.78 0 0 0-.58.08c-.17.1-.35.29-.5.65s-2.34 5.37-2.34 5.37v8.37Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Hh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M19.4 4.75h-2.77v7.9h2.98v-7.9h-.2Zm.8-1.2h.6v10.3h-4.38l-2.23 5.12c-.23.52-.55.94-.99 1.2-.45.26-.95.33-1.46.22h-.02c-.53-.14-.97-.46-1.24-.9s-.35-.96-.23-1.48l.47-2.51H5.49c-.33 0-.65-.06-.95-.2-.3-.13-.57-.33-.78-.58-.22-.25-.38-.54-.47-.85a2.26 2.26 0 0 1-.06-.97l1.15-7.45c.08-.54.36-1.03.77-1.38.42-.35.94-.54 1.49-.54h13.57Zm-4.77 9.58V4.75h-8.8c-.26 0-.51.09-.7.25-.2.17-.32.39-.36.64l-1.15 7.45a1.049 1.049 0 0 0 .62 1.12c.14.06.3.09.45.09h6.67l-.74 3.94c-.05.26-.01.46.08.62.09.15.26.29.51.36.24.05.43.01.58-.08.17-.1.35-.29.5-.65l2.34-5.37Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Ah = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M10.03 4.35c-3.11 0-5.63 2.54-5.63 5.68s2.53 5.68 5.63 5.68c1.41 0 2.7-.52 3.69-1.39l.61-.63c.83-.99 1.33-2.27 1.33-3.66 0-3.14-2.53-5.68-5.63-5.68Zm5.17 10.18a6.915 6.915 0 0 0 1.66-4.49c0-3.8-3.05-6.88-6.83-6.88S3.2 6.23 3.2 10.03s3.05 6.88 6.83 6.88c1.64 0 3.14-.58 4.32-1.55l5.61 5.49.84-.86-5.6-5.47ZM9.43 9.44V6.66h1.2v2.78h2.76v1.2h-2.76v2.78h-1.2v-2.78H6.67v-1.2h2.76Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Zh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M10.03 4.35c-3.11 0-5.63 2.54-5.63 5.68s2.53 5.68 5.63 5.68c1.41 0 2.7-.52 3.69-1.39l.61-.63c.83-.99 1.33-2.27 1.33-3.66 0-3.14-2.53-5.68-5.63-5.68Zm5.17 10.18a6.915 6.915 0 0 0 1.66-4.49c0-3.8-3.05-6.88-6.83-6.88S3.2 6.23 3.2 10.03s3.05 6.88 6.83 6.88c1.64 0 3.14-.58 4.32-1.55l5.61 5.49.84-.86-5.6-5.47Zm-8.53-3.9v-1.2h6.71v1.2h-6.7Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  kh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M12 4.6c-2.15 0-3.89 1.74-3.89 3.88s1.74 3.88 3.89 3.88 3.89-1.74 3.89-3.88S14.15 4.6 12 4.6ZM6.91 8.48C6.91 5.67 9.19 3.4 12 3.4s5.09 2.28 5.09 5.08-2.28 5.08-5.09 5.08-5.09-2.28-5.09-5.08ZM3.75 20.59l-.52-.3-.52-.3v-.02c0-.01.02-.03.03-.05.02-.04.06-.09.1-.16.09-.13.22-.31.39-.53.35-.43.89-1 1.63-1.57C6.35 16.52 8.67 15.4 12 15.4s5.64 1.12 7.14 2.26c.74.57 1.28 1.14 1.63 1.57.18.22.31.4.39.53.04.07.08.12.1.16.01.02.02.03.03.05s0 .02 0 .02l-.52.3-.52.3s0-.02-.02-.03c-.02-.02-.04-.06-.08-.12-.07-.1-.18-.26-.33-.44-.3-.37-.77-.87-1.43-1.37-1.31-1-3.38-2.02-6.4-2.02s-5.1 1.02-6.4 2.02c-.66.5-1.13 1-1.43 1.37-.15.19-.26.34-.33.44-.03.05-.06.09-.07.12 0 .01-.01.02-.02.03Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Dh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        focusable: "false",
        viewBox: "0 0 24 24",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "m11.89 3.4 9.66 17.2H2.45l9.44-17.2Zm.01 2.47L4.47 19.4H19.5L11.9 5.87Zm-.51 9.47V9.76h1.2v5.58h-1.2Zm-.2 2.21c0-.44.36-.8.8-.8s.8.36.8.8-.36.8-.8.8-.8-.36-.8-.8Z",
      })
    ),
  Bh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M12.25 18.8c1.56-1.83 2.5-4.2 2.5-6.8s-.94-4.97-2.5-6.8l-.97.72c1.41 1.63 2.27 3.75 2.27 6.08s-.86 4.45-2.27 6.08l.97.72Zm1.81 1.34c1.83-2.2 2.93-5.04 2.93-8.13s-1.1-5.93-2.93-8.13l.97-.72c1.98 2.41 3.17 5.49 3.17 8.85s-1.19 6.44-3.17 8.85l-.97-.72Zm-4.6-3.4c1.14-1.25 1.84-2.91 1.84-4.74s-.7-3.49-1.84-4.74l-.98.72c1 1.04 1.61 2.46 1.61 4.02s-.61 2.98-1.61 4.02l.98.72ZM6.8 14.77c.76-.68 1.24-1.67 1.24-2.77s-.48-2.09-1.23-2.77l-1 .74c.62.46 1.03 1.19 1.03 2.03s-.41 1.57-1.03 2.03l1 .74Z",
        fill: "currentColor",
      })
    ),
  Oh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M12 6.97c-1.41 0-2.57 1.14-2.57 2.55s1.15 2.55 2.57 2.55 2.57-1.14 2.57-2.55S13.42 6.97 12 6.97Zm0 3.9c-.76 0-1.37-.61-1.37-1.35s.61-1.35 1.37-1.35 1.37.61 1.37 1.35-.61 1.35-1.37 1.35Z",
        fill: "currentColor",
      }),
      /* @__PURE__ */ l.createElement("path", {
        d: "M16.74 4.85C15.42 3.61 13.66 3 12.02 3s-3.4.6-4.72 1.84c-1.34 1.25-2.19 3.12-2.02 5.57.17 2.47 1.77 5.05 3.23 6.94.74.96 3.33 3.65 3.33 3.65s2.71-2.68 3.48-3.65c1.53-1.9 3.21-4.48 3.41-6.94.19-2.44-.65-4.31-1.99-5.57Zm.79 5.47c-.16 2.07-1.62 4.4-3.14 6.28-.75.92-1.49 1.71-2.04 2.27-.19.19-.36.36-.5.49-.13-.13-.29-.29-.46-.48-.53-.55-1.23-1.34-1.94-2.26-1.44-1.87-2.84-4.21-2.98-6.29-.15-2.1.58-3.62 1.65-4.61 1.08-1.01 2.55-1.51 3.91-1.51s2.82.51 3.89 1.52c1.06 1 1.78 2.51 1.61 4.6Z",
        fill: "currentColor",
      })
    ),
  Nh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m12 3 9 8.14-1.21 1.31-.75-.68v5.38c0 2.13-1.74 3.85-3.9 3.85H5.2v-9.43l-.98.89-1.21-1.31L12 3ZM6.99 9.94 12 5.41l5.24 4.73v7c0 1.15-.94 2.07-2.1 2.07H6.99V9.93Z",
      })
    ),
  $h = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M10.35 5.8c0-.91.74-1.65 1.65-1.65.91 0 1.65.74 1.65 1.65S12.91 7.45 12 7.45c-.91 0-1.65-.74-1.65-1.65Zm6.2 0c0-.91.74-1.65 1.65-1.65.91 0 1.65.74 1.65 1.65s-.74 1.65-1.65 1.65c-.91 0-1.65-.74-1.65-1.65Zm-12.39 0c0-.91.74-1.65 1.65-1.65.91 0 1.65.74 1.65 1.65s-.74 1.65-1.65 1.65c-.91 0-1.65-.74-1.65-1.65Zm0 6.2c0-.91.74-1.65 1.65-1.65.91 0 1.65.74 1.65 1.65s-.74 1.65-1.65 1.65c-.91 0-1.65-.74-1.65-1.65Zm6.2 0c0-.91.74-1.65 1.65-1.65.91 0 1.65.74 1.65 1.65s-.74 1.65-1.65 1.65c-.91 0-1.65-.74-1.65-1.65Zm6.2 0c0-.91.74-1.65 1.65-1.65.91 0 1.65.74 1.65 1.65s-.74 1.65-1.65 1.65c-.91 0-1.65-.74-1.65-1.65ZM4.17 18.2c0-.91.74-1.65 1.65-1.65.91 0 1.65.74 1.65 1.65s-.74 1.65-1.65 1.65c-.91 0-1.65-.74-1.65-1.65Zm6.2 0c0-.91.74-1.65 1.65-1.65.91 0 1.65.74 1.65 1.65s-.74 1.65-1.65 1.65c-.91 0-1.65-.74-1.65-1.65Zm6.2 0c0-.91.74-1.65 1.65-1.65.91 0 1.65.74 1.65 1.65s-.74 1.65-1.65 1.65c-.91 0-1.65-.74-1.65-1.65Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  zh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M11.02 15.27c0-.55.45-1 1-1h.01c.55 0 1 .45 1 1s-.45 1-1 1h-.01c-.55 0-1-.45-1-1Zm9.33-6.09v8.32c0 2.15-1.74 3.89-3.89 3.89H3.65V9.17h2.98V7.98c0-2.97 2.42-5.4 5.39-5.4s5.39 2.42 5.39 5.4v1.19h2.94Zm-11.92 0h7.18V7.99c0-1.98-1.62-3.6-3.59-3.6s-3.59 1.62-3.59 3.6v1.19Zm10.12 1.8H5.45v8.62h11.01c1.16 0 2.09-.94 2.09-2.1v-6.53Z",
      })
    ),
  Fh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M11.02 15.27c0-.55.45-1 1-1h.01c.55 0 1 .45 1 1s-.45 1-1 1h-.01c-.55 0-1-.45-1-1Zm9.33-6.09v8.32c0 2.15-1.74 3.89-3.89 3.89H3.65V9.17h11.86V7.98c0-1.98-1.62-3.6-3.61-3.6-.91 0-1.75.34-2.38.9l-.67.6-1.19-1.34.67-.6a5.38 5.38 0 0 1 3.57-1.36c2.97 0 5.4 2.42 5.4 5.4v1.19h3.04Zm-1.8 1.8H5.45v8.62h11.01c1.16 0 2.09-.94 2.09-2.1v-6.53Z",
      })
    ),
  jh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M3 2.9h2.87l.68 2.22H21v4.11c0 2.15-1.75 3.9-3.9 3.9H9.01l.55 1.66h9.21v1.8H8.25L6.91 12.5 4.54 4.7H3V2.9Zm5.44 8.43L7.1 6.92h12.1v2.31a2.1 2.1 0 0 1-2.1 2.1H8.44Zm.08 8.27c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5Zm6.27 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  qh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m6.16 12.9 6.26 5.95-1.24 1.31L2.6 12l8.59-8.15 1.24 1.31-6.26 5.95h15.24v1.8H6.16Z",
      })
    ),
  Ih = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m12.9 17.84 5.95-6.26 1.31 1.24-8.15 8.59-8.16-8.6 1.31-1.24 5.95 6.26V2.6h1.8v15.24Z",
      })
    ),
  Wh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m17.84 11.1-6.26-5.95 1.24-1.31 8.59 8.15-8.59 8.15-1.24-1.31 6.26-5.95H2.6v-1.8h15.24Z",
      })
    ),
  Uh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "m11.1 6.16-5.95 6.26-1.31-1.24L12 2.6l8.15 8.59-1.31 1.24-5.95-6.26v15.24h-1.8V6.16Z",
      })
    ),
  Gh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "m12 8.3 7.65 8 1.3-1.24L12 5.7l-8.95 9.36 1.3 1.24 7.65-8Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Kh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M3.75 10.08c4.55-4.37 11.95-4.37 16.51 0l1.25-1.3c-5.26-5.04-13.76-5.04-19.01 0l1.25 1.3Zm2.73 2.76c3.05-2.92 8-2.92 11.04 0l1.25-1.3c-3.74-3.59-9.8-3.59-13.54 0l1.25 1.3Zm2.69 2.77c1.56-1.49 4.1-1.49 5.66 0l1.24-1.3c-2.25-2.16-5.89-2.16-8.15 0l1.24 1.3ZM11.98 17c-.55 0-1 .45-1 1s.45 1 1 1h.01c.55 0 1-.45 1-1s-.45-1-1-1h-.01Z",
        fill: "currentColor",
      })
    ),
  Yh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M20.34 9.82c-4.61-4.49-12.08-4.49-16.69 0L2.39 8.53c5.3-5.17 13.9-5.17 19.2 0l-1.26 1.29Zm-2.76 2.83c-3.08-3-8.09-3-11.17 0l-1.26-1.29c3.78-3.69 9.9-3.69 13.68 0l-1.26 1.29Zm-2.72 2.85c-1.58-1.53-4.15-1.53-5.72 0l-1.25-1.29c2.28-2.21 5.96-2.21 8.23 0l-1.25 1.29ZM11 17.85c0-.55.45-1 1-1h.01c.55 0 1 .45 1 1s-.45 1-1 1H12c-.55 0-1-.45-1-1Zm7.42-2.07c.05.15.07.31.07.44h-1.44c0-.13.03-.29.08-.44.05-.16.12-.3.22-.39.09-.08.22-.15.43-.15.22 0 .34.07.43.15.09.09.17.22.22.38Zm-2.17.43-.66.01v3.13h4.39v-3.13h-.68c0-.18-.03-.42-.11-.67-.07-.24-.2-.52-.43-.74-.24-.23-.57-.36-.98-.36-.41 0-.73.14-.98.36-.23.22-.36.49-.44.74-.08.25-.1.48-.11.66Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Xh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "m6.42 12.65-1.26-1.29c3.78-3.69 9.9-3.69 13.68 0l-1.26 1.29c-3.08-3-8.09-3-11.17 0Zm5.59 4.2H12c-.55 0-1 .45-1 1s.45 1 1 1h.01c.55 0 1-.45 1-1s-.45-1-1-1Zm7.28-.63h.68v3.13h-4.39v-3.13h.66c0-.19.04-.43.11-.67.08-.24.21-.52.44-.74.24-.23.57-.36.98-.36.41 0 .73.14.98.36.23.22.36.49.43.74s.1.49.11.66Zm-.8.01c0-.13-.03-.29-.07-.44-.05-.16-.12-.3-.22-.38a.593.593 0 0 0-.43-.15c-.22 0-.34.07-.43.15-.1.09-.17.22-.22.39-.05.15-.07.31-.08.44h1.44ZM7.88 14.21l1.25 1.29c1.58-1.53 4.15-1.53 5.72 0l1.25-1.29c-2.28-2.21-5.96-2.21-8.23 0Z",
        fill: "currentColor",
      }),
      /* @__PURE__ */ l.createElement("path", {
        d: "m2.4 8.53 1.26 1.29c4.61-4.49 12.08-4.49 16.69 0l1.26-1.29C16.3 3.36 7.7 3.36 2.4 8.53Z",
        fill: "#cfd0d0",
      })
    ),
  Jh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M13.01 17.85c0 .55-.45 1-1 1H12c-.55 0-1-.45-1-1s.45-1 1-1h.01c.55 0 1 .45 1 1Zm6.28-1.63h.68v3.13h-4.39v-3.13h.66c0-.19.04-.43.11-.67.08-.24.21-.52.44-.74.24-.23.57-.36.98-.36.41 0 .73.14.98.36.23.22.36.49.43.74s.1.49.11.66Zm-.8.01c0-.13-.03-.29-.07-.44-.05-.16-.12-.3-.22-.38a.593.593 0 0 0-.43-.15c-.22 0-.34.07-.43.15-.1.09-.17.22-.22.39-.05.15-.07.31-.08.44h1.44ZM7.88 14.21l1.25 1.29c1.58-1.53 4.15-1.53 5.72 0l1.25-1.29c-2.28-2.21-5.96-2.21-8.23 0Z",
        fill: "currentColor",
      }),
      /* @__PURE__ */ l.createElement("path", {
        d: "m6.42 12.65-1.26-1.29c3.78-3.69 9.9-3.69 13.68 0l-1.26 1.29c-3.08-3-8.09-3-11.17 0ZM2.4 8.53l1.26 1.29c4.61-4.49 12.08-4.49 16.69 0l1.26-1.29C16.3 3.36 7.7 3.36 2.4 8.53Z",
        fill: "#cfd0d0",
      })
    ),
  Qh = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M13.01 17.85c0 .55-.45 1-1 1H12c-.55 0-1-.45-1-1s.45-1 1-1h.01c.55 0 1 .45 1 1Zm6.28-1.63h.68v3.13h-4.39v-3.13h.66c0-.19.04-.43.11-.67.08-.24.21-.52.44-.74.24-.23.57-.36.98-.36.41 0 .73.14.98.36.23.22.36.49.43.74s.1.49.11.66Zm-.8.01c0-.13-.03-.29-.07-.44-.05-.16-.12-.3-.22-.38a.593.593 0 0 0-.43-.15c-.22 0-.34.07-.43.15-.1.09-.17.22-.22.39-.05.15-.07.31-.08.44h1.44Z",
        fill: "currentColor",
      }),
      /* @__PURE__ */ l.createElement("path", {
        d: "m6.42 12.65-1.26-1.29c3.78-3.69 9.9-3.69 13.68 0l-1.26 1.29c-3.08-3-8.09-3-11.17 0Zm1.47 1.56 1.25 1.29c1.58-1.53 4.15-1.53 5.72 0l1.25-1.29c-2.28-2.21-5.96-2.21-8.23 0ZM2.4 8.53l1.26 1.29c4.61-4.49 12.08-4.49 16.69 0l1.26-1.29C16.3 3.36 7.7 3.36 2.4 8.53Z",
        fill: "#cfd0d0",
      })
    ),
  em = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M3.75 10.08c4.55-4.37 11.95-4.37 16.51 0l1.25-1.3c-5.26-5.04-13.76-5.04-19.01 0l1.25 1.3Z",
        fill: "#cfd0d0",
      }),
      /* @__PURE__ */ l.createElement("path", {
        d: "M6.48 12.83c3.05-2.92 8-2.92 11.04 0l1.25-1.3c-3.74-3.59-9.8-3.59-13.54 0l1.25 1.3Zm2.69 2.77c1.56-1.49 4.1-1.49 5.66 0l1.24-1.3c-2.25-2.16-5.89-2.16-8.15 0l1.24 1.3Zm2.81 1.39c-1.3-.02-1.29 2.03.01 2 1.3.02 1.29-2.03-.01-2Z",
        fill: "currentColor",
      })
    ),
  tm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M3.75 10.08c4.55-4.37 11.95-4.37 16.51 0l1.25-1.3c-5.26-5.04-13.76-5.04-19.01 0l1.25 1.3Zm2.73 2.76c3.05-2.92 8-2.92 11.04 0l1.25-1.3c-3.74-3.59-9.8-3.59-13.54 0l1.25 1.3Z",
        fill: "#cfd0d0",
      }),
      /* @__PURE__ */ l.createElement("path", {
        d: "M9.17 15.61c1.56-1.49 4.1-1.49 5.66 0l1.24-1.3c-2.25-2.16-5.89-2.16-8.15 0l1.24 1.3ZM11.98 17c-1.3-.02-1.29 2.03.01 2 1.3.02 1.29-2.03-.01-2Z",
        fill: "currentColor",
      })
    ),
  nm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M3.75 10.08c4.55-4.37 11.95-4.37 16.51 0l1.25-1.3c-5.26-5.04-13.76-5.04-19.01 0l1.25 1.3Zm2.73 2.76c3.05-2.92 8-2.92 11.04 0l1.25-1.3c-3.74-3.59-9.8-3.59-13.54 0l1.25 1.3Zm2.69 2.77c1.56-1.49 4.1-1.49 5.66 0l1.24-1.3c-2.25-2.16-5.89-2.16-8.15 0l1.24 1.3Z",
        fill: "#cfd0d0",
      }),
      /* @__PURE__ */ l.createElement("path", {
        d: "M11.98 17c-1.3-.02-1.29 2.03.01 2 1.3.02 1.29-2.03-.01-2Z",
        fill: "currentColor",
      })
    ),
  rm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M11.1 12.74V3.05h1.8v9.69l2.84-3.09 1.33 1.22-5.06 5.52-5.06-5.52 1.33-1.22 2.84 3.09Zm9.8.31v4c0 2.15-1.75 3.9-3.9 3.9H3.1v-7.9h1.8v6.1H17a2.1 2.1 0 0 0 2.1-2.1v-4h1.8Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  sm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "m12 3.03 5.06 5.52-1.33 1.22-2.84-3.09v9.09h-1.8V6.68L8.25 9.77 6.92 8.55 12 3.03Zm8.9 10.03v4c0 2.15-1.75 3.9-3.9 3.9H3.1v-7.9h1.8v6.1H17a2.1 2.1 0 0 0 2.1-2.1v-4h1.8Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  om = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M20.96 5.38 9.28 19.75l-6.24-6.13 1.26-1.28 4.83 4.75L19.57 4.25l1.4 1.14Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  am = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M11.1 11.1V3h1.8v8.1H21v1.8h-8.1V21h-1.8v-8.1H3v-1.8h8.1Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  im = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M21 11.1v1.8H3v-1.8h18Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  lm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M12 3.8c-4.53 0-8.2 3.67-8.2 8.2s3.67 8.2 8.2 8.2 8.2-3.67 8.2-8.2-3.67-8.2-8.2-8.2ZM2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm15-2.93-6.35 7.76-3.57-3.49 1.26-1.29 2.17 2.11 5.11-6.24 1.39 1.14Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  cm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M12 3.8c-4.53 0-8.2 3.67-8.2 8.2s3.67 8.2 8.2 8.2 8.2-3.67 8.2-8.2-3.67-8.2-8.2-8.2ZM2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm9.1-.9v-4h1.8v4h4v1.8h-4v4h-1.8v-4h-4v-1.8h4Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  um = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M12 3.8c-4.53 0-8.2 3.67-8.2 8.2s3.67 8.2 8.2 8.2 8.2-3.67 8.2-8.2-3.67-8.2-8.2-8.2ZM2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm8.73 0L7.87 9.14l1.27-1.27L12 10.73l2.86-2.86 1.27 1.27L13.27 12l2.86 2.86-1.27 1.27L12 13.27l-2.86 2.86-1.27-1.27L10.73 12Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  dm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm10-8.2c-4.53 0-8.2 3.67-8.2 8.2s3.67 8.2 8.2 8.2 8.2-3.67 8.2-8.2-3.67-8.2-8.2-8.2Zm.9 6.95v6.3h-1.8v-6.3h1.8Zm.1-2.79c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  fm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M12 4.9c-3.92 0-7.1 3.18-7.1 7.1s3.18 7.1 7.1 7.1 7.1-3.18 7.1-7.1-3.18-7.1-7.1-7.1ZM3.1 12c0-4.92 3.98-8.9 8.9-8.9s8.9 3.98 8.9 8.9-3.98 8.9-8.9 8.9-8.9-3.98-8.9-8.9Zm9.8-4.83v4.49l3.13 3.13-1.27 1.27-3.66-3.66V7.17h1.8Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  hm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "m14.64 6.67-.51 6.39-4.57 4.5.51-6.39 4.57-4.5Zm-1.57 3.38-1.74 1.71 1.54.72.19-2.43ZM3.11 12C3.1 7.08 7.08 3.1 12 3.1s8.9 3.98 8.9 8.9-3.98 8.9-8.9 8.9-8.9-3.98-8.9-8.9ZM12 4.9c-3.92 0-7.1 3.18-7.1 7.1s3.18 7.1 7.1 7.1 7.1-3.18 7.1-7.1-3.18-7.1-7.1-7.1Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  mm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M12 4.1c-4.36 0-7.9 3.54-7.9 7.9s3.54 7.9 7.9 7.9 7.9-3.54 7.9-7.9-3.54-7.9-7.9-7.9ZM2.9 12c0-5.03 4.07-9.1 9.1-9.1s9.1 4.07 9.1 9.1-4.07 9.1-9.1 9.1-9.1-4.07-9.1-9.1Zm11.5-5.15-.48 6.04-4.32 4.25.48-6.04 4.32-4.25Zm-1.39 2.98-1.82 1.79 1.61.75.2-2.54Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  pm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12Zm10-8.2c-4.53 0-8.2 3.67-8.2 8.2s3.67 8.2 8.2 8.2 8.2-3.67 8.2-8.2-3.67-8.2-8.2-8.2ZM13 16c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1Zm-1-7.23c-.74 0-1.28.39-1.51 1.09L8.78 9.3c.47-1.45 1.7-2.33 3.22-2.33 1.63 0 3.26 1.1 3.26 3.06 0 1.22-.74 1.89-1.3 2.31-.11.09-.21.16-.3.22-.15.11-.28.21-.41.32-.17.15-.27.28-.33.4 0 .01 0 .04-.01.1 0 .11-.01.26-.01.47h-1.8c0-.22 0-.43.02-.62.02-.18.05-.41.14-.63.2-.47.51-.81.81-1.06.19-.17.42-.34.61-.48.07-.05.14-.1.19-.14.45-.35.59-.54.59-.88 0-.72-.56-1.26-1.46-1.26Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  vm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M3.79 16.39 16.98 3.2l3.82 3.82L7.61 20.21l-4.41.59.59-4.41Zm1.7.84-.2 1.47 1.47-.2L18.25 7.02l-1.27-1.27L5.49 17.24Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  gm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M7.82 3h8.05v2.92h5.23v1.8h-1.98L18.09 21H6L4.92 7.72H2.9v-1.8h4.92V3Zm1.8 2.92h4.44V4.8H9.62v1.12Zm-2.9 1.8.94 11.48h8.76l.89-11.48H6.73ZM9.23 17V9.6h1.8V17h-1.8Zm3.72 0V9.6h1.8V17h-1.8Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  wm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "m10.64 2 7.86 5.88L13.25 12l5.25 4.12L10.64 22v-7.95l-4.03 3.17L5.5 15.8l4.84-3.8L5.5 8.2l1.11-1.42 4.03 3.17V2Zm1.79 11.64 3.11 2.44-3.11 2.33v-4.77Zm0-3.29V5.59l3.11 2.33-3.11 2.44Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  ym = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M5 5.65c-.61 0-1.1.49-1.1 1.1v10.5c0 .61.49 1.1 1.1 1.1h14c.61 0 1.1-.49 1.1-1.1V6.75c0-.61-.49-1.1-1.1-1.1H5Zm-2.9 1.1c0-1.6 1.3-2.9 2.9-2.9h14c1.6 0 2.9 1.3 2.9 2.9v10.5c0 1.6-1.3 2.9-2.9 2.9H5c-1.6 0-2.9-1.3-2.9-2.9V6.75Zm11.49 2.08v-1.1h1.8v1.1h2.69v1.8h-2.69v1.1h-1.8v-1.1H5.88v-1.8h7.71Zm-6.21 4.54v-1.1h1.8v1.1h8.9v1.8h-8.9v1.1h-1.8v-1.1h-1.5v-1.8h1.5Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Cm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "m17.5 3 3.6 3.58-9.96 9.91-3.69.09.1-3.68L17.5 3ZM9.33 13.67l-.03 1.07 1.08-.03 8.17-8.13-1.05-1.04-8.17 8.13ZM2.9 5.05h8.26v1.79H4.7v12.37h10.18c1.16 0 2.1-.94 2.1-2.09v-4.43h1.8v4.43c0 2.15-1.75 3.89-3.91 3.89H2.9V5.05Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  bm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M5.71 5.71A8.894 8.894 0 0 1 20.9 12c0 4.92-3.98 8.9-8.9 8.9-2.46 0-4.68-1-6.29-2.61l1.27-1.27A7.102 7.102 0 0 0 19.1 12 7.102 7.102 0 0 0 6.98 6.98c-.24.24-.6.62-.95 1.01H8v1.8H3.1v-4.9h1.8v1.67c.3-.32.59-.63.81-.85Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Em = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M12 4.9c-3.92 0-7.1 3.18-7.1 7.1a7.102 7.102 0 0 0 12.12 5.02l1.27 1.27A8.894 8.894 0 0 1 3.1 12c0-4.92 3.98-8.9 8.9-8.9 2.46 0 4.68 1 6.29 2.61.22.22.51.53.81.85V4.89h1.8v4.9H16v-1.8h1.97c-.36-.39-.71-.77-.95-1.01A7.066 7.066 0 0 0 12 4.9Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  xm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M3.64 8.83 8.16 4.3l1.28 1.28-2.98 2.99h8.99c3.07 0 5.55 2.49 5.55 5.57s-2.49 5.57-5.55 5.57H6.03V17.9h9.42c2.07 0 3.75-1.68 3.75-3.76s-1.68-3.76-3.75-3.76h-9l2.97 2.98-1.28 1.28L3 9.47l.64-.64Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Sm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "m17.55 8.57-2.98-2.99 1.28-1.28 5.16 5.17-5.14 5.16-1.28-1.28 2.97-2.98H8.55c-2.07 0-3.75 1.68-3.75 3.76s1.68 3.76 3.75 3.76h9.41v1.81H8.55C5.48 19.7 3 17.21 3 14.13s2.49-5.57 5.55-5.57h9Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Rm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "m17.25 6.02-1.76-1.75L16.77 3l3.94 3.92-3.94 3.92-1.28-1.27 1.76-1.76H7.88a2.392 2.392 0 0 0-2.39 2.39v1.64H3.68V10.2c0-1.11.44-2.17 1.23-2.96.79-.78 1.86-1.23 2.97-1.23h9.37Zm1.27 7.78v-1.64h1.81v1.64c0 1.11-.44 2.17-1.23 2.96-.79.78-1.86 1.23-2.97 1.23H6.75l1.76 1.76-1.28 1.27-3.94-3.92 3.94-3.92 1.28 1.27-1.76 1.76h9.37a2.392 2.392 0 0 0 2.39-2.39Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  _m = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "m7.34 2.95 4.69 4.79L10.75 9 8.24 6.43v14.59h-1.8V6.44L3.93 9.01 2.65 7.75l4.69-4.8Zm10.21.07v14.54l2.51-2.57 1.28 1.26-4.69 4.79-4.69-4.79 1.28-1.26 2.51 2.57V3.02h1.8Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Mm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M7.94 6.65c1.21-.62 2.59-1.06 4.06-1.06 2.78 0 5.21 1.55 6.87 2.97.85.72 1.53 1.45 2 1.99.24.27.42.5.55.66.06.08.11.14.15.19.02.02.44.6.44.6s-.42.58-.44.6c-.03.05-.08.11-.15.19-.13.16-.31.39-.55.66-.47.54-1.15 1.26-2 1.99-.37.31-.77.63-1.21.94l3.28 3.28-1.27 1.27-6.12-6.13c-.46.25-.98.39-1.54.39-1.77 0-3.2-1.43-3.2-3.2 0-.56.14-1.08.39-1.54L3.07 4.32l1.27-1.27 3.6 3.6ZM9.29 8l1.19 1.19c.46-.25.98-.39 1.54-.39 1.77 0 3.2 1.43 3.2 3.2 0 .56-.14 1.08-.39 1.54l1.55 1.55c.47-.32.92-.66 1.34-1.02.76-.65 1.38-1.31 1.81-1.8.08-.1.16-.19.23-.27-.07-.08-.14-.17-.23-.27-.43-.49-1.05-1.15-1.81-1.8-1.55-1.33-3.57-2.54-5.7-2.54-.94 0-1.85.23-2.71.61Zm-4.32.7c-.77.68-1.4 1.34-1.84 1.85-.24.27-.42.5-.55.66-.06.08-.58.79-.58.79l.38.53s.14.18.2.26c.13.16.31.39.55.66.47.54 1.15 1.26 2 1.99 1.66 1.42 4.09 2.97 6.87 2.97.8 0 1.57-.13 2.31-.35l-1.51-1.51c-.26.04-.53.06-.8.06-2.13 0-4.15-1.21-5.7-2.54-.76-.65-1.38-1.31-1.81-1.8-.08-.1-.16-.19-.23-.27.07-.08.14-.17.23-.27.42-.48 1.02-1.12 1.76-1.75L4.98 8.7Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Lm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M15.2 12c0 1.77-1.43 3.2-3.2 3.2S8.8 13.77 8.8 12s1.43-3.2 3.2-3.2 3.2 1.43 3.2 3.2Zm6.8 0s-.52.71-.58.79c-.13.16-.31.39-.55.66-.47.54-1.15 1.26-2 1.98-1.66 1.42-4.09 2.97-6.87 2.97s-5.21-1.54-6.87-2.97a18.75 18.75 0 0 1-2-1.98c-.24-.27-.42-.5-.55-.66-.06-.08-.11-.14-.15-.19-.02-.02-.44-.6-.44-.6s.42-.58.44-.6c.03-.05.08-.11.15-.19.13-.16.31-.39.55-.66.47-.54 1.15-1.26 2-1.98C6.79 7.15 9.22 5.6 12 5.6s5.21 1.54 6.87 2.97c.85.72 1.53 1.44 2 1.98.24.27.42.5.55.66.06.08.11.14.15.19.02.02.44.6.44.6Zm-2.26 0c-.07-.08-.14-.17-.23-.27-.43-.49-1.05-1.15-1.81-1.8C16.15 8.6 14.13 7.4 12 7.4S7.85 8.61 6.3 9.93c-.76.65-1.38 1.31-1.81 1.8-.08.1-.16.19-.23.27.07.08.14.17.23.27.43.49 1.05 1.15 1.81 1.8C7.85 15.4 9.87 16.6 12 16.6s4.15-1.21 5.7-2.53c.76-.65 1.38-1.31 1.81-1.8.08-.1.16-.19.23-.27Z",
        fill: "currentColor",
      })
    ),
  Vm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M11.98 4.9C8.07 4.9 4.9 8.08 4.9 12s3.17 7.1 7.08 7.1 7.08-3.18 7.08-7.1h1.8c0 4.92-3.98 8.9-8.88 8.9S3.1 16.92 3.1 12s3.98-8.9 8.88-8.9c2.45 0 4.67 1 6.28 2.61.23.23.53.55.85.89V4.88h1.8v4.9h-4.89v-1.8h1.92c-.35-.39-.7-.76-.94-1a7.025 7.025 0 0 0-5.01-2.08Zm-1.12 2.46h1.8v4.4l3.09 3.1-1.27 1.27-3.62-3.63V7.36Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Tm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M12.18 5.32c.96-.97 2.29-1.52 3.65-1.52s2.69.56 3.65 1.52c.96.97 1.51 2.31 1.51 3.67s-.55 2.7-1.51 3.67l-7.49 7.54-7.49-7.54c-.97-.97-1.51-2.29-1.51-3.67s.54-2.7 1.51-3.67c.97-.97 2.28-1.52 3.65-1.52s2.68.55 3.65 1.52l.18.18.18-.18Zm3.65.28c-.88 0-1.75.36-2.38.99l-1.46 1.47-1.46-1.47c-.63-.64-1.49-.99-2.38-.99s-1.75.36-2.38.99c-.63.64-.99 1.5-.99 2.4s.36 1.76.99 2.4l6.21 6.25 6.21-6.25c.62-.63.99-1.51.99-2.4s-.36-1.77-.99-2.4c-.62-.63-1.5-.99-2.38-.99Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Pm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M15.84 3.8c-.68 0-1.35.13-1.98.4-.63.26-1.2.64-1.68 1.13l-.18.18-.18-.18c-.97-.97-2.28-1.52-3.65-1.52s-2.68.55-3.65 1.52C3.55 6.3 3.01 7.62 3.01 9s.54 2.7 1.51 3.67l7.49 7.54 7.49-7.54A5.154 5.154 0 0 0 21.01 9a5.154 5.154 0 0 0-1.51-3.67c-.48-.48-1.05-.87-1.67-1.13-.63-.26-1.3-.4-1.98-.4Z",
        fill: "currentColor",
      })
    ),
  Hm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "m12 3.3 2.8 5.72 6.21.92-4.51 4.48 1.08 6.28-5.57-3.02-5.58 3.02 1.09-6.28L3 9.94l6.24-.92L12 3.3Zm.01 4.12-1.57 3.25-3.6.53 2.61 2.59-.62 3.55L12 15.62l3.17 1.72-.61-3.55 2.61-2.59-3.58-.53L12 7.42Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Am = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M12 3.3 9.24 9.02 3 9.94l4.51 4.48-1.09 6.28L12 17.68l5.57 3.02-1.08-6.28L21 9.94l-6.21-.92-2.8-5.72Zm.01 4.12 1.59 3.25 3.58.53-2.61 2.59.61 3.55-3.17-1.72v-8.2Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Zm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M12 3.3 9.24 9.02 3 9.94l4.51 4.48-1.09 6.28L12 17.68l5.57 3.02-1.08-6.28L21 9.94l-6.21-.92-2.8-5.72Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  km = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M13.27 6.42H3.88V4.6l11.18.02v2.24h4.32l2.67 4.2v5.22h-1.52v.21c0 1.61-1.3 2.91-2.9 2.91s-2.9-1.3-2.9-2.91v-.21h-3.64v.21c0 1.61-1.3 2.91-2.9 2.91s-2.9-1.3-2.9-2.91v-.23H3.84v-1.81H6.1c.53-.54 1.26-.88 2.07-.88s1.56.34 2.09.89h2.95V6.42Zm2.28 8.05h-.49V8.66h3.33l1.86 2.92v2.89h-.52c-.53-.55-1.27-.89-2.09-.89s-1.56.34-2.09.89ZM6.72 9.62H1.95V7.81h4.77v1.81ZM6.1 12.8H2.92v-1.81H6.1v1.81Zm2.12 2.58c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1 1.1-.49 1.1-1.1-.49-1.1-1.1-1.1Zm9.42 0c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1 1.1-.49 1.1-1.1-.49-1.1-1.1-1.1Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Dm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M15.28 19.2H8.72v-1.8h6.56v1.8ZM8.3 16.87v-2.58c0-.12-.03-.24-.08-.35a.763.763 0 0 0-.22-.28c-.77-.6-1.4-1.39-1.83-2.26-.44-.88-.67-1.86-.67-2.84C5.48 5.03 8.33 2.08 11.84 2c1.37-.03 2.7.36 3.83 1.14 1.13.78 1.98 1.88 2.44 3.18.46 1.3.51 2.68.13 4.01a6.508 6.508 0 0 1-2.23 3.33.77.77 0 0 0-.23.28c-.05.11-.08.24-.08.36v2.59l-7.4-.02Zm1.79-1.77h3.8v-.8c0-.4.09-.79.27-1.15.17-.35.43-.66.74-.91.78-.61 1.34-1.45 1.61-2.41.28-.96.24-1.96-.09-2.91-.34-.94-.95-1.73-1.77-2.3-.82-.56-1.78-.86-2.77-.82-2.54.06-4.6 2.19-4.59 4.75 0 .71.17 1.42.48 2.06.31.64.77 1.2 1.32 1.64.31.24.56.55.73.91.17.35.26.75.26 1.14v.81h.01Zm-.39 4.59a2.3 2.3 0 0 0 4.6 0H9.7Z",
        fill: "currentColor",
      })
    ),
  Bm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M15.72 6.75c-.81 0-1.47.66-1.47 1.47s.66 1.47 1.47 1.47 1.47-.66 1.47-1.47-.66-1.47-1.47-1.47Zm-3.15.57a3.279 3.279 0 0 1 6.3 0H21v1.8h-2.13a3.279 3.279 0 0 1-6.3 0H3v-1.8h9.58ZM8.14 14.3c-.81 0-1.47.66-1.47 1.47s.66 1.47 1.47 1.47 1.47-.66 1.47-1.47-.66-1.47-1.47-1.47Zm-3.15.57a3.279 3.279 0 0 1 6.3 0H21v1.8h-9.71a3.279 3.279 0 0 1-6.3 0H3v-1.8h2Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Om = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M10.67 3.75c.51-.3 1.08-.37 1.65-.25h.02l.02.01c1.23.33 1.91 1.46 1.66 2.68l-.38 2.07h4.67a2.537 2.537 0 0 1 1.92.86c.24.27.42.6.52.95.1.35.13.72.07 1.08s-1.11 7.26-1.11 7.26a2.517 2.517 0 0 1-2.51 2.14c-4.68 0-9.36.02-14.05 0V9.88H7.5l2.08-4.8c.24-.55.59-1.02 1.09-1.32Zm-3.48 7.92H4.95v7.07h2.24v-7.07Zm1.8 7.07h8.22c.17 0 .34-.06.47-.17.13-.11.22-.27.24-.44l1.11-7.26c.02-.1 0-.21-.02-.3a.72.72 0 0 0-.4-.45.765.765 0 0 0-.3-.06h-6.85l.78-4.22c.06-.29-.05-.5-.34-.58a.44.44 0 0 0-.32.04c-.09.05-.23.18-.36.48l-2.24 5.18v7.78Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Nm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M19.05 5.25h-2.24v7.07h2.24V5.25Zm1.8-1.79v10.66H16.5l-2.08 4.8c-.24.55-.59 1.02-1.09 1.32-.51.3-1.08.37-1.65.25h-.02l-.02-.01c-1.23-.33-1.91-1.46-1.66-2.68l.38-2.07H5.69a2.537 2.537 0 0 1-1.92-.86c-.24-.27-.42-.6-.52-.95-.1-.35-.13-.72-.07-1.08l1.11-7.26A2.517 2.517 0 0 1 6.8 3.44c4.68 0 9.36-.02 14.05 0Zm-5.84 9.58V5.26H6.79c-.17 0-.34.06-.47.17-.13.11-.22.27-.24.44l-1.11 7.26c-.02.1 0 .21.02.3a.72.72 0 0 0 .4.45c.09.04.2.06.3.06h6.85l-.78 4.22c-.06.29.05.5.34.58.15.03.25 0 .32-.04.09-.05.23-.18.36-.48l2.24-5.18Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  $m = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M10.01 4.8c-2.86 0-5.19 2.33-5.19 5.21s2.33 5.21 5.19 5.21c1.3 0 2.48-.48 3.4-1.27l.58-.59c.76-.91 1.22-2.07 1.22-3.35 0-2.89-2.33-5.21-5.19-5.21Zm5.5 9.57c.95-1.2 1.51-2.71 1.51-4.35 0-3.87-3.13-7.02-7.01-7.02S3 6.15 3 10.02s3.13 7.02 7.01 7.02c1.58 0 3.03-.52 4.2-1.4l5.52 5.37L21 19.72l-5.5-5.34Zm-6.4-5.25V6.73h1.81v2.39h2.38v1.8h-2.38v2.39H9.11v-2.39H6.73v-1.8h2.38Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  zm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M10.01 4.8c-2.86 0-5.19 2.33-5.19 5.21s2.33 5.21 5.19 5.21c1.3 0 2.48-.48 3.4-1.27l.58-.59c.76-.91 1.22-2.07 1.22-3.35 0-2.89-2.33-5.21-5.19-5.21Zm5.5 9.57c.95-1.2 1.51-2.71 1.51-4.35 0-3.87-3.13-7.02-7.01-7.02S3 6.15 3 10.02s3.13 7.02 7.01 7.02c1.58 0 3.03-.52 4.2-1.4l5.52 5.37L21 19.72l-5.5-5.34Zm-8.78-3.45v-1.8h6.57v1.8H6.72Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Fm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M12 5.11c-1.93 0-3.49 1.57-3.49 3.51s1.56 3.51 3.49 3.51 3.49-1.57 3.49-3.51S13.93 5.11 12 5.11ZM6.72 8.62C6.72 5.68 9.08 3.3 12 3.3s5.28 2.38 5.28 5.32-2.36 5.32-5.28 5.32-5.28-2.38-5.28-5.32ZM4.21 20.7l-.78-.45q-.78-.44-.78-.45v-.02c0-.01.02-.03.03-.05.02-.04.06-.1.11-.16.09-.14.22-.32.4-.54.36-.44.9-1.02 1.64-1.6 1.51-1.16 3.84-2.29 7.15-2.29s5.65 1.13 7.15 2.29a9.65 9.65 0 0 1 1.64 1.6c.18.22.31.41.4.54.05.07.08.12.11.16.01.02.02.04.03.05v.02h.01l-.78.45q-.78.44-.78.45v-.02s-.05-.06-.08-.1c-.06-.09-.16-.24-.3-.41-.28-.35-.72-.82-1.34-1.3-1.23-.95-3.18-1.92-6.06-1.92s-4.84.97-6.06 1.92c-.62.48-1.06.95-1.34 1.3-.14.17-.24.32-.3.41-.03.05-.05.08-.07.1v.02H4.2Zm15.58 0Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  jm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      { viewBox: "0 0 24 24", focusable: "false", ...e },
      /* @__PURE__ */ l.createElement("path", {
        d: "M11.89 2.9 22 21.1H2l9.89-18.2Zm.02 3.73L5.03 19.29h13.92L11.9 6.63Zm-.8 8.88V9.9h1.8v5.61h-1.8Zm0 2.25c0-.5.4-.9.9-.9s.9.4.9.9-.4.9-.9.9-.9-.4-.9-.9Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  qm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M12.47 18.95c1.59-1.87 2.55-4.3 2.55-6.95s-.96-5.08-2.55-6.95l-1.45 1.07c1.37 1.57 2.2 3.63 2.2 5.88s-.83 4.31-2.2 5.88l1.45 1.07Zm1.32.98c1.79-2.15 2.86-4.91 2.86-7.93s-1.08-5.78-2.86-7.93L15.24 3c2.01 2.45 3.21 5.58 3.21 9s-1.21 6.55-3.21 9l-1.45-1.07ZM9.7 16.9c1.18-1.29 1.89-3.01 1.89-4.9s-.72-3.61-1.89-4.9L8.24 8.18c.96.99 1.55 2.33 1.55 3.82s-.59 2.84-1.55 3.82L9.7 16.9Zm-2.65-1.96c.79-.73 1.28-1.78 1.28-2.94s-.49-2.21-1.28-2.94l-1.5 1.11c.59.39.98 1.07.98 1.83s-.39 1.44-.98 1.84l1.5 1.11Z",
        fill: "currentColor",
      })
    ),
  Im = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M16.8 4.82c-1.34-1.26-3.13-1.87-4.78-1.87s-3.44.61-4.79 1.86C5.86 6.08 5 7.98 5.17 10.44c.17 2.48 1.77 5.03 3.19 6.87.73.94 1.44 1.73 1.97 2.29.27.28 1.5 1.46 1.5 1.46s1.27-1.16 1.55-1.45c.56-.56 1.31-1.36 2.07-2.3 1.49-1.83 3.17-4.39 3.37-6.86.19-2.45-.66-4.35-2.02-5.62Zm.23 5.48c-.15 1.88-1.5 4.06-2.97 5.87-.71.88-1.42 1.63-1.95 2.16l-.25.25c-.07-.07-.14-.15-.22-.23-.5-.53-1.17-1.28-1.85-2.15-1.39-1.8-2.68-3.98-2.82-5.89-.13-1.93.53-3.3 1.49-4.19.98-.91 2.32-1.37 3.56-1.37s2.57.47 3.55 1.38c.95.89 1.61 2.26 1.46 4.17Z",
        fill: "currentColor",
      }),
      /* @__PURE__ */ l.createElement("path", {
        d: "M12 6.77c-1.54 0-2.81 1.23-2.81 2.78s1.27 2.78 2.81 2.78 2.81-1.24 2.81-2.78S13.54 6.77 12 6.77Zm0 3.76c-.57 0-1.01-.45-1.01-.98s.44-.98 1.01-.98 1.01.45 1.01.98-.44.98-1.01.98Z",
        fill: "currentColor",
      })
    ),
  Wm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        focusable: "false",
        viewBox: "0 0 48 48",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        fill: "currentColor",
        d: "M34.92 9.74V5.6h-3.6v4.14H16.66V5.6h-3.6v4.14H5.7V42.4h24.8c6.52 0 11.8-5.28 11.8-11.8V9.74h-7.38zM38.7 30.6c0 4.52-3.68 8.2-8.2 8.2H9.3V19.5h29.4v11.1zm0-14.7H9.3v-2.56h29.4v2.56zm-24.6 6.8h8.08v2.6H14.1v-2.6zm20 0v2.6h-8.08v-2.6h8.08zm-8.08 4.78h8.08v2.6h-8.08v-2.6zm-11.92 0h7.96v2.6H14.1v-2.6zm0 4.8h7.94l-.02 2.62H14.1v-2.62z",
      })
    ),
  Um = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 48 48",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M24 7.6C14.94 7.6 7.6 14.94 7.6 24c0 9.06 7.34 16.4 16.4 16.4 9.06 0 16.4-7.34 16.4-16.4 0-9.06-7.34-16.4-16.4-16.4zM4 24C4 12.96 12.96 4 24 4s20 8.96 20 20-8.96 20-20 20S4 35.04 4 24zm29.8 1.8H14.2v-3.6h19.6v3.6z",
        clipRule: "evenodd",
      })
    ),
  Gm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 48 48",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M30.48 9.45H17.52v-3.4h12.96v3.4zM24 14.43c-6.68 0-12.1 5.4-12.1 12.06S17.32 38.55 24 38.55s12.1-5.4 12.1-12.06S30.68 14.43 24 14.43zM8.5 26.49c0-8.54 6.94-15.46 15.5-15.46 8.56 0 15.5 6.92 15.5 15.46 0 8.54-6.94 15.46-15.5 15.46-8.56 0-15.5-6.92-15.5-15.46zm17.2-8.48v7.8l5.46 5.44-2.4 2.4-6.46-6.44v-9.22h3.4v.02z",
        clipRule: "evenodd",
      })
    ),
  Km = (e) =>
    /* @__PURE__ */ React.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 48 48",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ React.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M4.3 9h39.4v22.2c0 4.3-3.5 7.8-7.8 7.8H4.3v-1.8h1.8-1.8V9zm3.6 26.4h28a4.2 4.2 0 004.2-4.2V14.9L24 29.66 7.9 14.9v20.5zm2.82-22.8h26.54L24 24.76 10.74 12.6h-.02z",
        clipRule: "evenodd",
      })
    ),
  Ym = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        d: "M12.41 2.29 11.94 2l-.47.29-3.72 2.3-3.72 2.3-.43.26v9.9l.44.26 7.44 4.42.46.27.46-.27 7.56-4.42.44-.26V7.14l-.43-.26-7.56-4.59ZM9.95 5.34l2-1.23 5.79 3.52-2.01 1.16-5.78-3.45Zm6.67 5.01 1.98-1.14v6.83l-5.76 3.37v-6.87l1.98-1.14v3.13l1.8-.99v-3.17Zm-5.58 2.18v6.87L5.4 16.05V9.23l5.64 3.31Zm.9-1.55L6.23 7.64l1.99-1.23 5.72 3.42-2 1.16Z",
        fill: "currentColor",
        fillRule: "evenodd",
      })
    ),
  Xm = (e) =>
    /* @__PURE__ */ l.createElement(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 48 48",
        focusable: "false",
        ...e,
      },
      /* @__PURE__ */ l.createElement("path", {
        fill: "currentColor",
        fillRule: "evenodd",
        d: "M22.04 30.54c0-1.1.9-2 2-2h.02c1.1 0 2 .9 2 2s-.9 2-2 2h-.02c-1.1 0-2-.9-2-2zM40.7 18.36V35c0 4.3-3.48 7.78-7.78 7.78H7.3V18.34h5.96v-2.38c0-5.94 4.84-10.8 10.78-10.8 5.94 0 10.78 4.84 10.78 10.8v2.38h5.88v.02zm-23.84 0h14.36v-2.38c0-3.96-3.24-7.2-7.18-7.2-3.94 0-7.18 3.24-7.18 7.2v2.38z",
        clipRule: "evenodd",
      })
    );
export {
  Sa as Advisor,
  $d as AdvisorDropdown,
  Nd as AdvisorDropdownMenuItem,
  Fd as AdvisorUnassigned,
  jm as Alert,
  Dh as AlertLight,
  Wd as Amsys,
  Ih as ArrowDown,
  Tf as ArrowDownLight,
  qh as ArrowLeft,
  Vf as ArrowLeftLight,
  Wh as ArrowRight,
  Pf as ArrowRightLight,
  Uh as ArrowUp,
  Hf as ArrowUpLight,
  Id as Bimby,
  wm as Bluetooth,
  ch as BluetoothLight,
  Od as BottomSheet,
  v3 as Button,
  kd as ButtonGroup,
  Wm as Calendar,
  Lf as CalendarLight,
  I7 as CaretDown,
  Zf as CaretDownLight,
  F0 as CaretLeft,
  Af as CaretLeftLight,
  j0 as CaretRight,
  kf as CaretRightLight,
  Gh as CaretUp,
  Df as CaretUpLight,
  om as Check,
  lm as CheckCircle,
  Xf as CheckCircleLight,
  Uf as CheckLight,
  fm as Clock,
  rh as ClockLight,
  $n as Close,
  um as CloseCircle,
  eh as CloseCircleLight,
  Kf as CloseLight,
  vf as ContentBlock,
  gm as Delete,
  lh as DeleteLight,
  km as Delivery,
  _h as DeliveryLight,
  ym as DisplaySettings,
  uh as DisplaySettingsLight,
  rm as Download,
  If as DownloadLight,
  N3 as DropdownItem,
  Cm as Edit,
  dh as EditLight,
  vm as EditPen,
  ih as EditPenLight,
  hm as Explore,
  mm as ExploreLight,
  gf as EyeCatcher,
  ff as Facebook,
  Tm as Favorite,
  Pm as FavoriteFilled,
  Eh as FavoriteFilledLight,
  bh as FavoriteLight,
  Bm as Filter,
  Mh as FilterLight,
  jd as Folletto,
  ef as FooterLinks,
  Qd as FooterSection,
  tf as FooterSmallLinks,
  df as FooterSocialLinkBlock,
  uf as FooterSocialLinks,
  bf as FunctionsTab,
  sf as Germany,
  hf as GridContainer,
  mf as GridItem,
  Zd as Header,
  qr as HeaderButton,
  Xd as Headline,
  Yd as Hero,
  Nh as Home,
  Ef as HomeLight,
  dm as Info,
  th as InfoLight,
  of as Instagram,
  ei as InteractiveIcon,
  qd as Kobold,
  M9 as Language,
  nh as LanguageLight,
  rf as LanguageSelector,
  Dm as Lightbulb,
  Lh as LightbulbLight,
  Im as Location,
  Oh as LocationLight,
  zh as LockClosed,
  Xm as LockClosedFilled,
  Rf as LockClosedLight,
  Fh as LockOpen,
  _f as LockOpenLight,
  Km as Mail,
  Vh as MailLight,
  wf as MediaContainer,
  vc as Menu,
  Sf as MenuLight,
  im as Minus,
  Um as MinusCircle,
  Qf as MinusCircleLight,
  Yf as MinusLight,
  $h as More,
  xf as MoreLight,
  Ad as NavItem,
  nf as NewsletterSubscription,
  qm as Nfc,
  Bh as NfcLight,
  Ym as Package,
  Th as PackageLight,
  af as Pinterest,
  am as Plus,
  cm as PlusCircle,
  Jf as PlusCircleLight,
  Gf as PlusLight,
  yf as Price,
  Jd as ProductStripe,
  pm as Question,
  oh as QuestionLight,
  Gd as RecipePlatform,
  Sm as Redo,
  ph as RedoLight,
  Rm as Repeat,
  vh as RepeatLight,
  bm as Replay1,
  fh as Replay1Light,
  Em as Replay2,
  hh as Replay2Light,
  cf as Rezeptwelt,
  zn as Search,
  g3 as SearchField,
  q3 as SearchFlyout,
  ah as SearchLight,
  j3 as SearchSuggestions,
  zd as SectionSeparator,
  pf as Shadow,
  jh as ShoppingCart,
  Mf as ShoppingCartLight,
  Vm as SoftwareUpdate,
  Ch as SoftwareUpdateLight,
  _m as Sort,
  gh as SortLight,
  Hm as StarEmpty,
  xh as StarEmptyLight,
  Zm as StarFull,
  Rh as StarFullLight,
  Am as StarHalfBorder,
  Sh as StarHalfBorderLight,
  Cf as StickyProductBar,
  B3 as TagCloud,
  Fn as Theme,
  Ud as Thermomix,
  Nm as ThumbDown,
  Hh as ThumbDownLight,
  Om as ThumbUp,
  Ph as ThumbUpLight,
  Gm as Timer,
  sh as TimerLight,
  ue as Typography,
  xm as Undo,
  mh as UndoLight,
  sm as Upload,
  Wf as UploadLight,
  Fm as User,
  kh as UserLight,
  Mm as VisibilityOff,
  wh as VisibilityOffLight,
  Lm as VisibilityOn,
  yh as VisibilityOnLight,
  Kd as Vorwerk,
  Kh as Wifi1,
  zf as Wifi1Light,
  em as Wifi2,
  Ff as Wifi2Light,
  tm as Wifi3,
  jf as Wifi3Light,
  nm as Wifi4,
  qf as Wifi4Light,
  Yh as WifiLock1,
  Bf as WifiLock1Light,
  Xh as WifiLock2,
  Of as WifiLock2Light,
  Jh as WifiLock3,
  Nf as WifiLock3Light,
  Qh as WifiLock4,
  $f as WifiLock4Light,
  lf as Youtube,
  $m as ZoomIn,
  Ah as ZoomInLight,
  zm as ZoomOut,
  Zh as ZoomOutLight,
};
