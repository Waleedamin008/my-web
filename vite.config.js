import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss()
  ],
  base: process.env.VITE_BASE_URL || '/my-web',
})
