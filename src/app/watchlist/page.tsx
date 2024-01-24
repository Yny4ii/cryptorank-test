"use client";
import React from "react";
import { useGetCurrencies } from "@/hooks/useGetCurrencies";
import Pagination from "@/components/pagination/Pagination";
import Table from "@/components/table/Table";
import * as S from "./styles";
import { redirect } from "next/navigation";

const Page = ({ searchParams }: { searchParams: { page: string } }) => {
  if (+searchParams.page < 0) {
    redirect("/watchlist?page=1");
  }
  const page = +searchParams.page || 1;
  const { data, isLoading, error } = useGetCurrencies(
    10,
    page > 1 ? page * 10 : 0
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
