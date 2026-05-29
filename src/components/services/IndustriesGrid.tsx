import SectionContainer from "@/components/layout/SectionContainer";
import { industries } from "@/data/industries";

const IndustriesGrid = () => (
  <SectionContainer id="industries" className="bg-secondary/30">
    <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-brand-blue">Industries</p>
    <h2 className="mb-10 text-3xl font-bold md:text-4xl">Industries We Serve</h2>
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {industries.map((industry) => (
        <div
          key={industry}
          className="rounded-lg border border-border bg-background px-4 py-5 text-center text-sm font-medium shadow-sm transition-colors hover:border-brand-blue/40 hover:text-brand-blue"
        >
          {industry}
        </div>
      ))}
    </div>
  </SectionContainer>
);

export default IndustriesGrid;
