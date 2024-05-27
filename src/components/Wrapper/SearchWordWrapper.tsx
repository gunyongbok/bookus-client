import { useEffect, useState } from "react";
import styled from "styled-components";

import getPopularSearch from "../../Api/Search/getPopularSearch";

const Wrapper = styled.div`
  width: 100%;
  height: 113px;
  gap: 16px;
  display: flex;
  flex-direction: column;
`;

const SearchWordTitle = styled.div`
  color: #000;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 16px;
  font-weight: 500;
`;

const SearchWordBox = styled.div`
  width: 100%;
  height: 78px;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const SearchWordDetail = styled.div`
  width: fit-content;
  height: 33px;
  padding: 8px 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #e9f6ee;
  color: #4ca771;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 14px;
  font-weight: 500;
`;

const SearchWordWrapper = () => {
  const [searchData, setSearchData] = useState<{ bookTitle: string }[]>([]);

  useEffect(() => {
    const handlePopularSearch = async () => {
      await getPopularSearch(setSearchData);
    };
    handlePopularSearch();
  }, []);

  return (
    <Wrapper>
      <SearchWordTitle>인기 검색어 🍏</SearchWordTitle>
      <SearchWordBox>
        {searchData.map((item, index) => (
          <SearchWordDetail
            onClick={() => {
              console.log(item.bookTitle);
            }}
            key={index}
          >
            {item?.bookTitle.length > 15
              ? `${item?.bookTitle.slice(0, 15)}...`
              : item?.bookTitle}
          </SearchWordDetail>
        ))}
      </SearchWordBox>
    </Wrapper>
  );
};

export default SearchWordWrapper;
