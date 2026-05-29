import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { ServiceCategory } from "@/data/services";

type ServiceCardProps = { service: ServiceCategory; index: number; onCta: (serviceId: string) => void; };

const ServiceCard = ({ service, index, onCta }: ServiceCardProps) => {
  const listItems = service.deliverables.length > 0 ? service.deliverables : service.services ?? [];
  return (
    <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: index * 0.05, duration: 0.4 }}>
      <Card className="flex h-full flex-col border-border/80 shadow-sm transition-shadow hover:shadow-md">
        <CardHeader>
          <p className="text-xs font-medium uppercase tracking-wider text-brand-blue">Starting at</p>
          <p className="text-2xl font-bold">{service.startingPrice}</p>
          <CardTitle className="mt-2 text-xl">{service.name}</CardTitle>
          <p className="text-sm text-muted-foreground">{service.description}</p>
        </CardHeader>
        <CardContent className="flex-1 space-y-4">
          {service.pricingTiers && (
            <div className="space-y-2 rounded-md bg-muted/50 p-3">
              {service.pricingTiers.map((tier) => (
                <div key={tier.label} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{tier.label}</span>
                  <span className="font-medium">{tier.price}</span>
                </div>
              ))}
            </div>
          )}
          {service.packages && (
            <div className="space-y-2 rounded-md bg-muted/50 p-3">
              {service.packages.map((pkg) => (
                <div key={pkg.label} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{pkg.label}</span>
                  <span className="font-medium">{pkg.price}</span>
                </div>
              ))}
            </div>
          )}
          {service.platforms && (
            <p className="text-xs text-muted-foreground">Platforms: {service.platforms.join(" · ")}</p>
          )}
          <ul className="space-y-2">
            {listItems.slice(0, 8).map((item) => (
              <li key={item} className="flex gap-2 text-sm text-muted-foreground">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
                {item}
              </li>
            ))}
          </ul>
          {service.recurringNote && (<p className="text-xs font-medium text-brand-violet">{service.recurringNote}</p>)}
          {service.upsell && (<p className="text-xs text-muted-foreground italic">{service.upsell}</p>)}
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant="outline" onClick={() => onCta(service.id)}>Discuss This Service</Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
