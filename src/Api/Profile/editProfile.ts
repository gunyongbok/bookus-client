import axios from "axios";

const editProfile = async (memberName: string, profileImage: File) => {
  const accessTokenHeader = localStorage.getItem("accessToken");
  const headers = {
    "Content-Type": "multipart/form-data",
    "Access-token": accessTokenHeader,
  };

  const formData = new FormData();
  formData.append("memberName", memberName);
  formData.append("profileImage", profileImage);

  console.log("FormData : " + formData);

  try {
    const response = await axios.patch(
      `${import.meta.env.VITE_APP_DEFAULT_SERVER_URL}/member/profile`,
      formData,
      { headers }
    );
    console.log(response);
    return response.data.data;
  } catch (err) {
    console.log("Err >>", err);
  }
};

export default editProfile;
