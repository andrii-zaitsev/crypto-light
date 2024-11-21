import { useRecoilValue } from "recoil";
import { Stack, List } from "@mui/material";
import TickerListItem from "./TickerListItem";
import tickersState from "@/state/tickers";

const Tickers = () => {
  const symbols = useRecoilValue(tickersState);
  return (
    <Stack>
      <List>
        {symbols.map((symbol) => (
          <TickerListItem ticker={symbol} key={symbol.id} />
        ))}
      </List>
    </Stack>
  );
};

export default Tickers;
