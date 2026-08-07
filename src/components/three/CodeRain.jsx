import { useEffect, useRef } from 'react'

const snippets = [
  'React',
  'Node.js',
  'MongoDB',
  'Express',
  'JavaScript',
  'Java',
  'SQL',
  'REST API',
  'GitHub',
  'Docker',
  'Tailwind',
  '{}',
  '</>',
  'async',
  'await',
  'const',
  'MERN',
]

export default function CodeRain({ opacity = 0.12, speed = 0.45, fontSize = 18 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    let width = window.innerWidth
    let height = window.innerHeight
    let animationId

    canvas.width = width
    canvas.height = height

    let columns = Math.floor(width / fontSize)
    let drops = Array(columns).fill(1)

    const draw = () => {
      ctx.fillStyle = 'rgba(3, 0, 20, 0.08)'
      ctx.fillRect(0, 0, width, height)

      const gradient = ctx.createLinearGradient(0, 0, width, height)

      gradient.addColorStop(0, '#6366f1')
      gradient.addColorStop(0.5, '#a855f7')
      gradient.addColorStop(1, '#22d3ee')

      ctx.fillStyle = gradient
      ctx.font = `${fontSize}px JetBrains Mono, monospace`

      for (let i = 0; i < drops.length; i++) {
        const text = snippets[Math.floor(Math.random() * snippets.length)]

        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > height && Math.random() > 0.976) {
          drops[i] = 0
        }

        drops[i] += speed
      }

      animationId = requestAnimationFrame(draw)
    }

    draw()

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight

      canvas.width = width
      canvas.height = height

      columns = Math.floor(width / fontSize)
      drops = Array(columns).fill(1)
    }

    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [opacity, speed, fontSize])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
      style={{ opacity, mixBlendMode: 'screen' }}
    />
  )
}