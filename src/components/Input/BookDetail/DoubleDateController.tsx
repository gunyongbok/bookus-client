import styled from "styled-components";
import { useState, useEffect } from "react";

import enrollBookDate from "../../../Api/Book/enrollBookDate";
import { formatDate } from "../../../commons/Text/formatDate";

const DateBox = styled.div`
  width: 100%;
  height: 14px;
  position: relative;
  display: flex;
  align-items: center;
`;

const DateLabel = styled.label`
  color: #0f473f;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  margin-right: 16px;
`;

const DateInput = styled.input`
  color: #4ca771;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  border: none;
  background-color: #fcfcff;
  outline: none;
`;

const DateDiv = styled.div`
  color: #4ca771;
  padding: 0 10px 0 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CustomIcon = styled.div`
  position: absolute;
  right: 10px;
  cursor: pointer;
  color: #bbc2c1;
  font-family: "Pretendard Variable", sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
`;

interface Props {
  libraryId?: string;
  startReadingAt?: string;
  endReadingAt?: string;
}

const DoubleDateController = ({
  libraryId,
  startReadingAt,
  endReadingAt,
}: Props) => {
  const [selectedStart, setSelectedStart] = useState<string>(
    startReadingAt ? new Date(startReadingAt).toISOString().split("T")[0] : ""
  );
  const [selectedEnd, setSelectedEnd] = useState<string>(
    endReadingAt ? new Date(endReadingAt).toISOString().split("T")[0] : ""
  );

  useEffect(() => {
    setSelectedStart(
      startReadingAt ? new Date(startReadingAt).toISOString().split("T")[0] : ""
    );
    setSelectedEnd(
      endReadingAt ? new Date(endReadingAt).toISOString().split("T")[0] : ""
    );
  }, [startReadingAt, endReadingAt]);

  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedStart(event.target.value);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedEnd(event.target.value);
  };

  const enrollDate = async () => {
    try {
      if (libraryId) {
        const result = await enrollBookDate(libraryId, {
          startReadingAt: formatDate(selectedStart),
          endReadingAt: formatDate(selectedEnd),
        });
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DateBox>
      <DateLabel>날짜 기록</DateLabel>
      <DateInput
        type="date"
        value={selectedStart}
        onChange={handleStartDateChange}
      />
      <DateDiv>~</DateDiv>
      <DateInput
        type="date"
        value={selectedEnd}
        onChange={handleEndDateChange}
      />
      <CustomIcon onClick={enrollDate}>완료</CustomIcon>
    </DateBox>
  );
};

export default DoubleDateController;
