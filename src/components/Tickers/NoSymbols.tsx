import { useSetRecoilState } from "recoil";
import { Stack, Typography, Button } from "@mui/material";
import { Mode } from "@/commonTypes/tickers";
import { modeState } from "@/state/state";

const NoSymbols = () => {
  const setMode = useSetRecoilState(modeState);
  return (
    <Stack alignItems="center">
      <Typography component="h4" fontWeight="600" fontSize="1.2rem" mb="0.5rem">
        No Symbols
      </Typography>
      <Button variant="contained" onClick={() => setMode(Mode.Search)}>
        Add Symbol
      </Button>
    </Stack>
  );
};

export default NoSymbols;
