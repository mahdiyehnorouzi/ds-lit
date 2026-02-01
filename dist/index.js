import { unsafeCSS as m, css as x, LitElement as f, html as c } from "lit";
import { property as n, customElement as g, query as y } from "lit/decorators.js";
const k = '@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-red-300:oklch(80.8% .114 19.571);--color-red-500:oklch(63.7% .237 25.331);--color-red-600:oklch(57.7% .245 27.325);--color-emerald-300:oklch(84.5% .143 164.978);--color-emerald-600:oklch(59.6% .145 163.225);--color-zinc-50:oklch(98.5% 0 0);--color-zinc-100:oklch(96.7% .001 286.375);--color-zinc-200:oklch(92% .004 286.32);--color-zinc-300:oklch(87.1% .006 286.286);--color-zinc-400:oklch(70.5% .015 286.067);--color-zinc-500:oklch(55.2% .016 285.938);--color-zinc-600:oklch(44.2% .017 285.786);--color-zinc-700:oklch(37% .013 285.805);--color-zinc-800:oklch(27.4% .006 286.033);--color-zinc-900:oklch(21% .006 285.885);--color-black:#000;--color-white:#fff;--spacing:.25rem;--container-md:28rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-base:1rem;--text-base--line-height: 1.5 ;--font-weight-medium:500;--font-weight-semibold:600;--radius-lg:.5rem;--radius-xl:.75rem;--radius-2xl:1rem;--animate-spin:spin 1s linear infinite;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}}@layer components;@layer utilities{.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.static{position:static}.inset-0{inset:calc(var(--spacing)*0)}.z-50{z-index:50}.mt-1{margin-top:calc(var(--spacing)*1)}.mt-4{margin-top:calc(var(--spacing)*4)}.mr-2{margin-right:calc(var(--spacing)*2)}.mb-1{margin-bottom:calc(var(--spacing)*1)}.mb-3{margin-bottom:calc(var(--spacing)*3)}.block{display:block}.flex{display:flex}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.h-4{height:calc(var(--spacing)*4)}.h-8{height:calc(var(--spacing)*8)}.h-10{height:calc(var(--spacing)*10)}.h-12{height:calc(var(--spacing)*12)}.w-4{width:calc(var(--spacing)*4)}.w-full{width:100%}.max-w-md{max-width:var(--container-md)}.animate-spin{animation:var(--animate-spin)}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.justify-end{justify-content:flex-end}.gap-2{gap:calc(var(--spacing)*2)}.rounded-2xl{border-radius:var(--radius-2xl)}.rounded-full{border-radius:3.40282e38px}.rounded-lg{border-radius:var(--radius-lg)}.rounded-xl{border-radius:var(--radius-xl)}.border{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-emerald-300{border-color:var(--color-emerald-300)}.border-red-300{border-color:var(--color-red-300)}.border-white\\/40{border-color:#fff6}@supports (color:color-mix(in lab,red,red)){.border-white\\/40{border-color:color-mix(in oklab,var(--color-white)40%,transparent)}}.border-zinc-200{border-color:var(--color-zinc-200)}.border-t-white{border-top-color:var(--color-white)}.bg-black{background-color:var(--color-black)}.bg-black\\/40{background-color:#0006}@supports (color:color-mix(in lab,red,red)){.bg-black\\/40{background-color:color-mix(in oklab,var(--color-black)40%,transparent)}}.bg-red-600{background-color:var(--color-red-600)}.bg-white{background-color:var(--color-white)}.p-4{padding:calc(var(--spacing)*4)}.p-5{padding:calc(var(--spacing)*5)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-3{padding-inline:calc(var(--spacing)*3)}.px-4{padding-inline:calc(var(--spacing)*4)}.px-5{padding-inline:calc(var(--spacing)*5)}.py-1{padding-block:calc(var(--spacing)*1)}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-black{color:var(--color-black)}.text-emerald-600{color:var(--color-emerald-600)}.text-red-600{color:var(--color-red-600)}.text-white{color:var(--color-white)}.text-zinc-500{color:var(--color-zinc-500)}.text-zinc-600{color:var(--color-zinc-600)}.text-zinc-700{color:var(--color-zinc-700)}.text-zinc-800{color:var(--color-zinc-800)}.text-zinc-900{color:var(--color-zinc-900)}.shadow-xl{--tw-shadow:0 20px 25px -5px var(--tw-shadow-color,#0000001a),0 8px 10px -6px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.ring{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(1px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;user-select:none}@media(hover:hover){.hover\\:bg-red-500:hover{background-color:var(--color-red-500)}.hover\\:bg-zinc-50:hover{background-color:var(--color-zinc-50)}.hover\\:bg-zinc-100:hover{background-color:var(--color-zinc-100)}.hover\\:bg-zinc-800:hover{background-color:var(--color-zinc-800)}}.focus\\:ring-2:focus{--tw-ring-shadow:var(--tw-ring-inset,)0 0 0 calc(2px + var(--tw-ring-offset-width))var(--tw-ring-color,currentcolor);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.focus\\:ring-emerald-300:focus{--tw-ring-color:var(--color-emerald-300)}.focus\\:ring-red-300:focus{--tw-ring-color:var(--color-red-300)}.focus\\:ring-zinc-300:focus{--tw-ring-color:var(--color-zinc-300)}.focus\\:ring-zinc-400:focus{--tw-ring-color:var(--color-zinc-400)}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px;--tw-ring-offset-shadow:var(--tw-ring-inset,)0 0 0 var(--tw-ring-offset-width)var(--tw-ring-offset-color)}.focus\\:outline-none:focus{--tw-outline-style:none;outline-style:none}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:bg-zinc-50:disabled{background-color:var(--color-zinc-50)}.disabled\\:opacity-50:disabled{opacity:.5}}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@keyframes spin{to{transform:rotate(360deg)}}', w = x`${m(k)}`;
var z = Object.defineProperty, C = Object.getOwnPropertyDescriptor, u = (t, e, r, i) => {
  for (var o = i > 1 ? void 0 : i ? C(e, r) : e, a = t.length - 1, l; a >= 0; a--)
    (l = t[a]) && (o = (i ? l(e, r, o) : l(o)) || o);
  return i && o && z(e, r, o), o;
};
let d = class extends f {
  constructor() {
    super(...arguments), this.variant = "primary", this.size = "md", this.disabled = !1, this.loading = !1, this.forwarding = !1, this.handleInnerClick = (t) => {
      if (this.disabled || this.loading) {
        t.preventDefault(), t.stopPropagation();
        return;
      }
      this.forwarding || (this.forwarding = !0, this.dispatchEvent(
        new MouseEvent("click", {
          bubbles: !0,
          composed: !0,
          cancelable: !0
        })
      ), this.forwarding = !1);
    };
  }
  render() {
    const t = this.size === "sm" ? "h-8 px-3 text-sm" : this.size === "lg" ? "h-12 px-5 text-base" : "h-10 px-4 text-sm", e = this.variant === "secondary" ? "bg-white text-black border border-zinc-200 hover:bg-zinc-50 focus:ring-zinc-300" : this.variant === "danger" ? "bg-red-600 text-white hover:bg-red-500 focus:ring-red-300" : "bg-black text-white hover:bg-zinc-800 focus:ring-zinc-400";
    return c`
      <button
        class="inline-flex items-center justify-center rounded-xl font-medium transition select-none focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${t} ${e}"
        ?disabled=${this.disabled || this.loading}
        @click=${this.handleInnerClick}
      >
        ${this.loading ? c`<span
              class="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
            ></span>` : null}
        <slot></slot>
      </button>
    `;
  }
};
d.styles = [w];
u([
  n({ type: String })
], d.prototype, "variant", 2);
u([
  n({ type: String })
], d.prototype, "size", 2);
u([
  n({ type: Boolean, reflect: !0 })
], d.prototype, "disabled", 2);
u([
  n({ type: Boolean })
], d.prototype, "loading", 2);
d = u([
  g("lit-button")
], d);
function v(t, e, r, i) {
  const o = new CustomEvent(String(e), {
    detail: r,
    bubbles: !0,
    composed: !0
  });
  return t.dispatchEvent(o), o;
}
var $ = Object.defineProperty, j = Object.getOwnPropertyDescriptor, p = (t, e, r, i) => {
  for (var o = i > 1 ? void 0 : i ? j(e, r) : e, a = t.length - 1, l; a >= 0; a--)
    (l = t[a]) && (o = (i ? l(e, r, o) : l(o)) || o);
  return i && o && $(e, r, o), o;
};
const S = {
  error: "focus:ring-red-300 border-red-300",
  success: "focus:ring-emerald-300 border-emerald-300",
  default: "focus:ring-zinc-300 border-zinc-200"
}, E = {
  error: "text-red-600",
  success: "text-emerald-600",
  default: "text-zinc-500"
};
let s = class extends f {
  constructor() {
    super(...arguments), this.label = "", this.placeholder = "", this.value = "", this.disabled = !1, this.state = "default", this.helperText = "", this.onInput = (t) => {
      const e = t.target.value;
      this.value = e, v(this, "lit-input:change", { value: e });
    };
  }
  render() {
    const t = S[this.state], e = E[this.state];
    return c`
      <label class="block">
        ${this.label ? c`<span class="mb-1 block text-sm font-medium text-zinc-800"
              >${this.label}</span
            >` : null}

        <input
          class="h-10 w-full rounded-xl border bg-white px-3 text-sm outline-none transition disabled:cursor-not-allowed disabled:bg-zinc-50 ${t}"
          .value=${this.value}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${this.onInput}
        />

        ${this.helperText ? c`<span class="mt-1 block text-xs ${e}"
              >${this.helperText}</span
            >` : null}
      </label>
    `;
  }
};
s.styles = [w];
p([
  n({ type: String })
], s.prototype, "label", 2);
p([
  n({ type: String })
], s.prototype, "placeholder", 2);
p([
  n({ type: String })
], s.prototype, "value", 2);
p([
  n({ type: Boolean })
], s.prototype, "disabled", 2);
p([
  n({ type: String })
], s.prototype, "state", 2);
p([
  n({ type: String })
], s.prototype, "helperText", 2);
s = p([
  g("lit-input")
], s);
function _(t) {
  return (e) => {
    e.key === "Escape" && t(e);
  };
}
var O = Object.defineProperty, P = Object.getOwnPropertyDescriptor, b = (t, e, r, i) => {
  for (var o = i > 1 ? void 0 : i ? P(e, r) : e, a = t.length - 1, l; a >= 0; a--)
    (l = t[a]) && (o = (i ? l(e, r, o) : l(o)) || o);
  return i && o && O(e, r, o), o;
};
let h = class extends f {
  constructor() {
    super(...arguments), this.open = !1, this.title = "", this.handleWindowKeyDown = (t) => {
      this.open && _(() => this.close("escape"))(t);
    }, this.onBackdropClick = () => this.close("backdrop"), this.onCloseButtonClick = () => this.close("button");
  }
  connectedCallback() {
    super.connectedCallback(), window.addEventListener("keydown", this.handleWindowKeyDown, { capture: !0 });
  }
  disconnectedCallback() {
    window.removeEventListener("keydown", this.handleWindowKeyDown, { capture: !0 }), super.disconnectedCallback();
  }
  close(t) {
    this.open && (this.open = !1, v(this, "lit-modal:close", { reason: t }));
  }
  updated(t) {
    t.has("open") && this.open && queueMicrotask(() => this.dialogEl?.focus());
  }
  render() {
    return this.open ? c`
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
    ` : c``;
  }
};
h.styles = [w];
b([
  n({ type: Boolean, reflect: !0 })
], h.prototype, "open", 2);
b([
  n({ type: String })
], h.prototype, "title", 2);
b([
  y("#dialog")
], h.prototype, "dialogEl", 2);
h = b([
  g("lit-modal")
], h);
