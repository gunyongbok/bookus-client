import styled from "styled-components";

// TopContainer
import TopContainer from "../../components/Wrapper/TopContainer";

// Logo
import Logo from "../../assets/svg/NotFoundLogo.svg";

// msg
import { LoginRequiredMsg } from "../../assets/text/message";

// Navbar
import Navbar from "../../components/Navigation/Navbar";
import { useNavigate } from "react-router-dom";

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
  font-family: "Pretendard Variable", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-align: center;
  margin-top: 24px;
  white-space: pre-line;
  margin-bottom: 20px;
`;

const NaviagteToLoginBtn = styled.button`
  width: 120px;
  height: 35px;
  background-color: #83d0a1;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  border-radius: 8px;
  border: none;
`;

const LoginRequired = () => {
  const navigate = useNavigate();
  return (
    <TopContainer $background="#FCFCFF">
      <MainContainer>
        <img src={Logo} alt="logo" />
        <FirstMsg>{LoginRequiredMsg}</FirstMsg>
        <NaviagteToLoginBtn onClick={() => navigate("/login")}>
          로그인하러 가기
        </NaviagteToLoginBtn>
        <Navbar />
      </MainContainer>
    </TopContainer>
  );
};

export default LoginRequired;
