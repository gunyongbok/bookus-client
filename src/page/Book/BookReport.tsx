import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Props
import { BookInfoProps } from "../../types/book";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Header
import MainHeader from "../../components/Header/MainHeader";
import backArrowImg from "../../assets/img/back.png";
import profileImg from "../../assets/svg/ProfileLogo.svg";

// Api
import getBookInfoById from "../../Api/Book/getBookInfoById";
import styled from "styled-components";

const MainContent = styled.div`
  width: 100%;
  max-width: 358px;
  height: fit-content;
  min-height: 730px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 11%;
  background-color: yellow;
  @media (max-width: 599px) {
    height: 80%;
  }
`;

const BookReport = () => {
  const { libraryId } = useParams<{ libraryId?: string }>();
  const [book, setBook] = useState<BookInfoProps | undefined>(undefined);

  const getBookInfo = async () => {
    try {
      if (libraryId) {
        const result = await getBookInfoById(libraryId);
        setBook(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(book);

  useEffect(() => {
    getBookInfo();
  }, []);

  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} />
      <MainContent></MainContent>
    </TopContainer>
  );
};

export default BookReport;
