import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { tw } from "../../styles/tw";

@customElement("lit-modal")
export class LitModal extends LitElement {
  static styles = [tw];

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: String }) title = "";

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("keydown", this.onKeyDown);
  }
  disconnectedCallback() {
    window.removeEventListener("keydown", this.onKeyDown);
    super.disconnectedCallback();
  }

  private onKeyDown = (e: KeyboardEvent) => {
    if (this.open && e.key === "Escape") this.close();
  };

  private close() {
    this.open = false;
    this.dispatchEvent(
      new CustomEvent("lit-close", { bubbles: true, composed: true })
    );
  }

  render() {
    if (!this.open) return html``;

    return html`
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
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-modal": LitModal;
  }
}
