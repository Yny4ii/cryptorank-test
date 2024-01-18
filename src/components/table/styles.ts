import styled from "styled-components";
import { BLUE, WHITE } from "@/constants";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: max-content;
`;

export const StyledTable = styled.table`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: max-content;
`;

export const Thead = styled.thead`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: max-content;
  padding: 10px;
  border-radius: 10px;
  background: ${BLUE};
  color: ${WHITE};
`;

export const Th = styled.th`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 150px;
`;

export const HeadTr = styled.tr`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: max-content;
  gap: 20px;
`;

export const Tbody = styled.tbody`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: max-content;
`;

export const BodyTr = styled.tr`
  display: flex;
  flex-direction: row;
  justify-items: flex-start;
  align-items: center;
  border-radius: 10px;
  width: 100%;
  padding: 10px;
  gap: 20px;
  height: 80px;
`;

export const Td = styled.td`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 150px;
`;
