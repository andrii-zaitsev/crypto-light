import { useRecoilState } from "recoil";
import selectedTickerState from "@/state/selectedTicker";

const SelectedTicker = () => {
  const [selectedTicker, setSelectedTicker] = useRecoilState(
    selectedTickerState
  );
  return <h1>{selectedTicker.value}</h1>;
};

export default SelectedTicker;
