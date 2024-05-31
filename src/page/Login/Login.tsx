import * as S from "./style/Login.style";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Title
import LoginTitle from "../../components/Title/LoginTitle";

// Message
import { agreeMessage } from "../../assets/text/message";
import KakaoLoginBtn from "../../components/Button/KakaoLoginBtn";

// Button
import StandardBtn from "../../commons/Button/StandardBtn";

// util
import { handleLogin } from "../../utils/handleLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <TopContainer>
      <LoginTitle />
      <S.BtnContainer>
        <KakaoLoginBtn onClick={handleLogin} />
        <StandardBtn onClick={() => navigate("/main")}>둘러보기</StandardBtn>
      </S.BtnContainer>
      <S.TextBox>{agreeMessage}</S.TextBox>
    </TopContainer>
  );
};

export default Login;
