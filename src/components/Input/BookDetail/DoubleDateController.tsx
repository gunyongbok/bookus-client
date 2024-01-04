import styled from "styled-components";
import { useState } from "react";

// Api
import enrollBookDate from "../../../Api/Book/enrollBookDate";
import { formatDate } from "../../../commons/Text/formatDate";

const DateBox = styled.div`
  width: 100%;
  height: 14px;
  position: relative;
  color: #4ca771;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
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

  background-color: #fcfcff;
`;

const CustomIcon = styled.div`
  position: absolute;
  top: 30%;
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
  endReadingAt?: string;
}

const DoubleDateController = ({
  libraryId,
  startReadingAt,
  endReadingAt,
}: Props) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [finalStart, setFinalStart] = useState<string>("");
  const [finalEnd, setFinalEnd] = useState<string>("");

  const handleStartDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedDate = event.target.value;
    const date = new Date(selectedDate);
    setStartDate(date);
    setFinalStart(formatDate(date));
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = event.target.value;
    const date = new Date(selectedDate);
    setEndDate(date);
    setFinalEnd(formatDate(date));
  };

  const enrollDate = async () => {
    try {
      if (libraryId) {
        const result = await enrollBookDate(libraryId, {
          startReadingAt: finalStart,
          endReadingAt: finalEnd,
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
        value={
          startReadingAt
            ? new Date(startReadingAt).toISOString().split("T")[0]
            : startDate.toISOString().split("T")[0]
        }
        onChange={handleStartDateChange}
      />{" "}
      ~{" "}
      <DateInput
        type="date"
        value={
          endReadingAt
            ? new Date(endReadingAt).toISOString().split("T")[0]
            : endDate.toISOString().split("T")[0]
        }
        onChange={handleEndDateChange}
      />
      <CustomIcon onClick={enrollDate}>완료</CustomIcon>
    </DateBox>
  );
};

export default DoubleDateController;
