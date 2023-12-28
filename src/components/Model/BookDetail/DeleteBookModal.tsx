import styled from "styled-components";
import deleteBook from "../../../Api/Book/deleteBook";

const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 272px;
  height: 135px;
  border-radius: 16px;
  background: #fcfcff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalContent = styled.div`
  color: #0f473f;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  margin: 24px 0 4px 0;
`;

const ModalCaution = styled.div`
  color: #83d0a1;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
`;

const SelectBox = styled.div`
  display: flex;
  width: 100%;
  height: 40%;
  position: absolute;
  bottom: 0;
  border-top: 1px solid #b9dbda;
`;

const CancelBtn = styled.button`
  color: #0f473f;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  background-color: transparent;
  border: none;
  border-right: 1px solid #b9dbda;
  width: 50%;
`;

const OkBtn = styled.button`
  color: #4ca771;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  background-color: transparent;
  border: none;
  width: 50%;
`;

interface ModalProps {
  onClose: () => void;
  libraryId?: string;
}

const DeleteBookModal = ({ onClose, libraryId }: ModalProps) => {
  const deleteBookFromLibrary = async () => {
    try {
      if (libraryId) {
        deleteBook(libraryId);
        onClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ModalWrapper>
      <ModalContent>내 서재에서 삭제하시겠어요?</ModalContent>
      <ModalCaution>*작성한 독서록 정보가 모두 지워져요</ModalCaution>
      <SelectBox>
        <CancelBtn onClick={onClose}>취소</CancelBtn>
        <OkBtn onClick={deleteBookFromLibrary}>삭제</OkBtn>
      </SelectBox>
    </ModalWrapper>
  );
};

export default DeleteBookModal;
