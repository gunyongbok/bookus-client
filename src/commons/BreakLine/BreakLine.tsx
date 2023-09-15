import { styled } from "styled-components";

const Line = styled.div`
  width: 100%;
  height: 0.3px;
  max-width: 358px;
  background: #4ca771;
  margin: 20px 0px;
  display: flex;
  align-items: center;
`;

const BreakLine = () => {
  return <Line />;
};

export default BreakLine;
