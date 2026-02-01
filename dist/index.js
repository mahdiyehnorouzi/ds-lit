import { unsafeCSS as ut, css as ft, LitElement as W, html as $ } from "lit";
const q = (r) => (t, e) => {
  e !== void 0 ? e.addInitializer(() => {
    customElements.define(r, t);
  }) : customElements.define(r, t);
};
const j = globalThis, V = j.ShadowRoot && (j.ShadyCSS === void 0 || j.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, lt = /* @__PURE__ */ Symbol(), Q = /* @__PURE__ */ new WeakMap();
let gt = class {
  constructor(t, e, i) {
    if (this._$cssResult$ = !0, i !== lt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (V && t === void 0) {
      const i = e !== void 0 && e.length === 1;
      i && (t = Q.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && Q.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const bt = (r) => new gt(typeof r == "string" ? r : r + "", void 0, lt), mt = (r, t) => {
  if (V) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const i = document.createElement("style"), o = j.litNonce;
    o !== void 0 && i.setAttribute("nonce", o), i.textContent = e.cssText, r.appendChild(i);
  }
}, X = V ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const i of t.cssRules) e += i.cssText;
  return bt(e);
})(r) : r;
const { is: vt, defineProperty: wt, getOwnPropertyDescriptor: yt, getOwnPropertyNames: $t, getOwnPropertySymbols: xt, getPrototypeOf: _t } = Object, R = globalThis, Y = R.trustedTypes, At = Y ? Y.emptyScript : "", kt = R.reactiveElementPolyfillSupport, z = (r, t) => r, N = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? At : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, t) {
  let e = r;
  switch (t) {
    case Boolean:
      e = r !== null;
      break;
    case Number:
      e = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(r);
      } catch {
        e = null;
      }
  }
  return e;
} }, K = (r, t) => !vt(r, t), tt = { attribute: !0, type: String, converter: N, reflect: !1, useDefault: !1, hasChanged: K };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), R.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let S = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = tt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const i = /* @__PURE__ */ Symbol(), o = this.getPropertyDescriptor(t, i, e);
      o !== void 0 && wt(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    const { get: o, set: s } = yt(this.prototype, t) ?? { get() {
      return this[e];
    }, set(n) {
      this[e] = n;
    } };
    return { get: o, set(n) {
      const l = o?.call(this);
      s?.call(this, n), this.requestUpdate(t, l, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? tt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(z("elementProperties"))) return;
    const t = _t(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(z("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(z("properties"))) {
      const e = this.properties, i = [...$t(e), ...xt(e)];
      for (const o of i) this.createProperty(o, e[o]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [i, o] of e) this.elementProperties.set(i, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, i] of this.elementProperties) {
      const o = this._$Eu(e, i);
      o !== void 0 && this._$Eh.set(o, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const o of i) e.unshift(X(o));
    } else t !== void 0 && e.push(X(t));
    return e;
  }
  static _$Eu(t, e) {
    const i = e.attribute;
    return i === !1 ? void 0 : typeof i == "string" ? i : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t) => t(this));
  }
  addController(t) {
    (this._$EO ??= /* @__PURE__ */ new Set()).add(t), this.renderRoot !== void 0 && this.isConnected && t.hostConnected?.();
  }
  removeController(t) {
    this._$EO?.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const i of e.keys()) this.hasOwnProperty(i) && (t.set(i, this[i]), delete this[i]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return mt(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(!0), this._$EO?.forEach((t) => t.hostConnected?.());
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    this._$EO?.forEach((t) => t.hostDisconnected?.());
  }
  attributeChangedCallback(t, e, i) {
    this._$AK(t, i);
  }
  _$ET(t, e) {
    const i = this.constructor.elementProperties.get(t), o = this.constructor._$Eu(t, i);
    if (o !== void 0 && i.reflect === !0) {
      const s = (i.converter?.toAttribute !== void 0 ? i.converter : N).toAttribute(e, i.type);
      this._$Em = t, s == null ? this.removeAttribute(o) : this.setAttribute(o, s), this._$Em = null;
    }
  }
  _$AK(t, e) {
    const i = this.constructor, o = i._$Eh.get(t);
    if (o !== void 0 && this._$Em !== o) {
      const s = i.getPropertyOptions(o), n = typeof s.converter == "function" ? { fromAttribute: s.converter } : s.converter?.fromAttribute !== void 0 ? s.converter : N;
      this._$Em = o;
      const l = n.fromAttribute(e, s.type);
      this[o] = l ?? this._$Ej?.get(o) ?? l, this._$Em = null;
    }
  }
  requestUpdate(t, e, i, o = !1, s) {
    if (t !== void 0) {
      const n = this.constructor;
      if (o === !1 && (s = this[t]), i ??= n.getPropertyOptions(t), !((i.hasChanged ?? K)(s, e) || i.useDefault && i.reflect && s === this._$Ej?.get(t) && !this.hasAttribute(n._$Eu(t, i)))) return;
      this.C(t, e, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: i, reflect: o, wrapped: s }, n) {
    i && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, n ?? e ?? this[t]), s !== !0 || n !== void 0) || (this._$AL.has(t) || (this.hasUpdated || i || (e = void 0), this._$AL.set(t, e)), o === !0 && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
        for (const [o, s] of this._$Ep) this[o] = s;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [o, s] of i) {
        const { wrapped: n } = s, l = this[o];
        n !== !0 || this._$AL.has(o) || l === void 0 || this.C(o, void 0, s, l);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), this._$EO?.forEach((i) => i.hostUpdate?.()), this.update(e)) : this._$EM();
    } catch (i) {
      throw t = !1, this._$EM(), i;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    this._$EO?.forEach((e) => e.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq &&= this._$Eq.forEach((e) => this._$ET(e, this[e])), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
S.elementStyles = [], S.shadowRootOptions = { mode: "open" }, S[z("elementProperties")] = /* @__PURE__ */ new Map(), S[z("finalized")] = /* @__PURE__ */ new Map(), kt?.({ ReactiveElement: S }), (R.reactiveElementVersions ??= []).push("2.1.2");
const St = { attribute: !0, type: String, converter: N, reflect: !1, hasChanged: K }, Et = (r = St, t, e) => {
  const { kind: i, metadata: o } = e;
  let s = globalThis.litPropertyMetadata.get(o);
  if (s === void 0 && globalThis.litPropertyMetadata.set(o, s = /* @__PURE__ */ new Map()), i === "setter" && ((r = Object.create(r)).wrapped = !0), s.set(e.name, r), i === "accessor") {
    const { name: n } = e;
    return { set(l) {
      const a = t.get.call(this);
      t.set.call(this, l), this.requestUpdate(n, a, r, !0, l);
    }, init(l) {
      return l !== void 0 && this.C(n, void 0, r, l), l;
    } };
  }
  if (i === "setter") {
    const { name: n } = e;
    return function(l) {
      const a = this[n];
      t.call(this, l), this.requestUpdate(n, a, r, !0, l);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function u(r) {
  return (t, e) => typeof e == "object" ? Et(r, t, e) : ((i, o, s) => {
    const n = o.hasOwnProperty(s);
    return o.constructor.createProperty(s, i), n ? Object.getOwnPropertyDescriptor(o, s) : void 0;
  })(r, t, e);
}
const zt = (r, t, e) => (e.configurable = !0, e.enumerable = !0, Reflect.decorate && typeof t != "object" && Object.defineProperty(r, t, e), e);
function Ct(r, t) {
  return (e, i, o) => {
    const s = (n) => n.renderRoot?.querySelector(r) ?? null;
    return zt(e, i, { get() {
      return s(this);
    } });
  };
}
const Z = globalThis, et = (r) => r, T = Z.trustedTypes, it = T ? T.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, ct = "$lit$", v = `lit$${Math.random().toFixed(9).slice(2)}$`, ht = "?" + v, Pt = `<${ht}>`, x = document, H = () => x.createComment(""), C = (r) => r === null || typeof r != "object" && typeof r != "function", F = Array.isArray, Ot = (r) => F(r) || typeof r?.[Symbol.iterator] == "function", D = `[ 	
\f\r]`, E = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, ot = /-->/g, rt = />/g, w = RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), st = /'/g, nt = /"/g, dt = /^(?:script|style|textarea|title)$/i, P = /* @__PURE__ */ Symbol.for("lit-noChange"), d = /* @__PURE__ */ Symbol.for("lit-nothing"), at = /* @__PURE__ */ new WeakMap(), y = x.createTreeWalker(x, 129);
function pt(r, t) {
  if (!F(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return it !== void 0 ? it.createHTML(t) : t;
}
const Ut = (r, t) => {
  const e = r.length - 1, i = [];
  let o, s = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", n = E;
  for (let l = 0; l < e; l++) {
    const a = r[l];
    let h, p, c = -1, g = 0;
    for (; g < a.length && (n.lastIndex = g, p = n.exec(a), p !== null); ) g = n.lastIndex, n === E ? p[1] === "!--" ? n = ot : p[1] !== void 0 ? n = rt : p[2] !== void 0 ? (dt.test(p[2]) && (o = RegExp("</" + p[2], "g")), n = w) : p[3] !== void 0 && (n = w) : n === w ? p[0] === ">" ? (n = o ?? E, c = -1) : p[1] === void 0 ? c = -2 : (c = n.lastIndex - p[2].length, h = p[1], n = p[3] === void 0 ? w : p[3] === '"' ? nt : st) : n === nt || n === st ? n = w : n === ot || n === rt ? n = E : (n = w, o = void 0);
    const m = n === w && r[l + 1].startsWith("/>") ? " " : "";
    s += n === E ? a + Pt : c >= 0 ? (i.push(h), a.slice(0, c) + ct + a.slice(c) + v + m) : a + v + (c === -2 ? l : m);
  }
  return [pt(r, s + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), i];
};
class O {
  constructor({ strings: t, _$litType$: e }, i) {
    let o;
    this.parts = [];
    let s = 0, n = 0;
    const l = t.length - 1, a = this.parts, [h, p] = Ut(t, e);
    if (this.el = O.createElement(h, i), y.currentNode = this.el.content, e === 2 || e === 3) {
      const c = this.el.content.firstChild;
      c.replaceWith(...c.childNodes);
    }
    for (; (o = y.nextNode()) !== null && a.length < l; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const c of o.getAttributeNames()) if (c.endsWith(ct)) {
          const g = p[n++], m = o.getAttribute(c).split(v), M = /([.?@])?(.*)/.exec(g);
          a.push({ type: 1, index: s, name: M[2], strings: m, ctor: M[1] === "." ? jt : M[1] === "?" ? Nt : M[1] === "@" ? Tt : I }), o.removeAttribute(c);
        } else c.startsWith(v) && (a.push({ type: 6, index: s }), o.removeAttribute(c));
        if (dt.test(o.tagName)) {
          const c = o.textContent.split(v), g = c.length - 1;
          if (g > 0) {
            o.textContent = T ? T.emptyScript : "";
            for (let m = 0; m < g; m++) o.append(c[m], H()), y.nextNode(), a.push({ type: 2, index: ++s });
            o.append(c[g], H());
          }
        }
      } else if (o.nodeType === 8) if (o.data === ht) a.push({ type: 2, index: s });
      else {
        let c = -1;
        for (; (c = o.data.indexOf(v, c + 1)) !== -1; ) a.push({ type: 7, index: s }), c += v.length - 1;
      }
      s++;
    }
  }
  static createElement(t, e) {
    const i = x.createElement("template");
    return i.innerHTML = t, i;
  }
}
function A(r, t, e = r, i) {
  if (t === P) return t;
  let o = i !== void 0 ? e._$Co?.[i] : e._$Cl;
  const s = C(t) ? void 0 : t._$litDirective$;
  return o?.constructor !== s && (o?._$AO?.(!1), s === void 0 ? o = void 0 : (o = new s(r), o._$AT(r, e, i)), i !== void 0 ? (e._$Co ??= [])[i] = o : e._$Cl = o), o !== void 0 && (t = A(r, o._$AS(r, t.values), o, i)), t;
}
class Mt {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: i } = this._$AD, o = (t?.creationScope ?? x).importNode(e, !0);
    y.currentNode = o;
    let s = y.nextNode(), n = 0, l = 0, a = i[0];
    for (; a !== void 0; ) {
      if (n === a.index) {
        let h;
        a.type === 2 ? h = new L(s, s.nextSibling, this, t) : a.type === 1 ? h = new a.ctor(s, a.name, a.strings, this, t) : a.type === 6 && (h = new Ht(s, this, t)), this._$AV.push(h), a = i[++l];
      }
      n !== a?.index && (s = y.nextNode(), n++);
    }
    return y.currentNode = x, o;
  }
  p(t) {
    let e = 0;
    for (const i of this._$AV) i !== void 0 && (i.strings !== void 0 ? (i._$AI(t, i, e), e += i.strings.length - 2) : i._$AI(t[e])), e++;
  }
}
class L {
  get _$AU() {
    return this._$AM?._$AU ?? this._$Cv;
  }
  constructor(t, e, i, o) {
    this.type = 2, this._$AH = d, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = o, this._$Cv = o?.isConnected ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && t?.nodeType === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = A(this, t, e), C(t) ? t === d || t == null || t === "" ? (this._$AH !== d && this._$AR(), this._$AH = d) : t !== this._$AH && t !== P && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Ot(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== d && C(this._$AH) ? this._$AA.nextSibling.data = t : this.T(x.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: e, _$litType$: i } = t, o = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = O.createElement(pt(i.h, i.h[0]), this.options)), i);
    if (this._$AH?._$AD === o) this._$AH.p(e);
    else {
      const s = new Mt(o, this), n = s.u(this.options);
      s.p(e), this.T(n), this._$AH = s;
    }
  }
  _$AC(t) {
    let e = at.get(t.strings);
    return e === void 0 && at.set(t.strings, e = new O(t)), e;
  }
  k(t) {
    F(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let i, o = 0;
    for (const s of t) o === e.length ? e.push(i = new L(this.O(H()), this.O(H()), this, this.options)) : i = e[o], i._$AI(s), o++;
    o < e.length && (this._$AR(i && i._$AB.nextSibling, o), e.length = o);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    for (this._$AP?.(!1, !0, e); t !== this._$AB; ) {
      const i = et(t).nextSibling;
      et(t).remove(), t = i;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class I {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, i, o, s) {
    this.type = 1, this._$AH = d, this._$AN = void 0, this.element = t, this.name = e, this._$AM = o, this.options = s, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = d;
  }
  _$AI(t, e = this, i, o) {
    const s = this.strings;
    let n = !1;
    if (s === void 0) t = A(this, t, e, 0), n = !C(t) || t !== this._$AH && t !== P, n && (this._$AH = t);
    else {
      const l = t;
      let a, h;
      for (t = s[0], a = 0; a < s.length - 1; a++) h = A(this, l[i + a], e, a), h === P && (h = this._$AH[a]), n ||= !C(h) || h !== this._$AH[a], h === d ? t = d : t !== d && (t += (h ?? "") + s[a + 1]), this._$AH[a] = h;
    }
    n && !o && this.j(t);
  }
  j(t) {
    t === d ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class jt extends I {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === d ? void 0 : t;
  }
}
class Nt extends I {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== d);
  }
}
class Tt extends I {
  constructor(t, e, i, o, s) {
    super(t, e, i, o, s), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = A(this, t, e, 0) ?? d) === P) return;
    const i = this._$AH, o = t === d && i !== d || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, s = t !== d && (i === d || o);
    o && this.element.removeEventListener(this.name, this, i), s && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class Ht {
  constructor(t, e, i) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    A(this, t);
  }
}
const Rt = Z.litHtmlPolyfillSupport;
Rt?.(O, L), (Z.litHtmlVersions ??= []).push("3.3.2");
const Lt = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-300:oklch(80.8% .114 19.571);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-emerald-300:oklch(84.5% .143 164.978);--color-emerald-600:oklch(59.6% .145 163.225);--color-zinc-50:oklch(98.5% 0 0);--color-zinc-100:oklch(96.7% .001 286.375);--color-zinc-200:oklch(92% .004 286.32);--color-zinc-300:oklch(87.1% .006 286.286);--color-zinc-400:oklch(70.5% .015 286.067);--color-zinc-500:oklch(55.2% .016 285.938);--color-zinc-600:oklch(44.2% .017 285.786);--color-zinc-700:oklch(37% .013 285.805);--color-zinc-800:oklch(27.4% .006 286.033);--color-zinc-900:oklch(21% .006 285.885);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-md:28rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--font-weight-medium:500;--font-weight-semibold:600;--radius-lg:.5rem;--radius-xl:.75rem;--radius-2xl:1rem;--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.z-50{z-index:50}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-4{margin-top:calc(var(--spacing)*4)}.mr-2{margin-right:calc(var(--spacing)*2)}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.block{display:block}.flex{display:flex}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.h-4{height:calc(var(--spacing)*4)}.h-8{height:calc(var(--spacing)*8)}.h-10{height:calc(var(--spacing)*10)}.h-12{height:calc(var(--spacing)*12)}.w-4{width:calc(var(--spacing)*4)}.w-full{width:100%}.max-w-md{max-width:var(--container-md)}.animate-spin{animation:var(--animate-spin)}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-2{gap:calc(var(--spacing)*2)}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-xl{border-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-emerald-300{border-color:var(--color-emerald-300)}.border-red-300{border-color:var(--color-red-300)}.border-white\\/40{border-color:#fff6}@supports (color:color-mix(in lab,red,red)){.border-white\\/40{border-color:color-mix(in oklab,var(--color-white)40%,transparent)}}.border-zinc-200{border-color:var(--color-zinc-200)}.border-t-white{border-top-color:var(--color-white)}.bg-black{background-color:var(--color-black)}.bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){.bg-black\\/40{background-color:color-mix(in oklab,var(--color-black)40%,transparent)}}.bg-red-500{background-color:var(--color-red-500)}.bg-red-600{background-color:var(--color-red-600)}.bg-white{background-color:var(--color-white)}.p-4{padding:calc(var(--spacing)*4)}.p-5{padding:calc(var(--spacing)*5)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-5{padding-inline:calc(var(--spacing)*5)}.py-1{padding-block:calc(var(--spacing)*1)}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-black{color:var(--color-black)}.text-emerald-600{color:var(--color-emerald-600)}.text-red-600{color:var(--color-red-600)}.text-white{color:var(--color-white)}.text-zinc-500{color:var(--color-zinc-500)}.text-zinc-600{color:var(--color-zinc-600)}.text-zinc-700{color:var(--color-zinc-700)}.text-zinc-800{color:var(--color-zinc-800)}.text-zinc-900{color:var(--color-zinc-900)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;user-select:none}@media(hover:hover){.hover\\:bg-red-500:hover{background-color:var(--color-red-500)}.hover\\:bg-zinc-50:hover{background-color:var(--color-zinc-50)}.hover\\:bg-zinc-100:hover{background-color:var(--color-zinc-100)}.hover\\:bg-zinc-800:hover{background-color:var(--color-zinc-800)}}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-emerald-300:focus{--tw-ring-color:var(--color-emerald-300)}.focus\\:ring-red-300:focus{--tw-ring-color:var(--color-red-300)}.focus\\:ring-zinc-300:focus{--tw-ring-color:var(--color-zinc-300)}.focus\\:ring-zinc-400:focus{--tw-ring-color:var(--color-zinc-400)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:bg-zinc-50:disabled{background-color:var(--color-zinc-50)}.disabled\\:opacity-50:disabled{opacity:.5}}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@keyframes spin{to{transform:rotate(360deg)}}', J = ft`${ut(Lt)}`;
function G(r, t, e, i) {
  const o = new CustomEvent(String(t), {
    detail: e,
    bubbles: !0,
    composed: !0
  });
  return r.dispatchEvent(o), o;
}
var It = Object.defineProperty, Bt = Object.getOwnPropertyDescriptor, U = (r, t, e, i) => {
  for (var o = i > 1 ? void 0 : i ? Bt(t, e) : t, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = (i ? n(t, e, o) : n(o)) || o);
  return i && o && It(t, e, o), o;
};
let f = class extends W {
  constructor() {
    super(...arguments), this.variant = "primary", this.size = "md", this.disabled = !1, this.loading = !1, this.onClick = () => {
      this.disabled || this.loading || G(this, "lit-button:click", { variant: this.variant, size: this.size });
    };
  }
  render() {
    return $`
      <button
        class="bg-red-500"
        ?disabled=${this.disabled || this.loading}
        @click=${this.onClick}
      >
        ${this.loading ? $`<span
              class="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
            ></span>` : null}
        <slot></slot>
      </button>
    `;
  }
};
f.styles = [J];
f.BASE_BUTTON_CLASS = "inline-flex items-center justify-center rounded-xl font-medium transition select-none focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
f.SIZE_CLASS = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-base"
};
f.VARIANT_CLASS = {
  primary: "bg-black text-white hover:bg-zinc-800 focus:ring-zinc-400",
  secondary: "bg-white text-black border border-zinc-200 hover:bg-zinc-50 focus:ring-zinc-300",
  danger: "bg-red-600 text-white hover:bg-red-500 focus:ring-red-300"
};
U([
  u({ type: String })
], f.prototype, "variant", 2);
U([
  u({ type: String })
], f.prototype, "size", 2);
U([
  u({ type: Boolean, reflect: !0 })
], f.prototype, "disabled", 2);
U([
  u({ type: Boolean })
], f.prototype, "loading", 2);
f = U([
  q("lit-button")
], f);
var Dt = Object.defineProperty, Wt = Object.getOwnPropertyDescriptor, _ = (r, t, e, i) => {
  for (var o = i > 1 ? void 0 : i ? Wt(t, e) : t, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = (i ? n(t, e, o) : n(o)) || o);
  return i && o && Dt(t, e, o), o;
};
const qt = {
  error: "focus:ring-red-300 border-red-300",
  success: "focus:ring-emerald-300 border-emerald-300",
  default: "focus:ring-zinc-300 border-zinc-200"
}, Vt = {
  error: "text-red-600",
  success: "text-emerald-600",
  default: "text-zinc-500"
};
let b = class extends W {
  constructor() {
    super(...arguments), this.label = "", this.placeholder = "", this.value = "", this.disabled = !1, this.state = "default", this.helperText = "", this.onInput = (r) => {
      const t = r.target.value;
      this.value = t, G(this, "lit-input:change", { value: t });
    };
  }
  render() {
    const r = qt[this.state], t = Vt[this.state];
    return $`
      <label class="block">
        ${this.label ? $`<span class="mb-1 block text-sm font-medium text-zinc-800"
              >${this.label}</span
            >` : null}

        <input
          class="h-10 w-full rounded-xl border bg-white px-3 text-sm outline-none transition disabled:cursor-not-allowed disabled:bg-zinc-50 ${r}"
          .value=${this.value}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.onInput}
        />

        ${this.helperText ? $`<span class="mt-1 block text-xs ${t}"
              >${this.helperText}</span
            >` : null}
      </label>
    `;
  }
};
b.styles = [J];
_([
  u({ type: String })
], b.prototype, "label", 2);
_([
  u({ type: String })
], b.prototype, "placeholder", 2);
_([
  u({ type: String })
], b.prototype, "value", 2);
_([
  u({ type: Boolean })
], b.prototype, "disabled", 2);
_([
  u({ type: String })
], b.prototype, "state", 2);
_([
  u({ type: String })
], b.prototype, "helperText", 2);
b = _([
  q("lit-input")
], b);
function Kt(r) {
  return (t) => {
    t.key === "Escape" && r(t);
  };
}
var Zt = Object.defineProperty, Ft = Object.getOwnPropertyDescriptor, B = (r, t, e, i) => {
  for (var o = i > 1 ? void 0 : i ? Ft(t, e) : t, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = (i ? n(t, e, o) : n(o)) || o);
  return i && o && Zt(t, e, o), o;
};
let k = class extends W {
  constructor() {
    super(...arguments), this.open = !1, this.title = "", this.handleWindowKeyDown = (r) => {
      this.open && Kt(() => this.close("escape"))(r);
    }, this.onBackdropClick = () => this.close("backdrop"), this.onCloseButtonClick = () => this.close("button");
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("keydown", this.handleWindowKeyDown, { capture: !0 });
  }
  disconnectedCallback() {
    window.removeEventListener("keydown", this.handleWindowKeyDown, { capture: !0 }), super.disconnectedCallback();
  }
  close(r) {
    this.open && (this.open = !1, G(this, "lit-modal:close", { reason: r }));
  }
  updated(r) {
    r.has("open") && this.open && queueMicrotask(() => this.dialogEl?.focus());
  }
  render() {
    return this.open ? $`
      <div class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <button
          class="absolute inset-0 bg-black/40"
          @click=${this.onBackdropClick}
          aria-label="Close backdrop"
        ></button>

        <div
          id="dialog"
          class="relative w-full max-w-md rounded-2xl bg-white p-5 shadow-xl outline-none"
          role="dialog"
          aria-modal="true"
          tabindex="0"
        >
          <div class="mb-3 flex items-center justify-between">
            <h2 class="text-base font-semibold text-zinc-900">${this.title}</h2>
            <button
              class="rounded-lg px-2 py-1 text-sm text-zinc-600 hover:bg-zinc-100"
              @click=${this.onCloseButtonClick}
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          <div class="text-sm text-zinc-700">
            <slot></slot>
          </div>

          <div class="mt-4 flex justify-end gap-2">
            <lit-button variant="secondary" @click=${this.onCloseButtonClick}>
              Cancel
            </lit-button>
            <lit-button @click=${this.onCloseButtonClick}>OK</lit-button>
          </div>
        </div>
      </div>
    ` : $``;
  }
};
k.styles = [J];
B([
  u({ type: Boolean, reflect: !0 })
], k.prototype, "open", 2);
B([
  u({ type: String })
], k.prototype, "title", 2);
B([
  Ct("#dialog")
], k.prototype, "dialogEl", 2);
k = B([
  q("lit-modal")
], k);
