import { useLocation } from "react-router-dom";
import * as S from "./BookInfo.style";
import { useEffect, useState } from "react";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Header
import MainHeader from "../../components/Header/MainHeader";
import backArrowImg from "../../assets/img/back.png";
import profileImg from "../../assets/svg/ProfileLogo.svg";

// extra
import { Color } from "../../assets/color/color";
import arrow from "../../assets/svg/bottomArrow.svg";

// BookInfo
import BookStatisticWrapper from "../../components/Wrapper/BookInfo/BookStatistic";
import Modal from "../../components/Model/BookInfo/EnrollBookModel";
import isBookInLibrary from "../../Api/Book/isBookInLibrary";
import BookSubDetailInfoWrapper from "../../components/Wrapper/BookInfo/BookSubDetailInfoWrapper";
import StandardBtn from "../../commons/Button/StandardBtn";

const BookInfo = () => {
  const location = useLocation();
  const book = location.state;

  const [isContentsVisible, setIsContentsVisible] = useState<boolean>(true);
  const [isStaticsVisible, setIsStaticVisible] = useState<boolean>(true);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isBookUpdated, setIsBookUpdated] = useState<boolean>(false);
  const [inLibrary, setInLibrary] = useState<boolean>(false);
  const [libraryId, setLibraryId] = useState<number>();

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  const toggleContentsVisibility = () => {
    setIsContentsVisible((prev) => !prev);
  };

  const toggleStaticsVisibility = () => {
    setIsStaticVisible((prev) => !prev);
  };

  const updateBookInfo = () => {
    setIsBookUpdated((prev) => !prev);
  };

  const BookInLibrary = async () => {
    try {
      const result = await isBookInLibrary(book.isbn);
      setInLibrary(result.isBookInLibrary);
      setLibraryId(result.libraryBookId);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    BookInLibrary();
  }, [, isBookUpdated]);

  return (
    <TopContainer $background="#FCFCFF" $isModalVisible={isModalVisible}>
      <MainHeader src1={backArrowImg} src2={profileImg} />
      <S.BookInfoContainer>
        <S.BookDetailInfoContainer>
          <S.BookThumbnailBackground>
            <S.BookThumbnail src={book.thumbnail} />
          </S.BookThumbnailBackground>
          <S.BookTitle>{book.title}</S.BookTitle>
          <S.BookAuthor>{book.authors}</S.BookAuthor>
          <BookSubDetailInfoWrapper book={book} />
          {inLibrary ? (
            <StandardBtn
              onClick={() => console.log("책 상세 페이지")}
              $border={Color.border}
              $color={Color.color}
            >
              서재로 이동하기
            </StandardBtn>
          ) : (
            <StandardBtn
              onClick={openModal}
              $border={Color.border}
              $color={Color.color}
            >
              내 서재에 추가하기
            </StandardBtn>
          )}
          <S.ContentsContainer>
            <S.ContentsTitle>
              책 소개 <img onClick={toggleContentsVisibility} src={arrow} />
            </S.ContentsTitle>
            {isContentsVisible && (
              <S.BookContents>{book.contents}</S.BookContents>
            )}
          </S.ContentsContainer>
          <S.ContentsContainer>
            <S.ContentsTitle>
              통계 보기 <img onClick={toggleStaticsVisibility} src={arrow} />
            </S.ContentsTitle>
            {isStaticsVisible && <BookStatisticWrapper isbn={book.isbn} />}
          </S.ContentsContainer>
        </S.BookDetailInfoContainer>
      </S.BookInfoContainer>
      {isModalVisible && (
        <Modal
          onClose={closeModal}
          isbn={book.isbn}
          onBookUpdate={updateBookInfo}
        />
      )}
    </TopContainer>
  );
};

export default BookInfo;
