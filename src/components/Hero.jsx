import { motion } from 'framer-motion'
import { ArrowUpRight, Quote } from 'lucide-react'
import helloImg from '../logos/hello.png'
import resumePdf from '../logos/GuruPrasath_Resume.pdf'

const rise = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] } }),
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <span className="hero__glow hero__glow--a" />
      <span className="hero__glow hero__glow--b" />
      <span className="hero__dots hero__dots--tr" />
      <span className="hero__dots hero__dots--bl" />

      <div className="container hero__grid">
        <div className="hero__intro">
          <motion.img
            className="hero__hello"
            src={helloImg}
            alt="Hello, I'm"
            width="420"
            height="148"
            variants={rise}
            initial="hidden"
            animate="show"
            custom={0}
          />

          <motion.h1 className="hero__title" variants={rise} initial="hidden" animate="show" custom={1}>
            <span className="line">Guru</span>
            <span className="line"><em>Prasath</em></span>
          </motion.h1>

          <motion.p className="hero__role" variants={rise} initial="hidden" animate="show" custom={2}>
            3D Architectural Visualizer
          </motion.p>

          <span className="hero__rule" />

          <motion.p className="hero__sub" variants={rise} initial="hidden" animate="show" custom={3}>
            I craft <strong>photorealistic renders</strong> and{' '}
            <strong>real-time walkthroughs</strong> that win client approval &mdash; from raw CAD
            to client-ready visuals for residential, commercial and hospitality spaces.
          </motion.p>

          <motion.blockquote className="hero__quote" variants={rise} initial="hidden" animate="show" custom={4}>
            <Quote />
            <p>Great visualization doesn&rsquo;t just show a design, it helps people feel the space before it exists.</p>
          </motion.blockquote>

          <motion.div className="hero__actions" variants={rise} initial="hidden" animate="show" custom={5}>
            <a href="#work" className="btn btn--primary">
              Explore my work <ArrowUpRight />
            </a>
            <a
              href={resumePdf}
              download="GuruPrasath_Resume.pdf"
              className="btn btn--ghost"
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
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero__portrait"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="portrait-frame">
            <img src="/assets/img/guru_photo.png" alt="Portrait of S. Guru Prasath" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
