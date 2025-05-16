import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';

// ✅ ESM-compatible replacement for __dirname
// @ts-ignore
const __filename = fileURLToPath(import.meta.url);

export default defineConfig({
  plugins: [react()]
});
