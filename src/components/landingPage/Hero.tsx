import TempBlock from "../shared/TempBlock";
import { Button } from "../ui/button";
import About from "./About";
import BmiCalculator from "./BmiCalculator";
import Crew from "./Crew";
import Faq from "./Faq";
import Pricing from "./Pricing";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Hero = () => {
  return (
    <>
      <div className="relative sm:h-[687px]">
        <div className="blob -z-10" />
        <div className="flex h-full items-center">
          <div className="grid h-full w-full gap-9 max-sm:mt-56 sm:grid-cols-12">
            <div className="flex flex-col justify-center gap-3 sm:col-span-7">
              <h1 className="text-center sm:text-start">
                Where <span className="text-primary">Strength</span> and Fitness
                Meet.
              </h1>
              <p className="text-center sm:text-start">
                Join us at{" "}
                <span className="font-semibold text-primary">Optimum Gym</span>{" "}
                and discover the perfect blend of strength, fitness, and
                community.
              </p>
              <div className="mt-2 flex items-center justify-center gap-6 sm:justify-start">
                <Button>Explore Now</Button>
                <Button variant="secondary">Explore Now</Button>
              </div>
            </div>
            <div className="flex h-full items-center justify-center sm:col-span-5">
              <BmiCalculator />
            </div>
          </div>
        </div>
      </div>
      <About />
      <Services />
      <Crew />
      <Pricing />
      <Testimonial />
      <Faq />
    </>
  );
};

export default Hero;
