import { useRecoilState } from "recoil";
import { Stack, List, Button, Typography } from "@mui/material";
import TickerListItem from "./TickerListItem";
import tickersState from "@/state/tickers";

const Tickers = () => {
  const [tickers, setTickers] = useRecoilState(tickersState);
  return (
    <Stack>
      <Typography component="h2" fontSize="1.5rem">
        {`Tickers (${tickers.length})`}
      </Typography>
      <List>
        {tickers.map((ticker) => (
          <TickerListItem ticker={ticker} key={ticker.id} />
        ))}
      </List>
      {!!tickers.length && (
        <Button
          variant="outlined"
          color="error"
          fullWidth
          onClick={() => setTickers([])}
        >
          Delete all
        </Button>
      )}
    </Stack>
  );
};

export default Tickers;
