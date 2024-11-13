import { useMemo } from "react";

const useGetTickers = () => {
  return useMemo(() => {
    const tickers = localStorage.getItem("tickers") || "[]";
    return JSON.parse(tickers);
  }, []);
};

export default useGetTickers;
