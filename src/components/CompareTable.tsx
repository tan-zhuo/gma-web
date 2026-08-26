import { COMPARE } from '@/data'
import { PageHead } from './PageHead'

const COLS = ['机型', 'CPU', 'GPU', '内存', '存储', '目标性能', '形态']
const MAX = Math.max(...COMPARE.map((r) => r.tflops ?? 0))

export function CompareTable() {
  return (
    <section className="pb-20 max-[720px]:pb-14">
      <PageHead no="03" tag="Benchmark" title="当代性能横向对比"
          desc="第九代主机与 Steam 硬件的账面规格。GPU 一栏附 FP32 TFLOPS 相对条，仅反映理论峰值——不同架构之间不可直接换算为帧率。" />
      <div className="container-x">
        <div className="overflow-x-auto glass rounded-2xl">
          <table className="w-full min-w-[960px] text-[13.5px] border-collapse">
            <thead>
              <tr>{COLS.map((c, i) => <th key={c} className={`label text-accent bg-white/3 text-left px-4 py-4 border-b border-line whitespace-nowrap font-normal ${i === 0 ? 'sticky left-0 bg-[#171a24]' : ''}`}>{c}</th>)}</tr>
            </thead>
            <tbody>
              {COMPARE.map((r, i) => (
                <tr key={r.name} className={`hover:[&>td]:bg-white/4 ${i % 2 ? '[&>td]:bg-white/[.015]' : ''}`}>
                  <td className="px-4 py-3.5 border-b border-line align-top font-medium text-white whitespace-nowrap sticky left-0 bg-[#171a24]">
                    {r.name}<span className="block text-[11px] text-muted font-normal font-head mt-0.5">{r.sub}</span>
                  </td>
                  <td className="px-4 py-3.5 border-b border-line align-top">{r.cpu}</td>
                  <td className="px-4 py-3.5 border-b border-line align-top min-w-[220px]">
                    {r.gpu}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="bar flex-1"><i style={{ width: r.tflops ? `${(r.tflops / MAX) * 100}%` : '0%' }} /></div>
                      <span className="font-head text-[10px] text-muted w-14 text-right">{r.tflops ? `${r.tflops} TF` : '未公布'}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 border-b border-line align-top">{r.ram}</td>
                  <td className="px-4 py-3.5 border-b border-line align-top">{r.storage}</td>
                  <td className="px-4 py-3.5 border-b border-line align-top">{r.target}</td>
                  <td className="px-4 py-3.5 border-b border-line align-top whitespace-nowrap">{r.form}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-[13px] text-muted"><b className="text-accent2 font-medium">注：</b>以上均为理论值，实际表现受游戏优化、功耗策略、分辨率缩放（DLSS / FSR / PSSR）等影响。Switch 2 参数为公开信息与拆解推断；Steam Machine (2026) GPU 算力官方未给出 TFLOPS 数值。</p>
      </div>
    </section>
  )
}
