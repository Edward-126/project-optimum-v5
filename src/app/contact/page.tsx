import Contact from "@/components/contact/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

const page = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default page;
