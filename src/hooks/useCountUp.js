import { useState, useEffect, useRef } from 'react'

/**
 * Animates a number from 0 to target when the element becomes visible.
 * Respects prefers-reduced-motion.
 */
export function useCountUp(target, { duration = 1400, enabled = true } = {}) {
  const [value, setValue] = useState(enabled ? 0 : target)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    if (!enabled || typeof target !== 'number') {
      setValue(target)
      return
    }

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      setValue(target)
      return
    }

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const start = performance.now()
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.round(target * eased))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration, enabled])

  return { value, ref }
}
