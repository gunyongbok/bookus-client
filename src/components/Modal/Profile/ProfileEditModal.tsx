import React, { ChangeEvent, useRef } from "react";
import styled from "styled-components";
import deleteProfileImg from "../../../Api/Profile/deleteProfileImg";

interface ModalProps {
  onClose: () => void;
  onProfileEdit: (profileImage: File) => void;
  onStatusChange: (status: number) => void;
}

const ModalOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 210px;
  border-radius: 24px 24px 0px 0px;
  background: #fcfcff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ModalTitle = styled.div`
  width: 90%;
  height: 40px;
  color: #bbc2c1;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #bbc2c1;
`;

const SelectImgBox = styled.div`
  width: 90%;
  height: 59px;
  color: #83d0a1;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #83d0a1;
`;

const CanlcelBtn = styled.div`
  width: 90%;
  height: 49px;
  color: #0f473f;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileEditModal: React.FC<ModalProps> = ({
  onClose,
  onProfileEdit,
  onStatusChange,
}) => {
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onProfileEdit(file);
      onClose();
      onStatusChange(100);
    }
  };
  const imgInput = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    imgInput.current!.click();
  };

  const handleImageToDefault = async () => {
    let data = await deleteProfileImg();
    onStatusChange(data?.status || 0);
    onClose();
  };

  return (
    <ModalOverlay>
      <ModalTitle>
        프로필 사진 설정 (저장 버튼을 클릭하면 변경 시항이 적용됩니다.)
      </ModalTitle>
      <SelectImgBox onClick={handleClick}>
        앨범에서 사진 선택
        <input
          type="file"
          multiple
          ref={imgInput}
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </SelectImgBox>
      <SelectImgBox onClick={handleImageToDefault}>
        기본 이미지로 변경
      </SelectImgBox>
      <CanlcelBtn onClick={onClose}>취소</CanlcelBtn>
    </ModalOverlay>
  );
};

export default ProfileEditModal;
