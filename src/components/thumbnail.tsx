'use client'

import {
  Carousel,
  CarouselIndicator,
  CarouselMainContainer,
  CarouselNext,
  CarouselPrevious,
  CarouselThumbsContainer,
  SliderMainItem,
} from '@/components/extension/carousel'
import { servicesData } from '@/lib/data'

interface ServicesSlideshowProps {
  servicesData: typeof servicesData
}

export const ServicesSlideshow = ({ servicesData }: ServicesSlideshowProps) => {
  return (
    <Carousel>
      <CarouselNext />
      <CarouselPrevious />
      <div className="relative ">
        <div className="space-y-4 ">
          <CarouselMainContainer className="h-60 ">
            {servicesData.map((data, index) => (
              <SliderMainItem key={index} className="bg-transparent">
                <div className="outline  outline-border size-full flex items-center justify-center rounded-xl">
                  {data.title}
                </div>
              </SliderMainItem>
            ))}
          </CarouselMainContainer>
          <CarouselThumbsContainer className="gap-x-1 justify-self-center">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselIndicator key={index} index={index} />
            ))}
          </CarouselThumbsContainer>
        </div>
      </div>
    </Carousel>
  )
}
