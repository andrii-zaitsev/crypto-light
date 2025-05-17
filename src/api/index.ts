import { CryptoAsset } from "@/commonTypes";

export const getAssets = (): Promise<CryptoAsset[]> =>
  fetch(
    `https://rest.coincap.io/v3/assets?apiKey=${import.meta.env.VITE_API_KEY}`
  )
    .then((res) => res.json())
    .then(({ data }) => data);
