'use client'
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselIndicator,
  CarouselPrevious,
  CarouselNext,
  CarouselThumbsContainer,
} from '@/components/ui/carousel'
import { servicesData } from '@/lib/data'
import Autoplay from 'embla-carousel-autoplay'
import { useState } from 'react'

const ServicesCarousel = () => {
  const [api, setApi] = useState<CarouselApi>()

  return (
    <section className="max-w-[90rem] px-4 mx-auto section">
      <div className="pb-[50px]">
        <h2 className="text-5xl md:text-7xl font-semibold lg:text-8xl">Services</h2>
        <p className="text-xl md:text-2xl lg:text-3xl">
          We offer the following services to our clients.
        </p>
      </div>

      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        setApi={setApi}
        className="space-y-6"
      >
        <CarouselContent>
          {servicesData.map(({ title, description, icon: Icon, image }, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 ">
              <div className="shadow-md text-white ">
                <div className="flex flex-col items-center  relative gap-4 mx-auto">
                  <img src={image} alt={title} className="object-contain rounded-2xl  " />

                  <div className="absolute w-full h-full bg-black/60 rounded-2xl " />
                  <div className="absolute mt-4 text-center space-y-2 bottom-5 left-0 px-4">
                    <div className="flex items-center justify-center flex-row gap-4">
                      <Icon className="w-14 h-14" />
                      <h3 className="text-2xl md:text-3xl capitalize  font-semibold">{title}</h3>
                    </div>
                    <p className=" text-base">{description}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:block" />
        <CarouselNext className="hidden md:block" />

        <CarouselThumbsContainer className="gap-x-1 justify-self-center ">
          {servicesData.map((_, index) => (
            <CarouselIndicator key={index} index={index} />
          ))}
        </CarouselThumbsContainer>
      </Carousel>
    </section>
  )
}

export default ServicesCarousel
