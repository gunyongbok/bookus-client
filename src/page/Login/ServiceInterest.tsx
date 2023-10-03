import { useState } from "react";
import * as S from "./ServiceInterest.style";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Header
import MainHeader from "../../components/Header/MainHeader";
import backArrowImg from "../../assets/img/back.png";
import lastProgress from "../../assets/img/ThirdStep.png";

// Title
import PageTopTitle from "../../components/Title/PageTopTitle";

// Text
import {
  bookRecommend,
  bookMessage,
  interestFix,
} from "../../assets/text/message";
import StandardLabel from "../../commons/Label/StandardLabel";

// Interest
import InterestContents from "../../components/Wrapper/InterestContents";

// Next_Btn
import StandardBtn from "../../commons/Button/StandardBtn";

// Api
import submitInterestData from "../../Api/submitInterestData";

const ServiceInterest = () => {
  const [limit, setLimit] = useState<boolean>(false);
  const [array, setArray] = useState<string[]>([]);

  // 5개 검증
  const handleLimitChange = (newLimit: boolean) => {
    setLimit(newLimit);
  };

  // 관심 분야 모음 배열
  const handleInterest = (newData: string[]) => {
    setArray(newData);
  };

  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={lastProgress} />
      <S.MainContainer>
        <S.TopicWrapper>
          <PageTopTitle $text="관심 주제 선택" />
          <S.InterestWrapper>
            <StandardLabel $text={bookRecommend} />
            <StandardLabel $text={bookMessage} />
            <InterestContents
              finalData={handleInterest}
              onLimitChange={handleLimitChange}
            />
            {limit ? (
              <S.LimitMessage>최대 5개까지만 선택이 가능해요</S.LimitMessage>
            ) : null}
          </S.InterestWrapper>
        </S.TopicWrapper>
        <S.BtnWrapper>
          <StandardLabel $text={interestFix} />
          {limit ? (
            <StandardBtn $disabled={true} $background="#E9F6EE">
              다음
            </StandardBtn>
          ) : (
            <StandardBtn
              onClick={() => submitInterestData(array)}
              $background="#83D0A1"
              $color="#FCFCFF"
            >
              다음
            </StandardBtn>
          )}
        </S.BtnWrapper>
      </S.MainContainer>
    </TopContainer>
  );
};

export default ServiceInterest;
