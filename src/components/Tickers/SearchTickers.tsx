import { useMemo, useRef } from "react";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { useQuery } from "@tanstack/react-query";
import { useVirtualizer } from "@tanstack/react-virtual";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
  Stack,
  Box
} from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { getAssets } from "@/api";
import { searchState, tickersState, selectedTickerState } from "@/state/state";

const SearchTickers = () => {
  const search = useRecoilValue(searchState);
  const [tickers, setTickers] = useRecoilState(tickersState);
  const selectTicker = useSetRecoilState(selectedTickerState);

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

  const parentRef = useRef(null);

  const virtualizer = useVirtualizer({
    count: searchTickers.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 72,
    overscan: 5
  });

  console.log({ searchTickersL: searchTickers.length });

  return (
    <Box
      sx={{
        height: `${window.innerHeight - 100}px`,
        width: `100%`,
        overflow: "auto"
      }}
      ref={parentRef}
    >
      {searchTickers.length === 0 && (
        <Typography>{`No results for "${search}"`}</Typography>
      )}
      {!!searchTickers.length && (
        <List
          sx={{
            height: `${virtualizer.getTotalSize()}px`,
            width: "100%",
            position: "relative"
          }}
        >
          {virtualizer.getVirtualItems().map((virtualRow) => {
            const ticker = searchTickers[virtualRow.index];
            const percentChange = Number(ticker.changePercent24Hr);
            const isGrowth = percentChange === Math.abs(percentChange);
            const isSelected = !!tickers.find(
              (savedTicker) => savedTicker.id === ticker.id
            );

            return (
              <ListItem
                key={ticker.id}
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  height: `${virtualRow.size}px`,
                  transform: `translateY(${virtualRow.start}px)`,
                  "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" },
                  paddingLeft: 0
                }}
              >
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
                      sx={{
                        paddingLeft: 0,
                        "&:hover": { backgroundColor: "transparent" }
                      }}
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
                      sx={{
                        paddingLeft: 0,
                        "&:hover": { backgroundColor: "transparent" }
                      }}
                    >
                      <ControlPointIcon color="primary" fontSize="large" />
                    </IconButton>
                  )}
                </ListItemIcon>
                <Box
                  display="flex"
                  alignItems="center"
                  sx={{ width: "100%", cursor: "pointer" }}
                  onClick={() =>
                    selectTicker({ id: ticker.id, value: ticker.symbol })
                  }
                >
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
                </Box>
              </ListItem>
            );
          })}
        </List>
      )}
    </Box>
  );
};

export default SearchTickers;
