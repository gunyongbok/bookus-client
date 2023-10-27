import { useEffect, useState } from "react";
import styled from "styled-components";

import { inputPlaceholder } from "../../assets/text/message";
import bookSearchLogo from "../../assets/svg/BookSearchLogo.svg";
import { bookSearch } from "../../Api/search";

const Input = styled.input`
  width: 100%;
  height: 52px;
  border-radius: 8px;
  border: none;
  background: #e9f6ee;
  padding-left: 16px;
  box-sizing: border-box;
  color: #0f473f;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 500;
  position: relative;

  &:focus {
    outline: none;
  }
  &::placeholder {
    font-weight: 300;
  }
`;

const BookSearchLogo = styled.img`
  position: absolute;
  right: 20px;
  top: 14px;
  cursor: pointer;
`;

interface Book {
  title: string;
  author: string;
}

const BookSearchInput = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [text, setText] = useState<string>("");
  const [query, setQuery] = useState<string>("");

  // 엔터를 눌렀을 때 호출 되는 함수
  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setQuery(text);
    }
  };

  // text 검색어가 바뀔 때 호출되는 함수.
  const onTextUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onLogoClicked = () => {
    if (query.length > 0) {
      bookSearchHttpHandler(query, true, 8);
    }
  };

  useEffect(() => {
    if (query.length > 0) {
      bookSearchHttpHandler(query, true, 8);
    }
  }, [query]);

  const bookSearchHttpHandler = async (
    query: string,
    reset: boolean,
    page: number
  ) => {
    const params = {
      query: query,
      sort: "accuracy",
      page: page,
      size: 8,
    };

    try {
      const data = await bookSearch(params);
      if (reset) {
        setBooks(data.documents);
      }
      setBooks(books.concat(data.documents));
      console.log(data);
    } catch (error) {
      console.error("Error >>", error);
    }
  };
  return (
    <>
      <Input
        type="text"
        placeholder={inputPlaceholder}
        name="query"
        onKeyDown={onEnter}
        onChange={onTextUpdate}
        value={text}
      />
      <BookSearchLogo onClick={onLogoClicked} src={bookSearchLogo} />
    </>
  );
};

export default BookSearchInput;
