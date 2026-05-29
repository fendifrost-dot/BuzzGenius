import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const trustIndicators = [
  "Illinois Corporation",
  "Confidential Advisory Engagements",
  "Structured Consulting Packages",
  "Written Engagement Summaries",
];

const ServicesHero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-matte-dark text-primary-foreground">
      <div className="container mx-auto max-w-6xl px-6 py-24 md:py-32">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="max-w-3xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-brand-blue">Consulting & Strategic Advisory</p>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Advisory Services for Entrepreneurs &amp; Small Businesses
          </h1>
          <p className="mb-10 max-w-2xl text-base font-light leading-relaxed text-chrome-light md:text-lg">
            Buzz Genius Inc. provides structured business consulting and strategic advisory to
            entrepreneurs, small businesses, and independent professionals. Practical guidance,
            short-term engagements, transparent pricing.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="bg-brand-blue text-white hover:bg-brand-blue/90" onClick={() => scrollTo("contact")}>
              Request a Strategy Session
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="border-brand-silver/40 bg-transparent text-primary-foreground hover:bg-white/10" onClick={() => scrollTo("pricing")}>
              View Engagement Packages
            </Button>
          </div>
        </motion.div>

        <motion.ul initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustIndicators.map((item) => (
            <li key={item} className="text-xs uppercase tracking-[0.15em] text-chrome-light border-l border-brand-blue/40 pl-3">{item}</li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default ServicesHero;
