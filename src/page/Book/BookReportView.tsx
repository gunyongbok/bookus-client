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

// Navbar
import Navbar from "../../components/Navigation/Navbar";
import BookReportDeleteModal from "../../components/Modal/BookReport/BookReportDeleteModal";

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

const ReportTitle = styled.div`
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

const BookReportControllerBox = styled.div`
  width: 100%;
  height: 19px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
`;

const DateBox = styled.div`
  color: #bbc2c1;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
`;

const DeleteAndEditBox = styled.div`
  width: fit-content;
  display: flex;
  gap: 10px;
`;

const ControllBtn = styled.button`
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

const ContentBox = styled.div`
  width: 100%;
  border: none;
  height: fit-content;
`;

const BookReportView = () => {
  const { reportId } = useParams();
  const [report, setReport] = useState<IndividualBookReportProps>();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const getBookReport = async () => {
    try {
      const result = await getIndividualBookReport(reportId);
      setReport(result);
    } catch (error) {
      console.log(error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  console.log(report);

  useEffect(() => {
    getBookReport();
  }, []);

  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} />
      <MainContent>
        <BookReportControllerBox>
          <DateBox>{report?.createdAt.split("T")[0]}</DateBox>
          <DeleteAndEditBox>
            <ControllBtn>편집</ControllBtn>
            <ControllBtn onClick={() => openModal()}>삭제</ControllBtn>
          </DeleteAndEditBox>
        </BookReportControllerBox>
        <BookInfoContainer>
          <BookTitle>{report?.bookTitle}</BookTitle>
          <BookAuthor>{report?.authors}</BookAuthor>
        </BookInfoContainer>
        <ReportTitle>{report?.title}</ReportTitle>
        <ContentBox
          dangerouslySetInnerHTML={{ __html: report?.contents || "" }}
        />
      </MainContent>
      <Navbar />
      {isModalOpen && (
        <BookReportDeleteModal onClose={closeModal} reportId={reportId} />
      )}
    </TopContainer>
  );
};

export default BookReportView;
