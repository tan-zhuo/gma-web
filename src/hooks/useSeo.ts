import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { LANGS, stripLang, useLang } from '@/i18n'

interface Seo { title: string; description: string; image?: string }

function upsert(selector: string, create: () => HTMLElement, set: (el: HTMLElement) => void) {
  let el = document.head.querySelector<HTMLElement>(selector)
  if (!el) { el = create(); document.head.appendChild(el) }
  set(el)
}
const meta = (attr: 'name' | 'property', key: string, content: string) =>
  upsert(`meta[${attr}="${key}"]`, () => { const m = document.createElement('meta'); m.setAttribute(attr, key); return m }, (m) => m.setAttribute('content', content))
const link = (rel: string, href: string, hreflang?: string) =>
  upsert(`link[rel="${rel}"]${hreflang ? `[hreflang="${hreflang}"]` : ''}`, () => { const l = document.createElement('link'); l.rel = rel; if (hreflang) l.hreflang = hreflang; return l }, (l) => l.setAttribute('href', href))

/** Sets title/description/canonical/OG/Twitter/hreflang for the current route. */
export function useSeo({ title, description, image = '/og.png' }: Seo) {
  const { pathname } = useLocation()
  const { t, htmlLang } = useLang()
  useEffect(() => {
    const origin = window.location.origin
    const bare = stripLang(pathname)
    const url = origin + pathname
    const full = title === t.siteTitle ? title : `${title} — ${t.siteName}`
    document.title = full
    meta('name', 'description', description)
    link('canonical', url)
    meta('property', 'og:title', full); meta('property', 'og:description', description); meta('property', 'og:url', url)
    meta('property', 'og:image', origin + image); meta('property', 'og:locale', htmlLang.replace('-', '_'))
    meta('name', 'twitter:title', full); meta('name', 'twitter:description', description); meta('name', 'twitter:image', origin + image)
    for (const l of LANGS) link('alternate', origin + (l.prefix + (bare === '/' && l.prefix ? '' : bare) || '/'), l.htmlLang)
    link('alternate', origin + bare, 'x-default')
  }, [pathname, title, description, image, t, htmlLang])
}
