import styled from "styled-components";
import { ChangeEvent, useState } from "react";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Header
import MainHeader from "../../components/Header/MainHeader";
// Header - Image
import backArrowImg from "../../assets/img/back.png";
import secondProgress from "../../assets/img/SecondStep.png";
import PageTopTitle from "../../components/Title/PageTopTitle";

// Input
import { nicknameCaution, nicknameLabel } from "../../assets/text/message";

const MainContent = styled.div`
  width: 100%;
  max-width: 358px;
  height: 680px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 13%;
  padding: 0 8px 0 8px;
  box-sizing: border-box;
`;

const NicknameWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const InputWrapper = styled.div`
  width: 100%;
  height: 95px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.div`
  width: fit-content;
  color: #0f473f;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
`;

const NicknameInput = styled.input`
  width: 100%;
  height: 56px;
  border-radius: 16px;
  border: none;
  background: #e9f6ee;
  color: #0f473f;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  position: relative;
  right: 8px;
  padding-left: 16px;
  &::placeholder {
    color: #0f473f;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
  }
  &:focus {
    outline: none;
  }
`;

const ServiceName = () => {
  const [nickname, setNickname] = useState<string>("");
  const [isValidNickname, setIsValidNickname] = useState<boolean>(true);

  // validate input value
  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const newNickname: string = e.target.value;
    const regex: RegExp = /^[a-zA-Z가-힣_-]*$/;

    if (newNickname.length <= 10 && regex.test(newNickname)) {
      setNickname(newNickname);
      setIsValidNickname(true);
    } else {
      setNickname(newNickname);
      setIsValidNickname(false);
    }
  };
  console.log(nickname, isValidNickname);
  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={secondProgress} />
      <MainContent>
        <NicknameWrapper>
          <PageTopTitle $text="닉네임 설정" />
          <InputWrapper>
            <Label>{nicknameLabel}</Label>
            <Label>{nicknameCaution}</Label>
            <NicknameInput
              type="text"
              placeholder="사용하실 별명을 입력해주세요."
              value={nickname}
              onChange={handleNicknameChange}
            />
          </InputWrapper>
        </NicknameWrapper>
      </MainContent>
    </TopContainer>
  );
};

export default ServiceName;
