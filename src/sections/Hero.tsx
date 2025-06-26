'use client'

import Button from '@/components/Button'
import { ContainerTextFlip } from '@/components/container-text-flip'
import { InfiniteSlider } from '@/components/infinite-slider'
import { heroImages } from '@/lib/constants'
import Link from 'next/link'
import { FC } from 'react'

const Hero: FC = () => {
  return (
    <section
      className="w-full
     "
    >
      <div className="h-full py-[100px] space-y-4 flex flex-col" id="home">
        <div className=" space-y-2  h-full flex flex-col items-center justify-center ">
          <div className="text-center flex flex-col items-center justify-center">
            <h1 className="!text-7xl md:!text-8xl flex flex-col md:flex-row items-center gap-4">
              Dashhub builds{' '}
              <ContainerTextFlip
                words={['startups', 'ventures', 'innovations']}
                animationDuration={1000}
                interval={5000}
              />
            </h1>
            <p className="text-md md:text-lg  max-w-3xl">
              We partner with early-stage startups to build robust technology infrastructures,
              streamline product development, and accelerate market launch <br />— so you can scale
              fast and smart without the growing pains.
            </p>
          </div>

          <Link href="https://calendly.com/dashhubtech/audit-call">
            <Button
              className="w-[200px] flex items-center justify-center cursor-pointer"
              variant="primary"
            >
              Let&apos;s get started
            </Button>
          </Link>
        </div>
        <div>
          <InfiniteSlider speedOnHover={1} gap={24} className="relative">
            {heroImages.map((image, index) => (
              <img
                key={index}
                src={image.img}
                alt="hero-image"
                className="img  opacity-80 hover:opacity-100 transition-all duration-300 ease-in-out rounded-xl hover:scale-95 hover:shadow-2xl"
              />
            ))}
          </InfiniteSlider>
        </div>
        {/* <RevealText /> */}
      </div>
    </section>
  )
}

export default Hero
