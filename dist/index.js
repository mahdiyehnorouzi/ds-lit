import { unsafeCSS as M, css as A, LitElement as x, html as d } from "lit";
const k = (r) => (t, e) => {
  e !== void 0 ? e.addInitializer(() => {
    customElements.define(r, t);
  }) : customElements.define(r, t);
};
const w = globalThis, $ = w.ShadowRoot && (w.ShadyCSS === void 0 || w.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, U = /* @__PURE__ */ Symbol(), S = /* @__PURE__ */ new WeakMap();
let T = class {
  constructor(t, e, i) {
    if (this._$cssResult$ = !0, i !== U) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if ($ && t === void 0) {
      const i = e !== void 0 && e.length === 1;
      i && (t = S.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), i && S.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const R = (r) => new T(typeof r == "string" ? r : r + "", void 0, U), D = (r, t) => {
  if ($) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const i = document.createElement("style"), o = w.litNonce;
    o !== void 0 && i.setAttribute("nonce", o), i.textContent = e.cssText, r.appendChild(i);
  }
}, P = $ ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const i of t.cssRules) e += i.cssText;
  return R(e);
})(r) : r;
const { is: L, defineProperty: N, getOwnPropertyDescriptor: q, getOwnPropertyNames: B, getOwnPropertySymbols: I, getPrototypeOf: K } = Object, v = globalThis, C = v.trustedTypes, W = C ? C.emptyScript : "", F = v.reactiveElementPolyfillSupport, f = (r, t) => r, m = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? W : null;
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
} }, E = (r, t) => !L(r, t), O = { attribute: !0, type: String, converter: m, reflect: !1, useDefault: !1, hasChanged: E };
Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), v.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
class u extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ??= []).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = O) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const i = /* @__PURE__ */ Symbol(), o = this.getPropertyDescriptor(t, i, e);
      o !== void 0 && N(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, e, i) {
    const { get: o, set: s } = q(this.prototype, t) ?? { get() {
      return this[e];
    }, set(n) {
      this[e] = n;
    } };
    return { get: o, set(n) {
      const a = o?.call(this);
      s?.call(this, n), this.requestUpdate(t, a, i);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? O;
  }
  static _$Ei() {
    if (this.hasOwnProperty(f("elementProperties"))) return;
    const t = K(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(f("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(f("properties"))) {
      const e = this.properties, i = [...B(e), ...I(e)];
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
      for (const o of i) e.unshift(P(o));
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
    return D(t, this.constructor.elementStyles), t;
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
      const s = (i.converter?.toAttribute !== void 0 ? i.converter : m).toAttribute(e, i.type);
      this._$Em = t, s == null ? this.removeAttribute(o) : this.setAttribute(o, s), this._$Em = null;
    }
  }
  _$AK(t, e) {
    const i = this.constructor, o = i._$Eh.get(t);
    if (o !== void 0 && this._$Em !== o) {
      const s = i.getPropertyOptions(o), n = typeof s.converter == "function" ? { fromAttribute: s.converter } : s.converter?.fromAttribute !== void 0 ? s.converter : m;
      this._$Em = o;
      const a = n.fromAttribute(e, s.type);
      this[o] = a ?? this._$Ej?.get(o) ?? a, this._$Em = null;
    }
  }
  requestUpdate(t, e, i, o = !1, s) {
    if (t !== void 0) {
      const n = this.constructor;
      if (o === !1 && (s = this[t]), i ??= n.getPropertyOptions(t), !((i.hasChanged ?? E)(s, e) || i.useDefault && i.reflect && s === this._$Ej?.get(t) && !this.hasAttribute(n._$Eu(t, i)))) return;
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
        const { wrapped: n } = s, a = this[o];
        n !== !0 || this._$AL.has(o) || a === void 0 || this.C(o, void 0, s, a);
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
u.elementStyles = [], u.shadowRootOptions = { mode: "open" }, u[f("elementProperties")] = /* @__PURE__ */ new Map(), u[f("finalized")] = /* @__PURE__ */ new Map(), F?.({ ReactiveElement: u }), (v.reactiveElementVersions ??= []).push("2.1.2");
const H = { attribute: !0, type: String, converter: m, reflect: !1, hasChanged: E }, J = (r = H, t, e) => {
  const { kind: i, metadata: o } = e;
  let s = globalThis.litPropertyMetadata.get(o);
  if (s === void 0 && globalThis.litPropertyMetadata.set(o, s = /* @__PURE__ */ new Map()), i === "setter" && ((r = Object.create(r)).wrapped = !0), s.set(e.name, r), i === "accessor") {
    const { name: n } = e;
    return { set(a) {
      const y = t.get.call(this);
      t.set.call(this, a), this.requestUpdate(n, y, r, !0, a);
    }, init(a) {
      return a !== void 0 && this.C(n, void 0, r, a), a;
    } };
  }
  if (i === "setter") {
    const { name: n } = e;
    return function(a) {
      const y = this[n];
      t.call(this, a), this.requestUpdate(n, y, r, !0, a);
    };
  }
  throw Error("Unsupported decorator location: " + i);
};
function l(r) {
  return (t, e) => typeof e == "object" ? J(r, t, e) : ((i, o, s) => {
    const n = o.hasOwnProperty(s);
    return o.constructor.createProperty(s, i), n ? Object.getOwnPropertyDescriptor(o, s) : void 0;
  })(r, t, e);
}
const j = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-300:oklch(80.8% .114 19.571);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-emerald-300:oklch(84.5% .143 164.978);--color-emerald-600:oklch(59.6% .145 163.225);--color-zinc-50:oklch(98.5% 0 0);--color-zinc-100:oklch(96.7% .001 286.375);--color-zinc-200:oklch(92% .004 286.32);--color-zinc-300:oklch(87.1% .006 286.286);--color-zinc-400:oklch(70.5% .015 286.067);--color-zinc-500:oklch(55.2% .016 285.938);--color-zinc-600:oklch(44.2% .017 285.786);--color-zinc-700:oklch(37% .013 285.805);--color-zinc-800:oklch(27.4% .006 286.033);--color-zinc-900:oklch(21% .006 285.885);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-md:28rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--font-weight-medium:500;--font-weight-semibold:600;--radius-lg:.5rem;--radius-xl:.75rem;--radius-2xl:1rem;--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.z-50{z-index:50}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-4{margin-top:calc(var(--spacing)*4)}.mr-2{margin-right:calc(var(--spacing)*2)}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.block{display:block}.flex{display:flex}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.h-4{height:calc(var(--spacing)*4)}.h-8{height:calc(var(--spacing)*8)}.h-10{height:calc(var(--spacing)*10)}.h-12{height:calc(var(--spacing)*12)}.w-4{width:calc(var(--spacing)*4)}.w-full{width:100%}.max-w-md{max-width:var(--container-md)}.animate-spin{animation:var(--animate-spin)}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-2{gap:calc(var(--spacing)*2)}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-xl{border-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-emerald-300{border-color:var(--color-emerald-300)}.border-red-300{border-color:var(--color-red-300)}.border-white\\/40{border-color:#fff6}@supports (color:color-mix(in lab,red,red)){.border-white\\/40{border-color:color-mix(in oklab,var(--color-white)40%,transparent)}}.border-zinc-200{border-color:var(--color-zinc-200)}.border-t-white{border-top-color:var(--color-white)}.bg-black{background-color:var(--color-black)}.bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){.bg-black\\/40{background-color:color-mix(in oklab,var(--color-black)40%,transparent)}}.bg-red-600{background-color:var(--color-red-600)}.bg-white{background-color:var(--color-white)}.p-4{padding:calc(var(--spacing)*4)}.p-5{padding:calc(var(--spacing)*5)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-5{padding-inline:calc(var(--spacing)*5)}.py-1{padding-block:calc(var(--spacing)*1)}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-black{color:var(--color-black)}.text-emerald-600{color:var(--color-emerald-600)}.text-red-600{color:var(--color-red-600)}.text-white{color:var(--color-white)}.text-zinc-500{color:var(--color-zinc-500)}.text-zinc-600{color:var(--color-zinc-600)}.text-zinc-700{color:var(--color-zinc-700)}.text-zinc-800{color:var(--color-zinc-800)}.text-zinc-900{color:var(--color-zinc-900)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;user-select:none}@media(hover:hover){.hover\\:bg-red-500:hover{background-color:var(--color-red-500)}.hover\\:bg-zinc-50:hover{background-color:var(--color-zinc-50)}.hover\\:bg-zinc-100:hover{background-color:var(--color-zinc-100)}.hover\\:bg-zinc-800:hover{background-color:var(--color-zinc-800)}}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-emerald-300:focus{--tw-ring-color:var(--color-emerald-300)}.focus\\:ring-red-300:focus{--tw-ring-color:var(--color-red-300)}.focus\\:ring-zinc-300:focus{--tw-ring-color:var(--color-zinc-300)}.focus\\:ring-zinc-400:focus{--tw-ring-color:var(--color-zinc-400)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:bg-zinc-50:disabled{background-color:var(--color-zinc-50)}.disabled\\:opacity-50:disabled{opacity:.5}}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@keyframes spin{to{transform:rotate(360deg)}}';
console.log("TW TEXT SAMPLE:", j.slice(0, 200));
const z = A`${M(j)}`;
var V = Object.defineProperty, X = Object.getOwnPropertyDescriptor, g = (r, t, e, i) => {
  for (var o = i > 1 ? void 0 : i ? X(t, e) : t, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = (i ? n(t, e, o) : n(o)) || o);
  return i && o && V(t, e, o), o;
};
let h = class extends x {
  constructor() {
    super(...arguments), this.variant = "primary", this.size = "md", this.disabled = !1, this.loading = !1;
  }
  render() {
    const r = "inline-flex items-center justify-center rounded-xl font-medium transition select-none focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed", t = {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4 text-sm",
      lg: "h-12 px-5 text-base"
    }, e = {
      primary: "bg-black text-white hover:bg-zinc-800 focus:ring-zinc-400",
      secondary: "bg-white text-black border border-zinc-200 hover:bg-zinc-50 focus:ring-zinc-300",
      danger: "bg-red-600 text-white hover:bg-red-500 focus:ring-red-300"
    }, i = `${r} ${t[this.size]} ${e[this.variant]}`;
    return d`
      <button class="${i}" ?disabled=${this.disabled || this.loading}>
        ${this.loading ? d`<span
              class="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
            ></span>` : null}
        <slot></slot>
      </button>
    `;
  }
};
h.styles = [z];
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
  k("lit-button")
], h);
var G = Object.defineProperty, Q = Object.getOwnPropertyDescriptor, p = (r, t, e, i) => {
  for (var o = i > 1 ? void 0 : i ? Q(t, e) : t, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = (i ? n(t, e, o) : n(o)) || o);
  return i && o && G(t, e, o), o;
};
let c = class extends x {
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
  connectedCallback() {
    super.connectedCallback(), console.log("lit-button connected", this);
  }
  firstUpdated() {
    console.log("lit-button firstUpdated", this.shadowRoot?.innerHTML);
  }
  render() {
    const r = this.state === "error" ? "focus:ring-red-300 border-red-300" : this.state === "success" ? "focus:ring-emerald-300 border-emerald-300" : "focus:ring-zinc-300 border-zinc-200", t = this.state === "error" ? "text-red-600" : this.state === "success" ? "text-emerald-600" : "text-zinc-500";
    return d`
      <label class="block">
        ${this.label ? d`<span class="mb-1 block text-sm font-medium text-zinc-800"
              >${this.label}</span
            >` : null}

        <input
          class="h-10 w-full rounded-xl border bg-white px-3 text-sm outline-none transition disabled:cursor-not-allowed disabled:bg-zinc-50 ${r}"
          .value=${this.value}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${(e) => {
      const i = e.target.value;
      this.value = i, this.emit(i);
    }}
        />

        ${this.helperText ? d`<span class="mt-1 block text-xs ${t}"
              >${this.helperText}</span
            >` : null}
      </label>
    `;
  }
};
c.styles = [z];
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
  k("lit-input")
], c);
var Y = Object.defineProperty, Z = Object.getOwnPropertyDescriptor, _ = (r, t, e, i) => {
  for (var o = i > 1 ? void 0 : i ? Z(t, e) : t, s = r.length - 1, n; s >= 0; s--)
    (n = r[s]) && (o = (i ? n(t, e, o) : n(o)) || o);
  return i && o && Y(t, e, o), o;
};
let b = class extends x {
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
    return this.open ? d`
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
    ` : d``;
  }
};
b.styles = [z];
_([
  l({ type: Boolean, reflect: !0 })
], b.prototype, "open", 2);
_([
  l({ type: String })
], b.prototype, "title", 2);
b = _([
  k("lit-modal")
], b);
export {
  h as LitButton,
  c as LitInput,
  b as LitModal
};
