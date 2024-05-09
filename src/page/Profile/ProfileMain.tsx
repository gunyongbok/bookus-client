import * as S from "./style/ProfileMain.style";
import { useEffect, useState } from "react";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Header
import MainHeader from "../../components/Header/MainHeader";
import backArrowImg from "../../assets/img/back.png";
import profileImg from "../../assets/svg/ProfileLogo.svg";

// Navbar
import Navbar from "../../components/Navigation/Navbar";

// svg
import pointer from "../../assets/svg/Profile/DetailRoutePointer.svg";

// Data and API
import { ProfileListData } from "../../assets/text/message";
import getMyProfile from "../../Api/Profile/getMyProfile";

interface MemberProfile {
  memberName: string;
  email: string;
  profileImageUrl: string | undefined;
  oauthType: string;
  ageBand: string;
  gender: string;
  marketingAgree: boolean;
  pushNotificationAgree: boolean;
  emailNotificationAgree: boolean;
  libraryCount: number;
  bookReportCount: number;
}

const ProfileMain = () => {
  const [profileInfo, setProfileInfo] = useState<MemberProfile | undefined>(
    undefined
  );

  const getProfileInfo = async () => {
    try {
      const result = await getMyProfile();
      setProfileInfo(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfileInfo();
  }, []);

  console.log(profileInfo);

  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} />
      <S.MainContent>
        <S.UserProfileContainer>
          <S.UserProfileImg src={profileInfo?.profileImageUrl} />
          <S.UserProfileInfoBox>
            <S.UserProfileNameBox>
              <S.UserProfileName>{profileInfo?.memberName}</S.UserProfileName>
              <S.UserProfileNameNim>님</S.UserProfileNameNim>
            </S.UserProfileNameBox>
            <S.UserLibraryAccountInfoBox>
              서재 {profileInfo?.libraryCount} • 독서록{" "}
              {profileInfo?.bookReportCount}
            </S.UserLibraryAccountInfoBox>
          </S.UserProfileInfoBox>
        </S.UserProfileContainer>
        <S.ProfileUl>
          {ProfileListData.map((data, i) => (
            <S.ProfileLi key={i}>
              <S.StyledLink
                to={`/profile/${Object.values(data)[0]}`}
                state={profileInfo}
              >
                {Object.keys(data)[0]}
                <img src={pointer} alt="pointer" />
              </S.StyledLink>
            </S.ProfileLi>
          ))}
          <S.ProfileLi>
            <S.VersionContainer>
              <S.VersionKey>버전</S.VersionKey>
              <S.VersionValue>0.01</S.VersionValue>
            </S.VersionContainer>
          </S.ProfileLi>
        </S.ProfileUl>
      </S.MainContent>
      <Navbar />
    </TopContainer>
  );
};

export default ProfileMain;
