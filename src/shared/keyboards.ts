export function onEscape(cb: (e: KeyboardEvent) => void) {
    return (e: KeyboardEvent) => {
      if (e.key === "Escape") cb(e);
    };
  }