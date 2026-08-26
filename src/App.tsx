import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { ScrollToTop } from './components/ScrollToTop'
import { AboutPage } from './pages/About'
import { ComparePage } from './pages/Compare'
import { ConsolesPage } from './pages/Consoles'
import { Home } from './pages/Home'
import { TimelinePage } from './pages/Timeline'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/consoles" element={<ConsolesPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
