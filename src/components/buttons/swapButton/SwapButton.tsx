"use client";
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import * as S from "./styles";
import SwapIcon from "@/icons/SwapIcon";

type SwapButtonType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const SwapButton = ({ ...props }: SwapButtonType) => {
  return (
    <S.ButtonContainer {...props}>
      <SwapIcon />
    </S.ButtonContainer>
  );
};

export default SwapButton;