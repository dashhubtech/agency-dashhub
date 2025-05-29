"use client";

import TextAnimation from "@/components/text-animation";
import { type FC } from "react";

const Intro: FC = () => {
  return (
    <section className="section h-full md:h-screen " id="intro">
      <div className="container h-full flex flex-col items-center justify-center ">
        <TextAnimation delay={0.5} animateOnScroll={true}>
          <h2 className="text-4xl md:text-7xl lg:w-[90%] lg:text-8xl">
            Empowering visionary founders to build, scale, and disrupt the
            future of innovation and entrepreneurship
          </h2>
        </TextAnimation>
      </div>
    </section>
  );
};

export default Intro;
