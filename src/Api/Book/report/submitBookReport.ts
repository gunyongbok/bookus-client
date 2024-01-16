import axios from "axios";

interface BodyProps {
  libraryBookId: number;
  title: string;
  contents: string;
}

const submitBookReport = async (bookInfo: BodyProps) => {
  const accessTokenHeader = localStorage.getItem("accessToken");
  const headers = {
    "Access-token": `${accessTokenHeader}`,
  };
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_DEFAULT_SERVER_URL}/book-reports`,
      bookInfo,
      { headers }
    );

    console.log("response >>", response);
  } catch (err) {
    console.log("Err >>", err);
    console.log(bookInfo);
  }
};

export default submitBookReport;
