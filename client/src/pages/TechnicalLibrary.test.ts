import { describe, expect, it } from "vitest";
import { libraryRecords } from "./TechnicalLibrary";

describe("technical library evidence records", () => {
  it("contains direct entries for the gem5 baseline, controlled matrix, and HC-CXL reference", () => {
    expect(libraryRecords).toEqual(expect.arrayContaining([
      expect.objectContaining({ id: "ssdd-gem5-baseline", status: "COMPLETED / MODEL-SCOPED" }),
      expect.objectContaining({ id: "ssdd-controlled-matrix", status: "COMPLETED / MODEL-SCOPED" }),
      expect.objectContaining({ id: "hc-cxl-reference", status: "REFERENCE ASSUMPTIONS / VALIDATION PENDING" }),
    ]));
  });

  it("keeps the model-scoped and research boundaries explicit in each record", () => {
    expect(libraryRecords.find((record) => record.id === "ssdd-gem5-baseline")?.boundary).toContain("not hardware validation");
    expect(libraryRecords.find((record) => record.id === "ssdd-controlled-matrix")?.boundary).toContain("does not measure physical memory latency");
    expect(libraryRecords.find((record) => record.id === "hc-cxl-reference")?.boundary).toContain("not measured hardware behavior");
  });
});
