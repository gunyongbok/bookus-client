import styled from "styled-components";

import close from "../../../assets/svg/BookDetail/close.svg";
import yellowStar from "../../../assets/svg/BookDetail/yellowStar.svg";
import grayStar from "../../../assets/svg/BookDetail/grayStar.svg";
import { useState } from "react";
import enrollBookScore from "../../../Api/Book/enrollBookScore";

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 390px;
  height: 302px;
  border-radius: 16px 16px 0px 0px;
  background: #fcfcff;
  display: flex;
  flex-direction: column;

  z-index: 1;
`;

const ModalHeader = styled.div`
  width: 100%;
  height: fit-content;
  padding: 16px 20px 31px 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`;

const ModalHeaderContent = styled.div`
  color: #0f473f;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
`;

const ModalContent = styled.div`
  padding-left: 20px;
  color: #0f473f;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
`;

const StarContainer = styled.div`
  display: flex;
  width: 100%;
  height: 55px;
  padding: 0px 45px 0px 46px;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;

interface ModalProps {
  onClose: () => void;
  libraryId?: string;
  onStarsChange: (stars: number) => void;
}

const BookScoreModal = ({ onClose, libraryId, onStarsChange }: ModalProps) => {
  const [selectedStars, setSelectedStars] = useState<number>(0);

  const handleStarClick = (starIndex: number) => {
    const newStars = starIndex + 1;
    setSelectedStars(newStars);
    onStarsChange(newStars);
  };

  const enrollScore = async () => {
    try {
      if (libraryId) {
        const result = await enrollBookScore(libraryId, {
          rating: selectedStars,
        });
        console.log(result);
        onClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(selectedStars, libraryId);
  return (
    <ModalWrapper>
      <ModalHeader>
        <ModalHeaderContent>
          <img onClick={onClose} src={close} alt="close" />
        </ModalHeaderContent>
        <ModalHeaderContent onClick={() => enrollScore()}>
          완료
        </ModalHeaderContent>
      </ModalHeader>
      <ModalContent>해당 책에 대한</ModalContent>
      <ModalContent>나의 별점을 남겨주세요</ModalContent>
      <StarContainer>
        {[0, 1, 2, 3, 4].map((index) => (
          <img
            key={index}
            src={index < selectedStars ? yellowStar : grayStar}
            alt={`star-${index + 1}`}
            onClick={() => handleStarClick(index)}
          />
        ))}
      </StarContainer>
    </ModalWrapper>
  );
};

export default BookScoreModal;
