import Reveal from './Reveal'

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
      <>Contributed to <b>8 architectural walkthrough animations</b> and independently executed a complete residential walkthrough end-to-end: scene prep, lighting, camera animation, rendering and post-production.</>,
    ],
  },
]

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
              <span className="tl-dot" />
              <div className="tl-head">
                <div>
                  <div className="tl-role">{r.role}</div>
                  <div className="tl-co">{r.company} · {r.place}</div>
                </div>
                <div className="tl-period">{r.period}</div>
              </div>
              <ul className="tl-list">
                {r.points.map((pt, i) => <li key={i}>{pt}</li>)}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
