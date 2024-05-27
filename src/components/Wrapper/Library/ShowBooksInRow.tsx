import styled from "styled-components";

import { Link } from "react-router-dom";
import { BookProps } from "../../../types/book";

const BookBox = styled.div`
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 28px;
  margin-bottom: 32px;
`;

const Book = styled.div`
  height: 100%;
  width: 95px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BookThumbnail = styled.img`
  width: 100%;
  height: 142px;
  margin-bottom: 10px;
`;

const BookTitle = styled.div`
  width: 95px;
  height: 15px;
  color: #0f473f;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  display: flex;
  justify-content: center;
  margin-bottom: 3px;
`;

const BookAuthor = styled.div`
  color: #0f473f;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
`;

const StyledLink = styled(Link)`
  text-decoration-line: none;
`;

const EmptyBox = styled.div`
  width: 95px;
  height: 142px;
  background: #eff2f2;
`;

const ShowBooksInRow = ({ books }: { books: BookProps[] }) => {
  const maxBooksPerRow = 3;
  const emptyBoxCount = maxBooksPerRow - (books?.length % maxBooksPerRow || 0);

  return (
    <BookBox>
      {books?.map((book) => (
        <StyledLink key={book.id} to={`/bookdetail/${book.id}`}>
          <Book>
            <BookThumbnail src={book.thumbnail} />
            <BookTitle>
              {book.title.length > 8
                ? `${book.title.slice(0, 8)}...`
                : book.title}
            </BookTitle>
            <BookAuthor>{book.authors}</BookAuthor>
          </Book>
        </StyledLink>
      ))}
      {emptyBoxCount % 3 === 0
        ? null
        : [...Array(emptyBoxCount)].map((_, index) => (
            <EmptyBox key={`empty-${index}`} />
          ))}
    </BookBox>
  );
};

export default ShowBooksInRow;
