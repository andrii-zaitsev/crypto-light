import { atom } from "recoil";
import { Ticker, Mode, PriceChange } from "@/commonTypes";

export const tickersState = atom<Ticker[]>({
  key: "tickers",
  default: []
});

export const selectedTickerState = atom<Ticker>({
  key: "selectedTicker",
  default: { id: "bitcoin", value: "BTC" }
});

export const modeState = atom<Mode>({
  key: "mode",
  default: Mode.Idle
});

export const searchState = atom({
  key: "searchState",
  default: ""
});

export const priceChangeState = atom<PriceChange>({
  key: "priceChange",
  default: {
    value: 0,
    isGrowth: true
  }
});
