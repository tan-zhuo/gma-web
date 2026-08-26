import { CompareTable } from '@/components/CompareTable'
import { useLang } from '@/i18n'
import { useSeo } from '@/hooks/useSeo'

export function ComparePage() {
  const { t } = useLang()
  useSeo({ title: t.compare.title, description: t.compare.desc })
  return <CompareTable />
}
