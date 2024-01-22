import { getPrettyValueOfNumber } from "@/utils/formateNumber";

describe("getPrettyValueOfNumber", () => {
  it("should return empty string when value is undefined", () => {
    expect(getPrettyValueOfNumber(undefined)).toBe("");
  });

  it("should return the same value if it is less than 1000", () => {
    expect(getPrettyValueOfNumber("123")).toBe("123");
  });

  it("should return the value with two decimal places if it is greater than or equal to 1000 and less than 1 million", () => {
    expect(getPrettyValueOfNumber("123456")).toBe("123.46K");
  });

  it("should return the value with two decimal places and \"M\" suffix if it is greater than or equal to 1 million and less than 1 billion", () => {
    expect(getPrettyValueOfNumber("123456789")).toBe("123.46M");
  });

  it("should return the value with two decimal places and \"B\" suffix if it is greater than or equal to 1 billion and less than 1 trillion", () => {
    expect(getPrettyValueOfNumber("123456789012")).toBe("123.46B");
  });

  it("should return the value with two decimal places and \"T\" suffix if it is greater than or equal to 1 trillion", () => {
    expect(getPrettyValueOfNumber("123456789012345")).toBe("123.46T");
  });
});
