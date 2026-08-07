export default function GlassCard({ children, className = '' }) {
  return (
    <div
      className={`glass card-shadow rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 ${className}`}
    >
      {children}
    </div>
  )
}