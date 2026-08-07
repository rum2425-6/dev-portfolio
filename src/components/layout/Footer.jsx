import { Link } from 'react-router-dom'
import { FaArrowUp, FaGithub, FaLinkedin, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'
import { profile } from '../../data/portfolio'

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <Link to="/" className="font-mono text-2xl font-bold">
            <span className="gradient-text">{'<SKG />'}</span>
          </Link>

          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
            Software Engineer and MERN Stack Developer focused on building clean,
            scalable, responsive, and user-friendly web applications.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-white">Quick Links</h3>

          <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-400">
            {['Home', 'About', 'Skills', 'Projects', 'Resume', 'Contact'].map((item) => (
              <Link
                key={item}
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="transition hover:text-cyan-300"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-lg font-semibold text-white">Contact</h3>

          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <p className="flex items-center gap-3">
              <FaEnvelope className="text-cyan-300" />
              {profile.email}
            </p>

            <p className="flex items-center gap-3">
              <FaPhoneAlt className="text-cyan-300" />
              {profile.phone}
            </p>
          </div>

          <div className="mt-5 flex gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-lg text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300"
            >
              <FaGithub />
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-lg text-slate-300 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:text-cyan-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center font-mono text-xs text-slate-500">
        © {new Date().getFullYear()} Sumit Kumar Gupta. All rights reserved.
      </div>

      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className="fixed bottom-6 right-6 z-[80] grid h-12 w-12 place-items-center rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 text-white shadow-lg shadow-cyan-400/20"
      >
        <FaArrowUp />
      </button>
    </footer>
  )
}