import { Currency } from "@/api/types";
import { convertCurrency } from "@/utils/convertCurrency";

describe("convertCurrency", () => {
  const firstCurrency: Currency = {
    id: 1,
    rank: 1,
    slug: "currency1",
    name: "Currency 1",
    symbol: "CUR1",
    category: "crypto",
    type: "coin",
    volume24hBase: 1000000,
    circulatingSupply: 5000000,
    totalSupply: 10000000,
    maxSupply: 15000000,
    values: {
      USD: {
        price: 1.2,
        volume24h: 2000000,
        high24h: 1.5,
        low24h: 1.0,
        marketCap: 3000000,
        percentChange24h: 5,
        percentChange7d: 10,
        percentChange30d: 15,
        percentChange3m: 20,
        percentChange6m: 25,
      },
    },
    lastUpdated: "2022-01-01",
    tokens: [],
  };

  const secondCurrency: Currency = {
    id: 2,
    rank: 2,
    slug: "currency2",
    name: "Currency 2",
    symbol: "CUR2",
    category: "crypto",
    type: "coin",
    volume24hBase: 2000000,
    circulatingSupply: 6000000,
    totalSupply: 12000000,
    maxSupply: 18000000,
    values: {
      USD: {
        price: 0.8,
        volume24h: 1500000,
        high24h: 1.0,
        low24h: 0.5,
        marketCap: 2500000,
        percentChange24h: -3,
        percentChange7d: -5,
        percentChange30d: -8,
        percentChange3m: -12,
        percentChange6m: -15,
      },
    },
    lastUpdated: "2022-01-01",
    tokens: [],
  };

  it("should convert the currency correctly", () => {
    const amount = "100";
    expect(convertCurrency(amount, firstCurrency, secondCurrency)).toBe("150");
  });

  it("should handle zero amount", () => {
    const amount = "0";
    expect(convertCurrency(amount, firstCurrency, secondCurrency)).toBe("0");
  });

  it("should handle negative amount", () => {
    const amount = "-50";
    expect(convertCurrency(amount, firstCurrency, secondCurrency)).toBe("-75");
  });
});
