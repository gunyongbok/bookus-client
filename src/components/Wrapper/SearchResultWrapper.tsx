import styled from "styled-components";

const Ul = styled.ul`
  width: 100%;
  height: 610px;
  overflow: auto;
  margin: 0;
  padding: 0;
`;

const BookSearchLi = styled.li`
  width: 100%;
  height: 130px;
  gap: 16px;
  display: flex;
  align-items: center;
  padding-bottom: 12px;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px 0px rgba(233, 246, 238, 0.8);
  margin-bottom: 20px;
`;

const BookThumbnail = styled.img`
  width: 28%;
  height: 100%;
`;

const BookInfoContainer = styled.div`
  width: 72%;
  height: 90px;
`;

const BookTitle = styled.div`
  color: #0f473f;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 8px;
`;

const BookAuther = styled.div`
  color: #0f473f;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
`;

const BookPublisher = styled.div`
  color: #0f473f;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  margin-bottom: 16px;
`;

const BookIconContainer = styled.div`
  width: 216px;
  height: 20px;
  padding: 2px 0px 2px 2px;
  box-sizing: border-box;
  display: flex;
  gap: 14px;
`;

const BookIconBox = styled.div`
  width: 43px;
  height: 16px;
  gap: 6px;
  display: flex;
  background-color: red;
`;

interface BookResults {
  authors: string[];
  contents: string;
  datetime: string;
  isbn: string;
  price: number;
  publisher: string;
  sale_price: number;
  status: string;
  thumbnail: string;
  title: string;
  translators: string[];
  url: string;
}

const SearchResultWrapper = ({ books }: { books: BookResults[] }) => {
  console.log(books);
  return (
    <Ul>
      {books.map((book, index) => (
        <BookSearchLi key={index}>
          <BookThumbnail src={book.thumbnail} alt={book.title} />
          <BookInfoContainer>
            <BookTitle>{book.title}</BookTitle>
            <BookAuther>{book.authors.join(", ")}</BookAuther>
            <BookPublisher>{book.publisher}</BookPublisher>
            <BookIconContainer>
              <BookIconBox></BookIconBox>
              <BookIconBox></BookIconBox>
              <BookIconBox></BookIconBox>
              <BookIconBox></BookIconBox>
            </BookIconContainer>
          </BookInfoContainer>
        </BookSearchLi>
      ))}
    </Ul>
  );
};

export default SearchResultWrapper;
