import logo from "@/assets/logo.png";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-matte-dark text-primary-foreground">
      <div className="container mx-auto px-6 py-24 md:py-36 max-w-4xl">
        <div className="flex items-center gap-6 mb-12">
          <img src={logo} alt="Buzz Genius Inc." className="w-16 h-16 md:w-20 md:h-20 object-contain" />
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-primary-foreground mb-3 md:mb-4">
              Buzz Genius Inc.
            </h1>
            <p className="text-gold-light text-xs md:text-sm font-light uppercase tracking-[0.18em] leading-tight">
              Business Consulting &amp; Strategic Advisory
            </p>
          </div>
        </div>
        <div className="w-12 h-px bg-gold mb-12" />
        <p className="text-chrome-light text-base md:text-lg leading-relaxed max-w-2xl font-light">
          Buzz Genius Inc. provides business consulting and strategic advisory to entrepreneurs,
          small businesses, and independent professionals. Practical guidance on business
          development, operational efficiency, marketing strategy, and revenue growth.
        </p>
        <button onClick={scrollToContact} className="mt-12 inline-block border border-gold px-8 py-3 text-xs font-medium uppercase tracking-[0.2em] text-gold hover:bg-gold hover:text-primary transition-colors duration-300">
          Contact Our Team
        </button>
      </div>
    </section>
  );
};

export default Hero;
