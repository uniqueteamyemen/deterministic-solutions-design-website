import { describe, expect, it } from "vitest";
import { portfolio, primaryNavigation } from "./Home";

describe("DS&D homepage portfolio framing", () => {
  it("keeps PayLock first as the commercial product", () => {
    expect(portfolio[0]).toMatchObject({ name: "PayLock", readiness: "Commercial product", href: "/paylock" });
    expect(portfolio[0]?.copy).toContain("without holding funds or processing payments");
  });

  it("retains distinct validation and research boundaries", () => {
    expect(portfolio[1]).toMatchObject({ name: "SSDD", readiness: "Engineering validation" });
    expect(portfolio[1]?.copy).toContain("model-scoped and pre-hardware");
    expect(portfolio[2]).toMatchObject({ name: "HC-CXL", readiness: "Research programme" });
    expect(portfolio[2]?.copy).toContain("without claiming silicon qualification");
  });

  it("exposes the complete institutional navigation with an emphasized PayLock route", () => {
    expect(primaryNavigation.map((item) => item.href)).toEqual(["#portfolio", "/evidence", "/technical-library", "/about", "/paylock"]);
    expect(primaryNavigation.at(-1)).toMatchObject({ label: "PayLock", primary: true });
  });
});
