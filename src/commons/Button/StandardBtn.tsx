import { styled } from "styled-components";

interface BtnProps {
  $background?: string;
  $color?: string;
  $disabled?: boolean;
  children?: React.ReactNode;
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

const StandardBtn = ({
  $background,
  $color,
  $disabled,
  children,
}: BtnProps) => {
  return (
    <Btn $background={$background} $color={$color} $disabled={$disabled}>
      {children}
    </Btn>
  );
};

export default StandardBtn;
