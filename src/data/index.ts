import raw from './consoles.json'
import type { Brand, BrandMeta, CompareRow, Console, Generation } from '@/types/console'

export const BRANDS = raw.brands as Record<Brand, BrandMeta>
export const GENERATIONS = raw.generations as Generation[]
export const CONSOLES = raw.consoles as Console[]
export const COMPARE = raw.compare as CompareRow[]

export const BRAND_ORDER: Brand[] = ['ps', 'xbox', 'nintendo', 'xiaobawang', 'steam']

export const NAV_LINKS = [
  { id: 'timeline', label: '世代时间线' },
  { id: 'series', label: '核心系列' },
  { id: 'compare', label: '性能对比' },
  { id: 'about', label: '关于' },
] as const
