import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/services#industries" },
  
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const scrollToContact = () => {
    if (location.pathname !== "/") {
      window.location.href = "/#contact";
      return;
    }
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Buzz Genius" className="h-9 w-9 object-contain" />
          <span className="text-sm font-semibold tracking-tight">Buzz Genius</span>
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground",
                location.pathname + location.hash === link.href && "text-brand-blue",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="ghost" size="sm" className="text-xs uppercase tracking-wider" asChild>
            <a href="https://portal.buzzgeniusinc.com" target="_blank" rel="noopener noreferrer">
              Client Portal
            </a>
          </Button>
          <Button size="sm" className="text-xs uppercase tracking-wider" onClick={scrollToContact}>
            Book Consultation
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-6 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Button size="sm" className="mt-2 w-full" onClick={scrollToContact}>
              Book Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default SiteHeader;
