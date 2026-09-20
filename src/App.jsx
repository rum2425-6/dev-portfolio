import { AnimatePresence } from 'framer-motion'
import { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'

import Cursor from './components/common/Cursor'
import Loader from './components/common/Loader'
import ScrollProgress from './components/common/ScrollProgress'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import PageTransition from './components/layout/PageTransition'
import CodeRain from './components/three/CodeRain'

// Lazy-loading keeps each page out of the initial bundle until the user visits it.
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Skills = lazy(() => import('./pages/Skills'))
const Experience = lazy(() => import('./pages/Experience'))
const Projects = lazy(() => import('./pages/Projects'))
const Certificates = lazy(() => import('./pages/Certificates'))
const Resume = lazy(() => import('./pages/Resume'))
const Contact = lazy(() => import('./pages/Contact'))

function AnimatedRoutes() {
  const location = useLocation()

  // Start each route at the top while preserving the existing page transition.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div className="min-h-screen" />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/skills" element={<PageTransition><Skills /></PageTransition>} />
          <Route path="/experience" element={<PageTransition><Experience /></PageTransition>} />
          <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
          <Route path="/certificates" element={<PageTransition><Certificates /></PageTransition>} />
          <Route path="/resume" element={<PageTransition><Resume /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  )
}

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <BrowserRouter>
      {/* The loader stays mounted until its own animation reports completion. */}
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          {/* These shared visual layers appear behind every routed page. */}
          <div className="noise" />

          <CodeRain />

          <Cursor />

          <ScrollProgress />

          <Navbar />

          <main className="relative z-10">
            <AnimatedRoutes />
          </main>

          <Footer />
        </>
      )}
    </BrowserRouter>
  )
}