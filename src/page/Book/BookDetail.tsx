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
import { BookInfoProps } from "../../types/book";

interface ModalProps {
  libraryId: string;
  state: string;
}

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
        {isModalOpen && (
          <ChangeBookStateModal
            selectedBookState={selectedBookState!}
            onClose={closeModal}
          />
        )}
        {isDeleteModalOpen && (
          <DeleteBookModal libraryId={libraryId!} onClose={closeDeleteModal} />
        )}
        <StandardBtn
          onClick={openDeleteModal}
          $color="#BBC2C1"
          $border="1.5px solid  #BBC2C1"
          $clickedBackground="#BBC2C1"
          $clickedColor="#fff"
        >
          내 서재에서 삭제하기
        </StandardBtn>
      </S.MainContent>
    </TopContainer>
  );
};

export default BookDetail;
