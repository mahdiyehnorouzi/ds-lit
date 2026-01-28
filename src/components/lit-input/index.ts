import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { tw } from "../../styles/tw";

type InputState = "default" | "error" | "success";

@customElement("lit-input")
export class LitInput extends LitElement {
  static styles = [tw];

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

  connectedCallback() {
    super.connectedCallback();
    console.log("lit-button connected", this);
  }
  firstUpdated() {
    console.log("lit-button firstUpdated", this.shadowRoot?.innerHTML);
  }

  render() {
    const ring =
      this.state === "error"
        ? "focus:ring-red-300 border-red-300"
        : this.state === "success"
        ? "focus:ring-emerald-300 border-emerald-300"
        : "focus:ring-zinc-300 border-zinc-200";

    const helperColor =
      this.state === "error"
        ? "text-red-600"
        : this.state === "success"
        ? "text-emerald-600"
        : "text-zinc-500";

    return html`
      <label class="block">
        ${this.label
          ? html`<span class="mb-1 block text-sm font-medium text-zinc-800"
              >${this.label}</span
            >`
          : null}

        <input
          class="h-10 w-full rounded-xl border bg-white px-3 text-sm outline-none transition disabled:cursor-not-allowed disabled:bg-zinc-50 ${ring}"
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
          ? html`<span class="mt-1 block text-xs ${helperColor}"
              >${this.helperText}</span
            >`
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
