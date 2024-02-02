import styled from "styled-components";

export const AgreeContainer = styled.div`
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

export const AgreeContent = styled.div`
  width: 100%;
  height: fit-content;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
`;

export const AgreeDetailWrapper = styled.div`
  width: 100%;
  gap: 24px;
  display: flex;
  flex-direction: column;
`;

export const AgreeWrapper = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
