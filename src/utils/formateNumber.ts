import BigNumber from "bignumber.js";

const divideAndRound = (
  first: BigNumber,
  second: number,
  round: number
): string => {
  return first.dividedBy(second).decimalPlaces(round).toString();
};

export function getPrettyValueOfNumber(value: string | undefined): string {
  if (value === undefined) {
    return "";
  }

  const rounded =
    new BigNumber(value).toNumber() >= 1
      ? new BigNumber(value).decimalPlaces(2)
      : new BigNumber(value).decimalPlaces(4);

  if (rounded.isLessThan(1e3)) {
    return rounded.toString();
  }

  if (rounded.isGreaterThanOrEqualTo(1e3) && rounded.isLessThan(1e6)) {
    return divideAndRound(rounded, 1e3, 2) + "K";
  }

  if (rounded.isGreaterThanOrEqualTo(1e6) && rounded.isLessThan(1e9)) {
    return divideAndRound(rounded, 1e6, 2) + "M";
  }

  if (rounded.isGreaterThanOrEqualTo(1e9) && rounded.isLessThan(1e12)) {
    return divideAndRound(rounded, 1e9, 2) + "B";
  }

  return divideAndRound(rounded, 1e12, 2) + "T";
}
