import axios from "axios";
import { NavigateFunction } from "react-router-dom";

const validateToken = async (navigate: NavigateFunction) => {
  const accessTokenHeader = localStorage.getItem("accessToken");
  const headers = {
    "Access-token": `${accessTokenHeader}`,
  };
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_DEFAULT_SERVER_URL}/auth/token/validation`,
      { headers }
    );

    console.log(response);
    return response;
  } catch (err) {
    navigate("/login");
    return err;
  }
};

export default validateToken;
