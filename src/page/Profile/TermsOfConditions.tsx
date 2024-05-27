import styled from "styled-components";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Header
import MainHeader from "../../components/Header/MainHeader";
import backArrowImg from "../../assets/img/back.png";
import profileImg from "../../assets/svg/ProfileLogo.svg";

// Navbar
import Navbar from "../../components/Navigation/Navbar";

// Component
import MyProfileInfoTitle from "../../components/Profile/MyProfileInfoTitle";
import ProfileMainBox from "../../components/Profile/ProfileMainBox";

// SVG
import pointer from "../../assets/svg/Profile/DetailRoutePointer.svg";

const MainContent = styled.div`
  width: 100%;
  max-width: 358px;
  max-height: 630px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: 11%;
  overflow: auto;
  border-top: 5px solid #e9f6ee;
  @media (max-width: 599px) {
    max-height: 70%;
  }
`;

const Condition = styled.div`
  width: fit-content;
  color: #0f473f;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

const RoutingArrow = styled.img``;

const TermsOfConditions = () => {
  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} text="이용약관" />
      <MainContent>
        <MyProfileInfoTitle>필수 이용약관</MyProfileInfoTitle>
        <ProfileMainBox>
          <Condition>서비스 이용약관</Condition>
          <RoutingArrow src={pointer} alt="pointer" />
        </ProfileMainBox>
        <ProfileMainBox>
          <Condition>개인정보 처리 방침</Condition>
          <RoutingArrow src={pointer} alt="pointer" />
        </ProfileMainBox>
        <MyProfileInfoTitle>선택 이용약관</MyProfileInfoTitle>
        <ProfileMainBox>
          <Condition>마켓팅 정보 수신동의</Condition>
          <RoutingArrow src={pointer} alt="pointer" />
        </ProfileMainBox>
      </MainContent>
      <Navbar />
    </TopContainer>
  );
};

export default TermsOfConditions;
