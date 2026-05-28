import logo from "@/assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-matte-dark text-primary-foreground border-t border-gold/20">
    <div className="container mx-auto px-6 py-14 max-w-4xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
        {/* Identity */}
        <div>
          <div className="flex items-center gap-3 mb-5">
            <img src={logo} alt="Buzz Genius Inc." className="w-8 h-8 object-contain" />
            <p className="text-sm font-semibold tracking-wide">Buzz Genius Inc.</p>
          </div>
          <p className="text-xs text-chrome leading-relaxed font-light">
            Illinois professional services corporation. Technical strategy,
            operational development, and growth infrastructure for established
            organizations.
          </p>
        </div>

        {/* Corporate */}
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-gold-light mb-4">
            Corporate
          </p>
          <address className="not-italic text-xs text-chrome leading-relaxed font-light space-y-1">
            <p>444 W. Lake St.</p>
            <p>Chicago, IL 60606</p>
            <p className="pt-2">
              <a
                href="mailto:info@buzzgeniusinc.com"
                className="hover:text-gold transition-colors"
              >
                info@buzzgeniusinc.com
              </a>
            </p>
            <p>
              <a href="tel:+17083209838" className="hover:text-gold transition-colors">
                (708) 320-9838
              </a>
            </p>
          </address>
          <p className="text-[10px] uppercase tracking-widest text-chrome/60 mt-4">
            Federal Tax ID available on request
          </p>
        </div>

        {/* Legal */}
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-gold-light mb-4">
            Legal
          </p>
          <ul className="space-y-2 text-xs text-chrome font-light">
            <li>
              <Link to="/privacy" className="hover:text-gold transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-gold transition-colors">
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-chrome/10 mt-10 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <p className="text-[10px] uppercase tracking-widest text-chrome/60">
          &copy; {new Date().getFullYear()} Buzz Genius Inc. — Illinois Corporation. All rights reserved.
        </p>
        <p className="text-[10px] uppercase tracking-widest text-chrome/40">
          Incorporated 2024
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
