import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages: set VITE_BASE to "/<repo>/" for project sites, or "/" for <user>.github.io
const rawBase = process.env.VITE_BASE
const base =
  rawBase != null && rawBase !== ''
    ? rawBase.endsWith('/')
      ? rawBase
      : `${rawBase}/`
    : './'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base,
})
