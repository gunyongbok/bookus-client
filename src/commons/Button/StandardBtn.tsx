import { styled } from "styled-components";
import React, { useState } from "react";

interface BtnProps {
  $background?: string;
  $color?: string;
  $disabled?: boolean;
  $border?: string;
  $width?: string; // Add width prop
  children?: React.ReactNode;
  onClick?: () => void;
  $clickedBackground?: string;
  $clickedColor?: string;
}

const Btn = styled.button<{
  $background?: string;
  $color?: string;
  $disabled?: boolean;
  $border?: string;
  $isClicked: boolean;
  $width?: string; // Add width prop
  $clickedBackground?: string;
  $clickedColor?: string;
}>`
  width: ${(props) => props.$width || "100%"}; // Set width
  height: 56px;
  border: ${(props) => props.$border || "none"};
  border-radius: 8px;
  text-align: center;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  background: ${(props) =>
    props.$isClicked
      ? props.$clickedBackground || "#83d0a1"
      : props.$background || "#FCFCFF"};
  color: ${(props) =>
    props.$isClicked
      ? props.$clickedColor || "#fcfcff"
      : props.$color || "#0F473F"};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};

  &:focus {
    background: ${(props) => props.$clickedBackground || "#83d0a1"};
    color: ${(props) => props.$clickedColor || "#fcfcff"};
  }
`;

const StandardBtn = ({
  $background,
  $color,
  $disabled,
  $border,
  $width, // Add width prop
  $clickedBackground,
  $clickedColor,
  children,
  onClick,
}: BtnProps) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
    onClick && onClick();
  };

  return (
    <Btn
      $clickedBackground={$clickedBackground}
      $clickedColor={$clickedColor}
      $background={$background}
      $color={$color}
      $disabled={$disabled}
      $border={$border}
      $width={$width}
      onClick={handleClick}
      $isClicked={isClicked}
    >
      {children}
    </Btn>
  );
};

export default StandardBtn;
