import { useRecoilValue } from "recoil";
import { Box, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { selectedTickerState } from "@/state/state";
import { HistoryInterval } from "@/api/getHistory";
import getHistory from "@/api/getHistory";
import Loader from "../Loader";
import Chart from "@/components/Chart";
import { HistoryPoint } from "@/commonTypes/tickers";

const TickerHistory = () => {
  const selectedTicker = useRecoilValue(selectedTickerState);
  const { data, status } = useQuery({
    queryKey: ["history", selectedTicker.id],
    queryFn: () => getHistory(selectedTicker.id, HistoryInterval.Day)
  });

  if (status === "pending" || data === undefined) {
    return (
      <Stack alignItems="center" pt="15rem">
        <Loader />
      </Stack>
    );
  }

  const getTickerHistory = () => {
    const points: HistoryPoint[] = [];
    for (let i = 0; i < data.length; i += 60) {
      points.push(data[i ? i - 1 : i]);
    }
    return points;
  };

  const tickerHistory = getTickerHistory();

  return (
    <Box>
      <Chart data={tickerHistory} />
    </Box>
  );
};

export default TickerHistory;
