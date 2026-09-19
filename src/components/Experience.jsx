import { motion } from 'framer-motion'
import Reveal from './Reveal'
import archIcon from '../logos/arch.png'
import calendarIcon from '../logos/calendar.png'

const ROLES = [
  {
    role: 'Architectural 3D Visualizer',
    company: 'Dots Designers Pvt. Ltd.',
    place: 'Chennai',
    period: 'Feb 2025 — Present',
    points: [
      <>Delivered <b>photorealistic interior &amp; exterior renders</b> for villas, apartments, hospitality, retail and commercial projects — directly supporting client approval and sales presentations.</>,
      <>Translated CAD floor plans and elevations into production-ready 3D scenes in <b>3ds Max</b>, maintaining scale accuracy and design intent across all project types.</>,
      <>Built <b>V-Ray lighting and material libraries</b> adopted studio-wide, standardizing output quality and cutting per-project lighting setup time by <b>~25%</b>.</>,
      <>Produced <b>real-time walkthroughs in Chaos Vantage</b>, enabling live client design reviews and significantly reducing revision cycles.</>,
      <>Optimized scene geometry, proxies and render settings — <b>cutting render times by up to 20%</b> on high-poly scenes while keeping visuals client-ready.</>,
      <>Contributed to <b>8 architectural walkthrough animations</b> and independently executed a complete residential walkthrough end-to-end: scene preparation, lighting, camera animation, rendering and post-production.</>,
    ],
  },
]

const listContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
}

const listItemVariants = {
  hidden: { opacity: 0, x: -14 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Experience</span>
          <h2 className="section-title">Where the <em>work ships</em></h2>
        </Reveal>

        <div className="timeline">
          {ROLES.map((r) => (
            <Reveal className="tl-item" key={r.company}>
              <motion.span
                className="tl-dot"
                animate={{
                  scale: [1, 1.08, 1],
                  filter: [
                    'drop-shadow(0 0 0px rgba(217,164,65,0))',
                    'drop-shadow(0 0 12px rgba(217,164,65,0.65))',
                    'drop-shadow(0 0 0px rgba(217,164,65,0))',
                  ],
                }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img src={archIcon} alt="" />
              </motion.span>
              <div className="tl-head">
                <div>
                  <div className="tl-role">{r.role}</div>
                  <div className="tl-co">{r.company} · {r.place}</div>
                </div>
                <motion.div
                  className="tl-period"
                  whileHover={{ scale: 1.04, borderColor: 'var(--gold-line)' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <img src={calendarIcon} alt="" /> {r.period}
                </motion.div>
              </div>
              <motion.ul
                className="tl-list"
                variants={listContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {r.points.map((pt, i) => (
                  <motion.li
                    key={i}
                    variants={listItemVariants}
                    whileHover={{ x: 4 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    {pt}
                  </motion.li>
                ))}
              </motion.ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

