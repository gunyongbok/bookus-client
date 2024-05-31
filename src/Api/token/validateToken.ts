import axios from "axios";

const validateToken = async () => {
  const accessTokenHeader = localStorage.getItem("accessToken");
  const headers = {
    "Access-token": `${accessTokenHeader}`,
  };
  try {
    await axios.get(
      `${import.meta.env.VITE_APP_DEFAULT_SERVER_URL}/auth/token/validation`,
      { headers }
    );
    return true;
  } catch (err) {
    return false;
  }
};

export default validateToken;
