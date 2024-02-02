import editBookReport from "../../../Api/Book/report/editBookReport";
import * as S from "../modal.style";

interface ModalProps {
  onClose: () => void;
  reportId: string | undefined;
  body: {
    title: string;
    contents: string;
  };
}

const EnrollBookReportEditModal = ({ onClose, reportId, body }: ModalProps) => {
  const uploadReport = () => {
    editBookReport(reportId, body);
    onClose();
  };

  return (
    <>
      <S.Overlay />
      <S.ModalWrapper>
        <S.ModalContent>독서록을 업로드하시겠어요?</S.ModalContent>
        <S.SelectBox>
          <S.CancelBtn onClick={onClose}>취소</S.CancelBtn>
          <S.OkBtn onClick={uploadReport}>업로드</S.OkBtn>
        </S.SelectBox>
      </S.ModalWrapper>
    </>
  );
};

export default EnrollBookReportEditModal;
