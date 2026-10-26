import { useState, useEffect, useRef } from 'react'

/**
 * Cycles through a list of phrases with a typewriter effect.
 * Respects prefers-reduced-motion (shows first phrase statically).
 */
export function useTyping(phrases, { typingSpeed = 70, deletingSpeed = 40, pauseMs = 1800 } = {}) {
  const [display, setDisplay] = useState(phrases[0] || '')
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const reducedRef = useRef(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      reducedRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    }
    if (reducedRef.current) {
      setDisplay(phrases[0] || '')
      return
    }

    if (!phrases.length) return

    const current = phrases[index % phrases.length]
    let timeout

    if (!isDeleting && display === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseMs)
    } else if (isDeleting && display === '') {
      setIsDeleting(false)
      setIndex((i) => (i + 1) % phrases.length)
    } else {
      const next = isDeleting
        ? current.slice(0, display.length - 1)
        : current.slice(0, display.length + 1)
      timeout = setTimeout(
        () => setDisplay(next),
        isDeleting ? deletingSpeed : typingSpeed
      )
    }

    return () => clearTimeout(timeout)
  }, [display, isDeleting, index, phrases, typingSpeed, deletingSpeed, pauseMs])

  return display
}
