import styled from "styled-components";

const BookBox = styled.div`
  width: 100%;
  display: flex;
  height: 180px;
  justify-content: center;
  align-items: flex-start;
  gap: 28px;
`;

const Book = styled.div`
  height: 100%;
  width: 95px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BookThumbnail = styled.div`
  width: 100%;
  height: 142px;
  background-color: yellow;
  margin-bottom: 10px;
`;

const BookTitle = styled.div`
  color: #0f473f;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
`;

const BookAuthor = styled.div`
  color: #0f473f;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
`;

const ShowThreeBookInRow = () => {
  return (
    <BookBox>
      <Book>
        <BookThumbnail />
        <BookTitle>제목</BookTitle>
        <BookAuthor>작가 이름</BookAuthor>
      </Book>
      <Book>
        <BookThumbnail />
        <BookTitle>제목</BookTitle>
        <BookAuthor>작가 이름</BookAuthor>
      </Book>
      <Book>
        <BookThumbnail />
        <BookTitle>제목</BookTitle>
        <BookAuthor>작가 이름</BookAuthor>
      </Book>
    </BookBox>
  );
};

export default ShowThreeBookInRow;
