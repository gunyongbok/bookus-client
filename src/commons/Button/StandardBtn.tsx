import { styled } from "styled-components";
import React from "react";

interface BtnProps {
  $background?: string;
  $color?: string;
  $disabled?: boolean;
  $border?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Btn = styled.button<BtnProps>`
  width: 100%;
  height: 56px;
  border: ${(props) => props.$border || "none"};
  border-radius: 8px;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  background: ${(props) => props.$background || "#FCFCFF"};
  color: ${(props) => props.$color || "#0F473F"};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
`;

const StandardBtn = ({
  $background,
  $color,
  $disabled,
  $border,
  children,
  onClick,
}: BtnProps) => {
  return (
    <Btn
      $background={$background}
      $color={$color}
      $disabled={$disabled}
      $border={$border}
      onClick={onClick}
    >
      {children}
    </Btn>
  );
};

export default StandardBtn;
