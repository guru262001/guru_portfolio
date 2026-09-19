import { motion } from 'framer-motion'
import {
  Building2,
  Sofa,
  Video,
  Lightbulb,
  Image as ImageIcon,
  Gauge,
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

const SOFTWARE = [
  { name: '3ds Max', subtitle: '3D Modeling', logo: maxLogo },
  { name: 'V-Ray', subtitle: 'Rendering', logo: vrayLogo },
  { name: 'Chaos Vantage', subtitle: 'Real-time Rendering', logo: chaosVantageLogo },
  { name: 'D5 Render', subtitle: 'Real-time Visualization', logo: d5Logo },
  { name: 'Adobe Photoshop', subtitle: 'Post-production', logo: photoshopLogo },
  { name: 'Premiere Pro', subtitle: 'Video Editing', logo: premiereLogo },
  { name: 'AutoCAD', subtitle: 'CAD Drawings', logo: autocadLogo },
  { name: 'Chaos Anima', subtitle: 'Crowd Simulation', logo: animaLogo },
]

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

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
}

const cardItemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Skills() {
  return (
    <section className="section skills-section" id="skills">
      <div className="container">
        {/* HEADER */}
        <Reveal className="skills-header">
          <span className="eyebrow">Capabilities</span>
          <h2 className="skills-title">
            Software &amp; <em>visualization</em> craft.
          </h2>
          <p className="skills-intro">
            The tools I use and the skills I bring together to create
            photorealistic architectural visuals and immersive experiences.
          </p>
        </Reveal>

        {/* SOFTWARE */}
        <div className="skills-group">
          <span className="skills-label">Software</span>
          <motion.div
            className="software-grid"
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {SOFTWARE.map((software) => (
              <motion.div
                className="software-card"
                key={software.name}
                variants={cardItemVariants}
                whileHover={{ y: -6, scale: 1.025, borderColor: 'var(--gold)' }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
              >
                <motion.div
                  className="software-logo"
                  whileHover={{ scale: 1.15, rotate: 2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 18 }}
                >
                  <img src={software.logo} alt={`${software.name} logo`} />
                </motion.div>
                <div className="software-info">
                  <h3>{software.name}</h3>
                  <p>{software.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* DIVIDER */}
        <div className="skills-divider" />

        {/* VISUALIZATION EXPERTISE */}
        <div className="skills-group">
          <span className="skills-label">Visualization Expertise</span>
          <motion.div
            className="expertise-grid"
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {EXPERTISE.map((item) => (
              <motion.div
                className="expertise-card"
                key={item.title}
                variants={cardItemVariants}
                whileHover={{ y: -5, borderColor: 'var(--gold-line)' }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
              >
                <motion.div
                  className="expertise-icon"
                  whileHover={{ scale: 1.16, rotate: [0, -8, 8, 0] }}
                  transition={{ duration: 0.35 }}
                >
                  {item.icon}
                </motion.div>
                <div className="expertise-content">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}