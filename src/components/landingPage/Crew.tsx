"use client";

import Autoplay from "embla-carousel-autoplay";
import CrewCard from "./CrewCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";

const CREW = [
  {
    name: "Manoj Perera",
    title: "Head Coach",
    imgSrc: "/assets/crew/Manoj Sir.jpeg",
    whatsapp: "94773933114",
    facebook: "https://www.facebook.com/manoj518?mibextid=ZbWKwL",
    instagram: "https://www.instagram.com/optimum_mano?igsh=dnRtMjExcW11OTE4c",
  },
  {
    name: "Manjula Perera",
    title: "Power Aerobics Instructor",
    imgSrc: "/assets/crew/Manjula Miss.jpeg",
    whatsapp: "",
    facebook: "https://www.facebook.com/manjulakumari.perera?mibextid=ZbWKwL",
    instagram:
      "https://www.instagram.com/pereramanjula72?igsh=MW04c3ZlOXcyMjRsZQ==",
  },
  {
    name: "Sujani Maheshika",
    title: "Aerobics Instructor",
    imgSrc: "/assets/crew/Sujani Miss.png",
    whatsapp: "94766890201",
    facebook: "https://www.facebook.com/yoshika.jayakody?mibextid=ZbWKwL",
    instagram: "https://www.instagram.com/suja_19_?igsh=MWI1YjV6c2JvajJsbQ==",
  },
  {
    name: "Thisara Bhashana",
    title: "Physical Fitness Trainer",
    imgSrc: "/assets/crew/Bhashana Aiya.jpeg",
    whatsapp: "94772618808",
    facebook: "",
    instagram: "",
  },
  {
    name: "Chathura Kalinga",
    title: "Physical Fitness Trainer",
    imgSrc: "/assets/crew/Kalinga Aiya.jpeg",
    whatsapp: "94750300381",
    facebook: "",
    instagram: "",
  },
];

const Crew = () => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));

  return (
    <>
      <div className="w-full max-sm:pt-28 sm:py-8" id="instructors">
        <div className="flex w-full flex-col gap-5">
          <div className="">
            <h2>
              Our <span className="text-primary">Dedicated</span> Crew
            </h2>
            <p>
              At Optimum Gym, discover the expertise of our nationally qualified
              trainers committed to sculpting your fitness journey. Each trainer
              at Optimum Gym possesses unique skills and a dedication to
              personalised training.
            </p>
          </div>

          <div className="hidden h-full w-full sm:block">
            <Carousel
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 w-full px-1 py-5 md:-ml-4">
                {CREW.map((crewInfo, idx) => (
                  <CarouselItem key={idx} className="sm:basis-1/4">
                    <CrewCard
                      name={crewInfo.name}
                      title={crewInfo.title}
                      imgSrc={crewInfo.imgSrc}
                      whatsapp={crewInfo.whatsapp}
                      facebook={crewInfo.facebook}
                      instagram={crewInfo.instagram}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden sm:block">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
          <div className="block h-full w-full sm:hidden">
            <Carousel
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 w-full px-1 py-5 md:-ml-4">
                {CREW.map((crewInfo, idx) => (
                  <CarouselItem key={idx} className="sm:basis-1/4">
                    <CrewCard
                      name={crewInfo.name}
                      title={crewInfo.title}
                      imgSrc={crewInfo.imgSrc}
                      whatsapp={crewInfo.whatsapp}
                      facebook={crewInfo.facebook}
                      instagram={crewInfo.instagram}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="hidden sm:block">
                <CarouselPrevious />
                <CarouselNext />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crew;
