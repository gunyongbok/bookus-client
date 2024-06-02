import axios from "axios";

const enrollBookToLibrary = async (body: Object) => {
  const accessTokenHeader = localStorage.getItem("accessToken");
  const headers = {
    "Access-token": `${accessTokenHeader}`,
  };
  try {
    await axios.post(
      `${import.meta.env.VITE_APP_DEFAULT_SERVER_URL}/libraries`,
      body,
      { headers }
    );
  } catch (err) {
    console.log(headers, body);
    console.log("Err >>", err);
  }
};

export default enrollBookToLibrary;
