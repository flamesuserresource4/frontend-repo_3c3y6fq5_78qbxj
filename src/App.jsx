import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WorkGrid from './components/WorkGrid'
import Services from './components/Services'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative">
        <Navbar />
        <Hero />
      </div>
      <WorkGrid />
      <Services />
      <Process />
      <Testimonials />
      <Contact />
      <footer className="bg-black text-white/60 py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <p>© {new Date().getFullYear()} ThumbForge Studio. All rights reserved.</p>
          <a href="/test" className="text-white/60 hover:text-white text-sm">System status</a>
        </div>
      </footer>
    </div>
  )
}

export default App
