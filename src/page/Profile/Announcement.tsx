import styled from "styled-components";

// TopContainer
import MainHeader from "../../components/Header/MainHeader";

// Header
import TopContainer from "../../components/Wrapper/TopContainer";
import backArrowImg from "../../assets/img/back.png";
import profileImg from "../../assets/svg/ProfileLogo.svg";

// Navbar
import Navbar from "../../components/Navigation/Navbar";

// SVG
import NoAnnounceLogo from "../../assets/svg/Profile/NoAnnouncement.svg";

// Msg
import {
  FirstNoAnnounceMsg,
  SecondNoAnnounceMsg,
} from "../../assets/text/message";

const MainContent = styled.div`
  width: 100%;
  max-width: 358px;
  height: 630px;
  display: flex;
  justify-content: center;
  align-items: center;
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

const FirstTextBox = styled.div`
  color: #0f473f;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  margin-top: 17px;
`;

const SecondTextBox = styled.div`
  color: #83d0a1;
  text-align: center;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  white-space: break-spaces;
`;

const Announcement = () => {
  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} text="공지 사항" />
      <MainContent>
        <img src={NoAnnounceLogo} alt="logo" />
        <FirstTextBox>{FirstNoAnnounceMsg}</FirstTextBox>
        <SecondTextBox>{SecondNoAnnounceMsg}</SecondTextBox>
      </MainContent>
      <Navbar />
    </TopContainer>
  );
};

export default Announcement;
