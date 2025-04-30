export enum Sentiment {
  Bad = "Bad",
  Neutral = "Neutral",
  Good = "Good"
}

export type Ticker = {
  id: string;
  value: string;
};

export type CryptoAsset = {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  supply: string;
  maxSupply: string;
  marketCapUsd: string;
  volumeUsd24Hr: string;
  priceUsd: string;
  changePercent24Hr: string;
  vwap24Hr: string;
  explorer: string;
};

export type ApiHistoryPoint = {
  date: string;
  priceUsd: string;
  time: number;
};

export type HistoryPoint = Omit<ApiHistoryPoint, "priceUsd"> & {
  priceUsd: number;
};

export enum Mode {
  Idle = "idle",
  Search = "search"
}

export type PriceChange = {
  value: number;
  isGrowth: boolean;
};

export enum HistoryInterval {
  Day = "m1",
  Week = "m15",
  Month = "h1",
  HalfYear = "h6",
  Year = "d1"
}

export type TickerHistoryInterval = {
  value: HistoryInterval;
  label: string;
};
