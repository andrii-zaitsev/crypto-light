import { useRecoilState, useSetRecoilState } from "recoil";
import { useQuery } from "@tanstack/react-query";
import {
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Typography
} from "@mui/material";
import WarningIcon from "@mui/icons-material/Warning";
import getTicker from "@/api/getTicker";
import Loader from "@/components/Loader";
import selectedTickerState from "@/state/selectedTicker";
import tickersState from "@/state/tickers";
import { Ticker } from "@/commonTypes/tickers";
import { TokenIcon } from "@web3icons/react";

export type TickerProps = {
  ticker: Ticker;
};

const TickerListItem = ({ ticker }: TickerProps) => {
  const [selectedTicker, selectTicker] = useRecoilState(selectedTickerState);
  const onSelect = () => selectTicker(ticker);

  const setTickers = useSetRecoilState(tickersState);
  const deleteId = () =>
    setTickers((prevTickers) =>
      prevTickers.filter((tickerItem) => tickerItem.id !== ticker.id)
    );

  const { data, status } = useQuery({
    queryKey: ["tickerId", ticker.id],
    queryFn: () => getTicker(ticker.id)
  });

  if (status === "pending") {
    return (
      <ListItem>
        <ListItemIcon>
          <Loader />
        </ListItemIcon>
        <ListItemText>
          <Typography
            component="h3"
            fontWeight="bold"
            textTransform="uppercase"
          >
            {ticker.value}
          </Typography>
          <Typography component="h4" color="textDisabled">
            {"--"}
          </Typography>
        </ListItemText>
      </ListItem>
    );
  }

  if (status === "error" || data === undefined) {
    return (
      <ListItemButton
        onClick={onSelect}
        sx={{
          backgroundColor: "rgba(178, 36, 74, 0.1)",
          "&:hover": { backgroundColor: "rgba(178, 36, 74, 0.1)" }
        }}
      >
        <ListItemIcon>
          <WarningIcon color="warning" fontSize="large" />
        </ListItemIcon>
        <ListItemText>
          <Typography
            component="h3"
            fontWeight="bold"
            textTransform="uppercase"
          >
            {ticker.value}
          </Typography>
          <Typography component="h4" color="textDisabled">
            {"--"}
          </Typography>
        </ListItemText>
      </ListItemButton>
    );
  }

  const percentChange = Number(data.changePercent24Hr);
  const isGrowth = percentChange === Math.abs(percentChange);

  return (
    <ListItemButton onClick={onSelect}>
      <ListItemIcon>
        <TokenIcon symbol={data.symbol} variant="branded" size={40} />
      </ListItemIcon>
      <ListItemText>
        <Typography component="h3" fontWeight="bold" textTransform="uppercase">
          {data.symbol}
        </Typography>
        <Typography component="h4" color="textDisabled">
          {data.name}
        </Typography>
      </ListItemText>
    </ListItemButton>
  );
};

export default TickerListItem;
