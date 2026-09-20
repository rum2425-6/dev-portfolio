// Provides consistent vertical spacing and clipping for each full-width section.
export default function SectionWrapper({ children, className = '' }) {
  return (
    <section className={`relative overflow-hidden py-24 md:py-32 ${className}`}>
      {children}
    </section>
  )
}