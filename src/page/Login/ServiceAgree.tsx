import { useEffect, useState } from "react";
import * as S from "./style/ServiceAgree.style";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Header
import MainHeader from "../../components/Header/MainHeader";
// Header - Image
import backArrowImg from "../../assets/img/back.png";
import fisrtProgress from "../../assets/img/FirstStep.png";

// Title
import PageTopTitle from "../../components/Title/PageTopTitle";

// Agree
import BreakLine from "../../commons/BreakLine/BreakLine";
import AgreeTextBox from "../../components/Auth/AgreeTextBox";
import StandardBtn from "../../commons/Button/StandardBtn";
// Agree - Image
import AgreeBtn from "../../assets/img/AgreeBtn.png";
import FilledAgreeBtn from "../../assets/img/FilledAgreeBtn.png";
import { useNavigate } from "react-router-dom";

interface Agreements {
  all: boolean;
  age: boolean;
  service: boolean;
  personal: boolean;
  optional: boolean;
  next: boolean;
}

interface Data {
  marketingAgreement?: boolean;
}

const useServiceAgree = () => {
  const [agreements, setAgreements] = useState<Agreements>({
    all: false,
    age: false,
    service: false,
    personal: false,
    optional: false,
    next: false,
  });
  const [data, setData] = useState<Data>({});

  const toggleAgreement = (key: keyof Agreements) => {
    setAgreements((prev) => {
      const updated = { ...prev, [key]: !prev[key] };
      if (key === "all") {
        updated.age = !prev.all;
        updated.service = !prev.all;
        updated.personal = !prev.all;
        updated.optional = !prev.all;
      }
      return updated;
    });
  };

  useEffect(() => {
    const agreeData: Data = {};
    if (agreements.service && agreements.personal) {
      setAgreements((prev) => ({ ...prev, next: true }));
      agreeData["marketingAgreement"] = true;
      setData(agreeData);
    } else {
      setAgreements((prev) => ({ ...prev, next: false }));
    }
  }, [agreements.service, agreements.personal]);

  return { agreements, data, toggleAgreement };
};

const ServiceAgree = () => {
  const navigate = useNavigate();
  const { agreements, data, toggleAgreement } = useServiceAgree();

  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={fisrtProgress} />
      <S.AgreeContainer>
        <S.AgreeWrapper>
          <PageTopTitle $text="서비스 이용 동의" />
          <S.AgreeContent>
            <AgreeTextBox
              onClick={() => toggleAgreement("all")}
              imgSrc={agreements.all ? FilledAgreeBtn : AgreeBtn}
              text="약관 전체동의"
              fontWeight="600"
            />
            <BreakLine />
            <S.AgreeDetailWrapper>
              <AgreeTextBox
                onClick={() => toggleAgreement("age")}
                imgSrc={agreements.age ? FilledAgreeBtn : AgreeBtn}
                text="만 14세 이상입니다."
              />
              <AgreeTextBox
                onClick={() => toggleAgreement("service")}
                imgSrc={agreements.service ? FilledAgreeBtn : AgreeBtn}
                text="(필수) 서비스 이용약관"
              />
              <AgreeTextBox
                onClick={() => toggleAgreement("personal")}
                imgSrc={agreements.personal ? FilledAgreeBtn : AgreeBtn}
                text="(필수) 개인정보 처리방침"
              />
              <AgreeTextBox
                onClick={() => toggleAgreement("optional")}
                imgSrc={agreements.optional ? FilledAgreeBtn : AgreeBtn}
                text="(선택) 마케팅 정보 수신 동의"
              />
            </S.AgreeDetailWrapper>
          </S.AgreeContent>
        </S.AgreeWrapper>
        {agreements.next ? (
          <StandardBtn
            onClick={() => navigate("/service/nickname", { state: { data } })}
            $background="#83D0A1"
            $color="#FCFCFF"
          >
            다음
          </StandardBtn>
        ) : (
          <StandardBtn $disabled={true} $background="#E9F6EE">
            다음
          </StandardBtn>
        )}
      </S.AgreeContainer>
    </TopContainer>
  );
};

export default ServiceAgree;
