// import { LitElement, html } from "lit";
// import { customElement, property } from "lit/decorators.js";
// import { tw } from "../../styles/tw";
// import { classMap } from "lit/directives/class-map.js";

// type Variant = "primary" | "secondary" | "danger";
// type Size = "sm" | "md" | "lg";

// @customElement("lit-button")
// export class LitButton extends LitElement {
//   static styles = [tw];

//   @property({ type: String }) variant: Variant = "primary";
//   @property({ type: String }) size: Size = "md";
//   @property({ type: Boolean, reflect: true }) disabled = false;
//   @property({ type: Boolean }) loading = false;

//   private base =
//     "inline-flex items-center justify-center rounded-xl font-medium transition select-none focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

//   render() {
//     const sizeCls: Record<Size, string> = {
//       sm: "h-8 px-3 text-sm",
//       md: "h-10 px-4 text-sm",
//       lg: "h-12 px-5 text-base",
//     };

//     const variantCls: Record<Variant, string> = {
//       primary: "bg-black text-white hover:bg-zinc-800 focus:ring-zinc-400",
//       secondary:
//         "bg-white text-black border border-zinc-200 hover:bg-zinc-50 focus:ring-zinc-300",
//       danger: "bg-red-600 text-white hover:bg-red-500 focus:ring-red-300",
//     };

//     const classes = classMap({
//       [this.base]: true,
//       [sizeCls[this.size]]: true,
//       [variantCls[this.variant]]: true,
//     });

//     return html`
//       <button class=${classes} ?disabled=${this.disabled || this.loading}>
//         ${this.loading
//           ? html`<span class="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"></span>`
//           : null}
//         <slot></slot>
//       </button>
//     `;
//   }
// }

// declare global {
//   interface HTMLElementTagNameMap {
//     "lit-button": LitButton;
//   }
// }


import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { tw } from "../../styles/tw";

type Variant = "primary" | "secondary" | "danger";
type Size = "sm" | "md" | "lg";

@customElement("lit-button")
export class LitButton extends LitElement {
  static styles = [tw];

  @property({ type: String }) variant: Variant = "primary";
  @property({ type: String }) size: Size = "md";
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean }) loading = false;

  render() {
    const base =
      "inline-flex items-center justify-center rounded-xl font-medium transition select-none focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const sizeCls: Record<Size, string> = {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4 text-sm",
      lg: "h-12 px-5 text-base",
    };

    const variantCls: Record<Variant, string> = {
      primary: "bg-black text-white hover:bg-zinc-800 focus:ring-zinc-400",
      secondary:
        "bg-white text-black border border-zinc-200 hover:bg-zinc-50 focus:ring-zinc-300",
      danger: "bg-red-600 text-white hover:bg-red-500 focus:ring-red-300",
    };

    const classes = `${base} ${sizeCls[this.size]} ${variantCls[this.variant]}`;

    return html`
      <button class="${classes}" ?disabled=${this.disabled || this.loading}>
        ${this.loading
          ? html`<span
              class="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
            ></span>`
          : null}
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-button": LitButton;
  }
}
