import { useEffect, useRef } from 'react'
import { CREDITS, LOGOS } from '@/data'
import { useLockBody } from '@/hooks/useLockBody'
import { useLang } from '@/i18n'
import type { Console } from '@/types/console'
import { BrandMark } from './BrandMark'
import { ConsoleImage } from './ConsoleImage'

interface Props { console: Console | null; onClose: () => void }

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h4 className="label text-accent2 mb-3 flex items-center gap-3 after:content-[''] after:flex-1 after:h-px after:bg-white/8">{title}</h4>
      {children}
    </div>
  )
}

export function DetailModal({ console: c, onClose }: Props) {
  const { t, data } = useLang()
  const open = c !== null
  const closeRef = useRef<HTMLButtonElement>(null)
  const lastFocus = useRef<Element | null>(null)
  useLockBody(open)
  useEffect(() => {
    if (!open) return
    lastFocus.current = document.activeElement
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('keydown', onKey); (lastFocus.current as HTMLElement | null)?.focus?.() }
  }, [open, onClose])
  if (!c) return null
  const k = CREDITS[c.id]
  const tc = t.consoles

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 max-[720px]:p-0 bg-[#05060a]/80 backdrop-blur-lg anim-fade" onClick={(e) => e.target === e.currentTarget && onClose()} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div data-brand={c.brand} className="w-[min(860px,100%)] max-h-[92vh] max-[720px]:max-h-full max-[720px]:h-full overflow-y-auto rounded-3xl max-[720px]:rounded-none border border-line-2 max-[720px]:border-0 relative anim-pop bg-gradient-to-br from-[#171a25] to-[#0e1016] shadow-[0_40px_100px_rgba(0,0,0,.7)]">
        <div className="card-visual relative px-8 pt-8 pb-6 max-[720px]:px-5 max-[720px]:pt-14 max-[720px]:pb-5 grid grid-cols-[1fr_260px] max-[720px]:grid-cols-1 gap-6 max-[720px]:gap-4 items-center border-b border-line">
          <div className="relative z-[1]">
            <div className="flex items-center gap-3 mb-3"><BrandMark brand={c.brand} className="h-5 max-w-[110px]" />{LOGOS[c.brand] && <span className="text-xs text-muted">{data.brands[c.brand].label}</span>}</div>
            <h2 id="modal-title" className="font-display text-[30px] max-[720px]:text-[24px] text-white">{c.name}</h2>
            <p className="text-[15px] mt-1 mb-4" style={{ color: 'var(--brand-l)' }}>{c.tagline}</p>
            <div className="flex flex-wrap gap-2">
              {([[tc.year, c.year], [tc.media, c.media], [tc.sales, c.sales], [tc.price, c.price]] as const).map(([kk, v]) => (
                <span key={kk} className="text-xs px-3 py-1.5 rounded-full border border-line bg-black/30 text-[#d0d4da]"><b className="text-accent font-medium mr-1.5">{kk}</b>{v}</span>
              ))}
            </div>
          </div>
          <div className="h-[170px] max-[720px]:h-[150px] max-[720px]:order-first flex items-center justify-center [perspective:900px] relative z-[1]"><ConsoleImage id={c.id} name={c.name} className="w-full h-full" /></div>
          <button ref={closeRef} type="button" onClick={onClose} aria-label={tc.close} className="absolute top-4 right-4 z-[2] w-9 h-9 rounded-full border border-line-2 bg-black/40 text-white text-lg transition-all hover:bg-accent2 hover:border-accent2 hover:rotate-90">×</button>
        </div>
        <div className="px-8 py-7 max-[720px]:px-5 max-[720px]:py-5">
          <Block title={tc.specs}>
            <div className="grid grid-cols-3 max-[720px]:grid-cols-1 gap-3">
              {([[tc.cpu, c.cpu], [tc.gpu, c.gpu], [tc.ram, c.ram]] as const).map(([kk, v]) => (
                <div key={kk} className="bg-white/4 border border-line rounded-xl px-4 py-3"><i className="not-italic block label text-accent mb-1">{kk}</i><span className="text-[13.5px] text-[#e3e6ea] leading-relaxed">{v}</span></div>
              ))}
            </div>
          </Block>
          <Block title={tc.games}><div className="flex flex-wrap gap-2">{c.games.map((g) => <span key={g} className="px-3 py-1.5 rounded-lg border border-line bg-white/4 text-[13px] text-white">{g}</span>)}</div></Block>
          <Block title={tc.ops}>
            <div className="grid gap-2.5">
              {([[tc.controller, c.control], [tc.usage, c.ops]] as const).map(([kk, v]) => (
                <div key={kk} className="bg-white/3 border-l-2 px-4 py-3 rounded-r-lg" style={{ borderColor: 'var(--brand-l)' }}><i className="not-italic text-xs text-muted block mb-0.5">{kk}</i><span className="text-[14.5px] text-[#d5d8de]">{v}</span></div>
              ))}
            </div>
          </Block>
          <div className="grid grid-cols-2 max-[720px]:grid-cols-1 gap-6 max-[720px]:gap-0">
            <Block title={tc.history}><p className="text-[15px] text-[#d5d8de]">{c.history}</p></Block>
            <Block title={tc.perf}><p className="text-[15px] text-[#d5d8de]">{c.perf}</p></Block>
          </div>
          {k && <p className="text-[11px] text-muted border-t border-line pt-4">{tc.imageCredit}: <a href={k.page} target="_blank" rel="noreferrer" className="underline hover:text-accent">{k.title.replace(/^File:/, '')}</a> · {k.artist} · {k.license} · {tc.onCommons}</p>}
        </div>
      </div>
    </div>
  )
}
