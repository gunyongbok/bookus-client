import { styled } from "styled-components";

import Logo from "../../assets/svg/BookusLogo.svg";

const TitleWrapper = styled.div`
  width: 100%;
  height: 232px;
  margin-top: 24px;
  padding: 0px 119px 0px 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const LogoBox = styled.div`
  width: 100%;
  height: 100.06px;
`;

const TitleBox = styled.div`
  width: 100%;
  height: 120px;
  gap: 4px;
`;

const MainTitle = styled.div`
  width: fit-content;
  height: 58px;
  color: var(--BG-Color, #fcfcff);
  font-family: "Dela Gothic One", sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
`;

const SubTitle = styled.div`
  width: fit-content;
  height: 58px;
  color: var(--Base-Grren, #e9f6ee);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 800;
`;

const LoginTitle = () => {
  return (
    <TitleWrapper>
      <LogoBox>
        <img src={Logo} alt="logo" />
      </LogoBox>
      <TitleBox>
        <MainTitle>BOOKUS</MainTitle>
        <SubTitle>
          책과 우리, 북커스
          <br />
          환영합니다.
        </SubTitle>
      </TitleBox>
    </TitleWrapper>
  );
};

export default LoginTitle;
