/* ============================================================
   AUTO COLLECTIONS
   ------------------------------------------------------------
   Each folder inside src/designs/ becomes a collection card with a cover
   thumbnail. Clicking it opens a carousel of everything inside.

   LARGE VIDEOS: Videos >10 MB live in public/videos/ and are referenced
   via PUBLIC_VIDEOS below (served as static files, NOT bundled by Vite).
   ============================================================ */
import { DESIGN_META } from './designMeta.js'

// Map of  collectionFolderName → array of public video items
// Each item: { src: '/videos/file.mp4', poster: null, title: 'My Walkthrough' }
const PUBLIC_VIDEOS = {
  'Walkthroughs & Animation': [
    { src: '/videos/walkthrough_01.mp4', poster: null, title: 'Walkthrough 01' },
  ],
}

const files = import.meta.glob(
  '../designs/**/*.{glb,gltf,jpg,jpeg,png,webp,avif,svg}',
  { eager: true, query: '?url', import: 'default' }
)

const isModel = (e) => /^(glb|gltf)$/i.test(e)
const isImage = (e) => /^(jpe?g|png|webp|avif|svg)$/i.test(e)

const pretty = (s) => s.replace(/_+/g, ' ').replace(/\s+/g, ' ').trim()
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

const CAT_ORDER = {
  'Walkthroughs & Animation': 1,
  'Residential Exteriors': 2,
  'Residential Interiors': 3,
  'Multi-Residential': 4,
  'Commercial Exteriors': 5,
  'Commercial Interiors': 6,
  'Hospitality': 7,
  'Isometric & 360°': 8,
}

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
    const image = es.find((e) => isImage(e.ext))
    const title = titleCase(base)
    if (model) items.push({ type: 'model', src: model.url, poster: image?.url ?? null, title })
    else if (image) items.push({ type: 'image', src: image.url, poster: image.url, title })
  }

  // Inject public (unbundled) videos for this collection
  const publicVids = PUBLIC_VIDEOS[folder] || []
  for (const v of publicVids) items.unshift({ type: 'video', ...v })

  if (!items.length) continue

  // models first (showcase), then photos in name order
  items.sort((a, b) => (b.type === 'model') - (a.type === 'model') || a.title.localeCompare(b.title))

  const has3D = items.some((i) => i.type === 'model')
  const kind = has3D ? '3D' : '2D'
  const cover = coverEntry?.url || items.find((i) => i.poster)?.poster || null
  const coverVideo = cover ? null : items.find((i) => i.type === 'video')?.src ?? null
  const meta = DESIGN_META[folder] || DESIGN_META[titleCase(folder)] || {}
  const title = meta.title || folder

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

// Second pass: create collections for PUBLIC_VIDEOS folders that had no glob-discovered files
const existingIds = new Set(COLLECTIONS.map((c) => c.id))
for (const [folder, vids] of Object.entries(PUBLIC_VIDEOS)) {
  if (!vids.length) continue
  const id = slug(folder)
  if (existingIds.has(id)) continue // already created above
  const meta = DESIGN_META[folder] || {}
  const items = vids.map((v) => ({ type: 'video', ...v }))
  const coverVideo = items[0]?.src ?? null
  COLLECTIONS.push({
    id,
    title: meta.title || folder,
    kind: '2D',
    cover: null,
    coverVideo,
    category: meta.category || 'Motion · Real-Time Animation',
    count: items.length,
    models: 0,
    photos: 0,
    videos: items.length,
    description: meta.description || '',
    items,
  })
}

// Strictly order the 8 folders as requested: 1 to 8
COLLECTIONS.sort(
  (a, b) =>
    (CAT_ORDER[a.title] || 99) - (CAT_ORDER[b.title] || 99) ||
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
