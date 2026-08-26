import { BRAND_ORDER, CONSOLES, GENERATIONS } from '@/data'

const STATS: [string | number, string][] = [
  [GENERATIONS.length, '主机世代'],
  [CONSOLES.length, '核心机型'],
  ['54', '年历史跨度'],
  [BRAND_ORDER.length, '厂商系列'],
]

export function Hero() {
  return (
    <header id="top" className="py-24 max-[680px]:py-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="font-head text-xs tracking-[.3em] uppercase text-accent mb-4">
          Human Console History · 1972 — 2026
        </div>
        <h1 className="font-head font-black text-[clamp(34px,6vw,64px)] leading-[1.1] mb-5 bg-gradient-to-r from-white via-[#cfd8ff] to-accent bg-clip-text text-transparent">
          人类游戏机<br />历史档案
        </h1>
        <p className="text-lg text-muted max-w-[640px] mb-11">
          从 8 位芯片到光线追踪，从红白机到 Steam Machine。一份中文优先、硬核可查的家用游戏机演进归档：九代世代脉络、核心系列机型规格、操作方式、历史意义与性能边界。
        </p>
        <div className="grid grid-cols-4 max-[900px]:grid-cols-2 gap-4 max-[680px]:gap-2.5 max-w-[900px]">
          {STATS.map(([n, label]) => (
            <div key={label} className="glass rounded-[14px] px-5 py-5 max-[680px]:px-4 max-[680px]:py-3.5 relative overflow-hidden">
              <span className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-accent to-accent2" />
              <b className="block font-head font-bold text-[30px] max-[680px]:text-[22px] text-white leading-tight">{n}</b>
              <small className="text-muted text-[13px]">{label}</small>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
