import { SAVED_TICKERS_KEY } from "@/constants";

export const readSavedTickers = () => {
  const serializedTickersArray =
    localStorage.getItem(SAVED_TICKERS_KEY) || "[]";
  const savedTickers: string[] = JSON.parse(serializedTickersArray);
  return savedTickers;
};

export const updateSavedTickers = (updatedTickers: string[]) => {
  const serializedTickersArray = JSON.stringify(updatedTickers);
  localStorage.setItem(SAVED_TICKERS_KEY, serializedTickersArray);
};

export const saveTicker = (id: string) => {
  const latestTickers = readSavedTickers();
  updateSavedTickers([...latestTickers, id]);
};

export const removeTicker = (id: string) => {
  const latestTickers = readSavedTickers();
  updateSavedTickers(latestTickers.filter((tickerId) => tickerId !== id));
};
