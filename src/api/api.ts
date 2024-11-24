import { CryptoAsset } from "@/commonTypes/tickers";

export const getAssets = (): Promise<CryptoAsset[]> =>
  fetch("/v2/assets")
    .then((res) => res.json())
    .then(({ data }) => data);
