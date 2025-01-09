import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Stack, List } from "@mui/material";
import TickerListItem from "./TickerListItem";
import { tickersState } from "@/state";
import NoSymbols from "./NoSymbols";
import { readSavedTickers } from "@/storage";

const SelectedTickers = () => {
  const [tickers, setTickers] = useRecoilState(tickersState);

  useEffect(() => {
    setTickers(readSavedTickers());
  }, []);

  if (tickers.length === 0) {
    return <NoSymbols />;
  }

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

export default SelectedTickers;
