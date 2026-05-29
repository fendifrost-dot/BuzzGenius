import { motion } from "framer-motion";
import SectionContainer from "@/components/layout/SectionContainer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { caseStudies } from "@/data/caseStudies";

const CaseStudyCards = () => (
  <SectionContainer id="results">
    <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-brand-blue">Results</p>
    <h2 className="mb-4 text-3xl font-bold md:text-4xl">Case Studies & Outcomes</h2>
    <p className="mb-12 max-w-2xl text-muted-foreground">
      Measurable growth across marketing, media, and automation engagements.
    </p>
    <div className="grid gap-6 md:grid-cols-3">
      {caseStudies.map((study, index) => (
        <motion.div
          key={study.id}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
        >
          <Card className="h-full">
            <CardHeader>
              <p className="text-xs uppercase tracking-wider text-brand-blue">{study.industry}</p>
              <p className="text-3xl font-bold text-brand-violet">{study.metric}</p>
              <p className="text-sm text-muted-foreground">{study.metricLabel}</p>
            </CardHeader>
            <CardContent>
              <p className="mb-2 font-semibold">{study.client}</p>
              <p className="mb-4 text-sm text-muted-foreground">{study.summary}</p>
              {study.quote && (
                <blockquote className="border-l-2 border-brand-blue pl-3 text-sm italic text-muted-foreground">
                  &ldquo;{study.quote}&rdquo;
                </blockquote>
              )}
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </SectionContainer>
);

export default CaseStudyCards;
