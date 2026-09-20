import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate startup progress and notify App when the intro screen can close.
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(onComplete, 500)
          return 100
        }

        return Math.min(prev + Math.floor(Math.random() * 14) + 4, 100)
      })
    }, 120)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <motion.div
      exit={{
        y: '-100%',
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
      }}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-dark"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.86 }}
        animate={{ opacity: 1, scale: 1 }}
        className="font-mono text-5xl font-bold md:text-7xl"
      >
        <span className="gradient-text">{'<SKG />'}</span>
      </motion.div>

      <div className="mt-8 h-[3px] w-72 overflow-hidden rounded-full bg-white/10">
        <motion.div
          animate={{ width: `${progress}%` }}
          className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400"
        />
      </div>

      <p className="mt-4 font-mono text-xs text-slate-500">
        {progress}% loading portfolio...
      </p>
    </motion.div>
  )
}