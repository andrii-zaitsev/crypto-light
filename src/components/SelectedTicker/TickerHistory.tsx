import { useState } from "react";
import { useRecoilValue } from "recoil";
import { Box, Stack, ButtonGroup, Button } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { selectedTickerState } from "@/state/state";
import { HistoryInterval } from "@/api";
import { getHistory } from "@/api";
import Loader from "../Loader";
import Chart from "@/components/Chart";
import { HistoryPoint } from "@/commonTypes/tickers";

const TickerHistory = () => {
  const selectedTicker = useRecoilValue(selectedTickerState);
  const [interval, setInterval] = useState(HistoryInterval.Day);
  const { data, status } = useQuery({
    queryKey: ["history", selectedTicker.id, interval],
    queryFn: () => getHistory(selectedTicker.id, interval)
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
    <>
      <ButtonGroup
        variant="outlined"
        aria-label="Basic button group"
        sx={{ marginTop: "1rem" }}
        fullWidth
      >
        <Button onClick={() => setInterval(HistoryInterval.Day)} fullWidth>
          Day
        </Button>
        <Button onClick={() => setInterval(HistoryInterval.Week)} fullWidth>
          Week
        </Button>
        <Button onClick={() => setInterval(HistoryInterval.Month)} fullWidth>
          Month
        </Button>
        <Button onClick={() => setInterval(HistoryInterval.HalfYear)} fullWidth>
          Six Months
        </Button>
        <Button onClick={() => setInterval(HistoryInterval.Year)} fullWidth>
          Year
        </Button>
      </ButtonGroup>
      <Box mt="1rem" mb="1rem">
        <Chart data={tickerHistory} />
      </Box>
    </>
  );
};

export default TickerHistory;
