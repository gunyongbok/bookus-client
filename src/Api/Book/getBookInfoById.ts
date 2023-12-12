import axios from "axios";

const getBookInfoById = async (libraryBookId: string) => {
  try {
    const response = await axios.get(
      `${
        import.meta.env.VITE_APP_DEFAULT_SERVER_URL
      }/libraries/${libraryBookId}`
    );
    return response.data.data;
  } catch (err) {
    console.log("Err >>", err);
  }
};

export default getBookInfoById;
