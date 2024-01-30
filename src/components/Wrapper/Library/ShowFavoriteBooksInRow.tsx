import styled from "styled-components";
import { FavoriteBookProps } from "../../../types/book";
import { Link } from "react-router-dom";

const BookBox = styled.div`
  width: 100%;
  display: flex;
  height: 180px;
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
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  display: flex;
  justify-content: center;
  margin-bottom: 3px;
`;

const BookAuthor = styled.div`
  color: #0f473f;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
`;

const StyledLink = styled(Link)`
  text-decoration-line: none;
`;

const EmptyBox = styled.div`
  width: 100%;
  height: 142px;
  background: #eff2f2;
`;

const ShowFavoriteBooksInRow = ({
  favorite,
}: {
  favorite: FavoriteBookProps[];
}) => {
  console.log(favorite);
  const emptyBoxCount = 3 - (favorite?.length || 0);

  return (
    <BookBox>
      {favorite?.map((book) => (
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
      {[...Array(emptyBoxCount)].map((_, index) => (
        <EmptyBox key={`empty-${index}`} />
      ))}
    </BookBox>
  );
};

export default ShowFavoriteBooksInRow;
