import styled from "styled-components";

export const MainContent = styled.div`
  width: 100%;
  max-width: 358px;
  height: 720px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  position: absolute;
  top: 11%;
  overflow: auto;
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
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const BookReportContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
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

export const ShowNoBookReportContainer = styled.div`
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ShowNoBookTitle = styled.div`
  color: #b9dbda;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  margin: 17px 0 10px 0;
`;

export const ShowNoBookSubTitle = styled.div`
  color: #bbc2c1;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
`;
