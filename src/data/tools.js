/* Tool logos beside the name + in the marquee.

   ▶ TO ADD / CHANGE A LOGO: drop an image into  src/logos/
     Any image type (.png .webp .jpg .svg) and loose names work — the loader
     matches by name, so "3dmax.png", "premier.png", "photoshop.webp",
     "chaosvantage.png" all resolve to the right tool automatically.
     A tool with no matching file is simply skipped. */

const files = import.meta.glob('../logos/*.{png,webp,jpg,jpeg,avif,svg}', {
  eager: true, query: '?url', import: 'default',
})

const norm = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '')
const byKey = {}
for (const p in files) {
  const base = p.split('/').pop().replace(/\.[^.]+$/, '')
  byKey[norm(base)] = files[p]
}

// display order + the name variants each logo file might be saved as
const CATALOG = [
  { name: '3ds Max',       keys: ['3dsmax', '3dmax', '3ds', 'max', 'autodesk3dsmax'] },
  { name: 'V-Ray',         keys: ['vray', 'vrayrender'] },
  { name: 'Chaos Vantage', keys: ['chaosvantage', 'vantage'] },
  { name: 'Chaos Anima',   keys: ['chaosanima', 'chaosanime', 'anima', 'anime'] },
  { name: 'D5 Render',     keys: ['d5render', 'd5'] },
  { name: 'Photoshop',     keys: ['photoshop', 'adobephotoshop', 'ps'] },
  { name: 'AutoCAD',       keys: ['autocad', 'acad'] },
  { name: 'Premiere Pro',  keys: ['premierepro', 'premiere', 'premier', 'pr'] },
]

export const TOOLS = CATALOG
  .map((t) => ({ name: t.name, logo: t.keys.map((k) => byKey[k]).find(Boolean) }))
  .filter((t) => t.logo)
