import * as S from "./style/BookSearch.style";
import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

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

// Navbar
import Navbar from "../../components/Navigation/Navbar";

const BookSearch = () => {
  const [isInputEmpty, setIsInputEmpty] = useState<boolean>(true);
  const [books, setBooks] = useState<BookResults[]>([]);
  const [query, setQuery] = useState<string>("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const searchQuery = searchParams.get("query");
    if (searchQuery) {
      setQuery(searchQuery);
      setIsInputEmpty(false);
    } else {
      setQuery("");
      setIsInputEmpty(true);
    }
  }, [searchParams]);

  const handleInputChange = (inputText: string) => {
    setIsInputEmpty(!inputText);
    setQuery(inputText);
  };

  const handleSearchResults = (searchResults: BookResults[]) => {
    setBooks(searchResults);
  };

  const handleSearchClick = (searchQuery: string) => {
    setQuery(searchQuery);
    setIsInputEmpty(false);
    navigate(`?query=${encodeURIComponent(searchQuery)}`);
  };

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
            <SearchWordWrapper onSearchClick={handleSearchClick} />
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
