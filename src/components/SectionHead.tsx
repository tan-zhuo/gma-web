interface Props { no: string; tag: string; title: string; desc?: string; aside?: React.ReactNode }

export function SectionHead({ no, tag, title, desc, aside }: Props) {
  return (
    <div className="mb-10 flex items-end justify-between gap-6 flex-wrap">
      <div className="max-w-[760px]">
        <div className="flex items-center gap-3 mb-3">
          <span className="font-head text-accent text-xs">{no}</span>
          <span className="rule w-16" />
          <span className="label text-accent2">{tag}</span>
        </div>
        <h2 className="font-display text-white text-[clamp(28px,4vw,40px)]">{title}</h2>
        {desc && <p className="text-muted mt-3 text-[15px]">{desc}</p>}
      </div>
      {aside}
    </div>
  )
}
