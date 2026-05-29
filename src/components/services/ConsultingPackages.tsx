import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionContainer from "@/components/layout/SectionContainer";
import StripeCheckoutButton from "@/components/stripe/StripeCheckoutButton";
import RequestInvoiceButton from "@/components/stripe/RequestInvoiceButton";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { consultingPackages } from "@/data/pricing";
import { cn } from "@/lib/utils";

type Props = { onRequestProposal: () => void };

const ConsultingPackages = ({ onRequestProposal }: Props) => (
  <SectionContainer id="consulting-advisory">
    <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-brand-blue">Consulting &amp; Advisory</p>
    <h2 className="mb-4 text-3xl font-bold md:text-4xl">Standardized Advisory Packages</h2>
    <p className="mb-10 max-w-2xl text-muted-foreground">
      Four standardized engagement packages from the Buzz Genius Pricing Structure. Most engagements begin with
      a focused strategy session and proceed only when scope is clearly defined. Payment is typically made
      before work begins.
    </p>
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {consultingPackages.map((plan) => (
        <Card key={plan.id} className={cn("flex flex-col", plan.highlighted && "border-brand-blue shadow-md ring-1 ring-brand-blue/30")}>
          <CardHeader>
            {plan.highlighted && (<span className="mb-2 inline-block w-fit rounded-full bg-brand-blue/10 px-2 py-0.5 text-xs font-medium text-brand-blue">Most Common</span>)}
            <CardTitle className="text-lg">{plan.name}</CardTitle>
            <p className="text-2xl font-bold">{plan.price}</p>
            <p className="text-sm text-muted-foreground">{plan.description}</p>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-2">
              {plan.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-muted-foreground">
                  <Check className="h-4 w-4 shrink-0 text-brand-blue" />{f}
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="flex flex-col gap-2">
            {plan.checkoutEnabled !== false ? (
              <>
                <StripeCheckoutButton planId={plan.id} label="Reserve Engagement" variant={plan.highlighted ? "default" : "outline"} onFallback={onRequestProposal} />
                <RequestInvoiceButton planId={plan.id} planName={plan.name} />
              </>
            ) : (
              <Button type="button" variant="outline" className="w-full" onClick={onRequestProposal}>Discuss Engagement</Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  </SectionContainer>
);

export default ConsultingPackages;
