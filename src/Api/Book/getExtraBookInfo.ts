import axios from "axios";

const getExtraBookInfo = async (isbn: string) => {
  try {
    const response = await axios.get(
      `${
        import.meta.env.VITE_APP_DEFAULT_SERVER_URL
      }/books/info/extra?isbn=${isbn}`
    );

    return response.data.data;
  } catch (err) {
    console.log("Err >>", err);
  }
};

export default getExtraBookInfo;
