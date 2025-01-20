import { atom } from "recoil";
import {
  Ticker,
  Mode,
  PriceChange,
  HistoryInterval,
  TickerHistoryInterval
} from "@/commonTypes";

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

export const intervalLabel: Record<HistoryInterval, string> = {
  [HistoryInterval.Day]: "Day",
  [HistoryInterval.Week]: "Week",
  [HistoryInterval.Month]: "Month",
  [HistoryInterval.HalfYear]: "Six Months",
  [HistoryInterval.Year]: "Year"
};

export const historyIntervalState = atom<TickerHistoryInterval>({
  key: "historyInterval",
  default: {
    value: HistoryInterval.Day,
    label: intervalLabel[HistoryInterval.Day]
  }
});

export const displayMobileSelectedTickerState = atom<boolean>({
  key: "displayMobileSelectedTicker",
  default: false
});
