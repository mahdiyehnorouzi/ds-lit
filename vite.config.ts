import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
      fileName: () => "index.js",
    },
    cssCodeSplit: false,
    rollupOptions: {
      external: [
        "lit",
        "lit/*",
        "lit-html",
        "lit-html/*",
        "@lit/reactive-element",
        "@lit/reactive-element/*",
      ],
    },
  },
});
