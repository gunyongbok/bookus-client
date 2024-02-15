// IndividualState.tsx
import React from "react";
import styled from "styled-components";

interface IndividualStateProps {
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const IndividualStateContainer = styled.div<{ $isActive: boolean }>`
  width: fit-content;
  height: 34px;
  padding: 8px 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${(props) => (props.$isActive ? "#83d0a1" : "#e9f6ee")};
  color: ${(props) => (props.$isActive ? "#fcfcff" : "#4ca771")};
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #83d0a1;
    color: #fcfcff;
  }
`;

const SelectBookState: React.FC<IndividualStateProps> = ({
  isActive,
  onClick,
  children,
}) => {
  return (
    <IndividualStateContainer $isActive={isActive} onClick={onClick}>
      {children}
    </IndividualStateContainer>
  );
};

export default SelectBookState;
