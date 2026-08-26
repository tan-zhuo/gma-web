import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV_LINKS } from '@/data'

export function Nav() {
  const [open, setOpen] = useState(false)
  const cls = ({ isActive }: { isActive: boolean }) => `nav-link block px-3.5 py-2 rounded-lg text-sm transition-colors hover:text-white ${isActive ? 'text-white' : 'text-muted'}`
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-bg/72 border-b border-line">
      <div className="container-x h-16 flex items-center justify-between gap-4">
        <Link to="/" className="font-head font-black text-[17px] text-white flex items-center gap-2.5 whitespace-nowrap">
          <i className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_12px_#00f0ff]" />
          CONSOLE<span className="text-accent">ARCHIVE</span>
        </Link>
        <ul className="flex gap-1 max-[720px]:hidden">
          {NAV_LINKS.map((l) => (
            <li key={l.to}><NavLink to={l.to} className={cls} aria-current={undefined}>{({ isActive }) => <span className="nav-link" aria-current={isActive}>{l.label}</span>}</NavLink></li>
          ))}
        </ul>
        <div className="max-[720px]:hidden"><Link to="/consoles" className="btn btn-accent btn-sm">浏览机型 <span className="arr">→</span></Link></div>
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
