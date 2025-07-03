import HoverCard from '@/components/hover-card'
import { servicesData } from '@/lib/data'
import React from 'react'

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="mt-10 md:mt-16 lg:mt-20">
        <HoverDevCard />
      </div>
    </section>
  )
}

export default Services

const HoverDevCard = () => {
  return (
    <div className="p-4">
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2  ">
        {servicesData.map(({ title, description, icon }, index) => (
          <HoverCard key={index} title={title} subtitle={description} Icon={icon} />
        ))}
      </div>
    </div>
  )
}
