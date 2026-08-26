import { useEffect, useState } from 'react'

/** Tracks which section id is currently in the viewport's focus band. */
export function useActiveSection(ids: readonly string[]) {
  const [active, setActive] = useState<string>('')
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [ids])
  return active
}
