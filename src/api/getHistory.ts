import { HistoryPoint } from "@/commonTypes/tickers";

export enum HistoryInterval {
  OneMin = "m1",
  FiveMin = "m5",
  FifteenMin = "m15",
  ThirtyMin = "m30",
  OneHour = "h1",
  TwoHour = "h2",
  SixHour = "h6",
  TwelveHour = "h12",
  OneDay = "d1"
}

const getHistory = (
  id: string,
  interval: HistoryInterval
): Promise<HistoryPoint[]> =>
  fetch(`/v2/assets/${id}/history?interval=${interval}`)
    .then((res) => res.json())
    .then(({ data }) => data);

export default getHistory;
