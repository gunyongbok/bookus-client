import axios from "axios";

const editProfileNickname = async (nickname: string) => {
  const accessTokenHeader = localStorage.getItem("accessToken");
  const headers = {
    "Access-token": accessTokenHeader,
  };

  const body = {
    memberName: nickname,
  };

  try {
    const response = await axios.patch(
      `${import.meta.env.VITE_APP_DEFAULT_SERVER_URL}/member/profile`,
      body,
      { headers }
    );
    console.log(response);
    return response.data.data;
  } catch (err) {
    console.log("Err >>", err);
  }
};

export default editProfileNickname;
