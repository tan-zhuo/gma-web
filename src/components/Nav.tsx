import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV_KEYS, SITE_LINKS } from '@/data'
import { useLang } from '@/i18n'
import { LangSwitch } from './LangSwitch'
import { Logo } from './Logo'

export function Nav() {
  const [open, setOpen] = useState(false)
  const { t, path } = useLang()
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-bg/75 border-b border-line">
      <div className="container-x h-16 flex items-center gap-6 max-[720px]:gap-3">
        <Logo className="mr-auto" />
        <ul className="flex items-center gap-1 max-[900px]:hidden">
          {NAV_KEYS.map((l) => (
            <li key={l.to}><NavLink to={path(l.to)} className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}>{t.nav[l.key]}</NavLink></li>
          ))}
        </ul>
        <LangSwitch className="max-[720px]:hidden" />
        <div className="flex items-center gap-2 max-[900px]:hidden">
          <a href={SITE_LINKS.repo} target="_blank" rel="noreferrer" aria-label={t.nav.github} title="GitHub" className="w-9 h-9 rounded-lg border border-line bg-white/4 flex items-center justify-center text-muted hover:text-white hover:border-line-2 transition-colors">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.9 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"/></svg>
          </a>
          <Link to={path('/consoles')} className="btn btn-ghost btn-sm">{t.nav.browse} <span className="arr">→</span></Link>
        </div>
        <button type="button" aria-label={t.nav.menu} aria-expanded={open} onClick={() => setOpen((v) => !v)} className="hidden max-[900px]:flex w-10 h-10 items-center justify-center rounded-lg border border-line bg-white/4">
          <span className="relative w-4 h-3 block">
            <i className={`absolute left-0 right-0 h-0.5 bg-white rounded transition-all ${open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}`} />
            <i className={`absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-white rounded transition-opacity ${open ? 'opacity-0' : ''}`} />
            <i className={`absolute left-0 right-0 h-0.5 bg-white rounded transition-all ${open ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'}`} />
          </span>
        </button>
      </div>
      {open && (
        <div className="hidden max-[900px]:block border-t border-line bg-bg/95 anim-fade">
          <ul className="container-x py-2">
            {NAV_KEYS.map((l) => (
              <li key={l.to}><NavLink to={path(l.to)} onClick={() => setOpen(false)} className={({ isActive }) => `block py-3 border-b border-line text-[15px] ${isActive ? 'text-accent' : 'text-text'}`}>{t.nav[l.key]}</NavLink></li>
            ))}
            <li className="py-3 flex items-center justify-between gap-3">
              <LangSwitch align="left" />
              <a href={SITE_LINKS.repo} target="_blank" rel="noreferrer" className="text-sm text-muted hover:text-white">GitHub ↗</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
