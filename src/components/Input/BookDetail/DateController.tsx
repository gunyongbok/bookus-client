import styled from "styled-components";
import { useState } from "react";

// Date
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateBox = styled.div`
  width: 100%;
  height: 14px;
  position: relative;
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
`;

const CustomIcon = styled.span`
  position: absolute;
  top: 50%;
  right: 10px;
  cursor: pointer;
  color: #bbc2c1;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
`;

const DatePopup = styled.div`
  position: absolute;
  top: 100%;
  right: -10;
  z-index: 999;
`;

const CustomDatePicker = styled(DatePicker)`
  border: none;
`;

interface DateControllerProps {
  onDateChange: (formattedDate: string) => void;
}

const DateController: React.FC<DateControllerProps> = ({ onDateChange }) => {
  const [today, setToday] = useState(new Date());
  const [isDatePickerOpen, setIsDatePickerOpen] = useState<boolean>(false);

  const isoString = today.toISOString();
  const [datePart, timePart] = isoString.split("T");
  const dateFormatted = datePart.split("-").join("-");
  const finalFormattedDate = `${dateFormatted} ${timePart.slice(0, 8)}`;

  const formatDate = (originalDate: any) => {
    const date = new Date(originalDate);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const isoFormatDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.000`;

    return isoFormatDate;
  };

  const handleDatePickerChange = (date: Date) => {
    setToday(date);
    setIsDatePickerOpen(false);
    // 콜백 함수 호출
    onDateChange(formatDate(finalFormattedDate));
  };

  const handleDatePickerClick = () => {
    setIsDatePickerOpen(true);
  };

  return (
    <DateBox>
      <DateLabel onClick={handleDatePickerClick}>날짜 기록</DateLabel>
      <DateInput
        type="text"
        value={today.toISOString().split("T")[0]}
        readOnly
        onClick={handleDatePickerClick}
      />
      <CustomIcon onClick={handleDatePickerClick}>수정</CustomIcon>
      {isDatePickerOpen && (
        <DatePopup>
          <CustomDatePicker
            onChange={handleDatePickerChange}
            className="customDatePicker"
            open={isDatePickerOpen}
            onClickOutside={() => setIsDatePickerOpen(false)}
          />
        </DatePopup>
      )}
    </DateBox>
  );
};

export default DateController;
