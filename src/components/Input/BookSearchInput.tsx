import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// msg
import { inputPlaceholder } from "../../assets/text/message";

// asset
import bookSearchLogo from "../../assets/svg/BookSearchLogo.svg";

// api
import { bookSearch } from "../../Api/Search/search";

const Input = styled.input`
  width: 100%;
  height: 52px;
  border-radius: 8px;
  border: none;
  background: #e9f6ee;
  padding-left: 16px;
  box-sizing: border-box;
  color: #0f473f;
  font-family: "Pretendard Variable", sans-serif;
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

interface BookSearchInputProps {
  onInputChange: (inputText: string) => void;
  onLogoClick: (inputText: string) => void;
  onSearchResults: (searchResults: BookResults[]) => void;
  defaultValue?: string;
}

const BookSearchInput: React.FC<BookSearchInputProps> = ({
  onInputChange,
  onLogoClick,
  onSearchResults,
  defaultValue,
}) => {
  const [books, setBooks] = useState<BookResults[]>([]);
  const [text, setText] = useState<string>(defaultValue || "");
  const navigate = useNavigate();

  useEffect(() => {
    if (defaultValue !== undefined) {
      setText(defaultValue);
      if (defaultValue !== "") {
        bookSearchHttpHandler(defaultValue, true, 8);
      }
    }
  }, [defaultValue]);

  const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      navigate(`?query=${text}`);
      onInputChange(text);
    }
  };

  const onTextUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onLogoClicked = () => {
    if (text.length > 0) {
      navigate(`?query=${text}`);
      onLogoClick(text);
    }
  };

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
      } else {
        setBooks(books.concat(data.documents));
      }
      onSearchResults(data.documents);
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
