import { useNavigate } from "react-router-dom";
import logout from "../../../Api/Login/logout";
import * as S from "../modal.style";

interface ModalProps {
  onClose: () => void;
}

const LogoutModal = ({ onClose }: ModalProps) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    onClose();
    navigate("/login");
  };
  return (
    <>
      <S.Overlay />
      <S.ModalWrapper>
        <S.ModalContent>로그아웃 하시겠어요?</S.ModalContent>
        <S.SelectBox>
          <S.CancelBtn onClick={onClose}>취소</S.CancelBtn>
          <S.OkBtn onClick={handleLogout}>로그아웃</S.OkBtn>
        </S.SelectBox>
      </S.ModalWrapper>
    </>
  );
};

export default LogoutModal;
