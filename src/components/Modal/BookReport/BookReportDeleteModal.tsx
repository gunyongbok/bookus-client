import * as S from "../modal.style";
import { useNavigate } from "react-router-dom";
import deleteBookReport from "../../../Api/Book/report/deleteBookReport";

interface ModalProps {
  onClose: () => void;
  reportId: string | undefined;
  libraryId: string;
}

const BookReportDeleteModal = ({
  libraryId,
  onClose,
  reportId,
}: ModalProps) => {
  const navigate = useNavigate();

  const deleteReport = () => {
    deleteBookReport(reportId);
    onClose();
    navigate(`/bookdetail/${libraryId}`);
  };

  return (
    <>
      <S.Overlay />
      <S.ModalWrapper>
        <S.ModalContent>독서록을 삭제하시겠어요?</S.ModalContent>
        <S.ModalCaution>*지워진 독서록은 복구가 어려워요</S.ModalCaution>
        <S.SelectBox>
          <S.CancelBtn onClick={onClose}>취소</S.CancelBtn>
          <S.OkBtn onClick={deleteReport}>삭제</S.OkBtn>
        </S.SelectBox>
      </S.ModalWrapper>
    </>
  );
};

export default BookReportDeleteModal;
