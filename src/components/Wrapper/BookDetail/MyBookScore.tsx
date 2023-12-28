import styled from "styled-components";
import full from "../../../assets/svg/BookDetail/greenStar.svg";
import empty from "../../../assets/svg/BookDetail/emptyGreenStar.svg";
import { useState } from "react";
import BookScoreModal from "../../Model/BookDetail/BookScoreModal";

const Box = styled.div`
  width: 100%;
  height: 14px;
  display: flex;
  position: relative;
`;

const Label = styled.label`
  color: #0f473f;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  margin-right: 16px;
`;

const StarBox = styled.div`
  width: fit-content;
  background-color: #fcfcff;
`;

const CustomIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  cursor: pointer;
  color: #bbc2c1;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
`;

interface Props {
  libraryId?: string;
  rating?: number;
}

const MyBookScore = ({ libraryId, rating }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const starArray = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <Box>
      <Label>나의 별점</Label>
      <StarBox>
        {starArray.map((index) => (
          <img key={index} src={index <= (rating ?? 0) ? full : empty} />
        ))}
      </StarBox>
      <CustomIcon onClick={openModal}>수정</CustomIcon>
      {isModalOpen && (
        <BookScoreModal libraryId={libraryId} onClose={closeModal} />
      )}
    </Box>
  );
};

export default MyBookScore;
