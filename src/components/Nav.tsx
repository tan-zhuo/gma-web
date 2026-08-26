import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV_LINKS, SITE_LINKS } from '@/data'

export function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-bg/75 border-b border-line">
      <div className="container-x h-16 flex items-center gap-8">
        <Link to="/" className="font-head font-black text-[16px] text-white flex items-center gap-2.5 whitespace-nowrap mr-auto">
          <i className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_#00f0ff]" />
          CONSOLE<span className="text-accent">ARCHIVE</span>
        </Link>
        <ul className="flex items-center gap-1 max-[720px]:hidden">
          {NAV_LINKS.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}>{l.label}</NavLink>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2 max-[720px]:hidden">
          <a href={SITE_LINKS.repo} target="_blank" rel="noreferrer" aria-label="GitHub 开源仓库" title="GitHub" className="w-9 h-9 rounded-lg border border-line bg-white/4 flex items-center justify-center text-muted hover:text-white hover:border-line-2 transition-colors">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1.1 1.9 2.8 1.3 3.5 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z"/></svg>
          </a>
          <Link to="/consoles" className="btn btn-ghost btn-sm">浏览机型 <span className="arr">→</span></Link>
        </div>
        <button type="button" aria-label="菜单" aria-expanded={open} onClick={() => setOpen((v) => !v)} className="hidden max-[720px]:flex w-10 h-10 items-center justify-center rounded-lg border border-line bg-white/4">
          <span className="relative w-4 h-3 block">
            <i className={`absolute left-0 right-0 h-0.5 bg-white rounded transition-all ${open ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'}`} />
            <i className={`absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-white rounded transition-opacity ${open ? 'opacity-0' : ''}`} />
            <i className={`absolute left-0 right-0 h-0.5 bg-white rounded transition-all ${open ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'}`} />
          </span>
        </button>
      </div>
      {open && (
        <div className="hidden max-[720px]:block border-t border-line bg-bg/95 anim-fade">
          <ul className="container-x py-2">
            {NAV_LINKS.map((l) => (
              <li key={l.to}><NavLink to={l.to} onClick={() => setOpen(false)} className={({ isActive }) => `block py-3 border-b border-line last:border-0 text-[15px] ${isActive ? 'text-accent' : 'text-text'}`}>{l.label}</NavLink></li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
