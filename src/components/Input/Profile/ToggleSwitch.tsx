import styled from "styled-components";

const ToggleSwitchWrapper = styled.label`
  position: relative;
  display: inline-block;
  width: 36px;
  height: 20px;
`;

const ToggleSwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .slider {
    background-color: #83d0a1;
  }

  &:focus + .slider {
    box-shadow: 0 0 1px #83d0a1;
  }

  &:checked + .slider:before {
    transform: translateX(16px);
  }
`;

const ToggleSwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 20px;
  width: 36px;
  height: 20px;

  &:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

interface ToggleSwitchProps {
  isChecked?: boolean;
  onChange?: () => void;
}

const ToggleSwitch = ({ isChecked, onChange }: ToggleSwitchProps) => {
  return (
    <ToggleSwitchWrapper>
      <ToggleSwitchInput
        type="checkbox"
        checked={isChecked}
        onChange={onChange}
      />
      <ToggleSwitchSlider className="slider" />
    </ToggleSwitchWrapper>
  );
};

export default ToggleSwitch;
