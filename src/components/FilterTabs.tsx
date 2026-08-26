import { BRAND_ORDER } from '@/data'
import { useLang } from '@/i18n'
import type { Brand, Filter } from '@/types/console'

interface Props { value: Filter; onChange: (f: Filter) => void }

export function FilterTabs({ value, onChange }: Props) {
  const { t, data } = useLang()
  const count = (b: Filter) => (b === 'all' ? data.consoles.length : data.consoles.filter((c) => c.brand === b).length)
  const tabs: [Filter, string][] = [['all', t.consoles.all], ...BRAND_ORDER.map((b) => [b, data.brands[b].label] as [Filter, string])]
  return (
    <div className="overflow-x-auto -mx-6 px-6 pb-2 mb-8 max-[720px]:mb-6 [scrollbar-width:none]">
      <div className="tabs" role="tablist" aria-label={t.consoles.filterLabel}>
        {tabs.map(([key, label]) => (
          <button key={key} type="button" role="tab" aria-selected={key === value} onClick={() => onChange(key)} className="tab" data-brand={key !== 'all' ? (key as Brand) : undefined}>
            <span>{label}</span><span className="cnt">{count(key)}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
