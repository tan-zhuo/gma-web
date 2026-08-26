import { useEffect, useMemo, useState } from 'react'
import { CONSOLES } from '@/data'
import type { Filter } from '@/types/console'
import { ConsoleCard } from './ConsoleCard'
import { DetailModal } from './DetailModal'
import { FilterTabs } from './FilterTabs'
import { PageHead } from './PageHead'
import { useLocation, useSearchParams } from 'react-router-dom'

export function ConsoleGrid() {
  const [params, setParams] = useSearchParams()
  const filter = (params.get('brand') ?? 'all') as Filter
  const setFilter = (f: Filter) => setParams(f === 'all' ? {} : { brand: f }, { replace: true })
  const [openId, setOpenId] = useState<string | null>(null)
  const { hash } = useLocation()
  useEffect(() => { const id = hash.slice(1); if (id && CONSOLES.some((c) => c.id === id)) setOpenId(id) }, [hash])
  const list = useMemo(() => (filter === 'all' ? CONSOLES : CONSOLES.filter((c) => c.brand === filter)), [filter])
  const selected = useMemo(() => CONSOLES.find((c) => c.id === openId) ?? null, [openId])

  return (
    <section className="pb-20 max-[720px]:pb-14">
      <PageHead no="02" tag="Core Series" title="核心系列详解"
          desc="八个系列、34 台机器。每张卡片给出定位、核心规格、代表作与首发价；点击「查看档案」展开操作方式、历史意义与性能讲解。" />
      <div className="container-x">
        <FilterTabs value={filter} onChange={setFilter} />
        <div key={filter} className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] max-[720px]:grid-cols-1 gap-6">
          {list.map((c, i) => <ConsoleCard key={c.id} console={c} index={i} onOpen={setOpenId} />)}
        </div>
      </div>
      <DetailModal console={selected} onClose={() => setOpenId(null)} />
    </section>
  )
}
