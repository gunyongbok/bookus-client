import { useEffect, useRef, useState } from "react";
import * as S from "./style/Library.style";
import _debounce from "lodash/debounce";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Header
import MainHeader from "../../components/Header/MainHeader";
import backArrowImg from "../../assets/img/back.png";
import profileImg from "../../assets/svg/ProfileLogo.svg";

// Title
import LibraryTitle from "../../components/Title/LibraryTitle";

// Books
import ShowBooksInRow from "../../components/Wrapper/Library/ShowBooksInRow";
import SelectBookState from "../../components/Wrapper/Library/SelectBookState";
import ShowBookReports from "../../components/Wrapper/Library/ShowBookReports";

// Api
import getFavoriteBooks from "../../Api/Book/library/getFavoriteBooks";
import getMyBooks from "../../Api/Book/library/getMyBooks";
import getMyBookReports from "../../Api/Book/library/getMyBookReports";

// Navbar
import Navbar from "../../components/Navigation/Navbar";

// Props
import { BookProps, MyBookReportProps, MyBooksProps } from "../../types/book";

//utils
import { removeDuplicateById } from "../../utils/removeDuplicatedById";

const STATE_VIEW = ["전체", "읽을 책", "읽고 있는 책", "다 읽은 책"];
const SERVER_STATE_VIEW = ["", "READY_TO_READ", "READING", "ALREADY_READ"];

interface ClickInterface {
  libraryClicked: boolean;
  bookReportClicked: boolean;
}

interface LibraryInterface {
  books: MyBooksProps | undefined;
  myBooks: BookProps[];
  bookServerState: string;
  prevBookServerState: string;
  activeStateIndexOfBook: number;
}

interface BookReportInterface {
  bookReports: MyBooksProps | undefined;
  myBookReports: MyBookReportProps[];
  bookReportServerState: string;
  prevBookReportServerState: string;
  activeStateIndexOfReport: number;
}

const Library = () => {
  // 상태관리
  const [clickState, setClickState] = useState<ClickInterface>({
    libraryClicked: false,
    bookReportClicked: true,
  });

  // 인생책
  const [favoriteBooks, setFavoriteBooks] = useState<BookProps[]>([]);

  // 서재
  const [libraryState, setLibraryState] = useState<LibraryInterface>({
    books: undefined,
    myBooks: [],
    bookServerState: SERVER_STATE_VIEW[0],
    prevBookServerState: SERVER_STATE_VIEW[0],
    activeStateIndexOfBook: 0,
  });

  // 독서록
  const [bookReportState, setBookReportState] = useState<BookReportInterface>({
    bookReports: undefined,
    myBookReports: [],
    bookReportServerState: SERVER_STATE_VIEW[0],
    prevBookReportServerState: SERVER_STATE_VIEW[0],
    activeStateIndexOfReport: 0,
  });

  // 페이지
  const [pageNumber, setPageNumber] = useState<number>(0);

  const filteredMyBooks = removeDuplicateById(libraryState.myBooks);

  // 서재 및 독서록 선택 바
  const handleLibraryController = () => {
    setClickState((prevState) => ({
      libraryClicked: !prevState.libraryClicked,
      bookReportClicked: !prevState.bookReportClicked,
    }));
  };

  const handleBookReportController = () => {
    setClickState((prevState) => ({
      libraryClicked: !prevState.libraryClicked,
      bookReportClicked: !prevState.bookReportClicked,
    }));
  };
  // 인생 책 조회
  const getFavoriteBookData = async () => {
    try {
      const result = await getFavoriteBooks();
      setFavoriteBooks(result);
    } catch (error) {
      console.log(error);
    }
  };

  // 유저가 담은 도서 조회
  const getBooks = async () => {
    try {
      const result = await getMyBooks({
        pageNumber: String(pageNumber),
        readingStatus: libraryState.bookServerState,
      });

      setLibraryState((prevState) => ({
        ...prevState,
        books: result,
        myBooks:
          libraryState.bookServerState !== libraryState.prevBookServerState
            ? result.content
            : [...prevState.myBooks, ...result.content],
        prevBookServerState: libraryState.bookServerState,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  // 유저가 담은 독서록 조회
  const getBookReports = async () => {
    try {
      const result = await getMyBookReports({
        pageNumber: String(pageNumber),
        readingStatus: bookReportState.bookReportServerState,
      });

      setBookReportState((prevState) => ({
        ...prevState,
        bookReports: result,
        myBookReports:
          bookReportState.bookReportServerState !==
          bookReportState.prevBookReportServerState
            ? result.content
            : [...prevState.myBookReports, ...result.content],
        prevBookReportServerState: bookReportState.bookReportServerState,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  // 도서 상태 변경하였을때 여러 상태들 업데이트 해주는 함수
  const handleBookState = (index: number) => {
    setLibraryState((prevState) => ({
      ...prevState,
      bookServerState: SERVER_STATE_VIEW[index],
      activeStateIndexOfBook: index,
    }));
    setPageNumber(0);
  };

  const handleBookReportsState = (index: number) => {
    setBookReportState((prevState) => ({
      ...prevState,
      bookReportServerState: SERVER_STATE_VIEW[index],
      activeStateIndexOfReport: index,
    }));
    setPageNumber(0);
  };

  // 무한 스크롤 담당
  const handleScroll = _debounce(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
      if (
        (libraryState.books?.hasNext === true &&
          clickState.libraryClicked === false) ||
        (bookReportState.bookReports?.hasNext === true &&
          clickState.libraryClicked === true)
      ) {
        setPageNumber((prev) => prev + 1);
      }
    }
  }, 100);

  const isInitialRender = useRef(false);

  // 조건에 맞게 불러지는 함수들
  useEffect(() => {
    if (!clickState.libraryClicked) {
      getFavoriteBookData();
    }
  }, [clickState.libraryClicked]);

  useEffect(() => {
    if (!clickState.libraryClicked) {
      getBooks();
    }
  }, [
    clickState.libraryClicked,
    libraryState.bookServerState,
    libraryState.activeStateIndexOfBook,
    pageNumber,
  ]);

  useEffect(() => {
    if (clickState.libraryClicked && isInitialRender.current) {
      getBookReports();
    } else {
      isInitialRender.current = true;
    }
  }, [
    clickState.libraryClicked,
    bookReportState.bookReportServerState,
    bookReportState.activeStateIndexOfReport,
    pageNumber,
  ]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [libraryState.books?.hasNext, bookReportState.bookReports?.hasNext]);

  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} />
      <S.LibraryContainer onScroll={handleScroll}>
        <S.LibraryBox>
          <S.LibraryController
            $clicked={clickState.libraryClicked}
            onClick={handleLibraryController}
          >
            서재
          </S.LibraryController>
          <S.LibraryController
            $clicked={clickState.bookReportClicked}
            onClick={handleBookReportController}
          >
            독서록
          </S.LibraryController>
        </S.LibraryBox>
        {clickState.libraryClicked ? (
          <S.BooksInMyLibrary>
            <LibraryTitle text="나의 독서록" />
            <S.StateControllerBox>
              {STATE_VIEW.map((state, index) => (
                <SelectBookState
                  key={index}
                  onClick={() => handleBookReportsState(index)}
                  isActive={index === bookReportState.activeStateIndexOfReport}
                >
                  {state}
                </SelectBookState>
              ))}
            </S.StateControllerBox>
            <S.ArrangeController>
              <S.ArrangeBox>정렬</S.ArrangeBox>
              <S.ArrangeUpdateBox>업데이트순</S.ArrangeUpdateBox>
            </S.ArrangeController>
            <S.InfiniteScrollContainer>
              <ShowBookReports bookReports={bookReportState.myBookReports} />
            </S.InfiniteScrollContainer>
          </S.BooksInMyLibrary>
        ) : (
          <>
            {favoriteBooks.length === 0 ? null : (
              <S.FavoriteBookContainer>
                <LibraryTitle text="나의 인생책" />
                <ShowBooksInRow books={favoriteBooks} />
              </S.FavoriteBookContainer>
            )}
            <S.BooksInMyLibrary>
              <LibraryTitle text="나의 서재" />
              <S.StateControllerBox>
                {STATE_VIEW.map((state, index) => (
                  <SelectBookState
                    key={index}
                    onClick={() => handleBookState(index)}
                    isActive={index === libraryState.activeStateIndexOfBook}
                  >
                    {state}
                  </SelectBookState>
                ))}
              </S.StateControllerBox>
              <S.ArrangeController>
                <S.ArrangeBox>정렬</S.ArrangeBox>
                <S.ArrangeUpdateBox>업데이트순</S.ArrangeUpdateBox>
              </S.ArrangeController>
              <S.InfiniteScrollContainer>
                <ShowBooksInRow books={filteredMyBooks} />
              </S.InfiniteScrollContainer>
            </S.BooksInMyLibrary>
          </>
        )}
      </S.LibraryContainer>
      <Navbar />
    </TopContainer>
  );
};

export default Library;

// 어려웠던점

// --> 책 상태를 변경할때 기존 상태의 정보를 저장하고 있는 배열을 초기화하고 새로 저장해야 중복이 발생 안한다.
// 그리고 책 상태를 변경할때만 배열을 초기화해야지 같은 상태일때 스크롤을 할때는 초기화가 아닌 값을 더해줘야 한다.
// 이 로직이 225줄.
