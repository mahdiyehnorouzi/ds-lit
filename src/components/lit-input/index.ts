import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { unsafeCSS } from "lit";

import styles from "./lit-input.css?inline";

type InputState = "default" | "error" | "success";

@customElement("lit-input")
export class LitInput extends LitElement {
  static styles = css`${unsafeCSS(styles)}`;

  @property({ type: String }) label = "";
  @property({ type: String }) placeholder = "";
  @property({ type: String }) value = "";
  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) state: InputState = "default";
  @property({ type: String }) helperText = "";

  private emit(value: string) {
    this.dispatchEvent(
      new CustomEvent("lit-input", {
        detail: { value },
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    const inputClasses = classMap({
      input: true,
      [`state-${this.state}`]: true,
    });

    const helperClasses = classMap({
      helper: true,
      [this.state]: true,
    });

    return html`
      <label class="label">
        ${this.label
          ? html`<span class="label-text">${this.label}</span>`
          : null}

        <input
          class=${inputClasses}
          .value=${this.value}
          ?disabled=${this.disabled}
          placeholder=${this.placeholder}
          @input=${(e: Event) => {
            const v = (e.target as HTMLInputElement).value;
            this.value = v;
            this.emit(v);
          }}
        />

        ${this.helperText
          ? html`<span class=${helperClasses}>${this.helperText}</span>`
          : null}
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-input": LitInput;
  }
}
