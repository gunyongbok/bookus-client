import React, { ChangeEvent, MouseEvent, useState } from "react";
import styled from "styled-components";

interface ModalProps {
  onClose: (event: MouseEvent) => void;
  onProfileEdit: (profileImage: File) => void;
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
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #bbc2c1;
`;

const SelectImgInput = styled.input`
  width: 90%;
  height: 59px;
  color: #83d0a1;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #83d0a1;
`;

const SelectImgBox = styled.div`
  width: 90%;
  height: 59px;
  color: #83d0a1;
  font-family: Pretendard;
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
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EditProfileModal: React.FC<ModalProps> = ({ onClose, onProfileEdit }) => {
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      handleUploadImage();
    }
  };

  const handleUploadImage = () => {
    if (image) {
      onProfileEdit(image);
      onClose;
    }
  };

  return (
    <ModalOverlay>
      <ModalTitle>프로필 사진 설정</ModalTitle>
      <SelectImgInput type="file" onChange={handleImageChange} />

      <SelectImgBox>기본 이미지로 변경</SelectImgBox>
      <CanlcelBtn onClick={onClose}>취소</CanlcelBtn>
    </ModalOverlay>
  );
};

export default EditProfileModal;
