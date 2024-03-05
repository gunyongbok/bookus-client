import styled from "styled-components";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Logo
import Logo from "../../assets/svg/MainLogo.svg";

// Btn
import StandardBtn from "../../commons/Button/StandardBtn";
import { useNavigate } from "react-router-dom";

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  justify-content: center;
`;

const LogoBox = styled.img`
  position: absolute;
  top: 300px;
`;

const BtnBox = styled.div`
  width: 358px;
  position: absolute;
  bottom: 7%;
`;

const RootPage = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/login");
  };
  return (
    <TopContainer $background="#FCFCFF">
      <MainContainer>
        <LogoBox src={Logo} alt="main-logo" />
        <BtnBox>
          <StandardBtn
            onClick={handleNavigate}
            $background="#83D0A1"
            $color="#FCFCFF"
          >
            서비스 시작하기
          </StandardBtn>
        </BtnBox>
      </MainContainer>
    </TopContainer>
  );
};

export default RootPage;
