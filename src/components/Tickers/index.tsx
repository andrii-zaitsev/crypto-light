import { useRecoilValue } from "recoil";
import { Stack, List } from "@mui/material";
import SymbolListItem from "./TickerListItem";
import tickersState from "@/state/tickers";

const Symbols = () => {
  const symbols = useRecoilValue(tickersState);
  return (
    <Stack>
      <List>
        {symbols.map((symbol) => (
          <SymbolListItem ticker={symbol} key={symbol.id} />
        ))}
      </List>
    </Stack>
  );
};

export default Symbols;
