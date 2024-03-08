import * as S from "./Main.style";
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

// msg
import {
  Categoty,
  TopFiveBookTitle,
  TopRatingBookTitle,
} from "../../assets/text/message";

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
    } catch (error) {
      console.log(error);
    }
  };

  const handleHighRatingBooks = async () => {
    try {
      const result = await getHighRatingBooks();
      setHighRating(result);
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
      <S.MainContent>
        <S.TopFiveBookContainer>
          <S.TitleBox>{TopFiveBookTitle}</S.TitleBox>
          <S.TopFiveBookImgBox>
            {favorite?.map((book) => (
              <S.TopFiveBookImg key={book.bookId} src={book.imageUrl} />
            ))}
          </S.TopFiveBookImgBox>
        </S.TopFiveBookContainer>
        <S.CategoryContainer>
          <S.TitleBox>{Categoty}</S.TitleBox>
          <S.CategoryBox>
            {category?.map((c, i) => (
              <S.Category key={i}>{c}</S.Category>
            ))}
          </S.CategoryBox>
        </S.CategoryContainer>
        <S.HighRatingBookContainer>
          <S.TitleBox>{TopRatingBookTitle}</S.TitleBox>
          <S.HighRatingBoxWrapper>
            {highRating?.map((rating) => (
              <S.HighRatingBookBox key={rating?.isbn}>
                <S.RatingImg src={rating.thumbnail} />
                <S.RatingBookInfoBox>
                  <S.TitleAndAuthorBox>
                    <S.Title>{rating.title}</S.Title>
                    <S.Author>{rating.authors}</S.Author>
                  </S.TitleAndAuthorBox>
                  <S.RatingBox>
                    <S.Rating>{rating.rating}</S.Rating>
                    <S.RatingStar
                      src={
                        rating.rating === 3
                          ? threeStar
                          : rating.rating === 4
                          ? fourStar
                          : fiveStar
                      }
                      alt={`${rating.rating}-star`}
                    />
                  </S.RatingBox>
                </S.RatingBookInfoBox>
              </S.HighRatingBookBox>
            ))}
          </S.HighRatingBoxWrapper>
        </S.HighRatingBookContainer>
      </S.MainContent>
      <Navbar />
    </TopContainer>
  );
};

export default Main;
