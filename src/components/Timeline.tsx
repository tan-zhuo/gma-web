import { useLang } from '@/i18n'
import { BrandChip } from './BrandChip'
import { PageHead } from './PageHead'

export function Timeline() {
  const { t, data } = useLang()
  return (
    <section className="pb-20 max-[720px]:pb-14">
      <PageHead no={t.timeline.no} tag={t.timeline.tag} title={t.timeline.title} desc={t.timeline.desc} />
      <div className="container-x">
        <div className="relative pl-12 max-[720px]:pl-7 before:content-[''] before:absolute before:left-[13px] max-[720px]:before:left-[6px] before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-accent before:via-accent2 before:to-white/10">
          {data.generations.map((g, i) => (
            <article key={g.n} className="gen glass rounded-2xl px-7 py-6 max-[720px]:p-4.5 mb-5 transition-all hover:border-line-2 hover:translate-x-1 anim-fade-up
                before:content-[''] before:absolute before:-left-[43px] max-[720px]:before:-left-[26px] before:top-7 before:w-4 before:h-4 max-[720px]:before:w-3.5 max-[720px]:before:h-3.5 before:rounded-full before:bg-bg before:border-[3px] before:border-accent before:shadow-[0_0_16px_rgba(0,240,255,.7)]"
              style={{ animationDelay: `${i * 50}ms` }}>
              <span className="wm max-[720px]:text-[64px]">{String(g.n).padStart(2, '0')}</span>
              <div className="flex items-center gap-3 flex-wrap mb-2 relative">
                <span className="font-head text-[11px] text-bg bg-accent px-2 py-0.5 rounded">{t.timeline.gen} {String(g.n).padStart(2, '0')}</span>
                <span className="font-head text-[12px] text-muted">{g.years}</span>
              </div>
              <h3 className="font-display text-[21px] max-[720px]:text-[18px] text-white mb-2 relative">{g.name}</h3>
              <p className="text-[#c5c9d0] text-[15px] max-[720px]:text-[14px] mb-4 max-w-[820px] relative">{g.desc}</p>
              <div className="flex flex-wrap gap-2 relative">{g.chips.map(([label, brand]) => <BrandChip key={label} label={label} brand={brand} />)}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
