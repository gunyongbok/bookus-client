import { useEffect, useState } from "react";
import styled from "styled-components";

import getExtraBookInfo from "../../../Api/Book/getExtraBookInfo";
import { BookResults } from "../../../types/book";

// icons
import category from "../../../assets/svg/BookInfo/category.svg";
import date from "../../../assets/svg/BookInfo/date.svg";
import isbn from "../../../assets/svg/BookInfo/isbn.svg";
import page from "../../../assets/svg/BookInfo/page.svg";
import price from "../../../assets/svg/BookInfo/price.svg";
import publisher from "../../../assets/svg/BookInfo/publisher.svg";

const BookSubDetailInfoContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
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
  font-family: "Pretendard Variable", sans-serif;
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

const BookSubDetailInfoWrapper: React.FC<{ book: BookResults }> = ({
  book,
}) => {
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

  return (
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
          <InfoBox>
            {extraBookInfo?.category === "" ? "-" : extraBookInfo?.category}
          </InfoBox>
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
  );
};

export default BookSubDetailInfoWrapper;
