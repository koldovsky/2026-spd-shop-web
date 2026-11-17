import { describe, expect, it } from "vitest";
import { formatCents } from "./money";

describe("formatCents", () => {
  it("formats EUR cents", () => {
    expect(formatCents(8990, "EUR")).toBe("€89.90");
  });
});
