import styled from "styled-components";

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

export const TopFiveBookContainer = styled.div`
  width: 100%;
  height: 485px;
  gap: 20px;
  margin-bottom: 35px;
  display: flex;
  flex-direction: column;
`;

export const TitleBox = styled.div`
  color: #0f473f;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
`;

export const TopFiveBookImgBox = styled.div`
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

export const TopFiveBookImg = styled.img`
  width: 200px;
  height: 300px;
  border-radius: 20px;
`;

export const CategoryContainer = styled.div`
  width: 100%;
  height: 190px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
`;

export const CategoryBox = styled.div`
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

export const Category = styled.div`
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

export const HighRatingBookContainer = styled.div`
  width: 100%;
  height: 100%;
  height: 220px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const HighRatingBoxWrapper = styled.div`
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

export const HighRatingBookBox = styled.div`
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

export const RatingImg = styled.img`
  width: 90px;
  height: 133px;
  border-radius: 5px;
`;

export const RatingBookInfoBox = styled.div`
  width: 210px;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 0 10px 0;
  box-sizing: border-box;
`;

export const TitleAndAuthorBox = styled.div`
  width: 210px;
  height: fit-content;
  margin-bottom: 37px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const Title = styled.div`
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

export const Author = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
`;

export const RatingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 2px;
`;

export const Rating = styled.div`
  color: #fff;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
`;

export const RatingStar = styled.img``;
