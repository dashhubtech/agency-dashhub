"use client";

import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";
import { cn } from "@/lib/utils";
import { useInView } from "motion/react";
import { useEffect } from "react";
import { TextAnimate } from "./magicui/text-animate";
import { TextEffect } from "components/motion-primitives/text-effect";

export const AboutIntro = ({ className }: { className: string }) => {
  const { scope, entranceAnimation } = useTextRevealAnimation();
  const inView = useInView(scope, {
    once: true,
  });

  useEffect(() => {
    if (inView) {
      entranceAnimation();
    }
  }, [inView, entranceAnimation]);
  return (
    <div
      className={cn(
        "container flex flex-col items-start justify-center gap-5  ",
        className
      )}
    >
      <div>
        <h2 className="text-5xl md:text-7xl font-semibold lg:text-8xl font-outfit flex flex-col overflow-hidden ">
          Who We Are
        </h2>

        <p>
          Dashhub is a venture studio built for scale. We partner with startups
          and businesses in Ecommerce, SaaS, and Retail, providing the
          expertise, resources, and capital they need to grow—whether through
          equity or cash-based collaborations.
        </p>
      </div>
      <div>
        <h2 className="text-5xl md:text-7xl font-semibold lg:text-8xl font-outfit flex flex-col overflow-hidden ">
          Our Mission
        </h2>
        <p>
          We don’t just invest; we co-build, strategize, and accelerate. Our
          mission is to turn bold ideas into scalable, high-impact businesses by
          fusing innovation with execution
        </p>
      </div>
      <div>
        <h2 className="text-5xl md:text-7xl font-semibold lg:text-8xl font-outfit flex flex-col overflow-hidden ">
          Why Dashhub?
        </h2>
        <p>
          We’re more than advisors—we’re hands-on builders with a track record
          in venture capital, startup scaling, and market disruption. Our team
          of founders, investors, and growth strategists knows what it takes to
          go from zero to traction, and beyond.
        </p>
      </div>
    </div>
  );
};
