import { Fragment } from 'react'
import {
  Gauge,
  Layers,
  Sparkles,
  MonitorPlay,
  Box,
  Image,
  PlayCircle,
} from 'lucide-react'
import Reveal from './Reveal'

const FEATURES = [
  {
    icon: <Layers />,
    title: 'CAD to production-ready 3D',
    text: 'From drawings to detailed 3D models.',
  },
  {
    icon: <Sparkles />,
    title: 'Photorealistic rendering',
    text: 'High-end visuals with accurate lighting.',
  },
  {
    icon: <MonitorPlay />,
    title: 'Real-time walkthroughs',
    text: 'Immersive animations that bring spaces to life.',
  },
  {
    icon: <Gauge />,
    title: 'Optimized render pipelines',
    text: 'Fast turnarounds without compromising quality.',
  },
]

const STATS = [
  { icon: <Box />, value: '1.5+', label: 'Years Experience' },
  { icon: <Layers />, value: '20+', label: 'Projects Completed' },
  { icon: <Image />, value: '50+', label: 'High Quality Renders' },
  { icon: <PlayCircle />, value: '8+', label: 'Walkthrough Animations' },
]

export default function About() {
  return (
    <section className="section about-section" id="about">

      <div className="container">

        {/* =========================================
            TOP — HEADING + COPY
        ========================================= */}

        <div className="about-layout">

          {/* LEFT COLUMN */}
          <Reveal className="about-left">

            <span className="eyebrow">About Me</span>

            <h2 className="about-heading">
              I turn raw CAD drawings
              <br />
              into <em>client-winning visuals.</em>
            </h2>

            <div className="about-gold-line" />

            <p className="about-intro">
             With a performance-oriented mindset and a sharp eye for detail, I create photorealistic renders and real-time walkthroughs that help architects, developers and designers present their ideas with impact.
            </p>

          </Reveal>


          {/* VERTICAL DIVIDER */}

          <div className="about-divider" />


          {/* RIGHT COLUMN */}

          <Reveal className="about-right" delay={120}>

            <div className="about-copy">

              <p>
                I’m an Architectural 3D Visualizer with production
                experience at a Chennai-based design studio, delivering
                photorealistic renders and real-time walkthroughs for
                residential and commercial clients.
              </p>

              <div className="about-copy-line" />

              <p>
                I work across{' '}
                <b>
                  3ds Max, V-Ray, D5 Render, Chaos Vantage
                  and Photoshop
                </b>
                {' '}— optimizing geometry and render settings so
                turnarounds stay tight and deliverables stay sharp.
              </p>

            </div>

          </Reveal>

        </div>


        {/* =========================================
            FEATURE GRID — full width
        ========================================= */}

        <Reveal className="about-features" delay={150}>

          {FEATURES.map((feature) => (
            <div className="about-feature" key={feature.title}>

              <div className="about-feature-icon">
                {feature.icon}
              </div>

              <div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>

            </div>
          ))}

        </Reveal>


        {/* =========================================
            STATS BAR
        ========================================= */}

        <Reveal className="about-stats" delay={180}>

          {STATS.map((stat, i) => (
            <Fragment key={stat.label}>
              {i > 0 && <div className="about-stat-divider" />}

              <div className="about-stat">

                <div className="about-stat-icon">
                  {stat.icon}
                </div>

                <div>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>

              </div>
            </Fragment>
          ))}

        </Reveal>

      </div>

    </section>
  )
}
