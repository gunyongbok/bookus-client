import { useEffect, useState } from "react";
import styled from "styled-components";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Header
import MainHeader from "../../components/Header/MainHeader";
import backArrowImg from "../../assets/img/back.png";
import profileImg from "../../assets/svg/ProfileLogo.svg";

// Title
import LibraryTitle from "../../components/Title/LibraryTitle";

// Books
import ShowThreeBookInRow from "../../components/Wrapper/ShowThreeBookInRow";
import { FavoriteBookProps } from "../../types/book";
import getFavoriteBooks from "../../Api/Book/library/getFavoriteBooks";
import Navbar from "../../components/Navigation/Navbar";

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

const LibraryCotroller = styled.div`
  width: 100%;
  height: 44px;
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
`;

const BooksInMyLibrary = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin: 32px 0 60px 0;
`;

const ArrangeController = styled.div`
  width: 100%;
  height: 14px;
  margin: 26px 0 16px 0;
  background-color: red;
`;

const StateControllerBox = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
`;

const IndividualState = styled.div`
  width: fit-content;
  height: 34px;
  padding: 8px 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #e9f6ee;
  color: #4ca771;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

const Library = () => {
  const [libraryClicked, setLibraryClicked] = useState<boolean>(false);
  const [bookReportClicked, setBookReportClicked] = useState<boolean>(true);
  const [favorite, setFavorite] = useState<FavoriteBookProps[]>([]);
  console.log(window.location.pathname);
  const handleLibraryController = () => {
    setLibraryClicked((prev) => !prev);
    setBookReportClicked((prev) => !prev);
  };

  const handleBookReportController = () => {
    setBookReportClicked((prev) => !prev);
    setLibraryClicked((prev) => !prev);
  };

  const getFavoriteBookData = async () => {
    try {
      const result = await getFavoriteBooks();
      setFavorite(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFavoriteBookData();
  }, []);

  console.log(favorite);
  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} />
      <LibraryContainer>
        <LibraryCotroller>
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
        </LibraryCotroller>
        <FavoriteBookContainer>
          <LibraryTitle text="나는 북커스 님의 인생책" />
          <ShowThreeBookInRow />
        </FavoriteBookContainer>
        <BooksInMyLibrary>
          <LibraryTitle text="나는 북커스 님의 서재" />
          <StateControllerBox>
            <IndividualState>전체</IndividualState>
            <IndividualState>읽을 책</IndividualState>
            <IndividualState>읽는 책</IndividualState>
            <IndividualState>읽은 책</IndividualState>
          </StateControllerBox>
          <ArrangeController />
          <ShowThreeBookInRow />
          <ShowThreeBookInRow />
          <ShowThreeBookInRow />
        </BooksInMyLibrary>
      </LibraryContainer>
      <Navbar />
    </TopContainer>
  );
};

export default Library;
