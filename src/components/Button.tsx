import React from "react";
import { styled } from "styled-components"

interface ButtonProps {
  type?: "button" | "reset" | "submit";
  label?: string;
  width: string;
  style?: React.CSSProperties;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({
  label,
  type,
  width = '10vw',
  style,
  onClick
}) => {
  return (
    <StyledButton type={type} onClick={onClick} style={style} width={width}>
      {label}
    </StyledButton>
  )
}

const StyledButton = styled.button<{ width: string }>`
  width: ${(props) => props.width};
  height: 2rem;
  font-size: 1.4rem;
  font-family: 'Montserrat Variable', sans-serif;
  background-color: #fff0;
  border: 2px solid #DAB785;
  border-radius: 12px;
  transition: border-color ease-in-out .5s, color ease-in-out .5s, background-color ease-in-out .5s, width ease-in-out .7s, height ease-in-out .7s, margin ease-in-out .7s;
  margin: 1.5rem;

  &:hover {
    background-color: #9B1D20;
    border-color: #9B1D20;
    color: #fff;
    width: ${(props) => `calc(5vw + ${props.width})`};
    height: 2.5rem;
    cursor: pointer;
  }
`;

export default Button;
