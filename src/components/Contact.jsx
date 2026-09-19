import { motion } from 'framer-motion'
import { Mail, Phone, Linkedin, MapPin, ArrowUpRight, Quote } from 'lucide-react'
import Reveal from './Reveal'
import contactImage from '../designs/Residential Interiors/Foyer GGR 02.jpg'

const METHODS = [
  { icon: <Mail />, k: 'Email', v: 'guru3d.archviz@gmail.com', href: 'mailto:guru3d.archviz@gmail.com' },
  { icon: <Phone />, k: 'Phone', v: '+91 63749 19255', href: 'tel:+916374919255' },
  { icon: <Linkedin />, k: 'LinkedIn', v: 'guru3darchviz', href: 'https://linkedin.com/in/guru3darchviz' },
  { icon: <MapPin />, k: 'Based in', v: 'Vellore / Chennai, TN', href: null },
]

const methodsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const methodItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Contact() {
  return (
    <section className="section section--tight" id="contact">
      <div className="container">
        <Reveal className="contact">
          <div className="contact__main">
            <div className="contact__left">
              <span className="eyebrow">Let&rsquo;s build something great</span>

              <h2>
                Have a project that needs <em>to be seen before it&rsquo;s built?</em>
              </h2>

              <p>
                Whether it&rsquo;s a single render, walkthrough or a full studio collaboration —
                I&rsquo;m here to turn your ideas into powerful visual experiences.
              </p>

              <div className="contact__actions">
                <motion.a
                  href="mailto:guru3d.archviz@gmail.com"
                  className="btn btn--primary"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <Mail /> Email Guru <ArrowUpRight />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/guru3darchviz"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn--ghost"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <Linkedin /> Connect on LinkedIn
                </motion.a>
              </div>
            </div>

            <div className="contact__aside">
              <img src={contactImage} alt="" loading="lazy" />
              <span className="contact__fade" />

              <blockquote className="contact__quote">
                <Quote />
                <p>Great design is not just seen, <em>it&rsquo;s felt.</em></p>
                <span className="contact__rule" />
                <span className="contact__sign">Guru Prasath</span>
                <span className="contact__signrole">3D Architectural Visualizer</span>
              </blockquote>
            </div>
          </div>

          <motion.div
            className="contact__methods"
            variants={methodsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {METHODS.map((m) => {
              const Inner = (
                <>
                  <span className="ic">{m.icon}</span>
                  <span>
                    <span className="method__k">{m.k}</span>
                    <span className="method__v">{m.v}</span>
                  </span>
                </>
              )
              const props = {
                className: 'method',
                variants: methodItemVariants,
                whileHover: { x: 6, y: -2, borderColor: 'var(--gold-line)' },
                whileTap: { scale: 0.98 },
                transition: { type: 'spring', stiffness: 400, damping: 22 },
              }
              return m.href ? (
                <motion.a
                  key={m.k}
                  href={m.href}
                  target={m.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  {...props}
                >
                  {Inner}
                </motion.a>
              ) : (
                <motion.div key={m.k} {...props}>
                  {Inner}
                </motion.div>
              )
            })}
          </motion.div>
        </Reveal>
      </div>
    </section>
  )
}

