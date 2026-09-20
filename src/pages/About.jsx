import { motion, useInView, animate } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa'

/* Animated counter reveals each summary value when it enters the viewport. */
function Counter({ to, suffix = '+' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (inView) animate(0, to, { duration: 2, onUpdate: v => setVal(Math.floor(v)) })
  }, [inView, to])

  return <span ref={ref} className="gradient-text">{val}{suffix}</span>
}

const stats = [
  // High-level profile numbers shown at the top of the About page.
  { label: 'Projects Completed', value: 3 },
  { label: 'Technical Skills', value: 25 },
  { label: 'Certificates Earned', value: 4 },
  { label: 'Months of Internship', value: 6 },
]

const journey = [
  // Resume milestones displayed as the education and internship timeline.
  { year: '2020 – 2022', icon: <FaGraduationCap />, title: 'Secondary Education', desc: 'Completed Secondary (CBSE) at Ambition Convent School in Ballia, India.' },
  { year: '2022 – 2024', icon: <FaGraduationCap />, title: 'Senior Secondary Education', desc: 'Completed Senior Secondary (CBSE) at K.R. Education Centre in Kanpur, India.' },
  { year: 'Aug 2024 – Pursuing', icon: <FaCode />, title: 'B.Tech in Computer Science', desc: 'Pursuing Bachelor of Technology (Computer Science & Engineering) at Rama University in Kanpur, India.' },
  { year: 'Aug 2025 – Jan 2026', icon: <FaBriefcase />, title: 'Software Developer Intern', desc: 'Developed a Recruitment Management System at RCS Global Limited.' },
]

export default function About() {
  return (
    <section className="min-h-screen pt-32 pb-20 max-w-7xl mx-auto px-6">
      <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
        className="font-display text-4xl md:text-6xl font-bold text-center">
        About <span className="gradient-text">Me</span>
      </motion.h1>
      <p className="text-center text-slate-400 mt-4 max-w-2xl mx-auto">
        Computer Science student passionate about building practical web applications and AI-powered solutions.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {stats.map((s, i) => (
          <motion.div key={s.label}
            initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="glass rounded-2xl p-8 text-center hover:border-primary/40
                       hover:-translate-y-2 transition-all duration-300">
            <div className="font-display text-4xl md:text-5xl font-bold">
              <Counter to={s.value} />
            </div>
            <p className="text-slate-400 text-sm mt-2">{s.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Journey Timeline */}
      <div className="mt-24 relative">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px]
          bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />

        {journey.map((item, i) => (
          <motion.div key={item.year}
            initial={{ opacity: 0, x: i % 2 ? 60 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className={`md:w-[calc(50%-40px)] mb-10 ${i % 2 ? 'md:ml-auto' : ''}`}
          >
            <div className="glass rounded-2xl p-6 hover:border-accent/40 transition-colors relative">
              <span className="absolute -top-3 left-6 px-3 py-1 text-xs font-mono rounded-full
                bg-gradient-to-r from-primary to-secondary">{item.year}</span>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-accent text-xl">{item.icon}</span>
                <h3 className="font-display font-semibold text-lg">{item.title}</h3>
              </div>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}