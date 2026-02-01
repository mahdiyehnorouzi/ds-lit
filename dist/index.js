import { unsafeCSS as A, css as M, LitElement as k, html as d } from "lit";
const $ = (o) => (t, e) => {
  e !== void 0 ? e.addInitializer(() => {
    customElements.define(o, t);
  }) : customElements.define(o, t);
};
const w = globalThis, S = w.ShadowRoot && (w.ShadyCSS === void 0 || w.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, U = /* @__PURE__ */ Symbol(), C = /* @__PURE__ */ new WeakMap();
let R = class {
  constructor(t, e, i) {
    if (this._$cssResult$ = !0, i !== U) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (S && t === void 0) {
      const i = e !== void 0 && e.length === 1;
      i && (t = C.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && C.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const L = (o) => new R(typeof o == "string" ? o : o + "", void 0, U), T = (o, t) => {
  if (S) o.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const i = document.createElement("style"), r = w.litNonce;
    r !== void 0 && i.setAttribute("nonce", r), i.textContent = e.cssText, o.appendChild(i);
  }
}, P = S ? (o) => o : (o) => o instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const i of t.cssRules) e += i.cssText;
  return L(e);
})(o) : o;
const { is: D, defineProperty: B, getOwnPropertyDescriptor: N, getOwnPropertyNames: I, getOwnPropertySymbols: q, getPrototypeOf: K } = Object, v = globalThis, O = v.trustedTypes, W = O ? O.emptyScript : "", F = v.reactiveElementPolyfillSupport, b = (o, t) => o, m = { toAttribute(o, t) {
  switch (t) {
    case Boolean:
      o = o ? W : null;
      break;
    case Object:
    case Array:
      o = o == null ? o : JSON.stringify(o);
  }
  return o;
}, fromAttribute(o, t) {
  let e = o;
  switch (t) {
    case Boolean:
      e = o !== null;
      break;
    case Number:
      e = o === null ? null : Number(o);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(o);
      } catch {
        e = null;
      }
  }
  return e;
} }, _ = (o, t) => !D(o, t), j = { attribute: !0, type: String, converter: m, reflect: !1, useDefault: !1, hasChanged: _ };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), v.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
class f extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = j) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const i = /* @__PURE__ */ Symbol(), r = this.getPropertyDescriptor(t, i, e);
      r !== void 0 && B(this.prototype, t, r);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    const { get: r, set: n } = N(this.prototype, t) ?? { get() {
      return this[e];
    }, set(s) {
      this[e] = s;
    } };
    return { get: r, set(s) {
      const a = r?.call(this);
      n?.call(this, s), this.requestUpdate(t, a, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? j;
  }
  static _$Ei() {
    if (this.hasOwnProperty(b("elementProperties"))) return;
    const t = K(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(b("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(b("properties"))) {
      const e = this.properties, i = [...I(e), ...q(e)];
      for (const r of i) this.createProperty(r, e[r]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [i, r] of e) this.elementProperties.set(i, r);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, i] of this.elementProperties) {
      const r = this._$Eu(e, i);
      r !== void 0 && this._$Eh.set(r, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const i = new Set(t.flat(1 / 0).reverse());
      for (const r of i) e.unshift(P(r));
    } else t !== void 0 && e.push(P(t));
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
    return T(t, this.constructor.elementStyles), t;
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
    const i = this.constructor.elementProperties.get(t), r = this.constructor._$Eu(t, i);
    if (r !== void 0 && i.reflect === !0) {
      const n = (i.converter?.toAttribute !== void 0 ? i.converter : m).toAttribute(e, i.type);
      this._$Em = t, n == null ? this.removeAttribute(r) : this.setAttribute(r, n), this._$Em = null;
    }
  }
  _$AK(t, e) {
    const i = this.constructor, r = i._$Eh.get(t);
    if (r !== void 0 && this._$Em !== r) {
      const n = i.getPropertyOptions(r), s = typeof n.converter == "function" ? { fromAttribute: n.converter } : n.converter?.fromAttribute !== void 0 ? n.converter : m;
      this._$Em = r;
      const a = s.fromAttribute(e, n.type);
      this[r] = a ?? this._$Ej?.get(r) ?? a, this._$Em = null;
    }
  }
  requestUpdate(t, e, i, r = !1, n) {
    if (t !== void 0) {
      const s = this.constructor;
      if (r === !1 && (n = this[t]), i ??= s.getPropertyOptions(t), !((i.hasChanged ?? _)(n, e) || i.useDefault && i.reflect && n === this._$Ej?.get(t) && !this.hasAttribute(s._$Eu(t, i)))) return;
      this.C(t, e, i);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: i, reflect: r, wrapped: n }, s) {
    i && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t) && (this._$Ej.set(t, s ?? e ?? this[t]), n !== !0 || s !== void 0) || (this._$AL.has(t) || (this.hasUpdated || i || (e = void 0), this._$AL.set(t, e)), r === !0 && this._$Em !== t && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t));
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
        for (const [r, n] of this._$Ep) this[r] = n;
        this._$Ep = void 0;
      }
      const i = this.constructor.elementProperties;
      if (i.size > 0) for (const [r, n] of i) {
        const { wrapped: s } = n, a = this[r];
        s !== !0 || this._$AL.has(r) || a === void 0 || this.C(r, void 0, n, a);
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
}
f.elementStyles = [], f.shadowRootOptions = { mode: "open" }, f[b("elementProperties")] = /* @__PURE__ */ new Map(), f[b("finalized")] = /* @__PURE__ */ new Map(), F?.({ ReactiveElement: f }), (v.reactiveElementVersions ??= []).push("2.1.2");
const H = { attribute: !0, type: String, converter: m, reflect: !1, hasChanged: _ }, J = (o = H, t, e) => {
  const { kind: i, metadata: r } = e;
  let n = globalThis.litPropertyMetadata.get(r);
  if (n === void 0 && globalThis.litPropertyMetadata.set(r, n = /* @__PURE__ */ new Map()), i === "setter" && ((o = Object.create(o)).wrapped = !0), n.set(e.name, o), i === "accessor") {
    const { name: s } = e;
    return { set(a) {
      const x = t.get.call(this);
      t.set.call(this, a), this.requestUpdate(s, x, o, !0, a);
    }, init(a) {
      return a !== void 0 && this.C(s, void 0, o, a), a;
    } };
  }
  if (i === "setter") {
    const { name: s } = e;
    return function(a) {
      const x = this[s];
      t.call(this, a), this.requestUpdate(s, x, o, !0, a);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function l(o) {
  return (t, e) => typeof e == "object" ? J(o, t, e) : ((i, r, n) => {
    const s = r.hasOwnProperty(n);
    return r.constructor.createProperty(n, i), s ? Object.getOwnPropertyDescriptor(r, n) : void 0;
  })(o, t, e);
}
const V = (o, t, e) => (e.configurable = !0, e.enumerable = !0, Reflect.decorate && typeof t != "object" && Object.defineProperty(o, t, e), e);
function G(o, t) {
  return (e, i, r) => {
    const n = (s) => s.renderRoot?.querySelector(o) ?? null;
    return V(e, i, { get() {
      return n(this);
    } });
  };
}
const Z = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-300:oklch(80.8% .114 19.571);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-emerald-300:oklch(84.5% .143 164.978);--color-emerald-600:oklch(59.6% .145 163.225);--color-zinc-50:oklch(98.5% 0 0);--color-zinc-100:oklch(96.7% .001 286.375);--color-zinc-200:oklch(92% .004 286.32);--color-zinc-300:oklch(87.1% .006 286.286);--color-zinc-400:oklch(70.5% .015 286.067);--color-zinc-500:oklch(55.2% .016 285.938);--color-zinc-600:oklch(44.2% .017 285.786);--color-zinc-700:oklch(37% .013 285.805);--color-zinc-800:oklch(27.4% .006 286.033);--color-zinc-900:oklch(21% .006 285.885);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-md:28rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--font-weight-medium:500;--font-weight-semibold:600;--radius-lg:.5rem;--radius-xl:.75rem;--radius-2xl:1rem;--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.z-50{z-index:50}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-4{margin-top:calc(var(--spacing)*4)}.mr-2{margin-right:calc(var(--spacing)*2)}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.block{display:block}.flex{display:flex}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.h-4{height:calc(var(--spacing)*4)}.h-8{height:calc(var(--spacing)*8)}.h-10{height:calc(var(--spacing)*10)}.h-12{height:calc(var(--spacing)*12)}.w-4{width:calc(var(--spacing)*4)}.w-full{width:100%}.max-w-md{max-width:var(--container-md)}.animate-spin{animation:var(--animate-spin)}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-2{gap:calc(var(--spacing)*2)}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-xl{border-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-emerald-300{border-color:var(--color-emerald-300)}.border-red-300{border-color:var(--color-red-300)}.border-white\\/40{border-color:#fff6}@supports (color:color-mix(in lab,red,red)){.border-white\\/40{border-color:color-mix(in oklab,var(--color-white)40%,transparent)}}.border-zinc-200{border-color:var(--color-zinc-200)}.border-t-white{border-top-color:var(--color-white)}.bg-black{background-color:var(--color-black)}.bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){.bg-black\\/40{background-color:color-mix(in oklab,var(--color-black)40%,transparent)}}.bg-red-600{background-color:var(--color-red-600)}.bg-white{background-color:var(--color-white)}.p-4{padding:calc(var(--spacing)*4)}.p-5{padding:calc(var(--spacing)*5)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-5{padding-inline:calc(var(--spacing)*5)}.py-1{padding-block:calc(var(--spacing)*1)}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-black{color:var(--color-black)}.text-emerald-600{color:var(--color-emerald-600)}.text-red-600{color:var(--color-red-600)}.text-white{color:var(--color-white)}.text-zinc-500{color:var(--color-zinc-500)}.text-zinc-600{color:var(--color-zinc-600)}.text-zinc-700{color:var(--color-zinc-700)}.text-zinc-800{color:var(--color-zinc-800)}.text-zinc-900{color:var(--color-zinc-900)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;user-select:none}@media(hover:hover){.hover\\:bg-red-500:hover{background-color:var(--color-red-500)}.hover\\:bg-zinc-50:hover{background-color:var(--color-zinc-50)}.hover\\:bg-zinc-100:hover{background-color:var(--color-zinc-100)}.hover\\:bg-zinc-800:hover{background-color:var(--color-zinc-800)}}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-emerald-300:focus{--tw-ring-color:var(--color-emerald-300)}.focus\\:ring-red-300:focus{--tw-ring-color:var(--color-red-300)}.focus\\:ring-zinc-300:focus{--tw-ring-color:var(--color-zinc-300)}.focus\\:ring-zinc-400:focus{--tw-ring-color:var(--color-zinc-400)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:bg-zinc-50:disabled{background-color:var(--color-zinc-50)}.disabled\\:opacity-50:disabled{opacity:.5}}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@keyframes spin{to{transform:rotate(360deg)}}', E = M`${A(Z)}`;
function z(o, t, e, i) {
  const r = new CustomEvent(String(t), {
    detail: e,
    bubbles: !0,
    composed: !0
  });
  return o.dispatchEvent(r), r;
}
var Q = Object.defineProperty, X = Object.getOwnPropertyDescriptor, g = (o, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? X(t, e) : t, n = o.length - 1, s; n >= 0; n--)
    (s = o[n]) && (r = (i ? s(t, e, r) : s(r)) || r);
  return i && r && Q(t, e, r), r;
};
const Y = "inline-flex items-center justify-center rounded-xl font-medium transition select-none focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed", tt = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-5 text-base"
}, et = {
  primary: "bg-black text-white hover:bg-zinc-800 focus:ring-zinc-400",
  secondary: "bg-white text-black border border-zinc-200 hover:bg-zinc-50 focus:ring-zinc-300",
  danger: "bg-red-600 text-white hover:bg-red-500 focus:ring-red-300"
}, it = (...o) => o.filter(Boolean).join(" ");
let h = class extends k {
  constructor() {
    super(...arguments), this.variant = "primary", this.size = "md", this.disabled = !1, this.loading = !1, this.onClick = () => {
      this.disabled || this.loading || z(this, "lit-button:click", { variant: this.variant, size: this.size });
    };
  }
  render() {
    const o = it(
      Y,
      tt[this.size],
      et[this.variant]
    );
    return d`
      <button
        class=${o}
        ?disabled=${this.disabled || this.loading}
        @click=${this.onClick}
      >
        ${this.loading ? d`<span
              class="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
            ></span>` : null}
        <slot></slot>
      </button>
    `;
  }
};
h.styles = [E];
g([
  l({ type: String })
], h.prototype, "variant", 2);
g([
  l({ type: String })
], h.prototype, "size", 2);
g([
  l({ type: Boolean, reflect: !0 })
], h.prototype, "disabled", 2);
g([
  l({ type: Boolean })
], h.prototype, "loading", 2);
h = g([
  $("lit-button")
], h);
var ot = Object.defineProperty, rt = Object.getOwnPropertyDescriptor, p = (o, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? rt(t, e) : t, n = o.length - 1, s; n >= 0; n--)
    (s = o[n]) && (r = (i ? s(t, e, r) : s(r)) || r);
  return i && r && ot(t, e, r), r;
};
const nt = {
  error: "focus:ring-red-300 border-red-300",
  success: "focus:ring-emerald-300 border-emerald-300",
  default: "focus:ring-zinc-300 border-zinc-200"
}, st = {
  error: "text-red-600",
  success: "text-emerald-600",
  default: "text-zinc-500"
};
let c = class extends k {
  constructor() {
    super(...arguments), this.label = "", this.placeholder = "", this.value = "", this.disabled = !1, this.state = "default", this.helperText = "", this.onInput = (o) => {
      const t = o.target.value;
      this.value = t, z(this, "lit-input:change", { value: t });
    };
  }
  render() {
    const o = nt[this.state], t = st[this.state];
    return d`
      <label class="block">
        ${this.label ? d`<span class="mb-1 block text-sm font-medium text-zinc-800"
              >${this.label}</span
            >` : null}

        <input
          class="h-10 w-full rounded-xl border bg-white px-3 text-sm outline-none transition disabled:cursor-not-allowed disabled:bg-zinc-50 ${o}"
          .value=${this.value}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.onInput}
        />

        ${this.helperText ? d`<span class="mt-1 block text-xs ${t}"
              >${this.helperText}</span
            >` : null}
      </label>
    `;
  }
};
c.styles = [E];
p([
  l({ type: String })
], c.prototype, "label", 2);
p([
  l({ type: String })
], c.prototype, "placeholder", 2);
p([
  l({ type: String })
], c.prototype, "value", 2);
p([
  l({ type: Boolean })
], c.prototype, "disabled", 2);
p([
  l({ type: String })
], c.prototype, "state", 2);
p([
  l({ type: String })
], c.prototype, "helperText", 2);
c = p([
  $("lit-input")
], c);
function at(o) {
  return (t) => {
    t.key === "Escape" && o(t);
  };
}
var lt = Object.defineProperty, ct = Object.getOwnPropertyDescriptor, y = (o, t, e, i) => {
  for (var r = i > 1 ? void 0 : i ? ct(t, e) : t, n = o.length - 1, s; n >= 0; n--)
    (s = o[n]) && (r = (i ? s(t, e, r) : s(r)) || r);
  return i && r && lt(t, e, r), r;
};
let u = class extends k {
  constructor() {
    super(...arguments), this.open = !1, this.title = "", this.handleWindowKeyDown = (o) => {
      this.open && at(() => this.close("escape"))(o);
    }, this.onBackdropClick = () => this.close("backdrop"), this.onCloseButtonClick = () => this.close("button");
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("keydown", this.handleWindowKeyDown, { capture: !0 });
  }
  disconnectedCallback() {
    window.removeEventListener("keydown", this.handleWindowKeyDown, { capture: !0 }), super.disconnectedCallback();
  }
  close(o) {
    this.open && (this.open = !1, z(this, "lit-modal:close", { reason: o }));
  }
  updated(o) {
    o.has("open") && this.open && queueMicrotask(() => this.dialogEl?.focus());
  }
  render() {
    return this.open ? d`
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
    ` : d``;
  }
};
u.styles = [E];
y([
  l({ type: Boolean, reflect: !0 })
], u.prototype, "open", 2);
y([
  l({ type: String })
], u.prototype, "title", 2);
y([
  G("#dialog")
], u.prototype, "dialogEl", 2);
u = y([
  $("lit-modal")
], u);
