"use client";

import Button from "@/components/Button";
import TextAnimation from "@/components/text-animation";
import type { FC } from "react";

const CTA: FC = () => {
  return (
    <section className="section font-outfit">
      <div className="container space-y-5">
        <div className="text-center flex flex-col items-center justify-center gap-5">
          <TextAnimation delay={0.6}>
            <h2 className="text-5xl md:text-7xl lg:text-8xl uppercase font-bold ">
              Connect with the World
            </h2>
          </TextAnimation>
          <TextAnimation delay={0.7}>
            <p>
              Are you ready to make your ideas into reality, take a next step by
              messaging us today and <br /> let us get started on making your
              idea, a successful one.
            </p>
          </TextAnimation>

          <div>
            <Button
              className="w-[200px] flex items-center justify-center"
              variant="secondary"
            >
              I am Ready
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
