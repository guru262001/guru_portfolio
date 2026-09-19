import { motion } from 'framer-motion'
import { ArrowUpRight, Quote } from 'lucide-react'
import helloImg from '../logos/hello.png'
import resumePdf from '../logos/GuruPrasath_Resume.pdf'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <motion.span
        className="hero__glow hero__glow--a"
        animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.span
        className="hero__glow hero__glow--b"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
      <span className="hero__dots hero__dots--tr" />
      <span className="hero__dots hero__dots--bl" />

      <div className="container hero__grid">
        <motion.div
          className="hero__intro"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.img
            className="hero__hello"
            src={helloImg}
            alt="Hello, I'm"
            width="420"
            height="148"
            variants={itemVariants}
          />

          <motion.h1 className="hero__title" variants={itemVariants}>
            <span className="line">Guru</span>
            <span className="line"><em>Prasath</em></span>
          </motion.h1>

          <motion.p className="hero__role" variants={itemVariants}>
            3D Architectural Visualizer
          </motion.p>

          <motion.span className="hero__rule" variants={itemVariants} />

          <motion.p className="hero__sub" variants={itemVariants}>
            I craft <strong>photorealistic renders</strong> and{' '}
            <strong>real-time walkthroughs</strong> that win client approval &mdash; from raw CAD
            to client-ready visuals for residential, commercial and hospitality spaces.
          </motion.p>

          <motion.blockquote
            className="hero__quote"
            variants={itemVariants}
            whileHover={{ x: 4, transition: { duration: 0.25 } }}
          >
            <Quote />
            <p>Great visualization doesn&rsquo;t just show a design, it helps people feel the space before it exists.</p>
          </motion.blockquote>

          <motion.div className="hero__actions" variants={itemVariants}>
            <motion.a
              href="#work"
              className="btn btn--primary"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              Explore my work <ArrowUpRight />
            </motion.a>
            <motion.a
              href={resumePdf}
              download="GuruPrasath_Resume.pdf"
              className="btn btn--ghost"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <svg
                strokeLinejoin="round"
                strokeLinecap="round"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z" stroke="none"></path>
                <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"></path>
                <path d="M7 11l5 5l5 -5"></path>
                <path d="M12 4l0 12"></path>
              </svg>
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero__portrait"
          initial={{ opacity: 0, scale: 0.93, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="portrait-frame">
            <img src="/assets/img/guru_photo.png" alt="Portrait of S. Guru Prasath" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

