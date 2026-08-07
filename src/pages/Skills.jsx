import { motion } from 'framer-motion'

import Container from '../components/common/Container'
import GlassCard from '../components/common/GlassCard'
import SectionHeader from '../components/common/SectionHeader'
import SectionWrapper from '../components/common/SectionWrapper'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <SectionWrapper>
      <Container>
        <SectionHeader
          badge="Technical Skills"
          title="My Development"
          highlight="Toolkit"
          description="Technologies and tools I use to build responsive, scalable, and user-friendly web applications."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {skills.map((category) => (
            <GlassCard key={category.title} className="gsap-reveal h-full p-7 md:p-8">
              <h3 className="font-display text-2xl font-bold text-white">{category.title}</h3>

              <div className="mt-8 space-y-6">
                {category.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-200">{skill.name}</span>
                      <span className="font-mono text-xs text-slate-500">{skill.level}%</span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-white/5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  )
}