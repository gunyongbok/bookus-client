import styled from "styled-components";

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px 0 16px 0;
  box-sizing: border-box;
  border-bottom: 1px solid #e9f6ee;
`;

const ProfileMainBox = ({ children }: { children: React.ReactNode }) => {
  return <Box>{children}</Box>;
};

export default ProfileMainBox;
