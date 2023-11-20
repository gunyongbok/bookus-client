import axios from "axios";

const getBookStatisticDetail = async (isbn: string) => {
  try {
    const response = await axios.get(
      `${
        import.meta.env.VITE_APP_DEFAULT_SERVER_URL
      }/book-statistics/detail?bookIsbn=${isbn}`
    );

    return response.data.data;
  } catch (err) {
    console.log("Err >>", err);
  }
};

export default getBookStatisticDetail;
