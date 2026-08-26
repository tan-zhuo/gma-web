import { About } from './components/About'
import { CompareTable } from './components/CompareTable'
import { ConsoleGrid } from './components/ConsoleGrid'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { Timeline } from './components/Timeline'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Timeline />
        <ConsoleGrid />
        <CompareTable />
        <About />
      </main>
      <Footer />
    </>
  )
}
