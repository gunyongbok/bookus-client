import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

interface HeaderProps {
  src1: string;
  src2: string;
}

const Header = styled.div`
  width: 100%;
  height: 32px;
  max-width: 358px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainHeader = ({ src1, src2 }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <Header>
      <img src={src1} onClick={() => navigate(-1)} />
      <img src={src2} onClick={() => navigate("/profile")} />
    </Header>
  );
};

export default MainHeader;
