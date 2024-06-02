import axios from "axios";

const handleNotificationAgreement = async (body: Object) => {
  const accessTokenHeader = localStorage.getItem("accessToken");
  const headers = {
    "Access-token": `${accessTokenHeader}`,
  };

  console.log(body);
  try {
    const response = await axios.post(
      `${
        import.meta.env.VITE_APP_DEFAULT_SERVER_URL
      }/member/notification/agreement`,
      body,
      { headers }
    );
    console.log("response >>", response);
  } catch (err) {
    console.log("Err >>", err);
  }
};

export default handleNotificationAgreement;
