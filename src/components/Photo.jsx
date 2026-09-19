import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Photo.css'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

const statsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const statItemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
}

const Photo = () => {
  const [playing, setPlaying] = useState(false)

  return (
    <section className="photo-hero" id="work">
      {/* Background still, with an optional loop layered over it */}
      <motion.div
        className="hero-image"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <video
          className={`hero-video ${playing ? 'is-playing' : ''}`}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onPlaying={() => setPlaying(true)}
        >
          <source src="/hero-loop.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Dark Overlay */}
      <div className="hero-overlay" />

      {/* Main Content */}
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Small Label */}
          <motion.div className="hero-eyebrow" variants={itemVariants}>
            ARCHITECTURE. INTERIORS. ANIMATION.
          </motion.div>

          {/* Heading */}
          <motion.h1 className="hero-title" variants={itemVariants}>
            Bringing Spaces
            <br />
            to <span>Life.</span>
          </motion.h1>

          {/* Description */}
          <motion.p className="hero-description" variants={itemVariants}>
            I create <strong>immersive architectural visuals</strong> that bring design
            intent to life &mdash; combining refined composition, realistic materials,
            lighting and atmosphere to convey spaces with clarity and impact.
          </motion.p>

          {/* Buttons */}
          <motion.div className="hero-buttons" variants={itemVariants}>
            <motion.a
              href="#gallery"
              className="hero-btn hero-btn-primary"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <span>View selected work</span>
              <motion.svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                whileHover={{ x: 3 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              >
                <path
                  d="M5 12H19M13 6L19 12L13 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </motion.a>

            <motion.a
              href="#contact"
              className="hero-btn hero-btn-secondary"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            >
              <svg
                className="spark-icon"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 2L13.8 8.2L20 10L13.8 11.8L12 18L10.2 11.8L4 10L10.2 8.2L12 2Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M19 16L19.8 18.2L22 19L19.8 19.8L19 22L18.2 19.8L16 19L18.2 18.2L19 16Z"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Start a project</span>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="hero-stats"
          variants={statsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Stat 1 */}
          <motion.div
            className="hero-stat"
            variants={statItemVariants}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 350, damping: 20 }}
          >
            <div className="stat-icon">
              <svg
                width="30"
                height="30"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M16 3L27 9.2V22.2L16 29L5 22.2V9.2L16 3Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M5 9.2L16 16L27 9.2"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M16 16V29"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
            </div>
            <div className="stat-text">
              <strong>20+</strong>
              <span>Projects completed</span>
            </div>
          </motion.div>

          <div className="stat-divider" />

          {/* Stat 2 */}
          <motion.div
            className="hero-stat"
            variants={statItemVariants}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 350, damping: 20 }}
          >
            <div className="stat-icon">
              <svg
                width="31"
                height="31"
                viewBox="0 0 32 32"
                fill="none"
              >
                <rect
                  x="4"
                  y="9"
                  width="24"
                  height="18"
                  rx="3"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path
                  d="M10 9L12 5H20L22 9"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
                <circle
                  cx="16"
                  cy="18"
                  r="5"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <circle
                  cx="16"
                  cy="18"
                  r="1.5"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="stat-text">
              <strong>50+</strong>
              <span>High-quality renders</span>
            </div>
          </motion.div>

          <div className="stat-divider" />

          {/* Stat 3 */}
          <motion.div
            className="hero-stat"
            variants={statItemVariants}
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 350, damping: 20 }}
          >
            <div className="stat-icon">
              <svg
                width="31"
                height="31"
                viewBox="0 0 32 32"
                fill="none"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="12"
                  stroke="currentColor"
                  strokeWidth="1.7"
                />
                <path
                  d="M13 11L21 16L13 21V11Z"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="stat-text">
              <strong>8</strong>
              <span>Walkthrough animations</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Photo