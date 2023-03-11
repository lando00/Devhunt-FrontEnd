import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/devHunt2": "http://localhost:8000",
    },
  },
  plugins: [react()],
  // comment rediriger un lien dans outlet réagir
});
