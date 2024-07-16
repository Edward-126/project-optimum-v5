import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = [
  {
    question: "What are your gym's operating hours?",
    answer:
      "Our gym is open from 6:00 AM to 10:00 PM every day except Sunday. On Sundays, we are open from 6:00 AM to 12:00 PM. Please note our extended hours on Sundays for your convenience. For any updates or changes to our operating hours, please contact us directly.",
  },
  {
    question: "Do you offer personal training services?",
    answer:
      "Yes, we offer personalized training sessions with certified trainers. Whether you're a beginner or an experienced athlete, our trainers can tailor a program to suit your needs and goals.",
  },
  {
    question: "Can I freeze or cancel my membership if needed?",
    answer:
      "Yes, we offer options to freeze or cancel memberships under certain circumstances. Please speak with a staff member for assistance with membership adjustments.",
  },
  {
    question: "Do you have any age restrictions for membership?",
    answer:
      "There are no age restrictions for membership. Members of all ages can participate.",
  },
  {
    question: "Do you offer nutritional guidance or dietary counseling?",
    answer:
      "Yes, we have certified nutritionists available to provide guidance on healthy eating habits and dietary plans to complement your fitness goals.",
  },
  {
    question: "Can I try out the gym before committing to a membership?",
    answer:
      "Absolutely! We offer single session access for a nominal fee. Come in and experience our facilities firsthand to see if it's the right fit for you.",
  },
  {
    question: "What amenities do you provide?",
    answer:
      "Our gym offers a range of amenities including cardio and strength training equipment, group fitness sessions and locker rooms with showers.",
  },
];

const Faq = () => {
  return (
    <>
      <div className="w-full max-sm:pt-28 sm:py-8" id="pricing">
        <div className="flex w-full flex-col gap-5">
          <div className="text-center">
            <h2>
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p>Explore common inquiries about our services and policies.</p>
          </div>
          <Accordion type="single" collapsible>
            {FAQ.map((faqItem, idx) => (
              <AccordionItem value={faqItem.question} key={idx}>
                <AccordionTrigger>
                  <h4>{faqItem.question}</h4>
                </AccordionTrigger>
                <AccordionContent>
                  <p>{faqItem.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Faq;
