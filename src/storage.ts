import { SAVED_TICKERS_KEY } from "@/constants";
import { Ticker } from "@/commonTypes";

export const readSavedTickers = () => {
  const serializedTickersArray =
    localStorage.getItem(SAVED_TICKERS_KEY) || "[]";
  const savedTickers: Ticker[] = JSON.parse(serializedTickersArray);
  return savedTickers;
};

export const updateSavedTickers = (updatedTickers: Ticker[]) => {
  const serializedTickersArray = JSON.stringify(updatedTickers);
  localStorage.setItem(SAVED_TICKERS_KEY, serializedTickersArray);
};

export const saveTicker = (ticker: Ticker) => {
  const latestTickers = readSavedTickers();
  updateSavedTickers([...latestTickers, ticker]);
};

export const removeTicker = (ticker: Ticker) => {
  const latestTickers = readSavedTickers();
  updateSavedTickers(
    latestTickers.filter((currentTicket) => currentTicket.id !== ticker.id)
  );
};
