import Image from "next/image";

const SERVICES = [
  {
    title: "Professional Guidance",
    description:
      "Our team of certified trainers provides professional guidance and support tailored to your fitness goals and needs.",
    imgSrc: "/assets/Card-1-Pic.svg",
  },
  {
    title: "Guaranteed Results",
    description:
      "With our proven training programs and personalized approach, we guarantee results that will exceed your expectations.",
    imgSrc: "/assets/Card-2-Pic.svg",
  },
  {
    title: "Top-Tier Workout Gear",
    description:
      "Our gym is equipped with state-of-the-art machines and equipment designed to maximize your workout experience.",
    imgSrc: "/assets/Card-3-Pic.svg",
  },
];

const SERVICEPILLS = [
  {
    order: 1,
    title: "Personalised Approach",
  },
  {
    order: 2,
    title: "Nutritional Guidance",
  },
  {
    order: 3,
    title: "Flexible Hours",
  },
  {
    order: 4,
    title: "Supportive Community",
  },
];

const Services = () => {
  return (
    <>
      <div className="w-full max-sm:pt-28 sm:py-8" id="services">
        <div className="flex w-full flex-col gap-5">
          <div className="text-center">
            <h2>
              What Makes Us <span className="text-primary">Different</span>
            </h2>
            <p>
              Experience the difference with our top-notch facilities,
              personalised training, and guaranteed results.
            </p>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-4 whitespace-nowrap">
              {SERVICEPILLS.map((pill, idx) => (
                <div
                  className="rounded-full bg-primary/10 px-3.5 py-0.5"
                  key={idx}
                >
                  <p className="font-medium">{pill.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3.5 grid gap-5 sm:grid-cols-3">
            {SERVICES.map((service, idx) => (
              <div
                className="space-y-1 rounded-lg border border-border p-5"
                key={idx}
              >
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Image
                  width={280}
                  height={199}
                  priority={true}
                  src={service.imgSrc}
                  alt="About Image"
                  className="pointer-events-none size-auto select-none pt-5"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
