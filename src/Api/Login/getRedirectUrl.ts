import axios from "axios";

const getRedirectUrl = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_DEFAULT_SERVER_URL}/oauth/kakao/login`
    );
    const data = response.data.data;
    console.log("Response >>", data);
    return data;
  } catch (err) {
    console.log("Err >>", err);
  }
};

export default getRedirectUrl;
