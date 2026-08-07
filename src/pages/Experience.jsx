import { FaBriefcase } from 'react-icons/fa'

import Container from '../components/common/Container'
import GlassCard from '../components/common/GlassCard'
import SectionHeader from '../components/common/SectionHeader'
import SectionWrapper from '../components/common/SectionWrapper'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <SectionWrapper>
      <Container>
        <SectionHeader
          badge="Experience"
          title="Professional"
          highlight="Internship"
          description="Practical software development experience gained through internship, team collaboration, debugging, testing, and feature development."
        />

        <div className="mx-auto max-w-4xl">
          <div className="relative border-l border-indigo-400/30 pl-8">
            {experience.map((item) => (
              <div key={item.company} className="gsap-reveal relative mb-10">
                <div className="absolute -left-[49px] top-1 grid h-9 w-9 place-items-center rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400 shadow-lg shadow-cyan-400/20">
                  <FaBriefcase className="text-sm text-white" />
                </div>

                <GlassCard className="p-7 md:p-8">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-white">{item.role}</h3>
                      <p className="mt-1 font-semibold text-purple-300">{item.company}</p>
                    </div>

                    <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 font-mono text-xs text-cyan-300">
                      {item.duration}
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-7 text-slate-400">
                        <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-cyan-300" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}