import SiteLayout from "@/components/layout/SiteLayout";
import { Link } from "react-router-dom";

const sections: { title: string; body: React.ReactNode }[] = [
  { title: "1. Scope", body: <>This Privacy Policy describes how Buzz Genius Inc., an Illinois corporation ("Buzz Genius," "we," "us"), collects, uses, and safeguards information obtained through buzzgeniusinc.com and the professional services we provide.</> },
  { title: "2. Information We Collect", body: <>We collect only the information necessary to evaluate, deliver, and support engagements. This includes contact details you provide voluntarily (name, company, email address, telephone number, message content) and limited technical information automatically transmitted by your browser.</> },
  { title: "3. How We Use Information", body: <>Information is used solely to respond to inquiries, deliver contracted services, maintain operational records, and comply with applicable law. We do not sell personal information and do not use client data for advertising.</> },
  { title: "4. Confidentiality", body: <>Information shared in the course of professional engagement is treated as confidential and is disclosed only as required to perform services, with your written authorization, or where required by law or regulatory authority.</> },
  { title: "5. Service Providers", body: <>We rely on a limited number of established service providers (including hosting, contact-form, and payment-processing vendors) to operate our website and accept payment. Each provider is bound by its own privacy and security obligations.</> },
  { title: "6. Data Retention", body: <>We retain information only as long as necessary for the purposes described above, to satisfy legitimate business needs, or as required by applicable law.</> },
  { title: "7. Your Choices", body: <>You may request access to, correction of, or deletion of personal information you have provided to us by contacting <a href="mailto:info@buzzgeniusinc.com" className="text-foreground hover:text-brand-blue">info@buzzgeniusinc.com</a>. We will respond within a reasonable period consistent with applicable law.</> },
  { title: "8. Governing Law", body: <>This Policy is governed by the laws of the State of Illinois, without regard to its conflict-of-laws principles.</> },
];

const Privacy = () => (
  <SiteLayout showStickyCta={false}>
    <main className="bg-background">
      <div className="container mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Legal</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
        <div className="w-10 h-0.5 bg-brand-blue mb-10" />
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-10">Effective {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
        <div className="space-y-8 text-muted-foreground text-base md:text-lg leading-[1.8] font-light">
          {sections.map((s) => (
            <section key={s.title}>
              <h2 className="text-foreground text-lg font-semibold uppercase tracking-[0.15em] mb-3">{s.title}</h2>
              <p>{s.body}</p>
            </section>
          ))}
          <section>
            <h2 className="text-foreground text-lg font-semibold uppercase tracking-[0.15em] mb-3">9. Contact</h2>
            <address className="not-italic">
              Buzz Genius Inc.<br />444 W. Lake St.<br />Chicago, IL 60606<br />
              <a href="mailto:info@buzzgeniusinc.com" className="text-foreground hover:text-brand-blue">info@buzzgeniusinc.com</a>
            </address>
          </section>
          <p className="text-xs text-muted-foreground italic pt-4">
            This Privacy Policy is provided as standard professional-services boilerplate. It does not constitute legal advice. Consult qualified counsel before relying on it for any specific matter. See also our <Link to="/terms" className="text-foreground hover:text-brand-blue">Terms of Service</Link>.
          </p>
        </div>
      </div>
    </main>
  </SiteLayout>
);

export default Privacy;
