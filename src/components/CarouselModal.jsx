import { useEffect, useState, useCallback, useRef } from 'react'
import { motion } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Rotate3d, Box, Play, Film } from 'lucide-react'
import { useLockBodyScroll } from '../hooks'

/* model-viewer is heavy (~300kb) — load it only when a 3D slide is shown */
let mvPromise = null
const ensureModelViewer = () => (mvPromise ||= import('@google/model-viewer'))

function Stage({ item }) {
  const [mvReady, setMvReady] = useState(false)
  useEffect(() => {
    let alive = true
    if (item.type === 'model') ensureModelViewer().then(() => alive && setMvReady(true))
    return () => { alive = false }
  }, [item.type, item.src])

  if (item.type === 'model') {
    return (
      <div className="lightbox__media">
        {mvReady ? (
          <model-viewer
            src={item.src}
            alt={`Interactive 3D model — ${item.title}`}
            camera-controls=""
            loading="eager"
            reveal="auto"
            auto-rotate=""
            auto-rotate-delay="200"
            rotation-per-second="16deg"
            interaction-prompt="none"
            shadow-intensity="1.1"
            shadow-softness="0.9"
            exposure="1.05"
            environment-image="neutral"
            camera-orbit="35deg 72deg auto"
            max-camera-orbit="auto 92deg auto"
            ar
            ar-modes="webxr scene-viewer quick-look"
            style={{ width: '100%', height: '100%' }}
          />
        ) : (
          <div className="lb-loading"><Rotate3d /> Loading 3D…</div>
        )}
        <span className="viewer-hint"><Rotate3d /> Drag to orbit · scroll to zoom</span>
      </div>
    )
  }

  if (item.type === 'video') {
    return (
      <div className="lightbox__media">
        {item.src ? (
          <video src={item.src} poster={item.poster} controls autoPlay playsInline />
        ) : (
          <div className="video-empty">
            {item.poster && <img src={item.poster} alt="" aria-hidden="true" />}
            <div className="video-empty__note">
              <div className="ic"><Film /></div>
              <p style={{ fontWeight: 600, color: 'var(--text)' }}>Walkthrough reel</p>
              <p style={{ color: 'var(--text-mut)', fontSize: '0.9rem' }}>Drop an .mp4 in this collection folder to play it here.</p>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="lightbox__media">
      <img src={item.src} alt={item.title} />
    </div>
  )
}

function ThumbIcon({ type }) {
  if (type === 'model') return <Box />
  if (type === 'video') return <Play />
  return null
}

export default function CarouselModal({ collection, index, onIndex, onClose }) {
  useLockBodyScroll(true)
  const closeRef = useRef(null)
  const thumbsRef = useRef(null)
  const items = collection.items
  const item = items[index]

  const go = useCallback(
    (dir) => onIndex((index + dir + items.length) % items.length),
    [index, items.length, onIndex]
  )

  useEffect(() => { closeRef.current?.focus({ preventScroll: true }) }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') go(1)
      else if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [go, onClose])

  // keep active thumbnail in view
  useEffect(() => {
    const el = thumbsRef.current?.querySelector('.lb-thumb.is-active')
    el?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }, [index])

  if (!item) return null

  return (
    <motion.div className="modal-root" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div className="modal__backdrop" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
      <motion.div
        className="lightbox"
        role="dialog"
        aria-modal="true"
        aria-label={collection.title}
        initial={{ opacity: 0, y: 24, scale: 0.99 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.99 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="lightbox__bar">
          <div className="lightbox__meta">
            <span className="lightbox__kind">{collection.kind === '3D' ? '3D Collection' : 'Gallery'}</span>
            <h3 className="lightbox__title">{collection.title}</h3>
          </div>
          <div className="lightbox__right">
            <span className="lightbox__count"><b>{index + 1}</b> / {items.length}</span>
            <button className="modal__close" onClick={onClose} aria-label="Close" ref={closeRef} style={{ position: 'static' }}>
              <X size={22} />
            </button>
          </div>
        </div>

        <div className="lightbox__stage">
          {items.length > 1 && (
            <button className="lb-arrow lb-arrow--prev" onClick={() => go(-1)} aria-label="Previous"><ChevronLeft /></button>
          )}
          <Stage item={item} key={index} />
          {items.length > 1 && (
            <button className="lb-arrow lb-arrow--next" onClick={() => go(1)} aria-label="Next"><ChevronRight /></button>
          )}
        </div>

        {items.length > 1 && (
          <div className="lb-thumbs" ref={thumbsRef}>
            {items.map((it, i) => (
              <button
                key={i}
                className={`lb-thumb ${i === index ? 'is-active' : ''}`}
                onClick={() => onIndex(i)}
                aria-label={`View ${it.title}`}
              >
                {it.poster ? <img src={it.poster} alt="" loading="lazy" /> : <span className="lb-thumb__ph"><Box /></span>}
                {it.type !== 'image' && <span className="lb-thumb__badge"><ThumbIcon type={it.type} /></span>}
              </button>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
