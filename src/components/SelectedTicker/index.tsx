import { useRecoilValue } from "recoil";
import { useQuery } from "@tanstack/react-query";
import { Stack } from "@mui/material";
import { selectedTickerState } from "@/state/state";
import getHistory, { HistoryInterval } from "@/api/getHistory";
import Loader from "../Loader";

const SelectedTicker = () => {
  const selectedTicker = useRecoilValue(selectedTickerState);
  const { data, status } = useQuery({
    queryKey: ["history", selectedTicker.id],
    queryFn: () => getHistory(selectedTicker.id, HistoryInterval.OneDay)
  });

  if (status === "pending" || data === undefined) {
    return (
      <Stack alignItems="center" pt="15rem">
        <Loader />
      </Stack>
    );
  }

  console.log({ data });

  return <h1>{selectedTicker.value}</h1>;
};

export default SelectedTicker;
