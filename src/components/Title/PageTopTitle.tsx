import styled from "styled-components";

interface TitleProps {
  $text?: string;
}

const AgreeTitle = styled.div<TitleProps>`
  width: 100%;
  color: #0f473f;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  display: flex;
  justify-content: flex-start;
`;

const PageTopTitle = ({ $text }: TitleProps) => {
  return <AgreeTitle $text={$text}>{$text}</AgreeTitle>;
};

export default PageTopTitle;
