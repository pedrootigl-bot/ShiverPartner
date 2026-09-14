import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import 'lenis/dist/lenis.css'

gsap.registerPlugin(ScrollTrigger)

/** @type {import('lenis').default | null} */
let lenis = null

export function getLenis() {
  return lenis
}

export function stopSmoothScroll() {
  lenis?.stop()
}

export function startSmoothScroll() {
  lenis?.start()
}

export function scrollToTarget(target, options = {}) {
  if (!lenis) {
    if (typeof target === 'string') {
      const el = document.querySelector(target)
      el?.scrollIntoView({ behavior: 'smooth' })
    }
    return
  }

  lenis.scrollTo(target, {
    offset: options.offset ?? -72,
    duration: options.duration ?? 1.2,
    ...options,
  })
}

export function initSmoothScroll() {
  if (typeof window === 'undefined' || lenis) return () => {}

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return () => {}
  }

  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    syncTouch: false,
    touchMultiplier: 1.4,
    wheelMultiplier: 1,
    autoRaf: false,
  })

  lenis.on('scroll', ScrollTrigger.update)

  const ticker = (time) => {
    lenis?.raf(time * 1000)
  }
  gsap.ticker.add(ticker)
  gsap.ticker.lagSmoothing(0)

  const onAnchorClick = (event) => {
    const link = event.target.closest('a[href^="#"]')
    if (!link) return

    const href = link.getAttribute('href')
    if (!href || href === '#' || href === '#topo') {
      if (href === '#topo' || href === '#') {
        event.preventDefault()
        scrollToTarget(0, { offset: 0 })
      }
      return
    }

    const el = document.querySelector(href)
    if (!el) return

    event.preventDefault()
    scrollToTarget(el)
  }

  document.addEventListener('click', onAnchorClick)

  return () => {
    document.removeEventListener('click', onAnchorClick)
    gsap.ticker.remove(ticker)
    lenis?.destroy()
    lenis = null
  }
}
