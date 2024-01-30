import styled from "styled-components";
import { FavoriteBookProps } from "../../types/book";

const BookBox = styled.div`
  width: 100%;
  display: flex;
  height: 180px;
  justify-content: space-between;
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
  background-color: yellow;
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
`;

const BookAuthor = styled.div`
  color: #0f473f;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
`;

const ShowFavoriteBooks = ({ favorite }: { favorite: FavoriteBookProps[] }) => {
  console.log(favorite);
  return (
    <BookBox>
      {favorite.map((book) => (
        <Book key={book.id}>
          <BookThumbnail src={book.thumbnail} />
          <BookTitle>
            {book.title.length > 8
              ? `${book.title.slice(0, 8)}...`
              : book.title}
          </BookTitle>
          <BookAuthor>{book.authors}</BookAuthor>
        </Book>
      ))}
    </BookBox>
  );
};

export default ShowFavoriteBooks;
