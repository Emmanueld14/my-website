import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  // Source app in /web; production files are synced to repo root for GitHub Pages
  // (Pages source: branch main, folder `/` → https://emmanueld14.github.io/my-website/)
  root: path.resolve(rootDir, 'web'),
  publicDir: path.resolve(rootDir, 'public'),
  base: '/my-website/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(rootDir, 'web/src'),
    },
  },
  build: {
    outDir: path.resolve(rootDir, 'dist'),
    emptyOutDir: true,
  },
  server: {
    fs: {
      allow: [rootDir],
    },
  },
})
