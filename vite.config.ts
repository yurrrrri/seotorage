import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      {
        find: "@ui",
        replacement: path.resolve(__dirname, "./src/ui"),
      },
      {
        find: "@domain",
        replacement: path.resolve(__dirname, "./src/core/domain"),
      },
    ],
  },
});
