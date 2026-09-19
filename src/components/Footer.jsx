import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import logo from '../logos/gp.png'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <motion.div
          className="brand"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          <img className="brand__mark" src={logo} alt="" width="56" height="52" />
          <span>
            <span className="brand__name">S. Guru Prasath</span>
            <span className="brand__role">3D Architectural Visualizer</span>
          </span>
        </motion.div>
        <p>
          © {new Date().getFullYear()} S. Guru Prasath · Chennai, Tamil Nadu, India
          <br />
          All rights reserved.
        </p>
        <motion.a
          href="#top"
          className="to-top"
          whileHover={{ y: -2, color: 'var(--gold)' }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        >
          Back to top{' '}
          <motion.span
            whileHover={{ y: -3, borderColor: 'var(--gold-line)' }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          >
            <ArrowUp size={15} />
          </motion.span>
        </motion.a>
      </div>
    </footer>
  )
}

