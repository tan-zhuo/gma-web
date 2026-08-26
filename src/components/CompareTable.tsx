import { COMPARE } from '@/data'
import { SectionHead } from './SectionHead'

const COLS = ['机型', 'CPU', 'GPU', '内存', '存储', '目标性能', '形态']

export function CompareTable() {
  return (
    <section id="compare" className="py-18 max-[680px]:py-13 scroll-mt-[70px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHead
          tag="Benchmark"
          title="当代性能横向对比"
          desc="第九代主机与 Steam 硬件的账面规格对比。GPU 算力以 FP32 TFLOPS 表示，仅反映理论峰值。"
        />
        <div className="overflow-x-auto glass rounded-2xl">
          <table className="w-full min-w-[900px] text-sm border-collapse">
            <thead>
              <tr>
                {COLS.map((c) => (
                  <th key={c} className="font-head text-[11px] tracking-[.15em] uppercase text-accent bg-white/3 text-left px-4 py-3.5 border-b border-line whitespace-nowrap font-normal">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((r) => (
                <tr key={r.name} className="hover:[&>td]:bg-white/3">
                  <td className="px-4 py-3.5 border-b border-line align-top font-medium text-white whitespace-nowrap">
                    {r.name}<span className="block text-xs text-muted font-normal">{r.sub}</span>
                  </td>
                  {[r.cpu, r.gpu, r.ram, r.storage, r.target, r.form].map((v, i) => (
                    <td key={i} className="px-4 py-3.5 border-b border-line align-top">{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3.5 text-[13px] text-muted">
          <b className="text-accent2 font-medium">注：</b>
          以上均为理论值，实际表现受游戏优化、功耗策略、分辨率缩放（DLSS / FSR / PSSR）等影响；不同架构的 TFLOPS 不可直接换算为帧率。Switch 2 部分参数为公开信息与拆解推断，非官方完整公布。
        </p>
      </div>
    </section>
  )
}
