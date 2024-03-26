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
import poiner from "../../assets/svg/Profile/DetailRoutePointer.svg";

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

const LogoutBox = styled.div`
  width: fit-content;
  color: #0f473f;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

const RedLogoutBox = styled(LogoutBox)`
  color: red;
`;

const Logout = () => {
  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} text="로그아웃" />
      <MainContent>
        <MyProfileInfoTitle>로그아웃</MyProfileInfoTitle>
        <ProfileMainBox>
          <LogoutBox>로그아웃</LogoutBox>
        </ProfileMainBox>
        <MyProfileInfoTitle>계정탈퇴</MyProfileInfoTitle>
        <ProfileMainBox>
          <RedLogoutBox>탈퇴하기</RedLogoutBox>
          <img src={poiner} alt="pointer" />
        </ProfileMainBox>
      </MainContent>
      <Navbar />
    </TopContainer>
  );
};

export default Logout;
