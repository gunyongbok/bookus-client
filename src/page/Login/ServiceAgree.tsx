import { styled } from "styled-components";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

import backArrowImg from "../../assets/img/back.png";

import fisrtProgress from "../../assets/img/progress1.png";
import MainHeader from "../../components/Header/MainHeader";

const ServiceAgree = () => {
  return (
    <TopContainer background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={fisrtProgress} />
    </TopContainer>
  );
};

export default ServiceAgree;
