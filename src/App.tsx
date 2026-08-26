import { BrowserRouter, Navigate, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { ScrollToTop } from './components/ScrollToTop'
import { LANGS, LangProvider, langFromPath } from './i18n'
import { AboutPage } from './pages/About'
import { ComparePage } from './pages/Compare'
import { ConsolesPage } from './pages/Consoles'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'
import { TimelinePage } from './pages/Timeline'

function Layout() {
  const { pathname } = useLocation()
  const lang = langFromPath(pathname)
  return (
    <LangProvider lang={lang}>
      <ScrollToTop />
      <Nav />
      <main><Outlet /></main>
      <Footer />
    </LangProvider>
  )
}

/** On first visit to "/", honour a previously chosen language. */
function RootRedirect() {
  let saved: string | null = null
  try { saved = localStorage.getItem('lang') } catch { /* ignore */ }
  const meta = LANGS.find((l) => l.code === saved)
  if (meta && meta.prefix && !sessionStorage.getItem('lang-redirected')) {
    sessionStorage.setItem('lang-redirected', '1')
    return <Navigate to={meta.prefix} replace />
  }
  return <Home />
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {['', '/en', '/ja'].map((p) => (
            <Route key={p || 'zh'} path={p || '/'}>
              <Route index element={p ? <Home /> : <RootRedirect />} />
              <Route path="timeline" element={<TimelinePage />} />
              <Route path="consoles" element={<ConsolesPage />} />
              <Route path="compare" element={<ComparePage />} />
              <Route path="about" element={<AboutPage />} />
            </Route>
          ))}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
