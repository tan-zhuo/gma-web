import { SectionHead } from './SectionHead'

export function About() {
  return (
    <section id="about" className="py-18 max-[680px]:py-13 scroll-mt-[70px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHead tag="About" title="关于本站" />
        <div className="grid grid-cols-[1.2fr_1fr] max-[900px]:grid-cols-1 gap-7">
          <div className="glass rounded-2xl p-7">
            <h3 className="font-head text-[17px] text-white mb-3">编纂原则</h3>
            <p className="text-sm text-[#c5c9d0]">本站是一份以中文为第一语言的游戏机历史归档。内容强调「为什么重要」而非「有多厉害」：每台机器的历史意义部分尽量客观说明其对行业、技术或市场的实际影响；性能讲解部分明确区分理论峰值与实际体验的边界。</p>
            <p className="text-sm text-[#c5c9d0] mt-2.5">小霸王系列作为中国市场的特殊存在，同时具备「FC 兼容机」与「学习机」双重身份，本站按其真实定位而非情怀滤镜进行记录。</p>
          </div>
          <div className="glass rounded-2xl p-7">
            <h3 className="font-head text-[17px] text-white mb-3">数据说明</h3>
            <ul className="list-disc pl-4.5 grid gap-1.5 text-sm text-[#c5c9d0]">
              <li>销量数据来自厂商财报与公开统计，截至 2026 年年中。</li>
              <li>发售年份标注首发地区；存在地区差异时以「/」分隔。</li>
              <li>Switch 2、Steam Machine (2026) 等新机型规格以公开发布信息为准，部分为推断。</li>
              <li>世代划分采用主流共识，非官方标准。</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
