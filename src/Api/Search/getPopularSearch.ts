import axios from "axios";

const getPopularSearch = async (
  setSearchData: React.Dispatch<React.SetStateAction<{ bookTitle: string }[]>>
) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_APP_DEFAULT_SERVER_URL}/books/search/popular`
    );
    const data = response.data.data;
    setSearchData(data);
    console.log("Response >>", data);
  } catch (err) {
    console.log("Err >>", err);
  }
};

export default getPopularSearch;
