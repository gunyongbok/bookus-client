import axios from "axios";

const getBookStatistic = async (isbn: string) => {
  try {
    const response = await axios.get(
      `${
        import.meta.env.VITE_APP_DEFAULT_SERVER_URL
      }/book-statistics/preview?booksIsbn=${isbn}`
    );
    const data = response.data.data;
    console.log("Response >>", data);
    return data;
  } catch (err) {
    console.log("Err >>", err);
  }
};

export default getBookStatistic;
