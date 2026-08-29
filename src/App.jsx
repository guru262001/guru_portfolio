import { Suspense, lazy, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Work from './components/Work'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Photo from './components/Photo'

const CarouselModal = lazy(() => import('./components/CarouselModal'))

export default function App() {
  const [open, setOpen] = useState(null) // { collection, index } | null

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
          <Photo />
        
        <Work onOpenCollection={(collection) => setOpen({ collection, index: 0 })} />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />

      <Suspense fallback={null}>
        <AnimatePresence>
          {open && (
            <CarouselModal
              collection={open.collection}
              index={open.index}
              onIndex={(index) => setOpen((o) => ({ ...o, index }))}
              onClose={() => setOpen(null)}
            />
          )}
        </AnimatePresence>
      </Suspense>
    </>
  )
}
