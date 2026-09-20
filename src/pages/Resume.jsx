import { FaDownload, FaEye } from 'react-icons/fa'

import Container from '../components/common/Container'
import GlassCard from '../components/common/GlassCard'
import SectionHeader from '../components/common/SectionHeader'
import SectionWrapper from '../components/common/SectionWrapper'
import { profile } from '../data/portfolio'

export default function Resume() {
  return (
    <SectionWrapper>
      <Container>
        <SectionHeader
          badge="Resume"
          title="Download My"
          highlight="Resume"
          description="View or download my resume to learn more about my education, skills, internship experience, projects, and certifications."
        />

        <div className="mx-auto max-w-4xl">
          <GlassCard className="gsap-reveal glow-border overflow-hidden p-4">
            <img
              src="https://placehold.co/900x1200/080720/22d3ee?text=Sumit+Kumar+Gupta+Resume+Preview"
              alt="Resume preview"
              loading="lazy"
              className="w-full rounded-2xl object-cover"
            />
          </GlassCard>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            {/* Both actions use the same PDF path from the profile data. */}
            <a
              href={profile.resume}
              download
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:shadow-cyan-400/30"
            >
              <FaDownload />
              Download PDF
            </a>

            <a
              href={profile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-8 py-4 text-sm font-semibold text-white transition hover:border-cyan-400/40 hover:text-cyan-300"
            >
              <FaEye />
              View Full Resume
            </a>
          </div>

          <p className="mt-5 text-center text-sm text-slate-500">
            Place your resume PDF inside the <span className="font-mono text-cyan-300">public</span>{' '}
            folder with this name:{' '}
            <span className="font-mono text-cyan-300">Sumit-Kumar-Gupta-Resume.pdf</span>
          </p>
        </div>
      </Container>
    </SectionWrapper>
  )
}