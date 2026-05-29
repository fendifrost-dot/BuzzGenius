import { serviceCategories } from "@/data/services";
import SectionContainer from "@/components/layout/SectionContainer";
import ServiceCard from "./ServiceCard";

type ServicesGridProps = { onServiceCta: (serviceId: string) => void; };

const ServicesGrid = ({ onServiceCta }: ServicesGridProps) => (
  <SectionContainer id="services" className="bg-secondary/30">
    <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-brand-blue">Marketing &amp; Growth Services</p>
    <h2 className="mb-4 text-3xl font-bold md:text-4xl">Execution Services</h2>
    <p className="mb-12 max-w-2xl text-muted-foreground">
      Standardized service packages with clear deliverables, transparent pricing, and recurring options for ongoing support.
    </p>
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {serviceCategories.map((service, index) => (
        <ServiceCard key={service.id} service={service} index={index} onCta={onServiceCta} />
      ))}
    </div>
  </SectionContainer>
);

export default ServicesGrid;
