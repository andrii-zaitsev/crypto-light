import { CryptoAsset } from "@/commonTypes/tickers";

const getTicker = (id: string): Promise<CryptoAsset> =>
  fetch(`/v2/assets/${id}`)
    .then((res) => res.json())
    .then(({ data }) => data);

export default getTicker;
