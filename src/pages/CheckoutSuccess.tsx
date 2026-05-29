import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { CheckCircle2, Loader2 } from "lucide-react";
import Seo from "@/components/Seo";
import SiteLayout from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import { createPortalSession, getCheckoutSession, type CheckoutSessionStatus } from "@/lib/stripe-api";
import { toast } from "sonner";

const CheckoutSuccess = () => {
  const [params] = useSearchParams();
  const sessionId = params.get("session_id");
  const [session, setSession] = useState<CheckoutSessionStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [portalLoading, setPortalLoading] = useState(false);

  useEffect(() => {
    if (!sessionId) {
      setLoading(false);
      return;
    }
    getCheckoutSession(sessionId)
      .then(setSession)
      .catch(() => toast.error("Could not load payment details"))
      .finally(() => setLoading(false));
  }, [sessionId]);

  const openPortal = async () => {
    if (!sessionId) return;
    setPortalLoading(true);
    try {
      const { url } = await createPortalSession(sessionId);
      window.location.href = url;
    } catch {
      toast.error("Billing portal is not available for this payment");
    } finally {
      setPortalLoading(false);
    }
  };

  return (
    <>
      <Seo title="Payment successful — Buzz Genius" description="Your Buzz Genius payment was successful." />
      <SiteLayout showStickyCta={false}>
        <main className="container mx-auto max-w-lg px-6 py-24 text-center">
          {loading ? (
            <Loader2 className="mx-auto h-10 w-10 animate-spin text-brand-blue" />
          ) : (
            <>
              <CheckCircle2 className="mx-auto mb-6 h-14 w-14 text-brand-blue" />
              <h1 className="mb-3 text-2xl font-bold">Payment successful</h1>
              {session?.planName && (
                <p className="mb-2 text-muted-foreground">
                  Thank you for starting <strong>{session.planName}</strong>.
                </p>
              )}
              {session?.customerEmail && (
                <p className="mb-8 text-sm text-muted-foreground">
                  Confirmation will be sent to {session.customerEmail}.
                </p>
              )}
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button asChild>
                  <Link to="/services">Back to services</Link>
                </Button>
                {session?.mode === "subscription" && sessionId && (
                  <Button variant="outline" disabled={portalLoading} onClick={openPortal}>
                    {portalLoading ? "Loading…" : "Manage subscription"}
                  </Button>
                )}
              </div>
            </>
          )}
        </main>
      </SiteLayout>
    </>
  );
};

export default CheckoutSuccess;
