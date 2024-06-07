import { useEffect, useRef, useState } from "react";
import _debounce from "lodash/debounce";

// type
import {
  BookProps,
  BookReportInterface,
  ClickInterface,
  LibraryInterface,
} from "../../../types/book";

// util
import { removeDuplicateById } from "../../../utils/removeDuplicatedById";

// api
import getFavoriteBooks from "../../../Api/Book/library/getFavoriteBooks";
import getMyBooks from "../../../Api/Book/library/getMyBooks";
import getMyBookReports from "../../../Api/Book/library/getMyBookReports";

const SERVER_STATE_VIEW = ["", "READY_TO_READ", "READING", "ALREADY_READ"];

export const useBookLibrary = () => {
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

  return {
    clickState,
    favoriteBooks,
    libraryState,
    bookReportState,
    filteredMyBooks,
    handleScroll,
    handleLibraryController,
    handleBookReportController,
    handleBookState,
    handleBookReportsState,
  };
};
