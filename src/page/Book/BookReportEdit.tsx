import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

// Api
import getIndividualBookReport from "../../Api/Book/report/getIndividualBookReport";

// Props
import { IndividualBookReportProps } from "../../types/book";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Header
import MainHeader from "../../components/Header/MainHeader";
import backArrowImg from "../../assets/img/back.png";
import profileImg from "../../assets/svg/ProfileLogo.svg";

// Btn
import StandardBtn from "../../commons/Button/StandardBtn";
import Write from "../../components/Input/textEditor/Write";
import editBookReport from "../../Api/Book/report/editBookReport";

const MainContent = styled.div`
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

const BookInfoContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #4ca771;
`;

const BookTitle = styled.div`
  width: 100%;
  height: fit-content;
  color: #0f473f;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 8px;
`;

const BookAuthor = styled.div`
  width: 100%;
  height: fit-content;
  color: #4ca771;
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 24px;
`;

const TitleInput = styled.input`
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
  &::placeholder {
    color: #bbc2c1;
  }
  &:focus {
    outline: none;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`;

const BookReportEdit = () => {
  const { reportId } = useParams();
  const [report, setReport] = useState<IndividualBookReportProps>();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const getBookReport = async () => {
    try {
      const result = await getIndividualBookReport(reportId);
      setReport(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (content: string) => {
    setContent(content);
  };

  const submitBookReportEdit = () => {
    editBookReport(reportId, { title: title, contents: content });
  };

  useEffect(() => {
    getBookReport();
  }, []);

  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} />
      <MainContent>
        <BookInfoContainer>
          <BookTitle>{report?.bookTitle}</BookTitle>
          <BookAuthor>{report?.authors}</BookAuthor>
        </BookInfoContainer>
        <TitleInput onChange={handleTitleChange} defaultValue={report?.title} />

        <Write
          defaultValue={report?.contents}
          value={content}
          onChange={handleContentChange}
        />

        <ButtonContainer>
          <StandardBtn
            $width="112px"
            $color="#BBC2C1"
            $border="1.5px solid  #BBC2C1"
            $clickedBackground="#BBC2C1"
            $clickedColor="#fff"
          >
            취소
          </StandardBtn>
          <StandardBtn
            $width="206px"
            $color="#83D0A1"
            $border="1.5px solid  #83D0A1"
            onClick={() => submitBookReportEdit()}
          >
            독서록 수정하기
          </StandardBtn>
        </ButtonContainer>
      </MainContent>
    </TopContainer>
  );
};

export default BookReportEdit;
