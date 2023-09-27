import styled from "styled-components";

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

const MainContainer = styled.div`
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

const TopicWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const InterestWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 8px;
  line-height: normal;
`;

const BtnWrapper = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const ServiceInterest = () => {
  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={lastProgress} />
      <MainContainer>
        <TopicWrapper>
          <PageTopTitle $text="관심 주제 선택" />
          <InterestWrapper>
            <StandardLabel $text={bookRecommend} />
            <StandardLabel $text={bookMessage} />
            <InterestContents />
          </InterestWrapper>
        </TopicWrapper>
        <BtnWrapper>
          <StandardLabel $text={interestFix} />
          <StandardBtn $background="#E9F6EE">다음</StandardBtn>
        </BtnWrapper>
      </MainContainer>
    </TopContainer>
  );
};

export default ServiceInterest;
