import { useRef } from 'react'
import { FaBookOpen, FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

import Container from '../components/common/Container'
import GlassCard from '../components/common/GlassCard'
import SectionHeader from '../components/common/SectionHeader'
import SectionWrapper from '../components/common/SectionWrapper'
import { projects } from '../data/portfolio'

function ProjectCard({ project }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()

    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5

    ref.current.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${
      -y * 8
    }deg) scale(1.015)`
  }

  const reset = () => {
    if (ref.current) {
      ref.current.style.transform =
        'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)'
    }
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="gsap-reveal h-full transition-transform duration-200 ease-out"
    >
      <GlassCard className="group flex h-full flex-col overflow-hidden">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />
        </div>

        <div className="flex flex-1 flex-col p-6 md:p-7">
          <h3 className="font-display text-xl font-bold text-white transition group-hover:text-cyan-300">
            {project.title}
          </h3>

          <p className="mt-3 text-sm leading-7 text-slate-400">{project.description}</p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-indigo-400/20 bg-indigo-500/10 px-3 py-1 font-mono text-xs text-indigo-300"
              >
                {item}
              </span>
            ))}
          </div>

          <ul className="mt-5 grid gap-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-2 text-xs leading-6 text-slate-400">
                <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex gap-3 pt-7">
            <a
              href={project.github}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] py-3 text-sm font-medium text-slate-200 transition hover:border-cyan-400/40 hover:text-cyan-300"
            >
              <FaGithub />
              Code
            </a>

            <a
              href={project.demo}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 py-3 text-sm font-semibold text-white transition hover:shadow-lg hover:shadow-indigo-500/25"
            >
              <FaExternalLinkAlt />
              Live
            </a>

            <a
              href={project.caseStudy}
              aria-label="Case Study"
              className="grid w-12 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-200 transition hover:border-purple-400/40 hover:text-purple-300"
            >
              <FaBookOpen />
            </a>
          </div>
        </div>
      </GlassCard>
    </div>
  )
}

export default function Projects() {
  return (
    <SectionWrapper>
      <Container>
        <SectionHeader
          badge="Projects"
          title="Featured"
          highlight="Work"
          description="Projects developed through academic and personal learning with focus on responsive UI, practical features, and clean development."
        />

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  )
}