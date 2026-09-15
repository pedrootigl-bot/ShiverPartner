import { useEffect, useRef, useState } from 'react'

function getRevealOptions() {
  if (typeof window === 'undefined') {
    return { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  }

  const isCompact = window.matchMedia('(max-width: 768px)').matches
  return {
    threshold: isCompact ? 0.08 : 0.14,
    rootMargin: isCompact ? '0px 0px -4% 0px' : '0px 0px -8% 0px',
  }
}

/**
 * @param {object} [options]
 * @param {number} [options.threshold]
 * @param {string} [options.rootMargin]
 * @param {boolean} [options.once] — se true, anima só a entrada
 * @param {boolean} [options.initialVisible] — útil para hero acima da dobra
 */
export function useReveal(options = {}) {
  const {
    once = false,
    initialVisible = false,
    threshold,
    rootMargin,
  } = options

  const ref = useRef(null)
  const [visible, setVisible] = useState(initialVisible)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return undefined
    }

    const defaults = getRevealOptions()
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (once) observer.disconnect()
          return
        }

        if (!once) setVisible(false)
      },
      {
        threshold: threshold ?? defaults.threshold,
        rootMargin: rootMargin ?? defaults.rootMargin,
      },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [once, threshold, rootMargin])

  return { ref, visible }
}
