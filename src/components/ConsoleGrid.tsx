import { useEffect, useMemo, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import { useLang } from '@/i18n'
import type { Filter } from '@/types/console'
import { ConsoleCard } from './ConsoleCard'
import { DetailModal } from './DetailModal'
import { FilterTabs } from './FilterTabs'
import { PageHead } from './PageHead'

export function ConsoleGrid() {
  const { t, data } = useLang()
  const [params, setParams] = useSearchParams()
  const filter = (params.get('brand') ?? 'all') as Filter
  const setFilter = (f: Filter) => setParams(f === 'all' ? {} : { brand: f }, { replace: true })
  const [openId, setOpenId] = useState<string | null>(null)
  const { hash } = useLocation()
  useEffect(() => { const id = hash.slice(1); if (id && data.consoles.some((c) => c.id === id)) setOpenId(id) }, [hash, data.consoles])
  const list = useMemo(() => (filter === 'all' ? data.consoles : data.consoles.filter((c) => c.brand === filter)), [filter, data.consoles])
  const selected = useMemo(() => data.consoles.find((c) => c.id === openId) ?? null, [openId, data.consoles])

  return (
    <section className="pb-20 max-[720px]:pb-14">
      <PageHead no={t.consoles.no} tag={t.consoles.tag} title={t.consoles.title} desc={t.consoles.desc} />
      <div className="container-x">
        <FilterTabs value={filter} onChange={setFilter} />
        <div key={filter} className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] max-[720px]:grid-cols-1 gap-6 max-[720px]:gap-4">
          {list.map((c, i) => <ConsoleCard key={c.id} console={c} index={i} onOpen={setOpenId} />)}
        </div>
      </div>
      <DetailModal console={selected} onClose={() => setOpenId(null)} />
    </section>
  )
}
