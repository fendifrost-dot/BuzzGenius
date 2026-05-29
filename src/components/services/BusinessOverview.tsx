import SectionContainer from "@/components/layout/SectionContainer";

const BusinessOverview = () => (
  <SectionContainer id="overview">
    <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-brand-blue">Business Overview</p>
    <h2 className="mb-6 text-3xl font-bold md:text-4xl">Consulting + Marketing &amp; Growth Execution</h2>
    <div className="grid gap-8 md:grid-cols-2">
      <p className="text-muted-foreground leading-relaxed">
        Buzz Genius, Inc. provides business consulting and strategic advisory to entrepreneurs,
        small businesses, and independent professionals. Advisory engagements are delivered as
        strategic sessions, advisory meetings, and short-term project consulting through the four
        standardized packages above.
      </p>
      <p className="text-muted-foreground leading-relaxed">
        Buzz Genius also operates a marketing and growth execution practice covering branding,
        websites, AI automation, social media, content production, paid media, and design.
        Execution work is typically delivered as project engagements or monthly retainers.
      </p>
    </div>
    <p className="mt-8 rounded-lg border border-border bg-card p-6 text-sm text-muted-foreground">
      Engagements are governed by separate written agreements between Buzz Genius and the client.
      Buzz Genius, Inc. maintains internal records of consulting engagements and service receipts
      for documentation and compliance purposes.
    </p>
  </SectionContainer>
);

export default BusinessOverview;
