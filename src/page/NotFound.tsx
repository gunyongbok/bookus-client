import styled from "styled-components";

// TopContainer
import TopContainer from "../components/Wrapper/TopContainer";

// Logo
import Logo from "../assets/svg/NotFoundLogo.svg";
import {
  NotFoundFirstMsg,
  NotFoundSecondMsg,
  NotFoundThirdMsg,
} from "../assets/text/message";

const MainContainer = styled.div`
  width: 100%;
  max-width: 358px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 599px) {
    max-height: 70%;
  }
`;

const FirstMsg = styled.div`
  color: #0f473f;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  margin-top: 24px;
  white-space: pre-line;
  margin-bottom: 20px;
`;

const SecondMsg = styled.div`
  color: #0f473f;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  white-space: pre-line;
  margin-bottom: 20px;
`;

const ThridMsg = styled.div`
  color: #0f473f;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  white-space: pre-line;
`;

const NotFound = () => {
  return (
    <TopContainer $background="#FCFCFF">
      <MainContainer>
        <img src={Logo} alt="logo" />
        <FirstMsg>{NotFoundFirstMsg}</FirstMsg>
        <SecondMsg>{NotFoundSecondMsg}</SecondMsg>
        <ThridMsg>{NotFoundThirdMsg}</ThridMsg>
      </MainContainer>
    </TopContainer>
  );
};

export default NotFound;
