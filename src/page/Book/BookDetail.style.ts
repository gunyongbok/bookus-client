import styled from "styled-components";

export const MainContent = styled.div`
  width: 100%;
  max-width: 358px;
  height: fit-content;
  min-height: 430px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: absolute;
  top: 11%;
  @media (max-width: 599px) {
    height: 80%;
  }
`;

export const BookStateWrapper = styled.div`
  width: 100%;
  height: 76px;
  display: flex;
  gap: 16px;
  & > :last-child {
    position: absolute;
    right: 0;
  }
`;

export const BookStateBox = styled.div`
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  color: #bbc2c1;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
`;

export const BookStateString = styled.div`
  color: #bbc2c1;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
`;

export const BookDateAndRatingBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
