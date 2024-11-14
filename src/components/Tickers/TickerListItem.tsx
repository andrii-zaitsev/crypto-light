import { useSetRecoilState } from "recoil";
import { useQuery } from "@tanstack/react-query";
import {
  ListItem,
  ListItemText,
  IconButton,
  ListItemIcon,
  Typography
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import WarningIcon from "@mui/icons-material/Warning";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { getTicker } from "@/api";
import Loader from "@/components/Loader";
import tickersState from "@/state/tickers";
import { Ticker } from "@/commonTypes/tickers";

export type TickerProps = {
  ticker: Ticker;
};

const TickerListItem = ({ ticker }: TickerProps) => {
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

  if (status === "error") {
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

  const percentChange = data ? Number(data["changePercent24Hr"]) : 1;
  const isGrowth = data && percentChange === Math.abs(percentChange);

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
      <ListItemText>
        <Typography color={isGrowth ? "success" : "error"}>
          {data.symbol}
        </Typography>
      </ListItemText>
    </ListItem>
  );
};

export default TickerListItem;
