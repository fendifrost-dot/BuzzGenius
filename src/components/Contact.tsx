import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await supabase.from("contact_submissions").insert({
        name: form.name.trim(),
        company: form.company.trim() || null,
        email: form.email.trim(),
        message: form.message.trim(),
      });
    } catch {
      // Still show success to the user
    }
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-background">
      <div className="container mx-auto px-6 py-20 md:py-28 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Contact</h2>
        <div className="w-10 h-0.5 bg-gold mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="space-y-4 text-foreground">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                <a href="mailto:Info@buzzgeniusinc.com" className="text-base font-medium hover:text-gold transition-colors">
                  Info@buzzgeniusinc.com
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Phone</p>
                <a href="tel:+17083209838" className="text-base font-medium hover:text-gold transition-colors">
                  (708) 320-9838
                </a>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <p className="text-foreground font-medium">Thank you. We will be in touch.</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {(["name", "company", "email"] as const).map((field) => (
                  <div key={field}>
                    <label htmlFor={field} className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                      {field}
                    </label>
                    <input
                      id={field}
                      name={field}
                      type={field === "email" ? "email" : "text"}
                      required={field !== "company"}
                      value={form[field]}
                      onChange={handleChange}
                      maxLength={field === "email" ? 255 : 100}
                      className="w-full border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold"
                    />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    maxLength={2000}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-gold resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="border border-gold px-8 py-2.5 text-sm font-semibold uppercase tracking-widest text-gold hover:bg-gold hover:text-accent-foreground transition-colors duration-200 disabled:opacity-50"
                >
                  {submitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
