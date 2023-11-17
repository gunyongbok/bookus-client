import axios from "axios";

const validateNickname = async (nickname: string) => {
  interface memberNameProps {
    memberName?: string;
  }
  const memberName: memberNameProps = {};
  memberName["memberName"] = nickname;
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_DEFAULT_SERVER_URL}/member/name/duplication`,
      memberName
    );
    console.log("response >>", response);
    return Object.values(response.data.data)[0];
  } catch (err) {
    console.log("Err >>", err);
  }
};

export default validateNickname;
