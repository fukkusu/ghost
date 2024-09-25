import { u as se, a as oe, c as u, j as e, $ as z, H as ae, b as ne, d as le, e as ie, f as ce, g as E, h as de, i as ue, k as C, l as f, P as S, m as P, S as ge, N as v, n as $, M as N, o as R, A as M, p as xe, s as fe, L as B, B as q, q as A, r as T } from "./index-d646c7a1.mjs";
const me = ({
  type: s = "text",
  inputRef: a,
  title: t,
  hideTitle: r,
  value: n,
  error: o,
  placeholder: i,
  rightPlaceholder: l,
  hint: c,
  onChange: d,
  onFocus: m,
  onBlur: g,
  clearBg: p = !1,
  className: w = "",
  maxLength: b,
  containerClassName: x = "",
  hintClassName: y = "",
  unstyled: h = !1,
  disabled: j,
  ...X
}) => {
  const F = se(), { setFocusState: I } = oe(), Y = (L) => {
    m == null || m(L), I(!0);
  }, Z = (L) => {
    g == null || g(L), I(!1);
  }, D = u(
    "relative order-2 flex w-full items-center",
    t && !r && "mt-1.5"
  ), _ = !h && u(
    "absolute inset-0 rounded-lg border text-grey-300 transition-colors peer-hover:bg-grey-100 peer-focus:border-green peer-focus:bg-white peer-focus:shadow-[0_0_0_2px_rgba(48,207,67,.25)] dark:peer-hover:bg-grey-925 dark:peer-focus:bg-grey-950",
    o ? "border-red bg-white dark:bg-grey-925" : "border-transparent bg-grey-150 dark:bg-grey-900",
    j && "bg-grey-50 peer-hover:bg-grey-50 dark:bg-grey-950 dark:peer-hover:bg-grey-950"
  ), ee = !h && u(
    "peer z-[1] order-2 h-9 w-full bg-transparent px-3 py-1.5 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-[38px] md:py-2 md:text-md",
    j ? "cursor-not-allowed text-grey-600 opacity-60 dark:text-grey-800" : "dark:text-white",
    l ? "w-0 grow rounded-l-lg" : "rounded-lg",
    w
  ), te = !h && u(
    "z-[1] order-3 rounded-r-lg",
    l ? typeof l == "string" ? "flex h-8 items-center py-1 pr-3 text-right text-sm text-grey-500 md:h-9 md:text-base" : "h-9 pr-1" : "pr-2"
  );
  let k = /* @__PURE__ */ e.jsx(e.Fragment, {});
  const re = /* @__PURE__ */ e.jsx(
    "input",
    {
      ref: a,
      className: ee || w,
      disabled: j,
      id: F,
      maxLength: b,
      placeholder: i,
      type: s,
      value: n,
      onBlur: Z,
      onChange: d,
      onFocus: Y,
      ...X
    }
  );
  return k = /* @__PURE__ */ e.jsx(le, { name: F, asChild: !0, children: /* @__PURE__ */ e.jsxs("div", { className: D, children: [
    /* @__PURE__ */ e.jsx(ie, { asChild: !0, children: re }),
    !h && !p && /* @__PURE__ */ e.jsx("div", { className: _ || "" }),
    l && /* @__PURE__ */ e.jsx("span", { className: te || "", children: l })
  ] }) }), y = u(
    "order-3",
    y
  ), x = u(
    "flex flex-col",
    x
  ), t || c ? /* @__PURE__ */ e.jsx(z, { asChild: !0, children: /* @__PURE__ */ e.jsxs("div", { className: x, children: [
    k,
    t && /* @__PURE__ */ e.jsx(ae, { className: r ? "sr-only" : "order-1", htmlFor: F, useLabelTag: !0, children: t }),
    c && /* @__PURE__ */ e.jsx(ne, { className: y, color: o ? "red" : "default", children: c })
  ] }) }) : /* @__PURE__ */ e.jsx(z, { asChild: !0, children: k });
};
function pe(s) {
  const a = ce(s);
  return E(() => {
    a.current = s;
  }), de(() => (...t) => {
    var r;
    return (r = a.current) == null ? void 0 : r.call(a, ...t);
  }, []);
}
var U = "Avatar", [we, Me] = ue(U), [he, V] = we(U), H = C(
  (s, a) => {
    const { __scopeAvatar: t, ...r } = s, [n, o] = f("idle");
    return /* @__PURE__ */ e.jsx(
      he,
      {
        scope: t,
        imageLoadingStatus: n,
        onImageLoadingStatusChange: o,
        children: /* @__PURE__ */ e.jsx(S.span, { ...r, ref: a })
      }
    );
  }
);
H.displayName = U;
var K = "AvatarImage", G = C(
  (s, a) => {
    const { __scopeAvatar: t, src: r, onLoadingStatusChange: n = () => {
    }, ...o } = s, i = V(K, t), l = ve(r), c = pe((d) => {
      n(d), i.onImageLoadingStatusChange(d);
    });
    return P(() => {
      l !== "idle" && c(l);
    }, [l, c]), l === "loaded" ? /* @__PURE__ */ e.jsx(S.img, { ...o, ref: a, src: r }) : null;
  }
);
G.displayName = K;
var O = "AvatarFallback", Q = C(
  (s, a) => {
    const { __scopeAvatar: t, delayMs: r, ...n } = s, o = V(O, t), [i, l] = f(r === void 0);
    return E(() => {
      if (r !== void 0) {
        const c = window.setTimeout(() => l(!0), r);
        return () => window.clearTimeout(c);
      }
    }, [r]), i && o.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ e.jsx(S.span, { ...n, ref: a }) : null;
  }
);
Q.displayName = O;
function ve(s) {
  const [a, t] = f("idle");
  return P(() => {
    if (!s) {
      t("error");
      return;
    }
    let r = !0;
    const n = new window.Image(), o = (i) => () => {
      r && t(i);
    };
    return t("loading"), n.onload = o("loaded"), n.onerror = o("error"), n.src = s, () => {
      r = !1;
    };
  }, [s]), a;
}
var be = H, ye = G, je = Q;
const J = ({ image: s, label: a, labelColor: t, bgColor: r, size: n, className: o }) => {
  let i = "", l = " -mb-2 ";
  switch (n) {
    case "sm":
      i = " w-7 h-7 text-sm ";
      break;
    case "lg":
      i = " w-12 h-12 text-xl ";
      break;
    case "xl":
      i = " w-16 h-16 text-2xl ", l = " -mb-3 ";
      break;
    case "2xl":
      i = " w-20 h-20 text-2xl ", l = " -mb-3 ";
      break;
    default:
      i = " w-10 h-10 text-md ";
      break;
  }
  return /* @__PURE__ */ e.jsxs(be, { className: `relative inline-flex select-none items-center justify-center overflow-hidden rounded-full align-middle ${i}`, children: [
    s ? /* @__PURE__ */ e.jsx(ye, { className: `absolute z-20 h-full w-full object-cover ${o && o}`, src: s }) : /* @__PURE__ */ e.jsx("span", { className: `${t && `text-${t}`} relative z-10 inline-flex h-full w-full items-center justify-center p-2 font-semibold ${o && o}`, style: r ? { backgroundColor: r } : {}, children: a }),
    /* @__PURE__ */ e.jsx(je, { asChild: !0, children: /* @__PURE__ */ e.jsx(ge, { className: `${l} absolute z-0 h-full w-full text-grey-300` }) })
  ] });
}, W = ({
  id: s,
  title: a,
  detail: t,
  action: r,
  hideActions: n,
  avatar: o,
  className: i,
  testId: l,
  separator: c = !0,
  bgOnHover: d = !0,
  paddingRight: m = !0,
  onClick: g,
  children: p
}) => {
  const w = (x) => {
    g == null || g(x);
  }, b = u(
    "group/list-item flex items-center justify-between",
    d && "hover:bg-gradient-to-r hover:from-white hover:to-grey-50 dark:hover:from-black dark:hover:to-grey-950",
    c ? "border-b border-grey-100 last-of-type:border-b-transparent hover:border-grey-200 dark:border-grey-900 dark:hover:border-grey-800" : "border-y border-transparent hover:border-grey-200 first-of-type:hover:border-t-transparent dark:hover:border-grey-800",
    i
  );
  return /* @__PURE__ */ e.jsxs("div", { className: b, "data-testid": l, children: [
    p || /* @__PURE__ */ e.jsxs("div", { className: `flex grow items-center gap-3 ${g && "cursor-pointer"}`, onClick: w, children: [
      o && o,
      /* @__PURE__ */ e.jsxs("div", { className: "flex grow flex-col py-3 pr-6", id: s, children: [
        /* @__PURE__ */ e.jsx("span", { children: a }),
        t && /* @__PURE__ */ e.jsx("span", { className: "text-xs text-grey-700", children: t })
      ] })
    ] }),
    r && /* @__PURE__ */ e.jsx("div", { className: `visible py-3 md:pl-6 ${m && "md:pr-6"} ${n ? "group-hover/list-item:visible md:invisible" : ""}`, children: r })
  ] });
};
function Fe(s, a, t) {
  var l;
  const n = (l = R().data) == null ? void 0 : l.site, o = (n == null ? void 0 : n.url) ?? window.location.origin, i = new M(
    new URL(o),
    new URL("/ghost/api/admin/identities/", window.location.origin),
    s
  );
  return xe({
    async mutationFn(c) {
      return i.follow(c);
    },
    onSuccess: a,
    onError: t
  });
}
const ke = v.create(() => {
  const { updateRoute: s } = $(), a = v.useModal(), [t, r] = f(""), [n, o] = f(null);
  async function i() {
    fe({
      message: "Site followed",
      type: "success"
    }), a.remove(), s("");
  }
  async function l() {
    o(n);
  }
  const c = Fe("index", i, l);
  return /* @__PURE__ */ e.jsx(
    N,
    {
      afterClose: () => {
        c.reset(), s("");
      },
      cancelLabel: "Cancel",
      okLabel: "Follow",
      size: "sm",
      title: "Follow a Ghost site",
      onOk: () => c.mutate(t),
      children: /* @__PURE__ */ e.jsx("div", { className: "mt-3 flex flex-col gap-4", children: /* @__PURE__ */ e.jsx(
        me,
        {
          autoFocus: !0,
          error: !!n,
          hint: n,
          placeholder: "@username@hostname",
          title: "Profile name",
          value: t,
          "data-test-new-follower": !0,
          onChange: (d) => r(d.target.value)
        }
      ) })
    }
  );
});
function Le(s) {
  var o;
  const t = (o = R().data) == null ? void 0 : o.site, r = (t == null ? void 0 : t.url) ?? window.location.origin, n = new M(
    new URL(r),
    new URL("/ghost/api/admin/identities/", window.location.origin),
    s
  );
  return T({
    queryKey: [`followers:${s}`],
    async queryFn() {
      const i = await n.getFollowers();
      return await Promise.all(i.map((c) => n.getActor(c)));
    }
  });
}
const Ae = ({}) => {
  const { updateRoute: s } = $(), { data: a = [], isLoading: t } = Le("index");
  return /* @__PURE__ */ e.jsx(
    N,
    {
      afterClose: () => {
        s("profile");
      },
      cancelLabel: "",
      footer: !1,
      okLabel: "",
      size: "md",
      title: "Followers",
      topRightContent: "close",
      children: /* @__PURE__ */ e.jsx("div", { className: "mt-3 flex flex-col gap-4 pb-12", children: t ? /* @__PURE__ */ e.jsx("p", { children: "Loading followers..." }) : /* @__PURE__ */ e.jsx(B, { children: a.map((r) => /* @__PURE__ */ e.jsx(
        W,
        {
          action: /* @__PURE__ */ e.jsx(q, { color: "grey", label: "Remove", link: !0 }),
          avatar: /* @__PURE__ */ e.jsx(J, { image: r.icon, size: "sm" }),
          detail: A(r),
          id: "list-item",
          title: r.name || A(r)
        },
        r.id
      )) }) })
    }
  );
}, Ce = v.create(Ae);
function Se(s) {
  var o;
  const t = (o = R().data) == null ? void 0 : o.site, r = (t == null ? void 0 : t.url) ?? window.location.origin, n = new M(
    new URL(r),
    new URL("/ghost/api/admin/identities/", window.location.origin),
    s
  );
  return T({
    queryKey: [`following:${s}`],
    async queryFn() {
      return n.getFollowing();
    }
  });
}
const $e = ({}) => {
  const { updateRoute: s } = $(), { data: a = [] } = Se("index");
  return /* @__PURE__ */ e.jsx(
    N,
    {
      afterClose: () => {
        s("profile");
      },
      cancelLabel: "",
      footer: !1,
      okLabel: "",
      size: "md",
      title: "Following",
      topRightContent: "close",
      children: /* @__PURE__ */ e.jsx("div", { className: "mt-3 flex flex-col gap-4 pb-12", children: /* @__PURE__ */ e.jsx(B, { children: a.map((t) => /* @__PURE__ */ e.jsx(
        W,
        {
          action: /* @__PURE__ */ e.jsx(q, { color: "grey", label: "Unfollow", link: !0 }),
          avatar: /* @__PURE__ */ e.jsx(J, { image: t.icon, size: "sm" }),
          detail: A(t),
          id: "list-item",
          title: t.name
        },
        t.id
      )) }) })
    }
  );
}, Ne = v.create($e), Ue = { FollowSite: ke, ViewFollowing: Ne, ViewFollowers: Ce };
export {
  Ue as default
};
//# sourceMappingURL=modals-a8aeb643.mjs.map
