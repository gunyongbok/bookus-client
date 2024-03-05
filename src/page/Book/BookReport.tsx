import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as S from "./style/BookReport.style";

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

// TextEditor
import Write from "../../components/Input/textEditor/Write";

const BookReport = () => {
  const { libraryId } = useParams<{ libraryId?: string }>();
  const navigate = useNavigate();
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

  const handleContentChange = (content: string) => {
    setContent(content);
  };

  const submitBookReportController = () => {
    if (libraryId) {
      submitBookReport({
        libraryBookId: parseInt(libraryId, 10),
        title: title,
        contents: content,
      });
      navigate(`/bookdetail/${libraryId}`);
    }
  };

  console.log(title, content);

  useEffect(() => {
    getBookInfo();
  }, []);

  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} />
      <S.MainContent>
        <S.BookInfoContainer>
          <S.BookTitle>{book?.bookTitle}</S.BookTitle>
          <S.BookAuthor>{book?.author}</S.BookAuthor>
        </S.BookInfoContainer>
        <S.TitleInput
          placeholder="제목"
          onChange={handleTitleChange}
          value={title}
        />
        <Write value={content} onChange={handleContentChange} />
        <S.ButtonContainer>
          <StandardBtn
            $width="112px"
            $color="#BBC2C1"
            $border="1.5px solid  #BBC2C1"
            $clickedBackground="#BBC2C1"
            $clickedColor="#fff"
            onClick={() => {
              navigate(`/bookdetail/${libraryId}`);
            }}
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
        </S.ButtonContainer>
      </S.MainContent>
    </TopContainer>
  );
};

export default BookReport;
