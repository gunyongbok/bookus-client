import styled from "styled-components";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Header
import MainHeader from "../../components/Header/MainHeader";
import backArrowImg from "../../assets/img/back.png";
import profileImg from "../../assets/svg/ProfileLogo.svg";

// Navbar
import Navbar from "../../components/Navigation/Navbar";

// Svg
import pencil from "../../assets/svg/Profile/ProfileImgEditPencil.svg";
import emo from "../../assets/svg/Profile/KakaoEmailEmo.svg";

// Component
import MyProfileInfoTitle from "../../components/Profile/MyProfileInfoTitle";
import ProfileMainBox from "../../components/Profile/ProfileMainBox";

// Modal
import EditProfileModal from "../../components/Modal/Profile/editProfileModal";
import editProfile from "../../Api/Profile/editProfile";

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

const ProfileImgContainer = styled.div`
  width: 100%;
  height: 144px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #e9f6ee;
  position: relative;
`;

const ProfileImg = styled.i`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  background: #83d0a1;
  position: relative;
`;

const ProfileImgEdit = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background: #bbc2c1;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 20px;
  right: 135px;
`;

const NickNameInput = styled.div`
  width: fit-content;
  color: #0f473f;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const NickNameChangeBtn = styled.div`
  color: #bbc2c1;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

const AccountManagement = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [profileImage, setProfileImage] = useState<File>();
  const location = useLocation();
  const data = location.state;

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const handleProfileEdit = (image: File) => {
    setProfileImage(image);
  };

  console.log(profileImage);

  // useEffect(() => {
  //   editProfile("hello", profileImage);
  // }, [profileImage]);

  return (
    <TopContainer $background="#FCFCFF" $isModalVisible={isModalVisible}>
      <MainHeader src1={backArrowImg} src2={profileImg} text="계정 관리" />
      <MainContent>
        <ProfileImgContainer>
          <ProfileImg />

          <ProfileImgEdit onClick={openModal}>
            <img src={pencil} alt="pencil" />
          </ProfileImgEdit>
        </ProfileImgContainer>
        <MyProfileInfoTitle>내 프로필 설정</MyProfileInfoTitle>
        <ProfileMainBox>
          <NickNameInput>{data?.memberName}</NickNameInput>
          <NickNameChangeBtn>변경</NickNameChangeBtn>
        </ProfileMainBox>
        <MyProfileInfoTitle>내 계정 정보</MyProfileInfoTitle>
        <ProfileMainBox>
          <NickNameInput>
            <img src={emo} alt="emo" />
            {data?.email}
          </NickNameInput>
        </ProfileMainBox>
      </MainContent>
      <Navbar />
      {isModalVisible && (
        <EditProfileModal
          onProfileEdit={handleProfileEdit}
          onClose={closeModal}
        />
      )}
    </TopContainer>
  );
};

export default AccountManagement;
