import axios from "axios";

const getReportsBySelectedBook = async (libraryBookId: string) => {
  const accessTokenHeader = localStorage.getItem("accessToken");
  const headers = {
    "Access-token": `${accessTokenHeader}`,
  };
  try {
    const response = await axios.get(
      `${
        import.meta.env.VITE_APP_DEFAULT_SERVER_URL
      }/book-reports/libraries/${libraryBookId}`,
      { headers }
    );
    return response.data.data;
  } catch (err) {
    console.log("Err >>", err);
  }
};

export default getReportsBySelectedBook;
