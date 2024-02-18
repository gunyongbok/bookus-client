import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
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

const LibraryContainer = styled.div`
  width: 100%;
  max-width: 358px;
  height: 700px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 13%;
  overflow: auto;
  @media (max-width: 599px) {
    height: 80%;
  }
`;

const LibraryBox = styled.div`
  width: 100%;
  min-height: 44px;
  display: flex;
  margin-bottom: 32px;
  position: sticky;
  top: 0;
  background-color: #fcfcff;
`;

const LibraryController = styled.div<{ $clicked: boolean }>`
  width: 50%;
  height: 100%;
  color: ${(props) => (props.$clicked ? "#D6ECE6" : "#83d0a1")};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  border-bottom: 2px solid
    ${(props) => (props.$clicked ? "#D6ECE6" : "#83d0a1")};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const FavoriteBookContainer = styled.div`
  width: 100%;
  height: 220px;
  margin-bottom: 32px;
`;

const BooksInMyLibrary = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin: 0px 0 60px 0;
`;

const ArrangeController = styled.div`
  width: 100%;
  height: 14px;
  margin: 26px 0 16px 3px;
  display: flex;
  gap: 10px;
`;

const ArrangeBox = styled.div`
  width: fit-content;
  color: #bbc2c1;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
`;

const ArrangeUpdateBox = styled.div`
  width: fit-content;
  color: #0f473f;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
`;

const StateControllerBox = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
`;

const InfiniteScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

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
      console.log(result);
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

  // 유저가 담은 독서록 조회
  const getBookReports = async () => {
    try {
      const result = await getMyBookReports({
        pageNumber: String(pageNumber),
        readingStatus: bookReportServerState,
      });
      console.log(result);
      setBookReports(result);
      if (bookReportServerState !== prevBookReportServerState) {
        setMyBookReports(result.content);
      } else {
        setMyBookReports((prev) => [...prev, ...result.content]);
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
      <LibraryContainer onScroll={handleScroll}>
        <LibraryBox>
          <LibraryController
            $clicked={libraryClicked}
            onClick={handleLibraryController}
          >
            서재
          </LibraryController>
          <LibraryController
            $clicked={bookReportClicked}
            onClick={handleBookReportController}
          >
            독서록
          </LibraryController>
        </LibraryBox>
        {libraryClicked ? (
          <BooksInMyLibrary>
            <LibraryTitle text="나는 북커스 님의 서재" />
            <StateControllerBox>
              {stateViewArr.map((state, index) => (
                <SelectBookState
                  key={index}
                  onClick={() => handleBookReportsState(index)}
                  isActive={index === activeStateIndexOfReport}
                >
                  {state}
                </SelectBookState>
              ))}
            </StateControllerBox>
            <ArrangeController>
              <ArrangeBox>정렬</ArrangeBox>
              <ArrangeUpdateBox>업데이트순</ArrangeUpdateBox>
            </ArrangeController>
            <InfiniteScrollContainer>
              <ShowBookReports bookReports={myBookReports} />
            </InfiniteScrollContainer>
          </BooksInMyLibrary>
        ) : (
          <>
            {favoriteBooks.length === 0 ? null : (
              <FavoriteBookContainer>
                <LibraryTitle text="나는 북커스 님의 인생책" />
                <ShowBooksInRow books={favoriteBooks} />
              </FavoriteBookContainer>
            )}
            <BooksInMyLibrary>
              <LibraryTitle text="나는 북커스 님의 서재" />
              <StateControllerBox>
                {stateViewArr.map((state, index) => (
                  <SelectBookState
                    key={index}
                    onClick={() => handleBookState(index)}
                    isActive={index === activeStateIndexOfBook}
                  >
                    {state}
                  </SelectBookState>
                ))}
              </StateControllerBox>
              <ArrangeController>
                <ArrangeBox>정렬</ArrangeBox>
                <ArrangeUpdateBox>업데이트순</ArrangeUpdateBox>
              </ArrangeController>
              <InfiniteScrollContainer>
                <ShowBooksInRow books={filteredMyBooks} />
              </InfiniteScrollContainer>
            </BooksInMyLibrary>
          </>
        )}
      </LibraryContainer>
      <Navbar />
    </TopContainer>
  );
};

export default Library;

// 어려웠던점

// --> 책 상태를 변경할때 기존 상태의 정보를 저장하고 있는 배열을 초기화하고 새로 저장해야 중복이 발생 안한다.
// 그리고 책 상태를 변경할때만 배열을 초기화해야지 같은 상태일때 스크롤을 할때는 초기화가 아닌 값을 더해줘야 한다.
// 이 로직이 225줄.
