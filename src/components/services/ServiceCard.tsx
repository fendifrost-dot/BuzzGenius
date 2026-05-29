import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import type { ServiceCategory } from "@/data/services";

type ServiceCardProps = {
  service: ServiceCategory;
  index: number;
  onCta: (serviceId: string) => void;
};

const ServiceCard = ({ service, index, onCta }: ServiceCardProps) => (
  <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }} transition={{ delay: index * 0.05, duration: 0.4 }}>
    <Card className="flex h-full flex-col border-border/80 shadow-sm transition-shadow hover:shadow-md">
      <CardHeader>
        <CardTitle className="text-xl">{service.name}</CardTitle>
        <p className="text-sm text-muted-foreground">{service.description}</p>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-brand-blue">Typical Deliverables</p>
        <ul className="space-y-2">
          {service.deliverables.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-muted-foreground">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-blue" />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant="outline" onClick={() => onCta(service.id)}>
          Discuss This Area
        </Button>
      </CardFooter>
    </Card>
  </motion.div>
);

export default ServiceCard;
