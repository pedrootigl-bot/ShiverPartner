import { useEffect } from 'react'
import { initSmoothScroll } from '../lib/smoothScroll'

function SmoothScroll() {
  useEffect(() => initSmoothScroll(), [])
  return null
}

export default SmoothScroll
