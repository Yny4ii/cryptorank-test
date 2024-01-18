"use client";
import styled from "styled-components";
import { BLACK, DARK_TURQUOISE } from "@/constants";

export const PaginationContainer = styled.ul`
  display: flex;
  list-style-type: none;
  gap: 26px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const PaginationItem = styled.li<{ $isActive?: boolean }>`
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
  padding: 6px;
  background-color: ${({ $isActive }) =>
    $isActive ? `${DARK_TURQUOISE}` : "none"};
  cursor: pointer;
  color: ${BLACK};
`;
