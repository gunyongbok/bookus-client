import styled from "styled-components";

export const BookSearchContainer = styled.div`
  width: 100%;
  max-width: 358px;
  max-height: 700px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 13%;
  @media (max-width: 599px) {
    height: 700px;
  }
`;

export const SearchResultContainer = styled.div`
  width: 100%;
  height: fit-content;
  margin-top: 40px;
  gap: 40px;
  display: flex;
  flex-direction: column;
`;
