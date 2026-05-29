import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Seo from "@/components/Seo";
import Contact from "@/components/Contact";
import Overview from "@/components/Overview";
import Engagement from "@/components/Engagement";
import SiteLayout from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Index = () => (
  <>
    <Seo
      title="Buzz Genius Inc. — Business Consulting & Strategic Advisory"
      description="Buzz Genius Inc. is an Illinois professional services corporation providing business consulting and strategic advisory to entrepreneurs, small businesses, and independent professionals."
    />
    <SiteLayout showStickyCta={false}>
      <main>
        <section className="bg-matte-dark text-primary-foreground">
          <div className="container mx-auto max-w-6xl px-6 py-24 md:py-32">
            <div className="flex max-w-3xl flex-col gap-8">
              <div className="flex items-center gap-4">
                <img src={logo} alt="Buzz Genius Inc." className="h-14 w-14 object-contain" />
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-brand-blue">Buzz Genius Inc.</p>
                  <h1 className="text-3xl font-bold md:text-5xl">Business Consulting &amp; Strategic Advisory</h1>
                </div>
              </div>
              <p className="text-lg font-light leading-relaxed text-chrome-light">
                Practical guidance on business development, operational efficiency, marketing
                strategy, and revenue growth for entrepreneurs, small businesses, and independent
                professionals.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90" asChild>
                  <Link to="/services">
                    View Engagement Packages
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-brand-silver/40 text-primary-foreground hover:bg-white/10" asChild>
                  <a href="#contact">Reserve a Strategy Session</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about">
          <Overview />
        </section>

        <Engagement />

        <section className="bg-secondary/40">
          <div className="container mx-auto max-w-6xl px-6 py-16 text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Four Standardized Engagement Packages</h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              Initial Strategy Session ($1,000), Growth &amp; Operations ($3,000), Business
              Development Strategy ($5,000), or Advanced Advisory &amp; Implementation ($6,000).
              Pricing may vary based on the scope of the engagement.
            </p>
            <Button asChild>
              <Link to="/services">View Engagement Details</Link>
            </Button>
          </div>
        </section>

        <Contact />
      </main>
    </SiteLayout>
  </>
);

export default Index;
