import styled from "styled-components";

const Ul = styled.ul`
  width: 100%;
  height: fit-content;
  overflow: auto;
  background-color: blue;
  margin: 0;
  padding: 0;
`;

const BookSearchResult = styled.li`
  width: 100%;
  height: 130px;
  gap: 16px;
  display: flex;
  align-items: center;
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

const SearchResultWrapper = () => {
  return (
    <Ul>
      <BookSearchResult>
        <BookThumbnail />
        <BookInfoContainer>
          <BookTitle>노인과 바다</BookTitle>
          <BookAuther>어니스트 헤밍웨이</BookAuther>
          <BookPublisher>민음사</BookPublisher>
          <BookIconContainer>
            <BookIconBox></BookIconBox>
            <BookIconBox></BookIconBox>
            <BookIconBox></BookIconBox>
            <BookIconBox></BookIconBox>
          </BookIconContainer>
        </BookInfoContainer>
      </BookSearchResult>
    </Ul>
  );
};

export default SearchResultWrapper;
