import styled from "styled-components";
import Logo from "../../assets/svg/KakaoLogo.svg";
import StandardBtn from "../../commons/Button/StandardBtn";

interface BtnProps {
  onClick: () => void;
}

const LogoBox = styled.img`
  position: absolute;
  left: 22px;
`;

const KakaoLoginBtn = ({ onClick }: BtnProps) => {
  return (
    <StandardBtn $background="#FEE500" onClick={onClick}>
      <LogoBox src={Logo} alt="logo" /> 카카오 계정으로 시작하기
    </StandardBtn>
  );
};

export default KakaoLoginBtn;
