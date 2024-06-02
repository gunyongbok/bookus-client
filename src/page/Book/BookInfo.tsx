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

// Wrapper
import BookStatisticWrapper from "../../components/Wrapper/BookInfo/BookStatistic";
import BookSubDetailInfoWrapper from "../../components/Wrapper/BookInfo/BookSubDetailInfoWrapper";

// Modal
import Modal from "../../components/Modal/BookInfo/EnrollBookModel";

// Btn
import StandardBtn from "../../commons/Button/StandardBtn";

// API
import getBookInfoByIsbn from "../../Api/Book/info/getBookInfoByIsbn";
import isBookInLibrary from "../../Api/Book/isBookInLibrary";

// type
import { BookData } from "../../types/book";

const BookInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const searchParams = new URLSearchParams(location.search);
  const isbn = searchParams.get("isbn");

  const [bookInfo, setBookInfo] = useState<BookData>();
  const [isContentsVisible, setIsContentsVisible] = useState<boolean>(true);
  const [isStaticsVisible, setIsStaticVisible] = useState<boolean>(true);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isBookUpdated, setIsBookUpdated] = useState<boolean>(false);
  const [inLibrary, setInLibrary] = useState<boolean>(false);
  const [libraryId, setLibraryId] = useState<number>();

  useEffect(() => {
    const getBookInfo = async () => {
      try {
        const result = await getBookInfoByIsbn(isbn);
        setBookInfo(result);
      } catch (error) {
        console.log(error);
      }
    };

    getBookInfo();
  }, []);

  useEffect(() => {
    const bookInLibrary = async () => {
      if (bookInfo) {
        try {
          const result = await isBookInLibrary(bookInfo?.isbn);
          console.log(result);
          setInLibrary(result.isBookInLibrary);
          setLibraryId(result.libraryBookId);
        } catch (error) {
          console.log(error);
        }
      }
    };

    bookInLibrary();
  }, [bookInfo, isBookUpdated]);

  console.log(inLibrary, libraryId);

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

  const handleButtonClick = () => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken === null) navigate("/none");
    else if (inLibrary) {
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
            <S.BookThumbnail src={bookInfo?.thumbnail} />
          </S.BookThumbnailBackground>
          <S.BookTitle>{bookInfo?.title}</S.BookTitle>
          <S.BookAuthor>{bookInfo?.authors}</S.BookAuthor>
          {bookInfo && <BookSubDetailInfoWrapper book={bookInfo} />}
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
              <S.BookContents>{bookInfo?.contents}</S.BookContents>
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
            {bookInfo && isStaticsVisible && (
              <BookStatisticWrapper isbn={bookInfo.isbn} />
            )}
          </S.ContentsContainer>
        </S.BookDetailInfoContainer>
      </S.BookInfoContainer>
      {isModalVisible && bookInfo && (
        <Modal
          onClose={closeModal}
          isbn={bookInfo?.isbn}
          onBookUpdate={updateBookInfo}
        />
      )}
    </TopContainer>
  );
};

export default BookInfo;
