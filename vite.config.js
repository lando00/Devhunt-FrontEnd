import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/devHunt2": "http://192.168.137.106:8000",
    },
  },
  plugins: [react()],
});
