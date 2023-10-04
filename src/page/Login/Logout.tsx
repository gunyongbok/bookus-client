import axios from "axios";

const Logout = () => {
  const logout = async () => {
    const accessTokenHeader = localStorage.getItem("accessToken");

    const headers = {
      "Access-token": `${accessTokenHeader}`,
    };
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_APP_DEFAULT_SERVER_URL}/oauth/kakao/withdraw`,
        {},
        { headers }
      );
      console.log("response >>", response);
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("email");
      localStorage.removeItem("id");
      localStorage.removeItem("userName");
    } catch (err) {
      console.log("Err >>", err);
    }
  };

  return (
    <div>
      <button onClick={logout}>로그아웃</button>
    </div>
  );
};

export default Logout;
