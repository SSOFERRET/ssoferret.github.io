import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "totalScore",
  storage: localStorage,
});

export const totalScoreAtom = atom<number>({
  key: "totalScore",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
