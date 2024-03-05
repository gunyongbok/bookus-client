import { atom } from "recoil";

export interface IContentTypes {
  name: string;
  status: boolean;
}

//recoil state 생성
export const LoginState = atom<IContentTypes>({
  key: "content",
  default: {
    name: "LoginState",
    status: false,
  },
});
