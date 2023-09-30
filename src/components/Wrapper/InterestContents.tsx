import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const InterestContainer = styled.div`
  width: 100%;
  height: 318px;
  margin-top: 20px;
`;

const InterestBtn = styled.div<{ $active: boolean }>`
  width: fit-content;
  height: 43px;
  padding: 12px 20px;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 40px;
  background: ${(props) => (props.$active ? "#83D0A1" : "#e9f6ee")};
  color: ${(props) => (props.$active ? "#FCFCFF" : "#0f473f")};
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  cursor: pointer;
  margin-bottom: 12px;
  margin-right: 8px;
  @media (max-width: 390px) {
    padding: 8px 16px;
    font-size: 12px;
  }
`;

const InterestContents = ({
  onLimitChange,
  finalData,
}: {
  onLimitChange: (newLimit: boolean) => void;
  finalData: (newData: string[]) => void;
}) => {
  interface DataObject {
    [key: string]: string;
  }

  const [data, setData] = useState<DataObject>({});
  const [interest, setInterest] = useState<string[]>([]);
  const [clicked, setClicked] = useState<boolean[]>([]);
  const [array, setArray] = useState<string[]>([]);

  // 해당 버튼 누를시 토글링 해주는 함수
  const handleClick = (index: number) => {
    const newActiveButtons = [...clicked];
    newActiveButtons[index] = !newActiveButtons[index];
    setClicked(newActiveButtons);
  };

  // 서버에서 관심 주제 데이터 가져오기
  const getInterestData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_APP_DEFAULT_SERVER_URL}/interests`
      );
      const interests = response.data.data;
      const keysArray: any[] | ((prev: string[]) => string[]) = [];
      interests.forEach((interestItem: any) => {
        data[interestItem.interest] = interestItem.interestKoreanName;
        keysArray.push(interestItem.interest);
      });
      setData(data);
      setInterest(Object.values(data));
      setArray(keysArray);
      setClicked(Array(interests.length).fill(false)); // clicked flase로 초기화
    } catch (err) {
      console.log("Error >>", err);
    }
  };

  // 서버에서 초기 데이터 값 가져오기
  useEffect(() => {
    getInterestData();
  }, []);

  // 선택된 관심의 개수를 확인하여 최대 선택 가능한 주제 수를 체크하고 부모 컴포넌트로 선택된 관심 전달
  useEffect(() => {
    const trueCount = clicked.filter((value) => value).length;
    const newLimit = trueCount > 5 || trueCount === 0;
    onLimitChange(newLimit);
    const finalInterest: string[] = [];
    clicked.map((value, index) => {
      if (value === true) finalInterest.push(array[index]);
    });
    finalData(finalInterest);
  }, [clicked]);

  return (
    <InterestContainer>
      {interest.map((interest, index) => (
        <InterestBtn
          $active={clicked[index]}
          onClick={() => handleClick(index)}
          key={index}
        >
          {interest}
        </InterestBtn>
      ))}
    </InterestContainer>
  );
};

export default InterestContents;
