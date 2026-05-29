export type CaseStudy = {
  id: string;
  client: string;
  industry: string;
  metric: string;
  metricLabel: string;
  summary: string;
  quote?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    id: "automotive",
    client: "Regional Automotive Group",
    industry: "Automotive",
    metric: "+142%",
    metricLabel: "Lead volume increase",
    summary:
      "Integrated website rebuild, CRM automation, and paid media systems to improve lead capture and sales follow-up.",
    quote: "Buzz Genius built a system we could actually scale—not just a campaign.",
  },
  {
    id: "artist",
    client: "Independent Artist",
    industry: "Music & Entertainment",
    metric: "3.2M",
    metricLabel: "Streams in 90 days",
    summary:
      "DSP rollout strategy, content production, and influencer outreach delivered measurable streaming growth.",
  },
  {
    id: "restaurant",
    client: "Multi-Location Restaurant Brand",
    industry: "Hospitality",
    metric: "+68%",
    metricLabel: "Social engagement",
    summary:
      "Monthly content retainers and localized ad management improved foot traffic and online reservations.",
    quote: "Professional, structured, and consistent—exactly what we needed.",
  },
];
