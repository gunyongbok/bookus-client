import axios from "axios";

const getHighRatingBooks = async () => {
  const accessTokenHeader = localStorage.getItem("accessToken");
  const headers = {
    "Access-token": `${accessTokenHeader}`,
  };
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_DEFAULT_SERVER_URL}/books/top-rating`,
      { headers }
    );

    return response.data.data;
  } catch (err) {
    console.log("Err >>", err);
  }
};

export default getHighRatingBooks;
