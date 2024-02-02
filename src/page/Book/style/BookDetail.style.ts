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

export const BookReportsContainer = styled.div`
  width: 100%;
  max-height: 210px;
  overflow: auto;
`;

export const BookReportContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-bottom: 40px;
`;

export const LeftBookReportContainer = styled.div`
  width: 50%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 12px;

  & > *:nth-child(even) {
    background-color: #d6ece6;
  }

  & > *:nth-child(odd) {
    background-color: #e9f6ee;
  }
`;

export const RightBookReportContainer = styled.div`
  width: 50%;
  height: fit-content;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  & > *:nth-child(odd) {
    background-color: #d6ece6;
  }

  & > *:nth-child(even) {
    background-color: #e9f6ee;
  }
`;
