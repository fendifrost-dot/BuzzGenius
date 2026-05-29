import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-matte-dark text-primary-foreground border-t border-brand-blue/20">
    <div className="container mx-auto max-w-6xl px-6 py-14">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-12">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <img src={logo} alt="Buzz Genius Inc." className="h-9 w-9 object-contain" />
            <div>
              <p className="text-sm font-semibold tracking-wide">Buzz Genius Inc.</p>
              <p className="text-[10px] uppercase tracking-widest text-chrome">Illinois Corporation</p>
            </div>
          </div>
          <p className="text-xs text-chrome-light leading-relaxed font-light">
            Marketing, AI automation, branding, web, and content systems for growth-stage organizations.
          </p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-brand-blue mb-4">Corporate</p>
          <address className="not-italic text-xs text-chrome-light leading-relaxed font-light space-y-1">
            <p>444 W. Lake St.</p>
            <p>Chicago, IL 60606</p>
            <p className="pt-2"><a href="mailto:info@buzzgeniusinc.com" className="hover:text-brand-blue transition-colors">info@buzzgeniusinc.com</a></p>
            <p><a href="tel:+17083209838" className="hover:text-brand-blue transition-colors">(708) 320-9838</a></p>
          </address>
          <p className="text-[10px] uppercase tracking-widest text-chrome/60 mt-4">Federal Tax ID available on request</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-brand-blue mb-4">Explore</p>
          <ul className="space-y-2 text-xs text-chrome-light font-light">
            <li><Link to="/services" className="hover:text-brand-blue transition-colors">Services</Link></li>
            <li><Link to="/services#pricing" className="hover:text-brand-blue transition-colors">Pricing</Link></li>
            <li><Link to="/services#industries" className="hover:text-brand-blue transition-colors">Industries</Link></li>
            <li><a href="/#contact" className="hover:text-brand-blue transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <p className="text-xs uppercase tracking-widest text-brand-blue mb-4">Legal</p>
          <ul className="space-y-2 text-xs text-chrome-light font-light">
            <li><Link to="/privacy" className="hover:text-brand-blue transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-brand-blue transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-chrome/10 mt-10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <p className="text-[10px] uppercase tracking-widest text-chrome/60">&copy; {new Date().getFullYear()} Buzz Genius Inc. &mdash; Illinois Corporation. All rights reserved.</p>
        <p className="text-[10px] uppercase tracking-widest text-chrome/40">Incorporated 2024</p>
      </div>
    </div>
  </footer>
);

export default Footer;
