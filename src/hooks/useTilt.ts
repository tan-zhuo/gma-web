import { useCallback, useRef } from 'react'

/**
 * Mouse-tracked 3D tilt. Sets --rx/--ry (rotation) and --mx/--my (highlight position)
 * on the element; pair with the `.tilt` / `.tilt-shine` CSS.
 */
export function useTilt(max = 14) {
  const ref = useRef<HTMLDivElement>(null)
  const onMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    el.style.setProperty('--ry', `${(px - 0.5) * max * 2}deg`)
    el.style.setProperty('--rx', `${(0.5 - py) * max * 2}deg`)
    el.style.setProperty('--mx', `${px * 100}%`)
    el.style.setProperty('--my', `${py * 100}%`)
    el.classList.add('is-active')
  }, [max])
  const onLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.classList.remove('is-active')
    el.style.removeProperty('--rx'); el.style.removeProperty('--ry')
  }, [])
  return { ref, onMouseMove: onMove, onMouseLeave: onLeave }
}
