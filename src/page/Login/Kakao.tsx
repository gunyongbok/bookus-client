import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Kakao = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const code = searchParams.get("code");
  const navigate = useNavigate();

  const kakaoLogin = async () => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_APP_DEFAULT_SERVER_URL
        }/oauth/kakao?code=${code}`
      );
      console.log("response >>", response);
      const data = response.data.data;
      localStorage.setItem("id", data.oauthId);
      localStorage.setItem("userName", data.nickname);
      localStorage.setItem("email", data.email);
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      if (data.isNewMember) {
        navigate("/service/agree");
      }
      navigate("/main");
    } catch (err) {}
  };

  useEffect(() => {
    kakaoLogin();
  }, []);
  return <div>KaKao</div>;
};

export default Kakao;
