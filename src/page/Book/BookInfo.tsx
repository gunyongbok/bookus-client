import { useLocation, useNavigate } from "react-router-dom";
import * as S from "./style/BookInfo.style";
import { useEffect, useState } from "react";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Header
import MainHeader from "../../components/Header/MainHeader";
import backArrowImg from "../../assets/img/back.png";
import profileImg from "../../assets/svg/ProfileLogo.svg";

// Assets
import { Color } from "../../assets/color/color";
import bottomArrow from "../../assets/svg/bottomArrow.svg";
import topArrow from "../../assets/svg/BookInfo/topArrow.svg";

// BookInfo
import BookStatisticWrapper from "../../components/Wrapper/BookInfo/BookStatistic";
import Modal from "../../components/Modal/BookInfo/EnrollBookModel";
import isBookInLibrary from "../../Api/Book/isBookInLibrary";
import BookSubDetailInfoWrapper from "../../components/Wrapper/BookInfo/BookSubDetailInfoWrapper";
import StandardBtn from "../../commons/Button/StandardBtn";

const BookInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
    console.log(isContentsVisible);
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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    BookInLibrary();
  }, [, isBookUpdated]);

  const handleButtonClick = () => {
    if (inLibrary) {
      navigate(`/bookdetail/${libraryId}`);
    } else {
      openModal();
    }
  };

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
          <StandardBtn
            onClick={handleButtonClick}
            $border={Color.border}
            $color={Color.color}
          >
            {inLibrary ? "서재로 이동하기" : "내 서재에 추가하기"}
          </StandardBtn>
          <S.ContentsContainer>
            <S.ContentsTitle>
              책 소개{" "}
              {isContentsVisible ? (
                <img onClick={toggleContentsVisibility} src={bottomArrow} />
              ) : (
                <img onClick={toggleContentsVisibility} src={topArrow} />
              )}
            </S.ContentsTitle>
            {isContentsVisible && (
              <S.BookContents>{book.contents}</S.BookContents>
            )}
          </S.ContentsContainer>
          <S.ContentsContainer>
            <S.ContentsTitle>
              통계 보기{" "}
              {isStaticsVisible ? (
                <img onClick={toggleStaticsVisibility} src={bottomArrow} />
              ) : (
                <img onClick={toggleStaticsVisibility} src={topArrow} />
              )}
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
