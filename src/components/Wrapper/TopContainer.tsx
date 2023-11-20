import { ReactNode } from "react";
import { styled } from "styled-components";

interface ContainerProps {
  $background?: string;
  children: ReactNode;
  $isModalVisible?: boolean;
}

const Container = styled.div<ContainerProps>`
  width: 390px;
  height: 844px;
  display: flex;
  justify-content: center;
  padding: 10% 1% 4% 1%;
  box-sizing: border-box;
  position: relative;
  background: ${(props) =>
    props.$isModalVisible
      ? "rgba(0, 0, 0, 0.1)"
      : props.$background ||
        "linear-gradient(0deg, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.40) 100%), linear-gradient(168deg, #73DE9D 0%, #86CDA2 19.47%, #44D67D 44.22%, #86CDA2 99.11%)"};
  @media (max-width: 599px) {
    height: 100vh;
    width: 100vw;
  }
`;

const TopContainer = ({
  children,
  $background,
  $isModalVisible,
}: ContainerProps) => {
  return (
    <Container $background={$background} $isModalVisible={$isModalVisible}>
      {children}
    </Container>
  );
};

export default TopContainer;
