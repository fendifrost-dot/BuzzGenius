import SectionContainer from "@/components/layout/SectionContainer";
import { industries } from "@/data/industries";

const IndustriesGrid = () => (
  <SectionContainer id="industries" className="bg-secondary/30">
    <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-brand-blue">Who We Serve</p>
    <h2 className="mb-4 text-3xl font-bold md:text-4xl">Client Profile</h2>
    <p className="mb-10 max-w-2xl text-muted-foreground">
      Buzz Genius works with owners and operators who want structured advisory without the
      overhead of a large consulting firm.
    </p>
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
      {industries.map((c) => (
        <div key={c} className="rounded-lg border border-border bg-background px-4 py-5 text-center text-sm font-medium shadow-sm transition-colors hover:border-brand-blue/40 hover:text-brand-blue">
          {c}
        </div>
      ))}
    </div>
  </SectionContainer>
);

export default IndustriesGrid;
