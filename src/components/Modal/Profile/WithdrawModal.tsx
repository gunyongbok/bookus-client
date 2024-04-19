import * as S from "../modal.style";
import { useNavigate } from "react-router-dom";
import withdraw from "../../../Api/Login/withdraw";

interface ModalProps {
  onClose: () => void;
}

const WithdrawModal = ({ onClose }: ModalProps) => {
  const navigate = useNavigate();

  const withdrawAccount = () => {
    withdraw();
    onClose();
    navigate("/");
  };

  return (
    <>
      <S.Overlay />
      <S.ModalWrapper>
        <S.ModalContent>정말 탈퇴하시겠습니까?</S.ModalContent>
        <S.ModalCaution>*탈퇴하시면 모든 정보는 사라집니다*</S.ModalCaution>
        <S.SelectBox>
          <S.CancelBtn onClick={onClose}>취소</S.CancelBtn>
          <S.OkBtn onClick={withdrawAccount}>탈퇴하기</S.OkBtn>
        </S.SelectBox>
      </S.ModalWrapper>
    </>
  );
};

export default WithdrawModal;
