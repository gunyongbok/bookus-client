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
  interestArray,
} from "../../assets/text/message";
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

const Label = styled.div`
  width: fit-content;
  color: #0f473f;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
`;

const InterestContainer = styled.div`
  width: 100%;
  height: 318px;
  margin-top: 20px;
`;

const InterestBtn = styled.div`
  width: fit-content;
  height: 43px;
  padding: 12px 20px;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background: #e9f6ee;
  margin-bottom: 12px;
  margin-right: 8px;
  color: #0f473f;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  @media (max-width: 390px) {
    padding: 8px 16px;
    font-size: 12px;
  }
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
            <Label>{bookRecommend}</Label>
            <Label>{bookMessage}</Label>
            <InterestContainer>
              {interestArray.map((interest, index) => (
                <InterestBtn key={index}>{interest}</InterestBtn>
              ))}
            </InterestContainer>
          </InterestWrapper>
        </TopicWrapper>
        <BtnWrapper>
          <Label>관심 주제는 언제든지 수정 가능해요!</Label>
          <StandardBtn $background="#E9F6EE">다음</StandardBtn>
        </BtnWrapper>
      </MainContainer>
    </TopContainer>
  );
};

export default ServiceInterest;
