import CrewCard from "./CrewCard";

const CREW = [
  {
    name: "Manoj Perera",
    title: "Head Coach",
    imgSrc: "/assets/crew/Manoj Sir.jpeg",
    whatsapp: "94773933114",
    facebook: "",
    instagram: "",
  },
  {
    name: "Sujani Maheshika",
    title: "Aerobics Instructor",
    imgSrc: "/assets/crew/Sujani Miss.png",
    whatsapp: "94766890201",
    facebook: "",
    instagram: "",
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

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-4">
            {CREW.map((crewInfo, idx) => (
              <div key={idx}>
                <CrewCard
                  name={crewInfo.name}
                  title={crewInfo.title}
                  imgSrc={crewInfo.imgSrc}
                  whatsapp={crewInfo.whatsapp}
                  facebook={crewInfo.facebook}
                  instagram={crewInfo.instagram}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Crew;
