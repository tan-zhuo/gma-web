import type { Shape } from '@/types/console'

export function Console3D({ shape }: { shape: Shape }) {
  return (
    <div className={`box3d ${shape}`} aria-hidden>
      <div className="f back" />
      <div className="side l" />
      <div className="side r" />
      <div className="side t" />
      <div className="side b" />
      <div className="f front" />
    </div>
  )
}
