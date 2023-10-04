import styled from "styled-components";
import { ChangeEvent, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Header
import MainHeader from "../../components/Header/MainHeader";
// Header - Image
import backArrowImg from "../../assets/img/back.png";
import secondProgress from "../../assets/img/SecondStep.png";
import PageTopTitle from "../../components/Title/PageTopTitle";

// Label
import StandardLabel from "../../commons/Label/StandardLabel";

// Input
import { nicknameCaution, nicknameLabel } from "../../assets/text/message";

// Next_Btn
import StandardBtn from "../../commons/Button/StandardBtn";

// Api
import signUp from "../../Api/signUp";
import validateNickname from "../../Api/validateNickname";
import AgeSelect, { AgeOption } from "../../components/Select/AgeSelect";

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
  @media (max-width: 599px) {
    height: 80%;
  }
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
  line-height: normal;
`;

const NicknameInputWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

const NicknameInput = styled.input`
  width: 70%;
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

const DuplicatedBtn = styled.div`
  width: 91px;
  height: 56px;
  border-radius: 16px;
  border: 1px solid #4ca771;
  color: #0f473f;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ErrorMessage = styled.div`
  color: #4ca771;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

const TopicTopContainer = styled.div`
  width: 100%;
  height: fit-content;
  gap: 24px;
  margin-top: 40px;
  display: flex;
`;

const TopicSubWrapper = styled.div`
  width: fit-content;
  gap: 8px;
  display: flex;
  flex-direction: row;
`;

const TopicWrapper = styled.div`
  width: fit-content;
  display: flex;
  gap: 3px;
  display: flex;
  flex-direction: column;
`;

const ToggleTopic = styled.div`
  color: #0f473f;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;

const ToggleOptional = styled.div`
  color: #4ca771;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;

const TopicGenderSelect = styled.div`
  width: 200px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #4ca771;
`;

const ServiceName = () => {
  const location = useLocation();
  const data = location.state && location.state.data;
  const [nickname, setNickname] = useState<string>("");
  const [isValidNickname, setIsValidNickname] = useState<boolean>(true);
  const [length, setLength] = useState<number>(0);
  const [duplicated, setDuplicated] = useState<boolean>(false);
  const [selectedAge, setSelectedAge] = useState<AgeOption | null>(null);

  // AgeSelect에서 선택한 값이 여기로 전달
  const handleAgeSelect = (selectedOption: AgeOption | null) => {
    setSelectedAge(selectedOption);
  };

  useEffect(() => {
    data["ageBand"] = selectedAge?.value;
  }, [selectedAge]);

  useEffect(() => {
    data["memberName"] = nickname;
  }, [nickname]);

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

  const handleDuplicatedNickname = async (nickname: string) => {
    const isDuplicated: boolean = (await validateNickname(nickname)) as boolean;
    setDuplicated(isDuplicated);
  };

  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={secondProgress} />
      <MainContent>
        <NicknameWrapper>
          <PageTopTitle $text="닉네임 설정" />
          <InputWrapper>
            <StandardLabel $text={nicknameLabel} />
            <StandardLabel $text={nicknameCaution} />
            <NicknameInputWrapper>
              <NicknameInput
                type="text"
                placeholder="사용하실 별명을 입력해주세요."
                value={nickname}
                onChange={handleNicknameChange}
              />
              <DuplicatedBtn onClick={() => handleDuplicatedNickname(nickname)}>
                중복확인
              </DuplicatedBtn>
            </NicknameInputWrapper>

            {isValidNickname || (
              <ErrorMessage>사용이 불가능한 닉네임입니다.</ErrorMessage>
            )}
            {duplicated ? (
              <ErrorMessage>이미 사용중인 닉네임이에요</ErrorMessage>
            ) : null}
            <TopicTopContainer>
              <TopicWrapper>
                <TopicSubWrapper>
                  <ToggleTopic>연령대</ToggleTopic>
                  <ToggleOptional>(선택)</ToggleOptional>
                </TopicSubWrapper>
                <AgeSelect onAgeChange={handleAgeSelect} />
              </TopicWrapper>
              <TopicWrapper>
                <TopicSubWrapper>
                  <ToggleTopic>성별</ToggleTopic>
                  <ToggleOptional>(선택)</ToggleOptional>
                </TopicSubWrapper>
                <TopicGenderSelect />
              </TopicWrapper>
            </TopicTopContainer>
          </InputWrapper>
        </NicknameWrapper>
        {duplicated === true || isValidNickname === false || length === 0 ? (
          <StandardBtn $disabled={true} $background="#E9F6EE">
            다음
          </StandardBtn>
        ) : (
          <StandardBtn
            // onClick={() => signUp(data)}
            onClick={() => console.log(data)}
            $background="#83D0A1"
            $color="#FCFCFF"
          >
            다음
          </StandardBtn>
        )}
      </MainContent>
    </TopContainer>
  );
};

export default ServiceName;
