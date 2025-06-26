import CTA from '@/sections/CTA'
import FAQs from '@/sections/FAQs'

import Hero from '@/sections/Hero'
import Intro from '@/sections/Intro'
import BlogPosts from '@/sections/BlogPosts'

import About from '@/sections/About'
import Services from '@/sections/Services'

export default async function Home() {
  return (
    <main className="bg-[#274dfa] text-white">
      <Hero />
      <Intro />
      <About />
      <Services />
      <BlogPosts />
      <FAQs />
      <CTA />
    </main>
  )
}
