import { useEffect, useState } from 'react'

export default function useTyping(words, speed = 85, pause = 1400) {
  const [text, setText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]

    const timer = setTimeout(
      () => {
        if (!deleting) {
          setText(current.slice(0, text.length + 1))

          if (text === current) {
            setTimeout(() => setDeleting(true), pause)
          }
        } else {
          setText(current.slice(0, text.length - 1))

          if (text === '') {
            setDeleting(false)
            setWordIndex((prev) => prev + 1)
          }
        }
      },
      deleting ? speed / 2 : speed,
    )

    return () => clearTimeout(timer)
  }, [text, deleting, wordIndex, words, speed, pause])

  return text
}