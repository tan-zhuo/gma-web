import { Link } from 'react-router-dom'
import { NAV_KEYS, SITE_LINKS } from '@/data'
import { useLang } from '@/i18n'
import { Logo } from './Logo'

export function Footer() {
  const { t, path } = useLang()
  return (
    <footer className="border-t border-line mt-6">
      <div className="container-x py-12 grid grid-cols-[1.4fr_1fr_1fr_1fr] max-[900px]:grid-cols-2 max-[560px]:grid-cols-1 gap-8">
        <div>
          <Logo className="mb-3" />
          <p className="text-[13px] text-muted max-w-[380px]">{t.footer.blurb}</p>
        </div>
        <div>
          <div className="label text-accent2 mb-3">{t.footer.pages}</div>
          <ul className="grid gap-1.5 text-[13.5px]">{NAV_KEYS.map((l) => <li key={l.to}><Link to={path(l.to)} className="text-[#c5c9d0] hover:text-white transition-colors">{t.nav[l.key]}</Link></li>)}</ul>
        </div>
        <div>
          <div className="label text-accent2 mb-3">{t.footer.links}</div>
          <ul className="grid gap-1.5 text-[13.5px]">
            <li><a href={SITE_LINKS.repo} target="_blank" rel="noreferrer" className="text-[#c5c9d0] hover:text-white transition-colors">{t.footer.repo}</a></li>
            <li><a href={SITE_LINKS.blog} target="_blank" rel="noreferrer" className="text-[#c5c9d0] hover:text-white transition-colors">{t.footer.blog}</a></li>
          </ul>
        </div>
        <div>
          <div className="label text-accent2 mb-3">{t.footer.stack}</div>
          <ul className="grid gap-1.5 text-[13.5px] text-[#c5c9d0]"><li>Vite · React 19 · TypeScript</li><li>Tailwind CSS v4 · React Router</li><li>{t.footer.images}</li></ul>
        </div>
      </div>
      <div className="border-t border-line"><div className="container-x py-5 text-[12px] text-muted flex justify-between flex-wrap gap-2">
        <span>© 2026 Console Archive · <a href={SITE_LINKS.blog} target="_blank" rel="noreferrer" className="hover:text-white">{SITE_LINKS.author}</a> · <a href={SITE_LINKS.repo} target="_blank" rel="noreferrer" className="hover:text-white">{t.footer.mit}</a></span>
        <span className="font-head">{t.footer.gens}</span>
      </div></div>
    </footer>
  )
}
