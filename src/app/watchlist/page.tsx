"use client";
import React from "react";
import { useGetCurrencies } from "@/hooks/useGetCurrencies";
import Pagination from "@/components/pagination/Pagination";
import Table from "@/components/table/Table";
import * as S from "./styles";

const Page = ({ searchParams }: { searchParams: { page: string } }) => {
  const { data, isLoading, error } = useGetCurrencies(
    10,
    (+searchParams.page || 1 - 1) * 10
  );
  return (
    <S.PageContainer>
      {data?.data && !isLoading && (
        <>
          <Table data={data.data} />
          <Pagination
            pageSize={10}
            totalCount={data.meta.count}
            siblingCount={5}
            currentPage={+searchParams.page || 1}
          />
        </>
      )}
      {isLoading && <div>Loading...</div>}
      {error && <div>Error</div>}
    </S.PageContainer>
  );
};

export default Page;
