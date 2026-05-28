import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const Privacy = () => (
  <>
    <Nav />
    <main className="bg-background">
      <div className="container mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
          Legal
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Privacy Policy</h1>
        <div className="w-10 h-0.5 bg-gold mb-10" />
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-10">
          Effective {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="space-y-8 text-muted-foreground text-base md:text-lg leading-[1.8] font-light">
          <section>
            <h2 className="text-foreground text-lg font-semibold uppercase tracking-[0.15em] mb-3">
              1. Scope
            </h2>
            <p>
              This Privacy Policy describes how Buzz Genius Inc., an Illinois
              corporation ("Buzz Genius," "we," "us"), collects, uses, and
              safeguards information obtained through buzzgeniusinc.com and the
              professional services we provide.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-lg font-semibold uppercase tracking-[0.15em] mb-3">
              2. Information We Collect
            </h2>
            <p>
              We collect only the information necessary to evaluate, deliver, and
              support engagements. This includes contact details you provide
              voluntarily (name, company, email address, telephone number, message
              content) and limited technical information automatically transmitted
              by your browser (such as device type and pages visited).
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-lg font-semibold uppercase tracking-[0.15em] mb-3">
              3. How We Use Information
            </h2>
            <p>
              Information is used solely to respond to inquiries, deliver
              contracted services, maintain operational records, and comply with
              applicable law. We do not sell personal information and do not use
              client data for advertising.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-lg font-semibold uppercase tracking-[0.15em] mb-3">
              4. Confidentiality
            </h2>
            <p>
              Information shared in the course of professional engagement is
              treated as confidential and is disclosed only as required to perform
              services, with your written authorization, or where required by law
              or regulatory authority.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-lg font-semibold uppercase tracking-[0.15em] mb-3">
              5. Service Providers
            </h2>
            <p>
              We rely on a limited number of established service providers
              (including hosting, contact-form, and payment-processing vendors) to
              operate our website and accept payment. Each provider is bound by
              its own privacy and security obligations.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-lg font-semibold uppercase tracking-[0.15em] mb-3">
              6. Data Retention
            </h2>
            <p>
              We retain information only as long as necessary for the purposes
              described above, to satisfy legitimate business needs, or as
              required by applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-lg font-semibold uppercase tracking-[0.15em] mb-3">
              7. Your Choices
            </h2>
            <p>
              You may request access to, correction of, or deletion of personal
              information you have provided to us by contacting{" "}
              <a href="mailto:info@buzzgeniusinc.com" className="text-foreground hover:text-gold">
                info@buzzgeniusinc.com
              </a>
              . We will respond within a reasonable period consistent with
              applicable law.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-lg font-semibold uppercase tracking-[0.15em] mb-3">
              8. Governing Law
            </h2>
            <p>
              This Policy is governed by the laws of the State of Illinois,
              without regard to its conflict-of-laws principles.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-lg font-semibold uppercase tracking-[0.15em] mb-3">
              9. Contact
            </h2>
            <address className="not-italic">
              Buzz Genius Inc.
              <br />
              444 W. Lake St.
              <br />
              Chicago, IL 60606
              <br />
              <a href="mailto:info@buzzgeniusinc.com" className="text-foreground hover:text-gold">
                info@buzzgeniusinc.com
              </a>
            </address>
          </section>

          <p className="text-xs text-muted-foreground italic pt-4">
            This Privacy Policy is provided as standard professional-services
            boilerplate. It does not constitute legal advice. Consult qualified
            counsel before relying on it for any specific matter.
          </p>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Privacy;
