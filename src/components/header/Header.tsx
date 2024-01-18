"use client";
import React from "react";
import Link from "next/link";
import * as S from "./styles";

const Header = () => {
  return (
    <S.HeaderContainer>
      <Link href={"/converter"}>Converter</Link>
      <Link href={"/watchlist"}>Currencies</Link>
    </S.HeaderContainer>
  );
};

export default Header;
