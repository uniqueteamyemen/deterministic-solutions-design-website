import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isHome = location === "/";

  return (
    <div className="site-shell">
      <header className={`topbar ${scrolled || !isHome ? "topbar-scrolled" : ""}`}>
        <Link href="/" className="brand" aria-label="Deterministic Solutions & Design home">
          <img src="/manus-storage/deterministic-mark_ee0c8467.png" alt="" className="brand-mark" />
          <span>DS<span className="brand-slash">/</span><span className="brand-full">Deterministic Solutions & Design</span></span>
        </Link>
        
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/#continuum">Continuum</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#evidence">Evidence</Link>
          <Link href="/paylock">PayLock</Link>
        </nav>
        
        <a className="nav-cta" href="mailto:baker@deterministicsolutionsdesign.com">
          Contact us <ArrowUpRight size={14} />
        </a>
        
        <button 
          className="menu-toggle" 
          onClick={() => setMenuOpen(!menuOpen)} 
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        
        {menuOpen && (
          <div className="mobile-menu">
            <Link href="/#continuum">Continuum</Link>
            <Link href="/#projects">Projects</Link>
            <Link href="/#evidence">Evidence</Link>
            <Link href="/paylock">PayLock</Link>
            <a href="mailto:baker@deterministicsolutionsdesign.com">
              Contact us <ArrowUpRight size={14} />
            </a>
          </div>
        )}
      </header>

      {children}

      <footer className="footer container">
        <div className="footer-brand">
          <img src="/manus-storage/deterministic-mark_ee0c8467.png" alt="" className="brand-mark" />
          <span>Deterministic Solutions & Design LLC</span>
        </div>
        {!isHome && (
          <Link href="/">Return to DS&D <ArrowUpRight size={12} /></Link>
        )}
        {isHome && (
          <div>deterministicsolutionsdesign.com</div>
        )}
        <div>© 2026 DS&D. All rights reserved.</div>
      </footer>
    </div>
  );
}
