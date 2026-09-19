import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import Reveal from './Reveal'
import auraImage from '../designs/Residential Exteriors/Villa View 01.jpg'

const EDU = [
  {
    yr: '2024 — 2025',
    title: 'Master Diploma in Architectural Design',
    school: 'Cadfx Institute, Vadapalani, Chennai',
    desc: 'Comprehensive training in architectural visualization, rendering pipelines, spatial design and industry-standard software with studio-based learning.',
  },
  {
    yr: '2018 — 2022',
    title: 'B.Sc. (Hons.) Agriculture',
    school: 'Mother Teresa College of Agriculture, Pudukkottai, Tamil Nadu',
    desc: 'Undergraduate degree that built the analytical rigor and discipline that I now apply to visualization and design.',
  },
]

export default function Education() {
  return (
    <section className="section" id="education">
      <motion.div
        className="aura"
        aria-hidden="true"
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.04, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img src={auraImage} alt="" loading="lazy" />
      </motion.div>
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Education &amp; Background</span>
          <h2 className="section-title section-title--gold">Trained for the pipeline.</h2>
          <p className="section-lead">
            A strong academic foundation and continuous learning that power my
            visualization workflow and attention to detail.
          </p>
        </Reveal>

        <div className="edu-grid">
          {EDU.map((e, i) => (
            <motion.div
              className="edu-card"
              key={e.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, borderColor: 'var(--gold-line)' }}
            >
              <div className="edu-card__rail">
                <motion.span
                  className="edu-card__badge"
                  whileHover={{ scale: 1.12, rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.35 }}
                >
                  <GraduationCap />
                </motion.span>
              </div>

              <div className="edu-card__body">
                <span className="edu-card__yr">{e.yr}</span>
                <h4>{e.title}</h4>
                <div className="school">{e.school}</div>
                <div className="edu-card__rule" />
                <p>{e.desc}</p>
              </div>

              <span className="edu-card__glyph"><GraduationCap /></span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

