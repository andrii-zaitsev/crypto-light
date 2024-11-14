import { atom } from "recoil";
import { Ticker } from "@/commonTypes/tickers";

const tickersState = atom<Ticker[]>({
  key: "tickers",
  default: []
});

export default tickersState;
