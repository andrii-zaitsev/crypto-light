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
    JSON.parse(localStorage.getItem("savedCoins") || "[]")
  );

  const saveCoin = (selectedCoin: string) =>
    setSavedCoins((prevCoins) => {
      const newSavedCoins = [...prevCoins, selectedCoin];
      localStorage.setItem("savedCoins", JSON.stringify(newSavedCoins));
      return newSavedCoins;
    });

  const removeCoin = (selectedCoin: string) =>
    setSavedCoins((prevCoins) => {
      const newSavedCoins = prevCoins.filter((coin) => coin !== selectedCoin);
      localStorage.setItem("savedCoins", JSON.stringify(newSavedCoins));
      return newSavedCoins;
    });

  const savedAssets = savedCoins.reduce<CryptoAsset[]>((acc, coinName) => {
    const asset = assets.find((asset) => asset.name === coinName);
    return asset ? [...acc, asset] : acc;
  }, []);

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
          savedCoins={savedCoins}
          saveCoin={saveCoin}
        />
      )}
      {view === View.Saved && (
        <YourWatchlistTable savedCoins={savedAssets} removeCoin={removeCoin} />
      )}
    </Box>
  );
};

export default MarketTables;
