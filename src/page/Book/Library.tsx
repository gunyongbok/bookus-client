import * as S from "./style/Library.style";

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

// custom-hook
import { useBookLibrary } from "./hook/useBookLibrary";

// navbar
import Navbar from "../../components/Navigation/Navbar";

const STATE_VIEW = ["전체", "읽을 책", "읽고 있는 책", "다 읽은 책"];

const Library = () => {
  const {
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
  } = useBookLibrary();

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
