const Leadership = () => (
  <section className="bg-card">
    <div className="container mx-auto px-6 py-20 md:py-28 max-w-4xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Leadership</h2>
      <div className="w-10 h-0.5 bg-gold mb-10" />

      <div>
        <h3 className="text-lg md:text-xl font-bold mb-1">Jamal Harris</h3>
        <p className="text-gold text-sm font-medium uppercase tracking-widest mb-6">
          Founder &amp; Principal Strategist
        </p>

        <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed max-w-3xl">
          <p>
            Jamal Harris brings over a decade of hands-on experience advising and building growth systems across 30+ companies spanning technical, industrial, and service-based sectors.
          </p>
          <p>
            His expertise centers on structural optimization, scalable systems design, and operational growth architecture. Jamal works at the intersection of execution and strategy — helping businesses move from fragmented operations to disciplined, scalable frameworks.
          </p>

          <ul className="space-y-3 my-6">
            {[
              "Designed operational systems that improve efficiency and margin",
              "Implemented scalable infrastructure across multi-team environments",
              "Advised leadership teams on structural growth planning",
              "Streamlined processes to support expansion without operational breakdown",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="block w-4 h-px bg-gold flex-shrink-0 mt-3" />
                <span className="text-foreground text-sm md:text-base">{item}</span>
              </li>
            ))}
          </ul>

          <p>
            His approach is rooted in practical execution — not theory — combining technical insight with real-world implementation across diverse industries.
          </p>
          <p>
            At Buzz Genius, Jamal leads strategic engagement, system architecture, and enterprise-level growth initiatives.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Leadership;
