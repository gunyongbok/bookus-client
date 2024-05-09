import axios from "axios";

const deleteProfileImg = async () => {
  const accessTokenHeader = localStorage.getItem("accessToken");
  const headers = {
    "Access-token": `${accessTokenHeader}`,
  };
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_APP_DEFAULT_SERVER_URL}/member/profile/image`,
      { headers }
    );

    return response;
  } catch (err) {
    console.log("Err >>", err);
  }
};

export default deleteProfileImg;
