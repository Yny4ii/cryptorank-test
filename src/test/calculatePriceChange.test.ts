import BigNumber from "bignumber.js";
import { calculatePriceChange } from "@/utils/calculatePriceChange";

describe("calculatePriceChange", () => {
  it("should return the same price if percentChange is 0", () => {
    const currentPrice = new BigNumber(100);
    const percentChange = 0;
    expect(calculatePriceChange(currentPrice, percentChange)).toBe("100");
  });

  it("should calculate the price decrease correctly", () => {
    const currentPrice = new BigNumber(100);
    const percentChange = -10;
    expect(calculatePriceChange(currentPrice, percentChange)).toBe(
      "111.11111111111111111111"
    );
  });

  it("should calculate the price increase correctly", () => {
    const currentPrice = new BigNumber(100);
    const percentChange = 10;
    expect(calculatePriceChange(currentPrice, percentChange)).toBe(
      "90.90909090909090909091"
    );
  });
});
