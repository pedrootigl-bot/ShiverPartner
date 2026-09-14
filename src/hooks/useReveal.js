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

export function useReveal(options = {}) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || visible) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true)
      return
    }

    const defaults = getRevealOptions()
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setVisible(true)
        observer.disconnect()
      },
      {
        threshold: options.threshold ?? defaults.threshold,
        rootMargin: options.rootMargin ?? defaults.rootMargin,
      },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin, visible])

  return { ref, visible }
}
