import axios from "axios";

const changeBookState = async (libraryId: string, body: object) => {
  const accessTokenHeader = localStorage.getItem("accessToken");
  const headers = {
    "Access-token": `${accessTokenHeader}`,
  };
  try {
    const response = await axios.patch(
      `${import.meta.env.VITE_APP_DEFAULT_SERVER_URL}/libraries/${libraryId}`,
      body,
      { headers }
    );
    console.log("response >>", response);
  } catch (err) {
    console.log(headers, body);
    console.log("Err >>", err);
  }
};

export default changeBookState;
