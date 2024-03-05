import styled from "styled-components";

export const LibraryContainer = styled.div`
  width: 100%;
  max-width: 358px;
  height: 700px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 13%;
  overflow: auto;
  @media (max-width: 599px) {
    height: 80%;
  }
`;

export const LibraryBox = styled.div`
  width: 100%;
  min-height: 44px;
  display: flex;
  margin-bottom: 32px;
  position: sticky;
  top: 0;
  background-color: #fcfcff;
`;

export const LibraryController = styled.div<{ $clicked: boolean }>`
  width: 50%;
  height: 100%;
  color: ${(props) => (props.$clicked ? "#D6ECE6" : "#83d0a1")};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  border-bottom: 2px solid
    ${(props) => (props.$clicked ? "#D6ECE6" : "#83d0a1")};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const FavoriteBookContainer = styled.div`
  width: 100%;
  height: 220px;
  margin-bottom: 32px;
`;

export const BooksInMyLibrary = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  margin: 0px 0 60px 0;
`;

export const ArrangeController = styled.div`
  width: 100%;
  height: 14px;
  margin: 26px 0 16px 3px;
  display: flex;
  gap: 10px;
`;

export const ArrangeBox = styled.div`
  width: fit-content;
  color: #bbc2c1;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
`;

export const ArrangeUpdateBox = styled.div`
  width: fit-content;
  color: #0f473f;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
`;

export const StateControllerBox = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
`;

export const InfiniteScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
