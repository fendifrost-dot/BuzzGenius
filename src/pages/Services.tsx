import { useCallback } from "react";
import Seo from "@/components/Seo";
import Contact from "@/components/Contact";
import SiteLayout from "@/components/layout/SiteLayout";
import BusinessOverview from "@/components/services/BusinessOverview";
import CaseStudyCards from "@/components/services/CaseStudyCards";
import FinalCTA from "@/components/services/FinalCTA";
import IndustriesGrid from "@/components/services/IndustriesGrid";
import PricingTables from "@/components/services/PricingTables";
import ProcessTimeline from "@/components/services/ProcessTimeline";
import RecurringRevenue from "@/components/services/RecurringRevenue";
import ServicesFAQ from "@/components/services/ServicesFAQ";
import ServicesGrid from "@/components/services/ServicesGrid";
import ServicesHero from "@/components/services/ServicesHero";
import StructuredData from "@/components/services/StructuredData";

const Services = () => {
  const scrollToContact = useCallback((prefill?: string) => {
    const contact = document.getElementById("contact");
    if (contact) {
      contact.scrollIntoView({ behavior: "smooth" });
      if (prefill) {
        const message = document.querySelector<HTMLTextAreaElement>('textarea[name="message"]');
        if (message && !message.value) {
          message.value = prefill;
        }
      }
    }
  }, []);

  const handleServiceCta = (serviceId: string) => {
    scrollToContact(`I'm interested in learning more about your ${serviceId} services.`);
  };

  return (
    <>
      <Seo
        title="Buzz Genius Inc. — Business Consulting & Strategic Advisory"
        description="Buzz Genius Inc. is an Illinois corporation providing business consulting and strategic advisory to entrepreneurs and small businesses. Four standardized engagement packages from $1,000 to $6,000."
      />
      <StructuredData />
      <SiteLayout>
        <main>
          <ServicesHero />
          <BusinessOverview />
          <ServicesGrid onServiceCta={handleServiceCta} />
          <RecurringRevenue />
          <PricingTables
            onRequestProposal={() => scrollToContact("I'd like to request a custom proposal.")}
          />
          <IndustriesGrid />
          <ProcessTimeline />
          <CaseStudyCards />
          <ServicesFAQ />
          <FinalCTA
            onBookConsultation={() => scrollToContact("I'd like to schedule a strategy call.")}
            onStartProject={() => scrollToContact("I'd like to start a new project.")}
            onRequestProposal={() => scrollToContact("I'd like to request a proposal.")}
          />
          <Contact />
        </main>
      </SiteLayout>
    </>
  );
};

export default Services;
