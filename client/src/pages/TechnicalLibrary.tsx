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
    id: "ssdd-controlled-matrix",
    index: "02",
    className: "SIMULATION ARTIFACT",
    status: "COMPLETED / MODEL-SCOPED",
    title: "SSDD controlled latency and fault matrix",
    copy: "The same five-stage, seven-engine reference workload was executed under 10 ns, 50 ns, and 100 ns fixed-memory-latency settings. Five 50 ns replays were accepted with the same canonical digest. A one-bit proof mutation at trace records 1, 18, and 35 was rejected in each of two repeated runs per position.",
    facts: [
      { value: "5 / 5", label: "matching 50 ns replays" },
      { value: "3", label: "fixed latency cases" },
      { value: "6 / 6", label: "proof mutations rejected" },
      { value: "ff05ec2371488ba1", label: "accepted replay digest" },
    ],
    boundary: "The matrix measures simulated ticks and validator outcomes for this fixed workload and configuration. It does not measure physical memory latency, actual CXL traffic, an operational fault rate, cryptographic strength, or end-to-end production resilience.",
    route: { href: "/ssdd", label: "Inspect the controlled SSDD matrix" },
  },
  {
    id: "ssdd-prehardware",
    index: "03",
    className: "REFERENCE VALIDATION",
    status: "COMPLETED / MODEL-SCOPED",
    title: "SSDD pre-hardware deterministic verification",
    copy: "A retained reference suite translated the supplied SSDD specification, implementation manual, and prototype roadmap into an ordering, 100-epoch replay, fault-containment, ledger-forensics, Q32.32, cross-language, scaling, and load record. It retains 8→128 logical-node and 1k→100k events/s-equivalent matrices with component timings; these are native-reference wall-clock and modeled-byte records, not network or hardware measurements. The native-reference suite and the earlier gem5 fixture remain separate, explicitly scoped evidence domains.",
    facts: [
      { value: "128 / 128", label: "random arrivals, one ordered batch" },
      { value: "100 / 100", label: "independent replay chain entries" },
      { value: "4 / 4", label: "ledger modifications detected" },
      { value: "4 / 4", label: "fault cases preserve last valid state" },
      { value: "100 / 100", label: "Python / Rust reference chain hashes" },
      { value: "9 / 9", label: "Q32.32 boundary outcomes" },
    ],
    boundary: "The suite exercises retained software references and modeled controls. It is not a hardware, firmware, CXL, NIC-bandwidth, cluster-resilience, security, or production-readiness result. The Rust comparison is a retained reference because no supplied Rust implementation was available; its agreement does not validate a production Rust runtime.",
    route: { href: "/ssdd", label: "Read SSDD pre-hardware framing" },
  },
  {
    id: "ssdd-validation-plan",
    index: "04",
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
    boundary: "The initial matrix has varied memory timing and injected controlled proof corruption; later experiments may extend scenario coverage, but each result remains tied to its stated simulator model and configuration. No simulator result becomes a physical HC-CXL claim by implication.",
    route: { href: "/ssdd", label: "Inspect the SSDD research file" },
  },
  {
    id: "hc-cxl-reference",
    index: "05",
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
    index: "06",
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
                <b>6</b>
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
