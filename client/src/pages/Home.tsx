import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, Check, Menu, X } from "lucide-react";
import ReferenceMark from "@/components/ReferenceMark";

export const primaryNavigation = [
  { href: "#method", label: "Method" },
  { href: "#work", label: "Work" },
  { href: "#evidence", label: "Evidence" },
  { href: "#contact", label: "Contact", primary: true },
];

export const detailSteps = [
  { no: "01", label: "Notice", copy: "Find the detail that makes a burden appear compulsory." },
  { no: "02", label: "Name", copy: "State the harm and the boundary plainly." },
  { no: "03", label: "Reference", copy: "Define what the relevant parties can rely on together." },
  { no: "04", label: "Act", copy: "Choose the smallest safe intervention." },
];

export const homepageMessage = {
  lead: "What appears compulsory",
  accent: "may not be.",
  copy: "People often meet difficulty as if it were a fixed condition. DS&D makes the consequential detail and the shared rule behind it visible, so the relevant people can see when a safer alternative is possible.",
  emphasis: "We do not promise to remove every constraint. We show where an apparently fixed burden can be reconsidered.",
};

export const portfolio = [
  {
    no: "01",
    readiness: "Product direction",
    name: "PayLock",
    title: "Make agreed execution readable.",
    copy: "PayLock is being developed as a layer for named execution signals and a readable proof path. It does not create a new payment system or take custody of funds.",
    tags: ["Execution", "Reference", "Proof path"],
    href: "/paylock",
    action: "Explore PayLock",
    tier: "product",
  },
  {
    no: "02",
    readiness: "Research & validation",
    name: "SSDD",
    title: "Give shared events a clearer boundary.",
    copy: "SSDD investigates shared containment and reference treatment for execution events. Its retained evidence is model-scoped and does not claim to eliminate jitter or accelerate latency.",
    tags: ["Research", "Validation", "Bounded"],
    href: "/ssdd",
    action: "Inspect SSDD",
    tier: "validation",
  },
  {
    no: "03",
    readiness: "Research direction",
    name: "HC-CXL",
    title: "Examine hard computing boundaries honestly.",
    copy: "HC-CXL examines difficult computing-system boundaries with explicit assumptions and evidence limits. It is not presented as hardware qualification or production readiness.",
    tags: ["Research", "Reference", "Evidence limits"],
    href: "/hc-cxl",
    action: "Explore HC-CXL",
    tier: "research",
  },
];

export const evidencePrinciples = [
  { no: "01", title: "What we know", copy: "The evidence and scope that can be inspected today." },
  { no: "02", title: "What remains open", copy: "The boundary where a claim has not yet been proven." },
  { no: "03", title: "What can happen now", copy: "The smallest credible next action, rather than a vague promise." },
];

const paylockStates = [
  { no: "01", label: "Agreed signal", code: "NAMED_EVENT", copy: "A defined event is named so the relevant parties know what is being considered." },
  { no: "02", label: "Reference", code: "SHARED_REFERENCE", copy: "The event is tied to the agreed detail that the parties can read together." },
  { no: "03", label: "Readable state", code: "PROOF_PATH", copy: "The current state can be inspected without pretending that PayLock owns payment, delivery, or every policy." },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeState, setActiveState] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 22);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell reference-system" id="main-content" tabIndex={-1}>
      <a className="skip-link" href="#top">Skip to main content</a>
      <header className={`topbar reference-topbar ${scrolled ? "topbar-scrolled" : ""}`}>
        <a className="reference-brand" href="#top" aria-label="Deterministic Solutions and Design home">
          <ReferenceMark compact />
          <span>Deterministic Solutions &amp; Design<small>Systems design / research office</small></span>
        </a>
        <nav className="desktop-nav reference-nav" aria-label="Primary navigation">
          {primaryNavigation.map((item) => <a className={item.primary ? "nav-paylock" : undefined} href={item.href} key={item.href}>{item.label}</a>)}
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        {menuOpen && <div className="mobile-menu reference-mobile-menu">{primaryNavigation.map((item) => <a className={item.primary ? "nav-paylock" : undefined} href={item.href} onClick={closeMenu} key={item.href}>{item.label}</a>)}</div>}
      </header>

      <section className="reference-hero" id="top">
        <div className="container reference-hero-grid">
          <div className="reference-hero-copy">
            <div className="eyebrow reference-eyebrow">Systems design / research office</div>
            <h1>{homepageMessage.lead}<br /><em>{homepageMessage.accent}</em></h1>
            <p>{homepageMessage.copy} <strong>{homepageMessage.emphasis}</strong></p>
            <div className="reference-actions"><a className="reference-button reference-button-primary" href="#method">See the method <ArrowRight size={16} /></a><a className="reference-button reference-button-text" href="#evidence">Read the evidence policy <ArrowRight size={15} /></a></div>
            <div className="reference-trace"><span>Observed detail</span><i /><b>Actionable reference</b></div>
          </div>
          <div className="reference-lens" aria-label="Different processes, one reference">
            <span className="lens-streams" aria-hidden="true"><i /><i /><i /><i /><i /></span><span className="lens-reference-line" aria-hidden="true" /><span className="lens-ring lens-ring-large" /><span className="lens-ring lens-ring-small" /><span className="lens-point"><i /></span>
            <div className="lens-caption"><span>Different processes</span><b>One reference</b></div>
          </div>
        </div>
      </section>

      <section className="reference-method" id="method">
        <div className="container method-intro"><div><span className="section-index">01 / Method</span><h2>Clarity before <em>complexity.</em></h2></div><p>DS&amp;D does not start with a technology or a promised outcome. We start by naming the consequential detail, the harm it creates, what the evidence supports, and whether a simpler, safer shared rule is possible.</p></div>
        <div className="container method-steps">{detailSteps.map((step) => <article key={step.no}><span>{step.no}</span><i className={`method-symbol method-symbol-${step.no}`} aria-hidden="true" /><h3>{step.label}</h3><p>{step.copy}</p></article>)}</div>
      </section>

      <section className="reference-paylock" id="paylock">
        <div className="container paylock-reference-grid">
          <div><span className="section-index">02 / Product direction</span><div className="section-kicker">PayLock / agreed execution signals</div><h2>Make the next shared action <em>readable.</em></h2><p className="lead">PayLock is a product direction for defining which shared execution signals count and making their proof path readable. It does not invent a payment system, take custody, or replace a provider’s own policy.</p><div className="reference-boundary"><span>Boundary</span><p>Use the product for a named execution and its evidence path—not as a claim that every commercial or delivery decision has been solved.</p></div><a className="reference-link" href="/paylock">Explore the PayLock system file <ArrowUpRight size={14} /></a></div>
          <div className="paylock-reference-panel"><div className="paylock-panel-label">Event / reference / proof</div><div className="paylock-symbol"><b>P</b><span><i /></span><b>L</b></div><div className="state-tabs" role="tablist" aria-label="PayLock lifecycle states">{paylockStates.map((state, index) => <button key={state.no} type="button" role="tab" aria-selected={activeState === index} className={activeState === index ? "active" : ""} onClick={() => setActiveState(index)}><span>{state.no}</span>{state.label}</button>)}</div><div className="state-detail" role="tabpanel"><div className="state-code"><Check size={13} /> {paylockStates[activeState].code}</div><p>{paylockStates[activeState].copy}</p></div></div>
        </div>
      </section>

      <section className="reference-work" id="work"><div className="container"><div className="work-head"><div><span className="section-index">03 / Work by readiness</span><h2>Different work.<br /><em>Clearer claims.</em></h2></div><p>DS&amp;D keeps product direction, validation work, and research visibly distinct. A later ambition is not presented as a current capability.</p></div><div className="reference-work-grid">{portfolio.map((item) => <article className={`reference-work-card ${item.tier}`} key={item.name}><div><span>{item.no}</span><b>{item.readiness}</b></div><h3>{item.name}</h3><strong>{item.title}</strong><p>{item.copy}</p><div className="reference-tags">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><a className="reference-link" href={item.href}>{item.action} <ArrowRight size={14} /></a></article>)}</div></div></section>

      <section className="reference-evidence" id="evidence"><div className="container"><div className="evidence-intro"><div><span className="section-index">04 / Evidence language</span><h2>Say what is known.<br /><em>Keep the boundary visible.</em></h2></div><p>Evidence is not decoration. It is the record that lets an organization see the difference between a current fact, an open question, and a practical next step.</p></div><div className="reference-evidence-grid">{evidencePrinciples.map((item) => <article key={item.no}><span>{item.no}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div><div className="evidence-policy"><span>Evidence policy</span><p>Product work, engineering validation, and research are described at their present readiness. Where proof ends, the public record says so.</p><a className="reference-link" href="/evidence">Inspect the evidence record <ArrowRight size={14} /></a></div></div></section>

      <section className="reference-conviction"><div className="container"><span>DS&amp;D conviction</span><blockquote>The devil is in the details.<br /><b>So are the solutions.</b></blockquote></div></section>

      <section className="reference-contact" id="contact"><div className="container"><span className="section-index">05 / Contact</span><div><h2>Show us what seems <em>unavoidable.</em></h2><p>DS&amp;D is a New Mexico, USA LLC working across systems design, product governance, and evidence-bounded research.</p><a className="reference-button reference-button-primary" href="/contact">Start a conversation <ArrowRight size={16} /></a></div></div></section>
      <footer className="reference-footer container"><div className="reference-footer-brand"><ReferenceMark compact /><span>Deterministic Solutions &amp; Design LLC</span></div><span>Detail / Reference / Action</span><span>© 2026 DS&amp;D</span></footer>
    </main>
  );
}
