import React, { MouseEvent, useState } from "react";
import styled from "styled-components";

import will from "../../../assets/svg/BookInfo/modalWill.svg";
import ing from "../../../assets/svg/BookInfo/modalIng.svg";
import already from "../../../assets/svg/BookInfo/modalAlready.svg";
import clickWill from "../../../assets/svg/BookInfo/clickWill.svg";
import clickIng from "../../../assets/svg/BookInfo/clickIng.svg";
import clickAlready from "../../../assets/svg/BookInfo/clickAlready.svg";

interface ModalProps {
  onClose: (event: MouseEvent) => void;
}

const ModalOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 230px;
  border-radius: 24px 24px 0px 0px;
  background: #fcfcff;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const LibrarySelectTitle = styled.div`
  color: #0f473f;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  position: absolute;
  top: 24px;
  left: 24px;
`;

const LibraryStateContainer = styled.div`
  display: flex;
  gap: 32px;
  position: absolute;
  top: 57px;
  right: 31px;
`;

const IndividualState = styled.div`
  height: 104px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const IndividualStateWord = styled.div`
  color: #0f473f;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
`;

const CancelOrEnrollContainer = styled.div`
  width: 90%;
  height: 50px;
  border-top: 1px solid #b9dbda;
  position: absolute;
  bottom: -230px;
  right: 18px;
  display: flex;
`;

const CancelEnrollBase = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
`;

const Cancel = styled(CancelEnrollBase)`
  color: #0f473f;
`;

const Enroll = styled(CancelEnrollBase)`
  color: #4ca771;
`;

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  console.log(selectedImg);

  const handleImgClick = (imgType: string) => {
    switch (imgType) {
      case "will":
        setSelectedImg("WANT_TO_READ");
        break;
      case "ing":
        setSelectedImg("READING");
        break;
      case "already":
        setSelectedImg("ALREADY_READ");
        break;
      default:
        setSelectedImg(null);
        break;
    }
  };

  const getImage = (imgType: string) => {
    switch (imgType) {
      case "will":
        return selectedImg === "WANT_TO_READ" ? clickWill : will;
      case "ing":
        return selectedImg === "READING" ? clickIng : ing;
      case "already":
        return selectedImg === "ALREADY_READ" ? clickAlready : already;
      default:
        return null;
    }
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <LibrarySelectTitle>책장 선택</LibrarySelectTitle>
        <LibraryStateContainer>
          <IndividualState>
            <img
              src={getImage("will")}
              alt="will"
              onClick={() => handleImgClick("will")}
            />
            <IndividualStateWord>읽을 책</IndividualStateWord>
          </IndividualState>
          <IndividualState>
            <img
              src={getImage("ing")}
              alt="ing"
              onClick={() => handleImgClick("ing")}
            />
            <IndividualStateWord>읽는 책</IndividualStateWord>
          </IndividualState>
          <IndividualState>
            <img
              src={getImage("already")}
              alt="already"
              onClick={() => handleImgClick("already")}
            />
            <IndividualStateWord>읽은 책</IndividualStateWord>
          </IndividualState>
        </LibraryStateContainer>
        <CancelOrEnrollContainer>
          <Cancel onClick={onClose}>취소</Cancel>
          <Enroll>확인</Enroll>
        </CancelOrEnrollContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
