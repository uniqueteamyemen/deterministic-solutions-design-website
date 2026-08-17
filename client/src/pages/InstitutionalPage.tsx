import { ArrowLeft, ArrowRight, ArrowUpRight, Check, ExternalLink, Layers3, Menu, ShieldCheck, X } from "lucide-react";
import { useState } from "react";
import SiteLayout from "@/components/SiteLayout";
import InquiryForm from "@/components/InquiryForm";

type PageKey = "hc-cxl" | "ssdd" | "evidence" | "about" | "contact";

type PageConfig = {
  key: PageKey;
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  label: string;
  sections: { index: string; title: string; copy: string; tags: string[] }[];
  visual?: { src: string; alt: string; caption: string };
  researchEvidence?: {
    eyebrow: string;
    status: string;
    title: React.ReactNode;
    copy: string;
    measures: { value: string; label: string }[];
    caveat: string;
    libraryId: string;
  };
};

export const pageMap: Record<PageKey, PageConfig> = {
  "hc-cxl": {
    key: "hc-cxl",
    eyebrow: "Research rebuild / HC-CXL v2.1R / Physical governance reference",
    title: <>Govern the execution<br /><em>envelope.</em></>,
    intro: "HC-CXL v2.1R is a research rebuild that turns a documented design lineage into a testable reference layer for amplitude, timing, stability, and throughput governance. Its constants are reference assumptions pending empirical validation—not claims of silicon qualification.",
    label: "Research rebuild",
    sections: [
      { index: "01", title: "A frozen lineage, rebuilt visibly.", copy: "The v2.1 failure analysis records governance, lineage, reproducibility, and publication-pipeline failures. v2.1R therefore begins from a frozen v2.0 baseline and makes the rebuild boundary explicit rather than concealing it.", tags: ["Governance lineage", "Rebuild", "Reproducibility"] },
      { index: "02", title: "A bounded reference envelope.", copy: "The physical-justification record specifies a 0.05 amplitude envelope, a 73 ps decision bound, a 50 ns metastability gap, and a five-stage, seven-engine operational matrix. These are documented reference assumptions and recomputation rules, pending empirical validation in the defined domain.", tags: ["Timing", "Stability", "Throughput"] },
      { index: "03", title: "Validation comes before assertion.", copy: "The research file provides a governed starting point for simulation, instrumentation, and future hardware-facing work. It is not a declaration of CXL compliance, physical performance, silicon readiness, or production deployment.", tags: ["Research rebuild", "Test design", "Boundaries"] },
    ],
    visual: {
      src: "/manus-storage/HC-CXLdeterministicexecutionmodelinfographic_23c090b5.png",
      alt: "DS&D supplied infographic describing the HC-CXL deterministic execution model.",
      caption: "HC-CXL deterministic execution model. The graphic is a supplied research artifact; its numerical assumptions remain subject to empirical validation.",
    },
    researchEvidence: {
      eyebrow: "Reference model / validation status",
      status: "REFERENCE ASSUMPTIONS / EMPIRICAL VALIDATION PENDING",
      title: <>A research file with<br /><em>its limits intact.</em></>,
      copy: "HC-CXL v2.1R records a physical-governance reference to be recomputed and tested. It does not represent a hardware measurement, a certified CXL implementation, or an independently verified performance result.",
      measures: [
        { value: "0.05", label: "amplitude reference envelope" },
        { value: "73 ps", label: "documented decision bound" },
        { value: "50 ns", label: "documented metastability gap" },
        { value: "5 × 7", label: "stages × engines reference matrix" },
      ],
      caveat: "Interpret these values as design-reference assumptions from the supplied technical record, not as measured hardware behavior.",
      libraryId: "hc-cxl-reference",
    },
  },
  ssdd: {
    key: "ssdd",
    eyebrow: "Systems research / SSDD / Deterministic architecture",
    title: <>Make execution<br /><em>replayable.</em></>,
    intro: "SSDD is a prototype- and validation-stage architecture for deterministic, observable execution. Its technical record defines constrained arithmetic, canonical ordering, a sidecar-and-furnace topology, and a ledgered replay path for controlled research scenarios.",
    label: "Validation file",
    sections: [
      { index: "01", title: "A canonical state path.", copy: "The implementation record describes Q32.32 fixed-point arithmetic, cycle-based logical time, canonical serialization, deterministic seed derivation, and sidecar ordering by structural dimension, enterprise type, and sequence. The aim is an execution path that can be inspected and replayed.", tags: ["Q32.32", "Canonical order", "Replay"] },
      { index: "02", title: "Sidecar, furnaces, ledger.", copy: "The architecture maps compute nodes through a Sovereign Sidecar, aggregation furnaces, a fusion furnace, and a cryptographic ledger. These are documented prototype concepts for bounded processing and evidence-bearing state, not an announced production runtime.", tags: ["Sovereign Sidecar", "Furnaces", "Ledger"] },
      { index: "03", title: "A validation program—not a verdict.", copy: "The roadmap identifies deterministic replay, convergence, bounded decision windows, cross-language hash matching, and a 1,000-node simulation target as validation objectives. The work is deliberately framed as prototype testing rather than delivered production performance.", tags: ["Test scenarios", "Simulation", "Prototype"] },
    ],
    researchEvidence: {
      eyebrow: "Pre-hardware record / retained reference + gem5",
      status: "MODEL-SCOPED / ORDERING + REPLAY + FAULT CONTAINMENT",
      title: <>A repeatable record,<br /><em>not a hardware claim.</em></>,
      copy: "The pre-hardware reference record completed 128 randomized SSC-arrival permutations, two independent 100-epoch replays with full-chain equality, four ledger-tamper checks, four fault-containment cases without a new commit, a Python/Rust reference-chain comparison, and Q32.32 boundary checks. It also retains an 8→128 logical-node and 1k→100k events/s-equivalent matrix. It sits beside—not inside—the existing fixed-latency gem5 fixture, and neither record represents hardware behavior.",
      measures: [
        { value: "128 / 128", label: "random arrivals, same SSC batch" },
        { value: "100 / 100", label: "independent replay chain entries" },
        { value: "4 / 4", label: "ledger tamper cases detected" },
        { value: "4 / 4", label: "modeled faults preserve last valid state" },
        { value: "100 / 100", label: "Python / Rust reference-chain hashes" },
        { value: "9 / 9", label: "Q32.32 boundary cases" },
        { value: "8 → 128", label: "logical-node matrix" },
      ],
      caveat: "The native reference and gem5 fixture are separate model-scoped records. They are not hardware validation, CXL traffic validation, certification, comprehensive distributed-fault coverage, NIC bandwidth measurement, or a production-readiness result.",
      libraryId: "ssdd-prehardware",
    },
  },
  evidence: {
    key: "evidence",
    eyebrow: "Evidence / Inspection surfaces / Runtime records",
    title: <>The work is real<br /><em>when it can be inspected.</em></>,
    intro: "Evidence is not a decorative section of the site. It is the operating discipline behind the work: records, demonstrations, source material, and explicit boundaries that let another person challenge what was built—and distinguish a product from a research result.",
    label: "Evidence register",
    sections: [
      { index: "01", title: "Simulation and reference records.", copy: "The SSDD evidence now separates a fixed-latency gem5 fixture from a retained pre-hardware reference record. The latter contains 128 randomized-order cases, independent 100-epoch full-chain replay, four modeled fault-containment cases, and four ledger-forensic checks. Both preserve their stated model boundaries.", tags: ["gem5", "Replay", "Model-scoped"] },
      { index: "02", title: "Research source files.", copy: "Specifications, implementation guidance, physical-justification notes, and failure analyses define the intended layers and their current boundaries. They document research assumptions; they do not substitute for independent validation.", tags: ["Specifications", "Lineage", "Research"] },
      { index: "03", title: "Product documentation.", copy: "PayLock is the DS&D initiative positioned for commercial market use. Its product material explains the governed execution layer while preserving its non-custodial boundary.", tags: ["PayLock", "Product", "Governance"] },
      { index: "04", title: "Explicit boundaries.", copy: "SSDD remains prototype and validation-stage work. HC-CXL v2.1R remains a research rebuild. PayLock does not hold, process, or control funds. These limits travel with the claim.", tags: ["Scope", "Limits", "Readiness"] },
    ],
    researchEvidence: {
      eyebrow: "Research evidence register / SSDD",
      status: "MODEL-SCOPED / NOT HARDWARE CERTIFICATION",
      title: <>The expanded validation record<br /><em>keeps its scope.</em></>,
      copy: "The expanded SSDD record separates simulator observations from retained-reference validation. It preserves the gem5 latency matrix while adding randomized-order, full-chain replay, ledger-forensic, fault-containment, cross-language, scaling, load, and Q32.32 reference checks. The retained matrices cover 8→128 logical nodes and 1k→100k events/s-equivalent inputs with component times and modeled bytes, all within explicit software-reference limitations.",
      measures: [
        { value: "128 / 128", label: "random arrival permutations" },
        { value: "100 / 100", label: "independent replay chain entries" },
        { value: "4 / 4", label: "ledger modifications detected" },
        { value: "9 / 9", label: "Q32.32 boundary cases" },
        { value: "100 / 100", label: "Python / Rust reference chain hashes" },
        { value: "8 → 128", label: "logical-node matrix" },
      ],
      caveat: "The observed outcomes support retained-reference repeatability and bounded controls, alongside a separate gem5 fixture. They must not be generalized to physical HC-CXL behavior, CXL hardware traffic, security certification, distributed fault tolerance, or production deployment.",
      libraryId: "ssdd-prehardware",
    },
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
      { index: "03", title: "One commercial offering, clear boundaries.", copy: "PayLock is DS&D's commercial offering. SSDD and HC-CXL are research and validation-stage initiatives that inform the practice's proof-first direction, without being represented as production dependencies of PayLock.", tags: ["PayLock", "Research stack", "Boundaries"] },
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
  "hc-cxl": [{ href: "/ssdd", label: "Continue to SSDD" }, { href: "/technical-library#hc-cxl-reference", label: "Open technical library" }, { href: "/about", label: "Read about DS&D" }],
  ssdd: [{ href: "/paylock", label: "See PayLock in production" }, { href: "/technical-library#ssdd-prehardware", label: "Open technical library" }, { href: "/evidence", label: "Inspect evidence" }],
  evidence: [{ href: "/technical-library#ssdd-prehardware", label: "Open technical library" }, { href: "/paylock", label: "Inspect PayLock evidence" }, { href: "/contact", label: "Discuss an integration" }],
  about: [{ href: "/hc-cxl", label: "Explore HC-CXL" }, { href: "/ssdd", label: "Explore SSDD" }],
  contact: [{ href: "mailto:baker@deterministicsolutionsdesign.com", label: "Email the team" }, { href: "/paylock", label: "Review PayLock" }],
};

export default function InstitutionalPage() {
  const path = window.location.pathname.replace(/^\//, "") as PageKey;
  const page = pageMap[path] ?? pageMap.about;
  const [menuOpen, setMenuOpen] = useState(false);
  const links = nextLinks[page.key];
  const signalReadout = page.researchEvidence?.status ?? (page.key === "evidence" ? "EVIDENCE_READY" : "STATE_OBSERVABLE");

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
                <div className="signal-readout"><Check size={15} /> {signalReadout}</div>
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

        {page.visual && (
          <section className="institutional-visual section" aria-label="Research visual artifact">
            <div className="container institutional-visual-grid">
              <div className="institutional-visual-intro">
                <div className="section-index">02 <span>/</span> Supplied research artifact</div>
                <div className="section-kicker">Execution-model reference</div>
                <h2>See the<br /><em>model boundary.</em></h2>
                <p>{page.visual.caption}</p>
              </div>
              <figure className="institutional-figure">
                <img src={page.visual.src} alt={page.visual.alt} loading="lazy" />
                <figcaption>{page.visual.caption}</figcaption>
              </figure>
            </div>
          </section>
        )}

        {page.researchEvidence && (
          <section className="institutional-evidence section" aria-label="Research evidence and scope">
            <div className="container institutional-evidence-grid">
              <div>
                <div className="section-index">{page.visual ? "03" : "02"} <span>/</span> {page.researchEvidence.eyebrow}</div>
                <div className="evidence-status"><Check size={14} /> {page.researchEvidence.status}</div>
                <h2>{page.researchEvidence.title}</h2>
                <p>{page.researchEvidence.copy}</p>
              </div>
              <div className="evidence-detail">
                <div className="evidence-measures">
                  {page.researchEvidence.measures.map((measure) => (
                    <div className="evidence-measure" key={measure.label}>
                      <b>{measure.value}</b>
                      <span>{measure.label}</span>
                    </div>
                  ))}
                </div>
                <div className="evidence-caveat"><ShieldCheck size={18} /><p>{page.researchEvidence.caveat}</p></div>
                <a className="evidence-library-link" href={`/technical-library#${page.researchEvidence.libraryId}`}>Open the technical library <ArrowUpRight size={15} /></a>
              </div>
            </div>
          </section>
        )}

        {page.key === "contact" && <InquiryForm />}

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
