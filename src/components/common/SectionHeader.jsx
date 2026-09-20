import { motion } from 'framer-motion'

// Standard heading block shared by the main portfolio sections.
export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  align = 'center',
}) {
  const isLeft = align === 'left'

  // The alignment option supports both centered and left-aligned section intros.
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65 }}
      className={`mb-14 flex max-w-3xl flex-col md:mb-20 ${
        isLeft ? 'items-start text-left' : 'mx-auto items-center text-center'
      }`}
    >
      {badge && (
        <span className="mb-4 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-xs text-cyan-300">
          {badge}
        </span>
      )}

      <h2 className="font-display text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
        {title} <span className="gradient-text">{highlight}</span>
      </h2>

      {description && (
        <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  )
}