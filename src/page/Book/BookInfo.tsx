import { useLocation } from "react-router-dom";
import styled from "styled-components";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Header
import MainHeader from "../../components/Header/MainHeader";
import backArrowImg from "../../assets/img/back.png";
import profileImg from "../../assets/svg/ProfileLogo.svg";

import BookSubDetailInfoWrapper from "../../components/Wrapper/BookSubDetailInfoWrapper";

import StandardBtn from "../../commons/Button/StandardBtn";

// extra
import { Color } from "../../assets/color/color";
import arrow from "../../assets/svg/bottomArrow.svg";
import { useState } from "react";

const BookInfoContainer = styled.div`
  width: 100%;
  max-width: 358px;
  height: 700px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 11%;
  @media (max-width: 599px) {
    height: 80%;
  }
`;

const BookDetailInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BookThumbnailBackground = styled.div`
  width: 100%;
  height: 260px;
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

const BookThumbnail = styled.img`
  width: 210px;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const BookTitle = styled.div`
  color: #0f473f;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 10px;
`;

const BookAuthor = styled.div`
  color: #0f473f;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 40px;
`;

const BookContentsContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

const BookContentsTitle = styled.div`
  width: 100%;
  color: #0f473f;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const BookContents = styled.div`
  width: 100%;
  height: fit-content;
  color: #0f473f;
  text-align: justify;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  padding: 8px;
  box-sizing: border-box;
`;

const BookInfo = () => {
  const location = useLocation();
  const book = location.state;
  const [isContentsVisible, setIsContentsVisible] = useState<boolean>(true);

  const toggleContentsVisibility = () => {
    setIsContentsVisible((prev) => !prev);
  };

  console.log(book);

  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} />
      <BookInfoContainer>
        <BookDetailInfoContainer>
          <BookThumbnailBackground>
            <BookThumbnail src={book.thumbnail} />
          </BookThumbnailBackground>
          <BookTitle>{book.title}</BookTitle>
          <BookAuthor>{book.authors}</BookAuthor>
          <BookSubDetailInfoWrapper book={book} />
          <StandardBtn $border={Color.border} $color={Color.color}>
            내 서재에 추가하기
          </StandardBtn>
          <BookContentsContainer>
            <BookContentsTitle>
              책 소개 <img onClick={toggleContentsVisibility} src={arrow} />
            </BookContentsTitle>
            {isContentsVisible && <BookContents>{book.contents}</BookContents>}
          </BookContentsContainer>
        </BookDetailInfoContainer>
      </BookInfoContainer>
    </TopContainer>
  );
};

export default BookInfo;
