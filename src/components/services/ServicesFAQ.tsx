import SectionContainer from "@/components/layout/SectionContainer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/data/faq";

const ServicesFAQ = () => (
  <SectionContainer id="faq" className="bg-secondary/30">
    <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-brand-blue">FAQ</p>
    <h2 className="mb-10 text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
    <Accordion type="single" collapsible className="max-w-3xl">
      {faqItems.map((item, i) => (
        <AccordionItem key={item.question} value={`item-${i}`}>
          <AccordionTrigger className="text-left font-medium">{item.question}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground">{item.answer}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  </SectionContainer>
);

export default ServicesFAQ;
