import styled from "styled-components";

export const MainContent = styled.div`
  width: 100%;
  max-width: 358px;
  height: 680px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 13%;
  padding: 0 8px 0 8px;
  box-sizing: border-box;
  @media (max-width: 599px) {
    height: 80%;
  }
`;

export const NicknameWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 8px;
  line-height: normal;
`;

export const NicknameInputWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: row;
  gap: 6px;
`;

export const NicknameInput = styled.input`
  width: 70%;
  height: 56px;
  border-radius: 16px;
  border: none;
  background: #e9f6ee;
  color: #0f473f;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  position: relative;
  right: 8px;
  padding-left: 16px;
  &::placeholder {
    color: #0f473f;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
  }
  &:focus {
    outline: none;
  }
`;

export const DuplicatedBtn = styled.div`
  width: 91px;
  height: 56px;
  border-radius: 16px;
  border: 1px solid #4ca771;
  color: #0f473f;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    background: #83d0a1;
    color: #fcfcff;
    border: none;
  }
`;

export const ErrorMessage = styled.div`
  color: #4ca771;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

export const TopicTopContainer = styled.div`
  width: 100%;
  height: fit-content;
  gap: 24px;
  margin-top: 40px;
  display: flex;
`;

export const TopicSubWrapper = styled.div`
  width: fit-content;
  gap: 8px;
  display: flex;
  flex-direction: row;
`;

export const TopicWrapper = styled.div`
  width: fit-content;
  display: flex;
  gap: 3px;
  display: flex;
  flex-direction: column;
`;

export const ToggleTopic = styled.div`
  color: #0f473f;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;

export const ToggleOptional = styled.div`
  color: #4ca771;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
`;

export const TopicGenderSelect = styled.div`
  width: 200px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid #4ca771;
  display: flex;
`;

export const MaleSelect = styled.div<{ selected: boolean }>`
  cursor: pointer;
  width: 49%;
  height: 100%;
  border-radius: 8px 0 0 8px;
  background: ${(props) => (props.selected ? " #E9F6EE" : "#fff")};
  color: #4ca771;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #4ca771;
`;

export const FemaleSelect = styled.div<{ selected: boolean }>`
  cursor: pointer;
  width: 50%;
  height: 100%;
  border-radius: 0 8px 8px 0;
  background: ${(props) => (props.selected ? " #E9F6EE" : "#fff")};
  color: #4ca771;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  display: flex;
  justify-content: center;
  align-items: center;
`;
