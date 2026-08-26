import { useMemo, useState } from 'react'
import { CONSOLES } from '@/data'
import type { Filter } from '@/types/console'
import { ConsoleCard } from './ConsoleCard'
import { DetailModal } from './DetailModal'
import { FilterTabs } from './FilterTabs'
import { SectionHead } from './SectionHead'

export function ConsoleGrid() {
  const [filter, setFilter] = useState<Filter>('all')
  const [openId, setOpenId] = useState<string | null>(null)
  const list = useMemo(() => (filter === 'all' ? CONSOLES : CONSOLES.filter((c) => c.brand === filter)), [filter])
  const selected = useMemo(() => CONSOLES.find((c) => c.id === openId) ?? null, [openId])

  return (
    <section id="series" className="py-20 max-[720px]:py-14 scroll-mt-[70px]">
      <div className="container-x">
        <SectionHead no="02" tag="Core Series" title="核心系列详解"
          desc="五个系列、23 台机器。每张卡片给出定位、核心规格、代表作与首发价；点击「查看档案」展开操作方式、历史意义与性能讲解。" />
        <FilterTabs value={filter} onChange={setFilter} />
        <div key={filter} className="grid grid-cols-[repeat(auto-fill,minmax(320px,1fr))] max-[720px]:grid-cols-1 gap-6">
          {list.map((c, i) => <ConsoleCard key={c.id} console={c} index={i} onOpen={setOpenId} />)}
        </div>
      </div>
      <DetailModal console={selected} onClose={() => setOpenId(null)} />
    </section>
  )
}
