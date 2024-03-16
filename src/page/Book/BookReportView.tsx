import { useLocation, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as S from "./style/BookReportView.style";

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

// Navbar
import Navbar from "../../components/Navigation/Navbar";

// Modal
import BookReportDeleteModal from "../../components/Modal/BookReport/BookReportDeleteModal";
import BookReportEditModal from "../../components/Modal/BookReport/BookReportEditModal";

const BookReportView = () => {
  const { reportId } = useParams();
  const location = useLocation();
  const [report, setReport] = useState<IndividualBookReportProps>();
  const [delModalOpen, setDelModalOpen] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);

  const libraryId = location?.state?.libraryId;

  console.log(report);

  const getBookReport = async () => {
    try {
      const result = await getIndividualBookReport(reportId);
      setReport(result);
    } catch (error) {
      console.log(error);
    }
  };

  const openDelModal = () => {
    setDelModalOpen(true);
  };

  const closeDelModal = () => {
    setDelModalOpen(false);
  };

  const openEditModal = () => {
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  useEffect(() => {
    getBookReport();
  }, []);

  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} />
      <S.MainContent>
        <S.BookReportControllerBox>
          <S.DateBox>{report?.createdAt.split("T")[0]}</S.DateBox>
          <S.DeleteAndEditBox>
            <S.ControllBtn onClick={() => openEditModal()}>편집</S.ControllBtn>
            <S.ControllBtn onClick={() => openDelModal()}>삭제</S.ControllBtn>
          </S.DeleteAndEditBox>
        </S.BookReportControllerBox>
        <S.BookInfoContainer>
          <S.BookTitle>{report?.bookTitle}</S.BookTitle>
          <S.BookAuthor>{report?.authors}</S.BookAuthor>
        </S.BookInfoContainer>
        <S.ReportTitle>{report?.title}</S.ReportTitle>
        <S.ContentBox
          dangerouslySetInnerHTML={{ __html: report?.contents || "" }}
        />
      </S.MainContent>
      <Navbar />
      {editModalOpen && (
        <BookReportEditModal onClose={closeEditModal} reportId={reportId} />
      )}
      {delModalOpen && (
        <BookReportDeleteModal
          libraryId={libraryId}
          onClose={closeDelModal}
          reportId={reportId}
        />
      )}
    </TopContainer>
  );
};

export default BookReportView;
