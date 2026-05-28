const principles = [
  "Disciplined Implementation",
  "Risk-Conscious Strategy",
  "Scalable Systems",
  "Long-Term Enterprise Value",
];

const Philosophy = () => (
  <section id="philosophy" className="bg-background">
    <div className="container mx-auto px-6 py-24 md:py-36 max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Operating Philosophy</h2>
      <div className="w-10 h-0.5 bg-gold mb-10" />
      <p className="text-muted-foreground text-base md:text-lg leading-[1.8] max-w-3xl font-light mb-14">
        Our work is grounded in precision, accountability, and measurable execution. We prioritize structural integrity, risk-aware planning, and sustainable scalability.
      </p>
      <ul className="space-y-5">
        {principles.map((p) => (
          <li key={p} className="flex items-center gap-4">
            <span className="block w-5 h-px bg-gold flex-shrink-0" />
            <span className="text-foreground font-medium text-xs md:text-sm uppercase tracking-[0.15em]">
              {p}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Philosophy;
