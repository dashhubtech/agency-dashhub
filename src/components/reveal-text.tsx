import { cn } from "@/lib/utils";
import { TextLoop } from "./text-loop";
import { BoxReveal } from "./magicui/box-reveal";

const RevealText = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className)}>
      <TextLoop
        className="overflow-y-clip container hidden md:block"
        interval={5}
        transition={{
          type: "spring",
          stiffness: 900,
          damping: 80,
          mass: 10,
        }}
        variants={{
          initial: {
            y: 20,
            rotateX: 90,
            opacity: 0,
            filter: "blur(4px)",
          },
          animate: {
            y: 0,
            rotateX: 0,
            opacity: 1,
            filter: "blur(0px)",
          },
          exit: {
            y: -20,
            rotateX: -90,
            opacity: 0,
            filter: "blur(4px)",
          },
        }}
      >
        <BoxReveal duration={0.5}>
          <span className=" text-5xl md:text-6xl lg:text-8xl font-bold">
            for tomorrow
          </span>
        </BoxReveal>
        <BoxReveal duration={0.5}>
          <span className=" text-5xl md:text-6xl lg:text-8xl font-bold">
            that impacts the world
          </span>
        </BoxReveal>

        <BoxReveal duration={0.7}>
          <p className=" text-5xl md:text-6xl lg:text-8xl font-bold">
            that progress soceity
          </p>
        </BoxReveal>
      </TextLoop>
    </div>
  );
};

export default RevealText;
