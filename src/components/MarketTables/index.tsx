import { useState } from "react";
import { Box } from "@radix-ui/themes";
import TablesSegmentedControl from "@/components/TablesSegmentedControl";
import TopAssetsTable from "@/components/TopAssetsTable";
import WatchlistTable from "@/components/WatchlistTable";
import { CryptoAsset, View } from "@/commonTypes";

type MarketTablesProps = {
  topAssets: CryptoAsset[];
};

const MarketTables = ({ topAssets }: MarketTablesProps) => {
  const [view, setView] = useState<View>(View.TopAssets);
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

  const watchlistAssets = topAssets.filter((asset) =>
    watchlist.includes(asset.name)
  );

  return (
    <Box mb="2rem">
      <TablesSegmentedControl
        value={view}
        options={[
          { value: View.TopAssets, label: "Top Assets" },
          { value: View.Watchlist, label: "Your Watchlist" }
        ]}
        onValueChange={(newView) => setView(newView)}
      />
      {view === View.TopAssets && (
        <TopAssetsTable
          topAssets={topAssets}
          watchlist={watchlist}
          addToWatchlist={addToWatchlist}
        />
      )}
      {view === View.Watchlist && (
        <WatchlistTable
          watchlistAssets={watchlistAssets}
          removeFromWatchlist={removeFromWatchlist}
        />
      )}
    </Box>
  );
};

export default MarketTables;
