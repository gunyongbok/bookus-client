import axios from "axios";

const getFavoriteBooks = async () => {
  const accessTokenHeader = localStorage.getItem("accessToken");
  const headers = {
    "Access-token": `${accessTokenHeader}`,
  };
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_DEFAULT_SERVER_URL}/libraries/favorite`,
      { headers }
    );
    console.log(response);
    return response.data.data;
  } catch (err) {
    console.log("Err >>", err);
  }
};

export default getFavoriteBooks;
