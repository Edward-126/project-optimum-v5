import { ArrowRight, ExternalLink, Hash } from "lucide-react";
import Link from "next/link";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";
import { Icons } from "./Icons";

const FOOTERITEMS = [
  {
    sections: [
      { lable: "About", src: "#about", icon: Hash },
      { lable: "Instructors", src: "#instructors", icon: Hash },
      { lable: "Schedule", src: "#schedule", icon: Hash },
      { lable: "Pricing", src: "#pricing", icon: Hash },
      { lable: "Contact", src: "/contact", icon: ArrowRight },
    ],
    socials: [
      {
        lable: "WhatsApp",
        src: "https://wa.me/94773933114",
        icon: AiOutlineWhatsApp,
      },
      {
        lable: "Facebook",
        src: "https://www.facebook.com/people/Optimum-Power-Fitness-Gym/100046470206365/?mibextid=LQQJ4d",
        icon: FiFacebook,
      },
      {
        lable: "Instagram",
        src: "https://www.instagram.com/optimum_gym.lk",
        icon: SiInstagram,
      },
    ],
    support: [
      { lable: "Contact Us", src: "tel:94773933114", icon: ExternalLink },
      { lable: "Feedback", src: "/feedback", icon: ExternalLink },
    ],
    developer: [
      { lable: "Thilina Rathnayaka", src: "https://its-thilina.vercel.app/" },
    ],
  },
];

const Footer = () => {
  return (
    <>
      {FOOTERITEMS.map((footerItem, idx) => (
        <div className="mt-9 flex flex-col gap-2.5 overflow-hidden" key={idx}>
          <div className="grid w-full grid-cols-12 gap-10 border-t border-border pb-4 pt-9">
            <div className="col-span-3 w-fit">
              <Link href="/" className="w-fit">
                <Icons.logo className="w-full fill-black dark:fill-white sm:h-[60px] sm:w-fit" />
              </Link>
            </div>

            <div className="col-span-4 flex flex-col gap-y-2.5 sm:col-span-3 sm:gap-y-4">
              <small className="mb-2.5 font-semibold">Sections</small>
              {footerItem.sections.map((section, idx) => (
                <Link
                  href={section.src}
                  key={idx}
                  className="group flex h-fit w-fit items-center gap-1 transition-all duration-300 ease-in-out hover:font-medium hover:text-primary"
                >
                  {
                    <section.icon className="size-4 group-hover:scale-[1.03] group-active:scale-100" />
                  }
                  <small>{section.lable}</small>
                </Link>
              ))}
            </div>

            <div className="col-span-4 flex flex-col gap-y-2.5 sm:col-span-3 sm:gap-y-4">
              <small className="mb-2.5 font-semibold">Socials</small>
              {footerItem.socials.map((socials, idx) => (
                <Link
                  href={socials.src}
                  key={idx}
                  className="group flex h-fit w-fit items-center gap-1 transition-all duration-300 ease-in-out hover:font-medium hover:text-primary"
                >
                  {
                    <socials.icon className="size-4 group-hover:scale-[1.03] group-active:scale-100" />
                  }
                  <small>{socials.lable}</small>
                </Link>
              ))}
            </div>
            <div className="col-span-4 flex flex-col gap-y-2.5 max-sm:col-start-4 sm:col-span-3 sm:gap-y-4">
              <small className="mb-2.5 font-semibold">Support</small>
              {footerItem.support.map((support, idx) => (
                <Link
                  href={support.src}
                  key={idx}
                  className="group flex h-fit w-fit items-center gap-1 transition-all duration-300 ease-in-out hover:font-medium hover:text-primary"
                >
                  <small>{support.lable}</small>
                  {
                    <support.icon className="size-4 group-hover:scale-[1.03] group-active:scale-100" />
                  }
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-1 border-t border-border py-5 sm:flex-row">
            <div className="flex items-center gap-0.5 text-xs">
              <span>{new Date().getFullYear()}</span>
              <span>©</span>
              <span className="font-semibold">Optimum Gym</span>
              <span>All rights reserved.</span>
            </div>

            <div className="flex items-center gap-0.5 text-xs">
              <span>Designed and Developed by</span>
              {footerItem.developer.map((developer, idx) => (
                <Link
                  href={developer.src}
                  key={idx}
                  className="h-fit w-fit text-xs font-semibold transition-all duration-300 ease-in-out hover:text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  {developer.lable}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Footer;
