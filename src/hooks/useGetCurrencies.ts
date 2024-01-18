import useSWR from "swr";
import { GetCurrencies } from "@/api/types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const API = "https://api.cryptorank.io/v1/currencies/";
const API_KEY = "9f25a746705f0ac50d0d7a3c2ad2c2bfd82079004491ebb51e3fa337ba81";
export const useGetCurrencies = (limit?: number, offset?: number) => {
  const { data, error, isLoading } = useSWR<GetCurrencies>(
    `${API}?api_key=${API_KEY}&limit=${limit}&offset=${offset}`,
    fetcher
  );
  return {
    data,
    error,
    isLoading,
  };
};
