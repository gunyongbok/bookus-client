import { ReactNode } from "react";
import { styled } from "styled-components";

interface ContainerProps {
  background?: string;
  children: ReactNode;
}

const Container = styled.div<ContainerProps>`
  width: 390px;
  height: 844px;
  display: flex;
  justify-content: center;
  padding: 44px 16px 34px 16px;
  box-sizing: border-box;
  position: relative;
  background: ${(props) =>
    props.background ||
    "linear-gradient(0deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%), linear-gradient(168deg, #73DE9D 0%, #86CDA2 19.47%, #44D67D 44.22%, #86CDA2 99.11%)"};
  @media (max-width: 599px) {
    height: 100vh;
    width: 100vw;
  }
`;

const TopContainer = ({ children, background }: ContainerProps) => {
  return <Container background={background}>{children}</Container>;
};

export default TopContainer;
