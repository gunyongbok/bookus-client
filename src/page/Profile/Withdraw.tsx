import styled from "styled-components";
import { useState } from "react";

// Container
import TopContainer from "../../components/Wrapper/TopContainer";

// Header
import MainHeader from "../../components/Header/MainHeader";
import backArrowImg from "../../assets/img/back.png";
import profileImg from "../../assets/svg/ProfileLogo.svg";

// Navbar
import Navbar from "../../components/Navigation/Navbar";

// Msg
import { WithdrawFinalMsg, WithdrawInformMsg } from "../../assets/text/message";

// Btn
import StandardBtn from "../../commons/Button/StandardBtn";

// Modal
import WithdrawModal from "../../components/Modal/Profile/WithdrawModal";

const MainContent = styled.div`
  width: 100%;
  max-width: 358px;
  height: 630px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  position: absolute;
  top: 11%;
  overflow: auto;
  border-top: 5px solid #e9f6ee;
  @media (max-width: 599px) {
    max-height: 70%;
  }
`;

const WithdrawTopContainer = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
`;

const WithdrawContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px 0 16px 0;
  box-sizing: border-box;
  border-bottom: 1px solid #e9f6ee;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const WithdrawBox = styled.div`
  width: fit-content;
  color: #0f473f;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

const WithdrawDetailBox = styled.div`
  color: #83d0a1;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  white-space: break-spaces;
`;

const WithdrawReasonSelectBox = styled.select`
  width: 100%;
  height: 40px;
  border: 1px solid #4ca771;
  border-radius: 8px;
  color: #4ca771;
  padding: 0 16px 0 16px;
  &:focus {
    outline: none;
  }
`;

const WithdrawReasonOptionBox = styled.option`
  width: 100%;
  height: 40px;
  border: 1px solid #4ca771;
  color: #4ca771;
`;

const Withdraw = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <TopContainer $background="#FCFCFF">
      <MainHeader src1={backArrowImg} src2={profileImg} text="탈퇴하기" />
      <MainContent>
        <WithdrawTopContainer>
          <WithdrawContainer>
            <WithdrawBox>정말 계정을 탈퇴하시겠어요?</WithdrawBox>
            <WithdrawDetailBox>{WithdrawInformMsg}</WithdrawDetailBox>
          </WithdrawContainer>
          <WithdrawContainer>
            <WithdrawBox>탈퇴 이유를 선택해주세요.</WithdrawBox>
            <WithdrawDetailBox>{WithdrawFinalMsg}</WithdrawDetailBox>
            <WithdrawReasonSelectBox>
              <WithdrawReasonOptionBox value="">---</WithdrawReasonOptionBox>
              <WithdrawReasonOptionBox value="1">
                기록 삭제 목적
              </WithdrawReasonOptionBox>
              <WithdrawReasonOptionBox value="2">
                이용이 불편하고 장애가 많아서
              </WithdrawReasonOptionBox>
              <WithdrawReasonOptionBox value="3">
                타 어플을 더 많이 사용해서
              </WithdrawReasonOptionBox>
              <WithdrawReasonOptionBox value="4">
                사용 빈도가 낮아서
              </WithdrawReasonOptionBox>
              <WithdrawReasonOptionBox value="5">
                기타 사유
              </WithdrawReasonOptionBox>
            </WithdrawReasonSelectBox>
          </WithdrawContainer>
        </WithdrawTopContainer>
        <StandardBtn
          onClick={openModal}
          $border="1px solid #BBC2C1"
          $color="#BBC2C1"
        >
          탈퇴하기
        </StandardBtn>
      </MainContent>
      {isModalVisible && <WithdrawModal onClose={closeModal} />};
      <Navbar />
    </TopContainer>
  );
};

export default Withdraw;
