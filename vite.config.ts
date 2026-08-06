import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const rootDir = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  // App lives in /web; production build is committed to /docs for GitHub Pages
  // (repo Pages source is legacy: main branch, folder `/`).
  root: path.resolve(rootDir, 'web'),
  publicDir: path.resolve(rootDir, 'public'),
  // Served at https://emmanueld14.github.io/my-website/docs/
  base: '/my-website/docs/',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(rootDir, 'web/src'),
    },
  },
  build: {
    outDir: path.resolve(rootDir, 'docs'),
    emptyOutDir: true,
  },
  server: {
    // Dev server at http://localhost:5173/my-website/docs/
    fs: {
      allow: [rootDir],
    },
  },
})
