import { BRANDS } from '@/data'
import type { Console } from '@/types/console'
import { ConsoleImage } from './ConsoleImage'

interface Props { console: Console; index: number; onOpen: (id: string) => void }

const shortYear = (y: string) => y.split(/[（(/]/)[0].trim()

export function ConsoleCard({ console: c, index, onOpen }: Props) {
  return (
    <article
      data-brand={c.brand}
      className="group glass rounded-[18px] overflow-hidden flex flex-col anim-fade-up transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/35 hover:shadow-[0_20px_50px_rgba(0,0,0,.5),0_0_0_1px_rgba(0,240,255,.15)]"
      style={{ animationDelay: `${index * 40}ms` }}
    >
      <div
        className="h-[180px] relative flex items-center justify-center overflow-hidden [perspective:700px]
          after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(rgba(255,255,255,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.04)_1px,transparent_1px)] after:bg-[size:24px_24px] after:[mask-image:radial-gradient(ellipse_at_center,#000_30%,transparent_75%)]"
        style={{ background: 'radial-gradient(ellipse at 50% 120%, var(--brand-glow) 0%, transparent 60%), linear-gradient(160deg,#1a1e2a,#0b0c11)' }}
      >
        <span
          className="absolute top-3 left-3 z-[2] font-head text-[10px] tracking-[.15em] px-2.5 py-1.5 rounded-md text-white"
          style={{ background: 'var(--brand)', boxShadow: '0 0 14px var(--brand-glow)' }}
        >
          {BRANDS[c.brand].short}
        </span>
        <span className="absolute top-3 right-3 z-[2] font-head text-[11px] text-muted">{shortYear(c.year)}</span>
        <ConsoleImage id={c.id} name={c.name} />
      </div>

      <div className="px-5 pt-4.5 pb-5 flex flex-col gap-2.5 flex-1">
        <h3 className="font-head text-base text-white font-bold leading-[1.35]">{c.name}</h3>
        <div className="flex flex-wrap gap-x-3.5 gap-y-1.5 text-xs text-muted">
          <span>年份 <b className="text-[#cfd3da] font-medium">{c.year}</b></span>
          <span>介质 <b className="text-[#cfd3da] font-medium">{c.media}</b></span>
        </div>
        <dl className="grid gap-[3px] text-[13px] text-[#b8bcc4]">
          {([['CPU', c.cpu], ['GPU', c.gpu], ['RAM', c.ram]] as const).map(([k, v]) => (
            <div key={k} className="flex gap-2">
              <dt className="font-head text-[10px] text-accent w-8 shrink-0 pt-1 tracking-[.1em]">{k}</dt>
              <dd className="truncate" title={v}>{v}</dd>
            </div>
          ))}
        </dl>
        <button
          type="button"
          onClick={() => onOpen(c.id)}
          className="mt-auto self-start px-4.5 py-2.5 rounded-lg border border-accent text-accent text-[13px] font-medium transition-all hover:bg-accent hover:text-bg hover:shadow-[0_0_18px_rgba(0,240,255,.4)]"
        >
          详情 →
        </button>
      </div>
    </article>
  )
}
