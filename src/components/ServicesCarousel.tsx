'use client'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { servicesData } from '@/lib/data'
import Autoplay from 'embla-carousel-autoplay'
import { useState } from 'react'
import { DotButton, useDotButton } from './carousel-dot'

const ServicesCarousel = () => {
  const [api, setApi] = useState<CarouselApi>()
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api)

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
      >
        <CarouselContent>
          {servicesData.map(({ title, description, icon: Icon }, index) => (
            <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="flex flex-col items-center p-6 justify-center gap-4 shadow-md bg-white text-blue-purple-500 rounded-xl ">
                <Icon className="w-14 h-14" />
                <div className="mt-4 text-center space-y-4">
                  <h3 className="text-3xl capitalize  font-semibold">{title}</h3>
                  <p className=" text-base">{description}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="embla__controls">
          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={'embla__dot'.concat(
                  index === selectedIndex ? ' embla__dot--selected' : '',
                )}
              />
            ))}
          </div>
        </div>
      </Carousel>
    </section>
  )
}

export default ServicesCarousel
