import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type FinalCTAProps = { onBookConsultation: () => void; onStartProject: () => void; onRequestProposal: () => void; };

const FinalCTA = ({ onBookConsultation, onStartProject, onRequestProposal }: FinalCTAProps) => (
  <section className="bg-matte-dark text-primary-foreground">
    <div className="container mx-auto max-w-6xl px-6 py-24 md:py-32 text-center">
      <h2 className="mb-4 text-3xl font-bold md:text-4xl">Build a Smarter Growth System</h2>
      <p className="mx-auto mb-10 max-w-2xl text-chrome-light">
        Start with a structured strategy session, scope an execution project, or request a custom proposal.
      </p>
      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90" onClick={onBookConsultation}>Reserve a Strategy Session<ArrowRight className="ml-2 h-4 w-4" /></Button>
        <Button size="lg" variant="outline" className="border-brand-silver/40 text-primary-foreground hover:bg-white/10" onClick={onStartProject}>Start a Project</Button>
        <Button size="lg" variant="ghost" className="text-chrome-light hover:text-primary-foreground" onClick={onRequestProposal}>Request Proposal</Button>
      </div>
    </div>
  </section>
);

export default FinalCTA;
