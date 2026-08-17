import { describe, expect, it } from "vitest";
import { pageMap } from "./InstitutionalPage";

describe("institutional research evidence", () => {
  it("frames SSDD as a model-scoped simulation artifact", () => {
    const evidence = pageMap.ssdd.researchEvidence;

    expect(evidence?.status).toContain("MODEL-SCOPED");
    expect(evidence?.measures).toEqual(expect.arrayContaining([
      expect.objectContaining({ value: "5 / 5" }),
      expect.objectContaining({ value: "6 / 6" }),
      expect.objectContaining({ value: "ff05ec2371488ba1" }),
    ]));
    expect(evidence?.caveat).toContain("not hardware validation");
    expect(evidence?.libraryId).toBe("ssdd-controlled-matrix");
  });

  it("keeps HC-CXL explicitly in research and validation framing", () => {
    const page = pageMap["hc-cxl"];

    expect(page.eyebrow).toContain("Research rebuild");
    expect(page.researchEvidence?.status).toContain("VALIDATION PENDING");
    expect(page.visual?.src).toContain("HC-CXLdeterministicexecutionmodelinfographic");
    expect(page.researchEvidence?.libraryId).toBe("hc-cxl-reference");
  });

  it("names PayLock as the sole commercial offering in the institutional narrative", () => {
    expect(pageMap.about.sections[2]?.copy).toContain("PayLock is DS&D's commercial offering");
  });
});
