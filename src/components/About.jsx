import { Gauge, Layers, Sparkles, MonitorPlay } from 'lucide-react'
import Reveal from './Reveal'

const PILLS = [
  { icon: <Layers />, label: 'CAD → production-ready 3D' },
  { icon: <Sparkles />, label: 'Photorealistic rendering' },
  { icon: <MonitorPlay />, label: 'Real-time client reviews' },
  { icon: <Gauge />, label: 'Optimized render pipelines' },
]

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container about">
        <Reveal className="about__intro">
          <span className="eyebrow">About</span>
          <p className="about__lead">
            I turn raw CAD drawings into <b>client-winning visuals</b> — with a
            performance-oriented mindset that keeps the studio fast without ever
            dropping the quality bar.
          </p>
          <div className="about__pills">
            {PILLS.map((p) => (
              <span className="pill" key={p.label}>{p.icon} {p.label}</span>
            ))}
          </div>
        </Reveal>

        <Reveal className="about__body" delay={120}>
          <p>
            I’m an Architectural 3D Visualizer with production experience at a Chennai-based
            design studio, delivering photorealistic renders and real-time walkthroughs for
            residential and commercial clients.
          </p>
          <p>
            I work across <b style={{ color: 'var(--text)' }}>3ds Max, V-Ray, D5 Render,
            Chaos Vantage and Photoshop</b> — translating floor plans and elevations into
            accurate, atmospheric scenes, then optimizing geometry and render settings so
            turnaround stays tight and deliverables stay sharp.
          </p>
          <p>
            I’m looking to bring strong rendering fundamentals to a growth-stage architecture
            or interior design firm — the kind of place where great visuals directly move
            approvals and sales.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
