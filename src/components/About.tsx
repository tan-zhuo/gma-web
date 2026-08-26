import { CONSOLES, CREDITS } from '@/data'
import { PageHead } from './PageHead'

export function About() {
  return (
    <section className="pb-20 max-[720px]:pb-14">
      <PageHead no="04" tag="About" title="关于本站" desc="编纂原则、数据来源与图片许可。" />
      <div className="container-x">
        <div className="grid grid-cols-[1.2fr_1fr] max-[900px]:grid-cols-1 gap-6">
          <div className="glass rounded-2xl p-8 max-[720px]:p-6">
            <h3 className="font-display text-[18px] text-white mb-3">编纂原则</h3>
            <p className="text-[14.5px] text-[#c5c9d0]">本站是一份以中文为第一语言的游戏机历史归档。内容强调「为什么重要」而非「有多厉害」：每台机器的历史意义部分尽量客观说明其对行业、技术或市场的实际影响；性能讲解部分明确区分理论峰值与实际体验的边界。</p>
            <p className="text-[14.5px] text-[#c5c9d0] mt-3">小霸王系列作为中国市场的特殊存在，同时具备「FC 兼容机」与「学习机」双重身份，本站按其真实定位而非情怀滤镜进行记录。</p>
          </div>
          <div className="glass rounded-2xl p-8 max-[720px]:p-6">
            <h3 className="font-display text-[18px] text-white mb-3">数据说明</h3>
            <ul className="grid gap-2 text-[14.5px] text-[#c5c9d0]">
              {['销量数据来自厂商财报与公开统计，截至 2026 年年中。','发售年份标注首发地区；存在地区差异时以「/」分隔。首发价为首发地区定价。','Switch 2、Steam Machine (2026) 等新机型规格以公开发布信息为准，部分为推断。','世代划分采用主流共识，非官方标准。'].map((t) => (
                <li key={t} className="flex gap-2.5"><span className="text-accent mt-[3px]">▸</span>{t}</li>
              ))}
            </ul>
          </div>
        </div>
        <details className="glass rounded-2xl mt-6 group/credits">
          <summary className="cursor-pointer px-8 max-[720px]:px-6 py-4 flex items-center gap-3 select-none list-none">
            <span className="text-accent2 text-xs transition-transform group-open/credits:rotate-90">▶</span>
            <span className="font-display text-[15px] text-white">图片来源与许可</span>
            <span className="text-muted text-xs">Wikimedia Commons</span>
            <span className="ml-auto font-head text-[10px] text-muted">{Object.keys(CREDITS).length} FILES</span>
          </summary>
          <ul className="px-8 max-[720px]:px-6 pb-6 grid grid-cols-2 max-[900px]:grid-cols-1 gap-x-8 gap-y-1.5 text-xs text-[#c5c9d0]">
            {CONSOLES.filter((c) => CREDITS[c.id]).map((c) => { const k = CREDITS[c.id]; return (
              <li key={c.id} className="flex gap-2 min-w-0"><span className="text-white shrink-0">{c.name}</span>
                <span className="text-muted truncate"><a href={k.page} target="_blank" rel="noreferrer" className="underline hover:text-accent">{k.title.replace(/^File:/, '')}</a> · {k.artist} · {k.license}</span></li>) })}
          </ul>
          <p className="px-8 max-[720px]:px-6 pb-5 text-[11px] text-muted">未列出的机型使用本站自绘示意图。CC BY-SA 图片依许可要求署名，如需再利用请遵循相应许可。</p>
        </details>
      </div>
    </section>
  )
}
