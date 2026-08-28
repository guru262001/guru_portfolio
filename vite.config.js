import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: '/' works for Netlify/Vercel/root. For GitHub Pages project sites,
// set base to '/<repo-name>/'. See README.
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: { host: true },
})
