import SectionContainer from "@/components/layout/SectionContainer";

const BusinessOverview = () => (
  <SectionContainer id="overview">
    <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-brand-blue">Business Overview</p>
    <h2 className="mb-6 text-3xl font-bold md:text-4xl">Structured Growth Operations</h2>
    <div className="grid gap-8 md:grid-cols-2">
      <p className="text-muted-foreground leading-relaxed">
        Buzz Genius is a full-service growth and media infrastructure company specializing in branding,
        digital marketing, content production, AI automation, advertising systems, and business growth
        strategy.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Our services are designed to help companies increase visibility, improve operational efficiency,
        acquire customers, and scale revenue through integrated digital systems.
      </p>
    </div>
    <p className="mt-8 rounded-lg border border-border bg-card p-6 text-sm text-muted-foreground">
      Buzz Genius serves startups, small businesses, public figures, entertainment brands, automotive
      companies, community organizations, and enterprise clients nationwide.
    </p>
  </SectionContainer>
);

export default BusinessOverview;
