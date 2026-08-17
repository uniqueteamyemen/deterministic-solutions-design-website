import { ArrowLeft, ArrowUpRight, BookOpen, Check, ShieldCheck } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";

type LibraryRecord = {
  id: string;
  index: string;
  className: string;
  status: string;
  title: string;
  copy: string;
  facts: { value: string; label: string }[];
  boundary: string;
  route: { href: string; label: string };
};

export const libraryRecords: LibraryRecord[] = [
  {
    id: "ssdd-gem5-baseline",
    index: "01",
    className: "SIMULATION ARTIFACT",
    status: "COMPLETED / MODEL-SCOPED",
    title: "SSDD gem5 reference replay baseline",
    copy: "A portable five-stage, seven-engine logical workload was run twice in gem5 25.1.0.1 under the same X86 syscall-emulation configuration. The runs produced the same canonical replay output and an accepted reference-workload validation result.",
    facts: [
      { value: "2 / 2", label: "matching simulator runs" },
      { value: "35", label: "operations per run" },
      { value: "ff05ec2371488ba1", label: "matching replay digest" },
      { value: "308,777,000", label: "simulated ticks per run" },
    ],
    boundary: "This record demonstrates repeatability for the selected workload, compiler, gem5 revision, configuration, and inputs. It is not hardware validation, CXL traffic validation, security certification, or a production-readiness result.",
    route: { href: "/ssdd", label: "Read SSDD validation framing" },
  },
  {
    id: "ssdd-validation-plan",
    index: "02",
    className: "VALIDATION PLAN",
    status: "RESEARCH WORK / IN PROGRESS",
    title: "SSDD deterministic validation pathway",
    copy: "The research plan identifies software-facing invariants that can be modeled without representing unvalidated physical silicon behavior: fixed-point arithmetic, logical time, deterministic ordering, canonical serialization, hash-chain replay, bounded windows, and controlled fault injection.",
    facts: [
      { value: "Q32.32", label: "documented arithmetic model" },
      { value: "1,000", label: "node-scale simulation target" },
      { value: "4", label: "planned validation families" },
      { value: "REPLAY", label: "baseline experiment focus" },
    ],
    boundary: "Later experiments may vary memory timing or inject controlled ordering faults, but each result will remain tied to its stated simulator model and configuration. No simulator result becomes a physical HC-CXL claim by implication.",
    route: { href: "/ssdd", label: "Inspect the SSDD research file" },
  },
  {
    id: "hc-cxl-reference",
    index: "03",
    className: "RESEARCH REBUILD",
    status: "REFERENCE ASSUMPTIONS / VALIDATION PENDING",
    title: "HC-CXL v2.1R physical-governance reference",
    copy: "HC-CXL v2.1R begins from a frozen v2.0 baseline after the v2.1 failure analysis identified governance, lineage, reproducibility, and publication-pipeline failures. The current work is an explicit rebuild with testable reference assumptions, not an announcement of compliant hardware.",
    facts: [
      { value: "0.05", label: "amplitude reference envelope" },
      { value: "73 ps", label: "documented decision bound" },
      { value: "50 ns", label: "documented metastability gap" },
      { value: "5 × 7", label: "stages × engines reference matrix" },
    ],
    boundary: "The listed values are documented reference assumptions and recomputation rules awaiting empirical validation in the defined operating domain. They are not measured hardware behavior, silicon qualification, or a CXL compliance result.",
    route: { href: "/hc-cxl", label: "Read the HC-CXL research rebuild" },
  },
  {
    id: "evidence-boundaries",
    index: "04",
    className: "READINESS REGISTER",
    status: "PUBLIC POSITIONING / CURRENT",
    title: "Readiness and evidence boundaries",
    copy: "The DS&D continuum has intentionally different readiness states. PayLock is the commercial offering. SSDD is prototype- and validation-stage systems research. HC-CXL v2.1R is a research rebuild and physical-governance reference. The boundary travels with each record.",
    facts: [
      { value: "PAYLOCK", label: "commercial offering" },
      { value: "SSDD", label: "prototype / validation stage" },
      { value: "HC-CXL", label: "research rebuild" },
      { value: "gem5", label: "simulation evidence only" },
    ],
    boundary: "This library provides public summaries of source-backed research records. The original technical source package remains controlled research material and is not represented here as a public download or an independently verified publication.",
    route: { href: "/evidence", label: "Return to the evidence register" },
  },
];

export default function TechnicalLibrary() {
  return (
    <SiteLayout>
      <main className="library-page">
        <section className="library-hero">
          <div className="institutional-grid" aria-hidden="true" />
          <div className="container library-hero-inner">
            <div className="institutional-meta"><span className="status-dot" /> Evidence / Technical library / Readable records</div>
            <a className="back-link" href="/evidence"><ArrowLeft size={14} /> DS&D / Evidence</a>
            <div className="library-hero-grid">
              <div>
                <h1>Claims need a<br /><em>record.</em></h1>
                <p>The technical library turns the current research evidence into linkable public records. Each entry states what was observed, where its boundary ends, and which institutional file provides the surrounding context.</p>
              </div>
              <div className="library-signal">
                <BookOpen size={20} />
                <span>PUBLIC RECORD INDEX</span>
                <b>4</b>
                <small>source-backed entries</small>
              </div>
            </div>
          </div>
        </section>

        <section className="library-register section" aria-label="Technical library records">
          <div className="container">
            <div className="section-index">01 <span>/</span> Record index</div>
            <div className="library-register-intro"><div><div className="section-kicker">Evidence without category confusion</div><h2>Open the record.<br /><em>Keep the boundary.</em></h2></div><p>Every entry is intentionally labeled as a simulation artifact, validation plan, research rebuild, or readiness register. The library does not convert an internal source assumption into a public performance claim.</p></div>
            <div className="library-records">
              {libraryRecords.map((record) => (
                <article className="library-record" id={record.id} key={record.id}>
                  <div className="library-record-head">
                    <div><span>{record.index} / {record.className}</span><h3>{record.title}</h3></div>
                    <div className="library-record-status"><Check size={14} /> {record.status}</div>
                  </div>
                  <div className="library-record-body"><p>{record.copy}</p><div className="library-facts">{record.facts.map((fact) => <div key={fact.label}><b>{fact.value}</b><span>{fact.label}</span></div>)}</div></div>
                  <div className="library-boundary"><ShieldCheck size={18} /><p>{record.boundary}</p></div>
                  <a className="library-route" href={record.route.href}>{record.route.label} <ArrowUpRight size={16} /></a>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </SiteLayout>
  );
}
