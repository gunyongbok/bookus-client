import styled from "styled-components";

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
        <BookThumbnail src="https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1587455%3Ftimestamp%3D20221025120300" />
        <BookTitle>어린왕자</BookTitle>
        <BookAuthor>생텍쥐페리</BookAuthor>
      </Book>
      <Book>
        <BookThumbnail src="https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F5426243%3Ftimestamp%3D20230803165226" />
        <BookTitle>호아킨 소로야 바다, 바닷가에서</BookTitle>
        <BookAuthor>호아킨 소로야</BookAuthor>
      </Book>
      <Book>
        <BookThumbnail src="https://search1.kakaocdn.net/thumb/R120x174.q85/?fname=http%3A%2F%2Ft1.daumcdn.net%2Flbook%2Fimage%2F1404066%3Ftimestamp%3D20221025135430" />
        <BookTitle>물을 무서워한 악어</BookTitle>
        <BookAuthor>크리스틴 베젤</BookAuthor>
      </Book>
    </BookBox>
  );
};

export default ShowThreeBookInRow;
