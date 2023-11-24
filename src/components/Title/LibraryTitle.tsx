import styled from "styled-components";

interface LibraryTitleProps {
  text: string;
}

const Title = styled.div`
  color: #0f473f;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 16px;
`;

const LibraryTitle: React.FC<LibraryTitleProps> = ({ text }) => {
  return <Title>{text}</Title>;
};

export default LibraryTitle;
