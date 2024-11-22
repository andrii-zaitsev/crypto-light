import { atom } from "recoil";
import { Ticker, Mode } from "@/commonTypes/tickers";

export const tickersState = atom<Ticker[]>({
  key: "tickers",
  default: []
});

export const selectedTickerState = atom<Ticker>({
  key: "selectedTicker",
  default: { id: "bitcoin", value: "BTC" }
});

export const modeState = atom({
  key: "mode",
  default: Mode.Idle
});
