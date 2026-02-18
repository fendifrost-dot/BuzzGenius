const principles = [
  "Disciplined Implementation",
  "Risk-Conscious Strategy",
  "Scalable Systems",
  "Long-Term Enterprise Value",
];

const Philosophy = () => (
  <section className="bg-background">
    <div className="container mx-auto px-6 py-20 md:py-28 max-w-4xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Operating Philosophy</h2>
      <div className="w-10 h-0.5 bg-gold mb-8" />
      <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl mb-10">
        Our work is grounded in precision, accountability, and measurable execution. We prioritize structural integrity, risk-aware planning, and sustainable scalability.
      </p>
      <ul className="space-y-4">
        {principles.map((p) => (
          <li key={p} className="flex items-center gap-3">
            <span className="block w-4 h-px bg-gold flex-shrink-0" />
            <span className="text-foreground font-medium text-sm md:text-base uppercase tracking-wide">
              {p}
            </span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Philosophy;
