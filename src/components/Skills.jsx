import Reveal from './Reveal'

const SOFTWARE = ['3ds Max', 'V-Ray', 'Chaos Vantage', 'D5 Render', 'Adobe Photoshop', 'AutoCAD', 'Premiere Pro']

const EXPERTISE = [
  'Exterior Rendering',
  'Interior Visualization',
  'Walkthrough Animation',
  'Lighting & Material Setup',
  'Photorealistic Rendering',
  'Real-Time Visualization',
]

const SOFT = ['Creative Thinking', 'Attention to Detail', 'Problem Solving', 'Time Management', 'Team Collaboration']

const GROUPS = [
  { label: 'Software', items: SOFTWARE },
  { label: 'Visualization', items: EXPERTISE },
  { label: 'Strengths', items: SOFT },
]

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Capabilities</span>
          <h2 className="section-title">Software &amp; <em>visualization</em> craft</h2>
        </Reveal>

        <div className="skill-groups">
          {GROUPS.map((g, i) => (
            <Reveal className="skill-group" key={g.label} delay={i * 80}>
              <span className="skill-group__label">{g.label}</span>
              <div className="chips">
                {g.items.map((name) => <span className="chip" key={name}>{name}</span>)}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
