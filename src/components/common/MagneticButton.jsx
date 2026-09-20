import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function MagneticButton({ children, className = '', ...props }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const { left, top, width, height } = ref.current.getBoundingClientRect()
    // Offset the button from its center so it follows the pointer slightly.
    const x = (e.clientX - left - width / 2) * 0.3
    const y = (e.clientY - top - height / 2) * 0.3
    ref.current.style.transform = `translate(${x}px, ${y}px)`
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => (ref.current.style.transform = 'translate(0,0)')}
      whileTap={{ scale: 0.95 }}
      className={`transition-transform duration-200 ease-out ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}