import { GraduationCap, Languages } from 'lucide-react'
import Reveal from './Reveal'

const EDU = [
  {
    yr: '2024 — 2025',
    title: 'Master Diploma in Architectural Design',
    school: 'Cadfx Institute · Vadapalani, Chennai',
    desc: 'Comprehensive training in architectural visualization, rendering pipelines, spatial design and industry-standard software.',
  },
  {
    yr: '2018 — 2022',
    title: 'B.Sc. (Hons.) Agriculture',
    school: 'Mother Teresa College of Agriculture · Pudukkottai, TN',
    desc: 'Undergraduate degree that built the analytical rigour and discipline now applied to visualization work.',
  },
]

const LANGS = [
  { name: 'Tamil', level: 'Native' },
  { name: 'English', level: 'Professional' },
  { name: 'Telugu', level: 'Conversational' },
]

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Education &amp; Languages</span>
          <h2 className="section-title">Trained for <em>the pipeline</em></h2>
        </Reveal>

        <div className="edu-grid">
          {EDU.map((e, i) => (
            <Reveal className="edu-card" key={e.title} delay={i * 90}>
              <span className="edu-card__yr">{e.yr}</span>
              <h4>{e.title}</h4>
              <div className="school">{e.school}</div>
              <p>{e.desc}</p>
              <span className="edu-card__glyph"><GraduationCap /></span>
            </Reveal>
          ))}
        </div>

        <Reveal className="langs">
          <span className="pill" style={{ borderColor: 'var(--gold-line)', color: 'var(--gold)' }}>
            <Languages size={15} /> Languages
          </span>
          {LANGS.map((l) => (
            <div className="lang" key={l.name}>
              <b>{l.name}</b>
              <span>{l.level}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
