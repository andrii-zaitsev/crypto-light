import { atom } from "recoil";
import { Ticker } from "@/commonTypes/tickers";

const selectedTickerState = atom<Ticker>({
  key: "selectedTicker",
  default: { id: "bitcoin", value: "BTC" }
});

export default selectedTickerState;
