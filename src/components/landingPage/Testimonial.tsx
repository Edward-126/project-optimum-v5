"use client";

import { client } from "@/client";
import { useEffect, useState } from "react";
import TestimonyCard from "./TestimonyCard";
import { Icons } from "../shared/Icons";

export interface Testimonial {
  _id: string;
  name: string;
  occupation: string;
  testimony: string;
  image: string;
}

const Testimonial = () => {
  const [testimony, setTestimony] = useState<Testimonial[]>([]);

  useEffect(() => {
    const query = '*[_type == "testimonial"] | order(order asc)';

    client.fetch(query).then((data) => {
      setTestimony(data);
    });
  }, []);

  // const getRandomHeight = () => {
  //   return Math.floor(Math.random() * 150) + 180;
  // };

  return (
    <div className="w-full max-sm:pt-28 sm:py-8" id="instructors">
      <div className="flex w-full flex-col gap-5">
        <div>
          <h2>
            Discover Why People Love{" "}
            <span className="text-primary">Optimum</span> Gym
          </h2>
          <p>
            See what our members have to say about our optimum gym experience.
          </p>
        </div>
        <div className="columns-1 gap-5 sm:columns-3">
          {testimony.length > 0
            ? testimony.map((testimonyData, idx) => (
                <div key={idx}>
                  <TestimonyCard
                    name={testimonyData.name}
                    occupation={testimonyData.occupation}
                    testimony={testimonyData.testimony}
                    image={testimonyData.image}
                  />
                </div>
              ))
            : [1, 2, 3, 4, 5].map((idx) => (
                <div
                  className="mb-5 flex h-56 break-inside-avoid items-center justify-center rounded-lg border border-primary/10 bg-primary/5 p-4"
                  // style={{ height: `${getRandomHeight()}px` }}
                  key={idx}
                >
                  <Icons.subLogo className="h-[50px] fill-primary/15" />
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
