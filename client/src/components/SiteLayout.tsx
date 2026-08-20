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

  useEffect(() => setMenuOpen(false), [location]);

  const isHome = location === "/";
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <header className={`topbar ${scrolled || !isHome ? "topbar-scrolled" : ""}`}>
        <Link href="/" className="brand" aria-label="Deterministic Solutions and Design home">
          <img src="/manus-storage/dssd-lockup-dark-approved_b93ab250.png" alt="DS&D — Deterministic Solutions and Design" className="brand-lockup" />
          <span className="brand-name">Deterministic Solutions and Design LLC</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <Link href="/#portfolio">Work</Link>
          <Link href="/evidence">Evidence</Link>
          <Link href="/technical-library">Library</Link>
          <Link href="/about">About</Link>
          <Link className="nav-paylock" href="/paylock">PayLock</Link>
        </nav>
        <Link className="nav-cta" href="/contact">Contact <ArrowUpRight size={14} /></Link>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen} aria-controls="mobile-primary-navigation">{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        {menuOpen && <nav className="mobile-menu" id="mobile-primary-navigation" aria-label="Primary navigation"><Link href="/#portfolio" onClick={closeMenu}>Work</Link><Link href="/evidence" onClick={closeMenu}>Evidence</Link><Link href="/technical-library" onClick={closeMenu}>Technical library</Link><Link href="/about" onClick={closeMenu}>About DS&amp;D</Link><Link className="nav-paylock" href="/paylock" onClick={closeMenu}>Explore PayLock</Link><Link href="/contact" onClick={closeMenu}>Contact <ArrowUpRight size={14} /></Link></nav>}
      </header>
      <div id="main-content" tabIndex={-1}>{children}</div>
      <footer className="footer container">
        <div className="footer-brand"><img src="/manus-storage/deterministic-mark_ee0c8467.png" alt="" className="brand-mark" /><span>Deterministic Solutions and Design LLC · New Mexico, USA</span></div>
        {!isHome && <Link href="/">Return to DS&amp;D <ArrowUpRight size={12} /></Link>}
        {isHome && <div>deterministicsolutionsdesign.com</div>}
        <div>© 2026 DS&amp;D. All rights reserved.</div>
      </footer>
    </div>
  );
}
