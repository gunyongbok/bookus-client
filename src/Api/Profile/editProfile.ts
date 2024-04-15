import axios from "axios";

const editProfile = async (
  memberName: string,
  profileImage: File | undefined
) => {
  const accessTokenHeader = localStorage.getItem("accessToken");
  const headers = {
    "Content-Type": "multipart/form-data",
    "Access-token": accessTokenHeader,
  };

  const formData = new FormData();
  formData.append("memberName", memberName);

  if (profileImage) {
    // File 객체를 Blob으로 변환하여 FormData에 추가합니다.
    const profileImageBlob = profileImage.slice(
      0,
      profileImage.size,
      profileImage.type
    );
    const profileImageFile = new File([profileImageBlob], profileImage.name);
    formData.append("profileImage", profileImageFile);
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
