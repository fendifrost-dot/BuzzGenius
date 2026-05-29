export type CaseStudy = {
  id: string;
  client: string;
  industry: string;
  metric: string;
  metricLabel: string;
  summary: string;
  quote?: string;
};

// Real client engagements are confidential. References and engagement
// summaries are available on request after a preliminary conversation.
export const caseStudies: CaseStudy[] = [];
