import axios from "axios";
import { BookResults } from "../../types/book";

const bookEnroll = async (bookInfo: BookResults) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_DEFAULT_SERVER_URL}/books/enroll`,
      bookInfo
    );

    console.log("response >>", response);
  } catch (err) {
    console.log("Err >>", err);
    console.log(bookInfo);
  }
};

export default bookEnroll;
