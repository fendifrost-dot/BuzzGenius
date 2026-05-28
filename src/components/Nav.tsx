import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.png";

const links = [
  { href: "#overview", label: "Overview" },
  { href: "#services", label: "Services" },
  { href: "#philosophy", label: "Philosophy" },
  { href: "#leadership", label: "Leadership" },
  { href: "#engagement", label: "Engagement" },
];

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const onHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Nav background:
  //  - on home + at top: transparent (Hero owns the visual)
  //  - on home + scrolled: opaque primary
  //  - on any other route: always opaque
  const opaque = !onHome || scrolled;
  const showBrand = opaque; // hide brand block while Hero owns it

  const goAnchor = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!onHome) return; // browser handles /#anchor as a hard nav back to home
    e.preventDefault();
    setOpen(false);
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        opaque
          ? "bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/85 border-b border-gold/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex items-center justify-between h-16">
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className={`flex items-center gap-3 transition-opacity duration-300 ${
              showBrand ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-hidden={!showBrand}
            tabIndex={showBrand ? 0 : -1}
          >
            <img src={logo} alt="Buzz Genius Inc." className="w-8 h-8 object-contain" />
            <span className="text-sm font-semibold tracking-wide text-primary-foreground">
              Buzz Genius Inc.
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={onHome ? l.href : `/${l.href}`}
                  onClick={(e) => goAnchor(e, l.href)}
                  className="text-[11px] uppercase tracking-[0.18em] text-chrome-light hover:text-gold transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={onHome ? "#contact" : "/#contact"}
                onClick={(e) => goAnchor(e, "#contact")}
                className="border border-gold px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-gold hover:bg-gold hover:text-primary transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>

          <button
            type="button"
            aria-label="Toggle menu"
            className="md:hidden text-chrome-light p-2"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="7" x2="21" y2="7" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="17" x2="21" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>

        {open && (
          <ul className="md:hidden pb-4 space-y-3 bg-primary/95 backdrop-blur">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={onHome ? l.href : `/${l.href}`}
                  onClick={(e) => goAnchor(e, l.href)}
                  className="block text-xs uppercase tracking-[0.18em] text-chrome-light py-2"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={onHome ? "#contact" : "/#contact"}
                onClick={(e) => goAnchor(e, "#contact")}
                className="block text-xs uppercase tracking-[0.18em] text-gold py-2"
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
