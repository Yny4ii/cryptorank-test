"use client";
import React, { useRef, useState } from "react";
import DefaultInput from "@/components/inputs/defaultInput/DefaultInput";
import * as S from "./style";
import Select from "@/components/select/Select";
import { Currency } from "@/api/types";
import { useOutsideClick } from "@/hooks/useOutsideClick";

type InputWithSelectType = {
  currency?: Currency;
  data: Currency[];
  onClick: (e: Currency) => void;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

const InputWithSelect = ({
  currency,
  data,
  onClick,
  value,
  onChange,
  disabled,
}: InputWithSelectType) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);
  const handleClickSelectItem = (e: Currency) => {
    onClick(e);
    setIsOpen(false);
  };
  const handleOutsideClick = () => {
    setTimeout(() => {
      if (isOpen) setIsOpen(false);
    }, 0);
  };

  useOutsideClick(selectRef, handleOutsideClick);

  return (
    <S.InputContainer>
      <DefaultInput
        type={"text"}
        value={value}
        onChange={onChange ? (e) => onChange(e) : undefined}
        disabled={disabled}
      />
      <S.Separator />
      <S.SelectedCurrency onClick={() => setIsOpen(true)}>
        {currency?.symbol?.toUpperCase()}
      </S.SelectedCurrency>
      {isOpen && (
        <div ref={selectRef}>
          <Select currencies={data} onClick={handleClickSelectItem} />
        </div>
      )}
    </S.InputContainer>
  );
};

export default InputWithSelect;
