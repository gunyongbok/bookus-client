import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

interface HeaderProps {
  src1: string;
  src2: string;
  text?: string;
  onBackClick?: () => void;
}

const Header = styled.div`
  width: 100%;
  height: 32px;
  max-width: 358px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextBox = styled.div`
  color: #0f473f;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const MainHeader = ({ src1, src2, text, onBackClick }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <Header>
      <img
        style={{ width: "24px" }}
        src={src1}
        onClick={() => {
          if (onBackClick) {
            onBackClick();
          } else {
            navigate(-1);
          }
        }}
      />
      <TextBox>{text}</TextBox>
      <img src={src2} onClick={() => navigate("/profile")} />
    </Header>
  );
};

export default MainHeader;
