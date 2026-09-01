import { Mail, Phone, Linkedin, MapPin, ArrowUpRight, Quote } from 'lucide-react'
import Reveal from './Reveal'
import contactImage from '../designs/Interior/Foyer GGR 02.jpg'

const METHODS = [
  { icon: <Mail />, k: 'Email', v: 'guru3d.archviz@gmail.com', href: 'mailto:guru3d.archviz@gmail.com' },
  { icon: <Phone />, k: 'Phone', v: '+91 63749 19255', href: 'tel:+916374919255' },
  { icon: <Linkedin />, k: 'LinkedIn', v: 'guru3darchviz', href: 'https://linkedin.com/in/guru3darchviz' },
  { icon: <MapPin />, k: 'Based in', v: 'Vellore / Chennai, TN', href: null },
]

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
                <a href="mailto:guru3d.archviz@gmail.com" className="btn btn--primary">
                  <Mail /> Email Guru <ArrowUpRight />
                </a>
                <a href="https://linkedin.com/in/guru3darchviz" target="_blank" rel="noreferrer" className="btn btn--ghost">
                  <Linkedin /> Connect on LinkedIn
                </a>
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
