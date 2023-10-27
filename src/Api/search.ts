import axios from "axios";

interface Book {
  title: string;
  author: string;
}

interface BookSearchResponse {
  documents: Book[];
}

const Kakao = axios.create({
  baseURL: "https://dapi.kakao.com", // 공통 요청 경로를 지정해준다.
  headers: {
    Authorization: `KakaoAK ${import.meta.env.VITE_APP_REST_API_KEY}`, // 공통으로 요청 할 헤더
  },
});

export const bookSearch = async (params: {
  query: string;
  sort: string;
  page: number;
  size: number;
}) => {
  const response = await Kakao.get<BookSearchResponse>("/v3/search/book", {
    params,
  });
  return response.data;
};
