import { useRecoilState } from "recoil";
import { Stack, List, Button, Typography } from "@mui/material";
import Ticker from "./Ticker";
import { idsState } from "@/state/ids";

const Tickers = () => {
  const [ids, setIds] = useRecoilState(idsState);
  return (
    <Stack>
      <Typography component="h2" fontSize="1.5rem">
        {`Tickers(${ids.length})`}
      </Typography>
      <List>
        {ids.map((id) => (
          <Ticker id={id} key={id} />
        ))}
      </List>
      {!!ids.length && (
        <Button
          variant="outlined"
          color="error"
          fullWidth
          onClick={() => setIds([])}
        >
          Delete all
        </Button>
      )}
    </Stack>
  );
};

export default Tickers;
