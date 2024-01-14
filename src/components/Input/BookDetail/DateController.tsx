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
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  margin-right: 16px;
`;

const DateInput = styled.input`
  color: #4ca771;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  border: none;
  padding-right: 30px;
  background-color: #fcfcff;
  display: flex;
  align-items: center;
`;

const CustomIcon = styled.div`
  position: absolute;
  right: 10px;
  cursor: pointer;
  color: #bbc2c1;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
`;

interface Props {
  libraryId?: string;
  startReadingAt?: string;
}

const DateController = ({ libraryId, startReadingAt }: Props) => {
  const [selectedDate, setSelectedDate] = useState<string>(
    startReadingAt ? new Date(startReadingAt).toISOString().split("T")[0] : ""
  );

  useEffect(() => {
    setSelectedDate(
      startReadingAt ? new Date(startReadingAt).toISOString().split("T")[0] : ""
    );
  }, [startReadingAt]);

  const handleDatePickerChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedDate(event.target.value);
  };

  const enrollDate = async () => {
    try {
      if (libraryId) {
        const result = await enrollBookDate(libraryId, {
          startReadingAt: formatDate(selectedDate),
          endReadingAt: null,
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
        value={selectedDate}
        onChange={handleDatePickerChange}
      />
      <CustomIcon onClick={enrollDate}>완료</CustomIcon>
    </DateBox>
  );
};

export default DateController;
