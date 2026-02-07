export interface LitEventMap {
    "lit-input:change": { value: string };
    "lit-modal:close": { reason: "backdrop" | "button" | "escape" };
    "lit-button:click": { variant: string; size: string };
  }