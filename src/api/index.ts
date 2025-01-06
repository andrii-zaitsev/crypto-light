import { CryptoAsset, ApiHistoryPoint, HistoryInterval } from "@/commonTypes";

export const getAssets = (): Promise<CryptoAsset[]> =>
  fetch("https://api.coincap.io/v2/assets")
    .then((res) => res.json())
    .then(({ data }) => data);

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
