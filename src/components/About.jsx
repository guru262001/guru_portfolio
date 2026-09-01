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
import aboutImage from '../designs/Exterior/09.jpg'

const FEATURES = [
  {
    icon: <Layers />,
    title: 'CAD to production-ready 3D',
    text: 'From drawings to detailed 3D models with precision.',
  },
  {
    icon: <Sparkles />,
    title: 'Photorealistic rendering',
    text: 'High-end visuals with accurate lighting, materials & mood.',
  },
  {
    icon: <MonitorPlay />,
    title: 'Real-time walkthroughs',
    text: 'Immersive animations that bring spaces to life.',
  },
  {
    icon: <Gauge />,
    title: 'Optimized render pipelines',
    text: 'Efficient workflows for faster turnaround without compromising quality.',
  },
]

export default function About() {
  return (
    <section className="section about-section" id="about">

      <div className="container">

        {/* =========================================
            MAIN ABOUT CONTENT
        ========================================= */}

        <div className="about-layout">

          {/* LEFT COLUMN */}
          <Reveal className="about-left">

            <span className="eyebrow">About Me</span>

            <h2 className="about-heading">
              I turn raw CAD
              <br />
              drawings into
              <br />
              <em>client-winning</em>
              <br />
              <em>visuals.</em>
            </h2>

            <div className="about-gold-line" />

            <p className="about-intro">
              With a performance-oriented mindset and a sharp eye for
              detail, I create photorealistic renders and real-time
              walkthroughs that help architects, developers and
              designers present their ideas with impact.
            </p>

            {/* FEATURE GRID */}

            <div className="about-features">

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

            </div>

          </Reveal>


          {/* VERTICAL DIVIDER */}

          <div className="about-divider" />


          {/* RIGHT COLUMN */}

          <Reveal
            className="about-right"
            delay={120}
          >

            {/* IMAGE */}

            <div className="about-image">

              <img
                src={aboutImage}
                alt="Architectural interior visualization"
                loading="lazy"
              />

              <div className="about-image-overlay" />

            </div>


            {/* TEXT */}

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
                  3ds Max, V-Ray, D5 Render,
                  Chaos Vantage and Photoshop
                </b>{' '}
                — translating floor plans and elevations into accurate,
                atmospheric scenes, then optimizing geometry and render
                settings so turnaround stays tight and deliverables
                stay sharp.
              </p>

              <div className="about-copy-line" />

              <p>
                I’m looking to bring strong rendering fundamentals to a
                growth-stage architecture or interior design firm —
                the kind of place where great visuals directly move
                approvals and sales.
              </p>

            </div>

          </Reveal>

        </div>


        {/* =========================================
            STATS BAR
        ========================================= */}

        <Reveal
          className="about-stats"
          delay={180}
        >

          <div className="about-stat">

            <div className="about-stat-icon">
              <Box />
            </div>

            <div>
              <strong>1.5+</strong>
              <span>Years Experience</span>
            </div>

          </div>


          <div className="about-stat-divider" />


          <div className="about-stat">

            <div className="about-stat-icon">
              <Layers />
            </div>

            <div>
              <strong>20+</strong>
              <span>Projects Completed</span>
            </div>

          </div>


          <div className="about-stat-divider" />


          <div className="about-stat">

            <div className="about-stat-icon">
              <Image />
            </div>

            <div>
              <strong>50+</strong>
              <span>High Quality Renders</span>
            </div>

          </div>


          <div className="about-stat-divider" />


          <div className="about-stat">

            <div className="about-stat-icon">
              <PlayCircle />
            </div>

            <div>
              <strong>8+</strong>
              <span>Walkthrough Animations</span>
            </div>

          </div>

        </Reveal>

      </div>

    </section>
  )
}