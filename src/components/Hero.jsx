import { motion } from 'framer-motion'
import { ArrowDownRight, Sparkles } from 'lucide-react'

const rise = {
  hidden: { opacity: 0, y: 26 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.9, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] } }),
}

const STATS = [
  { num: '8', label: 'Walkthrough animations delivered' },
  { num: '25%', label: 'Faster studio-wide lighting setup' },
  { num: '20%', label: 'Reduction in render times' },
]

export default function Hero() {
  return (
    <section className="hero" id="top">
      <span className="hero__glow hero__glow--a" />
      <span className="hero__glow hero__glow--b" />
      <div className="container hero__grid">
        <div className="hero__intro">
          {/* <motion.span className="hero__status" variants={rise} initial="hidden" animate="show" custom={0}>
            <span className="dot" /> Available for freelance &amp; studio projects
          </motion.span> */}

          <motion.h1 className="hero__title" variants={rise} initial="hidden" animate="show" custom={1}>
            <span className="line">Guru</span>
            <span className="line"><em>Prasath</em></span>
          </motion.h1>

          <motion.p className="hero__sub" variants={rise} initial="hidden" animate="show" custom={2}>
            3D Architectural Visualizer crafting <strong>photorealistic renders</strong> and{' '}
            <strong>real-time walkthroughs</strong> that win client approval — from raw CAD
            to client-ready visuals for residential &amp; commercial spaces.
          </motion.p>

          <motion.div className="hero__actions" variants={rise} initial="hidden" animate="show" custom={3}>
            <a href="#work" className="btn btn--primary">
              Explore the work <ArrowDownRight />
            </a>
            <a href="#contact" className="btn btn--ghost">
              <Sparkles /> Start a project
            </a>
          </motion.div>

          <motion.div className="hero__stats" variants={rise} initial="hidden" animate="show" custom={4}>
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <div className="stat__num">{s.num}</div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="hero__portrait"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="portrait-orbit" />
          <div className="portrait-frame">
            <img src="/assets/img/guru_photo.png" alt="Portrait of S. Guru Prasath" />
            <div className="portrait-badge">
              <span className="brand__mark" style={{ width: 34, height: 34 }}>GP</span>
              <span>
                <b>Dots Designers</b>
                <span>Chennai · Since Feb 2025</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
