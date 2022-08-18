import React from "react";
import { InputStyles } from "./Input.styles";

interface Props {
  value: string;
  onChange: Function;
}

const Input = ({ value, onChange }: Props) => {
  return (
    <InputStyles
      value={value}
      onChange={(e: React.BaseSyntheticEvent) => onChange(e)}
      width="90%"
      placeholder="Ingresa tu nombre"
    />
  );
};

export default Input;
