import axios from "axios";

const signUp = async (body: Object) => {
  const accessTokenHeader = localStorage.getItem("accessToken");
  const headers = {
    "Access-token": `${accessTokenHeader}`,
  };
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_DEFAULT_SERVER_URL}/member/sign-up`,
      body,
      { headers }
    );
    console.log("response >>", response);
  } catch (err) {
    console.log("Err >>", err);
  }
};

export default signUp;
