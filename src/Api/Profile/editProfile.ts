import axios from "axios";

const editProfile = async (
  memberName: string,
  profileImage: File | undefined
) => {
  // profileImage가 undefined일 경우 null로 설정합니다.
  const imageToAdd = profileImage !== undefined ? profileImage : null;

  const accessTokenHeader = localStorage.getItem("accessToken");
  const headers = {
    "Content-Type": "multipart/form-data",
    "Access-token": accessTokenHeader,
  };

  const formData = new FormData();
  formData.append("memberName", memberName);

  // imageToAdd가 null이 아닌 경우에만 formData에 추가합니다.
  if (imageToAdd !== null) {
    formData.append("profileImage", imageToAdd);
  }

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_APP_DEFAULT_SERVER_URL}/member/profile`,
      formData,
      { headers }
    );

    return response.data.data;
  } catch (err) {
    console.log("Err >>", err);
  }
};

export default editProfile;
