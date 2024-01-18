"use client";
import React, { useState } from "react";
import { Currency } from "@/api/types";
import { validate } from "@/utils/validate";
import InputWithSelect from "@/components/inputs/inputWithSelect/InputWithSelect";
import SwapButton from "@/components/buttons/swapButton/SwapButton";
import { convertCurrency } from "@/utils/convertCurrency";
import { getPrettyValueOfNumber } from "@/utils/formateNumber";
import * as S from "./styles";

type ConverterProps = {
  data: Currency[];
};
const Converter = ({ data }: ConverterProps) => {
  const [value, setValue] = useState("0.1");
  const [firstCurrency, setFirstCurrency] = useState(data[0]);
  const [secondCurrency, setSecondCurrency] = useState(data[1]);

  const handleClickSwapButton = () => {
    const temp = firstCurrency;
    setFirstCurrency(secondCurrency);
    setSecondCurrency(temp);
  };
  const handleClickFirstSelect = (currency: Currency) => {
    setFirstCurrency(currency);
  };
  const handleChangeFirstInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(validate(e.target.value));
  };
  return (
    <S.ConverterContainer>
      <>
        <InputWithSelect
          onChange={handleChangeFirstInput}
          data={data}
          onClick={handleClickFirstSelect}
          value={value}
          currency={firstCurrency || data[0]}
        />
        <SwapButton onClick={handleClickSwapButton} />
        <InputWithSelect
          data={data}
          onClick={handleClickFirstSelect}
          value={getPrettyValueOfNumber(
            convertCurrency(value, firstCurrency, secondCurrency)
          )}
          currency={secondCurrency || data[1]}
          disabled={true}
        />
      </>
    </S.ConverterContainer>
  );
};

export default Converter;
