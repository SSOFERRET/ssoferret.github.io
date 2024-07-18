import { atom } from "recoil";

export const headerHeightState = atom<number>({
  key: "headerHeight",
  default: 0
});

export const footerHeightState = atom<number>({
  key: "footerHeight",
  default: 0
});

export const filterHeightState = atom<number>({
  key: "filterHeight",
  default: 700
})
