import { Currency } from "@/api/types";
import BigNumber from "bignumber.js";

export const convertCurrency = (
  amount: string,
  firstCurrency: Currency,
  secondCurrency: Currency
) => {
  const exchangeRate = new BigNumber(firstCurrency.values.USD.price).dividedBy(
    new BigNumber(secondCurrency.values.USD.price)
  );
  return exchangeRate.multipliedBy(+amount).toString();
};
