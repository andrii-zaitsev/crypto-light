import { CryptoAsset, ApiHistoryPoint } from "@/commonTypes/tickers";

export const getAssets = (): Promise<CryptoAsset[]> =>
  fetch("https://api.coincap.io/v2/assets")
    .then((res) => res.json())
    .then(({ data }) => data);

export enum HistoryInterval {
  Day = "m1",
  Week = "m15",
  Month = "h1",
  HalfYear = "h6",
  Year = "d1"
}

export const getHistory = (
  id: string,
  interval: HistoryInterval
): Promise<ApiHistoryPoint[]> =>
  fetch(`https://api.coincap.io/v2/assets/${id}/history?interval=${interval}`)
    .then((res) => res.json())
    .then(({ data }) => data);

export const getTicker = (id: string): Promise<CryptoAsset> =>
  fetch(`https://api.coincap.io/v2/assets/${id}`)
    .then((res) => res.json())
    .then(({ data }) => data);
