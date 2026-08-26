import { useEffect, useRef } from 'react'
import { BRANDS } from '@/data'
import { useLockBody } from '@/hooks/useLockBody'
import type { Console } from '@/types/console'

interface Props { console: Console | null; onClose: () => void }

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-5.5">
      <h4 className="font-head text-[11px] tracking-[.2em] uppercase text-accent2 mb-2.5 flex items-center gap-2.5 after:content-[''] after:flex-1 after:h-px after:bg-white/8">
        {title}
      </h4>
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
    return () => {
      document.removeEventListener('keydown', onKey)
      ;(lastFocus.current as HTMLElement | null)?.focus?.()
    }
  }, [open, onClose])

  if (!c) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-5 bg-[#05060a]/75 backdrop-blur-lg anim-fade"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        data-brand={c.brand}
        className="w-[min(760px,100%)] max-h-[90vh] overflow-y-auto rounded-[20px] border border-white/12 px-8.5 py-8 max-[680px]:px-5 max-[680px]:py-6.5 relative anim-pop
          bg-gradient-to-br from-[#171a25] to-[#0e1016] shadow-[0_30px_80px_rgba(0,0,0,.6),0_0_0_1px_rgba(0,240,255,.1)]
          before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:rounded-t-[20px] before:bg-[linear-gradient(90deg,var(--brand-l),var(--color-accent2))]"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="关闭"
          className="absolute top-3.5 right-3.5 w-9 h-9 rounded-full border border-line bg-white/5 text-white text-lg transition-colors hover:bg-accent2 hover:border-accent2"
        >
          ×
        </button>

        <div className="font-head text-[11px] tracking-[.2em] text-accent">{BRANDS[c.brand].label.toUpperCase()}</div>
        <h2 id="modal-title" className="font-head text-[26px] text-white font-bold mt-1.5 mb-2.5">{c.name}</h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {([['年份', c.year], ['介质', c.media], ['销量', c.sales]] as const).map(([k, v]) => (
            <span key={k} className="text-xs px-3 py-1.25 rounded-full border border-line bg-white/4 text-[#d0d4da]">
              <b className="text-accent font-medium mr-1">{k}</b>{v}
            </span>
          ))}
        </div>

        <Block title="核心规格">
          <div className="grid grid-cols-3 max-[680px]:grid-cols-1 gap-2.5">
            {([['CPU', c.cpu], ['GPU', c.gpu], ['内存', c.ram]] as const).map(([k, v]) => (
              <div key={k} className="bg-white/4 border border-line rounded-[10px] px-3.5 py-3">
                <i className="not-italic block font-head text-[10px] text-accent tracking-[.15em] mb-1">{k}</i>
                <span className="text-[13px] text-[#e3e6ea]">{v}</span>
              </div>
            ))}
          </div>
        </Block>

        <Block title="操作方式">
          <div className="grid gap-2.5">
            {([['控制器', c.control], ['使用说明', c.ops]] as const).map(([k, v]) => (
              <div key={k} className="bg-white/3 border-l-2 border-accent px-3.5 py-2.5 rounded-r-lg">
                <i className="not-italic text-xs text-muted block mb-0.5">{k}</i>
                <span className="text-sm text-[#d5d8de]">{v}</span>
              </div>
            ))}
          </div>
        </Block>

        <Block title="历史意义"><p className="text-[15px] text-[#d5d8de]">{c.history}</p></Block>
        <Block title="性能讲解"><p className="text-[15px] text-[#d5d8de]">{c.perf}</p></Block>
      </div>
    </div>
  )
}
