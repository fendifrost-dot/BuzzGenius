import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { createCheckoutSession } from "@/lib/stripe-api";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

type StripeCheckoutButtonProps = {
  planId: string;
  label?: string;
  variant?: "default" | "outline" | "secondary";
  className?: string;
  customerEmail?: string;
  disabled?: boolean;
  onFallback?: () => void;
};

const StripeCheckoutButton = ({
  planId,
  label = "Subscribe",
  variant = "default",
  className,
  customerEmail,
  disabled,
  onFallback,
}: StripeCheckoutButtonProps) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      const { url } = await createCheckoutSession(planId, customerEmail);
      window.location.href = url;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Checkout unavailable";
      if (message.includes("not available") || message.includes("not configured")) {
        toast.error("Online checkout is not configured for this plan yet.");
        onFallback?.();
      } else {
        toast.error(message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      type="button"
      variant={variant}
      className={cn("w-full", className)}
      disabled={disabled || loading}
      onClick={handleClick}
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Redirecting…
        </>
      ) : (
        label
      )}
    </Button>
  );
};

export default StripeCheckoutButton;
