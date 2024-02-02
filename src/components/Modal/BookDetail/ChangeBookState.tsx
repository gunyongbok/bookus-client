import changeBookState from "../../../Api/Book/changeBookState";
import * as S from "../modal.style";

interface ModalProps {
  onClose: () => void;
  selectedBookState: {
    libraryId: string;
    state: string;
  };
}

const ChangeBookStateModal = ({ onClose, selectedBookState }: ModalProps) => {
  console.log(selectedBookState);

  const handleBookStateChange = () => {
    changeBookState(selectedBookState.libraryId, {
      readingStatus: selectedBookState.state,
    });
    onClose();
    window.location.reload();
  };

  return (
    <>
      <S.Overlay />
      <S.ModalWrapper>
        <S.ModalContent>읽기 상태를 변경하시겠어요?</S.ModalContent>
        <S.ModalCaution>*입력한 별점과 날짜 정보가 사라져요</S.ModalCaution>
        <S.SelectBox>
          <S.CancelBtn onClick={onClose}>취소</S.CancelBtn>
          <S.OkBtn onClick={handleBookStateChange}>변경</S.OkBtn>
        </S.SelectBox>
      </S.ModalWrapper>
    </>
  );
};

export default ChangeBookStateModal;
