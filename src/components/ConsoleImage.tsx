import { CREDITS } from '@/data'
import { ConsoleArt } from './ConsoleArt'

interface Props { id: string; name: string; className?: string }

/**
 * Real product photo (Wikimedia Commons) when we have one; falls back to the SVG illustration.
 * Light-background studio shots sit on a light "plate" so the white bg reads as intentional.
 */
export function ConsoleImage({ id, name, className = '' }: Props) {
  const c = CREDITS[id]
  if (!c) return <ConsoleArt id={id} />

  const plate =
    c.bg === 'light' ? 'bg-[#f3f4f7] rounded-xl p-2'
    : c.bg === 'photo' ? 'rounded-xl overflow-hidden'
    : ''
  return (
    <div className={`console-photo ${plate} ${className}`}>
      <img
        src={c.file}
        alt={name}
        loading="lazy"
        decoding="async"
        className={`w-full h-full ${c.bg === 'photo' ? 'object-cover' : 'object-contain'}`}
      />
    </div>
  )
}
