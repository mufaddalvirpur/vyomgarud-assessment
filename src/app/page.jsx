// src/app/page.jsx
import Hero from '../components/Hero'
import About from '../components/About'
import Products from '../components/Products'
import Highlights from '../components/Highlights'
import Footer from '../components/Footer'

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col bg-transparent">
      <div className="max-w-6xl mx-auto px-6">
        <Hero />
        <About />
        <Products />
        <Highlights />
      </div>
      <Footer />
    </main>
  )
}
