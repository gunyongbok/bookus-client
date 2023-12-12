import { ChangeEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./ServiceName.style";

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

// Age_Select
import AgeSelect, { AgeOption } from "../../components/Select/AgeSelect";

// Api
import signUp from "../../Api/Login/signUp";
import validateNickname from "../../Api/Login/validateNickname";

const ServiceName = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state && location.state.data;
  const [nickname, setNickname] = useState<string>("");
  const [isValidNickname, setIsValidNickname] = useState<boolean>(true);
  const [length, setLength] = useState<number>(0);
  const [duplicated, setDuplicated] = useState<boolean>(false);
  const [selectedAge, setSelectedAge] = useState<AgeOption | null>(null);
  const [maleSelected, setMaleSelected] = useState<boolean>(false);
  const [femaleSelected, setFemaleSelected] = useState<boolean>(false);
  const [selectedGenger, setSelectedGender] = useState<string>("NOT_CHOOSE");

  useEffect(() => {
    data["ageBand"] = selectedAge?.value;
    if (selectedAge?.value === undefined) data["ageBand"] = "NOT_CHOOSE";
  }, [selectedAge]);

  useEffect(() => {
    data["memberName"] = nickname;
  }, [nickname]);

  useEffect(() => {
    data["gender"] = selectedGenger;
    if (maleSelected === false && femaleSelected === false)
      data["gender"] = "NOT_CHOOSE";
  }, [maleSelected, femaleSelected]);

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

  // 닉네임 중복 검사
  const handleDuplicatedNickname = async (nickname: string) => {
    const isDuplicated: boolean = (await validateNickname(nickname)) as boolean;
    setDuplicated(isDuplicated);
  };

  // AgeSelect에서 선택한 값이 여기로 전달
  const handleAgeSelect = (selectedOption: AgeOption | null) => {
    setSelectedAge(selectedOption);
  };

  const handleMaleClick = () => {
    setMaleSelected(!maleSelected);
    setFemaleSelected(false);
    setSelectedGender("MALE");
  };

  const handleFemaleClick = () => {
    setFemaleSelected(!femaleSelected);
    setMaleSelected(false);
    setSelectedGender("FEMALE");
  };

  console.log(data);

  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={secondProgress} />
      <S.MainContent>
        <S.NicknameWrapper>
          <PageTopTitle $text="닉네임 설정" />
          <S.InputWrapper>
            <StandardLabel $text={nicknameLabel} />
            <StandardLabel $text={nicknameCaution} />
            <S.NicknameInputWrapper>
              <S.NicknameInput
                type="text"
                placeholder="사용하실 별명을 입력해주세요."
                value={nickname}
                onChange={handleNicknameChange}
              />
              <S.DuplicatedBtn
                onClick={() => handleDuplicatedNickname(nickname)}
              >
                중복확인
              </S.DuplicatedBtn>
            </S.NicknameInputWrapper>

            {isValidNickname || (
              <S.ErrorMessage>사용이 불가능한 닉네임입니다.</S.ErrorMessage>
            )}
            {duplicated ? (
              <S.ErrorMessage>이미 사용중인 닉네임이에요</S.ErrorMessage>
            ) : (
              length !== 0 && (
                <S.ErrorMessage>사용 가능한 닉네임이에요</S.ErrorMessage>
              )
            )}
            <S.TopicTopContainer>
              <S.TopicWrapper>
                <S.TopicSubWrapper>
                  <S.ToggleTopic>연령대</S.ToggleTopic>
                  <S.ToggleOptional>(선택)</S.ToggleOptional>
                </S.TopicSubWrapper>
                <AgeSelect onAgeChange={handleAgeSelect} />
              </S.TopicWrapper>
              <S.TopicWrapper>
                <S.TopicSubWrapper>
                  <S.ToggleTopic>성별</S.ToggleTopic>
                  <S.ToggleOptional>(선택)</S.ToggleOptional>
                </S.TopicSubWrapper>
                <S.TopicGenderSelect>
                  <S.MaleSelect
                    onClick={handleMaleClick}
                    selected={maleSelected}
                  >
                    남성
                  </S.MaleSelect>
                  <S.FemaleSelect
                    onClick={handleFemaleClick}
                    selected={femaleSelected}
                  >
                    여성
                  </S.FemaleSelect>
                </S.TopicGenderSelect>
              </S.TopicWrapper>
            </S.TopicTopContainer>
          </S.InputWrapper>
        </S.NicknameWrapper>
        {duplicated === true || isValidNickname === false || length === 0 ? (
          <StandardBtn $disabled={true} $background="#E9F6EE">
            다음
          </StandardBtn>
        ) : (
          <StandardBtn
            onClick={() => {
              signUp(data);
              navigate("/service/interest");
            }}
            $background="#83D0A1"
            $color="#FCFCFF"
          >
            다음
          </StandardBtn>
        )}
      </S.MainContent>
    </TopContainer>
  );
};

export default ServiceName;
