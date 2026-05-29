import SiteLayout from "@/components/layout/SiteLayout";
import { Link } from "react-router-dom";

const sections: { title: string; body: React.ReactNode }[] = [
  { title: "1. Acceptance", body: <>These Terms of Service ("Terms") govern your access to and use of buzzgeniusinc.com (the "Site") and any related services provided by Buzz Genius Inc., an Illinois corporation ("Buzz Genius," "we," "us"). By using the Site you agree to these Terms.</> },
  { title: "2. Engagement Scope", body: <>Content on this Site describes the categories of professional services Buzz Genius provides. No engagement, fiduciary duty, or client relationship is formed by visiting the Site or contacting us. Engagements are governed exclusively by separate written agreements between Buzz Genius and the client.</> },
  { title: "3. Intellectual Property", body: <>All materials on the Site, including text, marks, logos, and graphics, are the property of Buzz Genius or its licensors and are protected by United States and international intellectual property laws. Limited personal, non-commercial use is permitted; all other uses require prior written consent.</> },
  { title: "4. Payments", body: <>Where the Site permits a client to remit payment, payments are processed by established third-party payment providers under their own terms. Buzz Genius does not store complete payment-card information. Refund and cancellation terms are governed by the applicable engagement agreement.</> },
  { title: "5. Confidentiality", body: <>Information shared in the course of a professional engagement is treated as confidential and is disclosed only as required to perform services, with your written authorization, or as required by law. Refer to our <Link to="/privacy" className="text-foreground hover:text-brand-blue">Privacy Policy</Link> for additional detail.</> },
  { title: "6. Disclaimers", body: <>The Site and all content provided on or through the Site are provided "as is" without warranty of any kind, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement. Use of the Site is at your sole risk.</> },
  { title: "7. Limitation of Liability", body: <>To the maximum extent permitted by law, Buzz Genius shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or relating to your use of the Site. Liability for matters arising under a written engagement agreement is governed by that agreement.</> },
  { title: "8. Governing Law & Venue", body: <>These Terms are governed by the laws of the State of Illinois, without regard to its conflict-of-laws principles. Exclusive venue for any dispute lies in the state and federal courts located in Cook County, Illinois.</> },
  { title: "9. Changes", body: <>We may revise these Terms from time to time. Updated Terms take effect upon posting to the Site. Continued use of the Site constitutes acceptance of the revised Terms.</> },
];

const Terms = () => (
  <SiteLayout showStickyCta={false}>
    <main className="bg-background">
      <div className="container mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">Legal</p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
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
            <h2 className="text-foreground text-lg font-semibold uppercase tracking-[0.15em] mb-3">10. Contact</h2>
            <address className="not-italic">
              Buzz Genius Inc.<br />444 W. Lake St.<br />Chicago, IL 60606<br />
              <a href="mailto:info@buzzgeniusinc.com" className="text-foreground hover:text-brand-blue">info@buzzgeniusinc.com</a>
            </address>
          </section>
          <p className="text-xs text-muted-foreground italic pt-4">
            These Terms are provided as standard professional-services boilerplate. They do not constitute legal advice. Consult qualified counsel before relying on them for any specific matter.
          </p>
        </div>
      </div>
    </main>
  </SiteLayout>
);

export default Terms;
