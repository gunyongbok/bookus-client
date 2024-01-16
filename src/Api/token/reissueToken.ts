import axios from "axios";

const reissueToken = async () => {
  const refreshTokenHeader = localStorage.getItem("refreshToken");
  const headers = {
    "Refresh-token": `${refreshTokenHeader}`,
  };
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_DEFAULT_SERVER_URL}/auth/reissue/token`,
      { headers }
    );
    console.log("response >>", response);
    localStorage.setItem("accessToken", response.data.data.accessToken);
    localStorage.setItem("refreshToken", response.data.data.refreshToken);
  } catch (err) {
    console.log("Err >>", err);
  }
};

export default reissueToken;
