import { CREDITS, LOGOS, SITE_LINKS } from '@/data'
import { useLang } from '@/i18n'
import type { Brand } from '@/types/console'
import { PageHead } from './PageHead'

export function About() {
  const { t, data } = useLang()
  const a = t.about
  const px = 'px-8 max-[720px]:px-5'
  return (
    <section className="pb-20 max-[720px]:pb-14">
      <PageHead no={a.no} tag={a.tag} title={a.title} desc={a.desc} />
      <div className="container-x">
        <div className="grid grid-cols-[1.2fr_1fr] max-[900px]:grid-cols-1 gap-6">
          <div className="glass rounded-2xl p-8 max-[720px]:p-5">
            <h3 className="font-display text-[18px] text-white mb-3">{a.p1Title}</h3>
            <p className="text-[14.5px] text-[#c5c9d0]">{a.p1a}</p>
            <p className="text-[14.5px] text-[#c5c9d0] mt-3">{a.p1b}</p>
          </div>
          <div className="glass rounded-2xl p-8 max-[720px]:p-5">
            <h3 className="font-display text-[18px] text-white mb-3">{a.p2Title}</h3>
            <ul className="grid gap-2 text-[14.5px] text-[#c5c9d0]">{a.p2.map((s) => <li key={s} className="flex gap-2.5"><span className="text-accent mt-[3px]">▸</span>{s}</li>)}</ul>
            <div className="mt-5 pt-4 border-t border-line flex flex-wrap gap-2">
              <a href={SITE_LINKS.repo} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">{a.repo}</a>
              <a href={SITE_LINKS.blog} target="_blank" rel="noreferrer" className="btn btn-ghost btn-sm">{a.blog}</a>
            </div>
          </div>
        </div>
        <details className="glass rounded-2xl mt-6 group/credits">
          <summary className={`cursor-pointer ${px} py-4 flex items-center gap-3 select-none list-none`}>
            <span className="text-accent2 text-xs transition-transform group-open/credits:rotate-90">▶</span>
            <span className="font-display text-[15px] text-white">{a.creditsTitle}</span>
            <span className="text-muted text-xs max-[720px]:hidden">Wikimedia Commons</span>
            <span className="ml-auto font-head text-[10px] text-muted">{Object.keys(CREDITS).length} {a.files}</span>
          </summary>
          <ul className={`${px} pb-6 grid grid-cols-2 max-[900px]:grid-cols-1 gap-x-8 gap-y-1.5 text-xs text-[#c5c9d0]`}>
            {data.consoles.filter((c) => CREDITS[c.id]).map((c) => { const k = CREDITS[c.id]; return (
              <li key={c.id} className="flex gap-2 min-w-0"><span className="text-white shrink-0">{c.name}</span>
                <span className="text-muted truncate"><a href={k.page} target="_blank" rel="noreferrer" className="underline hover:text-accent">{k.title.replace(/^File:/, '')}</a> · {k.artist} · {k.license}</span></li>) })}
          </ul>
          <div className={`${px} pb-2 text-xs text-[#c5c9d0]`}>
            <div className="label text-accent2 mb-2">{a.logosTitle}</div>
            <ul className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-x-8 gap-y-1.5">
              {(Object.keys(LOGOS) as Brand[]).map((b) => { const l = LOGOS[b]!; return (
                <li key={b} className="flex gap-2 min-w-0"><span className="text-white shrink-0">{data.brands[b].label}</span>
                  <span className="text-muted truncate"><a href={l.page} target="_blank" rel="noreferrer" className="underline hover:text-accent">{l.title.replace(/^File:/, '')}</a> · {l.license}</span></li>) })}
            </ul>
          </div>
          <p className={`${px} pb-5 pt-3 text-[11px] text-muted`}>{a.creditsNote}</p>
        </details>
      </div>
    </section>
  )
}
