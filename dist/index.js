import { unsafeCSS as W, css as q, LitElement as K, html as $ } from "lit";
const V = (r) => (t, e) => {
  e !== void 0 ? e.addInitializer(() => {
    customElements.define(r, t);
  }) : customElements.define(r, t);
};
const T = globalThis, F = T.ShadowRoot && (T.ShadyCSS === void 0 || T.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, ct = /* @__PURE__ */ Symbol(), Q = /* @__PURE__ */ new WeakMap();
let gt = class {
  constructor(t, e, i) {
    if (this._$cssResult$ = !0, i !== ct) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (F && t === void 0) {
      const i = e !== void 0 && e.length === 1;
      i && (t = Q.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && Q.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const bt = (r) => new gt(typeof r == "string" ? r : r + "", void 0, ct), mt = (r, t) => {
  if (F) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const i = document.createElement("style"), s = T.litNonce;
    s !== void 0 && i.setAttribute("nonce", s), i.textContent = e.cssText, r.appendChild(i);
  }
}, Y = F ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const i of t.cssRules) e += i.cssText;
  return bt(e);
})(r) : r;
const { is: vt, defineProperty: yt, getOwnPropertyDescriptor: $t, getOwnPropertyNames: wt, getOwnPropertySymbols: _t, getPrototypeOf: xt } = Object, R = globalThis, tt = R.trustedTypes, At = tt ? tt.emptyScript : "", Et = R.reactiveElementPolyfillSupport, C = (r, t) => r, j = { toAttribute(r, t) {
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
} }, Z = (r, t) => !vt(r, t), et = { attribute: !0, type: String, converter: j, reflect: !1, useDefault: !1, hasChanged: Z };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), R.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
let S = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = et) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const i = /* @__PURE__ */ Symbol(), s = this.getPropertyDescriptor(t, i, e);
      s !== void 0 && yt(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    const { get: s, set: o } = $t(this.prototype, t) ?? { get() {
      return this[e];
    }, set(n) {
      this[e] = n;
    } };
    return { get: s, set(n) {
      const l = s?.call(this);
      o?.call(this, n), this.requestUpdate(t, l, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? et;
  }
  static _$Ei() {
    if (this.hasOwnProperty(C("elementProperties"))) return;
    const t = xt(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(C("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(C("properties"))) {
      const e = this.properties, i = [...wt(e), ..._t(e)];
      for (const s of i) this.createProperty(s, e[s]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [i, s] of e) this.elementProperties.set(i, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, i] of this.elementProperties) {
      const s = this._$Eu(e, i);
      s !== void 0 && this._$Eh.set(s, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const s of i) e.unshift(Y(s));
    } else t !== void 0 && e.push(Y(t));
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
    const i = this.constructor.elementProperties.get(t), s = this.constructor._$Eu(t, i);
    if (s !== void 0 && i.reflect === !0) {
      const o = (i.converter?.toAttribute !== void 0 ? i.converter : j).toAttribute(e, i.type);
      this._$Em = t, o == null ? this.removeAttribute(s) : this.setAttribute(s, o), this._$Em = null;
    }
  }
  _$AK(t, e) {
    const i = this.constructor, s = i._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const o = i.getPropertyOptions(s), n = typeof o.converter == "function" ? { fromAttribute: o.converter } : o.converter?.fromAttribute !== void 0 ? o.converter : j;
      this._$Em = s;
      const l = n.fromAttribute(e, o.type);
      this[s] = l ?? this._$Ej?.get(s) ?? l, this._$Em = null;
    }
  }
  requestUpdate(t, e, i, s = !1, o) {
    if (t !== void 0) {
      const n = this.constructor;
      if (s === !1 && (o = this[t]), i ??= n.getPropertyOptions(t), !((i.hasChanged ?? Z)(o, e) || i.useDefault && i.reflect && o === this._$Ej?.get(t) && !this.hasAttribute(n._$Eu(t, i)))) return;
      this.C(t, e, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: i, reflect: s, wrapped: o }, n) {
    i && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, n ?? e ?? this[t]), o !== !0 || n !== void 0) || (this._$AL.has(t) || (this.hasUpdated || i || (e = void 0), this._$AL.set(t, e)), s === !0 && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
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
        for (const [s, o] of this._$Ep) this[s] = o;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [s, o] of i) {
        const { wrapped: n } = o, l = this[s];
        n !== !0 || this._$AL.has(s) || l === void 0 || this.C(s, void 0, o, l);
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
S.elementStyles = [], S.shadowRootOptions = { mode: "open" }, S[C("elementProperties")] = /* @__PURE__ */ new Map(), S[C("finalized")] = /* @__PURE__ */ new Map(), Et?.({ ReactiveElement: S }), (R.reactiveElementVersions ??= []).push("2.1.2");
const St = { attribute: !0, type: String, converter: j, reflect: !1, hasChanged: Z }, kt = (r = St, t, e) => {
  const { kind: i, metadata: s } = e;
  let o = globalThis.litPropertyMetadata.get(s);
  if (o === void 0 && globalThis.litPropertyMetadata.set(s, o = /* @__PURE__ */ new Map()), i === "setter" && ((r = Object.create(r)).wrapped = !0), o.set(e.name, r), i === "accessor") {
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
  return (t, e) => typeof e == "object" ? kt(r, t, e) : ((i, s, o) => {
    const n = s.hasOwnProperty(o);
    return s.constructor.createProperty(o, i), n ? Object.getOwnPropertyDescriptor(s, o) : void 0;
  })(r, t, e);
}
const J = globalThis, it = (r) => r, N = J.trustedTypes, st = N ? N.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, ht = "$lit$", m = `lit$${Math.random().toFixed(9).slice(2)}$`, dt = "?" + m, Ct = `<${dt}>`, w = document, H = () => w.createComment(""), P = (r) => r === null || typeof r != "object" && typeof r != "function", X = Array.isArray, Pt = (r) => X(r) || typeof r?.[Symbol.iterator] == "function", I = `[ 	
\f\r]`, k = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, rt = /-->/g, ot = />/g, v = RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), nt = /'/g, at = /"/g, pt = /^(?:script|style|textarea|title)$/i, A = /* @__PURE__ */ Symbol.for("lit-noChange"), d = /* @__PURE__ */ Symbol.for("lit-nothing"), lt = /* @__PURE__ */ new WeakMap(), y = w.createTreeWalker(w, 129);
function ut(r, t) {
  if (!X(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return st !== void 0 ? st.createHTML(t) : t;
}
const zt = (r, t) => {
  const e = r.length - 1, i = [];
  let s, o = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", n = k;
  for (let l = 0; l < e; l++) {
    const a = r[l];
    let h, p, c = -1, f = 0;
    for (; f < a.length && (n.lastIndex = f, p = n.exec(a), p !== null); ) f = n.lastIndex, n === k ? p[1] === "!--" ? n = rt : p[1] !== void 0 ? n = ot : p[2] !== void 0 ? (pt.test(p[2]) && (s = RegExp("</" + p[2], "g")), n = v) : p[3] !== void 0 && (n = v) : n === v ? p[0] === ">" ? (n = s ?? k, c = -1) : p[1] === void 0 ? c = -2 : (c = n.lastIndex - p[2].length, h = p[1], n = p[3] === void 0 ? v : p[3] === '"' ? at : nt) : n === at || n === nt ? n = v : n === rt || n === ot ? n = k : (n = v, s = void 0);
    const b = n === v && r[l + 1].startsWith("/>") ? " " : "";
    o += n === k ? a + Ct : c >= 0 ? (i.push(h), a.slice(0, c) + ht + a.slice(c) + m + b) : a + m + (c === -2 ? l : b);
  }
  return [ut(r, o + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), i];
};
class z {
  constructor({ strings: t, _$litType$: e }, i) {
    let s;
    this.parts = [];
    let o = 0, n = 0;
    const l = t.length - 1, a = this.parts, [h, p] = zt(t, e);
    if (this.el = z.createElement(h, i), y.currentNode = this.el.content, e === 2 || e === 3) {
      const c = this.el.content.firstChild;
      c.replaceWith(...c.childNodes);
    }
    for (; (s = y.nextNode()) !== null && a.length < l; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const c of s.getAttributeNames()) if (c.endsWith(ht)) {
          const f = p[n++], b = s.getAttribute(c).split(m), M = /([.?@])?(.*)/.exec(f);
          a.push({ type: 1, index: o, name: M[2], strings: b, ctor: M[1] === "." ? Ut : M[1] === "?" ? Mt : M[1] === "@" ? Tt : D }), s.removeAttribute(c);
        } else c.startsWith(m) && (a.push({ type: 6, index: o }), s.removeAttribute(c));
        if (pt.test(s.tagName)) {
          const c = s.textContent.split(m), f = c.length - 1;
          if (f > 0) {
            s.textContent = N ? N.emptyScript : "";
            for (let b = 0; b < f; b++) s.append(c[b], H()), y.nextNode(), a.push({ type: 2, index: ++o });
            s.append(c[f], H());
          }
        }
      } else if (s.nodeType === 8) if (s.data === dt) a.push({ type: 2, index: o });
      else {
        let c = -1;
        for (; (c = s.data.indexOf(m, c + 1)) !== -1; ) a.push({ type: 7, index: o }), c += m.length - 1;
      }
      o++;
    }
  }
  static createElement(t, e) {
    const i = w.createElement("template");
    return i.innerHTML = t, i;
  }
}
function E(r, t, e = r, i) {
  if (t === A) return t;
  let s = i !== void 0 ? e._$Co?.[i] : e._$Cl;
  const o = P(t) ? void 0 : t._$litDirective$;
  return s?.constructor !== o && (s?._$AO?.(!1), o === void 0 ? s = void 0 : (s = new o(r), s._$AT(r, e, i)), i !== void 0 ? (e._$Co ??= [])[i] = s : e._$Cl = s), s !== void 0 && (t = E(r, s._$AS(r, t.values), s, i)), t;
}
class Ot {
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
    const { el: { content: e }, parts: i } = this._$AD, s = (t?.creationScope ?? w).importNode(e, !0);
    y.currentNode = s;
    let o = y.nextNode(), n = 0, l = 0, a = i[0];
    for (; a !== void 0; ) {
      if (n === a.index) {
        let h;
        a.type === 2 ? h = new L(o, o.nextSibling, this, t) : a.type === 1 ? h = new a.ctor(o, a.name, a.strings, this, t) : a.type === 6 && (h = new jt(o, this, t)), this._$AV.push(h), a = i[++l];
      }
      n !== a?.index && (o = y.nextNode(), n++);
    }
    return y.currentNode = w, s;
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
  constructor(t, e, i, s) {
    this.type = 2, this._$AH = d, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = i, this.options = s, this._$Cv = s?.isConnected ?? !0;
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
    t = E(this, t, e), P(t) ? t === d || t == null || t === "" ? (this._$AH !== d && this._$AR(), this._$AH = d) : t !== this._$AH && t !== A && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Pt(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== d && P(this._$AH) ? this._$AA.nextSibling.data = t : this.T(w.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    const { values: e, _$litType$: i } = t, s = typeof i == "number" ? this._$AC(t) : (i.el === void 0 && (i.el = z.createElement(ut(i.h, i.h[0]), this.options)), i);
    if (this._$AH?._$AD === s) this._$AH.p(e);
    else {
      const o = new Ot(s, this), n = o.u(this.options);
      o.p(e), this.T(n), this._$AH = o;
    }
  }
  _$AC(t) {
    let e = lt.get(t.strings);
    return e === void 0 && lt.set(t.strings, e = new z(t)), e;
  }
  k(t) {
    X(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let i, s = 0;
    for (const o of t) s === e.length ? e.push(i = new L(this.O(H()), this.O(H()), this, this.options)) : i = e[s], i._$AI(o), s++;
    s < e.length && (this._$AR(i && i._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    for (this._$AP?.(!1, !0, e); t !== this._$AB; ) {
      const i = it(t).nextSibling;
      it(t).remove(), t = i;
    }
  }
  setConnected(t) {
    this._$AM === void 0 && (this._$Cv = t, this._$AP?.(t));
  }
}
class D {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, i, s, o) {
    this.type = 1, this._$AH = d, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = o, i.length > 2 || i[0] !== "" || i[1] !== "" ? (this._$AH = Array(i.length - 1).fill(new String()), this.strings = i) : this._$AH = d;
  }
  _$AI(t, e = this, i, s) {
    const o = this.strings;
    let n = !1;
    if (o === void 0) t = E(this, t, e, 0), n = !P(t) || t !== this._$AH && t !== A, n && (this._$AH = t);
    else {
      const l = t;
      let a, h;
      for (t = o[0], a = 0; a < o.length - 1; a++) h = E(this, l[i + a], e, a), h === A && (h = this._$AH[a]), n ||= !P(h) || h !== this._$AH[a], h === d ? t = d : t !== d && (t += (h ?? "") + o[a + 1]), this._$AH[a] = h;
    }
    n && !s && this.j(t);
  }
  j(t) {
    t === d ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class Ut extends D {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === d ? void 0 : t;
  }
}
class Mt extends D {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== d);
  }
}
class Tt extends D {
  constructor(t, e, i, s, o) {
    super(t, e, i, s, o), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = E(this, t, e, 0) ?? d) === A) return;
    const i = this._$AH, s = t === d && i !== d || t.capture !== i.capture || t.once !== i.once || t.passive !== i.passive, o = t !== d && (i === d || s);
    s && this.element.removeEventListener(this.name, this, i), o && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    typeof this._$AH == "function" ? this._$AH.call(this.options?.host ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class jt {
  constructor(t, e, i) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = i;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    E(this, t);
  }
}
const Nt = J.litHtmlPolyfillSupport;
Nt?.(z, L), (J.litHtmlVersions ??= []).push("3.3.2");
const Ht = { ATTRIBUTE: 1 }, Rt = (r) => (...t) => ({ _$litDirective$: r, values: t });
class Lt {
  constructor(t) {
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AT(t, e, i) {
    this._$Ct = t, this._$AM = e, this._$Ci = i;
  }
  _$AS(t, e) {
    return this.update(t, e);
  }
  update(t, e) {
    return this.render(...e);
  }
}
const B = Rt(class extends Lt {
  constructor(r) {
    if (super(r), r.type !== Ht.ATTRIBUTE || r.name !== "class" || r.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
  }
  render(r) {
    return " " + Object.keys(r).filter((t) => r[t]).join(" ") + " ";
  }
  update(r, [t]) {
    if (this.st === void 0) {
      this.st = /* @__PURE__ */ new Set(), r.strings !== void 0 && (this.nt = new Set(r.strings.join(" ").split(/\s/).filter((i) => i !== "")));
      for (const i in t) t[i] && !this.nt?.has(i) && this.st.add(i);
      return this.render(t);
    }
    const e = r.element.classList;
    for (const i of this.st) i in t || (e.remove(i), this.st.delete(i));
    for (const i in t) {
      const s = !!t[i];
      s === this.st.has(i) || this.nt?.has(i) || (s ? (e.add(i), this.st.add(i)) : (e.remove(i), this.st.delete(i)));
    }
    return A;
  }
}), Dt = ":host{display:inline-block}button{display:inline-flex;align-items:center;justify-content:center;border-radius:.75rem;font-weight:500;-webkit-user-select:none;user-select:none;border:1px solid transparent;cursor:pointer;background:var(--stc-primary);color:var(--stc-primary-contrast);transition:background-color .15s ease,color .15s ease,border-color .15s ease,box-shadow .15s ease;outline:none}button.size-sm{height:2rem;padding:0 .75rem;font-size:.875rem}button.size-md{height:2.5rem;padding:0 1rem;font-size:.875rem}button.size-lg{height:3rem;padding:0 1.25rem;font-size:1rem}button.variant-primary{background:var(--stc-primary);color:var(--stc-primary-contrast)}button.variant-primary:hover:not(:disabled){background:color-mix(in srgb,var(--stc-primary) 85%,var(--stc-fg))}button.variant-secondary{background:var(--stc-surface);color:var(--stc-fg);border-color:var(--stc-border)}button.variant-secondary:hover:not(:disabled){background:color-mix(in srgb,var(--stc-surface) 92%,var(--stc-fg))}button.variant-danger{background:var(--stc-danger, #dc2626);color:var(--stc-danger-contrast, #ffffff)}button.variant-danger:hover:not(:disabled){background:color-mix(in srgb,var(--stc-danger, #dc2626) 90%,#000)}button:focus-visible{box-shadow:0 0 0 2px var(--stc-surface),0 0 0 4px color-mix(in srgb,var(--stc-primary) 40%,transparent)}button:disabled{opacity:.55;cursor:not-allowed}.spinner{margin-inline-end:.5rem;display:inline-block;width:1rem;height:1rem;border-radius:999px;border:2px solid color-mix(in srgb,currentColor 35%,transparent);border-top-color:currentColor;animation:spin .7s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}";
var It = Object.defineProperty, Bt = Object.getOwnPropertyDescriptor, U = (r, t, e, i) => {
  for (var s = i > 1 ? void 0 : i ? Bt(t, e) : t, o = r.length - 1, n; o >= 0; o--)
    (n = r[o]) && (s = (i ? n(t, e, s) : n(s)) || s);
  return i && s && It(t, e, s), s;
};
let _ = class extends K {
  constructor() {
    super(...arguments), this.variant = "primary", this.size = "md", this.disabled = !1, this.loading = !1;
  }
  render() {
    const r = B({
      [`size-${this.size}`]: !0,
      [`variant-${this.variant}`]: !0
    });
    return $`
      <button class=${r} ?disabled=${this.disabled || this.loading}>
        ${this.loading ? $`<span class="spinner"></span>` : null}
        <slot></slot>
      </button>
    `;
  }
};
_.styles = q`${W(Dt)}`;
U([
  u({ type: String })
], _.prototype, "variant", 2);
U([
  u({ type: String })
], _.prototype, "size", 2);
U([
  u({ type: Boolean, reflect: !0 })
], _.prototype, "disabled", 2);
U([
  u({ type: Boolean })
], _.prototype, "loading", 2);
_ = U([
  V("lit-button")
], _);
const Wt = ":host{display:block}.label{display:block}.label-text{margin-bottom:.25rem;display:block;font-size:.875rem;font-weight:500;color:var(--stc-fg)}.input{height:2.5rem;width:100%;border-radius:.75rem;background:var(--stc-input-bg);color:var(--stc-input-fg);border:1px solid var(--stc-input-border);padding:0 .75rem;font-size:.875rem;outline:none;transition:border-color .15s ease,box-shadow .15s ease,background-color .15s ease}.input::placeholder{color:color-mix(in srgb,var(--stc-input-fg) 45%,transparent)}.input:focus-visible{box-shadow:0 0 0 2px var(--stc-surface),0 0 0 4px color-mix(in srgb,var(--stc-primary) 40%,transparent)}.input:disabled{cursor:not-allowed;opacity:.6;background:color-mix(in srgb,var(--stc-surface) 92%,var(--stc-border))}.input.state-default{border-color:var(--stc-border)}.input.state-error{border-color:var(--stc-danger, #dc2626)}.input.state-error:focus-visible{box-shadow:0 0 0 2px var(--stc-surface),0 0 0 4px color-mix(in srgb,var(--stc-danger, #dc2626) 40%,transparent)}.input.state-success{border-color:var(--stc-success, #16a34a)}.input.state-success:focus-visible{box-shadow:0 0 0 2px var(--stc-surface),0 0 0 4px color-mix(in srgb,var(--stc-success, #16a34a) 40%,transparent)}.helper{margin-top:.25rem;display:block;font-size:.75rem}.helper.default{color:var(--stc-muted)}.helper.error{color:var(--stc-danger, #dc2626)}.helper.success{color:var(--stc-success, #16a34a)}";
var qt = Object.defineProperty, Kt = Object.getOwnPropertyDescriptor, x = (r, t, e, i) => {
  for (var s = i > 1 ? void 0 : i ? Kt(t, e) : t, o = r.length - 1, n; o >= 0; o--)
    (n = r[o]) && (s = (i ? n(t, e, s) : n(s)) || s);
  return i && s && qt(t, e, s), s;
};
let g = class extends K {
  constructor() {
    super(...arguments), this.label = "", this.placeholder = "", this.value = "", this.disabled = !1, this.state = "default", this.helperText = "";
  }
  emit(r) {
    this.dispatchEvent(
      new CustomEvent("lit-input", {
        detail: { value: r },
        bubbles: !0,
        composed: !0
      })
    );
  }
  render() {
    const r = B({
      input: !0,
      [`state-${this.state}`]: !0
    }), t = B({
      helper: !0,
      [this.state]: !0
    });
    return $`
      <label class="label">
        ${this.label ? $`<span class="label-text">${this.label}</span>` : null}

        <input
          class=${r}
          .value=${this.value}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${(e) => {
      const i = e.target.value;
      this.value = i, this.emit(i);
    }}
        />

        ${this.helperText ? $`<span class=${t}>${this.helperText}</span>` : null}
      </label>
    `;
  }
};
g.styles = q`${W(Wt)}`;
x([
  u({ type: String })
], g.prototype, "label", 2);
x([
  u({ type: String })
], g.prototype, "placeholder", 2);
x([
  u({ type: String })
], g.prototype, "value", 2);
x([
  u({ type: Boolean })
], g.prototype, "disabled", 2);
x([
  u({ type: String })
], g.prototype, "state", 2);
x([
  u({ type: String })
], g.prototype, "helperText", 2);
g = x([
  V("lit-input")
], g);
const ft = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-zinc-100:oklch(96.7% .001 286.375);--color-zinc-600:oklch(44.2% .017 285.786);--color-zinc-700:oklch(37% .013 285.805);--color-zinc-900:oklch(21% .006 285.885);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-md:28rem;--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--font-weight-semibold:600;--radius-lg:.5rem;--radius-2xl:1rem;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.z-50{z-index:50}.mt-4{margin-top:calc(var(--spacing)*4)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.flex{display:flex}.w-full{width:100%}.max-w-md{max-width:var(--container-md)}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-2{gap:calc(var(--spacing)*2)}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-lg{border-radius:var(--radius-lg)}.bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){.bg-black\\/40{background-color:color-mix(in oklab,var(--color-black)40%,transparent)}}.bg-white{background-color:var(--color-white)}.p-4{padding:calc(var(--spacing)*4)}.p-5{padding:calc(var(--spacing)*5)}.px-2{padding-inline:calc(var(--spacing)*2)}.py-1{padding-block:calc(var(--spacing)*1)}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-zinc-600{color:var(--color-zinc-600)}.text-zinc-700{color:var(--color-zinc-700)}.text-zinc-900{color:var(--color-zinc-900)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline-none{--tw-outline-style:none;outline-style:none}@media(hover:hover){.hover\\:bg-zinc-100:hover{background-color:var(--color-zinc-100)}}}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}';
console.log("TW TEXT SAMPLE:", ft.slice(0, 200));
const Vt = q`${W(ft)}`;
var Ft = Object.defineProperty, Zt = Object.getOwnPropertyDescriptor, G = (r, t, e, i) => {
  for (var s = i > 1 ? void 0 : i ? Zt(t, e) : t, o = r.length - 1, n; o >= 0; o--)
    (n = r[o]) && (s = (i ? n(t, e, s) : n(s)) || s);
  return i && s && Ft(t, e, s), s;
};
let O = class extends K {
  constructor() {
    super(...arguments), this.open = !1, this.title = "", this.onKeyDown = (r) => {
      this.open && r.key === "Escape" && this.close();
    };
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("keydown", this.onKeyDown);
  }
  disconnectedCallback() {
    window.removeEventListener("keydown", this.onKeyDown), super.disconnectedCallback();
  }
  close() {
    this.open = !1, this.dispatchEvent(
      new CustomEvent("lit-close", { bubbles: !0, composed: !0 })
    );
  }
  render() {
    return this.open ? $`
      <div
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        aria-modal="true"
        role="dialog"
      >
        <button
          class="absolute inset-0 bg-black/40"
          @click=${this.close}
          aria-label="Close backdrop"
        ></button>

        <div class="relative w-full max-w-md rounded-2xl bg-white p-5 shadow-xl">
          <div class="mb-3 flex items-center justify-between">
            <h2 class="text-base font-semibold text-zinc-900">${this.title}</h2>
            <button
              class="rounded-lg px-2 py-1 text-sm text-zinc-600 hover:bg-zinc-100"
              @click=${this.close}
            >
              ✕
            </button>
          </div>

          <div class="text-sm text-zinc-700">
            <slot></slot>
          </div>

          <div class="mt-4 flex justify-end gap-2">
            <ds-button variant="secondary" @click=${this.close}>Cancel</ds-button>
            <ds-button>OK</ds-button>
          </div>
        </div>
      </div>
    ` : $``;
  }
};
O.styles = [Vt];
G([
  u({ type: Boolean, reflect: !0 })
], O.prototype, "open", 2);
G([
  u({ type: String })
], O.prototype, "title", 2);
O = G([
  V("lit-modal")
], O);
