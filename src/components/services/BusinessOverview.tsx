import SectionContainer from "@/components/layout/SectionContainer";

const BusinessOverview = () => (
  <SectionContainer id="overview">
    <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-brand-blue">Business Overview</p>
    <h2 className="mb-6 text-3xl font-bold md:text-4xl">Business Consulting &amp; Strategic Advisory</h2>
    <div className="grid gap-8 md:grid-cols-2">
      <p className="text-muted-foreground leading-relaxed">
        Buzz Genius, Inc. provides consulting services to entrepreneurs, small businesses, and
        independent professionals seeking guidance on business development, operational efficiency,
        marketing strategy, and revenue growth.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        The company works with a wide range of early-stage and growing businesses that require
        practical advisory services but may not have the resources to retain large consulting firms.
        Services are typically provided as strategic sessions, advisory meetings, and short-term
        project consulting.
      </p>
    </div>
    <p className="mt-8 rounded-lg border border-border bg-card p-6 text-sm text-muted-foreground">
      Buzz Genius, Inc. maintains internal records of consulting engagements and service receipts
      for documentation and compliance purposes. Engagements are governed by separate written
      agreements between Buzz Genius and the client.
    </p>
  </SectionContainer>
);

export default BusinessOverview;
