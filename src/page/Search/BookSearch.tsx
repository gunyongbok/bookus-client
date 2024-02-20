import * as S from "./style/BookSearch.style";
import { useState } from "react";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Header
import MainHeader from "../../components/Header/MainHeader";
import backArrowImg from "../../assets/img/back.png";
import profileImg from "../../assets/svg/ProfileLogo.svg";

// input
import BookSearchInput from "../../components/Input/BookSearchInput";

// Main_Search_Result
import SearchWordWrapper from "../../components/Wrapper/SearchWordWrapper";
import SearchResultWrapper from "../../components/Wrapper/SearchResultWrapper";

// types
import { BookResults } from "../../types/book";

const BookSearch = () => {
  const [isInputEmpty, setIsInputEmpty] = useState<boolean>(true);
  const [books, setBooks] = useState<BookResults[]>([]);

  console.log(books);

  const handleInputChange = (inputText: string) => {
    setIsInputEmpty(!inputText);
  };

  const handleSearchResults = (searchResults: BookResults[]) => {
    setBooks(searchResults);
  };

  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} />
      <S.BookSearchContainer>
        <BookSearchInput
          onInputChange={handleInputChange}
          onLogoClick={handleInputChange}
          onSearchResults={handleSearchResults}
        />
        <S.SearchResultContainer>
          {isInputEmpty ? (
            <SearchWordWrapper />
          ) : (
            <SearchResultWrapper books={books} />
          )}
        </S.SearchResultContainer>
      </S.BookSearchContainer>
    </TopContainer>
  );
};

export default BookSearch;
