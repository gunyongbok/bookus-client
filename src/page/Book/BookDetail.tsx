import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as S from "./BookDetail.style";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Header
import MainHeader from "../../components/Header/MainHeader";
import backArrowImg from "../../assets/img/back.png";
import profileImg from "../../assets/svg/ProfileLogo.svg";

// Api
import getBookInfoById from "../../Api/Book/getBookInfoById";
import getReportsBySelectedBook from "../../Api/Book/getReportsBySelectedBook";

// BookDeail
import BookDetailWrapper from "../../components/Wrapper/BookDetail/BookDetailWrapper";
import StandardBtn from "../../commons/Button/StandardBtn";
import { bookState } from "../../assets/svg/BookDetail/bookDetailAsset";

// Modal
import ChangeBookStateModal from "../../components/Model/BookDetail/ChangeBookState";
import DeleteBookModal from "../../components/Model/BookDetail/DeleteBookModal";

// Date
import DateController from "../../components/Input/BookDetail/DateController";
import MyBookScore from "../../components/Wrapper/BookDetail/MyBookScore";
import DoubleDateController from "../../components/Input/BookDetail/DoubleDateController";

// Reports
import BookReportBox from "../../components/Wrapper/BookDetail/BookReportBox";

// types
import { BookInfoProps } from "../../types/book";
import styled from "styled-components";

interface ModalProps {
  libraryId: string;
  state: string;
}

interface BookReport {
  id: number;
  title: string;
  contents: string;
  createdAt: string;
}

const BookReportsContainer = styled.div`
  width: 100%;
  max-height: 210px;
  overflow: auto;
`;

const BookReportContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-bottom: 40px;
`;

const LeftBookReportContainer = styled.div`
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

const RightBookReportContainer = styled.div`
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

const formatDate = (inputDate: string) => {
  const date = new Date(inputDate);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}.${month}.${day}`;
};

const BookDetail = () => {
  const navigate = useNavigate();
  const { libraryId } = useParams<{ libraryId?: string }>();
  const [book, setBook] = useState<BookInfoProps | undefined>(undefined);
  const [readingStatus, setReadingStatus] = useState<string>("");
  const [selectedBookState, setSelectedBookState] = useState<ModalProps | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [bookReport, setBookReport] = useState<BookReport[]>([]);

  const evenBookReports = bookReport.filter((_, index) => index % 2 === 0);
  const oddBookReports = bookReport.filter((_, index) => index % 2 !== 0);

  const getBookInfo = async () => {
    try {
      if (libraryId) {
        const result = await getBookInfoById(libraryId);
        setBook(result);
        setReadingStatus(result.readingStatus);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getBookReports = async () => {
    try {
      if (libraryId) {
        const result = await getReportsBySelectedBook(libraryId);
        setBookReport(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(bookReport);

  const handleWriteBookReportClick = () => {
    if (libraryId) {
      navigate(`/bookreport/${libraryId}`);
    }
  };

  const openModal = (libraryId: string, state: string) => {
    setSelectedBookState({ libraryId, state });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  useEffect(() => {
    getBookInfo();
    getBookReports();
  }, [libraryId]);

  console.log(book);

  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} />
      <S.MainContent>
        <BookDetailWrapper book={book} />
        <S.BookStateWrapper>
          {bookState.map((state, index) => (
            <S.BookStateBox
              onClick={() => openModal(String(book?.libraryId || ""), state[0])}
              key={index}
            >
              <img
                src={state[0] === readingStatus ? state[3] : state[2]}
                alt={state[1]}
              />
              <S.BookStateString>{state[1]}</S.BookStateString>
            </S.BookStateBox>
          ))}
        </S.BookStateWrapper>
        {readingStatus !== "READY_TO_READ" && (
          <S.BookDateAndRatingBox>
            {readingStatus === "READING" && (
              <DateController
                startReadingAt={book?.startReadingAt}
                libraryId={libraryId}
              />
            )}
            {(readingStatus === "ALREADY_READ" ||
              readingStatus === "FAVORITE") && (
              <>
                <MyBookScore rating={book?.rating} libraryId={libraryId} />
                <DoubleDateController
                  startReadingAt={book?.startReadingAt}
                  endReadingAt={book?.endReadingAt}
                  libraryId={libraryId}
                />
              </>
            )}
          </S.BookDateAndRatingBox>
        )}
        <StandardBtn
          onClick={handleWriteBookReportClick}
          $color="#83D0A1"
          $border="1.5px solid  #83D0A1"
        >
          독서록 작성하기
        </StandardBtn>
        <BookReportsContainer>
          <BookReportContainer>
            <LeftBookReportContainer>
              {oddBookReports.map((report) => (
                <BookReportBox
                  key={report.id}
                  date={formatDate(report.createdAt)}
                  title={report.title}
                  content={report.contents}
                />
              ))}
            </LeftBookReportContainer>
            <RightBookReportContainer>
              {evenBookReports.map((report) => (
                <BookReportBox
                  key={report.id}
                  date={formatDate(report.createdAt)}
                  title={report.title}
                  content={report.contents}
                />
              ))}
            </RightBookReportContainer>
          </BookReportContainer>
          <StandardBtn
            onClick={openDeleteModal}
            $color="#BBC2C1"
            $border="1.5px solid  #BBC2C1"
            $clickedBackground="#BBC2C1"
            $clickedColor="#fff"
          >
            내 서재에서 삭제하기
          </StandardBtn>
        </BookReportsContainer>

        {isModalOpen && (
          <ChangeBookStateModal
            selectedBookState={selectedBookState!}
            onClose={closeModal}
          />
        )}
        {isDeleteModalOpen && (
          <DeleteBookModal libraryId={libraryId!} onClose={closeDeleteModal} />
        )}
      </S.MainContent>
    </TopContainer>
  );
};

export default BookDetail;
