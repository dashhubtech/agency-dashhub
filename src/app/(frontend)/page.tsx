import CTA from '@/sections/CTA'
import FAQs from '@/sections/FAQs'
import Footer from '@/sections/Footer'
import Header from '@/sections/Header'
import Hero from '@/sections/Hero'
import Intro from '@/sections/Intro'
import HomePlogPosts from '@/sections/HomePlogPosts'

import About from '@/sections/About'
import Services from '@/sections/Services'

export default async function Home() {
  return (
    <main className="bg-[#274dfa] text-white">
      <Header />
      <Hero />
      <Intro />
      <About />
      <Services />
      <HomePlogPosts />
      <FAQs />
      <CTA />
      <Footer />
    </main>
  )
}
