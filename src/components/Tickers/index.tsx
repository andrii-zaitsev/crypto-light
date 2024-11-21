import { useRecoilValue } from "recoil";
import { Stack, List } from "@mui/material";
import TickerListItem from "./TickerListItem";
import { tickersState } from "@/state/state";

const Tickers = () => {
  const tickers = useRecoilValue(tickersState);
  return (
    <Stack>
      <List>
        {tickers.map((ticker) => (
          <TickerListItem ticker={ticker} key={ticker.id} />
        ))}
      </List>
    </Stack>
  );
};

export default Tickers;
