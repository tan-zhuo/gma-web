import { Link } from 'react-router-dom'
import { useLang } from '@/i18n'

export function Logo({ className = '' }: { className?: string }) {
  const { path, t } = useLang()
  return (
    <Link to={path('/')} className={`font-head font-black text-[16px] text-white flex items-center gap-2.5 whitespace-nowrap ${className}`} aria-label={t.siteName}>
      <img src="/logo.svg" alt="" width="28" height="28" className="w-7 h-7 drop-shadow-[0_0_10px_rgba(0,240,255,.35)]" />
      CONSOLE<span className="text-accent">ARCHIVE</span>
    </Link>
  )
}
