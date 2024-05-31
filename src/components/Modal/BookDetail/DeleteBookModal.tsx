import * as S from "../modal.style";
import deleteBook from "../../../Api/Book/deleteBook";
import { useNavigate } from "react-router-dom";

interface ModalProps {
  onClose: () => void;
  libraryId?: string;
}

const DeleteBookModal = ({ onClose, libraryId }: ModalProps) => {
  const navigate = useNavigate();
  const deleteBookFromLibrary = async () => {
    try {
      if (libraryId) {
        deleteBook(libraryId);
        onClose();
        navigate("/main");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <S.Overlay />
      <S.ModalWrapper>
        <S.ModalContent>내 서재에서 삭제하시겠어요?</S.ModalContent>
        <S.ModalCaution>*작성한 독서록 정보가 모두 지워져요</S.ModalCaution>
        <S.SelectBox>
          <S.CancelBtn onClick={onClose}>취소</S.CancelBtn>
          <S.OkBtn onClick={deleteBookFromLibrary}>삭제</S.OkBtn>
        </S.SelectBox>
      </S.ModalWrapper>
    </>
  );
};

export default DeleteBookModal;
