import { styled } from "styled-components";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Header
import MainHeader from "../../components/Header/MainHeader";

// Image
import backArrowImg from "../../assets/img/back.png";
import fisrtProgress from "../../assets/img/progress1.png";

const ServiceAgree = () => {
  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={fisrtProgress} />
    </TopContainer>
  );
};

export default ServiceAgree;
