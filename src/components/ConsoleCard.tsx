import { BrandMark } from './BrandMark'
import type { Console } from '@/types/console'
import { ConsoleImage } from './ConsoleImage'

interface Props { console: Console; index: number; onOpen: (id: string) => void }
const shortYear = (y: string) => y.split(/[（(/]/)[0].trim()

export function ConsoleCard({ console: c, index, onOpen }: Props) {
  return (
    <article data-brand={c.brand} className="card group glass rounded-[20px] overflow-hidden flex flex-col anim-fade-up" style={{ animationDelay: `${index * 40}ms` }}>
      <div className="card-visual h-[200px] relative flex items-center justify-center overflow-hidden [perspective:900px]">
        <span className="absolute top-3.5 left-3.5 z-[4]"><BrandMark brand={c.brand} badge /></span>
        <span className="absolute top-3.5 right-3.5 z-[4] font-head text-[11px] text-white/70 bg-black/40 px-2 py-1 rounded-md backdrop-blur">{shortYear(c.year)}</span>
        <ConsoleImage id={c.id} name={c.name} />
      </div>

      <div className="px-5 pt-4 pb-5 flex flex-col gap-3 flex-1">
        <div>
          <h3 className="font-display text-[17px] text-white">{c.name}</h3>
          <p className="text-[13px] mt-0.5" style={{ color: 'var(--brand-l)' }}>{c.tagline}</p>
        </div>
        <dl className="grid grid-cols-3 gap-2 text-[12px]">
          {([['CPU', c.cpu], ['GPU', c.gpu], ['RAM', c.ram]] as const).map(([k, v]) => (
            <div key={k} className="bg-white/4 border border-line rounded-lg px-2.5 py-2 min-w-0">
              <dt className="label text-accent mb-0.5 !tracking-[.15em]">{k}</dt>
              <dd className="text-[#c9cdd5] line-clamp-2 leading-snug" title={v}>{v}</dd>
            </div>
          ))}
        </dl>
        <div className="text-[12px] text-muted flex flex-wrap gap-x-2 gap-y-1 items-center">
          <span className="text-white/60">代表作</span>
          {c.games.map((g) => <span key={g} className="px-2 py-0.5 rounded-full border border-line bg-white/3 text-[#d0d4da]">{g}</span>)}
        </div>
        <div className="mt-auto pt-3 border-t border-line flex items-center justify-between gap-3">
          <div className="text-[12px] text-muted leading-tight">首发价<br /><b className="text-white font-medium text-[13px]">{c.price}</b></div>
          <button type="button" onClick={() => onOpen(c.id)} className="btn btn-accent btn-sm">查看档案 <span className="arr">→</span></button>
        </div>
      </div>
    </article>
  )
}
