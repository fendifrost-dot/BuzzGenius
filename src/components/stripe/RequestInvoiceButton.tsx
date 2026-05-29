import { useState } from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { createInvoice } from "@/lib/stripe-api";
import { toast } from "sonner";

type RequestInvoiceButtonProps = {
  planId: string;
  planName: string;
};

const RequestInvoiceButton = ({ planId, planName }: RequestInvoiceButtonProps) => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await createInvoice(email, planId);
      toast.success("Invoice sent", {
        description: result.hostedInvoiceUrl
          ? "Check your email for the Stripe invoice."
          : "Your invoice has been created and sent.",
      });
      setOpen(false);
      setEmail("");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Could not create invoice");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button type="button" variant="ghost" size="sm" className="w-full text-xs">
          Request invoice instead
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Request invoice</DialogTitle>
            <DialogDescription>
              We&apos;ll email a Stripe invoice for <strong>{planName}</strong> (due in 14 days).
            </DialogDescription>
          </DialogHeader>
          <div className="my-4">
            <Input
              type="email"
              required
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={loading}>
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : (
                "Send invoice"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RequestInvoiceButton;
