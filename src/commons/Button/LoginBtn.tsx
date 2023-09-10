import { styled } from "styled-components";

interface BtnProps {
  $background?: string;
  $text: string;
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
`;

const LoginBtn = ({ $background, $text }: BtnProps) => {
  return (
    <Btn $background={$background} $text={$text}>
      {$text}
    </Btn>
  );
};

export default LoginBtn;
