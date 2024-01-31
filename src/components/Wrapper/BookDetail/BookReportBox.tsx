import React from "react";
import styled from "styled-components";

interface BookReportBoxProps {
  backgroundColor?: string;
  date: string;
  title: string;
  content: string;
  onClick: () => void;
}

const Box = styled.div<{ backgroundColor?: string }>`
  width: 173px;
  height: 210px;
  background: ${(props) => props.backgroundColor || "#e9f6ee"};
  border-radius: 12px;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

const DateBox = styled.div`
  width: 100%;
  color: #4ca771;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  margin-bottom: 8px;
`;

const TitleBox = styled.div`
  width: 100%;
  height: 14px;
  color: #0f473f;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 16px;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 130px;
  overflow: hidden;
  color: #4ca771;
  text-overflow: ellipsis;
  white-space: pre-line;
  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
`;

const BookReportBox: React.FC<BookReportBoxProps> = ({
  backgroundColor,
  date,
  title,
  content,
  onClick,
}) => {
  return (
    <Box onClick={onClick} backgroundColor={backgroundColor}>
      <DateBox>{date}</DateBox>
      <TitleBox>{title}</TitleBox>
      <ContentBox>{content}</ContentBox>
    </Box>
  );
};

export default BookReportBox;
