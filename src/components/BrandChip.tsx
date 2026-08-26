import type { Brand } from '@/types/console'

const STYLES: Record<Brand | '', string> = {
  '': 'border-line bg-white/4 text-[#d0d4da]',
  ps: 'border-ps-l text-ps-l bg-ps-l/10',
  xbox: 'border-xbox-l text-xbox-l bg-xbox-l/10',
  nintendo: 'border-nintendo-l text-nintendo-l bg-nintendo-l/10',
  steam: 'border-steam-l text-steam-l bg-steam-l/10',
  xiaobawang: 'border-xiaobawang-l text-xiaobawang-l bg-xiaobawang-l/10',
}

export function BrandChip({ label, brand }: { label: string; brand: Brand | '' }) {
  return <span className={`text-xs px-2.5 py-1 rounded-full border ${STYLES[brand]}`}>{label}</span>
}
