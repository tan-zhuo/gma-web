import raw from './consoles.json'
import type { Brand, BrandMeta, CompareRow, Console, Generation } from '@/types/console'

export const BRANDS = raw.brands as Record<Brand, BrandMeta>
export const GENERATIONS = raw.generations as Generation[]
export const CONSOLES = raw.consoles as Console[]
export const COMPARE = raw.compare as CompareRow[]

export const BRAND_ORDER: Brand[] = ['ps', 'xbox', 'nintendo', 'sega', 'xiaobawang', 'steam', 'handheld', 'winpc', 'classic']

export const NAV_LINKS = [
  { to: '/timeline', label: '世代时间线' },
  { to: '/consoles', label: '核心系列' },
  { to: '/compare', label: '性能对比' },
  { to: '/about', label: '关于' },
] as const

import creditsRaw from './credits.json'
import type { ImageCredit } from '@/types/credit'
export const CREDITS = creditsRaw as Record<string, ImageCredit>

export const SITE_LINKS = {
  repo: 'https://github.com/tan-zhuo/gma-web',
  blog: 'https://tanzhuo.xyz',
  author: 'tanzhuo',
} as const
