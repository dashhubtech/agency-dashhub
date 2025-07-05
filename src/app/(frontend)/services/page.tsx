import Button from '@/components/Button'
import BlogPosts from '@/sections/BlogPosts'
import CTA from '@/sections/CTA'
import Services from '@/sections/Services'
import React from 'react'

const ServicesPage = () => {
  return (
    <section className="section  bg-gray-100">
      <div className="container">
        <div className=" px-4 md:px-0 flex flex-col-reverse md:flex-row items-center gap-4 justify-between ">
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col items-start gap-4">
              <p className="text-xl text-muted-foreground uppercase">Our Services</p>
              <h1 className="!m-0 text-7xl !lg:text-9xl capitalize max-w-2xl">
                Need help with your business
              </h1>
              <p>We got you covered</p>
            </div>

            <Button variant="secondary">Get Started</Button>
          </div>
        </div>

        <Services />

        <BlogPosts />

        <CTA />
      </div>
    </section>
  )
}

export default ServicesPage
