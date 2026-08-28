# Guru Prasath — 3D Architectural Visualizer · Portfolio

A dark, cinematic React portfolio with a **built-in interactive 3D/2D showcase**.
Clients click any project and orbit the actual 3D model, view stills, or play a
walkthrough — right inside the site.

## Run it

```bash
npm install
npm run dev
```

Open the printed URL (usually `http://localhost:5173`).

Build for production and preview:

```bash
npm run build
npm run preview
```

Deploy the `/dist` folder to Netlify, Vercel, or GitHub Pages (any static host).

---

## ⭐ Adding your work — each folder is a collection

Everything in the gallery comes from folders in `src/designs/`. **No code to edit.**
**Each folder = one collection card** with a cover thumbnail. Clicking it opens a
**carousel** of everything inside (photos + interactive 3D + video).

```
src/designs/
   Interior/                 ← a collection card called "Interior"
      _cover.jpg             ← optional cover (else the first photo is the cover)
      living-01.jpg          ← each photo is a carousel slide (name them 01,02… to order)
      living-02.jpg
   Exterior/
      Villa.glb              ← a .glb becomes an interactive 3D slide
      Villa.jpg              ← same-named image = that model's thumbnail (optional)
      street.jpg
```

- **Add a collection** → make a new folder (e.g. `Restaurant Project/`).
- **Add photos** → drop image files into a folder. That's it.
- **File types:** `.glb`/`.gltf` → interactive 3D · images → photo · `.mp4`/`.webm` → video.
- A collection containing any `.glb` is tagged **3D**; the rest are **2D** — filters build
  themselves (All / 3D Models / 2D Renders).
- Restart `npm run dev` if newly-added files don't show up live.

**No-code way to upload** (recommended for Guru): put the project on GitHub, then use
the website file uploader — open a folder under `src/designs/`, drag images in, commit.
Netlify/Vercel rebuilds automatically. GitHub becomes the "admin".

Optional descriptions live in [`src/data/designMeta.js`](src/data/designMeta.js) (keyed by folder name).

### Exporting your 3ds Max scenes to 3D (`.glb`)

Browsers can't open `.max` files — export to **glTF/GLB**, the web 3D standard:

1. **Best:** install the free **Babylon.js glTF exporter** for 3ds Max, then
   `File → Export → glTF/GLB (.glb)`.
2. Or export **`.fbx`** / **`.obj`** and convert to `.glb` free at
   <https://products.aspose.app/3d/conversion> or in Blender (`Import FBX → Export glTF`).
3. Keep models light (decimate high-poly, bake textures) so they load fast for clients.

The demo `Cantilever Villa.glb` is a placeholder — replace it with your real exports,
and swap the blueprint sample images for your renders.

---

## Other things you can change

- **Your photo:** replace `public/assets/img/guru_photo.png` (portrait, ~4:5 works best).
- **Tool logos** (beside your name + in the strip): the tiles in
  `public/assets/logos/` are stylized stand-ins. Drop in real logo files with the
  same names to replace them, or edit the list in [`src/data/tools.js`](src/data/tools.js).
- **Colors / fonts / spacing:** CSS variables at the top of [`src/index.css`](src/index.css).
- **GitHub Pages project site?** set `base: '/<repo-name>/'` in `vite.config.js`.

Built with React + Vite. 3D viewer: Google `<model-viewer>`. Motion: Framer Motion.
