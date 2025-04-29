import { CryptoAsset, ApiHistoryPoint, HistoryInterval } from "@/commonTypes";

export const getAssets = (): Promise<CryptoAsset[]> =>
  fetch(
    `https://rest.coincap.io/v3/assets?apiKey=${import.meta.env.VITE_API_KEY}`
  )
    .then((res) => res.json())
    .then(({ data }) => data);

export const getHistory = (
  id: string,
  interval: HistoryInterval
): Promise<ApiHistoryPoint[]> =>
  fetch(
    `https://rest.coincap.io/v3/assets/${id}/history?interval=${interval}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`
  )
    .then((res) => res.json())
    .then(({ data }) => data);

export const getTicker = (id: string): Promise<CryptoAsset> =>
  fetch(
    `https://rest.coincap.io/v3/assets/${id}?apiKey=${
      import.meta.env.VITE_API_KEY
    }`
  )
    .then((res) => res.json())
    .then(({ data }) => data);
