import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    restDelta: 0.001,
  })

  return (
    <motion.div
      className="scroll-progress-bar"
      style={{
        scaleX,
        transformOrigin: '0%',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, #d9a441 0%, #f2ca74 50%, #d9a441 100%)',
        boxShadow: '0 1px 4px rgba(217, 164, 65, 0.25)',
        zIndex: 9999,
        pointerEvents: 'none',
      }}
    />
  )
}
