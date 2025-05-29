import TextAnimation from "@/components/text-animation";
import AboutImage from "@/assets/about.jpg";
import HeroImage1 from "@/assets/hero-1.jpg";
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <section
      className="bg-white h-full  rounded-4xl shadow-2xl text-black"
      id="about"
    >
      <div className="h-full pt-[100px] px-4 md:px-0 flex flex-col-reverse md:flex-row items-center gap-4 justify-between">
        <div className="flex-1">
          <img
            src={HeroImage1.src}
            alt="About"
            className={cn("about-img md:rounded-r-2xl rounded-2xl")}
          />
        </div>
        <div className="container flex flex-col items-center justify-center flex-1">
          <div className="flex items-center gap-2">
            <hr className="w-[30px] h-1 bg-black" />
            <h2 className="text-2xl font-bold uppercase">About</h2>
          </div>
          <TextAnimation animateOnScroll={true} delay={0.7}>
            <p className="font-semi-bold text-lg md:text-2xl ">
              <span className="text-4xl font-bold uppercase pr-2">Dashhub</span>
              is an innovative business development company, that empowers
              founders and entrepreneurs to turn their bold ideas into
              flourishing, high-growth businesses. Established in 2022, we have
              dedicated ourselves to crafting a unique Venture Studio model,
              where we collaborate with visionary individuals to refine business
              models, identify market opportunities, design sustainable growth
              strategies, and provide unparalleled support in product
              development, branding, and scaling.
            </p>
          </TextAnimation>
        </div>
      </div>

      <div className="h-full py-[50px] px-4 md:px-0 flex flex-col items-center justify-center gap-6 ">
        <div>
          <img
            src={AboutImage.src}
            alt="About"
            className={"  rounded-2xl grayscale-100 about-img"}
          />
        </div>
        <div className=" flex flex-col  items-center justify-center flex-1 gap-5">
          <div className="flex items-center gap-2">
            <hr className="w-[30px] h-1 bg-black" />
            <h2 className="text-3xl uppercase ">What We Do</h2>
          </div>
          <TextAnimation delay={0.5}>
            <p className=" px-4 font-semi-bold text-2xl md:text-5xl text-right ">
              At DashHub Tech, we help businesses grow by refining their
              business models, identifying new market opportunities, and
              designing strategies for long-term success. We support product
              development from idea to launch, create strong and memorable
              branding, and provide the tools needed to scale your business
              effectively. Our goal is to guide you through every stage of
              growth with smart, sustainable solutions.
            </p>
          </TextAnimation>
        </div>
      </div>
    </section>
  );
};

export default About;
