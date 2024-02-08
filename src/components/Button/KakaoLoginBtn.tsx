import styled from "styled-components";

// Logo
import Logo from "../../assets/svg/KakaoLogo.svg";

// Btn
import StandardBtn from "../../commons/Button/StandardBtn";

// Message
import { startWithKakaoAccount } from "../../assets/text/message";

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
      <LogoBox src={Logo} alt="logo" /> {startWithKakaoAccount}
    </StandardBtn>
  );
};

export default KakaoLoginBtn;
