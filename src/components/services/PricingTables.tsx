import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionContainer from "@/components/layout/SectionContainer";
import StripeCheckoutButton from "@/components/stripe/StripeCheckoutButton";
import RequestInvoiceButton from "@/components/stripe/RequestInvoiceButton";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projectPlans, retainerPlans } from "@/data/pricing";
import { cn } from "@/lib/utils";

type Props = { onRequestProposal: () => void };

const PlanGrid = ({ plans, onRequestProposal }: { plans: typeof retainerPlans; onRequestProposal: () => void }) => (
  <div className="grid gap-6 md:grid-cols-3">
    {plans.map((plan) => (
      <Card key={plan.id} className={cn("flex flex-col bg-background", plan.highlighted && "border-brand-blue shadow-md ring-1 ring-brand-blue/30")}>
        <CardHeader>
          {plan.highlighted && (<span className="mb-2 inline-block w-fit rounded-full bg-brand-blue/10 px-2 py-0.5 text-xs font-medium text-brand-blue">Most Popular</span>)}
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
              <StripeCheckoutButton planId={plan.id} label={plan.type === "retainer" ? "Start Subscription" : "Pay with Stripe"} variant={plan.highlighted ? "default" : "outline"} onFallback={onRequestProposal} />
              {plan.type === "project" && (<RequestInvoiceButton planId={plan.id} planName={plan.name} />)}
            </>
          ) : (
            <Button type="button" variant="outline" className="w-full" onClick={onRequestProposal}>Contact Sales</Button>
          )}
        </CardFooter>
      </Card>
    ))}
  </div>
);

const PricingTables = ({ onRequestProposal }: Props) => (
  <SectionContainer id="pricing" dark>
    <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-brand-blue">Pricing</p>
    <h2 className="mb-4 text-3xl font-bold text-primary-foreground md:text-4xl">Marketing &amp; Growth Pricing</h2>
    <p className="mb-10 max-w-2xl text-chrome-light">
      Monthly retainers for ongoing support or one-time project packages. Enterprise clients receive custom proposals with dedicated account management.
    </p>
    <Tabs defaultValue="retainers" className="w-full">
      <TabsList className="mb-8 bg-white/10">
        <TabsTrigger value="retainers" className="data-[state=active]:bg-brand-blue data-[state=active]:text-white">Monthly Retainers</TabsTrigger>
        <TabsTrigger value="projects" className="data-[state=active]:bg-brand-blue data-[state=active]:text-white">One-Time Projects</TabsTrigger>
      </TabsList>
      <TabsContent value="retainers"><PlanGrid plans={retainerPlans} onRequestProposal={onRequestProposal} /></TabsContent>
      <TabsContent value="projects"><PlanGrid plans={projectPlans} onRequestProposal={onRequestProposal} /></TabsContent>
    </Tabs>
    <p className="mt-8 text-center text-xs text-chrome">Payments processed securely via Stripe. Subscriptions, invoicing, and ACH supported.</p>
  </SectionContainer>
);

export default PricingTables;
