import useSWR from "swr";
import { GetCurrencies } from "@/api/types";

const fetcher = (url: string) => fetch(url).then((res) => res.json());
const API = "https://api.cryptorank.io/v1/currencies/";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
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
