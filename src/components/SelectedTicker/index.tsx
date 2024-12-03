import { useRecoilValue, useRecoilState } from "recoil";
import { useQuery } from "@tanstack/react-query";
import { Stack, Box, Button } from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { selectedTickerState, tickersState } from "@/state/state";
import getTicker from "@/api/getTicker";
import Loader from "../Loader";
import Chart from "@/components/Chart";

const SelectedTicker = () => {
  const selectedTicker = useRecoilValue(selectedTickerState);
  const [tickers, setTickers] = useRecoilState(tickersState);

  const { data, status } = useQuery({
    queryKey: ["tickerId", selectedTicker.id],
    queryFn: () => getTicker(selectedTicker.id)
  });

  if (status === "pending" || data === undefined) {
    return (
      <Stack alignItems="center" pt="15rem">
        <Loader />
      </Stack>
    );
  }

  const isSaved = !!tickers.find((ticker) => ticker.id === selectedTicker.id);

  return (
    <Stack>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end"
        }}
      >
        <Button
          href={data.explorer}
          variant="outlined"
          endIcon={<TravelExploreIcon />}
          sx={{ marginRight: "1rem" }}
        >
          Source
        </Button>
        {isSaved ? (
          <Button
            variant="contained"
            color="error"
            onClick={() =>
              setTickers((prevTickers) =>
                prevTickers.filter((ticker) => ticker.id !== selectedTicker.id)
              )
            }
          >
            Remove
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            onClick={() =>
              setTickers((prevTickers) => [...prevTickers, selectedTicker])
            }
          >
            Add
          </Button>
        )}
      </Box>
      <Box>
        <Chart />
      </Box>
    </Stack>
  );
};

export default SelectedTicker;
