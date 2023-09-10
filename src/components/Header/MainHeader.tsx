import { styled } from "styled-components";

interface HeaderProps {
  src1: string;
  src2: string;
}

const Header = styled.div`
  width: 100%;
  height: 32px;
  max-width: 358px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainHeader = ({ src1, src2 }: HeaderProps) => {
  return (
    <Header>
      <img src={src1} />
      <img src={src2} />
    </Header>
  );
};

export default MainHeader;
