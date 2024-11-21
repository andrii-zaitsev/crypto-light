import { atom } from "recoil";
import { Ticker } from "@/commonTypes/tickers";
import { Mode } from "@/commonTypes/ui";

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
