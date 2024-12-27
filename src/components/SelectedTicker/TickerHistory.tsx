import { useState, useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { Box, Stack, ButtonGroup, Button } from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { selectedTickerState, priceChangeState } from "@/state/state";
import { HistoryInterval } from "@/api";
import { getHistory } from "@/api";
import Loader from "../Loader";
import Chart from "@/components/Chart";
import { HistoryPoint, PriceChange } from "@/commonTypes";

const TickerHistory = () => {
  const selectedTicker = useRecoilValue(selectedTickerState);
  const [priceChange, setPriceChange] = useRecoilState(priceChangeState);
  const [selectedInterval, setSelectedInterval] = useState(HistoryInterval.Day);

  const { data, status } = useQuery({
    queryKey: ["history", selectedTicker.id, selectedInterval],
    queryFn: () => getHistory(selectedTicker.id, selectedInterval),
    select: (history): HistoryPoint[] =>
      history.map((historyItem) => ({
        ...historyItem,
        priceUsd: Number(historyItem.priceUsd)
      }))
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

  useEffect(() => {
    if (data) {
      const computePriceChange = (): PriceChange => {
        const first = data[0];
        const last = data[data.length - 1];
        const intervalPriceChange = last.priceUsd - first.priceUsd;
        const isGrowth = intervalPriceChange === Math.abs(intervalPriceChange);
        return { value: intervalPriceChange, isGrowth };
      };
      setPriceChange(computePriceChange());
    }
  }, [selectedInterval, data, setPriceChange]);

  if (status === "pending" || data === undefined) {
    return (
      <Stack alignItems="center" pt="15rem">
        <Loader />
      </Stack>
    );
  }

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
        <Chart
          data={data}
          isGrowth={priceChange.isGrowth}
          dayTime={
            selectedInterval === HistoryInterval.Day ||
            selectedInterval === HistoryInterval.Week
          }
          key={priceChange.value}
        />
      </Box>
    </>
  );
};

export default TickerHistory;
