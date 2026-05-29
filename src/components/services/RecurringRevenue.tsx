import { Repeat, BarChart3, Headphones, Shield } from "lucide-react";
import SectionContainer from "@/components/layout/SectionContainer";

const highlights = [
  { icon: Repeat, label: "Monthly retainers from $750–$10,000+" },
  { icon: BarChart3, label: "Flexible billing structures" },
  { icon: Headphones, label: "Dedicated account management" },
  { icon: Shield, label: "Performance reporting & priority support" },
];

const RecurringRevenue = () => (
  <SectionContainer id="partnerships">
    <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-brand-blue">
      Recurring Revenue
    </p>
    <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ongoing Growth Partnerships</h2>
    <p className="mb-6 max-w-3xl text-muted-foreground leading-relaxed">
      Many Buzz Genius clients operate on recurring monthly service agreements for continued marketing,
      automation, creative production, and operational support.
    </p>
    <p className="mb-10 max-w-3xl text-muted-foreground leading-relaxed">
      Monthly retainers allow businesses to maintain momentum while providing scalable long-term support
      systems.
    </p>
    <div className="grid gap-4 sm:grid-cols-2">
      {highlights.map(({ icon: Icon, label }) => (
        <div
          key={label}
          className="flex items-start gap-4 rounded-lg border border-border bg-card p-5 shadow-sm"
        >
          <Icon className="mt-0.5 h-5 w-5 shrink-0 text-brand-blue" />
          <p className="text-sm font-medium">{label}</p>
        </div>
      ))}
    </div>
  </SectionContainer>
);

export default RecurringRevenue;
