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
  background-color: yellow;
`;

const Hi = styled.div`
  width: 100%;
  height: 78px;
  background-color: yellow;
`;

const BookSearch = () => {
  const [isInputEmpty, setIsInputEmpty] = useState<boolean>(true);

  const handleInputChange = (inputText: string) => {
    setIsInputEmpty(!inputText);
    console.log(isInputEmpty);
    console.log(inputText);
  };

  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} />
      <BookSearchContainer>
        <BookSearchInput
          onInputChange={handleInputChange}
          onLogoClick={handleInputChange}
        />
        <SearchResultContainer>
          {isInputEmpty ? <SearchWordWrapper /> : <Hi />}
        </SearchResultContainer>
      </BookSearchContainer>
    </TopContainer>
  );
};

export default BookSearch;
