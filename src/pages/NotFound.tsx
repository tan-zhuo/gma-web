import { Link } from 'react-router-dom'
import { useLang } from '@/i18n'
import { useSeo } from '@/hooks/useSeo'

export function NotFound() {
  const { t, path } = useLang()
  useSeo({ title: t.notFound.title, description: t.notFound.desc })
  return (
    <section className="container-x py-32 max-[720px]:py-20 text-center">
      <div className="font-head font-black text-[96px] leading-none text-transparent [-webkit-text-stroke:1px_rgba(0,240,255,.4)] mb-4">404</div>
      <h1 className="font-display text-white text-[28px] mb-2">{t.notFound.title}</h1>
      <p className="text-muted mb-8">{t.notFound.desc}</p>
      <Link to={path('/')} className="btn btn-primary">{t.notFound.home} <span className="arr">→</span></Link>
    </section>
  )
}
