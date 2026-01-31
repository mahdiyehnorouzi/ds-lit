import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { tw } from "../../styles/tw";
import { emit } from "../../shared/events";
import { onEscape } from "../../shared/keyboards";
import { eventOptions } from "lit/decorators/event-options.js";

@customElement("lit-modal")
export class LitModal extends LitElement {
  static styles = [tw];

  @property({ type: Boolean, reflect: true }) open = false;
  @property({ type: String }) title = "";

  private close(reason: "backdrop" | "button" | "escape") {
    this.open = false;
    emit(this, "lit-modal:close", { reason });
  }

  private onEsc = onEscape(() => {
    if (this.open) this.close("escape");
  });

  @eventOptions({ capture: true })
  private onKeyDown = (e: KeyboardEvent) => this.onEsc(e);

  render() {
    if (!this.open) return html``;

    return html`
      <div
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        aria-modal="true"
        role="dialog"
        tabindex="0"
        @keydown=${this.onKeyDown}
      >
        <button
          class="absolute inset-0 bg-black/40"
          @click=${() => this.close("backdrop")}
          aria-label="Close backdrop"
        ></button>

        <div class="relative w-full max-w-md rounded-2xl bg-white p-5 shadow-xl">
          <div class="mb-3 flex items-center justify-between">
            <h2 class="text-base font-semibold text-zinc-900">${this.title}</h2>
            <button
              class="rounded-lg px-2 py-1 text-sm text-zinc-600 hover:bg-zinc-100"
              @click=${() => this.close("button")}
            >
              ✕
            </button>
          </div>

          <div class="text-sm text-zinc-700">
            <slot></slot>
          </div>

          <div class="mt-4 flex justify-end gap-2">
            <lit-button variant="secondary" @click=${() => this.close("button")}
              >Cancel</lit-button
            >
            <lit-button @click=${() => this.close("button")}>OK</lit-button>
          </div>
        </div>
      </div>
    `;
  }

  updated(changed: Map<string, unknown>) {
    if (changed.has("open") && this.open) {
      // وقتی باز می‌شه فوکوس بگیر تا keydown کار کنه
      queueMicrotask(() => this.renderRoot.querySelector<HTMLElement>("[tabindex='0']")?.focus());
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-modal": LitModal;
  }
}
