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
      title="Buzz Genius Inc. — Consulting & Marketing Services"
      description="Buzz Genius Inc. is an Illinois professional services corporation. Consulting & Strategic Advisory packages plus marketing, AI automation, branding, web, social, and content execution services."
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
                  <h1 className="text-3xl font-bold md:text-5xl">Consulting + Growth Infrastructure</h1>
                </div>
              </div>
              <p className="text-lg font-light leading-relaxed text-chrome-light">
                Structured consulting and strategic advisory packages, plus marketing, AI automation, branding,
                web, content, and paid-media execution for entrepreneurs, small businesses, and growth-stage operators.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90" asChild>
                  <Link to="/services">Explore Services<ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
                <Button size="lg" variant="outline" className="border-brand-silver/40 text-primary-foreground hover:bg-white/10" asChild>
                  <a href="#contact">Book Consultation</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about"><Overview /></section>
        <Engagement />

        <section className="bg-secondary/40">
          <div className="container mx-auto max-w-6xl px-6 py-16 text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Two Tracks: Advisory + Execution</h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              Four standardized consulting packages ($1,000–$6,000) for structured strategy work, plus
              marketing and growth services on monthly retainer or per-project basis.
            </p>
            <Button asChild><Link to="/services">View Full Services</Link></Button>
          </div>
        </section>

        <Contact />
      </main>
    </SiteLayout>
  </>
);

export default Index;
