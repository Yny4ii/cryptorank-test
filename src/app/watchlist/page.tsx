"use client";
import React from "react";
import { useGetCurrencies } from "@/hooks/useGetCurrencies";
import Pagination from "@/components/pagination/Pagination";
import Table from "@/components/table/Table";
import * as S from "./styles";
import { redirect } from "next/navigation";
import { PAGE_SIZE } from "@/constants";

const Page = ({ searchParams }: { searchParams: { page: string } }) => {
  if (+searchParams.page < 0) {
    redirect("/watchlist?page=1");
  }
  const page = +searchParams.page || 1;
  const { data, isLoading, error } = useGetCurrencies(
    PAGE_SIZE,
    page > 1 ? page * PAGE_SIZE : 0
  );
  return (
    <S.PageContainer>
      {data?.data && !isLoading && (
        <>
          <Table data={data.data} />
          <Pagination
            pageSize={PAGE_SIZE}
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
