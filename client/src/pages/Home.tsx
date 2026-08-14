// Style reminder: Signal / State — Swiss technical editorial, graphite field, bone text, signal-lime proof accents, asymmetric field-guide layout.
import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowUpRight, Check, Menu, X } from "lucide-react";

const products = [
  { id: "01", type: "R&D", status: "Research", name: "HC-CXL", title: "Human-Centric CXL Protocol", copy: "Translating human operational intent into prioritized memory operations and governed hardware execution over compute fabrics.", tags: ["Architecture", "Protocol"], accent: "lime" },
  { id: "02", type: "SYSTEM", status: "In development", name: "SSDD", title: "Scalable Sovereign Deterministic Design", copy: "The software-facing expression of HC-CXL: a hardware-agnostic systems layer for deterministic execution across distributed infrastructure.", tags: ["Software", "Systems"], accent: "bone" },
  { id: "03", type: "SYSTEM", status: "Experimental", name: "HOSSAM", title: "Executive Autonomous Operations", copy: "An executive-grade digital secretary architecture integrating local AI models, deterministic workflow orchestration, and enterprise automation.", tags: ["AI", "Agents", "Automation"], accent: "rust" },
  { id: "04", type: "PRODUCT", status: "Commercial", name: "PayLock", title: "Operational Governance for Digital Commerce", copy: "A verification layer above existing payment and supply infrastructure that enforces operational intent and issues cryptographic proof without handling custody.", tags: ["Commerce", "Verification"], accent: "lime" },
];

const states = [
  { no: "01", label: "Intent", code: "H0.INTENT_FROZEN", copy: "Execution boundaries and order terms are immutably locked." },
  { no: "02", label: "Execution", code: "PROVIDER_ACK", copy: "Provider events and transit metrics are verified against intent." },
  { no: "03", label: "Proof", code: "H1.PROOF_GENERATED", copy: "Cryptographic proof is issued to settle operations and end disputes." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeState, setActiveState] = useState(1);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="site-shell">
      <header className={`topbar ${scrolled ? "topbar-scrolled" : ""}`}>
        <a className="brand" href="#top" aria-label="Deterministic Solutions & Design home">
          <img src="/manus-storage/deterministic-mark_ee0c8467.png" alt="" className="brand-mark" />
          <span>DS<span className="brand-slash">/</span><span className="brand-full">Deterministic Solutions & Design</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#continuum">Systems</a><a href="#continuum">Infrastructure</a><a href="#research">Research</a><a href="#evidence">Evidence</a>
        </nav>
        <a className="nav-cta" href="#contact">Start a conversation <ArrowUpRight size={14} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        {menuOpen && <div className="mobile-menu"><a href="#continuum" onClick={() => setMenuOpen(false)}>Systems</a><a href="#continuum" onClick={() => setMenuOpen(false)}>Infrastructure</a><a href="#research" onClick={() => setMenuOpen(false)}>Research</a><a href="#evidence" onClick={() => setMenuOpen(false)}>Evidence</a><a href="#contact" onClick={() => setMenuOpen(false)}>Start a conversation <ArrowUpRight size={14} /></a></div>}
      </header>

      <section className="hero" id="top">
        <div className="hero-art" aria-hidden="true"><img src="/manus-storage/hero-signal-grid_51a7fe5e.png" alt="" /><div className="hero-art-overlay" /></div>
        <div className="hero-content container">
          <div className="eyebrow reveal"><span className="status-dot" /> Systems · Infrastructure · Research</div>
          <h1 className="hero-title reveal delay-1">Digital systems<br /><em>you can verify.</em></h1>
          <div className="hero-lower reveal delay-2"><p className="hero-copy">Deterministic Solutions & Design engineers infrastructure that turns unpredictable digital operations into <strong>observable, controllable, and provably execution-bound systems.</strong></p><div className="hero-actions"><a className="button button-primary" href="#continuum">Explore what we're building <ArrowDownRight size={16} /></a><a className="text-link" href="#evidence">See the evidence <ArrowUpRight size={14} /></a></div></div>
          <div className="hero-state reveal delay-3"><div><span>Direction</span><b>Research <i>→</i> Systems <i>→</i> Products</b></div><div><span>System state</span><b className="lime-text">Verifiable <i>//</i> Intent · Execution · Proof</b></div></div>
        </div>
        <div className="hero-index">00 <span>/</span> Thesis</div>
      </section>

      <section className="throughline section container" id="research">
        <div className="section-index">01 <span>/</span> Through-line</div>
        <div className="throughline-body"><div className="section-kicker">Different domains. One engineering discipline.</div><h2>Uncertainty in digital operations is an engineering failure — <em>not an inevitability.</em></h2><p>We bridge deep architecture and production software by turning assumptions into verifiable proofs.</p><div className="flow-steps"><div><span>01</span><strong>Research</strong><small>becomes protocol.</small></div><div><span>02</span><strong>Protocol</strong><small>becomes software.</small></div><div><span>03</span><strong>Software</strong><small>becomes infrastructure.</small></div><div><span>04</span><strong>Infrastructure</strong><small>becomes product.</small></div></div></div>
      </section>

      <section className="continuum section" id="continuum">
        <div className="container"><div className="section-index">02 <span>/</span> Continuum</div><div className="continuum-head"><div><div className="section-kicker">From deep architecture to production platforms.</div><h2>An unbroken continuum of <em>execution determinism.</em></h2></div><p>Research and product are not separate tracks here. Each system carries the principle forward, one layer closer to the real world.</p></div><div className="product-layout"><div className="route-art"><img src="/manus-storage/continuum-route_c8b83564.png" alt="Abstract route diagram connecting four system layers" /></div><div className="product-list">{products.map((product) => <article className={`product-card accent-${product.accent}`} key={product.id}><div className="product-top"><span>{product.type} {product.id}</span><span className="product-status"><i />{product.status}</span></div><h3>{product.name}</h3><div className="product-title">{product.title}</div><p>{product.copy}</p><div className="product-bottom"><span>{product.tags.join(" · ")}</span><a href="#contact" aria-label={`Explore ${product.name}`}>Explore <ArrowUpRight size={14} /></a></div></article>)}</div></div></div>
      </section>

      <section className="paylock section container" id="paylock">
        <div className="section-index">03 <span>/</span> Flagship product</div><div className="paylock-grid"><div><div className="section-kicker">PayLock · Operational governance for digital commerce</div><h2>Make digital delivery <em>provable.</em></h2><p className="lead">Disputes happen when state transitions are unverified. PayLock sits inside your existing stack to capture, verify, and enforce deterministic execution records.</p><div className="boundary"><span className="boundary-mark">[!]</span><div><b>Key architecture boundary</b><p>No custody. No payment processing. Pure execution governance over legacy systems.</p></div></div></div><div className="proof-panel"><img src="/manus-storage/paylock-proof_d1d2df7a.png" alt="Abstract diagram of PayLock verification states" /><div className="state-tabs">{states.map((state, index) => <button key={state.no} className={activeState === index ? "active" : ""} onClick={() => setActiveState(index)}><span>{state.no}</span>{state.label}</button>)}</div><div className="state-detail"><div className="state-code"><Check size={13} /> {states[activeState].code}</div><p>{states[activeState].copy}</p></div></div></div>
      </section>

      <section className="evidence section" id="evidence"><div className="container"><div className="section-index">04 <span>/</span> Evidence over assumptions</div><div className="evidence-grid"><div><div className="section-kicker">Built systems leave runtime traces.</div><h2>Claims are cheap.<br /><em>Traces are not.</em></h2><p>We value verifiable behavior over polished marketing. The work is designed to make system state visible at every layer.</p></div><div className="evidence-art"><img src="/manus-storage/evidence-trace_042d07b0.png" alt="Abstract runtime evidence trace" /></div></div><div className="evidence-list"><div><b>Runtime validation</b><span>Live, observable deployments operating in real environments.</span></div><div><b>Rigorous testing</b><span>Empirical stress-testing to locate boundaries and failure points.</span></div><div><b>Peer-reviewed research</b><span>Published protocols providing formal verification.</span></div><div><b>Explicit boundaries</b><span>Zero hidden assumptions; visible system state at all times.</span></div></div></div></section>

      <section className="principles section container"><div className="section-index">05 <span>/</span> First principles</div><div className="principles-head"><div className="section-kicker">The engineering stance</div><h2>Build the boundary.<br /><em>Prove the state.</em></h2></div><div className="principles-list"><div><span>01</span><b>Determinism</b><p>Make system behavior explicit and mathematically reason-able.</p></div><div><span>02</span><b>Governance</b><p>Maintain visible boundary enforcement across connected nodes.</p></div><div><span>03</span><b>Evidence</b><p>Prove runtime claims through immutable logs and cryptographic records.</p></div><div><span>04</span><b>Pragmatism</b><p>Integrate with legacy infrastructure before extending it.</p></div></div></section>

      <section className="contact section" id="contact"><div className="contact-grid container"><div className="section-index">06 <span>/</span> Contact</div><div className="contact-body"><div className="section-kicker">For the people who maintain the hard parts.</div><h2>Building a system<br />where <em>proof matters?</em></h2><p>If you are engineering infrastructure, commerce, or AI operations that require strict observability and provable state, let’s talk.</p><a className="button button-primary" href="mailto:hello@deterministicsolutionsdesign.com">Contact Deterministic Solutions <ArrowUpRight size={16} /></a></div></div></section>

      <footer className="footer container"><div className="footer-brand"><img src="/manus-storage/deterministic-mark_ee0c8467.png" alt="" className="brand-mark" /><span>Deterministic Solutions & Design LLC</span></div><div>deterministicsolutionsdesign.com</div><div>© 2026 DS&D. All rights reserved.</div></footer>
    </main>
  );
}
