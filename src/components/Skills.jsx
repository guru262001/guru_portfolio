import {
  Building2,
  Sofa,
  Video,
  Lightbulb,
  Image as ImageIcon,
  Gauge,
  Target,
  Puzzle,
  Clock3,
  Users,
} from 'lucide-react'

import Reveal from './Reveal'

import maxLogo from '../logos/3dmax.png'
import vrayLogo from '../logos/vray.png'
import chaosVantageLogo from '../logos/chaosvantage.png'
import d5Logo from '../logos/d5.png'
import photoshopLogo from '../logos/photoshop.png'
import autocadLogo from '../logos/autocad.png'
import premiereLogo from '../logos/premier.png'
import animaLogo from '../logos/chaosanime.png'


/* ============================================================
   SOFTWARE
   ============================================================ */

const SOFTWARE = [
  {
    name: '3ds Max',
    subtitle: '3D Modeling',
    logo: maxLogo,
  },
  {
    name: 'V-Ray',
    subtitle: 'Rendering',
    logo: vrayLogo,
  },
  {
    name: 'Chaos Vantage',
    subtitle: 'Real-time Rendering',
    logo: chaosVantageLogo,
  },
  {
    name: 'D5 Render',
    subtitle: 'Real-time Visualization',
    logo: d5Logo,
  },
  {
    name: 'Adobe Photoshop',
    subtitle: 'Post-production',
    logo: photoshopLogo,
  },
  {
    name: 'Premiere Pro',
    subtitle: 'Video Editing',
    logo: premiereLogo,
  },
  {
    name: 'AutoCAD',
    subtitle: 'CAD Drawings',
    logo: autocadLogo,
  },
  {
    name: 'Chaos Anima',
    subtitle: 'Crowd Simulation',
    logo: animaLogo,
  },
]


/* ============================================================
   VISUALIZATION EXPERTISE
   ============================================================ */

const EXPERTISE = [
  {
    icon: <Building2 />,
    title: 'Exterior Rendering',
    text: 'Photorealistic exterior visualizations with accurate lighting and environment.',
  },
  {
    icon: <Sofa />,
    title: 'Interior Visualization',
    text: 'Realistic interiors that capture materials, mood and ambiance.',
  },
  {
    icon: <Video />,
    title: 'Walkthrough Animation',
    text: 'Cinematic animations that bring spaces to life and help clients connect.',
  },
  {
    icon: <Lightbulb />,
    title: 'Lighting & Material Setup',
    text: 'Physically accurate lighting and materials for stunning realism and consistency.',
  },
  {
    icon: <ImageIcon />,
    title: 'Photorealistic Rendering',
    text: 'High-quality stills with rich details, composition and visual storytelling.',
  },
  {
    icon: <Gauge />,
    title: 'Real-Time Visualization',
    text: 'Interactive real-time renders for quick decisions and immersive presentations.',
  },
]


/* ============================================================
   CORE STRENGTHS
   ============================================================ */

const STRENGTHS = [
  {
    icon: <Lightbulb />,
    title: 'Creative Thinking',
    text: 'Turning ideas into impactful visual stories.',
  },
  {
    icon: <Target />,
    title: 'Attention to Detail',
    text: 'Focusing on the little things that create great visuals.',
  },
  {
    icon: <Puzzle />,
    title: 'Problem Solving',
    text: 'Finding smart solutions to visual and technical challenges.',
  },
  {
    icon: <Clock3 />,
    title: 'Time Management',
    text: 'Delivering quality work within the right timeline.',
  },
  {
    icon: <Users />,
    title: 'Team Collaboration',
    text: 'Working closely with teams to achieve the best outcome.',
  },
]


/* ============================================================
   SKILLS COMPONENT
   ============================================================ */

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">

      <div className="container">


        {/* ======================================================
            HEADER
        ====================================================== */}

        <Reveal className="skills-header">

          <span className="eyebrow">
            Capabilities
          </span>

          <h2 className="skills-title">
            Software &amp; <em>visualization</em> craft.
          </h2>

          <p className="skills-intro">
            The tools I use and the skills I bring together to create
            photorealistic architectural visuals and immersive experiences.
          </p>

        </Reveal>


        {/* ======================================================
            SOFTWARE
        ====================================================== */}

        <Reveal className="skills-group">

          <span className="skills-label">
            Software
          </span>

          <div className="software-grid">

            {SOFTWARE.map((software) => (

              <div
                className="software-card"
                key={software.name}
              >

                <div className="software-logo">

                  <img
                    src={software.logo}
                    alt={`${software.name} logo`}
                  />

                </div>


                <div className="software-info">

                  <h3>
                    {software.name}
                  </h3>

                  <p>
                    {software.subtitle}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </Reveal>


        {/* ======================================================
            DIVIDER
        ====================================================== */}

        <div className="skills-divider" />


        {/* ======================================================
            VISUALIZATION EXPERTISE
        ====================================================== */}

        <Reveal className="skills-group">

          <span className="skills-label">
            Visualization Expertise
          </span>

          <div className="expertise-grid">

            {EXPERTISE.map((item) => (

              <div
                className="expertise-card"
                key={item.title}
              >

                <div className="expertise-icon">
                  {item.icon}
                </div>


                <div className="expertise-content">

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </Reveal>


        {/* ======================================================
            DIVIDER
        ====================================================== */}

        <div className="skills-divider" />


        {/* ======================================================
            CORE STRENGTHS
        ====================================================== */}

        <Reveal className="skills-group">

          <span className="skills-label">
            Core Strengths
          </span>

          <div className="strength-grid">

            {STRENGTHS.map((item) => (

              <div
                className="strength-card"
                key={item.title}
              >

                <div className="strength-icon">
                  {item.icon}
                </div>


                <div>

                  <h3>
                    {item.title}
                  </h3>

                  <p>
                    {item.text}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </Reveal>

      </div>

    </section>
  )
}