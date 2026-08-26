import { Link } from 'react-router-dom'
import { LANGS, useBarePath, useLang } from '@/i18n'

export function LangSwitch({ className = '' }: { className?: string }) {
  const { lang, t } = useLang()
  const bare = useBarePath()
  return (
    <div className={`inline-flex items-center rounded-lg border border-line bg-white/4 p-0.5 ${className}`} role="group" aria-label={t.nav.lang}>
      {LANGS.map((l) => (
        <Link key={l.code} to={(l.prefix + (bare === '/' && l.prefix ? '' : bare)) || '/'} hrefLang={l.htmlLang} aria-current={l.code === lang ? 'true' : undefined}
          className={`px-2.5 h-7 inline-flex items-center rounded-md text-[12px] transition-colors ${l.code === lang ? 'bg-white/12 text-white' : 'text-muted hover:text-white'}`}>
          {l.label}
        </Link>
      ))}
    </div>
  )
}
