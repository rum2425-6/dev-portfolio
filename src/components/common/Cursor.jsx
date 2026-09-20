import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const glowRef = useRef(null)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  const springX = useSpring(x, { stiffness: 420, damping: 30 })
  const springY = useSpring(y, { stiffness: 420, damping: 30 })

  useEffect(() => {
    // Track the pointer once and drive both the cursor and background glow from it.
    const move = (e) => {
      x.set(e.clientX - 8)
      y.set(e.clientY - 8)

      if (glowRef.current) {
        glowRef.current.style.background = `radial-gradient(650px at ${e.clientX}px ${e.clientY}px, rgba(34,211,238,0.11), transparent 75%)`
      }
    }

    window.addEventListener('mousemove', move)

    return () => window.removeEventListener('mousemove', move)
  }, [x, y])

  return (
    <>
      <div
        ref={glowRef}
        className="pointer-events-none fixed inset-0 z-[2] hidden md:block"
      />

      <motion.div
        style={{ x: springX, y: springY }}
        className="pointer-events-none fixed left-0 top-0 z-[120] hidden h-4 w-4 rounded-full border-2 border-cyan-300 mix-blend-difference md:block"
      />
    </>
  )
}