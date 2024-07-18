import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { ProblemsArray } from "../models/problem.model";

export const codeAtom = atom<string>({
  key: "code",
  default: "",
});

export const answerAtom = atom<string>({
  key: "answer", // unique ID
  default: "display: flex; justify-content: end;",
});

export const solveAtom = atom<boolean>({
  key: "solve",
  default: false,
});

const { persistAtom } = recoilPersist({
  key: "problemset",
  storage: localStorage,
});

export const problemsetAtom = atom<ProblemsArray>({
  key: "problemset",
  default: [],
  effects_UNSTABLE: [persistAtom],
});
