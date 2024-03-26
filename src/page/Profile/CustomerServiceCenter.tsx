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

// Message
import { CustomerServiceAskMsg } from "../../assets/text/message";

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

const Email = styled.div`
  width: fit-content;
  color: #0f473f;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

const EmailValue = styled.div`
  color: #bbc2c1;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

const AskMsg = styled.div`
  width: 211px;
  color: #83d0a1;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  white-space: break-spaces;
  margin-top: 10px;
`;

const CustomerServiceCenter = () => {
  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} text="고객센터" />
      <MainContent>
        <MyProfileInfoTitle>이메일</MyProfileInfoTitle>
        <ProfileMainBox>
          <Email>고객센터 이메일</Email>
          <EmailValue>qhrrjsdyd123@gmail.com</EmailValue>
        </ProfileMainBox>
        <AskMsg>{CustomerServiceAskMsg}</AskMsg>
      </MainContent>
      <Navbar />
    </TopContainer>
  );
};

export default CustomerServiceCenter;
