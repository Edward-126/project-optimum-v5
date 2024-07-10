import Image from "next/image";
import Link from "next/link";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";

const CrewCard = ({
  name,
  title,
  imgSrc,
  whatsapp,
  facebook,
  instagram,
}: {
  name: string;
  title: string;
  imgSrc: string;
  whatsapp?: string;
  facebook?: string;
  instagram?: string;
}) => {
  return (
    <>
      <div className="flex flex-col items-center gap-2 rounded-lg border border-border p-2.5 transition-all duration-300 ease-in-out hover:scale-[1.01] hover:border-primary/50 sm:p-4">
        <div className="aspect-square size-full overflow-hidden rounded-lg">
          <Image
            width={205}
            height={205}
            priority={true}
            src={imgSrc}
            alt="About Image"
            className="pointer-events-none w-full select-none"
          />
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="text-center">
            <h3>{name}</h3>
            <small className="font-medium text-primary">{title}</small>
          </div>
          <div className="flex gap-3">
            {whatsapp && (
              <Link
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="scale-[1.03] transition-all duration-300 ease-in-out hover:text-green-600 active:scale-100"
              >
                <AiOutlineWhatsApp className="size-5" />
              </Link>
            )}
            {facebook && (
              <Link href={facebook} target="_blank" rel="noreferrer">
                <FiFacebook className="size-5" />
              </Link>
            )}
            {instagram && (
              <Link href={instagram} target="_blank" rel="noreferrer">
                <SiInstagram className="size-5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CrewCard;
