import { useEffect, useRef } from 'react'
import { BRANDS, CREDITS } from '@/data'
import { useLockBody } from '@/hooks/useLockBody'
import type { Console } from '@/types/console'
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

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#05060a]/80 backdrop-blur-lg anim-fade" onClick={(e) => e.target === e.currentTarget && onClose()} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div data-brand={c.brand} className="w-[min(860px,100%)] max-h-[92vh] overflow-y-auto rounded-3xl border border-line-2 relative anim-pop bg-gradient-to-br from-[#171a25] to-[#0e1016] shadow-[0_40px_100px_rgba(0,0,0,.7)]">
        {/* header */}
        <div className="card-visual relative px-8 pt-8 pb-6 max-[720px]:px-5 max-[720px]:pt-6 grid grid-cols-[1fr_260px] max-[720px]:grid-cols-1 gap-6 items-center border-b border-line">
          <div className="relative z-[1]">
            <div className="inline-flex items-center gap-2 font-head text-[10px] tracking-[.2em] px-2.5 py-1 rounded-md text-white mb-3" style={{ background: 'var(--brand)' }}>{BRANDS[c.brand].label.toUpperCase()}</div>
            <h2 id="modal-title" className="font-display text-[30px] max-[720px]:text-[24px] text-white">{c.name}</h2>
            <p className="text-[15px] mt-1 mb-4" style={{ color: 'var(--brand-l)' }}>{c.tagline}</p>
            <div className="flex flex-wrap gap-2">
              {([['年份', c.year], ['介质', c.media], ['销量', c.sales], ['首发价', c.price]] as const).map(([kk, v]) => (
                <span key={kk} className="text-xs px-3 py-1.5 rounded-full border border-line bg-black/30 text-[#d0d4da]"><b className="text-accent font-medium mr-1.5">{kk}</b>{v}</span>
              ))}
            </div>
          </div>
          <div className="h-[170px] max-[720px]:h-[150px] flex items-center justify-center [perspective:900px] relative z-[1]"><ConsoleImage id={c.id} name={c.name} className="w-full h-full" /></div>
          <button ref={closeRef} type="button" onClick={onClose} aria-label="关闭" className="absolute top-4 right-4 z-[2] w-9 h-9 rounded-full border border-line-2 bg-black/40 text-white text-lg transition-all hover:bg-accent2 hover:border-accent2 hover:rotate-90">×</button>
        </div>

        <div className="px-8 py-7 max-[720px]:px-5">
          <Block title="核心规格">
            <div className="grid grid-cols-3 max-[720px]:grid-cols-1 gap-3">
              {([['CPU', c.cpu], ['GPU', c.gpu], ['内存', c.ram]] as const).map(([kk, v]) => (
                <div key={kk} className="bg-white/4 border border-line rounded-xl px-4 py-3"><i className="not-italic block label text-accent mb-1">{kk}</i><span className="text-[13.5px] text-[#e3e6ea] leading-relaxed">{v}</span></div>
              ))}
            </div>
          </Block>
          <Block title="代表作">
            <div className="flex flex-wrap gap-2">{c.games.map((g) => <span key={g} className="px-3 py-1.5 rounded-lg border border-line bg-white/4 text-[13px] text-white">{g}</span>)}</div>
          </Block>
          <Block title="操作方式">
            <div className="grid gap-2.5">
              {([['控制器', c.control], ['使用说明', c.ops]] as const).map(([kk, v]) => (
                <div key={kk} className="bg-white/3 border-l-2 px-4 py-3 rounded-r-lg" style={{ borderColor: 'var(--brand-l)' }}><i className="not-italic text-xs text-muted block mb-0.5">{kk}</i><span className="text-[14.5px] text-[#d5d8de]">{v}</span></div>
              ))}
            </div>
          </Block>
          <div className="grid grid-cols-2 max-[720px]:grid-cols-1 gap-6">
            <Block title="历史意义"><p className="text-[15px] text-[#d5d8de]">{c.history}</p></Block>
            <Block title="性能讲解"><p className="text-[15px] text-[#d5d8de]">{c.perf}</p></Block>
          </div>
          {k && (
            <p className="text-[11px] text-muted border-t border-line pt-4">
              图片：<a href={k.page} target="_blank" rel="noreferrer" className="underline hover:text-accent">{k.title.replace(/^File:/, '')}</a> · {k.artist} · {k.license} · Wikimedia Commons
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
