import styled from "styled-components";

import report from "../../../assets/svg/BookInfo/BookReport.svg";
import emptyStar from "../../../assets/svg/BookDetail/emptyStar.svg";
import fullStar from "../../../assets/svg/BookDetail/fullStar.svg";
import { useNavigate } from "react-router-dom";
import { BookInfoProps } from "../../../types/book";

const Wrapper = styled.div`
  width: 100%;
  height: 233px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const BookThumbnail = styled.img`
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
  font-family: "Pretendard Variable", sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  margin: 32px 0 12px 0;
`;

const BookAuthor = styled.div`
  color: #0f473f;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  margin-bottom: 6px;
`;

const BookReportCount = styled.div`
  color: #bbc2c1;
  font-family: "Pretendard Variable", sans-serif;
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
`;

const BookInfoBtn = styled.button`
  width: 168px;
  height: 30px;
  border-radius: 8px;
  border: none;
  background: #e9f6ee;
  color: #83d0a1;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  position: absolute;
  bottom: 0;
`;

const BookDetailWrapper = ({
  book,
  count,
}: {
  book?: BookInfoProps;
  count: number;
}) => {
  const navigate = useNavigate();

  const stars =
    book?.staticsRating !== undefined
      ? Array.from({ length: 5 }, (_, index) => (
          <img
            key={index}
            src={index < (book?.staticsRating ?? 0) ? fullStar : emptyStar}
            alt=""
          />
        ))
      : null;

  return (
    <Wrapper>
      <BookThumbnail src={book?.thumbnail} />
      <BookDetailInfo>
        <BookTitle>{book?.bookTitle.slice(0, 35) + "..."}</BookTitle>
        <BookAuthor>{book?.author}</BookAuthor>
        <BookReportCount>
          <img src={report} /> 독서록 {count}개
        </BookReportCount>
        <BookRating>{stars}</BookRating>
        <BookInfoBtn onClick={() => navigate(-1)}>
          도서 정보 보러가기
        </BookInfoBtn>
      </BookDetailInfo>
    </Wrapper>
  );
};

export default BookDetailWrapper;
