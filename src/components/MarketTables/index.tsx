import { useState } from "react";
import { Box } from "@radix-ui/themes";
import TablesSegmentedControl from "@/components/TablesSegmentedControl";
import AllMarketsTable from "@/components/AllMarketsTable";
import YourWatchlistTable from "@/components/YourWatchlistTable";
import { CryptoAsset, View } from "@/commonTypes";

type MarketTablesProps = {
  assets: CryptoAsset[];
};

const MarketTables = ({ assets }: MarketTablesProps) => {
  const [view, setView] = useState<View>(View.All);
  const [savedCoins, setSavedCoins] = useState<string[]>(
    JSON.parse(localStorage.getItem("watchlist") || "[]")
  );

  const addToWatchlist = (assetName: string) =>
    setSavedCoins((prevCoins) => {
      const newSavedCoins = [...prevCoins, assetName];
      localStorage.setItem("watchlist", JSON.stringify(newSavedCoins));
      return newSavedCoins;
    });

  const removeFromWatchlist = (assetName: string) =>
    setSavedCoins((prevCoins) => {
      const newSavedCoins = prevCoins.filter((coin) => coin !== assetName);
      localStorage.setItem("watchlist", JSON.stringify(newSavedCoins));
      return newSavedCoins;
    });

  const watchlistAssets = assets.filter((asset) =>
    savedCoins.includes(asset.name)
  );

  return (
    <Box mb="2rem">
      <TablesSegmentedControl
        value={view}
        options={[
          { value: View.All, label: "All Markets" },
          { value: View.Saved, label: "Your Watchlist" }
        ]}
        onValueChange={(newView) => setView(newView)}
      />
      {view === View.All && (
        <AllMarketsTable
          coinsList={assets}
          watchlist={savedCoins}
          addToWatchlist={addToWatchlist}
        />
      )}
      {view === View.Saved && (
        <YourWatchlistTable
          watchlistAssets={watchlistAssets}
          removeFromWatchlist={removeFromWatchlist}
        />
      )}
    </Box>
  );
};

export default MarketTables;
