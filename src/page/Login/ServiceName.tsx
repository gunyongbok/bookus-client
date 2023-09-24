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

// Next_Btn
import StandardBtn from "../../commons/Button/StandardBtn";

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
  height: fit-content;
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

const ErrorMessage = styled.div`
  color: #4ca771;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

const ServiceName = () => {
  const [nickname, setNickname] = useState<string>("");
  const [isValidNickname, setIsValidNickname] = useState<boolean>(true);
  const [length, setLength] = useState<number>(0);

  // validate input value
  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const newNickname: string = e.target.value;
    const normalizedNickname = newNickname.normalize("NFC"); // 유니코드 정규화

    setLength(normalizedNickname.length);
    const regex: RegExp = /^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣0-9_-]*$/u;

    if (length < 15 && regex.test(normalizedNickname)) {
      setNickname(normalizedNickname);
      setIsValidNickname(true);
    } else {
      setNickname(normalizedNickname);
      setIsValidNickname(false);
    }
  };

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
            {isValidNickname || (
              <ErrorMessage>사용이 불가능한 닉네임입니다.</ErrorMessage>
            )}
          </InputWrapper>
        </NicknameWrapper>
        {isValidNickname === false || length === 0 ? (
          <StandardBtn $disabled={true} $background="#E9F6EE">
            다음
          </StandardBtn>
        ) : (
          <StandardBtn $background="#83D0A1" $color="#FCFCFF">
            다음
          </StandardBtn>
        )}
      </MainContent>
    </TopContainer>
  );
};

export default ServiceName;
