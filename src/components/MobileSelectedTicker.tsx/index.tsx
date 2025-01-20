import { useSetRecoilState } from "recoil";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { displayMobileSelectedTickerState } from "@/state";

const MobileSelectedTicker = () => {
  const setDisplayMobileSelectedTicker = useSetRecoilState(
    displayMobileSelectedTickerState
  );
  return (
    <div>
      Mobile Selected Ticker
      <IconButton onClick={() => setDisplayMobileSelectedTicker(false)}>
        <CloseIcon />
      </IconButton>
    </div>
  );
};

export default MobileSelectedTicker;
