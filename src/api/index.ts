import { CryptoAsset } from "@/commonTypes";

export const getTopAssets = (): Promise<CryptoAsset[]> =>
  fetch(
    `https://rest.coincap.io/v3/assets?apiKey=${import.meta.env.VITE_API_KEY}`
  )
    .then((res) => res.json())
    .then(({ data }) => data);
