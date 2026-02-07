import { LitElement, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import { tw } from "../../styles/tw";
import { emit } from "../../shared/events";
import { onEscape } from "../../shared/keyboards";
import type { CloseReason } from "../../shared/types";

@customElement("lit-modal")
export class LitModal extends LitElement {
  static styles = [tw];

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: String }) title = "";

  @query("#dialog")
  private dialogEl?: HTMLElement;

  private readonly handleWindowKeyDown = (e: KeyboardEvent) => {
    if (!this.open) return;
    onEscape(() => this.close("escape"))(e);
  };

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("keydown", this.handleWindowKeyDown, { capture: true });
  }

  disconnectedCallback() {
    window.removeEventListener("keydown", this.handleWindowKeyDown, { capture: true } as any);
    super.disconnectedCallback();
  }

  private close(reason: CloseReason) {
    if (!this.open) return;
    this.open = false;
    emit(this, "lit-modal:close", { reason });
  }

  protected updated(changed: Map<string, unknown>) {
    if (changed.has("open") && this.open) {
      queueMicrotask(() => this.dialogEl?.focus());
    }
  }

  render() {
    if (!this.open) return html``;

    return html`
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
    `;
  }

  private readonly onBackdropClick = () => this.close("backdrop");
  private readonly onCloseButtonClick = () => this.close("button");
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-modal": LitModal;
  }
}