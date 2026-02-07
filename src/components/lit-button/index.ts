import { LitElement, html, css, unsafeCSS } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";

import styles from "./lit-button.css?inline";

type Variant = "primary" | "secondary" | "danger";
type Size = "sm" | "md" | "lg";

@customElement("lit-button")
export class LitButton extends LitElement {
  static styles = css`${unsafeCSS(styles)}`;

  @property({ type: String }) variant: Variant = "primary";
  @property({ type: String }) size: Size = "md";
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean }) loading = false;

  render() {
    const classes = classMap({
      [`size-${this.size}`]: true,
      [`variant-${this.variant}`]: true,
    });

    return html`
      <button class=${classes} ?disabled=${this.disabled || this.loading}>
        ${this.loading ? html`<span class="spinner"></span>` : null}
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
