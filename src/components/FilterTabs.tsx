import { BRANDS, BRAND_ORDER, CONSOLES } from '@/data'
import type { Brand, Filter } from '@/types/console'

interface Props { value: Filter; onChange: (f: Filter) => void }

const COUNT = (b: Filter) => (b === 'all' ? CONSOLES.length : CONSOLES.filter((c) => c.brand === b).length)
const DOT: Record<Brand, string> = { ps: 'var(--color-ps-l)', xbox: 'var(--color-xbox-l)', nintendo: 'var(--color-nintendo-l)', xiaobawang: 'var(--color-xiaobawang-l)', steam: 'var(--color-steam-l)', sega: 'var(--color-sega-l)', classic: 'var(--color-classic-l)' }
const TABS: [Filter, string][] = [['all', '全部'], ...BRAND_ORDER.map((b) => [b, BRANDS[b].label] as [Filter, string])]

export function FilterTabs({ value, onChange }: Props) {
  return (
    <div className="overflow-x-auto -mx-6 px-6 pb-1 mb-8 [scrollbar-width:none]">
      <div className="tabs" role="tablist">
        {TABS.map(([key, label]) => (
          <button key={key} type="button" role="tab" aria-selected={key === value} onClick={() => onChange(key)} className="tab"
            style={key !== 'all' ? ({ '--dot': DOT[key as Brand] } as React.CSSProperties) : undefined}>
            {key !== 'all' && <span className="dot" />}
            {label}
            <span className="cnt">{COUNT(key)}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
