import { ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="brand">
          <span className="brand__mark">GP</span>
          <span>
            <span className="brand__name">S. Guru Prasath</span>
            <span className="brand__role">3D Architectural Visualizer</span>
          </span>
        </div>
        <p>© {new Date().getFullYear()} S. Guru Prasath · Chennai, Tamil Nadu</p>
        <a href="#top" className="to-top">Back to top <ArrowUp size={16} /></a>
      </div>
    </footer>
  )
}
