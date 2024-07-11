import { LuMail } from "react-icons/lu";
import { FiPhone } from "react-icons/fi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { FiFacebook } from "react-icons/fi";
import { SiInstagram } from "react-icons/si";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

const CONTACTINFO = [
  {
    contact: [
      {
        display: "(94) 773-933-114",
        linkSrc: "tel:94773933114",
        icon: FiPhone,
      },
      {
        display: "optimumgym126@gmail.com",
        linkSrc: "mailto:optimumgym126@gmail.com",
        icon: LuMail,
      },
    ],
    social: [
      { display: "WhatsApp", linkSrc: "94773933114", icon: AiOutlineWhatsApp },
      {
        display: "Facebook",
        linkSrc:
          "https://www.facebook.com/people/Optimum-Power-Fitness-Gym/100046470206365/?mibextid=LQQJ4d",
        icon: FiFacebook,
      },
      {
        display: "Instagram",
        linkSrc: "https://www.instagram.com/",
        icon: SiInstagram,
      },
    ],
  },
];

const page = () => {
  return (
    <>
      <div className="mt-[127px]">
        <div className="my-8 flex flex-col gap-8">
          <div className="space-y-2">
            <div className="">
              <h2>
                Contact <span className="text-primary">Us</span>
              </h2>
              <p>Explore common inquiries about our services and policies.</p>
            </div>

            <div className="grid gap-10 sm:grid-cols-12">
              <div className="space-y-4 sm:col-span-8">
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="space-y-1">
                    <Label>Name</Label>
                    <Input />
                  </div>
                  <div className="space-y-1">
                    <Label>Telephone/WhatsApp</Label>
                    <Input />
                  </div>
                </div>
                <div className="space-y-1">
                  <Label>Message</Label>
                  <Textarea className="min-h-[140px]" />
                </div>
              </div>
              {CONTACTINFO.map((contactItem, idx) => (
                <div className="space-y-7 sm:col-span-4" key={idx}>
                  <div className="flex flex-col gap-1">
                    <h4>Contact</h4>
                    {contactItem.contact.map((contact, idx) => (
                      <div
                        className="group flex w-fit items-center gap-2"
                        key={idx}
                      >
                        {
                          <contact.icon className="size-[19px] transition-all duration-300 ease-in-out group-hover:scale-[1.03] group-hover:text-primary" />
                        }
                        <Link
                          className="transition-all duration-300 ease-in-out group-hover:font-medium group-hover:text-primary"
                          href={contact.linkSrc}
                          key={idx}
                        >
                          {contact.display}
                        </Link>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-1" key={idx}>
                    <h4>Socials</h4>
                    {contactItem.social.map((social, idx) => (
                      <div
                        className="group flex w-fit items-center gap-2"
                        key={idx}
                      >
                        {
                          <social.icon className="size-[19px] transition-all duration-300 ease-in-out group-hover:scale-[1.03] group-hover:text-primary" />
                        }
                        <Link
                          className="transition-all duration-300 ease-in-out group-hover:font-medium group-hover:text-primary"
                          href={social.linkSrc}
                          key={idx}
                        >
                          {social.display}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="my-4 flex flex-col gap-6">
            <div className="">
              <h2>
                The <span className="text-primary">Location</span>
              </h2>
              <p>Here's how to find your way to us.</p>
            </div>
            <div className="overflow-hidden rounded-lg border border-border bg-neutral-600/10">
              <iframe
                className="aspect-video h-[300px] w-full"
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.732666690411!2d79.91003937427182!3d6.9225271930771415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae259ddc63081f7%3A0x253b6738ce307369!2sOptimum%20Power%20%26%20Fitness%20Gym!5e0!3m2!1sen!2slk!4v1700899473448!5m2!1sen!2slk"
                // loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
