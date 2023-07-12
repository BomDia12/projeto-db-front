import React from "react";
import { styled } from "styled-components";

const StyledInput = styled.input`
  border: 2px solid #DAB785;
  width: 30vw;
  height: 2rem;
  border-radius: 10px;
  font-size: 1.2rem;
  text-align: center;
  font-family: 'Montserrat Variable', sans-serif;
  margin: 0.2rem 0;
  transition: all ease-in-out .7s;

  &:hover,
  &:focus {
    border: 2px solid #9B1D20;
    width: 40vw;
    outline: 0;
    height: 2.5rem;
    font-size: 1.3rem;
  }
`;

interface InputProps {
  type?: string;
  style?: object;
  placeholder?: string;
  value?: string;
  setValue(value: string): void;
}

const Input = ({
  type,
  style,
  placeholder,
  value,
  setValue
}: InputProps) => {
  return (
    <StyledInput
      type={type}
      style={style}
      placeholder={placeholder}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
    />
  )
}

export default Input