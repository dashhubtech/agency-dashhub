import Image, { StaticImageData } from "next/image";
import { HTMLAttributes, useEffect } from "react";
import { twMerge } from "tailwind-merge";

import { usePresence, motion } from "motion/react";
import useTextRevealAnimation from "@/hooks/useTextRevealAnimation";

const Testimonial = ({
  quote,
  company,
  image,
  imagePositionY,
  name,
  role,
  className,
  ...props
}: {
  name: string;
  company: string;
  role: string;
  quote: string;
  image: string | StaticImageData;
  imagePositionY: number;
  className?: string;
} & HTMLAttributes<HTMLDivElement>) => {
  // const [quoteScope, quoteAnimate] = useAnimate();

  const {
    scope: quoteScope,
    entranceAnimation: quoteEntranceAnimation,
    exitAnimation: quoteExitAnimation,
  } = useTextRevealAnimation();

  const {
    scope: citeScope,
    entranceAnimation: citeEntranceAnimation,
    exitAnimation: citeExitAnimation,
  } = useTextRevealAnimation();

  const [isPresent, safeToRemove] = usePresence();
  useEffect(() => {
    if (isPresent) {
      quoteEntranceAnimation().then(() => {
        citeEntranceAnimation();
      });
    } else {
      Promise.all([quoteExitAnimation(), citeExitAnimation()]).then(() => {
        safeToRemove();
      });
    }
  }, [
    isPresent,
    citeEntranceAnimation,
    citeExitAnimation,
    safeToRemove,
    quoteEntranceAnimation,
    quoteExitAnimation,
  ]);

  return (
    <div
      key={name}
      className={twMerge(
        "grid md:grid-cols-5 md:gap-8 md:items-center lg:gap-16",
        className
      )}
      {...props}
    >
      <div className="aspect-square md:col-span-2 md:aspect-9/16 relative">
        <motion.div
          className="absolute h-full bg-stone-900"
          initial={{
            width: "100%",
          }}
          animate={{
            width: 0,
          }}
          exit={{
            width: "100%",
          }}
          transition={{
            duration: 0.5,
          }}
        ></motion.div>
        <Image
          src={image}
          alt={name}
          className="size-full object-cover"
          style={{
            objectPosition: `50% ${imagePositionY * 100}%`,
          }}
        />
      </div>
      <blockquote className="md:col-span-3">
        <div
          className="text-3xl md:text-5xl mt-8  lg:text-6xlmd:mt-0"
          ref={quoteScope}
        >
          <span>&ldquo;</span>
          {quote}
          <span>&rdquo;</span>
        </div>
        <cite
          ref={citeScope}
          className="mt-4 md:mt-8 not-italic block md:text-lg lg:text-xl"
        >
          {name}, {role} at {company}
        </cite>
      </blockquote>
    </div>
  );
};

export default Testimonial;
