"use client";
import React from "react";
import { useGetCurrencies } from "@/hooks/useGetCurrencies";
import Converter from "@/components/Converter/Converter";
import * as S from "./styles";

const Page = () => {
  const { data, isLoading, error } = useGetCurrencies(500, 0);
  return (
    <S.ConverterPageContainer>
      {data?.data && !isLoading && <Converter data={data.data} />}
      {isLoading && <div>Loading...</div>}
      {error && <div>Error</div>}
    </S.ConverterPageContainer>
  );
};

export default Page;
