import Footer from "@/components/Footer";
import SiteHeader from "@/components/layout/SiteHeader";
import StickyConsultationCTA from "@/components/layout/StickyConsultationCTA";

import type { ReactNode } from "react";

type SiteLayoutProps = {
  children: ReactNode;
  showStickyCta?: boolean;
};

const SiteLayout = ({ children, showStickyCta = true }: SiteLayoutProps) => (
  <>
    <SiteHeader />
    {children}
    <Footer />
    {showStickyCta && <StickyConsultationCTA />}
  </>
);

export default SiteLayout;
