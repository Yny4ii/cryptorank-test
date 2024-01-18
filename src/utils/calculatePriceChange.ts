import BigNumber from "bignumber.js";

export const calculatePriceChange = (
  currentPrice: BigNumber,
  percentChange: number
): string => {
  if (!percentChange) {
    return currentPrice.toString();
  }
  const percentChangeDecimal = new BigNumber(percentChange).dividedBy(100);
  return currentPrice
    .dividedBy(new BigNumber(1).plus(percentChangeDecimal))
    .toString();
};
