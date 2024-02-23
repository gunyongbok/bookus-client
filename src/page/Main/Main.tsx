import styled from "styled-components";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Header
import MainHeader from "../../components/Header/MainHeader";
import backArrowImg from "../../assets/img/back.png";
import profileImg from "../../assets/svg/ProfileLogo.svg";
import getTopFiveFavoriteBooks from "../../Api/Book/Main/getTopFiveFavoriteBooks";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navigation/Navbar";

export const MainContent = styled.div`
  width: 100%;
  max-width: 358px;
  height: 720px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: 11%;
  overflow: auto;
  @media (max-width: 599px) {
    height: 80%;
  }
`;

const TopFiveBookContainer = styled.div`
  width: 100%;
  height: 485px;
  gap: 20px;

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
`;

const TopFiveBookImg = styled.img`
  width: 300px;
  height: 400px;
  border-radius: 20px;
`;

interface FiveFavoriteProps {
  bookId: number;
  imageUrl: string;
  isbn: string;
}

const CategoryContainer = styled.div`
  width: 100%;
  height: 190px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CategoryBox = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  gap: 20px;
  overflow-x: auto;
  white-space: nowrap;
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

const Main = () => {
  const [favorite, setFavorite] = useState<FiveFavoriteProps[]>([]);
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

  const getFavoirteBooks = async () => {
    try {
      const result = await getTopFiveFavoriteBooks();
      setFavorite(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFavoirteBooks();
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
      </MainContent>
      <Navbar />
    </TopContainer>
  );
};

export default Main;
