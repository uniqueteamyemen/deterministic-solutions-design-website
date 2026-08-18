import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Menu, X } from "lucide-react";

const continuum = [
  { no: "01", label: "Commercial delivery", title: "Govern execution where it matters.", copy: "PayLock is DS&D’s commercial product: a non-custodial governance layer for execution evidence across existing digital infrastructure.", tags: ["PayLock", "APIs", "Proof"], accent: "lime" },
  { no: "02", label: "Engineering validation", title: "Test determinism before asserting it.", copy: "SSDD retains model-scoped evidence for replay, ordering, fault containment, and explicit verification boundaries.", tags: ["SSDD", "Validation", "Evidence"], accent: "bone" },
  { no: "03", label: "Research programme", title: "Keep research legible and bounded.", copy: "HC-CXL is a research rebuild with documented reference assumptions awaiting empirical validation in the relevant domain.", tags: ["HC-CXL", "Research", "Architecture"], accent: "lime" },
];

export const primaryNavigation = [
  { href: "#portfolio", label: "Work" },
  { href: "/evidence", label: "Evidence" },
  { href: "/technical-library", label: "Library" },
  { href: "/about", label: "About" },
  { href: "/paylock", label: "PayLock", primary: true },
];

export const approvedBrandAssets = {
  dssdLockup: "/manus-storage/dssd-lockup-dark-approved_b93ab250.png",
  paylockWordmark: "/manus-storage/paylock-wordmark-dark-approved_ad2dab2d.png",
};

export const portfolio = [
  { readiness: "Commercial product", name: "PayLock", title: "A deterministic proof path for digital-service delivery.", copy: "A protocol layer that binds a defined request, records the named evidence signals, and guards H1 issuance—while providers retain their own commercial and operating policies.", tags: ["Commercial", "Protocol", "API-ready"], href: "/paylock", action: "Explore PayLock", tier: "commercial" },
  { readiness: "Engineering validation", name: "SSDD", title: "Deterministic execution research with retained evidence.", copy: "A prototype and validation-stage architecture for observable, replayable execution. Its public records remain model-scoped and pre-hardware.", tags: ["Validation", "Replay", "Pre-hardware"], href: "/ssdd", action: "Inspect SSDD", tier: "validation" },
  { readiness: "Research programme", name: "HC-CXL", title: "A governed reference for future computing research.", copy: "A research rebuild that records an execution envelope and its assumptions, without claiming silicon qualification, CXL compliance, or production readiness.", tags: ["Research", "Reference model", "Bounded"], href: "/hc-cxl", action: "Explore HC-CXL", tier: "research" },
];

const evidence = [
  { label: "Runtime records", copy: "Observable deployments, logs, traces, and state transitions from real systems.", action: "Inspect evidence" },
  { label: "Published research", copy: "Specifications, whitepapers, and formal work that can be read and challenged.", action: "Read research records" },
  { label: "Source & tooling", copy: "Repositories, SDKs, test harnesses, or implementation artifacts where available.", action: "Open technical library" },
  { label: "Explicit boundaries", copy: "A visible record of what a system does, what it does not do, and where proof ends.", action: "Read the boundary" },
];

const states = [
  { no: "01", label: "Bound request", code: "H0.INTENT_FROZEN", copy: "The defined request is bound with a system-issued serial before the provider acts." },
  { no: "02", label: "Readiness", code: "PROVIDER_ACK", copy: "A provider-specific integration maps an authenticated readiness event to the canonical signal." },
  { no: "03", label: "Guarded proof", code: "H1.PROOF_ISSUED", copy: "Core issues H1 only when the currently named provider_ack and user_unlock gates are present." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeState, setActiveState] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <header className={`topbar ${scrolled ? "topbar-scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="Deterministic Solutions and Design home">
          <img src={approvedBrandAssets.dssdLockup} alt="DS&D — Deterministic Solutions and Design" className="brand-lockup" />
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">{primaryNavigation.map((item) => <a className={item.primary ? "nav-paylock" : undefined} href={item.href} key={item.href}>{item.label}</a>)}</nav>
        <a className="nav-cta" href="/contact">Contact <ArrowUpRight size={14} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        {menuOpen && <div className="mobile-menu">{primaryNavigation.map((item) => <a className={item.primary ? "nav-paylock" : undefined} href={item.href} onClick={closeMenu} key={item.href}>{item.primary ? "Explore PayLock" : item.label}</a>)}<a href="/contact" onClick={closeMenu}>Contact <ArrowUpRight size={14} /></a></div>}
      </header>

      <section className="hero" id="top">
        <div className="hero-art" aria-hidden="true"><img src="/manus-storage/hero-signal-grid_51a7fe5e.png" alt="" /><div className="hero-art-overlay" /></div>
        <div className="hero-content container">
          <div className="eyebrow reveal"><span className="status-dot" /> Software development · Advanced computing</div>
          <h1 className="hero-title reveal delay-1">Govern execution.<br /><em>Leave proof behind.</em></h1>
          <p className="hero-copy reveal delay-2">Deterministic Solutions and Design develops advanced software and computing technology for organizations that need operations to be <strong>governed, inspectable, and clear about their evidence boundary.</strong></p>
          <div className="hero-principles reveal delay-2"><div><span className="principle-icon">⌾</span><b>Understand</b><small>Intent is clear</small></div><div><span className="principle-icon">▷</span><b>Control</b><small>Execution is constrained</small></div><div><span className="principle-icon">⌕</span><b>Verify</b><small>Every step is traceable</small></div><div><span className="principle-icon">◇</span><b>Prove</b><small>Outcomes are inspectable</small></div></div>
          <div className="hero-actions reveal delay-3"><a className="button button-primary" href="/paylock">Explore PayLock <ArrowRight size={16} /></a><a className="button button-outline" href="/evidence">View evidence <ArrowRight size={16} /></a></div>
          <div className="hero-state"><div><span>Commercial focus</span><b className="lime-text">PayLock <i>//</i> execution governance</b></div><div><span>Portfolio</span><b>Product <i>→</i> Validation <i>→</i> Research</b></div></div>
        </div>
        <aside className="hero-flagship-card" aria-label="PayLock, DS&D’s commercial product"><div className="hero-flagship-top"><span className="status-dot" /> 01 / Commercial product</div><img src={approvedBrandAssets.paylockWordmark} alt="PayLock — execute with proof" /><p>Independent proof and governance for existing digital operations.</p><a href="/paylock">Product system file <ArrowUpRight size={14} /></a></aside>
        <div className="hero-index">00 <span>/</span> DS&amp;D</div>
      </section>

      <section className="paylock section container" id="paylock"><div className="section-index">01 <span>/</span> Commercial product</div><div className="paylock-grid"><div><div className="section-kicker">PayLock · operational governance for digital execution</div><h2>Make digital delivery <em>provable.</em></h2><p className="lead">PayLock creates a governed, inspectable record around agreed execution. It is a separate product layer that can sit above existing commerce, SaaS, or API infrastructure.</p><div className="boundary"><span className="boundary-mark">[!]</span><div><b>Key architecture boundary</b><p>No custody. No payment processing. PayLock governs execution conditions and evidence; it does not own a merchant’s commercial policy or funds flow.</p></div></div><a className="card-link feature-link" href="/paylock">Read the full PayLock system file <ArrowRight size={14} /></a></div><div className="proof-panel"><div className="panel-label">PayLock / state machine / active</div><img src="/manus-storage/paylock-proof_d1d2df7a.png" alt="Diagram of PayLock governance states" /><div className="state-tabs">{states.map((state, index) => <button key={state.no} className={activeState === index ? "active" : ""} onClick={() => setActiveState(index)}><span>{state.no}</span>{state.label}</button>)}</div><div className="state-detail"><div className="state-code"><Check size={13} /> {states[activeState].code}</div><p>{states[activeState].copy}</p></div></div></div></section>

      <section className="portfolio section" id="portfolio"><div className="container"><div className="section-index">02 <span>/</span> Portfolio by readiness</div><div className="section-head-row"><div><div className="section-kicker">Different stages require different evidence</div><h2>Clear readiness.<br /><em>Clearer claims.</em></h2></div><a className="text-link" href="/evidence">Read the evidence policy <ArrowRight size={14} /></a></div><p className="portfolio-intro">DS&amp;D keeps its commercial product, engineering-validation work, and research programme visibly distinct. The office does not represent a research record as a launch-ready product.</p><div className="portfolio-grid">{portfolio.map((item, index) => <article className={`portfolio-tier portfolio-tier-${item.tier}`} key={item.name}><div className="portfolio-tier-top"><span>0{index + 1}</span><b>{item.readiness}</b></div>{item.tier === "commercial" && <img className="portfolio-paylock-mark" src={approvedBrandAssets.paylockWordmark} alt="PayLock" />}<h3>{item.name}</h3><strong>{item.title}</strong><p>{item.copy}</p><div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="card-link" href={item.href}>{item.action} <ArrowRight size={14} /></a></article>)}</div><div className="portfolio-boundary"><span>[ READINESS POLICY ]</span><p>Products in preparation are not announced here until their scope and evidence are ready for public review. SSDD and HC-CXL remain listed only at their current validation and research stages.</p></div></div></section>

      <section className="continuum section" id="continuum"><div className="container"><div className="section-index">03 <span>/</span> The DS&amp;D continuum</div><div className="center-head"><div className="section-kicker">One institutional discipline</div><h2>From a governed product<br /><em>to accountable research.</em></h2><p>Every DS&amp;D initiative is represented with the scope of its evidence intact, so commercial discussions and technical inquiries can begin from a truthful starting point.</p></div><div className="continuum-cards">{continuum.map((item, index) => <article className={`continuum-card accent-${item.accent}`} key={item.no}><div className="card-top"><span>{item.no}</span><b>{item.label}</b></div><h3>{item.title}</h3><p>{item.copy}</p><div className="tag-row">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{index < continuum.length - 1 && <ArrowRight className="card-arrow" size={21} />}</article>)}</div></div></section>

      <section className="evidence section" id="evidence"><div className="container"><div className="section-index">04 <span>/</span> Evidence</div><div className="evidence-head"><div><div className="section-kicker">Evidence over assumptions</div><h2>We ship. We test.<br /><em>We preserve the boundary.</em></h2><p>Every initiative should leave a readable record: commercial documentation where a product is ready for market, and retained research evidence where work remains in validation.</p></div><div className="evidence-art"><img src="/manus-storage/evidence-trace_042d07b0.png" alt="Abstract execution-evidence trace" /></div></div><div className="metrics-band"><div><b>120+</b><span>Experiments<br />and prototypes</span></div><div><b>30+</b><span>Systems<br />in progress</span></div><div><b>15+</b><span>Integrations<br />and platforms</span></div><div><b>24/7</b><span>Monitoring<br />and validation</span></div></div><div className="evidence-records">{evidence.map((item, index) => <div className="evidence-record" key={item.label}><span className="record-no">0{index + 1}</span><b>{item.label}</b><p>{item.copy}</p><a href={index === 2 ? "/technical-library" : "/evidence"}>{item.action}</a></div>)}</div><div className="evidence-note"><span>[ EVIDENCE POLICY ]</span><p>The operating-scope metrics are retained as supplied. Their role is descriptive; the applicable records and technical-library links define the public evidence available for inspection.</p></div></div></section>

      <section className="contact section" id="contact"><div className="contact-grid container"><div className="section-index">05 <span>/</span> Contact</div><div className="contact-body"><div className="section-kicker">For organizations responsible for the hard parts</div><h2>Let’s build what’s <em>next.</em></h2><p>DS&amp;D is a New Mexico, USA LLC working internationally across advanced software, computing technology, product governance, and research collaboration.</p><a className="button button-primary" href="/contact">Start a conversation <ArrowRight size={16} /></a></div></div></section>
      <footer className="footer container"><div className="footer-brand"><img src="/manus-storage/dssd-lockup-dark-approved_b93ab250.png" alt="DS&D" className="footer-lockup" /><span>Deterministic Solutions and Design LLC · New Mexico, USA</span></div><div>deterministicsolutionsdesign.com</div><div>© 2026 DS&amp;D. All rights reserved.</div></footer>
    </main>
  );
}
