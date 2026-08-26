import { NAV_LINKS } from '@/data'
import { useActiveSection } from '@/hooks/useActiveSection'

const IDS = NAV_LINKS.map((l) => l.id)

export function Nav() {
  const active = useActiveSection(IDS)
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-bg/70 border-b border-line">
      <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between max-[680px]:justify-center gap-4">
        <a href="#top" className="font-head font-black text-lg text-white flex items-center gap-2.5 whitespace-nowrap">
          <i className="w-2.5 h-2.5 rounded-full bg-accent shadow-[0_0_12px_#00f0ff]" />
          CONSOLE<span className="text-accent">ARCHIVE</span>
        </a>
        <ul className="flex gap-1.5 max-[680px]:hidden">
          {NAV_LINKS.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`block px-3.5 py-2 rounded-lg text-sm transition-colors hover:text-white hover:bg-white/6 ${
                  active === l.id ? 'text-white bg-white/6' : 'text-muted'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
