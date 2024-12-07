import { useRecoilValue, useRecoilState } from "recoil";
import { useQuery } from "@tanstack/react-query";
import {
  Stack,
  Box,
  ButtonGroup,
  Button,
  Typography,
  Link
} from "@mui/material";
import { selectedTickerState, tickersState } from "@/state/state";
import getTicker from "@/api/getTicker";
import Loader from "../Loader";
import TickerHistory from "./TickerHistory";

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
      <Box marginLeft="auto" marginRight="auto">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            component="h1"
            fontSize="2rem"
            fontWeight="bold"
            mr="0.5rem"
          >
            {selectedTicker.value}
          </Typography>
          <Typography component="span" fontSize="1.5rem">
            {Number(data.priceUsd).toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
              minimumFractionDigits: 2
            })}
          </Typography>
        </Stack>
        <Typography component="h2" color="textDisabled">
          {data.name}
        </Typography>
        <ButtonGroup
          variant="outlined"
          aria-label="Basic button group"
          sx={{ marginTop: "1rem" }}
          fullWidth
        >
          <Button fullWidth>Day</Button>
          <Button fullWidth>Week</Button>
          <Button fullWidth>Month</Button>
          <Button fullWidth>Six Months</Button>
          <Button fullWidth>Year</Button>
        </ButtonGroup>
        <Box mt="1rem" mb="1rem">
          <TickerHistory />
        </Box>
        <Link href={data.explorer} underline="always" fontFamily="sans-serif">
          See More
        </Link>
      </Box>
    </Stack>
  );
};

export default SelectedTicker;
