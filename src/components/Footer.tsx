import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-6 py-10 max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Buzz Genius Inc." className="w-8 h-8 object-contain" />
        <p className="text-sm font-semibold tracking-wide">Buzz Genius Inc.</p>
      </div>
      <p className="text-xs text-chrome">&copy; {new Date().getFullYear()} Buzz Genius Inc. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
