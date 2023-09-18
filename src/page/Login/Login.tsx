import { styled } from "styled-components";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Title
import LoginTitle from "../../components/Title/LoginTitle";

// Button
import StandardBtn from "../../commons/Button/StandardBtn";

// Message
import { agreeMessage } from "../../assets/text/message";
import KakaoLoginBtn from "../../components/Button/KakaoLoginBtn";

const BtnContainer = styled.div`
  width: 5vw;
  min-width: 356px;
  height: 128px;
  position: absolute;
  bottom: 7%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const TextBox = styled.div`
  width: fit-content;
  color: var(--Base-Grren, #e9f6ee);
  text-align: center;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  position: absolute;
  bottom: 4%;
`;

const Login = () => {
  return (
    <TopContainer>
      <LoginTitle />
      <BtnContainer>
        {/* <StandardBtn $text="카카오 계정으로 시작하기" $background="#FEE500" /> */}
        <KakaoLoginBtn />
        <StandardBtn>둘러보기</StandardBtn>
      </BtnContainer>
      <TextBox>{agreeMessage}</TextBox>
    </TopContainer>
  );
};

export default Login;
