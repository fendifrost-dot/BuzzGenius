import Nav from "@/components/Nav";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";

const Terms = () => (
  <>
    <Nav />
    <main className="bg-background">
      <div className="container mx-auto px-6 pt-32 pb-20 md:pt-40 md:pb-28 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
          Legal
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
        <div className="w-10 h-0.5 bg-gold mb-10" />
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-10">
          Effective {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="space-y-8 text-muted-foreground text-base md:text-lg leading-[1.8] font-light">
          <section>
            <h2 className="text-foreground text-lg font-semibold uppercase tracking-[0.15em] mb-3">
              1. Acceptance
            </h2>
            <p>
              These Terms of Service ("Terms") govern your access to and use of
              buzzgeniusinc.com (the "Site") and any related services provided by
              Buzz Genius Inc., an Illinois corporation ("Buzz Genius," "we,"
              "us"). By using the Site you agree to these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-lg font-semibold uppercase tracking-[0.15em] mb-3">
              2. Engagement Scope
            </h2>
            <p>
              Content on this Site describes the categories of professional
              services Buzz Genius provides. No engagement, fiduciary duty, or
              client relationship is formed by visiting the Site or contacting us.
              Engagements are governed exclusively by separate written agreements
              between Buzz Genius and the client.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-lg font-semibold uppercase tracking-[0.15em] mb-3">
              3. Intellectual Property
            </h2>
            <p>
              All materials on the Site, including text, marks, logos, and
              graphics, are the property of Buzz Genius or its licensors and are
              protected by United States and international intellectual property
              laws. Limited personal, non-commercial use is permitted; all other
              uses require prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-lg font-semibold uppercase tracking-[0.15em] mb-3">
              4. Payments
            </h2>
            <p>
              Where the Site permits a client to remit payment, payments are
              processed by established third-party payment providers under their
              own terms. Buzz Genius does not store complete payment-card
              information. Refund and cancellation terms are governed by the
              applicable engagement agreement.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-lg font-semibold uppercase tracking-[0.15em] mb-3">
              5. Confidentiality
            </h2>
            <p>
              Information shared in the course of a professional engagement is
              treated as confidential and is disclosed only as required to perform
              services, with your written authorization, or as required by law.
              Refer to our{" "}
              <Link to="/privacy" className="text-foreground hover:text-gold">
                Privacy Policy
              </Link>{" "}
              for additional detail.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-lg font-semibold uppercase tracking-[0.15em] mb-3">
              6. Disclaimers
            </h2>
            <p>
              The Site and all content provided on or through the Site are
              provided "as is" without warranty of any kind, express or implied,
              including warranties of merchantability, fitness for a particular
              purpose, and non-infringement. Use of the Site is at your sole
              risk.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-lg font-semibold uppercase tracking-[0.15em] mb-3">
              7. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, Buzz Genius shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages arising out of or relating to your use of the
              Site. Liability for matters arising under a written engagement
              agreement is governed by that agreement.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-lg font-semibold uppercase tracking-[0.15em] mb-3">
              8. Governing Law &amp; Venue
            </h2>
            <p>
              These Terms are governed by the laws of the State of Illinois,
              without regard to its conflict-of-laws principles. Exclusive venue
              for any dispute lies in the state and federal courts located in
              Cook County, Illinois.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-lg font-semibold uppercase tracking-[0.15em] mb-3">
              9. Changes
            </h2>
            <p>
              We may revise these Terms from time to time. Updated Terms take
              effect upon posting to the Site. Continued use of the Site
              constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-lg font-semibold uppercase tracking-[0.15em] mb-3">
              10. Contact
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
            These Terms are provided as standard professional-services
            boilerplate. They do not constitute legal advice. Consult qualified
            counsel before relying on them for any specific matter.
          </p>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Terms;
