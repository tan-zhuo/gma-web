import { GENERATIONS } from '@/data'
import { BrandChip } from './BrandChip'
import { SectionHead } from './SectionHead'

export function Timeline() {
  return (
    <section id="timeline" className="py-18 max-[680px]:py-13 scroll-mt-[70px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHead
          tag="Timeline"
          title="九代世代时间线"
          desc="业界通行的「世代」划分并非官方标准，而是按硬件能力跃迁与主要厂商发布周期归纳。以下以主流共识划分，标注每代的关键机型与技术转折。"
        />
        <div className="relative pl-10 max-[680px]:pl-[30px] before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-accent before:via-accent2 before:to-white/10">
          {GENERATIONS.map((g) => (
            <article
              key={g.n}
              className="relative mb-7 glass rounded-2xl px-6.5 py-6 max-[680px]:p-4.5 transition-all hover:border-accent/35 hover:translate-x-1
                before:content-[''] before:absolute before:-left-9 max-[680px]:before:-left-[26px] before:top-[30px] before:w-3.5 before:h-3.5 before:rounded-full before:bg-bg before:border-[3px] before:border-accent before:shadow-[0_0_14px_rgba(0,240,255,.6)]"
            >
              <div className="flex items-baseline gap-3.5 flex-wrap mb-2">
                <span className="font-head text-[13px] text-accent tracking-[.2em]">GEN {String(g.n).padStart(2, '0')}</span>
                <h3 className="font-head text-xl text-white font-bold">{g.name}</h3>
                <span className="font-head text-muted text-sm ml-auto">{g.years}</span>
              </div>
              <p className="text-[#c5c9d0] text-[15px] mb-3.5">{g.desc}</p>
              <div className="flex flex-wrap gap-2">
                {g.chips.map(([label, brand]) => (
                  <BrandChip key={label} label={label} brand={brand} />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
