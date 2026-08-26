import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BRANDS, BRAND_ORDER, CONSOLES, GENERATIONS } from '@/data'
import { Hero } from '@/components/Hero'
import { SectionHead } from '@/components/SectionHead'
import { ConsoleImage } from '@/components/ConsoleImage'

const PICKS = ['ps2', 'wii', 'switch', 'fc', 'xbox360', 'steamdeck']

export function Home() {
  useEffect(() => { document.title = 'Console Archive — 人类游戏机历史档案' }, [])
  return (
    <>
      <Hero />

      {/* brands */}
      <section className="py-16 max-[720px]:py-10">
        <div className="container-x">
          <SectionHead no="01" tag="Series" title="按系列浏览" desc="八个系列、34 台机器。选一个厂商进入，或直接查看全部。"
            aside={<Link to="/consoles" className="btn btn-ghost">全部机型 <span className="arr">→</span></Link>} />
          <div className="grid grid-cols-4 max-[900px]:grid-cols-2 gap-4">
            {BRAND_ORDER.map((b) => {
              const list = CONSOLES.filter((c) => c.brand === b)
              const ys = list.flatMap((c) => c.year.match(/\d{4}/g) ?? []).map(Number)
              const years = `${Math.min(...ys)} — ${Math.max(...ys)}`
              return (
                <Link key={b} to={`/consoles?brand=${b}`} data-brand={b} className="card glass rounded-2xl p-5 relative overflow-hidden group">
                  <span className="absolute -right-6 -top-6 w-28 h-28 rounded-full blur-2xl opacity-60" style={{ background: 'var(--brand-glow)' }} />
                  <div className="font-head text-[10px] tracking-[.2em] text-white px-2 py-1 rounded inline-block mb-4" style={{ background: 'var(--brand)' }}>{BRANDS[b].short}</div>
                  <div className="font-display text-[20px] text-white">{BRANDS[b].label}</div>
                  <div className="text-xs text-muted mt-1 font-head">{years}</div>
                  <div className="mt-4 flex items-center justify-between text-[13px]">
                    <span className="text-[#c5c9d0]">{list.length} 台机型</span>
                    <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">进入 →</span>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* featured */}
      <section className="py-16 max-[720px]:py-10">
        <div className="container-x">
          <SectionHead no="02" tag="Featured" title="改变行业的机器" desc="六台在各自世代里改写规则的主机。" />
          <div className="grid grid-cols-3 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1 gap-5">
            {PICKS.map((id) => { const c = CONSOLES.find((x) => x.id === id)!; return (
              <Link key={id} to={`/consoles?brand=${c.brand}#${c.id}`} data-brand={c.brand} className="card glass rounded-2xl overflow-hidden group">
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

      {/* timeline teaser */}
      <section className="py-16 max-[720px]:py-10">
        <div className="container-x">
          <div className="glass rounded-3xl p-10 max-[720px]:p-6 grid grid-cols-[1fr_auto] max-[720px]:grid-cols-1 gap-8 items-center relative overflow-hidden">
            <span className="absolute -left-10 -bottom-16 font-head font-black text-[200px] leading-none text-transparent [-webkit-text-stroke:1px_rgba(0,240,255,.12)] pointer-events-none select-none">09</span>
            <div className="relative">
              <div className="label text-accent2 mb-3">Timeline</div>
              <h2 className="font-display text-white text-[clamp(26px,3.5vw,36px)] mb-3">从 1972 到 2026，九代主机演进</h2>
              <p className="text-muted max-w-[600px]">{GENERATIONS.length} 个世代，每一代都有一个决定性的技术或市场转折：卡带、光盘、3D、高清、体感、SSD 与光追。</p>
            </div>
            <Link to="/timeline" className="btn btn-primary relative">查看时间线 <span className="arr">→</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}
