"use client";

import Button from "@/components/Button";
import { ContainerTextFlip } from "@/components/container-text-flip";
import { InfiniteSlider } from "@/components/infinite-slider";
import RevealText from "@/components/reveal-text";
import { heroImages } from "@/lib/constants";
import Link from "next/link";
import { FC } from "react";

const Hero: FC = () => {
  return (
    <section className="w-full h-screen ">
      <div className="h-full py-[100px] space-y-4 flex flex-col" id="home">
        <div className="container space-y-4 not-first-of-type:items-start h-full">
          <div>
            <p className="text-xl font-bold">
              Are you ready to scale your business?
            </p>
            <h1 className="text-6xl lg:text-8xl flex flex-col md:flex-row items-start md:items-center gap-4">
              Dashhub builds{" "}
              <ContainerTextFlip
                words={["startups", "ventures", "innovations"]}
                animationDuration={1000}
                interval={5000}
              />
            </h1>
          </div>

          <Link href="https://calendly.com/dashhubtech/audit-call">
            <Button
              className="w-[200px] flex items-center justify-center"
              variant="secondary"
            >

             Let&apos;s get started
            </Button>

            </Link>
        </div>
        <div>
          <InfiniteSlider speedOnHover={1} gap={24}>
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
  );
};

export default Hero;
