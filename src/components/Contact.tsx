import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", message: "" });
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
        message: [form.phone.trim() ? `Phone: ${form.phone.trim()}` : null, form.message.trim()].filter(Boolean).join("\n\n"),
      });
    } catch {}
    setSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-background">
      <div className="container mx-auto px-6 py-20 md:py-28 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Contact</h2>
        <div className="w-10 h-0.5 bg-brand-blue mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="space-y-6 text-foreground">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Corporate Office</p>
                <address className="not-italic text-base font-medium leading-relaxed">Buzz Genius Inc.<br />444 W. Lake St.<br />Chicago, IL 60606</address>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                <a href="mailto:info@buzzgeniusinc.com" className="text-base font-medium hover:text-brand-blue transition-colors">info@buzzgeniusinc.com</a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Phone</p>
                <a href="tel:+17083209838" className="text-base font-medium hover:text-brand-blue transition-colors">(708) 320-9838</a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Response Time</p>
                <p className="text-base font-medium leading-relaxed">One business day, Monday&ndash;Friday.</p>
              </div>
            </div>
          </div>
          <div>
            {submitted ? (
              <p className="text-foreground font-medium">Thank you. A member of our team will respond within one business day.</p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {([
                  { name: "name", label: "Name", required: true, type: "text" },
                  { name: "company", label: "Company", required: false, type: "text" },
                  { name: "email", label: "Email", required: true, type: "email" },
                  { name: "phone", label: "Phone", required: false, type: "tel" },
                ] as const).map((field) => (
                  <div key={field.name}>
                    <label htmlFor={field.name} className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{field.label}</label>
                    <input id={field.name} name={field.name} type={field.type} required={field.required} value={form[field.name]} onChange={handleChange} maxLength={field.name === "email" ? 255 : 100} className="w-full border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-brand-blue" />
                  </div>
                ))}
                <div>
                  <label htmlFor="message" className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Message</label>
                  <textarea id="message" name="message" required rows={4} maxLength={2000} value={form.message} onChange={handleChange} className="w-full border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-brand-blue resize-none" />
                </div>
                <button type="submit" disabled={submitting} className="border border-brand-blue px-8 py-2.5 text-sm font-semibold uppercase tracking-widest text-brand-blue hover:bg-brand-blue hover:text-white transition-colors duration-200 disabled:opacity-50">
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
