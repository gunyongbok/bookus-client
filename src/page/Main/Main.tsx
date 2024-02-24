import styled from "styled-components";
import { useEffect, useState } from "react";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Header
import MainHeader from "../../components/Header/MainHeader";
import backArrowImg from "../../assets/img/back.png";
import profileImg from "../../assets/svg/ProfileLogo.svg";

// Api
import getTopFiveFavoriteBooks from "../../Api/Book/Main/getTopFiveFavoriteBooks";
import getHighRatingBooks from "../../Api/Book/Main/getHighRatingBooks";

// Navbar
import Navbar from "../../components/Navigation/Navbar";

// Props
import { FiveFavoriteProps, HighRatingBookProps } from "../../types/book";

// svg
import threeStar from "../../assets/svg/Main/threeStar.svg";
import fourStar from "../../assets/svg/Main/fourStar.svg";
import fiveStar from "../../assets/svg/Main/fiveStar.svg";

export const MainContent = styled.div`
  width: 100%;
  max-width: 358px;
  max-height: 630px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: 11%;
  overflow: auto;
  @media (max-width: 599px) {
    max-height: 70%;
  }
`;

const TopFiveBookContainer = styled.div`
  width: 100%;
  height: 485px;
  gap: 20px;
  margin-bottom: 35px;
  display: flex;
  flex-direction: column;
`;

const TitleBox = styled.div`
  color: #0f473f;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;

const TopFiveBookImgBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const TopFiveBookImg = styled.img`
  width: 300px;
  height: 400px;
  border-radius: 20px;
`;

const CategoryContainer = styled.div`
  width: 100%;
  height: 190px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;

const CategoryBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  gap: 20px;
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Category = styled.div`
  min-width: 88px;
  height: 88px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;

  &:nth-child(odd) {
    background-color: #e9f6ee;
    color: #4ca771;
  }

  &:nth-child(even) {
    background-color: #d6ece6;
    color: #4ca771;
  }
`;

const HighRatingBookContainer = styled.div`
  width: 100%;
  height: 100%;
  height: 220px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const HighRatingBoxWrapper = styled.div`
  min-width: 100%;
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const HighRatingBookBox = styled.div`
  flex: 0 0 350px;
  height: 165px;
  border-radius: 8px;
  background: #83d0a1;
  padding: 16px 20px 16px 20px;
  box-sizing: border-box;
  display: flex;
  gap: 12px;
  align-items: center;
`;

const RatingImg = styled.img`
  width: 90px;
  height: 133px;
  border-radius: 5px;
`;

const RatingBookInfoBox = styled.div`
  width: 210px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 0 10px 0;
  box-sizing: border-box;
`;

const TitleAndAuthorBox = styled.div`
  width: 210px;
  height: fit-content;
  margin-bottom: 37px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const Title = styled.div`
  width: 100%;
  height: 17px;
  cursor: pointer;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #fff;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
`;

const Author = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
`;

const RatingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 2px;
`;

const Rating = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
`;

const RatingStar = styled.img``;

const Main = () => {
  const [favorite, setFavorite] = useState<FiveFavoriteProps[]>([]);
  const [highRating, setHighRating] = useState<HighRatingBookProps[]>([]);

  const category = [
    "자기개발",
    "인문학",
    "경영/경제",
    "역사/교육",
    "자기개발",
    "인문학",
    "경영/경제",
    "역사/교육",
  ];

  const handleFavoirteBooks = async () => {
    try {
      const result = await getTopFiveFavoriteBooks();
      setFavorite(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleHighRatingBooks = async () => {
    try {
      const result = await getHighRatingBooks();
      setHighRating(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFavoirteBooks();
    handleHighRatingBooks();
  }, []);

  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} />
      <MainContent>
        <TopFiveBookContainer>
          <TitleBox>🍀 현재 인기 순위 TOP 5</TitleBox>
          <TopFiveBookImgBox>
            {favorite?.map((book) => (
              <TopFiveBookImg key={book.bookId} src={book.imageUrl} />
            ))}
          </TopFiveBookImgBox>
        </TopFiveBookContainer>
        <CategoryContainer>
          <TitleBox>🌱 카테고리</TitleBox>
          <CategoryBox>
            {category?.map((c, i) => (
              <Category key={i}>{c}</Category>
            ))}
          </CategoryBox>
        </CategoryContainer>
        <HighRatingBookContainer>
          <TitleBox>🌿 별점 높은 책</TitleBox>
          <HighRatingBoxWrapper>
            {highRating?.map((rating) => (
              <HighRatingBookBox key={rating?.isbn}>
                <RatingImg src={rating.thumbnail} />
                <RatingBookInfoBox>
                  <TitleAndAuthorBox>
                    <Title>{rating.title}</Title>
                    <Author>{rating.authors}</Author>
                  </TitleAndAuthorBox>
                  <RatingBox>
                    <Rating>{rating.rating}</Rating>
                    <RatingStar
                      src={
                        rating.rating === 3
                          ? threeStar
                          : rating.rating === 4
                          ? fourStar
                          : fiveStar
                      }
                      alt={`${rating.rating}-star`}
                    />
                  </RatingBox>
                </RatingBookInfoBox>
              </HighRatingBookBox>
            ))}
          </HighRatingBoxWrapper>
        </HighRatingBookContainer>
      </MainContent>
      <Navbar />
    </TopContainer>
  );
};

export default Main;
