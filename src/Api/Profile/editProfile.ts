import axios from "axios";

const editProfile = async (
  memberName: string,
  profileImage: File | undefined | null
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

  // imageToAdd가 null이 아닌 경우
  if (imageToAdd !== null) {
    formData.append("profileImage", imageToAdd);
  } else {
    // null인 경우에는 profileImage 값으로 null을 추가
    formData.append("profileImage", "null");
  }

  // 여기서부터 코드 다시 치기
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
