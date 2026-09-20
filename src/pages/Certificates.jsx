import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaDownload, FaTimes } from 'react-icons/fa'

import Container from '../components/common/Container'
import GlassCard from '../components/common/GlassCard'
import SectionHeader from '../components/common/SectionHeader'
import SectionWrapper from '../components/common/SectionWrapper'
import { certificates } from '../data/portfolio'

export default function Certificates() {
  const [active, setActive] = useState(null)

  return (
    <SectionWrapper>
      <Container>
        <SectionHeader
          badge="Certificates"
          title="Achievements &"
          highlight="Certifications"
          description="A collection of certificates and innovation participation that reflect my learning journey and professional growth."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {/* Clicking a certificate stores it as the item shown in the modal. */}
          {certificates.map((cert) => (
            <button
              key={cert.title}
              type="button"
              onClick={() => setActive(cert)}
              className="gsap-reveal text-left"
            >
              <GlassCard className="group h-full overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-white">{cert.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{cert.issuer}</p>
                  <p className="mt-2 font-mono text-xs text-cyan-300">{cert.date}</p>
                </div>
              </GlassCard>
            </button>
          ))}
        </div>

        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActive(null)}
              className="fixed inset-0 z-[150] flex items-center justify-center bg-dark/90 p-5 backdrop-blur-xl"
            >
              <motion.div
                initial={{ scale: 0.9, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 30 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-dark-soft"
              >
                <img src={active.image} alt={active.title} className="w-full" />

                <div className="flex flex-col justify-between gap-4 p-5 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="font-display text-xl font-bold text-white">{active.title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{active.issuer}</p>
                  </div>

                  <div className="flex gap-3">
                    <a
                      href={active.image}
                      download
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 px-4 py-2 text-sm font-semibold text-white"
                    >
                      <FaDownload />
                      Download
                    </a>

                    <button
                      type="button"
                      onClick={() => setActive(null)}
                      className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04]"
                    >
                      <FaTimes />
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </SectionWrapper>
  )
}