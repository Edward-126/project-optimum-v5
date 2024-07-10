import React from "react";
import { Button } from "../ui/button";
import BmiCalculator from "./BmiCalculator";

const Hero = () => {
  return (
    <>
      <div className="relative max-sm:overflow-x-hidden sm:h-[687px]">
        <div className="absolute -z-10 rounded-full bg-primary blur-[90px] filter sm:left-[60%] sm:top-[40%] sm:size-[200px]" />
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
    </>
  );
};

export default Hero;
