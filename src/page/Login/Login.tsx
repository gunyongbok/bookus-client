import * as S from "./style/Login.style";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Title
import LoginTitle from "../../components/Title/LoginTitle";

// Button
import StandardBtn from "../../commons/Button/StandardBtn";

// Message
import { agreeMessage } from "../../assets/text/message";
import KakaoLoginBtn from "../../components/Button/KakaoLoginBtn";

// util
import { handleLogin } from "../../utils/handleLogin";
import { useRecoilValue } from "recoil";
import { LoginState } from "../../states/LoginState";

const Login = () => {
  const loginState = useRecoilValue(LoginState);

  console.log(loginState);
  return (
    <TopContainer>
      <LoginTitle />
      <S.BtnContainer>
        <KakaoLoginBtn onClick={handleLogin} />
        <StandardBtn>둘러보기</StandardBtn>
      </S.BtnContainer>
      <S.TextBox>{agreeMessage}</S.TextBox>
    </TopContainer>
  );
};

export default Login;
