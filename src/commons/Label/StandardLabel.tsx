import styled from "styled-components";

interface LabelProps {
  $text: string;
}

const Label = styled.div<LabelProps>`
  width: fit-content;
  color: #0f473f;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
`;

const StandardLabel = ({ $text }: LabelProps) => {
  return <Label $text={$text}>{$text}</Label>;
};

export default StandardLabel;
