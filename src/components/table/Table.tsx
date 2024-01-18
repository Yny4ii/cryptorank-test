"use client";
import React from "react";
import * as S from "./styles";
import { Currency } from "@/api/types";
import { calculatePriceChange } from "@/utils/calculatePriceChange";
import BigNumber from "bignumber.js";
import { getPrettyValueOfNumber } from "@/utils/formateNumber";

type ITableProps = {
  data: Currency[];
};
const Table = ({ data }: ITableProps) => {
  console.log(data);
  return (
    <S.TableContainer>
      <S.StyledTable>
        <S.Thead>
          <S.HeadTr>
            <S.Th>Name</S.Th>
            <S.Th>Price USD</S.Th>
            <S.Th>Circulating Supply</S.Th>
            <S.Th>Market Cap</S.Th>
            <S.Th>Category</S.Th>
            <S.Th>Price 24h</S.Th>
            <S.Th>Price 7d</S.Th>
            <S.Th>Price 30d</S.Th>
            <S.Th>Price 3m</S.Th>
            <S.Th>Price 6m</S.Th>
          </S.HeadTr>
        </S.Thead>
        <S.Tbody>
          {data.map((e) => (
            <S.BodyTr key={e.id}>
              <S.Td>{e.name}</S.Td>
              <S.Td>
                ${getPrettyValueOfNumber(e.values.USD.price.toString())}
              </S.Td>
              <S.Td>
                {getPrettyValueOfNumber(e.circulatingSupply?.toString()) ||
                  "---"}
              </S.Td>
              <S.Td>
                ${getPrettyValueOfNumber(e.values.USD.marketCap.toString())}
              </S.Td>
              <S.Td>{e.category}</S.Td>
              <S.Td>
                $
                {getPrettyValueOfNumber(
                  calculatePriceChange(
                    new BigNumber(e.values.USD.price),
                    e.values.USD.percentChange24h
                  ).toString()
                )}
              </S.Td>
              <S.Td>
                $
                {getPrettyValueOfNumber(
                  calculatePriceChange(
                    new BigNumber(e.values.USD.price),
                    e.values.USD.percentChange7d
                  ).toString()
                )}
              </S.Td>
              <S.Td>
                $
                {getPrettyValueOfNumber(
                  calculatePriceChange(
                    new BigNumber(e.values.USD.price),
                    e.values.USD.percentChange30d
                  ).toString()
                )}
              </S.Td>
              <S.Td>
                $
                {getPrettyValueOfNumber(
                  calculatePriceChange(
                    new BigNumber(e.values.USD.price),
                    e.values.USD.percentChange3m
                  ).toString()
                )}
              </S.Td>
              <S.Td>
                $
                {getPrettyValueOfNumber(
                  calculatePriceChange(
                    new BigNumber(e.values.USD.price),
                    e.values.USD.percentChange6m
                  ).toString()
                )}
              </S.Td>
            </S.BodyTr>
          ))}
        </S.Tbody>
      </S.StyledTable>
    </S.TableContainer>
  );
};

export default Table;
