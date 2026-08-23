import { describe, expect, it } from "vitest";
import { detailSteps, evidencePrinciples, portfolio, primaryNavigation } from "./Home";

describe("DS&D Reference Mark homepage", () => {
  it("keeps the method in a deliberate notice-to-action order", () => {
    expect(detailSteps.map((step) => step.label)).toEqual(["Notice", "Name", "Reference", "Act"]);
  });

  it("keeps PayLock separate from payment processing and preserves research boundaries", () => {
    expect(portfolio[0]).toMatchObject({ name: "PayLock", readiness: "Product direction", href: "/paylock" });
    expect(portfolio[0]?.copy).toContain("does not create a new payment system");
    expect(portfolio[1]?.copy).toContain("does not claim to eliminate jitter or accelerate latency");
    expect(portfolio[2]?.copy).toContain("not presented as hardware qualification");
  });

  it("keeps evidence language explicit and public navigation reachable", () => {
    expect(evidencePrinciples.map((item) => item.title)).toEqual(["What we know", "What remains open", "What can happen now"]);
    expect(primaryNavigation.map((item) => item.href)).toEqual(["#method", "#work", "#evidence", "#contact"]);
  });
});
