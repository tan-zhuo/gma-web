import raw from './consoles.json'
import creditsRaw from './credits.json'
import logosRaw from './logos.json'
import type { Brand, BrandMeta, CompareRow, Console, Generation } from '@/types/console'
import type { ImageCredit } from '@/types/credit'

/** raw (Chinese) data — prefer `useLang().data` inside components */
export const BRANDS = raw.brands as Record<Brand, BrandMeta>
export const GENERATIONS = raw.generations as Generation[]
export const CONSOLES = raw.consoles as Console[]
export const COMPARE = raw.compare as CompareRow[]

export const BRAND_ORDER: Brand[] = ['ps', 'xbox', 'nintendo', 'sega', 'xiaobawang', 'steam', 'handheld', 'winpc', 'classic']

export const NAV_KEYS = [
  { to: '/timeline', key: 'timeline' },
  { to: '/consoles', key: 'consoles' },
  { to: '/compare', key: 'compare' },
  { to: '/about', key: 'about' },
] as const

export const CREDITS = creditsRaw as Record<string, ImageCredit>

export interface BrandLogo { file: string; title: string; page: string; license: string }
export const LOGOS = logosRaw as Partial<Record<Brand, BrandLogo>>

export const SITE_LINKS = {
  repo: 'https://github.com/tan-zhuo/gma-web',
  blog: 'https://tanzhuo.xyz',
  author: 'tanzhuo',
} as const
