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

// Api
import getFavoriteBooks from "../../Api/Book/library/getFavoriteBooks";
import getMyBooks from "../../Api/Book/library/getMyBooks";

// Navbar
import Navbar from "../../components/Navigation/Navbar";

// Props
import { BookProps, MyBooksProps } from "../../types/book";
import SelectBookState from "../../components/Wrapper/Library/SelectBookState";

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

const removeDuplicateById = (booksArray: BookProps[]): BookProps[] => {
  const uniqueIds = new Set<number>();
  return booksArray.filter((book) => {
    if (!uniqueIds.has(book.id)) {
      uniqueIds.add(book.id);
      return true;
    }
    return false;
  });
};

const Library = () => {
  const [libraryClicked, setLibraryClicked] = useState<boolean>(false);
  const [bookReportClicked, setBookReportClicked] = useState<boolean>(true);
  const [favoriteBooks, setFavoriteBooks] = useState<BookProps[]>([]);

  const [books, setBooks] = useState<MyBooksProps>();
  const [myBooks, setMyBooks] = useState<BookProps[]>([]);
  const [bookState, setBookState] = useState<string>(stateViewArr[0]);
  const [bookServerState, setBookServerState] = useState<string>(
    stateServerArr[0]
  );

  const [activeStateIndex, setActiveStateIndex] = useState<number>(0);
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

  console.log(libraryClicked, bookReportClicked);

  // 인생 책 조회
  const getFavoriteBookData = async () => {
    try {
      const result = await getFavoriteBooks();
      setFavoriteBooks(result);
    } catch (error) {
      console.log(error);
    }
  };

  const getBooks = async () => {
    try {
      const result = await getMyBooks({
        pageNumber: String(pageNumber),
        readingStatus: bookServerState,
      });
      console.log(result);
      setBooks(result);
      setMyBooks((prev) => [...prev, ...result.content]);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(bookState, bookServerState);

  const handleBookState = (index: number) => {
    setBookState(stateViewArr[index]);
    setBookServerState(stateServerArr[index]);
    setActiveStateIndex(index);
    setPageNumber(0);
  };

  const getBooksWhenBookStateChanged = async () => {
    try {
      const result = await getMyBooks({
        pageNumber: String(pageNumber),
        readingStatus: bookServerState,
      });
      console.log(result);
      setBooks(result);
      setMyBooks(result?.content);
    } catch (error) {
      console.log(error);
    }
  };

  const handleScroll = _debounce(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 10) {
      if (books?.hasNext) {
        setPageNumber((prev) => prev + 1);
      }
    }
  }, 100);

  const isInitialRender = useRef(false);

  useEffect(() => {
    getFavoriteBookData();
  }, []);

  useEffect(() => {
    if (isInitialRender.current) {
      getBooksWhenBookStateChanged();
    } else {
      isInitialRender.current = true;
    }
  }, [bookState, bookServerState, activeStateIndex]);

  useEffect(() => {
    if (isInitialRender.current) {
      getBooks();
    } else {
      isInitialRender.current = true;
    }
  }, [pageNumber]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [books?.hasNext]);

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
                  onClick={() => handleBookState(index)}
                  isActive={index === activeStateIndex}
                >
                  {state}
                </SelectBookState>
              ))}
            </StateControllerBox>
            <ArrangeController>
              <ArrangeBox>정렬</ArrangeBox>
              <ArrangeUpdateBox>업데이트순</ArrangeUpdateBox>
            </ArrangeController>
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
                    isActive={index === activeStateIndex}
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
