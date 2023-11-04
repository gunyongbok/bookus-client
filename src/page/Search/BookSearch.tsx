import styled from "styled-components";
import { useState } from "react";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Header
import MainHeader from "../../components/Header/MainHeader";
import backArrowImg from "../../assets/img/back.png";
import profileImg from "../../assets/svg/ProfileLogo.svg";

// input
import BookSearchInput from "../../components/Input/BookSearchInput";
import SearchWordWrapper from "../../components/Wrapper/SearchWordWrapper";
import SearchResultWrapper from "../../components/Wrapper/SearchResultWrapper";

const BookSearchContainer = styled.div`
  width: 100%;
  max-width: 358px;
  height: 680px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 13%;
  @media (max-width: 599px) {
    height: 80%;
  }
`;

const SearchResultContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 40px;
  gap: 40px;
  display: flex;
  flex-direction: column;
`;

interface BookResults {
  authors: string[];
  contents: string;
  datetime: string;
  isbn: string;
  price: number;
  publisher: string;
  sale_price: number;
  status: string;
  thumbnail: string;
  title: string;
  translators: string[];
  url: string;
}

const BookSearch = () => {
  const [isInputEmpty, setIsInputEmpty] = useState<boolean>(true);
  const [books, setBooks] = useState<BookResults[]>([]);

  const handleInputChange = (inputText: string) => {
    setIsInputEmpty(!inputText);
    console.log(isInputEmpty);
    console.log(inputText);
  };

  const handleSearchResults = (searchResults: BookResults[]) => {
    setBooks(searchResults);
  };

  console.log(books);

  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} />
      <BookSearchContainer>
        <BookSearchInput
          onInputChange={handleInputChange}
          onLogoClick={handleInputChange}
          onSearchResults={handleSearchResults}
        />
        <SearchResultContainer>
          {isInputEmpty ? <SearchWordWrapper /> : <SearchResultWrapper />}
        </SearchResultContainer>
      </BookSearchContainer>
    </TopContainer>
  );
};

export default BookSearch;
