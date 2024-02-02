import * as S from "../modal.style";
import { useNavigate } from "react-router-dom";

interface ModalProps {
  onClose: () => void;
  reportId: string | undefined;
}

const BookReportEditModal = ({ onClose, reportId }: ModalProps) => {
  const navigate = useNavigate();

  const deleteReport = () => {
    onClose();
    navigate(`/main`);
  };

  return (
    <>
      <S.Overlay />
      <S.ModalWrapper>
        <S.ModalContent>독서록을 편집하시겠어요?</S.ModalContent>
        <S.SelectBox>
          <S.CancelBtn onClick={onClose}>취소</S.CancelBtn>
          <S.OkBtn onClick={deleteReport}>편집</S.OkBtn>
        </S.SelectBox>
      </S.ModalWrapper>
    </>
  );
};

export default BookReportEditModal;
