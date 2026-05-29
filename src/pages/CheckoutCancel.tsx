import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import SiteLayout from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";

const CheckoutCancel = () => (
  <>
    <Seo title="Checkout cancelled — Buzz Genius" description="Your checkout was cancelled." />
    <SiteLayout showStickyCta={false}>
      <main className="container mx-auto max-w-lg px-6 py-24 text-center">
        <h1 className="mb-3 text-2xl font-bold">Checkout cancelled</h1>
        <p className="mb-8 text-muted-foreground">
          No payment was made. You can return to pricing or contact us for a custom proposal.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild>
            <Link to="/services#pricing">View pricing</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/#contact">Contact us</Link>
          </Button>
        </div>
      </main>
    </SiteLayout>
  </>
);

export default CheckoutCancel;
