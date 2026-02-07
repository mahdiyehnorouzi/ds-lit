export function initTheme() {
    const saved = localStorage.getItem("lit-theme");
    if (saved === "dark") document.documentElement.dataset.theme = "dark";
  }
  
  export function toggleTheme() {
    const root = document.documentElement;
    const isDark = root.dataset.theme === "dark";
  
    if (isDark) {
      root.removeAttribute("data-theme");
      localStorage.removeItem("lit-theme");
    } else {
      root.dataset.theme = "dark";
      localStorage.setItem("lit-theme", "dark");
    }
  }