import { urlFor } from "@/client";
import Image from "next/image";

const TestimonyCard = ({
  name,
  testimony,
  occupation,
  image,
}: {
  name: string;
  testimony: string;
  occupation: string;
  image: string;
}) => {
  return (
    <>
      <div className="group mb-5 break-inside-avoid space-y-3 rounded-lg border border-border p-4 transition-all duration-300 ease-in-out hover:scale-[1.02] hover:border-primary/50 active:scale-100">
        <p className="w-full text-balance">{testimony}</p>
        <div className="flex items-center gap-2.5">
          <Image
            width={50}
            height={50}
            priority={true}
            src={urlFor(image).url()}
            alt="Profile Image"
            className="pointer-events-none size-[50px] select-none rounded-full border border-transparent transition-all duration-300 ease-in-out group-hover:scale-[1.02] group-hover:border-primary/50"
          />
          <div className="flex w-full flex-col gap-1">
            <small className="font-medium">{name}</small>
            <span className="text-[12px] leading-[100%] text-neutral-950/45">
              {occupation}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonyCard;
