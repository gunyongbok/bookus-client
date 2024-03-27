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

const Alarm = styled.div`
  width: fit-content;
  color: #0f473f;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

const NotificationSetting = () => {
  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} text="알림 설정" />
      <MainContent>
        <MyProfileInfoTitle>광고성 정보 수신</MyProfileInfoTitle>
        <ProfileMainBox>
          <Alarm>푸쉬 알림</Alarm>
        </ProfileMainBox>
        <ProfileMainBox>
          <Alarm>이메일 알림</Alarm>
        </ProfileMainBox>
        <MyProfileInfoTitle>활동 알림</MyProfileInfoTitle>
        <ProfileMainBox>
          <Alarm>댓글,공감 등 알림</Alarm>
        </ProfileMainBox>
      </MainContent>
      <Navbar />
    </TopContainer>
  );
};

export default NotificationSetting;
