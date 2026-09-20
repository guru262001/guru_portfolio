/* ============================================================
   AUTO COLLECTIONS
   ------------------------------------------------------------
   Each folder inside src/designs/ becomes a collection card with a cover
   thumbnail. Clicking it opens a carousel of everything inside.

   YOUTUBE VIDEOS: Paste your YouTube URL in PUBLIC_VIDEOS below.
   Supports:  https://youtu.be/VIDEO_ID
              https://www.youtube.com/watch?v=VIDEO_ID
   ============================================================ */
import { DESIGN_META } from './designMeta.js'

// ─── PASTE YOUR YOUTUBE LINKS HERE ───────────────────────────────────────────
// Add one entry per video. title = label shown in the carousel.
const PUBLIC_VIDEOS = {
  'Walkthroughs & Animation': [
    { type: 'youtube', src: 'https://youtu.be/48aN_wgShak', title: 'Luxury Interior' },
    // { type: 'youtube', src: 'https://youtu.be/ANOTHER_ID', title: 'Walkthrough 02' },
  ],
}
// ─────────────────────────────────────────────────────────────────────────────

// Extract YouTube video ID from any YouTube URL format
export function getYouTubeId(url) {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([^?&/#]+)/)
  return m ? m[1] : null
}

// Get the best available thumbnail for a YouTube video
export function getYouTubeThumbnail(url) {
  const id = getYouTubeId(url)
  return id ? `https://img.youtube.com/vi/${id}/maxresdefault.jpg` : null
}

// Get the embed URL (with autoplay + rel=0 to hide suggestions)
export function getYouTubeEmbed(url) {
  const id = getYouTubeId(url)
  return id ? `https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1` : null
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

  // Inject public/YouTube videos for this collection
  const publicVids = PUBLIC_VIDEOS[folder] || []
  for (const v of publicVids) {
    const poster = v.type === 'youtube' ? getYouTubeThumbnail(v.src) : (v.poster || null)
    items.unshift({ ...v, poster })
  }

  if (!items.length) continue

  // models first (showcase), then photos in name order
  items.sort((a, b) => (b.type === 'model') - (a.type === 'model') || a.title.localeCompare(b.title))

  const has3D = items.some((i) => i.type === 'model')
  const kind = has3D ? '3D' : '2D'
  const cover = coverEntry?.url || items.find((i) => i.poster)?.poster || null
  const coverYoutube = !cover ? items.find((i) => i.type === 'youtube')?.src ?? null : null
  const coverVideo = !cover && !coverYoutube ? items.find((i) => i.type === 'video')?.src ?? null : null
  const meta = DESIGN_META[folder] || DESIGN_META[titleCase(folder)] || {}
  const title = meta.title || folder

  COLLECTIONS.push({
    id: slug(folder),
    title,
    kind,
    cover,
    coverVideo,
    coverYoutube,
    category: meta.category || (has3D ? 'Interactive 3D' : 'Architectural Visualization'),
    count: items.length,
    models: items.filter((i) => i.type === 'model').length,
    photos: items.filter((i) => i.type === 'image').length,
    videos: items.filter((i) => i.type === 'video' || i.type === 'youtube').length,
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
  const items = vids.map((v) => ({
    ...v,
    poster: v.type === 'youtube' ? getYouTubeThumbnail(v.src) : (v.poster || null),
  }))
  const firstYoutube = items.find((i) => i.type === 'youtube')
  const coverYoutube = firstYoutube?.src ?? null
  const cover = items.find((i) => i.poster)?.poster ?? null
  const coverVideo = !coverYoutube ? items.find((i) => i.type === 'video')?.src ?? null : null
  COLLECTIONS.push({
    id,
    title: meta.title || folder,
    kind: '2D',
    cover,
    coverVideo,
    coverYoutube,
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
