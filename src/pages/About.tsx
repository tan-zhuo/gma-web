import { About } from '@/components/About'
import { useLang } from '@/i18n'
import { useSeo } from '@/hooks/useSeo'

export function AboutPage() {
  const { t } = useLang()
  useSeo({ title: t.about.title, description: t.about.desc })
  return <About />
}
