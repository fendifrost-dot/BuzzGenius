const services = [
  "Operational Optimization",
  "Technical & Infrastructure Advisory",
  "Project Execution Oversight",
  "Performance & Efficiency Assessment",
  "Strategic Expansion Planning",
  "Surveying & Land Development",
];

const CoreServices = () => (
  <section id="services" className="bg-matte-dark text-primary-foreground">
    <div className="container mx-auto px-6 py-24 md:py-36 max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-10">Core Services</h2>
      <div className="w-10 h-0.5 bg-gold mb-14" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-0">
        {services.map((service) => (
          <div
            key={service}
            className="group flex items-center gap-4 py-5 border-b border-chrome/10 transition-colors duration-300 hover:border-gold/40"
          >
            <span className="block w-5 h-px bg-gold/60 group-hover:w-8 group-hover:bg-gold transition-all duration-300 flex-shrink-0" />
            <span className="text-chrome-light text-sm md:text-base font-light uppercase tracking-wide group-hover:text-primary-foreground transition-colors duration-300">
              {service}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-10 text-xs text-chrome/60 font-light italic tracking-wide">
        Surveying &amp; Land Development is operated as a specialized division.
      </p>
    </div>
  </section>
);

export default CoreServices;
