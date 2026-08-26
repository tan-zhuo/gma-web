import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { LANGS, useBarePath, useLang } from '@/i18n'

export function LangSwitch({ className = '' }: { className?: string }) {
  const { lang, t } = useLang()
  const bare = useBarePath()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const current = LANGS.find((l) => l.code === lang)!
  const hrefFor = (prefix: string) => (prefix + (bare === '/' && prefix ? '' : bare)) || '/'

  useEffect(() => {
    if (!open) return
    const onDoc = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setOpen(false) }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDoc); document.addEventListener('keydown', onKey)
    return () => { document.removeEventListener('mousedown', onDoc); document.removeEventListener('keydown', onKey) }
  }, [open])

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button type="button" onClick={() => setOpen((v) => !v)} aria-haspopup="menu" aria-expanded={open} aria-label={t.nav.lang}
        className="h-9 pl-2.5 pr-2 inline-flex items-center gap-2 rounded-lg border border-line bg-white/4 text-[13px] text-[#d0d4da] hover:text-white hover:border-line-2 transition-colors">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" /></svg>
        {current.label}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden className={`transition-transform ${open ? 'rotate-180' : ''}`}><path d="m6 9 6 6 6-6" /></svg>
      </button>
      {open && (
        <ul role="menu" className="absolute right-0 top-[calc(100%+6px)] min-w-[150px] z-[60] py-1.5 rounded-xl border border-line-2 bg-[#151824]/95 backdrop-blur-xl shadow-[0_16px_40px_rgba(0,0,0,.5)] anim-pop">
          {LANGS.map((l) => (
            <li key={l.code} role="none">
              <Link role="menuitem" to={hrefFor(l.prefix)} hrefLang={l.htmlLang} lang={l.htmlLang} onClick={() => setOpen(false)} aria-current={l.code === lang ? 'true' : undefined}
                className={`flex items-center justify-between gap-4 px-3.5 py-2 text-[13.5px] transition-colors hover:bg-white/6 hover:text-white ${l.code === lang ? 'text-accent' : 'text-[#d0d4da]'}`}>
                {l.label}
                {l.code === lang && <span className="text-accent text-xs">✓</span>}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
