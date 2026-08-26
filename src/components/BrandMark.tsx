import { BRANDS, LOGOS } from '@/data'
import type { Brand } from '@/types/console'

interface Props { brand: Brand; className?: string; mono?: boolean }

/** Official brand logo (SVG from Wikimedia Commons) rendered monochrome white; text badge fallback. */
/** logos whose artwork depends on their own colours / filled shapes */
const KEEP_COLOR: Brand[] = ['steam']

export function BrandMark({ brand, className = 'h-6', mono }: Props) {
  const logo = LOGOS[brand]
  const isMono = mono ?? !KEEP_COLOR.includes(brand)
  if (!logo) {
    return <span className={`font-head text-[11px] tracking-[.2em] text-white px-2.5 py-1 rounded inline-flex items-center ${className}`} style={{ background: 'var(--brand)' }}>{BRANDS[brand].short}</span>
  }
  return <img src={logo.file} alt={BRANDS[brand].label} className={`w-auto object-contain ${className}`} style={isMono ? { filter: 'brightness(0) invert(1)' } : undefined} draggable={false} />
}
