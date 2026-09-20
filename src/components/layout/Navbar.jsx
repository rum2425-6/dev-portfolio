import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { profile } from '../../data/portfolio'

// Central route list keeps desktop and mobile navigation in sync.
const routes = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Experience', path: '/experience' },
  { label: 'Projects', path: '/projects' },
  { label: 'Certificates', path: '/certificates' },
  { label: 'Resume', path: '/resume' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Add the compact navbar state after the page has been scrolled.
    const onScroll = () => setScrolled(window.scrollY > 40)

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[90] transition-all duration-300 ${
        scrolled ? 'glass py-3 shadow-lg shadow-indigo-500/5' : 'py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link to="/" className="font-mono text-xl font-bold">
          <span className="gradient-text">{'<SKG />'}</span>
        </Link>

        <ul className="hidden items-center gap-7 lg:flex">
          {routes.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition ${
                    isActive ? 'text-cyan-300' : 'text-slate-300 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Uses the profile email so the contact link stays current with the data file. */}
        <a
          href={`mailto:${profile.email}`}
          className="hidden rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition hover:shadow-cyan-400/30 lg:inline-flex"
        >
          Hire Me
        </a>

        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen((prev) => !prev)}
          className="text-3xl text-white lg:hidden"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="mx-5 mt-4 overflow-hidden rounded-3xl border border-white/10 bg-dark/90 backdrop-blur-2xl lg:hidden"
          >
            <ul className="p-3">
              {routes.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm text-slate-300 transition hover:bg-white/5 hover:text-cyan-300"
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}