import axios from "axios";

const submitInterestData = async (array: string[]) => {
  const accessTokenHeader = localStorage.getItem("accessToken");

  const headers = {
    "Access-token": `${accessTokenHeader}`,
  };
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_DEFAULT_SERVER_URL}/interests/enroll`,
      array,
      { headers }
    );

    console.log("response >>", response);
  } catch (err) {
    console.log("Err >>", err);
  }
};

export default submitInterestData;
