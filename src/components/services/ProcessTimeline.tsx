import SectionContainer from "@/components/layout/SectionContainer";

const steps = [
  {
    step: "01",
    title: "Discovery",
    description: "Business analysis and strategy consultation.",
  },
  {
    step: "02",
    title: "Planning",
    description: "Custom roadmap, timelines, and deliverables.",
  },
  {
    step: "03",
    title: "Execution",
    description: "Implementation, production, and optimization.",
  },
  {
    step: "04",
    title: "Growth",
    description: "Scaling systems, reporting, and ongoing support.",
  },
];

const ProcessTimeline = () => (
  <SectionContainer id="process" dark>
    <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-brand-blue">Process</p>
    <h2 className="mb-12 text-3xl font-bold text-primary-foreground md:text-4xl">How We Work</h2>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((item) => (
        <div key={item.step} className="relative border-l border-brand-blue/40 pl-6">
          <span className="absolute -left-3 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-brand-blue text-xs font-bold text-white">
            {item.step.slice(1)}
          </span>
          <h3 className="mb-2 text-lg font-semibold text-primary-foreground">{item.title}</h3>
          <p className="text-sm text-chrome-light">{item.description}</p>
        </div>
      ))}
    </div>
  </SectionContainer>
);

export default ProcessTimeline;
