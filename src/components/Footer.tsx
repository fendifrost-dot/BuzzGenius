import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-matte-dark text-primary-foreground border-t border-brand-blue/20">
    <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Buzz Genius" className="h-8 w-8 object-contain" />
        <div>
          <p className="text-sm font-semibold tracking-wide">Buzz Genius</p>
          <p className="text-xs text-chrome">Growth Infrastructure for Modern Brands</p>
        </div>
      </div>
      <nav className="flex flex-wrap justify-center gap-4 text-xs uppercase tracking-wider text-chrome-light">
        <Link to="/services" className="hover:text-brand-blue">
          Services
        </Link>
        <Link to="/services#pricing" className="hover:text-brand-blue">
          Pricing
        </Link>
        <a href="/#contact" className="hover:text-brand-blue">
          Contact
        </a>
      </nav>
      <p className="text-xs text-chrome">
        &copy; {new Date().getFullYear()} Buzz Genius. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
