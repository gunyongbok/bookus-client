import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";

// Props
import { BookInfoProps } from "../../types/book";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Header
import MainHeader from "../../components/Header/MainHeader";
import backArrowImg from "../../assets/img/back.png";
import profileImg from "../../assets/svg/ProfileLogo.svg";

// Btn
import StandardBtn from "../../commons/Button/StandardBtn";

// Api
import getBookInfoById from "../../Api/Book/getBookInfoById";
import submitBookReport from "../../Api/Book/report/submitBookReport";

const MainContent = styled.div`
  width: 100%;
  max-width: 358px;
  height: fit-content;
  min-height: 730px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 11%;

  @media (max-width: 599px) {
    height: 80%;
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

const OptionContainer = styled.div`
  width: 100%;
  height: 54px;
  border-bottom: 1px solid #b9dbda;
`;

const ContentInput = styled.textarea`
  width: 100%;
  height: 450px;
  padding: 20px 0 35px 0;
  box-sizing: border-box;
  background-color: #fcfcff;
  color: #0f473f;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
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
  height: fit-content;
  padding-top: 32px;
  display: flex;
  justify-content: center;
  gap: 24px;
`;

const BookReport = () => {
  const { libraryId } = useParams<{ libraryId?: string }>();
  const [book, setBook] = useState<BookInfoProps | undefined>(undefined);
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const getBookInfo = async () => {
    try {
      if (libraryId) {
        const result = await getBookInfoById(libraryId);
        setBook(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const submitBookReportController = () => {
    if (libraryId) {
      submitBookReport({
        libraryBookId: parseInt(libraryId, 10),
        title: title,
        contents: content,
      });
    }
  };

  useEffect(() => {
    getBookInfo();
  }, []);

  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} />
      <MainContent>
        <BookInfoContainer>
          <BookTitle>{book?.bookTitle}</BookTitle>
          <BookAuthor>{book?.author}</BookAuthor>
        </BookInfoContainer>
        <TitleInput
          placeholder="제목"
          onChange={handleTitleChange}
          value={title}
        />
        <ContentInput
          placeholder="본문을 입력해주세요."
          onChange={handleContentChange}
          value={content}
        />
        <OptionContainer />
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
            onClick={submitBookReportController}
          >
            독서록 작성하기
          </StandardBtn>
        </ButtonContainer>
      </MainContent>
    </TopContainer>
  );
};

export default BookReport;
