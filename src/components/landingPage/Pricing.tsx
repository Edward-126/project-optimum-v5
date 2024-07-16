import { FaCheck } from "react-icons/fa6";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "../ui/button";
import Link from "next/link";

const PRICING = [
  {
    title: "Session Pass",
    description: "Access to a single session for a quick workout.",
    male: 500,
    female: 500,
    duration: "Per Day",
    tags: [
      "Pay-as-you-go",
      "Perfect for occasional gym users",
      "No long-term commitment",
    ],
    isSpecial: 1,
  },
  {
    title: "Monthly Membership",
    description: "Pay on a monthly basis for access to gym facilities.",
    male: 5000,
    female: 4000,
    duration: "Per Month",
    tags: [
      "Flexible month-to-month access",
      "Easy to cancel or adjust commitment",
    ],
    isSpecial: 1,
  },
  {
    title: "Long-term Membership",
    description: "Contact us for the quote and a custom onboarding process.",
    male: "",
    female: "",
    duration: "",
    tags: ["", "", ""],
    isSpecial: 0,
  },
];

const Pricing = () => {
  return (
    <>
      <div className="w-full max-sm:pt-28 sm:py-8" id="pricing">
        <div className="flex w-full flex-col gap-5">
          <div className="text-center">
            <h2>
              Get <span className="text-primary">Unlimited</span> Access
            </h2>
            <p>
              Explore our flexible, affordable membership plans. Optimum Gym
              offers options to fit every fitness goal. Start your journey
              towards a healthier, stronger you today.
            </p>
          </div>
          <Tabs defaultValue="male" className="w-full">
            <TabsList className="flex justify-center bg-background">
              <TabsTrigger value="male">Male</TabsTrigger>
              <TabsTrigger value="female">Female</TabsTrigger>
            </TabsList>
            <TabsContent value="male" className="pt-2">
              <div className="grid gap-5 sm:grid-cols-3">
                {PRICING.map((priceInfo, idx) => (
                  <div className="" key={idx}>
                    {priceInfo.isSpecial ? (
                      <div className="flex flex-col gap-2 rounded-lg border border-border p-4">
                        <h4>{priceInfo.title}</h4>
                        <div className="flex items-baseline">
                          <h4>Rs.</h4>
                          <h3>{priceInfo.male}</h3>
                          <p className="ml-1 opacity-70">
                            {priceInfo.duration}
                          </p>
                        </div>
                        <small className="leading-5">
                          {priceInfo.description}
                        </small>
                        <div className="mt-2">
                          {priceInfo.tags.map((tag, idx) => (
                            <div className="flex items-center gap-2" key={idx}>
                              <FaCheck className="text-primary" /> {tag}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="flex h-full flex-col justify-center gap-2 rounded-lg border border-border p-4">
                        <h4>{priceInfo.title}</h4>
                        <p className="leading-6">{priceInfo.description}</p>
                        <div className="mt-1.5">
                          <Button className="w-fit" asChild>
                            <Link href="tel:94773933114">Contact Us</Link>
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="female" className="pt-2">
              <div className="grid gap-5 sm:grid-cols-3">
                {PRICING.map((priceInfo, idx) => (
                  <div className="" key={idx}>
                    {priceInfo.isSpecial ? (
                      <div className="flex flex-col gap-2 rounded-lg border border-border p-4">
                        <h4>{priceInfo.title}</h4>
                        <div className="flex items-baseline">
                          <h4>Rs.</h4>
                          <h3>{priceInfo.female}</h3>
                          <p className="ml-1 opacity-70">
                            {priceInfo.duration}
                          </p>
                        </div>
                        <small className="leading-5">
                          {priceInfo.description}
                        </small>
                        <div className="mt-2">
                          {priceInfo.tags.map((tag, idx) => (
                            <div className="flex items-center gap-2" key={idx}>
                              <FaCheck className="text-primary" /> {tag}
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="flex h-full flex-col justify-center gap-2 rounded-lg border border-border p-4">
                        <h4>{priceInfo.title}</h4>
                        <p className="leading-6">{priceInfo.description}</p>
                        <div className="mt-1.5">
                          <Button className="w-fit" asChild>
                            <Link href="tel:94773933114">Contact Us</Link>
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Pricing;
