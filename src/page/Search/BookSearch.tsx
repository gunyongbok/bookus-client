import styled from "styled-components";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Header
import MainHeader from "../../components/Header/MainHeader";
import backArrowImg from "../../assets/img/back.png";
import profileImg from "../../assets/svg/ProfileLogo.svg";

// input
import { inputPlaceholder } from "../../assets/text/message";
import bookSearchLogo from "../../assets/svg/BookSearchLogo.svg";

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

const BookSearchInput = styled.input`
  width: 100%;
  height: 52px;
  border-radius: 8px;
  border: none;
  background: #e9f6ee;
  padding-left: 16px;
  box-sizing: border-box;
  color: #0f473f;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  position: relative;

  &:focus {
    outline: none;
  }
  &::placeholder {
    font-weight: 300;
  }
`;

const BookSearchLogo = styled.img`
  position: absolute;
  right: 20px;
  top: 14px;
  cursor: pointer;
`;

const SearchWordContainer = styled.div`
  width: 100%;
  height: 266px;
  margin-top: 40px;
  background-color: yellow;
  gap: 40px;
  display: flex;
  flex-direction: column;
`;

const SearchWordWrapper = styled.div`
  width: 100%;
  height: 113px;
  gap: 16px;
  display: flex;
  flex-direction: column;
  background-color: antiquewhite;
`;

const SearchWordTitle = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
`;

const BookSearch = () => {
  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} />
      <BookSearchContainer>
        <BookSearchInput type="text" placeholder={inputPlaceholder} />
        <BookSearchLogo src={bookSearchLogo} />
        <SearchWordContainer>
          <SearchWordWrapper>
            <SearchWordTitle>인기 검색어 🍏</SearchWordTitle>
          </SearchWordWrapper>
          <SearchWordWrapper></SearchWordWrapper>
        </SearchWordContainer>
      </BookSearchContainer>
    </TopContainer>
  );
};

export default BookSearch;
