import { useSetRecoilState } from "recoil";
import CloseIcon from "@mui/icons-material/Close";
import { Stack, Typography, IconButton } from "@mui/material";
import { displayMobileSelectedTickerState } from "@/state";

const MobileSelectedTicker = () => {
  const setDisplayMobileSelectedTicker = useSetRecoilState(
    displayMobileSelectedTickerState
  );
  return (
    <Stack>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" alignItems="center">
          <Typography component="h1" fontSize="2rem" fontWeight="bold">
            XLM
          </Typography>
          <Typography component="h2" color="textDisabled" ml="1rem">
            Bitcoin
          </Typography>
        </Stack>
        <IconButton onClick={() => setDisplayMobileSelectedTicker(false)}>
          <CloseIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default MobileSelectedTicker;
