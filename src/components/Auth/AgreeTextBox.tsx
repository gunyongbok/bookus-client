import { styled } from "styled-components";

interface ContainerProps {
  fontWeight?: string;
  onClick?: () => void;
}

interface Props {
  text: string;
  imgSrc: string;
  fontWeight?: string;
  onClick?: () => void;
}

const Container = styled.div<ContainerProps>`
  color: #0f473f;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: ${({ fontWeight }) => fontWeight || "400"};
  display: flex;
  gap: 16px;
  align-items: center;
  cursor: ${({ onClick }) => (onClick ? "pointer" : "default")};
`;

const Img = styled.img`
  width: 20px;
  height: 20px;
`;

const AgreeTextBox = ({ text, imgSrc, fontWeight, onClick }: Props) => {
  return (
    <Container onClick={onClick} fontWeight={fontWeight}>
      <Img src={imgSrc} alt="agreeBtn" />
      {text}
    </Container>
  );
};

export default AgreeTextBox;
