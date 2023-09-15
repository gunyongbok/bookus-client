import { styled } from "styled-components";
import { useState } from "react";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Header
import MainHeader from "../../components/Header/MainHeader";
// Header - Image
import backArrowImg from "../../assets/img/back.png";
import fisrtProgress from "../../assets/img/progress1.png";

// Agree
import BreakLine from "../../commons/BreakLine/BreakLine";
// Agree - Image
import AgreeBtn from "../../assets/svg/AgreeBtn.svg";
import FilledAgreeBtn from "../../assets/svg/FilledAgreeBtn.svg";
import AgreeTextBox from "../../components/Auth/AgreeTextBox";

const AgreeContainer = styled.div`
  width: 100%;
  max-width: 358px;
  height: 300px;
  display: inline-flex;
  flex-direction: column;
  gap: 60px;
  position: absolute;
  top: 40%;
`;

const AgreeTitle = styled.div`
  width: 100%;
  color: #0f473f;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  display: flex;
  justify-content: flex-start;
`;

const AgreeContent = styled.div`
  width: 100%;
  height: 212px;
  display: flex;
  flex-direction: column;
`;

const AgreeDetailWrapper = styled.div`
  width: 100%;
  gap: 24px;
  display: flex;
  flex-direction: column;
`;

const ServiceAgree = () => {
  const [all, setAll] = useState<boolean>(false);
  const [age, setAge] = useState<boolean>(false);
  const [service, setService] = useState<boolean>(false);
  const [personal, setPersonal] = useState<boolean>(false);
  const [optional, setOptional] = useState<boolean>(false);

  const toggleClickAll = () => {
    setAll(!all);
    setAge(!age);
    setService(!service);
    setPersonal(!personal);
  };

  const toggleClickAge = () => {
    setAge(!age);
  };

  const toggleClickService = () => {
    setService(!service);
  };

  const toggleClickPersonal = () => {
    setPersonal(!personal);
  };

  const toggleClickOptional = () => {
    setOptional(!optional);
  };

  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={fisrtProgress} />
      <AgreeContainer>
        <AgreeTitle>서비스 이용 동의</AgreeTitle>
        <AgreeContent>
          <AgreeTextBox
            onClick={toggleClickAll}
            imgSrc={all ? FilledAgreeBtn : AgreeBtn}
            text="약관 전체동의"
            fontWeight="600"
          />
          <BreakLine />
          <AgreeDetailWrapper>
            <AgreeTextBox
              onClick={toggleClickAge}
              imgSrc={age ? FilledAgreeBtn : AgreeBtn}
              text="만 14세 이상입니다."
            />
            <AgreeTextBox
              onClick={toggleClickService}
              imgSrc={service ? FilledAgreeBtn : AgreeBtn}
              text="(필수) 서비스 이용약관"
            />
            <AgreeTextBox
              onClick={toggleClickPersonal}
              imgSrc={personal ? FilledAgreeBtn : AgreeBtn}
              text="(필수) 개인정보 처리방침"
            />
            <AgreeTextBox
              onClick={toggleClickOptional}
              imgSrc={optional ? FilledAgreeBtn : AgreeBtn}
              text="(선택) 마케팅 정보 수신 동의"
            />
          </AgreeDetailWrapper>
        </AgreeContent>
      </AgreeContainer>
    </TopContainer>
  );
};

export default ServiceAgree;
