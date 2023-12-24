import axios from "axios";

const deleteBook = async (libraryId: string) => {
  const accessTokenHeader = localStorage.getItem("accessToken");
  const headers = {
    "Access-token": `${accessTokenHeader}`,
  };
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_APP_DEFAULT_SERVER_URL}/libraries/${libraryId}`,
      { headers }
    );
    console.log("response >>", response);
  } catch (err) {
    console.log("Err >>", err);
  }
};

export default deleteBook;
