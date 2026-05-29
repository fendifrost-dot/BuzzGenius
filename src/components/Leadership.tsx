const Leadership = () => (
  <section className="bg-card">
    <div className="container mx-auto px-6 py-24 md:py-36 max-w-4xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Leadership</h2>
      <div className="w-10 h-0.5 bg-gold mb-14" />

      <div>
        <h3 className="text-lg md:text-xl font-bold mb-1">Jamal Harris</h3>
        <p className="text-gold text-xs font-light uppercase tracking-[0.2em] mb-8">
          Founder &amp; Principal Strategist
        </p>

        <div className="space-y-5 text-muted-foreground text-base md:text-lg leading-[1.8] max-w-3xl font-light">
          <p>
            Jamal Harris brings over a decade of hands-on experience advising and building growth systems across 30+ companies spanning technical, industrial, and service-based sectors.
          </p>
          <p>
            His expertise centers on structural optimization, scalable systems design, and operational growth architecture. Jamal works at the intersection of execution and strategy — helping businesses move from fragmented operations to disciplined, scalable frameworks.
          </p>

          <ul className="space-y-4 my-8">
            {[
              "Designed operational systems that improve efficiency and margin",
              "Implemented scalable infrastructure across multi-team environments",
              "Advised leadership teams on structural growth planning",
              "Streamlined processes to support expansion without operational breakdown",
            ].map((item) => (
              <li key={item} className="flex items-start gap-4">
                <span className="block w-5 h-px bg-gold flex-shrink-0 mt-3" />
                <span className="text-foreground text-sm md:text-base font-light">{item}</span>
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
