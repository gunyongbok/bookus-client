import styled from "styled-components";
import Logo from "../../assets/svg/KakaoLogo.svg";
import StandardBtn from "../../commons/Button/StandardBtn";

const LogoBox = styled.img`
  position: absolute;
  left: 22px;
`;

const KakaoLoginBtn = () => {
  return (
    <StandardBtn $background="#FEE500">
      <LogoBox src={Logo} alt="logo" /> 카카오 계정으로 시작하기
    </StandardBtn>
  );
};

export default KakaoLoginBtn;
