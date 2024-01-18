"use client";
import React from "react";
import * as S from "./styles";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { DOTS, usePagination } from "@/hooks/usePagination";

interface IPaginationProps {
  totalCount: number;
  currentPage: number;
  siblingCount?: number;
  pageSize: number;
}

const Pagination = ({
  currentPage,
  pageSize,
  totalCount,
  siblingCount = 1,
}: IPaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const onPageChange = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    const query = params.toString();
    router.push(pathname + "?" + query);
  };

  if (currentPage === 0 || !paginationRange || paginationRange.length < 2) {
    return null;
  }

  return (
    <S.PaginationContainer>
      {paginationRange?.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <S.PaginationItem key={pageNumber}>{DOTS}</S.PaginationItem>;
        }
        return (
          <S.PaginationItem
            key={pageNumber}
            onClick={() => onPageChange(Number(pageNumber))}
            $isActive={pageNumber === currentPage}
          >
            {pageNumber}
          </S.PaginationItem>
        );
      })}
    </S.PaginationContainer>
  );
};
export default Pagination;
