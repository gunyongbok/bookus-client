import styled from "styled-components";

import report from "../../../assets/svg/BookInfo/BookReport.svg";

const Wrapper = styled.div`
  width: 100%;
  height: 233px;
  display: flex;
  justify-content: space-between;
`;

const BookThumbnail = styled.div`
  width: 45%;
  height: 100%;
  background-color: red;
`;

const BookDetailInfo = styled.div`
  width: 50%;
`;

const BookTitle = styled.div`
  width: 168px;
  color: #0f473f;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  margin: 32px 0 12px 0;
`;

const BookAuthor = styled.div`
  color: #0f473f;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  margin-bottom: 6px;
`;

const BookReportCount = styled.div`
  color: #bbc2c1;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 18px;
`;

const BookRating = styled.div`
  width: 90px;
  height: 18px;
  background-color: yellow;
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

const BookDetailWrapper = ({ book }: { book?: BookProps }) => {
  return (
    <Wrapper>
      <BookThumbnail />
      <BookDetailInfo>
        <BookTitle>{book?.bookTitle}</BookTitle>
        <BookAuthor>{book?.author}</BookAuthor>
        <BookReportCount>
          <img src={report} /> 독서록 00개
        </BookReportCount>
        <BookRating />
      </BookDetailInfo>
    </Wrapper>
  );
};

export default BookDetailWrapper;
