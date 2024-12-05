import { CryptoAsset } from "@/commonTypes/tickers";

export const getAssets = (): Promise<CryptoAsset[]> =>
  fetch("https://api.coincap.io/v2/assets")
    .then((res) => res.json())
    .then(({ data }) => data);
