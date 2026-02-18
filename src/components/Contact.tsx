import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-background">
      <div className="container mx-auto px-6 py-20 md:py-28 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Contact</h2>
        <div className="w-10 h-0.5 bg-accent mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <div className="space-y-4 text-foreground">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</p>
                <a href="mailto:Info@buzzgeniusinc.com" className="text-base font-medium hover:underline">
                  Info@buzzgeniusinc.com
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Phone</p>
                <a href="tel:+17083209838" className="text-base font-medium hover:underline">
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
                      required
                      value={form[field]}
                      onChange={handleChange}
                      className="w-full border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
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
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="border border-foreground px-8 py-2.5 text-sm font-semibold uppercase tracking-widest text-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                >
                  Submit
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
