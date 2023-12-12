import styled from "styled-components";
import { Link } from "react-router-dom";

// icons
import icon1 from "../../assets/svg/BookSeachIcon/Icon1.svg";
import icon2 from "../../assets/svg/BookSeachIcon/Icon2.svg";
import icon3 from "../../assets/svg/BookSeachIcon/Icon3.svg";
import icon4 from "../../assets/svg/BookSeachIcon/Icon4.svg";

// types
import { BookResults } from "../../types/book";
import firstBookEnroll from "../../Api/Book/firstBookEnroll";

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
  align-items: center;
  color: #0f473f;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const SearchResultWrapper = ({ books }: { books: BookResults[] }) => {
  const iconUrls = [icon1, icon2, icon3, icon4];

  const modifiedBooks = books.map((book) => {
    const last13DigitsISBN = book.isbn.substring(book.isbn.length - 13);
    const modifiedDateTime = book.datetime.substring(
      0,
      book.datetime.indexOf("+")
    );

    return {
      ...book,
      isbn: last13DigitsISBN,
      datetime: modifiedDateTime,
    };
  });

  return (
    <Ul>
      {modifiedBooks.map((book, index) => (
        <StyledLink
          onClick={() => firstBookEnroll(book)}
          key={index}
          to="/bookinfo"
          state={book}
        >
          <BookSearchLi key={index}>
            <BookThumbnail src={book.thumbnail} alt={book.title} />
            <BookInfoContainer>
              <BookTitle>{book.title}</BookTitle>
              <BookAuther>{book.authors.join(", ")}</BookAuther>
              <BookPublisher>
                {book.publisher} / {book.datetime.slice(0, 4)}
              </BookPublisher>
              <BookIconContainer>
                {iconUrls.map((iconUrl, i) => (
                  <BookIconBox key={i}>
                    <img src={iconUrl} alt={`Icon ${i + 1}`} /> 000
                  </BookIconBox>
                ))}
              </BookIconContainer>
            </BookInfoContainer>
          </BookSearchLi>
        </StyledLink>
      ))}
    </Ul>
  );
};

export default SearchResultWrapper;
