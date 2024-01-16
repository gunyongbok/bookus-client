import axios from "axios";
import reissueToken from "./reissueToken";

const validateToken = async () => {
  const accessTokenHeader = localStorage.getItem("accessToken");
  const headers = {
    "Access-token": `${accessTokenHeader}`,
  };
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_DEFAULT_SERVER_URL}/auth/token/validation`,
      { headers }
    );
    console.log("response >>", response);
  } catch (err) {
    console.log("Err >>", err);
    reissueToken();
  }
};

export default validateToken;
