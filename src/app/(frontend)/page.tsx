import CTA from '@/sections/CTA'
import FAQs from '@/sections/FAQs'
import Footer from '@/sections/Footer'
import Header from '@/sections/Header'
import Hero from '@/sections/Hero'
import Intro from '@/sections/Intro'

import About from '@/sections/About'
import Services from '@/sections/Services'

export default async function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <About />
      <Services />

      <FAQs />
      <CTA />
      <Footer />
    </>
  )
}
