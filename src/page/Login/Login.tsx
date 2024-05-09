import * as S from "./style/Login.style";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Title
import LoginTitle from "../../components/Title/LoginTitle";

// Message
import { agreeMessage } from "../../assets/text/message";
import KakaoLoginBtn from "../../components/Button/KakaoLoginBtn";

// util
import { handleLogin } from "../../utils/handleLogin";

const Login = () => {
  return (
    <TopContainer>
      <LoginTitle />
      <S.BtnContainer>
        <KakaoLoginBtn onClick={handleLogin} />
      </S.BtnContainer>
      <S.TextBox>{agreeMessage}</S.TextBox>
    </TopContainer>
  );
};

export default Login;
