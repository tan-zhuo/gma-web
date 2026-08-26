interface Props { tag: string; title: string; desc?: string }

export function SectionHead({ tag, title, desc }: Props) {
  return (
    <div className="mb-10">
      <div className="font-head text-[11px] tracking-[.3em] uppercase text-accent2">{tag}</div>
      <h2 className="font-head text-white font-bold text-[clamp(26px,4vw,38px)] mt-2 mb-2.5">{title}</h2>
      {desc && <p className="text-muted max-w-[720px]">{desc}</p>}
    </div>
  )
}
