import { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { Box, Stack, ButtonGroup, Button } from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { selectedTickerState } from "@/state/state";
import { HistoryInterval } from "@/api";
import { getHistory } from "@/api";
import Loader from "../Loader";
import Chart from "@/components/Chart";
import { HistoryPoint } from "@/commonTypes/tickers";

const TickerHistory = () => {
  const selectedTicker = useRecoilValue(selectedTickerState);
  const [selectedInterval, setSelectedInterval] = useState(HistoryInterval.Day);
  const { data, status } = useQuery({
    queryKey: ["history", selectedTicker.id, selectedInterval],
    queryFn: () => getHistory(selectedTicker.id, selectedInterval)
  });

  const queryClient = useQueryClient();

  useEffect(() => {
    Object.values(HistoryInterval).forEach((interval) =>
      queryClient.prefetchQuery({
        queryKey: ["history", selectedTicker.id, interval],
        queryFn: () => getHistory(selectedTicker.id, interval)
      })
    );
  }, [queryClient, selectedTicker]);

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

  const intervals: [HistoryInterval, string][] = [
    [HistoryInterval.Day, "Day"],
    [HistoryInterval.Week, "Week"],
    [HistoryInterval.Month, "Month"],
    [HistoryInterval.HalfYear, "Six Months"],
    [HistoryInterval.Year, "Year"]
  ];

  return (
    <>
      <ButtonGroup
        variant="outlined"
        aria-label="Basic button group"
        sx={{ marginTop: "1rem" }}
        fullWidth
      >
        {intervals.map(([historyInterval, buttonText]) => (
          <Button
            variant={
              selectedInterval === historyInterval ? "contained" : "outlined"
            }
            onClick={() => setSelectedInterval(historyInterval)}
            fullWidth
            key={historyInterval}
          >
            {buttonText}
          </Button>
        ))}
      </ButtonGroup>
      <Box mt="1rem" mb="1rem">
        <Chart data={tickerHistory} />
      </Box>
    </>
  );
};

export default TickerHistory;
