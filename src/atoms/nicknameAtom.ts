import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "nickname",
  storage: localStorage,
});

export const nicknameAtom = atom<string>({
  key: "nickname",
  default: "",
  effects_UNSTABLE: [persistAtom],
});
