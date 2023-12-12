import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Header
import MainHeader from "../../components/Header/MainHeader";
import backArrowImg from "../../assets/img/back.png";
import profileImg from "../../assets/svg/ProfileLogo.svg";

// Api
import getBookInfoById from "../../Api/Book/getBookInfoById";

// BookDeail
import BookDetailWrapper from "../../components/Wrapper/BookDetail/BookDetailWrapper";

const MainContent = styled.div`
  width: 100%;
  max-width: 358px;
  height: fit-content;
  min-height: 430px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: absolute;
  top: 11%;
  @media (max-width: 599px) {
    height: 80%;
  }
`;

interface BookProps {
  libraryId: number;
  bookTitle: string;
  author: string[];
  bookId: number;
  isbn: string;
  readingStatus: string;
  rating: number;
  startReadingAt: string;
  endReadingAt: string;
}

const BookDetail = () => {
  const { libraryId } = useParams<{ libraryId?: string }>();
  const [book, setBook] = useState<BookProps>();

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

  useEffect(() => {
    getBookInfo();
  }, []);

  console.log(book);
  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} />
      <MainContent>
        <BookDetailWrapper book={book} />
      </MainContent>
    </TopContainer>
  );
};

export default BookDetail;
