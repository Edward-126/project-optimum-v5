import Feedback from "@/components/feedback/Feedback";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feedback",
};

const page = () => {
  return (
    <>
      <Feedback />
    </>
  );
};

export default page;
