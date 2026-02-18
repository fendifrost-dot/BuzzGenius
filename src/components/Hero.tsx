const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-24 md:py-36 max-w-4xl">
        <div className="border-l-2 border-accent pl-6 md:pl-8">
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-primary-foreground mb-2">
            Buzz Genius Inc.
          </h1>
          <p className="text-chrome-light text-sm md:text-base font-medium uppercase tracking-widest mb-8">
            Technical Strategy &amp; Operational Development
          </p>
        </div>
        <p className="text-chrome-light text-base md:text-lg leading-relaxed max-w-2xl mt-10">
          Buzz Genius Inc. is a multidisciplinary technical consulting firm focused on strengthening enterprise infrastructure, optimizing operational performance, and increasing long-term business value.
        </p>
        <button
          onClick={scrollToContact}
          className="mt-10 inline-block border border-chrome px-8 py-3 text-sm font-semibold uppercase tracking-widest text-primary-foreground hover:bg-primary-foreground hover:text-primary transition-colors duration-200"
        >
          Contact Our Team
        </button>
      </div>
    </section>
  );
};

export default Hero;
