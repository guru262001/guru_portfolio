import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { useScrolled, useActiveSection } from '../hooks'
import logo from '../logos/gp.png'

const LINKS = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
]

export default function Navbar() {
  const scrolled = useScrolled(20)
  const active = useActiveSection(['work', 'gallery', 'about', 'experience', 'skills', 'education', 'contact'])
  const activeNav = active === 'gallery' ? 'work' : active
  const [open, setOpen] = useState(false)

  return (
    <motion.header
      className={`nav ${scrolled ? 'nav--scrolled' : ''}`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="container nav__inner">
        <motion.a
          href="#top"
          className="brand"
          aria-label="Guru Prasath — home"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <img className="brand__mark" src={logo} alt="" width="58" height="54" />
          <span>
            <span className="brand__name">Guru Prasath</span>
            <span className="brand__role">3D Architectural Visualizer</span>
          </span>
        </motion.a>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`nav__link ${activeNav === l.id ? 'is-active' : ''}`}
            >
              {l.label}
              {activeNav === l.id && (
                <motion.div
                  layoutId="nav-indicator"
                  className="nav__indicator"
                  transition={{ type: 'spring', stiffness: 360, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>

        <motion.a
          href="#contact"
          className="btn btn--primary nav__cta"
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          Let’s talk <ArrowUpRight />
        </motion.a>

        <motion.button
          className="nav__burger"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          whileTap={{ scale: 0.9 }}
        >
          <Menu size={22} />
        </motion.button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            className="drawer"
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(16px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <motion.button
              className="modal__close"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              style={{ top: 22, right: 22 }}
              whileHover={{ rotate: 90, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <X size={22} />
            </motion.button>
            <nav>
              {[...LINKS, { id: 'contact', label: 'Contact' }].map((l, i) => (
                <motion.a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: 0.04 * i + 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ x: 6, color: '#d9a441' }}
                  whileTap={{ scale: 0.96 }}
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

