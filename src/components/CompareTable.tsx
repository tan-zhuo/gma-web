import { useLang } from '@/i18n'
import { PageHead } from './PageHead'
import { Versus } from './Versus'

export function CompareTable() {
  const { t, data } = useLang()
  const rows = data.compare
  const max = Math.max(...rows.map((r) => r.tflops ?? 0))
  const cell = 'px-4 py-3.5 border-b border-line align-top'
  return (
    <section className="pb-20 max-[720px]:pb-14">
      <PageHead no={t.compare.no} tag={t.compare.tag} title={t.compare.title} desc={t.compare.desc} />
      <div className="container-x">
        <Versus />
        <div className="flex items-center gap-3 mb-5"><span className="font-head text-accent text-xs">03.2</span><span className="rule w-16" /><span className="label text-accent2">{t.compare.tableTag}</span></div>
        <div className="overflow-x-auto glass rounded-2xl">
          <table className="w-full min-w-[960px] text-[13.5px] border-collapse">
            <thead><tr>{t.compare.cols.map((c, i) => <th key={c} className={`label text-accent bg-white/3 text-left px-4 py-4 border-b border-line whitespace-nowrap font-normal ${i === 0 ? 'sticky left-0 bg-[#171a24]' : ''}`}>{c}</th>)}</tr></thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.name} className={`hover:[&>td]:bg-white/4 ${i % 2 ? '[&>td]:bg-white/[.015]' : ''}`}>
                  <td className={`${cell} font-medium text-white whitespace-nowrap sticky left-0 bg-[#171a24]`}>{r.name}<span className="block text-[11px] text-muted font-normal font-head mt-0.5">{r.sub}</span></td>
                  <td className={cell}>{r.cpu}</td>
                  <td className={`${cell} min-w-[220px]`}>{r.gpu}
                    <div className="flex items-center gap-2 mt-2"><div className="bar flex-1"><i style={{ width: r.tflops ? `${(r.tflops / max) * 100}%` : '0%' }} /></div><span className="font-head text-[10px] text-muted w-14 text-right">{r.tflops ? `${r.tflops} TF` : t.compare.na}</span></div>
                  </td>
                  <td className={cell}>{r.ram}</td><td className={cell}>{r.storage}</td><td className={cell}>{r.target}</td><td className={`${cell} whitespace-nowrap`}>{r.form}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-[13px] text-muted"><b className="text-accent2 font-medium">{t.compare.note}</b>{t.compare.noteText}</p>
      </div>
    </section>
  )
}
