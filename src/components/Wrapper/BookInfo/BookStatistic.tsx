import styled from "styled-components";
import React, { useEffect, useState } from "react";

import getBookStatisticDetail from "../../../Api/Book/getBookStatisticDetail";

// Icons
import willRead from "../../../assets/svg/BookInfo/willRead.svg";
import reading from "../../../assets/svg/BookInfo/reading.svg";
import alreadyRead from "../../../assets/svg/BookInfo/alreadyRead.svg";
import favorite from "../../../assets/svg/BookInfo/favoriteBook.svg";
import star from "../../../assets//svg/BookInfo/star.svg";

const BookContents = styled.div`
  width: 100%;
  height: fit-content;
  color: #0f473f;
  text-align: justify;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  padding: 8px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const BookStars = styled.div`
  height: 20px;
  gap: 6px;
  color: #0f473f;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

const BookStatisticBox = styled.div`
  gap: 12px;
  display: flex;
  margin-top: 12px;
`;

interface BookStatisticProps {
  $color?: string;
}

const BookStatistic = styled.div<BookStatisticProps>`
  width: 161px;
  height: 60px;
  border-radius: 8px;
  background: ${(props) => (props.$color ? props.$color : "#e9f6ee")};
  position: relative;
`;

const BookIconBox = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 14px;
  left: 16px;
`;

const BookStatisticInfo = styled.div`
  width: 97px;
  height: 32px;
  display: flex;
  flex-direction: column;
  align-items: end;
  position: absolute;
  top: 14px;
  right: 16px;
`;

const BookStatisticStatus = styled.div`
  color: #0f473f;
  text-align: right;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
`;

const BookStatisticCount = styled.div`
  color: #0f473f;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;

const StatisticItem = ({
  icon,
  status,
  count,
  $color,
}: {
  icon: string;
  $color?: string;
  status: string;
  count: number;
}) => (
  <BookStatistic $color={$color}>
    <BookIconBox>
      <img src={icon} />
    </BookIconBox>
    <BookStatisticInfo>
      <BookStatisticStatus>{status}</BookStatisticStatus>
      <BookStatisticCount>{count}명</BookStatisticCount>
    </BookStatisticInfo>
  </BookStatistic>
);

const BookStatisticWrapper: React.FC<{ isbn: string }> = ({ isbn }) => {
  const [statistic, setStatistic] = useState<any | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getStatistic(isbn);
        setStatistic(result);
        console.log(result);
      } catch (error) {
        console.error("Error fetching statistic:", error);
      }
    };

    fetchData();
  }, [isbn]);

  return (
    <BookContents>
      <BookStars>
        <img src={star} /> 리뷰 {statistic?.rating} ({statistic?.ratingCount})
      </BookStars>
      <BookStatisticBox>
        <StatisticItem
          icon={willRead}
          status="읽을 책"
          count={statistic?.readyToReadCount || 0}
        />
        <StatisticItem
          icon={reading}
          status="읽는 책"
          count={statistic?.readingCount || 0}
        />
      </BookStatisticBox>
      <BookStatisticBox>
        <StatisticItem
          icon={alreadyRead}
          status="읽은 책"
          count={statistic?.readCount || 0}
        />
        <StatisticItem
          icon={favorite}
          status="인생 책"
          count={statistic?.favoriteCount || 0}
          $color="#B9DBDA"
        />
      </BookStatisticBox>
    </BookContents>
  );
};

export default BookStatisticWrapper;

async function getStatistic(isbn: string) {
  const result = await getBookStatisticDetail(isbn);
  return result;
}
