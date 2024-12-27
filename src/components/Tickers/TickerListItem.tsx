import { useRecoilState } from "recoil";
import { useQuery } from "@tanstack/react-query";
import {
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Typography,
  Stack
} from "@mui/material";
import { getTicker } from "@/api";
import Loader from "@/components/Loader";
import { selectedTickerState } from "@/state/state";
import { Ticker } from "@/commonTypes";
import { TokenIcon } from "@web3icons/react";

export type TickerProps = {
  ticker: Ticker;
};

const TickerListItem = ({ ticker }: TickerProps) => {
  const [selectedTicker, selectTicker] = useRecoilState(selectedTickerState);
  const onSelect = () => selectTicker(ticker);

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
        <Stack alignItems="flex-end">
          <Typography component="span" fontWeight="bold">
            {"--"}
          </Typography>
          <Typography
            component="span"
            sx={{
              backgroundColor: "lightgrey",
              textAlign: "center",
              color: "white",
              width: "5rem",
              borderRadius: "6px",
              padding: "2px 4px 2px 2px"
            }}
          >
            {`--`}
          </Typography>
        </Stack>
      </ListItem>
    );
  }

  if (status === "error") {
    return null;
  }

  const percentChange = Number(data.changePercent24Hr);
  const isGrowth = percentChange === Math.abs(percentChange);

  return (
    <ListItemButton
      onClick={onSelect}
      sx={
        selectedTicker.value === ticker.value
          ? { backgroundColor: "rgba(0, 0, 0, 0.04)" }
          : undefined
      }
    >
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
      <Stack alignItems="flex-end">
        <Typography component="span" fontWeight="bold">
          {Number(data.priceUsd).toFixed(2)}
        </Typography>
        <Typography
          component="span"
          sx={{
            backgroundColor: isGrowth ? "#65c467" : "#eb4e3d",
            textAlign: "right",
            color: "white",
            width: "5rem",
            borderRadius: "6px",
            padding: "2px 4px 2px 2px"
          }}
        >
          {`${Number(data.changePercent24Hr).toFixed(3)}%`}
        </Typography>
      </Stack>
    </ListItemButton>
  );
};

export default TickerListItem;
