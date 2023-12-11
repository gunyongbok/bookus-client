import styled from "styled-components";
import { useParams } from "react-router-dom";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Header
import MainHeader from "../../components/Header/MainHeader";
import backArrowImg from "../../assets/img/back.png";
import profileImg from "../../assets/svg/ProfileLogo.svg";

const BookDetail = () => {
  const { libraryId } = useParams();

  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} />
    </TopContainer>
  );
};

export default BookDetail;
