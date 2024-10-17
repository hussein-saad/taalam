import { defineConfig } from "vite";
import string from "vite-plugin-string";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    string({
      include: "**/*.md",
    }),
  ],
});
