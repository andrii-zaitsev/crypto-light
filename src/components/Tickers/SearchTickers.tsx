import { useMemo } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { useQuery } from "@tanstack/react-query";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
  Stack
} from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { getAssets } from "@/api/api";
import { searchState, tickersState } from "@/state/state";

const SearchTickers = () => {
  const search = useRecoilValue(searchState);
  const [tickers, setTickers] = useRecoilState(tickersState);

  const { data = [] } = useQuery({
    queryKey: ["assets"],
    queryFn: getAssets,
    select: (data) =>
      data.map((asset) => ({
        ...asset,
        searchWords: `${asset.name.toLowerCase()} ${asset.symbol.toLowerCase()}`
      }))
  });

  const searchTickers = useMemo(
    () => data.filter(({ searchWords }) => searchWords.includes(search)),
    [data, search]
  );

  return (
    <div>
      <List>
        {searchTickers.map((ticker) => {
          const percentChange = Number(ticker.changePercent24Hr);
          const isGrowth = percentChange === Math.abs(percentChange);
          const isSelected = !!tickers.find(
            (savedTicker) => savedTicker.id === ticker.id
          );
          return (
            <ListItem key={ticker.id}>
              <ListItemIcon>
                {isSelected ? (
                  <IconButton
                    onClick={() =>
                      setTickers((prevTickers) =>
                        prevTickers.filter(
                          (savedTicker) => savedTicker.id !== ticker.id
                        )
                      )
                    }
                  >
                    <CheckCircleIcon color="primary" fontSize="large" />
                  </IconButton>
                ) : (
                  <IconButton
                    onClick={() =>
                      setTickers((prevTickers) => [
                        ...prevTickers,
                        { id: ticker.id, value: ticker.symbol }
                      ])
                    }
                  >
                    <ControlPointIcon color="primary" fontSize="large" />
                  </IconButton>
                )}
              </ListItemIcon>

              <ListItemText>
                <Typography
                  component="h3"
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  {ticker.symbol}
                </Typography>
                <Typography component="h4" color="textDisabled">
                  {ticker.name}
                </Typography>
              </ListItemText>
              <Stack alignItems="flex-end">
                <Typography component="span" fontWeight="bold">
                  {Number(ticker.priceUsd).toFixed(2)}
                </Typography>
                <Typography
                  component="span"
                  color={isGrowth ? "#65c467" : "#eb4e3d"}
                  fontWeight="bold"
                >
                  {`${Number(ticker.changePercent24Hr).toFixed(3)}%`}
                </Typography>
              </Stack>
            </ListItem>
          );
        })}
      </List>
    </div>
  );
};

export default SearchTickers;
