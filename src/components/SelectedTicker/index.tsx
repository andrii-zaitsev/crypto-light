import { useRecoilValue, useRecoilState } from "recoil";
import { useQuery } from "@tanstack/react-query";
import { Stack, Box, Button, Typography, Link } from "@mui/material";
import { selectedTickerState, tickersState } from "@/state";
import { getTicker } from "@/api";
import Loader from "@/components/Loader";
import TickerHistory from "./TickerHistory";
import Price from "./Price";

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
      <Box marginLeft="auto" marginRight="auto" mt="3rem" width="72%">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
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
            <Typography component="h2" color="textDisabled" ml="0.5rem">
              {data.name}
            </Typography>
          </Stack>
          <Price price={Number(data.priceUsd)} />
        </Stack>
        <TickerHistory />
        <Link href={data.explorer} underline="always" fontFamily="sans-serif">
          See More
        </Link>
      </Box>
    </Stack>
  );
};

export default SelectedTicker;
