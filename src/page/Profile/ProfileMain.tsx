import styled from "styled-components";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Header
import MainHeader from "../../components/Header/MainHeader";
import backArrowImg from "../../assets/img/back.png";
import profileImg from "../../assets/svg/ProfileLogo.svg";

// Navbar
import Navbar from "../../components/Navigation/Navbar";

import setting from "../../assets/svg/Profile/setting.svg";

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
  @media (max-width: 599px) {
    max-height: 70%;
  }
`;

const UserProfileContainer = styled.div`
  width: 100%;
  height: 132px;
  border-bottom: 5px solid #e9f6ee;
  display: flex;
  align-items: center;
  padding: 0 20px 0 20px;
  box-sizing: border-box;
  gap: 20px;
`;

const UserProfileImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 32px;
  background: #83d0a1;
`;

const UserProfileInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
`;

const UserProfileNameBox = styled.div`
  width: fit-content;
  display: flex;
`;

const UserProfileName = styled.div`
  color: #0f473f;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  margin-right: 4px;
`;

const UserProfileNameNim = styled.div`
  color: #0f473f;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  margin-right: 8px;
`;

const Setting = styled.img``;

const UserLibraryAccountInfoBox = styled.div`
  width: 100%;
  color: #4ca771;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
`;

const ProfileUl = styled.ul`
  width: 100%;
  height: fit-content;
  padding: 0;
  margin: 0;
`;

const ProfileLi = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  padding-left: 10px;
  box-sizing: border-box;
  align-items: center;
  color: #0f473f;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  border-bottom: 1px solid #e9f6ee;
`;

const LiData = ["계정설정", "알림설정", "공지사항", "고객센터", "로그아웃"];

const ProfileMain = () => {
  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} />
      <MainContent>
        <UserProfileContainer>
          <UserProfileImg />
          <UserProfileInfoBox>
            <UserProfileNameBox>
              <UserProfileName>나는_북커스</UserProfileName>
              <UserProfileNameNim>님</UserProfileNameNim>
              <Setting src={setting} alt="setting" />
            </UserProfileNameBox>
            <UserLibraryAccountInfoBox>
              서재 0 • 독서록 0
            </UserLibraryAccountInfoBox>
          </UserProfileInfoBox>
        </UserProfileContainer>
        <ProfileUl>
          {LiData.map((data) => (
            <ProfileLi>{data}</ProfileLi>
          ))}
        </ProfileUl>
      </MainContent>
      <Navbar />
    </TopContainer>
  );
};

export default ProfileMain;
