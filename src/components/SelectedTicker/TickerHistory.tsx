import { useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { Box, Stack, ButtonGroup, Button } from "@mui/material";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  selectedTickerState,
  priceChangeState,
  historyIntervalState,
  intervalLabel
} from "@/state";
import { getHistory } from "@/api";
import Loader from "../Loader";
import Chart from "@/components/Chart";
import { HistoryPoint, PriceChange, HistoryInterval } from "@/commonTypes";

const TickerHistory = () => {
  const selectedTicker = useRecoilValue(selectedTickerState);
  const [priceChange, setPriceChange] = useRecoilState(priceChangeState);
  const [{ value: selectedInterval }, setSelectedInterval] = useRecoilState(
    historyIntervalState
  );

  const onSelectInterval = (newInterval: HistoryInterval) =>
    setSelectedInterval({
      value: newInterval,
      label: intervalLabel[newInterval]
    });

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
      <Stack alignItems="center">
        <Loader />
      </Stack>
    );
  }

  return (
    <>
      <ButtonGroup
        variant="outlined"
        aria-label="Basic button group"
        sx={{ marginTop: "1rem", width: "110%" }}
      >
        {Object.values(HistoryInterval).map(
          (historyInterval: HistoryInterval) => (
            <Button
              variant={
                selectedInterval === historyInterval ? "contained" : "outlined"
              }
              onClick={() => onSelectInterval(historyInterval)}
              fullWidth
              key={historyInterval}
            >
              {intervalLabel[historyInterval]}
            </Button>
          )
        )}
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
