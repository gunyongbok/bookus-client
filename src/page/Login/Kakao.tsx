import axios from "axios";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Kakao = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get("code");
  console.log(code);

  const ApiCall = async () => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_APP_DEFAULT_SERVER_URL
        }/oauth/kakao?code=${code}`
      );
      console.log("response >>", response);
    } catch (err) {
      console.log("Error >>", err);
    }
  };

  useEffect(() => {
    ApiCall();
  }, []);
  return <div>KaKao</div>;
};

export default Kakao;
