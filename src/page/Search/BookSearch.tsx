import * as S from "./style/BookSearch.style";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

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
import Navbar from "../../components/Navigation/Navbar";

const BookSearch = () => {
  const [isInputEmpty, setIsInputEmpty] = useState<boolean>(true);
  const [books, setBooks] = useState<BookResults[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") || "";

  const handleInputChange = (inputText: string) => {
    setIsInputEmpty(!inputText);
    setSearchParams({ query: inputText });
  };

  const handleSearchResults = (searchResults: BookResults[]) => {
    setBooks(searchResults);
  };

  useEffect(() => {
    if (query) {
      setIsInputEmpty(false);
    }
  }, [query]);

  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} />
      <S.BookSearchContainer>
        <BookSearchInput
          onInputChange={handleInputChange}
          onLogoClick={handleInputChange}
          onSearchResults={handleSearchResults}
          defaultValue={query}
        />
        <S.SearchResultContainer>
          {isInputEmpty ? (
            <SearchWordWrapper />
          ) : (
            <SearchResultWrapper books={books} />
          )}
        </S.SearchResultContainer>
      </S.BookSearchContainer>
      <Navbar />
    </TopContainer>
  );
};

export default BookSearch;
