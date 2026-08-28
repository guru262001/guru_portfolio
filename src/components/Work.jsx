import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Box, Images, Layers, Maximize2 } from 'lucide-react'
import { COLLECTIONS, FILTERS, matchesFilter } from '../data/collections'
import Reveal from './Reveal'

function countLabel(c) {
  const parts = []
  if (c.models) parts.push(`${c.models} 3D model${c.models > 1 ? 's' : ''}`)
  if (c.photos) parts.push(`${c.photos} photo${c.photos > 1 ? 's' : ''}`)
  if (c.videos) parts.push(`${c.videos} video${c.videos > 1 ? 's' : ''}`)
  return parts.join(' · ')
}

export default function Work({ onOpenCollection }) {
  const [filter, setFilter] = useState('All')
  const filtered = useMemo(() => COLLECTIONS.filter((c) => matchesFilter(c, filter)), [filter])

  return (
    <section className="section" id="work">
      <div className="container">
        <Reveal className="section-head section-head--split">
          <div>
            <span className="eyebrow">Selected Work</span>
            <h2 className="section-title">
              Renders you can <em>walk into</em>
            </h2>
            <p className="section-lead">
              Photoreal interiors, exteriors and real-time walkthroughs — grouped into
              collections. Open one to flip through every shot, and orbit the 3D pieces
              live, just like a client review.
            </p>
          </div>
          {FILTERS.length > 1 && (
            <div className="filters" role="tablist" aria-label="Filter collections">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  role="tab"
                  aria-selected={filter === f}
                  className={`filter ${filter === f ? 'is-active' : ''}`}
                  onClick={() => setFilter(f)}
                >
                  {f}
                </button>
              ))}
            </div>
          )}
        </Reveal>

        <motion.div layout className="gallery">
          <AnimatePresence mode="popLayout">
            {filtered.map((c, i) => (
              <motion.div
                key={c.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="card"
              >
                <button className="card__btn" onClick={() => onOpenCollection(c)} aria-label={`Open ${c.title} collection`}>
                  <div className="card__media">
                    {c.cover ? (
                      <img src={c.cover} alt={c.title} loading="lazy" />
                    ) : (
                      <div className="card__noimg"><Box /><span>3D Collection</span></div>
                    )}
                    <span className="card__scrim" />
                    {c.kind === '3D' ? (
                      <span className="card__tag card__tag--3d"><Box /> 3D Collection</span>
                    ) : (
                      <span className="card__tag"><Images /> {c.count} {c.count > 1 ? 'shots' : 'shot'}</span>
                    )}
                    <span className="card__open"><Maximize2 /></span>
                  </div>
                  <div className="card__body">
                    <span className="card__cat">{c.kind === '3D' ? 'Interactive' : 'Gallery'}</span>
                    <h3 className="card__title">{c.title}</h3>
                    <span className="card__meta"><Layers size={15} /> {countLabel(c)}</span>
                  </div>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
