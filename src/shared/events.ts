import type { LitEventMap } from "./event-map";

export function emit<K extends keyof LitEventMap>(
  target: EventTarget,
  type: K,
  detail: LitEventMap[K],
  init?: Omit<CustomEventInit, "detail">
) {
  const event = new CustomEvent(String(type), {
    detail,
    bubbles: true,
    composed: true,
    ...init,
  });
  target.dispatchEvent(event);
  return event;
}
