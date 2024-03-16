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

const stateViewArr = ["전체", "읽을 책", "읽고 있는 책", "다 읽은 책"];
const stateServerArr = ["", "READY_TO_READ", "READING", "ALREADY_READ"];

const Library = () => {
  // 상태관리
  const [libraryClicked, setLibraryClicked] = useState<boolean>(false);
  const [bookReportClicked, setBookReportClicked] = useState<boolean>(true);

  // 인생책
  const [favoriteBooks, setFavoriteBooks] = useState<BookProps[]>([]);

  // 서재
  const [books, setBooks] = useState<MyBooksProps>();
  const [myBooks, setMyBooks] = useState<BookProps[]>([]);
  const [bookServerState, setBookServerState] = useState<string>(
    stateServerArr[0]
  );
  const [prevBookServerState, setPrevBookServerState] =
    useState<string>(bookServerState);
  const [activeStateIndexOfBook, setActiveStateIndexOfBook] =
    useState<number>(0);

  // 독서록
  const [bookReports, setBookReports] = useState<MyBooksProps>();
  const [myBookReports, setMyBookReports] = useState<MyBookReportProps[]>([]);
  const [bookReportServerState, setBookReportServerState] = useState<string>(
    stateServerArr[0]
  );
  const [prevBookReportServerState, setPrevBookReportServerState] =
    useState<string>(bookReportServerState);
  const [activeStateIndexOfReport, setActiveStateIndexOfReport] =
    useState<number>(0);

  const [pageNumber, setPageNumber] = useState<number>(0);

  const filteredMyBooks = removeDuplicateById(myBooks);

  // 서재 및 독서록 선택 바
  const handleLibraryController = () => {
    setLibraryClicked((prev) => !prev);
    setBookReportClicked((prev) => !prev);
  };

  const handleBookReportController = () => {
    setBookReportClicked((prev) => !prev);
    setLibraryClicked((prev) => !prev);
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
        readingStatus: bookServerState,
      });

      setBooks(result);
      setMyBooks((prev) => [...prev, ...result.content]);
      if (bookServerState !== prevBookServerState) {
        setMyBooks(result.content);
      } else {
        setMyBooks((prev) => [...prev, ...result.content]);
      }

      setPrevBookServerState(bookServerState);
    } catch (error) {
      console.log(error);
    }
  };

  // 독서록 항목 추가 시 중복을 제거하고 추가하는 함수
  const addBookReport = (newBookReport: MyBookReportProps) => {
    // 이미 존재하는지 확인
    const isAlreadyExists = myBookReports.some(
      (bookReport) => bookReport.id === newBookReport.id
    );

    // 존재하지 않는 경우에만 추가
    if (!isAlreadyExists) {
      setMyBookReports((prevBookReports) => [
        ...prevBookReports,
        newBookReport,
      ]);
    }
  };

  // 유저가 담은 독서록 조회
  const getBookReports = async () => {
    try {
      const result = await getMyBookReports({
        pageNumber: String(pageNumber),
        readingStatus: bookReportServerState,
      });

      setBookReports(result);
      if (bookReportServerState !== prevBookReportServerState) {
        // 새로 받은 독서록으로 갱신
        setMyBookReports(result.content);
      } else {
        // 중복된 항목 제거 후 새로운 독서록 추가
        result.content.forEach((newBookReport: MyBookReportProps) => {
          addBookReport(newBookReport);
        });
      }

      setPrevBookReportServerState(bookReportServerState);
    } catch (error) {
      console.log(error);
    }
  };

  // 도서 상태 변경하였을때 여러 상태들 업데이트 해주는 함수
  const handleBookState = (index: number) => {
    setBookServerState(stateServerArr[index]);
    setActiveStateIndexOfBook(index);
    setPageNumber(0);
  };

  const handleBookReportsState = (index: number) => {
    setBookReportServerState(stateServerArr[index]);
    setActiveStateIndexOfReport(index);
    setPageNumber(0);
  };

  // 무한 스크롤 담당
  const handleScroll = _debounce(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
      if (
        (books?.hasNext === true && libraryClicked === false) ||
        (bookReports?.hasNext === true && libraryClicked === true)
      ) {
        setPageNumber((prev) => prev + 1);
      }
    }
  }, 100);

  const isInitialRender = useRef(false);

  // 조건에 맞게 불러지는 함수들
  useEffect(() => {
    if (!libraryClicked) {
      getFavoriteBookData();
    }
  }, [libraryClicked]);

  useEffect(() => {
    if (!libraryClicked) {
      getBooks();
    }
  }, [
    libraryClicked,
    bookReportServerState,
    activeStateIndexOfBook,
    pageNumber,
  ]);

  useEffect(() => {
    if (libraryClicked && isInitialRender.current) {
      getBookReports();
    } else {
      isInitialRender.current = true;
    }
  }, [
    libraryClicked,
    bookReportServerState,
    activeStateIndexOfReport,
    pageNumber,
  ]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [books?.hasNext, bookReports?.hasNext]);

  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} />
      <S.LibraryContainer onScroll={handleScroll}>
        <S.LibraryBox>
          <S.LibraryController
            $clicked={libraryClicked}
            onClick={handleLibraryController}
          >
            서재
          </S.LibraryController>
          <S.LibraryController
            $clicked={bookReportClicked}
            onClick={handleBookReportController}
          >
            독서록
          </S.LibraryController>
        </S.LibraryBox>
        {libraryClicked ? (
          <S.BooksInMyLibrary>
            <LibraryTitle text="나는 북커스 님의 서재" />
            <S.StateControllerBox>
              {stateViewArr.map((state, index) => (
                <SelectBookState
                  key={index}
                  onClick={() => handleBookReportsState(index)}
                  isActive={index === activeStateIndexOfReport}
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
              <ShowBookReports bookReports={myBookReports} />
            </S.InfiniteScrollContainer>
          </S.BooksInMyLibrary>
        ) : (
          <>
            {favoriteBooks.length === 0 ? null : (
              <S.FavoriteBookContainer>
                <LibraryTitle text="나는 북커스 님의 인생책" />
                <ShowBooksInRow books={favoriteBooks} />
              </S.FavoriteBookContainer>
            )}
            <S.BooksInMyLibrary>
              <LibraryTitle text="나는 북커스 님의 서재" />
              <S.StateControllerBox>
                {stateViewArr.map((state, index) => (
                  <SelectBookState
                    key={index}
                    onClick={() => handleBookState(index)}
                    isActive={index === activeStateIndexOfBook}
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
