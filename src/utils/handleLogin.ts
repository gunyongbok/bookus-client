import getRedirectUrl from "../Api/Login/getRedirectUrl";

export const handleLogin = async () => {
  const kakaoAuthUrl = await getRedirectUrl();
  window.location.href = kakaoAuthUrl;
};
