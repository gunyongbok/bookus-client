import { styled } from "styled-components";

interface BtnProps {
  $background?: string;
  $text: string;
  $color?: string;
  $disabled?: string;
}

const Btn = styled.button<BtnProps>`
  width: 100%;
  height: 56px;
  border: none;
  border-radius: 8px;
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  background: ${(props) => props.$background || "#FCFCFF"};
  color: ${(props) => props.$color || "#0F473F"};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
`;

const StandardBtn = ({ $background, $text, $color, $disabled }: BtnProps) => {
  return (
    <Btn
      $background={$background}
      $text={$text}
      $color={$color}
      $disabled={$disabled}
      disabled={$disabled}
    >
      {$text}
    </Btn>
  );
};

export default StandardBtn;
