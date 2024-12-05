import { useRecoilValue } from "recoil";
import { Box, Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { selectedTickerState } from "@/state/state";
import { HistoryInterval } from "@/api/getHistory";
import getHistory from "@/api/getHistory";
import Loader from "../Loader";
import Chart from "@/components/Chart";

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

  const tickerHistory = data.map((historyItem) => ({
    ...historyItem,
    priceUsd: Number(Number(historyItem.priceUsd).toFixed(2))
  }));

  console.log({
    tickerHistory,
    data,
    first: tickerHistory[59],
    second: tickerHistory[119]
  });

  const gett = () => {
    const points = [];
    for (let i = 0; i < tickerHistory.length; i += 60) {
      points.push(tickerHistory[i ? i - 1 : i]);
    }
    return points;
  };

  return (
    <Box>
      <Chart data={gett()} />
    </Box>
  );
};

export default TickerHistory;
