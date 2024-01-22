import { validate } from "@/utils/validate";

describe("validate", () => {
  it("should return the same value if it contains only numbers and dots", () => {
    expect(validate("123")).toBe("123");
    expect(validate("123.45")).toBe("123.45");
  });

  it("should remove non-numeric characters from the value", () => {
    expect(validate("12a3b")).toBe("123");
    expect(validate("1.2-3!")).toBe("1.23");
  });

  it("should remove extra dots and keep only one dot for decimal point", () => {
    expect(validate("12.34.56")).toBe("12.3456");
    expect(validate("12..34")).toBe("12.34");
  });

  it("should add leading zero if the value starts with a dot", () => {
    expect(validate(".123")).toBe("0.123");
    expect(validate(".")).toBe("0.");
  });
});
