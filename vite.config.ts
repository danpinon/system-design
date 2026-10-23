import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/system-design/',
  plugins: [react()],
  build: {
    sourcemap: true
  },
  css: {
    devSourcemap: true
  }
})
