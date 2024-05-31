import { atom } from "recoil";

// 토큰 유효성 상태 정의
export const tokenValidityState = atom<boolean>({
  key: "tokenValidityState",
  default: false,
});
