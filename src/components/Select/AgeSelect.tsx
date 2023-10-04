import { useState } from "react";
import Select from "react-select";
import styled from "styled-components";

export interface AgeOption {
  label: string;
  value: string;
}

const ageOptions: AgeOption[] = [
  { label: "10대", value: "TEEN" },
  { label: "20대", value: "TWENTIES" },
  { label: "30대", value: "THIRTIES" },
  { label: "40대", value: "FORTIES" },
  { label: "50대", value: "FIFTIES" },
  { label: "60대", value: "SIXTIES" },
  { label: "선택안함", value: "NOT_CHOOSE" },
];

// 각 항목을 { value, label } 형식으로 변환
const ageSelectOptions = ageOptions.map((option) => ({
  value: option.value,
  label: option.label,
}));

const StyledSelect = styled(Select)`
  .select__control {
    width: 120px;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #4ca771;
    box-shadow: none;
  }

  .select__option,
  .select__single-value {
    color: #4ca771;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
  }

  .select__option--is-selected {
    color: #4ca771;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    background: #e9f6ee;
  }

  .select__dropdown-indicator {
    color: #4ca771;
  }

  .select__indicator-separator {
    display: none;
  }
`;

interface AgeSelectProps {
  onAgeChange: (selectedOption: AgeOption) => void;
}

const AgeSelect: React.FC<AgeSelectProps> = ({ onAgeChange }) => {
  const [selectedValue, setSelectedValue] = useState<AgeOption>(
    ageSelectOptions[6]
  );

  const handleAgeChange = (selectedOption: any) => {
    setSelectedValue(selectedOption);
    onAgeChange(selectedOption);
  };

  return (
    <>
      <StyledSelect
        isSearchable={false}
        classNamePrefix="select"
        value={selectedValue}
        options={ageSelectOptions}
        onChange={handleAgeChange}
      />
    </>
  );
};

export default AgeSelect;
