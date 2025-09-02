// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // opcional: si usas paths tipo "@/*"
  // resolve: { alias: { '@': '/src' } },
  // opcional: proxy para API local durante dev:
  // server: { proxy: { '/api': 'http://localhost:3000' } }
});
