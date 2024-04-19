import axios from "axios";

const withdraw = async () => {
  const accessTokenHeader = localStorage.getItem("accessToken");

  const headers = {
    "Access-token": `${accessTokenHeader}`,
  };
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_DEFAULT_SERVER_URL}/oauth/kakao/withdraw`,
      {},
      { headers }
    );
    console.log("response >>", response);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("email");
    localStorage.removeItem("id");
    localStorage.removeItem("userName");
  } catch (err) {
    console.log("Err >>", err);
  }
};

export default withdraw;
