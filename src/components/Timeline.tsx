import { GENERATIONS } from '@/data'
import { BrandChip } from './BrandChip'
import { PageHead } from './PageHead'

export function Timeline() {
  return (
    <section className="pb-20 max-[720px]:pb-14">
      <PageHead
          no="01"
          tag="Timeline"
          title="九代世代时间线"
          desc="「世代」并非官方标准，而是按硬件能力跃迁与主要厂商发布周期归纳的行业共识。每一代都有一个决定性的技术或市场转折。"
        />
      <div className="container-x">
        <div className="relative pl-12 max-[720px]:pl-8 before:content-[''] before:absolute before:left-[13px] max-[720px]:before:left-[7px] before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-accent before:via-accent2 before:to-white/10">
          {GENERATIONS.map((g, i) => (
            <article
              key={g.n}
              className="gen glass rounded-2xl px-7 py-6 max-[720px]:p-5 mb-5 transition-all hover:border-line-2 hover:translate-x-1 anim-fade-up
                before:content-[''] before:absolute before:-left-[43px] max-[720px]:before:-left-[29px] before:top-7 before:w-4 before:h-4 before:rounded-full before:bg-bg before:border-[3px] before:border-accent before:shadow-[0_0_16px_rgba(0,240,255,.7)]"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              <span className="wm">{String(g.n).padStart(2, '0')}</span>
              <div className="flex items-center gap-3 flex-wrap mb-2 relative">
                <span className="font-head text-[11px] text-bg bg-accent px-2 py-0.5 rounded">GEN {String(g.n).padStart(2, '0')}</span>
                <span className="font-head text-[12px] text-muted">{g.years}</span>
              </div>
              <h3 className="font-display text-[21px] text-white mb-2 relative">{g.name}</h3>
              <p className="text-[#c5c9d0] text-[15px] mb-4 max-w-[820px] relative">{g.desc}</p>
              <div className="flex flex-wrap gap-2 relative">
                {g.chips.map(([label, brand]) => <BrandChip key={label} label={label} brand={brand} />)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
