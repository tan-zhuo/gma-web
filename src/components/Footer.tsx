import { Link } from 'react-router-dom'
import { NAV_LINKS } from '@/data'

export function Footer() {
  return (
    <footer className="border-t border-line mt-6">
      <div className="container-x py-12 grid grid-cols-[1.4fr_1fr_1fr] max-[720px]:grid-cols-1 gap-8">
        <div>
          <div className="font-head font-black text-[17px] text-white flex items-center gap-2.5 mb-3"><i className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_12px_#00f0ff]" />CONSOLE<span className="text-accent">ARCHIVE</span></div>
          <p className="text-[13px] text-muted max-w-[380px]">人类游戏机历史档案。从 1972 到 2026，记录每一台改变行业的机器，以及它们为什么重要。</p>
        </div>
        <div>
          <div className="label text-accent2 mb-3">Pages</div>
          <ul className="grid gap-1.5 text-[13.5px]">{NAV_LINKS.map((l) => <li key={l.to}><Link to={l.to} className="text-[#c5c9d0] hover:text-white transition-colors">{l.label}</Link></li>)}</ul>
        </div>
        <div>
          <div className="label text-accent2 mb-3">Stack</div>
          <ul className="grid gap-1.5 text-[13.5px] text-[#c5c9d0]"><li>Vite · React 19 · TypeScript</li><li>Tailwind CSS v4 · React Router</li><li>图片：Wikimedia Commons</li></ul>
        </div>
      </div>
      <div className="border-t border-line"><div className="container-x py-5 text-[12px] text-muted flex justify-between flex-wrap gap-2"><span>© 2026 Console Archive</span><span className="font-head">1972 — 2026 · 9 GENERATIONS</span></div></div>
    </footer>
  )
}
