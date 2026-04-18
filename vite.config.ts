import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Default `./` keeps asset URLs relative for GitHub Pages (/docs as site root).
const rawBase = process.env.VITE_BASE
const base =
  rawBase != null && rawBase !== ''
    ? rawBase.endsWith('/')
      ? rawBase
      : `${rawBase}/`
    : './'

// https://vite.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, 'app'),
  publicDir: path.resolve(__dirname, 'public'),
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
  },
  server: {
    fs: {
      allow: [__dirname],
    },
  },
  plugins: [react(), tailwindcss()],
  base,
})
