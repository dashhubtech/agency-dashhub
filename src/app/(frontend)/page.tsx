import CTA from '@/sections/CTA'
import FAQs from '@/sections/FAQs'

import Hero from '@/sections/Hero'
import Intro from '@/sections/Intro'
import BlogPosts from '@/sections/BlogPosts'

import About from '@/sections/About'
import ServicesCarousel from '@/components/ServicesCarousel'

export default async function Home() {
  return (
    <main className="bg-[#274dfa] text-white">
      <Hero />
      <Intro />
      <About />
      <ServicesCarousel />
      <BlogPosts />
      <FAQs />
      <CTA />
    </main>
  )
}
