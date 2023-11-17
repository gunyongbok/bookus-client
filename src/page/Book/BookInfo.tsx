import { useLocation } from "react-router-dom";
import styled from "styled-components";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Header
import MainHeader from "../../components/Header/MainHeader";
import backArrowImg from "../../assets/img/back.png";
import profileImg from "../../assets/svg/ProfileLogo.svg";

// icons
import category from "../../assets/svg/BookInfo/category.svg";
import date from "../../assets/svg/BookInfo/date.svg";
import isbn from "../../assets/svg/BookInfo/isbn.svg";
import page from "../../assets/svg/BookInfo/page.svg";
import price from "../../assets/svg/BookInfo/price.svg";
import publisher from "../../assets/svg/BookInfo/publisher.svg";
import { useEffect, useState } from "react";
import getExtraBookInfo from "../../Api/Book/getExtraBookInfo";

const BookInfoContainer = styled.div`
  width: 100%;
  max-width: 358px;
  height: 700px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 11%;
  @media (max-width: 599px) {
    height: 80%;
  }
`;

const BookDetailInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BookThumbnailBackground = styled.div`
  width: 100%;
  height: 260px;
  display: flex;
  justify-content: center;
  margin-bottom: 32px;
`;

const BookThumbnail = styled.img`
  width: 210px;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const BookTitle = styled.div`
  color: #0f473f;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 10px;
`;

const BookAuthor = styled.div`
  color: #0f473f;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 40px;
`;

const BookSubDetailInfoContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const BookSubDetailInfo = styled.div`
  width: 90%;
  height: 14px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

const BookSubDetail = styled.div`
  width: 100px;
  height: 100%;
  display: flex;
  position: relative;
`;

const ImgBox = styled.img`
  position: absolute;
  left: 0;
`;

const InfoBox = styled.div`
  color: #0f473f;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  display: flex;
  justify-content: center;
  position: absolute;
  left: 20px;
`;

interface ExtraBookInfo {
  category: string;
  page: number;
}

const BookInfo = () => {
  const location = useLocation();
  const book = location.state;
  const [extraBookInfo, setExtraBookInfo] = useState<ExtraBookInfo | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getExtraBookInfo(book.isbn);

        setExtraBookInfo(result);
      } catch (error) {
        console.error("Error fetching extra book info:", error);
      }
    };
    fetchData();
  }, []);

  console.log(book);

  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} />
      <BookInfoContainer>
        <BookDetailInfoContainer>
          <BookThumbnailBackground>
            <BookThumbnail src={book.thumbnail} />
          </BookThumbnailBackground>
          <BookTitle>{book.title}</BookTitle>
          <BookAuthor>{book.authors}</BookAuthor>
          <BookSubDetailInfoContainer>
            <BookSubDetailInfo>
              <BookSubDetail>
                <ImgBox src={publisher} />
                <InfoBox>{book.publisher}</InfoBox>
              </BookSubDetail>
              <BookSubDetail>
                <ImgBox src={date} />
                <InfoBox>{book.datetime.slice(0, 7)}</InfoBox>
              </BookSubDetail>
              <BookSubDetail>
                <ImgBox src={category} />
                <InfoBox>{extraBookInfo?.category}</InfoBox>
              </BookSubDetail>
            </BookSubDetailInfo>
            <BookSubDetailInfo>
              <BookSubDetail>
                <ImgBox src={page} />
                <InfoBox>{extraBookInfo?.page}p</InfoBox>
              </BookSubDetail>
              <BookSubDetail>
                <ImgBox src={price} /> <InfoBox>{book.sale_price}원</InfoBox>
              </BookSubDetail>
              <BookSubDetail>
                <ImgBox src={isbn} /> <InfoBox>{book.isbn}</InfoBox>
              </BookSubDetail>
            </BookSubDetailInfo>
          </BookSubDetailInfoContainer>
        </BookDetailInfoContainer>
      </BookInfoContainer>
    </TopContainer>
  );
};

export default BookInfo;
