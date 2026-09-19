import { Fragment } from 'react'
import { motion } from 'framer-motion'
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
    text: 'From drawings to optimized, scene-ready 3D models.',
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

const featuresContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const featureItemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

const statsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const statItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

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
                residential, commercial and hospitality clients.
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
        <motion.div
          className="about-features"
          variants={featuresContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {FEATURES.map((feature) => (
            <motion.div
              className="about-feature"
              key={feature.title}
              variants={featureItemVariants}
              whileHover={{ backgroundColor: 'rgba(217, 164, 65, 0.03)', x: 4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            >
              <motion.div
                className="about-feature-icon"
                whileHover={{ scale: 1.14, rotate: [0, -6, 6, 0] }}
                transition={{ duration: 0.35 }}
              >
                {feature.icon}
              </motion.div>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* =========================================
            STATS BAR
        ========================================= */}
        <motion.div
          className="about-stats"
          variants={statsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {STATS.map((stat, i) => (
            <Fragment key={stat.label}>
              {i > 0 && <div className="about-stat-divider" />}
              <motion.div
                className="about-stat"
                variants={statItemVariants}
                whileHover={{ y: -4, scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 350, damping: 20 }}
              >
                <motion.div
                  className="about-stat-icon"
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  {stat.icon}
                </motion.div>
                <div>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              </motion.div>
            </Fragment>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

