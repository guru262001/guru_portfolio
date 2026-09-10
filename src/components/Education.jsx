import { GraduationCap, Languages } from 'lucide-react'
import Reveal from './Reveal'
import auraImage from '../designs/Exterior/Villa View 01.jpg'

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

const LANGS = [
  { name: 'Tamil', level: 'Native' },
  { name: 'English', level: 'Professional' },
  { name: 'Telugu', level: 'Conversational' },
]

export default function Education() {
  return (
    <section className="section" id="education">
      <div className="aura" aria-hidden="true"><img src={auraImage} alt="" loading="lazy" /></div>
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Education &amp; Languages</span>
          <h2 className="section-title section-title--gold">Trained for the pipeline.</h2>
          <p className="section-lead">
            A strong academic foundation and continuous learning that power my
            visualization workflow and attention to detail.
          </p>
        </Reveal>

        <div className="edu-grid">
          {EDU.map((e, i) => (
            <Reveal className="edu-card" key={e.title} delay={i * 90}>
              <div className="edu-card__rail">
                <span className="edu-card__badge"><GraduationCap /></span>
              </div>

              <div className="edu-card__body">
                <span className="edu-card__yr">{e.yr}</span>
                <h4>{e.title}</h4>
                <div className="school">{e.school}</div>
                <div className="edu-card__rule" />
                <p>{e.desc}</p>
              </div>

              <span className="edu-card__glyph"><GraduationCap /></span>
            </Reveal>
          ))}
        </div>

        {/* <Reveal className="langs">
          <span className="pill" style={{ borderColor: 'var(--gold-line)', color: 'var(--gold)' }}>
            <Languages size={15} /> Languages
          </span>
          {LANGS.map((l) => (
            <div className="lang" key={l.name}>
              <b>{l.name}</b>
              <span>{l.level}</span>
            </div>
          ))}
        </Reveal> */}
      </div>
    </section>
  )
}
