import { LOGOS } from '@/data'
import { useLang } from '@/i18n'
import type { Brand } from '@/types/console'

interface Props { brand: Brand; className?: string; mono?: boolean; /** compact pill for card corners */ badge?: boolean }
/** logos whose artwork depends on their own colours / filled shapes */
const KEEP_COLOR: Brand[] = ['steam']

/** Official brand logo (SVG from Wikimedia Commons) rendered monochrome white; text badge fallback. */
export function BrandMark({ brand, className = 'h-6', mono, badge }: Props) {
  const { data } = useLang()
  const logo = LOGOS[brand]
  const isMono = mono ?? !KEEP_COLOR.includes(brand)
  const label = data.brands[brand].label
  const short = data.brands[brand].short
  if (badge) {
    return logo ? (
      <span className="inline-flex items-center h-7 px-2.5 rounded-md bg-black/55 backdrop-blur border border-white/10" style={{ boxShadow: '0 0 14px var(--brand-glow)' }}>
        <img src={logo.file} alt={label} className="h-3.5 max-w-[64px] w-auto object-contain" style={isMono ? { filter: 'brightness(0) invert(1)' } : undefined} draggable={false} />
      </span>
    ) : (
      <span className="inline-flex items-center h-7 px-2.5 rounded-md font-head text-[10px] tracking-[.15em] text-white" style={{ background: 'var(--brand)', boxShadow: '0 0 14px var(--brand-glow)' }}>{short}</span>
    )
  }
  if (!logo) {
    return <span className={`font-head text-[11px] tracking-[.2em] text-white px-2.5 py-1 rounded inline-flex items-center ${className}`} style={{ background: 'var(--brand)' }}>{short}</span>
  }
  return <img src={logo.file} alt={label} className={`w-auto object-contain ${className}`} style={isMono ? { filter: 'brightness(0) invert(1)' } : undefined} draggable={false} />
}
