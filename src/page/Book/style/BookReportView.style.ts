import styled from "styled-components";

export const MainContent = styled.div`
  width: 100%;
  max-width: 358px;
  max-height: 730px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 11%;
  overflow: auto;
  @media (max-width: 599px) {
    max-height: 88%;
  }
`;

export const BookInfoContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #4ca771;
`;

export const BookTitle = styled.div`
  width: 100%;
  height: fit-content;
  color: #0f473f;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 8px;
`;

export const BookAuthor = styled.div`
  width: 100%;
  height: fit-content;
  color: #4ca771;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 24px;
`;

export const ReportTitle = styled.div`
  width: 100%;
  padding: 16px 0 16px 0;
  box-sizing: border-box;
  background-color: #fcfcff;
  color: #0f473f;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  border: none;
  border-bottom: 1px solid #b9dbda;
`;

export const BookReportControllerBox = styled.div`
  width: 100%;
  height: 19px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
`;

export const DateBox = styled.div`
  color: #bbc2c1;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
`;

export const DeleteAndEditBox = styled.div`
  width: fit-content;
  display: flex;
  gap: 10px;
`;

export const ControllBtn = styled.button`
  color: #bbc2c1;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  width: fit-content;
  height: 19px;
  background-color: transparent;
  border: none;
  text-align: center;
`;

export const ContentBox = styled.div`
  width: 100%;
  border: none;
  height: fit-content;
`;
