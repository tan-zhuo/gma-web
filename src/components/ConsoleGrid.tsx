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
    <section id="series" className="py-18 max-[680px]:py-13 scroll-mt-[70px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHead
          tag="Core Series"
          title="核心系列详解"
          desc="点击「详情」查看每台机器的核心规格、操作方式、历史意义与性能讲解。所有规格以公开资料为准。"
        />
        <FilterTabs value={filter} onChange={setFilter} />
        <div key={filter} className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] max-[680px]:grid-cols-1 gap-5.5">
          {list.map((c, i) => (
            <ConsoleCard key={c.id} console={c} index={i} onOpen={setOpenId} />
          ))}
        </div>
      </div>
      <DetailModal console={selected} onClose={() => setOpenId(null)} />
    </section>
  )
}
