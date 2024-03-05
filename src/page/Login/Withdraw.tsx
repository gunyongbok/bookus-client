import axios from "axios";
import { useRecoilState, useSetRecoilState } from "recoil";
import { LoginState } from "../../states/LoginState";

const Withdraw = () => {
  const [loginState, setLoginState] = useRecoilState(LoginState);
  const withdraw = async () => {
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

      setLoginState({
        name: "LoginState",
        status: false,
      });

      console.log(loginState);
    } catch (err) {
      console.log("Err >>", err);
    }
  };

  return (
    <div>
      <button onClick={withdraw}>로그아웃</button>
    </div>
  );
};

export default Withdraw;
