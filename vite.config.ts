import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Default `./` keeps asset URLs relative so the built site works under GitHub Pages /docs
// (and if you open /repo/docs/). Override with VITE_BASE e.g. "/repo/" if you need absolute paths.
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
