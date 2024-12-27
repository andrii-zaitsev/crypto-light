import { useRecoilValue } from "recoil";
import { modeState } from "@/state/state";
import { Mode } from "@/commonTypes";
import SelectedTickers from "./SelectedTickers";
import SearchTickers from "./SearchTickers";

const Tickers = () => {
  const mode = useRecoilValue(modeState);
  return (
    <>
      {mode === Mode.Idle && <SelectedTickers />}
      {mode === Mode.Search && <SearchTickers />}
    </>
  );
};

export default Tickers;
