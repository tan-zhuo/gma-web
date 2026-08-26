import { createContext, useContext, useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import raw from '@/data/consoles.json'
import contentEn from '@/data/content.en.json'
import contentJa from '@/data/content.ja.json'
import type { Brand, BrandMeta, CompareRow, Console, Generation } from '@/types/console'
import { LANGS, UI_STRINGS, type Lang, type UI } from './ui'

export type { Lang, UI }
export { LANGS }

interface ContentPack {
  brands?: Partial<Record<Brand, Partial<BrandMeta>>>
  consoles?: Record<string, Partial<Console>>
  generations?: Record<string, Partial<Pick<Generation, 'name' | 'desc' | 'years'>>>
  compare?: Record<string, Partial<CompareRow>>
}
const PACKS: Partial<Record<Lang, ContentPack>> = { en: contentEn as ContentPack, ja: contentJa as ContentPack }

export interface LocalizedData {
  brands: Record<Brand, BrandMeta>
  consoles: Console[]
  generations: Generation[]
  compare: CompareRow[]
}

function localize(lang: Lang): LocalizedData {
  const pack = PACKS[lang] ?? {}
  const brands = Object.fromEntries(Object.entries(raw.brands).map(([k, v]) => [k, { ...v, ...(pack.brands?.[k as Brand] ?? {}) }])) as Record<Brand, BrandMeta>
  const consoles = (raw.consoles as Console[]).map((c) => ({ ...c, ...(pack.consoles?.[c.id] ?? {}) }))
  const generations = (raw.generations as Generation[]).map((g) => ({ ...g, ...(pack.generations?.[String(g.n)] ?? {}) }))
  const compare = (raw.compare as CompareRow[]).map((r) => ({ ...r, ...(pack.compare?.[r.name] ?? {}) }))
  return { brands, consoles, generations, compare }
}

interface Ctx { lang: Lang; t: UI; data: LocalizedData; prefix: string; path: (p: string) => string; htmlLang: string }
const LangCtx = createContext<Ctx | null>(null)

export function langFromPath(pathname: string): Lang {
  const seg = pathname.split('/')[1]
  return seg === 'en' || seg === 'ja' ? seg : 'zh'
}
/** strips a language prefix from a pathname */
export function stripLang(pathname: string): string {
  return pathname.replace(/^\/(en|ja)(?=\/|$)/, '') || '/'
}

export function LangProvider({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  const meta = LANGS.find((l) => l.code === lang)!
  const value = useMemo<Ctx>(() => ({
    lang, t: UI_STRINGS[lang], data: localize(lang), prefix: meta.prefix, htmlLang: meta.htmlLang,
    path: (p: string) => `${meta.prefix}${p === '/' && meta.prefix ? '' : p}` || '/',
  }), [lang, meta])
  useEffect(() => {
    document.documentElement.lang = meta.htmlLang
    document.documentElement.dataset.lang = lang
    try { localStorage.setItem('lang', lang) } catch { /* ignore */ }
  }, [lang, meta])
  return <LangCtx.Provider value={value}>{children}</LangCtx.Provider>
}

export function useLang(): Ctx {
  const ctx = useContext(LangCtx)
  if (!ctx) throw new Error('useLang outside LangProvider')
  return ctx
}

/** current pathname without language prefix — for building alternate-language links */
export function useBarePath(): string {
  const { pathname } = useLocation()
  return stripLang(pathname)
}
