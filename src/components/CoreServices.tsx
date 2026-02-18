const services = [
  "Operational Optimization",
  "Technical & Infrastructure Advisory",
  "Project Execution Oversight",
  "Performance & Efficiency Assessment",
  "Strategic Expansion Planning",
  "Surveying & Land Development",
];

const CoreServices = () => (
  <section className="bg-card">
    <div className="container mx-auto px-6 py-20 md:py-28 max-w-4xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Core Services</h2>
      <div className="w-10 h-0.5 bg-accent mb-10" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-6">
        {services.map((service) => (
          <div key={service} className="flex items-start gap-3">
            <span className="mt-2 block w-1.5 h-1.5 rounded-full bg-chrome flex-shrink-0" />
            <span className="text-foreground text-base md:text-lg font-medium">
              {service}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-muted-foreground italic">
        Surveying &amp; Land Development is operated as a specialized division.
      </p>
    </div>
  </section>
);

export default CoreServices;
