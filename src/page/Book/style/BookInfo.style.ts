import styled from "styled-components";

export const BookInfoContainer = styled.div`
  width: 100%;
  max-width: 358px;
  max-height: 700px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 11%;
  overflow: auto;
  @media (max-width: 599px) {
    max-height: 88%;
  }
`;

export const BookDetailInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BookThumbnailBackground = styled.div`
  width: 100%;
  height: 260px;
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
  opacity: 1;
  background: linear-gradient(
    180deg,
    rgba(233, 246, 238, 0) 0%,
    #e9f6ee 33.46%,
    #e9f6ee 67.31%,
    rgba(233, 246, 238, 0) 100%
  );
`;

export const BookThumbnail = styled.img`
  width: 210px;
  height: 100%;
  position: relative;
  z-index: 1;
`;

export const BookTitle = styled.div`
  color: #0f473f;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const BookAuthor = styled.div`
  color: #0f473f;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 40px;
`;

export const ContentsContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

export const ContentsTitle = styled.div`
  width: 100%;
  color: #0f473f;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const BookContents = styled.div`
  width: 100%;
  height: fit-content;
  color: #0f473f;
  text-align: justify;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  padding: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
