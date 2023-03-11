import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/devHunt2": "http://192.168.137.106:8000",
      "/video": "http://192.168.137.106:4000"
    },
  },
  plugins: [react()],
  // comment rediriger un lien dans outlet réagir
});
