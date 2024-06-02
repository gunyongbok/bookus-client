import styled from "styled-components";
import { useNavigate } from "react-router-dom";

// icons
import icon1 from "../../assets/svg/BookSeachIcon/Icon1.svg";
import icon2 from "../../assets/svg/BookSeachIcon/Icon2.svg";
import icon3 from "../../assets/svg/BookSeachIcon/Icon3.svg";
import icon4 from "../../assets/svg/BookSeachIcon/Icon4.svg";

// types
import { BookResults } from "../../types/book";
import firstBookEnroll from "../../Api/Book/firstBookEnroll";
import { useEffect, useState } from "react";
import getBookStatistic from "../../Api/Search/getBookStatistic";

const Ul = styled.ul`
  width: 100%;
  height: 550px;
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
  font-family: "Pretendard Variable", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 8px;
`;

const BookAuther = styled.div`
  color: #0f473f;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
`;

const BookPublisher = styled.div`
  color: #0f473f;
  font-family: "Pretendard Variable", sans-serif;
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
  font-family: "Pretendard Variable", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
`;

interface StatisticProps {
  isbn: string;
  readyToReadCount: number;
  readingCount: number;
  readCount: number;
  favoriteCount: number;
}

const getKey = (index: number): keyof StatisticProps => {
  switch (index) {
    case 0:
      return "readyToReadCount";
    case 1:
      return "readingCount";
    case 2:
      return "readCount";
    case 3:
      return "favoriteCount";
    default:
      throw new Error("Invalid index");
  }
};

const SearchResultWrapper = ({ books }: { books: BookResults[] }) => {
  const navigate = useNavigate();
  const iconUrls = [icon1, icon2, icon3, icon4];
  const [statistic, setStatistic] = useState<StatisticProps[]>([]);

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

  const fillWithZeros = (value?: string | number): string => {
    const parsedValue = typeof value === "string" ? parseInt(value, 10) : value;
    return parsedValue !== undefined
      ? String(parsedValue).padStart(3, "0")
      : "000";
  };

  useEffect(() => {
    const fetchBookStatistic = async () => {
      try {
        if (books.length > 0) {
          const concatenatedISBNs = books
            .map((book) => book.isbn.substring(book.isbn.length - 13))
            .join(",");

          const result = await getBookStatistic(concatenatedISBNs);
          setStatistic(result);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchBookStatistic();
  }, [books]);

  console.log(statistic);

  return (
    <Ul>
      {modifiedBooks.map((book, index) => (
        <div
          key={index}
          onClick={async () => {
            await firstBookEnroll(book);
            navigate(`/bookinfo?isbn=${book.isbn}`);
          }}
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
                    <img src={iconUrl} alt={`Icon ${i + 1}`} />{" "}
                    {fillWithZeros(statistic[index]?.[getKey(i)])}
                  </BookIconBox>
                ))}
              </BookIconContainer>
            </BookInfoContainer>
          </BookSearchLi>
        </div>
      ))}
    </Ul>
  );
};

export default SearchResultWrapper;
