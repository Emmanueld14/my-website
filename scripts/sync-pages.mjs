import { cpSync, mkdirSync, rmSync, existsSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const dist = path.join(root, 'dist')

if (!existsSync(path.join(dist, 'index.html'))) {
  console.error('dist/index.html missing — run npm run build first')
  process.exit(1)
}

// Sync built site to repo root for GitHub Pages
const index = readFileSync(path.join(dist, 'index.html'), 'utf8')
writeFileSync(path.join(root, 'index.html'), index)

const assetsOut = path.join(root, 'assets')
rmSync(assetsOut, { recursive: true, force: true })
mkdirSync(assetsOut, { recursive: true })
cpSync(path.join(dist, 'assets'), assetsOut, { recursive: true })

// Public static folders (photos, etc.)
for (const dir of ['images']) {
  const from = path.join(dist, dir)
  if (!existsSync(from)) continue
  const to = path.join(root, dir)
  rmSync(to, { recursive: true, force: true })
  cpSync(from, to, { recursive: true })
}

for (const file of ['.nojekyll', 'favicon.svg', 'resume.pdf']) {
  const from = path.join(dist, file)
  if (existsSync(from)) {
    cpSync(from, path.join(root, file))
  }
}

console.log('Synced dist/ → repo root for GitHub Pages')
