import { Mail, Phone, Linkedin, MapPin, ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'

const METHODS = [
  { icon: <Mail />, k: 'Email  ', v: 'guru3d.archviz@gmail.com', href: 'mailto:guru3d.archviz@gmail.com' },
  { icon: <Phone />, k: 'Phone  ', v: '+91 63749 19255', href: 'tel:+916374919255' },
  { icon: <Linkedin />, k: 'LinkedIn  ', v: '/in/guru3darchviz', href: 'https://linkedin.com/in/guru3darchviz' },
  { icon: <MapPin />, k: 'Based in  ', v: 'Vellore / Chennai, TN', href: null },
]

export default function Contact() {
  return (
    <section className="section section--tight" id="contact">
      <div className="container">
        <Reveal className="contact">
          <span className="contact__glow" />
          <span className="eyebrow" style={{ justifyContent: 'center' }}>Let’s build something</span>
          <h2>
            Have a project that needs<br /><em>to be seen before it’s built?</em>
          </h2>
          <p>
            Available for freelance renders, walkthroughs and full studio collaboration —
            residential to commercial. Let’s make it photoreal.
          </p>

          <div className="contact__actions">
            <a href="mailto:guru3d.archviz@gmail.com" className="btn btn--primary">
              Email Guru <ArrowUpRight />
            </a>
            <a href="https://linkedin.com/in/guru3darchviz" target="_blank" rel="noreferrer" className="btn btn--ghost">
              <Linkedin />  Connect on LinkedIn
            </a>
          </div>

          <div className="contact__methods">
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
              return m.href ? (
                <a className="method" key={m.k} href={m.href} target={m.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">{Inner}</a>
              ) : (
                <div className="method" key={m.k}>{Inner}</div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
