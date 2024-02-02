import axios from "axios";

interface BodyProps {
  title: string;
  contents: string;
}

const editBookReport = async (
  bookReportId: string | undefined,
  bookReport: BodyProps
) => {
  const accessTokenHeader = localStorage.getItem("accessToken");
  const headers = {
    "Access-token": `${accessTokenHeader}`,
  };
  try {
    const response = await axios.patch(
      `${
        import.meta.env.VITE_APP_DEFAULT_SERVER_URL
      }/book-reports/${bookReportId}`,
      bookReport,
      { headers }
    );
    console.log(response);
    return response.data.data;
  } catch (err) {
    console.log("Err >>", err);
  }
};

export default editBookReport;
