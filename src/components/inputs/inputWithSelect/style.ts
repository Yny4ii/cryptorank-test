"use client";
import styled from "styled-components";
import { DARK_DRAY } from "@/constants";

export const InputContainer = styled.div`
  display: flex;
  border-radius: 5px;
  border: 1px solid ${DARK_DRAY};
  position: relative;
  width: 100%;
`;

export const Separator = styled.div`
  width: 1px;
  background-color: ${DARK_DRAY};
  margin: 10px 0;
`;
export const SelectedCurrency = styled.div`
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  padding: 0 30px;
  width: 150px;
  overflow: hidden;
  max-height: 50px;
  gap: 12px;
  cursor: pointer;
`;
