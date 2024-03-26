// TopContainer
import MainHeader from "../../components/Header/MainHeader";

// Header
import TopContainer from "../../components/Wrapper/TopContainer";
import backArrowImg from "../../assets/img/back.png";
import profileImg from "../../assets/svg/ProfileLogo.svg";

const Announcement = () => {
  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} text="공지 사항" />
    </TopContainer>
  );
};

export default Announcement;
