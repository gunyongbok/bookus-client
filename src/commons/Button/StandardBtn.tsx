import { styled } from "styled-components";
import React, { useState } from "react";

interface BtnProps {
  $background?: string;
  $color?: string;
  $disabled?: boolean;
  $border?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

const Btn = styled.button<{
  $background?: string;
  $color?: string;
  $disabled?: boolean;
  $border?: string;
  $isClicked: boolean;
}>`
  width: 100%;
  height: 56px;
  border: ${(props) => props.$border || "none"};
  border-radius: 8px;
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  background: ${(props) =>
    props.$isClicked ? "#83d0a1" : props.$background || "#FCFCFF"};
  color: ${(props) =>
    props.$isClicked ? "#fcfcff" : props.$color || "#0F473F"};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};

  &:focus {
    background: #83d0a1;
    color: #fcfcff;
  }
`;

const StandardBtn = ({
  $background,
  $color,
  $disabled,
  $border,
  children,
  onClick,
}: BtnProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    onClick && onClick();
  };

  return (
    <Btn
      $background={$background}
      $color={$color}
      $disabled={$disabled}
      $border={$border}
      onClick={handleClick}
      $isClicked={isClicked}
    >
      {children}
    </Btn>
  );
};

export default StandardBtn;
