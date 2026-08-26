import { Timeline } from '@/components/Timeline'
import { useLang } from '@/i18n'
import { useSeo } from '@/hooks/useSeo'

export function TimelinePage() {
  const { t } = useLang()
  useSeo({ title: t.timeline.title, description: t.timeline.desc })
  return <Timeline />
}
