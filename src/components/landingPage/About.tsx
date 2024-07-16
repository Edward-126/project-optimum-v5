import Image from "next/image";

const About = () => {
  return (
    <>
      <div className="max-sm:pt-28 sm:py-8" id="about">
        <div className="flex flex-col gap-5 rounded-lg border border-border px-4 py-7 sm:flex-row sm:px-8 sm:py-9">
          <Image
            width={271.95}
            height={220}
            priority={true}
            src="/assets/About-Image.svg"
            alt="About Image"
            className="pointer-events-none size-auto select-none"
          />
          <div className="flex flex-col justify-between max-sm:mt-4">
            <div className="">
              <h2>
                <span className="text-primary">About</span> Us
              </h2>
              <p>
                We're a supportive gym community dedicated to high-quality
                health and wellness. At our gym, you'll find top-notch
                facilities equipped with state-of-the-art machines and equipment
                to maximize your workout experience.
              </p>
            </div>
            <div className="hidden justify-evenly pt-10 sm:flex">
              <div className="text-center">
                <h2>3000+</h2>
                <p>Members</p>
              </div>
              <div className="text-center">
                <h2>10+</h2>
                <p>Years of service</p>
              </div>
              <div className="text-center">
                <h2>4+</h2>
                <p>Instructors</p>
              </div>
            </div>

            <div className="flex justify-evenly pt-10 sm:hidden">
              <div className="text-center">
                <h2 className="">3000+</h2>
                <p className="text-sm">Members</p>
              </div>
            </div>

            <div className="flex justify-evenly pt-5 sm:hidden">
              <div className="text-center">
                <h2 className="">10+</h2>
                <p className="text-sm">Years of service</p>
              </div>
              <div className="text-center">
                <h2 className="">4+</h2>
                <p className="text-sm">Instructors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
