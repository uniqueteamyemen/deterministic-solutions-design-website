import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ExternalLink, Layers3, Menu, ShieldCheck, X } from "lucide-react";
import { useState } from "react";
import SiteLayout from "@/components/SiteLayout";

type PageKey = "hc-cxl" | "ssdd" | "evidence" | "about" | "contact";

type PageConfig = {
  key: PageKey;
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  label: string;
  sections: { index: string; title: string; copy: string; tags: string[] }[];
};

const pageMap: Record<PageKey, PageConfig> = {
  "hc-cxl": {
    key: "hc-cxl",
    eyebrow: "Research / HC-CXL / Human-centered architecture",
    title: <>Make human intent<br /><em>legible to memory.</em></>,
    intro: "HC-CXL is a research direction for bringing human-centered interfaces into the abstraction layers of Compute Express Link. It treats intent, context, and governed translation as architectural concerns.",
    label: "Research file",
    sections: [
      { index: "01", title: "An abstraction layer for intent.", copy: "The interface between people and memory-centric computing should not disappear into a collection of opaque commands. HC-CXL frames that interface as a governed layer: interpretable, explicit, and designed for translation.", tags: ["CXL", "Human intent", "Abstraction"] },
      { index: "02", title: "Context before execution.", copy: "A human-facing request requires more than a transport primitive. It needs a visible boundary, an interpretable state, and a route from intention to machine action that can be inspected after the fact.", tags: ["Context", "Protocol design", "Traceability"] },
      { index: "03", title: "Research that can become a system.", copy: "The work moves along the continuum: explore the conceptual boundary, formalize the protocol surface, then expose the parts that can be tested through software and tooling.", tags: ["Protocols", "Architecture", "Systems"] },
    ],
  },
  ssdd: {
    key: "ssdd",
    eyebrow: "Systems / SSDD / Deterministic foundations",
    title: <>Software that makes<br /><em>state inspectable.</em></>,
    intro: "SSDD is the software-facing expression of HC-CXL: deterministic systems, protocols, and frameworks for operations where execution order, state, and evidence must remain visible.",
    label: "Systems file",
    sections: [
      { index: "01", title: "A disciplined software face.", copy: "SSDD turns architectural intent into runtimes, libraries, and tooling that can carry explicit state. The goal is not complexity for its own sake; it is a stable surface for work that must be reasoned about.", tags: ["Runtimes", "Libraries", "SDKs"] },
      { index: "02", title: "Determinism as a design choice.", copy: "When the sequence matters, the system should make that sequence readable. SSDD favors constrained transitions, explicit interfaces, and operating records that allow a team to understand what happened.", tags: ["Execution", "Verification", "Tooling"] },
      { index: "03", title: "Built for the next layer.", copy: "The systems layer connects foundational research with products. It gives concepts somewhere to live, be tested, integrated, and eventually made useful to organizations with real operational boundaries.", tags: ["Frameworks", "Integration", "Proof"] },
    ],
  },
  evidence: {
    key: "evidence",
    eyebrow: "Evidence / Inspection surfaces / Runtime records",
    title: <>The work is real<br /><em>when it can be inspected.</em></>,
    intro: "Evidence is not a decorative section of the site. It is the operating discipline behind the work: records, demonstrations, source material, and explicit boundaries that let another person challenge what was built.",
    label: "Evidence register",
    sections: [
      { index: "01", title: "Runtime records.", copy: "Observable deployments, logs, traces, and state transitions are the strongest form of evidence because they show the system operating rather than describe an intention.", tags: ["Logs", "Traces", "State"] },
      { index: "02", title: "Published research.", copy: "Protocol specifications, whitepapers, and formal work make the conceptual layer available for scrutiny. They establish what the system claims before implementation begins.", tags: ["Specifications", "Whitepapers", "Research"] },
      { index: "03", title: "Source and tooling.", copy: "Repositories, SDKs, test harnesses, and implementation artifacts show how the system is assembled. When a source is ready for inspection, it belongs beside the claim.", tags: ["Repositories", "Tests", "Tooling"] },
      { index: "04", title: "Explicit boundaries.", copy: "A credible system also records what it does not do. PayLock, for example, governs execution without holding, processing, or controlling funds.", tags: ["Scope", "Limits", "Governance"] },
    ],
  },
  about: {
    key: "about",
    eyebrow: "About / Deterministic Solutions & Design",
    title: <>Build with integrity.<br /><em>Leave a trace.</em></>,
    intro: "Deterministic Solutions & Design is an engineering and research practice moving from foundational ideas to governed digital systems and practical products.",
    label: "Institutional file",
    sections: [
      { index: "01", title: "Research without isolation.", copy: "Ideas are useful when they can cross a boundary. Our continuum connects research, systems, and products so that architectural thinking can become a software surface and eventually an operating result.", tags: ["Research", "Systems", "Products"] },
      { index: "02", title: "Systems without opacity.", copy: "We focus on operations where trust depends on being able to understand the state of a process. That means making the path, boundary, and proof visible to the people responsible for it.", tags: ["Determinism", "Observability", "Assurance"] },
      { index: "03", title: "Products without custody.", copy: "Where products sit above existing infrastructure, their job is to add governance and evidence without pretending to replace the underlying systems or control what they should not control.", tags: ["Boundaries", "Integration", "Long-term"] },
    ],
  },
  contact: {
    key: "contact",
    eyebrow: "Contact / Integration / Partnership",
    title: <>Bring us the<br /><em>hard parts.</em></>,
    intro: "For system architecture, product evaluation, research collaboration, or operational governance, start a conversation with the team behind Deterministic Solutions & Design.",
    label: "Conversation channel",
    sections: [
      { index: "01", title: "For infrastructure teams.", copy: "Discuss systems that need clearer boundaries, more observable transitions, or an operating layer that can make delivery defensible.", tags: ["Architecture", "Operations", "Governance"] },
      { index: "02", title: "For product teams.", copy: "Explore how PayLock can sit above existing commerce, API, or SaaS infrastructure to create a governed record of execution.", tags: ["PayLock", "APIs", "Commerce"] },
      { index: "03", title: "For research partners.", copy: "Connect around HC-CXL, SSDD, and the transition from human intent to deterministic machine-facing systems.", tags: ["HC-CXL", "SSDD", "Research"] },
    ],
  },
};

const nextLinks: Record<PageKey, { href: string; label: string }[]> = {
  "hc-cxl": [{ href: "/ssdd", label: "Continue to SSDD" }, { href: "/about", label: "Read about DS&D" }],
  ssdd: [{ href: "/paylock", label: "See PayLock in production" }, { href: "/evidence", label: "Inspect evidence" }],
  evidence: [{ href: "/paylock", label: "Inspect PayLock evidence" }, { href: "/contact", label: "Discuss an integration" }],
  about: [{ href: "/hc-cxl", label: "Explore HC-CXL" }, { href: "/ssdd", label: "Explore SSDD" }],
  contact: [{ href: "mailto:baker@deterministicsolutionsdesign.com", label: "Email the team" }, { href: "/paylock", label: "Review PayLock" }],
};

export default function InstitutionalPage() {
  const path = window.location.pathname.replace(/^\//, "") as PageKey;
  const page = pageMap[path] ?? pageMap.about;
  const [menuOpen, setMenuOpen] = useState(false);
  const links = nextLinks[page.key];

  return (
    <SiteLayout>
      <main className={`institutional-page institutional-${page.key}`}>
        <section className="institutional-hero">
          <div className="institutional-grid" aria-hidden="true" />
          <div className="container institutional-hero-inner">
            <div className="institutional-meta"><span className="status-dot" /> {page.eyebrow}</div>
            <div className="institutional-hero-grid">
              <div>
                <a className="back-link" href="/"><ArrowLeft size={14} /> DS&D / Home</a>
                <h1>{page.title}</h1>
                <p>{page.intro}</p>
                {page.key === "contact" ? (
                  <a className="button button-primary" href="mailto:baker@deterministicsolutionsdesign.com">baker@deterministicsolutionsdesign.com <ArrowUpRight size={16} /></a>
                ) : (
                  <a className="button button-outline" href="#field">Read the {page.label.toLowerCase()} <ArrowRight size={16} /></a>
                )}
              </div>
              <div className="institutional-signal">
                <div className="signal-heading">DS&D / {page.label.toUpperCase()}</div>
                <div className="signal-route"><span className="lit">RESEARCH</span><i /><span className={page.key === "hc-cxl" ? "lit" : ""}>SYSTEMS</span><i /><span className={page.key === "ssdd" || page.key === "contact" ? "lit" : ""}>PRODUCTS</span></div>
                <div className="signal-readout"><Check size={15} /> {page.key === "evidence" ? "EVIDENCE_READY" : "STATE_OBSERVABLE"}</div>
                <div className="signal-bracket">[ {page.key.toUpperCase()} ]</div>
              </div>
            </div>
          </div>
          <div className="institutional-index">{page.key.toUpperCase()} <span>/</span> 01</div>
        </section>

        <section className="institutional-field section" id="field">
          <div className="container">
            <div className="section-index">01 <span>/</span> {page.label}</div>
            <div className="institutional-field-head"><div><div className="section-kicker">A governed path from idea to operation</div><h2>Make the layer<br /><em>visible.</em></h2></div><p>Each page in the DS&D system uses the same principle: name the boundary, expose the state, and leave a readable path for the next person.</p></div>
            <div className="institutional-sections">
              {page.sections.map((section) => (
                <article key={section.index} className="institutional-card">
                  <div className="institutional-card-top"><span>{section.index}</span><ShieldCheck size={17} /></div>
                  <h3>{section.title}</h3>
                  <p>{section.copy}</p>
                  <div className="tag-row">{section.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="institutional-proof section">
          <div className="container institutional-proof-grid">
            <div><div className="section-index">02 <span>/</span> Operating logic</div><div className="section-kicker">From statement to inspection</div><h2>Understand.<br /><em>Control. Verify. Prove.</em></h2><p>That sequence is the common language across the continuum. It is how research becomes a system, and how a system earns the right to become a product.</p></div>
            <div className="logic-stack"><div><span>01 / UNDERSTAND</span><b>Intent is clear.</b></div><div><span>02 / CONTROL</span><b>Execution is constrained.</b></div><div><span>03 / VERIFY</span><b>Every step is traceable.</b></div><div><span>04 / PROVE</span><b>Outcomes are inspectable.</b></div></div>
          </div>
        </section>

        <section className="institutional-next section">
          <div className="container"><div className="section-index">03 <span>/</span> Continue the route</div><div className="institutional-next-grid"><div><div className="section-kicker">The next governed step</div><h2>Keep moving<br /><em>through the system.</em></h2></div><div className="next-links">{links.map((link) => <a key={link.href} className="next-link" href={link.href}><span>{link.label}</span><ArrowUpRight size={17} /></a>)}</div></div></div>
        </section>
      </main>
    </SiteLayout>
  );
}
