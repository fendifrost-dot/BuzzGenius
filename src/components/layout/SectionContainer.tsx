import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionContainerProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
};

const SectionContainer = ({ id, children, className, dark }: SectionContainerProps) => (
  <section
    id={id}
    className={cn(dark ? "bg-matte-dark text-primary-foreground" : "bg-background text-foreground", className)}
  >
    <div className="container mx-auto px-6 py-20 md:py-28 max-w-6xl">{children}</div>
  </section>
);

export default SectionContainer;
