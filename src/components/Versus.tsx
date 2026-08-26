import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { BRAND_ORDER } from '@/data'
import { useLang } from '@/i18n'
import type { Console } from '@/types/console'
import { BrandMark } from './BrandMark'
import { ConsoleImage } from './ConsoleImage'

type Metric = { key: 'cpuMHz' | 'cores' | 'gflops' | 'ramMB' | 'storageGB' | 'usd' | 'year'; log?: boolean; lowerBetter?: boolean; fmt: (v: number) => string }

const fmtMHz = (v: number) => (v >= 1000 ? `${(v / 1000).toFixed(v % 1000 ? 2 : 1)} GHz` : `${v} MHz`)
const fmtFlops = (v: number) => (v === 0 ? '—' : v >= 1000 ? `${(v / 1000).toFixed(2)} TFLOPS` : `${v} GFLOPS`)
const fmtMB = (v: number) => (v >= 1024 ? `${(v / 1024).toFixed(v % 1024 ? 1 : 0)} GB` : v >= 1 ? `${v} MB` : v >= 0.001 ? `${Math.round(v * 1024)} KB` : `${Math.round(v * 1024 * 1024)} B`)
const fmtGB = (v: number) => (v >= 1000 ? `${(v / 1000).toFixed(v % 1000 ? 1 : 0)} TB` : `${v} GB`)

const METRICS: Metric[] = [
  { key: 'cpuMHz', log: true, fmt: fmtMHz },
  { key: 'cores', fmt: (v) => String(v) },
  { key: 'gflops', log: true, fmt: fmtFlops },
  { key: 'ramMB', log: true, fmt: fmtMB },
  { key: 'storageGB', log: true, fmt: fmtGB },
  { key: 'usd', lowerBetter: true, fmt: (v) => `$${v}` },
  { key: 'year', fmt: (v) => String(v) },
]

/** share of the bar for side A — linear ratio by default, log scale as an option for huge spans */
function share(a: number, b: number, log: boolean): number {
  if (a <= 0 && b <= 0) return 0.5
  const f = (x: number) => (log ? Math.log10(Math.max(x, 0) + 1) : Math.max(x, 0))
  const fa = f(a), fb = f(b)
  return fa + fb === 0 ? 0.5 : fa / (fa + fb)
}
/** human-readable multiplier between the two values */
function ratio(a: number, b: number): string {
  if (a === b) return '='
  const hi = Math.max(a, b), lo = Math.min(a, b)
  if (lo <= 0) return '∞'
  const r = hi / lo
  return r >= 100 ? `${Math.round(r).toLocaleString()}×` : r >= 10 ? `${r.toFixed(0)}×` : `${r.toFixed(1)}×`
}

function Picker({ value, onChange, exclude, label }: { value: string; onChange: (id: string) => void; exclude: string; label: string }) {
  const { data } = useLang()
  return (
    <label className="block">
      <span className="label text-accent2 mb-2 block">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full h-11 px-3 rounded-xl bg-[#171a24] border border-line-2 text-white text-[14px] focus:outline-none focus:border-accent">
        {BRAND_ORDER.map((b) => (
          <optgroup key={b} label={data.brands[b].label}>
            {data.consoles.filter((c) => c.brand === b).map((c) => <option key={c.id} value={c.id} disabled={c.id === exclude}>{c.name}</option>)}
          </optgroup>
        ))}
      </select>
    </label>
  )
}

function Side({ c }: { c: Console }) {
  return (
    <div data-brand={c.brand} className="card-visual rounded-2xl border border-line relative overflow-hidden h-[190px] max-[720px]:h-[150px] flex items-center justify-center [perspective:900px]">
      <span className="absolute top-3 left-3 z-[4]"><BrandMark brand={c.brand} badge /></span>
      <span className="absolute top-3 right-3 z-[4] font-head text-[11px] text-white/70 bg-black/40 px-2 py-1 rounded-md">{c.hw.year}</span>
      <ConsoleImage id={c.id} name={c.name} />
      <div className="absolute bottom-0 inset-x-0 z-[4] px-4 py-2.5 bg-gradient-to-t from-black/80 to-transparent">
        <div className="font-display text-[15px] text-white leading-tight truncate">{c.name}</div>
        <div className="text-[12px] truncate" style={{ color: 'var(--brand-l)' }}>{c.tagline}</div>
      </div>
    </div>
  )
}

export function Versus() {
  const { t, data } = useLang()
  const tv = t.versus
  const [params, setParams] = useSearchParams()
  const [a, setA] = useState(params.get('a') ?? 'ps5')
  const [b, setB] = useState(params.get('b') ?? 'xseries')
  const [log, setLog] = useState(false)
  const ca = data.consoles.find((c) => c.id === a) ?? data.consoles[0]
  const cb = data.consoles.find((c) => c.id === b) ?? data.consoles[1]
  const pick = (side: 'a' | 'b', id: string) => {
    if (side === 'a') setA(id); else setB(id)
    const next = new URLSearchParams(params); next.set('a', side === 'a' ? id : a); next.set('b', side === 'b' ? id : b)
    setParams(next, { replace: true })
  }
  const swap = () => { const na = b, nb = a; setA(na); setB(nb); const next = new URLSearchParams(params); next.set('a', na); next.set('b', nb); setParams(next, { replace: true }) }

  const rows = useMemo(() => METRICS.map((m) => {
    const va = ca.hw[m.key], vb = cb.hw[m.key]
    if (va == null || vb == null) return { m, va, vb, s: 0.5, winner: 0 as 0 | 1 | 2, r: '' }
    let s = share(va, vb, log && !!m.log)
    if (m.lowerBetter) s = 1 - s
    const winner: 0 | 1 | 2 = m.key === 'year' || va === vb ? 0 : (m.lowerBetter ? va < vb : va > vb) ? 1 : 2
    const r = m.key === 'year' ? `${Math.abs(va - vb)} ${tv.yearsApart}` : ratio(va, vb)
    return { m, va, vb, s, winner, r }
  }), [ca, cb, log, tv])
  const score = rows.reduce((acc, r) => { if (r.m.key === 'year' || r.m.key === 'usd') return acc; if (r.winner === 1) acc[0]++; if (r.winner === 2) acc[1]++; return acc }, [0, 0])

  return (
    <div className="glass rounded-3xl p-8 max-[720px]:p-4 mb-12">
      <div className="flex items-end justify-between gap-4 flex-wrap mb-6">
        <div>
          <div className="label text-accent2 mb-2">{tv.tag}</div>
          <h2 className="font-display text-white text-[clamp(22px,3vw,30px)]">{tv.title}</h2>
          <p className="text-muted text-[14px] mt-1.5 max-w-[720px]">{tv.desc}</p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <div className="tabs !gap-1" role="group" aria-label={tv.scale}>
            <button type="button" className="tab !h-8 !px-3 text-[12.5px]" aria-selected={!log} onClick={() => setLog(false)}>{tv.linear}</button>
            <button type="button" className="tab !h-8 !px-3 text-[12.5px]" aria-selected={log} onClick={() => setLog(true)}>{tv.logScale}</button>
          </div>
          <button type="button" onClick={swap} className="btn btn-ghost btn-sm">⇄ {tv.swap}</button>
        </div>
      </div>

      <div className="grid grid-cols-[1fr_auto_1fr] max-[720px]:grid-cols-2 gap-4 max-[720px]:gap-3 items-end mb-5">
        <Picker value={ca.id} onChange={(id) => pick('a', id)} exclude={cb.id} label={tv.sideA} />
        <div className="font-head font-black text-[22px] text-accent2 pb-2 max-[720px]:hidden">VS</div>
        <Picker value={cb.id} onChange={(id) => pick('b', id)} exclude={ca.id} label={tv.sideB} />
      </div>
      <div className="grid grid-cols-2 gap-4 max-[720px]:gap-3 mb-6">
        <Side c={ca} /><Side c={cb} />
      </div>

      <div className="grid gap-3">
        {rows.map(({ m, va, vb, s, winner, r }) => (
          <div key={m.key} className="grid grid-cols-[1fr_auto_1fr] max-[720px]:grid-cols-[1fr_1fr] items-center gap-x-3 gap-y-1">
            <div className={`text-[13.5px] max-[720px]:text-[12.5px] font-medium tabular-nums ${winner === 1 ? 'text-accent' : 'text-[#c9cdd5]'}`}>{va == null ? tv.na : m.fmt(va)}</div>
            <div className="text-center max-[720px]:order-first max-[720px]:col-span-2 max-[720px]:text-left max-[720px]:flex max-[720px]:items-baseline max-[720px]:gap-2">
              <div className="label text-muted !tracking-[.18em]">{tv.metrics[m.key]}{m.lowerBetter ? ` ${tv.lowerBetter}` : ''}</div>
              {r && <div className={`font-head text-[11px] mt-0.5 max-[720px]:mt-0 ${winner === 1 ? 'text-accent' : winner === 2 ? 'text-accent2' : 'text-muted'}`}>{winner === 1 ? '◀ ' : ''}{r}{winner === 2 ? ' ▶' : ''}</div>}
            </div>
            <div className={`text-[13.5px] max-[720px]:text-[12.5px] font-medium text-right tabular-nums ${winner === 2 ? 'text-accent2' : 'text-[#c9cdd5]'}`}>{vb == null ? tv.na : m.fmt(vb)}</div>
            <div className="col-span-3 max-[720px]:col-span-2 h-2.5 rounded-full bg-white/6 overflow-hidden flex">
              <i className="block h-full rounded-l-full bg-gradient-to-r from-[#0090c8] to-accent transition-[width] duration-500" style={{ width: `${s * 100}%`, boxShadow: '0 0 10px rgba(0,240,255,.5)' }} />
              <i className="block h-full flex-1 rounded-r-full bg-gradient-to-r from-accent2 to-[#b0247a] transition-[width] duration-500" style={{ boxShadow: '0 0 10px rgba(255,45,149,.45)' }} />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-5 border-t border-line flex items-center justify-between flex-wrap gap-3">
        <div className="text-[13px] text-muted">{tv.scoreLabel}</div>
        <div className="font-head text-[15px]"><span className="text-accent">{score[0]}</span><span className="text-muted mx-2">:</span><span className="text-accent2">{score[1]}</span></div>
      </div>
      <p className="mt-3 text-[11.5px] text-muted">{tv.note}</p>
    </div>
  )
}
