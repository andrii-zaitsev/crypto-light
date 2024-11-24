import { atom } from "recoil";
import { Ticker, Mode } from "@/commonTypes/tickers";

export const tickersState = atom<Ticker[]>({
  key: "tickers",
  default: [
    { id: "kava", value: "KAVA" },
    { id: "nexo", value: "NEXO" },
    { id: "ecash", value: "XEC" },
    { id: "warning", value: "WRN" },
    { id: "lido-dao", value: "LDO" },
    { id: "dogecoin", value: "DOGE" },
    { id: "bitcoin", value: "BTC" }
  ]
});

export const selectedTickerState = atom<Ticker>({
  key: "selectedTicker",
  default: { id: "bitcoin", value: "BTC" }
});

export const modeState = atom({
  key: "mode",
  default: Mode.Idle
});
