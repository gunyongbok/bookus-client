import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as S from "./style/BookReportEdit.style";

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

// Modal
import EnrollBookReportEditModal from "../../components/Modal/BookReport/EnrollBookReportEditModal";

const BookReportEdit = () => {
  const { reportId } = useParams();
  const navigate = useNavigate();
  const [report, setReport] = useState<IndividualBookReportProps>();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [uploadModalOpen, setUploadModalOpen] = useState<boolean>(false);

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

  const openUploadModal = () => {
    setUploadModalOpen(true);
  };

  const closeUploadModal = () => {
    setUploadModalOpen(false);
  };

  const navigateToBookReportView = () => {
    navigate(`/bookreportview/${reportId}`);
  };

  const body = { title: title, contents: content };

  useEffect(() => {
    getBookReport();
  }, []);

  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} />
      <S.MainContent>
        <S.BookInfoContainer>
          <S.BookTitle>{report?.bookTitle}</S.BookTitle>
          <S.BookAuthor>{report?.authors}</S.BookAuthor>
        </S.BookInfoContainer>
        <S.TitleInput
          onChange={handleTitleChange}
          defaultValue={report?.title}
        />

        <Write
          defaultValue={report?.contents}
          value={content}
          onChange={handleContentChange}
        />

        <S.ButtonContainer>
          <StandardBtn
            $width="112px"
            $color="#BBC2C1"
            $border="1.5px solid  #BBC2C1"
            $clickedBackground="#BBC2C1"
            $clickedColor="#fff"
            onClick={navigateToBookReportView}
          >
            취소
          </StandardBtn>
          <StandardBtn
            $width="206px"
            $color="#83D0A1"
            $border="1.5px solid  #83D0A1"
            onClick={() => openUploadModal()}
          >
            독서록 수정하기
          </StandardBtn>
        </S.ButtonContainer>
      </S.MainContent>
      {uploadModalOpen && (
        <EnrollBookReportEditModal
          onClose={closeUploadModal}
          reportId={reportId}
          body={body}
        />
      )}
    </TopContainer>
  );
};

export default BookReportEdit;
