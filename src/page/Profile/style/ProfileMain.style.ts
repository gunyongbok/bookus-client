import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainContent = styled.div`
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

export const UserProfileContainer = styled.div`
  width: 100%;
  height: 132px;
  border-bottom: 5px solid #e9f6ee;
  display: flex;
  align-items: center;
  padding: 0 20px 0 20px;
  box-sizing: border-box;
  gap: 20px;
`;

export const UserProfileImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 32px;
  background: #83d0a1;
`;

export const UserProfileInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const UserProfileNameBox = styled.div`
  width: fit-content;
  display: flex;
`;

export const UserProfileName = styled.div`
  color: #0f473f;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  margin-right: 4px;
`;

export const UserProfileNameNim = styled.div`
  color: #0f473f;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  margin-right: 8px;
`;

export const UserLibraryAccountInfoBox = styled.div`
  width: 100%;
  color: #4ca771;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
`;

export const ProfileUl = styled.ul`
  width: 100%;
  height: fit-content;
  padding: 0;
  margin: 0;
`;

export const ProfileLi = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  padding: 0 10px 0 10px;
  box-sizing: border-box;
  align-items: center;
  border-bottom: 1px solid #e9f6ee;
`;

export const VersionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const VersionKey = styled.div`
  color: #0f473f;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

export const VersionValue = styled.div`
  color: #bbc2c1;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const StyledLink = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  color: #0f473f;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;

  &:active {
    color: #0f473f;
  }
`;
