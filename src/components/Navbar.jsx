import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useScrolled, useActiveSection } from '../hooks'

const LINKS = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
]

export default function Navbar() {
  const scrolled = useScrolled(20)
  const active = useActiveSection(['work', 'about', 'experience', 'skills', 'education', 'contact'])
  const [open, setOpen] = useState(false)

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="brand" aria-label="Guru Prasath — home">
          {/* <span className="brand__mark">GP</span> */}
          <span>
            <span className="brand__name">Guru Prasath</span>
            <span className="brand__role">3D Architectural Visualizer</span>
          </span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={`nav__link ${active === l.id ? 'is-active' : ''}`}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn--primary nav__cta">
          Let’s talk <ArrowUpRight />
        </a>

        <button className="nav__burger" onClick={() => setOpen(true)} aria-label="Open menu">
          <Menu size={22} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="drawer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <button className="modal__close" onClick={() => setOpen(false)} aria-label="Close menu" style={{ top: 22, right: 22 }}>
              <X size={22} />
            </button>
            <nav>
              {[...LINKS, { id: 'contact', label: 'Contact' }].map((l, i) => (
                <motion.a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i + 0.1 }}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
