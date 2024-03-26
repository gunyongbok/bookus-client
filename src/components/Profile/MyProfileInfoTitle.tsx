import styled from "styled-components";

const Title = styled.div`
  width: 100%;
  height: 50px;
  color: #bbc2c1;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  display: flex;
  align-items: center;
`;

const MyProfileInfoTitle = ({ children }: { children: React.ReactNode }) => {
  return <Title>{children}</Title>;
};

export default MyProfileInfoTitle;
