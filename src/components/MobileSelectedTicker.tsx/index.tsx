import { useRecoilValue, useSetRecoilState } from "recoil";
import { useQuery } from "@tanstack/react-query";
import CloseIcon from "@mui/icons-material/Close";
import { Stack, Box, Typography, IconButton } from "@mui/material";
import { selectedTickerState, displayMobileSelectedTickerState } from "@/state";
import { getTicker } from "@/api";
import Price from "@/components/SelectedTicker/Price";

const MobileSelectedTicker = () => {
  const selectedTicker = useRecoilValue(selectedTickerState);
  const { data, status } = useQuery({
    queryKey: ["tickerId", selectedTicker.id],
    queryFn: () => getTicker(selectedTicker.id)
  });

  const setDisplayMobileSelectedTicker = useSetRecoilState(
    displayMobileSelectedTickerState
  );
  return (
    <Stack>
      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" alignItems="center">
          <Typography component="h1" fontSize="2rem" fontWeight="bold">
            {selectedTicker.value}
          </Typography>
          <Typography component="h2" color="textDisabled" ml="1rem">
            {data.name}
          </Typography>
        </Stack>
        <IconButton onClick={() => setDisplayMobileSelectedTicker(false)}>
          <CloseIcon />
        </IconButton>
      </Stack>
      <Box borderTop="1px solid grey" borderBottom="1px solid grey">
        <Price price={Number(data.priceUsd)} />
      </Box>
    </Stack>
  );
};

export default MobileSelectedTicker;
