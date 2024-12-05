import { HistoryPoint } from "@/commonTypes/tickers";

export enum HistoryInterval {
  Day = "m1",
  Week = "m15",
  Month = "h1",
  HalfYear = "h6",
  Year = "d1"
}

const getHistory = (
  id: string,
  interval: HistoryInterval
): Promise<HistoryPoint[]> =>
  fetch(`https://api.coincap.io/v2/assets/${id}/history?interval=${interval}`)
    .then((res) => res.json())
    .then(({ data }) => data);

export default getHistory;
