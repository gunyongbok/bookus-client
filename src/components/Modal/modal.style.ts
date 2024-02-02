import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

export const ModalWrapper = styled.div`
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
  z-index: 1000;
`;

export const ModalContent = styled.div`
  color: #0f473f;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  margin: 24px 0 4px 0;
`;

export const ModalCaution = styled.div`
  color: #83d0a1;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
`;

export const SelectBox = styled.div`
  display: flex;
  width: 100%;
  height: 40%;
  position: absolute;
  bottom: 0;
  border-top: 1px solid #b9dbda;
`;

export const CancelBtn = styled.button`
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

export const OkBtn = styled.button`
  color: #4ca771;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  background-color: transparent;
  border: none;
  width: 50%;
`;
