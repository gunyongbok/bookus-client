import axios from "axios";

interface Props {
  pageNumber: string;
  readingStatus?: string;
}

const buildBooksApiUrl = ({ pageNumber, readingStatus }: Props) => {
  let url = `${
    import.meta.env.VITE_APP_DEFAULT_SERVER_URL
  }/book-reports/my?sort=CREATED_AT&page=${pageNumber}&size=6`;

  if (readingStatus) {
    url += `&readingStatus=${readingStatus}`;
  }

  return url;
};

const getMyBookReports = async ({ pageNumber, readingStatus }: Props) => {
  const accessTokenHeader = localStorage.getItem("accessToken");
  const headers = {
    "Access-token": `${accessTokenHeader}`,
  };
  try {
    const response = await axios.get(
      buildBooksApiUrl({ pageNumber, readingStatus }),
      { headers }
    );

    return response.data.data;
  } catch (err) {
    console.log("Err >>", err);
  }
};

export default getMyBookReports;
