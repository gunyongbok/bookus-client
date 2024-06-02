import axios from "axios";

const getBookInfoByIsbn = async (isbn: string | null) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_DEFAULT_SERVER_URL}/books/info?isbn=${isbn}`
    );

    return response.data.data;
  } catch (err) {
    console.log("Err >>", err);
  }
};

export default getBookInfoByIsbn;
