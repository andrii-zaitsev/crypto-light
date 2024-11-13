import { atom } from "recoil";

export const idsState = atom<string[]>({
  key: "ids",
  default: ["bitcoin", "ethereum", "tether", "warning"]
});
