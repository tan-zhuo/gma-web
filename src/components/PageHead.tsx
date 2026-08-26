import { useEffect } from 'react'

interface Props { no: string; tag: string; title: string; desc?: string; docTitle?: string }

/** Page-level hero header for sub-pages; also sets document.title. */
export function PageHead({ no, tag, title, desc, docTitle }: Props) {
  useEffect(() => { document.title = `${docTitle ?? title} — Console Archive` }, [title, docTitle])
  return (
    <div className="pt-16 pb-10 max-[720px]:pt-10 max-[720px]:pb-6 border-b border-line mb-12 max-[720px]:mb-8">
      <div className="container-x">
        <div className="flex items-center gap-3 mb-4">
          <span className="font-head text-accent text-xs">{no}</span>
          <span className="rule w-16" />
          <span className="label text-accent2">{tag}</span>
        </div>
        <h1 className="font-display text-white text-[clamp(32px,5vw,52px)]">{title}</h1>
        {desc && <p className="text-muted mt-4 text-[16px] max-w-[760px]">{desc}</p>}
      </div>
    </div>
  )
}
