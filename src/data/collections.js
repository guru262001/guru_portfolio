/* ============================================================
   AUTO COLLECTIONS — you don't edit this file.
   ------------------------------------------------------------
   Each FOLDER inside  src/designs/  becomes a collection card with a cover
   thumbnail. Clicking it opens a carousel of everything inside.

     src/designs/
        Interior/            ← a collection called "Interior"
           _cover.jpg        ← optional cover (else the first photo is used)
           living-01.jpg     ← photos become carousel slides (named order sorts them)
           living-02.jpg
        Exterior/
           Villa.glb         ← a 3D model becomes an interactive slide
           Villa.jpg         ← same-named image = that model's thumbnail (optional)
           street-view.jpg

   File types:  .glb/.gltf → interactive 3D · images → photo · .mp4/.webm → video.
   Add a collection = add a folder. Add photos = drop them in the folder.
   (Restart `npm run dev` if new files don't appear live.)
   ============================================================ */
import { DESIGN_META } from './designMeta'

const files = import.meta.glob(
  '../designs/**/*.{glb,gltf,jpg,jpeg,png,webp,avif,svg,mp4,webm}',
  { eager: true, query: '?url', import: 'default' }
)

const isModel = (e) => /^(glb|gltf)$/i.test(e)
const isVideo = (e) => /^(mp4|webm)$/i.test(e)
const isImage = (e) => /^(jpe?g|png|webp|avif|svg)$/i.test(e)

const pretty = (s) => s.replace(/[_-]+/g, ' ').replace(/\s+/g, ' ').trim()
const titleCase = (s) => pretty(s).replace(/\b([a-z])/g, (_, c) => c.toUpperCase())
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

// group every file by its folder (the collection)
const folders = new Map()
for (const path in files) {
  const m = path.match(/\/designs\/([^/]+)\/(.+)\.([^./]+)$/)
  if (!m) continue
  const [, folder, base, ext] = m
  if (!folders.has(folder)) folders.set(folder, [])
  folders.get(folder).push({ base, ext: ext.toLowerCase(), url: files[path] })
}

const CAT_ORDER = { Exterior: 1, Interior: 2, Walkthrough: 3 }

const COLLECTIONS = []
for (const [folder, entries] of folders) {
  // an explicit cover (cover.jpg / _cover.jpg) — used as thumbnail only, not a slide
  const coverEntry = entries.find((e) => /^_?cover$/i.test(e.base) && isImage(e.ext))
  const rest = entries.filter((e) => e !== coverEntry)

  // pair files sharing a base name (model + its poster image)
  const byBase = new Map()
  for (const e of rest) {
    if (!byBase.has(e.base)) byBase.set(e.base, [])
    byBase.get(e.base).push(e)
  }

  const items = []
  for (const [base, es] of byBase) {
    const model = es.find((e) => isModel(e.ext))
    const video = es.find((e) => isVideo(e.ext))
    const image = es.find((e) => isImage(e.ext))
    const title = titleCase(base)
    if (model) items.push({ type: 'model', src: model.url, poster: image?.url ?? null, title })
    else if (video) items.push({ type: 'video', src: video.url, poster: image?.url ?? null, title })
    else if (image) items.push({ type: 'image', src: image.url, poster: image.url, title })
  }
  if (!items.length) continue

  // models first (showcase), then photos in name order
  items.sort((a, b) => (b.type === 'model') - (a.type === 'model') || a.title.localeCompare(b.title))

  const has3D = items.some((i) => i.type === 'model')
  const kind = has3D ? '3D' : '2D'
  const cover = coverEntry?.url || items.find((i) => i.poster)?.poster || null
  // ponytail: no still anywhere? let the card poster itself off the first video
  const coverVideo = cover ? null : items.find((i) => i.type === 'video')?.src ?? null
  const title = titleCase(folder)
  const meta = DESIGN_META[title] || {}

  COLLECTIONS.push({
    id: slug(folder),
    title,
    kind,
    cover,
    coverVideo,
    category: meta.category || (has3D ? 'Interactive 3D' : 'Architectural Visualization'),
    count: items.length,
    models: items.filter((i) => i.type === 'model').length,
    photos: items.filter((i) => i.type === 'image').length,
    videos: items.filter((i) => i.type === 'video').length,
    description: meta.description || '',
    items,
  })
}

// 3D collections first, then by preferred category order, then title
COLLECTIONS.sort(
  (a, b) =>
    (b.kind === '3D') - (a.kind === '3D') ||
    (CAT_ORDER[a.title] || 9) - (CAT_ORDER[b.title] || 9) ||
    a.title.localeCompare(b.title)
)

export { COLLECTIONS }

const has = (k) => COLLECTIONS.some((c) => c.kind === k)
export const FILTERS = ['All', ...(has('3D') ? ['3D Models'] : []), ...(has('2D') ? ['2D Renders'] : [])]

export function matchesFilter(c, f) {
  if (f === 'All') return true
  if (f === '3D Models') return c.kind === '3D'
  if (f === '2D Renders') return c.kind === '2D'
  return true
}
