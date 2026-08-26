import { ConsoleGrid } from '@/components/ConsoleGrid'
import { useLang } from '@/i18n'
import { useSeo } from '@/hooks/useSeo'

export function ConsolesPage() {
  const { t } = useLang()
  useSeo({ title: t.consoles.title, description: t.consoles.desc })
  return <ConsoleGrid />
}
