export type Brand = 'ps' | 'xbox' | 'nintendo' | 'xiaobawang' | 'steam' | 'sega' | 'classic' | 'winpc' | 'handheld'
export type Shape = 'flat' | 'tall' | 'cube' | 'handheld'
export type Filter = Brand | 'all'

export interface Console {
  id: string
  brand: Brand
  shape: Shape
  name: string
  year: string
  media: string
  sales: string
  cpu: string
  gpu: string
  ram: string
  control: string
  ops: string
  history: string
  perf: string
  /** 一句话定位 */
  tagline: string
  /** 代表作 */
  games: string[]
  /** 首发价 */
  price: string
  /** 可比较的数值参数（近似值） */
  hw: ConsoleHw
}

export interface ConsoleHw {
  cpuMHz: number
  cores: number
  /** GPU FP32 GFLOPS（估算，0 = 无可编程 3D 硬件） */
  gflops: number
  ramMB: number
  storageGB: number | null
  /** 首发美元价（近似） */
  usd: number | null
  year: number
}

export interface Generation {
  n: number
  name: string
  years: string
  desc: string
  /** [label, brand-or-empty] */
  chips: [string, Brand | ''][]
}

export interface CompareRow {
  name: string
  sub: string
  cpu: string
  gpu: string
  ram: string
  storage: string
  target: string
  form: string
  /** FP32 TFLOPS，未知为 null */
  tflops: number | null
}

export interface BrandMeta {
  label: string
  short: string
}
