export const startWithKakaoAccount: string = "카카오 계정으로 시작하기";

export const agreeMessage: string =
  "가입 시 BOOKUS의 서비스 이용 약관과 개인정보 보호정책에 동의하게 됩니다.";

export const nicknameLabel: string = "15자 이내로 입력해주세요.";

export const nicknameCaution: string = " 특수문자는 - 와 _ 만 사용 가능합니다.";

export const bookRecommend: string = "도서 추천에 필요해요.";

export const bookMessage: string = "해당 정보는 외부에 공개되지 않아요.";

export const interestFix: string = "관심 주제는 언제든지 수정 가능해요!";

export const inputPlaceholder: string = "어떤 책을 찾으세요?";

export const writeBookReport: string = "독서록 작성하기";

export const noBookReportMessage: string = "작성한 독서록이 없습니다";

export const noBookReportDetailMsg: string =
  "책을 읽고 독서록을 작성해주세요\n해당 책에 대한 나의 기록들을 모아볼 수 있습니다.";

export const deleteBookBtnMsg: string = "내 서재에서 삭제하기";

export const getBookStarRatingMsg: string =
  "해당 책에 대한\n나의 별점을 남겨주세요";

export const TopFiveBookTitle: string = "🍀 현재 인기 순위 TOP 5";

export const Categoty: string = "🌱 카테고리";

export const TopRatingBookTitle: string = "🌿 별점 높은 책";

export const NotFoundFirstMsg: string =
  "죄송합니다.\n요청하신 페이지를 찾을 수 없습니다.";

export const NotFoundSecondMsg: string =
  "방문하시려는 페이지의 주소가 잘못 입력되었거나,\n페이지의 주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수 없습니다.\n입력하신 페이지 주소가 정확한지 다시 한번 확인해주시기 바랍니다.";

export const NotFoundThirdMsg: string =
  "관련 문의사항은 qhrrjsdyd123@gmail.com 으로 연락주세요.\n감사합니다.";

type ProfileListDataItem = {
  [key: string]: string;
};

export const ProfileListData: ProfileListDataItem[] = [
  { "계정 관리": "account-management" },
  { "알림 설정": "notification-setting" },
  { 공지사항: "announcement" },
  { 고객센터: "customer-service-center" },
  { 이용약관: "terms-of-conditions" },
  { 로그아웃: "logout" },
];

export const CustomerServiceAskMsg: string =
  "이용 중 불편한 점이나 문의사항을 보내주세요.\n확인 후 빠르고 정확하게 답변드리겠습니다.\n평일 (월~금) 10:00 ~ 17: 00, 주말/공휴일 휴무";

export const FirstNoAnnounceMsg: string = "공지사항이 없습니다";

export const SecondNoAnnounceMsg: string =
  "아직 전달해드릴 공지사항이 없습니다.\n공지사항 발생 시 푸쉬 알림으로 알려드릴게요.";

export const WithdrawInformMsg: string =
  "계정 삭제 시 독서록 등 모든 활동 정보가 삭제됩니다.\n탈퇴 후 재가입은 7일 후에 가능합니다.";

export const WithdrawFinalMsg: string =
  "탈퇴 이유를 선택해야 탈퇴가 가능합니다.";
