import styled from "styled-components";
import { MyBookReportProps } from "../../../types/book";
import { Link } from "react-router-dom";

const ReportContainer = styled.div`
  width: 100%;
  height: 136px;
  padding: 12px 0 12px 0;
  box-sizing: border-box;
  border-top: 1px solid #bbc2c1;
  display: flex;
  gap: 16px;
  align-items: center;
`;

const ThumnailBox = styled.img`
  width: 78px;
  height: 112px;
  border-radius: 10px;
`;

const BookReportInfoBox = styled.div`
  width: 234px;
  height: 100px;
  display: inline-flex;
  flex-direction: column;
  gap: 8px;
`;

const Date = styled.div`
  color: #0f473f;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
`;

const BookTitle = styled.div`
  color: #4ca771;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
`;

const ReportTitle = styled.div`
  color: #0f473f;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
`;

const ReportContent = styled.div`
  height: 36px;
  color: #0f473f;
  text-overflow: ellipsis;
  white-space: pre-line;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  overflow: hidden;
`;

const StyledLink = styled(Link)`
  text-decoration-line: none;
`;

const reg = /<[^>]*>?/g;

const ShowBookReports = ({
  bookReports,
}: {
  bookReports: MyBookReportProps[];
}) => {
  return (
    <>
      {bookReports.map((reports) => (
        <StyledLink key={reports?.id} to={`/bookreportview/${reports.id}`}>
          <ReportContainer>
            <ThumnailBox src={reports?.thumbnail} />
            <BookReportInfoBox>
              <Date>{reports?.createdAt.slice(0, 10)}</Date>
              <BookTitle>{reports?.bookTitle}</BookTitle>
              <ReportTitle>{reports?.title}</ReportTitle>
              <ReportContent>
                {reports?.contents.replace(reg, "")}
              </ReportContent>
            </BookReportInfoBox>
          </ReportContainer>
        </StyledLink>
      ))}
    </>
  );
};

export default ShowBookReports;
