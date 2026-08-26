import { Link } from 'react-router-dom'
import { BRAND_ORDER } from '@/data'
import { useLang } from '@/i18n'
import { useSeo } from '@/hooks/useSeo'
import { Hero } from '@/components/Hero'
import { SectionHead } from '@/components/SectionHead'
import { ConsoleImage } from '@/components/ConsoleImage'
import { BrandMark } from '@/components/BrandMark'

const PICKS = ['ps2', 'wii', 'switch', 'fc', 'xbox360', 'steamdeck']

export function Home() {
  const { t, data, path } = useLang()
  useSeo({ title: t.siteTitle, description: t.siteDesc })
  return (
    <>
      <Hero />
      <section className="py-16 max-[720px]:py-8">
        <div className="container-x">
          <SectionHead no="01" tag={t.home.seriesTag} title={t.home.seriesTitle} desc={t.home.seriesDesc}
            aside={<Link to={path('/consoles')} className="btn btn-ghost">{t.home.allConsoles} <span className="arr">→</span></Link>} />
          <div className="grid grid-cols-3 max-[900px]:grid-cols-2 max-[480px]:grid-cols-1 gap-4 max-[720px]:gap-3">
            {BRAND_ORDER.map((b) => {
              const list = data.consoles.filter((c) => c.brand === b)
              const ys = list.flatMap((c) => c.year.match(/\d{4}/g) ?? []).map(Number)
              return (
                <Link key={b} to={`${path('/consoles')}?brand=${b}`} data-brand={b} className="card glass rounded-2xl p-5 max-[720px]:p-4 relative overflow-hidden group max-[480px]:flex max-[480px]:items-center max-[480px]:gap-4">
                  <span className="absolute -right-6 -top-6 w-28 h-28 rounded-full blur-2xl opacity-60" style={{ background: 'var(--brand-glow)' }} />
                  <div className="h-9 flex items-center mb-4 max-[480px]:mb-0 max-[480px]:w-24 max-[480px]:shrink-0 relative"><BrandMark brand={b} className="h-7 max-w-[140px] max-[480px]:max-w-[88px]" /></div>
                  <div className="relative max-[480px]:flex-1 max-[480px]:min-w-0">
                    <div className="font-display text-[20px] max-[480px]:text-[17px] text-white">{data.brands[b].label}</div>
                    <div className="text-xs text-muted mt-1 font-head">{Math.min(...ys)} — {Math.max(...ys)}</div>
                    <div className="mt-4 max-[480px]:mt-1 flex items-center justify-between text-[13px]">
                      <span className="text-[#c5c9d0]">{t.home.models(list.length)}</span>
                      <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity max-[480px]:hidden">{t.home.enter}</span>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-16 max-[720px]:py-8">
        <div className="container-x">
          <SectionHead no="02" tag={t.home.featuredTag} title={t.home.featuredTitle} desc={t.home.featuredDesc} />
          <div className="grid grid-cols-3 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1 gap-5 max-[720px]:gap-3">
            {PICKS.map((id) => { const c = data.consoles.find((x) => x.id === id)!; return (
              <Link key={id} to={`${path('/consoles')}?brand=${c.brand}#${c.id}`} data-brand={c.brand} className="card glass rounded-2xl overflow-hidden group">
                <div className="card-visual h-[170px] relative flex items-center justify-center overflow-hidden [perspective:900px]">
                  <span className="absolute top-3 right-3 z-[4] font-head text-[11px] text-white/70 bg-black/40 px-2 py-1 rounded-md">{c.year.split(/[（(/]/)[0].trim()}</span>
                  <ConsoleImage id={c.id} name={c.name} />
                </div>
                <div className="p-4">
                  <div className="font-display text-[16px] text-white">{c.name}</div>
                  <div className="text-[13px] mt-0.5" style={{ color: 'var(--brand-l)' }}>{c.tagline}</div>
                </div>
              </Link>) })}
          </div>
        </div>
      </section>

      <section className="py-16 max-[720px]:py-8">
        <div className="container-x">
          <div className="glass rounded-3xl p-10 max-[720px]:p-6 grid grid-cols-[1fr_auto] max-[720px]:grid-cols-1 gap-8 max-[720px]:gap-5 items-center relative overflow-hidden">
            <span className="absolute -left-10 -bottom-16 font-head font-black text-[200px] max-[720px]:text-[140px] leading-none text-transparent [-webkit-text-stroke:1px_rgba(0,240,255,.12)] pointer-events-none select-none">09</span>
            <div className="relative">
              <div className="label text-accent2 mb-3">{t.home.tlTag}</div>
              <h2 className="font-display text-white text-[clamp(24px,3.5vw,36px)] mb-3">{t.home.tlTitle}</h2>
              <p className="text-muted max-w-[600px]">{t.home.tlDesc(data.generations.length)}</p>
            </div>
            <Link to={path('/timeline')} className="btn btn-primary relative max-[720px]:justify-self-start">{t.home.tlCta} <span className="arr">→</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
