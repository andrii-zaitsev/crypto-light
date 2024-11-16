import { useRecoilState, useSetRecoilState } from "recoil";
import { useQuery } from "@tanstack/react-query";
import {
  ListItem,
  ListItemText,
  IconButton,
  ListItemIcon,
  Typography
} from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import DeleteIcon from "@mui/icons-material/Delete";
import WarningIcon from "@mui/icons-material/Warning";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
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
        <Loader />
      </ListItem>
    );
  }

  if (status === "error" || data === undefined) {
    return (
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete" onClick={deleteId}>
            <DeleteIcon />
          </IconButton>
        }
      >
        <ListItemIcon>
          <WarningIcon color="warning" />
        </ListItemIcon>
        <ListItemText>{`Unable to load data for: "${ticker.value}"`}</ListItemText>
      </ListItem>
    );
  }

  const percentChange = Number(data.changePercent24Hr);
  const isGrowth = percentChange === Math.abs(percentChange);

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={deleteId}>
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemIcon>
        {isGrowth ? (
          <TrendingUpIcon color="success" />
        ) : (
          <TrendingDownIcon color="error" />
        )}
      </ListItemIcon>
      <TokenIcon symbol={data.symbol} variant="branded" size={40} />
      <ListItemText>
        <Typography color={isGrowth ? "success" : "error"} ml="1rem">
          {data.symbol}
        </Typography>
      </ListItemText>
      <ListItemIcon>
        <IconButton onClick={onSelect}>
          <BarChartIcon
            color={selectedTicker.id === ticker.id ? "primary" : "action"}
          />
        </IconButton>
      </ListItemIcon>
    </ListItem>
  );
};

export default TickerListItem;
