import { describe, expect, it } from "vitest";
import { libraryRecords } from "./TechnicalLibrary";

describe("technical library evidence records", () => {
  it("contains direct entries for completed gem5, CXL-aware simulation, RTL, pre-hardware, and HC-CXL records", () => {
    expect(libraryRecords).toEqual(expect.arrayContaining([
      expect.objectContaining({ id: "ssdd-gem5-baseline", status: "COMPLETED / MODEL-SCOPED" }),
      expect.objectContaining({ id: "ssdd-controlled-matrix", status: "COMPLETED / MODEL-SCOPED" }),
      expect.objectContaining({ id: "ssdd-prehardware", status: "COMPLETED / MODEL-SCOPED" }),
      expect.objectContaining({ id: "ssdd-simcxl-limited", status: "COMPLETED / SIMULATION-ONLY" }),
      expect.objectContaining({ id: "ssdd-rtl-ssc", status: "COMPLETED / BOUNDED CONTRACT" }),
      expect.objectContaining({ id: "hc-cxl-reference", status: "REFERENCE ASSUMPTIONS / VALIDATION PENDING" }),
    ]));
  });

  it("keeps the model-scoped and research boundaries explicit in each record", () => {
    expect(libraryRecords.find((record) => record.id === "ssdd-gem5-baseline")?.boundary).toContain("not hardware validation");
    expect(libraryRecords.find((record) => record.id === "ssdd-controlled-matrix")?.boundary).toContain("does not measure physical memory latency");
    expect(libraryRecords.find((record) => record.id === "ssdd-prehardware")?.boundary).toContain("not a hardware");
    expect(libraryRecords.find((record) => record.id === "ssdd-prehardware")?.facts).toEqual(expect.arrayContaining([
      expect.objectContaining({ value: "100 / 100", label: "Python / Rust reference chain hashes" }),
      expect.objectContaining({ value: "9 / 9", label: "Q32.32 boundary outcomes" }),
    ]));
    expect(libraryRecords.find((record) => record.id === "ssdd-simcxl-limited")?.boundary).toContain("CXL-aware simulation evidence only");
    expect(libraryRecords.find((record) => record.id === "ssdd-simcxl-limited")?.boundary).toContain("does not establish physical CXL behavior");
    expect(libraryRecords.find((record) => record.id === "ssdd-rtl-ssc")?.boundary).toContain("not timing closure");
    expect(libraryRecords.find((record) => record.id === "ssdd-rtl-ssc")?.facts).toEqual(expect.arrayContaining([
      expect.objectContaining({ value: "128 / 128", label: "reference-vector batches accepted" }),
    ]));
    expect(libraryRecords.find((record) => record.id === "hc-cxl-reference")?.boundary).toContain("not measured hardware behavior");
  });
});
