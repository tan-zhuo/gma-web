import { BRANDS, BRAND_ORDER } from '@/data'
import type { Filter } from '@/types/console'

interface Props { value: Filter; onChange: (f: Filter) => void }

const TABS: [Filter, string][] = [['all', '全部'], ...BRAND_ORDER.map((b) => [b, BRANDS[b].label] as [Filter, string])]

export function FilterTabs({ value, onChange }: Props) {
  return (
    <div className="flex gap-2 flex-wrap mb-8" role="tablist">
      {TABS.map(([key, label]) => {
        const active = key === value
        return (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(key)}
            className={`px-4.5 py-2.25 rounded-full border text-sm transition-all ${
              active
                ? 'bg-accent border-accent text-bg font-medium shadow-[0_0_18px_rgba(0,240,255,.35)]'
                : 'border-line bg-white/3 text-muted hover:text-white hover:border-white/20'
            }`}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
