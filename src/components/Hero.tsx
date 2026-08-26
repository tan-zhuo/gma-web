import { Link } from 'react-router-dom'
import { BRAND_ORDER, CREDITS } from '@/data'
import { useLang } from '@/i18n'

const FEATURED = [
  { id: 'ps5', cls: 'right-0 top-6 w-[52%] rotate-[4deg] z-[3]', delay: '0s' },
  { id: 'switch', cls: 'left-0 top-0 w-[58%] -rotate-[6deg] z-[2]', delay: '-2s' },
  { id: 'fc', cls: 'left-[18%] bottom-0 w-[54%] rotate-[3deg] z-[1]', delay: '-4s' },
]

export function Hero() {
  const { t, data, path } = useLang()
  const stats: [string | number, string][] = [
    [data.generations.length, t.hero.stats.gens], [data.consoles.length, t.hero.stats.consoles], ['54', t.hero.stats.years], [BRAND_ORDER.length, t.hero.stats.brands],
  ]
  return (
    <header id="top" className="pt-20 pb-16 max-[720px]:pt-10 max-[720px]:pb-8 overflow-hidden">
      <div className="container-x grid grid-cols-[1.1fr_.9fr] max-[900px]:grid-cols-1 gap-12 max-[900px]:gap-8 items-center">
        <div>
          <div className="flex items-center gap-3 mb-5"><span className="rule w-10" /><span className="label text-accent max-[720px]:text-[9px] max-[720px]:!tracking-[.18em]">{t.hero.eyebrow}</span></div>
          <h1 className="font-display text-[clamp(36px,6vw,68px)] text-white mb-5">
            {t.hero.title1}<br />
            <span className="bg-gradient-to-r from-white via-[#cfd8ff] to-accent bg-clip-text text-transparent">{t.hero.title2}</span>
          </h1>
          <p className="text-[17px] max-[720px]:text-[15px] text-muted max-w-[560px] mb-8 leading-[1.85]">{t.hero.lead}</p>
          <div className="flex gap-3 flex-wrap mb-10">
            <Link to={path('/consoles')} className="btn btn-primary">{t.hero.ctaPrimary} <span className="arr">→</span></Link>
            <Link to={path('/timeline')} className="btn btn-ghost">{t.hero.ctaSecondary}</Link>
          </div>
          <div className="glass rounded-2xl grid grid-cols-4 max-[520px]:grid-cols-2 divide-x divide-white/8 max-[520px]:divide-x-0">
            {stats.map(([n, label]) => (
              <div key={label} className="px-5 py-4 max-[520px]:px-4 max-[520px]:py-3 max-[520px]:border-b max-[520px]:border-white/8 max-[520px]:[&:nth-last-child(-n+2)]:border-b-0">
                <b className="block font-head font-bold text-[28px] max-[720px]:text-[22px] text-white leading-tight">{n}</b>
                <small className="text-muted text-xs tracking-wide">{label}</small>
              </div>
            ))}
          </div>
        </div>
        <div className="relative h-[380px] max-[900px]:h-[300px] max-[560px]:hidden">
          <div className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle,rgba(0,240,255,.18),transparent_65%)] blur-2xl" />
          {FEATURED.map((f) => {
            const c = data.consoles.find((x) => x.id === f.id)!
            const k = CREDITS[f.id]
            return (
              <div key={f.id} className={`absolute ${f.cls} anim-float`} style={{ animationDelay: f.delay }}>
                <div className="glass rounded-2xl p-3 shadow-[0_30px_60px_rgba(0,0,0,.6)]">
                  <div className={`rounded-xl overflow-hidden aspect-[4/3] flex items-center justify-center ${k?.bg === 'light' ? 'bg-[#f3f4f7]' : 'bg-black/30'}`}>
                    <img src={k.file} alt={c.name} className="w-full h-full object-contain p-2" />
                  </div>
                  <div className="flex items-center justify-between mt-2 px-1">
                    <span className="text-xs text-white font-medium truncate">{c.name}</span>
                    <span className="font-head text-[10px] text-muted">{c.year.split(/[（(/]/)[0].trim()}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </header>
  )
}
