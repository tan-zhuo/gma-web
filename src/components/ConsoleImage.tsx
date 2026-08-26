import { CREDITS } from '@/data'
import { useTilt } from '@/hooks/useTilt'
import { ConsoleArt } from './ConsoleArt'

interface Props { id: string; name: string; interactive?: boolean; className?: string }

/** Real product photo when available (with mouse-tracked 3D tilt); SVG fallback otherwise. */
export function ConsoleImage({ id, name, interactive = true, className = '' }: Props) {
  const c = CREDITS[id]
  const tilt = useTilt(12)
  if (!c) return <div className="tilt" ref={tilt.ref} {...(interactive ? { onMouseMove: tilt.onMouseMove, onMouseLeave: tilt.onMouseLeave } : {})}><ConsoleArt id={id} /></div>

  const plate = c.bg === 'light' ? 'bg-[#f3f4f7] rounded-xl p-2' : c.bg === 'photo' ? 'rounded-xl overflow-hidden' : ''
  return (
    <div ref={tilt.ref} className={`console-photo tilt ${plate} ${className}`} {...(interactive ? { onMouseMove: tilt.onMouseMove, onMouseLeave: tilt.onMouseLeave } : {})}>
      <img src={c.file} alt={name} loading="lazy" decoding="async" className={`w-full h-full ${c.bg === 'photo' ? 'object-cover' : 'object-contain'}`} />
      {interactive && <span className="tilt-shine" />}
    </div>
  )
}
