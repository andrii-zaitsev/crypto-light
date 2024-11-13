import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  Stack,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Button,
  Typography
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CircularProgress from "@mui/material/CircularProgress";
import { tickersState } from "@/state/tickers";
import useGetTickers from "@/hooks/useGetTickers";

const Tickers = () => {
  const [isLoading, setLoading] = useState(true);
  const [tickers, setTickers] = useRecoilState(tickersState);
  const savedTickers = useGetTickers();

  useEffect(() => {
    if (tickers.length !== savedTickers.length && savedTickers.length) {
      setTickers(savedTickers);
    }
    setLoading(false);
  }, []);

  return (
    <Stack>
      <Typography component="h2" fontSize="1.5rem">
        Tickers
      </Typography>
      {isLoading && (
        <Stack alignItems="center" mt="1rem">
          <CircularProgress size="2rem" />
        </Stack>
      )}
      {!isLoading && (
        <>
          <List>
            {tickers.map(coin => (
              <ListItem
                key={coin}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon color="error" />
                  </IconButton>
                }
              >
                <ListItemText>{coin}</ListItemText>
              </ListItem>
            ))}
          </List>
          {!!tickers.length && (
            <Button variant="outlined" color="error" fullWidth>
              Delete all
            </Button>
          )}
        </>
      )}
    </Stack>
  );
};

export default Tickers;
