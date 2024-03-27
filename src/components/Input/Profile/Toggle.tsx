import React from "react";
import styled from "styled-components";

// Styled components
const ToggleLeft = styled.span`
  display: block;
  width: 36px;
  height: 20px;
  padding: 0;
  box-sizing: border-box;
  background-color: #83d0a1;
`;

const ToggleRight = styled.span`
  /* display: block; */
  width: 50%;
  height: 36px;
  padding: 0;
  box-sizing: border-box;
  background-color: #bbb;
`;

const ToggleSwitchContainer = styled.div`
  position: relative;
  width: 36px;
  height: 20px;
`;

const ToggleCheckbox = styled.input`
  display: none;
`;

const ToggleLabel = styled.label`
  display: inline-block;
  position: relative;
  width: 60px;
  height: 36px;
`;

const ToggleInner = styled.span<{ isChecked: boolean }>`
  display: block;
  width: 200%;
  background-color: yellow;
  margin-left: ${({ isChecked }) => (isChecked ? "0" : "-100%")};
  transition: margin-left 0.3s ease-in;
`;

const ToggleSwitch = styled.span`
  display: block;
  width: 24px;
  margin: 5px;
  background: #fff;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 40px;
  border: 0 solid #bbb;
  border-radius: 50%;
`;

// Toggle switch component
interface ToggleSwitchProps {
  isChecked: boolean;
  onChange: () => void;
}

const Toggle: React.FC<ToggleSwitchProps> = ({ isChecked, onChange }) => {
  return (
    <ToggleSwitchContainer>
      <ToggleCheckbox
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
        id="toggleSwitch"
      />
      <ToggleLabel htmlFor="toggleSwitch">
        <ToggleInner isChecked={isChecked}>
          <ToggleLeft />
          <ToggleRight />
        </ToggleInner>
        <ToggleSwitch />
      </ToggleLabel>
    </ToggleSwitchContainer>
  );
};

export default Toggle;
