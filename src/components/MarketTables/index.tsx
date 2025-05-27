import { useState } from "react";
import { Box } from "@radix-ui/themes";
import TablesSegmentedControl from "@/components/TablesSegmentedControl";
import AllMarketsTable from "@/components/AllMarketsTable";
import WatchlistTable from "@/components/WatchlistTable";
import { CryptoAsset, View } from "@/commonTypes";

type MarketTablesProps = {
  assets: CryptoAsset[];
};

const MarketTables = ({ assets }: MarketTablesProps) => {
  const [view, setView] = useState<View>(View.All);
  const [watchlist, setWatchlist] = useState<string[]>(
    JSON.parse(localStorage.getItem("watchlist") || "[]")
  );

  const addToWatchlist = (assetName: string) =>
    setWatchlist((prevWatchlist) => {
      const newWatchlist = [...prevWatchlist, assetName];
      localStorage.setItem("watchlist", JSON.stringify(newWatchlist));
      return newWatchlist;
    });

  const removeFromWatchlist = (assetName: string) =>
    setWatchlist((prevWatchlist) => {
      const newWatchlist = prevWatchlist.filter(
        (watchlistAssetName) => watchlistAssetName !== assetName
      );
      localStorage.setItem("watchlist", JSON.stringify(newWatchlist));
      return newWatchlist;
    });

  const watchlistAssets = assets.filter((asset) =>
    watchlist.includes(asset.name)
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
          assets={assets}
          watchlist={watchlist}
          addToWatchlist={addToWatchlist}
        />
      )}
      {view === View.Saved && (
        <WatchlistTable
          watchlistAssets={watchlistAssets}
          removeFromWatchlist={removeFromWatchlist}
        />
      )}
    </Box>
  );
};

export default MarketTables;
