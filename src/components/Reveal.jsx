import { motion } from 'framer-motion'

/** Hardware-accelerated scroll-reveal using Framer Motion */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  x = 0,
  duration = 0.75,
  as = 'div',
  className = '',
  style = {},
  ...rest
}) {
  const Component = motion[as] || motion.div

  return (
    <Component
      className={`reveal in ${className}`}
      initial={{ opacity: 0, y, x }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -30px 0px' }}
      transition={{
        duration,
        delay: delay ? delay / 1000 : 0,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={style}
      {...rest}
    >
      {children}
    </Component>
  )
}

